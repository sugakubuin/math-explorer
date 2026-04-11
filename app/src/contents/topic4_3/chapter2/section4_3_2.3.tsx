import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DoublePeriodicFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、複素平面上の格子 <InlineMath math="\Lambda" /> と、それによって構成される複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> について学びました。本節では、この格子に対して周期性を持つ関数、すなわち「二重周期関数」の概念を厳密に定義します。このような関数は、複素解析学および幾何学において極めて重要な対象であり、特に有理型であるものを「楕円関数」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">楕円関数の定義</h2>

            <p>
                ある方向への周期性を持つ関数（例えば三角関数や指数関数など）は一重周期関数と呼ばれます。しかし、複素平面上には独立な2つの方向に対する周期性を同時に満たす関数を考えることができます。まずは、楕円関数の基本的な定義を与えましょう。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (楕円関数)">
                <p>
                    複素平面 <InlineMath math="\mathbb{C}" /> 上の有理型関数 <InlineMath math="f" /> が、すべての格子点 <InlineMath math="\omega \in \Lambda" /> に対して
                </p>
                <BlockMath math="f(z + \omega) = f(z)" />
                <p>
                    を満たすとき、<InlineMath math="f" /> を格子 <InlineMath math="\Lambda" /> に関する<b>楕円関数（elliptic function）</b>と呼ぶ。すなわち、楕円関数とは複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> 上の有理型関数のことである。
                </p>
            </ContentBox>

            <p>
                抽象的な定義だけではイメージが掴みにくいため、いくつか具体的な例を見てみましょう。どのような関数が楕円関数となり得るのでしょうか。
            </p>

            <ContentBox type="example" title="Example 2.3-1">
                <p>
                    定数関数 <InlineMath math="f(z) = c" />（<InlineMath math="c \in \mathbb{C}" />）は、任意の <InlineMath math="\omega \in \Lambda" /> に対して明らかに <InlineMath math="f(z+\omega) = f(z)" /> を満たし、極も持たないため、自明な楕円関数である。
                </p>
                <p>
                    一方で、指数関数 <InlineMath math="f(z) = e^z" /> を考える。これは虚数軸方向（例えば周期 <InlineMath math="2\pi i" />）には周期性を持つが、実数軸方向など別の独立な方向には周期を持たない。したがって、二つの独立な周期からなる格子 <InlineMath math="\Lambda" /> に対して二重周期性を持つことはなく、楕円関数ではない。
                </p>
            </ContentBox>

            <p>
                この例からわかるように、整関数（極を持たない有理型関数）であって自明でない楕円関数を見つけることは容易ではありません。実際、そのような関数が存在しないことは次節で証明されます。
            </p>

            <ContentBox type="remark" title="複素トーラス上の有理型関数としての解釈">
                <p>
                    楕円関数 <InlineMath math="f" /> が条件 <InlineMath math="f(z + \omega) = f(z)" /> を満たすということは、値が <InlineMath math="z" /> が属する <InlineMath math="\Lambda" /> の剰余類だけで決まることを意味します。これはつまり、<InlineMath math="f" /> が商空間である複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> 上で well-defined な関数として振る舞うということです。この視点に立つと、4-2 複素解析II（§3.3, §3.5）で学んだ「コンパクトなリーマン面上の有理型関数の理論」を直接適用できることになり、代数幾何学的な強力な手法が使えるようになります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">楕円関数の位数</h2>

            <p>
                楕円関数は、定数関数でない限り必ず極を持たなければならないことが知られています。そのため、楕円関数を特徴づける上で「基本周期平行四辺形内にどれだけの極を持つか」を測る指標が必要になります。これが「位数」と呼ばれる概念です。
            </p>

            <ContentBox type="definition" title="Definition 2.3-2 (楕円関数の位数)">
                <p>
                    楕円関数 <InlineMath math="f" /> の<b>位数（order）</b>とは、基本周期平行四辺形内にある <InlineMath math="f" /> の極の位数の総和（重複度込み）のことである。
                </p>
            </ContentBox>

            <p>
                基本周期平行四辺形の境界に極が乗る場合は、微小な平行移動を行って極が境界に乗らないように基本領域をずらして数えます。周期性により、極の配置も格子と同じ周期で繰り返されるため、どの基本領域を選んでも極の位数の総和は不変（well-defined）となります。
            </p>

            <ContentBox type="remark" title="位数とリウヴィルの定理への布石">
                <p>
                    位数は、楕円関数の「複雑さ」を表す最も基本的な不変量です。例えば、位数が <InlineMath math="0" /> の楕円関数は極を持たないことを意味し、これが定数関数に限られること（リウヴィルの第一定理）を次節 §2.4 で証明します。また、位数が <InlineMath math="1" /> の楕円関数は存在しないことや、位数が <InlineMath math="n" /> の楕円関数は基本周期平行四辺形内にちょうど <InlineMath math="n" /> 個の零点を持つことなど、位数を中心とした強力な制約（リウヴィルの定理系列）が明らかになっていきます。
                </p>
            </ContentBox>

            <p>
                次節では、この位数や留数に関する解析的な性質を用いて、楕円関数が満たすべき強い制約（リウヴィルの定理系列）について詳しく見ていきましょう。
            </p>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>格子 <InlineMath math="\Lambda" /> に対する二重周期性 <InlineMath math="f(z + \omega) = f(z)" /> を満たす有理型関数を楕円関数と呼ぶ。</li>
                    <li>定数関数は自明な楕円関数であるが、指数関数などは二重周期性を持たないため楕円関数ではない。</li>
                    <li>楕円関数は、コンパクトリーマン面である複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> 上の有理型関数と見なすことができる。</li>
                    <li>基本周期平行四辺形内にある極の位数の総和（重複度込み）を、その楕円関数の位数と呼び、関数の性質を決定づける重要な不変量となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
