import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DifferentialAndRankTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で「微分が同型ならば」という条件を扱いましたが、写像の微分が同型でない場合（次元が異なる多様体間の写像など）にはどのようなことが言えるでしょうか。
                本節では、写像の「ランク」という概念を導入し、ランクが一定である写像の局所的な標準形を与える「定ランク定理」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">写像の微分とランク</h2>

            <p>
                第3章で接空間を厳密に定義するのに先立ち、ここではチャートを通したヤコビ行列として「写像の微分」と「ランク」を定義します。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (写像の微分とランク)">
                <p>
                    <InlineMath math="f : M \to N" /> を滑らかな写像とし、<InlineMath math="p \in M" /> とする。
                    <InlineMath math="p" /> の周りのチャート <InlineMath math="(U, \varphi)" /> と <InlineMath math="f(p)" /> の周りのチャート <InlineMath math="(V, \psi)" /> を用いた座標表示を <InlineMath math="\tilde{f} = \psi \circ f \circ \varphi^{-1}" /> とする。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="p" /> における <InlineMath math="f" /> の <b>微分（differential）</b> <InlineMath math="df_p" /> とは、この座標表示 <InlineMath math="\tilde{f}" /> の <InlineMath math="\varphi(p)" /> におけるヤコビ行列によって表現される線形写像のことである。
                </p>
                <p className="mt-2">
                    また、このヤコビ行列の行列としてのランク（階数：一次独立な行ベクトルまたは列ベクトルの最大数）を、写像 <InlineMath math="f" /> の点 <InlineMath math="p" /> における <b>ランク（rank）</b> といい、<InlineMath math="\mathrm{rank}_p(f)" /> と表す。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ チャートを取り替えても、ヤコビ行列は正則行列を左右から掛けたものに変換されるだけなので、行列のランクはチャートの選び方に依存せず well-defined である。）
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1">
                <p>
                    <strong>ランクが点で変わる例</strong>
                </p>
                <p className="mt-2">
                    写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}" /> を <InlineMath math="f(x, y) = x^2 + y^2" /> で定義する。
                </p>
                <p className="mt-2">
                    この写像のヤコビ行列（この場合は <InlineMath math="1 \times 2" /> 行列、すなわち勾配ベクトル）は
                </p>
                <BlockMath math="J_f(x, y) = \begin{pmatrix} 2x & 2y \end{pmatrix}" />
                <p className="mt-2">
                    である。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>原点 <InlineMath math="(0,0)" /> では <InlineMath math="J_f(0,0) = \begin{pmatrix} 0 & 0 \end{pmatrix}" /> となり、ランクは <InlineMath math="0" /> である。</li>
                    <li>原点以外の点 <InlineMath math="(x, y) \neq (0,0)" /> では、少なくとも一方の成分が非零であるため、ランクは <InlineMath math="1" /> である。</li>
                </ul>
                <p className="mt-2">
                    このように、一般の写像のランクは点によって変化し得る。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定ランク定理</h2>

            <p>
                もし写像のランクがある点の近傍で「一定」であるならば、適切な座標系を選ぶことで、写像を極めて単純な線形写像の形（標準形）に直すことができます。これが定ランク定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (定ランク定理)">
                <p>
                    <InlineMath math="M, N" /> をそれぞれ <InlineMath math="m" /> 次元、<InlineMath math="n" /> 次元の滑らかな多様体とし、<InlineMath math="f : M \to N" /> を滑らかな写像とする。
                </p>
                <p className="mt-2">
                    ある点 <InlineMath math="p \in M" /> の開近傍において、<InlineMath math="f" /> のランクが常に一定値 <InlineMath math="r" /> であるとする。
                </p>
                <p className="mt-2">
                    このとき、<InlineMath math="p" /> の周りのチャート <InlineMath math="(U, \varphi)" /> と <InlineMath math="f(p)" /> の周りのチャート <InlineMath math="(V, \psi)" /> を適切に選ぶと、<InlineMath math="f" /> の座標表示 <InlineMath math="\tilde{f} = \psi \circ f \circ \varphi^{-1}" /> を以下の標準形にすることができる：
                </p>
                <BlockMath math="\tilde{f}(x^1, \dots, x^r, x^{r+1}, \dots, x^m) = (x^1, \dots, x^r, 0, \dots, 0)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の核は、逆関数定理を用いて座標系を段階的に整えていくことにある。
                </p>
                <p className="mt-2">
                    まず、適当なチャートをとり、<InlineMath math="f" /> を <InlineMath math="\mathbb{R}^m" /> の原点近傍から <InlineMath math="\mathbb{R}^n" /> の原点近傍への写像とみなす。
                    原点でのヤコビ行列のランクが <InlineMath math="r" /> であるから、必要なら座標の順序を入れ替えることで、左上の <InlineMath math="r \times r" /> 小行列が正則であると仮定できる。
                </p>
                <p className="mt-2">
                    <InlineMath math="\mathbb{R}^m" /> の新しい座標 <InlineMath math="(y^1, \dots, y^m)" /> を次のように定義する：
                </p>
                <BlockMath math="\begin{cases} y^i = f^i(x^1, \dots, x^m) & (1 \le i \le r) \\ y^j = x^j & (r < j \le m) \end{cases}" />
                <p className="mt-2">
                    この変換の原点におけるヤコビ行列は、左上が正則な <InlineMath math="r \times r" /> 行列、右下が単位行列、左下が零行列となるため、全体として正則である。
                    逆関数定理より、これは原点の近傍で局所微分同相（正当な座標変換）となる。
                    この新しい座標系では、<InlineMath math="f" /> の最初の <InlineMath math="r" /> 個の成分は単に <InlineMath math="(y^1, \dots, y^r)" /> となる。
                </p>
                <p className="mt-2">
                    次に、<InlineMath math="f" /> の残りの成分 <InlineMath math="f^k" /> （<InlineMath math="k > r" />）が、実は <InlineMath math="y^1, \dots, y^r" /> だけに依存し、<InlineMath math="y^{r+1}, \dots, y^m" /> には依存しないことを示す。
                    これは、仮定である「近傍全体でランクが <InlineMath math="r" /> で一定」という条件から従う（ヤコビ行列の残りの行が最初の <InlineMath math="r" /> 行の線形結合になるため、偏微分が <InlineMath math="0" /> になる）。
                </p>
                <p className="mt-2">
                    最後に、<InlineMath math="\mathbb{R}^n" /> 側の新しい座標 <InlineMath math="(z^1, \dots, z^n)" /> を
                </p>
                <BlockMath math="\begin{cases} z^i = w^i & (1 \le i \le r) \\ z^k = w^k - f^k(w^1, \dots, w^r) & (r < k \le n) \end{cases}" />
                <p className="mt-2">
                    と定義する（ここで <InlineMath math="w" /> は変換前の <InlineMath math="\mathbb{R}^n" /> の座標）。これも正則なヤコビ行列を持つため正当な座標変換である。
                    この座標系では、<InlineMath math="f" /> の <InlineMath math="k > r" /> 成分は完全に <InlineMath math="0" /> となり、求める標準形が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-2">
                <p>
                    <strong>定ランク写像の標準形</strong>
                </p>
                <p className="mt-2">
                    写像 <InlineMath math="f : \mathbb{R}^3 \to \mathbb{R}^2" /> を <InlineMath math="f(x, y, z) = (x, y)" /> （<InlineMath math="xy" /> 平面への射影）とする。
                </p>
                <p className="mt-2">
                    ヤコビ行列は <InlineMath math="J_f = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}" /> であり、すべての点でランクは <InlineMath math="2" /> で一定である。
                    この写像は、すでに定ランク定理の標準形 <InlineMath math="(x^1, x^2, x^3) \mapsto (x^1, x^2)" /> そのものになっている。
                </p>
                <p className="mt-2">
                    定ランク定理が主張しているのは、ランクが一定であるような任意の非線形写像は、局所的には「座標系を歪める」ことで、この射影のような単純な線形写像と全く同じ形に直せるということである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="定ランク定理の意義（線形化）">
                <p>
                    微分積分学の基本思想は「非線形な関数を、微分を用いて局所的に線形関数で近似する」ことです。
                    定ランク定理は、単なる近似にとどまらず、「座標系をうまく選べば、局所的には非線形写像を完全に線形写像に変換できる（線形化できる）」という非常に強力な主張です。
                </p>
                <p className="mt-2">
                    次節で学ぶ「はめ込み」や「沈め込み」といった重要な写像のクラスは、すべてこの定ランク定理によって局所的な構造が完全に決定されます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>写像の微分（ヤコビ行列）のランクは、チャートの選び方によらず well-defined である。</li>
                    <li>定ランク定理は、ランクが局所的に一定な写像は、適切な座標系のもとで <InlineMath math="(x^1, \dots, x^m) \mapsto (x^1, \dots, x^r, 0, \dots, 0)" /> という標準形に直せることを保証する。</li>
                    <li>この定理は、逆関数定理を応用して構成的に証明され、非線形写像の局所的な「線形化」を与える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
