import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function NormalOperators() {
    return (
        <React.Fragment>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
                <p>
                    自己随伴作用素（<InlineMath math="T^* = T" />）やユニタリ作用素（<InlineMath math="T^* = T^{-1}" />）は、いずれも「あるもっと広い、ひとつの性質」を持つ作用素の特別な場合です。<br />
                    その「広い性質」を持つ作用素こそが、次章で学ぶ線形代数のハイライト「スペクトル定理（ Spectral Theorem ）」の主役となる<strong>正規作用素（Normal Operator）</strong>です。
                </p>

                <hr className="my-8 border-slate-200 dark:border-slate-700" />

                <h2 className="text-2xl font-bold mt-8 mb-6">正規作用素の定義</h2>

                <p>
                    正規作用素とは、簡単に言えば「自分自身と、自分の随伴作用素とが、掛け算の順序を交換しても結果が変わらない（可換である）作用素」のことです。
                </p>

                <ContentBox type="definition" title="Definition 10.3-1 （正規作用素 / Normal Operator）">
                    <p>
                        内積空間 <InlineMath math="V" /> 上の作用素 <InlineMath math="T" /> とその随伴作用素 <InlineMath math="T^*" /> について、以下の<strong>交換関係（可換性）</strong>が成り立つとき、<InlineMath math="T" /> を<strong>正規作用素（Normal Operator）</strong>と呼ぶ。
                    </p>
                    <BlockMath math="T T^* = T^* T" />
                </ContentBox>

                <ContentBox type="remark" title="前節の作用素との包含関係">
                    <p>
                        前節で学んだ3つの重要な作用素は、<strong>すべて正規作用素の部分集合（特別なケース）</strong>になっています。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                            <strong>自己随伴作用素（<InlineMath math="T^* = T" />）：</strong><br />
                            <InlineMath math="T T^* = T T = T^2" />、<InlineMath math="T^* T = T T = T^2" /> より、明らかに <InlineMath math="T T^* = T^* T" /> を満たす。よって正規作用素である。
                        </li>
                        <li>
                            <strong>歪自己随伴作用素（<InlineMath math="T^* = -T" />）：</strong><br />
                            <InlineMath math="T T^* = T (-T) = -T^2" />、<InlineMath math="T^* T = (-T) T = -T^2" /> より、<InlineMath math="T T^* = T^* T" /> を満たす。よって正規作用素である。
                        </li>
                        <li>
                            <strong>ユニタリ作用素（<InlineMath math="T^* = T^{-1}" />）：</strong><br />
                            <InlineMath math="T T^* = T T^{-1} = I" />、<InlineMath math="T^* T = T^{-1} T = I" /> より、<InlineMath math="T T^* = T^* T" /> を満たす。よって正規作用素である。
                        </li>
                    </ul>
                    <p className="mt-2">
                        つまり、自己随伴作用素（対称・エルミート行列）、歪自己随伴作用素（交代・歪エルミート行列）、ユニタリ作用素（直交・ユニタリ行列）は、すべて「正規作用素」という大きな傘の下にまとめられるのです。
                    </p>
                </ContentBox>


                <hr className="my-8 border-slate-200 dark:border-slate-700" />

                <h2 className="text-2xl font-bold mt-8 mb-6">スペクトル定理への橋渡し</h2>

                <p>
                    「掛け算の順序を交換してもよい」だけの性質がなぜそれほど重要なのでしょうか。<br />
                    それは、正規作用素が<strong>「ユニタリ行列（直交行列）によって対角化可能である」ための必要十分条件</strong>になっているからです。
                </p>

                <ContentBox type="remark" title="予告：正規行列の対角化可能性（スペクトル定理）">
                    <p>
                        Chapter 11 以降で証明する最も重要な定理の一つ（スペクトル定理）は、次のように述べています。
                    </p>
                    <blockquote className="border-l-4 border-slate-300 dark:border-slate-500 pl-4 italic text-slate-700 dark:text-slate-300">
                        「複素行列 <InlineMath math="A" /> がユニタリ行列 <InlineMath math="U" /> によって対角化可能である（すなわちある対角行列 <InlineMath math="D" /> に対して <InlineMath math="U^{-1}AU = D" /> となる）ことの<strong>必要十分条件</strong>は、行列 <InlineMath math="A" /> が正規行列（<InlineMath math="AA^* = A^*A" />）であることである。」
                    </blockquote>
                    <p>
                        つまり、どんなに複雑に見える変換であっても、「正規作用素」であるとさえ分かれば、適切な「正規直交基底」を選ぶことで、その変換を単なる「各成分への独立した定数倍（対角化）」として極めてシンプルに表現できることが約束されています。<br />
                        そして、対称行列（自己随伴）や直交行列（ユニタリ）はみな正規作用素の仲間であるため、当然のことながら直交対角化が可能であることが後ほど証明されます。
                    </p>
                </ContentBox>

                <p>
                    本章で構築した「随伴作用素・直交（ユニタリ）作用素・正規作用素」の概念を手斧として、次章からはいよいよ「どんな行列が、どのようにして美しい対角行列へと分解（直交対角化）されるのか」という、このコース最大の山場へと進んでいきます。
                </p>

                {/* まとめ */}
                <ContentBox type="note" title="§10.3 のまとめ">
                    <ul className="list-disc list-inside space-y-1">
                        <li>作用素 <InlineMath math="T" /> とその随伴 <InlineMath math="T^*" /> が可換（<InlineMath math="T T^* = T^* T" />）であるとき、<InlineMath math="T" /> を<strong>正規作用素（Normal Operator）</strong>または<strong>正規行列（Normal Matrix）</strong>と呼ぶ（Definition 10.3-1）。</li>
                        <li>自己随伴・歪自己随伴・ユニタリ作用素はすべて正規作用素の特殊なケース（部分集合）である。</li>
                        <li>正規作用素であることは、「ユニタリ対角化可能である（ユニタリ行列で対角行列に変形できる）」ための必要十分条件であり、これは線形代数における究極の目標の一つ（スペクトル定理）へと直結している。</li>
                    </ul>
                </ContentBox>
            </div>
        </React.Fragment>
    );
}
