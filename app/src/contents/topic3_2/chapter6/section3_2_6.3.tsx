import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PointAtInfinity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析において、無限遠方は単なる広がりではなく、一つの「点」として扱うことができます。
                これにより、全平面での振る舞いを統一的に捉えることが可能になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン球面と一点コンパクト化</h2>

            <p>
                複素平面 <InlineMath math="\mathbb{C}" /> に一つの仮想的な点 <strong>無限遠点 <InlineMath math="\infty" /></strong> を付け加えた集合を <strong>拡張複素平面</strong>（またはリーマン球面）と呼び、 <InlineMath math="\hat{\mathbb{C}}" /> と書きます。
            </p>

            <ContentBox type="remark" title="幾何学的イメージ：立体射影">
                <p>
                    北極を持つ球を考え、北極から複素平面へ光を投射することを想像してください。
                    平面上の全ての点は球面上の一点に対応しますが、遠くへ行くほど対応する点は北極に近づきます。
                    この「北極」そのものが、平面上では到達できない「無限遠」に対応しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無限遠点での挙動の判定</h2>

            <p>
                関数 <InlineMath math="f(z)" /> の <InlineMath math="z = \infty" /> での性質を調べるには、変換 <strong><InlineMath math="w = 1/z" /></strong> を行い、 <InlineMath math="w=0" /> での挙動を調べます。
            </p>

            <ContentBox type="definition" title="Definition 6.3-1 (無限遠点での挙動)">
                <p>
                    関数 <InlineMath math="g(w) = f(1/w)" /> の <InlineMath math="w = 0" /> における種類（正則、極、真性特異点）を、
                    そのまま元の関数 <InlineMath math="f(z)" /> の <InlineMath math="z = \infty" /> における種類と定義する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-1 (無限遠での分類)">
                <ul className="list-disc list-inside space-y-6">
                    <li>
                        <strong><InlineMath math="f(z) = 1/z" /></strong>:
                        <p className="ml-6 mt-1 text-sm italic">
                            <InlineMath math="g(w) = f(1/w) = w" />。<InlineMath math="w=0" /> で正則、かつ <InlineMath math="g(0)=0" />。
                            よって <InlineMath math="f(z)" /> は <InlineMath math="z=\infty" /> で正則であり、零点を持つ。
                        </p>
                    </li>
                    <li>
                        <strong><InlineMath math="f(z) = z^2" /></strong>:
                        <p className="ml-6 mt-1 text-sm italic">
                            <InlineMath math="g(w) = 1/w^2" />。<InlineMath math="w=0" /> は <InlineMath math="2" /> 位の極。
                            よって <InlineMath math="f(z)" /> は <InlineMath math="z=\infty" /> で <InlineMath math="2" /> 位の極を持つ。
                        </p>
                    </li>
                    <li>
                        <strong><InlineMath math="f(z) = e^z" /></strong>:
                        <p className="ml-6 mt-1 text-sm italic">
                            <InlineMath math="g(w) = e^{1/w}" />。<InlineMath math="w=0" /> は真性特異点。
                            よって <InlineMath math="f(z)" /> は <InlineMath math="z=\infty" /> で真性特異点を持つ。
                        </p>
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整関数の無限遠での挙動</h2>

            <p>
                リュービルの定理（§5.2）に関連して、整関数（全平面で正則な関数）の無限遠での性質には強い制約があります。
            </p>

            <ContentBox type="proposition" title="Proposition 6.3-1 (整関数の分類)">
                <p>
                    定数でない整関数 <InlineMath math="f(z)" /> は、無限遠点において必ず特異点を持つ。
                </p>
                <ul className="list-disc list-inside mt-4 ml-4 space-y-2">
                    <li><InlineMath math="z = \infty" /> が <strong>極</strong> <InlineMath math="\iff f(z)" /> は <strong>多項式</strong>。</li>
                    <li><InlineMath math="z = \infty" /> が <strong>真性特異点</strong> <InlineMath math="\iff f(z)" /> は <strong>超越整関数</strong>（<InlineMath math="e^z, \sin z" /> など）。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (多項式のケース)">
                <p>
                    <InlineMath math="z = \infty" /> が <InlineMath math="m" /> 位の極ならば、 <InlineMath math="g(w) = f(1/w)" /> の主要部が <InlineMath math="c_{-m}/w^m + \dots + c_{-1}/w" /> である。
                    これを元の変数に戻すと、<InlineMath math="f(z)" /> のテイラー展開が <InlineMath math="m" /> 次で止まることを意味し、多項式であることがわかる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>複素平面に無限遠点を加えたものがリーマン球面（一点コンパクト化）である。</li>
                    <li>無限遠での挙動は <InlineMath math="w = 1/z" /> と置換して <InlineMath math="w=0" /> を調べることで判定できる。</li>
                    <li>多項式は無限遠で極を持ち、それ以外の整関数は真性特異点を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
