import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function OrthogonalityAndComplements() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で「なす角 <InlineMath math="\theta" />」を定義しましたが、幾何学において最も重要で特別な関係をもたらす角度といえば、間違いなく<strong>直角（<InlineMath math="90^\circ" /> または <InlineMath math="\pi/2" />）</strong>でしょう。<br />
                内積空間において、この「直角に交わる」という直感的な概念を抽象化したものを<strong>「直交する（Orthogonal）」</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交の定義</h2>

            <p>
                <InlineMath math="\cos(\pi/2) = 0" /> ですから、なす角を定義する式の分子が <InlineMath math="0" /> になるとき、すなわち<strong>内積が <InlineMath math="0" /> になるとき</strong>、ベクトルは「直交している」と定義します。
            </p>

            <ContentBox type="definition" title="Definition 8.4-1 （直交 / Orthogonality）">
                <p>
                    内積空間 <InlineMath math="V" /> における2つのベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対して、
                </p>
                <BlockMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = 0" />
                <p>
                    が成り立つとき、<InlineMath math="\boldsymbol{x}" /> と <InlineMath math="\boldsymbol{y}" /> は<strong>直交している</strong>といい、<InlineMath math="\boldsymbol{x} \perp \boldsymbol{y}" /> と表記する。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 定義上、零ベクトル <InlineMath math="\boldsymbol{0}" /> はいかなるベクトルとも内積が <InlineMath math="0" /> になるため「すべてのベクトルと直交している」と見なします。これは幾何学的な直感からは少し外れますが、代数的には非常に都合の良い性質です。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交補空間</h2>

            <p>
                ある1つのベクトルに直交するベクトルを探すのも重要ですが、ある「面（部分空間）」全体に対して垂直な方向を探すことも重要です。<br />
                例えば、3次元空間 <InlineMath math="\mathbb{R}^3" /> において、<InlineMath math="xy" /> 平面（部分空間）全体に対して直交するのは <InlineMath math="z" /> 軸です。<br />
                この関係を一般化したものが「直交補空間」です。
            </p>

            <ContentBox type="definition" title="Definition 8.4-2 （直交補空間 / Orthogonal Complement）">
                <p>
                    内積空間 <InlineMath math="V" /> のある部分空間 <InlineMath math="W" /> に対して、「<InlineMath math="W" /> に含まれる<strong>すべての</strong>ベクトルと直交する」ようなベクトル全体からなる集合を、<InlineMath math="W" /> の<strong>直交補空間</strong>と呼び、<InlineMath math="W^\perp" /> （ダブリュー・パープ）と表記する。
                </p>
                <BlockMath math="W^\perp = \{ \boldsymbol{x} \in V \mid \text{すべての } \boldsymbol{y} \in W \text{ に対して } \langle \boldsymbol{x}, \boldsymbol{y} \rangle = 0 \}" />
            </ContentBox>

            <ContentBox type="theorem" title="Proposition 8.4-1 （直交補空間は部分空間）">
                <p>
                    <InlineMath math="V" /> が内積空間、<InlineMath math="W" /> がその部分空間であるとき、<strong>直交補空間 <InlineMath math="W^\perp" /> もまた <InlineMath math="V" /> の部分空間となる。</strong>
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    部分空間となる条件（零ベクトルを含むこと、和・スカラー倍について閉じていること）を確認する。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-3">
                    <li>
                        零ベクトル <InlineMath math="\boldsymbol{0}" /> について、任意の <InlineMath math="\boldsymbol{y} \in W" /> に対して <InlineMath math="\langle \boldsymbol{0}, \boldsymbol{y} \rangle = 0" /> なので、<InlineMath math="\boldsymbol{0} \in W^\perp" /> である。（空集合ではない。）
                    </li>
                    <li>
                        <InlineMath math="\boldsymbol{x}_1, \boldsymbol{x}_2 \in W^\perp" /> を任意の2つのベクトルとする。任意の <InlineMath math="\boldsymbol{y} \in W" /> に対して、内積の双線形性より
                        <BlockMath math="\langle \boldsymbol{x}_1 + \boldsymbol{x}_2, \boldsymbol{y} \rangle = \langle \boldsymbol{x}_1, \boldsymbol{y} \rangle + \langle \boldsymbol{x}_2, \boldsymbol{y} \rangle = 0 + 0 = 0" />
                        ゆえに和 <InlineMath math="\boldsymbol{x}_1 + \boldsymbol{x}_2" /> も <InlineMath math="W^\perp" /> に含まれる。
                    </li>
                    <li>
                        <InlineMath math="\boldsymbol{x} \in W^\perp" /> 、<InlineMath math="c" /> をスカラーとする。任意の <InlineMath math="\boldsymbol{y} \in W" /> に対して、双線形性より
                        <BlockMath math="\langle c\boldsymbol{x}, \boldsymbol{y} \rangle = c \langle \boldsymbol{x}, \boldsymbol{y} \rangle = c \cdot 0 = 0" />
                        ゆえにスカラー倍 <InlineMath math="c\boldsymbol{x}" /> も <InlineMath math="W^\perp" /> に含まれる。
                    </li>
                </ol>
                <p>
                    よって、<InlineMath math="W^\perp" /> は <InlineMath math="V" /> の部分空間である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">射影定理（直交分解定理）</h2>

            <p>
                直交補空間の最大の意義は、<strong>全体空間を「<InlineMath math="W" /> の方向」と「それに垂直な方向」に完璧に分解できる</strong>という点にあります。<br />
                空間の次元が有限の場合、次の極めて強力な定理が成り立ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-1 （直交分解定理・射影定理）">
                <p>
                    有限次元の内積空間 <InlineMath math="V" /> と、その任意の部分空間 <InlineMath math="W" /> を考える。<br />
                    このとき、空間全体 <InlineMath math="V" /> は <InlineMath math="W" /> とその直交補空間 <InlineMath math="W^\perp" /> の<strong>直和</strong>として完全に分解される。
                </p>
                <BlockMath math="V = W \oplus W^\perp" />
                <p>
                    すなわち、<InlineMath math="V" /> に属するすべてのベクトル <InlineMath math="\boldsymbol{v}" /> は、
                </p>
                <BlockMath math="\boldsymbol{v} = \boldsymbol{w} + \boldsymbol{w}^\perp \quad (\boldsymbol{w} \in W, \, \boldsymbol{w}^\perp \in W^\perp)" />
                <p>
                    という形に<strong>ただ一通りに</strong>分解（直交分解）することができる。
                </p>
                <p>
                    さらに、次元定理として次式が成り立つ。
                </p>
                <BlockMath math="\dim V = \dim W + \dim W^\perp" />
            </ContentBox>

            <ContentBox type="proof" title="Proof (Outline)">
                <p>
                    直和であることを示すためには、「和空間が <InlineMath math="V" /> に一致すること（<InlineMath math="V = W + W^\perp" />）」と、「共通部分が零ベクトルのみであること（<InlineMath math="W \cap W^\perp = \{ \boldsymbol{0} \}" />）」の二点を示す必要がある。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-3">
                    <li>
                        <strong>共通部分が <InlineMath math="\{ \boldsymbol{0} \}" /> であること：</strong><br />
                        <InlineMath math="\boldsymbol{x} \in W \cap W^\perp" /> とする。<InlineMath math="\boldsymbol{x}" /> は <InlineMath math="W" /> にも <InlineMath math="W^\perp" /> にも属するため、自分自身と直交しなければならない。<br />
                        <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{x} \rangle = 0" />。<br />
                        内積の正値性より、これを持たすベクトルは <InlineMath math="\boldsymbol{x} = \boldsymbol{0}" /> に限る。よって直和の条件の一つを満たす。
                    </li>
                    <li>
                        <strong>任意の <InlineMath math="\boldsymbol{v}" /> が分解できること（存在証明）：</strong><br />
                        次章で学ぶ「グラム・シュミットの直交化法」により、部分空間 <InlineMath math="W" /> には正規直交基底（互いに直交し、長さが1の基底） <InlineMath math="\{ \boldsymbol{u}_1, \dots, \boldsymbol{u}_k \}" /> が存在する。<br />
                        任意の <InlineMath math="\boldsymbol{v} \in V" /> に対して、次のようなベクトル <InlineMath math="\boldsymbol{w}" /> を作ってみる（これを直交射影と呼ぶ）。
                        <BlockMath math="\boldsymbol{w} = \sum_{i=1}^k \langle \boldsymbol{v}, \boldsymbol{u}_i \rangle \boldsymbol{u}_i" />
                        このとき、<InlineMath math="\boldsymbol{w}" /> は明らかに基底の線形結合なので <InlineMath math="\boldsymbol{w} \in W" /> である。<br />
                        次に、残りのベクトル <InlineMath math="\boldsymbol{v} - \boldsymbol{w}" /> が <InlineMath math="W^\perp" /> に属することを示すために、基底 <InlineMath math="\boldsymbol{u}_j" /> との内積を取ると
                        <BlockMath math="\langle \boldsymbol{v} - \boldsymbol{w}, \boldsymbol{u}_j \rangle = \langle \boldsymbol{v}, \boldsymbol{u}_j \rangle - \left\langle \sum_{i} \langle \boldsymbol{v}, \boldsymbol{u}_i \rangle \boldsymbol{u}_i, \boldsymbol{u}_j \right\rangle" />
                        基底の直交性から <InlineMath math="i \neq j" /> の項は内積が0になり、<InlineMath math="\langle \boldsymbol{u}_j, \boldsymbol{u}_j \rangle = 1" /> なので、
                        <BlockMath math="= \langle \boldsymbol{v}, \boldsymbol{u}_j \rangle - \langle \boldsymbol{v}, \boldsymbol{u}_j \rangle = 0" />
                        よって <InlineMath math="\boldsymbol{w}^\perp = \boldsymbol{v} - \boldsymbol{w}" /> は <InlineMath math="W^\perp" /> に属する。<br />
                        結果として、<InlineMath math="\boldsymbol{v} = \boldsymbol{w} + \boldsymbol{w}^\perp" /> と分解できた。
                    </li>
                </ol>
                <p>
                    以上より、<InlineMath math="V = W \oplus W^\perp" /> は真であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>内積が <InlineMath math="0" /> になる関係性を、幾何学的な直角になぞらえて<strong>直交する</strong>と呼ぶ（Definition 8.4-1）。</li>
                    <li>ある部分空間のすべてのベクトルに対し垂直となるベクトルの集合を<strong>直交補空間 <InlineMath math="W^\perp" /></strong> といい、これ自体も部分空間となる（Definition 8.4-2, Proposition 8.4-1）。</li>
                    <li>有限次元空間において、すべてのベクトル空間は「ある面」と「その面に垂直な方向」の<strong>直交分解</strong>によって唯一の表現形として直和に分解できる（Theorem 8.4-1：直交分解定理・射影定理）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
