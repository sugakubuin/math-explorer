import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ChartsAndAtlases() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で定義した位相多様体は、局所的に <InlineMath math="\mathbb{R}^n" /> と同相であることが保証されています。
                この同相写像を用いて、多様体上の点に <InlineMath math="\mathbb{R}^n" /> の座標を割り当てる仕組みを「チャート（座標近傍）」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">チャートの定義</h2>

            <p>
                多様体上の局所的な領域をユークリッド空間に写し取る写像を厳密に定義します。これは地球儀の表面（多様体）の一部を、平面の地図（ユークリッド空間）に描くことに例えられます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (チャート)">
                <p>
                    <InlineMath math="n" /> 次元位相多様体 <InlineMath math="M" /> の開集合 <InlineMath math="U \subset M" /> と、<InlineMath math="U" /> から <InlineMath math="\mathbb{R}^n" /> の開集合への同相写像 <InlineMath math="\varphi : U \to \varphi(U) \subset \mathbb{R}^n" /> の組 <InlineMath math="(U, \varphi)" /> を、<InlineMath math="M" /> の <b>チャート（chart）</b> または <b>座標近傍（coordinate neighborhood）</b> という。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="p \in U" /> に対して、<InlineMath math="\varphi(p) = (x^1(p), \ldots, x^n(p)) \in \mathbb{R}^n" /> と表すとき、各成分の関数 <InlineMath math="x^i : U \to \mathbb{R}" /> を <InlineMath math="p" /> の周りの <b>局所座標（local coordinates）</b> という。
                </p>
            </ContentBox>

            <p>
                具体的な多様体である球面に対して、チャートを構成してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.2-1">
                <p>
                    <strong>球面 <InlineMath math="S^2" /> 上の立体射影チャート</strong>
                </p>
                <p className="mt-2">
                    3次元ユークリッド空間内の単位球面 <InlineMath math="S^2 = \{ (x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 = 1 \}" /> を考える。
                    北極 <InlineMath math="N = (0,0,1)" /> を除く開集合 <InlineMath math="U_N = S^2 \setminus \{N\}" /> から、<InlineMath math="xy" />-平面（<InlineMath math="\mathbb{R}^2" />）への立体射影（stereographic projection）<InlineMath math="\varphi_N : U_N \to \mathbb{R}^2" /> を構成する。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="P(x,y,z) \in U_N" /> と北極 <InlineMath math="N" /> を結ぶ直線が <InlineMath math="xy" />-平面と交わる点を <InlineMath math="(u, v, 0)" /> とすると、相似比の計算から以下の明示公式が得られる。
                </p>
                <BlockMath math="\varphi_N(x, y, z) = (u, v) = \left( \frac{x}{1-z}, \frac{y}{1-z} \right)" />
                <p className="mt-2">
                    この写像は連続であり、その逆写像 <InlineMath math="\varphi_N^{-1} : \mathbb{R}^2 \to U_N" /> も
                </p>
                <BlockMath math="\varphi_N^{-1}(u, v) = \left( \frac{2u}{u^2+v^2+1}, \frac{2v}{u^2+v^2+1}, \frac{u^2+v^2-1}{u^2+v^2+1} \right)" />
                <p className="mt-2">
                    と具体的に書け、連続であることがわかる。したがって <InlineMath math="\varphi_N" /> は同相写像であり、<InlineMath math="(U_N, \varphi_N)" /> は <InlineMath math="S^2" /> のチャートとなる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アトラスと座標変換</h2>

            <p>
                1つのチャート（地図）だけでは、多様体全体を覆い尽くすことは通常できません（例えば、立体射影では北極がカバーされていません）。
                そこで、多様体全体を覆うようなチャートの集まりを考えます。これを「アトラス（地図帳）」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (アトラス)">
                <p>
                    位相多様体 <InlineMath math="M" /> のチャートの族 <InlineMath math="\mathcal{A} = \{(U_\alpha, \varphi_\alpha)\}_{\alpha \in A}" /> が、<InlineMath math="M" /> を被覆するとき（すなわち <InlineMath math="\bigcup_{\alpha \in A} U_\alpha = M" /> となるとき）、<InlineMath math="\mathcal{A}" /> を <InlineMath math="M" /> の <b>アトラス（atlas）</b> という。
                </p>
            </ContentBox>

            <p>
                複数のチャートが重なり合う領域では、同じ点に対して2つの異なる座標系が与えられます。
                この2つの座標系を行き来する写像が「座標変換」です。
            </p>

            <ContentBox type="definition" title="Definition 1.2-3 (座標変換)">
                <p>
                    アトラスに含まれる2つのチャート <InlineMath math="(U_\alpha, \varphi_\alpha)" /> と <InlineMath math="(U_\beta, \varphi_\beta)" /> について、その定義域が交わる（<InlineMath math="U_\alpha \cap U_\beta \neq \emptyset" />）とする。
                </p>
                <p className="mt-2">
                    このとき、<InlineMath math="\mathbb{R}^n" /> の開集合 <InlineMath math="\varphi_\alpha(U_\alpha \cap U_\beta)" /> から <InlineMath math="\varphi_\beta(U_\alpha \cap U_\beta)" /> への同相写像
                </p>
                <BlockMath math="\varphi_\beta \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)" />
                <p className="mt-2">
                    を、チャート <InlineMath math="\alpha" /> から <InlineMath math="\beta" /> への <b>座標変換（coordinate transition map）</b> または <b>遷移写像</b> という。
                </p>
            </ContentBox>

            <p>
                先ほどの球面 <InlineMath math="S^2" /> の例で、北極からの立体射影と南極からの立体射影の間の座標変換を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.2-2">
                <p>
                    <strong><InlineMath math="S^2" /> の北極射影と南極射影の座標変換</strong>
                </p>
                <p className="mt-2">
                    南極 <InlineMath math="S = (0,0,-1)" /> を除く開集合 <InlineMath math="U_S = S^2 \setminus \{S\}" /> 上の立体射影 <InlineMath math="\varphi_S : U_S \to \mathbb{R}^2" /> を、<InlineMath math="\varphi_S(x,y,z) = (\tilde{u}, \tilde{v}) = \left(\frac{x}{1+z}, \frac{y}{1+z}\right)" /> で定義する。
                </p>
                <p className="mt-2">
                    これら2つのチャートの交わりは <InlineMath math="U_N \cap U_S = S^2 \setminus \{N, S\}" />（両極を除いた球面）である。
                    この領域において、座標変換 <InlineMath math="\varphi_S \circ \varphi_N^{-1}" /> を計算する。
                    <InlineMath math="\varphi_N^{-1}(u, v) = (x, y, z)" /> の結果を <InlineMath math="\varphi_S" /> の式に代入すると、
                </p>
                <BlockMath math="\tilde{u} = \frac{x}{1+z} = \frac{\frac{2u}{u^2+v^2+1}}{1 + \frac{u^2+v^2-1}{u^2+v^2+1}} = \frac{2u}{2(u^2+v^2)} = \frac{u}{u^2+v^2}" />
                <BlockMath math="\tilde{v} = \frac{y}{1+z} = \frac{\frac{2v}{u^2+v^2+1}}{1 + \frac{u^2+v^2-1}{u^2+v^2+1}} = \frac{2v}{2(u^2+v^2)} = \frac{v}{u^2+v^2}" />
                <p className="mt-2">
                    したがって、座標変換は <InlineMath math="(u, v) \mapsto \left( \frac{u}{u^2+v^2}, \frac{v}{u^2+v^2} \right)" /> となる。
                    これは原点を除く平面 <InlineMath math="\mathbb{R}^2 \setminus \{(0,0)\}" /> 上で定義された、無限回微分可能な（<InlineMath math="C^\infty" /> 級の）写像である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="座標変換の滑らかさの重要性">
                <p>
                    位相多様体の定義では、チャート <InlineMath math="\varphi" /> は単なる「同相写像（連続かつ逆も連続）」であることしか求めていません。したがって、座標変換 <InlineMath math="\varphi_\beta \circ \varphi_\alpha^{-1}" /> も一般には単なる連続写像です。
                </p>
                <p className="mt-2">
                    しかし、多様体上で「微分」を考えるためには、どのチャート（座標系）を使って計算しても微分の結果が矛盾しないようにする必要があります。そのためには、座標系同士の変換規則である「座標変換」自身が滑らか（微分可能）でなければなりません。この要求が、次節で導入する「滑らかな多様体」の核心概念となります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>チャート（座標近傍）は、多様体の局所的な開集合を <InlineMath math="\mathbb{R}^n" /> に写す同相写像である。</li>
                    <li>アトラスは、多様体全体を被覆するチャートの族である。</li>
                    <li>2つのチャートが重なる部分では、<InlineMath math="\mathbb{R}^n" /> の開集合間の同相写像である「座標変換」が定まる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
