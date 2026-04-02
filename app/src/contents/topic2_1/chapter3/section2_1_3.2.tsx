import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function KernelAndImage() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                線形写像 <InlineMath math="f: V \to W" /> に対して、写像の振る舞いや構造を理解するための非常に重要な2つの部分空間が存在します。
                それが「<strong>核（Kernel）</strong>」と「<strong>像（Image）</strong>」です。<br />
                核は「原点に潰れてしまうものの集まり」、像は「実際に行き着く先全体の集まり」を表します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">核（Ker）と像（Im）の定義</h2>

            <ContentBox type="definition" title="Definition 3.2-1 （核 / Kernel）">
                <p>
                    線形写像 <InlineMath math="f: V \to W" /> に対して、<InlineMath math="W" /> の零ベクトル <InlineMath math="\boldsymbol{0}_W" /> に移されるような <InlineMath math="V" /> の要素全体の集合を <InlineMath math="f" /> の<strong>核</strong>（またはカーネル）と呼び、<InlineMath math="\ker f" /> や <InlineMath math="\mathrm{Ker}(f)" /> で表す。
                </p>
                <BlockMath math="\ker f = \{ \boldsymbol{v} \in V \mid f(\boldsymbol{v}) = \boldsymbol{0}_W \}" />
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.2-2 （像 / Image）">
                <p>
                    線形写像 <InlineMath math="f: V \to W" /> によって、<InlineMath math="V" /> の元が実際に移る先となる <InlineMath math="W" /> の要素全体の集合を <InlineMath math="f" /> の<strong>像</strong>（またはイメージ）と呼び、<InlineMath math="\mathrm{Im}\, f" /> または <InlineMath math="\mathrm{Im}(f)" /> で表す。（値域と同義である）
                </p>
                <BlockMath math="\mathrm{Im}\, f = \{ f(\boldsymbol{v}) \in W \mid \boldsymbol{v} \in V \}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">核と像は部分空間になる</h2>

            <p>
                <InlineMath math="\ker f" /> は <InlineMath math="V" /> の一部であり、<InlineMath math="\mathrm{Im}\, f" /> は <InlineMath math="W" /> の一部です。
                単なる集合ではなく、これらもまた線形空間（部分空間）となる性質を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 3.2-1 （核は部分空間）">
                <p>
                    線形写像 <InlineMath math="f: V \to W" /> の核 <InlineMath math="\ker f" /> は、定義域 <InlineMath math="V" /> の部分空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    部分空間の3条件を満たすことを確認する。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        <strong>零ベクトルを含む：</strong><br />
                        前節の性質により <InlineMath math="f(\boldsymbol{0}_V) = \boldsymbol{0}_W" /> であるため、<InlineMath math="\boldsymbol{0}_V \in \ker f" />。
                    </li>
                    <li>
                        <strong>和について閉じている：</strong><br />
                        <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in \ker f" /> を任意にとる。つまり <InlineMath math="f(\boldsymbol{x}) = \boldsymbol{0}_W" /> かつ <InlineMath math="f(\boldsymbol{y}) = \boldsymbol{0}_W" />。<br />
                        <InlineMath math="f(\boldsymbol{x} + \boldsymbol{y}) = f(\boldsymbol{x}) + f(\boldsymbol{y}) = \boldsymbol{0}_W + \boldsymbol{0}_W = \boldsymbol{0}_W" /> となるので、<InlineMath math="\boldsymbol{x} + \boldsymbol{y} \in \ker f" />。
                    </li>
                    <li>
                        <strong>スカラー倍について閉じている：</strong><br />
                        <InlineMath math="\boldsymbol{x} \in \ker f" /> とスカラー <InlineMath math="c" /> に対して、<br />
                        <InlineMath math="f(c\boldsymbol{x}) = cf(\boldsymbol{x}) = c\boldsymbol{0}_W = \boldsymbol{0}_W" /> となるので、<InlineMath math="c\boldsymbol{x} \in \ker f" />。
                    </li>
                </ol>
                <p className="mt-2">以上より <InlineMath math="\ker f" /> は <InlineMath math="V" /> の部分空間である。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 3.2-2 （像は部分空間）">
                <p>
                    線形写像 <InlineMath math="f: V \to W" /> の像 <InlineMath math="\mathrm{Im}\, f" /> は、値域 <InlineMath math="W" /> の部分空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    同様に部分空間の3条件を確認する。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        <strong>零ベクトルを含む：</strong><br />
                        <InlineMath math="\boldsymbol{0}_W = f(\boldsymbol{0}_V)" /> であるから、<InlineMath math="\boldsymbol{0}_W" /> はある <InlineMath math="V" /> の元の像として表せるため、<InlineMath math="\boldsymbol{0}_W \in \mathrm{Im}\, f" />。
                    </li>
                    <li>
                        <strong>和について閉じている：</strong><br />
                        <InlineMath math="\boldsymbol{w}_1, \boldsymbol{w}_2 \in \mathrm{Im}\, f" /> をとる。像の定義より、これらを写してくる <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2 \in V" /> が存在して <InlineMath math="f(\boldsymbol{v}_1) = \boldsymbol{w}_1" />、<InlineMath math="f(\boldsymbol{v}_2) = \boldsymbol{w}_2" /> となる。<br />
                        <InlineMath math="\boldsymbol{w}_1 + \boldsymbol{w}_2 = f(\boldsymbol{v}_1) + f(\boldsymbol{v}_2) = f(\boldsymbol{v}_1 + \boldsymbol{v}_2)" />。<InlineMath math="\boldsymbol{v}_1 + \boldsymbol{v}_2" /> は <InlineMath math="V" /> のベクトルであるため、<InlineMath math="\boldsymbol{w}_1 + \boldsymbol{w}_2" /> も像に含まれる。
                    </li>
                    <li>
                        <strong>スカラー倍について閉じている：</strong><br />
                        <InlineMath math="\boldsymbol{w} \in \mathrm{Im}\, f" /> に対して、ある <InlineMath math="\boldsymbol{v} \in V" /> が存在して <InlineMath math="\boldsymbol{w} = f(\boldsymbol{v})" />となる。<br />
                        任意のスカラー <InlineMath math="c" /> に対し、<InlineMath math="c\boldsymbol{w} = cf(\boldsymbol{v}) = f(c\boldsymbol{v})" />。<InlineMath math="c\boldsymbol{v} \in V" /> より <InlineMath math="c\boldsymbol{w}" /> も像に含まれる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単射・全射との関係</h2>

            <p>
                全射・単射という写像の一般的な概念も、線形写像においては「核と像」を使って極めてシンプルに判定できます。<br />
                特に「単射性」が「核が零ベクトルのみか」に帰着される性質は非常に重要です。
            </p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><InlineMath math="f" /> が<strong>全射</strong>である <InlineMath math="\Leftrightarrow \mathrm{Im}\, f = W" /> （像が到達空間全体と一致する。これは定義そのもの）</li>
                </ul>
            </div>

            <ContentBox type="proposition" title="Proposition 3.2-3 （単射の判定条件）">
                <p>
                    線形写像 <InlineMath math="f: V \to W" /> が<strong>単射</strong>（<InlineMath math="f(x)=f(y)" /> ならば必ず <InlineMath math="x=y" /> となる）であるための必要十分条件は、その核が零ベクトルのみからなることである。すなわち、
                </p>
                <BlockMath math="f \ \text{は単射} \iff \ker f = \{\boldsymbol{0}_V\}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="font-bold"><InlineMath math="\Rightarrow" /> (単射ならば <InlineMath math="\ker f = \{\boldsymbol{0}_V\}" />) の証明：</p>
                <p>
                    <InlineMath math="\boldsymbol{v} \in \ker f" /> を任意にとると、核の定義から <InlineMath math="f(\boldsymbol{v}) = \boldsymbol{0}_W" /> である。<br />
                    また、線形写像の基本性質から <InlineMath math="f(\boldsymbol{0}_V) = \boldsymbol{0}_W" /> である。<br />
                    よって <InlineMath math="f(\boldsymbol{v}) = f(\boldsymbol{0}_V)" /> となるが、<InlineMath math="f" /> は単射であると仮定しているため、行き先が等しいなら元のベクトルも等しくなければならない。
                    ゆえに <InlineMath math="\boldsymbol{v} = \boldsymbol{0}_V" />。したがって核の要素は <InlineMath math="\boldsymbol{0}_V" /> のみである。
                </p>

                <p className="font-bold mt-4"><InlineMath math="\Leftarrow" /> (<InlineMath math="\ker f = \{\boldsymbol{0}_V\}" /> ならば単射) の証明：</p>
                <p>
                    <InlineMath math="V" /> のベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> が <InlineMath math="f(\boldsymbol{x}) = f(\boldsymbol{y})" /> を満たすと仮定する。このとき単射であることを示すには、<InlineMath math="\boldsymbol{x} = \boldsymbol{y}" /> が導ければよい。<br />
                    両辺から <InlineMath math="f(\boldsymbol{y})" /> を引くと、<InlineMath math="f(\boldsymbol{x}) - f(\boldsymbol{y}) = \boldsymbol{0}_W" />。<br />
                    線形写像の性質を用いてまとめる（加法性と斉次性）と、
                </p>
                <BlockMath math="f(\boldsymbol{x} - \boldsymbol{y}) = \boldsymbol{0}_W" />
                <p>
                    となる。これはベクトル <InlineMath math="\boldsymbol{x} - \boldsymbol{y}" /> が <InlineMath math="f" /> の核に属していること（<InlineMath math="\boldsymbol{x} - \boldsymbol{y} \in \ker f" />）を意味する。<br />
                    いま、仮定から <InlineMath math="\ker f = \{\boldsymbol{0}_V\}" /> であるため、<InlineMath math="\boldsymbol{x} - \boldsymbol{y} = \boldsymbol{0}_V" /> でなければならない。ゆえに <InlineMath math="\boldsymbol{x} = \boldsymbol{y}" />。<br />
                    したがって <InlineMath math="f" /> は単射である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>写して <InlineMath math="\boldsymbol{0}" /> になる元の集まりを<strong>核（Ker）</strong>、写った先全体の集まりを<strong>像（Im）</strong>という（Definition 3.2-1, 3.2-2）。</li>
                    <li>核は定義域側の部分空間となり、像は値域（行き先）側の部分空間となる（Proposition 3.2-1, 3.2-2）。</li>
                    <li>ある線形写像が<strong>単射</strong>であるかどうかは、核に <InlineMath math="\boldsymbol{0}" /> 以外のベクトルが含まれていないかをチェックするだけで判定できる（Proposition 3.2-3）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
