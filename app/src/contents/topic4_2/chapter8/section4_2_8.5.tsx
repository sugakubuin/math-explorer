import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ApplicationsOfRiemannRoch() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                リーマン-ロッホの定理を獲得したことで、我々はリーマン面上の代数構造（関数の存在性）を自由にコントロールする手段を手に入れました。最後に、この定理から直ちに導かれる重要な応用例を見ながら、関数の存在定理への結実と、代数幾何学への扉を開く「射影的埋め込み」について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">種数と有理型関数の存在</h2>

            <p>
                リーマン-ロッホの定理の左辺にある補正項 <InlineMath math="l(K-D)" /> は、場合によっては計算が難しい項です。しかし、十分大きな極（大きな <InlineMath math="\deg D" />）を許容してしまえば、この項は完全に消滅し、次元の計算が位相構造のみによる決定的な式へと昇華されます。
            </p>

            <ContentBox type="theorem" title="Corollary 8.5-1">
                <p>
                    コンパクトリーマン面上において、除数の次数が <InlineMath math="\deg D \geq 2g - 1" /> を満たすならば、補正項は <InlineMath math="l(K-D) = 0" /> となり、次元は次のように完全に決定される。
                </p>
                <BlockMath math="l(D) = \deg D - g + 1" />
                <p>
                    （※ 実際にはさらに安全圏を取って <InlineMath math="\deg D \geq 2g" /> と表現することも多い。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    標準除数 <InlineMath math="K" /> の次数は <InlineMath math="\deg K = 2g - 2" /> であった。仮定より <InlineMath math="\deg D \geq 2g - 1" /> とすると、双対除数 <InlineMath math="K - D" /> の次数は次のように評価される。
                </p>
                <BlockMath math="\begin{aligned}
                    \deg(K - D) &= (2g - 2) - \deg D \\
                    &\leq (2g - 2) - (2g - 1) \\
                    &= -1 < 0
                \end{aligned}" />
                <p>
                    次数が負になる除数に付随する空間 <InlineMath math="L(K-D)" /> は自明な空間 <InlineMath math="\{0\}" /> しか持たない（Proposition 8.2-1 の証明より）。よってその次元は <InlineMath math="l(K-D) = 0" /> である。
                </p>
                <p>
                    これをリーマン-ロッホの定理の式 <InlineMath math="l(D) - l(K-D) = \deg D - g + 1" /> に代入すれば、直ちに <InlineMath math="l(D) = \deg D - g + 1" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.5-1">
                <p>
                    種数 <InlineMath math="g=2" /> の曲線上の除数で、特定の点 <InlineMath math="p" /> に4位の極を許す <InlineMath math="D = 4 \cdot p" /> を考えます。<InlineMath math="\deg D = 4" /> なので <InlineMath math="2g = 4" /> 以上の条件を満たしています。
                </p>
                <p>
                    計算すると <InlineMath math="l(D) = 4 - 2 + 1 = 3" /> となります。つまり、この条件を満たす関数の集合は定数関数を含めて3次元のベクトル空間をなしており、定数でない独立な有理関数が必ず少なくとも2つ存在することが厳密に保証されます。
                </p>
            </ContentBox>

            <p>
                「定数でない関数が必ず存在する」という事実自体が、実は非常に深遠な帰結です。
            </p>

            <ContentBox type="theorem" title="Corollary 8.5-2">
                <p>
                    種数 <InlineMath math="g \geq 1" /> のコンパクトリーマン面上（すなわち球面以外の任意の面）には、定数でない非自明な有理型関数が必ず存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点 <InlineMath math="p" /> を一つ固定し、極として許す最大位数 <InlineMath math="k" /> を非常に大きく設定した除数 <InlineMath math="D = k \cdot p" /> を考える。
                </p>
                <p>
                    Corollary 8.5-1 より、<InlineMath math="k \geq 2g" /> となるように選べば、次元は <InlineMath math="l(k \cdot p) = k - g + 1" /> となる。<InlineMath math="k" /> を十分大きくすれば次元は <InlineMath math="2" /> 以上（<InlineMath math="k \geq g+1" />）にできる。
                </p>
                <p>
                    <InlineMath math="L(D)" /> の次元が <InlineMath math="2" /> 以上であるということは、定数関数のなす1次元部分空間以外に「定数ではない」有理型関数 <InlineMath math="f \in L(D)" /> が含まれていることを意味する。したがって、非自明な有理型関数の存在が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="抽象的空間からの脱却">
                <p>
                    ただチャートを貼り合わせただけで構成した「抽象的な」リーマン面上に、果たしてまともな（定数でない）関数を作ることができるかという基本的疑問が、この次元定理によって肯定的に決着します。関数が存在することで、以下に説明するように面をユークリッド空間（射影空間）に「目で見える形」で具体化することが可能になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">射影的埋め込み</h2>

            <p>
                有理型関数を「複数」束ねて使うと、リーマン面の各点から高次元空間の点へと写像を作ることができます。十分な数の独立な関数を使えば、曲面自身を交差させずに高次元空間に「埋め込む（Embedding）」ことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.5-1 (射影的埋め込み)">
                <p>
                    除数 <InlineMath math="D" /> の次数が十分に大きい（具体的には <InlineMath math="\deg D \geq 2g + 1" /> を満たす）とき、<InlineMath math="L(D)" /> の基底 <InlineMath math="\{f_0, f_1, \dots, f_m\}" /> （<InlineMath math="m = l(D)-1" />）による写像
                </p>
                <BlockMath math="\Phi: S \ni p \mapsto [f_0(p) : f_1(p) : \dots : f_m(p)] \in \mathbb{CP}^m" />
                <p>
                    は、コンパクトリーマン面 <InlineMath math="S" /> の複素射影空間 <InlineMath math="\mathbb{CP}^m" /> への<b>埋め込み（Embedding）</b>を与える。すなわち、<InlineMath math="S" /> とその像は双正則同値となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （概略）埋め込みとなるためには、「点を分離する（全単射になる）」ことと、「接線方向を分離する（接写像が単射になる＝微小変化を潰さない）」ことの2つが必要である。これらはいずれも、関数の自由度に関わる条件である。
                </p>
                <p>
                    異なる2点 <InlineMath math="p, q" /> を分離するには、「<InlineMath math="p" /> の情報を変えずに <InlineMath math="q" /> だけを変化させるような関数」が <InlineMath math="L(D)" /> 内に作れる必要がある。これは代数的には、より厳しい条件である除数 <InlineMath math="D - p - q" /> に対して、次元の変化が <InlineMath math="l(D - p - q) = l(D) - 2" /> となる（2点分の自由度を失う）ことで保証される。
                </p>
                <p>
                    しかし、<InlineMath math="\deg D \geq 2g + 1" /> であれば、次数が2減った <InlineMath math="\deg(D - p - q) \geq 2g - 1" /> においても Corollary 8.5-1 が安全に働くため、次元低下が正確に計算され、分離に必要なだけの十分な関数が存在することが証明される。接線方向の分離についても同様に <InlineMath math="D - 2p" /> に対する次元計算から導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.5-2">
                <p>
                    種数 <InlineMath math="g=1" /> の場合を射影的埋め込みで確認しましょう。<InlineMath math="2g+1 = 3" /> なので、除数 <InlineMath math="D = 3 \cdot p" /> を取ります。<InlineMath math="l(3 \cdot p) = 3 - 1 + 1 = 3" /> です。基底は3つの関数からなり、写像は
                </p>
                <BlockMath math="\Phi: S \to \mathbb{CP}^2" />
                <p>
                    となります。これはトーラスを2次元複素射影空間内の曲線（代数曲線）として実現したことになります。
                </p>
                <p>
                    ここからさらに自由度を調べると、<InlineMath math="L(6 \cdot p)" /> （次元6）の中に <InlineMath math="\Phi" /> の座標関数の間の代数的な関係（自乗や3乗の組み合わせ）がどうしても生じることがわかります。この関係式を整理したものが、次なる理論「楕円関数論（4-3）」におけるワイエルシュトラスの方程式 <InlineMath math="y^2 = 4x^3 - g_2 x - g_3" /> そのものです。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="GAGA原理の出発点として">
                <p>
                    本定理は「すべてのコンパクトなリーマン面は、高次元の射影空間内の方程式で書かれる代数多様体（代数曲線）として実現できる」ことを強く主張しています。解析的に定義された対象が代数方程式で表現できるというこの事実は、解析幾何学と代数幾何学を統一的に扱うセールのGAGA原理（代数幾何I 4-12）へと直結する歴史的な架け橋です。本章は、複素解析の美しい終着点であり、より高次元・代数的な数学への入り口となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>リーマン-ロッホの定理によれば、十分大きな次数 <InlineMath math="2g" /> 以上の条件 <InlineMath math="D" /> に対しては、関数の自由度は位相だけで決まり <InlineMath math="l(D) = \deg D - g + 1" /> となる。</li>
                    <li>この公式により、ただの抽象的空間であるコンパクトリーマン面上にも定数でない有理関数が確実に多数存在することが代数的に（定理から間接的に）保証される。</li>
                    <li>多数の有理型関数を用いて、リーマン面を射影空間 <InlineMath math="\mathbb{CP}^m" /> 内の代数曲線としてきれいに埋め込むことができる。これが代数幾何学への導入であり、解析学と代数学の境界を突破する成果である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
