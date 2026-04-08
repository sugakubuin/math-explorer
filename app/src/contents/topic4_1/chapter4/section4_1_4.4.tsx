import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OpenMappingTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                完備な空間が持つ「余裕（ベールのカテゴリー定理によって保証された豊かさ）」を活用したもう一つの金字塔が、開写像定理です。この定理は、空間が潰れずに全空間へ覆い尽くせているならば、元の空間の広がり（位相構造）も保たれるという驚くべき結論を提示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">開写像定理の主張と証明</h2>

            <p>
                連続写像は「開集合の逆像が開集合」になりますが、「開集合の順像が開集合」になるものを特別に開写像と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 (開写像)">
                <p>
                    位相空間 <InlineMath math="X" /> から位相空間 <InlineMath math="Y" /> への写像 <InlineMath math="T" /> が<b>開写像（open mapping）</b>であるとは、<InlineMath math="X" /> の任意の開集合 <InlineMath math="O" /> に対して、その像 <InlineMath math="T(O)" /> も <InlineMath math="Y" /> の開集合となることである。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.4-1 (開写像定理)">
                <p>
                    <InlineMath math="X, Y" /> をともにバナッハ空間とする。有界線形作用素 <InlineMath math="T : X \to Y" /> が全射（<InlineMath math="\text{Im}(T) = Y" />）であるならば、<InlineMath math="T" /> は開写像である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    線形性から、「原点の周りのある開球の像が、<InlineMath math="Y" /> の原点の周りのある開球を含んでいること」を示せば十分である。
                </p>
                <p>
                    <InlineMath math="X" /> の球 <InlineMath math="B_n = B_X(0, n)" /> を用いると全空間は <InlineMath math="X = \bigcup_n B_n" /> であり、<InlineMath math="T" /> は全射なので <InlineMath math="Y = \bigcup_n T(B_n)" /> となる。ゆえに <InlineMath math="Y = \bigcup_n \overline{T(B_n)}" /> （閉方をとったもの）と書ける。
                </p>
                <p>
                    <InlineMath math="Y" /> がバナッハ空間であることを活かしてベールのカテゴリー定理（Theorem 4.3-1）を適用すると、いずれかの <InlineMath math="\overline{T(B_n)}" /> は内点を持たなければならない。<InlineMath math="T" /> の線形性と対称性を使い回すことで、原点 <InlineMath math="0 \in Y" /> のある近傍がある開球の中の像の閉包にすっぽり収まることが示される（「近似的な内包性」）。
                </p>
                <p>
                    最後に <InlineMath math="X" /> の完備性を用いて、さらに点列極限を構成することで誤差を取り除き、像の閉包ではなく像そのものが原点の近傍を含んでいるという「厳密な内包性」に昇格させ、証明が完了する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-1 (開写像にならない例と自明な例)">
                <p>
                    全射でない場合：有界数列の空間への写像 <InlineMath math="T : \ell^1 \to c_0" /> （包含写像）を考える。これは全射ではなく像は細く潰れている。元空間の単位開球は行き先の空間ではぺちゃんこになっており、開集合を含まないため開写像ではない。
                </p>
                <p>
                    全射の場合：<InlineMath math="T : \ell^1 \to \ell^1" /> の恒等写像は自明に全射な有界線形作用素であり、開集合をそのまま開集合に移すため自明に開写像である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆作用素の有界性</h2>

            <p>
                開写像定理を逆写像に読み替えると、「代数的に逆関数が存在するなら、位相的にも良い関数（連続）になる」という驚異の事実（有界逆写像定理）が手に入ります。
            </p>

            <ContentBox type="theorem" title="Corollary 4.4-1 (逆作用素の有界性)">
                <p>
                    バナッハ空間間の有界線形作用素 <InlineMath math="T : X \to Y" /> が全単射であれば、その逆作用素 <InlineMath math="T^{-1} : Y \to X" /> も有界線形作用素（連続）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="T" /> は全単射なので、とくに全射である。したがって Theorem 4.4-1（開写像定理）より、<InlineMath math="T" /> は開写像である。
                </p>
                <p>
                    <InlineMath math="T" /> が開写像であるということは、「<InlineMath math="X" /> の任意の開集合 <InlineMath math="O" /> の、<InlineMath math="T" /> による順像 <InlineMath math="T(O)" /> が開集合になる」ということである。<InlineMath math="T" /> の順像は逆関数 <InlineMath math="T^{-1}" /> から見れば逆像 <InlineMath math="(T^{-1})^{-1}(O)" /> に他ならない。ゆえに、任意の開集合の逆像が開集合となり、逆写像 <InlineMath math="T^{-1}" /> は連続（有界）である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-2 (同値ノルムの判定)">
                <p>
                    バナッハ空間 <InlineMath math="X" /> に2つの異なるノルム <InlineMath math="\|\cdot\|_1" /> と <InlineMath math="\|\cdot\|_2" /> が入っており、両方において完備であるとする。
                </p>
                <p>
                    ここで、一方のノルムにおいてもう一方が定数倍で抑えられること、つまり <InlineMath math="\|x\|_2 \leq C \|x\|_1" /> が成り立つと分かったとする。これは、恒等写像 <InlineMath math="I : (X, \|\cdot\|_1) \to (X, \|\cdot\|_2)" /> が有界であることを意味する。
                </p>
                <p>
                    恒等写像は当然全単射であり、両空間はバナッハ空間なので有界逆写像定理が適用可能である。したがって逆写像（これも恒等写像）も有界となり、<InlineMath math="\|x\|_1 \leq C' \|x\|_2" /> が自動的に従う。つまり一方からの抑え込みが示されただけで、２つのノルムは同値であることがタハからタハへと証明されるのである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="完備性の重要性の再確認">
                <p>
                    この強力な定理は、もちろん空間の完備性に完全に依存しています。完備でない空間では、Example 3.4-1（過去の一様収束の否定）のようなケース等、いくらでも逆写像が非連続になる作用素を作れてしまいます。バナッハという「逃げ場のない堅牢な空間」という前提があって初めて、代数的な強さ（全単射）が位相的な強さ（連続）へと昇格するのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>開写像定理は、バナッハ空間同士の全射有界線形作用素が開集合を開集合へと移す（潰さない）ことを保証する（Theorem 4.4-1）。</li>
                    <li>この定理はベールのカテゴリー定理に依存して証明され、空間の完備性が本質的である。</li>
                    <li>開写像定理の直接の帰結として、有界線形作用素が全単射であれば逆作用素も自動的に有界となる（Corollary 4.4-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
