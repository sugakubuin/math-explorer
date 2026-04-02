import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CantorFunction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「連続関数であれば微分不可能であっても積分の復元はできるはずだ」という直観を打ち砕く存在、それが <b>カントール関数 (Cantor function)</b> 、別名「悪魔の階段 (Devil's Staircase)」です。
                本節では、この特異な関数の構成とその驚くべき性質を通じて、絶対連続性がなぜ基本定理に不可欠なのかを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">カントール関数の構成</h2>

            <p>
                Chapter 1 で学んだカントール集合 <InlineMath math="C" /> をベースにして関数を構成します。
            </p>

            <ContentBox type="definition" title="Definition 6.5-1 (カントール関数)">
                <p>
                    <InlineMath math="[0, 1]" /> 上の関数 <InlineMath math="\phi" /> を、カントール集合を構成する際の中抜き区間 <InlineMath math="I_{n,k}" /> の値に基づいて次のように定義する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>最初の区間 <InlineMath math="(1/3, 2/3)" /> で <InlineMath math="\phi(x) = 1/2" /> とする。</li>
                    <li>次のステップで中抜きされる二つの区間で、値をそれぞれ <InlineMath math="1/4, 3/4" /> とする。</li>
                    <li>これを繰り返し、カントール集合以外の点すべてで関数値を定める。</li>
                    <li>カントール集合 <InlineMath math="C" /> 上では、左右の極限が一致することから連続になるように値を埋める。</li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">カントール関数の驚くべき性質</h2>

            <p>
                この関数は、我々の「普通の」感覚とは大きくかけ離れた性質をいくつも持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 6.5-1 (カントール関数の性質)">
                <ul className="list-disc list-inside space-y-2">
                    <li><b>連続性</b>：<InlineMath math="\phi" /> は <InlineMath math="[0, 1]" /> 全体で <b>連続</b> である。</li>
                    <li><b>単調性</b>：<InlineMath math="\phi" /> は <b>単調増加</b> である（したがって有界変動である）。</li>
                    <li><b>微分</b>：ほとんど至る所 (a.e.) で微分可能であり、<InlineMath math="\phi'(x) = 0" /> a.e. である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><b>単調性</b>：構成において、左側の小区間での値は右側の小区間での値以下になるように定義されているため、広義単調増加となる。</li>
                    <li><b>連続性</b>：各ステップで中抜きされた区間の端点における関数値が一致するように構成されている。カントール集合の各点の近傍で、関数値の変化をいくらでも小さく抑えられるため（値域が 2 倍されるごとに誤差が 1/2 になるイメージ）、全体で連続となる。</li>
                    <li><b>微分</b>：<InlineMath math="\phi" /> は、カントール集合の補集合 <InlineMath math="[0, 1] \setminus C" /> （中抜きされた区間の和集合）上で定数である。したがって、この補集合上のすべての点で <InlineMath math="\phi'(x) = 0" /> である。カントール集合の測度は 0 なので、ほとんど至る所で <InlineMath math="\phi'(x) = 0" /> が成り立つ。</li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="どこで増加しているのか？">
                <p>
                    ルベーグ測度が 1 である区間 <InlineMath math="[0, 1]" /> において、ほとんど至る所で導関数が 0 である（水平である）にもかかわらず、関数値は 0 から 1 まで増加してしまいます。
                    これは、増加が「測度 0 のカントール集合の上だけで」極端に集中的に起きていることを意味します。
                    このような性質を <b>特異 (singular)</b> と呼びます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本定理への反例</h2>

            <p>
                カントール関数を用いると、微分積分学の基本定理（ルベーグ版）における絶対連続性の必要性が明確になります。
            </p>

            <ContentBox type="example" title="Example 6.5-1 (基本定理の不成立)">
                <p>
                    カントール関数 <InlineMath math="\phi" /> に対して導関数の積分を計算すると：
                    <BlockMath math="\int_0^1 \phi'(t) \, dt = \int_0^1 0 \, dt = 0" />
                    一方で、関数の変化量は
                    <BlockMath math="\phi(1) - \phi(0) = 1" />
                    であり、両者は <b>一致しません</b>。
                </p>
                <p className="mt-4">
                    これは、カントール関数が「連続かつ有界変動であるが、絶対連続ではない」関数であるために起こる現象です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>カントール関数</b> は、ほとんど至る所で傾きが 0 なのに 1 まで増加する「特異な」連続関数である。</li>
                    <li>この関数は <b>連続かつ一様連続</b> であるが、絶対連続ではない。</li>
                    <li>基本定理が成立するためには、単なる連続性や有界変動性では不十分であり、<b>絶対連続性</b> が不可欠であることを示す最強の反例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
