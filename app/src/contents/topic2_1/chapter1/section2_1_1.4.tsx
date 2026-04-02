import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function LinearCombinationsAndSpan() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ベクトル空間の中に「部分空間」を作り出す最も代表的で汎用的な方法が、いくつかのベクトルを「混ぜ合わせる」ことです。
                このようにベクトルを定数倍して足し合わせる操作を<strong>線形結合</strong>と呼び、それらで埋め尽くされる空間を<strong>生成系（スパン）</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 線形結合
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">線形結合</h2>

            <ContentBox type="definition" title="Definition 1.4-1 （線形結合 / Linear Combination）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> のいくつかのベクトル <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n" /> とスカラー <InlineMath math="c_1, c_2, \dots, c_n" /> を用いて、
                </p>
                <BlockMath math="c_1 \boldsymbol{v}_1 + c_2 \boldsymbol{v}_2 + \dots + c_n \boldsymbol{v}_n" />
                <p>
                    の形で表されるベクトルを、ベクトル <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n" /> の<strong>線形結合</strong>（または一次結合）という。
                </p>
            </ContentBox>

            <p className="mt-4">
                ベクトル空間の演算は「和」と「スカラー倍」の2つしかありません。この2つを組み合わせてできる「あらゆる可能性」の形が線形結合です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 生成系（スパン）
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">生成系（スパン）</h2>

            <ContentBox type="definition" title="Definition 1.4-2 （生成系・スパン / Span）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> のベクトル <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n" /> に対し、これらを用いた<strong>すべての線形結合の集合</strong>を、<InlineMath math="\{\boldsymbol{v}_1, \dots, \boldsymbol{v}_n\}" /> の<strong>張る部分空間</strong>（または生成される部分空間）といい、次のように表す。
                </p>
                <BlockMath math="\begin{aligned} \mathrm{Span}&\{\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n\} \\ &= \{ c_1 \boldsymbol{v}_1 + c_2 \boldsymbol{v}_2 + \dots + c_n \boldsymbol{v}_n \mid c_i \in K \} \end{aligned}" />
                <p className="mt-2 text-sm">
                    （記号として <InlineMath math="\langle \boldsymbol{v}_1, \dots, \boldsymbol{v}_n \rangle" /> を用いることもあります）
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.4-1 （スパンは最小の部分空間である）">
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>集合 <InlineMath math="W = \mathrm{Span}\{\boldsymbol{v}_1, \dots, \boldsymbol{v}_n\}" /> は、それ自体が <InlineMath math="V" /> の<strong>部分空間</strong>となる。</li>
                    <li><InlineMath math="W" /> は、元のベクトル <InlineMath math="\boldsymbol{v}_1, \dots, \boldsymbol{v}_n" /> を<strong>すべて含む最小の部分空間</strong>である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof （スパンが部分空間であることの証明）">
                <p>
                    Theorem 1.3-1（部分空間の3条件）を用いて示す。<br />
                    前提として <InlineMath math="W" /> のベクトルは <InlineMath math="\boldsymbol{x} = c_1\boldsymbol{v}_1 + \dots + c_n\boldsymbol{v}_n" /> の形で書ける。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>零ベクトルを含む：</strong> すべてのスカラーを <InlineMath math="c_i = 0" /> とすれば、<InlineMath math="0\boldsymbol{v}_1 + \dots + 0\boldsymbol{v}_n = \boldsymbol{0} \in W" />。
                    </li>
                    <li>
                        <strong>和について閉じている：</strong> <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in W" /> を取る。それぞれ <InlineMath math="\boldsymbol{x} = \sum c_i\boldsymbol{v}_i" />, <InlineMath math="\boldsymbol{y} = \sum d_i\boldsymbol{v}_i" /> と書けるので、<br />
                        <InlineMath math="\boldsymbol{x} + \boldsymbol{y} = \sum (c_i + d_i)\boldsymbol{v}_i" /> となり、これも線形結合の形をしているため <InlineMath math="W" /> に属する。
                    </li>
                    <li>
                        <strong>スカラー倍について閉じている：</strong> スカラー <InlineMath math="k" /> を掛けると、<InlineMath math="k\boldsymbol{x} = \sum (kc_i)\boldsymbol{v}_i" /> となり、係数が単に <InlineMath math="kc_i" /> となった線形結合なので <InlineMath math="W" /> に属する。
                    </li>
                </ul>
                <p>以上より、スパンは部分空間をなす。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-6">
                <h3 className="font-bold text-lg mb-2">スパンの幾何学的イメージ</h3>
                <p>
                    <InlineMath math="\mathbb{R}^3" /> を例に考えます。
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>ゼロでない1つのベクトル <InlineMath math="\boldsymbol{v}_1" /> の張る空間：<InlineMath math="\mathrm{Span}\{\boldsymbol{v}_1\}" /> は、「原点を通る<strong>直線</strong>」になります。</li>
                    <li>直線上になく互いに平行でない2つのベクトル <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2" /> の張る空間：<InlineMath math="\mathrm{Span}\{\boldsymbol{v}_1, \boldsymbol{v}_2\}" /> は、「原点を通る<strong>平面</strong>」になります。</li>
                </ul>
            </div>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベクトルを定数倍して足し合わせたものを<strong>線形結合</strong>という（Definition 1.4-1）。</li>
                    <li>与えられた有限個のベクトルの中だけで作れる「すべての線形結合」の集まりを<strong>スパン（生成系）</strong>と呼ぶ（Definition 1.4-2）。</li>
                    <li>いくつかのベクトルを与えさえすれば、そのスパンを考えることで「原点を含む直線や平面」のような<strong>必ず部分空間になる集合</strong>を自動的に作り出すことができる（Proposition 1.4-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
