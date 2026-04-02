import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NaturalNumbersConstruction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数えるための道具である「自然数」。私たちは幼い頃からこれに親しんでいますが、数学的に「自然数とは何か」を定義しようとすると、意外にも深い議論が必要になります。
                このセクションでは、自然数を特徴づける最小限のルールである<strong>ペアノの公理</strong>と、空集合のみを材料に自然数を作り上げる<strong>フォン・ノイマンの構成法</strong>を学び、数の正体に迫ります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ペアノの公理</h2>

            <p>
                19世紀、ジュゼッペ・ペアノは自然数が満たすべき本質的な性質を、以下の5つの公理にまとめました。
            </p>

            <ContentBox type="definition" title="Axiom 4.4-1 (ペアノの公理)">
                <p>
                    集合 <InlineMath math="\mathbb{N}" />、その特定の元 <InlineMath math="0" />、および写像 <InlineMath math="s \colon \mathbb{N} \to \mathbb{N}" />（後者関数：<InlineMath math="n" /> に対しその「次」の数を対応させる）について、以下を満たす。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><InlineMath math="0 \in \mathbb{N}" /> である。</li>
                    <li>任意の <InlineMath math="n \in \mathbb{N}" /> に対して、<InlineMath math="s(n) \in \mathbb{N}" /> である。</li>
                    <li>任意の <InlineMath math="n \in \mathbb{N}" /> に対して、<InlineMath math="s(n) \neq 0" /> である。（<InlineMath math="0" /> は誰の後者でもない）。</li>
                    <li><InlineMath math="s(n) = s(m) \implies n = m" /> である。（後者関数は単射である）。</li>
                    <li><InlineMath math="\mathbb{N}" /> の部分集合 <InlineMath math="K" /> が「<InlineMath math="0 \in K" />」かつ「<InlineMath math="n \in K \implies s(n) \in K" />」を満たすなら、<InlineMath math="K = \mathbb{N}" /> である。</li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                公理(5)はまさに「数学的帰納法の原理」そのものです。この一握りのルールから、足し算や掛け算、そして自然数の全構造が導き出されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">集合論的な自然数の構成</h2>

            <p>
                ペアノの公理は「性質」を述べていますが、集合論では「空集合」だけを使って、この公理を満たす実体を具体的に作ることができます。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 (フォン・ノイマンの自然数)">
                <p>
                    自然数 <InlineMath math="n" /> を、「自分より小さい自然数すべてを集めた集合」として構成する。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li><InlineMath math="0 = \emptyset" /></li>
                    <li><InlineMath math="1 = \{0\} = \{ \emptyset \}" /></li>
                    <li><InlineMath math="2 = \{0, 1\} = \{ \emptyset, \{ \emptyset \} \}" /></li>
                    <li><InlineMath math="3 = \{0, 1, 2\} = \{ \emptyset, \{ \emptyset \}, \{ \emptyset, \{ \emptyset \} \} \}" /></li>
                </ul>
                <p className="mt-4">
                    一般に、<InlineMath math="n" /> の「次」の数 <InlineMath math="s(n)" /> は、次のように定義される：
                    <BlockMath math="s(n) = n \cup \{n\}" />
                </p>
            </ContentBox>

            <p className="mt-4">
                この驚くべき構成法により、自然数 <InlineMath math="n" /> はちょうど <InlineMath math="n" /> 個の元を持つ集合となり、さらに包含関係 <InlineMath math="n \subset m" /> がそのまま大小関係 <InlineMath math="n \le m" /> と一致します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">帰納的定義の原理</h2>

            <p>
                自然数が構成されると、私たちは「前の値を使って次の値を定義する」という<strong>再帰的定義</strong>が可能になります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (帰納的定義の原理)">
                <p>
                    集合 <InlineMath math="X" />、その元 <InlineMath math="x_0 \in X" />、および写像 <InlineMath math="f \colon X \to X" /> が与えられたとき、
                    次を満たす写像 <InlineMath math="a \colon \mathbb{N} \to X" /> が一意に存在する。
                </p>
                <ol className="list-decimal list-inside mt-4 ml-4 space-y-2">
                    <li><InlineMath math="a(0) = x_0" /></li>
                    <li>任意の <InlineMath math="n \in \mathbb{N}" /> に対して、<InlineMath math="a(s(n)) = f(a(n))" /></li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                この原理により、例えば足し算 <InlineMath math="m + n" /> は「<InlineMath math="m" /> に後者関数を <InlineMath math="n" /> 回適用する」操作として厳密に定義できるようになります。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ペアノの公理</strong>は、自然数が持つべき本質的な5つの性質（特に帰納法）を定めたものである。</li>
                    <li><strong>フォン・ノイマンの構成法</strong>を使えば、空集合のみからペアノの公理を満たす「自然数」という実体を集合論的に作り出せる。</li>
                    <li><strong>帰納的定義の原理</strong>は、数列の漸化式のような再帰的な定義が常に数学的に正当であることを保証している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
