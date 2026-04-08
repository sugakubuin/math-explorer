import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeakTopologyAndReflexivity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で自然に発生した「弱収束」という現象を、位相空間論（開集合の集まり）の言葉で定式化したものが「弱位相」です。さらに双対空間に特有の「弱*（ウィークスター）位相」と呼ばれる非常に緩い位相を導入することで、無限次元空間において失われがちな「コンパクト性」という強力な武器を取り戻す、アラオグルの定理について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱位相と弱*位相</h2>

            <p>
                「ある特定の関数の集まりがすべて連続になるように、開集合を必要最低限だけ集めて位相を作る（最弱位相）」という位相空間論（参照：3-11 位相空間論I）の手法を関数空間に適用します。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (弱位相)">
                <p>
                    ノルム空間 <InlineMath math="X" /> 上に、双対空間 <InlineMath math="X^*" /> のすべての元（有界線形汎関数）がそのまま「連続」になるような、最も弱い（開集合が少ない）位相を導入することができる。これを <InlineMath math="X" /> の<b>弱位相（weak topology）</b>と呼ぶ。
                </p>
                <p>
                    この位相における点列の収束が、そのまま前節の「弱収束（<InlineMath math="x_n \xrightarrow{w} x" />）」の定義と正確に一致する。
                </p>
            </ContentBox>

            <p>
                逆に、双対空間 <InlineMath math="X^*" /> 側にも位相を入れることができます。もちろんノルム空間としての弱位相を入れることもできますが、「元の空間のベクトルを通した観測さえ連続になればよい」ともっと妥協した超・最弱位相を作ることもできます。
            </p>

            <ContentBox type="definition" title="Definition 5.4-2 (弱*位相)">
                <p>
                    双対空間 <InlineMath math="X^*" /> 上に、第二双対空間への標準埋め込みの像 <InlineMath math="J(X)" />（すなわち「元の空間のベクトル <InlineMath math="x" /> をそのまま代入して評価する」という関数の集まり）がすべて連続になるような、最も弱い位相を導入することができる。これを <InlineMath math="X^*" /> の<b>弱*位相（弱スター位相、weak-star topology）</b>と呼ぶ。
                </p>
                <p>
                    この位相において <InlineMath math="X^*" /> の元（汎関数）の列が <InlineMath math="f_n \xrightarrow{w^*} f" /> と収束する（弱*収束する）とは、定義域の元の空間の任意の <InlineMath math="x \in X" /> に対して <InlineMath math="f_n(x) \to f(x)" /> となること（各点収束）と同値である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="なぜスターか">
                <p>
                    <InlineMath math="X^*" /> （エックス・スター）という空間特有の位相だから弱スター位相と呼びます。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 5.4-1 (<InlineMath math="\ell^1 = (c_0)^*" /> 上での弱*収束)</span>}>
                <p>
                    <InlineMath math="\ell^1" /> はゼロに収束する数列の空間 <InlineMath math="c_0" /> の双対空間と同型であった。ここで <InlineMath math="\ell^1" /> の標準基底 <InlineMath math="e_n" /> を考える。（Example 5.3-1 に似た状況である）
                </p>
                <p>
                    <InlineMath math="\ell^1" /> 自身における弱収束を考える。これは「そのさらに双対である <InlineMath math="\ell^\infty" /> のすべての元から見てゼロにいくか」を問う。しかし <InlineMath math="\ell^\infty" /> の元 <InlineMath math="y = (1, 1, 1, \ldots)" /> から観測すると <InlineMath math="f_y(e_n) = 1" /> となりゼロにならないため、<InlineMath math="e_n" /> は <InlineMath math="\ell^1" /> で弱収束しない。
                </p>
                <p>
                    一方、「双対空間 <InlineMath math="(c_0)^*" /> 上での弱*収束」を考える。これは「元の空間 <InlineMath math="c_0" /> （ゼロに収束する数列）の元から見てゼロにいくか」を問う。<InlineMath math="c_0" /> の元 <InlineMath math="x" /> を代入した結果は <InlineMath math="x_n" /> であるが、これは <InlineMath math="x" /> 自体がゼロに収束する列なので <InlineMath math="n \to \infty" /> でゼロに行く。よって標準基底列 <InlineMath math="e_n" /> は、弱*位相においては <InlineMath math="0" /> に弱*収束（<InlineMath math="e_n \xrightarrow{w^*} 0" />）するのである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">バナッハ-アラオグルの定理と反射的空間</h2>

            <p>
                関数解析（特に無限次元）では「有界で閉じた集合であっても、広すぎて内側がスカスカなためコンパクトにならない（点列が極限を持たずに無限に逃げ回れる）」という致命的な性質があります（ハイネ-ボレルの定理が成り立たない）。しかし「弱*位相」という非常に粗い位相のメガネをかければ、無限に逃げ回る点たちをなんとか捕まえてコンパクト性を取り戻すことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1 (バナッハ-アラオグルの定理)">
                <p>
                    <InlineMath math="X" /> をノルム空間とする。<InlineMath math="X" /> の双対空間 <InlineMath math="X^*" /> の単位閉球（<InlineMath math="B^* = \{ f \in X^* \mid \|f\| \leq 1 \}" />）は、弱*位相（weak* topology）に関してコンパクトである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の鍵は「直積位相への埋め込み」と「ティコノフの定理」である。各 <InlineMath math="x \in X" /> に対して、スカラーの閉区間（複素数の場合は閉円板） <InlineMath math="D_x = [-\|x\|, \|x\|]" /> を考える（これはハイネ-ボレルで通常のコンパクトである）。
                </p>
                <p>
                    これらをすべてのベクトル <InlineMath math="x" /> にわたって掛け合わせた無限次元の直積空間 <InlineMath math="\Omega = \prod_{x \in X} D_x" /> を考える。<InlineMath math="X^*" /> の単位閉球の元 <InlineMath math="f" /> は <InlineMath math="|f(x)| \leq \|x\|" /> を満たすため、<InlineMath math="f" /> は <InlineMath math="\Omega" /> の一つの点と見なせる（<InlineMath math="\Omega" /> に埋め込める）。
                </p>
                <p>
                    ここで「コンパクト空間の任意の直積空間はまたコンパクトである」という、位相空間論における最重要定理である<b>ティコノフの定理</b>（参照：3-12 位相空間論II）を適用する。これにより巨大空間 <InlineMath math="\Omega" /> が直積位相でコンパクトとなる。弱*位相による埋め込み先の像がその閉集合になることが示せるため、閉じた部分空間はコンパクトを引き継ぎ、アラオグルの定理が証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                「元の空間」と「その第二双対空間」が完全に一致するほど素性の良い空間であれば、単なる弱位相と弱*位相の区別さえ無くなります。これを反射的空間と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 5.4-3 (反射的空間)">
                <p>
                    バナッハ空間 <InlineMath math="X" /> が<b>反射的（reflexive）</b>であるとは、第一節で導入した第二双対空間への標準埋め込み <InlineMath math="J : X \to X^{**}" /> が全射になること。すなわち、<InlineMath math="X \cong X^{**}" /> となる関係を満たすことを言う。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-2 (反射的な空間の例)">
                <p>
                    <InlineMath math="1 < p < \infty" /> の場合、<InlineMath math="\ell^p" /> 空間やルベーグ空間 <InlineMath math="L^p" /> はすべて反射的である。<InlineMath math="(\ell^p)^* = \ell^q" /> 、そして <InlineMath math="(\ell^q)^* = \ell^p" /> と綺麗に往復できる。特に <InlineMath math="p=2" /> のヒルベルト空間はすべて反射的である。
                </p>
                <p>
                    一方、<InlineMath math="c_0" /> （その双対は <InlineMath math="\ell^1" /> で第二双対は <InlineMath math="\ell^\infty" />）は反射的ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="最適化定理への応用">
                <p>
                    反射的空間においては「有界な点列は（強収束しなくても）必ず弱収束する部分列を持つ」という非常に便利な性質が成り立ちます。これにより、「偏微分方程式の弱解の存在」や「最適化問題における（最小値を与える）最適解の存在」を証明するのが劇的に簡単になります。（最適化理論との接続については 4-4 凸解析 のトピックで深く扱います。）
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>弱位相、弱*位相は、それぞれ「双対空間の元を通して見たとき」「元の空間の元を通して見たとき」に連続となるような「甘い位相」のことである。</li>
                    <li>バナッハ-アラオグルの定理により、弱*位相における双対空間の単位球はコンパクトになり、無限次元特有の逃げ回り現象を抑え込める（Theorem 5.4-1）。</li>
                    <li>標準埋め込みが全射となる「反射的空間」においては、有界な集合が弱コンパクト性を獲得するなど、解析学上極めて優れた性質が発揮される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
