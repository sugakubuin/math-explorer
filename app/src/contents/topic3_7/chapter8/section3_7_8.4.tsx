import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MonteCarloApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                大数の法則は単なる抽象的な定理ではなく、現代の科学計算において欠かせない「モンテカルロ法」の理論的支柱となっています。
                本節では、この強力な計算手法の仕組みと利点について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">確率的数値積分</h2>

            <p className="leading-relaxed">
                積分 <InlineMath math="I = \int_0^1 f(x) dx" /> を計算したいとき、大数の法則を逆に利用して、
                期待値の推定として積分値を求めることができます。
            </p>

            <ContentBox type="definition" title="モンテカルロ積分のアルゴリズム">
                <ul className="list-decimal list-inside space-y-2">
                    <li>
                        区間 <InlineMath math="[0, 1]" /> 上の一様分布に従う独立な乱数列 <InlineMath math="X_1, X_2, \ldots, X_n" /> を発生させる。
                    </li>
                    <li>
                        各点での関数の値 <InlineMath math="f(X_i)" /> を計算し、その平均をとる：
                        <BlockMath math="\hat{I}_n = \frac{1}{n} \sum_{i=1}^n f(X_i)" />
                    </li>
                    <li>
                        大数の強法則により、<InlineMath math="n \to \infty" /> とすると、
                        <BlockMath math="\hat{I}_n \xrightarrow{\text{a.s.}} E[f(X)] = \int_0^1 f(x) dx" />
                        となり、積分値 <InlineMath math="I" /> が得られる。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 8.4-1 (高次元積分の優位性)">
                <p>
                    台形公式などの確定的手法では、<InlineMath math="d" /> 次元の積分を計算する際の誤差は一般に <InlineMath math="O(n^{-2/d})" /> となります。
                    これは次元 <InlineMath math="d" /> が大きくなると急速に精度が悪化することを意味します（次元の呪い）。
                </p>
                <p className="mt-2">
                    一方、モンテカルロ法の平均二乗誤差は、次元に関わらず常に <InlineMath math="O(1/n)" />（標準誤差は <InlineMath math="O(1/\sqrt{n})" />）です。
                    したがって、数十次元を超えるような複雑な積分（金融工学や統計力学など）では、モンテカルロ法が圧倒的に有利となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束の「質」への問い</h2>

            <p className="leading-relaxed">
                ここまでの章で、標本平均が期待値に「収束する」ことはわかりました。
                しかし、実用上はさらに一歩踏み込んで、<b>「平均からどれくらいの確率で、どれくらい外れるのか」</b>を知る必要があります。
            </p>

            <ContentBox type="remark" title="収束速度と誤差評価">
                <p>
                    モンテカルロ法において <InlineMath math="n = 10,000" /> 回の試行を行ったとき、その誤差が <InlineMath math="\pm 0.01" /> 以内に収まる確率はどれくらいでしょうか？
                    この問いに答えるためには、収束の「極限」だけでなく、その「分布の変化（揺らぎ）」を詳しく調べる必要があります。
                </p>
                <p>
                    この「揺らぎ」の正体こそが、次章で扱う「中心極限定理」です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>モンテカルロ積分は、積分の計算を期待値の推定問題へと変換する手法である。</li>
                    <li>大数の強法則により、サンプル数を増やすことでほとんど確実に真の値に収束する。</li>
                    <li>誤差の収束速度が次元に依存しないため、高次元問題における標準的な計算手法となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
