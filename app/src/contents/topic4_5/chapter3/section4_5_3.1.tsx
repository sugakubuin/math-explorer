import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TangentSpaceDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体上の微積分を展開するためには、各点において「微分」を考えるための土台となる線形空間が必要です。
                ユークリッド空間における曲面であれば、その点に接する「接平面」を考えることができますが、抽象的な多様体では外の空間を仮定せずに接空間を定義しなければなりません。
                この節では、多様体上の接ベクトルを「曲線の速度ベクトル」と「関数の方向微分（導分）」という2つの異なる視点から定式化し、それらが本質的に同じ概念であることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲線による接ベクトル</h2>

            <p className="leading-relaxed">
                まずは直感的にわかりやすい、多様体上の曲線を用いた接ベクトルの定義から始めましょう。
                多様体 <InlineMath math="M" /> 上の点 <InlineMath math="p" /> を通る曲線が与えられたとき、その曲線の「<InlineMath math="p" /> における速度」を接ベクトルとみなしたいわけですが、多様体には自明な座標系がないため、チャート（局所座標）を介して速度を比較します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (曲線による接ベクトル)">
                <p>
                    多様体 <InlineMath math="M" /> の点 <InlineMath math="p" /> を通る滑らかな曲線とは、開区間 <InlineMath math="(-\varepsilon, \varepsilon)" /> から <InlineMath math="M" /> への滑らかな写像 <InlineMath math="\gamma" /> で、<InlineMath math="\gamma(0) = p" /> を満たすもののことである。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="p" /> を通る2つの曲線 <InlineMath math="\gamma_1, \gamma_2" /> が、<InlineMath math="p" /> のあるチャート <InlineMath math="(U, \varphi)" /> において同じ速度ベクトルを持つとき、すなわち
                </p>
                <BlockMath math="\left. \frac{d}{dt} (\varphi \circ \gamma_1)(t) \right|_{t=0} = \left. \frac{d}{dt} (\varphi \circ \gamma_2)(t) \right|_{t=0}" />
                <p className="mt-2">
                    が成り立つとき、<InlineMath math="\gamma_1" /> と <InlineMath math="\gamma_2" /> は点 <InlineMath math="p" /> において<strong>同値（equivalent）</strong>であるといい、<InlineMath math="\gamma_1 \sim \gamma_2" /> と表す。
                </p>
                <p className="mt-2">
                    この同値関係による同値類 <InlineMath math="[\gamma]" /> を、点 <InlineMath math="p" /> における<strong>接ベクトル（tangent vector）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義がチャートの選び方に依存しないことは、座標変換の連鎖律から直ちに従います。
                具体的な例で、曲線の同値関係を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-1">
                <p>
                    <InlineMath math="M = \mathbb{R}^2" /> とし、原点 <InlineMath math="p = (0,0)" /> を通る以下の3つの曲線を考える。
                </p>
                <BlockMath math="\gamma_1(t) = (t, t^2), \quad \gamma_2(t) = (t, 0), \quad \gamma_3(t) = (0, t)" />
                <p className="mt-2">
                    これらの <InlineMath math="t=0" /> における速度ベクトルを計算すると、
                </p>
                <BlockMath math="\gamma_1'(0) = (1, 0), \quad \gamma_2'(0) = (1, 0), \quad \gamma_3'(0) = (0, 1)" />
                <p className="mt-2">
                    となる。したがって、<InlineMath math="\gamma_1'(0) = \gamma_2'(0)" /> であるから <InlineMath math="\gamma_1 \sim \gamma_2" /> であり、これらは同じ接ベクトル <InlineMath math="[\gamma_1] = [\gamma_2]" /> を定める。
                    一方、<InlineMath math="\gamma_3'(0)" /> は異なるため、<InlineMath math="\gamma_3" /> は異なる接ベクトルを定める。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                曲線による定義は幾何学的に自然ですが、接ベクトルの集合がベクトル空間をなすこと（和やスカラー倍の定義）を示すには少し手間がかかります。そこで、もう一つの代数的な定義を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">導分による接ベクトル</h2>

            <p className="leading-relaxed">
                ユークリッド空間において、ベクトル <InlineMath math="v" /> が与えられると、関数 <InlineMath math="f" /> の <InlineMath math="v" /> 方向への方向微分を考えることができます。
                方向微分は線形であり、積の微分法則（ライプニッツ則）を満たします。この性質を逆に利用して、接ベクトルを「関数に作用する微分作用素」として定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-2 (導分)">
                <p>
                    多様体 <InlineMath math="M" /> 上の滑らかな関数の全体を <InlineMath math="C^\infty(M)" /> とする。
                    点 <InlineMath math="p \in M" /> における<strong>導分（derivation）</strong>とは、線形写像 <InlineMath math="v : C^\infty(M) \to \mathbb{R}" /> であって、任意の <InlineMath math="f, g \in C^\infty(M)" /> に対して以下の<strong>ライプニッツ則（Leibniz rule）</strong>を満たすもののことである。
                </p>
                <BlockMath math="v(fg) = f(p)v(g) + g(p)v(f)" />
            </ContentBox>

            <p className="leading-relaxed">
                導分の全体は、自然な和とスカラー倍により実ベクトル空間をなします。
                実は、先ほど定義した「曲線の同値類」とこの「導分」は、1対1に対応することが知られています。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1">
                <p>
                    曲線による接ベクトルの定義と導分による接ベクトルの定義は同値である。
                    すなわち、点 <InlineMath math="p" /> における導分の全体 <InlineMath math="T_pM" /> は <InlineMath math="n" /> 次元ベクトル空間をなし、これを <InlineMath math="M" /> の <InlineMath math="p" /> における<strong>接空間（tangent space）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    曲線 <InlineMath math="\gamma" /> の同値類 <InlineMath math="[\gamma]" /> が与えられたとき、関数 <InlineMath math="f \in C^\infty(M)" /> への作用を
                </p>
                <BlockMath math="v_{[\gamma]}(f) = \left. \frac{d}{dt} f(\gamma(t)) \right|_{t=0}" />
                <p className="mt-2">
                    で定めると、これは微分の性質から線形性とライプニッツ則を満たすため、導分となる。
                </p>
                <p className="mt-2">
                    逆に、任意の導分 <InlineMath math="v" /> が与えられたとする。チャート <InlineMath math="(U, \varphi)" /> の局所座標を <InlineMath math="(x^1, \ldots, x^n)" /> とすると、テイラーの定理から、<InlineMath math="p" /> の近傍で関数 <InlineMath math="f" /> は
                </p>
                <BlockMath math="f(x) = f(p) + \sum_{i=1}^n \frac{\partial f}{\partial x^i}(p) (x^i - p^i) + \sum_{i,j} h_{ij}(x) (x^i - p^i)(x^j - p^j)" />
                <p className="mt-2">
                    と展開できる（<InlineMath math="h_{ij}" /> は滑らか）。導分 <InlineMath math="v" /> を両辺に作用させる。定数関数の導分は <InlineMath math="0" /> であり、ライプニッツ則から <InlineMath math="(x^i - p^i)(x^j - p^j)" /> の項は <InlineMath math="p" /> で評価すると <InlineMath math="0" /> になるため、
                </p>
                <BlockMath math="v(f) = \sum_{i=1}^n \frac{\partial f}{\partial x^i}(p) v(x^i - p^i) = \sum_{i=1}^n v(x^i) \left. \frac{\partial f}{\partial x^i} \right|_p" />
                <p className="mt-2">
                    となる。ここで <InlineMath math="v^i = v(x^i) \in \mathbb{R}" /> とおけば、<InlineMath math="v" /> は偏微分作用素 <InlineMath math="\partial/\partial x^i|_p" /> の線形結合
                </p>
                <BlockMath math="v = \sum_{i=1}^n v^i \left. \frac{\partial}{\partial x^i} \right|_p" />
                <p className="mt-2">
                    として一意に表される。したがって、導分の空間は <InlineMath math="n" /> 次元ベクトル空間であり、基底 <InlineMath math="\{\partial/\partial x^1|_p, \ldots, \partial/\partial x^n|_p\}" /> を持つ。
                    この導分 <InlineMath math="v" /> は、局所座標で <InlineMath math="\gamma(t) = (p^1 + tv^1, \ldots, p^n + tv^n)" /> と表される曲線が定める導分に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                証明の中で現れた偏微分作用素 <InlineMath math="\partial/\partial x^i|_p" /> は、局所座標系が定める接空間の自然な基底となります。
                これが座標関数にどのように作用するかを確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-2">
                <p>
                    チャート <InlineMath math="(U, x^1, \ldots, x^n)" /> における接空間の基底 <InlineMath math="\{\partial/\partial x^1|_p, \ldots, \partial/\partial x^n|_p\}" /> の、座標関数 <InlineMath math="x^j" /> への作用を考える。
                </p>
                <p className="mt-2">
                    偏微分の定義から明らかに、
                </p>
                <BlockMath math="\left. \frac{\partial}{\partial x^i} \right|_p (x^j) = \delta_i^j = \begin{cases} 1 & (i = j) \\ 0 & (i \neq j) \end{cases}" />
                <p className="mt-2">
                    が成り立つ。これは、<InlineMath math="\partial/\partial x^i|_p" /> が「<InlineMath math="x^i" /> 座標の方向への速度が <InlineMath math="1" /> で、他の座標方向への速度が <InlineMath math="0" /> であるような曲線の速度ベクトル」に対応していることを示している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="接空間の幾何学的意味">
                <p>
                    多様体論における接空間 <InlineMath math="T_pM" /> は、多様体 <InlineMath math="M" /> を点 <InlineMath math="p" /> の周りで「無限小的に線形近似」した空間です。
                    これは、3-1 ベクトル解析 で学んだ曲面の「接平面」の概念を、周囲のユークリッド空間（外の空間）に頼らずに、多様体自身の内部の言葉（曲線や関数）だけで抽象化したものです。
                    この抽象化により、宇宙空間のような「外側」を持たない空間に対しても、微積分を厳密に展開することが可能になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多様体上の接ベクトルは、点を通る曲線の同値類（速度ベクトル）として幾何学的に定義できる。</li>
                    <li>同時に、関数に対する方向微分としての性質を抽出した「導分（ライプニッツ則を満たす線形作用素）」としても定義できる。</li>
                    <li>両者の定義は同値であり、<InlineMath math="n" /> 次元多様体の各点 <InlineMath math="p" /> における接空間 <InlineMath math="T_pM" /> は <InlineMath math="n" /> 次元ベクトル空間となる。</li>
                    <li>局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> を選ぶと、<InlineMath math="\{\partial/\partial x^1|_p, \ldots, \partial/\partial x^n|_p\}" /> が <InlineMath math="T_pM" /> の基底となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
