import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WellPosednessConcept() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                偏微分方程式の数学的モデルが物理的に意味を持つためには、解が存在するだけでなく、それが一意に定まり、かつデータの変化に対して安定である必要があります。
                この概念を定式化したのが、ジャック・ハダマールによる<b>適切問題</b>（Well-posed Problem）の考え方です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">適切問題の定義</h2>

            <p className="leading-relaxed">
                ハダマールは、モデルが健全であるための 3 つの必須条件を挙げました。
            </p>

            <ContentBox type="definition" title="Definition 9.4-1 (ハダマールの適切問題)">
                <p>
                    偏微分方程式の境界値問題または初期値問題が、次の 3 条件を満たすとき、その問題は<b>適切</b>（Well-posed）であるという：
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li><b>存在</b> (Existence)：少なくとも 1 つの解が存在する。</li>
                    <li><b>一意性</b> (Uniqueness)：解が高々 1 つである。</li>
                    <li><b>連続依存性</b> (Stability)：初期データや境界データがわずかに変化したとき、それに対応する解の変化も微小である。</li>
                </ol>
                <p>
                    これらの条件のいずれかが欠けている場合、その問題は<b>不適切</b>（Ill-posed）であると呼ばれる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 9.4-1 (各型の適切な問題設定)">
                <ul className="list-disc list-inside space-y-2">
                    <li><b>双曲型（波動）</b>：初期値問題（コーシー問題）が適切（§6.4）。</li>
                    <li><b>放物型（熱）</b>：初期境界値問題（未来方向）が適切（§7.5）。</li>
                    <li><b>楕円型（ラプラス）</b>：ディリクレ・ノイマン境界値問題が適切（§8.2, 8.3）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不適切な問題の例</h2>

            <p className="leading-relaxed">
                不適切な問題は単なる数学的パズルではなく、物理的に「解けない」あるいは「解が信頼できない」状況を反映しています。
            </p>

            <ContentBox type="example" title="Example 9.4-2 (ラプラス方程式の不適切なコーシー問題)">
                <p>
                    ラプラス方程式 <InlineMath math="\Delta u = 0 \ (y > 0)" /> において、
                    初期値 <InlineMath math="u(x,0) = 0, \ u_y(x,0) = \frac{\varepsilon}{n} \sin(nx)" /> を与える場合を考える。
                    このデータの初期時刻（<InlineMath math="y=0" />）における大きさは <InlineMath math="n \to \infty" /> で 0 に収束するが、
                    解析解は <InlineMath math="u(x, y) = \frac{\varepsilon}{n^2} \sinh(ny) \sin(nx)" /> となり、
                    <InlineMath math="y > 0" /> では指数関数的に発散する。
                    つまり、初期データの極微小な誤差が、解の巨大な変動を引き起こし、連続依存性が破綻している。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 9.4-3 (後退熱方程式の不適切性)">
                <p>
                    熱方程式を過去に遡る問題 <InlineMath math="u_t = -u_{xx}" /> を考える。
                    初期値 <InlineMath math="u(x, 0) = \sin(nx)" /> に対して、解は <InlineMath math="u(x, t) = e^{n^2 t} \sin(nx)" /> となる。
                    高周波（大きな <InlineMath math="n" />）の成分ほど爆発的に成長するため、
                    わずかなノイズが含まれるだけで計算結果は意味をなさなくなる。これは楕円型のコーシー問題と同じ構造である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="不良設定問題の正則化">
                <p>
                    現実の応用（医療画像診断、地震波による地下構造解析など）では、
                    「観測データから原因を推定する」不適切な逆問題を解かなければならない場合が多い。
                    このとき、数学的には解が存在しなくても、追加の拘束条件（平滑化など）を課して安定な近似解を得る<b>正則化</b>（Regularization）の手法が用いられる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章では、偏微分方程式論の「型」を超えた普遍的な理論、とりわけ解が「いつ」「どこまで」「どのように」存在するのかという、
                解析学の究極の問いについて学びました。
                ここまでに得た知見は、今後より高度な非線形問題や数値解析へと進む際の、揺るぎない道標となるでしょう。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§9.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>適切性（ウェルポーズド）には、存在・一意・安定の 3 条件すべてが必要である。</li>
                    <li>データの小さな変動が結果に大きな影響を与える問題は不適切（不良設定）と呼ばれる。</li>
                    <li>ラプラス方程式のコーシー問題や後退熱方程式は、不適切問題の典型例である。</li>
                    <li>逆問題などの不適切な実問題に対処するためには、正則化などの高度な数学的アプローチが不可欠である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
