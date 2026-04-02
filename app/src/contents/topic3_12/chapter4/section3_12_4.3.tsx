import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionCellAttachment() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ファン・カンペンの定理の最も強力な応用は、「CW 複体（CW complex）」と呼ばれる、細胞（セル）を段階的に貼り合わせて作られる空間の基本群の計算です。この節では、空間をレゴブロックのように組み立てる方法と、その結果として現れる基本群について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">CW 複体の構成</h2>

            <p className="leading-relaxed">
                位相空間を幾何学的に扱いやすくするために、<InlineMath math="n" /> 次元の球体（<InlineMath math="D^n" />）の内部である「<InlineMath math="n" />-セル」を、その境界（<InlineMath math="S^{n-1}" />）で既存の空間に貼り付けていく構成法を考えます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.3-1 (CW 複体とセルの接着)"
            >
                <p>
                    <strong>CW 複体</strong>は、次のように帰納的に構成される位相空間 <InlineMath math="X" /> である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>0-骨格（<InlineMath math="X^{(0)}" />）：</strong> まず、離散的な点の集合を用意する。これらの点を <strong>0-セル（<InlineMath math="e^0" />）</strong>という。
                    </li>
                    <li>
                        <strong><InlineMath math="n" />-骨格の構成（<InlineMath math="X^{(n)}" />）：</strong> 既に構成された <InlineMath math="(n-1)" /> 次元までの空間 <InlineMath math="X^{(n-1)}" /> に対して、いくつかの <InlineMath math="n" /> 次元円板 <InlineMath math="D^n" /> を用意する。それらの境界 <InlineMath math="S^{n-1}" /> を <InlineMath math="X^{(n-1)}" /> に連続写像 <InlineMath math="\phi : S^{n-1} \to X^{(n-1)}" />（接着写像）によって貼り付ける。
                    </li>
                </ol>
                <p>
                    この貼り付けられた <InlineMath math="D^n" /> の内部を <strong><InlineMath math="n" />-セル（<InlineMath math="e^n" />）</strong>と呼び、出来上がった空間 <InlineMath math="X^{(n)}" /> を <InlineMath math="X" /> の <strong><InlineMath math="n" />-骨格（<InlineMath math="n" />-skeleton）</strong>という。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.3-1 (球面の CW 複体構造)"
            >
                <p>
                    球面 <InlineMath math="S^n" /> は最も単純な CW 複体構造をもつ。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>0-セル：</strong> 1つの点 <InlineMath math="e^0" />（例えば南極点）を用意する。これが <InlineMath math="X^{(0)}" /> である。
                    </li>
                    <li>
                        <strong><InlineMath math="n" />-セル：</strong> 1つの <InlineMath math="n" /> 次元円板 <InlineMath math="D^n" />（<InlineMath math="e^n" />）を用意し、その境界全体 <InlineMath math="S^{n-1}" /> を一点 <InlineMath math="e^0" /> に潰して貼り付ける（定値写像を接着写像とする）。
                    </li>
                </ul>
                <p>
                    円板の境界を巾着袋のように一点に絞ると球面ができる。これを記号で <InlineMath math="S^n = e^0 \cup e^n" /> と書く。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">CW 複体の基本群</h2>

            <p className="leading-relaxed">
                CW 複体として空間を構成すると、ファン・カンペンの定理を用いてその基本群を完全に「代数的な表示」として計算することができます。特に重要なのは 2 次元までのセルです（3 次元以上のセルは基本群に影響を与えません）。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 4.3-1 (2次元 CW 複体の基本群)"
            >
                <p>
                    連結な 2 次元 CW 複体 <InlineMath math="X = X^{(2)}" /> の基本群は、次のようにして求まる。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>生成元：</strong> 1-骨格 <InlineMath math="X^{(1)}" /> はグラフである。各 1-セル <InlineMath math="e^1" /> を生成元とする<strong>自由群</strong>を考える。
                    </li>
                    <li>
                        <strong>関係式：</strong> 各 2-セル <InlineMath math="e^2" /> は、円板 <InlineMath math="D^2" /> の境界 <InlineMath math="S^1" /> を 1-骨格に貼り付ける。この境界がなぞる 1-セルの語を <InlineMath math="r" /> とすると、これが自由群における<strong>関係式（= 単位元 <InlineMath math="e" />）</strong>を与える。
                    </li>
                </ol>
                <p>
                    すなわち、基本群は次のような表示（presentation）をもつ。
                    <BlockMath math="\pi_1(X) = \langle \{e^1\} \mid \{r\} \rangle" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (アイデア)"
            >
                <p>
                    ファン・カンペンの定理を帰納的に適用する。
                    2-セル <InlineMath math="D^2" /> を貼り付ける際、開集合 <InlineMath math="U" /> として「<InlineMath math="X" /> 全体から 2-セルの中心を抜いたもの（これは <InlineMath math="X^{(1)}" /> とホモトピー同値）」、<InlineMath math="V" /> として「2-セルの内部を少し広げたもの（円板なので可縮）」をとる。
                </p>
                <p>
                    このとき <InlineMath math="\pi_1(U) \cong \pi_1(X^{(1)})" /> であり、<InlineMath math="\pi_1(V) = \{e\}" /> である。<InlineMath math="U \cap V" /> は 2-セルの境界付近の環状領域であり、<InlineMath math="S^1" /> にホモトピー同値である。この <InlineMath math="S^1" /> の生成元が <InlineMath math="U" /> の中で描くループが、まさに接着写像が定める語である。
                </p>
                <p>
                    ファン・カンペンの定理より、<InlineMath math="\pi_1(X)" /> は <InlineMath math="\pi_1(U)" /> と <InlineMath math="\pi_1(V)" /> の融合積となるが、<InlineMath math="\pi_1(V)=\{e\}" /> であるため、結果として「<InlineMath math="\pi_1(U)" /> の群において、<InlineMath math="U \cap V" /> から来るループを単位元 <InlineMath math="e" /> と同一視する（潰す）」という操作になる。これが関係式を追加することに他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.3-2 (トーラスの基本群)"
            >
                <p>
                    トーラス <InlineMath math="T^2" /> の CW 複体構造を考える。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>0-セル：1つ（<InlineMath math="e^0" />）</li>
                    <li>1-セル：2つ（経線 <InlineMath math="a" /> と緯線 <InlineMath math="b" />）。これらは <InlineMath math="e^0" /> を基点とするループになり、1-骨格は 8の字空間（<InlineMath math="S^1 \vee S^1" />）となる。この時点での基本群は自由群 <InlineMath math="\langle a, b \rangle" /> である。</li>
                    <li>2-セル：1つ（<InlineMath math="e^2" />）。トーラスを展開図（正方形）で考えると、その境界は <InlineMath math="a \to b \to a^{-1} \to b^{-1}" /> という順序で 1-骨格に貼り付けられる。したがって接着写像が定める語は <InlineMath math="aba^{-1}b^{-1}" /> である。</li>
                </ul>
                <p>
                    Theorem 4.3-1 より、トーラスの基本群は
                    <BlockMath math="\pi_1(T^2) = \langle a, b \mid aba^{-1}b^{-1} = e \rangle" />
                    となる。関係式 <InlineMath math="aba^{-1}b^{-1} = e" /> は <InlineMath math="ab = ba" /> と同値であるため、これは 2 つの生成元をもつ自由アーベル群、すなわち <InlineMath math="\mathbb{Z} \times \mathbb{Z}" /> と同型であることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>CW 複体は、点（0-セル）から始めて、順次 <InlineMath math="n" />-セル（<InlineMath math="D^n" /> の内部）をその境界で貼り付けていくことで空間を構成する手法である。</li>
                    <li>ファン・カンペンの定理を用いると、CW 複体の基本群は「1-セルを生成元、2-セルの接着写像を関係式」とする群の表示として完全に記述できる。</li>
                    <li>この手法により、トーラスのような曲面の基本群が、幾何学的な貼り合わせの情報から直接的に（<InlineMath math="\pi_1(T^2) \cong \mathbb{Z} \times \mathbb{Z}" /> のように）計算可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
