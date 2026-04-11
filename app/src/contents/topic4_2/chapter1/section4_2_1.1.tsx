import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IdentityTheoremAndIsolatedZeros() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析における正則関数は、実変数の滑らかな関数とは比較にならないほどの「硬さ」を持っています。その象徴とも言えるのが「零点の孤立性」と「一致の定理」です。本節では、ある領域上で定義された正則関数の値が、ほんのわずかな情報の蓄積（集積点を持つ部分集合上での値）から一意に定まってしまうという驚くべき事実について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">零点の孤立性</h2>

            <p>
                正則関数が恒等的に零でない場合、その零点（関数の値が <InlineMath math="0" /> となる点）は互いに離れて存在するというのが「零点の孤立性」です。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 1.1-1 (零点の孤立性)</span>}>
                <p>
                    領域 <InlineMath math="D" /> 上の正則関数 <InlineMath math="f" /> が恒等的に零でないならば、<InlineMath math="f" /> の零点は孤立する。すなわち、<InlineMath math="f(a) = 0" /> となる点 <InlineMath math="a \in D" /> に対して、ある半径 <InlineMath math="r > 0" /> が存在して、<InlineMath math="0 < |z - a| < r" /> を満たす任意の <InlineMath math="z" /> について <InlineMath math="f(z) \neq 0" /> となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> が定数関数 <InlineMath math="0" /> でないとする。<InlineMath math="a \in D" /> を <InlineMath math="f(a) = 0" /> なる点とする。<InlineMath math="f" /> は <InlineMath math="a" /> の近傍でテイラー展開可能であり、<InlineMath math="f" /> は恒等的に零ではないので、ある自然数 <InlineMath math="m \geq 1" /> が存在してテイラー級数の最初の非零項が <InlineMath math="m" /> 次の項となる。すなわち、ある <InlineMath math="a" /> の近傍で
                </p>
                <BlockMath math="f(z) = (z-a)^m g(z)" />
                <p>
                    と書ける。ここで <InlineMath math="g" /> は <InlineMath math="a" /> の近傍で正則な関数であり、<InlineMath math="g(a) \neq 0" /> を満たす。
                </p>
                <p>
                    <InlineMath math="g" /> は連続であるため、<InlineMath math="g(a) \neq 0" /> より、<InlineMath math="a" /> を中心とするある十分小さな円板 <InlineMath math="0 < |z - a| < r" /> 内のすべての <InlineMath math="z" /> に対して <InlineMath math="g(z) \neq 0" /> となる。この円板内で <InlineMath math="z \neq a" /> ならば <InlineMath math="(z-a)^m \neq 0" /> であるから、<InlineMath math="f(z) = (z-a)^m g(z) \neq 0" /> が成り立つ。
                </p>
                <p>
                    したがって、<InlineMath math="a" /> の十分小さな近傍には <InlineMath math="a" /> 以外の零点は存在しない。すなわち零点は孤立している。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                抽象的な定理を理解するために、具体例で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-1">
                <p>
                    正則関数 <InlineMath math="f(z) = \sin z" /> の零点について考えます。<InlineMath math="\sin z = 0" /> となるのは、<InlineMath math="z = n\pi" /> (<InlineMath math="n \in \mathbb{Z}" />) のときです。
                </p>
                <p>
                    各零点 <InlineMath math="a = n\pi" /> の近傍においてテーラー展開を考えると、<InlineMath math="\sin'(n\pi) = \cos(n\pi) = (-1)^n \neq 0" /> であるため、これらはすべて1位の零点（先ほどの証明における <InlineMath math="m=1" />）になります。<InlineMath math="(\sin z)^{'} \neq 0" /> より零点は孤立しています。
                </p>
                <p>
                    実数直線上のグラフを思い浮かべても明らかなように、零点と零点の間隔は <InlineMath math="\pi" /> あり、互いに独立して（孤立して）点点と存在しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="実解析関数の零点との違い">
                <p>
                    零点の孤立性は、無限回微分可能な実関数（滑らかな関数）には必ずしも成り立たない、正則関数ならではの特徴的な性質です。
                </p>
                <p>
                    例えば、実関数 <InlineMath math="f(x)" /> として、<InlineMath math="x > 0" /> で <InlineMath math="e^{-1/x^2}" />、<InlineMath math="x \leq 0" /> で <InlineMath math="0" /> となる関数は無限回微分可能です。この場合、<InlineMath math="x \leq 0" /> のすべての点が零点となり、孤立しなくなります。正則関数ではこのような「局所的にだけ <InlineMath math="0" /> になる」という振る舞いは一切許されません。
                </p>
            </ContentBox>

            <p>
                この「零点の孤立性」を用いると、複素解析における最も重要な定理の一つである「一致の定理」を導くことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一致の定理</h2>

            <p>
                一致の定理によれば、2つの正則関数が「十分な数の点」で同じ値を取るならば、全体でも同じ関数であることが保証されます。この「十分な数の点」とは、集積点を持つような点集合のことです。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 1.1-2 (一致の定理)</span>}>
                <p>
                    領域 <InlineMath math="D" /> 上の正則関数 <InlineMath math="f, g" /> が、<InlineMath math="D" /> 内に集積点を持つある部分集合 <InlineMath math="S \subset D" /> 上のすべての点で <InlineMath math="f(z) = g(z)" /> を満たすならば、<InlineMath math="D" /> 全体で恒等的に <InlineMath math="f(z) = g(z)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    新しい関数 <InlineMath math="h(z) = f(z) - g(z)" /> を定義する。<InlineMath math="h" /> は <InlineMath math="D" /> 上で正則であり、仮定より集合 <InlineMath math="S" /> 上で <InlineMath math="h(z) = 0" /> を満たす。<InlineMath math="S" /> は <InlineMath math="D" /> 内に集積点 <InlineMath math="a \in D" /> を持つため、<InlineMath math="a" /> に収束する <InlineMath math="S" /> 内の互いに異なる点列 <InlineMath math="\{z_n\}" /> が取れる。<InlineMath math="h" /> は連続であるから、
                </p>
                <BlockMath math="h(a) = \lim_{n \to \infty} h(z_n) = 0" />
                <p>
                    となり、<InlineMath math="a" /> も <InlineMath math="h" /> の零点である。このとき <InlineMath math="a" /> のいかなる近傍にも <InlineMath math="z_n" /> が存在し、それらは <InlineMath math="h(z_n) = 0" /> を満たすため、零点 <InlineMath math="a" /> は孤立していない。
                </p>
                <p>
                    先ほど証明した Theorem 1.1-1 (零点の孤立性) の対偶をとれば、零点が孤立していない正則関数は恒等的に零であるしかない。厳密には、<InlineMath math="h" /> が恒等的に零で開集合と閉集合の性質を用いることで、領域 <InlineMath math="D" /> が連結であることと合わせて <InlineMath math="D" /> 全体で <InlineMath math="h(z) = 0" /> が導かれる。
                </p>
                <p>
                    したがって、<InlineMath math="D" /> 全体で <InlineMath math="f(z) = g(z)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                一致の定理の強力さは、実数軸上だけで成り立っているような公式が、複素平面全体に即座に拡張できる点にあります。
            </p>

            <ContentBox type="example" title="Example 1.1-2">
                <p>
                    実数 <InlineMath math="x" /> について、三角関数の基本公式 <InlineMath math="\sin^2 x + \cos^2 x = 1" /> が成り立ちます。
                </p>
                <p>
                    ここで、複素関数 <InlineMath math="F(z) = \sin^2 z + \cos^2 z" /> と <InlineMath math="G(z) = 1" /> を考えます。これらはともに複素平面全体（<InlineMath math="\mathbb{C}" />）で正則です。
                </p>
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> は <InlineMath math="\mathbb{C}" /> の部分集合であり、しかも集積点だらけ（連続な直線）です。実軸上のすべての点で <InlineMath math="F(x) = G(x)" /> が成り立っているため、一致の定理より複素平面全体 <InlineMath math="\mathbb{C}" /> のすべての <InlineMath math="z" /> について
                </p>
                <BlockMath math="\sin^2 z + \cos^2 z = 1" />
                <p>
                    が成立することがただちに証明されます。
                </p>
            </ContentBox>

            <p>
                一方で、一致の定理の前提条件である「領域 <InlineMath math="D" /> （連結であること）」が満たされていない場合は、定理は成立しません。
            </p>

            <ContentBox type="example" title="Example 1.1-3">
                <p>
                    定理が成立しない反例として、<InlineMath math="D" /> が2つの交わらない開集合 <InlineMath math="D_1, D_2" /> の和集合（つまり連結でない）である場合を考えます。
                </p>
                <p>
                    例えば、 関数 <InlineMath math="f(z)" /> を <InlineMath math="D_1" /> 上では <InlineMath math="0" />、<InlineMath math="D_2" /> 上では <InlineMath math="1" /> となるように定義し、<InlineMath math="g(z)" /> を <InlineMath math="D_1 \cup D_2" /> 全体で <InlineMath math="0" /> となるように定義します。
                </p>
                <p>
                    <InlineMath math="D_1" /> の中には集積点を持つ部分集合がいくらでもあります。そして <InlineMath math="D_1" /> 上では <InlineMath math="f(z) = g(z) = 0" /> が成り立っていますが、<InlineMath math="D_2" /> 上では <InlineMath math="f(z) = 1 \neq 0 = g(z)" /> です。連結性が欠けていると、情報が伝播していかないため一致の定理は適用できません。
                </p>
            </ContentBox>

            <p>
                以上で見てきたように、正則関数は領域内で非常に密接に結びついた構造を持っています。この結びつきを利用して、関数の定義域を押し広げていく「解析接続」という概念へと進んでいきます。
            </p>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>恒等的に零でない正則関数の零点は、密集することなく互いに離れて存在する（零点の孤立性）。</li>
                    <li>領域上の正則関数は、集積点を持つ部分集合上の値だけで、領域全体の関数形が一意に決定される（一致の定理）。</li>
                    <li>これらの定理は、正則関数の解析性の「硬さ」を示すものであり、実解析には見られない強力な性質である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
