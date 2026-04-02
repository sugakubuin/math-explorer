import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DFTPropertiesSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                離散フーリエ変換 (DFT) は、連続フーリエ変換と同様に多くの物理的・数学的に有用な性質を持っています。ただし、離散的な数列を扱うため、「周期性」を考慮した <b>循環的（サーキュラー）</b> な演算が中心となります。本節では、データ処理において極めて重要な DFT の諸性質を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">循環シフトと線形性</h2>

            <p>
                DFT は線形変換であるため、和の変換は変換の和となります。また、時間軸でのずらし（シフト）は、スペクトルの「位相」の回転として現れます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.2-1 (循環シフト則)">
                <p>
                    信号を <InlineMath math="m" /> サンプルだけ <b>循環的に</b> シフトさせた信号 <InlineMath math="x_{(n-m) \pmod N}" /> の DFT は、元の DFT <InlineMath math="X_k" /> に位相因子を掛けたものになる：
                </p>
                <BlockMath math="x_{(n-m) \bmod N} \quad \xrightarrow{\text{DFT}} \quad e^{-i \frac{2\pi}{N} km} X_k" />
                <p>
                    これは、時間領域での遅延が周波数領域では位相の遅れに対応することを示している。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    DFT の定義に従い、<InlineMath math="j = (n-m) \pmod N" /> と置換して計算する。指数関数の周期性 <InlineMath math="e^{-i \frac{2\pi}{N} k(j+N)} = e^{-i \frac{2\pi}{N} kj}" /> により、和の範囲を維持したまま次を得る：
                </p>
                <BlockMath math="\begin{aligned} \sum_{n=0}^{N-1} x_{(n-m) \bmod N} e^{-i \frac{2\pi}{N} kn} &= \sum_{j=0}^{N-1} x_j e^{-i \frac{2\pi}{N} k(j+m)} \\ &= e^{-i \frac{2\pi}{N} km} \sum_{j=0}^{N-1} x_j e^{-i \frac{2\pi}{N} kj} \\ &= e^{-i \frac{2\pi}{N} km} X_k \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (循環シフトの具体例)">
                <p>
                    <InlineMath math="N=4" />、<InlineMath math="\mathbf{x} = (1, 0, 0, 0)" /> を 1 サンプル遅延させた信号は <InlineMath math="\mathbf{x}' = (0, 1, 0, 0)" /> です。このとき、
                </p>
                <BlockMath math="X_k' = e^{-i \frac{2\pi}{4} k \cdot 1} X_k = (-i)^k \cdot 1 = (1, -i, -1, i)" />
                <p>
                    となり、Example 5.1-2 の結果と完全に一致します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">循環畳み込み定理</h2>

            <p>
                DFT における最も重要な性質は、時間領域での畳み込みが周波数領域での <b>単純な掛け算</b> に化けることです。ただし、通常の畳み込みではなく「循環的な畳み込み」である点に注意が必要です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-2 (循環畳み込み定理)">
                <p>
                    2 つの数列 <InlineMath math="\{x_n\}, \{h_n\}" /> の <b>循環畳み込み</b> を次のように定義する：
                </p>
                <BlockMath math="y_n = \sum_{m=0}^{N-1} x_m h_{(n-m) \pmod N}" />
                <p>
                    このとき、<InlineMath math="y_n" /> の DFT は、それぞれの DFT の成分ごとの積に一致する：
                </p>
                <BlockMath math="Y_k = X_k \cdot H_k" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y_n" /> の DFT 定義式に循環畳み込みの式を代入し、和の順序を交換する：
                </p>
                <BlockMath math="\begin{aligned} Y_k &= \sum_{n=0}^{N-1} \left( \sum_{m=0}^{N-1} x_m h_{(n-m) \bmod N} \right) e^{-i \frac{2\pi}{N} kn} \\ &= \sum_{m=0}^{N-1} x_m \left( \sum_{n=0}^{N-1} h_{(n-m) \bmod N} e^{-i \frac{2\pi}{N} kn} \right) \end{aligned}" />
                <p>
                    内側の和に循環シフト則（Proposition 5.2-1）を適用すると <InlineMath math="e^{-i \frac{2\pi}{N} km} H_k" /> となるため、
                </p>
                <BlockMath math="\begin{aligned} Y_k &= \sum_{m=0}^{N-1} x_m (e^{-i \frac{2\pi}{N} km} H_k) \\ &= H_k \left( \sum_{m=0}^{N-1} x_m e^{-i \frac{2\pi}{N} km} \right) \\ &= H_k X_k \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-2 (循環畳み込みの数値計算例)">
                <p>
                    <InlineMath math="N=4" />、<InlineMath math="\mathbf{x} = (1, 1, 0, 0)" />、<InlineMath math="\mathbf{h} = (1, 0, 0, 1)" /> の循環畳み込みを計算します。
                </p>
                <p>
                    直接計算による結果は <InlineMath math="\mathbf{y} = (2, 1, 0, 1)" /> となります。一方、それぞれの DFT は <InlineMath math="\mathbf{X} = (2, 1-i, 0, 1+i)" />、<InlineMath math="\mathbf{H} = (2, 1+i, 0, 1-i)" /> です。これらの成分積をとると、
                </p>
                <BlockMath math="\mathbf{Y} = (4, (1-i)(1+i), 0, (1+i)(1-i)) = (4, 2, 0, 2)" />
                <p>
                    となり、これを IDFT すると確かに <InlineMath math="\mathbf{y} = (2, 1, 0, 1)" /> が得られます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="線形畳み込みとの違い">
                <p>
                    コンピュータ上で通常のフィルタ処理（線形畳み込み）を行うためには、データの末尾にゼロを追加する <b>ゼロパディング</b> を行い、循環畳み込みが線形畳み込みと一致するように工夫する必要があります。これが、音声や画像処理で FFT が効率的に使われるための理論的根拠となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">パーセバルの等式（エネルギー保存）</h2>

            <ContentBox type="theorem" title="Theorem 5.2-3 (離散版パーセバルの等式)">
                <p>
                    変換の前後で信号の <b>全エネルギー</b> は保存される（正規化因子を考慮した場合）：
                </p>
                <BlockMath math="\sum_{n=0}^{N-1} |x_n|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X_k|^2" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    左辺の <InlineMath math="\overline{x_n}" /> に、§5.1 で定義した <b>IDFT (逆離散フーリエ変換)</b> の式を代入して展開する：
                </p>
                <BlockMath math="\begin{aligned} \sum_{n=0}^{N-1} |x_n|^2 &= \sum_{n=0}^{N-1} x_n \overline{x_n} = \sum_{n=0}^{N-1} x_n \left( \frac{1}{N} \sum_{k=0}^{N-1} \overline{X_k} e^{-i \frac{2\pi}{N} kn} \right) \\ &= \frac{1}{N} \sum_{k=0}^{N-1} \overline{X_k} \left( \sum_{n=0}^{N-1} x_n e^{-i \frac{2\pi}{N} kn} \right) \\ &= \frac{1}{N} \sum_{k=0}^{N-1} \overline{X_k} X_k = \frac{1}{N} \sum_{k=0}^{N-1} |X_k|^2 \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-3 (パーセバルの等式の確認)">
                <p>
                    <InlineMath math="\mathbf{x} = (1, 1, 0, 0)" /> の場合、<InlineMath math="\sum |x_n|^2 = 2" /> です。前述の DFT 結果 <InlineMath math="\mathbf{X}" /> より、
                </p>
                <BlockMath math="\begin{aligned} \frac{1}{4} \sum |X_k|^2 &= \frac{1}{4} (2^2 + |1-i|^2 + 0^2 + |1+i|^2) \\ &= \frac{1}{4} (4 + 2 + 0 + 2) = 2 \end{aligned}" />
                <p>
                    となり、等式が成立することが確認できます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-4 (エネルギーの周波数分布)">
                <p>
                    <InlineMath math="\mathbf{x} = (1, 0, -1, 0)" /> の DFT は <InlineMath math="\mathbf{X} = (0, 2, 0, 2)" /> です。この信号のエネルギー <InlineMath math="\sum |x_n|^2 = 2" /> は、すべて <InlineMath math="k=1, 3" /> の「動きのある」成分に集中しており、直流成分（<InlineMath math="k=0" />）はゼロであることがわかります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>DFT におけるシフトや畳み込みは、数列の周期性を前提とした「循環的」な操作となる。</li>
                    <li>時間領域での循環畳み込みは、周波数領域での成分ごとの積として非常に高速に計算できる。</li>
                    <li>エネルギー保存則（パーセバルの等式）により、時間領域と周波数領域のどちらでも信号強度を定量化できる。</li>
                    <li>数値例を通じて、これらの抽象的な性質が具体的なデータ処理おいて正しく機能することを確認した。</li>
                </ul>
            </ContentBox>

        </section>
    );
}
