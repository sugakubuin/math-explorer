import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_3_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で数列全体の極限を考えましたが、現実には全体としては振動していても、「飛び飛びの部分だけを取り出す」と規則的に収束する数列が数多く存在します。例えば <InlineMath math="a_n = (-1)^n" /> は発散しますが、偶数番目だけ <InlineMath math="(a_{2n} = 1)" />、あるいは奇数番目だけ <InlineMath math="(a_{2n-1} = -1)" /> を取り出せば収束します。
                この「取り出された数列」を<strong>部分列（subsequence）</strong>と呼び、完備極限の世界を探求する上で最も重要な道具の一つとなります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分列と集積点</h2>

            <p>
                元の数列から順番を崩さずに一部の無限個の項をピックアップしたものが部分列です。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (部分列)">
                <p>
                    実数列 <InlineMath math="\{a_n\}" /> と、狭義単調増加する自然数の数列 <InlineMath math="n_1 < n_2 < n_3 < \dots" /> を考える。（すなわち <InlineMath math="n_k \in \mathbb{N}" /> であり、<InlineMath math="k_1 < k_2 \implies n_{k_1} < n_{k_2}" />）
                </p>
                <p className="mt-2">
                    このとき、新しい数列 <InlineMath math="\{a_{n_k}\}_{k=1}^\infty" /> を、元の数列 <InlineMath math="\{a_n\}" /> の<strong>部分列（subsequence）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                これに関連して、部分列が向かおうとする「地点」を集積点と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.2-2 (集積点)">
                <p>
                    実数 <InlineMath math="c" /> が数列 <InlineMath math="\{a_n\}" /> の<strong>集積点（accumulation point または cluster point）</strong>であるとは、<InlineMath math="c" /> に収束する部分列 <InlineMath math="\{a_{n_k}\}" /> が存在することを言う。
                </p>
                <p className="mt-2">
                    別の等価な表現として：「任意の <InlineMath math="\varepsilon > 0" /> に対して、区間 <InlineMath math="(c - \varepsilon, c + \varepsilon)" /> の中に、数列 <InlineMath math="\{a_n\}" /> の項が<strong>無限個</strong>存在する」。
                </p>
            </ContentBox>

            <p>
                数列全体が <InlineMath math="\alpha" /> に収束する場合、そのいかなる部分列も同じ <InlineMath math="\alpha" /> に収束するため、集積点は <InlineMath math="\alpha" /> ただ1つとなります。しかし振動する列は複数の集積点を持つ可能性があります（先程の例では <InlineMath math="1" /> と <InlineMath math="-1" />）。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ボルツァーノ・ワイエルシュトラスの定理の実解析的証明</h2>

            <p>
                第2章で「完備性の同値命題」の1つとして紹介したこの定理は、実解析において絶大な威力を発揮します。「有界な数列は、どんなに出鱈目に振動していても、必ず最低1つの集積点を持つ（＝収束する部分列を隠し持っている）」という強力な存在定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (ボルツァーノ・ワイエルシュトラスの定理)">
                <p>
                    有界な実数列 <InlineMath math="\{x_n\}" /> は、必ず<strong>収束する部分列</strong>を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [区間縮小法を用いた二分法による証明]">
                <p>
                    数列 <InlineMath math="\{x_n\}" /> は有界なので、ある閉区間 <InlineMath math="I_1 = [a_1, b_1]" /> が存在して、すべての <InlineMath math="n \in \mathbb{N}" /> について <InlineMath math="x_n \in I_1" /> となる。<br />
                    当然ながら、この区間 <InlineMath math="I_1" /> には数列の項が<strong>無限個</strong>（すべての項）含まれている。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[Step 1: 区間の再帰的選択]</p>
                <p className="mt-2">
                    区間 <InlineMath math="I_1" /> を中点 <InlineMath math="m_1 = \frac{a_1 + b_1}{2}" /> で2つの小閉区間 <InlineMath math="[a_1, m_1]" /> と <InlineMath math="[m_1, b_1]" /> に分割する。
                    数列の項は全体で無限個あるため、鳩の巣原理により、これら2つの小閉区間の<strong>少なくとも一方には、数列の項が無限個</strong>含まれている。
                    無限個の項を含む方の小閉区間を選び（両方無限個なら左端を選ぶなどルールを決める）、それを改めて <InlineMath math="I_2 = [a_2, b_2]" /> とする。
                </p>
                <p className="mt-2">
                    次に <InlineMath math="I_2" /> をさらに中点で2分割し、同様に無限個の項を含む方を選んで <InlineMath math="I_3 = [a_3, b_3]" /> とする。
                    この操作を無限に繰り返す。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[Step 2: 縮小する閉区間と単一の極限点]</p>
                <p className="mt-2">
                    構成から、閉区間列は <InlineMath math="I_1 \supseteq I_2 \supseteq I_3 \supseteq \dots" /> を満たし、第 <InlineMath math="k" /> 番目の区間 <InlineMath math="I_k" /> の幅は
                    <BlockMath math="b_k - a_k = \frac{b_1 - a_1}{2^{k-1}}" />
                    となる。したがって <InlineMath math="k \to \infty" /> とすると区間の幅は <InlineMath math="0" /> に収束する。
                    <strong>閉区間縮小法（Theorem 2.3-2）</strong>より、すべての <InlineMath math="I_k" /> に共通して含まれるただ一つの実数 <InlineMath math="c" /> が存在する（<InlineMath math="\lim_{k\to\infty} a_k = \lim_{k\to\infty} b_k = c" />）。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[Step 3: 収束する部分列の抽出]</p>
                <p className="mt-2">
                    最後に、この <InlineMath math="c" /> に収束する部分列 <InlineMath math="x_{n_k}" /> を構成する。<br />
                    まず <InlineMath math="I_1" /> から適当な項 <InlineMath math="x_{n_1}" /> を1つ選ぶ。<br />
                    次に <InlineMath math="I_2" /> を考える。<InlineMath math="I_2" /> には項が無限個あるため、インデックスが <InlineMath math="n_1" /> より大きい項 <InlineMath math="x_{n_2} \ (n_2 > n_1)" /> が必ず存在する。これを一つ選ぶ。<br />
                    以下同様に、<InlineMath math="I_k" /> には無限個の項があるため、既に選んだ最後のインデックス <InlineMath math="n_{k-1}" /> より大きい <InlineMath math="n_k > n_{k-1}" /> を満たす項 <InlineMath math="x_{n_k} \in I_k" /> を必ず選び出すことができる。
                </p>
                <p className="mt-2">
                    このように構築された部分列 <InlineMath math="\{x_{n_k}\}_{k=1}^\infty" /> は、任意の <InlineMath math="k" /> に対して <InlineMath math="x_{n_k} \in I_k = [a_k, b_k]" /> すなわち
                    <BlockMath math="a_k \le x_{n_k} \le b_k" />
                    を満たす。<InlineMath math="k \to \infty" /> のとき両端が <InlineMath math="c" /> に収束するため、はさみうちの原理より部分列 <InlineMath math="\{x_{n_k}\}" /> も <InlineMath math="c" /> に収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このように、区間を半分にし続ける「二分法」を用いた証明は、部分列やコンパクト性の議論において非常に汎用性が高い直感的なアプローチです。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>部分列</strong>とは、元の列から無限個の項を順番を保って取り出した新しい数列のことである。</li>
                    <li>部分列の極限値となる点を<strong>集積点</strong>と呼ぶ。</li>
                    <li><strong>ボルツァーノ・ワイエルシュトラスの定理</strong>：有界な数列は、どんなに振動していても必ず収束する部分列（＝集積点）を持つ。これは実数の完備性を象徴する定理である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
