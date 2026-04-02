import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EulerPhiSumFormula() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                オイラーの関数には、ある数の「すべての約数」に対して <InlineMath math="\phi" /> の値を足し合わせると、元の数自身に戻るという不思議で美しい性質があります。
                この性質は、解析的数論の入り口へと繋がっていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">約数和の公式</h2>

            <p>
                まずは約数に関する深遠な公式を確認しましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (φ の約数和)">
                <p>
                    <InlineMath math="n" /> のすべての正の約数 <InlineMath math="d" /> にわたる <InlineMath math="\phi(d)" /> の和は、 <InlineMath math="n" /> に等しい。
                    <BlockMath math="\sum_{d \mid n} \phi(d) = n" />
                </p>
            </ContentBox>

            <p>
                一見すると不思議なこの等式は、分数の約分という自然な考察から導き出すことができます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    分母が <InlineMath math="n" /> である <InlineMath math="n" /> 個の分数 <InlineMath math="\{1/n, 2/n, 3/n, \dots, n/n\}" /> を考えます。
                    これらをすべて<strong>既約分数</strong>に約分し、分母 <InlineMath math="d" /> ごとにグループ分けします（必ず <InlineMath math="d" /> は <InlineMath math="n" /> の約数になります）。
                    分母が <InlineMath math="d" /> となる既約分数は <InlineMath math="\phi(d)" /> 個あるため、元の分数の全個数 <InlineMath math="n" /> は、各グループの個数の総和となります。
                    したがって <InlineMath math="\sum_{d \mid n} \phi(d) = n" /> が導かれます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この公式が実際に成り立っていることを、具体的な数値で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 6.4-1 (n=12 の場合)">
                <p>
                    <InlineMath math="n = 12" /> の正の約数は <InlineMath math="d = 1, 2, 3, 4, 6, 12" /> である。
                    それぞれのオイラーの関数値は以下の通り。
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                    <li><InlineMath math="\phi(1) = 1" /></li>
                    <li><InlineMath math="\phi(2) = 1" /></li>
                    <li><InlineMath math="\phi(3) = 2" /></li>
                    <li><InlineMath math="\phi(4) = 2" /></li>
                    <li><InlineMath math="\phi(6) = 2" /></li>
                    <li><InlineMath math="\phi(12) = 4" /></li>
                </ul>
                <p>
                    これらの和をとると、
                    <BlockMath math="1 + 1 + 2 + 2 + 2 + 4 = 12" />
                    となり、元の数 <InlineMath math="12" /> に一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">メビウス関数と素因数分解への展望</h2>

            <p>
                上の約数和における和の計算は、特殊な関数を導入することで「反転」させることができます。
            </p>

            <ContentBox type="definition" title="Definition 6.4-1 (メビウス関数)">
                <p>
                    メビウス関数 <InlineMath math="\mu(n)" /> を次のように定義する：
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="n = 1" /> のとき、 <InlineMath math="\mu(1) = 1" /> 。</li>
                    <li><InlineMath math="n" /> が相異なる <InlineMath math="k" /> 個の素数の積のとき、 <InlineMath math="\mu(n) = (-1)^k" /> 。</li>
                    <li><InlineMath math="n" /> が平方因子を持つ（ある素数 <InlineMath math="p" /> の2乗で割り切れる）とき、 <InlineMath math="\mu(n) = 0" /> 。</li>
                </ul>
            </ContentBox>

            <p>
                このメビウス関数を用いることで、約数和の公式を逆方向に解き、オイラーの関数の新たな表示を得ることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-2 (メビウスの反転公式)">
                <p>
                    任意の関数 <InlineMath math="f, g" /> に対し、
                    <BlockMath math="f(n) = \sum_{d \mid n} g(d)" />
                    が成り立つならば、
                    <BlockMath math="g(n) = \sum_{d \mid n} \mu(n/d) f(d)" />
                    が成り立つ。
                    特に、定理 6.4-1 より <InlineMath math="n = \sum_{d \mid n} \phi(d)" /> なので、
                    <BlockMath math="\phi(n) = \sum_{d \mid n} \mu(n/d) d" />
                    が成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この公式は、メビウス関数の重要な基本性質
                    <BlockMath math="\sum_{d \mid n} \mu(d) = \begin{cases} 1 & (n = 1) \\ 0 & (n > 1) \end{cases}" />
                    を土台として証明されます。
                </p>
                <p>
                    右辺の式 <InlineMath math="\sum_{d \mid n} \mu(n/d) f(d)" /> に、仮定の <InlineMath math="f(d) = \sum_{c \mid d} g(c)" /> を代入すると、
                    <BlockMath math="\sum_{d \mid n} \mu(n/d) \left( \sum_{c \mid d} g(c) \right)" />
                    となります。ここで和を取る順序を交換して整理します（<InlineMath math="m = d/c" /> とおくと <InlineMath math="m \mid (n/c)" /> となります）。
                    <BlockMath math="\sum_{c \mid n} g(c) \left( \sum_{m \mid (n/c)} \mu(m) \right)" />
                </p>
                <p>
                    ここで括弧内の和に先ほどの基本性質を適用すると、 <InlineMath math="n/c = 1" /> つまり <InlineMath math="c = n" /> のときのみ括弧内が <InlineMath math="1" /> となり、それ以外のすべての項は <InlineMath math="0" /> になって消滅します。
                    結果として、全体の中で <InlineMath math="g(n) \times 1" /> だけが生き残り、左辺の <InlineMath math="g(n)" /> に一致することが示されます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この考え方は単なる代数的なテクニックにとどまらず、解析的数論というさらに深い分野へと直結しています。
            </p>

            <ContentBox type="remark" title="解析的数論への橋渡し">
                <p>
                    メビウス関数は単なる符号調整の道具という枠を超えて、極めて重要な役割を果たします。
                    例えば、リーマンのゼータ関数 <InlineMath math="\zeta(s)" /> の逆数は、以下のディリクレ級数で表されます。
                    <BlockMath math="\frac{1}{\zeta(s)} = \sum_{n=1}^\infty \frac{\mu(n)}{n^s}" />
                    ここから素数分布の深い性質（素数定理など）へと繋がっていき、現代数学の最前線に関連しています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>約数和</strong>： <InlineMath math="\sum_{d \mid n} \phi(d) = n" />（すべての約数で φ を足すと元の数になる）。</li>
                    <li><strong>メビウスの反転公式</strong>： 和の式を「逆写像」のように解いて一般項を求める公式。</li>
                    <li><strong>広がり</strong>： この性質が素数分布や解析的数論の深い理論への橋渡しとなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
