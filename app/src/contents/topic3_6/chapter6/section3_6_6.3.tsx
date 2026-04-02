import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BasicConservationLaws() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ノーターの定理は、抽象的な変換群と保存量を結びつけますが、現代物理学において最も基礎となるのは、私たちが住む時空の対称性から導かれる保存則です。
                本節では、時間並進、空間並進、および回転という 3 つの基本的な対称性から、エネルギー、運動量、角運動量の保存則がどのように導かれるかを具体的に見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">3 つの基本保存則</h2>

            <p className="leading-relaxed">
                物理法則が時空のどこで、いつ、どの向きで観測しても変わらないという事実は、そのまま物理量の保存に直結しています。
            </p>

            <ContentBox type="example" title="Example 6.3-1 (時間並進対称性とエネルギー保存)">
                <p>
                    ラグランジアン <InlineMath math="F" /> が時間 <InlineMath math="t" /> を陽に含まない（<InlineMath math="F_t = 0" />）場合、時間並進変換 <InlineMath math="\tilde{t} = t + s" /> に対して不変である。
                    生成子は <InlineMath math="\xi = 1, \phi = 0" /> であり、ノーターの定理（Theorem 6.2-1）を適用すると、次の量が保存される：
                    <BlockMath math="I = F \cdot 1 + F_{u'} (0 - u' \cdot 1) = F - u' F_{u'}" />
                    通常、物理学では符号を反転させた <InlineMath math="H = u' F_{u'} - F" /> をハミルトニアン（エネルギー）と定義する。
                    したがって、<b>「時間の一様性」はエネルギー保存則の起源</b>であることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-2 (空間並進対称性と運動量保存)">
                <p>
                    多粒子系のラグランジアンが、空間全体の一斉な平行移動 <InlineMath math="\tilde{u}_k = u_k + s" />（生成子 <InlineMath math="\xi = 0, \phi_k = 1" />）に対して不変である場合を考える。
                    このときノーターの定理より、
                    <BlockMath math="I = \sum_{k} \left[ F \cdot 0 + F_{u'_k} (1 - u'_k \cdot 0) \right] = \sum_{k} F_{u'_k}" />
                    となり、一般化運動量の総和 <InlineMath math="\sum p_k" /> が一定値となる。
                    これは全運動量保存則に他ならず、<b>「空間の一様性」が運動量保存則の起源</b>であることを示している。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-3 (回転対称性と角運動量保存)">
                <p>
                    2 次元平面内での回転変換
                    <BlockMath math="\begin{pmatrix} \tilde{x} \\ \tilde{u} \end{pmatrix} = \begin{pmatrix} \cos s & -\sin s \\ \sin s & \cos s \end{pmatrix} \begin{pmatrix} x \\ u \end{pmatrix}" />
                    を考える。生成子は <InlineMath math="\xi = -u, \phi = x" /> となる。
                    これをラグランジアン <InlineMath math="F = \frac{1}{2} m (x'^2 + u'^2) - V(r)" /> に対して適用すると、
                    <BlockMath math="I = F (-u) + F_{x'} (\phi - x' \xi) + \dots" />
                    といった整理計算の末（ここでは座標を <InlineMath math="t" /> とした定式化で）、保存量として
                    <BlockMath math="L = m (x \dot{u} - u \dot{x})" />
                    すなわち角運動量が得られる。<b>「空間の等方性（向きによらないこと）」は角運動量保存則の起源</b>である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="物理の対称原理との対応">
                <p>
                    時間並進、空間並進、回転の 3 つは「時空間の基本的な性質」から来る対称性です。
                    現代物理学の標準模型などでは、これらに加えて「ゲージ対称性」という高度な対称性が考えられます。
                    これによって、電荷、カラー荷、弱アイソスピンなどの非幾何学的な保存則もまた、すべて変分法とノーターの定理という共通の言語で語られることになります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章を通じて、対称性と保存則がコインの裏表のような関係にあることを学びました。
                これにて、変分法の基礎から最深部の定理に至る Topic 3-6 の本編は終了です。
                最後の Chapter 7 では、これらの発展的な話題（多変数への拡張、直接法など）について簡潔に俯瞰します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>時間並進対称性（いつ行っても結果が同じ）は、エネルギー保存則を導く。</li>
                    <li>空間並進対称性（どこで行っても結果が同じ）は、運動量保存則を導く。</li>
                    <li>回転対称性（どの向きで行っても結果が同じ）は、角運動量保存則を導く。</li>
                    <li>ノーターの定理は、物理学における最も深遠な「対称性の原理」を数学的に保証している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
