import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CohomologyCalculationExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で導いたマイヤー・ビエトリス完全系列と、ポアンカレの補題（可縮な空間のコホモロジーは自明）を組み合わせることで、様々な多様体のド・ラームコホモロジー群を具体的に計算することができます。
                ここでは、球面、トーラス、実射影空間という代表的な多様体の計算例を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">球面のコホモロジー</h2>

            <p className="leading-relaxed">
                <InlineMath math="n" /> 次元球面 <InlineMath math="S^n" /> のコホモロジー群は、次元に関する帰納法を用いて計算できます。
                <InlineMath math="S^n" /> は、少しだけ重なりを持たせた2つの「半球」によって被覆されます。
            </p>

            <ContentBox type="example" title={<span>Example 7.4-1 (<InlineMath math="H^k_{\mathrm{dR}}(S^n)" /> の計算)</span>}>
                <p>
                    <InlineMath math="S^n" /> を、北極 <InlineMath math="N" /> を除いた開集合 <InlineMath math="U = S^n \setminus \{N\}" /> と、南極 <InlineMath math="S" /> を除いた開集合 <InlineMath math="V = S^n \setminus \{S\}" /> で被覆する。
                    立体射影により、<InlineMath math="U" /> と <InlineMath math="V" /> はそれぞれ <InlineMath math="\mathbb{R}^n" /> と微分同相であり、特に可縮である。
                    また、その共通部分 <InlineMath math="U \cap V = S^n \setminus \{N, S\}" /> は、赤道 <InlineMath math="S^{n-1}" /> と開区間 <InlineMath math="(-1, 1)" /> の直積 <InlineMath math="S^{n-1} \times (-1, 1)" /> と微分同相であり、<InlineMath math="S^{n-1}" /> とホモトピー同値である。
                </p>
                <p className="mt-2">
                    マイヤー・ビエトリス完全系列を書き下す。
                </p>
                <BlockMath math="\cdots \to H^k(U) \oplus H^k(V) \xrightarrow{s} H^k(U \cap V) \xrightarrow{\delta} H^{k+1}(S^n) \xrightarrow{r} H^{k+1}(U) \oplus H^{k+1}(V) \to \cdots" />
                <p className="mt-2">
                    ポアンカレの補題より、<InlineMath math="k \geq 1" /> のとき <InlineMath math="H^k(U) = H^k(V) = 0" /> である。
                    また、<InlineMath math="H^{k+1}(U) = H^{k+1}(V) = 0" /> でもある。
                    したがって、完全系列の <InlineMath math="k \geq 1" /> の部分は
                </p>
                <BlockMath math="0 \to H^k(U \cap V) \xrightarrow{\delta} H^{k+1}(S^n) \to 0" />
                <p className="mt-2">
                    となる。完全性より、<InlineMath math="\delta" /> は同型写像である。
                    ホモトピー不変性より <InlineMath math="H^k(U \cap V) \cong H^k(S^{n-1})" /> であるから、
                </p>
                <BlockMath math="H^{k+1}(S^n) \cong H^k(S^{n-1}) \quad (k \geq 1)" />
                <p className="mt-2">
                    という漸化式が得られる。
                </p>
                <p className="mt-2">
                    <InlineMath math="k=0" /> の部分の完全系列を考える。
                </p>
                <BlockMath math="0 \to H^0(S^n) \xrightarrow{r} H^0(U) \oplus H^0(V) \xrightarrow{s} H^0(U \cap V) \xrightarrow{\delta} H^1(S^n) \to 0" />
                <p className="mt-2">
                    <InlineMath math="S^n, U, V" /> はすべて連結（<InlineMath math="n \geq 1" />）なので、<InlineMath math="H^0" /> はすべて <InlineMath math="\mathbb{R}" /> に同型である。
                    <InlineMath math="U \cap V \simeq S^{n-1}" /> の連結成分の数は、<InlineMath math="n \geq 2" /> ならば1個（<InlineMath math="H^0 \cong \mathbb{R}" />）、<InlineMath math="n=1" /> ならば2個（<InlineMath math="H^0 \cong \mathbb{R}^2" />）である。
                </p>
                <p className="mt-2">
                    <InlineMath math="n \geq 2" /> のとき、<InlineMath math="s : \mathbb{R} \oplus \mathbb{R} \to \mathbb{R}" /> は <InlineMath math="s(c_1, c_2) = c_1 - c_2" /> であり全射である。
                    完全性より <InlineMath math="\ker(\delta) = \mathrm{im}(s) = \mathbb{R}" />、かつ <InlineMath math="\delta" /> は全射なので、<InlineMath math="H^1(S^n) \cong \mathbb{R}/\mathbb{R} = 0" /> となる。
                    これを漸化式 <InlineMath math="H^{k+1}(S^n) \cong H^k(S^{n-1})" /> と組み合わせることで、帰納的に
                </p>
                <BlockMath math="H^k_{\mathrm{dR}}(S^n) \cong \begin{cases} \mathbb{R} & (k = 0, n) \\ 0 & (\text{それ以外}) \end{cases}" />
                <p className="mt-2">
                    が得られる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                特に <InlineMath math="S^1" /> の場合は、<InlineMath math="n=1" /> のときの <InlineMath math="H^1" /> の計算が少し異なりますが、結果は同じになります。
                これは、<InlineMath math="S^1" /> 上の角度形式 <InlineMath math="d\theta" /> が <InlineMath math="H^1" /> の生成元となることと整合しています。
            </p>

            <ContentBox type="example" title={<span>Example 7.4-2 (<InlineMath math="S^1" /> の場合の直接的確認)</span>}>
                <p>
                    <InlineMath math="H^1_{\mathrm{dR}}(S^1) \cong \mathbb{R}" /> であることを、微分形式の積分を用いて直接確認する。
                </p>
                <p className="mt-2">
                    <InlineMath math="S^1" /> 上の1-形式 <InlineMath math="\omega = d\theta" /> を考える。
                    <InlineMath math="S^1" /> は1次元なので、任意の1-形式は閉形式（<InlineMath math="d\omega = 0" />）である。
                    一方、<InlineMath math="\omega" /> の <InlineMath math="S^1" /> 全体での積分は <InlineMath math="\int_{S^1} d\theta = 2\pi \neq 0" /> である。
                </p>
                <p className="mt-2">
                    もし <InlineMath math="\omega" /> が完全形式（<InlineMath math="\omega = df" />）であれば、ストークスの定理より
                </p>
                <BlockMath math="\int_{S^1} \omega = \int_{S^1} df = \int_{\partial S^1} f = \int_{\emptyset} f = 0" />
                <p className="mt-2">
                    となるはずであり、矛盾する。したがって <InlineMath math="\omega" /> は完全形式ではなく、そのコホモロジー類 <InlineMath math="[\omega] \in H^1_{\mathrm{dR}}(S^1)" /> は非零である。
                    任意の閉1-形式 <InlineMath math="\eta" /> に対して、<InlineMath math="c = \frac{1}{2\pi} \int_{S^1} \eta" /> とおくと、<InlineMath math="\int_{S^1} (\eta - c\omega) = 0" /> となる。
                    積分が零になる閉形式は完全形式であることが示せるため、<InlineMath math="[\eta] = c[\omega]" /> となり、<InlineMath math="[\omega]" /> が <InlineMath math="H^1" /> の基底（1次元）であることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">トーラスと実射影空間</h2>

            <p className="leading-relaxed">
                トーラス <InlineMath math="T^2 = S^1 \times S^1" /> のコホモロジーも、マイヤー・ビエトリス完全系列を用いて計算できます。
            </p>

            <ContentBox type="example" title={<span>Example 7.4-3 (<InlineMath math="H^k_{\mathrm{dR}}(T^2)" /> の計算)</span>}>
                <p>
                    <InlineMath math="T^2" /> を、<InlineMath math="S^1" /> の被覆 <InlineMath math="U, V" /> ともう一つの <InlineMath math="S^1" /> との直積として被覆する。
                    すなわち、<InlineMath math="\tilde{U} = U \times S^1" />、<InlineMath math="\tilde{V} = V \times S^1" /> とする。
                    これらは円柱面 <InlineMath math="\mathbb{R} \times S^1" /> と微分同相であり、<InlineMath math="S^1" /> とホモトピー同値である。
                    また、<InlineMath math="\tilde{U} \cap \tilde{V} = (U \cap V) \times S^1" /> は2つの円柱面の非交和であり、<InlineMath math="S^1 \sqcup S^1" /> とホモトピー同値である。
                </p>
                <p className="mt-2">
                    マイヤー・ビエトリス完全系列にこれらのホモトピー同値な空間のコホモロジー（<InlineMath math="S^1" /> の結果）を代入して計算を進めると、
                </p>
                <BlockMath math="H^k_{\mathrm{dR}}(T^2) \cong \begin{cases} \mathbb{R} & (k = 0) \\ \mathbb{R}^2 & (k = 1) \\ \mathbb{R} & (k = 2) \\ 0 & (k \geq 3) \end{cases}" />
                <p className="mt-2">
                    が得られる。
                    （より一般に、直積多様体のコホモロジーを計算する「キュネットの公式（Künneth formula）」を用いれば、<InlineMath math="H^*(M \times N) \cong H^*(M) \otimes H^*(N)" /> として直接導くこともできる。）
                </p>
                <p className="mt-2">
                    <InlineMath math="H^1 \cong \mathbb{R}^2" /> の基底は、2つの「穴（経線と緯線）」の周りを回る角度形式 <InlineMath math="[d\theta_1]" /> と <InlineMath math="[d\theta_2]" /> で与えられる。
                    <InlineMath math="H^2 \cong \mathbb{R}" /> の基底は、面積形式 <InlineMath math="[d\theta_1 \wedge d\theta_2]" /> である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                最後に、向き付け不可能な多様体である実射影空間の例を見ます。
            </p>

            <ContentBox type="example" title={<span>Example 7.4-4 (<InlineMath math="\mathbb{R}P^2" /> のコホモロジー)</span>}>
                <p>
                    実射影平面 <InlineMath math="\mathbb{R}P^2" /> のコホモロジーを計算する。
                    <InlineMath math="\mathbb{R}P^2" /> は球面 <InlineMath math="S^2" /> の対蹠点を同一視した商空間であり、二重被覆写像 <InlineMath math="\pi : S^2 \to \mathbb{R}P^2" /> が存在する。
                </p>
                <p className="mt-2">
                    対蹠写像 <InlineMath math="A : S^2 \to S^2" />（<InlineMath math="A(x) = -x" />）が引き起こす引き戻し <InlineMath math="A^* : H^k(S^2) \to H^k(S^2)" /> を考える。
                    <InlineMath math="\mathbb{R}P^2" /> 上の微分形式 <InlineMath math="\omega" /> は、<InlineMath math="S^2" /> 上の <InlineMath math="A" />-不変な（<InlineMath math="A^*\tilde{\omega} = \tilde{\omega}" /> を満たす）微分形式 <InlineMath math="\tilde{\omega} = \pi^*\omega" /> と1対1に対応する。
                </p>
                <p className="mt-2">
                    <InlineMath math="k=2" /> のとき、<InlineMath math="S^2" /> の面積形式 <InlineMath math="\sigma" /> に対して、<InlineMath math="A" /> は向きを反転させる（ヤコビ行列式が負）ため、<InlineMath math="A^*\sigma = -\sigma" /> となる。
                    したがって、<InlineMath math="A" />-不変な2-形式は <InlineMath math="0" /> しか存在しない。
                    これにより、<InlineMath math="H^2_{\mathrm{dR}}(\mathbb{R}P^2) = 0" /> となる。
                </p>
                <p className="mt-2">
                    <InlineMath math="H^1(S^2) = 0" /> より、<InlineMath math="H^1_{\mathrm{dR}}(\mathbb{R}P^2) = 0" /> も従う。
                    <InlineMath math="\mathbb{R}P^2" /> は連結なので <InlineMath math="H^0 \cong \mathbb{R}" /> である。
                </p>
                <p className="mt-2">
                    まとめると、
                </p>
                <BlockMath math="H^k_{\mathrm{dR}}(\mathbb{R}P^2) \cong \begin{cases} \mathbb{R} & (k = 0) \\ 0 & (\text{それ以外}) \end{cases}" />
                <p className="mt-2">
                    となる。最高次のコホモロジーが <InlineMath math="0" /> になるのは、<InlineMath math="\mathbb{R}P^2" /> が向き付け不可能であることに由来する一般的な性質である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ベッチ数とオイラー標数">
                <p>
                    <InlineMath math="k" /> 次ド・ラームコホモロジー群の次元 <InlineMath math="b_k = \dim H^k_{\mathrm{dR}}(M)" /> を<strong>ベッチ数（Betti number）</strong>と呼びます。
                    ベッチ数は多様体の「<InlineMath math="k" /> 次元の穴の数」を表す位相不変量です。
                    これらを交代和した
                </p>
                <BlockMath math="\chi(M) = \sum_{k=0}^n (-1)^k b_k" />
                <p className="mt-2">
                    を<strong>オイラー標数（Euler characteristic）</strong>と呼びます。
                    例えば、<InlineMath math="S^2" /> では <InlineMath math="b_0=1, b_1=0, b_2=1" /> より <InlineMath math="\chi(S^2) = 1 - 0 + 1 = 2" />、
                    <InlineMath math="T^2" /> では <InlineMath math="b_0=1, b_1=2, b_2=1" /> より <InlineMath math="\chi(T^2) = 1 - 2 + 1 = 0" /> となります。
                    このオイラー標数は、微分幾何II（4-6）で学ぶ「ガウス-ボンネの定理」によって、多様体の「全曲率」と驚くべき形で結びつきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>マイヤー・ビエトリス完全系列を用いることで、球面 <InlineMath math="S^n" /> のコホモロジーが帰納的に計算できる（<InlineMath math="H^0 \cong \mathbb{R}, H^n \cong \mathbb{R}" />、他は <InlineMath math="0" />）。</li>
                    <li>トーラス <InlineMath math="T^2" /> のコホモロジーは <InlineMath math="H^0 \cong \mathbb{R}, H^1 \cong \mathbb{R}^2, H^2 \cong \mathbb{R}" /> となり、2つの1次元の穴と1つの2次元の穴（空洞）を持つことを反映している。</li>
                    <li>向き付け不可能な多様体（例えば <InlineMath math="\mathbb{R}P^2" />）では、最高次のコホモロジーは <InlineMath math="0" /> となる。</li>
                    <li>コホモロジー群の次元（ベッチ数）の交代和はオイラー標数を与え、多様体の重要な位相不変量となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
