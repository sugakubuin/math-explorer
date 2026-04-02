import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LusinsTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                可測関数は、連続関数よりはるかに広い対象を含みます。
                しかし、エゴロフの定理が「概収束はほぼ一様収束」であることを示したように、<b>ルジンの定理</b>は「可測関数はほぼ連続関数」であることを示します。
                この定理は、抽象的な可測関数の世界と、より具体的な位相的（連続的）な世界を繋ぐ重要な架け橋となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルジンの定理</h2>

            <ContentBox type="theorem" title="Theorem 2.6-1 (ルジンの定理)">
                <p>
                    <InlineMath math="(X, \mathcal{A}, \mu)" /> をラドン測度空間（例：実数直線上のルベーグ測度）とし、<InlineMath math="f : X \to \mathbb{R}" /> を可測関数とする。
                    このとき、任意の <InlineMath math="\varepsilon > 0" /> に対して、以下の条件を満たす閉集合 <InlineMath math="F \subset X" /> が存在する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="\mu(X \setminus F) < \varepsilon" /></li>
                    <li>制限された関数 <InlineMath math="f|_F" /> は連続である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 2.6-1 (複雑な関数の連続化)">
                <p>
                    <InlineMath math="[0, 1]" /> 上の関数 <InlineMath math="f" /> を、有理数上で 1、無理数上で 0 と定義する（ディリクレ関数）。この関数は至る所不連続です。
                </p>
                <p className="mt-4">
                    しかし、ルジンの定理によれば、任意の <InlineMath math="\varepsilon" /> に対し、測度 <InlineMath math="\varepsilon" /> 未満の集合を除けば連続になります。
                    実際、測度 0 の有理数集合 <InlineMath math="\mathbb{Q}" /> を含む小さな開集合を除いた閉集合 <InlineMath math="F" /> 上では、<InlineMath math="f" /> は定数 0 となり、連続関数となります。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ここでは <InlineMath math="f" /> が単関数の場合から段階的に示す。
                </p>
                <p className="mt-4">
                    1. <b>特性関数 <InlineMath math="\mathbf{1}_A" /> の場合</b>:<br />
                    ラドン測度の正則性により、任意の可測集合 <InlineMath math="A" /> に対して、内側から近似する閉集合 <InlineMath math="F_1 \subset A" /> と外側から近似する開集合 <InlineMath math="G \supset A" /> が存在し、<InlineMath math="\mu(G \setminus F_1) < \varepsilon" /> とできる。
                    <InlineMath math="F_2 = G^c" /> （これも閉集合）とおき、<InlineMath math="F = F_1 \cup F_2" /> とすると、<InlineMath math="\mu(X \setminus F) = \mu(G \setminus F_1) < \varepsilon" /> である。
                    この <InlineMath math="F" /> 上で、<InlineMath math="\mathbf{1}_A" /> は <InlineMath math="F_1" /> 上で 1、<InlineMath math="F_2" /> 上で 0 となり、<InlineMath math="F_1 \cap F_2 = \emptyset" /> であるため連続である。
                </p>
                <p className="mt-4">
                    2. <b>単関数の場合</b>:<br />
                    単関数 <InlineMath math="s = \sum c_j \mathbf{1}_{A_j}" /> に対して、各 <InlineMath math="A_j" /> を閉集合 <InlineMath math="F_j" /> で近似し、それらの和集合上で連続になるように構成できる。
                    例外集合の測度の和を <InlineMath math="\varepsilon" /> 以下に抑えれば、単関数に対しても定理が成り立つ。
                </p>
                <p className="mt-4">
                    3. <b>一般の可測関数の場合</b>:<br />
                    可測関数 <InlineMath math="f" /> は単関数列 <InlineMath math="s_n" /> で一様収束（あるいは a.e. 収束）するように近似できる。
                    エゴロフの定理（Theorem 2.5-1）を適用して一様収束する集合を選び、同時に各単関数を連続にする集合を選ぶことで、「連続関数の等程度連続な列」または「一様収束する連続関数列」を構成できる。
                    一様収束の極限は連続性を保つため、最終的に構成された集合上で <InlineMath math="f" /> は連続となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="定理の直感的な意味：ディリクレ関数の例">
                <p>
                    有理数上で 1、無理数上で 0 をとる<b>ディリクレ関数</b>は、至る所不連続です。
                    しかし、測度 0 の有理数集合を「少しの例外」として削れば、残りの無理数集合の上では定数 0 であり、完全に連続な関数になります。
                    ルジンの定理は、この直感が、どんなに複雑な可測関数に対しても正しいことを保証しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ルジンの定理</b>は、可測関数を「ほとんど連続」なものとして扱えることを示す。</li>
                    <li>ラドン測度の<b>正則性</b>（閉集合による内側からの近似）が証明の鍵となる。</li>
                    <li>「非常に複雑に見える関数も、ごく一部を無視すれば連続関数の世界に持ち込める」という解析学的な自由度を象徴する定理である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
