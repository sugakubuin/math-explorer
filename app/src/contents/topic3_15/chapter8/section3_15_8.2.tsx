import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfAbelianCategories() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                アーベル圏の公理は非常に強力ですが、その条件を満たす圏は意外なほど多く存在します。代数学や幾何学の多くが、アーベル圏を舞台として展開されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">加群の圏</h2>

            <ContentBox
                type="example"
                title="Example 8.2-1 (加群の圏)"
            >
                <p>
                    環 <InlineMath math="R" />（可換とは限らない）上の左加群の圏 <strong><InlineMath math="\mathbf{Mod}_R" /></strong> はアーベル圏である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>加群準同型の和は再び準同型になる（加法圏）。</li>
                    <li><InlineMath math="\ker f" />（方程式 <InlineMath math="f(x)=0" /> の解空間）は <InlineMath math="R" />-部分加群であり、<InlineMath math="\mathrm{Im} f" /> による商加群 <InlineMath math="B/\mathrm{Im} f" /> が余核を与える。</li>
                    <li>加群の第一同型定理が成立するため、アーベル圏の公理をすべて満たす。</li>
                </ul>
                <p>
                    （特に <InlineMath math="R = \mathbb{Z}" /> のとき <InlineMath math="\mathbf{Mod}_\mathbb{Z} \cong \mathbf{Ab}" /> であり、<InlineMath math="R" /> が体のときはベクトル空間の圏 <InlineMath math="\mathbf{Vect}_R" /> となる。これらも当然アーベル圏である。）
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.2-2 (アーベル圏でない例)"
            >
                <p>
                    構造を持っていてもアーベル圏にならない重要な例を挙げる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong><InlineMath math="\mathbf{Set}" /> や <InlineMath math="\mathbf{Top}" />：</strong> 射の足し算が定義できないため、そもそも加法圏ですらない。零対象（始対象かつ終対象）も存在しない（<InlineMath math="\mathbf{Set}" /> の始対象は空集合、終対象は一点集合で一致しない）。</li>
                    <li><strong>一般の群の圏 <InlineMath math="\mathbf{Grp}" />：</strong> 加法圏ではない。群準同型の和 <InlineMath math="f(x)g(x)" /> は、群が可換（アーベル群）でない限り、一般には群準同型にならないからである。</li>
                    <li><strong>自由アーベル群の圏：</strong> 加法圏であるがアーベル圏ではない。<InlineMath math="\mathbb{Z} \xrightarrow{\times 2} \mathbb{Z}" /> という射（2倍写像）の余核は <InlineMath math="\mathbb{Z}/2\mathbb{Z}" /> となるが、これは「自由」アーベル群ではないため圏の外に出てしまう（余核が圏内に存在しない）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">関手圏のアーベル圏性</h2>

            <p className="leading-relaxed">
                アーベル圏において極めて重要な性質が、「アーベル圏を値にとる関手の圏もまた、アーベル圏になる」という事実です。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 8.2-1 (関手圏のアーベル圏性)"
            >
                <p>
                    <InlineMath math="\mathcal{A}" /> がアーベル圏であり、<InlineMath math="\mathcal{C}" /> が任意の小圏であるとする。
                    このとき、関手圏 <strong><InlineMath math="[\mathcal{C}, \mathcal{A}]" /></strong> もアーベル圏となる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    関手圏における演算や極限（核・余核）は、すべて<strong>成分ごと（pointwise）</strong>に定義することで構成できる。
                </p>
                <p>
                    自然変換 <InlineMath math="\eta, \mu : F \Rightarrow G" /> の和を、各対象 <InlineMath math="X \in \mathcal{C}" /> ごとに
                    <BlockMath math="(\eta + \mu)_X = \eta_X + \mu_X" />
                    と定義する（右辺はアーベル圏 <InlineMath math="\mathcal{A}" /> における射の和）。
                    射の合成の双線形性などから、これが再び自然変換になることが確認できる。
                </p>
                <p>
                    同様に、自然変換 <InlineMath math="\eta" /> の核 <InlineMath math="\ker \eta" /> は、対象 <InlineMath math="X" /> ごとに <InlineMath math="\mathcal{A}" /> の中で <InlineMath math="\ker (\eta_X)" /> をとり、それらを結ぶ関手として構成される。余核や像も同様である。
                    <InlineMath math="\mathcal{A}" /> がアーベル圏の公理を満たすため、成分ごとに構成されたこれらの対象も関手圏におけるアーベル圏の公理を完全に満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="この定理の意義"
            >
                <p>
                    層（Sheaf）の理論や、次節以降で扱う鎖複体（Chain Complex）の圏は、すべて「アーベル圏を値にとる関手圏（またはその部分圏）」として定義されます。
                    この定理により、それら巨大で複雑な対象の圏においても、普通の部分空間や商空間と全く同じように「核」や「完全系列」の理論がそのまま使えることが保証されるのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>アーベル圏の代表例は、アーベル群の圏 <strong><InlineMath math="\mathbf{Ab}" /></strong> や、環上の加群の圏 <strong><InlineMath math="\mathbf{Mod}_R" /></strong> である。</li>
                    <li>一般の群の圏や集合の圏はアーベル圏ではない。</li>
                    <li><strong>関手圏 <InlineMath math="[\mathcal{C}, \mathcal{A}]" /></strong> は、値の圏 <InlineMath math="\mathcal{A}" /> がアーベル圏なら成分ごとに演算を入れることでアーベル圏になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
