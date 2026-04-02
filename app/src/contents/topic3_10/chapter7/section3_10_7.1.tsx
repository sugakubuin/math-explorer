import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SolvableGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「5次以上の一般の方程式には、四則演算と冪根（ルート）だけを使った解の公式が存在しない」——これはアーベルとルフィニによって証明され、ガロアによってその根本的な理由が解明された歴史的な大定理です。その謎を解き明かす鍵となるのが、群の「可解性」という性質です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可解群の定義と例</h2>

            <p>
                ある群が、より小さくて単純な「アーベル群」の積み重ねとして分解できるとき、その群を可解群と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (可解群)">
                <p>
                    群 <InlineMath math="G" /> が<strong>可解群（solvable group）</strong>であるとは、次のような部分群の列（正規列）が存在することである。
                </p>
                <BlockMath math="G = G_0 \trianglerighteq G_1 \trianglerighteq \cdots \trianglerighteq G_n = \{e\}" />
                <p>
                    ただし、各 <InlineMath math="i" /> について <InlineMath math="G_{i+1}" /> は <InlineMath math="G_i" /> の正規部分群であり、かつその<strong>剰余群 <InlineMath math="G_i / G_{i+1}" /> がすべてアーベル群（可換群）</strong>となることである。
                </p>
            </ContentBox>

            <p>
                具体的な群が可解群かどうかを判定してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-1 (アーベル群は可解群)">
                <p>
                    任意のアーベル群 <InlineMath math="G" /> は可解群である。
                </p>
                <p>
                    なぜなら、列として <InlineMath math="G \trianglerighteq \{e\}" /> をとれば、<InlineMath math="\{e\}" /> は <InlineMath math="G" /> の正規部分群であり、剰余群 <InlineMath math="G/\{e\} \cong G" /> は仮定よりアーベル群になるからである。
                </p>
                <p>
                    例えば、巡回群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> や、円分体のガロア群と同型である <InlineMath math="(\mathbb{Z}/n\mathbb{Z})^\times" /> などはすべて可解群である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-2 (対称群 S_3, S_4 は可解群)">
                <p>
                    <strong>3次対称群 <InlineMath math="S_3" /></strong> は非可換群であるが、可解群である。列として <InlineMath math="S_3 \trianglerighteq A_3 \trianglerighteq \{e\}" /> を考える。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="A_3" /> の位数は 3 で <InlineMath math="S_3" /> の位数 6 の半分（指数2）なので正規部分群。剰余群 <InlineMath math="S_3/A_3 \cong \mathbb{Z}/2\mathbb{Z}" /> はアーベル群。</li>
                    <li><InlineMath math="A_3 \cong \mathbb{Z}/3\mathbb{Z}" /> なので、<InlineMath math="A_3/\{e\} \cong \mathbb{Z}/3\mathbb{Z}" /> もアーベル群。</li>
                </ul>
                <p>
                    <strong>4次対称群 <InlineMath math="S_4" /></strong> も可解群である。<InlineMath math="S_4 \trianglerighteq A_4 \trianglerighteq V_4 \trianglerighteq \{e\}" /> という列を考える（<InlineMath math="V_4" /> はクラインの4群）。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="S_4/A_4 \cong \mathbb{Z}/2\mathbb{Z}" /> （アーベル群）</li>
                    <li><InlineMath math="A_4/V_4 \cong \mathbb{Z}/3\mathbb{Z}" /> （位数 12/4 = 3 なのでアーベル群）</li>
                    <li><InlineMath math="V_4/\{e\} \cong V_4 \cong (\mathbb{Z}/2\mathbb{Z})^2" /> （アーベル群）</li>
                </ul>
                <p>
                    したがって、各ステップの剰余群がすべてアーベル群になり、可解性条件を満たす。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可解群でない例と判定</h2>

            <p>
                ここまでの対称群 <InlineMath math="S_2, S_3, S_4" /> はすべて可解群でしたが、5次以上の対称群になると状況が一変します。これが5次方程式の非可解性の根本原因です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-1 (A_n と S_n の非可解性)">
                <p>
                    <InlineMath math="n \geq 5" /> のとき、交代群 <InlineMath math="A_n" /> は<strong>非可換な単純群</strong>（自明な正規部分群 <InlineMath math="\{e\}" /> と自身以外に正規部分群を持たない群）である。
                </p>
                <p>
                    したがって、<InlineMath math="A_n" /> および対称群 <InlineMath math="S_n" /> （<InlineMath math="n \geq 5" />）は<strong>可解群ではない</strong>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （<InlineMath math="A_5" /> が単純群であることの概略）<br />
                    <InlineMath math="A_5" /> の位数は <InlineMath math="5!/2 = 60" /> である。共役類のサイズを計算すると、恒等元（1）、3-サイクル（20）、(2,2)-サイクル（15）、5-サイクル（12と12の2つの類）に分かれる。
                    正規部分群は共役類の和集合でなければならず、かつ恒等元を含み、その要素数が 60 の約数にならなければならない。そのような組み合わせは <InlineMath math="\{1\}" /> か 60（全体）しか存在しないため、<InlineMath math="A_5" /> は単純群である。
                </p>
                <p>
                    （非可解性の証明）<br />
                    <InlineMath math="A_5" /> の正規列 <InlineMath math="A_5 = G_0 \trianglerighteq G_1 \trianglerighteq \dots \trianglerighteq \{e\}" /> を考えよう。<InlineMath math="A_5" /> は単純群であるため、<InlineMath math="G_1" /> は <InlineMath math="\{e\}" /> でなければならない（<InlineMath math="G_1 = A_5" /> では列が進まない）。
                    すると剰余群 <InlineMath math="G_0 / G_1 = A_5 / \{e\} \cong A_5" /> となる。
                    しかし <InlineMath math="A_5" /> は非可換群であるため、「剰余群がすべてアーベル群である」という可解群の条件を満たさない。よって <InlineMath math="A_5" /> は非可解である。
                </p>
                <p>
                    <InlineMath math="S_5" /> についても、<InlineMath math="S_5 \trianglerighteq A_5" /> が唯一の非自明な正規列のステップであり、その下の <InlineMath math="A_5 \trianglerighteq \{e\}" /> で非可換剰余が現れるため可解ではない。帰納的に <InlineMath math="n \geq 5" /> でも同様である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark (群論と方程式の架け橋)">
                <p>
                    方程式を解くという「代数的操作」は、群を小さく割っていくという「群論的操作」に対応します。<InlineMath math="S_5" /> がこれ以上小さく（アーベル群に）割れない単純なブロック <InlineMath math="A_5" /> を持っているという事実が、まさに「5次方程式がこれ以上簡単な操作に還元できない」という結果をもたらすのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正規列の剰余群がすべてアーベル群になるような群を<strong>可解群</strong>という。</li>
                    <li>アーベル群や、<InlineMath math="S_3" />、<InlineMath math="S_4" /> は可解群である。</li>
                    <li>交代群 <InlineMath math="A_5" /> は非可換な単純群であるため可解群ではない。結果として <InlineMath math="S_5" />（および <InlineMath math="n \geq 5" /> の <InlineMath math="S_n" />）も可解群ではない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
