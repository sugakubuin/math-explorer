import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvergenceCauchyAndOpenSets() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節でノルムから距離が自然に導かれることを見ました。距離が定まれば、「点列が近づいていく」という収束の振る舞いや、空間の「開いている・閉じている」といった位相的な性質（トポロジー）を正確に記述することができます。本節では、ノルム空間におけるこれらの基本的な位相的概念を整理し、距離空間からの自然な拡張であることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束とコーシー列</h2>

            <p>
                微分積分学（解析学）における実数列の極限の定義を思い出すと、実数値の差の絶対値が <InlineMath math="0" /> に近づくこととして収束が定義されていました。ノルム空間では、絶対値の代わりにノルムを用いることでベクトル列の収束を定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (ノルム収束)">
                <p>
                    ノルム空間 <InlineMath math="V" /> における点列 <InlineMath math="(x_n)" /> が、ある <InlineMath math="x \in V" /> に対して
                </p>
                <BlockMath math="\lim_{n \to \infty} \|x_n - x\| = 0" />
                <p>
                    を満たすとき、<InlineMath math="(x_n)" /> は <InlineMath math="x" /> に（<b>ノルム</b>）<b>収束</b>するといい、<InlineMath math="\lim_{n \to \infty} x_n = x" /> または単に <InlineMath math="x_n \to x" /> と表す。
                </p>
            </ContentBox>

            <p>
                また、収束先が何であるかに直接言及せず、「列の項同士がだんだん近づく」という性質のみに注目するのがコーシー列の概念です。
            </p>

            <ContentBox type="definition" title="Definition 1.3-2 (コーシー列)">
                <p>
                    ノルム空間 <InlineMath math="V" /> における点列 <InlineMath math="(x_n)" /> が、任意の <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在して、<InlineMath math="m, n \geq N" /> ならば
                </p>
                <BlockMath math="\|x_m - x_n\| < \varepsilon" />
                <p>
                    を満たすとき、<InlineMath math="(x_n)" /> を<b>コーシー列（Cauchy sequence）</b>または<b>基本列</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                収束列は必ずコーシー列になります。関数解析において特に重要なのは「無限次元の関数空間でのノルム収束」です。関数の場合、これまで知っている「各点で極限をとる」ことと、ノルムにおける収束がどう異なるかに注意する必要があります。
            </p>

            <ContentBox type="example" title={<span>Example 1.3-1 (<InlineMath math="C[0,1]" /> の上限ノルムでの収束)</span>}>
                <p>
                    連続関数の空間 <InlineMath math="C[0,1]" /> において、非負整数 <InlineMath math="n" /> に対する関数列 <InlineMath math="f_n(x) = x^n" /> を考える。<InlineMath math="0 \leq x < 1" /> に対しては <InlineMath math="n \to \infty" /> とすると <InlineMath math="f_n(x) \to 0" /> であり、各点収束の極限関数は <InlineMath math="f(x) = 0" />（<InlineMath math="0 \leq x < 1" /> のとき）、<InlineMath math="f(1) = 1" /> となる。
                </p>
                <p>
                    しかし、ノルム空間 <InlineMath math="C[0,1]" /> での収束（一様ノルムでの収束）を考えるために <InlineMath math="f(x) = 0" />（定数関数）との差の上限ノルムを調べると、
                </p>
                <BlockMath math="\|f_n - 0\|_\infty = \sup_{x \in [0,1]} |x^n - 0| = 1 \not\to 0" />
                <p>
                    となる。したがって、この関数列は各点では収束するが、<InlineMath math="C[0,1]" /> の上限ノルムでは収束しない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="各点収束とノルム収束の違い">
                <p>
                    上の例からわかるように、各点収束とノルム収束は本質的に異なる概念です。関数空間でのノルムによる収束（一様ノルムでの収束）は、空間全体のすべての点で「一斉に（一様に）」近づくことを要求する非常に強い条件です。この厳格さこそが、極限をとっても関数の連続性などの良い性質が壊れないことを保証する源泉となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">開集合と閉集合</h2>

            <p>
                点列の収束を定義した後は、「ある点に近い点の集まり」や「境界を含む・含まない」といった位相的な集合を定義します。これも距離空間論からノルムという言葉に翻訳するだけです。
            </p>

            <ContentBox type="definition" title="Definition 1.3-3 (開球)">
                <p>
                    ノルム空間 <InlineMath math="V" />において、点 <InlineMath math="x \in V" /> と半径 <InlineMath math="r > 0" /> に対して、
                </p>
                <BlockMath math="B(x, r) = \{y \in V \mid \|x - y\| < r\}" />
                <p>
                    を <InlineMath math="x" /> を中心とする半径 <InlineMath math="r" /> の<b>開球（open ball）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                この開球を使って、開集合と閉集合を定めます。
            </p>

            <ContentBox type="definition" title="Definition 1.3-4 (開集合・閉集合)">
                <p>
                    ノルム空間 <InlineMath math="V" /> の部分集合 <InlineMath math="O" /> が<b>開集合（open set）</b>であるとは、任意の <InlineMath math="x \in O" /> に対して、ある <InlineMath math="r > 0" /> が存在して <InlineMath math="B(x, r) \subset O" /> となることである。
                </p>
                <p>
                    また、<InlineMath math="V" /> の部分集合 <InlineMath math="F" /> が<b>閉集合（closed set）</b>であるとは、その補集合 <InlineMath math="V \setminus F" /> が開集合であることをいう。
                </p>
            </ContentBox>

            <p>
                定義自体は抽象的ですが、ノルム空間の実体ごとに「開球」がどのような形をしているかはそれぞれ異なります。有限次元空間における開球の形を具体的にイメージしてみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 1.3-2 (<InlineMath math="\mathbb{R}^2" /> の単位開球)</span>}>
                <p>
                    原点 <InlineMath math="0 = (0,0)" /> を中心とした半径1の開球 <InlineMath math="B(0, 1) = \{x \in \mathbb{R}^2 \mid \|x\| < 1\}" /> が、ノルムの種類によって幾何学的にどのような形状になるかを確認する。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="\|\cdot\|_1" /> の場合（<InlineMath math="|x_1| + |x_2| < 1" />）: <InlineMath math="(1,0), (0,1), (-1,0), (0,-1)" /> を頂点とする<strong>菱形</strong>の内部。</li>
                    <li><InlineMath math="\|\cdot\|_2" /> の場合（<InlineMath math="\sqrt{x_1^2 + x_2^2} < 1" />）: おなじみの原点中心の半径1の<strong>円板</strong>の内部。</li>
                    <li><InlineMath math="\|\cdot\|_\infty" /> の場合（<InlineMath math="\max(|x_1|, |x_2|) < 1" />）: <InlineMath math="-1 < x_1 < 1" /> かつ <InlineMath math="-1 < x_2 < 1" /> となる<strong>正方形</strong>の内部。</li>
                </ul>
                <p>
                    ノルムは異なるが、いずれの形状も原点に関して対称な凸集合となっている（これはノルムの公理から一般的に成り立つ性質である）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="位相構造の一般化">
                <p>
                    ここで定義した開集合をもとに、3-12 位相空間論IIで学んだ内部、閉包、境界、稠密性などの位相の概念がすべてノルム空間にも導入されます。これにより、空間の「形（幾何）」や「極限（解析）」を統一的に扱うための強力な土台が完成するのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベクトル列の収束とコーシー列は、成分の絶対値の代わりにノルムを用いることで自然に定義される。</li>
                    <li>無限次元の関数空間では、各点収束とノルム収束（一様収束など）の違いに注意する必要がある。ノルム収束は空間全体での一様な近づき方を捉える強い条件である。</li>
                    <li>開球の形状はノルムの種類（例えば <InlineMath math="\|\cdot\|_1" />, <InlineMath math="\|\cdot\|_2" />, <InlineMath math="\|\cdot\|_\infty" />）によって幾何学的に異なる。</li>
                    <li>ノルムから開球とその論理的帰結である開集合・閉集合が定義され、これにより距離空間および位相空間としての一般論が適用可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
