import { InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function Subspaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                あるベクトル空間の部分集合が、それ自身でもベクトル空間の公理を満たしているとき、これを「部分空間」と呼びます。
                8つの公理をすべてチェックし直す必要はなく、和とスカラー倍について「閉じている」ことだけを確認すればよいという強力な判定法が存在します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 部分空間の定義と判定
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">部分空間の定義と判定条件</h2>

            <ContentBox type="definition" title="Definition 1.3-1 （部分空間 / Subspace）">
                <p>
                    <InlineMath math="V" /> をベクトル空間とする。<InlineMath math="V" /> の空でない部分集合 <InlineMath math="W" /> が、<InlineMath math="V" /> と同じ和とスカラー倍の演算によってそれ自身もベクトル空間となるとき、<InlineMath math="W" /> を <InlineMath math="V" /> の<strong>部分空間</strong>という。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.3-1 （部分空間の3条件による判定）">
                <p>
                    <InlineMath math="V" /> をベクトル空間、<InlineMath math="W" /> を <InlineMath math="V" /> の部分集合とする。<InlineMath math="W" /> が <InlineMath math="V" /> の部分空間であるための必要十分条件は、以下の3条件を満たすことである。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><strong>零ベクトルを含む：</strong> <InlineMath math="\boldsymbol{0} \in W" /> （これにより <InlineMath math="W" /> が空集合でないことが保証される）。</li>
                    <li><strong>和について閉じている：</strong> 任意の <InlineMath math="\boldsymbol{u}, \boldsymbol{v} \in W" /> に対して、<InlineMath math="\boldsymbol{u} + \boldsymbol{v} \in W" />。</li>
                    <li><strong>スカラー倍について閉じている：</strong> 任意の <InlineMath math="\boldsymbol{u} \in W" /> と任意のスカラー <InlineMath math="c" /> に対して、<InlineMath math="c\boldsymbol{u} \in W" />。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof （部分空間の判定条件の証明概略）">
                <p>
                    条件2，3が成り立つとき、結合則や交換分配則などの公理は、そもそも全体空間 <InlineMath math="V" /> で成り立っているため、その部分集合である <InlineMath math="W" /> の元に対しても当然成り立つ（演算則の「遺伝」）。<br />
                    また、条件3により、<InlineMath math="c = -1" /> とすれば <InlineMath math="-\boldsymbol{u} \in W" /> となり、逆元の存在も保証される。
                    したがって、この3つ（実質的には和とスカラー倍で閉じているかの2つ）を確かめれば十分である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="判定の注意点（まず零ベクトルを探す）">
                <p>
                    部分空間であることを示す際は、何より先に「<strong>零ベクトル <InlineMath math="\boldsymbol{0}" /> がそこに含まれるか？</strong>」を確認するのがコツです。なぜなら、原点（零ベクトル）を通らない平面や直線は、明らかにスカラー倍（たとえば <InlineMath math="0" /> 倍）について閉じていないため、即座に部分空間ではないと判定できるからです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 部分空間の例と非例
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">部分空間の例・非例</h2>

            <ContentBox type="example" title="Example 1.3-1 （部分空間の具体例・反例）">
                <p className="font-bold">【例】原点を通る平面</p>
                <p>
                    <InlineMath math="V = \mathbb{R}^3" /> において、集合 <InlineMath math="W = \{ (x,y,z) \in \mathbb{R}^3 \mid 2x - 3y + z = 0 \}" /> は部分空間である。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><InlineMath math="(0,0,0)" /> は <InlineMath math="2(0)-3(0)+0=0" /> を満たすため <InlineMath math="\boldsymbol{0} \in W" />。</li>
                    <li><InlineMath math="\boldsymbol{u}=(x_1, y_1, z_1), \boldsymbol{v}=(x_2, y_2, z_2) \in W" /> とすると、<br />
                        <InlineMath math="2(x_1+x_2) - 3(y_1+y_2) + (z_1+z_2) = (2x_1-3y_1+z_1) + (2x_2-3y_2+z_2) = 0 + 0 = 0" /> となり、<InlineMath math="\boldsymbol{u}+\boldsymbol{v} \in W" />。</li>
                    <li><InlineMath math="c" /> 倍しても <InlineMath math="2(cx_1) - 3(cy_1) + (cz_1) = c(2x_1-3y_1+z_1) = c(0) = 0" /> となり、<InlineMath math="c\boldsymbol{u} \in W" />。</li>
                </ul>
                <p>よって3条件を満たし部分空間。</p>

                <p className="font-bold mt-6">【非例1】原点を通らない平面</p>
                <p>
                    <InlineMath math="W = \{ (x,y,z) \in \mathbb{R}^3 \mid 2x - 3y + z = 1 \}" /> は部分空間ではない。<br />
                    <InlineMath math="x=y=z=0" /> は方程式を満たさない（<InlineMath math="0 \ne 1" />）ため、原点（零ベクトル）を含まないからである。
                </p>

                <p className="font-bold mt-6">【非例2】第1象限の集まり</p>
                <p>
                    <InlineMath math="W = \{ (x,y) \in \mathbb{R}^2 \mid x \ge 0, y \ge 0 \}" /> は部分空間ではない。<br />
                    和については閉じているが、スカラー倍について閉じていない（例：ベクトル <InlineMath math="(1,1) \in W" /> に対して、スカラー <InlineMath math="-1" /> を掛けると <InlineMath math="(-1,-1)" /> となり、<InlineMath math="W" /> の範囲外に出るため）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベクトル空間におけるベクトル空間の構造を持った部分集合を<strong>部分空間</strong>と呼ぶ（Definition 1.3-1）。</li>
                    <li>ある集合が部分空間であることを示すには、「和について閉じているか」「スカラー倍について閉じているか」「零ベクトルを含むか」の3条件を確認すればよい（Theorem 1.3-1）。</li>
                    <li>「原点（零要素）を含まない集合」や「マイナス倍ではみ出てしまう領域（例：<InlineMath math="x \ge 0" />）」は部分空間にならない（Example 1.3-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
