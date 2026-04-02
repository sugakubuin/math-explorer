import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuumHypothesis() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                自然数の大きさは <InlineMath math="\aleph_0" /> でした。実数（連続体）の大きさはべき集合の濃度 <InlineMath math="2^{\aleph_0}" /> です。では、この <InlineMath math="2^{\aleph_0}" /> は、アレフ数のカタログ <InlineMath math="\aleph_1, \aleph_2, \ldots" /> のうちの<strong>「何番目」</strong>なのでしょうか？
                この極めて自然な問いこそが、カントールを悩ませ、20世紀の論理学を牽引した最大の未解決問題「連続体仮説」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">連続体仮説の主張</h2>

            <ContentBox
                type="proposition"
                title="Proposition 8.4-1 (連続体仮説 / Continuum Hypothesis, CH)"
            >
                <p>
                    <strong>連続体仮説（CH）：</strong> 実数の基数 <InlineMath math="2^{\aleph_0}" /> は、可算無限 <InlineMath math="\aleph_0" /> の「次に大きい基数」である <InlineMath math="\aleph_1" /> に等しい。
                    <BlockMath math="2^{\aleph_0} = \aleph_1" />
                </p>
                <p>
                    言い換えると、「自然数より大きく、実数より小さい濃度を持つ集合は存在しない」という主張である。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 8.4-2 (一般連続体仮説 / Generalized Continuum Hypothesis, GCH)"
            >
                <p>
                    CH をすべての無限基数に対して一般化したもの。任意の順序数 <InlineMath math="\alpha" /> に対して、
                    <BlockMath math="2^{\aleph_\alpha} = \aleph_{\alpha+1}" />
                    が成り立つとする仮説（つまり、べき集合を取る操作は、必ずちょうど「1つ次」のアレフ数になる）。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.4-1 (問題の歴史的背景)"
            >
                <p>
                    カントールは1878年にこの仮説を提唱し、生涯をかけて証明しようとしましたが叶いませんでした。
                    ダフィット・ヒルベルトは1900年の国際数学者会議で発表した有名な「23の未解決問題」において、この「連続体仮説の証明」を堂々の第1問題として掲げました。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">連続体仮説の独立性</h2>

            <p className="leading-relaxed">
                ヒルベルトの提起から半世紀以上を経て、この問題は「証明も反証もできない」という最も劇的な形で決着を見ます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 8.4-1 (連続体仮説の独立性)"
            >
                <p>
                    ZFC 公理系が無矛盾であるならば、それに CH を加えた「<InlineMath math="\mathrm{ZFC} + \mathrm{CH}" />」も、CH の否定を加えた「<InlineMath math="\mathrm{ZFC} + \neg\mathrm{CH}" />」も、両方とも無矛盾である。
                </p>
                <p>
                    すなわち、<strong>連続体仮説は ZFC 公理系から完全に独立している</strong>。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (歴史的背景と手法)"
            >
                <p>
                    証明は、選択公理の独立性（Theorem 7.3-2）と全く同じ2つの偉業によって構成される。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <strong>CH が矛盾しないこと（Gödel, 1938）：</strong><br/>
                        ゲーデルが構築した「構成可能集合の宇宙 <InlineMath math="L" />」の内部では、実数の作られ方が極めて制限されているため、「自然数と実数の間」に余計な集合が入り込む余地がない。その結果、<InlineMath math="L" /> の中では GCH（および CH）が真になることが証明された。
                    </li>
                    <li>
                        <strong><InlineMath math="\neg\mathrm{CH}" /> が矛盾しないこと（Cohen, 1963）：</strong><br/>
                        ポール・コーエンの「強制法（forcing）」を用いて、ZFC の可算モデルの中に「新しい実数」を大量に（例えば <InlineMath math="\aleph_2" /> 個）付け加える。この操作により、元からあった <InlineMath math="\aleph_1" /> とは別に、実数のサイズが <InlineMath math="2^{\aleph_0} = \aleph_2" />（あるいは <InlineMath math="\aleph_3" /> やもっと大きな数）になるような新しいモデルを構築した。これにより <InlineMath math="\neg\mathrm{CH}" /> が成立する世界が作られた。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="強制法（Forcing）の概観"
            >
                <p>
                    コーエンが発明した強制法は、20世紀論理学における最大の技術的ブレイクスルーです。
                    そのアイデアは、モデルの中に最初から完成した「新しい実数」を用意するのではなく、「少しずつ情報を確定させていく『条件（forcing condition）』の集合」を考え、その条件の極限としてモデルの外側に新しい要素を作り出すというものです（位相空間論やジェネリック・フィルタの概念が使われます）。
                </p>
                <p>
                    この手法によって、ZFC を満たしたまま「実数のサイズ」だけを自由にコントロールできるようになり、連続体仮説のみならず無数の数学的命題の独立性が証明されるようになりました。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.4-2 (独立性の意味——私たちはどうすべきか？)"
            >
                <p>
                    CH が証明不能であるということは、<strong>「実数のサイズが <InlineMath math="\aleph_1" /> なのか <InlineMath math="\aleph_2" /> なのかは、現在の数学のルール（ZFC）では決まっていない」</strong>ということを意味します。
                </p>
                <p>
                    選択公理（AC）のときは、それがないと現代数学が成り立たないため、全員が AC を認める（ZFC を使う）ことで合意しました。
                    しかし CH については、「CH を仮定しないと進めない数学」も「CH の否定を仮定した方が面白い数学」も存在するため、数学界全体で「どちらを標準の公理にするか」という合意には至っていません。
                </p>
                <p>
                    現在でも集合論の最先端では、「ZFC に代わる、CHの真偽を決定できるような『より強い、かつ自然な新しい公理』はないか？」という探求（ヒューディンのプログラムなど）が続けられています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>連続体仮説（CH）：</strong> 実数の基数 <InlineMath math="2^{\aleph_0}" /> は、可算無限のすぐ次の基数 <InlineMath math="\aleph_1" /> であるという主張。</li>
                    <li>ゲーデルの構成可能集合とコーエンの強制法により、CH は ZFC 公理系から<strong>証明も反証もできない（独立している）</strong>ことが証明された。</li>
                    <li>この結果は、私たちが用いている「集合論」の枠組みが、実数という身近な対象の「サイズ」すら決定できない限界を持っていることを示し、数学基礎論の最大の成果となった。</li>
                </ul>
            </ContentBox>
        </section>
    );
}