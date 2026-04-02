import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_8_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で証明した多変数の陰関数定理に基づき、ここでは陰関数として定まる変数群の偏導関数を計算する具体的な手法を学びます。
                陽関数に変形することが至難（あるいは不可能）な方程式であっても、偏微分だけの代数計算で目的の微係数を求めることができる点が強力です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">偏導関数の計算</h2>

            <p>
                最も頻出する「方程式1つ、独立変数複数、従属変数1つ」のケースについて、偏導関数の計算公式を整理します。
                定理 8.2-1 のベクトル記法を成分ごとに書き下したものに相当します。
            </p>

            <ContentBox type="proposition" title="Proposition 8.3-1 (陰関数の偏微分の計算公式)">
                <p>
                    <InlineMath math="D \subset \mathbb{R}^{n+1}" /> を開集合とし、<InlineMath math="F(x_1, \dots, x_n, y): D \to \mathbb{R}" /> は <InlineMath math="C^1" /> 級とする。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="(\mathbf{a}, b) = (a_1, \dots, a_n, b) \in D" /> において <InlineMath math="F(\mathbf{a}, b) = 0" /> かつ <InlineMath math="F_y(\mathbf{a}, b) \neq 0" /> が成り立つとする。
                    このとき、陰関数定理によって点 <InlineMath math="\mathbf{a}" /> の近傍で定まる陰関数 <InlineMath math="y = f(x_1, \dots, x_n)" /> は <InlineMath math="C^1" /> 級であり、その各変数 <InlineMath math="x_i" /> に関する偏導関数は次で与えられる：
                </p>
                <BlockMath math="\frac{\partial y}{\partial x_i} = - \frac{F_{x_i}(x_1, \dots, x_n, y)}{F_y(x_1, \dots, x_n, y)} \quad (i = 1, \dots, n)" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ 右辺の <InlineMath math="y" /> には <InlineMath math="f(x_1, \dots, x_n)" /> が代入されているものとする。）
                </p>
            </ContentBox>

            <p>
                この公式の導出は1変数の場合（Proposition 8.1-1）と全く同じです。
                恒等式 <InlineMath math="F(x_1, \dots, x_n, f(x_1, \dots, x_n)) = 0" /> の両辺をある変数 <InlineMath math="x_i" /> について偏微分する際、合成関数の偏微分法則（連鎖律）を用いて
            </p>
            <BlockMath math="\frac{\partial F}{\partial x_i} \cdot 1 + \frac{\partial F}{\partial y} \cdot \frac{\partial y}{\partial x_i} = 0" />
            <p>
                とし、これを <InlineMath math="\frac{\partial y}{\partial x_i}" /> について解くだけです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <p>
                実際に具体的な方程式に対して、陰関数の偏微分を計算してみましょう。
                公式を丸暗記して当てはめる方法と、方程式の両辺を直接偏微分する方法の両方を見せます。実用的には後者の方が計算ミスが少なく、高階偏微分の計算にも応用が利きます。
            </p>

            <ContentBox type="example" title="Example 8.3-1 (方程式から定まる2変数関数の偏微分)">
                <p>
                    方程式 <InlineMath math="x^2 + y^2 + z^2 - 3xyz = 0" /> は、点 <InlineMath math="(1, 1, 1)" /> の近傍で、<InlineMath math="z" /> を <InlineMath math="x" /> と <InlineMath math="y" /> の関数 <InlineMath math="z = f(x, y)" /> として定める。
                    このとき、点 <InlineMath math="(x,y)=(1,1)" /> における偏微分係数 <InlineMath math="\frac{\partial z}{\partial x}(1,1)" /> と <InlineMath math="\frac{\partial^2 z}{\partial x^2}(1,1)" /> を求めよ。
                </p>
                <p className="mt-4 font-bold text-slate-700 dark:text-slate-300">解答:</p>
                <p className="mt-2">
                    <InlineMath math="F(x, y, z) = x^2 + y^2 + z^2 - 3xyz" /> とおく。
                    <InlineMath math="F_z = 2z - 3xy" /> であり、点 <InlineMath math="(1,1,1)" /> において <InlineMath math="F_z(1,1,1) = 2 - 3 = -1 \neq 0" /> であるため、陰関数定理より確かに <InlineMath math="z = f(x, y)" /> が局所的に定まる。
                </p>
                <p className="mt-2">
                    <strong>[ 1階偏微分の計算 ]</strong><br />
                    方程式の両辺を、<InlineMath math="z" /> が <InlineMath math="x, y" /> の関数であることを意識しながら <InlineMath math="x" /> で偏微分する（<InlineMath math="y" /> は定数扱い）。
                </p>
                <BlockMath math="2x + 2z \frac{\partial z}{\partial x} - 3y\left( 1 \cdot z + x \frac{\partial z}{\partial x} \right) = 0" />
                <p>
                    整理して <InlineMath math="\frac{\partial z}{\partial x}" /> について解くと、
                </p>
                <BlockMath math="(2z - 3xy) \frac{\partial z}{\partial x} = 3yz - 2x \implies \frac{\partial z}{\partial x} = \frac{3yz - 2x}{2z - 3xy}" />
                <p>
                    点 <InlineMath math="(1,1,1)" /> における微係数は、<InlineMath math="x=1, y=1, z=1" /> を代入して
                </p>
                <BlockMath math="\frac{\partial z}{\partial x}(1,1) = \frac{3 - 2}{2 - 3} = -1" />

                <p className="mt-4">
                    <strong>[ 2階偏微分の計算 ]</strong><br />
                    求めた1階偏導関数の式を、さらに連じた形式で <InlineMath math="x" /> でもう一度偏微分する。先ほど得た式
                </p>
                <BlockMath math="2x + 2z z_x - 3yz - 3xyz_x = 0" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">（表記を簡略化するため <InlineMath math="z_x = \frac{\partial z}{\partial x}" /> とした）</p>
                <p>
                    の両辺を <InlineMath math="x" /> で偏微分する。<InlineMath math="z_x" /> もまた <InlineMath math="x, y" /> の関数であることに注意して積の微分法を用いる。
                </p>
                <BlockMath math="2 + 2(z_x \cdot z_x + z \cdot z_{xx}) - 3y z_x - 3y(1 \cdot z_x + x \cdot z_{xx}) = 0" />
                <BlockMath math="2 + 2z_x^2 + 2z z_{xx} - 6y z_x - 3xy z_{xx} = 0" />
                <p className="mt-2">
                    ここで、点 <InlineMath math="(1,1)" /> における値を求めるため、<InlineMath math="x=1, y=1, z=1, z_x=-1" /> を直接代入する。
                </p>
                <BlockMath math="2 + 2(-1)^2 + 2(1) z_{xx} - 6(1)(-1) - 3(1)(1) z_{xx} = 0" />
                <BlockMath math="2 + 2 + 2 z_{xx} + 6 - 3 z_{xx} = 0" />
                <BlockMath math="10 - z_{xx} = 0 \implies z_{xx} = 10" />
                <p className="mt-2">
                    よって、<InlineMath math="\frac{\partial^2 z}{\partial x^2}(1,1) = 10" /> である。
                </p>
            </ContentBox>

            <p>
                このように、方程式を直接微分していく手法を用いると、元の関数の複雑な式 <InlineMath math="z = f(x, y)" /> を全く知らなくても、各点での値（<InlineMath math="x, y, z" /> や <InlineMath math="1" />階微係数）を代入していくリレー形式で、高階の微係数まで容易に計算することができます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>方程式 <InlineMath math="F(x_1, \dots, x_n, y) = 0" /> から定まる陰関数の偏導関数は、<InlineMath math="\frac{\partial y}{\partial x_i} = - \frac{F_{x_i}}{F_y}" /> で計算できる。</li>
                    <li>公式を覚えるよりも、方程式の両辺を直接偏微分し（連鎖律に注意）、目的の微係数について解くアプローチの方が実践的で応用が利く。</li>
                    <li>高階の微係数を求める場合も、1階導関数を含んだ方程式をさらに微分し、知っている値（元の座標や1階微係数の値）を順次代入していくことで計算が可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
