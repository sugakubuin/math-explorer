import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PropertiesOfRiemannIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、連続関数がリーマン可積分であることが証明されました。ここからは、定積分が持つ基本的で強力な代数的・順序的性質を、積分の定義（上和・下和の極限）に立ち返って厳密に確認していきます。
                これらの性質は、複雑な関数の積分を計算したり、理論的な不等式評価を行ったりする上で、最も基礎となる「積分の定石」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分の線形性</h2>

            <p>
                「和の積分は積分の和」「定数倍の積分は積分の定数倍」という、微積分を扱う上で最も頻繁に用いられる性質です。有限の足し算 <InlineMath math="\Sigma" /> で成り立つ性質が、無限の足し算 <InlineMath math="\int" /> でもそのまま保存されることを意味します。
            </p>

            <ContentBox type="theorem" title="Proposition 9.3-1 (リーマン積分の線形性)">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上で関数 <InlineMath math="f, g" /> がともにリーマン可積分であり、<InlineMath math="c" /> を任意の実数定数とする。
                    このとき、関数 <InlineMath math="f + g" /> および <InlineMath math="cf" /> も <InlineMath math="[a, b]" /> 上でリーマン可積分であり、次が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="\int_a^b \{f(x) + g(x)\} dx = \int_a^b f(x) dx + \int_a^b g(x) dx" /></li>
                    <li><InlineMath math="\int_a^b cf(x) dx = c \int_a^b f(x) dx" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof (和の線形性の略証)">
                <p>
                    任意の分割 <InlineMath math="\Delta" /> に対し、各小区間 <InlineMath math="I_i" /> における関数の上限・下限を考える。<br />
                    上限（<InlineMath math="\sup" />）および下限（<InlineMath math="\inf" />）の基本的な性質として、2つの関数の和の最大値はそれぞれの最大値の和「以下」になり、最小値はそれぞれの最小値の和「以上」になる。
                </p>
                <BlockMath math="\inf_{I_i} f + \inf_{I_i} g \leq \inf_{I_i} (f+g) \leq \sup_{I_i} (f+g) \leq \sup_{I_i} f + \sup_{I_i} g" />
                <p className="mt-4">
                    これらに区間の幅 <InlineMath math="\Delta x_i" /> を掛けて足し合わせることで、和の関数のダルブー和（下和・上和）が、それぞれのダルブー和によって次のように挟まれることが分かる。
                </p>
                <BlockMath math="\begin{aligned} L(f, \Delta) + L(g, \Delta) &\leq L(f+g, \Delta) \\ &\leq U(f+g, \Delta) \\ &\leq U(f, \Delta) + U(g, \Delta) \end{aligned}" />
                <p className="mt-4">
                    <InlineMath math="f, g" /> は可積分であるから、分割を極限まで細かくすると、両端はそれぞれ <InlineMath math="\int f + \int g" /> に収束する。
                    はさみうちの原理より、中央の <InlineMath math="L(f+g, \Delta)" /> と <InlineMath math="U(f+g, \Delta)" /> も同じ極限値 <InlineMath math="\int f + \int g" /> に収束せざるを得ない。<br />
                    上和と下和の極限が一致したため、<InlineMath math="f+g" /> の可積分性と同時に線形性が証明された。定数倍についても同様である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分の単調性と区間加法性</h2>

            <p>
                「常により大きい関数の面積はより大きくなる（単調性）」「面積は分割して足し合わせることができる（区間加法性）」という、面積に対する自然な直感も関数の積分として一般化されます。
            </p>

            <ContentBox type="theorem" title="Proposition 9.3-2 (リーマン積分の単調性)">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上で関数 <InlineMath math="f, g" /> がともにリーマン可積分であり、すべての <InlineMath math="x \in [a, b]" /> に対して <InlineMath math="f(x) \leq g(x)" /> が成り立つとする。このとき次が成り立つ。
                </p>
                <BlockMath math="\int_a^b f(x) dx \leq \int_a^b g(x) dx" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関数の大小関係が保たれるため、任意の分割 <InlineMath math="\Delta" /> の各小区間における上限・下限についても不等式が保たれる。したがって、下和 <InlineMath math="L(f, \Delta) \leq L(g, \Delta)" /> および上和 <InlineMath math="U(f, \Delta) \leq U(g, \Delta)" /> が常に成り立つ。
                </p>
                <p className="mt-4">
                    分割を細かく極限 <InlineMath math="|\Delta| \to 0" /> に飛ばす操作は不等式の向きを保存するため、その極限である積分値においても <InlineMath math="\int_a^b f(x) dx \leq \int_a^b g(x) dx" /> が従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Proposition 9.3-3 (積分区間の加法性)">
                <p>
                    関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> でリーマン可積分であり、<InlineMath math="a < c < b" /> とする。
                    このとき、<InlineMath math="f" /> は区間 <InlineMath math="[a, c]" /> および <InlineMath math="[c, b]" /> 上でもリーマン可積分であり、次が成り立つ。
                </p>
                <BlockMath math="\int_a^b f(x) dx = \int_a^c f(x) dx + \int_c^b f(x) dx" />
            </ContentBox>

            <p>
                ※ これは、<InlineMath math="[a, b]" /> の分割 <InlineMath math="\Delta" /> を考える際に、必ず点 <InlineMath math="c" /> を分点として含むような細分をとることで、ダルブー和が左側半分と右側半分に完全に分断されることから証明されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分の絶対値不等式（三角不等式の連続化）</h2>

            <p>
                解析学におけるあらゆる（誤差の）評価式や、一様収束での積分順序交換（定理 7.3-2）でも用いられた極めて重要な不等式です。「和の絶対値は絶対値の和以下である（<InlineMath math="|x+y| \leq |x| + |y|" />）」という三角不等式を、無限和である積分へと拡張したものです。
            </p>

            <ContentBox type="theorem" title="Proposition 9.3-4 (積分の絶対値不等式)">
                <p>
                    関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上でリーマン可積分であるならば、その絶対値関数 <InlineMath math="|f|" /> （すなわち <InlineMath math="|f|(x) = |f(x)|" />）もまた <InlineMath math="[a, b]" /> 上でリーマン可積分であり、次の不等式を満たす。
                </p>
                <BlockMath math="\left| \int_a^b f(x) dx \right| \leq \int_a^b |f(x)| dx" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="|f|" /> が可積分であることを認める（ダルブーの条件から証明可能）。
                </p>
                <p className="mt-4">
                    実数の絶対値の基本的な性質から、すべての <InlineMath math="x \in [a, b]" /> において
                </p>
                <BlockMath math="-|f(x)| \leq f(x) \leq |f(x)|" />
                <p>
                    が成り立つ。
                </p>
                <p className="mt-4">
                    各関数について区間 <InlineMath math="[a, b]" /> で定積分を行う。先ほど証明した積分の単調性（Proposition 9.3-2）および線形性により、不等式の向きと符号はそのまま保存され、
                </p>
                <BlockMath math="-\int_a^b |f(x)| dx \leq \int_a^b f(x) dx \leq \int_a^b |f(x)| dx" />
                <p>
                    となる。（左辺は線形性より <InlineMath math="\int (-|f(x)|) = -\int |f(x)|" /> である。）
                </p>
                <p className="mt-4">
                    この不等式は、実数における同値関係 <InlineMath math="-A \leq X \leq A \iff |X| \leq A" /> の形をしているため、これを書き直すことで直ちに
                </p>
                <BlockMath math="\left| \int_a^b f(x) dx \right| \leq \int_a^b |f(x)| dx" />
                <p>
                    が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>リーマン積分は<strong>線形性</strong>（和と定数倍の保存）および<strong>単調性</strong>（関数の大小関係の保存）を満たす。</li>
                    <li>積分区間は中の任意の点で<strong>加法的に分割</strong>できる。</li>
                    <li>積分の絶対値は、絶対値の積分の値を超えることはない（<strong>絶対値不等式</strong>）。これらはすべて上和・下和の性質として厳密に裏付けられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
