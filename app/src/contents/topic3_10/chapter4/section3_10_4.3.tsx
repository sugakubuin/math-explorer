import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubfieldStructureOfFiniteFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有限体 <InlineMath math="\mathbb{F}_{p^n}" /> の内部にどのような部分体が含まれているのか、その構造は驚くほどシンプルに整数の約数・倍数の関係で決定されます。本節では有限体の部分体構造と、その背後にあるフロベニウス自己同型の群（ガロア群）の構造を調べます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限体の部分体</h2>

            <p>
                ある有限体が別の有限体を部分体として含む条件は、指数の整除関係に帰着します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (有限体の部分体の特徴づけ)">
                <p>
                    有限体 <InlineMath math="\mathbb{F}_{p^n}" /> の部分体に関する以下の性質が成り立つ。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><InlineMath math="\mathbb{F}_{p^n}" /> の部分体は、すべて <InlineMath math="\mathbb{F}_{p^d}" /> （ただし <InlineMath math="d" /> は <InlineMath math="n" /> の約数）の形をしている。</li>
                    <li>逆に、<InlineMath math="d" /> が <InlineMath math="n" /> の約数（<InlineMath math="d \mid n" />）であるとき、<InlineMath math="\mathbb{F}_{p^n}" /> は <InlineMath math="\mathbb{F}_{p^d}" /> と同型な部分体を<strong>ただ一つ</strong>含む。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （1の証明）部分体を <InlineMath math="E \subset \mathbb{F}_{p^n}" /> とする。<InlineMath math="E" /> も有限体であり、同じ素体 <InlineMath math="\mathbb{F}_p" /> を含むので、その位数はある <InlineMath math="d" /> を用いて <InlineMath math="p^d" /> となる。<InlineMath math="\mathbb{F}_{p^n}" /> は <InlineMath math="E" /> 上のベクトル空間となるため、その次元を <InlineMath math="k" /> とすると <InlineMath math="p^n = |E|^k = (p^d)^k = p^{dk}" /> となる。よって <InlineMath math="n = dk" /> であり、<InlineMath math="d \mid n" /> である。
                </p>
                <p>
                    （2の証明）<InlineMath math="d \mid n" /> とする。<InlineMath math="n = dk" /> のとき、多項式の因数分解の公式から
                </p>
                <BlockMath math="p^n - 1 = p^{dk} - 1 = (p^d - 1)(p^{d(k-1)} + \cdots + p^d + 1)" />
                <p>
                    となり、<InlineMath math="p^d - 1" /> は <InlineMath math="p^n - 1" /> を割り切る。これにより、多項式 <InlineMath math="x^{p^d-1} - 1" /> も <InlineMath math="x^{p^n-1} - 1" /> を割り切り、結果として <InlineMath math="x^{p^d} - x" /> は <InlineMath math="x^{p^n} - x" /> を割り切る。
                </p>
                <p>
                    前節より、<InlineMath math="\mathbb{F}_{p^n}" /> は <InlineMath math="x^{p^n} - x" /> のすべての根からなる。<InlineMath math="x^{p^d} - x" /> はその因数なので、<InlineMath math="\mathbb{F}_{p^n}" /> の中に <InlineMath math="x^{p^d} - x" /> の根がちょうど <InlineMath math="p^d" /> 個含まれている。この根の集合こそが <InlineMath math="\mathbb{F}_{p^d}" /> と同型な部分体であり、方程式の根の集合として決まるため一意である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-1 (F_64 の部分体格子)">
                <p>
                    <InlineMath math="\mathbb{F}_{64} = \mathbb{F}_{2^6}" /> の部分体構造を考える。
                </p>
                <p>
                    指数の <InlineMath math="6" /> の約数は <InlineMath math="1, 2, 3, 6" /> である。したがって、部分体は以下の4つのみである。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\mathbb{F}_{2^1} = \mathbb{F}_2" /> （素体）</li>
                    <li><InlineMath math="\mathbb{F}_{2^2} = \mathbb{F}_4" /></li>
                    <li><InlineMath math="\mathbb{F}_{2^3} = \mathbb{F}_8" /></li>
                    <li><InlineMath math="\mathbb{F}_{2^6} = \mathbb{F}_{64}" /> （自身）</li>
                </ul>
                <p>
                    ここで、<InlineMath math="2" /> と <InlineMath math="3" /> は互いに割り切らないため、<InlineMath math="\mathbb{F}_4" /> は <InlineMath math="\mathbb{F}_8" /> の部分体ではない（包含関係はない）。両者は共通の部分体 <InlineMath math="\mathbb{F}_2" /> を持つという、ひし形の格子構造（包含関係のネットワーク）を描く。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フロベニウスと部分体</h2>

            <p>
                フロベニウス写像を繰り返し適用することで得られる自己同型の群（ガロア群）が、有限体の構造を完全に統制しています。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-2 (有限体のガロア群)">
                <p>
                    有限次拡大 <InlineMath math="\mathbb{F}_{p^n}/\mathbb{F}_p" /> のガロア群（<InlineMath math="\mathbb{F}_p" /> を固定する自己同型の群）は、フロベニウス写像 <InlineMath math="\phi(a) = a^p" /> によって生成される位数 <InlineMath math="n" /> の巡回群である。
                </p>
                <BlockMath math="\mathrm{Gal}(\mathbb{F}_{p^n}/\mathbb{F}_p) = \langle \phi \rangle \cong \mathbb{Z}/n\mathbb{Z}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\phi" /> は自己同型であり、<InlineMath math="a \in \mathbb{F}_p" /> ならばフェルマーの小定理より <InlineMath math="a^p = a" /> なので <InlineMath math="\mathbb{F}_p" /> を固定する。よって <InlineMath math="\phi \in \mathrm{Gal}(\mathbb{F}_{p^n}/\mathbb{F}_p)" /> である。
                </p>
                <p>
                    <InlineMath math="\phi" /> を <InlineMath math="k" /> 回合成した写像 <InlineMath math="\phi^k" /> は <InlineMath math="\phi^k(a) = a^{p^k}" /> となる。<InlineMath math="\phi^k" /> が恒等写像 <InlineMath math="\mathrm{id}" /> となるための条件は、<InlineMath math="\mathbb{F}_{p^n}" /> のすべての元 <InlineMath math="a" /> に対して <InlineMath math="a^{p^k} = a" /> が成り立つことである。
                </p>
                <p>
                    方程式 <InlineMath math="x^{p^k} - x = 0" /> は最大でも <InlineMath math="p^k" /> 個しか根を持たない。したがって、<InlineMath math="\mathbb{F}_{p^n}" /> のすべての元（<InlineMath math="p^n" /> 個）がこれを満たすためには、<InlineMath math="p^k \geq p^n" /> すなわち <InlineMath math="k \geq n" /> でなければならない。よって、<InlineMath math="\phi" /> の位数はちょうど <InlineMath math="n" /> である。
                </p>
                <p>
                    有限体の拡大は分離的かつ正規（分解体なので）であるためガロア拡大であり、ガロア群の位数は拡大次数 <InlineMath math="[\mathbb{F}_{p^n} : \mathbb{F}_p] = n" /> に等しい。位数が <InlineMath math="n" /> の群の中に位数 <InlineMath math="n" /> の元 <InlineMath math="\phi" /> があるため、群全体は <InlineMath math="\phi" /> によって生成される巡回群となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-2 (F_8 / F_2 のガロア群)">
                <p>
                    拡大 <InlineMath math="\mathbb{F}_{8}/\mathbb{F}_2" /> のガロア群は <InlineMath math="\mathrm{Gal}(\mathbb{F}_8/\mathbb{F}_2) \cong \mathbb{Z}/3\mathbb{Z}" /> であり、要素は <InlineMath math="\{\mathrm{id}, \phi, \phi^2\}" /> の3つである。
                </p>
                <p>
                    <InlineMath math="\mathbb{F}_8" /> の生成元 <InlineMath math="\alpha" />（<InlineMath math="\alpha^3 = \alpha+1" /> を満たす）に対して、これらの自己同型がどのように作用するかを計算する。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\phi(\alpha) = \alpha^2" /></li>
                    <li><InlineMath math="\phi^2(\alpha) = (\alpha^2)^2 = \alpha^4 = \alpha^3 \cdot \alpha = (\alpha+1)\alpha = \alpha^2 + \alpha" /></li>
                    <li><InlineMath math="\phi^3(\alpha) = (\alpha^2+\alpha)^2 = \alpha^4 + \alpha^2 = (\alpha^2+\alpha) + \alpha^2 = \alpha" /> （確かに元に戻る）</li>
                </ul>
                <p>
                    自己同型は、根 <InlineMath math="\alpha, \alpha^2, \alpha^2+\alpha" /> をぐるぐると巡回的に置換していることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (ガロア対応の片鱗)">
                <p>
                    ここで見た「部分体は <InlineMath math="n" /> の約数 <InlineMath math="d" /> と一対一に対応する」という事実と、「ガロア群が位数 <InlineMath math="n" /> の巡回群（その部分群は <InlineMath math="n" /> の約数 <InlineMath math="d" /> と一対一に対応する）である」という事実は、決して偶然ではありません。次章で学ぶ「ガロアの基本定理」の最も美しく簡単な具体例が、この有限体の構造の中に現れているのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有限体 <InlineMath math="\mathbb{F}_{p^n}" /> は、<InlineMath math="n" /> の各約数 <InlineMath math="d" /> に対してただ一つの部分体 <InlineMath math="\mathbb{F}_{p^d}" /> を含む。</li>
                    <li>有限体のガロア群 <InlineMath math="\mathrm{Gal}(\mathbb{F}_{p^n}/\mathbb{F}_p)" /> は、フロベニウス写像 <InlineMath math="\phi(a) = a^p" /> によって生成される位数 <InlineMath math="n" /> の巡回群である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
