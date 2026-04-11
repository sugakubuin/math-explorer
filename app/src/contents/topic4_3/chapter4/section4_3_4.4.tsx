import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EllipticFunctionSigmaRepresentation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節ではワイエルシュトラスの <InlineMath math="\sigma" /> 関数を導入し、その擬周期性を確認しました。本節では、これを用いて任意の楕円関数を構成・表現する方法を解説します。
                有理関数が一次式の積（因数分解）によって表現されるように、二重周期関数である楕円関数も、零点と極のデータをもとに <InlineMath math="\sigma" /> 関数の積の比として表すことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="\sigma" /> 関数による因数分解</h2>

            <p>
                楕円関数の基本定理（リウヴィルの定理系列、§2.4）により、楕円関数の基本周期平行四辺形内における零点の個数と極の個数は一致し、さらにそれらの位置の和は格子を法として合同になることが知られています。
                この強力な制約条件を満たす任意の零点・極のデータが与えられれば、それを実現する楕円関数を <InlineMath math="\sigma" /> 関数によって具体的に書き下すことができます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 4.4-1 (楕円関数の <InlineMath math="\sigma" /> 関数による表示)</span>}>
                <p>
                    任意の楕円関数 <InlineMath math="f(z)" /> は、その基本周期平行四辺形内の零点を <InlineMath math="a_1, \dots, a_n" />、極を <InlineMath math="b_1, \dots, b_n" />（重複度を込めて）とすると、ある定数 <InlineMath math="C" /> を用いて次のように表される。
                </p>
                <BlockMath math="f(z) = C \frac{\prod_{i=1}^n \sigma(z-a_i)}{\prod_{j=1}^n \sigma(z-b_j)}" />
                <p>
                    ただし、零点と極の和は格子 <InlineMath math="\Lambda" /> を法として合同である：
                    <BlockMath math="\sum_{i=1}^n a_i \equiv \sum_{j=1}^n b_j \pmod{\Lambda}" />
                </p>
            </ContentBox>

            <p>
                定理の条件 <InlineMath math="\sum a_i \equiv \sum b_j \pmod{\Lambda}" /> は、必要であれば <InlineMath math="a_1" /> などの代表元を適当な格子点だけずらすことで、等式 <InlineMath math="\sum_{i=1}^n a_i = \sum_{j=1}^n b_j" /> として成立させることができます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    条件より、<InlineMath math="\sum_{i=1}^n a_i = \sum_{j=1}^n b_j" /> となるように代表元を選び直すことができる。このもとで、関数
                    <BlockMath math="g(z) = \frac{\prod_{i=1}^n \sigma(z-a_i)}{\prod_{j=1}^n \sigma(z-b_j)}" />
                    を考える。これが二重周期関数（楕円関数）であることを示す。
                    <InlineMath math="\sigma" /> 関数の擬周期性 <InlineMath math="\sigma(z + \omega_k) = -e^{\eta_k(z + \omega_k/2)}\sigma(z)" /> を用いると、
                </p>
                <BlockMath math="\begin{aligned} g(z + \omega_k) &= \frac{\prod_{i=1}^n \sigma(z + \omega_k - a_i)}{\prod_{j=1}^n \sigma(z + \omega_k - b_j)} \\ &= \frac{\prod_{i=1}^n -e^{\eta_k(z - a_i + \omega_k/2)}\sigma(z-a_i)}{\prod_{j=1}^n -e^{\eta_k(z - b_j + \omega_k/2)}\sigma(z-b_j)} \\ &= g(z) \cdot \exp\left( \eta_k \sum_{i=1}^n (z - a_i + \omega_k/2) - \eta_k \sum_{j=1}^n (z - b_j + \omega_k/2) \right) \\ &= g(z) \cdot \exp\left( \eta_k \left( \sum_{j=1}^n b_j - \sum_{i=1}^n a_i \right) \right). \end{aligned}" />
                <p>
                    仮定 <InlineMath math="\sum a_i = \sum b_j" /> より、指数部分は <InlineMath math="0" /> となる。よって <InlineMath math="g(z + \omega_k) = g(z)" /> であり、<InlineMath math="g(z)" /> は楕円関数である。
                </p>
                <p>
                    <InlineMath math="\sigma(z)" /> の零点は格子点のみであるから、<InlineMath math="g(z)" /> は <InlineMath math="f(z)" /> と全く同じ零点と極（重複度込み）を持つ。したがって、比 <InlineMath math="f(z)/g(z)" /> は零点も極も持たない整な楕円関数となる。リウヴィルの第一定理より、これは定数 <InlineMath math="C" /> に等しい。
                    よって <InlineMath math="f(z) = C g(z)" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理により、任意の楕円関数は <InlineMath math="\sigma" /> 関数の比として表示できることが保証されます。
                以下に具体的な適用例を示します。
            </p>

            <ContentBox type="example" title="Example 4.4-1">
                <p>
                    関数 <InlineMath math="f(z) = \wp(z) - \wp(a)" /> （ただし <InlineMath math="a \notin \Lambda" />）を <InlineMath math="\sigma" /> 関数で表す。
                </p>
                <p>
                    <InlineMath math="f(z)" /> は <InlineMath math="z = 0" /> に2位の極を持つ（<InlineMath math="b_1 = 0, b_2 = 0" />）。
                    零点は <InlineMath math="\wp(z) = \wp(a)" /> となる点であり、<InlineMath math="\wp" /> は偶関数かつ位数2であるから、基本周期平行四辺形内の零点は <InlineMath math="z = a, -a" /> である（<InlineMath math="a_1 = a, a_2 = -a" />）。
                </p>
                <p>
                    零点と極の和を確認すると、<InlineMath math="a + (-a) = 0 = 0 + 0" /> であり、定理の条件を満たしている。
                    したがって、定理 4.4-1 より次のように表される。
                </p>
                <BlockMath math="\wp(z) - \wp(a) = C \frac{\sigma(z-a)\sigma(z+a)}{\sigma(z)^2}" />
                <p>
                    定数 <InlineMath math="C" /> を決定するために、<InlineMath math="z \to 0" /> の極限を考える。
                    <InlineMath math="\wp(z) = 1/z^2 + O(z^2)" />、<InlineMath math="\sigma(z) = z + O(z^5)" /> であるから、両辺に <InlineMath math="z^2" /> を掛けて <InlineMath math="z \to 0" /> とすると、
                </p>
                <BlockMath math="1 = C \frac{\sigma(-a)\sigma(a)}{1} = -C \sigma(a)^2" />
                <p>
                    よって <InlineMath math="C = -1/\sigma(a)^2" /> を得る（<InlineMath math="\sigma" /> の奇関数性を用いた）。結果として、次の美しい公式が得られる。
                </p>
                <BlockMath math="\wp(z) - \wp(a) = -\frac{\sigma(z-a)\sigma(z+a)}{\sigma(z)^2 \sigma(a)^2}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="\sigma" /> 関数の応用</h2>

            <p>
                前項の定理と具体例から明らかなように、<InlineMath math="\sigma" /> 関数は楕円関数の構成ブロックとして非常に強力です。
                さらなる応用として、<InlineMath math="\wp'(z)" /> の表示を導出してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.4-2">
                <p>
                    <InlineMath math="\wp'(z)" /> の <InlineMath math="\sigma" /> 関数による表示。
                </p>
                <p>
                    <InlineMath math="\wp'(z)" /> は <InlineMath math="z = 0" /> に3位の極を持つ（<InlineMath math="b_1 = b_2 = b_3 = 0" />）。
                    零点は半周期点 <InlineMath math="\omega_1/2, \omega_2/2, (\omega_1+\omega_2)/2" /> である（<InlineMath math="a_1 = \omega_1/2, a_2 = \omega_2/2, a_3 = (\omega_1+\omega_2)/2" />）。
                </p>
                <p>
                    和の条件を確認すると、<InlineMath math="a_1 + a_2 + a_3 = \omega_1 + \omega_2 \equiv 0 \pmod{\Lambda}" /> であり、条件を満たす。
                    したがって、
                </p>
                <BlockMath math="\wp'(z) = C \frac{\sigma(z - \omega_1/2)\sigma(z - \omega_2/2)\sigma(z - (\omega_1+\omega_2)/2)}{\sigma(z)^3}" />
                <p>
                    先ほどと同様に <InlineMath math="z \to 0" /> での展開を比較することで、定数 <InlineMath math="C" /> を決定できる（詳細は割愛）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="楕円関数の構成法">
                <p>
                    本節で見た <InlineMath math="\sigma" /> 関数による表示は、代数学における多項式による有理関数の表示の完全な類似です。
                    一方、第6章で学ぶ「テータ関数」を用いても同様に楕円関数を構成することができます。
                    <InlineMath math="\sigma" /> 関数は格子 <InlineMath math="\Lambda" /> に直接基づくワイエルシュトラスの流儀であり、テータ関数は母数 <InlineMath math="\tau" /> に基づくヤコビの流儀です。
                    この2つの強力な構成法は、§6.5 において明示的な関係式を通じて見事に統合されることになります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>任意の楕円関数は、その零点と極のデータを用いて <InlineMath math="\sigma" /> 関数の比として完全に分解（因数分解）できる。</li>
                    <li>この因数分解表現が成立するためには、零点と極の和が格子を法として合同でなければならない（<InlineMath math="\sum a_i \equiv \sum b_j" />）。</li>
                    <li><InlineMath math="\wp(z) - \wp(a)" /> や <InlineMath math="\wp'(z)" /> など、具体的な楕円関数の美しい積表示が得られる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
