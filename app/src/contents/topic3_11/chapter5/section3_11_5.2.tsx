import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionVolumeForms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                向きの概念に続いて、空間内の図形の「大きさ（体積）」を測るための代数的な道具を導入します。これが最高次の交代テンソルである体積形式です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">体積形式の定義</h2>

            <p className="leading-relaxed">
                <InlineMath math="n" /> 次元空間における体積は、<InlineMath math="n" /> 個のベクトルを入力としてスカラーを返す多重線形交代形式として自然に定義されます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.2-1 (体積形式)"
            >
                <p>
                    <InlineMath math="n" /> 次元向き付きベクトル空間 <InlineMath math="V" /> において、<InlineMath math="n" /> 次外積空間 <InlineMath math="\bigwedge^n(V^*)" /> の非零元 <InlineMath math="\Omega" /> を<strong>体積形式（volume form）</strong>と呼ぶ。
                </p>
                <p>
                    特に、正の正規基底 <InlineMath math="(e_1, \ldots, e_n)" /> に対して
                    <BlockMath math="\Omega(e_1, \ldots, e_n) > 0" />
                    となるように選ぶことで、その体積形式が定める「体積の符号」と「空間の向き」を整合させることができる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                体積形式が、私たちが直感的に期待する「体積」の性質（ペシャンコなら 0）を満たすことを確認します。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 5.2-1"
            >
                <p>
                    <InlineMath math="\bigwedge^n(V^*)" /> の非零元 <InlineMath math="\Omega" /> は体積形式として機能する。すなわち、写像 <InlineMath math="(v_1, \ldots, v_n) \mapsto \Omega(v_1, \ldots, v_n)" /> は符号付き体積を与える。
                    特に、ベクトル <InlineMath math="v_1, \ldots, v_n" /> が線形従属であるならば、<InlineMath math="\Omega(v_1, \ldots, v_n) = 0" /> となる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="\Omega" /> は <InlineMath math="\bigwedge^n(V^*)" /> の元であるため、定義から多重線形性と交代性を持つ。
                </p>
                <p>
                    Proposition 4.1-2 より、<InlineMath math="v_1, \ldots, v_n" /> が線形従属であるならば、それらのウェッジ積は <InlineMath math="v_1 \wedge \cdots \wedge v_n = 0" /> である。
                    体積形式の評価は、テンソルとしての自然なペアリングを通して <InlineMath math="\Omega(v_1 \wedge \cdots \wedge v_n)" /> と見なせるため、入力が <InlineMath math="0" /> であれば結果も <InlineMath math="0" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 5.2-1 (<InlineMath math="\mathbb{R}^3" /> の体積形式)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" /> において、標準的な体積形式を <InlineMath math="\Omega = e^1 \wedge e^2 \wedge e^3" /> とする。
                </p>
                <p>
                    任意の 3 つのベクトル <InlineMath math="v_1, v_2, v_3" /> に対して、これを評価すると、
                    <BlockMath math="\Omega(v_1, v_2, v_3) = \det(v_1, v_2, v_3)" />
                    （<InlineMath math="v_i" /> を列ベクトルとして並べた行列の行列式）となる。
                </p>
                <p>
                    標準基底を代入すれば <InlineMath math="\Omega(e_1, e_2, e_3) = \det(I) = 1 > 0" /> であり、正規化条件を満たしている。順序を入れ替えた <InlineMath math="\Omega(e_1, e_3, e_2) = -1" /> は、逆の向きの基底の張る体積が負になることを表している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">変数変換と体積形式</h2>

            <p className="leading-relaxed">
                線形写像によって空間を引き伸ばしたり回転させたりしたとき、体積がどのように変化するかは、プルバックの性質を用いて明快に記述されます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.2-1 (体積形式の変換則)"
            >
                <p>
                    <InlineMath math="f : V \to V" /> を線形写像とし、<InlineMath math="\Omega" /> を <InlineMath math="V" /> の体積形式とする。このとき、プルバックによる変換則は
                    <BlockMath math="f^*\Omega = \det(f) \cdot \Omega" />
                    で与えられる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    この事実は Theorem 4.4-1 の再述である。念のため、任意の基底 <InlineMath math="(e_1, \ldots, e_n)" /> に対して両辺を評価してみる。
                </p>
                <p>
                    左辺はプルバックの定義より、
                    <BlockMath math="(f^*\Omega)(e_1, \ldots, e_n) = \Omega(f(e_1), \ldots, f(e_n))" />
                    である。ここで <InlineMath math="f(e_1) \wedge \cdots \wedge f(e_n) = \det(f) (e_1 \wedge \cdots \wedge e_n)" /> であり、<InlineMath math="\Omega" /> の多重線形性により、
                    <BlockMath math="\Omega(f(e_1), \ldots, f(e_n)) = \det(f) \Omega(e_1, \ldots, e_n)" />
                    となる。したがって、形式として <InlineMath math="f^*\Omega = \det(f) \Omega" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理は、微積分学における極めて重要な公式の背後にある代数的構造を明らかにしています。
            </p>

            <ContentBox
                type="remark"
                title="重積分の変数変換公式との関係"
            >
                <p>
                    Theorem 5.2-1 は、多変数の微積分における重積分の変数変換公式
                    <BlockMath math="\int_{f(D)} d\mathrm{vol} = \int_D |\det(f)| \, d\mathrm{vol}" />
                    の線形代数的な根拠を与えています（微積分では「絶対値」をとるのは向きを無視した「測度」として積分するからです。向きを考慮した「微分形式の積分」では絶対値は不要になります）。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.2-2 (体積の変換計算)"
            >
                <p>
                    <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^2" /> を <InlineMath math="f(e_1) = 2e_1" />、<InlineMath math="f(e_2) = 3e_2" /> で定まるスケーリング写像とする。
                </p>
                <p>
                    体積形式 <InlineMath math="\Omega = e^1 \wedge e^2" /> のプルバックを計算すると、
                    <BlockMath math="f^*(e^1 \wedge e^2) = f^*(e^1) \wedge f^*(e^2) = 2e^1 \wedge 3e^2 = 6(e^1 \wedge e^2)" />
                    となる。
                </p>
                <p>
                    これは <InlineMath math="\det(f) = 2 \times 3 = 6" /> に一致する。幾何学的には、面積 1 の単位正方形が、各辺を 2 倍、3 倍に引き伸ばされて面積 6 の長方形に移るという直感と完全に符号している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="n" /> 次元の体積形式とは、<InlineMath math="1" /> 次元空間 <InlineMath math="\bigwedge^n(V^*)" /> の非零元であり、符号付きの体積を測る「物差し」である。</li>
                    <li>入力されたベクトルが線形従属であれば、体積形式による評価値は必ず <InlineMath math="0" /> になる。</li>
                    <li>線形写像 <InlineMath math="f" /> によって引き戻された体積形式は、元の体積形式の <InlineMath math="\det(f)" /> 倍になる。これが変数変換のヤコビアンの起源である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
