import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassApproximationTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までで、<strong>べき級数（無限に続く多項式）</strong>で表される関数は、無限回微分可能で極めて行儀の良い「解析的」な性質を持つことを見ました。
                しかし、世の中の連続関数がすべてべき級数で表せる（テイラー展開できる）わけではありません。至る所尖っているような病的でガタガタな連続関数もあります。（Chapter 6 参照: ワイエルシュトラス関数）。
            </p>
            <p>
                では、そのような「行儀の悪い」連続関数は、多項式（べき級数）という強力なツールから永遠に切り離されてしまうのでしょうか？
                この問いに、ワイエルシュトラス自身が与えた希望にあふれる驚くべき回答が「近似定理」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">近似定理の主張：すべての連続関数は多項式で近似できる</h2>

            <ContentBox type="theorem" title="Theorem 8.4-1 (ワイエルシュトラスの近似定理)">
                <p>
                    有界閉区間 <InlineMath math="[a, b]" /> 上で定義された任意の連続関数 <InlineMath math="f(x)" /> について考える。<br />
                    任意の <InlineMath math="\varepsilon > 0" /> （どれほど小さな誤差でも）が与えられたとき、それに対してある<strong>代数多項式 <InlineMath math="P(x)" /></strong> が存在して、区間内のすべての <InlineMath math="x \in [a, b]" /> において
                </p>
                <BlockMath math="|f(x) - P(x)| < \varepsilon" />
                <p>
                    を満たすようにできる。<br />
                    （言い換えれば、<InlineMath math="f(x)" /> に<strong>一様収束</strong>するような多項式の列 <InlineMath math="\{P_n(x)\}" /> が存在する。）
                </p>
            </ContentBox>

            <p>
                「どんなに滑らかでなく、無茶苦茶に振動する連続関数であったとしても、多項式という『最高に滑らかな関数』をうまく選べば、最大誤差 <InlineMath math="\varepsilon" /> のチューブ（帯）の中にすっぽり収まるように全体を近似できる」という途方もない定理です。実解析が辿り着いた、極限と連続性の応用に関する一つの到達点と言えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明のアイデア（ベルンシュタイン多項式）</h2>

            <p>
                ワイエルシュトラスの原証明は熱伝導の積分方程式を用いた技巧的なものでしたが、後年ベルンシュタイン（S. Bernstein）によって発見された、「確率論的なアイデア（二項分布）」を用いた非常に直感的で構成的な証明がよく知られています。
            </p>

            <ContentBox type="proof" title="証明の概略 (ベルンシュタイン多項式の構成)">
                <p>
                    便宜上、有界閉区間を <InlineMath math="[0, 1]" /> とする（一次変換で任意の <InlineMath math="[a, b]" /> に拡張可能）。<br />
                    連続関数 <InlineMath math="f(x)" /> に対して、次のような「<InlineMath math="n" /> 次のベルンシュタイン多項式」 <InlineMath math="B_n(x)" /> を構成する。
                </p>
                <BlockMath math="B_n(x) = \sum_{k=0}^n f\left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k}" />
                <p className="mt-4">
                    この式の形に見覚えはないだろうか。これは、確率 <InlineMath math="x" /> で表が出るコインを <InlineMath math="n" /> 回投げたとき、ちょうど <InlineMath math="k" /> 回表が出る確率が <InlineMath math="\binom{n}{k} x^k (1-x)^{n-k}" />（二項分布 <InlineMath math="B(n, x)" />）であることを利用している。
                    したがって、この多項式 <InlineMath math="B_n(x)" /> は、関数 <InlineMath math="f" /> の「期待値（期待される値の加重平均）」を計算していることに他ならない。
                </p>
                <p className="mt-4">
                    大数の法則により、試行回数 <InlineMath math="n" /> が大きくなればなるほど、表の出る割合 <InlineMath math="k/n" /> は真の確率 <InlineMath math="x" /> の周辺に鋭く集中（ピーク）していく。
                    つまり、多項式 <InlineMath math="B_n(x)" /> の値は、<InlineMath math="x" /> とは離れた場所の <InlineMath math="f(k/n)" /> の値の影響をほとんど受けなくなり、<InlineMath math="x" /> 付近の <InlineMath math="f(x)" /> の真の値を正確に反映するようになる。<br />
                    （この「期待値の分散」の評価にチェビシェフの不等式などを用いることで、<InlineMath math="B_n(x)" /> が <InlineMath math="f(x)" /> に一様収束することが厳密に示される。）
                </p>
            </ContentBox>

            <p>
                この定理によって、実解析における「連続関数」という広大で掴みどころのない世界の森羅万象が、「多項式の極限」という人工的で計算可能な形を通していくらでも高い精度で近似的に扱えることが保証されました。
                これは後に計算機科学や数値解析（関数近似理論）の理論的な支柱となっていきます。
            </p>

            <p>
                これで、関数列と無限級数によって解析の世界を劇的に広げた Chapter 7 ～ 8 の旅は完結です。<br />
                ここまでの「連続・微分」に関する強力な体系化を受けて、次章（Chapter 9）からは微積分学のもう一つの巨塔、<strong>「広義の面積」を厳密に定義するリーマン積分の本格的な理論構成</strong>へと足を踏み入れます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ワイエルシュトラスの近似定理：閉区間上のすべての連続関数は、多項式の列によって一様収束の形で近似できる。</li>
                    <li>テイラー展開のように「局所において完全に一致」する解析的な近似ではなく、「区間全体で一様に誤差 <InlineMath math="\varepsilon" /> に収める」大域的な近似である。</li>
                    <li>証明には確率論の期待値の概念を応用した「ベルンシュタイン多項式」による構成的アプローチなどが用いられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
