import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaloisGroupOfCyclotomicFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で1の原始 <InlineMath math="n" /> 乗根 <InlineMath math="\zeta_n" /> の最小多項式が円分多項式 <InlineMath math="\Phi_n(x)" /> であることを見ました。本節では、<InlineMath math="\zeta_n" /> を添加して作られる「円分体」のガロア群が、非常に分かりやすい群（整数の乗法群）と同型になることを証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">円分体とそのガロア群</h2>

            <p>
                有理数体に <InlineMath math="\zeta_n" /> を添加した体を円分体と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 6.2-1 (円分体)">
                <p>
                    有理数体 <InlineMath math="\mathbb{Q}" /> に 1 の原始 <InlineMath math="n" /> 乗根 <InlineMath math="\zeta_n" /> を添加した体 <InlineMath math="\mathbb{Q}(\zeta_n)" /> を、<strong><InlineMath math="n" /> 次円分体（<InlineMath math="n" />-th cyclotomic field）</strong>という。
                </p>
                <p>
                    前節の定理より、拡大次数はオイラーのトーシェント関数を用いて <InlineMath math="[\mathbb{Q}(\zeta_n) : \mathbb{Q}] = \varphi(n)" /> となる。また、<InlineMath math="\zeta_n" /> の累乗を考えることで 1 の <InlineMath math="n" /> 乗根はすべてこの体に含まれるため、<InlineMath math="\mathbb{Q}(\zeta_n)" /> は <InlineMath math="x^n-1" /> の分解体であり、<InlineMath math="\mathbb{Q}" /> 上の<strong>ガロア拡大</strong>となる。
                </p>
            </ContentBox>

            <p>
                この円分体のガロア群は、剰余類の乗法群という馴染み深い群と同型になります。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (円分体のガロア群)">
                <p>
                    <InlineMath math="n" /> 次円分体 <InlineMath math="\mathbb{Q}(\zeta_n)" /> のガロア群は、<InlineMath math="n" /> を法とする既約剰余類の乗法群と同型である。
                </p>
                <BlockMath math="\mathrm{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^\times" />
                <p>
                    具体的な同型写像は、<InlineMath math="k \in (\mathbb{Z}/n\mathbb{Z})^\times" /> に対して、自己同型 <InlineMath math="\sigma_k" /> を
                </p>
                <BlockMath math="\sigma_k(\zeta_n) = \zeta_n^k" />
                <p>
                    と定めることで与えられる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    自己同型 <InlineMath math="\sigma \in \mathrm{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q})" /> は <InlineMath math="\zeta_n" /> の行き先によって完全に決定される。<InlineMath math="\sigma(\zeta_n)" /> もまた最小多項式 <InlineMath math="\Phi_n(x)" /> の根でなければならないから、<InlineMath math="\sigma(\zeta_n) = \zeta_n^k" /> （<InlineMath math="\gcd(k, n) = 1" />）という形に限られる。このような写像を <InlineMath math="\sigma_k" /> と書く。
                </p>
                <p>
                    写像の合成を考えると、
                </p>
                <BlockMath math="\sigma_l(\sigma_k(\zeta_n)) = \sigma_l(\zeta_n^k) = (\sigma_l(\zeta_n))^k = (\zeta_n^l)^k = \zeta_n^{kl}" />
                <p>
                    となるため、<InlineMath math="\sigma_l \circ \sigma_k = \sigma_{kl}" /> が成り立つ。これは対応 <InlineMath math="k \mapsto \sigma_k" /> が乗法を保つ群準同型であることを意味する。
                </p>
                <p>
                    <InlineMath math="\sigma_k = \mathrm{id}" /> とすると、<InlineMath math="\zeta_n^k = \zeta_n" /> となり、<InlineMath math="\zeta_n^{k-1} = 1" />。<InlineMath math="\zeta_n" /> は原始 <InlineMath math="n" /> 乗根だから <InlineMath math="n \mid (k-1)" />、すなわち <InlineMath math="k \equiv 1 \pmod{n}" /> となる。よってこの準同型は単射である。
                </p>
                <p>
                    両群の位数を比較すると、<InlineMath math="|\mathrm{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q})| = [\mathbb{Q}(\zeta_n):\mathbb{Q}] = \varphi(n)" /> であり、<InlineMath math="|(\mathbb{Z}/n\mathbb{Z})^\times| = \varphi(n)" /> である。有限集合間の単射で位数が等しいから、全単射（同型）である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-1 (5次円分体のガロア群)">
                <p>
                    <InlineMath math="\mathbb{Q}(\zeta_5)/\mathbb{Q}" /> を考える。ガロア群は <InlineMath math="(\mathbb{Z}/5\mathbb{Z})^\times = \{1, 2, 3, 4\}" /> に同型である。この群は位数 4 の巡回群 <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> と同型である。
                </p>
                <p>
                    自己同型 <InlineMath math="\sigma_2(\zeta_5) = \zeta_5^2" /> が生成元になることを確認しよう。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\sigma_2(\zeta_5) = \zeta_5^2" /></li>
                    <li><InlineMath math="\sigma_2^2(\zeta_5) = (\zeta_5^2)^2 = \zeta_5^4" /></li>
                    <li><InlineMath math="\sigma_2^3(\zeta_5) = (\zeta_5^4)^2 = \zeta_5^8 = \zeta_5^3" /> （<InlineMath math="\zeta_5^5 = 1" /> より）</li>
                    <li><InlineMath math="\sigma_2^4(\zeta_5) = (\zeta_5^3)^2 = \zeta_5^6 = \zeta_5" /></li>
                </ul>
                <p>
                    確かに <InlineMath math="\sigma_2" /> を4回作用させて初めて元に戻り、すべての根（1, 2, 4, 3乗）を巡回している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">円分体のガロア対応</h2>

            <p>
                円分体のガロア群はアーベル群（可換群）になるため、部分群と中間体の構造も非常に綺麗になります。
            </p>

            <ContentBox type="example" title="Example 6.2-2 (8次円分体のガロア対応)">
                <p>
                    <InlineMath math="K = \mathbb{Q}(\zeta_8)" /> を考える。ガロア群は <InlineMath math="G \cong (\mathbb{Z}/8\mathbb{Z})^\times = \{\bar{1}, \bar{3}, \bar{5}, \bar{7}\}" /> である。この群の各元の平方はすべて <InlineMath math="\bar{1}" /> になる（<InlineMath math="3^2=9\equiv1" />等）ため、巡回群ではなくクラインの4群 <InlineMath math="(\mathbb{Z}/2\mathbb{Z})^2" /> と同型である。
                </p>
                <p>
                    <InlineMath math="\zeta_8 = \cos(\pi/4) + i\sin(\pi/4) = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}" /> である。
                </p>
                <p>
                    群 <InlineMath math="G" /> の位数2の部分群は3つある。それぞれに対応する中間体（固定体）を求める。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="H_1 = \{1, 7\}" />：自己同型 <InlineMath math="\sigma_7" /> は <InlineMath math="\zeta_8 \mapsto \zeta_8^7 = \zeta_8^{-1} = \bar{\zeta_8}" /> （複素共役）である。これで固定されるのは実数なので、<InlineMath math="K \cap \mathbb{R} = \mathbb{Q}(\zeta_8 + \zeta_8^{-1}) = \mathbb{Q}(\sqrt{2})" /> が固定体となる。</li>
                    <li><InlineMath math="H_2 = \{1, 5\}" />：<InlineMath math="\sigma_5" /> は <InlineMath math="\zeta_8 \mapsto \zeta_8^5 = -\zeta_8" />。<InlineMath math="\zeta_8^2 = i" /> は <InlineMath math="\sigma_5(i) = \sigma_5(\zeta_8^2) = (-\zeta_8)^2 = \zeta_8^2 = i" /> となり固定される。よって固定体は <InlineMath math="\mathbb{Q}(i)" />。</li>
                    <li><InlineMath math="H_3 = \{1, 3\}" />：<InlineMath math="\sigma_3" /> は <InlineMath math="\zeta_8 \mapsto \zeta_8^3" />。<InlineMath math="\zeta_8 - \zeta_8^3 = \sqrt{2}i = \sqrt{-2}" /> が固定されるため、固定体は <InlineMath math="\mathbb{Q}(\sqrt{-2})" />。</li>
                </ul>
                <p>
                    これらの部分群はすべて正規部分群（アーベル群の部分群だから）なので、これらの中間体はすべて <InlineMath math="\mathbb{Q}" /> 上の正規拡大である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (クロネッカー-ウェーバーの定理)">
                <p>
                    <InlineMath math="\mathbb{Q}" /> 上の円分体、およびその中間体はすべてアーベル拡大（ガロア群が可換群となる拡大）です。
                </p>
                <p>
                    実はこの逆として、<strong>「有理数体上のすべてのアーベル拡大は、ある適当な円分体の中間体として得られる」</strong>という驚異的な定理が存在します。これをクロネッカー-ウェーバーの定理と呼び、代数的整数論（類体論）への扉を開く非常に深い結果として知られています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\mathbb{Q}(\zeta_n)/\mathbb{Q}" /> は拡大次数 <InlineMath math="\varphi(n)" /> のガロア拡大である。</li>
                    <li>ガロア群は剰余類の乗法群 <InlineMath math="(\mathbb{Z}/n\mathbb{Z})^\times" /> と同型であり、その作用は <InlineMath math="\zeta_n \mapsto \zeta_n^k" /> で与えられる。</li>
                    <li>ガロア群がアーベル群であるため、円分体の中間体はすべて有理数体上の正規拡大となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
