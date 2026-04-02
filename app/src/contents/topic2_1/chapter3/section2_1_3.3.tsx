import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DimensionTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、線形写像 <InlineMath math="f: V \to W" /> から作られる2つの部分空間、「核（<InlineMath math="\ker f" />）」と「像（<InlineMath math="\mathrm{Im}\, f" />）」について学びました。
                驚くべきことに、これら2つの空間の「次元（空間の広さ）」を足し合わせると、元の空間 <InlineMath math="V" /> の次元に必ず一致するという美しい定理が成り立ちます。<br />
                これを<strong>次元定理（核ー像定理 / Rank-Nullity Theorem）</strong>と呼びます。線形代数における最も基礎的で強力な定理の1つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">次元定理（核ー像定理）</h2>

            <ContentBox type="theorem" title="Theorem 3.3-1 （次元定理 / 核ー像定理）">
                <p>
                    有限次元のベクトル空間 <InlineMath math="V" /> からベクトル空間 <InlineMath math="W" /> への線形写像 <InlineMath math="f: V \to W" /> に対して、次が成り立つ。
                </p>
                <BlockMath math="\dim V = \dim (\ker f) + \dim (\mathrm{Im}\, f)" />
                <p className="mt-2 text-sm">
                    ※ 像の次元 <InlineMath math="\dim (\mathrm{Im}\, f)" /> を<strong>階数（Rank）</strong>、核の次元 <InlineMath math="\dim (\ker f)" /> を<strong>退化次数（Nullity）</strong>と呼ぶことから、Rank-Nullity Theoremとも呼ばれます。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （次元定理の証明）">
                <p>
                    <InlineMath math="\dim V = n" />、<InlineMath math="\dim (\ker f) = k" /> とおく。私たちが証明すべきことは <InlineMath math="\dim (\mathrm{Im}\, f) = n - k" /> となることである。
                </p>

                <p className="font-bold">ステップ1：基底の設定と拡張</p>
                <p>
                    <InlineMath math="\ker f" /> は <InlineMath math="V" /> の部分空間なので、その基底を <InlineMath math="\{\boldsymbol{u}_1, \dots, \boldsymbol{u}_k\}" /> とする。
                    Theorem 2.4-1（基底の拡張定理）により、これらに適切な <InlineMath math="n - k" /> 個のベクトル <InlineMath math="\boldsymbol{v}_1, \dots, \boldsymbol{v}_{n-k}" /> を付け加えて、<InlineMath math="V" /> 全体の基底
                </p>
                <BlockMath math="B = \{\boldsymbol{u}_1, \dots, \boldsymbol{u}_k, \boldsymbol{v}_1, \dots, \boldsymbol{v}_{n-k}\}" />
                <p>
                    を作ることができる。
                </p>

                <p className="font-bold mt-4">ステップ2：像空間の基底の候補</p>
                <p>
                    このとき、<InlineMath math="\{\boldsymbol{v}_1, \dots, \boldsymbol{v}_{n-k}\}" /> の <InlineMath math="f" /> による像、すなわち
                </p>
                <BlockMath math="C = \{f(\boldsymbol{v}_1), \dots, f(\boldsymbol{v}_{n-k})\}" />
                <p>
                    が <InlineMath math="\mathrm{Im}\, f" /> の基底となることを示せば、<InlineMath math="\dim (\mathrm{Im}\, f) = n - k" /> は証明される。
                    そのためには、<InlineMath math="C" /> が <InlineMath math="\mathrm{Im}\, f" /> を生成することと、<InlineMath math="C" /> が線形独立であることの2つを示せばよい。
                </p>

                <p className="font-bold mt-4">ステップ3：生成系であることの証明</p>
                <p>
                    任意の像の要素 <InlineMath math="\boldsymbol{w} \in \mathrm{Im}\, f" /> をとる。定義より <InlineMath math="\boldsymbol{w} = f(\boldsymbol{x})" /> となる <InlineMath math="\boldsymbol{x} \in V" /> がある。<br />
                    基底 <InlineMath math="B" /> を用いて <InlineMath math="\boldsymbol{x} = c_1\boldsymbol{u}_1 + \dots + c_k\boldsymbol{u}_k + d_1\boldsymbol{v}_1 + \dots + d_{n-k}\boldsymbol{v}_{n-k}" /> と表せる。
                    ここで線形写像 <InlineMath math="f" /> を施すと、
                </p>
                <BlockMath math="f(\boldsymbol{x}) = \sum_{i=1}^k c_i f(\boldsymbol{u}_i) + \sum_{j=1}^{n-k} d_j f(\boldsymbol{v}_j)" />
                <p>
                    <InlineMath math="\boldsymbol{u}_i \in \ker f" /> であるため、<InlineMath math="f(\boldsymbol{u}_i) = \boldsymbol{0}" /> となる。よって第1項はすべて消え、
                </p>
                <BlockMath math="\boldsymbol{w} = f(\boldsymbol{x}) = d_1 f(\boldsymbol{v}_1) + \dots + d_{n-k} f(\boldsymbol{v}_{n-k})" />
                <p>
                    となり、<InlineMath math="\boldsymbol{w}" /> は <InlineMath math="C" /> の元で張られることがわかった。
                </p>

                <p className="font-bold mt-4">ステップ4：線形独立性の証明</p>
                <p>
                    次に、<InlineMath math="C" /> の線形結合が零ベクトルになる関係式を仮定する。
                </p>
                <BlockMath math="a_1 f(\boldsymbol{v}_1) + \dots + a_{n-k} f(\boldsymbol{v}_{n-k}) = \boldsymbol{0}_W" />
                <p>
                    線形性より、左辺は <InlineMath math="f(a_1\boldsymbol{v}_1 + \dots + a_{n-k}\boldsymbol{v}_{n-k})" /> となる。よって、全体を写して零ベクトルになるのであれば、その中身は核 <InlineMath math="\ker f" /> に属している。すなわち
                </p>
                <BlockMath math="a_1\boldsymbol{v}_1 + \dots + a_{n-k}\boldsymbol{v}_{n-k} \in \ker f" />
                <p>
                    これは <InlineMath math="\ker f" /> の基底 <InlineMath math="\{\boldsymbol{u}_1, \dots, \boldsymbol{u}_k\}" /> の線形結合で書けることを意味する。
                </p>
                <BlockMath math="a_1\boldsymbol{v}_1 + \dots + a_{n-k}\boldsymbol{v}_{n-k} = b_1\boldsymbol{u}_1 + \dots + b_k\boldsymbol{u}_k" />
                <p>
                    移項すると、
                </p>
                <BlockMath math="- b_1\boldsymbol{u}_1 - \dots - b_k\boldsymbol{u}_k + a_1\boldsymbol{v}_1 + \dots + a_{n-k}\boldsymbol{v}_{n-k} = \boldsymbol{0}_V" />
                <p>
                    しかし、<InlineMath math="B = \{\boldsymbol{u}_1,\dots,\boldsymbol{u}_k, \boldsymbol{v}_1, \dots, \boldsymbol{v}_{n-k}\}" /> は <InlineMath math="V" /> 全体の基底（とくに線形独立）である。
                    したがって係数はすべて0でなければならない。ゆえにすべての <InlineMath math="a_j = 0" /> となる。
                </p>
                <p>
                    これは <InlineMath math="C = \{f(\boldsymbol{v}_1), \dots, f(\boldsymbol{v}_{n-k})\}" /> が線形独立であることを意味する。
                </p>
                <p className="mt-4">
                    以上より、<InlineMath math="C" /> は <InlineMath math="\mathrm{Im}\, f" /> の基底であり、その個数は <InlineMath math="n - k" /> 個である。定理は証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="定理の意味すること（次元保存の法則）">
                <p>
                    成分を持つベクトル空間を何らかの関数 <InlineMath math="f" /> に通したとき、結果の集まり（像）は元の空間より「小さくあるいは潰れて」しまうことがあります。<br />
                    次元定理は、その「潰れてしまった次元数（核の次元）」と「生き残った次元数（像の次元）」を足せば、必ず「元の次元数」のまま保存されていると教えてくれています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用：単射と全射の判定</h2>

            <p>
                次元定理を使うと、定義域と値域の次元が同じ場合、単射・全射・全単射の条件が完全に一致するという強力な系が得られます。
            </p>

            <ContentBox type="proposition" title="Corollary 3.3-1 （次元による単射・全射の判定）">
                <p>
                    有限次元のベクトル空間 <InlineMath math="V, W" /> が<strong>同じ次元</strong>をもつとき（<InlineMath math="\dim V = \dim W" />）、線形写像 <InlineMath math="f: V \to W" /> に対して以下の3つの条件は互いに同値である。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="f" /> は単射である。</li>
                    <li><InlineMath math="f" /> は全射である。</li>
                    <li><InlineMath math="f" /> は全単射（同型写像）である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    次元定理 <InlineMath math="\dim V = \dim (\ker f) + \dim (\mathrm{Im}\, f)" /> を用いる。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>単射 <InlineMath math="\Rightarrow" /> 全射：</strong><br />
                        <InlineMath math="f" /> が単射だとすると Proposition 3.2-3 より <InlineMath math="\ker f = \{\boldsymbol{0}\}" />、すなわち <InlineMath math="\dim (\ker f) = 0" /> である。<br />
                        次元定理より <InlineMath math="\dim (\mathrm{Im}\, f) = \dim V" />。<br />
                        仮定より <InlineMath math="\dim V = \dim W" /> なので、<InlineMath math="\dim (\mathrm{Im}\, f) = \dim W" /> となる。<br />
                        <InlineMath math="W" /> の部分空間である <InlineMath math="\mathrm{Im}\, f" /> が <InlineMath math="W" /> と同じ次元を持つので、<InlineMath math="\mathrm{Im}\, f = W" />。よって <InlineMath math="f" /> は全射である。
                    </li>
                    <li>
                        <strong>全射 <InlineMath math="\Rightarrow" /> 単射：</strong><br />
                        <InlineMath math="f" /> が全射だとすると <InlineMath math="\mathrm{Im}\, f = W" />、すなわち <InlineMath math="\dim (\mathrm{Im}\, f) = \dim W" /> である。<br />
                        仮定の <InlineMath math="\dim V = \dim W" /> と次元定理から、<InlineMath math="\dim V = \dim (\ker f) + \dim V" /> と比較して <InlineMath math="\dim (\ker f) = 0" /> となる。<br />
                        これは <InlineMath math="\ker f = \{\boldsymbol{0}\}" /> を意味し、Proposition 3.2-3 より <InlineMath math="f" /> は単射である。
                    </li>
                </ul>
                <p>
                    全単射は全射かつ単射のことであるから、以上により1, 2, 3はすべて互いに同値であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>線形写像において、定義域の次元は「核の次元」と「像の次元」の和に等しい（Theorem 3.3-1 次元定理）。</li>
                    <li>次元定理は「情報の保存則」のようなものであり、写像によって潰された成分（核）と生き残った成分（像）を足せば元通りになることを示している（Remark）。</li>
                    <li>同じ次元の空間同士の線形写像では、「単射であること」と「全射であること」が全く同じ意味になる（Corollary 3.3-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
