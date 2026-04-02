import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionClassificationOfSurfaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                トーラスやクラインの壺は「閉曲面（境界を持たないコンパクトな 2 次元多様体）」の例ですが、実はすべての閉曲面は幾何学的に完全に分類されており、その基本群も統一的な式で書き下すことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">閉曲面の分類定理</h2>

            <p className="leading-relaxed">
                向き付け可能（表と裏の区別ができる）な閉曲面は、直感的には「穴（ハンドル）の数」だけで完全に分類されます。この穴の数を<strong>種数（genus）</strong>と呼びます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.3-1 (閉曲面の分類定理)"
            >
                <p>
                    任意の連結な<strong>向き付け可能閉曲面</strong>は、ある整数 <InlineMath math="g \geq 0" /> を用いて、種数 <InlineMath math="g" /> の曲面 <InlineMath math="\Sigma_g" /> と同相になる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="\Sigma_0 = S^2" /> （球面：穴 0 個）</li>
                    <li><InlineMath math="\Sigma_1 = T^2" /> （トーラス：穴 1 個）</li>
                    <li><InlineMath math="\Sigma_g" /> （<InlineMath math="g \geq 2" />）は、<InlineMath math="g" /> 個のトーラスを繋ぎ合わせたもの（連結和）である。</li>
                </ul>
                <p>
                    （※向き付け不可能な閉曲面の場合は、実射影平面 <InlineMath math="\mathbb{R}P^2" /> をいくつか繋ぎ合わせたものに分類される。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (アイデア)"
            >
                <p>
                    任意の閉曲面は、ある多角形の辺をペアにして貼り合わせることで構成できることが知られている（多角形表示）。
                </p>
                <p>
                    この多角形を切り貼りして変形していくことで、必ず「標準形」と呼ばれる形に帰着させることができる。向き付け可能な場合は、<InlineMath math="4g" /> 角形の辺をペアにして貼り合わせる形になる。また、オイラー標数 <InlineMath math="\chi(\Sigma_g) = 2 - 2g" /> が位相不変量となるため、異なる種数の曲面が同相になることはない。この証明の詳細は代数的トポロジー（トピック 4-8）で厳密に扱われる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">種数 g の曲面の基本群</h2>

            <p className="leading-relaxed">
                上記の「多角形の貼り合わせ」という構成は、まさに CW 複体そのものです。したがって、ファン・カンペンの定理を用いてその基本群を計算することができます。
            </p>

            <ContentBox
                type="theorem"
                title={<span>Theorem 5.3-2 (種数 <InlineMath math="g" /> 曲面の基本群)</span>}
            >
                <p>
                    種数 <InlineMath math="g \geq 1" /> の向き付け可能閉曲面 <InlineMath math="\Sigma_g" /> の基本群は、次のように表示される。
                    <BlockMath math="\pi_1(\Sigma_g) = \langle a_1, b_1, \ldots, a_g, b_g \mid [a_1, b_1][a_2, b_2] \cdots [a_g, b_g] = e \rangle" />
                </p>
                <p>
                    ここで、<InlineMath math="[a, b] = aba^{-1}b^{-1}" /> は <InlineMath math="a" /> と <InlineMath math="b" /> の<strong>交換子（commutator）</strong>である。
                </p>
                <p>
                    特に <InlineMath math="g = 1" /> のときは <InlineMath math="\langle a_1, b_1 \mid a_1 b_1 a_1^{-1} b_1^{-1} = e \rangle" /> となり、トーラスの基本群 <InlineMath math="\mathbb{Z} \times \mathbb{Z}" /> と一致する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="\Sigma_g" /> の標準的な CW 複体構造は、1つの <InlineMath math="4g" /> 角形（2-セル）の辺を次のような順序で 1-骨格に接着して得られる。
                    <BlockMath math="\begin{aligned} a_1 \to b_1 \to a_1^{-1} \to b_1^{-1} \to a_2 \to b_2 \to a_2^{-1} \to b_2^{-1} &\to \\ \cdots \to a_g \to b_g \to a_g^{-1} \to &b_g^{-1} \end{aligned}" />
                </p>
                <p>
                    すべての頂点は 1つの 0-セル <InlineMath math="e^0" /> に同一視されるため、1-骨格は <InlineMath math="2g" /> 個のループ（生成元 <InlineMath math="a_1, b_1, \ldots, a_g, b_g" />）が 1 点で交わる花束のような空間（ブーケ空間）となる。
                </p>
                <p>
                    ここに 2-セルを接着すると、その境界が定める関係式はまさに交換子の積 <InlineMath math="[a_1, b_1][a_2, b_2]\cdots[a_g, b_g] = e" /> となる。ファン・カンペンの定理より、これが基本群の唯一の関係式である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.3-1 (種数 2 の曲面とホモロジーの先取り)"
            >
                <p>
                    種数 2（2つ穴の浮き輪）の曲面 <InlineMath math="\Sigma_2" /> の基本群は
                    <BlockMath math="\pi_1(\Sigma_2) = \langle a_1, b_1, a_2, b_2 \mid a_1 b_1 a_1^{-1} b_1^{-1} a_2 b_2 a_2^{-1} b_2^{-1} = e \rangle" />
                    という複雑な非可換群である。
                </p>
                <p>
                    この群がどれくらい「大きい」かを測るために、強引にすべての元が可換であるとしてしまう操作（可換化）を行う。関係式の交換子 <InlineMath math="[a_i, b_i]" /> は可換化するとすべて単位元になって消えてしまうため、関係式が実質的に無くなり、4つの生成元をもつ<strong>自由アーベル群 <InlineMath math="\mathbb{Z}^4" /></strong> が得られる。
                </p>
                <p>
                    この「基本群の可換化」は、実は「1 次元のホモロジー群 <InlineMath math="H_1(X)" />」と一致することが知られている（ポアンカレの定理）。一般の種数 <InlineMath math="g" /> の場合、<InlineMath math="H_1(\Sigma_g) \cong \mathbb{Z}^{2g}" /> となり、<InlineMath math="2g" /> は「曲面上の独立な 1 次元の穴の数（ベッチ数）」を表している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>向き付け可能閉曲面は、穴の数である「種数 <InlineMath math="g" />」によって <InlineMath math="\Sigma_g" /> に完全に分類される。</li>
                    <li><InlineMath math="\Sigma_g" /> は <InlineMath math="4g" /> 角形から作られる CW 複体とみなせ、その基本群は <InlineMath math="2g" /> 個の生成元と 1 つの交換子積の関係式をもつ。</li>
                    <li>基本群を可換化することで得られる <InlineMath math="\mathbb{Z}^{2g}" /> という構造は、より扱いやすい位相不変量である「ホモロジー群」へと繋がっていく。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
