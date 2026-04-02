import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VectorDefinition() {
    return (
        <section className="space-y-12">
            {/* Introduction */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                    はじめに
                </p>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 border-b-2 border-slate-200 dark:border-slate-700 pb-2">
                    線形代数学とはどのような学問か
                </h2>
                <p className="leading-relaxed">
                    線形代数学（Linear Algebra）は、<strong>ベクトル</strong>と<strong>行列</strong>を中心とした数学の一分野です。
                    「線形（linear）」とは、大雑把にいえば<em>まっすぐ・比例的</em>であることを意味します。
                    この学問では、そのような「まっすぐな」構造を持つ対象を系統的に扱う道具立てを整えます。
                </p>

                {/* Column Box */}
                <ContentBox type="column" title="なぜ線形代数を学ぶのか">
                    <p>
                        線形代数は、数学のほぼあらゆる分野の土台となります。
                        たとえば微分方程式を解くとき、最小二乗法で実験データを近似するとき、
                        コンピュータグラフィクスで3次元物体を回転させるとき、
                        機械学習でニューラルネットワークを設計するとき——
                        いずれの場面でもベクトルと行列の言葉が不可欠です。
                        「高校数学の延長」と侮らず、本腰を入れて取り組む価値のある分野です。
                    </p>
                </ContentBox>

                <p className="leading-relaxed">
                    高校では2次元・3次元の幾何ベクトル（矢印）を学んだはずです。
                    大学の線形代数では、まずその計算技術を確かなものにし、
                    やがて「<InlineMath math="n" /> 次元のベクトル」「行列による変換」「固有値・固有ベクトル」
                    といった概念へと歩を進めます。
                </p>
                <p className="leading-relaxed">
                    本章ではその出発点として、<strong><InlineMath math="\mathbb{R}^n" /> のベクトル</strong>（実数成分を <InlineMath math="n" /> 個並べたもの）を定義し、
                    演算の仕方と幾何学的な意味を丁寧に確認します。
                </p>
            </div>

            {/* divider */}
            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 1.1 Definition */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                    ベクトルとは何か
                </h2>
                <p className="leading-relaxed">
                    高校では「大きさと向きを持つ量」としてベクトルを導入しました。
                    大学の線形代数では、これをより一般的な形——<strong>実数を縦に並べたもの</strong>——として再定義します。
                </p>

                {/* Definition 1.1-1: n-dim vector */}
                <ContentBox type="definition" title="Definition 1.1-1 （n 次元実ベクトル）">
                    <p className="mb-4">
                        <InlineMath math="n" /> 個の実数 <InlineMath math="a_1, a_2, \ldots, a_n \in \mathbb{R}" /> を縦に並べたもの
                    </p>
                    <BlockMath math="\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}" />
                    <p className="mt-4">
                        を<strong><InlineMath math="n" /> 次元（実）列ベクトル</strong>という。
                        各 <InlineMath math="a_i" /> をベクトルの<strong>第 <InlineMath math="i" /> 成分</strong>（component）と呼ぶ。
                        <InlineMath math="n" /> 次元列ベクトル全体の集合を <InlineMath math="\mathbb{R}^n" /> と書く。
                    </p>
                </ContentBox>

                <p className="leading-relaxed">
                    高校で習った「矢印」のベクトルは <InlineMath math="n=2" /> や <InlineMath math="n=3" /> の場合に対応します。
                    定義に登場した記号をまとめておきます。
                </p>

                {/* Symbol Table */}
                <ul className="list-disc list-inside space-y-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md p-4 my-6 text-sm">
                    <li><strong className="font-serif text-amber-600 dark:text-amber-400 text-base mr-2"><InlineMath math="\mathbb{R}" /></strong> 実数全体の集合。</li>
                    <li><strong className="font-serif text-amber-600 dark:text-amber-400 text-base mr-2"><InlineMath math="\mathbb{R}^n" /></strong> <InlineMath math="n" /> 次元列ベクトル全体の集合。<InlineMath math="n=2" /> のとき平面、<InlineMath math="n=3" /> のとき空間に対応する。</li>
                    <li><strong className="font-serif text-amber-600 dark:text-amber-400 text-base mr-2"><InlineMath math="a_i" /></strong> ベクトル <InlineMath math="\mathbf{a}" /> の第 <InlineMath math="i" /> 成分。</li>
                </ul>

                {/* Example 1.1-1 */}
                <ContentBox type="example" title="Example 1.1-1">
                    <p className="mb-2">以下はいずれも列ベクトルの例です。</p>
                    {/* PC/Tablet: 改行なし */}
                    <div className="hidden md:block">
                        <BlockMath math="\mathbf{a} = \begin{pmatrix} 3 \\ -1 \end{pmatrix} \in \mathbb{R}^2, \qquad \mathbf{b} = \begin{pmatrix} 1 \\ 0 \\ -2 \end{pmatrix} \in \mathbb{R}^3, \qquad \mathbf{c} = \begin{pmatrix} 2 \\ 5 \\ 0 \\ -3 \end{pmatrix} \in \mathbb{R}^4." />
                    </div>
                    {/* Mobile: 改行あり */}
                    <div className="block md:hidden overflow-x-auto">
                        <BlockMath math="\begin{aligned} \mathbf{a} &= \begin{pmatrix} 3 \\ -1 \end{pmatrix} \in \mathbb{R}^2, \\ \mathbf{b} &= \begin{pmatrix} 1 \\ 0 \\ -2 \end{pmatrix} \in \mathbb{R}^3, \\ \mathbf{c} &= \begin{pmatrix} 2 \\ 5 \\ 0 \\ -3 \end{pmatrix} \in \mathbb{R}^4. \end{aligned}" />
                    </div>
                    <p className="mt-4">
                        <InlineMath math="\mathbf{a}" /> は第1成分が <InlineMath math="3" />、第2成分が <InlineMath math="-1" /> の2次元ベクトルです。<br />
                        <InlineMath math="\mathbf{c}" /> のような4次元以上のベクトルは「矢印」として図示できませんが、定義は全く同様に成立します。
                    </p>
                </ContentBox>

                {/* Remark: Row Vectors */}
                <ContentBox type="remark" title="Remark （行ベクトル）">
                    <p>
                        成分を<em>横</em>に並べたものを<strong>行ベクトル</strong>といいます：
                    </p>
                    <BlockMath math="\mathbf{a}^\top = \begin{pmatrix} a_1 & a_2 & \cdots & a_n \end{pmatrix}." />
                    <p>
                        本テキストでは特に断りがない限り「ベクトル」は<strong>列ベクトル</strong>を指します。
                        記号 <InlineMath math="\top" /> は転置（transpose）を表し、列ベクトルを行ベクトルに変換します。転置については Chapter 2 で詳しく扱います。
                    </p>
                </ContentBox>

                {/* Definition 1.1-2: Zero Vector */}
                <ContentBox type="definition" title="Definition 1.1-2 （零ベクトル）">
                    <p className="mb-2">全成分が <InlineMath math="0" /> のベクトル</p>
                    <BlockMath math="\mathbf{0} = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix}" />
                    <p className="mt-2">を<strong>零ベクトル</strong>（zero vector）という。</p>
                </ContentBox>

                <hr className="border-slate-200 dark:border-slate-800 my-10" />

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-10 mb-4">ベクトルの相等</h3>
                <p>2つのベクトルが「等しい」とはどういう意味かを明確にしておきます。</p>

                {/* Definition 1.1-3: Equality */}
                <ContentBox type="definition" title="Definition 1.1-3 （ベクトルの相等）">
                    <p>
                        <InlineMath math="\mathbf{a}, \mathbf{b} \in \mathbb{R}^n" /> に対し、
                        <strong>全ての</strong> <InlineMath math="i = 1, 2, \ldots, n" /> について
                        <InlineMath math="a_i = b_i" /> が成り立つとき、<InlineMath math="\mathbf{a} = \mathbf{b}" /> と書き、
                        <InlineMath math="\mathbf{a}" /> と <InlineMath math="\mathbf{b}" /> は<strong>等しい</strong>という。
                    </p>
                </ContentBox>

                {/* Example 1.1-2 */}
                <ContentBox type="example" title="Example 1.1-2">
                    <p className="mb-2">次の等式が成り立つように実数 <InlineMath math="x, y" /> を定めよ。</p>
                    <BlockMath math="\begin{pmatrix} x + y \\ 2x - y \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}" />
                    <p className="mt-4 font-bold">解.</p>
                    <p>Definition 1.1-3 より成分ごとに等式が成立すればよいので、</p>
                    <BlockMath math="x + y = 5, \qquad 2x - y = 1." />
                    <p>2式を足すと <InlineMath math="3x = 6" />、したがって <InlineMath math="x = 2, \ y = 3" />。</p>
                </ContentBox>

                <hr className="border-slate-200 dark:border-slate-800 my-10" />

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-10 mb-4">
                    <InlineMath math="\mathbb{R}^2" /> における幾何学的解釈
                </h3>
                <p>
                    <InlineMath math="n=2" /> の場合、ベクトル <InlineMath math="\mathbf{a} = \begin{pmatrix}a_1 \\ a_2\end{pmatrix}" /> は平面上の点 <InlineMath math="(a_1, a_2)" /> または
                    原点からその点へ向かう<strong>矢印</strong>として解釈できます。
                </p>

                {/* Figure SVG */}
                <div className="flex flex-col items-center my-8">
                    <svg width="320" height="260" viewBox="-20 -20 320 260" className="max-w-full">
                        <defs>
                            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L8,3 z" className="fill-slate-900 dark:fill-slate-100" />
                            </marker>
                            <marker id="arrow-vec" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L8,3 z" className="fill-blue-800 dark:fill-blue-400" />
                            </marker>
                        </defs>

                        {/* Grid */}
                        <g className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="0.5">
                            <line x1="60" y1="10" x2="60" y2="220" />
                            <line x1="120" y1="10" x2="120" y2="220" />
                            <line x1="180" y1="10" x2="180" y2="220" />
                            <line x1="240" y1="10" x2="240" y2="220" />
                            <line x1="10" y1="60" x2="280" y2="60" />
                            <line x1="10" y1="120" x2="280" y2="120" />
                            <line x1="10" y1="180" x2="280" y2="180" />
                        </g>

                        {/* Axes */}
                        <line x1="0" y1="180" x2="285" y2="180" className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="1.5" markerEnd="url(#arrow)" />
                        <line x1="60" y1="235" x2="60" y2="5" className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="1.5" markerEnd="url(#arrow)" />

                        {/* Labels */}
                        <text x="290" y="184" className="font-serif text-base fill-slate-900 dark:fill-slate-100 italic">x</text>
                        <text x="52" y="0" className="font-serif text-base fill-slate-900 dark:fill-slate-100 italic">y</text>

                        {/* Ticks */}
                        <g className="font-serif text-xs fill-slate-600 dark:fill-slate-400">
                            <text x="116" y="196">1</text>
                            <text x="176" y="196">2</text>
                            <text x="236" y="196">3</text>
                            <text x="44" y="124">1</text>
                            <text x="44" y="64">2</text>
                        </g>

                        {/* Vector a */}
                        <line x1="60" y1="180" x2="236" y2="60"
                            className="stroke-blue-800 dark:stroke-blue-400" strokeWidth="2.5" markerEnd="url(#arrow-vec)" />

                        {/* Components */}
                        <line x1="60" y1="60" x2="236" y2="60" className="stroke-blue-800 dark:stroke-blue-400" strokeWidth="1" strokeDasharray="5,4" opacity="0.6" />
                        <line x1="236" y1="180" x2="236" y2="60" className="stroke-blue-800 dark:stroke-blue-400" strokeWidth="1" strokeDasharray="5,4" opacity="0.6" />

                        {/* Dots */}
                        <circle cx="236" cy="60" r="4" className="fill-blue-800 dark:fill-blue-400" />
                        <circle cx="60" cy="180" r="4" className="fill-slate-900 dark:fill-slate-100" />

                        {/* Labels for Vector */}
                        <text x="248" y="55" className="font-serif text-sm fill-blue-800 dark:fill-blue-400 font-bold">(3, 2)</text>
                        <text x="142" y="110" className="font-serif text-base fill-blue-800 dark:fill-blue-400 italic font-bold">a</text>
                        <text x="50" y="196" className="font-serif text-xs fill-slate-600 dark:fill-slate-400">O</text>

                        {/* Component Labels */}
                        <text x="130" y="198" className="font-serif text-sm fill-amber-600 dark:fill-amber-400 italic">a₁ = 3</text>
                        <text x="240" y="130" className="font-serif text-sm fill-amber-600 dark:fill-amber-400 italic">a₂ = 2</text>
                    </svg>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic text-center">
                        図 1.1 &nbsp; <InlineMath math="\mathbf{a} = \begin{pmatrix}3\\2\end{pmatrix}" /> の幾何学的表示。<br />
                        第1成分が <InlineMath math="x" /> 方向、第2成分が <InlineMath math="y" /> 方向の変位を表す。
                    </p>
                </div>

                {/* Remark: Arbitrary Origin */}
                <ContentBox type="remark" title="Remark （矢印の始点は任意）">
                    <p>
                        ベクトルは<em>向きと大きさのみ</em>で決まります。したがって、矢印の始点を原点に置く必要はなく、
                        平行移動しても同じベクトルを表します。これはベクトルの「自由さ」を表す重要な性質です。
                        ただし本テキストでは計算を明快にするため、原点始点の表示を標準とします。
                    </p>
                </ContentBox>

                <hr className="border-slate-200 dark:border-slate-800 my-10" />

                {/* Summary */}
                <ContentBox type="remark" title="§1.1 のまとめ">
                    <p className="mb-2">この節で学んだことを振り返ります。</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><InlineMath math="n" /> 次元列ベクトルは、<InlineMath math="n" /> 個の実数を縦に並べたものです（Definition 1.1-1）。</li>
                        <li>全成分が <InlineMath math="0" /> のベクトルを零ベクトル <InlineMath math="\mathbf{0}" /> と呼びます（Definition 1.1-2）。</li>
                        <li>2つのベクトルが等しいとは、全成分が一致することを意味します（Definition 1.1-3）。</li>
                        <li><InlineMath math="n=2,3" /> では、ベクトルを平面・空間上の矢印として視覚化できます。</li>
                    </ul>
                </ContentBox>
            </div>
        </section>
    );
}
