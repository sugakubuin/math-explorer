import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfManifolds() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                滑らかな多様体の厳密な定義を与えたところで、数学の様々な分野に現れる代表的な多様体の例を見ていきましょう。
                球面やトーラスといった幾何学的な図形から、射影空間や行列のなす群といった代数的な対象まで、多様体は非常に広い範囲をカバーします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">球面とトーラス</h2>

            <p>
                最も基本的なコンパクト多様体である球面とトーラスの構造を確認します。
            </p>

            <ContentBox type="example" title="Example 1.4-1">
                <p>
                    <strong><InlineMath math="n" /> 次元球面 <InlineMath math="S^n" /></strong>
                </p>
                <p className="mt-2">
                    <InlineMath math="n" /> 次元球面は <InlineMath math="\mathbb{R}^{n+1}" /> 内の単位球面として定義される：
                    <BlockMath math="S^n = \{ (x^1, \ldots, x^{n+1}) \in \mathbb{R}^{n+1} \mid (x^1)^2 + \cdots + (x^{n+1})^2 = 1 \}" />
                </p>
                <p className="mt-2">
                    立体射影（2つのチャート）でもアトラスを構成できるが、ここでは <InlineMath math="2(n+1)" /> 個の「半球チャート」による構成を見る。
                    各 <InlineMath math="i = 1, \ldots, n+1" /> に対して、上半球と下半球の開集合を定義する：
                </p>
                <BlockMath math="U_i^+ = \{ x \in S^n \mid x^i > 0 \}, \quad U_i^- = \{ x \in S^n \mid x^i < 0 \}" />
                <p className="mt-2">
                    これらの集合から <InlineMath math="\mathbb{R}^n" /> の単位開球 <InlineMath math="B^n" /> への射影 <InlineMath math="\varphi_i^\pm : U_i^\pm \to B^n" /> を、第 <InlineMath math="i" /> 成分を忘れる写像として定義する：
                </p>
                <BlockMath math="\varphi_i^\pm(x^1, \ldots, x^{n+1}) = (x^1, \ldots, x^{i-1}, x^{i+1}, \ldots, x^{n+1})" />
                <p className="mt-2">
                    逆写像は <InlineMath math="x^i = \pm\sqrt{1 - \sum_{j \neq i} (x^j)^2}" /> を補うことで与えられ、平方根の中身が正であるため <InlineMath math="C^\infty" /> 級となる。
                    これらのチャート間の座標変換も <InlineMath math="C^\infty" /> 級となり、<InlineMath math="S^n" /> は <InlineMath math="n" /> 次元多様体となる。
                </p>
                <p className="mt-2">
                    特に <InlineMath math="n=1" /> の円周 <InlineMath math="S^1" /> の場合、角度座標 <InlineMath math="\theta \mapsto (\cos\theta, \sin\theta)" /> を用いると、<InlineMath math="(0, 2\pi)" /> や <InlineMath math="(-\pi, \pi)" /> などの開区間をチャートとして採用することもできる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-2">
                <p>
                    <strong><InlineMath math="n" /> 次元トーラス <InlineMath math="T^n" /></strong>
                </p>
                <p className="mt-2">
                    <InlineMath math="n" /> 次元トーラスは、ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> を整数格子の平行移動で割った商空間として定義される：
                    <BlockMath math="T^n = \mathbb{R}^n / \mathbb{Z}^n" />
                </p>
                <p className="mt-2">
                    商写像を <InlineMath math="\pi : \mathbb{R}^n \to T^n" /> とする。<InlineMath math="\mathbb{R}^n" /> の開集合 <InlineMath math="U" /> として、各辺の長さが <InlineMath math="1" /> 未満の開直方体をとれば、<InlineMath math="\pi|_U : U \to \pi(U)" /> は同相写像となる。
                    この逆写像 <InlineMath math="\varphi = (\pi|_U)^{-1} : \pi(U) \to U \subset \mathbb{R}^n" /> をチャートとすれば、<InlineMath math="T^n" /> を被覆するアトラスが得られる。
                </p>
                <p className="mt-2">
                    座標変換は単なる整数ベクトルの平行移動（<InlineMath math="x \mapsto x + k" />、<InlineMath math="k \in \mathbb{Z}^n" />）となるため、自明に <InlineMath math="C^\infty" /> 級である。
                </p>
                <p className="mt-2">
                    特に <InlineMath math="T^2" /> は、2つの角度座標 <InlineMath math="(\theta_1, \theta_2)" /> を用いて、3次元空間内のドーナツの表面として視覚化される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実射影空間とリー群</h2>

            <p>
                幾何学だけでなく、代数的な構成から自然に現れる多様体も重要です。
            </p>

            <ContentBox type="example" title="Example 1.4-3">
                <p>
                    <strong>実射影空間 <InlineMath math="\mathbb{R}P^n" /></strong>
                </p>
                <p className="mt-2">
                    <InlineMath math="n" /> 次元実射影空間 <InlineMath math="\mathbb{R}P^n" /> は、<InlineMath math="\mathbb{R}^{n+1}" /> の原点を通る直線の全体として定義される。
                    点 <InlineMath math="x = (x^0, \ldots, x^n) \neq 0" /> が張る直線を斉次座標（homogeneous coordinates）を用いて <InlineMath math="[x^0 : \cdots : x^n]" /> と表す。
                </p>
                <p className="mt-2">
                    <InlineMath math="\mathbb{R}P^n" /> 上の <InlineMath math="n+1" /> 個の開集合 <InlineMath math="U_i" /> を、第 <InlineMath math="i" /> 成分が <InlineMath math="0" /> でない直線の集合として定義する：
                    <BlockMath math="U_i = \{ [x^0 : \cdots : x^n] \in \mathbb{R}P^n \mid x^i \neq 0 \}" />
                </p>
                <p className="mt-2">
                    各 <InlineMath math="U_i" /> 上で、すべての成分を <InlineMath math="x^i" /> で割ることで、チャート <InlineMath math="\varphi_i : U_i \to \mathbb{R}^n" /> を次のように定義できる：
                    <BlockMath math="\varphi_i([x^0 : \cdots : x^n]) = \left( \frac{x^0}{x^i}, \ldots, \frac{x^{i-1}}{x^i}, \frac{x^{i+1}}{x^i}, \ldots, \frac{x^n}{x^i} \right)" />
                </p>
                <p className="mt-2">
                    これらのチャート間の座標変換は有理関数となり、分母が <InlineMath math="0" /> にならない領域で定義されているため <InlineMath math="C^\infty" /> 級である。
                    なお、<InlineMath math="\mathbb{R}P^1" /> は円周 <InlineMath math="S^1" /> と微分同相であることが知られている。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-4">
                <p>
                    <strong>一般線形群 <InlineMath math="GL_n(\mathbb{R})" /></strong>
                </p>
                <p className="mt-2">
                    <InlineMath math="n \times n" /> の正則行列（行列式が <InlineMath math="0" /> でない行列）の全体 <InlineMath math="GL_n(\mathbb{R})" /> を考える：
                    <BlockMath math="GL_n(\mathbb{R}) = \{ A \in M_n(\mathbb{R}) \mid \det A \neq 0 \}" />
                </p>
                <p className="mt-2">
                    <InlineMath math="n \times n" /> 行列の空間 <InlineMath math="M_n(\mathbb{R})" /> は、各成分を並べることでユークリッド空間 <InlineMath math="\mathbb{R}^{n^2}" /> と自然に同一視できる。
                    行列式関数 <InlineMath math="\det : \mathbb{R}^{n^2} \to \mathbb{R}" /> は多項式関数であるため連続である。
                </p>
                <p className="mt-2">
                    <InlineMath math="GL_n(\mathbb{R})" /> は、この連続関数による開集合 <InlineMath math="\mathbb{R} \setminus \{0\}" /> の逆像 <InlineMath math="\det^{-1}(\mathbb{R} \setminus \{0\})" /> であるから、<InlineMath math="\mathbb{R}^{n^2}" /> の開集合となる。
                    Example 1.1-2 で見たように、ユークリッド空間の開集合は自然に多様体となるため、<InlineMath math="GL_n(\mathbb{R})" /> は <InlineMath math="n^2" /> 次元の滑らかな多様体である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="リー群（Lie Group）">
                <p>
                    <InlineMath math="GL_n(\mathbb{R})" /> は単なる多様体ではなく、行列の積によって「群」の構造も持っています。
                    さらに、行列の積 <InlineMath math="(A, B) \mapsto AB" /> と逆行列 <InlineMath math="A \mapsto A^{-1}" /> を与える写像は、成分の多項式や有理関数で書けるため、多様体間の写像として <InlineMath math="C^\infty" /> 級になります。
                </p>
                <p className="mt-2">
                    このように「多様体としての滑らかな構造」と「群としての代数構造」が両立している空間を <strong>リー群（Lie group）</strong> と呼びます。リー群は微分幾何学や理論物理学において極めて重要な対象であり、5-12 リー群とリー代数で本格的に扱われます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>球面 <InlineMath math="S^n" /> やトーラス <InlineMath math="T^n" /> は、自然なチャートによって滑らかな多様体となる。</li>
                    <li>実射影空間 <InlineMath math="\mathbb{R}P^n" /> は、斉次座標を用いたチャートにより多様体構造をもつ。</li>
                    <li>一般線形群 <InlineMath math="GL_n(\mathbb{R})" /> は <InlineMath math="\mathbb{R}^{n^2}" /> の開集合として多様体となり、群構造と両立する「リー群」の基本例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
