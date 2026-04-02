import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ApplicationsAndIndependenceOfAC() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                選択公理（AC）は強力で便利な道具ですが、直感に反する「奇妙な集合」を作り出す副作用も持っています。本節ではその代表例と、AC がZF公理系から論理的に独立しているという事実について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">選択公理の帰結（奇妙なパラドックス）</h2>

            <ContentBox
                type="theorem"
                title="Theorem 7.3-1 (バナッハ＝タルスキーのパラドックス / Banach-Tarski Paradox)"
            >
                <p>
                    選択公理（AC）を仮定すると、3次元空間 <InlineMath math="\mathbb{R}^3" /> 内の1つの単位球を<strong>有限個の互いに交わらない部分集合に分割</strong>し、それらを回転・平行移動（剛体運動）させて組み合わせるだけで、元の単位球と全く同じ大きさの<strong>2つの単位球</strong>を作り出すことができる。
                </p>
                <p>
                    つまり、体積 <InlineMath math="V" /> の球が、同じ操作で体積 <InlineMath math="2V" /> に増えてしまうような分割が存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    完全な証明は群論・幾何学・集合論にまたがるため概略に留める。
                </p>
                <p>
                    証明の核心は、3次元の回転群 <InlineMath math="SO(3)" /> の中に、「自由群 <InlineMath math="F_2" />（2つの生成元で生成される関係式のない群）」と同型な部分群が存在することである。
                    自由群 <InlineMath math="F_2" /> は「自分の半分が自分自身全体と全単射になる（パラドキシカルな分解を持つ）」という奇妙な代数的性質を持っている（ハウスドルフのパラドックス）。
                </p>
                <p>
                    この回転群の作用によって空間を同値類に分割する。ここで<strong>同値類から代表元を一つずつ選ぶ</strong>ために、不可避的に<strong>選択公理（AC）</strong>が使われる。
                    ACによって作られたこの代表元の集合は、通常の「体積（ルベーグ測度）」という概念を適用できない<strong>非可測集合（non-measurable set）</strong>となる。体積が定義できないバラバラの塵のような集合に分割されているため、組み立て直したときに「体積が2倍になる」という常識外れの結果が論理的に正当化されてしまうのである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 7.3-1 (非可測集合の存在)"
            >
                <p>
                    ルベーグ積分（測度論）において「長さ」や「体積」が定義できない集合の代表例が、ヴィタリ集合（Vitali set）である。
                    これも、実数を有理数の差で同値類に分け、各同値類から AC を用いて代表元を1つずつ抽出することで構成される。
                </p>
                <p>
                    「すべての実数の部分集合がルベーグ可測である（長さを測れる）」という美しい世界を構築しようとすると、必然的に選択公理と衝突（矛盾）することになる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">選択公理の独立性</h2>

            <p className="leading-relaxed">
                バナッハ＝タルスキーのパラドックスのように直感に反する結果を嫌って、「選択公理を拒否すればよいのでは？」と考える数学者もいました。では、AC はZF公理系から証明（または反証）できるのでしょうか。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 7.3-2 (選択公理の独立性)"
            >
                <p>
                    ZF公理系が無矛盾であるならば、それに AC を加えた「<InlineMath math="\mathrm{ZFC}" />」も、AC の否定を加えた「<InlineMath math="\mathrm{ZF} + \neg\mathrm{AC}" />」も、両方とも無矛盾である。
                </p>
                <p>
                    すなわち、<strong>選択公理は ZF公理系から独立（証明も反証も不可能）</strong>である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (歴史的背景と手法)"
            >
                <p>
                    この定理は、2人の天才数学者による半世紀を隔てた業績によって証明された。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <strong>ACが矛盾しないこと（Gödel, 1938）：</strong><br/>
                        クルト・ゲーデルは、ZFのモデルの中に「構成可能集合の宇宙（<InlineMath math="L" />）」というスリムな内側のモデル（部分構造）を構築した。この <InlineMath math="L" /> の中では、すべての集合の作られ方が厳密に統制されているため、AC が「真」になることを証明した。
                    </li>
                    <li>
                        <strong><InlineMath math="\neg\mathrm{AC}" /> が矛盾しないこと（Cohen, 1963）：</strong><br/>
                        ポール・コーエンは、「強制法（forcing）」という全く新しい技法を発明した。これは、既存のモデルに「新しい集合を人為的に後付けで付け加える（モデルを太らせる）」方法である。コーエンはこの技法を用いて、AC を意図的に「偽」にするような奇妙なモデルを構築することに成功した。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="独立性の意味と数学的信念"
            >
                <p>
                    「AC が独立である」ということは、ユークリッド幾何学における「平行線公理」が独立であったことと同じ構造です。
                    平行線公理を認めるか否かでユークリッド幾何と非ユークリッド幾何に分かれたように、AC を認めるか否かは「数学のルールとしてどちらを採用するか」という選択の問題（信念の問題）になります。
                </p>
                <p>
                    現代の主流な数学（解析学、代数学、位相空間論など）は、極大イデアルや基底の存在を必要とするため、満場一致で <strong>ZFC（ACを採用した体系）</strong> を基礎としています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>選択公理（AC）は、体積が倍増する<strong>バナッハ＝タルスキーのパラドックス</strong>や、体積を測れない<strong>非可測集合</strong>など、直感に反する奇妙な存在を証明してしまう力がある。</li>
                    <li>しかし、AC は ZF 公理系からは証明も反証もできない（<strong>独立している</strong>）。</li>
                    <li>独立性の証明は、ゲーデルの「構成可能集合」とコーエンの「強制法（forcing）」という、集合論の2大技法によって成し遂げられた。</li>
                </ul>
            </ContentBox>
        </section>
    );
}