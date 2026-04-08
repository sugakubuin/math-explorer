import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfDualSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「空間からスカラー値を引き出す線形写像の全体」である双対空間ですが、抽象論だけではその実体が見えてきません。本節では、実際の関数空間や数列空間に対して双対空間が「どのような形をしているか」を具体的に決定する代表的な表現定理を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">l^p の双対</h2>

            <p>
                絶対収束数列の一般化である <InlineMath math="\ell^p" /> 空間上の汎関数は、すべて「ある別の数列との内積のような無限和」で表現できることが知られています。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.2-1 (<InlineMath math="\ell^p" /> の双対空間)</span>}>
                <p>
                    <InlineMath math="1 \leq p < \infty" /> とし、<InlineMath math="q" /> をその共役指数、すなわち <InlineMath math="1/p + 1/q = 1" /> を満たす数（<InlineMath math="p=1" /> のときは <InlineMath math="q=\infty" />）とする。<InlineMath math="\ell^p" /> 空間の双対空間 <InlineMath math="(\ell^p)^*" /> は、<InlineMath math="\ell^q" /> 空間と等長同型（ノルムを保ったまま1対1に対応する）である。
                </p>
                <p>
                    この同型対応は、各 <InlineMath math="y = (y_n) \in \ell^q" /> に対して連続線形汎関数 <InlineMath math="f_y" /> を
                </p>
                <BlockMath math="f_y(x) = \sum_{n=1}^\infty x_n y_n \quad (x \in \ell^p)" />
                <p>
                    と対応させることで与えられる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （同型の概略）まずヘルダーの不等式から、
                </p>
                <BlockMath math="|f_y(x)| \leq \sum_{n=1}^\infty |x_n y_n| \leq \|x\|_p \|y\|_q" />
                <p>
                    が成り立つため、<InlineMath math="f_y" /> は有界であり、その作用素ノルムは <InlineMath math="\|f_y\| \leq \|y\|_q" /> であることがわかる。したがって写像 <InlineMath math="y \mapsto f_y" /> は <InlineMath math="\ell^q \to (\ell^p)^*" /> の有界な包含を与える。
                </p>
                <p>
                    次にこのノルムがギリギリ（<InlineMath math="\|f_y\| = \|y\|_q" />）であることを示すため、符号と累乗を細かく調整した列 <InlineMath math="x_n = |y_n|^{q-1} \mathrm{sgn}(y_n)" /> を考え代入する。これにより <InlineMath math="\|x\|_p = \|y\|_q^{q/p}" /> と評価でき、商をとると正確に上限が達成されるため等長写像であることが証明される。
                </p>
                <p>
                    最後に写像が全射であることを示す。任意の <InlineMath math="f \in (\ell^p)^*" /> について、標準基底 <InlineMath math="e_n" /> を用いて <InlineMath math="y_n = f(e_n)" /> と数列を作り、極限操作を用いてこの数列 <InlineMath math="(y_n)" /> が実は <InlineMath math="\ell^q" /> に属し、求める生成元になっていることを確認する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 5.2-1 (<InlineMath math="(\ell^2)^*" /> の自己同型)</span>}>
                <p>
                    特筆すべきは <InlineMath math="p=2" /> の場合である。<InlineMath math="1/2 + 1/2 = 1" /> より共役指数も <InlineMath math="q=2" /> となる。したがって、<InlineMath math="(\ell^2)^* \cong \ell^2" /> となり、「双対空間が元の空間自身と同じ形になる」という極めて美しい性質を持つ。
                </p>
                <p>
                    例えば、<InlineMath math="f(x) = x_1 + \frac{x_2}{2}" /> という <InlineMath math="\ell^2" /> 上の汎関数は、<InlineMath math="y = (1, 1/2, 0, 0, \ldots) \in \ell^2" /> を用いて <InlineMath math="f(x) = \sum x_n y_n" /> と完全に表現できる。これは後に「リースの表現定理」としてヒルベルト空間一般の性質に昇華される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">C[a,b] の双対</h2>

            <p>
                連続関数の空間上の「観測機」はどのような形をしているでしょうか。ある点での値を取り出す操作（<InlineMath math="f(x) \mapsto f(x_0)" />）も、積分（<InlineMath math="f(x) \mapsto \int f(x)dx" />）もすべて線形汎関数です。これらを総括する枠組みが「測度」です。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.2-2 (リース-マルコフの表現定理)</span>}>
                <p>
                    閉区間 <InlineMath math="[a,b]" /> 上の連続関数空間 <InlineMath math="C[a,b]" /> （上限ノルム）の双対空間 <InlineMath math="C[a,b]^*" /> は、区間 <InlineMath math="[a,b]" /> 上の「有界変動な符号付き正則ボレル測度」からなる空間と等長同型である。
                </p>
                <p>
                    すなわち、連続関数からスカラーを引き出すあらゆる有界線形汎関数 <InlineMath math="F" /> は、ある一意な測度 <InlineMath math="\mu" /> を用いたルベーグ-スティルチェス積分として
                </p>
                <BlockMath math="F(f) = \int_a^b f(x) \, d\mu(x)" />
                <p>
                    と表現される。（※ルベーグ積分については 3-3 測度論 などを参照）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）
                </p>
                <p>
                    汎関数 <InlineMath math="F" /> が正（<InlineMath math="f \geq 0 \implies F(f) \geq 0" />）の場合をまず考える。ダニエルの積分拡張の手法などを用いて、開集合 <InlineMath math="O" /> に対する測度を <InlineMath math="\mu(O) = \sup \{ F(f) \mid f \in C[a,b], \, 0 \leq f \leq 1, \, \mathrm{supp}(f) \subset O \}" /> と定義し、ここからボレル測度を構成する。その後、負の寄与をもつ一般の汎関数に対しては正部分と負部分に分解し、符号付き測度を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-2 (ディラック測度)">
                <p>
                    点 <InlineMath math="x_0 \in [a,b]" /> に対して、連続関数のその点での値を抜き出す評価汎関数 <InlineMath math="E(f) = f(x_0)" /> は有界線形汎関数（上限ノルムに対してノルム1を持つ）である。
                </p>
                <p>
                    リース-マルコフの表現定理に基づけば、この汎関数に対応する測度は「点 <InlineMath math="x_0" /> にのみ質量 <InlineMath math="1" /> が集中し、それ以外の場所の質量は <InlineMath math="0" />」というディラック関数的（デルタ測度 <InlineMath math="\delta_{x_0}" />）なものになる。積分で書けば
                </p>
                <BlockMath math="E(f) = \int_a^b f(x) \, d\delta_{x_0}(x) = f(x_0)" />
                <p>
                    となり、直感と見事に一致する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ルベーグ空間の双対に関する注意">
                <p>
                    連続から一歩進んで、ルベーグ積分で定義される <InlineMath math="L^p" /> 空間の双対空間も <InlineMath math="\ell^p" /> の時と全く同じように <InlineMath math="1 < p < \infty" /> であれば互いに <InlineMath math="(L^p)^* \cong L^q" /> になります。
                </p>
                <p>
                    ただし、両端である <InlineMath math="L^1" /> と <InlineMath math="L^\infty" /> は非常に非対称です。<InlineMath math="(L^1)^*" /> は <InlineMath math="L^\infty" /> と同型になりますが、<InlineMath math="(L^\infty)^*" /> は <InlineMath math="L^1" /> とは同型になれず、有限加法的な奇怪な測度まで含んだ非常に巨大な空間になってしまいます（<InlineMath math="\ell^\infty" /> と <InlineMath math="\ell^1" /> の関係でも同様です）。これが、解析学において「有界なもの全体の関数空間（<InlineMath math="L^\infty" />）」が「少しだけ扱いづらい空間」とされる一つの理由です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\ell^p" /> 空間の双対空間は、共役指数 <InlineMath math="q" /> を持つ <InlineMath math="\ell^q" /> 空間と自然に同型になる（<InlineMath math="1 \leq p < \infty" /> の場合）。</li>
                    <li>特に <InlineMath math="(\ell^2)^* \cong \ell^2" /> となり、自身が自身の双対となる美しい性質を持つ。</li>
                    <li>連続関数の空間 <InlineMath math="C[a,b]" /> 上の観測機（汎関数）は、すべて適切な「測度による積分」として表現できる（リース-マルコフの表現定理）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
