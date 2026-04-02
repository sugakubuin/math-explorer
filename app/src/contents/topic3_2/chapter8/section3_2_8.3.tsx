import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RepresentativeConformalMaps() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                メビウス変換以外にも、初等関数の多くは特定の領域において優れた等角写像として機能します。
                これらの関数が「どのような領域」を「どのような形」に写すかを理解することで、複雑な形状の領域における物理現象の解析が可能になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">べき写像</h2>

            <p>
                <InlineMath math="w = z^n" /> という写像は、角度を <InlineMath math="n" /> 倍に広げる「扇形」の変形に用いられます。
            </p>

            <ContentBox type="example" title="Example 8.3-1 (扇形から半平面へ)">
                <p>
                    偏角が <InlineMath math="0 < \arg z < \pi/n" /> である扇形領域を考える。
                    写像 <InlineMath math="w = z^n" /> によって、偏角の範囲は <InlineMath math="0 < \arg w < \pi" /> へと拡大される。
                    つまり、開き角が <InlineMath math="\pi/n" /> の「尖った」領域が、上半平面という「平らな」領域へと等角に写される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指数写像</h2>

            <p>
                指数関数は、平行な「帯状」の領域を、放射状の領域や円盤へと変換します。
            </p>

            <ContentBox type="example" title="Example 8.3-2 (帯状領域から上半平面へ)">
                <p>
                    領域 <InlineMath math="D = \{ z \in \mathbb{C} \mid 0 < \text{Im}(z) < \pi \}" /> を考える。
                    写像 <InlineMath math="w = e^z" /> を適用すると、虚部が偏角に、実部が原点からの距離の対数に対応するため、
                    この無限に続く帯状の領域は、上半平面 <InlineMath math="\text{Im}(w) > 0" /> 全体へと等角に写される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジューコフスキー変換</h2>

            <p>
                工学的に最も有名な等角写像の一つが、航空機の翼の断面（翼型）を解析するために考案されたジューコフスキー写像です。
            </p>

            <ContentBox type="definition" title="Definition 8.3-1 (ジューコフスキー変換)">
                <p>
                    次の式で定義される変換を <strong>ジューコフスキー変換 (Joukowski transform)</strong> という。
                    <BlockMath math="w = z + \frac{1}{z}" />
                </p>
            </ContentBox>

            <p>
                この写像は、円を滑らかな曲線（あるいは線分）に写す性質を持っており、流体の流れの解析に極めて有用です。
            </p>

            <ContentBox type="example" title="Example 8.3-3 (単位円の像)">
                <p>
                    単位円 <InlineMath math="z = e^{i\theta}" /> をジューコフスキー変換で写すと、
                    <BlockMath math="w = e^{i\theta} + e^{-i\theta} = 2\cos\theta" />
                    となる。 <InlineMath math="\theta" /> が <InlineMath math="0" /> から <InlineMath math="2\pi" /> まで動くとき、 <InlineMath math="w" /> は実軸上の線分 <InlineMath math="[-2, 2]" /> を往復する。
                    つまり、円という「広がりを持つ図形」が線分という「厚みのない図形」に潰される。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ジューコフスキー変換と翼の設計">
                <p>
                    単位円の <strong>中心を少しずらし</strong> 、かつ単位円が点 <InlineMath math="z=1" /> を通るように設定してからジューコフスキー変換を行うと、
                    その像は片方が尖り、もう片方が丸まった「鳥の羽」のような形状（翼型）になります。
                    円の周りの完璧に解明されている流体の流れをこの写像で飛ばすことで、複雑な翼の周りの空気の流れを数学的に計算できるようになりました。
                    これは現代の航空力学の基礎を築いた偉大な知恵の一つです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>べき写像は「角の開き」を、指数写像は「帯と半平面」を繋ぐ。</li>
                    <li>ジューコフスキー変換は、円と翼型を繋ぐ工学的に非常に重要な写像である。</li>
                    <li>適切な関数を選ぶことで、物理的に解析しやすい「標準的な領域（円や半平面）」へ問題を移し替えることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
