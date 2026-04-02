import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GeneralDefinitionOfConditionalExpectation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                初等的な条件付き期待値は、特定の値 <InlineMath math="Y=y" /> を条件とするものでした。
                しかし、確率過程やより高度な議論においては、得られた「情報そのもの」を条件として扱いたい場合があります。
                本節では、情報の集合体である σ-加法族（σ-algebra）を条件とする、測度論的な一般的定義とその存在性について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般定義と存在定理</h2>

            <p className="leading-relaxed">
                部分 σ-加法族 <InlineMath math="\mathcal{G}" /> を、「現在私たちが持っている情報の範囲」と解釈します。この情報のみを用いて <InlineMath math="X" /> を評価する関数を定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (条件付き期待値の一般定義)">
                <p>
                    確率空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> 上の可積分な確率変数 <InlineMath math="X" /> と、
                    部分 σ-加法族 <InlineMath math="\mathcal{G} \subset \mathcal{F}" /> に対し、
                    次の 2 条件を満たす確率変数 <InlineMath math="Z" /> を、<InlineMath math="X" /> の <InlineMath math="\mathcal{G}" /> に関する<b>条件付き期待値</b>といい、<InlineMath math="E[X \mid \mathcal{G}]" /> と記す：
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="Z" /> は <InlineMath math="\mathcal{G}" />-可測である。</li>
                    <li>任意の <InlineMath math="G \in \mathcal{G}" /> に対し、<BlockMath math="\int_G Z dP = \int_G X dP" />（積分の一致条件）が成り立つ。</li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed">
                この定義は、一見すると抽象的ですが、<InlineMath math="\mathcal{G}" /> という情報の範囲内で <InlineMath math="X" /> が持つ「平均的な振る舞い」を抽出していることに他なりません。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (存在と a.s. 一意性)">
                <p>
                    <InlineMath math="X \in L^1" /> であれば、条件付き期待値 <InlineMath math="E[X \mid \mathcal{G}]" /> は、確率 1（a.s.）で一意に存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ラドン・ニコディム定理を用いて証明する。
                    <InlineMath math="\mathcal{G}" /> 上の符号付き測度 <InlineMath math="\nu" /> を <InlineMath math="\nu(G) = \int_G X dP" />（<InlineMath math="G \in \mathcal{G}" />）で定義する。
                    このとき、<InlineMath math="\nu" /> は <InlineMath math="P" />（を <InlineMath math="\mathcal{G}" /> に制限したもの）に対して絶対連続（<InlineMath math="\nu \ll P|_\mathcal{G}" />）である。
                    したがって、ラドン・ニコディム定理より、
                    <BlockMath math="\nu(G) = \int_G Z dP" />
                    を満たす <InlineMath math="\mathcal{G}" />-可測関数 <InlineMath math="Z" /> が a.s. 一意に存在する。
                    この <InlineMath math="Z" /> が求める条件付き期待値である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                また、2 乗可積分（<InlineMath math="L^2" />）の範囲内では、条件付き期待値はヒルベルト空間における射影として捉えることができます。
            </p>

            <ContentBox type="remark" title="L2 空間における射影解釈">
                <p>
                    <InlineMath math="X \in L^2" /> のとき、<InlineMath math="E[X \mid \mathcal{G}]" /> は、
                    ヒルベルト空間 <InlineMath math="L^2(\Omega, \mathcal{F}, P)" /> の部分空間 <InlineMath math="L^2(\Omega, \mathcal{G}, P)" /> への<b>直交射影</b>に一致します。
                </p>
                <p>
                    直感的には、<InlineMath math="E[X \mid \mathcal{G}]" /> は「情報 <InlineMath math="\mathcal{G}" /> のみを用いた <InlineMath math="X" /> の最良線形予測（平均二乗誤差を最小にする推定量）」であることを意味しており、
                    幾何学的な視点と確率論的な予測の視点を結びつける重要な結節点となっています。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように一般的・測度論的に定義された条件付き期待値は、従来の期待値と同様、あるいはそれ以上に豊かな数学的性質を備えています。
                次節では、計算において不可欠となるそれらの性質を詳しく見ていきましょう。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>一般的定義では、σ-加法族を「利用可能な情報」として条件付ける。</li>
                    <li>条件付き期待値は、情報の範囲内での「可測性」と「積分の一致」によって一意に決まる。</li>
                    <li>その存在はラドン・ニコディム定理によって保証され、<InlineMath math="L^2" /> 空間では直交射影として解釈される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
