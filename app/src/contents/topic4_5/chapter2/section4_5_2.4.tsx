import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ImmersionsAndEmbeddings() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                多様体 <InlineMath math="M" /> を別の多様体 <InlineMath math="N" /> の中に「配置」する写像について考えます。
                局所的に構造を潰さずに配置する「はめ込み」と、大域的にも自己交差などを起こさずに綺麗に配置する「埋め込み」という2つの重要な概念を定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">はめ込みの定義</h2>

            <p>
                写像によって多様体が「潰れない」ための条件は、微分のランクが最大になる（単射になる）ことです。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (はめ込み)">
                <p>
                    <InlineMath math="M, N" /> を滑らかな多様体とし、<InlineMath math="f : M \to N" /> を滑らかな写像とする。
                </p>
                <p className="mt-2">
                    <InlineMath math="f" /> が <b>はめ込み（immersion）</b> であるとは、すべての点 <InlineMath math="p \in M" /> において、微分 <InlineMath math="df_p : T_pM \to T_{f(p)}N" /> が単射（injective）であることをいう。
                </p>
                <p className="mt-2">
                    これは、ヤコビ行列のランクが常に <InlineMath math="\dim M" /> （最大ランク）であることと同値である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-1">
                <p>
                    <strong>8の字曲線</strong>
                </p>
                <p className="mt-2">
                    写像 <InlineMath math="\gamma : \mathbb{R} \to \mathbb{R}^2" /> を <InlineMath math="\gamma(t) = (\sin 2t, \sin t)" /> で定義する。
                </p>
                <p className="mt-2">
                    微分（速度ベクトル）は <InlineMath math="\gamma'(t) = (2\cos 2t, \cos t)" /> である。
                    これが零ベクトル <InlineMath math="(0,0)" /> になるためには <InlineMath math="\cos t = 0" /> かつ <InlineMath math="\cos 2t = 0" /> が同時に成り立つ必要があるが、<InlineMath math="\cos t = 0" /> のとき <InlineMath math="\cos 2t = 2\cos^2 t - 1 = -1 \neq 0" /> となるため、決して零ベクトルにはならない。
                </p>
                <p className="mt-2">
                    したがって、すべての <InlineMath math="t" /> で微分は単射（ランク1）であり、<InlineMath math="\gamma" /> は <InlineMath math="\mathbb{R}" /> から <InlineMath math="\mathbb{R}^2" /> への「はめ込み」である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="はめ込みの局所性と自己交差">
                <p>
                    前節の定ランク定理より、はめ込みは局所的には標準形 <InlineMath math="(x^1, \dots, x^m) \mapsto (x^1, \dots, x^m, 0, \dots, 0)" /> で表されます。つまり、<b>局所的には必ず1対1（単射）</b>になります。
                </p>
                <p className="mt-2">
                    しかし、大域的に見ると単射になるとは限りません。Example 2.4-1 の8の字曲線は、<InlineMath math="t=0" /> と <InlineMath math="t=\pi" /> で同じ原点 <InlineMath math="(0,0)" /> を通り、<b>自己交差</b>を持ちます。はめ込みは「局所的に潰れない」ことだけを保証し、大域的な自己交差は許容する概念です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">埋め込みと部分多様体</h2>

            <p>
                自己交差を持たず、さらに元の多様体の位相構造（近さの概念）もそのまま保って配置されるような写像を「埋め込み」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.4-2 (埋め込み)">
                <p>
                    滑らかな写像 <InlineMath math="f : M \to N" /> が <b>埋め込み（embedding）</b> であるとは、以下の2条件を満たすことをいう。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><InlineMath math="f" /> はめ込みである。</li>
                    <li><InlineMath math="f" /> は、<InlineMath math="M" /> からその像 <InlineMath math="f(M)" /> （<InlineMath math="N" /> の相対位相を入れる）への <b>同相写像（位相的埋め込み）</b> である。</li>
                </ol>
            </ContentBox>

            <p>
                埋め込まれた像 <InlineMath math="f(M)" /> は、ターゲット多様体 <InlineMath math="N" /> の中で綺麗な「部分多様体」となります。
            </p>

            <ContentBox type="definition" title="Definition 2.4-3 (正則部分多様体)">
                <p>
                    <InlineMath math="N" /> の部分集合 <InlineMath math="S" /> が <InlineMath math="m" /> 次元の <b>正則部分多様体（regular submanifold）</b> であるとは、任意の点 <InlineMath math="p \in S" /> に対して、<InlineMath math="N" /> における <InlineMath math="p" /> の周りのチャート <InlineMath math="(V, \psi)" /> が存在して、
                </p>
                <BlockMath math="\psi(V \cap S) = \psi(V) \cap (\mathbb{R}^m \times \{0\})" />
                <p className="mt-2">
                    となることをいう。すなわち、局所的に <InlineMath math="S" /> が「後ろの座標成分がすべて <InlineMath math="0" /> であるような超平面」として真っ直ぐに切り出せることを意味する。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 2.4-1">
                <p>
                    <InlineMath math="f : M \to N" /> が埋め込みであるとき、その像 <InlineMath math="f(M)" /> は <InlineMath math="N" /> の正則部分多様体となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> はめ込みであるから、定ランク定理（Theorem 2.3-1）より、任意の点 <InlineMath math="p \in M" /> の周りで局所的には <InlineMath math="f(M)" /> は <InlineMath math="\mathbb{R}^m \times \{0\}" /> の形に真っ直ぐにできる。
                </p>
                <p className="mt-2">
                    問題は、この局所的なチャートの領域（<InlineMath math="V" />）の中に、<InlineMath math="p" /> から遠く離れた別の場所から多様体が「戻ってきて」交差したり、無限に近づいたりしないかという点である。
                </p>
                <p className="mt-2">
                    ここで <InlineMath math="f" /> が「位相的埋め込み」であるという条件が効く。この条件により、<InlineMath math="f(M)" /> の相対位相と <InlineMath math="M" /> の位相が一致するため、<InlineMath math="M" /> での近傍の像は、必ず <InlineMath math="N" /> での適当な近傍との共通部分として得られる。
                    これにより、遠くから戻ってくる部分をチャートの領域 <InlineMath math="V" /> から完全に排除することができ、<InlineMath math="f(M)" /> 全体が正則部分多様体の条件を満たすことが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-2">
                <p>
                    <strong>球面の包含写像</strong>
                </p>
                <p className="mt-2">
                    包含写像 <InlineMath math="\iota : S^n \hookrightarrow \mathbb{R}^{n+1}" /> は埋め込みである。
                    実際、微分が単射である（はめ込みである）ことは容易に確認でき、像の相対位相はもともと <InlineMath math="S^n" /> の位相の定義そのものであるから位相的埋め込みの条件も満たす。
                    したがって、<InlineMath math="S^n" /> は <InlineMath math="\mathbb{R}^{n+1}" /> の正則部分多様体である。
                </p>
            </ContentBox>

            <p>
                単射なはめ込みであっても、位相的埋め込みの条件（像の相対位相との一致）を満たさず、埋め込みにならない例が存在します。
            </p>

            <ContentBox type="example" title="Example 2.4-3">
                <p>
                    <strong>無理数傾斜直線（はめ込みだが埋め込みでない例）</strong>
                </p>
                <p className="mt-2">
                    <InlineMath math="\alpha" /> を無理数とする。実数直線 <InlineMath math="\mathbb{R}" /> からトーラス <InlineMath math="T^2 = \mathbb{R}^2 / \mathbb{Z}^2" /> への写像 <InlineMath math="f(t) = [(t, \alpha t)]" /> を考える。
                </p>
                <p className="mt-2">
                    微分は常に <InlineMath math="(1, \alpha) \neq (0,0)" /> なので、<InlineMath math="f" /> はめ込みである。
                    また、<InlineMath math="\alpha" /> が無理数であることから、<InlineMath math="f(t_1) = f(t_2)" /> となるのは <InlineMath math="t_1 = t_2" /> のみであり、<InlineMath math="f" /> は単射である。
                </p>
                <p className="mt-2">
                    しかし、クロネッカーの稠密定理により、この像 <InlineMath math="f(\mathbb{R})" /> は <InlineMath math="T^2" /> の中で稠密（どこにでも無限に近づく）になる。
                    そのため、像の相対位相では、直線上の遠く離れた点が「極めて近い点」として扱われてしまい、元の <InlineMath math="\mathbb{R}" /> の位相とは一致しない。
                    したがって <InlineMath math="f" /> は位相的埋め込みではなく、像は正則部分多様体にはならない。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>はめ込みは、微分が単射（最大ランク）である写像であり、局所的には潰れないが自己交差は許容される。</li>
                    <li>埋め込みは、はめ込みかつ像への同相写像（位相的埋め込み）である写像である。</li>
                    <li>埋め込みの像は、ターゲット多様体の中で綺麗な「正則部分多様体」となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
