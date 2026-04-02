import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_12_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で二重積分の「定義（極限）」を与えましたが、実際の極限計算で積分値を求めることは困難です。
                二重積分を具体的な計算可能な形に落とし込むための極めて重要な定理が<strong>フビニの定理</strong>（Fubini's Theorem）であり、これによって二重積分を「1変数の積分を2回繰り返す計算（<strong>累次積分</strong>）」に置き換えることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">累次積分とフビニの定理</h2>

            <ContentBox type="theorem" title="Theorem 12.2-1 (フビニの定理)">
                <p>
                    関数 <InlineMath math="f(x, y)" /> が長方形領域 <InlineMath math="D = [a, b] \times [c, d]" /> 上で連続であるとする。
                </p>
                <p className="mt-2">
                    このとき、二重積分の値は、どちらの変数から先に積分しても等しくなる。すなわち、
                </p>
                <BlockMath math="\begin{aligned} \iint_D f(x, y) \, dA &= \int_a^b \left( \int_c^d f(x, y) \, dy \right) dx \\ &= \int_c^d \left( \int_a^b f(x, y) \, dx \right) dy \end{aligned}" />
                <p className="mt-2">
                    この右辺や中央の式のように、一つの変数に着目して積分し、その結果（残った変数の関数）をさらにもう一つの変数で積分する操作を<strong>累次積分</strong>（Iterated integral）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [フビニの定理の直感的な導出]">
                <p>
                    厳密な証明は測度論（ルベーグ積分）の知識を要するため、ここでは体積の計算を用いた幾何学的な導出・証明のスケッチを与える。
                </p>
                <p className="mt-2">
                    <InlineMath math="f(x, y) \ge 0" /> のとき、二重積分 <InlineMath math="\iint_D f(x, y) \, dA" /> は、領域 <InlineMath math="D" /> を底面とし、曲面 <InlineMath math="z = f(x, y)" /> を天井とする立体の体積 <InlineMath math="V" /> を表す。
                </p>
                <p className="mt-2">
                    この立体を、<InlineMath math="x" /> 軸に垂直な平面（ある固定された <InlineMath math="x" />）でスライスして切断面を考える。
                    この切断面は <InlineMath math="y" /> 方向の広がりを持つ「面積」であるから、その断面積 <InlineMath math="A(x)" /> は、<InlineMath math="x" /> を定数とみなして <InlineMath math="y" /> で積分した定積分に等しい：
                </p>
                <BlockMath math="A(x) = \int_c^d f(x, y) \, dy" />
                <p className="mt-2">
                    立体の総体積 <InlineMath math="V" /> は、この断面積 <InlineMath math="A(x)" /> を <InlineMath math="x = a" /> から <InlineMath math="x = b" /> まで足し合わせる（<InlineMath math="x" /> で積分する）ことで得られる：
                </p>
                <BlockMath math="V = \int_a^b A(x) \, dx = \int_a^b \left( \int_c^d f(x, y) \, dy \right) dx" />
                <p className="mt-2">
                    全く同様に、立体を <InlineMath math="y" /> 軸に垂直な平面でスライスした断面積 <InlineMath math="A(y) = \int_a^b f(x, y) \, dx" /> を考え、それを <InlineMath math="y = c" /> から <InlineMath math="y = d" /> まで足し合わせても、同じ体積 <InlineMath math="V" /> が得られる。
                </p>
                <p className="mt-2">
                    したがって、どちらの順序で累次積分を行っても、二重積分の値に一致することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般領域における積分順序の交換</h2>

            <p>
                上記のフビニの定理は長方形領域（積分範囲の上下限がすべて定数）のものでした。
                実際の応用では、境界が曲線で囲まれた一般領域 <InlineMath math="D" /> において積分範囲を設定し、必要に応じて積分順序を交換する技術が求められます。
            </p>

            <ContentBox type="proposition" title="Proposition 12.2-1 (積分順序の交換が可能な条件と範囲の書き換え)">
                <p>
                    一般領域における累次積分は、領域の形状（縦線領域か横線領域か）に応じて積分範囲（上限と下限）が変数となります。
                </p>

                <p className="mt-2 font-bold">[縦線領域]：先に $y$、次に $x$ で積分する</p>
                <p>
                    領域が <InlineMath math="D = \{ (x, y) \mid a \le x \le b, \, g_1(x) \le y \le g_2(x) \}" /> と表せる場合：
                </p>
                <BlockMath math="\iint_D f(x, y) \, dA = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \right) dx" />

                <p className="mt-4 font-bold">[横線領域]：先に $x$、次に $y$ で積分する</p>
                <p>
                    全く同じ領域が <InlineMath math="D = \{ (x, y) \mid c \le y \le d, \, h_1(y) \le x \le h_2(y) \}" /> とも表せる（条件を満たす）場合：
                </p>
                <BlockMath math="\iint_D f(x, y) \, dA = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \right) dy" />

                <p className="mt-4">
                    <strong>積分順序の交換</strong>とは、この縦線領域の表現から横線領域の表現へ（あるいはその逆へ）、<strong>領域 <InlineMath math="D" /> の形を図に描いて把握し、積分範囲を作り直すこと</strong>に他ならない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="積分順序を交換する意義と選び方">
                <p>
                    どうしてわざわざ積分順序を交換するのでしょうか？ それは、「片方の順序では初等関数で積分できない（あるいは非常に難しい）が、順序を入れ替えると驚くほど簡単に積分できるようになる」ケースが頻出するからです。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                        <strong>被積分関数の形からの判断：</strong>
                        例えば <InlineMath math="\int_0^1 \int_x^1 e^{y^2} \, dy \, dx" /> という積分を考えてみましょう。<InlineMath math="e^{y^2}" /> は <InlineMath math="y" /> について初等関数で不定積分を持つことができません（ガウス関数の仲間）。そのままでは手詰まりです。
                    </li>
                    <li>
                        <strong>領域の図示と順序交換：</strong>
                        積分範囲は <InlineMath math="0 \le x \le 1, \, x \le y \le 1" /> です。図を描くと「頂点が <InlineMath math="(0,0), (1,1), (0,1)" /> の三角形」であることがわかります。
                        これを変数 <InlineMath math="y" /> が先（外側）に来るように書き換えると、<InlineMath math="0 \le y \le 1, \, 0 \le x \le y" /> となります。
                    </li>
                    <li>
                        <strong>交換後の計算：</strong>
                        順序を交換した式 <InlineMath math="\int_0^1 \left( \int_0^y e^{y^2} \, dx \right) dy" /> を計算します。内側の積分は <InlineMath math="x" /> による積分であり、<InlineMath math="e^{y^2}" /> は定数扱いなので、<InlineMath math="\int_0^y e^{y^2} \, dx = [x \cdot e^{y^2}]_0^y = y e^{y^2}" /> となります。
                    </li>
                    <li>
                        <strong>完成：</strong>
                        外側の積分は <InlineMath math="\int_0^1 y e^{y^2} \, dy" /> となり、これは置換積分 <InlineMath math="u = y^2 \implies du = 2y \, dy" /> により簡単に <InlineMath math="\frac{1}{2}(e - 1)" /> と計算できます！
                    </li>
                </ul>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                    このように、<strong>累次積分に行き詰まったら、一度領域を図示して積分順序を逆転させてみる</strong>というのが重積分における最も強力な計算テクニックの一つです。
                </p>
            </ContentBox>

        </section>
    );
}
