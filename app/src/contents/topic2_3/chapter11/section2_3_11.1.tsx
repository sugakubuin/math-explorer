import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InterchangeOfIntegralAndLimit() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 7「関数列と一様収束」および Chapter 10「広義積分（パラメータ微分）」において、解析学における最も慎重な取り扱いを要するテーマとして「極限操作の順序の入れ替え」を扱ってきました。
                本節では、積分論の理論的枠組みが完成した今、改めて<strong>「関数の極限（無限和）」と「積分」の順序交換</strong>についての統一的な見解をまとめます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限区間における積分と極限の交換</h2>

            <p>
                積分区間が有限の有界閉区間 <InlineMath math="[a, b]" /> である場合、交換のための強力かつ十分な条件は<strong>一様収束性</strong>です。これは Chapter 7（Theorem 7.3-2）でも言及した内容の再来ですが、リーマン積分の定義に立ち返って再度厳密な形を確認します。
            </p>

            <ContentBox type="theorem" title="Theorem 11.1-1 (積分と極限の交換定理)">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上で定義されたリーマン可積分な関数列 <InlineMath math="\{f_n\}_{n=1}^\infty" /> が、ある関数 <InlineMath math="f" /> に<strong>一様収束</strong>するとする。すなわち、
                </p>
                <BlockMath math="\lim_{n \to \infty} \left( \sup_{x \in [a, b]} |f_n(x) - f(x)| \right) = 0" />
                <p>
                    が成り立つとする。このとき、極限関数 <InlineMath math="f" /> も <InlineMath math="[a, b]" /> 上でリーマン可積分であり、次のように極限記号 <InlineMath math="\lim" /> を積分記号 <InlineMath math="\int" /> の内側と外側で自由に入れ替えることができる。
                </p>
                <BlockMath math="\lim_{n \to \infty} \int_a^b f_n(x) dx = \int_a^b \left( \lim_{n \to \infty} f_n(x) \right) dx = \int_a^b f(x) dx" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    一様収束の仮定より、任意の <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在して、<InlineMath math="n \geq N" /> ならば区間内の<strong>すべて</strong>の <InlineMath math="x" /> において
                </p>
                <BlockMath math="|f_n(x) - f(x)| < \frac{\varepsilon}{b - a}" />
                <p>
                    が成り立つ。<br />
                    ここから積分の絶対値評価（積分の絶対値不等式 Proposition 9.3-4 および単調性 Proposition 9.3-2）を適用する。
                </p>
                <BlockMath math="\begin{aligned} \left| \int_a^b f_n(x) dx - \int_a^b f(x) dx \right| &= \left| \int_a^b \{f_n(x) - f(x)\} dx \right| \\ &\leq \int_a^b |f_n(x) - f(x)| dx \\ &< \int_a^b \frac{\varepsilon}{b - a} dx \\ &= \frac{\varepsilon}{b - a} \times (b - a) = \varepsilon \end{aligned}" />
                <p className="mt-4">
                    この評価式は、数列 <InlineMath math="I_n = \int_a^b f_n(x) dx" /> が値 <InlineMath math="I = \int_a^b f(x) dx" /> に収束することの定義式そのものである。よって極限と積分の交換が成り立つ。（※極限関数 <InlineMath math="f" /> の可積分性自体も、<InlineMath math="f_n" /> の上和・下和の近似から一様収束性を用いて厳密に証明可能である。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各点収束では交換できない反例</h2>

            <p>
                「一様収束」という強い条件がどうしても必要な理由を見るために、各点では極限関数に収束しているにもかかわらず、面積の極限が一致しない古典的な反例を再確認しましょう。
            </p>

            <ContentBox type="example" title="Example 11.1-1 (動く三角形の波)">
                <p>
                    閉区間 <InlineMath math="[0, 1]" /> 上で、関数列 <InlineMath math="f_n(x)" /> を次のような「高さ <InlineMath math="n" />、底辺の幅 <InlineMath math="2/n" /> の三角形」を描く関数として定義する。
                </p>
                <BlockMath math="f_n(x) = \begin{cases} n^2 x & \left(0 \leq x < \frac{1}{n}\right) \\ n - n^2\left(x - \frac{1}{n}\right) & \left(\frac{1}{n} \leq x < \frac{2}{n}\right) \\ 0 & \left(\frac{2}{n} \leq x \leq 1\right) \end{cases}" />
                <p className="mt-4">
                    <span className="font-bold">1. 各点収束について:</span><br />
                    任意の固定された点 <InlineMath math="x = x_0 > 0" /> について、<InlineMath math="n" /> を十分大きくすれば <InlineMath math="2/n < x_0" /> となるため、それ以降のすべての <InlineMath math="n" /> で <InlineMath math="f_n(x_0) = 0" /> となる。<InlineMath math="x=0" /> のときは常に <InlineMath math="f_n(0) = 0" /> である。<br />
                    したがって、この関数列は各点においてゼロ関数 <InlineMath math="f(x) \equiv 0" /> に<strong>各点収束</strong>する。
                </p>
                <p className="mt-4">
                    <span className="font-bold">2. 積分の極限について:</span><br />
                    各 <InlineMath math="f_n" /> のグラフは底辺 <InlineMath math="2/n" />、高さ <InlineMath math="n" /> の三角形なので、その面積（積分値）は常に一定である。
                </p>
                <BlockMath math="\int_0^1 f_n(x) dx = \frac{1}{2} \times \frac{2}{n} \times n = 1" />
                <p className="mt-4">
                    <span className="font-bold">結論:</span><br />
                    積分の極限と極限の積分を比較すると、
                </p>
                <BlockMath math="\lim_{n \to \infty} \int_0^1 f_n(x) dx = \lim_{n \to \infty} 1 = 1" />
                <BlockMath math="\int_0^1 \left(\lim_{n \to \infty} f_n(x) \right) dx = \int_0^1 0\,dx = 0" />
                <p>
                    となり、値が一致しない（極限と積分の交換が成立しない）。これは、波の高さが <InlineMath math="\infty" /> に逃げていくため、<InlineMath math="[0, 1]" /> 上で全体としては一様に抑え込めていない（一様収束していない）ことが原因である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">広義積分の極限・積分交換定理に向けて（ルベーグ積分への橋渡し）</h2>

            <p>
                では、積分区間が無限に続く「広義積分」の場合はどうでしょうか。<br />
                有限区間では十分であった「一様収束（全体が一様に平らになること）」だけでは、無限の彼方まで広がる関数の面積を有限に抑え込むことはできません。しっぽの先が少しでも浮いていれば、無限の区間長を掛けることで面積が無限大に化けてしまうからです。
            </p>

            <ContentBox type="remark" title="広義積分での積分順序交換（実解析の限界）">
                <p>
                    広義積分 <InlineMath math="\int_a^\infty f_n(x) dx" /> において、極限と積分を交換するためには、「各点収束（または各閉区間上での一様収束）」に加えて、<strong>全体を上から抑え込む強力な「フタ（優関数）」が存在する</strong>ことが要求されます。
                </p>
                <BlockMath math="|f_n(x)| \leq g(x) \quad \left( ただし \int_a^\infty g(x) dx < \infty \right)" />
                <p className="mt-4">
                    この優関数 <InlineMath math="g(x)" /> による条件は、Chapter 10 で見た「一様絶対収束条件（ワイエルシュトラスのM判定法の一般化）」に相当するものです。
                </p>
                <p className="mt-4">
                    しかし、リーマン積分の枠組みでは、こうした複雑な極限操作に対する関数の可積分性を証明するプロセスが極めて煩雑になります。この「極限と積分の相性の悪さ」を完全に克服するために、20世紀になって関数の測り方を面積ファースト（<InlineMath math="y" />軸方向の分割）へと再構築したのが<strong>ルベーグ積分</strong>（Lebesgue Integral）です。
                    ルベーグ積分論における「ルベーグの優収束定理」は、微積分学における極限操作の最終兵器として、のちの現代解析学を支える強力な定理となります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§11.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有限区間における極限とリーマン積分の交換は、関数列の<strong>一様収束</strong>が保証されれば直ちに可能である。</li>
                    <li>一様収束しない関数列では、「波が無限に逃げていく」現象により面積の極限が保存されないことがある（各点収束での反例）。</li>
                    <li>無限区間（広義積分）における交換は、全体を積分の有限なフタで抑え込む「優関数の存在（絶対収束性）」がカギとなり、これは後のルベーグ積分理論へと繋がる核心部分である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
