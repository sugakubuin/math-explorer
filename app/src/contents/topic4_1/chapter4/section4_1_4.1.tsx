import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HahnBanachTheoremExtension() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章では「関数解析の三大（四大）定理」と呼ばれる極めて重要な定理群を学びます。その筆頭が「ハーン-バナッハ定理」です。この定理は、部分的に定義された「観測機（線形汎関数）」を、性質を保ったまま空間全体へと「拡張」できることを保証します。これにより、対象とする空間の観測機（双対空間の元）が十分に豊富に存在することが保証され、双対性に基づく様々な解析手法が正当化されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">劣線形汎関数と拡張</h2>

            <p>
                汎関数を拡張する際、その汎関数が「暴走」しないよう上から抑え込む枠組みが必要です。その枠組みを与えるのが劣線形汎関数です。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (劣線形汎関数)">
                <p>
                    実ベクトル空間 <InlineMath math="X" /> 上の実数値を極める関数 <InlineMath math="p : X \to \mathbb{R}" /> が以下の2条件を満たすとき、これを<b>劣線形汎関数（sublinear functional）</b>と呼ぶ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="p(x + y) \leq p(x) + p(y)" /> （劣加法性）</li>
                    <li>任意の <InlineMath math="\alpha \geq 0" /> に対し、<InlineMath math="p(\alpha x) = \alpha p(x)" /> （正斉次性）</li>
                </ol>
            </ContentBox>

            <p>
                最も単純な劣線形汎関数の例はノルム <InlineMath math="\|x\|" /> そのものです。この枠組み（天井）を用意した上で、関数解析の根幹をなす拡張定理を述べます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-1 (ハーン-バナッハの拡張定理)">
                <p>
                    <InlineMath math="X" /> を実ベクトル空間、<InlineMath math="p" /> を <InlineMath math="X" /> 上の劣線形汎関数とする。<InlineMath math="M" /> を <InlineMath math="X" /> の部分空間とし、<InlineMath math="f : M \to \mathbb{R}" /> を <InlineMath math="M" /> 上で定義された線形汎関数とする。もし <InlineMath math="f" /> が <InlineMath math="M" /> 上で常に <InlineMath math="f(x) \leq p(x)" /> を満たしているならば、<InlineMath math="X" /> 全体で定義された線形汎関数 <InlineMath math="\tilde{f} : X \to \mathbb{R}" /> で以下を満たすものが存在する。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>任意の <InlineMath math="x \in M" /> に対して <InlineMath math="\tilde{f}(x) = f(x)" /> （<InlineMath math="f" /> の拡張である）</li>
                    <li>任意の <InlineMath math="x \in X" /> に対して <InlineMath math="\tilde{f}(x) \leq p(x)" /> （拡張しても天井を突き破らない）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略を述べる。証明は「次元を1つだけ増やす拡張」と「無限次元への到達（ツォルンの補題）」の2段階で行われる。
                </p>
                <p>
                    1段階目：<InlineMath math="M" /> の外にある1点 <InlineMath math="x_0 \notin M" /> を取り、<InlineMath math="M" /> と <InlineMath math="x_0" /> が張る新しい部分空間 <InlineMath math="M_1 = M + \mathbb{R}x_0" /> へ拡張する。<InlineMath math="M_1" /> の要素は <InlineMath math="x + t x_0" /> （<InlineMath math="x \in M, t \in \mathbb{R}" />）と一意に書けるため、拡張された汎関数は <InlineMath math="\tilde{f}(x + t x_0) = f(x) + t c" /> （<InlineMath math="c = \tilde{f}(x_0)" />）となる。このとき、条件 <InlineMath math="\tilde{f}(y) \leq p(y)" /> を満たすように実定数 <InlineMath math="c" /> を選べるかが問題となるが、劣加法性から <InlineMath math="c" /> の上限と下限の間に「妥当な隙間」が必ず存在することが示されるため、適切な <InlineMath math="c" /> を選んで1次元分の拡張が完了する。
                </p>
                <p>
                    2段階目：極大値の存在を保証するツォルンの補題（代数学や集合論の基本定理）を用いる。「部分的な拡張全体」からなる集合に包含関係で順序を入れると、この集合は帰納的順序集合となる。ツォルンの補題より極大元が存在し、もしそれが空間全体に達していなければ1段階目の手法でさらに拡張できて極大性に矛盾するため、この極大元こそが求める空間全体への拡張 <InlineMath math="\tilde{f}" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-1 (x軸上の汎関数の拡張)">
                <p>
                    平面 <InlineMath math="\mathbb{R}^2" /> に上限ノルム <InlineMath math="p(x, y) = \max(|x|, |y|)" /> を入れる。<InlineMath math="x" /> 軸上の部分空間 <InlineMath math="M = \{(a, 0) \mid a \in \mathbb{R}\}" /> 上の線形汎関数を <InlineMath math="f(a, 0) = a" /> と定義する。<InlineMath math="M" /> 上では明らかに <InlineMath math="f(a, 0) = a \leq |a| = p(a, 0)" /> を満たす。
                </p>
                <p>
                    この <InlineMath math="f" /> を <InlineMath math="\mathbb{R}^2" /> 全体に拡張する。<InlineMath math="\tilde{f}(a, b) = a" /> と定めれば、これは明らかに線形であり、<InlineMath math="\tilde{f}(a, b) = a \leq \max(|a|, |b|) = p(a, b)" /> を満たす。よって <InlineMath math="\tilde{f}" /> がハーン-バナッハ定理が保証する拡張の一つである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ノルム保存拡張</h2>

            <p>
                部分的な劣線形汎関数として「ノルム定数倍」を選んだ場合、極めて強力なバリエーションとしてノルムを増大させない拡張が得られます。
            </p>

            <ContentBox type="theorem" title="Corollary 4.1-1 (ノルム保存拡張)">
                <p>
                    <InlineMath math="X" /> をノルム空間、<InlineMath math="M" /> をその部分空間とする。<InlineMath math="M" /> 上で定義された有界線形汎関数 <InlineMath math="f : M \to \mathbb{R}" /> （その作用素ノルムを <InlineMath math="\|f\|_M" /> とする）は、同じ作用素ノルムを持つ <InlineMath math="X" /> 全体への有界線形汎関数 <InlineMath math="\tilde{f} : X \to \mathbb{R}" /> に拡張できる。すなわち、<InlineMath math="X" /> 全体でのノルム <InlineMath math="\|\tilde{f}\|_X" /> が <InlineMath math="\|\tilde{f}\|_X = \|f\|_M" /> となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p(x) = \|f\|_M \|x\|" /> と定義すると、ノルムの性質から <InlineMath math="p" /> は <InlineMath math="X" /> 上の劣線形汎関数となる。<InlineMath math="M" /> 上では <InlineMath math="f(x) \leq |f(x)| \leq \|f\|_M \|x\| = p(x)" /> が成り立つ。
                </p>
                <p>
                    Theorem 4.1-1 により、<InlineMath math="\tilde{f}(x) \leq p(x) = \|f\|_M \|x\|" /> を満たす全空間への拡張 <InlineMath math="\tilde{f}" /> が存在する。<InlineMath math="-x" /> を代入すると <InlineMath math="-\tilde{f}(x) \leq \|f\|_M \|x\|" /> となるため、合わせて <InlineMath math="|\tilde{f}(x)| \leq \|f\|_M \|x\|" />。
                </p>
                <p>
                    これは <InlineMath math="\tilde{f}" /> が有界であり、その作用素ノルムが <InlineMath math="\|\tilde{f}\|_X \leq \|f\|_M" /> であることを示す。一方で <InlineMath math="\tilde{f}" /> は <InlineMath math="M" /> 上の <InlineMath math="f" /> の拡張であるため、全体のノルムが部分空間でのノルムより小さくなることはありえない。したがって <InlineMath math="\|\tilde{f}\|_X = \|f\|_M" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 4.1-2 (<InlineMath math="c_0" /> から <InlineMath math="\ell^\infty" /> への拡張)</span>}>
                <p>
                    有界数列の空間 <InlineMath math="\ell^\infty" /> と、その部分空間である「 <InlineMath math="0" /> に収束する数列の空間」 <InlineMath math="c_0" /> を考える（ノルムはともに上限ノルム <InlineMath math="\|\cdot\|_\infty" />）。
                </p>
                <p>
                    数列 <InlineMath math="(y_1, y_2, \ldots) \in \ell^1" /> を用いて、<InlineMath math="c_0" /> 上の線形汎関数を <InlineMath math="f(x) = \sum_{n=1}^\infty x_n y_n" /> （<InlineMath math="x \in c_0" />）と定義すると、作用素ノルムは <InlineMath math="\|f\| = \|y\|_1" /> となる。Corollary 4.1-1 によれば、この汎関数をそのままのノルムで <InlineMath math="\ell^\infty" /> 全体に拡張する <InlineMath math="\tilde{f}" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ハーン-バナッハ定理の意義">
                <p>
                    特定の点や部分空間上でだけ「都合の良い汎関数」を作るのは比較的簡単です。しかし、それを空間全体で破綻させずに定義し直すのは非常に困難です。ハーン-バナッハ定理は「局所的に作れた都合の良い観測機は、必ず全体でも使える」と保証してくれる関数解析最強の存在定理なのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>劣線形汎関数は、ノルムのように加法と定数倍に対して上界を与える関数である。</li>
                    <li>ハーン-バナッハ定理は、部分空間上の汎関数を劣線形関数で抑え込んだまま全体に拡張できることを保証する（Theorem 4.1-1）。</li>
                    <li>その系として、部分空間でのノルムを保ったまま空間全体へ拡張する連続線形汎関数が常に存在する（Corollary 4.1-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
