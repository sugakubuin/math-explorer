import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DihedralGroup() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに学んだ対称群や交代群は、集合の置換という抽象的な視点から定義されました。
                これに対し、本節で学ぶ「二面体群」は、正多角形の対称性という幾何学的な視点から自然に現れる群です。
                二面体群は、回転と反転という2種類の操作の組み合わせによって構成され、有限群の非自明な構造を学ぶための格好の題材となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">二面体群の定義と元の構造</h2>

            <p className="leading-relaxed mb-4">
                正 <InlineMath math="n" /> 角形を、それ自身に重ね合わせるような平面の等長変換（回転と反転）の全体を考えます。
            </p>

            <ContentBox type="definition" title="Definition 7.3-1 (二面体群)">
                <p>
                    正 <InlineMath math="n" /> 角形の対称性（自己同型）全体のなす群を <b><InlineMath math="n" /> 次二面体群</b> と呼び、<InlineMath math="D_n" /> で表す。
                    位数は <b><InlineMath math="2n" /></b> である。
                </p>
                <p className="mt-4">
                    <InlineMath math="D_n" /> は、以下の2つの元によって生成される：
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="r" />：中心のまわりの <InlineMath math="2\pi/n" /> 回転</li>
                    <li><InlineMath math="s" />：あるひとつの頂点を通る軸に関する反転（鏡映）</li>
                </ul>
                <p className="mt-4">
                    これらは以下の関係式を満たす：
                    <BlockMath math="r^n = s^2 = e, \quad srs = r^{-1}" />
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                関係式 <InlineMath math="sr = r^{-1}s" /> を用いると、すべての元を一定の形式で表現することができます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.3-1 (D_n の元の標準形)">
                <p>
                    <InlineMath math="D_n" /> の任意の元は、以下の <InlineMath math="2n" /> 個の形のいずれかで一意に表される。
                    <BlockMath math="e, r, r^2, \ldots, r^{n-1}, \quad s, rs, r^2s, \ldots, r^{n-1}s" />
                    ここで、前半の <InlineMath math="n" /> 個は <b>回転</b>、後半の <InlineMath math="n" /> 個は <b>反転</b> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関係式 <InlineMath math="sr = r^{-1}s" /> を繰り返し用いることで、任意の積において <InlineMath math="s" /> を右側に移動できる。
                    例えば <InlineMath math="sr^2 = (sr)r = (r^{-1}s)r = r^{-1}(sr) = r^{-1}(r^{-1}s) = r^{-2}s" /> となる。
                    一般に <InlineMath math="sr^k = r^{-k}s" /> が成り立つ。
                    したがって、生成元 <InlineMath math="r, s" /> の任意の積は、必ず <InlineMath math="r^a s^b" /> （<InlineMath math="0 \leq a < n, b \in \{0, 1\}" />）の形に整理できる。
                    これらの <InlineMath math="2n" /> 個の操作が正多角形に対して互いに異なることは幾何学的に明らかである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-4">
                具体的に、小さな次数の二面体群を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 7.3-1 (D_3 と D_4)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>3次二面体群 <InlineMath math="D_3" /></b>：<br />
                        位数は <InlineMath math="2 \times 3 = 6" />。正三角形の対称性であり、これは3次対称群 <InlineMath math="S_3" /> と同型である。
                        <InlineMath math="r = (1\,2\,3), s = (1\,2)" /> と対応させると関係式が成り立つことが確認できる。
                    </li>
                    <li>
                        <b>4次二面体群 <InlineMath math="D_4" /></b>：<br />
                        位数は <InlineMath math="2 \times 4 = 8" />。正方形の対称性である。
                        8つの元は {"{e, r, r^2, r^3, s, rs, r^2s, r^3s}"} となる。
                        例えば <InlineMath math="rs" /> は対角線（辺の中点を通る軸）に関する反転に対応する。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">Dn の部分群と正規部分群</h2>

            <p className="leading-relaxed mb-4">
                二面体群は、巡回群としての「回転」の部分群を必ず含みます。
            </p>

            <ContentBox type="example" title="Example 7.3-2 (D_4 の部分群格子)">
                <p>
                    <InlineMath math="D_4" /> は合計10個の部分群を持つ。主要なものを挙げると：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>回転全体のなす巡回部分群 <InlineMath math="\langle r \rangle = \{e, r, r^2, r^3\} \cong \mathbb{Z}/4\mathbb{Z}" />（正規部分群・指数2）</li>
                    <li>中心 <InlineMath math="Z(D_4) = \{e, r^2\}" />（正規部分群、位数は2）</li>
                    <li>反転で生成される位数2の部分群 <InlineMath math="\langle s \rangle" /> や <InlineMath math="\langle rs \rangle" /> （正規ではない）</li>
                </ul>
                <p className="mt-4">
                    指数2の部分群 <InlineMath math="\langle r \rangle" /> は常に正規部分群になりますが、
                    それ以外の正規部分群の構造は <InlineMath math="n" /> の偶奇によって異なります。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 7.3-2 (D_n における正規部分群)">
                <p>
                    1. すべての回転からなる部分群 <InlineMath math="\langle r \rangle" /> は常に <InlineMath math="D_n" /> の正規部分群である。
                </p>
                <p className="mt-2">
                    2. <InlineMath math="n" /> が奇数のとき、<InlineMath math="D_n" /> の正規部分群は <InlineMath math="\{e\}, \langle r \rangle, D_n" /> および <InlineMath math="\langle r^d \rangle" /> （<InlineMath math="d|n" />）のみである。
                </p>
                <p className="mt-2">
                    3. <InlineMath math="n" /> が偶数のとき、<InlineMath math="\langle r^2, s \rangle" /> や <InlineMath math="\langle r^2, rs \rangle" /> も正規部分群となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="\langle r \rangle" /> は指数が2である。指数2の部分群は常に正規部分群である。
                </p>
                <p className="mt-4">
                    2. <InlineMath math="n" /> が奇数のとき、任意の反転 <InlineMath math="r^k s" /> は <InlineMath math="s" /> と共役である。
                    もし正規部分群が1つの反転を含めば、すべての反転を含み、結果的に回転 <InlineMath math="r" /> も生成してしまい、全体 <InlineMath math="D_n" /> に一致する。
                </p>
                <p className="mt-4">
                    3. <InlineMath math="n" /> が偶数のとき、回転 <InlineMath math="r" /> を2つ飛ばしにした部分群 <InlineMath math="\langle r^2 \rangle" /> は、反転を組み合わせることで
                    <InlineMath math="\langle r^2, s \rangle" /> という指数2の部分群を形成できる。指数2であるため、これらは正規部分群である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-6">
                幾何学的なモデルを動かしながら群の演算を考えることで、抽象的な群の関係式（<InlineMath math="srs^{-1} = r^{-1}" /> など）の直感的な意味を深く理解することができます。
                次節では、より小さな、しかし独特な構造を持つ位数8の群である「四元数群」などを学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>二面体群 <InlineMath math="D_n" /> は正 <InlineMath math="n" /> 角形の対称性を表し、位数は <b><InlineMath math="2n" /></b> である。</li>
                    <li>中心のまわりを回転させる <b><InlineMath math="r" /></b> と、軸に関して反転させる <b><InlineMath math="s" /></b> の2つの元で生成される。</li>
                    <li>基本関係式は <InlineMath math="r^n = s^2 = e" />、および <b><InlineMath math="srs = r^{-1}" /></b> である。</li>
                    <li>回転全体のなす巡回部分群 <InlineMath math="\langle r \rangle" /> は常に <b>指数2の正規部分群</b> となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
