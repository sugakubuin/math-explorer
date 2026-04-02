import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InverseZTransformSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Z 変換 <InlineMath math="X(z)" /> から元の離散時間信号 <InlineMath math="x_n" /> を復元する操作が <b>逆 Z 変換</b> です。システムの伝達関数からインパルス応答やステップ応答を計算する際に必須となる操作です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分分数分解法とべき級数法</h2>

            <p>
                実用上、最も頻繁に用いられるのが <b>部分分数分解法</b> です。ラプラス変換の逆変換と同様、既知の基本ペアに分解して逆変換を行います。
            </p>

            <ContentBox type="proposition" title="Proposition 7.3-1 (部分分数分解法)">
                <p>
                    逆変換を計算する際、<InlineMath math="X(z)" /> を直接分解するよりも、<InlineMath math="X(z)/z" /> を部分分数分解し、最後にすべての項に <InlineMath math="z" /> を掛けて次のような基本形式に持ち込むのが効率的である：
                </p>
                <BlockMath math="X(z) = \sum_k \frac{A_k z}{z - p_k}" />
                <p>
                    この各項に対し、<InlineMath math="\mathcal{Z}^{-1}\left[\frac{z}{z-a}\right] = a^n u[n]" /> （因果的信号の場合）という基本ペアを適用する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    因果的信号（<InlineMath math="n \geq 0" />）に対する基本ペアの成立を等比級数から確認する。
                </p>
                <BlockMath math="\begin{aligned} \frac{z}{z-a} &= \frac{1}{1 - az^{-1}} \\ &= 1 + az^{-1} + a^2 z^{-2} + \cdots \\ &= \sum_{n=0}^\infty a^n z^{-n} \end{aligned}" />
                <p>
                    Z 変換の定義式 <InlineMath math="\sum_{n=0}^\infty x_n z^{-n}" /> と係数比較することで、<InlineMath math="x_n = a^n" /> （<InlineMath math="n \geq 0" />）であることがわかる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.3-1 (部分分数分解による逆変換の計算)">
                <p>
                    <InlineMath math="X(z) = \frac{z^2}{(z-1)(z-2)}" /> （ROC: <InlineMath math="|z| > 2" />）の逆変換を求める。
                </p>
                <p>
                    まず <InlineMath math="X(z)/z" /> を計算し、部分分数分解を行う：
                </p>
                <BlockMath math="\frac{X(z)}{z} = \frac{z}{(z-1)(z-2)} = \frac{A}{z-1} + \frac{B}{z-2}" />
                <p>
                    係数を求めると <InlineMath math="A = -1" />、<InlineMath math="B = 2" /> となる。よって：
                </p>
                <BlockMath math="X(z) = -\frac{z}{z-1} + \frac{2z}{z-2}" />
                <p>
                    ROC が全極の外側であるため因果的信号として逆変換すると：
                </p>
                <BlockMath math="x[n] = (-1 + 2 \cdot 2^n) u[n]" />
            </ContentBox>

            <p>
                もう一つの手法は <b>べき級数法</b> です。これは <InlineMath math="X(z)" /> を定義通りに展開し、係数をそのまま数列として読み取る手法です。
            </p>

            <ContentBox type="proposition" title="Proposition 7.3-2 (べき級数法)">
                <p>
                    <InlineMath math="X(z)" /> を <InlineMath math="z^{-1}" /> のべき級数として展開し、その各係数 <InlineMath math="c_n" /> を数列の各値として直接特定する：
                </p>
                <BlockMath math="X(z) = c_0 + c_1 z^{-1} + c_2 z^{-2} + \cdots \implies x_n = c_n" />
                <p>
                    有理関数の場合、多項式の長除法（筆算）によって数値的な数列を順次得ることができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Z 変換の定義式を思い出す：
                </p>
                <BlockMath math="\begin{aligned} X(z) &= \sum_{n=-\infty}^\infty x_n z^{-n} \\ &= \cdots + x_{-1}z^1 + x_0 + x_1 z^{-1} + x_2 z^{-2} + \cdots \end{aligned}" />
                <p>
                    もし関数 <InlineMath math="X(z)" /> を何らかの手法（長除法や既知の展開式）によって <InlineMath math="z^{-1}" /> の実べき級数として表現できたならば、一意性によりその各項の係数がそのまま元の数列 <InlineMath math="x_n" /> の値と一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="example" title="Example 7.3-2 (長除法による数値解)">
                <p>
                    <InlineMath math="X(z) = \frac{1}{1 - 0.5z^{-1}}" /> を展開すると：
                </p>
                <BlockMath math="X(z) = 1 + 0.5z^{-1} + 0.25z^{-2} + 0.125z^{-3} + \cdots" />
                <p>
                    これにより、<InlineMath math="x_0 = 1" />, <InlineMath math="x_1 = 0.5" />, <InlineMath math="x_2 = 0.25" /> と、数列の値を順次求めることができる。これは理論解 <InlineMath math="x_n = (0.5)^n u[n]" /> と完全に一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">留数定理による方法</h2>

            <p>
                複素解析の強力な道具である留数定理を用いることで、ROC や信号の形状を問わず、統合的に逆変換を計算できます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.3-3 (留数定理による逆 Z 変換)">
                <p>
                    離散時間信号 <InlineMath math="x_n" /> は、複素平面上の反転積分（ブロムウィッチ積分に対応）を留数計算することで次のように求められる：
                </p>
                <BlockMath math="x_n = \frac{1}{2\pi i} \oint_C X(z) z^{n-1} dz = \sum_{p_k} \text{Res}[X(z) z^{n-1}; p_k]" />
                <p>
                    ここで、積分路 <InlineMath math="C" /> は ROC 内にある原点を囲む閉曲線であり、和は <InlineMath math="C" /> の内部にあるすべての極 <InlineMath math="p_k" /> について取る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Z 変換の定義 <InlineMath math="X(z) = \sum_{k=-\infty}^\infty x_k z^{-k}" /> を積分式に代入する：
                </p>
                <BlockMath math="\frac{1}{2\pi i} \oint_C X(z) z^{n-1} dz = \frac{1}{2\pi i} \oint_C \left( \sum_{k=-\infty}^\infty x_k z^{-k} \right) z^{n-1} dz" />
                <p>
                    和と積分の順序を交換すると（ROC 内での一様収束性により正当化される）：
                </p>
                <BlockMath math="\sum_{k=-\infty}^\infty x_k \left( \frac{1}{2\pi i} \oint_C z^{n-k-1} dz \right)" />
                <p>
                    複素積分論における基本結果より、<InlineMath math="\frac{1}{2\pi i} \oint_C z^m dz" /> は <InlineMath math="m = -1" /> （すなわち <InlineMath math="k = n" />）のときのみ 1 となり、それ以外では 0 となる。したがって、和の中で <InlineMath math="k = n" /> の項だけが残り、値は <InlineMath math="x_n" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="example" title="Example 7.3-3 (留数定理による非因果的信号の計算)">
                <p>
                    <InlineMath math="X(z) = \frac{z^2}{(z-0.5)(z-2)}" /> （ROC: <InlineMath math="0.5 < |z| < 2" />）を考える。
                </p>
                <p>
                    <InlineMath math="n \geq 0" /> のとき、積分路 <InlineMath math="|z| = 1" /> （ROC内）の内部にある極は <InlineMath math="z = 0.5" /> のみである。よって：
                </p>
                <BlockMath math="\begin{aligned} x_n &= \text{Res}\left[ \frac{z^{n+1}}{(z-0.5)(z-2)}; 0.5 \right] \\ &= \lim_{z \to 0.5} (z-0.5) \frac{z^{n+1}}{(z-0.5)(z-2)} \\ &= \frac{0.5^{n+1}}{0.5 - 2} = -\frac{1}{3} (0.5)^n \quad (n \geq 0) \end{aligned}" />
                <p>
                    このように、ROC を考慮してどの極の留数を取るかを選ぶことで、因果性も含めた正しい逆変換が自動的に得られる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>実用的には、因果的信号を前提とした部分分数分解法が最も多く用いられる。</li>
                    <li>数値的に数列の値を知りたい場合は、長除法によるべき級数展開が有効である。</li>
                    <li>留数定理を用いる方法は、ROC 内の積分路の内側にある極の留数を足し合わせるもので、理論的に最も一般的である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
