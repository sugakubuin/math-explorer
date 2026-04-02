import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function LinearIndependenceTests() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で線形独立・線形従属の定義を学びました。しかし、与えられた複数のベクトルが線形独立かどうかを具体的に判定するにはどうすればよいでしょうか？<br />
                ここでは、連立一次方程式や行列の「行基本変形」を用いた実用的な判定法と、行列の「零空間（カーネル）」を通した理論的な見方について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 行基本変形を用いた判定
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">行基本変形（連立方程式）を用いた判定</h2>

            <p>
                数ベクトル空間 <InlineMath math="\mathbb{R}^m" /> における <InlineMath math="n" /> 個のベクトル <InlineMath math="\boldsymbol{v}_1, \dots, \boldsymbol{v}_n" /> があるとします。<br />
                線形独立性の定義式 <InlineMath math="x_1\boldsymbol{v}_1 + x_2\boldsymbol{v}_2 + \dots + x_n\boldsymbol{v}_n = \boldsymbol{0}" /> を満たす未知のスカラー <InlineMath math="x_1, \dots, x_n" /> を探す問題は、実はこれらを列ベクトルとして並べた行列 <InlineMath math="A = [\boldsymbol{v}_1 \ \boldsymbol{v}_2 \ \dots \ \boldsymbol{v}_n]" /> を用いた連立一次方程式 <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> を解くことと同じです。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-1 （行基本変形による線形独立の判定手順）">
                <p>
                    <InlineMath math="m" /> 次元列ベクトル <InlineMath math="\boldsymbol{v}_1, \dots, \boldsymbol{v}_n" /> に対し、これらを列ベクトルとする <InlineMath math="m \times n" /> 行列 <InlineMath math="A = [\boldsymbol{v}_1 \ \dots \ \boldsymbol{v}_n]" /> を作る。<br />
                    この行列 <InlineMath math="A" /> に対して行基本変形を行い、階段行列（行階段形） <InlineMath math="U" /> に変形したときの<strong>ピボット（各行の最も左にある0でない成分）の数</strong>を <InlineMath math="r" /> （行列の階数・ランク）とする。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><InlineMath math="r = n" /> （ピボットの数が元のベクトルの本数と等しい）ならば、これらは<strong>線形独立</strong>である。<br />
                        （連立方程式 <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> は自明な解 <InlineMath math="\boldsymbol{x} = \boldsymbol{0}" /> しかもたない）
                    </li>
                    <li><InlineMath math="r < n" /> ならば、これらは<strong>線形従属</strong>である。<br />
                        （自由な変数（パラメータ）が存在し、無数に非自明な解をもつ）
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    連立一次方程式 <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> において、行基本変形は解集合を変化させない。変形後の階段行列 <InlineMath math="U" /> において、
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        もし <InlineMath math="r = n" /> であれば、<InlineMath math="n" /> 個のすべての列にピボットが存在する。これは対応する未知数 <InlineMath math="x_1, \dots, x_n" /> （自由度が全くない状態）がすべて <InlineMath math="0" /> と一意に定まることを意味する。よって定義より線形独立である。
                    </li>
                    <li>
                        もし <InlineMath math="r < n" /> であれば、少なくとも <InlineMath math="n - r" /> 個の列にはピボットが存在しない。これらの列に対応する未知数は任意の実数を取れる「自由変数」となる。自由変数を0以外の値に設定すれば、すべてが0ではない非自明な解 <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" /> が得られるため、定義より線形従属である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                ※とくに、ベクトルが <InlineMath math="m" /> 次元であるとき、ベクトルの本数 <InlineMath math="n" /> が次元を超える <InlineMath math="(n > m)" /> 場合は、階段行列の行数から明らかに <InlineMath math="r \leq m < n" /> となるため、証明するまでもなく「必ず線形従属」になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 零空間との関係
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">零空間（カーネル）との関係</h2>

            <p>
                上の「連立方程式 <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> の解」という考え方を、部分空間の言葉で表現したのが「零空間」です。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 （零空間・核空間）">
                <p>
                    <InlineMath math="m \times n" /> 行列 <InlineMath math="A" /> に対して、斉次連立一次方程式 <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> を満たすような <InlineMath math="\boldsymbol{x} \in \mathbb{R}^n" /> 全体の集合を <InlineMath math="A" /> の<strong>零空間（Null space）</strong>または<strong>核（Kernel）</strong>といい、<InlineMath math="\mathrm{Ker}(A)" /> または <InlineMath math="N(A)" /> と表す。
                </p>
                <BlockMath math="\mathrm{Ker}(A) = \{ \boldsymbol{x} \in \mathbb{R}^n \mid A\boldsymbol{x} = \boldsymbol{0} \}" />
                <p className="mt-2 text-sm">※和とスカラー倍について閉じているため、零空間は <InlineMath math="\mathbb{R}^n" /> の部分空間となります。</p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.2-1 （線形独立と零空間の自明性）">
                <p>
                    行列 <InlineMath math="A = [\boldsymbol{v}_1 \ \dots \ \boldsymbol{v}_n]" /> の列ベクトルが<strong>線形独立</strong>である必要十分条件は、その零空間が零ベクトルのみからなること（自明であること）、すなわち
                </p>
                <BlockMath math="\mathrm{Ker}(A) = \{\boldsymbol{0}\}" />
                <p>
                    となることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> という式は、成分表示すると <InlineMath math="x_1\boldsymbol{v}_1 + \dots + x_n\boldsymbol{v}_n = \boldsymbol{0}" /> という線形結合の式に他ならない。<br />
                    列ベクトルが線形独立であるということは、この線形結合の式が成り立つのが <InlineMath math="x_1 = \dots = x_n = 0" /> （すなわち <InlineMath math="\boldsymbol{x} = \boldsymbol{0}" />）の場合に限るということと同値である。<br />
                    これはまさに、方程式 <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> を満たす解 <InlineMath math="\boldsymbol{x}" /> が <InlineMath math="\boldsymbol{0}" /> のみであること、すなわち <InlineMath math="\mathrm{Ker}(A) = \{\boldsymbol{0}\}" /> と同値である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>数ベクトルが線形独立かどうかは、それらを並べた行列を階段行列に変形し、<strong>ピボットの数がベクトルの本数と等しいか</strong>を見ることで判定できる（Proposition 2.2-1）。</li>
                    <li><InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> を満たすベクトル <InlineMath math="\boldsymbol{x}" /> の集まりを<strong>零空間</strong>と呼ぶ（Definition 2.2-1）。</li>
                    <li>「列ベクトルが線形独立である」ことと「零空間が <InlineMath math="\{\boldsymbol{0}\}" /> のみである」ことは全く同じ事実を別の見方で言い換えたものである（Theorem 2.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
