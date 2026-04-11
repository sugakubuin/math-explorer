import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MobiusTransformations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                等角写像の中で、最も扱いやすく、そしてリーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> 全体の構造を保つ（自己同型である）特別な変換が存在します。それが「メビウス変換（Möbius transformation）」または一次分数変換と呼ばれるものです。本節では、この変換が持つ幾何学的な美しさと、群としての代数的な構造について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">メビウス変換の定義と性質</h2>

            <p>
                メビウス変換は、一次式を一次式で割っただけの非常にシンプルな形をしています。
            </p>

            <ContentBox type="definition" title="Definition 4.2-1 (メビウス変換)">
                <p>
                    複素定数 <InlineMath math="a, b, c, d \in \mathbb{C}" /> が条件 <InlineMath math="ad - bc \neq 0" /> を満たすとき、以下の形式で与えられるリーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> からそれ自身への写像 <InlineMath math="f" /> を<b>メビウス変換（Möbius transformation）</b>または<b>一次分数変換</b>と呼ぶ。
                </p>
                <BlockMath math="f(z) = \frac{az + b}{cz + d}" />
                <p>
                    （※特異点の扱いは、<InlineMath math="c \neq 0" /> のとき <InlineMath math="f(-d/c) = \infty" />、<InlineMath math="f(\infty) = a/c" />。 <InlineMath math="c = 0" /> のときは <InlineMath math="f(\infty) = \infty" /> と約束する。）
                </p>
            </ContentBox>

            <ContentBox type="remark" title="なぜ ad - bc ≠ 0 なのか？">
                <p>
                    もし <InlineMath math="ad - bc = 0" /> だとすると、分子が分母の定数倍になり、<InlineMath math="f(z)" /> が <InlineMath math="z" /> に依らない単なる定数関数に退化してしまいます。これを防ぎ、全単射な写像であるための必要十分条件が <InlineMath math="ad - bc \neq 0" /> です。これは行列 <InlineMath math="\begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> の行列式が <InlineMath math="0" /> でないという条件に合致します。
                </p>
            </ContentBox>

            <p>
                メビウス変換のもっとも際立った幾何学的な特徴は、「円を円に写す」という性質です。ここで言う「円」とは、直線のことも「半径が無限大の円、または無限遠点を通る円」と見なすことで統合された、リーマン球面上の円のことです。
            </p>

            <ContentBox type="proposition" title="Proposition 4.2-1 (円と直線の保存)">
                <p>
                    任意のメビウス変換は、リーマン球面上の「円または直線」を必ず「円または直線」に写す。円が直線に変わることも、直線が円に変わることも起こり得る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意のメビウス変換 <InlineMath math="f(z) = \frac{az+b}{cz+d}" /> は、以下の基本的な3つの変換の組み合わせ（合成）として表すことができる。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><b>平行移動</b>: <InlineMath math="z \mapsto z + \alpha" /></li>
                    <li><b>回転・拡大縮小</b>: <InlineMath math="z \mapsto \beta z" />（<InlineMath math="\beta \neq 0" />）</li>
                    <li><b>反転</b>: <InlineMath math="z \mapsto \frac{1}{z}" /></li>
                </ol>
                <p>
                    （実際、<InlineMath math="c \neq 0" /> のときは多項式の割り算を行って <InlineMath math="\frac{a}{c} + \frac{bc-ad}{c^2(z + d/c)}" /> と分解でき、反転と一次変換に帰着できる。）
                </p>
                <p>
                    平行移動と回転・拡大縮小が「円を円に、直線を直線に」写すことは自明である。<br />
                    あとは「反転 <InlineMath math="w = 1/z" />」が円と直線を保存することを示せばよい。
                </p>
                <p>
                    複素平面上の一般の「円または直線」の方程式は、実定数 <InlineMath math="A, C" />、複素定数 <InlineMath math="B" /> （ただし <InlineMath math="|B|^2 > AC" />）を用いて、
                    <BlockMath math="A|z|^2 + \bar{B}z + B\bar{z} + C = 0" />
                    と書ける。（<InlineMath math="A \neq 0" /> なら円、<InlineMath math="A = 0" /> なら直線）。これに <InlineMath math="z = 1/w" /> を代入すると、
                </p>
                <BlockMath math="A\left|\frac{1}{w}\right|^2 + \bar{B}\frac{1}{w} + B\frac{1}{\bar{w}} + C = 0" />
                <p>
                    両辺に <InlineMath math="|w|^2 = w\bar{w}" /> を掛けると、
                </p>
                <BlockMath math="C|w|^2 + Bw + \bar{B}\bar{w} + A = 0" />
                <p>
                    となり、これは変数 <InlineMath math="w" /> に関する別の「円または直線」の方程式の形に完全に一致する。<br />
                    以上より、基本変形のすべてが円/直線を保存するため、その合成であるメビウス変換も円と直線を保存する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-1">
                <p>
                    上半平面 <InlineMath math="\mathbb{H} = \{z \mid \text{Im}(z) > 0\}" /> を単位円板 <InlineMath math="\mathbb{D} = \{w \mid |w| < 1\}" /> に移す有名なメビウス変換
                </p>
                <BlockMath math="f(z) = \frac{z - i}{z + i}" />
                <p>
                    を考えます。
                </p>
                <p>
                    境界である「実数直線（と無限遠点）」はどこに行くでしょうか。<InlineMath math="z" /> が実数 <InlineMath math="x" /> のとき、
                    <InlineMath math="|x - i| = \sqrt{x^2 + 1}" />、<InlineMath math="|x + i| = \sqrt{x^2 + 1}" /> なので、<InlineMath math="|f(x)| = \frac{|x-i|}{|x+i|} = 1" /> となります。<br />
                    つまり、「直線（実軸）」が「円（単位円）」に写されました。そして上半平面の点（例えば <InlineMath math="z = i" />）は <InlineMath math="f(i) = 0" /> となり円板の内部へ行くため、確かに上半平面全体が円板へと等角に展開されることが分かります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">三点一意性と変換群</h2>

            <p>
                メビウス変換には、空間内の指定した3つの点を、好きな3つの場所へ自由に、かつただ一通りに移動させることができるという無類の融通性があります。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 4.2-1 (三点一意性)</span>}>
                <p>
                    リーマン球面上の互いに異なる任意の3点 <InlineMath math="z_1, z_2, z_3" /> と、引越し先となる互いに異なる任意の3点 <InlineMath math="w_1, w_2, w_3" /> が与えられたとき、
                </p>
                <BlockMath math="f(z_1) = w_1, \quad f(z_2) = w_2, \quad f(z_3) = w_3" />
                <p>
                    を満たすようなメビウス変換 <InlineMath math="f(z)" /> が、<b>ただ一つ（一意に）存在</b>する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、任意の3点 <InlineMath math="z_1, z_2, z_3" /> をそれぞれ、基準となる3点 <InlineMath math="0, 1, \infty" /> に写すような特別なメビウス変換 <InlineMath math="S(z)" /> を構成する。それは具体的には次のように書ける。
                </p>
                <BlockMath math="S(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}" />
                <p>
                    （どれかが <InlineMath math="\infty" /> の場合は、極限を取って適切な形に修正する）。代入すれば直ちに <InlineMath math="S(z_1) = 0" />, <InlineMath math="S(z_2) = 1" />, <InlineMath math="S(z_3) = \infty" /> となることがわかる。
                </p>
                <p>
                    同様に、引越し先の3点 <InlineMath math="w_1, w_2, w_3" /> を <InlineMath math="0, 1, \infty" /> に写すメビウス変換を <InlineMath math="T(w)" /> とする。
                </p>
                <p>
                    求めたい変換 <InlineMath math="f(z)" /> は、<InlineMath math="z" /> の点を一度 <InlineMath math="0, 1, \infty" /> に持っていき、そこから <InlineMath math="T" /> の逆変換で <InlineMath math="w" /> の点に持って行けばよいので、
                </p>
                <BlockMath math="f(z) = T^{-1}(S(z))" />
                <p>
                    と構成できる。これで存在が示された。
                </p>
                <p>
                    一意性を示すには、<InlineMath math="0, 1, \infty" /> をそれぞれ <InlineMath math="0, 1, \infty" /> 自身に留めるメビウス変換が恒等写像（<InlineMath math="z \mapsto z" />）しかないことを示せばよい。これは連立方程式を解けば自明である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-2">
                <p>
                    単位円板 <InlineMath math="\mathbb{D}" /> をそれ自身に写す変換（自己同型）の中で、<InlineMath math="z=0" /> を <InlineMath math="w=0" /> に保ちつつ回転させるだけの変換 <InlineMath math="w = e^{i\theta}z" /> は、<InlineMath math="1, i, -1" /> の位置をそれぞれ <InlineMath math="e^{i\theta}, ie^{i\theta}, -e^{i\theta}" /> へ写すという3点の対応関係で完全に一意に決定されています。
                </p>
            </ContentBox>

            <p>
                最後に、メビウス変換が作り出す壮大な代数的構造について触れておきましょう。
            </p>

            <ContentBox type="remark" title="メビウス変換と行列と自己同型群">
                <p>
                    メビウス変換は、関数同士の「合成（代入してつなぐこと）」を演算として<b>群</b>をなします。さらに面白いことに、2つのメビウス変換の合成関数を計算することは、それらの係数を並べた <InlineMath math="2\times 2" /> の行列の<b>掛け算</b>を計算することと完全に一致します。
                </p>
                <p>
                    このため、メビウス変換の群は 行列式 1 の複素行列の群 <InlineMath math="\text{SL}(2, \mathbb{C})" /> を、符号の反転（行列全体に <InlineMath math="-1" /> を掛けても分数ではキャンセルされる）で割った群 <InlineMath math="\text{PSL}(2, \mathbb{C})" /> に同型となります。
                    リーマン球面からリーマン球面への正則で全単射な写像（自己同型）は、実はこのメビウス変換しか存在しません。すなわち、<InlineMath math="\text{Aut}(\hat{\mathbb{C}}) = \text{PSL}(2, \mathbb{C})" /> という美しい等式が成り立っています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>メビウス変換は <InlineMath math="z \mapsto (az+b)/(cz+d)" /> の形をした有理関数であり、リーマン球面の自己同型写像である。</li>
                    <li>複素平面上の「円や直線」はメビウス変換によって必ず「円や直線」のいずれかに写される。</li>
                    <li>指定された3点を任意の3点へ写すメビウス変換がただ一つ機能する（三点一意性）。</li>
                    <li>これらは群 <InlineMath math="\text{PSL}(2, \mathbb{C})" /> と同型な代数構造を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
