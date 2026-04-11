import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LinearSystemsAndDimensions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                除数の概念を導入したのは「与えられた極の条件を満たす有理型関数がどれくらい存在するか」を定式化するためでした。本節では、除数によって指定された条件を満たす関数の集合がなす線形空間（ベクトル空間）を定義し、その「次元」を調べます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有理型関数の空間 L(D)</h2>

            <p>
                「極はあってもよいが、指定された場所以上で悪さをしてはいけない」という条件を、除数を使った不等式で表現します。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.2-1 (<b>除数に付随する空間 <InlineMath math="L(D)" /> </b>)</span>}>
                <p>
                    コンパクトリーマン面 <InlineMath math="S" /> とその上の除数 <InlineMath math="D" /> に対して、有理型関数の集合 <InlineMath math="L(D)" /> を次のように定義する。
                </p>
                <BlockMath math="L(D) = \{ f : S \text{ 上の有理型関数} \mid (f) + D \geq 0 \} \cup \{0\}" />
                <p>
                    ここで、除数の不等式 <InlineMath math="\geq 0" /> とは、すべての点 <InlineMath math="p \in S" /> において係数が非負であることを意味する。<InlineMath math="f, g \in L(D)" /> および定数 <InlineMath math="c \in \mathbb{C}" /> に対して <InlineMath math="f+g \in L(D)" />、<InlineMath math="cf \in L(D)" /> が成り立つため、<InlineMath math="L(D)" /> は複素ベクトル空間となる。
                </p>
            </ContentBox>

            <p>
                この条件 <InlineMath math="(f) + D \geq 0" /> の意味を具体的に考えてみましょう。<InlineMath math="D = \sum n_p p" /> とすると、各点 <InlineMath math="p" /> において <InlineMath math="\mathrm{ord}_p(f) + n_p \geq 0" />、すなわち <InlineMath math="\mathrm{ord}_p(f) \geq -n_p" /> でなければなりません。
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
                <li><InlineMath math="n_p > 0" /> のとき：関数 <InlineMath math="f" /> は <InlineMath math="p" /> において<b>最大でも <InlineMath math="n_p" /> 位の極までしか許されない</b>（それより低い極や正則であってもよい）。</li>
                <li><InlineMath math="n_p < 0" /> のとき：関数 <InlineMath math="f" /> は <InlineMath math="p" /> において<b>少なくとも <InlineMath math="|n_p|" /> 位の零点を持たなければならない</b>。</li>
                <li><InlineMath math="n_p = 0" /> のとき：関数 <InlineMath math="f" /> は <InlineMath math="p" /> で極を持ってはならず、<b>正則でなければならない</b>。</li>
            </ul>
            <p>
                つまり、<InlineMath math="D" /> の正の部分は「許される極の強さ」を、負の部分は「要求される零点の強さ」を指定しています。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.2-2 (<b><InlineMath math="l(D)" /> の定義</b>)</span>}>
                <p>
                    空間 <InlineMath math="L(D)" /> の複素ベクトル空間としての次元を <InlineMath math="l(D)" /> と表す。
                </p>
                <BlockMath math="l(D) = \dim_{\mathbb{C}} L(D)" />
                <p>
                    リーマン-ロッホの定理は、究極的にはこの <InlineMath math="l(D)" /> という次元の値を計算する公式である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.2-1">
                <p>
                    リーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> 上で、無限遠点 <InlineMath math="\infty" /> における極だけを許す場合を考えましょう。除数を <InlineMath math="D = n \cdot \infty" /> （<InlineMath math="n \geq 0" />）とします。
                </p>
                <p>
                    条件 <InlineMath math="(f) + n \cdot \infty \geq 0" /> は、「 <InlineMath math="\mathbb{C}" /> 上（<InlineMath math="\infty" /> 以外）では極を持たず（すなわち多項式であり）、<InlineMath math="\infty" /> では最大で <InlineMath math="n" /> 位の極を持つ」ことを意味します。<InlineMath math="\hat{\mathbb{C}}" /> 上の多項式のうち、<InlineMath math="\infty" /> に <InlineMath math="n" /> 位以下の極を持つのはまさに「次数が <InlineMath math="n" /> 以下の多項式」全体です。
                </p>
                <p>
                    次数が <InlineMath math="n" /> 以下の多項式 <InlineMath math="c_0 + c_1 z + \cdots + c_n z^n" /> の空間は、基底 <InlineMath math="\{1, z, z^2, \dots, z^n\}" /> を持つため、その次元は <InlineMath math="n + 1" /> です。したがって、
                </p>
                <BlockMath math="l(n \cdot \infty) = n + 1" />
                <p>
                    となります。
                </p>
            </ContentBox>

            <p>
                この次元 <InlineMath math="l(D)" /> が一体どのような性質を持っているのかを調べていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">l(D) の基本性質</h2>

            <p>
                まず、条件をどう厳しくしようと甘くしようと、この空間は無限の自由度を持つ（無限次元になる）ことはありません。
            </p>

            <ContentBox type="proposition" title="Proposition 8.2-1">
                <p>
                    コンパクトリーマン面上の任意の除数 <InlineMath math="D" /> に対して、空間 <InlineMath math="L(D)" /> は常に有限次元である。すなわち <InlineMath math="l(D) < \infty" />。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）まず、<InlineMath math="\deg D < 0" /> の場合を考える。<InlineMath math="f \in L(D)" /> （<InlineMath math="f \neq 0" />）が存在すると仮定すると、<InlineMath math="(f) + D \geq 0" /> であり各係数が <InlineMath math="0" /> 以上なので、全係数を足し合わせた次数も <InlineMath math="0" /> 以上となる。すなわち <InlineMath math="\deg((f) + D) \geq 0" />。しかし、Theorem 8.1-1 より <InlineMath math="\deg(f) = 0" /> なので <InlineMath math="\deg D \geq 0" /> となり仮定に矛盾する。したがって <InlineMath math="\deg D < 0" /> ならば <InlineMath math="L(D) = \{0\}" /> であり、<InlineMath math="l(D) = 0" />（有限次元）である。
                </p>
                <p>
                    <InlineMath math="\deg D \geq 0" /> の場合は、<InlineMath math="D" /> に許された極の周りでのローラン展開を考える。許される主要部の形は高々 <InlineMath math="n_p" /> 次までの負のべき乗であるため、極の部分から生じる「自由度」は有限個（実質的に主要部の係数の個数）に限られる。さらに主要部が全て <InlineMath math="0" /> である正則関数の全体は、コンパクトリーマン面上のリューヴィルの定理により定数関数（1次元）しか存在しない。ゆえに全体の次元も有限に留まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                また、前節で定義した「線形同値」という関係は、この関数の次元に深く結びついています。
            </p>

            <ContentBox type="proposition" title="Proposition 8.2-2">
                <p>
                    2つの除数が線形同値であるならば、それらに付随する空間の次元は等しい。
                </p>
                <BlockMath math="D_1 \sim D_2 \implies l(D_1) = l(D_2)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    線形同値 <InlineMath math="D_1 \sim D_2" /> の定義より、ある <InlineMath math="0" /> でない有理型関数 <InlineMath math="g" /> が存在して <InlineMath math="D_1 = D_2 + (g)" /> と書ける。
                </p>
                <p>
                    <InlineMath math="f \in L(D_1)" /> とする。定義より <InlineMath math="(f) + D_1 \geq 0" /> である。ここに <InlineMath math="D_1" /> を代入すると
                </p>
                <BlockMath math="(f) + D_2 + (g) \geq 0 \iff (fg) + D_2 \geq 0" />
                <p>
                    （対数関数の性質と同様に <InlineMath math="(fg) = (f) + (g)" /> が成り立つため）。これは <InlineMath math="fg \in L(D_2)" /> であることを意味する。
                </p>
                <p>
                    したがって、写像 <InlineMath math="\phi: L(D_1) \to L(D_2)" /> を <InlineMath math="\phi(f) = fg" /> で定義すると、これはよく定義された同型写像（全単射な線形写像）となる（逆写像は <InlineMath math="1/g" /> を掛けること）。同型なベクトル空間の次元は等しいため、<InlineMath math="l(D_1) = l(D_2)" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.2-2">
                <p>
                    種数 <InlineMath math="g = 1" /> のリーマン面（トーラス）において、ある1点 <InlineMath math="p" /> のみで1位の極を許す空間 <InlineMath math="D = 1 \cdot p" /> を考えます。
                </p>
                <p>
                    もし <InlineMath math="L(D)" /> のなかに定数でない関数 <InlineMath math="f" /> が存在したとすると、その関数は <InlineMath math="p" /> にちょうど1位の極を一つだけ持つ有理型関数となります。しかし、リーマン面上の積分理論などの結果から、種別によらず（種数0の球面を除いて）「ちょうど1位の極を1つだけ持つ有理型関数は存在しない」ことが知られています。
                </p>
                <p>
                    したがって、<InlineMath math="p" /> で極を持たない関数、すなわち定数関数のみが含まれることになり、
                </p>
                <BlockMath math="l(1 \cdot p) = 1" />
                <p>
                    となります。これは後ほどリーマン-ロッホの定理から一般的に計算できるようになります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="線形系の幾何学的・工学的意味">
                <p>
                    <InlineMath math="L(D)" /> の要素による有理関数たちの集まりから得られる幾何学的対象を「線形系（Linear system）」と呼びます。「ここに極があってよい」という条件を一つ緩めたり厳しくしたりする（除数に点を足し引きする）ごとに、次元 <InlineMath math="l(D)" /> はどう変化するでしょうか。この「許容される自由度」の増減を方程式として解き明かすのがリーマン-ロッホの定理の主題です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>除数 <InlineMath math="D" /> に付随するベクトル空間 <InlineMath math="L(D)" /> とは、<InlineMath math="D" /> の正の係数で指定された以内の極しか持たず、負の係数で指定された以上の零点を持つ有理型関数の全体である。</li>
                    <li>コンパクトリーマン面上では、<InlineMath math="L(D)" /> は常に有限次元であり、その次元を <InlineMath math="l(D)" /> と書く。</li>
                    <li>線形同値な除数は同じ次元 <InlineMath math="l(D)" /> を持つため、次元の計算は線形同値類に対して行えばよい。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
