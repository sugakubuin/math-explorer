import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HolomorphicMapsAndRiemannHurwitz() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                リーマン面という空間自体を理解するためには、空間同士を写し合う「正則写像」を調べることが極めて有効です。前節で導入したトポロジーの道具（オイラー標数）と、複素解析の道具（正則写像の局所的な振る舞い）を結びつける、リーマン面論における白眉の一つが「リーマン-ハーヴィッツの公式」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則写像と分枝</h2>

            <p>
                まずはリーマン面間の正則写像を定義し、その局所的な形がいかにシンプルであるかを確認します。
            </p>

            <ContentBox type="definition" title="Definition 3.5-1 (リーマン面の間の正則写像)">
                <p>
                    <InlineMath math="S" /> と <InlineMath math="T" /> をリーマン面とし、連続写像 <InlineMath math="f : S \to T" /> を考える。<InlineMath math="f" /> が点 <InlineMath math="p \in S" /> において<b>正則である</b>とは、<InlineMath math="p" /> を含むチャート <InlineMath math="(U, \varphi)" /> と、<InlineMath math="f(p)" /> を含むチャート <InlineMath math="(V, \psi)" /> を用いて表した合成写像
                </p>
                <BlockMath math="\psi \circ f \circ \varphi^{-1} : \varphi(U) \to \psi(V)" />
                <p>
                    が、複素平面における通常の正則写像になることをいう。
                </p>
            </ContentBox>

            <p>
                正則関数は、テイラー展開により局所的には原点近傍での巾乗関数 <InlineMath math="z \mapsto z^n" /> のように振る舞います。この「ベキ乗の次数」を幾何学的に表現したものが分枝次数です。
            </p>

            <ContentBox type="definition" title="Definition 3.5-2 (分枝点と分枝次数)">
                <p>
                    定数でない正則写像 <InlineMath math="f : S \to T" /> に対し、点 <InlineMath math="p \in S" /> において適切な局所座標を選ぶと、<InlineMath math="f" /> の局所的な表現を
                </p>
                <BlockMath math="w = z^{e_p}" />
                <p>
                    の形に変換できる。この自然数 <InlineMath math="e_p \ge 1" /> を点 <InlineMath math="p" /> における<b>分枝次数（ramification index）</b>と呼ぶ。
                </p>
                <p>
                    <InlineMath math="e_p = 1" /> のとき、写像は局所的に1対1（単射）で同相的である。<br />
                    <InlineMath math="e_p \ge 2" /> となる点 <InlineMath math="p" /> を<b>分枝点（ramification point / branch point）</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.5-1">
                <p>
                    写像 <InlineMath math="f : \hat{\mathbb{C}} \to \hat{\mathbb{C}}" /> を <InlineMath math="f(z) = z^n" /> （<InlineMath math="n \ge 2" />）と定義します。
                </p>
                <p>
                    原点 <InlineMath math="z = 0" /> ではすでに <InlineMath math="w = z^n" /> の形なので、分枝次数は <InlineMath math="e_0 = n" /> であり、分枝点です。<br />
                    一方、<InlineMath math="z \neq 0, \infty" /> の有限の点では、微分 <InlineMath math="f'(z) = n z^{n-1} \neq 0" /> であるため、逆関数定理より局所的には1対1であり、分枝次数は <InlineMath math="e_z = 1" /> です。
                </p>
                <p>
                    また無限遠点 <InlineMath math="z = \infty" /> を調べます。チャート写像として <InlineMath math="\xi = 1/z" />, <InlineMath math="\eta = 1/w" /> を使うと、<InlineMath math="w = z^n" /> は <InlineMath math="1/\eta = (1/\xi)^n" /> すなわち <InlineMath math="\eta = \xi^n" /> となります。よって無限遠点も分枝次数 <InlineMath math="n" /> の分枝点です。<br />
                    結局、この写像の分枝点は <InlineMath math="0" /> と <InlineMath math="\infty" /> の2点だけです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン-ハーヴィッツの公式</h2>

            <p>
                写像 <InlineMath math="f" /> が与えられたとき、ほとんどの点では <InlineMath math="1" /> 対 <InlineMath math="n" />（シーツが <InlineMath math="n" /> 枚）の関係になりますが、分枝点においてシーツ同士がくっついてしまうため、枚数が減ります。この「分枝によるシーツの貼り合わせの減少分」と、曲面全体の「トポロジー（オイラー標数・種数）」を関係づける美しい等式が成り立ちます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 3.5-1 (リーマン-ハーヴィッツの公式)</span>}>
                <p>
                    <InlineMath math="f : S \to T" /> をコンパクトリーマン面間の <InlineMath math="n" /> 次の正則写像（すなわち大部分の点で <InlineMath math="n" /> 対 <InlineMath math="1" /> の被覆）とする。<InlineMath math="S, T" /> の種数をそれぞれ <InlineMath math="g_S, g_T" /> とする。このとき、以下の関係が成り立つ：
                </p>
                <BlockMath math="2g_S - 2 = n(2g_T - 2) + \sum_{p \in S} (e_p - 1)" />
                <p>
                    ここで <InlineMath math="e_p - 1" /> は分枝指数の減少分であり、和は（有限個の）すべての分枝点にわたって取る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    オイラー標数 <InlineMath math="\chi = V - E + F" /> を用いるトポロジカルな証明の概略を示す。底空間 <InlineMath math="T" /> を、分枝点の像をすべて頂点として含むように三角形分割する。このとき <InlineMath math="T" /> の三角形分割は <InlineMath math="V_T" /> 頂点、<InlineMath math="E_T" /> 辺、<InlineMath math="F_T" /> 面を持ち、オイラー標数は <InlineMath math="\chi(T) = 2 - 2g_T = V_T - E_T + F_T" /> である。
                </p>
                <p>
                    この分割を写像 <InlineMath math="f" /> による逆像を通じて <InlineMath math="S" /> 上に持ち上げる。<InlineMath math="f" /> は <InlineMath math="n" /> 次の写像であるため、面と辺はどの分枝点も含まないため素直に <InlineMath math="n" /> 枚に持ち上がる。<InlineMath math="F_S = n F_T" />、<InlineMath math="E_S = n E_T" />。
                </p>
                <p>
                    しかし、頂点に関しては少し事情が異なる。「普通の点」であれば上に <InlineMath math="n" /> 個持ち上がるが、分枝点 <InlineMath math="p" /> では <InlineMath math="e_p" /> 枚のシートが1つの点に集約されてしまうため、頂点の数は通常より <InlineMath math="e_p - 1" /> 個だけ少なくなる。すべての頂点を数え上げると、<InlineMath math="V_S = n V_T - \sum_{p} (e_p - 1)" /> となる。
                </p>
                <p>
                    <InlineMath math="S" /> のオイラー標数 <InlineMath math="\chi(S)" /> を計算すると、
                </p>
                <BlockMath math="\begin{align*}
                    \chi(S) &= V_S - E_S + F_S \\
                    &= (n V_T - \sum (e_p - 1)) - n E_T + n F_T \\
                    &= n(V_T - E_T + F_T) - \sum(e_p - 1) \\
                    &= n \chi(T) - \sum(e_p - 1)
                \end{align*}" />
                <p>
                    <InlineMath math="\chi(S) = 2 - 2g_S" />、<InlineMath math="\chi(T) = 2 - 2g_T" /> を代入し、両辺にマイナスを掛けるとリーマン-ハーヴィッツの公式
                </p>
                <BlockMath math="2g_S - 2 = n(2g_T - 2) + \sum (e_p - 1)" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.5-2 (トーラスの種数判定)">
                <p>
                    曲線 <InlineMath math="y^2 = (z - a_1)(z - a_2)(z - a_3)(z - a_4)" /> （<InlineMath math="a_i" /> は相異なる4点）で定義されるリーマン面 <InlineMath math="S" /> の種数 <InlineMath math="g_S" /> を判別します。
                </p>
                <p>
                    射影写像 <InlineMath math="f(y, z) = z" /> は、<InlineMath math="S" /> から底空間となるリーマン球面 <InlineMath math="T = \hat{\mathbb{C}}" /> への写像とみなせます。
                    各 <InlineMath math="z" /> に対して一般には <InlineMath math="y = \pm \sqrt{\dots}" /> の 2つの解があるため、これは <InlineMath math="n = 2" /> 次の写像（2枚被覆）です。
                </p>
                <p>
                    分枝点は根号の中身が <InlineMath math="0" /> になる <InlineMath math="z = a_1, a_2, a_3, a_4" /> の4点です。これらでの分枝指数はいずれも <InlineMath math="e_p = 2" /> なので、<InlineMath math="e_p - 1 = 1" /> です。<br />
                    また底空間リーマン球面 <InlineMath math="T" /> の種数は <InlineMath math="g_T = 0" /> です。公式に代入します。
                </p>
                <BlockMath math="2g_S - 2 = 2 \times (2(0) - 2) + 4 \times (2 - 1)" />
                <BlockMath math="2g_S - 2 = -4 + 4 = 0" />
                <p>
                    よって <InlineMath math="2g_S = 2 \implies g_S = 1" />。この曲面が確かに種数 1 のトーラス（楕円曲線）であることが鮮やかに証明されました。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.5-3 (一般の超楕円曲線)">
                <p>
                    さらに一般化して、<InlineMath math="y^2 = P_{2g+2}(z)" /> （相異なる <InlineMath math="2g+2" /> 個の根を持つ多項式）の場合を考えます。
                </p>
                <p>
                    分枝点は <InlineMath math="2g+2" /> 個あり、各点で <InlineMath math="e_p - 1 = 1" /> なので和は <InlineMath math="2g+2" /> です。公式に入れると
                </p>
                <BlockMath math="2g_S - 2 = 2 \times (-2) + (2g_S + 2) = 2g_S - 2" />
                <p>
                    （※注：未知の種数を <InlineMath math="X" /> として解くと、<InlineMath math="2X - 2 = -4 + (2g+2) = 2g - 2 \implies X = g" /> ）。つまり、この方程式は本当に種数 <InlineMath math="g" /> のリーマン面を定めることが分かります。
                </p>
            </ContentBox>

            <p>
                リーマン-ハーヴィッツの公式は、局所的な解析的データ（分枝の数）と大域的な位相的データ（種数）を繋ぐという点で、後の第8章で学ぶ強力な「リーマン-ロッホの定理」の特例・予告編とも言える位置づけにあります。
            </p>

            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則写像の局所的な振る舞いは巾乗 <InlineMath math="w = z^e" /> で表され、この <InlineMath math="e \ge 2" /> の点が分枝点である。</li>
                    <li>リーマン-ハーヴィッツの公式は、被覆面の種数と底空間の種数、および分枝点の減少分を関係づける定理である。</li>
                    <li>この公式を用いることで、ある代数方程式で定義されたリーマン面のトポロジー（種数）を代数的に簡単に特定することができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
