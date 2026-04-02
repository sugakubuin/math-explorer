import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでは「複素数」という「点」そのものの性質を扱ってきましたが、ここからは複素数から別の複素数への対応関係、すなわち<strong>複素関数</strong>について学びます。
                複素関数は、実関数の自然な拡張であると同時に、実解析では見られない非常に美しい性質を秘めています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素関数の定義</h2>

            <p>
                実関数 <InlineMath math="y = f(x)" /> が実数に対して実数を対応させるように、複素関数は複素数に対して複素数を対応させます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (複素関数)">
                <p>
                    複素平面の部分集合 <InlineMath math="S \subset \mathbb{C}" /> の各点 <InlineMath math="z" /> に対して、複素数 <InlineMath math="w" /> を対応させる規則を、<InlineMath math="S" /> 上で定義された<strong>複素関数 (complex function)</strong> といい、
                    <BlockMath math="w = f(z)" />
                    と書く。
                </p>
                <p className="mt-4">
                    複素数 <InlineMath math="z = x + iy" /> を用いると、複素関数 <InlineMath math="f(z)" /> は、2つの実変数 <InlineMath math="x, y" /> の実数値関数 <InlineMath math="u(x, y)" /> と <InlineMath math="v(x, y)" /> を用いて次のように分解できる：
                    <BlockMath math="f(z) = u(x, y) + i v(x, y)" />
                    ここで、<InlineMath math="u(x, y)" /> を <InlineMath math="f" /> の<strong>実部</strong>、<InlineMath math="v(x, y)" /> を <InlineMath math="f" /> の<strong>虚部</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                複素関数を考えることは、2つの変数 <InlineMath math="(x, y)" /> を持つ2つの関数を同時に扱うことと等価です。しかし、後に見るように「複素微分可能」という条件が加わると、<InlineMath math="u" /> と <InlineMath math="v" /> の間には非常に強力な拘束関係が生じます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実部・虚部への分解の例</h2>

            <ContentBox type="example" title="Example 2.1-1 (べき関数と共役)">
                <p>
                    次の関数を実部・虚部に分解せよ。
                </p>
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <strong><InlineMath math="f(z) = z^2" /> の場合</strong>：
                        <BlockMath math="z = x + iy \implies z^2 = (x + iy)^2 = (x^2 - y^2) + 2xyi" />
                        よって、実部は <InlineMath math="u(x, y) = x^2 - y^2" />、虚部は <InlineMath math="v(x, y) = 2xy" /> である。
                    </li>
                    <li>
                        <strong><InlineMath math="f(z) = \overline{z}" /> の場合</strong>：
                        <BlockMath math="\overline{x + iy} = x - iy" />
                        よ力、実部は <InlineMath math="u(x, y) = x" />、虚部は <InlineMath math="v(x, y) = -y" /> である。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="写像としての解釈">
                <p>
                    実関数 <InlineMath math="y = f(x)" /> はグラフとして可視化できますが、複素関数 <InlineMath math="w = f(z)" /> を可視化するには、入力平面（<InlineMath math="z" /> 平面）から出力平面（<InlineMath math="w" /> 平面）への<strong>写像 (mapping)</strong> として捉えるのが一般的です。
                    例えば <InlineMath math="f(z) = z^2" /> は、<InlineMath math="z" /> 平面上の角度を2倍にし、原点からの距離を自乗するような変形を引き起こします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>複素関数</strong>：複素数を入力し、複素数を出力する対応。</li>
                    <li><strong>実部・虚部分解</strong>：<InlineMath math="f(z) = u(x, y) + i v(x, y)" />。実数上の多変数関数に帰着できる。</li>
                    <li><strong>多様な振る舞い</strong>：多項式、指数関数、さらには「共役を取る」といった操作も複素関数として扱われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
