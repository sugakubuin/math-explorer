import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DivisionPointsAndTorsionStructure() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、楕円曲線上の群法則において有限の位数を持つ点、すなわち等分点（torsion points）について考察します。等分点のなす群の構造を複素トーラスの立場から明らかにし、それらが整数論において果たす重要な役割への導入を行います。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">n-等分点</h2>

            <p>まず、n 倍して単位元となる点の集合を定義します。これは楕円曲線の群構造の根幹をなす概念です。</p>

            <ContentBox type="definition" title={<span>Definition 5.5-1 (<b>n-等分点</b>)</span>}>
                <p>楕円曲線 <InlineMath math="E" /> において、自然数 <InlineMath math="n" /> に対して</p>
                <BlockMath math="E[n] = \{P \in E \mid nP = O\}" />
                <p>となる点 <InlineMath math="P" /> の集合を <b>n-等分点（n-division points または n-torsion points）</b>と呼ぶ。複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> の同型 <InlineMath math="\Phi: \mathbb{C}/\Lambda \xrightarrow{\sim} E" /> を通じて考えると、</p>
                <BlockMath math="E[n] \cong \{z \in \mathbb{C}/\Lambda \mid nz \in \Lambda\}" />
                <p>と表される。</p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.5-1">
                <p><InlineMath math="n=2" /> の場合を考える。複素トーラス上での2等分点は、<InlineMath math="2z \in \Lambda" /> を満たす <InlineMath math="z \pmod{\Lambda}" /> であるから、</p>
                <BlockMath math="\left\{ 0, \frac{\omega_1}{2}, \frac{\omega_2}{2}, \frac{\omega_1+\omega_2}{2} \right\} \pmod{\Lambda}" />
                <p>の4点からなる。これは群として <InlineMath math="(\mathbb{Z}/2\mathbb{Z})^2" /> に同型である。楕円曲線上での対応する点は、<InlineMath math="O" /> および <InlineMath math="(e_1, 0), (e_2, 0), (e_3, 0)" /> である。</p>
            </ContentBox>

            <p>この事実は任意の <InlineMath math="n" /> に対して一般化されます。</p>

            <ContentBox type="theorem" title={<span>Theorem 5.5-1</span>}>
                <p>群として、<InlineMath math="E[n] \cong (\mathbb{Z}/n\mathbb{Z})^2" /> が成り立つ。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p><InlineMath math="E[n]" /> は複素トーラス上で <InlineMath math="\frac{1}{n}\Lambda / \Lambda" /> と同一視できる。格子 <InlineMath math="\Lambda" /> は <InlineMath math="\omega_1\mathbb{Z} + \omega_2\mathbb{Z}" /> であるから、</p>
                <BlockMath math="\frac{1}{n}\Lambda = \frac{\omega_1}{n}\mathbb{Z} + \frac{\omega_2}{n}\mathbb{Z}" />
                <p>となる。したがって、<InlineMath math="\frac{1}{n}\Lambda / \Lambda" /> は剰余類</p>
                <BlockMath math="\frac{i\omega_1 + j\omega_2}{n} \pmod{\Lambda} \quad (0 \leq i, j \leq n-1)" />
                <p>の <InlineMath math="n^2" /> 個の元からなる。基底 <InlineMath math="\frac{\omega_1}{n}, \frac{\omega_2}{n}" /> を選ぶことで、自然な群同型</p>
                <BlockMath math="\frac{1}{n}\Lambda / \Lambda \xrightarrow{\sim} \mathbb{Z}/n\mathbb{Z} \oplus \mathbb{Z}/n\mathbb{Z}" />
                <p>が得られる。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>この定理により、等分点の群構造が完全に決定されました。次に <InlineMath math="n=3" /> の場合を見てみましょう。</p>

            <ContentBox type="example" title="Example 5.5-2">
                <p><InlineMath math="E[3]" /> は9個の元を持つ。<InlineMath math="z \in E[3] \setminus \{O\}" /> に対して、<InlineMath math="3z \equiv 0 \pmod{\Lambda}" /> すなわち <InlineMath math="2z \equiv -z \pmod{\Lambda}" /> が成り立つ。したがって、<InlineMath math="\wp(2z) = \wp(-z) = \wp(z)" /> となる。倍加公式を用いると、これを満たす <InlineMath math="\wp(z)" /> は <InlineMath math="\wp" /> に関する4次方程式（3等分方程式）の根として得られる。4次方程式の根は4つあるが、<InlineMath math="\pm z" /> で <InlineMath math="\wp" /> の値が等しいため、<InlineMath math="8 = 4 \times 2" /> 個の非自明な3等分点に対応する。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">n-等分体と整数論への接続</h2>

            <p>等分点の座標を考えることで、楕円曲線は整数論、特にガロア理論と深く結びつきます。</p>

            <ContentBox type="definition" title={<span>Definition 5.5-2 (<b>n-等分体</b>)</span>}>
                <p>楕円曲線 <InlineMath math="E" /> が有理数体 <InlineMath math="\mathbb{Q}" /> 上定義されているとする。すなわち方程式 <InlineMath math="y^2 = 4x^3 - g_2x - g_3" /> の係数 <InlineMath math="g_2, g_3" /> が有理数であるとする。このとき、<InlineMath math="E[n]" /> に属するすべてのアフィン点の <InlineMath math="x" /> 座標および <InlineMath math="y" /> 座標を <InlineMath math="\mathbb{Q}" /> に添加して得られる体拡大を <b><InlineMath math="n" />-等分体</b>と呼ぶ。</p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.5-3">
                <p><InlineMath math="n=2" /> の場合を考える。2等分点は <InlineMath math="O" /> および <InlineMath math="(e_1, 0), (e_2, 0), (e_3, 0)" /> であるから、2等分体は <InlineMath math="\mathbb{Q}(e_1, e_2, e_3)" /> となる。これは3次方程式 <InlineMath math="4x^3 - g_2x - g_3 = 0" /> の最小分解体である。</p>
            </ContentBox>

            <p>この構成がなぜ重要なのでしょうか。ガロア群の作用を通して見てみましょう。</p>

            <ContentBox type="remark" title="ガロア表現と整数論への応用">
                <p>絶対ガロア群 <InlineMath math="\text{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})" /> は等分点の集合 <InlineMath math="E[n]" /> に自然に作用します。<InlineMath math="E[n] \cong (\mathbb{Z}/n\mathbb{Z})^2" /> であったため、この作用は自己同型群 <InlineMath math="\text{Aut}(E[n]) \cong \text{GL}_2(\mathbb{Z}/n\mathbb{Z})" /> への準同型</p>
                <BlockMath math="\rho_n : \text{Gal}(\overline{\mathbb{Q}}/\mathbb{Q}) \to \text{GL}_2(\mathbb{Z}/n\mathbb{Z})" />
                <p>を定めます。これをガロア表現と呼びます。この表現の性質を調べることは、現代の整数論における中心的なテーマの一つであり、後の整数論II（4-14）で詳しく学びます。</p>
            </ContentBox>

            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>楕円曲線上の <InlineMath math="n" />-等分点 <InlineMath math="E[n]" /> は、複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> 上の <InlineMath math="n" /> 等分点と対応する。</li>
                    <li>群として <InlineMath math="E[n] \cong (\mathbb{Z}/n\mathbb{Z})^2" /> が成り立つ。</li>
                    <li><InlineMath math="n" />-等分点の座標を添加した体拡大（<InlineMath math="n" />-等分体）とそのガロア群の作用は、整数論における重要な対象（ガロア表現）を与える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
