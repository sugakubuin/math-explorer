import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfNaturalTransformations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                自然変換の定義は非常に抽象的でしたが、具体例を見ることで「なぜこれが『自然』と呼ばれるのか」が腑に落ちるはずです。線形代数でよく知られた事実を、圏論の言葉で再翻訳してみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">行列式の自然性</h2>

            <p className="leading-relaxed">
                行列式（Determinant）は、単なる「行列から数値への計算ルール」ではなく、関手から関手への自然変換としての実体を持っています。
            </p>

            <ContentBox
                type="example"
                title="Example 3.2-1 (行列式の自然変換)"
            >
                <p>
                    可換環の圏 <InlineMath math="\mathbf{Ring}" /> から群の圏 <InlineMath math="\mathbf{Grp}" /> への2つの関手 <InlineMath math="GL_n" /> と <InlineMath math="(-)^\times" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>関手 <InlineMath math="GL_n" />： 環 <InlineMath math="R" /> に対して、<InlineMath math="n \times n" /> の可逆行列の群 <InlineMath math="GL_n(R)" /> を対応させる。</li>
                    <li>関手 <InlineMath math="(-)^\times" />： 環 <InlineMath math="R" /> に対して、その単元（可逆元）のなす乗法群 <InlineMath math="R^\times" /> を対応させる。</li>
                </ul>
                <p>
                    このとき、<strong>行列式 <InlineMath math="\det" /> は、関手 <InlineMath math="GL_n" /> から 関手 <InlineMath math="(-)^\times" /> への自然変換である。</strong>
                    <BlockMath math="\det : GL_n \Rightarrow (-)^\times" />
                </p>
                <p>
                    <strong>自然性の確認：</strong><br/>
                    任意の環準同型 <InlineMath math="f : R \to S" /> について、可換図式が成立するか確認する。
                    <InlineMath math="R" /> 係数の行列 <InlineMath math="M" /> に、<InlineMath math="\eta_R = \det_R" /> を適用してから <InlineMath math="f" />（の群への制限）を適用すると <InlineMath math="f(\det_R(M))" /> となる。
                    一方、行列 <InlineMath math="M" /> の各成分に <InlineMath math="f" /> を適用して <InlineMath math="S" /> 係数の行列 <InlineMath math="f(M)" /> に変換してから、<InlineMath math="S" /> 上での行列式 <InlineMath math="\det_S" /> を計算すると <InlineMath math="\det_S(f(M))" /> となる。
                </p>
                <p>
                    行列式は成分の足し算と掛け算（多項式）だけで定義されており、環準同型 <InlineMath math="f" /> は足し算と掛け算を保存するため、
                    <BlockMath math="f(\det_R(M)) = \det_S(f(M))" />
                    が常に成立する。これが「行列式は環の取り替えに関して自然である」ことの証明である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">二重双対への埋め込み</h2>

            <p className="leading-relaxed">
                線形代数において「ベクトル空間 <InlineMath math="V" /> とその双対空間 <InlineMath math="V^*" /> は、次元が同じなら同型だが、その同型は『自然』ではない」と習ったかもしれません。一方で「二重双対 <InlineMath math="V^{**}" /> との同型は『自然』である」とされます。この言葉の真意を自然変換で明らかにします。
            </p>

            <ContentBox
                type="example"
                title="Example 3.2-2 (二重双対への自然な埋め込み)"
            >
                <p>
                    ベクトル空間の圏 <InlineMath math="\mathbf{Vect}" /> において、恒等関手 <InlineMath math="\mathrm{Id}" /> と、二重双対関手 <InlineMath math="(-)^{**}" /> の2つの関手を考える。
                    各ベクトル空間 <InlineMath math="V" /> に対して、以下のような「評価写像（evaluation map）」<InlineMath math="\mathrm{ev}_V" /> を定義する。
                    <BlockMath math="\mathrm{ev}_V : V \to V^{**}, \quad v \mapsto (\phi \mapsto \phi(v))" />
                    （ベクトル <InlineMath math="v" /> を、「汎関数 <InlineMath math="\phi" /> を受け取って実数 <InlineMath math="\phi(v)" /> を返す関数」とみなす）
                </p>
                <p>
                    この <InlineMath math="\mathrm{ev}" /> は、<InlineMath math="\mathrm{Id}" /> から <InlineMath math="(-)^{**}" /> への<strong>自然変換</strong>である。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 3.2-1 (評価写像の自然性)"
            >
                <p>
                    評価写像の族 <InlineMath math="\mathrm{ev}" /> は、任意の線形写像 <InlineMath math="f : V \to W" /> に対して自然性条件
                    <BlockMath math="f^{**} \circ \mathrm{ev}_V = \mathrm{ev}_W \circ f" />
                    を満たす。有限次元ベクトル空間の圏に制限すれば、各成分 <InlineMath math="\mathrm{ev}_V" /> は全単射になるため、<InlineMath math="\mathrm{ev}" /> は<strong>自然同型</strong>となる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    任意の <InlineMath math="v \in V" /> と、任意の汎関数 <InlineMath math="\psi \in W^*" /> に対して、両辺の写像が同じ結果を返すか計算する。
                </p>
                <p>
                    <strong>右辺：</strong> <InlineMath math="(\mathrm{ev}_W \circ f)(v) = \mathrm{ev}_W(f(v))" />。これは「汎関数 <InlineMath math="\psi" /> に <InlineMath math="f(v)" /> を代入する関数」であるから、値は <InlineMath math="\psi(f(v))" />。
                </p>
                <p>
                    <strong>左辺：</strong> <InlineMath math="f^{**}(\mathrm{ev}_V(v))" />。<InlineMath math="f^{**}" /> の定義（双対写像の双対）は、入力された <InlineMath math="V^{**}" /> の元に <InlineMath math="f^*" /> を前合成する操作である。
                    したがって、この関数が <InlineMath math="\psi" /> を受け取ったときの値は、
                    <BlockMath math="\mathrm{ev}_V(v)(f^*(\psi)) = \mathrm{ev}_V(v)(\psi \circ f)" />
                    <InlineMath math="\mathrm{ev}_V(v)" /> の定義より、これは引数 <InlineMath math="\psi \circ f" /> に <InlineMath math="v" /> を代入する操作なので、値は <InlineMath math="(\psi \circ f)(v) = \psi(f(v))" /> となる。
                </p>
                <p>
                    両辺の値が完全に一致したため、図式は可換であり、自然性が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="「自然」と「不自然」の境界線"
            >
                <p>
                    有限次元において <InlineMath math="V" /> と双対空間 <InlineMath math="V^*" /> も次元が同じなので同型になります（<InlineMath math="V \cong V^*" />）。
                    しかし、その同型写像を作るには「基底 <InlineMath math="e_1, \ldots, e_n" /> を人工的に選んで、双対基底に対応させる」という人為的な操作が必要です。
                </p>
                <p>
                    基底の選び方は無数にあり、線形写像 <InlineMath math="f : V \to W" /> に合わせて基底をうまく取り替えることは一般には不可能です。つまり、<InlineMath math="\mathrm{Id}" /> と <InlineMath math="(-)^*" /> を結ぶ「自然変換の可換図式」を満たすような同型の族は<strong>存在しない</strong>ことが証明できます。
                </p>
                <p>
                    圏論の自然変換は、数学者の「基底によらない、依怙贔屓のない美しい対応」という美意識に、完璧な数学的定義を与えたのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>行列式は、可逆行列の群から単元群への関手の間の<strong>自然変換</strong>である。</li>
                    <li><InlineMath math="V" /> から <InlineMath math="V^{**}" /> への評価写像は、座標や基底に一切依存しないため<strong>自然変換</strong>となる（有限次元なら自然同型）。</li>
                    <li>「自然である」とは、圏論の言葉で言えば「任意の射 <InlineMath math="f" /> に対して可換図式が成立する（対象の依怙贔屓がない）」ことと同義である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}