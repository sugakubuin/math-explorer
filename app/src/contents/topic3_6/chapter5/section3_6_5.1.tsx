import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LegendreTransformation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは、ラグランジアン <InlineMath math="F(x, u, u')" /> を用いて変分問題を記述する「ラグランジュ形式」を扱ってきました。
                しかし、物理学（特に解析力学）や高度な数学的議論においては、速度 <InlineMath math="u'" /> の代わりに「運動量」を基本変数とする定式化が極めて有効です。
                本節では、ラグランジュ形式からハミルトン形式への橋渡しとなる<b>ルジャンドル変換</b>と、新しい基本変数である<b>一般化運動量</b>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルジャンドル変換の定義</h2>

            <p className="leading-relaxed">
                まず、速度という概念を多変数の微分の視点から「運動量」という概念に変換します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (一般化運動量)">
                <p>
                    ラグランジアン <InlineMath math="F(x, u, u')" /> に対して、速度 <InlineMath math="u'" /> に関する偏微分
                    <BlockMath math="p = F_{u'}(x, u, u')" />
                    を、変数 <InlineMath math="u" /> に対応する<b>一般化運動量</b>（Generalized Momentum）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ここで、もし <InlineMath math="p = F_{u'}" /> を <InlineMath math="u'" /> について解くことができれば（すなわち <InlineMath math="u' = \psi(x, u, p)" />）、基本変数を速度から運動量に置き換えることができます。この変換を具体的に行うのがハミルトニアンです。
            </p>

            <ContentBox type="definition" title="Definition 5.1-2 (ハミルトニアン)">
                <p>
                    関数 <InlineMath math="F(x, u, u')" /> のルジャンドル変換として定義される次の関数
                    <BlockMath math="H(x, u, p) = p u' - F(x, u, u')" />
                    を、<b>ハミルトニアン</b>（Hamiltonian）と呼ぶ。
                    ここで、右辺の <InlineMath math="u'" /> は運動量の定義式を用いて <InlineMath math="p" /> と <InlineMath math="u" /> の関数として表されているものとする。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この変換が数学的に「うまくいく」ためには、ラグランジアンが速度に関して適切な凸性を持っていることが必要です。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1 (ルジャンドル変換の充足条件と対称性)">
                <p>
                    ラグランジアン <InlineMath math="F" /> が <InlineMath math="u'" /> について厳密に凸（<InlineMath math="F_{u'u'} > 0" />）であるとき、以下の性質が成り立つ：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>変数変換 <InlineMath math="p = F_{u'}" /> は局所的に可逆であり、<InlineMath math="u' = H_p(x, u, p)" /> が成り立つ。</li>
                    <li>ハミルトニアン <InlineMath math="H" /> は <InlineMath math="p" /> について凸であり、<InlineMath math="H_{pp} = 1 / F_{u'u'}" /> という関係がある。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="H(x, u, p) = p u'(p) - F(x, u, u'(p))" /> を <InlineMath math="p" /> で微分すると、
                    <BlockMath math="\frac{\partial H}{\partial p} = u' + p \frac{\partial u'}{\partial p} - F_{u'} \frac{\partial u'}{\partial p}" />
                    運動量の定義 <InlineMath math="p = F_{u'}" /> を代入すると、右辺の第2項と第3項が打ち消し合い、
                    <BlockMath math="\frac{\partial H}{\partial p} = u'" />
                    が得られる。
                </p>
                <p>
                    2. 次に、これをも一度 <InlineMath math="p" /> で微分すると、
                    <BlockMath math="H_{pp} = \frac{\partial u'}{\partial p}" />
                    となる。一方、<InlineMath math="p = F_{u'}(x, u, u')" /> の両辺を <InlineMath math="p" /> で微分すると（逆関数の微分法）、
                    <BlockMath math="1 = F_{u'u'} \frac{\partial u'}{\partial p}" />
                    より <InlineMath math="\frac{\partial u'}{\partial p} = 1 / F_{u'u'}" /> となる。
                    したがって <InlineMath math="H_{pp} = 1 / F_{u'u'}" /> であり、<InlineMath math="F_{u'u'} > 0" /> ならば <InlineMath math="H_{pp} > 0" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 (古典力学におけるハミルトニアン)">
                <p>
                    質量 <InlineMath math="m" />、ポテンシャル <InlineMath math="V(u)" /> の粒子のラグランジアン
                    <BlockMath math="F(u, u') = \frac{1}{2} m (u')^2 - V(u)" />
                    を考える。一般化運動量は次のように計算できる：
                    <BlockMath math="p = F_{u'} = m u'" />
                    これは物理的な「運動量」そのものである。これを <InlineMath math="u' = p/m" /> と解いてハミルトニアンを構成すると、
                    <BlockMath math="H = p \left( \frac{p}{m} \right) - \left[ \frac{1}{2} m \left( \frac{p}{m} \right)^2 - V(u) \right] = \frac{p^2}{2m} + V(u)" />
                    となる。これは「運動エネルギー + ポテンシャルエネルギー」、すなわち系の<b>全エネルギー</b>に一致している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">変数変換の逆方向</h2>


            <p className="leading-relaxed">
                ルジャンドル変換は双対的な関係にあり、ハミルトニアンからラグランジアンを復元することも可能です。
            </p>

            <ContentBox type="example" title="Example 5.1-2 (ハミルトニアンからの復元)">
                <p>
                    自由粒子のハミルトニアン <InlineMath math="H(p) = \frac{p^2}{2m}" /> からラグランジアンを求めてみよう。
                    まず <InlineMath math="u' = H_p = p/m" /> より <InlineMath math="p = mu'" /> を得る。
                    ラグランジアンはルジャンドル変換の逆変換として、
                    <BlockMath math="F = p u' - H = (mu') u' - \frac{(mu')^2}{2m} = \frac{1}{2} m (u')^2" />
                    となり、正しく運動エネルギーの式が回収される。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ルジャンドル変換の幾何学的解釈">
                <p>
                    ルジャンドル変換には非常に美しい幾何学的な意味があります。
                    関数 <InlineMath math="f(v)" /> のルジャンドル変換 <InlineMath math="g(p) = pv - f(v)" /> を考えると、これは直線の傾き <InlineMath math="p" /> を指定したときに、その直線が関数のグラフと接するように選んだときの「y 切片（の符号反転）」を求めていることに相当します。
                    この視点は、凸解析や熱力学（自由エネルギーとエントロピーの関係など）においても共通して現れる数学の深い構造です。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ルジャンドル変換によって変数を運動量へと移行したことで、変分問題の基本方程式であるオイラー＝ラグランジュ方程式は、1 階の連立微分方程式である「正準方程式」へと姿を変えます。
                次節ではその詳細を見ていきましょう。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>一般化運動量 <InlineMath math="p" /> は、ラグランジアンを速度 <InlineMath math="u'" /> で偏微分したものとして定義される。</li>
                    <li>ハミルトニアン <InlineMath math="H = pu' - F" /> は、ルジャンドル変換を通じてラグランジアンから導かれる。</li>
                    <li>ラグランジアンが凸であれば、変換は可逆となり、物理的にはハミルトニアンは系の全エネルギーに対応する。</li>
                    <li>速度から運動量への変換は、単なる変数の置き換えではなく、解析力学や高度な幾何学への入り口となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
