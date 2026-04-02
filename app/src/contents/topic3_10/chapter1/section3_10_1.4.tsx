import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConstructibleNumbers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                古代ギリシャから続く数学の歴史において、「定規とコンパスだけを用いて特定の図形を作図できるか？」という幾何学的な問い（三大作図問題など）がありました。本節では、この幾何学の古典的な問題を、これまで学んできた「体の拡大次数」という代数学の言葉に翻訳して鮮やかに解決します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">作図可能数の定義</h2>

            <p>
                幾何学的な「作図」を、座標平面上の点の座標（実数）として定式化します。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (作図可能数)">
                <p>
                    実数 <InlineMath math="\alpha \in \mathbb{R}" /> が<strong>作図可能（constructible）</strong>であるとは、座標平面上の2点 <InlineMath math="(0,0)" /> と <InlineMath math="(1,0)" /> が与えられた状態から出発して、以下の操作を有限回繰り返すことで、長さが <InlineMath math="|\alpha|" /> の線分を作図できることである。
                </p>
                <ol className="list-decimal list-inside mt-2 mb-2">
                    <li>既知の2点を通る直線を引く（定規）</li>
                    <li>既知の1点を中心とし、既知の2点間の距離を半径とする円を描く（コンパス）</li>
                    <li>直線や円の交点として新しい点を求める</li>
                </ol>
                <p>
                    作図可能な実数全体の集合を <InlineMath math="\mathcal{C}" /> とすると、<InlineMath math="\mathcal{C}" /> は <InlineMath math="\mathbb{Q}" /> を部分体として含む体をなす。
                </p>
            </ContentBox>

            <p>
                作図可能であることの代数的な必要十分条件は、拡大次数を用いて驚くほどシンプルに表されます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-1 (作図可能数の代数的特徴づけ)">
                <p>
                    実数 <InlineMath math="\alpha" /> が作図可能であるための必要十分条件は、<InlineMath math="\alpha" /> が <InlineMath math="\mathbb{Q}" /> 上代数的であり、かつその拡大次数 <InlineMath math="[\mathbb{Q}(\alpha) : \mathbb{Q}]" /> が <strong>2 のべき乗（<InlineMath math="2^k" />）</strong>になることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    作図の1ステップで新しい点が作られる代数的な意味を考える。
                </p>
                <ul className="list-disc list-inside mt-2 mb-2">
                    <li>直線と直線の交点は、1次方程式の連立を解くことになり、係数の体の中で有理演算（四則演算）のみで求まる（体は拡大しない）。</li>
                    <li>直線と円の交点、または円と円の交点を求めることは、代数的には<strong>2次方程式</strong>を解くことに帰着する（円の方程式 <InlineMath math="x^2+y^2=r^2" /> と直線の連立など）。</li>
                </ul>
                <p>
                    したがって、作図の各ステップで新しい数 <InlineMath math="\beta" /> が追加されるとき、これまでに構成された体 <InlineMath math="F" /> に対して <InlineMath math="\beta" /> は2次方程式の根となる。つまり、拡大次数は <InlineMath math="[F(\beta):F] = 1" /> または <InlineMath math="2" /> となる。
                </p>
                <p>
                    これを有限回繰り返して体 <InlineMath math="K = \mathbb{Q}(\gamma_1, \dots, \gamma_m)" /> を構成し、その中に <InlineMath math="\alpha" /> が含まれるとする。連鎖律より、
                </p>
                <BlockMath math="[K : \mathbb{Q}] = [K : \mathbb{Q}(\gamma_{m-1})] \cdots [\mathbb{Q}(\gamma_1) : \mathbb{Q}] = 2^{e_m} \cdots 2^{e_1} = 2^k" />
                <p>
                    となる。<InlineMath math="\alpha \in K" /> だから <InlineMath math="\mathbb{Q} \subset \mathbb{Q}(\alpha) \subset K" /> であり、再び連鎖律から <InlineMath math="[K : \mathbb{Q}] = [K : \mathbb{Q}(\alpha)][\mathbb{Q}(\alpha) : \mathbb{Q}]" /> となるため、<InlineMath math="[\mathbb{Q}(\alpha) : \mathbb{Q}]" /> は <InlineMath math="2^k" /> の約数、すなわち 2 のべき乗でなければならない。
                </p>
                <p>
                    逆も、体拡大の列が2次拡大の塔として取れることから作図手順が構成できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-1 (√2 は作図可能)">
                <p>
                    <InlineMath math="\sqrt{2}" /> の最小多項式は <InlineMath math="x^2 - 2" /> であり、<InlineMath math="[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2 = 2^1" /> である。これは 2 のべき乗であるため、<InlineMath math="\sqrt{2}" /> は作図可能である。幾何学的には、1辺の長さが 1 の正方形の対角線を引くことで容易に作図できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">作図不可能問題への応用</h2>

            <p>
                この強力な代数的特徴づけを用いることで、古代ギリシャから 2000 年以上未解決だった「三大作図問題」が、実は「作図不可能である」と証明されました。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (3大作図問題の不可能性)">
                <p>
                    定規とコンパスを用いた以下の作図は（一般には）不可能である。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><strong>角の三等分</strong>：任意の角を三等分する。</li>
                    <li><strong>立方体の倍積</strong>：与えられた立方体の体積の 2 倍の体積をもつ立方体の 1 辺を作図する。</li>
                    <li><strong>円積</strong>：与えられた円と同じ面積をもつ正方形を作図する。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(ii) 立方体の倍積の不可能性：</strong><br />
                    1辺が 1（体積 1）の立方体の 2 倍の体積を持つ立方体の 1 辺の長さは <InlineMath math="\sqrt[3]{2}" /> である。前節で見たように、<InlineMath math="\sqrt[3]{2}" /> の最小多項式は <InlineMath math="x^3 - 2" /> であり、その拡大次数は <InlineMath math="[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3" /> である。<InlineMath math="3" /> は 2 のべき乗ではないため、Proposition 1.4-1 により <InlineMath math="\sqrt[3]{2}" /> は作図不可能である。
                </p>
                <p>
                    <strong>(i) 角の三等分の不可能性：</strong><br />
                    特定の角（例えば <InlineMath math="90^\circ" />）は三等分できるが、「任意の角」に対する作図法は存在しない。反例として <InlineMath math="60^\circ" /> の三等分、すなわち <InlineMath math="20^\circ" /> の作図を考える。<InlineMath math="\alpha = 2\cos 20^\circ" /> とおくと、三倍角の公式 <InlineMath math="\cos 3\theta = 4\cos^3 \theta - 3\cos \theta" /> より、<InlineMath math="\cos 60^\circ = 1/2 = 4\cos^3 20^\circ - 3\cos 20^\circ" />。<InlineMath math="2" /> 倍して整理すると <InlineMath math="\alpha^3 - 3\alpha - 1 = 0" /> を得る。多項式 <InlineMath math="x^3 - 3x - 1" /> は有理根を持たず既約であるため、<InlineMath math="[\mathbb{Q}(\alpha):\mathbb{Q}] = 3" /> となる。よって作図不可能。
                </p>
                <p>
                    <strong>(iii) 円積の不可能性：</strong><br />
                    半径 1 の円（面積 <InlineMath math="\pi" />）と同じ面積の正方形の 1 辺は <InlineMath math="\sqrt{\pi}" /> である。もし <InlineMath math="\sqrt{\pi}" /> が作図可能なら、代数的数となる。すると <InlineMath math="\pi = (\sqrt{\pi})^2" /> も代数的数にならなければならないが、<InlineMath math="\pi" /> は超越数であることが証明されている。したがって <InlineMath math="\sqrt{\pi}" /> は作図不可能である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-2 (正五角形の作図)">
                <p>
                    正五角形が作図可能であることは、<InlineMath math="\cos(2\pi/5)" /> が作図可能であることと同値である。<InlineMath math="\cos(2\pi/5) = \frac{\sqrt{5}-1}{4}" /> であり、これは <InlineMath math="\mathbb{Q}(\sqrt{5})" /> に属する。
                </p>
                <p>
                    拡大次数は <InlineMath math="[\mathbb{Q}(\cos(2\pi/5)) : \mathbb{Q}] = 2 = 2^1" /> であり、確かに 2 のべき乗になっている。古代ギリシャ人が正五角形を作図できた代数的な裏付けがここにある。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (正多角形の作図可能性)">
                <p>
                    どのような正 <InlineMath math="n" /> 角形が作図可能かという問題は、若き日のガウス（C.F. Gauss）によって解決への道筋がつけられました。この完全な解明には、第6章で学ぶ「円分体」の理論とガロア理論が不可欠となります。本コースの終盤で、この美しい結果に到達する予定です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実数 <InlineMath math="\alpha" /> が定規とコンパスで作図可能であることは、<InlineMath math="[\mathbb{Q}(\alpha) : \mathbb{Q}]" /> が 2 のべき乗になることと同値である。</li>
                    <li><InlineMath math="[\mathbb{Q}(\sqrt[3]{2}) : \mathbb{Q}] = 3" /> や <InlineMath math="[\mathbb{Q}(2\cos 20^\circ) : \mathbb{Q}] = 3" /> は 2 のべき乗ではないため、立方体の倍積と角の三等分は不可能である。</li>
                    <li><InlineMath math="\pi" /> は超越数であるため、円積問題も不可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
