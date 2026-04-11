import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexTorus() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では複素平面上に広がる格子 <InlineMath math="\Lambda" /> と、その基本領域である基本周期平行四辺形について学びました。
                本節では、複素平面全体をこの格子で「割る」ことで得られる商空間について考えます。この空間は<b>複素トーラス</b>と呼ばれ、二重周期関数の自然な定義域となる非常に重要な幾何学的対象です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商空間の構成</h2>

            <p>
                格子 <InlineMath math="\Lambda" /> に関して、二つの複素数 <InlineMath math="z, w \in \mathbb{C}" /> の差が <InlineMath math="\Lambda" /> の元であるとき、すなわち <InlineMath math="z - w \in \Lambda" /> のとき、<InlineMath math="z" /> と <InlineMath math="w" /> は同値であると定めます。
                この同値関係による商集合に、自然な位相と複素構造を導入したものが複素トーラスです。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (複素トーラス)">
                <p>
                    商空間
                </p>
                <BlockMath math="\mathbb{C}/\Lambda = \{z + \Lambda \mid z \in \mathbb{C}\}" />
                <p>
                    に、自然な複素構造を入れたものを<b>複素トーラス（complex torus）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                この定義から直ちに、複素トーラスがどのような幾何学的性質を持つかが問われます。以下の命題は、それがコンパクトなリーマン面となることを保証します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-1">
                <p>
                    <InlineMath math="\mathbb{C}/\Lambda" /> はコンパクトなリーマン面である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まずコンパクト性を示す。基本周期平行四辺形 <InlineMath math="\Pi" /> の閉包 <InlineMath math="\overline{\Pi}" /> は <InlineMath math="\mathbb{C}" /> 内の有界閉集合であるため、ハイネ・ボレルの定理よりコンパクトである。自然な射影 <InlineMath math="\pi : \mathbb{C} \to \mathbb{C}/\Lambda" /> は連続であり、<InlineMath math="\pi(\overline{\Pi}) = \mathbb{C}/\Lambda" /> であるから、コンパクト集合の連続写像による像として <InlineMath math="\mathbb{C}/\Lambda" /> もコンパクトである。
                </p>
                <p>
                    次にリーマン面としての構造（複素構造）について述べる。各点 <InlineMath math="p = \pi(z) \in \mathbb{C}/\Lambda" /> に対して、十分小さな近傍 <InlineMath math="U \subset \mathbb{C}" /> を選ぶと、<InlineMath math="U" /> の各点は互いに <InlineMath math="\Lambda" /> を法として合同にならないようにできる。このとき、<InlineMath math="\pi|_U : U \to \pi(U)" /> は同相写像となり、その逆写像を局所座標（チャート）として採用できる。これらにより定義される変換関数は単なる平行移動 <InlineMath math="w = z + \omega" />（<InlineMath math="\omega \in \Lambda" />）であるため、明らかに正則（解析的）である。よって <InlineMath math="\mathbb{C}/\Lambda" /> は1次元の複素多様体、すなわちリーマン面となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                抽象的な商空間の構成は、幾何学的には非常に直感的な操作として解釈できます。以下の例で、なぜ「トーラス（浮き輪型）」と呼ばれるのかを確認しましょう。
            </p>

            <ContentBox type="example" title="Example 2.2-1">
                <p>
                    基本周期平行四辺形 <InlineMath math="\Pi" /> の境界を考えてみる。<InlineMath math="\Pi" /> の対辺をなす線分は、互いに格子ベクトル <InlineMath math="\omega_1" /> または <InlineMath math="\omega_2" /> だけ離れているため、商空間 <InlineMath math="\mathbb{C}/\Lambda" /> においては同一視される。
                </p>
                <p>
                    具体的には、まず1組の対辺を貼り合わせると円柱面が得られる。さらに、もう1組の対辺（円柱の上下の縁に対応する）を曲げて貼り合わせると、ドーナツの表面、すなわちトーラスが得られる。この位相的直感が、<InlineMath math="\mathbb{C}/\Lambda" /> を複素トーラスと呼ぶ所以である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">種数1のリーマン面</h2>

            <p>
                位相幾何学において、曲面の分類において重要な不変量となるのが「種数（genus）」、すなわち「穴の数」です。
                直感的にトーラスの穴は1つですが、これを厳密に計算してみましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-2">
                <p>
                    複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> の種数は <InlineMath math="g = 1" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    基本周期平行四辺形による分割を用いてオイラー標数 <InlineMath math="\chi" /> を計算する。<InlineMath math="\mathbb{C}/\Lambda" /> の単体分割として、1つの面（基本周期平行四辺形の内部）、対辺の同一視により得られる2つの辺、そして4つの頂点がすべて同一視されることによる1つの頂点を考える。
                </p>
                <p>
                    したがって、頂点の数 <InlineMath math="V = 1" />、辺の数 <InlineMath math="E = 2" />、面の数 <InlineMath math="F = 1" /> となる。
                    オイラー標数は
                </p>
                <BlockMath math="\chi = V - E + F = 1 - 2 + 1 = 0" />
                <p>
                    と計算される。コンパクトな向き付け可能曲面において、オイラー標数 <InlineMath math="\chi" /> と種数 <InlineMath math="g" /> の間には <InlineMath math="\chi = 2 - 2g" /> の関係がある。よって、<InlineMath math="0 = 2 - 2g" /> より <InlineMath math="g = 1" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このように、格子から作られた商空間は、代数幾何学や複素幾何学において「種数1の曲線」として位置づけられます。
            </p>

            <ContentBox type="remark" title="リーマン面の一様化との関係">
                <p>
                    複素解析II（4-2 §5.5）で学ぶ「一様化定理」によれば、単連結なリーマン面はリーマン球面 <InlineMath math="\hat{\mathbb{C}}" />、複素平面 <InlineMath math="\mathbb{C}" />、単位円板 <InlineMath math="\mathbb{D}" /> のいずれかに同型となります。
                </p>
                <p>
                    複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> の普遍被覆空間は複素平面 <InlineMath math="\mathbb{C}" /> であり、これは <InlineMath math="\mathbb{C}" />-型の普遍被覆を持つ種数1のリーマン面の典型例です。興味深いことに、その逆も成立し、すべての種数1のコンパクトリーマン面（非特異な楕円曲線）は、ある格子 <InlineMath math="\Lambda" /> を用いて複素トーラスとして実現されることが知られています。これは楕円関数論の深い結果の一つです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>格子 <InlineMath math="\Lambda" /> による複素平面の商空間 <InlineMath math="\mathbb{C}/\Lambda" /> に複素構造を入れたものを複素トーラスと呼ぶ。</li>
                    <li>複素トーラスはコンパクトなリーマン面になる。</li>
                    <li>対辺の同一視から計算されるオイラー標数は0であり、したがって種数は1である。</li>
                    <li>すべての種数1のコンパクトリーマン面は複素トーラスとして実現される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
