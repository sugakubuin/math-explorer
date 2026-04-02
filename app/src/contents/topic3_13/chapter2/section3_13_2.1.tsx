import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RegularSurfaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                Chapter 1 では1次元の図形である曲線を扱いましたが、ここからは2次元の図形である「曲面」を扱います。曲面を幾何学的に解析するためには、曲線における「接ベクトルがゼロにならない（正則性）」という条件と同様に、曲面が途中で折れ曲がったり尖ったりしないための「正則性の条件」を定義する必要があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">正則曲面の定義</h2>

            <p className="leading-relaxed">
                曲面は、2つのパラメータ <InlineMath math="u, v" /> を用いて3次元空間内の点に対応させることで表現します。この表示が「滑らかな面」をなすための条件を定式化します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-1 (正則曲面)"
            >
                <p>
                    開集合 <InlineMath math="U \subset \mathbb{R}^2" /> から3次元ユークリッド空間 <InlineMath math="\mathbb{R}^3" /> への <InlineMath math="C^\infty" /> 写像 <InlineMath math="\mathbf{x} : U \to \mathbb{R}^3" /> が<strong>正則パラメータ表示（regular parametrization）</strong>であるとは、各点 <InlineMath math="(u,v) \in U" /> において偏微分ベクトル <InlineMath math="\mathbf{x}_u = \frac{\partial \mathbf{x}}{\partial u}" /> と <InlineMath math="\mathbf{x}_v = \frac{\partial \mathbf{x}}{\partial v}" /> が線形独立であること、すなわち外積がゼロベクトルにならないことをいう。
                    <BlockMath math="\mathbf{x}_u \times \mathbf{x}_v \neq \mathbf{0}" />
                </p>
                <p>
                    <InlineMath math="\mathbb{R}^3" /> の部分集合 <InlineMath math="S" /> が<strong>正則曲面（regular surface）</strong>であるとは、<InlineMath math="S" /> の各点が、このような正則パラメータ表示の像（の一部）として覆われることをいう。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な曲面がこの正則性条件を満たしているかを計算で確認してみましょう。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 2.1-1 (球面 <InlineMath math="S^2" /> の正則性)</span>}
            >
                <p>
                    半径 1 の球面 <InlineMath math="S^2" /> は、緯度と経度に対応するパラメータ <InlineMath math="(u,v)" /> で次のように表示できる（<InlineMath math="u \in (0,\pi), v \in (0, 2\pi)" />）。
                    <BlockMath math="\mathbf{x}(u,v) = (\sin u \cos v, \sin u \sin v, \cos u)" />
                </p>
                <p>
                    各変数で偏微分を計算する。
                    <BlockMath math="\mathbf{x}_u = (\cos u \cos v, \cos u \sin v, -\sin u)" />
                    <BlockMath math="\mathbf{x}_v = (-\sin u \sin v, \sin u \cos v, 0)" />
                </p>
                <p>
                    これらの外積 <InlineMath math="\mathbf{x}_u \times \mathbf{x}_v" /> を計算すると、
                    <BlockMath math="\mathbf{x}_u \times \mathbf{x}_v = (\sin u \cos u \cos v - (-\sin^2 u \cos v), \dots)" />
                    <BlockMath math="\mathbf{x}_u \times \mathbf{x}_v = (-\sin^2 u \cos v, -\sin^2 u \sin v, -\sin u \cos u)" />
                    となる。このベクトルの大きさを計算すると、
                    <BlockMath math="\begin{aligned} |\mathbf{x}_u \times \mathbf{x}_v| &= \sqrt{\sin^4 u \cos^2 v + \sin^4 u \sin^2 v + \sin^2 u \cos^2 u} \\ &= \sqrt{\sin^4 u + \sin^2 u \cos^2 u} \\ &= \sqrt{\sin^2 u (\sin^2 u + \cos^2 u)} = |\sin u| \end{aligned}" />
                    となる。
                </p>
                <p>
                    区間 <InlineMath math="u \in (0,\pi)" /> において <InlineMath math="\sin u > 0" /> であるため、<InlineMath math="|\mathbf{x}_u \times \mathbf{x}_v| \neq 0" /> であり、外積は零ベクトルにならない。したがって、このパラメータ表示は正則である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.1-2 (回転面の正則性)"
            >
                <p>
                    <InlineMath math="xz" /> 平面上の曲線 <InlineMath math="(f(u), 0, g(u))" />（ただし <InlineMath math="f(u) > 0" /> とする）を <InlineMath math="z" /> 軸の周りに回転させてできる回転面は次のように書ける。
                    <BlockMath math="\mathbf{x}(u,v) = (f(u)\cos v, f(u)\sin v, g(u))" />
                </p>
                <p>
                    偏微分を計算すると、
                    <BlockMath math="\mathbf{x}_u = (f'(u)\cos v, f'(u)\sin v, g'(u))" />
                    <BlockMath math="\mathbf{x}_v = (-f(u)\sin v, f(u)\cos v, 0)" />
                    となり、外積をとると、
                    <BlockMath math="\begin{aligned} &\mathbf{x}_u \times \mathbf{x}_v \\ &= (-g'(u)f(u)\cos v, -g'(u)f(u)\sin v, f'(u)f(u)) \end{aligned}" />
                    となる。そのノルムの2乗は
                    <BlockMath math="|\mathbf{x}_u \times \mathbf{x}_v|^2 = f(u)^2 (g'(u)^2 + f'(u)^2)" />
                    となる。
                </p>
                <p>
                    元の曲線が正則（<InlineMath math="f'^2 + g'^2 > 0" />）であり、かつ回転軸に交わらない（<InlineMath math="f(u) > 0" />）ならば、この値は常に正となり、回転面が正則曲面になることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">正則性の意味と失敗例</h2>

            <p className="leading-relaxed">
                正則性の条件が満たされないと、幾何学的にどのような「不具合」が起きるのかを確認しておくことは重要です。
            </p>

            <ContentBox
                type="remark"
                title="正則性条件の幾何的意味"
            >
                <p>
                    条件 <InlineMath math="\mathbf{x}_u \times \mathbf{x}_v \neq \mathbf{0}" /> は、2つの偏微分ベクトル <InlineMath math="\mathbf{x}_u" /> と <InlineMath math="\mathbf{x}_v" /> が「平行でもゼロでもない」ことを意味しています。
                </p>
                <p>
                    この2つのベクトルは、曲面上の網目（パラメータ曲線）に沿った接ベクトルを表しています。これらが線形独立であることによって、初めてその点において「2次元的な平面（接平面）」を確定させることができます。
                </p>
                <p>
                    この条件が崩れる点（特異点）では、接平面が潰れてしまい、曲面が「尖ったり」「折れ曲がったり」する現象が発生します。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.1-3 (正則性が失敗する例)"
            >
                <p>
                    次のようなパラメータ表示を考える。
                    <BlockMath math="\mathbf{x}(u,v) = (u^3, v, 0)" />
                    これは <InlineMath math="xy" /> 平面全体を覆う写像である。
                </p>
                <p>
                    偏微分を計算すると、
                    <BlockMath math="\mathbf{x}_u = (3u^2, 0, 0)" />
                    <BlockMath math="\mathbf{x}_v = (0, 1, 0)" />
                    となる。
                </p>
                <p>
                    ここで <InlineMath math="u = 0" /> の点（すなわち <InlineMath math="y" /> 軸上の点）を考えると、<InlineMath math="\mathbf{x}_u(0, v) = (0,0,0)" /> となってしまう。
                    したがって、この直線上の各点で外積 <InlineMath math="\mathbf{x}_u \times \mathbf{x}_v = \mathbf{0}" /> となり、正則性の条件が崩れる。
                </p>
                <p>
                    図形としてはただの平面（特異点などない）ですが、パラメータ表示 <InlineMath math="\mathbf{x}" /> の取り方が悪いために、<InlineMath math="u=0" /> で「パラメータの速度」がゼロになり、接平面をうまく張れなくなってしまう例です。正則曲面であるためには、このような特異点を持たない「良い」パラメータ表示で全体が覆えることが必要です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>2変数のパラメータ表示 <InlineMath math="\mathbf{x}(u,v)" /> について、<InlineMath math="\mathbf{x}_u \times \mathbf{x}_v \neq \mathbf{0}" /> を満たすとき正則パラメータ表示という。</li>
                    <li>正則曲面とは、至る所で正則パラメータ表示によって覆うことができる滑らかな曲面のことである。</li>
                    <li>正則性の条件は、曲面の各点で2つの独立した接ベクトルが存在し、接平面が退化せずに定まることを保証する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}