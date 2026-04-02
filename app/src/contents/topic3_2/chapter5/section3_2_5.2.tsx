import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HolomorphicTheorems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                正則性の定義から導かれる性質は、単なる積分計算の道具に留まりません。
                解析学における逆転現象や、代数学の根本を支える定理など、広範な数学領域に影響を及ぼす美しい諸定理を見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">モレラの定理（コーシーの逆）</h2>

            <p>
                コーシーの積分定理は「正則ならば一周積分がゼロ」でしたが、その逆が成り立つというのがモレラの定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (モレラの定理)">
                <p>
                    領域 <InlineMath math="U" /> 上で連続な関数 <InlineMath math="f(z)" /> が、<InlineMath math="U" /> 内の任意の閉曲線 <InlineMath math="\gamma" /> に対して
                </p>
                <BlockMath math="\oint_\gamma f(z) \, dz = 0" />
                <p>
                    を満たすならば、<InlineMath math="f(z)" /> は <InlineMath math="U" /> 上で正則である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定点 <InlineMath math="z_0 \in U" /> を固定し、点 <InlineMath math="z \in U" /> に対して関数 <InlineMath math="F(z)" /> を次のように定義する。
                </p>
                <BlockMath math="F(z) = \int_{z_0}^z f(\zeta) \, d\zeta" />
                <p>
                    仮定より積分は経路によらない（Theorem 4.2-2）ため、<InlineMath math="F(z)" /> は一意に定まる。<InlineMath math="F(z)" /> の複素微分を考えると、
                </p>
                <BlockMath math="\frac{F(z + \Delta z) - F(z)}{\Delta z} = \frac{1}{\Delta z} \int_z^{z + \Delta z} f(\zeta) \, d\zeta" />
                <p>
                    <InlineMath math="f" /> の連続性により、<InlineMath math="\Delta z \to 0" /> の極限でこの積分は <InlineMath math="f(z)" /> に収束する。したがって <InlineMath math="F'(z) = f(z)" /> である。
                    <InlineMath math="F" /> は複素微分可能（正則）であり、正則関数の導関数である <InlineMath math="f" /> もまた正則である（Theorem 5.1-2）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                これは「微分可能性」という性質が、実は「積分」という大域的な情報から判定できることを示しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リュービルの定理</h2>

            <p>
                複素平面全体で定義された関数（整関数）に対して、極めて強い制限を与える定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-2 (リュービルの定理)">
                <p>
                    有界な整関数は、定数関数に限る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f(z)" /> が整関数で <InlineMath math="|f(z)| \leq M" /> とする。任意の点 <InlineMath math="z_0" /> において、グルサの公式を半径 <InlineMath math="R" /> の円周 <InlineMath math="C_R" /> に適用する。
                </p>
                <BlockMath math="f'(z_0) = \frac{1}{2\pi i} \oint_{C_R} \frac{f(z)}{(z - z_0)^2} \, dz" />
                <p>
                    ML 不等式を用いると、
                </p>
                <BlockMath math="|f'(z_0)| \leq \frac{1}{2\pi} \cdot \frac{M}{R^2} \cdot 2\pi R = \frac{M}{R}" />
                <p>
                    ここで <InlineMath math="R \to \infty" /> とすると、<InlineMath math="|f'(z_0)| = 0" /> となる。全ての <InlineMath math="z_0" /> で <InlineMath math="f'(z_0) = 0" /> なので、<InlineMath math="f" /> は定数である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                例えば、実関数では <InlineMath math="\sin x" /> は有界で微分可能な「整関数」のような存在ですが、定数ではありません。
                複素平面全体まで考えを広げると、このような関数は存在できないのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代数学の基本定理</h2>

            <p>
                数学全体の金字塔とも言える定理が、複素解析の道具（リュービルの定理）を用いることで鮮やかに証明されます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-3 (代数学の基本定理)">
                <p>
                    複素係数の定数でない多項式は、複素数体の中に少なくとも1つの零点を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (リュービルの定理による)">
                <p>
                    多項式 <InlineMath math="P(z)" /> が零点を持たないと仮定し、矛盾を導く。
                    仮定より <InlineMath math="f(z) = 1/P(z)" /> は全平面で正則（整関数）である。
                    また、<InlineMath math="|z| \to \infty" /> のとき <InlineMath math="|P(z)| \to \infty" /> なので、<InlineMath math="|f(z)| \to 0" /> である。
                    したがって <InlineMath math="f(z)" /> は有界な整関数であり、リュービルの定理より定数となる。
                    これは <InlineMath math="P(z)" /> が定数でないことに矛盾する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>モレラの定理は、積分の性質から関数の正則性を導く。</li>
                    <li>リュービルの定理は、有界な整関数が定数であることを保証する。</li>
                    <li>これを用いることで、あらゆる多項式に解がある（代数学の基本定理）ことが証明できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
