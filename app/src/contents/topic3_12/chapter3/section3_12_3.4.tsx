import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionBorsukUlamTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                円周の基本群のもう一つの興味深い応用として、「ボルスク・ウラムの定理（2次元の場合）」を紹介します。これは、球面上の連続関数が必ず持つ対称性に関する驚くべき定理であり、直感的に面白い結果をいくつも導き出します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ボルスク・ウラムの定理</h2>

            <p className="leading-relaxed">
                地球の表面のような球面 <InlineMath math="S^2" /> から平面 <InlineMath math="\mathbb{R}^2" /> への連続写像を考えます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 3.4-1 (ボルスク・ウラムの定理, 2次元)"
            >
                <p>
                    任意の連続写像 <InlineMath math="f : S^2 \to \mathbb{R}^2" /> に対して、互いに<strong>対蹠的（antipodal）</strong>な点 <InlineMath math="x, -x \in S^2" /> であって、
                    <BlockMath math="f(x) = f(-x)" />
                    を満たすものが必ず存在する。
                </p>
                <p>
                    （※対蹠点とは、球面上における「ちょうど裏側」の点のことである。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    背理法による。すべての <InlineMath math="x \in S^2" /> について <InlineMath math="f(x) \neq f(-x)" /> であると仮定する。
                </p>
                <p>
                    この仮定のもとで、新しい連続写像 <InlineMath math="g : S^2 \to S^1" /> を次のように定義する。
                    <BlockMath math="g(x) = \frac{f(x) - f(-x)}{|f(x) - f(-x)|}" />
                    分母は決して <InlineMath math="0" /> にならないため、<InlineMath math="g" /> は well-defined な連続写像である。また、構成から明らかに <InlineMath math="g(-x) = -g(x)" />（奇関数性）が成り立つ。
                </p>
                <p>
                    ここで、<InlineMath math="S^2" /> の赤道である <InlineMath math="S^1 \subset S^2" /> に写像 <InlineMath math="g" /> を制限したループ <InlineMath math="h = g|_{S^1} : S^1 \to S^1" /> を考える。奇関数性により <InlineMath math="h(-x) = -h(x)" /> であるため、<InlineMath math="h" /> は円周を半周する間に値も半周分（奇数回）回らなければならず、その結果 <InlineMath math="h" /> の基本群 <InlineMath math="\pi_1(S^1)" /> における巻き数は<strong>奇数</strong>となる（証明は指数写像を用いた持ち上げによる計算で示される）。
                </p>
                <p>
                    一方で、赤道 <InlineMath math="S^1" /> は北半球（これは円板 <InlineMath math="D^2" /> と同相）の境界である。写像 <InlineMath math="g" /> は北半球全体で連続に定義されているため、赤道上のループ <InlineMath math="h" /> は北半球全体を使って一点に連続的に縮めることができる。すなわち、<InlineMath math="h" /> は <InlineMath math="S^1" /> 上の定値ループとホモトピックであり、その巻き数は <strong><InlineMath math="0" />（偶数）</strong>でなければならない。
                </p>
                <p>
                    巻き数が奇数でありかつ <InlineMath math="0" /> であることは不可能であるため矛盾が生じる。したがって、<InlineMath math="f(x) = f(-x)" /> となる対蹠点が存在する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.4-1 (気象学的な解釈)"
            >
                <p>
                    地球の表面を <InlineMath math="S^2" /> と見なす。各点 <InlineMath math="x \in S^2" /> に対して、その場所の（気温, 気圧）という 2 つの実数の組を割り当てる写像 <InlineMath math="f : S^2 \to \mathbb{R}^2" /> を考える。気温と気圧が場所に関して連続に変化すると仮定する。
                </p>
                <p>
                    ボルスク・ウラムの定理によれば、地球上には「ちょうど地球の裏側（対蹠点）と、<strong>気温も気圧も全く同じ</strong>であるような場所」が、どの瞬間においても必ず少なくとも 1 組存在する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ハム・サンドイッチ定理</h2>

            <p className="leading-relaxed">
                ボルスク・ウラムの定理の有名な帰結として、「ハム・サンドイッチ定理」と呼ばれる幾何学の定理があります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 3.4-2 (ハム・サンドイッチ定理, 3次元)"
            >
                <p>
                    3次元空間 <InlineMath math="\mathbb{R}^3" /> 内に、任意の形状をした 3 つの有限な体積を持つ物体（例えば、パン 2 枚とハム 1 枚）があるとする。
                </p>
                <p>
                    このとき、これら 3 つの物体の体積を<strong>同時にちょうど半分に分割する</strong>ような 1 つの平面が必ず存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    3つの物体を <InlineMath math="A, B, C" /> とし、平面の「向き」を表す単位法線ベクトル <InlineMath math="\mathbf{n} \in S^2" /> を任意にとる。
                </p>
                <p>
                    法線ベクトル <InlineMath math="\mathbf{n}" /> に垂直な平面を動かすと、物体 <InlineMath math="A" /> の体積をちょうど二等分するような平面が（中間値の定理より）ただ一つ定まる。この平面を <InlineMath math="H(\mathbf{n})" /> とする。
                </p>
                <p>
                    次に、この平面 <InlineMath math="H(\mathbf{n})" /> が残りの物体 <InlineMath math="B, C" /> をどう分割するかを考える。平面 <InlineMath math="H(\mathbf{n})" /> は空間を、法線ベクトル <InlineMath math="\mathbf{n}" /> が向いている側と、その反対側の2つの領域に分ける。<InlineMath math="\mathbf{n}" /> 側にある物体 <InlineMath math="B, C" /> の体積をそれぞれ <InlineMath math="V_B(\mathbf{n}), V_C(\mathbf{n})" /> とし、写像 <InlineMath math="f : S^2 \to \mathbb{R}^2" /> を
                    <BlockMath math="f(\mathbf{n}) = (V_B(\mathbf{n}), V_C(\mathbf{n}))" />
                    と定義する。これは <InlineMath math="\mathbf{n}" /> に連続に依存する。
                </p>
                <p>
                    ここで、法線ベクトルを反転させた <InlineMath math="-\mathbf{n}" /> を考える。平面 <InlineMath math="H(-\mathbf{n})" /> は <InlineMath math="A" /> を二等分する平面であるため、幾何学的には <InlineMath math="H(\mathbf{n})" /> と同じ平面である。しかし「<InlineMath math="-\mathbf{n}" /> 側」の領域は、元の「<InlineMath math="\mathbf{n}" /> 側」のちょうど反対の領域となる。したがって、
                    <BlockMath math="V_B(-\mathbf{n}) = (\text{B の全体積}) - V_B(\mathbf{n})" />
                    <BlockMath math="V_C(-\mathbf{n}) = (\text{C の全体積}) - V_C(\mathbf{n})" />
                    が成り立つ。
                </p>
                <p>
                    ボルスク・ウラムの定理（Theorem 3.4-1）より、<InlineMath math="f(\mathbf{n}_0) = f(-\mathbf{n}_0)" /> を満たす <InlineMath math="\mathbf{n}_0 \in S^2" /> が必ず存在する。このとき、
                    <BlockMath math="\begin{aligned} &V_B(\mathbf{n}_0) = (\text{B の全体積}) - V_B(\mathbf{n}_0) \\ &\implies V_B(\mathbf{n}_0) = \frac{1}{2}(\text{B の全体積}) \end{aligned}" />
                    <BlockMath math="\begin{aligned} &V_C(\mathbf{n}_0) = (\text{C の全体積}) - V_C(\mathbf{n}_0) \\ &\implies V_C(\mathbf{n}_0) = \frac{1}{2}(\text{C の全体積}) \end{aligned}" />
                    となる。すなわち、この <InlineMath math="\mathbf{n}_0" /> に対応する平面 <InlineMath math="H(\mathbf{n}_0)" /> は、<InlineMath math="A" /> を二等分するだけでなく、同時に <InlineMath math="B" /> と <InlineMath math="C" /> もちょうど二等分する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ボルスク・ウラムの定理の意義"
            >
                <p>
                    ハム・サンドイッチ定理は、物体の形がいかに歪んでいても、互いにどれだけ離れていても、さらには穴が空いていたり複数のパーツに分かれていても成立するという、非常に強力で直感的な結果です。
                </p>
                <p>
                    ブラウワーの不動点定理もボルスク・ウラムの定理も、基本群という代数的な「不変量」の矛盾を突くことで、方程式の解の存在（<InlineMath math="f(x)=x" /> や <InlineMath math="f(x)=f(-x)" />）を位相的に保証するという点で共通の構造を持っています。これらは、代数的トポロジーの真骨頂を示す美しい応用例です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ボルスク・ウラムの定理は、「<InlineMath math="S^2" /> から <InlineMath math="\mathbb{R}^2" /> への連続写像には、必ず同じ値をとる対蹠点が存在する」という定理である。</li>
                    <li>直感的な例として、地球上で気温と気圧が全く同じになる対蹠点が必ず存在することが挙げられる。</li>
                    <li>この定理は、空間内の任意の 3 つの物体を 1 つの平面で同時に二等分できるという「ハム・サンドイッチ定理」の証明にも用いられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
