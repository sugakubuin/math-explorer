import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LogarithmicFunction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                指数関数の逆関数として対数関数を定義します。
                複素指数関数が周期性（多対一の性質）を持っていたため、その逆関数である複素対数関数は、一つの入力に対して無限個の出力を持ち得る<strong>多価関数</strong>になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素対数関数の定義</h2>

            <p>
                複素数 <InlineMath math="z \neq 0" /> に対して、<InlineMath math="e^w = z" /> を満たす複素数 <InlineMath math="w" /> を <InlineMath math="\log z" /> と書きます。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (複素対数関数)">
                <p>
                    <InlineMath math="z = r e^{i\theta} \neq 0" /> に対して、対数関数 <InlineMath math="\log z" /> は次のように与えられる：
                    <BlockMath math="\log z = \ln |z| + i (\arg z + 2\pi k) \quad (k \in \mathbb{Z})" />
                </p>
                <p className="mt-4">
                    ここで <InlineMath math="\arg z" /> は偏角の任意の一つの値であり、<InlineMath math="k" /> は任意の整数である。このように無限個の値を取る関数を<strong>多価関数 (multi-valued function)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対数の主値と分枝</h2>

            <p>
                計算を確定的（一価）にするために、偏角の範囲を制限したものを<strong>主値</strong>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.3-2 (対数の主値：Log z)">
                <p>
                    偏角 <InlineMath math="\theta" /> の範囲を <InlineMath math="(-\pi, \pi]" /> に制限したとき、これを<strong>主値 (principal value)</strong> と呼び、記号 <InlineMath math="\text{Log } z" /> で表す：
                    <BlockMath math="\text{Log } z = \ln |z| + i \text{Arg } z \quad (-\pi < \text{Arg } z \le \pi)" />
                </p>
            </ContentBox>

            <ContentBox type="note" title="分枝切断 (Branch Cut)">
                <p>
                    主値 <InlineMath math="\text{Log } z" /> は、<InlineMath math="z" /> が負の実軸をまたぐ瞬間に（虚部が <InlineMath math="\pi" /> から <InlineMath math="-\pi" /> へ）不連続になります。
                    このために設けられる複素平面上の切れ目を<strong>分枝切断 (branch cut)</strong> と呼び、<InlineMath math="\text{Log } z" /> の場合は原点から負の実軸方向（図式的表現）に引かれます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対数関数の微分</h2>

            <ContentBox type="theorem" title="Theorem 3.3-1 (対数値の正則性)">
                <p>
                    主値 <InlineMath math="\text{Log } z" /> は、分枝切断（負の実軸および原点）を除く領域で正則であり、その微分は実関数の場合と同様である：
                    <BlockMath math="\frac{d}{dz} \text{Log } z = \frac{1}{z}" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-1 (具体的な計算)">
                <p>
                    次の値を求めよ（主値を用いる）。
                </p>
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <strong><InlineMath math="\text{Log } 1" /></strong>：
                        <InlineMath math="|1|=1, \text{Arg } 1 = 0" /> より、<InlineMath math="\text{Log } 1 = \ln 1 + i \cdot 0 = 0" />。
                    </li>
                    <li>
                        <strong><InlineMath math="\text{Log } i" /></strong>：
                        <InlineMath math="|i|=1, \text{Arg } i = \pi/2" /> より、<InlineMath math="\text{Log } i = \ln 1 + i \cdot \pi/2 = \frac{\pi}{2} i" />。
                    </li>
                    <li>
                        <strong><InlineMath math="\text{Log } (-1)" /></strong>：
                        <InlineMath math="|-1|=1, \text{Arg } (-1) = \pi" /> より、<InlineMath math="\text{Log } (-1) = \ln 1 + i \cdot \pi = \pi i" />。
                    </li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                    <strong>[注意]</strong> 多価性のため、実数で成り立っていた法則 <InlineMath math="\log(z_1 z_2) = \log z_1 + \log z_2" /> は、一般には「集合としての等号」であり、主値同士では（<InlineMath math="2\pi i" /> の整数倍の差を除いて）成立しない場合があります。
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>多価性</strong>：<InlineMath math="\log z" /> は虚部が <InlineMath math="2\pi" /> の整数倍だけ異なる値の集合である。</li>
                    <li><strong>主値 <InlineMath math="\text{Log } z" /></strong>：偏角を一値に定めることで得られる一価正則関数。</li>
                    <li><strong>分枝切断</strong>：多価関数を一価にするために導入される「切れ目」。この上では連続性が失われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
