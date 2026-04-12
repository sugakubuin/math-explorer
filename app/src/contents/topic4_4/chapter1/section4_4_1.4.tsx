import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SeparationTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、凸集合の幾何学的性質の中でも極めて重要な「分離定理」と「支持超平面定理」について学びます。これらの定理は、交わらない凸集合を平面で分割できること、あるいは凸集合の境界に接する平面が存在することを保証するものであり、後の章で学ぶフェンシェル双対性や最適化理論の基礎となる強力なツールです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">超平面分離定理</h2>

            <p>
                まず、空間を分割する基本的な概念である超平面と半空間を定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (超平面と半空間)">
                <p>
                    ベクトル <InlineMath math="a \in \mathbb{R}^n \setminus \{0\}" /> と実数 <InlineMath math="b \in \mathbb{R}" /> に対して、方程式
                </p>
                <BlockMath math="H = \{ x \in \mathbb{R}^n \mid \langle a, x \rangle = b \}" />
                <p>
                    で定まる集合 <InlineMath math="H" /> を<b>超平面（hyperplane）</b>と呼ぶ。超平面 <InlineMath math="H" /> は空間 <InlineMath math="\mathbb{R}^n" /> を以下の2つの閉半空間に二分割する。
                </p>
                <BlockMath math="H^+ = \{ x \in \mathbb{R}^n \mid \langle a, x \rangle \geq b \}, \\ H^- = \{ x \in \mathbb{R}^n \mid \langle a, x \rangle \leq b \}" />
            </ContentBox>

            <p>
                超平面を用いて、交わらない2つの凸集合を分離する定理を定式化します。これが凸解析における中心的な結果である分離定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (分離定理)">
                <p>
                    <InlineMath math="C_1, C_2 \subset \mathbb{R}^n" /> を交わらない空でない凸集合とする（すなわち <InlineMath math="C_1 \cap C_2 = \emptyset" />）。もし、<InlineMath math="C_1, C_2" /> のうち少なくとも一方が開集合であるならば、それらを厳密に分離する超平面が存在する。すなわち、ある <InlineMath math="a \in \mathbb{R}^n \setminus \{0\}" /> と <InlineMath math="b \in \mathbb{R}" /> が存在して、
                </p>
                <BlockMath math="\langle a, x \rangle < b \quad (\forall x \in C_1), \quad \langle a, y \rangle \geq b \quad (\forall y \in C_2)" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の核となるのは、<InlineMath math="C = C_1 - C_2 = \{x - y \mid x \in C_1, y \in C_2\}" /> という集合を考えることである。<InlineMath math="C_1, C_2" /> が凸であることから、<InlineMath math="C" /> も凸集合となる。また、<InlineMath math="C_1 \cap C_2 = \emptyset" /> より <InlineMath math="0 \notin C" /> である。さらに、<InlineMath math="C_1" />（または <InlineMath math="C_2" />）が開集合であることから、<InlineMath math="C" /> も開集合となる（開集合と任意の集合の和は開集合であるため）。
                </p>
                <p>
                    ここで、原点 <InlineMath math="0" /> と開凸集合 <InlineMath math="C" /> の距離を考える。<InlineMath math="0 \notin C" /> であり、<InlineMath math="C" /> が開集合であることから、<InlineMath math="0" /> と <InlineMath math="C" /> の閉包 <InlineMath math="\overline{C}" /> との距離を実現する点 <InlineMath math="c^* \in \overline{C}" /> が存在する（これは次節で学ぶ射影定理により厳密に示される）。この <InlineMath math="c^*" /> は <InlineMath math="\|c^*\| > 0" /> を満たす。
                </p>
                <p>
                    ベクトル <InlineMath math="a = c^*" /> を選ぶ。任意の <InlineMath math="c \in C" /> に対して、内積 <InlineMath math="\langle a, c \rangle" /> を考えると、幾何学的な考察（または射影の性質）により <InlineMath math="\langle a, c \rangle > 0" /> が成り立つ。したがって、<InlineMath math="c = x - y" />（<InlineMath math="x \in C_1, y \in C_2" />）とすれば、
                </p>
                <BlockMath math="\langle a, x - y \rangle > 0 \implies \langle a, x \rangle > \langle a, y \rangle" />
                <p>
                    となる。<InlineMath math="C_1, C_2" /> での <InlineMath math="\langle a, \cdot \rangle" /> の値域を考え、適切な境界値 <InlineMath math="b" /> を選ぶことで（例えば <InlineMath math="b = \inf_{x \in C_1} \langle a, x \rangle" /> とする）、所望の分離超平面が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                抽象的な定理ですが、具体的な平面上の図形で確認すると非常に直感的です。
            </p>

            <ContentBox type="example" title="Example 1.4-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> において、単位円板 <InlineMath math="C_1 = \{ (x,y) \mid x^2 + y^2 \leq 1 \}" /> と、半平面 <InlineMath math="C_2 = \{ (x,y) \mid x \geq 3 \}" /> を考える。これらは明らかに交わらない凸集合である。
                </p>
                <p>
                    例えば、超平面（この場合は直線） <InlineMath math="x = 2" /> を法線ベクトル <InlineMath math="a = (1, 0)^T" />、定数 <InlineMath math="b = 2" /> として選ぶと、
                </p>
                <BlockMath math="H = \{ (x,y) \mid \langle (1,0)^T, (x,y)^T \rangle = x = 2 \}" />
                <p>
                    となる。任意の <InlineMath math="p \in C_1" /> は <InlineMath math="x \leq 1 < 2" /> を満たし、任意の <InlineMath math="q \in C_2" /> は <InlineMath math="x \geq 3 > 2" /> を満たす。したがって、この超平面によって2つの凸集合は完全に分離される。
                </p>
            </ContentBox>

            <p>
                分離定理は、後に学ぶフェンシェル双対性において、主問題と双対問題の間にギャップが存在しないこと（強双対定理）を証明する際の幾何学的な基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">支持超平面定理</h2>

            <p>
                分離定理の系として、凸集合の境界点においてその集合を「支持」する超平面が存在するという定理が導かれます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-2 (支持超平面定理)">
                <p>
                    <InlineMath math="C \subset \mathbb{R}^n" /> を空でない凸集合とする。任意の境界点 <InlineMath math="x_0 \in \partial C" /> に対して、<InlineMath math="x_0" /> を通り、<InlineMath math="C" /> をその一方の閉半空間に含む超平面が存在する。すなわち、ある <InlineMath math="a \in \mathbb{R}^n \setminus \{0\}" /> が存在して、
                </p>
                <BlockMath math="\langle a, x - x_0 \rangle \leq 0 \quad (\forall x \in C)"
                />
                <p>
                    が成り立つ。このような超平面を <InlineMath math="C" /> の <InlineMath math="x_0" /> における<b>支持超平面（supporting hyperplane）</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="x_0" /> は境界点であるため、<InlineMath math="C" /> の内部 <InlineMath math="\mathrm{int}(C)" /> には属さない（<InlineMath math="\mathrm{int}(C) = \emptyset" /> の場合は自明な拡張で処理できるので、<InlineMath math="\mathrm{int}(C) \neq \emptyset" /> とする）。
                </p>
                <p>
                    一点からなる集合 <InlineMath math="\{x_0\}" /> と、開凸集合 <InlineMath math="\mathrm{int}(C)" /> に分離定理（Theorem 1.4-1）を適用する。これらは交わらないので、ある <InlineMath math="a \neq 0" /> が存在して、
                </p>
                <BlockMath math="\langle a, x \rangle < \langle a, x_0 \rangle \quad (\forall x \in \mathrm{int}(C))" />
                <p>
                    が成り立つ。極限操作により閉包 <InlineMath math="C \subset \overline{\mathrm{int}(C)}" /> 全体に対しても <InlineMath math="\langle a, x \rangle \leq \langle a, x_0 \rangle" /> が成り立つ。これはすなわち <InlineMath math="\langle a, x - x_0 \rangle \leq 0" /> であり、所望の支持超平面が得られた。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                支持超平面は、滑らかな関数の接線の概念を凸集合に対して一般化したものと見なすことができます。
            </p>

            <ContentBox type="example" title="Example 1.4-2">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> の単位球 <InlineMath math="B(0,1) = \{ (x,y) \mid x^2 + y^2 \leq 1 \}" /> の境界点 <InlineMath math="x_0 = (1,0)" /> における支持超平面を考える。
                </p>
                <p>
                    図形的に明らかだが、直線 <InlineMath math="x = 1" /> が支持超平面となる。これを式で確認する。法線ベクトルを <InlineMath math="a = (1,0)^T" /> とすると、任意の <InlineMath math="p = (p_1, p_2)^T \in B(0,1)" /> に対して、<InlineMath math="p_1^2 + p_2^2 \leq 1" /> より <InlineMath math="p_1 \leq 1" /> である。
                </p>
                <p>
                    したがって、
                </p>
                <BlockMath math="\langle a, p - x_0 \rangle = \langle (1,0)^T, (p_1-1, p_2)^T \rangle = p_1 - 1 \leq 0" />
                <p>
                    が成り立ち、定義を満たしていることが確認できる。
                </p>
            </ContentBox>

            <p>
                本節で学んだ分離定理と支持超平面定理は、最適化問題における制約条件の幾何学的な理解や、劣微分（第3章）の存在定理など、広範な応用を持ちます。
            </p>

            <ContentBox type="remark" title="最適化理論への応用と双対性">
                <p>
                    分離定理は、最適化問題に対する強力な見方を提供します。例えば、ある制約条件を満たす集合と、目的関数の等高線が囲む集合を考えたとき、これらが交わらない（最適値が改善できない）限界の状況で、両者を分離する超平面（あるいは接する支持超平面）を引くことができます。この超平面の法線ベクトルが、制約の強さを表すラグランジュ乗数に対応します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>交わらない2つの凸集合（少なくとも一方は開）は、超平面によって分離することができる（超平面分離定理）。</li>
                    <li>凸集合の任意の境界点には、その集合を一方の半空間に収めるような支持超平面が存在する（支持超平面定理）。</li>
                    <li>これらの定理は、フェンシェル双対性や最適性条件など、凸解析と最適化理論の根幹をなす幾何学的基盤である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
