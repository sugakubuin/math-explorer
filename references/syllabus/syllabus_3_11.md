# 3-11: 多重線形代数学I

**前提科目:** 2-1（線形代数学II）、3-9（環論）

---

## Chapter 1: 双対空間と双対性
**テーマ:** 線形形式の空間と、その線形代数IIからの復習

### §1.1 双対基底
**内容:** 双対基底の定義と次元の対応

- **1. 双対空間と双対基底の定義**
  - Definition 1.1-1 (双対空間：体 $\mathbb{k}$ 上の有限次元ベクトル空間 $V$ の双対空間 $V^* = \mathrm{Hom}(V, \mathbb{k})$；$V^*$ の元を線形形式（線形汎関数、$1$-形式）という；線形代数学IIで学んだ内容の復習から始める)
  - Definition 1.1-2 (双対基底：$V$ の基底 $\{e_1,\ldots,e_n\}$ に対して双対基底 $\{e^1,\ldots,e^n\} \subset V^*$ を $e^i(e_j) = \delta^i{}_j$（クロネッカーのデルタ）で定める；これも線形代数学IIの復習)
  - Theorem 1.1-1 (双対基底は $V^*$ の基底：$\{e^i\}$ は $V^*$ を生成し線形独立；$\dim V^* = \dim V$)
  - Proof (任意の $\phi \in V^*$ は $\phi = \sum_i \phi(e_i) e^i$ と書ける（$\phi(e_j) = \sum_i \phi(e_i) e^i(e_j) = \phi(e_j)$）；線形独立性：$\sum_i a_i e^i = 0$ を $e_j$ に適用すると $a_j = 0$)
  - Example 1.1-1 ($\mathbb{R}^3$ の標準双対基底：$e^1(x,y,z)=x$、$e^2(x,y,z)=y$、$e^3(x,y,z)=z$；任意の線形形式 $\phi(x,y,z)=ax+by+cz$ は $\phi = ae^1+be^2+ce^3$ と表せることを確認)

- **2. 非標準基底の双対基底**
  - Example 1.1-2 ($\mathbb{R}^2$ の非標準基底の双対基底：$v_1 = (1,1)$、$v_2 = (1,-1)$ を基底とする；$v^1(v_1)=1, v^1(v_2)=0, v^2(v_1)=0, v^2(v_2)=1$ の条件を解くと $v^1(x,y) = (x+y)/2$、$v^2(x,y) = (x-y)/2$；直接計算で $v^i(v_j) = \delta^i{}_j$ を確認)
  - Remark (双対空間は「測定の空間」：$V$ の元を「ベクトル」、$V^*$ の元を「そのベクトルを数値に変換する計測器」と解釈できる；物理では共変ベクトルと反変ベクトルの区別がこれに対応する)

### §1.2 二重双対空間 $V^{**}$
**内容:** 有限次元ベクトル空間と二重双対空間の自然な同型

- **1. 評価写像と自然な同型**
  - Definition 1.2-1 (評価写像：各 $v \in V$ に対して $\mathrm{ev}_v : V^* \to \mathbb{k}$、$\mathrm{ev}_v(\phi) = \phi(v)$ を定める；これにより $\mathrm{ev} : V \to V^{**}$、$v \mapsto \mathrm{ev}_v$ という線形写像が得られる（線形代数学IIで学んだ二重双対空間の復習）)
  - Theorem 1.2-1 (自然な同型：有限次元ベクトル空間 $V$ に対して $\mathrm{ev} : V \to V^{**}$ は線形同型；$V \cong V^{**}$（「自然な」同型、基底の選択によらない）)
  - Proof (線形性：$\mathrm{ev}_{v+w}(\phi) = \phi(v+w) = \phi(v)+\phi(w) = (\mathrm{ev}_v + \mathrm{ev}_w)(\phi)$；単射性：$\mathrm{ev}_v = 0$ ならば $\phi(v)=0$（すべての $\phi$）なので $v = 0$；$\dim V^{**} = \dim V^* = \dim V$ より全射性も従う)
  - Example 1.2-1 ($\mathbb{R}^2$ での自然な同型の確認：$v = (3, -1) \in \mathbb{R}^2$ に対して $\mathrm{ev}_v \in (\mathbb{R}^2)^{**}$；$\mathrm{ev}_v(e^1) = e^1(v) = 3$、$\mathrm{ev}_v(e^2) = e^2(v) = -1$；$\mathrm{ev}_v$ の双対基底 $\{e^{1*}, e^{2*}\}$ での成分は $(3,-1)$ と一致する)

- **2. 「自然性」の意味と基底選択**
  - Remark (基底によらない同型：$V \cong V^*$ は一般には自然ではない（内積なしでは基底の選択に依存する）；一方 $V \cong V^{**}$ は基底なしで定義でき、基底変換に対して可換な図式を満たす；この「自然性」の概念は圏論（3-15）で厳密に定式化される)
  - Example 1.2-2 (無限次元では同型が成立しない：$V = \ell^2$（二乗可積分列空間）のとき $V^{**} \neq V$；$V \cong V^{**}$ は有限次元に本質的な性質であることを概念的に確認)

### §1.3 転置写像
**内容:** 線形写像の双対写像と行列の転置との関係

- **1. 双対写像（転置写像）の定義**
  - Definition 1.3-1 (双対写像：線形写像 $f : V \to W$ に対して双対写像 $f^* : W^* \to V^*$ を $(f^*\psi)(v) = \psi(f(v))$（$\psi \in W^*$、$v \in V$）で定める；線形代数学IIで学んだ内容を振り返る。引き戻しとも呼ぶ)
  - Proposition 1.3-1 (双対写像の性質：$(f \circ g)^* = g^* \circ f^*$；$(\mathrm{id}_V)^* = \mathrm{id}_{V^*}$；$(f + g)^* = f^* + g^*$；$(\lambda f)^* = \lambda f^*$)
  - Proof ($(f\circ g)^*\psi(v) = \psi(f(g(v))) = (f^*\psi)(g(v)) = (g^*(f^*\psi))(v) = (g^*\circ f^*)\psi(v)$；他は同様に定義から直接確認)
  - Example 1.3-1 ($f : \mathbb{R}^2 \to \mathbb{R}^3$、$f(e_1) = f_1$、$f(e_2) = f_2$ の双対写像：$f^*(e^i) = e^i \circ f = a^i{}_1 e^1_V + a^i{}_2 e^2_V$（$f^i{}_j = e^i(f(e_j))$）；$f^*$ の行列が $f$ の行列の転置になることを計算で確認)

- **2. 行列表示と転置行列**
  - Theorem 1.3-1 (双対写像と転置行列：線形代数学II 4.3章の復習として、基底 $\{e_j\}$、$\{f_i\}$ と対応する双対基底に関して $f : V \to W$ の行列を $A$（$(A)_{ij} = f^i{}_j$）とすると $f^* : W^* \to V^*$ の行列は $A^T$（転置行列）)
  - Proof ($(f^*(e^i))(e_k) = e^i(f(e_k)) = e^i(\sum_l A_{lk} f_l) = A_{ik}$；一方 $(A^T)_{ki} = A_{ik}$；よって $f^*$ の行列成分が $A^T$ に一致する)
  - Example 1.3-2 ($A = \begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}$（$\mathbb{R}^2 \to \mathbb{R}^3$）の双対写像の行列：$A^T = \begin{pmatrix}1&3&5\\2&4&6\end{pmatrix}$（$(\mathbb{R}^3)^* \to (\mathbb{R}^2)^*$）；$\phi = 2e^1+e^2+3e^3 \in (\mathbb{R}^3)^*$ に $A^T$ を作用させ $(f^*\phi)(v) = \phi(Av)$ として確認)
  - Corollary 1.3-1 ($\mathrm{rank}(f) = \mathrm{rank}(f^*)$：双対写像の行列が転置行列であり、転置によってランクは変わらないことから従う)
  - Proof (行列のランクは行列と転置行列で等しい（線形代数IIの結果を利用）；$\mathrm{rank}(A) = \mathrm{rank}(A^T)$)

---

## Chapter 2: 多重線形写像
**テーマ:** 複数のベクトルを変数とする線形写像

### §2.1 多重線形写像の定義
**内容:** 双線形写像、$n$ 重線形写像の定義と成分表示

- **1. 双線形写像と $n$ 重線形写像**
  - Definition 2.1-1 (双線形写像：体 $\mathbb{k}$ 上のベクトル空間 $V, W, U$ に対して写像 $f : V \times W \to U$ が双線形写像であるとは、各変数について線形、すなわち $f(v_1+v_2, w) = f(v_1, w) + f(v_2, w)$、$f(\lambda v, w) = \lambda f(v, w)$ および同様の右線形性が成立すること)
  - Definition 2.1-2 ($n$ 重線形写像：$V_1 \times \cdots \times V_n \to U$ の写像 $f$ が $n$ 重線形（多重線形）であるとは、各 $i$ について他の変数を固定したとき $f(\ldots, v_i, \ldots)$ が $V_i$ の線形写像になること)
  - Example 2.1-1 (内積は双線形写像：$\mathbb{R}^n$ 上の内積 $\langle u, v \rangle = \sum_i u_i v_i$ は $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$ の双線形写像；$\langle u_1+u_2, v \rangle = \langle u_1, v\rangle + \langle u_2, v \rangle$ を成分計算で確認)
  - Example 2.1-2 (行列積は双線形写像：$(A, B) \mapsto AB$ は $M_{m \times n} \times M_{n \times p} \to M_{m \times p}$ の双線形写像；行列積の線形性を各変数について確認)

- **2. 成分表示と基底による記述**
  - Proposition 2.1-1 ($n$ 重線形写像は基底での値で決まる：$V_i$ の基底 $\{e^{(i)}_j\}$ での値 $f(e^{(1)}_{j_1}, \ldots, e^{(n)}_{j_n})$ を指定すれば $f$ が一意に定まる)
  - Proof (多重線形性により任意の元への値は基底の値の多重線形結合として表される；$f(v_1,\ldots,v_n) = \sum_{j_1,\ldots,j_n} c^{(1)}_{j_1}\cdots c^{(n)}_{j_n} f(e^{(1)}_{j_1},\ldots,e^{(n)}_{j_n})$（$v_i = \sum_{j_i} c^{(i)}_{j_i} e^{(i)}_{j_i}$）)
  - Example 2.1-3 ($2 \times 2$ 行列式の双線形性の成分表示：$\det(v_1, v_2)$（$v_i \in \mathbb{R}^2$ を列とみる）；$v_1 = ae_1 + be_2$、$v_2 = ce_1 + de_2$ のとき $\det(v_1,v_2) = ad - bc$；基底での値 $\det(e_1,e_1)=0$、$\det(e_1,e_2)=1$、$\det(e_2,e_1)=-1$、$\det(e_2,e_2)=0$ から復元)
  - Remark ($n$ 重線形写像の全体 $\mathrm{Hom}(V_1,\ldots,V_n;U)$ はベクトル空間をなす；その次元は $\dim V_1 \cdots \dim V_n \cdot \dim U$)

### §2.2 テンソル積の普遍性
**内容:** 双線形写像を線形写像に一元化するテンソル積空間の普遍性

- **1. テンソル積の普遍性の主張**
  - Definition 2.2-1 (テンソル積の普遍性：ベクトル空間 $V, W$ のテンソル積とは、ベクトル空間 $V \otimes W$ と双線形写像 $\iota : V \times W \to V \otimes W$ の組であって、任意のベクトル空間 $U$ と双線形写像 $f : V \times W \to U$ に対して $f = \tilde{f} \circ \iota$ となる線形写像 $\tilde{f} : V \otimes W \to U$ が唯一存在するという普遍性を持つもの)
  - Theorem 2.2-1 (普遍性によるテンソル積の一意性：普遍性を満たす対 $(V \otimes W, \iota)$ は同型の意味で一意；具体的な構成は §2.3 で与える)
  - Proof (二つの普遍的な対 $(T, \iota)$ と $(T', \iota')$ があるとき、互いの普遍性から線形写像 $\phi : T \to T'$ と $\psi : T' \to T$ が定まり、$\psi \circ \phi = \mathrm{id}_T$ と $\phi \circ \psi = \mathrm{id}_{T'}$ を普遍性の一意性から導く)
  - Example 2.2-1 (普遍性のイメージ：$\mathbb{R}^2 \otimes \mathbb{R}^3$ を経由する双線形写像の図式；任意の双線形 $f: \mathbb{R}^2 \times \mathbb{R}^3 \to \mathbb{R}$ は $\mathbb{R}^2 \otimes \mathbb{R}^3 \to \mathbb{R}$ という線形写像に対応；$6$ 次元空間への写像が $2 \times 3$ の基底値で決まることを確認)

- **2. 多重テンソル積への拡張**
  - Definition 2.2-2 (多重テンソル積：$n$ 個のベクトル空間 $V_1, \ldots, V_n$ のテンソル積 $V_1 \otimes \cdots \otimes V_n$ は多重線形写像 $V_1 \times \cdots \times V_n \to U$ を線形写像に普遍的に変換するベクトル空間；$v_1 \otimes \cdots \otimes v_n$ を純粋テンソルと呼ぶ)
  - Proposition 2.2-1 (テンソル積の結合律：$(U \otimes V) \otimes W \cong U \otimes (V \otimes W)$；普遍性を用いて両辺の多重線形写像の対象としての同一性から示す)
  - Proof ($(U \otimes V) \otimes W \to U \otimes (V \otimes W)$ を $(u \otimes v) \otimes w \mapsto u \otimes (v \otimes w)$ で定める；多重線形性と普遍性から well-defined な同型であることを確認)
  - Example 2.2-2 ($\mathbb{R}^2 \otimes \mathbb{R}^2 \otimes \mathbb{R}^2$ の次元：$2^3 = 8$；純粋テンソル $e_i \otimes e_j \otimes e_k$（$i,j,k \in \{1,2\}$）の 8 個が基底をなすことを確認)

### §2.3 テンソル積の構成
**内容:** 自由ベクトル空間の商空間としての構成と基底

- **1. 自由ベクトル空間による構成**
  - Definition 2.3-1 (自由ベクトル空間：集合 $S$ 上の自由ベクトル空間 $F(S)$ は $S$ の元を基底とするベクトル空間；元は $S$ の元の有限形式和 $\sum_i a_i s_i$（$a_i \in \mathbb{k}$）)
  - Definition 2.3-2 (テンソル積の構成：$V \otimes W = F(V \times W) / R$；$R$ は双線形関係 $(v_1+v_2, w) - (v_1,w) - (v_2,w)$、$(\lambda v, w) - \lambda(v,w)$、$(v, w_1+w_2) - (v,w_1) - (v,w_2)$、$(v, \lambda w) - \lambda(v,w)$ で生成される部分空間；$(v,w)$ の剰余類を $v \otimes w$ と書く)
  - Proposition 2.3-1 (この構成が普遍性を満たす：双線形写像 $f : V \times W \to U$ に対して $\tilde{f}(v \otimes w) = f(v,w)$ と定めると well-defined な線形写像が得られ、普遍性の条件を満たす)
  - Proof ($\tilde{f}$ の well-definedness：$R$ の生成元への $\tilde{f}$ の作用が $0$ になることを双線形性から確認；線形性と一意性は線形写像の定義から)
  - Example 2.3-1 ($v \otimes w = 0$ となる非零な純粋テンソル：$V = W = \mathbb{R}^2$ で $v = e_1$、$w = 0$ のとき $e_1 \otimes 0 = e_1 \otimes (0 \cdot e_1) = 0 \cdot (e_1 \otimes e_1) = 0$；純粋テンソル $v \otimes w \neq 0$ の条件は $v \neq 0$ かつ $w \neq 0$)

- **2. テンソル積の基底と次元**
  - Theorem 2.3-1 (テンソル積の基底：$V$ の基底 $\{e_i\}_{i=1}^m$、$W$ の基底 $\{f_j\}_{j=1}^n$ に対して $\{e_i \otimes f_j\}_{1 \leq i \leq m, 1 \leq j \leq n}$ は $V \otimes W$ の基底；特に $\dim(V \otimes W) = \dim V \cdot \dim W$)
  - Proof (生成性：任意の $v \otimes w = (\sum_i a_i e_i) \otimes (\sum_j b_j f_j) = \sum_{i,j} a_i b_j (e_i \otimes f_j)$；線形独立性：各 $e_i \otimes f_j$ に対して双線形写像 $f_{kl}(e_i,f_j) = \delta_{ik}\delta_{jl}$ を構成すると普遍性から線形写像が定まり、$e_k \otimes f_l$ の係数を読み出せる)
  - Example 2.3-2 ($\mathbb{R}^2 \otimes \mathbb{R}^3$ の基底と次元：$\dim = 6$；基底は $e_1\otimes f_1$、$e_1\otimes f_2$、$e_1\otimes f_3$、$e_2\otimes f_1$、$e_2\otimes f_2$、$e_2\otimes f_3$ の $6$ 個；一般の元 $T = \sum_{i,j} T^{ij} e_i \otimes f_j$ の成分表示を確認)
  - Remark (純粋テンソルでない元の存在：$e_1\otimes f_1 + e_2\otimes f_2 \in \mathbb{R}^2 \otimes \mathbb{R}^2$ は単一の $v \otimes w$ の形には書けない；テンソル積空間の元一般は純粋テンソルの和であることに注意)

### §2.4 内積と縮約（導入）
**内容:** 双対空間とのペアリングやトレースの一般化

- **1. 自然なペアリングと縮約**
  - Definition 2.4-1 (ペアリング：線形代数学IIで学んだ有限次元ベクトル空間 $V$ とその双対空間 $V^* = \mathrm{Hom}(V, \mathbb{k})$ の間の双線形写像 $\langle \cdot, \cdot \rangle : V^* \times V \to \mathbb{k}$、$\langle \phi, v \rangle = \phi(v)$；これを自然なペアリングという)
  - Definition 2.4-2 (縮約：テンソル $T \in V^* \otimes V$ に対して縮約 $\mathrm{tr}(T) = \sum_i \langle e^i, T(e_i) \rangle$（$\{e_i\}$ が基底、$\{e^i\}$ が双対基底）；より一般に $V_1 \otimes \cdots \otimes V_n$ の $V_k^*$ 成分と $V_l$ 成分のペアリングによって階数を 2 下げる操作)
  - Example 2.4-1 ($V^* \otimes V$ の縮約：$T = \sum_{i,j} T^i{}_j \, e^j \otimes e_i \in V^* \otimes V$（$\{e^j\}$ は線形代数学IIで学んだ双対基底）；縮約は $\mathrm{tr}(T) = \sum_i T^i{}_i$；線形写像の行列のトレースと一致することを確認)
  - Remark (物理での縮約の記法：アインシュタインの縮約記法では上付き添字と下付き添字が同じとき和を取ることを省略して書く；テンソルの縮約はこの記法で自然に記述される)

- **2. 内積からテンソルへの持ち上げ**
  - Definition 2.4-3 (内積空間のペアリング：内積 $g : V \times V \to \mathbb{k}$ は双線形写像として $g \in V^* \otimes V^*$ とみなせる；$g$ が非退化のとき $V \cong V^*$ という同型を与える（添字の上げ下げ）)
  - Proposition 2.4-1 (内積による同型 $V \cong V^*$：非退化双線形形式 $g$ が存在するとき $\phi_g : V \to V^*$、$\phi_g(v) = g(v, \cdot)$ は線形同型)
  - Proof ($\phi_g$ の線形性は $g$ の線形性から；単射性：$g(v, w) = 0$（すべての $w$）$\Rightarrow v = 0$（非退化性）；有限次元で単射線形写像は同型)
  - Example 2.4-2 ($\mathbb{R}^3$ の標準内積による同型：$v = (v_1, v_2, v_3)^T$ に対して $\phi_g(v)$ は行ベクトル $(v_1, v_2, v_3)$；$v$ と $v^T$ の同一視は標準内積が引き起こすもの；一般の内積 $g_{ij}$ では $\phi_g(v)_j = \sum_i g_{ij} v^i$ となる)

---

## Chapter 3: テンソル代数
**テーマ:** テンソルの演算体系

### §3.1 $(p, q)$ 型テンソル
**内容:** 反変・共変テンソルのテンソル積と成分変換則

- **1. $(p, q)$ 型テンソルの定義**
  - Definition 4.1-1 ($(p, q)$ 型テンソル：$p$ 個の反変（上付き）成分と $q$ 個の共変（下付き）成分を持つテンソル；線形代数学II（2-1）で学んだ双対空間 $V^*$ を用いて $T^{(p,q)} = V^{\otimes p} \otimes (V^*)^{\otimes q}$ の元として定義する；$p = 1, q = 0$ が反変ベクトル（$= V$ の元）、$p = 0, q = 1$ が共変ベクトル（$= V^*$ の元）)
  - Example 4.1-1 (型の具体例：$(2, 0)$ 型テンソル $T \in V \otimes V$（成分 $T^{ij}$）；$(0, 2)$ 型テンソル $g \in V^* \otimes V^*$（成分 $g_{ij}$、内積）；$(1, 1)$ 型テンソル $A \in V \otimes V^*$（成分 $A^i{}_j$、線形写像に対応）；$\mathbb{R}^2$ で各型の具体的な元を成分表示で確認)
  - Remark (物理での使われ方：相対性理論の計量テンソル $g_{\mu\nu}$ は $(0,2)$ 型；電磁場テンソル $F^{\mu\nu}$ は $(2,0)$ 型；慣性テンソル $I^{ij}$ も $(2,0)$ 型；テンソルの型が物理量の変換性を決める)

- **2. 基底変換と成分変換則**
  - Proposition 4.1-1 (成分変換則：基底を $\{e_i\}$ から $\{e'_i\} = \{A^j{}_i e_j\}$（変換行列 $A$）に変えるとき、反変ベクトルの成分は逆行列 $(A^{-1})$ で変換され、共変ベクトルの成分は $A$ で変換される；$(p,q)$ 型テンソルの成分は $p$ 個の逆行列変換と $q$ 個の行列変換の積)
  - Proof (基底変換の定義から双対基底も連動して変換されることを確認；$e'^i = \sum_j (A^{-1})^i{}_j e^j$；純粋テンソルの成分変換を計算し、一般の場合に線形性で拡張)
  - Example 4.1-2 ($\mathbb{R}^2$ での成分変換：基底 $\{e_1, e_2\}$ から $\{e_1+e_2, e_1-e_2\}$ への変換行列 $A = \begin{pmatrix}1&1\\1&-1\end{pmatrix}$；反変ベクトル $(v^1, v^2) = (3, 1)$ の新基底成分を $A^{-1}$ で計算；共変ベクトル $(\phi_1, \phi_2) = (1, 2)$ の新基底成分を $A^T$ で計算して確認)

### §3.2 テンソル代数 $T(V)$
**内容:** テンソル空間の直和による代数構造

- **1. テンソル代数の定義**
  - Definition 4.2-1 (テンソル代数：$V^{\otimes 0} = \mathbb{k}$、$V^{\otimes n} = V \otimes \cdots \otimes V$（$n$ 個）として、直和 $T(V) = \bigoplus_{n=0}^{\infty} V^{\otimes n}$ にテンソル積 $\otimes$ を乗法として定めた結合代数；$T(V)$ は次数付き代数（次数 $n$ の元は $V^{\otimes n}$ の元）)
  - Proposition 4.2-1 ($T(V)$ は結合代数：乗法 $\otimes$ は結合律 $(s \otimes t) \otimes u = s \otimes (t \otimes u)$ を満たし、単位元は $1 \in \mathbb{k} = V^{\otimes 0}$；分配律は $\otimes$ の多重線形性から従う)
  - Proof (結合律は §2.2 の Proposition 2.2-1 から；単位元の確認：$1 \otimes v = v$ を構成から直接確認)
  - Example 4.2-1 ($T(\mathbb{R}^2)$ の低次の元：次数 $0$ の元は実数；次数 $1$ は $\mathbb{R}^2$ の元 $ae_1 + be_2$；次数 $2$ は $\mathbb{R}^2 \otimes \mathbb{R}^2$ の元 $\sum_{i,j} T^{ij} e_i \otimes e_j$；$(e_1 + e_2) \otimes (e_1 - e_2) = e_1\otimes e_1 - e_1 \otimes e_2 + e_2\otimes e_1 - e_2\otimes e_2$ を展開)

- **2. テンソル代数の普遍性**
  - Theorem 4.2-1 (テンソル代数の普遍性：$V$ を含む任意の結合代数 $A$ と線形写像 $f : V \to A$ に対して、代数準同型 $\tilde{f} : T(V) \to A$ で $\tilde{f}|_V = f$ となるものが唯一存在する；$T(V)$ は $V$ 上の「自由結合代数」)
  - Proof ($\tilde{f}(v_1 \otimes \cdots \otimes v_n) = f(v_1) \cdots f(v_n)$（$A$ での積）と定めると代数準同型になることを確認；一意性は $T(V)$ が純粋テンソルで生成されることから)
  - Example 4.2-2 (テンソル代数から多項式環への準同型：$V = \mathbb{k}$ のとき $T(\mathbb{k}) \cong \mathbb{k}[x]$（非可換版）；$V = \mathbb{k}^n$ のとき自由結合代数 $\langle x_1,\ldots,x_n \rangle$（非可換多項式環）が得られる；$x \otimes y - y \otimes x = 0$ を課して可換化すると通常の多項式環 $\mathbb{k}[x_1,\ldots,x_n]$)

### §3.3 対称テンソルと交代テンソル
**内容:** 対称化作用素と交代化作用素の定義

- **1. 対称テンソルと対称積**
  - Definition 4.3-1 (対称テンソル：$T \in V^{\otimes n}$ が対称テンソルであるとは、任意の置換 $\sigma \in S_n$ に対して $v_{\sigma(1)} \otimes \cdots \otimes v_{\sigma(n)}$ への作用が変わらないこと；対称テンソル全体 $S^n(V) \subset V^{\otimes n}$)
  - Definition 4.3-2 (対称化作用素：$\mathrm{Sym} : V^{\otimes n} \to V^{\otimes n}$、$\mathrm{Sym}(v_1 \otimes \cdots \otimes v_n) = \frac{1}{n!}\sum_{\sigma \in S_n} v_{\sigma(1)} \otimes \cdots \otimes v_{\sigma(n)}$；像が $S^n(V)$ に一致する)
  - Proposition 4.3-1 ($\mathrm{Sym}$ は冪等写像：$\mathrm{Sym} \circ \mathrm{Sym} = \mathrm{Sym}$；$S^n(V) = \mathrm{Im}(\mathrm{Sym})$)
  - Proof ($T = \mathrm{Sym}(s)$ とすると $\mathrm{Sym}(T) = \mathrm{Sym}(\mathrm{Sym}(s))$；$\mathrm{Sym}(s)$ はすでに対称なので各置換での変換が不変、和をとっても変わらず $\mathrm{Sym}(T) = T$)
  - Example 4.3-1 ($S^2(\mathbb{R}^2)$ の基底：対称化すると $e_1\otimes e_1$、$e_2\otimes e_2$、$\frac{1}{2}(e_1\otimes e_2 + e_2\otimes e_1)$ の 3 個が基底；$\dim S^2(V) = \binom{n+1}{2}$（$n = \dim V$）を一般式として確認)

- **2. 交代テンソルと交代化作用素**
  - Definition 3.3-3 (交代テンソル：$T \in V^{\otimes n}$ が交代テンソルであるとは、任意の置換 $\sigma \in S_n$ に対して $\sigma$ の作用が $\mathrm{sgn}(\sigma)$ 倍になること；$T(v_1,\ldots,v_n) = \mathrm{sgn}(\sigma)T(v_{\sigma(1)},\ldots,v_{\sigma(n)})$；交代テンソル全体 $\Lambda^n(V) = \bigwedge^n V$)
  - Definition 3.3-4 (交代化作用素：$\mathrm{Alt} : V^{\otimes n} \to V^{\otimes n}$、$\mathrm{Alt}(v_1 \otimes \cdots \otimes v_n) = \frac{1}{n!}\sum_{\sigma \in S_n} \mathrm{sgn}(\sigma)\, v_{\sigma(1)} \otimes \cdots \otimes v_{\sigma(n)}$)
  - Proposition 4.3-2 ($\mathrm{Alt}$ は冪等写像：$\mathrm{Alt} \circ \mathrm{Alt} = \mathrm{Alt}$；隣接する 2 変数が一致するテンソルは $\mathrm{Alt}$ で $0$ に送られる)
  - Proof (冪等性は対称化と同様；$v_i = v_{i+1}$ のとき転置 $(i\, i{+}1)$ による符号が $-1$ だが値は変わらないため $\mathrm{Alt}(\ldots, v, v, \ldots) = -\mathrm{Alt}(\ldots, v, v, \ldots)$ より $0$)
  - Example 4.3-2 ($\bigwedge^2(\mathbb{R}^3)$ の基底：交代化により $e_1\otimes e_2 - e_2 \otimes e_1$、$e_1\otimes e_3 - e_3\otimes e_1$、$e_2\otimes e_3 - e_3\otimes e_2$ の 3 個が基底；$\dim \bigwedge^2(V) = \binom{n}{2}$（$n = \dim V$）を確認)

---

## Chapter 4: 外積代数（Exterior Algebra）
**テーマ:** 交代性の代数

### §4.1 外積（ウェッジ積）
**内容:** 反対称性を持つウェッジ積の定義

- **1. ウェッジ積の定義と基本性質**
  - Definition 4.1-1 (ウェッジ積：$V$ のベクトル $v_1, \ldots, v_n$ に対して $v_1 \wedge \cdots \wedge v_n = n!\, \mathrm{Alt}(v_1 \otimes \cdots \otimes v_n)$；記号的には $T(V)$ の交代イデアルによる商として定義するのが標準的（§4.2 で詳述）)
  - Proposition 4.1-1 (ウェッジ積の反対称性：$v_i = v_j$（$i \neq j$）のとき $v_1 \wedge \cdots \wedge v_n = 0$；隣接する 2 変数を交換すると符号が反転 $v \wedge w = -w \wedge v$)
  - Proof ($v \wedge v = 2!\,\mathrm{Alt}(v \otimes v) = v\otimes v - v\otimes v = 0$；$v\wedge w + w\wedge v = 2\,\mathrm{Alt}(v\otimes w) + 2\,\mathrm{Alt}(w\otimes v)$；$\mathrm{Alt}(v\otimes w) = \frac{1}{2}(v\otimes w - w\otimes v) = -\mathrm{Alt}(w\otimes v)$ より $0$)
  - Example 4.1-1 ($\mathbb{R}^3$ でのウェッジ積の計算：$e_1 \wedge e_2 \wedge e_3 = 3!\,\mathrm{Alt}(e_1\otimes e_2\otimes e_3)$；$(2e_1 + e_2) \wedge e_3 = 2(e_1\wedge e_3) + e_2 \wedge e_3$ を線形性と反対称性で計算)

- **2. ウェッジ積と行列式の関係（先取り）**
  - Proposition 4.1-2 (一次従属なベクトルのウェッジ積は零：$v_1, \ldots, v_n$ が線形従属ならば $v_1 \wedge \cdots \wedge v_n = 0$)
  - Proof (線形従属ならある $v_k = \sum_{i \neq k} a_i v_i$；ウェッジ積の多重線形性でこれを展開すると、各項で同じベクトルが 2 回現れて $0$ になる)
  - Example 4.1-2 (線形独立性の外積による判定：$v_1 = (1,0,0)$、$v_2 = (0,1,0)$、$v_3 = (1,1,0)$ で $v_3 = v_1 + v_2$ より従属；$v_1\wedge v_2\wedge v_3 = v_1\wedge v_2\wedge(v_1+v_2) = v_1\wedge v_2\wedge v_1 + v_1\wedge v_2\wedge v_2 = 0$ を確認)
  - Remark (ウェッジ積は面積・体積の符号付き一般化：$v \wedge w \neq 0$ は $v, w$ の張る平行四辺形の符号付き面積；$v_1 \wedge \cdots \wedge v_n$ は $n$ 個のベクトルが張る超平行体の符号付き体積)

### §4.2 外積代数 $\bigwedge(V)$
**内容:** グラスマン代数の構成と基底・次元

- **1. 外積代数の構成**
  - Definition 4.2-1 (外積代数（グラスマン代数）：$\bigwedge(V) = T(V) / \mathcal{I}$；$\mathcal{I}$ は $v \otimes v$（すべての $v \in V$）で生成される両側イデアル；商代数での乗法を $\wedge$（ウェッジ積）と書く；$\bigwedge^n(V)$ を次数 $n$ の成分 $V^{\otimes n} / (\mathcal{I} \cap V^{\otimes n})$ とする)
  - Theorem 4.2-1 ($\bigwedge(V)$ の基底と次元：$V$ の基底 $\{e_1, \ldots, e_m\}$ に対して $\{e_{i_1} \wedge \cdots \wedge e_{i_k} \mid 1 \leq i_1 < i_2 < \cdots < i_k \leq m\}$ が $\bigwedge^k(V)$ の基底；$\dim \bigwedge^k(V) = \binom{m}{k}$；$\dim \bigwedge(V) = 2^m$)
  - Proof (生成性：任意の $v_{i_1}\wedge\cdots\wedge v_{i_k}$ は反対称性で添字を増加列に並べ替えられる；線形独立性：適切な多重線形写像を構成して各基底元の係数を読み出す)
  - Example 4.2-1 ($\bigwedge(\mathbb{R}^3)$ の全基底：$\bigwedge^0$：$1$（$1$ 個）；$\bigwedge^1$：$e_1, e_2, e_3$（$3$ 個）；$\bigwedge^2$：$e_1\wedge e_2$, $e_1\wedge e_3$, $e_2\wedge e_3$（$3$ 個）；$\bigwedge^3$：$e_1\wedge e_2\wedge e_3$（$1$ 個）；合計 $2^3 = 8$ 個)

- **2. 外積代数の普遍性**
  - Theorem 4.2-1 (外積代数の普遍性：$V$ を含む任意の結合代数 $A$ と線形写像 $f : V \to A$ で $f(v)^2 = 0$（すべての $v$）を満たすものに対して、代数準同型 $\tilde{f} : \bigwedge(V) \to A$ で $\tilde{f}|_V = f$ となるものが唯一存在する)
  - Proof (テンソル代数の普遍性（Theorem 2.2-1）から $\hat{f} : T(V) \to A$ が定まる；$f(v)^2 = 0$ の条件からイデアル $\mathcal{I}$ が $\ker \hat{f}$ に含まれ、商への降下が定まる)
  - Example 4.2-2 ($\bigwedge(\mathbb{R}^2)$ の乗法：$e_1 \wedge e_1 = 0$、$e_2 \wedge e_2 = 0$、$e_1 \wedge e_2 = -e_2 \wedge e_1$；$(ae_1 + be_2)\wedge(ce_1 + de_2) = (ad-bc)e_1\wedge e_2$ を計算して行列式と一致することを確認)

### §4.3 行列式と外積
**内容:** $n$ 次外積空間と行列式の関係

- **1. 行列式の外積による定義**
  - Theorem 4.3-1 ($\dim \bigwedge^n(V) = 1$（$n = \dim V$）：$n$ 次元空間 $V$ の $n$ 次外積空間は $1$ 次元；$\bigwedge^n(V) = \mathrm{span}\{e_1\wedge\cdots\wedge e_n\}$)
  - Proof ($\binom{n}{n} = 1$ なので基底 §3.2 Theorem 4.2-1 から次元が $1$；基底は $e_1\wedge\cdots\wedge e_n$ のスカラー倍のみ)
  - Definition 4.3-1 (行列式の外積による定義：線形写像 $f : V \to V$ が誘導する $\bigwedge^n(V) \to \bigwedge^n(V)$（次節 §4.4 で定義するプルバック）はスカラー倍であり、その倍率を $\det(f)$ と定義する；$f(e_1)\wedge\cdots\wedge f(e_n) = \det(f)\cdot e_1\wedge\cdots\wedge e_n$)
  - Example 4.3-1 ($2\times 2$ 行列の行列式：$f(e_1) = ae_1+ce_2$、$f(e_2) = be_1+de_2$ のとき $f(e_1)\wedge f(e_2) = (ae_1+ce_2)\wedge(be_1+de_2) = (ad-bc)e_1\wedge e_2$；$\det(f) = ad - bc$ が定義から導出される)

- **2. 行列式の性質の外積による証明**
  - Corollary 4.3-1 (行列式の積公式：線形写像 $f, g : V \to V$ に対して $\det(f \circ g) = \det(f)\det(g)$)
  - Proof ($(f\circ g)(e_1)\wedge\cdots\wedge(f\circ g)(e_n) = f(g(e_1))\wedge\cdots\wedge f(g(e_n))$；まず $g$ の作用で $\det(g)$ 倍、次に $f$ の作用で $\det(f)$ 倍になることを $\bigwedge^n$ の $1$ 次元性から確認)
  - Example 4.3-2 ($3 \times 3$ 行列式の計算：$f(e_1) = e_1$、$f(e_2) = e_1+e_2$、$f(e_3) = e_1+e_2+e_3$ のとき $\det(f) = ?$；$f(e_1)\wedge f(e_2)\wedge f(e_3) = e_1\wedge(e_1+e_2)\wedge(e_1+e_2+e_3)$ を展開して $e_1\wedge e_2\wedge e_3$ の係数 $1$ を求める)
  - Remark (外積による行列式の捉え方：通常の行列式の定義（置換の和）は $e_1\wedge\cdots\wedge e_n$ の基底表示から直接導かれる；外積代数の枠組みで行列式の多重線形性・交代性・正規化条件がすべて自然に理解できる)

### §4.4 プルバック（引き戻し）
**内容:** 線形写像から誘導される外積代数上の写像

- **1. プルバックの定義と計算**
  - Definition 4.4-1 (プルバック：線形写像 $f : V \to W$ から誘導される写像 $f^* : \bigwedge^k(W) \to \bigwedge^k(V)$；$(f^*\omega)(v_1,\ldots,v_k) = \omega(f(v_1),\ldots,f(v_k))$ で定める；$f^*(w_1\wedge\cdots\wedge w_k) = f^*(w_1)\wedge\cdots\wedge f^*(w_k)$ という代数準同型)
  - Proposition 4.4-1 (プルバックの代数準同型性：$f^*(a\wedge b) = f^*(a)\wedge f^*(b)$；$f^* : \bigwedge(W) \to \bigwedge(V)$ は代数準同型)
  - Proof ($f^*(w_1\wedge\cdots\wedge w_k) = f(w_1)\wedge\cdots\wedge f(w_k)$ と定義し；外積代数の普遍性（Theorem 4.2-1）から代数準同型性が従う)
  - Example 4.4-1 ($f : \mathbb{R}^2 \to \mathbb{R}^3$、$f(e_1) = e_1+e_2$、$f(e_2) = e_2+e_3$ のプルバック：$f^*(e_1\wedge e_2) = f^*(e_1)\wedge f^*(e_2) = (e_1+e_2)\wedge(e_2+e_3) = e_1\wedge e_2 + e_1\wedge e_3 + e_2\wedge e_3$；$f^*(e_1\wedge e_2\wedge e_3) = (e_1+e_2)\wedge(e_2+e_3)\wedge 0$ と $f$ の像が 2 次元なので $0$)

- **2. プルバックと行列式の関係**
  - Theorem 4.4-1 (プルバックと行列式：$f : V \to V$ の自己準同型のとき $f^* : \bigwedge^n(V) \to \bigwedge^n(V)$（$n = \dim V$）はスカラー倍 $\det(f)$ による乗法；$f^*\omega = \det(f)\omega$（すべての $\omega \in \bigwedge^n(V)$）)
  - Proof ($\bigwedge^n(V)$ は $1$ 次元なので $f^*$ はスカラー倍；$\omega = e_1\wedge\cdots\wedge e_n$ に対して $f^*\omega = f(e_1)\wedge\cdots\wedge f(e_n) = \det(f)\cdot e_1\wedge\cdots\wedge e_n$ であることを $\S3.3$ の定義から確認)
  - Example 4.4-2 (プルバックと行列式の計算：$f : \mathbb{R}^2 \to \mathbb{R}^2$、$f(e_1)=2e_1+e_2$、$f(e_2)=e_1+3e_2$ のとき $\det(f) = 6-1 = 5$；$f^*(e_1\wedge e_2) = (2e_1+e_2)\wedge(e_1+3e_2) = 5e_1\wedge e_2$ を確認)
  - Remark (微分形式との接続：$f^*$ は微分幾何（3-13、4-5）での微分形式のプルバックの線形代数版；$n$ 形式の変換則が変数変換のヤコビアンに対応する)

---

## Chapter 5: 向きと体積形式
**テーマ:** 幾何学的応用

### §5.1 ベクトル空間の向き
**内容:** 変換行列の行列式の符号に基づく向き付け

- **1. 向きの定義**
  - Definition 5.1-1 (順序付き基底の同値関係：有限次元 $V$ の二つの順序付き基底 $\mathcal{B} = (v_1,\ldots,v_n)$ と $\mathcal{B}' = (v'_1,\ldots,v'_n)$ が同じ向きであるとは、変換行列 $P$（$v'_i = \sum_j P_{ji} v_j$）の行列式 $\det P > 0$ であること；$\det P < 0$ のとき逆の向き)
  - Definition 5.1-2 (向き：ベクトル空間の向きとは、順序付き基底の同値類（「正」または「負」）の選択；選択した向きを正の向きといい、正の向きに属する基底を正規基底という)
  - Proposition 5.1-1 (二値性：任意の有限次元ベクトル空間には恰好 2 つの向きがある)
  - Proof (変換行列の行列式は $0$ 以外の実数値を取り、$\det P > 0$ か $\det P < 0$ の二通りのみ；$\det P > 0$ が同値関係（反射律：$\det I = 1 > 0$；対称律：$\det P > 0 \Leftrightarrow \det P^{-1} > 0$；推移律：$\det(PQ) = \det P \det Q > 0$）をなすことを確認)
  - Example 5.1-1 ($\mathbb{R}^2$ の向き：標準基底 $(e_1, e_2)$ を正の向きとする；$(e_2, e_1)$ は変換行列 $\begin{pmatrix}0&1\\1&0\end{pmatrix}$（$\det = -1 < 0$）なので逆の向き；$(e_1+e_2, e_1-e_2)$ の変換行列の行列式 $-2 < 0$ より負の向き)

- **2. 線形写像と向きの保存**
  - Definition 5.1-3 (向きを保つ写像：同型写像 $f : V \to W$（$V, W$ は向き付きベクトル空間）が向きを保つとは、正規基底 $\mathcal{B}$ の像 $f(\mathcal{B})$ が $W$ の正規基底になること；$\det f > 0$ と同値)
  - Example 5.1-2 ($\mathbb{R}^3$ での向きの保存：回転行列（$\det = 1$）は向きを保つ；反転（$\det = -1$）は向きを反転させる；物理での右手系・左手系の区別がこれに対応)

### §5.2 体積形式
**内容:** 最高次の非退化な交代形式と行列式の関係

- **1. 体積形式の定義**
  - Definition 5.2-1 (体積形式：$n$ 次元向き付きベクトル空間 $V$ の体積形式（ボリュームフォーム）とは、$\bigwedge^n(V)$ の非零元 $\Omega$；正の正規基底 $(e_1,\ldots,e_n)$ に対して $\Omega(e_1,\ldots,e_n) > 0$ を要求することで正規化できる)
  - Proposition 5.2-1 ($\bigwedge^n(V)$ の非零元は体積形式として機能する：$(v_1,\ldots,v_n) \mapsto \Omega(v_1,\ldots,v_n)$ は $n$ 重交代線形形式であり、符号付き体積を与える；$v_1,\ldots,v_n$ が線形従属なとき $\Omega = 0$)
  - Proof ($\Omega \in \bigwedge^n(V)$ は定義から交代性と多重線形性を持つ；線形従属なとき §3.1 Proposition 4.1-2 より $0$)
  - Example 5.2-1 ($\mathbb{R}^3$ の体積形式：$\Omega = e^1 \wedge e^2 \wedge e^3$ とすると $\Omega(v_1, v_2, v_3) = \det(v_1, v_2, v_3)$（$v_i$ を列とする行列の行列式）；$\Omega(e_1, e_2, e_3) = 1$、$\Omega(e_1, e_3, e_2) = -1$ を確認)

- **2. 変数変換と体積形式**
  - Theorem 5.2-1 (体積形式の変換則：$f : V \to V$ の線形写像に対して $f^*\Omega = \det(f) \cdot \Omega$（§3.4 Theorem 4.4-1 の再述）；これは多重積分の変数変換公式 $\int f(D) d\mathrm{vol} = |\det(f)| \int_D d\mathrm{vol}$ の線形代数的根拠)
  - Proof (§3.4 Theorem 4.4-1 と §3.3 Definition 4.3-1 から直接導かれる；$f^*\Omega(e_1,\ldots,e_n) = \Omega(f(e_1),\ldots,f(e_n)) = \det(f)\Omega(e_1,\ldots,e_n)$)
  - Example 5.2-2 (体積の変換計算：$f : \mathbb{R}^2 \to \mathbb{R}^2$、$f(e_1) = 2e_1$、$f(e_2) = 3e_2$（スケーリング）；$f^*(e^1\wedge e^2) = 2e^1\wedge 3e^2 = 6 e^1\wedge e^2$；$\det f = 6$ と一致；単位正方形が面積 $6$ の長方形に移ることを確認)

### §5.3 内積空間の体積
**内容:** グラム行列式による体積の計算

- **1. グラム行列と体積**
  - Definition 5.3-1 (グラム行列：内積空間 $V$ 上のベクトル $v_1, \ldots, v_k$ に対してグラム行列 $G_{ij} = \langle v_i, v_j \rangle$（$1 \leq i, j \leq k$）；グラム行列式 $\det G$ を $v_1,\ldots,v_k$ のグラミアンという)
  - Theorem 5.3-1 (グラム行列式と体積：$v_1, \ldots, v_k \in V$ が張る平行体の $k$ 次元体積（$k$ 次元ルベーグ測度）の 2 乗はグラム行列式に等しい；$\mathrm{vol}_k(v_1,\ldots,v_k)^2 = \det G$)
  - Proof ($k=n$（フルランク）のとき $v_i = \sum_j A_{ji}e_j$ と書くと $G = A^T A$；$\det G = (\det A)^2 = \mathrm{vol}_n^2$；$k < n$ の場合は $k$ 次元部分空間への直交射影に帰着してグラム行列が変わらないことを確認)
  - Example 5.3-1 ($\mathbb{R}^3$ での三角形の面積：$v_1 = (1,0,0)$、$v_2 = (0,1,0)$ が張る平行四辺形；$G = \begin{pmatrix}\langle v_1,v_1\rangle&\langle v_1,v_2\rangle\\\langle v_2,v_1\rangle&\langle v_2,v_2\rangle\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix}$；$\det G = 1$；面積 $= 1$；三角形なら面積 $= 1/2$)

- **2. グラム行列式と線形独立性**
  - Proposition 5.3-1 ($v_1,\ldots,v_k$ が線形従属 $\Leftrightarrow$ $\det G = 0$)
  - Proof ($G = A^T A$ の核空間は $A$ の核と一致（$Ax=0 \Leftrightarrow \|Ax\|^2 = x^T A^T A x = 0$）；$A$ が列フルランク $\Leftrightarrow$ $G$ が正則 $\Leftrightarrow$ $\det G \neq 0$)
  - Example 4.3-2 (3 ベクトルのグラム行列式：$v_1=(1,1,0)$、$v_2=(0,1,1)$、$v_3=(1,2,1)$（$= v_1+v_2$）；$\det G = 0$ であることを計算；$v_3 = v_1+v_2$ より従属なので面積 $0$（1次元の空間に収まる）を確認)
  - Remark (グラム行列式と微分幾何：リーマン多様体の局所座標での計量テンソルの行列式 $\sqrt{\det g}$ は体積素子を与える；これは定理 5.3-1 の局所版であり、微分幾何I（3-13）・多様体論（4-5）への直接の接続)

---

## Chapter 6: テンソルとしての行列と縮約
**テーマ:** 線形代数の再解釈とコントラクション

### §6.1 線形写像と $(1,1)$ 型テンソルの同一視
**内容:** $\mathrm{Hom}(V, W) \cong V^* \otimes W$

- **1. 自然な同型の構成**
  - Theorem 6.1-1 (線形写像とテンソル積の同一視：有限次元ベクトル空間 $V, W$ に対して自然な線形同型 $\mathrm{Hom}(V, W) \cong V^* \otimes W$ が存在する；$\phi \otimes w \in V^* \otimes W$ は $v \mapsto \phi(v) w$ という線形写像に対応する)
  - Proof (写像 $\Phi : V^* \otimes W \to \mathrm{Hom}(V, W)$、$\Phi(\phi \otimes w)(v) = \phi(v)w$ を双線形写像の普遍性（§1.2）で定める；$\{e^i \otimes f_j\}$（基底）の像が $\{E_{ij}\}$（行列単位）に対応する線形写像の基底と一致することから同型性を確認)
  - Example 6.1-1 ($\mathrm{Hom}(\mathbb{R}^2, \mathbb{R}^3) \cong (\mathbb{R}^2)^* \otimes \mathbb{R}^3$：次元 $6 = 2 \times 3$ が一致；$e^1 \otimes f_1$ は $v \mapsto v^1 f_1$ という写像（第 1 成分を第 1 基底方向に出力）；$2\times3$ 行列 $A_{ij}$ は $\sum_{i,j}A_{ij}(e^j \otimes f_i)$ に対応することを確認)

- **2. 自己準同型のトレース**
  - Corollary 6.1-1 ($\mathrm{End}(V) = \mathrm{Hom}(V,V) \cong V^* \otimes V$：縮約（§1.4）を通じて $\mathrm{tr} : V^* \otimes V \to \mathbb{k}$ が線形写像のトレースを与える)
  - Proof ($V^* \otimes V \cong \mathrm{End}(V)$ の同型を §6.1 Theorem 6.1-1 で構成；縮約 $\mathrm{tr}(\phi\otimes v) = \phi(v)$ は線形写像 $f$ のトレース $\mathrm{tr}(f) = \sum_i e^i(f(e_i))$ に一致する)
  - Example 6.1-2 (トレースの計算：$f(e_1) = 2e_1+3e_2$、$f(e_2) = e_1+4e_2$ の行列 $\begin{pmatrix}2&1\\3&4\end{pmatrix}$；縮約 $\sum_i e^i(f(e_i)) = e^1(2e_1+3e_2)+e^2(e_1+4e_2) = 2+4 = 6$；行列のトレース $2+4 = 6$ と一致)

### §6.2 トレースの不変性
**内容:** 基底に依存しないトレースの定義

- **1. トレースの基底独立性**
  - Theorem 6.2-1 (トレースの基底不変性：$\mathrm{tr}(f) = \sum_i e^i(f(e_i))$ は基底 $\{e_i\}$ の選び方によらない；$f$ の行列表現 $A$ に対して $\mathrm{tr}(A)$ は基底変換で不変)
  - Proof (基底変換 $e'_j = \sum_k P_{kj}e_k$ のもとで $\mathrm{tr}(f) = \sum_j (e')^j(f(e'_j)) = \sum_j \sum_{k,l} (P^{-1})^j{}_k P_{lj} e^k(f(e_l)) = \sum_{k} e^k(f(e_k))$；$\sum_j (P^{-1})^j{}_k P_{lj} = \delta_{kl}$ を用いる)
  - Example 6.2-1 (基底を変えてトレースを計算：$f$ の行列 $A = \begin{pmatrix}3&1\\1&2\end{pmatrix}$；別の基底 $\{v_1,v_2\} = \{(1,1),(1,-1)\}/\sqrt{2}$ に変換した行列 $A' = PAP^{-1}$；$\mathrm{tr}(A') = \mathrm{tr}(A) = 5$ を計算して確認)

- **2. トレースの代数的性質**
  - Proposition 6.2-1 (トレースの性質：$\mathrm{tr}(f+g) = \mathrm{tr}(f)+\mathrm{tr}(g)$；$\mathrm{tr}(\lambda f) = \lambda\mathrm{tr}(f)$；$\mathrm{tr}(f\circ g) = \mathrm{tr}(g\circ f)$（巡回性）)
  - Proof (線形性は縮約の線形性から；巡回性 $\mathrm{tr}(fg) = \mathrm{tr}(gf)$：$\mathrm{tr}(fg) = \sum_i e^i(f(g(e_i))) = \sum_{i,j} e^i(f(e_j))e^j(g(e_i))$；添字 $i, j$ を入れ替えると $\mathrm{tr}(gf)$ に一致)
  - Example 6.2-2 (巡回性の確認：$f$ の行列 $A = \begin{pmatrix}1&2\\0&3\end{pmatrix}$、$g$ の行列 $B = \begin{pmatrix}4&0\\1&2\end{pmatrix}$；$\mathrm{tr}(AB) = \mathrm{tr}\begin{pmatrix}6&4\\3&6\end{pmatrix} = 12$；$\mathrm{tr}(BA) = \mathrm{tr}\begin{pmatrix}4&8\\1&8\end{pmatrix} = 12$ で一致を確認)

### §6.3 縮約（コントラクション）
**内容:** テンソルの階数を下げる縮約操作の定義

- **1. 縮約の一般的な定義**
  - Definition 6.3-1 (縮約：$(p,q)$ 型テンソル $T \in V^{\otimes p} \otimes (V^*)^{\otimes q}$ の $i$ 番目の反変成分と $j$ 番目の共変成分の縮約 $C^i{}_j(T)$ とは、双対ペアリング $\langle e^k, e_l \rangle = \delta^k{}_l$ を用いて第 $i$ 反変・第 $j$ 共変添字の和を取る操作；$(p-1, q-1)$ 型テンソルが得られる)
  - Proposition 6.3-1 (縮約の基底不変性：縮約操作は基底の選択によらない；ペアリング $\langle \cdot, \cdot \rangle$ が基底変換に対して不変なことから従う)
  - Proof (反変添字の変換則と共変添字の変換則が逆行列の関係にあるため、縮約での和が打ち消しあい不変になる；$C(T)^{i\cdots}{}_{j\cdots} = \sum_k T^{ki\cdots}{}_{kj\cdots}$ の変換を変換行列と逆行列の積が単位行列になることで示す)
  - Example 6.3-1 ($(2,1)$ 型テンソルの縮約：$T^{ij}{}_k \in \mathbb{R}^2\otimes\mathbb{R}^2\otimes(\mathbb{R}^2)^*$ の第 1 反変・第 1 共変縮約 $C^1{}_1(T)^j = \sum_i T^{ij}{}_i$；$T = e_1\otimes e_1\otimes e^1 + e_1\otimes e_2\otimes e^2 + e_2\otimes e_1\otimes e^1 + e_2\otimes e_2\otimes e^2$ の縮約を計算)

- **2. 縮約の応用とテンソルの「次数落とし」**
  - Example 6.3-2 (計量テンソルによる添字の上げ下げ：内積 $g \in (V^*)^{\otimes 2}$（成分 $g_{ij}$）と逆計量 $g^{-1} \in V^{\otimes 2}$（成分 $g^{ij}$）を用いた縮約 $v_i = \sum_j g_{ij}v^j$（添字下げ）；$\mathbb{R}^2$ の計量 $g = \begin{pmatrix}2&1\\1&3\end{pmatrix}$ に対して $v = (1,0)^T$ の共変成分を計算)
  - Remark (縮約とテンソル積の双対関係：縮約はテンソル積と双対な操作であり、テンソル積で次数を上げ縮約で次数を下げる；物理（一般相対性理論・弦理論）や幾何学（多様体論 4-5、微分幾何II 4-6）ではこの繰り返しでさまざまな不変量が構成される)
  - Example 6.3-3 (スカラー曲率の先取り：リーマン計量のリッチテンソル $R_{ij}$（$(0,2)$ 型）から計量逆行列 $g^{ij}$ との縮約でスカラー曲率 $R = \sum_{i,j} g^{ij}R_{ij}$ が得られる；この縮約が微分幾何II（4-6）の核心的な操作であることを予告)
