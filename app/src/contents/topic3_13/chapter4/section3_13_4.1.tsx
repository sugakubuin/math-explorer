import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfSecondFundamentalForm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第一基本形式は曲面そのものの内側での距離を測るものでした。一方、「曲面が周囲の3次元空間の中でどれくらい曲がっているか」を測るためには、法線方向（曲面から浮き上がる方向）への曲がり具合を見る必要があります。これを記述するのが「第二基本形式」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">第二基本形式の係数</h2>

            <p className="leading-relaxed">
                曲面のパラメータ表示の2階微分（曲率ベクトルに相当するもの）のうち、法線方向の成分を取り出したものを定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.1-1 (第二基本形式)"
            >
                <p>
                    正則曲面 <InlineMath math="\mathbf{x}(u,v)" /> の点 <InlineMath math="p" /> における<strong>第二基本形式（second fundamental form）</strong> <InlineMath math="II" /> を、次の2次形式として定義する。
                    <BlockMath math="II = e\,du^2 + 2f\,du\,dv + g\,dv^2" />
                </p>
                <p>
                    ここで、係数 <InlineMath math="e, f, g" /> は、2階の偏微分ベクトルと単位法ベクトル <InlineMath math="\mathbf{N}" /> の内積として定義される。
                    <BlockMath math="e = \mathbf{x}_{uu} \cdot \mathbf{N}" />
                    <BlockMath math="f = \mathbf{x}_{uv} \cdot \mathbf{N} = \mathbf{x}_{vu} \cdot \mathbf{N}" />
                    <BlockMath math="g = \mathbf{x}_{vv} \cdot \mathbf{N}" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この係数 <InlineMath math="e, f, g" /> は、実は「法ベクトル自身の微分」との内積を用いても計算することができます。この性質は後の章で非常に重要になります。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 4.1-1 (<InlineMath math="e = -\mathbf{x}_u \cdot \mathbf{N}_u" /> 等の関係)</span>}
            >
                <p>
                    第二基本形式の係数は、次のようにも表される。
                    <BlockMath math="e = -\mathbf{x}_u \cdot \mathbf{N}_u" />
                    <BlockMath math="f = -\mathbf{x}_u \cdot \mathbf{N}_v = -\mathbf{x}_v \cdot \mathbf{N}_u" />
                    <BlockMath math="g = -\mathbf{x}_v \cdot \mathbf{N}_v" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    接ベクトル <InlineMath math="\mathbf{x}_u" /> と法ベクトル <InlineMath math="\mathbf{N}" /> は常に直交するため、任意のパラメータ <InlineMath math="(u,v)" /> について
                    <BlockMath math="\mathbf{x}_u \cdot \mathbf{N} = 0" />
                    が成り立つ。
                </p>
                <p>
                    この両辺を <InlineMath math="u" /> で偏微分する。積の微分公式より、
                    <BlockMath math="\frac{\partial}{\partial u}(\mathbf{x}_u \cdot \mathbf{N}) = \mathbf{x}_{uu} \cdot \mathbf{N} + \mathbf{x}_u \cdot \mathbf{N}_u = 0" />
                    となる。
                </p>
                <p>
                    この式の第一項は定義より第二基本形式の係数 <InlineMath math="e" /> であるから、
                    <BlockMath math="e = \mathbf{x}_{uu} \cdot \mathbf{N} = -\mathbf{x}_u \cdot \mathbf{N}_u" />
                    が得られる。<InlineMath math="f, g" /> についても、<InlineMath math="\mathbf{x}_u \cdot \mathbf{N} = 0" /> を <InlineMath math="v" /> で微分したり、<InlineMath math="\mathbf{x}_v \cdot \mathbf{N} = 0" /> を <InlineMath math="u, v" /> で微分することで同様に示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.1-1 (球面の第二基本形式)"
            >
                <p>
                    半径 1 の球面について計算する。Example 2.2-1 で見た通り、法ベクトルは内向きで <InlineMath math="\mathbf{N} = -\mathbf{x}" /> であった。
                </p>
                <p>
                    これを用いると、<InlineMath math="\mathbf{N}_u = -\mathbf{x}_u" /> および <InlineMath math="\mathbf{N}_v = -\mathbf{x}_v" /> となる。先ほどの命題の公式を用いると、
                    <BlockMath math="e = -\mathbf{x}_u \cdot \mathbf{N}_u = -\mathbf{x}_u \cdot (-\mathbf{x}_u) = \mathbf{x}_u \cdot \mathbf{x}_u = E = 1" />
                    <BlockMath math="f = -\mathbf{x}_u \cdot \mathbf{N}_v = \mathbf{x}_u \cdot \mathbf{x}_v = F = 0" />
                    <BlockMath math="g = -\mathbf{x}_v \cdot \mathbf{N}_v = \mathbf{x}_v \cdot \mathbf{x}_v = G = \sin^2 u" />
                </p>
                <p>
                    したがって、半径 1 の球面においては、第二基本形式の係数が第一基本形式の係数と完全に一致し、<InlineMath math="II = I" /> となる。これは球面が「すべての方向に向かって、同じだけ曲がっている」ことを示している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">第二基本形式の幾何的意味</h2>

            <p className="leading-relaxed">
                なぜこのような2次形式を考えるのでしょうか。それは、曲面上の曲線の「加速度」を分析すると明らかになります。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 4.1-2 (法曲率との関係)"
            >
                <p>
                    曲面 <InlineMath math="S" /> 上の曲線 <InlineMath math="\alpha(t) = \mathbf{x}(u(t), v(t))" /> の加速度ベクトル <InlineMath math="\alpha''(t)" /> の、曲面の法線方向成分の大きさ（符号付き）は、第二基本形式そのものである。
                    <BlockMath math="\alpha''(t) \cdot \mathbf{N} = II(\dot{u}, \dot{v})" />
                </p>
                <p>
                    すなわち、第二基本形式は「曲線が接平面から法線方向へとどれくらい浮き上がろうとしているか（曲がるか）」を計るものである。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    曲線の速度ベクトルは <InlineMath math="\alpha'(t) = \mathbf{x}_u \dot{u} + \mathbf{x}_v \dot{v}" /> である。これをさらに <InlineMath math="t" /> で微分して加速度ベクトルを求める。
                    <BlockMath math="\alpha''(t) = \frac{d}{dt} (\mathbf{x}_u \dot{u} + \mathbf{x}_v \dot{v})" />
                    <BlockMath math="= (\mathbf{x}_{uu} \dot{u} + \mathbf{x}_{uv} \dot{v})\dot{u} + \mathbf{x}_u \ddot{u} + (\mathbf{x}_{vu} \dot{u} + \mathbf{x}_{vv} \dot{v})\dot{v} + \mathbf{x}_v \ddot{v}" />
                    <BlockMath math="= \mathbf{x}_{uu} \dot{u}^2 + 2\mathbf{x}_{uv} \dot{u}\dot{v} + \mathbf{x}_{vv} \dot{v}^2 + \mathbf{x}_u \ddot{u} + \mathbf{x}_v \ddot{v}" />
                </p>
                <p>
                    このベクトルと法ベクトル <InlineMath math="\mathbf{N}" /> の内積をとる。ここで <InlineMath math="\mathbf{x}_u \cdot \mathbf{N} = 0" />、<InlineMath math="\mathbf{x}_v \cdot \mathbf{N} = 0" /> であるため、後半の2つの項は消滅する。
                    <BlockMath math="\alpha''(t) \cdot \mathbf{N} = (\mathbf{x}_{uu} \cdot \mathbf{N}) \dot{u}^2 + 2(\mathbf{x}_{uv} \cdot \mathbf{N}) \dot{u}\dot{v} + (\mathbf{x}_{vv} \cdot \mathbf{N}) \dot{v}^2" />
                </p>
                <p>
                    係数の定義から、これはまさに
                    <BlockMath math="\alpha''(t) \cdot \mathbf{N} = e\dot{u}^2 + 2f\dot{u}\dot{v} + g\dot{v}^2 = II(\dot{u}, \dot{v})" />
                    となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>第二基本形式 <InlineMath math="II = e\,du^2 + 2f\,du\,dv + g\,dv^2" /> は、曲面の空間内での曲がり具合を測る。</li>
                    <li>係数 <InlineMath math="e, f, g" /> は、曲面の2階偏微分と法ベクトル <InlineMath math="\mathbf{N}" /> の内積、または接ベクトルと <InlineMath math="\mathbf{N}" /> の微分の内積として計算できる。</li>
                    <li>幾何学的には、曲面上の曲線の加速度の「法線方向成分」を表している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}