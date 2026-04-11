import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfRiemannSurface() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 2 までで、多価関数を自然な一価関数として扱うためには、複素平面そのものではなく、より適切な「拡がった定義域」を考える必要があることを見ました。本章では、そのような「複素解析を行うための自然な舞台」である<b>リーマン面（Riemann surface）</b>を厳密に定義し、その性質を探っていきます。リーマン面とは、局所的には複素平面と同じ構造を持つ曲面（多様体）のことです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン面の定義</h2>

            <p>
                リーマン面は「複素1次元の多様体」とも呼ばれます。まずは、その基礎となる「多様体（幾何学的な構造を持つ空間）」の概念を確認し、そこに「正則性」という複素解析の要請を組み込んで定義していきます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (多様体と局所座標)">
                <p>
                    空間 <InlineMath math="S" /> が <InlineMath math="n" /> 次元の<b>多様体（manifold）</b>であるとは、<InlineMath math="S" /> の各点の周りが <InlineMath math="n" /> 次元のユークリッド空間（または複素空間）の一部と同一視できることをいう。
                </p>
                <p>
                    具体的には、<InlineMath math="S" /> 上の開集合 <InlineMath math="U" /> からユークリッド空間の開集合への同相写像 <InlineMath math="\varphi" /> の組 <InlineMath math="(U, \varphi)" /> を<b>座標チャート（局所座標）</b>と呼び、これらが <InlineMath math="S" /> 全体を覆っている（被覆している）ことが要請される。<InlineMath math="S" /> 全体は、地球儀をたくさんの平面の地図でつなぎ合わせるようにして構成される。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1">
                <p>
                    身近な多様体の例としては、地球の表面（2次元球面）が挙げられます。地球全体を1枚の平らな地図で表すことは不可能ですが、日本周辺の地図やアメリカ周辺の地図など、複数の「局所的な地図（チャート）」を用意し、それらをうまく重ね合わせることで地球の表面全体を記述することができます。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.1-2 (リーマン面)">
                <p>
                    連結なハウスドルフ空間 <InlineMath math="S" /> が<b>リーマン面</b>であるとは、複素1次元（実2次元）の多様体であって、以下の条件を満たす座標チャートの族（アトラス） <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}_{\alpha \in A}" /> を備えていることをいう。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>各 <InlineMath math="U_\alpha" /> は <InlineMath math="S" /> の開集合であり、<InlineMath math="S = \bigcup_{\alpha \in A} U_\alpha" /> と被覆される。</li>
                    <li>各 <InlineMath math="\varphi_\alpha : U_\alpha \to \varphi_\alpha(U_\alpha) \subset \mathbb{C}" /> は、<InlineMath math="U_\alpha" /> から <InlineMath math="\mathbb{C}" /> のある開集合への同相写像（座標チャート）である。</li>
                    <li><InlineMath math="U_\alpha \cap U_\beta \neq \emptyset" /> となる任意の <InlineMath math="\alpha, \beta" /> に対して、座標変換写像
                    <BlockMath math="\varphi_\beta \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)" />
                    が正則（holomorphic）である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.1-3 (正則アトラス)">
                <p>
                    Definition 3.1-2 の条件を満たすチャートの族 <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}" /> を<b>正則アトラス（holomorphic atlas）</b>と呼ぶ。
                    2つの正則アトラスは、それらの和集合が再び正則アトラスとなるときに同値であるとされ、リーマン面の構造は極大な正則アトラスを指定することによって完全に定まる。
                </p>
            </ContentBox>

            <p>
                この定義は、各点の付近では複素平面 <InlineMath math="\mathbb{C}" /> の一部とみなせ（局所同相）、しかも異なる「地図」が重なる部分では、「複素解析的に滑らか（正則）に繋がっている」ことを要請しています。これにより、「複素1次元多様体」としての構造が備わります。
            </p>

            <ContentBox type="example" title="Example 3.1-2">
                <p>
                    最も自明なリーマン面は、複素平面 <InlineMath math="\mathbb{C}" /> 自身です。
                </p>
                <p>
                    ただ1つのチャート <InlineMath math="(U, \varphi)" /> を <InlineMath math="U = \mathbb{C}" />、<InlineMath math="\varphi(z) = z" /> （恒等写像）と定義します。これだけで <InlineMath math="\mathbb{C}" /> 全体を被覆し、座標変換は恒等写像のままであり明らかに正則です。よって <InlineMath math="\mathbb{C}" /> はリーマン面です。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="多様体としての意味合い">
                <p>
                    一般的な実多様体の定義と比べると、単なる連続関数や微分可能関数の代わりに「剛性の高い」正則関数が座標変換として要求されている点が根本的に異なります。この正則性の制約が極めて強いため、実多様体のような自在な変形（例えば局所的な盛り上がりや歪み）が許されなくなり、結果として大域的な幾何学（トポロジー）と解析的性質が密接に結びつくことになります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン面上の正則関数</h2>

            <p>
                リーマン面という舞台が整ったところで、その上で「正則関数」をどのように定義するかを考えます。座標チャートを使って複素平面上の関数に焼き直すことで、自然に定義できます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-4 (リーマン面上の正則関数)">
                <p>
                    <InlineMath math="S" /> をリーマン面とする。関数 <InlineMath math="f : S \to \mathbb{C}" /> が点 <InlineMath math="p \in S" /> において<b>正則である</b>とは、<InlineMath math="p" /> を含む任意のチャート <InlineMath math="(U_\alpha, \varphi_\alpha)" /> に対して、合成関数
                </p>
                <BlockMath math="f \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha) \to \mathbb{C}" />
                <p>
                    が <InlineMath math="\varphi_\alpha(p)" /> の近傍で（通常の意味で）正則であることをいう。<InlineMath math="S" /> のすべての点で正則な関数を、単に <InlineMath math="S" /> 上の正則関数と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-3">
                <p>
                    <InlineMath math="\mathbb{C}" /> 自身を自明なリーマン面（<InlineMath math="\varphi(z) = z" />）とみなしたとき、<InlineMath math="\mathbb{C}" /> 上のリーマン面としての正則関数 <InlineMath math="f" /> は、
                </p>
                <BlockMath math="f \circ \varphi^{-1}(z) = f(\varphi^{-1}(z)) = f(z)" />
                <p>
                    が正則であることと同値になります。つまり、従来の「複素平面上の正則関数」と全く同一のものになります。
                </p>
            </ContentBox>

            <p>
                定義がチャートの選び方に依存しないことは非常に重要です。もし点 <InlineMath math="p" /> を含む別のチャート <InlineMath math="U_\beta" /> があった場合、
            </p>
            <BlockMath math="f \circ \varphi_\beta^{-1} = (f \circ \varphi_\alpha^{-1}) \circ (\varphi_\alpha \circ \varphi_\beta^{-1})" />
            <p>
                と分解できます。<InlineMath math="f \circ \varphi_\alpha^{-1}" /> が正則であり、かつ座標変換 <InlineMath math="\varphi_\alpha \circ \varphi_\beta^{-1}" /> もリーマン面の定義から正則であるため、正則関数同士の合成関数として <InlineMath math="f \circ \varphi_\beta^{-1}" /> も自動的に正則になります。
            </p>
            <p>
                このように「座標変換の正則性」が、リーマン面上での解析を可能にする接着剤となっているのです。次節では、実際に多価関数を基にして、非自明なリーマン面を構成していく手順を見ていきます。
            </p>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>リーマン面は、局所的に <InlineMath math="\mathbb{C}" /> の開集合と同相であり、互いの貼り合わせ（座標変換）が正則写像となっている空間である。</li>
                    <li>リーマン面上の正則関数は、チャートを経由して複素平面上の関数に落とし込んだとき、それが通常の意味で正則であるものとして矛盾なく定義される。</li>
                    <li>座標変換の正則性により、正則関数の概念がチャートの取り方によらずに「well-defined」となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
