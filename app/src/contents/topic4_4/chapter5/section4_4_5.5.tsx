import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MinimaxTheoremAndSaddlePoints() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、最適化問題と双対問題をつなぐ重要な概念である鞍点と、その存在を保証するミニマックス定理について解説します。これまでの節で学んだ強双対定理やKKT条件の背後には、本質的にこの鞍点の構造が隠されています。まずは鞍点の定義から確認し、その後、ゲーム理論などでも極めて重要な役割を果たすフォン・ノイマンのミニマックス定理へと進みましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">鞍点の定義と双対性</h2>

            <p>
                多変数関数の特定の点が、ある変数については最小値を与え、別の変数については最大値を与えるとき、その点を鞍点（saddle point）と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 5.5-1 (鞍点)">
                <p>
                    関数 <InlineMath math="L(x, y)" /> について、点 <InlineMath math="(x^*, y^*)" /> が<b>鞍点（saddle point）</b>であるとは、任意の <InlineMath math="x, y" /> に対して以下の不等式が成り立つことである。
                </p>
                <BlockMath math="L(x^*, y) \leq L(x^*, y^*) \leq L(x, y^*)" />
            </ContentBox>

            <p>
                この定義は、<InlineMath math="y" /> を <InlineMath math="y^*" /> に固定したとき <InlineMath math="x^*" /> が <InlineMath math="L(x, y^*)" /> を最小化し、同時に <InlineMath math="x" /> を <InlineMath math="x^*" /> に固定したとき <InlineMath math="y^*" /> が <InlineMath math="L(x^*, y)" /> を最大化していることを意味します。直感的には、馬の鞍の中心のような形状です。この鞍点の存在は、最大化と最小化の順序交換（双対ギャップが零であること）と深く結びついています。
            </p>

            <ContentBox type="example" title="Example 5.5-1">
                <p>
                    関数 <InlineMath math="L(x, y) = x^2 - y^2 + 2xy" /> について、<InlineMath math="(0, 0)" /> が鞍点であるかを検証する。
                </p>
                <p>
                    まず、偏微分を計算して停留点を求める。
                </p>
                <BlockMath math="\frac{\partial L}{\partial x} = 2x + 2y = 0" />
                <BlockMath math="\frac{\partial L}{\partial y} = -2y + 2x = 0" />
                <p>
                    これらを解くと、唯一の停留点として <InlineMath math="(x, y) = (0, 0)" /> を得る。ここで、鞍点の不等式条件を満たすかを確認する。
                </p>
                <BlockMath math="L(0, y) = -y^2 \leq 0 = L(0, 0)" />
                <BlockMath math="L(0, 0) = 0 \leq x^2 = L(x, 0)" />
                <p>
                    したがって、<InlineMath math="L(0, y) \leq L(0, 0) \leq L(x, 0)" /> が成立し、<InlineMath math="(0,0)" /> は鞍点であることがわかる。
                </p>
            </ContentBox>

            <p>
                次に、鞍点が存在する場合、最小化と最大化の順序を交換しても値が一致することを示します。
            </p>

            <ContentBox type="proposition" title="Proposition 5.5-1">
                <p>
                    点 <InlineMath math="(x^*, y^*)" /> が <InlineMath math="L(x, y)" /> の鞍点であるならば、以下が成り立つ。
                </p>
                <BlockMath math="\max_y \min_x L(x, y) = \min_x \max_y L(x, y) = L(x^*, y^*)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    一般に、任意の関数において弱双対性に対応する以下の不等式が成り立つ。
                </p>
                <BlockMath math="\max_y \min_x L(x, y) \leq \min_x \max_y L(x, y)" />
                <p>
                    いま、<InlineMath math="(x^*, y^*)" /> が鞍点であるとする。鞍点の定義より、任意の <InlineMath math="x, y" /> について <InlineMath math="L(x^*, y) \leq L(x^*, y^*) \leq L(x, y^*)" /> であるから、
                </p>
                <BlockMath math="\min_x L(x, y^*) \leq L(x^*, y^*) \leq \max_y L(x^*, y)" />
                <p>
                    が成り立つ。左辺について <InlineMath math="y" /> についての最大値をとると、
                </p>
                <BlockMath math="\max_y \min_x L(x, y) \geq \min_x L(x, y^*) = L(x^*, y^*)" />
                <p>
                    同様に、右辺について <InlineMath math="x" /> についての最小値をとると、
                </p>
                <BlockMath math="\min_x \max_y L(x, y) \leq \max_y L(x^*, y) = L(x^*, y^*)" />
                <p>
                    以上より、
                </p>
                <BlockMath math="\min_x \max_y L(x, y) \leq L(x^*, y^*) \leq \max_y \min_x L(x, y)" />
                <p>
                    弱双対性の不等式と合わせることで、等号が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このように、鞍点の存在は双対ギャップが零であることを直接的に導きます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フォン・ノイマンのミニマックス定理</h2>

            <p>
                鞍点の存在が有益であることはわかりましたが、どのような条件の下で鞍点が存在するのでしょうか。これに答えるのが、フォン・ノイマンによるミニマックス定理です。フェンシェル双対性の枠組みを用いることで、この定理を美しく証明することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.5-1 (フォン・ノイマンのミニマックス定理)">
                <p>
                    <InlineMath math="X, Y" /> をそれぞれ有限次元空間のコンパクトな凸集合とする。<InlineMath math="L(x, y)" /> が <InlineMath math="x" /> に関して凸、<InlineMath math="y" /> に関して凹であり、かつ連続関数であるならば、以下が成り立つ。
                </p>
                <BlockMath math="\max_{y \in Y} \min_{x \in X} L(x, y) = \min_{x \in X} \max_{y \in Y} L(x, y)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略を述べる。<InlineMath math="L" /> を適切に凸関数と凹関数に分解し、フェンシェル双対の強双対定理（Theorem 5.2-1）を適用する。<InlineMath math="X" /> と <InlineMath math="Y" /> がコンパクトであることから、支持関数の性質や共役関数の連続性が保証される。相対的内部条件（スレーターの条件に相当）は、コンパクト凸集合上の連続関数であることにより自然に満たされる。これにより、双対ギャップが零であることが示され、結果としてミニマックス等式が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、ゲーム理論における混合戦略ナッシュ均衡の存在証明に直接用いられます。具体的な例として、ゼロ和行列ゲームを考えてみましょう。
            </p>

            <ContentBox type="example" title="Example 5.5-2">
                <p>
                    ゼロ和行列ゲームを考える。利得行列を <InlineMath math="A = \begin{pmatrix} 3 & 1 \\ 0 & 4 \end{pmatrix}" /> とし、<InlineMath math="L(x, y) = x^T A y" /> とする。ここで <InlineMath math="X, Y" /> はそれぞれのプレイヤーの混合戦略を表す確率単体（<InlineMath math="x_1+x_2=1, x_1,x_2 \geq 0" />）である。
                </p>
                <p>
                    <InlineMath math="L(x, y)" /> は <InlineMath math="x" /> および <InlineMath math="y" /> に関して線形（したがって凸かつ凹）であり、<InlineMath math="X, Y" /> はコンパクト凸集合であるため、ミニマックス定理が適用できる。
                </p>
                <p>
                    実際に最適戦略を計算すると、プレイヤー1（行プレイヤー、<InlineMath math="x" />）は <InlineMath math="x = (2/3, 1/3)^T" />、プレイヤー2（列プレイヤー、<InlineMath math="y" />）は <InlineMath math="y = (1/2, 1/2)^T" /> を選ぶとき、
                </p>
                <BlockMath math="\max_y \min_x x^T A y = \min_x \max_y x^T A y = 2"
                />
                <p>
                    となり、等式が成立していることが確認できる。この値 2 がゲームの値である。
                </p>
            </ContentBox>

            <p>
                さらに、フォン・ノイマンの定理はより一般的な状況に拡張することができます。それがシオン（Sion）のミニマックス定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.5-2 (シオンのミニマックス定理)">
                <p>
                    <InlineMath math="X" /> を凸集合、<InlineMath math="Y" /> をコンパクト凸集合とする。<InlineMath math="L(x, y)" /> が <InlineMath math="x" /> に関して準凸で下半連続、<InlineMath math="y" /> に関して準凹で上半連続であれば、以下が成り立つ。
                </p>
                <BlockMath math="\max_{y \in Y} \min_{x \in X} L(x, y) = \min_{x \in X} \max_{y \in Y} L(x, y)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略：<InlineMath math="Y" /> のコンパクト性と <InlineMath math="x" /> に関する凸性を用いて、レベル集合の有限交差性に基づく位相的論法により示す。フェンシェル双対性よりも直接的な分離定理の応用が必要となるが、基本的なアイデアは空間の凸性を利用して鞍点の存在を保証することにある。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ゲーム理論や経済学への応用">
                <p>
                    ミニマックス定理は、本コースで扱う凸解析や最適化理論の枠を超えて、ゲーム理論（A-10）や数理経済学において基礎的な役割を果たします。特に、対立する二者の間で「最悪のケースを想定した上で最善を尽くす」という戦略が、互いに一致する結果をもたらすことを数学的に保証する点は、極めて深遠な結果です。
                </p>
            </ContentBox>

            <p>
                これで、フェンシェル双対性に関する主要な結果を網羅しました。鞍点の概念は、次章以降で学ぶ単調作用素や各種アルゴリズムの収束解析においても、しばしば顔を出すことになります。
            </p>

            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>鞍点が存在するとき、最大化と最小化の順序交換が可能となり、双対ギャップは零となる。</li>
                    <li>フォン・ノイマンのミニマックス定理は、コンパクト凸集合上での凸凹関数に対してミニマックス等式が成り立つことを保証する。</li>
                    <li>フェンシェル双対性の枠組みを用いることで、これらの定理に統一的な証明を与えることができる。</li>
                    <li>シオンのミニマックス定理は、仮定を準凸性や片側のコンパクト性に緩めた一般化である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
