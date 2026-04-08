import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HahnBanachTheoremSeparation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ハーン-バナッハの拡張定理は形式的な存在定理ですが、その系は幾何学的に極めて鮮やかな意味を持ちます。本節では、空間内の任意の「点と点」、あるいは「点と閉部分空間」を、線形汎関数からなる超平面によって綺麗に「分離」できるという事実を見ます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双対空間の豊富さ</h2>

            <p>
                ノルム空間上の連続線形汎関数全体の空間を双対空間（<InlineMath math="X^*" />）と呼びましたが、そもそも <InlineMath math="X^*" /> には要素（観測機）がどれくらい存在するのでしょうか？ 前節の定理を用いれば、少なくとも「あらゆるベクトルの長さを測り分けられる」程度には豊富であることがただちにわかります。
            </p>

            <ContentBox type="theorem" title="Corollary 4.2-1 (ベクトルの長さを測る汎関数の存在)">
                <p>
                    <InlineMath math="X" /> をノルム空間とする。任意の非ゼロの元 <InlineMath math="x \in X" /> に対して、以下の2条件を満たす有界線形汎関数 <InlineMath math="f \in X^*" /> が必ず存在する。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="f(x) = \|x\|" /></li>
                    <li><InlineMath math="\|f\| = 1" /> （作用素ノルムが1である）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ベクトル <InlineMath math="x" /> が単独で張る1次元の部分空間 <InlineMath math="M = \text{span}\{x\} = \{ \alpha x \mid \alpha \in \mathbb{R} \}" /> を考える。
                </p>
                <p>
                    <InlineMath math="M" /> 上に線形汎関数 <InlineMath math="f" /> を <InlineMath math="f(\alpha x) = \alpha \|x\|" /> と定義する。<InlineMath math="f" /> の <InlineMath math="M" /> 上での作用素ノルムは、<InlineMath math="\|f(\alpha x)\| = |\alpha| \|x\| = \|\alpha x\|" /> より直ちに <InlineMath math="\|f\|_M = 1" /> であり、<InlineMath math="\alpha = 1" /> を代入すれば <InlineMath math="f(x) = \|x\|" /> である。
                </p>
                <p>
                    あとはこの <InlineMath math="M" /> 上の <InlineMath math="f" /> に対して、ハーン-バナッハのノルム保存拡張（Corollary 4.1-1）を適用するだけで、ノルム <InlineMath math="1" /> を保ったまま <InlineMath math="X" /> 全体の汎関数 <InlineMath math="\tilde{f}" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 4.2-1 (<InlineMath math="\ell^1" /> での具体例)</span>}>
                <p>
                    絶対収束する数列の空間 <InlineMath math="\ell^1" /> において、点 <InlineMath math="x = (1, 0, 0, \ldots)" /> （<InlineMath math="\|x\|_1 = 1" />）を選ぶ。
                </p>
                <p>
                    この <InlineMath math="x" /> に対して Corollary 4.2-1 を満たす汎関数を具体的に構成する。<InlineMath math="\ell^1" /> の双対空間は <InlineMath math="\ell^\infty" /> （有界数列の空間）であるから、ある数列 <InlineMath math="y = (y_n) \in \ell^\infty" /> によって <InlineMath math="f(z) = \sum z_n y_n" /> と書ける。
                </p>
                <p>
                    条件より <InlineMath math="f(x) = y_1 = \|x\|_1 = 1" /> であるから、<InlineMath math="y_1 = 1" />。さらに <InlineMath math="\|f\| = \|y\|_\infty = \sup |y_n| = 1" /> であるため、<InlineMath math="y = (1, 0, 0, \ldots)" /> あるいは <InlineMath math="y = (1, 1, 1, \ldots)" /> などが望みの分離汎関数を与える。
                </p>
            </ContentBox>

            <p>
                この性質から、「異なる2つの点があれば、それを区別できる汎関数が必ず存在する」という基本的な事実が導かれます。
            </p>

            <ContentBox type="theorem" title="Corollary 4.2-2 (点を分離する汎関数の存在)">
                <p>
                    ノルム空間 <InlineMath math="X" /> において <InlineMath math="x \neq y" /> ならば、<InlineMath math="f(x) \neq f(y)" /> となるような <InlineMath math="f \in X^*" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="x \neq y" /> より、<InlineMath math="x - y \neq 0" /> である。先ほどの Corollary 4.2-1 を <InlineMath math="X" /> の非ゼロの元 <InlineMath math="(x - y)" /> に対して適用すると、<InlineMath math="f(x - y) = \|x - y\| \neq 0" /> となる <InlineMath math="f \in X^*" /> が存在する。線形性より <InlineMath math="f(x) - f(y) \neq 0" />、すなわち <InlineMath math="f(x) \neq f(y)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉部分空間と点の分離</h2>

            <p>
                点と点を分けるだけでなく、「膨らみのある集まり（部分空間）」と「そこから外れた点」も、超平面（一つの汎関数の等位面）によってスパッと切り分けることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (閉部分空間と点の分離定理)">
                <p>
                    <InlineMath math="X" /> をノルム空間、<InlineMath math="M" /> をその<b>閉</b>部分空間とする。点 <InlineMath math="x_0 \in X" /> が <InlineMath math="M" /> に属していない（<InlineMath math="x_0 \notin M" />）ならば、以下の3条件を満たす汎関数 <InlineMath math="f \in X^*" /> が存在する。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>任意の <InlineMath math="x \in M" /> について <InlineMath math="f(x) = 0" />（つまり <InlineMath math="M" /> 全体をゼロに潰す）</li>
                    <li><InlineMath math="f(x_0) = 1" />（外にある点にはゼロ以外の明確な値を与える）</li>
                    <li><InlineMath math="\|f\| > 0" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="x_0 \notin M" /> であり <InlineMath math="M" /> は閉集合なので、<InlineMath math="x_0" /> から <InlineMath math="M" /> への距離は正である（<InlineMath math="\delta = \inf_{x \in M} \|x_0 - x\| > 0" />）。
                </p>
                <p>
                    <InlineMath math="M" /> と <InlineMath math="x_0" /> で張られる部分空間 <InlineMath math="N = M + \mathbb{R}x_0" /> を考える。<InlineMath math="N" /> の元は一意に <InlineMath math="z = x + t x_0" /> （<InlineMath math="x \in M, t \in \mathbb{R}" />）と書ける。
                </p>
                <p>
                    <InlineMath math="N" /> 上に汎関数 <InlineMath math="f" /> を <InlineMath math="f(x + t x_0) = t" /> と定義する。<InlineMath math="M" /> の元は <InlineMath math="t=0" /> なので <InlineMath math="f(x)=0" />、また <InlineMath math="x_0" /> のときは <InlineMath math="t=1" /> なので <InlineMath math="f(x_0)=1" /> となる。
                </p>
                <p>
                    これはノルム空間上の有界な作用素である（<InlineMath math="\|z\| = \|x + tx_0\| = |t| \|x/t + x_0\| \geq |t|\delta = |f(z)|\delta" /> より <InlineMath math="\|f\|_N \leq 1/\delta" />）。<InlineMath math="N" /> 上の有界線形汎関数が得られたので、これにハーン-バナッハのノルム保存拡張定理を適用し、<InlineMath math="X" /> 全体の汎関数とすれば証明が完了する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 4.2-2 (<InlineMath math="\ell^2" /> における閉部分空間との分離)</span>}>
                <p>
                    空間 <InlineMath math="\ell^2" /> において、最初の要素が <InlineMath math="0" /> であるようなベクトルの集合を <InlineMath math="M = \{ (0, x_2, x_3, \ldots) \in \ell^2 \}" /> とする。これは明らかに閉部分空間である。
                </p>
                <p>
                    点 <InlineMath math="x_0 = (1, 0, 0, \ldots)" /> は <InlineMath math="M" /> に属さない。分離定理が保証する汎関数 <InlineMath math="f" /> は、数列全体に対する内積を用いて <InlineMath math="f(y) = \langle y, x_0 \rangle = y_1" /> と定めればよい。ここへ <InlineMath math="M" /> の元を代入すると <InlineMath math="f(y) = 0" />、また <InlineMath math="f(x_0) = 1" /> となり、条件を満たしていることが容易に確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="最適化理論・凸解析への接続">
                <p>
                    本節の「部分空間と点の分離」は、幾何学的には「ある凸集合と、それに属さない点を分ける超平面が引ける」という事実の特殊なケースです。関数空間上での最適な近似や、システム制御における可能領域の境界を定める理論などでは、この分離定理がそのまま最適化問題の条件式などに姿を変えて活躍します。（詳しくは 4-4 凸解析 のトピックで深く扱います）
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ハーン-バナッハ定理のおかげで、双対空間 <InlineMath math="X^*" /> には「すべてのベクトルを区別できる」ほど十分な数の観測機が存在する。</li>
                    <li>ある点と、それを含まない閉部分空間があるとき、空間全体をゼロに潰しながらその点だけを検出できる汎関数が存在する（ Theorem 4.2-1 分離定理）。</li>
                    <li>これらの分離定理は、幾何学的な超平面による空間分割を意味しており、応用数学へ繋がる基盤となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
