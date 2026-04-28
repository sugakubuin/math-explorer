import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DeRhamCohomologyDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体上の微分形式と外微分 <InlineMath math="d" /> には、<InlineMath math="d^2 = 0" /> という極めて重要な代数的性質がありました。
                この性質を利用すると、微分形式を用いて多様体の「穴」の数や大域的なトポロジー（位相的性質）を測ることができます。
                この解析学とトポロジーを結びつける美しい理論が<strong>ド・ラームコホモロジー（de Rham cohomology）</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉形式と完全形式</h2>

            <p className="leading-relaxed">
                ド・ラームコホモロジーを定義するために、まず外微分 <InlineMath math="d" /> の核（kernel）と像（image）にあたる微分形式のクラスを定義します。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (閉形式と完全形式)">
                <p>
                    <InlineMath math="M" /> を多様体とする。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                        <InlineMath math="\omega \in \Omega^k(M)" /> が<strong>閉形式（closed form）</strong>であるとは、<InlineMath math="d\omega = 0" /> を満たすことである。
                    </li>
                    <li>
                        <InlineMath math="\omega \in \Omega^k(M)" /> が<strong>完全形式（exact form）</strong>であるとは、ある <InlineMath math="\eta \in \Omega^{k-1}(M)" /> が存在して <InlineMath math="\omega = d\eta" /> と書けることである。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                <InlineMath math="d^2 = 0" /> という性質から、完全形式と閉形式の間には自明な包含関係が存在します。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-1">
                <p>
                    すべての完全形式は閉形式である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\omega" /> が完全形式であるとする。定義より、ある <InlineMath math="\eta" /> が存在して <InlineMath math="\omega = d\eta" /> と書ける。
                    このとき、Theorem 5.3-1（<InlineMath math="d^2 = 0" />）より、
                </p>
                <BlockMath math="d\omega = d(d\eta) = 0" />
                <p className="mt-2">
                    となる。したがって <InlineMath math="\omega" /> は閉形式である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                「完全形式ならば閉形式」は常に成り立ちますが、その逆「閉形式ならば完全形式か？」という問いの答えは、多様体の形（トポロジー）に依存します。
                この逆が成り立たない例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-1">
                <p>
                    <InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> 上の1-形式 <InlineMath math="\omega" /> を次のように定義する。
                </p>
                <BlockMath math="\omega = \frac{-y\,dx + x\,dy}{x^2 + y^2}" />
                <p className="mt-2">
                    この <InlineMath math="\omega" /> が閉形式であることを確認する。商の微分法則を用いて外微分を計算すると、
                </p>
                <BlockMath math="\begin{aligned} d\omega &= d\left(\frac{-y}{x^2+y^2}\right) \wedge dx + d\left(\frac{x}{x^2+y^2}\right) \wedge dy \\ &= \left( \frac{-(x^2+y^2) - (-y)(2y)}{(x^2+y^2)^2} \right) dy \wedge dx + \left( \frac{(x^2+y^2) - x(2x)}{(x^2+y^2)^2} \right) dx \wedge dy \\ &= \frac{y^2-x^2}{(x^2+y^2)^2} (-dx \wedge dy) + \frac{y^2-x^2}{(x^2+y^2)^2} dx \wedge dy \\ &= 0 \end{aligned}" />
                <p className="mt-2">
                    したがって <InlineMath math="\omega" /> は閉形式である。
                </p>
                <p className="mt-2">
                    しかし、Example 4.2-2 で見たように、この <InlineMath math="\omega" /> は極座標では <InlineMath math="d\theta" /> と書けるものの、<InlineMath math="\theta" /> は <InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> 全体で一価の関数にはならないため、<InlineMath math="\omega = df" /> となる関数 <InlineMath math="f" /> は大域的には存在しない。
                    実際、単位円 <InlineMath math="S^1" /> 上で積分すると <InlineMath math="\int_{S^1} \omega = 2\pi \neq 0" /> となるが、もし <InlineMath math="\omega = df" /> であればストークスの定理より <InlineMath math="\int_{S^1} df = \int_{\partial S^1} f = \int_{\emptyset} f = 0" /> となるはずであり矛盾する。
                    したがって、<InlineMath math="\omega" /> は完全形式ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ド・ラームコホモロジー群</h2>

            <p className="leading-relaxed">
                上の例から、「閉形式だが完全形式でないもの」の存在が、空間の「穴」（この場合は原点の欠損）を反映していることがわかります。
                この「閉形式と完全形式の差」を代数的に取り出したものがド・ラームコホモロジー群です。
            </p>

            <ContentBox type="definition" title="Definition 7.1-2 (ド・ラームコホモロジー群)">
                <p>
                    <InlineMath math="k" /> 次の閉形式のなすベクトル空間を <InlineMath math="Z^k(M) = \ker(d : \Omega^k(M) \to \Omega^{k+1}(M))" />、
                    <InlineMath math="k" /> 次の完全形式のなすベクトル空間を <InlineMath math="B^k(M) = \mathrm{im}(d : \Omega^{k-1}(M) \to \Omega^k(M))" /> とする。
                    （ただし <InlineMath math="B^0(M) = \{0\}" /> とする。）
                </p>
                <p className="mt-2">
                    <InlineMath math="d^2 = 0" /> より <InlineMath math="B^k(M) \subset Z^k(M)" /> である。このとき、商ベクトル空間
                </p>
                <BlockMath math="H^k_{\mathrm{dR}}(M) = Z^k(M) / B^k(M)" />
                <p className="mt-2">
                    を、<InlineMath math="M" /> の<strong><InlineMath math="k" /> 次ド・ラームコホモロジー群（<InlineMath math="k" />-th de Rham cohomology group）</strong>と呼ぶ。
                    （「群」と呼ぶが、実数体 <InlineMath math="\mathbb{R}" /> 上のベクトル空間である。）
                </p>
                <p className="mt-2">
                    閉形式 <InlineMath math="\omega \in Z^k(M)" /> が属する同値類を <InlineMath math="[\omega] \in H^k_{\mathrm{dR}}(M)" /> と書き、これを <InlineMath math="\omega" /> の<strong>コホモロジー類（cohomology class）</strong>と呼ぶ。
                    <InlineMath math="[\omega] = [\eta]" /> であることは、<InlineMath math="\omega - \eta" /> が完全形式であることと同値である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                0次のコホモロジー群は、多様体の連結成分の数を表します。
            </p>

            <ContentBox type="example" title="Example 7.1-2 (0次コホモロジー群)">
                <p>
                    <InlineMath math="H^0_{\mathrm{dR}}(M)" /> を計算する。<InlineMath math="B^0(M) = \{0\}" /> であるため、<InlineMath math="H^0_{\mathrm{dR}}(M) = Z^0(M)" /> である。
                    <InlineMath math="f \in Z^0(M)" /> とは、<InlineMath math="df = 0" /> を満たす関数 <InlineMath math="f \in C^\infty(M)" /> のことである。
                </p>
                <p className="mt-2">
                    <InlineMath math="df = 0" /> は、<InlineMath math="f" /> のすべての偏微分が <InlineMath math="0" /> であることを意味するため、<InlineMath math="f" /> は局所的に定数である。
                    したがって、<InlineMath math="f" /> は <InlineMath math="M" /> の各連結成分上で定数となる。
                    <InlineMath math="M" /> が <InlineMath math="c" /> 個の連結成分を持つならば、各成分ごとに1つの定数を自由に選べるため、
                </p>
                <BlockMath math="H^0_{\mathrm{dR}}(M) \cong \mathbb{R}^c" />
                <p className="mt-2">
                    となる。特に、<InlineMath math="M" /> が連結ならば <InlineMath math="H^0_{\mathrm{dR}}(M) \cong \mathbb{R}" /> である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ド・ラームコホモロジーの重要な性質として、滑らかな写像によって自然に引き戻されるという「関手性（functoriality）」があります。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-2 (引き戻しの関手性)">
                <p>
                    滑らかな写像 <InlineMath math="f : M \to N" /> は、コホモロジー群の間の線形写像
                </p>
                <BlockMath math="f^* : H^k_{\mathrm{dR}}(N) \to H^k_{\mathrm{dR}}(M), \quad f^*([\omega]) = [f^*\omega]" />
                <p className="mt-2">
                    を誘導する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この写像が well-defined であること、すなわち (1) <InlineMath math="f^*\omega" /> が閉形式になること、(2) コホモロジー類の代表元の取り方に依存しないこと、を示す。
                </p>
                <p className="mt-2">
                    (1) <InlineMath math="\omega \in Z^k(N)" />（すなわち <InlineMath math="d\omega = 0" />）とする。
                    Theorem 5.4-1（引き戻しと外微分の可換性）より、
                </p>
                <BlockMath math="d(f^*\omega) = f^*(d\omega) = f^*(0) = 0" />
                <p className="mt-2">
                    となり、<InlineMath math="f^*\omega" /> も閉形式である。したがって <InlineMath math="[f^*\omega]" /> は定義できる。
                </p>
                <p className="mt-2">
                    (2) <InlineMath math="[\omega] = [\eta]" /> とすると、<InlineMath math="\omega - \eta = d\theta" /> となる <InlineMath math="\theta \in \Omega^{k-1}(N)" /> が存在する。
                    これを引き戻すと、
                </p>
                <BlockMath math="f^*\omega - f^*\eta = f^*(\omega - \eta) = f^*(d\theta) = d(f^*\theta)" />
                <p className="mt-2">
                    となる。これは <InlineMath math="f^*\omega - f^*\eta" /> が完全形式であることを意味し、<InlineMath math="[f^*\omega] = [f^*\eta]" /> が成り立つ。
                    したがって <InlineMath math="f^*" /> は well-defined な線形写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="トポロジーと解析学の架け橋">
                <p>
                    ド・ラームコホモロジーは、微分形式という「解析的」な対象を用いて定義されていますが、その結果得られるベクトル空間の次元（ベッチ数）は、多様体の「穴の数」という純粋に「位相的（トポロジカル）」な情報を表します。
                    ストークスの定理 <InlineMath math="\int_M d\omega = \int_{\partial M} \omega" /> が、境界を持たない閉多様体上では <InlineMath math="\int_M d\omega = 0" /> となる事実と相まって、ド・ラームコホモロジーは多様体上の積分理論とトポロジーを深く結びつける役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>閉形式は <InlineMath math="d\omega = 0" /> を満たす形式、完全形式は <InlineMath math="\omega = d\eta" /> と書ける形式である。</li>
                    <li><InlineMath math="d^2 = 0" /> より完全形式は常に閉形式であるが、逆は一般には成り立たない。</li>
                    <li>ド・ラームコホモロジー群 <InlineMath math="H^k_{\mathrm{dR}}(M)" /> は、閉形式の空間を完全形式の空間で割った商空間として定義される。</li>
                    <li>滑らかな写像 <InlineMath math="f : M \to N" /> は、引き戻しによりコホモロジー群の間の準同型 <InlineMath math="f^* : H^k_{\mathrm{dR}}(N) \to H^k_{\mathrm{dR}}(M)" /> を誘導する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
