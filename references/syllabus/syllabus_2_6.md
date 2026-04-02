# 2-6: 微分方程式I

**前提科目:** 2-1（線形代数学II）、2-2（微分積分学II）

---

## Chapter 1: 1階常微分方程式
**テーマ:** 変数分離形、同次形、線形、完全微分方程式、特殊型

### §1.1 変数分離形
**内容:** 変数分離形の方程式の解法と指数成長モデルなどの具体例

- **1. 常微分方程式の導入**
  - Definition 1.1-1（常微分方程式・解・一般解・特殊解）
  - Remark（「一般解」とは任意定数を含む解の族のことであり、特定の初期条件を与えて任意定数を決定したものが「特殊解」である）

- **2. 変数分離形の定義と解法**
  - Definition 1.1-2（変数分離形：$\dfrac{dy}{dx} = f(x)g(y)$ の形）
  - Theorem 1.1-1（変数分離形の一般解：$g(y) \neq 0$ のとき $\displaystyle\int \frac{dy}{g(y)} = \int f(x)\,dx + C$）
  - Example 1.1-1（$\dfrac{dy}{dx} = ky$（指数成長・指数減衰）の一般解 $y = Ce^{kx}$；細菌の増殖モデル、放射性崩壊への応用）
  - Example 1.1-2（$\dfrac{dy}{dx} = -\dfrac{x}{y}$（半円）の一般解 $x^2 + y^2 = C^2$）

- **3. 特異解の注意**
  - Remark（$g(y) = 0$ となる定数解が一般解に含まれない場合があること；$\dfrac{dy}{dx} = y^2$ における $y = 0$）

### §1.2 1階線形方程式
**内容:** 積分因子を用いた解法と同次形の変数変換

- **1. 1階線形方程式の定義**
  - Definition 1.2-1（1階線形常微分方程式：$\dfrac{dy}{dx} + P(x)y = Q(x)$）
  - Definition 1.2-2（斉次方程式 $Q(x) = 0$ と非斉次方程式）

- **2. 積分因子による解法**
  - Theorem 1.2-1（積分因子 $\mu(x) = e^{\int P(x)\,dx}$ を用いた1階線形方程式の一般解：$y = e^{-\int P(x)\,dx}\!\left(\int Q(x)e^{\int P(x)\,dx}\,dx + C\right)$）
  - Example 1.2-1（$\dfrac{dy}{dx} - 2xy = x$ の一般解の導出）
  - Example 1.2-2（RC 回路 $RC\dfrac{dq}{dt} + q = CV$ における電荷 $q(t)$ の求解；過渡応答の解釈）

- **3. 同次形方程式**
  - Definition 1.2-3（同次形方程式：$\dfrac{dy}{dx} = F\!\left(\dfrac{y}{x}\right)$）
  - Theorem 1.2-2（置換 $v = y/x$ により変数分離形に帰着できること）
  - Example 1.2-3（$\dfrac{dy}{dx} = \dfrac{x+y}{x-y}$ の解法）

### §1.3 完全微分方程式
**内容:** 完全微分方程式の判定条件と積分因子による変換

- **1. 完全微分方程式の定義**
  - Definition 1.3-1（完全微分方程式：$M(x,y)\,dx + N(x,y)\,dy = 0$ が完全であるとは、あるポテンシャル関数 $F(x,y)$ が存在して $dF = M\,dx + N\,dy$ となること）

- **2. 完全性の判定条件**
  - Theorem 1.3-1（完全性の必要十分条件：単連結領域で $C^1$ 級のとき $\dfrac{\partial M}{\partial y} = \dfrac{\partial N}{\partial x}$）
  - Example 1.3-1（$(2xy + 3)\,dx + (x^2 - 4y)\,dy = 0$ が完全微分方程式であることの確認と一般解 $F(x,y) = x^2y + 3x - 2y^2 = C$ の導出）

- **3. 積分因子による完全化**
  - Definition 1.3-2（積分因子：掛けることで完全微分方程式になるような関数 $\mu(x,y)$）
  - Proposition 1.3-1（$\dfrac{1}{N}\!\left(\dfrac{\partial M}{\partial y} - \dfrac{\partial N}{\partial x}\right)$ が $x$ のみの関数ならば $\mu = \mu(x)$ が存在する）
  - Example 1.3-2（$y\,dx - x\,dy = 0$ に積分因子 $\mu = 1/y^2$ を掛けて完全化する例）

### §1.4 ベルヌーイ型とリッカティ型
**内容:** ベルヌーイ方程式の置換とリッカティ方程式の線形化

- **1. ベルヌーイ方程式**
  - Definition 1.4-1（ベルヌーイ方程式：$\dfrac{dy}{dx} + P(x)y = Q(x)y^n$（$n \neq 0, 1$））
  - Theorem 1.4-1（置換 $v = y^{1-n}$ により1階線形方程式に帰着できること）
  - Example 1.4-1（ロジスティック方程式 $\dfrac{dP}{dt} = rP\!\left(1 - \dfrac{P}{K}\right)$（$n = 2$ の場合）の解法と $S$ 字型成長曲線の解釈）

- **2. リッカティ方程式**
  - Definition 1.4-2（リッカティ方程式：$\dfrac{dy}{dx} = P(x) + Q(x)y + R(x)y^2$）
  - Theorem 1.4-2（特殊解 $y_1(x)$ が既知のとき、$y = y_1 + 1/v$ と置くと $v$ の1階線形方程式が得られること）
  - Example 1.4-2（特殊解 $y_1 = 1$ を利用した $\dfrac{dy}{dx} = 1 - y + y^2 - x^2 + 2x$ の線形化）

### §1.5 クレロー方程式と包絡線
**内容:** クレロー方程式の一般解と特異解としての包絡線の導出

- **1. クレロー方程式**
  - Definition 1.5-1（クレロー方程式：$y = xp + f(p)$（ただし $p = dy/dx$））
  - Theorem 1.5-1（クレロー方程式の一般解は直線族 $y = Cx + f(C)$（$C$ は任意定数）であること）

- **2. 包絡線と特異解**
  - Definition 1.5-2（直線族の包絡線：各直線に接する曲線）
  - Theorem 1.5-2（クレロー方程式の特異解は一般解の直線族の包絡線であること；$p$ を消去することにより求められる）
  - Example 1.5-1（$y = xp - \dfrac{p^2}{4}$ の一般解 $y = Cx - \dfrac{C^2}{4}$（直線族）と特異解 $y = x^2$（放物線；包絡線）の導出）


---

## Chapter 2: 存在と一意性
**テーマ:** ピカールの逐次近似法、リプシッツ条件

### §2.1 初期値問題の設定
**内容:** 初期値問題の形式と局所解・大域解の違い

- **1. 初期値問題**
  - Definition 2.1-1（初期値問題（IVP）：$\dfrac{dy}{dx} = f(x,y)$、$y(x_0) = y_0$）
  - Remark（「解」とは区間 $I \ni x_0$ 上で定義され、方程式と初期条件を満たす微分可能な関数 $\phi : I \to \mathbb{R}$）

- **2. 局所解と大域解**
  - Definition 2.1-2（局所解：$x_0$ の十分小さな近傍 $I_\delta = (x_0 - \delta, x_0 + \delta)$ 上で定義された解；大域解：$f(x,y)$ が定義された全域で定義された解）
  - Example 2.1-1（$\dfrac{dy}{dx} = y^2$、$y(0) = 1$ の解 $y = \dfrac{1}{1-x}$ は $x = 1$ で爆発し、大域解が存在しない例）
  - Remark（解の爆発現象：「有限時間爆発」の直観的理解）

### §2.2 リプシッツ条件と平滑性
**内容:** リプシッツ連続の概念と一意性定理における役割

- **1. リプシッツ条件**
  - Definition 2.2-1（$y$ に関するリプシッツ条件：領域 $D$ 上で定数 $L > 0$ が存在し、すべての $(x,y_1),(x,y_2) \in D$ に対して $|f(x,y_1) - f(x,y_2)| \leq L|y_1 - y_2|$）
  - Example 2.2-1（$f(x,y) = y^2$ は $|y| \leq M$ の帯領域でリプシッツ条件を満たすが（$L = 2M$）、$\mathbb{R}^2$ 全体では満たさない）

- **2. 偏微分によるリプシッツ条件の十分条件**
  - Proposition 2.2-1（$\dfrac{\partial f}{\partial y}$ が閉矩形 $R = \{|x - x_0| \leq a,\, |y - y_0| \leq b\}$ 上で有界ならば $f$ はそこでリプシッツ条件を満たす）
  - Example 2.2-2（$f(x,y) = \sin y$ は $\mathbb{R}^2$ 全体でリプシッツ定数 $L = 1$ を持つことの確認）

- **3. リプシッツ条件と一意性の関係**
  - Example 2.2-3（$\dfrac{dy}{dx} = y^{1/3}$、$y(0) = 0$ はリプシッツ条件を満たさず、$y = 0$ と $y = \left(\dfrac{2x}{3}\right)^{3/2}$ の2つの解を持つ（一意性が破れる例））

### §2.3 ピカール・リンデレーフの定理
**内容:** リプシッツ連続性に基づく局所的な解の存在と一意性の定理

- **1. 積分方程式への等価変換**
  - Lemma 2.3-1（初期値問題 $y' = f(x,y)$、$y(x_0) = y_0$ は積分方程式 $y(x) = y_0 + \displaystyle\int_{x_0}^{x} f(t, y(t))\,dt$ と同値）

- **2. ピカール・リンデレーフの定理**
  - Theorem 2.3-1（ピカール・リンデレーフの定理：$f$ が矩形 $R$ 上で連続かつ $y$ についてリプシッツ連続ならば、初期値問題の解が $x_0$ のある近傍上に一意に存在する）
  - Remark（定理の主張は「局所」的な存在と一意性であり、解が大域的に一意に存在するかどうかは別問題であることに注意する）

### §2.4 逐次近似による証明
**内容:** ピカール反復の収束性と縮小写像の原理による証明

- **1. ピカール反復列**
  - Definition 2.4-1（ピカール反復列：$\phi_0(x) = y_0$、$\phi_{n+1}(x) = y_0 + \displaystyle\int_{x_0}^{x} f(t, \phi_n(t))\,dt$）
  - Example 2.4-1（$y' = y$、$y(0) = 1$ に対するピカール反復列 $\phi_n(x) = \displaystyle\sum_{k=0}^{n} \frac{x^k}{k!}$ の計算；極限 $e^x$ への収束の確認）

- **2. 縮小写像の原理による収束証明**
  - Theorem 2.4-1（縮小写像の原理（バナッハの不動点定理）：完備距離空間上の縮小写像は一意な不動点を持つ）
  - Theorem 2.4-2（ピカール・リンデレーフの定理の証明の概略：ピカール作用素 $T[\phi](x) = y_0 + \displaystyle\int_{x_0}^{x} f(t,\phi(t))\,dt$ が適切な関数空間上の縮小写像となること）
  - Remark（証明の骨格：一様収束ノルムを導入した完備距離空間上で $T$ のリプシッツ定数が1未満になるよう区間幅を取ることが鍵）


---

## Chapter 3: 線形微分方程式の理論
**テーマ:** 斉次方程式、非斉次方程式、ロンスキアン

### §3.1 斉次線形方程式と解空間
**内容:** 解の重ね合わせの原理と解空間の次元

- **1. $n$ 階線形常微分方程式**
  - Definition 3.1-1（$n$ 階線形常微分方程式：$y^{(n)} + p_{n-1}(x)y^{(n-1)} + \cdots + p_1(x)y' + p_0(x)y = q(x)$；斉次方程式は $q(x) \equiv 0$）

- **2. 重ね合わせの原理**
  - Theorem 3.1-1（重ね合わせの原理：斉次方程式の2つの解 $\phi_1, \phi_2$ に対し $c_1\phi_1 + c_2\phi_2$（$c_1, c_2 \in \mathbb{R}$）も解となる）

- **3. 解空間の構造**
  - Theorem 3.1-2（$n$ 階斉次線形方程式の解全体は $\mathbb{R}$ 上の $n$ 次元ベクトル空間をなす）
  - Remark（「$n$ 次元」という事実は後にロンスキアンを用いて示される。このことが「一般解は $n$ 個の独立な解の線形結合で表される」という主張の根拠となる）

### §3.2 ロンスキアンと基本解系
**内容:** ロンスキー行列式による基本解系の一次独立性の判定

- **1. ロンスキアンの定義**
  - Definition 3.2-1（ロンスキアン：関数 $\phi_1, \ldots, \phi_n$ に対し $W[\phi_1, \ldots, \phi_n](x) = \det \begin{pmatrix} \phi_1 & \cdots & \phi_n \\ \phi_1' & \cdots & \phi_n' \\ \vdots & & \vdots \\ \phi_1^{(n-1)} & \cdots & \phi_n^{(n-1)} \end{pmatrix}$）

- **2. ロンスキアンと一次独立性**
  - Theorem 3.2-1（$n$ 階斉次線形方程式の解 $\phi_1, \ldots, \phi_n$ に対して、ある点 $x_0$ で $W[\phi_1, \ldots, \phi_n](x_0) \neq 0$ ならば解は一次独立；逆に斉次方程式の解であれば、$W \equiv 0$ または $W$ は恒等的に $\neq 0$）
  - Example 3.2-1（$y'' - y = 0$ の解 $\phi_1 = e^x$、$\phi_2 = e^{-x}$ のロンスキアン $W = -2 \neq 0$ の計算と一次独立性の確認）

- **3. 基本解系**
  - Definition 3.2-2（基本解系：$n$ 個の一次独立な解の組 $\{\phi_1, \ldots, \phi_n\}$）
  - Theorem 3.2-2（基本解系は常に存在し、一般解は $y = c_1\phi_1 + \cdots + c_n\phi_n$（$c_i$ は任意定数）で表される）

### §3.3 非斉次方程式と定数変化法
**内容:** 一般解の構造と定数変化法による特殊解の構成

- **1. 非斉次方程式の一般解の構造**
  - Theorem 3.3-1（非斉次方程式の一般解：$y = y_h + y_p$（$y_h$：斉次方程式の一般解、$y_p$：非斉次方程式の特殊解））
  - Remark（特殊解の求め方を知りさえすれば一般解の全体が分かる。これが線形方程式論の中心的な便利さである）

- **2. 定数変化法（2階の場合）**
  - Theorem 3.3-2（定数変化法：基本解系 $\{\phi_1, \phi_2\}$ に対し特殊解を $y_p = v_1(x)\phi_1 + v_2(x)\phi_2$ と置いて $v_1', v_2'$ を連立方程式で決定する；$v_1' = -\dfrac{\phi_2 q}{W}$、$v_2' = \dfrac{\phi_1 q}{W}$）
  - Example 3.3-1（$y'' + y = \tan x$ の特殊解の定数変化法による導出）

### §3.4 解の最大延長と大域的存在
**内容:** 局所解の最大延長定理と解が有界である条件

- **1. 解の最大延長**
  - Definition 3.4-1（解の延長：解 $\phi : I \to \mathbb{R}$ が $\psi : J \to \mathbb{R}$（$I \subsetneq J$）に延長できるとは、$\psi$ も解で $\psi|_I = \phi$ となること；最大解は延長できない解）
  - Theorem 3.4-1（解の最大延長定理：リプシッツ条件のもとで初期値問題の解は最大区間へ一意に延長できる）

- **2. 線形方程式の大域的存在**
  - Theorem 3.4-2（線形方程式の大域存在定理：係数 $p_i(x)$ と $q(x)$ が区間 $I$ 全体で連続ならば、解は $I$ 全体で大域的に存在する）
  - Remark（非線形方程式では係数が滑らかでも有限時間爆発が起こりうる（§2.1, Example 2.1-1 参照）が、線形方程式ではそれが起きない。これは線形構造の大きな恩恵である）


---

## Chapter 4: 定数係数線形方程式
**テーマ:** 特性方程式、重根の場合、複素根

### §4.1 特性方程式と実数単根の場合
**内容:** 特性方程式の導入と実数単根に対する基本解

- **1. 定数係数斉次方程式**
  - Definition 4.1-1（$n$ 階定数係数斉次線形方程式：$a_n y^{(n)} + \cdots + a_1 y' + a_0 y = 0$（$a_i \in \mathbb{R}$、$a_n \neq 0$））

- **2. 指数関数解の仮定**
  - Theorem 4.1-1（$y = e^{\lambda x}$ を代入すると特性方程式 $a_n\lambda^n + \cdots + a_1\lambda + a_0 = 0$ が得られること）
  - Definition 4.1-2（特性多項式・特性方程式・特性根）

- **3. 実数単根の場合**
  - Theorem 4.1-2（特性方程式が相異なる実数根 $\lambda_1, \ldots, \lambda_n$ を持つとき、$e^{\lambda_1 x}, \ldots, e^{\lambda_n x}$ は基本解系をなす）
  - Example 4.1-1（$y''' - 6y'' + 11y' - 6y = 0$；特性方程式 $(\lambda-1)(\lambda-2)(\lambda-3) = 0$ の解法と一般解 $y = c_1 e^x + c_2 e^{2x} + c_3 e^{3x}$ の導出）

### §4.2 重根の場合
**内容:** 特性方程式が重根を持つ場合の基本解系の構成

- **1. 重根の場合の解の構成**
  - Theorem 4.2-1（特性根 $\lambda$ が $m$ 重根のとき $e^{\lambda x}, xe^{\lambda x}, x^2 e^{\lambda x}, \ldots, x^{m-1}e^{\lambda x}$ が対応する $m$ 個の一次独立な解をなす）
  - Remark（$xe^{\lambda x}$ などの「多項式 $\times$ 指数関数」型の解が現れる理由は、特性多項式の重根に対応する「べき乗」の寄与として理解できる）
  - Example 4.2-1（$y'' - 2y' + y = 0$；特性方程式 $(\lambda - 1)^2 = 0$ の2重根 $\lambda = 1$ に対する基本解系 $\{e^x, xe^x\}$ と一般解の導出）
  - Example 4.2-2（$y^{(4)} - 4y'' + 4y = 0$（$\lambda^2 = 2$ が重根）の一般解の求解）

### §4.3 複素根の場合
**内容:** 複素共役根に対する実数関数の基本解とオイラーの公式への関連

- **1. 複素根の実数形表示**
  - Theorem 4.3-1（特性方程式が複素共役根 $\alpha \pm \beta i$（$\beta > 0$、$\alpha, \beta \in \mathbb{R}$）を持つとき、$e^{\alpha x}\cos\beta x$ と $e^{\alpha x}\sin\beta x$ が対応する実数の基本解をなす）
  - Remark（背景はオイラーの公式 $e^{(\alpha+\beta i)x} = e^{\alpha x}(\cos\beta x + i\sin\beta x)$；実部と虚部をそれぞれ独立な実数解として取り出す）
  - Example 4.3-1（$y'' + 2y' + 5y = 0$；特性方程式 $\lambda^2 + 2\lambda + 5 = 0$ より $\lambda = -1 \pm 2i$、基本解系 $\{e^{-x}\cos 2x,\, e^{-x}\sin 2x\}$、一般解 $y = e^{-x}(c_1\cos 2x + c_2\sin 2x)$；減衰振動としての物理的解釈）

- **2. 複素重根の場合**
  - Theorem 4.3-2（複素根 $\alpha \pm \beta i$ が $m$ 重根のとき、$e^{\alpha x}\cos\beta x$、$xe^{\alpha x}\cos\beta x$、…、$x^{m-1}e^{\alpha x}\cos\beta x$、$e^{\alpha x}\sin\beta x$、…、$x^{m-1}e^{\alpha x}\sin\beta x$ の $2m$ 個が対応する基本解をなす）

### §4.4 $n$ 階方程式の一般解の構造
**内容:** 高階定数係数線形方程式の一般解と物理モデルへの応用

- **1. 一般解の完全な記述**
  - Theorem 4.4-1（$n$ 階定数係数斉次線形方程式の基本解系の完全な構成：実数単根・重根・複素共役根・複素重根の各場合に対し上記の規則を組み合わせることで $n$ 個の一次独立な解が得られる）

- **2. 単振動・減衰振動・共鳴への応用**
  - Example 4.4-1（単振子の方程式 $y'' + \omega^2 y = 0$；特性根 $\pm\omega i$、一般解 $y = c_1\cos\omega x + c_2\sin\omega x$；振幅と位相の表示 $y = A\cos(\omega x - \varphi)$）
  - Example 4.4-2（減衰振動 $y'' + 2\gamma y' + \omega_0^2 y = 0$（$\gamma > 0$）；過減衰・臨界減衰・不足減衰の3場合の分類と各基本解系の比較）


---

## Chapter 5: 非同次方程式の解法
**テーマ:** 未定係数法、定数変化法（一般化）、グリーン関数

### §5.1 未定係数法
**内容:** 右辺が特定の関数形である場合の特殊解の仮定と決定

- **1. 未定係数法の考え方**
  - Remark（右辺 $q(x)$ が多項式・指数関数・三角関数・またはそれらの積の形であれば、特殊解も同種の形を仮定できる）

- **2. 未定係数法の規則**
  - Theorem 5.1-1（未定係数法の基本規則：右辺の関数形に対応する特殊解の仮定形と、仮定形が斉次解と重なる場合の修正（$x$ の乗算））

- **3. 具体例**
  - Example 5.1-1（$y'' - 3y' + 2y = e^{3x}$；仮定 $y_p = Ae^{3x}$ から $A = 1/2$ を決定する計算）
  - Example 5.1-2（$y'' + y = \sin x$；右辺が斉次方程式の解と重なるため仮定を $y_p = x(A\cos x + B\sin x)$ と修正する「共鳴」の場合の計算；$y_p = -\dfrac{x}{2}\cos x$ の導出）
  - Example 5.1-3（$y'' - y' = x^2 e^x$；積の形の右辺に対する仮定形 $y_p = e^x(Ax^2 + Bx + C)$ の設定と係数決定）

### §5.2 定数変化法（一般化）
**内容:** 高階方程式への定数変化法の拡張とロンスキアンによる公式

- **1. $n$ 階方程式への拡張**
  - Theorem 5.2-1（定数変化法の一般式：基本解系 $\{\phi_1, \ldots, \phi_n\}$ に対し特殊解 $y_p = \displaystyle\sum_{k=1}^{n} v_k(x)\phi_k(x)$ を仮定し、$\displaystyle\sum_{k=1}^n v_k'(x)\phi_k^{(j)}(x) = 0$（$j = 0, \ldots, n-2$）および $\displaystyle\sum_{k=1}^n v_k'(x)\phi_k^{(n-1)}(x) = q(x)/a_n$ から $v_k'(x)$ を定める；クラメルの公式により $v_k'(x) = W_k(x)/W(x)$（$W_k$ は $W$ の $k$ 列を $q/a_n$ で置き換えたもの））

  - Example 5.2-1（$y'' + y = \sec x$；$\phi_1 = \cos x$、$\phi_2 = \sin x$、$W = 1$ から $v_1' = -\sin x \sec x = -\tan x$、$v_2' = \cos x \sec x = 1$ を積分して $y_p = \cos x\ln|\cos x| + x\sin x$ を得る）

### §5.3 グリーン関数の導入
**内容:** 初等的なグリーン関数の構成とインパルス応答の概念

- **1. グリーン関数の考え方**
  - Remark（定数変化法の公式 $y_p(x) = \displaystyle\int_{x_0}^{x} G(x,t)\,q(t)\,dt$ の形で特殊解を一括して表現する視点；$G(x,t)$ を「グリーン関数」と呼ぶ）

- **2. 2階方程式のグリーン関数**
  - Definition 5.3-1（2階初期値問題 $Ly = q(x)$、$y(x_0) = 0$、$y'(x_0) = 0$ のグリーン関数：$G(x,t) = \dfrac{\phi_1(t)\phi_2(x) - \phi_2(t)\phi_1(x)}{W[\phi_1,\phi_2](t)}$（$t \leq x$のとき）、$0$（$t > x$ のとき））
  - Theorem 5.3-1（特殊解の表示：$y_p(x) = \displaystyle\int_{x_0}^{x} G(x,t)\,q(t)\,dt$）

- **3. インパルス応答との接続**
  - Remark（物理的には $q(t) = \delta(t - t_0)$（ディラクのデルタ関数）を入力したときの応答が $G(x, t_0)$ に対応する；詳細はフーリエ解析（3-4）で扱う）
  - Example 5.3-1（$y'' + y = q(x)$、$y(0) = y'(0) = 0$；$G(x,t) = \sin(x - t)$（$t \leq x$のとき）の導出と $q(x) = x$ の場合の $y_p = x - \sin x$ の計算確認）


---

## Chapter 6: 連立微分方程式
**テーマ:** 行列形式、固有値による解法

### §6.1 行列形式への変換
**内容:** 連立微分方程式の行列表現と高階方程式の1階連立系への変換

- **1. 1階連立線形方程式系**
  - Definition 6.1-1（1階連立線形方程式系：$\mathbf{y}' = A(x)\mathbf{y} + \mathbf{b}(x)$（$\mathbf{y} \in \mathbb{R}^n$、$A(x)$ は $n \times n$ 行列、$\mathbf{b}(x) \in \mathbb{R}^n$））
  - Remark（$n$ 階線形方程式 $y^{(n)} + p_{n-1}y^{(n-1)} + \cdots + p_0 y = q$ は、$\mathbf{y} = (y, y', \ldots, y^{(n-1)})^\top$ と置くと $\mathbf{y}' = A\mathbf{y} + \mathbf{b}$ の形に等価変換される；このことで1本の $n$ 階方程式と $n$ 本の1階方程式の理論は統一されている）

- **2. 具体的な変換例**
  - Example 6.1-1（$y'' - y' - 2y = e^x$ を $u_1 = y$、$u_2 = y'$ として $\begin{pmatrix}u_1'\\u_2'\end{pmatrix} = \begin{pmatrix}0&1\\2&1\end{pmatrix}\begin{pmatrix}u_1\\u_2\end{pmatrix} + \begin{pmatrix}0\\e^x\end{pmatrix}$ へ変換する手順）

- **3. 行列方程式の基本定理**
  - Theorem 6.1-1（基本解行列：$n$ 個の一次独立な解 $\mathbf{\phi}_1, \ldots, \mathbf{\phi}_n$ を並べた行列 $\Phi(x) = (\mathbf{\phi}_1 | \cdots | \mathbf{\phi}_n)$ を基本解行列と呼び、一般解は $\mathbf{y} = \Phi(x)\mathbf{c}$（$\mathbf{c} \in \mathbb{R}^n$ は任意定数ベクトル）で表される）

### §6.2 対角化可能な場合の解法
**内容:** 行列の固有値と固有ベクトルを用いた一般解の構成

- **1. 定数係数連立方程式**
  - Definition 6.2-1（定数係数1階連立斉次方程式：$\mathbf{y}' = A\mathbf{y}$（$A$ は定数 $n \times n$ 実行列））
  - Theorem 6.2-1（行列指数関数による形式解：$\mathbf{y}(x) = e^{Ax}\mathbf{c}$（ただし $e^{Ax} = \displaystyle\sum_{k=0}^{\infty}\dfrac{(Ax)^k}{k!}$））

- **2. 対角化可能な場合**
  - Theorem 6.2-2（$A$ が $n$ 個の相異なる固有値 $\lambda_1, \ldots, \lambda_n$ を持ち固有ベクトルを $\mathbf{v}_1, \ldots, \mathbf{v}_n$ とするとき、$\mathbf{y}^{(k)}(x) = e^{\lambda_k x}\mathbf{v}_k$ が基本解系をなし、一般解は $\mathbf{y} = \displaystyle\sum_{k=1}^n c_k e^{\lambda_k x}\mathbf{v}_k$）

  - Example 6.2-1（$\mathbf{y}' = \begin{pmatrix}1&2\\3&2\end{pmatrix}\mathbf{y}$；固有値 $\lambda_1 = 4$、$\lambda_2 = -1$、対応する固有ベクトル $\mathbf{v}_1 = \begin{pmatrix}1\\3/2\end{pmatrix}$、$\mathbf{v}_2 = \begin{pmatrix}1\\-1\end{pmatrix}$ の計算と一般解の記述；「流れ」の幾何学的解釈）

- **3. 重固有値の場合**
  - Theorem 6.2-3（$\lambda$ が代数的重複度 $m$・幾何的重複度 $m$（すなわち対角化可能）のとき、$e^{\lambda x}\mathbf{v}_k$（$k = 1, \ldots, m$）が $m$ 個の独立な解をなす；対角化不可能（ジョルダン標準形が必要）な場合は次科目（微分方程式II）で扱う）
  - Example 6.2-2（$\mathbf{y}' = \begin{pmatrix}2&0\\0&2\end{pmatrix}\mathbf{y}$；固有値 $\lambda = 2$（重複度2）で対角化可能な場合の一般解 $\mathbf{y} = c_1 e^{2x}\mathbf{e}_1 + c_2 e^{2x}\mathbf{e}_2$）

### §6.3 複素固有値の場合
**内容:** 複素固有値に対する実数形での解の構成

- **1. 複素固有値と実数解の取り出し**
  - Theorem 6.3-1（複素共役固有値 $\alpha \pm \beta i$（$\beta > 0$）に対応する複素固有ベクトル $\mathbf{v} = \mathbf{p} + \mathbf{q}i$ を用いると、$e^{\alpha x}(\mathbf{p}\cos\beta x - \mathbf{q}\sin\beta x)$ と $e^{\alpha x}(\mathbf{p}\sin\beta x + \mathbf{q}\cos\beta x)$ が実数基本解の対をなす）

  - Example 6.3-1（$\mathbf{y}' = \begin{pmatrix}0&-2\\2&0\end{pmatrix}\mathbf{y}$；固有値 $\pm 2i$、固有ベクトル $\begin{pmatrix}1\\i\end{pmatrix}$、実数基本解 $\begin{pmatrix}\cos 2x\\-\sin 2x\end{pmatrix}$ と $\begin{pmatrix}\sin 2x\\\cos 2x\end{pmatrix}$；相平面上の閉曲線（楕円軌道）としての解釈）


---

## Chapter 7: 安定性の入門
**テーマ:** 平衡点、相平面、線形化

### §7.1 平衡点と相平面
**内容:** 自律系の平衡点の定義と相平面上の解の軌道の解釈

- **1. 自律系とその解の軌道**
  - Definition 7.1-1（2次元自律系：$\dfrac{d\mathbf{y}}{dt} = \mathbf{f}(\mathbf{y})$（$\mathbf{f}$ は $t$ に陽に依存しない））
  - Definition 7.1-2（相平面：$\mathbf{y} = (y_1, y_2)^\top$ を座標とする平面；解 $\mathbf{y}(t)$ の描く曲線を軌道（orbit）または相軌跡という）

- **2. 平衡点の定義**
  - Definition 7.1-3（平衡点（固定点）：$\mathbf{f}(\mathbf{y}^*) = \mathbf{0}$ を満たす点 $\mathbf{y}^*$；定数解 $\mathbf{y}(t) \equiv \mathbf{y}^*$ に対応する）
  - Example 7.1-1（振り子方程式 $\theta'' + \sin\theta = 0$ の2次元自律系への変換 $\begin{pmatrix}y_1'\\y_2'\end{pmatrix} = \begin{pmatrix}y_2\\-\sin y_1\end{pmatrix}$ と平衡点 $(n\pi, 0)$（$n \in \mathbb{Z}$）の特定；下方平衡点と上方平衡点の物理的意味の対比）

- **3. 安定性の直感的定義**
  - Definition 7.1-4（リャプノフの意味での安定性：任意の $\varepsilon > 0$ に対しある $\delta > 0$ が存在し、$|\mathbf{y}(0) - \mathbf{y}^*| < \delta$ ならば全ての $t \geq 0$ で $|\mathbf{y}(t) - \mathbf{y}^*| < \varepsilon$）
  - Definition 7.1-5（漸近安定性：安定であり、かつ $t \to \infty$ で $\mathbf{y}(t) \to \mathbf{y}^*$）
  - Remark（不安定な平衡点：上記の条件が満たされないもの。直立した振り子の平衡点 $(\pi, 0)$ は不安定の典型例）

### §7.2 線形化と局所安定性
**内容:** ヤコビ行列による線形化と固有値に基づく平衡点の安定性判別

- **1. 線形化の手順**
  - Definition 7.2-1（ヤコビ行列：$\mathbf{f}$ の平衡点 $\mathbf{y}^*$ におけるヤコビ行列 $J = D\mathbf{f}(\mathbf{y}^*) = \left(\dfrac{\partial f_i}{\partial y_j}(\mathbf{y}^*)\right)$）
  - Theorem 7.2-1（線形化（ハルトマン・グロブマンの定理（言及のみ））：非退化の場合、$\mathbf{y}^* = \mathbf{0}$ 周りの非線形系の相図は線形化系 $\mathbf{u}' = J\mathbf{u}$ の相図と局所的に位相同値）

- **2. 固有値による安定性の分類**
  - Theorem 7.2-2（2次元線形系の平衡点の分類：ヤコビ行列 $J$ の固有値 $\lambda_1, \lambda_2$ に基づく安定結節点・不安定結節点・鞍点・安定渦状点・不安定渦状点・中心の分類）
  - Example 7.2-1（$\begin{pmatrix}y_1'\\y_2'\end{pmatrix} = \begin{pmatrix}-1&0\\0&-2\end{pmatrix}\begin{pmatrix}y_1\\y_2\end{pmatrix}$；固有値 $-1, -2$（ともに負）、安定結節点；すべての軌道が原点に引き込まれる相図の描写）
  - Example 7.2-2（$\begin{pmatrix}y_1'\\y_2'\end{pmatrix} = \begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}y_1\\y_2\end{pmatrix}$；固有値 $1, -1$（異符号）、鞍点；安定多様体と不安定多様体の描写）
  - Example 7.2-3（振り子の下方平衡点 $\theta = 0$ の線形化：$J = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$、固有値 $\pm i$（純虚数）、中心；元の非線形系では閉軌道（保存量 $E = y_2^2/2 - \cos y_1$）が存在することの確認）

- **3. 非線形系への応用**
  - Corollary 7.2-1（非線形自律系において、線形化の固有値の実部がすべて負ならば平衡点は漸近安定；固有値の実部に少なくとも1つ正のものがあれば不安定；純虚数の場合はこの方法では判定できない（中心は非線形効果で渦状点になり得る））
  - Example 7.2-4（ロジスティック方程式 $y' = y(1 - y)$ の平衡点 $y^* = 0$（不安定）と $y^* = 1$（漸近安定）の線形化による確認；$f'(0) = 1 > 0$、$f'(1) = -1 < 0$）
