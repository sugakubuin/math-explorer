import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InverseFunctionTheoremManifolds() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                2-2 微分積分学IIで学んだ「逆写像定理」は、ヤコビアンが非零である点において局所的な逆関数の存在を保証するものでした。
                多様体の枠組みにおいても、この定理は極めて重要な役割を果たします。本節では、接空間の間の線形写像（微分）を用いて、逆関数定理を多様体上に一般化します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆関数定理</h2>

            <p>
                多様体間の写像 <InlineMath math="f : M \to N" /> に対し、各点 <InlineMath math="p \in M" /> における「微分」 <InlineMath math="df_p" /> は、接空間 <InlineMath math="T_pM" /> から接空間 <InlineMath math="T_{f(p)}N" /> への線形写像として定義されます（厳密な接空間と微分の定義は第3章で行いますが、ここでは局所座標におけるヤコビ行列のことだと理解してください）。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 (逆関数定理の多様体版)">
                <p>
                    <InlineMath math="M, N" /> を同じ次元 <InlineMath math="n" /> の滑らかな多様体とし、<InlineMath math="f : M \to N" /> を滑らかな写像とする。
                </p>
                <p className="mt-2">
                    ある点 <InlineMath math="p \in M" /> において、微分 <InlineMath math="df_p : T_pM \to T_{f(p)}N" /> が線形同型写像（すなわち、局所座標におけるヤコビ行列が正則）であるとする。
                </p>
                <p className="mt-2">
                    このとき、<InlineMath math="p" /> のある開近傍 <InlineMath math="U \subset M" /> と <InlineMath math="f(p)" /> のある開近傍 <InlineMath math="V \subset N" /> が存在して、制限写像
                </p>
                <BlockMath math="f|_U : U \to V" />
                <p className="mt-2">
                    は微分同相写像となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    チャートを介して、ユークリッド空間における逆写像定理（Theorem 9.2-1）に帰着させる。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="p" /> の周りのチャート <InlineMath math="(U_0, \varphi)" /> と、点 <InlineMath math="f(p)" /> の周りのチャート <InlineMath math="(V_0, \psi)" /> をとる。
                    座標表示 <InlineMath math="\tilde{f} = \psi \circ f \circ \varphi^{-1}" /> は、<InlineMath math="\mathbb{R}^n" /> の開集合 <InlineMath math="\varphi(U_0)" /> から <InlineMath math="\mathbb{R}^n" /> の開集合 <InlineMath math="\psi(V_0)" /> への <InlineMath math="C^\infty" /> 級写像である。
                </p>
                <p className="mt-2">
                    仮定より、点 <InlineMath math="x_0 = \varphi(p)" /> における <InlineMath math="\tilde{f}" /> のヤコビ行列は正則（行列式が非零）である。
                    したがって、ユークリッド空間における逆写像定理より、<InlineMath math="x_0" /> の開近傍 <InlineMath math="\tilde{U} \subset \varphi(U_0)" /> と <InlineMath math="\tilde{f}(x_0)" /> の開近傍 <InlineMath math="\tilde{V} \subset \psi(V_0)" /> が存在して、<InlineMath math="\tilde{f}|_{\tilde{U}} : \tilde{U} \to \tilde{V}" /> は <InlineMath math="C^\infty" /> 級微分同相写像となる。
                </p>
                <p className="mt-2">
                    多様体上の開集合を <InlineMath math="U = \varphi^{-1}(\tilde{U})" /> および <InlineMath math="V = \psi^{-1}(\tilde{V})" /> と定義する。
                    このとき <InlineMath math="f|_U = \psi^{-1} \circ \tilde{f}|_{\tilde{U}} \circ \varphi" /> であり、これは3つの微分同相写像（チャートとその逆、および <InlineMath math="\tilde{f}|_{\tilde{U}}" />）の合成であるため、<InlineMath math="f|_U : U \to V" /> も微分同相写像となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-1">
                <p>
                    <strong>極座標変換の局所微分同相性</strong>
                </p>
                <p className="mt-2">
                    写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^2" /> を <InlineMath math="f(r, \theta) = (r\cos\theta, r\sin\theta)" /> で定義する。
                    この写像のヤコビ行列式は <InlineMath math="\det J_f = r" /> である。
                </p>
                <p className="mt-2">
                    したがって、<InlineMath math="r \neq 0" /> となる任意の点 <InlineMath math="p = (r_0, \theta_0)" /> において微分 <InlineMath math="df_p" /> は同型となる。
                    逆関数定理より、点 <InlineMath math="p" /> の周りの十分小さな開近傍 <InlineMath math="U" /> をとれば、<InlineMath math="f|_U" /> は像 <InlineMath math="f(U)" /> の上への微分同相写像となる。
                </p>
                <p className="mt-2">
                    しかし、<InlineMath math="f" /> は大域的には全単射ではない（<InlineMath math="f(r, \theta) = f(r, \theta + 2\pi)" />）。逆関数定理が保証するのは、あくまで「局所的な」微分同相性のみであることに注意が必要である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">局所微分同相と大域的構造</h2>

            <p>
                逆関数定理の条件が「すべての点」で満たされるような写像を特別に名付けます。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (局所微分同相)">
                <p>
                    滑らかな写像 <InlineMath math="f : M \to N" /> が <b>局所微分同相写像（local diffeomorphism）</b> であるとは、任意の点 <InlineMath math="p \in M" /> に対して、<InlineMath math="p" /> の開近傍 <InlineMath math="U" /> が存在して、<InlineMath math="f|_U : U \to f(U)" /> が微分同相写像となることをいう。
                </p>
                <p className="mt-2">
                    逆関数定理より、<InlineMath math="f" /> が局所微分同相であることと、すべての点 <InlineMath math="p \in M" /> で <InlineMath math="df_p" /> が線形同型であることは同値である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-2">
                <p>
                    <strong>被覆写像</strong>
                </p>
                <p className="mt-2">
                    実数直線から円周への写像 <InlineMath math="\pi : \mathbb{R} \to S^1" /> を、<InlineMath math="\pi(t) = (\cos 2\pi t, \sin 2\pi t)" /> で定義する。
                </p>
                <p className="mt-2">
                    任意の点 <InlineMath math="t \in \mathbb{R}" /> において、微分 <InlineMath math="d\pi_t" /> は <InlineMath math="(-2\pi \sin 2\pi t, 2\pi \cos 2\pi t)" /> という零でない接ベクトルを与え、これは1次元ベクトル空間間の同型写像である。
                    したがって <InlineMath math="\pi" /> は局所微分同相写像である。
                </p>
                <p className="mt-2">
                    実際、任意の開区間 <InlineMath math="U = (t_0, t_0 + 1/2)" /> に制限すれば、<InlineMath math="\pi|_U" /> は <InlineMath math="S^1" /> の半円弧上への微分同相となる。
                    しかし、<InlineMath math="\pi" /> は周期関数であり大域的には無限対1の写像であるため、大域的な微分同相ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="正則値定理への基盤">
                <p>
                    逆関数定理は、多様体論において最も強力な定理の一つである「正則値定理（§2.5）」の証明の基盤となります。
                    正則値定理は、方程式の解集合が多様体になるための条件を与えるものであり、微分トポロジーにおける基本的な道具です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多様体版の逆関数定理は、ある点で微分（ヤコビ行列）が同型ならば、その点の近傍で局所微分同相になることを保証する。</li>
                    <li>局所微分同相写像は、各点の近傍では微分同相だが、大域的には全単射（微分同相）であるとは限らない。</li>
                    <li>証明は、チャートを用いてユークリッド空間の逆写像定理に帰着させることで行われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
