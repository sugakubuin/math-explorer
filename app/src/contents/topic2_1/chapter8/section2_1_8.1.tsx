import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function InnerProductAxioms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでベクトル空間において「和」と「スカラー倍」という2つの演算のみを扱ってきましたが、これだけではベクトルの「長さ」やベクトル同士の「なす角」といった<strong>幾何学的な概念</strong>を測ることができません。<br />
                そこで、ベクトル空間に新たな構造として<strong>内積（Inner Product）</strong>を導入し、抽象的な空間に豊かな幾何学の世界を築き上げます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内積の公理と例</h2>

            <p>
                「内積」とは、2つのベクトルを入力して1つのスカラー（実数または複素数）を出力する特別な関数です。<br />
                高校数学で習った内積の性質を抽象化し、以下の条件（公理）を満たす関数をすべて「内積」と呼びます。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-6">内積の定義</h2>

            <ContentBox type="definition" title="Definition 8.1-1 （内積・内積空間 / Inner Product Space）">
                <p>
                    実ベクトル空間 <InlineMath math="V" /> において、任意の2つのベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対して実数 <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle \in \mathbb{R}" /> を対応させる関数が、以下の3つの条件（公理）をすべて満たすとき、この関数を <InlineMath math="V" /> 上の<strong>内積</strong>と呼ぶ。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-3">
                    <li>
                        <strong>正値性（Positive Definiteness）：</strong><br />
                        任意の <InlineMath math="\boldsymbol{x} \in V" /> に対し、<InlineMath math="\langle \boldsymbol{x}, \boldsymbol{x} \rangle \geq 0" />。<br />
                        また、<InlineMath math="\langle \boldsymbol{x}, \boldsymbol{x} \rangle = 0" /> となるのは <InlineMath math="\boldsymbol{x} = \boldsymbol{0}" /> のときに限る。
                    </li>
                    <li>
                        <strong>対称性（Symmetry）：</strong><br />
                        任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対し、<InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{y}, \boldsymbol{x} \rangle" />。
                    </li>
                    <li>
                        <strong>双線形性（Bilinearity）：</strong><br />
                        任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y}, \boldsymbol{z} \in V" /> およびスカラー <InlineMath math="c \in \mathbb{R}" /> に対し、<br />
                        <InlineMath math="\langle \boldsymbol{x} + \boldsymbol{y}, \boldsymbol{z} \rangle = \langle \boldsymbol{x}, \boldsymbol{z} \rangle + \langle \boldsymbol{y}, \boldsymbol{z} \rangle" /><br />
                        <InlineMath math="\langle c\boldsymbol{x}, \boldsymbol{y} \rangle = c \langle \boldsymbol{x}, \boldsymbol{y} \rangle" />
                    </li>
                </ol>
                <p className="mt-4">
                    内積がひとつ定義されたベクトル空間 <InlineMath math="(V, \langle \cdot, \cdot \rangle)" /> を<strong>内積空間（計量ベクトル空間）</strong>と呼ぶ。
                </p>
                <p className="text-sm text-slate-500 mt-2">
                    ※ 3つ目の条件（線形性）は第1引数に対して要請されていますが、2つ目（対称性）と組み合わせることで第2引数に対しても線形性が成り立つことが直ちに従います（これを双線形性と呼びます）。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内積の例</h2>

            <p>
                定義を満たしさえすれば、私たちがよく知る計算以外のものであっても内積として扱うことができます。
            </p>

            <ContentBox type="example" title="Example 8.1-1 （多様な内積）">
                <p className="font-bold">1. <InlineMath math="\mathbb{R}^n" /> の標準内積</p>
                <p>
                    最も馴染み深い内積です。列ベクトル <InlineMath math="\boldsymbol{x} = (x_1, \dots, x_n)^T" /> と <InlineMath math="\boldsymbol{y} = (y_1, \dots, y_n)^T" /> に対して、対応する成分同士の積の和で定義します。（ドット積とも呼ばれます）
                </p>
                <BlockMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = x_1 y_1 + x_2 y_2 + \dots + x_n y_n = \boldsymbol{x}^T \boldsymbol{y}" />

                <p className="font-bold mt-6">2. 関数空間 <InlineMath math="C[a, b]" /> の内積</p>
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上で定義された連続関数の集合はベクトル空間をなします。ここでの「ベクトル」は関数 <InlineMath math="f(t), g(t)" /> です。<br />
                    この空間では、積の定積分を用いて次のように内積を定義することができます。
                </p>
                <BlockMath math="\langle f, g \rangle = \int_a^b f(t)g(t) \,dt" />
                <p>
                    （この定義が内積の公理をすべて満たすことを確認してみてください。特に被積分関数 <InlineMath math="f(t)^2" /> は常に <InlineMath math="\geq 0" /> なので、その積分も <InlineMath math="\geq 0" /> となり正値性を満たします。）
                </p>

                <p className="font-bold mt-6">3. 行列空間の内積</p>
                <p>
                    <InlineMath math="n \times n" /> 実行列の空間においても、トレース（対角成分の和）を用いて内積を定義できます。
                </p>
                <BlockMath math="\langle A, B \rangle = \mathrm{tr}(A^T B)" />
                <p>（フロベニウス内積と呼ばれます。）</p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素内積空間</h2>

            <p>
                スカラーが複素数 <InlineMath math="\mathbb{C}" /> の場合、少しだけ定義を変更する必要があります。<br />
                なぜなら、正値性（自分自身との内積が実数で、かつ0以上であること）を保つために「複素共役」を利用しなければならないからです。<br />
                （もし <InlineMath math="\boldsymbol{x} \cdot \boldsymbol{x} = x^2" /> としてしまうと、<InlineMath math="x = i" /> のとき <InlineMath math="i^2 = -1 < 0" /> となって破綻してしまいます。）
            </p>

            <ContentBox type="remark" title="複素内積空間におけるエルミート対称性と半双線形性">
                <p>
                    複素ベクトル空間において、内積 <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle \in \mathbb{C}" /> は以下の公理を満たすものとして定義されます。<br />
                    （上部にバーが付いているものは複素共役を表します。）
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-3">
                    <li>
                        <strong>正値性：</strong> <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{x} \rangle \in \mathbb{R}" /> かつ <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{x} \rangle \geq 0" /> （等号は <InlineMath math="\boldsymbol{x} = \boldsymbol{0}" /> のみ）。
                    </li>
                    <li>
                        <strong>エルミート対称性：</strong><br />
                        <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = \overline{\langle \boldsymbol{y}, \boldsymbol{x} \rangle}" /><br />
                        <span className="text-sm text-slate-600 dark:text-slate-400">（前後を入れ替えると複素共役になります。）</span>
                    </li>
                    <li>
                        <strong>（第1引数に関する）線形性：</strong><br />
                        <InlineMath math="\langle c\boldsymbol{x} + \boldsymbol{y}, \boldsymbol{z} \rangle = c \langle \boldsymbol{x}, \boldsymbol{z} \rangle + \langle \boldsymbol{y}, \boldsymbol{z} \rangle" />
                    </li>
                </ol>
                <p className="mt-4">
                    これらを組み合わせると、第2引数に関するスカラー倍はどうなるでしょうか。<br />
                    エルミート対称性より、第2引数から定数 <InlineMath math="c" /> を外に出すと<strong>複素共役がついて出てきます。</strong>
                </p>
                <BlockMath math="\langle \boldsymbol{x}, c\boldsymbol{y} \rangle = \overline{\langle c\boldsymbol{y}, \boldsymbol{x} \rangle} = \overline{c \langle \boldsymbol{y}, \boldsymbol{x} \rangle} = \overline{c} \, \overline{\langle \boldsymbol{y}, \boldsymbol{x} \rangle} = \overline{c} \langle \boldsymbol{x}, \boldsymbol{y} \rangle" />
                <p>
                    このように、第1引数では線形性が成り立ち、第2引数では（複素共役がつく）反線形性が成り立つ性質を<strong>半双線形性（Sesquilinearity）</strong>と呼びます。<br />
                    <span className="text-sm text-slate-500">※ 物理学や一部の数学分野では、逆に「第1引数で反線形、第2引数で線形」と定義することもあります（ブラ・ケット記法など）。</span>
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数などに限らず、正値性・対称性・双線形性を満たす演算構造を備えたベクトル空間を<strong>内積空間</strong>という（Definition 8.1-1）。</li>
                    <li>数列の和（<InlineMath math="\mathbb{R}^n" />）だけでなく、関数の積の積分なども内積の公理を満たす（Example 8.1-1）。</li>
                    <li>複素空間では、正値性を確保するために対称性が<strong>エルミート対称性</strong>（入れ替えると複素共役になる）へと置き換えられ、半双線形性という奇妙な性質を持つようになる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
