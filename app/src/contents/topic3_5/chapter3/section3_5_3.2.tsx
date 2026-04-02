import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LyapunovStabilityDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                平衡点周りの挙動を分類した後は、その平衡点が「安定」であるかどうかを数学的に厳密に定義する必要があります。
                本節では、リャプノフによる安定性の定義と、線形系における固有値を用いた具体的な判定基準を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リャプノフ意味での安定性</h2>

            <p className="leading-relaxed">
                平衡点が「安定」であるとは、直感的には「近くから出発した軌道が遠くへ行かない」ことを意味します。これを <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いて定式化します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (安定性：リャプノフ意味)">
                <p>
                    平衡点 <InlineMath math="\mathbf{x}^*" /> が<b>安定</b>（stable）であるとは、任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="\delta > 0" /> が存在して、
                    <BlockMath math="|\mathbf{x}(0) - \mathbf{x}^*| < \delta \implies |\mathbf{x}(t) - \mathbf{x}^*| < \varepsilon \quad (\forall t \geq 0)" />
                    が成立することをいう。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                安定性よりも強い性質として、平衡点に収束する場合を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-2 (漸近安定性)">
                <p>
                    平衡点 <InlineMath math="\mathbf{x}^*" /> が<b>漸近安定</b>（asymptotically stable）であるとは、安定であり、かつある <InlineMath math="\delta > 0" /> が存在して、
                    <BlockMath math="|\mathbf{x}(0) - \mathbf{x}^*) < \delta \implies \lim_{t \to \infty} \mathbf{x}(t) = \mathbf{x}^* " />
                    が成立することをいう。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.2-3 (不安定性)">
                <p>
                    安定でない平衡点を<b>不安定</b>（unstable）であるという。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                安定だが漸近安定でない例として、「中心」のケースを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.2-1 (安定だが漸近安定でない例)">
                <p>
                    調和振動子の系 <InlineMath math="\dot{x}_1 = -x_2, \dot{x}_2 = x_1" /> を考えます。平衡点は原点で、固有値は純虚数 <InlineMath math="\pm i" /> です。
                    軌道は円 <InlineMath math="x_1^2 + x_2^2 = \text{const}" /> となり、原点への距離は常に一定です。
                    したがって、初期条件を近くに取れば軌道は一定の範囲（<InlineMath math="\varepsilon" /> 内）に留まりますが、原点に収束することはありません。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                不安定な場合の典型例も確認します。
            </p>

            <ContentBox type="example" title="Example 3.2-2 (不安定の例)">
                <p>
                    単一次元の系 <InlineMath math="\dot{x} = x" /> を考えます。平衡点 <InlineMath math="x^* = 0" /> において、
                    初期値 <InlineMath math="x(0) = \delta/2" /> をいくら小さく取っても、解 <InlineMath math="x(t) = \frac{\delta}{2}e^t" /> は時間とともに指数関数的に増大し、任意の <InlineMath math="\varepsilon" /> を超えてしまいます。
                    ゆえに原点は不安定です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">線形系の安定性判定</h2>

            <p className="leading-relaxed">
                線形系 <InlineMath math="\dot{\mathbf{x}} = A \mathbf{x}" /> において、平衡点（原点）の安定性は行列 <InlineMath math="A" /> の固有値の実部のみによって決定されます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (線形系の安定性判定)">
                <p>
                    行列 <InlineMath math="A" /> の固有値を <InlineMath math="\lambda_j" /> としたとき、以下の判定が成り立つ：
                </p>
                <ul className="list-decimal list-inside mt-4 leading-relaxed space-y-2">
                    <li><b>漸近安定</b> <InlineMath math="\iff \forall j, \mathrm{Re}\lambda_j < 0" /></li>
                    <li><b>不安定</b> <InlineMath math="\iff \exists j, \mathrm{Re}\lambda_j > 0" /></li>
                    <li><b>安定</b>（漸近安定とは限らない） <InlineMath math="\iff \forall j, \mathrm{Re}\lambda_j \leq 0" /> かつ、実部が 0 の固有値についてはその幾何学的重複度と代数的重複度が一致する（ジョルダン細胞が 1 次）。</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                この判定基準は、行列指数関数 <InlineMath math="e^{tA}" /> の各成分の振る舞いから導かれます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    定数係数線形系の一般解は、ジョルダン標準形の各ブロックから得られる項 <InlineMath math="t^k e^{\lambda_j t}" /> の線形結合で表される。
                </p>
                <ol className="list-decimal list-inside space-y-3 mt-4">
                    <li>
                        <b>漸近安定性</b>：すべての固有値の実部が負（<InlineMath math="\mathrm{Re}\lambda_j < 0" />）ならば、任意の非負整数 <InlineMath math="k" /> に対して <InlineMath math="\lim_{t \to \infty} t^k e^{\mathrm{Re}\lambda_j t} = 0" /> となる。
                        したがって、すべての初期値に対して解は指数関数的に 0 へ収束し、原点は漸近安定となる。
                    </li>
                    <li>
                        <b>不安定性</b>：少なくとも一つの固有値の実部が正（<InlineMath math="\exists j, \mathrm{Re}\lambda_j > 0" />）ならば、対応する固有ベクトル方向の解成分は <InlineMath math="e^{\mathrm{Re}\lambda_j t}" /> に比例して無制限に増大する。
                        これにより、平衡点は不安定となる。
                    </li>
                    <li>
                        <b>安定性の臨界ケース</b>：実部が 0 の固有値が存在し、かつ実部が正の固有値が存在しない場合を考える。
                        もしジョルダン細胞が 2 次以上（代数的重複度 &gt; 幾何学的重複度）であれば、<InlineMath math="t^k \ (k \geq 1)" /> の項が現れ、多項式的に増大するため不安定である。
                        ジョルダン細胞がすべて 1 次であれば、対応する項は定数または純粋な振動となり、有界に保たれるため安定（ただし漸近安定ではない）となる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                線形化と非線形系の関係について、重要な注意を付け加えます。
            </p>

            <ContentBox type="remark" title="線形化による安定性判定の限界">
                <p>
                    非線形系において、線形化系の固有値の実部がすべて負ならば元の系も局所的に漸近安定です。
                    しかし、線形化系の固有値の実部が最大で 0 の場合、線形化だけでは安定性を判断できません。
                    例えば、<InlineMath math="\dot{x} = -x^3" />（安定）と <InlineMath math="\dot{x} = x^3" />（不安定）は、いずれも線形化すると <InlineMath math="\dot{y} = 0" />（安定だが漸近安定でない）となり、区別がつかなくなります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>安定性</b>とは、初期値の小さなズレが時間の経過とともに有界に保たれることである。</li>
                    <li><b>漸近安定性</b>は、安定であり、かつ平衡点に収束することを要求する。</li>
                    <li><b>線形系</b>においては、<b>固有値の実部</b>がすべて負であれば漸近安定である。</li>
                    <li>実部が 0 の固有値が含まれる場合、非線形項の寄与やジョルダン構造が安定性を左右する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
