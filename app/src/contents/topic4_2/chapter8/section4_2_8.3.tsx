import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DifferentialsAndCanonicalDivisor() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                リーマン-ロッホの定理を完成させるためには、もう一つの主役が必要です。それは単なる関数ではなく、「積分される対象」としての微分形式です。微分形式の零点と極の配置から定まる「標準除数」が、リーマン面の幾何学的な「歪み（種数）」を代数的な次元計算に繋ぐ役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン面上の微分形式</h2>

            <p>
                複素平面上での積分 <InlineMath math="\int f(z) dz" /> に現れる <InlineMath math="f(z) dz" /> を、座標変換に対して不変な幾何学的対象として定式化します。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.3-1 (<b>有理型1-形式</b>)</span>}>
                <p>
                    リーマン面 <InlineMath math="S" /> 上の<b>有理型1-形式（Meromorphic 1-form）</b> <InlineMath math="\omega" /> とは、各局所チャート <InlineMath math="(U, z)" /> において
                </p>
                <BlockMath math="\omega = f(z) \, dz" />
                <p>
                    の形で表される形式的な対象であり、<InlineMath math="f(z)" /> は <InlineMath math="U" /> 上の有理型関数である。
                </p>
                <p>
                    さらに、別の局所チャート <InlineMath math="(V, w)" /> で <InlineMath math="\omega = g(w) \, dw" /> と表示されているとき、重なり <InlineMath math="U \cap V" /> 上で座標変換則
                </p>
                <BlockMath math="f(z(w)) \frac{dz}{dw} = g(w)" />
                <p>
                    が成り立つものとする。この変換則により、<InlineMath math="\omega" /> の値そのものは座標に依存せずに等角不変な積分を定義できる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.3-1">
                <p>
                    リーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> 上で、最も単純に見える 1-形式 <InlineMath math="\omega = dz" /> を考えましょう。複素平面 <InlineMath math="\mathbb{C}" /> の部分（<InlineMath math="z" /> 座標）では、<InlineMath math="f(z) = 1" /> なので極や零点はありません。
                </p>
                <p>
                    では、無限遠点 <InlineMath math="\infty" /> 付近ではどうなっているでしょうか。無限遠の局所座標 <InlineMath math="w = 1/z" /> を用いて変換を調べます。<InlineMath math="z = 1/w" /> を微分すると、
                </p>
                <BlockMath math="dz = d\left(\frac{1}{w}\right) = -\frac{1}{w^2} dw" />
                <p>
                    となります。したがって、<InlineMath math="\infty" />（すなわち <InlineMath math="w = 0" />）においては、<InlineMath math="g(w) = -1/w^2" /> と表示されるため、<InlineMath math="\omega = dz" /> は <InlineMath math="\infty" /> に「2位の極」を持つことになります。
                </p>
            </ContentBox>

            <p>
                微分形式に対しても、関数と同様に零点や極の重複度から除数を定義することができます。変換則 <InlineMath math="g(w) = f(z(w)) z'(w)" /> において座標変換 <InlineMath math="z(w)" /> は双正則であり微分 <InlineMath math="z'(w)" /> は決して <InlineMath math="0" /> にならないため、点における極や零点の位数は表示するチャートの取り方に依存せず定まります。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.3-2 (<b>微分形式の除数</b>)</span>}>
                <p>
                    有理型1-形式 <InlineMath math="\omega" /> に対して、上述のようにして決まる点 <InlineMath math="p" /> での極や零点の位数を <InlineMath math="\mathrm{ord}_p(\omega)" /> とする。このとき、<InlineMath math="\omega" /> に付随する除数を次のように定義する。
                </p>
                <BlockMath math="(\omega) = \sum_{p \in S} \mathrm{ord}_p(\omega) \cdot p" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">標準除数と正則1-形式</h2>

            <p>
                リーマン面上のすべての有理型1-形式の除数は、ある一つの強力な「線形同値類」を形成します。
            </p>

            <ContentBox type="definition" title={<span>Definition 8.3-3 (<b>標準除数</b>)</span>}>
                <p>
                    コンパクトリーマン面上に勝手な（恒等的に <InlineMath math="0" /> でない）有理型1-形式 <InlineMath math="\omega" /> を一つ固定し、その除数 <InlineMath math="K = (\omega)" /> を<b>標準除数（Canonical divisor）</b>と呼ぶ。
                </p>
                <p>
                    もし別の1-形式 <InlineMath math="\eta" /> を取ったとしても、それらの比 <InlineMath math="\eta / \omega" /> は大域的に定義された有理型関数 <InlineMath math="f" /> となる。したがって <InlineMath math="(\eta) = (\omega) + (f)" /> より、任意の1-形式の除数はすべて <InlineMath math="K" /> と線形同値になる。
                </p>
            </ContentBox>

            <p>
                有理型関数の主除数の絶対的な次数は常に <InlineMath math="0" /> でしたが、標準除数 <InlineMath math="K" /> の次数は <InlineMath math="0" /> ではなく、リーマン面の「位相的複雑さ」である種数に完全に依存します。
            </p>

            <ContentBox type="theorem" title="Theorem 8.3-1">
                <p>
                    種数 <InlineMath math="g" /> のコンパクトリーマン面における標準除数 <InlineMath math="K" /> の次数は、常に次式で与えられる。
                </p>
                <BlockMath math="\deg K = 2g - 2" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）任意のコンパクトリーマン面は、リーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> への枝分かれ（分枝）を持つ被覆写像（正則写像） <InlineMath math="f: S \to \hat{\mathbb{C}}" /> として実現できる。
                </p>
                <p>
                    リーマン球面上の1-形式 <InlineMath math="dz" /> を <InlineMath math="f" /> によって引き戻した1-形式 <InlineMath math="f^*(dz) = d(f)" /> の除数を考える。<InlineMath math="dz" /> が <InlineMath math="\infty" /> に2位の極を持つことと、<InlineMath math="f" /> の各分枝点における「曲がり具合（分枝指数）」から生じる零点の補正を足し合わせると、<InlineMath math="d(f)" /> の除数の次数に関する等式が得られる。
                </p>
                <p>
                    一方、第3章（§3.5）で学んだリーマン-ハーヴィッツの公式は、種数 <InlineMath math="g" /> と分枝指数の和をまさに結びつけるものであった。これら2つの等式を比較することで、結果的に <InlineMath math="\deg(d(f)) = 2g - 2" /> であることが（引き戻し写像の次数 <InlineMath math="n" /> の部分が見事に相殺されて）証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.3-2">
                <p>
                    リーマン球面（種数 <InlineMath math="g=0" />）の場合を確かめてみましょう。公式によれば <InlineMath math="\deg K = 2(0) - 2 = -2" /> となるはずです。
                </p>
                <p>
                    Example 8.3-1 で見たように、<InlineMath math="\omega = dz" /> の除数は <InlineMath math="-2 \cdot \infty" /> でした。その次数は確かに <InlineMath math="-2" /> であり、公式と完全に一致しています。負の次数を持つということは、リーマン球面上には「極を一つも持たない正則な 1-形式は存在しない」ことを意味しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.3-3">
                <p>
                    種数 <InlineMath math="g=1" /> のトーラス（楕円曲線）の場合、公式によれば <InlineMath math="\deg K = 2(1) - 2 = 0" /> となります。
                </p>
                <p>
                    トーラスは複素平面を格子 <InlineMath math="\Lambda" /> で割った商空間 <InlineMath math="\mathbb{C}/\Lambda" /> として構成できます。平面上の定数形式 <InlineMath math="dz" /> は平行移動に対して不変（<InlineMath math="d(z+\lambda) = dz" />）なので、そのままトーラス上の1-形式として降りてきます。
                </p>
                <p>
                    この <InlineMath math="dz" /> は全平面で零点も極も持たないので、その除数は <InlineMath math="0" />（すべての係数が <InlineMath math="0" />）です。次数 <InlineMath math="0" /> であることがここでも確認できます。種数1の空間では、どこにも極も零点も持たない「正則1-形式」がちょうど定数倍の1次元分存在します（つまり <InlineMath math="l(K) = 1" />）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ポアンカレ-ホップの定理との関連">
                <p>
                    <InlineMath math="\deg K = 2g - 2" /> は、位相幾何学においてベクトル場の「特異点の指数の和」がオイラー標数 <InlineMath math="\chi = 2 - 2g" /> に等しいとするポアンカレ-ホップの定理の複素解析版とみなすことができます。ベクトル場と1-形式は双対な関係にあるため、符合が逆転して <InlineMath math="-\chi = 2g - 2" /> となっているのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有理型1-形式は、局所的に <InlineMath math="f(z)dz" /> と書ける不変な積分要素である。変換により <InlineMath math="dz" /> 自体が極や零点を生むことがある。</li>
                    <li>任意の1-形式の除数を標準除数 <InlineMath math="K" /> と呼ぶ。すべての1-形式の除数は互いに線形同値であるため、線形系の枠組みで一つの代表として扱える。</li>
                    <li>標準除数の次数はリーマン面の種数のみに依存し、<InlineMath math="\deg K = 2g - 2" /> で与えられる。これにより、位相構造と代数構造が直結する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
