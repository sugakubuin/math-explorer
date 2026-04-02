import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IsoperimetricProblems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは、自由な関数の変化に対して汎関数を最適化する問題を扱ってきました。
                しかし、現実の多くの問題では、「長さが一定である」や「体積が一定である」といった<b>制約条件</b>が課されることが一般的です。
                本章では、このような制約付き変分問題の代表格である<b>等周問題</b>と、その強力な解決手段である<b>ラグランジュ乗数法</b>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等周問題の定義</h2>

            <p className="leading-relaxed">
                「等周問題」という名称は、古代ギリシャの幾何学問題「周の長さが等しい図形の中で、面積を最大にするものは何か？」に由来します。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (等周問題)">
                <p>
                    汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> を、別の積分形式の制約条件
                    <BlockMath math="G[u] = \int_a^b g(x, u, u') \, dx = \ell \quad (\text{定数})" />
                    の下で極値化する問題を、<b>等周問題</b>（Isoperimetric Problem）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この問題設定は、幾何学だけでなく物理学の多くの現象を記述する際にも極めて重要です。
            </p>

            <ContentBox type="example" title="Example 7.1-1 (等周問題の古典例：ディド問題)">
                <p>
                    「周長 <InlineMath math="\ell" /> が一定の閉曲線が囲む面積を最大化せよ」という問題は、変分法を用いると次のように定式化できる。
                    <BlockMath math="J[y] = \int_a^b y \, dx \quad (\text{面積}),\\ \quad G[y] = \int_a^b \sqrt{1 + (y')^2} \, dx = \ell \quad (\text{弧長})" />
                    （実際には境界条件の扱いや座標の取り方に工夫が必要だが、本質はこの形に集約される）。
                    後に詳しく見るように、この問題の解は<b>円弧</b>（閉曲線の場合は円）となる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-2 (懸垂線問題の再定式化)">
                <p>
                    長さ <InlineMath math="\ell" /> の重い鎖を両端固定して垂らしたときの形状（懸垂線）は、重力ポテンシャルエネルギーを最小にすることで決まる。
                    <BlockMath math="J[y] = \rho g \int_a^b y \sqrt{1 + (y')^2} \, dx \quad (\text{ポテンシャル})" />
                    ただし、鎖の長さは一定であるため、次の制約が課される：
                    <BlockMath math="G[y] = \int_a^b \sqrt{1 + (y')^2} \, dx = \ell" />
                    これは典型的な等周問題の形をしている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等周不等式との関係</h2>

            <p className="leading-relaxed">
                この問題は、数学の根幹に関わる重要な不等式とも深く結びついています。
            </p>

            <ContentBox type="remark" title="等周不等式と言論の深まり">
                <p>
                    幾何学において、平面図形の面積 <InlineMath math="A" /> とその境界の長さ <InlineMath math="L" /> の間には
                    <BlockMath math="4 \pi A \le L^2" />
                    という関係が成り立ち、等号が成立するのは円の場合に限られます。これを<b>等周不等式</b>と呼びます。
                    変分法は、この不等式を「第一変分がゼロであることから曲率が一定であることを導く」という手続きを通じて、解析的に証明する道を提供します。
                    さらに高次元の「体積と表面積の関係」へと拡張することで、現代的な解析学（ソボレフ不等式など）とも密接に関連していきます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                制約がない場合であれば、オイラー＝ラグランジュ方程式を解くだけで済みますが、制約がある場合にはどのように方程式を修正すればよいでしょうか。
                次節では、有限次元の微積分でおなじみの「ラグランジュ乗数法」を、汎関数の世界へと拡張します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>等周問題は、積分型の制約条件の下で別の汎関数を最適化する問題である。</li>
                    <li>歴史的には面積最大化（ディド問題）がルーツであり、物理的には長さ固定の懸垂線などが例に挙げられる。</li>
                    <li>この問題の数学的な一般化は、等周不等式として幾何学の基本法則の一つとなっている。</li>
                    <li>等周問題の解決には、制約条件の情報を組み込んだ新しい変分方程式が必要となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
