import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ZTransformDefinitionSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章で学んだラプラス変換は、連続時間信号やシステムの解析において強力なツールでした。しかし、デジタル信号処理や計算機による制御など、現代の技術の多くは<b>離散時間</b>で動作しています。
            </p>
            <p>
                離散時間信号（数列）に対して、ラプラス変換と同様の役割を果たすのが <b>Z 変換</b> です。Z 変換は、数列を複素平面上のべき級数として表現することで、差分方程式を代数方程式に変換し、システムの安定性や応答特性を視覚的に理解することを可能にします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">Z 変換の定義と基本例</h2>

            <p>
                Z 変換は、離散時間信号 <InlineMath math="\{x_n\}" /> を複素変数 <InlineMath math="z" /> のべき級数へと写像する操作です。これは、連続時間信号をサンプリングしてラプラス変換を施した際の、変数変換 <InlineMath math="z = e^{sT}" /> に対応しています。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (Z 変換)">
                <p>
                    離散時間信号（数列）<InlineMath math="\{x_n\}_{n \in \mathbb{Z}}" /> に対し、その <b>Z 変換</b> <InlineMath math="X(z)" /> を次のように定義する：
                </p>
                <BlockMath math="X(z) = \mathcal{Z}[x_n] = \sum_{n=-\infty}^\infty x_n z^{-n}" />
                <p>
                    ここで <InlineMath math="z" /> は複素数である。特に <InlineMath math="n \geq 0" /> の範囲のみを考える場合を <b>一側 Z 変換</b> と呼び、デジタル制御などの因果的システムでは主にこちらが用いられる。
                </p>
            </ContentBox>

            <p>
                基本的な信号に対して Z 変換を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-1 (単位インパルスの Z 変換)">
                <p>
                    <b>単位インパルス信号</b> <InlineMath math="x_n = \delta_{n,0}" />（<InlineMath math="n=0" /> のとき 1、それ以外は 0）の Z 変換は次のようになる：
                </p>
                <BlockMath math="X(z) = \sum_{n=-\infty}^\infty \delta_{n,0} z^{-n} = 1 \cdot z^0 = 1" />
                <p>
                    これは全複素平面上で収束し、ラプラス変換における <InlineMath math="\mathcal{L}[\delta(t)] = 1" /> に対応している。インパルス信号は、すべての周波数成分（すべての <InlineMath math="z" />）を等しく含んでいることを意味する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-2 (単位ステップ関数の Z 変換)">
                <p>
                    <b>単位ステップ信号</b> <InlineMath math="x_n = u[n]" />（<InlineMath math="n \geq 0" /> で 1、<InlineMath math="n < 0" /> で 0）の一側 Z 変換は次のようになる：
                </p>
                <BlockMath math="X(z) = \sum_{n=0}^\infty 1 \cdot z^{-n} = 1 + z^{-1} + z^{-2} + \cdots" />
                <p>
                    これは初項 1、公比 <InlineMath math="z^{-1}" /> の等比級数である。公比の絶対値が 1 未満、すなわち <InlineMath math="|z| > 1" /> のときに収束し、次のようになる：
                </p>
                <BlockMath math="X(z) = \frac{1}{1 - z^{-1}} = \frac{z}{z-1} \quad (|z| > 1)" />
                <p>
                    これはラプラス変換における <InlineMath math="\text{Re}(s) > 0" /> での <InlineMath math="\mathcal{L}[H(t)] = 1/s" /> に対応する結果である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束域と因果的・非因果的信号</h2>

            <p>
                ラプラス変換と同様に、Z 変換の定義式である無限級数が収束するためには、変数 <InlineMath math="z" /> が特定の範囲にある必要があります。
            </p>

            <ContentBox type="definition" title="Definition 7.1-2 (収束域：ROC)">
                <p>
                    Z 変換の級数 <InlineMath math="\sum x_n z^{-n}" /> が絶対収束するような複素平面上の領域を <b>収束域 (Region of Convergence; ROC)</b> と呼ぶ。
                </p>
                <p>
                    一般に、ROC は原点を中心とした円環領域 <InlineMath math="r_{min} < |z| < r_{max}" /> の形をとる。Z 変換を扱う際には、代数式 <InlineMath math="X(z)" /> だけでなく、ROC を明示することが不可欠である。
                </p>
            </ContentBox>

            <p>
                なぜ ROC が重要なのか、代数的表現が同じでも ROC が異なる例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-3 (因果的信号と非因果的信号の比較)">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <b>因果的（右側）信号</b>：<InlineMath math="x_n = a^n u[n]" />
                        <BlockMath math="X(z) = \sum_{n=0}^\infty a^n z^{-n} = \frac{1}{1 - az^{-1}} = \frac{z}{z-a} \quad (|z| > |a|)" />
                    </li>
                    <li>
                        <b>非因果的（左側）信号</b>：<InlineMath math="y_n = -a^n u[-n-1]" />
                        <BlockMath math="\begin{aligned} Y(z) &= \sum_{n=-\infty}^{-1} -a^n z^{-n} = -\sum_{m=1}^\infty a^{-m} z^{m} = - \frac{a^{-1}z}{1 - a^{-1}z} \\ &= \frac{z}{z-a} \quad (|z| < |a|) \end{aligned}" />
                    </li>
                </ol>
                <p>
                    このように、<InlineMath math="X(z)" /> と <InlineMath math="Y(z)" /> は同じ代数式を与えるが、ROC が全く異なる。ROC を指定しなければ、元の信号を一意に復元することができない。
                </p>
            </ContentBox>

            <p>
                ROC の位置は、システムの安定性とも密接に関係しています。
            </p>

            <ContentBox type="example" title="Example 7.1-4 (安定性と ROC)">
                <p>
                    信号の安定性は、「ROC が単位円 <InlineMath math="|z| = 1" /> を含んでいるか」によって判定できる。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>安定な因果信号</b>：<InlineMath math="a = 0.5" /> のとき、因果的信号 <InlineMath math="0.5^n u[n]" /> の ROC は <InlineMath math="|z| > 0.5" /> であり、単位円を含む。
                    </li>
                    <li>
                        <b>不安定な因果信号</b>：<InlineMath math="a = 2" /> のとき、因果的信号 <InlineMath math="2^n u[n]" /> の ROC は <InlineMath math="|z| > 2" /> であり、単位円を含まない。
                    </li>
                    <li>
                        <b>不安定な非因果信号</b>：<InlineMath math="a = 0.5" /> のとき、非因果的信号 <InlineMath math="-0.5^n u[-n-1]" /> の ROC は <InlineMath math="|z| < 0.5" /> であり、単位円を含まない。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="Z 変換とフーリエ変換の幾何学的関係">
                <p>
                    Z 変換の ROC が単位円 <InlineMath math="|z| = 1" /> を含む場合、<InlineMath math="z = e^{i\omega}" />（単位円上）での Z 変換は、そのまま離散時間フーリエ変換 (DTFT) に一致します。
                </p>
                <p>
                    これは、ラプラス変換において ROC が虚軸を含む場合にフーリエ変換と一致することと完璧な類比になっています。複素平面において、ラプラス変換の「虚軸」は Z 変換では「単位円」へと丸め込まれていると解釈できます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>Z 変換は離散時間信号を複素変数のべき級数として表現する。</li>
                    <li>代数式だけでなく、収束域 (ROC) を特定することが一意性のために不可欠である。</li>
                    <li>因果的信号の ROC は極の外側、非因果的信号の ROC は極の内側となる。</li>
                    <li>ROC が単位円を含むことは、信号が安定である（DTFT が存在する）ための条件である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
