import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormalOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                自己共役作用素とユニタリ作用素は、どちらも「自分自身と自らの随伴作用素が可換（作用させる順序を変えても同じ）」であるという共通した非常に良い性質を持っています。これらを包括するクラスが正規作用素です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規作用素の定義と性質</h2>

            <p>
                正規作用素は、自己共役作用素とユニタリ作用素を特別な場合として含む、最も自然に拡張された「良い」作用素のクラスです。
            </p>

            <ContentBox type="definition" title="Definition 8.3-1 (正規作用素)">
                <p>
                    有界線形作用素 <InlineMath math="T" /> が、その随伴作用素 <InlineMath math="T^*" /> と可換であるとき、すなわち
                </p>
                <BlockMath math="T^* T = T T^*" />
                <p>
                    を満たすとき、<InlineMath math="T" /> を<b>正規作用素（normal operator）</b>という。
                </p>
            </ContentBox>

            <p>
                前節で学んだ作用素が、この定義の条件を実際に満たしていることを確認しておきましょう。
            </p>

            <ContentBox type="remark" title="自己共役作用素・ユニタリ作用素との関係">
                <p>
                    ・自己共役作用素は <InlineMath math="T^* = T" /> なので、<InlineMath math="T^* T = TT = T T^*" /> となり明らかに正規作用素です。<br />
                    ・ユニタリ作用素は <InlineMath math="T^* T = I = T T^*" /> なので、これも明らかに正規作用素です。<br />
                    正規作用素は、実数（自己共役）や絶対値1の複素数（ユニタリ）だけでなく、「一般の複素数」に対応する性質を持っています。
                </p>
            </ContentBox>

            <p>
                正規作用素の最も特徴的な性質は、任意のベクトルを作用させたときのノルムが、随伴作用素を作用させたときと完全に一致することです。
            </p>

            <ContentBox type="theorem" title="Proposition 8.3-1">
                <p>
                    正規作用素 <InlineMath math="T" /> に対して、すべてのベクトル <InlineMath math="x \in H" /> で以下が成り立つ。
                </p>
                <BlockMath math="\|Tx\| = \|T^* x\|" />
            </ContentBox>

            <p>
                正規性の定義（可換性）を内積の形に書き直すことで、この強力な等式が証明されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    内積の定義と正規性（<InlineMath math="T^* T = T T^*" />）を用いて計算する。<br />
                    <InlineMath math="\|Tx\|^2" /> は次のように展開できる。
                </p>
                <BlockMath math="\|Tx\|^2 = \langle Tx, Tx \rangle = \langle x, T^* (Tx) \rangle = \langle x, T^*T x \rangle" />
                <p>
                    ここで <InlineMath math="T" /> が正規作用素であることから <InlineMath math="T^* T = T T^*" /> を用いると、
                </p>
                <BlockMath math="\langle x, T T^* x \rangle = \langle T^* x, T^* x \rangle = \|T^* x\|^2" />
                <p>
                    となり、<InlineMath math="\|Tx\| = \|T^* x\|" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                自己共役でもユニタリでもないが、正規作用素であるような具体的な作用素の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 8.3-1">
                <p>
                    正規であるが、自己共役でもユニタリでもない作用素の例を挙げます。<br />
                    <InlineMath math="\ell^2" /> 上の対角作用素 <InlineMath math="T(x_n) = (\lambda_n x_n)" /> において、<InlineMath math="\lambda_n = 1 + i/n" /> とします。<br />
                    これは複素数であるため自己共役ではなく、絶対値が1でもないためユニタリでもありません。<br />
                    しかし、<InlineMath math="T^*(x_n) = (\overline{\lambda_n} x_n)" /> であり、対角作用素同士は常に可換であるため、<InlineMath math="T^*T = TT^*" /> となり正規作用素の条件を満たします。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規作用素の固有空間</h2>

            <p>
                自己共役作用素の「固有空間が直交する」という性質は、実は正規作用素の性質として一般化されます。
            </p>

            <ContentBox type="theorem" title="Proposition 8.3-2">
                <p>
                    正規作用素 <InlineMath math="T" /> の異なる固有値に属する固有ベクトルは互いに直交する。
                </p>
            </ContentBox>

            <p>
                証明の手法も自己共役作用素の場合（Proposition 8.2-1）と似ていますが、正規作用素特有の性質（随伴とノルムが一致すること）を利用します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、準備として補題を示す。<InlineMath math="T" /> が正規作用素であるとき、定数を用いた平行移動 <InlineMath math="T - \lambda I" /> も正規作用素である（計算で容易に確認できる）。<br />
                    よって Proposition 8.3-1 を <InlineMath math="T - \lambda I" /> に適用すると、
                </p>
                <BlockMath math="\|(T - \lambda I)x\| = \|(T - \lambda I)^* x\| = \|(T^* - \bar{\lambda} I)x\|" />
                <p>
                    したがって、<InlineMath math="Tx = \lambda x" /> であること（左辺が0）と、<InlineMath math="T^* x = \bar{\lambda} x" /> であること（右辺が0）は同値である。<br />
                    さて、<InlineMath math="Tx = \lambda x" /> および <InlineMath math="Ty = \mu y" /> とし、<InlineMath math="\lambda \neq \mu" /> とする。内積 <InlineMath math="\langle Tx, y \rangle" /> を2通りに計算する。
                </p>
                <BlockMath math="\langle Tx, y \rangle = \langle \lambda x, y \rangle = \lambda \langle x, y \rangle" />
                <p>
                    一方で、随伴作用素に移し、先ほどの補題 <InlineMath math="T^* y = \bar{\mu} y" /> を用いると
                </p>
                <BlockMath math="\langle Tx, y \rangle = \langle x, T^* y \rangle = \langle x, \bar{\mu} y \rangle = \mu \langle x, y \rangle" />
                <p>
                    よって <InlineMath math="\lambda \langle x, y \rangle = \mu \langle x, y \rangle" /> となり、<InlineMath math="(\lambda - \mu)\langle x, y \rangle = 0" />。
                    <InlineMath math="\lambda \neq \mu" /> であるため、<InlineMath math="\langle x, y \rangle = 0" />（直交する）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この性質は、行列の対角化論において重要な意味を持つ「自然な一般化」となっています。
            </p>

            <ContentBox type="example" title="Example 8.3-2">
                <p>
                    有限次元（線形代数学）において、複雑な複素行列であっても「対角化可能かつ固有ベクトルが直交する（ユニタリ対角化可能）」ための必要十分条件は、その行列が正規行列（<InlineMath math="A^* A = A A^*" />）であることでした。<br />
                    これは無限次元ヒルベルト空間においても同様であり、正規作用素に対するスペクトル定理（第10章）によって、「良い性質をもつ作用素は必ず直交する分解を持つ」という形で完全に一般化されます。
                </p>
            </ContentBox>

            <p>
                自己共役作用素やユニタリ作用素を含む広範な枠組みである正規作用素について振り返ります。
            </p>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="T^* T = T T^*" /> を満たす作用素を正規作用素とよび、自己共役作用素とユニタリ作用素を包括する。</li>
                    <li>正規作用素は <InlineMath math="\|Tx\| = \|T^* x\|" /> を満たす。</li>
                    <li>自己共役作用素でなくても、正規作用素であれば異なる固有値の固有ベクトルは直交する。これはスペクトル定理の基盤となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
