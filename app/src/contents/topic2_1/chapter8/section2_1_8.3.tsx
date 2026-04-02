import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function CauchySchwarzInequality() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                高校数学で <InlineMath math="\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta" /> という内積の定義式を学びました。<br />
                この式において、<InlineMath math="|\cos\theta| \leq 1" /> であることを考えれば、内積の絶対値 <InlineMath math="|\vec{a} \cdot \vec{b}|" /> は、それぞれの長さの積 <InlineMath math="|\vec{a}| |\vec{b}|" /> を超えることはできません。<br />
                この直感を、任意の抽象的な内積空間において厳密に証明したものが、解析学においても極めて重要な<strong>コーシー・シュワルツの不等式</strong>です。前節の三角不等式の証明でも、この定理が本質的な役割を果たしました。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシー・シュワルツの不等式</h2>

            <ContentBox type="theorem" title="Theorem 8.3-1 （コーシー・シュワルツの不等式 / Cauchy-Schwarz Inequality）">
                <p>
                    内積空間 <InlineMath math="V" /> の任意のベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対して、必ず以下の不等式が成り立つ。
                </p>
                <BlockMath math="|\langle \boldsymbol{x}, \boldsymbol{y} \rangle| \leq \| \boldsymbol{x} \| \| \boldsymbol{y} \|" />
                <p>
                    （等号が成立するための必要十分条件は、<InlineMath math="\boldsymbol{x}" /> と <InlineMath math="\boldsymbol{y}" /> が線形従属であること。すなわち、一方が他方のスカラー倍で表される場合のみ等号が成立する。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    実内積空間の場合の一般的な証明方法（判別式を用いる方法）を示す。<br />
                    （複素内積空間の場合は、内積が実数になるように少し調整する必要があるが、本質的なアイディアは同じである。）
                </p>
                <p>
                    まず、<InlineMath math="\boldsymbol{y} = \boldsymbol{0}" /> の場合は両辺が共に <InlineMath math="0" /> となり、不等式（等号）が自明に成立する。したがって、ここからは <InlineMath math="\boldsymbol{y} \neq \boldsymbol{0}" /> （すなわち <InlineMath math="\| \boldsymbol{y} \| > 0" />）とする。
                </p>
                <p>
                    任意の実数パラメータ <InlineMath math="t \in \mathbb{R}" /> を導入し、新しいベクトル <InlineMath math="\boldsymbol{x} - t\boldsymbol{y}" /> を考える。<br />
                    内積の正値性より、自分自身との内積（ノルムの2乗）は常に <InlineMath math="0" /> 以上である。
                </p>
                <BlockMath math="\langle \boldsymbol{x} - t\boldsymbol{y}, \boldsymbol{x} - t\boldsymbol{y} \rangle \geq 0" />
                <p>
                    内積の双線形性と対称性を用いて、左辺を展開する。
                </p>
                <BlockMath math="= \langle \boldsymbol{x}, \boldsymbol{x} \rangle - \langle \boldsymbol{x}, t\boldsymbol{y} \rangle - \langle t\boldsymbol{y}, \boldsymbol{x} \rangle + \langle t\boldsymbol{y}, t\boldsymbol{y} \rangle" />
                <BlockMath math="= \| \boldsymbol{x} \|^2 - t\langle \boldsymbol{x}, \boldsymbol{y} \rangle - t\langle \boldsymbol{y}, \boldsymbol{x} \rangle + t^2\| \boldsymbol{y} \|^2" />
                <BlockMath math="= \| \boldsymbol{x} \|^2 - 2t\langle \boldsymbol{x}, \boldsymbol{y} \rangle + t^2\| \boldsymbol{y} \|^2" />
                <p>
                    ゆえに、変数 <InlineMath math="t" /> についての2次不等式
                </p>
                <BlockMath math="\| \boldsymbol{y} \|^2 t^2 - 2\langle \boldsymbol{x}, \boldsymbol{y} \rangle t + \| \boldsymbol{x} \|^2 \geq 0" />
                <p>
                    が得られる。<br />
                    この2次式が「すべての実数 <InlineMath math="t" />」に対して常に <InlineMath math="0" /> 以上となるためには、対応する2次方程式が異なる2つの実数解を持たないこと（重解か虚数解であること）、すなわち<strong>判別式 <InlineMath math="D \leq 0" /></strong> が必要十分条件である。<br />
                    判別式をとると、
                </p>
                <BlockMath math="\frac{D}{4} = \langle \boldsymbol{x}, \boldsymbol{y} \rangle^2 - \| \boldsymbol{y} \|^2 \| \boldsymbol{x} \|^2 \leq 0" />
                <p>
                    これを移項すると、
                </p>
                <BlockMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle^2 \leq \| \boldsymbol{x} \|^2 \| \boldsymbol{y} \|^2" />
                <p>
                    両辺ともに非負なので、平方根をとることで定理の不等式が得られる。
                </p>
                <BlockMath math="|\langle \boldsymbol{x}, \boldsymbol{y} \rangle| \leq \| \boldsymbol{x} \| \| \boldsymbol{y} \|" />
                <p className="mt-4 font-bold">【等号成立条件について】</p>
                <p>
                    等号が成り立つのは判別式 <InlineMath math="D = 0" /> のとき、すなわち元の2次方程式がある実数の重解 <InlineMath math="t = t_0" /> を持つときに限る。<br />
                    このとき <InlineMath math="\langle \boldsymbol{x} - t_0\boldsymbol{y}, \boldsymbol{x} - t_0\boldsymbol{y} \rangle = 0" /> となるが、正値性より自分自身との内積が <InlineMath math="0" /> なのはそのベクトル自身が零ベクトルであるときのみである。<br />
                    よって <InlineMath math="\boldsymbol{x} - t_0\boldsymbol{y} = \boldsymbol{0} \iff \boldsymbol{x} = t_0\boldsymbol{y}" /> となり、「一方が他方のスカラー倍」であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">なす角</h2>

            <p>
                コーシー・シュワルツの不等式は、私たちに「抽象的なベクトル空間の中に、角度の概念を持ち込む」ことを許可してくれます。
            </p>

            <ContentBox type="definition" title="Definition 8.3-1 （ベクトルのなす角 / Angle Between Vectors）">
                <p>
                    実内積空間 <InlineMath math="V" /> における、2つの非零ベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> （<InlineMath math="\| \boldsymbol{x} \| \neq 0" /> かつ <InlineMath math="\| \boldsymbol{y} \| \neq 0" />）を考える。
                </p>
                <p>
                    コーシー・シュワルツの不等式 <InlineMath math="|\langle \boldsymbol{x}, \boldsymbol{y} \rangle| \leq \| \boldsymbol{x} \| \| \boldsymbol{y} \|" /> を両辺が正であるため <InlineMath math="\| \boldsymbol{x} \| \| \boldsymbol{y} \|" /> で割ると、
                </p>
                <BlockMath math="\left| \frac{\langle \boldsymbol{x}, \boldsymbol{y} \rangle}{\| \boldsymbol{x} \| \| \boldsymbol{y} \|} \right| \leq 1" />
                <p>すなわち、</p>
                <BlockMath math="-1 \leq \frac{\langle \boldsymbol{x}, \boldsymbol{y} \rangle}{\| \boldsymbol{x} \| \| \boldsymbol{y} \|} \leq 1" />
                <p>
                    が保証される。<br />
                    コサイン関数 <InlineMath math="\cos\theta" /> の値域は <InlineMath math="[-1, 1]" /> であり、<InlineMath math="0 \leq \theta \leq \pi" /> の範囲において <InlineMath math="\cos" /> の値は1対1に対応する。したがって、
                </p>
                <BlockMath math="\cos\theta = \frac{\langle \boldsymbol{x}, \boldsymbol{y} \rangle}{\| \boldsymbol{x} \| \| \boldsymbol{y} \|}" />
                <p>
                    を満たす一意の角度 <InlineMath math="\theta" /> （<InlineMath math="0 \leq \theta \leq \pi" />）を定義することができる。<br />
                    この <InlineMath math="\theta" /> をベクトル <InlineMath math="\boldsymbol{x}" /> と <InlineMath math="\boldsymbol{y}" /> の<strong>なす角</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="関数同士の「角度」？">
                <p>
                    この定義を用いると、Example 8.1-1 の定積分で定義された関数の内積においても、<strong>「2つの関数のなす角」</strong>を計算できてしまいます。<br />
                    「サインカーブと二次関数のなす角は何度か？」という一見奇妙な問いにも、内積という強力なツールを通して明確な数学的答えを出せるようになるのです。<br />
                    これこそが、線形代数学における概念の抽象化の驚異的な力の一つです。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>どんな内積空間でも、「内積の絶対値は、ベクトルの長さの積より大きくならない」という<strong>コーシー・シュワルツの不等式</strong>が成り立つ（Theorem 8.3-1）。</li>
                    <li>不等式の等号が成立するのは、2つのベクトルが線形従属（同じ方向か反対方向）のときだけである。</li>
                    <li>この不等式が保証する <InlineMath math="[-1, 1]" /> の範囲を利用して、内積とノルムの値からベクトル間の<strong>なす角 <InlineMath math="\theta" /></strong> を厳密に定義することができる（Definition 8.3-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
