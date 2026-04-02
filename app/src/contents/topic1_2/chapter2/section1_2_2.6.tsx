import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DerivativeApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                導関数の最も重要な応用の一つは、<strong>関数のグラフの概形を描くこと</strong>です。
                導関数の符号から関数の「増減（増加・減少）」が分かり、第2次導関数の符号から「凹凸（曲がり具合）」が分かります。
                これらの情報をまとめることで、複雑な関数の全体像を捉えることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 平均値の定理
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">平均値の定理</h2>

            <p>
                微分学における最も重要で根幹をなす定理です。「関数の平均変化率（割線の傾き）と一致する瞬間変化率（接線の傾き）を持つ点が、区間のどこかに必ず存在する」ことを保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 2.6-1 （ロルの定理 / Rolle's Theorem）">
                <p>
                    関数 <InlineMath math="f(x)" /> が閉区間 <InlineMath math="[a, b]" /> で連続、開区間 <InlineMath math="(a, b)" /> で微分可能であり、
                    さらに <strong><InlineMath math="f(a) = f(b)" /></strong> であるとする。
                    このとき、
                </p>
                <BlockMath math="f'(c) = 0 \quad (a < c < b)" />
                <p>
                    を満たす実数 <InlineMath math="c" /> が少なくとも1つ存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （ロルの定理の概略）">
                <p>
                    最大値・最小値の定理により、閉区間上で連続な関数は必ず最大値と最小値を持ちます。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>
                        関数がずっと定数の場合：区間内のすべての点で <InlineMath math="f'(x) = 0" /> となり定理は成り立ちます。
                    </li>
                    <li>
                        関数が定数でない場合：最大値か最小値の少なくとも一方は、端点（<InlineMath math="a, b" />）ではなく開区間 <InlineMath math="(a, b)" /> 内のどこか（仮に <InlineMath math="c" /> とします）でとることになります。
                    </li>
                </ol>
                <p className="mt-2">
                    この点 <InlineMath math="c" /> では、もし <InlineMath math="f'(c) > 0" /> ならばその直後でより大きい値をとるはずであり、
                    <InlineMath math="f'(c) < 0" /> ならばその直前でより大きい値をとっていたはずです。
                    したがって最大・最小をとる点では接線の傾きは <InlineMath math="0" />、すなわち <InlineMath math="f'(c) = 0" /> でなければなりません。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.6-2 （平均値の定理 / Mean Value Theorem）">
                <p>
                    ロルの定理の条件「<InlineMath math="f(a) = f(b)" />」を外した一般的な形です。<br />
                    関数 <InlineMath math="f(x)" /> が閉区間 <InlineMath math="[a, b]" /> で連続、開区間 <InlineMath math="(a, b)" /> で微分可能であるとき、
                </p>
                <BlockMath math="\frac{f(b) - f(a)}{b - a} = f'(c) \quad (a < c < b)" />
                <p>
                    を満たす実数 <InlineMath math="c" /> が少なくとも1つ存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （平均値の定理）">
                <p>
                    ロルの定理を使って証明できます。
                    関数上の両端点 <InlineMath math="(a, f(a))" /> と <InlineMath math="(b, f(b))" /> を結ぶ直線の式を <InlineMath math="g(x)" /> とします。
                </p>
                <BlockMath math="g(x) = f(a) + \frac{f(b) - f(a)}{b - a} (x - a)" />
                <p>
                    新しく関数 <InlineMath math="h(x) = f(x) - g(x)" /> （元の関数と直線の差）を作ると、<br />
                    <InlineMath math="h(a) = f(a) - f(a) = 0" />, <InlineMath math="\quad h(b) = f(b) - f(b) = 0" /> となるため、<InlineMath math="h(x)" /> に対してロルの定理が使えます。
                </p>
                <p>
                    ロルの定理より、ある <InlineMath math="c \in (a, b)" /> で <InlineMath math="h'(c) = 0" /> となります。<br />
                    ここで <InlineMath math="h'(x) = f'(x) - g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a}" /> ですから、<InlineMath math="h'(c) = 0" /> は
                </p>
                <BlockMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />
                <p>を意味し、定理が証明されます。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark （平均値の定理の意義）">
                <p>
                    平均値の定理により、区間全体での関数の「変化量」を、ある1点での「微分係数（導関数の値）」に結びつけることができます。
                    この定理から、「導関数が常に正なら関数は単調増加である」といった関数の性質が厳密に証明されます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 関数の単調性と極値
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">関数の単調性と極値</h2>

            <p>
                導関数の符号は関数の増減と直結しています。
            </p>

            <ContentBox type="proposition" title="Proposition 2.6-1 （導関数の符号と単調性）">
                <p>
                    ある区間において：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>常に <InlineMath math="f'(x) > 0" /> ならば、<InlineMath math="f(x)" /> はその区間で<strong>単調増加</strong>する。</li>
                    <li>常に <InlineMath math="f'(x) < 0" /> ならば、<InlineMath math="f(x)" /> はその区間で<strong>単調減少</strong>する。</li>
                    <li>常に <InlineMath math="f'(x) = 0" /> ならば、<InlineMath math="f(x)" /> はその区間で<strong>定数</strong>である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="definition" title="Definition 2.6-1 （極値：Local Extrema）">
                <p>
                    関数 <InlineMath math="f(x)" /> が <InlineMath math="x = c" /> の周辺で：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>最も大きい値をとるとき、<InlineMath math="f(c)" /> を<strong>極大値</strong>（Local Maximum）という。</li>
                    <li>最も小さい値をとるとき、<InlineMath math="f(c)" /> を<strong>極小値</strong>（Local Minimum）という。</li>
                </ul>
                <p className="mt-2 text-sm">
                    極大値と極小値を合わせて<strong>極値</strong>と呼びます。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.6-3 （極値の第1次判定条件）">
                <p>
                    関数 <InlineMath math="f(x)" /> が <InlineMath math="x = c" /> で極値をとるとし、<InlineMath math="x = c" /> で微分可能ならば、
                </p>
                <BlockMath math="f'(c) = 0" />
                <p>である（接線が水平になる）。</p>
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-bold">
                    【注意】逆は成り立ちません。<InlineMath math="f'(c) = 0" /> であっても極値とは限りません（例：<InlineMath math="f(x) = x^3" /> における <InlineMath math="x = 0" />）。
                    極値であるためには、<InlineMath math="x = c" /> の前後で <InlineMath math="f'(x)" /> の符号が変わる必要があります。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （極値の第1次判定条件）">
                <p>
                    <InlineMath math="x = c" /> で極大値をとると仮定します。
                    極大値の定義より、十分小さな <InlineMath math="h" /> に対して常に <InlineMath math="f(c+h) \le f(c)" /> となります。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <InlineMath math="h > 0" /> （右側から近づく）の場合：<br />
                        <InlineMath math="f(c+h) - f(c) \le 0" /> なので、差分商は負または <InlineMath math="0" /> になります。<br />
                        <InlineMath math="\displaystyle \lim_{h \to 0+} \frac{f(c+h) - f(c)}{h} \le 0" />
                    </li>
                    <li>
                        <InlineMath math="h < 0" /> （左側から近づく）の場合：<br />
                        分母が負になるため差分商は正または <InlineMath math="0" /> になります。<br />
                        <InlineMath math="\displaystyle \lim_{h \to 0-} \frac{f(c+h) - f(c)}{h} \ge 0" />
                    </li>
                </ul>
                <p className="mt-2">
                    <InlineMath math="x = c" /> で微分可能であるということは、両側からの極限が一致して <InlineMath math="f'(c)" /> になるということです。<br />
                    <InlineMath math="0 \le f'(c) \le 0" /> を満たす実数は <InlineMath math="0" /> しかないため、<InlineMath math="f'(c) = 0" /> が導かれます。
                    （極小値の場合も同様に証明できます）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 凹凸と変曲点
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">凹凸と変曲点</h2>

            <p>
                第2次導関数 <InlineMath math="f''(x)" /> の符号を調べることで、曲線の「曲がり方」が分かります。
            </p>

            <ContentBox type="definition" title="Definition 2.6-2 （上に凸・下に凸、変曲点）">
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>下に凸（上に開く）：</strong> 曲線上の任意の2点を結ぶ線分が、常に曲線の上側にある状態。<br />
                        （接線の傾きが次第に大きくなる）
                    </li>
                    <li>
                        <strong>上に凸（下に開く）：</strong> 曲線上の任意の2点を結ぶ線分が、常に曲線の下側にある状態。<br />
                        （接線の傾きが次第に小さくなる）
                    </li>
                    <li>
                        <strong>変曲点：</strong> 曲線の凹凸が入れ替わる点。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 2.6-2 （第2次導関数と凹凸）">
                <ul className="list-disc pl-5 space-y-1">
                    <li>区間で常に <InlineMath math="f''(x) > 0" /> ならば、グラフは<strong>下に凸</strong>である。</li>
                    <li>区間で常に <InlineMath math="f''(x) < 0" /> ならば、グラフは<strong>上に凸</strong>である。</li>
                    <li><InlineMath math="f''(c) = 0" /> であり、<InlineMath math="x = c" /> の前後で <InlineMath math="f''(x)" /> の符号が変われば、点 <InlineMath math="(c, f(c))" /> は<strong>変曲点</strong>である。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 グラフの概形と増減表
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">グラフの概形と増減表</h2>

            <p>
                これまでの知識である <InlineMath math="f'(x), f''(x)" /> の符号変化を表にまとめたものを<strong>増減表</strong>と呼びます。
            </p>

            <ContentBox type="remark" title="Remark （増減表の作成と概形の描き方）">
                <p>関数のグラフを描く手順は以下の通り：</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li><strong>定義域</strong>を確認し、必要であれば対称性や周期性を調べる。</li>
                    <li><InlineMath math="f'(x)" /> を計算し、<InlineMath math="f'(x) = 0" /> となる <InlineMath math="x" /> を求める。</li>
                    <li><InlineMath math="f''(x)" /> を計算し、<InlineMath math="f''(x) = 0" /> となる <InlineMath math="x" /> を求める。</li>
                    <li>以上の <InlineMath math="x" /> を用いて増減表を作成し、<InlineMath math="f(x), f'(x), f''(x)" /> の符号と変化をまとめる。</li>
                    <li>極値や変曲点の座標、<InlineMath math="x" />切片・<InlineMath math="y" />切片などの特徴的な点を計算する。</li>
                    <li>極限（<InlineMath math="x \to \pm\infty" /> や漸近線）を調べる。</li>
                    <li>増減表と計算結果を元に、なめらかな曲線でグラフを描く。</li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 2.6-1 （増減表の例）">
                <p>
                    <InlineMath math="f(x) = x^3 - 3x" /> のグラフを描くための事前準備をする。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <ul className="list-disc pl-5 mt-1 space-y-2">
                    <li><InlineMath math="f'(x) = 3x^2 - 3 = 3(x-1)(x+1)" />。したがって <InlineMath math="x = \pm 1" /> で <InlineMath math="f'(x) = 0" />。</li>
                    <li><InlineMath math="f''(x) = 6x" />。したがって <InlineMath math="x = 0" /> で <InlineMath math="f''(x) = 0" />。</li>
                </ul>
                <p className="mt-3">増減表：</p>
                <div className="overflow-x-auto mt-2">
                    <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 text-center">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="x" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="\cdots" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-1" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="\cdots" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="0" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="\cdots" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="1" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="\cdots" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold"><InlineMath math="f'(x)" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="0" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="0" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold"><InlineMath math="f''(x)" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="0" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold"><InlineMath math="f(x)" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2">⤴ (上凸増)</td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2">2 (極大)</td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2">⤵ (上凸減)</td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2">0 (変曲点)</td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2">⤵ (下凸減)</td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2">-2 (極小)</td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2">⤴ (下凸増)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>平均値の定理</strong>は、微分の理論を支える重要な定理である（Theorem 2.6-2）。</li>
                    <li><InlineMath math="f'(x)" /> の符号から関数の<strong>増減</strong>と<strong>極値</strong>がわかる（Proposition 2.6-1, Definition 2.6-1）。</li>
                    <li><InlineMath math="f''(x)" /> の符号から曲線の<strong>凹凸</strong>と<strong>変曲点</strong>がわかる（Proposition 2.6-2, Definition 2.6-2）。</li>
                    <li>これらをまとめた<strong>増減表</strong>を作成することで、関数のグラフの概形を正確に描くことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
