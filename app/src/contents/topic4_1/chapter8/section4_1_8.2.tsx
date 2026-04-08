import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SelfAdjointAndUnitaryOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で定義した随伴作用素（<InlineMath math="T^*" />）をもとに、自分自身と特別な関係を持つ重要な作用素のクラスを定義します。これらは物理学や応用数学において主役となる作用素です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自己共役作用素</h2>

            <p>
                まずは、作用素が自分自身の随伴と一致する特別なクラスです。有限次元の実対称行列やエルミート行列にあたるものです。
            </p>

            <ContentBox type="definition" title="Definition 8.2-1 (自己共役作用素)">
                <p>
                    有界線形作用素 <InlineMath math="T \in B(H)" /> が、自らの随伴作用素と等しいとき、すなわち
                </p>
                <BlockMath math="T^* = T" />
                <p>
                    （すべての <InlineMath math="x, y \in H" /> に対して <InlineMath math="\langle Tx, y \rangle = \langle x, Ty \rangle" />）を満たすとき、<InlineMath math="T" /> を<b>自己共役作用素（self-adjoint operator）</b>という。
                </p>
            </ContentBox>

            <p>
                自己共役作用素の典型的な例として、実数を掛ける対角作用素を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 8.2-1">
                <p>
                    数列空間 <InlineMath math="\ell^2" /> において、各成分を定数定数倍する対角作用素 <InlineMath math="T(x_n) = (\lambda_n x_n)" /> を考える。<br />
                    ただし、増大しないように <InlineMath math="\sup_n |\lambda_n| < \infty" /> とし、またすべての <InlineMath math="\lambda_n" /> は<b>実数</b>（<InlineMath math="\lambda_n \in \mathbb{R}" />）とする。
                </p>
                <p>
                    このとき <InlineMath math="\langle Tx, y \rangle" /> を計算すると、
                </p>
                <BlockMath math="\sum_{n=1}^\infty (\lambda_n x_n) \overline{y_n} = \sum_{n=1}^\infty x_n \overline{(\lambda_n y_n)} = \langle x, Ty \rangle" />
                <p>
                    （<InlineMath math="\lambda_n" /> が実数なので複素共役をとっても変わらない）となり、この対角作用素は自己共役であることがわかる。
                </p>
            </ContentBox>

            <p>
                自己共役作用素は、非常に「素直な」固有値と固有ベクトルを持っています。これは線形代数におけるエルミート行列に関する定理に直結しています。
            </p>

            <ContentBox type="theorem" title="Proposition 8.2-1">
                <p>
                    自己共役作用素 <InlineMath math="T" /> について以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="T" /> の固有値はすべて実数である。（つまり方程式 <InlineMath math="Tx = \lambda x" /> (<InlineMath math="x \neq 0" />) が解を持つならば <InlineMath math="\lambda \in \mathbb{R}" />）</li>
                    <li>異なる固有値に属する固有ベクトルは互いに直交する。</li>
                </ol>
            </ContentBox>

            <p>
                内積の対称性を利用することで、固有値や固有ベクトルに関するこれらの強力な性質が簡単に導かれます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="Tx = \lambda x" /> かつ <InlineMath math="x \neq 0" /> とする。内積を計算すると、
                </p>
                <BlockMath math="\lambda \|x\|^2 = \lambda \langle x, x \rangle = \langle \lambda x, x \rangle = \langle Tx, x \rangle" />
                <p>
                    <InlineMath math="T" /> は自己共役であるため、<InlineMath math="\langle Tx, x \rangle = \langle x, Tx \rangle" /> となる。よって右辺は
                </p>
                <BlockMath math="\langle x, \lambda x \rangle = \bar{\lambda} \langle x, x \rangle = \bar{\lambda}\|x\|^2" />
                <p>
                    <InlineMath math="x \neq 0" /> ゆえ <InlineMath math="\|x\|^2 \neq 0" /> だから <InlineMath math="\lambda = \bar{\lambda}" /> となり、<InlineMath math="\lambda" /> は実数である。
                </p>
                <p>
                    2. <InlineMath math="Tx = \lambda x" /> および <InlineMath math="Ty = \mu y" /> とし、<InlineMath math="\lambda \neq \mu" /> とする。<br />
                    (1.) の結果から <InlineMath math="\lambda, \mu \in \mathbb{R}" /> である。内積を比較すると、
                </p>
                <BlockMath math="\begin{aligned}
                    \lambda \langle x, y \rangle &= \langle \lambda x, y \rangle = \langle Tx, y \rangle \\
                    &= \langle x, Ty \rangle = \langle x, \mu y \rangle = \mu \langle x, y \rangle
                \end{aligned}" />
                <p>
                    移項して <InlineMath math="(\lambda - \mu)\langle x, y \rangle = 0" /> となるが、<InlineMath math="\lambda \neq \mu" /> なので <InlineMath math="\langle x, y \rangle = 0" />、すなわち直交する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この命題は、線形代数におけるお馴染みの性質を無限次元に拡張したものに他なりません。
            </p>

            <ContentBox type="example" title="Example 8.2-2">
                <p>
                    線形代数学II（2-1）で、「実対称行列の固有値はすべて実数である」というおぼろげな記憶があるはずです。実対称行列はユークリッド空間上の自己共役作用素そのものであり、本命題はその事実の無限次元への完全な一般化に他なりません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">歪自己共役作用素とユニタリ作用素</h2>

            <p>
                自己共役が実数（<InlineMath math="z = \bar{z}" />）のアナロジーであるならば、純虚数（<InlineMath math="z = -\bar{z}" />）や絶対値1の複素数（<InlineMath math="z\bar{z} = 1" />）に対応する作用素も存在します。
            </p>

            <ContentBox type="definition" title="Definition 8.2-2 (歪自己共役作用素)">
                <p>
                    有界線形作用素 <InlineMath math="T" /> が <InlineMath math="T^* = -T" /> を満たすとき、これを<b>歪自己共役作用素（skew-self-adjoint operator）</b>という。
                </p>
            </ContentBox>

            <p>
                一方で、内積空間全体の幾何学的な構造（各ベクトルの長さと角度）を完全に保つ作用素も定義できます。これが絶対値1の複素数に対応する作用素です。
            </p>

            <ContentBox type="definition" title="Definition 8.2-3 (ユニタリ作用素)">
                <p>
                    有界線形作用素 <InlineMath math="U" /> が
                </p>
                <BlockMath math="U^* U = U U^* = I" />
                <p>
                    （すなわち逆作用素が存在し、<InlineMath math="U^{-1} = U^*" />）を満たすとき、これを<b>ユニタリ作用素（unitary operator）</b>という。<br />
                    条件 <InlineMath math="U^* U = I" /> はすべての <InlineMath math="x, y" /> に対して <InlineMath math="\langle Ux, Uy \rangle = \langle x, y \rangle" /> （内積を保つ等長性）を意味し、<InlineMath math="UU^* = I" /> は全射であることを意味する。
                </p>
            </ContentBox>

            <p>
                無限次元空間においてユニタリ作用素となる例と、一見ユニタリに見えてそうではない例を比較します。
            </p>

            <ContentBox type="example" title="Example 8.2-3">
                <p>
                    <InlineMath math="\ell^2" /> において、成分の順番を並べ替える作用素を考える。<br />
                    例えば、要素の順番を一つずつ周期的にずらすような変換は、明らかにベクトルの各成分の2乗和（ノルム）を変えません。<br />
                    ノルム（および内積）を変えず、かつ新しい数列として全射になるような操作はすべてユニタリ作用素の例になります。
                </p>
                <p>
                    一方で前節の左シフト作用素 <InlineMath math="L" /> と右シフト作用素 <InlineMath math="R" /> については、<InlineMath math="LR = I" /> になりますが、<InlineMath math="RL(x_1, x_2, \dots) = (0, x_2, \dots) \neq I" /> となるため、これらは等長（右シフト）や全射（左シフト）であってもユニタリ作用素ではありません。無限次元特有のトラップです。
                </p>
            </ContentBox>

            <p>
                ユニタリ作用素が「絶対値1の複素数」に対応していることは、その固有値に直接表れます。
            </p>

            <ContentBox type="theorem" title="Proposition 8.2-2">
                <p>
                    ユニタリ作用素 <InlineMath math="U" /> の固有値の絶対値は必ず 1 である。<br />
                    すなわち、<InlineMath math="Ux = \lambda x" /> かつ <InlineMath math="x \neq 0" /> ならば <InlineMath math="|\lambda| = 1" />。
                </p>
            </ContentBox>

            <p>
                等長性のみから、極めて明快な計算によってこれが示されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    ユニタリ作用素は内積を保つため（よってノルムも保つ）、
                </p>
                <BlockMath math="\|x\| = \|Ux\| = \|\lambda x\| = |\lambda|\|x\|" />
                <p>
                    <InlineMath math="x \neq 0" /> より <InlineMath math="\|x\| \neq 0" /> だから、両辺を割って <InlineMath math="|\lambda| = 1" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                自己共役作用素とユニタリ作用素は、単なる数学的対象にとどまらず、自然界の法則を記述するために不可欠な概念です。
            </p>

            <ContentBox type="remark" title="量子力学の時間発展とユニタリ作用素">
                <p>
                    量子力学において、物理系の状態はヒルベルト空間上の大きさ1のベクトルとして表されます。時間が経過したときに状態がどう変化するか（時間発展）を考えるとき、状態ベクトルの大きさは常に1のままでなければならない（「確率の総和は1である」という物理的要請）ため、時間発展は空間の構造を保つ作用素、つまりユニタリ作用素によって完全に記述されます（シュレーディンガー方程式）。<br />
                    また、物理的な観測量（エネルギーや運動量）は必ず実数の観測値を持たなければならないため、これらは自己共役作用素として定式化されます。ヒルベルト空間上の作用素論は、現代物理学の言語そのものなのです（5-8 作用素環論でさらに深く扱います）。
                </p>
            </ContentBox>

            <p>
                ヒルベルト空間における主役とも言える2つの重要な作用素クラスについて、要点を整理します。
            </p>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="T^* = T" /> となる作用素を自己共役作用素とよび、固有値は実数で、固有空間は直交する。</li>
                    <li><InlineMath math="T^*T = TT^* = I" /> となる作用素をユニタリ作用素とよび、これは内積を保つ等長全射（同型写像）であることを意味する。固有値の絶対値は1になる。</li>
                    <li>これらは実数、絶対値1の複素数の概念の作用素へと拡張したものであり、物理学で決定的な役割を果たす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
