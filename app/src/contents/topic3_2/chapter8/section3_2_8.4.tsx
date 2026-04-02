import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RiemannMappingTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ここまで、メビウス変換やジューコフスキー変換といった「具体的な関数」による等角写像を見てきました。
                しかし、物理や工学で現れる領域は常に入念に設計された形をしているとは限りません。
                「任意の（単連結な）領域は、常に扱いやすい円盤へと写せるのか？」という深遠な問いに対する答えが、複素解析の集大成である <strong>リーマンの写像定理</strong> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマンの写像定理</h2>

            <p>
                この定理は、複素平面における「トポロジー（単連結性）」と「幾何学（等角性）」を直接結びつける驚異的な結果です。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-1 (リーマンの写像定理)">
                <p>
                    複素平面全体（<InlineMath math="\mathbb{C}" />）でも、空集合でもない、境界を持つ任意の <strong>単連結領域</strong> <InlineMath math="U" /> を考える。
                    このとき、 <InlineMath math="U" /> から単位円板 <InlineMath math="\mathbb{D} = \{ |z| < 1 \}" /> への <strong>一対一かつ上への等角写像</strong> が存在する。
                    さらに、ある点 <InlineMath math="z_0 \in U" /> に対して <InlineMath math="f(z_0) = 0" /> かつ <InlineMath math="f'(z_0) > 0" /> となるような写像は唯一つに定まる。
                </p>
            </ContentBox>

            <p>
                この定理の凄さは、「領域の境界がどれほど複雑であっても（ジグザグであろうと、雲のような形であろうと）、正則関数によってそれを完璧な円に矯正できる」という点にあります。
            </p>

            <ContentBox type="example" title="Example 8.4-1 (既習の写像との整合性)">
                <p>
                    これまでに学んだ写像は、まさにこの定理の「具体例」となっている。
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>§8.2 で学んだメビウス変換は、上半平面（単連結領域）を単位円板へ写す。</li>
                    <li>§8.3 で学んだ指数関数は、帯状領域（単連結領域）を半平面（ひいては円板）へ写す。</li>
                </ul>
                <p className="mt-2">
                    写像定理は、こうした「個別の幸運な成功例」が、実はあらゆる単連結領域で保証されていることを宣言している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の歴史的・数学的背景</h2>

            <p>
                リーマンの写像定理は、その証明の過程においても「正規族」や「コンパクト性」といった複素解析の高度な道具を必要とします。
            </p>

            <ContentBox type="remark" title="存在と一意性の証明の骨格">
                <p>
                    1851年、ベルンハルト・リーマンによって提唱された当初は「境界値問題（ディリクレ問題）」の解の存在を暗黙に仮定した不完全な証明（リーマン自身も認識していたと言われます）でした。
                    その後、20世紀初頭にモンテル、フェイエール、そしてカラテオドリらによって、 <strong>「ある関数の族の中から、微係数の大きさを最大化するものを選ぶ」</strong> という変分学的・極値的な手法によって厳密な証明が完成されました。
                    この「極限としての存在証明」は、現代の幾何学的関数論の出発点となりました。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">トピック 3-2 の終わりに</h2>

            <p>
                本トピックでは、複素数の定義から始まり、微分、積分（コーシーの定理・留数定理）、級数展開、そしてこの等角写像までを旅してきました。
                複素関数の世界は、実関数の世界よりもはるかに強い「拘束（正則性）」があるからこそ、信じられないほど美しい調和と幾何学的な広がりを持っています。
                この知識を礎に、流体力学などの物理学、あるいはより高度な複素幾何学や代数幾何学の世界へと足を踏み入れてみてください。
            </p>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>リーマンの写像定理は、任意の単連結領域が単位円板と幾何学的に「同じ」であることを保証する。</li>
                    <li>これは、どんなに複雑な境界を持つ領域であっても、複素解析の舞台に乗せれば円盤という最もシンプルな形として扱えることを意味する。</li>
                    <li>この定理は複素解析の集大成であり、同時に現代数学への入り口でもある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
