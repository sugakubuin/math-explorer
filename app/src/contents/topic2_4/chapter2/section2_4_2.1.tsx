import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MappingDefinitionsAndProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 1 では、集合そのものの定義・演算・構造を学びました。しかし数学が真の力を発揮するのは、「集合と集合の間の対応関係」を扱えるようになったときです。
                この対応関係を厳密に定式化したものが<strong>写像（Map / Function）</strong>です。
                写像の概念は、§1.3 で定義した<strong>直積集合</strong>を用いることで、集合論の言語の上に完全に定式化されます。Chapter 2 では、写像の基本的な性質を丁寧に積み上げていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">写像の定義</h2>

            <p>
                「<InlineMath math="x" /> を2乗する」「整数に対してその絶対値を返す」といった対応は、日常的に「関数」と呼ばれます。
                これを集合論の言葉で厳密に定義しましょう。重要なのは、「各入力に対して出力がちょうど1つ定まる」という<strong>一意性</strong>の条件です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (写像・定義域・値域・グラフ)">
                <p>
                    <InlineMath math="A" /> と <InlineMath math="B" /> を集合とする。<InlineMath math="A" /> の各元 <InlineMath math="a" /> に対して <InlineMath math="B" /> の元をちょうど1つ対応させる規則 <InlineMath math="f" /> を、<InlineMath math="A" /> から <InlineMath math="B" /> への<strong>写像（Map）</strong>といい、
                </p>
                <BlockMath math="f \colon A \to B" />
                <p>
                    と表す。このとき：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="A" /> を <InlineMath math="f" /> の<strong>定義域（Domain）</strong>という。
                    </li>
                    <li>
                        <InlineMath math="B" /> を <InlineMath math="f" /> の<strong>値域（Codomain）</strong>（または<strong>終域</strong>）という。
                    </li>
                    <li>
                        元 <InlineMath math="a \in A" /> に対応する <InlineMath math="B" /> の元を <InlineMath math="f(a)" /> と書き、<InlineMath math="a" /> の<strong>像（Image）</strong>という。
                    </li>
                    <li>
                        直積集合 <InlineMath math="A \times B" /> の部分集合
                        <BlockMath math="\Gamma_f = \{(a, f(a)) \mid a \in A\} \subset A \times B" />
                        を <InlineMath math="f" /> の<strong>グラフ（Graph）</strong>という。
                    </li>
                </ul>
                <p className="mt-4">
                    写像の定義を集合論的に言い直すと、<InlineMath math="A \times B" /> の部分集合 <InlineMath math="\Gamma \subset A \times B" /> が写像のグラフであるとは、以下の条件が成立することである。
                </p>
                <BlockMath math="\forall a \in A,\ \exists! b \in B,\ (a, b) \in \Gamma" />
                <p>
                    （「<InlineMath math="\exists!" /> 」は「ちょうど1つ存在する」を意味する。）
                </p>
            </ContentBox>

            <p className="mt-4">
                定義を確認するために、具体的な写像を一つ見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (写像の具体例とグラフ)">
                <p>
                    写像 <InlineMath math="f \colon \mathbb{R} \to \mathbb{R}" />、<InlineMath math="f(x) = x^2" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>定義域は <InlineMath math="\mathbb{R}" />（実数全体）、値域（終域）も <InlineMath math="\mathbb{R}" /> である。</li>
                    <li>
                        各実数 <InlineMath math="x" /> に対して、<InlineMath math="f(x) = x^2" /> はただ1つの実数を返すため、写像の条件を満たす。
                    </li>
                    <li>
                        グラフは
                        <BlockMath math="\Gamma_f = \{(x, x^2) \mid x \in \mathbb{R}\} \subset \mathbb{R} \times \mathbb{R}" />
                        であり、これはいわゆる放物線の座標集合に他ならない。
                    </li>
                </ul>
                <p className="mt-4">
                    一方、<InlineMath math="\mathbb{R}" /> から <InlineMath math="\mathbb{R}" /> への「対応 <InlineMath math="g(x) = \pm\sqrt{x}" />」は写像<strong>ではない</strong>。
                    例えば <InlineMath math="x = 4" /> に対して <InlineMath math="g(4)" /> の候補が <InlineMath math="+2" /> と <InlineMath math="-2" /> の2つあり、出力が一意に定まらないからである。
                    また、<InlineMath math="x = -1" /> に対しては <InlineMath math="\mathbb{R}" /> の中に対応する元がなく、定義域の全元に値が定まらない点でも写像の要件を満たさない。
                </p>
            </ContentBox>

            <p className="mt-4">
                なお、値域（終域）と後で定義する「像（Image）」の混同は非常によくある誤りです。次の注意をしっかり確認してください。
            </p>

            <ContentBox type="remark" title="「値域（終域）」と「像」の違いに注意">
                <p>
                    写像 <InlineMath math="f \colon A \to B" /> において：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong>値域（終域） <InlineMath math="B" /></strong>：写像を定める際に「出力先として用意した集合」全体。<InlineMath math="f" /> の定義の一部であり、<InlineMath math="f" /> の「宣言」に含まれる情報である。
                    </li>
                    <li>
                        <strong>像 <InlineMath math="f(A)" /></strong>：実際に <InlineMath math="f" /> によって送られた元が作る集合（§2.1 Definition 2.1-2 で定義）。一般に <InlineMath math="f(A) \subset B" /> であるが、<InlineMath math="f(A) = B" /> とは限らない。
                    </li>
                </ul>
                <p className="mt-4">
                    例えば <InlineMath math="f \colon \mathbb{R} \to \mathbb{R},\ f(x) = x^2" /> では、終域は <InlineMath math="\mathbb{R}" /> 全体だが、実際の像は <InlineMath math="f(\mathbb{R}) = [0, +\infty)" /> にすぎない（負の実数は <InlineMath math="f" /> の出力として現れない）。
                    この2つを区別しないと、「全射」の定義（§2.2）で混乱が生じるので注意が必要である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">像と逆像</h2>

            <p>
                写像 <InlineMath math="f \colon A \to B" /> が与えられたとき、<InlineMath math="A" /> の元一つ一つだけでなく、<InlineMath math="A" /> の<strong>部分集合全体</strong>を一度に「写す」操作や、逆に <InlineMath math="B" /> の部分集合に対して「どこから来たか」を追う操作が、応用上きわめて重要になります。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (点の像・集合の像・逆像)">
                <p>
                    写像 <InlineMath math="f \colon A \to B" />、部分集合 <InlineMath math="S \subset A" />、<InlineMath math="T \subset B" /> に対して次を定義する。
                </p>
                <ol className="list-decimal list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <strong>点の像（Image of a Point）:</strong><br />
                        元 <InlineMath math="a \in A" /> に対して <InlineMath math="f" /> が対応させる <InlineMath math="B" /> の元 <InlineMath math="f(a)" /> を、<InlineMath math="a" /> の<strong>像</strong>という（Definition 2.1-1 で既に導入済み）。
                    </li>
                    <li>
                        <strong>集合の像（Image of a Set）:</strong><br />
                        <InlineMath math="S" /> の各元の像を全て集めた集合
                        <BlockMath math="f(S) = \{f(a) \mid a \in S\} \subset B" />
                        を <InlineMath math="S" /> の <InlineMath math="f" /> による<strong>像</strong>という。特に <InlineMath math="f(A)" /> を <InlineMath math="f" /> の<strong>像（Image）</strong>または<strong>値域</strong>と呼ぶことがある。
                    </li>
                    <li>
                        <strong>逆像（Preimage / Inverse Image）:</strong><br />
                        <InlineMath math="T" /> の元に写される <InlineMath math="A" /> の元を全て集めた集合
                        <BlockMath math="f^{-1}(T) = \{a \in A \mid f(a) \in T\} \subset A" />
                        を <InlineMath math="T" /> の <InlineMath math="f" /> による<strong>逆像（原像）</strong>という。
                    </li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                逆像の記号 <InlineMath math="f^{-1}(T)" /> は、「<InlineMath math="f" /> の逆写像（§2.3 で定義）を <InlineMath math="T" /> に適用したもの」のように見えますが、逆像は <InlineMath math="f" /> が逆写像を持つかどうかにかかわらず、<strong>任意の写像</strong>に対して定義できることに注意してください。具体例で確認しましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (像と逆像の計算)">
                <p>
                    <InlineMath math="f \colon \mathbb{R} \to \mathbb{R}" />、<InlineMath math="f(x) = x^2" /> に対して、各集合の像と逆像を求める。
                </p>
                <p className="mt-4"><strong>1. 集合の像の例:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                        <InlineMath math="S = [-2, 3]" /> とすると、
                        <BlockMath math="f(S) = \{x^2 \mid x \in [-2, 3]\} = [0, 9]" />
                        （<InlineMath math="x \in [-2, 3]" /> のとき <InlineMath math="x^2" /> の最小値は <InlineMath math="0"  />、最大値は <InlineMath math="9" />）
                    </li>
                    <li>
                        <InlineMath math="S = \{-1, 0, 2\}" /> とすると、
                        <BlockMath math="f(S) = \{(-1)^2, 0^2, 2^2\} = \{0, 1, 4\}" />
                    </li>
                </ul>
                <p className="mt-4"><strong>2. 逆像の例:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                        <InlineMath math="T = \{4\}" /> とすると、
                        <BlockMath math="f^{-1}(\{4\}) = \{x \in \mathbb{R} \mid x^2 = 4\} = \{-2, 2\}" />
                        （ <InlineMath math="x = 4" /> でなく <InlineMath math="x = -2, 2" /> の2点が「<InlineMath math="4" /> に写される元」であることに注意。逆像は1点から複数点になりうる。）
                    </li>
                    <li>
                        <InlineMath math="T = [-1, 0)" /> とすると、
                        <BlockMath math="f^{-1}([-1, 0)) = \{x \in \mathbb{R} \mid x^2 \in [-1, 0)\} = \{0\}" />
                        （<InlineMath math="x^2 \geq 0" /> であるため、<InlineMath math="x^2 \in [-1, 0)" /> を満たすのは <InlineMath math="x^2 = 0" />、すなわち <InlineMath math="x = 0" /> のみ）
                    </li>
                    <li>
                        <InlineMath math="T = (-\infty, -1)" /> とすると、
                        <BlockMath math="f^{-1}((-\infty, -1)) = \emptyset" />
                        （<InlineMath math="x^2 \geq 0" /> であるため、<InlineMath math="x^2 < -1" /> となる実数は存在しない）
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特別な写像</h2>

            <p>
                写像の中で、その単純な構造ゆえに理論の基礎として頻繁に登場する3種類の写像を定義します。特に<strong>恒等写像</strong>は、写像の合成（§2.3）において「掛け算における1」のような役割を果たします。
            </p>

            <ContentBox type="definition" title="Definition 2.1-3 (恒等写像・包含写像・定値写像)">
                <p>
                    集合 <InlineMath math="A" /> に対して、次の写像を定義する。
                </p>
                <ol className="list-decimal list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <strong>恒等写像（Identity Map）:</strong><br />
                        各元をそれ自身に写す写像
                        <BlockMath math="\mathrm{id}_A \colon A \to A,\quad \mathrm{id}_A(a) = a" />
                        を <InlineMath math="A" /> 上の<strong>恒等写像</strong>という。<InlineMath math="1_A" /> とも表す。
                    </li>
                    <li>
                        <strong>包含写像（Inclusion Map）:</strong><br />
                        <InlineMath math="A \subset B" /> のとき、各元 <InlineMath math="a \in A" /> をそのまま <InlineMath math="B" /> の元とみなす写像
                        <BlockMath math="\iota \colon A \hookrightarrow B,\quad \iota(a) = a" />
                        を <InlineMath math="A" /> から <InlineMath math="B" /> への<strong>包含写像（自然な包含）</strong>という。形式的には恒等写像と同じ対応則だが、定義域と値域が異なる（<InlineMath math="A \subsetneq B" /> であれば別の写像）。
                    </li>
                    <li>
                        <strong>定値写像（Constant Map）:</strong><br />
                        あらかじめ固定した元 <InlineMath math="b_0 \in B" /> に対して、<InlineMath math="A" /> のすべての元を <InlineMath math="b_0" /> に写す写像
                        <BlockMath math="c_{b_0} \colon A \to B,\quad c_{b_0}(a) = b_0" />
                        を <strong><InlineMath math="b_0" /> への定値写像（定数写像）</strong>という。
                    </li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                3種類の違いを具体的な例で確認しましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-3 (恒等写像・包含写像・定値写像の例)">
                <p>
                    <InlineMath math="A = \{1, 2, 3\}" />、<InlineMath math="B = \{1, 2, 3, 4, 5\}" /> とする（<InlineMath math="A \subset B" />）。
                </p>
                <ul className="list-disc list-inside space-y-3 mt-4 ml-4">
                    <li>
                        <strong>恒等写像</strong> <InlineMath math="\mathrm{id}_A \colon A \to A" />：
                        <InlineMath math="\mathrm{id}_A(1) = 1" />、<InlineMath math="\mathrm{id}_A(2) = 2" />、<InlineMath math="\mathrm{id}_A(3) = 3" />。
                        定義域も値域も <InlineMath math="A = \{1, 2, 3\}" />。
                    </li>
                    <li>
                        <strong>包含写像</strong> <InlineMath math="\iota \colon A \hookrightarrow B" />：
                        <InlineMath math="\iota(1) = 1" />、<InlineMath math="\iota(2) = 2" />、<InlineMath math="\iota(3) = 3" />。
                        対応則は恒等写像と全く同じだが、値域が <InlineMath math="B = \{1,2,3,4,5\}" /> に拡大されているため、<InlineMath math="\mathrm{id}_A" /> とは<strong>別の写像</strong>である（Definition 2.1-4 参照）。
                    </li>
                    <li>
                        <strong>定値写像</strong> <InlineMath math="c_4 \colon A \to B" /> （<InlineMath math="b_0 = 4" /> の場合）：
                        <InlineMath math="c_4(1) = 4" />、<InlineMath math="c_4(2) = 4" />、<InlineMath math="c_4(3) = 4" />。
                        どんな入力も <InlineMath math="4" /> に写される。像は <InlineMath math="c_4(A) = \{4\}" /> という1点集合。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">写像の相等</h2>

            <p>
                「2つの写像が同じである」とはどういうことか、改めて厳密に定義しておく必要があります。
                先ほどの例のように、「同じ対応則を持っていても定義域や値域が違えば別の写像」とみなすのが集合論的な立場です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-4 (写像の相等)">
                <p>
                    2つの写像 <InlineMath math="f \colon A \to B" /> と <InlineMath math="g \colon C \to D" /> が<strong>等しい</strong>（<InlineMath math="f = g" />）とは、以下の3条件がすべて成立することをいう。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li>定義域が等しい：<InlineMath math="A = C" /></li>
                    <li>値域（終域）が等しい：<InlineMath math="B = D" /></li>
                    <li>対応則が等しい：<InlineMath math="\forall a \in A,\ f(a) = g(a)" /></li>
                </ol>
                <p className="mt-4">
                    同値な言い方をすれば、<InlineMath math="f = g \iff \Gamma_f = \Gamma_g"  />（グラフが等しい）ことである。
                </p>
            </ContentBox>

            <p className="mt-4">
                この定義の厳密さが、次のような直感に反する状況を明確に処理してくれます。
            </p>

            <ContentBox type="example" title="Example 2.1-4 (写像の相等と非相等の例)">
                <p>
                    次の3つの写像を比較する。
                </p>
                <ul className="list-disc list-inside space-y-3 mt-4 ml-4">
                    <li>
                        <InlineMath math="f \colon \mathbb{R} \to \mathbb{R},\quad f(x) = x^2" />
                    </li>
                    <li>
                        <InlineMath math="g \colon \mathbb{R} \to [0, +\infty),\quad g(x) = x^2" />
                    </li>
                    <li>
                        <InlineMath math="h \colon [0, +\infty) \to \mathbb{R},\quad h(x) = x^2" />
                    </li>
                </ul>
                <p className="mt-4">
                    これら3つは対応則 <InlineMath math="x \mapsto x^2" /> こそ共通しているが：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="f" /> と <InlineMath math="g" />：定義域は等しく <InlineMath math="\mathbb{R}" /> だが、<strong>値域が異なる</strong>（<InlineMath math="\mathbb{R} \neq [0,+\infty)" />）ため <InlineMath math="f \neq g" />。</li>
                    <li><InlineMath math="f" /> と <InlineMath math="h" />：値域は等しく <InlineMath math="\mathbb{R}" /> だが、<strong>定義域が異なる</strong>（<InlineMath math="\mathbb{R} \neq [0,+\infty)" />）ため <InlineMath math="f \neq h" />。</li>
                    <li><InlineMath math="g" /> と <InlineMath math="h" />：定義域も値域も異なるため <InlineMath math="g \neq h" />。</li>
                </ul>
                <p className="mt-4">
                    この区別は §2.2 以降で全射・単射の性質を議論する際に本質的な役割を果たす。<InlineMath math="f" /> は全射でないが <InlineMath math="g" /> は全射である、というように、同じ対応則に対して値域の選び方一つで性質が変わるからである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="写像・関数・変換・作用素という用語について">
                <p>
                    「写像（Map）」「関数（Function）」「変換（Transformation）」「作用素（Operator）」はいずれも定義上ほぼ同じ概念だが、分野や文脈によって使い分けられることが多い。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong>関数</strong>：定義域・値域が <InlineMath math="\mathbb{R}" /> や <InlineMath math="\mathbb{C}" /> などの数の集合である場合に多く使われる（解析学）。
                    </li>
                    <li>
                        <strong>写像</strong>：定義域・値域が一般の集合である場合の標準的な呼称（集合論・代数学・位相空間論）。
                    </li>
                    <li>
                        <strong>変換</strong>：定義域と値域が同じ集合の場合（例：線形変換 <InlineMath math="T \colon V \to V" />）に好んで使われる（線形代数学）。
                    </li>
                    <li>
                        <strong>作用素</strong>：関数空間や無限次元空間の間の写像を指すことが多い（関数解析）。
                    </li>
                </ul>
                <p className="mt-4">
                    本テキストでは、一般的な文脈では「写像」を使い、実数値・複素数値の対応については「関数」という言葉も自然に用いる。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        写像 <InlineMath math="f \colon A \to B" /> とは、<InlineMath math="A" /> の各元に <InlineMath math="B" /> の元をちょうど1つ対応させる規則であり、そのグラフ <InlineMath math="\Gamma_f \subset A \times B" /> によって集合論的に定式化される。
                    </li>
                    <li>
                        集合 <InlineMath math="S \subset A" /> の像 <InlineMath math="f(S) = \{f(a) \mid a \in S\}" /> と、集合 <InlineMath math="T \subset B" /> の逆像 <InlineMath math="f^{-1}(T) = \{a \in A \mid f(a) \in T\}" /> は互いに独立した概念であり、どちらも任意の写像に対して定義される。
                    </li>
                    <li>
                        恒等写像 <InlineMath math="\mathrm{id}_A" />・包含写像 <InlineMath math="\iota" />・定値写像 <InlineMath math="c_{b_0}" /> は、写像論の基礎をなす特別な写像である。
                    </li>
                    <li>
                        2つの写像が等しいとは、定義域・値域（終域）・対応則の3つがすべて一致することである。対応則だけが同じでも、定義域や値域が異なれば別の写像とみなされる。
                    </li>
                </ul>
            </ContentBox>
        </section>
    );
}
