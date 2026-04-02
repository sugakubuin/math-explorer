import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function ProjectionOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節の射影定理（直交分解定理）により、任意のベクトル <InlineMath math="\boldsymbol{v}" /> は、ある部分空間 <InlineMath math="W" /> 上の成分 <InlineMath math="\boldsymbol{w}" /> と、その直交補空間 <InlineMath math="W^\perp" /> 上の成分 <InlineMath math="\boldsymbol{w}^\perp" /> に一意に分解できることがわかりました。<br />
                この「ベクトル <InlineMath math="\boldsymbol{v}" /> を入力して、成分 <InlineMath math="\boldsymbol{w}" /> だけを抽出して出力する」という操作そのものを、一つの線形変換（作用素）として定義し、その代数的な性質を調べます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交射影の定義</h2>

            <p>
                直射日光を当てたときに、地面（部分空間 <InlineMath math="W" />）にできる「影」を求める操作であることから、「射影」と呼ばれます。
            </p>

            <ContentBox type="definition" title="Definition 8.5-1 （直交射影作用素 / Orthogonal Projection Operator）">
                <p>
                    内積空間 <InlineMath math="V" /> とその部分空間 <InlineMath math="W" /> を考える。<br />
                    射影定理により、任意の <InlineMath math="\boldsymbol{v} \in V" /> は <InlineMath math="\boldsymbol{v} = \boldsymbol{w} + \boldsymbol{w}^\perp" /> （ただし <InlineMath math="\boldsymbol{w} \in W, \boldsymbol{w}^\perp \in W^\perp" />）と一意に直交分解できる。
                </p>
                <p>
                    このとき、ベクトル <InlineMath math="\boldsymbol{v}" /> に対して、その <InlineMath math="W" /> 成分 <InlineMath math="\boldsymbol{w}" /> を対応させる線形変換 <InlineMath math="P: V \to V" /> を、<strong><InlineMath math="W" /> の上への直交射影（作用素）</strong>と呼ぶ。
                </p>
                <BlockMath math="P(\boldsymbol{v}) = \boldsymbol{w}" />
                <p>
                    （このとき、<InlineMath math="P" /> の像は <InlineMath math="\mathrm{Im}(P) = W" /> であり、核は <InlineMath math="\ker(P) = W^\perp" /> となる。）
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代数的特徴づけ</h2>

            <p>
                ある行列（または線形変換） <InlineMath math="T" /> が与えられたとき、それが「何らかの部分空間への直交射影」になっているかどうかは、その行列自身が持つ <InlineMath math="2" /> つのシンプルな代数的性質によって完全に判定することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.5-1 （射影作用素の特徴づけ）">
                <p>
                    内積空間 <InlineMath math="V" /> 上の線形変換 <InlineMath math="P" /> が「何らかの部分空間への直交射影作用素」であるための必要十分条件は、<InlineMath math="P" /> が以下の2つの条件を両方とも満たすことである。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-3">
                    <li>
                        <strong>べき等性（Idempotence）：</strong><br />
                        <InlineMath math="P^2 = P" /> （2回射影しても、1回射影した結果から変わらない）
                    </li>
                    <li>
                        <strong>自己随伴性（Self-adjointness）：</strong><br />
                        任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対して、<InlineMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, P\boldsymbol{y} \rangle" /><br />
                        （行列表現を用いた場合、エルミート行列 <InlineMath math="P^* = P" /> または実対称行列 <InlineMath math="P^T = P" /> となること）
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ここでは「直交射影ならば、この2条件を満たすこと（必要性）」の証明を行う。
                </p>
                <p className="font-bold">1. べき等性 (<InlineMath math="P^2 = P" />) の証明</p>
                <p>
                    直交射影 <InlineMath math="P" /> によって抽出される成分は、部分空間 <InlineMath math="W" /> 上のベクトル <InlineMath math="\boldsymbol{w}" /> である。<br />
                    ベクトルが最初から <InlineMath math="W" /> の要素であった場合、<InlineMath math="\boldsymbol{w} = \boldsymbol{w} + \boldsymbol{0}" /> （<InlineMath math="\boldsymbol{0} \in W^\perp" />）という直交分解になるため、そこから <InlineMath math="W" /> 成分を取り出すと当然 <InlineMath math="\boldsymbol{w}" /> そのままになる。すなわち、
                </p>
                <BlockMath math="P(\boldsymbol{w}) = \boldsymbol{w} \quad (\text{if } \boldsymbol{w} \in W)" />
                <p>
                    任意の <InlineMath math="\boldsymbol{v} \in V" /> に対して、1回目の射影で <InlineMath math="P(\boldsymbol{v}) = \boldsymbol{w} \in W" /> を得る。これにもう一度 <InlineMath math="P" /> を適用すると、
                </p>
                <BlockMath math="P^2(\boldsymbol{v}) = P(P(\boldsymbol{v})) = P(\boldsymbol{w}) = \boldsymbol{w} = P(\boldsymbol{v})" />
                <p>
                    よって、すべてのベクトルに対して作用が等しいため全体として <InlineMath math="P^2 = P" /> が成り立つ。
                </p>

                <p className="font-bold mt-4">2. 自己随伴性 (<InlineMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, P\boldsymbol{y} \rangle" />) の証明</p>
                <p>
                    任意のベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> を、それぞれ射影定理により <InlineMath math="W" /> 成分と <InlineMath math="W^\perp" /> 成分に分解する。
                </p>
                <BlockMath math="\boldsymbol{x} = \boldsymbol{x}_W + \boldsymbol{x}_{W^\perp}" />
                <BlockMath math="\boldsymbol{y} = \boldsymbol{y}_W + \boldsymbol{y}_{W^\perp}" />
                <p>
                    このとき、<InlineMath math="P\boldsymbol{x} = \boldsymbol{x}_W" /> および <InlineMath math="P\boldsymbol{y} = \boldsymbol{y}_W" /> である。<br />
                    まず左辺 <InlineMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle" /> を計算する。
                </p>
                <BlockMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}_W, \boldsymbol{y}_W + \boldsymbol{y}_{W^\perp} \rangle = \langle \boldsymbol{x}_W, \boldsymbol{y}_W \rangle + \langle \boldsymbol{x}_W, \boldsymbol{y}_{W^\perp} \rangle" />
                <p>
                    ここで、<InlineMath math="\boldsymbol{x}_W \in W" /> と <InlineMath math="\boldsymbol{y}_{W^\perp} \in W^\perp" /> は完全に直交しているため、第2項の内積は <InlineMath math="0" /> となる。よって、
                </p>
                <BlockMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}_W, \boldsymbol{y}_W \rangle" />
                <p>
                    次に右辺 <InlineMath math="\langle \boldsymbol{x}, P\boldsymbol{y} \rangle" /> を計算する。
                </p>
                <BlockMath math="\langle \boldsymbol{x}, P\boldsymbol{y} \rangle = \langle \boldsymbol{x}_W + \boldsymbol{x}_{W^\perp}, \boldsymbol{y}_W \rangle = \langle \boldsymbol{x}_W, \boldsymbol{y}_W \rangle + \langle \boldsymbol{x}_{W^\perp}, \boldsymbol{y}_W \rangle" />
                <p>
                    同様に、<InlineMath math="\boldsymbol{x}_{W^\perp} \in W^\perp" /> と <InlineMath math="\boldsymbol{y}_W \in W" /> は直交しているため第2項は <InlineMath math="0" />。よって、
                </p>
                <BlockMath math="\langle \boldsymbol{x}, P\boldsymbol{y} \rangle = \langle \boldsymbol{x}_W, \boldsymbol{y}_W \rangle" />
                <p>
                    両者が完全に一致したため、<InlineMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, P\boldsymbol{y} \rangle" /> が証明された。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 逆に、この2条件を満たすなら必ずその像空間の上への直交射影になること（十分性）も容易に示せます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§8.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>空間全体からある部分空間上へ、光を当てて影を落とすように成分を抽出する変換を<strong>直交射影</strong>という（Definition 8.5-1）。</li>
                    <li>ある変換が直交射影であるための条件は、何回やっても結果が変わらない（<strong>べき等性 <InlineMath math="P^2 = P" /> </strong>）ことと、内積の対極に移動できる（<strong>自己随伴性 <InlineMath math="P^* = P" /> </strong>）ことの2つに完全に集約される（Theorem 8.5-1）。</li>
                    <li>幾何学的に定義された「射影」という概念が、純粋に代数的な「2つの等式」へと翻訳された瞬間である。内積の世界から作用素（行列そのものの性質）の世界への入り口となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
