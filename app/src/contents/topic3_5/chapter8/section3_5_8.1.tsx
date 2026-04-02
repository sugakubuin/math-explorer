import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HarmonicFunctionsIntro() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章では、偏微分方程式論において熱方程式や波動方程式と並んで最も重要な基礎方程式の一つである<b>ラプラス方程式</b>を扱います。
                ラプラス方程式の解である<b>調和関数</b>は、その数学的な美しさだけでなく、電磁気、流体、重力などの物理ポテンシャルを記述する上で欠かせない概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">調和関数の定義と例</h2>

            <p className="leading-relaxed">
                まず、ラプラス作用素（ラプラシアン）を用いた調和関数の定義を行います。
            </p>

            <ContentBox type="definition" title="Definition 8.1-1 (調和関数)">
                <p>
                    開集合 <InlineMath math="\Omega \subset \mathbb{R}^n" /> 上で定義された <InlineMath math="C^2" /> 級の関数 <InlineMath math="u" /> が、
                    領域内のすべての点でラプラス方程式
                    <BlockMath math="\Delta u = \sum_{i=1}^n \frac{\partial^2 u}{\partial x_i^2} = 0" />
                    を満たすとき、<InlineMath math="u" /> を<b>調和関数</b>（Harmonic Function）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.1-1 (調和関数の代表例)">
                <p>
                    空間の次元に応じて、以下のような関数が調和関数となる：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>1 変数</b>：<InlineMath math="u(x) = ax + b" />。二階微分が常にゼロであるため、1 次関数に限られる。
                    </li>
                    <li>
                        <b>2 変数</b>：<InlineMath math="u(x, y) = x^2 - y^2" /> や <InlineMath math="u(x, y) = e^x \cos y" />。
                        実数部分と虚数部分がそれぞれコーシー・リーマンの方程式を満たすことから導かれる。
                    </li>
                    <li>
                        <b>n 変数（n \ge 3）</b>：放射対称な解 <InlineMath math="u(\mathbf{x}) = |\mathbf{x}|^{2-n}" />。
                        これは重力ポテンシャルや静電ポテンシャルに対応する重要な例である。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="複素解析との接続">
                <p>
                    2 次元の場合、正則関数 <InlineMath math="u + iv" /> の実部および虚部は常に調和関数となる（§3.2 参照）。
                    このため、複素解析における強力な手法（共役調和関数や等角写像など）を、2 次元の境界値問題の解決に直接応用することができる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">解析性と無限回微分可能性</h2>

            <p className="leading-relaxed">
                調和関数の最も驚くべき性質の一つは、単に 2 回微分可能であることを仮定しただけで、自動的に極めて高い滑らかさを獲得することです。
            </p>

            <ContentBox type="theorem" title="Theorem 8.1-1 (調和関数の解析性)">
                <p>
                    領域 <InlineMath math="\Omega" /> で調和な関数 <InlineMath math="u" /> は、<InlineMath math="\Omega" /> の各点で無限回微分可能（<InlineMath math="C^\infty" /> 級）であり、
                    さらに実解析的（Taylor 展開が収束する）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    次節で学ぶ<b>平均値定理</b>および<b>ポアソン積分公式</b>を用いると、調和関数の値は、
                    その点の近傍における積分値として表されることがわかる。
                    積分核（基本解など）が無限に滑らかであるため、この表示式を微分することで、<InlineMath math="u" /> 自身の無限回微分可能性が導かれる。
                    さらに、積分表示を用いて導関数の大きさを評価することで、Taylor 展開の収束性が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="楕円型方程式の平滑化効果">
                <p>
                    この性質は、ラプラス方程式が「情報の平均化」を極限まで押し進める性質を持つことを象徴している。
                    不連続な境界値を与えたとしても、領域の内部に入ると瞬時に滑らかさが回復する。
                    これは、有限の速度で情報が伝わる波動方程式（§6.2）とは対照的に、楕円型方程式が無限大の速度で影響を及ぼし合う系の平衡状態を記述していることを示唆している。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、この「解析性」の源泉とも言える、調和関数の最も特徴的な幾何学的性質である「平均値定理」を詳しく学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>調和関数はラプラス方程式 <InlineMath math="\Delta u = 0" /> の解であり、物理的には安定した平衡状態を記述する。</li>
                    <li>2 次元の調和関数は複素解析における正則関数と密接に関連している。</li>
                    <li>調和関数は単なる $C^2$ 級に留まらず、自動的に無限回微分可能かつ実解析的となる。</li>
                    <li>この「滑らかさ」は、楕円型方程式が持つ強力な平滑化効果の現れである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
