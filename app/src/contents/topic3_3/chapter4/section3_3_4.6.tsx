import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function L2HilbertSpace() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数多ある <InlineMath math="L^p" /> 空間の中でも、<InlineMath math="p = 2" /> のケースは極めて特殊で重要な地位を占めています。
                それは、<InlineMath math="L^2" /> 空間がただのバナッハ空間であるだけでなく、「内積」を備えた<b>ヒルベルト空間</b>となる唯一の <InlineMath math="L^p" /> 空間だからです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">L2 の内積構造</h2>

            <p>
                複素数値関数の場合、内積は片方の複素共役をとって積分することで定義されます。
            </p>

            <ContentBox type="definition" title="Definition 4.6-1 (L^2 の内積)">
                <p>
                    <InlineMath math="f, g \in L^2(X, \mu)" /> に対し、その <b>内積 (inner product)</b> を次のように定義する：
                    <BlockMath math="\langle f, g \rangle := \int_X f(x)\overline{g(x)} \, d\mu(x)" />
                </p>
                <p className="mt-4">
                    ヘルダーの不等式により積 <InlineMath math="f\overline{g}" /> は可積分（<InlineMath math="L^1" />）であるため、この内積は明確に定まる。
                </p>
            </ContentBox>

            <p className="mt-6">
                この内積により、ノルムは <InlineMath math="\|f\|_2 = \sqrt{\langle f, f \rangle}" /> となり、幾何学的な「角度」や「直交性」の概念が導入されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヒルベルト空間としての性質</h2>

            <p>
                リース・フィッシャーの定理による完備性と、内積の存在を合わせることで、<InlineMath math="L^2" /> はヒルベルト空間になります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.6-1 (L^2 はヒルベルト空間)">
                <p>
                    <InlineMath math="L^2(X, \mu)" /> は、上記の内積に関して <b>ヒルベルト空間 (Hilbert space)</b> をなす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    内積の公理、および完備性を確認する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><b>線形性</b>：積分の線形性より <InlineMath math="\langle \alpha f + \beta g, h \rangle = \alpha \langle f, h \rangle + \beta \langle g, h \rangle" /> が成り立つ。</li>
                    <li><b>共役対称性</b>：<InlineMath math="\overline{\langle g, f \rangle} = \overline{\int g\overline{f} \, d\mu} = \int \overline{g}f \, d\mu = \langle f, g \rangle" />。</li>
                    <li><b>正定値性</b>：<InlineMath math="\langle f, f \rangle = \int |f|^2 \, d\mu \geq 0" />。また等号成立は <InlineMath math="f = 0" /> a.e. のときに限る（同値類としての一致）。</li>
                    <li><b>完備性</b>：リース・フィッシャーの定理 (Theorem 4.4-1) より、<InlineMath math="L^2" /> はノルムに関して完備である。</li>
                </ol>
                <p className="mt-4">
                    以上より、<InlineMath math="L^2" /> は完備な内積空間であり、ヒルベルト空間である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.6-1 (正規直交系とフーリエ解析)">
                <p>
                    <InlineMath math="L^2([0, 1])" /> における指数関数列 <InlineMath math="\phi_n(x) = e^{2\pi i nx}" /> (<InlineMath math="n \in \mathbb{Z}" />) を考えてみよう。
                    内積を計算すると
                    <BlockMath math="\langle \phi_n, \phi_m \rangle = \int_0^1 e^{2\pi i (n-m)x} \, dx = \begin{cases} 1 & (n=m) \\ 0 & (n\neq m) \end{cases}" />
                    となり、これらは <b>正規直交系</b> をなす。これはフーリエ級数展開の数学的な基礎となります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ヒルベルト空間の幾何学">
                <p>
                    ヒルベルト空間の最大の特徴は、無限次元でありながら有限次元のユークリッド幾何学に近い直観が働く点にあります。
                    「射影定理」や「パラグラム（平行四辺形）の等式」が成り立ち、直交分解が可能であるため、量子力学の波動関数の理論や、信号処理のアルゴリズムにおいて決定的な役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b><InlineMath math="L^2" /> 空間</b> は、内積 <InlineMath math="\langle f, g \rangle = \int f\overline{g}" /> を持つ唯一の <InlineMath math="L^p" /> 空間である。</li>
                    <li><InlineMath math="L^2" /> は <b>ヒルベルト空間</b> であり、完備性と幾何学的構造を併せ持つ。</li>
                    <li>正規直交系（フーリエ基底など）を用いた展開や、内積による直交性の議論が強力に機能する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
