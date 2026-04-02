# 3-9: 環論

**前提科目:** 3-8（群論）

---

## Chapter 1: 環の基本概念
**テーマ:** 環構造の定義と基本例

### §1.1 環の定義
**内容:** 加法群かつ乗法半群としての環構造と分配法則

- **1. 環の公理と基本用語**
  - Definition 1.1-1 (環：集合 $R$ に加法 $+$ と乗法 $\cdot$ が定義され、(i) $(R, +)$ はアーベル群；(ii) $(R, \cdot)$ は半群（乗法の結合律）；(iii) 分配法則 $a(b+c) = ab+ac$ かつ $(b+c)a = ba+ca$；を満たすとき $(R, +, \cdot)$ を環という)
  - Example 1.1-1 ($(\mathbb{Z}, +, \cdot)$ が環であることの確認：整数の加法はアーベル群、乗法は結合律を満たし、分配法則が成立する；$(\mathbb{Z}/n\mathbb{Z}, +, \cdot)$ も環)
  - Definition 1.1-2 (単位元付き環（unital ring）：乗法の単位元 $1_R$（$1_R \cdot a = a \cdot 1_R = a$）が存在する環；本コースでは断りのない限り単位元付きを仮定する)
  - Remark (乗法の可換性は仮定しない：$ab \neq ba$ となりうる；可換環では $ab = ba$ がすべての $a, b$ で成立)

- **2. 加法・乗法の基本性質**
  - Proposition 1.1-1 (零元の性質：任意の $a \in R$ に対して $0 \cdot a = a \cdot 0 = 0$；$(-1)a = -a$)
  - Proof (分配法則 $0 \cdot a = (0+0) \cdot a = 0 \cdot a + 0 \cdot a$ を用いて両辺から $0 \cdot a$ を引く；$(-1)a$ については $a + (-1)a = (1+(-1))a = 0$ を確認する)
  - Example 1.1-2 (零環：$R = \{0\}$ で $0+0=0$、$0 \cdot 0=0$ と定めると環の公理をすべて満たす；単位元付き環としては $1 = 0$ であるただ一つの例)
  - Proposition 1.1-2 (単位元の一意性：単位元付き環で乗法の単位元は唯一つ存在する)
  - Proof (群論で示した単位元の一意性と同様に、$1$ と $1'$ が両方単位元なら $1 = 1 \cdot 1' = 1'$)

### §1.2 様々な環の例
**内容:** 整数環・多項式環・行列環の紹介と相互比較

- **1. 整数環・有理数体・剰余環**
  - Example 1.2-1 (整数環 $\mathbb{Z}$ の諸性質：可換環；単位元 $1$；可逆元は $\pm 1$ のみ；零因子なし；後の章で UFD の代表例となる)
  - Example 1.2-2 (有理数・実数・複素数の環構造：$\mathbb{Q}$、$\mathbb{R}$、$\mathbb{C}$ はそれぞれ $0$ 以外の全元が可逆な可換環（体）である；$2 \in \mathbb{Q}$ の逆元は $1/2$)
  - Example 1.2-3 (剰余環 $\mathbb{Z}/n\mathbb{Z}$：$n = 6$ のとき $\overline{2} \cdot \overline{3} = \overline{0}$ となり零因子が存在する；$n = 5$（素数）のときは零因子なし)

- **2. 多項式環・行列環・直積環**
  - Example 1.2-4 (多項式環 $\mathbb{Z}[x]$：係数が整数の一変数多項式全体；加法と乗法は多項式としての加法・乗法；可換環；$\deg(fg) = \deg f + \deg g$ の確認)
  - Example 1.2-5 (行列環 $M_n(\mathbb{R})$：$n \times n$ 実行列全体；加法と行列積で環をなす；$n \geq 2$ では一般に非可換；$AB \neq BA$ を $2 \times 2$ 行列の具体例で確認)
  - Definition 1.2-1 (直積環：環 $R, S$ の直積 $R \times S$ は成分ごとの加法・乗法 $(r_1,s_1) + (r_2,s_2) = (r_1+r_2, s_1+s_2)$、$(r_1,s_1)(r_2,s_2) = (r_1 r_2, s_1 s_2)$ で環をなす)
  - Example 1.2-6 ($\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ の零因子：$(\overline{1}, \overline{0}) \cdot (\overline{0}, \overline{1}) = (\overline{0}, \overline{0})$ となり零因子が存在することを確認)

### §1.3 零因子と整域
**内容:** 零因子の定義と整域の特徴

- **1. 零因子の定義と例**
  - Definition 1.3-1 (零因子：環 $R$ の元 $a \neq 0$ が零因子であるとは、$ab = 0$ または $ba = 0$ を満たす $b \neq 0$ が存在すること；$ab = 0$ のとき $a$ を左零因子、$b$ を右零因子という)
  - Example 1.3-1 ($\mathbb{Z}/6\mathbb{Z}$ の零因子：$\overline{2} \cdot \overline{3} = \overline{0}$ より $\overline{2}$ と $\overline{3}$ はともに零因子；$\overline{2}, \overline{3}, \overline{4}$ が零因子で $\overline{1}, \overline{5}$ は零因子でないことを列挙して確認)
  - Example 1.3-2 ($M_2(\mathbb{R})$ の零因子：$\begin{pmatrix}1&0\\0&0\end{pmatrix}\begin{pmatrix}0&0\\0&1\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}$ を計算して確認)

- **2. 整域の定義と性質**
  - Definition 1.3-2 (整域：零因子をもたない可換環（単位元付き、$1 \neq 0$）；すなわち $ab = 0 \Rightarrow a = 0$ または $b = 0$ が成立する可換環)
  - Proposition 1.3-1 (消去法則：整域 $D$ では $a \neq 0$ かつ $ab = ac$ ならば $b = c$)
  - Proof ($ab - ac = a(b-c) = 0$ と $a \neq 0$ から整域の定義により $b - c = 0$)
  - Example 1.3-3 ($\mathbb{Z}$ の整域性と消去法則の確認：$2 \cdot 3 = 2 \cdot 3$ から $3 = 3$ を導く；$\mathbb{Z}/6\mathbb{Z}$ では $2 \cdot 2 = 2 \cdot 5 = 4$ だが $2 \neq 5$ となり消去法則が失敗する)
  - Remark (有限整域は体：有限個の元しかもたない整域は必ず体（すべての非零元が可逆）になる；これは後の第4章の商体の構成と対応する)

### §1.4 可逆元と単数群
**内容:** 可逆な元と単数群の概念、体の定義定式化

- **1. 可逆元の定義と単数群**
  - Definition 1.4-1 (可逆元（単元）：環 $R$ の元 $a$ が可逆であるとは $ab = ba = 1$ を満たす $b \in R$ が存在すること；このとき $b = a^{-1}$ と書く；$R$ の可逆元全体を $R^\times$ と書く)
  - Proposition 1.4-1 ($R^\times$ は乗法について群をなす（単数群）：積の閉性、結合律（環より）、単位元 $1$、逆元の存在（定義より）が成立)
  - Proof (積の閉性：$a, b \in R^\times$ ならば $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = 1$ を確認する)
  - Example 1.4-1 (各環の単数群：$\mathbb{Z}^\times = \{1, -1\}$；$\mathbb{Q}^\times = \mathbb{Q} \setminus \{0\}$；$(M_2(\mathbb{R}))^\times = GL_2(\mathbb{R})$；$(\mathbb{Z}/n\mathbb{Z})^\times = \{\bar{a} \mid \gcd(a,n) = 1\}$；$(\mathbb{Z}/8\mathbb{Z})^\times = \{\bar{1}, \bar{3}, \bar{5}, \bar{7}\}$ を確認)

- **2. 体の定義**
  - Definition 1.4-2 (体：$1 \neq 0$ を満たす可換環 $F$ で $F^\times = F \setminus \{0\}$ となるもの；すなわち $0$ 以外のすべての元が可逆)
  - Example 1.4-2 ($\mathbb{Q}$、$\mathbb{R}$、$\mathbb{C}$ は体；$\mathbb{Z}/p\mathbb{Z}$（$p$ 素数）は体；$\mathbb{Z}/4\mathbb{Z}$ は体でない（$\bar{2}$ が可逆でない）；$\mathbb{Z}$ は体でない（$2$ が可逆でない）)
  - Proposition 1.4-2 (体は整域：体 $F$ では $ab = 0$ かつ $a \neq 0$ ならば $a^{-1}$ が存在するので $b = a^{-1}(ab) = 0$)
  - Proof ($a \neq 0$ のとき $a \in F^\times$ だから $a^{-1} \in F$ が存在し、$b = 1 \cdot b = (a^{-1}a)b = a^{-1}(ab) = 0$)
  - Remark (体論は 3-10 で詳しく扱う；本コースでは係数環や商体の構成で体が登場する)

---

## Chapter 2: イデアルと剰余環・同型定理
**テーマ:** 環の構造定理

### §2.1 イデアルの定義
**内容:** 左・右および両側イデアルの定義

- **1. イデアルの定義と基本例**
  - Definition 2.1-1 (左イデアル：環 $R$ の部分集合 $I$ が左イデアルであるとは、(i) $(I, +)$ が $(R, +)$ の部分群；(ii) $r \in R$、$a \in I$ ならば $ra \in I$（左乗法閉）を満たすこと)
  - Definition 2.1-2 (右イデアル：左乗法閉の代わりに $ar \in I$ が成立するもの；左かつ右イデアルを両側イデアル（イデアル）という；可換環では三者は一致する)
  - Example 2.1-1 ($\mathbb{Z}$ の偶数全体 $2\mathbb{Z}$ がイデアルであることの確認：偶数の差は偶数；任意の整数と偶数の積は偶数；$2\mathbb{Z} = \{\ldots, -4, -2, 0, 2, 4, \ldots\}$)
  - Remark (部分群との違い：イデアルは乗法に対して「外部からの吸収」条件をもつ；群論の正規部分群と同様の役割を環で果たす)

- **2. 自明なイデアルと和・共通部分**
  - Example 2.1-2 (自明なイデアル：任意の環 $R$ に対して $\{0\}$（零イデアル）と $R$（全体イデアル）はイデアル；この 2 つのみをもつ環を単純環という)
  - Proposition 2.1-1 (イデアルの共通部分：イデアルの族 $\{I_\lambda\}$ の共通部分 $\bigcap_\lambda I_\lambda$ はイデアル)
  - Proof (共通部分が加法部分群であることと、乗法閉を各 $I_\lambda$ の条件から確認する)
  - Proposition 2.1-2 (イデアルの和：$I + J = \{a + b \mid a \in I, b \in J\}$ はイデアル)
  - Proof ($(a_1+b_1)-(a_2+b_2) = (a_1-a_2)+(b_1-b_2) \in I+J$；$r(a+b) = ra+rb \in I+J$ を確認する)
  - Example 2.1-3 ($\mathbb{Z}$ での和と共通部分：$2\mathbb{Z} + 3\mathbb{Z} = \mathbb{Z}$；$2\mathbb{Z} \cap 3\mathbb{Z} = 6\mathbb{Z}$；$2\mathbb{Z} + 4\mathbb{Z} = 2\mathbb{Z}$ を計算で確認)

### §2.2 生成されたイデアル
**内容:** 主イデアルの概念やイデアルの各種演算

- **1. 主イデアルと有限生成イデアル**
  - Definition 2.2-1 (生成されたイデアル：集合 $S \subset R$ を含む最小のイデアル $(S)$；可換環では $(S) = \{r_1 s_1 + \cdots + r_n s_n \mid r_i \in R, s_i \in S\}$)
  - Definition 2.2-2 (主イデアル：一元 $a \in R$ から生成されたイデアル $(a) = \{ra \mid r \in R\}$（可換環）)
  - Example 2.2-1 ($\mathbb{Z}$ の主イデアル：$(6) = 6\mathbb{Z} = \{\ldots,-12,-6,0,6,12,\ldots\}$；$(2) = 2\mathbb{Z}$ かつ $(3) = 3\mathbb{Z}$；$(2) \cap (3) = (6)$ であり $(2) + (3) = (1) = \mathbb{Z}$)

- **2. イデアルの積**
  - Definition 2.2-3 (イデアルの積：$IJ = \{a_1 b_1 + \cdots + a_n b_n \mid a_i \in I, b_i \in J\}$ と定義される；$IJ \subset I \cap J$)
  - Proposition 2.2-1 ($IJ$ はイデアル：積の定義から加法閉・乗法閉を確認できる)
  - Proof (加法閉性は積の元の和を積の形に書き直す；$r(a_1b_1 + \cdots) = (ra_1)b_1 + \cdots$ で $ra_1 \in I$ から乗法閉)
  - Example 2.2-2 ($\mathbb{Z}$ でのイデアルの積：$(2)(3) = (6)$；$(2)^2 = (4)$；一般に $(m)(n) = (mn)$ を計算で確認)

### §2.3 剰余環（Quotient Ring）
**内容:** イデアルを法とした剰余環の構成と正当性

- **1. 剰余環の構成**
  - Definition 2.3-1 (剰余環：環 $R$ のイデアル $I$ に対して、剰余類 $a + I = \{a + x \mid x \in I\}$ の全体 $R/I$ に $(a+I) + (b+I) = (a+b)+I$、$(a+I)(b+I) = ab+I$ と定めると環をなす；これを $R$ の $I$ による剰余環という)
  - Proposition 2.3-1 (剰余環の加法・乗法の well-definedness：代表元の選び方によらず積・和が一定)
  - Proof (加法：$a' = a+x$、$b' = b+y$（$x,y \in I$）とすると $(a'+b')-(a+b) = x+y \in I$；乗法：$a'b' - ab = (a+x)(b+y) - ab = xb + ay + xy \in I$)
  - Example 2.3-1 ($\mathbb{Z}/(6)$ の構成：剰余類 $\bar{0}, \bar{1}, \bar{2}, \bar{3}, \bar{4}, \bar{5}$；$\bar{2} \cdot \bar{4} = \overline{8} = \bar{2}$；$\bar{2} \cdot \bar{3} = \overline{6} = \bar{0}$ を確認)

- **2. 標準的全射準同型**
  - Definition 2.3-2 (準同型写像：環 $R$, $S$ の間の写像 $\phi : R \to S$ が、$\phi(a+b) = \phi(a)+\phi(b)$、$\phi(ab) = \phi(a)\phi(b)$、$\phi(1_R) = 1_S$ を満たすとき環準同型という)
  - Proposition 2.3-2 (標準射影：$\pi : R \to R/I$、$\pi(a) = a + I$ は全射環準同型であり $\ker \pi = I$)
  - Proof ($\pi(a+b) = (a+b)+I = (a+I)+(b+I) = \pi(a)+\pi(b)$；乗法も同様；$\ker \pi = \{a \mid a+I = 0+I\} = \{a \mid a \in I\} = I$)
  - Example 2.3-2 ($\mathbb{Z}[x]/(x^2+1)$ の構成：剰余類を $a + bx$（$a, b \in \mathbb{Z}$）の形で表すと $\bar{x}^2 = -\bar{1}$；この環は $\mathbb{Z}[i]$ と同型)

### §2.4 第一同型定理
**内容:** 環における第一同型定理の証明

- **1. 核とイデアル**
  - Proposition 2.4-1 (核はイデアル：環準同型 $\phi : R \to S$ の核 $\ker \phi = \{a \in R \mid \phi(a) = 0\}$ は $R$ のイデアル)
  - Proof (加法部分群であることは群論より；$r \in R$、$a \in \ker \phi$ のとき $\phi(ra) = \phi(r)\phi(a) = \phi(r) \cdot 0 = 0$ より $ra \in \ker \phi$)
  - Proposition 2.4-2 (像はイデアルとは限らない：$\phi : \mathbb{Z} \hookrightarrow \mathbb{Q}$ の像 $\mathbb{Z}$ は $\mathbb{Q}$ のイデアルでない（$\frac{1}{2} \cdot 1 = \frac{1}{2} \notin \mathbb{Z}$）；像は部分環をなす)
  - Proof ($\phi(a) + \phi(b) = \phi(a+b)$、$\phi(a)\phi(b) = \phi(ab)$ より像は加法・乗法で閉じた部分環)

- **2. 第一同型定理**
  - Theorem 2.4-1 (第一同型定理：環準同型 $\phi : R \to S$ に対して $R / \ker \phi \cong \mathrm{Im}\,\phi$；同型 $\tilde{\phi} : R/\ker\phi \to \mathrm{Im}\,\phi$ は $\tilde{\phi}(a + \ker\phi) = \phi(a)$ で与えられる)
  - Proof (well-definedness：$a - b \in \ker\phi$ ならば $\phi(a) = \phi(b)$；単射：$\tilde{\phi}(a+I) = 0$ ならば $\phi(a) = 0$ より $a \in I$；全射：$\mathrm{Im}\,\phi$ の任意の元は $\phi(a) = \tilde{\phi}(a+I)$ の形；準同型性：計算で確認)
  - Example 2.4-1 ($\mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ への適用：自然な準同型 $\phi(k) = \bar{k}$ の核は $(n)$；第一同型定理により $\mathbb{Z}/(n) \cong \mathbb{Z}/n\mathbb{Z}$)
  - Example 2.4-2 ($\mathbb{Z}[x] \to \mathbb{C}$ への適用：$\phi(f) = f(i)$ は準同型；$\ker \phi = (x^2+1)$；$\mathbb{Z}[x]/(x^2+1) \cong \mathbb{Z}[i]$ が導かれる)

### §2.5 第二・第三同型定理
**内容:** イデアル間における同型定理の拡張

- **1. 第二同型定理**
  - Theorem 2.5-1 (第二同型定理：$I$ が $R$ のイデアル、$J$ が $R$ の部分環のとき $I + J$ は部分環、$I \cap J$ は $J$ のイデアルであり $J/(I \cap J) \cong (I+J)/I$)
  - Proof ($j \mapsto j + I$ という $J \to (I+J)/I$ の準同型の核が $I \cap J$ であることを確認し、第一同型定理を適用する)
  - Example 2.5-1 ($\mathbb{Z}$ での確認：$I = (6)$、$J = (4)$ とすると $I + J = (2)$、$I \cap J = (12)$；$J/(I \cap J) = (4)/(12) \cong \mathbb{Z}/3\mathbb{Z}$ と $(I+J)/I = (2)/(6) \cong \mathbb{Z}/3\mathbb{Z}$ が一致)

- **2. 第三同型定理**
  - Theorem 2.5-2 (第三同型定理：$I \subset J$ が $R$ のイデアルのとき $J/I$ は $R/I$ のイデアルであり $(R/I)/(J/I) \cong R/J$)
  - Proof ($R/I \to R/J$、$a + I \mapsto a + J$ という全射準同型の核が $J/I$ であることを確認し、第一同型定理を適用する)
  - Example 2.5-2 ($\mathbb{Z}$ での確認：$I = (6)$、$J = (2)$ とすると $J/I \cong \{0, 3\}$ は $\mathbb{Z}/6\mathbb{Z}$ のイデアル；$(\mathbb{Z}/6\mathbb{Z})/(\{0,3\}) \cong \mathbb{Z}/2\mathbb{Z}$ を剰余環の構成で直接確認)

### §2.6 対応定理と中国剰余定理
**内容:** イデアルの全単射な対応と、互いに素なイデアルに対する直積分解

- **1. 対応定理（第四同型定理）**
  - Theorem 2.6-1 (対応定理：イデアル $I \subset R$ に対して、$R$ の $I$ を含むイデアル全体と剰余環 $R/I$ のイデアル全体との間には、$J \mapsto J/I$ による包含関係を保つ全単射が存在する)
  - Proof (全射準同型 $\pi : R \to R/I$ による逆像 $\pi^{-1}(\bar{J})$ が $I$ を含むイデアルになることを確認する)
  - Remark (群論の対応定理と同様に、素イデアルや極大イデアルの構造を剰余環に移して考えるための非常に重要な道具となる)

- **2. 中国剰余定理（環論版）**
  - Definition 2.6-1 (互いに素なイデアル：可換環 $R$ の 2 つのイデアル $A$, $B$ が互いに素であるとは $A + B = R$ が成立すること)
  - Lemma 2.6-1 (互いに素なイデアルの積と共通部分：$A + B = R$ ならば $A \cap B = AB$)
  - Theorem 2.6-2 (中国剰余定理：$I_1 + I_j = R$（$i \neq j$）を満たす $R$ のイデアル $I_1, \ldots, I_n$ に対して $R/(I_1 \cap \cdots \cap I_n) \cong R/I_1 \times \cdots \times R/I_n$ が成立する)
  - Example 2.6-1 ($\mathbb{Z}$ での中国剰余定理：$\mathbb{Z}/(6) \cong \mathbb{Z}/(2) \times \mathbb{Z}/(3)$ の構成と連立合同式への応用)

---

## Chapter 3: 素イデアルと極大イデアル
**テーマ:** 重要なイデアルのクラス

### §3.1 素イデアル
**内容:** 素因数に相当するイデアルと整域との関係

- **1. 素イデアルの定義と特徴づけ**
  - Definition 3.1-1 (素イデアル：可換環 $R$ のイデアル $P \subsetneq R$ が素イデアルであるとは、$ab \in P \Rightarrow a \in P$ または $b \in P$ が成立すること；同値に $R/P$ が整域であること)
  - Proposition 3.1-1 ($P$ が素イデアル $\Leftrightarrow$ $R/P$ が整域：$ab + P = (a+P)(b+P) = 0$ と $a+P \neq 0$ または $b+P \neq 0$ の対応を確認する)
  - Proof ($P$ が素イデアル $\Rightarrow$ $R/P$ が整域：$\overline{ab} = \bar{0}$ つまり $ab \in P$ ならば $a \in P$ または $b \in P$；逆も同様)
  - Example 3.1-1 ($\mathbb{Z}$ の素イデアル：$(0)$ と $(p)$（$p$ 素数）が素イデアル；$(4)$ は素イデアルでない（$2 \cdot 2 \in (4)$ だが $2 \notin (4)$）；$\mathbb{Z}/(p) \cong \mathbb{Z}/p\mathbb{Z}$ は整域（体）であることを確認)

- **2. イデアルの積と素イデアルの関係**
  - Proposition 3.1-2 (素イデアルとイデアル積：素イデアル $P$ に対して $IJ \subset P$ ならば $I \subset P$ または $J \subset P$)
  - Proof ($I \not\subset P$ と仮定すると $a \in I \setminus P$ が存在；任意の $b \in J$ に対して $ab \in IJ \subset P$ と $P$ の素性から $b \in P$；よって $J \subset P$)
  - Example 3.1-2 ($\mathbb{Z}$ での確認：$P = (3)$、$I = (6)$、$J = (15)$ とすると $IJ = (90) = (2 \cdot 3^2 \cdot 5) \subset (3)$；$I = (6) \subset (3)$ を確認)

### §3.2 極大イデアル
**内容:** 極大なイデアルと体との関係

- **1. 極大イデアルの定義と特徴づけ**
  - Definition 3.2-1 (極大イデアル：可換環 $R$ の真のイデアル $M \subsetneq R$ が極大イデアルであるとは、$M \subset J \subset R$（$J$ はイデアル）ならば $J = M$ または $J = R$ が成立すること；同値に $R/M$ が体であること)
  - Theorem 3.2-1 ($M$ が極大イデアル $\Leftrightarrow$ $R/M$ が体：$R/M$ が体 $\Leftrightarrow$ $R/M$ の零でない元がすべて可逆 $\Leftrightarrow$ $R$ の $M$ 以外のイデアルが $R$ 全体のみ)
  - Proof ($\Rightarrow$：$\bar{a} \neq \bar{0}$（つまり $a \notin M$）のとき $M + (a) \supsetneq M$；$M$ の極大性より $M + (a) = R$；$1 = m + ra$ となる $r$ が存在し $\bar{r}\bar{a} = \bar{1}$；$\Leftarrow$：第三同型定理の逆を使う)
  - Example 3.2-1 ($\mathbb{Z}$ の極大イデアル：$(p)$（$p$ 素数）が極大イデアル；$\mathbb{Z}/(p) \cong \mathbb{F}_p$（位数 $p$ の体）；$(6)$ は極大でない（$(2) \supsetneq (6)$ が真に含む）)

- **2. 素イデアルと極大イデアルの関係**
  - Proposition 3.2-1 (極大イデアルは素イデアル：$R/M$ が体ならば $R/M$ は整域でもある；体は整域だから $M$ は素イデアル)
  - Proof ($M$ が極大 $\Rightarrow$ $R/M$ は体 $\Rightarrow$ $R/M$ は整域 $\Rightarrow$ $M$ は素)
  - Example 3.2-2 (素イデアルが極大でない例：$\mathbb{Z}[x]$ において $(0)$ は素イデアル（$\mathbb{Z}[x]/(0) \cong \mathbb{Z}[x]$ は整域）だが $(x) \supsetneq (0)$ が素イデアルであるから $(0)$ は極大でない)
  - Remark (体論における対応：極大イデアルに関する 3-10 体論での議論では、分離拡大・代数閉包などの概念が極大イデアルを介して精緻化される)

### §3.3 ツォルンの補題と極大イデアルの存在
**内容:** 選択公理を用いた極大イデアル存在定理

- **1. ツォルンの補題の準備**
  - Definition 3.3-1 (帰納的順序集合：半順序集合 $(S, \leq)$ で、すべての全順序部分集合（鎖）が $S$ 内に上界をもつとき帰納的であるという)
  - Axiom 3.3-1 (ツォルンの補題：帰納的順序集合は極大元をもつ；これは選択公理と同値)
  - Remark (選択公理との同値性：ツォルンの補題は選択公理・整列定理と同値であり、集合論の標準的な公理として採用される；2-4（素朴集合論）で扱われた内容)

- **2. 極大イデアルの存在定理**
  - Theorem 3.3-1 (極大イデアルの存在：$1 \neq 0$ を満たす可換環 $R$ の任意の真のイデアル $I \subsetneq R$ に対して、$I$ を含む極大イデアルが存在する)
  - Proof ($\mathcal{F} = \{J \mid J \text{ はイデアル}, I \subset J \subsetneq R\}$ を包含順序で考える；鎖 $\{J_\lambda\}$ に対して $\bigcup J_\lambda \in \mathcal{F}$ を確認（$1 \notin \bigcup J_\lambda$ を使う）；ツォルンの補題より極大元が存在)
  - Example 3.3-1 ($\mathbb{Z}$ の任意のイデアル $(n)$（$n \geq 2$）は極大イデアルに含まれる：$(n) \subset (p)$ となる素数 $p$ が $n$ の素因数として存在する；$(p)$ が極大であることを確認)
  - Remark (非可換環への注意：可換環を仮定しないと左極大イデアルと右極大イデアルが異なる場合がある；本コースでは可換環に限定して議論する)

---

## Chapter 4: 多項式環と商体
**テーマ:** 整域の拡張と分数の構成

### §4.1 多項式環 $R[x]$
**内容:** 多項式環の構成と整域性の引き継ぎ

- **1. 多項式環の構成と基本性質**
  - Definition 4.1-1 (多項式環：可換環 $R$ 上の一変数多項式環 $R[x] = \{a_n x^n + \cdots + a_1 x + a_0 \mid a_i \in R, n \geq 0\}$；加法は係数ごと、乗法は積の展開で定義)
  - Proposition 4.1-1 ($R$ が整域ならば $R[x]$ も整域：$f, g \in R[x] \setminus \{0\}$ の最高次項の積は非零なので $\deg(fg) = \deg f + \deg g > 0$)
  - Proof ($f = a_m x^m + \cdots$、$g = b_n x^n + \cdots$（$a_m, b_n \neq 0$）のとき $fg$ の最高次係数は $a_m b_n \neq 0$（整域の条件）だから $fg \neq 0$)
  - Example 4.1-1 ($\mathbb{Z}[x]$ は整域：$(2x+1)(x-3) = 2x^2 - 5x - 3 \neq 0$；$(\mathbb{Z}/4\mathbb{Z})[x]$ では $2x \cdot 2x = 4x^2 = 0$ となり整域でない)

- **2. $R[x]$ の単元とイデアル**
  - Proposition 4.1-2 ($R$ が整域のとき $R[x]^\times = R^\times$：次数が 0 の可逆元のみが $R[x]$ で可逆)
  - Proof ($f \in R[x]^\times$ とすると $fg = 1$；$\deg f + \deg g = 0$ より $\deg f = \deg g = 0$ だから $f \in R$；$R$ での逆元が存在)
  - Example 4.1-2 ($\mathbb{Z}[x]^\times = \{1, -1\}$；$\mathbb{Q}[x]^\times = \mathbb{Q} \setminus \{0\}$；$(x-1)(x^2+x+1) = x^3-1$ を計算で確認して因数分解の正しさを検証)

### §4.2 多項式環の普遍性
**内容:** 代入準同型に基づく普遍性の整理

- **1. 代入準同型**
  - Theorem 4.2-1 (代入準同型：可換環 $R \subset S$ と $s \in S$ に対して、$\mathrm{ev}_s : R[x] \to S$、$\mathrm{ev}_s(f) = f(s)$ は環準同型（代入準同型）；$R$ 上の代入準同型は $s$ の選択で一意に定まる)
  - Proof (加法・乗法の準同型性を多項式の定義から直接確認する)
  - Example 4.2-1 ($\mathrm{ev}_i : \mathbb{Z}[x] \to \mathbb{C}$、$f(x) \mapsto f(i)$：$\ker(\mathrm{ev}_i) = (x^2+1)$；$f(i) = 0$ ならば $f(x) = (x^2+1)q(x)$ と書けることを確認)

- **2. 普遍性の定式化**
  - Theorem 4.2-2 (多項式環の普遍性：可換環 $R$ と $R$ を含む任意の可換環 $S$、任意の $s \in S$ に対して、$R$ 上の恒等写像と $x \mapsto s$ を満たす唯一の環準同型 $\phi : R[x] \to S$ が存在する)
  - Proof (代入準同型 $\mathrm{ev}_s$ がこの条件を満たすことと、$\phi(x) = s$ および準同型性から $\phi$ が一意に定まることを確認する)
  - Example 4.2-2 (多変数への拡張の予告：$R[x_1, \ldots, x_n]$ は $R[x_1, \ldots, x_{n-1}]$ に対して $x_n$ を加えた一変数多項式環として帰納的に構成できる；次章以降で詳述)
  - Remark (圏論的解釈：多項式環の普遍性は「$R$-代数の圏における自由対象」として圏論（3-15）的に定式化される)

### §4.3 商体（Field of Fractions）
**内容:** 整域に基づく分数体の一般構成と普遍性

- **1. 商体の構成**
  - Definition 4.3-1 (商体：整域 $D$ の商体 $\mathrm{Frac}(D)$ は $D \times (D \setminus \{0\})$ 上の同値関係 $(a,b) \sim (c,d) \Leftrightarrow ad = bc$ による同値類の全体；$a/b$ で同値類 $[(a,b)]$ を表し、加法 $a/b + c/d = (ad+bc)/(bd)$、乗法 $(a/b)(c/d) = (ac)/(bd)$ を定める)
  - Theorem 4.3-1 ($\mathrm{Frac}(D)$ は体：加法・乗法が well-defined かつ体の公理を満たし、$D$ から $\mathrm{Frac}(D)$ への単射環準同型 $\iota : a \mapsto a/1$ が存在する)
  - Proof (well-definedness：$(a,b) \sim (a',b')$ かつ $(c,d) \sim (c',d')$ のとき $a/b + c/d \sim a'/b' + c'/d'$ を $ad=a'b$ 等から確認；体の公理は各条件を分数の計算で順に確認する)
  - Example 4.3-1 ($\mathbb{Z}$ の商体は $\mathbb{Q}$：$\mathrm{Frac}(\mathbb{Z}) = \mathbb{Q}$；$3/4 + 1/2 = 5/4$ などの分数計算が定義に従って再現される；$\mathbb{Z}[x]$ の商体は有理関数体 $\mathbb{Q}(x) = \{f(x)/g(x) \mid f,g \in \mathbb{Z}[x], g \neq 0\}$)

- **2. 商体の普遍性**
  - Theorem 4.3-2 (商体の普遍性：体 $F$ への単射環準同型 $\phi : D \to F$ があれば $\tilde{\phi} : \mathrm{Frac}(D) \to F$、$\tilde{\phi}(a/b) = \phi(a)\phi(b)^{-1}$ を介して一意に分解する；$\tilde{\phi}$ は単射環準同型)
  - Proof (well-definedness：$(a,b) \sim (c,d)$ ならば $ad=bc$ より $\phi(a)\phi(d)=\phi(b)\phi(c)$；$\phi(b), \phi(d) \neq 0$ だから $\phi(a)\phi(b)^{-1} = \phi(c)\phi(d)^{-1}$；準同型性・単射性は直接計算)
  - Example 4.3-2 ($\mathbb{Z}[i]$ のガウス整数の商体：$\mathrm{Frac}(\mathbb{Z}[i]) = \mathbb{Q}(i) = \{a+bi \mid a,b \in \mathbb{Q}\}$；$(1+i)/(2-i) = (1+i)(2+i)/((2-i)(2+i)) = (1+3i)/5 \in \mathbb{Q}(i)$ を計算で確認)

### §4.4 局所化
**内容:** 積閉集合を用いた環の局所化の概要

- **1. 積閉集合と局所化の構成**
  - Definition 4.4-1 (積閉集合：環 $R$ の部分集合 $S$ が積閉（multiplicative）であるとは $1 \in S$ かつ $s, t \in S \Rightarrow st \in S$ であること)
  - Definition 4.4-2 (局所化：可換環 $R$ の積閉集合 $S$（$0 \notin S$）に対して $R \times S$ 上の同値関係 $(a,s) \sim (b,t) \Leftrightarrow u(at-bs) = 0$ となる $u \in S$ が存在することによる商環 $S^{-1}R$；$a/s$ で $[(a,s)]$ を表す)
  - Example 4.4-1 ($S = R \setminus \{0\}$ の場合は商体に一致；$S = \{1, 2, 4, 8, \ldots\} \subset \mathbb{Z}$（$2$ の冪全体）の局所化 $S^{-1}\mathbb{Z}$ は $2$ を分母に許した $\mathbb{Z}[1/2] = \{a/2^n \mid a \in \mathbb{Z}, n \geq 0\}$)

- **2. 素イデアルによる局所化**
  - Definition 4.4-3 (素イデアルでの局所化：素イデアル $P$ に対して $S = R \setminus P$ は積閉；$R_P = S^{-1}R$ を $P$ での局所化という)
  - Proposition 4.4-1 ($R_P$ の極大イデアルは $P \cdot R_P$：局所化により $P$ に対応するイデアルが唯一の極大イデアルとなり、$R_P$ は局所環になる)
  - Proof ($R_P$ のイデアル $\mathfrak{m} = \{a/s \mid a \in P, s \in S\}$ が極大であることと、$R_P \setminus \mathfrak{m} = (R_P)^\times$ を確認する)
  - Example 4.4-2 ($\mathbb{Z}_{(p)} = \{a/b \mid a,b \in \mathbb{Z}, p \nmid b\}$：$\mathbb{Z}$ の素イデアル $(p)$ での局所化；極大イデアルは $p\mathbb{Z}_{(p)}$；$3 \in \mathbb{Z}_{(5)}$ だが $5^{-1} \notin \mathbb{Z}_{(5)}$)
  - Remark (局所化の応用：可換環論（4-11）や代数幾何学（4-12）では、局所化が点の近傍の代数的性質を記述する基本道具となる)

---

## Chapter 5: ユークリッド整域（ED）
**テーマ:** 整数の一般化 I

### §5.1 ユークリッド整域の定義
**内容:** 除法の原理を利用可能な整域の概念

- **1. ユークリッド整域の定義と例**
  - Definition 5.1-1 (ユークリッド整域（ED）：整域 $D$ にノルム関数 $N : D \setminus \{0\} \to \mathbb{Z}_{\geq 0}$ が存在して、任意の $a \in D$、$b \in D \setminus \{0\}$ に対して $a = qb + r$（$r = 0$ または $N(r) < N(b)$）となる $q, r \in D$ が存在するとき $D$ を ED という)
  - Example 5.1-1 ($\mathbb{Z}$ は ED：$N(a) = |a|$；$7 = 2 \cdot 3 + 1$（$N(1) = 1 < 3 = N(3)$）；$-7 = (-3) \cdot 3 + 2$（$N(2) = 2 < 3$）を確認)
  - Example 5.1-2 (体 $F$ 上の多項式環 $F[x]$ は ED：$N(f) = \deg f$；多項式の除法アルゴリズムが成立；$x^3 - 1 = (x^2+x+1)(x-1) + 0$ を確認)

- **2. ED の具体的な性質**
  - Proposition 5.1-1 (ED では最大公約数が存在する：ユークリッドの互除法が適用できて gcd が計算できる；詳細は §5.3 で扱う)
  - Remark (ノルム関数の非一意性：ED のノルム関数は一意でない；$\mathbb{Z}$ では $N(a) = |a|$ のほか $N(a) = |a|^2$ なども使えるが、互除法が動く構造があることが本質)

### §5.2 ガウス整数環 $\mathbb{Z}[i]$
**内容:** ガウス整数環がユークリッド整域であることの解説

- **1. ガウス整数環の定義と基本性質**
  - Definition 5.2-1 (ガウス整数環：$\mathbb{Z}[i] = \{a + bi \mid a, b \in \mathbb{Z}\} \subset \mathbb{C}$；複素数の加法・乗法を環演算とする)
  - Proposition 5.2-1 ($\mathbb{Z}[i]$ は整域：$\mathbb{Z}[i] \subset \mathbb{C}$ で $\mathbb{C}$ は体だから零因子なし；あるいは $|z|^2 \cdot |w|^2 = |zw|^2$ からも確認)
  - Example 5.2-1 ($\mathbb{Z}[i]$ の単元：$N(a+bi) = a^2+b^2$ とすると $N(u) = 1 \Leftrightarrow u \in \{1, -1, i, -i\}$；積公式 $N(zw) = N(z)N(w)$ から可逆元のノルムが 1 であることを確認)

- **2. $\mathbb{Z}[i]$ の ED 性**
  - Theorem 5.2-1 ($\mathbb{Z}[i]$ はノルム $N(a+bi) = a^2+b^2$ を用いた ED：任意の $z, w \in \mathbb{Z}[i]$（$w \neq 0$）に対して $z/w \in \mathbb{C}$ に最も近いガウス整数 $q$ を取ると $z = qw + r$、$N(r) < N(w)$ が成立する)
  - Proof ($z/w = \alpha + \beta i$（$\alpha, \beta \in \mathbb{R}$）に対して最近整数 $q = m+ni$（$m = \mathrm{round}(\alpha)$、$n = \mathrm{round}(\beta)$）を選ぶ；$|(\alpha-m)| \leq 1/2$、$|(\beta-n)| \leq 1/2$ より $N(r) = N(z-qw) \leq (1/4+1/4)N(w) < N(w)$)
  - Example 5.2-2 ($\mathbb{Z}[i]$ での除法：$z = 7+2i$、$w = 2+i$ のとき $z/w = (7+2i)(2-i)/5 = (16-3i)/5 = 3.2 - 0.6i$；$q = 3$ を取ると $r = z - qw = (7+2i) - 3(2+i) = 1-i$；$N(1-i) = 2 < 5 = N(2+i)$)

### §5.3 ユークリッドの互除法
**内容:** 最大公約数の一般的な計算方法

- **1. 最大公約数の一般定義**
  - Definition 5.3-1 (最大公約数：整域 $D$ の元 $a$, $b$ の最大公約数 $\gcd(a, b)$ とは $(d)$ が $a$ と $b$ の両方を割り、$a$ と $b$ を割る任意の元が $d$ を割るような元 $d$；$\gcd$ は単元倍の自由度がある)
  - Theorem 5.3-1 (ユークリッドの互除法：ED では $\gcd(a, b)$ が求まる；$a = q_1 b + r_1$, $b = q_2 r_1 + r_2$, $\ldots$ とノルムが真に小さくなる列は有限で停止し、最後の 0 でない余りが $\gcd$)
  - Proof (列がノルムの減少列であることから有限性；$\gcd$ であることは「共通因子の集合が互除法の各ステップで不変」を帰納的に確認する)

- **2. ユークリッドの互除法の計算例**
  - Example 5.3-1 ($\mathbb{Z}$ での互除法：$\gcd(56, 36)$；$56 = 1 \cdot 36 + 20$；$36 = 1 \cdot 20 + 16$；$20 = 1 \cdot 16 + 4$；$16 = 4 \cdot 4 + 0$；よって $\gcd(56, 36) = 4$)
  - Example 5.3-2 ($\mathbb{Z}[i]$ での互除法：$\gcd(11, 3+2i)$ の計算；$11/(3+2i) = 11(3-2i)/13 \approx 2.54 - 1.69i$；$q = 3-2i$ と取ると $r = 11 - (3-2i)(3+2i) = 11 - 13 = -2$；$\gcd(3+2i, -2)$ を続けて計算)
  - Remark (ED における互除法の普遍性：$\mathbb{Z}$ の場合のアルゴリズムが整数をノルムに置き換えるだけで一般化される；この抽象化が ED の定義の動機)

---

## Chapter 6: 単項イデアル整域（PID）
**テーマ:** 整数の一般化 II

### §6.1 PID の定義
**内容:** すべてのイデアルが単一要素で生成される整域

- **1. PID の定義と例**
  - Definition 6.1-1 (単項イデアル整域（PID）：整域 $D$ で、すべてのイデアルが主イデアル（一元生成）であるもの；$D$ のすべてのイデアル $I$ に対して $I = (a)$ となる $a \in D$ が存在する)
  - Example 6.1-1 ($\mathbb{Z}$ は PID：$\mathbb{Z}$ の任意のイデアルは $(n) = n\mathbb{Z}$（$n \geq 0$）の形；これは整数論I（2-7）の結果を参照)
  - Example 6.1-2 (体 $F$ 上の多項式環 $F[x]$ は PID：任意のイデアル $I = (f)$ で次数最小の多項式 $f$ で生成される；$I = (x^2-1, x-1) = (x-1)$ を確認)

- **2. PID の非例**
  - Example 6.1-3 ($\mathbb{Z}[x]$ は PID でない：$(2, x) = \{2f + xg \mid f, g \in \mathbb{Z}[x]\}$ が主イデアルでないことを確認；$d \in \mathbb{Z}[x]$ で $(d) = (2, x)$ とすると $d \mid 2$ かつ $d \mid x$ より $d = \pm 1$ だが $(1) = \mathbb{Z}[x] \neq (2, x)$)
  - Remark (次元の問題：$\mathbb{Z}[x]$ は「2 次元的」な構造をもつため PID の性質が失われる；可換環論（4-11）では Krull 次元の概念でこれが精密化される)

### §6.2 ED $\Rightarrow$ PID
**内容:** ユークリッド整域は PID であることの証明

- **1. ED から PID への包含**
  - Theorem 6.2-1 (ED ならば PID：ED $D$ の任意のイデアル $I \neq \{0\}$ に対して、$N$ 最小のイデアルの元 $d \in I$ を取ると $I = (d)$)
  - Proof ($I \ni d$ を $N(d)$ 最小とする；任意の $a \in I$ に対して $a = qd + r$ と ED の除法を適用；$r = a - qd \in I$ かつ $N(d)$ の最小性から $r = 0$；よって $a = qd \in (d)$)
  - Example 6.2-1 ($\mathbb{Z}$ での確認：イデアル $I = \{a \in \mathbb{Z} \mid 6 \mid a \text{ または } a = 0\} \cup \{a \mid 9 \mid a\}$ ではなく、$I = \{$ 6 と 9 を含む最小イデアル $\} = (3) = 3\mathbb{Z}$ であることを確認)

- **2. 逆が成立しない例**
  - Example 6.2-2 (PID だが ED でない例：$\mathbb{Z}[(1+\sqrt{-19})/2]$ は PID だが ED でないことが知られている；本コースでは証明を省略し、ED $\subsetneq$ PID の真包含関係を指摘する)
  - Remark (ED、PID、UFD の階層：次の Chapter 7 と合わせて ED $\subset$ PID $\subset$ UFD の真の包含関係が成立する)

### §6.3 PID における素イデアル
**内容:** 非零素イデアルが極大イデアルとなる性質

- **1. PID での素イデアルと極大イデアルの一致**
  - Theorem 6.3-1 (PID における非零素イデアルは極大：PID $D$ の素イデアル $P \neq (0)$ は極大イデアル)
  - Proof ($P = (p)$ と書く；$P \subset I = (a)$ とすると $p \in (a)$ より $p = ab$；$P$ が素イデアルだから $a \in P$ または $b \in P$；$a \in P$ なら $(a) \subset P$ より $I = P$；$b \in P$ なら $b = pc$ で $p = apc$ より $ap = 1$ となり $I = D$)
  - Example 6.3-1 ($\mathbb{Z}$ での確認：$(3)$ は素イデアルかつ極大イデアル；$(0)$ は素イデアルだが極大でない（$(3) \supsetneq (0)$）；PID において $(0)$ の扱いが特別であることを確認)

- **2. PID の素元と既約元**
  - Definition 6.3-1 (既約元：整域 $D$ の元 $p$（$0$ でなく単元でない）が既約であるとは $p = ab \Rightarrow a$ または $b$ が単元であること)
  - Proposition 6.3-1 (PID では素元と既約元が一致する：$p$ が素元（$p \mid ab \Rightarrow p \mid a$ または $p \mid b$）$\Leftrightarrow$ $p$ が既約元（PID に限定）)
  - Proof ($\Rightarrow$：$p = ab$ とすると $p \mid ab$ より $p \mid a$；$a = pc$ で $p = pcb$ より $cb = 1$（$b$ は単元）；$\Leftarrow$：$(p)$ が素イデアルであることを PID の性質から示す）
  - Example 6.3-2 ($\mathbb{Z}[x]$ では同値が成立しない：$2$ は $\mathbb{Z}[x]$ で既約だが素元でない（$(2)$ は素イデアルでない；$2 \mid (x^2+1)(x^2+1)$ は成立しないが、$2 \mid 2 \cdot x = 2x$ を満たさない方向で確認）)

### §6.4 ベズーの等式
**内容:** 最大公約数の線形結合の保証

- **1. ベズーの等式とその証明**
  - Theorem 6.4-1 (ベズーの等式：PID $D$ の元 $a, b$ に対して $d = \gcd(a,b)$ は $d = sa + tb$（$s, t \in D$）と線形結合で表せる；$da + b$ のイデアルは $(d)$ に一致する)
  - Proof ($(a, b) = (a) + (b)$ は PID だから主イデアル $(d)$ に等しい；$d \in (a) + (b)$ より $d = sa + tb$ の形で書ける；$a, b \in (d)$ より $d \mid a$ かつ $d \mid b$ なので $d$ は公約数；任意の公約数が $d$ を割ることは $(d) = (a,b)$ の最小性から確認)
  - Example 6.4-1 ($\mathbb{Z}$ でのベズーの等式：$\gcd(56, 36) = 4$；互除法の各ステップを逆向きに代入：$4 = 20 - 16 = 20 - (36-20) = 2 \cdot 20 - 36 = 2(56-36) - 36 = 2 \cdot 56 - 3 \cdot 36$；$4 = 2 \cdot 56 - 3 \cdot 36$ を確認)

- **2. ベズーの等式の応用**
  - Proposition 6.4-1 ($a$ と $b$ が互いに素 $\Leftrightarrow$ $sa + tb = 1$ となる $s, t$ が存在：$\gcd(a,b) = 1$ とベズーの等式の直接の言い換え)
  - Proof (ベズーの等式 $d = sa+tb$；$d=1$ のとき $1 = sa+tb$；逆に $1 = sa+tb$ ならば $d \mid 1$ より $d$ は単元)
  - Example 6.4-2 ($\mathbb{Z}[i]$ でのベズーの等式：$\gcd(3+i, 1+3i)$ の計算；$(3+i)(1-3i) = 6-8i$；$\gcd = 1+i$（$N = 2$）であり $s(3+i)+t(1+3i) = 1+i$ となる $s, t \in \mathbb{Z}[i]$ を具体的に求める)

---

## Chapter 7: 一意分解整域（UFD）
**テーマ:** 素因数分解の一意性

### §7.1 既約元と素元
**内容:** 既約元と素元の定義、PID での一致的性質

- **1. 素元と既約元の定義の比較**
  - Definition 7.1-1 (素元：整域 $D$ の元 $p$（$0$ でなく単元でない）が素元であるとは $(p)$ が素イデアル、すなわち $p \mid ab \Rightarrow p \mid a$ または $p \mid b$)
  - Proposition 7.1-1 (素元は既約元：整域において素元ならば必ず既約元；逆は一般に成立しない)
  - Proof ($p = ab$ とすると $p \mid ab$；素性から $p \mid a$ または $p \mid b$；$p \mid a$ なら $a = pc$ で $p = pcb$ より $cb = 1$（$b$ は単元）；同様に $p \mid b$ なら $a$ が単元)
  - Example 7.1-1 ($\mathbb{Z}[\sqrt{-5}]$ での反例：$p = 2+\sqrt{-5}$ は既約だが素元でない；$9 = 3 \cdot 3 = (2+\sqrt{-5})(2-\sqrt{-5})$ の二通りの分解と、$p \mid 9$ だが $p \nmid 3$ であることをノルムで確認)

- **2. UFD における既約元の素元性**
  - Remark (UFD では既約元が素元になる：UFD の定義（§7.2）のもとでは逆も成立する；$\mathbb{Z}[\sqrt{-5}]$ が UFD でないことも同じ例が示す；整数論II（4-14）への接続)

### §7.2 UFD の定義
**内容:** 分解の存在と（単元を除いた）一意性が保たれる整域

- **1. UFD の公理**
  - Definition 7.2-1 (一意分解整域（UFD）：整域 $D$ が UFD であるとは、(i) $D$ の任意の非零非単元元が既約元の有限積 $p_1 \cdots p_n$ に分解できる；(ii) 分解は単元倍と順序の違いを除いて一意：$p_1 \cdots p_n = u \cdot q_1 \cdots q_m$ ならば $n = m$ かつ（並べ替えて）$p_i = u_i q_i$（$u_i$ は単元）)
  - Example 7.2-1 ($\mathbb{Z}$ は UFD：$60 = 2^2 \cdot 3 \cdot 5$ の分解は単元 $\pm 1$ の自由度を除いて一意；$-60 = (-1) \cdot 2^2 \cdot 3 \cdot 5$ は同じ分解と見なす)
  - Example 7.2-2 ($\mathbb{Z}[\sqrt{-5}]$ は UFD でない：$6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$ の 2 通りの分解；$2$, $3$, $1 \pm \sqrt{-5}$ は互いに連結でない既約元であることをノルムで確認)

- **2. UFD での素元・既約元の同値性**
  - Theorem 7.2-1 (UFD では素元と既約元が一致：$D$ が UFD $\Rightarrow$ $p$ が既約元 $\Leftrightarrow$ $p$ が素元)
  - Proof (素元 $\Rightarrow$ 既約元は §7.1 で証明済；既約元 $\Rightarrow$ 素元：$p \mid ab$ とし $ab = pc$；UFD で分解の一意性から $p$ は $a$ か $b$ の分解に現れる)
  - Example 7.2-3 ($\mathbb{Z}$ での確認：$5 \mid 15 = 3 \cdot 5$；$5$ の素性：$5 \mid 15 \Rightarrow 5 \mid 5$；$5 \mid 10 = 2 \cdot 5 \Rightarrow 5 \mid 5$（すべて既約元かつ素元）)

### §7.3 PID $\Rightarrow$ UFD
**内容:** PID が必ず一意分解の性質を持つことの証明

- **1. 分解の存在（PID で既約分解が常に存在すること）**
  - Lemma 7.3-1 (PID では昇鎖条件が成立（ACC）：$(a_1) \subset (a_2) \subset \cdots$ の昇鎖は有限で停止する；これは §9 のネーター性の先触れ)
  - Proof ($\bigcup (a_n)$ は PID のイデアルなので $(a)$ の形；$a \in (a_N)$ となる $N$ が存在し、$(a_n) = (a)$（$n \geq N$）)
  - Proposition 7.3-1 (PID では既約分解の存在：ACC のもとで、任意の非零非単元元は既約元の積に分解できる（無限分解は停止条件で否定）)
  - Proof (仮定の下で既約元でない $a$ が存在すれば $a = bc$（$b$, $c$ 非単元）と分解でき、$(a) \subsetneq (b)$；繰り返すと昇鎖ができ ACC に矛盾)

- **2. 分解の一意性**
  - Theorem 7.3-1 (PID $\Rightarrow$ UFD：PID の非零非単元元の既約分解は単元倍と順序を除いて一意)
  - Proof (§6.3 より PID では既約元は素元；$p_1 \cdots p_n = q_1 \cdots q_m$ とすると $p_1 \mid q_1 \cdots q_m$ で素性から $p_1$ はある $q_k$ を割る；$p_1$ と $q_k$ は共に既約だから $p_1 = u q_k$（単元倍）；両辺を割って帰納法)
  - Example 7.3-1 ($\mathbb{Z}[i]$ は UFD：$\mathbb{Z}[i]$ は ED $\Rightarrow$ PID $\Rightarrow$ UFD；$5 = (2+i)(2-i)$ が $\mathbb{Z}[i]$ での UFD 分解；$2+i$ と $2-i$ は $\mathbb{Z}[i]$ では既約元かつ素元であることをノルムで確認)

### §7.4 最大公約数の存在
**内容:** UFD 内で定義される最大公約数の概念

- **1. UFD での gcd の定義と構成**
  - Proposition 7.4-1 (UFD での最大公約数の存在：UFD $D$ の元 $a, b$ に対して $\gcd(a, b)$ が常に存在する；$a = u \prod p_i^{e_i}$、$b = v \prod p_i^{f_i}$ と素因数分解すれば $\gcd(a,b) = \prod p_i^{\min(e_i, f_i)}$)
  - Proof (素因数分解の一意性（UFD の定義）から、gcd の定義が well-defined であることを確認；$\gcd$ が $a$ と $b$ を割り、$a$ と $b$ の任意の公約数が $\gcd$ を割ることを指数の比較から示す)
  - Example 7.4-1 ($\mathbb{Z}[i]$ での gcd：$\gcd(6, 4+2i) = ?$；$6 = -i(1+i)^2 \cdot 3$、$4+2i = 2(2+i) = -i(1+i)^2(2+i)$；$\gcd = (1+i)^2 = 2i$（単元倍を除いて $2$）を計算)

- **2. PID と UFD での gcd の比較**
  - Remark (PID では gcd はベズーの等式で表せる：PID では $(a, b) = (\gcd(a,b))$ なのでベズーの等式が成立；一般の UFD では gcd は存在するが線形結合表示は保証されない)
  - Example 7.4-2 ($\mathbb{Z}[x]$ での gcd：$\gcd(2x, x^2) = x$；$\mathbb{Z}[x]$ は UFD だが PID でないので $x = s \cdot 2x + t \cdot x^2$ となる $s, t \in \mathbb{Z}[x]$ は存在しない（$x$ の係数を評価すると矛盾）)

### §7.5 整域のクラスの包含関係
**内容:** 体、ED、PID、UFD、整域の包含関係の総括

- **1. 包含関係のまとめ**
  - Theorem 7.5-1 (整域の階層構造：体 $\subsetneq$ ED $\subsetneq$ PID $\subsetneq$ UFD $\subsetneq$ 整域 が成立する)
  - Proof (体 $\Rightarrow$ ED：ノルムをすべて 0 とする；ED $\Rightarrow$ PID：§6.2 で証明済；PID $\Rightarrow$ UFD：§7.3 で証明済；UFD $\Rightarrow$ 整域：定義より)

- **2. 逆が成り立たない例（反例）**
  - Example 7.5-1 (ED だが体でない：$\mathbb{Z}$ は ED だが体でない)
  - Example 7.5-2 (PID だが ED でない：$\mathbb{Z}[(1+\sqrt{-19})/2]$ （証明は省略し事実として紹介）)
  - Example 7.5-3 (UFD だが PID でない：$\mathbb{Z}[x]$ や $\mathbb{Q}[x, y]$ など。イデアル $(2, x)$ や $(x, y)$ が単項生成でないため)
  - Example 7.5-4 (整域だが UFD でない：$\mathbb{Z}[\sqrt{-5}]$。$6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$ のように一意分解が破綻するため)

---

## Chapter 8: 多項式環の性質と因数分解
**テーマ:** 既約性の判定

### §8.1 多変数多項式環 $R[x_1, \ldots, x_n]$
**内容:** 多変数化への拡張と多項式環の構造

- **1. 多変数多項式環の構成**
  - Definition 8.1-1 (多変数多項式環：$R[x_1, \ldots, x_n] = R[x_1, \ldots, x_{n-1}][x_n]$；帰納的な構成；単項式 $x_1^{e_1} \cdots x_n^{e_n}$（$e_i \geq 0$）の有限線形結合からなる)
  - Example 8.1-1 ($\mathbb{Z}[x, y]$：$2x^2y - 3xy + 5$ は $\mathbb{Z}[x,y]$ の元；$(x+y)(x-y) = x^2-y^2$ を乗法として計算)
  - Proposition 8.1-1 ($R$ が整域ならば $R[x_1,\ldots,x_n]$ も整域：$R[x_1]$ が整域（§4.3）で、帰納的に $R[x_1,\ldots,x_k]$ が整域ならば $R[x_1,\ldots,x_{k+1}]$ も整域)
  - Proof (帰納法；$R[x_1,\ldots,x_{k+1}] = R[x_1,\ldots,x_k][x_{k+1}]$ と §4.3 の命題を繰り返す)

- **2. 多変数の既約性**
  - Example 8.1-2 ($x^2 + y^2 - 1$ の既約性：$\mathbb{R}[x,y]$ では $x^2+y^2-1 = (x+iy-1)(x-iy-1)$ のように $\mathbb{C}[x,y]$ では分解するが $\mathbb{R}[x,y]$ では既約；係数環の選択が因数分解の結果に影響する)
  - Remark (多変数多項式環は PID でない：$\mathbb{Z}[x,y]$ では $(x,y)$ が非主イデアルである（§6.1 の $\mathbb{Z}[x]$ の議論と同様）；UFD であるかは §8.3 で確認する)

### §8.2 ガウスの補題
**内容:** 原始多項式の積公式や分数上の既約性判定

- **1. 原始多項式とガウスの補題**
  - Definition 8.2-1 (原始多項式：UFD $D$ 上の多項式 $f \in D[x]$ が原始的（primitive）であるとは、$f$ の全係数の gcd が単元であること；$\gcd(a_0, a_1, \ldots, a_n) \sim 1$)
  - Theorem 8.2-1 (ガウスの補題：UFD $D$ 上の原始多項式の積も原始多項式；$f$, $g$ が原始的ならば $fg$ も原始的)
  - Proof (素元 $p \in D$ に対して $D/(p)$ は整域；$D/(p)[x]$ での $\bar{f}\bar{g} = \overline{fg}$；$\bar{f} \neq 0$ かつ $\bar{g} \neq 0$ ならば $\overline{fg} \neq 0$；よって $p \nmid fg$ のすべての係数の gcd)
  - Example 8.2-1 (ガウスの補題の応用：$f = 2x^2 + 3x + 4$、$g = 5x - 7$ は両方 $\mathbb{Z}[x]$ で原始的；$fg = 10x^3 - x^2 - x - 28$ の係数の gcd は 1 で原始的であることを確認)

- **2. $\mathbb{Q}[x]$ での因数分解との関係**
  - Theorem 8.2-2 (ガウスの補題の系：原始多項式 $f \in \mathbb{Z}[x]$ が $\mathbb{Q}[x]$ で因数分解できるならば $\mathbb{Z}[x]$ でも因数分解できる；$f = gh$（$g, h \in \mathbb{Q}[x]$）ならば適切な有理数倍で $f = \tilde{g}\tilde{h}$（$\tilde{g}, \tilde{h} \in \mathbb{Z}[x]$）)
  - Proof (内容（content）の概念を用いて $c(fg) = c(f)c(g)$（ガウスの補題の言い換え）から導く；$f \in \mathbb{Z}[x]$ が原始的なら $c(f) = 1$ であり、$\mathbb{Q}[x]$ での分解を整数係数に持ち込める)
  - Example 8.2-2 ($x^4 + 1$ の既約性：$\mathbb{Q}[x]$ での因数分解がないことを示すには $\mathbb{Z}[x]$ での次数 1、2 への分解がないことを係数比較で確認すれば十分)

### §8.3 $R$ が UFD $\Rightarrow$ $R[x]$ も UFD
**内容:** 多項式環の一意分解性の継承

- **1. $R[x]$ の UFD 性の証明**
  - Theorem 8.3-1 ($R$ が UFD ならば $R[x]$ も UFD：既約分解の存在と一意性の両方が成立)
  - Proof (存在：$f \in R[x]$ を $f = c \cdot f_0$（$c = c(f) \in R$、$f_0$ 原始的）と内容分解；$c$ は $R$ の UFD 性で分解；$f_0$ は $\mathrm{Frac}(R)[x]$（体上多項式環、PID）で分解し、ガウスの補題で $R[x]$ に引き戻す；一意性もガウスの補題から)
  - Example 8.3-1 ($\mathbb{Z}[x]$ は UFD：$\mathbb{Z}$ が UFD なので $\mathbb{Z}[x]$ も UFD；$6x^2 - 6 = 2 \cdot 3 \cdot (x+1)(x-1)$ が UFD 分解；$2$, $3$, $x+1$, $x-1$ がそれぞれ $\mathbb{Z}[x]$ の既約元)

- **2. 多変数への帰納的拡張**
  - Proposition 8.3-1 (帰納的拡張：$R$ が UFD ならば $R[x_1, \ldots, x_n]$ も UFD；定理 8.3-1 を $n$ 回繰り返す)
  - Proof ($R[x_1, \ldots, x_n] = R[x_1, \ldots, x_{n-1}][x_n]$ に定理を帰納的に適用する)
  - Example 8.3-2 ($\mathbb{Z}[x, y]$ は UFD：$\mathbb{Z}$ が UFD なので $\mathbb{Z}[x]$ が UFD（Theorem 8.3-1）、さらに $\mathbb{Z}[x, y] = \mathbb{Z}[x][y]$ に再度適用；$xy + 2$ は $\mathbb{Z}[x, y]$ で既約であることを係数比較で確認)
  - Remark (UFD だが PID でない多変数多項式環：$\mathbb{Z}[x, y]$ は UFD だが $(x, y)$ は非主イデアルなので PID でない；UFD $\subsetneq$ PID の逆包含が成立しない別例)

### §8.4 アイゼンシュタインの判定法
**内容:** 強力な既約性判定条件と応用的な使用例

- **1. アイゼンシュタインの判定法**
  - Theorem 8.4-1 (アイゼンシュタインの判定法：UFD $D$ の素元 $p$ について、原始多項式 $f = a_n x^n + \cdots + a_0 \in D[x]$ が $p \mid a_i$（$i < n$）、$p \nmid a_n$、$p^2 \nmid a_0$ を満たすならば $f$ は $D[x]$ で既約)
  - Proof ($\mathrm{Frac}(D)[x]$ での既約性を示す；$f = gh$（次数 $< n$）と仮定；$p \mid a_0$ の条件から $D/(p)[x]$ での $\bar{f} = \bar{a}_n x^n$ より $\bar{g} = \bar{u}x^s$、$\bar{h} = \bar{v}x^t$（$s+t=n$）；$p \mid g$ の定数項と $p \mid h$ の定数項、$p^2 \nmid a_0$ で矛盾)

- **2. アイゼンシュタイン判定法の応用**
  - Example 8.4-1 (円分多項式の既約性：$\Phi_p(x) = x^{p-1} + x^{p-2} + \cdots + 1$（$p$ 素数）；$\Phi_p(x+1) = \sum_{k=0}^{p-1} \binom{p}{k+1} x^k$ の定数項は $p$、最高次係数は $1$、$\Phi_p(x+1)$ の $k < p-1$ 次係数は $\binom{p}{k+1}$ で $p$ の倍数；アイゼンシュタイン適用で $\Phi_p(x+1)$ が $\mathbb{Q}[x]$ で既約)
  - Example 8.4-2 ($x^4 - 2$ の既約性：$p = 2$ に対してアイゼンシュタインを適用；$2 \mid 0$（$x^3, x^2, x$ の係数）、$2 \nmid 1$（最高次）、$4 \nmid 2$（定数項）；よって $x^4 - 2$ は $\mathbb{Q}[x]$ で既約)
  - Remark (体論（3-10）への接続：$\mathbb{Q}[x]/(x^4-2)$ は $\mathbb{Q}(\sqrt[4]{2})$ と同型な体拡大であり、アイゼンシュタイン判定法は体拡大の既約性の研究で中心的な役割を果たす)

---

## Chapter 9: ネーター環
**テーマ:** イデアルの有限生成性

### §9.1 昇鎖条件（ACC）
**内容:** イデアルの昇順列が停止する条件の定式化

- **1. 昇鎖条件の定義と同値条件**
  - Definition 9.1-1 (昇鎖条件（ACC）：環 $R$ がイデアルに関する昇鎖条件を満たすとは、イデアルの増大列 $I_1 \subset I_2 \subset \cdots$ が常に有限で停止する（ある $N$ で $n \geq N$ ならば $I_n = I_N$）こと)
  - Proposition 9.1-1 (ACC と有限生成の同値：可換環 $R$ について「すべてのイデアルが有限生成」$\Leftrightarrow$ ACC が成立)
  - Proof ($\Rightarrow$：ACC の列 $I_1 \subset I_2 \subset \cdots$ の和 $I = \bigcup I_n$ は有限生成だから $I = (a_1, \ldots, a_k)$；各 $a_i \in I_{N_i}$ なので $N = \max N_i$ で $I = I_N$；$\Leftarrow$：$I$ が有限生成でないとすると ACC に反する増大列が作れる)
  - Example 9.1-1 ($\mathbb{Z}$ は ACC を満たす：$(n_1) \subset (n_2) \subset \cdots$ は $n_1 \mid n_2 \mid \cdots$ と同値；正整数の降下列は有限；例 $(12) \subset (6) \subset (3) \subset (1) = \mathbb{Z}$（これ以上は拡大しない）)

- **2. ACC の非例**
  - Example 9.1-2 ($\mathbb{Z}[x_1, x_2, \ldots]$（無限変数多項式環）は ACC を満たさない：$(x_1) \subsetneq (x_1, x_2) \subsetneq (x_1, x_2, x_3) \subsetneq \cdots$ が止まらない昇鎖を与える)
  - Remark (ACC の重要性：環論や代数幾何の多くの定理は「有限生成」の条件を前提とする；ヒルベルトの基底定理（§9.3）はその代表例)

### §9.2 ネーター環の定義
**内容:** すべてのイデアルの有限生成性と昇鎖条件との同値性

- **1. ネーター環の定義と例**
  - Definition 9.2-1 (ネーター環：ACC を満たす（同値に、すべてのイデアルが有限生成である）可換環をネーター環という；Emmy Noether に由来する)
  - Example 9.2-1 ($\mathbb{Z}$ はネーター環：PID はすべてイデアルが主イデアル（1元生成）だからネーター環；$\mathbb{Z}/n\mathbb{Z}$ もネーター環（有限環なので自動的に ACC が成立）)
  - Example 9.2-2 (体はネーター環：イデアルは $\{0\}$ と $F$ のみなので ACC は自明に成立；$\mathbb{Q}[x, y]$ はネーター環（ヒルベルトの基底定理より）)

- **2. ネーター環の基本性質**
  - Proposition 9.2-1 (ネーター環の剰余環・局所化はネーター：$R$ がネーター、$I$ がイデアルのとき $R/I$ もネーター；$S^{-1}R$ もネーター)
  - Proof ($R/I$ のイデアルは $R$ の $I$ を含むイデアルに対応；$R$ の ACC が $R/I$ の ACC を誘導；$S^{-1}R$ のイデアルは $S^{-1}I$（$I \subset R$ のイデアル）の形だから ACC は $R$ の ACC から従う)
  - Example 9.2-3 ($\mathbb{Z}[x]/(x^2-5) \cong \mathbb{Z}[\sqrt{5}]$ はネーター環：$\mathbb{Z}[x]$ がネーター環（次節のヒルベルトの基底定理）であり、その商環もネーター)

### §9.3 ヒルベルトの基底定理
**内容:** ネーター環係数の多項式環もネーター環であることの特性

- **1. ヒルベルトの基底定理**
  - Theorem 9.3-1 (ヒルベルトの基底定理：$R$ がネーター環ならば $R[x]$ もネーター環)
  - Proof ($R[x]$ のイデアル $I$ が有限生成であることを示す；$I$ の元の最高次係数全体 $L$ は $R$ のイデアルだからネーター性より $L = (a_1, \ldots, a_k)$；各 $a_i$ の最高次係数を実現する多項式 $f_i \in I$ を選ぶ；$\deg f_i \leq n$ として $I \cap R_{<n}[x]$ の有限生成性を補って $I = (f_1, \ldots, f_k, g_1, \ldots, g_m)$ と示す)
  - Example 9.3-1 ($\mathbb{Z}[x]$ はネーター環：$\mathbb{Z}$ がネーター（PID）なのでヒルベルトの定理より $\mathbb{Z}[x]$ もネーター；$\mathbb{Z}[x_1,\ldots,x_n]$ も帰納的にネーター；$(x_1, x_2, x_1 x_2 - 1)$ のような複雑なイデアルも有限生成)

- **2. ヒルベルトの基底定理の応用と意義**
  - Example 9.3-2 (代数多様体の有限性：$\mathbb{k}^n$（$\mathbb{k}$ は体）の代数的集合を定義する多項式系はイデアルに対応し、ネーター性から有限個の多項式方程式で記述できる；代数幾何（4-12）への接続)
  - Proposition 9.3-1 (ネーター環の有限生成代数拡大はネーター：体 $\mathbb{k}$ 上の有限生成可換環 $\mathbb{k}[a_1, \ldots, a_n]$ はネーター環)
  - Proof ($\mathbb{k}$ は体なのでネーター；ヒルベルトの基底定理を $n$ 回繰り返すと $\mathbb{k}[x_1,\ldots,x_n]$ がネーター；$\mathbb{k}[a_1,\ldots,a_n]$ はその商環だから命題 9.2-1 より)
  - Remark (可換環論（4-11）への展望：ネーター環はアティヤ-マクドナルドの可換環論の中心的対象であり、素イデアルのスペクトル・局所化・完備化などの深い理論が展開される)
