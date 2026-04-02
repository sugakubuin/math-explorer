import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EmbeddingAndApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ある空間をより大きな空間の「一部分」として捉えるとき、その入れ方がもとの空間の位相構造を保っていることが重要です。
                この概念を形式化したものが<strong>埋め込み</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">埋め込みの定義</h2>

            <p>
                単純な単射連続写像よりも強い条件を要求します。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 (埋め込み)">
                <p>
                    写像 <InlineMath math="f: X \to Y" /> が<strong>埋め込み (Embedding)</strong> であるとは、
                    <InlineMath math="f" /> が <InlineMath math="X" /> からその像 <InlineMath math="f(X) \subset Y" /> （相対位相を入れたもの）への
                    同相写像であることをいう。
                </p>
            </ContentBox>

            <p className="mt-4">
                つまり、「連続な単射」であり、かつ「逆写像（像から元の空間への戻し）も連続」であれば、それは埋め込みです。
                これにより、<InlineMath math="X" /> を <InlineMath math="Y" /> の中の部分空間として完全に再現できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">位相的不変量の応用</h2>

            <p>
                位相的不変量を用いることで、具体的な空間の分類が可能になります。
            </p>

            <ContentBox type="example" title="Example 4.4-1 (1次元図形の分類)">
                <p>
                    アルファベットの「A」と「B」を線図形とみなしたとき、これらは同相でしょうか？
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>「A」は、線を取り除くと分解される箇所（不変量への影響）を調べると、穴が1つあります。</li>
                    <li>「B」には穴が2つあります。</li>
                </ul>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    穴の数（第1次ホモロジー群のランク）は位相的不変量であるため、これらは同相ではありません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">距離化定理への展望</h2>

            <p>
                位相空間が「いつ距離空間として扱えるか」という問題は、トポロジーの歴史における大きなテーマでした。
            </p>

            <ContentBox type="remark" title="ウリゾーンの距離化定理">
                <p>
                    <strong>ウリゾーンの距離化定理 (Urysohn's Metrization Theorem)</strong>：
                    第2可算公理を満たす正規空間（T4空間）は、必ず距離化可能である。
                </p>
                <p className="mt-4">
                    この定理の証明の核心は、そのような空間をヒルベルト空間 <InlineMath math="\ell^2" /> という非常に大きな「標準的な」距離空間の中に<strong>埋め込む</strong>ことができる、という事実にあります。
                    抽象的な位相空間を、具体的な距離空間の部分集合として「実現」できることを保証する、埋め込み概念の強力な応用例です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>埋め込み</strong>は、もとの空間の位相構造を完全に保ったまま大きな空間に送り込む写像である。</li>
                    <li>不変量を用いることで、複雑な図形やグラフの同相・非同相を判定できる。</li>
                    <li>埋め込みの理論は、「位相空間を既知の空間（距離空間など）の部分集合として捉え直す」ための基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
