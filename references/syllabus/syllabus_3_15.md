# 3-15: 圏論

**前提科目:** 3-9（環論）、3-12（位相空間論II）

---

## Chapter 1: 圏の定義
**テーマ:** 数学のさまざまな分野を統一的に捉える枠組み

### §1.1 圏の公理
**内容:** 対象と射からなる圏の定義および結合律・単位律

- **1. 圏の定義**
  - Definition 1.1-1 (圏：圏 $\mathcal{C}$ は以下のデータからなる；対象（object）の集まり $\mathrm{Ob}(\mathcal{C})$；任意の 2 対象 $A, B$ に対する射（morphism）の集合 $\mathrm{Hom}_\mathcal{C}(A, B)$；任意の 3 対象 $A, B, C$ に対する合成 $\circ : \mathrm{Hom}(B, C) \times \mathrm{Hom}(A, B) \to \mathrm{Hom}(A, C)$；各対象 $A$ に対する恒等射 $\mathrm{id}_A \in \mathrm{Hom}(A, A)$；これらは結合律 $(h \circ g) \circ f = h \circ (g \circ f)$ と単位律 $\mathrm{id}_B \circ f = f = f \circ \mathrm{id}_A$ を満たす)
  - Example 1.1-1 (集合の圏 $\mathbf{Set}$：対象は（小）集合，射は写像，合成は通常の写像の合成，恒等射は恒等写像；結合律・単位律は写像の合成の性質から従う)
  - Remark (「集まり」と「集合」の注意：$\mathrm{Ob}(\mathcal{C})$ が（ラッセルのパラドックスを避けるため）集合ではなく真クラスになることがある；局所小圏（各 $\mathrm{Hom}(A,B)$ が集合）と小圏（$\mathrm{Ob}$ も集合）を区別する；本コースでは局所小圏を主に扱う)

- **2. 結合律と単位律の確認**
  - Proposition 1.1-1 (恒等射の一意性：対象 $A$ に対して $\mathrm{id}_A \circ f = f$ と $g \circ \mathrm{id}_A = g$ を満たす射 $i \in \mathrm{Hom}(A,A)$ は $i = \mathrm{id}_A$ に限る)
  - Proof ($i \circ \mathrm{id}_A = i$（$i$ が右単位律を満たす）かつ $i \circ \mathrm{id}_A = \mathrm{id}_A$（$\mathrm{id}_A$ が左単位律を満たす）より $i = \mathrm{id}_A$)
  - Example 1.1-2 (圏の公理の確認：群の圏 $\mathbf{Grp}$ で対象は群，射は群準同型；合成は準同型の合成（これも群準同型）；$\mathrm{id}_G = $ 恒等写像（群準同型）；結合律・単位律は写像の性質から従う)

### §1.2 圏の例
**内容:** 集合・群・位相空間・ベクトル空間など既知の構造の圏論的解釈

- **1. 代数系の圏**
  - Example 1.2-1 (主要な圏の一覧：$\mathbf{Set}$（集合と写像）；$\mathbf{Grp}$（群と群準同型）；$\mathbf{Ab}$（アーベル群と群準同型）；$\mathbf{Ring}$（環と環準同型）；$\mathbf{Mod}_R$（$R$-加群と加群準同型）；$\mathbf{Vect}_\mathbb{k}$（体 $\mathbb{k}$ 上のベクトル空間と線形写像）；各々の射は「構造を保存する写像」)
  - Example 1.2-2 (位相空間の圏 $\mathbf{Top}$：対象は位相空間，射は連続写像，合成は通常の合成；$\mathrm{id}_X$ は恒等写像（連続）；基本群 $\pi_1 : \mathbf{Top}_* \to \mathbf{Grp}$（Chapter 2 で関手として扱う）はこの圏から群の圏への写像)

- **2. 圏の多様な例**
  - Example 1.2-3 (順序集合の圏：前順序集合 $(P, \leq)$ を圏として解釈；対象は $P$ の元，射は $a \leq b$ のとき $\mathrm{Hom}(a,b) = \{(a,b)\}$（一元集合），$a \not\leq b$ のとき $\mathrm{Hom}(a,b) = \emptyset$；合成は $a \leq b \leq c$ から $a \leq c$（推移律），恒等射は $a \leq a$（反射律）；圏の公理が前順序の公理に対応)
  - Example 1.2-4 ($\mathbf{1}$ と $\mathbf{2}$ の圏：$\mathbf{1}$ は対象が一つで恒等射のみの圏（一元圏）；$\mathbf{2}$ は対象 $\{0, 1\}$ と恒等射と $0 \to 1$ の射のみ（最小の非自明な圏）；これらは後の極限・随伴の議論で基本的な役割を果たす)
  - Remark (圏論の哲学：圏論は「数学的構造の間の構造保存写像（射）」を中心に据える；集合の「元」ではなく射の「関係」によって対象を記述する視点の転換が圏論の本質；米田の補題（Chapter 4）でこの思想が定理として結晶化する)

### §1.3 同型射・単射・全射の圏論的定義
**内容:** 射を用いた同型・モノ射・エピ射の定義

- **1. 同型射とモノ射・エピ射**
  - Definition 1.3-1 (同型射：$f : A \to B$ が同型射であるとは，$g \circ f = \mathrm{id}_A$ かつ $f \circ g = \mathrm{id}_B$ を満たす射 $g : B \to A$ が存在すること；このとき $A \cong B$ と書き $g$ を $f$ の逆射という)
  - Definition 1.3-2 (モノ射（単射の圏論版）：$f : A \to B$ がモノ射であるとは，$f \circ g = f \circ h \Rightarrow g = h$（左キャンセル可能）；エピ射（全射の圏論版）：$g \circ f = h \circ f \Rightarrow g = h$（右キャンセル可能）)
  - Proposition 1.3-1 ($\mathbf{Set}$ でのモノ射・エピ射：$\mathbf{Set}$ ではモノ射 $=$ 単射，エピ射 $=$ 全射；$\mathbf{Ring}$ ではエピ射が全射とは限らない（$\mathbb{Z} \hookrightarrow \mathbb{Q}$ はエピ射だが全射でない）)
  - Proof ($\mathbf{Set}$ のモノ射 $\Leftrightarrow$ 単射：$f \circ g = f \circ h \Rightarrow g = h$ と，任意の集合 $\{*\}$ から $A$ への写像で $g(*), h(*)$ を任意の元として使う議論；エピ射 $\Leftrightarrow$ 全射：$g \circ f = h \circ f \Rightarrow g = h$ を全射の定義と結びつける)
  - Example 1.3-1 ($\mathbb{Z} \hookrightarrow \mathbb{Q}$ のエピ射性：環準同型 $g, h : \mathbb{Q} \to R$ が $g \circ \iota = h \circ \iota$ を満たすとき，$g(m/n) = g(m)/g(n) = h(m)/h(n) = h(m/n)$ より $g = h$；よって $\iota$ はエピ射だが非全射)

- **2. 同型の圏論的特徴**
  - Proposition 1.3-2 (同型射の一意性：$f : A \to B$ が同型射ならば逆射 $g$ は一意である)
  - Proof (2 つの逆射 $g, g'$ が存在すると仮定；$g = g \circ \mathrm{id}_B = g \circ (f \circ g') = (g \circ f) \circ g' = \mathrm{id}_A \circ g' = g'$)
  - Example 1.3-2 ($\mathbf{Top}$ での同型 $=$ 同相：$f : X \to Y$ が $\mathbf{Top}$ での同型射であることは，$f$ が連続かつ連続な逆写像をもつこと，すなわち同相写像と一致する；$\mathbf{Grp}$ での同型 $=$ 群同型；各圏で「同型射」が数学的な「同型」の概念と一致する)

### §1.4 積圏と反対圏
**内容:** 積圏や反対圏の構成および双対原理

- **1. 反対圏と双対原理**
  - Definition 1.4-1 (反対圏：圏 $\mathcal{C}$ の反対圏（双対圏）$\mathcal{C}^{op}$ は $\mathrm{Ob}(\mathcal{C}^{op}) = \mathrm{Ob}(\mathcal{C})$，$\mathrm{Hom}_{\mathcal{C}^{op}}(A,B) = \mathrm{Hom}_\mathcal{C}(B,A)$（射の向きを逆にする）；合成は $\mathcal{C}$ での合成の逆順)
  - Proposition 1.4-1 (双対原理：圏論の命題 $P$ が任意の圏で成立するならば，$P$ の射の向きをすべて逆にした命題 $P^{op}$（双対命題）も任意の圏で成立する；$\mathcal{C}$ で $P$ が成立 $\Leftrightarrow$ $\mathcal{C}^{op}$ で $P^{op}$ が成立)
  - Proof (圏 $\mathcal{C}$ で $P$ が成立するとき，$\mathcal{C}^{op}$ はやはり圏の公理を満たし，$\mathcal{C}^{op}$ で $P$ を解釈すると $\mathcal{C}$ での $P^{op}$ になることを定義から確認する)
  - Example 1.4-1 (双対原理の応用：モノ射の双対はエピ射；積（直積）の双対は余積（直和）；極限の双対は余極限；双対原理により一方を証明すれば他方が自動的に従う—圏論的証明の節約性)

- **2. 積圏**
  - Definition 1.4-2 (積圏：圏 $\mathcal{C}$ と $\mathcal{D}$ の積圏 $\mathcal{C} \times \mathcal{D}$；対象は $(A, B)$（$A \in \mathcal{C}$，$B \in \mathcal{D}$），射は $(f, g) : (A,B) \to (A',B')$（$f : A \to A'$，$g : B \to B'$），合成は成分ごと；双関手（$\mathcal{C} \times \mathcal{D} \to \mathcal{E}$ への関手）を定式化するための基礎)
  - Example 1.4-2 ($\mathbf{Set} \times \mathbf{Set}$：対象は集合の対 $(A, B)$，射は写像の対 $(f, g)$；テンソル積 $\otimes : \mathbf{Vect} \times \mathbf{Vect} \to \mathbf{Vect}$ はこの積圏から $\mathbf{Vect}$ への関手（双関手）として定式化できる（Chapter 2）)

---

## Chapter 2: 関手
**テーマ:** 構造を保つ写像を通じた数学の分野間の橋渡し

### §2.1 関手の定義
**内容:** 対象と射を保存する圏間の写像としての関手の定義

- **1. 共変関手と反変関手**
  - Definition 2.1-1 (共変関手：圏 $\mathcal{C}$ から圏 $\mathcal{D}$ への共変関手 $F : \mathcal{C} \to \mathcal{D}$ は，各対象 $A \in \mathcal{C}$ に $F(A) \in \mathcal{D}$ を，各射 $f : A \to B$ に $F(f) : F(A) \to F(B)$ を対応させ，$F(\mathrm{id}_A) = \mathrm{id}_{F(A)}$ と $F(g \circ f) = F(g) \circ F(f)$（合成の保存）を満たすもの)
  - Definition 2.1-2 (反変関手：$F : \mathcal{C} \to \mathcal{D}$ が反変関手であるとは，各射 $f : A \to B$ に $F(f) : F(B) \to F(A)$（射の向きが逆転）を対応させ，$F(\mathrm{id}_A) = \mathrm{id}_{F(A)}$ と $F(g \circ f) = F(f) \circ F(g)$ を満たすもの；$\mathcal{C}^{op}$ から $\mathcal{D}$ への共変関手と同一視できる)
  - Example 2.1-1 (恒等関手・定値関手：圏 $\mathcal{C}$ 上の恒等関手 $\mathrm{Id}_\mathcal{C} : \mathcal{C} \to \mathcal{C}$（各対象・射を自分自身に送る）；$D \in \mathcal{D}$ を固定した定値関手 $\Delta_D : \mathcal{C} \to \mathcal{D}$（すべての対象を $D$ に，すべての射を $\mathrm{id}_D$ に送る）)

- **2. hom 関手**
  - Definition 2.1-3 (hom 関手：局所小圏 $\mathcal{C}$ と固定対象 $A$ に対して共変 hom 関手 $\mathrm{Hom}(A, -) : \mathcal{C} \to \mathbf{Set}$；$B \mapsto \mathrm{Hom}(A,B)$，$f : B \to C$ に対して $f \circ - : \mathrm{Hom}(A,B) \to \mathrm{Hom}(A,C)$；反変 hom 関手 $\mathrm{Hom}(-, A) : \mathcal{C}^{op} \to \mathbf{Set}$；$B \mapsto \mathrm{Hom}(B,A)$，$f : B \to C$ に対して $- \circ f : \mathrm{Hom}(C,A) \to \mathrm{Hom}(B,A)$)
  - Proposition 2.1-1 (hom 関手の関手性：$\mathrm{Hom}(A,-)$ が関手の公理を満たすこと；$\mathrm{Hom}(A, \mathrm{id}_B) = \mathrm{id}_{\mathrm{Hom}(A,B)}$ と $\mathrm{Hom}(A, g \circ f) = \mathrm{Hom}(A,g) \circ \mathrm{Hom}(A,f)$)
  - Proof (合成保存：$h \in \mathrm{Hom}(A,B)$ に対して $\mathrm{Hom}(A, g \circ f)(h) = (g \circ f) \circ h = g \circ (f \circ h) = \mathrm{Hom}(A,g)(f \circ h) = (\mathrm{Hom}(A,g) \circ \mathrm{Hom}(A,f))(h)$)
  - Example 2.1-2 ($\mathbf{Vect}$ での hom 関手：$\mathrm{Hom}_\mathbf{k}(V,-) : \mathbf{Vect} \to \mathbf{Vect}$；$W \mapsto \mathrm{Hom}(V,W)$（線形写像空間）；$f : W \to W'$ に対して $f \circ - : \mathrm{Hom}(V,W) \to \mathrm{Hom}(V,W')$；双対関手 $\mathrm{Hom}(-,\mathbb{k})$ は反変関手で $V \mapsto V^*$)

### §2.2 関手の例
**内容:** 忘却関手や自由関手、基本群などの具体例

- **1. 忘却関手と自由関手**
  - Example 2.2-1 (忘却関手：$U : \mathbf{Grp} \to \mathbf{Set}$（群の「演算の忘却」），$G \mapsto |G|$（台集合），準同型 $f \mapsto f$（写像として）；同様に $U : \mathbf{Top} \to \mathbf{Set}$，$U : \mathbf{Ring} \to \mathbf{Ab}$（環の乗法を忘れる）；「構造を忘れる」方向の関手)
  - Example 2.2-2 (自由群関手：$F : \mathbf{Set} \to \mathbf{Grp}$，$S \mapsto F(S)$（$S$ を生成系とする自由群）；写像 $f : S \to T$ に対して $f$ を生成元への値で一意に拡張した群準同型；忘却関手 $U$ の「左随伴」として位置づけられる（Chapter 6）)

- **2. 基本群関手**
  - Example 2.2-3 (基本群関手：$\pi_1 : \mathbf{Top}_* \to \mathbf{Grp}$（基点付き位相空間の圏から群の圏へ）；$(X, x_0) \mapsto \pi_1(X, x_0)$；基点保存連続写像 $f : (X, x_0) \to (Y, y_0)$ に対して誘導準同型 $f_* : \pi_1(X,x_0) \to \pi_1(Y,y_0)$；$[\gamma] \mapsto [f \circ \gamma]$；3-12 で扱った内容の圏論的定式化)
  - Proposition 2.2-1 ($\pi_1$ の関手性：$(g \circ f)_* = g_* \circ f_*$ と $(\mathrm{id}_X)_* = \mathrm{id}_{\pi_1(X)}$ が成立する；3-12 §2.3 で確認した基本群の自然な性質が関手性として表現される)
  - Proof ($(g\circ f)_*([\gamma]) = [(g\circ f)\circ\gamma] = [g\circ(f\circ\gamma)] = g_*([f\circ\gamma]) = (g_*\circ f_*)([\gamma])$；ホモトピー類の操作から直接確認)
  - Remark (関手の力：$\pi_1$ が関手であることから「位相的な性質が群論的な問いに翻訳できる」；$\pi_1(\mathbf{pt}) = \{e\}$ より，空間が可縮なら基本群が自明；この「翻訳」を体系化したのが代数的トポロジー（4-8）)

### §2.3 忠実・充満・本質的全射
**内容:** 射の対応に関する性質と圏同値の特徴づけ

- **1. 忠実・充満・本質的全射の定義**
  - Definition 2.3-1 (忠実関手・充満関手：関手 $F : \mathcal{C} \to \mathcal{D}$ が忠実であるとは，各対 $(A,B)$ で $F_{A,B} : \mathrm{Hom}_\mathcal{C}(A,B) \to \mathrm{Hom}_\mathcal{D}(FA,FB)$ が単射；充満であるとは $F_{A,B}$ が全射；充満忠実とは $F_{A,B}$ が全単射)
  - Definition 2.3-2 (本質的全射：関手 $F : \mathcal{C} \to \mathcal{D}$ が本質的全射であるとは，任意の $D \in \mathcal{D}$ に対して $F(A) \cong D$ となる $A \in \mathcal{C}$ が存在すること)
  - Example 2.3-1 (忠実だが充満でない例：忘却関手 $U : \mathbf{Grp} \to \mathbf{Set}$ は忠実（群準同型の写像としての等価は群準同型の等価）だが充満でない（任意の写像が群準同型とは限らない）)
  - Example 2.3-2 (充満忠実な関手の例：部分圏の包含関手が充満忠実であること；$\mathbf{Ab} \hookrightarrow \mathbf{Grp}$（アーベル群の圏の包含）は充満忠実（アーベル群間の群準同型はアーベル群準同型と一致））

- **2. 圏同値**
  - Definition 2.3-3 (圏同値：関手 $F : \mathcal{C} \to \mathcal{D}$ が圏同値であるとは，関手 $G : \mathcal{D} \to \mathcal{C}$ と自然同型（Chapter 3）$\eta : \mathrm{Id}_\mathcal{C} \xrightarrow{\sim} G \circ F$，$\varepsilon : F \circ G \xrightarrow{\sim} \mathrm{Id}_\mathcal{D}$ が存在すること；圏同型（厳密な逆関手）より弱い関係)
  - Theorem 2.3-1 (圏同値の特徴づけ：$F : \mathcal{C} \to \mathcal{D}$ が圏同値であることと，$F$ が充満忠実かつ本質的全射であることは同値（AC のもとで）)
  - Proof ($\Rightarrow$：圏同値の定義から自然同型の可逆性を使って充満忠実性と本質的全射性を導く；$\Leftarrow$：本質的全射性から $G$ を構成し，充満忠実性から自然同型を構成する；選択公理を使って「$F(A) \cong D$ となる $A$ の選択」を行う)
  - Remark (圏同値 vs 圏同型：圏同型（$F \circ G = \mathrm{Id}$ かつ $G \circ F = \mathrm{Id}$）は厳格すぎて実用的でない；圏同値は「本質的に同じ」構造の間の適切な関係；数学では通常，圏同値が「同じ数学的内容をもつ」ことの基準として使われる)

---

## Chapter 3: 自然変換
**テーマ:** 関手間の関係性を規定する概念

### §3.1 自然変換の定義
**内容:** 関手間の変換と自然性の可換図式

- **1. 自然変換の定義**
  - Definition 3.1-1 (自然変換：関手 $F, G : \mathcal{C} \to \mathcal{D}$ の間の自然変換 $\eta : F \Rightarrow G$ とは，各対象 $A \in \mathcal{C}$ に射 $\eta_A : F(A) \to G(A)$（成分）を対応させ，任意の射 $f : A \to B$ に対して自然性条件 $G(f) \circ \eta_A = \eta_B \circ F(f)$ が成立するもの；$\eta_A$ を $A$ での $\eta$ の成分という)
  - Example 3.1-1 (自然変換の可換図式：自然性条件を図で表すと $F(A) \xrightarrow{F(f)} F(B)$，$G(A) \xrightarrow{G(f)} G(B)$，縦の矢印 $\eta_A : F(A) \to G(A)$ と $\eta_B : F(B) \to G(B)$；図式が可換であること（どの経路をたどっても同じ結果）が自然変換の核心)

- **2. 自然同型**
  - Definition 3.1-2 (自然同型：自然変換 $\eta : F \Rightarrow G$ の各成分 $\eta_A$ が同型射のとき，$\eta$ を自然同型という；$F \cong G$ と書く；「関手として同型」という概念)
  - Example 3.1-2 (自然変換の合成：自然変換 $\eta : F \Rightarrow G$ と $\mu : G \Rightarrow H$（$F,G,H : \mathcal{C} \to \mathcal{D}$）の合成 $\mu \circ \eta : F \Rightarrow H$ を各成分 $(\mu \circ \eta)_A = \mu_A \circ \eta_A$ で定める；自然性条件の確認：$H(f) \circ (\mu \circ \eta)_A = H(f) \circ \mu_A \circ \eta_A = \mu_B \circ G(f) \circ \eta_A = \mu_B \circ \eta_B \circ F(f) = (\mu \circ \eta)_B \circ F(f)$)

### §3.2 自然変換の例
**内容:** 行列式の自然性や二重双対への埋め込み

- **1. 行列式の自然性**
  - Example 3.2-1 (行列式の自然変換：$\det : GL_n \Rightarrow (-)^\times$；対象は可換環 $R$，$GL_n(R)$（可逆行列の群）と $R^\times$（単元群）；$f : R \to S$（環準同型）に対して $GL_n(f) : GL_n(R) \to GL_n(S)$（成分ごとに $f$ を適用）と $f|_{R^\times} : R^\times \to S^\times$；自然性：$\det(f(M)) = f(\det(M))$（行列式は成分の和・積で書けるので $f$ と可換）；これが「$\det$ は自然な変換」であることの意味)

- **2. 二重双対への埋め込み**
  - Example 3.2-2 (二重双対への自然な埋め込み：$\mathrm{ev} : \mathrm{Id}_{\mathbf{Vect}} \Rightarrow (-)^{**}$；各ベクトル空間 $V$ の成分 $\mathrm{ev}_V : V \to V^{**}$，$v \mapsto (\phi \mapsto \phi(v))$（3-11 §4.2 で扱った評価写像）；自然性：線形写像 $f : V \to W$ に対して $\mathrm{ev}_W \circ f = f^{**} \circ \mathrm{ev}_V$（可換図式の確認）；有限次元の場合，各 $\mathrm{ev}_V$ は同型なので $\mathrm{ev}$ は自然同型—「$V \cong V^{**}$ は自然」の意味)
  - Remark (「自然性」の重要性：3-11 §4.2 の「$V \cong V^*$ は自然でない（基底に依存）」と「$V \cong V^{**}$ は自然（基底不要）」の区別が，自然変換の言語で「$\mathrm{Id} \cong (-)^{**}$ は自然同型だが $\mathrm{Id} \cong (-)^*$ は自然変換すら存在しない」として精密に定式化される)

### §3.3 関手圏と合成
**内容:** 関手を対象，自然変換を射とする関手圏の構成と合成概念

- **1. 関手圏の構成**
  - Definition 3.3-1 (関手圏：小圏 $\mathcal{C}$ と圏 $\mathcal{D}$ に対して関手圏 $[\mathcal{C}, \mathcal{D}]$（または $\mathcal{D}^\mathcal{C}$）；対象は $\mathcal{C}$ から $\mathcal{D}$ への関手，射は自然変換，合成は §3.1 で定めた自然変換の合成，恒等射は各成分が $\mathrm{id}$ の自然変換 $\mathrm{id}_F$)
  - Proposition 3.3-1 (関手圏が圏の公理を満たす：自然変換の合成の結合律と単位律を自然性条件の可換図式から確認する)
  - Proof (結合律：$(\rho \circ \mu) \circ \eta$ と $\rho \circ (\mu \circ \eta)$ の各成分が $(\rho_A \circ \mu_A) \circ \eta_A = \rho_A \circ (\mu_A \circ \eta_A)$（$\mathcal{D}$ での結合律）から等しい；単位律も同様)
  - Example 3.3-1 ($\mathbf{Set}^\mathbf{2}$：圏 $\mathbf{2} = \{0 \to 1\}$ から $\mathbf{Set}$ への関手圏；関手 $F$ は写像 $F(0) \to F(1)$（$F(0 \to 1)$）の選択に相当；自然変換は可換四辺形を作る写像の対—これは $\mathbf{Set}$ の「射の圏（矢印圏）」と同値)

- **2. 水平合成（ウィスカリング）**
  - Definition 3.3-2 (水平合成：関手 $F, G : \mathcal{C} \to \mathcal{D}$ と $H, K : \mathcal{D} \to \mathcal{E}$ に対して自然変換 $\eta : F \Rightarrow G$，$\mu : H \Rightarrow K$ の水平合成 $\mu * \eta : H \circ F \Rightarrow K \circ G$；成分 $(\mu * \eta)_A = \mu_{G(A)} \circ H(\eta_A) = K(\eta_A) \circ \mu_{F(A)}$（自然性から等しい）)
  - Example 3.3-2 (水平合成と垂直合成の交換：垂直合成（§3.1）と水平合成（定義 3.3-2）は「interchange law」$(\mu' \circ \mu) * (\eta' \circ \eta) = (\mu' * \eta') \circ (\mu * \eta)$ を満たす；これは 2-圏（圏・関手・自然変換からなる三層構造）の公理の一部)

---

## Chapter 4: 米田の補題
**テーマ:** 対象がその上のすべての射により決定される性質

### §4.1 表現可能関手
**内容:** hom 関手として表現可能な関手の概念

- **1. 表現可能関手の定義**
  - Definition 4.1-1 (表現可能関手：局所小圏 $\mathcal{C}$ から $\mathbf{Set}$ への関手 $F : \mathcal{C} \to \mathbf{Set}$ が表現可能であるとは，対象 $A \in \mathcal{C}$ と自然同型 $\alpha : \mathrm{Hom}(A, -) \xrightarrow{\sim} F$ が存在すること；$(A, \alpha)$ を $F$ の表現という；反変関手 $F : \mathcal{C}^{op} \to \mathbf{Set}$ の表現可能性も $\mathrm{Hom}(-, A) \cong F$ で定義)
  - Example 4.1-1 (忘却関手の表現可能性：$\mathbf{Grp}$ の忘却関手 $U : \mathbf{Grp} \to \mathbf{Set}$ は表現可能；$U(G) = \mathrm{Hom}_\mathbf{Grp}(\mathbb{Z}, G)$（整数の加法群 $\mathbb{Z}$ からの準同型は像 $1 \mapsto g$ の選択で一対一に対応）；$\mathbb{Z}$ が $U$ の表現対象)
  - Example 4.1-2 (行列環の表現可能性：環 $R$ に対して $M_n(R) \cong \mathrm{Hom}_\mathbf{Ring}(\mathbb{Z}[x_{11},\ldots,x_{nn}]/(関係式), R)$；多項式環が $M_n$ 関手の表現対象)

- **2. 普遍元と表現可能性**
  - Definition 4.1-2 (普遍元：$F$ の表現 $(A, \alpha)$ に対して $\alpha_A(\mathrm{id}_A) \in F(A)$ を普遍元（universal element）という；逆に普遍元 $u \in F(A)$ から表現が再構成できる（$\alpha_B(f) = F(f)(u)$ で定義）)
  - Proposition 4.1-1 (普遍性による特徴づけ：$u \in F(A)$ が普遍元であるとは，任意の $B \in \mathcal{C}$ と $v \in F(B)$ に対してある一意な $f : A \to B$ で $F(f)(u) = v$ となること；普遍性（universal property）の一般的な定式化)
  - Proof (自然同型 $\alpha : \mathrm{Hom}(A,-) \xrightarrow{\sim} F$ と普遍元 $u = \alpha_A(\mathrm{id}_A)$ の対応関係；$\alpha_B(f) = F(f)(u)$ と自然性条件 $\alpha_B(f) = F(f)(\alpha_A(\mathrm{id}_A))$ が一致することを確認)
  - Remark (普遍性の遍在：自由群・テンソル積・直積・直和・完備化など，数学のあらゆる「自由/普遍」な構成が普遍元（普遍性）の言語で統一的に記述できる；圏論の核心的な視点)

### §4.2 米田の補題の主張と証明
**内容:** 自然変換の全体と関手の値の間の自然な全単射の証明

- **1. 米田の補題**
  - Theorem 4.2-1 (米田の補題：局所小圏 $\mathcal{C}$，対象 $A \in \mathcal{C}$，関手 $F : \mathcal{C} \to \mathbf{Set}$ に対して，自然な全単射
    $\mathrm{Nat}(\mathrm{Hom}(A,-), F) \cong F(A)$
    が成立する；左辺は hom 関手 $\mathrm{Hom}(A,-)$ から $F$ への自然変換の集合；対応は $\eta \mapsto \eta_A(\mathrm{id}_A)$)
  - Proof (全単射の構成：$\Phi : \mathrm{Nat}(\mathrm{Hom}(A,-),F) \to F(A)$，$\eta \mapsto \eta_A(\mathrm{id}_A)$；逆写像 $\Psi : F(A) \to \mathrm{Nat}(\mathrm{Hom}(A,-),F)$，$u \mapsto [\eta^u_B(f) = F(f)(u)]$；$\Psi(u)$ が自然変換であることの確認：$F(g)(\eta^u_B(f)) = F(g)(F(f)(u)) = F(g\circ f)(u) = \eta^u_C(g\circ f) = \eta^u_C(\mathrm{Hom}(A,g)(f))$；$\Phi \circ \Psi = \mathrm{id}$ と $\Psi \circ \Phi = \mathrm{id}$ の確認)
  - Example 4.2-1 (米田の補題の具体例：$\mathcal{C} = \mathbf{Grp}$，$A = \mathbb{Z}$，$F = U$（忘却関手）；$\mathrm{Nat}(\mathrm{Hom}(\mathbb{Z},-), U) \cong U(\mathbb{Z}) = \mathbb{Z}$；自然変換 $\eta$ は整数 $n \in \mathbb{Z}$ で完全に決まり，$\eta_G(f) = f(n)$（$f : \mathbb{Z} \to G$）という形；$n = 1$ が普遍元に対応)

- **2. 米田の補題の「自然性」**
  - Remark (米田の補題の自然性：対応 $\mathrm{Nat}(\mathrm{Hom}(A,-), F) \cong F(A)$ は $A$ と $F$ に関して自然（自然変換として定式化できる）；$A$ を変えると反変，$F$ を変えると共変の関手性をもつ；これを「双自然性（dinatural）」という)

### §4.3 米田埋め込みと応用
**内容:** 圏から関手圏への充満忠実な埋め込みとその応用

- **1. 米田埋め込み**
  - Theorem 4.3-1 (米田埋め込み：反変米田埋め込み $\mathcal{Y} : \mathcal{C} \to [\mathcal{C}^{op}, \mathbf{Set}]$，$A \mapsto \mathrm{Hom}(-,A)$（反変 hom 関手）は充満忠実な関手である；$A \not\cong B$ ならば $\mathrm{Hom}(-,A) \not\cong \mathrm{Hom}(-,B)$（対象の区別）；射の集合が自然変換と一対一対応する（充満忠実性）)
  - Proof (充満忠実性：$\mathrm{Hom}_\mathcal{C}(A,B) \xrightarrow{\sim} \mathrm{Nat}(\mathrm{Hom}(-,A), \mathrm{Hom}(-,B))$；米田の補題（$F = \mathrm{Hom}(-,B)$，反変版）より $\mathrm{Nat}(\mathrm{Hom}(-,A), \mathrm{Hom}(-,B)) \cong \mathrm{Hom}(-,B)(A) = \mathrm{Hom}(A,B)$；全単射が自然性をもつことも確認)
  - Example 4.3-1 (米田埋め込みの意味：任意の圏 $\mathcal{C}$ が関手の圏（プレ層圏）$[\mathcal{C}^{op}, \mathbf{Set}]$ の充満部分圏として埋め込める；「対象は射（の全体）によって決まる」という思想の定理化)

- **2. 表現可能関手の応用**
  - Example 4.3-2 (テンソル積の普遍性の再定式化：$V \otimes W$ の普遍性「$V \times W$ からの双線形写像は $V \otimes W$ からの線形写像と一対一対応する」は，$\mathrm{Hom}(V \otimes W, -) \cong \mathrm{Bilin}(V \times W, -)$（自然同型）として表現可能関手の言語で記述できる；米田埋め込みによってこの普遍性から $V \otimes W$ が（同型を除いて）一意に決まる)
  - Remark (米田の補題の哲学的含意：対象 $A$ は「$A$ へのすべての射」（あるいは「$A$ からのすべての射」）によって完全に決定される；要素ではなく関係性で対象を理解するという圏論の根本思想；「集合の元」より「他の対象との関係」が本質—ある種の「外部的認識論」)

---

## Chapter 5: 極限と余極限
**テーマ:** 積や普遍的構成の統一的な定式化

### §5.1 図式と錐
**内容:** 小圏による図式と錐・余錐の定義

- **1. 図式の定義**
  - Definition 5.1-1 (図式：小圏 $\mathcal{J}$（添字圏）と圏 $\mathcal{C}$ に対して，関手 $D : \mathcal{J} \to \mathcal{C}$ を $\mathcal{J}$-型図式という；$\mathcal{J}$ が離散圏（射は恒等射のみ）なら，$D$ は $\mathcal{C}$ の対象の族；$\mathcal{J} = \bullet \to \bullet \to \bullet$ なら図式は $\mathcal{C}$ の射の連鎖)
  - Example 5.1-1 (代表的な添字圏：離散 2 点圏（$\bullet \quad \bullet$）に対応する図式は対象のペア；並列射圏（$\bullet \rightrightarrows \bullet$）に対応する図式は並列な 2 射；コスパン圏（$\bullet \to \bullet \leftarrow \bullet$）に対応する図式はコスパン；これらで積・等化子・引き戻しが定義される)

- **2. 錐と余錐**
  - Definition 5.1-2 (錐：頂点 $N \in \mathcal{C}$ から図式 $D : \mathcal{J} \to \mathcal{C}$ への錐（cone）とは，各 $j \in \mathcal{J}$ に射 $\lambda_j : N \to D(j)$ を対応させ，$\mathcal{J}$ の射 $f : j \to k$ ごとに $D(f) \circ \lambda_j = \lambda_k$ が成立するもの；余錐（cocone）は射の向きを逆にしたもの：$\lambda_j : D(j) \to N$，$\lambda_k \circ D(f) = \lambda_j$)
  - Example 5.1-2 (積の錐：$\mathcal{J} = \{\bullet \quad \bullet\}$（離散 2 点圏），$D(1) = A$，$D(2) = B$；頂点 $N$ からの錐は射の対 $(N \to A, N \to B)$；錐の条件は図式の射がないので自動的に成立；「直積の普遍性」が錐として定式化される)

### §5.2 極限の定義と例
**内容:** 普遍性を持つ終錐としての極限と積等の例

- **1. 極限の定義**
  - Definition 5.2-1 (極限：図式 $D : \mathcal{J} \to \mathcal{C}$ の極限（limit）とは，終錐（terminal cone）；すなわち頂点 $L$ と射 $\{\pi_j : L \to D(j)\}$ からなる錐で，任意の錐 $(N, \{\lambda_j\})$ に対して一意な射 $u : N \to L$ が存在して $\pi_j \circ u = \lambda_j$（すべての $j$）が成立するもの；$L = \varprojlim D$ と書く)
  - Example 5.2-1 (積：離散圏 $\{1, 2\}$ 上の図式 $D(1) = A$，$D(2) = B$ の極限は $A \times B$（直積）；普遍性「$(N \to A, N \to B)$ に対して一意な $N \to A \times B$」が極限の定義と一致；射影 $\pi_1 : A \times B \to A$，$\pi_2 : A \times B \to B$ が極限の射)
  - Example 5.2-2 (等化子：並列射 $f, g : A \rightrightarrows B$ の極限は等化子 $\mathrm{Eq}(f,g) = \{a \in A \mid f(a) = g(a)\}$（$\mathbf{Set}$ の場合）；一般の圏での等化子は $e : E \to A$ で $f \circ e = g \circ e$ かつ普遍性をもつ)
  - Example 5.2-3 (引き戻し（ファイバー積）：コスパン $A \to C \leftarrow B$ の極限；$\mathbf{Set}$ では $A \times_C B = \{(a,b) \in A \times B \mid f(a) = g(b)\}$；位相空間や多様体での引き戻し・ファイバー積の一般化)

- **2. 終対象と積**
  - Example 5.2-4 (終対象：空圏（対象なし）への図式の極限；一元集合 $\{*\}$（$\mathbf{Set}$），自明群 $\{e\}$（$\mathbf{Grp}$）が対応する圏での終対象；任意の対象から唯一の射が存在する対象)
  - Remark (極限の存在と完備圏：すべての（小）図式の極限が存在する圏を完備圏という；$\mathbf{Set}$，$\mathbf{Grp}$，$\mathbf{Top}$ は完備；有限極限のみ存在するものを有限完備圏という—代数幾何でのスキームの圏などが例)

### §5.3 余極限の定義と例
**内容:** 普遍性を持つ始錐としての余極限と余積等の例

- **1. 余極限の定義と双対性**
  - Definition 5.3-1 (余極限：図式 $D : \mathcal{J} \to \mathcal{C}$ の余極限（colimit）とは，始余錐（initial cocone）；頂点 $L$ と射 $\{\iota_j : D(j) \to L\}$ で，任意の余錐 $(N, \{\lambda_j\})$ に対して一意な射 $u : L \to N$ が $u \circ \iota_j = \lambda_j$（すべての $j$）を満たすもの；$L = \varinjlim D$ と書く；余極限は $\mathcal{C}^{op}$ での極限の双対)
  - Example 5.3-1 (余積：離散圏上の図式の余極限は余積（coproduct）$A \sqcup B$；$\mathbf{Set}$ では非交和，$\mathbf{Grp}$ では自由積 $A * B$，$\mathbf{Ab}$ では直和 $A \oplus B$，$\mathbf{Top}$ では分離和；双対原理より積の証明がそのまま余積に転用できる)
  - Example 5.3-2 (余等化子と押し出し：並列射 $f, g : A \rightrightarrows B$ の余極限は余等化子 $\mathrm{Coeq}(f,g)$（$B$ を $f(a) \sim g(a)$ で割った商）；スパン $A \leftarrow C \rightarrow B$ の余極限は押し出し $A \sqcup_C B$（アマルガム積）；ファン・カンペンの定理（3-12 §4.2）の $\pi_1(\mathcal{U} \cup \mathcal{V}) \cong \pi_1(\mathcal{U}) *_{\pi_1(\mathcal{U} \cap \mathcal{V})} \pi_1(\mathcal{V})$ が押し出しで定式化される)

- **2. 余極限の応用**
  - Remark (圏論的な視点での代数構造：環論・群論・加群論で登場する「商」「テンソル積」「自由生成」などの構成が余極限として統一的に記述できる；ホモロジー代数（§8.4，5-10）ではこれらが系統的に展開される)

### §5.4 極限の保存
**内容:** 随伴関手による極限および余極限の保存定理

- **1. 関手による極限の保存**
  - Definition 5.4-1 (極限保存関手：関手 $F : \mathcal{C} \to \mathcal{D}$ が $\mathcal{J}$-型極限を保存するとは，$\mathcal{C}$ の任意の $\mathcal{J}$-型極限 $(L, \{\pi_j\})$ を $\mathcal{D}$ の $\mathcal{J}$-型極限 $(F(L), \{F(\pi_j)\})$ に送ること；すなわち $F$ が極限錐を極限錐に送ること)
  - Theorem 5.4-1 (右随伴は極限を保存し，左随伴は余極限を保存する：随伴 $F \dashv G$（$F : \mathcal{C} \to \mathcal{D}$，$G : \mathcal{D} \to \mathcal{C}$）において，$G$ は $\mathcal{D}$ の（存在する）すべての極限を保存し，$F$ は $\mathcal{C}$ の（存在する）すべての余極限を保存する；証明は Chapter 6 で随伴を定義した後に行う)
  - Example 5.4-1 (忘却関手の極限保存：$U : \mathbf{Grp} \to \mathbf{Set}$ は積（直積）を保存する；$U(G \times H) = U(G) \times U(H)$（台集合の積）；忘却関手が右随伴（$\mathbf{Set} \to \mathbf{Grp}$ の自由群関手が左随伴）として機能するので定理の特殊ケース)

- **2. 極限と余極限の相互関係**
  - Proposition 5.4-1 (hom 関手による極限保存：$\mathrm{Hom}(A, -)$ は極限を保存する；$\mathrm{Hom}(A, \varprojlim D) \cong \varprojlim \mathrm{Hom}(A, D(-))$；言い換えると「射 $A \to \varprojlim D$ は族 $\{A \to D(j)\}$（可換条件付き）と一対一対応」)
  - Proof (極限の普遍性から直接導く；極限の錐への射の全体が極限と自然に同一視されることを米田の補題の言葉で表現すると，$\mathrm{Hom}(A, \varprojlim D) \cong \mathrm{Cone}(A, D) \cong \varprojlim \mathrm{Hom}(A, D(-))$)

---

## Chapter 6: 随伴関手
**テーマ:** 数学に普遍的に現れる対の概念の定式化

### §6.1 随伴の定義
**内容:** hom 集合間の自然な全単射による随伴の定義

- **1. 随伴の定義（hom 集合による）**
  - Definition 6.1-1 (随伴：$F : \mathcal{C} \to \mathcal{D}$ と $G : \mathcal{D} \to \mathcal{C}$ が随伴関手対（$F \dashv G$，「$F$ は $G$ の左随伴，$G$ は $F$ の右随伴」）であるとは，$A \in \mathcal{C}$，$B \in \mathcal{D}$ に関して自然な全単射 $\mathrm{Hom}_\mathcal{D}(F(A), B) \cong \mathrm{Hom}_\mathcal{C}(A, G(B))$ が存在すること；「自然な」とは $A$ と $B$ について自然変換の意味で関手的に変化すること)
  - Example 6.1-1 (随伴の全単射の具体例：自由群関手 $F : \mathbf{Set} \to \mathbf{Grp}$ と忘却関手 $U : \mathbf{Grp} \to \mathbf{Set}$；$\mathrm{Hom}_\mathbf{Grp}(F(S), G) \cong \mathrm{Hom}_\mathbf{Set}(S, U(G))$；「自由群 $F(S)$ からの群準同型は生成元 $S$ の行き先の選択と一対一対応」という自由群の普遍性)

- **2. 単位・余単位による特徴づけ**
  - Definition 6.1-2 (随伴の単位と余単位：$F \dashv G$ において，自然変換 $\eta : \mathrm{Id}_\mathcal{C} \Rightarrow G \circ F$（単位，unit）と $\varepsilon : F \circ G \Rightarrow \mathrm{Id}_\mathcal{D}$（余単位，counit）が三角恒等式 $(\varepsilon F) \circ (F\eta) = \mathrm{id}_F$ と $(G\varepsilon) \circ (\eta G) = \mathrm{id}_G$ を満たす（ウィスカリングの記法）)
  - Theorem 6.1-1 (随伴の同値な定式化：$F \dashv G$ の定義（hom 全単射）と単位・余単位による三角恒等式の定式化は同値)
  - Proof (hom 全単射 $\Phi_{A,B} : \mathrm{Hom}(FA,B) \xrightarrow{\sim} \mathrm{Hom}(A,GB)$ から単位 $\eta_A = \Phi_{A,FA}(\mathrm{id}_{FA})$ と余単位 $\varepsilon_B = \Phi^{-1}_{GB,B}(\mathrm{id}_{GB})$ を定める；三角恒等式は全単射の逆写像の計算から直接確認する)
  - Example 6.1-2 (自由群随伴の単位・余単位：単位 $\eta_S : S \to U(F(S))$（集合 $S$ を自由群の生成元として埋め込む写像）；余単位 $\varepsilon_G : F(U(G)) \to G$（台集合を生成元とする自由群から元の群への「評価準同型」）；三角恒等式の確認)

### §6.2 随伴の例
**内容:** 自由と忘却，直積と冪などの随伴現象

- **1. 代数系の随伴**
  - Example 6.2-1 (随伴の例の一覧：自由関手 $\dashv$ 忘却関手（$\mathbf{Set}$-$\mathbf{Grp}$，$\mathbf{Set}$-$\mathbf{Ring}$ など）；Abel 化 $\dashv$ 忘却関手（$\mathbf{Grp}$-$\mathbf{Ab}$；$G \mapsto G/[G,G]$）；商体関手 $\dashv$ 忘却関手（$\mathbf{IntDom}$-$\mathbf{Field}$；$R \mapsto \mathrm{Frac}(R)$，3-9 §4.1 の内容）；完備化 $\dashv$ 忘却関手（$\mathbf{MetricSp}$）)

- **2. 積と冪の随伴（指数随伴）**
  - Example 6.2-2 (カルテシアン閉圏と指数随伴：$\mathbf{Set}$ では $A \times - \dashv (-)^A$（$A$ との積関手と $A$ を底とする冪集合関手）；$\mathrm{Hom}(A \times B, C) \cong \mathrm{Hom}(B, C^A)$（カリー化・カリー同型）；関数型プログラミングでのカリー化がこの随伴の計算機科学的表現)
  - Example 6.2-3 (テンソル積と内部 hom の随伴：$\mathbf{Mod}_R$ では $M \otimes_R - \dashv \mathrm{Hom}_R(M,-)$（テンソル積の左随伴性）；$\mathrm{Hom}_R(M \otimes_R N, P) \cong \mathrm{Hom}_R(N, \mathrm{Hom}_R(M,P))$；これが 3-11 の多重線形代数の圏論的定式化)

### §6.3 随伴の一意性と性質
**内容:** 随伴関手の一意性や合成，極限保存の性質

- **1. 随伴の一意性**
  - Theorem 6.3-1 (右随伴の一意性：$F : \mathcal{C} \to \mathcal{D}$ の右随伴が存在すれば，自然同型の意味で一意；同様に左随伴も一意)
  - Proof ($G$ と $G'$ がともに $F$ の右随伴とすると，$\mathrm{Hom}(FA,B) \cong \mathrm{Hom}(A,GB) \cong \mathrm{Hom}(A,G'B)$；米田の補題より $G(B) \cong G'(B)$（自然に）；$B$ について自然なので $G \cong G'$ の自然同型が得られる)
  - Example 6.3-1 (一意性の応用：自由群は「台集合を生成系とする群の中で普遍的なもの」という性質で一意に（同型を除いて）決まる；随伴の一意性がこれを保証する)

- **2. 随伴関手と極限の保存（再訪）**
  - Proof (Theorem 5.4-1 の証明：$F \dashv G$ とする；$D : \mathcal{J} \to \mathcal{D}$ の極限 $(L, \pi)$ に対して $(G(L), G(\pi))$ が $G \circ D$ の極限であることを hom 全単射と極限の普遍性から示す)
  - Proof ($\mathrm{Hom}_\mathcal{C}(A, G(L)) \cong \mathrm{Hom}_\mathcal{D}(F(A), L) \cong \mathrm{Cone}_\mathcal{D}(F(A), D) \cong \mathrm{Cone}_\mathcal{C}(A, G \circ D) \cong \mathrm{Hom}_\mathcal{C}(A, \varprojlim(G \circ D))$；米田の補題より $G(L) \cong \varprojlim(G \circ D)$（自然に）)
  - Remark (随伴関手定理の予告：逆に「（余）極限を保存する関手は（左/右）随伴をもつ」という随伴関手定理（Freydの定理）がある；関数解析のハーン-バナッハの定理・代数的トポロジーの Kan 拡張など，多くの数学的構成が随伴として理解できる)

---

## Chapter 7: モナド
**テーマ:** 随伴から生じる自己関手と代数構造の記述

### §7.1 モナドの定義
**内容:** 自己関手，乗法，単位からなる構造とモナドの公理

- **1. モナドの定義**
  - Definition 7.1-1 (モナド：圏 $\mathcal{C}$ 上のモナド $(T, \mu, \eta)$ は自己関手 $T : \mathcal{C} \to \mathcal{C}$ と自然変換 $\mu : T^2 \Rightarrow T$（乗法，multiplication）と $\eta : \mathrm{Id}_\mathcal{C} \Rightarrow T$（単位，unit）からなり，以下のモナド公理を満たす；
    結合律：$\mu \circ T\mu = \mu \circ \mu T$（$T^3 \Rightarrow T$ の 2 通りの計算が一致）；
    単位律：$\mu \circ T\eta = \mathrm{id}_T = \mu \circ \eta T$（$T \Rightarrow T$ として）)
  - Example 7.1-1 (べき集合モナド：$T = \mathcal{P}$ （べき集合関手）；$\eta_A : A \to \mathcal{P}(A)$，$a \mapsto \{a\}$；$\mu_A : \mathcal{P}(\mathcal{P}(A)) \to \mathcal{P}(A)$，$\mathcal{S} \mapsto \bigcup \mathcal{S}$（和集合）；モナド公理の確認：$\bigcup(\bigcup \mathcal{T}) = \bigcup(\bigcup_{S \in \mathcal{T}} S)$（結合律），$\bigcup_{S \in \{a\}} S = a$（単位律）)

- **2. モナドとモノイドの類比**
  - Remark (モナドはモノイドの一般化：モナドの公理はモノイド（乗法 $\mu$・単位 $\eta$・結合律・単位律）の公理と同型な構造をもつ；正確には「自己関手の圏でのモノイド対象」がモナドである；関手型プログラミング（Haskell など）ではモナドが計算エフェクトの記述に使われる)

### §7.2 随伴から生まれるモナド
**内容:** 随伴関手対からモナドが構成される仕組み

- **1. 随伴からモナドへ**
  - Theorem 7.2-1 (随伴からのモナドの構成：$F \dashv G$（$F : \mathcal{C} \to \mathcal{D}$，$G : \mathcal{D} \to \mathcal{C}$）から圏 $\mathcal{C}$ 上のモナド $(T, \mu, \eta)$ が $T = G \circ F$，$\eta$（随伴の単位），$\mu = G\varepsilon F$（$\varepsilon$ は余単位，ウィスカリング）として定まる)
  - Proof (モナド公理の確認：結合律は三角恒等式から $G\varepsilon F \circ GF(G\varepsilon F) = G\varepsilon F \circ G(\varepsilon F \circ F\eta F) = $ … と計算して確認；単位律も同様に三角恒等式から)
  - Example 7.2-1 (べき集合モナドの随伴による構成：$F : \mathbf{Set} \to \mathbf{Set}^{op}$，$A \mapsto A$（対象はそのまま、射を反転），$G : \mathbf{Set}^{op} \to \mathbf{Set}$，$A \mapsto \mathcal{P}(A)$；$F \dashv G$ の随伴から $G \circ F = \mathcal{P}$ がべき集合モナドを与える；あるいは Hom 関手の随伴として記述する方法もある)

- **2. モナドの代数的側面**
  - Example 7.2-2 (自由群モナド：$F \dashv U$（自由群 $\dashv$ 忘却）から $T = U \circ F$（集合 $S$ に対して「$S$ の元の語の全体（等価類）」）；$T(S)$ は $S$ を生成系とする自由群の台集合；$\eta_S : S \to T(S)$（生成元の埋め込み），$\mu_S : T(T(S)) \to T(S)$（語からなる語の評価：入れ子になった語を展開して平坦化する）)

### §7.3 クライスリ圏と Eilenberg-Moore 圏
**内容:** モナドを用いた 2 つの特徴的な圏の構成

- **1. クライスリ圏**
  - Definition 7.3-1 (クライスリ圏：モナド $(T, \mu, \eta)$ に対してクライスリ圏 $\mathcal{C}_T$；対象は $\mathcal{C}$ と同じ；$\mathrm{Hom}_{\mathcal{C}_T}(A, B) = \mathrm{Hom}_\mathcal{C}(A, T(B))$（$T$-射）；合成 $g \circ_T f = \mu_C \circ T(g) \circ f$（$f : A \to T(B)$，$g : B \to T(C)$）；恒等射は $\eta_A : A \to T(A)$)
  - Example 7.3-1 (べき集合モナドのクライスリ圏：$\mathcal{C}_{\mathcal{P}}$ の射 $A \to B$ は $A \to \mathcal{P}(B)$（各元 $a \in A$ を $B$ の部分集合に送る関係）；これは二項関係の圏と同値；関係の合成がクライスリ圏の合成に対応)

- **2. Eilenberg-Moore 圏（代数の圏）**
  - Definition 7.3-2 (Eilenberg-Moore 代数：モナド $(T, \mu, \eta)$ の代数（algebra）は対象 $A$ と射 $\alpha : T(A) \to A$（構造射）で，$\alpha \circ \eta_A = \mathrm{id}_A$（単位律）と $\alpha \circ \mu_A = \alpha \circ T(\alpha)$（結合律）を満たすもの；Eilenberg-Moore 圏 $\mathcal{C}^T$ は代数を対象，代数の準同型（$T$-準同型）を射とする圏)
  - Example 7.3-2 (自由群モナドの Eilenberg-Moore 圏：モナド $T = U \circ F$（自由群）の代数は「乗法 $T(G) = U(F(G)) \to G$ をもつ群 $G$」；$F(G)$ は $G$ の元を生成系とする自由群で，構造射は「評価準同型」；モナドの代数が通常の群と同値（$\mathcal{C}^T \simeq \mathbf{Grp}$）—「群論はモナドの代数論」という圏論的視点)

---

## Chapter 8: アーベル圏と完全系列
**テーマ:** 加法的な構造を持つ圏の公理化

### §8.1 加法圏とアーベル圏の定義
**内容:** 加法圏の定義とアーベル圏の公理

- **1. 加法圏の定義**
  - Definition 8.1-1 (加法圏：圏 $\mathcal{A}$ が加法圏であるとは，各 hom 集合 $\mathrm{Hom}(A,B)$ がアーベル群の構造（射の和）をもち，合成が双線形（$h \circ (f+g) = h \circ f + h \circ g$ と $(f+g) \circ h = f \circ h + g \circ h$）であること；零対象 $0$（始対象かつ終対象）が存在し，有限積と有限余積が一致して双積（biproduct）$A \oplus B$ をなすこと)
  - Example 8.1-1 ($\mathbf{Ab}$（アーベル群の圏）は加法圏：$\mathrm{Hom}(A,B)$ は群準同型の和 $(f+g)(x) = f(x)+g(x)$ でアーベル群；零対象は自明群 $\{0\}$；$A \oplus B$ は直和（積かつ余積）)

- **2. アーベル圏の公理**
  - Axiom 8.1-2 (アーベル圏の公理：加法圏 $\mathcal{A}$ がアーベル圏であるとは，(i) 任意の射がモノ射・エピ射への分解（像分解）をもつ；(ii) 任意の射が核（kernel）と余核（cokernel）をもつ；(iii) 任意のモノ射は核であり，エピ射は余核である)
  - Example 8.1-2 ($\mathbf{Ab}$ はアーベル圏：群準同型 $f : A \to B$ の核 $\ker f = \{a \in A \mid f(a) = 0\}$，余核 $\mathrm{coker}\,f = B/\mathrm{Im}\,f$；像分解 $A \twoheadrightarrow \mathrm{Im}\,f \hookrightarrow B$；アーベル圏の公理をすべて満たすことを確認)

### §8.2 アーベル圏の例
**内容:** アーベル群や加群の圏などの実例

- **1. 加群の圏**
  - Example 8.2-1 ($\mathbf{Mod}_R$ はアーベル圏：環 $R$ 上の加群の圏；加群準同型の和，直和，核・余核・像がすべて定まる；3-9（環論）で扱った加群の言語の圏論的定式化；$R = \mathbb{Z}$ なら $\mathbf{Mod}_\mathbb{Z} \cong \mathbf{Ab}$)
  - Example 8.2-2 (アーベル圏でない例：$\mathbf{Grp}$（群の圏）は加法圏でない（hom 集合がアーベル群の構造をもたない）；$\mathbf{Set}$ は加法圏でない（射の和が定義されない）；アーベル圏の条件は「代数的なホモロジー計算が可能な最小の圏的構造」)

- **2. 関手圏のアーベル圏性**
  - Proposition 8.2-1 ($\mathcal{A}$ がアーベル圏で $\mathcal{C}$ が小圏ならば関手圏 $[\mathcal{C}, \mathcal{A}]$ もアーベル圏：各対象ごとに演算を定義すると pointwise にアーベル圏の構造が引き継がれる)
  - Proof (hom 集合の加群構造：$(\eta + \mu)_A = \eta_A + \mu_A$ と定める；核・余核の pointwise な定義；自然変換の自然性が演算で保存されることを確認)

### §8.3 完全系列とスネークの補題
**内容:** 完全系列の概念とホモロジー代数の重要補題

- **1. 完全系列の定義**
  - Definition 8.3-1 (完全系列：アーベル圏の対象と射の列 $\cdots \to A \xrightarrow{f} B \xrightarrow{g} C \to \cdots$ が完全であるとは，各連続する 2 射について $\mathrm{Im}(f) = \ker(g)$ が成立すること；$gf = 0$ と $\ker g \subset \mathrm{Im} f$ の両方が必要)
  - Example 8.3-1 (短完全系列：$0 \to A \xrightarrow{f} B \xrightarrow{g} C \to 0$ が短完全系列であるとは $f$ が単射，$g$ が全射，かつ $\mathrm{Im}f = \ker g$；$\mathbf{Ab}$ では「$C \cong B/f(A)$」という含意；群論の同型定理（3-8・3-9）の完全系列言語への翻訳)
  - Example 8.3-2 (完全系列の例：$0 \to \mathbb{Z} \xrightarrow{\times n} \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z} \to 0$（$n$ 倍写像と商写像）；$0 \to \ker f \to A \xrightarrow{f} B \to \mathrm{coker}\,f \to 0$（任意の射 $f$ から）)

- **2. スネークの補題**
  - Theorem 8.3-1 (スネークの補題：可換図式 $0 \to A' \to B' \to C' \to 0$（上段），$0 \to A \to B \to C \to 0$（下段），縦射 $\alpha : A' \to A$，$\beta : B' \to B$，$\gamma : C' \to C$ があるとき，長完全系列 $0 \to \ker\alpha \to \ker\beta \to \ker\gamma \xrightarrow{\partial} \mathrm{coker}\,\alpha \to \mathrm{coker}\,\beta \to \mathrm{coker}\,\gamma \to 0$ が存在する；$\partial$ は「蛇の写像」)
  - Proof (蛇の写像の構成：$c' \in \ker\gamma$ に対して，$B'$ に $c'$ を持ち上げ（全射性），$B$ に送り（$\beta$），$A$ への持ち上げ（$B \to C$ の核の完全性），$\mathrm{coker}\,\alpha$ に射影する；各ステップで選択の任意性が消えることを確認する）
  - Example 8.3-3 (スネークの補題の応用：短完全系列 $0 \to A' \to B' \to C' \to 0$ と $0 \to A \to B \to C \to 0$，縦準同型から $6$-項完全系列が得られる；ホモロジー代数での「コネクティング写像」の源泉)

### §8.4 ホモロジー代数への接続
**内容:** 鎖複体やコホモロジーの定義と分野間の橋渡し

- **1. 鎖複体とホモロジー**
  - Definition 8.4-1 (鎖複体：アーベル圏 $\mathcal{A}$ の鎖複体 $C_\bullet$ とは，対象の列 $\cdots \to C_{n+1} \xrightarrow{d_{n+1}} C_n \xrightarrow{d_n} C_{n-1} \to \cdots$ で $d_n \circ d_{n+1} = 0$（境界射の二重合成が零）を満たすもの；コホモロジー複体（$C^\bullet$）は添字方向が逆)
  - Definition 8.4-2 (ホモロジー群：$n$ 次ホモロジーは $H_n(C_\bullet) = \ker d_n / \mathrm{Im}\, d_{n+1}$（アーベル圏での商）；完全性の「欠如」を測る量；$H_n = 0 \Leftrightarrow d_n$ の前後が完全であること)
  - Example 8.4-1 (単体ホモロジーの導入：位相空間の三角形分割から鎖複体 $C_\bullet$ を構成；$C_n$ は $n$ 次元単体の形式的整数結合；$d_n$ は境界写像；$H_n$ が位相不変量（代数的トポロジー 4-8 のホモロジー群）に対応)
  - Remark (ホモロジー代数の圏論的意義：アーベル圏の公理が「核・像・商が適切に振る舞う」ことを保証し，スネークの補題や完全系列の操作が一般的に機能する；3-9 の環論・加群論での具体的な計算が，圏論的言語で抽象化・統一される；ホモロジー代数（5-10）では導来圏・射影分解・Ext・Tor 関手が体系化される)

- **2. 長完全系列と接続**
  - Theorem 8.4-1 (短完全系列からの長完全系列：短完全系列 $0 \to A \to B \to C \to 0$ に（各次元で適用可能な）鎖複体の構造があるとき，ホモロジーの長完全系列 $\cdots \to H_n(A) \to H_n(B) \to H_n(C) \xrightarrow{\partial} H_{n-1}(A) \to \cdots$ が得られる；$\partial$ はスネークの補題から構成されるコネクティング写像)
  - Proof (スネークの補題を各次数で繰り返す；コネクティング写像の自然性（選択によらないこと）と長完全系列の完全性を段階的に確認する)
  - Example 8.4-2 (マイヤー-ビエトリス系列の予告：空間 $X = U \cup V$ の分割から短完全系列 $0 \to C_\bullet(U \cap V) \to C_\bullet(U) \oplus C_\bullet(V) \to C_\bullet(X) \to 0$ が得られる；定理 8.4-1 を適用すると $\cdots \to H_n(U\cap V) \to H_n(U) \oplus H_n(V) \to H_n(X) \to H_{n-1}(U\cap V) \to \cdots$（マイヤー-ビエトリス系列）；代数的トポロジー（4-8）への接続)
