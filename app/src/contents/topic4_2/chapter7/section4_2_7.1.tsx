import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LittlePicardTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析における最も美しく、そして驚くべき結果の一つが、整関数の取り得る値の範囲に関する定理群です。基礎的なリューヴィルの定理は「有界な整関数は定数である」と述べており、非定値の整関数は必然的に「有界ではない」こと、つまり無限に大きな値を取ることが保証されています。本章では、この結果を極限まで精密化した「ピカールの定理」に取り組みます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">小ピカールの定理</h2>

            <p>
                非定値の整関数が無限に大きくなることはわかっていますが、では特定の複素数値を取らずに避けることは可能でしょうか。実は、避けることができる値は「たかだか1つ」しかありません。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-1 (小ピカールの定理)">
                <p>
                    定数でない整関数は、たかだか1つの例外値を除いて、すべての複素数値を（少なくとも1回）取る。
                </p>
                <p>
                    言い換えると、もし整関数 <InlineMath math="f(z)" /> が2つの異なる複素数値 <InlineMath math="a, b" /> を決して取らない（すなわち任意の <InlineMath math="z \in \mathbb{C}" /> に対して <InlineMath math="f(z) \neq a" /> かつ <InlineMath math="f(z) \neq b" /> である）ならば、<InlineMath math="f(z)" /> は定数関数でなければならない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）<InlineMath math="f" /> が <InlineMath math="a" /> および <InlineMath math="b" /> （<InlineMath math="a \neq b" />）の2つの値を取らない整関数であると仮定する。このとき、関数
                </p>
                <BlockMath math="g(z) = \frac{f(z) - a}{b - a}" />
                <p>
                    を考えると、<InlineMath math="g(z)" /> も整関数であり、決して <InlineMath math="0" /> と <InlineMath math="1" /> の値を取らない。
                </p>
                <p>
                    ここから、モジュラー関数（単連結領域 <InlineMath math="\mathbb{H}" /> から <InlineMath math="\mathbb{C} \setminus \{0, 1\}" /> への普遍被覆写像）を用いた被覆空間の議論に移行する。被覆写像 <InlineMath math="\lambda: \mathbb{H} \to \mathbb{C} \setminus \{0, 1\}" /> を考える。底空間 <InlineMath math="\mathbb{C}" /> は単連結であるため、持ち上げの定理（位相空間論II）により、正則写像 <InlineMath math="g: \mathbb{C} \to \mathbb{C} \setminus \{0, 1\}" /> は普遍被覆空間 <InlineMath math="\mathbb{H}" /> への正則写像 <InlineMath math="\tilde{g}: \mathbb{C} \to \mathbb{H}" /> に持ち上げることができる。つまり <InlineMath math="g(z) = \lambda(\tilde{g}(z))" /> となる。
                </p>
                <p>
                    しかし、<InlineMath math="\tilde{g}" /> は <InlineMath math="\mathbb{C}" /> 全体で定義され、上半平面 <InlineMath math="\mathbb{H}" /> に値を取る正則関数である。メビウス変換によって <InlineMath math="\mathbb{H}" /> は単位円板 <InlineMath math="\mathbb{D}" /> と双正則同値であるから、<InlineMath math="\tilde{g}" /> は本質的に有界な整関数とみなすことができる。
                </p>
                <p>
                    したがって、リューヴィルの定理により <InlineMath math="\tilde{g}" /> は定数であり、その結果として <InlineMath math="g(z)" /> も、そして元の <InlineMath math="f(z)" /> も定数であることが結論づけられる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-1">
                <p>
                    指数関数 <InlineMath math="f(z) = e^z" /> を考えてみます。<InlineMath math="e^z" /> は決して <InlineMath math="0" /> にはなりません（これが「1つの例外値」です）。しかし、<InlineMath math="0" /> 以外の任意の複素数 <InlineMath math="w \neq 0" /> に対しては、方程式 <InlineMath math="e^z = w" /> は解 <InlineMath math="z = \log w = \ln|w| + i\arg w" /> を持ちます。したがって、<InlineMath math="e^z" /> は <InlineMath math="0" /> 以外のすべての値を取ります。
                </p>
                <p>
                    小ピカールの定理は、指数関数のこの「例外値は1つだけ」という状況が、理論上許される極限であることを示しています。2番目の例外値を持つことは絶対に不可能です。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-2">
                <p>
                    代数学の基本定理（複素解析Iで学習済み）によれば、定数でない多項式 <InlineMath math="P(z)" /> は必ず根を持ちます。これは <InlineMath math="P(z) = w" /> という方程式が任意の <InlineMath math="w" /> に対して解を持つことを意味しており、多項式の例外値は「0個」です。ピカールの定理は「例外値はたかだか1個」と主張しているため、多項式も当然この枠組みに収まっています。
                </p>
            </ContentBox>

            <p>
                小ピカールの定理の力は、一見まったく別の問題に見える関係式から、関数が定数であることを一瞬で導き出せる点にあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">小ピカールの定理の帰結</h2>

            <p>
                方程式から関数の自由度を制限する応用例を見てみましょう。
            </p>

            <ContentBox type="theorem" title="Corollary 7.1-1">
                <p>
                    <InlineMath math="f(z)" /> と <InlineMath math="g(z)" /> が整関数であって、すべての <InlineMath math="z \in \mathbb{C}" /> に対して
                </p>
                <BlockMath math="e^{f(z)} = e^{g(z)}" />
                <p>
                    が成り立つならば、<InlineMath math="f(z) - g(z)" /> はある定数 <InlineMath math="2\pi i n" /> （<InlineMath math="n \in \mathbb{Z}" />）に等しい整関数である。つまり、<InlineMath math="f(z)" /> と <InlineMath math="g(z)" /> は定数の差を除いて一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定より、比を取って <InlineMath math="e^{f(z) - g(z)} = 1" /> が全平面で成り立つ。<InlineMath math="h(z) = f(z) - g(z)" /> と置くと、<InlineMath math="h(z)" /> は整関数である。
                </p>
                <p>
                    指数関数が <InlineMath math="1" /> になる条件から、任意の <InlineMath math="z" /> に対して <InlineMath math="h(z)" /> の値は <InlineMath math="2\pi in" /> （<InlineMath math="n \in \mathbb{Z}" />）のいずれかなければならない。すなわち、<InlineMath math="h(z)" /> の像は離散的な点の集合 <InlineMath math="\{2\pi in \mid n \in \mathbb{Z}\}" /> に含まれる。
                </p>
                <p>
                    特に、<InlineMath math="h(z)" /> はこの離散集合以外の値（例えば <InlineMath math="0, i, 1" /> など無数の複素数値）を一切取らないことになる。2つ以上の値を取らない整関数が定数でないとすると小ピカールの定理に反する（あるいは、連続関数による連結集合 <InlineMath math="\mathbb{C}" /> の像が連結でなければならないというより初等的な位相的理由からでもよい）。
                </p>
                <p>
                    したがって <InlineMath math="h(z)" /> は定数であり、その定数はある <InlineMath math="2\pi i n" /> でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-3">
                <p>
                    <InlineMath math="\sin z = 0" /> の解を複素数の範囲で探す際にも、この考え方が現れます。方程式を解くと <InlineMath math="e^{iz} - e^{-iz} = 0" /> より <InlineMath math="e^{2iz} = 1" /> となります。先ほどと同様に考えれば、<InlineMath math="2iz" /> は定数 <InlineMath math="2\pi in" /> しか取り得ず、解は実軸上の <InlineMath math="z = n\pi" /> だけに尽きることがわかります。このように、複素平面上でも三角関数の零点は実数の場合から一切増えません。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="リューヴィルの定理の驚くべき精密化">
                <p>
                    リューヴィルの定理は「ある巨大な円盤（有界域）の外側の値」を全て取らない関数は定数であると述べています。一方、小ピカールの定理は「たった2つの点」を避けるだけで関数が定数に縛られてしまうことを示しています。これは正則関数がいかに「硬い」条件であるかを端的に表しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>小ピカールの定理：非定値の整関数は、最大でも1つの複素数（例外値）を除き、すべての値を少なくとも1回取る。</li>
                    <li>指数関数 <InlineMath math="e^z" /> は <InlineMath math="0" /> だけを取らないため、この「1つの例外」の実例となっている。多項式は例外値を持たない。</li>
                    <li>2つの値を避けると仮定すると、被覆空間と（単位円板上での）有界性に関するリューヴィルの定理から定数であることが導かれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
