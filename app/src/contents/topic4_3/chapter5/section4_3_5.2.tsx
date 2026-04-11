import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ParametrizationTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、ワイエルシュトラス形式の楕円曲線 <InlineMath math="E : y^2 = 4x^3 - g_2 x - g_3" /> を定義し、判別式 <InlineMath math="\Delta \neq 0" /> の条件が非特異性を保証することを見ました。本節では、ワイエルシュトラスの <InlineMath math="\wp" /> 関数とその導関数 <InlineMath math="\wp'" /> を用いることで、複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> がこの楕円曲線 <InlineMath math="E" /> と複素多様体として同型になることを証明します。これは楕円関数の理論における最も美しい結果の一つであり、解析的対象である複素トーラスと代数的対象である楕円曲線を結びつける「パラメトライゼーション定理」と呼ばれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">パラメトライゼーション</h2>

            <p>
                <InlineMath math="\wp" /> 関数が満たす微分方程式 <InlineMath math="(\wp'(z))^2 = 4\wp(z)^3 - g_2\wp(z) - g_3" /> は、点 <InlineMath math="(\wp(z), \wp'(z))" /> が曲線 <InlineMath math="y^2 = 4x^3 - g_2 x - g_3" /> 上にあることを意味しています。これを写像として定式化します。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.2-1 (パラメトライゼーション定理)</span>}>
                <p>
                    写像 <InlineMath math="\Phi : \mathbb{C}/\Lambda \to E" /> を次のように定める：
                </p>
                <BlockMath math="\Phi(z) = \begin{cases} (\wp(z), \wp'(z)) & (z \notin \Lambda) \\ O & (z \in \Lambda) \end{cases}" />
                <p>
                    ここで <InlineMath math="O = [0:1:0]" /> は無限遠点である。このとき、<InlineMath math="\Phi" /> は複素多様体としての同型を与える。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    写像 <InlineMath math="\Phi" /> が全単射であることを示せば、<InlineMath math="\Phi" /> はコンパクトリーマン面から非特異代数曲線への正則な全単射となるため、自動的に複素多様体としての同型となります。
                </p>
                <p>
                    <b>1. 全射性：</b>
                    任意の点 <InlineMath math="(x_0, y_0) \in E \setminus \{O\}" /> をとります。<InlineMath math="\wp(z)" /> は位数 2 の楕円関数であるため、任意の複素数 <InlineMath math="x_0" /> に対して <InlineMath math="\wp(z) = x_0" /> となる <InlineMath math="z \in \mathbb{C}/\Lambda" /> が（重複度を込めて）2つ存在します。それらを <InlineMath math="z_0, -z_0" /> とします。<InlineMath math="\wp(z)" /> が微分方程式を満たすことから、
                </p>
                <BlockMath math="(\wp'(z_0))^2 = 4x_0^3 - g_2 x_0 - g_3 = y_0^2" />
                <p>
                    となります。したがって、<InlineMath math="\wp'(z_0) = y_0" /> または <InlineMath math="\wp'(z_0) = -y_0" /> です。<InlineMath math="\wp'" /> は奇関数なので、<InlineMath math="\wp'(-z_0) = -\wp'(z_0)" /> が成り立ちます。よって、<InlineMath math="z_0" /> と <InlineMath math="-z_0" /> のいずれかは <InlineMath math="(x_0, y_0)" /> に写されます。<InlineMath math="O" /> には格子点 <InlineMath math="z \in \Lambda" /> が写されるため、全射性が示されました。
                </p>
                <p>
                    <b>2. 単射性：</b>
                    <InlineMath math="\Phi(z_1) = \Phi(z_2) \neq O" /> と仮定します。すなわち、<InlineMath math="\wp(z_1) = \wp(z_2)" /> かつ <InlineMath math="\wp'(z_1) = \wp'(z_2)" /> です。<InlineMath math="\wp(z_1) = \wp(z_2)" /> より、<InlineMath math="z_1 \equiv z_2 \pmod{\Lambda}" /> または <InlineMath math="z_1 \equiv -z_2 \pmod{\Lambda}" /> のいずれかが成り立ちます。
                </p>
                <p>
                    もし <InlineMath math="z_1 \equiv -z_2 \not\equiv z_2 \pmod{\Lambda}" /> であるとすると、<InlineMath math="\wp'(z_1) = \wp'(-z_2) = -\wp'(z_2)" /> となります。ところが仮定から <InlineMath math="\wp'(z_1) = \wp'(z_2)" /> であるため、<InlineMath math="\wp'(z_2) = 0" /> とならざるを得ません。これは <InlineMath math="z_2" /> が半周期点（<InlineMath math="\omega_1/2, \omega_2/2, (\omega_1+\omega_2)/2" />）であることを意味しますが、半周期点では <InlineMath math="z_2 \equiv -z_2 \pmod{\Lambda}" /> が成り立つため、矛盾します。
                </p>
                <p>
                    したがって、<InlineMath math="z_1 \equiv z_2 \pmod{\Lambda}" /> でなければならず、<InlineMath math="\Phi" /> は単射です。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この同型写像によって、半周期点は楕円曲線上の特徴的な点に対応します。
            </p>

            <ContentBox type="example" title="Example 5.2-1">
                <p>
                    半周期点 <InlineMath math="z = \omega_1/2" /> での像を考えます。<InlineMath math="\wp(\omega_1/2) = e_1" /> であり、<InlineMath math="\wp'(\omega_1/2) = 0" /> であるため、
                </p>
                <BlockMath math="\Phi(\omega_1/2) = (e_1, 0)" />
                <p>
                    となります。同様に、<InlineMath math="\omega_2/2" /> は <InlineMath math="(e_2, 0)" /> に、<InlineMath math="(\omega_1+\omega_2)/2" /> は <InlineMath math="(e_3, 0)" /> に対応します。これらは、楕円曲線 <InlineMath math="E" /> と <InlineMath math="x" /> 軸（<InlineMath math="y = 0" />）との 3 つの交点です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン-ロッホの定理との整合性</h2>

            <p>
                複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> が楕円曲線に埋め込まれるという事実は、リーマン面の一般論からも自然に導かれます。4-2 複素解析II で学んだリーマン-ロッホの定理を用いることで、この埋め込みを抽象的に理解することができます。
            </p>

            <ContentBox type="remark" title="代数幾何学的視点からの実現">
                <p>
                    パラメトライゼーション定理は、種数 <InlineMath math="g=1" /> のコンパクトリーマン面 <InlineMath math="\mathbb{C}/\Lambda" /> を、リーマン-ロッホの定理（4-2 §8.5）を用いて複素射影平面 <InlineMath math="\mathbb{CP}^2" /> に埋め込んだ結果として解釈できます。
                </p>
                <p>
                    一般に、コンパクトリーマン面に対して十分次数の高い因子 <InlineMath math="D" /> を選ぶと、その因子に付随する有理型関数の空間 <InlineMath math="L(D)" /> の基底を用いて、リーマン面を射影空間に埋め込むことができます。<InlineMath math="\mathbb{C}/\Lambda" /> の場合、原点 <InlineMath math="0" /> に対応する点 <InlineMath math="O" /> のみを極として許す関数空間を考えることで、<InlineMath math="\wp" /> や <InlineMath math="\wp'" /> が自然に現れます。
                </p>
            </ContentBox>

            <p>
                実際に、<InlineMath math="L(D)" /> の次元を計算し、具体的な基底を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 5.2-2">
                <p>
                    因子として <InlineMath math="D = 3 \cdot O" /> を考えます。これは、原点 <InlineMath math="0 \pmod{\Lambda}" /> で高々 3 位の極を持ち、他の点では正則な楕円関数の空間 <InlineMath math="L(3 \cdot O)" /> を定義します。
                </p>
                <p>
                    リーマン-ロッホの定理によれば、<InlineMath math="\deg D > 2g - 2 = 0" /> のとき、空間の次元 <InlineMath math="l(D)" /> は次のように与えられます。
                </p>
                <BlockMath math="l(D) = \deg D - g + 1"
                />
                <p>
                    いま、<InlineMath math="g = 1" />, <InlineMath math="\deg D = 3" /> なので、<InlineMath math="l(3 \cdot O) = 3 - 1 + 1 = 3" /> となります。
                </p>
                <p>
                    実際、この空間の基底として以下を取ることができます：
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>定数関数 <InlineMath math="1" /> （極を持たない）</li>
                    <li><InlineMath math="\wp(z)" /> （2位の極を持つ）</li>
                    <li><InlineMath math="\wp'(z)" /> （3位の極を持つ）</li>
                </ul>
                <p>
                    これら3つの関数は線形独立であり、次元が 3 であることと完全に一致します。この基底 <InlineMath math="(1, \wp(z), \wp'(z))" /> から作られる写像 <InlineMath math="z \mapsto [1 : \wp(z) : \wp'(z)] \in \mathbb{CP}^2" /> が、まさに前項で構成した埋め込み <InlineMath math="\Phi" />（のアフィンチャートでの表現）に他なりません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>写像 <InlineMath math="\Phi(z) = (\wp(z), \wp'(z))" /> により、複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> は楕円曲線 <InlineMath math="E : y^2 = 4x^3 - g_2 x - g_3" /> と同型になる。</li>
                    <li>この同型により、解析的な対象である二重周期関数と、代数的な対象である楕円曲線が直接結びつく。</li>
                    <li>この結果は、種数 1 のリーマン面を射影平面に埋め込むリーマン-ロッホの定理の具体的な実現と見なせる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
