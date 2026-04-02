import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DualMap() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ベクトル空間 <InlineMath math="V" /> から <InlineMath math="W" /> への普通の線形写像 <InlineMath math="f: V \to W" /> があるとします。<br />
                このとき、自動的に「逆向き」の空間、つまり双対空間 <InlineMath math="W^*" /> から <InlineMath math="V^*" /> への線形写像を作り出すことができます。
                これを <InlineMath math="f" /> に対する<strong>双対写像（Dual Map）</strong>あるいは転置写像と呼びます。<br />
                「関数」のさらに上のレイヤーで起こる関数のやり取りであるため混乱しやすい部分ですが、写像の構造を理解する上で非常に重要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双対写像の定義</h2>

            <ContentBox type="definition" title="Definition 4.3-1 （双対写像・転置写像 / Dual Map）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> と <InlineMath math="W" /> について、線形写像 <InlineMath math="f: V \to W" /> が与えられているとする。<br />
                    このとき、写像先の双対空間 <InlineMath math="W^*" /> の元（線形汎関数）<InlineMath math="g \in W^*" /> に対し、<InlineMath math="V" /> 上の関数を次のように定義する。
                </p>
                <BlockMath math="(f^*(g))(\boldsymbol{x}) = g(f(\boldsymbol{x})) \quad (\text{任意の } \boldsymbol{x} \in V)" />
                <p>
                    このとき <InlineMath math="f^*(g)" /> は <InlineMath math="V" /> 上の線形汎関数になるため、<InlineMath math="f^*(g) \in V^*" /> である。<br />
                    このようにして「<InlineMath math="W^*" /> の要素 <InlineMath math="g" /> を受け取って、<InlineMath math="V^*" /> の要素 <InlineMath math="f^*(g)" /> を出力する」ような写像
                </p>
                <BlockMath math="f^* : W^* \to V^*" />
                <p>
                    を <InlineMath math="f" /> の<strong>双対写像</strong>（または転置写像）と呼び、<InlineMath math="f^*" /> または <InlineMath math="f^T" /> などで表す。
                </p>
                <p className="mt-2 text-sm bg-yellow-50 dark:bg-yellow-900/30 p-2 rounded">
                    ※要するに、関数 <InlineMath math="g" /> の入力口の「手前」に <InlineMath math="f" /> を結合させる操作を行っているだけです。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                定義式 <InlineMath math="(f^*(g))(\boldsymbol{x}) = g(f(\boldsymbol{x}))" /> は、小さな次元の具体例で見ると理解しやすいです。
            </p>

            <ContentBox type="example" title="Example 4.3-1 （平面の線形写像と双対写像）">
                <p>
                    <InlineMath math="V = W = \mathbb{R}^2" /> とし、線形写像 <InlineMath math="f: \mathbb{R}^2 \to \mathbb{R}^2" /> を
                </p>
                <BlockMath math="f\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x + y \\ x - y \end{pmatrix}" />
                <p>
                    で与える。<InlineMath math="W^*" /> の元として第1成分を取り出す汎関数 <InlineMath math="g(s, t) = s" />（標準基底に対する <InlineMath math="\boldsymbol{e}_1^*" /> に対応）をとると、任意の <InlineMath math="\boldsymbol{x} = (x, y)^T \in \mathbb{R}^2" /> に対して
                </p>
                <BlockMath math="(f^*(g))(x, y) = g(f(x, y)) = g(x + y,\, x - y) = x + y" />
                <p>
                    となる。すなわち <InlineMath math="f^*(g)" /> は汎関数 <InlineMath math="(x, y) \mapsto x + y" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双対写像の性質</h2>

            <p className="leading-relaxed">
                双対写像 <InlineMath math="f^*" /> 自身も、<InlineMath math="W^*" /> から <InlineMath math="V^*" /> への線形写像です。
                さらに合成に対して順序が逆転するという規則があり、行列の転置と対応します（後の Remark も参照）。
            </p>

            <ContentBox type="proposition" title="Proposition 4.3-1 （双対写像の線形性と合成）">
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>双対写像の線形性：</strong><br />
                        双対写像 <InlineMath math="f^* : W^* \to V^*" /> 自身も線形写像である。<br />
                        すなわち、<InlineMath math="g_1, g_2 \in W^*" /> とスカラー <InlineMath math="c" /> に対し、<br />
                        <InlineMath math="f^*(g_1 + g_2) = f^*(g_1) + f^*(g_2)" /> <br />
                        <InlineMath math="f^*(cg_1) = c f^*(g_1)" /> <br />
                        が成り立つ。
                    </li>
                    <li>
                        <strong>合成写像の双対：</strong><br />
                        二つの線形写像 <InlineMath math="f: U \to V" /> と <InlineMath math="h: V \to W" /> の合成写像 <InlineMath math="h \circ f: U \to W" /> の双対写像は、それぞれの双対写像の合成と以下のように関連する（順序が逆転する）。<br />
                        <BlockMath math="(h \circ f)^* = f^* \circ h^*" />
                    </li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed">
                以下では、定義に戻って成分ごとに確認すればよい部分と、合成の等式では「どちらの関数にどのベクトルを代入したか」に注意すべき部分に分けて示します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p className="font-bold">1. <InlineMath math="\boldsymbol{f^*}" /> の線形性の証明：</p>
                <p>
                    <InlineMath math="W^*" /> の任意の元 <InlineMath math="g_1, g_2" /> と <InlineMath math="V" /> の任意の元 <InlineMath math="\boldsymbol{x}" /> に対して検証する。<br />
                    双対写像の定義 <InlineMath math="f^*(g)(\boldsymbol{x}) = g(f(\boldsymbol{x}))" /> より、
                </p>
                <BlockMath math="(f^*(g_1 + g_2))(\boldsymbol{x}) = (g_1 + g_2)(f(\boldsymbol{x}))" />
                <p>
                    関数の和の定義より、これは
                </p>
                <BlockMath math="\begin{aligned} &(g_1 + g_2)(f(\boldsymbol{x})) \\ &= g_1(f(\boldsymbol{x})) + g_2(f(\boldsymbol{x})) \\ &= (f^*(g_1))(\boldsymbol{x}) + (f^*(g_2))(\boldsymbol{x}) \\ &= (f^*(g_1) + f^*(g_2))(\boldsymbol{x}) \end{aligned}" />
                <p>
                    となり、任意の <InlineMath math="\boldsymbol{x}" /> について成り立つため関数として <InlineMath math="f^*(g_1 + g_2) = f^*(g_1) + f^*(g_2)" /> である。スカラー倍についても同様に証明できる。
                </p>

                <p className="font-bold mt-4">2. 合成写像の双対の証明：</p>
                <p>
                    定義域は <InlineMath math="W^*" /> で、値域は <InlineMath math="U^*" /> になる。<InlineMath math="g \in W^*" /> と <InlineMath math="\boldsymbol{u} \in U" /> を任意にとる。<br />
                    左辺の関数 <InlineMath math="(h \circ f)^*(g)" /> にベクトル <InlineMath math="\boldsymbol{u}" /> を代入すると、双対写像の定義から
                </p>
                <BlockMath math="\left((h \circ f)^*(g)\right)(\boldsymbol{u}) = g((h \circ f)(\boldsymbol{u})) = g(h(f(\boldsymbol{u})))" />
                <p>
                    次に右辺の関数 <InlineMath math="(f^* \circ h^*)(g)" /> にベクトル <InlineMath math="\boldsymbol{u}" /> を代入してみる。この関数は <InlineMath math="f^*(h^*(g))" /> なので、
                </p>
                <BlockMath math="\left(f^*(h^*(g))\right)(\boldsymbol{u}) = [h^*(g)](f(\boldsymbol{u}))" />
                <p>
                    ここで <InlineMath math="h^*(g)" /> という関数は、あるベクトル <InlineMath math="\boldsymbol{v}" /> が渡されたら <InlineMath math="g(h(\boldsymbol{v}))" /> を返す関数であるため、これに <InlineMath math="f(\boldsymbol{u})" /> を渡すと
                </p>
                <BlockMath math="[h^*(g)](f(\boldsymbol{u})) = g(h(f(\boldsymbol{u})))" />
                <p>
                    となり、両者は完全に一致する。任意の <InlineMath math="\boldsymbol{u}" /> に対して一致するため、関数として同一である。
                    したがって <InlineMath math="(h \circ f)^* = f^* \circ h^*" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                合成の順序が反転するという事実は、後に学ぶ表現行列の言葉に翻訳すると「転置の積の順序が入れ替わる」ことと同じになります。
            </p>

            <ContentBox type="remark" title="表現行列と「転置行列」の由来">
                <p>
                    線形写像 <InlineMath math="f" /> の（ある基底に対する）表現行列を <InlineMath math="A" /> とします。このとき、対応する双対基底を考えたときに、双対写像 <InlineMath math="f^*" /> の表現行列はなんと <InlineMath math="A" /> の<strong>転置行列 <InlineMath math="A^T" /></strong> になります。
                </p>
                <p>
                    行と列を入れ替えるという操作は行列の単なる記号的な計算だと思われがちですが、実はその本質は「関数を合成する順序を逆から見直している（双対写像を考えている）」ことにあるのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>線形写像 <InlineMath math="f: V \to W" /> があれば、それに対して自然に双対空間の間の逆向きの写像 <InlineMath math="f^*: W^* \to V^*" /> を定義できる。これを<strong>双対写像</strong>という（Definition 4.3-1）。</li>
                    <li><InlineMath math="(f^*(g))(\boldsymbol{x}) = g(f(\boldsymbol{x}))" /> を数式で追うと、双対写像の意味が具体化する（Example 4.3-1）。</li>
                    <li>合成写像の双対は、それぞれの双対写像の合成となり「掛ける順序が逆になる」という重要な特徴を持つ（<InlineMath math="(h \circ f)^* = f^* \circ h^*" />）（Proposition 4.3-1）。</li>
                    <li>双対写像を表現行列で考えると、これは「転置行列」をとる操作にまさしく対応している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
