import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaloisTheoryExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで学んできたガロアの基本定理の威力を実感するために、本節では少し複雑な四次拡大と有限体の拡大という2つの具体例を通して、ガロア対応（群の格子と体の格子の反順序対応）を完全に記述してみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">四次拡大のガロア対応</h2>

            <p>
                <InlineMath math="x^4 - 2" /> という多項式から作られるガロア拡大を考えます。このガロア群は、正方形の対称性を表す「二面体群」になります。
            </p>

            <ContentBox type="example" title="Example 5.5-1 (x^4 - 2 の分解体のガロア対応)">
                <p>
                    多項式 <InlineMath math="x^4 - 2 \in \mathbb{Q}[x]" /> の根は <InlineMath math="\pm\sqrt[4]{2}, \pm i\sqrt[4]{2}" /> である。したがって、その分解体は <InlineMath math="K = \mathbb{Q}(\sqrt[4]{2}, i)" /> となる。
                </p>
                <p>
                    拡大次数は <InlineMath math="[K : \mathbb{Q}] = [K : \mathbb{Q}(\sqrt[4]{2})][\mathbb{Q}(\sqrt[4]{2}) : \mathbb{Q}] = 2 \times 4 = 8" /> である。
                </p>
                <p>
                    ガロア群 <InlineMath math="G = \mathrm{Gal}(K/\mathbb{Q})" /> は位数 8 であり、以下の2つの自己同型で生成される。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\sigma" /> : <InlineMath math="\sqrt[4]{2} \mapsto i\sqrt[4]{2}" /> , <InlineMath math="i \mapsto i" /> （位数は4。<InlineMath math="\sqrt[4]{2}" /> を <InlineMath math="90^\circ" /> 回転させる）</li>
                    <li><InlineMath math="\tau" /> : <InlineMath math="\sqrt[4]{2} \mapsto \sqrt[4]{2}" /> , <InlineMath math="i \mapsto -i" /> （位数は2。複素共役）</li>
                </ul>
                <p>
                    これらは <InlineMath math="\tau\sigma = \sigma^3\tau" /> を満たすため、<InlineMath math="G" /> は正方形の対称群である<strong>二面体群 <InlineMath math="D_4" /></strong> と同型である。<InlineMath math="G = \{e, \sigma, \sigma^2, \sigma^3, \tau, \sigma\tau, \sigma^2\tau, \sigma^3\tau\}" />。
                </p>
                <p>
                    ガロアの基本定理により、<InlineMath math="D_4" /> の部分群と <InlineMath math="K/\mathbb{Q}" /> の中間体が1対1に対応する。代表的な対応は以下の通りである。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>位数 4 の部分群と 2 次中間体（<InlineMath math="[E:\mathbb{Q}]=2" />）：</strong>
                        <ul className="list-circle list-inside ml-4">
                            <li><InlineMath math="H_1 = \langle \sigma \rangle = \{e, \sigma, \sigma^2, \sigma^3\}" /> <InlineMath math="\iff" /> <InlineMath math="E_1 = \mathbb{Q}(i)" /> （<InlineMath math="\sigma" /> は <InlineMath math="i" /> を動かさない）</li>
                            <li><InlineMath math="H_2 = \{e, \sigma^2, \tau, \sigma^2\tau\}" /> <InlineMath math="\iff" /> <InlineMath math="E_2 = \mathbb{Q}(\sqrt{2})" /></li>
                            <li><InlineMath math="H_3 = \{e, \sigma^2, \sigma\tau, \sigma^3\tau\}" /> <InlineMath math="\iff" /> <InlineMath math="E_3 = \mathbb{Q}(\sqrt{-2})" /></li>
                        </ul>
                    </li>
                    <li><strong>位数 2 の部分群と 4 次中間体（<InlineMath math="[E:\mathbb{Q}]=4" />）：</strong>
                        <ul className="list-circle list-inside ml-4">
                            <li><InlineMath math="\langle \tau \rangle = \{e, \tau\}" /> <InlineMath math="\iff" /> <InlineMath math="\mathbb{Q}(\sqrt[4]{2})" /> （実部だけが残る）</li>
                            <li><InlineMath math="\langle \sigma^2\tau \rangle = \{e, \sigma^2\tau\}" /> <InlineMath math="\iff" /> <InlineMath math="\mathbb{Q}(i\sqrt[4]{2})" /></li>
                            <li><InlineMath math="\langle \sigma^2 \rangle = \{e, \sigma^2\}" /> <InlineMath math="\iff" /> <InlineMath math="\mathbb{Q}(\sqrt{2}, i)" /></li>
                        </ul>
                    </li>
                </ul>
                <p>
                    <InlineMath math="H_1, H_2, H_3" /> は指数 2 なので正規部分群であり、対応する <InlineMath math="E_1, E_2, E_3" /> も <InlineMath math="\mathbb{Q}" /> 上の正規拡大になっている。一方、<InlineMath math="\langle \tau \rangle" /> は正規部分群ではないため、<InlineMath math="\mathbb{Q}(\sqrt[4]{2})/\mathbb{Q}" /> は正規拡大ではない（共役な根 <InlineMath math="i\sqrt[4]{2}" /> が含まれていない）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限体拡大のガロア対応</h2>

            <p>
                有限体の構造は、第4章で学んだ通り巡回群によって支配されています。ここでもガロア理論が完璧に機能します。
            </p>

            <ContentBox type="example" title="Example 5.5-2 (F_16 / F_2 のガロア対応)">
                <p>
                    有限体 <InlineMath math="\mathbb{F}_{16} = \mathbb{F}_{2^4}" /> の <InlineMath math="\mathbb{F}_2" /> 上の拡大を考える。
                </p>
                <p>
                    ガロア群 <InlineMath math="G = \mathrm{Gal}(\mathbb{F}_{16}/\mathbb{F}_2)" /> は、フロベニウス写像 <InlineMath math="\phi(a) = a^2" /> を生成元とする位数 4 の巡回群である。すなわち <InlineMath math="G \cong \mathbb{Z}/4\mathbb{Z}" />。
                </p>
                <p>
                    巡回群 <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> の部分群は、位数（ラグランジュの定理の約数）に対応してただ一つずつ存在する。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li>位数 4 の部分群：<InlineMath math="G = \langle \phi \rangle" /> （全体）</li>
                    <li>位数 2 の部分群：<InlineMath math="H = \langle \phi^2 \rangle = \{\mathrm{id}, \phi^2\}" /></li>
                    <li>位数 1 の部分群：<InlineMath math="\{e\} = \{\mathrm{id}\}" /> （自明）</li>
                </ul>
                <p>
                    ガロアの基本定理により、これらに対応する中間体が存在する。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="G" /> の固定体：<InlineMath math="\mathbb{F}_2" /> （基礎体）</li>
                    <li><InlineMath math="H" /> の固定体：<InlineMath math="\phi^2(a) = a^4 = a" /> を満たす元。これは方程式 <InlineMath math="x^4 - x = 0" /> の根全体であり、<InlineMath math="\mathbb{F}_4" /> に一致する。</li>
                    <li><InlineMath math="\{e\}" /> の固定体：<InlineMath math="\mathbb{F}_{16}" /> （全体）</li>
                </ul>
                <p>
                    この結果は、第4章で示した「<InlineMath math="\mathbb{F}_{p^n}" /> の部分体は <span className="font-serif">d|n</span> となる <InlineMath math="\mathbb{F}_{p^d}" /> と一対一に対応する」という定理と完全に符合する。<InlineMath math="n=4" /> の約数は <InlineMath math="1, 2, 4" /> であり、それぞれ <InlineMath math="\mathbb{F}_2, \mathbb{F}_4, \mathbb{F}_{16}" /> に対応している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (ガロア理論の射程)">
                <p>
                    方程式の根の間の対称性（自己同型）を「群」という代数構造で捉え、その部分群を調べることで方程式がどのように分解していくかを解析する。これがエヴァリスト・ガロア（Evariste Galois）が10代にして到達した深遠なアイデアです。
                </p>
                <p>
                    次章以降では、この強力な辞書を用いて、「定規とコンパスによる作図問題」の完全な解決や、「5次以上の方程式にはなぜ解の公式が存在しないのか」という歴史的な難問（アーベル-ルフィニの定理）に決着をつけます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="x^4 - 2" /> のガロア群は位数8の二面体群 <InlineMath math="D_4" /> であり、その豊富な部分群構造が複雑な中間体の格子と完全に一致する。</li>
                    <li>有限体 <InlineMath math="\mathbb{F}_{p^n}" /> のガロア対応は、巡回群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> の部分群構造（<InlineMath math="n" /> の約数）へと見事に帰着する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
