import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function VectorOperations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では <InlineMath math="\mathbb{R}^n" /> のベクトルを「実数を縦に並べたもの」として定義しました。
                本節では、ベクトル同士の<strong>和・差</strong>、およびベクトルと実数との<strong>スカラー倍</strong>を定義し、
                その計算規則と幾何学的な意味を確認します。
                これらの演算は線形代数のあらゆる計算の出発点となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 ベクトルの和
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトルの和と差</h2>

            {/* Definition 1.2-1 */}
            <ContentBox type="definition" title="Definition 1.2-1 （ベクトルの和・差）">
                <p>
                    <InlineMath math="\mathbf{a}, \mathbf{b} \in \mathbb{R}^n" /> を
                </p>
                <BlockMath math="\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}, \qquad \mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}" />
                <p>
                    とする。このとき <strong>和</strong> <InlineMath math="\mathbf{a} + \mathbf{b}" /> および <strong>差</strong> <InlineMath math="\mathbf{a} - \mathbf{b}" /> を次で定める：
                </p>
                <BlockMath math="\mathbf{a} + \mathbf{b} = \begin{pmatrix} a_1 + b_1 \\ a_2 + b_2 \\ \vdots \\ a_n + b_n \end{pmatrix}, \qquad \mathbf{a} - \mathbf{b} = \begin{pmatrix} a_1 - b_1 \\ a_2 - b_2 \\ \vdots \\ a_n - b_n \end{pmatrix}." />
                <p>
                    すなわち、<strong>対応する成分どうしを足す（引く）</strong>ことで和（差）を計算する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （次元の一致）">
                <p>
                    和・差は<strong>同じ次元</strong>のベクトル同士にしか定義されません。
                    たとえば <InlineMath math="\mathbb{R}^2" /> のベクトルと <InlineMath math="\mathbb{R}^3" /> のベクトルを足すことはできません。
                </p>
            </ContentBox>

            {/* Example 1.2-1 */}
            <ContentBox type="example" title="Example 1.2-1">
                <p>
                    次の計算をせよ。
                </p>
                <BlockMath math="\mathbf{a} = \begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 1 \\ 4 \\ -3 \end{pmatrix}" />
                <p>
                    <strong>（1）</strong> <InlineMath math="\mathbf{a} + \mathbf{b}" /> &nbsp;&nbsp;
                    <strong>（2）</strong> <InlineMath math="\mathbf{a} - \mathbf{b}" />
                </p>
                <p className="font-bold mt-4">解．</p>
                <BlockMath math="(1)\quad \mathbf{a} + \mathbf{b} = \begin{pmatrix} 3+1 \\ -1+4 \\ 2+(-3) \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \\ -1 \end{pmatrix}." />
                <BlockMath math="(2)\quad \mathbf{a} - \mathbf{b} = \begin{pmatrix} 3-1 \\ -1-4 \\ 2-(-3) \end{pmatrix} = \begin{pmatrix} 2 \\ -5 \\ 5 \end{pmatrix}." />
            </ContentBox>

            {/* 図：和の平行四辺形法則 */}
            <h3 className="text-xl font-bold mt-10 mb-4">和の幾何学的意味（<InlineMath math="\mathbb{R}^2" /> の場合）</h3>
            <p>
                <InlineMath math="\mathbb{R}^2" /> では、ベクトルの和は<strong>平行四辺形の法則</strong>として図示できます。
                2つのベクトル <InlineMath math="\mathbf{a}, \mathbf{b}" /> を辺とする平行四辺形を描いたとき、
                その対角線が <InlineMath math="\mathbf{a} + \mathbf{b}" /> に対応します。
            </p>

            <div className="flex flex-col items-center my-8">
                <svg width="340" height="280" viewBox="-10 -15 340 280" className="max-w-full">
                    <defs>
                        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#1a1208" className="fill-slate-900 dark:fill-slate-100" />
                        </marker>
                        <marker id="arr-a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#1a3a5c" className="fill-blue-800 dark:fill-blue-400" />
                        </marker>
                        <marker id="arr-b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#4a9955" className="fill-emerald-600 dark:fill-emerald-400" />
                        </marker>
                        <marker id="arr-s" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#b03030" className="fill-rose-700 dark:fill-rose-400" />
                        </marker>
                    </defs>

                    {/* グリッド */}
                    <g stroke="#e8e0d0" strokeWidth="1" className="stroke-slate-200 dark:stroke-slate-700">
                        <line x1="60" y1="10" x2="60" y2="245" />
                        <line x1="120" y1="10" x2="120" y2="245" />
                        <line x1="180" y1="10" x2="180" y2="245" />
                        <line x1="240" y1="10" x2="240" y2="245" />
                        <line x1="300" y1="10" x2="300" y2="245" />
                        <line x1="10" y1="60" x2="320" y2="60" />
                        <line x1="10" y1="120" x2="320" y2="120" />
                        <line x1="10" y1="180" x2="320" y2="180" />
                        <line x1="10" y1="240" x2="320" y2="240" />
                    </g>

                    {/* 軸 */}
                    <line x1="0" y1="240" x2="318" y2="240" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" markerEnd="url(#arr)" />
                    <line x1="60" y1="255" x2="60" y2="5" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" markerEnd="url(#arr)" />
                    <text x="322" y="244" fontSize="15" className="fill-slate-800 dark:fill-slate-200 font-serif italic">x</text>
                    <text x="52" y="2" fontSize="15" className="fill-slate-800 dark:fill-slate-200 font-serif italic">y</text>
                    <text x="50" y="256" fontSize="13" className="fill-slate-600 dark:fill-slate-400 font-serif">O</text>

                    {/* 目盛り */}
                    <g fontSize="11" className="fill-slate-600 dark:fill-slate-400 font-serif">
                        <text x="116" y="256">1</text>
                        <text x="176" y="256">2</text>
                        <text x="236" y="256">3</text>
                        <text x="296" y="256">4</text>
                        <text x="44" y="184">1</text>
                        <text x="44" y="124">2</text>
                        <text x="44" y="64">3</text>
                    </g>

                    {/* 平行四辺形の補助線 */}
                    <line x1="180" y1="180" x2="300" y2="60" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.2" strokeDasharray="6,4" opacity="0.55" />
                    <line x1="180" y1="120" x2="300" y2="60" className="stroke-blue-800 dark:stroke-blue-400" strokeWidth="1.2" strokeDasharray="6,4" opacity="0.55" />

                    {/* Vector a = (2, 2) */}
                    <line x1="60" y1="240" x2="175" y2="125" className="stroke-blue-800 dark:stroke-blue-400" strokeWidth="2.5" markerEnd="url(#arr-a)" />
                    {/* Vector b = (2, 1) */}
                    <line x1="60" y1="240" x2="175" y2="185" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" markerEnd="url(#arr-b)" />
                    {/* Vector a+b = (4, 3) */}
                    <line x1="60" y1="240" x2="294" y2="66" className="stroke-rose-700 dark:stroke-rose-400" strokeWidth="2.5" markerEnd="url(#arr-s)" />

                    {/* dots */}
                    <circle cx="60" cy="240" r="4" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="180" cy="120" r="4" className="fill-blue-800 dark:fill-blue-400" />
                    <circle cx="180" cy="180" r="4" className="fill-emerald-600 dark:fill-emerald-400" />
                    <circle cx="300" cy="60" r="4" className="fill-rose-700 dark:fill-rose-400" />

                    {/* Labels */}
                    <text x="185" y="115" fontSize="13" className="fill-blue-800 dark:fill-blue-400 font-serif italic">(2, 2)</text>
                    <text x="185" y="185" fontSize="13" className="fill-emerald-600 dark:fill-emerald-400 font-serif italic">(2, 1)</text>
                    <text x="305" y="60" fontSize="13" className="fill-rose-700 dark:fill-rose-400 font-serif italic">(4, 3)</text>

                    <text x="96" y="168" fontSize="16" className="fill-blue-800 dark:fill-blue-400 font-serif italic font-bold">a</text>
                    <text x="96" y="216" fontSize="16" className="fill-emerald-600 dark:fill-emerald-400 font-serif italic font-bold">b</text>
                    <text x="172" y="148" fontSize="16" className="fill-rose-700 dark:fill-rose-400 font-serif italic font-bold">a+b</text>
                </svg>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic text-center">
                    図 1.2 &nbsp; <InlineMath math="\mathbf{a} = \begin{pmatrix}2\\2\end{pmatrix},\ \mathbf{b} = \begin{pmatrix}2\\1\end{pmatrix}" /> の和。<br />
                    2つのベクトルを辺とする平行四辺形の対角線が <InlineMath math="\mathbf{a}+\mathbf{b}" /> を与える。
                </p>
            </div>

            <p>
                差 <InlineMath math="\mathbf{a} - \mathbf{b}" /> は <InlineMath math="\mathbf{b}" /> の矢印の先端から <InlineMath math="\mathbf{a}" /> の矢印の先端へ向かうベクトルと解釈できます。
                これは <InlineMath math="\mathbf{a} + (-\mathbf{b})" /> と同じであり、<InlineMath math="-\mathbf{b}" /> は <InlineMath math="\mathbf{b}" /> と逆向きの同じ長さのベクトルです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 スカラー倍
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">スカラー倍</h2>

            {/* Definition 1.2-2 */}
            <ContentBox type="definition" title="Definition 1.2-2 （スカラー倍）">
                <p>
                    <InlineMath math="\mathbf{a} \in \mathbb{R}^n" /> および実数（<strong>スカラー</strong>）<InlineMath math="c \in \mathbb{R}" /> に対し、
                    <strong>スカラー倍</strong> <InlineMath math="c\mathbf{a}" /> を次で定める：
                </p>
                <BlockMath math="c\mathbf{a} = c \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix} = \begin{pmatrix} c a_1 \\ c a_2 \\ \vdots \\ c a_n \end{pmatrix}." />
                <p>
                    すなわち、<strong>各成分を <InlineMath math="c" /> 倍する</strong>ことでスカラー倍を計算する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （「スカラー」とは）">
                <p>
                    線形代数では、ベクトルに対して「ただの実数」を<strong>スカラー（scalar）</strong>と呼んで区別します。
                    本テキストの範囲ではスカラー <InlineMath math="= \mathbb{R}" /> の元と考えてください。
                    また <InlineMath math="c = -1" /> のとき <InlineMath math="(-1)\mathbf{a}" /> を <InlineMath math="-\mathbf{a}" /> と書き、
                    <InlineMath math="\mathbf{a}" /> の<strong>逆ベクトル</strong>といいます。
                </p>
            </ContentBox>

            {/* Example 1.2-2 */}
            <ContentBox type="example" title="Example 1.2-2">
                <p>
                    <InlineMath math="\mathbf{a} = \begin{pmatrix} 2 \\ -3 \\ 1 \end{pmatrix}" /> に対し、次を計算せよ。
                </p>
                <p>
                    <strong>（1）</strong> <InlineMath math="3\mathbf{a}" /> &nbsp;&nbsp;
                    <strong>（2）</strong> <InlineMath math="-2\mathbf{a}" /> &nbsp;&nbsp;
                    <strong>（3）</strong> <InlineMath math="0\mathbf{a}" />
                </p>
                <p className="font-bold mt-4">解．</p>
                {/* PC/Tablet: 改行なし */}
                <div className="hidden md:block">
                    <BlockMath math="(1)\quad 3\mathbf{a} = \begin{pmatrix} 6 \\ -9 \\ 3 \end{pmatrix}, \qquad (2)\quad -2\mathbf{a} = \begin{pmatrix} -4 \\ 6 \\ -2 \end{pmatrix}, \qquad (3)\quad 0\mathbf{a} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} = \mathbf{0}." />
                </div>
                {/* Mobile: 改行あり */}
                <div className="block md:hidden overflow-x-auto">
                    <BlockMath math="\begin{aligned} &(1)\quad 3\mathbf{a} = \begin{pmatrix} 6 \\ -9 \\ 3 \end{pmatrix}, \\ &(2)\quad -2\mathbf{a} = \begin{pmatrix} -4 \\ 6 \\ -2 \end{pmatrix}, \\ &(3)\quad 0\mathbf{a} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} = \mathbf{0}. \end{aligned}" />
                </div>
                <p>
                    （3）は任意のベクトルを <InlineMath math="0" /> 倍すると零ベクトルになることを示しています。
                </p>
            </ContentBox>

            {/* 図：スカラー倍の幾何学的意味 */}
            <h3 className="text-xl font-bold mt-10 mb-4">スカラー倍の幾何学的意味</h3>
            <p>
                スカラー倍はベクトルの<strong>向きを保ちながら長さを変える</strong>操作です。
                <InlineMath math="c > 1" /> なら伸び、<InlineMath math="0 < c < 1" /> なら縮み、<InlineMath math="c < 0" /> なら向きが反転します。
            </p>

            <div className="flex flex-col items-center my-8">
                <svg width="340" height="200" viewBox="-10 -15 340 200" className="max-w-full">
                    <defs>
                        <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#1a1208" className="fill-slate-900 dark:fill-slate-100" />
                        </marker>
                        <marker id="arr-orig" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#6b5a3e" className="fill-slate-600 dark:fill-slate-400" />
                        </marker>
                        <marker id="arr-2x" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#1a3a5c" className="fill-blue-800 dark:fill-blue-400" />
                        </marker>
                        <marker id="arr-half" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#4a9955" className="fill-emerald-600 dark:fill-emerald-400" />
                        </marker>
                        <marker id="arr-neg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#b03030" className="fill-rose-700 dark:fill-rose-400" />
                        </marker>
                    </defs>

                    {/* 軸 */}
                    <line x1="20" y1="100" x2="318" y2="100" stroke="#ccc" strokeWidth="1" className="dark:stroke-slate-600" />

                    {/* origin dot */}
                    <circle cx="80" cy="100" r="3.5" className="fill-slate-900 dark:fill-slate-100" />
                    <text x="72" y="117" fontSize="12" className="fill-slate-600 dark:fill-slate-400 font-serif">O</text>

                    {/* a (unit = 80px, a方向を右向きとする) */}
                    <line x1="80" y1="100" x2="154" y2="100" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="2" markerEnd="url(#arr-orig)" />
                    <text x="112" y="91" fontSize="15" className="fill-slate-600 dark:fill-slate-400 font-serif italic font-bold">a</text>

                    {/* 2a */}
                    <line x1="80" y1="78" x2="234" y2="78" className="stroke-blue-800 dark:stroke-blue-400" strokeWidth="2" markerEnd="url(#arr-2x)" />
                    <text x="152" y="70" fontSize="15" className="fill-blue-800 dark:fill-blue-400 font-serif italic font-bold">2a</text>

                    {/* 0.5a */}
                    <line x1="80" y1="122" x2="114" y2="122" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" markerEnd="url(#arr-half)" />
                    <text x="90" y="137" fontSize="15" className="fill-emerald-600 dark:fill-emerald-400 font-serif italic font-bold">½a</text>

                    {/* -a */}
                    <line x1="80" y1="100" x2="12" y2="100" className="stroke-rose-700 dark:stroke-rose-400" strokeWidth="2" markerEnd="url(#arr-neg)" />
                    <text x="28" y="91" fontSize="15" className="fill-rose-700 dark:fill-rose-400 font-serif italic font-bold">−a</text>

                    {/* 目盛り線 */}
                    <line x1="160" y1="95" x2="160" y2="105" stroke="#aaa" strokeWidth="1" />
                    <line x1="240" y1="95" x2="240" y2="105" stroke="#aaa" strokeWidth="1" />
                </svg>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic text-center">
                    図 1.3 &nbsp; スカラー倍の効果。<InlineMath math="2\mathbf{a}" /> は <InlineMath math="\mathbf{a}" /> を2倍に伸ばし、
                    <InlineMath math="\tfrac{1}{2}\mathbf{a}" /> は半分に縮め、<InlineMath math="-\mathbf{a}" /> は逆向きにする。
                </div>
            </div>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 演算の性質
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">演算の基本性質</h2>

            <p>
                和とスカラー倍について、計算に役立つ基本的な性質をまとめます。
                これらはすべて成分計算から直接確かめることができます。
            </p>

            {/* Proposition 1.2-1 */}
            <ContentBox type="proposition" title="Proposition 1.2-1 （ベクトル演算の基本性質）">
                <p>
                    <InlineMath math="\mathbf{a}, \mathbf{b}, \mathbf{c} \in \mathbb{R}^n" />、<InlineMath math="\lambda, \mu \in \mathbb{R}" /> に対し、以下が成り立つ。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><strong>和の交換法則：</strong> <InlineMath math="\mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a}" /></li>
                    <li><strong>和の結合法則：</strong> <InlineMath math="(\mathbf{a} + \mathbf{b}) + \mathbf{c} = \mathbf{a} + (\mathbf{b} + \mathbf{c})" /></li>
                    <li><strong>零ベクトルの性質：</strong> <InlineMath math="\mathbf{a} + \mathbf{0} = \mathbf{a}" /></li>
                    <li><strong>逆ベクトルの性質：</strong> <InlineMath math="\mathbf{a} + (-\mathbf{a}) = \mathbf{0}" /></li>
                    <li><strong>スカラー倍の分配法則 I：</strong> <InlineMath math="\lambda(\mathbf{a} + \mathbf{b}) = \lambda\mathbf{a} + \lambda\mathbf{b}" /></li>
                    <li><strong>スカラー倍の分配法則 II：</strong> <InlineMath math="(\lambda + \mu)\mathbf{a} = \lambda\mathbf{a} + \mu\mathbf{a}" /></li>
                    <li><strong>スカラー倍の結合法則：</strong> <InlineMath math="(\lambda\mu)\mathbf{a} = \lambda(\mu\mathbf{a})" /></li>
                    <li><strong>スカラー <InlineMath math="1" /> の性質：</strong> <InlineMath math="1 \cdot \mathbf{a} = \mathbf{a}" /></li>
                </ol>
            </ContentBox>

            <p>
                証明は性質 1 を例に示します。残りも同様に成分を書き下して確認できます。
            </p>

            {/* Proof of 1 */}
            <ContentBox type="proof" title="Proof （性質 1 の証明）">
                <p>Definition 1.2-1 より、</p>
                <BlockMath math="\mathbf{a} + \mathbf{b} = \begin{pmatrix} a_1 + b_1 \\ \vdots \\ a_n + b_n \end{pmatrix}." />
                <p>
                    実数の加法では <InlineMath math="a_i + b_i = b_i + a_i" /> が成り立つ（実数の交換法則）から、
                </p>
                <BlockMath math="\begin{pmatrix} a_1 + b_1 \\ \vdots \\ a_n + b_n \end{pmatrix} = \begin{pmatrix} b_1 + a_1 \\ \vdots \\ b_n + a_n \end{pmatrix} = \mathbf{b} + \mathbf{a}." />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark （これらの性質の重要性）">
                <p>
                    Proposition 1.2-1 の性質 1〜8 は、<InlineMath math="\mathbb{R}^n" /> が<em>ベクトル空間</em>の公理を満たすことを意味します。
                    ベクトル空間の概念は線形代数 II（Lv.2）で厳密に定義しますが、
                    この段階では「これらの計算規則を自由に使ってよい」ということを確認しておいてください。
                </p>
            </ContentBox>

            {/* Example 1.2-3 */}
            <ContentBox type="example" title="Example 1.2-3">
                <p>
                    次の式を計算せよ。
                </p>
                <BlockMath math="3\left(\begin{pmatrix}1\\-2\\0\end{pmatrix} + \begin{pmatrix}2\\1\\3\end{pmatrix}\right) - 2\begin{pmatrix}4\\0\\-1\end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    まず括弧内の和を計算し、次にスカラー倍を施す。
                </p>
                <BlockMath math="= 3\begin{pmatrix}3\\-1\\3\end{pmatrix} - 2\begin{pmatrix}4\\0\\-1\end{pmatrix} = \begin{pmatrix}9\\-3\\9\end{pmatrix} - \begin{pmatrix}8\\0\\-2\end{pmatrix} = \begin{pmatrix}1\\-3\\11\end{pmatrix}." />
                <p>
                    Proposition 1.2-1 の性質 5〜7 を用いれば、スカラー倍を先に展開する方法でも同じ結果が得られます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベクトルの和・差は対応する成分どうしを足し引きする（Definition 1.2-1）。</li>
                    <li>スカラー倍は各成分を <InlineMath math="c" /> 倍する（Definition 1.2-2）。</li>
                    <li>幾何学的には、和は平行四辺形の法則、スカラー倍は長さの伸縮・方向の反転に対応する。</li>
                    <li>和とスカラー倍は交換・結合・分配などの基本法則を満たす（Proposition 1.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
