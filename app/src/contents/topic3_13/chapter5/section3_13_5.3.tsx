import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TheoremaEgregium() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに準備したクリストッフェル記号とガウス方程式を組み合わせることで、微分幾何学において最も有名で驚くべき定理の証明が完了します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ガウスの驚異の定理</h2>

            <p className="leading-relaxed">
                ガウス曲率は、元々は「空間内での曲面がどちらに曲がっているか」を測る外在的な量（第二基本形式）として定義されました。しかし、実は内在的な量であることをガウスは発見し、自らこれを「驚異の定理」と名付けました。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.3-1 (ガウスの驚異の定理 / Theorema Egregium)"
            >
                <p>
                    正則曲面のガウス曲率 <InlineMath math="K" /> は、<strong>第一基本形式の係数 <InlineMath math="E, F, G" /> とその1次および2次の偏微分のみによって完全に表される。</strong>
                </p>
                <p>
                    すなわち、ガウス曲率は曲面が空間にどう埋め込まれているかに依存しない<strong>内在的な不変量（intrinsic invariant）</strong>であり、第一基本形式を保存する変換（等長写像）に対して不変である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    ガウス曲率の定義は、主曲率の積から得られた次の式であった。
                    <BlockMath math="K = \frac{eg - f^2}{EG - F^2}" />
                </p>
                <p>
                    一方、前節で導いたガウス方程式（Theorem 5.2-1）によれば、分子の <InlineMath math="eg - f^2" /> はクリストッフェル記号 <InlineMath math="\Gamma^k_{ij}" /> とその微分を用いて書かれるリーマン曲率成分 <InlineMath math="R_{1212}" /> に等しい。
                    <BlockMath math="eg - f^2 = R_{1212}" />
                </p>
                <p>
                    さらに前々節の Proposition 5.1-1 により、すべてのクリストッフェル記号 <InlineMath math="\Gamma^k_{ij}" /> は第一基本形式の係数 <InlineMath math="E, F, G" /> とその1次偏微分のみで表されることが証明されている。
                </p>
                <p>
                    したがって、これらを代入すれば、
                    <BlockMath math="K = \frac{R_{1212}}{EG - F^2}" />
                    となり、右辺には空間の法ベクトル <InlineMath math="\mathbf{N}" /> などの外的な情報は一切現れず、<InlineMath math="E, F, G" /> とその微分だけでガウス曲率 <InlineMath math="K" /> が計算できることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理は、「曲面上の住人」が自分の世界から一歩も外に出ることなく、巻き尺（第一基本形式）だけを使って長さを測ることで、自分の住んでいる世界が曲がっているかどうか（ガウス曲率）を計算できることを意味しています。
            </p>

            <ContentBox
                type="example"
                title="Example 5.3-1 (球面と平面の非等長性の再確認)"
            >
                <p>
                    半径 <InlineMath math="r" /> の球面は <InlineMath math="K = 1/r^2 \neq 0" /> であり、平面は <InlineMath math="K = 0" /> である。
                </p>
                <p>
                    驚異の定理によれば、もし球面と平面の間に等長写像が存在するならば、その写像はガウス曲率を保存しなければならない。しかし、<InlineMath math="1/r^2" /> と <InlineMath math="0" /> は異なる値であるため、<strong>球面の一部を伸縮させずに平面に展開することは絶対に不可能</strong>である。
                </p>
                <p>
                    地球の地図を描くとき、必ずどこかの面積や角度が歪んでしまうのは、人間の技術が足りないからではなく、この「驚異の定理」が支配する数学的必然である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">驚異の定理の意義</h2>

            <p className="leading-relaxed">
                ガウスの驚異の定理は、幾何学の歴史においてパラダイムシフトを引き起こしました。
            </p>

            <ContentBox
                type="remark"
                title="定理の歴史的意義と非ユークリッド幾何"
            >
                <p>
                    1827年にカール・フリードリヒ・ガウスがこの定理を発表したことで、「空間に浮かぶ図形」としてしか捉えられていなかった曲面が、それ自体で独立した「2次元の宇宙（空間）」として研究できることが明らかになりました。
                </p>
                <p>
                    この視点により、ガウス曲率が正の世界（球面幾何）、ゼロの世界（ユークリッド幾何）、負の世界（双曲幾何）という「非ユークリッド幾何学」の存在が明確に位置づけられました。
                </p>
                <p>
                    後にベルンハルト・リーマンはこれを一般の <InlineMath math="n" /> 次元へと拡張し、第一基本形式の一般化である「リーマン計量」から曲率テンソルを定義するリーマン幾何学を創始しました。これがアインシュタインの一般相対性理論（重力とは時空の曲がりである）の数学的言語となったのです。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.3-2 (等長変換で変わらない量と変わる量)"
            >
                <p>
                    紙を丸めて円柱を作るとき、これは等長変換である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>変わらないもの（内的量）：</strong> 弧長、面積、角度、第一基本形式。そして驚異の定理により、ガウス曲率 <InlineMath math="K" />（平面も円柱も <InlineMath math="K=0" /> で変わらない）。</li>
                    <li><strong>変わるもの（外的量）：</strong> 3次元空間での見え方。第二基本形式、主曲率（平面は <InlineMath math="0, 0" /> だが円柱は <InlineMath math="1/r, 0" />）、平均曲率 <InlineMath math="H" />（平面は <InlineMath math="0" /> だが円柱は <InlineMath math="1/(2r)" />）。</li>
                </ul>
                <p>
                    ガウス曲率が <InlineMath math="\kappa_1 \cdot \kappa_2" /> という形をしているからこそ、一方がゼロのままならもう一方がどう変化しても積はゼロ（保存される）という奇跡的なバランスが成り立っているのである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>ガウスの驚異の定理：</strong> ガウス曲率 <InlineMath math="K" /> は第一基本形式だけで計算できる内在的な量である。</li>
                    <li>したがって、曲面を曲げたりねじったり（等長変形）しても、ガウス曲率は局所的に不変に保たれる。</li>
                    <li>この定理は、曲面を外の空間から切り離してそれ自体で研究する「内在的幾何学（リーマン幾何学）」の出発点となった。</li>
                </ul>
            </ContentBox>
        </section>
    );
}