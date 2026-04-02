import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JordanDecomposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだハーン分解は、全空間を集合として分割するものでした。
                これを測度そのもののレベルでの分割へと昇華させたものが、本節のテーマである <b>ジョルダン分解</b> です。
                これにより、任意の符号付き測度は「二つの非負測度の差」として一意に表現できるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジョルダン分解定理</h2>

            <p>
                ハーン分解によって得られた正集合と負集合を利用して、符号付き測度の「正の部分」と「負の部分」を独立した測度として定義します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (ジョルダン分解定理)">
                <p>
                    <InlineMath math="\nu" /> を符号付き測度とする。このとき、互いに <b>特異 (singular)</b> な二つの非負測度 <InlineMath math="\nu^+" /> と <InlineMath math="\nu^-" /> が一意に存在して、次のように書ける：
                    <BlockMath math="\nu = \nu^+ - \nu^-" />
                    ここで、<InlineMath math="\nu^+" /> を <b>正変動 (positive variation)</b>、<InlineMath math="\nu^-" /> を <b>負変動 (negative variation)</b> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="(P, N)" /> を <InlineMath math="\nu" /> のハーン分解とする。
                    任意の可測集合 <InlineMath math="A \in \mathcal{A}" /> に対して
                    <BlockMath math="\nu^+(A) = \nu(A \cap P), \quad \nu^-(A) = -\nu(A \cap N)" />
                    と定義する。
                    <InlineMath math="P \cup N = X" /> であるから、<InlineMath math="\nu(A) = \nu(A \cap P) + \nu(A \cap N) = \nu^+(A) - \nu^-(A)" /> が成り立つ。
                    また、<InlineMath math="\nu^+" /> は <InlineMath math="N" /> 上で 0、<InlineMath math="\nu^-" /> は <InlineMath math="P" /> 上で 0 であるから、両者は互いに特異である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全変動測度</h2>

            <p>
                符号を無視した「大きさの合計」を測るための指標を導入します。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 (全変動測度)">
                <p>
                    <BlockMath math="|\nu| = \nu^+ + \nu^-" />
                    を、符号付き測度 <InlineMath math="\nu" /> の <b>全変動測度 (total variation measure)</b> と呼ぶ。
                    全変動測度は通常の（非負の）測度である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-1 (関数の積分の場合)">
                <p>
                    <InlineMath math="\nu(A) = \int_A f \, d\mu" /> の場合、その変動は：
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><InlineMath math="\nu^+(A) = \int_A f^+ \, d\mu" /> （<InlineMath math="f^+ = \max(f, 0)" />）</li>
                        <li><InlineMath math="\nu^-(A) = \int_A f^- \, d\mu" /> （<InlineMath math="f^- = \max(-f, 0)" />）</li>
                        <li><InlineMath math="|\nu|(A) = \int_A |f| \, d\mu" /></li>
                    </ul>
                </p>
            </ContentBox>

            <ContentBox type="remark" title="有限性と可測空間の構造">
                <p>
                    符号付き測度は有限（全変動が有限）である必要はありませんが、少なくとも <InlineMath math="\nu^+" /> か <InlineMath math="\nu^-" /> の一方は有限であることが定義から導かれます（定義 7.1-1 の 1. を参照）。
                    これにより、測度論の様々な定理を符号付き測度へ拡張することが可能になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ジョルダン分解</b> は、符号付き測度を二つの特異な非負測度の差として分解する。</li>
                    <li>分解された成分は一意であり、それぞれ正の成分と負の成分を代表する。</li>
                    <li><b>全変動測度</b> は、符号を考慮しない絶対的な測度量を提供する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
