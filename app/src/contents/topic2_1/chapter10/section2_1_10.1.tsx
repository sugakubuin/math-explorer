import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function AdjointOperatorDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                行列の世界で私たちが頻繁に用いる「転置（Transpose）」操作は、抽象的なベクトル空間と線形変換（作用素）の世界ではどのように解釈されるのでしょうか。<br />
                内積空間という舞台が整ったことで、この対応関係を「随伴作用素（Adjoint Operator）」という形で厳密に定義することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">随伴作用素の定義</h2>

            <p>
                随伴作用素は、「内積の右側と左側で線形変換を移動させるとき、代償として変換自体がどう変化するか」を定義するものです。
            </p>

            <ContentBox type="definition" title={<>Definition 10.1-1 （随伴作用素 / Adjoint Operator <InlineMath math="T^*" />）</>}>
                <p>
                    <InlineMath math="V" /> を（実または複素）内積空間とし、<InlineMath math="T: V \to V" /> を線形変換（作用素）とする。<br />
                    このとき、<strong>すべての</strong> <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対して次の関係式を満たすような線形変換 <InlineMath math="T^*: V \to V" /> がもし存在すれば、それを <InlineMath math="T" /> の<strong>随伴作用素（Adjoint Operator）</strong>と呼ぶ。
                </p>
                <BlockMath math="\langle T(\boldsymbol{x}), \boldsymbol{y} \rangle = \langle \boldsymbol{x}, T^*(\boldsymbol{y}) \rangle \quad \left( \text{または } \langle T\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, T^*\boldsymbol{y} \rangle \right)" />
                <p className="mt-2 text-sm text-slate-500">
                    ※ 数学分野（特に関数解析や量子力学など）によっては <InlineMath math="T^\dagger" /> （ダガー）という記号が使われることもあります。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 10.1-1 （随伴作用素の存在と一意性）">
                <p>
                    <InlineMath math="V" /> が<strong>有限次元</strong>の内積空間であるとき、任意の線形変換 <InlineMath math="T" /> に対して、その随伴作用素 <InlineMath math="T^*" /> は<strong>必ずただ一つだけ存在する。</strong>
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (Outline)">
                <p>
                    （リースの表現定理を用いた標準的な証明の骨格を示す。）
                </p>
                <p>
                    任意の固定された <InlineMath math="\boldsymbol{y} \in V" /> に対して、関数 <InlineMath math="f_{\boldsymbol{y}}(\boldsymbol{x}) = \langle T\boldsymbol{x}, \boldsymbol{y} \rangle" /> を考える。<br />
                    内積の第一引数に関する線形性から、この関数 <InlineMath math="f_{\boldsymbol{y}}" /> は <InlineMath math="V" /> 上の線形汎関数（ベクトルを入力してスカラーを返す線形写像）である。<br />
                    有限次元内積空間において「リースの表現定理（Riesz Representation Theorem）」より、任意の線形汎関数 <InlineMath math="f" /> は、ある一意のベクトル <InlineMath math="\boldsymbol{w} \in V" /> を用いて <InlineMath math="f(\boldsymbol{x}) = \langle \boldsymbol{x}, \boldsymbol{w} \rangle" /> と表現できる。<br />
                </p>
                <p>
                    この定理を <InlineMath math="f_{\boldsymbol{y}}" /> に適用すると、
                </p>
                <BlockMath math="\langle T\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, \boldsymbol{w} \rangle" />
                <p>
                    となるような一意のベクトル <InlineMath math="\boldsymbol{w}" /> が存在する。<br />
                    この <InlineMath math="\boldsymbol{w}" /> は明らかに最初の <InlineMath math="\boldsymbol{y}" /> の選び方に依存するため、<InlineMath math="\boldsymbol{y}" /> を <InlineMath math="\boldsymbol{w}" /> に対応させる写像を <InlineMath math="T^*" /> と定義する（すなわち <InlineMath math="\boldsymbol{w} = T^*\boldsymbol{y}" />）。
                </p>
                <BlockMath math="\langle T\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, T^*\boldsymbol{y} \rangle" />
                <p>
                    あとは、この対応 <InlineMath math="T^*" /> が線形性（<InlineMath math="T^*(\boldsymbol{y}_1 + \boldsymbol{y}_2) = T^*\boldsymbol{y}_1 + T^*\boldsymbol{y}_2" /> および <InlineMath math="T^*(c\boldsymbol{y}) = cT^*\boldsymbol{y}" />）を満たすことを、内積の性質（第二引数に関する加法性と共役線形性）から確認すれば証明完了となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列表現と共役転置</h2>

            <p>
                線形代数では「選んだ基底」によって抽象的な作用素を具体的な行列計算に落とし込むことができました。<br />
                正規直交基底を選んだ場合、随伴作用素 <InlineMath math="T^*" /> の行列表現は、元の行列の「転置」や「共役転置」と完全に一致します。
            </p>

            <ContentBox type="remark" title="行列表現における転置・共役転置との対応">
                <p>
                    有限次元内積空間 <InlineMath math="V" /> に<strong>正規直交基底</strong> <InlineMath math="\beta" /> を一つ固定する。<br />
                    線形変換 <InlineMath math="T" /> の、この基底に関する表現行列を <InlineMath math="A = [T]_\beta" /> とする。
                </p>
                <p>
                    このとき、随伴作用素 <InlineMath math="T^*" /> の同じ基底に関する表現行列 <InlineMath math="[T^*]_\beta" /> は次のようになる。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-3">
                    <li>
                        <strong>実内積空間の場合：</strong><br />
                        <InlineMath math="T^*" /> の表現行列は、<InlineMath math="A" /> の<strong>転置行列 <InlineMath math="A^T" /></strong> となる。
                        <BlockMath math="[T^*]_\beta = A^T" />
                        （ベクトルを列ベクトルで書き、標準内積 <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = \boldsymbol{x}^T \boldsymbol{y}" /> で考えれば、<InlineMath math="(A\boldsymbol{x})^T \boldsymbol{y} = \boldsymbol{x}^T (A^T \boldsymbol{y})" /> となり、内積の反対側に行列を移動させると転置がつくことと一致します。）
                    </li>
                    <li>
                        <strong>複素内積空間の場合：</strong><br />
                        <InlineMath math="T^*" /> の表現行列は、<InlineMath math="A" /> の各成分の複素共役をとってから転置した<strong>共役転置行列 <InlineMath math="A^*" /> （または <InlineMath math="A^\dagger, A^H" />）</strong>となる。
                        <BlockMath math="[T^*]_\beta = A^* = \overline{A}^T" />
                        （複素内積 <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = \boldsymbol{x}^* \boldsymbol{y}" /> の場合、<InlineMath math="(A\boldsymbol{x})^* \boldsymbol{y} = \boldsymbol{x}^* A^* \boldsymbol{y} = \boldsymbol{x}^* (A^* \boldsymbol{y})" /> となり、やはり整合します。）
                    </li>
                </ul>
                <p className="mt-4 font-bold text-red-600 dark:text-red-400">
                    注意：
                </p>
                <p>
                    この美しい対応関係が成り立つのは、<strong>「正規直交基底」を選んだ場合のみ</strong>です。<br />
                    斜交座標（直交していない、長さが1でない基底）における表現行列では、随伴作用素の行列は単純な転置にはなりません。これが、正規直交基底が線形代数において圧倒的に「扱いやすい」とされる最大の理由の一つです。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§10.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>内積の左側（または右側）にかかっている作用素を、内積値を保ったまま反対側へ移動させたときに得られる作用素を<strong>随伴作用素</strong> <InlineMath math="T^*" /> という（Definition 10.1-1）。</li>
                    <li>有限次元空間であれば、随伴作用素は必ずただ一つ存在する（Theorem 10.1-1）。</li>
                    <li>正規直交基底を選んで行列で表現した場合、随伴作用素 <InlineMath math="T^*" /> は、元の行列の<strong>転置行列 <InlineMath math="A^T" /></strong>（複素数の場合は<strong>共役転置行列 <InlineMath math="A^*" /></strong>）に完全に一致する。</li>
                </ul>
            </ContentBox>
        </section >
    );
}
