import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaloisExtensions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで「分離拡大（重根を持たない）」と「正規拡大（根をすべて含む）」という2つの良い性質を持つ拡大について学んできました。本章では、この2つの条件を同時に満たす「ガロア拡大」という理想的な舞台において、体と群の間に存在する美しい対応関係（ガロア理論）を展開します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガロア拡大とガロア群</h2>

            <p>
                まずは、ガロア理論の主役である「ガロア拡大」と「ガロア群」を定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (ガロア拡大)">
                <p>
                    有限次拡大 <InlineMath math="K/F" /> が<strong>ガロア拡大（Galois extension）</strong>であるとは、<InlineMath math="K/F" /> が<strong>正規拡大かつ分離拡大</strong>であること。
                </p>
                <p>
                    同値な条件として、<InlineMath math="K" /> の <InlineMath math="F" />-自己同型群の位数が、拡大次数とぴったり一致すること（<InlineMath math="|\mathrm{Aut}_F(K)| = [K:F]" />）が挙げられる。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 5.1-2 (ガロア群)">
                <p>
                    ガロア拡大 <InlineMath math="K/F" /> に対して、<InlineMath math="F" /> の各元を固定する <InlineMath math="K" /> の自己同型写像の全体がなす群を <strong>ガロア群（Galois group）</strong> と呼び、<InlineMath math="\mathrm{Gal}(K/F)" /> で表す。
                </p>
                <BlockMath math="\mathrm{Gal}(K/F) = \mathrm{Aut}_F(K) = \{\sigma : K \xrightarrow{\sim} K \mid \sigma|_F = \mathrm{id}\}" />
                <p>
                    群の演算は写像の合成 <InlineMath math="\circ" /> である。
                </p>
            </ContentBox>

            <p>
                具体的な体拡大に対して、ガロア群を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 5.1-1 (Q(√2)/Q のガロア群)">
                <p>
                    <InlineMath math="\mathbb{Q}(\sqrt{2})/\mathbb{Q}" /> は、有理数体（標数0）上の正規拡大であるからガロア拡大である。拡大次数は <InlineMath math="[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2" />。
                </p>
                <p>
                    自己同型 <InlineMath math="\sigma" /> は <InlineMath math="\mathbb{Q}" /> を固定するため、<InlineMath math="\sigma(\sqrt{2})" /> の値だけで完全に決定される。<InlineMath math="(\sqrt{2})^2 = 2" /> を <InlineMath math="\sigma" /> で送ると、<InlineMath math="\sigma(\sqrt{2})^2 = \sigma(2) = 2" /> となるため、<InlineMath math="\sigma(\sqrt{2})" /> は <InlineMath math="x^2-2=0" /> の根（<InlineMath math="\pm\sqrt{2}" />）でなければならない。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\sigma(\sqrt{2}) = \sqrt{2}" /> のとき、<InlineMath math="\sigma" /> は恒等写像 <InlineMath math="\mathrm{id}" />。</li>
                    <li><InlineMath math="\sigma(\sqrt{2}) = -\sqrt{2}" /> のとき、<InlineMath math="\sigma" /> は <InlineMath math="\sigma(a+b\sqrt{2}) = a-b\sqrt{2}" /> という自己同型となる（複素共役の類似）。</li>
                </ul>
                <p>
                    よって <InlineMath math="\mathrm{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q}) = \{\mathrm{id}, \sigma\}" /> であり、位数は <InlineMath math="2" />。<InlineMath math="\mathbb{Z}/2\mathbb{Z}" /> に同型である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-2 (x^3 - 2 の分解体のガロア群)">
                <p>
                    <InlineMath math="K = \mathbb{Q}(\sqrt[3]{2}, \omega)" /> は <InlineMath math="x^3-2" /> の分解体であるため、<InlineMath math="\mathbb{Q}" /> 上のガロア拡大である。拡大次数は <InlineMath math="[K:\mathbb{Q}] = 6" />。
                </p>
                <p>
                    任意の <InlineMath math="\phi \in \mathrm{Gal}(K/\mathbb{Q})" /> は、<InlineMath math="\sqrt[3]{2}" /> を <InlineMath math="x^3-2=0" /> の根（<InlineMath math="\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^2\sqrt[3]{2}" /> のいずれか）に写し、<InlineMath math="\omega" /> を <InlineMath math="x^2+x+1=0" /> の根（<InlineMath math="\omega, \omega^2" /> のいずれか）に写さなければならない。
                </p>
                <p>
                    可能な組み合わせは <InlineMath math="3 \times 2 = 6" /> 通りあり、これらがすべて自己同型を定める。以下の2つの写像が群を生成する：
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\sigma" /> : <InlineMath math="\sqrt[3]{2} \mapsto \omega\sqrt[3]{2}" /> 、<InlineMath math="\omega \mapsto \omega" /> （位数は3）</li>
                    <li><InlineMath math="\tau" /> : <InlineMath math="\sqrt[3]{2} \mapsto \sqrt[3]{2}" /> 、<InlineMath math="\omega \mapsto \omega^2" /> （複素共役、位数は2）</li>
                </ul>
                <p>
                    これらの写像の合成を計算すると <InlineMath math="\tau\sigma = \sigma^2\tau" /> という関係式を満たす。これは3次対称群 <InlineMath math="S_3" /> （または二面体群 <InlineMath math="D_3" />）の表示式に他ならない。よって、<InlineMath math="\mathrm{Gal}(K/\mathbb{Q}) \cong S_3" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガロア拡大の条件確認</h2>

            <p>
                ある拡大がガロア拡大であるかどうかを判定するための、互いに同値な複数の条件を整理します。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1 (ガロア拡大の同値条件)">
                <p>
                    有限次拡大 <InlineMath math="K/F" /> について、以下の3つは同値である。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><InlineMath math="K/F" /> はガロア拡大（正規かつ分離的）である。</li>
                    <li><InlineMath math="K" /> は、<InlineMath math="F[x]" /> のある<strong>分離多項式の分解体</strong>である。</li>
                    <li><InlineMath math="|\mathrm{Aut}_F(K)| = [K:F]" /> である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （<InlineMath math="1 \Rightarrow 2" />） <InlineMath math="K/F" /> がガロア拡大であるとする。<InlineMath math="K" /> は有限次分離拡大なので、原始元定理より <InlineMath math="K = F(\alpha)" /> となる原始元 <InlineMath math="\alpha" /> が存在する。<InlineMath math="\alpha" /> の最小多項式 <InlineMath math="m(x)" /> は分離的であり、かつ <InlineMath math="K/F" /> の正規性から <InlineMath math="m(x)" /> は <InlineMath math="K" /> で完全分解する。すなわち <InlineMath math="K" /> は分離多項式 <InlineMath math="m(x)" /> の分解体である。
                </p>
                <p>
                    （<InlineMath math="2 \Rightarrow 3" />） <InlineMath math="K" /> が分離多項式 <InlineMath math="f(x)" /> の分解体であるとする。分解体の自己同型の拡張に関する定理（証明は省略するが帰納法による）から、分解体の <InlineMath math="F" />-自己同型の数は、その方程式の相異なる根の配置の数と正確に一致し、それが拡大次数 <InlineMath math="[K:F]" /> と等しくなることが示される。
                </p>
                <p>
                    （<InlineMath math="3 \Rightarrow 1" />） 一般に <InlineMath math="|\mathrm{Aut}_F(K)| \leq [K:F]" /> が成り立つことが知られている。等号が成立する場合、次節で学ぶアルティンの定理を用いると、<InlineMath math="K" /> の自己同型群による固定体がちょうど基礎体 <InlineMath math="F" /> に一致し、結果として <InlineMath math="K/F" /> が正規かつ分離的になることが従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ガロア拡大でない（同値条件が破綻する）例も確認しておきます。
            </p>

            <ContentBox type="example" title="Example 5.1-3 (ガロア拡大でない例)">
                <p>
                    拡大 <InlineMath math="\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}" /> を考える。これは正規拡大ではないため、ガロア拡大ではない。
                </p>
                <p>
                    同値条件 3 で確認してみよう。<InlineMath math="\mathbb{Q}(\sqrt[3]{2})" /> は実数の部分体である。自己同型 <InlineMath math="\sigma \in \mathrm{Aut}_\mathbb{Q}(\mathbb{Q}(\sqrt[3]{2}))" /> は、<InlineMath math="\sigma(\sqrt[3]{2})" /> を <InlineMath math="x^3-2=0" /> の根に写さなければならないが、実数である根は <InlineMath math="\sqrt[3]{2}" /> しかない。
                </p>
                <p>
                    よって <InlineMath math="\sigma(\sqrt[3]{2}) = \sqrt[3]{2}" /> しかありえず、<InlineMath math="\sigma" /> は恒等写像に限られる。すなわち <InlineMath math="|\mathrm{Aut}_\mathbb{Q}(\mathbb{Q}(\sqrt[3]{2}))| = 1" /> である。
                </p>
                <p>
                    一方、拡大次数は <InlineMath math="3" /> であるため、<InlineMath math="1 \neq 3" /> となり、条件「自己同型群の位数 = 拡大次数」を満たさない。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>正規かつ分離的</strong>な拡大を<strong>ガロア拡大</strong>という。</li>
                    <li>基礎体を固定する自己同型のなす群を<strong>ガロア群</strong>という。</li>
                    <li>ガロア拡大であることと、ある分離多項式の分解体であること、そして「ガロア群の位数＝拡大次数」であることはすべて同値である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
