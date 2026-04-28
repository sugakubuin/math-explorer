import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SmoothMapsAndDiffeomorphisms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                多様体上の「滑らかな構造」を定義したことで、異なる多様体の間を行き来する「滑らかな写像」を議論できるようになりました。
                本節では、多様体間の写像の滑らかさをチャートを用いて定義し、多様体論における「同型」の概念である「微分同相」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">滑らかな写像の定義</h2>

            <p>
                多様体 <InlineMath math="M" /> から多様体 <InlineMath math="N" /> への写像が滑らかであるとは、局所座標（チャート）を通して見たときに、それがユークリッド空間の開集合間の滑らかな写像になっていることとして定義されます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (滑らかな写像)">
                <p>
                    <InlineMath math="M, N" /> をそれぞれ <InlineMath math="m" /> 次元、<InlineMath math="n" /> 次元の滑らかな多様体とする。
                    連続写像 <InlineMath math="f : M \to N" /> が <b>滑らか（smooth）</b> または <b><InlineMath math="C^\infty" /> 級</b> であるとは、任意の点 <InlineMath math="p \in M" /> に対して、<InlineMath math="p" /> の周りのチャート <InlineMath math="(U, \varphi)" /> と <InlineMath math="f(p)" /> の周りのチャート <InlineMath math="(V, \psi)" /> （ただし <InlineMath math="f(U) \subset V" />）が存在して、合成写像
                </p>
                <BlockMath math="\psi \circ f \circ \varphi^{-1} : \varphi(U) \to \psi(V)" />
                <p className="mt-2">
                    が <InlineMath math="\mathbb{R}^m" /> の開集合から <InlineMath math="\mathbb{R}^n" /> の開集合への <InlineMath math="C^\infty" /> 級写像となることをいう。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ この <InlineMath math="\psi \circ f \circ \varphi^{-1}" /> を写像 <InlineMath math="f" /> の<b>座標表示（coordinate representation）</b>と呼ぶ。極大アトラスの性質から、あるチャートで滑らかならば、整合する任意のチャートでも滑らかになる。）
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-1">
                <p>
                    <strong>包含写像の滑らかさ</strong>
                </p>
                <p className="mt-2">
                    球面 <InlineMath math="S^n" /> からユークリッド空間 <InlineMath math="\mathbb{R}^{n+1}" /> への包含写像 <InlineMath math="\iota : S^n \hookrightarrow \mathbb{R}^{n+1}" /> （<InlineMath math="\iota(x) = x" />）が滑らかであることを確認する。
                </p>
                <p className="mt-2">
                    <InlineMath math="S^n" /> のチャートとして、上半球 <InlineMath math="U_i^+ = \{ x \in S^n \mid x^i > 0 \}" /> から <InlineMath math="\mathbb{R}^n" /> の単位開球への射影 <InlineMath math="\varphi_i^+(x) = (x^1, \dots, \widehat{x^i}, \dots, x^{n+1})" /> をとる。<InlineMath math="\mathbb{R}^{n+1}" /> のチャートは全体を恒等写像 <InlineMath math="\mathrm{id}" /> でとる。
                </p>
                <p className="mt-2">
                    このとき、座標表示は <InlineMath math="\mathrm{id} \circ \iota \circ (\varphi_i^+)^{-1} : \mathbb{R}^n \to \mathbb{R}^{n+1}" /> であり、具体的には
                </p>
                <BlockMath math="(u^1, \dots, u^n) \mapsto \left( u^1, \dots, u^{i-1}, \sqrt{1 - \sum (u^j)^2}, u^i, \dots, u^n \right)" />
                <p className="mt-2">
                    となる。平方根の中身は正であるため、この写像は <InlineMath math="\mathbb{R}^n" /> の開球上で <InlineMath math="C^\infty" /> 級である。よって包含写像 <InlineMath math="\iota" /> は滑らかである。
                </p>
            </ContentBox>

            <p>
                滑らかな写像の合成もまた滑らかになります。これは微積分学における合成関数の微分法則（連鎖律）の直接的な帰結です。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1">
                <p>
                    <InlineMath math="M, N, P" /> を滑らかな多様体とする。写像 <InlineMath math="f : M \to N" /> と <InlineMath math="g : N \to P" /> がともに滑らかであるならば、その合成 <InlineMath math="g \circ f : M \to P" /> も滑らかである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の点 <InlineMath math="x \in M" /> をとる。<InlineMath math="y = f(x) \in N" />、<InlineMath math="z = g(y) \in P" /> とする。
                    それぞれの点の周りにチャート <InlineMath math="(U, \varphi)" />、<InlineMath math="(V, \psi)" />、<InlineMath math="(W, \theta)" /> を、<InlineMath math="f(U) \subset V" /> かつ <InlineMath math="g(V) \subset W" /> となるようにとる。
                </p>
                <p className="mt-2">
                    合成写像 <InlineMath math="g \circ f" /> の座標表示は
                </p>
                <BlockMath math="\theta \circ (g \circ f) \circ \varphi^{-1} = (\theta \circ g \circ \psi^{-1}) \circ (\psi \circ f \circ \varphi^{-1})" />
                <p className="mt-2">
                    と分解できる。仮定より、右辺の2つの写像はそれぞれユークリッド空間の開集合間の <InlineMath math="C^\infty" /> 級写像である。
                    ユークリッド空間における <InlineMath math="C^\infty" /> 級写像の合成は <InlineMath math="C^\infty" /> 級であるため、左辺も <InlineMath math="C^\infty" /> 級となる。
                    したがって <InlineMath math="g \circ f" /> は滑らかである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分同相</h2>

            <p>
                位相空間における「同相写像（連続かつ逆も連続な全単射）」に相当する、多様体における同型概念を導入します。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (微分同相)">
                <p>
                    2つの滑らかな多様体 <InlineMath math="M, N" /> の間の写像 <InlineMath math="f : M \to N" /> が <b>微分同相写像（diffeomorphism）</b> であるとは、以下の3条件を満たすことをいう。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><InlineMath math="f" /> は全単射（bijection）である。</li>
                    <li><InlineMath math="f" /> は滑らかである。</li>
                    <li>逆写像 <InlineMath math="f^{-1} : N \to M" /> も滑らかである。</li>
                </ol>
                <p className="mt-2">
                    微分同相写像が存在するとき、<InlineMath math="M" /> と <InlineMath math="N" /> は <b>微分同相（diffeomorphic）</b> であるといい、<InlineMath math="M \cong N" /> と表す。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-2">
                <p>
                    <strong>立体射影による微分同相</strong>
                </p>
                <p className="mt-2">
                    球面から北極を除いた空間 <InlineMath math="S^n \setminus \{N\}" /> とユークリッド空間 <InlineMath math="\mathbb{R}^n" /> は微分同相である。
                </p>
                <p className="mt-2">
                    実際、立体射影 <InlineMath math="\varphi_N : S^n \setminus \{N\} \to \mathbb{R}^n" /> は全単射である。
                    <InlineMath math="S^n \setminus \{N\}" /> のチャートとして <InlineMath math="\varphi_N" /> 自身を、<InlineMath math="\mathbb{R}^n" /> のチャートとして恒等写像をとれば、その座標表示は <InlineMath math="\mathrm{id} \circ \varphi_N \circ \varphi_N^{-1} = \mathrm{id}" /> となり、これは明らかに <InlineMath math="C^\infty" /> 級である。
                    逆写像 <InlineMath math="\varphi_N^{-1}" /> の座標表示も同様に恒等写像となるため滑らかである。
                </p>
            </ContentBox>

            <p>
                「滑らかな全単射」であっても、逆写像が滑らかになるとは限らないことに注意が必要です。
            </p>

            <ContentBox type="example" title="Example 2.1-3">
                <p>
                    <strong>滑らかな全単射だが微分同相ではない例</strong>
                </p>
                <p className="mt-2">
                    写像 <InlineMath math="f : \mathbb{R} \to \mathbb{R}" /> を <InlineMath math="f(x) = x^3" /> で定義する。
                </p>
                <p className="mt-2">
                    <InlineMath math="f" /> は多項式であるから <InlineMath math="C^\infty" /> 級であり、狭義単調増加であるため全単射である。
                    しかし、その逆写像 <InlineMath math="f^{-1}(y) = y^{1/3}" /> は、原点 <InlineMath math="y = 0" /> において微分不可能（導関数が無限大に発散する）である。
                </p>
                <p className="mt-2">
                    したがって、<InlineMath math="f" /> は滑らかな全単射であるが、微分同相写像ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="多様体論における同値関係">
                <p>
                    微分同相は「滑らかな多様体としての構造が完全に同じである」ことを意味します。多様体論において、2つの多様体が微分同相であれば、それらは「同じ多様体」とみなされます。
                </p>
                <p className="mt-2">
                    位相空間論において「同相（homeomorphic）」な空間を同一視したように、微分幾何学や微分トポロジーでは「微分同相（diffeomorphic）」な多様体を同一視して分類を行います。
                    驚くべきことに、次元が4以上のいくつかの場合には、「同相だが微分同相ではない（位相的には同じだが、滑らかな構造が異なる）」多様体（エキゾチック球面など）が存在することが知られています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多様体間の写像が滑らかであるとは、チャートによる座標表示がユークリッド空間の開集合間で <InlineMath math="C^\infty" /> 級になることである。</li>
                    <li>滑らかな写像の合成は常に滑らかである。</li>
                    <li>微分同相写像とは、滑らかな全単射であり、かつ逆写像も滑らかになる写像のことである。これが多様体の「同型」を与える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
