import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConformalMappingDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素関数の「微分可能（正則）」という性質は、幾何学的には <strong>等角性 (conformality)</strong> と呼ばれる非常に強力な特徴として現れます。
                等角写像とは、直感的には「微小な図形の形（角度）を崩さずに写す」写像のことであり、流体力学や電磁気学における複雑な境界問題の解決に大きな役割を果たしてきました。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等角写像</h2>

            <p>
                「等角」とは、2本の曲線のなす角（向きを含めた大きさ）が写像によって不変であることを意味します。
            </p>

            <ContentBox type="definition" title="Definition 8.1-1 (等角写像)">
                <p>
                    領域 <InlineMath math="D" /> 上の連続写像 <InlineMath math="f: z \mapsto w" /> が、点 <InlineMath math="z_0" /> を通る任意の2つの滑らかな曲線のなす角（向きと大きさ）を保存するとき、
                    <InlineMath math="f" /> は点 <InlineMath math="z_0" /> において <strong>等角 (conformal)</strong> であるという。
                    領域内のすべての点で等角である写像を <strong>等角写像</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.1-1 (線形写像の等角性)">
                <p>
                    複素定数 <InlineMath math="a, b" /> （<InlineMath math="a \neq 0" />）を用いた写像 <InlineMath math="f(z) = az + b" /> を考える。
                    この写像は、複素平面全体を一様に回転・拡大縮小させ、さらに平行移動させる操作に相当する。
                    これらの幾何学的操作はいずれも角度を変化させないため、 <InlineMath math="f(z)" /> は平面全体で等角写像である。
                </p>
            </ContentBox>

            <p>
                正則関数という「解析的」な性質は、微係数が 0 でない限り、そのまま等角性という「幾何学的」な性質と結びつきます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.1-1 (正則関数の等角性)">
                <p>
                    関数 <InlineMath math="f(z)" /> が点 <InlineMath math="z_0" /> で正則であり、かつ <InlineMath math="f'(z_0) \neq 0" /> ならば、
                    <InlineMath math="f(z)" /> は <InlineMath math="z_0" /> において等角である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="z_0" /> を通る滑らかな曲線 <InlineMath math="\gamma(t)" /> （<InlineMath math="\gamma(0) = z_0" />）を考える。
                    この曲線の <InlineMath math="z_0" /> における接ベクトルの向きは <InlineMath math="\arg \gamma'(0)" /> で与えられる。
                    <InlineMath math="f" /> による像 <InlineMath math="\sigma(t) = f(\gamma(t))" /> の接ベクトルを合成関数の微分で求めると、
                </p>
                <BlockMath math="\sigma'(0) = f'(\gamma(0)) \gamma'(0) = f'(z_0) \gamma'(0)" />
                <p>
                    ここで <InlineMath math="f'(z_0) \neq 0" /> より、像の接ベクトルの向きは
                </p>
                <BlockMath math="\arg \sigma'(0) = \arg f'(z_0) + \arg \gamma'(0)" />
                <p>
                    となる。これは、 <InlineMath math="z_0" /> を通るすべての曲線の接ベクトルが、一律に <InlineMath math="\arg f'(z_0)" /> だけ回転させられることを意味する。
                    2つの曲線の接ベクトルの向きの「差」は不変であるため、角度が保存される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-8">
                等角性が崩れるのは、微分係数が 0 になる特殊な点、すなわち <strong>臨界点</strong> です。
            </p>

            <ContentBox type="definition" title="Definition 8.1-2 (臨界点)">
                <p>
                    正則関数 <InlineMath math="f(z)" /> に対して、 <InlineMath math="f'(z_0) = 0" /> となる点 <InlineMath math="z_0" /> を <strong>臨界点 (critical point)</strong> と呼ぶ。
                    また、その像 <InlineMath math="f(z_0)" /> を臨界値という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.1-2 (臨界点での角度の拡大)">
                <p>
                    <InlineMath math="f(z) = z^2" /> を原点 <InlineMath math="z = 0" /> の周りで考える。
                    実軸（角度 0）と虚軸（角度 <InlineMath math="\pi/2" />）は、写像によってそれぞれ正の実軸（角度 0）と負の実軸（角度 <InlineMath math="\pi" />）に写される。
                    角度が 2 倍に拡大されており、角度が保存されていない。
                    これは <InlineMath math="f'(0) = 2 \cdot 0 = 0" /> であり、原点が臨界点であることに対応している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="等角写像と局所的性質">
                <p>
                    「等角」という定義はあくまで局所的な（一点における）性質であることに注意してください。
                    たとえば <InlineMath math="f(z) = e^z" /> はすべての点で微係数が非ゼロなので等角ですが、 <InlineMath math="f(0) = f(2\pi i) = 1" /> となるため、大域的には「一対一」ではありません。
                    これに対し、大域的にも一対一な等角写像を <strong>等角同等 (conformal equivalence)</strong> と呼び、複素解析における「図形の同一視」の基準となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>等角写像とは、曲線のなす角（向きと大きさ）を保つ写像である。</li>
                    <li>正則関数は、微係数が 0 でない点において常に等角である。</li>
                    <li>微係数が 0 となる「臨界点」では、角度が整数倍に拡大されるなど等角性が失われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
