# 3-1: ベクトル解析

**前提科目:** 2-1（線形代数学II）、2-2（微分積分学II）、2-3（実解析）

---

## Chapter 1: ベクトル場の基礎
**テーマ:** スカラー場・ベクトル場と微分演算子

### §1.1 スカラー場と勾配（grad）
**内容:** 方向微分と勾配ベクトルの幾何学的意味、ポテンシャル

- **1. スカラー場の定義**
  - Definition 1.1-1（スカラー場：開集合 $U \subset \mathbb{R}^n$ 上で定義された実数値関数 $f : U \to \mathbb{R}$；空間の各点に1つの実数値を対応させる場）
  - Example 1.1-1（気温分布 $T(x, y, z)$、気圧分布 $P(x,y,z)$、高さ関数 $h(x,y) = x^2 + y^2$ などの具体例；等値面・等高線の概念）

- **2. 方向微分**
  - Definition 1.1-2（方向微分：単位ベクトル $\mathbf{u} = (u_1, u_2, u_3)$ に沿った $f$ の方向微分 $D_{\mathbf{u}}f(\mathbf{p}) = \displaystyle\lim_{h \to 0} \frac{f(\mathbf{p} + h\mathbf{u}) - f(\mathbf{p})}{h}$）
  - Remark（偏微分は座標軸方向への方向微分の特別な場合：$\partial f/\partial x = D_{\mathbf{e}_1} f$）

- **3. 勾配ベクトル**
  - Definition 1.1-3（勾配（gradient）：$C^1$ 級スカラー場 $f$ の勾配 $\nabla f = \text{grad}\, f = \left(\dfrac{\partial f}{\partial x},\, \dfrac{\partial f}{\partial y},\, \dfrac{\partial f}{\partial z}\right)$）
  - Theorem 1.1-1（方向微分と勾配の関係：$D_{\mathbf{u}}f(\mathbf{p}) = \nabla f(\mathbf{p}) \cdot \mathbf{u}$；特に $|\nabla f(\mathbf{p})|$ が最大増加率、$\nabla f(\mathbf{p})$ の方向が最急上昇方向）
  - Theorem 1.1-2（等値面と勾配の直交性：$f(\mathbf{p}) = c$ を満たす等値面上で $\nabla f(\mathbf{p})$ はその面に直交する）
  - Example 1.1-2（$f(x,y) = x^2 + 4y^2$；$\nabla f = (2x, 8y)$；点 $(1, 1)$ での勾配は $(2, 8)$；等値線 $x^2 + 4y^2 = 5$ に直交することの確認；最急上昇方向の可視化）

### §1.2 ベクトル場と発散（div）
**内容:** 湧き出し・吸い込みのモデルと流束密度の概念

- **1. ベクトル場の定義**
  - Definition 1.2-1（ベクトル場：開集合 $U \subset \mathbb{R}^n$ 上で定義されたベクトル値関数 $\mathbf{F} : U \to \mathbb{R}^n$；空間の各点にベクトルを対応させる場）
  - Example 1.2-1（流体の速度場 $\mathbf{v}(x,y,z)$、重力場 $\mathbf{g} = (0,0,-g)$、電場 $\mathbf{E}(x,y,z)$ などの具体例）

- **2. 発散**
  - Definition 1.2-2（発散（divergence）：$C^1$ 級ベクトル場 $\mathbf{F} = (F_1, F_2, F_3)$ の発散 $\nabla \cdot \mathbf{F} = \text{div}\, \mathbf{F} = \dfrac{\partial F_1}{\partial x} + \dfrac{\partial F_2}{\partial y} + \dfrac{\partial F_3}{\partial z}$）
  - Remark（直感：$\text{div}\, \mathbf{F}(\mathbf{p}) > 0$ なら点 $\mathbf{p}$ の周りで流体が「湧き出し」；$< 0$ なら「吸い込み」；$= 0$ なら「湧き出しも吸い込みもない（非圧縮流体）」）
  - Example 1.2-2（放射状ベクトル場 $\mathbf{F} = (x, y, z)$；$\text{div}\, \mathbf{F} = 1 + 1 + 1 = 3$（一様な湧き出し）；圧縮不能流体の渦 $\mathbf{F} = (-y, x, 0)$；$\text{div}\, \mathbf{F} = 0$ の確認）

### §1.3 回転（rot/curl）
**内容:** ある点での渦の強さと向きを示す循環密度の概念

- **1. 回転の定義**
  - Definition 1.3-1（回転（rotation/curl）：$C^1$ 級ベクトル場 $\mathbf{F} = (F_1, F_2, F_3)$ の回転 $\nabla \times \mathbf{F} = \text{rot}\, \mathbf{F} = \text{curl}\, \mathbf{F} = \begin{vmatrix} \mathbf{e}_1 & \mathbf{e}_2 & \mathbf{e}_3 \\ \partial_x & \partial_y & \partial_z \\ F_1 & F_2 & F_3 \end{vmatrix}$；成分表示は $\left(\dfrac{\partial F_3}{\partial y} - \dfrac{\partial F_2}{\partial z},\; \dfrac{\partial F_1}{\partial z} - \dfrac{\partial F_3}{\partial x},\; \dfrac{\partial F_2}{\partial x} - \dfrac{\partial F_1}{\partial y}\right)$）
  - Remark（直感：$\text{rot}\, \mathbf{F}(\mathbf{p})$ の方向は渦の回転軸、その大きさ $|\text{rot}\, \mathbf{F}|$ は循環の強さを表す；右ねじの法則）
  - Example 1.3-1（剛体の回転 $\boldsymbol{\omega} = (0,0,\omega)$（$z$ 軸まわり）により生じる速度場 $\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r} = (-\omega y, \omega x, 0)$；$\text{rot}\, \mathbf{v} = (0, 0, 2\omega)$（回転の2倍が渦度として現れる）の計算）
  - Example 1.3-2（渦なし場：$\mathbf{F} = (x^2 - y^2,\, -2xy,\, 0)$；$\text{rot}\, \mathbf{F} = \mathbf{0}$ の確認）

### §1.4 ベクトル演算の公式
**内容:** 三重積の代数公式、発散・回転・勾配を組み合わせた微分の公式とラプラシアン

- **1. ベクトルの三重積（代数公式）**
  - Proposition 1.4-1（スカラー三重積：$\mathbf{A} \cdot (\mathbf{B} \times \mathbf{C}) = \mathbf{B} \cdot (\mathbf{C} \times \mathbf{A}) = \mathbf{C} \cdot (\mathbf{A} \times \mathbf{B})$；平行六面体の体積）
  - Proposition 1.4-2（ベクトル三重積（BAC-CAB則）：$\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) = \mathbf{B}(\mathbf{A}\cdot\mathbf{C}) - \mathbf{C}(\mathbf{A}\cdot\mathbf{B})$）

- **2. 基本恒等式**
  - Theorem 1.4-1（$\text{rot}(\nabla f) = \mathbf{0}$：勾配場の回転は常に零；$\text{div}(\text{rot}\, \mathbf{F}) = 0$：回転場の発散は常に零）
  - Remark（$\text{rot}(\nabla f) = \mathbf{0}$ は「保存力には渦がない」、$\text{div}(\text{rot}\, \mathbf{F}) = 0$ は「渦からは湧き出しが生じない」という物理的意味を持つ）

- **3. 積の微分公式**
  - Proposition 1.4-3（積の公式：$\nabla(fg) = f\nabla g + g\nabla f$；$\text{div}(f\mathbf{F}) = f\,\text{div}\,\mathbf{F} + (\nabla f)\cdot\mathbf{F}$；$\text{rot}(f\mathbf{F}) = f\,\text{rot}\,\mathbf{F} + (\nabla f) \times \mathbf{F}$）
  - Proposition 1.4-4（$\text{div}(\mathbf{F} \times \mathbf{G}) = \mathbf{G} \cdot \text{rot}\,\mathbf{F} - \mathbf{F} \cdot \text{rot}\,\mathbf{G}$；$\text{rot}(\mathbf{F} \times \mathbf{G}) = (\mathbf{G}\cdot\nabla)\mathbf{F} - (\mathbf{F}\cdot\nabla)\mathbf{G} + \mathbf{F}\,\text{div}\,\mathbf{G} - \mathbf{G}\,\text{div}\,\mathbf{F}$）

- **4. ラプラシアン**
  - Definition 1.4-1（ラプラシアン：$\Delta f = \nabla^2 f = \text{div}(\nabla f) = \dfrac{\partial^2 f}{\partial x^2} + \dfrac{\partial^2 f}{\partial y^2} + \dfrac{\partial^2 f}{\partial z^2}$）
  - Proposition 1.4-5（$\text{rot}(\text{rot}\,\mathbf{F}) = \nabla(\text{div}\,\mathbf{F}) - \Delta\mathbf{F}$（ベクトルラプラシアンの公式））
  - Example 1.4-1（$r = \sqrt{x^2 + y^2 + z^2}$ として $\nabla r$、$\Delta r$、$\Delta(1/r)$（$r \neq 0$）の計算；$\Delta(1/r) = 0$ の確認（ラプラス方程式の基本解））


---

## Chapter 2: 曲線座標系
**テーマ:** 一般座標系における微分演算

### §2.1 曲線座標系と基底ベクトル
**内容:** 局所直交座標系と計量係数の概念

- **1. 曲線座標系の定義**
  - Definition 2.1-1（曲線座標系：直交座標 $(x, y, z)$ を曲線座標 $(u_1, u_2, u_3)$ で表す全単射 $\mathbf{r}(u_1, u_2, u_3) = (x, y, z)$；各座標 $u_i$ の座標曲線族が空間を充填する）
  - Example 2.1-1（平面極座標 $(r, \theta)$：$x = r\cos\theta$、$y = r\sin\theta$；$z$ を加えれば円柱座標）

- **2. 局所基底ベクトルとラメ係数**
  - Definition 2.1-2（自然基底ベクトル：$\mathbf{e}_i^* = \dfrac{\partial \mathbf{r}}{\partial u_i}$；正規化された基底 $\hat{\mathbf{e}}_i = \mathbf{e}_i^*/|\mathbf{e}_i^*|$；ラメ係数 $h_i = |\partial\mathbf{r}/\partial u_i|$）
  - Definition 2.1-3（直交曲線座標系：$\dfrac{\partial\mathbf{r}}{\partial u_i} \cdot \dfrac{\partial\mathbf{r}}{\partial u_j} = 0$（$i \neq j$）が成立する座標系；以降は直交系を仮定する）
  - Example 2.1-2（平面極座標のラメ係数：$h_r = 1$、$h_\theta = r$；弧長要素 $ds^2 = dr^2 + r^2 d\theta^2$ の導出）

### §2.2 円柱座標系
**内容:** 円柱座標系における勾配・発散・回転・ラプラシアンの公式導出

- **1. 円柱座標の設定**
  - Definition 2.2-1（円柱座標：$x = r\cos\theta$、$y = r\sin\theta$、$z = z$；ラメ係数 $h_r = 1$、$h_\theta = r$、$h_z = 1$；体積要素 $dV = r\,dr\,d\theta\,dz$）

- **2. 各演算子の円柱座標表示**
  - Proposition 2.2-1（勾配：$\nabla f = \dfrac{\partial f}{\partial r}\hat{\mathbf{e}}_r + \dfrac{1}{r}\dfrac{\partial f}{\partial \theta}\hat{\mathbf{e}}_\theta + \dfrac{\partial f}{\partial z}\hat{\mathbf{e}}_z$）
  - Proposition 2.2-2（発散：$\text{div}\,\mathbf{F} = \dfrac{1}{r}\dfrac{\partial(rF_r)}{\partial r} + \dfrac{1}{r}\dfrac{\partial F_\theta}{\partial \theta} + \dfrac{\partial F_z}{\partial z}$）
  - Proposition 2.2-3（回転：$\text{rot}\,\mathbf{F} = \left(\dfrac{1}{r}\dfrac{\partial F_z}{\partial \theta} - \dfrac{\partial F_\theta}{\partial z}\right)\hat{\mathbf{e}}_r + \left(\dfrac{\partial F_r}{\partial z} - \dfrac{\partial F_z}{\partial r}\right)\hat{\mathbf{e}}_\theta + \dfrac{1}{r}\left(\dfrac{\partial(rF_\theta)}{\partial r} - \dfrac{\partial F_r}{\partial \theta}\right)\hat{\mathbf{e}}_z$）
  - Proposition 2.2-4（ラプラシアン：$\Delta f = \dfrac{1}{r}\dfrac{\partial}{\partial r}\!\left(r\dfrac{\partial f}{\partial r}\right) + \dfrac{1}{r^2}\dfrac{\partial^2 f}{\partial \theta^2} + \dfrac{\partial^2 f}{\partial z^2}$）
  - Example 2.2-1（$f(r,\theta,z) = r^2\sin\theta$ の円柱座標でのラプラシアンの計算；直交座標に戻して確認）
  - Example 2.2-2（$\mathbf{F} = (0, r, 0)$（$\theta$ 方向の渦状場）の円柱座標での回転の計算；$\text{rot}\,\mathbf{F} = (0, 0, 2)$ を得て $\mathbf{F} = (-y, x, 0)/1$ の直交座標結果と一致することの確認）

### §2.3 球座標系
**内容:** 球座標系における勾配・発散・回転・ラプラシアンの公式導出

- **1. 球座標の設定**
  - Definition 2.3-1（球座標：$x = r\sin\phi\cos\theta$、$y = r\sin\phi\sin\theta$、$z = r\cos\phi$（$r \geq 0$、$0 \leq \phi \leq \pi$、$0 \leq \theta < 2\pi$）；ラメ係数 $h_r = 1$、$h_\phi = r$、$h_\theta = r\sin\phi$；体積要素 $dV = r^2\sin\phi\,dr\,d\phi\,d\theta$）

- **2. 各演算子の球座標表示**
  - Proposition 2.3-1（勾配：$\nabla f = \dfrac{\partial f}{\partial r}\hat{\mathbf{e}}_r + \dfrac{1}{r}\dfrac{\partial f}{\partial \phi}\hat{\mathbf{e}}_\phi + \dfrac{1}{r\sin\phi}\dfrac{\partial f}{\partial \theta}\hat{\mathbf{e}}_\theta$）
  - Proposition 2.3-2（発散：$\text{div}\,\mathbf{F} = \dfrac{1}{r^2}\dfrac{\partial(r^2 F_r)}{\partial r} + \dfrac{1}{r\sin\phi}\dfrac{\partial(\sin\phi\, F_\phi)}{\partial \phi} + \dfrac{1}{r\sin\phi}\dfrac{\partial F_\theta}{\partial \theta}$）
  - Proposition 2.3-3（回転：$\text{rot}\,\mathbf{F} = \dfrac{1}{r\sin\phi}\!\left(\dfrac{\partial(\sin\phi\, F_\theta)}{\partial \phi} - \dfrac{\partial F_\phi}{\partial \theta}\right)\hat{\mathbf{e}}_r + \dfrac{1}{r}\!\left(\dfrac{1}{\sin\phi}\dfrac{\partial F_r}{\partial \theta} - \dfrac{\partial(rF_\theta)}{\partial r}\right)\hat{\mathbf{e}}_\phi + \dfrac{1}{r}\!\left(\dfrac{\partial(rF_\phi)}{\partial r} - \dfrac{\partial F_r}{\partial \phi}\right)\hat{\mathbf{e}}_\theta$）
  - Proposition 2.3-4（ラプラシアン：$\Delta f = \dfrac{1}{r^2}\dfrac{\partial}{\partial r}\!\left(r^2\dfrac{\partial f}{\partial r}\right) + \dfrac{1}{r^2\sin\phi}\dfrac{\partial}{\partial \phi}\!\left(\sin\phi\dfrac{\partial f}{\partial \phi}\right) + \dfrac{1}{r^2\sin^2\phi}\dfrac{\partial^2 f}{\partial \theta^2}$）
  - Example 2.3-1（$f = f(r)$（球対称関数）のラプラシアン：$\Delta f = \dfrac{1}{r^2}\dfrac{d}{dr}\!\left(r^2\dfrac{df}{dr}\right) = f'' + \dfrac{2}{r}f'$；球対称ラプラス方程式 $\Delta f = 0$ の一般解 $f = A/r + B$）
  - Example 2.3-2（水素原子の波動関数 $\psi(r)$ がラプラス型方程式を満たすことの確認（概説））

### §2.4 一般直交曲線座標系での公式
**内容:** ラメ係数を用いた曲線座標系での一般公式

- **1. 一般公式**
  - Proposition 2.4-1（ラメ係数 $h_1, h_2, h_3$ を持つ直交曲線座標系 $(u_1, u_2, u_3)$ での各演算子の一般公式：$\nabla f = \displaystyle\sum_i \dfrac{1}{h_i}\dfrac{\partial f}{\partial u_i}\hat{\mathbf{e}}_i$；$\text{div}\,\mathbf{F} = \dfrac{1}{h_1 h_2 h_3}\displaystyle\sum_i \dfrac{\partial}{\partial u_i}(h_1 h_2 h_3 F_i / h_i)$；$\Delta f = \dfrac{1}{h_1 h_2 h_3}\displaystyle\sum_i \dfrac{\partial}{\partial u_i}\!\left(\dfrac{h_1 h_2 h_3}{h_i^2}\dfrac{\partial f}{\partial u_i}\right)$）
  - Remark（円柱座標・球座標の公式は上記の一般公式にラメ係数を代入することで直ちに導かれる；新しい座標系に出会うたびにラメ係数を計算すれば各演算子の公式が得られる）


---

## Chapter 3: 線積分
**テーマ:** スカラー場・ベクトル場の線積分

### §3.1 曲線のパラメータ表示
**内容:** 弧長パラメータと曲線上の接ベクトル

- **1. 曲線のパラメータ表示**
  - Definition 3.1-1（パラメータ曲線：連続写像 $\mathbf{r} : [a, b] \to \mathbb{R}^3$、$\mathbf{r}(t) = (x(t), y(t), z(t))$；$C^1$ 級かつ $\mathbf{r}'(t) \neq \mathbf{0}$ のとき滑らかな曲線という）
  - Example 3.1-1（円：$\mathbf{r}(t) = (R\cos t, R\sin t, 0)$（$0 \leq t \leq 2\pi$）；螺旋：$\mathbf{r}(t) = (a\cos t, a\sin t, bt)$）

- **2. 弧長パラメータ**
  - Definition 3.1-2（弧長：$s(t) = \displaystyle\int_a^t |\mathbf{r}'(\tau)|\,d\tau$；$|\mathbf{r}'(t)| = \sqrt{(x')^2 + (y')^2 + (z')^2}$）
  - Definition 3.1-3（単位接ベクトル：$\mathbf{T} = d\mathbf{r}/ds = \mathbf{r}'(t)/|\mathbf{r}'(t)|$）
  - Example 3.1-2（円 $\mathbf{r}(t) = (R\cos t, R\sin t)$ の弧長計算：$|\mathbf{r}'(t)| = R$；$s(t) = Rt$；$t = s/R$ とパラメータ付け直しで単位速度曲線になることの確認）

### §3.2 スカラー場の線積分
**内容:** 曲線の質量や重心などのスカラー量の計算

- **1. スカラー場の線積分の定義**
  - Definition 3.2-1（スカラー場の線積分：$\displaystyle\int_C f\,ds = \int_a^b f(\mathbf{r}(t))|\mathbf{r}'(t)|\,dt$；弧長要素 $ds = |\mathbf{r}'(t)|dt$ を使って通常の積分に帰着）
  - Remark（線密度 $\rho(\mathbf{r})$ を持つ曲線の質量は $M = \int_C \rho\,ds$；重心は $\bar{\mathbf{r}} = \frac{1}{M}\int_C \mathbf{r}\,\rho\,ds$）

- **2. 計算例**
  - Example 3.2-1（螺旋 $\mathbf{r}(t) = (\cos t, \sin t, t)$（$0 \leq t \leq 2\pi$）上の $f(x,y,z) = z$ の線積分：$|\mathbf{r}'| = \sqrt{2}$；$\int_C z\,ds = \int_0^{2\pi} t \cdot \sqrt{2}\,dt = 2\sqrt{2}\pi^2$）
  - Example 3.2-2（線密度一定の円弧の弧長と重心位置の計算）

### §3.3 ベクトル場の線積分
**内容:** 力の場がする仕事や流体の循環の計算

- **1. ベクトル場の線積分（仕事）**
  - Definition 3.3-1（ベクトル場の線積分：$\displaystyle\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\,dt$；$d\mathbf{r} = \mathbf{r}'(t)dt$ は向きを持つベクトル要素）
  - Remark（$\mathbf{F}$ が力の場のとき $\int_C \mathbf{F} \cdot d\mathbf{r}$ は曲線 $C$ に沿った仕事；$\mathbf{F}$ が流速場のとき閉曲線上の積分を循環（circulation）という）

- **2. 計算例**
  - Example 3.3-1（力場 $\mathbf{F} = (y, -x, 0)$、曲線：半径 $1$ の円弧 $(0 \leq t \leq \pi)$；$\mathbf{r}(t) = (\cos t, \sin t, 0)$、$\mathbf{r}'(t) = (-\sin t, \cos t, 0)$；$\mathbf{F} \cdot \mathbf{r}' = -\sin^2 t - \cos^2 t = -1$；積分値 $= -\pi$）
  - Example 3.3-2（重力場 $\mathbf{F} = (0, 0, -mg)$ 中で質点を $(0,0,0)$ から $(1,1,h)$ まで移動させる仕事；経路によらず $W = -mgh$ になることの確認）

- **3. 向きの変更**
  - Proposition 3.3-1（向きの変換：曲線 $C$ を逆向きに辿った曲線 $-C$ に対して $\int_{-C}\mathbf{F}\cdot d\mathbf{r} = -\int_C \mathbf{F}\cdot d\mathbf{r}$）

### §3.4 保存力場とポテンシャル
**内容:** 経路に依存しない積分とポテンシャルの存在条件

- **1. 経路独立性**
  - Definition 3.4-1（経路独立性：ベクトル場 $\mathbf{F}$ の線積分が始点と終点のみで決まり、途中の経路によらないこと）
  - Theorem 3.4-1（経路独立性の同値条件：次の3条件は同値：(1) $\mathbf{F}$ の線積分が経路に依存しない；(2) 任意の閉曲線 $C$ に対して $\oint_C \mathbf{F}\cdot d\mathbf{r} = 0$；(3) $\mathbf{F} = \nabla \phi$ となるスカラーポテンシャル $\phi$ が存在する）

- **2. ポテンシャルの存在条件**
  - Theorem 3.4-2（保存力場の条件：$\mathbf{F}$ が単連結領域上の $C^1$ 級ベクトル場のとき、$\mathbf{F} = \nabla\phi$ となる $\phi$ が存在する $\Leftrightarrow$ $\text{rot}\,\mathbf{F} = \mathbf{0}$）
  - Remark（単連結性の重要性：穴のあいた領域では $\text{rot}\,\mathbf{F} = \mathbf{0}$ でもポテンシャルが存在しないことがある。例として $\mathbf{F} = (-y/(x^2+y^2),\, x/(x^2+y^2),\, 0)$（原点を除く平面上で $\text{rot}\,\mathbf{F} = \mathbf{0}$ だが原点を囲む閉曲線上の線積分が $2\pi \neq 0$））
  - Example 3.4-1（$\mathbf{F} = (2xy + z^2,\, x^2,\, 2xz)$ のポテンシャル $\phi$ の求解：$\phi = x^2 y + xz^2$）
  - Example 3.4-2（重力ポテンシャル $\phi = -GMm/r$；$\mathbf{F} = \nabla\phi = GMm\mathbf{r}/r^3$（引力；マイナス符号の慣例の解説））


---

## Chapter 4: グリーンの定理
**テーマ:** 平面領域における積分定理

### §4.1 グリーンの定理の主張
**内容:** 平面上の線積分と領域の二重積分の関係

- **1. グリーンの定理**
  - Definition 4.1-1（正方向：平面領域 $D$ の境界曲線 $\partial D$ の正方向（反時計回り）；内部を左手に見ながら進む向き）
  - Theorem 4.1-1（グリーンの定理：$C^1$ 級関数 $P(x,y)$、$Q(x,y)$ と有界閉領域 $D$ に対して $\displaystyle\oint_{\partial D} P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA$）
  - Example 4.1-1（$P = -y$、$Q = x$ のとき：$\oint_{\partial D}(-y\,dx + x\,dy) = \iint_D 2\,dA = 2\,|D|$；グリーンの定理から面積公式 $|D| = \dfrac{1}{2}\oint_{\partial D}(x\,dy - y\,dx)$ が導かれることの確認）

### §4.2 グリーンの定理の証明
**内容:** 縦横に単純な領域に対する定理の証明

- **1. 縦線型・横線型領域での証明**
  - Definition 4.2-1（縦線型領域：$D = \{(x,y) \mid a \leq x \leq b,\; g_1(x) \leq y \leq g_2(x)\}$；横線型領域：$D = \{(x,y) \mid c \leq y \leq d,\; h_1(y) \leq x \leq h_2(y)\}$）
  - Proof（グリーンの定理の証明：縦線型領域では $\displaystyle\iint_D \dfrac{\partial P}{\partial y}\,dA = -\oint_{\partial D} P\,dx$、横線型領域では $\displaystyle\iint_D \dfrac{\partial Q}{\partial x}\,dA = \oint_{\partial D} Q\,dy$ を示し、2式を合わせる）
  - Remark（一般の領域への拡張：一般の有界領域は有限個の縦線型・横線型領域に分割でき、境界の共有部分の積分が相殺することで定理が成立する）

### §4.3 面積の計算公式
**内容:** 線積分を用いた領域の面積の計算とその応用

- **1. グリーンの定理による面積公式**
  - Proposition 4.3-1（面積公式：$|D| = \oint_{\partial D} x\,dy = -\oint_{\partial D} y\,dx = \dfrac{1}{2}\oint_{\partial D}(x\,dy - y\,dx)$）
  - Example 4.3-1（楕円 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ の面積：$\mathbf{r}(t) = (a\cos t, b\sin t)$（$0 \leq t \leq 2\pi$）のパラメータ表示を使い $|D| = \dfrac{1}{2}\int_0^{2\pi}(a\cos t \cdot b\cos t - b\sin t \cdot (-a\sin t))\,dt = \pi ab$）
  - Example 4.3-2（アステロイド $\mathbf{r}(t) = (a\cos^3 t, a\sin^3 t)$（$0 \leq t \leq 2\pi$）の囲む面積 $= \dfrac{3\pi a^2}{8}$ の計算）

### §4.4 ベクトル形式での解釈
**内容:** 2次元における発散定理やストークスの定理としての解釈

- **1. 2次元発散定理**
  - Proposition 4.4-1（2次元発散定理：グリーンの定理で $P = F_2$、$Q = F_1$ と置くと $\oint_{\partial D}\mathbf{F}\cdot\mathbf{n}\,ds = \iint_D \text{div}\,\mathbf{F}\,dA$（$\mathbf{n}$ は外向き単位法線））

- **2. 2次元ストークスの定理**
  - Proposition 4.4-2（2次元ストークスの定理：グリーンの定理で $P = F_1$、$Q = F_2$ と置くと $\oint_{\partial D}\mathbf{F}\cdot d\mathbf{r} = \iint_D (\text{rot}\,\mathbf{F})_z\,dA$）
  - Remark（グリーンの定理は3次元のガウスの発散定理（Chapter 6）とストークスの定理（Chapter 7）の2次元版であり、3つの定理はすべてストークスの一般定理の特別な場合として多様体上の微分形式の言葉で統一される（多様体論（4-4）へ続く））


---

## Chapter 5: 面積分
**テーマ:** 曲面上の積分

### §5.1 曲面のパラメータ表示
**内容:** 接平面と法線ベクトルに基づく曲面の微小表現

- **1. 曲面のパラメータ表示**
  - Definition 5.1-1（パラメータ曲面：$C^1$ 写像 $\mathbf{r}(u,v) = (x(u,v), y(u,v), z(u,v))$（$(u,v) \in D \subset \mathbb{R}^2$）で表された曲面；$\mathbf{r}_u = \partial\mathbf{r}/\partial u$、$\mathbf{r}_v = \partial\mathbf{r}/\partial v$ が一次独立のとき滑らかな曲面という）
  - Example 5.1-1（球面：$\mathbf{r}(\phi, \theta) = (R\sin\phi\cos\theta, R\sin\phi\sin\theta, R\cos\phi)$（球座標パラメータ）；円柱面：$\mathbf{r}(\theta, z) = (R\cos\theta, R\sin\theta, z)$；グラフ型：$\mathbf{r}(x,y) = (x, y, f(x,y))$）

- **2. 接ベクトルと法線ベクトル**
  - Definition 5.1-2（法線ベクトル：$\mathbf{N} = \mathbf{r}_u \times \mathbf{r}_v$；$\mathbf{N} \neq \mathbf{0}$ のとき曲面の法線方向を定める；単位法線 $\hat{\mathbf{n}} = \mathbf{N}/|\mathbf{N}|$）
  - Example 5.1-2（グラフ型曲面 $z = f(x,y)$ の法線ベクトル：$\mathbf{r}_x \times \mathbf{r}_y = (-f_x, -f_y, 1)$）

### §5.2 曲面積要素
**内容:** 曲面のパラメータ表示から導出される面積素の幾何学的意味

- **1. 面積素の定義**
  - Definition 5.2-1（面積素：$dS = |\mathbf{r}_u \times \mathbf{r}_v|\,du\,dv$；微小矩形 $[u, u+du]\times[v, v+dv]$ が曲面上で占める面積の近似）
  - Theorem 5.2-1（曲面の面積：$A(S) = \displaystyle\iint_D |\mathbf{r}_u \times \mathbf{r}_v|\,du\,dv$）
  - Example 5.2-1（球面の面積：$\mathbf{r}_\phi \times \mathbf{r}_\theta = (-R^2\sin^2\phi\cos\theta, -R^2\sin^2\phi\sin\theta, -R^2\sin\phi\cos\phi)$；$|\mathbf{r}_\phi \times \mathbf{r}_\theta| = R^2\sin\phi$；$A = \int_0^\pi\int_0^{2\pi} R^2\sin\phi\,d\theta\,d\phi = 4\pi R^2$）

### §5.3 スカラー場の面積分
**内容:** 曲面の質量や重心などのスカラー量の面積分

- **1. スカラー場の面積分**
  - Definition 5.3-1（スカラー場の面積分：$\displaystyle\iint_S f\,dS = \iint_D f(\mathbf{r}(u,v))|\mathbf{r}_u \times \mathbf{r}_v|\,du\,dv$）
  - Example 5.3-1（球面 $x^2+y^2+z^2 = R^2$ 上の $f(x,y,z) = z^2$ の面積分：球座標で $\iint_S z^2\,dS = \int_0^\pi\int_0^{2\pi} R^2\cos^2\phi \cdot R^2\sin\phi\,d\theta\,d\phi = \dfrac{4\pi R^4}{3}$）

### §5.4 ベクトル場の面積分（流束）
**内容:** 面の向きを考慮したベクトル場の流束の物理的意味

- **1. 向きつき曲面と流束**
  - Definition 5.4-1（向きつき曲面：曲面に一貫した法線方向の選択を与えたもの；閉曲面の場合は外向き法線を正の向きとする慣例）
  - Definition 5.4-2（ベクトル場の面積分（流束）：$\displaystyle\iint_S \mathbf{F}\cdot d\mathbf{S} = \iint_S \mathbf{F}\cdot\hat{\mathbf{n}}\,dS = \iint_D \mathbf{F}(\mathbf{r}(u,v))\cdot(\mathbf{r}_u \times \mathbf{r}_v)\,du\,dv$）
  - Remark（物理的意味：$\mathbf{F}$ が流体の速度場であれば $\iint_S \mathbf{F}\cdot d\mathbf{S}$ は単位時間に曲面 $S$ を通過する流体の体積流量）
  - Example 5.4-1（速度場 $\mathbf{F} = (0, 0, 1)$（一様な上向き流）の、$xy$ 平面上の単位円板を通る流束：$\iint_S \mathbf{F}\cdot\hat{\mathbf{n}}\,dS = \iint_D 1\,dA = \pi$）
  - Example 5.4-2（$\mathbf{F} = (x, y, z)$ の球面（半径 $R$、外向き法線）を通る流束：$\hat{\mathbf{n}} = (x,y,z)/R$ なので $\mathbf{F}\cdot\hat{\mathbf{n}} = R$；流束 $= R \cdot 4\pi R^2 = 4\pi R^3$；発散定理（Chapter 6）の結果と一致することの予告）


---

## Chapter 6: ガウスの発散定理
**テーマ:** 3次元領域での積分定理

### §6.1 発散定理の主張
**内容:** 閉曲面上の流束と内部領域の発散の体積積分の関係

- **1. ガウスの発散定理**
  - Theorem 6.1-1（ガウスの発散定理：$C^1$ 級ベクトル場 $\mathbf{F}$ と境界 $\partial V$（外向き法線）を持つ有界閉領域 $V$ に対して $\displaystyle\oiint_{\partial V}\mathbf{F}\cdot d\mathbf{S} = \iiint_V \text{div}\,\mathbf{F}\,dV$）
  - Remark（直感的理解：領域内のすべての「湧き出し」の総量（体積積分）が境界を通る正味の流出量（面積分）に等しい；局所的性質（発散）と大域的性質（流束）をつなぐ）

- **2. 確認例**
  - Example 6.1-1（$\mathbf{F} = (x, y, z)$、$V$：球 $x^2+y^2+z^2 \leq R^2$；$\text{div}\,\mathbf{F} = 3$；$\iiint_V 3\,dV = 4\pi R^3$；§5.4 の Example 5.4-2 の流束 $4\pi R^3$ と一致することの確認）

### §6.2 発散定理の証明
**内容:** 標準的な領域に対する発散定理の証明

- **1. 証明の方針**
  - Proof（発散定理の証明：3つの分量 $\dfrac{\partial F_1}{\partial x}$、$\dfrac{\partial F_2}{\partial y}$、$\dfrac{\partial F_3}{\partial z}$ を別々に処理し合計する；$z$ 方向については縦線型領域 $\{(x,y,z) \mid (x,y)\in D,\, g_1(x,y)\leq z\leq g_2(x,y)\}$ で $\iiint_V \dfrac{\partial F_3}{\partial z}\,dV = \iint_{\partial V} F_3\,dS_z$ を示し、残り2方向も同様に処理する）

### §6.3 物理学的応用
**内容:** 質量保存則などの連続の方程式やガウスの法則への応用

- **1. 連続の方程式（質量保存則）**
  - Theorem 6.3-1（連続の方程式：質量密度 $\rho(x,y,z,t)$ と流速 $\mathbf{v}$ の流体に対して $\dfrac{\partial \rho}{\partial t} + \text{div}(\rho\mathbf{v}) = 0$；発散定理から体積積分の形で導出される）
  - Remark（非圧縮流体では $\rho$ 一定なので $\text{div}\,\mathbf{v} = 0$ が従う；これは §1.2 で述べた発散のゼロ条件と対応する）

- **2. 静電場のガウスの法則**
  - Theorem 6.3-2（ガウスの法則：電荷 $Q$ を囲む任意の閉曲面 $S$ に対して $\displaystyle\oiint_S \mathbf{E}\cdot d\mathbf{S} = \dfrac{Q}{\varepsilon_0}$；微分形では $\text{div}\,\mathbf{E} = \dfrac{\rho_e}{\varepsilon_0}$（$\rho_e$ は電荷密度））
  - Example 6.3-1（点電荷 $Q$ が作る電場 $\mathbf{E} = \dfrac{Q}{4\pi\varepsilon_0}\dfrac{\mathbf{r}}{r^3}$ の任意の閉曲面上の流束が $Q/\varepsilon_0$ になることの発散定理による確認）

### §6.4 立体角と逆二乗則の場
**内容:** 原点を含む領域での湧き出し量の計算と立体角の概念

- **1. 立体角の定義**
  - Definition 6.4-1（立体角：点 $O$ から見た曲面 $S$ の立体角 $\Omega = \displaystyle\iint_S \dfrac{\hat{\mathbf{r}}\cdot\hat{\mathbf{n}}}{r^2}\,dS$；球面の場合 $\Omega = 4\pi$（全立体角）；単位は sr（ステラジアン））

- **2. 特異点を持つ場への対処**
  - Theorem 6.4-1（$\mathbf{F} = \mathbf{r}/r^3$ の場合：$r \neq 0$ で $\text{div}\,\mathbf{F} = 0$ だが、原点を含む領域 $V$ では $\oiint_{\partial V} \mathbf{F}\cdot d\mathbf{S} = 4\pi$（原点を除いた領域での発散定理適用と小球面の極限処理によって示される））
  - Remark（この議論はディラクのデルタ関数 $\delta^3(\mathbf{r})$ の概念へ繋がる：$\text{div}(\mathbf{r}/r^3) = 4\pi\delta^3(\mathbf{r})$；測度論的な扱いは測度論（3-3）・フーリエ解析（3-4）で詳しく扱われる）


---

## Chapter 7: ストークスの定理
**テーマ:** 曲面と境界曲線に関する積分定理

### §7.1 ストークスの定理の主張
**内容:** 曲面上の渦の面積分と境界の循環（線積分）の関係

- **1. 境界の向きの規約**
  - Definition 7.1-1（境界の正方向：向きつき曲面 $S$ の境界曲線 $\partial S$ の正方向は、法線 $\hat{\mathbf{n}}$ に関して右ねじの向きに定める（法線方向に右ねじを回したとき進む向き））

- **2. ストークスの定理**
  - Theorem 7.1-1（ストークスの定理：$C^1$ 級ベクトル場 $\mathbf{F}$ と正規向きつき曲面 $S$（境界 $\partial S$ を持つ）に対して $\displaystyle\oint_{\partial S}\mathbf{F}\cdot d\mathbf{r} = \iint_S (\text{rot}\,\mathbf{F})\cdot d\mathbf{S}$）
  - Remark（グリーンの定理との関係：$z = 0$ の平面上の領域 $D$ に適用すると、$(\text{rot}\,\mathbf{F})_z = \partial Q/\partial x - \partial P/\partial y$ を使ってグリーンの定理が再現される）
  - Example 7.1-1（$\mathbf{F} = (-y, x, z^2)$、$S$：$z = 1 - x^2 - y^2$（$z \geq 0$）；$\text{rot}\,\mathbf{F} = (0, 0, 2)$；$\iint_S (\text{rot}\,\mathbf{F})\cdot\hat{\mathbf{n}}\,dS$ と $\oint_{\partial S}\mathbf{F}\cdot d\mathbf{r}$（$\partial S$：単位円）の両側から計算して一致することの確認）

### §7.2 ストークスの定理の証明
**内容:** 曲面のパラメータ表示を用いた成分ごとの証明

- **1. 証明の骨格**
  - Proof（ストークスの定理の証明概略：パラメータ表示 $\mathbf{r}(u,v)$ を用いて線積分と面積分をパラメータ領域の積分に書き直し、グリーンの定理をパラメータ領域 $D_{uv}$ に適用することで証明する）
  - Remark（証明の核心は $\oint_{\partial D_{uv}} \mathbf{F}(\mathbf{r}(u,v))\cdot d\mathbf{r} = \oint_{\partial D_{uv}}\! \Bigl(\mathbf{F}\cdot\dfrac{\partial\mathbf{r}}{\partial u}du + \mathbf{F}\cdot\dfrac{\partial\mathbf{r}}{\partial v}dv\Bigr)$ に $uv$ 平面上のグリーンの定理を使うステップにある）

### §7.3 物理学的応用
**内容:** アンペールの法則やファラデーの電磁誘導の法則への応用

- **1. アンペールの法則**
  - Theorem 7.3-1（アンペールの法則（静磁場）：電流 $I$ を囲む任意の閉曲線 $C$ に対して $\oint_C \mathbf{B}\cdot d\mathbf{r} = \mu_0 I$；ストークスの定理を用いると微分形 $\text{rot}\,\mathbf{B} = \mu_0\mathbf{J}$（$\mathbf{J}$ は電流密度）が得られる）
  - Example 7.3-1（無限直線電流 $I$ が作る磁場 $\mathbf{B}$ の円形経路上の循環積分 $\oint_C \mathbf{B}\cdot d\mathbf{r} = \mu_0 I$ の具体的計算）

- **2. ファラデーの電磁誘導の法則**
  - Theorem 7.3-2（ファラデーの法則：閉曲線 $C$ の囲む面 $S$ を貫く磁束 $\Phi_B = \iint_S \mathbf{B}\cdot d\mathbf{S}$ の時間変化が起電力を生む：$\oint_C \mathbf{E}\cdot d\mathbf{r} = -\dfrac{d\Phi_B}{dt}$；ストークスの定理を用いると微分形 $\text{rot}\,\mathbf{E} = -\dfrac{\partial\mathbf{B}}{\partial t}$）
  - Remark（ガウスの法則・アンペールの法則・ファラデーの法則・磁束の法則を合わせるとマクスウェルの方程式が完成する；ベクトル解析はマクスウェル方程式の数学的言語として整備された歴史的経緯がある）

### §7.4 ヘルムホルツの分解定理
**内容:** ベクトル場を渦なし成分と湧き出しなし成分へ分解する定理

- **1. ヘルムホルツの分解**
  - Theorem 7.4-1（ヘルムホルツの分解定理：十分滑らかで無限遠で十分速く減衰するベクトル場 $\mathbf{F}$ は一意に $\mathbf{F} = -\nabla\phi + \nabla\times\mathbf{A}$ と分解される；$-\nabla\phi$ は渦なし（$\text{rot}(-\nabla\phi) = \mathbf{0}$）成分、$\nabla\times\mathbf{A}$ は湧き出しなし（$\text{div}(\nabla\times\mathbf{A}) = 0$）成分）
  - Remark（スカラーポテンシャル $\phi$ は $\Delta\phi = -\text{div}\,\mathbf{F}$（ポアソン方程式）を、ベクトルポテンシャル $\mathbf{A}$ は $\Delta\mathbf{A} = -\text{rot}\,\mathbf{F}$ を満たす；どちらもポアソン方程式の解として構成できる）
  - Example 7.4-1（電磁場 $(\mathbf{E}, \mathbf{B})$ へのヘルムホルツ分解の応用：$\mathbf{E} = -\nabla\phi - \partial\mathbf{A}/\partial t$、$\mathbf{B} = \nabla\times\mathbf{A}$ というポテンシャルによる表示；マクスウェル方程式がポアソン方程式に帰着される仕組みの概説）
  - Remark（ヘルムホルツ分解は関数解析（4-1）の枠組みで Hodge 分解として一般化され、多様体上の微分形式に対する概念（多様体論（4-4）・微分幾何II（4-5））へと発展する）
