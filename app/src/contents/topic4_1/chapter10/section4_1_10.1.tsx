import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SpectrumAndResolvent() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有限次元の線形代数における「固有値」は、行列の性質を決定づける極めて重要な概念です。しかし、無限次元空間においては固有値を持たない作用素も存在します。そこで、行列における「固有ベクトルが存在する特殊な値」という視点から離れ、「<InlineMath math="T - \lambda I" /> の逆作用素が存在しないような <InlineMath math="\lambda" />」の集合として概念を拡張します。これが「スペクトル」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトルとレゾルベント集合</h2>

            <p>
                逆作用素をもつか否かによって、複素平面全体を2つの集合に分割します。
            </p>

            <ContentBox type="definition" title="Definition 10.1-1 (レゾルベント集合とスペクトル)">
                <p>
                    <InlineMath math="X" /> をバナッハ空間、<InlineMath math="T \in B(X)" /> を有界線形作用素とする。複素数 <InlineMath math="\lambda \in \mathbb{C}" /> のうち、
                </p>
                <BlockMath math="T - \lambda I" />
                <p>
                    が全単射であり、その逆作用素 <InlineMath math="(T - \lambda I)^{-1}" /> が有界線形作用素（<InlineMath math="\in B(X)" />）となるような <InlineMath math="\lambda" /> の集合を、<InlineMath math="T" /> の<b>レゾルベント集合（resolvent set）</b>とよび、<InlineMath math="\rho(T)" /> で表す。
                </p>
                <p>
                    レゾルベント集合の補集合、すなわち <InlineMath math="T - \lambda I" /> が有界な逆作用素を持たないような <InlineMath math="\lambda" /> の集合を、<InlineMath math="T" /> の<b>スペクトル（spectrum）</b>とよび、<InlineMath math="\sigma(T) = \mathbb{C} \setminus \rho(T)" /> で表す。
                </p>
            </ContentBox>

            <p>
                レゾルベント集合における逆作用素そのものには、専用の名前がついています。
            </p>

            <ContentBox type="definition" title="Definition 10.1-2 (レゾルベント作用素)">
                <p>
                    <InlineMath math="\lambda \in \rho(T)" /> に対して、作用素
                </p>
                <BlockMath math="R(\lambda, T) = (T - \lambda I)^{-1}" />
                <p>
                    を <InlineMath math="T" /> の<b>レゾルベント作用素（resolvent operator）</b>とよぶ。
                </p>
            </ContentBox>

            <p>
                具体的な作用素について、これらがどのような集合になるかを計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 10.1-1">
                <p>
                    ヒルベルト空間 <InlineMath math="\ell^2" /> 上の対角作用素 <InlineMath math="T(x_n) = (\lambda_n x_n)" /> を考えます。ただし、<InlineMath math="(\lambda_n)" /> は有界な複素数列とします。<br />
                    方程式 <InlineMath math="(T - \lambda I)x = y" /> を成分ごとに書くと、<InlineMath math="(\lambda_n - \lambda)x_n = y_n" /> となります。<br />
                    もし <InlineMath math="\lambda" /> が数列の極限も含めた集積点から距離が離れていれば、各成分を <InlineMath math="\lambda_n - \lambda \neq 0" /> で割って逆作用素を定式化でき、有界になります。したがって、<InlineMath math="\lambda" /> が値の集合 <InlineMath math="\{\lambda_n\}" /> の閉包に含まれるとき、逆作用素は存在しない、あるいは有界ではなくなります。<br />
                    よって、この作用素のスペクトルは値の集合の閉包 <InlineMath math="\sigma(T) = \overline{\{\lambda_n\}}" /> となります。
                </p>
            </ContentBox>

            <p>
                「行列では固有値と同値だったが、無限次元では異なる」という事実を確認しておきます。
            </p>

            <ContentBox type="remark" title="有限次元と無限次元の違い">
                <p>
                    有限次元空間上の線形作用素（行列）においては、単射であることと全射であることは同値です。したがって、「逆作用素が存在しない <InlineMath math="\iff" /> 単射でない（核が0でない） <InlineMath math="\iff" /> 固有値である」となり、スペクトルは固有値全体と全く等しくなります。<br />
                    しかし無限次元では「単射だが全射でない」作用素が存在するため、固有値でなくてもスペクトルに含まれる複素数が発生します。これが無限次元特有の複雑さを生み出します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトルの分類</h2>

            <p>
                そこで、スペクトル <InlineMath math="\sigma(T)" /> を、逆作用素が作れなくなる「理由」に応じて3つの部分に細かく分類します。
            </p>

            <ContentBox type="definition" title="Definition 10.1-3 (点スペクトル)">
                <p>
                    <InlineMath math="T - \lambda I" /> が<b>単射でない</b>ような <InlineMath math="\lambda" /> の集合を<b>点スペクトル（point spectrum）</b>とよび、<InlineMath math="\sigma_p(T)" /> で表す。<br />
                    このとき <InlineMath math="(T - \lambda I)x = 0" /> なる <InlineMath math="x \neq 0" /> が存在するため、これはまさに<b>固有値</b>の全体である。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 10.1-4 (連続スペクトル)">
                <p>
                    <InlineMath math="T - \lambda I" /> は単射であり、その像（値域）は空間全体で稠密（<InlineMath math="\overline{\mathrm{Im}(T-\lambda I)} = X" />）であるが、<b>全射でない</b>ような <InlineMath math="\lambda" /> の集合を<b>連続スペクトル（continuous spectrum）</b>とよび、<InlineMath math="\sigma_c(T)" /> で表す。<br />
                    この場合、逆作用素 <InlineMath math="(T-\lambda I)^{-1}" /> は稠密部分空間上で定義されるが、<b>有界にはならない</b>。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 10.1-5 (残余スペクトル)">
                <p>
                    <InlineMath math="T - \lambda I" /> は単射であるが、その像が空間全体で<b>稠密でない</b>ような <InlineMath math="\lambda" /> の集合を<b>残余スペクトル（residual spectrum）</b>とよび、<InlineMath math="\sigma_r(T)" /> で表す。
                </p>
            </ContentBox>

            <p>
                この分類を用いて、無限次元の代表的なシフト作用素のスペクトルを計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 10.1-2">
                <p>
                    <InlineMath math="\ell^2" /> 上の右シフト作用素 <InlineMath math="R(x_1, x_2, \dots) = (0, x_1, x_2, \dots)" /> を考えます。<br />
                    まず、<InlineMath math="Rx = \lambda x" /> を満たす <InlineMath math="x \neq 0" /> は存在しません（第一成分から順に0になるため）。よって固有値はありません。すなわち点スペクトル <InlineMath math="\sigma_p(R) = \emptyset" /> です。<br />
                    しかし、像はつねに最初の成分が0になるため全空間にはならず、したがって単射であっても全射にはなりません。詳しい計算により、そのスペクトルは複素平面上の単位円とその内部 <InlineMath math="\sigma(R) = \{\lambda \in \mathbb{C} \mid |\lambda| \leq 1\}" /> になることがわかります（多くは残余スペクトルに分類されます）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 10.1-3">
                <p>
                    逆に、左シフト作用素 <InlineMath math="L(x_1, x_2, \dots) = (x_2, x_3, \dots)" /> はどうでしょうか。<br />
                    方程式 <InlineMath math="Lx = \lambda x" /> を解くと、<InlineMath math="x = (1, \lambda, \lambda^2, \dots)" /> というベクトルが特定の条件下で解になります。<br />
                    もし <InlineMath math="|\lambda| < 1" /> であれば、このベクトルは絶対収束し、<InlineMath math="\ell^2" /> に属します。<br />
                    よって左シフト作用素の場合、単位円の内部にあるすべての複素数について、それぞれに固有ベクトルが存在することになります。すなわち点スペクトル <InlineMath math="\sigma_p(L) = \{\lambda \in \mathbb{C} \mid |\lambda| < 1\}" /> です。
                </p>
            </ContentBox>

            <p>
                この「右シフト」と「左シフト」のスペクトルの見事な対比には、ある深い関係があります。
            </p>

            <ContentBox type="remark" title="随伴作用素とのスペクトルの関係">
                <p>
                    左シフト <InlineMath math="L" /> は 右シフト <InlineMath math="R" /> の随伴作用素（<InlineMath math="L = R^*" />）です（Example 8.1-1）。<br />
                    一般に、ある作用素 <InlineMath math="T" /> とその随伴 <InlineMath math="T^*" /> の間には、<InlineMath math="\sigma(T^*) = \{\bar{\lambda} \mid \lambda \in \sigma(T)\}" /> という関係があります。<br />
                    そのため、右シフト作用素は固有値を一つも持たなかった（つまり残余スペクトルが広がっていた）にもかかわらず、その双対の世界（随伴作用素）を覗き込むと、その領域いっぱいに無数の固有値が広がっている、という劇的な関係性が現れるのです。これは関数解析ならではの醍醐味の一つです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>作用素 <InlineMath math="T - \lambda I" /> が有界な逆をもたないような <InlineMath math="\lambda" /> の集合をスペクトル <InlineMath math="\sigma(T)" /> とよぶ。</li>
                    <li>有限次元ではスペクトルは固有値と等しいが、無限次元では逆作用素が存在しない理由に応じて「点スペクトル（固有値）」「連続スペクトル」「残余スペクトル」の3つに分類される。</li>
                    <li>左右のシフト作用素のように、固有値を持たない作用素であっても、スペクトルとして非空な広がりを持つことがある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
