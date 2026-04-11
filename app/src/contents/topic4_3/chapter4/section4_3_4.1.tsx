import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassZetaFunction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章では、二重周期を持つ有理型関数であるワイエルシュトラスの <InlineMath math="\wp" /> 関数について学びました。
                本節では、この <InlineMath math="\wp" /> 関数の原始関数として定義されるワイエルシュトラスの <b><InlineMath math="\zeta" /> 関数（zeta function）</b> を導入します。
                <InlineMath math="\zeta" /> 関数自体は二重周期性を持ちませんが、その変換規則は楕円関数論において極めて重要な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="\zeta" /> 関数の定義</h2>

            <p>
                <InlineMath math="\wp" /> 関数の定義級数を項別に積分することで、<InlineMath math="\zeta" /> 関数を定義します。
                積分定数は奇関数となるように選ばれます。
            </p>

            <ContentBox type="definition" title={<span>Definition 4.1-1 (ワイエルシュトラスの <InlineMath math="\zeta" /> 関数)</span>}>
                <p>
                    格子 <b><InlineMath math="\Lambda" /></b> に対し、ワイエルシュトラスの <b><InlineMath math="\zeta" /> 関数</b> を次のように定義する。
                </p>
                <BlockMath math="\zeta(z) = \frac{1}{z} + \sum_{\omega \in \Lambda \setminus \{0\}} \left( \frac{1}{z-\omega} + \frac{1}{\omega} + \frac{z}{\omega^2} \right)" />
                <p>
                    このとき、定義よりただちに以下が成り立つ。
                </p>
                <BlockMath math="\zeta'(z) = -\wp(z)" />
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-0">
                <p>
                    定義式において <InlineMath math="z" /> を <InlineMath math="-z" /> に置き換えると、格子 <InlineMath math="\Lambda" /> が原点に関して対称であること（<InlineMath math="\omega \in \Lambda \iff -\omega \in \Lambda" />）から、和全体の符号が反転することがわかる。
                    すなわち、<InlineMath math="\zeta" /> 関数は奇関数である。
                </p>
                <BlockMath math="\zeta(-z) = -\zeta(z)" />
            </ContentBox>

            <p>
                この無限級数が正当な関数を定めるためには、収束性を確認する必要があります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1">
                <p>
                    <InlineMath math="\zeta(z)" /> の定義級数は、<InlineMath math="\mathbb{C} \setminus \Lambda" /> 上で絶対かつ広義一様に収束し、正則関数を定める。
                    また、各格子点 <InlineMath math="\omega \in \Lambda" /> に留数 <InlineMath math="1" /> の <InlineMath math="1" /> 位の極を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    級数の各項を変形すると以下のようになる。
                </p>
                <BlockMath math="\begin{aligned} \frac{1}{z-\omega} + \frac{1}{\omega} + \frac{z}{\omega^2} &= \frac{\omega^2 + \omega(z-\omega) + z(z-\omega)}{\omega^2(z-\omega)} \\ &= \frac{z^2}{\omega^2(z-\omega)} \end{aligned}" />
                <p>
                    <InlineMath math="z" /> が原点を中心とする半径 <InlineMath math="R" /> の閉円板に属し、<InlineMath math="|\omega| > 2R" /> であるとき、<InlineMath math="|z-\omega| > |\omega|/2" /> が成り立つ。
                    したがって、該当する項の絶対値は以下のように評価できる。
                </p>
                <BlockMath math="\left| \frac{z^2}{\omega^2(z-\omega)} \right| \leq \frac{R^2}{|\omega|^2 \cdot (|\omega|/2)} = \frac{2R^2}{|\omega|^3}" />
                <p>
                    Chapter 3 で見たように級数 <InlineMath math="\sum_{\omega \neq 0} |\omega|^{-3}" /> は収束するため、ワイエルシュトラスのM判定法より定義級数は絶対かつ一様に収束する。
                    極の性質については、<InlineMath math="1/z" /> や <InlineMath math="1/(z-\omega)" /> の項から明らかである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ここで重要なのは、<InlineMath math="\zeta" /> 関数の周期性についてです。
            </p>

            <ContentBox type="remark" title="周期性の喪失">
                <p>
                    <InlineMath math="\zeta" /> 関数は楕円関数 <InlineMath math="\wp" /> の原始関数ですが、一般に楕円関数の原始関数が再び楕円関数になるとは限りません。
                    実際、もし <InlineMath math="\zeta" /> が二重周期関数であれば、リウヴィルの定理系列（Theorem 2.4-2）により、基本周期平行四辺形内の留数の和は <InlineMath math="0" /> になるはずです。
                    しかし、<InlineMath math="\zeta" /> は原点にのみ極を持ち、その留数は <InlineMath math="1" /> であるため、これは矛盾します。
                    したがって、<InlineMath math="\zeta" /> は楕円関数ではありません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">擬周期性</h2>

            <p>
                <InlineMath math="\zeta" /> 関数は完全な周期関数ではありませんが、周期だけ平行移動したときの振る舞いは非常に統制が取れています。
                これを<b>擬周期性</b>と呼びます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-1 (擬周期性)">
                <p>
                    格子の基底 <InlineMath math="\omega_1, \omega_2" /> に対し、以下が成り立つ。
                </p>
                <BlockMath math="\zeta(z + \omega_i) = \zeta(z) + \eta_i \quad (i = 1, 2)" />
                <p>
                    ここで、定数 <InlineMath math="\eta_i" /> は <b>擬周期（pseudo-period）</b> と呼ばれ、次で与えられる。
                </p>
                <BlockMath math="\eta_i = 2\zeta\left(\frac{\omega_i}{2}\right)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関数 <InlineMath math="f(z) = \zeta(z+\omega_i) - \zeta(z)" /> を考える。
                    この関数を微分すると、
                </p>
                <BlockMath math="f'(z) = \zeta'(z+\omega_i) - \zeta'(z) = -\wp(z+\omega_i) + \wp(z)" />
                <p>
                    <InlineMath math="\wp" /> 関数の二重周期性により、<InlineMath math="\wp(z+\omega_i) = \wp(z)" /> であるから、<InlineMath math="f'(z) = 0" /> となる。
                    領域の連結性より、<InlineMath math="f(z)" /> はある定数 <InlineMath math="\eta_i" /> に等しい。
                    すなわち、<InlineMath math="\zeta(z + \omega_i) - \zeta(z) = \eta_i" /> である。
                </p>
                <p>
                    定数 <InlineMath math="\eta_i" /> の値を決定するため、この式に <InlineMath math="z = -\omega_i/2" /> を代入する。
                </p>
                <BlockMath math="\zeta\left(\frac{\omega_i}{2}\right) - \zeta\left(-\frac{\omega_i}{2}\right) = \eta_i" />
                <p>
                    <InlineMath math="\zeta" /> 関数は奇関数（<InlineMath math="\zeta(-z) = -\zeta(z)" />）であるから、
                </p>
                <BlockMath math="\zeta\left(\frac{\omega_i}{2}\right) + \zeta\left(\frac{\omega_i}{2}\right) = \eta_i \implies \eta_i = 2\zeta\left(\frac{\omega_i}{2}\right)" />
                <p>
                    となり、証明が完了する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この擬周期性は、楕円関数の積分を考える際に基礎的な役割を果たします。
            </p>

            <ContentBox type="example" title="Example 4.1-1">
                <p>
                    リウヴィルの第二定理（Theorem 2.4-2：楕円関数の基本周期平行四辺形内の留数の和が <InlineMath math="0" /> になる）を、<InlineMath math="\zeta" /> 関数の観点から再解釈する。
                    任意の楕円関数 <InlineMath math="f" /> の留数は、その原始関数の多価性として現れる。
                    <InlineMath math="\wp" /> の原始関数である <InlineMath math="\zeta" /> の場合、基本周期平行四辺形の境界に沿った積分 <InlineMath math="\oint \zeta(z) \,dz" /> を擬周期性を用いて計算すると、対辺の寄与の差から定数が得られる。
                    これが後の節で学ぶ「ルジャンドルの関係式」へと繋がる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ワイエルシュトラスの <InlineMath math="\zeta" /> 関数は <InlineMath math="\wp" /> 関数の原始関数（<InlineMath math="\zeta'(z) = -\wp(z)" />）として定義される。</li>
                    <li><InlineMath math="\zeta" /> 関数は各格子点に留数 <InlineMath math="1" /> の <InlineMath math="1" /> 位の極を持ち、それ以外では正則な奇関数である。</li>
                    <li><InlineMath math="\zeta" /> は楕円関数ではないが、<InlineMath math="\zeta(z + \omega_i) = \zeta(z) + \eta_i" /> という擬周期性を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
