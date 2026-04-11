import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ThetaFunctionBasicProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節ではヤコビのテータ関数を導入し、その絶対かつ一様な収束性を確認しました。本節では、テータ関数の最も本質的な性質である「準周期性（擬周期性）」と、複素平面上における零点の位置について詳しく調べます。これらの性質は、テータ関数を用いて楕円関数を構成する際の基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">準周期性</h2>

            <p>
                テータ関数は完全な二重周期関数（すなわち楕円関数）ではありませんが、周期方向に変数をずらしたときに特定の因子が掛かるという「準周期性」を持っています。まずは代表的な <InlineMath math="\theta_3" /> について、この性質を確認しましょう。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 6.2-1 (<InlineMath math="\theta_3" /> の準周期性)</span>}>
                <p>
                    テータ関数 <InlineMath math="\theta_3(z|\tau)" /> は以下の性質を満たす。
                </p>
                <ul>
                    <li>
                        <InlineMath math="\pi" />-周期性: <InlineMath math="\theta_3(z+\pi|\tau) = \theta_3(z|\tau)" />
                    </li>
                    <li>
                        <InlineMath math="\pi\tau" />-方向の擬周期性: <InlineMath math="\theta_3(z+\pi\tau|\tau) = q^{-1}e^{-2iz}\theta_3(z|\tau)" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定義式 <InlineMath math="\theta_3(z|\tau) = \sum_{n=-\infty}^\infty q^{n^2}e^{2niz}" /> を用いて計算する。
                    まず、<InlineMath math="z \mapsto z+\pi" /> のシフトを考える。
                </p>
                <BlockMath math="\theta_3(z+\pi|\tau) = \sum_{n=-\infty}^\infty q^{n^2}e^{2ni(z+\pi)} = \sum_{n=-\infty}^\infty q^{n^2}e^{2niz}e^{2\pi in}" />
                <p>
                    <InlineMath math="e^{2\pi in} = 1" /> であるから、これは <InlineMath math="\theta_3(z|\tau)" /> に一致する。
                </p>
                <p>
                    次に、<InlineMath math="z \mapsto z+\pi\tau" /> のシフトを考える。<InlineMath math="q = e^{i\pi\tau}" /> に注意すると、
                </p>
                <BlockMath math="\begin{aligned} \theta_3(z+\pi\tau|\tau) &= \sum_{n=-\infty}^\infty q^{n^2}e^{2ni(z+\pi\tau)} \\ &= \sum_{n=-\infty}^\infty q^{n^2}e^{2niz}q^{2n} \\ &= \sum_{n=-\infty}^\infty q^{n^2+2n}e^{2niz} \end{aligned}" />
                <p>
                    ここで <InlineMath math="n^2+2n = (n+1)^2 - 1" /> と変形し、和の添字を <InlineMath math="m = n+1" /> と付け替えると、
                </p>
                <BlockMath math="\begin{aligned} \theta_3(z+\pi\tau|\tau) &= \sum_{m=-\infty}^\infty q^{m^2-1}e^{2(m-1)iz} \\ &= q^{-1}e^{-2iz} \sum_{m=-\infty}^\infty q^{m^2}e^{2miz} \\ &= q^{-1}e^{-2iz}\theta_3(z|\tau) \end{aligned}" />
                <p>
                    となり、証明が完了する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このように、完全な周期関数ではないものの、極めて規則的な振る舞いを示します。他の3つのテータ関数についても、定義式における変数のシフトや符号の反転を用いることで、同様の準周期性を導くことができます。
            </p>

            <ContentBox type="example" title="Example 6.2-1">
                <p>
                    <InlineMath math="\theta_1" /> の準周期性を確認する。
                </p>
                <BlockMath math="\begin{aligned} \theta_1(z+\pi) &= -\theta_1(z) \\ \theta_1(z+\pi\tau) &= -q^{-1}e^{-2iz}\theta_1(z) \end{aligned}" />
                <p>
                    <InlineMath math="\theta_1" /> は奇関数であることと組み合わせて、これらの性質はテータ関数による楕円関数の構成において重要な役割を果たす。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">零点の位置</h2>

            <p>
                楕円関数をテータ関数の商として構成するためには、テータ関数の零点の位置を正確に把握しておく必要があります。整関数であるテータ関数の零点の個数と位置は、複素解析における偏角の原理と準周期性を用いることで完全に決定できます。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 6.2-2 (<InlineMath math="\theta_1" /> の零点)</span>}>
                <p>
                    <InlineMath math="\theta_1(z|\tau)" /> の零点は <InlineMath math="z = m\pi + n\pi\tau" /> （<InlineMath math="m, n \in \mathbb{Z}" />）であり、これらはすべて1位の零点である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    基本周期平行四辺形 <InlineMath math="P = \{ t\pi + s\pi\tau \mid 0 \leq t, s < 1 \}" /> の境界を <InlineMath math="\partial P" /> とする。
                    <InlineMath math="\theta_1" /> の準周期性より、
                </p>
                <BlockMath math="\frac{\theta_1'(z+\pi)}{\theta_1(z+\pi)} = \frac{\theta_1'(z)}{\theta_1(z)}, \quad \frac{\theta_1'(z+\pi\tau)}{\theta_1(z+\pi\tau)} = -2i + \frac{\theta_1'(z)}{\theta_1(z)}" />
                <p>
                    偏角の原理を用いて、<InlineMath math="P" /> 内の零点の個数 <InlineMath math="N" /> を計算する。
                </p>
                <BlockMath math="N = \frac{1}{2\pi i} \oint_{\partial P} \frac{\theta_1'(z)}{\theta_1(z)} dz"
                />
                <p>
                    対辺同士の積分を組み合わせると、<InlineMath math="\pi" /> 方向のシフトの寄与は打ち消し合い、<InlineMath math="\pi\tau" /> 方向のシフトの寄与として定数項 <InlineMath math="-2i" /> の積分が残る。
                </p>
                <BlockMath math="N = \frac{1}{2\pi i} \int_0^\pi (-(-2i)) dz = \frac{1}{2\pi i} (2i\pi) = 1"
                />
                <p>
                    したがって、基本平行四辺形内に零点はちょうど1つ（重複度込みで）存在する。
                    一方、<InlineMath math="\theta_1(z)" /> は奇関数であるから <InlineMath math="\theta_1(0) = 0" /> である。よって <InlineMath math="z=0" /> がその唯一の零点であり、1位である。
                    準周期性より、零点は格子 <InlineMath math="\pi\mathbb{Z} + \pi\tau\mathbb{Z}" /> の点全体となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                <InlineMath math="\theta_1" /> 以外のテータ関数は、<InlineMath math="\theta_1" /> の変数を半周期だけずらしたものとして定義されているため、零点の位置もそれに応じて平行移動します。
            </p>

            <ContentBox type="example" title="Example 6.2-2">
                <p>
                    各テータ関数の基本平行四辺形内（<InlineMath math="\bmod \pi\mathbb{Z} + \pi\tau\mathbb{Z}" />）の零点の位置を整理する。
                </p>
                <ul>
                    <li>
                        <InlineMath math="\theta_1" /> の零点: <InlineMath math="0" />
                    </li>
                    <li>
                        <InlineMath math="\theta_2" /> の零点: <InlineMath math="\frac{\pi}{2}" />
                    </li>
                    <li>
                        <InlineMath math="\theta_3" /> の零点: <InlineMath math="\frac{\pi+\pi\tau}{2}" />
                    </li>
                    <li>
                        <InlineMath math="\theta_4" /> の零点: <InlineMath math="\frac{\pi\tau}{2}" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="テータ関数の幾何学的意味">
                <p>
                    テータ関数の零点の配置は、複素トーラス上の因子の理論と深く結びついています。楕円関数をテータ関数の比で表す際、分子と分母の零点がそれぞれ楕円関数の零点と極に対応します。擬周期因子が上手く打ち消し合うようにテータ関数を組み合わせることで、任意の因子を持つ楕円関数を構成できるのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        テータ関数は完全な周期関数ではないが、周期方向に変数をずらすと指数関数的な因子が掛かる「準周期性」を持つ。
                    </li>
                    <li>
                        基本周期平行四辺形内において、各テータ関数はちょうど1つの1位の零点を持つ。
                    </li>
                    <li>
                        <InlineMath math="\theta_1" /> は <InlineMath math="0" /> で零点を取り、他のテータ関数の零点はそこから半周期ずつずれた位置にある。
                    </li>
                </ul>
            </ContentBox>
        </section>
    );
}
