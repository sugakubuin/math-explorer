import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SurjectiveInjectiveBijective() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                §2.1 では写像の基礎的な定義を学びました。写像は「各入力に対して出力がちょうど1つ定まる」という最低限の規則を持っていますが、その対応の仕方は千差万別です。
                「全ての出力先が誰かに使われているか？」「異なる入力が同じ場所に送られていないか？」といった視点で写像を分類することは、集合の「大きさ（濃度）」を比較したり、逆写像の存在を議論したりする際に極めて重要になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全射・単射・全単射の定義</h2>

            <p>
                写像 <InlineMath math="f \colon A \to B" /> の性質を、値域（終域） <InlineMath math="B" /> の元がどのように「カバー」されているか、という点から定義します。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (全射・単射・全単射)">
                <p>
                    写像 <InlineMath math="f \colon A \to B" /> に対して、以下の性質を定義する。
                </p>
                <ol className="list-decimal list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <strong>全射（Surjection / Onto）:</strong><br />
                        終域 <InlineMath math="B"  /> のどの元に対しても、それに写される <InlineMath math="A" /> の元が少なくとも1つ存在すること。
                        <BlockMath math="\forall b \in B,\ \exists a \in A,\ f(a) = b" />
                        これは、像が終域に一致すること（<InlineMath math="f(A) = B" />）と同値である。
                    </li>
                    <li>
                        <strong>単射（Injection / One-to-one）:</strong><br />
                        異なる元は異なる先に写されること。
                        <BlockMath math="\forall a_1, a_2 \in A,\ a_1 \neq a_2 \implies f(a_1) \neq f(a_2)" />
                        対偶をとれば、「送り先が同じなら、元の元も同じであること（<InlineMath math="f(a_1) = f(a_2) \implies a_1 = a_2" />）」と言い換えられる。証明ではこちらがよく使われる。
                    </li>
                    <li>
                        <strong>全単射（Bijection / One-to-one correspondence）:</strong><br />
                        <InlineMath math="f" /> が全射かつ単射であること。
                        <BlockMath math="\forall b \in B,\ \exists! a \in A,\ f(a) = b" />
                        すなわち、終域のどの元に対しても、対応する定義域の元が<strong>ちょうど1つ</strong>存在することを意味する。
                    </li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                全単射は、集合 <InlineMath math="A" /> と <InlineMath math="B" /> の元の間に、漏れも重複もない「一対一の完璧なペア」を作っている状態と言えます。
                次に進む前に、これらを満たさない場合も含めた具体例を確認しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例と反例</h2>

            <p>
                定義域や値域の設定、および対応則によって、写像は様々な性質を示します。
            </p>

            <ContentBox type="example" title="Example 2.2-1 (全射・単射の4パターン)">
                <p>
                    実関数を例に、4つの組み合わせを具体的に見てみましょう。
                </p>
                <ol className="list-decimal list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <strong>全射かつ単射（全単射）:</strong><br />
                        <InlineMath math="f \colon \mathbb{R} \to \mathbb{R},\ f(x) = 2x + 1" />
                        任意の <InlineMath math="y \in \mathbb{R}" /> に対して <InlineMath math="x = (y-1)/2" /> とすれば <InlineMath math="f(x) = y" /> となる（全射）。
                        また <InlineMath math="2a+1 = 2b+1 \implies a = b" /> である（単射）。
                    </li>
                    <li>
                        <strong>全射だが単射でない:</strong><br />
                        <InlineMath math="f \colon \mathbb{R} \to [0, +\infty),\ f(x) = x^2" />
                        任意の <InlineMath math="y \geq 0" /> は <InlineMath math="\sqrt{y}" /> の像として現れるため全射。
                        しかし、<InlineMath math="f(1) = f(-1) = 1" /> となり、異なる元が同じ値に写るため単射ではない。
                    </li>
                    <li>
                        <strong>単射だが全射でない:</strong><br />
                        <InlineMath math="f \colon \mathbb{R} \to \mathbb{R},\ f(x) = e^x" />
                        <InlineMath math="e^a = e^b \implies a = b" /> より単射。
                        しかし、像は <InlineMath math="f(\mathbb{R}) = (0, +\infty)" /> であり、負の数や <InlineMath math="0" /> に対応する <InlineMath math="x" /> が存在しないため、終域 <InlineMath math="\mathbb{R}" /> に対して全射ではない。
                    </li>
                    <li>
                        <strong>全射でも単射でもない:</strong><br />
                        <InlineMath math="f \colon \mathbb{R} \to \mathbb{R},\ f(x) = x^2" />
                        終域に負の数が含まれるため全射でなく（2番目の例との違いに注意）、<InlineMath math="f(1) = f(-1)" /> より単射でもない。
                    </li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                上記の 2 と 4 の比較からわかるように、同じ単項式 <InlineMath math="x^2" /> であっても、<strong>終域の取り方次第で全射かどうかが変わります</strong>。
                これは写像の重要な落とし穴の一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">判定の注意</h2>

            <p>
                初学者にとって最も混乱しやすいのは、「同じ式なのに全射だったりそうでなかったりする」という事実です。
            </p>

            <ContentBox type="remark" title="定義域・値域の設定による性質の変化">
                <p>
                    「写像 <InlineMath math="x \mapsto x^2" /> は単射か？」という問いは、厳密には不適切です。
                    なぜなら、単射性や全射性は写像の<strong>定義域と終域</strong>を含めて初めて決定される性質だからです。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>全射性</strong>：終域を狭めれば全射になる（像 <InlineMath math="f(A)" /> と一致するように設定すれば常に全射）。
                    </li>
                    <li>
                        <strong>単射性</strong>：定義域を制限すれば単射になる。例えば <InlineMath math="f \colon [0, +\infty) \to \mathbb{R},\ f(x) = x^2" /> とすれば、負の数が定義域から消えるため単射になる。
                    </li>
                </ul>
                <p className="mt-4">
                    したがって、数学的な議論においては「式」だけでなく、集合の指定がどのようになされているかを常に意識する必要があります。
                </p>
            </ContentBox>

            <p className="mt-4">
                次節 §2.3 では、全単射な写像が持つ最も強力な性質である「逆写像（逆転倒）」について詳しく学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <strong>全射</strong>：終域のすべての元が、定義域の少なくとも一つの元に対応している。
                    </li>
                    <li>
                        <strong>単射</strong>：定義域の異なる元が、終域の異なる元に対応している。
                    </li>
                    <li>
                        <strong>全単射</strong>：全射かつ単射であり、二つの集合の間に一対一の対応がある。
                    </li>
                    <li>
                        写像の全射性・単射性は、対応規則（式）だけでなく、<strong>定義域と終域の選び方</strong>に依存して決まる。
                    </li>
                </ul>
            </ContentBox>
        </section>
    );
}
