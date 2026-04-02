import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GodelNumbering() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                不完全性定理の証明におけるゲーデルの天才的な閃きは、「論理式」や「証明の列」という記号の羅列を、単なる「自然数（数字）」に変換してしまったことです。これにより、算術の体系（PA）が、算術自身についてのメタ的な言及（「この式は証明できる」など）を扱えるようになりました。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ゲーデル数化の方法</h2>

            <ContentBox
                type="definition"
                title="Definition 6.2-1 (ゲーデル数 / Gödel numbering)"
            >
                <p>
                    言語 <InlineMath math="\mathcal{L}_{\mathrm{PA}}" /> の各記号、およびそれらからなる論理式や証明列に対して、一意な自然数を割り当てる単射な符号化（エンコーディング）の方法を<strong>ゲーデル数化</strong>という。
                    論理式 <InlineMath math="\varphi" /> に対応するゲーデル数を <strong><InlineMath math="\ulcorner \varphi \urcorner" /></strong> と表す。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.2-1 (素数分解による符号化の例)"
            >
                <p>
                    ゲーデルが用いた具体的な符号化の例を示す。まず基本記号に数字を割り振る。
                    <br/><InlineMath math="0 \mapsto 1, S \mapsto 3, + \mapsto 5, \cdot \mapsto 7, = \mapsto 9, \ldots" />
                </p>
                <p>
                    記号の列 <InlineMath math="s_1 s_2 \ldots s_n" /> （論理式など）があったとき、<InlineMath math="i" /> 番目の素数 <InlineMath math="p_i" /> の肩に各記号の番号を乗せて掛け合わせる。
                </p>
                <p>
                    例えば、式 <InlineMath math="S(0)" /> （記号の列としては「<InlineMath math="S" />」「<InlineMath math="(" />」「<InlineMath math="0" />」「<InlineMath math=")" />」とみなす）のゲーデル数は、
                    <BlockMath math="\ulcorner S(0) \urcorner = 2^3 \cdot 3^{11} \cdot 5^1 \cdot 7^{13} = \text{非常に大きな自然数}" />
                    となる。素因数分解の一意性により、この巨大な自然数から元の記号列を完全に復元（デコード）できる。
                </p>
                <p>
                    （現代の感覚で言えば、コンピュータがソースコードを UTF-8 などのバイナリ（＝巨大な数）に変換して扱っているのと全く同じ発想である。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この符号化の最大の利点は、「証明が正しいかチェックする」という記号操作が、「自然数の素因数分解に関する計算」に還元されることです。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 6.2-1 (算術化可能な述語)"
            >
                <p>
                    ゲーデル数化により、メタレベル（論理学の外側）の概念を PA の中の述語として表現できる。特に重要なのが以下の述語である。
                    <BlockMath math="\mathrm{Proof}(y, x)" />
                </p>
                <p>
                    これは「自然数 <InlineMath math="y" /> はある形式的証明列のゲーデル数であり、その証明はゲーデル数 <InlineMath math="x" /> を持つ論理式 <InlineMath math="\varphi" /> を結論としている」という関係を表す。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    形式的証明とは、「各行が公理であるか、前の行から推論規則によって導かれる」という条件を満たす有限の文字列のリストである。
                </p>
                <p>
                    文字列がこの条件を満たすかどうかは、構文規則をチェックするだけの機械的なアルゴリズムで有限時間内に判定可能である。
                    前節（Proposition 6.1-1）で述べたように、アルゴリズム的に判定可能な性質はすべて PA の論理式として表現できる。
                </p>
                <p>
                    したがって、証明の正当性をチェックするメタレベルの操作は、ゲーデル数化を通じて自然数 <InlineMath math="y" /> と <InlineMath math="x" /> の間の算術的な関係式 <InlineMath math="\mathrm{Proof}(y, x)" /> として完全に PA の内部に埋め込むことができる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">対角化補題（自己言及のトリック）</h2>

            <p className="leading-relaxed">
                ゲーデル数化を用いて、「私自身は〜〜である」と主張するような自己言及（self-reference）を行う魔法の補題を導きます。
            </p>

            <ContentBox
                type="lemma"
                title="Lemma 6.2-1 (対角化補題 / Diagonalization Lemma)"
            >
                <p>
                    自由変数 <InlineMath math="x" /> を一つ持つ任意の論理式 <InlineMath math="\varphi(x)" /> が与えられたとき、次のような文 <InlineMath math="\psi" /> が必ず存在する。
                    <BlockMath math="\mathrm{PA} \vdash \psi \leftrightarrow \varphi(\ulcorner \psi \urcorner)" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概念的解説)"
            >
                <p>
                    これは「嘘つきのパラドックス（この文は嘘である）」を数式で厳密に構成する手法である。
                </p>
                <p>
                    操作 <InlineMath math="\mathrm{diag}(e)" /> を、「『ゲーデル数 <InlineMath math="e" /> を持つ論理式 <InlineMath math="F(x)" />』の変数 <InlineMath math="x" /> に、『数 <InlineMath math="e" /> 自身』を代入した式 <InlineMath math="F(e)" /> のゲーデル数」を計算する関数とする。
                </p>
                <p>
                    <InlineMath math="\varphi(x)" /> にこの操作を組み込んだ式 <InlineMath math="F(y) \equiv \varphi(\mathrm{diag}(y))" /> を作る。この <InlineMath math="F" /> のゲーデル数を <InlineMath math="e_F" /> とする。
                </p>
                <p>
                    そして、目的の文を <InlineMath math="\psi \equiv F(e_F)" /> と定義する。
                    すると定義より <InlineMath math="\psi" /> のゲーデル数 <InlineMath math="\ulcorner \psi \urcorner" /> は <InlineMath math="\mathrm{diag}(e_F)" /> と一致する。
                    <BlockMath math="\psi \equiv F(e_F) \equiv \varphi(\mathrm{diag}(e_F)) \equiv \varphi(\ulcorner \psi \urcorner)" />
                    となり、「<InlineMath math="\psi" />」は「<InlineMath math="\varphi" /> に私自身のゲーデル数を代入したもの」と同値になる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>ゲーデル数：</strong> 論理式や証明のプロセスを、巨大な自然数（素因数分解）に対応させる手法。</li>
                    <li>これにより、「証明可能性」という概念を、PA内部の数式 <InlineMath math="\mathrm{Proof}(y, x)" /> として扱うことができるようになった。</li>
                    <li><strong>対角化補題：</strong> ゲーデル数を用いて、「私自身のゲーデル数は性質 <InlineMath math="\varphi" /> を満たす」という自己言及的な文 <InlineMath math="\psi" /> を人工的に作り出す技術。</li>
                </ul>
            </ContentBox>
        </section>
    );
}