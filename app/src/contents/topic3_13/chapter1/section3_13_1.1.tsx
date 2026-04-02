import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RegularCurvesAndArcLength() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                微分幾何学の第一歩として、3次元空間内の「曲線」について学びます。曲線の幾何学的な性質（曲がり具合やねじれ具合）を解析するためには、曲線が滑らかに微分可能であり、かつ途中で止まったり逆走したりしない「正則曲線」であることが重要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">正則曲線の定義</h2>

            <p className="leading-relaxed">
                まず、空間内の曲線をパラメータを用いて数学的に定義し、それが「滑らか」であるための条件を定式化します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-1 (正則曲線)"
            >
                <p>
                    開区間 <InlineMath math="I \subset \mathbb{R}" /> から3次元ユークリッド空間 <InlineMath math="\mathbb{R}^3" /> への <InlineMath math="C^\infty" /> 写像（無限回微分可能な写像）<InlineMath math="\alpha : I \to \mathbb{R}^3" /> であって、すべての時刻 <InlineMath math="t \in I" /> に対して
                    <BlockMath math="\alpha'(t) \neq \mathbf{0}" />
                    を満たすものを<strong>正則曲線（regular curve）</strong>という。
                </p>
                <p>
                    このとき、微係数のベクトル <InlineMath math="\alpha'(t) = (\alpha_1'(t), \alpha_2'(t), \alpha_3'(t))" /> を、曲線 <InlineMath math="\alpha" /> の時刻 <InlineMath math="t" /> における<strong>接ベクトル（tangent vector）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                接ベクトルが零ベクトルにならないということは、曲線が途中で「停止」せず、常にある方向へ進み続けていることを意味します。これにより、曲線に尖った点（カスプ）ができることを防げます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-2 (曲線の速さと速度)"
            >
                <p>
                    正則曲線 <InlineMath math="\alpha(t)" /> の接ベクトル <InlineMath math="\alpha'(t)" /> を<strong>速度ベクトル（velocity vector）</strong>とも呼ぶ。
                </p>
                <p>
                    そのノルム（大きさ）<InlineMath math="|\alpha'(t)|" /> を、曲線が時刻 <InlineMath math="t" /> に進む<strong>速さ（speed）</strong>という。正則性の条件は、速さが常に正（<InlineMath math="|\alpha'(t)| > 0" />）であることを意味している。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な正則曲線の例を見てみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 1.1-1 (円のパラメータ表示)"
            >
                <p>
                    <InlineMath math="xy" /> 平面上の半径 <InlineMath math="r > 0" /> の円周は、次のようにパラメータ表示できる。
                    <BlockMath math="\alpha(t) = (r\cos t, r\sin t, 0)" />
                </p>
                <p>
                    接ベクトルを計算すると、
                    <BlockMath math="\alpha'(t) = (-r\sin t, r\cos t, 0)" />
                    となる。その速さは、
                    <BlockMath math="|\alpha'(t)| = \sqrt{(-r\sin t)^2 + (r\cos t)^2 + 0^2} = r" />
                    であり、常に <InlineMath math="r > 0" /> を満たす。したがって、これは正則曲線である。このパラメータ表示は、点が円周上を一定の速さ <InlineMath math="r" /> で動く運動を表している。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.1-2 (螺旋のパラメータ表示)"
            >
                <p>
                    3次元空間内の螺旋（helix）は、定数 <InlineMath math="a > 0, b > 0" /> を用いて次のように表される。
                    <BlockMath math="\alpha(t) = (a\cos t, a\sin t, bt)" />
                </p>
                <p>
                    接ベクトルとその速さは、
                    <BlockMath math="\alpha'(t) = (-a\sin t, a\cos t, b)" />
                    <BlockMath math="|\alpha'(t)| = \sqrt{(-a\sin t)^2 + (a\cos t)^2 + b^2} = \sqrt{a^2 + b^2}" />
                    となる。常に <InlineMath math="\sqrt{a^2 + b^2} > 0" /> であるため、螺旋も正則曲線である。
                    （なお、<InlineMath math="b=0" /> のときは円となる。）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">弧長パラメータへの再パラメータ化</h2>

            <p className="leading-relaxed">
                曲線を表すパラメータの選び方は無数にありますが、幾何学的な性質を調べる上で最も自然で扱いやすいのが、曲線に沿って測った長さ（弧長）をパラメータとする方法です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-3 (弧長関数)"
            >
                <p>
                    正則曲線 <InlineMath math="\alpha : I \to \mathbb{R}^3" /> と、基準となる時刻 <InlineMath math="t_0 \in I" /> に対して、時刻 <InlineMath math="t" /> までの曲線に沿った長さを表す関数 <InlineMath math="s(t)" /> を次のように定義する。
                    <BlockMath math="s(t) = \int_{t_0}^t |\alpha'(u)|\,du" />
                    これを<strong>弧長関数（arc length function）</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                正則曲線の条件により、常に <InlineMath math="|\alpha'(t)| > 0" /> であるため、弧長関数は単調に増加します。この性質を利用すると、時刻 <InlineMath math="t" /> の代わりに弧長 <InlineMath math="s" /> を用いて曲線を表し直すことができます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 1.1-1 (弧長パラメータへの再パラメータ化)"
            >
                <p>
                    正則曲線 <InlineMath math="\alpha(t)" /> は、弧長 <InlineMath math="s" /> をパラメータとして再パラメータ化することができる。
                    すなわち、ある曲線 <InlineMath math="\beta(s) = \alpha(t(s))" /> が構成でき、その接ベクトルは常に単位ベクトルとなる（速さが常に <InlineMath math="1" /> である）。
                    <BlockMath math="|\beta'(s)| = 1" />
                </p>
                <p>
                    このように構成された <InlineMath math="\beta(s)" /> を、<strong>弧長パラメータ付き曲線（curve parametrized by arc length）</strong>という。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    微積分学の基本定理より、弧長関数 <InlineMath math="s(t)" /> の導関数は
                    <BlockMath math="\frac{ds}{dt} = |\alpha'(t)| > 0" />
                    である。導関数が常に正であるため、<InlineMath math="s(t)" /> は狭義単調増加関数であり、逆関数 <InlineMath math="t(s)" /> が存在する。
                </p>
                <p>
                    逆関数の微分法により、
                    <BlockMath math="\frac{dt}{ds} = \frac{1}{ds/dt} = \frac{1}{|\alpha'(t)|}" />
                    となる。
                </p>
                <p>
                    新たな曲線 <InlineMath math="\beta(s) = \alpha(t(s))" /> を <InlineMath math="s" /> で微分する。連鎖律より、
                    <BlockMath math="\beta'(s) = \frac{d}{ds} \alpha(t(s)) = \alpha'(t(s)) \frac{dt}{ds} = \frac{\alpha'(t(s))}{|\alpha'(t(s))|}" />
                    となる。よって、そのノルムを取ると、
                    <BlockMath math="|\beta'(s)| = \left| \frac{\alpha'(t(s))}{|\alpha'(t(s))|} \right| = \frac{|\alpha'(t(s))|}{|\alpha'(t(s))|} = 1" />
                    となり、常に速さが <InlineMath math="1" /> になることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的に螺旋を弧長パラメータで書き直してみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 1.1-3 (螺旋の弧長パラメータ)"
            >
                <p>
                    Example 1.1-2 で見た螺旋 <InlineMath math="\alpha(t) = (a\cos t, a\sin t, bt)" /> の速さは一定で、<InlineMath math="c = \sqrt{a^2 + b^2}" /> であった。
                </p>
                <p>
                    <InlineMath math="t_0 = 0" /> として弧長関数を計算すると、
                    <BlockMath math="s(t) = \int_0^t c \,du = ct" />
                    となる。この逆関数は <InlineMath math="t = s/c" /> である。
                </p>
                <p>
                    これを元の式に代入すると、弧長パラメータ付きの螺旋が得られる。
                    <BlockMath math="\beta(s) = \alpha(s/c) = \left( a\cos\left(\frac{s}{c}\right), a\sin\left(\frac{s}{c}\right), b\left(\frac{s}{c}\right) \right)" />
                </p>
                <p>
                    実際に <InlineMath math="\beta'(s)" /> を計算すると、
                    <BlockMath math="\beta'(s) = \left( -\frac{a}{c}\sin\left(\frac{s}{c}\right), \frac{a}{c}\cos\left(\frac{s}{c}\right), \frac{b}{c} \right)" />
                    であり、その速さは <InlineMath math="\sqrt{(-a/c)^2 + (a/c)^2 + (b/c)^2} = \sqrt{(a^2+b^2)/c^2} = 1" /> となることが確認できる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="弧長パラメータの重要性"
            >
                <p>
                    曲線の形（どれくらい曲がっているかなど）は、点が「どのような速さでそこを通るか（パラメータの取り方）」には依存しません。
                </p>
                <p>
                    弧長パラメータ <InlineMath math="s" /> で表された曲線は、常に速さ1（単位スピード）で進みます。これにより、接ベクトル <InlineMath math="\beta'(s)" /> が常に「単位ベクトル」になるという非常にありがたい性質が得られます。
                </p>
                <p>
                    以後のセクションでは、表記を簡単にするため、特に断らない限り<strong>曲線はすべて弧長パラメータ <InlineMath math="s" /> で表されている</strong>ものとし、曲線を単に <InlineMath math="\alpha(s)" /> と書くことにします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>接ベクトルが常に零ベクトルにならない（<InlineMath math="\alpha'(t) \neq \mathbf{0}" />）曲線を正則曲線という。</li>
                    <li>正則曲線の軌跡に沿った長さを弧長と呼び、これを新たなパラメータとして曲線を表し直すことができる。</li>
                    <li>弧長パラメータで表された曲線の接ベクトルは、常に単位ベクトル（速さが1）となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}