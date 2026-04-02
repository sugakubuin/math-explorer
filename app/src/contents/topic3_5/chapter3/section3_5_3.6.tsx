import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BifurcationAndChaosIntro() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章の締めくくりとして、系のパラメータを変化させたときに挙動が劇的に変わる「分岐（bifurcation）」と、3 次元以上の系で現れる複雑な挙動「カオス」の入り口を探ります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分岐理論の基礎</h2>

            <p className="leading-relaxed">
                系のパラメータを連続的に変化させるとき、平衡点の数やその安定性が不連続に変化する現象を「分岐」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.6-1 (分岐点)">
                <p>
                    パラメータ <InlineMath math="\mu" /> を持つ微分方程式系 <InlineMath math="\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x}, \mu)" /> において、<InlineMath math="\mu = \mu_c" /> で系の定性的な振る舞い（平衡点の個数や安定性など）が変化するとき、<InlineMath math="\mu_c" /> を<b>分岐点</b>（bifurcation point）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                代表的な分岐のパターンをいくつか紹介します。
            </p>

            <ContentBox type="example" title="Example 3.6-1 (サドル・ノード分岐)">
                <p>
                    1 次元の系 <InlineMath math="\dot{x} = \mu - x^2" /> を考える。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\mu < 0" />：平衡点は存在しない。</li>
                    <li><InlineMath math="\mu = 0" />：<InlineMath math="x=0" /> で 1 つの平衡点が現れる。</li>
                    <li><InlineMath math="\mu > 0" />：2 つの平衡点 <InlineMath math="x = \pm \sqrt{\mu}" />（一方は安定、他方は不安定）が現れる。</li>
                </ul>
                <p className="mt-2">
                    このように、平衡点のペアが生まれる（あるいは衝突して消える）現象をサドル・ノード分岐と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                安定性が失われ、周期解が生まれる重要な分岐も存在します。
            </p>

            <ContentBox type="example" title="Example 3.6-2 (ホップ分岐)">
                <p>
                    平衡点において、パラメータの変化により固有値の一対の複素共役が実軸上を横切るとき、平衡点の安定性が失われるとともに、その周りに小さな<b>リミットサイクル（周期解）</b>が発生することがある。これを<b>ホップ分岐</b>（Hopf bifurcation）と呼ぶ。
                    物理的には、静止状態から自励振動が始まる現象に対応する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ポアンカレ写像とカオス入門</h2>

            <p className="leading-relaxed">
                連続的な力学系の挙動を、断面を横切る「点」の履歴として捉える手法を学びます。
            </p>

            <ContentBox type="definition" title="Definition 3.6-2 (ポアンカレ写像)">
                <p>
                    連続的な流れの中にある断面 <InlineMath math="\Sigma" /> を設定し、点 <InlineMath math="x \in \Sigma" /> から出発した軌道が再び <InlineMath math="\Sigma" /> を横切る点 <InlineMath math="P(x)" /> を対応させる写像 <InlineMath math="P : \Sigma \to \Sigma" /> を<b>ポアンカレ写像</b>（Poincaré map）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ポアンカレ写像を用いると、系の安定性を離散的な写像の不動点の安定性として解析できます。
            </p>

            <ContentBox type="example" title="Example 3.6-3 (写像の安定性：ロジスティック写像記法)">
                <p>
                    ポアンカレ写像の典型例として、離散的な系 <InlineMath math="x_{n+1} = ax_n(1-x_n)" /> を考える。
                    パラメータ <InlineMath math="a" /> を大きくしていくと、不動点から 2 周期、4 周期... と周期倍分岐を繰り返し、最終的に決定論的ながら不規則な「カオス」へと至る。
                    連続系においても、3 次元以上であれば同様の仕組みでカオスが発生する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="カオスの定義と力学系理論">
                <p>
                    カオスの中心的な特徴は<b>初期値鋭敏性</b>（バタフライ効果）です。
                    決定論的な数式で書ける系であっても、初期値の極めて小さな差が、時間の経過とともに指数関数的に拡大し、長期予測を不可能にします。
                    ポアンカレ・ベンディクソンの定理が示す通り、これは 2 次元以下では起こり得ない現象であり、現代の非線形力学系理論の根幹をなすテーマです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>分岐</b>：パラメータの微小な変化が、系の構造（平衡点の数など）を劇的に変える現象。</li>
                    <li><b>ホップ分岐</b>：安定な平衡点から周期運動（リミットサイクル）が生まれる重要な分岐。</li>
                    <li><b>ポアンカレ写像</b>：解の軌道の一部を切り取ることで、系の本質を低次元の写像として捉える。</li>
                    <li><b>カオス</b>：決定論的でありながら、初期値鋭敏性により長期予測が困難な複雑な挙動。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
