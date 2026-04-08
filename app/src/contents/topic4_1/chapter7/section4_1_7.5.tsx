import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RieszRepresentationTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の最後に、ヒルベルト空間における双対空間（連続線形汎関数全体の空間）の構造を決定づけるリースの表現定理を紹介します。この定理により、ヒルベルト空間上の線形汎関数はすべて「ある一つ固定されたベクトルとの内積」として表現できることが導かれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リースの表現定理</h2>

            <p>
                内積は右側の引数を固定することで、<InlineMath math="L_y(x) = \langle x, y \rangle" /> という連続線形汎関数を定義します。リースの表現定理は、なんと「すべての連続線形汎関数がこの形に書ける」ことを主張します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.5-1 (リースの表現定理)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> 上の任意の連続線形汎関数 <InlineMath math="f \in H^*" /> （すなわち有界線形汎関数）に対して、ある一意のベクトル <InlineMath math="y \in H" /> が存在して、すべての <InlineMath math="x \in H" /> に対して
                </p>
                <BlockMath math="f(x) = \langle x, y \rangle" />
                <p>
                    が成り立つ。さらに、このとき汎関数のノルムの等式
                </p>
                <BlockMath math="\|f\|_{H^*} = \|y\|_H" />
                <p>
                    が成立する。
                </p>
            </ContentBox>

            <p>
                この定理は、直交補空間の性質（§7.2）を巧みに用いて「目的の内積ベクトル」を直接的に構成することで証明されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> が零汎関数（すべての <InlineMath math="x" /> で <InlineMath math="f(x) = 0" />）のときは、<InlineMath math="y = 0" /> とすればよい。<br/>
                    <InlineMath math="f \neq 0" /> とする。<InlineMath math="f" /> は連続であるため、その核（カーネル） <InlineMath math="M = \ker(f) = \{x \in H \mid f(x) = 0\}" /> は <InlineMath math="H" /> の閉部分空間である。また <InlineMath math="f \neq 0" /> なので <InlineMath math="M \neq H" /> であり、したがって直交補空間 <InlineMath math="M^\perp" /> は <InlineMath math="\{0\}" /> ではない。<br/>
                    そこで、<InlineMath math="z \in M^\perp" /> で <InlineMath math="z \neq 0" /> となる元を一つ選ぶこのとき、任意の <InlineMath math="x \in H" /> に対して、量
                </p>
                <BlockMath math="u = f(z)x - f(x)z" />
                <p>
                    を考えると、<InlineMath math="f(u) = f(z)f(x) - f(x)f(z) = 0" /> となるため、<InlineMath math="u \in M" /> である。<br/>
                    <InlineMath math="z \in M^\perp" /> であったから、<InlineMath math="z" /> は <InlineMath math="u" /> と直交し、<InlineMath math="\langle u, z \rangle = 0" /> となる。これを展開すると、
                </p>
                <BlockMath math="0 = \langle f(z)x - f(x)z, z \rangle = f(z)\langle x, z \rangle - f(x)\|z\|^2" />
                <p>
                    これを <InlineMath math="f(x)" /> について解くと
                </p>
                <BlockMath math="f(x) = \frac{f(z)}{\|z\|^2} \langle x, z \rangle = \left\langle x, \frac{\overline{f(z)}}{\|z\|^2} z \right\rangle" />
                <p>
                    したがって、求めるベクトル <InlineMath math="y" /> は
                </p>
                <BlockMath math="y = \frac{\overline{f(z)}}{\|z\|^2} z" />
                <p>
                    と表される。一意性については、もし <InlineMath math="\langle x, y_1 \rangle = \langle x, y_2 \rangle" /> （全ての <InlineMath math="x" /> に対して）であれば <InlineMath math="\langle x, y_1 - y_2 \rangle = 0" /> となり、<InlineMath math="x = y_1 - y_2" /> を代入することで <InlineMath math="\|y_1 - y_2\|^2 = 0 \implies y_1 = y_2" /> が従う。<br/>
                    最後にノルムについては、コーシー-シュワルツの不等式により <InlineMath math="|f(x)| = |\langle x, y \rangle| \leq \|x\|\|y\|" /> となるため <InlineMath math="\|f\| \leq \|y\|" />。また <InlineMath math="x = y" /> を入れれば <InlineMath math="f(y) = \|y\|^2" /> より <InlineMath math="\|f\| \geq \|y\|" /> となり、両者は一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                抽象的な関数としての表現ではなく、具体的な数列空間においてこの定理がどのように機能するかを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 7.5-1">
                <p>
                    <InlineMath math="\ell^2" /> において、数列を与えてその線形結合を出力する連続線形汎関数 <InlineMath math="f(x) = x_1 + 2x_2" /> を考える。<br/>
                    これは <InlineMath math="\ell^2" /> 上ですべての成分を参照できるが、ある一つの固定されたベクトル <InlineMath math="y" /> との内積 <InlineMath math="\langle x, y \rangle" /> によって書けるはずである。
                </p>
                <p>
                    定理の示す通り、<InlineMath math="y = (1, 2, 0, 0, \ldots)" /> と選べばよい。このとき任意の <InlineMath math="x = (x_n) \in \ell^2" /> に対して
                </p>
                <BlockMath math="\langle x, y \rangle = x_1 \bar{1} + x_2 \bar{2} + x_3 \cdot 0 + \dots = x_1 + 2x_2 = f(x)" />
                <p>
                    となり、<InlineMath math="f(x)" /> は確かにベクトル <InlineMath math="y" /> による内積として表現される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リースの表現定理の意味と応用</h2>

            <p>
                リースの表現定理は、空間の「裏側」である双対空間が、もとの空間と全く同じ構造を持っていることを教えてくれます。
            </p>

            <ContentBox type="theorem" title="Corollary 7.5-1">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> は反射的である。すなわち、第二双対空間 <InlineMath math="H^{**}" /> への標準埋め込みは全射であり、<InlineMath math="H \cong H^{**}" /> が成り立つ。
                </p>
            </ContentBox>

            <p>
                この反射性は、リースの表現定理を二度適用することによって、非常に自然に導かれます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    リースの表現定理により、対応 <InlineMath math="T : H \to H^*" /> を <InlineMath math="T(y) = f_y" /> （ただし <InlineMath math="f_y(x) = \langle x, y \rangle" />）で定義すると、これは全単射な等長写像となる（ただしスカラー倍については <InlineMath math="T(\alpha y) = \bar{\alpha}T(y)" /> となる反線形）。<br/>
                    したがって <InlineMath math="H" /> の双対空間 <InlineMath math="H^*" /> も、実質的に <InlineMath math="H" /> 自身と同じヒルベルト空間の構造を持つ。<br/>
                    これに再びリースの表現定理を適用すると、<InlineMath math="H^{**} = (H^*)^*" /> もまた <InlineMath math="H" /> （あるいは <InlineMath math="H^*" />）と同型となる。この同型が標準埋め込みに一致することを辿ることで、<InlineMath math="H" /> が反射的であることが確認される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                リースの表現定理は、純粋数学のみならず、現代物理学の基礎言語をも形作っています。
            </p>

            <ContentBox type="remark" title="量子力学のブラ・ケット記法">
                <p>
                    物理学、特に量子力学において、リースの表現定理は決定的な役割を果たしました。物理学者ポール・ディラックは、状態ベクトルを「ケットベクトル <InlineMath math="|x\rangle" />」、状態を観測する操作を「ブラベクトル <InlineMath math="\langle y|" />」と呼び、それらが相互に変換可能であることを前提として理論を構築しました（ブラ・ケット記法）。<br/>
                    リースの表現定理は、このブラベクトル（線形汎関数）とケットベクトル（元の空間のベクトル）が一対一に対応し、本質的に同じであることを数学的に厳密に正当化したものと言えます。数理物理学（A-11）において量子力学を学ぶ際に、この定理は無意識に、しかし至る所で用いられます。
                </p>
            </ContentBox>

            <p>
                次章の作用素論では、この双対空間との対応関係が「随伴作用素」という概念を生み出します。本章の締めくくりとして、定理の要点をまとめます。
            </p>

            <ContentBox type="note" title="§7.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヒルベルト空間上の連続線形汎関数は、すべて「ある固定されたベクトルとの内積」として一意に表せる（リースの表現定理）。</li>
                    <li>ヒルベルト空間における双対空間は、元の空間と（反線形の）等長同型である。</li>
                    <li>このことにより、ヒルベルト空間は自動的に反射的空間となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
