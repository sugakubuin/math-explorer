import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfStructures() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                Chapter 2 では論理式という「記号の並び」のルールを定めました。本章では、その記号列に「意味」を与える方法を考えます。述語論理における意味付けは、命題論理のような単純な真理表ではなく、具体的な「数学的構造（モデル）」を用意してそこでの真偽を考えるという形をとります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">L-構造の定義</h2>

            <p className="leading-relaxed">
                まず、言語 <InlineMath math="\mathcal{L}" /> の各記号に対して、その「解釈先」となる集合と関数・関係を用意します。
            </p>

            <ContentBox
                type="definition"
                title={<span>Definition 3.1-1 (<InlineMath math="\mathcal{L}" />-構造)</span>}
            >
                <p>
                    言語 <InlineMath math="\mathcal{L}" /> の<strong>構造（structure）</strong>（または<strong>モデル（model）</strong>）<InlineMath math="\mathcal{M}" /> は、以下の要素から構成される。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><strong>対象領域（domain/universe）：</strong> 空でない集合 <InlineMath math="M" />。<br/>（変数が動く範囲であり、個体が存在する世界）</li>
                    <li><strong>定数記号の解釈：</strong> 各定数記号 <InlineMath math="c \in \mathcal{L}" /> に対して、<InlineMath math="M" /> の元 <InlineMath math="c^\mathcal{M} \in M" /> が指定される。</li>
                    <li><strong>関数記号の解釈：</strong> 各 <InlineMath math="n" /> 引数関数記号 <InlineMath math="f \in \mathcal{L}" /> に対して、関数 <InlineMath math="f^\mathcal{M} : M^n \to M" /> が指定される。</li>
                    <li><strong>述語記号の解釈：</strong> 各 <InlineMath math="n" /> 引数述語記号 <InlineMath math="P \in \mathcal{L}" /> に対して、関係（部分集合） <InlineMath math="P^\mathcal{M} \subset M^n" /> が指定される。</li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-1 (整数の構造)"
            >
                <p>
                    言語 <InlineMath math="\mathcal{L} = \{0, 1, +, \cdot, <\}" /> の構造として、我々がよく知る「整数」を定義する。これを構造 <InlineMath math="\mathcal{M} = \mathbb{Z}" /> と呼ぼう。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>対象領域： <InlineMath math="M" /> は整数の集合 <InlineMath math="\mathbb{Z}" /> 全体。</li>
                    <li>定数記号の解釈： <InlineMath math="0^\mathbb{Z}" /> は整数の「ゼロ」。<InlineMath math="1^\mathbb{Z}" /> は整数の「イチ」。</li>
                    <li>関数記号の解釈： <InlineMath math="+^\mathbb{Z}" /> は通常の整数の加法。<InlineMath math="\cdot^\mathbb{Z}" /> は通常の整数の乗法。</li>
                    <li>述語記号の解釈： <InlineMath math="<^\mathbb{Z}" /> は通常の整数の大小関係（<InlineMath math="x" /> が <InlineMath math="y" /> より小さいときかつそのときに限り <InlineMath math="(x, y) \in <^\mathbb{Z}" />）。</li>
                </ul>
                <p>
                    全く同じ言語 <InlineMath math="\mathcal{L}" /> に対して、対象領域を「有理数 <InlineMath math="\mathbb{Q}" />」や「実数 <InlineMath math="\mathbb{R}" />」に変え、それぞれの演算を割り当てれば、異なる構造が得られる。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-2 (有限構造の例)"
            >
                <p>
                    言語 <InlineMath math="\mathcal{L} = \{0, +\}" /> を考える。
                    対象領域を <InlineMath math="M = \{0, 1, 2\}" /> という3つの要素からなる有限集合とする。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="0^\mathcal{M} = 0 \in M" /></li>
                    <li><InlineMath math="+^\mathcal{M}" /> を「<InlineMath math="\bmod 3" /> の加法」（例：<InlineMath math="1 +^\mathcal{M} 2 = 0" />、<InlineMath math="2 +^\mathcal{M} 2 = 1" />）と定義する。</li>
                </ul>
                <p>
                    この構造 <InlineMath math="\mathcal{M}" /> は、巡回群 <InlineMath math="\mathbb{Z}/3\mathbb{Z}" /> と呼ばれるものであり、これも立派な <InlineMath math="\mathcal{L}" />-構造である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">項の解釈</h2>

            <p className="leading-relaxed">
                構造 <InlineMath math="\mathcal{M}" /> が決まれば、定数や関数の意味は定まります。しかし「<InlineMath math="x + 1" />」のような変数をふくむ項が <InlineMath math="M" /> のどの元を指すかを決めるには、変数 <InlineMath math="x" /> に具体的な値を割り当てる必要があります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.1-2 (付値と項の解釈)"
            >
                <p>
                    <strong>付値（assignment / valuation）：</strong> 変数記号の集合から対象領域 <InlineMath math="M" /> への写像 <InlineMath math="\sigma" /> のこと。
                </p>
                <p>
                    構造 <InlineMath math="\mathcal{M}" /> と付値 <InlineMath math="\sigma" /> が与えられたとき、任意の項 <InlineMath math="t" /> が表す <InlineMath math="M" /> の元（解釈） <InlineMath math="t^{\mathcal{M},\sigma} \in M" /> を以下の規則で帰納的に定義する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="t" /> が変数 <InlineMath math="x" /> のとき： <InlineMath math="x^{\mathcal{M},\sigma} = \sigma(x)" /></li>
                    <li><InlineMath math="t" /> が定数記号 <InlineMath math="c" /> のとき： <InlineMath math="c^{\mathcal{M},\sigma} = c^\mathcal{M}" /></li>
                    <li><InlineMath math="t" /> が <InlineMath math="f(t_1, \ldots, t_n)" /> のとき： <InlineMath math="f(t_1, \ldots, t_n)^{\mathcal{M},\sigma} = f^\mathcal{M}(t_1^{\mathcal{M},\sigma}, \ldots, t_n^{\mathcal{M},\sigma})" /></li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-3 (項の解釈の計算)"
            >
                <p>
                    構造 <InlineMath math="\mathcal{M} = \mathbb{Z}" /> （通常の整数）を考え、項 <InlineMath math="t \equiv (x + 1) + y" /> の解釈を計算する。
                </p>
                <p>
                    変数への付値として、<InlineMath math="\sigma(x) = 3" />、<InlineMath math="\sigma(y) = -5" /> が与えられているとする。このとき、
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="x^{\mathcal{M},\sigma} = 3" /></li>
                    <li><InlineMath math="1^{\mathcal{M},\sigma} = 1" /> （定数の解釈）</li>
                    <li><InlineMath math="(x + 1)^{\mathcal{M},\sigma} = +^\mathbb{Z}(3, 1) = 4" /></li>
                    <li><InlineMath math="y^{\mathcal{M},\sigma} = -5" /></li>
                    <li><InlineMath math="((x + 1) + y)^{\mathcal{M},\sigma} = +^\mathbb{Z}(4, -5) = -1" /></li>
                </ul>
                <p>
                    結果として、この構造と付値のもとで項 <InlineMath math="t" /> は整数「<InlineMath math="-1" />」を指し示す。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>言語の記号に具体的な集合（対象領域）と演算・関係を割り当てたものを<strong>構造（モデル）</strong>と呼ぶ。</li>
                    <li>変数に構造の元を割り当てる写像を<strong>付値</strong>と呼ぶ。</li>
                    <li>構造と付値が与えられると、形式的な記号列である<strong>項</strong>は、対象領域 <InlineMath math="M" /> のただ一つの元へと翻訳（解釈）される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}