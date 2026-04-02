# 3-2: 複素解析

**前提科目:** 2-2（微分積分学II）、2-3（実解析）

---

## Chapter 1: 複素数の基礎
**テーマ:** 複素平面と極形式

### §1.1 複素数の定義と演算
**内容:** 四則演算、実部・虚部、共役複素数

- **1. 複素数の定義**
  - Definition 1.1-1（複素数：$i^2 = -1$ を満たす虚数単位 $i$ を用い、$z = a + bi$（$a, b \in \mathbb{R}$）と書く；$\text{Re}(z) = a$ を実部、$\text{Im}(z) = b$ を虚部という）
  - Definition 1.1-2（共役複素数：$z = a + bi$ に対し $\overline{z} = a - bi$；複素数体 $\mathbb{C}$ は実数体 $\mathbb{R}$ の拡大として $\mathbb{C} = \{a + bi \mid a, b \in \mathbb{R}\}$ と定義する）

- **2. 四則演算**
  - Proposition 1.1-1（複素数の四則演算：$(a+bi) \pm (c+di) = (a \pm c) + (b \pm d)i$；$(a+bi)(c+di) = (ac-bd) + (ad+bc)i$；$\dfrac{a+bi}{c+di} = \dfrac{(a+bi)\overline{(c+di)}}{|c+di|^2}$（$c+di \neq 0$））
  - Proposition 1.1-2（共役の代数的性質：$\overline{z+w} = \overline{z}+\overline{w}$；$\overline{zw} = \overline{z}\,\overline{w}$；$z + \overline{z} = 2\,\text{Re}(z)$；$z\overline{z} = |z|^2$）
  - Example 1.1-1（$(2+3i)(1-i)$ と $\dfrac{1+2i}{3-i}$ の計算；結果はそれぞれ $5+i$ と $\dfrac{1}{10}+\dfrac{7}{10}i$）

### §1.2 複素平面（ガウス平面）
**内容:** 絶対値、偏角、極形式

- **1. 複素平面**
  - Definition 1.2-1（ガウス平面：$z = a+bi$ を平面上の点 $(a,b)$ と同一視した $\mathbb{R}^2$；横軸を実軸、縦軸を虚軸という）
  - Definition 1.2-2（絶対値：$|z| = \sqrt{a^2 + b^2} = \sqrt{z\overline{z}}$；幾何学的には原点からの距離）
  - Proposition 1.2-1（絶対値の性質：$|zw| = |z||w|$；$|z+w| \leq |z|+|w|$（三角不等式）；$\bigl||z|-|w|\bigr| \leq |z-w|$）

- **2. 偏角と極形式**
  - Definition 1.2-3（偏角：$z \neq 0$ に対し $\arg z$ を $z = |z|(\cos\theta + i\sin\theta)$ を満たす角 $\theta$（$\bmod\,2\pi$ の不定性がある）；主値 $\text{Arg}\,z \in (-\pi, \pi]$）
  - Definition 1.2-4（極形式：$z = r(\cos\theta + i\sin\theta)$（$r = |z|$、$\theta = \arg z$））
  - Proposition 1.2-2（積の偏角：$\arg(zw) = \arg z + \arg w$（$\bmod\,2\pi$）；積は絶対値を乗算し偏角を加算する）
  - Example 1.2-1（$z = 1+i$、$w = \sqrt{3}-i$ の極形式表示：$z = \sqrt{2}e^{i\pi/4}$、$w = 2e^{-i\pi/6}$；積 $zw = 2\sqrt{2}e^{i\pi/12}$ の計算）

### §1.3 ド・モアブルの定理と $n$ 乗根
**内容:** $z^n$ の幾何学的意味、$1$ の $n$ 乗根の配置

- **1. ド・モアブルの定理**
  - Theorem 1.3-1（ド・モアブルの定理：$(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$（$n \in \mathbb{Z}$））
  - Remark（オイラーの公式 $e^{i\theta} = \cos\theta + i\sin\theta$ を認めれば $( e^{i\theta})^n = e^{in\theta}$ として自明；以降 $z = re^{i\theta}$ の表記を自由に用いる）
  - Example 1.3-1（$(\cos 15° + i\sin 15°)^{12} = \cos 180° + i\sin 180° = -1$；$\cos 3\theta$, $\sin 3\theta$ の $\cos\theta$, $\sin\theta$ による展開式の導出）

- **2. $n$ 乗根**
  - Theorem 1.3-2（$n$ 乗根：方程式 $w^n = z$（$z \neq 0$）の解はちょうど $n$ 個あり、$w_k = r^{1/n} e^{i(\theta + 2\pi k)/n}$（$k = 0, 1, \ldots, n-1$）；複素平面上で正 $n$ 角形の頂点に配置される）
  - Example 1.3-2（$w^4 = -16$ の解：$-16 = 16e^{i\pi}$；$w_k = 2e^{i(\pi + 2\pi k)/4}$（$k=0,1,2,3$）$= \sqrt{2}(1+i), \sqrt{2}(-1+i), \sqrt{2}(-1-i), \sqrt{2}(1-i)$；正方形配置の確認）

### §1.4 複素平面の位相
**内容:** 開集合、閉集合、領域、コンパクト性

- **1. 距離と位相**
  - Definition 1.4-1（$\mathbb{C}$ 上の距離：$d(z, w) = |z - w|$；$\varepsilon$ 近傍 $B(z_0, \varepsilon) = \{z \in \mathbb{C} \mid |z - z_0| < \varepsilon\}$）
  - Definition 1.4-2（開集合・閉集合：$U \subset \mathbb{C}$ が開集合とは全ての点が $\varepsilon$ 近傍ごと $U$ に含まれること；$F$ が閉集合とは補集合 $\mathbb{C} \setminus F$ が開集合であること）
  - Definition 1.4-3（領域：空でない連結開集合；複素解析では主に領域上で関数を考える）

- **2. 有界性とコンパクト性**
  - Definition 1.4-4（有界集合：ある $M > 0$ に対して $|z| \leq M$ が全 $z \in S$ に成立するとき $S$ は有界という）
  - Theorem 1.4-1（ハイネ・ボレルの定理（$\mathbb{C}$ 版）：$S \subset \mathbb{C}$ がコンパクト $\Leftrightarrow$ $S$ が有界閉集合）
  - Remark（$\mathbb{C} \cong \mathbb{R}^2$ として実解析（2-3）のコンパクト性の理論がそのまま適用できる；以降コンパクト集合上の連続関数の性質は自由に用いる）


---

## Chapter 2: 複素関数と微分
**テーマ:** 正則関数の定義とコーシー・リーマンの方程式

### §2.1 複素変数の関数
**内容:** 写像としての複素関数 $w = f(z)$

- **1. 複素関数の定義**
  - Definition 2.1-1（複素関数：$S \subset \mathbb{C}$ から $\mathbb{C}$ への写像 $f : S \to \mathbb{C}$；$z = x + iy$ と置くと $f(z) = u(x,y) + iv(x,y)$（$u, v$ は実数値関数）と分解できる）
  - Example 2.1-1（$f(z) = z^2$ の実部・虚部分解：$z = x+iy$ のとき $z^2 = (x^2-y^2) + 2xyi$；$u(x,y) = x^2-y^2$、$v(x,y) = 2xy$）
  - Example 2.1-2（$f(z) = \overline{z}$ の実部・虚部：$u(x,y) = x$、$v(x,y) = -y$；この関数は複素微分不可能であることを後に見る）

### §2.2 極限と連続性
**内容:** 複素数列の収束、関数の連続性

- **1. 複素数列の収束**
  - Definition 2.2-1（複素数列の収束：$\lim_{n\to\infty} z_n = \alpha$ とは $\lim_{n\to\infty}|z_n - \alpha| = 0$；$\mathbb{R}^2$ の収束と同値）
  - Proposition 2.2-1（$z_n = x_n + iy_n$、$\alpha = a + ib$ のとき $z_n \to \alpha$ $\Leftrightarrow$ $x_n \to a$ かつ $y_n \to b$）

- **2. 複素関数の連続性**
  - Definition 2.2-2（連続性：$\lim_{z \to z_0} f(z) = f(z_0)$；すなわち任意の $\varepsilon > 0$ に対しある $\delta > 0$ が存在し $|z - z_0| < \delta$ ならば $|f(z) - f(z_0)| < \varepsilon$）
  - Proposition 2.2-2（$f(z) = u(x,y) + iv(x,y)$ が $z_0$ で連続 $\Leftrightarrow$ $u, v$ が $(x_0, y_0)$ で連続）

### §2.3 複素微分可能性と正則関数
**内容:** 微分係数の定義、正則の意味

- **1. 複素微分の定義**
  - Definition 2.3-1（複素微分：$f'(z_0) = \displaystyle\lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$；この極限が存在するとき $f$ は $z_0$ で複素微分可能という）
  - Remark（実数の微分との決定的な違い：$\Delta z \to 0$ は複素平面上のあらゆる方向から近づくことを意味する；これが複素微分の強力さの源泉であり、後に「正則ならば無限回微分可能」という驚くべき結果をもたらす）
  - Example 2.3-1（$f(z) = z^2$ の微分：$f'(z) = \displaystyle\lim_{\Delta z \to 0}\frac{(z+\Delta z)^2 - z^2}{\Delta z} = \lim_{\Delta z \to 0}(2z + \Delta z) = 2z$；実数と同じ公式が成立）

- **2. 正則関数**
  - Definition 2.3-2（正則関数（holomorphic function）：開集合 $U$ 上の全ての点で複素微分可能な関数 $f : U \to \mathbb{C}$；$U$ 上正則であるという）
  - Definition 2.3-3（整関数（entire function）：$\mathbb{C}$ 全体で正則な関数；多項式、$e^z$、$\sin z$ など）
  - Example 2.3-2（$f(z) = \overline{z}$ は全ての点で複素微分不可能であることの確認：実軸方向 $\Delta z = \Delta x$ からの極限は $1$、虚軸方向 $\Delta z = i\Delta y$ からの極限は $-1$；方向によって異なるため極限が存在しない）

### §2.4 コーシー・リーマンの方程式（C-R）
**内容:** 正則であるための必要十分条件、調和関数との関係

- **1. コーシー・リーマンの方程式**
  - Theorem 2.4-1（コーシー・リーマンの必要条件：$f = u + iv$ が $z_0 = x_0 + iy_0$ で複素微分可能ならば $\dfrac{\partial u}{\partial x} = \dfrac{\partial v}{\partial y}$、$\dfrac{\partial u}{\partial y} = -\dfrac{\partial v}{\partial x}$ が $z_0$ で成立する）
  - Proof（実軸方向と虚軸方向から極限を取り、実部・虚部を比較する；$f'(z_0) = u_x + iv_x = v_y - iu_y$）
  - Theorem 2.4-2（コーシー・リーマンの十分条件：$u, v$ が $z_0$ の近傍で偏微分可能かつ $C^1$ 級で、C-R 方程式を満たすならば $f$ は $z_0$ で複素微分可能）
  - Example 2.4-1（$f(z) = z^2 = (x^2-y^2) + 2xyi$；$u_x = 2x = v_y$、$u_y = -2y = -v_x$；C-R 方程式の確認）
  - Example 2.4-2（$f(z) = \overline{z} = x - iy$；$u_x = 1$、$v_y = -1$；$u_x \neq v_y$ なので全ての点でC-R 方程式が不成立→正則でない）

- **2. 調和関数との関係**
  - Definition 2.4-1（調和関数：$C^2$ 級関数 $\phi : U \to \mathbb{R}$ がラプラス方程式 $\Delta\phi = \phi_{xx} + \phi_{yy} = 0$ を満たすとき $\phi$ は調和であるという）
  - Theorem 2.4-3（正則関数の実部・虚部は調和：$f = u + iv$ が $U$ 上正則で $C^2$ 級ならば $u, v$ はともに $U$ 上調和である）
  - Remark（証明：C-R 方程式 $u_x = v_y$、$u_y = -v_x$ を $x$ および $y$ でそれぞれ微分し足し合わせると $\Delta u = u_{xx} + u_{yy} = v_{yx} - v_{xy} = 0$；$\Delta v = 0$ も同様）
  - Definition 2.4-2（共役調和関数：$U$ 上で調和な $u$ に対し $f = u + iv$ が正則となるような $v$ を $u$ の共役調和関数という）
  - Example 2.4-3（$u(x,y) = x^2 - y^2$ の共役調和関数の求解：C-R 方程式 $v_y = u_x = 2x$、$v_x = -u_y = 2y$ から $v = 2xy + C$（$C$ は実定数）；$f = z^2 + C$ と対応）


---

## Chapter 3: 初等関数
**テーマ:** 指数・対数・三角関数の複素拡張

### §3.1 指数関数 $e^z$
**内容:** 定義、周期性、写像の様子

- **1. 指数関数の定義**
  - Definition 3.1-1（複素指数関数：$e^z = e^{x+iy} = e^x(\cos y + i\sin y)$（$z = x+iy$）；べき級数 $\displaystyle\sum_{n=0}^{\infty}\dfrac{z^n}{n!}$ と一致することが確かめられる）
  - Theorem 3.1-1（オイラーの公式：$e^{i\theta} = \cos\theta + i\sin\theta$；特に $e^{i\pi} + 1 = 0$（オイラーの等式））
  - Proposition 3.1-1（指数関数の性質：$e^{z+w} = e^z e^w$；$|e^z| = e^{\text{Re}(z)}$；$e^z$ は $\mathbb{C}$ 全体で正則で $(e^z)' = e^z$）

- **2. 周期性と写像**
  - Theorem 3.1-2（周期性：$e^z$ は周期 $2\pi i$ を持つ；$e^{z+2\pi i} = e^z$）
  - Remark（実数の指数関数とは異なり複素指数関数は周期的；帯状領域 $0 \leq \text{Im}(z) < 2\pi$ を $\mathbb{C} \setminus \{0\}$ に全単射で写す）
  - Example 3.1-1（虚軸上の $z = iy$ の像：$e^{iy} = \cos y + i\sin y$；単位円上を反時計回りに一周する；$y$ が $0$ から $2\pi$ まで動くと単位円を一周することの可視化）

### §3.2 三角関数と双曲線関数
**内容:** $\sin z, \cos z, \sinh z, \cosh z$ の定義と公式

- **1. 複素三角関数**
  - Definition 3.2-1（複素三角関数：$\cos z = \dfrac{e^{iz}+e^{-iz}}{2}$、$\sin z = \dfrac{e^{iz}-e^{-iz}}{2i}$）
  - Proposition 3.2-1（基本公式：$\sin^2 z + \cos^2 z = 1$；$\sin(z+w) = \sin z\cos w + \cos z\sin w$；$(\sin z)' = \cos z$、$(\cos z)' = -\sin z$；周期 $2\pi$）
  - Example 3.2-1（$\sin(x+iy) = \sin x\cosh y + i\cos x\sinh y$；純虚数 $z = iy$ のとき $|\sin(iy)| = |\sinh y| \to \infty$（$y \to \infty$）；複素三角関数は有界でない）

- **2. 双曲線関数**
  - Definition 3.2-2（複素双曲線関数：$\cosh z = \dfrac{e^z+e^{-z}}{2}$、$\sinh z = \dfrac{e^z-e^{-z}}{2}$）
  - Proposition 3.2-2（三角関数と双曲線関数の関係：$\cosh(iz) = \cos z$、$\sinh(iz) = i\sin z$；$\cosh^2 z - \sinh^2 z = 1$）

### §3.3 対数関数 $\log z$
**内容:** 多価性、主値 $\text{Log}\,z$、分枝

- **1. 複素対数関数の多価性**
  - Definition 3.3-1（複素対数関数：$e^w = z$（$z \neq 0$）を満たす $w$ を $\log z$ と書く；$z = re^{i\theta}$ のとき $w = \ln r + i(\theta + 2\pi k)$（$k \in \mathbb{Z}$）となり無限多価）
  - Definition 3.3-2（主値対数：$\text{Log}\,z = \ln|z| + i\,\text{Arg}\,z$（$\text{Arg}\,z \in (-\pi, \pi]$）；$\mathbb{C} \setminus (-\infty, 0]$ 上で正則な一価関数）
  - Remark（負の実軸 $(-\infty, 0]$ を除かなければならない理由：$z$ が負の実軸を横切るとき $\text{Arg}\,z$ が $\pm\pi$ で不連続に飛ぶため；この除いた直線を「分枝切断」という）

- **2. 分枝と正則性**
  - Definition 3.3-3（分枝：多価関数の一価で正則な選択；分枝切断の取り方により無限通りの分枝が存在する）
  - Proposition 3.3-1（主値対数の微分：$\mathbb{C} \setminus (-\infty, 0]$ 上で $(\text{Log}\,z)' = 1/z$）
  - Example 3.3-1（$\text{Log}(-1) = i\pi$；$\text{Log}(i) = i\pi/2$；$\text{Log}(1+i) = \dfrac{1}{2}\ln 2 + i\dfrac{\pi}{4}$；実数の $\ln$ との比較）

### §3.4 一般のべき関数 $z^a$
**内容:** 定義とその多価性

- **1. 一般べき関数**
  - Definition 3.4-1（一般べき関数：$a \in \mathbb{C}$、$z \neq 0$ に対し $z^a = e^{a\log z}$；$\log z$ の多価性により一般に多価）
  - Proposition 3.4-1（$a$ が整数 $n$ のとき $z^n = e^{n\log z}$ は一価；$a = 1/n$（$n$ 整数）のとき $n$ 価；$a$ が無理数や一般の複素数のとき無限多価）
  - Example 3.4-1（$i^i$ の値：$i = e^{i\pi/2}$ より $i^i = e^{i\log i} = e^{i(i\pi/2 + 2\pi k i)} = e^{-\pi/2 - 2\pi k}$（$k \in \mathbb{Z}$）；主値は $e^{-\pi/2} \approx 0.208$；$i^i$ が実数になることの驚き）
  - Example 3.4-2（$z^{1/2}$ の分枝：$\sqrt{re^{i\theta}} = \sqrt{r}\,e^{i\theta/2}$；分枝切断を負の実軸に取ると $\sqrt{z}$ が $\mathbb{C}\setminus(-\infty,0]$ 上で正則な一価関数になる）


---

## Chapter 4: 複素積分
**テーマ:** コーシーの積分定理

### §4.1 複素積分の定義
**内容:** 線積分の定義と基本的性質

- **1. 複素積分の定義**
  - Definition 4.1-1（複素積分：滑らかな曲線 $\gamma : [a,b] \to \mathbb{C}$ に沿った $f$ の積分 $\displaystyle\int_\gamma f(z)\,dz = \int_a^b f(\gamma(t))\gamma'(t)\,dt$）
  - Remark（実部・虚部に分解すると $\displaystyle\int_\gamma f\,dz = \int_\gamma (u\,dx - v\,dy) + i\int_\gamma (v\,dx + u\,dy)$；ベクトル解析（3-1）の線積分と本質的に同じ構造）

- **2. 基本的性質**
  - Proposition 4.1-1（複素積分の線形性：$\displaystyle\int_\gamma (af + bg)\,dz = a\int_\gamma f\,dz + b\int_\gamma g\,dz$）
  - Proposition 4.1-2（向きの逆転：$\displaystyle\int_{-\gamma} f\,dz = -\int_\gamma f\,dz$）
  - Proposition 4.1-3（ML 不等式：$|\gamma|$ を $\gamma$ の長さとするとき $\left|\displaystyle\int_\gamma f\,dz\right| \leq \max_{\gamma}|f|\cdot|\gamma|$；積分の評価に頻繁に用いる）
  - Example 4.1-1（$\displaystyle\int_\gamma z\,dz$ の計算（$\gamma$：原点から $1+i$ への直線）：$\gamma(t) = (1+i)t$（$0 \leq t \leq 1$）；$\gamma'(t) = 1+i$；$\displaystyle\int_0^1(1+i)t\cdot(1+i)\,dt = (1+i)^2/2 = i$）

### §4.2 原始関数の存在と積分
**内容:** 経路無依存性、原始関数を用いた計算

- **1. 原始関数**
  - Definition 4.2-1（原始関数：$F'(z) = f(z)$ を $U$ 上で満たす正則関数 $F$ を $f$ の原始関数という）
  - Theorem 4.2-1（原始関数による積分：$f$ が $U$ 上で原始関数 $F$ を持つとき、$U$ 内の任意の曲線 $\gamma$（始点 $z_0$、終点 $z_1$）に対して $\displaystyle\int_\gamma f\,dz = F(z_1) - F(z_0)$；積分は経路によらず始終点のみで決まる）
  - Example 4.2-1（$\displaystyle\int_\gamma z^n\,dz$（$n \neq -1$）：$F(z) = z^{n+1}/(n+1)$ より経路によらず $F(z_1) - F(z_0)$；特に閉曲線上では $0$）

- **2. 経路独立性**
  - Theorem 4.2-2（経路独立性の同値条件：$f$ が連続なとき次は同値：(1) $f$ は $U$ 上で原始関数を持つ；(2) $f$ の積分は $U$ 内で経路によらない；(3) $U$ 内の任意の閉曲線 $\gamma$ で $\oint_\gamma f\,dz = 0$）

### §4.3 コーシーの積分定理
**内容:** 単連結領域での周回積分の値、証明の概略

- **1. コーシーの積分定理**
  - Theorem 4.3-1（コーシーの積分定理：$f$ が単連結領域 $U$ 上正則ならば、$U$ 内の任意の閉曲線 $\gamma$ に対して $\displaystyle\oint_\gamma f(z)\,dz = 0$）
  - Remark（証明の概略（グルサによる方針）：$f'$ の連続性を仮定せずに証明できる。三角形に対して積分がゼロになることを三角形の縮小列を用いて示し（グルサの補題）、それを一般の閉曲線に拡張する）
  - Remark（グリーンの定理を用いた証明（$f'$ の連続性を仮定）：C-R 方程式からグリーンの定理の被積分関数がゼロになることを確認する方針でも証明できる）
  - Example 4.3-1（$\displaystyle\oint_{|z|=1} z^n\,dz$：$n \neq -1$ のとき原始関数 $z^{n+1}/(n+1)$ が存在するので $0$；$n = -1$ のとき $\gamma(t) = e^{it}$（$0 \leq t \leq 2\pi$）を代入すると $\displaystyle\int_0^{2\pi} e^{-it} \cdot ie^{it}\,dt = 2\pi i \neq 0$；$1/z$ は原点を除いた領域では正則だが単連結でないため定理が適用できない）

### §4.4 コーシーの積分定理の応用：経路変形原理
**内容:** 経路変形原理

- **1. 経路変形原理**
  - Theorem 4.4-1（経路変形原理：$f$ が領域 $U$ 上正則で $\gamma_0, \gamma_1$ が $U$ 内で同じ始点と終点を持ち $U$ 内でホモトープ（連続変形可能）ならば $\displaystyle\int_{\gamma_0} f\,dz = \int_{\gamma_1} f\,dz$；閉曲線の場合は $\gamma_0$ が $U$ 内で $\gamma_1$ にホモトープならば $\oint_{\gamma_0} f\,dz = \oint_{\gamma_1} f\,dz$）
  - Remark（直感的意味：積分路を動かしても経路の途中に特異点（正則でない点）を通過しない限り積分値は変わらない；特異点を「避けながら」経路を変形できる）
  - Example 4.4-1（$\displaystyle\oint_{|z|=2} \frac{1}{z}\,dz$：経路変形により $|z|=1$ の積分に置き換えられ $2\pi i$ を得る；どんなに大きな円で積分しても値は $2\pi i$）
  - Example 4.4-2（ドーナツ型領域での積分：特異点 $z = 0$ を囲む2つの閉曲線の積分が等しいことの確認；領域の穴（トポロジー）が積分値を決める）


---

## Chapter 5: 正則関数の性質
**テーマ:** 積分公式とテイラー展開

### §5.1 コーシーの積分公式
**内容:** コーシーの積分公式とグルサの公式

- **1. コーシーの積分公式**
  - Theorem 5.1-1（コーシーの積分公式：$f$ が単連結領域 $U$ 上正則で $\gamma$ が $U$ 内の $z_0$ を正方向に囲む閉曲線ならば $f(z_0) = \dfrac{1}{2\pi i}\displaystyle\oint_\gamma \frac{f(z)}{z - z_0}\,dz$）
  - Remark（証明の骨格：$g(z) = (f(z) - f(z_0))/(z-z_0)$ が除去可能特異点を持つことを用いて $z_0$ の周りの小円への経路変形を行い、$f(z_0)$ を取り出す）
  - Remark（驚くべき意味：正則関数の境界上での値が内部の値を完全に決定する（一種の「遠隔作用」）；これが複素解析の剛性の根幹）
  - Example 5.1-1（$\displaystyle\oint_{|z|=2} \frac{e^z}{z-1}\,dz = 2\pi i\,e^1 = 2\pi ie$；$\displaystyle\oint_{|z|=2} \frac{\cos z}{z(z-3)}\,dz$：$z=0$ が経路内・$z=3$ が経路外；$= 2\pi i \cdot \cos 0/(-3) = -2\pi i/3$）

- **2. グルサの公式（高階微分）**
  - Theorem 5.1-2（グルサの公式：$f$ が $U$ 上正則ならば $f$ は $U$ 上何回でも複素微分可能で $f^{(n)}(z_0) = \dfrac{n!}{2\pi i}\displaystyle\oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}}\,dz$）
  - Remark（これは「$C^1$ 正則」から「$C^\infty$ 正則」が自動的に従うという実解析にはない驚くべき事実；実関数では微分可能でも2階微分可能でない例がある）

### §5.2 正則関数の諸定理
**内容:** モレラの定理、リュービルの定理、代数学の基本定理

- **1. モレラの定理（コーシーの逆）**
  - Theorem 5.2-1（モレラの定理：$f$ が $U$ 上連続で任意の閉三角形 $\Delta \subset U$ に対して $\oint_{\partial\Delta} f\,dz = 0$ ならば $f$ は $U$ 上正則である）
  - Remark（コーシーの積分定理の逆命題に相当する；積分がゼロであることから微分可能性が従うという、実解析とは逆方向の論理）

- **2. リュービルの定理と代数学の基本定理**
  - Theorem 5.2-2（リュービルの定理：有界な整関数は定数である）
  - Remark（証明：$f$ が有界整関数のとき、グルサの公式 $f'(z_0) = \dfrac{1}{2\pi i}\oint_{|z|=R}\frac{f(z)}{(z-z_0)^2}dz$ にML 不等式を適用して $|f'(z_0)| \leq M/R \to 0$（$R\to\infty$）を得る；$f' \equiv 0$ より $f$ は定数）
  - Theorem 5.2-3（代数学の基本定理：$n \geq 1$ 次の複素係数多項式は $\mathbb{C}$ の中に少なくとも1つの零点を持つ）
  - Proof（リュービルの定理による証明：$p(z)$ が零点を持たないとすれば $1/p(z)$ は整関数；$|p(z)| \to \infty$（$|z| \to \infty$）なので $1/p$ は有界；リュービルの定理により $1/p$ は定数、これは矛盾）

### §5.3 最大値原理
**内容:** 領域内部で絶対値が最大とならない性質

- **1. 最大値原理**
  - Theorem 5.3-1（最大値原理：$f$ が領域 $U$ 上正則かつ定数でないとき、$|f|$ は $U$ 内部に最大値を持たない）
  - Corollary 5.3-1（有界領域上の最大値：$f$ が有界領域 $D$ の閉包 $\overline{D}$ 上連続で $D$ 上正則ならば $\max_{\overline{D}}|f|$ は境界 $\partial D$ 上で達成される）
  - Remark（証明の方針：コーシーの積分公式から正則関数の値は周囲の値の平均として表せる（平均値性質）；平均値の最大値原理から従う）
  - Example 5.3-1（実解析との対比：実微分可能な関数は内部に最大値を持てる（例 $f(x) = 1 - x^2$ の $x = 0$）；正則関数にはこのような内部最大が存在しないという強い拘束）

### §5.4 テイラー展開
**内容:** 正則関数の冪級数展開可能性、収束半径

- **1. 正則関数とべき級数**
  - Theorem 5.4-1（テイラー展開定理：$f$ が $z_0$ を中心とする開円板 $B(z_0, R)$ 上正則ならば $f(z) = \displaystyle\sum_{n=0}^{\infty} a_n (z-z_0)^n$（$|z - z_0| < R$）；$a_n = \dfrac{f^{(n)}(z_0)}{n!} = \dfrac{1}{2\pi i}\oint_\gamma\dfrac{f(z)}{(z-z_0)^{n+1}}dz$）
  - Remark（重要な含意：$f$ が1回複素微分可能ならば自動的にべき級数展開可能（「解析的」）；実解析では $C^\infty$ 級でも解析的でない関数が存在する（例：$e^{-1/x^2}$）；複素解析では「正則」と「解析的」が同値）
  - Example 5.4-1（基本関数のテイラー展開（$z_0 = 0$）：$e^z = \displaystyle\sum_{n=0}^\infty \frac{z^n}{n!}$（収束半径 $\infty$）；$\sin z = \displaystyle\sum_{n=0}^\infty \frac{(-1)^n z^{2n+1}}{(2n+1)!}$；$\dfrac{1}{1-z} = \displaystyle\sum_{n=0}^\infty z^n$（$|z| < 1$）；収束半径は最近傍の特異点までの距離）

- **2. 一致の定理**
  - Theorem 5.4-2（一致の定理：$f, g$ が領域 $U$ 上正則で、集積点を持つ部分集合 $S \subset U$ 上で $f = g$ ならば $U$ 全体で $f \equiv g$）
  - Remark（直感：正則関数は「局所的な情報」から「大域的な情報」が復元できる；例えば実軸上での値だけで複素平面全域の値が決まる）
  - Example 5.4-2（$f(z) = \sin^2 z + \cos^2 z$ と $g(z) = 1$ は実軸上で一致する；一致の定理により $\mathbb{C}$ 全体で $f \equiv g$；実数の公式が複素数に自動的に延長される）


---

## Chapter 6: 孤立特異点とローラン展開
**テーマ:** 特異点の周りでの挙動

### §6.1 ローラン展開
**内容:** 円環領域での級数展開、主要部と正則部

- **1. ローラン展開**
  - Theorem 6.1-1（ローラン展開定理：$f$ が円環領域 $A = \{z \mid r < |z - z_0| < R\}$ 上正則ならば $f(z) = \displaystyle\sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$；$c_n = \dfrac{1}{2\pi i}\displaystyle\oint_\gamma \dfrac{f(z)}{(z-z_0)^{n+1}}\,dz$（$r < |\gamma| < R$））
  - Definition 6.1-1（主要部と正則部：ローラン展開の $n \geq 0$ の部分を正則部（テイラー部分）、$n < 0$ の部分（$\displaystyle\sum_{n=1}^{\infty}\dfrac{c_{-n}}{(z-z_0)^n}$）を主要部という）
  - Example 6.1-1（$f(z) = \dfrac{e^z}{z^2}$ の $z = 0$ 周りのローラン展開：$e^z = \displaystyle\sum_{n=0}^\infty \frac{z^n}{n!}$ より $\dfrac{e^z}{z^2} = \dfrac{1}{z^2} + \dfrac{1}{z} + \dfrac{1}{2} + \dfrac{z}{6} + \cdots$；主要部は $z^{-2} + z^{-1}$）

### §6.2 孤立特異点の分類
**内容:** 除去可能特異点、極、真性特異点

- **1. 孤立特異点の定義と分類**
  - Definition 6.2-1（孤立特異点：$f$ が $z_0$ では定義されないが $0 < |z - z_0| < r$ で正則なとき $z_0$ を孤立特異点という）
  - Definition 6.2-2（特異点の分類：ローラン展開の主要部により3種に分類：(1) 除去可能特異点：主要部が $0$（$c_{-n} = 0$ for all $n \geq 1$）；(2) 位数 $m$ の極：主要部が有限項（$c_{-m} \neq 0$ かつ $c_{-n} = 0$ for $n > m$）；(3) 真性特異点：主要部が無限項）
  - Theorem 6.2-1（リーマンの除去可能特異点定理：$z_0$ で $f$ が有界なら $z_0$ は除去可能特異点；$f(z_0)$ を適切に定義すれば $z_0$ でも正則になる）
  - Theorem 6.2-2（極の特徴づけ：$z_0$ が $m$ 位の極 $\Leftrightarrow$ $\lim_{z\to z_0}|f(z)| = \infty$ かつ $g(z) = (z-z_0)^m f(z)$ が $z_0$ で除去可能特異点を持ち $g(z_0) \neq 0$）
  - Theorem 6.2-3（カゾラティ・ワイエルシュトラスの定理：$z_0$ が真性特異点ならば任意の $w \in \mathbb{C}$ と任意の $\varepsilon, \delta > 0$ に対し $|z - z_0| < \delta$ かつ $|f(z) - w| < \varepsilon$ となる $z$ が存在する；すなわち $f$ は $z_0$ の近傍で $\mathbb{C}$ の稠密な像を持つ）
  - Example 6.2-1（$f(z) = \dfrac{\sin z}{z}$：$z = 0$ は除去可能特異点；$\lim_{z\to 0}\frac{\sin z}{z} = 1$ と定義すれば正則；$g(z) = \dfrac{1}{z^2}$：$z = 0$ は2位の極；$h(z) = e^{1/z}$：$z = 0$ は真性特異点（ローラン展開 $\sum_{n=0}^\infty z^{-n}/n!$ は無限主要部を持つ））

### §6.3 無限遠点
**内容:** リーマン球面、無限遠点での正則性・特異性

- **1. リーマン球面**
  - Definition 6.3-1（リーマン球面：$\mathbb{C}$ に無限遠点 $\infty$ を付加した一点コンパクト化 $\hat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}$；立体射影により単位球面 $S^2$ と同一視できる）
  - Definition 6.3-2（無限遠点での正則性：変換 $w = 1/z$ で $z \to \infty$ を $w \to 0$ に写し、$g(w) = f(1/w)$ の $w = 0$ での挙動を調べる）
  - Proposition 6.3-1（整関数の無限遠での挙動：定数でない整関数は $z \to \infty$ で $|f(z)| \to \infty$；$e^z$ は真性特異点、多項式は極を持つ）
  - Example 6.3-1（$f(z) = z^2$ の $z = \infty$ での挙動：$g(w) = 1/w^2$；$w = 0$ は2位の極；よって $f$ は無限遠点に2位の極を持つ；$f(z) = e^z$ の $z = \infty$ では $g(w) = e^{1/w}$ の $w = 0$ が真性特異点）


---

## Chapter 7: 留数定理
**テーマ:** 積分の計算技術

### §7.1 留数の定義と計算
**内容:** 留数の定義、極における計算公式

- **1. 留数の定義**
  - Definition 7.1-1（留数：$f$ の孤立特異点 $z_0$ におけるローラン展開の $c_{-1}$ を $f$ の $z_0$ における留数といい $\text{Res}(f; z_0)$ と書く）
  - Remark（$c_{-1}$ だけが特別な意味を持つ理由：$\oint_\gamma (z-z_0)^n\,dz = 0$（$n \neq -1$）、$\oint_\gamma (z-z_0)^{-1}\,dz = 2\pi i$；ローラン展開を積分すると $c_{-1}$ の項だけが生き残る）

- **2. 極における留数の計算公式**
  - Proposition 7.1-1（1位の極の留数：$z_0$ が $f$ の1位の極のとき $\text{Res}(f; z_0) = \displaystyle\lim_{z \to z_0}(z - z_0)f(z)$）
  - Proposition 7.1-2（$m$ 位の極の留数：$\text{Res}(f; z_0) = \dfrac{1}{(m-1)!}\displaystyle\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\!\left[(z-z_0)^m f(z)\right]$）
  - Proposition 7.1-3（$f = g/h$（$g, h$ 正則、$g(z_0) \neq 0$、$h(z_0) = 0$、$h'(z_0) \neq 0$）の留数：$\text{Res}(f; z_0) = g(z_0)/h'(z_0)$）
  - Example 7.1-1（$f(z) = \dfrac{1}{z^2+1} = \dfrac{1}{(z+i)(z-i)}$ の $z = i$ での留数：Proposition 7.1-1 より $\text{Res}(f; i) = \displaystyle\lim_{z\to i}\frac{z-i}{z^2+1} = \frac{1}{2i}$；または Proposition 7.1-3 で $g = 1$、$h = z^2+1$、$h'(i) = 2i$）

### §7.2 留数定理
**内容:** 定理の主張と証明

- **1. 留数定理**
  - Theorem 7.2-1（留数定理：$f$ が単純閉曲線 $\gamma$ の内部とその上で有限個の孤立特異点 $z_1, \ldots, z_k$ を除いて正則なとき $\displaystyle\oint_\gamma f(z)\,dz = 2\pi i\sum_{j=1}^k \text{Res}(f; z_j)$）
  - Proof（各特異点 $z_j$ を小円で囲み、コーシーの積分定理で繋ぎ合わせる；各小円上の積分がローラン展開の $c_{-1}$ 項（留数）を取り出すことを示す）
  - Example 7.2-1（$\displaystyle\oint_{|z|=3}\frac{z+1}{z^2-1}\,dz$：$z = \pm 1$ が経路内の1位の極；$\text{Res}(f;1) = \dfrac{1+1}{1+1} = 1$、$\text{Res}(f;-1) = \dfrac{-1+1}{-2} = 0$；$\displaystyle\oint = 2\pi i(1+0) = 2\pi i$）

### §7.3 定積分への応用
**内容:** 三角関数の有理式の積分、実軸上の広義積分

- **1. 三角関数型積分**
  - Theorem 7.3-1（三角関数型積分：$\displaystyle\int_0^{2\pi} R(\cos\theta, \sin\theta)\,d\theta$ の計算；$z = e^{i\theta}$ と置くと $\cos\theta = \dfrac{z+z^{-1}}{2}$、$\sin\theta = \dfrac{z-z^{-1}}{2i}$、$d\theta = \dfrac{dz}{iz}$ として $|z|=1$ 上の周回積分に帰着できる）
  - Example 7.3-1（$\displaystyle\int_0^{2\pi}\frac{d\theta}{2+\cos\theta}$：$z = e^{i\theta}$ で $\displaystyle\oint_{|z|=1}\frac{1}{z^2+4z+1}\cdot\frac{2}{i}\,dz$；$|z|=1$ 内の極は $z = -2+\sqrt{3}$；留数計算で $\dfrac{2\pi}{\sqrt{3}}$ を得る）

- **2. 実軸上の広義積分**
  - Theorem 7.3-2（有理関数の実積分：分母の次数が分子より2以上高く実軸上に極がない有理関数 $R(x)$ に対して $\displaystyle\int_{-\infty}^{\infty} R(x)\,dx = 2\pi i \sum_{\text{Im}(z_j)>0}\text{Res}(R; z_j)$；上半平面の大円弧 $\Gamma_R$ 上の積分が $R \to \infty$ で $0$ に収束することから従う）
  - Example 7.3-2（$\displaystyle\int_{-\infty}^{\infty}\frac{1}{1+x^4}\,dx$：上半平面の極 $z = e^{i\pi/4}$、$z = e^{3i\pi/4}$ の留数を計算して $\dfrac{\pi}{\sqrt{2}}$ を得る）
  - Theorem 7.3-3（ジョルダンの補題：$|R(z)| \to 0$（$|z| \to \infty$）ならば $\displaystyle\int_{-\infty}^\infty R(x)e^{iax}\,dx$（$a > 0$）の計算に上半平面の留数が使える；$\displaystyle\int_{-\infty}^\infty\frac{\cos ax}{1+x^2}\,dx = \pi e^{-a}$ などへの応用）

### §7.4 偏角の原理とルーシェの定理
**内容:** 零点・極の個数と周回積分の関係、解の個数の評価

- **1. 偏角の原理**
  - Theorem 7.4-1（偏角の原理：$f$ が単純閉曲線 $\gamma$ の内部で有限個の零点（重複度込み）$Z$ 個と極（位数込み）$P$ 個を持ち、$\gamma$ 上で $f \neq 0$ ならば $\dfrac{1}{2\pi i}\displaystyle\oint_\gamma \frac{f'(z)}{f(z)}\,dz = Z - P$）
  - Remark（幾何学的意味：左辺は $z$ が $\gamma$ を一周するとき $w = f(z)$ が原点を何回巻くかの巻き数（winding number）；零点は巻き数に $+1$、極は $-1$ を寄与する）
  - Example 7.4-1（$f(z) = z^3 - 1$ の $|z| < 2$ 内の零点数：$\oint_{|z|=2} f'/f\,dz = 2\pi i \cdot Z$；$f$ に極はない；$Z = 3$（代数学の基本定理と整合）の確認）

- **2. ルーシェの定理**
  - Theorem 7.4-2（ルーシェの定理：$f, g$ が単純閉曲線 $\gamma$ の内部と上で正則で $\gamma$ 上で $|g(z)| < |f(z)|$ ならば $f$ と $f + g$ の $\gamma$ 内の零点数は等しい）
  - Remark（直感：$g$ が $f$ より小さければ $f+g$ の零点の個数は $f$ の零点の個数と変わらない；「支配的な項が零点の個数を決める」）
  - Example 7.4-2（$p(z) = z^7 - 5z^3 + z - 2$ の $|z| < 2$ 内の零点数：$|z| = 2$ 上で $|5z^3 - z + 2| \leq 5 \cdot 8 + 2 + 2 = 44 < 128 = |z^7|$；ルーシェの定理で $z^7$ の零点数 $7$ と一致；$p$ は $|z| < 2$ 内に7個の零点を持つ）


---

## Chapter 8: 等角写像
**テーマ:** 幾何学的性質と応用

### §8.1 等角写像の定義
**内容:** 角の保存、正則関数との関係

- **1. 等角写像**
  - Definition 8.1-1（等角写像（conformal map）：2曲線の交角（向きと大きさ）を保存する写像；正則関数 $f$ は $f'(z_0) \neq 0$ なる点 $z_0$ において等角写像を定める）
  - Theorem 8.1-1（正則関数の等角性：$f$ が $z_0$ で正則かつ $f'(z_0) \neq 0$ ならば $z_0$ を通る任意の2曲線のなす角（向き込み）は $f$ によって保存される）
  - Remark（証明の骨格：$\gamma'(0)$ が接ベクトルであれば $(f\circ\gamma)'(0) = f'(z_0)\gamma'(0)$；$f'(z_0)$ の乗算は全曲線に一様な回転・拡大を与えるので角度は不変）
  - Definition 8.1-2（臨界点：$f'(z_0) = 0$ となる点；この点では等角性が成立しない）
  - Example 8.1-1（$f(z) = z^2$ の $z = 0$（臨界点）での角度変換：実軸・虚軸のなす $90°$ の角が $f$ によって $0°$ に潰れる；$f'(0) = 0$ で等角でない）

### §8.2 一次分数変換（メビウス変換）
**内容:** 円円対応、不動点、具体的な写像例

- **1. メビウス変換の定義**
  - Definition 8.2-1（メビウス変換（一次分数変換）：$f(z) = \dfrac{az+b}{cz+d}$（$a,b,c,d \in \mathbb{C}$、$ad-bc \neq 0$）；$\hat{\mathbb{C}}$ 上の全単射な等角写像）

- **2. 基本性質**
  - Theorem 8.2-1（円円対応：メビウス変換は $\hat{\mathbb{C}}$ 上の「一般化された円」（直線または円）を「一般化された円」に写す）
  - Theorem 8.2-2（三点決定：$\hat{\mathbb{C}}$ の相異なる3点 $z_1, z_2, z_3$ を指定された3点 $w_1, w_2, w_3$ に写すメビウス変換は一意に存在する；複比 $(z, z_1; z_2, z_3) = (w, w_1; w_2, w_3)$ で与えられる）
  - Example 8.2-1（単位円板から上半平面への等角写像：$f(z) = i\dfrac{1-z}{1+z}$；$f(0) = i$、$f(1) = 0$、$f(-1) = \infty$；単位円 $|z| = 1$ が実軸に写ることの確認）
  - Example 8.2-2（上半平面から単位円板への写像：$f(z) = \dfrac{z - i}{z + i}$；$z = i$ が原点に写る；実軸が単位円周に写る）

### §8.3 代表的な等角写像
**内容:** $z^n$、$e^z$、ジューコフスキー変換

- **1. べき写像**
  - Example 8.3-1（$w = z^n$：偏角 $\theta \in (0, \pi/n)$ の扇形領域を上半平面に写す；角の頂点 $z = 0$ は臨界点（$nw = z^{n-1}$ の零点）で角度が $n$ 倍に拡大される）

- **2. 指数写像**
  - Example 8.3-2（$w = e^z$：帯状領域 $\{0 < \text{Im}(z) < \pi\}$ を上半平面に等角に写す；水平線が半直線に、垂直線が半円に写ることの確認）

- **3. ジューコフスキー変換**
  - Definition 8.3-1（ジューコフスキー変換：$w = z + \dfrac{1}{z}$；$z = re^{i\theta}$ のとき $w = (r+r^{-1})\cos\theta + i(r-r^{-1})\sin\theta$）
  - Proposition 8.3-1（単位円の外部 $|z| > 1$ をある「翼型」領域の外部に等角に写す；航空工学での翼断面形状（翼型）の設計に使われた歴史的応用）
  - Example 8.3-3（単位円 $|z| = 1$ の像：$w = 2\cos\theta$；実軸上の線分 $[-2, 2]$ に退化する；$|z| > 1$ 上の同心円族と放射状直線族がそれぞれ楕円族と双曲線族に写ることの確認）

### §8.4 リーマンの写像定理（概要）
**内容:** 単連結領域の等角同値性

- **1. リーマンの写像定理**
  - Theorem 8.4-1（リーマンの写像定理：$\mathbb{C}$ 全体でも1点でもない単連結領域 $U$ は単位円板 $\mathbb{D} = \{|z| < 1\}$ に等角に写像できる；さらに1点 $z_0 \in U$ と実数 $\theta_0$ を固定すると $f(z_0) = 0$、$\arg f'(z_0) = \theta_0$ を満たす等角同型写像 $f : U \to \mathbb{D}$ は一意に存在する）
  - Remark（証明の概略：モンテルの定理（正規族の選択）を用い、ある汎関数を最大化する正規族の点列の極限として $f$ を構成する；複素解析の集大成的な定理）
  - Remark（重要な意義：リーマンの写像定理により単連結領域の等角幾何学は単位円板のそれに帰着される；単位円板上の等角自己同型はメビウス変換 $e^{i\theta}\dfrac{z - a}{1 - \overline{a}z}$（$|a| < 1$）全体であり、これは双曲幾何の等長変換群に相当する（ポアンカレ計量））
  - Example 8.4-1（上半平面・単位円板・扇形・帯状領域はすべて互いに等角同型（リーマンの写像定理の帰結）；各々の間の具体的な等角写像は §8.2・§8.3 の例で構成済み）
