# 3-14: 数理論理学I

**前提科目:** 2-4（素朴集合論）

---

## Chapter 1: 命題論理
**テーマ:** 命題と論理結合子に基づく形式的推論

### §1.1 命題と論理結合子
**内容:** 命題変数と論理演算の定義および真理表

- **1. 命題変数と論理結合子の定義**
  - Definition 1.1-1 (命題変数：真（$\top$）または偽（$\bot$）のいずれかの値をとる記号 $p, q, r, \ldots$；命題論理の最小構成単位)
  - Definition 1.1-2 (論理結合子：命題変数や論理式を組み合わせる演算子；否定 $\neg$、連言 $\land$、選言 $\lor$、含意 $\to$、双条件 $\leftrightarrow$ の 5 種類；$\neg\varphi$、$\varphi\land\psi$、$\varphi\lor\psi$、$\varphi\to\psi$、$\varphi\leftrightarrow\psi$ の形の式を論理式と呼ぶ)
  - Definition 1.1-3 (論理式の帰納的定義：(i) 命題変数 $p$ は論理式；(ii) $\varphi$ が論理式ならば $\neg\varphi$ も論理式；(iii) $\varphi, \psi$ が論理式ならば $(\varphi\land\psi)$、$(\varphi\lor\psi)$、$(\varphi\to\psi)$、$(\varphi\leftrightarrow\psi)$ も論理式；以上の操作の有限回の合成で得られるものに限る)
  - Example 1.1-1 (論理式の例：$p$、$\neg p$、$(p\land q)$、$(p\to(q\lor r))$ は論理式；$p\,q$（結合子なし）や $\land p$（前置の $\land$）は論理式でない；括弧省略の慣習：$\neg$ の結合が最強、次に $\land$、$\lor$、$\to$、$\leftrightarrow$ の順)

- **2. 真理値割り当てと真理表**
  - Definition 1.1-4 (付値：命題変数全体の集合から $\{\top, \bot\}$ への写像 $v$；$v$ を各結合子に対して帰納的に拡張すると任意の論理式の真理値 $v(\varphi) \in \{\top, \bot\}$ が定まる；$v(\neg\varphi) = \top \Leftrightarrow v(\varphi) = \bot$；$v(\varphi\land\psi) = \top \Leftrightarrow v(\varphi) = \top$ かつ $v(\psi) = \top$ など)
  - Example 1.1-2 (含意の真理表：$p\to q$ は $p = \top, q = \bot$ のときのみ $\bot$、それ以外は $\top$；「$p$ が真で $q$ が偽のとき偽」という日常言語の「ならば」とは異なり、前件が偽のときは常に真になることに注意)
  - Example 1.1-3 (真理表による評価：$\neg p \to (p \to q)$ の真理表を $p, q$ の全 4 通りの組み合わせについて計算；$p = \bot, q = \bot$ のとき $\neg p = \top$、$p \to q = \top$ なので全体 $\top$；すべての行で $\top$ になることを確認（トートロジー）)

### §1.2 トートロジーと論理的同値
**内容:** 常に真となる論理式とド・モルガン則等の同値変形

- **1. トートロジーと矛盾式**
  - Definition 1.2-1 (トートロジー：すべての付値 $v$ に対して $v(\varphi) = \top$ となる論理式 $\varphi$；$\models \varphi$ と書く；矛盾式（contradiction）はすべての付値で $\bot$ になる論理式)
  - Example 1.2-1 (基本的なトートロジー：排中律 $p\lor\neg p$；二重否定 $\neg\neg p\leftrightarrow p$；仮言三段論法 $((p\to q)\land(q\to r))\to(p\to r)$；各々の真理表を計算してすべての行で $\top$ になることを確認)
  - Example 1.2-2 (矛盾式の例：$p\land\neg p$ は $p = \top$ でも $p = \bot$ でも $\bot$ になる；これが「爆発律（ex falso quodlibet）」の根拠：矛盾からは何でも導ける)

- **2. 論理的同値と基本変換則**
  - Definition 1.2-2 (論理的同値：$\varphi$ と $\psi$ が論理的同値であるとは $\models \varphi\leftrightarrow\psi$；すべての付値で同じ真理値をとること；$\varphi\equiv\psi$ と書く)
  - Proposition 1.2-1 (ド・モルガン則とその他の基本同値：$\neg(\varphi\land\psi)\equiv\neg\varphi\lor\neg\psi$；$\neg(\varphi\lor\psi)\equiv\neg\varphi\land\neg\psi$；$\varphi\to\psi\equiv\neg\varphi\lor\psi$；$\varphi\leftrightarrow\psi\equiv(\varphi\to\psi)\land(\psi\to\varphi)$)
  - Proof (各同値を真理表で確認する；例えば $\neg(\varphi\land\psi)$ と $\neg\varphi\lor\neg\psi$ について 4 通りの付値すべてで一致することを列挙する)
  - Example 1.2-3 (論理式の簡略化：$\neg(p\to q)$ を同値変形する；$\neg(p\to q)\equiv\neg(\neg p\lor q)\equiv p\land\neg q$；「$p$ ならば $q$」の否定は「$p$ かつ $q$ でない」)

### §1.3 推論規則と証明体系
**内容:** モーダスポネンス等の推論規則とヒルベルト流公理系の導入

- **1. 推論規則**
  - Definition 1.3-1 (推論規則：前提となる論理式の集合から結論の論理式を導く操作；$\Gamma \vdash \varphi$ は仮定集合 $\Gamma$ から $\varphi$ が証明可能であることを表す（$\vdash$ は構文論的帰結）)
  - Definition 1.3-2 (モーダスポネンス（前件肯定式）：$\varphi$ と $\varphi\to\psi$ が成立するとき $\psi$ を結論する推論規則；$\dfrac{\varphi\quad\varphi\to\psi}{\psi}$（MP）と表記する；命題論理の最も基本的な推論規則)
  - Example 1.3-1 (モーダスポネンスの例：「$\varphi$：今日は雨が降っている」「$\varphi\to\psi$：雨が降っていれば地面が濡れる」から「$\psi$：地面が濡れている」を導く；日常的推論の形式化)

- **2. ヒルベルト流公理体系**
  - Definition 1.3-3 (ヒルベルト流公理体系：以下の公理スキーマと推論規則（MP）のみで構成される証明体系；公理スキーマは $\varphi, \psi, \chi$ を任意の論理式として
    (H1) $\varphi\to(\psi\to\varphi)$；
    (H2) $(\varphi\to(\psi\to\chi))\to((\varphi\to\psi)\to(\varphi\to\chi))$；
    (H3) $(\neg\varphi\to\neg\psi)\to(\psi\to\varphi)$)
  - Example 1.3-2 (ヒルベルト流の形式証明の例：$\varphi\to\varphi$ の証明；(H1) を $\varphi, (\varphi\to\varphi)$ に適用して $\varphi\to((\varphi\to\varphi)\to\varphi)$；(H2) を適用；MP を 2 回使って $\varphi\to\varphi$ を導く具体的な手順を記述)
  - Remark (証明体系の意図：ヒルベルト流は公理の数を最小限に抑え推論規則を MP だけにする設計；証明は長くなるが体系の性質（完全性・健全性）の解析が容易になる；自然演繹（§4.1）と同等の証明能力をもつ)

### §1.4 健全性と完全性（命題論理）
**内容:** 証明可能性と恒真性の同値関係の概要

- **1. 健全性定理**
  - Theorem 1.4-1 (命題論理の健全性：ヒルベルト流体系で証明可能な論理式はすべてトートロジーである；$\vdash\varphi \Rightarrow \models\varphi$)
  - Proof (公理スキーマ (H1)〜(H3) がトートロジーであることを真理表で確認する；MP がトートロジーを保存することを確認する（$v(\varphi) = \top$ かつ $v(\varphi\to\psi) = \top$ ならば $v(\psi) = \top$）；証明の長さに関する帰納法で一般の証明列に拡張)
  - Remark (健全性の意味：「形式的に証明できる」ことは「常に真である」ことを含意する；証明が「間違ったもの」を導かないという体系の無矛盾性の基礎)

- **2. 完全性定理（命題論理版）**
  - Theorem 1.4-2 (命題論理の完全性：トートロジーはすべてヒルベルト流体系で証明可能である；$\models\varphi \Rightarrow \vdash\varphi$；健全性と合わせて $\vdash\varphi \Leftrightarrow \models\varphi$)
  - Proof (対偶：$\nvdash\varphi$（証明不能）ならば $\nvDash\varphi$（偽になる付値が存在）を示す；$\varphi$ を反証する付値の構成は、$\{\neg\varphi\}$ を極大無矛盾集合に拡張してから真理値を読み取る手法（ヘンキン構成の命題論理版）で行う；詳細は述語論理の §5.2 で類似の議論を展開)
  - Example 1.4-1 (健全性と完全性の組み合わせ：排中律 $p\lor\neg p$ はトートロジー（真理表で確認）だから完全性より $\vdash p\lor\neg p$；逆にヒルベルト流で証明できるものは真理表で確認できる（健全性）；両方向が保証される)

---

## Chapter 2: 述語論理の構文
**テーマ:** 量化子を含む論理式の厳密な構成

### §2.1 言語の設定
**内容:** 定数・関数・述語記号による形式言語と項の定義

- **1. 形式言語の構成要素**
  - Definition 2.1-1 (一階述語論理の言語：言語 $\mathcal{L}$ は以下の記号の集合；定数記号 $c_0, c_1, \ldots$（0 引数の「名前」）；$n$ 引数関数記号 $f^{(n)}_0, f^{(n)}_1, \ldots$（$n \geq 1$）；$n$ 引数述語記号 $P^{(n)}_0, P^{(n)}_1, \ldots$（$n \geq 1$）；変数記号 $x, y, z, x_0, x_1, \ldots$；論理記号 $\neg, \land, \lor, \to, \leftrightarrow, \forall, \exists, =$)
  - Example 2.1-1 (順序体の言語：$\mathcal{L}_{\mathrm{ord}} = \{0, 1, +, \cdot, <\}$；定数 $0, 1$；2 引数関数 $+, \cdot$；2 引数述語 $<$；$\mathbb{Q}$、$\mathbb{R}$ はどちらもこの言語の構造（モデル）として解釈できる)

- **2. 項の帰納的定義**
  - Definition 2.1-2 (項：変数 $x$ は項；定数記号 $c$ は項；$t_1, \ldots, t_n$ が項かつ $f$ が $n$ 引数関数記号ならば $f(t_1, \ldots, t_n)$ は項；「個体」を表す表現の集合)
  - Example 2.1-2 (項の具体例：$\mathcal{L}_{\mathrm{ord}}$ での項；$0$（定数）、$x$（変数）、$x+1$（$+(x, 1)$）、$(x\cdot y) + z$ などは項；$x < y$ は述語の適用なので項でない（論理式になる）；$+$ だけ（引数なし）は項でない)
  - Remark (項と論理式の区別：項は「個体を指示する表現」（数・集合・点など）であり、論理式は「真偽をもつ表現」；自然言語の名詞句と命題文に対応する；この区別が一階述語論理の基本構造を支える)

### §2.2 論理式と量化子
**内容:** 全称・存在量化子を含む述語論理式の帰納的構成

- **1. 原子論理式と複合論理式**
  - Definition 2.2-1 (原子論理式：$t_1, t_2$ が項のとき $t_1 = t_2$（等号原子式）；$P^{(n)}$ が $n$ 引数述語記号で $t_1, \ldots, t_n$ が項のとき $P^{(n)}(t_1, \ldots, t_n)$（述語原子式）；これらを原子論理式という)
  - Definition 2.2-2 (論理式の帰納的定義：原子論理式は論理式；$\varphi, \psi$ が論理式ならば $\neg\varphi$、$\varphi\land\psi$、$\varphi\lor\psi$、$\varphi\to\psi$、$\varphi\leftrightarrow\psi$ は論理式；$\varphi$ が論理式かつ $x$ が変数のとき $\forall x\,\varphi$ と $\exists x\,\varphi$ は論理式)
  - Example 2.2-1 (論理式の例：$\forall x\,(x = x)$（反射律）；$\forall x\,\forall y\,(x < y \to \exists z\,(x < z \land z < y))$（稠密性）；$\exists x\,\forall y\,(y = x \lor x < y)$（最小元の存在）；各々を $\mathbb{Q}$ で解釈したときの真偽を考える)

- **2. 量化子の解釈と記法**
  - Example 2.2-2 (全称量化子と存在量化子の例：$\forall x\,P(x)$ は「すべての $x$ について $P(x)$ が成立」；$\exists x\,P(x)$ は「$P(x)$ を満たす $x$ が存在する」；$\forall x\,\exists y\,(x < y)$ は「任意の $x$ に対してそれより大きな $y$ が存在」；$\exists y\,\forall x\,(x < y)$ は「すべての $x$ より大きな上界 $y$ が存在」；前者は $\mathbb{N}$ で真、後者は偽)
  - Remark (量化子の順序：$\forall x\,\exists y$ と $\exists y\,\forall x$ は一般に異なる意味をもつ；$\forall x\,\exists y\,(y = x+1)$ は「各 $x$ に後継者がある」（$\mathbb{N}$ で真）；$\exists y\,\forall x\,(y = x+1)$ は「すべての $x$ に対して同じ後継者がある」（偽）；量化子の順序に注意することが述語論理の核心のひとつ)

### §2.3 自由変数と束縛変数
**内容:** 変数スコープの区別と代入の自由性条件

- **1. 自由変数と束縛変数の定義**
  - Definition 2.3-1 (変数の出現：論理式 $\varphi$ 中での変数 $x$ の出現が束縛出現であるとは $\forall x$ または $\exists x$ のスコープ内に現れること；そうでない出現を自由出現という；自由出現をもつ変数を $\varphi$ の自由変数という；$\mathrm{FV}(\varphi)$ で自由変数の集合を表す)
  - Example 2.3-1 (自由変数と束縛変数の識別：$P(x) \to \forall y\,Q(x, y)$ において $x$ は自由変数（$\forall$ で束縛されていない）、$y$ は束縛変数；$\forall x\,(P(x)\land Q(x,y))$ において $x$ は束縛、$y$ は自由；同じ変数記号でも出現箇所によって自由・束縛が異なる)

- **2. 代入と自由性条件**
  - Definition 2.3-2 (代入：$\varphi[t/x]$ は $\varphi$ 中の変数 $x$ の自由出現をすべて項 $t$ で置き換えた論理式；代入が自由（free for $x$ in $\varphi$）であるとは、$t$ 中の変数が $x$ の置き換え後に束縛されないこと）
  - Proposition 2.3-1 (代入が自由でない例の判定：$\varphi = \exists y\,(x < y)$、$t = y$；$\varphi[y/x] = \exists y\,(y < y)$（自由変数 $y$ が $\exists y$ に捕捉される）；これは「$x$ より大きな $y$ が存在する」とは異なる意味になってしまう；$t = z$（$z$ は $\varphi$ に出現しない変数）なら自由な代入）
  - Proof (定義から：$t = y$ の変数 $y$ は $\varphi$ 中の $\exists y$ のスコープ内に捕捉される；自由性条件は意味論的に代入の意味を保つために必要)
  - Remark (自由性条件の重要性：量化子の公理 $\forall x\,\varphi\to\varphi[t/x]$（全称例化）を使う際、$t$ が $x$ に対して自由でないと論理式の意味が変わってしまう；正しい代入は意味を保存する操作)

### §2.4 文と理論
**内容:** 自由変数を持たない論理式（文）と公理系の概念

- **1. 文と理論の定義**
  - Definition 2.4-1 (文：自由変数を持たない論理式（$\mathrm{FV}(\varphi) = \emptyset$）を文（sentence）という；文はモデルが与えられると真偽が一意に定まる（§3.2）；自由変数をもつ論理式はモデルと変数への付値の両方が必要）
  - Definition 2.4-2 (理論：文の集合 $T$ を理論という；$T$ をその言語で構成された「公理系」として用いる；$T \models \varphi$（$T$ の意味論的帰結）と $T \vdash \varphi$（$T$ からの証明可能性）の区別が重要）
  - Example 2.4-1 (理論の具体例：群論の公理 $T_{\mathrm{Grp}} = \{\forall x\,\forall y\,\forall z\,((x\cdot y)\cdot z = x\cdot(y\cdot z)),\, \forall x\,(e\cdot x = x),\, \forall x\,\exists y\,(y\cdot x = e)\}$；$T_{\mathrm{Grp}} \models \forall x\,(x\cdot e = x)$ が成立することを確認（群の公理から右単位元を導ける））

- **2. 無矛盾性と完全性**
  - Definition 2.4-3 (無矛盾理論：理論 $T$ が無矛盾（consistent）であるとは $T \nvdash \bot$（矛盾を証明できない）こと；同値にモデルが存在すること（完全性定理の帰結，§5.1）)
  - Example 2.4-2 (無矛盾性の判定：$T_{\mathrm{Grp}}$ は無矛盾；$\{e, \cdot\}$ を整数加法群で解釈するとモデルが存在し，モデルがあれば無矛盾；一方 $T_{\mathrm{Grp}} \cup \{\forall x\,(x = e)\}$（一元群のみ）も無矛盾；$T_{\mathrm{Grp}} \cup \{\exists x\,(x \neq e)\} \cup \{\forall x\,\forall y\,(x\cdot y = y\cdot x)\} \cup \{\forall x\,\forall y\,\forall z\,\forall w\,((x\cdot y = z\cdot w)\to(x = z))\}$ は矛盾する（アーベル単純群の矛盾を考える）)

---

## Chapter 3: 述語論理の意味論
**テーマ:** モデルにおける真偽の判定

### §3.1 構造（モデル）の定義
**内容:** 対象領域と記号解釈からなる構造の定義

- **1. $\mathcal{L}$-構造の定義**
  - Definition 3.1-1 ($\mathcal{L}$-構造：言語 $\mathcal{L}$ の構造（モデル）$\mathcal{M}$ は以下から構成される；対象領域 $M$（空でない集合）；各定数記号 $c$ に対応する元 $c^\mathcal{M} \in M$；各 $n$ 引数関数記号 $f$ に対応する関数 $f^\mathcal{M} : M^n \to M$；各 $n$ 引数述語記号 $P$ に対応する関係 $P^\mathcal{M} \subset M^n$)
  - Example 3.1-1 (整数の構造：$\mathcal{L} = \{0, 1, +, \cdot, <\}$ の構造 $\mathbb{Z}$；対象領域 $\mathbb{Z}$（整数全体）；$0^\mathbb{Z} = 0$、$1^\mathbb{Z} = 1$；$+^\mathbb{Z}$ は通常の加法、$\cdot^\mathbb{Z}$ は通常の乗法；$<^\mathbb{Z}$ は通常の大小関係；$\mathbb{Q}$ と $\mathbb{R}$ も同じ言語の異なる構造をなす)
  - Example 3.1-2 (有限構造の例：$M = \{0, 1, 2\}$、$+^\mathcal{M}$ を $\mathbb{Z}/3\mathbb{Z}$ の加法として定義した構造；$\mathcal{L} = \{0, +\}$ の構造として群公理を満たすことを確認)

- **2. 項と論理式の解釈**
  - Definition 3.1-2 (付値と項の解釈：構造 $\mathcal{M}$ と付値 $\sigma : \mathrm{Var} \to M$（変数を対象領域の元に対応させる）のもとで、項 $t$ の解釈 $t^{\mathcal{M},\sigma} \in M$ を帰納的に定義する；$x^{\mathcal{M},\sigma} = \sigma(x)$；$c^{\mathcal{M},\sigma} = c^\mathcal{M}$；$f(t_1,\ldots,t_n)^{\mathcal{M},\sigma} = f^\mathcal{M}(t_1^{\mathcal{M},\sigma},\ldots,t_n^{\mathcal{M},\sigma})$)
  - Example 3.1-3 (項の解釈の計算：$\mathcal{L} = \{0, 1, +\}$ の構造 $\mathbb{Z}$、$\sigma(x) = 3$；項 $(x+1)+1$ の解釈は $((3+1)+1) = 5$；$\sigma(y) = 7$ のとき $x + y$ の解釈は $3 + 7 = 10$；付値が変数の値を決め、構造が演算の意味を決める)

### §3.2 充足関係の定義
**内容:** 付値に基づく論理式の充足関係のタルスキによる定義

- **1. 充足関係の帰納的定義**
  - Definition 3.2-1 (充足関係（タルスキの定義）：構造 $\mathcal{M}$ と付値 $\sigma$ のもとで論理式 $\varphi$ が充足される（$\mathcal{M}, \sigma \models \varphi$）ことの帰納的定義；
    (i) $\mathcal{M}, \sigma \models t_1 = t_2 \Leftrightarrow t_1^{\mathcal{M},\sigma} = t_2^{\mathcal{M},\sigma}$（$M$ での等号）；
    (ii) $\mathcal{M}, \sigma \models P(t_1,\ldots,t_n) \Leftrightarrow (t_1^{\mathcal{M},\sigma},\ldots,t_n^{\mathcal{M},\sigma}) \in P^\mathcal{M}$；
    (iii) $\mathcal{M}, \sigma \models \neg\varphi \Leftrightarrow \mathcal{M}, \sigma \not\models \varphi$；
    (iv) $\mathcal{M}, \sigma \models \varphi\land\psi \Leftrightarrow \mathcal{M}, \sigma \models \varphi$ かつ $\mathcal{M}, \sigma \models \psi$；
    (v) $\mathcal{M}, \sigma \models \forall x\,\varphi \Leftrightarrow$ すべての $a \in M$ に対して $\mathcal{M}, \sigma[x \mapsto a] \models \varphi$（$\sigma[x \mapsto a]$ は $x$ のみ $a$ に変えた付値）；
    (vi) $\mathcal{M}, \sigma \models \exists x\,\varphi \Leftrightarrow$ ある $a \in M$ で $\mathcal{M}, \sigma[x\mapsto a] \models \varphi$)
  - Example 3.2-1 (充足関係の計算：$\mathcal{M} = \mathbb{N}$（自然数）、$\sigma(x) = 3$；$\mathcal{M}, \sigma \models \exists y\,(y > x)$：$y = 4$ として $4 > 3$ が $\mathbb{N}$ で真だから充足；$\mathcal{M}, \sigma \models \forall y\,(y > x)$：$y = 0$ として $0 > 3$ が偽だから非充足)

- **2. 文の真偽と充足可能性**
  - Definition 3.2-2 (文の真偽と充足可能性：文 $\varphi$（自由変数なし）は付値 $\sigma$ によらず充足関係が定まる；$\mathcal{M} \models \varphi$（$\mathcal{M}$ で $\varphi$ が真）と書く；論理式 $\varphi$ が充足可能であるとは $\mathcal{M}, \sigma \models \varphi$ となる $\mathcal{M}$ と $\sigma$ が存在すること)
  - Example 3.2-2 (充足可能だが妥当でない式：$\exists x\,(x > 0)$ は $\mathbb{N}$ で真（充足可能）だが $\{0\}$ を対象領域にした構造では偽（妥当でない）；$\forall x\,(x = x)$ はすべての構造で真（妥当式））

### §3.3 論理的帰結と妥当式
**内容:** 全モデルでの真偽（意味論的帰結）と妥当性の概念

- **1. 妥当式と論理的帰結**
  - Definition 3.3-1 (妥当式：すべての構造 $\mathcal{M}$ とすべての付値 $\sigma$ に対して $\mathcal{M}, \sigma \models \varphi$ が成立するとき $\varphi$ を妥当式（valid）という；$\models\varphi$ と書く；述語論理の「トートロジー」に相当する)
  - Definition 3.3-2 (論理的帰結：文の集合 $T$ と文 $\varphi$ について、$T \models \varphi$（$T$ の意味論的帰結）とは $T$ のすべての文が真となるすべての構造で $\varphi$ も真になること)
  - Example 3.3-1 (妥当式の例：$\forall x\,(x = x)$（反射律）；$\forall x\,\forall y\,(x = y \to y = x)$（等号の対称律）；$(\forall x\,\varphi\to\varphi[t/x])$（全称例化，$t$ が $x$ に対して自由なとき）；これらは任意の構造・付値で真)

- **2. 反例によるモデル理論的論証**
  - Example 3.3-2 ($T \not\models \varphi$ の示し方：$T = \{\forall x\,\exists y\,(x < y)\}$（上界なし）と $\varphi = \exists y\,\forall x\,(x < y)$（最大元の存在）について $T \not\models \varphi$；$\mathcal{M} = (\mathbb{Z}, <)$ では $T$ が真で $\varphi$ が偽；反例となるモデルが存在)
  - Remark (モデル理論の方法：「$T \models \varphi$」の証明には $T$ が真ならば $\varphi$ も真であることを示す；「$T \not\models \varphi$」の証明には $T$ を満たすが $\varphi$ を満たさないモデルを一つ構成する（反例）；モデル構成の技法はモデル理論（4-17 でさらに発展）の核心)

---

## Chapter 4: 自然演繹と公理的証明
**テーマ:** 形式的な証明図と推論規則

### §4.1 自然演繹体系
**内容:** 仮定の導入・除去に基づく直感的な証明体系

- **1. 自然演繹の推論規則**
  - Definition 4.1-1 (自然演繹（ND）体系：仮定の集合 $\Gamma$ から論理式 $\varphi$ への証明を木構造（証明木）として表す体系；各結合子に対して「導入規則（introduction rule）」と「除去規則（elimination rule）」が対をなす；代表的な規則：
    $\land$-導入 $\dfrac{\varphi\quad\psi}{\varphi\land\psi}$；$\land$-除去 $\dfrac{\varphi\land\psi}{\varphi}$；$\to$-導入 $\dfrac{[\varphi]\\\psi}{\varphi\to\psi}$（仮定 $\varphi$ を解放）；$\to$-除去（MP）$\dfrac{\varphi\quad\varphi\to\psi}{\psi}$)
  - Example 4.1-1 (自然演繹の証明例：$p\land q \vdash q\land p$ の証明木；$\land$-除去で $q$、$p$ を取り出し、$\land$-導入で $q\land p$ を構成；直感的な「$p$ かつ $q$ が成立するなら $q$ かつ $p$ が成立する」を形式化)

- **2. 量化子規則と仮定の管理**
  - Definition 4.1-2 ($\forall$-導入と $\forall$-除去：$\forall$-導入規則 $\dfrac{\varphi}{\forall x\,\varphi}$（$x$ が仮定の自由変数に現れない）；$\forall$-除去（全称例化）$\dfrac{\forall x\,\varphi}{\varphi[t/x]}$（$t$ が $x$ に対して自由）；同様に $\exists$-導入と $\exists$-除去（場合分け）規則が定義される)
  - Example 4.1-2 ($\forall x\,P(x)\to P(c)$ の証明：$[\forall x\,P(x)]$ を仮定として導入；$\forall$-除去で $P(c)[c/x] = P(c)$ を導く；$\to$-導入で仮定を解放して $\forall x\,P(x)\to P(c)$)
  - Remark (自然演繹の特徴：ヒルベルト流と比べて証明がより直感的で「数学の実際の証明」に近い構造をもつ；仮定の導入と解放（discharge）が証明木の「枝」として可視化される；カリー＝ハワード対応により型理論・プログラミング言語理論と深く結びつく)

### §4.2 ヒルベルト流公理体系
**内容:** 公理スキーマを用いた形式的証明体系とその同値性

- **1. 述語論理のヒルベルト流公理体系**
  - Definition 4.2-1 (述語論理のヒルベルト流公理体系：命題論理の公理スキーマ (H1)〜(H3)（§1.3）に加えて量化子に関する公理スキーマを追加する；
    (H4) $\forall x\,\varphi\to\varphi[t/x]$（$t$ が $x$ に対して自由なとき）；
    (H5) $\forall x\,(\varphi\to\psi)\to(\varphi\to\forall x\,\psi)$（$x \notin \mathrm{FV}(\varphi)$）；
    推論規則は MP のみ（量化子の一般化規則 $\dfrac{\varphi}{\forall x\,\varphi}$ を追加することもある）)
  - Example 4.2-1 (ヒルベルト流での全称例化：(H4) を $\varphi = P(x)$、$t = c$ に適用して $\forall x\,P(x) \to P(c)$ が公理スキーマの例示として直接得られる；自然演繹での同じ証明より形式的に簡潔)

- **2. 自然演繹とヒルベルト流の同値性**
  - Theorem 4.2-1 (証明体系の同値性：自然演繹とヒルベルト流公理体系は同じ論理的帰結関係を与える；$\Gamma \vdash_\mathrm{ND} \varphi \Leftrightarrow \Gamma \vdash_\mathrm{H} \varphi$)
  - Proof (帰納的な変換：ND の各推論規則をヒルベルト流での有限の証明列に翻訳し、逆にヒルベルト流の各公理を ND の証明木として構成する；どちらの方向も規則・公理の数に関する帰納法で示す)
  - Remark (証明体系の選択：ヒルベルト流は公理の数が少なく体系の性質の証明に都合がよい；自然演繹は証明の構造が直感的で「カット除去定理」のような証明論的性質の解析に向いている；本コースでは両者を場面に応じて用いる)

### §4.3 $\vdash$ と $\models$ の区別
**内容:** 構文論的証明と意味論的真偽の差異

- **1. 構文論と意味論の区別**
  - Definition 4.3-1 ($\vdash$ と $\models$ の定義の整理：$T \vdash \varphi$（$T$ から $\varphi$ が証明可能）は純粋に記号操作（公理・推論規則の有限列）として定義される；$T \models \varphi$（$T$ の意味論的帰結）はすべてのモデルにおける真偽として定義される；前者は構文論的（syntactic）、後者は意味論的（semantic）な概念)
  - Example 4.3-1 ($\vdash$ と $\models$ のそれぞれの計算：$T = \{\forall x\,(P(x)\to Q(x)),\, P(a)\}$；$T \vdash Q(a)$：全称例化で $P(a)\to Q(a)$、MP で $Q(a)$；$T \models Q(a)$：$T$ のすべてのモデルで $P(a)\to Q(a)$ が真かつ $P(a)$ が真ならば $Q(a)$ が真（充足関係の定義より）)

- **2. 健全性と完全性の意義**
  - Proposition 4.3-1 (健全性の言い換え：$T \vdash \varphi \Rightarrow T \models \varphi$；証明によって導かれたものは意味論的に正しい)
  - Proposition 4.3-2 (完全性の言い換え：$T \models \varphi \Rightarrow T \vdash \varphi$；意味論的に正しいものはすべて証明できる)
  - Proof (健全性：ヒルベルト流公理がすべて妥当式であることと，MP が意味論的帰結を保存することを確認する；完全性は §5.1〜5.2 で扱う)
  - Remark (完全性定理の衝撃：$\vdash$ と $\models$ は定義が全く異なる概念であり，どちらも「同じ」ものを決めるという事実は非自明；この定理はゲーデルが 1929 年に博士論文で証明し，数理論理学の基礎を確立した)

---

## Chapter 5: 完全性定理
**テーマ:** 構文と意味論の一致

### §5.1 完全性定理の主張
**内容:** 証明可能性と論理的帰結が一致するというゲーデルの定理

- **1. 完全性定理の主張**
  - Theorem 5.1-1 (一階述語論理の完全性定理（ゲーデル，1930）：$T \models \varphi \Rightarrow T \vdash \varphi$；等価な形として「$T$ が充足可能 $\Leftrightarrow$ $T$ が無矛盾」（$T$ にモデルが存在することと $T$ が矛盾を導かないことが同値）)
  - Proof (健全性（Proposition 4.3-1）と合わせて $T\vdash\varphi\Leftrightarrow T\models\varphi$ が成立；証明の概略は §5.2 で扱う)
  - Remark (完全性定理と健全性定理の非対称性：健全性（$\vdash \Rightarrow \models$）は公理の妥当性と MP の性質から比較的容易に証明できる；完全性（$\models \Rightarrow \vdash$）はモデルを「構成」する必要があり深い議論を要する；ヘンキン構成（§5.2）がその核心)

- **2. 完全性定理の応用**
  - Corollary 5.1-1 (無矛盾ならばモデルが存在：$T$ が無矛盾ならば $T$ を充足するモデルが存在する)
  - Proof ($T$ が無矛盾 $\Leftrightarrow$ $T \nvdash \bot$ $\Leftrightarrow$ $T \not\models \bot$（完全性・健全性）$\Leftrightarrow$ $T$ のモデルが存在する（$\bot$ を偽にするモデルは $T$ のモデル））
  - Example 5.1-1 (完全性定理の応用：群論の公理 $T_\mathrm{Grp}$ は無矛盾（$\mathbb{Z}$ がモデル）だから $T_\mathrm{Grp}$ からは矛盾が証明できない；逆に「$T_\mathrm{Grp} \models \forall x\,(x^2 = e) \to \forall x\,\forall y\,(xy=yx)$」（位数 $2$ の元しかない群は可換）は $T_\mathrm{Grp}$ の意味論的帰結なので証明可能)

### §5.2 証明の概略（ヘンキン構成）
**内容:** 定数追加と極大無矛盾理論を用いたモデル構成法

- **1. ヘンキン構成のアイデア**
  - Definition 5.2-1 (ヘンキン定数と証人性質：完全性定理の証明では，理論 $T$ の言語を拡張して新たな定数記号（ヘンキン定数）$c_\varphi$ を $\exists x\,\varphi(x)$ に一つずつ対応させて追加する；拡張された理論 $T^+$ に $\exists x\,\varphi(x)\to\varphi[c_\varphi/x]$（$c_\varphi$ が存在証人となる）を追加する；これを「証人性質を持つ」という)
  - Proposition 5.2-1 (極大無矛盾理論の存在：$T$ が無矛盾ならば $T$ を含む極大無矛盾理論（$T$ に含まれる文の集合で，任意の文 $\varphi$ について $\varphi \in \Delta$ または $\neg\varphi \in \Delta$ が成立し，かつ無矛盾なもの）$\Delta$ が存在する；ツォルンの補題を使う)
  - Proof (無矛盾な理論の族（包含順序）に対してツォルンの補題を適用；鎖の和が無矛盾であることと，文の全体 $\mathcal{L}$ が可算集合なら帰納的構成も可能なことを確認)

- **2. ヘンキンモデルの構成**
  - Theorem 5.2-1 (ヘンキンモデルの構成：証人性質を持つ極大無矛盾理論 $\Delta$ に対して，対象領域を閉項の同値類（$t \sim s \Leftrightarrow (t=s) \in \Delta$）として構造 $\mathcal{M}_\Delta$ を構成すると，$\mathcal{M}_\Delta \models \Delta$（$\Delta$ の全文が真）が成立する（規範的モデル）)
  - Proof (論理式の複雑さに関する帰納法：原子式について充足関係が定義から成立することを確認；$\neg$、$\land$、$\exists$ の各場合を $\Delta$ の極大無矛盾性と証人性質を使って順に確認する；量化子の場合が最も手間がかかり，$\exists x\,\varphi \in \Delta$ ならば証人定数 $c_\varphi$ に対して $\varphi[c_\varphi/x] \in \Delta$ という証人性質から $\mathcal{M}_\Delta \models \exists x\,\varphi$ を導く)
  - Remark (構成の意味：$\mathcal{M}_\Delta$ は純粋に「証明可能な文」から構成された「構文的なモデル」；完全性定理の証明は「証明できる」という操作から「真である」という意味論的対象を作り出す構成的手法)

### §5.3 コンパクト性定理
**内容:** 有限部分の充足可能性から全体の充足可能性を導く定理

- **1. コンパクト性定理の主張と証明**
  - Theorem 5.3-1 (コンパクト性定理：論理式の集合 $T$ が充足可能 $\Leftrightarrow$ $T$ の任意の有限部分集合が充足可能)
  - Proof ($\Rightarrow$：$T$ のモデル $\mathcal{M}$ が存在すれば，任意の有限部分集合も $\mathcal{M}$ でそのまま充足される；$\Leftarrow$：対偶として，$T$ が充足不可能（$T \models \bot$）ならば有限部分集合も充足不可能を示す；完全性定理より $T \vdash \bot$；証明は有限列なので有限個の公理しか使わない；その有限部分集合が充足不可能)
  - Example 5.3-1 (コンパクト性定理の応用：$T = \{c_0 \neq c_1, c_0 \neq c_2, c_1 \neq c_2, \ldots, c_i \neq c_j\,(i\neq j),\ldots\}$；任意の有限部分集合は有限個の異なる定数を要求するので有限集合でモデルが作れる；コンパクト性より $T$ 全体にも（無限集合の）モデルが存在する（無限集合の「モデル理論的存在証明」）)

- **2. コンパクト性定理の応用**
  - Example 5.3-2 (「すべての有限グラフに $k$-彩色可能ならば無限グラフにも $k$-彩色可能」：グラフの $k$-彩色を論理式で定式化；任意の有限部分グラフの $k$-彩色可能性から，コンパクト性定理で無限グラフ全体の彩色可能性を導く；グラフ理論（A-1）への応用)
  - Remark (コンパクト性の「コンパクト」：位相空間のコンパクト性（任意の開被覆から有限部分被覆が取れる）に名称が由来する；実際にストーン空間を介した位相的な証明も存在する；モデル理論・代数・組合せ論で広く使われる強力な道具)

### §5.4 レーベンハイム＝スコーレムの定理
**内容:** 可算模型の存在と非標準モデル（スコーレムのパラドックス）

- **1. レーベンハイム＝スコーレムの定理**
  - Theorem 5.4-1 (下方レーベンハイム＝スコーレムの定理：可算言語 $\mathcal{L}$ の理論 $T$ がモデルをもつならば，$T$ は可算なモデル（対象領域が可算集合）をもつ)
  - Proof (ヘンキン構成（§5.2）のモデル $\mathcal{M}_\Delta$ の対象領域は閉項の同値類；可算言語では閉項は高々可算個あるので $\mathcal{M}_\Delta$ は可算モデル；あるいはレーベンハイムのスコーレム化（Skolemization）による証明)
  - Theorem 5.4-2 (上方レーベンハイム＝スコーレムの定理：$T$ が無限モデルをもつならば，任意の基数 $\kappa \geq |\mathcal{L}| + \aleph_0$ に対して濃度 $\kappa$ のモデルをもつ；「大きなモデルはいくらでも作れる」)
  - Proof (コンパクト性定理の応用；$T$ に新たな定数 $c_\alpha$（$\alpha < \kappa$）と「$c_\alpha \neq c_\beta$（$\alpha \neq \beta$）」を追加した理論の有限部分集合が充足可能なことを確認してコンパクト性を適用)

- **2. スコーレムのパラドックスと非標準モデル**
  - Example 5.4-1 (スコーレムのパラドックス：ZF 集合論は可算モデルをもつ（レーベンハイム＝スコーレム）が，ZF 内部では「実数全体は非可算」が証明できる；「モデルから見た内部的非可算性」と「外部から見た可算性」が矛盾しない—「可算であること」は相対的な概念で，ZF の「実数の非可算性の証明」は可算モデルの内部でも成り立つが，外部から見ると可算個しかない)
  - Example 5.4-2 (非標準自然数モデル：ペアノ算術 $\mathrm{PA}$ に「$c > 0$、$c > 1$、$c > 2$、$\ldots$」（$c$ が標準自然数より大きい）という無限個の文を加えた理論 $T$；任意の有限部分はモデルをもつのでコンパクト性より $T$ にモデルが存在；対象領域に「無限大の自然数」$c$ を含む非標準自然数モデルが得られる)

---

## Chapter 6: 不完全性定理
**テーマ:** 形式的算術における証明不可能性

### §6.1 形式的算術 PA
**内容:** ペアノ算術の形式体系と表現力の概観

- **1. ペアノ算術 PA の公理**
  - Definition 6.1-1 (ペアノ算術（PA）：言語 $\mathcal{L}_\mathrm{PA} = \{0, S, +, \cdot\}$（$0$：定数，$S$：後継者関数，$+, \cdot$：2 引数関数）の理論；公理：
    (PA1) $\forall x\,(S(x) \neq 0)$；
    (PA2) $\forall x\,\forall y\,(S(x) = S(y) \to x = y)$；
    (PA3) $\forall x\,(x + 0 = x)$；
    (PA4) $\forall x\,\forall y\,(x + S(y) = S(x + y))$；
    (PA5) $\forall x\,(x\cdot 0 = 0)$；
    (PA6) $\forall x\,\forall y\,(x\cdot S(y) = x\cdot y + x)$；
    (PA7) 帰納法スキーマ：$(\varphi[0/x]\land\forall x\,(\varphi\to\varphi[S(x)/x]))\to\forall x\,\varphi$（すべての論理式 $\varphi$ に対して）)
  - Example 6.1-1 (PA での定理の証明：$\forall x\,(x+0=x)$ は (PA3) そのもの；$\forall x\,(0+x=x)$ は (PA3)・(PA4) と帰納法スキーマを使って証明する；$\forall x\,\forall y\,(x+y=y+x)$（加法の可換性）も帰納法で証明可能)

- **2. PA の表現力と「$\Sigma_1$ 完全性」**
  - Proposition 6.1-1 (PA の表現力：計算可能（原始再帰的）な自然数の関数と述語はすべて PA の言語で表現できる；「$x$ は素数である」「$x$ は $y$ の約数である」「$x$ は $y$ の $z$ 乗根である」等がすべて PA の論理式で書ける)
  - Remark (PA の強さ：PA は算術に関する大部分の定理を証明できる強力な体系；しかし不完全性定理（§6.3）によれば PA から証明も反証もできない文が存在する；PA の「代わり」に数学全体の基礎を担う体系として ZFC（Chapter 7）が使われる)

### §6.2 ゲーデル数化
**内容:** 論理式や証明アルゴリズムの自然数への符号化

- **1. ゲーデル数化の方法**
  - Definition 6.2-1 (ゲーデル数：$\mathcal{L}_\mathrm{PA}$ の各記号に自然数を対応させ，記号列（論理式・証明列）を自然数に符号化する方法；$\ulcorner\varphi\urcorner$ で論理式 $\varphi$ のゲーデル数を表す；主な手法：記号列 $(s_1, s_2, \ldots, s_n)$ に $p_1^{e_1} p_2^{e_2} \cdots p_n^{e_n}$（$p_i$ は $i$ 番目の素数，$e_i$ は $s_i$ の符号）を対応させる素数符号化)
  - Proposition 6.2-1 (算術化可能な述語：「$e$ は論理式のゲーデル数である」「$e$ は証明列のゲーデル数である」「$e$ は $f$ のゲーデル数を持つ式の証明列のゲーデル数である」（$\mathrm{Proof}(e, f)$）等の述語が PA で表現できる；ゲーデル数化により「証明に関する言明」が「自然数に関する言明」に翻訳される)
  - Example 6.2-1 (ゲーデル数の具体例：記号 $0 \mapsto 1$、$S \mapsto 3$、$+ \mapsto 5$ などと割り当てると，式 $S(0)$ のゲーデル数は $2^3 \cdot 3^1 = 24$（例示）；実際の符号化は多様な方法があり，本質は「論理式が自然数として操作できること」）

- **2. 対角化補題**
  - Lemma 6.2-1 (対角化補題（自己言及補題）：$\mathcal{L}_\mathrm{PA}$ の論理式 $\varphi(x)$（自由変数 $x$ を持つ）に対して，PA が $\psi \leftrightarrow \varphi(\ulcorner\psi\urcorner)$ を証明できる文 $\psi$ が存在する；$\psi$ は「$\psi$ 自身について $\varphi$ が成立する」と言っている)
  - Proof (対角関数 $\mathrm{diag}(e)$ を「$e$ のゲーデル数を持つ論理式に $e$ 自身を代入した式のゲーデル数」として定義；$\psi = \varphi(\mathrm{diag}(\ulcorner\varphi(x)\urcorner))$ と構成すると自己言及が達成される；$\mathrm{diag}$ が PA で表現可能なことを使う)
  - Remark (対角化補題の重要性：不完全性定理・タルスキの真理定義不可能性定理・ゲーデルの第二不完全性定理等が対角化補題から導かれる；「この文は証明不可能」という自己言及文の構成がすべてここにある)

### §6.3 第一不完全性定理
**内容:** 無矛盾な十分強い体系における決定不能命題の存在定理

- **1. 第一不完全性定理**
  - Theorem 6.3-1 (ゲーデルの第一不完全性定理：PA（または同程度に強い再帰的に公理化可能な一貫した理論 $T$）が無矛盾ならば，$T$ から証明も反証もできない閉論理式（決定不能命題）が存在する；$T$ は不完全である)
  - Proof (ゲーデル文の構成：対角化補題に $\varphi(x) = \neg\exists y\,\mathrm{Proof}(y, x)$（「$x$ は証明可能でない」）を代入すると $G \leftrightarrow \neg\exists y\,\mathrm{Proof}(y, \ulcorner G\urcorner)$（「$G$ は証明不可能」と言っている）なる文 $G$ が得られる；$T \vdash G$ と仮定すると $G$ は証明可能なのに「証明不可能」と言って矛盾；$T \vdash \neg G$ と仮定すると $G$ は証明不可能なのに $T$ は「証明可能」と証明してしまい矛盾（$\omega$-無矛盾性または単純な無矛盾性を用いる）；よって $T \nvdash G$ かつ $T \nvdash \neg G$)
  - Example 6.3-1 (決定不能命題の解釈：ゲーデル文 $G$ は「私は証明できない」という自己言及；$G$ が真（標準モデル $\mathbb{N}$ で真）なのに PA では証明できない；PA に $G$ を公理として加えると新たな決定不能命題が現れ，この操作は無限に続く—PA は決して「完成」しない)

- **2. ロッサーの改良**
  - Remark (ロッサーの定理：ゲーデルの元の証明は $\omega$-無矛盾性（より強い条件）を必要としたが，ロッサー（1936）は通常の無矛盾性のみを仮定した改良を与えた；決定不能命題として「この文の反証よりも短い証明は存在しない」という形のロッサー文を使う)

### §6.4 第二不完全性定理
**内容:** 体系が自身の無矛盾性を証明できないこととその意義

- **1. 第二不完全性定理**
  - Theorem 6.4-1 (ゲーデルの第二不完全性定理：PA が無矛盾ならば，PA の無矛盾性を表す文 $\mathrm{Con}(\mathrm{PA})$（「PA は矛盾を証明できない」という PA の論理式）は PA では証明できない；$\mathrm{PA} \nvdash \mathrm{Con}(\mathrm{PA})$)
  - Proof (第一不完全性定理の証明を PA 内で形式化する；PA が無矛盾ならばゲーデル文 $G$ が証明不可能であることを PA 内で示せる；$\mathrm{Con}(\mathrm{PA})\to G$ が PA で証明可能；したがって $\mathrm{PA}\nvdash G$ より $\mathrm{PA}\nvdash \mathrm{Con}(\mathrm{PA})$)
  - Example 6.4-1 (定理の意味：PA の無矛盾性は PA の外側（より強い体系 ZFC など）でなければ証明できない；「数学の無矛盾性を数学自身で証明する」というヒルベルトのプログラムが不完全性定理によって完全な形では実現不可能であることが示された)

- **2. ヒルベルトのプログラムへの影響**
  - Remark (ヒルベルトのプログラム：20 世紀初頭，ヒルベルトは有限的な方法（記号操作）だけで数学全体の無矛盾性を証明しようとした；第二不完全性定理は「PA の無矛盾性を PA（有限的な算術）自身で証明できない」ことを示してこのプログラムの原形を否定した；ただし「有限的」の解釈次第でヒルベルトプログラムの一部は実現可能であり，証明論（proof theory）として発展し続けている)

---

## Chapter 7: ZFC 公理系
**テーマ:** 集合論の公理系の論理的分析

### §7.1 ZF 公理系の各公理の役割
**内容:** ZF 公理系の論理的動機とパラドックスの回避

- **1. ZF 公理系の構成**
  - Definition 7.1-1 (ZF 公理系：集合論の言語 $\mathcal{L} = \{\in\}$（属する関係のみ）での公理系；主要公理：
    (Z1) 外延性公理：$\forall x\,\forall y\,(\forall z\,(z\in x\leftrightarrow z\in y)\to x=y)$（集合は元で決まる）；
    (Z2) 空集合公理：$\exists x\,\forall y\,(y\notin x)$；
    (Z3) 対公理：$\forall x\,\forall y\,\exists z\,\forall w\,(w\in z\leftrightarrow w=x\lor w=y)$（$\{x,y\}$ の存在）；
    (Z4) 和集合公理：$\forall x\,\exists y\,\forall z\,(z\in y\leftrightarrow \exists w\,(z\in w\land w\in x))$（$\bigcup x$ の存在）；
    (Z5) べき集合公理：$\forall x\,\exists y\,\forall z\,(z\in y\leftrightarrow z\subseteq x)$（$\mathcal{P}(x)$ の存在）；
    (Z6) 無限公理：帰納的集合の存在（$0 \in I$ かつ $x \in I \Rightarrow x\cup\{x\}\in I$ を満たす $I$ が存在）；
    (Z7) 正則性公理：$\forall x\,(x\neq\emptyset\to\exists y\,(y\in x\land y\cap x=\emptyset))$；
    (Z8) 分出公理スキーマ：任意の論理式 $\varphi$ に対して，部分集合 $\{z \in x \mid \varphi(z)\}$ の存在；
    (Z9) 置換公理スキーマ：関数的な論理式 $\varphi$ による像集合の存在)
  - Example 7.1-1 (各公理の役割：外延性は集合の同一性を決定；空集合・対・和集合・べき集合公理は新たな集合を「構成」する；分出公理・置換公理は条件を満たす部分集合や像集合を切り出す；無限公理は $\mathbb{N}$ の存在を保証；正則性は $x \in x$ のような「奇妙な集合」を排除)
  - Remark (公理の独立性と冗長性：実は「分出公理」は「置換公理」から導出可能（冗長）である。ある集合 $A$ と論理式 $\varphi(x)$ が与えられたとき、$x \in A$ について $\varphi(x)$ が真なら $y=x$、偽なら $y=a$（$a$ は $\varphi(a)$ を満たす $A$ の元）とする関数的論理式に置換公理を適用すれば、部分集合 $\{x \in A \mid \varphi(x)\}$ を像として作れるため。しかし、分出公理は歴史的にも直感的にも極めて重要であるため、独立した公理として列挙するのが一般的である。)

- **2. パラドックスの回避**
  - Proposition 7.1-1 (ラッセルのパラドックスの回避：「すべての集合の集合」は ZF では存在しない；仮に $V = \{x \mid x \text{ は集合}\}$ が集合なら $R = \{x \in V \mid x \notin x\}$（分出公理）が存在し，$R \in R \Leftrightarrow R \notin R$—矛盾）
  - Proof (ZF では「集合全体」は集合でなく真クラスとして扱う；分出公理 $\{x \in A \mid \varphi(x)\}$ は既存の集合 $A$ からの部分集合のみを作る；「すべてのものの集合」を作ることを禁止しており，ラッセルのパラドックスが再現されない)
  - Example 7.1-2 (素朴集合論 vs ZF：2-4 で扱った素朴集合論では「$\varphi$ を満たす集合 $\{x \mid \varphi(x)\}$」を自由に作れた；ZF では「既存の集合 $A$ から $\{x \in A \mid \varphi(x)\}$」しか作れない；この制限がパラドックスを防ぐ)

### §7.2 選択公理とその同値命題
**内容:** 選択公理の主張とツォルンの補題や整列定理との同値性

- **1. 選択公理の主張**
  - Axiom 7.2-1 (選択公理（AC）：空でない集合の族 $\{A_\lambda\}_{\lambda\in\Lambda}$ に対して，各 $A_\lambda$ から一元ずつを選ぶ選択関数 $f : \Lambda \to \bigcup_\lambda A_\lambda$（$f(\lambda) \in A_\lambda$）が存在する；$\mathrm{ZF} + \mathrm{AC} = \mathrm{ZFC}$)
  - Example 7.2-1 (有限族には不要：$\{A_1, \ldots, A_n\}$ の族では帰納法で選択関数が ZF 内で構成できる；無限族では構成が不可能になることがあり，選択公理が必要になる；$\prod_{n\in\mathbb{N}} A_n$（$A_n$ は空でない）が空でないことは ZF だけでは証明できない)

- **2. 選択公理の同値命題**
  - Theorem 7.2-1 (AC・ツォルンの補題・整列定理の同値性（ZF の下で）：以下は ZF の下で同値；
    (i) 選択公理（AC）；
    (ii) ツォルンの補題（3-9 §3.3 参照）：帰納的順序集合は極大元をもつ；
    (iii) 整列定理：任意の集合上に整列順序が入れられる)
  - Proof ($(i)\Rightarrow(ii)$：鎖の上界を選ぶ際に選択公理を使って超限帰納法で極大元を構成する；$(ii)\Rightarrow(iii)$：順序集合の空でない部分集合全体にツォルンを適用して整列順序を構成する；$(iii)\Rightarrow(i)$：整列された指標集合で最小元を選ぶことで選択関数を構成する)
  - Remark (ツォルンの補題の多用：環論（3-9）での極大イデアルの存在・線形代数での Hamel 基底の存在・関数解析での Hahn-Banach の定理など，数学の多くの場所でツォルンの補題（AC の同値命題）が使われている)

### §7.3 選択公理の応用と独立性
**内容:** バナッハ＝タルスキー等の帰結および ZF からの独立性

- **1. 選択公理の帰結**
  - Theorem 7.3-1 (バナッハ＝タルスキーのパラドックス：AC を仮定すると，$\mathbb{R}^3$ の単位球を有限個の部分集合に分解し，それらを剛体運動（回転・平行移動）で組み替えて 2 つの単位球を作れる；「体積が保存されない分解」が存在する)
  - Proof (証明は自由群 $F_2$ の $SO(3)$ への埋め込みとハウスドルフのパラドックスを用いる；AC によって「測定不可能集合」が構成されることが核心；完全な証明は本科目の範囲を超えるため概略に留める)
  - Example 7.3-1 (測定不可能集合の存在：ヴィタリ集合（3-3 で言及）は AC を用いて構成される；ルベーグ非可測集合の存在は AC なしでは ZF 内で証明も反証もできない（後述の独立性）；「すべての集合が測定可能」はある意味でAC と相容れない)

- **2. 選択公理の独立性**
  - Theorem 7.3-2 (選択公理の独立性：ZF が無矛盾ならば，ZF + AC も ZF + $\neg$AC も無矛盾である；AC は ZF から独立している)
  - Proof (AC の無矛盾性：ゲーデルが 1938 年に「構成可能集合の宇宙 $L$」を用いて ZF + AC のモデルを構成；$\neg$AC の無矛盾性：コーエンが 1963 年に「強制法（forcing）」を用いて ZF + $\neg$AC のモデルを構成；どちらの証明も ZF が無矛盾という仮定の下で行われる)
  - Remark (独立性の意味：「AC は ZF の公理から証明も反証もできない」；数学で広く使われる AC は必要不可欠な「追加仮定」として ZFC に組み込まれているが，その選択は数学的な「信念」の問題でもある；§8.4 の連続体仮説も同様の独立性をもつ)

---

## Chapter 8: 順序数・基数と連続体仮説
**テーマ:** 無限の大きさと決定不能性

### §8.1 順序数の定義と算術
**内容:** フォン・ノイマン順序数とその超限算術

- **1. フォン・ノイマン順序数**
  - Definition 8.1-1 (フォン・ノイマン順序数：集合 $\alpha$ が（フォン・ノイマン）順序数であるとは，$\alpha$ が推移的（$x \in \alpha \Rightarrow x \subset \alpha$）かつ $\in$ で整列されること；各自然数 $n$ を $n = \{0, 1, \ldots, n-1\} = \{\emptyset, \{\emptyset\}, \ldots\}$ と定義し，$\omega = \{0, 1, 2, \ldots\}$（最初の無限順序数）)
  - Example 8.1-1 (小さい順序数の具体例：$0 = \emptyset$；$1 = \{0\} = \{\emptyset\}$；$2 = \{0,1\} = \{\emptyset, \{\emptyset\}\}$；$3 = \{0,1,2\}$；$\omega = \{0,1,2,\ldots\}$；$\omega+1 = \omega\cup\{\omega\} = \{0,1,2,\ldots,\omega\}$；各順序数は「それより小さいすべての順序数の集合」として表現される)
  - Proposition 8.1-1 (順序数の全順序性：任意の 2 つの順序数 $\alpha, \beta$ について $\alpha \in \beta$、$\alpha = \beta$、$\beta \in \alpha$ のいずれかが成立する（比較可能）；これは ZF（および AC なし）で証明できる)
  - Proof (順序数の共通初期切片を考えて $\in$-極小性から全順序性を導く；整列定理を使わずに ZF 内で直接証明できる)

- **2. 超限算術**
  - Definition 8.1-2 (順序数の算術：順序数の加法 $\alpha+\beta$（$\beta$ のコピーを $\alpha$ の後ろに並べる）；乗法 $\alpha\cdot\beta$（$\alpha$ の $\beta$ コピーを並べる）；べき乗 $\alpha^\beta$；これらは一般に可換でない（$\omega + 1 \neq 1 + \omega = \omega$）)
  - Example 8.1-2 (超限算術の具体計算：$\omega + \omega = \omega\cdot 2$（$\omega$ が 2 つ）；$\omega\cdot\omega = \omega^2$（$\omega$ が $\omega$ 個）；$2 + \omega = \omega$（有限を $\omega$ の前に置いても $\omega$）だが $\omega + 2 \neq \omega$（$\omega$ の後に 2 つ追加）；加法の非可換性の具体例)

### §8.2 超限帰納法と再帰的定義
**内容:** 整列集合上の帰納法と構成的定義の基本手法

- **1. 超限帰納法**
  - Theorem 8.2-1 (超限帰納法：順序数 $\alpha$ に関する性質 $P(\alpha)$ が，$\beta < \alpha$ のすべての順序数 $\beta$ で $P(\beta)$ が成立することから $P(\alpha)$ が導けるなら，すべての順序数について $P(\alpha)$ が成立する)
  - Proof (最小反例の原理：$P(\alpha)$ が成立しない最小の順序数があるとすれば，それより小さい順序数ではすべて成立し，帰納条件の前提が満たされて $P(\alpha)$ も成立—矛盾)
  - Example 8.2-1 (超限帰納法の適用：$\omega_1$（第一非可算順序数）の存在の証明；「$\alpha$ は可算順序数」という性質 $P(\alpha)$ が成立しない最小の順序数を考えると超限帰納法から $\omega_1$ が構成できる；$\omega_1 = \{\alpha \mid \alpha$ は可算順序数$\}$)

- **2. 超限再帰による定義**
  - Proposition 8.2-1 (超限再帰定理：関数 $F$（各順序数 $\alpha$ に対して $\{G(\beta)\}_{\beta<\alpha}$ を引数に取る）が与えられるとき，$G(\alpha) = F(\{G(\beta)\}_{\beta<\alpha})$ を満たす関数 $G$ が一意に存在する)
  - Proof (整列集合上の選択関数として $G$ を段階的に構成する；各段階で値が一意に決まることと，全域で定義されることを超限帰納法で示す)
  - Example 8.2-2 (フォン・ノイマン階層：$V_0 = \emptyset$；$V_{\alpha+1} = \mathcal{P}(V_\alpha)$；$V_\lambda = \bigcup_{\alpha<\lambda} V_\alpha$（$\lambda$ は極限順序数）；この超限再帰で「宇宙 $V = \bigcup_\alpha V_\alpha$」が構成され，ZF の全集合が $V$ に属することが正則性公理から証明できる)

### §8.3 基数と aleph 数
**内容:** 濃度に基づく基数の定義とアレフ数の体系

- **1. 基数の定義**
  - Definition 8.3-1 (基数：集合 $A$ の濃度（基数）$|A|$ は $A$ と全単射がある最小の（フォン・ノイマン）順序数；$|A| = |B| \Leftrightarrow A$ と $B$ の間に全単射が存在；有限集合の基数は自然数，無限集合の基数は無限基数)
  - Proposition 8.3-1 (カントールの定理：$|A| < |\mathcal{P}(A)|$；集合はそのべき集合より「小さい」；無限に大きな基数がいくつも存在することの根拠)
  - Proof (単射 $A \to \mathcal{P}(A)$（$a \mapsto \{a\}$）が存在するので $|A| \leq |\mathcal{P}(A)|$；全単射の非存在：$f : A \to \mathcal{P}(A)$ を任意に取ると $D = \{a \in A \mid a \notin f(a)\}$ は $\mathcal{P}(A)$ の元で $f$ の値域に含まれない（カントールの対角線論法）；これはいかなる全射も存在しないことを示す)
  - Example 8.3-1 (基数の大きさの比較：$|\mathbb{N}| = \aleph_0$（可算無限）；$|\mathbb{R}| = 2^{\aleph_0} > \aleph_0$（非可算）；$|\mathbb{R}| = |\mathbb{R}^n|$（$n$ 次元ユークリッド空間も実数と同じ濃度）；$|\mathcal{P}(\mathbb{N})| = 2^{\aleph_0} = |\mathbb{R}|$（実数と自然数のべき集合の濃度が等しい）)

- **2. アレフ数の体系**
  - Definition 8.3-2 (アレフ数：無限基数を小さい順に並べたもの；$\aleph_0 = |\mathbb{N}|$；$\aleph_1$ は最小の非可算基数（$= \omega_1$）；$\aleph_{\alpha+1}$ は $\aleph_\alpha$ より大きい最小の基数；$\aleph_\lambda = \sup_{\alpha<\lambda}\aleph_\alpha$（$\lambda$ は極限順序数）；超限帰納法（Proposition 8.2-1）によって $\aleph_\alpha$ 全体が定義される)
  - Proposition 8.3-2 ($\aleph_\alpha$ の次の基数は $\aleph_{\alpha+1}$：$\aleph_\alpha < \kappa$ を満たす最小の基数は $\aleph_{\alpha+1}$；この間に他の無限基数は存在しない)
  - Proof (整列定理（AC）のもとで任意の集合に整列順序が入り，任意の集合に基数が定義できる；$\aleph_\alpha$ より大きい最小の順序数型（$= \aleph_{\alpha+1}$）の存在は超限再帰定理から)

### §8.4 連続体仮説と決定不能性
**内容:** 連続体仮説の ZFC における独立性と強制法の概観

- **1. 連続体仮説の主張**
  - Definition 8.4-1 (連続体仮説（CH）：$2^{\aleph_0} = \aleph_1$；実数の基数 $|\mathbb{R}|$ は可算基数の次に大きい基数 $\aleph_1$ に等しいという仮説；「$\aleph_0$ より大きく $|\mathbb{R}|$ より小さい基数は存在しない」という言い換えも同値)
  - Definition 8.4-2 (一般連続体仮説（GCH）：すべての無限基数 $\aleph_\alpha$ に対して $2^{\aleph_\alpha} = \aleph_{\alpha+1}$；CH は $\alpha = 0$ の特殊ケース)
  - Example 8.4-1 (CH の問題の歴史：カントールが 1878 年に提起し，ヒルベルトが 1900 年の 23 問題の第 1 問として挙げた；直観的には「$\aleph_0$ と $|\mathbb{R}|$ の間の基数はない」という仮説で，$100$ 年以上にわたる難問)

- **2. 連続体仮説の独立性**
  - Theorem 8.4-1 (CH の独立性：ZFC が無矛盾ならば，ZFC + CH も ZFC + $\neg$CH も無矛盾；CH は ZFC から独立している)
  - Proof (CH の無矛盾性：ゲーデル（1938）は構成可能集合の宇宙 $L$ が ZFC + GCH のモデルになることを示した；$\neg$CH の無矛盾性：コーエン（1963）は強制法（forcing）によって $|\mathbb{R}| = \aleph_2$ 等を成立させるモデルを構成した；強制法は ZFC のモデルを「拡大」して新しい集合を付け加える技法で，証明論・集合論の画期的な方法論)
  - Remark (強制法の概観：コーエンの強制法は「可能性の世界」を拡大するアイデア；「将来的に成立させたい条件」を部分的に満たす「条件付き集合」（forcing 条件）を使って新しいモデルを構成する；不完全性定理（§6.3）と並ぶ 20 世紀論理学の最大の成果のひとつ；公理的集合論（5-23）で詳しく扱う)
  - Example 8.4-2 (CH の独立性の意味：CH が「真か偽か」は ZFC の公理だけでは決定できない；CH を仮定した数学と $\neg$CH を仮定した数学はどちらも無矛盾；「実数と $\aleph_1$ の大小関係」が公理の外側にある選択の問題であることを示す—ユークリッド幾何での平行線公理の独立性（非ユークリッド幾何の存在）と同様の構造)
