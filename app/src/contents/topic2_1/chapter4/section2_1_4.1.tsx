import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function LinearFunctionalAndDualSpace() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章では「双対空間（Dual Space）」という、少し抽象的ですが非常に美しい概念について学びます。<br />
                これまでは「ベクトルを入力して、別のベクトルを出力する」ような線形写像を中心に考えてきました。
                ここで、「ベクトルを入力して、<strong>スカラー（単なる数）を出力する</strong>」ような特別な線形写像に注目します。これを<strong>線形汎関数（Linear Functional）</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">線形汎関数</h2>

            <p>
                「汎関数（はんかんすう）」という言葉は、ベクトル（多くの場合、関数などの無限次元の元）を入力として受け取ってスカラー値を返す写像のことを指します。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 （線形汎関数 / Linear Functional）">
                <p>
                    スカラー体 <InlineMath math="K" /> 上のベクトル空間 <InlineMath math="V" /> から、スカラー体自身 <InlineMath math="K" /> への線形写像 <InlineMath math="f: V \to K" /> を<strong>線形汎関数</strong>（または単に汎関数）と呼ぶ。
                    すなわち、任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> と <InlineMath math="c \in K" /> に対して次を満たす関数である。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="f(\boldsymbol{x} + \boldsymbol{y}) = f(\boldsymbol{x}) + f(\boldsymbol{y})" /></li>
                    <li><InlineMath math="f(c\boldsymbol{x}) = c f(\boldsymbol{x})" /></li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双対空間</h2>

            <p>
                驚くべきことに、こうした「線形汎関数」そのものを要素として集めると、そこにも和や定数倍が自然に定義され、新たな「ベクトル空間」が出来上がります。
            </p>

            <ContentBox type="definition" title="Definition 4.1-2 （双対空間 / Dual Space）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> 上のすべての線形汎関数を集めた集合を <InlineMath math="V" /> の<strong>双対空間</strong>と呼び、<InlineMath math="V^*" /> と表す。
                </p>
                <BlockMath math="V^* = \{ f \mid f: V \to K, \, f \text{ は線形汎関数} \}" />
                <p>
                    <InlineMath math="V^*" /> における和とスカラー倍は、関数としての自然な演算によって定義される。<br />
                    すなわち、<InlineMath math="f, g \in V^*" /> と <InlineMath math="c \in K" /> に対して、
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><InlineMath math="(f + g)(\boldsymbol{x}) = f(\boldsymbol{x}) + g(\boldsymbol{x})" /></li>
                    <li><InlineMath math="(cf)(\boldsymbol{x}) = c \cdot f(\boldsymbol{x})" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 4.1-1 （双対空間はベクトル空間をなす）">
                <p>
                    上記のように和とスカラー倍を定義した双対空間 <InlineMath math="V^*" /> は、それ自身がベクトル空間の公理を満たす（つまりベクトル空間である）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f + g" /> や <InlineMath math="cf" /> が再び線形汎関数になること（演算について閉じていること）を確かめれば、残りの公理は <InlineMath math="K" /> 上の演算の性質から自然に導かれる。（写像の空間 <InlineMath math="\mathrm{Hom}(V, K)" /> がベクトル空間になることの一例である。）
                </p>
                <p className="font-bold mt-2">和の線形性の確認：</p>
                <p>任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> とスカラー <InlineMath math="a, b" /> に対し、</p>
                <BlockMath math="(f+g)(a\boldsymbol{x}+b\boldsymbol{y}) = f(a\boldsymbol{x}+b\boldsymbol{y}) + g(a\boldsymbol{x}+b\boldsymbol{y})" />
                <p>
                    <InlineMath math="f, g" /> が線形汎関数であるため、
                </p>
                <BlockMath math="\begin{aligned} & f(a\boldsymbol{x}+b\boldsymbol{y}) + g(a\boldsymbol{x}+b\boldsymbol{y}) \\ &= a f(\boldsymbol{x}) + b f(\boldsymbol{y}) + a g(\boldsymbol{x}) + b g(\boldsymbol{y}) \\ &= a(f(\boldsymbol{x}) + g(\boldsymbol{x})) + b(f(\boldsymbol{y}) + g(\boldsymbol{y})) \\ &= a(f+g)(\boldsymbol{x}) + b(f+g)(\boldsymbol{y}) \end{aligned}" />
                <p>
                    よって <InlineMath math="f+g" /> も線形汎関数である。
                </p>
                <p className="font-bold mt-4">スカラー倍の線形性の確認：</p>
                <p>同様に、</p>
                <BlockMath math="\begin{aligned} (cf)(a\boldsymbol{x}+b\boldsymbol{y}) &= c \cdot f(a\boldsymbol{x}+b\boldsymbol{y}) \\ &= c(a f(\boldsymbol{x}) + b f(\boldsymbol{y})) \\ &= a(cf)(\boldsymbol{x}) + b(cf)(\boldsymbol{y}) \end{aligned}" />
                <p>
                    よって <InlineMath math="cf" /> も線形汎関数である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">例</h2>

            <ContentBox type="example" title="Example 4.1-1 （有限次元空間の線形汎関数の具体例）">
                <p className="font-bold">【例1】 行ベクトルによる内積（<InlineMath math="\mathbb{R}^n" /> の場合）</p>
                <p>
                    数ベクトル空間 <InlineMath math="V = \mathbb{R}^n" /> において、ある固定されたベクトル <InlineMath math="\boldsymbol{a} = (a_1, \dots, a_n)^T" /> との内積をとる操作を考えます。<br />
                    関数 <InlineMath math="f_a(\boldsymbol{x}) = \boldsymbol{a}^T \boldsymbol{x} = a_1 x_1 + \dots + a_n x_n" /> は、ベクトル <InlineMath math="\boldsymbol{x}" /> を入力して実数を出力する線形写像です。したがって <InlineMath math="f_a" /> は線形汎関数の一例です。
                </p>

                <p className="font-bold mt-4">【例2】 特定の点での値の評価（多項式空間の場合）</p>
                <p>
                    実数を係数とする多項式全体からなるベクトル空間 <InlineMath math="\mathbb{R}[x]" /> を考えます。<br />
                    「多項式 <InlineMath math="p(x)" /> を受け取り、<InlineMath math="x=1" /> での値を返す関数」<InlineMath math="\phi(p) = p(1)" /> を定義すると、これは多項式の和や定数倍の性質から明らかに線形汎関数となります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベクトル空間からスカラー値（実数や複素数）への線形写像を<strong>線形汎関数</strong>と呼ぶ（Definition 4.1-1）。</li>
                    <li>線形汎関数「全体」を集めてできた新たな空間を、元の空間の<strong>双対空間</strong> <InlineMath math="V^*" /> と呼ぶ（Definition 4.1-2）。</li>
                    <li>双対空間自身もまた、関数の和とスカラー倍によって立派なベクトル空間となる（Proposition 4.1-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
