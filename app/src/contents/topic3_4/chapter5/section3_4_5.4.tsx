import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FFTApplicationsSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                高速フーリエ変換 (FFT) は、単なる周波数解析の道具に留まらず、計算科学のあらゆる場面で応用されています。本節では、数理的な応用としての多項式乗算と、デジタル信号処理の要となるサンプリング定理について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多項式の高速乗算</h2>

            <ContentBox type="theorem" title="Theorem 5.4-1 (FFT を用いた多項式乗算)">
                <p>
                    次数の和が <InlineMath math="N-1" /> 未満となる 2 つの多項式 <InlineMath math="A(x), B(x)" /> の積 <InlineMath math="C(x)" /> の係数列は、それぞれの係数列を長さ <InlineMath math="N" /> に拡張して FFT し、成分ごとの積をとった後に IFFT を施すことで得られる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    多項式の積は、係数列の <b>線形畳み込み</b> に対応する。
                </p>
                <p>
                    長さ <InlineMath math="N" /> の DFT による畳み込み定理（Theorem 5.2-2）は循環畳み込みを与えるが、結果の次数（次数の和）よりも大きな <InlineMath math="N" /> でゼロパディングを行うことで、循環が起きる前に計算を終えることができる。これにより、循環畳み込みの結果が線形畳み込みの結果と一致し、多項式の積が正しく求まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                数千次、数万次の多項式どうしの掛け算を愚直に行うと、計算量は <InlineMath math="O(N^2)" /> となります。しかし、FFT を用いることでこれを劇的に高速化できます。
            </p>

            <ContentBox type="example" title="Example 5.4-1 (多項式乗算の具体例)">
                <p>
                    <InlineMath math="A(x) = 1+2x+3x^2" /> と <InlineMath math="B(x) = 4+5x+6x^2" /> の積を求めます。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>結果の次数は 4 なので、長さ 6 以上の FFT を用います。係数列を <InlineMath math="[1,2,3,0,0,0]" /> と <InlineMath math="[4,5,6,0,0,0]" /> とします。</li>
                    <li>それぞれを FFT し、成分ごとに掛け合わせ、負の IFFT を施します。</li>
                    <li>結果として係数列 <InlineMath math="[4, 13, 28, 27, 18, 0]" /> が得られ、これは多項式 <InlineMath math="4+13x+28x^2+27x^3+18x^4" /> に対応します。</li>
                </ol>
                <p>
                    巨大な整数の乗算も、このように各桁を多項式の係数とみなすことで <InlineMath math="O(N \log N)" /> で計算可能となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">サンプリング定理とエイリアシング</h2>

            <p>
                連続信号を離散信号に変換する際、どれだけ細かい間隔でサンプリングすれば「元の情報を失わずに済むか」という問いに対する答えが <b>サンプリング定理</b> です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-2 (ナイキスト・シャノンのサンプリング定理)">
                <p>
                    信号に含まれる最高周波数成分を <InlineMath math="f_{\text{max}}" /> とするとき、サンプリング周波数 <InlineMath math="f_s" /> が次を満たすならば、
                </p>
                <BlockMath math="f_s > 2 f_{\text{max}}" />
                <p>
                    離散化されたデータから元の連続信号を <b>完全に</b> 復元することができる。この <InlineMath math="2 f_{\text{max}}" /> をナイキスト周波数と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    時間領域でのサンプリング（間隔 <InlineMath math="T = 1/f_s" />）は、インパルス列 <InlineMath math="\sum_{n} \delta(t-nT)" /> との積に対応する。これをフーリエ変換すると、周波数領域では周期 <InlineMath math="f_s" /> ごとに元のスペクトル <InlineMath math="\hat{f}(\xi)" /> が複製されて並ぶ（ボアソンの和公式）。
                </p>
                <BlockMath math="\hat{f}_{\text{sample}}(\xi) = \frac{1}{T} \sum_{k=-\infty}^{\infty} \hat{f}(\xi - k f_s)" />
                <p>
                    もし <InlineMath math="f_s > 2 f_{\text{max}}" /> ならば、複製された各スペクトルは重なり合わない。したがって、理想的なローパスフィルタ（遮断周波数 <InlineMath math="f_s/2" />）を掛けることで、中心にある元のスペクトルのみを取り出し、元の連続信号を完全に復元できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="エイリアシング現象">
                <p>
                    サンプリングが不十分（<InlineMath math="f_s \leq 2 f_{\text{max}}" />）な場合、高周波成分が低周波成分として「化けて」現れてしまいます。これを <b>エイリアシング（折り返し雑音）</b> と呼びます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-2 (エイリアシングの数値例)">
                <p>
                    <InlineMath math="f(t) = \sin(2\pi \cdot 3t)" /> （3 Hz）の信号を、サンプリング周波数 <InlineMath math="f_s = 4" /> Hz で標本化するとします。
                </p>
                <p>
                    ナイキスト条件 <InlineMath math="f_s > 2 \cdot 3 = 6" /> を満たしておらず、実際に得られる離散データは <InlineMath math="\sin(2\pi \cdot 1t)" /> （1 Hz）の成分として観測されます。高域の 3 Hz が、サンプリング周波数の半分（2 Hz）で「折り返され」、1 Hz に化けてしまったのです。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="スペクトル解析の広範な応用">
                <p>
                    FFT による高速な周波数解析は、現代の科学技術のあらゆる場面で利用されています：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><b>音声工学</b>：音声のピッチ（基本周波数）検出や、スペクトログラムによる声紋分析。</li>
                    <li><b>医療画像処理</b>：MRI や CT スキャンにおける、計測データ（k空間データ）からの画像構成。</li>
                    <li><b>通信工学</b>：OFDM（直交周波数分割多重）による Wi-Fi や 5G 通信の多重化。</li>
                    <li><b>計測工学</b>：サンプリング前のアンチエリアスフィルタの設計や、振動解析による構造物の異常検知。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実用上の注意：窓関数</h2>

            <p>
                有限個のデータのみを取り出す操作は、実質的に信号に「箱型関数」を掛けていることになります。これが原因で、スペクトルに「漏れ（リーケッジ）」が生じることがあります。
            </p>

            <ContentBox type="remark" title="窓関数の役割">
                <p>
                    データの端を滑らかにゼロに近づける <b>ハニング窓</b> や <b>ハミング窓</b> などの窓関数を適用することで、解析精度の向上を図るのが一般的です。これは、§3 で学んだ「畳み込みによる平滑化」の実装上の現れとも言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>FFT は、単なる周波数解析を超えて、多項式乗算などの計算アルゴリズムの高速化に貢献している。</li>
                    <li>サンプリング定理は、アナログ信号をデジタル化する際の理論的な限界と方法論を規定する。</li>
                    <li>エイリアシングやリーケッジ等の現実的な問題を回避するために、フィルタや窓関数の理解が不可欠である。</li>
                    <li>本章で学んだ離散フーリエ解析の知識は、現代のあらゆる工学・科学分野における「データの目」となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
