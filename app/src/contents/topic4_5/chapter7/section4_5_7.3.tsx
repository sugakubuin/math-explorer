import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MayerVietorisSequence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体 <InlineMath math="M" /> のド・ラームコホモロジーを計算する強力な道具が<strong>マイヤー・ビエトリス完全系列（Mayer-Vietoris sequence）</strong>です。
                これは、多様体を2つの開集合 <InlineMath math="U" /> と <InlineMath math="V" /> に分割し、それぞれのコホモロジー群と、その共通部分 <InlineMath math="U \cap V" /> のコホモロジー群から、元の多様体 <InlineMath math="M = U \cup V" /> のコホモロジー群を計算するための「長完全系列」と呼ばれる代数的な枠組みを提供します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">マイヤー・ビエトリス完全系列の構成</h2>

            <p className="leading-relaxed">
                まず、微分形式のレベルでの「短完全系列」を構成します。
                <InlineMath math="M = U \cup V" />（<InlineMath math="U, V" /> は <InlineMath math="M" /> の開集合）とします。
                包含写像 <InlineMath math="i_U : U \hookrightarrow M" />、<InlineMath math="i_V : V \hookrightarrow M" />、<InlineMath math="j_U : U \cap V \hookrightarrow U" />、<InlineMath math="j_V : U \cap V \hookrightarrow V" /> を考えます。
                これらは引き戻しにより、微分形式の空間の間の写像を誘導します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (マイヤー・ビエトリス完全系列)">
                <p>
                    <InlineMath math="M = U \cup V" />（<InlineMath math="U, V" /> は開集合）のとき、以下のコホモロジー群の長完全系列（long exact sequence）が存在する。
                </p>
                <BlockMath math="\cdots \to H^k(M) \xrightarrow{r} H^k(U) \oplus H^k(V) \xrightarrow{s} H^k(U \cap V) \xrightarrow{\delta} H^{k+1}(M) \to \cdots" />
                <p className="mt-2">
                    ここで、<InlineMath math="r" /> と <InlineMath math="s" /> は包含写像から誘導される準同型であり、<InlineMath math="\delta" /> は<strong>接続準同型（connecting homomorphism）</strong>と呼ばれる、次数を1つ上げる写像である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明は、ホモロジー代数の「蛇の補題（Snake lemma）」または「ジグザグ補題（Zig-zag lemma）」を用いる標準的な構成である。
                </p>
                <p className="mt-2">
                    <strong>Step 1: 微分形式の短完全系列の構成</strong>
                </p>
                <p className="mt-2">
                    各次数 <InlineMath math="k" /> において、以下の系列を考える。
                </p>
                <BlockMath math="0 \to \Omega^k(M) \xrightarrow{r} \Omega^k(U) \oplus \Omega^k(V) \xrightarrow{s} \Omega^k(U \cap V) \to 0" />
                <p className="mt-2">
                    ここで、<InlineMath math="r(\omega) = (i_U^*\omega, i_V^*\omega) = (\omega|_U, \omega|_V)" />（制限写像の直和）とし、<InlineMath math="s(\omega_U, \omega_V) = j_U^*\omega_U - j_V^*\omega_V = \omega_U|_{U \cap V} - \omega_V|_{U \cap V}" />（差分写像）とする。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="r" /> は単射：<InlineMath math="\omega|_U = 0" /> かつ <InlineMath math="\omega|_V = 0" /> ならば、<InlineMath math="M = U \cup V" /> 全体で <InlineMath math="\omega = 0" /> である。</li>
                    <li><InlineMath math="\mathrm{im}(r) = \ker(s)" />：<InlineMath math="s(\omega_U, \omega_V) = 0" /> は <InlineMath math="\omega_U|_{U \cap V} = \omega_V|_{U \cap V}" /> を意味する。このとき、<InlineMath math="\omega_U" /> と <InlineMath math="\omega_V" /> は <InlineMath math="M" /> 上の滑らかな形式 <InlineMath math="\omega" /> に貼り合わせることができるため、<InlineMath math="(\omega_U, \omega_V) = r(\omega)" /> となる。</li>
                    <li><InlineMath math="s" /> は全射：任意の <InlineMath math="\eta \in \Omega^k(U \cap V)" /> に対して、<InlineMath math="M" /> の開被覆 <InlineMath math="\{U, V\}" /> に従属する1の分割 <InlineMath math="\{\rho_U, \rho_V\}" /> をとる。
                        <InlineMath math="\omega_U = \rho_V \eta" />（<InlineMath math="U" /> 上にゼロ拡張）、<InlineMath math="\omega_V = -\rho_U \eta" />（<InlineMath math="V" /> 上にゼロ拡張）とおくと、<InlineMath math="\omega_U \in \Omega^k(U)" />、<InlineMath math="\omega_V \in \Omega^k(V)" /> であり、<InlineMath math="U \cap V" /> 上で <InlineMath math="s(\omega_U, \omega_V) = \rho_V \eta - (-\rho_U \eta) = (\rho_U + \rho_V)\eta = \eta" /> となる。
                    </li>
                </ul>
                <p className="mt-2">
                    したがって、この系列は短完全系列である。
                </p>
                <p className="mt-4">
                    <strong>Step 2: 長完全系列の導出</strong>
                </p>
                <p className="mt-2">
                    外微分 <InlineMath math="d" /> は制限写像と可換であるため、<InlineMath math="d \circ r = r \circ d" /> および <InlineMath math="d \circ s = s \circ d" /> が成り立つ。
                    すなわち、短完全系列は <InlineMath math="d" /> とともに鎖複体（chain complex）の短完全系列をなす。
                    ホモロジー代数のジグザグ補題により、この短完全系列からコホモロジー群の長完全系列が自然に導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">接続準同型の明示</h2>

            <p className="leading-relaxed">
                長完全系列の中で最も非自明な写像が、次数を1つ上げる接続準同型 <InlineMath math="\delta : H^k(U \cap V) \to H^{k+1}(M)" /> です。
                この写像が具体的にどのように構成されるか（ジグザグ補題の「蛇」の部分）を確認することは、計算上も理論上も重要です。
            </p>

            <ContentBox type="example" title="Example 7.3-1 (接続準同型の構成)">
                <p>
                    <InlineMath math="[\eta] \in H^k(U \cap V)" /> をとり、その代表元を閉形式 <InlineMath math="\eta \in \Omega^k(U \cap V)" />（<InlineMath math="d\eta = 0" />）とする。
                    <InlineMath math="\delta([\eta]) \in H^{k+1}(M)" /> を構成する手順は以下の通りである。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>
                        <strong><InlineMath math="s" /> の逆像をとる：</strong> Theorem 7.3-1 の証明の Step 1 で見たように、1の分割 <InlineMath math="\{\rho_U, \rho_V\}" /> を用いて、<InlineMath math="s(\omega_U, \omega_V) = \eta" /> となる <InlineMath math="(\omega_U, \omega_V)" /> を見つける。
                        具体的には、<InlineMath math="\omega_U = \rho_V \eta" />、<InlineMath math="\omega_V = -\rho_U \eta" /> とすればよい。
                    </li>
                    <li>
                        <strong><InlineMath math="d" /> を作用させる：</strong> これらに外微分を作用させる。
                        <BlockMath math="d\omega_U = d(\rho_V \eta) = d\rho_V \wedge \eta + \rho_V d\eta = d\rho_V \wedge \eta" />
                        <BlockMath math="d\omega_V = d(-\rho_U \eta) = -d\rho_U \wedge \eta - \rho_U d\eta = -d\rho_U \wedge \eta" />
                        （ここで <InlineMath math="d\eta = 0" /> を用いた。）
                    </li>
                    <li>
                        <strong><InlineMath math="r" /> の逆像をとる（貼り合わせる）：</strong> <InlineMath math="s \circ d = d \circ s" /> より、<InlineMath math="s(d\omega_U, d\omega_V) = d(s(\omega_U, \omega_V)) = d\eta = 0" /> である。
                        短完全系列の完全性（<InlineMath math="\ker(s) = \mathrm{im}(r)" />）から、<InlineMath math="(d\omega_U, d\omega_V)" /> はある <InlineMath math="M" /> 上の形式 <InlineMath math="\omega \in \Omega^{k+1}(M)" /> の制限として得られる。
                        実際、<InlineMath math="\rho_U + \rho_V = 1" /> より <InlineMath math="d\rho_U + d\rho_V = 0 \implies d\rho_V = -d\rho_U" /> であるため、<InlineMath math="U \cap V" /> 上で <InlineMath math="d\omega_U = d\omega_V" /> が成り立っており、これらは <InlineMath math="M" /> 上で滑らかに貼り合わさる。
                    </li>
                    <li>
                        <strong>コホモロジー類をとる：</strong> 得られた <InlineMath math="\omega" /> は <InlineMath math="d\omega|_U = d(d\omega_U) = 0" /> かつ <InlineMath math="d\omega|_V = 0" /> より閉形式である。
                        この <InlineMath math="[\omega]" /> を <InlineMath math="\delta([\eta])" /> と定義する。
                    </li>
                </ol>
                <p className="mt-2">
                    まとめると、接続準同型は代表元を用いて
                </p>
                <BlockMath math="\delta([\eta]) = [d(\rho_V \eta)]" />
                <p className="mt-2">
                    と明示的に書くことができる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="代数的トポロジーとの対応">
                <p>
                    マイヤー・ビエトリス完全系列は、ド・ラームコホモロジー特有のものではありません。
                    4-8 代数的トポロジー において、特異ホモロジーや特異コホモロジーに対しても全く同じ形の長完全系列が構成されます。
                    この代数的な構造の類似性（ホモロジー代数の普遍性）が、最終的に「ド・ラームの定理（ド・ラームコホモロジーと特異コホモロジーの同型）」を証明する際の強力な帰納法の枠組みを提供します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>マイヤー・ビエトリス完全系列は、多様体 <InlineMath math="M = U \cup V" /> のコホモロジーを <InlineMath math="U, V, U \cap V" /> のコホモロジーから計算する長完全系列である。</li>
                    <li>証明は、微分形式の短完全系列を構成し、ジグザグ補題を適用することで行われる。</li>
                    <li>接続準同型 <InlineMath math="\delta" /> は、1の分割を用いて局所的な形式を大域的に貼り合わせる操作として具体的に構成できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
