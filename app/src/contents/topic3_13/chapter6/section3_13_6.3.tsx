import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GeodesicCompleteness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                測地線は局所的には必ず存在しますが、それをずっと先まで延長できるとは限りません。例えば曲面に「穴」が空いていると、そこに向かって進んだ測地線は途切れてしまいます。曲面がどこまでも測地線を伸ばせるような「完全な」空間であるかどうかの概念が測地的完備性です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">測地的完備性</h2>

            <p className="leading-relaxed">
                曲面上から落ちてしまう「端」や「境界」がないことを厳密に定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 6.3-1 (測地的完備性)"
            >
                <p>
                    正則曲面 <InlineMath math="S" /> が<strong>測地的完備（geodesically complete）</strong>であるとは、曲面上の任意の点 <InlineMath math="p \in S" /> と任意の接ベクトル <InlineMath math="v \in T_p S" /> に対して、それを初期条件とする測地線 <InlineMath math="\alpha(s)" /> が、実数全体 <InlineMath math="s \in (-\infty, \infty)" /> で定義可能であることをいう。
                </p>
                <p>
                    つまり、曲面上のどの点からどの方向へ出発しても、測地線に沿って「無限の過去から無限の未来まで」止まることなく歩き続けられる曲面をいう。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                直感的に「穴がない」「境界がない」曲面は完備になります。
            </p>

            <ContentBox
                type="example"
                title="Example 6.3-1 (完備な曲面と不完備な曲面)"
            >
                <ul className="list-disc list-inside space-y-4">
                    <li><strong>完備な曲面：</strong><br />
                        <InlineMath math="\mathbb{R}^2" />（平面）の測地線は直線であり、無限の彼方まで延長できるので測地的完備である。<br />
                        <InlineMath math="S^2" />（球面）の測地線は大円であり、ぐるぐると永遠に回り続けることができるため、これも測地的完備である。
                    </li>
                    <li><strong>不完備な曲面：</strong><br />
                        原点を除いた平面 <InlineMath math="\mathbb{R}^2 \setminus \{(0,0)\}" /> を考える。ある点から原点に向かって直線を引くと、測地線は原点に到達した時点で定義できなくなり、無限に延長できない。よって不完備である。<br />
                        開円板 <InlineMath math="D^2 = \{(x,y) \mid x^2+y^2 < 1\}" /> も、端に向かって歩けば有限の距離で「外」に出てしまうため不完備である。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ホップ＝リノウの定理</h2>

            <p className="leading-relaxed">
                測地的完備性という微積分・微分方程式に基づく概念は、実は「コーシー列が収束する」という距離空間としての完備性や、「任意の2点が測地線で結べる」という大域的な性質と完全に等価であることが知られています。これがホップ＝リノウの定理です。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 6.3-1 (ホップ＝リノウの定理（概説）)"
            >
                <p>
                    連結な正則曲面 <InlineMath math="S" /> に対して、以下の条件はすべて同値である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="S" /> は測地的完備である（測地線が無限に延長できる）。</li>
                    <li><InlineMath math="S" /> は、第一基本形式から定まる距離に関して距離空間として完備である（コーシー列が必ず収束する）。</li>
                    <li><InlineMath math="S" /> は、<InlineMath math="\mathbb{R}^3" /> の閉集合である。</li>
                    <li><InlineMath math="S" /> の任意の2点 <InlineMath math="p, q" /> は、その間の距離を最小にするような測地線分で結ばれる。</li>
                </ol>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    この定理の厳密な証明は、多様体論（4-5）におけるリーマン多様体の枠組みで詳しく扱われるため、ここでは概念的なスケッチに留める。
                </p>
                <p>
                    <strong>(2) <InlineMath math="\implies" /> (1) の概略：</strong> 測地線がパラメータ <InlineMath math="s \to s_0" /> で延長できなくなると仮定する。このとき、<InlineMath math="s" /> を <InlineMath math="s_0" /> に近づける数列は距離空間においてコーシー列になる。距離空間としての完備性 (2) があれば、このコーシー列は曲面上の何らかの極限点 <InlineMath math="p" /> に収束する。<InlineMath math="p" /> の周りでは微分方程式の局所的解の存在が保証されているため、測地線は <InlineMath math="s_0" /> を越えて延長可能となり、矛盾する。
                </p>
                <p>
                    <strong>(1) <InlineMath math="\implies" /> (4) の概略：</strong> 測地線が無限に延長できる（指数写像が全空間で定義される）ことを利用し、点 <InlineMath math="p" /> を中心とする距離の等高線（測地円）を広げていく議論（ガウスの補題など）を用いることで、必ずターゲットの点 <InlineMath math="q" /> に到達する最短測地線が見つかることを示す。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.3-2 (完備性と大域的な測地線)"
            >
                <p>
                    球面 <InlineMath math="S^2" /> は <InlineMath math="\mathbb{R}^3" /> の有界閉集合（コンパクト集合）であるため、条件 (3) より測地的完備である。
                    実際、ホップ＝リノウの定理の条件 (4) が主張する通り、球面上のどんな2点を選んでも、それらを結ぶ最短の測地線（大円の短い方の弧）が必ず存在する。
                </p>
                <p>
                    一方、北極点 <InlineMath math="N" /> を一つだけ取り除いた球面 <InlineMath math="S^2 \setminus \{N\}" /> は開集合であるため不完備である。
                    この曲面上では、赤道上の点から真北に向かって進む測地線は、北極点の手前で空間が途切れてしまうため無限に延長できない（条件 (1) が不成立）。
                    また、北極のすぐ近くの2点を選ぶと、最短ルートが「取り除かれた北極点」を通るべきルートになってしまい、曲面内だけで2点を結ぶ「最短」の測地線が存在しないケースが生じる（条件 (4) が不成立）。
                </p>
                <p>
                    このように、ホップ＝リノウの定理は「空間に端や穴がない」という直感的なイメージが、幾何学的・解析的・位相的な様々な性質と見事に結びついていることを示している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>どの測地線もパラメータ無限大まで延長できる曲面を、測地的完備な曲面という。</li>
                    <li>ホップ＝リノウの定理は、測地的完備性が「距離空間としての完備性」や「任意の2点が最短測地線で結べること」と同値であることを主張する。</li>
                    <li>曲面に穴が開いていたり端があったりすると、測地線が途切れてしまい完備ではなくなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}