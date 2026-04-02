import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TaylorExpansionAndIdentity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                正則関数が無限回微分可能である（§5.1）ことは分かりましたが、さらに進んで「級数として表現できる」という強力な性質が導かれます。
                これにより、局所的な振る舞いが全体の姿を決定するという驚異的な <strong>一致の定理</strong> が生まれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テイラー展開</h2>

            <p>
                正則関数は、その正則である領域内において必ず冪級数（テイラー展開）で表すことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1 (テイラー展開定理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が点 <InlineMath math="z_0" /> を中心とする半径 <InlineMath math="R" /> の円板内（<InlineMath math="|z - z_0| < R" />）で正則ならば、その範囲で次のように冪級数展開できる。
                </p>
                <BlockMath math="f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n" />
                <p>
                    ここで係数 <InlineMath math="a_n" /> は次のように与えられる。
                </p>
                <BlockMath math="a_n = \frac{f^{(n)}(z_0)}{n!} = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{(z - z_0)^{n+1}} dz" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    円板内の点 <InlineMath math="z" /> を囲む円 <InlineMath math="\gamma" /> に対して、コーシーの積分公式を用いる。
                </p>
                <BlockMath math="f(z) = \frac{1}{2\pi i} \oint_\gamma \frac{f(w)}{w - z} \, dw" />
                <p>
                    分母を <InlineMath math="1/(w - z) = 1/((w - z_0) - (z - z_0)) = \frac{1}{w - z_0} \cdot \frac{1}{1 - \frac{z - z_0}{w - z_0}}" /> と変形し、等比級数展開する。
                </p>
                <BlockMath math="\frac{1}{w - z} = \sum_{n=0}^\infty \frac{(z - z_0)^n}{(w - z_0)^{n+1}}" />
                <p>
                    この級数は一様収束するため、積分の外に出すことができ、各項がグルサの公式（係数 <InlineMath math="a_n" />）に対応する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                実解析では「無限回微分可能なのにテイラー展開できない」という病的な例が存在しますが、複素解析では <strong>「正則である（一回微分可能）」ことと「解析的である（級数展開可能）」ことが同値</strong> になります。
            </p>

            <ContentBox type="example" title="Example 5.4-1 (主要な関数の展開)">
                <p>
                    中心 <InlineMath math="z_0 = 0" /> における代表的な展開です。実関数の場合と全く同じ形をしています。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="e^z = \sum_{n=0}^\infty \frac{z^n}{n!}" /> （全平面で収束）</li>
                    <li><InlineMath math="\sin z = \sum_{n=0}^\infty \frac{(-1)^n z^{2n+1}}{(2n+1)!}" /> （全平面で収束）</li>
                    <li><InlineMath math="\frac{1}{1-z} = \sum_{n=0}^\infty z^n" /> （<InlineMath math="|z| < 1" /> で収束）</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一致の定理</h2>

            <p>
                級数展開ができるということは、関数の挙動が係数（すなわち点 <InlineMath math="z_0" /> での情報）だけに支配されていることを意味します。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-2 (一致の定理)">
                <p>
                    領域 <InlineMath math="U" /> 上の 2 つの正則関数 <InlineMath math="f, g" /> が、<InlineMath math="U" /> の中で集積点を持つような部分集合上で <InlineMath math="f(z) = g(z)" /> ならば、
                </p>
                <BlockMath math="f(z) = g(z) \quad (\text{for all } z \in U)" />
                <p>
                    が成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="h = f - g" /> とし、<InlineMath math="h" /> の零点の集合が集積点 <InlineMath math="z_* \in U" /> を持つとする。
                    <InlineMath math="z_*" /> の周りで <InlineMath math="h(z)" /> をテイラー展開し、最小の非ゼロ係数を持つ項を考えると、集積点の定義に反する。
                    したがって全ての係数が 0（<InlineMath math="h \equiv 0" />）となり、<InlineMath math="z_*" /> の近傍で一致する。
                    領域が連結であることから、この「一致する近傍」の連鎖により領域全体で一致が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                これは、正則関数の「DNA」は点の周りの極めて狭い範囲にすべて書き込まれており、それが領域全体へと波及することを示唆しています。
            </p>

            <ContentBox type="example" title="Example 5.4-2 (実数公式の複素数への拡張)">
                <p>
                    実数の世界でよく知られている公式 <InlineMath math="\sin^2 x + \cos^2 x = 1" /> を考えましょう。
                </p>
                <p>
                    左辺から右辺の差を <InlineMath math="h(z) = \sin^2 z + \cos^2 z - 1" /> とおくと、
                    これは実軸上で 0 となる正則関数です。
                    一致の定理より、実軸という「集積点を持つ集合」で 0 である以上、
                    複素平面全体でも <InlineMath math="h(z) = 0" />、すなわち
                </p>
                <BlockMath math="\sin^2 z + \cos^2 z = 1" />
                <p>
                    が任意の複素数 <InlineMath math="z" /> で成立することが自動的にわかります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則関数は常に点 <InlineMath math="z_0" /> の周りでテイラー展開が可能である。</li>
                    <li>収束半径は、<InlineMath math="z_0" /> から最も近い特異点までの距離で決まる。</li>
                    <li>一致の定理により、局所的に等しい正則関数は領域全体で一致する。</li>
                    <li>これにより、実数で成り立つ多くの公式が複素数へと自然に拡張される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
