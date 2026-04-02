import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DoubleDualSpace() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                双対空間 <InlineMath math="V^*" /> もベクトル空間であるため、「双対の双対」、すなわち<strong>二重双対空間（Double Dual Space）</strong> <InlineMath math="V^{**}" /> を考えられます。
                有限次元では <InlineMath math="V" /> と <InlineMath math="V^{**}" /> を基底の選び方によらず同一視でき、自然な同型となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">二重双対空間</h2>

            <ContentBox type="definition" title="Definition 4.4-1 （二重双対空間 / Double Dual Space）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> の双対空間 <InlineMath math="V^*" /> に対し、さらにその双対空間 <InlineMath math="(V^*)^*" /> を <InlineMath math="V" /> の<strong>二重双対空間</strong>と呼び、<InlineMath math="V^{**}" /> と表す。<br />
                    すなわち <InlineMath math="V^{**}" /> の要素は、「線形汎関数 <InlineMath math="f \in V^*" /> を入力として受け取り、スカラーを出力する」ような線形写像である。
                </p>
                <BlockMath math="V^{**} = \{ \Phi \mid \Phi: V^* \to K, \, \Phi \text{ は線形汎関数} \}" />
            </ContentBox>

            <p className="mt-6">
                ここからが面白いところです。<InlineMath math="V" /> のベクトル <InlineMath math="\boldsymbol{x}" /> を用いて、<InlineMath math="V^{**}" /> の要素（汎関数の評価関数）を非常に「自然に」作り出すことができます。
            </p>

            <ContentBox type="definition" title="Definition 4.4-2 （自然な埋め込み写像）">
                <p>
                    <InlineMath math="V" /> の任意のベクトル <InlineMath math="\boldsymbol{x}" /> に対して、「<InlineMath math="V^*" /> の関数 <InlineMath math="f" /> を受け取って、その関数に <InlineMath math="\boldsymbol{x}" /> を代入した値 <InlineMath math="f(\boldsymbol{x})" /> を返す」という働きをする関数 <InlineMath math="\Phi_{\boldsymbol{x}}" /> を考える。
                </p>
                <BlockMath math="\Phi_{\boldsymbol{x}}(f) = f(\boldsymbol{x}) \quad (\text{任意の } f \in V^*)" />
                <p>
                    この <InlineMath math="\Phi_{\boldsymbol{x}}" /> は <InlineMath math="V^*" /> から <InlineMath math="K" /> への線形写像（つまり <InlineMath math="V^{**}" /> の要素）になる。<br />
                    ベクトル <InlineMath math="\boldsymbol{x} \in V" /> をこの <InlineMath math="\Phi_{\boldsymbol{x}} \in V^{**}" /> に対応させる写像 <InlineMath math="J: V \to V^{**}, \, J(\boldsymbol{x}) = \Phi_{\boldsymbol{x}}" /> は線形写像になる。これを<strong>自然な埋め込み</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                式 <InlineMath math="\Phi_{\boldsymbol{x}}(f) = f(\boldsymbol{x})" /> は抽象的に見えても、座標を入れた具体的な線形汎関数に対しては単なる代入計算にほかなりません。
            </p>

            <ContentBox type="example" title="Example 4.4-1 （評価汎関数の数値）">
                <p>
                    <InlineMath math="V = \mathbb{R}^2" /> とし、ベクトル <InlineMath math="\boldsymbol{x} = (1, 2)^T" /> をとる。線形汎関数 <InlineMath math="f \in V^*" /> を
                </p>
                <BlockMath math="f(s, t) = s + 2t" />
                <p>
                    で与える（これは <InlineMath math="(s, t)" /> に関する一次式であり、確かに線形汎関数である）。このとき
                </p>
                <BlockMath math="\Phi_{\boldsymbol{x}}(f) = f(\boldsymbol{x}) = f(1, 2) = 1 + 2 \cdot 2 = 5" />
                <p>
                    となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                <InlineMath math="\Phi_{\boldsymbol{x}}" /> が線形汎関数であり、対応 <InlineMath math="J" /> が線形写像であることは、次のように確かめられます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p className="font-bold"><InlineMath math="\Phi_{\boldsymbol{x}}" /> が線形汎関数であること：</p>
                <p>
                    関数 <InlineMath math="\Phi_{\boldsymbol{x}}" /> が線形であることを示す。任意の <InlineMath math="f, g \in V^*" /> とスカラー <InlineMath math="c" /> に対し、
                </p>
                <BlockMath math="\begin{aligned} \Phi_{\boldsymbol{x}}(f+g) &= (f+g)(\boldsymbol{x}) = f(\boldsymbol{x}) + g(\boldsymbol{x}) \\ &= \Phi_{\boldsymbol{x}}(f) + \Phi_{\boldsymbol{x}}(g) \end{aligned}" />
                <BlockMath math="\Phi_{\boldsymbol{x}}(cf) = (cf)(\boldsymbol{x}) = c \cdot f(\boldsymbol{x}) = c \Phi_{\boldsymbol{x}}(f)" />
                <p>
                    となるため、たしかに <InlineMath math="\Phi_{\boldsymbol{x}} \in V^{**}" /> である。
                </p>

                <p className="font-bold"><InlineMath math="J" /> が線形写像であること：</p>
                <p>
                    対応 <InlineMath math="J(\boldsymbol{x}) = \Phi_{\boldsymbol{x}}" /> が線形であることを示す。<br />
                    任意のベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> とスカラー <InlineMath math="c" /> に対し、<InlineMath math="J(\boldsymbol{x} + \boldsymbol{y})" /> と <InlineMath math="J(\boldsymbol{x}) + J(\boldsymbol{y})" /> が関数として一致することを見る。任意の <InlineMath math="f \in V^*" /> に対して、
                </p>
                <BlockMath math="[J(\boldsymbol{x} + \boldsymbol{y})](f) = \Phi_{\boldsymbol{x} + \boldsymbol{y}}(f) = f(\boldsymbol{x} + \boldsymbol{y})" />
                <p>
                    ここで <InlineMath math="f" /> は線形汎関数であるため、
                </p>
                <BlockMath math="\begin{aligned} &f(\boldsymbol{x} + \boldsymbol{y}) \\ &= f(\boldsymbol{x}) + f(\boldsymbol{y}) \\ &= \Phi_{\boldsymbol{x}}(f) + \Phi_{\boldsymbol{y}}(f) \\ &= [J(\boldsymbol{x})](f) + [J(\boldsymbol{y})](f) \\ &= [J(\boldsymbol{x}) + J(\boldsymbol{y})](f) \end{aligned}" />
                <p>
                    よって <InlineMath math="J(\boldsymbol{x} + \boldsymbol{y}) = J(\boldsymbol{x}) + J(\boldsymbol{y})" />。同様に <InlineMath math="J(c\boldsymbol{x}) = c J(\boldsymbol{x})" /> も示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限次元における自然な同型</h2>

            <p className="leading-relaxed">
                さらに、自然な埋め込みに関して以下の定理が成り立ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 （有限次元空間における自然な同型）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> が有限次元であるとき、自然な埋め込み <InlineMath math="J: V \to V^{**}" /> は<strong>同型写像（全単射）</strong>となる。<br />
                    すなわち、有限次元空間において <InlineMath math="V" /> と二重双対空間 <InlineMath math="V^{**}" /> は同一視できる（<InlineMath math="V \cong V^{**}" />）。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                証明の核は、「すべての <InlineMath math="f \in V^*" /> で <InlineMath math="f(\boldsymbol{x}) = 0" /> なら <InlineMath math="\boldsymbol{x} = \boldsymbol{0}" />」という事実で、双対基底が決定的な役割を果たします。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="V" /> と <InlineMath math="V^{**}" /> は次元が同じ（<InlineMath math="\dim V = \dim V^* = \dim (V^*)^*" />）であるため、次元定理の系より <InlineMath math="J" /> が「単射であること」を示せば全単射と同値になる。<br />
                    Proposition 3.2-3より、単射を示すには <InlineMath math="\ker J = \{\boldsymbol{0}\}" />、すなわち「<InlineMath math="J(\boldsymbol{x})" /> がゼロ関数ならば <InlineMath math="\boldsymbol{x} = \boldsymbol{0}" />」を示せばよい。
                </p>
                <p>
                    <InlineMath math="\boldsymbol{x} \in \ker J" /> とする。<InlineMath math="J(\boldsymbol{x}) = \Phi_{\boldsymbol{x}}" /> はゼロ関数（すなわちすべての <InlineMath math="f \in V^*" /> に対して <InlineMath math="\Phi_{\boldsymbol{x}}(f) = 0" />）である。<br />
                    これは、「すべての線形汎関数 <InlineMath math="f" /> について <InlineMath math="f(\boldsymbol{x}) = 0" /> になる」ということを意味している。
                </p>
                <p>
                    もし <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" /> であれば、<InlineMath math="\boldsymbol{x}" /> を含む基底 <InlineMath math="\{\boldsymbol{x}, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n\}" /> を作ることができ、その双対基底のうちの最初の関数 <InlineMath math="f_1" /> は <InlineMath math="f_1(\boldsymbol{x}) = 1 \neq 0" /> となるはずである。<br />
                    すべての関数で0になってしまうのは <InlineMath math="\boldsymbol{x} = \boldsymbol{0}" /> の場合に限られる。<br />
                    したがって <InlineMath math="\ker J = \{\boldsymbol{0}\}" /> であり、<InlineMath math="J" /> は単射である。次元が等しいため自動的に全射にもなり、<InlineMath math="J" /> は同型写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この同型は基底を選ぶことなく定まっており、<InlineMath math="V \cong V^*" /> のときの「基底依存の同型」と対照的です。
            </p>

            <ContentBox type="remark" title="「自然な」について">
                <p>
                    <InlineMath math="V" /> と <InlineMath math="V^*" /> も（有限次元であれば）同じ次元を持つため同型になります。しかし、その同型写像を作るためには「基底」を人為的に選ぶ必要がありました（基底を変えれば同型の対応も変わってしまう）。<br />
                    一方、<InlineMath math="V" /> から <InlineMath math="V^{**}" /> への同型写像 <InlineMath math="J" /> は<strong>「基底を一切使わずに」構成されています。</strong> これが数学で「自然な（Natural）」と呼ばれる所以であり、元の空間と二重双対空間が「本質的に完全に同じもの」と見なされる理由です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>双対空間の双対空間を<strong>二重双対空間</strong> <InlineMath math="V^{**}" /> という（Definition 4.4-1）。</li>
                    <li><InlineMath math="V" /> の各ベクトルを「関数に代入する操作そのもの」に読み換えることで、<InlineMath math="V" /> から <InlineMath math="V^{**}" /> への<strong>自然な埋め込み写像</strong>が構成できる（Definition 4.4-2）。</li>
                    <li>有限次元においてはこの埋め込みは常に同型となり、<InlineMath math="V" /> と <InlineMath math="V^{**}" /> は基底の選び方に依存せず（自然に）同一視できる（Theorem 4.4-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
