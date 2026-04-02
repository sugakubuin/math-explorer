import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PathDeformationPrinciple() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                コーシーの積分定理は、「一周するとゼロ」という静的な結果だけではありません。
                これを動的に捉え直すと、「経路を連続的に変形しても積分の値が変わらない」という <strong>経路変形原理</strong> が得られます。
                これは複雑な積分計算を簡単にするための、極めて実用的な「道具」となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">経路変形原理</h2>

            <p>
                経路を動かす際、正則でない点（特異点）をまたがない限り、積分の値は不変です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (経路変形原理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が領域 <InlineMath math="U" /> 上で正則であるとする。
                    <InlineMath math="U" /> 内の 2 つの曲線 <InlineMath math="\gamma_0, \gamma_1" /> が同じ始点と終点を持ち、
                    <InlineMath math="U" /> 内で互いに <strong>ホモトープ</strong>（端点を固定して連続的に変形可能）であれば、
                </p>
                <BlockMath math="\int_{\gamma_0} f(z) \, dz = \int_{\gamma_1} f(z) \, dz" />
                <p>
                    が成立する。閉曲線の場合も同様である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\gamma_0" /> と <InlineMath math="-\gamma_1" /> を繋げた閉曲線 <InlineMath math="\Gamma" /> を考えると、単連結領域内ではホモトピーの定義より <InlineMath math="\Gamma" /> の内部で関数は正則である。よってコーシーの積分定理より
                    <BlockMath math="\oint_\Gamma f(z) dz = \int_{\gamma_0} f(z) dz - \int_{\gamma_1} f(z) dz = 0" />
                    となり、主張が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                直感的には、積分路を「ゴムのように」伸び縮みさせても、途中で正則でない点（「画鋲」のようなもの）を引っ掛けない限り、積分の値は変わらないということです。
            </p>

            <ContentBox type="remark" title="特異点を避ける変形">
                <p>
                    この原理を用いれば、複雑なギザギザの経路を計算しやすい直線や円弧に変形したり、
                    逆に計算しやすい経路に逃がしたりすることが可能になる。
                    複素解析における計算技術の多くは、この「逃げのテクニック」に支えられている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な計算への応用</h2>

            <p>
                実際に経路を変形することで、計算が劇的に簡略化される例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 4.4-1 (1/z の任意の円周積分)">
                <p>
                    前節 §4.3 で、<InlineMath math="1/z" /> の単位円周 <InlineMath math="|z|=1" /> 上の積分が <InlineMath math="2\pi i" /> になることを見た。
                </p>
                <p>
                    経路変形原理によれば、原点 <InlineMath math="z=0" /> を囲む <strong>任意の</strong> 単純閉曲線 <InlineMath math="\gamma" /> に対して、
                </p>
                <BlockMath math="\oint_\gamma \frac{1}{z} \, dz = 2\pi i" />
                <p>
                    となる。なぜなら、<InlineMath math="\gamma" /> は原点に触れることなく単位円周に連続変形できるからである。
                    どんなに歪んだ円であっても、原点を一回転していれば積分の値は同一となる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-2 (多連結領域での積分)">
                <p>
                    中心に特異点を持つドーナツ型の領域（環状領域）を考える。
                    この領域内で、特異点を囲む 2 つの異なる閉曲線 <InlineMath math="C_1, C_2" /> をとる。
                </p>
                <p>
                    <InlineMath math="C_1" /> と <InlineMath math="C_2" /> は互いに連続変形可能（ホモトープ）であるため、
                </p>
                <BlockMath math="\oint_{C_1} f(z) \, dz = \oint_{C_2} f(z) \, dz" />
                <p>
                    が成り立つ。このように、領域の「穴」の周りを何回回るかというトポロジー的な情報が積分値を決定する。
                </p>
            </ContentBox>

            <p>
                この「穴の周りの積分が情報を保持している」という性質は、次章以降で学ぶ <strong>留数定理</strong> へと繋がっていきます。
            </p>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則性を保ったまま経路を変形しても、積分の値は変わらない。</li>
                    <li>これを経路変形原理（またはホモトピー不変性）と呼ぶ。</li>
                    <li>特異点をまたがない限り、経路の形状に関わらず積分値は一定である。</li>
                    <li>この性質は、複雑な領域での積分を標準的な円周積分に帰着させる際に極めて強力である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
