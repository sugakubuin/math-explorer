# 3-8: 群論

**前提科目:** 2-4（素朴集合論）、2-7（整数論I）

---

## Chapter 1: 群の定義
**テーマ:** 代数的構造への第一歩

### §1.1 二項演算と代数系
**内容:** 半群・モノイド・群の公理系と基本用語の定義

- **1. 二項演算と半群・モノイド**
  - Definition 1.1-1 (二項演算：集合 $G$ 上の二項演算とは写像 $\cdot : G \times G \to G$；$a \cdot b$ を $ab$ と略記する)
  - Definition 1.1-2 (半群：二項演算が結合律 $(ab)c = a(bc)$ を満たす代数系 $(G, \cdot)$)
  - Definition 1.1-3 (モノイド：半群 $(G, \cdot)$ に単位元 $e$（$ea = ae = a$）が存在するもの)
  - Example 1.1-1 ($(\mathbb{N}, +)$ は半群だがモノイドでない（$0 \notin \mathbb{N}$ の場合）；$(\mathbb{N}_0, +)$ は $0$ を単位元とするモノイド；$(\mathbb{N}, \cdot)$ は $1$ を単位元とするモノイド)

- **2. 群の定義**
  - Definition 1.1-4 (群：モノイド $(G, \cdot)$ で各元 $a \in G$ に逆元 $a^{-1}$（$aa^{-1} = a^{-1}a = e$）が存在するもの)
  - Example 1.1-2 ($(\mathbb{Z}, +)$ は群；$(\mathbb{Z}, \cdot)$ は群でない（$2$ の逆元が $\mathbb{Z}$ に存在しない）；$(\mathbb{R}\setminus\{0\}, \cdot)$ は群)
  - Remark (公理の最小性：逆元の条件は「左逆元と右逆元が存在する」から導けるが、片側のみでは不十分な例がある；ここでは両側逆元を仮定する定義を採用する)

### §1.2 群の具体例
**内容:** 整数加法群・有理数乗法群・一般線形群と直積群

- **1. 数の群と剰余群**
  - Example 1.2-1 (整数加法群 $(\mathbb{Z}, +)$：単位元 $0$、逆元 $-n$；$(\mathbb{Q}, +)$、$(\mathbb{R}, +)$、$(\mathbb{C}, +)$ も群)
  - Example 1.2-2 (乗法群：$(\mathbb{Q}^*, \cdot)$、$(\mathbb{R}^*, \cdot)$、$(\mathbb{C}^*, \cdot)$ は乗法で群；$(\mathbb{Z}^*, \cdot) = \{1, -1\}$ は有限群)
  - Example 1.2-3 (剰余加法群：$\mathbb{Z}/n\mathbb{Z} = \{0, 1, \ldots, n-1\}$ は $\bmod n$ の加法で群；$n = 4$ のとき演算表を作成して群公理を確認)

- **2. 行列群・置換群・直積**
  - Example 1.2-4 (一般線形群：$GL_n(\mathbb{R}) = \{A \in M_n(\mathbb{R}) \mid \det A \neq 0\}$ は行列の積で群；特殊線形群 $SL_n(\mathbb{R}) = \{A \mid \det A = 1\}$ も群)
  - Example 1.2-5 (対称群：$S_n$ は $\{1, \ldots, n\}$ の全単射の集合で合成を演算とする群；$|S_n| = n!$；$S_3$ の 6 元の列挙と積の計算)
  - Definition 1.2-1 (直積群：群 $G, H$ の直積 $G \times H$ は成分ごとの演算 $(g_1,h_1)(g_2,h_2) = (g_1 g_2, h_1 h_2)$ で群をなす)
  - Example 1.2-6 ($\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$（クラインの 4 群）：4 元からなる非巡回群；各元の位数が 1 または 2 であることを演算表から確認)

### §1.3 アーベル群（可換群）
**内容:** 交換法則を満たす群と非可換群との違い

- **1. アーベル群の定義と例**
  - Definition 1.3-1 (アーベル群：群 $(G, \cdot)$ で $ab = ba$（すべての $a, b \in G$）が成り立つもの；可換群ともいう)
  - Example 1.3-1 ($(\mathbb{Z}, +)$、$(\mathbb{R}^*, \cdot)$、$\mathbb{Z}/n\mathbb{Z}$ はアーベル群；$S_n$（$n \geq 3$）は非可換（$S_3$ で $(12)(13) \neq (13)(12)$ を確認）；$GL_n(\mathbb{R})$（$n \geq 2$）も非可換)
  - Remark (記法の慣習：アーベル群では演算を $+$・単位元を $0$・逆元を $-a$ と書くことが多い；非可換群では単位元を $e$・逆元を $a^{-1}$ と書く)

- **2. べき乗と指数法則**
  - Definition 1.3-2 (元のべき乗：$a^0 = e$、$a^n = a \cdot a^{n-1}$（$n \geq 1$）、$a^{-n} = (a^{-1})^n$（$n \geq 1$）と定義する)
  - Proposition 1.3-1 (指数法則：$a^m a^n = a^{m+n}$、$(a^m)^n = a^{mn}$（$m, n \in \mathbb{Z}$）；アーベル群では $(ab)^n = a^n b^n$ も成立)
  - Proof ($a^m a^n = a^{m+n}$ は符号に応じて帰納的に確認；$(ab)^n = a^n b^n$ は $ab = ba$ を繰り返し使う)
  - Example 1.3-2 (非可換群での $(ab)^n \neq a^n b^n$：$S_3$ で $(12)(123) = (23)$ と $(123)(12) = (13)$ が異なる；$(ab)^2 \neq a^2 b^2$ の反例)

### §1.4 群の基本的な性質
**内容:** 単位元・逆元の一意性と簡約法則

- **1. 単位元・逆元の一意性**
  - Theorem 1.4-1 (単位元の一意性：群の単位元は唯一つ存在する)
  - Proof ($e$ と $e'$ が両方単位元なら $e = ee' = e'$)
  - Theorem 1.4-2 (逆元の一意性：各元 $a$ の逆元は唯一つ存在する)
  - Proof ($b$ と $c$ が共に $a$ の逆元なら $b = be = b(ac) = (ba)c = ec = c$)
  - Proposition 1.4-1 (逆元の性質：$(a^{-1})^{-1} = a$；$(ab)^{-1} = b^{-1}a^{-1}$)
  - Proof ($(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = e$；逆元の一意性から従う)

- **2. 簡約法則と演算表**
  - Theorem 1.4-3 (簡約法則：$ab = ac$ ならば $b = c$（左簡約）；$ba = ca$ ならば $b = c$（右簡約）)
  - Proof (左から $a^{-1}$ をかけると $b = a^{-1}(ab) = a^{-1}(ac) = c$)
  - Proposition 1.4-2 (演算表の性質：有限群の演算表の各行・各列に各元がちょうど 1 回ずつ現れる（ラテン方陣））
  - Proof (行 $g$ では $gh$（$h$ 全体）を並べたもの；$gx = gy \Rightarrow x = y$ から重複はない)
  - Example 1.4-1 ($S_3$ の演算表の作成：6 元の積を列挙し、各行・各列がラテン方陣になることを確認)

---

## Chapter 2: 部分群
**テーマ:** 群の中に含まれる群の構造

### §2.1 部分群の定義と判定法
**内容:** 部分集合が群になるための条件

- **1. 部分群の定義と判定法**
  - Definition 2.1-1 (部分群：群 $(G, \cdot)$ の部分集合 $H \subset G$ が同じ演算で群をなすとき $H \leq G$ と書く)
  - Proposition 2.1-1 (2条件判定法：$\emptyset \neq H \subset G$ が部分群 $\Leftrightarrow$ (i) $a, b \in H \Rightarrow ab \in H$；(ii) $a \in H \Rightarrow a^{-1} \in H$)
  - Proof ((i)(ii) から $e = aa^{-1} \in H$；結合律は $G$ から継承される)
  - Proposition 2.1-2 (1条件判定法：$\emptyset \neq H \subset G$ が部分群 $\Leftrightarrow$ $a, b \in H \Rightarrow ab^{-1} \in H$)
  - Proof ($a = b$ とおくと $e \in H$；$a = e$ とおくと $b^{-1} \in H$；$b^{-1} \in H$ より $a(b^{-1})^{-1} = ab \in H$)

- **2. 部分群の例と非例**
  - Example 2.1-1 ($n\mathbb{Z} \leq \mathbb{Z}$：$a - b \in n\mathbb{Z}$（$a, b \in n\mathbb{Z}$）で判定法を確認；$\mathbb{Z}$ の部分群はすべて $n\mathbb{Z}$（$n \geq 0$）の形に限る)
  - Example 2.1-2 ($SL_n(\mathbb{R}) \leq GL_n(\mathbb{R})$：$\det(AB^{-1}) = \det A / \det B = 1$；直交群 $O_n(\mathbb{R}) = \{A \mid AA^T = I\}$ も部分群)
  - Example 2.1-3 (部分群でない例：$\mathbb{Z}_{>0}$ は $(\mathbb{Z}, +)$ の部分群でない（逆元 $-1$ が含まれない）；$\{0,1\} \subset \mathbb{Z}/4\mathbb{Z}$ も部分群でない（$1 + 1 = 2 \notin \{0,1\}$）)

### §2.2 巡回群
**内容:** 1つの元で生成される群と位数

- **1. 巡回群の定義と分類**
  - Definition 2.2-1 (生成された部分群：$a \in G$ に対して $\langle a \rangle = \{a^n \mid n \in \mathbb{Z}\}$ は $a$ を含む最小の部分群)
  - Definition 2.2-2 (巡回群：$G = \langle a \rangle$ となる元 $a$ が存在する群；$a$ を生成元という)
  - Theorem 2.2-1 (巡回群の分類：巡回群は $\mathbb{Z}$ か $\mathbb{Z}/n\mathbb{Z}$（$n \geq 1$）のいずれかに同型)
  - Proof ($|G| = \infty$ のとき：$a^m = a^n$（$m < n$）とすると $a^{n-m} = e$、矛盾；$n \mapsto a^n$ が $\mathbb{Z} \to G$ の全単射準同型。$|G| = n$ のとき：$a^d = e$ となる最小正整数 $d$ を取り $d = n$ を示す)
  - Example 2.2-1 ($\mathbb{Z} = \langle 1 \rangle$；$\mathbb{Z}/n\mathbb{Z} = \langle \bar{1} \rangle$；$\langle \bar{2} \rangle \subset \mathbb{Z}/6\mathbb{Z}$ は $\{\bar{0}, \bar{2}, \bar{4}\}$（位数 3 の部分群）)

- **2. 巡回群の生成元**
  - Proposition 2.2-2 ($\mathbb{Z}/n\mathbb{Z}$ の生成元：$\bar{k}$ が生成元 $\Leftrightarrow$ $\gcd(k, n) = 1$；生成元の個数は $\phi(n)$（オイラーの $\phi$ 関数）)
  - Proof ($\langle \bar{k} \rangle$ の位数は $n / \gcd(k,n)$；これが $n$ に等しい $\Leftrightarrow$ $\gcd(k,n) = 1$)
  - Example 2.2-2 ($\mathbb{Z}/8\mathbb{Z}$ の生成元：$\bar{1}, \bar{3}, \bar{5}, \bar{7}$（4 個）；$\phi(8) = 4$ の確認；$\bar{2}$ で生成される部分群は $\{\bar{0}, \bar{2}, \bar{4}, \bar{6}\}$（位数 4）)

### §2.3 元の位数
**内容:** 特定元が単位元に戻る最小位数と無限位数

- **1. 元の位数の定義と整除性**
  - Definition 2.3-1 (元の位数：$a^n = e$ となる最小の正整数 $n$ を $\mathrm{ord}(a)$ と書く；そのような $n$ が存在しないとき $\mathrm{ord}(a) = \infty$)
  - Proposition 2.3-1 (位数の整除性：$a^m = e$ ならば $\mathrm{ord}(a) \mid m$)
  - Proof ($m = q \cdot \mathrm{ord}(a) + r$（$0 \leq r < \mathrm{ord}(a)$）と割り算すると $a^r = e$；最小性から $r = 0$)
  - Proposition 2.3-2 ($|\langle a \rangle| = \mathrm{ord}(a)$)
  - Proof ($\mathrm{ord}(a) = n$ のとき $\langle a \rangle = \{e, a, \ldots, a^{n-1}\}$ の $n$ 元が相異なることを確認)

- **2. 位数の計算例と性質**
  - Example 2.3-1 ($\mathbb{Z}/6\mathbb{Z}$ の各元の位数：$\mathrm{ord}(\bar{0}) = 1$、$\mathrm{ord}(\bar{1}) = 6$、$\mathrm{ord}(\bar{2}) = 3$、$\mathrm{ord}(\bar{3}) = 2$、$\mathrm{ord}(\bar{4}) = 3$、$\mathrm{ord}(\bar{5}) = 6$；$\mathrm{ord}(\bar{k}) = n/\gcd(k,n)$ の公式で一致を確認)
  - Example 2.3-2 ($S_3$ の各元の位数：$\mathrm{ord}(e) = 1$、$\mathrm{ord}((12)) = \mathrm{ord}((13)) = \mathrm{ord}((23)) = 2$、$\mathrm{ord}((123)) = \mathrm{ord}((132)) = 3$；有限群では $\mathrm{ord}(a) \mid |G|$（ラグランジュの定理の帰結、Chapter 3 で証明）)
  - Proposition 2.3-3 (位数の積に関する性質：$\mathrm{ord}(a^k) = \mathrm{ord}(a) / \gcd(k, \mathrm{ord}(a))$（$\mathrm{ord}(a) < \infty$ のとき）)
  - Proof ($a^{kn} = e$ ならば $\mathrm{ord}(a) \mid kn$；$d = \gcd(k, \mathrm{ord}(a))$ とおくと $\mathrm{ord}(a)/d \mid n$；最小の $n$ は $\mathrm{ord}(a)/d$)

### §2.4 部分群の共通部分と生成
**内容:** 共通部分の性質と生成された部分群の概念

- **1. 部分群族の共通部分と生成**
  - Proposition 2.4-1 (部分群族の共通部分：$\{H_\lambda\}$ が $G$ の部分群族なら $\bigcap_\lambda H_\lambda \leq G$)
  - Proof ($a, b \in \bigcap H_\lambda$ なら各 $H_\lambda$ で $ab^{-1} \in H_\lambda$、よって $ab^{-1} \in \bigcap H_\lambda$)
  - Definition 2.4-1 (生成された部分群：$S \subset G$ に対して $\langle S \rangle = \bigcap\{H \leq G \mid S \subset H\}$；$S$ を含む最小の部分群)
  - Example 2.4-1 ($S_3$ での生成：$\langle (12) \rangle = \{e, (12)\}$；$\langle (12), (123) \rangle = S_3$；$\langle (12)(34), (13)(24) \rangle \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ in $S_4$)

- **2. 部分群の格子と $\mathbb{Z}$ の部分群**
  - Example 2.4-2 ($S_3$ の部分群格子：全部分群は $\{e\}$（位数 1）；$\langle (12) \rangle$、$\langle (13) \rangle$、$\langle (23) \rangle$（各位数 2）；$A_3 = \langle (123) \rangle$（位数 3）；$S_3$（位数 6）；ハッセ図を描いてラグランジュの定理が成り立つことを視覚的に確認)
  - Theorem 2.4-2 ($\mathbb{Z}$ の部分群の完全記述：$(\mathbb{Z}, +)$ の部分群はすべて $n\mathbb{Z}$（$n \geq 0$）の形に限る)
  - Proof ($H \leq \mathbb{Z}$、$H \neq \{0\}$ のとき最小の正の元 $n \in H$ をとる；$\mathbb{Z}$ が整数であることから $H \subset n\mathbb{Z}$；逆に $n \in H$ かつ閉じ性から $n\mathbb{Z} \subset H$)

---

## Chapter 3: 剰余類とラグランジュの定理
**テーマ:** 群の分割

### §3.1 剰余類（Coset）
**内容:** 左・右剰余類と同値関係としての理解

- **1. 左右剰余類の定義と分割**
  - Definition 3.1-1 (左剰余類：$H \leq G$、$a \in G$ に対して $aH = \{ah \mid h \in H\}$；右剰余類 $Ha = \{ha \mid h \in H\}$ も同様に定義する)
  - Proposition 3.1-1 (剰余類の分割性：左剰余類全体 $\{aH \mid a \in G\}$ は $G$ の分割をなす)
  - Proof ($aH \cap bH \neq \emptyset$ なら $c = ah_1 = bh_2$ より $a^{-1}b \in H$；このとき $aH = bH$)
  - Example 3.1-1 ($2\mathbb{Z}$ による $\mathbb{Z}$ の分割：$0 + 2\mathbb{Z}$（偶数）と $1 + 2\mathbb{Z}$（奇数）の 2 クラスに分割；$3\mathbb{Z}$ による分割では $0 + 3\mathbb{Z}$、$1 + 3\mathbb{Z}$、$2 + 3\mathbb{Z}$ の 3 クラス)

- **2. 同値関係としての解釈と左右の違い**
  - Proposition 3.1-2 ($a \sim_H b \Leftrightarrow a^{-1}b \in H$ は $G$ 上の同値関係；同値類が左剰余類 $bH$ に一致する)
  - Proof (反射律：$a^{-1}a = e \in H$；対称律：$a^{-1}b \in H \Rightarrow b^{-1}a \in H$；推移律：$a^{-1}b, b^{-1}c \in H \Rightarrow a^{-1}c \in H$)
  - Example 3.1-2 ($S_3$ の $H = \{e, (12)\}$ による剰余類：左剰余類 $H$、$(13)H = \{(13),(132)\}$、$(23)H = \{(23),(123)\}$；右剰余類 $H$、$H(13) = \{(13),(123)\}$、$H(23) = \{(23),(132)\}$ を計算し左右が異なることを確認)

### §3.2 ラグランジュの定理
**内容:** 有限群の部分群位数が群位数の約数となる性質

- **1. ラグランジュの定理**
  - Theorem 3.2-1 (ラグランジュの定理：有限群 $G$ の部分群 $H$ に対して $|H| \mid |G|$)
  - Proof (各左剰余類 $aH$ の大きさは $|H|$（$a \mapsto ah$ が全単射）；剰余類が $G$ を分割するから $|G| = |H| \cdot [G:H]$)
  - Definition 3.2-1 (指数：$[G:H] = |G|/|H|$ を $H$ の $G$ における指数という)
  - Theorem 3.2-2 (元の位数はラグランジュの帰結：有限群 $G$ の任意の元 $a$ について $\mathrm{ord}(a) \mid |G|$；とくに $a^{|G|} = e$)
  - Proof ($\langle a \rangle \leq G$ なので $|\langle a \rangle| = \mathrm{ord}(a)$ がラグランジュの定理より $|G|$ を割り切る)

- **2. ラグランジュの定理の計算例**
  - Example 3.2-1 ($S_3$（位数 6）の部分群の位数は 1, 2, 3, 6 のみ；$§2.4$ の格子に現れる全部分群がこれらの位数を持つことの確認)
  - Example 3.2-2 ($|G| = 35 = 5 \times 7$ の群の元の位数：各元の位数は $35$ の約数（$1, 5, 7, 35$）のいずれか；$e$ 以外の元は位数 5, 7, 35 のどれかを持つことの確認)

### §3.3 ラグランジュの定理の応用
**内容:** 素数位数の群の特徴やフェルマーの小定理の証明

- **1. 素数位数の群**
  - Theorem 3.3-1 (素数位数の群：$|G| = p$（素数）ならば $G$ は巡回群で自明でない部分群を持たない)
  - Proof ($e \neq a \in G$ に対し $|\langle a \rangle|$ は $p$ を割り切るので $p$；ゆえに $G = \langle a \rangle$)
  - Example 3.3-1 ($|G| = 5$ の群は $\mathbb{Z}/5\mathbb{Z}$ のみ；任意の元の位数は 1 か 5 に限られることの確認；$|G| = 4$ の群が $\mathbb{Z}/4\mathbb{Z}$ と $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ の 2 種類あることとの対比（位数が合成数のときは一意でない）)

- **2. フェルマーの小定理**
  - Theorem 3.3-2 (フェルマーの小定理：素数 $p$ と $p \nmid a$ なる整数 $a$ に対して $a^{p-1} \equiv 1 \pmod{p}$)
  - Proof ($(\mathbb{Z}/p\mathbb{Z})^* = \{\bar{1}, \ldots, \overline{p-1}\}$ は位数 $p-1$ の群；Theorem 3.2-2 より $a^{p-1} \equiv 1$)
  - Example 3.3-2 ($a = 3$、$p = 7$：$3^6 = 729 \equiv 1 \pmod{7}$；$3^1 = 3, 3^2 = 2, 3^3 = 6, 3^4 = 4, 3^5 = 5, 3^6 = 1$ と $(\mathbb{Z}/7\mathbb{Z})^*$ の元が巡回することの確認)
  - Remark (ウィルソンの定理：素数 $p$ に対して $(p-1)! \equiv -1 \pmod{p}$；$(\mathbb{Z}/p\mathbb{Z})^*$ で $x^2 = 1$ の解が $\pm 1$ のみであることから、$1$ から $p-1$ の積を取ると自己逆元の $-1$ のみ残る)

### §3.4 指数
**内容:** 部分群の指数の意味と性質

- **1. 指数の基本性質**
  - Proposition 3.4-1 (指数の推移性：$K \leq H \leq G$（いずれも有限指数）のとき $[G:K] = [G:H][H:K]$)
  - Proof ($G$ の $K$-剰余類を $H$-剰余類ごとに分類；$[G:H]$ 個の $H$-剰余類が各々 $[H:K]$ 個の $K$-剰余類に分かれる)
  - Example 3.4-1 ($\mathbb{Z} \supset 2\mathbb{Z} \supset 4\mathbb{Z}$：$[\mathbb{Z}:4\mathbb{Z}] = 4 = [\mathbb{Z}:2\mathbb{Z}][2\mathbb{Z}:4\mathbb{Z}] = 2 \times 2$ の確認)

- **2. 指数 2 の部分群の正規性**
  - Theorem 3.4-2 (指数 2 の部分群は正規：$[G:H] = 2$ ならば $H \trianglelefteq G$)
  - Proof (左剰余類は $H$ と $G \setminus H$ の 2 つ；右剰余類も $H$ と $G \setminus H$ の 2 つ；よって $gH = Hg$ が自動的に成り立つ)
  - Example 3.4-2 ($A_n \trianglelefteq S_n$：$[S_n : A_n] = 2$ から Theorem 3.4-2 を適用；$\mathbb{Z} \supset 2\mathbb{Z}$：$[\mathbb{Z}: 2\mathbb{Z}] = 2$ なので $2\mathbb{Z} \trianglelefteq \mathbb{Z}$（アーベル群なので自明だが指数 2 の応用）；$D_n \supset \langle r \rangle$：$[D_n : \langle r \rangle] = 2$ なので $\langle r \rangle \trianglelefteq D_n$)

---

## Chapter 4: 正規部分群と商群
**テーマ:** 群の準同型への布石

### §4.1 正規部分群
**内容:** 左剰余類と右剰余類が一致する部分群の定義

- **1. 正規部分群の定義と同値条件**
  - Definition 4.1-1 (正規部分群：$H \leq G$ が $gH = Hg$（すべての $g \in G$）を満たすとき $H \trianglelefteq G$ と書く)
  - Proposition 4.1-1 (同値条件：$H \trianglelefteq G$ $\Leftrightarrow$ $gHg^{-1} = H$（すべての $g$）$\Leftrightarrow$ $gHg^{-1} \subset H$（すべての $g$）)
  - Proof ($gH = Hg$ の両辺に右から $g^{-1}$ をかけると $gHg^{-1} = H$；$\subset$ の仮定から $g^{-1}Hg \subset H$ も言えて等号が従う)

- **2. 正規部分群の例と非例**
  - Example 4.1-1 (アーベル群のすべての部分群は正規；$A_n \trianglelefteq S_n$（指数 2 なので §3.4 Theorem 3.4-2 から）；$\{e,(12)\}$ は $S_3$ の正規部分群でない（$(13)(12)(13)^{-1} = (23) \notin \{e,(12)\}$）)
  - Example 4.1-2 (中心 $Z(G) = \{z \in G \mid zg = gz \text{ for all } g\}$ は常に $G$ の正規部分群；$Z(S_3) = \{e\}$；$Z(GL_n(\mathbb{R})) = \{cI \mid c \neq 0\}$（スカラー行列全体）)
  - Remark (核との接続：準同型 $\phi : G \to G'$ の核 $\ker\phi = \phi^{-1}(e')$ は常に正規部分群になる（Chapter 5 で証明）；逆に任意の正規部分群は何らかの準同型の核として実現できる（Chapter 6 で証明）)

### §4.2 商群（因子群）
**内容:** 剰余類の集合に入る群構造とその正当性

- **1. 商群の構成**
  - Theorem 4.2-1 (商群の構成：$H \trianglelefteq G$ のとき $G/H = \{aH \mid a \in G\}$ は $(aH)(bH) = (ab)H$ で群をなす)
  - Proof (well-definedness：$aH = a'H$、$bH = b'H$ なら $a' = ah_1$、$b' = bh_2$ とおくと $a'b' = ah_1bh_2$；$H \trianglelefteq G$ より $h_1 b = bh_3$（ある $h_3 \in H$）なので $a'b' \in abH$；群公理の確認は各自)
  - Example 4.2-1 ($\mathbb{Z}/n\mathbb{Z}$：$n\mathbb{Z} \trianglelefteq \mathbb{Z}$ による商群が $\mathbb{Z}/n\mathbb{Z}$ に他ならない；$(3 + n\mathbb{Z}) + (4 + n\mathbb{Z}) = (7 + n\mathbb{Z})$ の計算)

- **2. 商群の例と構造の解釈**
  - Example 4.2-2 ($S_3/A_3 \cong \mathbb{Z}/2\mathbb{Z}$：$[S_3:A_3] = 2$ より商群の位数は 2；位数 2 の群は同型を除いて一意)
  - Example 4.2-3 ($(\mathbb{R}, +)/(\mathbb{Z}, +)$：剰余類 $x + \mathbb{Z}$ を $e^{2\pi i x}$ に対応させると単位円群 $S^1$ に同型；連続な群の商の例)
  - Remark (商群の意味：「$H$ の元を同一視した群」として $G$ の情報を $H$ 分だけ忘れた構造；準同型定理（Chapter 6）によって商群と準同型像が精密に対応する)

### §4.3 単純群
**内容:** 自明な正規部分群しか持たない群の概念

- **1. 単純群の定義と例**
  - Definition 4.3-1 (単純群：$G \neq \{e\}$ で正規部分群が $\{e\}$ と $G$ のみの群)
  - Example 4.3-1 (素数位数の群は単純：§3.3 Theorem 3.3-1 より部分群の位数は 1 か $p$；正規部分群は $\{e\}$ か $G$ のみ)
  - Theorem 4.3-1 ($A_n$（$n \geq 5$）は単純群（証明のスケッチは §7.2 で行う）；$A_4$ は単純でない：クラインの 4 群 $V_4 = \{e,(12)(34),(13)(24),(14)(23)\} \trianglelefteq A_4$)
  - Remark (有限単純群の分類（CFSG）：20 世紀最大の成果の一つ；素数位数の巡回群・$A_n$（$n \geq 5$）・26 個の散在型単純群などが全リストを構成する)

- **2. 単純群と直積分解**
  - Example 4.3-2 ($\mathbb{Z}/p\mathbb{Z}$（$p$ 素数）は単純群；$\mathbb{Z}/6\mathbb{Z}$ は単純でない（$2\mathbb{Z}/6\mathbb{Z} \cong \mathbb{Z}/3\mathbb{Z}$ が非自明な正規部分群を持つ）；$\mathbb{Z}/6\mathbb{Z} \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$ への分解が可能)
  - Remark (合成列と Jordan-Hölder 定理：有限群は単純群を「素因数」として合成列で分解できる；その分解に現れる単純群（合成因子）は順序を除いて一意に決まる（Jordan-Hölder 定理）；有限単純群の分類はこの意味での素因数の完全リスト)

### §4.4 可解群
**内容:** 交換子群から成る概念と方程式論との関わり

- **1. 交換子群と導来列**
  - Definition 4.4-1 (交換子群：$[G,G] = \langle a^{-1}b^{-1}ab \mid a, b \in G \rangle$；$[G,G] \trianglelefteq G$ かつ $G/[G,G]$ は最大のアーベル商群)
  - Definition 4.4-2 (可解群：導来列 $G^{(0)} = G$、$G^{(k+1)} = [G^{(k)}, G^{(k)}]$ が有限ステップで $\{e\}$ に到達する群)
  - Example 4.4-1 (アーベル群は可解：$[G,G] = \{e\}$ なので $G^{(1)} = \{e\}$ で終了)

- **2. 可解群の例と方程式論**
  - Example 4.4-2 ($S_3$ は可解：$[S_3, S_3] = A_3$（確認：$[(12),(23)] = (12)(23)(12)^{-1}(23)^{-1} = (132)$）；$[A_3, A_3] = \{e\}$（$A_3$ はアーベル群）；$S_5$ は可解でない：$[S_5, S_5] = A_5$ かつ $A_5$ が単純群なので $[A_5, A_5] = A_5$)
  - Example 4.4-3 ($S_4$ は可解：$[S_4, S_4] = A_4$；$[A_4, A_4] = V_4$（クラインの 4 群）；$[V_4, V_4] = \{e\}$；導来列 $S_4 \supset A_4 \supset V_4 \supset \{e\}$ が確認できる)
  - Remark (ガロア理論との接続：多項式方程式 $f(x) = 0$ が根号で解けること（根号可解性）はガロア群 $\mathrm{Gal}(f)$ が可解群であることと同値；$S_n$（$n \geq 5$）は可解でないので 5 次以上の一般方程式は根号で解けない；詳細は体論I（3-10）・体論II（4-9）で扱う)

---

## Chapter 5: 準同型写像
**テーマ:** 群の構造を保つ写像

### §5.1 準同型写像の定義
**内容:** 構造を保存する写像とその像および核

- **1. 準同型写像と基本性質**
  - Definition 5.1-1 (準同型写像：$\phi : G \to G'$ が $\phi(ab) = \phi(a)\phi(b)$（すべての $a, b \in G$）を満たすもの)
  - Proposition 5.1-1 (準同型の基本性質：$\phi(e) = e'$；$\phi(a^{-1}) = \phi(a)^{-1}$；$\phi(a^n) = \phi(a)^n$)
  - Proof ($\phi(e) = \phi(ee) = \phi(e)\phi(e)$；両辺に $\phi(e)^{-1}$ をかける；逆元は $\phi(a)\phi(a^{-1}) = \phi(aa^{-1}) = e'$ から)

- **2. 像・核と具体例**
  - Definition 5.1-2 (像・核：$\mathrm{Im}\,\phi = \{\phi(g) \mid g \in G\} \leq G'$；$\ker\phi = \{g \in G \mid \phi(g) = e'\} \leq G$)
  - Proposition 5.1-2 (単射の判定：$\phi$ が単射 $\Leftrightarrow$ $\ker\phi = \{e\}$)
  - Proof ($\Rightarrow$：$\phi(g) = e' = \phi(e)$ なら $g = e$。$\Leftarrow$：$\phi(a) = \phi(b)$ なら $\phi(ab^{-1}) = e'$ より $ab^{-1} \in \ker\phi = \{e\}$)
  - Example 5.1-1 ($\phi : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$（$k \mapsto k \bmod n$）：$\ker\phi = n\mathbb{Z}$；$\det : GL_n(\mathbb{R}) \to \mathbb{R}^*$：$\ker\det = SL_n(\mathbb{R})$；$\mathrm{sgn} : S_n \to \{1,-1\}$：$\ker\,\mathrm{sgn} = A_n$)

### §5.2 核と正規部分群
**内容:** 核が正規部分群となることの証明

- **1. 核は正規部分群**
  - Theorem 5.2-1 (核は正規部分群：$\phi : G \to G'$ が準同型ならば $\ker\phi \trianglelefteq G$)
  - Proof ($g \in G$、$k \in \ker\phi$ に対して $\phi(gkg^{-1}) = \phi(g)\phi(k)\phi(g)^{-1} = \phi(g)e'\phi(g)^{-1} = e'$ より $gkg^{-1} \in \ker\phi$)
  - Theorem 5.2-2 (正規部分群は核：$H \trianglelefteq G$ に対して自然な全射 $\pi : G \to G/H$（$g \mapsto gH$）は準同型で $\ker\pi = H$)
  - Proof ($\pi(g) = eH$ $\Leftrightarrow$ $g \in H$；$\pi$ が準同型であることは商群の演算の定義から直ちに従う)

- **2. 正規部分群の特徴づけと例**
  - Proposition 5.2-3 (正規化群：$N_G(H) = \{g \in G \mid gHg^{-1} = H\}$ は $H$ を含む部分群；$H \trianglelefteq G$ $\Leftrightarrow$ $N_G(H) = G$)
  - Example 5.2-1 ($S_3$ での正規化群：$N_{S_3}(\{e,(12)\}) = \{e,(12)\}$（$\{e,(12)\}$ は自身しか正規化しない）；$N_{S_3}(A_3) = S_3$（$A_3 \trianglelefteq S_3$）の確認)

### §5.3 同型写像
**内容:** 全単射な準同型と群同士の構造的同一視

- **1. 同型写像と同型**
  - Definition 5.3-1 (同型写像：全単射な準同型 $\phi : G \xrightarrow{\sim} G'$；逆写像 $\phi^{-1}$ も準同型になる；$G$ と $G'$ が同型のとき $G \cong G'$ と書く)
  - Proposition 5.3-1 (同型は同値関係：反射律 $G \cong G$；対称律 $G \cong G' \Rightarrow G' \cong G$；推移律 $G \cong G', G' \cong G'' \Rightarrow G \cong G''$)
  - Proof (対称律：$\phi^{-1}(a'b') = \phi^{-1}(\phi(\phi^{-1}(a'))\phi(\phi^{-1}(b'))) = \phi^{-1}(a')\phi^{-1}(b')$)

- **2. 同型の例と非同型の判定**
  - Example 5.3-1 ($(\mathbb{R}, +) \cong (\mathbb{R}_{>0}, \cdot)$：$\phi(x) = e^x$ が同型写像；$(\mathbb{Z}/6\mathbb{Z}, +) \cong (\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}, +)$：$\phi(\bar{k}) = (\bar{k} \bmod 2, \bar{k} \bmod 3)$ が同型写像（中国剰余定理）)
  - Example 5.3-2 ($\mathbb{Z}/4\mathbb{Z} \not\cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$：前者は位数 4 の元 $\bar{1}$ を持つが後者は持たない；$S_3 \not\cong \mathbb{Z}/6\mathbb{Z}$：前者は非可換だが後者はアーベル群)

### §5.4 自己同型群
**内容:** 群から自身への同型群と内部自己同型

- **1. 自己同型群と内部自己同型**
  - Definition 5.4-1 (自己同型群：$\mathrm{Aut}(G) = \{\phi : G \xrightarrow{\sim} G\}$ は合成を演算とする群)
  - Definition 5.4-2 (内部自己同型：$g \in G$ に対して $\mathrm{inn}_g : x \mapsto gxg^{-1}$；$\mathrm{Inn}(G) = \{\mathrm{inn}_g \mid g \in G\} \trianglelefteq \mathrm{Aut}(G)$)
  - Proposition 5.4-1 ($G \to \mathrm{Inn}(G)$（$g \mapsto \mathrm{inn}_g$）は全射準同型で核は $Z(G)$；$\mathrm{Inn}(G) \cong G/Z(G)$)
  - Proof ($\mathrm{inn}_g = \mathrm{id}$ $\Leftrightarrow$ $gxg^{-1} = x$（すべての $x$）$\Leftrightarrow$ $g \in Z(G)$；第一同型定理（Chapter 6）を予告)

- **2. 具体的な自己同型群の計算**
  - Example 5.4-1 ($\mathrm{Aut}(\mathbb{Z}/n\mathbb{Z}) \cong (\mathbb{Z}/n\mathbb{Z})^*$：$\phi_k(x) = kx$（$\gcd(k,n) = 1$）が自己同型；$|\mathrm{Aut}(\mathbb{Z}/n\mathbb{Z})| = \phi(n)$（オイラーの $\phi$ 関数）)
  - Example 5.4-2 ($\mathrm{Aut}(\mathbb{Z}/6\mathbb{Z}) \cong \{1,5\} \cong \mathbb{Z}/2\mathbb{Z}$；$\mathrm{Inn}(S_3) \cong S_3/\{e\} \cong S_3$；$\mathrm{Aut}(S_3) \cong S_3$ の確認（内部自己同型が全部）)

---

## Chapter 6: 準同型定理
**テーマ:** 群論の基本定理

### §6.1 群の準同型定理（第一同型定理）
**内容:** 第一同型定理の主張と証明

- **1. 第一同型定理**
  - Theorem 6.1-1 (第一同型定理：$\phi : G \to G'$ が準同型なら $G/\ker\phi \cong \mathrm{Im}\,\phi$；$\phi$ が全射なら $G/\ker\phi \cong G'$)
  - Proof ($\bar\phi : G/\ker\phi \to \mathrm{Im}\,\phi$（$g\ker\phi \mapsto \phi(g)$）が well-defined・準同型・全単射；単射：$\phi(a) = \phi(b)$ なら $b^{-1}a \in \ker\phi$ ゆえ $a\ker\phi = b\ker\phi$)

- **2. 第一同型定理の応用**
  - Example 6.1-1 ($GL_n(\mathbb{R})/SL_n(\mathbb{R}) \cong \mathbb{R}^*$；$S_n/A_n \cong \mathbb{Z}/2\mathbb{Z}$；$\mathbb{Z}/n\mathbb{Z} \cong \langle e^{2\pi i/n} \rangle \leq \mathbb{C}^*$)
  - Example 6.1-2 (準同型 $\phi : G \to G$（$g \mapsto g^2$、$G$ はアーベル群）：$G = \mathbb{Z}/6\mathbb{Z}$ のとき $\ker\phi = \{\bar{0}, \bar{3}\}$、$\mathrm{Im}\,\phi = \{\bar{0}, \bar{2}, \bar{4}\}$；$G/\ker\phi \cong \mathrm{Im}\,\phi \cong \mathbb{Z}/3\mathbb{Z}$ の確認)

### §6.2 第二同型定理
**内容:** ダイヤモンド同型に関する定理

- **1. 第二同型定理の主張と証明**
  - Theorem 6.2-1 (第二同型定理：$H \leq G$、$N \trianglelefteq G$ のとき $HN \leq G$、$H \cap N \trianglelefteq H$ かつ $H/(H \cap N) \cong HN/N$)
  - Proof ($\phi : H \to HN/N$（$h \mapsto hN$）が全射準同型；$\ker\phi = \{h \in H \mid hN = N\} = H \cap N$；第一同型定理を適用)

- **2. 第二同型定理の例**
  - Example 6.2-1 ($G = S_4$、$N = A_4 \trianglelefteq S_4$、$H = \langle (12) \rangle$：$HN = S_4$、$H \cap N = \{e\}$；$H/\{e\} \cong S_4/A_4 \cong \mathbb{Z}/2\mathbb{Z}$ の確認)
  - Example 6.2-2 ($G = \mathbb{Z}$、$N = 6\mathbb{Z}$、$H = 2\mathbb{Z}$：$HN = 2\mathbb{Z}$（$2\mathbb{Z} + 6\mathbb{Z} = 2\mathbb{Z}$）；$H \cap N = 6\mathbb{Z}$；$2\mathbb{Z}/6\mathbb{Z} \cong (2\mathbb{Z})/(6\mathbb{Z}) \cong \mathbb{Z}/3\mathbb{Z}$ の確認；ダイヤモンド形の部分群の格子の解釈)

### §6.3 第三同型定理
**内容:** 商群の商に関する同型定理

- **1. 第三同型定理**
  - Theorem 6.3-1 (第三同型定理：$K \trianglelefteq G$、$H \trianglelefteq G$、$K \leq H$ のとき $H/K \trianglelefteq G/K$ かつ $(G/K)/(H/K) \cong G/H$)
  - Proof ($\psi : G/K \to G/H$（$gK \mapsto gH$）が well-defined な全射準同型；$\ker\psi = \{gK \mid gH = H\} = H/K$；第一同型定理を適用)

- **2. 第三同型定理の例**
  - Example 6.3-1 ($G = \mathbb{Z}$、$H = 2\mathbb{Z}$、$K = 4\mathbb{Z}$：$(\mathbb{Z}/4\mathbb{Z})/(2\mathbb{Z}/4\mathbb{Z}) \cong \mathbb{Z}/2\mathbb{Z}$；左辺は位数 2 の商群で右辺と一致することの確認)
  - Example 6.3-2 ($G = S_4$、$H = A_4$、$K = V_4$（クラインの 4 群）：$(S_4/V_4)/(A_4/V_4) \cong S_4/A_4 \cong \mathbb{Z}/2\mathbb{Z}$；$|S_4/V_4| = 6$、$|A_4/V_4| = 3$ の確認)

### §6.4 対応定理
**内容:** 原群と商群の部分群の 1 対 1 対応

- **1. 対応定理**
  - Theorem 6.4-1 (対応定理：$N \trianglelefteq G$ のとき、$N$ を含む $G$ の部分群全体と $G/N$ の部分群全体の間に $H \mapsto H/N$ による包含保存全単射が存在する；$H \trianglelefteq G$ $\Leftrightarrow$ $H/N \trianglelefteq G/N$)
  - Proof (自然な全射 $\pi : G \to G/N$ の逆像 $\pi^{-1}(H/N) = H$ が逆対応を与える；$H \leq G$ で $N \leq H$ のとき $\pi^{-1}(\pi(H)) = H$ を確認)

- **2. 対応定理の応用**
  - Example 6.4-1 ($N = 4\mathbb{Z} \trianglelefteq \mathbb{Z}$：$\mathbb{Z}/4\mathbb{Z}$ の部分群は $\{0\}$、$\{0,2\}$、$\mathbb{Z}/4\mathbb{Z}$ の 3 つ；対応する $\mathbb{Z}$ の部分群は $4\mathbb{Z}$、$2\mathbb{Z}$、$\mathbb{Z}$；包含関係が一致することの確認)
  - Example 6.4-2 ($N = A_4 \trianglelefteq S_4$：$S_4/A_4 \cong \mathbb{Z}/2\mathbb{Z}$ の部分群は $\{e\}$ と全体のみ；$A_4$ を含む $S_4$ の部分群は $A_4$ と $S_4$ のみ（$[S_4:A_4] = 2$ なので中間の部分群はない）の確認)

---

## Chapter 7: 群の具体例
**テーマ:** 対称群・二面体群・行列群

### §7.1 対称群 $S_n$
**内容:** 置換の基本概念と偶奇性

- **1. 置換と互換分解**
  - Definition 7.1-1 (置換・対称群：$\{1, \ldots, n\}$ の全単射の集合 $S_n$；$(a_1\,a_2\,\cdots\,a_k)$ は $a_1 \mapsto a_2 \mapsto \cdots \mapsto a_k \mapsto a_1$ の巡回置換；長さ 2 の巡回置換を互換という)
  - Theorem 7.1-1 (互換分解：任意の置換は互換の積に分解できる；分解の個数の偶奇は一意に決まる)
  - Proof ($(a_1 a_2 \cdots a_k) = (a_1 a_k)(a_1 a_{k-1})\cdots(a_1 a_2)$ による分解；偶奇性の不変性は $\prod_{i<j}(x_i - x_j)$ への作用で示す)
  - Example 7.1-1 ($(1234) = (14)(13)(12)$（奇置換）；$(123)(45) = (13)(12)(45)$（奇置換）；$(12)(34)$（偶置換）の互換分解と符号の確認)

- **2. 符号写像と共役類**
  - Definition 7.1-2 (符号：$\mathrm{sgn}(\sigma) = +1$（偶置換）または $-1$（奇置換）；$\mathrm{sgn} : S_n \to \{1,-1\}$ は準同型)
  - Theorem 7.1-2 ($S_n$ の共役類は置換の型（巡回因子の長さのリスト）で決まる)
  - Proof ($\sigma(a_1 \cdots a_k)\sigma^{-1} = (\sigma(a_1)\cdots\sigma(a_k))$；共役は各巡回因子の添字を $\sigma$ で置き換えたもの)
  - Example 7.1-2 ($S_4$ の共役類の型と個数：$(1^4)$（1 個）、$(21^2)$（6 個）、$(2^2)$（3 個）、$(31)$（8 個）、$(4)$（6 個）；合計 24 個の確認)

### §7.2 交代群 $A_n$
**内容:** 交代群の定義と $A_5$ の単純性

- **1. 交代群の定義と基本性質**
  - Definition 7.2-1 (交代群：$A_n = \ker(\mathrm{sgn})$；$|A_n| = n!/2$；$A_n \trianglelefteq S_n$)
  - Example 7.2-1 ($A_3 = \{e, (123), (132)\} \cong \mathbb{Z}/3\mathbb{Z}$；$A_4$ の 12 元：$e$・$(ij)(kl)$ 型 3 個・$(ijk)$ 型 8 個の列挙)
  - Example 7.2-2 ($A_4$ は単純でない：$V_4 = \{e,(12)(34),(13)(24),(14)(23)\} \trianglelefteq A_4$（位数 4 の正規部分群）；$A_4$ に位数 6 の部分群が存在しないことも確認（ラグランジュの逆が成立しない例）)

- **2. $A_5$ の単純性**
  - Theorem 7.2-2 ($A_n$（$n \geq 5$）は単純群)
  - Proof ($A_5$ のスケッチ：共役類の大きさ 1, 15, 20, 12, 12 を列挙（型 $(1^5)$、$(21^3)$、$(2^21)$、$(31^2)$、$(5)$）；正規部分群は共役類の合併でその大きさが 60 を割り切る必要がある；$\{1\}$ と $60$ 以外に条件を満たす組み合わせがないことを確かめる)

### §7.3 二面体群 $D_n$
**内容:** 正多角形の対称性と関係式

- **1. 二面体群の定義と元の構造**
  - Definition 7.3-1 (二面体群：正 $n$ 角形の等長変換全体 $D_n$；$|D_n| = 2n$；生成元 $r$（$1/n$ 回転）と $s$（反射）で $r^n = s^2 = e$、$srs^{-1} = r^{-1}$)
  - Proposition 7.3-1 ($D_n$ の元はすべて $r^k$ または $r^k s$（$0 \leq k < n$）の形；$sr^k = r^{-k}s$ が関係式から導かれ、任意の積が正規形に整理できる)
  - Proof ($srs^{-1} = r^{-1}$ を $k$ 回適用して $sr^k = r^{-k}s$)
  - Example 7.3-1 ($D_3 \cong S_3$：$r = (123)$、$s = (12)$ として対応を確認；$D_4$ の 8 元の演算表の作成)

- **2. $D_n$ の部分群と正規部分群**
  - Example 7.3-2 ($D_4$ の部分群格子：$\langle r \rangle \cong \mathbb{Z}/4\mathbb{Z}$（正規・指数 2）；$\langle r^2, s \rangle$、$\langle r^2, rs \rangle$（各 $\cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$、正規）；$\langle s \rangle$、$\langle rs \rangle$ など（正規でない）；合計 10 個の部分群の列挙)
  - Proposition 7.3-2 ($n$ が奇数のとき $D_n$ の正規部分群は $\{e\}$、$\langle r \rangle$、$D_n$ のみ；$n$ が偶数のとき $\langle r^2, s \rangle$ や $\langle r^2, rs \rangle$ なども正規になる)
  - Proof ($s r^k s^{-1} = r^{-k}$ から $\langle r \rangle$ の正規性が直ちに従う；$n$ の偶奇による分岐は $r^{n/2}$ の存在に依存)

### §7.4 小さな群の例（$Q_8$ と $V_4$）
**内容:** 四元数群・クラインの四元群と位数 4・8 の群の比較

- **1. $Q_8$ の定義と構造**
  - Definition 7.4-1 (四元数群：$Q_8 = \{\pm 1, \pm i, \pm j, \pm k\}$；$i^2 = j^2 = k^2 = ijk = -1$；$|Q_8| = 8$)
  - Example 7.4-1 ($Q_8$ の乗法：$ij = k$、$ji = -k$（非可換）；全部分群の列挙：$\{1\}$、$\{\pm 1\}$、$\langle i \rangle = \{\pm 1, \pm i\}$、$\langle j \rangle$、$\langle k \rangle$、$Q_8$；すべての部分群が正規（ハミルトン群）)
  - Proposition 7.4-1 ($Z(Q_8) = \{\pm 1\}$；$Q_8/Z(Q_8) \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$（クラインの四元群）)
  - Proof (各 $\langle i \rangle$、$\langle j \rangle$、$\langle k \rangle$ が指数 2 であることから正規性；商群の演算表を構成して確認)

- **2. クラインの四元群 $V_4$ と位数 4 の群の比較**
  - Definition 7.4-2 (クラインの四元群：$V_4 = \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} = \{e, a, b, ab\}$；各非単位元の位数が 2；$|V_4| = 4$)
  - Example 7.4-2 ($\mathbb{Z}/4\mathbb{Z}$ と $V_4$ の比較：どちらも位数 4 のアーベル群だが、$\mathbb{Z}/4\mathbb{Z}$ は位数 4 の元 $\bar{1}$ を持ち巡回群；$V_4$ は位数 4 の元を持たず非巡回；演算表を並べて相異なる構造を確認)
  - Example 7.4-3 ($Q_8$ と $D_4$ の比較：$|Q_8| = |D_4| = 8$ だが $Q_8 \not\cong D_4$；$D_4$ は位数 2 の元を 5 個持つが $Q_8$ は $-1$ の 1 個のみ；$Q_8$ のすべての部分群が正規だが $D_4$ には正規でない部分群 $\langle s \rangle$ がある)
  - Remark (位数 8 の群は同型を除いて $\mathbb{Z}/8\mathbb{Z}$、$\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$、$(\mathbb{Z}/2\mathbb{Z})^3$、$D_4$、$Q_8$ の 5 種類；$Q_8$ は $SU(2)$ の有限部分群として物理学（スピン）にも登場する)

### §7.5 行列群
**内容:** $GL_n, SL_n, O_n, SO_n$ の定義と具体的な構造

- **1. 直交群と特殊直交群**
  - Definition 7.5-1 (直交群・特殊直交群：$O_n(\mathbb{R}) = \{A \in GL_n(\mathbb{R}) \mid AA^T = I\}$；$SO_n(\mathbb{R}) = \{A \in O_n(\mathbb{R}) \mid \det A = 1\}$；$O_n$ は内積保存写像（等長変換）全体をなす)
  - Proposition 7.5-1 ($SO_n \trianglelefteq O_n$ かつ $[O_n : SO_n] = 2$；$\det : O_n \to \{1, -1\}$ の核が $SO_n$)
  - Proof ($\det(A) = \pm 1$（$AA^T = I$ より $(\det A)^2 = 1$）；$\ker\det = SO_n \trianglelefteq O_n$；$\det$ が全射なので指数 2)
  - Example 7.5-1 ($SO_2$ の構造：$SO_2 = \left\{ \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \mid \theta \in \mathbb{R} \right\}$；角度 $\theta$ の回転行列全体が連続群をなすことの確認；$R(\theta_1)R(\theta_2) = R(\theta_1 + \theta_2)$ の計算)
  - Example 7.5-2 ($O_2$ の元の分類：回転行列（$\det = 1$）と反射行列（$\det = -1$）；$O_2$ の有限部分群が $C_n$（$n$ 個の回転）か $D_n$（$n$ 個の回転＋$n$ 個の反射）に限ること（有限部分群の分類定理の $2$ 次元版）)

- **2. 有限体上の行列群**
  - Definition 7.5-2 (有限体上の行列群：素数 $p$ に対して $GL_n(\mathbb{F}_p) = \{A \in M_n(\mathbb{F}_p) \mid \det A \neq 0\}$；$SL_n(\mathbb{F}_p) = \ker(\det : GL_n(\mathbb{F}_p) \to \mathbb{F}_p^*)$)
  - Example 7.5-3 ($GL_2(\mathbb{F}_2) \cong S_3$：$\mathbb{F}_2^2$ の零ベクトル以外の 3 元を置換する作用が同型を与える；$|GL_2(\mathbb{F}_2)| = (4-1)(4-2) = 6$ の確認)
  - Example 7.5-4 ($|GL_n(\mathbb{F}_p)|$ の計算：第 $k$ 列が前 $k-1$ 列と独立に選べる条件から $|GL_n(\mathbb{F}_p)| = (p^n - 1)(p^n - p)\cdots(p^n - p^{n-1})$；$n=2$、$p=3$ のとき $|GL_2(\mathbb{F}_3)| = (9-1)(9-3) = 48$ の計算)
  - Remark ($O_n(\mathbb{R})$ や $SO_n(\mathbb{R})$ は連続群（リー群）の重要な例であり、詳細はリー群とリー代数（5-12）で扱う；有限体上の行列群 $PSL_n(\mathbb{F}_p) = SL_n(\mathbb{F}_p)/\{\pm I\}$ は多くの場合単純群をなし、有限単純群の分類の主要な系列をなす)

---

## Chapter 8: 群の作用
**テーマ:** 幾何的対象への作用

### §8.1 作用の定義
**内容:** 集合に対する群の左・右作用の概念と具体例

- **1. 左作用の定義と準同型との対応**
  - Definition 8.1-1 (左作用：写像 $G \times X \to X$（$(g,x) \mapsto g\cdot x$）で (i) $e \cdot x = x$；(ii) $(gh)\cdot x = g\cdot(h\cdot x)$ を満たすもの)
  - Proposition 8.1-1 (作用と準同型の対応：$G$ の $X$ への左作用は準同型 $\phi : G \to S_X$（$\phi(g)(x) = g\cdot x$）と一対一対応する)
  - Proof ($\phi(g)$ が全単射：逆は $\phi(g^{-1})$；$\phi$ が準同型：$\phi(gh)(x) = (gh)x = g(hx) = \phi(g)(\phi(h)(x))$)

- **2. 具体的な作用の例**
  - Example 8.1-1 ($G$ 自身への左乗法作用 $g\cdot x = gx$（ケイリーの定理：$G \hookrightarrow S_{|G|}$）；共役作用 $g\cdot x = gxg^{-1}$；$GL_n(\mathbb{R})$ の $\mathbb{R}^n$ への線形作用)
  - Example 8.1-2 ($S_n$ の $\{1,\ldots,n\}$ への自然な作用（推移的）；$D_n$ の正 $n$ 角形の頂点集合への幾何学的作用；$\mathbb{Z}$ の $\mathbb{Z}/n\mathbb{Z}$ への加法作用 $k \cdot \bar{m} = \overline{k+m}$)
  - Definition 8.1-2 (推移的作用：$X$ が唯一つの軌道からなる作用；忠実な作用：$\phi : G \to S_X$ が単射な作用（$g \cdot x = x$ for all $x$ $\Rightarrow$ $g = e$）)

### §8.2 軌道（Orbit）
**内容:** 特定の元の作用による軌跡としての軌道分解

- **1. 軌道の定義と分解**
  - Definition 8.2-1 (軌道：$x \in X$ の軌道 $G\cdot x = \{g\cdot x \mid g \in G\}$；$X$ は軌道の非交和 $X = \bigsqcup G\cdot x$ に分解される（軌道分解）)
  - Proposition 8.2-1 ($x \sim y \Leftrightarrow \exists g : g\cdot x = y$ は $X$ 上の同値関係；同値類が軌道に一致する)
  - Proof (反射律：$e\cdot x = x$；対称律：$g\cdot x = y$ なら $g^{-1}\cdot y = x$；推移律：$(gh)\cdot x = g\cdot(h\cdot x)$)

- **2. 軌道の具体例**
  - Example 8.2-1 (共役作用の軌道（共役類）：$S_3$ の共役類は $\{e\}$、$\{(12),(13),(23)\}$、$\{(123),(132)\}$；アーベル群では各元が長さ 1 の共役類をなす)
  - Example 8.2-2 ($D_4$ の正方形頂点への作用：4 頂点全体が一つの軌道（推移的）；$D_4$ の対角線 $\{d_1, d_2\}$ への作用：位数 2 の軌道（2 本の対角線は入れ替わる）)

### §8.3 固定部分群（Stabilizer）
**内容:** 特定の元を不動にする部分群の定義

- **1. 固定部分群の定義と性質**
  - Definition 8.3-1 (固定部分群：$x \in X$ に対して $G_x = \{g \in G \mid g\cdot x = x\} \leq G$；$\mathrm{Stab}_G(x)$ とも書く)
  - Proposition 8.3-1 ($G_x$ は $G$ の部分群)
  - Proof ($e \in G_x$；$g, h \in G_x$ なら $(gh)\cdot x = g\cdot(h\cdot x) = g\cdot x = x$ より $gh \in G_x$；$g\cdot x = x$ なら $x = g^{-1}\cdot x$ より $g^{-1} \in G_x$)

- **2. 固定部分群の例**
  - Example 8.3-1 (共役作用の固定部分群（中心化群）：$G_a = C_G(a) = \{g \in G \mid gag^{-1} = a\}$ は $a$ と可換な元の集合；$C_{S_3}((12)) = \{e,(12)\}$；$a = e$ のとき $G_e = G$（全群）)
  - Example 8.3-2 ($S_n$ の $\{1,\ldots,n\}$ への自然な作用での固定部分群：$\mathrm{Stab}_{S_n}(1) \cong S_{n-1}$（$1$ を固定する置換全体）；$\mathrm{Stab}_{S_4}(\{1,2\}) = \{\sigma \in S_4 \mid \sigma(\{1,2\}) = \{1,2\}\}$ の計算)

### §8.4 軌道・固定群定理
**内容:** 群の位数と軌道・固定群定理の証明と応用

- **1. 軌道・固定群定理**
  - Theorem 8.4-1 (軌道・固定群定理：$|G\cdot x| = [G : G_x]$；有限群では $|G| = |G\cdot x|\cdot |G_x|$)
  - Proof ($G/G_x \to G\cdot x$（$gG_x \mapsto g\cdot x$）が全単射；$gG_x = hG_x$ $\Leftrightarrow$ $h^{-1}g \in G_x$ $\Leftrightarrow$ $g\cdot x = h\cdot x$)
  - Example 8.4-1 ($S_n$ の $\{1,\ldots,n\}$ への作用：$1$ の固定部分群は $S_{n-1}$；軌道は大きさ $n$；$n \cdot (n-1)! = n!$ の確認)

- **2. 類等式と $p$-群への応用**
  - Theorem 8.4-2 (類等式：$|G| = |Z(G)| + \sum_{a} [G:C_G(a)]$（$a$ は $Z(G)$ に属さない共役類の代表元）)
  - Proof (共役作用の軌道分解；大きさ 1 の軌道が $Z(G)$ に対応；各軌道の大きさが $[G:C_G(a)]$)
  - Example 8.4-2 ($S_3$ の類等式：$6 = 1 + 3 + 2$（$|Z(S_3)| = 1$、共役類の大きさ 3, 2）；$D_4$ の類等式：$8 = 2 + 1 + 1 + 2 + 2$（中心 $\{e, r^2\}$ で $|Z| = 2$）の確認)
  - Theorem 8.4-3 ($p$-群は非自明な中心を持つ：$|G| = p^k$（$k \geq 1$）ならば $Z(G) \neq \{e\}$)
  - Proof (類等式の各項 $[G:C_G(a)]$ は $p$ の倍数；$|G| = p^k$ は $p$ の倍数；$|Z(G)| \equiv 0 \pmod{p}$ より $|Z(G)| \geq p > 1$)

---

## Chapter 9: バーンサイドの補題
**テーマ:** 数え上げへの応用

### §9.1 不動点集合
**内容:** 元を固定化する集合の概念

- **1. 不動点集合の定義**
  - Definition 9.1-1 (不動点集合：$g \in G$ に対して $X^g = \{x \in X \mid g\cdot x = x\}$)
  - Proposition 9.1-1 ($|X^e| = |X|$；$|X^g| = |X^{g^{-1}}|$；共役な元は同じ大きさの不動点集合を持つ（$|X^{ghg^{-1}}| = |X^h|$）)
  - Proof (共役の不動点：$g\cdot(hx) = x$ で変数変換 $y = gx$ とすると $h\cdot x = x$ との対応が取れる)

- **2. 不動点集合の計算例**
  - Example 9.1-1 ($D_4$ の正方形頂点 $\{1,2,3,4\}$ への回転作用（$G = \langle r \rangle \cong \mathbb{Z}/4\mathbb{Z}$）：$|X^e| = 4$；$|X^r| = |X^{r^3}| = 0$（90/270度回転）；$|X^{r^2}| = 0$（180度回転）；何も固定されない回転の不動点がゼロであることの直感的確認)
  - Example 9.1-2 ($D_4$ の反射の不動点：反射 $s$ は辺の中点対称を固定しないが頂点を 2 個固定する場合がある；$D_4$ の 8 元すべての $|X^g|$ を表にまとめる)

### §9.2 バーンサイドの補題
**内容:** 軌道の個数と不動点集合を用いた算定定理

- **1. バーンサイドの補題の証明**
  - Theorem 9.2-1 (バーンサイドの補題：有限群 $G$ の有限集合 $X$ への作用の軌道の個数 $= \frac{1}{|G|}\sum_{g \in G}|X^g|$)
  - Proof ($\sum_{g}|X^g| = |\{(g,x) \mid g\cdot x = x\}| = \sum_{x}|G_x|$；軌道 $\mathcal{O}$ ごとに $\sum_{x \in \mathcal{O}}|G_x| = \sum_{x \in \mathcal{O}}|G|/|\mathcal{O}| = |G|$；軌道数を $k$ とすると $\sum_g |X^g| = k|G|$)

- **2. 基本的な数え上げへの応用**
  - Example 9.2-1 (正方形頂点の 2 彩色（回転のみ）：$X = \{2^4 = 16$ 個の彩色 $\}$、$G = \langle r \rangle \cong \mathbb{Z}/4\mathbb{Z}$（位数 4）；$|X^e| = 16$、$|X^r| = |X^{r^3}| = 2$（4 頂点同色のみ）、$|X^{r^2}| = 4$（対角線ペアが同色）；軌道数 $= (16+2+4+2)/4 = 6$)
  - Example 9.2-2 (正方形頂点の 2 彩色（回転＋反射）：$G = D_4$（位数 8）；$|X^g|$ を全 8 元で計算（反射ごとに固定される彩色が異なる）；軌道数 $= (16+2+4+2+4+4+8+8)/8 = 6$（回転のみと同じ答えになることを確認）)

### §9.3 数え上げ問題への応用
**内容:** 円順列やネックレス問題等への具体的な応用手法

- **1. ネックレスの数え上げ**
  - Example 9.3-1 (3 色・4 ビーズのネックレス（裏返し可）：$G = D_4$（位数 8）；各 $g \in D_4$ の $|X^g|$ を計算；軌道数 $= (81+9+9+9+27+27+27+27)/8 = 24$ 種類)
  - Example 9.3-2 (2 色・6 ビーズのネックレス（裏返し可）：$G = D_6$（位数 12）；各 $g$ の不動点数の計算；軌道数 $= 14$ 種類)

- **2. 立体の彩色と発展**
  - Example 9.3-3 (正四面体の面の 3 彩色（回転同値）：$G = A_4$（位数 12）；各共役類（恒等 1 個・3-回転 8 個・2-回転 3 個）ごとに不動点数を計算；軌道数 $= (81+24+27)/12 = 11$ 種類)
  - Remark (ポリャの数え上げ定理への発展：バーンサイドの補題は等重みで数えるが、ポリャの定理は色ごとに重みをつけた母関数として一般化する；組合せ論（A-2）でより詳しく扱う)

---

## Chapter 10: シローの定理
**テーマ:** 有限群の構造解析

### §10.1 コーシーの定理
**内容:** 素数位数における群元の存在定理

- **1. コーシーの定理の主張と証明**
  - Theorem 10.1-1 (コーシーの定理：有限群 $G$ と $p \mid |G|$ なる素数 $p$ に対して位数 $p$ の元が存在する)
  - Proof ($X = \{(a_1,\ldots,a_p) \in G^p \mid a_1\cdots a_p = e\}$ への $\mathbb{Z}/p\mathbb{Z}$ の巡回シフト作用；$|X| = |G|^{p-1}$ は $p$ の倍数；不動点集合 $X^{\bar{1}} = \{(a,\ldots,a) \mid a^p = e\}$ の大きさが $p$ の倍数；$(e,\ldots,e)$ 以外の不動点が存在するので $a^p = e$、$a \neq e$ の元がある)

- **2. コーシーの定理の応用**
  - Example 10.1-1 ($|G| = 15 = 3 \times 5$：コーシーの定理より位数 3 の元と位数 5 の元が存在する；これらが生成する部分群の位数は 3 と 5；シロー部分群の存在を先取りする)
  - Example 10.1-2 ($|G| = 6$：コーシーの定理より位数 2 の元と位数 3 の元が存在する；$G \cong \mathbb{Z}/6\mathbb{Z}$ または $G \cong S_3$（位数 6 の群の分類の出発点）)

### §10.2 シロー部分群
**内容:** シロー $p$-部分群の定義と概念

- **1. $p$-群とシロー部分群の定義**
  - Definition 10.2-1 ($p$-群：$|G| = p^k$（ある $k \geq 0$）の有限群；$p$-群は非自明な中心を持つ（§8.4 Theorem 8.4-3 の帰結）)
  - Definition 10.2-2 (シロー $p$-部分群：$|G| = p^k m$（$\gcd(p,m) = 1$）のとき、位数 $p^k$ の部分群；$\mathrm{Syl}_p(G)$ で全体を表す)
  - Example 10.2-1 ($|G| = 12 = 2^2 \cdot 3$：シロー 2-部分群の位数は 4、シロー 3-部分群の位数は 3；$G = A_4$ ではシロー 2-部分群は $V_4$（唯一）、シロー 3-部分群は $(ijk)$ で生成される 4 個の $\mathbb{Z}/3\mathbb{Z}$)

- **2. $p$-群の性質**
  - Theorem 10.2-2 ($p$-群の正規部分群：位数 $p^k$ の $p$-群 $G$ は位数 $p^j$ の正規部分群を各 $0 \leq j \leq k$ について持つ)
  - Proof (類等式から $|Z(G)| \geq p$；$Z(G)$ の位数 $p$ の元 $z$ に対して $\langle z \rangle \trianglelefteq G$（中心の元は自動的に正規）；商群 $G/\langle z \rangle$ に帰納法を適用)
  - Example 10.2-2 ($|G| = p^2$ の群は必ずアーベル群：$G/Z(G)$ が巡回群ならば $G$ はアーベル群（一般的な命題）；$|G| = p^2$ のとき $|Z(G)| \geq p$、$|G/Z(G)| \leq p$ より $G/Z(G)$ は巡回群；よって $G$ はアーベル群で $G \cong \mathbb{Z}/p^2\mathbb{Z}$ または $\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}$)

### §10.3 シローの定理（第一・第二・第三）
**内容:** 存在・共役性・個数に関する定理の構成

- **1. シローの 3 定理**
  - Theorem 10.3-1 (シローの第一定理：$|G| = p^k m$（$\gcd(p,m) = 1$）のとき $G$ はシロー $p$-部分群を持つ)
  - Theorem 10.3-2 (シローの第二定理：$G$ のシロー $p$-部分群はすべて互いに共役；$P, Q \in \mathrm{Syl}_p(G)$ ならば $Q = gPg^{-1}$ となる $g \in G$ が存在する)
  - Theorem 10.3-3 (シローの第三定理：$n_p = |\mathrm{Syl}_p(G)|$ は $n_p \equiv 1 \pmod{p}$ かつ $n_p \mid m$ を満たす)
  - Proof（各定理の証明スケッチ：第一定理は $p^k$ 元部分集合への左乗法作用と $\binom{p^k m}{p^k}$ の $p$-進的評価による；第二定理は $P$ の $G/Q$ への作用による；第三定理は $\mathrm{Syl}_p(G)$ への共役作用と $P$ 自身の不動点解析による）

- **2. 3 定理の計算例**
  - Example 10.3-1 ($|G| = 12 = 2^2 \cdot 3$：$n_3 \equiv 1 \pmod 3$ かつ $n_3 \mid 4$ より $n_3 \in \{1, 4\}$；$n_2 \equiv 1 \pmod 2$ かつ $n_2 \mid 3$ より $n_2 \in \{1, 3\}$；$G = A_4$ では $n_3 = 4$（4 個の 3-巡回で生成）、$n_2 = 1$（$V_4$ のみ）であることの確認)
  - Example 10.3-2 ($|G| = 15 = 3 \times 5$：$n_5 \equiv 1 \pmod 5$ かつ $n_5 \mid 3$ より $n_5 = 1$；$n_3 \equiv 1 \pmod 3$ かつ $n_3 \mid 5$ より $n_3 = 1$；両シロー部分群が正規；§10.4 の分類につながる)

### §10.4 有限群の分類への応用
**内容:** 複数素数の積位数の群における構造決定

- **1. 小さな位数の群の分類**
  - Theorem 10.4-1 ($|G| = pq$（$p < q$ 素数、$p \nmid q-1$）ならば $G \cong \mathbb{Z}/pq\mathbb{Z}$（巡回群のみ）)
  - Proof ($n_q \equiv 1 \pmod q$ かつ $n_q \mid p$ より $n_q = 1$；$n_p \equiv 1 \pmod p$ かつ $n_p \mid q$；$p \nmid q-1$ より $n_p = 1$；両シロー部分群 $P, Q$ が正規で $P \cap Q = \{e\}$、$|PQ| = pq = |G|$；$G \cong P \times Q \cong \mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/q\mathbb{Z} \cong \mathbb{Z}/pq\mathbb{Z}$)
  - Example 10.4-1 ($|G| = 15 = 3 \times 5$：$p = 3$、$q = 5$、$p \nmid q-1 = 4$（$3 \nmid 4$）；$G \cong \mathbb{Z}/15\mathbb{Z}$（位数 15 の群は巡回群のみ）)

- **2. 積位数の群の分類**
  - Example 10.4-2 ($|G| = 30 = 2 \times 3 \times 5$ の分析：$n_5 \in \{1, 6\}$、$n_3 \in \{1, 10\}$；$n_5 = 6$ かつ $n_3 = 10$ と仮定すると位数 4, 5 の元の個数が $6 \times 4 + 10 \times 2 = 44 > 30$ で矛盾；よって $n_5 = 1$ または $n_3 = 1$；この議論が位数 30 の群（$\mathbb{Z}/30\mathbb{Z}$、$D_{15}$、$\mathbb{Z}/3\mathbb{Z} \times D_5$ など 4 種類）の分類の出発点)
  - Remark (シロー定理の意義：素数べき位数の $p$-部分群の存在・個数の制約が有限群の分類に強力な道具を与える；環論（3-9）・体論（3-10）を経てガロア理論の基盤にもなる)
