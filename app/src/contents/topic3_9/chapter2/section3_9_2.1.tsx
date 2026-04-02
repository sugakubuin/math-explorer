import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IdealDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                群論において、商群（剰余群）を作るために必要だったのは単なる部分群ではなく「正規部分群」でした。環論においても、ある環 <InlineMath math="R" /> をその部分集合 <InlineMath math="I" /> で割って「剰余環 <InlineMath math="R/I" />」を作ることを考えます。このとき、<InlineMath math="I" /> に要求される条件が「イデアル（ideal）」という概念です。イデアルは、環の構造を解き明かすための最も重要な鍵となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">イデアルの定義</h2>

            <p>
                「イデアル（ideal）」は元々、フェルマーの最終定理の証明に向けた研究の中で、素因数分解の一意性が成り立たない数体系において、一意性を回復させるために導入された「理想的な数（ideal number）」に由来します。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (イデアル)">
                <p>
                    環 <InlineMath math="R" /> の空でない部分集合 <InlineMath math="I" /> が<b>左イデアル（left ideal）</b>であるとは、以下の 2 つの条件を満たすことである。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="I" /> は加法について <InlineMath math="R" /> の部分群である。<br />
                        （すなわち <InlineMath math="x, y \in I \implies x - y \in I" />）
                    </li>
                    <li><InlineMath math="R" /> の任意の元を<b>左</b>から掛けても <InlineMath math="I" /> に吸収される（吸収律）。<br />
                        （すなわち、任意の <InlineMath math="r \in R" /> と <InlineMath math="x \in I" /> に対して、<InlineMath math="rx \in I" />）
                    </li>
                </ol>
                <p className="mt-4">
                    同様に、条件 2 が「<b>右</b>から掛けても吸収される（<InlineMath math="xr \in I" />）」であるとき、<b>右イデアル（right ideal）</b>という。
                </p>
                <p className="mt-4">
                    左イデアルでもあり右イデアルでもあるとき、単に<b>両側イデアル（two-sided ideal）</b>、あるいは単に<b>イデアル（ideal）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                本コースで主に扱う<b>可換環</b>においては、左から掛けても右から掛けても結果が同じ（<InlineMath math="rx = xr" />）であるため、左イデアル・右イデアル・両側イデアルの区別はなくなり、すべて単に「イデアル」と呼びます。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (イデアルの身近な例)">
                <p>
                    <b>1. 偶数の集合 <InlineMath math="2\mathbb{Z}" /></b><br />
                    整数環 <InlineMath math="\mathbb{Z}" /> において、偶数全体の集合 <InlineMath math="2\mathbb{Z} = \{ \dots, -4, -2, 0, 2, 4, \dots \}" /> を考えます。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-1 mb-3 text-sm">
                    <li>偶数同士の差は偶数なので、加法部分群です。</li>
                    <li>任意の整数 <InlineMath math="r \in \mathbb{Z}" /> と任意の偶数 <InlineMath math="2k \in 2\mathbb{Z}" /> の積 <InlineMath math="r(2k) = 2(rk)" /> は明らかに偶数です。つまり「偶数に何を掛けても偶数に吸収される」という吸収律を満たしています。</li>
                </ul>
                <p>
                    よって <InlineMath math="2\mathbb{Z}" /> は <InlineMath math="\mathbb{Z}" /> のイデアルです。同様に任意の整数 <InlineMath math="n" /> について「<InlineMath math="n" /> の倍数全体 <InlineMath math="n\mathbb{Z}" />」もイデアルになります。
                </p>

                <p>
                    <b>2. 自明なイデアル</b><br />
                    任意の環 <InlineMath math="R" /> に対して、全体 <InlineMath math="R" /> 自身と、零元のみからなる集合 <InlineMath math="\{0\}" /> は常にイデアルの条件を満たします。これらを<b>自明なイデアル（trivial ideals）</b>と呼びます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">イデアルと部分環の違い</h2>

            <p>
                部分集合が特定の演算で閉じているという点で、「部分環」と「イデアル」は似ていますが、その定義と役割は全く異なります。
            </p>

            <ContentBox type="definition" title="参考：部分環 (Subring) の定義">
                <p>
                    環 <InlineMath math="R" /> の部分集合 <InlineMath math="S" /> が<b>部分環</b>であるとは、<InlineMath math="S" /> 自身が <InlineMath math="R" /> と同じ演算で環をなし、さらに <InlineMath math="R" /> の単位元 <InlineMath math="1_R" /> を含む（<InlineMath math="1_R \in S" />）ことである。（※単位元付き環を前提とする場合）
                </p>
            </ContentBox>

            <div className="overflow-x-auto mt-4 mb-6">
                <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm">
                    <thead>
                        <tr className="bg-slate-100 dark:bg-slate-700">
                            <th className="py-2 px-4 border-b text-left">条件</th>
                            <th className="py-2 px-4 border-b text-left">部分環 <InlineMath math="S" /></th>
                            <th className="py-2 px-4 border-b text-left">イデアル <InlineMath math="I" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">加法について</td>
                            <td className="py-2 px-4 border-b">部分群である</td>
                            <td className="py-2 px-4 border-b">部分群である</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">乗法について</td>
                            <td className="py-2 px-4 border-b text-blue-600 dark:text-blue-400">内部で閉じている<br/>(<InlineMath math="s_1, s_2 \in S \implies s_1 s_2 \in S" />)</td>
                            <td className="py-2 px-4 border-b text-red-600 dark:text-red-400">外部からの積を吸収する<br/>(<InlineMath math="r \in R, x \in I \implies rx \in I" />)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">単位元 <InlineMath math="1_R" /></td>
                            <td className="py-2 px-4 border-b">必ず含まれる</td>
                            <td className="py-2 px-4 border-b">全体 <InlineMath math="R" /> 以外は<b>含まない</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                特に重要なのは、「イデアルが単位元を含んでしまうと、それは環全体に一致してしまう」という性質です。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (単位元を含むイデアル)">
                <p>
                    環 <InlineMath math="R" /> のイデアル <InlineMath math="I" /> について、以下の 3 つの条件は同値である。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="I = R" /></li>
                    <li><InlineMath math="1_R \in I" /></li>
                    <li><InlineMath math="I" /> は可逆元（単元）を少なくとも一つ含む。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="1 \implies 2" /> は明らか。
                </p>
                <p>
                    <InlineMath math="2 \implies 3" />：<InlineMath math="1_R" /> 自身が可逆元であるから明らか。
                </p>
                <p>
                    <InlineMath math="3 \implies 1" />：<InlineMath math="I" /> が可逆元 <InlineMath math="u" /> を含むとする。イデアルの吸収律から、<InlineMath math="R" /> の任意の元を掛けても <InlineMath math="I" /> に属する。とくに <InlineMath math="u" /> の逆元 <InlineMath math="u^{-1} \in R" /> を掛けると、<InlineMath math="u^{-1} u = 1_R \in I" /> となる。<br />
                    <InlineMath math="1_R \in I" /> であると分かったので、今度は任意の <InlineMath math="r \in R" /> について <InlineMath math="r = r \cdot 1_R" /> を考えると、これも吸収律により <InlineMath math="r \cdot 1_R \in I" />。よって <InlineMath math="R \subset I" /> となり、<InlineMath math="I \subset R" /> と合わせて <InlineMath math="I = R" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この命題から、<b>体には自明なイデアル（<InlineMath math="\{0\}" /> と体自身）しか存在しない</b>ことが直ちに分かります。なぜなら、体の要素は <InlineMath math="0" /> 以外すべて可逆元であるため、<InlineMath math="\{0\}" /> 以外の要素を一つでもイデアルが含めば、可逆元を含んだことになり全体と一致してしまうからです。
            </p>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>イデアル</b>とは、加法部分群であり、かつ環の任意の要素との乗法で内部に「吸収」される性質を持つ部分集合である。</li>
                    <li>イデアルは乗法で閉じているだけの「部分環」よりもはるかに強い条件（外部からの積も吸い込む）を持つ。</li>
                    <li>イデアルが単位元や可逆元を含んだ場合、そのイデアルは環全体 <InlineMath math="R" /> と一致してしまう（真のイデアルにならない）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}