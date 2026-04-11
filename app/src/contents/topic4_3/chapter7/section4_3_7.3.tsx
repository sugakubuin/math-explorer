import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JacobiWeierstrassCorrespondence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、これまで独立に発展してきたワイエルシュトラスの楕円関数理論とヤコビの楕円関数理論が、互いにどのように対応しているかを明らかにします。両者は見た目もパラメータの取り方も異なりますが、本質的には同じ楕円関数を記述するための異なる座標系のようなものです。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ワイエルシュトラスからヤコビへの変換</h2>

            <p>ワイエルシュトラスの <InlineMath math="\wp" /> 関数は微分方程式によって定義され、ヤコビの楕円関数は楕円積分の逆関数として定義されました。これら二つの体系は、適切な変数のスケーリングと定数の置き換えによって完全に一致します。</p>

            <ContentBox type="theorem" title={<span>Theorem 7.3-1 (<InlineMath math="\text{sn}" /> と <InlineMath math="\wp" /> の関係)</span>}>
                <p>適切な線形変換 <InlineMath math="u = cz" /> と母数 <InlineMath math="k" /> の <InlineMath math="e_1, e_2, e_3" /> による表示を通じて、ワイエルシュトラスの <InlineMath math="\wp" /> 関数とヤコビ関数は相互に変換される。具体的には以下の関係が成り立つ。</p>
                <BlockMath math="\wp(z) - e_3 = \frac{e_1 - e_3}{\text{sn}^2(\sqrt{e_1-e_3}\,z, k)}" />
                <p>ここで、母数 <InlineMath math="k" /> は次のように与えられる。</p>
                <BlockMath math="k^2 = \frac{e_2-e_3}{e_1-e_3}" />
            </ContentBox>

            <p>この定理は、両者の微分方程式が本質的に同一の代数曲線をパラメータ表示していることから自然に導かれます。実際に証明を見てみましょう。</p>

            <ContentBox type="proof" title="Proof">
                <p><InlineMath math="\wp(z)" /> の満たす微分方程式は以下で与えられる。</p>
                <BlockMath math="(\wp')^2 = 4(\wp - e_1)(\wp - e_2)(\wp - e_3)" />
                <p>ここで、新しい変数 <InlineMath math="w" /> を <InlineMath math="w^2 = \frac{e_1-e_3}{\wp(z)-e_3}" /> により導入する。このとき、<InlineMath math="\wp(z) = e_3 + \frac{e_1-e_3}{w^2}" /> であり、これを微分方程式に代入して整理すると、ヤコビの <InlineMath math="\text{sn}" /> 関数が満たす微分方程式に帰着する。</p>
                <BlockMath math="\left(\frac{dw}{du}\right)^2 = (1-w^2)(1-k^2w^2)" />
                <p>ここで <InlineMath math="u = \sqrt{e_1-e_3}\,z" /> および <InlineMath math="k^2 = \frac{e_2-e_3}{e_1-e_3}" /> と置いた。境界条件を比較することにより、<InlineMath math="w = \text{sn}(u, k)" /> を得る。したがって、</p>
                <BlockMath math="\wp(z) - e_3 = \frac{e_1 - e_3}{\text{sn}^2(u, k)}" />
                <p>が成り立つ。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>このように、一方の関数で成り立つ性質は、変数変換を介してもう一方の関数の性質へと翻訳することができます。</p>

            <ContentBox type="example" title="Example 7.3-1">
                <p><InlineMath math="e_1 = 2, e_2 = -1, e_3 = -1" /> の場合の変換公式を具体的に計算する。まず、母数 <InlineMath math="k" /> を求める。</p>
                <BlockMath math="k^2 = \frac{-1 - (-1)}{2 - (-1)} = 0" />
                <p>ゆえに <InlineMath math="k = 0" /> となる。<InlineMath math="k=0" /> のとき、ヤコビの <InlineMath math="\text{sn}" /> 関数は三角関数に退化し、<InlineMath math="\text{sn}(u, 0) = \sin u" /> となる。また、スケーリング因子は <InlineMath math="\sqrt{e_1-e_3} = \sqrt{3}" /> であるから、変換公式は以下のようになる。</p>
                <BlockMath math="\wp(z) = -1 + \frac{3}{\sin^2(\sqrt{3}\,z)}" />
                <p>これは、重根をもつ場合（<InlineMath math="e_2 = e_3" />）における <InlineMath math="\wp" /> 関数の初等関数による表示を与えている。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">パラメータの対応</h2>

            <p>ヤコビの理論とワイエルシュトラスの理論では、楕円曲線を特徴づけるパラメータの選び方が異なります。それぞれの表現がどの分野に適しているかを知ることは、応用上非常に有益です。</p>

            <ContentBox type="remark" title="理論ごとのパラメータの違いと応用">
                <p>ワイエルシュトラスの流儀では、格子 <InlineMath math="\Lambda = \omega_1\mathbb{Z} + \omega_2\mathbb{Z}" /> または不変量 <InlineMath math="g_2, g_3" /> をパラメータとします。これは代数幾何学的な視点と相性が良く、数論的応用（楕円曲線論など）に非常に適しています。</p>
                <p>一方で、ヤコビの流儀では、母数 <InlineMath math="k" /> （あるいは <InlineMath math="\tau = iK'/K" />）をパラメータとします。<InlineMath math="k" /> は物理現象（例えば振り子の振幅）と直接結びつくことが多いため、物理学や工学的応用、非線形微分方程式の厳密解の記述において重宝されます。</p>
            </ContentBox>

            <p>次に、両者のパラメータがどのように対応するかを具体的に確認します。</p>

            <ContentBox type="example" title="Example 7.3-2">
                <p>ヤコビの理論におけるパラメータ <InlineMath math="\tau = iK'/K" /> と、ワイエルシュトラスの理論におけるモジュラス <InlineMath math="\tau_W = \omega_2/\omega_1" /> の関係を確認する。</p>
                <p>Theorem 7.3-1 の変数変換 <InlineMath math="u = \sqrt{e_1-e_3}\,z" /> において、<InlineMath math="z" /> 平面での半周期 <InlineMath math="\omega_1/2" /> は、<InlineMath math="u" /> 平面での完全楕円積分 <InlineMath math="K" /> に対応する。同様に、<InlineMath math="\omega_2/2" /> は <InlineMath math="iK'" /> に対応する。したがって、</p>
                <BlockMath math="K = \sqrt{e_1-e_3}\,\frac{\omega_1}{2}, \quad iK' = \sqrt{e_1-e_3}\,\frac{\omega_2}{2}" />
                <p>となる。これらの比をとると、</p>
                <BlockMath math="\frac{iK'}{K} = \frac{\omega_2}{\omega_1}" />
                <p>が得られる。すなわち、ヤコビの <InlineMath math="\tau" /> とワイエルシュトラスのモジュラスは完全に一致していることがわかる。</p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ワイエルシュトラスの <InlineMath math="\wp(z)" /> は、変数変換 <InlineMath math="u = \sqrt{e_1-e_3}\,z" /> を用いてヤコビの <InlineMath math="\text{sn}(u, k)" /> 関数によって表すことができる。</li>
                    <li>母数 <InlineMath math="k" /> は <InlineMath math="k^2 = (e_2-e_3)/(e_1-e_3)" /> で与えられる。</li>
                    <li>ヤコビのパラメータ <InlineMath math="iK'/K" /> とワイエルシュトラスの格子モジュラス <InlineMath math="\omega_2/\omega_1" /> は一致する。</li>
                    <li>ワイエルシュトラスの流儀は数論や代数幾何学に、ヤコビの流儀は物理や微分方程式の応用にそれぞれ適している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
