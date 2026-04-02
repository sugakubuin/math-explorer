import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RadonNikodymTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分積分学において「積分の微分」を考えるように、測度論においても「ある測度が別の測度に対してどのように変化するか」という <b>密度 (density)</b> を考えることができます。
                本節では、測度論の最も強力な道具の一つである <b>ラドン・ニコディムの定理</b> を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">測度の絶対連続性</h2>

            <p>
                ラドン・ニコディムの定理が成り立つためには、二つの測度の間に「零集合の包含関係」が必要です。
            </p>

            <ContentBox type="definition" title="Definition 7.3-1 (測度の絶対連続性)">
                <p>
                    <InlineMath math="\mu" /> を非負測度、<InlineMath math="\nu" /> を符号付き測度とする。
                    任意の可測集合 <InlineMath math="A" /> に対して
                    <BlockMath math="\mu(A) = 0 \implies \nu(A) = 0" />
                    が成り立つとき、<InlineMath math="\nu" /> は <InlineMath math="\mu" /> に関して <b>絶対連続 (absolutely continuous)</b> であるといい、<InlineMath math="\nu \ll \mu" /> と記す。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラドン・ニコディムの定理</h2>

            <p>
                絶対連続性は、ある測度を別の測度の「積分」として表現できるための必要十分条件となります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (ラドン・ニコディムの定理)">
                <p>
                    <InlineMath math="\mu" /> を <InlineMath math="\sigma" />-有限な非負測度、<InlineMath math="\nu" /> を <InlineMath math="\sigma" />-有限な符号付き測度とする。
                    <InlineMath math="\nu \ll \mu" /> であるとき、ある可測関数 <InlineMath math="f" /> が存在して、任意の可測集合 <InlineMath math="A" /> に対して
                    <BlockMath math="\nu(A) = \int_A f \, d\mu" />
                    が成り立つ。
                    このような <InlineMath math="f" /> は <InlineMath math="\mu" />-a.e. で一意に定まり、これを <b>ラドン・ニコディム微分 (Radon-Nikodym derivative)</b> と呼び、次のように記す：
                    <BlockMath math="f = \frac{d\nu}{d\mu}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    証明にはいくつかの手法がありますが、一つの方法は、<InlineMath math="L^2" /> 空間における射影（ベクトルの成分分解のようなもの）を用いるものです。
                    あるいは、特定の符号付き測度のハーン分解を繰り返すことで、上界を達成するような関数 <InlineMath math="f" /> を近似的に構成し、極限をとる手法も一般的です。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の意義と応用</h2>

            <p>
                この定理は、多くの分野で基礎的な理論を提供します。
            </p>

            <ContentBox type="example" title="Example 7.3-1 (確率密度関数)">
                <p>
                    確率論において、累積分布関数 <InlineMath math="P(X \leq x)" /> がルベーグ測度に関して絶対連続であれば、その「密度」が存在し、それが <b>確率密度関数 (PDF)</b> となります。
                    ラドン・ニコディムの定理は、この密度関数の存在を測度論的な観点から厳密に保証しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="期待値と条件付き期待値">
                <p>
                    統計学における <b>条件付き期待値</b> の厳密な定義も、ラドン・ニコディムの定理に依存しています。
                    特定の情報（部分 <InlineMath math="\sigma" />-加法族）に基づいた期待値を構成する際、この定理がその存在証明の核となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>絶対連続性</b> (<InlineMath math="\nu \ll \mu" />) は、零集合の振る舞いの一致を要求する。</li>
                    <li><b>ラドン・ニコディムの定理</b> は、絶対連続な測度が常に「密度関数による積分」の形で書けることを保証する。</li>
                    <li>この密度関数（<b>ラドン・ニコディム微分</b>）は、確率論や統計学における基本的な概念の厳密な基礎となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
