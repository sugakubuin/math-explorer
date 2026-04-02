import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function GramSchmidtTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                正規直交基底が極めて便利であることは前節で分かりました。<br />
                しかし、空間に最初から都合よく正規直交基底が用意されているとは限りません。多くの場合、私たちが直面するのは「ただの基底（斜めに交わっていて、長さもバラバラ）」です。
            </p>
            <p>
                では、「ただの基底」を「正規直交基底」に変換することは可能でしょうか？<br />
                その答えは YES であり、それを実現する魔法のようなアルゴリズムが、本節で学ぶ<strong>「グラム・シュミットの直交化法（Gram-Schmidt Orthogonalization Process）」</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">グラム・シュミットの定理（直交化アルゴリズム）</h2>

            <p>
                「既に直交しているベクトルたちが張る空間へ、新しいベクトルから射影を落とし、その<b>残りの（垂直な）成分</b>だけを抽出して新たな仲間に加える」<br />
                この「射影して切り捨てる」プロセスを順番に繰り返していくのが、グラム・シュミット法の中身です。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-1 （グラム・シュミットの直交化定理）">
                <p>
                    内積空間 <InlineMath math="V" /> における任意の線形独立なベクトルの組 <InlineMath math="\{ \boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_k \}" /> に対して、これと同じ部分空間を張る<strong>正規直交系</strong> <InlineMath math="\{ \boldsymbol{u}_1, \boldsymbol{u}_2, \dots, \boldsymbol{u}_k \}" /> を必ず構成することができる。<br />
                    すなわち、すべての <InlineMath math="i" /> について
                </p>
                <BlockMath math="\mathrm{Span}(\boldsymbol{v}_1, \dots, \boldsymbol{v}_i) = \mathrm{Span}(\boldsymbol{u}_1, \dots, \boldsymbol{u}_i)" />
                <p>を満たすようにできる。（特に、全体を張る基底からスタートすれば、必ず正規直交基底が作れる。）</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （構成的証明・アルゴリズムの導出）">
                <p>
                    数学的帰納法を用いて、<InlineMath math="\boldsymbol{u}_1" /> から順番に具体的に構成していく（構成的証明）。同時に、これがアルゴリズムの導出にもなっている。
                </p>

                <p className="font-bold">Step 1: <InlineMath math="\boldsymbol{u}_1" /> の構成</p>
                <p>
                    最初のベクトル <InlineMath math="\boldsymbol{v}_1" /> は、まだ誰とも直交を気にする必要がない。長さを <InlineMath math="1" /> に揃える（正規化する）だけでよい。<br />
                    <InlineMath math="\boldsymbol{v}_1" /> は線形独立性から零ベクトルではないので、そのノルムで割る。
                </p>
                <BlockMath math="\boldsymbol{u}_1 = \frac{1}{\| \boldsymbol{v}_1 \|} \boldsymbol{v}_1" />
                <p>これにより <InlineMath math="\{ \boldsymbol{u}_1 \}" /> は正規直交系であり、<InlineMath math="\mathrm{Span}(\boldsymbol{v}_1) = \mathrm{Span}(\boldsymbol{u}_1)" /> が成り立つ。</p>

                <p className="font-bold mt-4">Step 2: <InlineMath math="\boldsymbol{u}_2" /> の構成</p>
                <p>
                    次に、<InlineMath math="\boldsymbol{v}_2" /> を <InlineMath math="\boldsymbol{u}_1" /> と直交するように修正したい。<br />
                    前章の「射影定理」を思い出すと、ベクトル <InlineMath math="\boldsymbol{v}_2" /> は「<InlineMath math="\boldsymbol{u}_1" /> 方向の直交射影成分」と「それと直交する（垂直な）成分」に分解できた。<br />
                    我々が欲しいのは、すでに構築した <InlineMath math="\boldsymbol{u}_1" /> に垂直な成分であるから、元のベクトルから「<InlineMath math="\boldsymbol{u}_1" /> への射影」を引き算して除去すればよい。
                </p>
                <BlockMath math="\boldsymbol{w}_2 = \boldsymbol{v}_2 - (\boldsymbol{u}_1 \text{ への直交射影})" />
                <BlockMath math="\boldsymbol{w}_2 = \boldsymbol{v}_2 - \langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle \boldsymbol{u}_1" />
                <p>
                    <InlineMath math="\boldsymbol{w}_2" /> が本当に <InlineMath math="\boldsymbol{u}_1" /> と直交しているか確認する。
                </p>
                <BlockMath math="\begin{aligned}
                                    \langle \boldsymbol{w}_2, \boldsymbol{u}_1 \rangle &= \langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle - \langle \langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle \boldsymbol{u}_1, \boldsymbol{u}_1 \rangle \\ 
                                    &= \langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle - \langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle \langle \boldsymbol{u}_1, \boldsymbol{u}_1 \rangle
                                \end{aligned}" />
                <p>
                    <InlineMath math="\langle \boldsymbol{u}_1, \boldsymbol{u}_1 \rangle = 1" /> なので、見事に <InlineMath math="0" /> となる。<br />
                    また、<InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2" /> は線形独立なので、<InlineMath math="\boldsymbol{v}_2" /> が完全に <InlineMath math="\boldsymbol{u}_1" /> 方向（<span className="text-sm text-slate-500">すなわち</span> <InlineMath math="\boldsymbol{v}_1" /> 方向）に重なることはなく、<InlineMath math="\boldsymbol{w}_2 \neq \boldsymbol{0}" /> が保証される。<br />
                    あとは、これを正規化して長さ <InlineMath math="1" /> にする。
                </p>
                <BlockMath math="\boldsymbol{u}_2 = \frac{1}{\| \boldsymbol{w}_2 \|} \boldsymbol{w}_2" />
                <p>これで <InlineMath math="\boldsymbol{u}_1, \boldsymbol{u}_2" /> の正規直交系が完成し、張る空間も一致する。</p>

                <p className="font-bold mt-4">Step k: 一般のアルゴリズム</p>
                <p>
                    同様の推論を繰り返す。<InlineMath math="m-1" /> 番目まで正規直交系 <InlineMath math="\{ \boldsymbol{u}_1, \dots, \boldsymbol{u}_{m-1} \}" /> ができたとする。<br />
                    <InlineMath math="m" /> 番目のベクトル <InlineMath math="\boldsymbol{v}_m" /> から、「すでに構築された各 <InlineMath math="\boldsymbol{u}_i" /> 方向への射影」をすべて引き算する。
                </p>
                <BlockMath math="\boldsymbol{w}_m = \boldsymbol{v}_m - \sum_{i=1}^{m-1} \langle \boldsymbol{v}_m, \boldsymbol{u}_i \rangle \boldsymbol{u}_i" />
                <p>
                    こうして得られた <InlineMath math="\boldsymbol{w}_m" /> は、過去のすべての <InlineMath math="\boldsymbol{u}_i" /> に対して完全に直交している。<br />
                    最後にこれを正規化する。
                </p>
                <BlockMath math="\boldsymbol{u}_m = \frac{1}{\| \boldsymbol{w}_m \|} \boldsymbol{w}_m" />
                <p>
                    この操作を <InlineMath math="k" /> 番目のベクトルまで有限回繰り返すことで、所望の正規直交系 <InlineMath math="\{ \boldsymbol{u}_1, \dots, \boldsymbol{u}_k \}" /> を完全に構成することができる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="remark" title="引き算の順序（直感的なイメージ）">
                <p>
                    グラム・シュミット法は、「彫刻」に似ています。<br />
                    元のベクトル <InlineMath math="\boldsymbol{v}_m" /> という「石のブロック」から、すでに作ってある <InlineMath math="\boldsymbol{u}_1" /> 成分という「不要なでっぱり」を内積で測定して削り落とし、次に <InlineMath math="\boldsymbol{u}_2" /> 成分を削り落とし…と、直交しない不純な成分をどんどん引き算（射影の減算）していきます。<br />
                    すべての不純物を削り落として残った「純粋に新しい（誰とも直交する）垂直な成分」である <InlineMath math="\boldsymbol{w}_m" /> を、最後に磨いて長さを <InlineMath math="1" /> に揃える（正規化）。これがこのアルゴリズムの本質です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>線形独立なベクトルの組があれば、そこから必ず同じ空間を張る正規直交系を構成できる（Theorem 9.2-1：グラム・シュミットの定理）。</li>
                    <li>手順は「元のベクトルから、既知の直交基底方向への直交射影成分をすべて引き算する（直交化）」→「残ったベクトルを自身の長さで割る（正規化）」の繰り返しである。</li>
                    <li>このアルゴリズムの正当性は、前章で証明した「射影定理」によって完全に保証されている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
