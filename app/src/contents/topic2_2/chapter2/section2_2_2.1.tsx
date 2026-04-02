import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RolleTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                第1章で <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法による極限・連続性・微分可能性の厳密な定義を学びました。
                本章では、それらの道具を用いて微分学の中心的な定理群である<strong>平均値の定理</strong>を証明していきます。
                まず出発点として、ロルの定理を証明し、その仮定の重要性を確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極値の必要条件</h2>

            <ContentBox type="theorem" title="Theorem 2.1-1 (内点における極値の必要条件：f'(c) = 0)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が開区間 <InlineMath math="(a, b)" /> に含まれる点 <InlineMath math="c" /> で極値（極大値または極小値）をとり、かつ <InlineMath math="f" /> が <InlineMath math="c" /> で微分可能であるとする。
                    このとき、
                </p>
                <BlockMath math="f'(c) = 0" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="f" /> が <InlineMath math="c" /> で極大値をとる場合を示す（極小の場合も同様）。
                    極大の定義より、ある <InlineMath math="\delta > 0" /> が存在して、
                </p>
                <BlockMath math="|x - c| < \delta \implies f(x) \leq f(c)" />
                <p className="leading-relaxed">
                    すなわち <InlineMath math="f(x) - f(c) \leq 0" /> が <InlineMath math="c" /> の近くで成り立つ。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="f" /> は <InlineMath math="c" /> で微分可能なので、導関数の定義から右側極限と左側極限を考える。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>右側（<InlineMath math="h > 0" />）：</strong>
                </p>
                <BlockMath math="\frac{f(c + h) - f(c)}{h} \leq 0 \quad (\text{分子} \leq 0, \text{分母} > 0)" />
                <p className="leading-relaxed">
                    よって <InlineMath math="\lim_{h \to 0+} \frac{f(c+h) - f(c)}{h} \leq 0" /> である。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>左側（<InlineMath math="h < 0" />）：</strong>
                </p>
                <BlockMath math="\frac{f(c + h) - f(c)}{h} \geq 0 \quad (\text{分子} \leq 0, \text{分母} < 0)" />
                <p className="leading-relaxed">
                    よって <InlineMath math="\lim_{h \to 0-} \frac{f(c+h) - f(c)}{h} \geq 0" /> である。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="f" /> が <InlineMath math="c" /> で微分可能であるから、左側極限と右側極限は等しく <InlineMath math="f'(c)" /> に一致する。
                    したがって <InlineMath math="f'(c) \leq 0" /> かつ <InlineMath math="f'(c) \geq 0" /> であり、<InlineMath math="f'(c) = 0" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この「極値での導関数がゼロ」という必要条件は、初等的な微分法でも用いられるおなじみの結果ですが、その証明を厳密に書くと上のようになります。
                右側極限と左側極限からの「はさみうち」構造が鍵です。
            </p>
            <p className="mt-2">
                この補題を踏まえて、いよいよ本章の主役であるロルの定理を証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ロルの定理</h2>

            <ContentBox type="theorem" title="Theorem 2.1-2 (ロルの定理)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が次の3条件を満たすとする。
                </p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li><InlineMath math="f" /> は閉区間 <InlineMath math="[a, b]" /> 上で連続</li>
                    <li><InlineMath math="f" /> は開区間 <InlineMath math="(a, b)" /> 上で微分可能</li>
                    <li><InlineMath math="f(a) = f(b)" /></li>
                </ol>
                <p className="leading-relaxed mt-2">
                    このとき、ある <InlineMath math="c \in (a, b)" /> が存在して <InlineMath math="f'(c) = 0" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="f" /> は閉区間 <InlineMath math="[a, b]" /> 上の連続関数であるから、最大値・最小値の定理（ワイエルシュトラスの定理）より、<InlineMath math="f" /> は <InlineMath math="[a, b]" /> 上で最大値 <InlineMath math="M" /> と最小値 <InlineMath math="m" /> をとる。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>場合1：</strong> <InlineMath math="M = m" /> の場合。<InlineMath math="f" /> は <InlineMath math="[a, b]" /> 上で定数関数であるから、
                    任意の <InlineMath math="c \in (a, b)" /> で <InlineMath math="f'(c) = 0" /> である。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>場合2：</strong> <InlineMath math="M > m" /> の場合。
                    <InlineMath math="f(a) = f(b)" /> なので、最大値 <InlineMath math="M" /> と最小値 <InlineMath math="m" /> の少なくとも一方は端点 <InlineMath math="a, b" /> 以外の点で達成される。
                    すなわち、ある <InlineMath math="c \in (a, b)" /> で <InlineMath math="f" /> が極値をとる。
                    <InlineMath math="f" /> は <InlineMath math="(a, b)" /> 上で微分可能であるから、Theorem 2.1-1 より <InlineMath math="f'(c) = 0" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ロルの定理の証明は、「最大値・最小値の定理（ワイエルシュトラスの定理）」と Theorem 2.1-1 を組み合わせた美しい論証でした。
                この定理の3つの仮定はすべて本質的であり、いずれか1つでも欠けると定理は成り立たなくなります。
                それを反例で確認しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">仮定の重要性</h2>

            <ContentBox type="remark" title="ロルの定理の各仮定を外した反例">
                <p className="leading-relaxed">
                    ロルの定理の3つの仮定はすべて本質的であり、いずれか1つでも欠けると定理は成り立ちません。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">仮定1を外した場合（閉区間上の連続性の欠如）</h3>
                <p className="leading-relaxed">
                    <InlineMath math="[0, 1]" /> 上で
                </p>
                <BlockMath math="f(x) = \begin{cases} x & (0 \leq x < 1) \\ 0 & (x = 1) \end{cases}" />
                <p className="leading-relaxed">
                    と定義する。<InlineMath math="f(0) = f(1) = 0" /> であり <InlineMath math="(0, 1)" /> 上で微分可能（<InlineMath math="f'(x) = 1 \neq 0" />）だが、<InlineMath math="f" /> は <InlineMath math="x = 1" /> で不連続であるため、<InlineMath math="f'(c) = 0" /> となる <InlineMath math="c" /> は存在しない。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">仮定2を外した場合（開区間上の微分可能性の欠如）</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) = |x|" /> を <InlineMath math="[-1, 1]" /> 上で考える。<InlineMath math="f(-1) = f(1) = 1" /> であり <InlineMath math="f" /> は連続だが、<InlineMath math="x = 0" /> で微分不可能。
                    実際に <InlineMath math="f'(x) = 1" /> (<InlineMath math="x > 0" />) または <InlineMath math="f'(x) = -1" /> (<InlineMath math="x < 0" />) であり、<InlineMath math="f'(c) = 0" /> となる <InlineMath math="c \in (-1, 1)" /> は存在しない。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">仮定3を外した場合（端点の値の不一致）</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) = x" /> を <InlineMath math="[0, 1]" /> 上で考える。<InlineMath math="f(0) = 0 \neq 1 = f(1)" /> であり、<InlineMath math="f'(x) = 1 \neq 0" /> であるから、<InlineMath math="f'(c) = 0" /> となる <InlineMath math="c" /> は存在しない。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>微分可能な点で極値をとるならば <InlineMath math="f'(c) = 0" /> である（Theorem 2.1-1）。</li>
                    <li>ロルの定理：閉区間連続、開区間微分可能、端点の値が等しいとき、<InlineMath math="f'(c) = 0" /> となる内点 <InlineMath math="c" /> が存在する（Theorem 2.1-2）。</li>
                    <li>3つの仮定（連続性、微分可能性、端点条件）はすべて本質的であり、反例で確認できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
