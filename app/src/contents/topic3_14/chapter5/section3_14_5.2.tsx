import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HenkinConstruction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                完全性定理（理論が無矛盾ならば、モデルが存在する）はどのように証明されるのでしょうか。その核心は、レオン・ヘンキンが1949年に考案した「証明可能な論理式そのものを材料にして世界（モデル）を構築する」という驚異的なアイデアにあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ヘンキン構成のアイデアと証人</h2>

            <p className="leading-relaxed">
                ある無矛盾な理論 <InlineMath math="T" /> にモデルを作りたいとします。問題になるのは「存在量化子（<InlineMath math="\exists x\,\varphi" />）」です。<InlineMath math="T" /> が「<InlineMath math="\varphi" /> を満たす何かが存在する」と言っているなら、作ろうとしているモデルの中に、その「何か（証人）」を具体的に用意してあげなければなりません。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.2-1 (ヘンキン定数と証人性質)"
            >
                <p>
                    言語 <InlineMath math="\mathcal{L}" /> を拡張し、新しい定数記号の集合（<strong>ヘンキン定数</strong>）を追加する。
                    具体的には、存在を主張する各論理式 <InlineMath math="\exists x\,\varphi(x)" /> に対して、専用の定数記号 <InlineMath math="c_\varphi" /> を用意する。
                </p>
                <p>
                    そして理論 <InlineMath math="T" /> に、以下の形の公理をすべて追加した理論 <InlineMath math="T^+" /> を作る。
                    <BlockMath math="\exists x\,\varphi(x) \to \varphi[c_\varphi/x]" />
                </p>
                <p>
                    これは「もし <InlineMath math="\varphi" /> を満たす <InlineMath math="x" /> が存在するなら、この定数 <InlineMath math="c_\varphi" /> がその犯人（<strong>証人, witness</strong>）である」と宣言するものである。このようにすべての存在主張に証人が用意されている理論を「証人性質を持つ」という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                新しい定数を追加しても、元の理論に矛盾が生じない（無矛盾性が保たれる）ことが証明論的に示されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">極大無矛盾理論の構成</h2>

            <p className="leading-relaxed">
                次に、証人を追加した理論 <InlineMath math="T^+" /> を「これ以上何も追加できない限界」まで太らせます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 5.2-1 (極大無矛盾理論の存在)"
            >
                <p>
                    無矛盾な理論 <InlineMath math="T^+" /> は、それを含む<strong>極大無矛盾理論（maximally consistent theory）</strong> <InlineMath math="\Delta" /> に拡張できる。
                </p>
                <p>
                    極大無矛盾理論 <InlineMath math="\Delta" /> とは、矛盾しておらず、かつ任意の文 <InlineMath math="\psi" /> について
                    <BlockMath math="\psi \in \Delta \quad \text{または} \quad \neg\psi \in \Delta" />
                    のいずれか一方が必ず成り立つ（すべての命題に対して白黒の決着がついている）理論のことである。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    これは代数学で「すべてのイデアルは極大イデアルに含まれる」ことを示すのと同じ論法である。
                    <InlineMath math="T^+" /> を含む無矛盾な理論全体の集合に包含関係で順序を入れ、ツォルンの補題（Zorn's Lemma）を適用する。
                    鎖（全順序部分集合）の和集合もまた無矛盾（証明は有限の長さしかないので、矛盾が出るとしたら鎖のどこか有限の段階で出ているはずだから）であることを確認すれば、極大元 <InlineMath math="\Delta" /> の存在が保証される。
                    （言語が可算であれば、ツォルンの補題を使わずに自然数による帰納的構成でも作れる。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ヘンキンモデルの構成</h2>

            <p className="leading-relaxed">
                白黒が完全についた理論 <InlineMath math="\Delta" /> と、すべての存在に証人がいるという性質を使って、ついにモデルを「創造」します。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.2-1 (ヘンキンモデルの構成)"
            >
                <p>
                    証人性質を持つ極大無矛盾理論 <InlineMath math="\Delta" /> から、<InlineMath math="\Delta" /> のすべての文を真にする構造 <InlineMath math="\mathcal{M}_\Delta" /> を構成できる。
                    <BlockMath math="\mathcal{M}_\Delta \models \Delta" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (構成の概略)"
            >
                <p>
                    <strong>対象領域の構成：</strong>
                    モデルの「住民（対象領域 <InlineMath math="M" />）」を何にすればよいか？
                    ヘンキンは、「言語の項（定数記号など）」そのものをモデルの住民にしてしまうというメタ的な手品を使った。
                    具体的には、変数を含まない閉項の集合を考え、「<InlineMath math="t_1 = t_2 \in \Delta" />」のとき同値であるとする同値類で割った商集合を対象領域 <InlineMath math="M" /> とする。
                </p>
                <p>
                    <strong>関係の定義：</strong>
                    モデル内での関係 <InlineMath math="P^{\mathcal{M}_\Delta}" /> が成り立つかどうかを、「<InlineMath math="P(t_1, \ldots, t_n)" /> という文が <InlineMath math="\Delta" /> に含まれているかどうか」で定義する。
                </p>
                <p>
                    <strong>真理値の確認：</strong>
                    この構造において、任意の論理式 <InlineMath math="\psi" /> について
                    <BlockMath math="\mathcal{M}_\Delta \models \psi \iff \psi \in \Delta" />
                    となることを論理式の複雑さに関する帰納法で示す。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="\neg, \land" /> などは、<InlineMath math="\Delta" /> の極大無矛盾性（白か黒か決まっている性質）から綺麗に処理できる。</li>
                    <li>量化子 <InlineMath math="\exists x\,\varphi" /> については、証人性質が決定的に効く。<InlineMath math="\exists x\,\varphi \in \Delta" /> ならば、証人の公理 <InlineMath math="\exists x\,\varphi \to \varphi(c_\varphi)" /> があるため、<InlineMath math="\varphi(c_\varphi) \in \Delta" /> となる。<InlineMath math="c_\varphi" /> はモデルの住民（項）であるため、実際にモデル内で <InlineMath math="\varphi" /> を満たす元が存在することになる。</li>
                </ul>
                <p>
                    以上により、<InlineMath math="T" /> を含む <InlineMath math="\Delta" /> のモデル <InlineMath math="\mathcal{M}_\Delta" /> が構成できた。これは当然 <InlineMath math="T" /> のモデルでもある。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ヘンキン構成の哲学的意味"
            >
                <p>
                    通常の数学では「実数」「空間」といったすでにある対象（モデル）を記述するために数式を書きます。
                    しかしヘンキン構成は逆です。<strong>「論理式（構文）」そのものをレゴブロックのように集めて「世界（意味）」を作ってしまった</strong>のです。
                </p>
                <p>
                    「無矛盾に語り続けることができるならば、その語られた通りの世界は必ず存在する」——これが完全性定理とヘンキン構成の数学的・哲学的なメッセージです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>完全性定理（モデルの存在）の証明は、<strong>ヘンキン構成</strong>という手法で行われる。</li>
                    <li>存在量化子に対して新しい定数（証人）を追加し、理論を「極大無矛盾理論」へと拡張する。</li>
                    <li>極大無矛盾理論に含まれる「項」の同値類そのものを対象領域としてモデルを構築することで、無矛盾な理論からモデルを「創造」することができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}