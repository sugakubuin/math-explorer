import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function ChangeOfBasisAndRepresentation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、ベクトル空間に「基底」を一つ固定すれば、線形写像は「表現行列を掛ける」という操作に翻訳できることを見ました。
                では、その<strong>「基底」の選び方を変えたい</strong>ときはどうなるでしょうか。<br />
                視点（基底）を変えると、同じ線形写像であっても表現に使用される行列の成分はガラリと変わります。ここではその変換ルールについて考えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基底変換と表現行列の変換則</h2>

            <p>
                最も重要でよく現れるのは、同じ空間 <InlineMath math="V" /> からそれ自身への線形写像（線形変換といいます）の基底を取り替えるケースです。
            </p>

            <ContentBox type="theorem" title="Theorem 3.5-1 （基底変換に伴う表現行列の変換公式）">
                <p>
                    <InlineMath math="V" /> をベクトル空間とし、<InlineMath math="f: V \to V" /> を線形写像とする。
                    <InlineMath math="V" /> の古い基底を <InlineMath math="E = \{\boldsymbol{e}_1, \dots, \boldsymbol{e}_n\}" />、新しい基底を <InlineMath math="E' = \{\boldsymbol{e}'_1, \dots, \boldsymbol{e}'_n\}" /> とする。
                </p>
                <p>
                    このとき、古い基底から新しい基底への<strong>基底変換行列</strong>を <InlineMath math="P" /> とする（すなわち、新基底のベクトルを旧基底の線形結合で表したときの係数行列）。<br />
                    基底 <InlineMath math="E" /> に関する <InlineMath math="f" /> の表現行列を <InlineMath math="A" />、基底 <InlineMath math="E'" /> に関する表現行列を <InlineMath math="A'" /> とすると、以下の関係が成り立つ。
                </p>
                <BlockMath math="A' = P^{-1} A P" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意のベクトル <InlineMath math="\boldsymbol{x} \in V" /> を考える。
                    古い基底 <InlineMath math="E" /> に関する座標ベクトルを <InlineMath math="\boldsymbol{x}_E" />、新しい基底 <InlineMath math="E'" /> に関する座標ベクトルを <InlineMath math="\boldsymbol{x}_{E'}" /> とすると、これらは基底変換行列 <InlineMath math="P" /> を用いて次のように関係している。
                </p>
                <BlockMath math="\boldsymbol{x}_E = P \boldsymbol{x}_{E'} \quad \dots \text{(1)}" />
                <p>
                    同様に、写像先のベクトル <InlineMath math="f(\boldsymbol{x})" /> の2つの基底による座標ベクトルについても、
                </p>
                <BlockMath math="f(\boldsymbol{x})_E = P f(\boldsymbol{x})_{E'} \quad \dots \text{(2)}" />
                <p>
                    が成り立つ。
                </p>
                <p>
                    一方で、表現行列の定義から、それぞれの基底における座標ベクトルたちは表現行列を介して次のように移り変わるはずである。
                </p>
                <BlockMath math="f(\boldsymbol{x})_E = A \boldsymbol{x}_E \quad \text{および} \quad f(\boldsymbol{x})_{E'} = A' \boldsymbol{x}_{E'}" />
                <p>
                    (2)式の右側の <InlineMath math="f(\boldsymbol{x})_{E'}" /> に <InlineMath math="A' \boldsymbol{x}_{E'}" /> を代入し、左側に <InlineMath math="A \boldsymbol{x}_E" /> を代入すると、
                </p>
                <BlockMath math="A \boldsymbol{x}_E = P (A' \boldsymbol{x}_{E'})" />
                <p>
                    ここで(1)式 <InlineMath math="\boldsymbol{x}_E = P \boldsymbol{x}_{E'}" /> を左辺に代入すると、
                </p>
                <BlockMath math="A (P \boldsymbol{x}_{E'}) = P A' \boldsymbol{x}_{E'}" />
                <p>
                    これがどんな座標ベクトル <InlineMath math="\boldsymbol{x}_{E'}" /> に対しても成り立つためには、行列として一致していなければならない。
                </p>
                <BlockMath math="A P = P A'" />
                <p>
                    基底変換行列 <InlineMath math="P" /> は基底同士の変換であるため必ず正則行列（逆行列を持つ）である。よって両辺の左から <InlineMath math="P^{-1}" /> を掛けると、
                </p>
                <BlockMath math="A' = P^{-1} A P" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">相似変換の幾何学的意味</h2>

            <p>
                行列 <InlineMath math="A" /> に対して正則行列 <InlineMath math="P" /> を用いて <InlineMath math="P^{-1} A P" /> を作る操作を<strong>相似変換（Similarity Transformation）</strong>と呼び、<InlineMath math="A" /> と <InlineMath math="A'" /> は<strong>相似である（Similar）</strong>と言います。
            </p>

            <ContentBox type="remark" title="相似変換の意味する「視点の変更」">
                <p>
                    <InlineMath math="P^{-1} A P" /> という積の順番を解読すると、その意味が鮮明に浮かび上がります。<br />
                    行列を右から（先に）掛ける順に読んでいきましょう。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>ステップ1：<InlineMath math="P" /> を掛ける</strong><br />
                        新しい基底（<InlineMath math="E'" />）での座標を一旦古い基底（<InlineMath math="E" />）での座標に<strong>「翻訳」</strong>します。
                    </li>
                    <li>
                        <strong>ステップ2：<InlineMath math="A" /> を掛ける</strong><br />
                        古い基底の世界の中で、線形写像 <InlineMath math="f" /> による変換を<strong>「実行」</strong>します。
                    </li>
                    <li>
                        <strong>ステップ3：<InlineMath math="P^{-1}" /> を掛ける</strong><br />
                        変換後の結果を、再び新しい基底（<InlineMath math="E'" />）での座標に<strong>「翻訳し直す」</strong>。
                    </li>
                </ul>
                <p className="mt-4">
                    つまり、相似関係にある2つの行列 <InlineMath math="A" /> と <InlineMath math="P^{-1}AP" /> は、「本質的には全く同じ空間の歪め方（線形写像）」を行っているにすぎません。
                    <strong>単に見ている「座標軸（基底）」が違うだけ</strong>なのです。<br />
                    この事実は、後に学ぶ「行列の対角化（行列を最もシンプルに見える基底へ取り替えること）」の最大の動機となります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>線形写像の表現行列は基底の取り方によって姿を変える（Theorem 3.5-1）。</li>
                    <li>新しい基底での表現行列は、元の表現行列を基底変換行列で挟んだ <InlineMath math="P^{-1} A P" /> で与えられる（相似変換）。</li>
                    <li>相似な行列同士は、本質的に「同じ線形写像」を表しており、単に「見る角度（基底）」が違うだけである（Remark）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
