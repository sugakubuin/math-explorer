import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConstructibilityOfRegularPolygons() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 1 で学んだ作図可能数の理論と、前節で学んだ円分体の理論を組み合わせることで、「正 <InlineMath math="n" /> 角形は定規とコンパスで作図可能か？」という古代からの問いに完全な解答を与えることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正 n 角形の作図可能条件</h2>

            <p>
                正 <InlineMath math="n" /> 角形の頂点は複素平面上の 1 の <InlineMath math="n" /> 乗根 <InlineMath math="\zeta_n^k" /> と一致します。したがって、正 <InlineMath math="n" /> 角形が作図可能であることと、複素数 <InlineMath math="\zeta_n" /> （あるいはその実部である <InlineMath math="\cos(2\pi/n)" />）が作図可能であることは同値です。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (ガウスの定理)">
                <p>
                    正 <InlineMath math="n" /> 角形が定規とコンパスで作図可能であるための必要十分条件は、<InlineMath math="n" /> が次のように素因数分解されることである。
                </p>
                <BlockMath math="n = 2^s p_1 p_2 \cdots p_r" />
                <p>
                    ここで、<InlineMath math="s \geq 0" /> であり、<InlineMath math="p_1, \dots, p_r" /> は<strong>相異なるフェルマー素数</strong>である。
                </p>
                <p>
                    （※フェルマー素数とは、<InlineMath math="p = 2^{2^k} + 1" /> の形をした素数のこと。現在知られているのは <InlineMath math="3, 5, 17, 257, 65537" /> の5つのみである）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    正 <InlineMath math="n" /> 角形が作図可能 <InlineMath math="\iff" /> <InlineMath math="\zeta_n" /> が作図可能 <InlineMath math="\iff" /> 拡大次数 <InlineMath math="[\mathbb{Q}(\zeta_n) : \mathbb{Q}]" /> が 2 のべき乗である。（※Chapter 1 の Proposition 1.4-1 による特徴づけ。正確には、2次拡大の塔で到達できることが必要だが、円分体のガロア群がアーベル群であるため、拡大次数が2のべき乗であれば自動的に2次拡大の塔が構成できることがガロア理論から保証される。）
                </p>
                <p>
                    <InlineMath math="n" /> 次円分体の拡大次数は <InlineMath math="\varphi(n)" /> に等しい。したがって、作図可能条件は<strong>「オイラーのトーシェント関数 <InlineMath math="\varphi(n)" /> の値が 2 のべき乗になること」</strong>と同値である。
                </p>
                <p>
                    <InlineMath math="n" /> の素因数分解を <InlineMath math="n = 2^s p_1^{e_1} \cdots p_r^{e_r}" /> とする（<InlineMath math="p_i" /> は奇素数）。<InlineMath math="\varphi" /> の乗法性より、
                </p>
                <BlockMath math="\varphi(n) = \varphi(2^s) \prod_{i=1}^r \varphi(p_i^{e_i}) = 2^{s-1} \prod_{i=1}^r p_i^{e_i-1}(p_i - 1)" />
                <p>
                    （ただし <InlineMath math="s=0" /> のときは <InlineMath math="\varphi(2^0)=1" />）。
                </p>
                <p>
                    この値が 2 のべき乗になるための条件を考える。<InlineMath math="p_i" /> は奇素数だから、もし <InlineMath math="e_i \geq 2" /> ならば <InlineMath math="\varphi(n)" /> は奇数の素因数 <InlineMath math="p_i" /> を持ってしまうため不適。よってすべての <InlineMath math="i" /> で <InlineMath math="e_i = 1" />（相異なる素数の積）でなければならない。
                </p>
                <p>
                    さらに、各 <InlineMath math="(p_i - 1)" /> も 2 のべき乗でなければならない。すなわち <InlineMath math="p_i - 1 = 2^m" />。したがって <InlineMath math="p_i = 2^m + 1" /> という形になる。
                </p>
                <p>
                    もし <InlineMath math="m" /> が奇数の約数 <InlineMath math="q > 1" /> を持ち、<InlineMath math="m = qk" /> と書けたとすると、
                    <InlineMath math="2^{qk} + 1 = (2^k)^q + 1^q = (2^k + 1)((2^k)^{q-1} - \dots + 1)" /> となり、素数であることに矛盾する。
                    よって <InlineMath math="m" /> は奇数の約数を持たず、<InlineMath math="m" /> 自身が 2 のべき乗（<InlineMath math="m = 2^k" />）でなければならない。
                </p>
                <p>
                    したがって、許される奇素数は <InlineMath math="p = 2^{2^k} + 1" />（フェルマー素数）のみであることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-1 (作図可能な正多角形と不可能なもの)">
                <ul className="list-disc list-inside mt-2">
                    <li><strong>正三角形：</strong> <InlineMath math="n = 3 = 2^{2^0} + 1" />。フェルマー素数なので作図可能（<InlineMath math="\varphi(3) = 2 = 2^1" />）。</li>
                    <li><strong>正五角形：</strong> <InlineMath math="n = 5 = 2^{2^1} + 1" />。フェルマー素数なので作図可能（<InlineMath math="\varphi(5) = 4 = 2^2" />）。</li>
                    <li><strong>正六角形：</strong> <InlineMath math="n = 6 = 2^1 \times 3" />。2のべき乗とフェルマー素数1つの積なので作図可能。</li>
                    <li><strong>正七角形：</strong> <InlineMath math="n = 7 = 2^3 - 1" />。フェルマー素数ではないため作図不可能（<InlineMath math="\varphi(7) = 6" /> であり、2のべき乗ではない）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正 17 角形の作図</h2>

            <p>
                ガウスが19歳のときに見つけ、数学の道に進む決意を固めたと言われるのが「正17角形の作図可能性」です。
            </p>

            <ContentBox type="example" title="Example 6.3-2 (正 17 角形の作図可能性)">
                <p>
                    <InlineMath math="n = 17" /> の場合を考える。<InlineMath math="17 = 2^4 + 1 = 2^{2^2} + 1" /> であり、これはフェルマー素数である。したがって定理より正17角形は作図可能である。
                </p>
                <p>
                    ガロア理論の視点からこの作図を解釈してみよう。拡大 <InlineMath math="\mathbb{Q}(\zeta_{17})/\mathbb{Q}" /> のガロア群は <InlineMath math="\mathrm{Gal} \cong (\mathbb{Z}/17\mathbb{Z})^\times \cong \mathbb{Z}/16\mathbb{Z}" /> である。
                </p>
                <p>
                    位数 16 の巡回群には、位数がそれぞれ 8, 4, 2 の部分群が入れ子になって存在する。
                </p>
                <BlockMath math="\mathbb{Z}/16\mathbb{Z} \trianglerighteq \mathbb{Z}/8\mathbb{Z} \trianglerighteq \mathbb{Z}/4\mathbb{Z} \trianglerighteq \mathbb{Z}/2\mathbb{Z} \trianglerighteq \{e\}" />
                <p>
                    ガロアの基本定理より、これに対応して体の塔が存在する。
                </p>
                <BlockMath math="\mathbb{Q} \subset K_1 \subset K_2 \subset K_3 \subset \mathbb{Q}(\zeta_{17})" />
                <p>
                    この塔の各ステップは、群の指数の関係から<strong>すべて 2 次拡大</strong>となる。2次拡大は平面上の直線と円の交点として実現できるため、有理数から出発して4回の平方根操作（作図操作）を繰り返すことで、確実に <InlineMath math="\zeta_{17}" /> を作図できることが保証されているのである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (フェルマー素数の未解決問題)">
                <p>
                    ピエール・ド・フェルマーは「<InlineMath math="2^{2^k}+1" /> はすべて素数になるだろう」と予想しましたが、レオンハルト・オイラーによって <InlineMath math="k=5" /> の場合が素数ではないこと（<InlineMath math="2^{32}+1 = 4294967297 = 641 \times 6700417" />）が示され、予想は反証されました。
                </p>
                <p>
                    現在に至るまで、<InlineMath math="k \geq 5" /> でフェルマー素数となるものは一つも見つかっておらず、フェルマー素数が無限に存在するのか、それとも既知の5つで全てなのかは数学の未解決問題のままです。したがって、「作図可能な正奇数角形」が無限に存在するのかどうかも、誰にもわかっていません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正 <InlineMath math="n" /> 角形が定規とコンパスで作図可能であることと、<InlineMath math="\varphi(n)" /> が 2 のべき乗になることは同値である。</li>
                    <li>ガウスの定理：作図可能なのは <InlineMath math="n = 2^s \times (\text{相異なるフェルマー素数の積})" /> のときに限られる。</li>
                    <li>17 はフェルマー素数であるため、正17角形は作図可能である。ガロア理論を用いれば、それが 2 次拡大の積み重ねとして実現されることが分かる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
