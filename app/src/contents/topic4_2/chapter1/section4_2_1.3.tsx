import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UniquenessOfAnalyticContinuation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                解析接続によって関数の定義域を広げていく際、一番気になるのは「繋ぎ方によって結果が変わってしまわないか？」という点です。前節で見たように、異なる経路を経由した場合は結果が変わる可能性があります（経路依存性）。しかし、「同じ1つの経路」に沿ってさえいれば、途中の関数要素の取り方（円板の被覆の仕方）を変えたとしても、最終的な結果は必ず一致します。本節では、この「解析接続の一意性」について証明とともに確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一意性定理</h2>

            <p>
                ひとつの曲線 <InlineMath math="\gamma" /> が与えられたとき、それを覆う関数要素の列（チェーン）の取り方は無数に存在します。円板を細かく取ったり、大きく取ったりしても、同じ出発点から同じ到達点に至るのであれば、得られる関数要素の意味は同じになります。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 1.3-1 (解析接続の一意性)</span>}>
                <p>
                    曲線 <InlineMath math="\gamma : [0, 1] \to \mathbb{C}" /> に沿う、同じ初期関数要素 <InlineMath math="(f, D)" /> を起点とする2つの解析接続を考える。
                    この2つの解析接続がそれぞれ最終的に与える終点 <InlineMath math="\gamma(1)" /> の近傍での関数要素を <InlineMath math="(g_1, U_1)" /> と <InlineMath math="(g_2, U_2)" /> とするとき、これらは <InlineMath math="\gamma(1)" /> のある近傍 <InlineMath math="U \subset U_1 \cap U_2" /> において <InlineMath math="g_1(z) = g_2(z)" /> を満たす。すなわち、結果は途中の被覆の取り方によらず同一である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\gamma" /> はコンパクト区間 <InlineMath math="[0, 1]" /> の連続写像像であるからコンパクトである。2つの解析接続を構成するそれぞれの円板の連鎖を考える。
                    ルベーグ数の補題により、これらの2つの被覆から区間 <InlineMath math="[0, 1]" /> の十分細かい共通の分割
                    <InlineMath math="0 = t_0 < t_1 < \dots < t_n = 1" />
                    を選び直すことができる。すなわち、各小部分区間 <InlineMath math="[t_k, t_{k+1}]" /> の像 <InlineMath math="\gamma([t_k, t_{k+1}])" /> が、2つの接続のそれぞれの <InlineMath math="k" /> 番目の領域（円板）の中に完全に含まれるように設定できる。
                </p>
                <p>
                    2つの接続による各ステップの関数要素を <InlineMath math="(f^{(1)}_k, D^{(1)}_k)" /> および <InlineMath math="(f^{(2)}_k, D^{(2)}_k)" /> と書く。<InlineMath math="k=0" /> においては、ともに初期関数要素 <InlineMath math="(f, D)" /> と直接接続関係にある（あるいはそれ自身である）ため、共通部分領域上で同一である。
                </p>
                <p>
                    帰納法を用いる。<InlineMath math="k" /> 番目のステップで、ある共通近傍で <InlineMath math="f^{(1)}_k = f^{(2)}_k" /> が成り立っていると仮定する。曲線は連続であるから、<InlineMath math="t_k" /> の近傍において、<InlineMath math="k" /> 番目の領域と <InlineMath math="k+1" /> 番目の領域は共通部分を持つ。
                </p>
                <p>
                    領域 <InlineMath math="D^{(1)}_{k+1} \cap D^{(2)}_{k+1}" /> と、手前の交わり <InlineMath math="D^{(1)}_k \cap D^{(2)}_k" /> は曲線上を通じで局所的に重なりを持つ。この重なっている部分開集合において、定義より <InlineMath math="f^{(1)}_{k+1} = f^{(1)}_k = f^{(2)}_k = f^{(2)}_{k+1}" /> が成り立つ。
                </p>
                <p>
                    開集合上で <InlineMath math="f^{(1)}_{k+1} = f^{(2)}_{k+1}" /> が成り立つため、§1.1 の「一致の定理」により、<InlineMath math="D^{(1)}_{k+1} \cap D^{(2)}_{k+1}" /> の連結成分の全体で両関数は一致しなければならない。
                </p>
                <p>
                    この推論を <InlineMath math="k = 0" /> から <InlineMath math="n-1" /> まで繰り返すことで、終点の関数要素 <InlineMath math="g_1 = f^{(1)}_n" /> と <InlineMath math="g_2 = f^{(2)}_n" /> が終点の共通近傍で一致することが証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この証明の本質は、局所的な一致を一致の定理によって次々に拡張していく「ドミノ倒し」のような論法にあります。
            </p>

            <ContentBox type="example" title="Example 1.3-1">
                <p>
                    円板 <InlineMath math="D_0 = \{|z| < 1\}" /> で定義された関数要素 <InlineMath math="(f, D_0)" /> : <InlineMath math="f(z) = \sum_{n=0}^\infty z^n" /> を考えます。
                </p>
                <p>
                    点 <InlineMath math="z = -1/2" /> から出発し、点 <InlineMath math="z = -2" /> に向かう直線を <InlineMath math="\gamma" /> とします。<InlineMath math="\gamma" /> に沿って、半径の小さい円板をたくさん並べて接続していく被覆と、極力少ない大きめの円板で一気に被覆する2通りの解析接続を考えます。
                </p>
                <p>
                    どちらの円板の取り方をしたとしても、一致の定理により常に共通部分における値は保たれ、最終地点 <InlineMath math="z = -2" /> における関数要素の値は有理関数で表された <InlineMath math="\frac{1}{1 - (-2)} = \frac{1}{3}" /> に一致することが保証されます。途中でどのような円板の鎖を使っても、計算結果は狂いません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一意性の意味と限界</h2>

            <p>
                解析接続の一意性は強力ですが、その主張の「射程範囲」を正しく理解することが重要です。この一意性はあくまでも「指定された曲線 <InlineMath math="\gamma" /> の上を動く限り」においてのみ成立します。
            </p>

            <ContentBox type="remark" title="経路が変われば結果も変わる">
                <p>
                    Theorem 1.3-1 は曲線 <InlineMath math="\gamma" /> を固定したときの「被覆の取り方」による不定性を排除したに過ぎません。曲線 <InlineMath math="\gamma" /> 自体を別の道筋 <InlineMath math="\gamma'" /> に取り替えた場合、同じ終点に到達したとしても全く異なる関数要素になることがあります。ここが一意性の「限界」であり、正則関数の多様な広がりを生み出す源泉です。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-2">
                <p>
                    平方根関数 <InlineMath math="f(z) = \sqrt{z}" /> の解析接続を考えます。始点 <InlineMath math="z = 1" /> で <InlineMath math="f(1) = 1" /> となるような正則な関数要素を起点とします。代数表現では極座標を用いて <InlineMath math="\sqrt{r e^{i\theta}} = \sqrt{r} e^{i\theta/2}" /> と書けます。
                </p>
                <p>
                    原点 <InlineMath math="z = 0" /> を中心とする半径1の単位円周に沿って反時計回りに一周する経路 <InlineMath math="\gamma" /> を考えます。この経路上では <InlineMath math="z = e^{i\theta}" /> であり、<InlineMath math="\theta" /> は <InlineMath math="0" /> から <InlineMath math="2\pi" /> まで連続的に増加していきます。
                </p>
                <p>
                    これに沿って解析接続を行うと、関数値は
                </p>
                <BlockMath math="f(e^{i\theta}) = e^{i\theta / 2}" />
                <p>
                    と変化していきます。一周して終点 <InlineMath math="\theta = 2\pi" /> (再び点 <InlineMath math="z = 1" /> に戻る) に達したとき、その値は
                </p>
                <BlockMath math="f(e^{2\pi i}) = e^{i(2\pi) / 2} = e^{i\pi} = -1" />
                <p>
                    となります。元の出発点 <InlineMath math="z=1" /> での値は <InlineMath math="1" /> でしたから、ぐるりと一周解析接続していくと元の値とは異なる <InlineMath math="-1" /> になって（符号が反転して）しまうことがわかります。
                </p>
            </ContentBox>

            <p>
                このように、経路によって計算結果の行き着く先が変わってしまう関数を「多価関数」と呼びます。次節では、この不条理とも思える現象を的確に捉える多価関数の概念と、その分岐構造について掘り下げていきます。
            </p>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>同じ経路に沿った解析接続であれば、中間の関数要素の取り方（円板の被覆方法）に関わらず、終点の関数要素は一意に定まる（一意性定理）。</li>
                    <li>一意性定理の証明は、共通する細分化された区間ごとに一致の定理を連鎖的に適用することで行われる。</li>
                    <li>ただし一意性は「同じ経路」においてのみ保証され、異なる経路を通った場合には異なる値に行き着くことがある（多価性の起源）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
