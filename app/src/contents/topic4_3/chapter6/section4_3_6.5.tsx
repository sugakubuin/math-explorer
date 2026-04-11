import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ThetaFunctionRepresentation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、ワイエルシュトラスの流儀に基づく <InlineMath math="\wp" /> 関数および <InlineMath math="\sigma" /> 関数と、ヤコビ・テータの流儀に基づくテータ関数が、明示的な関係式で結ばれることを見ていきます。これらの関係は、だ円関数論における二大体系を統合する極めて重要な結果です。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="\sigma" /> 関数とテータ関数の関係</h2>

            <p>まず、ワイエルシュトラスの <InlineMath math="\sigma" /> 関数をテータ関数 <InlineMath math="\theta_1" /> を用いて表すことを考えます。<InlineMath math="\sigma" /> 関数と <InlineMath math="\theta_1" /> 関数は、どちらも整関数であり、特定の周期性（または擬周期性）と零点を持っています。この性質を比較することで、両者の関係を導き出すことができます。</p>

            <ContentBox type="theorem" title={<span>Theorem 6.5-1 (<InlineMath math="\sigma" /> 関数のテータ関数による表示)</span>}>
                <p>格子 <InlineMath math="\Lambda = \omega_1\mathbb{Z} + \omega_2\mathbb{Z}" /> と <InlineMath math="\tau = \omega_2/\omega_1" /> に対して、次が成り立ちます。</p>
                <BlockMath math="\sigma(z) = \frac{\omega_1}{\pi} \exp\left(\frac{\eta_1 z^2}{2\omega_1}\right) \frac{\theta_1\left(\frac{\pi z}{\omega_1} \Big| \tau\right)}{\theta_1'(0|\tau)}" />
                <p>ただし、<InlineMath math="\eta_1 = 2\zeta(\omega_1/2)" /> は擬周期因子です。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>右辺の関数を <InlineMath math="f(z)" /> と置きます。まず、<InlineMath math="f(z)" /> の零点を調べます。<InlineMath math="\theta_1(v|\tau)" /> の零点は <InlineMath math="v \in \pi\mathbb{Z} + \pi\tau\mathbb{Z}" /> であるため、<InlineMath math="v = \pi z/\omega_1" /> とすると、<InlineMath math="z \in \omega_1\mathbb{Z} + \omega_2\mathbb{Z} = \Lambda" /> となります。これは <InlineMath math="\sigma(z)" /> の零点と完全に一致し、すべて1位の零点です。</p>
                <p>次に、擬周期性を確認します。<InlineMath math="f(z + \omega_1)" /> および <InlineMath math="f(z + \omega_2)" /> の変換則を計算すると、<InlineMath math="\theta_1" /> の準周期性（§6.2）と指数関数の性質から、<InlineMath math="f(z)" /> は <InlineMath math="\sigma(z)" /> と全く同じ擬周期因子を持つことがわかります。</p>
                <p>したがって、比 <InlineMath math="\sigma(z) / f(z)" /> は極を持たず、かつ二重周期を持つ整関数、すなわち楕円関数となります。リウヴィルの第一定理より、これは定数 <InlineMath math="C" /> です。<InlineMath math="z \to 0" /> の極限を考えると、<InlineMath math="\sigma(z) \sim z" /> であり、<InlineMath math="f(z) \sim z" /> となるため、<InlineMath math="C = 1" /> が得られます。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>定理の証明からわかるように、零点の位置とシフトに対する振る舞いが関数の形を決定づけます。</p>

            <ContentBox type="example" title="Example 6.5-1">
                <p><InlineMath math="\theta_1" /> の零点が <InlineMath math="\pi\mathbb{Z} + \pi\tau\mathbb{Z}" /> であることは、<InlineMath math="\sigma" /> の零点 <InlineMath math="\Lambda = \omega_1\mathbb{Z} + \omega_2\mathbb{Z}" /> とスケーリング <InlineMath math="z \mapsto \pi z/\omega_1" /> によって直接対応しています。<InlineMath math="\tau = \omega_2/\omega_1" /> であるため、<InlineMath math="\pi (m\omega_1 + n\omega_2) / \omega_1 = m\pi + n\pi\tau" /> となり、零点の対応関係が直感的に確認できます。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="\wp" /> 関数のテータ関数表示</h2>

            <p><InlineMath math="\sigma" /> 関数の表示が得られたことで、微分を用いて <InlineMath math="\wp" /> 関数もテータ関数で表現することが可能になります。</p>

            <ContentBox type="theorem" title={<span>Corollary 6.5-1 (<InlineMath math="\wp" /> 関数のテータ関数表示)</span>}>
                <p><InlineMath math="\wp(z)" /> は次のようにテータ関数を用いて表されます。</p>
                <BlockMath math="\wp(z) = -\frac{\eta_1}{\omega_1} - \left(\frac{\pi}{\omega_1}\right)^2 \frac{d^2}{dv^2} \log \theta_1(v|\tau) \bigg|_{v = \frac{\pi z}{\omega_1}}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>定義より <InlineMath math="\wp(z) = -\frac{d^2}{dz^2}\log\sigma(z)" /> です。Theorem 6.5-1 の等式</p>
                <BlockMath math="\sigma(z) = \frac{\omega_1}{\pi} \exp\left(\frac{\eta_1 z^2}{2\omega_1}\right) \frac{\theta_1\left(\frac{\pi z}{\omega_1}\right)}{\theta_1'(0)}" />
                <p>の両辺の対数を取ると、</p>
                <BlockMath math="\log\sigma(z) = \log\left(\frac{\omega_1}{\pi \theta_1'(0)}\right) + \frac{\eta_1 z^2}{2\omega_1} + \log \theta_1\left(\frac{\pi z}{\omega_1}\right)" />
                <p>となります。これを <InlineMath math="z" /> について2回微分します。第1項は定数なので消え、第2項の2回微分は <InlineMath math="\eta_1/\omega_1" /> を与えます。第3項について連鎖律を用いると、上記の式が得られます。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>このようにして、ワイエルシュトラスの楕円関数をテータ関数の対数微分として明示的に計算できることが示されました。</p>

            <ContentBox type="remark" title="二大体系の統合">
                <p>本節で見た関係式は、ワイエルシュトラスの流儀（<InlineMath math="\wp, \zeta, \sigma" />）とヤコビ-テータの流儀（<InlineMath math="\theta_1, \theta_2, \theta_3, \theta_4" />）が、本質的に同じ数学的構造を異なる視点から表現したものであることを示しています。解析的な性質を調べる際にはテータ関数の強力な収束性が役立ち、代数的な関係を扱う際にはワイエルシュトラスの関数が威力を発揮します。</p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§6.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\sigma" /> 関数は、<InlineMath math="\theta_1" /> 関数と指数関数の積として明示的に表される。</li>
                    <li>この対応は、両者の零点の位置と擬周期因子の一致から導かれる。</li>
                    <li><InlineMath math="\wp" /> 関数は <InlineMath math="\theta_1" /> 関数の対数微分の形（定数を伴う）で表される。</li>
                    <li>これにより、楕円関数論の2つの主要なアプローチが相互に変換可能であることが示された。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
