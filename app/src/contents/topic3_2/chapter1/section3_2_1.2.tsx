import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexPlaneAndPolarForm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素数 <InlineMath math="z = a + bi" /> は、2つの実数 <InlineMath math="a, b" /> の組として捉えることができます。
                これを平面上の点 <InlineMath math="(a, b)" /> と対応させることで、複素数に豊かな幾何学的意味を与えることができます。
                この平面を「複素平面」あるいは「ガウス平面」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素平面と絶対値</h2>

            <p>
                複素数を平面上の点として扱うことで、「距離」という概念が自然に導入されます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (複素平面：ガウス平面)">
                <p>
                    複素数 <InlineMath math="z = a + bi" /> に対して、平面上の点 <InlineMath math="(a, b)" /> を対応させた平面を<strong>複素平面 (complex plane)</strong> または<strong>ガウス平面</strong>と呼ぶ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><InlineMath math="x" /> 軸を<strong>実軸 (real axis)</strong> といい、実数 <InlineMath math="a" /> の場所を表す。</li>
                    <li><InlineMath math="y" /> 軸を<strong>虚軸 (imaginary axis)</strong> といい、純虚数 <InlineMath math="bi" /> の場所を表す。</li>
                </ul>
            </ContentBox>

            <div className="flex flex-col items-center my-10">
                <svg width="440" height="360" viewBox="-70 -110 440 360" className="max-w-full overflow-visible">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                        </marker>
                    </defs>

                    {/* Grid */}
                    <g className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="1">
                        {[-50, 0, 50, 100, 150, 200].map(y => (
                            <line key={`y${y}`} x1="-50" y1={y} x2="330" y2={y} />
                        ))}
                        {[0, 50, 100, 150, 200, 250, 300].map(x => (
                            <line key={`x${x}`} x1={x} y1="-70" x2={x} y2="230" />
                        ))}
                    </g>

                    {/* Axes */}
                    <line x1="-50" y1="200" x2="355" y2="200" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="0" y1="240" x2="0" y2="-90" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" markerEnd="url(#arrowhead)" />

                    <text x="340" y="180" textAnchor="start" dominantBaseline="middle" className="fill-slate-800 dark:fill-slate-200 font-serif italic" fontSize="18">Re</text>
                    <text x="-25" y="-100" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 font-serif italic" fontSize="18">Im</text>
                    <text x="-8" y="215" textAnchor="end" className="fill-slate-800 dark:fill-slate-200 font-serif font-bold" fontSize="16">O</text>

                    {/* Helper Lines & Ticks */}
                    <line x1="200" y1="200" x2="200" y2="50" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1" strokeDasharray="4" />
                    <line x1="0" y1="50" x2="200" y2="50" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1" strokeDasharray="4" />
                    <line x1="200" y1="195" x2="200" y2="205" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" />
                    <line x1="-5" y1="50" x2="5" y2="50" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" />

                    {/* Vector / Distance r */}
                    <line x1="0" y1="200" x2="197" y2="53" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="3" />

                    {/* Angle theta */}
                    <path d="M 45 200 A 45 45 0 0 0 35 165" fill="none" className="stroke-amber-500" strokeWidth="2.5" />
                    <text x="52" y="182" className="fill-amber-600 dark:fill-amber-400 font-serif italic font-bold" fontSize="18">θ</text>

                    {/* Points and Labels */}
                    <circle cx="200" cy="50" r="5" className="fill-blue-600 dark:fill-blue-400" />
                    <text x="212" y="45" textAnchor="start" className="fill-blue-700 dark:fill-blue-300 font-bold" fontSize="18">z = a + bi</text>

                    <text x="200" y="222" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 font-serif italic" fontSize="16">a</text>
                    <text x="-12" y="50" textAnchor="end" dominantBaseline="middle" className="fill-slate-600 dark:fill-slate-400 font-serif italic" fontSize="16">b</text>
                    <text x="95" y="120" textAnchor="end" className="fill-blue-700 dark:fill-blue-400 font-bold" fontSize="18">r = |z|</text>
                </svg>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic text-center">
                    図 1.1：複素平面と複素数 <InlineMath math="z" /> の表現
                </p>
            </div>

            <p>
                複素平面上での原点からの距離は、実数における絶対値の概念を拡張したものになります。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (絶対値)">
                <p>
                    複素数 <InlineMath math="z = a + bi" /> の<strong>絶対値 (absolute value)</strong> を次のように定義する：
                    <BlockMath math="|z| = \sqrt{a^2 + b^2} = \sqrt{z\overline{z}}" />
                    幾何学的には、図 1.1 のように、複素平面における原点から点 <InlineMath math="z" /> までの距離に対応する。
                </p>
            </ContentBox>

            <p>
                この絶対値については、実数の場合と同様に重要な性質がいくつか成り立ちます。
            </p>

            <ContentBox type="theorem" title="Proposition 1.2-1 (絶対値の性質)">
                <p>
                    任意の複素数 <InlineMath math="z, w" /> に対して以下が成り立つ：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="|zw| = |z||w|" /></li>
                    <li><InlineMath math="|z + w| \le |z| + |w|" /> （<strong>三角不等式</strong>）</li>
                    <li><InlineMath math="\bigl||z| - |w|\bigr| \le |z - w|" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="|zw|^2 = (zw)\overline{(zw)} = zw\overline{z}\overline{w} = (z\overline{z})(w\overline{w}) = |z|^2|w|^2" />。
                    両辺ともに非負であるから、平方根をとることで <InlineMath math="|zw| = |z||w|" /> を得る。
                </p>
                <p>
                    2. 次の不等式を示す：
                    <BlockMath math="\begin{aligned} |z+w|^2 &= (z+w)(\overline{z}+\overline{w}) \\ &= z\overline{z} + z\overline{w} + w\overline{z} + w\overline{w} \\ &= |z|^2 + |w|^2 + (z\overline{w} + \overline{z\overline{w}}) \\ &= |z|^2 + |w|^2 + 2\text{Re}(z\overline{w}) \end{aligned}" />
                    ここで <InlineMath math="\text{Re}(z\overline{w}) \le |z\overline{w}| = |z||\overline{w}| = |z||w|" /> であるから、
                    <BlockMath math="|z+w|^2 \le |z|^2 + |w|^2 + 2|z||w| = (|z|+|w|)^2" />
                    ゆえに <InlineMath math="|z+w| \le |z|+|w|" /> が成り立つ。
                </p>
                <p>
                    3. 三角不等式において <InlineMath math="z = (z-w) + w" /> とおくと、
                    <InlineMath math="|z| \le |z-w| + |w|" /> より <InlineMath math="|z| - |w| \le |z-w|" />。
                    同様に <InlineMath math="w = (w-z) + z" /> とおくと <InlineMath math="|w| - |z| \le |w-z| = |z-w|" />。
                    これらを合わせることで <InlineMath math="\bigl||z|-|w|\bigr| \le |z-w|" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">偏角と極形式</h2>

            <p>
                平面上の点は、直交座標 <InlineMath math="(a, b)" /> だけでなく、原点からの距離 <InlineMath math="r" /> と、実軸正の向きとのなす角 <InlineMath math="\theta" /> によっても指定できます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-3 (偏角：arg)">
                <p>
                    <InlineMath math="z \neq 0" /> に対して、実軸の正の向きとベクトル <InlineMath math="z" /> のなす角を <InlineMath math="\theta" /> とするとき、これを <InlineMath math="z" /> の<strong>偏角 (argument)</strong> といい、 <InlineMath math="\arg z" /> と記す。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>偏角は <InlineMath math="2\pi" /> の整数倍の不確定性を持つ。</li>
                    <li><InlineMath math="-\pi < \theta \le \pi" /> の範囲にある偏角を<strong>主値 (principal value)</strong> と呼び、 <InlineMath math="\text{Arg}\,z" /> と記す。</li>
                </ul>
            </ContentBox>

            <ContentBox type="definition" title="Definition 1.2-4 (極形式)">
                <p>
                    <InlineMath math="r = |z|, \, \theta = \arg z" /> とするとき、複素数 <InlineMath math="z" /> を
                    <BlockMath math="z = r(\cos \theta + i \sin \theta)" />
                    と表すことを<strong>極形式 (polar form)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <p>
                極形式を用いると、複素数の積を非常に簡潔に記述できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積の幾何学的意味</h2>

            <p>
                複素数の積を極形式で考えると、幾何学的な回転と拡大の性質が見えてきます。
            </p>

            <ContentBox type="theorem" title="Proposition 1.2-2 (積と偏角)">
                <p>
                    <InlineMath math="z_1 = r_1(\cos \theta_1 + i \sin \theta_1), \, z_2 = r_2(\cos \theta_2 + i \sin \theta_2)" /> のとき、
                    <BlockMath math="z_1 z_2 = r_1 r_2 \{ \cos(\theta_1 + \theta_2) + i \sin(\theta_1 + \theta_2) \}" />
                    すなわち、複素数の積は「<strong>絶対値の積</strong>」と「<strong>偏角の和</strong>」によって得られる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定義通りに積を計算し、三角関数の加法定理を適用する：
                    <BlockMath math="\begin{aligned} z_1 z_2 &= r_1 r_2 (\cos \theta_1 + i \sin \theta_1)(\cos \theta_2 + i \sin \theta_2) \\ &= r_1 r_2 \{ (\cos \theta_1 \cos \theta_2 - \sin \theta_1 \sin \theta_2) \\ &\quad + i(\sin \theta_1 \cos \theta_2 + \cos \theta_1 \sin \theta_2) \} \\ &= r_1 r_2 \{ \cos(\theta_1 + \theta_2) + i \sin(\theta_1 + \theta_2) \} \end{aligned}" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                これは、複素数 <InlineMath math="w" /> を掛けるという操作が、複素平面上では「<strong>原点中心に <InlineMath math="|w|" /> 倍拡大し、 <InlineMath math="\arg w" /> だけ回転させる</strong>」ことに相当することを意味しています。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (極形式の計算)">
                <p>
                    <InlineMath math="z = 1 + i" /> と <InlineMath math="w = \sqrt{3} - i" /> の積を考える。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="z = \sqrt{2}(\cos \frac{\pi}{4} + i \sin \frac{\pi}{4})" /></li>
                    <li><InlineMath math="w = 2(\cos (-\frac{\pi}{6}) + i \sin (-\frac{\pi}{6}))" /></li>
                    <li><InlineMath math="zw = 2\sqrt{2}(\cos (\frac{\pi}{4} - \frac{\pi}{6}) + i \sin (\frac{\pi}{4} - \frac{\pi}{6})) = 2\sqrt{2}(\cos \frac{\pi}{12} + i \sin \frac{\pi}{12})" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>複素平面</strong>：複素数 <InlineMath math="a + bi" /> を点 <InlineMath math="(a, b)" /> として可視化したもの。</li>
                    <li><strong>絶対値 <InlineMath math="|z|" /></strong>：原点からの距離。三角不等式 <InlineMath math="|z+w| \le |z|+|w|" /> を満たす。</li>
                    <li><strong>極形式</strong>： <InlineMath math="r(\cos \theta + i \sin \theta)" />。角度と距離による表現。</li>
                    <li><strong>積の図形的意味</strong>：原点中心の回転と拡大。偏角は足し算、絶対値は掛け算になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
