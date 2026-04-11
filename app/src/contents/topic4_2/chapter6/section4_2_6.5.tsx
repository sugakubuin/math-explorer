import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GammaFunctionApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の締めくくりとして、これまで構築してきた無限積の理論をガンマ関数に適用します。ガンマ関数は階乗を複素数へと拡張した関数であり、実解析や確率論だけでなく、複素解析的な視点で見るとその美しい解析的な構造が明確に浮かび上がります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガンマ関数の積表示</h2>

            <p>
                まずは、通常用いられる積分表示からの定義と、その有理型関数への拡張を確認した上で、これをハダマールの因数分解定理の枠組みに乗せます。
            </p>

            <ContentBox type="definition" title={<span>Definition 6.5-1 (<b>ガンマ関数</b>)</span>}>
                <p>
                    実部が正である複素数 <InlineMath math="\mathrm{Re}(z) > 0" /> に対して、<b>ガンマ関数（Gamma function）</b> <InlineMath math="\Gamma(z)" /> は次の広義積分で定義される（オイラー積分）。
                </p>
                <BlockMath math="\Gamma(z) = \int_0^\infty t^{z-1} e^{-t} \, dt" />
                <p>
                    部分積分から得られる関係式 <InlineMath math="\Gamma(z+1) = z\Gamma(z)" /> を用いて順次定義域を左側へ広げることで、<InlineMath math="\Gamma(z)" /> は <InlineMath math="z = 0, -1, -2, \dots" /> に1位の極を持つ <InlineMath math="\mathbb{C}" /> 全体上の有理型関数へと一意に解析接続される。
                </p>
            </ContentBox>

            <p>
                <InlineMath math="\Gamma(z)" /> 自身は極を持つため整関数ではありませんが、その逆数 <InlineMath math="1/\Gamma(z)" /> を考えれば、特異点が全て除去されて整関数になります。この整関数に対して因数分解を適用します。
            </p>

            <ContentBox type="theorem" title="Theorem 6.5-1 (ワイエルシュトラスの積表示)">
                <p>
                    ガンマ関数の逆数 <InlineMath math="1/\Gamma(z)" /> は全平面で正則な整関数であり、次の無限積表示を持つ。
                </p>
                <BlockMath math="\frac{1}{\Gamma(z)} = z e^{\gamma z} \prod_{n=1}^\infty \left( 1 + \frac{z}{n} \right) e^{-z/n}" />
                <p>
                    ここで <InlineMath math="\gamma" /> は<b>オイラー-マスケローニ定数</b>（Euler-Mascheroni constant）であり、<InlineMath math="\gamma = \lim_{N \to \infty} ( \sum_{k=1}^N 1/k - \ln N ) \approx 0.5772\dots" /> で与えられる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略を述べる。<InlineMath math="\Gamma(z)" /> は <InlineMath math="z = 0, -1, -2, \dots" /> に極を持つため、<InlineMath math="f(z) = 1/\Gamma(z)" /> はこれらを零点として持つ整関数である（零点を持たないことは積分の性質から後でわかる）。
                </p>
                <p>
                    各零点 <InlineMath math="z = -n" /> （<InlineMath math="n \geq 1" />）に関して、階数を調べる。<InlineMath math="\sum |n|^{-1}" /> は発散するが <InlineMath math="\sum |n|^{-2}" /> は収束するため階数は <InlineMath math="p=1" /> である。また <InlineMath math="1/\Gamma(z)" /> の増大度を（スターリングの公式などを通じて）評価すると位数 <InlineMath math="\rho = 1" /> であることがわかる。
                </p>
                <p>
                    したがって、ハダマールの因数分解定理より、初等因子 <InlineMath math="E_1(z) = (1-z)e^z" /> を用いて次のように書ける。
                </p>
                <BlockMath math="\begin{aligned}
                    \frac{1}{\Gamma(z)} &= z e^{az+b} \prod_{n=1}^\infty E_1\left( \frac{z}{-n} \right) \\
                    &= z e^{az+b} \prod_{n=1}^\infty \left( 1 + \frac{z}{n} \right) e^{-z/n}
                \end{aligned}" />
                <p>
                    <InlineMath math="z \to 0" /> の極の主要部 <InlineMath math="\Gamma(z) \sim 1/z" /> より、<InlineMath math="z \to 0" /> で <InlineMath math="z \Gamma(z) \to 1" />、よって逆数を取れば <InlineMath math="e^b = 1" /> となり <InlineMath math="b=0" /> としてよい。
                </p>
                <p>
                    残る未定定数 <InlineMath math="a" /> は、関数方程式 <InlineMath math="\Gamma(z) = \Gamma(z+1)/z" /> を利用して決定する。<InlineMath math="z=1" /> を代入すると <InlineMath math="\Gamma(1)=1" /> であるため、
                </p>
                <BlockMath math="\begin{aligned}
                    1 &= \frac{1}{\Gamma(1)} \\
                    &= e^a \prod_{n=1}^\infty \left( 1 + \frac{1}{n} \right) e^{-1/n} \\
                    &= e^a \lim_{N \to \infty} \exp\left( -\sum_{n=1}^N \frac{1}{n} \right) \prod_{n=1}^N \frac{n+1}{n}
                \end{aligned}" />
                <p>
                    最後の積は <InlineMath math="(2/1)(3/2)\dots((N+1)/N) = N+1" /> （漸近的に <InlineMath math="N" />）と相殺される。対数を取ると、
                </p>
                <BlockMath math="a = \lim_{N \to \infty} \left( \sum_{n=1}^N \frac{1}{n} - \ln N \right) = \gamma" />
                <p>
                    となり、<InlineMath math="a = \gamma" /> であることが導かれる。これで積表示が完全に決定された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.5-1">
                <p>
                    この積表示から逆に関数方程式 <InlineMath math="\Gamma(z+1)=z\Gamma(z)" /> を導出できるか確認しましょう。<InlineMath math="\Gamma(z+1)" /> の逆数を考えると、
                </p>
                <BlockMath math="\frac{1}{\Gamma(z+1)} = (z+1) e^{\gamma(z+1)} \lim_{N \to \infty} \prod_{n=1}^N \frac{z+1+n}{n} e^{-(z+1)/n}" />
                <p>
                    この極限操作の中で項のずらし等（<InlineMath math="n \to n-1" /> の再インデックスなど）を丁寧に行い <InlineMath math="\ln N" /> の定義を代入していくと、見事に <InlineMath math="z(1/\Gamma(z))" /> と一致します。このように、積表示は解析的な計算を代数的な操作に還元できるため非常に有用です。
                </p>
            </ContentBox>

            <p>
                このガンマ関数の無限積と、前節で得られたサイン関数の無限積を比較することで、驚くべき恒等曲線の関係式があらわになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガンマ関数の補充公式</h2>

            <p>
                ガンマ関数は単独で存在するだけでなく、他の初等関数（特に三角関数）と深い関係を持っています。
            </p>

            <ContentBox type="theorem" title="Theorem 6.5-2 (オイラーの補充公式)">
                <p>
                    整数ではない任意の複素数 <InlineMath math="z \notin \mathbb{Z}" /> に対して、次の関係式が成り立つ。
                </p>
                <BlockMath math="\Gamma(z) \Gamma(1-z) = \frac{\pi}{\sin(\pi z)}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 6.5-1 より、<InlineMath math="1/\Gamma(z)" /> と <InlineMath math="1/\Gamma(-z)" /> の積を考える。
                </p>
                <BlockMath math="\begin{aligned}
                    \frac{1}{\Gamma(z)} \frac{1}{\Gamma(-z)} &= \left( z e^{\gamma z} \prod_{n=1}^\infty \left( 1 + \frac{z}{n} \right) e^{-z/n} \right) \\
                    &\quad \times \left( -z e^{-\gamma z} \prod_{n=1}^\infty \left( 1 - \frac{z}{n} \right) e^{z/n} \right)
                \end{aligned}" />
                <p>
                    <InlineMath math="e^{\gamma z}" /> と <InlineMath math="e^{-\gamma z}" /> が相殺し、積の中の <InlineMath math="e^{-z/n}" /> と <InlineMath math="e^{z/n}" /> も各項ごとに相殺する。残った項をまとめる。
                </p>
                <BlockMath math="\frac{1}{\Gamma(z)\Gamma(-z)} = -z^2 \prod_{n=1}^\infty \left( 1 - \frac{z^2}{n^2} \right)" />
                <p>
                    ここで前節 Example 6.4-3 のサイン関数の無限積表示 <InlineMath math="\sin(\pi z) = \pi z \prod (1 - z^2/n^2)" /> を代入すると、
                </p>
                <BlockMath math="\frac{1}{\Gamma(z)\Gamma(-z)} = -z \frac{\sin(\pi z)}{\pi}" />
                <p>
                    となる。左辺にガンマ関数の関数方程式 <InlineMath math="\Gamma(1-z) = -z\Gamma(-z)" /> を適用して書き直せば、
                </p>
                <BlockMath math="\frac{1}{\Gamma(z)} \frac{-z}{\Gamma(1-z)} = -z \frac{\sin(\pi z)}{\pi}" />
                <p>
                    両辺を整理して逆数を取ると、<InlineMath math="\Gamma(z)\Gamma(1-z) = \pi / \sin(\pi z)" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.5-2">
                <p>
                    補充公式に <InlineMath math="z=1/2" /> を代入してみましょう。
                </p>
                <BlockMath math="\Gamma\left(\frac{1}{2}\right) \Gamma\left(1 - \frac{1}{2}\right) = \frac{\pi}{\sin(\pi/2)}" />
                <p>
                    左辺は <InlineMath math="\left(\Gamma(1/2)\right)^2" />、右辺は <InlineMath math="\pi" /> となります。<InlineMath math="\Gamma(1/2)" /> は元の積分定義 <InlineMath math="\int_0^\infty t^{-1/2}e^{-t} dt" /> から正の実数であることが明らかですから、
                </p>
                <BlockMath math="\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}" />
                <p>
                    が導かれます。積分からこれを直接示すにはガウス積分などの変数変換が必要ですが、補充公式を用いれば代数的に一瞬で計算できます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="数論への接続">
                <p>
                    ガンマ関数は、その極や積表示という複素解析上の美しい顔だけでなく、解析的数論（5-6）においてもリーマン・ゼータ関数 <InlineMath math="\zeta(s)" /> の関数方程式を完成させるための重要な因子（ガンマ因子）として登場します。この意味で、本章で扱った因数分解定理は、数論と複素関数論を繋ぐ歴史的な架け橋としての役割を果たしています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有理型関数であるガンマ関数は、その逆数 <InlineMath math="1/\Gamma(z)" /> を考えると整関数になる。これをハダマールの定理で分解することで、オイラー-マスケローニ定数 <InlineMath math="\gamma" /> を含むワイエルシュトラスの無限積表示が得られる。</li>
                    <li>ガンマ関数の無限積とサイン関数の無限積を掛け合わせて共通因子を相殺させることで、オイラーの補充公式 <InlineMath math="\Gamma(z)\Gamma(1-z) = \pi/\sin(\pi z)" /> が極めて簡明に証明できる。</li>
                    <li>この補充公式は、半整数でのガンマ関数の値（例：<InlineMath math="\Gamma(1/2)=\sqrt{\pi}" />）を直ちに与えるなど、実用計算上も非常に強力である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
