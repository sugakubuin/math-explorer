import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NDimensionalLebesgue() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                2 次元の結果を一般化することで、<InlineMath math="n" /> 次元空間上の測度と積分を定義できます。
                微積分学において最も実用的な「変数変換公式」も、ルベーグ積分論の枠組みで厳密に議論することが可能です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">n 次元ルベーグ測度と変数変換</h2>

            <p>
                <InlineMath math="n" /> 次元ルベーグ測度は、1 次元ルベーグ測度の <InlineMath math="n" /> 個の直積として定義され、通常の体積の概念と一致します。
            </p>

            <ContentBox type="definition" title="Definition 5.5-1 (n 次元ルベーグ測度)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> 上の <b><InlineMath math="n" /> 次元ルベーグ測度</b> <InlineMath math="\lambda_n" /> を、次のように定義する：
                    <BlockMath math="\lambda_n = \lambda \otimes \lambda \otimes \cdots \otimes \lambda \quad (\text{n times})" />
                </p>
            </ContentBox>

            <p className="mt-6">
                座標系の変換（例えば直交座標から極座標への変換）を行う際、微分形式のヤコビアン（Jacobian）に対応する補正項が現れます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.5-1 (変数変換公式)">
                <p>
                    <InlineMath math="\Omega \subset \mathbb{R}^n" /> を開集合とし、<InlineMath math="\Phi: \Omega \to \Phi(\Omega)" /> を <InlineMath math="C^1" /> 級の微分同相写像とする。
                    可測関数 <InlineMath math="f: \Phi(\Omega) \to [0, \infty]" />（または可積分関数）に対して、次が成り立つ：
                    <BlockMath math="\int_{\Phi(\Omega)} f(y) \, dy = \int_\Omega f(\Phi(x)) |J_\Phi(x)| \, dx" />
                    ここで <InlineMath math="|J_\Phi(x)|" /> は写像 <InlineMath math="\Phi" /> のヤコビ行列の行列式の絶対値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    証明は以下の 3 段階に分けて考えられる。
                </p>
                <p className="mt-4">
                    <b>Step 1: 線形変換の場合</b><br />
                    <InlineMath math="\Phi" /> が線形変換 <InlineMath math="\Phi(x) = Ax" /> （<InlineMath math="A" /> は正則行列）のとき、ルベーグ測度の性質から <InlineMath math="\lambda_n(A(E)) = |\det A| \lambda_n(E)" /> が成り立つ。
                    これにより、特性関数 <InlineMath math="f = \mathbf{1}_E" /> に対して公式が成立することがわかる。
                </p>
                <p className="mt-4">
                    <b>Step 2: 局所的な近似</b><br />
                    一般の <InlineMath math="\Phi" /> について、任意の点 <InlineMath math="x_0 \in \Omega" /> の近傍では <InlineMath math="\Phi(x) \approx \Phi(x_0) + \Phi'(x_0)(x - x_0)" /> と一次近似できる。
                    微小な立方体 <InlineMath math="Q" /> に対して、その像 <InlineMath math="\Phi(Q)" /> の測度は、ヤコビ行列 <InlineMath math="\Phi'(x_0)" /> による体積拡大率 <InlineMath math="|\det \Phi'(x_0)|" /> にほぼ等しくなる。
                </p>
                <p className="mt-4">
                    <b>Step 3: 積分への拡張</b><br />
                    <InlineMath math="\Omega" /> を小さな立方体の和集合に分割し、それぞれの立方体上で Step 2 の近似を行い、極限をとることで公式が一般の可測関数に対して成り立つことが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.5-1 (極座標変換とガウス積分)">
                <p>
                    2次元平面における極座標変換 <InlineMath math="x = r \cos \theta, \ y = r \sin \theta" /> を用いて、ガウス積分 <InlineMath math="I = \int_{-\infty}^\infty e^{-x^2} \, dx" /> の値を求めよう。
                    <InlineMath math="I^2 = \int_{\mathbb{R}^2} e^{-(x^2+y^2)} \, dxdy" /> である。
                </p>
                <p className="mt-4">
                    極座標変換のヤコビアンは <InlineMath math="r" /> である。したがって：
                    <BlockMath math="I^2 = \int_0^{2\pi} \int_0^\infty e^{-r^2} r \, dr d\theta = 2\pi \left[ -\frac{1}{2} e^{-r^2} \right]_0^\infty = \pi" />
                    ゆえに <InlineMath math="I = \sqrt{\pi}" /> となり、統計学などで不可欠な正規分布の正規化定数が導かれる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ヤコビアンの幾何学的意味">
                <p>
                    ヤコビ行列式は、微小領域が写像 <InlineMath math="\Phi" /> によってどれだけ拡大・縮小されるかの「体積比」を表しています。
                    ルベーグ積分論においてこの公式を証明するためには、まず線形変換の場合（行列の基本変形）で示し、一般の <InlineMath math="C^1" /> 写像へと滑らかに近似していくプロセスが必要です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b><InlineMath math="n" /> 次元ルベーグ測度</b> は直積測度として構成され、体積と一致する。</li>
                    <li><b>変数変換公式</b> は、ヤコビアンを用いることで異なる座標系での積分を結びつける。</li>
                    <li>極座標変換などは、ヤコビアン補正を伴うフビニの定理の応用例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
