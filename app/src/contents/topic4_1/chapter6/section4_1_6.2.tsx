import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchySchwarzAndParallelogram() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入した内積空間において、最も基本的な不等式と等式を紹介します。これらは内積とそこから誘導されるノルムの関係を特徴づける極めて重要な結果です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシー-シュワルツの不等式</h2>

            <p>
                内積空間において常に成り立つ強力な不等式がコーシー-シュワルツの不等式です。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (コーシー-シュワルツの不等式)">
                <p>
                    内積空間 <InlineMath math="V" /> の任意の元 <InlineMath math="x, y \in V" /> に対して、次が成り立つ。
                </p>
                <BlockMath math="|\langle x, y \rangle| \leq \|x\| \|y\|" />
                <p>
                    等号が成立するための必要十分条件は、<InlineMath math="x" /> と <InlineMath math="y" /> が線形従属（すなわち、一方が他方の定数倍）であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y = 0" /> の場合は両辺が <InlineMath math="0" /> となり自明に成り立つ。以下、<InlineMath math="y \neq 0" /> とする。<br/>
                    任意のスカラー <InlineMath math="t \in \mathbb{K}" /> に対して、内積の正定値性より <InlineMath math="\|x - ty\|^2 \geq 0" /> である。これを展開すると、
                </p>
                <BlockMath math="\begin{aligned} 0 \leq \langle x - ty, x - ty \rangle &= \|x\|^2 - t\langle y, x \rangle - \bar{t}\langle x, y \rangle + |t|^2\|y\|^2 \end{aligned}" />
                <p>
                    ここで、<InlineMath math="t = \frac{\langle x, y \rangle}{\|y\|^2}" /> を代入する。
                </p>
                <BlockMath math="\begin{aligned} 0 &\leq \|x\|^2 - \frac{\langle x, y \rangle \langle y, x \rangle}{\|y\|^2} - \frac{\overline{\langle x, y \rangle} \langle x, y \rangle}{\|y\|^2} + \frac{|\langle x, y \rangle|^2}{\|y\|^4}\|y\|^2 \\ &= \|x\|^2 - \frac{|\langle x, y \rangle|^2}{\|y\|^2} - \frac{|\langle x, y \rangle|^2}{\|y\|^2} + \frac{|\langle x, y \rangle|^2}{\|y\|^2} \\ &= \|x\|^2 - \frac{|\langle x, y \rangle|^2}{\|y\|^2} \end{aligned}" />
                <p>
                    これを整理すると <InlineMath math="|\langle x, y \rangle|^2 \leq \|x\|^2 \|y\|^2" /> となり、平方根をとることで所望の不等式を得る。<br/>
                    等号成立条件は <InlineMath math="\|x - ty\|^2 = 0" />、すなわち <InlineMath math="x = ty" />（線形従属）となることである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-1">
                <p>
                    空間 <InlineMath math="\ell^2" /> における具体的な確認を行う。<br/>
                    ベクトル <InlineMath math="x = (1, 1/2, 0, \ldots)" /> と <InlineMath math="y = (1, 0, 0, \ldots)" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\langle x, y \rangle = 1\cdot 1 + \frac{1}{2}\cdot 0 + 0 = 1" /></li>
                    <li><InlineMath math="\|x\| = \sqrt{1^2 + (1/2)^2} = \sqrt{5/4}" /></li>
                    <li><InlineMath math="\|y\| = \sqrt{1^2} = 1" /></li>
                </ul>
                <p>
                    不等式に当てはめると、<InlineMath math="1 \leq \sqrt{5/4} \cdot 1" /> となり、確かに成立していることが確認できる。
                </p>
            </ContentBox>

            <p>
                この不等式を用いることで、内積から誘導される「長さ」が、文字通りノルムの公理（特に三角不等式）を満たすことが証明できます。
            </p>

            <ContentBox type="theorem" title="Corollary 6.2-1">
                <p>
                    内積空間 <InlineMath math="V" /> において、<InlineMath math="\|x\| = \sqrt{\langle x, x \rangle}" /> で定義される関数は三角不等式を満たす。すなわち、内積空間はノルム空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="x, y \in V" /> に対して、<InlineMath math="\|x+y\|^2" /> を計算する。
                </p>
                <BlockMath math="\begin{aligned} \|x+y\|^2 &= \langle x+y, x+y \rangle \\ &= \|x\|^2 + \langle x, y \rangle + \langle y, x \rangle + \|y\|^2 \\ &= \|x\|^2 + 2\mathrm{Re}\langle x, y \rangle + \|y\|^2 \end{aligned}" />
                <p>
                    ここで、<InlineMath math="\mathrm{Re}\langle x, y \rangle \leq |\langle x, y \rangle|" /> と Theorem 6.2-1（コーシー-シュワルツの不等式）を用いると、
                </p>
                <BlockMath math="\begin{aligned} \|x+y\|^2 &\leq \|x\|^2 + 2|\langle x, y \rangle| + \|y\|^2 \\ &\leq \|x\|^2 + 2\|x\|\|y\| + \|y\|^2 \\ &= (\|x\| + \|y\|)^2 \end{aligned}" />
                <p>
                    両辺の平方根をとれば、<InlineMath math="\|x+y\| \leq \|x\| + \|y\|" /> を得る。正定値性と斉次性は内積の公理から直ちに従うため、これはノルムとなる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">平行四辺形法則</h2>

            <p>
                前段落で内積空間がノルム空間になることを見ました。それでは、逆に「あるノルムが与えられたとき、それが内積から誘導されたものか？」を判定する基準はあるのでしょうか。その基準となるのが<b>平行四辺形法則（parallelogram law）</b>です。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-2 (平行四辺形法則)">
                <p>
                    内積空間 <InlineMath math="V" /> の任意の元 <InlineMath math="x, y \in V" /> に対して、次が成り立つ。
                </p>
                <BlockMath math="\|x+y\|^2 + \|x-y\|^2 = 2\|x\|^2 + 2\|y\|^2" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    内積を用いて左辺を直接展開する。
                </p>
                <BlockMath math="\begin{aligned} \|x+y\|^2 &= \langle x+y, x+y \rangle = \|x\|^2 + \langle x, y \rangle + \langle y, x \rangle + \|y\|^2 \\ \|x-y\|^2 &= \langle x-y, x-y \rangle = \|x\|^2 - \langle x, y \rangle - \langle y, x \rangle + \|y\|^2 \end{aligned}" />
                <p>
                    両辺を足し合わせると、交差項が打ち消し合い、
                </p>
                <BlockMath math="\|x+y\|^2 + \|x-y\|^2 = 2\|x\|^2 + 2\|y\|^2" />
                <p>
                    を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                幾何学的には、この法則は「平行四辺形の対角線の長さの平方和は、4つの辺の長さの平方和に等しい」という古典的な定理に対応しています。
            </p>

            <ContentBox type="example" title="Example 6.2-2">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> の標準内積を用いて、<InlineMath math="x = (1, 0)" />、<InlineMath math="y = (0, 1)" /> に対する確認を行う。<br/>
                    ベクトル <InlineMath math="x" /> と <InlineMath math="y" /> が張る図形は1辺の長さが1の正方形（平行四辺形の一種）である。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\|x\|^2 = 1" />, <InlineMath math="\|y\|^2 = 1" /></li>
                    <li><InlineMath math="x+y = (1, 1)" /> より <InlineMath math="\|x+y\|^2 = 2" /></li>
                    <li><InlineMath math="x-y = (1, -1)" /> より <InlineMath math="\|x-y\|^2 = 2" /></li>
                </ul>
                <p>
                    したがって、左辺は <InlineMath math="2 + 2 = 4" />、右辺は <InlineMath math="2(1) + 2(1) = 4" /> となり、等式が成立している。
                </p>
            </ContentBox>

            <p>
                この平行四辺形法則は、与えられたノルム空間のノルムが内積に由来するかどうかの完全な必要十分条件を与えます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-3 (ヨルダン-フォン・ノイマンの定理)">
                <p>
                    ノルム空間 <InlineMath math="(V, \|\cdot\|)" /> のノルムが内積 <InlineMath math="\langle \cdot, \cdot \rangle" /> から誘導される（すなわち <InlineMath math="\|x\| = \sqrt{\langle x, x \rangle}" /> となる）のための必要十分条件は、任意の <InlineMath math="x, y \in V" /> に対して平行四辺形法則が成り立つことである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    必要性はすでに Theorem 6.2-2 で示した。十分性については、次のような<b>偏極等式（polarization identity）</b>を用いて内積を構成する。
                </p>
                <BlockMath math="\langle x, y \rangle = \frac{1}{4}\left( \|x+y\|^2 - \|x-y\|^2 + i\|x+iy\|^2 - i\|x-iy\|^2 \right)" />
                <p>
                    （実ベクトル空間の場合は初めの2項からなる <InlineMath math="\frac{1}{4}(\|x+y\|^2 - \|x-y\|^2)" /> で定義する）。<br/>
                    この構成した <InlineMath math="\langle x, y \rangle" /> が内積の3公理を満たすことを、仮定の平行四辺形法則を用いて逐一確認していくことで証明される（詳細な展開計算は省略する）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-3">
                <p>
                    空間 <InlineMath math="\ell^1" /> のノルムは内積に由来しないことを確認する。<br/>
                    <InlineMath math="\ell^1" /> の要素 <InlineMath math="x = (1, 0, 0, \ldots)" /> と <InlineMath math="y = (0, 1, 0, \ldots)" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\|x\|_1 = 1" />, <InlineMath math="\|y\|_1 = 1" /></li>
                    <li><InlineMath math="x+y = (1, 1, 0, \ldots)" /> より <InlineMath math="\|x+y\|_1 = 2" /></li>
                    <li><InlineMath math="x-y = (1, -1, 0, \ldots)" /> より <InlineMath math="\|x-y\|_1 = 2" /></li>
                </ul>
                <p>
                    平行四辺形法則に当てはめると、左辺は <InlineMath math="2^2 + 2^2 = 8" /> となる一方、右辺は <InlineMath math="2(1^2) + 2(1^2) = 4" /> となり、両者は一致しない。したがって、Theorem 6.2-3 より <InlineMath math="\ell^1" /> のノルムは内積から誘導されたものではないことがわかる。これは <InlineMath math="p \neq 2" /> のときの <InlineMath math="\ell^p" /> 空間全般に言える性質である。
                </p>
            </ContentBox>

            <p>
                このように、内積がもたらす幾何学的構造は、一般的なノルム空間の中でも特権的な、非常に扱いやすい性質を持っています。
            </p>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>コーシー-シュワルツの不等式 <InlineMath math="|\langle x, y \rangle| \leq \|x\| \|y\|" /> により、内積から三角不等式を満たすノルムが誘導される。</li>
                    <li>内積から誘導されたノルムは、常に平行四辺形法則を満たす。</li>
                    <li>ヨルダン-フォン・ノイマンの定理により、あるノルム空間が内積を伴う空間であるための完全な条件が平行四辺形法則であることが保証される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
