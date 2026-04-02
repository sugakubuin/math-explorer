import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LinearCongruenceEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の締めくくりとして、いよいよ未知数 <InlineMath math="x" /> を含む合同方程式の解法について学びます。
                一本の方程式を解く方法から、複数の条件を同時に満たす数を見つける「中国剰余定理」まで、実用的な計算技術を習得しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">1次合同方程式</h2>

            <p>
                「ある数 <InlineMath math="a" /> を掛けて、法 <InlineMath math="m" /> で割ると <InlineMath math="b" /> 余る数 <InlineMath math="x" />」を見つける問題です。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 (1次合同方程式)">
                <p>
                    <BlockMath math="ax \equiv b \pmod{m}" />
                    を未知数 <InlineMath math="x" /> について解くことを、 1 次合同方程式を解くという。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.4-1 (可解性と解の個数)">
                <p>
                    <InlineMath math="ax \equiv b \pmod{m}" /> が解を持つための必要十分条件は、
                    <BlockMath math="\gcd(a, m) \mid b" />
                    である。このとき、 mod <InlineMath math="m" /> においてちょうど <InlineMath math="d = \gcd(a, m)" /> 個の解が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="ax \equiv b \pmod{m}" /> は、ある整数 <InlineMath math="y" /> を用いて線形不定方程式
                    <BlockMath math="ax + my = b" />
                    と書き直せる。 Theorem 2.2-1 より、これに整数解 <InlineMath math="(x, y)" /> が存在することと <InlineMath math="d = \gcd(a, m) \mid b" /> は同値である。
                    <br />解が存在するとき、一つの特殊解を <InlineMath math="x_0" /> とすると、一般解は <InlineMath math="x = x_0 + \frac{m}{d}t \quad (t \in \mathbb{Z})" /> となる。
                    これを mod <InlineMath math="m" /> で考えると、 <InlineMath math="t = 0, 1, \dots, d-1" /> のときに、互いに不均等（mod <InlineMath math="m" /> で異なる値）な <InlineMath math="d" /> 個の解が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-1 (合同方程式の解法)">
                <p>
                    <InlineMath math="3x \equiv 6 \pmod{9}" /> を解く。
                    <br />1. <InlineMath math="\gcd(3, 9) = 3" /> であり、 <InlineMath math="3 \mid 6" /> なので、解は mod 9 で 3 つ存在する。
                    <br />2. 方程式を 3 で割ると、 <InlineMath math="x \equiv 2 \pmod{3}" /> となる（法も割ることに注意！：Prop 4.1-1）。
                    <br />3. これを mod 9 の範囲で書き出すと、 <InlineMath math="x \equiv 2, \ 2+3, \ 2+6 \pmod{9}" />。
                    <br />よって解は、 <InlineMath math="x \equiv 2, \ 5, \ 8 \pmod{9}" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">中国剰余定理 (CRT)</h2>

            <p>
                複数の法に関する合同式の条件を同時に満たす数は、いつ存在するのでしょうか。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-2 (中国剰余定理)">
                <p>
                    <InlineMath math="m_1, m_2, \dots, m_k" /> が互いに素な正の整数のとき、連立合同方程式
                    <BlockMath math="\begin{cases} x \equiv a_1 \pmod{m_1} \\ x \equiv a_2 \pmod{m_2} \\ \vdots \\ x \equiv a_k \pmod{m_k} \end{cases}" />
                    は、法 <InlineMath math="M = m_1 m_2 \cdots m_k" /> においてただ一つの解を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 存在性（構成的証明）：</strong>
                    <InlineMath math="M_i = M/m_i" /> とすると、 <InlineMath math="\gcd(M_i, m_i) = 1" /> である。したがって、 <InlineMath math="M_i t_i \equiv 1 \pmod{m_i}" /> となる逆元 <InlineMath math="t_i" /> が存在する。
                    ここで、 <InlineMath math="x = \sum_{i=1}^k a_i M_i t_i" /> とおくと、各 <InlineMath math="j" /> について、 <InlineMath math="i \neq j" /> のとき <InlineMath math="M_i \equiv 0 \pmod{m_j}" /> であるから、
                    <BlockMath math="x \equiv a_j M_j t_j \equiv a_j \cdot 1 = a_j \pmod{m_j}" />
                    となり、 <InlineMath math="x" /> は条件を満たす。
                </p>
                <p>
                    <strong>2. 一意性：</strong>
                    2 つの解 <InlineMath math="x, y" /> が存在すると仮定すると、すべての <InlineMath math="i" /> について <InlineMath math="x \equiv y \pmod{m_i}" /> 、すなわち <InlineMath math="m_i \mid (x - y)" /> である。
                    <InlineMath math="m_1, \dots, m_k" /> は互いに素であるから、それらの積 <InlineMath math="M" /> も <InlineMath math="x - y" /> を割り切る。
                    したがって <InlineMath math="x \equiv y \pmod{M}" /> となり、 mod <InlineMath math="M" /> でただ一つの解が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-2 (連立合同方程式の解法)">
                <p>
                    <InlineMath math="x \equiv 2 \pmod{3}" /> かつ <InlineMath math="x \equiv 3 \pmod{5}" /> を満たす <InlineMath math="x" /> を探す。
                    <br />1. <InlineMath math="x \equiv 2 \pmod{3}" /> より、 <InlineMath math="x = 3k + 2" /> と書ける。
                    <br />2. これを第 2 の式に代入： <InlineMath math="3k + 2 \equiv 3 \pmod{5}" />
                    <br />3. 整理： <InlineMath math="3k \equiv 1 \pmod{5}" />
                    <br />4. 逆元の算出： mod 5 で 3 の逆元は 2 なので（ <InlineMath math="3 \times 2 = 6 \equiv 1" /> ）、両辺を 2 倍して <InlineMath math="k \equiv 2 \pmod{5}" />。
                    <br />5. <InlineMath math="k = 5l + 2" /> を <InlineMath math="3k+2" /> に戻すと： <InlineMath math="x = 3(5l+2) + 2 = 15l + 8" />。
                    <br />よって答えは <InlineMath math="x \equiv 8 \pmod{15}" /> となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="名称の由来">
                <p>
                    この定理は、3 世紀頃の中国の数学書『孫子算経』に「3 で割ると 2 余り、5 で割ると 3 余り、7 で割ると 2 余る数は？」という問題（物不見数、または孫子問題と呼ばれる）が記されていたことに由来します。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>合同方程式</strong>： 解が存在するかどうかは <InlineMath math="\gcd(a, m)" /> が定数項を割り切るかで決まる。</li>
                    <li><strong>解の個数</strong>： 解が存在する場合、最大公約数の数だけ mod <InlineMath math="m" /> において異なる解が現れる。</li>
                    <li><strong>中国剰余定理</strong>： 互いに素な法を用いた条件の組み合わせは、大きな法の世界において必ず一意な解を導き出す。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
