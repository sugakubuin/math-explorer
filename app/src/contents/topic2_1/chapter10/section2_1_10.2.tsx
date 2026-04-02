import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function TypesOfAdjointOperators() {
    return (
        <React.Fragment>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
                <p>
                    前節で随伴作用素 <InlineMath math="T^*" /> を定義したことで、「元の変換 <InlineMath math="T" />」と「その随伴 <InlineMath math="T^*" />」の間の関係性によって、作用素をいくつかの特別なクラスに分類することができます。<br />
                    ここでは量子力学や微分方程式などの応用分野で極めて重要な3つのクラスを定義します。
                </p>

                <hr className="my-8 border-slate-200 dark:border-slate-700" />

                <h2 className="text-2xl font-bold mt-8 mb-6">自己随伴・歪自己随伴・ユニタリ作用素</h2>

                <ContentBox type="definition" title="Definition 10.2-1 （自己随伴・歪自己随伴・ユニタリ作用素）">
                    <p>
                        内積空間 <InlineMath math="V" /> 上の線形変換（作用素） <InlineMath math="T" /> に対して、以下のように定義する。
                    </p>
                    <ol className="list-decimal pl-5 mt-2 space-y-4">
                        <li>
                            <strong>自己随伴作用素（Self-adjoint Operator）：</strong><br />
                            <InlineMath math="T" /> と <InlineMath math="T^*" /> が完全に一致する作用素。<br />
                            <BlockMath math="T^* = T" />
                            すなわち、任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> において <InlineMath math="\langle T\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, T\boldsymbol{y} \rangle" /> が成り立つ。<br />
                            <span className="text-sm text-slate-500">※（複素空間上の自己随伴作用素は、物理学等の文脈で「エルミート作用素 / Hermitian Operator」とも呼ばれます。）</span>
                        </li>
                        <li>
                            <strong>歪自己随伴作用素（Skew-adjoint Operator）：</strong><br />
                            随伴をとると符号が反転する作用素。<br />
                            <BlockMath math="T^* = -T" />
                            すなわち、任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> において <InlineMath math="\langle T\boldsymbol{x}, \boldsymbol{y} \rangle = -\langle \boldsymbol{x}, T\boldsymbol{y} \rangle" /> が成り立つ。<br />
                            <span className="text-sm text-slate-500">※（複素空間上では「歪エルミート作用素 / Skew-Hermitian Operator」とも呼ばれます。）</span>
                        </li>
                        <li>
                            <strong>ユニタリ作用素（Unitary Operator・直交作用素 / Orthogonal Operator）：</strong><br />
                            随伴が元の作用素の<strong>逆変換</strong>と一致する作用素。<br />
                            <BlockMath math="T^* T = T T^* = I \quad \iff \quad T^* = T^{-1}" />
                            すなわち、任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> において <InlineMath math="\langle T\boldsymbol{x}, T\boldsymbol{y} \rangle = \langle \boldsymbol{x}, \boldsymbol{y} \rangle" /> が成り立ち、変換によって<strong>内積（長さや角度）を一切変えない（等長変換である）</strong>という特徴を持つ。<br />
                            <span className="text-sm text-slate-500">※（実空間の文脈では「直交作用素」、複素空間の文脈では「ユニタリ作用素」と呼び分けるのが一般的です。）</span>
                        </li>
                    </ol>
                </ContentBox>


                <hr className="my-8 border-slate-200 dark:border-slate-700" />

                <h2 className="text-2xl font-bold mt-8 mb-6">各種作用素と行列表現の具体例</h2>

                <p>
                    これらの抽象的な作用素は、正規直交基底を選んで行列で表現すると、高校数学やこれまでの線形代数で断片的に登場してきた様々な「特定の形をした行列」と完璧に1対1で対応します。
                </p>

                <ContentBox type="example" title="Example 10.2-1 （行列のクラスとの対応）">
                    <p>
                        有限次元内積空間 <InlineMath math="V" /> に正規直交基底を用意し、作用素 <InlineMath math="T" /> の表現行列を <InlineMath math="A" /> とする。<br />
                        前節の通り、行列表現においては <InlineMath math="T^* \iff A^*" /> （実数の場合は <InlineMath math="A^T" />）となるため、次のように対応する。
                    </p>

                    <h3 className="font-bold mt-4 mb-2">1. 自己随伴作用素 (<InlineMath math="T^* = T" />) の場合</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>実空間（<InlineMath math="\mathbb{R}^n" />）：</strong> <InlineMath math="A^T = A" /> を満たす行列。すなわち<strong>対称行列（Symmetric Matrix）</strong>である。</li>
                        <li><strong>複素空間（<InlineMath math="\mathbb{C}^n" />）：</strong> <InlineMath math="A^* = A" /> を満たす行列。すなわち<strong>エルミート行列（Hermitian Matrix）</strong>である。（例：対角成分は必ず実数になる等の性質を持つ。）</li>
                    </ul>

                    <h3 className="font-bold mt-6 mb-2">2. 歪自己随伴作用素 (<InlineMath math="T^* = -T" />) の場合</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>実空間：</strong> <InlineMath math="A^T = -A" /> を満たす行列。すなわち<strong>交代行列・歪対称行列（Skew-symmetric Matrix）</strong>である。（例：対角成分は必ず <InlineMath math="0" /> になる。）</li>
                        <li><strong>複素空間：</strong> <InlineMath math="A^* = -A" /> を満たす行列。すなわち<strong>歪エルミート行列（Skew-Hermitian Matrix）</strong>である。</li>
                    </ul>

                    <h3 className="font-bold mt-6 mb-2">3. ユニタリ作用素 (<InlineMath math="T^* = T^{-1}" />) の場合</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>実空間：</strong> <InlineMath math="A^T = A^{-1}" /> （つまり <InlineMath math="A^T A = I" />）を満たす行列。すなわち<strong>直交行列（Orthogonal Matrix）</strong>である。（例：回転行列や反転行列などの、図形の形を変えない変換の行列。）</li>
                        <li><strong>複素空間：</strong> <InlineMath math="A^* = A^{-1}" /> （つまり <InlineMath math="A^* A = I" />）を満たす行列。すなわち<strong>ユニタリ行列（Unitary Matrix）</strong>である。量子力学において、状態の時間発展は必ずユニタリ行列で記述される。</li>
                    </ul>
                </ContentBox>

                <ContentBox type="remark" title="直交射影との再会">
                    <p>
                        Chapter 8 の §8.5 で証明した「直交射影作用素の特徴づけ（<InlineMath math="P^2 = P" /> かつ <InlineMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, P\boldsymbol{y} \rangle" />）」を思い出してください。<br />
                        後者の条件はまさに「<InlineMath math="P = P^*" />」を意味しています。<br />
                        したがって、新しい言葉を使うと「（部分空間への）直交射影作用素とは、べき等（<InlineMath math="P^2=P" />）な<strong>自己随伴作用素</strong>のことである」と極めてシンプルに言い直すことができるのです。
                    </p>
                </ContentBox>


                {/* まとめ */}
                <ContentBox type="note" title="§10.2 のまとめ">
                    <ul className="list-disc list-inside space-y-1">
                        <li>作用素は、自分自身とその随伴作用素との関係によって分類される（Definition 10.2-1）。</li>
                        <li><InlineMath math="T^* = T" /> となる<strong>自己随伴作用素</strong>は、行列でいう<strong>対称行列・エルミート行列</strong>に対応する。</li>
                        <li><InlineMath math="T^* = -T" /> となる<strong>歪自己随伴作用素</strong>は、行列でいう<strong>交代行列・歪エルミート行列</strong>に対応する。</li>
                        <li><InlineMath math="T^* = T^{-1}" /> となる<strong>ユニタリ作用素</strong>（内積を変えない変換）は、行列でいう<strong>直交行列・ユニタリ行列</strong>に対応する。</li>
                    </ul>
                </ContentBox>
            </div>
        </React.Fragment>
    );
}
