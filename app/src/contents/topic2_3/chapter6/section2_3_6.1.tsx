import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfDifferentiability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 4 および 5 では、関数の「連続性」（グラフが繋がっているか、極限値と関数値が一致するか）を中心に理論を展開しました。
                本章では、関数のもう一つの極めて重要な性質である「微分可能性」について実解析の立場から厳密に定義し、その結果導かれる強力な定理群（平均値定理やテイラーの定理など）の証明を行います。
                まずは、微分可能性の厳密な定義とその連続性との関係から始めます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分可能性の定義</h2>

            <p>
                微分とは、初等的には「グラフの接線の傾き」や「関数の瞬間的な変化率」として理解されます。これを極限の概念（<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法）を用いて厳密に定式化します。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (微分可能性・導関数)">
                <p>
                    開区間 <InlineMath math="I" /> 上で定義された関数 <InlineMath math="f" /> が、点 <InlineMath math="a \in I" /> において<strong>微分可能</strong>（differentiable）であるとは、極限
                </p>
                <BlockMath math="\lim_{h \to 0} \frac{f(a+h) - f(a)}{h} \quad \left( または \lim_{x \to a} \frac{f(x) - f(a)}{x - a} \right)" />
                <p>
                    が実数の値として存在することである。この極限値を <InlineMath math="f'(a)" /> や <InlineMath math="\frac{df}{dx}(a)" /> などと書き、点 <InlineMath math="a" /> における<strong>微分係数</strong>（derivative at a point）と呼ぶ。
                </p>
                <p className="mt-4">
                    関数 <InlineMath math="f" /> が区間 <InlineMath math="I" /> 内の<strong>すべての点</strong>で微分可能であるとき、その関数は <InlineMath math="I" /> 上で微分可能であるという。このとき、各点 <InlineMath math="x" /> にその微分係数 <InlineMath math="f'(x)" /> を対応させる関数を、もとの関数の<strong>導関数</strong>（derivative function）と呼ぶ。
                </p>
            </ContentBox>

            <p>
                微分係数 <InlineMath math="\frac{f(x) - f(a)}{x - a}" /> は、点 <InlineMath math="(a, f(a))" /> と点 <InlineMath math="(x, f(x))" /> を結んだ直線の傾き（平均変化率）を表しています。微分可能性とは、点 <InlineMath math="x" /> を点 <InlineMath math="a" /> に近づけたときに、この割線の傾きが一つの有限な値（接線の傾き）に収束することを意味します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分可能ならば連続</h2>

            <p>
                関数の微分可能性は、関数の連続性よりも「強い」条件です。なぜなら、グラフが滑らかに変化して接線を引けるためには、大前提としてグラフが途切れておらず繋がっている必要があるからです。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (微分可能性は連続性を含意する)">
                <p>
                    関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> において微分可能であるならば、<InlineMath math="f" /> は点 <InlineMath math="a" /> において連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> が点 <InlineMath math="a" /> で微分可能であるから、極限 <InlineMath math="\lim_{x \to a} \frac{f(x) - f(a)}{x - a} = f'(a)" /> が存在する。
                    連続性、すなわち <InlineMath math="\lim_{x \to a} f(x) = f(a)" /> （あるいは <InlineMath math="\lim_{x \to a} \{f(x) - f(a)\} = 0" />）を示せばよい。
                </p>
                <p className="mt-4">
                    <InlineMath math="x \neq a" /> のとき、恒等式
                </p>
                <BlockMath math="f(x) - f(a) = \frac{f(x) - f(a)}{x - a} \cdot (x - a)" />
                <p>
                    が成り立つ。両辺について <InlineMath math="x \to a" /> の極限をとる。極限の積の性質より、それぞれの極限が存在していれば分配できるので、
                </p>
                <BlockMath math="\begin{aligned} \lim_{x \to a} \{ f(x) - f(a) \} &= \left( \lim_{x \to a} \frac{f(x) - f(a)}{x - a} \right) \cdot \left( \lim_{x \to a} (x - a) \right) \\ &= f'(a) \cdot 0 \\ &= 0 \end{aligned}" />
                <p>
                    となり、<InlineMath math="\lim_{x \to a} f(x) = f(a)" /> が導かれた。よって <InlineMath math="f" /> は <InlineMath math="a" /> で連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理の「逆」は成り立ちません。つまり、「連続であっても微分可能でない点」は簡単に構成できます。代表的な例は絶対値関数 <InlineMath math="f(x) = |x|" /> です。この関数は原点 <InlineMath math="x = 0" /> で連続ですが、右側극한（傾き <InlineMath math="1" />）と左側極限（傾き <InlineMath math="-1" />）が一致しないため、原点で微分不可能です。グラフが「尖っている（鋭角を持つ）」点では微分は定義できません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続だが至る所微分不可能な関数</h2>

            <p>
                絶対値関数は 1 点だけで微分不可能でしたが、では「すべての点で連続（繋がっている）であるにもかかわらず、全く微分できない（グラフのどの点にも接線が引けない）」ような関数は存在するのでしょうか。
                19世紀まで、数学者の多くは「連続関数であれば、少なくともほとんどの点では微分可能だろう」と信じていました。しかし、カール・ワイエルシュトラスがこの直感を打ち破る決定的な反例を提示しました。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (ワイエルシュトラス関数)">
                <p>
                    次のように定義される級数（関数項級数）は、実数全体で一様連続であるが、<strong>いかなる点においても微分不可能</strong>である。
                </p>
                <BlockMath math="W(x) = \sum_{n=0}^{\infty} a^n \cos(b^n \pi x)" />
                <p>
                    （ただし、<InlineMath math="0 < a < 1" /> であり、<InlineMath math="b" /> は奇数の整数で、<InlineMath math="ab > 1 + \frac{3}{2}\pi" /> を満たすものとする）
                </p>
                <div className="mt-4 font-semibold">関数の性質の直感的な説明:</div>
                <p className="mt-2">
                    この関数は、大きな波（低周波）に小さな波（高周波）を無限に足し合わせることで構成される。係数 <InlineMath math="a^n" /> が 0 に収束するため、各項の振幅はどんどん小さくなり、結果として連続な（繋がった）グラフを描くことができる（ワイエルシュトラスのM判定法による一様収束）。<br />
                    しかし、周波数を表す <InlineMath math="b^n" /> が非常に速く増大する（<InlineMath math="ab > 1" /> という条件が重要）ため、どれだけグラフを拡大しても、次から次へとより細かな「ギザギザ」が現れ続ける構造になっている。そのため、どんな点においてもグラフが平坦にならず、接線を引くための「一定の傾き」に収束することがない。
                </p>
            </ContentBox>

            <ContentBox type="column" title="コラム：フラクタルとの関係">
                <p>
                    ワイエルシュトラス関数は、現代の言葉で言えば「フラクタル（自己相似性）」の性質を持つ関数の先駆的な例です。どんなに微小な領域を拡大しても複雑なパターンのままというこの振る舞いは、海岸線の長さの計測や、株式市場の価格変動（ランダムウォークやブラウン運動のパスも確率1で至る所微分不可能）といった分野で自然界・社会の現象を記述する重要なモデルとなっています。
                </p>
            </ContentBox>

            <p>
                ワイエルシュトラス関数のような反例の存在は、図や直感だけに頼る議論の危険性を示し、「極限」や「微分」といった概念を厳密な <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法で基礎づける（実解析の構築）強い動機となりました。
                次節 §6.2 では、そのような厳密な微分理論の基軸となる「平均値定理」の証明に取り掛かります。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数の微分可能性（微分係数）は、平均変化率の極限として厳密に定義される。</li>
                    <li>点において微分可能であれば、その点で必ず連続である（微分可能は連続の十分条件）。</li>
                    <li>連続関数であっても微分可能とは限らない。ワイエルシュトラス関数のように「至る所連続だが、至る所微分不可能」な極端な関数（フラクタル構造）も存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
