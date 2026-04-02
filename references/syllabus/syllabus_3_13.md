# 3-13: 微分幾何I

**前提科目:** 3-1（ベクトル解析）、3-11（多重線形代数学I）

---

## Chapter 1: 曲線の微分幾何
**テーマ:** 空間曲線の曲がり方と捻れ方の定量化

### §1.1 正則曲線と弧長パラメータ
**内容:** 正則曲線の定義と弧長による再パラメータ化

- **1. 正則曲線の定義**
  - Definition 1.1-1 (正則曲線：開区間 $I \subset \mathbb{R}$ から $\mathbb{R}^3$ への $C^\infty$ 写像 $\alpha : I \to \mathbb{R}^3$ であって、$\alpha'(t) \neq \mathbf{0}$（すべての $t \in I$）を満たすもの；$\alpha'(t) = (\alpha_1'(t), \alpha_2'(t), \alpha_3'(t))$ を接ベクトルという)
  - Definition 1.1-2 (曲線の速さと速度：接ベクトルのノルム $|\alpha'(t)|$ を時刻 $t$ での速さといい、接ベクトル $\alpha'(t)$ を速度ベクトルという；$|\alpha'(t)| > 0$ が正則性の条件)
  - Example 1.1-1 (円のパラメータ表示：$\alpha(t) = (r\cos t, r\sin t, 0)$；$\alpha'(t) = (-r\sin t, r\cos t, 0)$；$|\alpha'(t)| = r > 0$ より正則曲線；曲線が円周上を速さ $r$ で動く)
  - Example 1.1-2 (螺旋のパラメータ表示：$\alpha(t) = (a\cos t, a\sin t, bt)$（$a, b > 0$）；$\alpha'(t) = (-a\sin t, a\cos t, b)$；$|\alpha'(t)| = \sqrt{a^2+b^2} > 0$ より正則；$b=0$ で円、$b \neq 0$ で螺旋の形)

- **2. 弧長パラメータへの再パラメータ化**
  - Definition 1.1-3 (弧長関数：曲線 $\alpha$ の基準点 $t_0$ からの弧長を $s(t) = \int_{t_0}^t |\alpha'(u)|\,du$ と定義する；$ds/dt = |\alpha'(t)| > 0$ より $s$ は狭義単調増加で $t$ の関数として可逆)
  - Proposition 1.1-1 (弧長パラメータへの再パラメータ化：$t = t(s)$ を $s(t)$ の逆関数として $\beta(s) = \alpha(t(s))$ と定めると $|\beta'(s)| = 1$；$\beta$ を弧長パラメータ付き曲線という)
  - Proof ($\beta'(s) = \alpha'(t(s)) \cdot t'(s)$；$t'(s) = 1/s'(t) = 1/|\alpha'(t)|$；よって $|\beta'(s)| = |\alpha'(t)| \cdot 1/|\alpha'(t)| = 1$)
  - Example 1.1-3 (螺旋の弧長パラメータ：$|\alpha'(t)| = \sqrt{a^2+b^2}$ で一定；$s = \sqrt{a^2+b^2}\, t$；$\beta(s) = (a\cos(s/c), a\sin(s/c), bs/c)$（$c = \sqrt{a^2+b^2}$）；$|\beta'(s)| = 1$ を確認)
  - Remark (弧長パラメータの重要性：$|\beta'(s)| = 1$ を仮定すると接ベクトル $T = \beta'(s)$ が単位ベクトルになり、以降の曲率・捩率の定義が簡潔になる；以下では特に断らない限り弧長パラメータを用いる)

### §1.2 曲率と主法線ベクトル
**内容:** 接ベクトルとその変化率である曲率・主法線ベクトルの定義

- **1. 曲率の定義**
  - Definition 1.2-1 (単位接ベクトルと曲率：弧長パラメータ付き曲線 $\alpha(s)$ の単位接ベクトル $T(s) = \alpha'(s)$；曲率 $\kappa(s) = |T'(s)| = |\alpha''(s)|$；$\kappa$ は接ベクトルの回転の速さを表す)
  - Proposition 1.2-1 ($T'(s) \perp T(s)$：$|T(s)|^2 = 1$ を $s$ で微分すると $2T(s) \cdot T'(s) = 0$)
  - Proof ($|T|^2 = T \cdot T = 1$ を $s$ で微分すると $T' \cdot T + T \cdot T' = 2T \cdot T' = 0$)
  - Example 1.2-1 (円の曲率：$\alpha(s) = (r\cos(s/r), r\sin(s/r), 0)$（弧長パラメータ）；$T(s) = (-\sin(s/r), \cos(s/r), 0)$；$T'(s) = (-\cos(s/r)/r, -\sin(s/r)/r, 0)$；$\kappa = |T'| = 1/r$；半径 $r$ の円の曲率は $1/r$（半径が小さいほど曲率大）)

- **2. 主法線ベクトル**
  - Definition 1.2-2 (主法線ベクトル：曲率 $\kappa(s) > 0$ の点において主法線ベクトル $N(s) = T'(s)/|T'(s)|$；$T'(s) = \kappa(s) N(s)$ と書ける；$N$ は $T$ に直交する単位ベクトルで曲線の曲がる方向を指す)
  - Example 1.2-2 (円の主法線ベクトル：$N(s) = -(\cos(s/r), \sin(s/r), 0)$；点 $(r\cos(s/r), r\sin(s/r), 0)$ での内向き法線方向；$N$ は常に円の中心を向く)
  - Remark (曲率 $0$ の点について：$T'(s) = \mathbf{0}$（$\kappa = 0$）の点では $N$ が定義されない；直線上の点での曲率は $0$ であり主法線は定まらない；以下では $\kappa > 0$ の点のみを考える)

### §1.3 捩率と従法線ベクトル
**内容:** 外積で定まる従法線ベクトルと捩率の幾何学的意味

- **1. 従法線ベクトルの定義**
  - Definition 1.3-1 (従法線ベクトル：$T$ と $N$ の外積 $B(s) = T(s) \times N(s)$ を従法線ベクトルという；$\{T, N, B\}$ は互いに直交する単位ベクトルの組（フレネ-セレ標構）をなす)
  - Proposition 1.3-1 ($B$ は単位ベクトル：$|B| = |T||N|\sin\theta = 1 \cdot 1 \cdot 1 = 1$（$T \perp N$ なので $\sin\theta = 1$）；$B \perp T$、$B \perp N$ は外積の性質から)
  - Proof (外積 $T \times N$ の大きさは $|T||N|\sin\theta$；$|T| = |N| = 1$、$T \perp N$ より $\theta = \pi/2$ で $\sin\theta = 1$；外積は両因子に直交するから $B \perp T$、$B \perp N$)
  - Example 1.3-1 (螺旋の従法線ベクトル：$T = (-a\sin(s/c), a\cos(s/c), b)/c$（$c = \sqrt{a^2+b^2}$）；$N = (-\cos(s/c), -\sin(s/c), 0)$；$B = T \times N$ を計算すると $B = (b\sin(s/c)/c, -b\cos(s/c)/c, a/c)$；$|B| = \sqrt{b^2/c^2 + a^2/c^2} = 1$ を確認)

- **2. 捩率の定義と意味**
  - Definition 1.3-2 (捩率：$B'(s) = -\tau(s)N(s)$ となる実数値関数 $\tau(s)$ を捩率という；$\tau$ は曲線が $T, N$ の張る平面（接触平面）からどれだけ外れるかを表す；$\tau = 0$ は平面曲線を意味する)
  - Proposition 1.3-2 ($B'(s) \perp B(s)$ かつ $B'(s) \perp T(s)$：$|B| = 1$ の微分より $B' \perp B$；$B = T \times N$ を微分して $T, N, B$ の直交性を利用すると $B' \parallel N$)
  - Proof ($|B|^2 = 1$ の微分より $B \cdot B' = 0$ で $B' \perp B$；$B \cdot T = 0$ の微分より $B' \cdot T + B \cdot T' = 0$、$T' = \kappa N$ より $B \cdot \kappa N = \kappa (B \cdot N) = 0$ だから $B' \cdot T = 0$；$B' \perp T$ かつ $B' \perp B$ より $B' \parallel N$)
  - Example 1.3-2 (螺旋の捩率：$B'(s) = (b\cos(s/c)/c^2, b\sin(s/c)/c^2, 0) \cdot (-1/c) \cdot (-1)$；計算すると $\tau = b/c^2 = b/(a^2+b^2)$；$b > 0$ で捩率正（右回り螺旋）、$b < 0$ で捩率負（左回り螺旋）、$b=0$ で平面曲線)

### §1.4 フルネ＝セレの公式
**内容:** フレームの微小変化を曲率・捩率で記述する公式

- **1. フルネ＝セレの公式の導出**
  - Theorem 1.4-1 (フルネ＝セレの公式：$\{T, N, B\}$ の微分が
    $T' = \kappa N$、$N' = -\kappa T + \tau B$、$B' = -\tau N$
    で与えられる；$\kappa$ は曲率、$\tau$ は捩率)
  - Proof ($T' = \kappa N$ は曲率の定義；$B' = -\tau N$ は捩率の定義；$N' = (B \times T)' = B' \times T + B \times T' = (-\tau N \times T) + (B \times \kappa N) = \tau(T \times N) + \kappa(B \times N) = \tau B - \kappa T$)
  - Example 1.4-1 (フルネ＝セレ公式の行列表示：$\frac{d}{ds}\begin{pmatrix}T\\N\\B\end{pmatrix} = \begin{pmatrix}0&\kappa&0\\-\kappa&0&\tau\\0&-\tau&0\end{pmatrix}\begin{pmatrix}T\\N\\B\end{pmatrix}$；係数行列が歪対称行列（反対称）であることに注意；歪対称性は $\{T,N,B\}$ が直交標構を保つことと対応)

- **2. フルネ＝セレ公式の応用**
  - Example 1.4-2 (螺旋への適用：$\kappa = a/(a^2+b^2)$、$\tau = b/(a^2+b^2)$ を公式に代入；$T', N', B'$ が直接計算できることを確認；$\kappa$ と $\tau$ が定数の曲線は螺旋（一般化円柱螺旋）であることをフルネ＝セレ公式から逆算)
  - Remark (フルネ＝セレ公式の物理的意味：$T$ は速度方向、$N$ は曲がる方向、$B$ は「ひねり」の方向；$\kappa$ が大きいほど急カーブ、$\tau$ が大きいほど急螺旋；飛行機の動力学や DNA 二重螺旋の幾何的記述に使われる)

### §1.5 曲線の基本定理
**内容:** 曲率と捩率による曲線の一意性定理

- **1. 曲線の基本定理**
  - Theorem 1.5-1 (曲線の基本定理：$s_0 \in I$ を基準点、$P_0 \in \mathbb{R}^3$ を点、$\{T_0, N_0, B_0\}$ を正規直交標構とし、$\kappa(s) > 0$、$\tau(s)$ を滑らかな関数とする；このとき $\alpha(s_0) = P_0$、$\{T(s_0), N(s_0), B(s_0)\} = \{T_0, N_0, B_0\}$、$\alpha$ の曲率が $\kappa$、捩率が $\tau$ となる弧長パラメータ付き曲線 $\alpha$ が唯一（剛体運動を除いて）存在する)
  - Proof (フルネ＝セレ公式 $\frac{d}{ds}\begin{pmatrix}T\\N\\B\end{pmatrix} = A(s)\begin{pmatrix}T\\N\\B\end{pmatrix}$（$A(s)$ は $\kappa, \tau$ からなる歪対称行列）を初期値問題として見ると、常微分方程式の解の存在と一意性定理（2-6 の結果）から解 $\{T(s), N(s), B(s)\}$ が一意に決まる；$\alpha(s) = P_0 + \int_{s_0}^s T(u)\,du$ で曲線が構成される)
  - Example 1.5-1 ($\kappa = 1/r$（定数）、$\tau = 0$ の曲線：基本定理より平面円に一致（剛体運動を除く）；$\kappa = a/c^2$（定数）、$\tau = b/c^2$（定数）の曲線は螺旋に一致することを定理から確認)

- **2. 曲線の合同定理**
  - Corollary 1.5-1 (曲線の合同定理：$\kappa(s)$ と $\tau(s)$ が一致する 2 つの弧長パラメータ付き曲線は剛体運動（等長変換）で移り合う；曲率と捩率が曲線の形を完全に決定する)
  - Proof (曲線の基本定理（Theorem 1.5-1）から、$\kappa$ と $\tau$ が同じならば初期条件を揃えることで 2 曲線が完全に一致する；初期条件の違いは剛体運動（回転・平行移動）によって吸収される)
  - Example 1.5-2 (平面曲線の特徴づけ：$\tau \equiv 0$ の曲線は平面曲線；基本定理より $\tau = 0$ のとき $B$ が一定ベクトルになり、曲線が $B$ に垂直な平面内に収まることを確認)

---

## Chapter 2: 曲面の基本概念
**テーマ:** パラメータ表示と接平面・法ベクトル

### §2.1 正則曲面の定義
**内容:** パラメータ表示を用いた曲面の正則性条件

- **1. 正則曲面の定義**
  - Definition 2.1-1 (正則曲面：開集合 $U \subset \mathbb{R}^2$ から $\mathbb{R}^3$ への $C^\infty$ 写像 $\mathbf{x} : U \to \mathbb{R}^3$ が正則パラメータ表示であるとは、偏微分ベクトル $\mathbf{x}_u = \partial\mathbf{x}/\partial u$ と $\mathbf{x}_v = \partial\mathbf{x}/\partial v$ が各点で線形独立（$\mathbf{x}_u \times \mathbf{x}_v \neq \mathbf{0}$）であること；$\mathbb{R}^3$ の部分集合 $S$ が正則曲面であるとは、$S$ の各点が正則パラメータ表示をもつ開集合で覆われること)
  - Example 2.1-1 (球面 $S^2$：$\mathbf{x}(u,v) = (\sin u \cos v, \sin u \sin v, \cos u)$（$u \in (0,\pi)$、$v \in (0, 2\pi)$）；$\mathbf{x}_u = (\cos u \cos v, \cos u \sin v, -\sin u)$、$\mathbf{x}_v = (-\sin u \sin v, \sin u \cos v, 0)$；$\mathbf{x}_u \times \mathbf{x}_v = (-\sin^2 u \cos v, -\sin^2 u \sin v, -\sin u\cos u)$；$u \in (0,\pi)$ で $|\mathbf{x}_u \times \mathbf{x}_v| = \sin u \neq 0$ を確認)
  - Example 2.1-2 (回転面：$\mathbf{x}(u,v) = (f(u)\cos v, f(u)\sin v, g(u))$（$f(u) > 0$）；$f^2(u)(f'^2+g'^2) > 0$ を確認すれば正則曲面）

- **2. 正則性の意味と失敗例**
  - Remark (正則性条件の幾何的意味：$\mathbf{x}_u \times \mathbf{x}_v \neq \mathbf{0}$ は $\mathbf{x}_u$ と $\mathbf{x}_v$ が張る接平面が退化しないことを意味する；この条件が崩れると「尖った点」や「折れ点」が現れる)
  - Example 2.1-3 (正則性が失敗する例：$\mathbf{x}(u,v) = (u^3, v, 0)$；$\mathbf{x}_u = (3u^2, 0, 0)$ は $u=0$ で零ベクトルになる；$u=0$ の線（$y$ 軸方向）で正則性が壊れ、尖りが生じる)

### §2.2 接平面と法ベクトル
**内容:** 偏微分ベクトルが張る接平面と単位法ベクトルの定義

- **1. 接平面と法ベクトル**
  - Definition 2.2-1 (接平面：正則曲面 $S$ のパラメータ表示 $\mathbf{x}$ による点 $p = \mathbf{x}(u_0, v_0)$ での接平面 $T_p S$ は、$\mathbf{x}_u(u_0,v_0)$ と $\mathbf{x}_v(u_0,v_0)$ によって張られる $\mathbb{R}^3$ の 2 次元部分空間；$p$ を通る曲線の接ベクトルの全体が $T_p S$ をなす)
  - Definition 2.2-2 (単位法ベクトル：$\mathbf{N}(p) = \frac{\mathbf{x}_u \times \mathbf{x}_v}{|\mathbf{x}_u \times \mathbf{x}_v|}$ を点 $p$ での単位法ベクトルという；$\mathbf{N} \perp \mathbf{x}_u$ かつ $\mathbf{N} \perp \mathbf{x}_v$)
  - Proposition 2.2-1 (接平面の記述：$T_p S = \{a\mathbf{x}_u + b\mathbf{x}_v \mid a, b \in \mathbb{R}\}$；$T_p S$ は $\mathbf{N}(p)$ に直交する平面)
  - Proof ($\mathbf{x}_u, \mathbf{x}_v$ は $T_p S$ を張る；$\mathbf{N} = \mathbf{x}_u \times \mathbf{x}_v / |\cdots|$ は定義から $\mathbf{x}_u, \mathbf{x}_v$ の両方に直交；したがって $T_p S$ は $\mathbf{N}$ に直交する平面と一致)
  - Example 2.2-1 (球面の接平面と法ベクトル：$p = \mathbf{x}(u_0, v_0) \in S^2$；$\mathbf{N}(p) = -p/|p| = -(\sin u_0\cos v_0, \sin u_0\sin v_0, \cos u_0)$（内向き法線）；接平面は $p$ を通り $p$ に直交する平面)

- **2. 向きと法ベクトルの一致**
  - Definition 2.2-3 (向き付け可能曲面：$S$ が向き付け可能であるとは、$S$ 全体で連続な単位法ベクトル場 $\mathbf{N}$ が存在すること；球面・トーラスは向き付け可能；クラインの壺は向き付け不可能)
  - Remark (パラメータ変換と法ベクトルの向き：パラメータ変換のヤコビアンが正ならば $\mathbf{N}$ の向きは保たれる；ヤコビアンが負ならば反転する；これが §2.3 での許容変換の条件につながる)

### §2.3 パラメータ変換と構造の不変性
**内容:** ヤコビ行列を用いた許容パラメータ変換と幾何構造の不変性

- **1. 許容パラメータ変換**
  - Definition 2.3-1 (許容パラメータ変換：パラメータ変換 $(u,v) = \varphi(\bar{u}, \bar{v})$ が許容変換であるとは、$\varphi$ が $C^\infty$-微分同相写像であること；ヤコビアン $\det(J_\varphi) \neq 0$；向きを保つ変換はさらに $\det(J_\varphi) > 0$ を要求)
  - Proposition 2.3-1 (接平面の不変性：許容変換のもとで接平面 $T_p S$ は変わらない；$\bar{\mathbf{x}}_{\bar{u}} = \mathbf{x}_u u_{\bar{u}} + \mathbf{x}_v v_{\bar{u}}$ より新しい接ベクトルは古い接ベクトルの線形結合で、張る空間が同一)
  - Proof (連鎖律：$\bar{\mathbf{x}}_{\bar{u}} = \mathbf{x}_u \cdot \partial u/\partial\bar{u} + \mathbf{x}_v \cdot \partial v/\partial\bar{u}$ と $\bar{\mathbf{x}}_{\bar{v}}$ も同様に書ける；ヤコビアンが 0 でなければ $\{\bar{\mathbf{x}}_{\bar{u}}, \bar{\mathbf{x}}_{\bar{v}}\}$ は $\{\mathbf{x}_u, \mathbf{x}_v\}$ と同じ空間を張る)
  - Example 2.3-1 (球面の別パラメータ：立体射影 $\mathbf{x}(\bar{u}, \bar{v}) = \left(\frac{2\bar{u}}{1+\bar{u}^2+\bar{v}^2}, \frac{2\bar{v}}{1+\bar{u}^2+\bar{v}^2}, \frac{\bar{u}^2+\bar{v}^2-1}{1+\bar{u}^2+\bar{v}^2}\right)$；球の別のパラメータ表示であり、許容変換で標準パラメータと繋がる；接平面が同じになることを確認)

- **2. 幾何構造の不変性**
  - Remark (内在的な量と外在的な量：許容変換に対して不変な量を内在的（intrinsic）という；第一基本形式（計量）は内在的；一方、法ベクトルの向きは許容変換の中でも向き逆転変換で符号が変わる；第二基本形式は外在的な量（埋め込みに依存）；ガウス曲率が内在的量であることが「驚異の定理」の本質)

---

## Chapter 3: 第一基本形式
**テーマ:** 曲面上の長さや面積を測る計量

### §3.1 第一基本形式の定義
**内容:** 接ベクトルの内積による 2 次形式（リーマン計量の原型）

- **1. 第一基本形式の定義と係数**
  - Definition 3.1-1 (第一基本形式：正則曲面 $S$ のパラメータ表示 $\mathbf{x}(u,v)$ に対して第一基本形式 $I = E\,du^2 + 2F\,du\,dv + G\,dv^2$ を係数
    $E = \mathbf{x}_u \cdot \mathbf{x}_u$、$F = \mathbf{x}_u \cdot \mathbf{x}_v$、$G = \mathbf{x}_v \cdot \mathbf{x}_v$
    で定義する；接ベクトル $d\mathbf{x} = \mathbf{x}_u\,du + \mathbf{x}_v\,dv$ の二乗ノルム $|d\mathbf{x}|^2 = I$)
  - Example 3.1-1 (平面の第一基本形式：$\mathbf{x}(u,v) = (u, v, 0)$；$E = G = 1$、$F = 0$；$I = du^2 + dv^2$；ユークリッド計量の特殊例)
  - Example 3.1-2 (球面の第一基本形式：$\mathbf{x}(u,v) = (\sin u\cos v, \sin u\sin v, \cos u)$；$E = 1$、$F = 0$、$G = \sin^2 u$；$I = du^2 + \sin^2 u\,dv^2$；$u = $ 一定の緯線は長さ $2\pi\sin u$ の円)

- **2. 第一基本形式のパラメータ不変性**
  - Proposition 3.1-1 (第一基本形式はパラメータ変換で不変：許容変換 $(u,v) = \varphi(\bar{u},\bar{v})$ のもとで $E\,du^2+2F\,du\,dv+G\,dv^2 = \bar{E}\,d\bar{u}^2+2\bar{F}\,d\bar{u}\,d\bar{v}+\bar{G}\,d\bar{v}^2$（同じ 2 次形式の異なる座標表示）)
  - Proof (連鎖律 $\mathbf{x}_u\,du + \mathbf{x}_v\,dv = \bar{\mathbf{x}}_{\bar{u}}\,d\bar{u} + \bar{\mathbf{x}}_{\bar{v}}\,d\bar{v}$ を内積すると左辺と右辺が同じ値になる；両辺を展開して $I$ の不変性が確認できる)
  - Example 3.1-3 (円柱の第一基本形式：$\mathbf{x}(u,v) = (\cos u, \sin u, v)$；$E = 1$、$F = 0$、$G = 1$；$I = du^2 + dv^2$；円柱は平面と同じ第一基本形式をもつ（「展開」可能で等長）)

### §3.2 弧長と面積の計算
**内容:** 第一基本形式を用いた曲線長と面積の公式

- **1. 弧長の公式**
  - Theorem 3.2-1 (弧長の公式：曲面 $S$ 上の曲線 $\alpha(t) = \mathbf{x}(u(t), v(t))$（$t \in [a, b]$）の弧長は $L = \int_a^b |\alpha'(t)|\,dt = \int_a^b \sqrt{E\dot{u}^2 + 2F\dot{u}\dot{v} + G\dot{v}^2}\,dt$)
  - Proof ($\alpha'(t) = \mathbf{x}_u \dot{u} + \mathbf{x}_v \dot{v}$；$|\alpha'|^2 = (\mathbf{x}_u\dot{u}+\mathbf{x}_v\dot{v})\cdot(\mathbf{x}_u\dot{u}+\mathbf{x}_v\dot{v}) = E\dot{u}^2 + 2F\dot{u}\dot{v} + G\dot{v}^2$；これを積分する)
  - Example 3.2-1 (球面上の緯線の長さ：$u = u_0$（定数）、$v : 0 \to 2\pi$ の曲線；$\dot{u} = 0$、$\dot{v} = 1$；$L = \int_0^{2\pi}\sqrt{G}\,dv = \int_0^{2\pi}\sin u_0\,dv = 2\pi\sin u_0$；赤道（$u_0 = \pi/2$）で $L = 2\pi$（単位球）を確認)

- **2. 面積の公式**
  - Theorem 3.2-2 (面積の公式：パラメータ領域 $D \subset \mathbb{R}^2$ に対応する曲面の面積 $A = \iint_D |\mathbf{x}_u \times \mathbf{x}_v|\,du\,dv = \iint_D \sqrt{EG - F^2}\,du\,dv$)
  - Proof ($|\mathbf{x}_u \times \mathbf{x}_v|^2 = |\mathbf{x}_u|^2|\mathbf{x}_v|^2 - (\mathbf{x}_u\cdot\mathbf{x}_v)^2 = EG - F^2$（ラグランジュの恒等式）；これが面積素元を与える)
  - Example 3.2-2 (球面の面積：$D = (0,\pi)\times(0,2\pi)$、$\sqrt{EG-F^2} = \sin u$；$A = \int_0^{2\pi}\int_0^\pi \sin u\,du\,dv = 2\pi \cdot 2 = 4\pi$（単位球）を確認)

### §3.3 等長写像と内的幾何
**内容:** 第一基本形式を保存する等長写像と内的幾何の概念

- **1. 等長写像の定義**
  - Definition 3.3-1 (等長写像：曲面 $S_1$ から曲面 $S_2$ への微分同相写像 $\phi : S_1 \to S_2$ が等長写像（isometry）であるとは、任意の点 $p \in S_1$ と接ベクトル $v, w \in T_p S_1$ に対して $\langle v, w \rangle_p = \langle d\phi_p(v), d\phi_p(w) \rangle_{\phi(p)}$ が成立すること；第一基本形式を保存する写像)
  - Example 3.3-1 (円柱と平面の等長写像：円柱 $(\cos u, \sin u, v)$ を展開する写像 $(u, v) \mapsto (u, v, 0)$；$E = G = 1$、$F = 0$ が両曲面で一致；長さと面積が保存される；曲率は保存されない（円柱のガウス曲率 $K = 0$、平面も $K = 0$ で一致するのは偶然ではなく「驚異の定理」の帰結）)

- **2. 内的幾何と外的幾何**
  - Definition 3.3-2 (内的幾何：曲面の性質のうち等長写像で保存されるものを内的（内在的）性質という；弧長・面積・角度・ガウス曲率（驚異の定理）は内的性質；第二基本形式・平均曲率・法ベクトルの向きは外的性質（空間への埋め込みに依存）)
  - Proposition 3.3-1 (等長写像は弧長・面積・角度を保存する：第一基本形式が等しければ弧長公式（Theorem 3.2-1）・面積公式（Theorem 3.2-2）・内積から定まる角度が一致する)
  - Proof (弧長：$\sqrt{E\dot{u}^2+2F\dot{u}\dot{v}+G\dot{v}^2}$ が等長写像で不変；面積：$\sqrt{EG-F^2}$ が不変；角度：$\cos\theta = I(\mathbf{u},\mathbf{v})/(||\mathbf{u}|||\mathbf{v}||)$ が不変)
  - Example 3.3-2 (地図投影の内的幾何：地球（球面）と平面は等長でない（一方はガウス曲率 $1/r^2$、他方は $0$）；面積保存・角度保存を両立する地図投影は存在しない；これはガウスの驚異の定理の応用)
  - Remark (リーマン幾何への接続：内的幾何の研究は「空間に埋め込まれた曲面」から「抽象的なリーマン多様体」への一般化へと発展する；多様体論（4-5）ではリーマン計量が第一基本形式の抽象化として定義される)

---

## Chapter 4: 第二基本形式と曲率
**テーマ:** 曲面の空間内での曲がり具合

### §4.1 第二基本形式の定義
**内容:** 法方向への曲がり具合を測る 2 次形式の定義

- **1. 第二基本形式の係数**
  - Definition 4.1-1 (第二基本形式：正則曲面 $\mathbf{x}(u,v)$ の点 $p$ での第二基本形式 $II = e\,du^2 + 2f\,du\,dv + g\,dv^2$ を係数
    $e = \mathbf{x}_{uu} \cdot \mathbf{N}$、$f = \mathbf{x}_{uv} \cdot \mathbf{N}$、$g = \mathbf{x}_{vv} \cdot \mathbf{N}$
    で定義する；ここで $\mathbf{N}$ は単位法ベクトル)
  - Proposition 4.1-1 ($e = -\mathbf{x}_u \cdot \mathbf{N}_u$：$\mathbf{x}_u \cdot \mathbf{N} = 0$ を $u$ で微分すると $\mathbf{x}_{uu}\cdot\mathbf{N} + \mathbf{x}_u\cdot\mathbf{N}_u = 0$；よって $e = -\mathbf{x}_u\cdot\mathbf{N}_u$（同様に $f = -\mathbf{x}_u\cdot\mathbf{N}_v = -\mathbf{x}_v\cdot\mathbf{N}_u$、$g = -\mathbf{x}_v\cdot\mathbf{N}_v$）)
  - Proof ($\mathbf{x}_u\cdot\mathbf{N} \equiv 0$ を $u$ 微分：$\mathbf{x}_{uu}\cdot\mathbf{N} + \mathbf{x}_u\cdot\mathbf{N}_u = 0$；整理すると $e = \mathbf{x}_{uu}\cdot\mathbf{N} = -\mathbf{x}_u\cdot\mathbf{N}_u$)
  - Example 4.1-1 (球面の第二基本形式：$\mathbf{N} = -\mathbf{x}$ なので $\mathbf{N}_u = -\mathbf{x}_u$、$\mathbf{N}_v = -\mathbf{x}_v$；$e = -\mathbf{x}_u\cdot\mathbf{N}_u = |\mathbf{x}_u|^2 = E = 1$；$f = 0$；$g = \sin^2 u$；$II = I$（単位球面では第一と第二基本形式が一致）)

- **2. 第二基本形式の幾何的意味**
  - Proposition 4.1-2 (法曲率との関係：曲面 $S$ 上の曲線 $\alpha(t)$ の加速度の法成分 $\alpha'' \cdot \mathbf{N} = II(\dot{u}, \dot{v})$（$\dot{\mathbf{x}} = \mathbf{x}_u\dot{u}+\mathbf{x}_v\dot{v}$）；第二基本形式は曲線が法方向にどれだけ曲がるかを計る)
  - Proof ($\alpha'' = \mathbf{x}_{uu}\dot{u}^2 + 2\mathbf{x}_{uv}\dot{u}\dot{v} + \mathbf{x}_{vv}\dot{v}^2 + \mathbf{x}_u\ddot{u} + \mathbf{x}_v\ddot{v}$；$\mathbf{x}_u\cdot\mathbf{N} = \mathbf{x}_v\cdot\mathbf{N} = 0$ より $\alpha''\cdot\mathbf{N} = e\dot{u}^2 + 2f\dot{u}\dot{v} + g\dot{v}^2 = II(\dot{u},\dot{v})$)

### §4.2 形状作用素と主曲率
**内容:** 形状作用素（ワインガルテン写像）の固有値としての主曲率

- **1. 形状作用素の定義**
  - Definition 4.2-1 (形状作用素（ワインガルテン写像）：$-d\mathbf{N}_p : T_p S \to T_p S$；$\mathbf{N}$ の微分の符号を反転した写像；$\mathbf{x}_u, \mathbf{x}_v$ 上での作用は $-\mathbf{N}_u, -\mathbf{N}_v$ の接成分)
  - Proposition 4.2-1 (形状作用素は自己共役：$\langle -d\mathbf{N}(v), w \rangle = \langle v, -d\mathbf{N}(w) \rangle$（すべての $v, w \in T_p S$）；これは $\mathbf{x}_{uv} = \mathbf{x}_{vu}$ に由来する $II$ の対称性から従う)
  - Proof ($\langle -d\mathbf{N}(\mathbf{x}_u), \mathbf{x}_v\rangle = -\mathbf{N}_u\cdot\mathbf{x}_v = f$；$\langle \mathbf{x}_u, -d\mathbf{N}(\mathbf{x}_v)\rangle = -\mathbf{x}_u\cdot\mathbf{N}_v = f$；両辺が等しい)
  - Example 4.2-1 (球面の形状作用素：$-d\mathbf{N}(\mathbf{x}_u) = \mathbf{x}_u$、$-d\mathbf{N}(\mathbf{x}_v) = \mathbf{x}_v$；形状作用素は恒等写像（$\times 1$）；すべての方向で等しく曲がる（臍点）)

- **2. 主曲率と主方向**
  - Definition 4.2-2 (主曲率と主方向：形状作用素 $-d\mathbf{N}_p$ の固有値 $\kappa_1 \leq \kappa_2$ を主曲率、対応する固有ベクトル方向を主方向という；自己共役性から実固有値をもち、固有ベクトルは直交する)
  - Theorem 4.2-1 (主曲率の計算：主曲率は方程式 $\det(II - \kappa \cdot I) = 0$、すなわち $\det\begin{pmatrix}e-\kappa E&f-\kappa F\\f-\kappa F&g-\kappa G\end{pmatrix} = 0$ の根；$\kappa_1 + \kappa_2 = (eG - 2fF + gE)/(EG-F^2)$、$\kappa_1\kappa_2 = (eg-f^2)/(EG-F^2)$)
  - Proof (形状作用素の行列を $\{x_u, x_v\}$ 基底で表すと $\begin{pmatrix}E&F\\F&G\end{pmatrix}^{-1}\begin{pmatrix}e&f\\f&g\end{pmatrix}$；固有方程式の係数が trace と det として求まる)
  - Example 4.2-2 (円柱の主曲率：$\mathbf{x}(u,v) = (\cos u, \sin u, v)$；$E=1, F=0, G=1$；$e=1, f=0, g=0$；主曲率 $\kappa_1 = 1$（周方向）、$\kappa_2 = 0$（軸方向）)

### §4.3 ガウス曲率と平均曲率
**内容:** 主曲率から定まるガウス曲率と平均曲率、極小曲面の概念

- **1. ガウス曲率と平均曲率**
  - Definition 4.3-1 (ガウス曲率と平均曲率：主曲率 $\kappa_1, \kappa_2$ から
    ガウス曲率 $K = \kappa_1\kappa_2 = (eg-f^2)/(EG-F^2)$、
    平均曲率 $H = (\kappa_1+\kappa_2)/2 = (eG-2fF+gE)/(2(EG-F^2))$
    と定義する)
  - Example 4.3-1 (各曲面の曲率：球面 $S^2(r)$：$\kappa_1 = \kappa_2 = 1/r$、$K = 1/r^2 > 0$、$H = 1/r$；平面：$K = H = 0$；円柱（半径 $r$）：$\kappa_1 = 1/r, \kappa_2 = 0$、$K = 0$、$H = 1/(2r)$；鞍点型曲面（双曲放物面）：$\kappa_1 > 0 > \kappa_2$、$K < 0$)
  - Remark ($K$ の符号と曲面の形状：$K > 0$ は楕円型（球面的）；$K = 0$ は放物型（円柱・平面的）；$K < 0$ は双曲型（鞍点的）；ガウス曲率の符号が曲面の局所的形状を特徴づける)

- **2. 極小曲面**
  - Definition 4.3-2 (極小曲面：平均曲率 $H = 0$ の曲面を極小曲面という；極小曲面はシャボン膜の形状（境界固定の面積最小化問題の解）として物理的に現れる)
  - Example 4.3-2 (カテノイド：$\mathbf{x}(u,v) = (\cosh u\cos v, \cosh u\sin v, u)$；$\kappa_1 = -\kappa_2$ が成立して $H = 0$；$K = -1/\cosh^4 u < 0$；固定した 2 円周を結ぶ最小面積の曲面)
  - Remark (極小曲面の微分方程式：$H = 0$ の条件をパラメータで書くと準線形偏微分方程式になる；複素解析（3-2）や変分法（3-6）と深く結びつき、微分幾何II（4-6）で詳しく扱う)

### §4.4 法曲率とオイラーの公式
**内容:** 主方向と法曲率を結ぶ関係式

- **1. 法曲率の定義**
  - Definition 4.4-1 (法曲率：点 $p \in S$ で単位接ベクトル $v \in T_p S$ を持つ方向の法曲率 $\kappa_n(v) = II(v,v)/I(v,v) = II(v,v)$（$v$ が単位ベクトルのとき）；曲面上でその方向に進む曲線の加速度の法成分の大きさ)
  - Example 4.4-1 (球面の法曲率：すべての単位接ベクトル $v$ に対して $\kappa_n(v) = 1/r$（一定）；形状作用素が恒等写像の $1/r$ 倍なので任意方向の法曲率が等しい（臍点）)

- **2. オイラーの公式**
  - Theorem 4.4-1 (オイラーの公式：主方向 $e_1, e_2$ から角度 $\theta$ の方向 $v = \cos\theta\,e_1 + \sin\theta\,e_2$ の法曲率は $\kappa_n(\theta) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta$)
  - Proof ($II(v,v) = \kappa_1\cos^2\theta\,I(e_1,e_1) + \kappa_2\sin^2\theta\,I(e_2,e_2) + \text{クロス項}$；主方向の直交性から $I(e_1,e_2) = 0$、$II(e_1,e_2) = 0$ でクロス項が消える；$I(e_1,e_1) = I(e_2,e_2) = 1$ より $\kappa_1\cos^2\theta + \kappa_2\sin^2\theta$)
  - Example 4.4-2 (オイラーの公式の応用：円柱（$\kappa_1 = 1/r, \kappa_2 = 0$）上の螺旋方向（$\theta = \pi/4$）の法曲率：$\kappa_n = (1/r)\cos^2(\pi/4) + 0 = 1/(2r)$；これを第二基本形式から直接計算して一致を確認)
  - Remark (主曲率は法曲率の最大値・最小値：$\kappa_n(\theta) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta$ はオイラーの公式で与えられ、$\theta = 0$ で $\kappa_1$（最小値または最大値）、$\theta = \pi/2$ で $\kappa_2$ をとる；したがって主曲率は法曲率の極値)

---

## Chapter 5: ガウスの驚異の定理
**テーマ:** ガウス曲率の内的不変性

### §5.1 クリストッフェル記号
**内容:** 第一基本形式から定まる接続係数の定義

- **1. クリストッフェル記号の定義**
  - Definition 5.1-1 (クリストッフェル記号：$\mathbf{x}_{uu}, \mathbf{x}_{uv}, \mathbf{x}_{vv}$ を接成分と法成分に分解したとき $\mathbf{x}_{uu} = \Gamma^1_{11}\mathbf{x}_u + \Gamma^2_{11}\mathbf{x}_v + e\mathbf{N}$ などと書く；$\Gamma^k_{ij}$ をクリストッフェル記号（第 2 種）という；第一基本形式の係数 $E, F, G$ の偏微分で表せる)
  - Proposition 5.1-1 (クリストッフェル記号の公式：$\Gamma^1_{11} = \frac{GE_u - 2FF_u + FE_v}{2(EG-F^2)}$ など；第一基本形式の係数とその微分のみで決まる（外的情報を使わない）)
  - Proof ($\mathbf{x}_{uu}\cdot\mathbf{x}_u$、$\mathbf{x}_{uu}\cdot\mathbf{x}_v$ を $E, F, G$ の偏微分として計算；連立方程式 $\begin{pmatrix}E&F\\F&G\end{pmatrix}\begin{pmatrix}\Gamma^1_{11}\\\Gamma^2_{11}\end{pmatrix} = \begin{pmatrix}\mathbf{x}_{uu}\cdot\mathbf{x}_u\\\mathbf{x}_{uu}\cdot\mathbf{x}_v\end{pmatrix} = \begin{pmatrix}E_u/2\\F_u - E_v/2\end{pmatrix}$ を解く)
  - Example 5.1-1 (球面のクリストッフェル記号：$E = 1$、$F = 0$、$G = \sin^2 u$；$\Gamma^1_{22} = -\sin u\cos u$、$\Gamma^2_{12} = \cos u/\sin u$、その他は $0$；第一基本形式の係数のみから計算)

- **2. ガウス方程式の準備**
  - Remark (クリストッフェル記号の意味：$\mathbf{x}_{ij}$ の接成分を記述する係数；曲面上の「向き」の変化率を表す；多様体論（4-5）ではリーマン接続の係数として一般化される；アインシュタインの縮約記法と相性がよい（3-11 §2.1 参照）)

### §5.2 ガウス方程式とコダッチ方程式
**内容:** 内的量と外的量を結びつける構造方程式

- **1. ガウス方程式**
  - Theorem 5.2-1 (ガウス方程式：$\mathbf{x}_{uu}, \mathbf{x}_{uv}, \mathbf{x}_{vv}$ をクリストッフェル記号と第二基本形式係数で展開した後、混合偏微分の交換可能性（$\mathbf{x}_{uuv} = \mathbf{x}_{uvu}$ 等）を用いると、第一基本形式と第二基本形式の係数の間に拘束条件が生じる；そのうち $EG - F^2$ に関する方程式が
    $R_{1212} = eg - f^2$（$R_{1212}$ は第一基本形式の係数のみで書かれるリーマン曲率テンソルの成分）)
  - Proof ($\mathbf{x}_{uv} = \mathbf{x}_{vu}$ を $u$ 微分したもの（$\mathbf{x}_{uvu}$）と $v$ 微分したもの（$\mathbf{x}_{uvv}$）の接成分を比較；法成分を消去すると $E, F, G, e, f, g$ の間の関係式が現れる；接成分の部分がガウス方程式)

- **2. コダッチ方程式**
  - Theorem 5.2-2 (コダッチ方程式：同じく $\mathbf{x}_{uuv} = \mathbf{x}_{uvu}$ の法成分を比較すると第二基本形式の係数 $e, f, g$ とクリストッフェル記号の間の拘束条件が得られる；$e_v - f_u = e\Gamma^1_{12} + f(\Gamma^2_{12} - \Gamma^1_{11}) - g\Gamma^2_{11}$ など)
  - Proof (ガウス方程式と同じ手順で法成分を取り出す；詳細はガウス-ワインガルテン方程式系を整合的に解く計算)
  - Example 5.2-1 (球面での検証：$e = 1$、$f = 0$、$g = \sin^2 u$、クリストッフェル記号を代入してコダッチ方程式が成立することを確認；第一・第二基本形式が整合的であることを具体的に検証)

### §5.3 驚異の定理の証明
**内容:** ガウス曲率が第一基本形式のみに依存する内的量であることの証明

- **1. ガウスの驚異の定理**
  - Theorem 5.3-1 (ガウスの驚異の定理（Theorema Egregium）：ガウス曲率 $K = (eg-f^2)/(EG-F^2)$ は第一基本形式の係数 $E, F, G$ とその偏微分のみによって表せる；$K$ は内的不変量であり、等長写像で保存される)
  - Proof (§5.2 Theorem 5.2-1 のガウス方程式より $eg - f^2 = R_{1212}$（リーマン曲率テンソルの成分）；$R_{1212}$ は $E, F, G$ とその 1 次・2 次偏微分のみから決まる（クリストッフェル記号を介して）；よって $K = R_{1212}/(EG-F^2)$ が内的量として確定する)
  - Example 5.3-1 (球面と平面の非等長性の再確認：球面 $K = 1/r^2 \neq 0$、平面 $K = 0$；驚異の定理より等長写像では $K$ が保存されるから、球面と平面は等長でない；地球を平面地図に「歪みなく」写せない理由の数学的根拠)

- **2. 驚異の定理の意義**
  - Remark (定理の歴史的意義：ガウスは 1827 年にこの定理を発見し、曲面論が空間への埋め込みとは独立な内的幾何をもつことを示した；これが「曲面の内的幾何学」の出発点であり、リーマン幾何学（多様体論 4-5）の原点；球面の曲率が正で、双曲平面の曲率が負であることが非ユークリッド幾何の区別と対応する)
  - Example 5.3-2 (等長変換で変わらない量と変わる量の比較：等長写像で変わらないもの—弧長・面積・角度・ガウス曲率；等長写像で変わるもの—平均曲率・法ベクトルの向き・第二基本形式係数；円柱（$K=0$）と平面（$K=0$）は等長だが、中心軸のある周方向の平均曲率が違う)

---

## Chapter 6: 測地線
**テーマ:** 曲面上で最も真っ直ぐな曲線

### §6.1 測地線の定義と方程式
**内容:** 曲面上で長さを局所最小化する曲線とその微分方程式

- **1. 測地線の定義**
  - Definition 6.1-1 (測地線：正則曲面 $S$ 上の曲線 $\alpha(s)$（弧長パラメータ）が測地線であるとは、$\alpha''(s)$ が至るところ $S$ の法方向（$\mathbf{N}$ 方向）を向くこと；同値に、接成分（測地曲率）が $0$：$\nabla_T T = 0$（$T = \alpha'$ の共変微分が $0$）)
  - Definition 6.1-2 (測地方程式：弧長パラメータ付き曲線 $\alpha = \mathbf{x}(u(s), v(s))$ が測地線であるための必要十分条件は
    $\ddot{u} + \Gamma^1_{11}\dot{u}^2 + 2\Gamma^1_{12}\dot{u}\dot{v} + \Gamma^1_{22}\dot{v}^2 = 0$
    $\ddot{v} + \Gamma^2_{11}\dot{u}^2 + 2\Gamma^2_{12}\dot{u}\dot{v} + \Gamma^2_{22}\dot{v}^2 = 0$
    という連立常微分方程式系（測地方程式）)
  - Proposition 6.1-1 (測地線の存在と一意性：点 $p \in S$ と接ベクトル $v \in T_p S$ を初期条件とする測地線が十分小さい区間で一意に存在する；常微分方程式の解の存在・一意性定理（2-6）を適用)
  - Proof (測地方程式は $(\dot{u}, \dot{v}, \ddot{u}, \ddot{v})$ の 1 階常微分方程式系に書き換えられ、係数（クリストッフェル記号）が滑らかなので解の存在と一意性が保証される)

- **2. 測地線の局所最短性**
  - Proposition 6.1-2 (局所最短性：十分近い 2 点を結ぶ最短曲線は測地線；逆に十分短い測地弧は長さを局所的に最小化する；大域的には最短でない測地線も存在する（球面の大円の短弧と長弧）)
  - Proof (変分法による証明のスケッチ：弧長汎関数 $L[\gamma] = \int_a^b |\dot\gamma|\,ds$ の第一変分を計算して $0$ とおくと測地方程式が得られる；局所最小性は第二変分の正値性から確認できる)
  - Example 6.1-1 (平面の測地線：$\Gamma^k_{ij} = 0$ のとき測地方程式は $\ddot{u} = \ddot{v} = 0$；解は $u = as + b$、$v = cs + d$（直線）；平面の測地線は直線)

### §6.2 測地線の例
**内容:** 球面上の大円や回転面におけるクレローの関係式

- **1. 球面上の大円**
  - Example 6.2-1 (球面 $S^2(r)$ の測地線は大円：球面の測地方程式を $E=1, F=0, G=\sin^2 u$、クリストッフェル記号 $\Gamma^1_{22} = -\sin u\cos u$、$\Gamma^2_{12} = \cot u$ などで書き下す；赤道 $u = \pi/2$（$v$ を弧長パラメータ）が測地線であることを方程式に代入して確認；任意の大円が測地線であることを回転対称性と組み合わせて示す)
  - Example 6.2-2 (球面の 2 点間の測地距離：球面上の 2 点 $P, Q$ の測地距離は大円弧の長さ $r\cdot\angle POQ$（$O$ は球心）；経度・緯度から球面距離を計算；東京（$35.7°$N、$139.7°$E）とニューヨーク（$40.7°$N、$74.0°$W）の大圏距離の公式適用)

- **2. 回転面のクレローの関係式**
  - Theorem 6.2-1 (クレローの関係式：回転面 $\mathbf{x}(u,v) = (f(u)\cos v, f(u)\sin v, g(u))$（$f(u) > 0$）上の測地線において、$f(u)\cos\psi$（$\psi$ は測地線と緯線のなす角）は定数；$f(u)\cos\psi = c$（クレローの定数）)
  - Proof (回転面の第一基本形式 $I = (f'^2+g'^2)du^2 + f^2 dv^2$；$v$ 方向の対称性からエネルギー保存則に対応する第一積分 $f^2\dot{v} = $ 定数が成立；これを $\cos\psi = f\dot{v}/|\dot{\mathbf{x}}|$ の式に代入するとクレローの定数 $c = f\cos\psi$ が得られる)
  - Example 6.2-3 (球面のクレローの関係式：$f(u) = \sin u$；クレローの定数 $c = \sin u\cos\psi$；赤道（$u=\pi/2$）上で $\psi = 0$（緯線方向）ならば $c = 1$；緯線が測地線でないこと（$c < 1$）と赤道だけが測地線（$c = 1$）であることが確認できる)

### §6.3 測地的完備性の概念
**内容:** 測地線の延長可能性とホップ＝リノウの定理の概説

- **1. 測地的完備性**
  - Definition 6.3-1 (測地的完備性：正則曲面 $S$ が測地的完備であるとは、任意の点 $p$ と任意の接ベクトル $v$ に対する測地線が $\mathbb{R}$ 全体で定義されること；境界や「端」がなく無限に延長できる)
  - Example 6.3-1 (完備な曲面と不完備な曲面：$\mathbb{R}^2$（平面）は測地的完備；$S^2$（球面）は測地的完備；$\mathbb{R}^2 \setminus \{0\}$（原点を除いた平面）は不完備—原点へ向かう測地線（直線）が原点で止まって延長できない；開円板 $D^2$ も不完備)

- **2. ホップ＝リノウの定理**
  - Theorem 6.3-1 (ホップ＝リノウの定理（概説）：連結な正則曲面 $S$ に対して次の条件は同値：(i) $S$ は測地的完備；(ii) $S$ は距離空間として完備（コーシー列が収束）；(iii) $S$ の任意の 2 点はある測地線で結ばれる；(iv) ある点 $p$ からの指数写像が $T_p S$ 全体で定義される)
  - Proof (条件の同値性の証明は多様体論（4-5）で厳密に扱う；ここでは直感的に、「端がない」「距離完備」「任意の 2 点間に測地線が存在」が等価であることを概観する)
  - Example 6.3-2 (完備性と大域的な測地線：$S^2$ は完備で任意の 2 点は大円弧で結ばれる（定理 (iii)）；1 点を除いた球面 $S^2\setminus\{N\}$ は不完備で、北極に向かう大円弧が延長できない；条件 (ii) の観点から、距離が収束しながら極限点が存在しない例として確認)

---

## Chapter 7: ガウス＝ボンネの定理
**テーマ:** 曲率の積分と位相幾何学の結びつき

### §7.1 測地曲率と角の余剰
**内容:** 曲面上の曲線の測地曲率と測地三角形の内角関係

- **1. 測地曲率の定義**
  - Definition 7.1-1 (測地曲率：曲面 $S$ 上の曲線 $\alpha(s)$（弧長パラメータ）の加速度 $\alpha''(s)$ の接成分の大きさに符号をつけた量 $\kappa_g$；$\alpha''(s) = \kappa_g(s)(\mathbf{N}\times T) + \kappa_n(s)\mathbf{N}$（$T = \alpha'$）；$\kappa_g = 0$ が測地線の条件（§6.1 と同値）)
  - Example 7.1-1 (球面上の緯線の測地曲率：単位球面の緯線 $u = u_0$（弧長パラメータ $v = s/\sin u_0$）；$\kappa_g = \cos u_0/\sin u_0 = \cot u_0$；赤道（$u_0 = \pi/2$）では $\kappa_g = 0$（測地線）；極に近いほど $\kappa_g$ が大きく「曲がっている」ことを確認)

- **2. 角の余剰と測地三角形**
  - Definition 7.1-2 (測地多角形：各辺が測地弧からなる曲面上の多角形；特に 3 辺からなるものを測地三角形という；内角の和がユークリッド幾何（$\pi$）からどれだけずれるかが曲率と関係する)
  - Proposition 7.1-1 (角の余剰：球面上の測地三角形の内角の和 $A + B + C$ は $\pi + \Delta/r^2$（$\Delta$ は三角形の面積）；内角の和が $\pi$ より大きい（$K > 0$ の場合）)
  - Proof (局所版ガウス＝ボンネ定理（§7.2）の特殊ケースとして導く；3 辺の測地曲率が $0$ なので §7.2 の公式の $\kappa_g$ の積分項が消える)
  - Example 7.1-2 (球面の直角三角形：経度 $0°$・$90°$ の 2 つの子午線と赤道で囲まれた三角形；3 つの内角がすべて $90°$ で内角の和 $= 270° = 3\pi/2 > \pi$；面積 $\Delta = 4\pi r^2/8 = \pi r^2/2$ で角の余剰 $= \Delta/r^2 = \pi/2$ と一致)

### §7.2 局所版ガウス＝ボンネの定理
**内容:** 領域における測地曲率とガウス曲率、外角の和の関係

- **1. 局所版ガウス＝ボンネの定理**
  - Theorem 7.2-1 (局所版ガウス＝ボンネの定理：単純閉曲線 $\partial D$ で囲まれた単連結領域 $D \subset S$（$S$ は向き付け可能曲面）において
    $\int_{\partial D} \kappa_g\,ds + \iint_D K\,dA + \sum_{i=1}^n \theta_i = 2\pi$
    ここで $\theta_i$ は $\partial D$ の各頂点での外角（$\pi$ - 内角）、$\kappa_g$ は辺の測地曲率)
  - Proof (グリーンの定理（3-1 の結果）を第一基本形式に関する接続の曲率形式に適用；各辺上で $\int \kappa_g\,ds$ を加え、頂点での外角を加算することでオイラー指数 $\chi = 1$（単連結）に帰着)
  - Example 7.2-1 (測地三角形への適用：3 辺が測地弧（$\kappa_g = 0$）で頂点が 3 つ（外角 $= \pi - $ 内角）；$0 + \iint_D K\,dA + (\pi-A)+(\pi-B)+(\pi-C) = 2\pi$；整理して $A+B+C = \pi + \iint_D K\,dA$ が得られる（§7.1 Proposition 7.1-1 の証明）)

- **2. 曲率積分の位相的意味**
  - Example 7.2-2 (平面三角形の確認：$K = 0$ の平面では $A + B + C = \pi + 0 = \pi$；ユークリッド幾何の内角の和定理が局所ガウス＝ボンネの特殊ケースとして再現される)
  - Remark (局所版から大域版へ：単連結領域での定理（Theorem 7.2-1）を曲面全体に拡張すると大域版ガウス＝ボンネ（§7.3）が得られる；曲面を測地三角形で分割して各三角形に局所版を適用し、辺の積分を相殺させる手続き)

### §7.3 大域版ガウス＝ボンネの定理
**内容:** 閉曲面の全曲率積分がオイラー標数に比例する大域的定理

- **1. 大域版ガウス＝ボンネの定理**
  - Theorem 7.3-1 (大域版ガウス＝ボンネの定理：コンパクトで向き付け可能な閉曲面 $S$ に対して
    $\iint_S K\,dA = 2\pi\chi(S)$
    ここで $\chi(S)$ はオイラー標数；種数 $g$ の曲面 $\Sigma_g$ では $\chi(\Sigma_g) = 2-2g$；$S^2$（$\chi=2$）、$T^2$（$\chi=0$）など)
  - Proof (三角形分割（三角測地分割）：$S$ を測地三角形で分割して局所版ガウス＝ボンネを各三角形に適用；内部の辺の $\kappa_g$ 積分と頂点の外角が対消去；残るのは $\iint K\,dA$ と位相的量（頂点数 $V$・辺数 $E$・面数 $F$）のオイラー標数 $\chi = V-E+F$ との等式)
  - Example 7.3-1 (球面の全曲率積分：$K = 1/r^2$（定数）；$\iint_{S^2} K\,dA = (1/r^2) \cdot 4\pi r^2 = 4\pi = 2\pi\chi(S^2) = 2\pi \cdot 2$；$g = 0$（穴なし）のオイラー標数 $\chi = 2$ と一致)
  - Example 7.3-2 (トーラスの全曲率積分：トーラスの $K$ は正の部分（外側）と負の部分（内側）があり積分すると $0$；$2\pi\chi(T^2) = 2\pi \cdot 0$；具体的に $\mathbf{x}(u,v) = ((R+r\cos u)\cos v, (R+r\cos u)\sin v, r\sin u)$（$R > r > 0$）で $K = \cos u/(r(R+r\cos u))$ を計算；$\iint K\,dA = 0$ を確認)

- **2. ガウス＝ボンネの定理の意義と応用**
  - Remark (曲率と位相の橋渡し：ガウス＝ボンネの定理は曲面の局所的な幾何量（ガウス曲率）の全積分が大域的な位相量（オイラー標数）に等しいことを主張する；局所的にどう曲げても全曲率が変わらないことは、曲率が位相不変量を決定するという深い事実を反映している；代数的トポロジー（4-8）・多様体論（4-5）・微分幾何II（4-6）への自然な橋渡し)
  - Corollary 7.3-1 (トポロジカルな帰結：コンパクト向き付け可能閉曲面で $K > 0$ のものは球面のみ（$\chi = 2 > 0$）；$K \leq 0$ でかつコンパクトな曲面は $\chi \leq 0$（$g \geq 1$）；曲面の位相型が全曲率の符号を制約する)
  - Proof ($K > 0$ かつコンパクト：$\iint K\,dA > 0$ より $\chi > 0$ なので $\chi = 2$（$g=0$、球面型）；球面型の曲面はガウス＝ボンネから $\int K = 4\pi > 0$ と確認)
