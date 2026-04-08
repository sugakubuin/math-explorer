import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SpectralTheoryOfCompactSelfAdjointOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有限次元の実対称行列は、必ず適切な直交行列によって対角化可能である（実ベクトルによる正規直交基底を用いて対角成分のみにできる）ことをご存知でしょう。<br />
                無限次元ヒルベルト空間において、この性質を最も自然に引き継ぐのが「コンパクト自己共役作用素」です。本節では、この作用素が完全な固有分解（スペクトル分解）を持つことを示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトルの構造</h2>

            <p>
                「ほとんど有限次元」であるコンパクト作用素は、その固有値（スペクトル）も非常に強い制限を受けます。
            </p>

            <ContentBox type="theorem" title="Theorem 9.3-1 (コンパクト自己共役作用素のスペクトル定理)">
                <p>
                    <InlineMath math="H" /> をヒルベルト空間、<InlineMath math="T" /> を <InlineMath math="H" /> 上のコンパクトな自己共役作用素（<InlineMath math="T^* = T" />）とする。このとき以下の性質が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="T" /> の <InlineMath math="0" /> でない固有値は、有限個であるか、または <InlineMath math="0" /> に収束する無限列 <InlineMath math="\lambda_1, \lambda_2, \dots \to 0" /> をなす。</li>
                    <li><InlineMath math="0" /> でない各固有値 <InlineMath math="\lambda" /> に属する固有空間 <InlineMath math="E_\lambda = \{x \in H \mid Tx = \lambda x\}" /> は有限次元である。</li>
                </ol>
            </ContentBox>

            <p>
                この制約の強さは、コンパクト性と直交性という本質の矛盾から生まれます。固有空間が無限に広がらないことを、背理法を用いて鮮やかに示します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    2. から先に示す。仮にある <InlineMath math="\lambda \neq 0" /> について固有空間 <InlineMath math="E_\lambda" /> が無限次元であったとする。<br />
                    <InlineMath math="E_\lambda" /> の中で正規直交系 <InlineMath math="\{e_n\}" /> を無数にとることができる。この数列は有界（<InlineMath math="\|e_n\| = 1" />）である。<br />
                    これに <InlineMath math="T" /> を作用させると <InlineMath math="T e_n = \lambda e_n" /> であるが、異なる <InlineMath math="n, m" /> について
                </p>
                <BlockMath math="\begin{aligned}
                    \|T e_n - T e_m\|^2 &= \|\lambda e_n - \lambda e_m\|^2 \\
                    &= |\lambda|^2 (\|e_n\|^2 + \|e_m\|^2) = 2|\lambda|^2 > 0
                \end{aligned}" />
                <p>
                    となり、像列は互いに <InlineMath math="\sqrt{2}|\lambda|" /> 以上離れているため、いかなる収束部分列も持たない。これは <InlineMath math="T" /> がコンパクト作用素であることに反する。よって固有空間は有限次元である。
                </p>
                <p>
                    1. についても背理法で示す。ある正数 <InlineMath math="\varepsilon > 0" /> に対して、絶対値が <InlineMath math="\varepsilon" /> 以上の固有値が無限個存在したとする。<br />
                    それぞれの固有値に対応する単位固有ベクトル <InlineMath math="e_n" /> をとる。「自己共役作用素の異なる固有値の固有ベクトルは直交する（Proposition 8.2-1）」ため、これらは正規直交系をなす。<br />
                    先ほどと同様に <InlineMath math="\|Te_n - Te_m\|^2 = \lambda_n^2 + \lambda_m^2 \geq 2\varepsilon^2" /> となり、収束部分列を持たずコンパクト性に矛盾する。<br />
                    したがって、任意の <InlineMath math="\varepsilon > 0" /> に対して絶対値が <InlineMath math="\varepsilon" /> 以上の固有値は有限個しかなく、無限個の固有値を持つならばそれは <InlineMath math="0" /> に収束しなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                抽象的な定理の主張を、無限次元の対角行列という最も単純なモデルに当てはめて確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 9.3-1">
                <p>
                    対角作用素 <InlineMath math="T(x_n) = (x_n/n)" /> を考えます。<br />
                    この作用素の固有値は明らかに対角成分である <InlineMath math="1/1, 1/2, 1/3, \dots, 1/n, \dots" /> です。<br />
                    これらはすべて実数（自己共役）であり、<InlineMath math="0" /> でない固有値は無限個ありますが、確かに <InlineMath math="n \to \infty" /> で <InlineMath math="0" /> に収束しています。また、各固有値に対応する固有ベクトルは標準基底の各軸 <InlineMath math="e_n" /> であり、すべて1次元（有限次元）です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規直交基底の構成</h2>

            <p>
                上の定理は、作用素の「中身」はどうなっているかを示す最終的な形に帰着されます。
            </p>

            <ContentBox type="theorem" title="Theorem 9.3-2 (正規直交基底による表示)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> 上のコンパクト自己共役作用素 <InlineMath math="T" /> に対して、<InlineMath math="T" /> の固有ベクトルからなる <InlineMath math="H" /> の正規直交基底（完全正規直交系）<InlineMath math="\{e_n\}" /> が存在する。<br />
                    任意の <InlineMath math="x \in H" /> に対して、<InlineMath math="T" /> は以下のように展開表示できる。
                </p>
                <BlockMath math="Tx = \sum_n \lambda_n \langle x, e_n \rangle e_n" />
                <p>
                    （ここで <InlineMath math="\lambda_n" /> は <InlineMath math="e_n" /> に属する実の固有値である。）
                </p>
            </ContentBox>

            <p>
                この定理は、直交補空間を順次切り出しながら最大固有値の固有ベクトルを抽出していく、帰納的な手順によって証明されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の鍵は「<InlineMath math="T \neq 0" /> ならば、<InlineMath math="\|T\|" /> または <InlineMath math="-\|T\|" /> のどちらかが必ず <InlineMath math="T" /> の固有値になる」という事実（変分法とコンパクト性から証明される）を用いることである。<br />
                    この事実を用いて、最大の絶対値をもつ固有値 <InlineMath math="\lambda_1" /> とその固有ベクトル <InlineMath math="e_1" /> を見つけることができる。<br />
                    次に、<InlineMath math="e_1" /> と直交する部分空間 <InlineMath math="H_1 = \{e_1\}^\perp" /> を考える。<InlineMath math="T" /> が自己共役であることから <InlineMath math="T(H_1) \subset H_1" /> が示せ、<InlineMath math="H_1" /> に制限した作用素もやはりコンパクト自己共役である。<br />
                    これを帰納的に繰り返し、直交する固有ベクトル <InlineMath math="e_1, e_2, \dots" /> を次々と取り出していく。<InlineMath math="\lambda_n \to 0" /> であることから、残った空間での作用素のノルムは <InlineMath math="0" /> に漸近し、結果としてこれらの固有ベクトルと <InlineMath math="\ker T" />（<InlineMath math="0" /> 固有空間。これも自己共役性から直交基底がとれる）のベクトルを合わせて <InlineMath math="H" /> 全体の正規直交基底が完成する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この無限和による作用素の表現形式は、有限次元の線形代数における行列の対角化と全く同じものとみなすことができます。
            </p>

            <ContentBox type="example" title="Example 9.3-2">
                <p>
                    線形代数学において、実対称行列 <InlineMath math="A" /> は直交行列 <InlineMath math="U" /> （各列が直交する固有ベクトル <InlineMath math="u_i" />）を用いて <InlineMath math="A = U \Lambda U^T" /> と対角化できました。これを列ベクトルで書き下すと
                </p>
                <BlockMath math="A x = \sum_{i=1}^n \lambda_i (u_i^T x) u_i" />
                <p>
                    となります。内積の記法に置き換えれば <InlineMath math="\sum_{i=1}^n \lambda_i \langle x, u_i \rangle u_i" /> であり、Theorem 9.3-2 の式と全く同じ形をしています。無限次元特有の困難は「コンパクト性による極限の制御」だけであり、代数的な本質は有限次元のスペクトル分解と完全に一致していることがよくわかります。
                </p>
            </ContentBox>

            <p>
                これほどまでに美しい結果が得られる「コンパクト」自己共役作用素の世界ですが、現実の物理学などを記述するには、次なる飛躍が必要です。
            </p>

            <ContentBox type="remark" title="一般のスペクトル理論へ向けて">
                <p>
                    本節の定理は非常に美しいですが、「コンパクト」という強い条件が必須でした。量子力学などで現れる位置作用素や運動量作用素はコンパクトでなく、さらに非有界作用素です。<br />
                    次章（第10章）のスペクトル理論では、この足かせを外し、コンパクトでない一般の自己共役作用素にも「スペクトル分解定理」が成立することを見ていきます。和 <InlineMath math="\sum" /> が積分 <InlineMath math="\int" />（スペクトル測度）に変わるという飛躍を遂げることになります。
                </p>
            </ContentBox>

            <p>
                本節で示されたヒルベルト空間上の強力な分解定理について、基本的な性質を振り返ります。
            </p>

            <ContentBox type="note" title="§9.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>コンパクト自己共役作用素の <InlineMath math="0" /> でない固有値は <InlineMath math="0" /> に収束し、各固有空間は有限次元である。</li>
                    <li>固有ベクトルを集めることで、無限次元空間全体を張る正規直交基底を作ることができる。</li>
                    <li>これは有限次元における「実対称行列の直交対角化」の無限次元版そのものであり、作用素の内積と基底を用いた展開式で完全に表現される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
