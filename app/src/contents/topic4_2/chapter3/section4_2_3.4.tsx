import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TopologicalClassification() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節でリーマン球面は、トポロジー的には「球面（穴が0個の閉曲面）」と同相であることを見ました。実は、より一般のコンパクトなリーマン面のトポロジー（幾何学的な形）も、「穴の数」というたった一つの整数値によって完全に分類されるという見事な性質があります。本節では、位相空間論からの分類定理をリーマン面の文脈で確認し、種数（しゅすう）の概念を復習します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">種数の定義</h2>

            <p>
                リーマン面は局所的には複素平面（実2次元）と同相であり、向き付けが可能な曲面（2次元多様体）です。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (種数)">
                <p>
                    コンパクトで連結な向き付け可能閉曲面が持つ、「直感的な穴（ハンドル）の数」を表す非負整数を<b>種数（genus, ジェニュス）</b> <InlineMath math="g" /> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-1">
                <p>
                    直感的な形と種数 <InlineMath math="g" /> の関係は以下の通りです。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><b><InlineMath math="g = 0" /></b>: 穴が一つもない。球の表面（球面）。リーマン球面がこれに該当します。</li>
                    <li><b><InlineMath math="g = 1" /></b>: 穴が一つ。浮き輪やドーナツの表面（トーラス）。楕円関数論の舞台です。</li>
                    <li><b><InlineMath math="g = 2" /></b>: 穴が二つ。メガネのフレームのような形をした曲面（双トーラス）。</li>
                </ul>
            </ContentBox>

            <p>
                位相幾何学において、この種数と不可分の関係にあるのが「オイラー標数」です。
            </p>

            <ContentBox type="definition" title="Definition 3.4-2 (オイラー標数)">
                <p>
                    曲面を有限個の三角形（ポリゴンでも可）で分割したとき、頂点の数を <InlineMath math="V" />、辺の数を <InlineMath math="E" />、面の数を <InlineMath math="F" /> とする。このとき、
                </p>
                <BlockMath math="\chi = V - E + F" />
                <p>
                    は三角形の分割の方法に一切依存しない位相不変量であり、これを<b>オイラー標数（Euler characteristic）</b>と呼ぶ。
                    種数 <InlineMath math="g" /> とオイラー標数 <InlineMath math="\chi" /> の間には、
                </p>
                <BlockMath math="\chi = 2 - 2g" />
                <p>
                    という美しい関係が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2">
                <p>
                    公式 <InlineMath math="\chi = 2 - 2g" /> に具体的な値を代入してみます。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>種数 <InlineMath math="g = 0" />（球面）の場合: <InlineMath math="\chi = 2 - 2(0) = 2" />。（正四面体や六面体など多面体の定理である「オイラーの多面体定理」 <InlineMath math="V - E + F = 2" /> と一致します。）</li>
                    <li>種数 <InlineMath math="g = 1" />（ドーナツ）の場合: <InlineMath math="\chi = 2 - 2(1) = 0" />。</li>
                    <li>種数 <InlineMath math="g = 2" />（2つ穴）の場合: <InlineMath math="\chi = 2 - 2(2) = -2" />。</li>
                </ul>
                <p>
                    このように、穴が増える（<InlineMath math="g" /> が増える）ごとにオイラー標数は負の方へ <InlineMath math="-2" /> ずつ減少していきます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">位相的分類の意味</h2>

            <p>
                位相空間論II（3-12）の基本結果である分類定理が、リーマン面に対しても強力に適用されます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 3.4-1 (コンパクトリーマン面の位相的分類)</span>}>
                <p>
                    任意のコンパクトリーマン面の基礎となる位相空間（向き付け可能閉曲面）は、ある非負整数である種数 <InlineMath math="g \geq 0" /> によって完全に分類される。すなわち、2つのコンパクトリーマン面が「ゴムのように伸び縮みさせて重なる（同相である）」ための必要十分条件は、両者の種数 <InlineMath math="g" /> が等しいことである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    リーマン面は定義により正則アトラスを持つ。変換が正則（<InlineMath math="\mathbb{C}" /> の微分の構造を持つ）であるため、曲面は向き付けが可能である（ヤコビアンが必ず正になる）。
                    また、トポロジーの定理（閉曲面の分類定理、位相空間論II §5.3 で証明済み）により、コンパクトで連結な向き付け可能な実2次元多様体は、球面または <InlineMath math="g" /> 個のトーラスの連結和と同相であることが保証されている。
                </p>
                <p>
                    この事実は実多様体としての分類結果であるが、リーマン面は実2次元多様体の特別な構造であるため、基盤となる位相空間は必ずこの枠組みのいずれかに属する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このトポロジーの結果を利用して、複素方程式で与えられる代数曲線（一価化されたリーマン面）の種数を判定することができます。
            </p>

            <ContentBox type="example" title="Example 3.4-3 (代数曲線の種数)">
                <p>
                    超楕円曲線の方程式 <InlineMath math="y^2 = P(z)" /> で定まるリーマン面の種数について考えます。<InlineMath math="P(z)" /> が重根を持たない多項式であるとします。
                </p>
                <p>
                    実質的な計算は次節（リーマン-ハーヴィッツの公式）で行いますが、結果を先取りすると以下のようになります。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="P(z)" /> が 1次または 2次のとき: 種数 <InlineMath math="g = 0" /> （リーマン球面）になります。</li>
                    <li><InlineMath math="P(z)" /> が 3次または 4次のとき: 種数 <InlineMath math="g = 1" /> （トーラス）になります。これは「楕円曲面」と呼ばれ、楕円積分の理論と直結します。</li>
                    <li>一般に <InlineMath math="P(z)" /> の次数が <InlineMath math="2g+1" /> または <InlineMath math="2g+2" /> のとき: 種数は <InlineMath math="g" /> になります。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="トポロジーと同じでも「複素構造」は別物">
                <p>
                    Theorem 3.4-1 はあくまで「ぐにゃぐにゃ変形を許した（位相的）分類」です。リーマン面としては、正則写像のレベルで同型であるかが重要です（双正則同値）。
                </p>
                <p>
                    驚くべきことに、同じ種数 <InlineMath math="g=1" /> のドーナツであっても、「太いドーナツ」と「細長いドーナツ」は、正則な関数の力では互いに変形できず、別々の複素構造とみなされます。このように、同じ位相的型の中に無数にある複素構造のバリエーションをパラメータ付けした空間を「モジュライ空間」と呼びます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>コンパクトなリーマン面は、その幾何学的な「穴の数」である種数 <InlineMath math="g" /> だけで位相的に完全に分類される。</li>
                    <li>オイラー標数 <InlineMath math="\chi" /> は種数と <InlineMath math="\chi = 2 - 2g" /> の関係で結ばれている。</li>
                    <li>代数方程式の次数と、構成されるリーマン面の種数には規則的な対応関係がある。</li>
                    <li>位相的に同じ（同相な）曲面であっても、解析的に等価（双正則同値）とは限らない（モジュライの存在）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
