import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HilbertSpacesDefinitionAndExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ノルム空間に完備性を要求したものがバナッハ空間でした。同様に、内積空間に完備性の概念を適用することで、関数解析学で最も理想的な舞台であるヒルベルト空間が得られます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヒルベルト空間の定義</h2>

            <p>
                ヒルベルト空間は、内積の持つ幾何学的な直観性と、極限操作を可能にする完備性を兼ね備えた空間です。
            </p>

            <ContentBox type="definition" title="Definition 6.3-1 (ヒルベルト空間)">
                <p>
                    内積から誘導される距離（ノルム）に関して完備であるような内積空間 <InlineMath math="H" /> を、<b>ヒルベルト空間（Hilbert space）</b>とよぶ。<br/>
                    すなわち、ヒルベルト空間とは、内積が定義されたバナッハ空間のことである。
                </p>
            </ContentBox>

            <p>
                ヒルベルト空間の具体例をいくつか確認しましょう。
            </p>

            <ContentBox type="example" title="Example 6.3-1">
                <p>
                    数列空間 <InlineMath math="\ell^2" /> はヒルベルト空間である。
                </p>
                <p>
                    §2.2 で <InlineMath math="1 \leq p \leq \infty" /> に対して <InlineMath math="\ell^p" /> が完備なノルム空間（バナッハ空間）であることを示したが、その中で <InlineMath math="p=2" /> の場合は内積 <InlineMath math="\langle x, y \rangle = \sum x_n \overline{y_n}" /> によってノルムが誘導されるため、<InlineMath math="\ell^2" /> は特にヒルベルト空間となる。
                </p>
            </ContentBox>

            <p>
                可積分関数の空間も、適切なルベーグ積分を用いることでヒルベルト空間を構築できます。
            </p>

            <ContentBox type="example" title="Example 6.3-2">
                <p>
                    関数空間 <InlineMath math="L^2[a, b]" /> はヒルベルト空間である。
                </p>
                <p>
                    リース-フィッシャーの定理（§2.2）により、<InlineMath math="1 \leq p \leq \infty" /> において <InlineMath math="L^p" /> 空間はバナッハ空間であることが保証されている。内積 <InlineMath math="\langle f, g \rangle = \int_a^b f(x)\overline{g(x)}\,dx" /> を持つ <InlineMath math="L^2[a, b]" /> は完備であるため、ヒルベルト空間の条件を満たす。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヒルベルト空間でないノルム空間</h2>

            <p>
                完備な空間（バナッハ空間）であっても、内積構造を許容しない空間はヒルベルト空間とは呼ばれません。
            </p>

            <ContentBox type="example" title="Example 6.3-3">
                <p>
                    ルベーグ可積分関数の空間 <InlineMath math="L^1[0,1]" /> はバナッハ空間であるが、ヒルベルト空間ではない。
                </p>
                <p>
                    <InlineMath math="L^1[0,1]" /> の完備性はリース-フィッシャーの定理から従う。しかし、ノルム <InlineMath math="\|f\|_1 = \int_0^1 |f(x)|\,dx" /> が内積から誘導されるかを確認するために平行四辺形法則を適用すると、前節の Example 6.2-3 における <InlineMath math="\ell^1" /> と同様に、一般に平行四辺形法則を満たさない。<br/>
                    したがって、ヨルダン-フォン・ノイマンの定理（Theorem 6.2-3）により、<InlineMath math="L^1[0,1]" /> には元のノルムを誘導するような内積が存在しない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="解析学における完備性の重要さ">
                <p>
                    バナッハ空間のなかでも、ヒルベルト空間は最も「幾何学的に良い」性質を持った空間である。ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> の「長さを測れる」「角度（直交性）を測れる」「極限が空間内で閉じる」という利点を、そのまま無限次元に引き継いでいるからである。今後の章で見るように、直交性の概念が存在することで、直交射影やフーリエ展開など、ヒルベルト空間特有の強力な道具が利用可能となる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヒルベルト空間とは、完備な内積空間のことである。</li>
                    <li><InlineMath math="\ell^2" /> や <InlineMath math="L^2" /> などが無限次元ヒルベルト空間の代表例である。</li>
                    <li><InlineMath math="L^1" /> 空間などはバナッハ空間であるが、内積の構造を持たないためヒルベルト空間ではない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
