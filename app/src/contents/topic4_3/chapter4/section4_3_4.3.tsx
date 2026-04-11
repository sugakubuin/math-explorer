import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassSigmaFunction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節ではワイエルシュトラスの <InlineMath math="\wp" /> 関数の原始関数として <InlineMath math="\zeta" /> 関数を導入し、その擬周期性について学びました。本節では、さらに <InlineMath math="\zeta" /> 関数の「原始関数（の指数関数）」にあたる、ワイエルシュトラスの <b><InlineMath math="\sigma" /> 関数</b> を導入します。
            </p>
            <p>
                <InlineMath math="\sigma" /> 関数は楕円関数ではありませんが、複素平面全体で正則な整関数であり、楕円関数を構成する際の極めて強力な「基本的な構成部品」となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">
                <InlineMath math="\sigma" /> 関数の定義
            </h2>

            <p>
                格子 <InlineMath math="\Lambda" /> に対する <InlineMath math="\sigma" /> 関数は、無限乗積を用いて次のように定義されます。
            </p>

            <ContentBox type="definition" title={<span>Definition 4.3-1 (ワイエルシュトラスの <InlineMath math="\sigma" /> 関数)</span>}>
                <p>
                    複素変数 <b><InlineMath math="z" /></b> に対し、ワイエルシュトラスの <b><InlineMath math="\sigma" /> 関数（sigma function）</b>を以下の無限乗積で定義する。
                </p>
                <BlockMath math="\sigma(z) = z \prod_{\omega \in \Lambda \setminus \{0\}} \left( 1 - \frac{z}{\omega} \right) \exp\left( \frac{z}{\omega} + \frac{z^2}{2\omega^2} \right)" />
                <p>
                    この定義から、<InlineMath math="\sigma(z)" /> の対数微分が <InlineMath math="\zeta(z)" /> になることがわかる。
                </p>
                <BlockMath math="\frac{\sigma'(z)}{\sigma(z)} = \zeta(z)" />
            </ContentBox>

            <p>
                この無限乗積が複素平面全体でうまく定義されることを確認しましょう。これは複素解析におけるワイエルシュトラスの因数分解定理の典型的な応用例です。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 4.3-1 (<InlineMath math="\sigma" /> 関数の整関数性)</span>}>
                <p>
                    <InlineMath math="\sigma(z)" /> は <InlineMath math="\mathbb{C}" /> 上の整関数であり、その零点はちょうど <InlineMath math="\Lambda" /> の格子点（すなわち <InlineMath math="z \in \Lambda" />）である。また、すべての零点は 1 位の零点である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    各因子 <InlineMath math="E_2(z/\omega) = (1 - z/\omega) \exp(z/\omega + z^2/(2\omega^2))" /> は、ワイエルシュトラスの基本因子（Weierstrass elementary factor）である。
                    任意のコンパクト集合 <InlineMath math="K \subset \mathbb{C}" /> をとる。<InlineMath math="z \in K" /> かつ <InlineMath math="|\omega| \gg |z|" /> のとき、対数の Taylor 展開を用いると、
                </p>
                <BlockMath math="\log E_2\left(\frac{z}{\omega}\right) = -\frac{1}{3}\left(\frac{z}{\omega}\right)^3 - \frac{1}{4}\left(\frac{z}{\omega}\right)^4 - \cdots = O\left(\frac{1}{|\omega|^3}\right)" />
                <p>
                    となる。<InlineMath math="\sum_{\omega \neq 0} |\omega|^{-3}" /> は絶対収束する（§3.1 参照）ため、無限乗積
                </p>
                <BlockMath math="\prod_{\omega \neq 0} E_2\left(\frac{z}{\omega}\right)" />
                <p>
                    は <InlineMath math="\mathbb{C}" /> の任意のコンパクト集合上で絶対かつ一様に収束する。したがって <InlineMath math="\sigma(z)" /> は整関数となる。
                    また、零点は <InlineMath math="z = 0" /> （先頭の <InlineMath math="z" /> から）および各因子から生じる <InlineMath math="z = \omega" /> であり、重複がないためすべて 1 位である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                <InlineMath math="\sigma(z)" /> は <InlineMath math="z=0" /> で 1 位の零点を持つ奇関数であり、原点の近傍でべき級数展開することができます。これは <InlineMath math="\wp(z)" /> や <InlineMath math="\zeta(z)" /> の展開から導出できます。
            </p>

            <ContentBox type="example" title={<span>Example 4.3-1 (<InlineMath math="\sigma" /> 関数のべき級数展開)</span>}>
                <p>
                    <InlineMath math="\sigma'(z)/\sigma(z) = \zeta(z)" /> を積分し、<InlineMath math="\sigma(z) = z + O(z^3)" /> を用いて展開の係数を決定すると、最初の数項は以下のようになる。
                </p>
                <BlockMath math="\sigma(z) = z - \frac{g_2}{240}z^5 - \frac{g_3}{840}z^7 - \frac{g_2^2}{161280}z^9 + \cdots"
                />
                <p>
                    奇関数であるため、奇数次の項のみが現れる。<InlineMath math="z^3" /> の項の係数が 0 であることも特徴的である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">
                擬周期因子
            </h2>

            <p>
                <InlineMath math="\sigma" /> 関数は有界ではない整関数（かつ定数ではない）ため、リウヴィルの定理から二重周期関数になり得ないことは明らかです。しかし、<InlineMath math="\zeta" /> 関数の擬周期性を受け継いだ、美しい変換則（<b>擬周期因子</b>）を持ちます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 4.3-1 (<InlineMath math="\sigma" /> 関数の擬周期因子)</span>}>
                <p>
                    格子 <InlineMath math="\Lambda" /> の生成元 <InlineMath math="\omega_1, \omega_2" /> と、対応する擬周期 <InlineMath math="\eta_1, \eta_2" /> に対し、以下の変換公式が成り立つ。
                </p>
                <BlockMath math="\sigma(z + \omega_i) = -e^{\eta_i(z + \omega_i/2)} \sigma(z) \quad (i = 1, 2)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関数 <InlineMath math="F(z) = \sigma(z + \omega_i) / \sigma(z)" /> を考える。<InlineMath math="F(z)" /> の対数微分をとると、
                </p>
                <BlockMath math="\frac{d}{dz} \log F(z) = \frac{\sigma'(z+\omega_i)}{\sigma(z+\omega_i)} - \frac{\sigma'(z)}{\sigma(z)} = \zeta(z+\omega_i) - \zeta(z)" />
                <p>
                    <InlineMath math="\zeta" /> 関数の擬周期性より、右辺は定数 <InlineMath math="\eta_i" /> に等しい。したがって積分すると、
                </p>
                <BlockMath math="F(z) = C e^{\eta_i z}" />
                <p>
                    となる（<InlineMath math="C" /> は積分定数）。よって <InlineMath math="\sigma(z + \omega_i) = C e^{\eta_i z} \sigma(z)" /> となる。
                    積分定数 <InlineMath math="C" /> を決定するため、<InlineMath math="z = -\omega_i/2" /> を代入する。<InlineMath math="\sigma" /> 関数が奇関数（<InlineMath math="\sigma(-z) = -\sigma(z)" />）であることを用いると、
                </p>
                <BlockMath math="\sigma\left(\frac{\omega_i}{2}\right) = C e^{-\eta_i \omega_i / 2} \sigma\left(-\frac{\omega_i}{2}\right) = - C e^{-\eta_i \omega_i / 2} \sigma\left(\frac{\omega_i}{2}\right)" />
                <p>
                    <InlineMath math="\omega_i/2" /> は格子点ではないため <InlineMath math="\sigma(\omega_i/2) \neq 0" /> である。両辺を割って、
                </p>
                <BlockMath math="C = -e^{\eta_i \omega_i / 2}" />
                <p>
                    を得る。これを元の式に代入して、<InlineMath math="\sigma(z + \omega_i) = -e^{\eta_i(z + \omega_i/2)} \sigma(z)" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この擬周期因子は、指数関数と負号が組み合わさった形をしています。<InlineMath math="\sigma" /> 関数単体は楕円関数ではありませんが、この変換則を活用することで、<InlineMath math="\sigma" /> 関数の商から真の楕円関数を構築することができます。
            </p>

            <ContentBox type="remark" title="楕円関数構成への応用">
                <p>
                    <InlineMath math="\sigma" /> 関数は、楕円関数の「素因子」としての役割を果たします。代数学において多項式が一次式の積に分解されるように、複素トーラス上の任意の有理型関数（楕円関数）は、零点と極の配置を指定された <InlineMath math="\sigma(z-a)" /> の商として明示的に書き下すことができます。これは次節の主要なテーマとなります。このように、楕円関数論において <InlineMath math="\sigma" /> 関数は基礎的なビルディングブロックです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\sigma" /> 関数は、対数微分が <InlineMath math="\zeta" /> 関数となるように定義された無限乗積である。</li>
                    <li>複素平面上の整関数であり、格子 <InlineMath math="\Lambda" /> のすべての点に 1 位の零点を持つ。</li>
                    <li>二重周期性は持たないが、<InlineMath math="\sigma(z + \omega_i) = -e^{\eta_i(z + \omega_i/2)} \sigma(z)" /> という明確な擬周期因子を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
