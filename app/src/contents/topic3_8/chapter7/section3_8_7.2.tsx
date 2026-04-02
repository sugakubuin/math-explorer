import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AlternatingGroup() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節では対称群 <InlineMath math="S_n" /> と、置換を偶奇によって分類する「符号写像」を学びました。
                本節では、偶置換だけを集めて作られる非常に重要な部分群である「交代群」について詳しく見ていきます。
                交代群は、高次方程式の解の公式が存在しないことを証明するガロア理論においても、決定的な役割を果たす群です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">交代群の定義と基本性質</h2>

            <p className="leading-relaxed mb-4">
                まず、交代群の基本的な定義を確認しましょう。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 (交代群)">
                <p>
                    <InlineMath math="n" /> 次対称群 <InlineMath math="S_n" /> の部分集合で、すべての <b>偶置換</b> からなる集合を <b><InlineMath math="n" /> 次交代群</b> と呼び、<InlineMath math="A_n" /> で表す。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                交代群は符号写像 <InlineMath math="\mathrm{sgn}: S_n \to \{1, -1\}" /> の核（kernel）として定義されるため、常に正規部分群となります。
            </p>

            <ContentBox type="proposition" title="Proposition 7.2-1 (交代群の性質)">
                <p>
                    1. <InlineMath math="A_n" /> は <InlineMath math="S_n" /> の正規部分群である（<InlineMath math="A_n \trianglelefteq S_n" />）。
                </p>
                <p className="mt-4">
                    2. <InlineMath math="n \geq 2" /> のとき、交代群の指数は2、位数は <InlineMath math="n!/2" /> である。
                    <BlockMath math="[S_n : A_n] = 2, \quad |A_n| = \frac{n!}{2}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. 符号写像 <InlineMath math="\mathrm{sgn}: S_n \to \{1, -1\}" /> は、
                    <InlineMath math="\mathrm{sgn}(\sigma\tau) = \mathrm{sgn}(\sigma)\mathrm{sgn}(\tau)" />
                    を満たす群準同型である。交代群 <InlineMath math="A_n" /> はその核 <InlineMath math="\mathrm{ker}(\mathrm{sgn})" />
                    として定義されるため、正規部分群である。
                </p>
                <p className="mt-4">
                    2. 準同型基本定理より、像 <InlineMath math="\mathrm{im}(\mathrm{sgn}) = \{1, -1\}" /> は商群 <InlineMath math="S_n / A_n" /> と同型である。
                    したがって、指数は <InlineMath math="[S_n : A_n] = 2" /> となり、
                    ラグランジュの定理より <InlineMath math="|A_n| = |S_n| / 2 = n!/2" /> が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-4">
                具体的に、小さな次数の交代群がどのような元を含んでいるかを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 7.2-1 (A_3 と A_4)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>3次交代群 <InlineMath math="A_3" /></b>：<br />
                        <InlineMath math="S_3" /> は6つの元を持ち、そのうち偶置換は <InlineMath math="e, (1\,2\,3), (1\,3\,2)" /> の3つである。
                        よって、<InlineMath math="A_3 = \{e, (1\,2\,3), (1\,3\,2)\}" /> となり、これは3次巡回群 <InlineMath math="\mathbb{Z}/3\mathbb{Z}" /> と同型である。
                    </li>
                    <li>
                        <b>4次交代群 <InlineMath math="A_4" /></b>：<br />
                        位数は <InlineMath math="24/2 = 12" />。以下の元からなる：
                        <ul className="list-circle list-inside ml-6 mt-2">
                            <li>単位置換 <InlineMath math="e" />（1個）</li>
                            <li>型 <InlineMath math="(3, 1)" /> の巡回置換（例：<InlineMath math="(1\,2\,3)" /> など、計8個）</li>
                            <li>型 <InlineMath math="(2, 2)" /> の互換の積（例：<InlineMath math="(1\,2)(3\,4)" /> など、計3個）</li>
                        </ul>
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-4">
                ここで、<InlineMath math="A_4" /> は群論における重要な反例を提供してくれます。
                具体的には、「ラグランジュの定理の逆は一般には成り立たない」という事実の最小の例となっています。
            </p>

            <ContentBox type="remark" title="ラグランジュの逆の不成立 (A_4)">
                <p>
                    <InlineMath math="A_4" /> は位数12の群であるが、<b>位数6の部分群を持たない</b>。
                    ラグランジュの定理によれば、部分群の位数は群の位数の約数（1, 2, 3, 4, 6, 12）でなければなりませんが、
                    約数であってもそれに対応する部分群が必ずしも存在するとは限らないのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">A_n の単純性</h2>

            <p className="leading-relaxed mb-4">
                交代群の最も驚くべき、そして重要な性質の1つは、その「単純性」にあります。自明でない正規部分群を持たない群を単純群と呼びますが、交代群は <InlineMath math="n \geq 5" /> で常に単純群となります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-2 (単純群 A_n)">
                <p>
                    <InlineMath math="A_n" /> が単純群であるための必要十分条件は <InlineMath math="n \neq 4" /> である。
                    具体的には、<InlineMath math="n \geq 5" /> のとき <b><InlineMath math="A_n" /> は単純群である</b>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="n=5" /> の場合：<br />
                    <InlineMath math="A_5" /> の位数は 60 であり、共役類の大きさは 1, 15, 20, 12, 12 である。
                    正規部分群 <InlineMath math="H" /> は単位元（サイズ1）を含み、いくつかの共役類の和集合で、その位数 <InlineMath math="|H|" /> は 60 の約数でなければならない。
                    1 を含む <InlineMath math="\{1, 15, 20, 12, 12\}" /> の部分和として可能な値は 1, 13, 16, 21, 25, 28, 33, 37, 41, 45, 48, 60 である。
                    このうち 60 の約数は 1 と 60 だけであるため、<InlineMath math="H" /> は自明な群か <InlineMath math="A_5" /> 自身に限られる。
                </p>
                <p className="mt-4">
                    2. <InlineMath math="n > 5" /> の場合（帰納的議論の略述）：<br />
                    <InlineMath math="n" /> についての数学的帰納法を用いる。<InlineMath math="A_n" /> の非自明な正規部分群 <InlineMath math="N" /> があると仮定し、
                    <InlineMath math="N" /> がある <InlineMath math="x \in \{1,\dots,n\}" /> を固定する部分群 <InlineMath math="(A_n)_x \cong A_{n-1}" /> と非自明な交わりを持つことを示す。
                    帰納法の仮定から <InlineMath math="N \cap (A_n)_x = (A_n)_x" /> となり、これを用いて <InlineMath math="N" /> がすべての3次巡回置換を含むことが導かれ、<InlineMath math="N = A_n" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-6">
                <InlineMath math="A_n" />（<InlineMath math="n \geq 5" />）が単純群であること、すなわち可換な商群を作れないほど「複雑」であることは、
                5次以上の一般方程式が根号で解けないことの根本的な原因となっています。
                次節では、幾何学的な対称性から生まれる「二面体群」について学習します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>交代群 <InlineMath math="A_n" /> は対称群 <InlineMath math="S_n" /> の <b>偶置換</b> からなる指数2の <b>正規部分群</b> である。</li>
                    <li><InlineMath math="A_4" /> は位数12でありながら <b>位数6の部分群を持たない</b>。</li>
                    <li>交代群 <InlineMath math="A_n" /> は <b><InlineMath math="n \geq 5" /> のときすべて単純群</b> である。</li>
                    <li>この単純性が、5次以上の方程式に解の公式が存在しないことと深く結びついている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
