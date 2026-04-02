import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MobiusTransformations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析において、複素平面全体（および無限遠点）を別の複素平面全体へ「綺麗に」写す最も基本的な全単射写像が <strong>一次分数変換</strong> です。
                発見者にちなんで <strong>メビウス変換 (Möbius transformation)</strong> とも呼ばれるこの写像は、円や直線を円や直線に写すという驚くべき性質を持っています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">メビウス変換の定義</h2>

            <p>
                メビウス変換は、2つの一次式の比として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 8.2-1 (メビウス変換)">
                <p>
                    複素定数 <InlineMath math="a, b, c, d" /> （ただし <InlineMath math="ad - bc \neq 0" />）を用いて、
                    <BlockMath math="f(z) = \frac{az + b}{cz + d}" />
                    で表される写像を <strong>メビウス変換（一次分数変換）</strong> という。
                    これはリーマン球面 <InlineMath math="\hat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}" /> 上の自己同型写像を定める。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.2-1 (基本変換の組み合わせ)">
                <p>
                    メビウス変換には、以下の 4 つの基本的な操作がすべて含まれている。
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>平行移動： <InlineMath math="z + b" /></li>
                    <li>回転・拡大縮小： <InlineMath math="az" /></li>
                    <li>反転： <InlineMath math="1/z" /></li>
                </ul>
                <p className="mt-2">
                    実際、 <InlineMath math="c \neq 0" /> のとき、次のように分解して書くことができる。
                    <BlockMath math="\frac{az + b}{cz + d} = \frac{a}{c} + \frac{bc - ad}{c(cz + d)}" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本性質：円円対応</h2>

            <p>
                メビウス変換の最も顕著な幾何学的特徴は、図形の形状をクラスレベルで保存することです。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 (円円対応)">
                <p>
                    メビウス変換は、複素平面上の「広義の円」（すなわち、通常の円または直線）を、再び「広義の円」に移す。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (骨格)">
                <p>
                    広義の円の方程式は、複素成分を用いて <InlineMath math="A z\bar{z} + \overline{B}z + B\bar{z} + C = 0" /> （<InlineMath math="A, C \in \mathbb{R}" />）と書ける。
                    メビウス変換が平行移動、回転拡大、反転の合成で書けることに注目する。
                    特に「反転 <InlineMath math="w = 1/z" />」を代入すると、上記の方程式は再び同形式（<InlineMath math="C w\bar{w} + Bw + \overline{B}\bar{w} + A = 0" />）に変換される。
                    したがって、円と直線が互いに入れ替わりながらも、このクラスの中に留まることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-8">
                また、メビウス変換は 3 点の行き先を指定すれば一意に決定されるという強力な性質を持っています。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-2 (三点決定と複比)">
                <p>
                    相異なる 3 点 <InlineMath math="z_1, z_2, z_3" /> を、指定された 3 点 <InlineMath math="w_1, w_2, w_3" /> に写すメビウス変換はただ一つ存在する。
                    この変換 <InlineMath math="w = f(z)" /> は、次の <strong>複比 (cross-ratio)</strong> の等式を満たす。
                </p>
                <BlockMath math="\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}" />
            </ContentBox>

            <ContentBox type="example" title="Example 8.2-2 (単位円板から上半平面へ)">
                <p>
                    単位円板 <InlineMath math="\mathbb{D} = \{ |z| < 1 \}" /> を上半平面 <InlineMath math="\mathbb{H} = \{ \text{Im}(w) > 0 \}" /> に移す重要なメビウス変換として、次のものが知られている。
                </p>
                <BlockMath math="w = i \frac{1 - z}{1 + z}" />
                <p>
                    <strong>確認：</strong> <InlineMath math="z = 0" /> （円板の中心）は <InlineMath math="w = i" /> に写る。
                    また、境界である単位円上の点 <InlineMath math="z = 1, i, -1" /> はそれぞれ <InlineMath math="w = 0, 1, \infty" /> という実軸上の点に写る。
                    境界が境界へ、内部が内部へ移ることで、領域間の写像が実現されている。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="メビウス変換と行列">
                <p>
                    メビウス変換の合成は、対応する行列 <InlineMath math="\begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> の積と完全に一致します。
                    これは、複素写像の幾何学が線形代数という強力な枠組みと深く繋がっていることを示唆しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>メビウス変換は、複素平面全体を記述する最も基本的な全単射な等角写像である。</li>
                    <li>円と直線という図形のクラスを保存する「円円対応」という性質を持つ。</li>
                    <li>三点の行き先を指定することで一意に定まり、異なる領域（円板と半平面など）を繋ぐ架け橋となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
