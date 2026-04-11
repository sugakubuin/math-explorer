import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MonodromyTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 1 では、解析接続が「たどる経路によって結果が変わる」ことがあり、それが多価関数の原因になることを見ました。それでは、どのような条件下であれば、経路によらずに解析接続の結果が一意に定まるのでしょうか？その条件を与えるのが「モノドロミー定理」です。本節では、領域の「穴のなさ」（単連結性）が経路の多様性を吸収し、関数の一価性を保証する仕組みを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">モノドロミー定理の主張</h2>

            <p>
                領域内に「穴」がなければ、2つの経路は互いに連続的に変形することができます。この連続変形（ホモトピー）の過程で、解析接続の結果がどのように保たれるかを見るのがモノドロミー定理の中核です。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 2.1-1 (モノドロミー定理)</span>}>
                <p>
                    領域 <InlineMath math="D" /> を単連結な領域とする。領域 <InlineMath math="D" /> 内の関数要素 <InlineMath math="(f, U)" /> から出発して、<InlineMath math="D" /> 内の任意の経路に沿って解析接続が可能であるとする。
                    このとき、<InlineMath math="D" /> 内の始点 <InlineMath math="a" /> から終点 <InlineMath math="b" /> に至る任意の2つの曲線 <InlineMath math="\gamma_1, \gamma_2" /> に沿った解析接続は、終点 <InlineMath math="b" /> において同一の関数要素を定める。
                </p>
                <p>
                    特に、すべての点で解析接続が可能であれば、全体として <InlineMath math="D" /> 上の一価正則関数を定める。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    領域 <InlineMath math="D" /> が単連結であるため、始点 <InlineMath math="a" /> から終点 <InlineMath math="b" /> に至る2つの曲線 <InlineMath math="\gamma_1, \gamma_2" /> は、終点を固定したまま <InlineMath math="D" /> 内で互いに連続変形可能である。すなわち、<InlineMath math="\gamma_1" /> と <InlineMath math="\gamma_2" /> はホモトピックである。
                </p>
                <p>
                    ホモトピーを <InlineMath math="H(s, t)" /> （<InlineMath math="s \in [0,1]" /> は変形パラメータ、<InlineMath math="t \in [0,1]" /> は曲線のパラメータ）とする。各 <InlineMath math="s" /> に対して中間曲線 <InlineMath math="\gamma_s" /> が定まる。任意の <InlineMath math="s_0 \in [0,1]" /> を固定し、<InlineMath math="\gamma_{s_0}" /> に沿った解析接続の関数要素の鎖を覆うコンパクトな管状近傍を考える。
                </p>
                <p>
                    ホモトピーの連続性から、<InlineMath math="s" /> が <InlineMath math="s_0" /> に十分近ければ、曲線 <InlineMath math="\gamma_s" /> は <InlineMath math="\gamma_{s_0}" /> を覆う関数要素の円板の鎖の中に完全に収まる。このとき、§1.3 で証明した解析接続の一意性定理により、<InlineMath math="\gamma_s" /> に沿って解析接続した結果は <InlineMath math="\gamma_{s_0}" /> に沿って解析接続した結果と全く同じになる。
                </p>
                <p>
                    これを区間 <InlineMath math="s \in [0,1]" /> 全体で繋ぎ合わせれば、変形の開始から終了まで結果が変わらないことがわかる。したがって、<InlineMath math="\gamma_1" /> と <InlineMath math="\gamma_2" /> に沿った解析接続は結果が一致する。
                </p>
                <div className="text-right text-slate-500 dark:text- dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、直感に反して生じる多価性を「穴のない領域」という強力な前提で封じ込めることができることを示しています。
            </p>

            <ContentBox type="example" title="Example 2.1-1">
                <p>
                    <InlineMath math="\log z" /> は原点 <InlineMath math="z = 0" /> に分枝点を持ち、複素平面全体では多価関数になります。しかし、定義域を単連結な領域に制限してみましょう。
                </p>
                <p>
                    例えば、負の実軸を取り除いた領域 <InlineMath math="D = \mathbb{C} \setminus (-\infty, 0]" /> を考えます。この領域 <InlineMath math="D" /> は単連結です。<InlineMath math="D" /> 内の任意の2点 <InlineMath math="a, b" /> を結ぶ経路は、原点の周りを1周することは絶対に不可能です（負の実軸の壁があるため）。
                </p>
                <p>
                    モノドロミー定理より、この領域 <InlineMath math="D" /> 内で <InlineMath math="\log z" /> をどのように解析接続しても、値が経路に依存することは決してなく、全体として一価の正則関数として確定します。これが §1.4 で登場した「主値 <InlineMath math="\text{Log}\, z" />」を一価関数として正当化する背景です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単連結でない場合のモノドロミー</h2>

            <p>
                領域が単連結でない場合（すなわち「穴」がある場合）、ホモトピーによる連続変形が穴に阻まれてしまいます。このような場合、ホモトピーで結ばれない経路の間では解析接続の結果が変わる可能性があります。この「関数値のずれ方」が関数の代数的な性質を表す構造となります。
            </p>

            <ContentBox type="example" title="Example 2.1-2">
                <p>
                    再び <InlineMath math="\log z" /> を考えます。今度は定義域を <InlineMath math="D = \mathbb{C} \setminus \{0\}" /> とします。原点という「穴」が空いているため、<InlineMath math="D" /> は単連結ではありません。
                </p>
                <p>
                    <InlineMath math="D" /> 内で原点 <InlineMath math="z = 0" /> を反時計回りに1周するループ <InlineMath math="\gamma" /> に沿って解析接続すると、関数値は元の値から <InlineMath math="+2\pi i" /> だけずれます。2周すれば <InlineMath math="+4\pi i" />、逆回りに1周すれば <InlineMath math="-2\pi i" /> ずれます。
                </p>
                <p>
                    このずれ方は、加法群としての整数 <InlineMath math="\mathbb{Z}" /> と完全に同型な構造を持っています。「何周したか（= 巻数）」という整数の次元だけ、値のずれ方（モノドロミー）のバリエーションが存在するわけです。
                </p>
            </ContentBox>

            <p>
                このような「経路の位相的な多様性が引き起こす値の変化」を群の言葉で定式化したものがモノドロミー群です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (モノドロミー群)">
                <p>
                    関数要素の解析接続において、基点 <InlineMath math="z_0" /> を出発して基点に戻る閉曲線（ループ）に沿った解析接続が、基点での関数要素をどのように変換するかを考える。ループのホモトピー類がなす基本群 <InlineMath math="\pi_1(D, z_0)" /> は、関数要素の集合に対して自然に作用する。
                    この作用によって引き起こされる変換のなす群を<b>モノドロミー群（monodromy group）</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-3">
                <p>
                    平方根関数 <InlineMath math="\sqrt{z}" /> のモノドロミー群を考えます。定義域を <InlineMath math="D = \mathbb{C} \setminus \{0\}" /> とします。
                </p>
                <p>
                    原点を1周すると関数値は <InlineMath math="-1" /> 倍されます。もう1周するとさらに <InlineMath math="-1" /> 倍されて元の値に戻ります。<InlineMath math="k" /> 回原点を回ったときの変換は「乗算群における <InlineMath math="(-1)^k" /> を掛ける操作」です。
                </p>
                <p>
                    この変換は、「そのままである（単位元）」と「<InlineMath math="-1" /> 倍される（位数2の元）」の2通りしか存在しません。したがって、<InlineMath math="\sqrt{z}" /> のモノドロミー群は巡回群 <InlineMath math="\mathbb{Z}/2\mathbb{Z}" /> と同型になります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="トポロジーとの接続">
                <p>
                    モノドロミー群は、一見すると解析的・関数論的な関数の振る舞いの代数的表現にすぎません。しかし、本質的にはこれはトポロジーの言葉で記述される「被覆変換群」と全く同じものです。この事実については、次節のトポロジーの復習を通じて詳細を追っていきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>領域が単連結であれば、ホモトピックな曲線に沿った解析接続の結果は一致し、領域全体で一価の正則関数が定まる（モノドロミー定理）。</li>
                    <li>領域に穴がある場合、ループに沿った解析接続によって関数要素が変化しうる。</li>
                    <li>基本群の作用によって定まる関数要素間の変換の集まりをモノドロミー群と呼び、これが多価関数の「周期構造」を代数的に表現する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
