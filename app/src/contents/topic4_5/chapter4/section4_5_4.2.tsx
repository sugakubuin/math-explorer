import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DifferentialOfFunctionsAndOneForms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で余接空間の基底として <InlineMath math="dx^i" /> という記号を用いましたが、これは単なる記号ではなく、座標関数 <InlineMath math="x^i" /> の「微分」として自然に定まるものです。
                この節では、一般の滑らかな関数 <InlineMath math="f" /> の微分 <InlineMath math="df" /> を余接ベクトルとして定義し、さらに多様体全体で定義された余接ベクトル場である「1-形式」を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">関数の微分 <InlineMath math="df" /></h2>

            <p className="leading-relaxed">
                関数 <InlineMath math="f \in C^\infty(M)" /> が与えられたとき、各点 <InlineMath math="p \in M" /> において、接ベクトル <InlineMath math="v \in T_pM" /> を「<InlineMath math="v" /> 方向の <InlineMath math="f" /> の方向微分 <InlineMath math="v(f)" />」に写す対応を考えることができます。
                この対応は <InlineMath math="v" /> について線形であるため、余接空間の元（余接ベクトル）を定めます。
            </p>

            <ContentBox type="definition" title={<span>Definition 4.2-1 (関数の微分 <InlineMath math="df" />)</span>}>
                <p>
                    <InlineMath math="f \in C^\infty(M)" /> を多様体 <InlineMath math="M" /> 上の滑らかな関数とする。
                    点 <InlineMath math="p \in M" /> における <InlineMath math="f" /> の<strong>微分（differential）</strong> <InlineMath math="df_p \in T_p^*M" /> を、任意の接ベクトル <InlineMath math="v \in T_pM" /> に対して
                </p>
                <BlockMath math="df_p(v) = v(f)" />
                <p className="mt-2">
                    で定義する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義は、§3.2 で導入した「写像の接写像」の特別な場合（<InlineMath math="N = \mathbb{R}" /> の場合）とみなすこともできます。
                関数の微分 <InlineMath math="df" /> を局所座標で表示すると、偏微分係数が現れます。
            </p>

            <ContentBox type="example" title="Example 4.2-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> 上の関数 <InlineMath math="f(x,y) = x^2 + y" /> の微分 <InlineMath math="df" /> を計算する。
                </p>
                <p className="mt-2">
                    局所座標 <InlineMath math="(x,y)" /> における基底 <InlineMath math="\partial/\partial x, \partial/\partial y" /> への作用は、それぞれ偏微分 <InlineMath math="\partial f/\partial x = 2x" />、<InlineMath math="\partial f/\partial y = 1" /> である。
                    したがって、双対基底 <InlineMath math="dx, dy" /> を用いると、
                </p>
                <BlockMath math="df = \frac{\partial f}{\partial x} dx + \frac{\partial f}{\partial y} dy = 2x\,dx + dy" />
                <p className="mt-2">
                    となる。例えば、点 <InlineMath math="p = (1,0)" /> においては <InlineMath math="df_{(1,0)} = 2\,dx + dy" /> である。
                    この余接ベクトルを接ベクトル <InlineMath math="v = 3\frac{\partial}{\partial x}" /> に作用させると、
                </p>
                <BlockMath math="df_{(1,0)}(v) = (2\,dx + dy)\left(3\frac{\partial}{\partial x}\right) = 2 \cdot 3 + 1 \cdot 0 = 6" />
                <p className="mt-2">
                    となり、これは <InlineMath math="v(f) = 3\frac{\partial f}{\partial x}(1,0) = 3 \cdot 2 = 6" /> と一致する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この例から予想されるように、座標関数 <InlineMath math="x^i" /> の微分 <InlineMath math="dx^i" /> は、前節で天下り的に定義した「双対基底」と完全に一致します。
            </p>

            <ContentBox type="proposition" title="Proposition 4.2-1">
                <p>
                    局所座標系 <InlineMath math="(x^1, \ldots, x^n)" /> の座標関数 <InlineMath math="x^i : U \to \mathbb{R}" /> の微分 <InlineMath math="dx^i" /> は、Definition 4.1-2 で定義した双対基底に一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関数の微分の定義（Definition 4.2-1）より、<InlineMath math="dx^i" /> を接空間の基底 <InlineMath math="\partial/\partial x^j" /> に作用させると、
                </p>
                <BlockMath math="dx^i \left( \frac{\partial}{\partial x^j} \right) = \frac{\partial}{\partial x^j} (x^i) = \frac{\partial x^i}{\partial x^j} = \delta^i_j" />
                <p className="mt-2">
                    となる。これはまさに双対基底の定義式である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">滑らかな1-形式</h2>

            <p className="leading-relaxed">
                ベクトル場が接束の切断であったように、余接束の切断を考えることができます。
                これを「1-形式（1-form）」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 4.2-2 (1-形式)">
                <p>
                    多様体 <InlineMath math="M" /> 上の<strong>滑らかな1-形式（smooth 1-form）</strong>とは、余接束 <InlineMath math="T^*M" /> の滑らかな切断 <InlineMath math="\omega : M \to T^*M" /> のことである。
                    すなわち、各点 <InlineMath math="p \in M" /> に対して余接ベクトル <InlineMath math="\omega_p \in T_p^*M" /> を滑らかに割り当てる写像である。
                </p>
                <p className="mt-2">
                    局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> を用いると、1-形式 <InlineMath math="\omega" /> は滑らかな関数 <InlineMath math="\omega_i(x)" /> を用いて
                </p>
                <BlockMath math="\omega = \sum_{i=1}^n \omega_i(x) \, dx^i" />
                <p className="mt-2">
                    と一意に表される。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                関数の微分 <InlineMath math="df" /> は、各点 <InlineMath math="p" /> に <InlineMath math="df_p" /> を対応させることで、自然に1-形式を定めます。
                このような関数の微分として書ける1-形式を「完全形式（exact form）」と呼びますが、すべての1-形式が完全形式であるとは限りません。
            </p>

            <ContentBox type="example" title="Example 4.2-2 (完全でない1-形式)">
                <p>
                    <InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> 上の1-形式 <InlineMath math="\omega" /> を次のように定義する。
                </p>
                <BlockMath math="\omega = \frac{-y\,dx + x\,dy}{x^2 + y^2}" />
                <p className="mt-2">
                    極座標 <InlineMath math="(r, \theta)" /> に変換すると、<InlineMath math="x = r\cos\theta, y = r\sin\theta" /> より
                </p>
                <BlockMath math="dx = \cos\theta\,dr - r\sin\theta\,d\theta, \quad dy = \sin\theta\,dr + r\cos\theta\,d\theta" />
                <p className="mt-2">
                    これを代入して計算すると、
                </p>
                <BlockMath math="\omega = \frac{-r\sin\theta(\cos\theta\,dr - r\sin\theta\,d\theta) + r\cos\theta(\sin\theta\,dr + r\cos\theta\,d\theta)}{r^2} = d\theta" />
                <p className="mt-2">
                    となる。局所的には <InlineMath math="\omega = d\theta" />（関数 <InlineMath math="\theta" /> の微分）と書けるため完全形式のように見える。
                    しかし、角度 <InlineMath math="\theta" /> は原点の周りを一周すると <InlineMath math="2\pi" /> だけ値が変わるため、<InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> 全体で定義された一価の滑らかな関数にはならない。
                    したがって、大域的には <InlineMath math="\omega = df" /> となる関数 <InlineMath math="f" /> は存在せず、この1-形式は完全形式ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ベクトル解析の勾配場との関係">
                <p>
                    3-1 ベクトル解析 において、スカラー関数 <InlineMath math="f" /> の勾配（gradient）<InlineMath math="\nabla f" /> はベクトル場として定義されました。
                    しかし、多様体論の枠組みでは、関数の自然な微分はベクトル場ではなく、1-形式 <InlineMath math="df" />（余接ベクトル場）となります。
                </p>
                <p className="mt-2">
                    1-形式 <InlineMath math="df" /> をベクトル場 <InlineMath math="\nabla f" /> と同一視するためには、接空間と余接空間を結びつける「内積（リーマン計量）」という追加の構造が必要になります。
                    計量を持たない一般の多様体上では、関数の微分はあくまで「等高線の密度」を表す1-形式として扱うのが本質的です。
                    この1-形式は、第5章でより一般の <InlineMath math="k" />-形式へと拡張されます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数 <InlineMath math="f" /> の微分 <InlineMath math="df_p" /> は、接ベクトル <InlineMath math="v" /> を方向微分 <InlineMath math="v(f)" /> に写す余接ベクトルとして定義される。</li>
                    <li>座標関数 <InlineMath math="x^i" /> の微分 <InlineMath math="dx^i" /> は、余接空間の双対基底に一致する。</li>
                    <li>1-形式は余接束 <InlineMath math="T^*M" /> の滑らかな切断であり、局所座標では <InlineMath math="\omega = \sum \omega_i(x) \, dx^i" /> と表される。</li>
                    <li>関数の微分 <InlineMath math="df" /> は1-形式であるが、すべての1-形式が関数の微分として書けるわけではない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
