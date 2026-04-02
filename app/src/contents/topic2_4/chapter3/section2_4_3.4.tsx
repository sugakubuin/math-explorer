import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function QuotientMapsAndUniversality() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                この章の締めくくりとして、商集合と写像がどのように深く結びついているかを探求します。
                「情報を落として同一視する」という商集合の操作は、写像の言葉では<strong>自然な射影</strong>として記述されます。
                そして、商集合が持つ<strong>普遍性</strong>を理解することで、複雑な写像を全単射へと分解する「写像の標準分解」という鮮やかな理論に到達します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自然な射影と普遍性</h2>

            <p>
                集合 <InlineMath math="A" /> の各元を、それが属するグループ（同値類）にそのまま対応させる写像を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (自然な射影)">
                <p>
                    集合 <InlineMath math="A" /> とその上の同値関係 <InlineMath math="\sim" /> に対して、写像
                    <BlockMath math="\pi \colon A \to A/{\sim}, \quad \pi(a) = [a]" />
                    を、<InlineMath math="A" /> から <InlineMath math="A/{\sim}" /> への<strong>自然な射影（商写像）</strong>という。
                </p>
                <p className="mt-4">
                    ※ 自然な射影 <InlineMath math="\pi" /> は、定義より明らかに<strong>全射</strong>である。
                </p>
            </ContentBox>

            <p className="mt-4">
                商集合の本質は、「元の集合 <InlineMath math="A" /> からの写像のうち、同値関係と矛盾しないものはすべて、商集合を経由して一意に表現できる」点にあります。これが商集合の<strong>普遍性</strong>です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-1 (商集合の普遍性)">
                <p>
                    写像 <InlineMath math="f \colon A \to B" /> が同値関係 <InlineMath math="\sim" /> と<strong>両立する</strong>（<InlineMath math="a \sim a' \implies f(a) = f(a')" />）とき、
                    次を満たす唯一の写像 <InlineMath math="\bar{f} \colon A/{\sim} \to B" /> が存在する：
                </p>
                <BlockMath math="f = \bar{f} \circ \pi" />
                <p>
                    （すなわち、任意の <InlineMath math="a \in A" /> に対して <InlineMath math="\bar{f}([a]) = f(a)" /> が成り立つ。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>（存在）</strong>：<InlineMath math="\bar{f}([a]) = f(a)" /> と定義する。この定義が代表元 <InlineMath math="a" /> の選び方に寄らないこと（ウェル・ディファインド値）を確認する必要がある。<InlineMath math="[a] = [a']" /> とすると <InlineMath math="a \sim a'" /> なので、仮定より <InlineMath math="f(a) = f(a')" />。よって値は一意に定まる。<br />
                    <strong>（唯一性）</strong>：<InlineMath math="f = g \circ \pi" /> となる <InlineMath math="g" /> があれば、<InlineMath math="g([a]) = g(\pi(a)) = f(a)" /> となるため、<InlineMath math="g = \bar{f}" /> でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">写像の標準分解</h2>

            <p>
                普遍性の応用として、最も美しい結論の一つである「標準分解」を導きます。
                どんな写像であっても、適切な商集合を挟むことで「全射・全単射・単射」の3つの純粋な構成要素に分解できるという定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-2 (写像の標準分解)">
                <p>
                    任意の写像 <InlineMath math="f \colon A \to B" /> に対して、<InlineMath math="A" /> 上の同値関係を <InlineMath math="a \sim a' \iff f(a) = f(a')" /> で定義する。
                    このとき、<InlineMath math="f" /> は以下の3つの写像の合成としてただ一通りに分解できる。
                </p>
                <BlockMath math="A \xrightarrow{\pi} A/{\sim} \xrightarrow{\bar{f}} f(A) \xrightarrow{\iota} B" />
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="\pi" />：自然な射影（<strong>全射</strong>）</li>
                    <li><InlineMath math="\bar{f}" />：誘導された写像（<strong>全単射</strong>）</li>
                    <li><InlineMath math="\iota" />：包含写像（<strong>単射</strong>）</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\pi" /> は全射、<InlineMath math="\iota" /> は単射であることは定義より既知である。
                    誘導された写像 <InlineMath math="\bar{f} \colon [a] \mapsto f(a)" /> が全単射であることを示す。<br />
                    ・<strong>全射性</strong>：<InlineMath math="b \in f(A)" /> ならばある <InlineMath math="a \in A" /> で <InlineMath math="b = f(a) = \bar{f}([a])" /> となるため全射。<br />
                    ・<strong>単射性</strong>：<InlineMath math="\bar{f}([a_1]) = \bar{f}([a_2])" /> とすると、<InlineMath math="f(a_1) = f(a_2)" /> である。
                    ここでの同値関係の定義より、これは <InlineMath math="a_1 \sim a_2" /> 、すなわち <InlineMath math="[a_1] = [a_2]" /> を意味する。よって単射。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="普遍性と「構造による特徴づけ」">
                <p>
                    商集合の「普遍性」という概念は、圏論（Category Theory）と呼ばれる現代数学の分野で中心的な役割を果たします。
                    「集合の元が何であるか」といった内部の正体ではなく、<strong>「他の集合や写像とどのような関係にあるか（全域的なネットワークの中でどう振る舞うか）」</strong>によって対象を定義するこの視点は、現代数学においてきわめて普遍的かつ強力なものです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>自然な射影 <InlineMath math="\pi" /></strong> は、元をその同値類へと送る全射な写像である。</li>
                    <li><strong>普遍性</strong>とは、同値関係を保つ写像がすべて商集合を経由して一意に表現できるという性質である。</li>
                    <li><strong>写像の標準分解</strong>により、任意の写像は「情報を圧縮する（全射）」「本質的に一対一で対応させる（全単射）」「より広い世界へ埋め込む（単射）」という3つのステップに分けて理解できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
