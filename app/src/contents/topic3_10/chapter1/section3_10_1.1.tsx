import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FieldExtensions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、ガロア理論の舞台となる「体の拡大」という概念について学びます。方程式の根を追加して新しい体を作るという操作を抽象化し、線形代数の強力なツールである「次元」の考え方を用いて体を測る方法を習得します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">体の拡大の定義</h2>

            <p>
                まずは、体の拡大という最も基本的な枠組みを定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (体の拡大)">
                <p>
                    体 <InlineMath math="F" /> が体 <InlineMath math="K" /> の部分体であるとき（すなわち <InlineMath math="F \subset K" />）、<InlineMath math="K/F" /> を<strong>体の拡大（field extension）</strong>といい、<InlineMath math="K" /> を <InlineMath math="F" /> の<strong>拡大体（extension field）</strong>という。
                </p>
                <p>
                    （注：<InlineMath math="K/F" /> という記号は剰余環などの「商」を表すものではなく、単に <InlineMath math="K" /> が <InlineMath math="F" /> の上にある拡大体であることを示す表記である。）
                </p>
            </ContentBox>

            <p>
                馴染みのある数体系において、体の拡大の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-1 (体の拡大の例)">
                <p>
                    実数体 <InlineMath math="\mathbb{R}" /> は有理数体 <InlineMath math="\mathbb{Q}" /> を部分体として含むので、<InlineMath math="\mathbb{R}/\mathbb{Q}" /> は体の拡大である。同様に、<InlineMath math="\mathbb{C}/\mathbb{R}" /> や <InlineMath math="\mathbb{C}/\mathbb{Q}" /> も体の拡大である。
                </p>
                <p>
                    また、有理数に <InlineMath math="\sqrt{2}" /> を付け加えた集合
                </p>
                <BlockMath math="\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} \mid a, b \in \mathbb{Q}\}" />
                <p>
                    は体をなす。これは <InlineMath math="\mathbb{Q}" /> の拡大体であり、<InlineMath math="\mathbb{Q}(\sqrt{2})/\mathbb{Q}" /> も体の拡大である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (線形代数との接続)">
                <p>
                    体 <InlineMath math="K" /> が体 <InlineMath math="F" /> の拡大体であるとき、<InlineMath math="K" /> の元同士の足し算と、<InlineMath math="F" /> の元によるスカラー倍が定義されます。これはまさに、<strong><InlineMath math="K" /> は <InlineMath math="F" /> 上のベクトル空間である</strong>ことを意味しています。これにより、体の拡大の研究において線形代数の強力な道具（基底や次元など）をそのまま適用することができます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">拡大次数と連鎖律</h2>

            <p>
                <InlineMath math="K" /> を <InlineMath math="F" /> 上のベクトル空間とみなしたとき、その「次元」を考えることができます。これが体の拡大の「大きさ」を測る重要な指標になります。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (拡大次数)">
                <p>
                    <InlineMath math="K/F" /> を体の拡大とする。<InlineMath math="K" /> の <InlineMath math="F" />-ベクトル空間としての次元を<strong>拡大次数（degree of extension）</strong>と呼び、<InlineMath math="[K : F]" /> で表す。すなわち、
                </p>
                <BlockMath math="[K : F] = \dim_F K" />
                <p>
                    である。<InlineMath math="[K : F]" /> が有限のとき、<InlineMath math="K/F" /> を<strong>有限次拡大</strong>といい、無限のとき<strong>無限次拡大</strong>という。
                </p>
            </ContentBox>

            <p>
                拡大次数に関する最も基本的な性質は、複数の拡大を重ねたときに次数が掛け算になるという「連鎖律」です。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-1 (連鎖律 / 乗法公式)">
                <p>
                    <InlineMath math="F \subset K \subset L" /> を体の塔とする。このとき、以下の公式が成立する。
                </p>
                <BlockMath math="[L : F] = [L : K][K : F]" />
                <p>
                    （片方が無限大の場合は、もう一方も無限大として解釈する）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="K/F" /> の基底を <InlineMath math="\{e_1, \dots, e_m\}" />、<InlineMath math="L/K" /> の基底を <InlineMath math="\{f_1, \dots, f_n\}" /> とする。このとき、積の集合 <InlineMath math="B = \{e_i f_j \mid 1 \leq i \leq m, 1 \leq j \leq n\}" /> が <InlineMath math="L/F" /> の基底になることを示す。
                </p>
                <p>
                    <strong>（生成すること）</strong> 任意の <InlineMath math="x \in L" /> をとる。<InlineMath math="\{f_j\}" /> は <InlineMath math="L/K" /> の基底だから、ある <InlineMath math="c_j \in K" /> が存在して <InlineMath math="x = \sum_{j=1}^n c_j f_j" /> と書ける。次に、各 <InlineMath math="c_j \in K" /> は <InlineMath math="K/F" /> の基底 <InlineMath math="\{e_i\}" /> で書けるので、<InlineMath math="c_j = \sum_{i=1}^m a_{ij} e_i" /> （<InlineMath math="a_{ij} \in F" />）となる。これを代入すると、
                </p>
                <BlockMath math="x = \sum_{j=1}^n \left( \sum_{i=1}^m a_{ij} e_i \right) f_j = \sum_{i,j} a_{ij} (e_i f_j)" />
                <p>
                    となり、<InlineMath math="x" /> は <InlineMath math="B" /> の <InlineMath math="F" />-線形結合で表される。
                </p>
                <p>
                    <strong>（線形独立であること）</strong> <InlineMath math="F" /> 上の線形関係 <InlineMath math="\sum_{i,j} a_{ij} (e_i f_j) = 0" />（<InlineMath math="a_{ij} \in F" />）があったとする。これを <InlineMath math="\sum_{j} \left( \sum_{i} a_{ij} e_i \right) f_j = 0" /> と書き直す。括弧の中身は <InlineMath math="K" /> の元であり、<InlineMath math="\{f_j\}" /> は <InlineMath math="K" /> 上線形独立だから、すべての <InlineMath math="j" /> について <InlineMath math="\sum_{i} a_{ij} e_i = 0" /> となる。さらに <InlineMath math="\{e_i\}" /> は <InlineMath math="F" /> 上線形独立だから、すべての <InlineMath math="i, j" /> について <InlineMath math="a_{ij} = 0" /> となる。
                </p>
                <p>
                    よって <InlineMath math="B" /> は <InlineMath math="L/F" /> の基底であり、その要素数は <InlineMath math="mn" /> だから、<InlineMath math="[L : F] = mn = [L : K][K : F]" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                連鎖律の具体例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-2 (拡大次数の計算)">
                <p>
                    複素数体 <InlineMath math="\mathbb{C}" /> の有理数体 <InlineMath math="\mathbb{Q}" /> 上の次元を考える。<InlineMath math="\mathbb{C}" /> は <InlineMath math="\mathbb{R}" /> 上 <InlineMath math="\{1, i\}" /> を基底にもつので <InlineMath math="[\mathbb{C} : \mathbb{R}] = 2" /> である。一方、<InlineMath math="\mathbb{R}" /> は <InlineMath math="\mathbb{Q}" /> 上無限次元（連続体濃度をもつ）だから <InlineMath math="[\mathbb{R} : \mathbb{Q}] = \infty" /> である。連鎖律より、
                </p>
                <BlockMath math="[\mathbb{C} : \mathbb{Q}] = [\mathbb{C} : \mathbb{R}][\mathbb{R} : \mathbb{Q}] = 2 \cdot \infty = \infty" />
                <p>
                    となる。
                </p>
                <p>
                    また、<InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3})" /> の <InlineMath math="\mathbb{Q}" /> 上の拡大次数は、中間体 <InlineMath math="\mathbb{Q}(\sqrt{2})" /> を経由して計算できる。
                </p>
                <BlockMath math="\begin{aligned} [\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] &= [\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})][\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] \\ &= 2 \cdot 2 = 4 \end{aligned}" />
                <p>
                    基底として <InlineMath math="\{1, \sqrt{2}, \sqrt{3}, \sqrt{6}\}" /> がとれる。
                </p>
            </ContentBox>

            <p>
                この連鎖律は、中間体の存在を制限する強力なツールとしても使えます。群論におけるラグランジュの定理とよく似ています。
            </p>

            <ContentBox type="example" title="Example 1.1-3 (素数次拡大の中間体)">
                <p>
                    体の拡大 <InlineMath math="K/F" /> の拡大次数 <InlineMath math="[K : F]" /> が<strong>素数 <InlineMath math="p" /></strong> であるとする。このとき、<InlineMath math="F \subsetneq E \subsetneq K" /> となるような真の中間体 <InlineMath math="E" /> は存在しない。
                </p>
                <p>
                    （理由）：中間体 <InlineMath math="E" /> が存在したとすると、連鎖律より <InlineMath math="[K : F] = [K : E][E : F] = p" /> となる。<InlineMath math="p" /> は素数なので、<InlineMath math="[E : F] = 1" />（このとき <InlineMath math="E = F" />）か、または <InlineMath math="[E : F] = p" />（このとき <InlineMath math="E = K" />）のどちらかしかあり得ないからである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>体 <InlineMath math="K" /> が体 <InlineMath math="F" /> を部分体として含むとき、<InlineMath math="K/F" /> を体の拡大という。</li>
                    <li><InlineMath math="K" /> は <InlineMath math="F" /> 上のベクトル空間とみなせる。その次元 <InlineMath math="\dim_F K" /> を拡大次数といい、<InlineMath math="[K : F]" /> と書く。</li>
                    <li>連鎖律：<InlineMath math="F \subset K \subset L" /> に対して <InlineMath math="[L : F] = [L : K][K : F]" /> が成立する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
