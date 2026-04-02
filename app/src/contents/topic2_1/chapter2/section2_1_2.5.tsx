import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function CoordinatesAndChangeOfBasis() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                基底を用いると、抽象的なベクトル空間の要素を「単なる数字の列（座標）」として扱えるようになります。<br />
                本節では、基底を通した座標表現と、基底を別の基底に取り替えたときに座標がどう変化するのか（基底変換）について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基底に関する座標
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基底に関する座標</h2>

            <p>
                基底の条件には「生成系」と「線形独立」の2つがありました。この2つが存在することで、ベクトルを一意な成分で表現できます。
            </p>

            <ContentBox type="definition" title="Definition 2.5-1 （座標ベクトル）">
                <p>
                    <InlineMath math="n" /> 次元ベクトル空間 <InlineMath math="V" /> の基底を <InlineMath math="B = \{\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n\}" /> とする（※順番も固定して「順序付けられた基底」と考えます）。<br />
                    任意のベクトル <InlineMath math="\boldsymbol{x} \in V" /> は、この基底の線形結合としてただ1通りに書ける：
                </p>
                <BlockMath math="\boldsymbol{x} = c_1 \boldsymbol{v}_1 + c_2 \boldsymbol{v}_2 + \dots + c_n \boldsymbol{v}_n" />
                <p>
                    このときの係数を縦に並べた列ベクトル
                </p>
                <BlockMath math="[\boldsymbol{x}]_B = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix} \in \mathbb{R}^n" />
                <p>
                    を、基底 <InlineMath math="B" /> に関する <InlineMath math="\boldsymbol{x}" /> の<strong>座標ベクトル（Coordinate vector）</strong>という。
                </p>
            </ContentBox>

            <p className="mt-4">
                私たちが普段「ベクトル <InlineMath math="(3, 1, 2)" />」と呼んでいるものは、暗黙の了解として「標準基底 <InlineMath math="\{\boldsymbol{e}_1, \boldsymbol{e}_2, \boldsymbol{e}_3\}" />」を用いたときの座標ベクトルを指しています。<br />
                抽象的な空間（多項式空間など）であっても、基底を1つ固定すれば、それはまるで我々の慣れ親しんだ <InlineMath math="\mathbb{R}^n" /> （数ベクトルの世界）と全く同じように計算できることになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基底変換行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基底変換行列と座標の変換</h2>

            <p>
                空間 <InlineMath math="V" /> に、古い基底 <InlineMath math="B = \{\boldsymbol{v}_1, \dots, \boldsymbol{v}_n\}" /> と 新しい基底 <InlineMath math="B' = \{\boldsymbol{u}_1, \dots, \boldsymbol{u}_n\}" /> の2つがあるとします。<br />
                同じベクトル <InlineMath math="\boldsymbol{x}" /> を表す場合でも、用いる「モノサシ（基底）」が変われば、その座標表示 <InlineMath math="[\boldsymbol{x}]_B" /> と <InlineMath math="[\boldsymbol{x}]_{B'}" /> は異なります。<br />
                では、この二つの座標の間にはどのような関係があるのでしょうか。
            </p>

            <ContentBox type="definition" title="Definition 2.5-2 （基底変換行列）">
                <p>
                    新しい基底 <InlineMath math="B'" /> の各ベクトル <InlineMath math="\boldsymbol{u}_j" /> を、古い基底 <InlineMath math="B" /> を用いて展開する。
                </p>
                <BlockMath math="\boldsymbol{u}_j = p_{1j}\boldsymbol{v}_1 + p_{2j}\boldsymbol{v}_2 + \dots + p_{nj}\boldsymbol{v}_n" />
                <p>
                    この各成分を列として並べた <InlineMath math="n \times n" /> 正方行列 <InlineMath math="P" /> を、基底 <InlineMath math="B" /> から <InlineMath math="B'" /> への（または <InlineMath math="B" /> に関する <InlineMath math="B'" /> の）<strong>基底変換行列（Change-of-basis matrix / Transition matrix）</strong>という。
                </p>
                <BlockMath math="P = \begin{pmatrix} p_{11} & p_{12} & \dots & p_{1n} \\ p_{21} & p_{22} & \dots & p_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ p_{n1} & p_{n2} & \dots & p_{nn} \end{pmatrix}" />
                <p className="mt-2 text-sm">
                    形式的には <InlineMath math="[\boldsymbol{u}_1 \ \boldsymbol{u}_2 \ \dots \ \boldsymbol{u}_n] = [\boldsymbol{v}_1 \ \boldsymbol{v}_2 \ \dots \ \boldsymbol{v}_n] P" /> と書かれることもある。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.5-1 （基底変換に伴う座標変換の公式）">
                <p>
                    あるベクトル <InlineMath math="\boldsymbol{x} \in V" /> について、古い基底 <InlineMath math="B" /> での座標ベクトル <InlineMath math="[\boldsymbol{x}]_B" /> と、新しい基底 <InlineMath math="B'" /> での座標ベクトル <InlineMath math="[\boldsymbol{x}]_{B'}" /> の間には、基底変換行列 <InlineMath math="P" /> を用いて以下の関係が成り立つ：
                </p>
                <BlockMath math="[\boldsymbol{x}]_B = P [\boldsymbol{x}]_{B'}" />
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-bold">
                    【注意】 基底自体の関係（<InlineMath math="\text{新} = \text{旧} \times P" />）に対して、座標ベクトルの変換は向きが逆（<InlineMath math="\text{旧} = P \times \text{新}" />）になることに注意してください。これを反変性（Contravariance）と呼ぶこともあります。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ベクトル <InlineMath math="\boldsymbol{x}" /> を新しい基底 <InlineMath math="B'" /> で <InlineMath math="\boldsymbol{x} = \sum_{j=1}^n c_j' \boldsymbol{u}_j" /> と表す。<br />
                    ここで、<InlineMath math="\boldsymbol{u}_j" /> を古い基底 <InlineMath math="B" /> の展開式 <InlineMath math="\boldsymbol{u}_j = \sum_{i=1}^n p_{ij} \boldsymbol{v}_i" /> で置き換える。
                </p>
                <BlockMath math="\boldsymbol{x} = \sum_{j=1}^n c_j' \left( \sum_{i=1}^n p_{ij} \boldsymbol{v}_i \right) = \sum_{i=1}^n \left( \sum_{j=1}^n p_{ij} c_j' \right) \boldsymbol{v}_i" />
                <p>
                    この式は <InlineMath math="\boldsymbol{x}" /> を古い基底 <InlineMath math="B" /> で表したものでもある。したがって、<InlineMath math="B" /> の係数（つまり座標 <InlineMath math="c_i" />）は、
                </p>
                <BlockMath math="c_i = \sum_{j=1}^n p_{ij} c_j'" />
                <p>
                    となる。これを行列表示すると、まさに <InlineMath math="[\boldsymbol{x}]_B = P [\boldsymbol{x}]_{B'}" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>基底を固定することで、抽象的なベクトルを「数ベクトル」として成分表示（<strong>座標ベクトル</strong>）できる（Definition 2.5-1）。</li>
                    <li>別の基底に乗り換えるとき、古い基底を用いて新しい基底を表した行列を<strong>基底変換行列 <InlineMath math="P" /></strong> という（Definition 2.5-2）。</li>
                    <li>基底を取り替えたとき、ベクトル自体の実体は変わらないが、私たちの見る「座標表現」は <InlineMath math="[\boldsymbol{x}]_{\text{旧}} = P [\boldsymbol{x}]_{\text{新}}" /> に従って変化する（Theorem 2.5-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
