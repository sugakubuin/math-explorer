import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DivergenceTheoremStatement() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ガウスの発散定理」は、3 次元空間における積分定理の中でも最も強力で、物理学への応用範囲が広い定理の一つです。
                これは、ある閉領域内部で発生した「湧き出し」の総量が、その領域の表面を通り抜けて出ていく「総量（流束）」に等しいことを主張しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガウスの発散定理</h2>

            <p>
                定理の主張を厳密に述べます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (ガウスの発散定理)">
                <p>
                    境界曲面 <InlineMath math="\partial V" /> を持つ有界閉領域 <InlineMath math="V" /> において、 <InlineMath math="C^1" /> 級のベクトル場 <InlineMath math="\mathbf{F}" /> が定義されているとき、次の等号が成り立つ：
                    <BlockMath math="\oiint_{\partial V} \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\text{div}\, \mathbf{F})\, dV" />
                    ここで <InlineMath math="\partial V" /> には<strong>外向き</strong>法線ベクトルを用いた向きが付けられているものとする。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="直感的な理解">
                <p>
                    左辺は、領域の境界から正味でどれだけベクトル場の「流れ」が逃げ出しているか（流束）を表します。
                    右辺は、領域内の各点での「湧き出し」（発散）をすべて足し合わせたものです。
                    「中で湧き出したものは、必ず外へ逃げていく」という保存則的なイメージで捉えることができます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例：球領域での確認</h2>

            <ContentBox type="example" title="Example 6.1-1 (定理の確認)">
                <p>
                    放射状のベクトル場 <InlineMath math="\mathbf{F} = (x, y, z)" /> について、半径 <InlineMath math="R" /> の球 <InlineMath math="V: x^2 + y^2 + z^2 \le R^2" /> で両辺を計算します。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-4">
                    <div>
                        <strong>(1) 右辺（体積分）</strong>：
                        <InlineMath math="\text{div}\, \mathbf{F} = 1 + 1 + 1 = 3" /> なので、
                        <BlockMath math="\begin{aligned} \iiint_V 3\, dV &= 3 \times (\text{球の体積}) \\ &= 3 \times \left( \frac{4}{3}\pi R^3 \right) = 4\pi R^3 \end{aligned}" />
                    </div>
                    <div>
                        <strong>(2) 左辺（面積分）</strong>：
                        §5.4 の Example 5.4-2 で計算した通り、球面の外向きフラックスは、
                        <BlockMath math="\oiint_{\partial V} \mathbf{F} \cdot d\mathbf{S} = 4\pi R^3" />
                        となります。
                    </div>
                </div>
                <p className="mt-4">
                    確かに両辺が一致することが確認できました。この例からも、複雑な面積分を、発散計算を伴う単純な体積分に変換できる発散定理の強力さが分かります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>発散定理</strong>：閉曲面上の面積分を内部の空間積分に変換する。</li>
                    <li><strong>符号の注意</strong>：法線ベクトルは必ず「領域の外側」を向いていなければならない。</li>
                    <li><strong>重要性</strong>：局所的な特性（発散）から全体的な特性（流束）を導き出すベクトル解析の柱。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
