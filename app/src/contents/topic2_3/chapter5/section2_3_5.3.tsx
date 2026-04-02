import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExtensionOfUniformlyContinuousFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「連続であるか」という性質は関数の部分的な定義（稠密な部分集合上など）から、その「隙間」を埋めていく際に非常に役立ちます。
                しかし、単なる「各点での連続性」だけでは、隙間を埋める（延長する）際に関数の値が暴れたり発散したりしてしまい、うまく定義全体に拡張できるとは限りません。
                ここで「一様連続性」という強力な制約が大いに活躍します。本節では、一様連続関数だからこそ可能となる「関数の連続延長（一意の拡張）」の定理を扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様連続関数の延長定理</h2>

            <p>
                ここでは、区間内の「稠密な点の集合」上でのみ関数が定義されていたとします。例えば、実数における有理数全体の集合 <InlineMath math="\mathbb{Q}" /> の上でだけ関数 <InlineMath math="f" /> が定義されている状況を想像してください。
                この関数が有理数上で「連続」であるだけでは、その関数をすべての実数上に拡張することは不可能かもしれません。しかし「一様連続」ならば、すき間なく一意に拡張できるのです。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (一様連続関数の連続延長)">
                <p>
                    区間 <InlineMath math="I" /> の稠密な部分集合 <InlineMath math="D \subset I" /> 上で定義された関数 <InlineMath math="f: D \to \mathbb{R}" /> が<strong>一様連続</strong>であるとする。
                    このとき、<InlineMath math="f" /> は <InlineMath math="I" /> 全体における連続関数 <InlineMath math="\tilde{f}: I \to \mathbb{R}" /> に<strong>一意に</strong>拡張（延長）できる。
                    さらに、その拡張された関数 <InlineMath math="\tilde{f}" /> もまた <InlineMath math="I" /> 上で一様連続となる。
                </p>
            </ContentBox>

            <p>
                この定理の証明の核心は、実数の完備性（コーシー列は収束する）と、一様連続性が「コーシー列をコーシー列に移す」という性質にあります。
            </p>

            <ContentBox type="proof" title="証明の概略 (コーシー列を用いた延長)">
                <p>
                    <strong>ステップ1：コーシー列の保存</strong><br />
                    関数 <InlineMath math="f" /> は <InlineMath math="D" /> 上で一様連続である。任意の <InlineMath math="D" /> 内のコーシー列 <InlineMath math="\{x_n\}" /> をとる。<InlineMath math="f(x_n)" /> がやはりコーシー列になることを示す。
                    任意の <InlineMath math="\varepsilon > 0" /> に対して、関数の性質から <InlineMath math="D" /> 全域で通用する <InlineMath math="\delta > 0" /> が存在して、<InlineMath math="|x - y| < \delta \implies |f(x) - f(y)| < \varepsilon" /> となる。
                    <InlineMath math="\{x_n\}" /> はコーシー列なので、ある番号 <InlineMath math="N" /> より先では <InlineMath math="|x_n - x_m| < \delta" /> とできる。
                    したがって、その先では <InlineMath math="|f(x_n) - f(x_m)| < \varepsilon" /> となり、<InlineMath math="f(x_n)" /> もコーシー列であると証明される。
                </p>
                <p className="mt-4">
                    <strong>ステップ2：拡張の定義と一意性</strong><br />
                    任意の <InlineMath math="a \in I" /> に対して、<InlineMath math="D" /> が <InlineMath math="I" /> で稠密であることから、<InlineMath math="a" /> に収束する <InlineMath math="D" /> の点列 <InlineMath math="\{x_n\}" /> が存在する（<InlineMath math="x_n \to a" />）。
                    収束列はコーシー列なので、<InlineMath math="f(x_n)" /> もコーシー列である。実数の完備性（Theorem 3.3-1）により、コーシー列 <InlineMath math="f(x_n)" /> は実数内の何らかの値に収束する。この極限を <InlineMath math="\tilde{f}(a) = \lim_{n \to \infty} f(x_n)" /> と定義する。
                    異なる点列 <InlineMath math="y_n \to a" /> を用いても、この極限値が同じになること（well-definedで一意であること）は、極限の性質と一様連続性から容易に示される。
                </p>
                <p className="mt-4">
                    <strong>ステップ3：連続性と一様連続性の証明</strong><br />
                    このように拡張した <InlineMath math="\tilde{f}" /> が <InlineMath math="I" /> 上で一様連続であることは、<InlineMath math="D" /> 上の一様連続性の <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> の関係式の中で、極限操作を行う（不等式の極限をとる）ことで直接的に確認できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備化への応用</h2>

            <p>
                上に示した延長定理は、「有理数から実数を構成する」という数学の根本に直接結びついています。Chapter 1 の §1.3 でコーシー列の同値類を用いて有理数 <InlineMath math="\mathbb{Q}" /> の完備化として実数 <InlineMath math="\mathbb{R}" /> を構成しました。
            </p>

            <ContentBox type="remark" title="Remark (一様連続性と「完備化」の深い結びつき)">
                <p>
                    我々は普段、実数上の指数関数 <InlineMath math="a^x" /> などを当たり前のように扱っていますが、本来その定義は有理数 <InlineMath math="x = p/q" /> における <InlineMath math="a^{p/q} = \sqrt[q]{a^p}" /> という代数的な計算からスタートします。では、<InlineMath math="a^{\pi}" /> や <InlineMath math="a^{\sqrt{2}}" /> のような無理数を指数とする累乗はどのように定義されるのでしょうか。
                </p>
                <p className="mt-4">
                    実はここにも「一様連続な関数の延長」が隠れています。
                    有理数の集合 <InlineMath math="\mathbb{Q}" /> （稠密な部分集合）の上で定義された関数 <InlineMath math="f(x) = a^x \,\, (x \in \mathbb{Q})" /> が、任意の有界な閉区間上で「一様連続」になることを証明し、その後、先の定理（Theorem 5.3-1）を用いてその関数を一意になめらかに（連続性を保ったまま）実数全体へと「延長」します。それが、無理数を指数とする指数の厳密な定義なのです。
                </p>
                <p className="mt-4">
                    「一様連続な関数は完備化（限界の先の世界）へと自然に拡張できる」という原理は、解析学および関数解析の至る所（例えばルベーグ積分の構成やヒルベルト空間への拡張）で繰り返し現れる、極めて普遍的で強力なツールになります。
                </p>
            </ContentBox>

            <p>
                これで、一様連続性のもたらす大域的な恩恵を見てきました。最後に、一様連続よりもさらに強い制約でありつつ、扱いが非常に簡単である「リプシッツ連続」という概念を次節で導入し、Chapter 5 を締めくくります。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>一様連続な関数は「コーシー列をコーシー列に写す」という特権的な性質を持つ。</li>
                    <li>この性質により、稠密な部分集合上の一様連続関数は、全体へと一意に連続延長することが可能になる。</li>
                    <li>これは、有理数から実数への自然な拡張（指数関数などを無理数に拡張する際）の数学的基盤となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
