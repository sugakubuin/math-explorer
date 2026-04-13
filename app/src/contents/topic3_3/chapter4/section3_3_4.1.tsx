import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LpSpaceDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章ではルベーグ可積分な関数の空間 <InlineMath math="L^1" /> を導入しました。
                ルベーグ積分論の真価は、二乗可積分な関数の空間や、より一般の <InlineMath math="p" /> 乗可積分な関数の空間を統一的に扱える点にあります。
                本節では、関数空間の基礎となる <InlineMath math="L^p" /> 空間の定義とそのノルムについて学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math='L^p'></InlineMath> 空間の定義</h2>

            <p>
                測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> 上の可測関数 <InlineMath math="f" /> に対して、その絶対値の <InlineMath math="p" /> 乗が可積分であるとき、それを <InlineMath math="p" /> 乗可積分であるといいます。
            </p>

            <ContentBox type="definition" title={<span>Definition 4.1-1 (<InlineMath math="L^p"></InlineMath> 空間)</span>}>
                <p>
                    <InlineMath math="1 \leq p < \infty" /> とする。測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> 上の複素数値（または実数値）可測関数 <InlineMath math="f" /> が
                    <BlockMath math="\int_X |f(x)|^p \, d\mu(x) < \infty" />
                    を満たすとき、<InlineMath math="f" /> は <b><InlineMath math="p" /> 乗可積分 (p-integrable)</b> であるという。
                    このような関数全体の集合を <InlineMath math="\mathcal{L}^p(X, \mu)" /> と書く。
                </p>
                <p className="mt-4">
                    さらに、ほとんど至る所 (a.e.) で等しい関数を同一視して得られる同値類の集合を <b><InlineMath math="L^p" /> 空間</b> と呼び、<InlineMath math="L^p(X, \mu)" /> と表記する。
                </p>
            </ContentBox>

            <p className="mt-6">
                単に集合として定義するだけでなく、関数間の「距離」や「大きさ」を測るためにノルムを導入します。
            </p>

            <ContentBox type="definition" title={<span>Definition 4.1-2 (<InlineMath math="L^p"></InlineMath>ノルム)</span>}>
                <p>
                    <InlineMath math="f \in L^p(X, \mu)" /> に対し、その <b><InlineMath math="L^p" /> ノルム (norm)</b> を次で定義する：
                    <BlockMath math="\|f\|_p := \left( \int_X |f(x)|^p \, d\mu(x) \right)^{1/p}" />
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 4.1-1 (べき関数の <InlineMath math="L^p"></InlineMath> 性)</span>}>
                <p>
                    実数直線上のルベーグ測度 <InlineMath math="\lambda" /> を考える。
                    開区間 <InlineMath math="(0, 1)" /> 上の関数 <InlineMath math="f(x) = x^\alpha" /> (<InlineMath math="\alpha \in \mathbb{R}" />) が <InlineMath math="L^p(0, 1)" /> に属するか判定しよう。
                </p>
                <p className="mt-4">
                    定義に従い判定すると：
                    <BlockMath math="\int_0^1 |x^\alpha|^p \, dx = \int_0^1 x^{p\alpha} \, dx" />
                    これが収束する条件は <InlineMath math="p\alpha > -1" />、すなわち <InlineMath math="\alpha > -1/p" /> である。
                    例えば <InlineMath math="f(x) = 1/\sqrt{x}" /> は、<InlineMath math="p=1" /> では <InlineMath math="L^1" /> に属するが（<InlineMath math="-1/2 > -1" />）、<InlineMath math="p=2" /> では <InlineMath math="L^2" /> に属さない（<InlineMath math="-1/2 \ngtr -1/2" />）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="なぜ同一視が必要なのか？">
                <p>
                    ノルムの性質の一つに「<InlineMath math="\|f\| = 0 \iff f = 0" />」があります。
                    もし a.e. で 0 であるが、どこか一点で非零の値をとる関数（例えばディリクレ関数の一点修正版など）を許すと、積分値は 0 になり、この性質が崩れてしまいます。
                    数学的に「空間」として厳密に扱う（特に完備性などを議論する）ために、a.e. で一致する関数を「同じもの」とみなす同値類の考え方が不可欠なのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b><InlineMath math="L^p" /> 空間</b> は、絶対値の <InlineMath math="p" /> 乗が可積分な関数の同値類（a.e. 同一視）からなる。</li>
                    <li><InlineMath math="L^p" /> ノルムは <InlineMath math="\|f\|_p = (\int |f|^p)^{1/p}" /> で定義される。</li>
                    <li>関数の減衰や特異性の度合いによって、どの <InlineMath math="L^p" /> 空間に属するかが決まる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
