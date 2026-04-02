# 3-10: 体論I

**前提科目:** 3-9（環論）

---

## Chapter 1: 体の拡大の基本
**テーマ:** 拡大次数と代数拡大

### §1.1 拡大体と拡大次数
**内容:** ベクトル空間としての体拡大構造と連鎖律

- **1. 体の拡大の定義**
  - Definition 1.1-1 (体の拡大：体 $F$ が体 $K$ の部分体であるとき $K/F$ を体の拡大といい、$K$ を $F$ の拡大体という；$F \subset K$ はどちらも体であることを要求する)
  - Example 1.1-1 ($\mathbb{R}/\mathbb{Q}$、$\mathbb{C}/\mathbb{R}$、$\mathbb{C}/\mathbb{Q}$ はいずれも体の拡大；$\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} \mid a, b \in \mathbb{Q}\}$ は $\mathbb{Q}$ の拡大体で $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ が体の拡大)
  - Remark (環論との接続：$K$ は $F$-ベクトル空間と見なせる；体の拡大の研究は線形代数（2-1）の道具をそのまま使える)

- **2. 拡大次数と連鎖律**
  - Definition 1.1-2 (拡大次数：$K/F$ を体の拡大とするとき、$K$ の $F$-ベクトル空間としての次元 $[K : F] = \dim_F K$ を拡大次数という；有限なとき有限次拡大、無限なとき無限次拡大という)
  - Theorem 1.1-1 (連鎖律（乗法公式）：$F \subset K \subset L$ の体の塔に対して $[L : F] = [L : K][K : F]$)
  - Proof ($\{e_i\}$ を $K/F$ の基底、$\{f_j\}$ を $L/K$ の基底とすると $\{e_i f_j\}$ が $L/F$ の基底になることを確認する；線形独立性と生成性を分けて示す)
  - Example 1.1-2 ($\mathbb{C}/\mathbb{Q}$ の連鎖律：$[\mathbb{C} : \mathbb{Q}] = [\mathbb{C} : \mathbb{R}][\mathbb{R} : \mathbb{Q}] = 2 \cdot \infty = \infty$；$[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = [\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})][\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2 \cdot 2 = 4$)
  - Example 1.1-3 (連鎖律の応用：$[K : F]$ が素数ならば $F \subset K$ 以外に中間体は存在しない；$[K:F] = p$ と仮定して中間体 $E$ があれば $p = [K:E][E:F]$ より $[E:F] = 1$ または $p$ のみ)

### §1.2 代数的元と超越的元
**内容:** 代数的数と超越数の定義による拡大の分類

- **1. 代数的元・超越的元の定義**
  - Definition 1.2-1 (代数的元：$K/F$ を体の拡大、$\alpha \in K$ とする；$f(\alpha) = 0$ となる $0$ でない多項式 $f \in F[x]$ が存在するとき $\alpha$ を $F$ 上代数的であるという；そうでないとき超越的であるという)
  - Example 1.2-1 ($\sqrt{2}$ は $\mathbb{Q}$ 上代数的：$f(x) = x^2 - 2 \in \mathbb{Q}[x]$ の根；$i = \sqrt{-1}$ は $\mathbb{Q}$ 上代数的：$x^2 + 1 = 0$ の根；$\pi$ と $e$ は $\mathbb{Q}$ 上超越的（証明は高度だが事実として紹介）)
  - Example 1.2-2 ($\sqrt[3]{2}$ の代数性：$f(x) = x^3 - 2 \in \mathbb{Q}[x]$ が $\sqrt[3]{2}$ を根に持つ；$\mathbb{Q}(\sqrt[3]{2}) = \{a + b\sqrt[3]{2} + c\sqrt[3]{4} \mid a,b,c \in \mathbb{Q}\}$ の構造を確認)

- **2. 代数拡大と単拡大**
  - Definition 1.2-2 (代数拡大：$K/F$ のすべての元が $F$ 上代数的であるとき代数拡大という；有限次拡大は必ず代数拡大)
  - Theorem 1.2-1 (有限次拡大は代数拡大：$[K:F] = n < \infty$ ならば $K$ のすべての元は $F$ 上代数的)
  - Proof ($\alpha \in K$ に対して $1, \alpha, \alpha^2, \ldots, \alpha^n$ は $n+1$ 個の元で次元 $n$ の $F$-空間に属するから線形従属；線形関係式が $\alpha$ の零化多項式を与える)
  - Example 1.2-3 ($\mathbb{Q}(\pi)/\mathbb{Q}$ は代数拡大でない：$\pi$ は超越的なので $[\mathbb{Q}(\pi):\mathbb{Q}] = \infty$ かつ代数拡大でない；一方 $\mathbb{Q}(\sqrt[5]{2})/\mathbb{Q}$ は次数 5 の有限次代数拡大)

### §1.3 最小多項式
**内容:** 代数的元の基礎となる最小多項式の性質と体同型

- **1. 最小多項式の定義と性質**
  - Definition 1.3-1 (最小多項式：$F$ 上代数的な $\alpha$ の最小多項式 $\mathrm{min}_F(\alpha, x)$ とは、$\alpha$ を根にもつ $F[x]$ の最低次のモニック多項式；$\mathrm{Irr}(\alpha, F, x)$ とも書く)
  - Theorem 1.3-1 (最小多項式の特徴づけ：$\alpha \in K$ が $F$ 上代数的なとき、代入核 $\ker(\mathrm{ev}_\alpha) \subset F[x]$ は主イデアル $(m(x))$ で生成される；$m(x)$ が最小多項式であり $F[x]/(m(x)) \cong F(\alpha)$)
  - Proof ($F[x]$ は PID だから核 $I = \ker(\mathrm{ev}_\alpha)$ は主イデアル $(m)$；$m$ の最小次数性と既約性を示す；第一同型定理より $F[x]/(m) \cong F[\alpha] \subset K$；$m$ が既約なら $(m)$ が極大イデアルなので $F(\alpha)$ は体)
  - Example 1.3-1 ($\sqrt{2}$ の最小多項式：$\mathrm{min}_\mathbb{Q}(\sqrt{2}, x) = x^2 - 2$（既約性：有理根定理から $\pm 1, \pm 2$ を試すと根なし）；$\mathbb{Q}[x]/(x^2-2) \cong \mathbb{Q}(\sqrt{2})$；基底は $\{1, \sqrt{2}\}$)

- **2. 最小多項式と拡大次数**
  - Proposition 1.3-1 ($[F(\alpha) : F] = \deg \mathrm{min}_F(\alpha, x)$：$F(\alpha)$ の $F$-基底は $\{1, \alpha, \ldots, \alpha^{n-1}\}$（$n = \deg m$）)
  - Proof ($m(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_0$ に対して $\alpha^n = -a_{n-1}\alpha^{n-1} - \cdots - a_0$ と書けるので $F(\alpha) = F[\alpha]$ は $\{1, \alpha, \ldots, \alpha^{n-1}\}$ で生成される；線形独立性は $m$ の最小次数性から従う)
  - Example 1.3-2 ($\sqrt[3]{2}$ の最小多項式と次数：$\mathrm{min}_\mathbb{Q}(\sqrt[3]{2}, x) = x^3 - 2$（アイゼンシュタインで既約）；$[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3$；基底 $\{1, \sqrt[3]{2}, \sqrt[3]{4}\}$ を確認)
  - Remark (単拡大の同型：$\alpha, \beta$ が同じ最小多項式 $m$ をもつなら $F(\alpha) \cong F[x]/(m) \cong F(\beta)$；同型写像は $\alpha \mapsto \beta$ で与えられる)

### §1.4 作図可能数
**内容:** 定規とコンパスを用いる作図と拡大次数の関係論

- **1. 作図可能数の定義**
  - Definition 1.4-1 (作図可能数：$\mathbb{R}$ の元 $\alpha$ が定規とコンパスで作図可能であるとは、原点 $0$ と $1$ から出発して有限回の直線・円の交点操作によって得られること；作図可能数全体の集合 $\mathcal{C}$ は $\mathbb{Q}$ を含む体をなす)
  - Proposition 1.4-1 (作図可能数の代数的特徴づけ：$\alpha \in \mathbb{R}$ が作図可能 $\Leftrightarrow$ $\alpha$ は $\mathbb{Q}$ 上代数的であり $[\mathbb{Q}(\alpha) : \mathbb{Q}]$ が $2$ のべき乗)
  - Proof (各作図ステップが「平方根をとる」操作（2次拡大）に対応することを確認；連鎖律により $[\mathbb{Q}(\alpha) : \mathbb{Q}]$ は 2 のべき乗になる；逆に $2$ 冪次数ならば作図手順が構成できる)
  - Example 1.4-1 ($\sqrt{2}$ は作図可能：$[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2 = 2^1$；単位正方形の対角線の作図と一致)

- **2. 作図不可能問題への応用**
  - Theorem 1.4-1 (3大作図問題の不可能性：(i) 角の三等分（一般には不可能）；(ii) 立方体の倍積（$\sqrt[3]{2}$ が作図不可能）；(iii) 円積（$\pi$ は超越数で作図不可能）)
  - Proof ((ii) の証明：$\sqrt[3]{2}$ の最小多項式 $x^3 - 2$ の次数は $3$ で $2$ のべき乗でない；よって $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3$ が作図可能の必要条件に反する；(i) は $60^\circ$ の三等分 $20^\circ$ に対して $2\cos 20^\circ$ の最小多項式が $8x^3 - 6x - 1$（次数 $3$）であることから不可能)
  - Example 1.4-2 ($\cos(2\pi/5)$ は作図可能：$[\mathbb{Q}(\cos(2\pi/5)):\mathbb{Q}] = 2$；正五角形が作図可能であることと一致；$\cos(2\pi/5) = (\sqrt{5}-1)/4 \in \mathbb{Q}(\sqrt{5})$ を確認)
  - Remark (正多角形の作図可能性：第 6 章の円分体の理論により、正 $n$ 角形の作図可能条件が完全に解明される；これが本コース最後の目標のひとつ)

---

## Chapter 2: 分離拡大
**テーマ:** 重根のない多項式と拡大

### §2.1 形式的微分と重根
**内容:** 形式的微分に基づく関数の重根判定

- **1. 形式的微分の定義**
  - Definition 2.1-1 (形式的微分：体 $F$ 上の多項式 $f = a_n x^n + \cdots + a_0 \in F[x]$ の形式的微分 $f' = na_n x^{n-1} + \cdots + a_1$；$F$ の標数に依存することに注意)
  - Proposition 2.1-1 (形式的微分の性質：$(f + g)' = f' + g'$；$(fg)' = f'g + fg'$；これらは通常の微分と同じ公式で成立するが、解析学の極限は使わず純粋に係数の演算として定義する)
  - Proof (分配法則と係数の計算で直接確認する)
  - Example 2.1-1 ($\mathbb{F}_p[x]$ での形式的微分：$f = x^p - 1 \in \mathbb{F}_p[x]$ の微分は $f' = px^{p-1} = 0$（標数 $p$ で $p = 0$）；通常の実数解析では $0$ にならない点が大きく異なる)

- **2. 重根と形式的微分の関係**
  - Definition 2.1-2 (重根：多項式 $f \in F[x]$ の根 $\alpha$（$F$ の代数閉包内）が重根であるとは $(x - \alpha)^2 \mid f$ が成立すること；$(x-\alpha)^k \mid f$ かつ $(x-\alpha)^{k+1} \nmid f$ のとき $k$ 重根という)
  - Theorem 2.1-1 (重根の判定：$\alpha$ が $f \in F[x]$ の重根 $\Leftrightarrow$ $f(\alpha) = 0$ かつ $f'(\alpha) = 0$；同値に $\gcd(f, f') \neq 1$)
  - Proof ($f = (x-\alpha)^k g$（$g(\alpha) \neq 0$）とすると $f' = k(x-\alpha)^{k-1}g + (x-\alpha)^k g'$；$k \geq 2$ のとき $(x-\alpha) \mid f'$；$k = 1$ のとき $f'(\alpha) = g(\alpha) \neq 0$)
  - Example 2.1-2 ($f = x^3 - 3x + 2$ の重根判定：$f' = 3x^2 - 3 = 3(x-1)(x+1)$；$f(1) = 0$ かつ $f'(1) = 0$ より $x = 1$ は重根；$f = (x-1)^2(x+2)$ を確認)

### §2.2 分離多項式と分離拡大
**内容:** 多項式の分離性と分離拡大性の基礎概念

- **1. 分離多項式の定義と例**
  - Definition 2.2-1 (分離多項式：$f \in F[x]$ が分離的であるとは $f$ が重根をもたないこと；同値に $\gcd(f, f') = 1$；既約多項式に対しては $f' \neq 0$ と同値)
  - Proposition 2.2-1 (標数 $0$ では既約多項式は分離的：$\mathrm{char}(F) = 0$ のとき $0 \neq f$ が既約ならば $f' \neq 0$（次数が下がるが $0$ にはならない）)
  - Proof ($f$ が既約で次数 $n \geq 1$；$f' = na_{n-1}x^{n-1} + \cdots$；標数 $0$ では $n \neq 0$ だから $f'$ の最高次係数は $0$ でない)
  - Example 2.2-1 (標数 $p$ での非分離例：$f = x^p - a \in \mathbb{F}_p(a)[x]$（$a$ は変数）；$f' = px^{p-1} = 0$；分解体で $f = (x - \alpha)^p$ となり $p$ 重根を持つ）

- **2. 分離拡大の定義**
  - Definition 2.2-2 (分離拡大：代数拡大 $K/F$ が分離的であるとは、$K$ のすべての元の最小多項式が分離的であること)
  - Proposition 2.2-2 (分離拡大の推移性：$L/K$ と $K/F$ がともに分離的ならば $L/F$ も分離的)
  - Proof ($\alpha \in L$ の $F$ 上の最小多項式 $m$ が分離的であることを示す；$\alpha$ は $K$ 上の最小多項式 $m_K$ の根；$m_K \mid m$ かつ $m_K$ が分離的なら $m$ も分離的という流れで示す)
  - Example 2.2-2 ($\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ は分離拡大：$\sqrt{2}$ の最小多項式 $x^2 - 2$ の根は $\pm\sqrt{2}$ で重複なし；標数 $0$ の体上の有限次拡大は常に分離的)

### §2.3 完全体
**内容:** 標数 $0$ ないし有限体としての分離的性質の完備性

- **1. 完全体の定義と特徴づけ**
  - Definition 2.3-1 (完全体：体 $F$ が完全体（perfect field）であるとは、$F$ の代数拡大がすべて分離的であること；同値に $F$ の既約多項式がすべて分離的であること)
  - Theorem 2.3-1 (完全体の特徴づけ：(i) $\mathrm{char}(F) = 0$ の体は完全体；(ii) $\mathrm{char}(F) = p > 0$ の体 $F$ が完全体 $\Leftrightarrow$ フロベニウス写像 $\phi : F \to F$、$\phi(a) = a^p$ が全射（$F = F^p$）；特に有限体はすべて完全体)
  - Proof ((i) は §2.2 の Proposition 2.2-1 から；(ii) の $\Leftarrow$：$f \in F[x]$ が既約で $f' = 0$ とすると $f = g(x^p)$ の形；$F = F^p$ より $g(x^p) = h(x)^p$ と書けて $f$ が既約に矛盾；$\Rightarrow$：$a \notin F^p$ なら $x^p - a$ が既約かつ非分離)
  - Example 2.3-1 ($\mathbb{F}_p$ は完全体：$\phi : a \mapsto a^p$ は $\mathbb{F}_p \to \mathbb{F}_p$ で全単射（ラグランジュの定理より）；$\mathbb{F}_p(t)$（有理関数体）は完全体でない：$x^p - t$ は $\mathbb{F}_p(t)[x]$ で既約かつ非分離)

- **2. 完全体と分離拡大の関係**
  - Remark (完全体の重要性：ガロア理論の基本定理は分離拡大を前提とする；完全体では代数拡大 $=$ 分離拡大となるので、ガロア理論が最も綺麗に展開できる；本コースでは主に完全体上の拡大を扱う)
  - Example 2.3-2 ($\mathbb{Q}$、$\mathbb{R}$、$\mathbb{C}$、$\mathbb{F}_q$ はすべて完全体：標数 $0$ または有限体なので定理 2.3-1 から従う；代数幾何などで登場する正標数の非完全体 $\mathbb{F}_p(t)$ は特別な注意が必要)

### §2.4 原始元定理
**内容:** 分離拡大において単一生成元によって記述される定理

- **1. 原始元定理の主張**
  - Definition 2.4-1 (原始元：有限次拡大 $K/F$ の原始元とは $K = F(\alpha)$ と書ける元 $\alpha \in K$；すなわち拡大全体がひとつの元で生成される)
  - Theorem 2.4-1 (原始元定理：$F$ が無限体で $K/F$ が有限次分離拡大ならば原始元が存在する；$K = F(\alpha)$ となる $\alpha \in K$ が存在する)
  - Proof ($K = F(\alpha, \beta)$ の場合：$c \in F$ を変化させながら $\gamma = \alpha + c\beta$ を試みる；$F$ が無限体なので $\alpha_i - \alpha_j \neq 0$ などの有限個の条件を避けて $K = F(\gamma)$ となる $c$ が取れる；有限個の元を繰り返し合成して一般の場合に帰着)
  - Example 2.4-1 ($\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}$ の原始元：$\alpha = \sqrt{2} + \sqrt{3}$ が原始元；$\alpha^2 = 5 + 2\sqrt{6}$ から $\sqrt{6} = (\alpha^2-5)/2$；$\alpha^3 = 11\sqrt{2} + 9\sqrt{3}$ などを用いて $\sqrt{2}, \sqrt{3} \in \mathbb{Q}(\alpha)$ を導く；$[\mathbb{Q}(\alpha):\mathbb{Q}] = 4$ を確認)

- **2. 原始元定理の応用と注意**
  - Example 2.4-2 (有限体では原始元定理の条件が緩和：有限体 $\mathbb{F}_{q^n}$ は $\mathbb{F}_q$ 上の有限次分離拡大で常に原始元が存在する（乗法群の巡回性より）；生成元を具体的に求める方法を $\mathbb{F}_4/\mathbb{F}_2$ で例示)
  - Remark (非分離拡大では原始元が存在しないことがある：$\mathbb{F}_p(s, t) / \mathbb{F}_p(s^p, t^p)$ は次数 $p^2$ の非分離拡大で、$\mathbb{F}_p(s^p, t^p)(\alpha)$ は常に次数 $\leq p$ になるため原始元が存在しない)

---

## Chapter 3: 分解体と正規拡大
**テーマ:** 多項式の根をすべて含む体

### §3.1 分解体の存在と一意性
**内容:** すべての根を包含する最小の拡大体の構成法

- **1. 分解体の定義と存在**
  - Definition 3.1-1 (分解体：$f \in F[x]$ の分解体とは、$F$ の拡大体 $K$ であって $f$ が $K[x]$ で一次因子に完全分解し、かつ最小のもの；$f = c(x-\alpha_1)\cdots(x-\alpha_n)$ のとき $K = F(\alpha_1, \ldots, \alpha_n)$)
  - Theorem 3.1-1 (分解体の存在：任意の $f \in F[x]$（$\deg f \geq 1$）に対して分解体が存在する)
  - Proof (帰納法：$f$ が $F[x]$ で既約でなければ各既約因子について帰納法を適用；既約なら 3-9 の極大イデアルの議論で $F[x]/(f)$ に $f$ の根が存在する拡大が構成できる；根を全部添加して最小の体とする)
  - Example 3.1-1 ($x^3 - 2$ の分解体：三つの根 $\sqrt[3]{2}$、$\omega\sqrt[3]{2}$、$\omega^2\sqrt[3]{2}$（$\omega = e^{2\pi i/3}$）を $\mathbb{Q}$ に添加；$K = \mathbb{Q}(\sqrt[3]{2}, \omega)$；$[K:\mathbb{Q}] = 6$ を連鎖律で確認)

- **2. 分解体の一意性**
  - Theorem 3.1-2 (分解体の一意性：$f \in F[x]$ の分解体は $F$-同型の意味で一意)
  - Proof ($\phi : F \to F'$ という体の同型から分解体の間の $\phi$-同型 $\tilde{\phi} : K \to K'$ の存在を、根への拡張として帰納的に構成する；各ステップで最小多項式の根への送り方を選ぶ)
  - Example 3.1-2 ($x^2 - 2$ の分解体：$\mathbb{Q}(\sqrt{2}) \subset \mathbb{R}$ と $\mathbb{Q}(-\sqrt{2}) = \mathbb{Q}(\sqrt{2})$ はどちらも分解体だが $\mathbb{Q}$-同型；$\sqrt{2} \mapsto -\sqrt{2}$ が $\mathbb{Q}$-自己同型を与える)

### §3.2 正規拡大の定義と判定
**内容:** 多項式が完全分解できる正規拡大の特性

- **1. 正規拡大の定義と例**
  - Definition 3.2-1 (正規拡大：代数拡大 $K/F$ が正規であるとは、$F$ 上既約な多項式 $f \in F[x]$ が $K$ に一つの根をもてば $K$ で完全分解することを言う；同値に $K$ が $F$ 上のある多項式族の分解体)
  - Example 3.2-1 ($\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ は正規拡大：既約多項式 $x^2-2$ は $\mathbb{Q}(\sqrt{2})$ で $\pm\sqrt{2}$ に完全分解；$\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ は正規でない：$x^3 - 2$ は $\mathbb{Q}(\sqrt[3]{2})$ で一次因子 $(x-\sqrt[3]{2})$ をもつが残り2根 $\omega\sqrt[3]{2}$, $\omega^2\sqrt[3]{2}$ は実数でなく $\mathbb{Q}(\sqrt[3]{2}) \subset \mathbb{R}$ に属さない)

- **2. 正規拡大の判定法**
  - Theorem 3.2-1 (正規拡大の特徴づけ：有限次拡大 $K/F$ について、$K/F$ が正規 $\Leftrightarrow$ $K$ は $F[x]$ の何らかの多項式の分解体)
  - Proof ($\Rightarrow$：各 $\alpha_i \in K$ の最小多項式 $m_i$ の積の分解体が $K$ であることを示す；$\Leftarrow$：$f$ の分解体で根を一つ含めば全部含む（分解体の定義から）)
  - Example 3.2-2 ($\mathbb{Q}(\sqrt[3]{2}, \omega)/\mathbb{Q}$ は正規拡大：$f = x^3 - 2$ の分解体であり次数 $6$；$\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ を正規化すると $\omega$ を添加する必要がある）
  - Remark (正規閉包：$K/F$ が正規でないとき、$K$ を含む最小の $F$ の正規拡大を正規閉包という；$\mathbb{Q}(\sqrt[3]{2})$ の正規閉包は $\mathbb{Q}(\sqrt[3]{2}, \omega)$)

### §3.3 代数閉包
**内容:** 代数的に完備な体の概念と唯一存在性

- **1. 代数閉体の定義と例**
  - Definition 3.3-1 (代数閉体：体 $F$ が代数閉体であるとは、$F[x]$ のすべての最高次係数が $1$ の既約多項式が一次式のみであること；同値に次数 $\geq 1$ のすべての多項式が $F$ で根をもつ)
  - Example 3.3-1 ($\mathbb{C}$ は代数閉体（代数学の基本定理）：$\mathbb{R}[x]$ の任意の多項式は $\mathbb{C}$ で根をもつ；$\mathbb{R}$ は代数閉でない（$x^2+1$ は $\mathbb{R}$ で根なし）；$\mathbb{Q}$ は代数閉でない（$x^2-2$ は有理数の根なし）)

- **2. 代数閉包の存在と一意性**
  - Theorem 3.3-1 (代数閉包の存在と一意性：任意の体 $F$ に対して $F$ の代数閉包 $\bar{F}$（$F$ の代数拡大で代数閉体なもの）が存在し、$F$-同型の意味で一意)
  - Proof (存在はツォルンの補題（3-9 §3.3 参照）を用いた集合論的構成；すべての多項式に順次根を添加する超限帰納法の手続き；一意性は分解体の一意性と同様の拡張定理で示す)
  - Example 3.3-2 ($\mathbb{Q}$ の代数閉包は代数的数全体 $\bar{\mathbb{Q}}$：$\bar{\mathbb{Q}} = \{z \in \mathbb{C} \mid z$ は $\mathbb{Q}$ 上代数的$\}$ は代数閉体；$\bar{\mathbb{Q}} \subsetneq \mathbb{C}$（$\pi, e \in \mathbb{C}$ は超越的）；$[\mathbb{C} : \bar{\mathbb{Q}}] = \infty$)
  - Remark (代数閉包の重要性：代数方程式の根の理論はすべて代数閉包の中で展開される；以後のガロア理論でも分解体は $\bar{F}$ の部分体として取り扱うことが多い)

---

## Chapter 4: 有限体（Galois Field）
**テーマ:** 美しい構造を持つ有限集合の体

### §4.1 有限体の性質
**内容:** 位数・標数・フロベニウス写像の基本性質

- **1. 有限体の位数と標数**
  - Proposition 4.1-1 (有限体の位数は素数のべき：有限体 $\mathbb{F}_q$ の位数 $q$ は $q = p^n$（$p$ 素数、$n \geq 1$）の形；$p = \mathrm{char}(\mathbb{F}_q)$）
  - Proof ($\mathbb{F}_q$ の標数 $p$ は素数（体は整域）；$\mathbb{F}_q$ は $\mathbb{F}_p$ の有限次拡大で $[\mathbb{F}_q : \mathbb{F}_p] = n$ とすると $|\mathbb{F}_q| = p^n$)
  - Example 4.1-1 ($\mathbb{F}_4$ の存在と乗法表：$\mathbb{F}_2[x]/(x^2+x+1)$ として構成；元は $\{0, 1, \alpha, \alpha+1\}$（$\alpha^2 = \alpha+1$）；加法・乗法の全演算表を計算して体の公理を確認)

- **2. フロベニウス写像**
  - Definition 4.1-1 (フロベニウス写像：有限体 $\mathbb{F}_q$（$\mathrm{char} = p$）上の写像 $\phi : \mathbb{F}_q \to \mathbb{F}_q$、$\phi(a) = a^p$；これは体の自己同型（フロベニウス自己同型）)
  - Proposition 4.1-2 (フロベニウスは体同型：$\phi(a+b) = (a+b)^p = a^p + b^p$（標数 $p$ の「一年生の夢（Freshman's dream）」）；$\phi(ab) = (ab)^p = a^p b^p$)
  - Proof ($(a+b)^p = \sum_{k=0}^p \binom{p}{k}a^k b^{p-k}$；$0 < k < p$ のとき $\binom{p}{k}$ は $p$ の倍数（$p$ が素数）；標数 $p$ で $\binom{p}{k} = 0$；よって $(a+b)^p = a^p + b^p$)
  - Example 4.1-2 ($\mathbb{F}_4$ でのフロベニウス：$\phi : a \mapsto a^2$；$\phi(0)=0$、$\phi(1)=1$、$\phi(\alpha) = \alpha^2 = \alpha+1$、$\phi(\alpha+1) = (\alpha+1)^2 = \alpha^2+1 = \alpha$；$\phi^2 = \mathrm{id}$ となることを確認)

### §4.2 有限体の存在と一意性
**内容:** 分解体としての構成と唯一性

- **1. 有限体の存在**
  - Theorem 4.2-1 (有限体の存在：任意の素数 $p$ と正整数 $n$ に対して、位数 $p^n$ の体が存在する)
  - Proof ($f(x) = x^{p^n} - x \in \mathbb{F}_p[x]$ の $\mathbb{F}_p$ 上の分解体 $K$ を取る；$K$ の元 $\alpha$ で $f(\alpha) = 0$、すなわち $\alpha^{p^n} = \alpha$ を満たすものの全体が体をなすことを確認；$f' = p^n x^{p^n - 1} - 1 = -1 \neq 0$（標数 $p$）より $f$ は重根なし；根が恰好 $p^n$ 個で $\mathbb{F}_{p^n}$ を構成する)
  - Example 4.2-1 ($\mathbb{F}_8$ の構成：$\mathbb{F}_2[x]/(x^3+x+1)$（$x^3+x+1$ は $\mathbb{F}_2[x]$ で既約）；$x^8 - x = x(x-1)(x^3+x+1)(x^3+x^2+1)$ の分解体として確認；8元の演算を $\alpha^3 = \alpha + 1$ として記述)

- **2. 有限体の一意性**
  - Theorem 4.2-2 (有限体の一意性：位数 $p^n$ の体は $\mathbb{F}_p$-同型の意味で一意；$\mathbb{F}_{p^n}$ と書く)
  - Proof (二つの位数 $p^n$ の体を $K, K'$ とする；両方とも $f(x) = x^{p^n} - x$ の分解体であり（$K$ の元はすべて $f$ の根）；分解体の一意性（Theorem 3.1-2）より $K \cong K'$)
  - Example 4.2-2 ($\mathbb{F}_4$ は $x^4 - x = x(x-1)(x^2+x+1)$ の分解体：根は $0, 1, \alpha, \alpha+1$（$\alpha^2+\alpha+1=0$）；任意の位数 4 の体はこれと同型であることを定理より確認)

### §4.3 有限体の部分体構造
**内容:** 部分体の存在と拡大次数の関係

- **1. 有限体の部分体**
  - Theorem 4.3-1 (有限体の部分体の特徴づけ：$\mathbb{F}_{p^n}$ の部分体はすべて $\mathbb{F}_{p^d}$（$d \mid n$）の形；逆に $d \mid n$ ならば $\mathbb{F}_{p^d}$ は $\mathbb{F}_{p^n}$ の部分体として一意に存在する)
  - Proof ($\mathbb{F}_{p^d} \subset \mathbb{F}_{p^n}$ ならば $\mathbb{F}_{p^n}$ は $\mathbb{F}_{p^d}$-ベクトル空間で次数 $n/d$；よって $d \mid n$；逆に $d \mid n$ のとき $\alpha^{p^d} = \alpha$ の解全体 $\mathbb{F}_{p^d}$ が $x^{p^n} - x$ で割り切れる（$p^d - 1 \mid p^n - 1$）から $\mathbb{F}_{p^n}$ の部分体)
  - Example 4.3-1 ($\mathbb{F}_{64} = \mathbb{F}_{2^6}$ の部分体：$6$ の因数は $1, 2, 3, 6$ だから部分体は $\mathbb{F}_2$、$\mathbb{F}_4$、$\mathbb{F}_8$、$\mathbb{F}_{64}$ のみ；格子図を描いて包含関係を確認)

- **2. フロベニウスと部分体**
  - Theorem 4.3-2 ($\mathbb{F}_{p^n}/\mathbb{F}_p$ のガロア群はフロベニウスで生成される巡回群：$\mathrm{Gal}(\mathbb{F}_{p^n}/\mathbb{F}_p) = \langle \phi \rangle \cong \mathbb{Z}/n\mathbb{Z}$（$\phi : a \mapsto a^p$）)
  - Proof ($\phi$ は $\mathbb{F}_p$-自己同型；$\phi^k = \mathrm{id}$ ならば $a^{p^k} = a$ が $\mathbb{F}_{p^n}$ のすべての元で成立；$p^k - 1 \mid p^n - 1$ が必要で $k \mid n$；したがって $\phi$ の位数は $n$；自己同型の個数は $n = [\mathbb{F}_{p^n}:\mathbb{F}_p]$ だから生成される）
  - Example 4.3-2 ($\mathbb{F}_{8}/\mathbb{F}_2$ のガロア群：$\mathrm{Gal}(\mathbb{F}_8/\mathbb{F}_2) \cong \mathbb{Z}/3\mathbb{Z} = \{\mathrm{id}, \phi, \phi^2\}$；$\phi(\alpha) = \alpha^2$、$\phi^2(\alpha) = \alpha^4 = \alpha^3 \cdot \alpha = (\alpha+1)\alpha = \alpha^2 + \alpha$；各自己同型が $\mathbb{F}_8$ の元を具体的に置換する様子を確認)

---

## Chapter 5: ガロア理論の基本定理
**テーマ:** 体と群の美しい対応

### §5.1 ガロア拡大の定義
**内容:** 分離かつ正規なる拡大とガロア群

- **1. ガロア拡大とガロア群**
  - Definition 5.1-1 (ガロア拡大：有限次拡大 $K/F$ がガロア拡大であるとは、正規かつ分離的であること；同値に $|\mathrm{Aut}_F(K)| = [K:F]$)
  - Definition 5.1-2 (ガロア群：ガロア拡大 $K/F$ に対して $K/F$ のガロア群 $\mathrm{Gal}(K/F) = \mathrm{Aut}_F(K) = \{\sigma : K \xrightarrow{\sim} K \mid \sigma|_F = \mathrm{id}\}$ とは $F$ を固定する $K$ の自己同型全体；群演算は写像の合成)
  - Example 5.1-1 ($\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ のガロア群：$\mathrm{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q}) = \{\mathrm{id}, \sigma\}$（$\sigma(\sqrt{2}) = -\sqrt{2}$）；$|\mathrm{Gal}| = 2 = [\mathbb{Q}(\sqrt{2}):\mathbb{Q}]$ を確認；$\mathrm{Gal} \cong \mathbb{Z}/2\mathbb{Z}$)
  - Example 5.1-2 ($\mathbb{Q}(\sqrt[3]{2}, \omega)/\mathbb{Q}$ のガロア群：$[K:\mathbb{Q}] = 6$ でガロア拡大；$\sigma(\sqrt[3]{2}) = \omega\sqrt[3]{2}$、$\sigma(\omega) = \omega$ と $\tau(\sqrt[3]{2}) = \sqrt[3]{2}$、$\tau(\omega) = \omega^2$ で生成される；$\mathrm{Gal}(K/\mathbb{Q}) \cong S_3$ を演算表から確認)

- **2. ガロア拡大の条件確認**
  - Proposition 5.1-1 (ガロア拡大の同値条件：有限次拡大 $K/F$ について以下は同値：(i) ガロア拡大；(ii) $F[x]$ のある分離多項式の分解体；(iii) $|\mathrm{Aut}_F(K)| = [K:F]$)
  - Proof ((i)$\Rightarrow$(ii)：各 $\alpha \in K$ の最小多項式は分離的かつ $K$ で完全分解；その積が所望の多項式；(ii)$\Rightarrow$(iii)：自己同型を根の置換として数える；(iii)$\Rightarrow$(i)：アルティンの定理（次節）を用いる）
  - Example 5.1-3 ($\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ はガロア拡大でない：正規でないため（§3.2 Example 3.2-1）；$|\mathrm{Aut}_\mathbb{Q}(\mathbb{Q}(\sqrt[3]{2}))| = 1 \neq 3 = [\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]$ を確認（$\mathbb{Q}(\sqrt[3]{2}) \subset \mathbb{R}$ の自己同型は恒等写像のみ）)

### §5.2 固定体と不変論
**内容:** 固定体の概念とアルティンの定理

- **1. 固定体の定義と基本性質**
  - Definition 5.2-1 (固定体：体 $K$ の自己同型群 $G \leq \mathrm{Aut}(K)$ の部分群 $H$ に対して $K^H = \{x \in K \mid \sigma(x) = x \text{ for all } \sigma \in H\}$ を $H$ の固定体という)
  - Proposition 5.2-1 ($K^H$ は体：$K^H$ が加法・乗法で閉じていること、逆元の存在を定義から直接確認する)
  - Proof ($a, b \in K^H$ に対して $\sigma(a+b) = \sigma(a)+\sigma(b) = a+b$；$\sigma(ab) = \sigma(a)\sigma(b) = ab$；$\sigma(a^{-1}) = \sigma(a)^{-1} = a^{-1}$（$a \neq 0$）)
  - Example 5.2-1 ($\mathbb{Q}(\sqrt{2})$ の固定体：$G = \mathrm{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q}) = \{\mathrm{id}, \sigma\}$；$G$ 全体の固定体 $\mathbb{Q}(\sqrt{2})^G = \mathbb{Q}$；$\{\mathrm{id}\}$ の固定体は $\mathbb{Q}(\sqrt{2})$ 全体)

- **2. アルティンの定理**
  - Theorem 5.2-1 (アルティンの定理：体 $K$ の有限自己同型群 $G \leq \mathrm{Aut}(K)$ に対して $K/K^G$ はガロア拡大で $\mathrm{Gal}(K/K^G) = G$；また $[K : K^G] = |G|$)
  - Proof ($|G| \leq [K : K^G]$：$G$ の元の固定しない元の存在から線形独立性の議論；$[K : K^G] \leq |G|$：アルティンの補題（$G$ の文字指標の線形独立性）を用いて $K^G$ 上の $K$ の次数を評価；等号からガロア群が $G$ と一致)
  - Example 5.2-2 ($S_3$ の固定体：$K = \mathbb{Q}(\sqrt[3]{2}, \omega)$、$G = S_3 \cong \mathrm{Gal}(K/\mathbb{Q})$；$K^G = \mathbb{Q}$；$G$ の部分群 $\langle \sigma \rangle \cong \mathbb{Z}/3\mathbb{Z}$ の固定体 $K^{\langle\sigma\rangle} = \mathbb{Q}(\omega)$；$[K:\mathbb{Q}(\omega)] = 3 = |\langle\sigma\rangle|$ を確認)

### §5.3 ガロアの基本定理
**内容:** 中間体と部分群の反順序 1 対 1 対応定理

- **1. ガロアの基本定理（Galois Correspondence）**
  - Theorem 5.3-1 (ガロアの基本定理：ガロア拡大 $K/F$ でガロア群 $G = \mathrm{Gal}(K/F)$ とする；対応 $E \mapsto \mathrm{Gal}(K/E)$（中間体から部分群へ）と $H \mapsto K^H$（部分群から中間体へ）は $F$ と $K$ の間の中間体の集合と $G$ の部分群の集合の間の包含を逆転させる 1 対 1 対応（反順序同型）を与える)
  - Proof (二つの対応の合成が恒等写像であることを示す；$E$ に対して $K^{\mathrm{Gal}(K/E)} = E$：アルティンの定理と $[K:E] = |\mathrm{Gal}(K/E)|$ から従う；$H$ に対して $\mathrm{Gal}(K/K^H) = H$：アルティンの定理そのもの)
  - Example 5.3-1 ($\mathbb{Q}(\sqrt{2},\sqrt{3})/\mathbb{Q}$ のガロア対応：$G = \{e, \sigma, \tau, \sigma\tau\} \cong (\mathbb{Z}/2)^2$；部分群は $\{e\}$, $\langle\sigma\rangle$, $\langle\tau\rangle$, $\langle\sigma\tau\rangle$, $G$ の $5$ つ；中間体は $\mathbb{Q}(\sqrt{2},\sqrt{3})$, $\mathbb{Q}(\sqrt{3})$, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{6})$, $\mathbb{Q}$ に対応；対応の表を完成させる)

- **2. 次数と指数の関係**
  - Proposition 5.3-1 (次数と指数の対応：ガロア対応において $[E:F] = [G : \mathrm{Gal}(K/E)]$（$G$ の指数）；$[K:E] = |\mathrm{Gal}(K/E)|$)
  - Proof (連鎖律 $[K:F] = [K:E][E:F]$ と $[K:F] = |G|$、$[K:E] = |\mathrm{Gal}(K/E)|$ を組み合わせる)
  - Example 5.3-2 ($S_3$ の対応の次数確認：$\mathrm{Gal}(K/\mathbb{Q}(\omega)) \cong \mathbb{Z}/3\mathbb{Z}$；$[\mathbb{Q}(\omega):\mathbb{Q}] = [S_3:\mathbb{Z}/3\mathbb{Z}] = 2$；$[K:\mathbb{Q}(\omega)] = |\mathbb{Z}/3\mathbb{Z}| = 3$ を連鎖律と一致させて確認)

### §5.4 正規部分群と正規拡大の対応
**内容:** ガロア群の正規部分群と中間体の正規拡大

- **1. 正規部分群と正規中間拡大の対応**
  - Theorem 5.4-1 (正規部分群と正規拡大の対応：ガロアの基本定理の設定で、部分群 $H \leq G$ が正規部分群 $\Leftrightarrow$ 対応する中間体 $E = K^H$ が $F$ の正規拡大；このとき $\mathrm{Gal}(E/F) \cong G/H$)
  - Proof ($H \trianglelefteq G \Rightarrow E/F$ が正規：$\sigma \in G$ と $E$ の $F$ 上既約多項式の根 $\alpha \in E$ について $\sigma(\alpha) \in E$ を示す；$\sigma H \sigma^{-1} = H$ と固定体の性質を使う；$\Leftarrow$：$\sigma H \sigma^{-1} = H$ を $E/F$ の正規性から導く；$G/H \cong \mathrm{Gal}(E/F)$：制限写像 $\sigma \mapsto \sigma|_E$ が全射準同型で核 $H$)
  - Example 5.4-1 ($S_3$ の正規部分群 $A_3 = \{e, (123), (132)\}$ に対応する中間体：$K^{A_3} = \mathbb{Q}(\omega)$（$\omega = e^{2\pi i/3}$）；$\mathbb{Q}(\omega)/\mathbb{Q}$ は正規拡大；$\mathrm{Gal}(\mathbb{Q}(\omega)/\mathbb{Q}) \cong S_3/A_3 \cong \mathbb{Z}/2\mathbb{Z}$）

- **2. 正規閉包とその意義**
  - Remark (アーベル拡大：$G = \mathrm{Gal}(K/F)$ がアーベル群のとき $K/F$ をアーベル拡大という；すべての部分群が正規なので，すべての中間体が $F$ の正規拡大；第 6 章の円分体は典型的なアーベル拡大の例)
  - Example 5.4-2 ($\mathbb{Q}(\sqrt{2},\sqrt{3})/\mathbb{Q}$ はアーベル拡大：$G \cong (\mathbb{Z}/2)^2$ はアーベル群；すべての部分群が正規；中間体 $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{3})$, $\mathbb{Q}(\sqrt{6})$ はすべて $\mathbb{Q}$ の正規拡大（それぞれ二次拡大として確認）)

### §5.5 具体例
**内容:** 具体的な体拡大におけるガロア対応の確認

- **1. 四次拡大のガロア対応**
  - Example 5.5-1 ($x^4 - 2$ の分解体 $K = \mathbb{Q}(\sqrt[4]{2}, i)$ のガロア対応：$[K:\mathbb{Q}] = 8$；$\mathrm{Gal}(K/\mathbb{Q}) \cong D_4$（二面体群）；$\sigma(\sqrt[4]{2}) = i\sqrt[4]{2}$, $\sigma(i) = i$ と $\tau(\sqrt[4]{2}) = \sqrt[4]{2}$, $\tau(i) = -i$ で生成；$D_4$ の部分群と中間体の対応を完全に記述)

- **2. 有限体拡大のガロア対応**
  - Example 5.5-2 ($\mathbb{F}_{16}/\mathbb{F}_2$ のガロア対応：$G = \mathrm{Gal}(\mathbb{F}_{16}/\mathbb{F}_2) \cong \mathbb{Z}/4\mathbb{Z}$（フロベニウス生成）；部分群は $\{e\}$, $\mathbb{Z}/2$, $\mathbb{Z}/4$；中間体は $\mathbb{F}_{16}$, $\mathbb{F}_4$, $\mathbb{F}_2$ に対応；§4.3 の結果と一致することを確認)
  - Remark (ガロア理論の威力：高次方程式の根の間の対称性が群論の言葉で記述できる；これにより方程式の「解けやすさ」がガロア群の構造で完全に決まる（Chapter 7）)

---

## Chapter 6: 円分体
**テーマ:** $1$ の $n$ 乗根が生成する体

### §6.1 $1$ の原始 $n$ 乗根
**内容:** 原始乗根の性質と円分多項式

- **1. $1$ の原始 $n$ 乗根と円分多項式**
  - Definition 6.1-1 ($1$ の原始 $n$ 乗根：$\zeta^n = 1$ かつ $\zeta^k \neq 1$（$0 < k < n$）を満たす複素数 $\zeta$；$\zeta_n = e^{2\pi i/n}$ が標準的な選択)
  - Definition 6.1-2 (円分多項式：$\Phi_n(x) = \prod_{\substack{1 \leq k \leq n \\ \gcd(k,n)=1}} (x - \zeta_n^k)$；$1$ の原始 $n$ 乗根の最小多項式の「候補」；$x^n - 1 = \prod_{d \mid n} \Phi_d(x)$)
  - Proposition 6.1-1 ($\Phi_n(x) \in \mathbb{Z}[x]$：$x^n - 1 = \prod_{d \mid n}\Phi_d(x)$ をメビウス反転することで示す；$\Phi_1 = x-1$、$\Phi_2 = x+1$、$\Phi_3 = x^2+x+1$、$\Phi_4 = x^2+1$)
  - Proof (帰納法：$\Phi_1 = x-1 \in \mathbb{Z}[x]$；$x^n - 1$ と $\prod_{d \mid n, d < n}\Phi_d(x) \in \mathbb{Z}[x]$ の商が $\mathbb{Z}[x]$ に属することをガウスの補題（3-9 §8.2）で確認)
  - Example 6.1-1 ($\Phi_8 = x^4+1$ の計算：$x^8 - 1 = \Phi_1\Phi_2\Phi_4\Phi_8$；$x^8-1 = (x^4-1)(x^4+1)$ と $(x^4-1) = \Phi_1\Phi_2\Phi_4 = (x-1)(x+1)(x^2+1)$ から $\Phi_8 = x^4+1$ を導く)

- **2. 円分多項式の既約性**
  - Theorem 6.1-1 ($\mathbb{Q}[x]$ での円分多項式の既約性：$\Phi_n(x)$ は $\mathbb{Q}[x]$ で既約；よって $\Phi_n(x) = \mathrm{min}_\mathbb{Q}(\zeta_n, x)$)
  - Proof ($\zeta_n$ の最小多項式 $m(x)$ が $\Phi_n(x)$ であることを示す；任意の $\Phi_n$ の根（原始 $n$ 乗根 $\zeta_n^k$）を $m$ の根として導ける；$\zeta_n^k = (\zeta_n)^k$ に対して素数 $p \nmid n$ の $k$ のみで足りることと $m(x) \mid \Phi_n(x)$、$\deg m = \deg \Phi_n = \varphi(n)$ から $m = \Phi_n$)
  - Example 6.1-2 ($\Phi_5 = x^4+x^3+x^2+x+1$：$[\mathbb{Q}(\zeta_5):\mathbb{Q}] = \deg\Phi_5 = \varphi(5) = 4$；$\Phi_5$ のアイゼンシュタインによる既約性確認：$\Phi_5(x+1) = x^4 + 5x^3 + 10x^2 + 10x + 5$（$p=5$ でアイゼンシュタイン）)

### §6.2 円分体のガロア群
**内容:** 円分体のガロア群と同型な乗法群

- **1. 円分体とそのガロア群**
  - Definition 6.2-1 (円分体：$\mathbb{Q}(\zeta_n)$ を $n$ 次円分体という；$[\mathbb{Q}(\zeta_n):\mathbb{Q}] = \varphi(n)$（オイラーのトーシェント関数）；$\mathbb{Q}(\zeta_n)/\mathbb{Q}$ はガロア拡大)
  - Theorem 6.2-1 (円分体のガロア群：$\mathrm{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^\times$；同型は $\sigma_k(\zeta_n) = \zeta_n^k$（$\gcd(k,n)=1$）という対応で与えられる)
  - Proof ($\sigma_k$ が well-defined な自己同型になることを最小多項式 $\Phi_n$ を使って確認；$\sigma_k \sigma_l = \sigma_{kl}$ より群準同型；$\sigma_k = \mathrm{id} \Rightarrow \zeta_n^k = \zeta_n \Rightarrow k \equiv 1 \pmod{n}$ より単射；$|\mathrm{Gal}| = \varphi(n) = |(\mathbb{Z}/n\mathbb{Z})^\times|$ より全射)
  - Example 6.2-1 ($\mathrm{Gal}(\mathbb{Q}(\zeta_5)/\mathbb{Q}) \cong (\mathbb{Z}/5\mathbb{Z})^\times \cong \mathbb{Z}/4\mathbb{Z}$：自己同型 $\sigma_2(\zeta_5) = \zeta_5^2$ が生成元；$\sigma_2^2(\zeta_5) = \zeta_5^4$、$\sigma_2^3(\zeta_5) = \zeta_5^3$、$\sigma_2^4(\zeta_5) = \zeta_5^5 = \zeta_5 = \mathrm{id}$ を確認)

- **2. 円分体のガロア対応**
  - Example 6.2-2 ($\mathbb{Q}(\zeta_8)/\mathbb{Q}$ のガロア対応：$(\mathbb{Z}/8\mathbb{Z})^\times = \{\bar{1}, \bar{3}, \bar{5}, \bar{7}\} \cong (\mathbb{Z}/2)^2$；中間体は $\mathbb{Q}(\zeta_8+\zeta_8^{-1}) = \mathbb{Q}(\sqrt{2})$、$\mathbb{Q}(i)$、$\mathbb{Q}(\sqrt{-2})$ の 3 つ（$+\mathbb{Q}$ と $\mathbb{Q}(\zeta_8)$ で計 5 中間体）；ガロア群の部分群との対応を記述)
  - Remark (アーベル拡大のクロネッカー-ウェーバー定理：$\mathbb{Q}$ のすべてのアーベル拡大は円分体に含まれる；この深い定理は整数論II（4-14）の重要な目標のひとつ)

### §6.3 正多角形の作図可能性
**内容:** ガウスの定理と正 17 角形の作図例

- **1. 正 $n$ 角形の作図可能条件**
  - Theorem 6.3-1 (ガウスの定理：正 $n$ 角形が定規とコンパスで作図可能 $\Leftrightarrow$ $n = 2^s p_1 \cdots p_r$（$p_i$ は相異なるフェルマー素数）；フェルマー素数とは $p = 2^{2^k}+1$ の形の素数（$3, 5, 17, 257, 65537$ のみ知られている）)
  - Proof ($[\mathbb{Q}(\zeta_n):\mathbb{Q}] = \varphi(n)$；作図可能 $\Leftrightarrow$ $\varphi(n)$ が $2$ のべき乗（§1.4 の特徴づけ）；$\varphi(n) = 2^m$ となる $n$ がフェルマー素数の積の形と一致することを $\varphi$ の乗法性で示す)
  - Example 6.3-1 (正三角形・正五角形・正六角形の作図可能性：$3 = 2^{2^0}+1$（フェルマー素数）、$5 = 2^{2^1}+1$（フェルマー素数）から作図可能；$6 = 2 \cdot 3$（$3$ はフェルマー素数）から作図可能；$7 = 2^3-1$（フェルマー素数でない）から正七角形は作図不可能）

- **2. 正 17 角形の作図**
  - Example 6.3-2 (正 17 角形の作図可能性：$17 = 2^{2^2}+1$ はフェルマー素数なので正 17 角形は作図可能；$\mathrm{Gal}(\mathbb{Q}(\zeta_{17})/\mathbb{Q}) \cong (\mathbb{Z}/17\mathbb{Z})^\times \cong \mathbb{Z}/16\mathbb{Z}$；$2$ のべき次数の中間体の列 $\mathbb{Q} \subset \mathbb{Q}(\cos(2\pi/17)) \subset \cdots \subset \mathbb{Q}(\zeta_{17})$ で各拡大が $2$ 次となる；ガウスの発見（1796年）)
  - Remark (フェルマー素数の未解決問題：$2^{2^5}+1 = 4294967297 = 641 \times 6700417$ は素数でない；$k \geq 5$ でフェルマー素数が存在するかは未解決；したがって作図可能な正 $n$ 角形のリストは完全には確定していない)

---

## Chapter 7: 方程式の可解性
**テーマ:** 5 次方程式の解の公式は存在するか

### §7.1 可解群
**内容:** 組成列と剰余群が可換となる群構造

- **1. 可解群の定義と例**
  - Definition 7.1-1 (可解群：群 $G$ が可解群であるとは、正規列 $G = G_0 \trianglerighteq G_1 \trianglerighteq \cdots \trianglerighteq G_n = \{e\}$ で各剰余群 $G_{i}/G_{i+1}$ がアーベル群となるものが存在すること)
  - Example 7.1-1 (アーベル群は可解：$G \trianglerighteq \{e\}$ で $G/\{e\} \cong G$ がアーベル群；$\mathbb{Z}/n\mathbb{Z}$、$(\mathbb{Z}/n\mathbb{Z})^\times$ などはすべて可解)
  - Example 7.1-2 ($S_3$ は可解：$S_3 \trianglerighteq A_3 \trianglerighteq \{e\}$；$S_3/A_3 \cong \mathbb{Z}/2\mathbb{Z}$（アーベル）；$A_3/\{e\} \cong \mathbb{Z}/3\mathbb{Z}$（アーベル）；$S_3$ 自体は非可換なので単純にはアーベルでない)
  - Example 7.1-3 ($S_4$ は可解：$S_4 \trianglerighteq A_4 \trianglerighteq V_4 \trianglerighteq \{e\}$（$V_4$ はクラインの 4 群）；各剰余は $\mathbb{Z}/2$, $\mathbb{Z}/3$, $V_4$ でアーベル)

- **2. 可解群でない例と判定**
  - Theorem 7.1-1 ($A_n$（$n \geq 5$）は単純群かつ非可換：$A_5$ は位数 60 の非可換単純群（正規部分群は $\{e\}$ と $A_5$ のみ）；したがって $A_5$、$S_5$、$S_n$（$n \geq 5$）は可解でない)
  - Proof ($A_5$ が単純であることは $3$-サイクルの共役類を分析して示す；$A_5$ の正規部分群を取ると位数の整除条件と正規性の制約から $\{e\}$ か $A_5$ しかない；$S_5$ の可換化は $S_5/A_5 \cong \mathbb{Z}/2$ で $A_5$ が可換化の核となり、$A_5$ 自体が非可換単純なので可解列が作れない)
  - Example 7.1-4 ($S_5$ の非可解性の確認：$S_5$ の組成列は $S_5 \trianglerighteq A_5 \trianglerighteq \{e\}$；$A_5/\{e\} \cong A_5$ は非アーベルだから可解でない；$A_5$ の単純性を位数 60 について確認)

### §7.2 方程式のガロア群
**内容:** 多項式の分解体から決まるガロア群

- **1. 多項式のガロア群の定義**
  - Definition 7.2-1 (多項式のガロア群：$f \in F[x]$ の分離多項式とし、$K$ を $f$ の $F$ 上の分解体とする；$\mathrm{Gal}(f/F) = \mathrm{Gal}(K/F)$ を $f$ のガロア群という；自然に根の置換として $S_n$ の部分群と見なせる（$n = \deg f$）)
  - Example 7.2-1 (2 次方程式のガロア群：$f = ax^2 + bx + c \in \mathbb{Q}[x]$（既約）；判別式 $\Delta = b^2 - 4ac$；$\Delta$ が平方数でないとき $\mathrm{Gal}(f/\mathbb{Q}) \cong \mathbb{Z}/2\mathbb{Z}$；$\Delta$ が平方数のとき既約でないので対象外)
  - Example 7.2-2 (3 次方程式のガロア群：$f = x^3 + px + q \in \mathbb{Q}[x]$（既約）；判別式 $\Delta = -4p^3 - 27q^2$；$\Delta > 0$ かつ $\sqrt{\Delta} \in \mathbb{Q}$ のとき $\mathrm{Gal}(f/\mathbb{Q}) \cong \mathbb{Z}/3\mathbb{Z}$；そうでないとき $\mathrm{Gal}(f/\mathbb{Q}) \cong S_3$；$f = x^3 - 3x + 1$（$\Delta = 81 = 9^2$）で $\mathrm{Gal} \cong \mathbb{Z}/3\mathbb{Z}$ を確認)

- **2. ガロア群の推移性**
  - Proposition 7.2-1 (ガロア群は根の集合への推移的な作用をもつ：$f$ が $F[x]$ で既約ならば $\mathrm{Gal}(f/F)$ は $f$ の根の集合に推移的に作用する（任意の 2 根が自己同型で移り合う）)
  - Proof ($\alpha, \beta$ を $f$ の 2 根とすると $F(\alpha) \cong F[x]/(f) \cong F(\beta)$；この同型を $K$ 全体の自己同型に拡張できることを分解体の自己同型の拡張定理から示す)
  - Example 7.2-3 ($x^4 - 2$ のガロア群：根は $\pm\sqrt[4]{2}$、$\pm i\sqrt[4]{2}$ の 4 つ；$\mathrm{Gal}(\mathbb{Q}(\sqrt[4]{2},i)/\mathbb{Q}) \cong D_4$（§5.5 Example 5.5-1）；$D_4$ は 4 根に推移的に作用することを確認)

### §7.3 ガロアの可解性定理
**内容:** 方程式の代数的可解性と群の可解性

- **1. 根号による可解性の定義**
  - Definition 7.3-1 (根号によって解ける：$f \in F[x]$ が根号によって解けるとは、$f$ の根が $F$ の元から出発して加法・減法・乗法・除法・$n$ 乗根の有限回の操作で表せること；$F(\alpha_1, \ldots, \alpha_k)$ の列で各ステップが冪根拡大（$\alpha_i^{n_i} \in F(\alpha_1,\ldots,\alpha_{i-1})$）になるもの)
  - Definition 7.3-2 (根号拡大（冪根拡大）：$K/F$ が根号拡大（radical extension）とは $F = F_0 \subset F_1 \subset \cdots \subset F_m = K$ の列で各 $F_{i+1} = F_i(\alpha_i)$、$\alpha_i^{n_i} \in F_i$)
  - Example 7.3-1 (2次・3次・4次方程式の可解性：2次方程式 $x = (-b \pm \sqrt{b^2-4ac})/2a$ は根号で表現可能；3次方程式のカルダノの公式も冪根を使って表現；4次方程式もフェラーリの公式で可解)

- **2. ガロアの可解性定理**
  - Theorem 7.3-1 (ガロアの可解性定理：$\mathrm{char}(F) = 0$ とする；$f \in F[x]$ の根が根号で表せる $\Leftrightarrow$ $\mathrm{Gal}(f/F)$ が可解群)
  - Proof ($\Rightarrow$：根号拡大 $F = F_0 \subset \cdots \subset F_m \ni$ すべての根；各 $F_{i+1}/F_i$ が巡回拡大（適切な 1 の冪根を添加後）；ガロア群の部分列の剰余がアーベルになる；$\Leftarrow$：可解列の各ステップに対応する巡回拡大を構成して根号拡大を作る；円分体の添加で巡回拡大の存在を保証)
  - Example 7.3-2 (3 次方程式の可解性の再確認：$\mathrm{Gal}(x^3+px+q/\mathbb{Q}) \cong \mathbb{Z}/3\mathbb{Z}$ または $S_3$；$\mathbb{Z}/3\mathbb{Z}$ と $S_3$ はともに可解（§7.1）；よって 3 次方程式は常に根号で解ける（カルダノと一致）)

### §7.4 アーベル-ルフィニの定理
**内容:** 5 次以上の一般方程式の非可解性の証明

- **1. 一般の $n$ 次方程式とそのガロア群**
  - Definition 7.4-1 (一般の $n$ 次方程式：係数を変数 $e_1, \ldots, e_n$ とする方程式 $x^n - e_1 x^{n-1} + e_2 x^{n-2} - \cdots \pm e_n = 0$；根 $x_1, \ldots, x_n$ を独立変数として $e_i$ は基本対称式；$\mathrm{Gal}(x^n - e_1 \cdots \pm e_n / \mathbb{Q}(e_1,\ldots,e_n)) \cong S_n$)
  - Proposition 7.4-1 (一般 $n$ 次方程式のガロア群は $S_n$：根 $x_1, \ldots, x_n$ の任意の置換が体自己同型を与える；$\mathbb{Q}(e_1,\ldots,e_n) = \mathbb{Q}(x_1,\ldots,x_n)^{S_n}$ が $S_n$ の固定体)
  - Proof ($e_i$ は対称式であり $S_n$ に固定される；根の任意の置換が $e_i$ を固定するから自己同型を与える；$S_n$ の固定体が $\mathbb{Q}(e_1,\ldots,e_n)$ であることはニュートン-ジルヴェスター等の対称関数論から)

- **2. アーベル-ルフィニの定理**
  - Theorem 7.4-1 (アーベル-ルフィニの定理：$n \geq 5$ のとき一般の $n$ 次方程式は根号では解けない；すなわち $n \geq 5$ での $S_n$ のガロア群をもつ方程式が存在し、その方程式は根号で解けない)
  - Proof (§7.1 Theorem 7.1-1 より $S_n$（$n \geq 5$）は可解群でない；ガロアの可解性定理より根号で解けない；一般 $n$ 次方程式のガロア群が $S_n$ であること（Proposition 7.4-1）と合わせて証明完了)
  - Example 7.4-1 (具体的な 5 次方程式の非可解例：$f = x^5 - 4x + 2 \in \mathbb{Q}[x]$；アイゼンシュタインで既約；$\mathbb{R}$ での根の個数が 3（グラフ解析から）；$\mathrm{Gal}(f/\mathbb{Q}) \cong S_5$（既約性・実根の数・位数の評価から）；$S_5$ が非可解なので根号で表せない)
  - Example 7.4-2 (4次方程式の可解性との対比：$f = x^4 - 2$ のガロア群 $D_4$ は可解群（$D_4 \trianglerighteq \mathbb{Z}/4 \trianglerighteq \mathbb{Z}/2 \trianglerighteq \{e\}$）；フェラーリの公式で根 $\pm\sqrt[4]{2}$、$\pm i\sqrt[4]{2}$ が得られる；$n \leq 4$ では $S_n$ が可解なので代数的可解性が保証される)
  - Remark (ガロア理論の現代的意義：アーベル-ルフィニの定理は方程式の可解性の完全な回答を与えるだけでなく、体論・群論・代数幾何などの深い理論の出発点となった；ガロアの考察は代数幾何（4-12）、数論（4-14）、表現論（5-13）など広範な数学に影響を与えている)
