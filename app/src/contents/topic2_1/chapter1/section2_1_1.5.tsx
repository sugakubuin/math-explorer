import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SumsAndDirectSums() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                既存の部分空間を組み合わせて、新しい部分空間を作る方法について考えます。
                集合論における「積（共通部分）」や「和（和集合）」の概念を部分空間に適用するとどうなるのか、そして「直和」という重要な概念を見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 共通部分と和空間
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">共通部分と和空間</h2>

            <ContentBox type="definition" title="Definition 1.5-1 （部分空間の共通部分と和空間）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> の2つの部分空間 <InlineMath math="W_1, W_2" /> について：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>共通部分 (Intersection) <InlineMath math="W_1 \cap W_2" />：</strong><br />
                        両方に属するベクトル全体の集合。<br />
                        <InlineMath math="W_1 \cap W_2 = \{ \boldsymbol{x} \in V \mid \boldsymbol{x} \in W_1 \text{ かつ } \boldsymbol{x} \in W_2 \}" />
                    </li>
                    <li>
                        <strong>和空間 (Sum space) <InlineMath math="W_1 + W_2" />：</strong><br />
                        それぞれの空間から1つずつ持ってきたベクトルの「和」として表せるベクトル全体の集合。<br />
                        <InlineMath math="W_1 + W_2 = \{ \boldsymbol{x}_1 + \boldsymbol{x}_2 \mid \boldsymbol{x}_1 \in W_1, \boldsymbol{x}_2 \in W_2 \}" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.5-1 （共通部分と和空間は部分空間になる）">
                <p>
                    <InlineMath math="W_1, W_2" /> が部分空間ならば、その共通部分 <InlineMath math="W_1 \cap W_2" /> および和空間 <InlineMath math="W_1 + W_2" /> もまた <InlineMath math="V" /> の部分空間となる。
                </p>
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-bold">
                    【注意】「和集合」 <InlineMath math="W_1 \cup W_2" /> は、一般には部分空間になりません。両方の空間から1つずつベクトルを取って足すと、どちらの空間からもはみ出てしまう可能性があるからです。和集合を含む最小のベクトル空間が「和空間」になります。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （共通部分と和空間が部分空間であることの証明）">
                <p className="font-bold">共通部分 <InlineMath math="W_1 \cap W_2" /> の証明：</p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="W_1, W_2" /> は部分空間なので、ともに零ベクトル <InlineMath math="\boldsymbol{0}" /> を含む。よって <InlineMath math="\boldsymbol{0} \in W_1 \cap W_2" />。</li>
                    <li><InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in W_1 \cap W_2" /> とすると、<InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> は <InlineMath math="W_1" /> にも <InlineMath math="W_2" /> にも属する。<InlineMath math="W_1, W_2" /> は部分空間であり和について閉じているため、<InlineMath math="\boldsymbol{x} + \boldsymbol{y} \in W_1" /> かつ <InlineMath math="\boldsymbol{x} + \boldsymbol{y} \in W_2" />。よって <InlineMath math="\boldsymbol{x} + \boldsymbol{y} \in W_1 \cap W_2" />。</li>
                    <li>同様に、スカラー <InlineMath math="c" /> と <InlineMath math="\boldsymbol{x} \in W_1 \cap W_2" /> について <InlineMath math="c\boldsymbol{x} \in W_1" /> かつ <InlineMath math="c\boldsymbol{x} \in W_2" /> となるため、<InlineMath math="c\boldsymbol{x} \in W_1 \cap W_2" />。</li>
                </ol>
                <p className="mt-2">以上より <InlineMath math="W_1 \cap W_2" /> は部分空間である。</p>

                <p className="font-bold mt-4">和空間 <InlineMath math="W_1 + W_2" /> の証明：</p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="\boldsymbol{0} \in W_1" /> かつ <InlineMath math="\boldsymbol{0} \in W_2" /> であり、<InlineMath math="\boldsymbol{0} = \boldsymbol{0} + \boldsymbol{0}" /> と表せるため <InlineMath math="\boldsymbol{0} \in W_1 + W_2" />。</li>
                    <li><InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in W_1 + W_2" /> とすると、<InlineMath math="\boldsymbol{x} = \boldsymbol{x}_1 + \boldsymbol{x}_2" />、<InlineMath math="\boldsymbol{y} = \boldsymbol{y}_1 + \boldsymbol{y}_2" /> （ただし <InlineMath math="\boldsymbol{x}_1, \boldsymbol{y}_1 \in W_1" />、<InlineMath math="\boldsymbol{x}_2, \boldsymbol{y}_2 \in W_2" />）と書ける。和をとると <InlineMath math="\boldsymbol{x} + \boldsymbol{y} = (\boldsymbol{x}_1 + \boldsymbol{y}_1) + (\boldsymbol{x}_2 + \boldsymbol{y}_2)" />。<InlineMath math="W_1" /> と <InlineMath math="W_2" /> は和について閉じているため、第1項は <InlineMath math="W_1" />、第2項は <InlineMath math="W_2" /> に属する。よって <InlineMath math="\boldsymbol{x} + \boldsymbol{y} \in W_1 + W_2" />。</li>
                    <li>スカラー <InlineMath math="c" /> について <InlineMath math="c\boldsymbol{x} = c(\boldsymbol{x}_1 + \boldsymbol{x}_2) = c\boldsymbol{x}_1 + c\boldsymbol{x}_2" />。<InlineMath math="W_1, W_2" /> はスカラー倍について閉じているため <InlineMath math="c\boldsymbol{x} \in W_1 + W_2" />。</li>
                </ol>
                <p className="mt-2">以上より <InlineMath math="W_1 + W_2" /> も部分空間である。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 次元定理と和空間の次元
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">次元定理（和空間の次元）</h2>

            <p>
                部分空間の大きさ（基底の数）を「次元（<InlineMath math="\dim" />）」と呼びます（次元については次章で厳密に定めますが、ここでは「拡がり具合・パラメータの数」と考えてください）。
                和空間の広がり具合を計算する基本公式があります。これは確率の公式 <InlineMath math="P(A \cup B) = P(A) + P(B) - P(A \cap B)" /> によく似ています。
            </p>

            <ContentBox type="theorem" title="Theorem 1.5-1 （和空間の次元定理）">
                <p>
                    有限次元ベクトル空間 <InlineMath math="V" /> の部分空間 <InlineMath math="W_1, W_2" /> について、以下の関係が成り立つ：
                </p>
                <BlockMath math="\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof （和空間の次元定理の証明）">
                <p>
                    部分空間の次元は基底のベクトルの個数である（※次元と基底の厳密な定義は次章で扱うが、ここでは既知として証明する）。<br />
                    まず、共通部分 <InlineMath math="W_1 \cap W_2" /> の基底を <InlineMath math="\{\boldsymbol{u}_1, \dots, \boldsymbol{u}_k\}" /> とする。すなわち <InlineMath math="\dim(W_1 \cap W_2) = k" /> である。<br />
                    この基底を拡張して、<InlineMath math="W_1" /> の基底を <InlineMath math="\{\boldsymbol{u}_1, \dots, \boldsymbol{u}_k, \boldsymbol{v}_1, \dots, \boldsymbol{v}_m\}" />、<InlineMath math="W_2" /> の基底を <InlineMath math="\{\boldsymbol{u}_1, \dots, \boldsymbol{u}_k, \boldsymbol{w}_1, \dots, \boldsymbol{w}_n\}" /> とする。<br />
                    このとき <InlineMath math="\dim W_1 = k + m" />、<InlineMath math="\dim W_2 = k + n" /> となる。
                </p>
                <p className="mt-2">
                    定理の等式を示すには、和集合 <InlineMath math="B = \{\boldsymbol{u}_1, \dots, \boldsymbol{u}_k, \boldsymbol{v}_1, \dots, \boldsymbol{v}_m, \boldsymbol{w}_1, \dots, \boldsymbol{w}_n\}" /> が <InlineMath math="W_1 + W_2" /> の基底となることを示せばよい。
                    （そうすれば <InlineMath math="\dim(W_1 + W_2) = k + m + n = (k+m) + (k+n) - k = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2)" /> が成り立つ）
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong><InlineMath math="B" /> が <InlineMath math="W_1 + W_2" /> を生成すること：</strong><br />
                        任意の <InlineMath math="\boldsymbol{x} \in W_1 + W_2" /> は <InlineMath math="\boldsymbol{x} = \boldsymbol{x}_1 + \boldsymbol{x}_2" /> と書ける。<InlineMath math="\boldsymbol{x}_1 \in W_1" /> は <InlineMath math="\boldsymbol{u}_i, \boldsymbol{v}_j" /> の線形結合で、<InlineMath math="\boldsymbol{x}_2 \in W_2" /> は <InlineMath math="\boldsymbol{u}_i, \boldsymbol{w}_l" /> の線形結合で書けるため、その和である <InlineMath math="\boldsymbol{x}" /> は <InlineMath math="B" /> のベクトルの線形結合として表せる。
                    </li>
                    <li>
                        <strong><InlineMath math="B" /> が線形独立であること：</strong><br />
                        <InlineMath math="B" /> の線形結合を <InlineMath math="\boldsymbol{0}" /> とおく。すなわち <InlineMath math="\sum_{i=1}^k a_i \boldsymbol{u}_i + \sum_{j=1}^m b_j \boldsymbol{v}_j + \sum_{l=1}^n c_l \boldsymbol{w}_l = \boldsymbol{0}" />。<br />
                        移項すると、<InlineMath math="\sum_{l=1}^n c_l \boldsymbol{w}_l = -\sum_{i=1}^k a_i \boldsymbol{u}_i - \sum_{j=1}^m b_j \boldsymbol{v}_j" /> となる。<br />
                        左辺は <InlineMath math="W_2" /> の元、右辺は <InlineMath math="W_1" /> の元である。両者が等しいということは、このベクトルは <InlineMath math="W_1 \cap W_2" /> に属することを意味する。
                        ゆえに、左辺は <InlineMath math="W_1 \cap W_2" /> の基底 <InlineMath math="\{\boldsymbol{u}_1, \dots, \boldsymbol{u}_k\}" /> の線形結合で表せるはずである。<br />
                        <InlineMath math="\sum_{l=1}^n c_l \boldsymbol{w}_l = \sum_{i=1}^k d_i \boldsymbol{u}_i \implies \sum_{i=1}^k d_i \boldsymbol{u}_i - \sum_{l=1}^n c_l \boldsymbol{w}_l = \boldsymbol{0}" /><br />
                        <InlineMath math="W_2" /> の基底 <InlineMath math="\{\boldsymbol{u}_i\} \cup \{\boldsymbol{w}_l\}" /> は線形独立なので、係数はすべて0であり、特に <InlineMath math="c_1 = \dots = c_n = 0" />。
                        これを最初の式に代入すると、<InlineMath math="\sum_{i=1}^k a_i \boldsymbol{u}_i + \sum_{j=1}^m b_j \boldsymbol{v}_j = \boldsymbol{0}" />。
                        <InlineMath math="W_1" /> の基底 <InlineMath math="\{\boldsymbol{u}_i\} \cup \{\boldsymbol{v}_j\}" /> は線形独立なので、<InlineMath math="a_i = 0, b_j = 0" /> となる。
                        すべての係数が0となるため、<InlineMath math="B" /> は線形独立である。
                    </li>
                </ul>
                <p className="mt-2">以上により <InlineMath math="B" /> は基底であり、次元定理が証明された。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 直和
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">直和 (Direct Sum)</h2>

            <p>
                2つの部分空間どうしの共通部分が「原点（零ベクトル）」しかないとき、その和空間は特別な構造を持ちます。これを「直和」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.5-2 （直和）">
                <p>
                    和空間 <InlineMath math="W = W_1 + W_2" /> に属する任意のベクトル <InlineMath math="\boldsymbol{x}" /> に対して、
                </p>
                <BlockMath math="\boldsymbol{x} = \boldsymbol{x}_1 + \boldsymbol{x}_2 \quad (\boldsymbol{x}_1 \in W_1, \boldsymbol{x}_2 \in W_2)" />
                <p>
                    という表現が<strong>ただ1通りに（一意に）定まる</strong>とき、この和を<strong>直和 (Direct sum)</strong> といい、<InlineMath math="W_1 \oplus W_2" /> と表す。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.5-2 （直和の同値条件）">
                <p>
                    部分空間 <InlineMath math="W_1, W_2" /> の和空間 <InlineMath math="W = W_1 + W_2" /> が直和となる（<InlineMath math="W_1 \oplus W_2" /> と書ける）ためには、以下の条件のいずれか（すべて同値）を満たすことが必要十分である。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>任意のベクトル <InlineMath math="\boldsymbol{x} \in W" /> の分解 <InlineMath math="\boldsymbol{x} = \boldsymbol{x}_1 + \boldsymbol{x}_2" /> が一意的である（定義）。</li>
                    <li><InlineMath math="\boldsymbol{0} = \boldsymbol{x}_1 + \boldsymbol{x}_2" /> （<InlineMath math="\boldsymbol{x}_1 \in W_1, \boldsymbol{x}_2 \in W_2" />）ならば、<InlineMath math="\boldsymbol{x}_1 = \boldsymbol{0}" /> かつ <InlineMath math="\boldsymbol{x}_2 = \boldsymbol{0}" /> となる。</li>
                    <li>ベクトル空間としての共通部分が零ベクトルのみである： <InlineMath math="W_1 \cap W_2 = \{\boldsymbol{0}\}" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof （直和の同値条件の証明）">
                <p>
                    まず、<strong>条件1（表現の一意性）は「直和であること」の定義そのもの</strong>であるため、条件1, 2, 3が互いに同値であることを示せば、それらがすべて「直和であること（<InlineMath math="W_1 \oplus W_2" />）」と同値であることが示されたことになる。
                </p>
                <p className="mt-4">
                    <strong>(1 <InlineMath math="\implies" /> 2)</strong> <InlineMath math="\boldsymbol{x}_1 + \boldsymbol{x}_2 = \boldsymbol{0}" /> （<InlineMath math="\boldsymbol{x}_1 \in W_1, \boldsymbol{x}_2 \in W_2" />）とする。<br />
                    一方、零ベクトルの自明な分解として <InlineMath math="\boldsymbol{0} \in W_1" /> および <InlineMath math="\boldsymbol{0} \in W_2" /> を用いた <InlineMath math="\boldsymbol{0} + \boldsymbol{0} = \boldsymbol{0}" /> が存在する。
                    条件1より分解の表現は一意的でなければならないため、各成分を比較して <InlineMath math="\boldsymbol{x}_1 = \boldsymbol{0}" /> かつ <InlineMath math="\boldsymbol{x}_2 = \boldsymbol{0}" /> を得る。
                </p>
                <p className="mt-4">
                    <strong>(2 <InlineMath math="\implies" /> 3)</strong> <InlineMath math="\boldsymbol{x} \in W_1 \cap W_2" /> を取る。<br />
                    このとき <InlineMath math="\boldsymbol{x} \in W_1" /> であり、同時に部分空間の性質から <InlineMath math="-\boldsymbol{x} \in W_2" /> である。
                    和をとると <InlineMath math="\boldsymbol{x} + (-\boldsymbol{x}) = \boldsymbol{0}" />。
                    これは <InlineMath math="W_1" /> の元と <InlineMath math="W_2" /> の元の和が零ベクトルになることを示している。
                    条件2より、それぞれの元は零でなければならないため、<InlineMath math="\boldsymbol{x} = \boldsymbol{0}" /> （かつ <InlineMath math="-\boldsymbol{x} = \boldsymbol{0}" />）。よって <InlineMath math="W_1 \cap W_2 = \{\boldsymbol{0}\}" /> である。
                </p>
                <p className="mt-4">
                    <strong>(3 <InlineMath math="\implies" /> 1)</strong> 任意のベクトル <InlineMath math="\boldsymbol{x} \in W" /> が <InlineMath math="\boldsymbol{x} = \boldsymbol{x}_1 + \boldsymbol{x}_2 = \boldsymbol{y}_1 + \boldsymbol{y}_2" /> （ただし <InlineMath math="\boldsymbol{x}_1, \boldsymbol{y}_1 \in W_1" />、<InlineMath math="\boldsymbol{x}_2, \boldsymbol{y}_2 \in W_2" />）と2通りに書けたとする。<br />
                    両辺を移項すると <InlineMath math="\boldsymbol{x}_1 - \boldsymbol{y}_1 = \boldsymbol{y}_2 - \boldsymbol{x}_2" /> となる。
                    左辺は <InlineMath math="W_1" /> の元どうしの差なので <InlineMath math="W_1" /> に属し、右辺は <InlineMath math="W_2" /> の元どうしの差なので <InlineMath math="W_2" /> に属する。
                    つまりこの等しいベクトルは <InlineMath math="W_1" /> と <InlineMath math="W_2" /> の両方に属しているため、<InlineMath math="W_1 \cap W_2" /> の元である。
                    条件3より <InlineMath math="W_1 \cap W_2 = \{\boldsymbol{0}\}" /> であるため、両辺は等しく <InlineMath math="\boldsymbol{0}" /> となる。<br />
                    したがって <InlineMath math="\boldsymbol{x}_1 - \boldsymbol{y}_1 = \boldsymbol{0} \implies \boldsymbol{x}_1 = \boldsymbol{y}_1" />、かつ <InlineMath math="\boldsymbol{y}_2 - \boldsymbol{x}_2 = \boldsymbol{0} \implies \boldsymbol{x}_2 = \boldsymbol{y}_2" />。
                    これより分解は一意である。
                </p>
                <p className="mt-2">以上より、1, 2, 3 の条件は互いに同値である。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-6">
                <h3 className="font-bold text-lg mb-2">直和における次元定理</h3>
                <p>
                    直和のとき、共通部分は零ベクトルのみ、つまり次元としては「0次元」になります（<InlineMath math="\dim(W_1 \cap W_2) = 0" />）。
                    したがって和の次元定理は以下のようにきれいな足し算となります：
                </p>
                <BlockMath math="\dim(W_1 \oplus W_2) = \dim W_1 + \dim W_2" />
                <p className="text-sm">これを満たすかどうかで直和判定をすることも多くあります。</p>
            </div>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2つの部分空間の両方に属する<strong>共通部分</strong>と、両空間のベクトルの足し合わせで作られる<strong>和空間</strong>は、どちらも部分空間になる（Definition 1.5-1, Proposition 1.5-1）。</li>
                    <li>和空間の次元は、それぞれの次元を足して被った共通部分の次元を引いたものになる（Theorem 1.5-1）。</li>
                    <li>共通部分が零ベクトルのみのとき、その和空間への分解方法は一意に定まり、これを<strong>直和</strong> <InlineMath math="W_1 \oplus W_2" /> と呼ぶ（Theorem 1.5-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
