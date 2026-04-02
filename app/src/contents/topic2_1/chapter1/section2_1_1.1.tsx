import { InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function VectorSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「線形代数学I」では、行ベクトルや列ベクトルといった「数ベクトル」とその演算、そして行列を通じた操作を中心に学んできました。
                「線形代数学II」では、これらをより抽象化し、「ベクトル全体の集まり」としての空間そのものの性質を調べることから始めます。
                これにより、多項式や関数といった一見ベクトルには見えないものも「ベクトル」として統一的に扱うことができるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 ベクトル空間の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル空間の定義と公理</h2>

            <p>
                ある集合が「ベクトル空間」と呼ばれるためには、和とスカラー倍の演算が定義されており、それらが特定の規則（公理）を満たす必要があります。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 （ベクトル空間 / Vector Space）">
                <p>
                    集合 <InlineMath math="V" /> と、スカラーの集合（体） <InlineMath math="K" /> （通常は実数体 <InlineMath math="\mathbb{R}" /> または複素数体 <InlineMath math="\mathbb{C}" />）について、
                    <InlineMath math="V" /> の任意の元 <InlineMath math="\boldsymbol{u}, \boldsymbol{v}, \boldsymbol{w}" /> に対する和 <InlineMath math="\boldsymbol{u} + \boldsymbol{v} \in V" /> と、任意の <InlineMath math="c \in K" /> に対するスカラー倍 <InlineMath math="c\boldsymbol{u} \in V" /> が定義されており、
                    以下の8つの公理を満たすとき、<InlineMath math="V" /> を <InlineMath math="K" /> 上の<strong>ベクトル空間（線形空間）</strong>といい、その元を<strong>ベクトル</strong>と呼ぶ。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
                    <div>
                        <p className="font-bold">【和に関する公理】</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li><strong>結合法則：</strong> <InlineMath math="(\boldsymbol{u} + \boldsymbol{v}) + \boldsymbol{w} = \boldsymbol{u} + (\boldsymbol{v} + \boldsymbol{w})" /></li>
                            <li><strong>交換法則：</strong> <InlineMath math="\boldsymbol{u} + \boldsymbol{v} = \boldsymbol{v} + \boldsymbol{u}" /></li>
                            <li><strong>零ベクトルの存在：</strong> ある <InlineMath math="\boldsymbol{0} \in V" /> が存在して、すべての <InlineMath math="\boldsymbol{u}" /> に対して <InlineMath math="\boldsymbol{u} + \boldsymbol{0} = \boldsymbol{u}" /></li>
                            <li><strong>逆ベクトルの存在：</strong> 各 <InlineMath math="\boldsymbol{u}" /> に対して、<InlineMath math="\boldsymbol{u} + (-\boldsymbol{u}) = \boldsymbol{0}" /> となる <InlineMath math="-\boldsymbol{u} \in V" /> が存在する</li>
                        </ol>
                    </div>
                    <div>
                        <p className="font-bold mt-2 md:mt-0">【スカラー倍に関する公理】</p>
                        <ol className="list-decimal pl-5 space-y-1" start={5}>
                            <li><strong>スカラー乗法の結合法則：</strong> <InlineMath math="c(d\boldsymbol{u}) = (cd)\boldsymbol{u}" /></li>
                            <li><strong>分配法則 1：</strong> <InlineMath math="c(\boldsymbol{u} + \boldsymbol{v}) = c\boldsymbol{u} + c\boldsymbol{v}" /></li>
                            <li><strong>分配法則 2：</strong> <InlineMath math="(c + d)\boldsymbol{u} = c\boldsymbol{u} + d\boldsymbol{u}" /></li>
                            <li><strong>単位元の作用：</strong> <InlineMath math="1\boldsymbol{u} = \boldsymbol{u}" /> （1は <InlineMath math="K" /> の乗法単位元）</li>
                        </ol>
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-1 （ベクトル空間の例）">
                <ul className="list-disc pl-5 mt-2 space-y-3">
                    <li>
                        <strong>数ベクトル空間 <InlineMath math="\mathbb{R}^n" />：</strong> 要素が <InlineMath math="n" /> 個の実数の組で表される空間。最も身近なベクトル空間。
                    </li>
                    <li>
                        <strong>多項式空間 <InlineMath math="P_n(x)" />：</strong> <InlineMath math="x" /> についての <InlineMath math="n" /> 次以下の多項式全体。和 <InlineMath math="(x^2 + 1) + (2x) = x^2 + 2x + 1" /> も、スカラー倍 <InlineMath math="3(x^2 - 1) = 3x^2 - 3" /> も同じ空間に属し、演算規則を満たすのでベクトル空間である。
                    </li>
                    <li>
                        <strong>関数空間 <InlineMath math="C(\mathbb{R})" />：</strong> 実数全体で連続な関数 <InlineMath math="f(x)" /> 全体の集合。<InlineMath math="(f+g)(x) = f(x)+g(x)" /> のように関数同士の和が定義される。
                    </li>
                    <li>
                        <strong>行列空間 <InlineMath math="M_{m \times n}(\mathbb{R})" />：</strong> <InlineMath math="m \times n" /> 行列全体の集合。行列の和とスカラー倍の性質により、これもベクトル空間となる。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基本的な性質
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル空間の基本性質とスカラー体</h2>

            <ContentBox type="proposition" title="Proposition 1.1-1 （ベクトル空間の基本性質）">
                <p>
                    任意のベクトル空間 <InlineMath math="V" /> において、以下の性質が成り立つ。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><strong>零ベクトルの一意性：</strong> 条件を満たす <InlineMath math="\boldsymbol{0}" /> は、空間内にただ1つ存在する。</li>
                    <li><strong>逆元の一意性：</strong> 任意の <InlineMath math="\boldsymbol{u}" /> に対し、逆元 <InlineMath math="-\boldsymbol{u}" /> はただ1つ存在する。</li>
                    <li><strong>零スカラー・零ベクトルの性質：</strong> <InlineMath math="0\boldsymbol{u} = \boldsymbol{0}" />、かつ <InlineMath math="c\boldsymbol{0} = \boldsymbol{0}" /> が成り立つ（左辺の <InlineMath math="0" /> はスカラー、右辺の <InlineMath math="\boldsymbol{0}" /> は零ベクトル）。</li>
                    <li><InlineMath math="(-1)\boldsymbol{u} = -\boldsymbol{u}" /> が成り立つ。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof （性質 1, 3 の証明）">
                <p className="font-bold">性質 1: 零ベクトルの一意性</p>
                <p>
                    2つの零ベクトル <InlineMath math="\boldsymbol{0}_1, \boldsymbol{0}_2" /> が存在すると仮定する。<br />
                    <InlineMath math="\boldsymbol{0}_1" /> を零ベクトルとみなすと、<InlineMath math="\boldsymbol{0}_2 + \boldsymbol{0}_1 = \boldsymbol{0}_2" />。<br />
                    <InlineMath math="\boldsymbol{0}_2" /> を零ベクトルとみなすと、<InlineMath math="\boldsymbol{0}_1 + \boldsymbol{0}_2 = \boldsymbol{0}_1" />。<br />
                    和の交換法則より <InlineMath math="\boldsymbol{0}_1 + \boldsymbol{0}_2 = \boldsymbol{0}_2 + \boldsymbol{0}_1" /> であるから、<InlineMath math="\boldsymbol{0}_1 = \boldsymbol{0}_2" /> となり一意に定まる。
                </p>

                <p className="font-bold mt-4">性質 3: <InlineMath math="0\boldsymbol{u} = \boldsymbol{0}" /></p>
                <p>
                    公理より <InlineMath math="0\boldsymbol{u} = (0+0)\boldsymbol{u} = 0\boldsymbol{u} + 0\boldsymbol{u}" />。<br />
                    両辺に <InlineMath math="0\boldsymbol{u}" /> の逆元 <InlineMath math="-(0\boldsymbol{u})" /> を足すと、<br />
                    <InlineMath math="0\boldsymbol{u} + -(0\boldsymbol{u}) = (0\boldsymbol{u} + 0\boldsymbol{u}) + -(0\boldsymbol{u})" /><br />
                    <InlineMath math="\boldsymbol{0} = 0\boldsymbol{u} + (0\boldsymbol{u} + -(0\boldsymbol{u}))" /><br />
                    <InlineMath math="\boldsymbol{0} = 0\boldsymbol{u} + \boldsymbol{0} = 0\boldsymbol{u}" />。ゆえに示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="スカラー体の役割（ℝ と ℂ）">
                <p>
                    ベクトル空間は「どの数（スカラー）の集合の上で考えるか」によって性質が変わります。<br />
                    実数体 <InlineMath math="\mathbb{R}" /> 上で考える場合（実ベクトル空間）と、複素数体 <InlineMath math="\mathbb{C}" /> 上で考える場合（複素ベクトル空間）が代表的です。
                    特に固有値を扱う際には、実行列であっても複素数の範囲で考える（<InlineMath math="\mathbb{C}" /> 上のベクトル空間とみなす）ことが不可欠になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ベクトル空間</strong>とは、和とスカラー倍が定義され、8つの公理を満たす集合のことである（Definition 1.1-1）。</li>
                    <li>数ベクトル空間（<InlineMath math="\mathbb{R}^n" />）だけでなく、多項式・関数・行列の集合も、公理を満たすためベクトル空間として扱える（Example 1.1-1）。</li>
                    <li>ベクトル空間の公理から、零ベクトルや逆元の一意性など、演算の基本的な性質が論理的に導かれる（Proposition 1.1-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
