import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BezoutsIdentityProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章では、2つの整数の最大公約数を求める効率的な手法としてユークリッドの互除法を学びました。
                本章では、その最大公約数が元の2つの整数の「線形結合」として表せるという、整数論における極めて重要な定理「ベズーの等式」について掘り下げます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベズーの等式</h2>

            <p>
                最大公約数は、単に「共通の約数の中で最大のもの」というだけでなく、元の数を用いた整数の足し引きによって作り出せる数でもあります。
            </p>

            <ContentBox type="theorem" title="Theorem 2.1-1 (ベズーの等式)">
                <p>
                    2つの整数 <InlineMath math="a, b" /> （少なくとも一方は 0 でない）について、
                    <BlockMath math="\gcd(a, b) = ax + by" />
                    を満たす整数 <InlineMath math="x, y" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="係数の一意性">
                <p>
                    ベズーの等式を満たす整数 <InlineMath math="x, y" /> （ベズー係数とも呼ばれる）は、一般に一意ではありません。
                    例えば <InlineMath math="\gcd(4, 6) = 2" /> について、
                    <BlockMath math="2 = 4 \times (-1) + 6 \times 1" />
                    もあれば、
                    <BlockMath math="2 = 4 \times 2 + 6 \times (-1)" />
                    もあります。一般に一組見つかれば、そこから無限に多くの解を構成できます（これについては次節 §2.2 で詳述します）。
                </p>
            </ContentBox>

            <p>
                この定理の驚くべき点は、最大公約数という「抽出された共通部分」が、元の数 <InlineMath math="a, b" /> の直接的な組み合わせで完全に表現できるという事実にあります。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (ベズー係数の例)">
                <p>
                    <InlineMath math="a = 252, \ b = 105" /> の場合を考える。 §1.3 の例題より <InlineMath math="\gcd(252, 105) = 21" /> である。
                    このとき、
                    <BlockMath math="21 = 252 \times 1 + 105 \times (-2)" />
                    が成り立つ。したがって、 <InlineMath math="x = 1, \ y = -2" /> はベズーの等式を満たす一組の整数解である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明：互除法の逆算</h2>

            <p>
                ベズーの等式の存在を証明する最も直感的な方法は、ユークリッドの互除法のプロセスを「逆向き」に辿ることです。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    ユークリッドの互除法のステップを次のように書く：
                    <BlockMath math="\begin{aligned} (1) \quad a &= b q_1 + r_1 && \Rightarrow r_1 = a - b q_1 \\ (2) \quad b &= r_1 q_2 + r_2 && \Rightarrow r_2 = b - r_1 q_2 \\ (3) \quad r_1 &= r_2 q_3 + r_3 && \Rightarrow r_3 = r_1 - r_2 q_3 \\ & \vdots \\ (n) \quad r_{n-2} &= r_{n-1} q_n + r_n && \Rightarrow r_n = r_{n-2} - r_{n-1} q_n \end{aligned}" />
                    ここで <InlineMath math="r_n = \gcd(a, b)" /> である。
                    最後の式 <InlineMath math="r_n = r_{n-2} - r_{n-1} q_n" /> を出発点とし、一つ前の式の余り <InlineMath math="r_{n-1}" /> を代入して消去することを繰り返す。
                    各ステップで余りは常に <InlineMath math="a" /> と <InlineMath math="b" /> の整数係数線形結合として表され、
                    最終的に <InlineMath math="r_n = ax + by" /> の形を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この手続きを具体的な数値で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (逆算の実践)">
                <p>
                    <InlineMath math="a = 35, \ b = 13" /> の最大公約数を線形結合で表す。
                    まず、互除法を実行する：
                    <BlockMath math="\begin{aligned} 35 &= 13 \times 2 + 9 && \cdots (\text{A}) \\ 13 &= 9 \times 1 + 4 && \cdots (\text{B}) \\ 9 &= 4 \times 2 + 1 && \cdots (\text{C}) \end{aligned}" />
                    ここから逆算する：
                    <BlockMath math="\begin{aligned} 1 &= 9 - 4 \times 2 && (\text{C より}) \\ &= 9 - (13 - 9 \times 1) \times 2 && (\text{B より } 4 \text{ を代入}) \\ &= 9 \times 3 - 13 \times 2 \\ &= (35 - 13 \times 2) \times 3 - 13 \times 2 && (\text{A より } 9 \text{ を代入}) \\ &= 35 \times 3 - 13 \times 8 \end{aligned}" />
                    よって、 <InlineMath math="1 = 35(3) + 13(-8)" /> となり、 <InlineMath math="x = 3, \ y = -8" /> が得られる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="抽象代数学的な視点">
                <p>
                    別の証明方法として、集合 <InlineMath math="S = \{ax + by > 0 \mid x, y \in \mathbb{Z}\}" /> の最小元が <InlineMath math="\gcd(a, b)" /> に一致することを示す方法もあります。
                    これは整数の構造そのものに注目した、よりエレガントな証明ですが、具体的な計算手順を与える点では互除法の逆算が勝っています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ベズーの等式</strong>： 最大公約数は、必ず元の数たちの足し引き（線形結合）で表現できる。</li>
                    <li><strong>構成的証明</strong>： 互除法の各ステップを余りについて解き、下から順に代入していくことで具体的な係数を求められる。</li>
                    <li><strong>柔軟性</strong>： ベズー係数 <InlineMath math="x, y" /> は一意ではなく、複数の組み合わせが存在しうる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
