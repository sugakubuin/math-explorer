import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_7_Chapter5() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="5" number={1}>
          <p>
            フェルマーの小定理（Theorem 5.1-1）の主張を述べよ。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 5.1-1 より、 <b><InlineMath math="p" /> を素数、 <InlineMath math="a" /> を <InlineMath math="p" /> で割り切れない整数</b> とするとき、
              <BlockMath math="a^{p-1} \equiv 1 \pmod{p}" />
              が成り立つ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={2}>
          <p>
            ウィルソンの定理（Theorem 5.2-1）の主張を述べよ。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 5.2-1 より、 <b>整数 <InlineMath math="p > 1" /> が素数であるための必要十分条件</b> は、
              <BlockMath math="(p-1)! \equiv -1 \pmod{p}" />
              が成り立つことである。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={3}>
          <p>
            RSA 暗号において、公開鍵 <InlineMath math="(e, n)" /> から秘密鍵 <InlineMath math="d" /> を生成するための合同方程式を述べよ。（§5.3）
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="\phi(n) = (p-1)(q-1)" /> とするとき、 <b><InlineMath math="ed \equiv 1 \pmod{\phi(n)}" /></b> を満たす <InlineMath math="d" /> を拡張ユークリッド法などで求める。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="5" number={4}>
          <p>
            フェルマーの小定理を用いて、 <InlineMath math="3^{100}" /> を 7 で割った余りを計算せよ。
          </p>
          <ExerciseSolution>
            <p>
              1. 7 は素数であり、 <InlineMath math="\gcd(3, 7) = 1" /> なのでフェルマーの小定理より <InlineMath math="3^{6} \equiv 1 \pmod{7}" /> である。
              <br />
              2. 指数 100 を 6 で割ると、 <InlineMath math="100 = 6 \times 16 + 4" />。
              <br />
              3. <InlineMath math="3^{100} = (3^6)^{16} \times 3^4 \equiv 1^{16} \times 81 \pmod{7}" />。
              <br />
              4. <InlineMath math="81 / 7 = 11 \dots 4 \equiv 4 \pmod{7}" />。
              <br />
              よって、 <b>余りは 4</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={5}>
          <p>
            反復自乗法（Example 5.4-1）の手順に従い、 <InlineMath math="3^{11} \pmod{7}" /> を計算せよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="11 = 8 + 2 + 1 = (1011)_2" /> である。
              <br />
              2. 表を作って計算する：
            </p>
            <ul className="list-disc list-inside">
              <li><InlineMath math="3^{2^0} \equiv 3 \pmod{7}" /></li>
              <li><InlineMath math="3^{2^1} = 9 \equiv 2 \pmod{7}" /></li>
              <li><InlineMath math="3^{2^2} = 2^2 = 4 \pmod{7}" /></li>
              <li><InlineMath math="3^{2^3} = 4^2 = 16 \equiv 2 \pmod{7}" /></li>
            </ul>
            <p>
              3. 結果： <InlineMath math="3^{11} = 3^8 \cdot 3^2 \cdot 3^1 \equiv 2 \cdot 2 \cdot 3 = 12 \equiv 5 \pmod{7}" />。
              <br />
              よって、 <b>5</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={6}>
          <p>
            RSA 暗号のモデルケース： <InlineMath math="p = 3, q = 11" /> のとき、 <InlineMath math="n = 33, \phi(n) = 2 \times 10 = 20" /> となる。
            公開鍵 <InlineMath math="e = 3" /> を選ぶとき、秘密鍵 <InlineMath math="d" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="3d \equiv 1 \pmod{20}" /> を解く。
              <br />
              2. <InlineMath math="21 \equiv 1 \pmod{20}" /> を利用すると、 <InlineMath math="3 \times 7 = 21" /> なので <InlineMath math="d = 7" />。
              <br />
              よって、 <b>秘密鍵 <InlineMath math="d = 7" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={7}>
          <p>
            ウィルソンの定理が <InlineMath math="p=7" /> の場合に成り立つことを具体的に計算して確認せよ。
          </p>
          <ExerciseSolution>
            <p>
              <BlockMath math="(7-1)! = 6! = 6 \times 5 \times 4 \times 3 \times 2 \times 1 = 720" />
              <InlineMath math="720 / 7 = 102 \dots 6" /> であり、 <InlineMath math="6 \equiv -1 \pmod{7}" />。
              よって成り立つ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="5" number={8}>
          <p>
            <InlineMath math="a^p \equiv a \pmod{p}" /> を、数学的帰納法と二項定理を用いて証明せよ。（§5.1 証明 2）
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="a=1" /> のとき： <InlineMath math="1^p \equiv 1 \pmod{p}" /> は明らかに成り立つ。
              <br />
              2. <InlineMath math="a" /> で成り立つ、すなわち <InlineMath math="a^p \equiv a \pmod{p}" /> と仮定する。
              <br />
              3. 二項展開 <InlineMath math="(a+1)^p = a^p + \sum_{k=1}^{p-1} \binom{p}{k}a^{p-k} + 1" /> を考える。
              ここで素数 <InlineMath math="p" /> に対して <InlineMath math="\binom{p}{k} \equiv 0 \pmod{p} \ (1 \le k \le p-1)" /> なので、
              <BlockMath math="(a+1)^p \equiv a^p + 1 \pmod{p}" />
              <br />
              4. 帰納法の仮定 <InlineMath math="a^p \equiv a" /> を用いると：
              <BlockMath math="(a+1)^p \equiv a + 1 \pmod{p}" />
              となり、 <InlineMath math="a+1" /> でも成り立つ。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={9}>
          <p>
            ウィルソンの定理の逆、「 <InlineMath math="(p-1)! \equiv -1 \pmod{p}" /> ならば <InlineMath math="p" /> は素数である」ことを、
            対偶を用いて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              対偶：「 <InlineMath math="p" /> が合成数ならば、 <InlineMath math="(p-1)! \not\equiv -1 \pmod{p}" /> 」を証明する。
              <br />
              1. <InlineMath math="p" /> を合成数とする。 <InlineMath math="p = ab \ (1 < a < p, \ 1 < b < p)" /> と分解できる。
              <br />
              2. もし <InlineMath math="a \neq b" /> ならば、 <InlineMath math="a, b" /> はともに <InlineMath math="(p-1)!" /> の因子に含まれる。
              よって <InlineMath math="p = ab \mid (p-1)!" /> 、すなわち <InlineMath math="(p-1)! \equiv 0 \pmod{p}" />。
              <br />
              3. もし <InlineMath math="a = b" /> ならば、 <InlineMath math="p = a^2" /> 。 <InlineMath math="a > 2" /> のとき、 <InlineMath math="a" /> と <InlineMath math="2a" /> はともに <InlineMath math="a^2-1" /> 以下に含まれる（ <InlineMath math="a^2 > 2a" /> ）。
              よって <InlineMath math="2a^2 \mid (p-1)!" /> より、やはり <InlineMath math="(p-1)! \equiv 0 \pmod{p}" />。
              （ <InlineMath math="p=4" /> の場合は個別に確認すると <InlineMath math="3! = 6 \equiv 2 \not\equiv -1 \pmod{4}" /> ）
              <br />
              4. 以上より、 <InlineMath math="(p-1)!" /> は <InlineMath math="\pmod{p}" /> で -1 にはならない。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={10}>
          <p>
            RSA 暗号の正当性において、 <InlineMath math="\gcd(M, n) = d > 1" /> となるケース（メッセージが偶然素因数 <InlineMath math="p, q" /> のいずれかを含む場合）
            でも、依然として <InlineMath math="M^{ed} \equiv M \pmod{n}" /> が成り立つ理由を、法 <InlineMath math="p" /> と法 <InlineMath math="q" /> について個別に考えることで概説せよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="M" /> が <InlineMath math="p" /> の倍数であるとき、 <InlineMath math="M \equiv 0 \pmod{p}" /> である。
              よって <InlineMath math="M^{ed} \equiv 0 \equiv M \pmod{p}" /> は自明に成り立つ。
              <br />
              2. 一方、 <InlineMath math="M" /> は <InlineMath math="q" /> の倍数ではないはずである（さもなくば <InlineMath math="M" /> が <InlineMath math="n" /> の倍数となり、剰余の範囲外）。
              このときフェルマーの小定理より <InlineMath math="M^{q-1} \equiv 1 \pmod{q}" />。
              <InlineMath math="ed = 1 + k(p-1)(q-1)" /> なので、 <InlineMath math="M^{ed} = M \cdot (M^{q-1})^{k(p-1)} \equiv M \cdot 1 \equiv M \pmod{q}" />。
              <br />
              3. 以上より、 <InlineMath math="M^{ed} \equiv M" /> が <InlineMath math="\pmod{p}" /> と <InlineMath math="\pmod{q}" /> の両方で成り立つ。
              <br />
              4. 中国剰余定理により、法 <InlineMath math="n = pq" /> においても <InlineMath math="M^{ed} \equiv M \pmod{n}" /> が完全に保証される。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
