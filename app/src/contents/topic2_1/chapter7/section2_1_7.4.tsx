import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function JordanBasisConstruction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では「どのような形のジョルダン細胞が並ぶか（つまりジョルダン標準形 <InlineMath math="J" /> の形）」を決定する方法を見ました。<br />
                しかし、実際に行列 <InlineMath math="P" /> を構成して <InlineMath math="A = P J P^{-1}" /> という対角化（の拡張としての変換）を完成させるためには、一般化固有ベクトルを正しく探し出して<strong>ジョルダン基底</strong>と呼ばれる特別な基底のセットを作る必要があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジョルダン基底</h2>

            <ContentBox type="definition" title="Definition 7.4-1 （ジョルダン基底 / Jordan Basis）">
                <p>
                    行列 <InlineMath math="A" /> について、空間の基底 <InlineMath math="\{ \boldsymbol{p}_1, \boldsymbol{p}_2, \dots, \boldsymbol{p}_n \}" /> が、<InlineMath math="A" /> の各ジョルダン細胞に対応する「一般化固有ベクトルの鎖（Chain）」をちょうど過不足なく集めたものになっているとき、これを<strong>ジョルダン基底</strong>と呼ぶ。
                </p>
                <p>
                    すなわち、ある固有値 <InlineMath math="\lambda" /> のサイズ <InlineMath math="k" /> のジョルダン細胞に対応する基底の組 <InlineMath math="\{ \boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_k \}" /> は、次のような鎖の連鎖関係（シフト）を満たさなければならない。
                </p>
                <BlockMath math="(A - \lambda I)\boldsymbol{v}_j = \boldsymbol{v}_{j-1} \quad (j = 2, 3, \dots, k)" />
                <BlockMath math="(A - \lambda I)\boldsymbol{v}_1 = \boldsymbol{0}" />
                <p>
                    このベクトルを<strong>左から右へ</strong>（<InlineMath math="\boldsymbol{v}_1" /> から <InlineMath math="\boldsymbol{v}_k" /> へ）、つまり「真の固有ベクトルから順にランクが高いベクトルへ向けて」行列 <InlineMath math="P" /> の列として並べることで、正しくジョルダン細胞 <InlineMath math="J(\lambda, k)" /> が対角線上に得られる。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">構成の計算例</h2>

            <p>
                ジョルダン基底の構成は、「広義固有空間を計算して、そこから一番ランクの高いベクトルを見つけ出し、順次 <InlineMath math="(A - \lambda I)" /> を掛けて鎖を下っていく」という「トップダウン方式」が一般的です。
            </p>

            <ContentBox type="example" title="Example 7.4-1 （一般化固有ベクトルを用いたジョルダン基底の構成）">
                <p>次の行列 <InlineMath math="A" /> のジョルダン標準形 <InlineMath math="J" /> と、それを与える変換行列（ジョルダン基底） <InlineMath math="P" /> を求めます。</p>
                <BlockMath math="A = \begin{pmatrix} 3 & -1 & 1 \\ 2 & 0 & 1 \\ 1 & -1 & 2 \end{pmatrix}" />

                <h3 className="text-lg font-bold mt-4 mb-2">Step 1: 固有値の確認</h3>
                <p>特性多項式を計算します。</p>
                <BlockMath math="\Phi_A(t) = \det(tI - A) = (t - 1)(t - 2)^2" />
                <p>
                    よって、固有値は <InlineMath math="\lambda_1 = 1" />（代数的重複度 1）と <InlineMath math="\lambda_2 = 2" />（代数的重複度 2）です。
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 2: 各固有値の幾何的重複度（固有ベクトル）</h3>
                <p className="font-bold"><InlineMath math="\lambda_1 = 1" /> について</p>
                <p><InlineMath math="(A - I)\boldsymbol{v} = \boldsymbol{0}" /> を解くと固有ベクトル <InlineMath math="\boldsymbol{v}_1 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}" /> が得られます。</p>

                <p className="font-bold mt-4"><InlineMath math="\lambda_2 = 2" /> について</p>
                <p>代数的重複度が2なので、幾何的重複度が2なら対角化可能、1ならジョルダン標準形になります。</p>
                <BlockMath math="A - 2I = \begin{pmatrix} 1 & -1 & 1 \\ 2 & -2 & 1 \\ 1 & -1 & 0 \end{pmatrix}" />
                <p>
                    <InlineMath math="(A - 2I)\boldsymbol{v} = \boldsymbol{0}" /> を解くと、<InlineMath math="x - y + z = 0" /> かかつ <InlineMath math="x - y = 0" />（つまり <InlineMath math="z = 0, x = y" />）となるため、固有ベクトルは <InlineMath math="\boldsymbol{p}_2 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}" /> の<strong>1本しか得られません</strong>。<br />
                    （幾何的重複度 <InlineMath math="1 <" /> 代数的重複度 <InlineMath math="2" /> より、この行列は対角化できません。）
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 3: ジョルダン細胞の形の特定</h3>
                <p>
                    <InlineMath math="\lambda_1 = 1" /> は重複度1なので、1次の細胞 <InlineMath math="J(1, 1) = (1)" /> が1つです。<br />
                    <InlineMath math="\lambda_2 = 2" /> は合計サイズが2で、細胞の個数が1（固有ベクトルが1本だから）なので、2次の細胞 <InlineMath math="J(2, 2) = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}" /> が1つあることが確定します。
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 4: 一般化固有ベクトルの探索（鎖の構成）</h3>
                <p>
                    <InlineMath math="\lambda_2 = 2" /> に対する2つ目の基底（ランク2の一般化固有ベクトル） <InlineMath math="\boldsymbol{p}_3" /> を見つけるため、<InlineMath math="(A - 2I)^2\boldsymbol{v} = \boldsymbol{0}" /> の空間へ拡張します…が、より実践的には<strong>「鎖を逆にたどる方程式」<InlineMath math="(A - 2I)\boldsymbol{p}_3 = \boldsymbol{p}_2" /></strong> を直接解く方が圧倒的に早くて確実です。
                </p>
                <BlockMath math="\begin{pmatrix} 1 & -1 & 1 \\ 2 & -2 & 1 \\ 1 & -1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}" />
                <p>
                    これを解くと、連立方程式から <InlineMath math="x - y + z = 1" /> および <InlineMath math="x - y = 0" /> となり、<InlineMath math="z = 1" />, <InlineMath math="x = y" /> が得られます。<br />
                    <InlineMath math="x = y = 0" /> と選ぶと、ランク2の一般化固有ベクトルとして <InlineMath math="\boldsymbol{p}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}" /> が見つかります。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    （ここでは <InlineMath math="x=y" /> であれば何でも良いのですが、最もシンプルな形を選んでいます。このベクトルこそが広義固有空間の「欠けていたピース」なのです。）
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 5: 変換行列とジョルダン標準形の完成</h3>
                <p>
                    鎖の順番（真の固有ベクトルが先、一般化固有ベクトルが後）を守って、ベクトルを横に並べて行列 <InlineMath math="P" /> を構成します。
                </p>
                <BlockMath math="P = (\boldsymbol{v}_1, \boldsymbol{p}_2, \boldsymbol{p}_3) = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}" />
                <p>
                    そして、この基底を用いた表現行列（ジョルダン標準形）<InlineMath math="J" /> は、対角線上に <InlineMath math="1" />（1次細胞）と <InlineMath math="2" />（2次細胞）が並ぶことが計算なしで保証されています。
                </p>
                <BlockMath math="P^{-1} A P = J = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}" />
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ジョルダン標準形を作るための基底（<strong>ジョルダン基底</strong>）は、真の固有ベクトルから始まる「一般化固有ベクトルの鎖」を束ねたものである（Definition 7.4-1）。</li>
                    <li>対角化できない（固有ベクトルが不足している）場合は、見つかった固有ベクトルを右辺に置いた方程式 <InlineMath math="(A - \lambda I)\boldsymbol{v}_{k} = \boldsymbol{v}_{k-1}" /> を解くことで、ランクが上位の一般化固有ベクトルを連鎖的（トップダウン）に見つけ出すことができる（Example 7.4-1）。</li>
                    <li>鎖の順番（ランクの低い方から高い方へ並べる）を厳密に守って行列 <InlineMath math="P" /> を作ることで、その上の成分に <InlineMath math="1" /> が並ぶ正確なジョルダン細胞が得られる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
