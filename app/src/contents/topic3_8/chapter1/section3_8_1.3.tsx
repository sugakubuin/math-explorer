import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AbelianGroupsAndPowers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群の演算において、元の順番を入れ替えても結果が変わらない性質を「可換性」と呼びます。
                本節では、可換な群（アーベル群）と、そうでない群の区別、および元の「べき乗」の性質を調べます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アーベル群</h2>

            <ContentBox type="definition" title="Definition 1.3-1 (アーベル群)">
                <p>
                    群 <InlineMath math="G" /> の任意の元 <InlineMath math="a, b" /> について、交換律
                    <BlockMath math="ab = ba" />
                    が成り立つとき、<InlineMath math="G" /> を<b>アーベル群 (Abelian group)</b>、あるいは可換群という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1 (可換と非可換)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>アーベル群の例</b>：<InlineMath math="(\mathbb{Z}, +)" />、<InlineMath math="(\mathbb{R} \setminus \{0\}, \cdot)" />、剰余加法群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" />。
                    </li>
                    <li>
                        <b>非アーベル群の例</b>：対称群 <InlineMath math="S_3" />（<InlineMath math="n \geq 3" />）、一般線形群 <InlineMath math={"GL_n(\\mathbb{R})"} />（<InlineMath math="n \geq 2" />）。
                        行列の積や置換の合成は一般に順番を入れ替えると結果が異なります。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="記法の慣習">
                <p>
                    アーベル群を扱う際（特に加法を意識する場合）には、演算を <InlineMath math="+" />、単位元を <InlineMath math="0" />、逆元を <InlineMath math="-a" /> と書くことが多いです。
                    これに対し、非アーベル群を許容する一般的な文脈では乗法的記法（演算 <InlineMath math="\cdot" />、単位元 <InlineMath math="e" />、逆元 <InlineMath math="a^{-1}" />）を用います。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">べき乗と指数法則</h2>

            <p className="leading-relaxed">
                群の元を繰り返し演算することを「べき乗」として定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-2 (元のべき乗)">
                <p>
                    群 <InlineMath math="G" /> の元 <InlineMath math="a" /> と整数 <InlineMath math="n" /> に対して、次のように定義する。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="a^0 = e" /></li>
                    <li><InlineMath math="a^n = a \cdot a^{n-1} \quad (n > 0)" /></li>
                    <li><InlineMath math="a^{-n} = (a^{-1})^n \quad (n > 0)" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.3-1 (指数法則)">
                <p>
                    群 <InlineMath math="G" /> の任意の元 <InlineMath math="a" />、および整数 <InlineMath math="m, n" /> について次が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="a^m a^n = a^{m+n}" /></li>
                    <li><InlineMath math="(a^ m)^n = a^{mn}" /></li>
                </ol>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                    ※ <b>注意</b>：一般に <InlineMath math="(ab)^n = a^n b^n" /> は成り立ちません。これが成り立つのは <InlineMath math="ab=ba" />（アーベル群）の場合に限られます。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    自然数 <InlineMath math="m, n" /> については、定義から再帰的に明らかである。
                    一方が負の場合などは、逆元の定義 <InlineMath math="a a^{-1} = e" /> を用いてキャンセルを繰り返すことで導ける。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>交換律が成り立つ群をアーベル群と呼び、加法的記法がよく使われる。</li>
                    <li>置換群や行列群は典型的な非アーベル群である。</li>
                    <li>指数法則は群の任意の元で成り立つが、<InlineMath math="(ab)^n = a^n b^n" /> は可換性が必要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
