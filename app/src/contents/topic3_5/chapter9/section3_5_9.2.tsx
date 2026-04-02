import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EllipticRegularity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                楕円型方程式（ラプラス方程式など）の最も際立った特徴は、解の「正則性（滑らかさ）」が極めて高いことです。
                §9.1 で定義した弱解が、実は非常に滑らかな古典解と一致することを保証するのが<b>正則性理論</b>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内部正則性の主張</h2>

            <p className="leading-relaxed">
                右辺の強制項（ソース）が滑らかであれば、それに応じて解の滑らかさも向上します。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-1 (内部正則性定理)">
                <p>
                    領域 <InlineMath math="\Omega" /> 上でポアソン方程式 <InlineMath math="\Delta u = f" /> の弱解 <InlineMath math="u" /> を考える。
                    もし強制項 <InlineMath math="f" /> が <InlineMath math="C^k(\Omega)" /> 級であれば、弱解 <InlineMath math="u" /> は領域の各点で <InlineMath math="C^{k+2}(\Omega)" /> 級となる。
                    特に <InlineMath math="f" /> が無限回微分可能（または解析的）であれば、解 <InlineMath math="u" /> も無限回微分可能（または解析的）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    証明の核となるのは、<b>差分商</b>を用いたエネルギー評価と<b>ブートストラップ</b>（靴紐を持ち上げて自分自身を持ち上げる）と呼ばれる手法である。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        <b>差分商の推定</b>：微分の近似である差分商をテスト関数として弱形式に代入し、解がもう一階分だけ広いソボレフ空間（<InlineMath math="H^2" /> など）に属することを示す。
                    </li>
                    <li>
                        <b>ブートストラップ</b>：向上した滑らかさを利用して再び推定を行うことで、さらに高い階数の微分可能性を順次導き出す。
                    </li>
                </ol>
                <p>
                    このプロセスを繰り返すことで、<InlineMath math="f" /> の滑らかさに応じた階数まで <InlineMath math="u" /> の正則性が「持ち上げ」られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 9.2-1 (正則性の向上の確認)">
                <p>
                    <b>1. ラプラス方程式</b>：<InlineMath math="\Delta u = 0" />（すなわち <InlineMath math="f=0" />）の場合、<InlineMath math="f" /> は任意の <InlineMath math="k" /> に対して <InlineMath math="C^k" /> 級（解析的）である。
                    定理より、解 <InlineMath math="u" /> も解析的となる。これは §8.1 で見た調和関数の解析性と一致する。
                </p>
                <p>
                    <b>2. 不連続なソース</b>：もし <InlineMath math="f" /> が不連続（<InlineMath math="L^2" /> 級）であれば、解 <InlineMath math="u" /> は <InlineMath math="f" /> よりも 2 階分だけ滑らかな空間（<InlineMath math="H^2" /> 級）に属する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">境界正則性</h2>

            <p className="leading-relaxed">
                領域の内部だけでなく、境界付近での解の滑らかさは、境界の形状に強く依存します。
            </p>

            <ContentBox type="remark" title="境界正則性と特異性">
                <p>
                    境界 <InlineMath math="\partial \Omega" /> が滑らかであれば、解は境界まで含めて滑らか（<InlineMath math="C^{k+2}(\bar{\Omega})" />）になる。
                    しかし、境界に尖った「角（コーナー）」や切れ込みがある場合、そこで微分の値が無限大に発散するなどの<b>角の特異性</b>が生じることがある。
                    これは工学的な亀裂進展解析（破壊力学）において、応力集中を計算する際の物理的に極めて重要な現象である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                内部正則性は楕円型方程式特有の強力な性質であり、これにより弱解の理論を安心して古典的な議論に接続することができます。
                次節では、より一般的な線形 PDE 全体に対して、解析的データがあれば必ず局所解が存在することを保証する「コーシー・コワレフスカヤの定理」について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>楕円型方程式の解は、右辺のソース項 <InlineMath math="f" /> よりも 2 階分だけ高い滑らかさを持つ。</li>
                    <li>弱解の理論（§9.1）で定義された解も、内部では極めて滑らかな古典解であることが保証される。</li>
                    <li>この「滑らかさの向上」は、差分商とブートストラップ推定によって証明される。</li>
                    <li>境界付近の滑らかさは、領域の幾何学的形状（境界の滑らかさ）に依存し、角の特異性などが生じる場合がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
