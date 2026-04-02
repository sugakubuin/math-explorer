import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfUFD() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                整数環 <InlineMath math="\mathbb{Z}" /> では、どんな整数も素数の積に一意に分解できました（算術の基本定理）。この「一意な素因数分解ができる」という性質を抽象化したものが「一意分解整域（UFD）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">UFD の公理</h2>

            <p className="leading-relaxed">
                まずは UFD の厳密な定義を与えましょう。分解の「存在」と「一意性」の2つの条件から成り立っています。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 (一意分解整域)">
                <p>
                    整域 <InlineMath math="D" /> が<b>一意分解整域（Unique Factorization Domain, 略して UFD）</b>であるとは、以下の2つの条件を満たすことである。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b>分解の存在：</b> <InlineMath math="D" /> の任意の元（<InlineMath math="0" /> でなく単元でもないもの）は、有限個の既約元の積 <InlineMath math="p_1 p_2 \cdots p_n" /> として表すことができる。
                    </li>
                    <li>
                        <b>分解の一意性：</b> その分解は、単元倍と順序の違いを除いて一意である。すなわち、2通りの既約分解
                        <BlockMath math="p_1 p_2 \cdots p_n = q_1 q_2 \cdots q_m" />
                        があったとすると、<InlineMath math="n = m" /> であり、かつ <InlineMath math="q_j" /> の順序を適切に並べ替えることで、各 <InlineMath math="i" /> に対して <InlineMath math="p_i = u_i q_i" /> となる単元 <InlineMath math="u_i" /> が存在するようにできる。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                整数環における一意分解を確認し、「単元倍を除いて」という条件が何を意味しているのかを理解しましょう。
            </p>

            <ContentBox type="example" title={<span>Example 7.2-1 (<InlineMath math="\mathbb{Z}" /> は UFD)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> は UFD である。<InlineMath math="60" /> という整数の既約分解（素因数分解）を考える。
                </p>
                <BlockMath math="60 = 2 \cdot 2 \cdot 3 \cdot 5" />
                <p>
                    この分解は一意であるが、例えば負の数を使って以下のように書くこともできる。
                </p>
                <BlockMath math="60 = (-2) \cdot (-2) \cdot 3 \cdot 5" />
                <BlockMath math="-60 = (-1) \cdot 2 \cdot 2 \cdot 3 \cdot 5" />
                <p>
                    これらは見かけ上異なる分解であるが、<InlineMath math="-2 = (-1) \cdot 2" /> のように単元（<InlineMath math="\pm 1" />）を掛けただけの違いであるため、UFD の定義においては「同じ分解」とみなされる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一方で、前節で登場した環では分解の一意性が成り立ちません。
            </p>

            <ContentBox type="example" title={<span>Example 7.2-2 (<InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> は UFD でない)</span>}>
                <p>
                    環 <InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> において、<InlineMath math="6" /> を2通りの方法で分解する。
                </p>
                <BlockMath math="6 = 2 \cdot 3" />
                <BlockMath math="6 = (1+\sqrt{-5})(1-\sqrt{-5})" />
                <p>
                    ここに出現した <InlineMath math="2, 3, 1+\sqrt{-5}, 1-\sqrt{-5}" /> はすべてノルムを用いた議論（Example 7.1-1 参照）により既約元であることがわかる。
                </p>
                <p>
                    しかし、<InlineMath math="2" /> と <InlineMath math="1+\sqrt{-5}" /> などは単元倍（<InlineMath math="\pm 1" /> 倍）で移り合う関係にはない。したがって、この環では分解の一意性が成り立たず、UFD ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">UFD での素元・既約元の同値性</h2>

            <p className="leading-relaxed">
                前節で予告した通り、UFD という良い性質を持った環の中では「既約元」と「素元」の概念が完全に一致します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (UFD では素元と既約元が一致)">
                <p>
                    一意分解整域（UFD）において、元 <InlineMath math="p" /> が素元であることと、既約元であることは同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    「素元ならば既約元」であることは一般の整域で成立する（Proposition 7.1-1）。ここでは UFD の性質を用いて「既約元ならば素元」であることを示す。
                </p>
                <p>
                    <InlineMath math="p" /> を UFD の既約元とする。<InlineMath math="p \mid ab" /> と仮定する。このとき、ある元 <InlineMath math="c" /> が存在して <InlineMath math="ab = pc" /> と書ける。
                </p>
                <p>
                    <InlineMath math="a" /> と <InlineMath math="b" /> をそれぞれ既約分解し、さらに <InlineMath math="c" /> も既約分解する。
                </p>
                <BlockMath math="a = q_1 \cdots q_k, \quad b = r_1 \cdots r_l, \quad c = s_1 \cdots s_m" />
                <p>
                    これらを <InlineMath math="ab = pc" /> に代入すると、
                </p>
                <BlockMath math="q_1 \cdots q_k r_1 \cdots r_l = p s_1 \cdots s_m" />
                <p>
                    という2通りの既約分解が得られる（<InlineMath math="p" /> は既約元だからそのままでよい）。
                </p>
                <p>
                    UFD における分解の一意性より、右辺の <InlineMath math="p" /> は左辺の既約元のいずれかと単元倍を除いて一致しなければならない。すなわち、ある <InlineMath math="q_i" /> か <InlineMath math="r_j" /> が <InlineMath math="p" /> と同伴（単元倍で等しい）である。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>もし <InlineMath math="p" /> がある <InlineMath math="q_i" /> と同伴ならば、<InlineMath math="p \mid a" /> である。</li>
                    <li>もし <InlineMath math="p" /> がある <InlineMath math="r_j" /> と同伴ならば、<InlineMath math="p \mid b" /> である。</li>
                </ul>
                <p className="mt-2">
                    いずれにせよ <InlineMath math="p \mid a" /> または <InlineMath math="p \mid b" /> が導かれるため、<InlineMath math="p" /> は素元の定義を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理により、UFD では「これ以上割れない数（既約元）」と「積を割るならどちらかを割る数（素元）」という2つの性質を自由に使い分けることができます。
            </p>

            <ContentBox type="example" title={<span>Example 7.2-3 (<InlineMath math="\mathbb{Z}" /> での確認)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> では、<InlineMath math="5" /> は素数（既約元）である。<InlineMath math="15 = 3 \cdot 5" /> は <InlineMath math="5" /> で割り切れる（<InlineMath math="5 \mid 15" />）。
                </p>
                <p>
                    素元の性質（<InlineMath math="p \mid ab \implies p \mid a \text{ または } p \mid b" />）に当てはめると、<InlineMath math="5 \mid 3 \cdot 5" /> より <InlineMath math="5 \mid 3" /> または <InlineMath math="5 \mid 5" /> となるが、確かに <InlineMath math="5 \mid 5" /> が成立している。
                </p>
                <p>
                    また、<InlineMath math="10 = 2 \cdot 5" /> の場合も <InlineMath math="5 \mid 10 \implies 5 \mid 2 \text{ または } 5 \mid 5" /> であり、同様に成立する。UFD である <InlineMath math="\mathbb{Z}" /> においては、素数（既約元）は常に素元として機能していることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>任意の非零非単元の元が、既約元の積として「順序と単元倍を除いて一意に」分解できる整域を<b>一意分解整域（UFD）</b>という。</li>
                    <li><InlineMath math="\mathbb{Z}" /> は UFD であるが、<InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> は UFD ではない。</li>
                    <li>UFD においては、既約元であることと素元であることは完全に同値になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
