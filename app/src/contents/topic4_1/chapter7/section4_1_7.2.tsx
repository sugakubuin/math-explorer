import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OrthogonalProjectionAndDirectSum() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で証明した閉部分空間に対する最近傍点の定理を用いることで、ヒルベルト空間全体を「ある閉部分空間」と「その直交補空間」に、きれいに分解することができます。この性質を直交直和分解とよびます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交直和分解</h2>

            <p>
                直交補空間の強力さは、それが常に空間全体を補完する「パズルのもう一つのピース」になる点にあります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (直交分解定理)">
                <p>
                    <InlineMath math="H" /> をヒルベルト空間とし、<InlineMath math="M" /> を <InlineMath math="H" /> の閉部分空間とする。このとき、<InlineMath math="H" /> は <InlineMath math="M" /> と <InlineMath math="M^\perp" /> の直交直和となる。<br />
                    すなわち、<InlineMath math="H = M \oplus M^\perp" /> が成り立ち、任意の <InlineMath math="x \in H" /> は
                </p>
                <BlockMath math="x = m + m' \quad (m \in M,\; m' \in M^\perp)" />
                <p>
                    の形に一意に分解される。
                </p>
            </ContentBox>

            <p>
                この分解の存在と一意性は、前節で学んだ「最近傍点（射影の足）」を起点として証明されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    存在を示す。任意の <InlineMath math="x \in H" /> に対して、前節の Corollary 7.1-1 より、<InlineMath math="M" /> 内への最近傍点 <InlineMath math="m_0 \in M" /> を取ると、<InlineMath math="x - m_0 \in M^\perp" /> であった。そこで、
                </p>
                <BlockMath math="m = m_0, \quad m' = x - m_0" />
                <p>
                    とおけば、<InlineMath math="m \in M" /> および <InlineMath math="m' \in M^\perp" /> であり、<InlineMath math="x = m + m'" /> と書くことができる。<br />
                    次に一意性を示す。<InlineMath math="x = m_1 + m_1' = m_2 + m_2'" /> と2通りに分解できたとする。<br />
                    式を変形すると、<InlineMath math="m_1 - m_2 = m_2' - m_1'" /> となる。左辺は <InlineMath math="M" /> の元であり、右辺は <InlineMath math="M^\perp" /> の元である。したがって、このベクトルは <InlineMath math="M \cap M^\perp" /> に属する。<br />
                    もし <InlineMath math="v \in M \cap M^\perp" /> とすると、自分自身と直交するため <InlineMath math="\langle v, v \rangle = 0" /> となり、<InlineMath math="v = 0" /> である。よって <InlineMath math="m_1 - m_2 = 0" /> かつ <InlineMath math="m_2' - m_1' = 0" /> となり、分解は一意である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                無限次元の数列空間において、直交分解がどのように機能するかを具体的な例で確認しましょう。
            </p>

            <ContentBox type="example" title="Example 7.2-1">
                <p>
                    空間 <InlineMath math="\ell^2" /> において、第3成分以降がすべてゼロであるような元のなす集合を <InlineMath math="M = \{x \in \ell^2 \mid x_n = 0 \ (n \geq 3)\}" /> とおく。これは有限次元（2次元）であるため閉部分空間である。
                </p>
                <p>
                    このとき直交補空間は <InlineMath math="M^\perp = \{x \in \ell^2 \mid x_1 = x_2 = 0\}" /> となる。<br />
                    任意のベクトル <InlineMath math="x = (1, 2, 3, 4, \dots) \in \ell^2" /> は、直交分解定理に従って
                </p>
                <BlockMath math="x = (1, 2, 0, 0, \ldots) + (0, 0, 3, 4, \ldots)" />
                <p>
                    のように、<InlineMath math="m = (1, 2, 0, 0, \ldots) \in M" /> と <InlineMath math="m' = (0, 0, 3, 4, \ldots) \in M^\perp" /> の和として一意に表現される。
                </p>
            </ContentBox>

            <p>
                この分解における第一の成分 <InlineMath math="m" /> を取り出す操作は、空間全体において線形写像を定めます。これを直交射影と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交射影の性質</h2>

            <p>
                直交分解から定まる射影作用素の代数的特性を確認します。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 (直交射影)">
                <p>
                    閉部分空間 <InlineMath math="M" /> による直交分解 <InlineMath math="x = m + m'" /> が与えられたとき、各 <InlineMath math="x" /> に対して <InlineMath math="m" /> を対応させる写像 <InlineMath math="P_M : H \to M \subset H" /> を、<InlineMath math="M" /> への<b>直交射影作用素（orthogonal projection operator）</b>という。<br />
                    （すなわち、<InlineMath math="P_M x = m" /> である）
                </p>
            </ContentBox>

            <p>
                この射影作用素は、分解という幾何学的な操作を代数的な性質として内包しており、以下の重要な命題を満たします。これらは次章の作用素論（§8.4）における基礎となります。
            </p>

            <ContentBox type="theorem" title="Proposition 7.2-1">
                <p>
                    直交射影作用素 <InlineMath math="P_M" /> について以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="P_M" /> は有界線形作用素であり、<InlineMath math="M \neq \{0\}" /> ならば <InlineMath math="\|P_M\| = 1" /> である。</li>
                    <li>べき等性：<InlineMath math="P_M^2 = P_M" /></li>
                    <li>自己共役性：<InlineMath math="P_M^* = P_M" /></li>
                </ol>
            </ContentBox>

            <p>
                「べき等」と「自己共役」という性質は抽象的に見えますが、内積と距離を用いた論理展開で自然に証明されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. 線形性は分解の線形性から直ちに従う。<InlineMath math="x = m + m'" /> において <InlineMath math="m \perp m'" /> であるため、ピタゴラスの定理から
                </p>
                <BlockMath math="\begin{aligned}
                    \|x\|^2 &= \|m + m'\|^2 \\ &= \|m\|^2 + \|m'\|^2 \\ &= \|P_M x\|^2 + \|m'\|^2 \\ &
                    \geq \|P_M x\|^2
                \end{aligned}" />
                <p>
                    これにより、<InlineMath math="\|P_M x\| \leq \|x\|" /> となるため有界であり、ノルムは <InlineMath math="1" /> 以下である。<InlineMath math="x \in M" /> （<InlineMath math="x \neq 0" />）ならば <InlineMath math="P_M x = x" /> より等号が成立し、<InlineMath math="\|P_M\| = 1" /> となる。
                </p>
                <p>
                    2. 任意の <InlineMath math="x" /> に対して <InlineMath math="P_M x \in M" /> である。閉部分空間の元に対する直交分解はそれ自身となる（<InlineMath math="P_M x = P_M x + 0" />）ため、<InlineMath math="P_M(P_M x) = P_M x" /> となる。
                </p>
                <p>
                    3. 任意の <InlineMath math="x, y \in H" /> を <InlineMath math="x = m_1 + m_1'" />、<InlineMath math="y = m_2 + m_2'" /> と分解する。このとき
                </p>
                <BlockMath math="\langle P_M x, y \rangle = \langle m_1, m_2 + m_2' \rangle = \langle m_1, m_2 \rangle + 0 = \langle m_1, m_2 \rangle" />
                <BlockMath math="\langle x, P_M y \rangle = \langle m_1 + m_1', m_2 \rangle = \langle m_1, m_2 \rangle + 0 = \langle m_1, m_2 \rangle" />
                <p>
                    両者が一致するため、随伴作用素の定義より <InlineMath math="P_M^* = P_M" /> が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この命題の最初の証明にも登場したように、直交射影の最も直感的な側面はピタゴラスの定理にあります。
            </p>

            <ContentBox type="example" title="Example 7.2-2">
                <p>
                    幾何学的直感について再確認する。作用素 <InlineMath math="I - P_M" /> を考えると、<InlineMath math="(I - P_M)x = x - P_M x = m'" /> であり、これは直交補空間 <InlineMath math="M^\perp" /> への直交射影作用素を与えている。<br />
                    このとき証明でも現れたピタゴラスの定理
                </p>
                <BlockMath math="\|x\|^2 = \|P_M x\|^2 + \|(I - P_M)x\|^2" />
                <p>
                    は、原点、斜辺となるベクトル <InlineMath math="x" /> の終点、および <InlineMath math="M" /> 上の直交射影の足が、まさに直角三角形をなしていることを図示していると言える。
                </p>
            </ContentBox>

            <p>
                このように、ヒルベルト空間では閉部分空間による射影が単純な代数関係や不等式に落ち込みます。次節では、この直交補空間や射影の概念を発展させ、特殊な基底を構成するための道具を紹介します。
            </p>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヒルベルト空間は、任意の閉部分空間 <InlineMath math="M" /> とその直交補空間 <InlineMath math="M^\perp" /> の直交直和に分解される。</li>
                    <li>直交射影作用素 <InlineMath math="P_M" /> は、ノルムが1の有界線形作用素である。</li>
                    <li><InlineMath math="P_M^2 = P_M" /> （べき等）かつ <InlineMath math="P_M^* = P_M" /> （自己共役）という代数的な特徴を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
