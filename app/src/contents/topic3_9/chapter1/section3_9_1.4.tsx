import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InvertibleElementsAndFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、環の乗法における「逆元」に焦点を当てます。環は加法については群（可換群）をなすためすべての要素が加法の逆元（マイナス）を持ちますが、乗法については逆元を持つ要素と持たない要素が混在しています。乗法の逆元を持つ要素の集まりや、すべての非零要素が逆元を持つような特別な環（体）について定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可逆元の定義と単数群</h2>

            <p>
                「掛けて 1 になる」ペアが存在するとき、その要素を可逆元と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (可逆元・単元)">
                <p>
                    単位元付き環 <InlineMath math="R" /> の元 <InlineMath math="a" /> が<b>可逆（invertible）</b>である、または<b>可逆元（unit / 単元）</b>であるとは、
                </p>
                <BlockMath math="ab = ba = 1_R" />
                <p>
                    を満たす <InlineMath math="b \in R" /> が存在することである。このとき <InlineMath math="b" /> は一意に定まるため、<InlineMath math="b = a^{-1}" /> と書き、<InlineMath math="a" /> の（乗法に関する）逆元と呼ぶ。
                </p>
                <p>
                    <InlineMath math="R" /> の可逆元全体からなる集合を <InlineMath math="R^\times" /> と書く。
                </p>
            </ContentBox>

            <p>
                「単元」という言葉は「単位元（<InlineMath math="1" />のこと）」と似ていますが意味が異なります。「単位元は単元の一つ」ですが、単元は単位元以外にも存在し得ます（たとえば <InlineMath math="-1" />）。
            </p>
            <p>
                この可逆元たちだけを集めると、それだけで群をなすという美しい性質があります。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-1 (単数群)">
                <p>
                    任意の単位元付き環 <InlineMath math="R" /> において、可逆元の全体 <InlineMath math="R^\times" /> は乗法に関して群をなす。これを環 <InlineMath math="R" /> の<b>単数群（group of units）</b>または可逆元群と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="R^\times" /> が乗法に関して群の公理を満たすことを確認する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 mb-4">
                    <li>
                        <b>演算の閉性：</b> <InlineMath math="a, b \in R^\times" /> とする。<InlineMath math="ab" /> が可逆であることを示せばよい。
                        <BlockMath math="(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = a(1)a^{-1} = aa^{-1} = 1" />
                        逆の順序も同様に <InlineMath math="1" /> となるため、<InlineMath math="ab" /> は可逆であり、逆元は <InlineMath math="(ab)^{-1} = b^{-1}a^{-1}" /> である。よって <InlineMath math="ab \in R^\times" />。
                    </li>
                    <li>
                        <b>結合律：</b> 環 <InlineMath math="R" /> の乗法結合律がそのまま遺伝する。
                    </li>
                    <li>
                        <b>単位元の存在：</b> <InlineMath math="1 \cdot 1 = 1" /> なので <InlineMath math="1 \in R^\times" /> であり、これが単位元として働く。
                    </li>
                    <li>
                        <b>逆元の存在：</b> <InlineMath math="a \in R^\times" /> ならば、その定義より存在する <InlineMath math="a^{-1}" /> もまた <InlineMath math="a^{-1}a = aa^{-1} = 1" /> を満たすため可逆元である。よって <InlineMath math="a^{-1} \in R^\times" />。
                    </li>
                </ul>
                <p>
                    以上より、<InlineMath math="R^\times" /> は群である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-1 (各環の単数群)">
                <p>
                    これまで見てきた環の単数群を書き出してみます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><b>整数環 <InlineMath math="\mathbb{Z}" />：</b> 整数同士を掛けて 1 になるのは <InlineMath math="1 \cdot 1 = 1" /> と <InlineMath math="(-1) \cdot (-1) = 1" /> のみ。よって <InlineMath math="\mathbb{Z}^\times = \{1, -1\}" />。</li>
                    <li><b>有理数環 <InlineMath math="\mathbb{Q}" />：</b> 0 以外のすべての要素が逆元を持つため、<InlineMath math="\mathbb{Q}^\times = \mathbb{Q} \setminus \{0\}" />。</li>
                    <li><b>行列環 <InlineMath math="M_n(\mathbb{R})" />：</b> 逆行列を持つ行列とは、行列式が 0 でない（正則な）行列のこと。よって <InlineMath math="(M_n(\mathbb{R}))^\times = GL_n(\mathbb{R})" />（一般線形群）。</li>
                    <li><b>剰余環 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" />：</b> <InlineMath math="a" /> と <InlineMath math="n" /> が互いに素であるとき、かつそのときに限り合同方程式 <InlineMath math="ax \equiv 1 \pmod n" /> が解を持つ。よって <InlineMath math="(\mathbb{Z}/n\mathbb{Z})^\times = \{\bar{a} \mid \gcd(a, n) = 1\}" />（既約剰余類群）。<br/>例として <InlineMath math="(\mathbb{Z}/8\mathbb{Z})^\times = \{\bar{1}, \bar{3}, \bar{5}, \bar{7}\}" />。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">体の定義</h2>

            <p>
                先ほどの有理数 <InlineMath math="\mathbb{Q}" /> の例のように、「<InlineMath math="0" /> 以外のすべての元が可逆である」ような可換環を<b>体（field）</b>と呼びます。体は四則演算（加減乗除）が自由に行える、代数学において最も整った舞台です。
            </p>

            <ContentBox type="definition" title="Definition 1.4-2 (体)">
                <p>
                    可換環 <InlineMath math="F" /> が以下の 2 つの条件を満たすとき、<InlineMath math="F" /> を<b>体（field）</b>という。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="1 \neq 0" /> である（自明な零環ではない）。</li>
                    <li><InlineMath math="0" /> 以外のすべての要素が可逆元である。すなわち <InlineMath math="F^\times = F \setminus \{0\}" />。</li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-2 (体と体でないもの)">
                <p>
                    <b>体の例：</b>
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 mb-4">
                    <li>有理数体 <InlineMath math="\mathbb{Q}" />、実数体 <InlineMath math="\mathbb{R}" />、複素数体 <InlineMath math="\mathbb{C}" /> は代表的な体です。</li>
                    <li>素数 <InlineMath math="p" /> を法とする剰余環 <InlineMath math="\mathbb{Z}/p\mathbb{Z}" /> は、<InlineMath math="0" /> 以外のすべての元 <InlineMath math="1, 2, \ldots, p-1" /> が <InlineMath math="p" /> と互いに素であるため、すべて逆元を持ちます。したがってこれは体です（有限体 <InlineMath math="\mathbb{F}_p" />）。</li>
                </ul>
                <p>
                    <b>体でない環の例：</b>
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>整数環 <InlineMath math="\mathbb{Z}" /> は、<InlineMath math="2" /> などの逆元が <InlineMath math="\mathbb{Z}" /> 内に存在しないため体ではありません（整域ではあります）。</li>
                    <li>合成数 <InlineMath math="n" /> に対する <InlineMath math="\mathbb{Z}/n\mathbb{Z}" />（例：<InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> や <InlineMath math="\mathbb{Z}/6\mathbb{Z}" />）は、零因子を持つため体になりません。</li>
                </ul>
            </ContentBox>

            <p>
                最後に、体と前節で学んだ「整域」の関係を整理しておきましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-2 (体は整域である)">
                <p>
                    任意の体 <InlineMath math="F" /> は整域である。つまり、体には零因子が存在しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    体 <InlineMath math="F" /> において、<InlineMath math="ab = 0" /> かつ <InlineMath math="a \neq 0" /> であると仮定する。このとき <InlineMath math="b = 0" /> となることを示せばよい。
                </p>
                <p>
                    <InlineMath math="F" /> は体であり <InlineMath math="a \neq 0" /> であるから、<InlineMath math="a" /> の逆元 <InlineMath math="a^{-1} \in F" /> が存在する。
                    <InlineMath math="ab = 0" /> の両辺に左から <InlineMath math="a^{-1}" /> を掛けると、
                </p>
                <BlockMath math="a^{-1}(ab) = a^{-1} \cdot 0" />
                <p>
                    結合律と零元の性質より、
                </p>
                <BlockMath math="(a^{-1}a)b = 0 \implies 1 \cdot b = 0 \implies b = 0" />
                <p>
                    よって、零因子は存在せず、<InlineMath math="F" /> は整域である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="体論への接続">
                <p>
                    方程式を解いたり、図形を作図したりする問題を抽象的に議論するためには、「加減乗除が自由にできる」体という構造が不可欠になります。この体に関するより深い性質や、体を拡張していく「体拡大」の理論、そしてガロア理論については、<b>3-10 体論I</b>で本格的に取り扱います。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>掛けて 1 になる相手（逆元）を持つ要素を<b>可逆元（単元）</b>と呼ぶ。</li>
                    <li>環の可逆元をすべて集めた集合 <InlineMath math="R^\times" /> は、乗法について群をなす（<b>単数群</b>）。</li>
                    <li><InlineMath math="0" /> 以外のすべての元が可逆である可換環を<b>体</b>と呼ぶ。</li>
                    <li>体は必ず整域である（零因子を持たない）。しかし、整域であっても体とは限らない（例：<InlineMath math="\mathbb{Z}" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}