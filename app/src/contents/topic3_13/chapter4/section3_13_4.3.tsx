import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaussianAndMeanCurvatures() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                2つの主曲率 <InlineMath math="\kappa_1, \kappa_2" /> を得たことで、曲面がどのように曲がっているかを完全に記述できるようになりました。しかし、これら2つの値を個別に扱うよりも、それらの積と和（平均）を考えることで、曲面の極めて重要な幾何学的性質が浮かび上がってきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ガウス曲率と平均曲率</h2>

            <p className="leading-relaxed">
                主曲率の積をガウス曲率、平均を平均曲率と定義します。これらは前節で求めた根と係数の関係から、第一・第二基本形式の係数だけで直接計算できます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.3-1 (ガウス曲率と平均曲率)"
            >
                <p>
                    点 <InlineMath math="p" /> における2つの主曲率を <InlineMath math="\kappa_1, \kappa_2" /> とする。
                </p>
                <p>
                    これらの積を<strong>ガウス曲率（Gaussian curvature）</strong>といい、<InlineMath math="K" /> で表す。
                    <BlockMath math="K = \kappa_1 \kappa_2 = \frac{eg - f^2}{EG - F^2}" />
                </p>
                <p>
                    これらの算術平均を<strong>平均曲率（mean curvature）</strong>といい、<InlineMath math="H" /> で表す。
                    <BlockMath math="H = \frac{\kappa_1 + \kappa_2}{2} = \frac{eG - 2fF + gE}{2(EG - F^2)}" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                代表的な曲面について、これらの曲率を計算して比較してみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 4.3-1 (各曲面の曲率の比較)"
            >
                <ul className="list-disc list-inside space-y-4">
                    <li><strong>半径 <InlineMath math="r" /> の球面：</strong><br />
                        主曲率はすべての方向で <InlineMath math="\kappa_1 = \kappa_2 = 1/r" />。<br />
                        ガウス曲率 <InlineMath math="K = (1/r) \cdot (1/r) = 1/r^2 > 0" />。<br />
                        平均曲率 <InlineMath math="H = (1/r + 1/r)/2 = 1/r" />。
                    </li>
                    <li><strong>平面：</strong><br />
                        全く曲がっていないので <InlineMath math="\kappa_1 = \kappa_2 = 0" />。<br />
                        ガウス曲率 <InlineMath math="K = 0 \cdot 0 = 0" />。<br />
                        平均曲率 <InlineMath math="H = 0" />。
                    </li>
                    <li><strong>半径 <InlineMath math="r" /> の円柱：</strong><br />
                        周方向と軸方向で主曲率は <InlineMath math="\kappa_1 = 1/r, \kappa_2 = 0" />。<br />
                        ガウス曲率 <InlineMath math="K = (1/r) \cdot 0 = 0" />。<br />
                        平均曲率 <InlineMath math="H = (1/r + 0)/2 = 1/(2r)" />。
                    </li>
                    <li><strong>鞍点型曲面（双曲放物面）：</strong><br />
                        馬の鞍のように、ある方向には上に反り、別の方向には下に反っている曲面では、主曲率の符号が逆になる（<InlineMath math="\kappa_1 > 0 > \kappa_2" /> など）。<br />
                        このとき、ガウス曲率は必ず負（<InlineMath math="K < 0" />）となる。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ガウス曲率の符号と曲面の局所的形状"
            >
                <p>
                    ガウス曲率 <InlineMath math="K" /> の符号は、接平面の近くで曲面がどのような形をしているか（局所的な形）を見事に特徴づけます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong><InlineMath math="K > 0" />（楕円点）：</strong> 2つの主曲率が同符号。曲面はお椀のように一つの方向に丸く膨らんでおり、接平面の片側に完全に留まります。</li>
                    <li><strong><InlineMath math="K < 0" />（双曲点）：</strong> 2つの主曲率が異符号。曲面は鞍（ポテトチップス）のような形をしており、接平面を突き抜けて交差します。</li>
                    <li><strong><InlineMath math="K = 0" />（放物点）：</strong> 少なくとも一方の主曲率がゼロ。円柱のように、一方向には真っ直ぐな線が含まれるような形状になります。</li>
                </ul>
                <p>
                    円柱と平面はどちらも <InlineMath math="K=0" /> であり、これらが等長（紙を曲げて作れる）であることと符合しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">極小曲面</h2>

            <p className="leading-relaxed">
                平均曲率 <InlineMath math="H" /> が常にゼロであるような曲面は、物理的にも数学的にも特別な意味を持ちます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.3-2 (極小曲面)"
            >
                <p>
                    曲面上のすべての点において、平均曲率がゼロ（<InlineMath math="H = 0" />）であるような曲面を<strong>極小曲面（minimal surface）</strong>という。
                </p>
                <p>
                    <InlineMath math="H = (\kappa_1 + \kappa_2)/2 = 0" /> であるから、極小曲面の各点では常に <InlineMath math="\kappa_1 = -\kappa_2" /> が成り立っている。すなわち、どの点も鞍点（<InlineMath math="K = -\kappa_1^2 \leq 0" />）であるか、完全に平らな点である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                極小曲面という名前は、固定された境界枠（例えば針金の輪）に張られた曲面の中で「面積が最小」になる曲面がこの条件を満たすことに由来します。つまり、石鹸水のシャボン膜が形成する自然な形が極小曲面です。
            </p>

            <ContentBox
                type="example"
                title="Example 4.3-2 (カテノイド / 懸垂面)"
            >
                <p>
                    2つの平行な円形の針金枠の間にシャボン膜を張ると、「カテノイド（懸垂面）」と呼ばれるくびれた筒状の曲面が現れる。これは次のようにパラメータ表示される。
                    <BlockMath math="\mathbf{x}(u,v) = (\cosh u \cos v, \cosh u \sin v, u)" />
                    （<InlineMath math="\cosh u" /> は双曲線関数）
                </p>
                <p>
                    この曲面について第一・第二基本形式を計算して平均曲率を求めると、見事に <InlineMath math="H = 0" /> となる。また、ガウス曲率は <InlineMath math="K = -1/\cosh^4 u < 0" /> となり、至る所が鞍点型（くびれている）であることがわかる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="極小曲面の微分方程式"
            >
                <p>
                    ある関数 <InlineMath math="z = f(x,y)" /> のグラフとして表される曲面が極小曲面（<InlineMath math="H=0" />）となる条件は、ラグランジュの極小曲面方程式と呼ばれる準線形偏微分方程式で記述されます。
                    <BlockMath math="(1 + f_y^2)f_{xx} - 2f_x f_y f_{xy} + (1 + f_x^2)f_{yy} = 0" />
                </p>
                <p>
                    この方程式の解の性質は、複素解析（正則関数）や変分法と深く結びついており、幾何解析と呼ばれる広大な研究分野を形成しています。詳しくは「微分幾何II（4-6）」などで扱われます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>2つの主曲率の積をガウス曲率 <InlineMath math="K" />、平均を平均曲率 <InlineMath math="H" /> といい、行列式とトレースを用いて基本形式の係数から直接計算できる。</li>
                    <li>ガウス曲率の符号（正、負、ゼロ）は、曲面がお椀型か、鞍型か、筒型かという局所的な形状を完全に分類する。</li>
                    <li>平均曲率が常にゼロの曲面を極小曲面といい、シャボン膜のような面積を最小化する物理的形状に対応する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}