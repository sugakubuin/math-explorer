import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LHopitalsRule() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                関数 <InlineMath math="f(x)" /> と <InlineMath math="g(x)" /> の比 <InlineMath math="\frac{f(x)}{g(x)}" /> の極限を考える際、<InlineMath math="x \to a" /> のときに分子も分母も共に <InlineMath math="0" /> に近づく状態を「<InlineMath math="\frac{0}{0}" /> の不定形」と呼びます。
                高校数学で習う直感的な限界突破の裏技として有名なのが「ロピタルの定理（L'Hôpital's rule）」です。分子と分母をそれぞれ微分してから極限をとっても結果が一致するという強力な定理ですが、これを厳密に証明するためには、§6.2 で学習した「コーシーの平均値定理」が決定的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ロピタルの定理のステートメント</h2>

            <ContentBox type="theorem" title="Theorem 6.4-1 (ロピタルの定理)">
                <p>
                    関数 <InlineMath math="f, g" /> が点 <InlineMath math="a" /> を含むある開区間（ただし点 <InlineMath math="a" /> 自身は除いてもよい）において微分可能であり、次の条件を満たすとする。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="\lim_{x \to a} f(x) = 0" /> かつ <InlineMath math="\lim_{x \to a} g(x) = 0" /> （<InlineMath math="\frac{0}{0}" /> の不定形）</li>
                    <li>点 <InlineMath math="a" /> の近傍のすべての <InlineMath math="x \neq a" /> に対して <InlineMath math="g'(x) \neq 0" /></li>
                    <li>極限 <InlineMath math="\lim_{x \to a} \frac{f'(x)}{g'(x)}" /> が存在する（または <InlineMath math="\pm \infty" /> である）</li>
                </ol>
                <p className="mt-4">
                    このとき、極限 <InlineMath math="\lim_{x \to a} \frac{f(x)}{g(x)}" /> も存在して、
                </p>
                <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
                <p>
                    が成り立つ。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    ※ <InlineMath math="\frac{\infty}{\infty}" /> の不定形や、<InlineMath math="x \to \infty" /> の極限に対しても、全く同様の形の定理が成立します。
                </p>
            </ContentBox>

            <p>
                「関数や極限の割り算を、直近の変位の比（微分の比）にすり替える」というまさに微分本来の意味（変化率の追跡）を体現した鮮やかな手法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの平均値定理による証明</h2>

            <p>
                この定理がなぜ成り立つのか、そのメカニズムは「コーシーの平均値定理」を適用することで明らかになります。
            </p>

            <ContentBox type="proof" title="Proof (0/0 型で x → a+0 の場合)">
                <p>
                    話を簡単にするため、右側極限 <InlineMath math="x \to a+0" />（すなわち区間 <InlineMath math="(a, x]" />）のみで考える。左側極限も全く同様に証明でき、両者が一致すれば両側極限となる。
                </p>
                <p className="mt-4">
                    仮定より <InlineMath math="\lim_{x \to a} f(x) = 0" /> および <InlineMath math="\lim_{x \to a} g(x) = 0" /> であるため、<InlineMath math="f(a) = 0, g(a) = 0" /> と「定義（または連続的に拡張）」する。
                    これにより、関数 <InlineMath math="f, g" /> は閉区間 <InlineMath math="[a, x]" /> で連続となり、開区間 <InlineMath math="(a, x)" /> で微分可能となる。
                </p>
                <p className="mt-4">
                    ここで、区間 <InlineMath math="[a, x]" /> に対してコーシーの平均値定理（Theorem 6.2-3）を適用する。<br />
                    （条件の <InlineMath math="g'(t) \neq 0" /> も満たしているため適用可能。）<br />
                    定理によれば、開区間 <InlineMath math="(a, x)" /> 内にある点 <InlineMath math="c" /> が存在して、次が成り立つ。
                </p>
                <BlockMath math="\frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c)}{g'(c)}" />
                <p className="mt-4">
                    ところが、先に定義した通り <InlineMath math="f(a) = 0, g(a) = 0" /> であるため、左辺はそのまま目的の関数比になる。
                </p>
                <BlockMath math="\frac{f(x)}{g(x)} = \frac{f'(c)}{g'(c)}" />
                <p className="mt-4">
                    さて、極限 <InlineMath math="x \to a+0" /> を考える。<InlineMath math="c" /> は常に区間 <InlineMath math="(a, x)" /> の内側に取られる、すなわち <InlineMath math="a < c < x" /> である。<br />
                    したがって、「はさみうちの原理」により、<InlineMath math="x \to a" /> と狭められていくと、その間にある点 <InlineMath math="c" /> も強制的に <InlineMath math="c \to a" /> とならざるを得ない。
                </p>
                <p className="mt-4">
                    条件(3)「極限 <InlineMath math="\lim_{t \to a} \frac{f'(t)}{g'(t)}" /> が存在する」より、<InlineMath math="c \to a" /> のとき右辺の極限は確定する。
                    その結果、左辺の極限も存在して、両者は一致する。
                </p>
                <BlockMath math="\lim_{x \to a+0} \frac{f(x)}{g(x)} = \lim_{c \to a} \frac{f'(c)}{g'(c)} = \lim_{t \to a} \frac{f'(t)}{g'(t)}" />
                <p className="mt-2">
                    左側極限も同様であるから、定理は示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このように、ロピタルの定理の実態は「コーシーの平均値定理を活用して <InlineMath math="f(a) = g(a) = 0" /> という原点を消去し、関数の割り算を微分の割り算へすり替えたもの」に過ぎません。極限の基礎理論である <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> や平均値の定理が、応用上有用な計算ルールを厳密に正当化している美しい例です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">高階導関数におけるロピタルの定理の繰り返し適用</h2>

            <p>
                さて、1回微分しただけではまだ <InlineMath math="\frac{0}{0}" /> の不定形が解消されないケースも多々あります。その場合は、ロピタルの定理の条件を新しく作られた関数 <InlineMath math="f'" /> と <InlineMath math="g'" /> が再び満たしている限り、何度でも（高階導関数に対して）繰り返し適用することができます。
            </p>

            <ContentBox type="example" title="Example 6.4-1 (ロピタルの定理の2回適用)">
                <p>
                    極限 <InlineMath math="\lim_{x \to 0} \frac{1 - \cos x}{x^2}" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="x \to 0" /> を代入すると、分子は <InlineMath math="1 - \cos 0 = 0" />、分母は <InlineMath math="0^2 = 0" /> となり <InlineMath math="\frac{0}{0}" /> 不定形である。
                    </li>
                    <li>
                        分子と分母を1回微分する。分子は <InlineMath math="\sin x" />、分母は <InlineMath math="2x" />。<br />
                        よって考える極限は <InlineMath math="\lim_{x \to 0} \frac{\sin x}{2x}" /> となる。<br />
                        しかし、再び <InlineMath math="x \to 0" /> を代入すると分母子とも <InlineMath math="0" /> となり、まだ <InlineMath math="\frac{0}{0}" /> 不定形のままである。
                    </li>
                    <li>
                        もう一度（2回目の）微分を行う。分子は <InlineMath math="\cos x" />、分母は定数の <InlineMath math="2" /> となる。
                    </li>
                    <li>
                        ここで初めて不定形が解消される。<br />
                        <BlockMath math="\lim_{x \to 0} \frac{\cos x}{2} = \frac{1}{2}" />
                        となる。
                    </li>
                </ul>
                <p className="mt-4">
                    定理の条件より「1回の極限が存在すれば、もとの式の極限もそれと一致する」ため、遡って
                    <BlockMath math="\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}" />
                    が確定する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                テイラー展開（多項式近似）とロピタルの定理の双方に「高階微分」が登場したことにお気づきでしょうか。実は「極限の <InlineMath math="\frac{0}{0}" /> を知るために何度もロピタルを適用する」行為と、「関数を多項式で見立てるために高次のマクローリン展開（テイラー展開）の項を調べる」行為は、本質的に全く同じ「関数の原点付近の情報を掘り下げる」ことを別々の表現で行っている裏返しなのです（上記 Example の分子分母をテイラー展開してみれば、<InlineMath math="x^2\!/2" /> の係数比較として直ちに出ることが確認できます）。
            </p>

            <p>
                以上で Chapter 6 の微分の実解析的な厳密化の議論を終了し、次章からはついに実解析学のもうひとつの主峰、リーマン積分（積分の厳密な理論）の構成へと向かいます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ロピタルの定理は、<InlineMath math="\frac{0}{0}" /> などの不定形の極限計算を、導関数の比の極限計算へすり替える手法。</li>
                    <li>その厳密な証明は、コーシーの平均値定理を用いて、原点 <InlineMath math="f(a)=g(a)=0" /> からの差分として割線を構成することで「はさみうち」によって成される。</li>
                    <li>不定形が続く限り、高階導関数に対して繰り返し適用して極限を求めることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
