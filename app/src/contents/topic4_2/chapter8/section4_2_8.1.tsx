import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MeromorphicFunctionsAndDivisors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析IIの最後のテーマとして、コンパクトリーマン面上の代数的な構造を特徴づける「リーマン-ロッホの定理（Riemann-Roch theorem）」へと進みます。この定理は、与えられた極を持つ有理型関数がどれだけ自由に存在できるかを、面の位相的性質（種数）から計算する壮大な公式です。本節では、まず極や零点の分布を代数的に扱うための「除数（Divisor）」の概念を定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">除数の定義</h2>

            <p>
                関数がどこに何位の零点を持ち、どこに何位の極を持つかという情報は、点に対する整数の割り当てとして簡潔に表現することができます。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.1-1 (<b>除数</b>)</span>}>
                <p>
                    コンパクトリーマン面 <InlineMath math="S" /> 上の<b>除数（Divisor）</b> <InlineMath math="D" /> とは、<InlineMath math="S" /> 上の点 <InlineMath math="p" /> の形式的な整数係数の有限和のことである。
                </p>
                <BlockMath math="D = \sum_{p \in S} n_p \cdot p" />
                <p>
                    ここで、<InlineMath math="n_p \in \mathbb{Z}" /> であり、有限個の点を除いて <InlineMath math="n_p = 0" /> であるとする。
                </p>
            </ContentBox>

            <p>
                形式的な和とは、例えば「点 <InlineMath math="p_1" /> を <InlineMath math="2" /> 個、点 <InlineMath math="p_2" /> を <InlineMath math="-3" /> 個」といった情報の組をそのまま <InlineMath math="2p_1 - 3p_2" /> と足し算の形で書く便宜的な記法です。<InlineMath math="n_p" /> は点 <InlineMath math="p" /> における極や零点の重複度を表現するために使われます。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.1-2 (<b>除数の次数と除数群</b>)</span>}>
                <p>
                    除数 <InlineMath math="D = \sum n_p \cdot p" /> の<b>次数（Degree）</b>を、整数係数の総和として定義する。
                </p>
                <BlockMath math="\deg D = \sum_{p \in S} n_p" />
                <p>
                    2つの除数は各点の係数ごとに足し合わせることができ、この加法によって <InlineMath math="S" /> 上の除数全体はアーベル群をなす。これを除数群と呼び <InlineMath math="\mathrm{Div}(S)" /> と表す。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.1-1">
                <p>
                    リーマン球面（拡張複素平面）<InlineMath math="\hat{\mathbb{C}}" /> 上の有理関数
                </p>
                <BlockMath math="f(z) = \frac{z^2(z-1)}{(z+1)^3}" />
                <p>
                    の零点と極の配置を除数として書き下してみます。
                </p>
                <p>
                    零点は <InlineMath math="z = 0" />（2位）と <InlineMath math="z = 1" />（1位）です。極は分母から <InlineMath math="z = -1" />（3位）です。また無限遠点 <InlineMath math="z = \infty" /> については、分子の次数 <InlineMath math="3" /> と分母の次数 <InlineMath math="3" /> が等しいため極も零点も持ちません。したがって、<InlineMath math="\infty" /> での係数は <InlineMath math="0" /> です。
                </p>
                <p>
                    これを関数 <InlineMath math="f" /> から定まる除数として <InlineMath math="(f)" /> と書くと、
                </p>
                <BlockMath math="(f) = 2 \cdot 0 + 1 \cdot 1 - 3 \cdot (-1) + 0 \cdot \infty" />
                <p>
                    となります（点 <InlineMath math="-1" /> を <InlineMath math="(-1)" /> と表記しています）。各点でのゼロや極の位数をそのまま並べただけです。
                </p>
            </ContentBox>

            <p>
                このように、有理型関数から自然に得られる除数には特別な名前がついています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">主除数と線形同値</h2>

            <p>
                有理型関数の中身の情報（零点と極の位数の配置）を除数として抽出します。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.1-3 (<b>主除数</b>)</span>}>
                <p>
                    コンパクトリーマン面 <InlineMath math="S" /> 上の <InlineMath math="0" /> でない有理型関数 <InlineMath math="f" /> に対して、点 <InlineMath math="p" /> での零点または極の位数を <InlineMath math="\mathrm{ord}_p(f)" /> とする（<InlineMath math="m" /> 位の零点なら <InlineMath math="m" />、<InlineMath math="m" /> 位の極なら <InlineMath math="-m" />、正則で <InlineMath math="\neq 0" /> なら <InlineMath math="0" />）。
                </p>
                <p>
                    これを用いて作られる除数
                </p>
                <BlockMath math="(f) = \sum_{p \in S} \mathrm{ord}_p(f) \cdot p" />
                <p>
                    を、関数 <InlineMath math="f" /> の<b>主除数（Principal divisor）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                コンパクト面上では、特異点が集積できないため有理型関数の極や零点は有限個しかありません。したがって主除数は確かに有限和となり、除数の定義を満たします。主除数について、極めて重要な基本定理があります。
            </p>

            <ContentBox type="theorem" title="Theorem 8.1-1">
                <p>
                    コンパクトリーマン面上の任意の有理型関数の主除数の次数は <InlineMath math="0" /> である。
                </p>
                <BlockMath math="\deg(f) = 0" />
                <p>
                    すなわち、コンパクトリーマン面上の有理型関数は、重複度を込めて数えると「零点の個数と極の個数が必ず等しくなる」。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    複素解析Iで学んだ偏角の原理（あるいは留数定理の応用）によれば、有理型関数 <InlineMath math="f" /> の対数微分 <InlineMath math="f'/f" /> の周回積分は、領域内の零点の個数（重複度込み）から極の個数（重複度込み）を引いたものに <InlineMath math="2\pi i" /> を掛けた値に等しい。
                </p>
                <p>
                    コンパクトリーマン面 <InlineMath math="S" /> は境界を持たない閉曲面である。適当な三角形分割を行い、各三角形の境界上で（特異点を避けて）<InlineMath math="f'/f \, dz" /> を積分して全て足し合わせると、隣り合う辺の積分が逆向きに行われて互いに完全に打ち消し合う。
                </p>
                <p>
                    その結果、全積分は <InlineMath math="0" /> となる。一方でこの全積分の値は各領域のローラン展開の主部からの寄与、すなわち全平面における（零点の個数 <InlineMath math="-" /> 極の個数）の総和の <InlineMath math="2\pi i" /> 倍にほかならない。
                </p>
                <p>
                    したがって、（零点の個数）<InlineMath math="-" />（極の個数）＝ <InlineMath math="0" /> となり、<InlineMath math="\deg(f) = \sum \mathrm{ord}_p(f) = 0" /> が証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.1-2">
                <p>
                    Example 8.1-1 に戻って次数を確認しましょう。
                </p>
                <BlockMath math="(f) = 2 \cdot 0 + 1 \cdot 1 - 3 \cdot (-1) + 0 \cdot \infty" />
                <p>
                    次数は各係数の和なので、<InlineMath math="\deg(f) = 2 + 1 + (-3) + 0 = 0" /> となります。確かに Theorem 8.1-1 が成り立っています。
                </p>
            </ContentBox>

            <p>
                主除数群を <InlineMath math="\mathrm{Div}(S)" /> の部分群と見なすことで、除数に同値関係を入れることができます。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.1-4 (<b>線形同値</b>)</span>}>
                <p>
                    2つの除数 <InlineMath math="D_1, D_2" /> が<b>線形同値（linearly equivalent）</b>であるとは、ある有理型関数 <InlineMath math="f" /> が存在して
                </p>
                <BlockMath math="D_1 - D_2 = (f)" />
                <p>
                    と書けることをいい、<InlineMath math="D_1 \sim D_2" /> と表す。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="線形同値の意味">
                <p>
                    線形同値 <InlineMath math="D_1 \sim D_2" /> は、ある意味で「<InlineMath math="D_1" /> の極や零点の配置を、有理型関数を掛けたり割ったりすることで <InlineMath math="D_2" /> の極や零点の配置へ『連続的に変形』できる」という関係を表します。定理 8.1-1 より主除数の次数は <InlineMath math="0" /> なので、線形同値な除数は必ず同じ次数を持ちます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>コンパクトリーマン面上の点への整数係数の形式的な和を「除数」として定義し、その和を「次数」と呼ぶ。</li>
                    <li>有理型関数の零点や極の重複度から自然に定まる除数を「主除数」と呼び、コンパクト面上ではその次数は必ず <InlineMath math="0" /> になる。</li>
                    <li>ある有理型関数の主除数を足し引きして移り変わる関係を「線形同値」といい、これがリーマン面上の代数構造を分類する基本となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
