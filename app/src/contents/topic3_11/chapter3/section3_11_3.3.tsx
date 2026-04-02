import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionSymmetricAndAlternatingTensors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                テンソル代数の中でも、変数の入れ替えに対して特別な対称性を持つテンソルは幾何学や物理学で極めて重要な役割を果たします。本節では、対称テンソルと交代テンソル、そしてそれらを構成するための作用素について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">対称テンソルと対称積</h2>

            <p className="leading-relaxed">
                まずは、変数をどのように入れ替えても値が変わらない「対称テンソル」の概念から見ていきましょう。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.3-1 (対称テンソル)"
            >
                <p>
                    <InlineMath math="T \in V^{\otimes n}" /> が<strong>対称テンソル（symmetric tensor）</strong>であるとは、<InlineMath math="n" /> 次対称群（置換群）<InlineMath math="S_n" /> の任意の置換 <InlineMath math="\sigma \in S_n" /> に対して、成分の順序を入れ替える作用によって <InlineMath math="T" /> が不変であること、すなわち
                    <BlockMath math="\sigma \cdot (v_1 \otimes \cdots \otimes v_n) = v_{\sigma(1)} \otimes \cdots \otimes v_{\sigma(n)}" />
                    として線形に拡張した作用で <InlineMath math="\sigma \cdot T = T" /> となることをいう。
                </p>
                <p>
                    次数 <InlineMath math="n" /> の対称テンソルの全体を <InlineMath math="S^n(V)" /> と表す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一般のテンソルから対称テンソルを強制的に作り出すための操作を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.3-2 (対称化作用素)"
            >
                <p>
                    線形写像 <InlineMath math="\mathrm{Sym} : V^{\otimes n} \to V^{\otimes n}" /> を、
                    <BlockMath math="\mathrm{Sym}(v_1 \otimes \cdots \otimes v_n) = \frac{1}{n!} \sum_{\sigma \in S_n} v_{\sigma(1)} \otimes \cdots \otimes v_{\sigma(n)}" />
                    で定める。これを<strong>対称化作用素（symmetrization operator）</strong>と呼ぶ。
                </p>
                <p>
                    この作用素による像 <InlineMath math="\mathrm{Im}(\mathrm{Sym})" /> は <InlineMath math="S^n(V)" /> に一致する。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 3.3-1 (<InlineMath math="S^2(\mathbb{R}^2)" /> の基底)</span>}
            >
                <p>
                    <InlineMath math="V = \mathbb{R}^2" /> とし、基底を <InlineMath math="\{e_1, e_2\}" /> とする。<InlineMath math="n=2" /> のとき、置換は恒等置換と互換 <InlineMath math="(1\ 2)" /> のみであるため、対称化は
                    <BlockMath math="\mathrm{Sym}(e_i \otimes e_j) = \frac{1}{2}(e_i \otimes e_j + e_j \otimes e_i)" />
                    となる。これを用いて基底の対称化を計算すると、
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="\mathrm{Sym}(e_1 \otimes e_1) = e_1 \otimes e_1" /></li>
                    <li><InlineMath math="\mathrm{Sym}(e_2 \otimes e_2) = e_2 \otimes e_2" /></li>
                    <li><InlineMath math="\mathrm{Sym}(e_1 \otimes e_2) = \frac{1}{2}(e_1 \otimes e_2 + e_2 \otimes e_1) = \mathrm{Sym}(e_2 \otimes e_1)" /></li>
                </ul>
                <p>
                    となり、この 3 つが <InlineMath math="S^2(\mathbb{R}^2)" /> の基底をなす。一般に <InlineMath math="\dim S^2(V) = \binom{\dim V + 1}{2}" /> となることが知られている。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                対称化作用素を2回続けて適用しても、1回適用した結果と変わらないという重要な性質があります。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 3.3-1 (<InlineMath math="\mathrm{Sym}" /> は冪等写像)</span>}
            >
                <p>
                    対称化作用素 <InlineMath math="\mathrm{Sym}" /> は冪等（idempotent）である。すなわち、<InlineMath math="\mathrm{Sym} \circ \mathrm{Sym} = \mathrm{Sym}" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    任意のテンソル <InlineMath math="t \in V^{\otimes n}" /> に対して <InlineMath math="T = \mathrm{Sym}(t)" /> とおく。<InlineMath math="T" /> はすべての置換による平均をとっているため、すでに対称テンソルである。すなわち、任意の <InlineMath math="\tau \in S_n" /> について <InlineMath math="\tau \cdot T = T" /> が成り立つ。
                </p>
                <p>
                    したがって、再び <InlineMath math="\mathrm{Sym}" /> を作用させると、
                    <BlockMath math="\mathrm{Sym}(T) = \frac{1}{n!} \sum_{\sigma \in S_n} \sigma \cdot T = \frac{1}{n!} \sum_{\sigma \in S_n} T = \frac{n!}{n!} T = T" />
                    となる。よって <InlineMath math="\mathrm{Sym}(\mathrm{Sym}(t)) = \mathrm{Sym}(t)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">交代テンソルと交代化作用素</h2>

            <p className="leading-relaxed">
                次章で外積代数を構築するための基礎となる、符号が反転する性質「交代性」について考えます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.3-3 (交代テンソル)"
            >
                <p>
                    <InlineMath math="T \in V^{\otimes n}" /> が<strong>交代テンソル（alternating tensor）</strong>であるとは、任意の置換 <InlineMath math="\sigma \in S_n" /> の作用によって、置換の符号 <InlineMath math="\mathrm{sgn}(\sigma)" /> 倍だけ変化すること、すなわち
                    <BlockMath math="\sigma \cdot T = \mathrm{sgn}(\sigma) T" />
                    を満たすことをいう。交代テンソルの全体を <InlineMath math="\bigwedge^n(V)" /> または <InlineMath math="\Lambda^n(V)" /> と表す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                対称化と同様に、一般のテンソルから交代テンソルを作り出す作用素を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.3-4 (交代化作用素)"
            >
                <p>
                    線形写像 <InlineMath math="\mathrm{Alt} : V^{\otimes n} \to V^{\otimes n}" /> を、
                    <BlockMath math="\mathrm{Alt}(v_1 \otimes \cdots \otimes v_n) = \frac{1}{n!} \sum_{\sigma \in S_n} \mathrm{sgn}(\sigma)\, v_{\sigma(1)} \otimes \cdots \otimes v_{\sigma(n)}" />
                    で定める。これを<strong>交代化作用素（alternation operator）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 3.3-2 (<InlineMath math="\bigwedge^2(\mathbb{R}^3)" /> の基底)</span>}
            >
                <p>
                    <InlineMath math="V = \mathbb{R}^3" /> とし、基底を <InlineMath math="\{e_1, e_2, e_3\}" /> とする。<InlineMath math="n=2" /> の場合、交代化作用素は
                    <BlockMath math="\mathrm{Alt}(e_i \otimes e_j) = \frac{1}{2}(e_i \otimes e_j - e_j \otimes e_i)" />
                    となる。同じ基底同士の場合は <InlineMath math="\mathrm{Alt}(e_i \otimes e_i) = 0" /> となる。
                </p>
                <p>
                    したがって、非零となるのは異なる基底の組み合わせのみであり、
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="e_1 \otimes e_2 - e_2 \otimes e_1" /></li>
                    <li><InlineMath math="e_1 \otimes e_3 - e_3 \otimes e_1" /></li>
                    <li><InlineMath math="e_2 \otimes e_3 - e_3 \otimes e_2" /></li>
                </ul>
                <p>
                    の定数倍が <InlineMath math="\bigwedge^2(\mathbb{R}^3)" /> の基底となる（次元は 3）。一般に <InlineMath math="\dim \bigwedge^2(V) = \binom{\dim V}{2}" /> となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                交代化作用素も、対称化作用素と同じく冪等な性質を持ちます。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 3.3-2 (<InlineMath math="\mathrm{Alt}" /> は冪等写像)</span>}
            >
                <p>
                    交代化作用素 <InlineMath math="\mathrm{Alt}" /> は冪等（idempotent）である。すなわち、<InlineMath math="\mathrm{Alt} \circ \mathrm{Alt} = \mathrm{Alt}" /> が成り立つ。
                    また、隣接する 2 つの変数が一致する純粋テンソルは、<InlineMath math="\mathrm{Alt}" /> によって <InlineMath math="0" /> に送られる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    冪等性については対称化の場合と同様に、<InlineMath math="\mathrm{Alt}(t)" /> がすでに交代テンソルであり、符号の二重反転が打ち消し合うことから導かれる。
                </p>
                <p>
                    隣接する変数が一致する場合、すなわち <InlineMath math="\cdots \otimes v \otimes v \otimes \cdots" /> という形をしているとき、この 2 つの <InlineMath math="v" /> の位置を入れ替える互換を <InlineMath math="\tau" /> とすると、テンソル自体は変化しないが、互換の符号は <InlineMath math="-1" /> である。
                </p>
                <p>
                    したがって、<InlineMath math="\mathrm{Alt}(\cdots \otimes v \otimes v \otimes \cdots) = -\mathrm{Alt}(\cdots \otimes v \otimes v \otimes \cdots)" /> となり、これは自身のマイナスと等しいので <InlineMath math="0" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>置換に対して不変なテンソルを<strong>対称テンソル</strong>といい、対称化作用素 <InlineMath math="\mathrm{Sym}" /> を用いて構成できる。</li>
                    <li>置換に対して符号が反転するテンソルを<strong>交代テンソル</strong>といい、交代化作用素 <InlineMath math="\mathrm{Alt}" /> を用いて構成できる。</li>
                    <li>どちらの作用素も冪等写像（2回適用しても1回と同じ）である。特に交代テンソルでは、同じベクトルが2つ含まれていると必ず <InlineMath math="0" /> になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
