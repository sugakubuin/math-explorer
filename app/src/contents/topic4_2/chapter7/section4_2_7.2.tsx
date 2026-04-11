import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GreatPicardTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では「全平面上の整関数」の振る舞いについて考えました。本節では、特異点の近傍という局所的な状況に目を向けます。真性特異点とは「極でも除去可能でもない、激しく振動する特異点」でしたが、ピカールの定理をこの真性特異点の近傍に適用することで、その振る舞いの異常さがどれほどのものであるかが驚くほど鮮明に描き出されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">大ピカールの定理</h2>

            <p>
                真性特異点の近傍では、関数は発散するだけでなく、あらゆる方向へ激しく値を変えながら振動します。大ピカールの定理は、その任意の小さな近傍でさえ、関数がほとんどすべての複素数値を無限回取ることを保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (大ピカールの定理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が <InlineMath math="z_0" /> に<b>真性特異点（essential singularity）</b>を持つとする。
                </p>
                <p>
                    このとき、<InlineMath math="z_0" /> の任意の穴あき近傍 <InlineMath math="V = \{z \mid 0 < |z - z_0| < r\}" /> において、<InlineMath math="f" /> はたかだか1つの例外値を除いて、すべての複素数値を<b>無限回</b>取る。
                </p>
                <p>
                    すなわち、高々1つの <InlineMath math="w_0 \in \mathbb{C}" /> を例外とし、任意の <InlineMath math="w \neq w_0" /> に対して方程式 <InlineMath math="f(z) = w" /> は近傍 <InlineMath math="V" /> 内に無限個の解を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）モンテルの定理の強化形（2つの値を避ける正則関数族は正規族であること）を用いて証明される。
                </p>
                <p>
                    <InlineMath math="z_0 = 0" /> に真性特異点があると仮定し、<InlineMath math="f" /> が原点の近傍で2つの相異なる値 <InlineMath math="a, b" /> を有限回しか取らない（あるいは全く取らない）と背理法により仮定する。このとき、より小さな穴あき円板 <InlineMath math="0 < |z| < r_1" /> を取れば、そこでは <InlineMath math="f" /> は <InlineMath math="a, b" /> を一切取らないようにできる。
                </p>
                <p>
                    環状領域の列を考え、関数族 <InlineMath math="f_n(z) = f(z/2^n)" /> とスケーリングしたものを構築する。これらは全て同じ（共通のコンパクト部分集合を持つ）領域上で <InlineMath math="a, b" /> を取らない正則関数である。モンテルの定理の強化形より、この関数族 <InlineMath math="\{f_n\}" /> は正規族となり、局所一様収束する部分列を持つ。
                </p>
                <p>
                    この正規性の帰結から、<InlineMath math="f" /> の値が原点に近づく極限で「無限大に一定の速度で発散する」、あるいは「有界にとどまる」という強い制約が生じる。しかし、これは原点がそれぞれ「極」であるか「除去可能特異点」であることを意味し、「真性特異点」であるという仮定に矛盾する。
                </p>
                <p>
                    したがって、真性特異点のどんな小さな近傍でも、少なくともどちらか一方の値（実際には高々1つの例外を除く全ての値）は無限回取らなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-1">
                <p>
                    最も分かりやすい真性特異点の例として <InlineMath math="f(z) = e^{1/z}" /> を考えます。<InlineMath math="z = 0" /> は真性特異点です。
                </p>
                <p>
                    <InlineMath math="z=0" /> のどんなに小さな近傍であっても、<InlineMath math="e^{1/z} = w" />（ただし <InlineMath math="w \neq 0" />）を解くと、
                </p>
                <BlockMath math="\frac{1}{z} = \log w = \ln|w| + i(\arg w + 2n\pi)" />
                <p>
                    よって解は、
                </p>
                <BlockMath math="z_n = \frac{1}{\ln|w| + i(\arg w + 2n\pi)}" />
                <p>
                    となります。<InlineMath math="n \to \infty" /> または <InlineMath math="n \to -\infty" /> とすると、分母の虚部が無限大になるため絶対値 <InlineMath math="|z_n| \to 0" /> となります。つまり、原点にいくらでも近い場所に、等式を満たす解 <InlineMath math="z_n" /> が無限個存在することが計算上もはっきりと見て取れます。
                </p>
                <p>
                    例外値は <InlineMath math="e^{1/z} = 0" /> となる <InlineMath math="0" /> のただ1つです。
                </p>
            </ContentBox>

            <p>
                この大ピカールの定理の意義を深く理解するために、私たちが複素解析I（3-2）で学んだ結果と比較してみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">カソラティ-ワイエルシュトラスの定理との比較</h2>

            <p>
                真性特異点の定義とその性質を与える際、我々は最初に「カソラティ-ワイエルシュトラスの定理」を学びました。これは次のような内容です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-2 (カソラティ-ワイエルシュトラスの定理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が <InlineMath math="z_0" /> に真性特異点を持つならば、<InlineMath math="z_0" /> の任意の穴あき近傍 <InlineMath math="V" /> における <InlineMath math="f" /> の像 <InlineMath math="f(V)" /> は、全複素平面 <InlineMath math="\mathbb{C}" /> の中で<b>稠密（dense）</b>である。
                </p>
                <p>
                    すなわち、任意の複素数 <InlineMath math="w \in \mathbb{C}" /> と任意の <InlineMath math="\varepsilon > 0" /> に対して、近傍 <InlineMath math="V" /> 内に <InlineMath math="|f(z) - w| < \varepsilon" /> を満たす点 <InlineMath math="z" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （背理法による）もしある <InlineMath math="w" /> とある半径 <InlineMath math="\varepsilon > 0" /> が存在して、近傍 <InlineMath math="V" /> 上で常に <InlineMath math="|f(z) - w| \geq \varepsilon" /> であると仮定する。
                </p>
                <p>
                    このとき、関数 <InlineMath math="g(z) = 1/(f(z) - w)" /> を考えると、<InlineMath math="g" /> は <InlineMath math="V" /> 上で正則であり、かつ <InlineMath math="|g(z)| \leq 1/\varepsilon" /> となり有界である。<InlineMath math="z_0" /> は <InlineMath math="g(z)" /> にとって有界な孤立特異点となるため、リーマンの定理により除去可能特異点である。
                </p>
                <p>
                    <InlineMath math="g(z_0)" /> の値が <InlineMath math="0" /> でないなら、<InlineMath math="f(z) = w + 1/g(z)" /> より <InlineMath math="f" /> も除去可能特異点を持つ。また、<InlineMath math="g(z_0) = 0" /> ならば <InlineMath math="f(z)" /> は <InlineMath math="z_0" /> に極を持つことになる。いずれも <InlineMath math="f" /> が真性特異点を持つことに矛盾する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-2">
                <p>
                    <InlineMath math="f(z) = \sin(1/z)" /> も原点に真性特異点を持ちます。<InlineMath math="z \to 0" /> となるとき、実軸に沿って近づけば <InlineMath math="[-1, 1]" /> の間で無限に激しく振動し、虚軸に沿って近づけば <InlineMath math="\pm i \infty" /> へと発散します。カソラティ-ワイエルシュトラスによれば「どんな複素数にもいくらでも近づける」ことがわかります。大ピカールによれば、さらに踏み込んで「任意の <InlineMath math="w \in [-1, 1]" /> （その他の複素数値も例外1つを除いてすべて）を無限回完全にヒットする解 <InlineMath math="z_n \to 0" /> が存在する」ことが確定します。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="稠密性と全射性の圧倒的な差">
                <p>
                    カソラティ-ワイエルシュトラスの定理は「目標の値にいくらでも近づくことができる＝稠密」と主張しています。しかし、本当にその値に「到達」するかどうかはわかりません。大ピカールの定理は、その溝を埋め、「いくらでも近づけるだけでなく、たかだか1つの例外を除けば、実際にその値に『完全に命中（実体化）し、しかも無限回当たる』」という、直感を遥かに超えた強烈な結論を導いています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>大ピカールの定理は、真性特異点の任意の（どんなに小さな）穴あき近傍でも、関数はたかだか1つの例外値を除き、すべての値を無限回取ることを保証する。</li>
                    <li><InlineMath math="e^{1/z}" /> の原点における振る舞いが、例外値 <InlineMath math="0" /> を持つこの定理の典型的な実例である。</li>
                    <li>カソラティ-ワイエルシュトラスの定理の「像が稠密である」という主張から、大ピカールの定理の「ほとんど全射であり無限回ヒットする」という主張へと結論が飛躍的に高度化されている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
