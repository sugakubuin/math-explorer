import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormalFamiliesAndMontel() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                解析学において、関数の列が「収束する」ことを保証する定理は、存在定理（解が存在することの証明証明）を導くための極めて強力な武器となります。特に複素解析（正則関数）においては、実解析には見られない「有界性が直ちに収束の良さを生む」という魔法のような現象が起きます。本節では、次節のリーマンの写像定理を証明するための最重要ツールとなる「正規族」と「モンテルの定理」を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規族の定義</h2>

            <p>
                まず、関数の集まり（族）が良い性質（部分列が必ず収束する）を持っていることを「正規（normal）」という言葉で定義します。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (正規族)">
                <p>
                    領域 <InlineMath math="D" /> 上で定義された正則関数の集合（族）を <InlineMath math="\mathcal{F}" /> とする。
                    この族 <InlineMath math="\mathcal{F}" /> から任意に関数の無限列 <InlineMath math="\{f_n\}" /> を取り出したとき、その中から必ずある部分列 <InlineMath math="\{f_{n_k}\}" /> を選び出して、それが <InlineMath math="D" /> 上のすべてのコンパクト部分集合上で「ある正則関数 <InlineMath math="f" /> に一様収束」するようにできるとき、<InlineMath math="\mathcal{F}" /> を<b>正規族（normal family）</b>と呼ぶ。
                </p>
                <p>
                    （※これは関数空間における「相対コンパクト性（有界な数列からは必ず収束する部分列が取り出せるというボルツァーノ・ワイエルシュトラスの定理の関数版）」に相当します）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="アスコリ・アルツェラの定理">
                <p>
                    実解析における微分方程式の解の存在証明で活躍する「アスコリ・アルツェラの定理」を思い出してください。「関数族が同程度連続かつ各点有界であれば、一様収束する部分列を持つ」という定理です。正規族の理論は、この定理を正則関数に適用したものですが、正則関数の「硬さ」のおかげで、条件が劇的に単純になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">モンテルの定理</h2>

            <p>
                「正則関数の集まりが正規族になるには、どういう条件を満たせば良いのか？」
                フランスの数学者ポール・モンテル（Paul Montel）は、正則関数であれば「有界である」というただ一つの条件だけで十分であることを証明しました。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 4.3-1 (モンテルの定理)</span>}>
                <p>
                    領域 <InlineMath math="D" /> 上の正則関数の族 <InlineMath math="\mathcal{F}" /> が、<b>局所一様有界（locally uniformly bounded）</b>であるとする。
                </p>
                <p>
                    すなわち、任意のコンパクト集合 <InlineMath math="K \subset D" /> に対してある定数 <InlineMath math="M_K > 0" /> が存在し、族に含まれるすべての関数 <InlineMath math="f \in \mathcal{F}" /> とすべての点 <InlineMath math="z \in K" /> において <InlineMath math="|f(z)| \leq M_K" /> が成り立つとする。
                </p>
                <p>
                    このとき、族 <InlineMath math="\mathcal{F}" /> は正規族である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    アスコリ・アルツェラの定理を適用するためには、「局所一様有界」であることに加えて「同程度連続（どの関数も同じくらい滑らかで、急激に変化しない）」であることの証明が必要である。
                </p>
                <p>
                    しかし、正則関数の場合、閉曲線 <InlineMath math="C" /> を用いたコーシーの積分公式
                </p>
                <BlockMath math="f'(z) = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z)^2} d\zeta" />
                <p>
                    から関数の微分の評価を行うことができる。族 <InlineMath math="\mathcal{F}" /> が <InlineMath math="C" /> 上で一様有界（<InlineMath math="|f| \leq M" />）であれば、積分の評価から微分の大きさ <InlineMath math="|f'(z)|" /> もまた統一的な定数で上から抑えられる。
                </p>
                <p>
                    微分の最大値が抑えられていれば、平均値の定理（に近い評価）により関数の変化率が制限され、族 <InlineMath math="\mathcal{F}" /> 全体が同程度連続であることが自動的に導かれる。
                </p>
                <p>
                    局所一様有界かつ同程度連続となったため、アスコリ・アルツェラの定理により正規族であることが結論づけられる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-1">
                <p>
                    単位円板 <InlineMath math="D = \{|z| < 1\}" /> 上で定義された正則関数の集合であって、常に絶対値が 1 以下（<InlineMath math="|f(z)| \leq 1" />）であるような関数の集まり <InlineMath math="\mathcal{F}" /> を考えます。
                </p>
                <p>
                    この族は全域で <InlineMath math="M = 1" /> によって有界に抑えられています。したがって、モンテルの定理が適用でき、この関数の束の中からどんな風に無限個の関数を取り出してきても、必ず「どこかの一つの正則関数にきれいに収束していく部分列」を見つけることができます。
                </p>
            </ContentBox>

            <p>
                さらに、モンテルはこの定理をさらに驚異的な形へと進化させました。値が有界でなくとも、「絶対に取らない値」が少しあるだけで関数は暴れられなくなり、正規族になってしまうのです。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 4.3-2 (モンテルの定理の強化形)</span>}>
                <p>
                    領域 <InlineMath math="D" /> 上の正則関数の族 <InlineMath math="\mathcal{F}" /> において、ある2つの複素数値 <InlineMath math="a, b \in \mathbb{C}" /> (<InlineMath math="a \neq b" />) が存在して、族に含まれるすべての関数 <InlineMath math="f \in \mathcal{F}" /> が <InlineMath math="D" /> 内のどこでも <InlineMath math="f(z) \neq a" /> かつ <InlineMath math="f(z) \neq b" /> を満たすとする。
                </p>
                <p>
                    このとき、族 <InlineMath math="\mathcal{F}" /> は正規族である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    値 <InlineMath math="a" /> と <InlineMath math="b" /> を除外するという条件は、一次分数変換（メビウス変換）を施すことで「値 <InlineMath math="0" /> と <InlineMath math="1" /> を決して取らない」という条件に一般性を失うことなく帰着できる。
                </p>
                <p>
                    複素平面から <InlineMath math="0" /> と <InlineMath math="1" /> を取り除いた領域 <InlineMath math="\mathbb{C} \setminus \{0, 1\}" /> は、上半平面 <InlineMath math="\mathbb{H}" /> を普遍被覆空間として持つ。この被覆写像として、楕円モジュラー関数 <InlineMath math="\lambda : \mathbb{H} \to \mathbb{C} \setminus \{0, 1\}" /> が知られている。
                </p>
                <p>
                    族 <InlineMath math="\mathcal{F}" /> の関数 <InlineMath math="f" /> は <InlineMath math="0, 1" /> を取らないため、ホモトピーの持ち上げ定理（トポロジー）を用いることで、単連結領域 <InlineMath math="D" /> （局所的に考えればよい）上の各 <InlineMath math="f" /> は <InlineMath math="D" /> から上半平面 <InlineMath math="\mathbb{H}" /> への正則写像 <InlineMath math="\tilde{f}" /> （すなわち <InlineMath math="f = \lambda \circ \tilde{f}" />）へと持ち上げることが可能である。
                </p>
                <p>
                    上半平面 <InlineMath math="\mathbb{H}" /> を単位円板 <InlineMath math="\mathbb{D}" /> へとメビウス変換で写せば、持ち上げられた関数は一様有界（絶対値が <InlineMath math="1" /> 未満）となる。ここにモンテルの定理（基本形）を適用することで、持ち上げられた関数列から収束部分列を抽出でき、それを <InlineMath math="\lambda" /> で下へ降ろすことで元の関数族 <InlineMath math="\mathcal{F}" /> の正規性が証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-2">
                <p>
                    領域 <InlineMath math="D" /> 上の正則関数からなる「値 <InlineMath math="0" /> と <InlineMath math="1" /> を決して取らない関数族 <InlineMath math="\mathcal{F}" />」を考えます。
                </p>
                <p>
                    この関数族は「有界」であるという仮定は一切ありません（無限大に発散するような値を取っても構いません）。しかし、この2つの特定の値だけを「絶対に出力しない」という極めて強い制約があるため、モンテルの定理の強化形より自動的に正規族になります。
                </p>
                <p>
                    つまり、この中からどんな関数の列 <InlineMath math="\{f_n\}" /> を取ってきても、暴走せずに「必ずある正則関数に収束する部分列が存在するか、あるいは全体として一様に無限大（<InlineMath math="\infty" />）へ発散するような部分列が作れる」という驚くべき制約を受けます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ピカールの定理への布石">
                <p>
                    この強化形は「2つの値を省く正則関数の族は正規である」と主張しています。これは、後に第7章で学ぶ「小ピカールの定理（非定数整関数は、たかだか1つの値しか省くことができない）」の根幹をなす理論的背景となります。もし2つの値を省いてしまうと、正則関数の振る舞いは極端に制限され、強制的に「おとなしい（正規な）」ものになってしまうというわけです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>部分列が必ずコンパクト一様収束するような行儀の良い関数の集まりを<b>正規族</b>という。</li>
                    <li>正則関数において、局所的に一様有界であるという条件だけで正規族となる（<b>モンテルの定理</b>）。これはコーシーの積分公式により有界性が同程度連続性を生むからである。</li>
                    <li>さらに、取り得る値のうち「2つの値」を絶対に取らない関数族もまた正規族となる（強化形）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
