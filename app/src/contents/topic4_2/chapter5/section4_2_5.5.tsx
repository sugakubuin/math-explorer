import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UniformizationTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析IIのクライマックスを飾るのが「一様化定理（Uniformization Theorem）」です。これは、任意の多価関数を通じて生まれるどんなに複雑に捻じれ、どんなに広大に広がったリーマン面であろうと、穴さえ空いていなければ（単連結であれば）、たった「3種類の標準的な形」のどれか1つに必ず整えられる、という途方もない分類定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様化定理の主張</h2>

            <p>
                定理の主張自体は非常にシンプルであり、第4章で学んだ「リーマンの写像定理」を最大限まで広げた一般化となっています。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.5-1 (一様化定理 Uniformization Theorem)</span>}>
                <p>
                    <InlineMath math="S" /> を任意の単連結（穴やハンドルのない）なリーマン面とする。
                    このとき、<InlineMath math="S" /> は以下の3つの特別な空間のうち、<b>どれか一つに必ず双正則同値</b>（正則写像によって1対1に重ね合わせ可能）である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><b><InlineMath math="\hat{\mathbb{C}}" /> （リーマン球面）</b> : 球面幾何、曲率 <InlineMath math="+1" />（楕円型）</li>
                    <li><b><InlineMath math="\mathbb{C}" /> （複素平面）</b> : ユークリッド幾何、曲率 <InlineMath math="0" />（放物型）</li>
                    <li><b><InlineMath math="\mathbb{D}" /> （単位円板）</b> : 双曲幾何、ポアンカレ計量 曲率 <InlineMath math="-1" />（双曲型）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    単連結なリーマン面 <InlineMath math="S" /> の分類は、まずそれがコンパクトであるか否かによって2つに大別される。
                </p>
                <p>
                    <b>【Step 1】 <InlineMath math="S" /> がコンパクトな場合（楕円型）</b><br />
                    コンパクトで単連結なリーマン面は、位相的には球面 <InlineMath math="S^2" /> と同相である。このような面上には、少なくとも1つの点が極となるような有理型関数が存在する（これはリーマン・ロッホの定理、またはディリクレ原理から示される）。
                    極を1つだけ持ち、その位数が1であるような有理型関数 <InlineMath math="f : S \to \hat{\mathbb{C}}" /> を構成すれば、<InlineMath math="f" /> 自体が全単射な正則写像となるため、<InlineMath math="S" /> はリーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> と双正則同値であることが導かれる。
                </p>
                <p>
                    <b>【Step 2】 <InlineMath math="S" /> が非コンパクトな場合</b><br />
                    問題は非コンパクトの場合である。一点 <InlineMath math="p_0 \in S" /> を取り、<InlineMath math="p_0" /> に極を持つような<b>グリーン関数 <InlineMath math="g(p, p_0)" /></b> （ <InlineMath math="p \neq p_0" /> で調和関数であり、<InlineMath math="p \to p_0" /> において <InlineMath math="-\log|z|" /> の特異性を持つ劣調和関数）が <InlineMath math="S" /> 全体にわたって存在するかどうかを考える。
                    境界が存在しない非コンパクトな空間では、この関数が存在する場合（双曲型）と、発散して存在しない場合（放物型）に厳密に二分される。
                </p>
                <p>
                    <b>【Step 2-a】 グリーン関数が存在しない場合（放物型）</b><br />
                    このとき <InlineMath math="S" /> 上には有界な劣調和関数が定数しか存在しない（Liouvilleの定理を一般化した性質を持つ）。ペロンの方法や調和関数の極限操作を用いることで、<InlineMath math="S" /> から複素平面 <InlineMath math="\mathbb{C}" /> への全単射な等角写像（正則関数）を構築できる。したがって、この場合は <InlineMath math="\mathbb{C}" /> と双正則同値になる。
                </p>
                <p>
                    <b>【Step 2-b】 グリーン関数が存在する場合（双曲型）</b><br />
                    グリーン関数 <InlineMath math="g(p, p_0)" /> が存在する場合、その共役調和関数 <InlineMath math="h(p, p_0)" /> を考えることで、多価の正則関数 <InlineMath math="\Phi(p) = \exp(-(g + ih))" /> を定義できる。
                    <InlineMath math="S" /> は単連結であるため、この関数は一価の解析関数として確定する。グリーン関数の性質（<InlineMath math="g > 0" />）により <InlineMath math="|\Phi(p)| = \exp(-g) < 1" /> となるため、<InlineMath math="\Phi" /> は <InlineMath math="S" /> から単位円板 <InlineMath math="\mathbb{D}" /> への正則写像となる。
                    さらに、<InlineMath math="\Phi" /> が全単射であることを、リーマンの写像定理の証明と同様に最大値の原理を用いて示すことができ、結果として <InlineMath math="S" /> は <InlineMath math="\mathbb{D}" /> と双正則同値になる。
                </p>
                <p>
                    以上より、任意の単連結リーマン面は <InlineMath math="\hat{\mathbb{C}}" />、<InlineMath math="\mathbb{C}" />、<InlineMath math="\mathbb{D}" /> のいずれか1つに一致することが証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.5-1 (3つの代表例)">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\hat{\mathbb{C}}" /> (楕円型): 分枝を持たない最も閉じた世界です。<InlineMath math="z" /> や <InlineMath math="1/z" /> のふるさとです。</li>
                    <li><InlineMath math="\mathbb{C}" /> (放物型): <InlineMath math="\log z" /> の普遍被覆である無限のらせん階段（§3.2）は、広げるとこのタイプになります。無限に展開しても、実は普通の複素平面と同一の解析的広がりしか持っていません。</li>
                    <li><InlineMath math="\mathbb{D}" /> (双曲型): 最も多くのリーマン面がこれに分類されます。無限の広がりを持ちつつも、特有の「空間の歪み（境界に向かって距離が伸びる性質）」を持つため、円板にスッポリ収納できるタイプの空間群です。上半平面 <InlineMath math="\mathbb{H}" /> も無論ここに含まれます。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各場合の特徴づけと帰結</h2>

            <p>
                それぞれの場合がどのように数学的制約（定理）によって切り分けられるのか確認します。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 5.5-1 (コンパクトな場合)</span>}>
                <p>
                    単連結かつコンパクトなリーマン面は <InlineMath math="\hat{\mathbb{C}}" /> （リーマン球面）に双正則同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    コンパクト性より、その上の有理型関数は必ず極（発散点）を持つ。適切な有理型関数 <InlineMath math="f" /> を選び出すことができれば、<InlineMath math="f" /> は <InlineMath math="S" /> から <InlineMath math="\hat{\mathbb{C}}" /> への写像とみなせる。単連結性が効いて、この写像のシーツの重なりが一枚（次数1）であることを証明でき、すなわち全単射な双正則写像が構成される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title={<span>Proposition 5.5-2 (<InlineMath math="\mathbb{C}" /> と <InlineMath math="\mathbb{D}" /> は絶対に相容れない)</span>}>
                <p>
                    複素平面 <InlineMath math="\mathbb{C}" /> と単位円板 <InlineMath math="\mathbb{D}" /> は、位相的には全く同じ（同相、ゴム膜のように変形可能）であるが、複素解析の舞台としては絶対に双正則同値にはならない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮に <InlineMath math="\mathbb{C}" /> から <InlineMath math="\mathbb{D}" /> への双正則（すなわち全単射で逆も正則な）写像 <InlineMath math="f" /> が存在したとする。
                    <InlineMath math="f" /> の値域は <InlineMath math="\mathbb{D}" /> であるから、すべての <InlineMath math="z \in \mathbb{C}" /> について <InlineMath math="|f(z)| < 1" /> となる。
                </p>
                <p>
                    これは「全平面で定義された正則な整関数であり、かつ有界である」ことを意味する。リューヴィルの定理より、そのような関数 <InlineMath math="f" /> は必ず定数関数となる。
                </p>
                <p>
                    定数関数であるならば全単射（1対1写像）であるという仮定に明らかに矛盾する。よって同値ではない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.5-2 (任意のリーマン面への応用と普遍被覆)">
                <p>
                    一様化定理の真の恐ろしさは「単連結でない複雑な曲面（例えば穴が複数あるドーナツなど）」への応用にあります。
                    「穴があっても、トポロジーの手法でシーツで被って（普遍被覆空間）しまえば単連結になる（§2.2）」という教えを思い出してください。
                </p>
                <p>
                    つまり、<b>任意のリーマン面 <InlineMath math="X" /></b> の普遍被覆 <InlineMath math="\tilde{X}" /> を作ると、それは単連結リーマン面となるため、一様化定理により必ず <InlineMath math="\hat{\mathbb{C}}, \mathbb{C}, \mathbb{D}" /> のどれかに帰着します。
                    リーマン面のトポロジー（種数 <InlineMath math="g" />）と照らし合わせると、次のように完璧に分類されます：
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="g = 0" />（球面）: 普遍被覆は <InlineMath math="\hat{\mathbb{C}}" /></li>
                    <li><InlineMath math="g = 1" />（トーラス）: 普遍被覆は <InlineMath math="\mathbb{C}" />（複素平面）。平面上の格子点で商を取ったもの（第8章や楕円関数論へ）</li>
                    <li><InlineMath math="g \geq 2" />（穴が2つ以上）: 普遍被覆は<b>例外なくすべて <InlineMath math="\mathbb{D}" /> </b>。</li>
                </ul>
                <p>
                    つまり、我々の知る複雑な多様体の「素地」のほとんどは、双曲幾何に支配された単位円板 <InlineMath math="\mathbb{D}" /> で構成されているのです。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="三位一体の幾何学">
                <p>
                    一様化定理は、解析学（正則関数）、トポロジー（単連結）、幾何学（一定曲率をもつ計量）という数学の全く異なる3つの分野が、リーマン面という舞台の上で一つの壮大な真理として融合していることを示しています。これは19世紀から20世紀に至る複素解析の理論の一つの到達点と言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>一様化定理</b>：すべての単連結リーマン面は リーマン球面 <InlineMath math="\hat{\mathbb{C}}" />、平坦な複素平面 <InlineMath math="\mathbb{C}" />、あるいは双曲的な単位円板 <InlineMath math="\mathbb{D}" /> のいずれか1つに必ず整えられる。</li>
                    <li>コンパクトか否か、およびリューヴィルの定理に基づく「関数空間の広がり」の判定によりこれらは厳密に分離される。</li>
                    <li>一般のリーマン面も普遍被覆を取ることでこの3つの世界に還元され、特に種数2以上の複雑な曲面はすべて双曲計量を持つ <InlineMath math="\mathbb{D}" /> の世界から生まれている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
