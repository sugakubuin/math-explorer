import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionFundamentalGroupOfCircle() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ここからは、基本群の最初の本格的な計算例として「円周の基本群」を求めます。この計算には、後の章で詳しく学ぶ「被覆空間」のアイデアが非常に有効に働きます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">被覆写像の予告と持ち上げ</h2>

            <p className="leading-relaxed">
                円周 <InlineMath math="S^1" /> を直感的に理解する良い方法は、無限に長いらせん階段（実数直線 <InlineMath math="\mathbb{R}" />）を上から射影して円周に巻き付けるモデルを考えることです。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.1-1 (指数写像)"
            >
                <p>
                    写像 <InlineMath math="p : \mathbb{R} \to S^1" /> を
                    <BlockMath math="p(t) = e^{2\pi i t} = (\cos 2\pi t, \sin 2\pi t)" />
                    で定める。これは連続写像であり、<InlineMath math="\mathbb{R}" /> を <InlineMath math="S^1" /> の上に無限回巻き付ける写像である。
                </p>
                <p>
                    （※このような局所的な同相写像を<strong>被覆写像</strong>と呼び、<InlineMath math="\mathbb{R}" /> は <InlineMath math="S^1" /> の<strong>普遍被覆空間</strong>である。詳細は Chapter 6 および 7 で扱うが、ここでは単に「展開図」として用いる。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                <InlineMath math="S^1" /> 上のループは、この「展開図」である <InlineMath math="\mathbb{R}" /> の上に連続的に持ち上げることができます。
            </p>

            <ContentBox
                type="lemma"
                title="Lemma 3.1-1 (ループの持ち上げ)"
            >
                <p>
                    <InlineMath math="\gamma : [0,1] \to S^1" /> を基点 <InlineMath math="1 \in S^1" /> をもつループ（<InlineMath math="\gamma(0) = \gamma(1) = 1" />）とする。
                </p>
                <p>
                    このとき、連続な道 <InlineMath math="\tilde{\gamma} : [0,1] \to \mathbb{R}" /> であって、
                    <BlockMath math="p \circ \tilde{\gamma} = \gamma \quad \text{かつ} \quad \tilde{\gamma}(0) = 0" />
                    を満たすものがただ一つ存在する。この <InlineMath math="\tilde{\gamma}" /> を <InlineMath math="\gamma" /> の<strong>持ち上げ（lift）</strong>という。
                </p>
                <p>
                    このとき、<InlineMath math="p(\tilde{\gamma}(1)) = \gamma(1) = 1" /> であるから、終点 <InlineMath math="\tilde{\gamma}(1)" /> は必ず整数となる。この整数 <InlineMath math="\tilde{\gamma}(1) \in \mathbb{Z}" /> をループ <InlineMath math="\gamma" /> の<strong>巻き数（winding number）</strong>という。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    連続写像の持ち上げの存在と一意性についての厳密な証明は、Chapter 6（§6.2）で行う。
                </p>
                <p>
                    直感的には、<InlineMath math="\gamma(t)" /> は <InlineMath math="S^1" /> 上を連続に動く点であり、それを「らせん階段」である <InlineMath math="\mathbb{R}" /> 上で、原点 <InlineMath math="0" /> から出発して追跡する（巻き戻す）ことを意味する。<InlineMath math="\gamma(t)" /> が少しだけ動いたとき、<InlineMath math="\tilde{\gamma}(t)" /> もそれに対応して（ジャンプすることなく）少しだけ動くため、軌跡は一意に定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-1 (持ち上げの具体例)"
            >
                <p>
                    ループ <InlineMath math="\gamma_n(t) = e^{2\pi i n t}" />（<InlineMath math="n \in \mathbb{Z}, t \in [0,1]" />）を考える。これは円周を反時計回りに <InlineMath math="n" /> 周するループである（<InlineMath math="n < 0" /> の場合は時計回り）。
                </p>
                <p>
                    このループの持ち上げは、定義を満たすように <InlineMath math="\tilde{\gamma}_n(t) = nt" /> となる。
                    実際、<InlineMath math="p(\tilde{\gamma}_n(t)) = e^{2\pi i (nt)} = \gamma_n(t)" /> であり、<InlineMath math="\tilde{\gamma}_n(0) = 0" /> である。
                </p>
                <p>
                    このとき、終点は <InlineMath math="\tilde{\gamma}_n(1) = n" /> であり、これが巻き数と一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">基本群の計算</h2>

            <p className="leading-relaxed">
                持ち上げによる「巻き数」が、まさに <InlineMath math="S^1" /> の基本群の元を分類する完全な不変量になります。
            </p>

            <ContentBox
                type="theorem"
                title={<span>Theorem 3.1-1 (<InlineMath math="\pi_1(S^1, 1) \cong \mathbb{Z}" />)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> の基本群は整数群 <InlineMath math="\mathbb{Z}" /> と同型である。具体的には、写像
                    <BlockMath math="\Phi : \pi_1(S^1, 1) \to \mathbb{Z}, \quad \Phi([\gamma]) = \tilde{\gamma}(1)" />
                    が群同型写像を与える。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>well-definedness：</strong><br />
                    <InlineMath math="\gamma \simeq_p \gamma'" />（道ホモトピック）であるとする。このホモトピー <InlineMath math="H(t, s)" /> 全体を <InlineMath math="\mathbb{R}" /> に持ち上げると（ホモトピーの持ち上げ定理、§6.2）、持ち上げられたホモトピー <InlineMath math="\tilde{H}(t, s)" /> が得られる。端点 <InlineMath math="\tilde{H}(1, s)" /> は <InlineMath math="s" /> について連続な <InlineMath math="\mathbb{Z}" /> 値関数となるが、<InlineMath math="\mathbb{Z}" /> は離散的であるため一定でなければならない。よって <InlineMath math="\tilde{\gamma}(1) = \tilde{\gamma}'(1)" /> である。
                </p>
                <p>
                    <strong>準同型性：</strong><br />
                    ループ <InlineMath math="\alpha, \beta" /> に対して、結合 <InlineMath math="\alpha * \beta" /> の持ち上げは、前半は <InlineMath math="\tilde{\alpha}" />、後半は <InlineMath math="\tilde{\beta}" /> を <InlineMath math="\tilde{\alpha}(1)" /> だけ平行移動させたものになる。したがって、終点は <InlineMath math="\tilde{\alpha}(1) + \tilde{\beta}(1)" /> となり、<InlineMath math="\Phi([\alpha * \beta]) = \Phi([\alpha]) + \Phi([\beta])" /> を満たす。
                </p>
                <p>
                    <strong>全単射性：</strong><br />
                    全射性は、任意の <InlineMath math="n \in \mathbb{Z}" /> に対して Example 3.1-1 の <InlineMath math="\gamma_n" /> が <InlineMath math="\Phi([\gamma_n]) = n" /> を満たすことからわかる。
                    単射性については、<InlineMath math="\Phi([\gamma]) = 0" /> ならば <InlineMath math="\tilde{\gamma}(1) = 0" /> であり、<InlineMath math="\tilde{\gamma}" /> は <InlineMath math="\mathbb{R}" /> 上のループとなる。<InlineMath math="\mathbb{R}" /> は可縮なので <InlineMath math="\tilde{\gamma} \simeq_p c_0" /> であり、これを <InlineMath math="p" /> で下に射影すれば <InlineMath math="\gamma \simeq_p c_1" /> となり、<InlineMath math="[\gamma]" /> が単位元であることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-2 (ループの積の計算)"
            >
                <p>
                    <InlineMath math="m" /> 回転するループ <InlineMath math="\gamma_m" /> と <InlineMath math="n" /> 回転するループ <InlineMath math="\gamma_n" /> の基本群における積を考える。
                </p>
                <p>
                    <InlineMath math="[\gamma_m] \cdot [\gamma_n]" /> は、まず <InlineMath math="m" /> 回回ってから次に <InlineMath math="n" /> 回回るループであるため、直感通り <InlineMath math="m+n" /> 回回るループ <InlineMath math="[\gamma_{m+n}]" /> にホモトピックとなる。同型写像 <InlineMath math="\Phi" /> を通して見れば、
                    <BlockMath math="\Phi([\gamma_m * \gamma_n]) = m + n" />
                    であり、これは整数の加法構造と完全に一致している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>円周 <InlineMath math="S^1" /> を直線の巻き付け（指数写像 <InlineMath math="p: \mathbb{R} \to S^1" />）とみなすことで、ループを <InlineMath math="\mathbb{R}" /> 上の道に持ち上げることができる。</li>
                    <li>持ち上げられた道の終点の値（整数）を<strong>巻き数</strong>という。</li>
                    <li>円周の基本群は、この巻き数を対応させる写像によって <InlineMath math="\mathbb{Z}" /> と群同型になる（<InlineMath math="\pi_1(S^1) \cong \mathbb{Z}" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
