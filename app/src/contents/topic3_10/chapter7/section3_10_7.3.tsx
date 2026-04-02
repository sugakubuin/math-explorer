import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaloisSolvabilityTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ガロア理論の最大の成果の一つが、方程式が「解の公式」を持つこと（代数的に解けること）と、その方程式のガロア群が「可解群」であることの完全な同値性を証明したことです。本節ではその可解性定理を定式化します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">根号による可解性の定義</h2>

            <p>
                「解の公式が存在する」という歴史的・直感的な概念を、体の拡大として厳密に数学的に定義します。
            </p>

            <ContentBox type="definition" title="Definition 7.3-1 (根号拡大)">
                <p>
                    体の拡大 <InlineMath math="K/F" /> が<strong>根号拡大（radical extension / 冪根拡大）</strong>であるとは、体の中間体の列
                </p>
                <BlockMath math="F = F_0 \subset F_1 \subset \cdots \subset F_m = K" />
                <p>
                    が存在し、各ステップ <InlineMath math="F_{i+1} / F_i" /> がある元 <InlineMath math="\alpha_i" /> を用いて <InlineMath math="F_{i+1} = F_i(\alpha_i)" /> と書け、かつある整数 <InlineMath math="n_i \geq 1" /> に対して
                </p>
                <BlockMath math="\alpha_i^{n_i} \in F_i" />
                <p>
                    を満たすことである。つまり、各ステップは「下の体の元の <InlineMath math="n" /> 乗根（ルート）を添加する」という操作になっている。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 7.3-2 (根号によって解ける)">
                <p>
                    多項式 <InlineMath math="f \in F[x]" /> が<strong>根号によって解ける（solvable by radicals）</strong>とは、<InlineMath math="f" /> の分解体 <InlineMath math="E" /> が、ある <InlineMath math="F" /> 上の根号拡大 <InlineMath math="K" /> の部分体になること（<InlineMath math="E \subset K" />）である。
                </p>
                <p>
                    これは直感的に、<InlineMath math="f(x)=0" /> のすべての解が、係数に対する四則演算と冪根（<InlineMath math="\sqrt[n]{\cdot}" />）を有限回組み合わせた数式で表現できることを意味する。
                </p>
            </ContentBox>

            <p>
                2次から4次までの方程式は、歴史的に公式が発見されており、根号で解けることが知られています。
            </p>

            <ContentBox type="example" title="Example 7.3-1 (2次・3次・4次方程式の可解性)">
                <p>
                    <strong>2次方程式：</strong> <InlineMath math="ax^2+bx+c=0" /> の解は <InlineMath math="x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}" /> である。<InlineMath math="\alpha = \sqrt{b^2-4ac}" /> とおけば、<InlineMath math="\alpha^2 = b^2-4ac \in \mathbb{Q}(a,b,c)" /> であり、1回の平方根の添加（根号拡大）で解を表現できている。
                </p>
                <p>
                    <strong>3次方程式：</strong> 16世紀に発見された「カルダノの公式」は、係数の四則演算から出発し、平方根 <InlineMath math="\sqrt{\cdot}" /> を計算し、さらにその結果に対して立方根 <InlineMath math="\sqrt[3]{\cdot}" /> を計算することで解を表す。これは2段階の根号拡大に対応する。
                </p>
                <p>
                    <strong>4次方程式：</strong> 「フェラーリの公式」により、3次方程式の解（分解方程式）を補助として用い、平方根と立方根の入れ子で表現できることが知られている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガロアの可解性定理</h2>

            <p>
                この「根号拡大」という体の性質と、「可解群」という群の性質が、ガロアの基本定理を通じて完璧に一致することを示したのが以下の定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (ガロアの可解性定理)">
                <p>
                    <InlineMath math="\mathrm{char}(F) = 0" /> とする。多項式 <InlineMath math="f \in F[x]" /> について、以下の2つは同値である。
                </p>
                <ol className="list-decimal list-inside mt-2 mb-2">
                    <li>方程式 <InlineMath math="f(x)=0" /> は<strong>根号によって解ける</strong>。</li>
                    <li><InlineMath math="f" /> のガロア群 <InlineMath math="\mathrm{Gal}(f/F)" /> は<strong>可解群</strong>である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明のアイデア・概略）<br />
                    証明の要は、<strong>「冪根の添加（<InlineMath math="x^n - a = 0" /> の根の添加）」と「巡回拡大（ガロア群が巡回群になる拡大）」が本質的に同じものである</strong>という事実（クンマー理論）である。ただし、これには基礎体が「1の原始 <InlineMath math="n" /> 乗根 <InlineMath math="\zeta_n" /> を含んでいる」という条件が必要になる。
                </p>
                <p>
                    （<InlineMath math="1 \Rightarrow 2" />：根号で解けるならガロア群は可解）<br />
                    方程式が根号で解けるとし、その根号拡大の塔 <InlineMath math="F = F_0 \subset F_1 \subset \cdots \subset F_m = K" /> を考える。各ステップの冪根に対応する 1 の原始 <InlineMath math="n" /> 乗根たちをあらかじめ <InlineMath math="F" /> に添加しておく（円分体のガロア群はアーベル群なので可解性は保たれる）。
                    すると、各ステップ <InlineMath math="F_{i+1}/F_i" /> は <InlineMath math="\alpha^n \in F_i" /> なる根の添加となり、クンマー理論によりこれは巡回拡大となる。
                    ガロア対応により、体の拡大の塔に対応してガロア群の降下する正規列ができ、各剰余群は巡回群（ゆえにアーベル群）となる。よってガロア群は可解群である。
                </p>
                <p>
                    （<InlineMath math="2 \Rightarrow 1" />：ガロア群が可解なら根号で解ける）<br />
                    ガロア群 <InlineMath math="G" /> が可解群であるとする。定義より、剰余群が巡回群（アーベル群を素数位数の巡回群に細分化できる）となるような正規列が存在する。
                    ガロアの基本定理により、この群の正規列に対応して、中間体の塔 <InlineMath math="F = E_0 \subset E_1 \subset \cdots \subset E_k = E" /> が得られ、各 <InlineMath math="E_{i+1}/E_i" /> のガロア群は巡回群となる。
                    1の冪根を適宜添加することで、巡回拡大は必ず「ある元の冪根を添加する拡大」として実現できることが示される（ラグランジュ・レゾルベントを用いる）。よって根は根号拡大に含まれ、根号で解ける。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理を用いて、改めて低次方程式の可解性を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.3-2 (3次および4次方程式の可解性の再確認)">
                <p>
                    前節（Example 7.2-2）で見たように、3次方程式のガロア群は <InlineMath math="S_3" /> または <InlineMath math="\mathbb{Z}/3\mathbb{Z}" /> の部分群である。7.1節で確認した通り、これらはどちらも可解群である。よって定理より、任意の3次方程式は根号で解ける。
                </p>
                <p>
                    4次方程式のガロア群は <InlineMath math="S_4" /> の部分群となる。<InlineMath math="S_4" /> は可解群（<InlineMath math="S_4 \trianglerighteq A_4 \trianglerighteq V_4 \trianglerighteq \{e\}" />）であるため、その部分群もすべて可解群となる。よって定理より、任意の4次方程式は根号で解ける。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>「四則演算とルートで解を表せる」ことは、代数的には<strong>根号拡大（冪根拡大）</strong>の部分体に含まれることと定義される。</li>
                    <li><strong>ガロアの可解性定理</strong>：方程式が根号によって解けることと、そのガロア群が<strong>可解群</strong>であることは完全に同値である。</li>
                    <li>3次以下や4次の方程式のガロア群（<InlineMath math="S_3, S_4" /> の部分群）は可解群であるため、解の公式が存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
