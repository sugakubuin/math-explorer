import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormalSubgroupsAndNormalExtensions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ガロアの基本定理によって「中間体」と「部分群」が一対一に対応することがわかりました。では、中間体が「正規拡大（えこひいきしない良い拡大）」になるという代数的な性質は、群論の言葉ではどのような性質に対応するのでしょうか。その答えが「正規部分群」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規部分群と正規拡大の対応</h2>

            <p>
                「正規」という同じ名前が冠されている通り、体の正規性と群の正規性はガロア対応を通して完全に一致します。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1 (正規部分群と正規拡大の対応)">
                <p>
                    <InlineMath math="K/F" /> をガロア拡大、<InlineMath math="G = \mathrm{Gal}(K/F)" /> とする。部分群 <InlineMath math="H \leq G" /> と、それに対応する中間体 <InlineMath math="E = K^H" /> について、以下の2つは同値である。
                </p>
                <ol className="list-decimal list-inside mt-2 mb-2">
                    <li><InlineMath math="H" /> は <InlineMath math="G" /> の<strong>正規部分群</strong>である（<InlineMath math="H \trianglelefteq G" />）。</li>
                    <li>中間体 <InlineMath math="E" /> は <InlineMath math="F" /> 上の<strong>正規拡大</strong>である（したがってガロア拡大となる）。</li>
                </ol>
                <p>
                    さらに、この条件が満たされるとき、<InlineMath math="E/F" /> のガロア群は、<InlineMath math="G" /> の <InlineMath math="H" /> による<strong>剰余群</strong>に同型となる。
                </p>
                <BlockMath math="\mathrm{Gal}(E/F) \cong G/H" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （同値性の証明の概略）<br />
                    任意の <InlineMath math="\sigma \in G" /> について、<InlineMath math="\sigma" /> が中間体 <InlineMath math="E" /> をどこに写すかを考える。<InlineMath math="\sigma(E)" /> の元を固定する自己同型群を計算すると、それは共役部分群 <InlineMath math="\sigma H \sigma^{-1}" /> になることがわかる（<InlineMath math="h \in H" /> のとき <InlineMath math="(\sigma h \sigma^{-1})(\sigma x) = \sigma h(x) = \sigma(x)" /> より）。
                </p>
                <p>
                    <InlineMath math="E/F" /> が正規拡大であるとは、<InlineMath math="E" /> の元を <InlineMath math="\sigma" /> で写しても <InlineMath math="E" /> の中にとどまる、すなわち <InlineMath math="\sigma(E) = E" /> がすべての <InlineMath math="\sigma \in G" /> で成り立つことと同値である。<InlineMath math="\sigma(E) = E" /> であれば、対応する固定部分群も一致しなければならないので <InlineMath math="\sigma H \sigma^{-1} = H" /> となり、<InlineMath math="H" /> は正規部分群となる。逆も同様に辿れる。
                </p>
                <p>
                    （剰余群の同型について）<br />
                    <InlineMath math="E/F" /> が正規拡大であるとき、各自己同型 <InlineMath math="\sigma \in G" /> は <InlineMath math="E" /> の元を <InlineMath math="E" /> の元に写す。したがって、<InlineMath math="\sigma" /> の定義域を <InlineMath math="E" /> に制限した写像 <InlineMath math="\sigma|_E" /> は、<InlineMath math="E" /> の <InlineMath math="F" />-自己同型、すなわち <InlineMath math="\mathrm{Gal}(E/F)" /> の元となる。
                </p>
                <p>
                    この制限を与える写像 <InlineMath math="\Phi : G \to \mathrm{Gal}(E/F) \quad (\sigma \mapsto \sigma|_E)" /> を考えると、これは群の準同型である。<InlineMath math="\Phi(\sigma) = \mathrm{id}_E" /> となるのは、<InlineMath math="\sigma" /> が <InlineMath math="E" /> のすべての元を固定するとき、つまり <InlineMath math="\sigma \in \mathrm{Gal}(K/E) = H" /> のときである。よって <InlineMath math="\ker \Phi = H" />。
                </p>
                <p>
                    また、正規拡大なら任意の自己同型が上まで拡張できるため <InlineMath math="\Phi" /> は全射である。群の第一同型定理より、
                </p>
                <BlockMath math="G/\ker \Phi = G/H \cong \mathrm{Im} \Phi = \mathrm{Gal}(E/F)" />
                <p>
                    が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理の美しい対応関係を、具体的な群 <InlineMath math="S_3" /> で確認します。
            </p>

            <ContentBox type="example" title="Example 5.4-1 (S_3 の正規部分群と正規中間拡大)">
                <p>
                    <InlineMath math="K = \mathbb{Q}(\sqrt[3]{2}, \omega)" /> のガロア群 <InlineMath math="G \cong S_3" /> を考える。<InlineMath math="S_3" /> は非可換群であり、すべての部分群が正規とは限らない。
                </p>
                <p>
                    <InlineMath math="S_3" /> の位数3の部分群（交代群 <InlineMath math="A_3" /> に相当） <InlineMath math="H = \langle \sigma \rangle \cong \mathbb{Z}/3\mathbb{Z}" /> は、指数が 2 であるため<strong>正規部分群</strong>である（一般に指数2の部分群は正規）。
                </p>
                <p>
                    これに対応する中間体は <InlineMath math="E = \mathbb{Q}(\omega)" /> であった。<InlineMath math="\omega" /> の最小多項式 <InlineMath math="x^2+x+1" /> は <InlineMath math="\mathbb{Q}(\omega)" /> で完全分解するため、<InlineMath math="E/\mathbb{Q}" /> は確かに<strong>正規拡大</strong>である。また、<InlineMath math="\mathrm{Gal}(\mathbb{Q}(\omega)/\mathbb{Q}) \cong S_3/A_3 \cong \mathbb{Z}/2\mathbb{Z}" /> も成立する。
                </p>
                <p>
                    一方、<InlineMath math="S_3" /> の位数2の部分群 <InlineMath math="H' = \langle \tau \rangle" /> （<InlineMath math="\tau" /> は複素共役）は<strong>正規部分群ではない</strong>。これに対応する中間体は <InlineMath math="E' = \mathbb{Q}(\sqrt[3]{2})" /> であったが、これは先ほど見たように <InlineMath math="x^3-2" /> の根を1つしか含まないため<strong>正規拡大ではない</strong>。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アーベル拡大</h2>

            <p>
                ガロア群がアーベル群（可換群）であるような拡大を、その名にちなんでアーベル拡大と呼びます。アーベル拡大は非常に扱いやすい性質を持っています。
            </p>

            <ContentBox type="remark" title="Remark (アーベル拡大の性質)">
                <p>
                    ガロア群 <InlineMath math="G" /> がアーベル群であるとき、その代数拡大 <InlineMath math="K/F" /> を<strong>アーベル拡大（Abelian extension）</strong>と呼びます。
                </p>
                <p>
                    アーベル群においては、その<strong>すべての部分群が正規部分群</strong>となります。したがって、定理 5.4-1 により、アーベル拡大の<strong>いかなる中間体 <InlineMath math="E" /> も、必ず基礎体 <InlineMath math="F" /> 上の正規拡大（ガロア拡大）になる</strong>という強力な性質を持ちます。
                </p>
                <p>
                    第6章で学ぶ「円分体」は、有理数体上のアーベル拡大の最も典型的かつ重要な例です。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-2 (Q(√2,√3) はアーベル拡大)">
                <p>
                    <InlineMath math="K = \mathbb{Q}(\sqrt{2},\sqrt{3})" /> のガロア群は <InlineMath math="(\mathbb{Z}/2\mathbb{Z})^2" /> であり、これはアーベル群である。
                </p>
                <p>
                    したがって、すべての中間体（<InlineMath math="\mathbb{Q}(\sqrt{2})" />、<InlineMath math="\mathbb{Q}(\sqrt{3})" />、<InlineMath math="\mathbb{Q}(\sqrt{6})" />）は、いずれも <InlineMath math="\mathbb{Q}" /> 上の正規拡大である。実際、それぞれが2次方程式の根を完全なペア（<InlineMath math="\pm\sqrt{2}" /> など）で含んでいることから正規性が確認できる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ガロア群の<strong>正規部分群</strong> <InlineMath math="H \trianglelefteq G" /> は、基礎体上の<strong>正規拡大（ガロア拡大）</strong>である中間体 <InlineMath math="E" /> に対応する。</li>
                    <li>このとき、中間体までのガロア群は剰余群と同型になる：<InlineMath math="\mathrm{Gal}(E/F) \cong G/H" />。</li>
                    <li>ガロア群が可換群である<strong>アーベル拡大</strong>では、すべての中間体が正規拡大となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
