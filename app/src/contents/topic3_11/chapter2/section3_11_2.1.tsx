import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionMultilinearMaps() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                この章では、複数のベクトルを変数としてとる線形写像、すなわち多重線形写像について考察します。まずは、最も基本的な双線形写像と、その一般化である <InlineMath math="n" /> 重線形写像の定義から始めます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">双線形写像と n 重線形写像</h2>

            <p className="leading-relaxed">
                2つのベクトル空間の元を組にして入力とする写像の中で、各変数ごとに線形性を持つものを双線形写像と呼びます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-1 (双線形写像)"
            >
                <p>
                    体 <InlineMath math="\mathbb{k}" /> 上のベクトル空間 <InlineMath math="V, W, U" /> に対して、写像 <InlineMath math="f : V \times W \to U" /> が<strong>双線形写像</strong>であるとは、各変数について線形であること、すなわち以下の性質を満たすことである。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <InlineMath math="f(v_1+v_2, w) = f(v_1, w) + f(v_2, w)" />
                    </li>
                    <li>
                        <InlineMath math="f(\lambda v, w) = \lambda f(v, w)" />
                    </li>
                    <li>
                        <InlineMath math="f(v, w_1+w_2) = f(v, w_1) + f(v, w_2)" />
                    </li>
                    <li>
                        <InlineMath math="f(v, \lambda w) = \lambda f(v, w)" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.1-1 (内積と双線形写像)"
            >
                <p>
                    <strong>内積は双線形写像：</strong><InlineMath math="\mathbb{R}^n" /> 上の標準内積 <InlineMath math="\langle u, v \rangle = \sum_i u_i v_i" /> は、<InlineMath math="\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}" /> の双線形写像である。
                </p>
                <p>
                    実際、<InlineMath math="u_1 = (x_1, \ldots, x_n)" />, <InlineMath math="u_2 = (y_1, \ldots, y_n)" />, <InlineMath math="v = (z_1, \ldots, z_n)" /> に対して、
                    <BlockMath math="\begin{aligned} \langle u_1+u_2, v \rangle &= \sum_i (x_i + y_i)z_i \\ &= \sum_i x_i z_i + \sum_i y_i z_i \\ &= \langle u_1, v \rangle + \langle u_2, v \rangle \end{aligned}" />
                    となり、スカラー倍や第二変数についても同様に確認できる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                同様に、行列の積も双線形写像の典型的な例です。
            </p>

            <ContentBox
                type="example"
                title="Example 2.1-2 (行列積と双線形写像)"
            >
                <p>
                    <strong>行列積は双線形写像：</strong><InlineMath math="(A, B) \mapsto AB" /> は、<InlineMath math="M_{m \times n} \times M_{n \times p} \to M_{m \times p}" /> の双線形写像である。
                </p>
                <p>
                    行列積の分配法則 <InlineMath math="(A_1 + A_2)B = A_1 B + A_2 B" /> やスカラー倍の性質 <InlineMath math="(\lambda A)B = \lambda(AB) = A(\lambda B)" /> が、まさに双線形性を表している。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                変数の数をさらに増やして、<InlineMath math="n" /> 個の変数に対して各々線形性を持つような写像を定義できます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-2 (n 重線形写像)"
            >
                <p>
                    写像 <InlineMath math="f : V_1 \times \cdots \times V_n \to U" /> が <strong><InlineMath math="n" /> 重線形（多重線形）写像</strong> であるとは、各 <InlineMath math="i" /> について他の変数を固定したとき、写像
                    <BlockMath math="v_i \mapsto f(\ldots, v_i, \ldots)" />
                    が <InlineMath math="V_i" /> から <InlineMath math="U" /> への線形写像になることである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">成分表示と基底による記述</h2>

            <p className="leading-relaxed">
                線形写像が基底の像で一意に定まるように、多重線形写像もまた、各空間の基底ベクトルのすべての組み合わせに対する値によって一意に定まります。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 2.1-1 (多重線形写像の基底による決定)"
            >
                <p>
                    <InlineMath math="n" /> 重線形写像 <InlineMath math="f" /> は、基底での値によって一意に決まる。すなわち、各空間 <InlineMath math="V_i" /> の基底 <InlineMath math="\{e^{(i)}_j\}" /> での値 <InlineMath math="f(e^{(1)}_{j_1}, \ldots, e^{(n)}_{j_n})" /> を指定すれば、<InlineMath math="f" /> が一意に定まる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    多重線形性により、任意の元への値は基底の値の多重線形結合として表される。各ベクトルを <InlineMath math="v_i = \sum_{j_i} c^{(i)}_{j_i} e^{(i)}_{j_i}" /> と展開すると、
                    <BlockMath math="\begin{aligned} f(v_1, \ldots, v_n) &= f\left(\sum_{j_1} c^{(1)}_{j_1} e^{(1)}_{j_1}, \ldots, \sum_{j_n} c^{(n)}_{j_n} e^{(n)}_{j_n}\right) \\ &= \sum_{j_1} \cdots \sum_{j_n} c^{(1)}_{j_1} \cdots c^{(n)}_{j_n} f(e^{(1)}_{j_1}, \ldots, e^{(n)}_{j_n}) \end{aligned}" />
                    となる。したがって、基底に対する値さえ決まれば、任意の入力に対する値が計算できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.1-3 (2×2行列式の双線形性の成分表示)"
            >
                <p>
                    <InlineMath math="2 \times 2" /> 行列式の写像 <InlineMath math="\det(v_1, v_2)" />（<InlineMath math="v_i \in \mathbb{R}^2" /> を列ベクトルとみなす）について考える。
                </p>
                <p>
                    <InlineMath math="v_1 = a e_1 + b e_2" />、<InlineMath math="v_2 = c e_1 + d e_2" /> とするとき、双線形性を用いて展開すると、
                    <BlockMath math="\begin{aligned} \det(v_1, v_2) &= \det(a e_1 + b e_2, c e_1 + d e_2) \\ &= ac \det(e_1, e_1) + ad \det(e_1, e_2) \\ &\quad + bc \det(e_2, e_1) + bd \det(e_2, e_2) \end{aligned}" />
                    となる。ここで基底での値が <InlineMath math="\det(e_1, e_1) = 0" />、<InlineMath math="\det(e_1, e_2) = 1" />、<InlineMath math="\det(e_2, e_1) = -1" />、<InlineMath math="\det(e_2, e_2) = 0" /> であることから、
                    <BlockMath math="\det(v_1, v_2) = ad(1) + bc(-1) = ad - bc" />
                    と復元される。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このような多重線形写像を集めた空間の次元についても把握しておきましょう。
            </p>

            <ContentBox
                type="remark"
                title="多重線形写像のなす空間"
            >
                <p>
                    <InlineMath math="V_1 \times \cdots \times V_n" /> から <InlineMath math="U" /> への <InlineMath math="n" /> 重線形写像の全体 <InlineMath math="\mathrm{Hom}(V_1, \ldots, V_n; U)" /> は、自然な和とスカラー倍によりベクトル空間をなします。その次元は、各空間の次元の積 <InlineMath math="\dim V_1 \times \cdots \times \dim V_n \times \dim U" /> となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>各変数について独立に線形性を持つ写像を多重線形写像（<InlineMath math="n" /> 重線形写像）という。</li>
                    <li>多重線形写像は、各入力空間の基底ベクトルのすべての組み合わせに対する値によって完全に決定される。</li>
                    <li>内積や行列の積は双線形写像であり、行列式は各列ベクトルを変数とみなすと多重線形写像である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}