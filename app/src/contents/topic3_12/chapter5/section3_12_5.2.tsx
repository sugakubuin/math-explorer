import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionTorusAndProjectiveSpace() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前章で紹介した CW 複体の手法を用いると、多角形の辺を貼り合わせてできる様々な曲面の基本群を計算することができます。ここでは、トーラス、クラインの壺、そして実射影空間という代表的な曲面を扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">トーラスとクラインの壺</h2>

            <p className="leading-relaxed">
                トーラスの基本群は、CW 複体としての計算だけでなく、直積空間としての性質からも導くことができます。
            </p>

            <ContentBox
                type="example"
                title="Example 5.2-1 (トーラスの基本群と直積)"
            >
                <p>
                    トーラス <InlineMath math="T^2" /> は、2つの円周の直積 <InlineMath math="S^1 \times S^1" /> と同相である。
                    一般に、2つの位相空間の直積の基本群は、それぞれの基本群の直積群と同型になる。
                    <BlockMath math="\pi_1(X \times Y) \cong \pi_1(X) \times \pi_1(Y)" />
                </p>
                <p>
                    したがって、トーラスの基本群は
                    <BlockMath math="\pi_1(T^2) = \pi_1(S^1 \times S^1) \cong \pi_1(S^1) \times \pi_1(S^1) \cong \mathbb{Z} \times \mathbb{Z}" />
                    となる。これは、経線方向のループ <InlineMath math="a" /> と緯線方向のループ <InlineMath math="b" /> が可換（<InlineMath math="ab = ba" />）であることを意味しており、前章の CW 複体による計算結果（<InlineMath math="\langle a, b \mid aba^{-1}b^{-1} = e \rangle" />）と完全に一致する。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.2-2 (クラインの壺の基本群)"
            >
                <p>
                    クラインの壺 <InlineMath math="K" /> は、正方形の対向する辺を、一方は同じ向きに（<InlineMath math="a" />）、もう一方は逆向きに（<InlineMath math="b" />）貼り合わせることで得られる閉曲面である。
                </p>
                <p>
                    CW 複体としての構造を考えると、1-セルは <InlineMath math="a, b" /> の 2 つであり、2-セルの境界の接着写像は正方形の境界に沿って <InlineMath math="a \to b \to a \to b^{-1}" /> という順になるため、関係式は <InlineMath math="abab^{-1} = e" /> となる。
                </p>
                <p>
                    したがって、クラインの壺の基本群は
                    <BlockMath math="\pi_1(K) = \langle a, b \mid abab^{-1} = e \rangle" />
                    と表示される。この関係式は <InlineMath math="b^{-1} a b = a^{-1}" /> と変形できる。これは可換群ではなく、トーラスの基本群とは異なるため、クラインの壺はトーラスとはホモトピー同値でない（当然、同相でもない）ことがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">実射影空間の基本群</h2>

            <p className="leading-relaxed">
                次に、球面 <InlineMath math="S^n" /> の対蹠点（中心に関して対称な点）を同一視して得られる空間である「実射影空間 <InlineMath math="\mathbb{R}P^n" />」の基本群を計算します。
            </p>

            <ContentBox
                type="theorem"
                title={<span>Theorem 5.2-1 (<InlineMath math="\mathbb{R}P^2" /> の基本群)</span>}
            >
                <p>
                    2次元の実射影平面 <InlineMath math="\mathbb{R}P^2" /> の基本群は、位数 2 の巡回群と同型である。
                    <BlockMath math="\pi_1(\mathbb{R}P^2) \cong \mathbb{Z}/2\mathbb{Z}" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="\mathbb{R}P^2" /> は、円板 <InlineMath math="D^2" /> の境界である円周 <InlineMath math="S^1" /> 上の対蹠点を同一視することでも得られる。この視点から CW 複体構造を考える。
                </p>
                <p>
                    境界の <InlineMath math="S^1" /> の半周を <InlineMath math="a" /> とすると、対蹠点の同一視により、残りの半周も（同じ向きに）<InlineMath math="a" /> となる。したがって、1-骨格は 1つの 0-セルと 1つの 1-セル <InlineMath math="a" /> からなる円周である。
                </p>
                <p>
                    ここに 2-セル（<InlineMath math="D^2" /> の内部）を貼り付ける。その境界は 1-骨格の <InlineMath math="a" /> を <strong>2周</strong> なぞることになる。すなわち、接着写像が定める関係式は <InlineMath math="a^2 = e" /> である。
                </p>
                <p>
                    したがって、CW 複体の定理より基本群は
                    <BlockMath math="\pi_1(\mathbb{R}P^2) = \langle a \mid a^2 = e \rangle \cong \mathbb{Z}/2\mathbb{Z}" />
                    となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 5.2-3 (一般次元の <InlineMath math="\mathbb{R}P^n" />)</span>}
            >
                <p>
                    <InlineMath math="n \geq 2" /> のすべての <InlineMath math="n" /> について、<InlineMath math="n" /> 次元実射影空間の基本群は <InlineMath math="\mathbb{Z}/2\mathbb{Z}" /> となる。
                    <BlockMath math="\pi_1(\mathbb{R}P^n) \cong \mathbb{Z}/2\mathbb{Z} \quad (n \geq 2)" />
                </p>
                <p>
                    この事実は、<InlineMath math="\mathbb{R}P^n" /> の CW 複体構造が <InlineMath math="e^0 \cup e^1 \cup e^2 \cup \cdots \cup e^n" /> となり、2-骨格までが <InlineMath math="\mathbb{R}P^2" /> と全く同じであること（3 次元以上のセルは基本群に影響を与えないこと）から直ちにわかる。
                </p>
                <p>
                    また、後の章で学ぶ「被覆空間の理論」を用いると、単連結な <InlineMath math="S^n" /> から <InlineMath math="\mathbb{R}P^n" /> への 2 対 1 の被覆写像が存在することから、より一般的にこの事実を証明することができる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>トーラス <InlineMath math="T^2" /> の基本群は <InlineMath math="\mathbb{Z} \times \mathbb{Z}" /> であり、可換群である。</li>
                    <li>クラインの壺 <InlineMath math="K" /> の基本群は <InlineMath math="\langle a, b \mid abab^{-1} = e \rangle" /> であり、非可換群である。</li>
                    <li>実射影空間 <InlineMath math="\mathbb{R}P^n" />（<InlineMath math="n \geq 2" />）の基本群は <InlineMath math="\mathbb{Z}/2\mathbb{Z}" />（有限群）であり、幾何学的な「ねじれ」を反映している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
