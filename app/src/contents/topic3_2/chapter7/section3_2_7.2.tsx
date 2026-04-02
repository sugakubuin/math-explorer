import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ResidueTheoremDetailed() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ「留数」という道具を用いることで、いよいよ複素解析の最も強力な定理の一つである <strong>留数定理</strong> に到達します。
                この定理は、領域内の多くの点での情報をたった数点の「特異点」の情報に集約できるという、非常に美しい結果を提供します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">留数定理</h2>

            <p>
                コーシーの積分定理（§4.3）では、領域内で正則であれば一周積分は 0 になりました。
                留数定理はこれを拡張し、特異点が含まれる場合にその積分がどのように変化するかを記述します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (留数定理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が、単純閉曲線 <InlineMath math="\gamma" /> とその内部からなる領域において、
                    有限個の孤立特異点 <InlineMath math="z_1, z_2, \dots, z_k" /> を除いて正則であるとする。
                    このとき、 <InlineMath math="\gamma" /> に沿った反時計回りの一周積分は次で与えられる。
                </p>
                <BlockMath math="\oint_\gamma f(z) dz = 2\pi i \sum_{j=1}^k \text{Res}(f; z_j)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    各特異点 <InlineMath math="z_j" /> を中心とし、 <InlineMath math="\gamma" /> の内部に含まれ互いに重なり合わない微小な円 <InlineMath math="C_j" /> を描く。
                    多重連結領域に対するコーシーの積分定理（あるいは経路変形原理 §4.4）を適用すると、 <InlineMath math="\gamma" /> 上での積分は、各 <InlineMath math="C_j" /> 上での積分の総和に等しくなる。
                </p>
                <BlockMath math="\oint_\gamma f(z) dz = \sum_{j=1}^k \oint_{C_j} f(z) dz" />
                <p>
                    各 <InlineMath math="C_j" /> において、 <InlineMath math="f(z)" /> を <InlineMath math="z_j" /> の周りでローラン展開し、項ごとに積分することを考える。
                </p>
                <BlockMath math="\oint_{C_j} f(z) dz = \oint_{C_j} \left( \sum_{n=-\infty}^\infty c_n (z-z_j)^n \right) dz" />
                <p>
                    §7.1 で確認した通り、 <InlineMath math="(z-z_j)^n" /> の一周積分は <InlineMath math="n=-1" /> のときのみ <InlineMath math="2\pi i" /> となり、それ以外の次数ではすべて 0 になる。
                    展開係数の定義より、 <InlineMath math="n=-1" /> の係数は留数 <InlineMath math="\text{Res}(f; z_j)" /> そのものであるから、
                </p>
                <BlockMath math="\oint_{C_j} f(z) dz = 2\pi i \, \text{Res}(f; z_j)" />
                <p>
                    これをすべての特異点について合計すれば、
                </p>
                <BlockMath math="\oint_\gamma f(z) dz = \sum_{j=1}^k 2\pi i \, \text{Res}(f; z_j) = 2\pi i \sum_{j=1}^k \text{Res}(f; z_j)" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-8">
                留数定理を使う際は、 <strong>「曲線内にどの特異点が含まれているか」</strong> を正確に判断することが最も重要です。
            </p>

            <ContentBox type="example" title="Example 7.2-1 (留数定理の適用)">
                <p>
                    積分 <InlineMath math="\oint_{|z|=3} \frac{z+1}{z^2-1} dz" /> を求めよ。
                </p>
                <p>
                    <strong>解答：</strong> 被積分関数を <InlineMath math="f(z) = \frac{z+1}{(z-1)(z+1)} = \frac{1}{z-1}" /> （<InlineMath math="z \neq -1" />）と整理できる。
                    分母が 0 となる点は <InlineMath math="z = 1, -1" /> である。
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li><InlineMath math="z = 1" /> は 1 位の極であり、積分路 <InlineMath math="|z|=3" /> の <strong>内部</strong> にある。</li>
                    <li><InlineMath math="z = -1" /> は、約分により除去可能特異点となっている。</li>
                </ul>
                <p>
                    <InlineMath math="z=1" /> における留数は <InlineMath math="\text{Res}(f; 1) = \lim_{z \to 1} (z-1) \frac{1}{z-1} = 1" />。
                    したがって留数定理より、
                </p>
                <BlockMath math="\oint_{|z|=3} f(z) dz = 2\pi i \cdot \text{Res}(f; 1) = 2\pi i" />
                <p className="text-sm italic">
                    ※ なお、そのまま <InlineMath math="\text{Res}(f; -1)" /> を計算しても 0 になるため、結果は変わりません。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="正則関数と留数定理の関係">
                <p>
                    もし曲線 <InlineMath math="\gamma" /> の内部に特異点が一つもなければ、総和は 0 となり、コーシーの積分定理に一致します。
                    つまり留数定理はコーシーの積分定理を包含する、より一般的な枠組みであると言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>留数定理は、閉曲線内の「留数の総和」の <InlineMath math="2\pi i" /> 倍が積分値になることを保証する。</li>
                    <li>証明の核は、経路変形によって積分を特異点の周りの微小な円に集約させる点にある。</li>
                    <li>計算の際には、特異点の位置が積分路の「内部」か「外部」かを必ず確認する必要がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
