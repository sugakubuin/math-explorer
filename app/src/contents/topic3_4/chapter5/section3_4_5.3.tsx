import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FFTAlgorithmSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                離散フーリエ変換 (DFT) は非常に強力な道具ですが、定義通りに計算するとデータの個数 <InlineMath math="N" /> に対し <InlineMath math="O(N^2)" /> の膨大な計算量を必要とします。これを劇的に高速化し、現代のデジタル文明を支える基盤技術となったのが <b>高速フーリエ変換 (FFT)</b> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">Cooley-Tukey 型アルゴリズムの原理</h2>

            <p>
                最も広く使われている FFT アルゴリズムは、1965年に Cooley と Tukey によって発表されました（そのルーツはガウスまで遡ると言われています）。その基本的なアイデアは、<b>分割統治法</b> にあります。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (FFT の分割原理：Cooley-Tukey)">
                <p>
                    <InlineMath math="N" /> が 2 のべき乗であるとき、長さ <InlineMath math="N" /> の DFT を偶数番目と奇数番目のインデックスに分けることで、2 つの長さ <InlineMath math="N/2" /> の DFT に分解できる：
                </p>
                <BlockMath math="X_k = X_k^{\text{even}} + \omega^k X_k^{\text{odd}} \quad (k = 0, \dots, N/2 - 1)" />
                <BlockMath math="X_{k+N/2} = X_k^{\text{even}} - \omega^k X_k^{\text{odd}} \quad (k = 0, \dots, N/2 - 1)" />
                <p>
                    ここで <InlineMath math="\omega = e^{-i \frac{2\pi}{N}}" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    DFT の和を偶数項と奇数項に分ける（<InlineMath math="N=2M" /> とする）：
                </p>
                <BlockMath math="\begin{aligned} X_k &= \sum_{n=0}^{N-1} x_n \omega_N^{nk} = \sum_{m=0}^{M-1} x_{2m} \omega_N^{2mk} + \sum_{m=0}^{M-1} x_{2m+1} \omega_N^{(2m+1)k} \\ &= \sum_{m=0}^{M-1} x_{2m} \omega_M^{mk} + \omega_N^k \sum_{m=0}^{M-1} x_{2m+1} \omega_M^{mk} \end{aligned}" />
                <p>
                    ここで <InlineMath math="\omega_N^2 = \omega_M" /> を用いた。これはまさに 2 つの <InlineMath math="M" /> 点 DFT の和である。また、<InlineMath math="\omega_N^{k+M} = -\omega_N^k" /> より後半の式も導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-1 (N=4 の FFT 分解)">
                <p>
                    <InlineMath math="N=4" /> の場合、信号を偶数列 <InlineMath math="(x_0, x_2)" /> と奇数列 <InlineMath math="(x_1, x_3)" /> に分けます。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>2点 DFT を計算：<InlineMath math="X^{\text{even}} = (x_0+x_2, x_0-x_2)" />、<InlineMath math="X^{\text{odd}} = (x_1+x_3, x_1-x_3)" /></li>
                    <li>バタフライ演算（<InlineMath math="\omega = -i" />）：
                        <ul className="list-disc list-inside ml-6">
                            <li><InlineMath math="X_0 = (x_0+x_2) + 1 \cdot (x_1+x_3)" /></li>
                            <li><InlineMath math="X_1 = (x_0-x_2) - i \cdot (x_1-x_3)" /></li>
                            <li><InlineMath math="X_2 = (x_0+x_2) - 1 \cdot (x_1+x_3)" /></li>
                            <li><InlineMath math="X_3 = (x_0-x_2) + i \cdot (x_1-x_3)" /></li>
                        </ul>
                    </li>
                </ol>
                <p>
                    このように、2点 DFT の結果を使い回すことで、演算回数を減らすことができます。
                </p>
            </ContentBox>

            <p>
                この操作は、形状が蝶の羽のように見えることから <b>バタフライ演算</b> と呼ばれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算量の削減：O(N^2) から O(N log N) へ</h2>

            <p>
                計算量の違いは、データ数が増えるほど圧倒的な差となって現れます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-2 (FFT の計算量)">
                <p>
                    データ数 <InlineMath math="N = 2^m" /> のとき、FFT の複素乗算回数は <InlineMath math="O(N \log N)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="N" /> 点の計算量 <InlineMath math="T(N)" /> は、2 つの <InlineMath math="N/2" /> 点の計算と <InlineMath math="N" /> 回の複素乗算（バタフライ演算）の和で表される：
                </p>
                <BlockMath math="T(N) = 2T(N/2) + cN" />
                <p>
                    この再帰式を解くと（展開またはマスター定理により）、<InlineMath math="T(N) = cN \log_2 N" /> となり、<InlineMath math="O(N \log N)" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-2 (計算量の比較表)">
                <p>
                    直接 DFT（<InlineMath math="N^2" />）と FFT（<InlineMath math="N \log_2 N" />）の演算回数を比較すると以下のようになります。
                </p>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead>
                            <tr className="border-b dark:border-slate-700">
                                <th className="py-2">データ数 <InlineMath math="N" /></th>
                                <th className="py-2">直接 DFT (<InlineMath math="N^2" />)</th>
                                <th className="py-2">FFT (<InlineMath math="N \log_2 N" />)</th>
                                <th className="py-2">高速化倍率</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b dark:border-slate-800">
                                <td className="py-2">64</td>
                                <td className="py-2">4,096</td>
                                <td className="py-2">384</td>
                                <td className="py-2">約 10.7 倍</td>
                            </tr>
                            <tr className="border-b dark:border-slate-800">
                                <td className="py-2">1,024</td>
                                <td className="py-2">約 100万</td>
                                <td className="py-2">10,240</td>
                                <td className="py-2">約 97.7 倍</td>
                            </tr>
                            <tr className="border-b dark:border-slate-800">
                                <td className="py-2"><InlineMath math="10^6" /></td>
                                <td className="py-2"><InlineMath math="10^{12}" /></td>
                                <td className="py-2">約 <InlineMath math="2 \times 10^7" /></td>
                                <td className="py-2">約 5万 倍</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">FFT の歴史的・技術的意義</h2>

            <ContentBox type="remark" title="現代社会を支える不可視の技術">
                <p>
                    FFT の登場により、それまでは「紙の上での理論」だった多くのフーリエ解析の応用が、リアルタイムで実行可能な「技術」へと変貌しました。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><b>MP3 や JPEG</b>：不要な周波数成分をカットすることによるデータ圧縮。</li>
                    <li><b>Wi-Fi や 5G</b>：OFDM と呼ばれる、周波数分割による高速通信。</li>
                    <li><b>医療画像 (MRI/CT)</b>：計測データからの画像再構成。</li>
                    <li><b>天文学・地震学</b>：観測信号からの周期性検出。</li>
                </ul>
                <p>
                    「20世紀で最も重要なアルゴリズムの一つ」と称される所以です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>FFT は DFT の計算を分割統治法によって劇的に効率化したアルゴリズムである。</li>
                    <li>計算量を <InlineMath math="O(N^2)" /> から <InlineMath math="O(N \log N)" /> に削減したことで、大規模データの解析が可能になった。</li>
                    <li>バタフライ演算による再帰的構造が、ハードウェア・ソフトウェア双方での並列化を容易にした。</li>
                    <li>現代のデジタル信号処理、データ圧縮、無線通信は、この FFT の恩恵の上に成り立っている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
