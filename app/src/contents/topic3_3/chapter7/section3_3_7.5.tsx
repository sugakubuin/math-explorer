import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RieszRepresentationTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                測度論の締めくくりとして、関数空間 <InlineMath math="L^p" /> の構造を決定づける極めて重要な定理である <b>リースの表現定理 (Riesz Representation Theorem)</b> を学びます。
                この定理は、<InlineMath math="L^p" /> 空間上の線形な働き（汎関数）が、別の関数との「積の積分」という非常に扱いやすい形で一意に表現できることを示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">$L^p$ 空間の双対性</h2>

            <p>
                バナッハ空間 <InlineMath math="V" /> に対し、その上の有界線形汎関数全体の空間を <b>双対空間 (dual space)</b> と呼び、<InlineMath math="V^*" /> と記します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.5-1 (リースの表現定理)">
                <p>
                    <InlineMath math="1 < p < \infty" /> とし、<InlineMath math="q" /> を <InlineMath math="1/p + 1/q = 1" /> を満たす共役指数とする。
                    <InlineMath math="L^p(X, \mu)^*" /> 上の任意の有界線形汎関数 <InlineMath math="L" /> に対して、ある <InlineMath math="g \in L^q(X, \mu)" /> が一意に存在して、任意の <InlineMath math="f \in L^p(X, \mu)" /> に対して次のように書ける：
                    <BlockMath math="L(f) = \int_X f(x)g(x) \, d\mu(x)" />
                    さらに、汎関数のノルムは <InlineMath math="g" /> の <InlineMath math="L^q" /> ノルムに一致する：
                    <BlockMath math="\|L\| = \|g\|_q" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    証明の核となるのは、§7.3 で学んだ <b>ラドン・ニコディムの定理</b> です。
                    まず、特性関数 <InlineMath math="\mathbf{1}_A" /> に対する汎関数の値を定義し、それを測度 <InlineMath math="\nu(A) = L(\mathbf{1}_A)" /> と見なします。
                    この測度は元の測度 <InlineMath math="\mu" /> に関して絶対連続であることを示すことができ、ラドン・ニコディム微分の存在から密度関数 <InlineMath math="g" /> が得られます。
                    その後、ヘルダーの不等式を用いて、この表現が全ての <InlineMath math="L^p" /> 関数に対して有効であることを示します。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特殊なケースと重要性</h2>

            <ContentBox type="example" title="Example 7.5-1 (ヒルベルト空間の場合)">
                <p>
                    <InlineMath math="p = 2" /> の場合、共役指数も <InlineMath math="q = 2" /> となります。
                    このとき、リースの表現定理は「<InlineMath math="L^2" /> 上の汎関数は、ある <InlineMath math="g \in L^2" /> との内積で書ける」という、線形代数における自己双対的な結果の無限次元版となります。
                    これはフーリエ解析や関数解析の基礎となります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="端点 (p=1, p=∞) の扱い">
                <p>
                    <InlineMath math="p=1" /> の場合でも、<InlineMath math="q=\infty" /> として同様の等価性が成り立ちます（<InlineMath math="\mu" /> が <InlineMath math="\sigma" />-有限の場合）。
                    しかし、<InlineMath math="p=\infty" /> の双対は一般に <InlineMath math="L^1" /> よりも <b>広く</b> なり、より複雑な測度の空間となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>リースの表現定理</b> は、<InlineMath math="L^p" /> 空間の「働き（汎関数）」と <InlineMath math="L^q" /> 空間の「元（関数）」が 1 対 1 に対応することを示す。</li>
                    <li>この対応はラドン・ニコディムの定理という強力な土台の上に築かれている。</li>
                    <li>この定理により、無限次元の関数空間であっても、有限次元のベクトル空間に近い直観で線形作用素を扱うことが可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
