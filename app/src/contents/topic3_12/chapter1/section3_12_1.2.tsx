import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionContractibleSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節でユークリッド空間 <InlineMath math="\mathbb{R}^n" /> が一点とホモトピー同値であることを確認しました。このように、位相幾何学的な意味で「点に潰せる」空間のクラスを可縮空間と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">可縮空間の定義と例</h2>

            <p className="leading-relaxed">
                可縮性は、空間の中に「穴」が一つも存在しないことを示す最も強い条件の一つです。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.2-1 (可縮空間)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> が<strong>可縮（contractible）</strong>であるとは、<InlineMath math="X" /> がある一点空間 <InlineMath math="\{\mathrm{pt}\}" /> とホモトピー同値であること（<InlineMath math="X \simeq \{\mathrm{pt}\}" />）をいう。
                </p>
                <p>
                    これは同値な言い換えとして、<InlineMath math="X" /> の恒等写像 <InlineMath math="\mathrm{id}_X : X \to X" /> が、ある点 <InlineMath math="x_0 \in X" /> への定値写像 <InlineMath math="c_{x_0}(x) = x_0" /> にホモトピックであること（<InlineMath math="\mathrm{id}_X \simeq c_{x_0}" />）と同じである。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.2-1 (凸集合は可縮)"
            >
                <p>
                    ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> の任意の凸部分集合 <InlineMath math="C" />（空でないとする）は可縮である。
                </p>
                <p>
                    実際、ある点 <InlineMath math="x_0 \in C" /> を選び、写像 <InlineMath math="H : C \times [0,1] \to C" /> を
                    <BlockMath math="H(x, t) = (1-t)x + t x_0" />
                    と定めると、<InlineMath math="C" /> が凸であるため任意の <InlineMath math="t \in [0,1]" /> に対して <InlineMath math="H(x,t) \in C" /> となり、<InlineMath math="H" /> は well-defined な連続写像となる。
                    さらに、<InlineMath math="H(x, 0) = x = \mathrm{id}_C(x)" />、<InlineMath math="H(x, 1) = x_0 = c_{x_0}(x)" /> を満たすため、<InlineMath math="\mathrm{id}_C \simeq c_{x_0}" /> が示された。
                </p>
                <p>
                    これにより、<InlineMath math="\mathbb{R}^n" /> 全体はもちろんのこと、<InlineMath math="n" /> 次元円板 <InlineMath math="D^n" /> や、<InlineMath math="n" /> 次元超立方体 <InlineMath math="[0,1]^n" /> などもすべて可縮空間である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                可縮空間の上で考えられる閉じた経路（ループ）は、すべて一点に縮めることができます。これは次章で学ぶ「基本群」という概念の予告となります。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 1.2-1 (可縮空間の基本群は自明)"
            >
                <p>
                    可縮空間 <InlineMath math="X" /> 上の任意のループ（始点と終点が一致する連続な曲線）は、連続的に一点に縮めることができる。
                    後の言葉（Chapter 2）で言えば、任意の基点 <InlineMath math="x_0" /> における基本群は自明な群となる（<InlineMath math="\pi_1(X, x_0) = \{e\}" />）。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="X" /> が可縮であるから、ある点 <InlineMath math="x_0 \in X" /> とホモトピー <InlineMath math="H : X \times [0,1] \to X" /> が存在して、<InlineMath math="H(x,0) = x" /> かつ <InlineMath math="H(x,1) = x_0" /> を満たす。
                </p>
                <p>
                    <InlineMath math="X" /> 上の任意のループ <InlineMath math="\gamma : [0,1] \to X" /> を考える。このループとホモトピー <InlineMath math="H" /> を合成した写像 <InlineMath math="F(s, t) = H(\gamma(s), t)" /> を考えると、
                    <BlockMath math="F(s, 0) = H(\gamma(s), 0) = \gamma(s)" />
                    <BlockMath math="F(s, 1) = H(\gamma(s), 1) = x_0" />
                    となり、これはループ <InlineMath math="\gamma" /> が連続的に定点 <InlineMath math="x_0" /> へと変形（縮小）されることを示している（※厳密な基点付きホモトピーの議論は Chapter 2 で行う）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">可縮でない空間</h2>

            <p className="leading-relaxed">
                すべての空間が点に潰せるわけではありません。「穴」がある空間は、その穴の周りを回るループが引っかかってしまい、点に縮めることができません。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 1.2-2 (<InlineMath math="S^1" /> は可縮でない)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> は可縮ではない。すなわち <InlineMath math="S^1 \not\simeq \{\mathrm{pt}\}" /> である。
                </p>
                <p>
                    直感的には、<InlineMath math="S^1" /> を 1 周するループはどうやっても（<InlineMath math="S^1" /> の上を通る限り）一点に縮めることができないからである。この事実は、Chapter 3 で円周の基本群が <InlineMath math="\pi_1(S^1) \cong \mathbb{Z} \neq \{e\}" /> であることを証明することによって厳密に正当化される（可縮ならば基本群は自明でなければならないため、矛盾する）。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="可縮性と連結性の違い"
            >
                <p>
                    空間が可縮であるならば、任意の点はホモトピーの中心点 <InlineMath math="x_0" /> と連続な曲線（<InlineMath math="H(x, t)" /> の軌跡）で結べるため、必ず<strong>弧状連結</strong>になります。
                </p>
                <p>
                    しかし、逆は一般に成立しません。例えば <InlineMath math="S^1" />（円周）や <InlineMath math="S^2" />（球面）は弧状連結ですが、可縮ではありません（それぞれ 1 次元の穴、2 次元の穴が空いているため）。可縮性は「いかなる次元の穴も存在しない」という、単なる連結性よりもはるかに強い条件なのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>一点空間とホモトピー同値な空間を<strong>可縮空間</strong>という。これは恒等写像が定値写像にホモトピックであることと同値である。</li>
                    <li>ユークリッド空間やその凸部分集合（円板や線分など）はすべて可縮である。</li>
                    <li>可縮空間上のループは必ず一点に縮めることができる。</li>
                    <li>円周 <InlineMath math="S^1" /> など、何らかの「穴」をもつ空間は可縮ではない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
