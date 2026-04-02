import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HigherDimensionWave() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                我々の住む 3 次元空間における波の伝わり方は、1 次元の場合といくつかの共通点を持ちつつも、非常に独特な数学的性質を示します。
                特に「一度通り過ぎた波が後に尾を引くかどうか」という性質は、空間の次元数（パリティ）に深く依存しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">高次元の波動方程式</h2>

            <p className="leading-relaxed">
                3 次元空間における波動方程式は、ラプラス作用素 <InlineMath math="\Delta" /> を用いて次のように書かれます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.5-1 (3 次元波動方程式の解と球面平均)">
                <p>
                    3 次元波動方程式 <InlineMath math="u_{tt} = c^2 \Delta u" /> において、球対称な初期データに対する解は、
                    初期値の「球面平均」をとることで得られる（キルヒホッフの公式）。
                    空間の一点における解の値は、その点を中心とする半径 <InlineMath math="ct" /> の球面上の初期データの積分値によって決定される。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点 <InlineMath math="\mathbf{x}" /> を中心とする半径 <InlineMath math="r" /> の球面上の平均を <InlineMath math="v(r, t)" /> とすると、
                    高次元のラプラス作用素の球対称形式を通じ、<InlineMath math="v" /> は次の微分方程式を満たす：
                    <BlockMath math="v_{tt} = c^2 (v_{rr} + \frac{2}{r}v_r)" />
                    ここで <InlineMath math="w(r, t) = rv(r, t)" /> とおくと、これは 1 次元波動方程式 <InlineMath math="w_{tt} = c^2 w_{rr}" /> に帰着する。
                    ダランベールの公式を用いて <InlineMath math="w" /> を求め、極限 <InlineMath math="r \to 0" /> を取ることで、
                    点 <InlineMath math="\mathbf{x}" /> における解 <InlineMath math="u(\mathbf{x}, t) = v(0, t)" /> が、時刻 <InlineMath math="t=0" /> における半径 <InlineMath math="ct" /> の球面上の情報のみで決定されることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この「半径 <InlineMath math="ct" /> の球面のみ」という事実が、波の「歯切れの良さ」を生んでいます。
            </p>

            <ContentBox type="example" title="Example 6.5-1 (ホイヘンスの原理の確認)">
                <p>
                    3 次元空間の原点で、一瞬だけ鋭い衝撃を与えた場合を考える。
                    この情報の波面は球状に広がっていくが、特筆すべきは、波のフロントが通り抜けた後の点では
                    直ちに静止状態（<InlineMath math="u = 0" />）に戻るという事実である。
                    これを<b>ホイヘンスの原理</b>（Huygens' Principle）と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">次元による波の伝搬の違い</h2>

            <p className="leading-relaxed">
                驚くべきことに、このホイヘンスの原理はすべての次元で成り立つわけではありません。
            </p>

            <ContentBox type="remark" title="次元のパリティと「後尾波」">
                <p>
                    厳密な意味でのホイヘンスの原理は、<b>3 以上の奇数次元</b>（3, 5, 7, ...）においてのみ成立する。
                    2 次元（水面波など）では、波のフロントが通り過ぎた後も、情報の「尾」が残り続け、波紋が引くまで時間がかかる。
                    これを「後尾波（Wake）」と呼ぶ。
                </p>
                <p>
                    もし我々の住む 3 次元空間でホイヘンスの原理が成り立たなければ、
                    音が発信源から直接届くだけでなく、過去に通り過ぎた音の「残響」が空間を常に濁らせることになり、
                    明瞭な通信や会話が不可能になってしまう。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように、物理的な次元の設定が、我々の知覚する世界の「明瞭さ」を数学的に支えています。
            </p>

            <p className="leading-relaxed">
                本章では、波動方程式を通じて、物理現象がどのように偏微分方程式として記述され、
                その背景にどのような数学的構造（エネルギー保存、一意性、次元性）が潜んでいるかを学びました。
                次章では、熱の伝導を司る「放物型」の代表、熱方程式へと進みます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>3 次元以上の高次元においても、波は有限の速度 <InlineMath math="c" /> で伝播する。</li>
                    <li>3 次元の空間では、波が通り過ぎた後に余韻が残らない「ホイヘンスの原理」が成立する。</li>
                    <li>この性質は次元数（特に奇数次元かどうか）に強く依存しており、我々の世界の情報のクリアさを保証している。</li>
                    <li>高次元の解析は、一次元で学んだ特性曲線や球面平均の概念を発展させることで行われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
