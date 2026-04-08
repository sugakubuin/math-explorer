import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SpectralMeasures() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                行列 <InlineMath math="A" /> に対して <InlineMath math="A^2" /> や <InlineMath math="A^3" /> を計算することは簡単ですが、「行列の平方根 <InlineMath math="\sqrt{A}" />」や「行列の指数関数 <InlineMath math="e^A" />」はどう定義するべきでしょうか。有限次元においては対角化を通じて各固有値に関数を適用することでこれを実現します。本節では、この仕組みを無限次元空間に拡張する「関数計算」とその基盤となる「スペクトル測度」の概念を開拓します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続関数計算</h2>

            <p>
                自己共役作用素に対しては、そのスペクトル（実数の閉区間に収まる）上で定義された任意の連続関数を、作用素自身に「代入」することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.3-1 (連続関数計算)">
                <p>
                    <InlineMath math="H" /> をヒルベルト空間、<InlineMath math="T" /> を有界自己共役作用素とし、そのスペクトルを <InlineMath math="\sigma(T) \subset \mathbb{R}" /> とする。<br />
                    このとき、<InlineMath math="\sigma(T)" /> 上で定義された任意の複素数値連続関数 <InlineMath math="f : \sigma(T) \to \mathbb{C}" />（すなわち <InlineMath math="f \in C(\sigma(T))" />）に対して、有界正規作用素 <InlineMath math="f(T) \in B(H)" /> を対応させる対応規則が一意に存在し、以下の性質を満たす。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="(fg)(T) = f(T)g(T)" /> （関数の積が作用素の合成になる）</li>
                    <li><InlineMath math="(\alpha f + \beta g)(T) = \alpha f(T) + \beta g(T)" /> （線形性）</li>
                    <li><InlineMath math="\bar{f}(T) = (f(T))^*" /> （複素共役が随伴作用素に対応する）</li>
                    <li><InlineMath math="\|f(T)\| = \sup_{\lambda \in \sigma(T)} |f(\lambda)|" /> （等長同型性）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    構成の概略：<br />
                    1. まず <InlineMath math="f(\lambda) = a_0 + a_1 \lambda + \dots + a_n \lambda^n" /> のような多項式に対しては、作用素の自然な累乗 <InlineMath math="f(T) = a_0 I + a_1 T + \dots + a_n T^n" /> として定義する。この段階で、代数的な性質はすべて満たす。<br />
                    2. ストーン・ワイエルシュトラスの近似定理（2-3 実解析）により、コンパクト集合 <InlineMath math="\sigma(T)" /> 上の任意の連続関数 <InlineMath math="f" /> は多項式列 <InlineMath math="p_n(\lambda)" /> で一様に近似できる（<InlineMath math="\sup |p_n(\lambda) - f(\lambda)| \to 0" />）。<br />
                    3. 等長性 <InlineMath math="\|p(T)\| = \sup |p(\lambda)|" /> が多項式に対して成立することを利用すると、<InlineMath math="\{p_n(T)\}" /> は作用素空間 <InlineMath math="B(H)" /> におけるコーシー列となる。<InlineMath math="B(H)" /> は完備であるため、その極限が存在する。この極限を <InlineMath math="f(T)" /> と定義する。<br />
                    極限の性質によって、1〜4の等式がすべての連続関数に対して正当化される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理により、作用素に対するこれまで不可能だった演算が自由自在に行えるようになります。
            </p>

            <ContentBox type="example" title="Example 10.3-1">
                <p>
                    <InlineMath math="T" /> を、スペクトルが非負（<InlineMath math="\sigma(T) \subset [0, \infty)" />）であるような自己共役作用素とします（このような作用素を<b>正作用素</b>とよびます）。<br />
                    関数として <InlineMath math="f(\lambda) = \sqrt{\lambda}" /> という無理関数を考えます。これは <InlineMath math="[0, \infty)" /> 上で連続な関数です。<br />
                    関数計算の定理により、この関数から新しい作用素 <InlineMath math="\sqrt{T}" /> が定義できます。性質1より <InlineMath math="\sqrt{T} \sqrt{T} = (\sqrt{\cdot} \times \sqrt{\cdot})(T) = \text{id}(T) = T" /> となるため、この <InlineMath math="\sqrt{T}" /> は確かに「<InlineMath math="T" /> を2乗すると元の作用素に戻るような作用素」として機能しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトル測度</h2>

            <p>
                連続関数を作用素に拡張できたなら、次は「階段関数（指示関数）」を代入したくなります。これにより得られる作用素こそが、ヒルベルト空間を切り分ける「直交射影作用素」であり、これらを確率分布のように集めたものが「スペクトル測度」です。
            </p>

            <ContentBox type="definition" title="Definition 10.3-1 (スペクトル測度)">
                <p>
                    実数上のボレル集合族上の写像 <InlineMath math="E" /> が<b>スペクトル測度（spectral measure）</b>または<b>射影値測度</b>であるとは、各ボレル集合 <InlineMath math="B \subset \mathbb{R}" /> に対して <InlineMath math="H" /> 上の直交射影作用素 <InlineMath math="E(B)" /> を対応させ、次の性質を満たすことである。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="E(\emptyset) = 0" />（ゼロ作用素）、<InlineMath math="E(\mathbb{R}) = I" />（恒等作用素）</li>
                    <li>ボレル集合の直交離散和 <InlineMath math="B = \bigcup_{n=1}^\infty B_n" /> （<InlineMath math="B_i \cap B_j = \emptyset" />）に対して、
                    <BlockMath math="E(B)x = \sum_{n=1}^\infty E(B_n)x \quad (\forall x \in H)" />
                    が強収束の意味で成り立つ（<InlineMath math="\sigma" />-加法性）。</li>
                </ol>
            </ContentBox>

            <p>
                「空間を切り分ける」とはどういうことか、具体的な対角作用素の例で確認します。
            </p>

            <ContentBox type="example" title="Example 10.3-2">
                <p>
                    <InlineMath math="\ell^2" /> 上で対角成分が実数である自己共役な対角作用素 <InlineMath math="T(x_n) = (\lambda_n x_n)" /> を考えます。<br />
                    集合 <InlineMath math="B \subset \mathbb{R}" /> が与えられたとき、指示関数 <InlineMath math="\mathbf{1}_B(\lambda)" /> を <InlineMath math="T" /> に代入した作用素を想像してください。<br />
                    すると、<InlineMath math="\lambda_n \in B" /> となる成分だけが1倍されて残り、それ以外の成分は0になって消えるという操作になります。すなわち
                </p>
                <BlockMath math="E(B)(x_n) = \begin{cases} x_n & (\lambda_n \in B) \\ 0 & (\lambda_n \notin B) \end{cases}" />
                <p>
                    という作用素が定まります。これは明らかに特定の座標のみを抽出する直交射影作用素になっています（<InlineMath math="E(B)^2 = E(B)" /> 等を満たす）。<br />
                    このように、スペクトル測度 <InlineMath math="E(B)" /> は「固有値が <InlineMath math="B" /> に属している成分だけを切り出す」という操作の一般化となっています。
                </p>
            </ContentBox>

            <p>
                連続関数計算の適用範囲を拡張することで、一般の自己共役作用素からもこの「スペクトル測度」を絞り出すことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.3-2 (スペクトル測度の存在)">
                <p>
                    任意の有界自己共役作用素 <InlineMath math="T" /> に対して、この作用素を完全に特徴づける一意なスペクトル測度 <InlineMath math="E" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    連続関数 <InlineMath math="f" /> に対して、内積を通じた実数値の対応 <InlineMath math="f \mapsto \langle f(T)x, x \rangle" /> を考える。<br />
                    これは正の線形汎関数となるため、第5章で学んだリースの表現定理（より一般にはリース・マルコフの定理）を用いると、ある測度を通した積分 <InlineMath math="\int f(\lambda)\,d\mu_x(\lambda)" /> の形で表すことができる。<br />
                    この測度から逆算することで、集合の指示関数 <InlineMath math="\mathbf{1}_B" /> に対応する作用素 <InlineMath math="E(B)" /> を構成し、それが直交射影作用素の要件を満たすことが確認される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="量子力学とスペクトル測度">
                <p>
                    量子力学において、物理量（位置、運動量、エネルギーなど）は自己共役作用素として表されます。<br />
                    物理量 <InlineMath math="T" /> を状態ベクトル <InlineMath math="\psi" />（<InlineMath math="\|\psi\|=1" />）に対して測定したとき、測定値が集合 <InlineMath math="B" /> に含まれる確率こそが、まさに <InlineMath math="\langle E(B)\psi, \psi \rangle = \|E(B)\psi\|^2" /> で与えられます。スペクトル測度は、「物理量の測定値（スペクトル）がどう分布しているのか」という確率分布を数学的に定義する、極めて物理的直感に根ざした概念なのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有界自己共役作用素に対して、スペクトル上で定義される連続関数を代入する操作が正当化され、作用素空間に等長に埋め込まれる（連続関数計算）。</li>
                    <li>部分集合を入力として直交射影作用素を返すような、<InlineMath math="\sigma" />-加法的な写像をスペクトル測度（射影値測度）とよぶ。</li>
                    <li>任意の自己共役作用素に対してスペクトル測度が自然に存在し、これは「特定の範囲に属する固有成分を取り出す操作」の一般化である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
