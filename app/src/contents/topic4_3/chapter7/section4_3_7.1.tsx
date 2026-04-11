import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JacobiEllipticFunctionsDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、第1章で触れた楕円積分の反転問題の解として、ヤコビの楕円関数を定義します。ヤコビの楕円関数は、ワイエルシュトラスの <InlineMath math="\wp" /> 関数と並んで楕円関数論のもう一つの重要な体系をなすものであり、物理学や工学の非線形問題において非常に有用な道具となります。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">sn 関数の定義</h2>

            <p>§1.4 において、ガウスやアーベル、ヤコビらが楕円積分の逆関数として新しい関数を定義するという発想に至ったことを見ました。ここでは、第一種不完全楕円積分の逆関数として、最も基本的なヤコビの楕円関数である <InlineMath math="\text{sn}" /> 関数を定義します。</p>

            <ContentBox type="definition" title="Definition 7.1-1 (ヤコビの sn 関数)">
                <p>
                    第一種不完全楕円積分
                    <BlockMath math="u = \int_0^x \frac{dt}{\sqrt{(1-t^2)(1-k^2t^2)}}" />
                    （ただし <InlineMath math="0 \leq k \leq 1" />）の逆関数として、<b>ヤコビの sn 関数（Jacobi's sn function）</b>を定義し、<InlineMath math="x = \text{sn}(u, k)" /> または単に <InlineMath math="x = \text{sn}\, u" /> と表す。
                </p>
                <p>
                    ここで <InlineMath math="k" /> を母数（modulus）と呼ぶ。
                </p>
            </ContentBox>

            <p>この定義から、<InlineMath math="\text{sn}" /> 関数は明らかに奇関数であり、原点付近での振る舞いは <InlineMath math="\text{sn}(0, k) = 0" /> となります。</p>

            <ContentBox type="remark" title="極限における振る舞い">
                <p>
                    母数 <InlineMath math="k" /> が極端な値をとる場合の <InlineMath math="\text{sn}" /> 関数の振る舞いを見てみましょう。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <InlineMath math="k = 0" /> のとき、積分は <InlineMath math="u = \int_0^x (1-t^2)^{-1/2} dt = \arcsin x" /> となり、逆関数は <InlineMath math="\text{sn}(u, 0) = \sin u" /> です。
                    </li>
                    <li>
                        <InlineMath math="k = 1" /> のとき、積分は <InlineMath math="u = \int_0^x (1-t^2)^{-1} dt = \text{arctanh}\, x" /> となり、逆関数は <InlineMath math="\text{sn}(u, 1) = \tanh u" /> です。
                    </li>
                </ul>
                <p>
                    このように、ヤコビの楕円関数は三角関数と双曲線関数の中間的な存在であるとみなすことができます。これらは単純な周期関数ですが、一般の <InlineMath math="0 < k < 1" /> に対しては、複素数平面上で二重周期を持つ真の楕円関数となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">cn, dn の定義とテータ関数表示</h2>

            <p><InlineMath math="\text{sn}" /> 関数に付随して、三角関数の余弦に対応する <InlineMath math="\text{cn}" /> 関数や、楕円積分特有の因子に対応する <InlineMath math="\text{dn}" /> 関数を定義します。</p>

            <ContentBox type="definition" title="Definition 7.1-2 (cn 関数と dn 関数)">
                <p>
                    ヤコビの <b>cn 関数</b> と <b>dn 関数</b> を次のように定義する。
                </p>
                <BlockMath math="\text{cn}(u, k) = \sqrt{1 - \text{sn}^2(u, k)}" />
                <BlockMath math="\text{dn}(u, k) = \sqrt{1 - k^2\text{sn}^2(u, k)}" />
                <p>
                    符号は、<InlineMath math="u = 0" /> における値が <InlineMath math="\text{cn}(0, k) = 1" /> および <InlineMath math="\text{dn}(0, k) = 1" /> となるように連続的に選ぶ。
                </p>
            </ContentBox>

            <p>これらの関数は、第6章で導入したテータ関数を用いて明示的に表示することができます。これにより、ヤコビの楕円関数が実際に複素平面全体で有理型関数（すなわち楕円関数）として拡張されることが明確になります。</p>

            <ContentBox type="proposition" title="Proposition 7.1-1 (テータ関数による表示)">
                <p>
                    <InlineMath math="K = K(k)" /> を第一種完全楕円積分とし、<InlineMath math="v = \frac{\pi u}{2K}" /> とおく。このとき、ヤコビの楕円関数はテータ関数を用いて次のように表される。
                </p>
                <BlockMath math="\text{sn}(u) = \frac{\theta_3(0)}{\theta_2(0)} \frac{\theta_1(v)}{\theta_4(v)}" />
                <BlockMath math="\text{cn}(u) = \frac{\theta_4(0)}{\theta_2(0)} \frac{\theta_2(v)}{\theta_4(v)}" />
                <BlockMath math="\text{dn}(u) = \frac{\theta_4(0)}{\theta_3(0)} \frac{\theta_3(v)}{\theta_4(v)}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ここでは <InlineMath math="\text{sn}" /> 関数についての表示のみ略証する。
                    右辺の関数 <InlineMath math="f(u) = \frac{\theta_3(0)}{\theta_2(0)} \frac{\theta_1(v)}{\theta_4(v)}" /> を考える。<InlineMath math="\theta_1" /> は奇関数であり <InlineMath math="v=0" /> で <InlineMath math="0" /> となるため、<InlineMath math="f(0)=0" /> かつ <InlineMath math="f(-u) = -f(u)" /> を満たす。
                    また、テータ関数の準周期性（§6.2）から、<InlineMath math="\theta_1" /> と <InlineMath math="\theta_4" /> の比を考えると、<InlineMath math="f(u)" /> は二重周期関数、すなわち楕円関数となることが確認できる。
                    さらに、各テータ関数の満たす微分方程式と第一種楕円積分の関係を比較することで、<InlineMath math="f(u)" /> が第一種楕円積分の逆関数として定義された <InlineMath math="\text{sn}(u)" /> と定数倍を除いて一致することがわかる。係数は <InlineMath math="u=K" /> での値を比較することで決定される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>最後に、具体的な母数に対する例を見ておきましょう。</p>

            <ContentBox type="example" title="Example 7.1-1">
                <p>
                    母数が <InlineMath math="k = \frac{1}{\sqrt{2}}" /> の場合を考える。このときの楕円積分は、変数変換 <InlineMath math="t^2 = 1 - s^4" /> などを用いることで、§1.1 で登場したレムニスケートの弧長積分に関連づけられる。
                </p>
                <p>
                    実際、レムニスケート関数 <InlineMath math="\text{sl}(u)" /> は
                    <BlockMath math="u = \int_0^x \frac{dt}{\sqrt{1-t^4}}" />
                    の逆関数として定義されるが、これはヤコビの <InlineMath math="\text{sn}" /> 関数を用いて
                    <BlockMath math="\text{sl}(u) = \frac{1}{\sqrt{2}} \frac{\text{sn}(\sqrt{2}u, 1/\sqrt{2})}{\text{dn}(\sqrt{2}u, 1/\sqrt{2})}" />
                    のように表すことができる。また、適当なスケール変換を行えば、<InlineMath math="\text{sn}(u, 1/\sqrt{2})" /> 自身もレムニスケートの幾何学的な性質を記述する関数となる。
                </p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>第一種不完全楕円積分の逆関数としてヤコビの <InlineMath math="\text{sn}(u, k)" /> 関数を定義した。</li>
                    <li><InlineMath math="\text{sn}" /> 関数を用いて、<InlineMath math="\text{cn}(u, k)" /> および <InlineMath math="\text{dn}(u, k)" /> 関数を定義した。</li>
                    <li>ヤコビの楕円関数は、第6章のテータ関数を用いて明示的に表示することができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
