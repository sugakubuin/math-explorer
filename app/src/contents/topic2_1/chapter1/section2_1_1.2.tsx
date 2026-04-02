import { InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function VectorSpaceExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ8つの公理を満たす「ベクトル空間」には、私たちが普段「ベクトル」として扱っているもの以外にも多くの種類があります。
                ここでは、線形代数学で頻繁に登場する代表的なベクトル空間の例をいくつか見てみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的なベクトル空間の例</h2>

            <ContentBox type="example" title="Example 1.2-1 （数ベクトル空間）">
                <p>
                    最も基本的なベクトル空間は、<InlineMath math="n" /> 個の実数（または複素数）を縦または横に並べた<strong>数ベクトル空間</strong>です。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                        <strong>実数ベクトル空間 <InlineMath math="\mathbb{R}^n" />：</strong> 要素が実数である <InlineMath math="n" /> 次元列ベクトル（または行ベクトル）の集合。
                    </li>
                    <li>
                        <strong>複素数ベクトル空間 <InlineMath math="\mathbb{C}^n" />：</strong> 要素が複素数である <InlineMath math="n" /> 次元ベクトルの集合。スカラー体も通常は <InlineMath math="\mathbb{C}" /> とします。
                    </li>
                </ul>
                <p className="mt-2 text-sm">
                    成分どうしの足し算と、各成分へのスカラー倍が定義されており、8つの公理をすべて満たします。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 （多項式空間）">
                <p>
                    変数 <InlineMath math="x" /> についての <InlineMath math="n" /> 次以下の実数係数多項式の集合を <InlineMath math="\mathbb{R}[x]_{\le n}" /> とおきます（<InlineMath math="P_n(x)" /> と書くこともあります）。<br />
                    この集合もベクトル空間となります。
                </p>
                <p className="mt-2">
                    たとえば、<InlineMath math="p(x) = 2x^2 + 3x + 1" />、<InlineMath math="q(x) = -x^2 + 5" /> とすると、<br />
                    <strong>和：</strong> <InlineMath math="(p + q)(x) = x^2 + 3x + 6" /> （これも2次以下の多項式）<br />
                    <strong>スカラー倍：</strong> <InlineMath math="(3p)(x) = 6x^2 + 9x + 3" /> （これも2次以下の多項式）<br />
                    となり、多項式の加法と実数倍の法則がそのままベクトル空間の公理を満たします。このとき零ベクトルは定数関数 <InlineMath math="0" /> となります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-3 （連続関数空間）">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上で定義された実数値連続関数全体の集合を <InlineMath math="C[a, b]" /> とします。
                </p>
                <p className="mt-2">
                    これもベクトル空間の公理を満たします（関数の和やスカラー倍は、そのまま各点 <InlineMath math="x" /> ごとに足したり掛けたりすることで定義されます）。
                    連続関数の和もスカラー倍も連続になるため、和とスカラー倍について閉じています。<br />
                    数ベクトル空間や多項式空間とは異なり、この空間は有限個のパラメータ（例えば <InlineMath math="n" /> 個の実数）では表し切れない「無限次元」のベクトル空間であるという特徴があります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-4 （行列空間）">
                <p>
                    成分が実数である <InlineMath math="m \times n" /> 行列全体の集合を <InlineMath math="M_{m \times n}(\mathbb{R})" /> とすると、これも行列の和・スカラー倍に関する演算規則により実ベクトル空間となります。<br />
                    とくに <InlineMath math="m = n" /> の正方行列の空間 <InlineMath math="M_{n}(\mathbb{R})" /> は、行列の積（乗法）も定義されていますが、ベクトル空間としては和とスカラー倍のみに注目します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル空間でない例</h2>

            <ContentBox type="remark" title="公理を1つでも満たさない集合の反例">
                <p>
                    和やスカラー倍が定義されているように見えても、公理を満たさないものはベクトル空間とは呼べません。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>自然数の組 <InlineMath math="\mathbb{N}^n" />：</strong><br />
                        自然数は負の数がないため、あるベクトル <InlineMath math="\boldsymbol{u}" /> に対して <InlineMath math="\boldsymbol{u} + \boldsymbol{v} = \boldsymbol{0}" /> となるような逆ベクトル <InlineMath math="\boldsymbol{v}" /> が（<InlineMath math="\boldsymbol{0}" /> 以外）存在しません。
                    </li>
                    <li>
                        <strong>必ず <InlineMath math="n" /> 次の項が存在する多項式の集合：</strong><br />
                        たとえば「ちょうど2次」の多項式の集合を考えます。<InlineMath math="p(x) = x^2 + 1" /> と <InlineMath math="q(x) = -x^2" /> はともにこの集合に属しますが、和 <InlineMath math="p(x) + q(x) = 1" /> は0次となり集合から外れてしまいます。和について閉じていないためベクトル空間ではありません。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>数ベクトル空間（<InlineMath math="\mathbb{R}^n" />）だけでなく、多項式空間、関数空間、行列空間なども、同じ和・スカラー倍の公理を満たすためベクトル空間の仲間である（Example 1.2-1〜1.2-4）。</li>
                    <li>「和やスカラー倍の結果が自分たちの仲間（集合）からはみ出してしまう」場合や、「逆ベクトルが存在しない」場合はベクトル空間にはならない（Remark）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
