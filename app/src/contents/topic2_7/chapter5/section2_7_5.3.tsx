import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RSAApplication() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数論はかつて「最も実用から遠い純粋数学」と呼ばれていました。しかし、1970年代に発明された <strong>RSA 暗号</strong> はその評価を一変させました。
                現代のインターネット通信の安全性を守っているのは、まさにフェルマーの小定理と「素因数分解の困難さ」という数論の性質なのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">RSA 暗号のアルゴリズム</h2>

            <p>
                RSA 暗号は、公開鍵と秘密鍵という 2 つの鍵を使い、安全な情報交換を実現します。
            </p>

            <ContentBox type="remark" title="RSA 暗号の手順">
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        <strong>準備</strong>： 2 つの巨大な素数 <InlineMath math="p, q" /> を選び、 <InlineMath math="n = pq" /> とする。また、 <InlineMath math="\phi(n) = (p-1)(q-1)" /> を計算する。
                    </li>
                    <li>
                        <strong>公開鍵の生成</strong>： <InlineMath math="\phi(n)" /> と互いに素な整数 <InlineMath math="e" /> を選ぶ。 <InlineMath math="(e, n)" /> が公開鍵となる。
                    </li>
                    <li>
                        <strong>秘密鍵の生成</strong>： <InlineMath math="ed \equiv 1 \pmod{\phi(n)}" /> を満たす <InlineMath math="d" /> を拡張ユークリッド法で求める。 <InlineMath math="d" /> が秘密鍵となる。
                    </li>
                    <li>
                        <strong>暗号化</strong>： 送りたいメッセージ（整数）を <InlineMath math="M" /> とすると、暗号文 <InlineMath math="C = M^e \pmod{n}" /> を送信する。
                    </li>
                    <li>
                        <strong>復号</strong>： 受信者は秘密鍵を用いて <InlineMath math="M' = C^d \pmod{n}" /> を計算する。
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正当性の証明とフェルマーの小定理</h2>

            <p>
                なぜ <InlineMath math="C^d" /> を計算すると元のメッセージ <InlineMath math="M" /> に戻るのでしょうか。ここにフェルマーの小定理（の一般化であるオイラーの定理、あるいは小定理そのもの）が登場します。
            </p>

            <ContentBox type="proof" title="RSA 復号の正当性">
                <p>
                    <InlineMath math="\gcd(M, n) = 1" /> と仮定する。このとき、次が成り立つ：
                    <BlockMath math="C^d = (M^e)^d = M^{ed} \pmod{n}" />
                    <InlineMath math="ed \equiv 1 \pmod{\phi(n)}" /> より、 <InlineMath math="ed = 1 + k(p-1)(q-1)" /> と書ける。
                    フェルマーの小定理より、
                    <BlockMath math="M^{p-1} \equiv 1 \pmod{p} \quad \Rightarrow \quad M^{k(p-1)(q-1)} \equiv 1 \pmod{p}" />
                    したがって、 <InlineMath math="M^{ed} \equiv M \cdot 1 = M \pmod{p}" /> 。
                    同様に <InlineMath math="M^{ed} \equiv M \pmod{q}" /> 。
                    中国剰余定理より、法 <InlineMath math="n=pq" /> においても <InlineMath math="M^{ed} \equiv M \pmod{n}" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-1 (小さな RSA の計算例)">
                <p>
                    <InlineMath math="p = 11, q = 13 \Rightarrow n = 143, \phi(n) = 120" /> とします。
                    <br />1. <InlineMath math="e = 7" /> を選びます（ <InlineMath math="\gcd(7, 120) = 1" /> ）。
                    <br />2. <InlineMath math="7d \equiv 1 \pmod{120}" /> を解くと、 <InlineMath math="d = 103" /> です（ <InlineMath math="700 + 21 = 721 = 6 \times 120 + 1" /> ）。
                    <br />3. <InlineMath math="M = 9" /> を暗号化： <InlineMath math="C = 9^7 \pmod{143} = 4782969 \pmod{143} = 48" /> 。
                    <br />4. <InlineMath math="48^{103} \pmod{143}" /> を計算（秘密鍵を使用）すると、元の 9 に戻ります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="安全性はどこにあるか">
                <p>
                    攻撃者が知ることができるのは公開鍵 <InlineMath math="(e, n)" /> だけです。秘密鍵 <InlineMath math="d" /> を計算するには <InlineMath math="\phi(n)" /> を知る必要があり、そのためには <InlineMath math="n" /> を素因数分解して <InlineMath math="p, q" /> を知る必要があります。
                    <InlineMath math="n" /> が数百桁に達すると、現在のコンピュータでは現実的な時間内に素因数分解を行うことが不可能です。これが RSA 暗号の安全性の源泉です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>RSA 暗号</strong>： 公開鍵と秘密鍵を用いた暗号通信システム。</li>
                    <li><strong>数論の役割</strong>： フェルマーの小定理が復号の数学的根拠を与えている。</li>
                    <li><strong>安全性の根拠</strong>： 巨大な数の素因数分解が（現在のところ）困難であるという事実に依存している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
