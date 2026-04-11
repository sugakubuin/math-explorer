import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InversionOfEllipticIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までで、楕円積分の三種の正規形や、その背後にある代数的な構造について見てきました。本節では、楕円関数論の歴史において最大のブレイクスルーとなった「反転（inversion）」という強力な発想について解説します。積分そのものを研究するのではなく、その逆関数に注目することで、極めて豊かな性質を持つ新しい関数群が姿を現します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">反転の動機</h2>

            <p>
                初等的な微積分学において、逆三角関数は積分の形で定義されることがあります。この発想を楕円積分に拡張することが、楕円関数論の出発点となりました。
            </p>

            <ContentBox type="remark" title="積分の逆関数としての三角関数">
                <p>
                    よく知られているように、逆正弦関数 <InlineMath math="\arcsin x" /> は次のような積分で表されます。
                </p>
                <BlockMath math="u = \int_0^x \frac{dt}{\sqrt{1-t^2}}" />
                <p>
                    この関数 <InlineMath math="u(x)" /> を考える代わりに、その逆関数 <InlineMath math="x(u)" /> を考えると、それは正弦関数 <InlineMath math="\sin u" /> となります。つまり、積分の逆関数をとること（反転）により、周期性を持つ初等関数 <InlineMath math="\sin" /> が得られるのです。
                </p>
                <p>
                    ガウス（C. F. Gauss）、アーベル（N. H. Abel）、ヤコビ（C. G. J. Jacobi）らは、このアイデアを楕円積分に適用し、楕円積分の逆関数として「楕円関数」を定義しました。
                </p>
            </ContentBox>

            <p>
                この反転のアイデアを、第一種不完全楕円積分に適用してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.4-1">
                <p>
                    次のような第一種楕円積分を考えます（母数 <InlineMath math="k" /> を用います）。
                </p>
                <BlockMath math="u = \int_0^x \frac{dt}{\sqrt{(1-t^2)(1-k^2t^2)}}" />
                <p>
                    この積分によって定まる関数 <InlineMath math="u(x)" /> の逆関数 <InlineMath math="x(u)" /> を、ヤコビの <b>sn 関数</b>（正弦振幅関数）と呼び、次のように表します。
                </p>
                <BlockMath math="x = \text{sn}(u, k)" />
                <p>
                    特に <InlineMath math="k = 0" /> のとき、積分は <InlineMath math="\arcsin x" /> に帰着するため、次が成り立ちます。
                </p>
                <BlockMath math="\text{sn}(u, 0) = \sin u" />
                <p>
                    すなわち、ヤコビの sn 関数は通常の正弦関数を自然に一般化したものとみなすことができます。
                </p>
            </ContentBox>

            <p>
                このように積分の逆関数として新しい関数を定義することで、加法定理などの対称性がより見通しよく扱えるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">反転による二重周期性の発見</h2>

            <p>
                反転という手法の真価は、変数を実数から複素数へと拡張したときに発揮されます。
            </p>

            <ContentBox type="remark" title="複素平面における二重周期性の発現">
                <p>
                    実数範囲において楕円積分を反転すると、三角関数に似た単なる（実）周期関数が得られます。しかし、積分の経路を複素平面上に拡張すると、平方根の分岐点（分岐切断）をどのように回るかによって、積分値に複数の異なる周期的な寄与が生じます。
                </p>
                <p>
                    この結果、楕円積分の逆関数として得られる複素関数は、複素平面上で <b>独立な2つの方向への周期（二重周期性）</b> を持つことが明らかになりました。これがガウスとアーベルによる決定的な発見であり、楕円関数が単なる「複雑な三角関数」にとどまらない、全く新しい関数のクラスであることを示しています。
                </p>
            </ContentBox>

            <p>
                歴史的に、この二重周期性が最初に明確に観察されたのは、レムニスケートの弧長積分でした。
            </p>

            <ContentBox type="example" title="Example 1.4-2">
                <p>
                    前節 §1.1 で登場したレムニスケートの弧長積分を考えます。
                </p>
                <BlockMath math="u = \int_0^x \frac{dt}{\sqrt{1-t^4}}" />
                <p>
                    この積分の逆関数 <InlineMath math="x = \text{sl}(u)" /> は <b>レムニスケート正弦関数（lemniscate sine）</b> と呼ばれます。
                </p>
                <p>
                    この関数を複素平面に拡張すると、実軸上の周期 <InlineMath math="\omega" /> に加えて、純虚数方向にも周期 <InlineMath math="i\omega" /> を持つことがわかります。ここで <InlineMath math="\omega" /> はレムニスケート定数と呼ばれる値です。
                </p>
                <BlockMath math="\omega = 2 \int_0^1 \frac{dt}{\sqrt{1-t^4}} = \frac{\Gamma(1/4)^2}{\sqrt{2\pi}} \approx 2.622" />
                <p>
                    すなわち、<InlineMath math="\text{sl}(u)" /> は次を満たします。
                </p>
                <BlockMath math="\text{sl}(u + \omega) = -\text{sl}(u), \quad \text{sl}(u + 2\omega) = \text{sl}(u)" />
                <BlockMath math="\text{sl}(u + i\omega) = i\text{sl}(u), \quad \text{sl}(u + 2i\omega) = \text{sl}(u)" />
                <p>
                    これにより、<InlineMath math="\text{sl}(u)" /> は複素平面上に格子状の周期網を持つことがわかります。
                </p>
            </ContentBox>

            <p>
                この二重周期性こそが、今後の Chapter 2 で本格的に論じられる「複素トーラス上の関数」としての楕円関数の本質的な性質となります。反転問題は単なる計算上の技巧ではなく、楕円関数論の深い幾何学的・解析的構造を解き明かすための鍵なのです。
            </p>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>楕円積分そのものを考えるのではなく、その逆関数を定義する「反転」が楕円関数論の出発点である。</li>
                    <li>第一種楕円積分の反転により、ヤコビの sn 関数などが自然に導かれる。</li>
                    <li>逆関数を複素変数に拡張すると、楕円関数特有の「二重周期性」が姿を現す。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
