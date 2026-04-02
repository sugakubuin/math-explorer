import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_4_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        長さ <InlineMath math="N" /> の複素数列 <InlineMath math="\{x_n\}" /> に対し、その<b>離散フーリエ変換 (DFT)</b> <InlineMath math="X_k" /> および<b>逆離散フーリエ変換 (IDFT)</b> の定義式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 および Definition 5.1-2 に基づき、
                        </p>
                        <BlockMath math="X_k = \sum_{n=0}^{N-1} x_n e^{-i \frac{2\pi}{N} kn} \quad (k = 0, 1, \dots, N-1)" />
                        <BlockMath math="x_n = \frac{1}{N} \sum_{k=0}^{N-1} X_k e^{i \frac{2\pi}{N} kn} \quad (n = 0, 1, \dots, N-1)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        DFT 行列（フーリエ行列） <InlineMath math="W" /> の各成分を <InlineMath math="W_{kn} = e^{-i \frac{2\pi}{N} kn}" /> とするとき、 <InlineMath math="W^* W = N I" /> （直交性）が成り立つことを、等比数列の和を用いて示せ（Proposition 5.1-4 証）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="(W^* W)_{nm} = \sum_{k=0}^{N-1} e^{i \frac{2\pi}{N} kn} e^{-i \frac{2\pi}{N} km} = \sum_{k=0}^{N-1} (e^{i \frac{2\pi}{N} (n-m)})^k" /> と展開する。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><InlineMath math="n = m" /> のとき、全項が <InlineMath math="1" /> なので和は <InlineMath math="N" /> となる。</li>
                            <li><InlineMath math="n \neq m" /> のとき、公比 <InlineMath math="a = e^{i \frac{2\pi}{N} (n-m)} \neq 1" /> かつ <InlineMath math="a^N = 1" /> である等比数列の和として、 <InlineMath math="\frac{1-a^N}{1-a} = 0" /> となる。</li>
                        </ul>
                        <p className="mt-2">
                            ゆえに、 <InlineMath math="(W^* W)_{nm} = N \delta_{nm}" /> であり、行列形式で <InlineMath math="W^* W = N I" /> が示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        データ数 <InlineMath math="N" /> に対し、定義通りの DFT 計算の計算量と、高速フーリエ変換 (FFT) アルゴリズムを用いた場合の計算量をそれぞれ <InlineMath math="O" /> 記法で記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.3-2 および Example 5.3-2 に基づき、
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>直接 DFT: <b><InlineMath math="O(N^2)" /></b></li>
                            <li>FFT: <b><InlineMath math="O(N \log N)" /></b></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        <InlineMath math="N=4" /> のとき、信号 <InlineMath math="\mathbf{x} = (1, 0, 0, 0)" /> （単位パルス）の DFT を求めよ（Example 5.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義式 <InlineMath math="X_k = \sum_{n=0}^3 x_n e^{-i \frac{2\pi}{4} kn}" /> に代入すると、 <InlineMath math="x_0=1" /> 以外の項はゼロであるから、
                        </p>
                        <BlockMath math="X_k = 1 \cdot e^{-i \frac{\pi}{2} k \cdot 0} = 1 \quad (k=0, 1, 2, 3)" />
                        <p>
                            したがって、 <InlineMath math="\mathbf{X} = (1, 1, 1, 1)" /> となり、全周波数成分を等しく含むスペクトルが得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        信号 <InlineMath math="\mathbf{x} = (1, 0, 0, 0)" /> を 1 サンプル循環シフトさせた信号 <InlineMath math="\mathbf{x}' = (0, 1, 0, 0)" /> の DFT を、循環シフト則を用いて求めよ（Example 5.2-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            循環シフト則 <InlineMath math="x_{(n-m) \bmod N} \leftrightarrow e^{-i \frac{2\pi}{N} km} X_k" /> を用いる。
                            <InlineMath math="m=1, N=4, X_k=1" /> より、
                        </p>
                        <BlockMath math="X_k' = e^{-i \frac{2\pi}{4} k \cdot 1} \cdot 1 = e^{-i \frac{\pi}{2} k}" />
                        <p>
                            したがって、 <InlineMath math="\mathbf{X}' = (1, -i, -1, i)" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                         <InlineMath math="N=2" /> のとき、 <InlineMath math="\mathbf{x} = (1, 1)" /> と <InlineMath math="\mathbf{h} = (1, -1)" /> の<b>循環畳み込み</b> <InlineMath math="\mathbf{x} * \mathbf{h}" /> を計算せよ（Theorem 5.2-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            循環畳み込みの定義 <InlineMath math="y_n = \sum_{m=0}^{N-1} x_m h_{(n-m) \bmod N}" /> より、
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><InlineMath math="y_0 = x_0 h_0 + x_1 h_1 = 1 \cdot 1 + 1 \cdot (-1) = 0" /></li>
                            <li><InlineMath math="y_1 = x_0 h_1 + x_1 h_0 = 1 \cdot (-1) + 1 \cdot 1 = 0" /></li>
                        </ul>
                        <p className="mt-2">
                            したがって、 <InlineMath math="\mathbf{y} = (0, 0)" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                         <InlineMath math="\mathbf{x} = (1, i, -1, -i)" /> に対し、離散版パーセバルの等式 <InlineMath math="\sum |x_n|^2 = \frac{1}{N} \sum |X_k|^2" /> が成り立つことを、各辺の値を計算することで確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず左辺（時間領域のエネルギー）を計算する：
                        </p>
                        <BlockMath math="\sum_{n=0}^3 |x_n|^2 = |1|^2 + |i|^2 + |-1|^2 + |-i|^2 = 1 + 1 + 1 + 1 = 4" />
                        <p className="mt-2">
                            次に DFT <InlineMath math="\mathbf{X}" /> を計算する：
                            <InlineMath math="X_k = 1 + i \omega^k - \omega^{2k} - i \omega^{3k}" /> （ここで <InlineMath math="\omega = -i" />）。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><InlineMath math="X_0 = 1+i-1-i = 0" /></li>
                            <li><InlineMath math="X_1 = 1+i(-i)-(-1)-i(i) = 1+1+1+1 = 4" /></li>
                            <li><InlineMath math="X_2 = 1+i(-1)-(1)-i(-1) = 0" /></li>
                            <li><InlineMath math="X_3 = 1+i(i)-(-1)-i(-i) = 1-1+1-1 = 0" /></li>
                        </ul>
                        <p className="mt-2">
                            右辺は <InlineMath math="\frac{1}{4} (0^2 + 4^2 + 0^2 + 0^2) = 4" /> となり、等式が成立する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        Cooley-Tukey 型 FFT の分割原理（Theorem 5.3-1）において、長さ <InlineMath math="N" /> の和を偶数項と奇数項に分けることで、なぜ 2 つの長さ <InlineMath math="N/2" /> の DFT に帰着できるのか、変換核 <InlineMath math="\omega_N" /> の性質を用いて簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            長さ <InlineMath math="N" /> の核 <InlineMath math="\omega_N = e^{-i 2\pi/N}" /> に対し、 <InlineMath math="\omega_N^2 = \omega_{N/2}" /> という性質が成り立つ。これにより、偶数番目のサンプルの和は
                            <BlockMath math="\sum x_{2m} \omega_N^{2mk} = \sum x_{2m} \omega_{N/2}^{mk}" />
                            となり、これはまさに長さ <InlineMath math="N/2" /> の数列の DFT 定義そのものに一致する。奇数番目も同様であり、この対称性と周期性を利用することで再帰的な高速化が可能となるのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        サンプリング周波数 <InlineMath math="f_s = 44.1" /> kHz で録音された音声データに、 25 kHz の高周波ノイズが混入した場合、なぜこれがエイリアシング（折り返し雑音）として観測されるのか。また、実際に観測される見かけ上の周波数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            サンプリング定理によれば、情報を正しく保持できる限界（ナイキスト周波数）は <InlineMath math="f_s/2 = 22.05" /> kHz である。
                            25 kHz のノイズはこの限界を超えているため、スペクトルがナイキスト周波数で「折り返され」、可聴域（低周波）に化けて現れる。
                        </p>
                        <p className="mt-2">
                            見かけ上の周波数は、サンプリング周波数の整数倍との差の絶対値として、
                            <BlockMath math="|25 - 44.1| = 19.1 \text{ kHz}" />
                            として観測される。これが、サンプリング前のアンチエリアシング・フィルタが必要となる理由である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        FFT を用いて 2 つの <InlineMath math="M" /> 次多項式の積を計算する場合、計算量を <InlineMath math="O(M \log M)" /> に抑えるための具体的な手順を、§5.4 の畳み込み定理の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            手順は以下の通りである。
                        </p>
                        <ol className="list-decimal list-inside space-y-1">
                            <li><b>ゼロパディング</b>：多項式の積の次数は最大 <InlineMath math="2M" /> になるため、係数列を長さ <InlineMath math="N \ge 2M+1" /> （通常は 2 のべき乗）まで拡張し、余った部分を 0 で埋める。</li>
                            <li><b>FFT の適用</b>：拡張した 2 つの係数列に対して FFT を施し、周波数領域のデータを得る。</li>
                            <li><b>成分積</b>：得られた 2 つのスペクトルを周波数ごとに掛け合わせる。</li>
                            <li><b>IFFT</b>：積の結果に対して逆 FFT を施す。</li>
                        </ol>
                        <p className="mt-2">
                            ゼロパディングにより「循環畳み込み」が「線形畳み込み」と一致するように工夫することで、多項式の係数の積（畳み込み）を FFT の効率性 (<InlineMath math="O(N \log N)" />) を使って計算できる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
