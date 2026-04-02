import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IsometriesAndIntrinsicGeometry() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに、第一基本形式が曲面の長さや面積を決定することを見ました。この事実は「第一基本形式が等しい曲面は、幾何学的に同じものである」という極めて重要な帰結を導きます。この章では、等長写像と内的幾何の概念を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">等長写像の定義</h2>

            <p className="leading-relaxed">
                2つの曲面の間で、すべての長さの測定ルール（内積）を保つような写像を考えます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.3-1 (等長写像)"
            >
                <p>
                    曲面 <InlineMath math="S_1" /> から曲面 <InlineMath math="S_2" /> への微分同相写像（滑らかで逆も滑らかな全単射）<InlineMath math="\phi : S_1 \to S_2" /> が<strong>等長写像（isometry）</strong>であるとは、任意の点 <InlineMath math="p \in S_1" /> とその接平面の任意のベクトル <InlineMath math="v, w \in T_p S_1" /> に対して、内積が保存されることをいう。
                    <BlockMath math="\langle v, w \rangle_p = \langle d\phi_p(v), d\phi_p(w) \rangle_{\phi(p)}" />
                </p>
                <p>
                    （ここで <InlineMath math="d\phi_p" /> は <InlineMath math="\phi" /> の微分写像であり、接ベクトルを写す線形写像である。）<br />
                    等長写像が存在する2つの曲面は、互いに<strong>等長（isometric）</strong>であるという。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                等長写像の存在は、2つの曲面が「曲げたりねじったり」するだけで互いに移り合う（伸縮や破れを伴わない）ことを意味します。
            </p>

            <ContentBox
                type="example"
                title="Example 3.3-1 (円柱と平面の等長写像)"
            >
                <p>
                    半径 1 の円柱面 <InlineMath math="S_1" />（<InlineMath math="\mathbf{x}(u,v) = (\cos u, \sin u, v)" />）と、平面 <InlineMath math="S_2" />（<InlineMath math="\mathbf{y}(u,v) = (u, v, 0)" />）を考える。
                </p>
                <p>
                    写像 <InlineMath math="\phi : S_1 \to S_2" /> を、パラメータ <InlineMath math="(u,v)" /> の値をそのまま対応させる写像 <InlineMath math="\phi(\mathbf{x}(u,v)) = \mathbf{y}(u,v)" /> として定める。
                    Example 3.1-1 と Example 3.1-3 で計算した通り、平面も円柱も第一基本形式の係数は <InlineMath math="E=1, F=0, G=1" /> で完全に一致する。
                </p>
                <p>
                    第一基本形式（すなわち内積）が一致するため、この <InlineMath math="\phi" /> は等長写像である。日常的な感覚でも、紙を丸めて円柱を作ることができる（伸縮させずに変形できる）ため、平面と円柱が等長であることは直感に合致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">内的幾何と外的幾何</h2>

            <p className="leading-relaxed">
                等長写像の概念を通して、曲面の性質を「内的」なものと「外的」なものに分類することができます。これは微分幾何学におけるパラダイムシフトと言える重要な概念です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.3-2 (内的幾何と外的幾何)"
            >
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>内的（intrinsic）性質：</strong> 曲面が3次元空間に「どのように埋め込まれているか」に依存せず、等長写像によって完全に保存される性質。第一基本形式（計量）のみから計算できる量のこと。</li>
                    <li><strong>外的（extrinsic）性質：</strong> 空間内での曲がり方など、埋め込み方に依存する性質。等長写像で別の曲面に移したときに値が変わってしまう量のこと。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 3.3-1 (等長写像は弧長・面積・角度を保存する)"
            >
                <p>
                    弧長、面積、および曲線同士のなす角度は、曲面の<strong>内的性質</strong>である。すなわち、等長写像で保存される。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    等長写像 <InlineMath math="\phi" /> のもとでは、対応する接ベクトルの内積が等しい。すなわち、対応するパラメータ系において第一基本形式の係数 <InlineMath math="E, F, G" /> が等しい。
                </p>
                <p>
                    <strong>弧長：</strong> Theorem 3.2-1 より、弧長は <InlineMath math="\int \sqrt{E\dot{u}^2 + 2F\dot{u}\dot{v} + G\dot{v}^2} \,dt" /> で計算される。<InlineMath math="E, F, G" /> が等しければ弧長も等しい。
                </p>
                <p>
                    <strong>面積：</strong> Theorem 3.2-2 より、面積素元は <InlineMath math="\sqrt{EG - F^2} \,du\,dv" /> で計算される。<InlineMath math="E, F, G" /> が等しければ面積も保存される。
                </p>
                <p>
                    <strong>角度：</strong> 2つの接ベクトル <InlineMath math="\mathbf{u}, \mathbf{v}" /> のなす角 <InlineMath math="\theta" /> は <InlineMath math="\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|}" /> で定義される。内積とノルム（内積から定まる）が保存されるため、角度も保存される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.3-2 (地図投影の内的幾何)"
            >
                <p>
                    地球の表面（球面）の地図を平面の紙に描くことを考える。
                </p>
                <p>
                    もし球面と平面の間に等長写像が存在すれば、距離、面積、角度のすべてを正確に保った完璧な地図が作れるはずである。しかし、球面と平面は等長ではない（次章以降で学ぶ「ガウス曲率」が異なるため）。
                </p>
                <p>
                    したがって、距離、面積、角度の<strong>すべてを同時に保存する地図投影法は存在しない</strong>ことが、数学的に厳密に証明される。（例えばメルカトル図法は角度を保存するが面積が歪み、モルワイデ図法は面積を保存するが角度や形が歪む。）
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="リーマン幾何への接続"
            >
                <p>
                    内的幾何の視点は、「3次元空間に浮かぶ曲面」という制約を取り払うことを可能にします。
                </p>
                <p>
                    「第一基本形式（微小な長さの測り方）」さえ与えられれば、外側の空間がなくても、曲面上の生物は距離や面積や角度を計算して幾何学を展開できます。この発想を一般次元の抽象空間に押し広げたのが、後の多様体論（4-5）で学ぶ<strong>リーマン幾何学（Riemannian geometry）</strong>であり、アインシュタインの一般相対性理論の数学的基礎となりました。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>接ベクトルの内積（第一基本形式）を保存する微分同相写像を等長写像という。</li>
                    <li>等長写像で保存される性質（弧長、面積、角度など）を内的性質と呼ぶ。第一基本形式だけで決まる。</li>
                    <li>空間への埋め込み方に依存する性質を外的性質と呼び、これらは等長変形（紙を曲げるなど）によって変化しうる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}