# 3-12: 位相空間論II

**前提科目:** 2-5（位相空間論I）、3-8（群論）

---

## Chapter 1: ホモトピー
**テーマ:** 連続変形とホモトピー型

### §1.1 ホモトピーの定義
**内容:** 写像や空間の連続変形と同値性の概念

- **1. ホモトピックな写像**
  - Definition 1.1-1 (ホモトピー：位相空間 $X, Y$ 間の連続写像 $f, g : X \to Y$ がホモトピックであるとは、連続写像 $H : X \times [0,1] \to Y$ で $H(x, 0) = f(x)$、$H(x, 1) = g(x)$（すべての $x \in X$）を満たすものが存在すること；$f \simeq g$ と書き、$H$ をホモトピーという)
  - Proposition 1.1-1 (ホモトピー関係は同値関係：反射律 $f \simeq f$（$H(x,t) = f(x)$）；対称律（$H$ を時間反転）；推移律（$H_1$ と $H_2$ を繋ぎ合わせる）が成立する)
  - Proof (推移律：$f \simeq g$（$H_1$）と $g \simeq h$（$H_2$）があるとき、$H(x,t) = H_1(x, 2t)$（$t \leq 1/2$）、$H(x,t) = H_2(x, 2t-1)$（$t \geq 1/2$）と定めると連続で $H(x,0) = f(x)$、$H(x,1) = h(x)$)
  - Example 1.1-1 ($\mathbb{R}^n$ 上の任意の 2 写像はホモトピック：$f, g : X \to \mathbb{R}^n$ に対して直線ホモトピー $H(x,t) = (1-t)f(x) + tg(x)$ が連続；$\mathbb{R}^n$ の凸性が本質的)

- **2. ホモトピー同値**
  - Definition 1.1-2 (ホモトピー同値：位相空間 $X, Y$ がホモトピー同値であるとは、連続写像 $f : X \to Y$ と $g : Y \to X$ で $g \circ f \simeq \mathrm{id}_X$ かつ $f \circ g \simeq \mathrm{id}_Y$ となるものが存在すること；$X \simeq Y$ と書く)
  - Example 1.1-2 ($\mathbb{R}^n \simeq \{\mathrm{pt}\}$：$f : \mathbb{R}^n \to \{0\}$、$g : \{0\} \to \mathbb{R}^n$ に対して $g \circ f = 0 \simeq \mathrm{id}_{\mathbb{R}^n}$（直線ホモトピー）；$f \circ g = \mathrm{id}_{\{0\}}$)
  - Example 1.1-3 ($S^1 \simeq$ 円環（アニュラス）：$S^1 \times [0,1]$ の各点を $S^1$ に径方向に潰すレトラクションが存在；詳細は §1.3 で扱う)
  - Remark (ホモトピー不変量：ホモトピー同値な空間は同じ「形」をもつと見なす；本コースで扱う基本群や被覆空間はホモトピー不変な概念である)

### §1.2 可縮空間
**内容:** 一点とホモトピー同値になる空間の性質

- **1. 可縮空間の定義と例**
  - Definition 1.2-1 (可縮空間：位相空間 $X$ が可縮であるとは、$X$ がある一点空間とホモトピー同値であること；同値に、恒等写像 $\mathrm{id}_X$ が定値写像にホモトピックであること)
  - Example 1.2-1 (凸集合は可縮：$\mathbb{R}^n$ の凸部分集合 $C$（$x_0 \in C$）に対して $H(x,t) = (1-t)x + tx_0$ が連続ホモトピー；$H(\cdot, 0) = \mathrm{id}_C$、$H(\cdot, 1) = x_0$；特に $\mathbb{R}^n$、$D^n$（円板）、$[0,1]^n$ は可縮)
  - Proposition 1.2-1 (可縮空間の基本群は自明：可縮空間 $X$ の任意の基点での基本群 $\pi_1(X, x_0) = \{e\}$（$e$ は単位元）；詳細は Chapter 2 で示す)
  - Proof (可縮ならば $\mathrm{id}_X \simeq c_{x_0}$（定値写像）；任意のループ $\gamma$ に対してホモトピーを制限すると $\gamma \simeq c_{x_0}$（定値ループ）となる；後の基本群の言葉で言い換えられる)

- **2. 可縮でない空間**
  - Example 1.2-2 ($S^1$ は可縮でない：$S^1$ の基本群 $\pi_1(S^1) \cong \mathbb{Z} \neq \{e\}$ であることが Chapter 3 で分かる；一点の基本群は自明なので $S^1 \not\simeq \{\mathrm{pt}\}$)
  - Remark (可縮性と連結性の違い：可縮ならば弧状連結だが逆は一般に成立しない；$S^n$（$n \geq 1$）は弧状連結だが可縮でない)

### §1.3 レトラクション
**内容:** 空間の一部への変形レトラクトとその性質

- **1. レトラクションと変形レトラクト**
  - Definition 1.3-1 (レトラクション：$A \subset X$ への連続写像 $r : X \to A$ で $r|_A = \mathrm{id}_A$（すなわち $r(a) = a$ for all $a \in A$）となるものをレトラクションという；このとき $A$ を $X$ のレトラクトという)
  - Definition 1.3-2 (変形レトラクト：$A \subset X$ への連続写像 $r : X \to A$ がレトラクションであり、かつ包含写像 $\iota : A \hookrightarrow X$ との合成 $\iota \circ r : X \to X$ が $\mathrm{id}_X$ にホモトピックであるとき $A$ を $X$ の変形レトラクトという)
  - Proposition 1.3-1 ($X \simeq A$：$A$ が $X$ の変形レトラクトならば $A$ と $X$ はホモトピー同値)
  - Proof ($r : X \to A$ と $\iota : A \to X$ が $\iota \circ r \simeq \mathrm{id}_X$ かつ $r \circ \iota = \mathrm{id}_A$ を満たすので定義より $X \simeq A$)
  - Example 1.3-1 ($S^1$ は $\mathbb{R}^2 \setminus \{0\}$ の変形レトラクト：$r(x) = x/\|x\|$ がレトラクション；$H(x,t) = x/\|x\|^t$ が変形ホモトピー（$t=0$ で $\mathrm{id}$、$t=1$ で $r$）；$S^1 \simeq \mathbb{R}^2\setminus\{0\}$)

- **2. 変形レトラクトの応用**
  - Example 1.3-2 ($\mathbb{R}^n \setminus \{0\} \simeq S^{n-1}$：$r(x) = x/\|x\|$ が $S^{n-1}$ へのレトラクション；直線ホモトピー $H(x,t) = (1-t)x + t \cdot x/\|x\|$ が変形を与える；$t=0$ で $\mathrm{id}$、$t=1$ で $r$；$x/\|x\|^{1-t} \cdot \|x\|^{-t}$ の形で連続性を確認)
  - Remark (変形レトラクトの有用性：複雑な空間の基本群を計算するとき、変形レトラクトに帰着すると計算が大幅に簡単になる；$CW$ 複体の理論（§4.3）ではこの手法が系統的に使われる)

---

## Chapter 2: 基本群
**テーマ:** ループのホモトピー類と群構造

### §2.1 道とループ
**内容:** 道（パス）の演算とループの定義

- **1. 道の定義と結合**
  - Definition 2.1-1 (道：位相空間 $X$ における道（パス）とは連続写像 $\gamma : [0,1] \to X$；$\gamma(0)$ を始点、$\gamma(1)$ を終点という)
  - Definition 2.1-2 (道の結合：始点・終点が一致する道 $\alpha$（$\alpha(1) = \beta(0)$）と $\beta$ の結合 $\alpha * \beta : [0,1] \to X$ を $(\alpha * \beta)(t) = \alpha(2t)$（$t \leq 1/2$）、$(\alpha * \beta)(t) = \beta(2t-1)$（$t \geq 1/2$）で定める)
  - Proposition 2.1-1 (道の結合の連続性：$\alpha, \beta$ が連続ならば $\alpha * \beta$ も連続)
  - Proof (貼り合わせ補題：$[0, 1/2]$ と $[1/2, 1]$ は閉集合で覆いをなし、各閉集合上で連続な写像が $1/2$ で一致するから全体で連続)
  - Example 2.1-1 ($S^1$ 上の道：$\gamma(t) = e^{2\pi i t}$（$t \in [0,1]$）は $1$ を始点・終点とする反時計回りのループ；$\gamma_0(t) = 1$（定値道）と $\gamma$ の結合 $\gamma_0 * \gamma = \gamma$ とはならない（定値道を前置すると速さが変わる）が、後でホモトピーを込めた演算では単位元になる)

- **2. ループと基点**
  - Definition 2.1-3 (ループ：道 $\gamma : [0,1] \to X$ で始点と終点が一致する（$\gamma(0) = \gamma(1) = x_0$）もの；$x_0$ を基点という)
  - Definition 2.1-4 (逆道：道 $\gamma$ の逆道 $\bar{\gamma}$ を $\bar{\gamma}(t) = \gamma(1-t)$ で定める；$\gamma$ の終点から始点への道)
  - Example 2.1-2 ($\mathbb{R}^2$ でのループ：$\gamma(t) = (\cos 2\pi t, \sin 2\pi t)$（基点 $(1,0)$ の反時計回り単位円）；$\bar{\gamma}(t) = (\cos 2\pi(1-t), \sin 2\pi(1-t))$ は時計回りのループ；$\gamma * \bar{\gamma}$ は基点 $(1,0)$ を離れてすぐ戻る道で、直感的には「行って帰る」経路)

### §2.2 基本群の定義
**内容:** ループのホモトピー類がなす群構造

- **1. 基点を固定したホモトピー**
  - Definition 2.2-1 (基点付きホモトピー（道ホモトピー）：同じ始点 $x_0$、終点 $x_1$ をもつ 2 つの道 $\alpha, \beta$ が道ホモトピック（$\alpha \simeq_p \beta$）であるとは、連続写像 $H : [0,1]^2 \to X$ で $H(t,0) = \alpha(t)$、$H(t,1) = \beta(t)$、$H(0,s) = x_0$、$H(1,s) = x_1$（すべての $s$）となるものが存在すること)
  - Proposition 2.2-1 (道ホモトピーは同値関係：反射律・対称律・推移律が成立する)
  - Proof (推移律：$\alpha \simeq_p \beta$（$H_1$）と $\beta \simeq_p \gamma$（$H_2$）から $H(t,s) = H_1(t,2s)$（$s \leq 1/2$）、$H(t,s) = H_2(t,2s-1)$（$s \geq 1/2$）を構成；端点固定条件は $H_1$、$H_2$ の条件から継承)
  - Example 2.2-1 (道ホモトピーの具体例：$\mathbb{R}^2$ 上で同じ端点をもつ 2 つの道はすべて道ホモトピック；$H(t,s) = (1-s)\alpha(t) + s\beta(t)$（直線ホモトピー）が連続で端点を固定する)

- **2. 基本群の定義と群構造**
  - Definition 2.2-2 (基本群：位相空間 $X$ の基点 $x_0$ での基本群 $\pi_1(X, x_0)$ とは、$x_0$ を基点とするループの道ホモトピー類全体；乗法を $[\alpha][\beta] = [\alpha * \beta]$ で定める)
  - Theorem 2.2-1 ($\pi_1(X, x_0)$ は群：乗法の well-definedness・結合律・単位元 $[c_{x_0}]$（定値ループ）・逆元 $[\bar{\alpha}]$ の存在が成立する)
  - Proof (well-definedness：$\alpha \simeq_p \alpha'$ かつ $\beta \simeq_p \beta'$ ならば $\alpha*\beta \simeq_p \alpha'*\beta'$（ホモトピーを「横に並べる」）；結合律：$(\alpha*\beta)*\gamma$ と $\alpha*(\beta*\gamma)$ は速さが異なるが端点を固定したホモトピーで繋がる（区間を線形に再パラメータ化）；逆元：$\alpha * \bar{\alpha} \simeq_p c_{x_0}$ を $H(t,s) = \alpha((1-s)\min(2t,1)+ s\cdot 0)$ の形で構成する）
  - Example 2.2-2 ($\mathbb{R}^n$ の基本群：$\pi_1(\mathbb{R}^n, 0) = \{e\}$（自明群）；任意のループは直線ホモトピーで定値ループに縮められる；$\mathbb{R}^n$ の可縮性を反映)

### §2.3 基点の変更
**内容:** 基点による同型性と単連結空間の定義

- **1. 基点の変更による同型**
  - Theorem 2.3-1 (基点変更の同型：弧状連結な位相空間 $X$ の 2 つの基点 $x_0, x_1$ を結ぶ道 $\gamma$ に対して $\phi_\gamma : \pi_1(X, x_0) \to \pi_1(X, x_1)$、$\phi_\gamma([\alpha]) = [\bar{\gamma} * \alpha * \gamma]$ は群同型；よって弧状連結空間の基本群は基点のとり方によらず同型)
  - Proof ($\phi_\gamma$ が群準同型：$\phi_\gamma([\alpha][\beta]) = [\bar\gamma*\alpha*\gamma*\bar\gamma*\beta*\gamma] = \phi_\gamma([\alpha])\phi_\gamma([\beta])$（$\gamma*\bar\gamma \simeq_p c_{x_1}$ を挿入）；逆写像は $\phi_{\bar\gamma}$)
  - Example 2.3-1 ($\pi_1(S^1, 1) \cong \pi_1(S^1, -1)$：$S^1$ の基点を $1$ から $-1$ に変えても基本群の同型類は変わらない；弧状連結性から任意の 2 点を結ぶ道が存在)

- **2. 単連結空間**
  - Definition 2.3-1 (単連結空間：弧状連結かつ $\pi_1(X, x_0) = \{e\}$ となる位相空間を単連結空間という；すべての基点でのループが定値ループにホモトピックである)
  - Example 2.3-2 ($\mathbb{R}^n$、$D^n$、$S^n$（$n \geq 2$）は単連結：$\mathbb{R}^n$ と $D^n$ の単連結性は可縮性から；$S^2$ の単連結性は任意のループが北極点を避けて動かせることから（正式な証明は後の章）；$S^1$ は単連結でない（$\pi_1(S^1) \cong \mathbb{Z}$）)
  - Remark (単連結性と「穴」：直感的に、単連結空間には「1 次元の穴」がない；$\mathbb{R}^2 \setminus \{0\}$ は穴があり $\pi_1 \cong \mathbb{Z}$；$\mathbb{R}^3 \setminus \{0\} \simeq S^2$ は穴がなく単連結だが「2 次元の穴」がある（高次ホモトピー群で検出）)

---

## Chapter 3: 円周の基本群と応用
**テーマ:** 最初の計算例と重要な応用

### §3.1 円周の基本群
**内容:** 被覆空間を用いた円周の基本群の計算

- **1. 被覆写像の予告と持ち上げ**
  - Definition 3.1-1 (指数写像：$p : \mathbb{R} \to S^1$、$p(t) = e^{2\pi i t}$；これは被覆写像（詳細は Chapter 6）；$\mathbb{R}$ は $S^1$ の「展開図」に相当する)
  - Lemma 3.1-1 (ループの持ち上げ：$\gamma : [0,1] \to S^1$ をループ（$\gamma(0) = \gamma(1) = 1$）とすると、$\tilde\gamma : [0,1] \to \mathbb{R}$ で $p \circ \tilde\gamma = \gamma$、$\tilde\gamma(0) = 0$ となるものが一意に存在する；$\tilde\gamma(1) \in \mathbb{Z}$ が巻き数（ワインディングナンバー）)
  - Proof (連続写像の持ち上げの存在と一意性は §6.2 で厳密に示す；ここでは直感的に $\gamma$ を「巻き戻す」と $\mathbb{R}$ 上の道が定まり、一意性は $\tilde\gamma(0)$ の固定から従うことを確認)
  - Example 3.1-1 ($\gamma_n(t) = e^{2\pi int}$（$n$ 回転ループ）の持ち上げ：$\tilde\gamma_n(t) = nt$；$\tilde\gamma_n(1) = n \in \mathbb{Z}$；巻き数が $n$ に対応)

- **2. 基本群の計算**
  - Theorem 3.1-1 ($\pi_1(S^1, 1) \cong \mathbb{Z}$：写像 $\Phi : \pi_1(S^1) \to \mathbb{Z}$、$\Phi([\gamma]) = \tilde\gamma(1)$（巻き数）は群同型)
  - Proof (well-definedness：$\gamma \simeq_p \gamma'$ ならばホモトピーを持ち上げると $\tilde\gamma(1) = \tilde\gamma'(1)$；準同型性：$\widetilde{\gamma * \delta}(1) = \tilde\gamma(1) + \tilde\delta(1)$（$\mathbb{R}$ の加法）；単射性：$\tilde\gamma(1) = 0$ ならば持ち上げが $0$ に帰着するホモトピーが存在；全射性：各 $n \in \mathbb{Z}$ に対して $\gamma_n$ が巻き数 $n$ をもつ)
  - Example 3.1-2 ($n$ 回転ループの基本群での積：$[\gamma_m][\gamma_n] = [\gamma_{m+n}]$；$\gamma_m * \gamma_n$ の持ち上げは $\tilde\gamma_m + \tilde\gamma_n(\cdot - 1)|_{[1/2,1]}$ で終値は $m+n$；$\mathbb{Z}$ の加法と一致)

### §3.2 代数学の基本定理
**内容:** 基本群を用いた代数学の基本定理の証明

- **1. 証明の概略**
  - Theorem 3.2-1 (代数学の基本定理：次数 $n \geq 1$ の複素係数多項式 $p(z)$ は $\mathbb{C}$ に少なくとも一つの根を持つ)
  - Proof ($p$ が根をもたないと仮定；$|p(z)| > 0$（全 $z \in \mathbb{C}$）とし $f_r(t) = p(re^{2\pi it})/|p(re^{2\pi it})|$（$t \in [0,1]$）を定めると $f_r : [0,1] \to S^1$ はループ；$r = 0$ のとき $f_0 \equiv p(0)/|p(0)|$（定値）；$r \to \infty$ のとき $f_r \simeq g_r$（$g_r(t) = e^{2\pi i n t}$、$n$ 回転）；連続的に $r$ を動かすとホモトピー類が変化するが基本群 $\mathbb{Z}$ 内で $0$ から $n$ に跳ぶことは不可能—矛盾)
  - Example 3.2-1 ($p(z) = z^2 + 1$ の根の存在：代数学の基本定理より $z = \pm i$ が存在；$|p(re^{2\pi it})|$ が $r$ で 0 にならないと仮定すると巻き数が $r=0$ で $0$、$r \to \infty$ で $2$ になるが連続変化できない)

- **2. 定理の位相的意味**
  - Remark (位相的証明の核心：$\mathbb{C}$ から $\{0\}$ を除いても $S^1$ の基本群 $\mathbb{Z}$ に「段差」があるため、多項式が定値写像（次数 $0$）から $n$ 回転写像（次数 $n$）に連続変形できない；この論法はレトラクションの非存在定理（§3.3）と本質的に同じ)

### §3.3 ブラウワーの不動点定理
**内容:** レトラクションの非存在から導かれる不動点定理

- **1. 鍵となる補題**
  - Lemma 3.3-1 ($D^2$ から $S^1$ へのレトラクションは存在しない：連続写像 $r : D^2 \to S^1$ で $r|_{S^1} = \mathrm{id}_{S^1}$ となるものは存在しない)
  - Proof ($r$ が存在するとする；包含写像 $\iota : S^1 \hookrightarrow D^2$ と $r$ の合成 $r \circ \iota = \mathrm{id}_{S^1}$ より基本群の準同型 $r_* \circ \iota_* = \mathrm{id}$；$\iota_* : \pi_1(S^1) \to \pi_1(D^2)$ は $\mathbb{Z} \to \{e\}$（$D^2$ は可縮）で零写像；$r_* \circ \iota_* = 0 \neq \mathrm{id}_\mathbb{Z}$—矛盾)

- **2. ブラウワーの不動点定理**
  - Theorem 3.3-1 (ブラウワーの不動点定理（2 次元）：連続写像 $f : D^2 \to D^2$ は少なくとも一つの不動点（$f(x) = x$）を持つ)
  - Proof ($f$ が不動点をもたないとする；各 $x \in D^2$ に対して $f(x) \neq x$ だから $f(x)$ から $x$ へ向かう半直線と $S^1$ の交点 $r(x)$ を定める；$r : D^2 \to S^1$ は連続レトラクションになる（$x \in S^1$ のとき $r(x) = x$）—Lemma 3.3-1 に矛盾)
  - Example 3.3-1 (ブラウワーの定理の具体例：コーヒーをかき混ぜた後、液面のどこかは元の位置に戻っている（$D^2 \to D^2$ の連続写像として解釈）；地図をその地図の上に置くと必ず重なる点がある（縮小写像として解釈）)
  - Remark ($n$ 次元への拡張：$D^n \to D^n$ の連続写像に不動点が存在することは $n$ 次元ホモロジーを用いた証明で示せる（代数的トポロジー 4-8）；2 次元は基本群だけで証明できる特殊性がある)

### §3.4 ボルスク・ウラムの定理
**内容:** 球面からユークリッド空間への連続写像に関する定理

- **1. ボルスク・ウラムの定理**
  - Theorem 3.4-1 (ボルスク・ウラムの定理（2 次元）：連続写像 $f : S^2 \to \mathbb{R}^2$ に対して $f(x) = f(-x)$ となる点 $x \in S^2$ が存在する；すなわち対蹠点に同じ値をとる点が存在する)
  - Proof ($f(x) \neq f(-x)$ とすると $g(x) = (f(x)-f(-x))/\|f(x)-f(-x)\|$ が $S^2 \to S^1$ の連続写像で $g(-x) = -g(x)$；$S^2$ の赤道 $S^1$ に制限すると $g|_{S^1} : S^1 \to S^1$ は奇写像（$g(-x) = -g(x)$）；奇写像の次数は奇数だから $\neq 0$；一方 $g|_{S^1}$ は $D^2$（北半球）上の写像の境界への制限で $\pi_1$ の議論から次数 $0$—矛盾)
  - Example 3.4-1 (気象への応用：地球上には常に気温と気圧が対蹠点と等しい点が存在する（地球を $S^2$、気温・気圧の対 $\mathbb{R}^2$ として定理を適用）；これはボルスク・ウラムの直接の応用)

- **2. ハム・サンドイッチ定理（応用）**
  - Theorem 3.4-2 (ハム・サンドイッチ定理：$\mathbb{R}^n$ の有界な $n$ 個の可測集合は、一枚の超平面で同時に二等分できる；$n=2$ のとき二切れのパンはまとめて一刀両断できる)
  - Proof ($n = 2$ の場合：各方向 $v \in S^1$ に対して「$v$ 方向に垂直な直線で両集合を二等分する高さ」を $f_1(v), f_2(v)$ と定めると $f : S^1 \to \mathbb{R}^2$ が奇写像；ボルスク・ウラムより $f(v_0) = f(-v_0)$ となる $v_0$ が存在し、両集合を同時に二等分する直線が得られる)
  - Remark (ボルスク・ウラムの定理の意義：この定理は高次元のホモロジー群や写像次数理論（代数的トポロジー 4-8）でさらに一般化される；2次元の証明は基本群の言語だけで完結する)

---

## Chapter 4: ファン・カンペンの定理
**テーマ:** 空間の貼り合わせと群

### §4.1 群の自由積
**内容:** 群の自由積と融合積（アマルガム積）の概念

- **1. 自由積の定義**
  - Definition 4.1-1 (自由積：群 $G, H$ の自由積 $G * H$ は $G$ と $H$ の元を交互に並べた語（積）全体；関係は各群内の積のみ；$G * H = \langle g \in G,\, h \in H \mid \text{$G$ の関係},\, \text{$H$ の関係} \rangle$)
  - Example 4.1-1 ($\mathbb{Z} * \mathbb{Z}$：生成元 $a, b$ をもつ自由群 $F_2$；$a^2 b^{-1} a b^3$ などの既約語が元；$G * H$ の元は $g_1 h_1 g_2 h_2 \cdots$（$g_i \in G\setminus\{e\}$、$h_i \in H\setminus\{e\}$）の形の既約語；$\mathbb{Z}/2 * \mathbb{Z}/3$ は無限群になることを確認)
  - Remark (自由積の普遍性：$G * H$ は群への準同型 $f : G \to K$、$g : H \to K$ の組に対してそれらを合わせた唯一の準同型 $G * H \to K$ が存在するという普遍性をもつ；圏論（3-15）では余積に相当する)

- **2. 融合積（アマルガム積）**
  - Definition 4.1-2 (融合積：群の包含写像 $\phi : K \to G$、$\psi : K \to H$ があるとき、融合積 $G *_K H = (G * H) / N$；$N$ は $\phi(k) = \psi(k)$（すべての $k \in K$）で生成される正規部分群；$K$ を共通部分として $G$ と $H$ を貼り合わせた群)
  - Example 4.1-2 ($K = \{e\}$（自明群）のとき $G *_{\{e\}} H = G * H$（自由積に帰着）；$G = H = \mathbb{Z}$、$K = \mathbb{Z}$、$\phi(n) = 2n$、$\psi(n) = 3n$ のとき $G *_K H = \langle a, b \mid a^2 = b^3 \rangle$（トレフォイル結び目群）)

### §4.2 ファン・カンペンの定理
**内容:** 開被覆から空間の基本群を計算する定理

- **1. ファン・カンペンの定理の主張**
  - Theorem 4.2-1 (ファン・カンペンの定理：$X = U \cup V$（$U, V$ は開集合）とし、$U, V, U \cap V$ がすべて弧状連結かつ $x_0 \in U \cap V$ とする；このとき $\pi_1(X, x_0) \cong \pi_1(U, x_0) *_{\pi_1(U\cap V, x_0)} \pi_1(V, x_0)$（融合積）)
  - Proof (包含写像による準同型 $i_U : \pi_1(U\cap V) \to \pi_1(U)$、$i_V : \pi_1(U\cap V) \to \pi_1(V)$ と $j_U : \pi_1(U) \to \pi_1(X)$、$j_V : \pi_1(V) \to \pi_1(X)$ を用いて融合積への全射を構成；全射性は $X$ の任意のループを $U \cap V$ を使って $U$ 内と $V$ 内の部分に分解することで示す；単射性は $U$ と $V$ の双方で定値ループにホモトピックなループが $X$ でも定値ループにホモトピックであることを逆向きのホモトピー分解で確認する)
  - Example 4.2-1 ($S^2$ の基本群（$U, V$ を北極・南極付近の開集合に取る）：$U \simeq V \simeq D^2$（可縮）なので $\pi_1(U) = \pi_1(V) = \{e\}$；$U \cap V \simeq S^1$（赤道帯）だが $i_U, i_V$ が自明化するので融合積は自明；$\pi_1(S^2) = \{e\}$)

- **2. ファン・カンペンの定理の適用**
  - Example 4.2-2 (円周の基本群を再計算：$U = S^1 \setminus \{-1\}$、$V = S^1 \setminus \{1\}$（各々 $\simeq \mathbb{R}$、可縮）；$U \cap V = S^1 \setminus \{1, -1\}$（2 成分、各々可縮）；片方の成分の包含 $\mathbb{Z} \to \{e\} *_{\{e\}} \{e\} = \{e\}$ ではなく、別の分割が必要；$X = [0,1]/(0\sim1)$（$U, V$ を半開区間に分割）として $\pi_1 \cong \mathbb{Z}$ を導く)
  - Remark (ファン・カンペンの定理の有用性：$CW$ 複体や曲面の基本群の計算に強力；$U \cap V$ が単連結であれば融合積が自由積になり計算が特に簡単になる)

### §4.3 セルの接着
**内容:** CW 複体の構成と基本群の計算手法

- **1. CW 複体の構成**
  - Definition 4.3-1 ($CW$ 複体：$0$-骨格（点の集合）から始め、$n$-セル（$D^n$ の内部のコピー）を接着写像 $\phi : S^{n-1} \to X^{(n-1)}$（$(n-1)$ 骨格への連続写像）で次々と貼り付けて構成した位相空間；$X^{(n)}$ を $n$ 骨格という)
  - Example 4.3-1 ($S^n$ の $CW$ 複体構造：0-セルを 1 つ（南極点）と $n$-セルを 1 つ接着写像を定値写像として付ける；$S^2 = e^0 \cup e^2$ が最も単純な構造；$T^2$（トーラス）は $e^0 \cup e^1 \cup e^1 \cup e^2$ の構造をもつ)

- **2. $CW$ 複体の基本群**
  - Theorem 4.3-1 ($CW$ 複体の基本群の計算法：$2$ 次元 $CW$ 複体 $X = e^0 \cup_\alpha e^1_\alpha \cup_\beta e^2_\beta$ の基本群は自由群（$1$-セルが生成元）に $2$-セルの接着写像から来る関係式を加えた群として表示される；$\pi_1(X) = \langle \text{$1$-セル} \mid \text{$2$-セルの接着写像から来る語} \rangle$)
  - Proof (ファン・カンペンの定理を帰納的に適用する；$1$-骨格は木（基本群が $\{e\}$）と余分な $1$-セルで構成される自由群；各 $2$-セルの接着が関係を追加する；$2$-セルを貼るたびにファン・カンペンを適用すると融合積が計算される)
  - Example 4.3-2 (トーラス $T^2$ の基本群：$1$-セル $a, b$（経線・緯線）と $2$-セルの接着写像 $aba^{-1}b^{-1}$（正方形の辺の貼り合わせ）；$\pi_1(T^2) = \langle a, b \mid aba^{-1}b^{-1} = e \rangle \cong \mathbb{Z} \times \mathbb{Z}$（可換群）)

---

## Chapter 5: 曲面の基本群
**テーマ:** ファン・カンペンの定理の応用

### §5.1 球面と各次元
**内容:** 高次元球面の単連結性

- **1. 球面の基本群**
  - Theorem 5.1-1 ($S^n$（$n \geq 2$）は単連結：$\pi_1(S^n) = \{e\}$)
  - Proof ($U = S^n \setminus \{N\}$（北極を除く）、$V = S^n \setminus \{S\}$（南極を除く）と分割；$U \simeq V \simeq \mathbb{R}^n$（可縮）；$U \cap V \simeq S^{n-1} \times \mathbb{R} \simeq S^{n-1}$；$n \geq 2$ のとき $U \cap V$ が弧状連結なのでファン・カンペン適用可能；$\pi_1(X) = \{e\} *_{\pi_1(S^{n-1})} \{e\} = \{e\}$（帰納法：$\pi_1(S^1) = \mathbb{Z}$ として $n=2$ で $S^1$ が弧状連結なので成立、$n \geq 3$ で帰納完成）)
  - Example 5.1-1 ($\pi_1(S^2) = \{e\}$ の直感的意味：$S^2$ 上の任意のループは球面上をずらして「縮められる」；$S^1$ 上のループは穴（中心の除いた点）のせいで縮められないことと対比)

- **2. 次元による違い**
  - Remark ($S^1$ と $S^n$（$n \geq 2$）の違い：$S^1$ は基本群で「穴」を検出できる；$S^2$ 以上は基本群では区別できない（$\pi_1 = \{e\}$）が、より高次のホモトピー群 $\pi_n(S^n) \cong \mathbb{Z}$ で区別できる；代数的トポロジー（4-8）への自然な動機)
  - Example 5.1-2 ($\mathbb{R}^3 \setminus \{0\} \simeq S^2$ の基本群：$\pi_1(\mathbb{R}^3\setminus\{0\}) = \{e\}$；点を除いた $3$ 次元空間では任意のループが縮められる；$\mathbb{R}^2\setminus\{0\} \simeq S^1$ との対比（$\pi_1 = \mathbb{Z}$）)

### §5.2 トーラスと射影空間
**内容:** 貼り合わせから求めるトーラス等の基本群

- **1. トーラスの基本群**
  - Example 5.2-1 (トーラス $T^2 = S^1 \times S^1$ の基本群：$\pi_1(T^2) \cong \pi_1(S^1) \times \pi_1(S^1) \cong \mathbb{Z} \times \mathbb{Z}$；積空間の基本群は直積；$a$ を経線ループ・$b$ を緯線ループとして $ab = ba$（可換性）を $T^2$ 上での変形で確認；§4.3 の $CW$ 複体計算とも一致)
  - Example 5.2-2 (クラインの壺 $K$ の基本群：$K$ は正方形の辺を $ab a b^{-1}$ と貼り合わせた面；$\pi_1(K) = \langle a, b \mid abab^{-1} = e \rangle$；$a^2 = b^{-1}a^{-1}ba = $ … と計算して可換でない群になることを確認)

- **2. 実射影空間の基本群**
  - Theorem 5.2-1 ($\pi_1(\mathbb{R}P^2) \cong \mathbb{Z}/2\mathbb{Z}$：実射影平面 $\mathbb{R}P^2 = S^2/\{\pm 1\}$（対蹠点を同一視）の基本群は位数 $2$)
  - Proof ($\mathbb{R}P^2$ の $CW$ 複体構造：$e^0 \cup e^1 \cup e^2$（$1$-セルが $a$、$2$-セルの接着写像が $a^2$）；$\pi_1 = \langle a \mid a^2 = e \rangle \cong \mathbb{Z}/2\mathbb{Z}$)
  - Example 5.2-3 ($\mathbb{R}P^n$（$n \geq 2$）の基本群：$\pi_1(\mathbb{R}P^n) \cong \mathbb{Z}/2\mathbb{Z}$；$S^n$ が $\mathbb{R}P^n$ の 2 重被覆であり Chapter 7 の被覆理論から一般的に説明できる)

### §5.3 閉曲面の分類
**内容:** 種数付き曲面の基本群と可換化群

- **1. 閉曲面の分類定理**
  - Theorem 5.3-1 (閉曲面の分類：向き付け可能な閉曲面は種数 $g$ のトーラス $\Sigma_g$ に分類される；$\Sigma_0 = S^2$、$\Sigma_1 = T^2$、$\Sigma_g$（$g \geq 2$）は $g$ 個のトーラスの連結和；向き付け不可能な閉曲面は $\mathbb{R}P^2$ の連結和に分類される)
  - Proof (多角形の辺の貼り合わせによる標準形への変換；オイラー標数 $\chi(\Sigma_g) = 2-2g$ が位相不変量として機能；証明の細部は代数的トポロジー（4-8）で扱う)

- **2. 種数 $g$ の曲面の基本群**
  - Theorem 5.3-2 (種数 $g$ 曲面の基本群：$\pi_1(\Sigma_g) = \langle a_1, b_1, \ldots, a_g, b_g \mid [a_1,b_1]\cdots[a_g,b_g] = e \rangle$（$[a,b] = aba^{-1}b^{-1}$ は交換子）；$g = 1$ で $\pi_1 \cong \mathbb{Z}^2$（§4.3 の結果と一致）)
  - Proof ($\Sigma_g$ の $CW$ 複体構造は $4g$ 角形の標準貼り合わせ；$1$-セルが $a_1, b_1, \ldots, a_g, b_g$ の $2g$ 個；$2$-セルの接着写像が交換子の積 $[a_1,b_1]\cdots[a_g,b_g]$；ファン・カンペンの帰納的適用で群表示を導く)
  - Example 5.3-1 (種数 $2$ 曲面の基本群：$\pi_1(\Sigma_2) = \langle a_1, b_1, a_2, b_2 \mid a_1 b_1 a_1^{-1} b_1^{-1} a_2 b_2 a_2^{-1} b_2^{-1} = e \rangle$；可換化すると $\mathbb{Z}^4$（自由アーベル群）；$H_1(\Sigma_g) \cong \mathbb{Z}^{2g}$ というホモロジー群の先取り)

### §5.4 結び目群（概要）
**内容:** 結び目の補空間から得られる基本群の概念

- **1. 結び目群の定義**
  - Definition 5.4-1 (結び目：$\mathbb{R}^3$（または $S^3$）への $S^1$ の滑らかな埋め込み $K : S^1 \hookrightarrow S^3$；自己交差のない閉じた曲線；自明な結び目（unknot）と結び目 $K$ が「外せるかどうか」が基本問題)
  - Definition 5.4-2 (結び目群：結び目 $K$ の補空間 $\pi_1(S^3 \setminus K)$ を結び目群という；結び目の位相型の不変量)
  - Example 5.4-1 (自明な結び目の結び目群：$S^3 \setminus S^1 \simeq \mathbb{R}^2 \setminus \{0\} \simeq S^1$ より $\pi_1(S^3 \setminus \mathrm{unknot}) \cong \mathbb{Z}$)
  - Example 5.4-2 (トレフォイル結び目の結び目群：ファン・カンペンの定理の適用（ザイフェルト-ファン・カンペン）により $\pi_1(S^3 \setminus \mathrm{trefoil}) = \langle a, b \mid a^2 = b^3 \rangle$；これは §4.1 の融合積 $\mathbb{Z} *_\mathbb{Z} \mathbb{Z}$ に一致；自明な結び目群と異なるから解けない結び目であることが分かる)

- **2. 結び目群の限界と展望**
  - Remark (結び目群だけでは結び目を完全に分類できない：鏡像（トレフォイルとその鏡像）は結び目群が同型だが異なる結び目；より細かい不変量（ジョーンズ多項式等）が必要；低次元位相幾何学（5-18）への接続)

---

## Chapter 6: 被覆空間
**テーマ:** 被覆写像の理論

### §6.1 被覆写像の定義
**内容:** 被覆空間と局所同相写像の定義

- **1. 被覆写像の定義と例**
  - Definition 6.1-1 (被覆写像：連続写像 $p : \tilde{X} \to X$ が被覆写像であるとは、任意の $x \in X$ に対して $x$ を含む開集合 $U$ で $p^{-1}(U) = \bigsqcup_\alpha V_\alpha$（互いに素な開集合の和）かつ各 $V_\alpha$ 上で $p|_{V_\alpha} : V_\alpha \to U$ が同相になるものが存在すること；$\tilde{X}$ を被覆空間、$U$ を均等被覆近傍、$V_\alpha$ をシートという)
  - Example 6.1-1 ($p : \mathbb{R} \to S^1$、$p(t) = e^{2\pi it}$ は被覆写像：$U = S^1 \setminus \{-1\}$（開弧）に対して $p^{-1}(U) = \bigsqcup_{n \in \mathbb{Z}} (n-1/2, n+1/2)$；各開区間上で $p$ は同相；$S^1$ の各点の逆像は $\mathbb{Z}$ 個のシートをなす)
  - Example 6.1-2 ($p_n : S^1 \to S^1$、$p_n(z) = z^n$ は $n$-重被覆写像：$n = 2$ のとき $p^{-1}(1) = \{1, -1\}$（2 枚のシート）；各点の近傍で局所同相を確認)

- **2. 被覆写像の基本性質**
  - Proposition 6.1-1 (被覆写像は局所同相：$p : \tilde{X} \to X$ が被覆写像ならば各点の周りで $p$ は同相写像；特に $p$ は開写像かつ連続写像)
  - Proof (各シート $V_\alpha$ 上で $p|_{V_\alpha}$ が同相だから局所的に同相；開写像性：$\tilde{U} \subset \tilde{X}$ が開集合なら $p(\tilde{U}) = \bigcup_\alpha p(\tilde{U} \cap V_\alpha)$ は各 $p(\tilde{U} \cap V_\alpha)$ が $X$ で開集合の和)
  - Remark (被覆写像と位相不変量：被覆写像の「枚数」（シートの個数）は被覆空間の位相型に関係する；Chapter 7 ではこれが基本群の部分群の指数と対応することを示す)

### §6.2 持ち上げ性質
**内容:** 道やホモトピーの持ち上げの一意性と存在定理

- **1. 道の持ち上げ定理**
  - Theorem 6.2-1 (道の持ち上げ定理：$p : \tilde{X} \to X$ を被覆写像、$\gamma : [0,1] \to X$ を道、$\tilde{x}_0 \in p^{-1}(\gamma(0))$ とする；このとき $\tilde\gamma(0) = \tilde{x}_0$ かつ $p \circ \tilde\gamma = \gamma$ となる道 $\tilde\gamma : [0,1] \to \tilde{X}$ が一意に存在する)
  - Proof (存在：$[0,1]$ をコンパクトなので有限個の小区間 $[t_i, t_{i+1}]$ に分割して各区間の像が均等被覆近傍に含まれるようにする；各区間上でシートを選んで持ち上げを構成；一意性：二つの持ち上げの一致集合が閉かつ開なので連結性から全体に一致)
  - Example 6.2-1 ($\mathbb{R} \to S^1$ の持ち上げの計算：$\gamma(t) = e^{2\pi i t}$（$S^1$ の一周）を $\tilde{x}_0 = 0$ から持ち上げると $\tilde\gamma(t) = t$（$\tilde\gamma(1) = 1$）；$\tilde{x}_0 = 2$ から持ち上げると $\tilde\gamma(t) = t+2$（$\tilde\gamma(1) = 3$）；始点で異なるシートを選ぶと終点も異なる)

- **2. ホモトピーの持ち上げ定理**
  - Theorem 6.2-2 (ホモトピーの持ち上げ定理：$p : \tilde{X} \to X$ を被覆写像、$H : [0,1]^2 \to X$ を道ホモトピー、$\tilde{H}(0,0) = \tilde{x}_0$ とすると一意な持ち上げ $\tilde{H} : [0,1]^2 \to \tilde{X}$ が存在する；道ホモトピックな道の持ち上げは道ホモトピック)
  - Proof (道の持ち上げ定理を各 $s$ で適用して $\tilde{H}(\cdot, s)$ を構成；$s$ による連続性を均等被覆近傍を利用した局所一意性の議論で確認；境界条件の固定はホモトピーの定義から自動的に保たれる)
  - Corollary 6.2-1 (持ち上げの道ホモトピー不変性：$\tilde{x}_0$ と持ち上げの終点 $\tilde\gamma(1)$ の対応は $[\gamma] \in \pi_1(X, x_0)$ のホモトピー類のみに依存する；§3.1 Theorem 3.1-1 の証明の基礎)
  - Proof (Theorem 6.2-2 を直接適用；$\gamma \simeq_p \gamma'$ ならば持ち上げもホモトピックで、特に終点が一致する)

### §6.3 一般の持ち上げ判定条件
**内容:** 写像を被覆空間へ持ち上げるための基本群の条件

- **1. 持ち上げ判定条件**
  - Theorem 6.3-1 (持ち上げ定理：$p : \tilde{X} \to X$ を被覆写像、$Y$ を弧状連結かつ局所弧状連結な空間、$f : Y \to X$ を連続写像、$\tilde{x}_0 \in p^{-1}(f(y_0))$ とする；$\tilde{f}(y_0) = \tilde{x}_0$ となる連続写像 $\tilde{f} : Y \to \tilde{X}$（$p \circ \tilde{f} = f$）が存在する $\Leftrightarrow$ $f_*(\pi_1(Y, y_0)) \subset p_*(\pi_1(\tilde{X}, \tilde{x}_0))$)
  - Proof ($\Rightarrow$：持ち上げ $\tilde{f}$ があれば $f_* = p_* \circ \tilde{f}_*$ より $f_*(\pi_1(Y)) = p_*(\tilde{f}_*(\pi_1(Y))) \subset p_*(\pi_1(\tilde{X}))$；$\Leftarrow$：$y \in Y$ と $y_0$ から $y$ への道 $\sigma$ を選び $\widetilde{f\circ\sigma}(1)$ で $\tilde{f}(y)$ を定める；条件より well-defined かつ連続になることを示す)
  - Example 6.3-1 (単連結空間の写像は必ず持ち上がる：$Y$ が単連結なら $\pi_1(Y) = \{e\}$ で条件は自動的に成立；$S^2 \to S^1$ の連続写像はすべて $\mathbb{R}$ に持ち上がる（$S^2$ は単連結）)

- **2. 持ち上げの応用**
  - Example 6.3-2 ($z^n : S^1 \to S^1$ の $\mathbb{R} \to S^1$ への持ち上げ：$p_* : \pi_1(\mathbb{R}) = \{e\} \to \pi_1(S^1) = \mathbb{Z}$；$(z^n)_*(\pi_1(S^1)) = n\mathbb{Z} \not\subset \{0\} = p_*(\pi_1(\mathbb{R}))$；よって $z^n : S^1 \to S^1$ は $\mathbb{R}$ へ持ち上がらない；一方 $S^2 \to S^1$ は常に持ち上がる（$\pi_1(S^2) = \{e\}$ より）)
  - Remark (被覆空間と群論の対応：Theorem 6.3-1 は被覆空間の性質が基本群の部分群で記述できることを示す；Chapter 7 ではこの対応がガロア理論と類比的な1対1対応（ガロア対応）になることを示す)

---

## Chapter 7: 被覆空間の分類
**テーマ:** ガロア対応

### §7.1 被覆変換群
**内容:** 被覆変換全体のなす群構造

- **1. 被覆変換の定義と群構造**
  - Definition 7.1-1 (被覆変換：被覆写像 $p : \tilde{X} \to X$ の被覆変換（デック変換）とは同相写像 $\varphi : \tilde{X} \to \tilde{X}$ で $p \circ \varphi = p$ を満たすもの；被覆変換全体 $\mathrm{Deck}(p) = \mathrm{Aut}(\tilde{X}/X)$ は合成を演算とする群をなす)
  - Example 7.1-1 ($p : \mathbb{R} \to S^1$ の被覆変換群：$\varphi_n : \mathbb{R} \to \mathbb{R}$、$\varphi_n(t) = t + n$（$n \in \mathbb{Z}$）が被覆変換；$\mathrm{Deck}(p) \cong \mathbb{Z}$；$p(\varphi_n(t)) = p(t+n) = e^{2\pi i(t+n)} = e^{2\pi it} = p(t)$ を確認)
  - Proposition 7.1-1 (被覆変換の一意性：弧状連結かつ局所弧状連結な $\tilde{X}$ の被覆変換 $\varphi$ は一点 $\tilde{x}_0$ での値 $\varphi(\tilde{x}_0)$ で一意に決まる；$\mathrm{Deck}(p)$ は $p^{-1}(x_0)$ に自由に作用する)
  - Proof ($\varphi$ と $\mathrm{id}$ が $\tilde{x}_0$ で一致すれば、$\varphi$ が $\mathrm{id}$ に等しい（持ち上げの一意性（Theorem 6.2-1 の類比）から証明される））

- **2. 正規被覆と被覆変換群**
  - Definition 7.1-2 (正規被覆（Galois 被覆）：被覆写像 $p : \tilde{X} \to X$ が正規被覆であるとは $p_*(\pi_1(\tilde{X}))$ が $\pi_1(X)$ の正規部分群であること；同値に $\mathrm{Deck}(p)$ が $p^{-1}(x_0)$ に推移的に作用すること)
  - Example 7.1-2 ($p : \mathbb{R} \to S^1$ は正規被覆：$\pi_1(\mathbb{R}) = \{e\} \trianglelefteq \mathbb{Z} = \pi_1(S^1)$；$\mathrm{Deck}(p) \cong \mathbb{Z} \cong \pi_1(S^1)/\{e\}$；正規被覆の場合 $\mathrm{Deck}(p) \cong \pi_1(X)/p_*(\pi_1(\tilde{X}))$)

### §7.2 普遍被覆空間
**内容:** 単連結被覆空間の存在と一意性

- **1. 普遍被覆空間の定義と存在**
  - Definition 7.2-1 (普遍被覆空間：単連結な被覆空間 $\tilde{X}$ を $X$ の普遍被覆空間という；$\pi_1(\tilde{X}) = \{e\}$ なので任意の被覆空間を「覆う」最大の被覆空間)
  - Theorem 7.2-1 (普遍被覆空間の存在：弧状連結・局所弧状連結・半局所単連結な空間 $X$ には普遍被覆空間 $\tilde{X}$ が存在する)
  - Proof ($\tilde{X}$ を $x_0$ から出発する道のホモトピー類全体 $\{[\gamma] \mid \gamma(0) = x_0\}$ として位相を入れる（コンパクト開位相の類比）；$p([\gamma]) = \gamma(1)$ が被覆写像になることを確認；$\tilde{X}$ の単連結性は道空間の構成から従う)
  - Example 7.2-1 ($S^1$ の普遍被覆空間：$\mathbb{R}$（実数直線）；$\tilde{X}$ の構成として $x_0 = 1$ からの道のクラス全体を考えると $e^{2\pi i t}$（$t \in [0,1]$）などの道のクラスが $\mathbb{R}$ の元 $t$ に対応；$\pi_1(\mathbb{R}) = \{e\}$ で普遍被覆)

- **2. 普遍被覆空間の一意性**
  - Theorem 7.2-2 (普遍被覆空間の一意性：$X$ の任意の 2 つの普遍被覆空間 $\tilde{X}, \tilde{X}'$ は $X$ 上の同型（繊維保存同相）の意味で一意；$\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X, x_0)$)
  - Proof (一意性：Theorem 6.3-1 で $Y = \tilde{X}$、$f = p$、$\tilde{X}' = $ 被覆空間とすると $\pi_1(\tilde{X}) = \{e\}$ より持ち上げが存在；逆も同様；逆写像も同じ手続きで構成；$\mathrm{Deck} \cong \pi_1$：$\pi_1(X)$ の各元を被覆変換と同定する写像が同型であることをシートの作用で確認)
  - Example 7.2-2 ($\mathrm{Deck}(\mathbb{R}/S^1) \cong \mathbb{Z} \cong \pi_1(S^1)$：変換 $t \mapsto t+n$ が $\pi_1(S^1)$ の生成元 $[\gamma_1]$（一周ループ）に対応；$[\gamma_n]$（$n$ 周ループ）が変換 $t \mapsto t+n$ に対応することを確認)

### §7.3 被覆空間の基本定理
**内容:** 部分群と被覆空間のガロア対応定理

- **1. ガロア対応定理の主張**
  - Theorem 7.3-1 (被覆空間の分類定理（ガロア対応）：弧状連結・局所弧状連結・半局所単連結な空間 $X$ に対して、対応 $(\tilde{X}, \tilde{x}_0) \mapsto p_*(\pi_1(\tilde{X}, \tilde{x}_0))$ は $X$ 上の（基点付き同型類の）被覆空間の集合と $\pi_1(X, x_0)$ の部分群の集合の間の 1 対 1 対応を与える；対応は包含を逆転させる反順序同型）
  - Proof (全射性：部分群 $H \leq \pi_1(X, x_0)$ に対して普遍被覆 $\tilde{X}$ 上の $H$-同値関係（$[\gamma] \sim [\delta]$ iff $[\delta^{-1}\gamma] \in H$）で割ると対応する被覆空間が得られる；単射性：同じ部分群から構成される被覆空間は同型になることを Theorem 6.3-1 で確認；反順序：$H_1 \subset H_2$ ならば $H_1$ に対応する被覆が $H_2$ に対応する被覆を覆う）
  - Example 7.3-1 ($S^1$ の被覆空間の分類：$\pi_1(S^1) = \mathbb{Z}$ の部分群は $\{0\}$ と $n\mathbb{Z}$（$n \geq 1$）；$\{0\}$ に対応するのは $\mathbb{R}$（普遍被覆）；$n\mathbb{Z}$ に対応するのは $p_n : S^1 \to S^1$、$z \mapsto z^n$（$n$ 重被覆）；すべての $S^1$ の連結被覆がこれで分類される)

- **2. ガロア対応と正規被覆の対応**
  - Corollary 7.3-1 (正規被覆と正規部分群の対応：上のガロア対応において、被覆 $\tilde{X}$ が正規被覆 $\Leftrightarrow$ 対応する部分群 $H$ が $\pi_1(X)$ の正規部分群；このとき $\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X)/H$)
  - Proof (正規被覆の定義（Definition 7.1-2）と部分群の正規性の同値性は Theorem 7.3-1 の証明の一部；$\mathrm{Deck} \cong \pi_1/H$ は被覆変換が $H$-剰余類の入れ替えに対応することから)
  - Example 7.3-2 ($n\mathbb{Z} \trianglelefteq \mathbb{Z}$ から正規被覆：$n\mathbb{Z}$ は $\mathbb{Z}$ の正規部分群；$p_n : S^1 \to S^1$（$z \mapsto z^n$）は正規被覆；$\mathrm{Deck}(p_n) \cong \mathbb{Z}/n\mathbb{Z}$；デック変換は $z \mapsto e^{2\pi i k/n} z$（$k = 0, \ldots, n-1$）の $n$ 個の回転)
  - Remark (体論のガロア理論との類比：体の拡大と部分群の対応（3-10 Chapter 5）は、被覆空間の理論と同じ構造をもつ；「被覆変換群 $\leftrightarrow$ ガロア群」、「正規被覆 $\leftrightarrow$ ガロア拡大」という対応は代数的トポロジー（4-8）の圏論的枠組みで統一される)
