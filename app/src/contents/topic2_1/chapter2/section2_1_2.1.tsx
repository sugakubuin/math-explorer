import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function LinearIndependenceAndDependence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章では、いくつか与えられたベクトルを定数倍して足し合わせる「線形結合」とその集まりである「スパン（生成系）」について学びました。
                本章では、「与えられたベクトルたちの中に、<strong>無駄（他で代用できるもの）が含まれているか？</strong>」を判定する重要な概念である<strong>線形独立（一次独立）</strong>と<strong>線形従属（一次従属）</strong>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 線形独立と線形従属の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">線形独立・線形従属の定義</h2>

            <p>
                あるベクトルが他のベクトルの線形結合で表せる場合、そのベクトルは「スパンを広げる」という意味では無駄な存在です。
                これを数学的に厳密に定義したのが以下の概念です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 （線形独立・線形従属）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> のいくつかのベクトル <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n" /> について、以下の関係式（<strong>自明な関係</strong>と呼びます）を考えます。
                </p>
                <BlockMath math="c_1 \boldsymbol{v}_1 + c_2 \boldsymbol{v}_2 + \dots + c_n \boldsymbol{v}_n = \boldsymbol{0}" />
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>線形独立 (Linearly Independent)：</strong><br />
                        上の式が成り立つようなスカラーの組が <InlineMath math="c_1 = c_2 = \dots = c_n = 0" /> の<strong>ただ1通りしかない（自明な解しかもたない）</strong>とき、これらは線形独立（または一次独立）であるという。
                    </li>
                    <li>
                        <strong>線形従属 (Linearly Dependent)：</strong><br />
                        線形独立でないとき、すなわち <InlineMath math="c_1, \dots, c_n" /> の中に<strong>少なくとも1つは <InlineMath math="0" /> でないものが存在して</strong>上の式が成り立つとき、これらは線形従属（または一次従属）であるという。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="定義の意味（他で代用できるか？）">
                <p>
                    線形従属の定義式で、仮に <InlineMath math="c_1 \neq 0" /> だったとします。すると方程式を変形して、
                </p>
                <BlockMath math="\boldsymbol{v}_1 = -\frac{c_2}{c_1}\boldsymbol{v}_2 - \dots - \frac{c_n}{c_1}\boldsymbol{v}_n" />
                <p>
                    のように、<InlineMath math="\boldsymbol{v}_1" /> を他のベクトルの線形結合で表すことができます。
                    つまり「<strong>どれか1つでも他のベクトルで表現（代用）できるなら線形従属、どのベクトルも他からは作り出せないなら線形独立</strong>」ということです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 幾何学的意味
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">幾何学的意味</h2>

            <p>
                <InlineMath math="\mathbb{R}^2" /> や <InlineMath math="\mathbb{R}^3" /> における線形独立・線形従属の様子を幾何学的にイメージしてみましょう。
            </p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-6">
                <ul className="list-disc pl-5 space-y-3">
                    <li>
                        <strong>ベクトルの数が1つのとき：</strong><br />
                        <InlineMath math="\{\boldsymbol{v}\}" /> が線形独立 <InlineMath math="\Leftrightarrow \boldsymbol{v} \neq \boldsymbol{0}" />。<br />
                        零ベクトルでなければ、定数倍して <InlineMath math="\boldsymbol{0}" /> になるのは <InlineMath math="0" /> を掛けたときだけです。
                    </li>
                    <li>
                        <strong>ベクトルの数が2つのとき：</strong><br />
                        <InlineMath math="\{\boldsymbol{v}_1, \boldsymbol{v}_2\}" /> が線形独立 <InlineMath math="\Leftrightarrow" /> 2つのベクトルが<strong>同一直線上にない（平行でない）</strong>。<br />
                        線形従属であれば一方が他方の定数倍（<InlineMath math="\boldsymbol{v}_1 = k\boldsymbol{v}_2" />）となります。
                    </li>
                    <li>
                        <strong>ベクトルの数が3つのとき：</strong><br />
                        <InlineMath math="\{\boldsymbol{v}_1, \boldsymbol{v}_2, \boldsymbol{v}_3\}" /> が線形独立 <InlineMath math="\Leftrightarrow" /> 3つのベクトルが<strong>同一平面上にない</strong>。<br />
                        線形従属であれば、あるベクトルが他の2つの作る平面に乗っている（<InlineMath math="\boldsymbol{v}_3 = a\boldsymbol{v}_1 + b\boldsymbol{v}_2" /> のように空間を広げられない）状態になります。
                    </li>
                </ul>
            </div>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基本的な性質
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な性質</h2>

            <ContentBox type="proposition" title="Proposition 2.1-1 （零ベクトルを含む集合は線形従属）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> のベクトルの集合 <InlineMath math="S = \{\boldsymbol{v}_1, \dots, \boldsymbol{v}_n\}" /> が<strong>零ベクトル <InlineMath math="\boldsymbol{0}" /> を含むならば</strong>、<InlineMath math="S" /> は必ず線形従属である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    一般性を失わず、<InlineMath math="\boldsymbol{v}_1 = \boldsymbol{0}" /> と仮定する。<br />
                    このとき、スカラーとして <InlineMath math="c_1 = 1 \neq 0" /> を選び、残りを <InlineMath math="c_2 = \dots = c_n = 0" /> とすると、組 <InlineMath math="(c_1, c_2, \dots, c_n) = (1, 0, \dots, 0)" /> はすべてが0ではない。
                    しかし、これらのスカラーを用いた線形結合を計算すると、
                </p>
                <BlockMath math="1\cdot \boldsymbol{0} + 0\cdot \boldsymbol{v}_2 + \dots + 0\cdot \boldsymbol{v}_n = \boldsymbol{0} + \boldsymbol{0} + \dots + \boldsymbol{0} = \boldsymbol{0}" />
                <p>
                    となり、すべてが 0 ではないスカラーの組で線形結合が <InlineMath math="\boldsymbol{0}" /> になる。
                    したがって線形従属の定義を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="c_1\boldsymbol{v}_1 + \dots + c_n\boldsymbol{v}_n = \boldsymbol{0}" /> となるのが <InlineMath math="c_1 = \dots = c_n = 0" /> のみであるとき、<strong>線形独立</strong>という（Definition 2.1-1）。</li>
                    <li>上の式が <InlineMath math="0" /> 以外のスカラーを含んで成り立つとき、<strong>線形従属</strong>といい、これは「どれかのベクトルが他で代用できる（無駄がある）」状態である（Remark）。</li>
                    <li>零ベクトルを含むベクトルの組は、常に線形従属になる（Proposition 2.1-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
