import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_8_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ1変数の陰関数定理を、多変数および連立方程式の場合へと一般化します。
                この多変数版の陰関数定理は、多様体（多様体の局所座標系の構成）や前章で扱ったラグランジュの未定乗数法の基礎理論を支える、解析学における最重要定理の一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">陰関数定理（多変数版）</h2>

            <p>
                <InlineMath math="n" /> 個の変数 <InlineMath math="x_1, \dots, x_n" /> と、<InlineMath math="m" /> 個の変数 <InlineMath math="y_1, \dots, y_m" /> を考えます。
                これらが <InlineMath math="m" /> 個の連立方程式 <InlineMath math="F_1 = 0, \dots, F_m = 0" /> で関係づけられている状況下で、「<InlineMath math="m" /> 個の変数 <InlineMath math="\mathbf{y}" /> を、残りの <InlineMath math="n" /> 個の変数 <InlineMath math="\mathbf{x}" /> の関数として解けるか？」という問題を考えます。
            </p>
            <p>
                ここでは、ベクトル記法を用いて簡潔に記述します。<InlineMath math="\mathbf{x} = (x_1, \dots, x_n) \in \mathbb{R}^n" />、<InlineMath math="\mathbf{y} = (y_1, \dots, y_m) \in \mathbb{R}^m" />、および <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{y}) = (F_1(\mathbf{x}, \mathbf{y}), \dots, F_m(\mathbf{x}, \mathbf{y})) \in \mathbb{R}^m" /> とします。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 (多変数陰関数定理)">
                <p>
                    <InlineMath math="D \subset \mathbb{R}^n \times \mathbb{R}^m" /> を開集合とし、写像 <InlineMath math="\mathbf{F}: D \to \mathbb{R}^m" /> は <InlineMath math="C^1" /> 級であるとする。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="(\mathbf{a}, \mathbf{b}) \in D" />（ここで <InlineMath math="\mathbf{a} \in \mathbb{R}^n" />, <InlineMath math="\mathbf{b} \in \mathbb{R}^m" />）において、次の条件を満たすと仮定する：
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><InlineMath math="\mathbf{F}(\mathbf{a}, \mathbf{b}) = \mathbf{0}" /></li>
                    <li><InlineMath math="\mathbf{F}" /> の <InlineMath math="\mathbf{y}" /> 変数に関するヤコビ行列の、点 <InlineMath math="(\mathbf{a}, \mathbf{b})" /> における行列式が0でない。すなわち：
                        <BlockMath math="\det J_{\mathbf{y}} \mathbf{F}(\mathbf{a}, \mathbf{b}) = \frac{\partial(F_1, \dots, F_m)}{\partial(y_1, \dots, y_m)}\Big|_{(\mathbf{a}, \mathbf{b})} \neq 0" />
                    </li>
                </ol>
                <p className="mt-2">
                    このとき、点 <InlineMath math="\mathbf{a}" /> の開近傍 <InlineMath math="U \subset \mathbb{R}^n" /> と、点 <InlineMath math="\mathbf{b}" /> の開近傍 <InlineMath math="V \subset \mathbb{R}^m" /> が存在して、次の性質を満たす唯一の <InlineMath math="C^1" /> 級写像 <InlineMath math="\mathbf{f}: U \to V" /> が定まる：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\mathbf{b} = \mathbf{f}(\mathbf{a})" /></li>
                    <li>すべての <InlineMath math="\mathbf{x} \in U" /> に対して <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{f}(\mathbf{x})) = \mathbf{0}" /> が成り立つ。</li>
                </ul>
                <p className="mt-2">
                    また、この陰関数 <InlineMath math="\mathbf{f}" /> の <InlineMath math="\mathbf{x}" /> に関するヤコビ行列は次で与えられる：
                </p>
                <BlockMath math="J_{\mathbf{x}} \mathbf{f}(\mathbf{x}) = - \big[J_{\mathbf{y}} \mathbf{F}(\mathbf{x}, \mathbf{y})\big]^{-1} \big[J_{\mathbf{x}} \mathbf{F}(\mathbf{x}, \mathbf{y})\big]" />
                <p className="text-sm text-slate-600 dark:text-slate-400">（ただし <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> として評価する。）</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この定理の証明は、通常「縮小写像の原理」または「逆写像定理」に帰着させることで行われる。ここでは逆写像定理を用いた標準的な証明の要略を示す。
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[1. 逆写像定理への帰着]</p>
                <p className="mt-2">
                    <InlineMath math="\mathbb{R}^{n+m}" /> から <InlineMath math="\mathbb{R}^{n+m}" /> への新しい写像 <InlineMath math="\mathbf{G}(\mathbf{x}, \mathbf{y})" /> を次のように定義する：
                </p>
                <BlockMath math="\mathbf{G}(\mathbf{x}, \mathbf{y}) = \begin{pmatrix} \mathbf{x} \\ \mathbf{F}(\mathbf{x}, \mathbf{y}) \end{pmatrix}" />
                <p className="mt-2">
                    <InlineMath math="\mathbf{F}" /> が <InlineMath math="C^1" /> 級であるため、<InlineMath math="\mathbf{G}" /> も <InlineMath math="C^1" /> 級写像である。この写像 <InlineMath math="\mathbf{G}" /> の点 <InlineMath math="(\mathbf{a}, \mathbf{b})" /> におけるヤコビ行列を計算すると、以下のようなブロック行列になる：
                </p>
                <BlockMath math="J \mathbf{G}(\mathbf{a}, \mathbf{b}) = \begin{pmatrix} I_n & O \\ J_{\mathbf{x}} \mathbf{F}(\mathbf{a}, \mathbf{b}) & J_{\mathbf{y}} \mathbf{F}(\mathbf{a}, \mathbf{b}) \end{pmatrix}" />
                <p className="mt-2">
                    ここで <InlineMath math="I_n" /> は <InlineMath math="n \times n" /> の単位行列、<InlineMath math="O" /> は零行列である。このブロック行列の行列式は対角ブロックの行列式の積となるため、
                </p>
                <BlockMath math="\begin{aligned} \det J \mathbf{G}(\mathbf{a}, \mathbf{b}) &= \det I_n \cdot \det J_{\mathbf{y}} \mathbf{F}(\mathbf{a}, \mathbf{b}) \\ &= 1 \cdot \det J_{\mathbf{y}} \mathbf{F}(\mathbf{a}, \mathbf{b}) \neq 0 \end{aligned}" />
                <p className="mt-2">
                    （定理の仮定より <InlineMath math="\det J_{\mathbf{y}} \mathbf{F} \neq 0" /> であるため）。
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[2. 局所的な逆写像の存在]</p>
                <p className="mt-2">
                    <InlineMath math="\det J \mathbf{G}(\mathbf{a}, \mathbf{b}) \neq 0" /> であるから、逆写像定理により、点 <InlineMath math="(\mathbf{a}, \mathbf{b})" /> のある近傍 <InlineMath math="W \subset \mathbb{R}^{n+m}" /> と、<InlineMath math="\mathbf{G}(\mathbf{a}, \mathbf{b}) = (\mathbf{a}, \mathbf{0})" /> のある近傍 <InlineMath math="Z \subset \mathbb{R}^{n+m}" /> が存在し、<InlineMath math="\mathbf{G}: W \to Z" /> は <InlineMath math="C^1" /> 級の微分同相写像（全単射かつ逆写像も <InlineMath math="C^1" /> 級）となる。
                </p>
                <p className="mt-2">
                    よって、<InlineMath math="Z" /> 上で定義された <InlineMath math="C^1" /> 級の逆写像 <InlineMath math="\mathbf{H} = \mathbf{G}^{-1}" /> が存在する。
                    <InlineMath math="\mathbf{G}(\mathbf{x}, \mathbf{y}) = (\mathbf{u}, \mathbf{v})" /> とおくと、<InlineMath math="\mathbf{u} = \mathbf{x}" /> および <InlineMath math="\mathbf{v} = \mathbf{F}(\mathbf{x}, \mathbf{y})" /> である。<InlineMath math="\mathbf{H}" /> は <InlineMath math="(\mathbf{u}, \mathbf{v})" /> から <InlineMath math="(\mathbf{x}, \mathbf{y})" /> への写像であり、第一成分はそのまま <InlineMath math="\mathbf{x} = \mathbf{u}" /> であるから、適当な <InlineMath math="C^1" /> 級写像 <InlineMath math="\mathbf{h}" /> を用いて次のように書ける：
                </p>
                <BlockMath math="\mathbf{H}(\mathbf{u}, \mathbf{v}) = \begin{pmatrix} \mathbf{u} \\ \mathbf{h}(\mathbf{u}, \mathbf{v}) \end{pmatrix}" />
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[3. 陰関数の構成]</p>
                <p className="mt-2">
                    今、方程式 <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{y}) = \mathbf{0}" /> を満たす <InlineMath math="\mathbf{y}" /> を知りたい。これは <InlineMath math="\mathbf{G}(\mathbf{x}, \mathbf{y}) = (\mathbf{x}, \mathbf{0})" /> となる条件と同値である。
                    したがって、先の逆写像 <InlineMath math="\mathbf{H}" /> にて <InlineMath math="\mathbf{v} = \mathbf{0}" /> と固定すればよい。すなわち、
                </p>
                <BlockMath math="\begin{pmatrix} \mathbf{x} \\ \mathbf{y} \end{pmatrix} = \mathbf{H}(\mathbf{x}, \mathbf{0}) = \begin{pmatrix} \mathbf{x} \\ \mathbf{h}(\mathbf{x}, \mathbf{0}) \end{pmatrix}" />
                <p className="mt-2">
                    ここから、求める関数を <InlineMath math="\mathbf{f}(\mathbf{x}) = \mathbf{h}(\mathbf{x}, \mathbf{0})" /> と定義すれば、<InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{f}(\mathbf{x})) = \mathbf{0}" /> が成り立つ。
                    <InlineMath math="\mathbf{H}" /> が <InlineMath math="C^1" /> 級であるため、<InlineMath math="\mathbf{f}" /> も <InlineMath math="C^1" /> 級である。
                    近傍 <InlineMath math="U, V" /> は、この逆写像が定義される <InlineMath math="Z, W" /> から自然に構成でき、一意性も微分同相の一意性から保証される。
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[4. ヤコビ行列の計算]</p>
                <p className="mt-2">
                    恒等式 <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{f}(\mathbf{x})) = \mathbf{0}" /> の両辺を <InlineMath math="\mathbf{x}" /> について微分（連鎖律を適用）すると、
                </p>
                <BlockMath math="J_{\mathbf{x}} \mathbf{F}(\mathbf{x}, \mathbf{f}(\mathbf{x})) + J_{\mathbf{y}} \mathbf{F}(\mathbf{x}, \mathbf{f}(\mathbf{x})) \cdot J_{\mathbf{x}} \mathbf{f}(\mathbf{x}) = O" />
                <p className="mt-2">
                    仮定より点 <InlineMath math="\mathbf{a}" /> の十分小さな近傍では <InlineMath math="J_{\mathbf{y}} \mathbf{F}" /> は正則（逆行列を持つ）である。したがって左から逆行列を掛けて、
                </p>
                <BlockMath math="J_{\mathbf{x}} \mathbf{f}(\mathbf{x}) = - \big[J_{\mathbf{y}} \mathbf{F}(\mathbf{x}, \mathbf{f}(\mathbf{x}))\big]^{-1} \big[J_{\mathbf{x}} \mathbf{F}(\mathbf{x}, \mathbf{f}(\mathbf{x}))\big]" />
                <p className="mt-2">
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は1変数版と見事な対応関係にあります。
                1変数版の「偏微分 <InlineMath math="F_y" /> が0でない」という条件が、多変数版では「解こうとしている変数 <InlineMath math="\mathbf{y}" /> に関するヤコビ行列が正則（行列式 <InlineMath math="\neq 0" />、つまり逆行列を持つ）である」という条件にグレードアップしています。
                導関数の公式も、1変数版の「割り算」が、多変数版では「行列の積と逆行列（<InlineMath math="-[F_y]^{-1}[F_x]" />）」として自然に拡張されていることが分かります。
            </p>

            <ContentBox type="remark" title="ヤコビ行列式の非零条件の意味">
                <p>
                    連立方程式が解ける条件として、なぜ「連立一次方程式」が思い浮かぶのでしょうか。
                    関数 <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{y})" /> を点 <InlineMath math="(\mathbf{a}, \mathbf{b})" /> の周りで1次近似（テイラー展開）すると、以下のように書けます。
                </p>
                <BlockMath math="\begin{aligned}
                                    &\mathbf{F}(\mathbf{a} + \Delta\mathbf{x}, \mathbf{b} + \Delta\mathbf{y}) \\ &\approx \mathbf{F}(\mathbf{a}, \mathbf{b}) + J_{\mathbf{x}} \mathbf{F}(\mathbf{a},\mathbf{b}) \Delta\mathbf{x} + J_{\mathbf{y}} \mathbf{F}(\mathbf{a},\mathbf{b}) \Delta\mathbf{y}
                                \end{aligned}" />
                <p className="mt-2">
                    <InlineMath math="\mathbf{F}(\mathbf{a}, \mathbf{b}) = \mathbf{0}" /> であること、および新しい点でも <InlineMath math="\mathbf{F} \approx \mathbf{0}" /> となる（すなわち曲面上に留まる）ことを要請すると、
                </p>
                <BlockMath math="J_{\mathbf{y}} \mathbf{F}(\mathbf{a},\mathbf{b}) \Delta\mathbf{y} \approx - J_{\mathbf{x}} \mathbf{F}(\mathbf{a},\mathbf{b}) \Delta\mathbf{x}" />
                <p className="mt-2">
                    という<strong>連立一次方程式</strong>が得られます。この方程式を <InlineMath math="\Delta\mathbf{y}" /> について一意に解くことができるための線形代数的な必要十分条件こそが、係数行列 <InlineMath math="J_{\mathbf{y}} \mathbf{F}" /> が正則であること（すなわち行列式が0でないこと）なのです。
                </p>
                <p className="mt-2">
                    陰関数定理は、この「1次近似レベルで解ける」という局所的な性質が、非線形な関数そのもののレベルでも極めて近い範囲で成立することを保証する定理と言えます。
                </p>
            </ContentBox>

            <p>
                多変数陰関数定理の応用範囲は非常に広く、次章で学ぶ逆写像の存在定理や、曲面・多様体の理論において、「パラメータ表示の存在」を証明するための強力な道具として用いられます。次節では、この公式を用いて実際の偏微分計算を行ってみます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多変数・連立方程式の陰関数定理は、<InlineMath math="n+m" /> 個の変数間の <InlineMath math="m" /> 個の拘束条件式から、局所的に <InlineMath math="m" /> 個の変数を残り <InlineMath math="n" /> 個の変数の関数として表せることを保証する。</li>
                    <li>関数として表せるかどうかの判定基準は、「解きたい <InlineMath math="m" /> 個の変数に関するヤコビ行列が正則（行列式 <InlineMath math="\neq 0" />）であること」に帰着される。</li>
                    <li>ヤコビ行列の逆行列を用いることで、方程式を具体的に解かずとも、陰関数のすべての偏導関数を行列計算で求めることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
