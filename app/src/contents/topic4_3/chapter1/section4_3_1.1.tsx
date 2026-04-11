import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OriginOfEllipticIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、楕円関数論の出発点となる「楕円積分」について、その歴史的な起源である弧長や振り子の周期の計算を通じて導入します。微積分学で学ぶ初等関数の積分では扱いきれない新しいクラスの関数が、具体的な物理や幾何の要請から自然に現れることを見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弧長積分と楕円積分</h2>

            <p>
                初等関数で表せない積分の代表例として、曲線上の弧長を計算する問題があります。まずは、名称の由来ともなった楕円の弧長について考えてみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-1 (楕円の弧長)">
                <p>
                    長軸 <InlineMath math="2a" />、短軸 <InlineMath math="2b" /> の楕円は媒介変数 <InlineMath math="\theta" /> を用いて <InlineMath math="x = a\cos\theta" />, <InlineMath math="y = b\sin\theta" /> と表される。このとき、パラメータが <InlineMath math="0" /> から <InlineMath math="\theta" /> まで変化する部分の弧長 <InlineMath math="s(\theta)" /> は次の積分で与えられる。
                </p>
                <BlockMath math="\begin{aligned} s(\theta) &= \int_0^\theta \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt \\ &= \int_0^\theta \sqrt{a^2\sin^2 t + b^2\cos^2 t}\,dt \end{aligned}"
                />
                <p>
                    <InlineMath math="a = b" /> （円）の場合、被積分関数は定数となり容易に積分できるが、<InlineMath math="a \neq b" /> の場合、この積分は代数関数や三角関数、指数関数・対数関数といった有限回の演算で表せる初等関数では表せないことが知られている。
                </p>
            </ContentBox>

            <p>
                このように、単純な図形の長さを求めるだけでも初等関数の枠組みを超える積分が登場します。同様に、数学史上重要な役割を果たした別の曲線としてレムニスケートがあります。
            </p>

            <ContentBox type="example" title="Example 1.1-2 (レムニスケートの弧長)">
                <p>
                    極座標で <InlineMath math="r^2 = \cos 2\theta" /> と表される曲線（レムニスケート）の原点からの弧長 <InlineMath math="s" /> は、動径 <InlineMath math="r" /> を積分変数として以下のように表される。
                </p>
                <BlockMath math="s(r) = \int_0^r \frac{1}{\sqrt{1-t^4}}\,dt"
                />
                <p>
                    この積分も初等関数で表すことはできない。ガウスはこのレムニスケート積分の研究から出発し、後に楕円関数の二重周期性を発見するに至った。
                </p>
            </ContentBox>

            <p>
                これらの例からわかるように、平方根の中に多項式を含む積分は非常にありふれたものです。歴史的経緯から、これらを総称して「楕円積分」と呼びます。
            </p>

            <ContentBox type="remark" title="「楕円積分」という名称について">
                <p>
                    「楕円積分」という名前は Example 1.1-1 で見たような楕円の弧長の計算に由来していますが、現在では楕円に限らず、広く「<InlineMath math="\sqrt{P(x)}" />（ここで <InlineMath math="P(x)" /> は重根を持たない3次または4次の多項式）を含む有理関数の積分」のクラス全体を指す言葉として定着しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">振り子の周期と初等関数の限界</h2>

            <p>
                幾何学的な問題だけでなく、古典力学における基本的な問題からも楕円積分は現れます。もっとも身近な例である単振り子の運動を考えてみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-3 (単振り子の周期)">
                <p>
                    長さ <InlineMath math="l" /> の糸の先に質量 <InlineMath math="m" /> の重りがついた単振り子を最大振幅 <InlineMath math="\alpha" /> で振らせたとき、その厳密な周期 <InlineMath math="T" /> はエネルギー保存則から以下のように導かれる。
                </p>
                <BlockMath math="T = 4\sqrt{\frac{l}{g}}\int_0^{\pi/2}\frac{1}{\sqrt{1-k^2\sin^2\theta}}\,d\theta"
                />
                <p>
                    ただし、<InlineMath math="g" /> は重力加速度であり、<InlineMath math="k = \sin(\alpha/2)" /> とおいた。振幅が十分に小さい（<InlineMath math="\alpha \approx 0" />）ときは <InlineMath math="k \approx 0" /> とみなせ、積分は <InlineMath math="\pi/2" /> に近似されるため、よく知られた小振幅近似 <InlineMath math="T \approx 2\pi\sqrt{l/g}" /> が得られる。
                </p>
            </ContentBox>

            <p>
                この Example 1.1-3 で現れた積分もまた、有限回の初等関数の組み合わせでは書き表すことができません。単振り子の厳密な解析を行うためには、新しい関数のクラスを導入することが不可欠となります。
            </p>

            <ContentBox type="remark" title="初等関数による積分の限界">
                <p>
                    ある関数の不定積分が初等関数で表せるかどうかという問題は、19世紀にリウヴィルによって代数的に定式化されました（リウヴィルの微分拡大理論）。この理論によれば、積分 <InlineMath math="\int R(x, \sqrt{P(x)})\,dx" /> において多項式 <InlineMath math="P(x)" /> が3次以上で重根を持たない場合、その積分は一般に初等関数の枠組みに収まらない（初等関数で閉じない）ことが数学的に証明されています。
                </p>
            </ContentBox>

            <p>
                次節では、この初等関数では表せない積分たちを組織的に調べるために、ルジャンドルが行った積分の標準化（正規形への還元）について学んでいきます。
            </p>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>楕円の弧長やレムニスケートの弧長の計算からは、初等関数で表せない積分が現れる。</li>
                    <li>単振り子の厳密な周期を求める際にも同様の積分が現れ、小振幅近似を超えた解析には新しい関数が必要となる。</li>
                    <li>一般に <InlineMath math="\sqrt{P(x)}" />（<InlineMath math="P" /> は重根を持たない3次または4次多項式）を含む有理関数の積分を楕円積分と呼び、これらは初等関数で閉じないことが証明されている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
