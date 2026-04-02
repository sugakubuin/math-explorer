import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FundamentalTheoremOfGaloisTheory() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、体論の最高峰とも言える「ガロアの基本定理」に到達します。この定理は、複雑な「体の中間体（部分体）」の構造を、完全に「有限群の部分群」の構造へと翻訳（辞書引き）できるという、数学における最も美しい対応関係の１つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガロアの基本定理（Galois Correspondence）</h2>

            <p>
                群から部分体を作る操作（固定体）と、部分体から群を作る操作（ガロア群）が、完璧な逆写像（1対1対応）をなすことを主張します。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (ガロアの基本定理)">
                <p>
                    <InlineMath math="K/F" /> をガロア拡大とし、そのガロア群を <InlineMath math="G = \mathrm{Gal}(K/F)" /> とする。
                </p>
                <p>
                    このとき、<InlineMath math="F" /> と <InlineMath math="K" /> の間の<strong>中間体 <InlineMath math="E" /></strong> の集合と、<InlineMath math="G" /> の<strong>部分群 <InlineMath math="H" /></strong> の集合の間に、以下の対応による1対1の全単射が存在する。
                </p>
                <ul className="list-disc list-inside mt-2 mb-2">
                    <li>中間体から部分群へ：<InlineMath math="E \mapsto \mathrm{Gal}(K/E)" /> （<InlineMath math="E" /> を固定する自己同型からなる部分群）</li>
                    <li>部分群から中間体へ：<InlineMath math="H \mapsto K^H" /> （<InlineMath math="H" /> によって固定される元からなる中間体）</li>
                </ul>
                <p>
                    さらに、この対応は<strong>包含関係を逆転</strong>させる。すなわち、
                </p>
                <BlockMath math="E_1 \subset E_2 \iff \mathrm{Gal}(K/E_1) \supset \mathrm{Gal}(K/E_2)" />
                <p>
                    が成立する（反順序同型）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    対応が1対1（全単射）であることを示すには、互いの操作を合成すると元に戻ることを示せばよい。
                </p>
                <p>
                    <strong>（部分群 <InlineMath math="\to" /> 中間体 <InlineMath math="\to" /> 部分群）</strong><br />
                    任意の部分群 <InlineMath math="H \leq G" /> から出発する。<InlineMath math="H" /> の固定体 <InlineMath math="K^H" /> を作り、その上のガロア群 <InlineMath math="\mathrm{Gal}(K/K^H)" /> を考える。アルティンの定理（Theorem 5.2-1）によれば、これは <InlineMath math="H" /> 自身に一致する。すなわち <InlineMath math="\mathrm{Gal}(K/K^H) = H" />。
                </p>
                <p>
                    <strong>（中間体 <InlineMath math="\to" /> 部分群 <InlineMath math="\to" /> 中間体）</strong><br />
                    任意の中間体 <InlineMath math="F \subset E \subset K" /> から出発する。<InlineMath math="K/F" /> がガロア拡大（分離的かつ正規）であれば、<InlineMath math="E" /> を新たな基礎体とみなした <InlineMath math="K/E" /> もまた分離的かつ正規であるため、ガロア拡大となる。そのガロア群 <InlineMath math="H' = \mathrm{Gal}(K/E)" /> を考える。この <InlineMath math="H'" /> を用いて固定体 <InlineMath math="K^{H'}" /> を作ると、ガロア拡大の性質（アルティンの定理の帰結）から <InlineMath math="K^{\mathrm{Gal}(K/E)} = E" /> となり、元に戻る。
                </p>
                <p>
                    <strong>（包含関係の逆転）</strong><br />
                    <InlineMath math="E_1 \subset E_2" /> とする。<InlineMath math="\sigma \in \mathrm{Gal}(K/E_2)" /> は定義により <InlineMath math="E_2" /> のすべての元を固定する。当然その部分集合である <InlineMath math="E_1" /> のすべての元も固定するので、<InlineMath math="\sigma \in \mathrm{Gal}(K/E_1)" /> である。よって <InlineMath math="\mathrm{Gal}(K/E_2) \subset \mathrm{Gal}(K/E_1)" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                対応関係を視覚的に理解するために、具体的な拡大の「部分群の格子」と「中間体の格子」を見比べてみましょう。
            </p>

            <ContentBox type="example" title="Example 5.3-1 (Q(√2,√3)/Q のガロア対応)">
                <p>
                    <InlineMath math="K = \mathbb{Q}(\sqrt{2},\sqrt{3})" />、<InlineMath math="F = \mathbb{Q}" /> とする。拡大次数は 4。
                </p>
                <p>
                    ガロア群 <InlineMath math="G = \mathrm{Gal}(K/\mathbb{Q})" /> はクラインの4群 <InlineMath math="(\mathbb{Z}/2\mathbb{Z})^2" /> に同型で、<InlineMath math="G = \{e, \sigma, \tau, \sigma\tau\}" /> と書ける。
                    （<InlineMath math="\sigma: \sqrt{2}\mapsto-\sqrt{2}, \sqrt{3}\mapsto\sqrt{3}" />。 <InlineMath math="\tau: \sqrt{2}\mapsto\sqrt{2}, \sqrt{3}\mapsto-\sqrt{3}" />）
                </p>
                <p>
                    群 <InlineMath math="G" /> の部分群は、位数 1 が <InlineMath math="\{e\}" />、位数 4 が <InlineMath math="G" />、位数 2 が <InlineMath math="\langle\sigma\rangle, \langle\tau\rangle, \langle\sigma\tau\rangle" /> の3つ、合計5つ存在する。ガロアの基本定理より、中間体もぴったり5つ存在する。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\{e\} \iff K = \mathbb{Q}(\sqrt{2}, \sqrt{3})" /></li>
                    <li><InlineMath math="\langle\sigma\rangle \iff \mathbb{Q}(\sqrt{3})" /> （<InlineMath math="\sqrt{3}" /> だけが固定される）</li>
                    <li><InlineMath math="\langle\tau\rangle \iff \mathbb{Q}(\sqrt{2})" /> （<InlineMath math="\sqrt{2}" /> だけが固定される）</li>
                    <li><InlineMath math="\langle\sigma\tau\rangle \iff \mathbb{Q}(\sqrt{6})" /> （<InlineMath math="\sigma\tau(\sqrt{6}) = (-\sqrt{2})(-\sqrt{3}) = \sqrt{6}" /> と固定される）</li>
                    <li><InlineMath math="G \iff \mathbb{Q}" /></li>
                </ul>
                <p>
                    （小さい部分群）ほど（大きな中間体）に対応していることがはっきりと見て取れる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">次数と指数の関係</h2>

            <p>
                ガロア対応は、単に集合の対応だけでなく、「大きさ（次元・位数）」の対応関係も与えます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-1 (次数と指数の対応)">
                <p>
                    ガロア対応において、中間体 <InlineMath math="E" /> とそれに対応する部分群 <InlineMath math="H = \mathrm{Gal}(K/E)" /> に関して、以下の等式が成立する。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li>上の階層の次元：<InlineMath math="[K : E] = |H|" /> （アルティンの定理）</li>
                    <li>下の階層の次元：<InlineMath math="[E : F] = [G : H]" /> （群 <InlineMath math="G" /> における部分群 <InlineMath math="H" /> の指数）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) はアルティンの定理より明らか。
                </p>
                <p>
                    (2) は、体の拡大の連鎖律 <InlineMath math="[K:F] = [K:E][E:F]" /> と、群のラグランジュの定理 <InlineMath math="|G| = |H| [G:H]" /> を組み合わせることで証明される。
                </p>
                <p>
                    <InlineMath math="K/F" /> がガロア拡大であることから <InlineMath math="[K:F] = |G|" />。これを連鎖律に代入し、(1) の <InlineMath math="[K:E] = |H|" /> を使うと、
                </p>
                <BlockMath math="|G| = |H| [E:F] \implies [E:F] = \frac{|G|}{|H|} = [G:H]" />
                <p>
                    となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-2 (S_3 の対応の次数確認)">
                <p>
                    <InlineMath math="K = \mathbb{Q}(\sqrt[3]{2}, \omega)" /> のガロア群 <InlineMath math="G \cong S_3" />（位数 6）を考える。
                </p>
                <p>
                    部分群 <InlineMath math="H = \langle \sigma \rangle \cong \mathbb{Z}/3\mathbb{Z}" />（位数 3）に対応する中間体は <InlineMath math="E = \mathbb{Q}(\omega)" /> であった。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="[K : \mathbb{Q}(\omega)] = 3" /> であり、これは <InlineMath math="|H| = 3" /> と一致する。</li>
                    <li><InlineMath math="[\mathbb{Q}(\omega) : \mathbb{Q}] = 2" /> であり、これは群の指数 <InlineMath math="[S_3 : \mathbb{Z}/3\mathbb{Z}] = 6 / 3 = 2" /> と一致する。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="Remark (ガロア理論の威力)">
                <p>
                    体の「中間体がいくつあるか、どんな構造か」を直接調べるのは極めて困難です。しかし、ガロアの基本定理により、この問題を「有限群の部分群を数え上げる」という、はるかに機械的で計算可能な問題へと変換できたのです。これがガロア理論の最大の威力です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ガロアの基本定理</strong>：中間体 <InlineMath math="E" /> とガロア群の部分群 <InlineMath math="H" /> は、<InlineMath math="E = K^H" /> と <InlineMath math="H = \mathrm{Gal}(K/E)" /> によって 1対1（包含関係逆転）に対応する。</li>
                    <li>相対拡大次数 <InlineMath math="[K:E]" /> は部分群の位数 <InlineMath math="|H|" /> に、基礎体からの拡大次数 <InlineMath math="[E:F]" /> は部分群の指数 <InlineMath math="[G:H]" /> に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
