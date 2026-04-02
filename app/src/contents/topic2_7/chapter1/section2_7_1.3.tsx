import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EuclideanAlgorithm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数千年にわたり受け継がれてきた「ユークリッドの互除法」は、最大公約数を求めるための最も美しく、力強いアルゴリズムです。
                その根底には、整数の「割り算」に関する根本的な定理があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">除算の原理</h2>

            <p>
                「余りのある割り算」が常にただ一通りに定まるという事実は、整数論のすべての議論を支える土台となります。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (除算の原理)">
                <p>
                    整数 <InlineMath math="a" /> と正の整数 <InlineMath math="b" /> に対して、
                    <BlockMath math="a = bq + r, \quad 0 \le r < b" />
                    を満たす整数 <InlineMath math="q" /> （商）と <InlineMath math="r" /> （余り）が、ただ一組だけ存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p><strong>1. 存在性</strong><br />
                    集合 <InlineMath math="S = \{a - bk \mid k \in \mathbb{Z}, a - bk \ge 0\}" /> を考える。
                    <InlineMath math="a" /> が正ならば <InlineMath math="k=0" /> で <InlineMath math="a \in S" />、
                    <InlineMath math="a" /> が負ならば十分小さな <InlineMath math="k" /> を選ぶことで <InlineMath math="a - bk > 0" /> とできるため、 <InlineMath math="S" /> は空でない。
                    整数の整列性（空でない非負整数の集合には最小元が存在する）より、 <InlineMath math="S" /> の最小元を <InlineMath math="r" /> とおく。
                    このときある整数 <InlineMath math="q" /> が存在して <InlineMath math="r = a - bq \ge 0" /> すなわち <InlineMath math="a = bq + r" /> と書ける。
                    もし <InlineMath math="r \ge b" /> とすると、 <InlineMath math="r - b = a - b(q+1) \ge 0" /> となり、 <InlineMath math="r - b \in S" /> である。
                    これは <InlineMath math="r" /> が最小元であることに矛盾するため、 <InlineMath math="r < b" /> である。
                </p>
                <p><strong>2. 一意性</strong><br />
                    <InlineMath math="a = bq + r = bq' + r'" /> （ <InlineMath math="0 \le r, r' < b" /> ）の2通りの表現があると仮定する。
                    このとき <InlineMath math="b(q - q') = r' - r" /> である。
                    辺々の絶対値をとると <InlineMath math="|b(q - q')| = |r' - r|" /> となるが、
                    もし <InlineMath math="q \neq q'" /> ならば左辺は <InlineMath math="b" /> 以上、右辺は <InlineMath math="b" /> より小さいため矛盾する。
                    ゆえに <InlineMath math="q = q'" /> であり、必然的に <InlineMath math="r = r'" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1 (割り算の例)">
                <p>
                    <InlineMath math="a = 47, \ b = 13" /> のとき、
                    <BlockMath math="47 = 13 \times 3 + 8" />
                    であり、商 <InlineMath math="q = 3" />、余り <InlineMath math="r = 8" /> となる。
                    余り <InlineMath math="r" /> が <InlineMath math="0 \le 8 < 13" /> を満たしていることに注目せよ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">互除法を支える補題</h2>

            <p>
                互除法がなぜ成立するのか。その秘密は「余り」を計算しても最大公約数が変わらないという性質にあります。
            </p>

            <ContentBox type="lemma" title="Lemma 1.3-1 (互除法の基本補題)">
                <p>
                    <InlineMath math="a, b, q, r" /> が <InlineMath math="a = bq + r" /> を満たすならば、
                    <BlockMath math="\gcd(a, b) = \gcd(b, r)" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    集合 <InlineMath math="D(a, b)" /> を <InlineMath math="a, b" /> の公約数全体の集合とする。
                    <br />1. <InlineMath math="d \in D(a, b)" /> ならば、 <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" />。
                    整除の線形性より <InlineMath math="d \mid (a - bq)" /> であるから <InlineMath math="d \mid r" />。よって <InlineMath math="d \in D(b, r)" />。
                    <br />2. 逆に <InlineMath math="d \in D(b, r)" /> ならば、 <InlineMath math="d \mid b" /> かつ <InlineMath math="d \mid r" />。
                    同様に <InlineMath math="d \mid (bq + r)" /> であるから <InlineMath math="d \mid a" />。よって <InlineMath math="d \in D(a, b)" />。
                    <br />以上より <InlineMath math="D(a, b) = D(b, r)" /> である。公約数の集合が一致する以上、その最大値も一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ユークリッドの互除法</h2>

            <ContentBox type="theorem" title="Theorem 1.3-2 (ユークリッドの互除法)">
                <p>
                    <InlineMath math="a > b > 0" /> とする。割り算を繰り返し、
                    <BlockMath math="\begin{aligned} a &= b q_1 + r_1 && (0 \le r_1 < b) \\ b &= r_1 q_2 + r_2 && (0 \le r_2 < r_1) \\ r_1 &= r_2 q_3 + r_3 && (0 \le r_3 < r_2) \\ & \vdots \end{aligned}" />
                    としていくと、余りは必ず減少していき、いずれ 0 になる。
                    最後に 0 でない余りが得られたときのその値が、 <InlineMath math="\gcd(a, b)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    除算の原理より、余りの連鎖は <InlineMath math="b > r_1 > r_2 > r_3 > \dots \ge 0" /> となる。
                    非負整数の各項が厳密に減少しているため、この手続きは有限回（高々 <InlineMath math="b" /> 回）で終了し、ある <InlineMath math="n" /> で <InlineMath math="r_n = 0" /> となる。
                    このとき、互除法の基本補題（Lemma 1.3-1）により、
                    <BlockMath math="\gcd(a, b) = \gcd(b, r_1) = \gcd(r_1, r_2) = \dots = \gcd(r_{n-1}, r_n)" />
                    が成り立つ。 <InlineMath math="r_n = 0" /> であるから、 <InlineMath math="\gcd(r_{n-1}, 0) = r_{n-1}" /> である。
                    ゆえに、最後に 0 でない余り <InlineMath math="r_{n-1}" /> が最大公約数に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-2 (互除法による計算)">
                <p><strong>問題：</strong> <InlineMath math="\gcd(252, 105)" /> を求めよ。</p>
                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <BlockMath math="\begin{aligned} 252 &= 105 \times 2 + 42 \\ 105 &= 42 \times 2 + 21 \\ 42 &= 21 \times 2 + 0 \end{aligned}" />
                    最後に 0 でない余りは 21 である。したがって、 <InlineMath math="\gcd(252, 105) = 21" /> である。
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>除算の原理</strong>： あまりの概念が「一意に定まる」ことが論理の正当性を保証している。</li>
                    <li><strong>効率的な削減</strong>： 互除法は「大きな数どうしの最大公約数」を「小さな数どうしの最大公約数」へと段階的にすり替えていく手法。</li>
                    <li><strong>コンピュータの基盤</strong>： このアルゴリズムの簡潔さと速さは、現代の暗号処理などの高速化を陰で支えている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
