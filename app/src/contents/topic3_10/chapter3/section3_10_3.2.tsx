import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormalExtensions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ分解体は、特定の方程式の「すべての根を包み込む」体でした。この概念を体拡大そのものの性質へと昇華させたものが「正規拡大」です。正規拡大とは、大雑把に言えば「えこひいきしない」拡大、すなわち「ある既約多項式の根を1つでも含んだら、他の根もすべて含む」という美しい性質を持つ拡大です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規拡大の定義と例</h2>

            <p>
                まずは厳密な定義から確認します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (正規拡大)">
                <p>
                    代数拡大 <InlineMath math="K/F" /> が<strong>正規拡大（normal extension）</strong>であるとは、<InlineMath math="F" /> 上の任意の既約多項式 <InlineMath math="f \in F[x]" /> について、<InlineMath math="f" /> が <InlineMath math="K" /> の中に根を少なくとも1つ持つならば、<InlineMath math="f" /> は <InlineMath math="K[x]" /> において一次式の積に<strong>完全分解</strong>することである。
                </p>
            </ContentBox>

            <p>
                この性質が満たされている例と、満たされていない（えこひいきしている）例を比較します。
            </p>

            <ContentBox type="example" title="Example 3.2-1 (正規拡大の例と非正規な例)">
                <p>
                    <strong>正規拡大の例：</strong> <InlineMath math="\mathbb{Q}(\sqrt{2})/\mathbb{Q}" /> は正規拡大である。既約多項式 <InlineMath math="x^2 - 2" /> は <InlineMath math="\mathbb{Q}(\sqrt{2})" /> の中に根 <InlineMath math="\sqrt{2}" /> を持つが、同時にもう一つの根 <InlineMath math="-\sqrt{2}" /> も自動的に含んでおり、完全分解する。
                </p>
                <p>
                    <strong>正規拡大でない例：</strong> <InlineMath math="\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}" /> は正規拡大ではない。<InlineMath math="\mathbb{Q}" /> 上の既約多項式 <InlineMath math="x^3 - 2" /> は、体の中に根 <InlineMath math="\sqrt[3]{2}" /> を1つ持っている。しかし、残りの2つの根 <InlineMath math="\omega\sqrt[3]{2}" /> と <InlineMath math="\omega^2\sqrt[3]{2}" /> は虚数であるため、実数の部分体である <InlineMath math="\mathbb{Q}(\sqrt[3]{2})" /> の中には存在しない。つまり、<InlineMath math="x^3 - 2" /> は <InlineMath math="\mathbb{Q}(\sqrt[3]{2})[x]" /> において完全分解しない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規拡大の判定法</h2>

            <p>
                正規拡大と分解体の間には、極めて直接的で重要な関係があります。実は、「正規拡大であること」と「何らかの多項式の分解体であること」は完全に同値なのです。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (正規拡大の特徴づけ)">
                <p>
                    有限次拡大 <InlineMath math="K/F" /> について、以下の2つは同値である。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><InlineMath math="K/F" /> は正規拡大である。</li>
                    <li><InlineMath math="K" /> は <InlineMath math="F[x]" /> のある多項式 <InlineMath math="f(x)" /> の分解体である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （<InlineMath math="1 \Rightarrow 2" />） <InlineMath math="K/F" /> が正規であり、有限次拡大なので <InlineMath math="K = F(\alpha_1, \dots, \alpha_n)" /> と書ける。各 <InlineMath math="\alpha_i" /> の <InlineMath math="F" /> 上の最小多項式を <InlineMath math="m_i(x)" /> とする。<InlineMath math="m_i(x)" /> は既約であり、<InlineMath math="K" /> 内に根 <InlineMath math="\alpha_i" /> を持つため、正規性の定義より <InlineMath math="K" /> で完全分解する。したがって、これらの積 <InlineMath math="f(x) = \prod m_i(x)" /> も <InlineMath math="K" /> で完全分解し、<InlineMath math="K" /> は <InlineMath math="f(x)" /> のすべての根によって生成されているので <InlineMath math="f(x)" /> の分解体である。
                </p>
                <p>
                    （<InlineMath math="2 \Rightarrow 1" />） <InlineMath math="K" /> が多項式 <InlineMath math="f \in F[x]" /> の分解体であるとする。ある既約多項式 <InlineMath math="g \in F[x]" /> が <InlineMath math="K" /> に根 <InlineMath math="\beta" /> を持ったとする。<InlineMath math="g" /> の代数閉包における任意の根を <InlineMath math="\gamma" /> とすると、<InlineMath math="F(\beta) \cong F(\gamma)" /> であり、この同型は <InlineMath math="\beta \mapsto \gamma" /> を満たす。<InlineMath math="K" /> は <InlineMath math="f" /> の <InlineMath math="F(\beta)" /> 上の分解体であり、また <InlineMath math="K(\gamma)" /> は <InlineMath math="f" /> の <InlineMath math="F(\gamma)" /> 上の分解体であるため、分解体の一意性の定理（拡張版）より <InlineMath math="K = K(\beta) \cong K(\gamma)" /> となる。これは <InlineMath math="\gamma \in K" /> であることを意味し、<InlineMath math="g" /> のすべての根が <InlineMath math="K" /> に含まれることが示された。よって <InlineMath math="K/F" /> は正規拡大である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-2 (分解体と正規拡大)">
                <p>
                    前節で見た <InlineMath math="x^3 - 2" /> の分解体 <InlineMath math="K = \mathbb{Q}(\sqrt[3]{2}, \omega)" /> は、定理により <InlineMath math="\mathbb{Q}" /> の正規拡大である。
                </p>
                <p>
                    正規でない拡大 <InlineMath math="\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}" /> を正規な拡大に「修理」するためには、不足している根（つまり <InlineMath math="\omega" />）を添加して分解体まで体を広げればよいことがわかる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (正規閉包)">
                <p>
                    ある拡大 <InlineMath math="K/F" /> が正規でないとき、<InlineMath math="K" /> を含み、かつ <InlineMath math="F" /> 上正規拡大となるような最小の体 <InlineMath math="L" /> を、<InlineMath math="K" /> の <InlineMath math="F" /> 上の<strong>正規閉包（normal closure）</strong>と呼びます。
                </p>
                <p>
                    例えば、<InlineMath math="\mathbb{Q}(\sqrt[3]{2})" /> の <InlineMath math="\mathbb{Q}" /> 上の正規閉包は <InlineMath math="\mathbb{Q}(\sqrt[3]{2}, \omega)" /> です。ガロア理論では、正規でない中間体を扱う際に、しばしばこの正規閉包の概念を利用して対称性を回復させます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>既約多項式が1つでも根を持てば、必ずすべての根を持つ（完全分解する）拡大を<strong>正規拡大</strong>という。</li>
                    <li>「正規拡大であること」と「何らかの多項式の分解体であること」は同値である。</li>
                    <li>正規でない拡大は、すべての共役な根を添加することで正規拡大（正規閉包）に広げることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
