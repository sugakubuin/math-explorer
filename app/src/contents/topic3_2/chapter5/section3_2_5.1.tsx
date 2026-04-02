import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchyIntegralFormula() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                コーシーの積分定理は、「正則関数を一周積分するとゼロになる」という静的な性質を教えてくれました。
                この性質をさらに一歩進めると、領域の境界における関数の値が、領域内部の値を完全に決定するという驚くべき <strong>コーシーの積分公式</strong> が導かれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの積分公式</h2>

            <p>
                この公式は、正則関数が単なる積分可能な関数ではなく、極めて強い「剛性」を持っていることを示しています。
            </p>

            <ContentBox type="theorem" title="Theorem 5.1-1 (コーシーの積分公式)">
                <p>
                    関数 <InlineMath math="f(z)" /> が単連結領域 <InlineMath math="U" /> 上で正則であるとする。
                    <InlineMath math="U" /> 内の点を <InlineMath math="z_0" /> とし、<InlineMath math="z_0" /> を正方向に一周する閉曲線 <InlineMath math="\gamma" /> に対して、次が成立する。
                </p>
                <BlockMath math="f(z_0) = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{z - z_0} \, dz" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    被積分関数 <InlineMath math="g(z) = f(z)/(z - z_0)" /> は、<InlineMath math="z = z_0" /> を除いて領域 <InlineMath math="U" /> 上で正則である。
                    経路変形原理（Theorem 4.4-1）により、閉曲線 <InlineMath math="\gamma" /> 上の積分は、<InlineMath math="z_0" /> を中心とする十分に小さな半径 <InlineMath math="r" /> の円 <InlineMath math="C_r: z = z_0 + re^{i\theta}" /> 上の積分に等しい。
                </p>
                <BlockMath math="\oint_\gamma \frac{f(z)}{z - z_0} \, dz = \oint_{C_r} \frac{f(z)}{z - z_0} \, dz" />
                <p>
                    右辺の分子に <InlineMath math="f(z) = f(z_0) + (f(z) - f(z_0))" /> を代入すると、
                </p>
                <BlockMath math="\oint_{C_r} \frac{f(z_0)}{z - z_0} \, dz + \oint_{C_r} \frac{f(z) - f(z_0)}{z - z_0} \, dz" />
                <p>
                    第1項は <InlineMath math="f(z_0) \int_0^{2\pi} \frac{ire^{i\theta}}{re^{i\theta}} \, d\theta = 2\pi i f(z_0)" /> である。
                    第2項については、<InlineMath math="f(z)" /> の連続性により、任意の <InlineMath math="\epsilon > 0" /> に対し半径 <InlineMath math="r" /> を十分に小さく取れば <InlineMath math="|f(z) - f(z_0)| < \epsilon" /> とでき、ML 不等式より
                </p>
                <BlockMath math="\left| \oint_{C_r} \frac{f(z) - f(z_0)}{z - z_0} \, dz \right| \leq \frac{\epsilon}{r} \cdot 2\pi r = 2\pi \epsilon" />
                <p>
                    <InlineMath math="\epsilon \to 0" /> の極限で第2項は 0 となり、公式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="正則関数の「遠隔作用」">
                <p>
                    この公式の最も驚くべき点は、<strong>「境界上の値を知るだけで、内部のどこでも好きな点の値が計算できてしまう」</strong> ということです。
                    実関数の世界（例えば <InlineMath math="C^1" /> 級関数）では、境界の値から内部の値を一意に決定することはできません。
                    正則関数という条件がいかに強力であるかを物語っています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 (積分計算への応用)">
                <p>
                    半径 2 の円周 <InlineMath math="C: |z|=2" /> に沿った次の積分を計算せよ。
                </p>
                <BlockMath math="\oint_C \frac{e^z}{z - 1} \, dz" />
                <p>
                    <strong>解答：</strong> 点 <InlineMath math="z_0 = 1" /> は円 <InlineMath math="C" /> の内部にあり、関数 <InlineMath math="f(z) = e^z" /> は複素平面全体で正則である。
                    したがって、コーシーの積分公式により
                </p>
                <BlockMath math="\oint_C \frac{e^z}{z - 1} \, dz = 2\pi i \cdot f(1) = 2\pi i \cdot e^1 = 2\pi i e" />
                <p>
                    となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">高階微分とグルサの公式</h2>

            <p>
                積分公式の右辺をパラメータ <InlineMath math="z_0" /> について微分することで、導関数の値も積分で表現できることがわかります。
            </p>

            <ContentBox type="theorem" title="Theorem 5.1-2 (グルサの公式)">
                <p>
                    関数 <InlineMath math="f(z)" /> が領域 <InlineMath math="U" /> 上で正則ならば、<InlineMath math="f" /> は <InlineMath math="U" /> 上で何回でも複素微分可能であり、その第 <InlineMath math="n" /> 階導関数は次で与えられる。
                </p>
                <BlockMath math="f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_\gamma \frac{f(z)}{(z - z_0)^{n+1}} \, dz" />
            </ContentBox>

            <ContentBox type="remark" title="正則性の「おまけ」">
                <p>
                    実解析では「1回微分可能」から「2回微分可能」は自動的には従いません。
                    しかし複素解析では、<strong>「たった1回微分可能（正則）であれば、自動的に無限回微分可能になる」</strong> という、信じがたい副作用がついてきます。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    コーシーの積分公式の両辺を <InlineMath math="z_0" /> について形式的に微分する。
                </p>
                <BlockMath math="\begin{aligned} \frac{d}{dz_0} f(z_0) &= \frac{1}{2\pi i} \oint_\gamma f(z) \left( \frac{\partial}{\partial z_0} \frac{1}{z - z_0} \right) dz \\ &= \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{(z - z_0)^2} dz \end{aligned}" />
                <p>
                    これを繰り返すことで一般の <InlineMath math="n" /> に対する公式が得られる。厳密な証明は、差分商の極限を評価することで行われる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則関数の内部の値は、境界の積分によって <InlineMath math="f(z_0) = \frac{1}{2\pi i} \oint \frac{f(z)}{z-z_0} dz" /> と表せる。</li>
                    <li>これを拡張したグルサの公式により、高階導関数も積分で表現できる。</li>
                    <li>正則関数は自動的に無限回微分可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
