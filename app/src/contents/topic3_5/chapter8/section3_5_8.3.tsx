import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DirichletAndNeumannProblems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ラプラス方程式やポアソン方程式を解く際には、領域の境界でどのような条件を課すかが極めて重要です。
                物理的な要請に応じて、大きく分けて<b>ディリクレ問題</b>と<b>ノイマン問題</b>の 2 種類が考えられます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ディリクレ問題の設定</h2>

            <p className="leading-relaxed">
                境界における関数の値そのものを指定する問題です。
            </p>

            <ContentBox type="definition" title="Definition 8.3-1 (ディリクレ問題)">
                <p>
                    領域 <InlineMath math="\Omega" /> において、次の方程式と境界条件を満たす関数 <InlineMath math="u" /> を求める問題を<b>ディリクレ問題</b>（Dirichlet Problem）と呼ぶ：
                    <BlockMath math="\begin{cases} \Delta u = f & (\mathbf{x} \in \Omega) \\ u = g & (\mathbf{x} \in \partial \Omega) \end{cases}" />
                    特に <InlineMath math="f = 0" /> の場合をラプラス方程式のディリクレ問題、<InlineMath math="f \neq 0" /> の場合をポアソン方程式のディリクレ問題という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.3-1 (1 次元の類比)">
                <p>
                    1 次元の区間 <InlineMath math="0 < x < 1" /> におけるディリクレ問題 <InlineMath math="u'' = 0, \ u(0)=a, u(1)=b" /> を考える。
                    一般解 <InlineMath math="u(x) = cx + d" /> に境界条件を代入すると、
                    <BlockMath math="u(x) = a + (b-a)x" />
                    という唯一の解が定まる。高次元においても、一意性は最大値原理（§8.2）から保証される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ノイマン問題の設定と必要条件</h2>

            <p className="leading-relaxed">
                境界における関数の「法線微分（傾き）」、すなわち熱や流束の出入りを指定する問題です。
            </p>

            <ContentBox type="definition" title="Definition 8.3-2 (ノイマン問題)">
                <p>
                    領域 <InlineMath math="\Omega" /> において、境界上での法線微分の値を指定する問題を<b>ノイマン問題</b>（Neumann Problem）と呼ぶ：
                    <BlockMath math="\begin{cases} \Delta u = f & (\mathbf{x} \in \Omega) \\ \frac{\partial u}{\partial n} = g & (\mathbf{x} \in \partial \Omega) \end{cases}" />
                    ここで <InlineMath math="n" /> は境界における外向き単位法線ベクトルである。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 8.3-1 (ノイマン問題の適合条件)">
                <p>
                    ポアソン方程式のノイマン問題が解を持つためには、ソース項 <InlineMath math="f" /> と境界データ <InlineMath math="g" /> が次の<b>適合条件</b>（Consistency Condition）を満たさなければならない：
                    <BlockMath math="\int_{\Omega} f \, dx = \int_{\partial \Omega} g \, dS" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ガウスの発散定理（グリーンの第一恒等式）を用いる。
                    <BlockMath math="\int_{\Omega} \Delta u \, dx = \int_{\partial \Omega} \nabla u \cdot \mathbf{n} \, dS = \int_{\partial \Omega} \frac{\partial u}{\partial n} \, dS" />
                    方程式 <InlineMath math="\Delta u = f" /> および境界条件 <InlineMath math="\partial u / \partial n = g" /> を代入すると、
                    <BlockMath math="\int_{\Omega} f \, dx = \int_{\partial \Omega} g \, dS" />
                    となり、解が存在するための必要条件であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.3-2 (1 次元の類比：ノイマン条件)">
                <p>
                    1 次元問題 <InlineMath math="u'' = f, \ u'(0)=a, u'(1)=b" /> を考える。
                    この両辺を積分すると <InlineMath math="u'(1) - u'(0) = \int_0^1 f(x) \, dx" />、すなわち <InlineMath math="b - a = \int_0^1 f(x) \, dx" /> となる。
                    これが適合条件の 1 次元版である。また、この条件が満たされるとき、解は定数の自由度 <InlineMath math="u(x) + C" /> を持つ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="物理的意味：収支の一致">
                <p>
                    ディリクレ条件は境界での「温度固定」を意味するのに対し、ノイマン条件は「熱流束の固定」を意味する。
                    適合条件は、物理的には「内部で発生した熱（<InlineMath math="f" />）の総量と、境界から流れ出る熱（<InlineMath math="g" />）の総量が一致している」という熱収支の保存則に対応している。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、ポアソン方程式を積分形式で具体的に解くための道具である「基本解」を導入し、
                空間全体の情報の重ね合わせとしての解の表示について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ディリクレ問題は境界の値を指定し、最大値原理によって解の一意性が保証される。</li>
                    <li>ノイマン問題は境界の法線微分を指定し、解の存在には「適合条件」という収支の一致が必要である。</li>
                    <li>ノイマン問題の解は、ディリクレ問題とは異なり、定数分の不定性が残る。</li>
                    <li>これらの条件の使い分けは、システムが外部とどのようにエネルギーをやり取りしているかに対応する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
