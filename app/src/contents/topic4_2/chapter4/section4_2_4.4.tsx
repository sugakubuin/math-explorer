import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RiemannMappingTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析における等角写像の究極の到達点と呼べるのが、本節で学ぶ「リーマンの写像定理」です。この定理は、「穴がなく、全平面ではない」いかなる形の領域であっても、ただの丸い「単位円板」に双正則かつ等角に変形できるという、極めて衝撃的な事実を告げています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の主張と証明</h2>

            <p>
                まずは定理の主張を正確に確認しましょう。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 4.4-1 (リーマンの写像定理)</span>}>
                <p>
                    <InlineMath math="D" /> を、複素平面 <InlineMath math="\mathbb{C}" /> の単連結な開集合（穴のない領域）とする。ただし、<InlineMath math="D" /> は <InlineMath math="\mathbb{C}" /> 全体とは一致しない「真の」部分領域であるとする（<InlineMath math="D \subsetneq \mathbb{C}" />）。
                </p>
                <p>
                    このとき、<InlineMath math="D" /> から単位円板 <InlineMath math="\mathbb{D} = \{w \mid |w| < 1\}" /> への<b>双正則同値写像（全単射な正則関数）</b>が必ず存在する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="D ≠ ℂ の理由">
                <p>
                    もし領域 <InlineMath math="D" /> が複素平面全体 <InlineMath math="\mathbb{C}" /> だった場合、<InlineMath math="\mathbb{C}" /> から単位円板 <InlineMath math="\mathbb{D}" /> への正則写像 <InlineMath math="f" /> は「全領域で正則（整関数）かつ有界（<InlineMath math="|f(z)| < 1" />）」となります。するとリューヴィルの定理により、<InlineMath math="f" /> は定数関数に限られてしまい、全単射（１対１）の対応を作ることができなくなります。これが <InlineMath math="D" /> が <InlineMath math="\mathbb{C}" /> 全体では成り立たない理由です。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-1">
                <p>
                    定理の実例を確認します。<InlineMath math="D" /> として、上半平面 <InlineMath math="\mathbb{H} = \{z \mid \text{Im}(z) > 0\}" /> を選びます。上半平面は穴がないため単連結であり、全平面ではありません。
                </p>
                <p>
                    このとき、§4.2 で登場したメビウス変換
                </p>
                <BlockMath math="f(z) = \frac{z - i}{z + i}" />
                <p>
                    は、上半平面をスッポリと単位円板 <InlineMath math="\mathbb{D}" /> に移し、逆写像も存在するため双正則です。正方形であろうと、星形であろうと、ぐにゃぐにゃのアメーバのような形であろうと（穴さえなければ）、論理的には必ずこのような等角な変換関数が存在するというのがリーマンの写像定理です。
                </p>
            </ContentBox>

            <p>
                この強力な定理の証明の中核には、前節の「モンテルの定理」を用いた最大値問題を解くという変分法的なアイディアが使われます。
            </p>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    <InlineMath math="D" /> は <InlineMath math="\mathbb{C}" /> ではなく単連結であるため、外部に点を持つ。これを利用して、対数の分枝を考えることで、<InlineMath math="D" /> はあらかじめ単位円板 <InlineMath math="\mathbb{D}" /> の一部へと単射正則に写されると仮定してよい（前処理）。
                </p>
                <p>
                    <InlineMath math="D" /> 内に基準点 <InlineMath math="z_0" /> を固定する。<InlineMath math="D" /> から <InlineMath math="\mathbb{D}" /> への単射な正則写像で、<InlineMath math="f(z_0) = 0" /> かつ 微分係数が正の実数 <InlineMath math="f'(z_0) > 0" /> となるような関数の集まり（族） <InlineMath math="\mathcal{F}" /> を考える。<InlineMath math="\mathcal{F}" /> は空ではない。
                </p>
                <p>
                    これらの関数はすべて値域が単位円盤内にあるため、<InlineMath math="|f(z)| < 1" /> （一様有界）を満たす。したがって、モンテルの定理により <InlineMath math="\mathcal{F}" /> は正規族となる。
                </p>
                <p>
                    この正規族 <InlineMath math="\mathcal{F}" /> の中で、<b>原点における微分（倍率） <InlineMath math="f'(z_0)" /> が最大となるような極大関数 <InlineMath math="F" /> </b>が必ず存在することを、正規族の収束性を用いて証明できる。
                </p>
                <p>
                    最後に、「この最大化関数 <InlineMath math="F" /> が全射（<InlineMath math="\mathbb{D}" /> を完全に覆い尽くしている）であること」を背理法で示す。もし <InlineMath math="F(D)" /> が取りこぼしている点 <InlineMath math="w_0 \in \mathbb{D}" /> があれば、その点を避けることを利用して（平方根関数の分枝をとる等して）元の <InlineMath math="F" /> よりも <InlineMath math="z_0" /> での微分の値 <InlineMath math="|f'(z_0)|" /> をさらに大きくする別の関数 <InlineMath math="G \in \mathcal{F}" /> を組み立てることができてしまい、<InlineMath math="F" /> が最大であることに矛盾する。
                </p>
                <p>
                    したがって、極大化関数 <InlineMath math="F" /> は全単射となり、求める双正則同値写像であることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一意性と正規化</h2>

            <p>
                写像が存在することはわかりましたが、それはただ一つに決まるのでしょうか？実は、少しだけ「固定」をしてあげると、変換は完全に一意に定まります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.4-1 (一意性)">
                <p>
                    定理の条件を満たす単連結領域 <InlineMath math="D" /> に対し、固定した点 <InlineMath math="z_0 \in D" /> について
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="f(z_0) = 0" /> （基準点が円の中心に行く）</li>
                    <li><InlineMath math="f'(z_0) > 0" /> かつ実数 （基準点での回転をしない）</li>
                </ol>
                <p>
                    という<b>正規化条件（normalization condition）</b>を課すと、これらを満たす <InlineMath math="D" /> から <InlineMath math="\mathbb{D}" /> への双正則写像 <InlineMath math="f" /> は<b>ただ一つ（一意に）</b>存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮に条件を満たす写像 <InlineMath math="f" /> と <InlineMath math="g" /> の2つが存在したとする。このとき、合成写像 <InlineMath math="h = g \circ f^{-1}" /> を考える。
                </p>
                <p>
                    <InlineMath math="f" /> は <InlineMath math="D" /> を <InlineMath math="\mathbb{D}" /> に写し、<InlineMath math="g" /> もそうであるため、<InlineMath math="h" /> は単位円板 <InlineMath math="\mathbb{D}" /> から単位円板 <InlineMath math="\mathbb{D}" /> への全単射な自己正則写像（自己同型）である。
                </p>
                <p>
                    さらに、条件 1 より <InlineMath math="h(0) = g(f^{-1}(0)) = g(z_0) = 0" />。原点を原点に移す <InlineMath math="\mathbb{D}" /> の自己同型は、シュワルツの補題の等号成立条件より単なる回転 <InlineMath math="h(w) = e^{i\theta}w" /> に限られる。
                </p>
                <p>
                    微分を計算すると、条件 2 より
                </p>
                <BlockMath math="h'(0) = g'(z_0) \cdot (f^{-1})'(0) = \frac{g'(z_0)}{f'(z_0)}" />
                <p>
                    であり、<InlineMath math="f'(z_0) > 0, g'(z_0) > 0" /> なので <InlineMath math="h'(0)" /> は正の実数でなくてはならない。一方で <InlineMath math="h(w) = e^{i\theta}w" /> の微分は <InlineMath math="e^{i\theta}" /> であり、これが正の実数になる条件は <InlineMath math="\theta = 0" />（すなわち <InlineMath math="e^{i\theta}=1" />）のみである。
                </p>
                <p>
                    よって <InlineMath math="h(w) = w" /> （恒等写像）となり、<InlineMath math="g \circ f^{-1} = \text{id}" /> すなわち <InlineMath math="f = g" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-2">
                <p>
                    帯状の領域 <InlineMath math="D = \{z \mid 0 < \text{Im}(z) < \pi\}" /> から <InlineMath math="\mathbb{D}" /> への写像を具体的に構成します。
                </p>
                <p>
                    手順1：まず、指数関数 <InlineMath math="z \mapsto e^z" /> を適用します。<InlineMath math="z = x + iy" /> （<InlineMath math="0 < y < \pi" />）のとき、<InlineMath math="e^z" /> の偏角は <InlineMath math="0" /> から <InlineMath math="\pi" /> なので、この帯は<b>上半平面 <InlineMath math="\mathbb{H}" /></b> へと写されます。
                </p>
                <p>
                    手順2：上半平面 <InlineMath math="\mathbb{H}" /> から単位円板 <InlineMath math="\mathbb{D}" /> へは、先ほどのメビウス変換 <InlineMath math="w \mapsto (w - i)/(w + i)" /> を使います。
                </p>
                <p>
                    これらを合成した <InlineMath math="\displaystyle f(z) = \frac{e^z - i}{e^z + i}" /> こそが、無限に続く帯状領域を、有限の丸い円板内部へとピタリと収める等角写像です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>単連結でかつ全平面ではない任意の複素領域は、必ず単位円板と双正則同値である（リーマンの写像定理）。</li>
                    <li>証明には「モンテルの定理（正規族）」を用いて、微分が最大となるような正則関数を探し出す手法が使われる。</li>
                    <li>原点の対応とそこでの微分の方向（正の実数）を固定することで、この写像は一意に定まる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
