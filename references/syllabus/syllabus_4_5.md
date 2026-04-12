# 4-5: 多様体論

**前提科目:** 3-1（ベクトル解析）、3-11（多重線形代数学I）、3-12（位相空間論II）

---

## Chapter 1: 位相多様体と滑らかな多様体
**テーマ:** ハウスドルフ性・第二可算性・チャート・アトラス・C^∞構造・1の分割

### §1.1 位相多様体の定義
**内容:** ハウスドルフ性・第二可算性・局所ユークリッド性の3条件

- **1. 位相多様体の定義**
  - Definition 1.1-1 (位相多様体：位相空間 $M$ が $n$ 次元位相多様体であるとは、(i) ハウスドルフ性、(ii) 第二可算性、(iii) 各点が $\mathbb{R}^n$ の開集合と同相な近傍を持つこと（局所ユークリッド性）；この $n$ を $M$ の次元という)
  - Example 1.1-1 ($\mathbb{R}^n$ 自身は $n$ 次元位相多様体：3条件すべてが距離空間の性質から満たされることの確認)
  - Example 1.1-2 (開部分集合は位相多様体：$\mathbb{R}^n$ の開部分集合 $U$ は誘導位相により $n$ 次元位相多様体；ハウスドルフ性と第二可算性は部分空間に遺伝することの確認)

- **2. 各条件の必要性**
  - Example 1.1-3 (ハウスドルフ性の反例：2点の原点をもつ直線（原点で分岐する $\mathbb{R}$）は局所ユークリッドだがハウスドルフでないことの確認)
  - Example 1.1-4 (第二可算性の反例：非可算離散空間は各点が $\mathbb{R}^0$ と同相だが第二可算でない；第二可算性は1の分割の存在（§1.5）を保証するために必要)
  - Remark (位相空間論II（3-12）で学んだパラコンパクト性が第二可算性から従う事実は、§1.5 で直接利用される)

### §1.2 チャートとアトラス
**内容:** 座標近傍の定義、チャート間の座標変換の整合性条件

- **1. チャートの定義**
  - Definition 1.2-1 (チャート（座標近傍）：開集合 $U \subset M$ と同相写像 $\varphi : U \to \varphi(U) \subset \mathbb{R}^n$ の組 $(U, \varphi)$；$\varphi$ の成分 $x^1, \ldots, x^n$ を局所座標という)
  - Example 1.2-1 (球面 $S^2$ 上の立体射影チャート：北極を除く $U_N = S^2 \setminus \{N\}$ から $\mathbb{R}^2$ への立体射影 $\varphi_N$ の明示公式の計算)

- **2. アトラスと座標変換**
  - Definition 1.2-2 (アトラス：$M$ を被覆するチャートの族 $\{(U_\alpha, \varphi_\alpha)\}$)
  - Definition 1.2-3 (座標変換（遷移写像）：$U_\alpha \cap U_\beta \neq \emptyset$ のとき $\varphi_\beta \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)$)
  - Example 1.2-2 ($S^2$ の北極射影 $\varphi_N$ と南極射影 $\varphi_S$ の座標変換：$\varphi_S \circ \varphi_N^{-1}(u, v) = (u, v)/(u^2 + v^2)$；これが $\mathbb{R}^2 \setminus \{0\}$ 上の $C^\infty$ 写像であることの確認)
  - Remark (座標変換の滑らかさの要求が、次の §1.3 で滑らかな多様体を定義する核心となる)

### §1.3 滑らかな多様体の定義
**内容:** $C^\infty$-アトラスの整合性、極大アトラスの存在と一意性

- **1. $C^\infty$-アトラス**
  - Definition 1.3-1 ($C^\infty$-アトラス：すべての座標変換 $\varphi_\beta \circ \varphi_\alpha^{-1}$ が $C^\infty$ 級微分同相写像であるアトラス)
  - Definition 1.3-2 (2つの $C^\infty$-アトラスの整合性：合併がふたたび $C^\infty$-アトラスをなすこと)
  - Example 1.3-1 ($S^2$ の立体射影アトラス $\{(U_N, \varphi_N), (U_S, \varphi_S)\}$ が $C^\infty$-アトラスであることの確認；§1.2 で計算した座標変換が $C^\infty$ であることによる)

- **2. 極大アトラスと滑らかな構造**
  - Definition 1.3-3 (極大アトラス：整合するすべてのチャートを含む極大な $C^\infty$-アトラス；滑らかな構造（$C^\infty$-構造）とはこの極大アトラスの選択のこと)
  - Proposition 1.3-1 (任意の $C^\infty$-アトラスを含む極大アトラスが一意に存在する)
  - Proof (整合するすべてのチャートの合併をとれば極大アトラスが得られる；一意性は整合性の同値関係による)
  - Remark ($C^k$-多様体（$k < \infty$）や実解析的多様体、複素多様体も同様に定義できるが、本コースでは $C^\infty$ のみを扱う)

### §1.4 多様体の例
**内容:** 球面・トーラス・実射影空間・リー群の多様体構造

- **1. 球面とトーラス**
  - Example 1.4-1 ($n$ 次元球面 $S^n = \{x \in \mathbb{R}^{n+1} \mid \|x\| = 1\}$ の多様体構造：$2(n+1)$ 個の半球チャートによるアトラスの構成；$n = 1$ の場合に角度座標 $\theta \mapsto (\cos\theta, \sin\theta)$ との関係を確認する)
  - Example 1.4-2 ($n$ 次元トーラス $T^n = \mathbb{R}^n / \mathbb{Z}^n$ の多様体構造：商写像 $\pi : \mathbb{R}^n \to T^n$ の局所切断によるチャートの構成；$T^2$ の場合に2つの角度座標 $(\theta_1, \theta_2)$ で記述する)

- **2. 実射影空間とリー群**
  - Example 1.4-3 (実射影空間 $\mathbb{R}P^n$ の多様体構造：斉次座標 $[x_0 : \cdots : x_n]$ と $n+1$ 個の標準チャート $U_i = \{x_i \neq 0\}$ の定義；$\mathbb{R}P^1 \cong S^1$ の確認)
  - Example 1.4-4 (一般線形群 $GL_n(\mathbb{R}) = \{A \in M_n(\mathbb{R}) \mid \det A \neq 0\}$ の多様体構造：$M_n(\mathbb{R}) \cong \mathbb{R}^{n^2}$ の開集合としての多様体構造；$\det$ の連続性からの開性の確認)
  - Remark ($GL_n(\mathbb{R})$ は群構造と多様体構造が両立するリー群の基本例であり、詳細はリー群とリー代数（5-12）で扱う)

### §1.5 1の分割の存在定理
**内容:** パラコンパクト性（位相空間論II（3-12）の結果）を用いた滑らかな1の分割の構成、大域的構成への応用の概観

- **1. 滑らかな1の分割の構成**
  - Definition 1.5-1 (1の分割：開被覆 $\{U_\alpha\}$ に従属する1の分割とは、(i) 各 $\rho_\alpha : M \to [0,1]$ が $C^\infty$、(ii) $\mathrm{supp}(\rho_\alpha) \subset U_\alpha$、(iii) 局所有限性、(iv) $\sum_\alpha \rho_\alpha(p) = 1$（$\forall p \in M$）を満たす関数族)
  - Lemma 1.5-1 (バンプ関数の存在：$\mathbb{R}^n$ 上の任意のコンパクト集合 $K$ と開近傍 $U \supset K$ に対して、$K$ 上で1、$U$ の外で0となる $C^\infty$ 関数が存在する)
  - Proof ($e^{-1/t}$（$t > 0$）と $0$（$t \leq 0$）で定義される関数を組み合わせ、適切な台をもつバンプ関数を構成する)
  - Theorem 1.5-1 (滑らかな多様体の任意の開被覆に従属する $C^\infty$ 級の1の分割が存在する)
  - Proof (位相空間論II（3-12）の結果から第二可算ハウスドルフ多様体はパラコンパクト；パラコンパクト性から局所有限な細分を取り、バンプ関数を正規化して1の分割を構成する)

- **2. 1の分割の応用**
  - Example 1.5-1 ($S^1$ 上の開被覆 $U_1 = S^1 \setminus \{N\}$、$U_2 = S^1 \setminus \{S\}$ に対する1の分割の具体的構成：角度座標を用いたバンプ関数の明示)
  - Remark (1の分割は「局所的に定義されたものを大域的に貼り合わせる」ための基本道具であり、リーマン計量の存在（微分幾何II（4-6））、積分の定義（§6.3）、埋め込み定理の証明などで繰り返し使われる)

---

## Chapter 2: 多様体上の写像と部分多様体
**テーマ:** 滑らかな写像・微分同相・逆関数定理・ランク定理・はめ込み・埋め込み・正則値定理

### §2.1 滑らかな写像と微分同相
**内容:** チャートを介した滑らかさの定義、微分同相の例

- **1. 滑らかな写像の定義**
  - Definition 2.1-1 (滑らかな写像：$f : M \to N$ が $C^\infty$ であるとは、任意のチャート $(U, \varphi)$、$(V, \psi)$ に対して $\psi \circ f \circ \varphi^{-1}$ が $C^\infty$ であること)
  - Example 2.1-1 (包含写像 $\iota : S^n \hookrightarrow \mathbb{R}^{n+1}$ の滑らかさの確認：チャートを介した座標表示が $\mathbb{R}^n$ の開集合間の $C^\infty$ 写像であること)
  - Proposition 2.1-1 (滑らかな写像の合成は滑らかである)
  - Proof (チャートの合成を介して $\mathbb{R}^n$ 上の合成関数の $C^\infty$ 性に帰着する)

- **2. 微分同相**
  - Definition 2.1-2 (微分同相：$f : M \to N$ が全単射で $f$ と $f^{-1}$ がともに $C^\infty$ であるとき、$f$ を微分同相写像といい、$M$ と $N$ は微分同相であるという)
  - Example 2.1-2 (立体射影は $S^n \setminus \{N\}$ と $\mathbb{R}^n$ の微分同相：$\varphi_N$ が滑らかな全単射であり $\varphi_N^{-1}$ も滑らかであることの確認)
  - Example 2.1-3 ($f : \mathbb{R} \to \mathbb{R}$、$f(x) = x^3$ は $C^\infty$ な全単射だが微分同相ではない；$f^{-1}(y) = y^{1/3}$ は $y = 0$ で微分不可能)
  - Remark (微分同相は「滑らかな多様体としての構造が同じ」ことを意味し、多様体論における同値関係の中心概念である)

### §2.2 逆関数定理の多様体版
**内容:** 微分が同型ならば局所微分同相であること、微分積分学II（2-2）の逆写像定理の拡張

- **1. 逆関数定理**
  - Theorem 2.2-1 (逆関数定理の多様体版：$f : M \to N$ が $C^\infty$ で、$p \in M$ における微分 $df_p : T_pM \to T_{f(p)}N$ が線形同型ならば、$p$ のある開近傍 $U$ 上で $f|_U$ は $f(U)$ への微分同相である)
  - Proof (チャートを介して微分積分学II（2-2）の逆写像定理に帰着する；チャート $(U, \varphi)$、$(V, \psi)$ を取り $\psi \circ f \circ \varphi^{-1}$ のヤコビ行列が正則であることを確認する)
  - Example 2.2-1 ($f : \mathbb{R}^2 \to \mathbb{R}^2$、$f(r, \theta) = (r\cos\theta, r\sin\theta)$ の $r > 0$ における局所微分同相性：ヤコビ行列 $\det J = r \neq 0$ の確認；大域的には全単射でないこととの対比)

- **2. 局所微分同相と大域的構造**
  - Definition 2.2-1 (局所微分同相：各点で微分同相の制限となる写像)
  - Example 2.2-2 (被覆写像 $\pi : \mathbb{R} \to S^1$、$\pi(t) = (\cos 2\pi t, \sin 2\pi t)$ は局所微分同相だが大域的には微分同相でない；各点での $d\pi$ が同型であることの確認)
  - Remark (逆関数定理は正則値定理（§2.5）の基盤であり、はめ込み・埋め込みの局所的な構造の解析にも不可欠である)

### §2.3 写像の微分とランク定理
**内容:** 接空間の間の線形写像としての微分、定ランク定理

- **1. 写像の微分（接写像の予備的定義）**
  - Definition 2.3-1 (写像の微分のチャートによる定義：$f : M \to N$ に対して $df_p$ をチャート $(\varphi, \psi)$ を通じたヤコビ行列として定義する；チャートの選び方に依存しないことの確認)
  - Definition 2.3-2 (ランク：$f$ の点 $p$ におけるランクとは $df_p$ のランク（線形写像としてのランク）)
  - Example 2.3-1 ($f : \mathbb{R}^2 \to \mathbb{R}$、$f(x,y) = x^2 + y^2$ のランク：$(x,y) \neq (0,0)$ でランク1、$(0,0)$ でランク0の計算)

- **2. 定ランク定理**
  - Theorem 2.3-1 (定ランク定理：$f : M \to N$ が $p$ の近傍で一定のランク $r$ を持つならば、$p$ のある近傍で適切な座標を選ぶと $f$ は $(x_1, \ldots, x_m) \mapsto (x_1, \ldots, x_r, 0, \ldots, 0)$ の形になる)
  - Proof (逆関数定理を用いて、ランク $r$ の行列の非退化な $r \times r$ 小行列を利用し座標を整理する)
  - Example 2.3-2 ($f : \mathbb{R}^3 \to \mathbb{R}^2$、$f(x,y,z) = (x, y)$ は定ランク2であり、恒等写像の形の標準形に一致することの確認)
  - Remark (定ランク定理は一定ランクの仮定のもとで写像を局所的に「線形化」できることを意味し、はめ込み・沈め込みの局所的な構造を完全に決定する)

### §2.4 はめ込みと埋め込み
**内容:** 定義と違い、部分多様体としての像の条件

- **1. はめ込みの定義**
  - Definition 2.4-1 (はめ込み（immersion）：$f : M \to N$ が各点で $df_p$ が単射であるとき）
  - Example 2.4-1 (8の字曲線 $\gamma : \mathbb{R} \to \mathbb{R}^2$、$\gamma(t) = (\sin 2t, \sin t)$ がはめ込みであることの確認：$\gamma'(t)$ が零ベクトルにならないことを計算で検証する)
  - Remark (はめ込みは局所的には1対1だが、大域的に自己交差を持ちうる；8の字曲線が $t$ の異なる値で同じ点を通る例がこれを示す)

- **2. 埋め込みと部分多様体**
  - Definition 2.4-2 (埋め込み（embedding）：$f : M \to N$ がはめ込みであり、$f : M \to f(M)$ が位相的埋め込み（像への同相写像）であるとき)
  - Definition 2.4-3 (正則部分多様体：$N$ の部分集合 $S$ がすべての点で「部分多様体チャート」を持つとき、すなわち $S$ の近傍で座標の一部が $S$ を切り出すような座標が取れるとき)
  - Proposition 2.4-1 (埋め込みの像は正則部分多様体である)
  - Proof (定ランク定理を単射の場合に適用し、部分多様体チャートを構成する)
  - Example 2.4-2 (包含写像 $S^n \hookrightarrow \mathbb{R}^{n+1}$ は埋め込みであり、$S^n$ は $\mathbb{R}^{n+1}$ の正則部分多様体であることの確認)
  - Example 2.4-3 (はめ込みだが埋め込みでない例：トーラス上の無理数傾斜直線 $t \mapsto (t, \alpha t) \pmod{1}$（$\alpha$ は無理数）は $\mathbb{R}$ から $T^2$ への単射はめ込みだが、像は $T^2$ で稠密であり位相的埋め込みでないことの確認)

### §2.5 正則値定理
**内容:** 正則値の定義、逆像が部分多様体になるための条件と証明、陰関数定理の多様体版としての位置づけ

- **1. 正則値と臨界値**
  - Definition 2.5-1 (正則値と臨界値：$f : M \to N$ に対して、$q \in N$ が正則値であるとは $f^{-1}(q)$ のすべての点で $df_p$ が全射であること；全射でない点 $p$ を臨界点、その像 $f(p)$ を臨界値という)
  - Example 2.5-1 ($f(x,y,z) = x^2 + y^2 + z^2$ の正則値と臨界値：$\nabla f = (2x, 2y, 2z)$ が零ベクトルとなるのは原点のみ；臨界値は $f(0,0,0) = 0$、正の実数 $c > 0$ はすべて正則値であることの確認)

- **2. 正則値定理**
  - Theorem 2.5-1 (正則値定理（逆像定理）：$f : M^m \to N^n$ が $C^\infty$（$m \geq n$）で $q \in N$ が正則値ならば $f^{-1}(q)$ は $M$ の $(m-n)$ 次元正則部分多様体である)
  - Proof (各 $p \in f^{-1}(q)$ で $df_p$ が全射なのでランクは $n$；定ランク定理を適用して部分多様体チャートを構成する；あるいは陰関数定理（微分積分学II（2-2））をチャートを介して適用する)
  - Example 2.5-2 ($S^n = f^{-1}(1)$（$f(x) = \|x\|^2$）が $\mathbb{R}^{n+1}$ の $n$ 次元部分多様体であることの確認：$\nabla f = 2x \neq 0$（$f^{-1}(1)$ 上）より1は正則値)
  - Example 2.5-3 ($SL_n(\mathbb{R}) = \det^{-1}(1)$ が $GL_n(\mathbb{R})$ の部分多様体であることの確認：$\det$ の微分が $SL_n$ 上で全射であることをトレース公式 $d(\det)_A(H) = \det(A) \cdot \mathrm{tr}(A^{-1}H)$ により確認する)
  - Remark (正則値定理は陰関数定理の多様体版であり、「方程式 $f(x) = c$ の解集合が多様体になる」ことを保証する基本的な手段である；微分トポロジー（4-9）ではサードの定理により「ほとんどすべての値が正則値」であることが示される)

---

## Chapter 3: 接空間と接束
**テーマ:** 接ベクトルの定義・接写像・ベクトル束・接束・ベクトル場・フロー・リー括弧積

### §3.1 接空間の定義
**内容:** 曲線の速度ベクトルによる定義と導分による定義の同値性

- **1. 曲線による接ベクトル**
  - Definition 3.1-1 (曲線による接ベクトル：点 $p \in M$ を通る滑らかな曲線 $\gamma : (-\varepsilon, \varepsilon) \to M$（$\gamma(0) = p$）の同値類；2つの曲線がチャートを介して同じ速度ベクトルを与えるとき同値)
  - Example 3.1-1 ($M = \mathbb{R}^2$ で $p = (0,0)$、$\gamma_1(t) = (t, t^2)$、$\gamma_2(t) = (t, 0)$：$\gamma_1'(0) = (1,0) = \gamma_2'(0)$ なので同値；$\gamma_3(t) = (0, t)$：$\gamma_3'(0) = (0,1)$ は異なる接ベクトルであることの確認)

- **2. 導分による接ベクトル**
  - Definition 3.1-2 (導分（微分作用素）：$p$ における導分とは $v : C^\infty(M) \to \mathbb{R}$ で線形性とライプニッツ則 $v(fg) = f(p)v(g) + g(p)v(f)$ を満たすもの)
  - Proposition 3.1-1 (曲線による定義と導分による定義は同値であり、接空間 $T_pM$ は $n$ 次元ベクトル空間をなす)
  - Proof (チャート $(U, \varphi)$ を用いて曲線の同値類を $\mathbb{R}^n$ のベクトルに対応させ、導分を $\partial/\partial x^i|_p$ の線形結合に分解する)
  - Example 3.1-2 (チャート $(U, x^1, \ldots, x^n)$ における接空間の基底 $\{\partial/\partial x^1|_p, \ldots, \partial/\partial x^n|_p\}$ の作用：$\partial/\partial x^i|_p (x^j) = \delta_i^j$ の確認)
  - Remark (接空間は多様体上の「無限小的な線形近似」であり、ベクトル解析（3-1）での「接平面」の概念を抽象化したものである)

### §3.2 接写像
**内容:** 写像の微分の接空間による定式化、連鎖律との対応

- **1. 接写像の定義**
  - Definition 3.2-1 (接写像（微分）：$f : M \to N$ が $C^\infty$ のとき、$df_p : T_pM \to T_{f(p)}N$ を $df_p(v)(g) = v(g \circ f)$ で定義する)
  - Proposition 3.2-1 ($df_p$ は線形写像であり、チャートを介した座標表示ではヤコビ行列に一致する)
  - Proof (導分の線形性とライプニッツ則を用いて $df_p(v)$ が $T_{f(p)}N$ の元であることを確認し、座標表示で各成分を計算する)
  - Example 3.2-1 ($f : \mathbb{R}^2 \to \mathbb{R}^3$、$f(u,v) = (\cos u, \sin u, v)$ の接写像：$df_{(u,v)}(\partial/\partial u) = -\sin u \, \partial/\partial x + \cos u \, \partial/\partial y$；$df_{(u,v)}(\partial/\partial v) = \partial/\partial z$ の計算)

- **2. 連鎖律**
  - Proposition 3.2-2 (連鎖律：$d(g \circ f)_p = dg_{f(p)} \circ df_p$)
  - Proof (導分の定義を展開して $(d(g \circ f)_p(v))(h) = v(h \circ g \circ f) = (dg_{f(p)} \circ df_p)(v)(h)$ を確認する)
  - Corollary 3.2-1 ($f$ が微分同相ならば $df_p$ はすべての $p$ で線形同型である)
  - Proof (連鎖律を $f \circ f^{-1} = \mathrm{id}$ に適用する)
  - Remark (連鎖律は微分積分学の合成関数の微分法則の抽象化であり、多様体論の議論の至るところで用いられる)

### §3.3 ベクトル束の定義
**内容:** ベクトル束の一般的な定義、局所自明性と遷移関数、切断の概念

- **1. ベクトル束の定義**
  - Definition 3.3-1 (ベクトル束：全空間 $E$、底空間 $M$、射影 $\pi : E \to M$、各ファイバー $E_p = \pi^{-1}(p)$ が $k$ 次元ベクトル空間であり、局所自明性を満たすもの；ランク $k$ のベクトル束 $(E, M, \pi)$ と書く)
  - Definition 3.3-2 (局所自明化：各 $p \in M$ の近傍 $U$ 上で $\pi^{-1}(U) \cong U \times \mathbb{R}^k$ となる微分同相が存在し、ファイバーの線形構造を保つこと)
  - Example 3.3-1 (自明束：$E = M \times \mathbb{R}^k$ で $\pi(p, v) = p$；メビウスの帯は $S^1$ 上のランク1の非自明ベクトル束であることの確認)

- **2. 遷移関数と切断**
  - Definition 3.3-3 (遷移関数：$U_\alpha \cap U_\beta$ 上で2つの局所自明化を結ぶ写像 $g_{\alpha\beta} : U_\alpha \cap U_\beta \to GL_k(\mathbb{R})$；コサイクル条件 $g_{\alpha\beta} g_{\beta\gamma} = g_{\alpha\gamma}$ を満たす)
  - Definition 3.3-4 (切断：$\pi \circ s = \mathrm{id}_M$ を満たす写像 $s : M \to E$；すなわち各点 $p$ にファイバー $E_p$ の元を割り当てる写像)
  - Example 3.3-2 (メビウスの帯のベクトル束は大域的に零にならない切断を持たない；遷移関数が $g_{12}(p) = -1$ となることから非自明性を確認する)
  - Remark (ベクトル束は接束・余接束・テンソル束などの共通の枠組みであり、微分幾何II（4-6）のファイバー束と接続の理論の出発点となる)

### §3.4 接束とベクトル場
**内容:** 接束 $TM$ のベクトル束構造の確認、滑らかなベクトル場の定義

- **1. 接束の構成**
  - Definition 3.4-1 (接束：$TM = \bigsqcup_{p \in M} T_pM$ に自然な多様体構造を入れたもの；チャート $(U, \varphi)$ から誘導される $TU \cong U \times \mathbb{R}^n$ の座標 $(x^1, \ldots, x^n, v^1, \ldots, v^n)$ による)
  - Proposition 3.4-1 ($TM$ は $M$ 上のランク $n$ のベクトル束であり、$2n$ 次元の滑らかな多様体である)
  - Proof (座標近傍に基づく局所自明化を構成し、遷移関数がヤコビ行列で与えられることを確認する)
  - Example 3.4-1 ($TS^1$ の自明性：$S^1$ 上の大域的に零にならない接ベクトル場 $\partial/\partial\theta$ が存在するので $TS^1 \cong S^1 \times \mathbb{R}$；一方 $TS^2$ は非自明（毛玉定理、§3.5 の Remark で言及）)

- **2. ベクトル場**
  - Definition 3.4-2 (ベクトル場：接束 $TM$ の滑らかな切断 $X : M \to TM$（$\pi \circ X = \mathrm{id}_M$）)
  - Example 3.4-2 ($\mathbb{R}^n$ 上のベクトル場 $X = \sum_i a^i(x) \, \partial/\partial x^i$；$X(x) = (-x^2, x^1)$ は $\mathbb{R}^2$ 上の回転ベクトル場であることの確認)
  - Proposition 3.4-2 ($M$ 上の $C^\infty$ ベクトル場全体 $\mathfrak{X}(M)$ は $C^\infty(M)$-加群をなす)
  - Proof ($C^\infty(M)$ によるスカラー倍と加法が各点のベクトル空間構造から従うことを確認する)

### §3.5 ベクトル場のフローと積分曲線
**内容:** 積分曲線の存在と一意性定理、1パラメータ変換群としてのフローの定義、完備ベクトル場

- **1. 積分曲線**
  - Definition 3.5-1 (積分曲線：ベクトル場 $X$ に対して $\gamma'(t) = X(\gamma(t))$ を満たす曲線 $\gamma$)
  - Theorem 3.5-1 (積分曲線の存在と一意性：$X \in \mathfrak{X}(M)$ と $p \in M$ に対して、$\gamma(0) = p$ を満たす積分曲線が局所的に一意に存在する)
  - Proof (チャートを介して $\mathbb{R}^n$ 上の常微分方程式に帰着し、微分方程式I（2-6）のピカール-リンデレフの定理を適用する)
  - Example 3.5-1 ($\mathbb{R}^2$ 上のベクトル場 $X = -y\,\partial/\partial x + x\,\partial/\partial y$ の積分曲線：$\dot{\gamma}_1 = -\gamma_2$、$\dot{\gamma}_2 = \gamma_1$ を解くと $\gamma(t) = (r\cos(t+\theta_0), r\sin(t+\theta_0))$；原点中心の円運動であることの確認)

- **2. フローと完備ベクトル場**
  - Definition 3.5-2 (フロー：$\theta : \mathcal{D} \subset \mathbb{R} \times M \to M$（$\mathcal{D}$ は0を含む開集合）で $\theta(0, p) = p$、$\theta(s, \theta(t, p)) = \theta(s+t, p)$ を満たす滑らかな写像；各 $t$ に対して $\theta_t(p) = \theta(t, p)$ は局所微分同相)
  - Definition 3.5-3 (完備ベクトル場：フロー $\theta$ が $\mathbb{R} \times M$ 全体で定義されるベクトル場)
  - Proposition 3.5-1 (コンパクト多様体上のベクトル場は完備である)
  - Proof (積分曲線の最大延長区間が有限ならば、コンパクト性からその端で多様体の境界に到達する必要があるが、コンパクト多様体に境界はないので矛盾する)
  - Example 3.5-2 ($\mathbb{R}$ 上の $X = x^2 \, \partial/\partial x$ は完備でない：$\dot{\gamma} = \gamma^2$ の解 $\gamma(t) = 1/(c-t)$ は有限時間で発散する；$S^1$ 上の $X = \partial/\partial\theta$ は完備であり、フローは回転 $\theta_t(p) = p + t \pmod{2\pi}$ であることの確認)
  - Remark (フローは力学系理論（4-7）における力学系の時間発展そのものであり、リー微分（§4.4）の定義の基盤でもある)

### §3.6 リー括弧積
**内容:** ベクトル場の交換子の定義、ヤコビ恒等式、フローの交換可能性との関係

- **1. リー括弧積の定義**
  - Definition 3.6-1 (リー括弧積：$[X, Y](f) = X(Y(f)) - Y(X(f))$；$[X, Y]$ がふたたびベクトル場であること)
  - Proposition 3.6-1 ($[X, Y]$ は導分のライプニッツ則を満たし、したがってベクトル場である)
  - Proof ($[X, Y](fg) = f[X,Y](g) + g[X,Y](f)$ を各項を展開して確認する)
  - Example 3.6-1 ($\mathbb{R}^3$ で $X = \partial/\partial x$、$Y = x \, \partial/\partial y$ のとき $[X, Y](f) = \partial/\partial x(x \, \partial f/\partial y) - x \, \partial/\partial y(\partial f/\partial x) = \partial f/\partial y$；$[X, Y] = \partial/\partial y$ の計算)

- **2. 基本性質とフローとの関係**
  - Proposition 3.6-2 (リー括弧積の性質：(i) 双線形性、(ii) 反対称性 $[X,Y] = -[Y,X]$、(iii) ヤコビ恒等式 $[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0$)
  - Proof (各性質を定義の展開により直接確認する)
  - Theorem 3.6-1 ($[X, Y] = 0$ であることと、$X$ と $Y$ のフローが交換可能（$\theta^X_s \circ \theta^Y_t = \theta^Y_t \circ \theta^X_s$）であることは同値)
  - Proof (「フローの交換可能性」を微分してリー括弧積が零であることを導出する方向のスケッチ；逆方向はフローの微分方程式に帰着する)
  - Example 3.6-2 ($\mathbb{R}^2$ で $X = \partial/\partial x$、$Y = \partial/\partial y$；$[X, Y] = 0$ で平行移動のフローは交換可能；$X = \partial/\partial x$、$Y = x\,\partial/\partial y$ では $[X, Y] = \partial/\partial y \neq 0$ でフローは交換不可能)
  - Remark ($(\mathfrak{X}(M), [\cdot, \cdot])$ はリー代数をなし、リー群とリー代数（5-12）の出発点となる)

---

## Chapter 4: 余接空間とテンソル場
**テーマ:** 余接束・1-形式・テンソル場・リー微分

### §4.1 余接空間と余接束
**内容:** 接空間の双対としての余接空間、余接束 $T^*M$ のベクトル束構造、多重線形代数学I（3-11）の双対空間の多様体版としての位置づけ

- **1. 余接空間の定義**
  - Definition 4.1-1 (余接空間：$T_p^*M = (T_pM)^*$、すなわち接空間の双対ベクトル空間（多重線形代数学I（3-11）の双対空間の構成を多様体の各点に適用したもの）)
  - Definition 4.1-2 (双対基底：チャート $(U, x^1, \ldots, x^n)$ に対して $\{dx^1|_p, \ldots, dx^n|_p\}$ を $dx^i(\partial/\partial x^j) = \delta^i_j$ で定義する)
  - Example 4.1-1 ($\mathbb{R}^3$ の点 $p$ での余接ベクトル $\omega_p = 3\,dx + 2\,dy - dz$ の接ベクトル $v = a\,\partial/\partial x + b\,\partial/\partial y + c\,\partial/\partial z$ への作用：$\omega_p(v) = 3a + 2b - c$ の計算)

- **2. 余接束**
  - Definition 4.1-3 (余接束 $T^*M = \bigsqcup_{p \in M} T_p^*M$；接束と同様に滑らかな多様体構造を入れ、$M$ 上のランク $n$ のベクトル束とする)
  - Proposition 4.1-1 (余接束の遷移関数は接束の遷移関数のヤコビ行列の逆転置 $(J^{-1})^T$ で与えられる)
  - Proof (双対空間の基底変換規則から遷移関数の共変性を確認する)
  - Remark (接束は反変的に変換し、余接束は共変的に変換する；この「共変」「反変」の区別がテンソル場（§4.3）の分類の基礎であり、多重線形代数学I（3-11）の多様体への直接的な応用である)

### §4.2 関数の微分と1-形式
**内容:** $df$ の定義、座標基底による表示、滑らかな1-形式

- **1. 関数の微分 $df$**
  - Definition 4.2-1 (関数の微分：$f \in C^\infty(M)$ に対して $df : M \to T^*M$ を $df_p(v) = v(f)$ で定義する)
  - Example 4.2-1 ($f(x,y) = x^2 + y$ のとき $df = 2x\,dx + dy$；点 $(1,0)$ で $df_{(1,0)} = 2\,dx + dy$ であり、$v = 3\partial/\partial x$ に作用させると $df_{(1,0)}(v) = 6$ の計算)
  - Proposition 4.2-1 (座標関数 $x^i$ に対して $dx^i$ は Definition 4.1-2 の双対基底に一致する)
  - Proof ($dx^i(\partial/\partial x^j) = \partial x^i / \partial x^j = \delta^i_j$)

- **2. 滑らかな1-形式**
  - Definition 4.2-2 (1-形式：余接束 $T^*M$ の滑らかな切断、すなわち $\omega : M \to T^*M$（$\pi \circ \omega = \mathrm{id}_M$）；局所座標では $\omega = \sum_i \omega_i(x)\,dx^i$)
  - Example 4.2-2 ($\mathbb{R}^2 \setminus \{0\}$ 上の1-形式 $\omega = \frac{-y\,dx + x\,dy}{x^2 + y^2}$；極座標では $\omega = d\theta$ であり、局所的には完全形式だが大域的にはそうでないことの確認)
  - Remark (§4.2 の1-形式はベクトル解析（3-1）の勾配場の一般化であり、第5章でより一般の $k$-形式に拡張される)

### §4.3 テンソル場
**内容:** テンソル積（多重線形代数学I（3-11）の結果）を用いた反変・共変・混合テンソル束の定義と例

- **1. テンソル束の定義**
  - Definition 4.3-1 ($(r,s)$-テンソル束：$T^{(r,s)}M = \bigsqcup_p (T_pM)^{\otimes r} \otimes (T_p^*M)^{\otimes s}$；テンソル積は多重線形代数学I（3-11）の構成を各ファイバーに適用したもの)
  - Definition 4.3-2 ($(r,s)$-テンソル場：$T^{(r,s)}M$ の滑らかな切断)
  - Example 4.3-1 ($\mathbb{R}^n$ 上の $(0,2)$-テンソル場の例としてユークリッド計量 $g = \sum_i dx^i \otimes dx^i$；2つの接ベクトルに作用させると内積を返すことの確認)
  - Example 4.3-2 ($(1,1)$-テンソル場の例として恒等写像 $I = \sum_i \partial/\partial x^i \otimes dx^i$；任意の接ベクトル $v$ に $I(v) = v$ であることの確認)

- **2. テンソルの座標変換**
  - Proposition 4.3-1 (座標変換の下で $(r,s)$-テンソルの成分は $r$ 個のヤコビ行列と $s$ 個の逆ヤコビ行列の積で変換される)
  - Proof (基底の変換規則とテンソル積の多重線形性から成分の変換則を導出する)
  - Example 4.3-3 ($\mathbb{R}^2$ から極座標 $(r, \theta)$ への $(0,2)$-テンソル $g = dx \otimes dx + dy \otimes dy$ の変換：$g = dr \otimes dr + r^2 \, d\theta \otimes d\theta$ の計算)
  - Remark (テンソル場の座標変換規則が「テンソルとは座標変換に対してこのように変換する量である」という物理学での伝統的な定義の正当化を与える)

### §4.4 リー微分
**内容:** ベクトル場のフロー（§3.5）によるテンソル場の微分、カルタンの公式、ベクトル場との交換関係

- **1. リー微分の定義**
  - Definition 4.4-1 (リー微分：ベクトル場 $X$ のフロー $\theta_t$ に沿ったテンソル場 $T$ の変化率 $\mathcal{L}_X T = \lim_{t \to 0} (\theta_t^* T - T) / t$)
  - Proposition 4.4-1 (関数に対して $\mathcal{L}_X f = X(f)$；ベクトル場に対して $\mathcal{L}_X Y = [X, Y]$)
  - Proof (関数の場合はフローに沿った微分の定義から直接導く；ベクトル場の場合はフローの引き戻しをチャートで展開し、リー括弧積との一致を確認する)
  - Example 4.4-1 ($\mathbb{R}^2$ で $X = x\,\partial/\partial x + y\,\partial/\partial y$（放射状ベクトル場）、$T = dx \otimes dy$ のリー微分：$\theta_t(x,y) = (e^t x, e^t y)$ から $\theta_t^*(dx) = e^t dx$、$\theta_t^*(dy) = e^t dy$ を計算し、$\mathcal{L}_X(dx \otimes dy) = 2\,dx \otimes dy$ を導く)

- **2. カルタンの公式**
  - Theorem 4.4-1 (微分形式 $\omega$ に対するカルタンの公式：$\mathcal{L}_X \omega = d(\iota_X \omega) + \iota_X (d\omega)$；ここで $\iota_X$ は内部積（§5.5 で詳述）)
  - Proof (0-形式と1-形式の場合に直接確認し、ウェッジ積に対するライプニッツ則から一般の場合を帰納的に導く)
  - Remark (カルタンの公式はリー微分・外微分・内部積の3つの操作を結ぶ中心的な等式であり、§5.5 で内部積を導入した後に完全な形で活用される)

---

## Chapter 5: 微分形式と外微分
**テーマ:** k-形式・ウェッジ積・外微分・引き戻し・内部積

### §5.1 微分形式の定義
**内容:** 外積代数（多重線形代数学I（3-11）の結果）を用いた交代テンソル場としての k-形式、局所座標による表示

- **1. $k$-形式の定義**
  - Definition 5.1-1 ($k$-形式：$M$ 上の滑らかな反対称 $(0,k)$-テンソル場；各点 $p$ で $\omega_p : (T_pM)^k \to \mathbb{R}$ は交代 $k$-線形形式であり、$\Lambda^k(T_p^*M)$ の元（多重線形代数学I（3-11）の外積代数のファイバーワイズな適用）)
  - Example 5.1-1 ($\mathbb{R}^3$ 上の2-形式 $\omega = dx \wedge dy + 3\,dy \wedge dz$ の接ベクトルの対 $(v, w)$ への作用：$v = \partial/\partial x$、$w = \partial/\partial y$ のとき $\omega(v, w) = 1$ の計算)

- **2. 局所座標による表示**
  - Proposition 5.1-1 ($k$-形式は局所座標で $\omega = \sum_{i_1 < \cdots < i_k} \omega_{i_1 \cdots i_k}(x) \, dx^{i_1} \wedge \cdots \wedge dx^{i_k}$ と一意に表せる)
  - Proof (交代性から添字の順序を制限でき、基底 $\{dx^{i_1} \wedge \cdots \wedge dx^{i_k}\}$ が $\Lambda^k(T_p^*M)$ の基底をなすことから従う)
  - Example 5.1-2 ($n$ 次元多様体上の $k$-形式の成分の個数は $\binom{n}{k}$；$n = 3$、$k = 2$ で $\binom{3}{2} = 3$ 個（$dx \wedge dy, dy \wedge dz, dz \wedge dx$）の確認；$k > n$ では $\Lambda^k = 0$ であることの確認)
  - Remark ($k$-形式の空間 $\Omega^k(M)$ は $C^\infty(M)$-加群であり、$\bigoplus_{k=0}^n \Omega^k(M)$ はウェッジ積により次数付き代数をなす)

### §5.2 ウェッジ積
**内容:** 外積の定義・反対称性・次数の加法性、基底の構成

- **1. ウェッジ積の定義と性質**
  - Definition 5.2-1 (ウェッジ積：$\omega \in \Omega^k(M)$、$\eta \in \Omega^l(M)$ に対して $\omega \wedge \eta \in \Omega^{k+l}(M)$ を交代化テンソル積として定義する)
  - Proposition 5.2-1 (ウェッジ積の基本性質：(i) 結合律、(ii) 次数付き反可換性 $\omega \wedge \eta = (-1)^{kl} \eta \wedge \omega$、(iii) $C^\infty(M)$-双線形性)
  - Proof (反可換性は置換の符号から従う；結合律は交代化の定義の展開により確認する)
  - Example 5.2-1 ($\mathbb{R}^3$ で $\omega = dx + 2\,dy$、$\eta = dy + dz$ のとき $\omega \wedge \eta = dx \wedge dy + dx \wedge dz + 2\,dy \wedge dz$；$\eta \wedge \omega = -\omega \wedge \eta$ の確認)

- **2. $n$-形式と行列式**
  - Proposition 5.2-2 ($n$ 次元多様体上の $n$-形式は局所座標で $f(x)\,dx^1 \wedge \cdots \wedge dx^n$ の形に一意に書ける)
  - Proof ($\Lambda^n(T_p^*M)$ は $\binom{n}{n} = 1$ 次元であり、基底 $dx^1 \wedge \cdots \wedge dx^n$ で張られる；したがって $n$-形式の各点での値はこの基底のスカラー倍であり、スカラー係数の滑らかさが成分の滑らかさから従う)
  - Example 5.2-2 ($\mathbb{R}^3$ で $\omega = f\,dx \wedge dy \wedge dz$ の3つの接ベクトル $(v_1, v_2, v_3)$ への作用が $f \cdot \det(v_1, v_2, v_3)$ に等しいことの確認)
  - Remark (ウェッジ積と行列式の関係は体積の概念の一般化であり、§6.2 の体積形式に直結する)

### §5.3 外微分
**内容:** $d$ の座標不変な定義、$d^2 = 0$ の証明、ライプニッツ則

- **1. 外微分の定義**
  - Definition 5.3-1 (外微分：$d : \Omega^k(M) \to \Omega^{k+1}(M)$ を局所座標で $d(\sum \omega_I \, dx^I) = \sum d\omega_I \wedge dx^I$ として定義する)
  - Proposition 5.3-1 ($d$ の定義は座標の取り方に依存しない)
  - Proof (座標変換のもとで定義が不変であることを、連鎖律とウェッジ積の性質を用いて確認する)
  - Example 5.3-1 ($\mathbb{R}^3$ で $\omega = xy\,dz$ のとき $d\omega = y\,dx \wedge dz + x\,dy \wedge dz$；ベクトル解析（3-1）の回転に対応する計算)

- **2. $d^2 = 0$ とライプニッツ則**
  - Theorem 5.3-1 ($d^2 = 0$：すなわち $d(d\omega) = 0$ が任意の $\omega \in \Omega^k(M)$ で成り立つ)
  - Proof (座標表示で展開すると $\partial^2 f / \partial x^i \partial x^j$ の対称性と $dx^i \wedge dx^j$ の反対称性から各項が打ち消し合う)
  - Proposition 5.3-2 (次数付きライプニッツ則：$d(\omega \wedge \eta) = d\omega \wedge \eta + (-1)^k \omega \wedge d\eta$（$\omega \in \Omega^k$）)
  - Proof (座標表示で積の微分の公式を適用し、ウェッジ積の次数のずれを追跡する)
  - Example 5.3-2 ($d^2 = 0$ の検証：$f \in C^\infty(\mathbb{R}^2)$ に対して $df = f_x\,dx + f_y\,dy$；$d(df) = f_{xy}\,dy \wedge dx + f_{yx}\,dx \wedge dy = (f_{yx} - f_{xy})\,dx \wedge dy = 0$ の計算)
  - Remark ($d^2 = 0$ はド・ラームコホモロジー（第7章）の定義の基盤であり、ベクトル解析（3-1）の $\mathrm{curl}(\mathrm{grad}\,f) = 0$ や $\mathrm{div}(\mathrm{curl}\,F) = 0$ を統一的に表現する)

### §5.4 引き戻し
**内容:** 写像 $f$ による微分形式の引き戻し $f^*\omega$ の定義と外微分との可換性

- **1. 引き戻しの定義**
  - Definition 5.4-1 (引き戻し：$f : M \to N$ が $C^\infty$ のとき、$\omega \in \Omega^k(N)$ に対して $f^*\omega \in \Omega^k(M)$ を $(f^*\omega)_p(v_1, \ldots, v_k) = \omega_{f(p)}(df_p(v_1), \ldots, df_p(v_k))$ で定義する)
  - Proposition 5.4-1 (引き戻しの基本性質：(i) $f^*(\omega \wedge \eta) = f^*\omega \wedge f^*\eta$、(ii) $(g \circ f)^* = f^* \circ g^*$、(iii) $f^*(dg) = d(g \circ f)$（$g$ が関数のとき）)
  - Proof (各性質を定義に立ち返って接写像の線形性から確認する)
  - Example 5.4-1 ($f : \mathbb{R}^2 \to \mathbb{R}^3$、$f(u,v) = (u, v, u^2+v^2)$ に対して $\omega = dz$ の引き戻し：$f^*\omega = f^*(dz) = d(u^2+v^2) = 2u\,du + 2v\,dv$ の計算)

- **2. 外微分との可換性**
  - Theorem 5.4-1 ($f^* \circ d = d \circ f^*$：引き戻しと外微分は可換である)
  - Proof ($k$-形式 $\omega = \sum g_I \, dy^I$ に対して $f^*(d\omega) = f^*(\sum dg_I \wedge dy^I) = \sum d(g_I \circ f) \wedge f^*(dy^I) = d(f^*\omega)$ を確認する)
  - Example 5.4-2 (前例の $f$ と $\omega = z\,dx \wedge dy$ に対して $f^*\omega$ と $d(f^*\omega)$ を両方計算し、$f^*(d\omega) = d(f^*\omega)$ が成り立つことを検証する)
  - Remark (引き戻しは微分形式を「座標変換」する操作であり、ストークスの定理（§6.5）の証明においてチャートの座標変換の整合性を保証する鍵となる)

### §5.5 内部積とカルタンの公式
**内容:** ベクトル場による内部積 $\iota_X$ の定義、カルタンの公式 $\mathcal{L}_X = d \circ \iota_X + \iota_X \circ d$ の証明、リー微分（§4.4）との整合性

- **1. 内部積の定義**
  - Definition 5.5-1 (内部積（内部積縮約）：ベクトル場 $X$ と $k$-形式 $\omega$ に対して $(\iota_X \omega)(v_2, \ldots, v_k) = \omega(X, v_2, \ldots, v_k)$；$\iota_X \omega$ は $(k-1)$-形式である)
  - Proposition 5.5-1 ($\iota_X$ の性質：(i) $\iota_X$ は $C^\infty(M)$-線形、(ii) 次数付き反導分 $\iota_X(\omega \wedge \eta) = (\iota_X \omega) \wedge \eta + (-1)^k \omega \wedge (\iota_X \eta)$、(iii) $\iota_X \circ \iota_X = 0$)
  - Proof (交代性から (iii) は $\omega(X, X, \ldots) = 0$ として従う；(ii) は交代化の定義から計算する)
  - Example 5.5-1 ($\mathbb{R}^3$ で $X = \partial/\partial x$、$\omega = dx \wedge dy + dy \wedge dz$ のとき $\iota_X \omega = dy + 0 = dy$；$X$ の「$dx$-成分を抜き取る」操作であることの確認)

- **2. カルタンの公式の完全な証明**
  - Theorem 5.5-1 (カルタンの公式：$\mathcal{L}_X \omega = \iota_X(d\omega) + d(\iota_X \omega)$)
  - Proof (0-形式で $\mathcal{L}_X f = X(f)$ かつ $\iota_X(df) + d(\iota_X f) = X(f) + 0$ を確認；$df$ に対して $\mathcal{L}_X(df) = d(\mathcal{L}_X f) = d(Xf)$ と $\iota_X(d(df)) + d(\iota_X(df)) = 0 + d(Xf)$ の一致を確認；一般の $k$-形式はこれらとウェッジ積に対するライプニッツ則から帰納的に導く)
  - Example 5.5-2 ($\mathbb{R}^2$ で $X = x\,\partial/\partial x + y\,\partial/\partial y$、$\omega = x\,dy$ のとき、$\mathcal{L}_X \omega$、$\iota_X(d\omega)$、$d(\iota_X \omega)$ をそれぞれ計算し、カルタンの公式が成り立つことの検証：$d\omega = dx \wedge dy$；$\iota_X(dx \wedge dy) = x\,dy - y\,dx$；$\iota_X \omega = xy$；$d(xy) = y\,dx + x\,dy$；$\iota_X(d\omega) + d(\iota_X\omega) = (x\,dy - y\,dx) + (y\,dx + x\,dy) = 2x\,dy$；直接計算で $\mathcal{L}_X(x\,dy) = 2x\,dy$ の一致を確認)
  - Remark (カルタンの公式はリー微分を外微分と内部積の組み合わせで計算可能にする実用的な公式であり、ド・ラームコホモロジーの同値性の証明（§7.2）でも用いられる)

---

## Chapter 6: 向き付けと多様体上の積分
**テーマ:** 向き付け・体積形式・積分・境界付き多様体・ストークスの定理

### §6.1 向き付けの定義
**内容:** アトラスの整合性による向き付けの定義、向き付け不可能な例としてメビウスの帯

- **1. 向き付けの定義**
  - Definition 6.1-1 (向き付け：すべての座標変換のヤコビ行列式が正となるアトラスが存在するとき、多様体は向き付け可能であるといい、そのようなアトラスの選択を向き付けという)
  - Example 6.1-1 ($S^n$（$n \geq 1$）は向き付け可能：外向き法線ベクトルにより整合的な向き付けを定義できることの確認)
  - Example 6.1-2 (メビウスの帯は向き付け不可能：帯を一周すると座標の向きが反転することの直感的説明と、2つのチャートの座標変換でヤコビ行列式が負になることの確認)

- **2. 向き付け可能性の判定**
  - Proposition 6.1-1 ($M$ が連結であるとき、向き付けが存在するなら丁度2つの向き付けが存在する)
  - Proof (連結性から向き付けの正負がすべてのチャートに伝播することを示す)
  - Example 6.1-3 (実射影空間 $\mathbb{R}P^n$ は $n$ が奇数のとき向き付け可能、偶数のとき不可能；$\mathbb{R}P^1 \cong S^1$ は向き付け可能、$\mathbb{R}P^2$ は不可能であることの対比)
  - Remark (向き付け可能性は微分形式の積分（§6.3）の定義に不可欠であり、向き付け不可能な多様体上では密度（density）を用いた積分が代替手段となる)

### §6.2 体積形式
**内容:** 向き付け可能な多様体上の体積形式の存在と局所座標表示

- **1. 体積形式の定義**
  - Definition 6.2-1 (体積形式：$n$ 次元向き付け可能多様体 $M$ 上の至る所零にならない $n$-形式 $\Omega \in \Omega^n(M)$)
  - Proposition 6.2-1 ($M$ が向き付け可能であることと、大域的な体積形式が存在することは同値)
  - Proof (向き付けから正のアトラスを取り、1の分割（§1.5）を用いて局所的な体積形式を貼り合わせる)
  - Example 6.2-1 ($\mathbb{R}^n$ 上の標準体積形式 $dx^1 \wedge \cdots \wedge dx^n$；$S^2$ 上の体積形式（面積形式）$\omega = \sin\theta \, d\theta \wedge d\phi$ の確認)

- **2. 座標変換と体積形式**
  - Proposition 6.2-2 (座標変換 $(x^1, \ldots, x^n) \to (y^1, \ldots, y^n)$ のもとで $dx^1 \wedge \cdots \wedge dx^n = \det(\partial x / \partial y) \, dy^1 \wedge \cdots \wedge dy^n$)
  - Proof (ウェッジ積の多重線形性と反対称性からヤコビ行列式が係数として現れることを示す)
  - Example 6.2-2 (極座標変換 $(x, y) = (r\cos\theta, r\sin\theta)$ のもとで $dx \wedge dy = r \, dr \wedge d\theta$；ヤコビ行列式 $r$ の確認)
  - Remark (体積形式は微分幾何II（4-6）のリーマン体積形式の基盤であり、計量が入るとリーマン体積形式 $\sqrt{\det g_{ij}} \, dx^1 \wedge \cdots \wedge dx^n$ として具体化される)

### §6.3 コンパクト台をもつ形式の積分
**内容:** 1の分割（§1.5）を用いた積分の定義と座標変換に関する整合性の証明

- **1. 積分の定義**
  - Definition 6.3-1 (多様体上の積分：向き付けされた $n$ 次元多様体 $M$ 上のコンパクト台をもつ $n$-形式 $\omega$ の積分を、1の分割 $\{\rho_\alpha\}$ を用いて $\int_M \omega = \sum_\alpha \int_{\varphi_\alpha(U_\alpha)} (\varphi_\alpha^{-1})^*(\rho_\alpha \omega)$ で定義する)
  - Proposition 6.3-1 (積分の well-definedness：定義は1の分割とチャートの選び方に依存しない)
  - Proof (2つの1の分割に対する和の交差を取り、座標変換のヤコビ行列式（向き付けにより正）による変数変換で一致することを示す)
  - Example 6.3-1 ($S^1$ 上の1-形式 $\omega = d\theta$ の積分：2つのチャート $(U_1, \theta_1)$、$(U_2, \theta_2)$ と1の分割を用いて $\int_{S^1} d\theta = 2\pi$ を計算する)

- **2. 積分の基本性質**
  - Proposition 6.3-2 (線形性と向き反転：$\int_M (a\omega + b\eta) = a\int_M \omega + b\int_M \eta$；向き付けを反転すると積分の符号が変わる)
  - Proof (1の分割を介した定義の線形性から直ちに従う)
  - Remark (コンパクト台の条件は局所有限な和の収束を保証するために必要であり、非コンパクト多様体では広義積分の理論が別途必要になる)

### §6.4 境界付き多様体
**内容:** 上半空間をモデルとする境界付き多様体の定義、境界の誘導される向き付け

- **1. 境界付き多様体の定義**
  - Definition 6.4-1 (境界付き多様体：上半空間 $\mathbb{H}^n = \{(x^1, \ldots, x^n) \mid x^n \geq 0\}$ の開集合と同相な近傍を持つ位相空間に滑らかな構造を入れたもの；$x^n = 0$ に対応する点の集合を境界 $\partial M$ という)
  - Example 6.4-1 (閉区間 $[0,1]$ は1次元境界付き多様体で $\partial[0,1] = \{0, 1\}$；閉球体 $\bar{B}^n = \{x \mid \|x\| \leq 1\}$ は $n$ 次元境界付き多様体で $\partial \bar{B}^n = S^{n-1}$)
  - Proposition 6.4-1 ($\partial M$ は $(n-1)$ 次元の（境界なし）滑らかな多様体である)
  - Proof (境界のチャートを $\mathbb{R}^{n-1}$ の開集合で取れることを上半空間の構造から確認する)

- **2. 誘導される向き付け**
  - Proposition 6.4-2 ($M$ が向き付けられた境界付き多様体のとき、$\partial M$ には「外向き法線優先」の規約で自然に向き付けが誘導される)
  - Proof (外向き法線ベクトル $\nu$ を第1成分に取り、残りの基底で $\partial M$ の向き付けを定義する)
  - Example 6.4-2 (閉区間 $[0,1]$ の誘導される向き付け：$\partial[0,1] = \{0, 1\}$ で $\{1\}$ は正の向き、$\{0\}$ は負の向き；ストークスの定理が微分積分学の基本定理に帰着する例の準備)
  - Remark (境界の向き付けの「符号」は一見恣意的に見えるが、ストークスの定理（§6.5）が正しい符号で成り立つために不可欠な規約である)

### §6.5 ストークスの定理
**内容:** 一般ストークスの定理の証明、ベクトル解析（3-1）で扱ったグリーン・ガウス・ストークスの古典的定理の統一としての位置づけ

- **1. 一般ストークスの定理**
  - Theorem 6.5-1 (ストークスの定理：$M$ が向き付けられたコンパクト $n$ 次元境界付き多様体、$\omega \in \Omega^{n-1}(M)$ のとき $\int_M d\omega = \int_{\partial M} \omega$)
  - Proof (1の分割を用いて $\omega = \sum \rho_\alpha \omega$ に分解し、各項を上半空間 $\mathbb{H}^n$ のチャートに引き戻す；$\mathbb{H}^n$ 上の積分を各座標成分について計算し、微分積分学の基本定理を適用して境界項を得る；1の分割の和で大域的な等式を復元する)
  - Example 6.5-1 ($M = [0, 1]$、$\omega = f \in C^\infty([0,1])$（0-形式）のとき $\int_{[0,1]} df = f(1) - f(0) = \int_{\partial[0,1]} f$；微分積分学の基本定理との一致の確認)

- **2. 古典的定理の特殊場合としての復元**
  - Example 6.5-2 (グリーンの定理：$M \subset \mathbb{R}^2$ を有界領域、$\omega = P\,dx + Q\,dy$ のとき $\int_M d\omega = \int_M (\partial Q/\partial x - \partial P/\partial y) \, dx \wedge dy = \oint_{\partial M} P\,dx + Q\,dy$；ベクトル解析（3-1）で学んだグリーンの定理との一致の確認)
  - Example 6.5-3 (発散定理：$M \subset \mathbb{R}^3$ を有界領域、$\omega = F_1 \, dy \wedge dz + F_2 \, dz \wedge dx + F_3 \, dx \wedge dy$ のとき $d\omega = \mathrm{div}(F) \, dx \wedge dy \wedge dz$ であり、ストークスの定理がガウスの発散定理を与えることの確認)
  - Remark (一般ストークスの定理は、グリーン・ガウス・ストークスの古典的定理（ベクトル解析（3-1））をすべて統一する結果であり、多様体論の主要な帰結の一つである)

---

## Chapter 7: ド・ラームコホモロジー
**テーマ:** 閉形式・完全形式・ポアンカレの補題・マイヤー・ビエトリス完全系列・ド・ラームの定理

### §7.1 ド・ラームコホモロジーの定義
**内容:** 閉形式と完全形式の差を測る商空間としての定義、関手的性質

- **1. 閉形式と完全形式**
  - Definition 7.1-1 (閉形式：$d\omega = 0$ を満たす $\omega \in \Omega^k(M)$；完全形式：$\omega = d\eta$ と書ける $\omega$)
  - Proposition 7.1-1 ($d^2 = 0$ より完全形式は閉形式である)
  - Proof (Theorem 5.3-1 から直ちに従う)
  - Example 7.1-1 ($\mathbb{R}^2$ 上の $\omega = -y\,dx + x\,dy$ は閉形式（$d\omega = 2\,dx \wedge dy \neq 0$ なので実は閉でない；計算し直すと $d\omega = (-1-1)\,dx \wedge dy$... 訂正：$d(-y\,dx) = -dy \wedge dx = dx \wedge dy$、$d(x\,dy) = dx \wedge dy$；$d\omega = 2\,dx \wedge dy \neq 0$）；修正例として $\omega = \frac{-y\,dx + x\,dy}{x^2+y^2}$ は $\mathbb{R}^2 \setminus \{0\}$ 上で $d\omega = 0$ であることの確認)

- **2. ド・ラームコホモロジー群**
  - Definition 7.1-2 ($k$ 次ド・ラームコホモロジー群：$H^k_{\mathrm{dR}}(M) = \ker(d : \Omega^k \to \Omega^{k+1}) / \mathrm{im}(d : \Omega^{k-1} \to \Omega^k)$)
  - Example 7.1-2 ($H^0_{\mathrm{dR}}(M)$：$df = 0$ を満たす関数は連結成分上で定数なので $H^0_{\mathrm{dR}}(M) \cong \mathbb{R}^c$（$c$ は連結成分の個数）；$M$ が連結なら $H^0 \cong \mathbb{R}$)
  - Proposition 7.1-2 (引き戻しの関手性：$f : M \to N$ は $f^* : H^k_{\mathrm{dR}}(N) \to H^k_{\mathrm{dR}}(M)$ を誘導する)
  - Proof ($f^*$ が閉形式を閉形式に、完全形式を完全形式に送ることを $f^* \circ d = d \circ f^*$（Theorem 5.4-1）から確認する)
  - Remark (ド・ラームコホモロジーは多様体の「穴」を微分形式を使って測る道具であり、ストークスの定理と相まって多様体のトポロジーと解析学を結ぶ)

### §7.2 ポアンカレの補題
**内容:** 可縮な多様体上でのすべての閉形式の完全性の証明、ホモトピー作用素の構成

- **1. ポアンカレの補題**
  - Theorem 7.2-1 (ポアンカレの補題：$M$ が可縮（ある点に連続的に縮約可能）ならば $H^k_{\mathrm{dR}}(M) = 0$（$k \geq 1$）)
  - Proof (ホモトピー作用素 $K : \Omega^k(M) \to \Omega^{k-1}(M)$ を構成し、閉形式 $\omega$ に対して $\omega = d(K\omega)$ を示す；$K$ の構成には収縮写像 $F : M \times [0,1] \to M$ に沿った積分を用いる)
  - Example 7.2-1 ($\mathbb{R}^n$ は可縮なので $H^k_{\mathrm{dR}}(\mathbb{R}^n) = 0$（$k \geq 1$）；$\omega = y\,dx \wedge dy$（$\mathbb{R}^2$ 上の閉2-形式）に対して $K\omega$ を原点への収縮で計算し、$\omega = d(K\omega)$ を確認する)

- **2. ホモトピー不変性**
  - Theorem 7.2-2 (ホモトピー不変性：$f, g : M \to N$ がホモトピックならば $f^* = g^* : H^k_{\mathrm{dR}}(N) \to H^k_{\mathrm{dR}}(M)$)
  - Proof (ホモトピー $F : M \times [0,1] \to N$ からホモトピー作用素 $K$ を構成し、$f^*\omega - g^*\omega = dK\omega + Kd\omega$ を示す)
  - Corollary 7.2-1 (微分同相な多様体は同じド・ラームコホモロジーを持つ；より一般にホモトピー同値な多様体は同じコホモロジーを持つ)
  - Proof (ホモトピー不変性から直ちに従う)
  - Remark (ポアンカレの補題は「局所的にはすべての閉形式が完全」であることを意味し、コホモロジーが非自明になるのは大域的なトポロジーの帰結である)

### §7.3 マイヤー・ビエトリス完全系列
**内容:** 開被覆に関するド・ラームコホモロジーの長完全系列の構成と証明

- **1. マイヤー・ビエトリス完全系列の構成**
  - Theorem 7.3-1 (マイヤー・ビエトリス完全系列：$M = U_1 \cup U_2$（$U_1, U_2$ は開集合）のとき、長完全系列 $\cdots \to H^k(M) \xrightarrow{r} H^k(U_1) \oplus H^k(U_2) \xrightarrow{s} H^k(U_1 \cap U_2) \xrightarrow{\delta} H^{k+1}(M) \to \cdots$ が存在する)
  - Proof (微分形式の短完全系列 $0 \to \Omega^k(M) \xrightarrow{r} \Omega^k(U_1) \oplus \Omega^k(U_2) \xrightarrow{s} \Omega^k(U_1 \cap U_2) \to 0$ を構成する；$r$ は制限写像の直和、$s$ は差分写像；$s$ の全射性に1の分割（§1.5）を用いる；短完全系列からジグザグ補題により長完全系列を導く)
  - Remark (接続準同型 $\delta$ の構成はホモロジー代数の蛇の補題に対応し、代数的トポロジー（4-8）のマイヤー・ビエトリス完全系列と同型の構造を持つ)

- **2. 接続準同型の明示**
  - Example 7.3-1 (接続準同型 $\delta$ の具体的構成：$\eta \in \Omega^k(U_1 \cap U_2)$ で $d\eta = 0$ のとき、1の分割 $\rho_1, \rho_2$ を用いて $\rho_2 \eta$ を $U_1$ に、$-\rho_1 \eta$ を $U_2$ に延長し、$d(\rho_2 \eta)$ が $M$ 上の閉 $(k+1)$-形式を定めることの確認)

### §7.4 ド・ラームコホモロジーの計算例
**内容:** マイヤー・ビエトリス完全系列を用いた球面・トーラス・実射影空間の具体的計算

- **1. 球面のコホモロジー**
  - Example 7.4-1 ($H^k_{\mathrm{dR}}(S^n)$ の計算：$S^n = U_1 \cup U_2$（$U_i$ は極を除いた半球、$U_1 \cap U_2 \simeq S^{n-1}$）にマイヤー・ビエトリス完全系列を適用する；$U_i \simeq \mathbb{R}^n$ の可縮性とポアンカレの補題を用い、帰納法で $H^k(S^n) = \mathbb{R}$（$k = 0, n$）、$0$（それ以外）を得る)
  - Example 7.4-2 ($S^1$ の場合の直接的確認：$H^1_{\mathrm{dR}}(S^1) \cong \mathbb{R}$；$\omega = d\theta$ が閉だが完全でないこと（$\int_{S^1} d\theta = 2\pi \neq 0$）から $[\omega] \neq 0$)

- **2. トーラスと実射影空間**
  - Example 7.4-3 ($H^k_{\mathrm{dR}}(T^2)$ の計算：$T^2 = S^1 \times S^1$ をマイヤー・ビエトリスまたはキュネットの公式を用いて計算する；$H^0 \cong \mathbb{R}$、$H^1 \cong \mathbb{R}^2$、$H^2 \cong \mathbb{R}$)
  - Example 7.4-4 ($\mathbb{R}P^2$ のコホモロジー：二重被覆 $S^2 \to \mathbb{R}P^2$ を利用し $H^0 \cong \mathbb{R}$、$H^1 = 0$、$H^2 = 0$ であることの確認)
  - Remark (ド・ラームコホモロジーのベッチ数 $b_k = \dim H^k$ は多様体のトポロジー的不変量であり、オイラー標数 $\chi(M) = \sum (-1)^k b_k$ はガウス-ボンネの定理（微分幾何II（4-6））と接続する)

### §7.5 ド・ラームの定理
**内容:** 特異コホモロジーとの同型定理の主張と意義、代数的トポロジー（4-8）との接続

- **1. ド・ラームの定理の主張**
  - Theorem 7.5-1 (ド・ラームの定理：滑らかな多様体 $M$ に対して $H^k_{\mathrm{dR}}(M) \cong H^k_{\mathrm{sing}}(M; \mathbb{R})$；すなわちド・ラームコホモロジーと実係数の特異コホモロジーは同型である)
  - Proof (証明の概略：ド・ラーム写像 $I : H^k_{\mathrm{dR}} \to H^k_{\mathrm{sing}}$ を $I([\omega])([\sigma]) = \int_\sigma \omega$（特異単体 $\sigma$ 上の積分）で定義し、ストークスの定理（Theorem 6.5-1）が $I$ の well-definedness を保証することを確認する；マイヤー・ビエトリス完全系列を用いた5項補題により同型を帰納的に示す)
  - Example 7.5-1 ($S^1$ の場合：$[\omega] = [d\theta]$ に対して $I([\omega])$ は特異1-サイクル（ループ）に沿った $d\theta$ の積分 $2\pi$ を与え、$H^1_{\mathrm{sing}}(S^1; \mathbb{R}) \cong \mathbb{R}$ への同型を実現する)

- **2. ド・ラームの定理の意義**
  - Corollary 7.5-1 (ド・ラームコホモロジーは微分構造に依存しない位相不変量である)
  - Proof (特異コホモロジーは連続写像のみで定義されるため位相不変であり、ド・ラームの定理から従う)
  - Remark (ド・ラームの定理は解析学（微分形式・外微分）と代数的トポロジー（特異コホモロジー）を橋渡しする深い結果であり、代数的トポロジー（4-8）で構築される特異ホモロジー・コホモロジーの理論との比較の出発点となる)
