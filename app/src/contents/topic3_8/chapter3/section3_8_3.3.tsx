import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ApplicationOfLagrangesTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ラグランジュの定理の威力は、その応用範囲の広さにあります。
                位数が素数である群の構造が極めて単純であることや、整数論における重要な定理が群論から自然に導かれることを見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素数位数の群</h2>

            <p className="leading-relaxed">
                群の位数が素数であれば、その内部構造は完全に決定されます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (素数位数の群)">
                <p>
                    有限群 <InlineMath math="G" /> の位数 <InlineMath math="|G| = p" /> が素数ならば、<InlineMath math="G" /> は巡回群であり、単位元以外のどの元も生成元となる。
                    また、自明でない（<InlineMath math="\{e\}" /> と <InlineMath math="G" /> 以外の）部分群を持たない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="e" /> でない任意の元 <InlineMath math="a \in G" /> をひとつ選ぶ。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <InlineMath math="a" /> が生成する巡回部分群 <InlineMath math="\langle a \rangle" /> を考える。
                        ラグランジュの定理より、この部分群の位数 <InlineMath math="|\langle a \rangle|" /> は全体の位数 <InlineMath math="p" /> の約数である。
                    </li>
                    <li>
                        <InlineMath math="p" /> は素数なので、約数は <InlineMath math="1" /> か <InlineMath math="p" /> のいずれかである。
                        しかし <InlineMath math="a \neq e" /> なので、その位数 <InlineMath math="|\langle a \rangle|" /> は <InlineMath math="1" /> より大きい。
                    </li>
                    <li>
                        したがって <InlineMath math="|\langle a \rangle| = p" /> でなければならず、<InlineMath math="G = \langle a \rangle" />、すなわち <InlineMath math="G" /> は巡回群である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                位数が合成数の場合には、このような「一意性」は成り立ちません。
            </p>

            <ContentBox type="example" title="Example 3.3-1 (|G| = 5 の群 vs |G| = 4 の群)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>位数 5 の群</b>：5 は素数なので、群の構造は巡回群 <InlineMath math="\mathbb{Z}/5\mathbb{Z}" /> ひとつだけであり、どの 非単位元も位数 5 を持つ。
                    </li>
                    <li>
                        <b>位数 4 の群</b>：4 は合成数なので、一意には決まらない。巡回群 <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> だけでなく、非巡回群であるクラインの 4 群（どの 非単位元の位数も 2）も存在する。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フェルマーの小定理</h2>

            <p className="leading-relaxed">
                整数論の基本的な定理も、群論のラグランジュの定理（あるいはその帰結である Theorem 3.2-2）の一つの例として証明できます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-2 (フェルマーの小定理)">
                <p>
                    素数 <InlineMath math="p" /> と、<InlineMath math="p" /> で割り切れない整数 <InlineMath math="a" /> に対し、以下が成り立つ：
                    <BlockMath math="a^{p-1} \equiv 1 \pmod{p}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p-1" /> 個の元からなる乗法群 <InlineMath math="(\mathbb{Z}/p\mathbb{Z})^\times = \{ \bar{1}, \bar{2}, \dots, \overline{p-1} \}" /> を考える：
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        この群の位数は <InlineMath math="p-1" /> である。
                    </li>
                    <li>
                        Theorem 3.2-2（元の位数は群の位数を割り切る）より、任意の元 <InlineMath math="\bar{a} \in (\mathbb{Z}/p\mathbb{Z})^\times" /> に対して、指数が群の位数に一致する累乗 <InlineMath math="\bar{a}^{p-1}" /> は単位元 <InlineMath math="\bar{1}" /> に一致する。
                    </li>
                    <li>
                        これは、合同式 <InlineMath math="a^{p-1} \equiv 1 \pmod{p}" /> が成り立つことと同値である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-2 (具体例：a = 3, p = 7)">
                <p>
                    <InlineMath math="3^6 = 729" /> であり、<InlineMath math="729 = 104 \times 7 + 1" /> なので <InlineMath math="3^6 \equiv 1 \pmod 7" /> となる。
                    これを群論的に見ると、<InlineMath math="(\mathbb{Z}/7\mathbb{Z})^\times" /> における各元の累乗を計算すると：
                    <BlockMath math="\bar{3}^1 = \bar{3}, \bar{3}^2 = \bar{2}, \bar{3}^3 = \bar{6}, \bar{3}^4 = \bar{4}, \bar{3}^5 = \bar{5}, \bar{3}^6 = \bar{1}" />
                    となり、位数 6 の元（生成元）であることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="Remark：ウィルソンの定理">
                <p>
                    同様に群論的なアプローチから導ける定理として、<b>ウィルソンの定理</b>があります：
                    <BlockMath math="(p-1)! \equiv -1 \pmod p" />
                    これは、<InlineMath math="(\mathbb{Z}/p\mathbb{Z})^\times" /> のすべての元の積をとることで証明されます。元とその逆元が互いに打ち消し合いますが、自己逆元である <InlineMath math="\bar{1}" /> と <InlineMath math="\overline{p-1} = -\bar{1}" /> のみが残り、最終的な積は <InlineMath math="-1" /> になります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>位数が素数 <InlineMath math="p" /> の群は、必ず巡回群 <InlineMath math="\mathbb{Z}/p\mathbb{Z}" /> に同型である。</li>
                    <li>フェルマーの小定理は、剰余類の乗法群にラグランジュの定理を適用した結果である。</li>
                    <li>位数が素数であることの強力な制約が、群論と整数論を結びつけている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
