import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexTorusIsomorphismClass() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までに、任意の複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> がワイエルシュトラスの <InlineMath math="\wp" /> 関数を通じて楕円曲線と同型になることを見ました。本節では、どのようなときに二つの複素トーラスが（複素多様体として）同型になるのか、そしてその同型類を完全に決定する不変量は何かを明らかにします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">格子の相似と <InlineMath math="j" /> 不変量</h2>

            <p>
                まず、複素トーラスの同型という幾何学的な概念が、格子という代数的な対象のどのような関係に対応するのかを定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (格子の相似)">
                <p>
                    二つの格子 <InlineMath math="\Lambda" /> と <InlineMath math="\Lambda'" /> が<b>相似（similar）</b>であるとは、ある非零複素数 <InlineMath math="\alpha \in \mathbb{C}^*" /> が存在して、
                </p>
                <BlockMath math="\Lambda' = \alpha\Lambda" />
                <p>
                    が成り立つことをいう。このとき <InlineMath math="\Lambda \sim \Lambda'" /> と書く。
                </p>
            </ContentBox>

            <p>
                格子の相似は、複素平面全体における回転と拡大・縮小に対応します。直感的には、形が同じ格子から作られる複素トーラスは同じ形（同型）になりそうです。実際、この幾何学的な直感は正しく、さらに Chapter 3 で導入した <InlineMath math="j" /> 不変量がこの同型類を完全に分類します。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.4-1 (<InlineMath math="j" /> 不変量による完全分類)</span>}>
                <p>
                    二つの格子 <InlineMath math="\Lambda, \Lambda'" /> について、以下の3条件は互いに同値である。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>複素多様体として <InlineMath math="\mathbb{C}/\Lambda \cong \mathbb{C}/\Lambda'" /> である。</li>
                    <li>格子として相似である（<InlineMath math="\Lambda \sim \Lambda'" />）。</li>
                    <li><InlineMath math="j" /> 不変量が一致する（<InlineMath math="j(\Lambda) = j(\Lambda')" />）。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1 <InlineMath math="\implies" /> 2) 同型写像 <InlineMath math="F : \mathbb{C}/\Lambda \to \mathbb{C}/\Lambda'" /> が与えられたとする。この写像は普遍被覆である複素平面 <InlineMath math="\mathbb{C}" /> 上の正則写像 <InlineMath math="\tilde{F} : \mathbb{C} \to \mathbb{C}" /> にリフトでき、<InlineMath math="\tilde{F}(0) = 0" /> としてよい。<InlineMath math="F" /> がトーラス上の同型であることから、<InlineMath math="\tilde{F}(z + \omega) - \tilde{F}(z)" /> は格子 <InlineMath math="\Lambda'" /> の元となる。これが連続的に変化しないことから微分すると <InlineMath math="\tilde{F}'(z+\omega) = \tilde{F}'(z)" /> となり、<InlineMath math="\tilde{F}'" /> は二重周期を持つ整関数、すなわちリウヴィルの定理より定数 <InlineMath math="\alpha" /> となる。よって <InlineMath math="\tilde{F}(z) = \alpha z" /> であり、これが格子を保つ全単射であるため <InlineMath math="\Lambda' = \alpha\Lambda" /> を得る。
                </p>
                <p>
                    (2 <InlineMath math="\implies" /> 3) §3.5 で示した通り、<InlineMath math="j" /> 不変量は格子のスカラー倍に関して不変であるため、<InlineMath math="\Lambda' = \alpha\Lambda" /> ならば <InlineMath math="j(\Lambda') = j(\alpha\Lambda) = j(\Lambda)" /> となる。
                </p>
                <p>
                    (3 <InlineMath math="\implies" /> 1) <InlineMath math="j(\Lambda) = j(\Lambda')" /> とする。<InlineMath math="\wp" /> 関数の微分方程式を考えることで、<InlineMath math="j" /> の定義から適当なスカラー <InlineMath math="\alpha \in \mathbb{C}^*" /> を選べば <InlineMath math="g_2(\Lambda') = g_2(\alpha\Lambda)" /> かつ <InlineMath math="g_3(\Lambda') = g_3(\alpha\Lambda)" /> とできる。格子は <InlineMath math="g_2, g_3" /> により一意に定まるため <InlineMath math="\Lambda' = \alpha\Lambda" /> となり、<InlineMath math="z \mapsto \alpha z" /> が同型を与える。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、楕円曲線の世界において <InlineMath math="j" /> 不変量が「モジュライ（パラメータ）」として機能することを示しています。具体的な格子で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 5.4-1">
                <p>
                    ガウス格子 <InlineMath math="\Lambda_G = \mathbb{Z} + i\mathbb{Z}" /> とアイゼンシュタイン格子 <InlineMath math="\Lambda_E = \mathbb{Z} + e^{2\pi i/3}\mathbb{Z}" /> を考える。
                </p>
                <p>
                    §3.5 で計算した通り、ガウス格子の <InlineMath math="j" /> 不変量は <InlineMath math="j(\Lambda_G) = 1728" /> であり、アイゼンシュタイン格子のそれは <InlineMath math="j(\Lambda_E) = 0" /> である。
                </p>
                <p>
                    これらは値が異なるため、Theorem 5.4-1 より、これら二つの格子から作られる複素トーラスは複素多様体として同型ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自己同型群</h2>

            <p>
                複素トーラスの同型類を分類できたので、次に一つの複素トーラスが持つ「自己同型」について考えます。自己同型とは、複素トーラスから自分自身への同型写像のことです。
            </p>

            <ContentBox type="proposition" title="Proposition 5.4-1">
                <p>
                    一般の（大多数の）楕円曲線 <InlineMath math="\mathbb{C}/\Lambda" /> の自己同型群は <InlineMath math="\{\pm 1\}" /> に同型である。すなわち、恒等写像 <InlineMath math="z \mapsto z" /> と反転 <InlineMath math="z \mapsto -z" /> のみからなる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 5.4-1 の証明と同様に、自己同型は <InlineMath math="\mathbb{C}" /> の自己同型 <InlineMath math="z \mapsto \alpha z" /> にリフトされ、これが自己同型であるための必要十分条件は <InlineMath math="\alpha\Lambda = \Lambda" /> となることである。
                </p>
                <p>
                    格子 <InlineMath math="\Lambda" /> において、絶対値が最小の非零ベクトルを <InlineMath math="\omega" /> とする。<InlineMath math="\alpha\Lambda = \Lambda" /> ならば <InlineMath math="\alpha\omega \in \Lambda" /> であり、<InlineMath math="|\alpha\omega| = |\alpha||\omega|" /> となる。<InlineMath math="|\alpha| < 1" /> であれば <InlineMath math="\omega" /> より小さな非零ベクトルが存在することになり矛盾。逆写像を考えれば <InlineMath math="|\alpha| = 1" /> でなければならない。
                </p>
                <p>
                    一般の格子では、長さが等しいベクトルは <InlineMath math="\pm\omega" /> のみであるため、<InlineMath math="\alpha = \pm 1" /> に限られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                しかし、特別な形状をした格子では、より多くの対称性を持つことがあります。これが「例外的な自己同型」です。
            </p>

            <ContentBox type="example" title="Example 5.4-2">
                <p>
                    <b>ガウス格子 (<InlineMath math="j=1728" />):</b> <InlineMath math="\Lambda_G = \mathbb{Z} + i\mathbb{Z}" /> の場合、<InlineMath math="i\Lambda_G = i\mathbb{Z} + i^2\mathbb{Z} = \Lambda_G" /> となり、<InlineMath math="\alpha = \pm i" /> も自己同型を与える。よって自己同型群は <InlineMath math="\{\pm 1, \pm i\} \cong \mathbb{Z}/4\mathbb{Z}" />（4次の巡回群）となる。
                </p>
                <p>
                    <b>アイゼンシュタイン格子 (<InlineMath math="j=0" />):</b> <InlineMath math="\rho = e^{2\pi i/3}" /> とする。<InlineMath math="\Lambda_E = \mathbb{Z} + \rho\mathbb{Z}" /> において、<InlineMath math="\rho\Lambda_E = \Lambda_E" /> となるため、自己同型群は <InlineMath math="\{\pm 1, \pm \rho, \pm \rho^2\} \cong \mathbb{Z}/6\mathbb{Z}" />（6次の巡回群）となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="自己同型と虚数乗法">
                <p>
                    自己同型環 <InlineMath math="\text{End}(\mathbb{C}/\Lambda)" /> は通常 <InlineMath math="\mathbb{Z}" /> と同型ですが、上記の特別な格子のように <InlineMath math="\text{End}(\mathbb{C}/\Lambda)" /> が <InlineMath math="\mathbb{Z}" /> より真に大きくなる（虚二次体の整数環のオーダーとなる）場合があります。これを<b>虚数乗法（Complex Multiplication, CM）</b>を持つといいます。
                </p>
                <p>
                    虚数乗法を持つ楕円曲線は、整数論において極めて重要な役割を果たします。例えば、その <InlineMath math="j" /> 不変量は常に代数的整数となり、クロネッカーの青春の夢（類体論の構成）の解決に用いられます。この話題については後の展望（§8.3）で触れます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>複素トーラスの同型類は、格子の相似類と一対一に対応する。</li>
                    <li><InlineMath math="j" /> 不変量は、複素トーラスの同型類を完全に分類するパラメータである。</li>
                    <li>一般の楕円曲線の自己同型群は <InlineMath math="\{\pm 1\}" /> であるが、<InlineMath math="j=1728" /> や <InlineMath math="j=0" /> のような特別な楕円曲線はより大きな自己同型群を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
