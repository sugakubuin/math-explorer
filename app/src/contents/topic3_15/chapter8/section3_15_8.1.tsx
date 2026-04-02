import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AdditiveAndAbelianCategories() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは集合のように「点と矢印」だけの非常に一般的な圏を扱ってきました。しかし、線形代数やホモロジー代数を圏論的に展開するには、射の間に「足し算」ができるような豊かな構造が必要です。これを公理化したものが「アーベル圏（Abelian Category）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">加法圏の定義</h2>

            <p className="leading-relaxed">
                まずは、射の間に「足し算」と「ゼロ」が定義できる圏を定めます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 8.1-1 (加法圏 / Additive Category)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{A}" /> が<strong>加法圏</strong>であるとは、以下の条件を満たすことである。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><strong>hom 集合のアーベル群構造：</strong> 各対象のペア <InlineMath math="A, B" /> について、射の集合 <InlineMath math="\mathrm{Hom}(A, B)" /> がアーベル群の構造（射の和 <InlineMath math="f+g" />）を持つ。</li>
                    <li><strong>合成の双線形性：</strong> 射の合成が和に対して分配法則を満たす。<br/>
                    <InlineMath math="h \circ (f+g) = h \circ f + h \circ g" /> <br/>
                    <InlineMath math="(f+g) \circ k = f \circ k + g \circ k" /></li>
                    <li><strong>零対象の存在：</strong> 始対象であり同時に終対象でもある対象が存在し、これを零対象 <InlineMath math="0" /> と書く。（<InlineMath math="0" /> を経由する唯一の射がアーベル群のゼロ射になる）</li>
                    <li><strong>双積（Biproduct）の存在：</strong> 任意の2対象 <InlineMath math="A, B" /> に対して、有限積と有限余積が存在し、それらが自然な同型で一致する。これを <InlineMath math="A \oplus B" /> と書き、双積（直和）と呼ぶ。</li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.1-1 (アーベル群の圏)"
            >
                <p>
                    アーベル群の圏 <InlineMath math="\mathbf{Ab}" /> は加法圏の典型例である。
                </p>
                <p>
                    準同型 <InlineMath math="f, g : A \to B" /> の和は、要素ごとの足し算 <InlineMath math="(f+g)(x) = f(x)+g(x)" /> で定義され、これも準同型になる（<InlineMath math="B" /> が可換だからこそ成り立つ）。
                    零対象は自明群 <InlineMath math="\{0\}" /> であり、双積 <InlineMath math="A \oplus B" /> は群の直積（直和）に一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">アーベル圏の公理</h2>

            <p className="leading-relaxed">
                加法圏だけでは、まだ「方程式を解く（核・余核）」操作が保証されていません。同型定理が成り立つような「完璧な線形構造」を持つ圏をアーベル圏と呼びます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 8.1-2 (アーベル圏の公理)"
            >
                <p>
                    加法圏 <InlineMath math="\mathcal{A}" /> が<strong>アーベル圏（Abelian Category）</strong>であるとは、以下の条件を満たすことである。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><strong>核と余核の存在：</strong> 任意の射 <InlineMath math="f : A \to B" /> に対して、核（kernel） <InlineMath math="\ker f" /> と余核（cokernel） <InlineMath math="\mathrm{coker}\, f" /> が存在する。（これらは <InlineMath math="f \circ e = 0" /> などの極限・余極限として定義される）</li>
                    <li><strong>同型定理の成立（正則性）：</strong> 任意の射 <InlineMath math="f" /> に対して、自然に導かれる「余核の核（像 <InlineMath math="\mathrm{Im} f" />）」と「核の余核（余像 <InlineMath math="\mathrm{Coim} f" />）」が同型となる。<br/>
                    より実用的には、「任意のモノ射は必ず何かの核であり、任意のエピ射は必ず何かの余核である」と言い換えられる。</li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 8.1-2 (<InlineMath math="\mathbf{Ab}" /> はアーベル圏)</span>}
            >
                <p>
                    再び <InlineMath math="\mathbf{Ab}" /> を考える。射 <InlineMath math="f : A \to B" /> に対して、
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 mb-2">
                    <li>核は <InlineMath math="\ker f = \{a \in A \mid f(a) = 0\} \hookrightarrow A" />。</li>
                    <li>余核は商群への射影 <InlineMath math="B \twoheadrightarrow B / \mathrm{Im} f" />。</li>
                </ul>
                <p>
                    アーベル圏の公理「モノ射は核、エピ射は余核」は、単射な準同型は部分群の包含写像と同じであり、全射な準同型は商群への射影写像と同じであるという事実に対応する。
                    そして正則性の公理は、群の第一同型定理 <InlineMath math="A / \ker f \cong \mathrm{Im} f" /> そのものを圏論の言葉に直したものである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>加法圏</strong>とは、射の足し算が可能で、零対象と直和（双積）を持つ圏である。</li>
                    <li><strong>アーベル圏</strong>とは、加法圏に加えて、任意の射に対して核・余核・像が定義でき、同型定理（<InlineMath math="\mathrm{Coim} \cong \mathrm{Im}" />）が完全に成り立つ圏である。</li>
                    <li>これにより、要素（元）を使わずに「方程式（<InlineMath math="f(x)=0" />）」や「商空間」を厳密に扱うことが可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
