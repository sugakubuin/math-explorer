# 2-7: 整数論I

**前提科目:** 高校数学

---

## Chapter 1: 整除性
**テーマ:** 最大公約数、最小公倍数、ユークリッドの互除法

### §1.1 整除の定義と基本性質
**内容:** 整除の定義とその推移性や線形性などの基本性質

- **1. 整数の整除**
  - Definition 1.1-1（整除：整数 $a, b$ に対し、ある整数 $k$ が存在して $b = ka$ が成り立つとき $a$ は $b$ を割り切るといい $a \mid b$ と書く；このとき $a$ を $b$ の約数という）
  - Remark（$a \mid 0$ はすべての整数 $a \neq 0$ に対して成立する。また $1 \mid b$ もすべての整数 $b$ について成立する）

- **2. 整除の基本性質**
  - Proposition 1.1-1（整除の推移性：$a \mid b$ かつ $b \mid c$ ならば $a \mid c$）
  - Proposition 1.1-2（整除の線形性：$a \mid b$ かつ $a \mid c$ ならば、任意の整数 $m, n$ に対して $a \mid (mb + nc)$）
  - Example 1.1-1（$6 \mid 24$ かつ $24 \mid 120$ ならば $6 \mid 120$ の確認；$6 \mid 18$ かつ $6 \mid 42$ ならば $6 \mid (3 \cdot 18 - 42) = 12$ の確認）

- **3. 整除と大小関係**
  - Proposition 1.1-3（$a \mid b$ かつ $b \mid a$ かつ $a, b > 0$ ならば $a = b$）
  - Remark（負の整数も含めると $a \mid b$ かつ $b \mid a$ ならば $b = \pm a$；これは整数の整除関係が反対称律を「符号を除いて」満たすことを示す）

### §1.2 最大公約数の定義と性質
**内容:** 最大公約数の定義と最小公倍数との関係

- **1. 最大公約数**
  - Definition 1.2-1（最大公約数（gcd）：整数 $a, b$（少なくとも一方は $0$ でない）の最大公約数 $\gcd(a, b)$ とは、$a$ と $b$ の両方を割り切る正整数のうち最大のもの）
  - Example 1.2-1（$\gcd(48, 36)$：$48$ の正の約数は $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$、$36$ の正の約数は $1, 2, 3, 4, 6, 9, 12, 18, 36$；共通するものの最大値は $12$；よって $\gcd(48, 36) = 12$）

- **2. 最小公倍数**
  - Definition 1.2-2（最小公倍数（lcm）：整数 $a, b$ の最小公倍数 $\text{lcm}(a, b)$ とは、$a$ と $b$ の両方で割り切られる正整数のうち最小のもの）
  - Theorem 1.2-1（最大公約数と最小公倍数の関係：$a, b > 0$ のとき $\gcd(a, b) \cdot \text{lcm}(a, b) = ab$）
  - Example 1.2-2（$a = 12$、$b = 18$；$\gcd(12,18) = 6$、$\text{lcm}(12,18) = 36$；$6 \times 36 = 216 = 12 \times 18$ の確認）

- **3. gcd の多変数への拡張**
  - Definition 1.2-3（$n$ 個の整数 $a_1, \ldots, a_n$ の最大公約数 $\gcd(a_1, \ldots, a_n)$；帰納的に $\gcd(a_1, \ldots, a_n) = \gcd(\gcd(a_1, \ldots, a_{n-1}), a_n)$ で定義できる）

### §1.3 ユークリッドの互除法
**内容:** 除算の原理を用いた最大公約数を求めるアルゴリズムとその証明

- **1. 整数の除算**
  - Theorem 1.3-1（除算の原理（割り算の基本定理）：整数 $a$ と正整数 $b$ に対し、$a = bq + r$（$0 \leq r < b$）を満たす整数 $q$（商）と $r$（余り）が一意に存在する）
  - Example 1.3-1（$a = 47$、$b = 13$；$47 = 13 \times 3 + 8$；$q = 3$、$r = 8$）

- **2. ユークリッドの互除法**
  - Lemma 1.3-1（互除法の基本補題：$a = bq + r$ のとき $\gcd(a, b) = \gcd(b, r)$）
  - Theorem 1.3-2（ユークリッドの互除法：$a > b > 0$ とする。$r_0 = a$、$r_1 = b$ として $r_{k-1} = r_k q_k + r_{k+1}$（$0 \leq r_{k+1} < r_k$）を繰り返すと有限ステップで $r_{n+1} = 0$ となり、このとき $\gcd(a, b) = r_n$）
  - Example 1.3-2（$\gcd(252, 105)$ の計算：$252 = 105 \times 2 + 42$、$105 = 42 \times 2 + 21$、$42 = 21 \times 2 + 0$；よって $\gcd(252, 105) = 21$）

### §1.4 互除法の計算量と応用
**内容:** フィボナッチ数列を用いた最悪計算量の評価と実装

- **1. 計算量の評価**
  - Theorem 1.4-1（ラメの定理：$\gcd(a, b)$（$a > b > 0$）を求めるユークリッドの互除法のステップ数は $b$ の十進桁数を $d$ として高々 $5d$ 回以下である）
  - Proposition 1.4-1（最悪ケースはフィボナッチ数のとき：$a = F_{n+1}$、$b = F_n$（フィボナッチ数列）のとき互除法は $n-1$ ステップ要し、これが同じ桁数の入力に対する最大ステップ数を与える）
  - Example 1.4-1（$\gcd(F_6, F_5) = \gcd(8, 5)$；$8 = 5 \times 1 + 3$、$5 = 3 \times 1 + 2$、$3 = 2 \times 1 + 1$、$2 = 1 \times 2 + 0$；4ステップで $\gcd = 1$）

- **2. 互除法の実装イメージ**
  - Remark（擬似コードによる互除法の実装：`while b != 0: a, b = b, a mod b; return a`；再帰的定義と反復的実装の等価性）


---

## Chapter 2: ベズーの等式
**テーマ:** 1次不定方程式

### §2.1 ベズーの等式の証明
**内容:** 最大公約数を表す線形結合の存在と拡張ユークリッド法

- **1. ベズーの等式**
  - Theorem 2.1-1（ベズーの等式：整数 $a, b$（少なくとも一方は $0$ でない）に対し、$\gcd(a, b) = ax + by$ を満たす整数 $x, y$ が存在する）
  - Remark（ベズーの等式は $\gcd(a,b)$ が $a$ と $b$ の整数係数線形結合として表せることを主張するが、その $x, y$ は一般に一意でない）
  - Example 2.1-1（$\gcd(252, 105) = 21$；逆算により $21 = 252 \times 1 + 105 \times (-2)$；すなわち $x = 1$、$y = -2$）

- **2. 証明（互除法の逆算）**
  - Remark（証明の方針：ユークリッドの互除法の各ステップを逆向きに辿り、各余りを $a$ と $b$ の線形結合として書き直すことで $\gcd(a,b)$ の線形結合表示を構成する）
  - Example 2.1-2（$\gcd(35, 13)$ の逆算：$35 = 13 \times 2 + 9$、$13 = 9 \times 1 + 4$、$9 = 4 \times 2 + 1$、$4 = 1 \times 4 + 0$；逆算して $1 = 9 - 4 \times 2 = 9 - (13 - 9) \times 2 = 9 \times 3 - 13 = (35 - 13 \times 2) \times 3 - 13 = 35 \times 3 - 13 \times 7$；よって $x = 3$、$y = -7$）

### §2.2 1次不定方程式の解全体
**内容:** 1次不定方程式の整数解の存在条件と解全体の記述

- **1. 解の存在条件**
  - Theorem 2.2-1（1次不定方程式の可解性：整数係数方程式 $ax + by = c$ が整数解を持つための必要十分条件は $\gcd(a, b) \mid c$）
  - Example 2.2-1（$6x + 10y = 15$；$\gcd(6,10) = 2$ は $15$ を割り切らないので解なし）
  - Example 2.2-2（$6x + 10y = 8$；$\gcd(6,10) = 2 \mid 8$ なので解が存在する；$\gcd(3,5) = 1$ の関係を使い $3x + 5y = 4$ を解く）

- **2. 解全体の記述**
  - Theorem 2.2-2（解全体の構造：$ax + by = c$ の特殊解 $(x_0, y_0)$ が得られたとき、一般解は $x = x_0 + \dfrac{b}{d}t$、$y = y_0 - \dfrac{a}{d}t$（$d = \gcd(a,b)$、$t \in \mathbb{Z}$））
  - Example 2.2-3（$21x + 35y = 14$；$\gcd(21,35) = 7$；$3x + 5y = 2$ の特殊解 $(x_0, y_0) = (4, -2)$；一般解 $x = 4 + 5t$、$y = -2 - 3t$（$t \in \mathbb{Z}$））

### §2.3 拡張ユークリッド法のアルゴリズム
**内容:** ベズー係数を求める具体的な計算手順

- **1. 拡張ユークリッド法**
  - Definition 2.3-1（拡張ユークリッド法：通常の互除法に加え、各ステップで現在の余りを $a, b$ の線形結合として保持しながら進めるアルゴリズム；$r_k = s_k a + t_k b$ の形を維持する）
  - Example 2.3-1（$\gcd(99, 78)$ の拡張ユークリッド法：各行に $(r_k, s_k, t_k)$ を並べた表形式の計算；$99 = 99 \times 1 + 78 \times 0$、$78 = 99 \times 0 + 78 \times 1$、以降順次更新し最終的に $\gcd = 3 = 99 \times (-7) + 78 \times 9$ を得る）

- **2. 剰余逆元の計算**
  - Corollary 2.3-1（$\gcd(a, m) = 1$ ならば、拡張ユークリッド法により $ax \equiv 1 \pmod{m}$ の解 $x$（$a$ の mod $m$ 逆元）を求めることができる）
  - Example 2.3-2（$7x \equiv 1 \pmod{15}$ の解：拡張ユークリッド法で $\gcd(7,15) = 1 = 7 \times 13 + 15 \times (-6)$ を得るので $x \equiv 13 \pmod{15}$；確認 $7 \times 13 = 91 = 15 \times 6 + 1$）

### §2.4 互いに素な整数の性質
**内容:** 互いに素である場合の特別な性質とベズー等式の応用

- **1. 互いに素の定義**
  - Definition 2.4-1（互いに素：$\gcd(a, b) = 1$ のとき $a$ と $b$ は互いに素であるという）

- **2. 互いに素な整数の特徴づけ**
  - Theorem 2.4-1（$a$ と $b$ が互いに素 $\Leftrightarrow$ ある整数 $x, y$ に対して $ax + by = 1$；これはベズーの等式の $d = 1$ の場合）
  - Proposition 2.4-1（$a \mid bc$ かつ $\gcd(a, b) = 1$ ならば $a \mid c$（ユークリッドの補題））
  - Example 2.4-1（$7 \mid 3 \times 14$ かつ $\gcd(7, 3) = 1$ なので $7 \mid 14$；一方 $6 \mid 4 \times 9 = 36$ だが $\gcd(6, 4) = 2 \neq 1$ なので $6 \nmid 9$；互いに素の仮定が不可欠であることの確認）
  - Proposition 2.4-2（$\gcd(a, b) = 1$ かつ $\gcd(a, c) = 1$ ならば $\gcd(a, bc) = 1$）


---

## Chapter 3: 素数
**テーマ:** 素数の無限性、素因数分解の一意性、エラトステネスの篩

### §3.1 素数の定義と基本性質
**内容:** 素数と合成数の定義、素数が積を割り切る性質

- **1. 素数の定義**
  - Definition 3.1-1（素数：$p \geq 2$ であって、正の約数が $1$ と $p$ のみである整数；$1$ は素数でも合成数でもない）
  - Definition 3.1-2（合成数：$n \geq 2$ であって素数でない整数；すなわち $1 < a < n$ となる約数 $a$ を持つ整数）
  - Example 3.1-1（$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31$ は素数；$4 = 2^2$、$6 = 2 \times 3$、$15 = 3 \times 5$ は合成数）

- **2. 素数に関する基本命題**
  - Proposition 3.1-1（$2$ 以上のすべての整数は素因数を持つ：$n \geq 2$ の最小の約数（$1$ を除く）は素数である）
  - Theorem 3.1-1（素数の積への割り切り性：素数 $p$ が積 $ab$ を割り切るならば、$p \mid a$ または $p \mid b$）
  - Remark（Theorem 3.1-1 の証明はユークリッドの補題 $\gcd(p, a) = 1 \Rightarrow p \mid b$ を用いる；これが「素数」と「既約元」の区別に関わる重要な性質である）

### §3.2 算術の基本定理
**内容:** 素因数分解の存在と一意性の証明

- **1. 素因数分解の存在**
  - Theorem 3.2-1（素因数分解の存在：$n \geq 2$ のすべての整数は素数の積として表せる；$n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}$（$p_1 < p_2 < \cdots < p_k$ は素数、$e_i \geq 1$））
  - Remark（証明は強い数学的帰納法による；$n$ が素数ならばそれ自身が素因数分解；合成数ならば $n = ab$（$1 < a, b < n$）と分解し帰納法を適用する）

- **2. 素因数分解の一意性（算術の基本定理）**
  - Theorem 3.2-2（算術の基本定理（素因数分解の一意性）：$n \geq 2$ の素因数分解は順序を除いて一意である）
  - Remark（証明の核心は §3.1 の Theorem 3.1-1（素数の積への割り切り性）である；一意性がなければ $\gcd$ や $\text{lcm}$ の計算が不定になる）
  - Example 3.2-1（$360 = 2^3 \times 3^2 \times 5$；$\gcd(360, 504)$ を素因数分解 $504 = 2^3 \times 3^2 \times 7$ から計算：各素数の指数の最小値を取り $\gcd = 2^3 \times 3^2 = 72$；$\text{lcm} = 2^3 \times 3^2 \times 5 \times 7 = 2520$）

### §3.3 素数の無限性
**内容:** ユークリッドの証明やディリクレの算術級数定理の紹介

- **1. 素数は無限に多い**
  - Theorem 3.3-1（素数の無限性：素数は無限に多く存在する）
  - Remark（ユークリッドの証明（背理法）：有限個の素数 $p_1, \ldots, p_k$ のみが存在すると仮定し $N = p_1 p_2 \cdots p_k + 1$ を考えると、$N$ のいかなる素因数も $p_1, \ldots, p_k$ に等しくない——矛盾）
  - Example 3.3-1（$p_1 = 2$、$p_2 = 3$、$p_3 = 5$ のとき $N = 31$（素数）；$p_1 = 2$、$p_2 = 3$、$p_3 = 5$、$p_4 = 7$ のとき $N = 211$（素数）；$N$ 自身が常に素数になるわけではないことの確認：$2 \times 3 \times 5 \times 7 \times 11 \times 13 + 1 = 30031 = 59 \times 509$）

- **2. ディリクレの算術級数定理（紹介）**
  - Theorem 3.3-2（ディリクレの算術級数定理（主張のみ）：$\gcd(a, d) = 1$ のとき、等差数列 $a, a+d, a+2d, \ldots$ の中に無限個の素数が含まれる）
  - Remark（例：$a = 1$、$d = 4$ のとき $5, 13, 17, 29, 37, 41, \ldots$（$4k + 1$ 型素数）が無限に存在する；この定理の証明にはディリクレ指標と $L$ 関数が必要であり、解析的数論（5-6）へ続く）

### §3.4 エラトステネスの篩と素数分布
**内容:** 素数を列挙するアルゴリズムと素数定理の紹介

- **1. エラトステネスの篩**
  - Definition 3.4-1（エラトステネスの篩：$2$ から $n$ までの整数のうち素数をすべて列挙するアルゴリズム；$2$ から始めて各素数 $p$ の倍数を順に消去し残ったものが素数）
  - Remark（計算量：$n$ 以下の合成数の削除に要するステップ数は $O(n \log \log n)$；$\sqrt{n}$ 以下の素数の倍数だけ消せばよい）
  - Example 3.4-1（$2$ から $30$ までの素数の篩による列挙：$2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ の11個）

- **2. 素数定理（紹介）**
  - Definition 3.4-2（素数計数関数：$\pi(n)$ を $n$ 以下の素数の個数とする）
  - Theorem 3.4-1（素数定理（主張のみ）：$\pi(n) \sim \dfrac{n}{\ln n}$（$n \to \infty$）；より精密には $\pi(n) \sim \text{Li}(n) = \displaystyle\int_2^n \frac{dt}{\ln t}$）
  - Example 3.4-2（$\pi(100) = 25$（実際の値）；素数定理の近似 $100/\ln 100 \approx 21.7$；対数積分の近似 $\text{Li}(100) \approx 29.1$；$\text{Li}$ の方が $n/\ln n$ より精度が高いことの確認）


---

## Chapter 4: 合同式
**テーマ:** 合同算術、合同式の演算

### §4.1 合同の定義と計算規則
**内容:** 合同の定義と和・積・べき乗の演算規則

- **1. 合同の定義**
  - Definition 4.1-1（合同：整数 $a, b$ と正整数 $m$ に対し $m \mid (a - b)$ のとき $a$ は $b$ に mod $m$ で合同であるといい $a \equiv b \pmod{m}$ と書く）
  - Remark（合同は同値関係をなす：反射律 $a \equiv a$；対称律 $a \equiv b \Rightarrow b \equiv a$；推移律 $a \equiv b$、$b \equiv c$ ならば $a \equiv c$）
  - Example 4.1-1（$17 \equiv 5 \pmod{6}$（$17 - 5 = 12 = 6 \times 2$）；$-3 \equiv 9 \pmod{6}$（$-3 - 9 = -12 = 6 \times (-2)$））

- **2. 合同の演算規則**
  - Theorem 4.1-1（合同の加減乗算：$a \equiv a' \pmod{m}$ かつ $b \equiv b' \pmod{m}$ ならば $a \pm b \equiv a' \pm b' \pmod{m}$；$ab \equiv a'b' \pmod{m}$）
  - Corollary 4.1-1（べき乗の合同：$a \equiv b \pmod{m}$ ならば $a^n \equiv b^n \pmod{m}$（$n \geq 0$））
  - Example 4.1-2（$13^{10} \pmod{7}$；$13 \equiv 6 \equiv -1 \pmod{7}$ なので $13^{10} \equiv (-1)^{10} = 1 \pmod{7}$；大きなべき乗の計算が合同式で簡略化される）

- **3. 割り算の注意**
  - Proposition 4.1-1（合同式の割り算：$ac \equiv bc \pmod{m}$ かつ $\gcd(c, m) = d$ ならば $a \equiv b \pmod{m/d}$；特に $\gcd(c, m) = 1$ ならば $a \equiv b \pmod{m}$）
  - Example 4.1-3（$6 \equiv 18 \pmod{12}$；両辺を $6$ で割ると $1 \equiv 3 \pmod{2}$（$m/d = 12/6 = 2$）；$\gcd(6,12) = 6 \neq 1$ なので mod $12$ で割れない）

### §4.2 剰余類と環構造
**内容:** 剰余類の概念と加法・乗法における代数構造

- **1. 剰余類の定義**
  - Definition 4.2-1（剰余類：整数 $a$ の mod $m$ 剰余類 $\overline{a} = \{a + km \mid k \in \mathbb{Z}\}$；$\mathbb{Z}$ は $m$ 個の剰余類 $\overline{0}, \overline{1}, \ldots, \overline{m-1}$ に分割される）
  - Definition 4.2-2（剰余環：$\mathbb{Z}/m\mathbb{Z} = \{\overline{0}, \overline{1}, \ldots, \overline{m-1}\}$ に加法 $\overline{a} + \overline{b} = \overline{a+b}$、乗法 $\overline{a} \cdot \overline{b} = \overline{ab}$ を定めた代数系；これは環（代数学の用語）をなす）

- **2. 環構造の具体例**
  - Example 4.2-1（$\mathbb{Z}/5\mathbb{Z}$ の加法表・乗法表の作成；$\overline{3} + \overline{4} = \overline{2}$、$\overline{3} \times \overline{4} = \overline{2}$ の確認）
  - Example 4.2-2（$\mathbb{Z}/6\mathbb{Z}$ において $\overline{2} \times \overline{3} = \overline{0}$；$\overline{2} \neq \overline{0}$ かつ $\overline{3} \neq \overline{0}$ だが積が $\overline{0}$ になる（零因子の存在）；$6$ が合成数であることとの関係）

### §4.3 逆元の存在条件
**内容:** モジュロ演算における逆元の存在条件と計算方法

- **1. 逆元の定義と存在条件**
  - Definition 4.3-1（乗法逆元：$\overline{a} \in \mathbb{Z}/m\mathbb{Z}$ の逆元とは $\overline{a} \cdot \overline{x} = \overline{1}$ を満たす $\overline{x}$；$a^{-1} \pmod{m}$ とも書く）
  - Theorem 4.3-1（逆元の存在条件：$\overline{a}$ が $\mathbb{Z}/m\mathbb{Z}$ において逆元を持つ $\Leftrightarrow$ $\gcd(a, m) = 1$）
  - Remark（$m$ が素数のとき、$\overline{0}$ 以外のすべての元が逆元を持つ。これは $\mathbb{Z}/p\mathbb{Z}$ が体（field）をなすことを意味し、有限体 $\mathbb{F}_p$ とも書く）

- **2. 逆元の具体的計算**
  - Example 4.3-1（$\mathbb{Z}/7\mathbb{Z}$ の乗法逆元：$\overline{1}^{-1} = \overline{1}$、$\overline{2}^{-1} = \overline{4}$（$2 \times 4 = 8 \equiv 1$）、$\overline{3}^{-1} = \overline{5}$、$\overline{4}^{-1} = \overline{2}$、$\overline{5}^{-1} = \overline{3}$、$\overline{6}^{-1} = \overline{6}$（$6 \times 6 = 36 \equiv 1$）の一覧）
  - Example 4.3-2（$\mathbb{Z}/8\mathbb{Z}$ では $\overline{2}$, $\overline{4}$, $\overline{6}$ は逆元を持たない（$\gcd(2,8) = 2 \neq 1$ など）；逆元を持つのは $\overline{1}, \overline{3}, \overline{5}, \overline{7}$ のみ）

### §4.4 1次合同方程式の解法
**内容:** 合同方程式の解の存在条件と解の個数の決定

- **1. 1次合同方程式**
  - Definition 4.4-1（1次合同方程式：$ax \equiv b \pmod{m}$（$a, b, m \in \mathbb{Z}$、$m > 0$）を未知数 $x$ について解く問題）
  - Theorem 4.4-1（1次合同方程式の可解性：$ax \equiv b \pmod{m}$ が解を持つ $\Leftrightarrow$ $\gcd(a, m) \mid b$；解は mod $m$ で $\gcd(a, m)$ 個だけ存在する）
  - Example 4.4-1（$3x \equiv 6 \pmod{9}$；$\gcd(3,9) = 3 \mid 6$ なので解あり；$x \equiv 2 \pmod{3}$（mod $9$ で $3$ 個）；解は $x \equiv 2, 5, 8 \pmod{9}$）
  - Example 4.4-2（$4x \equiv 3 \pmod{6}$；$\gcd(4,6) = 2$、$2 \nmid 3$ なので解なし）

- **2. 中国剰余定理**
  - Theorem 4.4-2（中国剰余定理（CRT）：$m_1, \ldots, m_k$ が互いに素な正整数のとき、連立合同方程式 $x \equiv a_1 \pmod{m_1}$、…、$x \equiv a_k \pmod{m_k}$ は mod $M = m_1 \cdots m_k$ で一意な解を持つ）
  - Example 4.4-3（$x \equiv 2 \pmod{3}$、$x \equiv 3 \pmod{5}$、$x \equiv 2 \pmod{7}$；$M = 105$；$M_1 = 35$、$M_2 = 21$、$M_3 = 15$ とし各逆元を求めて合成：$x \equiv 2 \times 35 \times 2 + 3 \times 21 \times 1 + 2 \times 15 \times 1 \equiv 233 \equiv 23 \pmod{105}$）
  - Remark（CRT の応用：大きな整数の演算を小さな法での演算に分解して並列化できる（コンピュータ演算への応用）；中国の古典『孫子算経』に由来するアルゴリズム）


---

## Chapter 5: フェルマーの小定理
**テーマ:** 証明と応用

### §5.1 定理の主張と証明
**内容:** フェルマーの小定理の主張とその基本的な証明

- **1. フェルマーの小定理**
  - Theorem 5.1-1（フェルマーの小定理：素数 $p$ と $\gcd(a, p) = 1$ なる整数 $a$ に対して $a^{p-1} \equiv 1 \pmod{p}$；同値な形として $a^p \equiv a \pmod{p}$ はすべての整数 $a$ について成立）
  - Example 5.1-1（$a = 3$、$p = 7$；$3^6 = 729 = 7 \times 104 + 1 \equiv 1 \pmod 7$；$a = 5$、$p = 11$；$5^{10} = 9765625$；$9765625 / 11 = 887784 \cdots 1$、よって $5^{10} \equiv 1 \pmod{11}$）

- **2. 証明（2通り）**
  - Remark（証明1：集合 $\{a, 2a, 3a, \ldots, (p-1)a\}$ は mod $p$ で $\{1, 2, \ldots, p-1\}$ の置換をなすことを示し、積を比較する；$(p-1)! \cdot a^{p-1} \equiv (p-1)! \pmod{p}$、$\gcd((p-1)!, p) = 1$ なので両辺 $(p-1)!$ で割れる）
  - Remark（証明2（二項定理によるもの）：$(a+1)^p \equiv a^p + 1 \pmod{p}$（$p$ が素数のとき $\binom{p}{k} \equiv 0 \pmod{p}$（$1 \leq k \leq p-1$））を用いた帰納法）

### §5.2 ウィルソンの定理
**内容:** ウィルソンの定理の主張と素数判定への応用

- **1. ウィルソンの定理**
  - Theorem 5.2-1（ウィルソンの定理：$p$ が素数 $\Leftrightarrow$ $(p-1)! \equiv -1 \pmod{p}$）
  - Example 5.2-1（$p = 5$；$4! = 24 = 5 \times 5 - 1 \equiv -1 \pmod{5}$；$p = 7$；$6! = 720 = 7 \times 103 - 1 \equiv -1 \pmod{7}$；$p = 11$；$10! = 3628800 \equiv -1 \pmod{11}$ の確認）
  - Remark（素数判定法としての限界：$(p-1)!$ を実際に計算するのは $p$ が大きい場合に現実的でない；ウィルソンの定理は理論的重要性が高いが実用的な素数判定には使われない）

### §5.3 フェルマーの小定理と RSA 暗号への応用
**内容:** RSA 暗号の仕組みにおける基礎定理の役割

- **1. RSA 暗号の原理（概説）**
  - Remark（RSA 暗号の骨格：大きな素数 $p, q$ を選び $n = pq$ とする；$\phi(n) = (p-1)(q-1)$ と互いに素な $e$ を選び、$ed \equiv 1 \pmod{\phi(n)}$ を満たす $d$ を求める；暗号化 $C \equiv M^e \pmod{n}$、復号 $M \equiv C^d \pmod{n}$）
  - Theorem 5.3-1（RSA 復号の正当性：$\gcd(M, n) = 1$ のとき $C^d = M^{ed} = M^{1 + k\phi(n)} \equiv M \pmod{n}$；フェルマーの小定理（またはその一般化であるオイラーの定理）が鍵となる）
  - Example 5.3-1（小さな RSA の例：$p = 11$、$q = 13$、$n = 143$、$\phi(n) = 120$；$e = 7$（$\gcd(7,120) = 1$）；拡張ユークリッド法で $d = 103$（$7 \times 103 = 721 = 6 \times 120 + 1$）；$M = 9$ の暗号化 $C = 9^7 \pmod{143}$、復号 $C^{103} \pmod{143}$）

### §5.4 べき乗の高速計算
**内容:** 反復自乗法と合同式を用いた効率的なべき乗計算

- **1. 反復自乗法（バイナリ法）**
  - Definition 5.4-1（反復自乗法：$a^n \pmod{m}$ を計算する際、$n$ の二進数表示 $n = \sum_{i} b_i 2^i$ を使い $a, a^2, a^4, a^8, \ldots$ を順次二乗しながら $b_i = 1$ の項を掛け合わせる手法）
  - Theorem 5.4-1（反復自乗法の計算量：$a^n \pmod{m}$ の計算に要する乗算回数は $O(\log n)$ 回で済む（単純な繰り返し乗算の $O(n)$ 回と比べて指数的に速い））
  - Example 5.4-1（$3^{19} \pmod{7}$ の計算；$19 = 10011_2$；$3^1 = 3$、$3^2 = 9 \equiv 2$、$3^4 \equiv 4$、$3^8 \equiv 2$、$3^{16} \equiv 4$；$3^{19} = 3^{16} \times 3^2 \times 3^1 \equiv 4 \times 2 \times 3 = 24 \equiv 3 \pmod 7$；計算ステップの削減の確認）
  - Example 5.4-2（RSA 暗号の文脈での応用：$n$ が1000桁の整数であっても $O(\log n) \approx 3000$ 回程度の乗算で $a^n \pmod{m}$ が計算できることの重要性）


---

## Chapter 6: オイラーの関数
**テーマ:** $\varphi(n)$ の性質、オイラーの定理

### §6.1 $\varphi(n)$ の定義と計算公式
**内容:** オイラーのトーティエント関数 $\varphi(n)$ の定義と素数べきでの公式

- **1. オイラーのトーティエント関数**
  - Definition 6.1-1（オイラーのトーティエント関数：$\varphi(n)$ を $1 \leq k \leq n$ かつ $\gcd(k, n) = 1$ を満たす整数 $k$ の個数とする）
  - Example 6.1-1（$\varphi(1) = 1$；$\varphi(2) = 1$；$\varphi(6) = 2$（$k = 1, 5$）；$\varphi(7) = 6$（$k = 1,2,3,4,5,6$；$7$ は素数）；$\varphi(12) = 4$（$k = 1, 5, 7, 11$））

- **2. 素数べきの場合の公式**
  - Theorem 6.1-1（素数べきの $\varphi$：素数 $p$ と $k \geq 1$ に対して $\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)$）
  - Remark（証明：$1$ から $p^k$ のうち $p$ の倍数の個数は $p^{k-1}$ 個；それ以外が $p$ と互いに素）
  - Example 6.1-2（$\varphi(8) = \varphi(2^3) = 2^2 \times 1 = 4$；$\varphi(27) = \varphi(3^3) = 3^2 \times 2 = 18$；$\varphi(25) = \varphi(5^2) = 5 \times 4 = 20$）

### §6.2 $\varphi$ の乗法性
**内容:** 互いに素な整数に対する乗法性の証明

- **1. 乗法性**
  - Theorem 6.2-1（$\varphi$ の乗法性：$\gcd(m, n) = 1$ ならば $\varphi(mn) = \varphi(m)\varphi(n)$）
  - Remark（証明：中国剰余定理により $\mathbb{Z}/mn\mathbb{Z} \cong \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}$（環の同型）；この同型が乗法的可逆元の集合を対応させることから従う）

- **2. 一般の $n$ の計算公式**
  - Corollary 6.2-1（$\varphi$ の一般公式：$n = p_1^{e_1} \cdots p_k^{e_k}$ のとき $\varphi(n) = n\displaystyle\prod_{p \mid n}\!\!\left(1 - \frac{1}{p}\right) = \prod_{i=1}^k p_i^{e_i - 1}(p_i - 1)$）
  - Example 6.2-1（$\varphi(360)$；$360 = 2^3 \times 3^2 \times 5$；$\varphi(360) = 360 \times \dfrac{1}{2} \times \dfrac{2}{3} \times \dfrac{4}{5} = 96$；RSA 暗号で $n = pq$ の場合 $\varphi(n) = (p-1)(q-1) = pq - p - q + 1$ の特別な簡単さの確認）

### §6.3 オイラーの定理
**内容:** フェルマーの小定理の一般化としてのオイラーの定理とその証明

- **1. オイラーの定理**
  - Theorem 6.3-1（オイラーの定理：$\gcd(a, m) = 1$ ならば $a^{\varphi(m)} \equiv 1 \pmod{m}$）
  - Remark（フェルマーの小定理は $m = p$（素数）の特別な場合；$\varphi(p) = p - 1$ だから $a^{p-1} \equiv 1 \pmod{p}$ が再現される）
  - Remark（証明の方針：$\gcd(a,m) = 1$ のとき、$\{a \cdot r \pmod{m} \mid r \in (\mathbb{Z}/m\mathbb{Z})^\times\}$ は $(\mathbb{Z}/m\mathbb{Z})^\times$ と一致する；その元の積を両辺で比較する（フェルマーの小定理と同様の議論））

- **2. 応用例**
  - Example 6.3-1（$\gcd(5, 12) = 1$；$\varphi(12) = 4$；$5^4 = 625 = 52 \times 12 + 1 \equiv 1 \pmod{12}$ の確認）
  - Example 6.3-2（$2^{100} \pmod{35}$；$\gcd(2,35) = 1$、$\varphi(35) = \varphi(5)\varphi(7) = 4 \times 6 = 24$；$100 = 4 \times 24 + 4$；$2^{100} = (2^{24})^4 \times 2^4 \equiv 1^4 \times 16 = 16 \pmod{35}$）

### §6.4 $\varphi$ の合計公式と素因数分解への応用
**内容:** 約数にわたる和の公式と直接計算への応用

- **1. 約数和の公式**
  - Theorem 6.4-1（$\varphi$ の約数和：$\displaystyle\sum_{d \mid n} \varphi(d) = n$；すなわち $n$ の正の約数 $d$ にわたる $\varphi(d)$ の和は $n$ に等しい）
  - Remark（証明：分数 $\{1/n, 2/n, \ldots, n/n\}$ を既約分数 $k/d$（$d \mid n$、$\gcd(k,d) = 1$）に書き直すと、分母 $d$ を持つものの個数がちょうど $\varphi(d)$ 個になることから従う）
  - Example 6.4-1（$n = 12$；$d = 1, 2, 3, 4, 6, 12$；$\varphi(1) + \varphi(2) + \varphi(3) + \varphi(4) + \varphi(6) + \varphi(12) = 1 + 1 + 2 + 2 + 2 + 4 = 12$ の確認）

- **2. メビウス関数と素因数分解への展望**
  - Definition 6.4-1（メビウス関数：$\mu(n) = 1$（$n = 1$のとき）、$\mu(n) = (-1)^k$（$n$ が $k$ 個の相異なる素因数の積のとき）、$\mu(n) = 0$（$n$ が平方因子を持つとき））
  - Theorem 6.4-2（メビウスの反転公式：$f(n) = \displaystyle\sum_{d \mid n} g(d)$ ならば $g(n) = \displaystyle\sum_{d \mid n} \mu(n/d) f(d)$；特に $\varphi(n) = \displaystyle\sum_{d \mid n} \mu(n/d) d$ が成立する）
  - Remark（メビウス関数は解析的数論において重要な役割を果たし、リーマンのゼータ関数 $\zeta(s)$ との関係（$1/\zeta(s) = \displaystyle\sum_{n=1}^\infty \mu(n)/n^s$）を通じて素数分布の研究へと繋がる；詳細は解析的数論（5-6）で扱う）
