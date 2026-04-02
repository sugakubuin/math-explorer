# 3-7: 確率論I

**前提科目:** 3-3（測度論）

---

## Chapter 1: 確率空間
**テーマ:** 測度論的確率の基礎

### §1.1 標本空間と事象の代数
**内容:** 標本空間・事象族の集合代数的構造と確率論的解釈

- **1. 標本空間と事象**
  - Definition 1.1-1 (標本空間：試行の全ての結果の集合 $\Omega$；各元 $\omega \in \Omega$ を根元事象という)
  - Definition 1.1-2 (事象：$\Omega$ の部分集合；事象族 $\mathcal{F} \subset 2^\Omega$ の元を事象という；和事象 $A \cup B$、積事象 $A \cap B$、余事象 $A^c$ が確率論的意味を持つ)
  - Example 1.1-1 (サイコロ投げ：$\Omega = \{1,2,3,4,5,6\}$；「偶数が出る」事象は $A = \{2,4,6\}$；$A^c = \{1,3,5\}$（奇数が出る）；$A \cup \{1\} = \{1,2,4,6\}$ などを確認)
  - Example 1.1-2 (連続試行：コインを無限回投げる場合 $\Omega = \{0,1\}^\mathbb{N}$；「初めて表が出るのが $n$ 回目」という事象は $\Omega$ の部分集合として定式化できることの確認)
  - Remark (集合論との対応：$A \cup B$（少なくとも一方が起きる）、$A \cap B$（両方起きる）、$A^c$（起きない）という確率論の言葉が集合演算と完全に対応する)

- **2. 事象の極限**
  - Definition 1.1-3 (上極限事象・下極限事象：$\limsup_n A_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k$（事象列の無限回起こる事象）；$\liminf_n A_n = \bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k$（有限個の例外を除いて起こる事象）)
  - Example 1.1-3 (上下極限の確認：$A_n = (0, 1/n)$（実数直線の部分集合）のとき $\limsup A_n = \{0\}$、$\liminf A_n = \emptyset$ となることを直接計算で確認)

### §1.2 $\sigma$-加法族の定義と例
**内容:** $\sigma$-加法族の公理・生成・ボレル $\sigma$-加法族

- **1. $\sigma$-加法族の定義**
  - Definition 1.2-1 ($\sigma$-加法族：$\Omega$ 上の集合族 $\mathcal{F}$ が (i) $\Omega \in \mathcal{F}$；(ii) $A \in \mathcal{F} \Rightarrow A^c \in \mathcal{F}$；(iii) $A_n \in \mathcal{F}$（$n \geq 1$）$\Rightarrow \bigcup_{n=1}^\infty A_n \in \mathcal{F}$ を満たすとき $\sigma$-加法族という；$(\Omega, \mathcal{F})$ を可測空間という)
  - Example 1.2-1 ($\sigma$-加法族の例：最小の $\{\emptyset, \Omega\}$；最大の $2^\Omega$；$A \subset \Omega$ から生成される $\{\emptyset, A, A^c, \Omega\}$；それぞれが公理 (i)-(iii) を満たすことの確認)
  - Remark (測度論との接続：3-3 で学んだ $\sigma$-加法族の定義がそのまま確率論の基盤となる；「どの事象に確率を定義できるか」を決める集合族)

- **2. 生成された $\sigma$-加法族とボレル族**
  - Definition 1.2-2 (生成 $\sigma$-加法族：集合族 $\mathcal{G}$ を含む最小の $\sigma$-加法族 $\sigma(\mathcal{G})$；$\mathcal{G}$ を生成系という)
  - Definition 1.2-3 (ボレル $\sigma$-加法族：$\mathbb{R}$ の開集合系から生成された $\sigma$-加法族 $\mathcal{B}(\mathbb{R})$；開区間・閉区間・半開区間などすべてが $\mathcal{B}(\mathbb{R})$ に属する)
  - Example 1.2-2 (ボレル族の生成：$\mathcal{B}(\mathbb{R}) = \sigma(\{(a,b) \mid a < b\}) = \sigma(\{(-\infty, x] \mid x \in \mathbb{R}\})$；どの生成系を使っても同じ $\sigma$-加法族が得られることの確認)

### §1.3 確率測度の定義と基本性質
**内容:** コルモゴロフの公理と確率測度の基本性質

- **1. 確率測度の定義**
  - Definition 1.3-1 (確率測度：可測空間 $(\Omega, \mathcal{F})$ 上の関数 $P : \mathcal{F} \to [0,1]$ が (i) $P(\Omega) = 1$；(ii) 互いに素な $A_n \in \mathcal{F}$ に対して $P(\bigcup A_n) = \sum P(A_n)$（$\sigma$-加法性）を満たすとき確率測度という；$(\Omega, \mathcal{F}, P)$ を確率空間という)
  - Example 1.3-1 (有限標本空間の確率：$\Omega = \{1,\ldots,6\}$ 上の一様分布 $P(\{k\}) = 1/6$；$\sigma$-加法性から $P(A) = |A|/6$ が導かれることの確認)
  - Example 1.3-2 (連続分布：$\Omega = \mathbb{R}$、$\mathcal{F} = \mathcal{B}(\mathbb{R})$ 上で $P(A) = \int_A f(x)\,dx$（$f \geq 0$、$\int f\,dx = 1$）；$\sigma$-加法性は測度論（3-3）の可算加法性から従う)

- **2. 確率測度の基本性質**
  - Proposition 1.3-1 (基本性質：(i) $P(\emptyset) = 0$；(ii) 有限加法性；(iii) 単調性 $A \subset B \Rightarrow P(A) \leq P(B)$；(iv) 劣加法性 $P(A \cup B) \leq P(A) + P(B)$；(v) 包除原理 $P(A \cup B) = P(A) + P(B) - P(A \cap B)$)
  - Proof ($\sigma$-加法性と $P(\Omega) = 1$ から各性質を導く；(ii) は有限個の互いに素な和への分解で確認；(iv) は $A \cup B = A \cup (B \setminus A)$ の分解を利用)
  - Theorem 1.3-1 (確率測度の連続性：単調増加列 $A_1 \subset A_2 \subset \cdots$ に対して $P(\bigcup A_n) = \lim_{n\to\infty} P(A_n)$；単調減少列 $B_1 \supset B_2 \supset \cdots$ に対して $P(\bigcap B_n) = \lim_{n\to\infty} P(B_n)$)
  - Proof (3-3 §1.2 の測度の連続性定理と同一の証明；$P(\Omega) = 1 < \infty$ だから上連続性の仮定も自動的に満たされる)
  - Example 1.3-3 (連続性の確認：$A_n = (0, 1/n)$ のとき $P(A_n) \to P(\emptyset) = 0$；$B_n = [0, 1/n]$ のとき $P(B_n) \to P(\{0\})$ となることを一様分布で確認)

### §1.4 条件付き確率とベイズの定理
**内容:** 条件付き確率の定義・乗法定理・全確率の公式・ベイズの定理

- **1. 条件付き確率**
  - Definition 1.4-1 (条件付き確率：$P(B) > 0$ のとき $P(A \mid B) = P(A \cap B)/P(B)$；事象 $B$ が起きたという情報のもとでの $A$ の確率)
  - Example 1.4-1 (サイコロの条件付き確率：「偶数が出た」という条件 $B = \{2,4,6\}$ のもとで「4 以上が出る」$A = \{4,5,6\}$ の確率；$P(A \cap B) = P(\{4,6\}) = 1/3$、$P(B) = 1/2$ から $P(A \mid B) = 2/3$)
  - Proposition 1.4-1 (乗法定理：$P(A \cap B) = P(A \mid B)P(B)$；$n$ 事象への拡張 $P(A_1 \cap \cdots \cap A_n) = P(A_1)P(A_2 \mid A_1)\cdots P(A_n \mid A_1 \cap \cdots \cap A_{n-1})$)
  - Proof (条件付き確率の定義から直ちに従う)

- **2. 全確率の公式とベイズの定理**
  - Theorem 1.4-1 (全確率の公式：$\{B_i\}$ が $\Omega$ の分割（互いに素で和が $\Omega$）のとき $P(A) = \sum_i P(A \mid B_i)P(B_i)$)
  - Proof ($A = \bigcup_i (A \cap B_i)$ と可算加法性・乗法定理を組み合わせる)
  - Theorem 1.4-2 (ベイズの定理：$P(B_j \mid A) = \frac{P(A \mid B_j)P(B_j)}{\sum_i P(A \mid B_i)P(B_i)}$；$P(B_j)$ を事前確率、$P(B_j \mid A)$ を事後確率という)
  - Proof (条件付き確率の定義と全確率の公式を組み合わせる)
  - Example 1.4-2 (疾患検査の例：有病率 $P(D) = 0.01$、検査感度 $P(+ \mid D) = 0.99$、特異度 $P(- \mid D^c) = 0.95$；陽性時の有病確率 $P(D \mid +)$ をベイズの定理で計算すると約 $0.167$；直感と乖離することの確認)
  - Remark (ベイズ統計学への接続：ベイズの定理は事前情報を観測データで更新する「ベイズ更新」の基礎；機械学習・統計的推定の中心的ツールとなる（詳細は数理統計学（4-15）で扱う）)

---

## Chapter 2: 確率変数と分布
**テーマ:** 可測関数としての確率変数と各種分布の理論

### §2.1 確率変数の定義
**内容:** 確率変数の厳密な定義と変換

- **1. 可測関数としての確率変数**
  - Definition 2.1-1 (確率変数：確率空間 $(\Omega, \mathcal{F}, P)$ から可測空間 $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ への可測関数 $X : \Omega \to \mathbb{R}$；すなわち任意の $B \in \mathcal{B}(\mathbb{R})$ に対して $X^{-1}(B) \in \mathcal{F}$)
  - Example 2.1-1 (サイコロの確率変数：$\Omega = \{1,\ldots,6\}$、$X(\omega) = \omega$（目の数）；$X^{-1}(\{3\}) = \{3\} \in \mathcal{F}$ などが確かめられる；$Y = X^2$（目の数の 2 乗）も確率変数)
  - Remark (可測性の必要性：$X^{-1}(B) \in \mathcal{F}$ でなければ $P(X \in B)$ という量が定義できない；「確率が計算できる事象が $\mathcal{F}$ に属する」という要件の反映)

- **2. 確率変数の変換と演算**
  - Proposition 2.1-1 (確率変数の演算：$X, Y$ が確率変数のとき $X + Y$、$XY$、$f(X)$（$f : \mathbb{R} \to \mathbb{R}$ が $\mathcal{B}$-可測）も確率変数)
  - Proof (可測関数の合成・和・積の可測性は 3-3 の議論と同様；各逆像が $\mathcal{F}$ に属することを確認)
  - Example 2.1-2 (指示関数：事象 $A \in \mathcal{F}$ の指示関数 $1_A(\omega) = 1$（$\omega \in A$）、$= 0$（$\omega \notin A$）は確率変数；$P(X \in B) = E[1_{X^{-1}(B)}]$ という形で確率が期待値として表せることの予告)

### §2.2 分布関数の定義と性質
**内容:** 累積分布関数の定義と特徴的な性質

- **1. 分布関数の定義**
  - Definition 2.2-1 (分布関数（CDF）：確率変数 $X$ の分布関数 $F_X(x) = P(X \leq x)$（$x \in \mathbb{R}$）)
  - Theorem 2.2-1 (分布関数の性質：(i) 単調非減少；(ii) 右連続 $\lim_{y \searrow x}F(y) = F(x)$；(iii) $\lim_{x\to-\infty}F(x) = 0$、$\lim_{x\to+\infty}F(x) = 1$；逆にこれら 3 条件を満たす関数は確率分布の CDF)
  - Proof (連続性定理（Theorem 1.3-1）を用いる；右連続性は $\{X \leq x + 1/n\}$ の減少列への適用から従う)
  - Example 2.2-1 (離散分布の CDF：$P(X = k) = (1/2)^k$（$k = 1, 2, \ldots$）の CDF は階段関数 $F(x) = 1 - (1/2)^{\lfloor x \rfloor}$（$x \geq 1$）；不連続点での右連続性を確認)

- **2. 分布の一意性**
  - Theorem 2.2-2 (分布の一意決定：$F_X = F_Y$ ならば $X$ と $Y$ は同じ分布を持つ；すなわち CDF が分布を一意に特徴づける)
  - Proof (半直線 $(-\infty, x]$ が生成する $\sigma$-加法族が $\mathcal{B}(\mathbb{R})$ に一致することから、CDF が全ボレル集合上の確率を一意に決める)

### §2.3 離散型確率変数と確率質量関数
**内容:** 離散型分布の定義と代表的な分布族

- **1. 確率質量関数**
  - Definition 2.3-1 (離散型確率変数：$X$ の値域が高々可算のとき；確率質量関数 $p(k) = P(X = k)$；$\sum_k p(k) = 1$)
  - Example 2.3-1 (ベルヌーイ分布：$P(X=1) = p$、$P(X=0) = 1-p$；成功確率 $p$ のコイン投げのモデル)
  - Example 2.3-2 (二項分布：$P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$（$k=0,\ldots,n$）；$n$ 回のベルヌーイ試行の成功回数；$E[X] = np$、$\mathrm{Var}(X) = np(1-p)$ の計算)
  - Example 2.3-3 (ポアソン分布：$P(X=k) = e^{-\lambda}\lambda^k/k!$（$k=0,1,2,\ldots$）；$E[X] = \mathrm{Var}(X) = \lambda$；放射性崩壊・コールセンターの着信数など「まれな事象の回数」のモデル)
  - Remark (ポアソン近似：$n$ が大きく $p$ が小さいとき二項分布 $B(n,p)$ はポアソン分布 $\mathrm{Po}(np)$ で近似される；Chapter 9 の中心極限定理と並ぶ重要な極限定理)

### §2.4 連続型確率変数と確率密度関数
**内容:** 確率密度関数の定義と代表的な連続分布

- **1. 確率密度関数**
  - Definition 2.4-1 (連続型確率変数：ルベーグ可積分関数 $f \geq 0$（$\int_{-\infty}^\infty f(x)\,dx = 1$）が存在して $P(X \in A) = \int_A f(x)\,dx$ となるとき；$f$ を $X$ の確率密度関数（PDF）という)
  - Example 2.4-1 (一様分布：$f(x) = 1/(b-a)$（$a \leq x \leq b$）；$P(c \leq X \leq d) = (d-c)/(b-a)$ の計算；CDF は $F(x) = (x-a)/(b-a)$)
  - Example 2.4-2 (正規分布：$f(x) = \frac{1}{\sqrt{2\pi}\sigma}e^{-(x-\mu)^2/(2\sigma^2)}$；$E[X] = \mu$、$\mathrm{Var}(X) = \sigma^2$；ガウス積分 $\int_{-\infty}^\infty e^{-x^2/2}\,dx = \sqrt{2\pi}$ による正規化の確認)
  - Example 2.4-3 (指数分布：$f(x) = \lambda e^{-\lambda x}$（$x \geq 0$）；$E[X] = 1/\lambda$；無記憶性 $P(X > s+t \mid X > s) = P(X > t)$ の証明)
  - Remark (ルベーグ積分との接続：PDF による確率計算は 3-3 で学んだルベーグ積分そのもの；「リーマン積分でなくルベーグ積分を使う理由」として、密度を持たない分布（例：ディラック測度）との統一的扱いが可能になる点が挙げられる)

### §2.5 多次元確率変数と周辺分布
**内容:** 結合分布・周辺分布・共分散・相関係数

- **1. 結合分布と周辺分布**
  - Definition 2.5-1 (多次元確率変数：$\boldsymbol{X} = (X_1, \ldots, X_n) : \Omega \to \mathbb{R}^n$ が各成分可測のとき多次元確率変数という；結合分布 $P(\boldsymbol{X} \in A)$（$A \in \mathcal{B}(\mathbb{R}^n)$）を定義する)
  - Definition 2.5-2 (周辺分布：結合 CDF $F(x,y) = P(X \leq x, Y \leq y)$ から $F_X(x) = \lim_{y \to \infty} F(x,y)$；結合密度 $f(x,y)$ があるとき周辺密度 $f_X(x) = \int f(x,y)\,dy$)
  - Example 2.5-1 (二次元一様分布：単位正方形 $[0,1]^2$ 上の一様分布 $f(x,y) = 1$；周辺密度 $f_X(x) = \int_0^1 1\,dy = 1$（$[0,1]$ 上の一様分布）；$X$ と $Y$ が独立の場合の確認は §4.2 で行う)

- **2. 共分散と相関係数**
  - Definition 2.5-3 (共分散・相関係数：$\mathrm{Cov}(X,Y) = E[(X-EX)(Y-EY)]$；相関係数 $\rho(X,Y) = \mathrm{Cov}(X,Y)/(\sqrt{\mathrm{Var}X}\sqrt{\mathrm{Var}Y})$；$|\rho| \leq 1$)
  - Proposition 2.5-1 ($|\rho| \leq 1$ の証明：コーシー・シュワルツ不等式 $|E[UV]|^2 \leq E[U^2]E[V^2]$ に $U = X - EX$、$V = Y - EY$ を代入する)
  - Proof (コーシー・シュワルツ不等式は $E[(U + tV)^2] \geq 0$ を $t$ の 2 次式と見て判別式 $\leq 0$ から従う)
  - Example 2.5-2 ($\rho = \pm 1$ の条件：$\rho = 1$ $\Leftrightarrow$ $Y = aX + b$（$a > 0$）とほぼ確実に成立；$\rho = 0$ だが独立でない例として $(X, Y) = (\cos\theta, \sin\theta)$（$\theta$ が一様分布）では $\mathrm{Cov} = 0$ だが $X^2 + Y^2 = 1$（完全な従属関係）)

---

## Chapter 3: 期待値とモーメント
**テーマ:** ルベーグ積分としての期待値の厳密な理論

### §3.1 期待値の定義（ルベーグ積分）
**内容:** 単関数・非負可測関数・一般可測関数の順に期待値を構成する

- **1. 期待値の段階的構成**
  - Definition 3.1-1 (単純確率変数の期待値：$X = \sum_{k=1}^n c_k 1_{A_k}$（$A_k$ は互いに素）に対して $E[X] = \sum_{k=1}^n c_k P(A_k)$)
  - Definition 3.1-2 (非負確率変数の期待値：$X \geq 0$ に対して $E[X] = \sup\{E[Y] \mid 0 \leq Y \leq X,\, Y \text{ 単純}\}$；$+\infty$ になることも許す)
  - Definition 3.1-3 (一般確率変数の期待値：$X = X^+ - X^-$（$X^+ = \max(X,0)$、$X^- = \max(-X,0)$）に分解し $E[X] = E[X^+] - E[X^-]$；どちらかが有限のとき期待値が定義される；両方有限のとき $X$ は可積分（$X \in L^1$）という)
  - Example 3.1-1 (離散確率変数の期待値：$X$ が確率質量関数 $p(k)$ を持つとき $E[X] = \sum_k k\,p(k)$；Definition 3.1-2 に帰着することの確認)
  - Remark (リーマン積分との接続：$X$ が連続分布のとき $E[X] = \int_{-\infty}^\infty x\,f(x)\,dx$（リーマン積分）；ルベーグ積分はこれを「$X$ の分布」に依存した抽象的な形 $\int X\,dP$ として統一的に書く)

- **2. 期待値の計算公式**
  - Theorem 3.1-1 (変数変換公式：確率変数 $X$ の分布が $\mu_X$（$X$ の像測度）のとき $E[g(X)] = \int g(x)\,d\mu_X(x)$；連続型では $\int g(x)f(x)\,dx$)
  - Proof (単純関数で確認し単調収束定理で一般化；3-3 の積分変換定理（ラドン・ニコディム）の特殊ケース)
  - Example 3.1-2 ($E[X^2]$ の計算：$X \sim \mathcal{N}(0,1)$ のとき $E[X^2] = \int_{-\infty}^\infty x^2 \frac{e^{-x^2/2}}{\sqrt{2\pi}}\,dx = 1$；部分積分による確認)

### §3.2 期待値の基本性質
**内容:** 線形性・単調性と基本的な不等式

- **1. 線形性と単調性**
  - Theorem 3.2-1 (期待値の基本性質：(i) 線形性 $E[aX + bY] = aE[X] + bE[Y]$；(ii) 単調性 $X \leq Y$ a.s. $\Rightarrow E[X] \leq E[Y]$；(iii) $|E[X]| \leq E[|X|]$)
  - Proof (単純関数で各性質を確認し、単調収束定理・支配収束定理（3-3 §4.2-4.3 の結果を利用）で一般化する)
  - Theorem 3.2-2 (単調収束定理（確率論版）：$0 \leq X_n \nearrow X$ a.s. ならば $E[X_n] \nearrow E[X]$)
  - Theorem 3.2-3 (支配収束定理（確率論版）：$|X_n| \leq Y$（$E[Y] < \infty$）かつ $X_n \to X$ a.s. ならば $E[X_n] \to E[X]$)

- **2. 基本的な不等式**
  - Theorem 3.2-4 (マルコフの不等式：$X \geq 0$、$a > 0$ のとき $P(X \geq a) \leq E[X]/a$)
  - Proof ($X \geq a \cdot 1_{\{X \geq a\}}$ を期待値で評価する)
  - Theorem 3.2-5 (チェビシェフの不等式：$E[X^2] < \infty$ のとき $P(|X - E[X]| \geq a) \leq \mathrm{Var}(X)/a^2$)
  - Proof (マルコフの不等式を $(X - E[X])^2$ に適用する)
  - Example 3.2-1 (チェビシェフ不等式の応用：$X$ の分散が $\sigma^2$ のとき $P(|X - \mu| \geq 2\sigma) \leq 1/4$；正規分布では実際の確率は約 $0.046$ であり不等式が粗いことの確認)

### §3.3 分散・標準偏差・共分散
**内容:** 2 次モーメントの理論とコーシー・シュワルツ不等式

- **1. 分散の定義と計算公式**
  - Definition 3.3-1 (分散・標準偏差：$\mathrm{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$；標準偏差 $\sigma(X) = \sqrt{\mathrm{Var}(X)}$)
  - Proposition 3.3-1 (分散の基本性質：$\mathrm{Var}(aX + b) = a^2\mathrm{Var}(X)$；$X, Y$ が独立なら $\mathrm{Var}(X+Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$（Chapter 4 で独立性を定義後に証明）)
  - Example 3.3-1 (各分布の分散：$B(n,p)$ の分散 $np(1-p)$；$\mathrm{Po}(\lambda)$ の分散 $\lambda$；$\mathcal{N}(\mu,\sigma^2)$ の分散 $\sigma^2$ を定義から計算)

- **2. $L^2$ 空間とコーシー・シュワルツ不等式**
  - Theorem 3.3-1 (コーシー・シュワルツ不等式：$E[|XY|] \leq \sqrt{E[X^2]}\sqrt{E[Y^2]}$；等号は $X = cY$ a.s. のとき)
  - Proof ($E[(X + tY)^2] \geq 0$ を $t$ の 2 次式と見て判別式を評価する)
  - Remark ($L^2$ 空間の内積：$\langle X, Y \rangle = E[XY]$ と定義すると $L^2(\Omega, \mathcal{F}, P)$ はヒルベルト空間になる；条件付き期待値（Chapter 5）はこの空間への正射影として理解できる（関数解析（4-1）への接続）)

### §3.4 モーメントとモーメント母関数
**内容:** 各次モーメントとモーメント母関数の定義・性質

- **1. モーメントの定義**
  - Definition 3.4-1 ($n$ 次モーメント：$E[X^n]$；$n$ 次中心モーメント：$E[(X-E[X])^n]$；1 次モーメント $= E[X]$（平均）；2 次中心モーメント $= \mathrm{Var}(X)$；3 次中心モーメントが歪度・4 次が尖度に関係する)
  - Example 3.4-1 (正規分布のモーメント：$X \sim \mathcal{N}(0,1)$ のとき奇数次モーメントはすべてゼロ；偶数次モーメント $E[X^{2n}] = (2n-1)!! = 1 \cdot 3 \cdot 5 \cdots (2n-1)$；ガウス積分の繰り返し部分積分による計算)

- **2. モーメント母関数**
  - Definition 3.4-2 (モーメント母関数（MGF）：$M_X(t) = E[e^{tX}]$（$t \in \mathbb{R}$）；原点の近傍で有限のとき $M_X$ は分布を一意に決定する)
  - Theorem 3.4-1 (MGF とモーメントの関係：$M_X$ が原点近傍で有限なら $E[X^n] = M_X^{(n)}(0)$（$M_X$ の $n$ 次導関数の $t=0$ での値）)
  - Proof ($e^{tX} = \sum t^n X^n/n!$ のテイラー展開と期待値・微分の順序交換（支配収束定理による正当化）)
  - Example 3.4-2 (正規分布の MGF：$X \sim \mathcal{N}(\mu, \sigma^2)$ のとき $M_X(t) = e^{\mu t + \sigma^2 t^2/2}$；$M_X'(0) = \mu$、$M_X''(0) = \mu^2 + \sigma^2$ から $E[X] = \mu$、$\mathrm{Var}(X) = \sigma^2$ の確認)
  - Example 3.4-3 (指数分布の MGF：$X \sim \mathrm{Exp}(\lambda)$ のとき $M_X(t) = \lambda/(\lambda-t)$（$t < \lambda$）；$E[X] = 1/\lambda$、$E[X^2] = 2/\lambda^2$ を計算)

---

## Chapter 4: 独立性
**テーマ:** 独立事象・独立確率変数の厳密な定義と性質

### §4.1 事象の独立性
**内容:** 2 事象・多事象の独立性と相互独立性

- **1. 独立性の定義**
  - Definition 4.1-1 (2 事象の独立性：$P(A \cap B) = P(A)P(B)$ のとき $A$ と $B$ は独立という；直感：$B$ が起きたことを知っても $A$ の確率が変わらない（$P(A \mid B) = P(A)$）)
  - Definition 4.1-2 (相互独立性：事象族 $\{A_i\}$ が相互独立であるとは任意の有限部分集合 $\{A_{i_1},\ldots,A_{i_k}\}$ に対して $P(A_{i_1}\cap\cdots\cap A_{i_k}) = P(A_{i_1})\cdots P(A_{i_k})$ が成立すること；2 つずつの独立性（対独立）より真に強い条件)
  - Example 4.1-1 (対独立だが相互独立でない例：$\Omega = \{1,2,3,4\}$（一様分布）、$A = \{1,2\}$、$B = \{1,3\}$、$C = \{1,4\}$；$P(A \cap B) = P(A)P(B) = 1/4$ など対独立は成立するが $P(A \cap B \cap C) = 1/4 \neq P(A)P(B)P(C) = 1/8$ で相互独立でないことの確認)

- **2. 独立性と積事象**
  - Proposition 4.1-1 ($A, B$ が独立 $\Leftrightarrow$ $A$ と $B^c$ が独立 $\Leftrightarrow$ $A^c$ と $B^c$ が独立)
  - Proof ($P(A \cap B^c) = P(A) - P(A \cap B) = P(A)(1 - P(B)) = P(A)P(B^c)$)

### §4.2 確率変数の独立性
**内容:** $\sigma$-加法族に基づく独立性の定義と同値条件

- **1. 確率変数の独立性の定義**
  - Definition 4.2-1 ($\sigma$-加法族の独立性：$\sigma$-加法族族 $\{\mathcal{F}_i\}$ が独立であるとは任意の $A_i \in \mathcal{F}_i$ に対して事象族 $\{A_i\}$ が相互独立なこと；確率変数 $X_i$ の独立性は $\sigma(X_i) = X_i^{-1}(\mathcal{B}(\mathbb{R}))$ の独立性として定義する)
  - Theorem 4.2-1 (独立性の同値条件：確率変数 $X_1,\ldots,X_n$ が独立 $\Leftrightarrow$ 結合 CDF $F(x_1,\ldots,x_n) = F_{X_1}(x_1)\cdots F_{X_n}(x_n)$；連続型では $f(x_1,\ldots,x_n) = f_{X_1}(x_1)\cdots f_{X_n}(x_n)$)
  - Proof (生成系を用いた $\sigma$-加法族の独立性の特徴づけ；「半直線の族が $\mathcal{B}(\mathbb{R})$ を生成する」という事実を利用)
  - Example 4.2-1 (独立性の確認：$f(x,y) = e^{-(x+y)}$（$x,y \geq 0$）のとき $f_X(x) = e^{-x}$、$f_Y(y) = e^{-y}$；$f(x,y) = f_X(x)f_Y(y)$ が成立するので $X$ と $Y$ が独立な指数分布に従うことの確認)

### §4.3 独立確率変数の演算
**内容:** 独立和の期待値・分散・畳み込み公式

- **1. 期待値と分散の加法性**
  - Theorem 4.3-1 (独立変数の期待値の積：$X, Y$ が独立で可積分ならば $E[XY] = E[X]E[Y]$)
  - Proof ($E[XY] = \int xy\,d\mu_{X,Y}(x,y) = \int x\,d\mu_X(x)\int y\,d\mu_Y(y)$；独立性から結合分布が周辺分布の積になることとフビニの定理を利用)
  - Theorem 4.3-2 (独立変数の分散の加法性：$X, Y$ が独立ならば $\mathrm{Var}(X+Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$)
  - Proof ($\mathrm{Cov}(X,Y) = E[XY] - E[X]E[Y] = 0$（独立性より）から従う)

- **2. 畳み込み公式**
  - Theorem 4.3-3 (和の分布（畳み込み）：$X, Y$ が独立で密度 $f_X, f_Y$ を持つとき $X + Y$ の密度は $f_{X+Y}(z) = (f_X * f_Y)(z) = \int f_X(z-y)f_Y(y)\,dy$)
  - Proof (結合密度の独立性から $P(X+Y \leq z) = \int\int_{x+y \leq z}f_X(x)f_Y(y)\,dx\,dy$ を $z$ で微分する；フビニの定理を適用)
  - Example 4.3-1 (正規分布の畳み込み：$X \sim \mathcal{N}(\mu_1, \sigma_1^2)$、$Y \sim \mathcal{N}(\mu_2, \sigma_2^2)$ が独立のとき $X + Y \sim \mathcal{N}(\mu_1+\mu_2, \sigma_1^2+\sigma_2^2)$；MGF を使った証明：$M_{X+Y}(t) = M_X(t)M_Y(t) = e^{(\mu_1+\mu_2)t + (\sigma_1^2+\sigma_2^2)t^2/2}$)

### §4.4 無相関と独立の違い
**内容:** $\mathrm{Cov}(X,Y) = 0$ と独立の包含関係

- **1. 独立 $\Rightarrow$ 無相関**
  - Proposition 4.4-1 (独立ならば無相関：$X, Y$ が独立ならば $\mathrm{Cov}(X,Y) = 0$；逆は一般に成立しない)
  - Proof (Theorem 4.3-1 より $E[XY] = E[X]E[Y]$；定義より $\mathrm{Cov}(X,Y) = 0$)
  - Example 4.4-1 (無相関だが独立でない例：$X \sim \mathcal{N}(0,1)$、$Y = X^2$；$\mathrm{Cov}(X,Y) = E[X^3] - E[X]E[X^2] = 0 - 0 = 0$（奇数次モーメントがゼロ）；しかし $Y = X^2$ は $X$ の関数なので独立でないことの確認)
  - Example 4.4-2 (正規分布の特別性：$(X,Y)$ が 2 次元正規分布に従うとき、無相関 $\Leftrightarrow$ 独立；結合密度が $e^{-Q(x,y)/2}$（$Q$ は 2 次形式）の積分解析から確認)
  - Remark (独立と無相関の実用的な違い：統計学では「相関ゼロ」を独立の代わりに使うことがあるが、正規分布以外では誤りになる；機械学習での「特徴量の無相関化（主成分分析）」は独立化と本質的に異なる）

---

## Chapter 5: 条件付き期待値
**テーマ:** $\sigma$-加法族による条件付き期待値の一般論

### §5.1 初等的な条件付き期待値
**内容:** 離散・連続の場合の定義と全期待値の法則

- **1. 離散・連続での定義**
  - Definition 5.1-1 (離散の場合の条件付き期待値：$P(Y=y) > 0$ のとき $E[X \mid Y=y] = \sum_x x\,P(X=x \mid Y=y)$；$E[X \mid Y = y]$ は $y$ の関数であり確率変数 $E[X \mid Y]$ を定義する)
  - Definition 5.1-2 (連続の場合の条件付き期待値：結合密度 $f(x,y)$ があるとき $E[X \mid Y=y] = \int x\,f_{X|Y}(x \mid y)\,dx$；条件付き密度 $f_{X|Y}(x \mid y) = f(x,y)/f_Y(y)$)
  - Example 5.1-1 (2 次元一様分布での条件付き期待値：$(X,Y)$ が単位正方形上の一様分布；$E[X \mid Y=y] = 1/2$（$Y=y$ の条件のもとで $X$ が $[0,1]$ 上一様）；$E[X \mid Y]$ が定数であることの確認)

- **2. 全期待値の法則**
  - Theorem 5.1-1 (全期待値の法則（タワー性の初等版）：$E[X] = E[E[X \mid Y]] = \sum_y E[X \mid Y=y]P(Y=y)$（離散の場合）)
  - Proof (定義を展開すると全確率の公式と同じ計算になる)
  - Example 5.1-2 (全期待値の応用：コイン投げで表が出る確率 $p$ がまず一様乱数で決まり、その後コインを $n$ 回投げる場合の成功回数の期待値；$E[X] = E[E[X \mid p]] = E[np] = n/2$)

### §5.2 $\sigma$-加法族による一般的定義
**内容:** ラドン・ニコディム定理を用いた一般定義と存在・一意性

- **1. 一般定義と存在定理**
  - Definition 5.2-1 (条件付き期待値の一般定義：部分 $\sigma$-加法族 $\mathcal{G} \subset \mathcal{F}$ に対して $E[X \mid \mathcal{G}]$ は (i) $\mathcal{G}$-可測；(ii) 任意の $G \in \mathcal{G}$ に対して $\int_G E[X \mid \mathcal{G}]\,dP = \int_G X\,dP$（積分の一致）；の 2 条件を満たす $\mathcal{G}$-可測関数として定義する)
  - Theorem 5.2-1 (存在と a.s. 一意性：$X \in L^1$ ならば $E[X \mid \mathcal{G}]$ が a.s. 一意に存在する)
  - Proof (ラドン・ニコディム定理（3-3 §5.2 の結果）を $\mathcal{G}$ 上の符号付き測度 $\nu(G) = \int_G X\,dP$ に適用する；$\nu \ll P|_\mathcal{G}$ が成立するので $d\nu/dP|_\mathcal{G}$ として $E[X \mid \mathcal{G}]$ が得られる)
  - Remark ($L^2$ の射影解釈：$X \in L^2$ のとき $E[X \mid \mathcal{G}]$ は $L^2(\Omega, \mathcal{G}, P)$ への直交射影になる；「$\mathcal{G}$ の情報のみを使った $X$ の最良線形予測」という直感があり、関数解析（4-1）の射影定理と結びつく)

### §5.3 条件付き期待値の性質
**内容:** 線形性・タワー性・取り出し性の証明

- **1. 基本性質**
  - Theorem 5.3-1 (条件付き期待値の性質：(i) 線形性 $E[aX+bY \mid \mathcal{G}] = aE[X\mid\mathcal{G}]+bE[Y\mid\mathcal{G}]$ a.s.；(ii) 単調性 $X \leq Y$ a.s. $\Rightarrow E[X \mid \mathcal{G}] \leq E[Y \mid \mathcal{G}]$ a.s.；(iii) タワー性 $E[E[X \mid \mathcal{G}] \mid \mathcal{H}] = E[X \mid \mathcal{H}]$ a.s.（$\mathcal{H} \subset \mathcal{G}$）；(iv) 取り出し性 $E[ZX \mid \mathcal{G}] = ZE[X \mid \mathcal{G}]$ a.s.（$Z$ が $\mathcal{G}$-可測）)
  - Proof (各性質を Definition 5.2-1 の 2 条件で確認する；タワー性は $\mathcal{H} \subset \mathcal{G}$ から $E[X \mid \mathcal{G}]$ の $\mathcal{H}$ に関する積分が $X$ の積分に一致することで従う)
  - Example 5.3-1 (タワー性の適用：$E[E[X \mid Y] \mid Z] = E[X \mid Z]$（$\sigma(Z) \subset \sigma(Y)$ のとき）；「精細な条件付け」から「粗い条件付け」へ縮退する直感の確認)

### §5.4 条件付き分布
**内容:** 正則条件付き確率分布と条件付き密度の概念

- **1. 正則条件付き確率分布**
  - Definition 5.4-1 (正則条件付き確率分布：$\omega$ ごとに $\mathcal{F}$ 上の確率測度 $P(\cdot \mid \mathcal{G})(\omega)$ を与える「カーネル」で、(i) 各 $\omega$ について $P(\cdot \mid \mathcal{G})(\omega)$ が確率測度；(ii) 各 $A$ について $\omega \mapsto P(A \mid \mathcal{G})(\omega)$ が $\mathcal{G}$-可測；を満たすもの)
  - Example 5.4-1 (条件付き密度：結合密度 $f(x,y)$ を持つ $(X,Y)$ の $Y=y$ 条件下での $X$ の分布は密度 $f_{X|Y}(x|y) = f(x,y)/f_Y(y)$（$f_Y(y) > 0$）の確率分布；この対応 $y \mapsto f_{X|Y}(\cdot|y)$ が正則条件付き確率分布の例)
  - Remark (条件付き分布の重要性：確率過程論（4-14）やベイズ統計学では「条件付き分布全体」を対象とする；条件付き期待値はその 1 次モーメントに過ぎず、分布そのものの情報が必要な場面が多い)

---

## Chapter 6: 確率変数列の収束
**テーマ:** 4 種の収束概念とその包含関係

### §6.1 概収束（a.s. 収束）
**内容:** 確率 1 での収束の定義と判定条件

- **1. 概収束の定義**
  - Definition 6.1-1 (概収束：$P(X_n \to X \text{ as } n \to \infty) = 1$；すなわち $P(\{\omega : X_n(\omega) \not\to X(\omega)\}) = 0$；「ほぼすべての $\omega$ で収束する」)
  - Example 6.1-1 (概収束の例：$\Omega = [0,1]$（一様分布）、$X_n(\omega) = \omega^n$；$\omega < 1$ のとき $X_n(\omega) \to 0$、$\omega = 1$ のとき $X_n(\omega) = 1$；$P(\omega = 1) = 0$ だから $X_n \to 0$ a.s.)
  - Example 6.1-2 (概収束しない例：同じ $\Omega = [0,1]$ 上で $X_n$ をスライドする指示関数（型渡り関数）で定義する；確率収束するが a.s. 収束しないことの古典例の概要)

- **2. 概収束の判定**
  - Theorem 6.1-1 (概収束の判定条件：$\sum_{n=1}^\infty P(|X_n - X| > \varepsilon) < \infty$（任意の $\varepsilon > 0$）ならば $X_n \to X$ a.s.；ボレル・カンテリの補題（§8.1）の応用)
  - Remark (概収束と測度論：a.s. 収束は測度論の「零集合上での現象を無視する」という思想の自然な拡張；ルベーグの支配収束定理が「a.s. 収束 $+$ 可積分な支配」から $L^1$ 収束を導く点も同じ発想)

### §6.2 確率収束
**内容:** 確率収束の定義と概収束との関係

- **1. 確率収束の定義**
  - Definition 6.2-1 (確率収束：任意の $\varepsilon > 0$ に対して $P(|X_n - X| > \varepsilon) \to 0$（$n \to \infty$）のとき $X_n \xrightarrow{P} X$)
  - Theorem 6.2-1 (概収束 $\Rightarrow$ 確率収束；逆は成立しない)
  - Proof (a.s. 収束の定義から $P(\sup_{k \geq n}|X_k - X| > \varepsilon) \to 0$ を示し確率収束を導く)
  - Theorem 6.2-2 (確率収束の部分列定理：$X_n \xrightarrow{P} X$ ならばある部分列 $X_{n_k}$ が $X$ に a.s. 収束する)
  - Proof (任意の $k$ に対して $P(|X_{n_k} - X| > 1/k) < 1/2^k$ となる $n_k$ を選ぶ；ボレル・カンテリの補題から a.s. 収束が従う)

### §6.3 $L^p$ 収束
**内容:** $L^p$ 収束の定義・一様可積分性との関係

- **1. $L^p$ 収束の定義**
  - Definition 6.3-1 ($L^p$ 収束：$E[|X_n - X|^p] \to 0$（$n \to \infty$）のとき $X_n \xrightarrow{L^p} X$；$p = 2$ のとき二乗平均収束という)
  - Theorem 6.3-1 ($L^p$ 収束 $\Rightarrow$ 確率収束；逆は成立しない)
  - Proof (マルコフの不等式：$P(|X_n - X| > \varepsilon) \leq E[|X_n-X|^p]/\varepsilon^p \to 0$)
  - Example 6.3-1 (逆が成立しない例：$X_n = \sqrt{n}\,1_{[0,1/n]}$ on $[0,1]$；$P(|X_n| > \varepsilon) = 1/n \to 0$（確率収束）；$E[X_n^2] = n \cdot 1/n = 1 \not\to 0$（$L^2$ 収束しない）)

- **2. 一様可積分性**
  - Definition 6.3-2 (一様可積分性：確率変数族 $\{X_n\}$ が一様可積分であるとは $\sup_n E[|X_n|1_{|X_n| > M}] \to 0$（$M \to \infty$）)
  - Theorem 6.3-2 ($X_n \xrightarrow{P} X$ かつ $\{X_n\}$ が一様可積分 $\Leftrightarrow$ $X_n \xrightarrow{L^1} X$)
  - Remark (一様可積分性の意味：確率変数の「裾の重さが一様に制御されている」条件；支配収束定理の「支配可能な確率変数が存在する」という条件の代替として使われる)

### §6.4 分布収束（法則収束）
**内容:** 分布収束の定義と連続点での収束・各収束の包含関係

- **1. 分布収束の定義**
  - Definition 6.4-1 (分布収束：任意の $F_X$ の連続点 $x$ で $F_{X_n}(x) \to F_X(x)$ のとき $X_n \xrightarrow{d} X$（$X_n$ が $X$ に法則収束する）)
  - Theorem 6.4-1 (確率収束 $\Rightarrow$ 分布収束；逆は $X$ が定数のときのみ成立)
  - Proof ($|P(X_n \leq x) - P(X \leq x)| \leq P(|X_n - X| > \varepsilon) + P(x - \varepsilon < X \leq x + \varepsilon)$；$\varepsilon \to 0$ で $F_X$ の連続点では第 2 項もゼロ)
  - Example 6.4-1 (分布収束するが確率収束しない例：$X_n$ と $X$ が同じ分布を持つが独立な正規確率変数；$F_{X_n} = F_X$ なので分布収束するが $E[|X_n - X|^2] = 2\sigma^2 \neq 0$)

- **2. 収束の包含関係まとめ**
  - Proposition 6.4-1 (収束の包含関係：a.s. 収束 $\Rightarrow$ 確率収束 $\Rightarrow$ 分布収束；$L^p$ 収束 $\Rightarrow$ $L^q$ 収束（$p \geq q$）$\Rightarrow$ 確率収束；すべての逆は一般に成立しない)
  - Example 6.4-2 (包含関係の整理：$\Omega = [0,1]$（一様分布）上の具体的な確率変数の例を構成して各収束の相互関係を確認；型渡り関数・ランダム符号の変換などの例を参照)
  - Remark (各収束の応用場面：大数の法則は a.s. 収束または確率収束；中心極限定理は分布収束；$L^2$ 収束は二乗平均の収束として工学・統計で頻用される；正しい収束の種類を選ぶことが証明の出発点)

---

## Chapter 7: 特性関数
**テーマ:** 確率分布のフーリエ変換と収束定理への橋渡し

### §7.1 特性関数の定義と基本性質
**内容:** 定義・連続性・有界性

- **1. 特性関数の定義**
  - Definition 7.1-1 (特性関数：確率変数 $X$ の特性関数 $\varphi_X(t) = E[e^{itX}] = \int_{-\infty}^\infty e^{itx}\,dF_X(x)$（$t \in \mathbb{R}$）；フーリエ解析（3-4）のフーリエ変換の確率版)
  - Proposition 7.1-1 (特性関数の基本性質：(i) $\varphi_X(0) = 1$；(ii) $|\varphi_X(t)| \leq 1$；(iii) $\varphi_X(-t) = \overline{\varphi_X(t)}$（$X$ が実数値のとき）；(iv) $\varphi_X$ は一様連続)
  - Proof (連続性：$|\varphi_X(t+h) - \varphi_X(t)| = |E[e^{itX}(e^{ihX}-1)]| \leq E[|e^{ihX}-1|] \to 0$（支配収束定理）；有界性は $|e^{itX}| = 1$ から直ちに従う)
  - Example 7.1-1 (正規分布の特性関数：$X \sim \mathcal{N}(0,1)$ のとき $\varphi_X(t) = e^{-t^2/2}$；ガウス積分の計算で確認；この関数形が中心極限定理の証明で本質的に使われる)

- **2. 具体的な特性関数の計算**
  - Example 7.1-2 (指数分布の特性関数：$X \sim \mathrm{Exp}(\lambda)$ のとき $\varphi_X(t) = \lambda/(\lambda - it)$；$|\varphi_X(t)|^2 = \lambda^2/(\lambda^2+t^2)$ の計算)
  - Example 7.1-3 (ポアソン分布の特性関数：$X \sim \mathrm{Po}(\lambda)$ のとき $\varphi_X(t) = e^{\lambda(e^{it}-1)}$；$e^{itk}$ の級数和の計算)

### §7.2 特性関数とモーメントの関係
**内容:** 特性関数の微分とモーメントの計算

- **1. モーメントとの関係**
  - Theorem 7.2-1 (特性関数とモーメント：$E[|X|^n] < \infty$ ならば $\varphi_X$ は $n$ 回微分可能で $E[X^k] = \varphi_X^{(k)}(0)/i^k$（$k \leq n$）)
  - Proof ($E[|X|^n] < \infty$ のもとで $e^{itX}$ の $n$ 次導関数 $(iX)^n e^{itX}$ が支配収束定理の条件を満たし、積分と微分の順序交換が許される)
  - Example 7.2-1 (正規分布のモーメント確認：$\varphi_X(t) = e^{-t^2/2}$ の $t=0$ での 1 次・2 次微分を計算すると $\varphi'(0) = 0$（$E[X]=0$）、$\varphi''(0) = -1$（$E[X^2]=1$）が導かれることの確認)

### §7.3 特性関数による分布の決定
**内容:** 逆転公式・一意性定理・和の特性関数

- **1. 逆転公式と一意性**
  - Theorem 7.3-1 (逆転公式：$\varphi_X \in L^1(\mathbb{R})$ のとき $f_X(x) = \frac{1}{2\pi}\int_{-\infty}^\infty e^{-itx}\varphi_X(t)\,dt$；特性関数から密度が復元できる)
  - Theorem 7.3-2 (一意性定理：$\varphi_X = \varphi_Y$ ならば $X$ と $Y$ は同じ分布を持つ；特性関数が分布を一意に決定する)
  - Proof (逆転公式から密度を復元し、一意性を得る；フーリエ変換の一意性（3-4 §2.2 の結果）の確率論版)
  - Theorem 7.3-3 (独立和の特性関数：$X, Y$ が独立のとき $\varphi_{X+Y}(t) = \varphi_X(t)\varphi_Y(t)$)
  - Proof ($E[e^{it(X+Y)}] = E[e^{itX}e^{itY}] = E[e^{itX}]E[e^{itY}]$（独立性から積の期待値が期待値の積）)
  - Example 7.3-1 (正規分布の安定性：$\varphi_{X+Y}(t) = e^{-\sigma_1^2t^2/2}e^{-\sigma_2^2t^2/2} = e^{-(\sigma_1^2+\sigma_2^2)t^2/2}$；逆転公式より $X+Y \sim \mathcal{N}(0, \sigma_1^2+\sigma_2^2)$；畳み込み計算より簡潔な証明)

### §7.4 連続性定理（レビーの定理）
**内容:** 分布収束と特性関数の収束の同値性

- **1. レビーの連続性定理**
  - Theorem 7.4-1 (レビーの連続性定理：$X_n \xrightarrow{d} X$ $\Leftrightarrow$ 任意の $t \in \mathbb{R}$ に対して $\varphi_{X_n}(t) \to \varphi_X(t)$（かつ極限が $t=0$ で連続）)
  - Proof (概略：$\Rightarrow$ 方向は分布収束の定義と $e^{itx}$ の有界連続性から；$\Leftarrow$ 方向は特性関数の一様収束から分布の弱収束を取り出す（タイトネス議論が必要）)
  - Remark (中心極限定理への応用：特性関数のテイラー展開と連続性定理を組み合わせることで中心極限定理が証明できる（Chapter 9 §9.2 で詳しく扱う）；フーリエ解析（3-4）の「フーリエ変換が収束を判定する道具」という役割の確率論版)

---

## Chapter 8: 大数の法則
**テーマ:** 頻度と確率をつなぐ根本的な定理

### §8.1 ボレル・カンテリの補題
**内容:** 確率列の上極限事象の確率ゼロ・1 を決定する補題

- **1. 第 1・第 2 補題**
  - Lemma 8.1-1 (ボレル・カンテリの補題（第 1）：$\sum_{n=1}^\infty P(A_n) < \infty$ ならば $P(\limsup_n A_n) = 0$；「$A_n$ の確率の和が収束すれば $A_n$ は有限個しか起きない（a.s.）」)
  - Proof (測度の連続性：$P(\limsup_n A_n) = P(\bigcap_n \bigcup_{k \geq n} A_k) \leq P(\bigcup_{k \geq n}A_k) \leq \sum_{k=n}^\infty P(A_k) \to 0$)
  - Lemma 8.1-2 (ボレル・カンテリの補題（第 2）：$\{A_n\}$ が独立で $\sum_{n=1}^\infty P(A_n) = \infty$ ならば $P(\limsup_n A_n) = 1$；「確率の和が発散して独立ならば $A_n$ は無限回起きる（a.s.）」)
  - Proof ($P(\bigcap_{k=n}^m A_k^c) = \prod_{k=n}^m (1-P(A_k)) \leq \exp(-\sum_{k=n}^m P(A_k)) \to 0$（$m \to \infty$）；補事象での評価から $P(\limsup A_n) = 1$)
  - Example 8.1-1 (コイン投げへの応用：公正コインを無限回投げるとき「表が無限回出る」の確率；$\sum P(A_n) = \infty$（各回 $1/2$）かつ独立なので第 2 補題より確率 1；「最終的に必ず表が出る」ことの厳密な証明)

### §8.2 弱大数の法則
**内容:** チェビシェフ不等式による確率収束

- **1. 弱大数の法則**
  - Theorem 8.2-1 (弱大数の法則：$\{X_n\}$ が独立同分布（i.i.d.）で $E[X_1] = \mu$、$\mathrm{Var}(X_1) = \sigma^2 < \infty$ ならば $\bar{X}_n = \frac{1}{n}\sum_{k=1}^n X_k \xrightarrow{P} \mu$)
  - Proof (チェビシェフ不等式の適用：$E[\bar{X}_n] = \mu$、$\mathrm{Var}(\bar{X}_n) = \sigma^2/n \to 0$；$P(|\bar{X}_n - \mu| > \varepsilon) \leq \sigma^2/(n\varepsilon^2) \to 0$)
  - Example 8.2-1 (モンテカルロ法：$U_1, U_2, \ldots \sim \mathrm{Unif}[0,1]^2$（独立）として $(U_{k,1}^2 + U_{k,2}^2 \leq 1)$ を判定する指示関数の平均 $\to \pi/4$；弱大数の法則により $n \to \infty$ で $\pi$ の近似値が得られる)
  - Remark (有限分散の仮定の除去：コルモゴロフの強大数の法則（§8.3）では 1 次モーメントが有限であれば十分；チェビシェフ不等式を使う弱大数の法則は有限分散が必要だが証明が初等的)

### §8.3 強大数の法則
**内容:** 4 次モーメント法による概収束の証明

- **1. 強大数の法則**
  - Theorem 8.3-1 (コルモゴロフの強大数の法則：$\{X_n\}$ が i.i.d. で $E[|X_1|] < \infty$ ならば $\bar{X}_n \xrightarrow{\text{a.s.}} \mu = E[X_1]$)
  - Proof (4 次モーメント法による証明（$E[X_1^4] < \infty$ の場合）：$S_n = X_1 + \cdots + X_n$ とおくと $E[(S_n - n\mu)^4]$ を展開すると $O(n^2)$ 項のみ残る；$\sum_n P(|S_n - n\mu| > n\varepsilon) \leq \sum_n C/n^2 < \infty$；ボレル・カンテリの補題の第 1 補題から a.s. 収束が従う)
  - Remark (コルモゴロフの大数の法則の一般版：有限 4 次モーメントの仮定は $E[|X_1|] < \infty$ まで弱められる；完全な証明はトランケーション（打ち切り）の議論が必要で教科書の中級的トピック)

### §8.4 応用：モンテカルロ法と数値積分
**内容:** 大数の法則に基づく確率的数値計算

- **1. モンテカルロ積分**
  - Example 8.4-1 (モンテカルロ積分の精度評価：$X_i \sim \mathrm{Unif}[0,1]$ i.i.d. として $I = E[f(X)] = \int_0^1 f(x)\,dx$ を $\hat{I}_n = \frac{1}{n}\sum f(X_i)$ で近似；中心極限定理（Chapter 9）より誤差 $|\hat{I}_n - I| = O(1/\sqrt{n})$ の確率的評価が得られる)
  - Example 8.4-2 ($\pi$ の推定：Example 8.2-1 の方法の精度；$n = 10^4$ で標準誤差 $\approx \sqrt{p(1-p)/n} \approx 0.005$；$\pi/4 \approx 0.785$ の推定精度の計算)
  - Remark (確定的数値積分との比較：リーマン和など確定的な積分法の精度は次元 $d$ に指数的に依存する（次元の呪い）；モンテカルロ法の誤差は $O(1/\sqrt{n})$ で次元依存しない；高次元積分への有効性と確率的誤差を受け入れるトレードオフ)

---

## Chapter 9: 中心極限定理
**テーマ:** 正規分布への収束の理論と応用

### §9.1 中心極限定理の主張
**内容:** 定理の正確な主張と直感

- **1. 中心極限定理の主張**
  - Theorem 9.1-1 (中心極限定理（CLT）：$\{X_n\}$ が i.i.d.、$E[X_1] = \mu$、$\mathrm{Var}(X_1) = \sigma^2 \in (0,\infty)$ ならば $Z_n = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \xrightarrow{d} Z \sim \mathcal{N}(0,1)$（$n \to \infty$）)
  - Example 9.1-1 (二項分布の正規近似：$X \sim B(100, 0.5)$ に対して $P(45 \leq X \leq 55) \approx P(-1 \leq Z \leq 1) \approx 0.683$；$\mu = 50$、$\sigma^2 = 25$ を代入して正規近似の精度を確認)
  - Remark (CLT の驚き：$X_i$ の分布の形によらず（一様・指数・ベルヌーイなど）平均の分布が必ず正規分布に収束する；このことが自然現象・測定誤差などに正規分布が現れる理由を説明する)

### §9.2 特性関数を用いた証明
**内容:** テイラー展開とレビーの定理を用いた証明

- **1. 証明の手順**
  - Theorem 9.2-1 (CLT の証明：$Z_n$ の特性関数 $\varphi_{Z_n}(t) \to e^{-t^2/2}$ を示し、レビーの連続性定理（Theorem 7.4-1）から $Z_n \xrightarrow{d} \mathcal{N}(0,1)$ を導く)
  - Proof (証明の計算：$Y_i = (X_i - \mu)/\sigma$ とおくと $E[Y_i] = 0$、$E[Y_i^2] = 1$；$\varphi_{Z_n}(t) = [\varphi_Y(t/\sqrt{n})]^n$；$E[Y_i^2] < \infty$ より $\varphi_Y(t) = 1 - t^2/2 + o(t^2)$（$t \to 0$）；$[1 - t^2/(2n) + o(1/n)]^n \to e^{-t^2/2}$（$n \to \infty$）)
  - Example 9.2-1 (指数分布での確認：$X_i \sim \mathrm{Exp}(1)$（$\mu = \sigma = 1$）；$\varphi_{X_i}(t) = 1/(1-it)$ の $t/\sqrt{n}$ での展開 $\approx 1 - it/\sqrt{n} - t^2/(2n) + \cdots$；$n$ 乗の極限が $e^{-t^2/2}$ になることを計算で確認)

### §9.3 正規近似と応用
**内容:** 二項分布などの正規近似と信頼区間の構成

- **1. 実用的な正規近似**
  - Example 9.3-1 (世論調査の信頼区間：$n = 1000$ 人から $p$ を推定；標本比率 $\hat{p}$ の標準誤差 $\sqrt{p(1-p)/n} \approx \sqrt{0.25/1000} \approx 0.016$；CLT より 95% 信頼区間は $\hat{p} \pm 1.96 \times 0.016$；$p = 0.5$ のとき区間幅は約 $\pm 0.031$)
  - Remark (CLT の有効条件：$n$ が十分大きければよいが、$p$ が 0 または 1 に近いとき（希少事象）や分布の裾が重いとき収束が遅い；$np \geq 5$ かつ $n(1-p) \geq 5$ などの目安が実用上使われる)

- **2. 多次元 CLT への展望**
  - Proposition 9.3-1 (多次元中心極限定理：i.i.d. の確率ベクトル $\boldsymbol{X}_i \in \mathbb{R}^d$（$E[\boldsymbol{X}_i] = \boldsymbol{\mu}$、共分散行列 $\Sigma$）に対して $\sqrt{n}(\bar{\boldsymbol{X}}_n - \boldsymbol{\mu}) \xrightarrow{d} \mathcal{N}(\boldsymbol{0}, \Sigma)$（多次元正規分布）)
  - Proof (各方向 $\boldsymbol{v}^T\boldsymbol{X}_i$（スカラー）に 1 次元 CLT を適用し、クラメールの定理（各方向の収束が多次元収束を含意）を利用する)

### §9.4 収束の速さとベリー・エセーンの定理
**内容:** CLT の収束精度の評価

- **1. ベリー・エセーンの定理**
  - Theorem 9.4-1 (ベリー・エセーンの定理：i.i.d.、$E[|X_1|^3] < \infty$ のとき $\sup_x |P(Z_n \leq x) - \Phi(x)| \leq \frac{C E[|X_1 - \mu|^3]}{\sigma^3 \sqrt{n}}$；$\Phi$ は標準正規の CDF、$C$ は普遍定数（$C \leq 0.4748$）)
  - Proof (特性関数の 3 次テイラー展開と差の評価；フーリエ変換の逆変換を通じて CDF の差を特性関数の差で上から評価する（証明のスケッチ）)
  - Example 9.4-1 (収束速度の確認：ベルヌーイ分布 $B(1, 1/2)$（$\mu=1/2$、$\sigma^2=1/4$、$E[|X-\mu|^3]=1/8$）の場合；$\sup_x|P(Z_n \leq x) - \Phi(x)| \leq C/\sqrt{n}$；$n = 100$ のとき上界は約 $0.05$)
  - Remark (精度と応用：ベリー・エセーンの定理は CLT の収束速度が $O(1/\sqrt{n})$ であることを保証する；$n$ が大きいほど正規近似が良くなる定量的な保証として、数理統計学（4-15）での信頼区間や検定の正当化に使われる)
