import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Orientation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでの章で、多様体上の微分形式やその代数的な操作（外微分、引き戻し、内部積）を学んできました。
                本章からは、微分形式を「積分」するという解析的な操作に踏み込みます。
                多様体上で積分を定義するためには、空間全体で「表と裏」や「右と左」といった方向の基準が一貫して定まっている必要があります。この幾何学的な性質が<strong>向き付け（Orientation）</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">向き付けの定義</h2>

            <p className="leading-relaxed">
                ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> における重積分では、変数変換を行う際にヤコビ行列式の「絶対値」を掛けます。
                しかし、微分形式（<InlineMath math="n" />-形式）の座標変換では、ヤコビ行列式がそのまま（絶対値なしで）掛かります。
                したがって、積分値を座標系によらずに定めるためには、すべての座標変換のヤコビ行列式が正となるような特別なアトラス（座標系の集まり）を選べるかどうかが鍵となります。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (向き付け)">
                <p>
                    多様体 <InlineMath math="M" /> が<strong>向き付け可能（orientable）</strong>であるとは、<InlineMath math="M" /> のあるアトラス <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}" /> が存在して、任意の <InlineMath math="U_\alpha \cap U_\beta \neq \emptyset" /> における座標変換
                </p>
                <BlockMath math="\varphi_\beta \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)" />
                <p className="mt-2">
                    のヤコビ行列式が、至る所正（<InlineMath math="\det J > 0" />）となることである。
                </p>
                <p className="mt-2">
                    このようなアトラスを<strong>向き付けられたアトラス（oriented atlas）</strong>と呼び、このアトラスの選択（同値類）を <InlineMath math="M" /> の<strong>向き付け（orientation）</strong>という。
                    向き付けが指定された多様体を、<strong>向き付けられた多様体（oriented manifold）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                私たちが日常的に考える多くの多様体は向き付け可能です。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (球面)">
                <p>
                    <InlineMath math="n" /> 次元球面 <InlineMath math="S^n" />（<InlineMath math="n \geq 1" />）は向き付け可能である。
                </p>
                <p className="mt-2">
                    直感的には、<InlineMath math="\mathbb{R}^{n+1}" /> の中の曲面として見たとき、「外側を向く法線ベクトル」を基準とすることで、各点の接空間に一貫した向き（右手系）を与えることができるためである。
                    厳密には、例えば立体射影による2つのチャート <InlineMath math="(U_N, \varphi_N)" /> と <InlineMath math="(U_S, \varphi_S)" /> を考える。
                    これらの座標変換のヤコビ行列式は負になるが、一方のチャートの座標の1つ（例えば <InlineMath math="x_1" />）の符号を反転させた新しいチャート <InlineMath math="\tilde{\varphi}_S" /> を用いることで、ヤコビ行列式を正に修正でき、向き付けられたアトラスが得られる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一方で、向き付け不可能な多様体も存在します。その代表例がメビウスの帯です。
            </p>

            <ContentBox type="example" title="Example 6.1-2 (メビウスの帯)">
                <p>
                    メビウスの帯は向き付け不可能（non-orientable）である。
                </p>
                <p className="mt-2">
                    帯に沿って「表」の面を塗りながら一周すると、元の場所に戻ってきたときには「裏」の面になってしまう。
                    これは、局所的な座標系（右・上・表）を帯に沿って連続的に移動させると、一周して戻ったときに座標系の向きが反転（左・下・裏）してしまうことを意味する。
                </p>
                <p className="mt-2">
                    数学的には、メビウスの帯を被覆するどんなアトラスをとっても、帯を一周するようなチャートの列のどこかで、必ずヤコビ行列式が負になる座標変換が含まれてしまうことが証明できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">向き付け可能性の判定</h2>

            <p className="leading-relaxed">
                多様体が向き付け可能である場合、いくつの異なる向き付けが存在するのでしょうか。
                連結な多様体であれば、答えは非常にシンプルです。
            </p>

            <ContentBox type="proposition" title="Proposition 6.1-1">
                <p>
                    <InlineMath math="M" /> が連結な多様体であるとする。<InlineMath math="M" /> が向き付け可能であるならば、<InlineMath math="M" /> には丁度2つの異なる向き付けが存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="M" /> は向き付け可能なので、ある向き付けられたアトラス <InlineMath math="\mathcal{A} = \{(U_\alpha, \varphi_\alpha)\}" /> が存在する。
                    このアトラスのすべてのチャートにおいて、最初の座標成分の符号を反転させたアトラス <InlineMath math="\overline{\mathcal{A}} = \{(U_\alpha, \overline{\varphi}_\alpha)\}" />（ただし <InlineMath math="\overline{\varphi}_\alpha = (-x^1, x^2, \ldots, x^n)" />）を考える。
                </p>
                <p className="mt-2">
                    <InlineMath math="\overline{\mathcal{A}}" /> の座標変換のヤコビ行列式は、<InlineMath math="\mathcal{A}" /> のヤコビ行列式に <InlineMath math="(-1) \times (-1) = 1" /> を掛けたものになるため、やはり至る所正である。
                    したがって <InlineMath math="\overline{\mathcal{A}}" /> も向き付けられたアトラスである。
                    しかし、<InlineMath math="\mathcal{A}" /> と <InlineMath math="\overline{\mathcal{A}}" /> の間の座標変換（恒等写像の表現）のヤコビ行列式は <InlineMath math="-1" /> であるため、これらは異なる向き付けを定める。
                </p>
                <p className="mt-2">
                    <InlineMath math="M" /> が連結であるため、ある点で向き（ヤコビ行列式の符号）が一致する2つの向き付けられたアトラスは、すべての点で向きが一致しなければならない（符号が連続的に <InlineMath math="1" /> から <InlineMath math="-1" /> に飛ぶことはないため）。
                    したがって、向き付けはこの2種類（「正の向き」と「負の向き」）しか存在しない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                次元によって向き付け可能性が変わる興味深い例として、実射影空間があります。
            </p>

            <ContentBox type="example" title="Example 6.1-3 (実射影空間)">
                <p>
                    <InlineMath math="n" /> 次元実射影空間 <InlineMath math="\mathbb{R}P^n" /> は、<InlineMath math="n" /> が奇数のときは向き付け可能であり、<InlineMath math="n" /> が偶数のときは向き付け不可能である。
                </p>
                <p className="mt-2">
                    <InlineMath math="\mathbb{R}P^n" /> は、球面 <InlineMath math="S^n" /> の対蹠点（対極にある点）<InlineMath math="x" /> と <InlineMath math="-x" /> を同一視して得られる商空間である。
                    対蹠写像 <InlineMath math="A(x) = -x" /> は <InlineMath math="\mathbb{R}^{n+1}" /> の線形変換として行列式 <InlineMath math="(-1)^{n+1}" /> を持つ。
                    これが <InlineMath math="S^n" /> の向きを保つのは、<InlineMath math="n+1" /> が偶数、すなわち <InlineMath math="n" /> が奇数のときである。
                </p>
                <p className="mt-2">
                    例えば、<InlineMath math="\mathbb{R}P^1" /> は円周 <InlineMath math="S^1" /> と同相であり向き付け可能である。
                    一方、<InlineMath math="\mathbb{R}P^2" />（実射影平面）はメビウスの帯を部分空間として含むため、向き付け不可能である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="積分と向き付け">
                <p>
                    本章の目的である「多様体上の積分」は、向き付け可能な多様体上で、かつ向き付けを一つ固定した上で定義されます。
                    向き付けを反転させると、積分の値は符号が反転します（<InlineMath math="\int_{-M} \omega = -\int_M \omega" />）。
                    メビウスの帯のような向き付け不可能な多様体上では、微分形式の積分を大域的に定義することはできません。
                    （ただし、「密度（density）」と呼ばれる別の幾何学的対象を導入すれば、向き付け不可能な多様体上でも体積や積分を定義することが可能です。）
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多様体が向き付け可能であるとは、すべての座標変換のヤコビ行列式が正となるアトラスが存在することである。</li>
                    <li>球面やトーラスは向き付け可能だが、メビウスの帯や偶数次元の実射影空間は向き付け不可能である。</li>
                    <li>連結で向き付け可能な多様体には、丁度2つの異なる向き付け（正と負）が存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
