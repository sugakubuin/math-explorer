import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_2_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 1で構成した「実数」は、コーシー列の極限の行き先を自らの世界の中に必ず持っているという「穴のない」空間でした。
                この章では、その「穴がない」という性質、すなわち<strong>完備性（Completeness）</strong>について、より扱いやすい形で定式化していきます。
                そのための準備として、まずは集合の「上限（Supremum）」や「下限（Infimum）」という非常に重要な概念を厳密に定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">上界・下界と有界性</h2>

            <p>
                ある実数の集合が「どこまでも果てしなく続く」のか、それとも「ある壁の範囲内に収まっている」のかを数学的に表現します。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (上界・下界・有界)">
                <p>
                    <InlineMath math="A" /> を実数全体 <InlineMath math="\mathbb{R}" /> の空でない部分集合とする（<InlineMath math="A \subseteq \mathbb{R}, A \neq \emptyset" />）。
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mt-2 space-y-2">
                    <p>
                        <strong>(1) 上界（Upper Bound）と上に有界：</strong><br />
                        ある実数 <InlineMath math="M \in \mathbb{R}" /> が存在して、任意の <InlineMath math="x \in A" /> に対して <InlineMath math="x \le M" /> が成り立つとき、<InlineMath math="M" /> を <InlineMath math="A" /> の<strong>上界</strong>と呼ぶ。<br />
                        上界が存在するような集合 <InlineMath math="A" /> は、<strong>上に有界（Bounded above）</strong>であるという。
                    </p>
                    <p>
                        <strong>(2) 下界（Lower Bound）と下に有界：</strong><br />
                        ある実数 <InlineMath math="L \in \mathbb{R}" /> が存在して、任意の <InlineMath math="x \in A" /> に対して <InlineMath math="L \le x" /> が成り立つとき、<InlineMath math="L" /> を <InlineMath math="A" /> の<strong>下界</strong>と呼ぶ。<br />
                        下界が存在するような集合 <InlineMath math="A" /> は、<strong>下に有界（Bounded below）</strong>であるという。
                    </p>
                    <p>
                        <strong>(3) 有界（Bounded）：</strong><br />
                        上に有界かつ下に有界であるとき、<InlineMath math="A" /> は単に<strong>有界</strong>であるという。
                    </p>
                </div>
            </ContentBox>

            <p>
                「上界」や「下界」は、その集合自身に含まれている必要はありません。例えば、開区間 <InlineMath math="A = (0, 1)" /> の上界は <InlineMath math="1, 1.5, 2, 100" /> など無数に存在します。
                ここで重要なのは、無数にある上界の中で<strong>「最も『集合 <InlineMath math="A" /> ギリギリ』の壁はどこか？」</strong>という考え方です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">上限（Supremum）と下限（Infimum）</h2>

            <p>
                先ほどの「壁のギリギリ」を表す概念こそが、解析学における特有の重要な道具である「上限」と「下限」です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (上限と下限)">
                <p>
                    <InlineMath math="A \subseteq \mathbb{R}" /> (<InlineMath math="A \neq \emptyset" />) とする。
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mt-2 space-y-4">
                    <div>
                        <strong>(1) 上限（Supremum）：</strong><br />
                        実数 <InlineMath math="s \in \mathbb{R}" /> が <InlineMath math="A" /> の<strong>上限</strong>であるとは、次の2条件を満たすことである。
                        <ol className="list-decimal list-inside ml-4 mt-1">
                            <li><InlineMath math="s" /> は <InlineMath math="A" /> の上界である。（任意の <InlineMath math="x \in A" /> で <InlineMath math="x \le s" />）</li>
                            <li><InlineMath math="s" /> は上界の中で<strong>最小</strong>である。（もし <InlineMath math="M" /> が <InlineMath math="A" /> の上界ならば、必ず <InlineMath math="s \le M" /> となる）</li>
                        </ol>
                        上限を <InlineMath math="\sup A" /> または <InlineMath math="\sup_{x \in A} x" /> と書く。
                    </div>
                    <div>
                        <strong>(2) 下限（Infimum）：</strong><br />
                        実数 <InlineMath math="i \in \mathbb{R}" /> が <InlineMath math="A" /> の<strong>下限</strong>であるとは、次の2条件を満たすことである。
                        <ol className="list-decimal list-inside ml-4 mt-1">
                            <li><InlineMath math="i" /> は <InlineMath math="A" /> の下界である。（任意の <InlineMath math="x \in A" /> で <InlineMath math="i \le x" />）</li>
                            <li><InlineMath math="i" /> は下界の中で<strong>最大</strong>である。（もし <InlineMath math="L" /> が <InlineMath math="A" /> の下界ならば、必ず <InlineMath math="L \le i" /> となる）</li>
                        </ol>
                        下限を <InlineMath math="\inf A" /> または <InlineMath math="\inf_{x \in A} x" /> と書く。
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="remark" title="上限の特徴づけにおける「ε-論法」">
                <p>
                    上限が「上界の中で最小」であるということは、次のような「<InlineMath math="\varepsilon" /> を使った定義」に言い換えることができます。解析学の証明では、元々の定義よりもこちらの表現が圧倒的によく使われます。
                </p>
                <p className="mt-2 text-blue-800 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-slate-800/50 p-2 rounded">
                    <InlineMath math="s = \sup A" /> であるための必要十分条件：
                    <br />(i) 任意の <InlineMath math="x \in A" /> について <InlineMath math="x \le s" />（<InlineMath math="s" /> は上界）
                    <br />(ii) 任意の <InlineMath math="\varepsilon > 0" /> について、ある <InlineMath math="x \in A" /> が存在して <InlineMath math="s - \varepsilon < x" /> が成り立つ。
                </p>
                <p className="mt-2">
                    (ii) の意味するところは非常に直感的です。「<InlineMath math="s" /> はギリギリの壁だから、壁を内側へほんの少し（<InlineMath math="\varepsilon" /> だけ）でも後退させると、もはや壁の役目を果たせず、中身の要素 <InlineMath math="x" /> がはみ出してしまう」ということです。
                </p>
            </ContentBox>

            <p>
                最大値（<InlineMath math="\max" />）との決定的な違いは、上限（<InlineMath math="\sup" />）はその集合自身に「含まれていなくてもよい」という点です。例えば開区間 <InlineMath math="(0, 1)" /> に最大値は存在しませんが、上限は <InlineMath math="\sup(0, 1) = 1" /> として確実に存在します。上限は最大値の概念を一般化したものだと言えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">上限・下限の一意性</h2>

            <p>
                上限や下限と呼ばれる実数がもし存在するならば、それはただ1つしか存在しないことを確認しておきましょう。これは「最小（最大）のもの」という定義から容易に導かれます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (上限・下限の一意性)">
                <p>
                    集合 <InlineMath math="A \subseteq \mathbb{R}" /> に上限（または下限）が存在するならば、それは一意に定まる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [上限の一意性]">
                <p>
                    <InlineMath math="s_1" /> と <InlineMath math="s_2" /> をともに集合 <InlineMath math="A" /> の上限だとする。
                </p>
                <p className="mt-2">
                    <InlineMath math="s_1" /> は上限（上界の最小値）であり、<InlineMath math="s_2" /> は上界の一つであるため、定義より <InlineMath math="s_1 \le s_2" /> が成り立つ。
                </p>
                <p className="mt-2">
                    全く同様の論理で、役割を入れ替えると、
                    <InlineMath math="s_2" /> は上限（上界の最小値）であり、<InlineMath math="s_1" /> は上界の一つであるため、定義より <InlineMath math="s_2 \le s_1" /> が成り立つ。
                </p>
                <p className="mt-2">
                    <InlineMath math="s_1 \le s_2" /> かつ <InlineMath math="s_2 \le s_1" /> である実数は <InlineMath math="s_1 = s_2" /> しか有り得ない。ゆえに上限は存在すれば一意である（下限についても全く同様に示される）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                しかし、ここまでの定義だけでは、「上に有界な集合には必ず上限（ギリギリの壁）が存在する」という確証はどこにもありません。例えば、「有理数だけの世界」において、<InlineMath math="A = \{x \in \mathbb{Q} \mid x^2 < 2\}" /> という集合を考えてみましょう。この集合は上に有界（例えば <InlineMath math="2" /> や <InlineMath math="1.5" /> が上界）ですが、「最小の上界」は <InlineMath math="\sqrt{2}" /> であるため、有理数の世界では存在しません。
            </p>
            <p className="mt-2">
                この「最小の上界が必ず存在すること」を保証するのが、実数が実数たる所以である<strong>「上限公理」</strong>です。次節でこれを詳しく見ていきましょう。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>集合の上から押さえる実数を「上界」、下から押さえる実数を「下界」という。</li>
                    <li>上界のうちで最小のものを「上限（<InlineMath math="\sup" />）」、下界のうちで最大のものを「下限（<InlineMath math="\inf" />）」と呼ぶ。</li>
                    <li>上限 <InlineMath math="s = \sup A" /> は「<InlineMath math="\varepsilon" /> だけ内側に後退させると上限ではなくなり、集合の要素とぶつかってしまう」という性質で特徴づけられる。</li>
                    <li>上限や下限は、存在すればただ一つに定まる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
