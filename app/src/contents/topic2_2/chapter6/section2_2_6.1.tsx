import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HessianMatrixDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                1変数関数の極値問題では、1階微分 <InlineMath math="f'(x) = 0" /> となる点を探し、
                そこで2階微分 <InlineMath math="f''(x)" /> の符号を調べることで極大・極小を判定しました。
                多変数関数の場合も基本的なアイディアは同じですが、「2階微分」は1つの数値ではなく、
                すべての2階偏導関数を並べた<strong>行列</strong>として現れます。
                本章の主役となるこの行列を「ヘッセ行列」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヘッセ行列の定義</h2>

            <ContentBox type="definition" title="Definition 6.1-1 (ヘッセ行列)">
                <p className="leading-relaxed">
                    <InlineMath math="n" /> 変数関数 <InlineMath math="f(x_1, \dots, x_n)" /> が2階偏微分可能であるとき、
                    2階偏導関数 <InlineMath math="f_{x_i x_j} = \frac{\partial^2 f}{\partial x_i \partial x_j}" /> を <InlineMath math="(i, j)" /> 成分に持つ <InlineMath math="n \times n" /> 行列
                </p>
                <BlockMath math="H(x_1, \dots, x_n) = \begin{pmatrix} 
                f_{x_1 x_1} & f_{x_1 x_2} & \cdots & f_{x_1 x_n} \\
                f_{x_2 x_1} & f_{x_2 x_2} & \cdots & f_{x_2 x_n} \\
                \vdots & \vdots & \ddots & \vdots \\
                f_{x_n x_1} & f_{x_n x_2} & \cdots & f_{x_n x_n}
                \end{pmatrix}" />
                <p className="leading-relaxed">
                    を <InlineMath math="f" /> の<strong>ヘッセ行列</strong>（Hessian matrix）と呼ぶ。
                    しばしば <InlineMath math="\nabla^2 f" /> や <InlineMath math="D^2 f" /> とも表記される。
                </p>
                <p className="leading-relaxed mt-2">
                    特に2変数関数 <InlineMath math="f(x, y)" /> の場合、ヘッセ行列は次の <InlineMath math="2 \times 2" /> 行列となる：
                </p>
                <BlockMath math="H(x, y) = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{pmatrix}" />
            </ContentBox>

            <p>
                ヤコビ行列（Chapter 5）が「1階偏微分を並べたもの」だったのに対し、
                ヘッセ行列は「2階偏微分を並べたもの」です。
                実のところ、ヘッセ行列は「勾配ベクトル（ヤコビ行列の特殊な場合）のヤコビ行列」として定義することもできます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対称性</h2>

            <ContentBox type="proposition" title="Proposition 6.1-1 (C² 級関数のヘッセ行列は対称行列)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f(x_1, \dots, x_n)" /> が <InlineMath math="C^2" /> 級（すべての2階偏導関数が存在して連続）であるとする。
                    このとき、ヘッセ行列 <InlineMath math="H" /> は<strong>対称行列</strong>（<InlineMath math="H^T = H" />）である。
                    すなわち、任意の <InlineMath math="i, j" /> に対して
                </p>
                <BlockMath math="f_{x_i x_j} = f_{x_j x_i}" />
                <p className="leading-relaxed">
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="f" /> が <InlineMath math="C^2" /> 級であるため、任意の変数 <InlineMath math="x_i, x_j" /> について混合偏導関数 <InlineMath math="f_{x_i x_j}" /> と <InlineMath math="f_{x_j x_i}" /> は連続である。
                    したがって、Chapter 5 で証明した「シュワルツの定理（Theorem 5.3-1）」より、
                    偏微分の順序は交換可能であり、<InlineMath math="f_{x_i x_j} = f_{x_j x_i}" /> が成り立つ。
                    行列の言葉で言えば、<InlineMath math="(i, j)" /> 成分と <InlineMath math="(j, i)" /> 成分が等しいため、ヘッセ行列は対称行列である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="対称行列であることの絶大な恩恵">
                <p className="leading-relaxed">
                    ヘッセ行列が対称行列になることは、線形代数学の観点から決定的な意味を持ちます。
                    Chapter 13 で学ぶ「<strong>対称行列のスペクトル分解定理</strong>」により、
                    要素が実数の対称行列は、<strong>必ず直交行列によって対角化可能であり、すべての固有値が実数になる</strong>ことが保証されているからです。
                </p>
                <p className="leading-relaxed mt-2">
                    つまり、どんなに複雑な多変数関数であっても、極値の近くで座標軸をうまく回転（直交変換）させれば、
                    混合項（<InlineMath math="xy" /> など）が消え、「各軸方向の放物線の足し合わせ」に分解できるのです。
                    ヘッセ行列の「固有値の符号」を調べることがそのまま「極値の判定」となる理由は、この対称性にあります。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヘッセ行列 <InlineMath math="H" /> は、関数のすべての2階偏導関数を並べた正方行列である（Definition 6.1-1）。</li>
                    <li>関数が <InlineMath math="C^2" /> 級ならば、シュワルツの定理よりヘッセ行列は対称行列になる（Proposition 6.1-1）。</li>
                    <li>対称行列であるため、実固有値を持ち、直交行列で対角化できる。これが極値判定の理論的基盤となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
