export interface Section {
    id: string; // e.g. "1.1"
    title: string;
    description?: string;
}

export interface Chapter {
    id: string;
    title: string;
    description?: string;
    sections: Section[];
}

export interface Topic {
    id: string; // e.g. "1-1"
    title: string; // e.g. "微積分I（1変数）"
    tags: string[]; // e.g. ["必修基礎"]
    chapters: Chapter[];
    prerequisites: string[];
}

export interface Stage {
    id: string; // e.g. "stage-1"
    title: string; // e.g. "第1段階：基礎の確立（1年次相当）"
    topics: Topic[];
}

export const roadmapData: Stage[] = [
    {
        id: "stage-1",
        title: "Lv.1：教養としての数学",
        topics: [
            {
                id: "1-1",
                title: "線形代数学I",
                tags: ["必修基礎"],
                chapters: [
                    {
                        id: "1",
                        title: "ベクトル",
                        sections: [
                            { id: "1.1", title: "ベクトルとは何か", description: "n次元列ベクトルの定義、零ベクトル、成分表示" },
                            { id: "1.2", title: "ベクトルの演算", description: "和・差・スカラー倍の定義と計算" },
                            { id: "1.3", title: "内積とノルム", description: "内積の定義、ノルム（大きさ）、なす角" },
                            { id: "1.4", title: "重要な不等式と一次独立", description: "コーシー・シュワルツの不等式、三角不等式、一次独立と一次従属" },
                        ],
                    },
                    {
                        id: "2",
                        title: "行列",
                        sections: [
                            { id: "2.1", title: "行列とは何か", description: "m×n行列の定義、成分表示" },
                            { id: "2.2", title: "行列の演算", description: "和・スカラー倍・積の定義と計算" },
                            { id: "2.3", title: "転置行列", description: "転置の定義、性質、対称行列" },
                            { id: "2.4", title: "特別な行列", description: "単位行列・対角行列・零行列" },
                        ],
                    },
                    {
                        id: "3",
                        title: "連立1次方程式とガウスの消去法",
                        sections: [
                            { id: "3.1", title: "連立1次方程式の行列表現", description: "Ax = b の形式、拡大係数行列" },
                            { id: "3.2", title: "行基本変形と階段行列", description: "3種の行基本変形、行階段形、簡約行階段形" },
                            { id: "3.3", title: "ガウスの消去法", description: "掃き出し法による連立方程式の解法" },
                            { id: "3.4", title: "解の存在と個数", description: "階数による解なし・一意・不定の分類" },
                        ],
                    },
                    {
                        id: "4",
                        title: "行列式",
                        sections: [
                            { id: "4.1", title: "2×2行列式の定義", description: "定義と幾何学的意味（面積）" },
                            { id: "4.2", title: "3×3行列式", description: "サラスの方法による計算" },
                            { id: "4.3", title: "一般の行列式と余因子展開", description: "任意のn×n行列式への拡張" },
                            { id: "4.4", title: "行列式の性質", description: "多重線形性、交代性、積の法則" },
                            { id: "4.5", title: "クラメルの公式", description: "行列式を用いた連立方程式の解法" },
                        ],
                    },
                    {
                        id: "5",
                        title: "逆行列",
                        sections: [
                            { id: "5.1", title: "逆行列の定義と存在条件", description: "正則行列、det A ≠ 0 との関係" },
                            { id: "5.2", title: "公式による逆行列の計算", description: "2×2の公式、余因子行列を使った方法" },
                            { id: "5.3", title: "掃き出し法による逆行列の計算", description: "[A|I] → [I|A⁻¹] の手順" },
                        ],
                    },
                    {
                        id: "6",
                        title: "固有値と固有ベクトル",
                        sections: [
                            { id: "6.1", title: "固有値・固有ベクトルとは何か", description: "直感的導入、Av = λv の意味" },
                            { id: "6.2", title: "特性方程式と固有値の計算", description: "det(A - λI) = 0 の解法" },
                            { id: "6.3", title: "固有ベクトルの計算", description: "固有空間、連立方程式を解く手順" },
                            { id: "6.4", title: "対角化", description: "対角化の手順、対角化可能な条件" },
                        ],
                    },
                ],
                prerequisites: ["高校数学"]
            },
            {
                id: "1-2",
                title: "微分積分学I",
                tags: ["必修基礎"],
                chapters: [
                    {
                        id: "1",
                        title: "極限",
                        sections: [
                            { id: "1.1", title: "数列の極限", description: "数列の収束・発散、極限の計算、はさみうちの原理" },
                            { id: "1.2", title: "関数の極限", description: "片側極限、無限大への極限、極限の性質" },
                        ],
                    },
                    {
                        id: "2",
                        title: "微分",
                        sections: [
                            { id: "2.1", title: "導関数の定義と意味", description: "差分商、導関数の定義、微分可能性と連続性" },
                            { id: "2.2", title: "微分の計算法則", description: "和・差・積・商の微分法則、基本関数の導関数" },
                            { id: "2.3", title: "合成関数の微分と逆関数の微分", description: "連鎖律、逆関数微分法、対数微分法" },
                            { id: "2.4", title: "高階導関数", description: "第n次導関数、ライプニッツの公式" },
                            { id: "2.5", title: "ロピタルの定理", description: "0/0型・∞/∞型の不定形、適用手順と注意点" },
                            { id: "2.6", title: "微分の応用", description: "増減表、極値、凹凸、グラフの概形" },
                        ],
                    },
                    {
                        id: "3",
                        title: "積分",
                        sections: [
                            { id: "3.1", title: "不定積分", description: "原始関数の定義、基本積分公式" },
                            { id: "3.2", title: "定積分とリーマン和", description: "リーマン和による定義、定積分の性質" },
                            { id: "3.3", title: "微積分の基本定理", description: "第1・第2基本定理、不定積分と定積分の接続" },
                            { id: "3.4", title: "置換積分", description: "1変数の置換積分、定積分への応用" },
                            { id: "3.5", title: "部分積分", description: "部分積分の公式、繰り返し適用、定積分への応用" },
                            { id: "3.6", title: "積分の応用", description: "面積、回転体の体積、曲線の長さ" },
                        ],
                    },
                    {
                        id: "4",
                        title: "級数",
                        sections: [
                            { id: "4.1", title: "無限級数と収束・発散", description: "部分和、収束・発散の定義、等比級数" },
                            { id: "4.2", title: "収束判定法", description: "比判定法、根判定法、交代級数判定法" },
                            { id: "4.3", title: "べき級数", description: "べき級数の定義、収束半径、収束域" },
                            { id: "4.4", title: "テイラー展開・マクローリン展開", description: "テイラーの定理、主要関数の展開、展開の応用" },
                        ],
                    },
                    {
                        id: "5",
                        title: "偏微分と全微分",
                        sections: [
                            { id: "5.1", title: "多変数関数とは", description: "2変数・3変数関数、グラフと等高線" },
                            { id: "5.2", title: "偏微分の計算", description: "偏導関数の定義、高階偏導関数、シュワルツの定理" },
                            { id: "5.3", title: "全微分", description: "全微分の定義、接平面、線形近似" },
                            { id: "5.4", title: "連鎖律", description: "合成関数の偏微分、変数変換への応用" },
                            { id: "5.5", title: "多変数関数の極値問題", description: "臨界点、ヘッセ行列による極値判定" },
                        ],
                    },
                    {
                        id: "6",
                        title: "重積分",
                        sections: [
                            { id: "6.1", title: "二重積分と累次積分", description: "二重積分の定義、フビニの定理、積分順序の交換" },
                            { id: "6.2", title: "三重積分", description: "三重積分の定義と累次積分への帰着" },
                            { id: "6.3", title: "変数変換とヤコビアン", description: "ヤコビアンの定義、変数変換の公式" },
                            { id: "6.4", title: "極座標・円柱座標・球座標", description: "各座標系のヤコビアン、重積分への応用" },
                        ],
                    },
                ],
                prerequisites: ["高校数学"]
            }
        ]
    },
    {
        id: "stage-2",
        title: "Lv.2：基本的な数学",
        topics: [
            {
                id: "2-1",
                title: "線形代数学II",
                tags: ["必修基礎"],
                chapters: [
                    {
                        id: "1", title: "ベクトル空間", description: "公理的定義、部分空間、線形結合",
                        sections: [
                            { id: "1.1", title: "ベクトル空間の定義", description: "8つの公理の列挙と意味、スカラー体（実数体・複素数体）の役割" },
                            { id: "1.2", title: "ベクトル空間の例", description: "R^n、多項式空間 P_n、連続関数空間 C[a,b]、行列空間 M_{m,n} などの確認" },
                            { id: "1.3", title: "部分空間の定義と判定", description: "部分空間の3条件（零ベクトル・加法・スカラー倍に閉じている）、判定の手順" },
                            { id: "1.4", title: "線形結合と生成系", description: "線形結合の定義、span の定義、span が部分空間になることの証明" },
                            { id: "1.5", title: "部分空間の和と直和", description: "交わり V∩W が部分空間、和 V+W の定義と次元公式、直和 V⊕W の条件" },
                        ]
                    },
                    {
                        id: "2", title: "線形独立・線形従属", description: "厳密な定義、基底、次元",
                        sections: [
                            { id: "2.1", title: "線形独立・従属の定義", description: "c_1v_1+…+c_kv_k=0 ⟹ c_i=0 の定義、線形従属の意味（一方が他の線形結合で書ける）" },
                            { id: "2.2", title: "線形独立の判定法", description: "行列の行基本変形を用いた判定、零空間との関係" },
                            { id: "2.3", title: "基底の定義と性質", description: "生成+線形独立 ⟺ 基底、基底の個数の一意性（次元定理）" },
                            { id: "2.4", title: "次元と拡張定理", description: "次元の定義、独立族を基底に拡張できることの証明、生成系から基底を取り出す" },
                            { id: "2.5", title: "座標と基底変換", description: "基底 B に関する座標 [v]_B、基底変換行列 P、座標変換 [v]_{B'}=P^{-1}[v]_B" },
                        ]
                    },
                    {
                        id: "3", title: "線形写像", description: "定義、核、像、次元定理の証明",
                        sections: [
                            { id: "3.1", title: "線形写像の定義と例", description: "加法性 f(u+v)=f(u)+f(v)・斉次性 f(cv)=cf(v) の定義、微分・積分・行列積などの例" },
                            { id: "3.2", title: "核（ker）と像（im）", description: "ker f と im f の定義、それぞれが部分空間であることの証明" },
                            { id: "3.3", title: "次元公式（核-像定理）", description: "dim V = dim ker f + dim im f の証明、単射・全射の判定への応用" },
                            { id: "3.4", title: "表現行列", description: "基底 B, B' を固定したときの行列表現 [f]_{B'}^B、合成写像の行列は積" },
                            { id: "3.5", title: "基底変換と表現行列の変換", description: "基底変換行列 P による [f]_{new}=P^{-1}[f]_{old}P、相似変換の意味" },
                        ]
                    },
                    {
                        id: "4", title: "双対空間", description: "線形汎関数、双対基底、双対写像、二重双対",
                        sections: [
                            { id: "4.1", title: "線形汎関数と双対空間の定義", description: "V→F の線形写像（線形汎関数）の全体 V* が再びベクトル空間になること" },
                            { id: "4.2", title: "双対基底", description: "基底 {e_i} に対する双対基底 {e^i} の構成、dim V* = dim V の証明" },
                            { id: "4.3", title: "双対写像（転置写像）", description: "f: V→W に対する f*: W*→V* の定義、(g∘f)*=f*∘g* の性質" },
                            { id: "4.4", title: "二重双対と自然な同型", description: "V** への自然な埋め込み v↦(φ↦φ(v))、有限次元では V≅V** が自然な同型" },
                        ]
                    },
                    {
                        id: "5", title: "固有値理論", description: "固有値、固有ベクトル、固有空間、固有多項式",
                        sections: [
                            { id: "5.1", title: "固有値・固有ベクトルの定義", description: "Av = λv（v≠0）の定義、行列の引き伸ばし方向としての幾何的意味" },
                            { id: "5.2", title: "固有多項式と特性方程式", description: "p_A(λ) = det(A - λI)、特性方程式 p_A(λ)=0 の導出、次数と次元の関係" },
                            { id: "5.3", title: "固有値の計算例", description: "2×2・3×3行列の固有値計算、複素固有値の場合" },
                            { id: "5.4", title: "固有空間と重複度", description: "固有空間 E_λ = ker(A-λI) の構造、代数的重複度・幾何的重複度の定義と不等式" },
                            { id: "5.5", title: "異なる固有値の固有ベクトルの独立性", description: "異なる固有値に属する固有ベクトルはつねに線形独立（証明）" },
                        ]
                    },
                    {
                        id: "6", title: "対角化", description: "対角化可能性の条件と手順",
                        sections: [
                            { id: "6.1", title: "対角化の条件", description: "n次行列が対角化可能 ⟺ n個の線形独立な固有ベクトルを持つ ⟺ 全固有空間で代数的重複度=幾何的重複度" },
                            { id: "6.2", title: "対角化の手順と応用", description: "固有値→固有ベクトル→P の構成→P^{-1}AP=D、A^n=PD^nP^{-1} による行列のべき乗計算" },
                            { id: "6.3", title: "対角化不可能な例とジョルダン形の必要性", description: "重複固有値を持つが対角化できない行列の例、ジョルダン標準形の動機づけ" },
                        ]
                    },
                    {
                        id: "7", title: "ジョルダン標準形", description: "一般固有空間（広義固有空間）、ジョルダン細胞、最小多項式",
                        sections: [
                            { id: "7.1", title: "広義固有空間", description: "幾何的重複度＜代数的重複度の場合、広義固有空間 ker(A-λI)^k の安定化" },
                            { id: "7.2", title: "ジョルダン細胞と標準形の定義", description: "ジョルダン細胞 J(λ,k) の定義、ジョルダン分解の存在と一意性（主張）" },
                            { id: "7.3", title: "ジョルダン標準形の計算手順", description: "最小多項式の因数分解からジョルダン細胞のサイズを決定する手順" },
                            { id: "7.4", title: "ジョルダン基底の構成", description: "広義固有ベクトルの鎖を用いた基底の構成、具体的な計算例" },
                        ]
                    },
                    {
                        id: "8", title: "内積空間", description: "内積の公理、ノルム、コーシー・シュワルツの不等式",
                        sections: [
                            { id: "8.1", title: "内積の公理と例", description: "正値性・対称性・双線形性の定義、R^n の標準内積、多項式空間・関数空間の内積" },
                            { id: "8.2", title: "ノルムと三角不等式", description: "内積から誘導されるノルム ||v||=sqrt(⟨v,v⟩)、三角不等式の証明" },
                            { id: "8.3", title: "コーシー・シュワルツの不等式", description: "|⟨u,v⟩| ≤ ||u|| ||v|| の証明と等号成立条件、幾何的意味（角度）" },
                            { id: "8.4", title: "直交性と直交補空間", description: "直交の定義、直交補空間 V^⊥、直交分解 V = W ⊕ W^⊥ と射影定理" },
                            { id: "8.5", title: "射影作用素の理論", description: "冪等性 P² = P による代数的特徴づけ、直交射影 P = P* の条件、射影と部分空間の一対一対応、射影の固有値は 0 または 1" },
                        ]
                    },
                    {
                        id: "9", title: "正規直交基底", description: "グラム・シュミットの直交化法、QR分解",
                        sections: [
                            { id: "9.1", title: "正規直交系と正規直交基底", description: "内積が delta_{ij} になる基底の性質、フーリエ係数による座標表現" },
                            { id: "9.2", title: "グラム・シュミット直交化のアルゴリズム", description: "v_1,...,v_k から u_1,...,u_k を構成する手順と正しさの証明" },
                            { id: "9.3", title: "グラム・シュミット法の計算例", description: "R^3 や多項式空間での具体的計算、正規直交基底の構成" },
                            { id: "9.4", title: "QR分解", description: "グラム・シュミット法からの QR 分解の導出、最小二乗法への応用" },
                        ]
                    },
                    {
                        id: "10", title: "随伴作用素", description: "随伴の定義、自己随伴・歪自己随伴・ユニタリ・正規作用素",
                        sections: [
                            { id: "10.1", title: "随伴作用素の定義", description: "⟨f(u), v⟩ = ⟨u, f*(v)⟩ を満たす f* の定義、行列表現では随伴が共役転置 A* に対応" },
                            { id: "10.2", title: "自己随伴・歪自己随伴・ユニタリ作用素", description: "f=f*（自己随伴）・f=-f*（歪自己随伴）・f*f=ff*=id（ユニタリ）の定義と例" },
                            { id: "10.3", title: "正規作用素とスペクトル定理への橋渡し", description: "正規作用素 f*f=ff* の定義、正規作用素は正規直交基底で対角化可能（主張）" },
                        ]
                    },
                    {
                        id: "11", title: "対称行列と正規行列", description: "実対称行列の直交対角化、エルミート行列、ユニタリ行列",
                        sections: [
                            { id: "11.1", title: "実対称行列の固有値（実数性）", description: "固有値がすべて実数である証明（幾何的・代数的アプローチ）" },
                            { id: "11.2", title: "実対称行列の固有ベクトルの直交性", description: "異なる固有値に属する固有ベクトルが内積の意味で直交する証明" },
                            { id: "11.3", title: "スペクトル定理（実対称行列版）", description: "実対称行列は直交行列で対角化可能（証明の構成）、標準形 P^T A P=D" },
                            { id: "11.4", title: "エルミート行列と正規行列", description: "エルミート行列 A=A*、正規行列 AA*=A*A、ユニタリ対角化可能性の証明" },
                        ]
                    },
                    {
                        id: "12", title: "二次形式", description: "正定値、負定値、不定、シルベスターの慣性法則",
                        sections: [
                            { id: "12.1", title: "二次形式と行列表現", description: "Q(x) = x^T A x の定義、対称行列との対応、具体例" },
                            { id: "12.2", title: "定値性の分類", description: "正定値・半正定値・負定値・不定の定義、主小行列式による判定（シルベスターの判定条件）" },
                            { id: "12.3", title: "標準形への変換", description: "直交行列による対角化で二次形式を標準形に変換、y = P^T x による変数変換" },
                            { id: "12.4", title: "シルベスターの慣性法則", description: "標準形の一意性、正・負・零の個数（符号数）の不変性の証明" },
                        ]
                    },
                    {
                        id: "13", title: "スペクトル分解", description: "実対称行列・正規作用素のスペクトル分解、行列関数",
                        sections: [
                            { id: "13.1", title: "スペクトル分解定理", description: "A = Σ λ_i P_i（P_i は固有空間への直交射影）、P_i の直交性・冪等性の証明" },
                            { id: "13.2", title: "正規行列のユニタリ対角化", description: "正規行列 AA*=A*A のスペクトル定理、ユニタリ行列 U で U*AU=D が実現する" },
                            { id: "13.3", title: "行列関数 f(A) の定義と計算", description: "スペクトル分解を用いた f(A) = Σ f(λ_i) P_i の定義、e^A・sqrt(A) の具体的計算" },
                            { id: "13.4", title: "正定値行列と行列の平方根", description: "半正定値正規行列の平方根の一意存在、極分解 A = (AA*)^{1/2} U への伏線" },
                        ]
                    },
                    {
                        id: "14", title: "特異値分解（SVD）", description: "特異値・特異ベクトル、低ランク近似、擬逆行列、極分解",
                        sections: [
                            { id: "14.1", title: "特異値分解の定義と存在", description: "任意の m×n 行列 A に対して A = UΣV^T（U,V 直交行列、Σ 対角）の存在証明の概略" },
                            { id: "14.2", title: "特異値の計算と幾何的意味", description: "特異値 σ_i = sqrt(固有値 of A^T A)、楕円への変換・最大伸長方向としての解釈" },
                            { id: "14.3", title: "低ランク近似とエッカート・ヤングの定理", description: "ランク k の最良近似は上位 k 個の特異値・特異ベクトルで構成（フロベニウスノルム最小化）" },
                            { id: "14.4", title: "Moore-Penrose 擬逆行列", description: "A^+ = VΣ^+U^T の定義、最小二乗解 x = A^+b、4つのムーア-ペンローズ条件" },
                            { id: "14.5", title: "極分解", description: "A = PQ（P 半正定値対称、Q 直交）への分解、SVD からの導出、行列の「回転成分」と「伸縮成分」の分離" },
                        ]
                    },
                ],
                prerequisites: ["1-1"]
            },
            {
                id: "2-2",
                title: "微分積分学II",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "ε-δ論法", description: "極限、連続性、微分可能性の厳密な定義",
                        sections: [
                            { id: "1.1", title: "ε-δ による極限の定義", description: "lim_{x→a} f(x) = L の厳密な定義（∀ε>0, ∃δ>0...）と直感的意味" },
                            { id: "1.2", title: "極限の一意性と極限の計算規則", description: "極限値の一意性の証明、和・積・商の極限定理の厳密な証明" },
                            { id: "1.3", title: "ε-δ による連続性", description: "写像の連続性の厳密な定義、合成関数の連続性・連続関数の代数的性質" },
                            { id: "1.4", title: "ε-δ による微分可能性", description: "微分可能性の定義（差商の極限）、微分可能 ⟹ 連続の証明" },
                        ]
                    },
                    {
                        id: "2", title: "平均値の定理", description: "ロルの定理、平均値の定理の証明",
                        sections: [
                            { id: "2.1", title: "ロルの定理", description: "主張・証明（最大値定理 + 微分=0）・幾何的意味、仮定が外せない反例" },
                            { id: "2.2", title: "ラグランジュの平均値定理", description: "ロルの定理からの導出、証明、単調性・定数関数判定への応用" },
                            { id: "2.3", title: "コーシーの平均値定理", description: "定理の主張・証明（補助関数の設定）、ロピタルの定理への橋渡し" },
                            { id: "2.4", title: "ロピタルの定理", description: "0/0 型・∞/∞ 型の不定形への平均値定理の応用、注意点" },
                        ]
                    },
                    {
                        id: "3", title: "テイラーの定理", description: "剰余項の評価",
                        sections: [
                            { id: "3.1", title: "テイラーの定理の証明", description: "積分剰余項形式・ラグランジュ剰余項形式の証明の方法" },
                            { id: "3.2", title: "剰余項の評価と精度", description: "R_n の評価方法、テイラー近似の誤差の見積もり方" },
                            { id: "3.3", title: "マクローリン展開と収束半径", description: "e^x, sin x, cos x, log(1+x) のマクローリン展開、収束半径へのつながり" },
                            { id: "3.4", title: "テイラー展開の応用", description: "不定形の評価（ロピタルの代替）、不等式の証明、最適化問題への応用" },
                        ]
                    },
                    {
                        id: "4", title: "多変数関数の理論", description: "全微分可能性の厳密な定義",
                        sections: [
                            { id: "4.1", title: "多変数関数の極限と連続性", description: "ε-δ による多変数の極限定義、方向によって極限値が変わる反例" },
                            { id: "4.2", title: "偏微分と方向微分", description: "偏微分の定義と計算、方向微分の定義、偏微分可能でも連続でない反例" },
                            { id: "4.3", title: "全微分可能性の定義", description: "全微分可能性の厳密な定義（線形近似の存在）、偏微分との違いと関係" },
                            { id: "4.4", title: "全微分可能性の判定条件", description: "偏微分が連続なら全微分可能（証明付き）、C^1 級関数の概念" },
                        ]
                    },
                    {
                        id: "5", title: "合成関数の微分", description: "連鎖律の証明",
                        sections: [
                            { id: "5.1", title: "連鎖律の証明", description: "全微分可能性を前提とした連鎖律（d/dt[f(g(t))] の厳密な証明）" },
                            { id: "5.2", title: "行列形式のヤコビアン", description: "Jf・Jg = J(f∘g) の行列表現、多変数連鎖律の構造" },
                            { id: "5.3", title: "高階偏微分とシュワルツの定理", description: "混合偏微分の交換可能性の条件（f_{xy}=f_{yx}）と証明" },
                            { id: "5.4", title: "変数変換への応用", description: "極座標・一般座標変換で連鎖律を使った偏微分の計算" },
                        ]
                    },
                    {
                        id: "6", title: "ヘッセ行列", description: "極値問題の判定法",
                        sections: [
                            { id: "6.1", title: "ヘッセ行列の定義", description: "二階偏微分 f_{x_i x_j} からなるヘッセ行列 H の構成、対称性" },
                            { id: "6.2", title: "臨界点の分類（極値判定）", description: "∇f=0 の臨界点を H の正定値性・負定値性・不定値性で分類" },
                            { id: "6.3", title: "2変数の場合の具体的判定", description: "行列式と f_{xx} の符号による極値・鞍点の判定公式" },
                            { id: "6.4", title: "多変数の具体的な例題", description: "2変数・3変数の極値問題の解法、物理・工学への応用例" },
                        ]
                    },
                    {
                        id: "7", title: "ラグランジュの未定乗数法", description: "制約付き極値問題の理論",
                        sections: [
                            { id: "7.1", title: "制約付き極値問題の定式化", description: "g(x)=0 という制約の下での f(x) の最大化・最小化の設定" },
                            { id: "7.2", title: "ラグランジュ条件の導出", description: "∇f = λ∇g の導出（接線空間の議論）と幾何学的意味" },
                            { id: "7.3", title: "複数制約への拡張", description: "複数の制約条件がある場合の一般化、ラグランジュ乗数の個数" },
                            { id: "7.4", title: "具体的な最適化問題", description: "楕円上の最大最小、距離の最適化、AMG M不等式の証明" },
                        ]
                    },
                    {
                        id: "8", title: "陰関数定理", description: "陰関数の存在と微分可能性",
                        sections: [
                            { id: "8.1", title: "1変数版の陰関数定理", description: "F(x,y)=0 から y=f(x) が局所的に解けること、f'(x) の公式" },
                            { id: "8.2", title: "多変数版の陰関数定理", description: "ヤコビアン det(∂F/∂y) ≠ 0 の条件で局所的な陰関数が存在" },
                            { id: "8.3", title: "陰関数の微分の計算", description: "偏微分の連鎖律を用いた陰関数の偏微分の公式、計算例" },
                            { id: "8.4", title: "曲線・曲面の接線・法線への応用", description: "F(x,y)=0 の曲線の接線ベクトル、法線方向の求め方" },
                        ]
                    },
                    {
                        id: "9", title: "逆写像定理", description: "局所的な逆関数の存在",
                        sections: [
                            { id: "9.1", title: "ヤコビアンと局所可逆性", description: "ヤコビアン行列式 det Jf ≠ 0 のとき局所可逆であることの直感" },
                            { id: "9.2", title: "逆写像定理の証明の概略", description: "縮小写像の原理を用いた証明の構成、連続性・微分可能性の継承" },
                            { id: "9.3", title: "陰関数定理との関係", description: "逆写像定理から陰関数定理を導く構成、一般化としての捉え方" },
                            { id: "9.4", title: "座標変換への応用", description: "局所座標変換の存在、ヤコビアンによる面積素・体積素変換" },
                        ]
                    },
                    {
                        id: "10", title: "曲線と曲面", description: "パラメータ表示、弧長、接線、法線の厳密な定義",
                        sections: [
                            { id: "10.1", title: "パラメータ曲線と正則性", description: "正則曲線の定義（速度ベクトル ≠ 0）、弧長パラメータ" },
                            { id: "10.2", title: "曲線の弧長の計算", description: "弧長 L = ∫|r'(t)| dt の定義と計算例" },
                            { id: "10.3", title: "パラメータ曲面と面積要素", description: "曲面 r(u,v) の正則性、面積要素 dS = |r_u × r_v| du dv" },
                            { id: "10.4", title: "曲線の曲率とフルネ・セレ公式", description: "曲率 κ・捩率 τ の定義、T・N・B フレーム、フルネ・セレ方程式" },
                        ]
                    },
                    {
                        id: "11", title: "曲線積分・面積分", description: "線積分、面積分の厳密な定義",
                        sections: [
                            { id: "11.1", title: "スカラー場の線積分", description: "弧長による積分 ∫_C f ds の定義、パラメータによる計算、向きの影響" },
                            { id: "11.2", title: "ベクトル場の線積分（仕事）", description: "∫_C F·dr の定義、力の仕事との対応、経路依存性と保存場" },
                            { id: "11.3", title: "スカラー場・ベクトル場の面積分", description: "曲面上のスカラー積分 ∫∫_S f dS、ベクトル場の流束 ∫∫_S F·n dS の定義" },
                            { id: "11.4", title: "グリーンの定理", description: "平面領域での線積分と二重積分の関係（∮_C P dx + Q dy = ∬(Q_x - P_y) dA）と証明の概略" },
                        ]
                    },
                    {
                        id: "12", title: "重積分", description: "二重積分、三重積分、累次積分、変数変換",
                        sections: [
                            { id: "12.1", title: "二重積分の定義", description: "リーマン和による二重積分の定義、矩形領域と一般領域上の積分の構成" },
                            { id: "12.2", title: "累次積分とフビニの定理", description: "∬_D f dA = ∫∫ f(x,y) dx dy の順序交換、フビニの定理の主張と条件" },
                            { id: "12.3", title: "極座標への変換", description: "x=r cosθ, y=r sinθ による変換、ヤコビアン r の意味、典型的な計算例（ガウス積分）" },
                            { id: "12.4", title: "三重積分と一般的な変数変換", description: "円柱座標・球座標への変換、一般のヤコビアン det(∂(x,y,z)/∂(u,v,w)) による体積素変換" },
                            { id: "12.5", title: "広義重積分と収束条件", description: "非有界領域・非有界関数上の広義重積分の収束判定、典型的な応用例" },
                        ]
                    },
                ],
                prerequisites: ["1-2"]
            },
            {
                id: "2-3",
                title: "実解析I",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "実数の構成", description: "デデキントの切断、コーシー列による構成",
                        sections: [
                            { id: "1.1", title: "有理数の限界と実数の必要性", description: "sqrt(2) の非有理性、有理数列の収束先が有理数でない例、完備性の欠如" },
                            { id: "1.2", title: "デデキントの切断", description: "切断の定義、切断全体への順序・演算の定義、実数の構成とその完備性" },
                            { id: "1.3", title: "コーシー列による構成", description: "有理数のコーシー列の同値類、加法・乗法・順序の定義、完備化としての実数" },
                            { id: "1.4", title: "2つの構成の同値性", description: "デデキント切断とコーシー列が同じ実数を与えること、選択の問題" },
                        ]
                    },
                    {
                        id: "2", title: "実数の完備性", description: "上限公理、下限公理、アルキメデスの原理",
                        sections: [
                            { id: "2.1", title: "上限と下限の定義", description: "上界・下界・上限(sup)・下限(inf)の厳密な定義、存在と一意性" },
                            { id: "2.2", title: "上限公理（完備性公理）", description: "上に有界な空でない集合は上限を持つ、この公理が実数の本質" },
                            { id: "2.3", title: "完備性の同値命題", description: "単調収束定理、ボルツァーノ・ワイエルシュトラスの定理、区間縮小法との同値" },
                            { id: "2.4", title: "アルキメデスの原理と有理数の稠密性", description: "N に上界がないこと、任意の2実数の間に有理数が存在する証明" },
                        ]
                    },
                    {
                        id: "3", title: "点列と無限級数", description: "点列の収束、コーシー列、上極限・下極限、無限級数の収束",
                        sections: [
                            { id: "3.1", title: "点列の収束と発散の定義", description: "ε-N による収束の定義、収束する点列の一意性、和・積・商の極限の定理" },
                            { id: "3.2", title: "部分列と集積点", description: "部分列の定義、ボルツァーノ・ワイエルシュトラスの定理（有界列は収束部分列を持つ）" },
                            { id: "3.3", title: "コーシー列と完備性", description: "コーシー列の定義、実数での収束との同値性（完備性）の証明" },
                            { id: "3.4", title: "上極限・下極限", description: "lim sup a_n と lim inf a_n の定義・性質、収束条件との関係" },
                            { id: "3.5", title: "無限級数の収束と絶対収束", description: "部分和の極限としての無限級数、絶対収束と条件収束の違い、比較判定法・コーシーの判定法・ダランベールの比判定法" },
                        ]
                    },
                    {
                        id: "4", title: "連続関数の理論", description: "中間値の定理の証明、最大値定理、単調関数、凸関数",
                        sections: [
                            { id: "4.1", title: "連続性と不連続点の分類", description: "点連続・区間連続、第1種不連続点（左右極限あり）・第2種不連続点の例（sin(1/x)等）" },
                            { id: "4.2", title: "連続関数の代数的性質と合成", description: "和・積・商・合成が連続であること、閉区間での連続性と開区間での違い" },
                            { id: "4.3", title: "中間値の定理の厳密な証明", description: "有界単調列（二分法）を用いた中間値定理の証明、方程式への応用" },
                            { id: "4.4", title: "最大値・最小値定理", description: "閉区間上の連続関数は最大値・最小値を持つ（コンパクト性を用いた証明）" },
                            { id: "4.5", title: "単調関数と凸関数", description: "単調関数の不連続点は高々可算（証明）、凸関数の定義と性質（連続性・可微分性との関係）" },
                        ]
                    },
                    {
                        id: "5", title: "一様連続", description: "一様連続性の定義、コンパクト集合上の性質",
                        sections: [
                            { id: "5.1", title: "一様連続の定義と点連続との違い", description: "delta が x によらない一様連続の定義、1/x が (0,1) で一様連続でない例" },
                            { id: "5.2", title: "ハイネ・カントールの定理", description: "閉区間上の連続関数は一様連続であること（証明付き）" },
                            { id: "5.3", title: "一様連続関数の延長と応用", description: "稠密な部分集合上の一様連続関数の延長定理、完備化との関係" },
                            { id: "5.4", title: "リプシッツ連続と一様連続の関係", description: "リプシッツ条件 ⟹ 一様連続、一様連続でもリプシッツでない例" },
                        ]
                    },
                    {
                        id: "6", title: "微分の理論（実解析的）", description: "平均値定理の厳密な証明、テイラーの定理の剰余評価",
                        sections: [
                            { id: "6.1", title: "微分可能性の実解析的定義", description: "差商の極限としての微分、微分可能 ⟹ 連続の証明、微分不可能な連続関数（ワイエルシュトラス関数）の存在" },
                            { id: "6.2", title: "平均値定理の厳密な証明", description: "ロルの定理からラグランジュの平均値定理・コーシーの平均値定理への展開（最大値定理を用いた証明）" },
                            { id: "6.3", title: "テイラーの定理と剰余項の評価", description: "積分剰余項形式・ラグランジュ剰余項形式の証明、|R_n| の実解析的見積もり" },
                            { id: "6.4", title: "L'Hôpital の定理と高階微分", description: "コーシーの平均値定理による不定形の評価、シュワルツの定理（混合偏微分の可換性）の証明" },
                        ]
                    },
                    {
                        id: "7", title: "関数列と一様収束", description: "各点収束、一様収束の違い、極限と連続・積分・微分の交換",
                        sections: [
                            { id: "7.1", title: "各点収束の定義と例", description: "f_n(x)→f(x) の定義、x^n の [0,1] 上の各点収束の計算" },
                            { id: "7.2", title: "一様収束の定義と各点収束との比較", description: "sup|f_n-f|→0 の定義、収束の一様性の直感（グラフが均一に近づく）" },
                            { id: "7.3", title: "一様収束と連続性・積分の保存", description: "一様収束なら連続性保存・積分と極限が交換可能（証明）、各点収束だと崩れる反例" },
                            { id: "7.4", title: "一様収束と微分の交換", description: "微分と極限の交換には追加条件（微分列の一様収束）が必要、証明と反例" },
                        ]
                    },
                    {
                        id: "8", title: "べき級数と関数項級数", description: "M判定法、べき級数の収束半径、ワイエルシュトラスの近似定理",
                        sections: [
                            { id: "8.1", title: "ワイエルシュトラスのM判定法", description: "|f_n(x)| <= M_n かつ ΣM_n < ∞ ⟹ 関数項級数が一様収束・絶対収束（証明）" },
                            { id: "8.2", title: "べき級数の収束と収束半径", description: "べき級数の収束半径の定義、コーシー・アダマールの公式、収束/発散の境界での挙動" },
                            { id: "8.3", title: "べき級数の一様収束と項別微積分", description: "収束円板の内部での一様収束、項別積分・項別微分の正当性（証明）" },
                            { id: "8.4", title: "ワイエルシュトラスの近似定理", description: "閉区間上の連続関数は多項式で一様近似可能、ベルンシュタイン多項式による証明の概略" },
                        ]
                    },
                    {
                        id: "9", title: "リーマン積分", description: "上積分、下積分、リーマン和、リーマン可積分性",
                        sections: [
                            { id: "9.1", title: "分割・上和・下和の定義", description: "区間 [a,b] の分割 P、上リーマン和 U(f,P)・下リーマン和 L(f,P) の定義" },
                            { id: "9.2", title: "リーマン可積分性の定義と条件", description: "上積分 = 下積分 ⟺ 可積分、連続関数・有界変動関数の可積分性の証明" },
                            { id: "9.3", title: "リーマン積分の基本性質", description: "線形性・単調性・加法性・積分の絶対値の不等式、有界変動関数とリーマン積分の関係" },
                            { id: "9.4", title: "微積分の基本定理の証明", description: "第1定理（F'(x)=f(x)）、第2定理（定積分 = 原始関数の差）の厳密な証明" },
                        ]
                    },
                    {
                        id: "10", title: "広義積分", description: "無限区間・無界関数の積分、収束判定法",
                        sections: [
                            { id: "10.1", title: "広義積分の定義（無限区間）", description: "∫_a^∞ f dx の定義（極限として）、絶対収束・条件収束の区別" },
                            { id: "10.2", title: "広義積分の定義（無界関数）", description: "∫_a^b f dx (f が b で無界) の定義、両側が問題の場合の主値積分" },
                            { id: "10.3", title: "収束判定法", description: "比較判定法（優関数）・M判定法の応用、ディリクレ判定法・アーベル判定法" },
                            { id: "10.4", title: "パラメータ依存積分の微分", description: "∫f(x,λ)dx の λ に関する微分（Leibniz 則）、収束条件と応用例" },
                        ]
                    },
                    {
                        id: "11", title: "積分と収束の深化", description: "積分と極限の交換、置換積分・部分積分の厳密な証明",
                        sections: [
                            { id: "11.1", title: "積分と極限の交換条件", description: "一様収束なら ∫lim f_n = lim ∫f_n（証明）、一様収束がないと崩れる反例" },
                            { id: "11.2", title: "置換積分と変数変換の厳密な証明", description: "置換積分（∫f(g(x))g'(x)dx = ∫f(u)du）の厳密な証明、条件の確認" },
                            { id: "11.3", title: "部分積分の厳密な証明と応用", description: "∫u v' dx = [uv] - ∫u' v dx の証明、漸化式・ガンマ関数への応用" },
                        ]
                    },
                ],
                prerequisites: ["1-2"]
            },
            {
                id: "2-4",
                title: "集合論",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "集合の基礎と公理", description: "集合の演算、ド・モルガンの法則、べき集合、素朴集合論の限界",
                        sections: [
                            { id: "1.1", title: "集合の定義と表記法", description: "外延的・内包的記法（{x | ...}）、∈・⊆・⊊の使い方、空集合 ∅ の扱い" },
                            { id: "1.2", title: "集合演算（和・積・差・補）", description: "A∪B, A∩B, A\\B, A^c の定義と基本性質、ド・モルガンの法則の証明と一般化" },
                            { id: "1.3", title: "べき集合と直積", description: "べき集合 P(A)、|P(A)|=2^{|A|}、直積 A×B の定義、集合族のインデックス付き表記" },
                            { id: "1.4", title: "ラッセルのパラドックス", description: "素朴集合論の矛盾（自分自身を含まない集合の全体 R∈R?）、パラドックスが公理的集合論の動機になること" },
                            { id: "1.5", title: "公理的集合論の概観（ZF公理系）", description: "外延の公理・分出公理・正則性公理など主要公理の役割の概観、選択公理 (AC) の独立性の紹介" },
                        ]
                    },
                    {
                        id: "2", title: "写像", description: "写像、定義域、値域、全射、単射、全単射",
                        sections: [
                            { id: "2.1", title: "写像の定義と基本性質", description: "定義域・余域・値域・像・逆像の定義、恒等写像・包含写像・定値写像" },
                            { id: "2.2", title: "全射・単射・全単射の定義と判定", description: "各性質の厳密な定義（∀y∃x / 単射性 / 両方）、例と反例" },
                            { id: "2.3", title: "合成写像と逆写像", description: "合成 g∘f の定義・結合律、全単射の逆写像の存在、(g∘f)^{-1}=f^{-1}∘g^{-1}" },
                            { id: "2.4", title: "像と逆像の性質", description: "f(A∪B)=f(A)∪f(B), f^{-1}(C∩D)=f^{-1}(C)∩f^{-1}(D) などの証明" },
                        ]
                    },
                    {
                        id: "3", title: "関係", description: "同値関係、同値類、商集合",
                        sections: [
                            { id: "3.1", title: "2項関係の定義と分類", description: "A×A の部分集合としての2項関係、反射律・対称律・推移律・反対称律の定義" },
                            { id: "3.2", title: "同値関係の定義と例", description: "3公理（反射・対称・推移）を満たす関係、mod n の合同・平行・等しい大きさ等" },
                            { id: "3.3", title: "同値類と商集合", description: "同値類 [a] の定義、商集合 A/∼ の構成、同値類が A の分割を与えること" },
                            { id: "3.4", title: "商写像と普遍性", description: "自然な射影 π: A→A/∼、商集合の普遍性（因数分解の定理）" },
                        ]
                    },
                    {
                        id: "4", title: "順序と帰納的定義", description: "半順序、全順序、整列集合、ペアノの公理、超限帰納法",
                        sections: [
                            { id: "4.1", title: "半順序と全順序の定義", description: "半順序（反射・反対称・推移）と全順序（線形順序）の公理、ハッセ図" },
                            { id: "4.2", title: "上限・下限・最大元・極大元", description: "各概念の厳密な定義と違い（上限と最大元の差）、包含順序での例" },
                            { id: "4.3", title: "整列集合と数学的帰納法の基礎", description: "整列順序の定義、N の整列性、整列順序に基づく帰納法・再帰定理の基礎" },
                            { id: "4.4", title: "ペアノの公理と自然数の構成", description: "ペアノの公理（後継者・単射・0の非後継者・帰納的閉包）、集合論的な自然数の構成（空集合の反復）" },
                            { id: "4.5", title: "超限帰納法と順序数の概念", description: "整列集合上の超限帰納法の定式化、順序数 0, 1, ..., ω, ω+1, ... の概念と基数との区別" },
                        ]
                    },
                    {
                        id: "5", title: "濃度の理論", description: "対等・可算・非可算、対角線論法、ベルンシュタインの定理",
                        sections: [
                            { id: "5.1", title: "集合の対等と濃度の定義", description: "全単射で対等を定義、有限/無限集合の厳密な区別、デデキント無限の概念" },
                            { id: "5.2", title: "可算集合の例と証明", description: "Z・Q の可算性（対角線的列挙法）、可算集合の部分集合・有限直積の可算性" },
                            { id: "5.3", title: "カントールの対角線論法", description: "対角線論法の仕組み（対角成分を変える汎用手法）、[0,1] の非可算性の証明" },
                            { id: "5.4", title: "カントールの定理 |A|<|P(A)|", description: "f: A→P(A) が全射にならないことの証明（対角線論法の一般化）、濃度の無限の階層" },
                            { id: "5.5", title: "ベルンシュタインの定理", description: "|A|≤|B| かつ |B|≤|A| ⟹ |A|=|B| の証明（不動点定理による構成）、具体的応用（(0,1)と[0,1]の対等）" },
                            { id: "5.6", title: "連続体濃度と連続体仮説", description: "|R|=2^|N|(=ℵ_1?) の証明の概略、連続体仮説（CH）がZFCの下で証明も反証もできないこと" },
                        ]
                    },
                    {
                        id: "6", title: "選択公理", description: "選択公理の主張、ツォルンの補題、整列定理",
                        sections: [
                            { id: "6.1", title: "選択公理の主張と直感", description: "非空集合族から各 A_i の元を選ぶ関数（選択関数）の存在、無限族での非自明性" },
                            { id: "6.2", title: "ツォルンの補題", description: "帰納的順序集合（全順序部分集合に上界がある）は極大元を持つ、線形代数への応用（基底の存在）" },
                            { id: "6.3", title: "整列定理", description: "任意の集合を整列できる（整列定理）の主張、選択公理との同値性" },
                            { id: "6.4", title: "3命題の同値性の証明スケッチ", description: "選択公理 ⟺ ツォルンの補題 ⟺ 整列定理 の証明の流れ" },
                        ]
                    },
                ],
                prerequisites: ["1-2"]
            },
            {
                id: "2-5",
                title: "位相空間論I",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "位相空間", description: "開集合系の公理、位相の定義、開基、準開基",
                        sections: [
                            { id: "1.1", title: "位相の公理と定義", description: "開集合系の公理（∅・X が開、有限交叉・任意合併が開）、位相空間の定義" },
                            { id: "1.2", title: "位相の具体例", description: "離散位相・密着位相・R の通常の位相・有限補位相・順序位相" },
                            { id: "1.3", title: "開基の定義と開基の条件", description: "開基 B の定義（任意の開集合が B の元の合併）、開基の判定条件" },
                            { id: "1.4", title: "準開基から位相を生成する", description: "準開基（サブベース）の定義、有限交叉の全体を開基とする生成法" },
                        ]
                    },
                    {
                        id: "2", title: "開集合・閉集合・近傍", description: "内部、閉包、境界、導集合、近傍系、可算公理",
                        sections: [
                            { id: "2.1", title: "閉集合の定義と性質", description: "開集合の補が閉集合、閉集合の有限合併・任意交叉が閉" },
                            { id: "2.2", title: "内部・閉包・境界・導集合", description: "内部 int A・閉包 cl A の定義と性質、境界 ∂A = cl A ∩ cl A^c、集積点と導集合" },
                            { id: "2.3", title: "稠密性と可分性", description: "稠密な部分集合の定義（Q ⊂ R など）、可分空間の定義と例" },
                            { id: "2.4", title: "近傍と近傍系の定義", description: "点 x の近傍の定義（x を含む開集合を含む集合）、近傍系が位相と双対的なこと" },
                            { id: "2.5", title: "近傍基と第一可算公理", description: "近傍基（近傍系の縮小）の定義、第一可算公理（可算近傍基を持つ）と点列収束の関係" },
                            { id: "2.6", title: "第二可算公理", description: "可算な開基を持つ（第二可算）、可分性・Lindelöf 性との関係" },
                        ]
                    },
                    {
                        id: "3", title: "連続写像", description: "位相空間における連続性の定義、初期位相・終位相",
                        sections: [
                            { id: "3.1", title: "開集合による連続性の定義", description: "f^{-1}(U)∈T_X（開集合の逆像が開集合）⟺ 連続の証明" },
                            { id: "3.2", title: "連続性の同値条件", description: "閉集合の逆像が閉・近傍を使った条件・点列を使った条件など" },
                            { id: "3.3", title: "連続写像の合成と安定性", description: "連続写像の合成は連続、制限写像・包含写像の連続性" },
                            { id: "3.4", title: "初期位相・終位相", description: "写像族をすべて連続にする最弱・最強の位相、積位相・商位相との関係" },
                        ]
                    },
                    {
                        id: "4", title: "同相写像と位相的不変量", description: "位相的性質、同相写像、位相的不変量",
                        sections: [
                            { id: "4.1", title: "同相写像の定義", description: "全単射・連続・逆も連続 = 同相写像、位相的同値の概念" },
                            { id: "4.2", title: "同相の例", description: "(0,1) と R, 円と正方形の周、トポロジーで見た杯とドーナツの比較" },
                            { id: "4.3", title: "位相的不変量", description: "コンパクト性・連結性・ハウスドルフ性は同相不変量（証明付き）" },
                            { id: "4.4", title: "埋め込みと位相的不変量の応用", description: "埋め込み（同相な部分空間への写像）、ホモロジーへのつながり" },
                        ]
                    },
                    {
                        id: "5", title: "空間の構成（部分・積・商）", description: "相対位相、直積空間、商空間、チコノフの定理",
                        sections: [
                            { id: "5.1", title: "部分空間（相対位相）", description: "T_Y = {U ∩ Y | U ∈ T_X} による部分空間位相の構成、遺伝的性質（ハウスドルフ・第一可算性）" },
                            { id: "5.2", title: "有限積位相の定義と普遍性", description: "X × Y の積位相の定義、射影の連続性、積写像の連続性判定" },
                            { id: "5.3", title: "積空間での位相的性質の保存", description: "有限積でのコンパクト性・連結性・ハウスドルフ性の保存の証明" },
                            { id: "5.4", title: "商位相と商空間", description: "商写像の定義（q^{-1}(V) が開 ⟺ V が開）、商空間の普遍性" },
                            { id: "5.5", title: "商空間の例とチコノフの定理", description: "トーラス・メビウスの帯・射影平面 RP^2 の商空間としての構成、チコノフの定理の主張（コンパクト空間の任意積はコンパクト）" },
                        ]
                    },
                    {
                        id: "6", title: "分離公理", description: "T0, T1, T2（ハウスドルフ）, T3, T4（正規）空間",
                        sections: [
                            { id: "6.1", title: "T0・T1空間の定義", description: "T0（コルモゴロフ）：異なる2点を開集合で区別、T1：全ての一点集合が閉" },
                            { id: "6.2", title: "ハウスドルフ空間（T2）", description: "異なる2点を分離する互いに素な開集合の存在、重要性と例" },
                            { id: "6.3", title: "正則空間（T3）と完全正則空間", description: "点と閉集合の分離（T3）、連続関数による分離（T_{3.5}=完全正則）" },
                            { id: "6.4", title: "正規空間（T4）とウリゾーンの補題", description: "閉集合同士の分離（T4）、連続関数の存在を示すウリゾーンの補題" },
                        ]
                    },
                    {
                        id: "7", title: "コンパクト性", description: "開被覆、有限部分被覆、ハイネ・ボレルの定理、一様連続",
                        sections: [
                            { id: "7.1", title: "コンパクト性の定義", description: "任意の開被覆が有限部分被覆を持つ、コンパクト空間の基本例" },
                            { id: "7.2", title: "コンパクト集合の基本性質", description: "連続写像の連続像はコンパクト、ハウスドルフ空間内のコンパクト集合は閉" },
                            { id: "7.3", title: "コンパクト空間での連続写像の性質", description: "コンパクト空間から T2 への連続全単射は同相、最大値定理・一様連続定理へのつながり" },
                            { id: "7.4", title: "ハイネ・ボレルの定理", description: "R^n の部分集合がコンパクト ⟺ 有界かつ閉（証明：Bolzano-Weierstrass + 閉集合の性質）" },
                            { id: "7.5", title: "逐次コンパクト性", description: "逐次コンパクト（任意の点列が収束部分列を持つ）、第一可算空間でのコンパクト性との同値" },
                            { id: "7.6", title: "コンパクト空間上の一様連続", description: "コンパクト距離空間上の連続関数は一様連続（一般的な証明）、ハイネ・カントールの定理との統一的理解" },
                        ]
                    },
                    {
                        id: "8", title: "連結性", description: "連結空間、弧状連結、連結成分",
                        sections: [
                            { id: "8.1", title: "連結空間の定義と例", description: "X が2つの非空な互いに素な開集合の和になれない ⟺ 連結、R の連結性" },
                            { id: "8.2", title: "連続写像と連結性", description: "連続写像の連続像は連結（中間値定理の一般化）" },
                            { id: "8.3", title: "弧状連結と連結の関係", description: "弧状連結 ⟹ 連結（逆は成立しない例：topologist's sine curve）" },
                            { id: "8.4", title: "連結成分と局所連結性", description: "連結成分の定義・性質、局所連結・局所弧状連結空間の概念" },
                        ]
                    },
                    {
                        id: "9", title: "距離空間", description: "距離関数、距離位相、ベール圏定理",
                        sections: [
                            { id: "9.1", title: "距離関数と距離空間", description: "距離の公理（非負・対称・三角不等式）、開球 B(x,r) による位相の構成" },
                            { id: "9.2", title: "距離空間での連続性・収束", description: "点列の収束、ε-δ による連続性、距離空間はT2空間であること" },
                            { id: "9.3", title: "距離空間の等長写像と同型", description: "等長写像の定義、等長同型（距離空間としての同値）、非等長でも同相な例" },
                            { id: "9.4", title: "ベール圏定理", description: "完備距離空間は第一カテゴリーでない（可算個の閉な疎集合の合併にならない）、連続関数の不連続点の稠密性への応用" },
                            { id: "9.5", title: "距離空間のコンパクト性と全有界性", description: "全有界性（任意の ε>0 について有限 ε-網が存在）、完備かつ全有界 ⟺ 列コンパクトの証明" },
                        ]
                    },
                    {
                        id: "10", title: "完備距離空間", description: "コーシー列、完備性、完備化の構成",
                        sections: [
                            { id: "10.1", title: "コーシー列と完備性の定義", description: "コーシー列の定義、完備性（すべてのコーシー列が収束）、完備でない例 Q, (0,1)" },
                            { id: "10.2", title: "完備な距離空間の例", description: "R^n・C[a,b]（sup ノルム）・ℓ^p 空間の完備性の証明の概略" },
                            { id: "10.3", title: "完備化の構成", description: "任意の距離空間の完備化の存在（コーシー列の同値類）と等長同型としての一意性" },
                            { id: "10.4", title: "バナッハの不動点定理", description: "縮小写像は唯一の不動点を持つ（証明）、ODE の解の存在・一意性定理への応用" },
                        ]
                    },
                ],
                prerequisites: ["2-3", "2-4"]
            },
            {
                id: "2-6",
                title: "微分方程式I",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "1階常微分方程式", description: "変数分離形、同次形、線形、完全微分方程式、特殊型",
                        sections: [
                            { id: "1.1", title: "変数分離形", description: "dy/dx = f(x)g(y) の解法、具体例（指数成長・ロジスティック方程式）" },
                            { id: "1.2", title: "1階線形方程式", description: "y' + P(x)y = Q(x) の積分因子 e^{∫P dx} による解法、同次形の変数変換" },
                            { id: "1.3", title: "完全微分方程式", description: "M dx + N dy = 0 が完全 ⟺ ∂M/∂y = ∂N/∂x の判定と積分因子による変換" },
                            { id: "1.4", title: "ベルヌーイ型とリッカティ型", description: "y' + P(x)y = Q(x)y^n（ベルヌーイ）の置換、リッカティ方程式の特殊解を使った線形化" },
                            { id: "1.5", title: "クレロー方程式と包絡線", description: "y = xy' + f(y') の形の方程式、一般解（直線族）と特異解（包絡線）の求め方" },
                        ]
                    },
                    {
                        id: "2", title: "存在と一意性", description: "ピカールの逐次近似法、リプシッツ条件",
                        sections: [
                            { id: "2.1", title: "初期値問題の設定", description: "y' = f(x, y), y(x_0) = y_0 の形式、解の意味、局所解と大域解の違い" },
                            { id: "2.2", title: "リプシッツ条件と平滑性", description: "f がリプシッツ連続の定義、定理の成立条件と反例" },
                            { id: "2.3", title: "ピカール・リンデレーフの定理", description: "f がリプシッツ連続なら局所的に一意解が存在（主張と証明の概略）" },
                            { id: "2.4", title: "逐次近似による証明", description: "ピカード反復 y_{n+1}(x)=y_0+∫f(t,y_n(t))dt の収束性、縮小写像の原理の適用" },
                        ]
                    },
                    {
                        id: "3", title: "線形微分方程式の理論", description: "斉次方程式、非斉次方程式、ロンスキアン",
                        sections: [
                            { id: "3.1", title: "斉次線形方程式と解空間", description: "L[y]=0 の解の重ね合わせ原理、解空間が n 次元ベクトル空間であること" },
                            { id: "3.2", title: "ロンスキアンと基本解系", description: "ロンスキアン行列式 W(y_1,...,y_n) の定義、W≠0 ⟺ 基本解系の判定" },
                            { id: "3.3", title: "非斉次方程式と定数変化法", description: "一般解 = 特殊解 + 斉次一般解、定数変化法による特殊解の構成" },
                            { id: "3.4", title: "解の最大延長と大域的存在", description: "局所解の最大延長定理（グロンウォールの補題）、右端爆発の例と有界性条件" },
                        ]
                    },
                    {
                        id: "4", title: "定数係数線形方程式", description: "特性方程式、重根の場合、複素根",
                        sections: [
                            { id: "4.1", title: "特性方程式と実数単根の場合", description: "y=e^{λx} を代入して得られる代数方程式、実数単根 λ_1,...,λ_n に対する基本解" },
                            { id: "4.2", title: "重根の場合", description: "重根 λ（重数 k）→ e^{λx}, xe^{λx},..., x^{k-1}e^{λx} が基本解となること" },
                            { id: "4.3", title: "複素根の場合", description: "複素根 α±βi → e^{αx}cos(βx), e^{αx}sin(βx) の実数解、オイラーの公式との関係" },
                            { id: "4.4", title: "n階方程式の一般解の構造", description: "n 階定数係数線形方程式の基本解系と一般解の表示、物理モデル（振動など）への応用" },
                        ]
                    },
                    {
                        id: "5", title: "非同次方程式の解法", description: "未定係数法、定数変化法（一般化）、グリーン関数",
                        sections: [
                            { id: "5.1", title: "未定係数法", description: "右辺が多項式・指数・三角関数の場合の特殊解の設定と決定手順" },
                            { id: "5.2", title: "定数変化法（一般化）", description: "n 階方程式への定数変化法の拡張、ロンスキアンを用いた公式" },
                            { id: "5.3", title: "グリーン関数の導入", description: "非同次問題の解を積分で表すグリーン関数の構成（初歩）、インパルス応答との関係" },
                        ]
                    },
                    {
                        id: "6", title: "連立微分方程式", description: "行列形式、固有値による解法",
                        sections: [
                            { id: "6.1", title: "行列形式への変換", description: "x' = Ax + b(t) の形、高階 ODE の1階連立系への変換" },
                            { id: "6.2", title: "対角化可能な場合の解法", description: "固有値・固有ベクトルを用いた一般解の構成（実数固有値・対角化可能な場合）" },
                            { id: "6.3", title: "複素固有値の場合", description: "複素固有値 α±βi に対する実数形の解の構成" },
                        ]
                    },
                    {
                        id: "7", title: "安定性の入門", description: "平衡点、相平面、線形化",
                        sections: [
                            { id: "7.1", title: "平衡点と相平面", description: "自律系 x' = f(x) の平衡点の定義、相平面上での解の流れの解釈" },
                            { id: "7.2", title: "線形化と局所安定性", description: "ヤコビアンによる線形化、固有値の符号と平衡点の安定性の型（鞍点・渦・節）" },
                        ]
                    },
                ],
                prerequisites: ["1-2", "2-1"]
            },
            {
                id: "2-7",
                title: "整数論I",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "整除性", description: "最大公約数、最小公倍数、ユークリッドの互除法",
                        sections: [
                            { id: "1.1", title: "整除の定義と基本性質", description: "a | b の定義、整除の推移性・線形性（a|b, a|c ⟹ a|(bm+cn)）" },
                            { id: "1.2", title: "最大公約数の定義と性質", description: "gcd(a,b) の定義、gcd の基本性質（対称性・結合律）、lcm との関係 lcm(a,b)=ab/gcd(a,b)" },
                            { id: "1.3", title: "ユークリッドの互除法", description: "除算の原理 a=qb+r を繰り返すアルゴリズム、正しさの証明" },
                            { id: "1.4", title: "互除法の計算量と応用", description: "フィボナッチ数列で最悪計算量（対数時間）、コンピュータでの実装" },
                        ]
                    },
                    {
                        id: "2", title: "ベズーの等式", description: "1次不定方程式",
                        sections: [
                            { id: "2.1", title: "ベズーの等式の証明", description: "ax + by = gcd(a,b) となる整数解 (x,y) の存在、拡張ユークリッド法による構成" },
                            { id: "2.2", title: "1次不定方程式の解全体", description: "ax + by = c の整数解全体の記述，gcd(a,b) | c が解存在の必要十分条件" },
                            { id: "2.3", title: "歴きユークリッド法のアルゴリズム", description: "gcd を計算しながら同時にベズー係数を求める具体的手順" },
                            { id: "2.4", title: "互いに素な整数の性質", description: "gcd(a,b)=1 の場合の特別な性質、ベズー等式の応用" },
                        ]
                    },
                    {
                        id: "3", title: "素数", description: "素数の無限性、素因数分解の一意性、エラトステネスの篩",
                        sections: [
                            { id: "3.1", title: "素数の定義と基本性質", description: "素数・合成数の定義、p | ab ⟹ p | a または p | b の証明（ベズー等式を利用）" },
                            { id: "3.2", title: "算術の基本定理", description: "素因数分解の存在（数学的帰納法）と一意性（ベズー等式を利用）の証明" },
                            { id: "3.3", title: "素数の無限性", description: "ユークリッドの証明（背理法）、ディリクレの算術級数の紹介" },
                            { id: "3.4", title: "エラトステネスの篩と素数分布", description: "篩のアルゴリズムと計算量 O(n log log n)、素数定理（漸近式）の紹介" },
                        ]
                    },
                    {
                        id: "4", title: "合同式", description: "合同算術、合同式の演算",
                        sections: [
                            { id: "4.1", title: "合同の定義と計算規則", description: "a ≡ b (mod m) の定義（m | a-b）、和・積・べき乗の合同の成立" },
                            { id: "4.2", title: "剰余類と圈構造", description: "Z/mZ の加法環・乗法の構造、共通代表元の計算" },
                            { id: "4.3", title: "逆元の存在条件", description: "a の mod m の山の存在 ⟺ gcd(a,m)=1、逆元の計算方法（互除法を使用）" },
                            { id: "4.4", title: "1次合同方程式の解法", description: "ax ≡ b (mod m) の解の存在条件と解ᚋの決定、gcd(a,m) による解の個数" },
                        ]
                    },
                    {
                        id: "5", title: "フェルマーの小定理", description: "証明と応用",
                        sections: [
                            { id: "5.1", title: "定理の主張と証明（御絏射による）", description: "p が素数、p ∤ a ⟹ a^{p-1} ≡ 1 (mod p) 、(Z/pZ)^* の乃積を利用した証明" },
                            { id: "5.2", title: "ウィルソンの定理", description: "(p-1)! ≡ -1 (mod p) の主張と証明、素数判定への応用" },
                            { id: "5.3", title: "フェルマーの小定理とRSA暗号への応用", description: "RSA暗号の仕組みとフェルマーの小定理の役割" },
                            { id: "5.4", title: "べき乗の高速計算", description: "二進法とフェルマーの小定理による a^k mod p の効率的計算（O(log k) 回演算）" },
                        ]
                    },
                    {
                        id: "6", title: "オイラーの関数", description: "φ(n)の性質、オイラーの定理",
                        sections: [
                            { id: "6.1", title: "φ(n) の定義と計算公式", description: "1 〜 n で n と互いに素な整数の個数、公式 φ(p^k) = p^{k-1}(p-1) の導出" },
                            { id: "6.2", title: "φ の乗法性", description: "gcd(m,n) = 1 ⟹ φ(mn) = φ(m)φ(n) の証明、最小乗法的関数の構造" },
                            { id: "6.3", title: "オイラーの定理", description: "gcd(a,n) = 1 ⟹ a^{φ(n)} ≡ 1 (mod n) の証明・応用（フェルマーの小定理の一般化）" },
                            { id: "6.4", title: "φ の合計公式と素因数分解への応用", description: "Σ_{d|n} φ(d) = n の証明、n の素因数分解から φ(n) を直接計算する公式" },
                        ]
                    },
                ],
                prerequisites: ["高校数学"]
            },
        ]
    },
    {
        id: "stage-3",
        title: "Lv.3：広がる数学",
        topics: [
            {
                id: "3-1",
                title: "実解析II",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "測度論の基礎", description: "集合族と測度の定義",
                        sections: [
                            { id: "1.1", title: "集合族とσ-加法族", description: "集合代数、σ-加法族の定義と生成、ボレル集合族" },
                            { id: "1.2", title: "測度の定義と基本的性質", description: "有限加法性、可算加法性、測度の連続性" },
                            { id: "1.3", title: "外測度と可測性", description: "外測度の定義、カラテオドリの可測条件" },
                            { id: "1.4", title: "ルベーグ測度の構成", description: "区間の体積からの拡張、ルベーグ測度の完備性" },
                            { id: "1.5", title: "ボレル集合族とルベーグ可測集合", description: "ボレル集合とルベーグ可測集合の包含関係" },
                            { id: "1.6", title: "測度空間の完備化", description: "零集合、完備測度空間への拡張" }
                        ]
                    },
                    {
                        id: "2", title: "可測関数", description: "可測性の定義と性質",
                        sections: [
                            { id: "2.1", title: "可測関数の定義と例", description: "可測空間上の関数、単純な例（指示関数）" },
                            { id: "2.2", title: "可測関数の性質と演算", description: "四則演算、max/min、極限操作による可測性の保存" },
                            { id: "2.3", title: "単関数による近似", description: "非負値可測関数の単関数近似定理" },
                            { id: "2.4", title: "概収束と測度収束", description: "a.e.収束、測度収束、リース・ワイルの定理" },
                            { id: "2.5", title: "エゴロフの定理", description: "概収束と一様収束の関係" },
                            { id: "2.6", title: "ルジンの定理", description: "可測関数と連続関数の関係" }
                        ]
                    },
                    {
                        id: "3", title: "ルベーグ積分", description: "積分の定義と収束定理",
                        sections: [
                            { id: "3.1", title: "単関数の積分", description: "標準形による定義、積分の線形性" },
                            { id: "3.2", title: "非負値可測関数の積分", description: "単関数近似による定義（sup）" },
                            { id: "3.3", title: "単調収束定理 (MCT)", description: "Leviの定理、項別積分" },
                            { id: "3.4", title: "ファトゥの補題", description: "積分の下極限と極限の積分" },
                            { id: "3.5", title: "ルベーグ可積分", description: "一般の可測関数の積分、L^1空間" },
                            { id: "3.6", title: "ルベーグの優収束定理 (DCT)", description: "積分の極限と極限の積分の交換条件" }
                        ]
                    },
                    {
                        id: "4", title: "L^p空間", description: "関数空間としての性質",
                        sections: [
                            { id: "4.1", title: "L^p空間の定義とノルム", description: "同値類としての関数、pノルム" },
                            { id: "4.2", title: "本質的上限とL^∞空間", description: "ess supの定義、L^∞ノルム" },
                            { id: "4.3", title: "主要な不等式", description: "ヘルダーの不等式、ミンコフスキーの不等式" },
                            { id: "4.4", title: "L^p空間の完備性", description: "リース・フィッシャーの定理、バナッハ空間" },
                            { id: "4.5", title: "稠密性", description: "連続関数や単関数のL^pにおける稠密性" },
                            { id: "4.6", title: "ヒルベルト空間としてのL^2", description: "内積構造、自乗可積分関数の重要性" }
                        ]
                    },
                    {
                        id: "5", title: "積分の多重性とフビニの定理", description: "直積測度と反復積分",
                        sections: [
                            { id: "5.1", title: "直積σ-加法族", description: "直積集合上のσ-加法族の生成" },
                            { id: "5.2", title: "直積測度", description: "直積測度の一意存在性" },
                            { id: "5.3", title: "トネリの定理", description: "非負値可測関数の反復積分の一致" },
                            { id: "5.4", title: "フビニの定理", description: "可積分関数の反復積分と積分の順序交換" },
                            { id: "5.5", title: "n次元ルベーグ測度", description: "R^n上の測度、極座標変換" }
                        ]
                    },
                    {
                        id: "6", title: "微分と積分", description: "ルベーグ積分と微分",
                        sections: [
                            { id: "6.1", title: "有界変動関数", description: "全変動、有界変動関数の性質" },
                            { id: "6.2", title: "絶対連続関数", description: "絶対連続性の定義、微積分学の基本定理の条件" },
                            { id: "6.3", title: "ルベーグの微分定理", description: "ルベーグ点、積分の微分" },
                            { id: "6.4", title: "微積分学の基本定理（ルベーグ版）", description: "不定積分の微分、絶対連続関数の復元" },
                            { id: "6.5", title: "カントール関数", description: "特異関数の例（悪魔の階段）" }
                        ]
                    },
                    {
                        id: "7", title: "測度の分解と表現定理", description: "ラドン・ニコディム、リースの表現定理",
                        sections: [
                            { id: "7.1", title: "符号付き測度", description: "正集合・負集合、ハーン分解" },
                            { id: "7.2", title: "ジョルダン分解", description: "測度の全変動、絶対連続性" },
                            { id: "7.3", title: "ラドン・ニコディムの定理", description: "測度の密度関数（ラドン・ニコディム微分）" },
                            { id: "7.4", title: "ルベーグ分解定理", description: "絶対連続部分と特異部分への分解" },
                            { id: "7.5", title: "リースの表現定理 (L^p)", description: "L^pの双対空間とL^qの同型 (1 < p < ∞)" }
                        ]
                    }
                ],
                prerequisites: ["2-3", "2-5"]
            },
            {
                id: "3-2",
                title: "ベクトル解析",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "ベクトル場の基礎", description: "スカラー場・ベクトル場と微分演算子",
                        sections: [
                            { id: "1.1", title: "スカラー場と勾配 (grad)", description: "方向微分、勾配ベクトルの幾何学的意味、ポテンシャル" },
                            { id: "1.2", title: "ベクトル場と発散 (div)", description: "湧き出し吸い込みのモデル、流束密度の概念" },
                            { id: "1.3", title: "回転 (rot/curl)", description: "渦の強さと向き、循環密度の概念" },
                            { id: "1.4", title: "ベクトル演算の公式", description: "div(rot F)=0, rot(grad f)=0, ラプラシアン Δf" }
                        ]
                    },
                    {
                        id: "2", title: "曲線座標系", description: "一般座標系における微分演算",
                        sections: [
                            { id: "2.1", title: "曲線座標系と基底ベクトル", description: "局所直交座標系、計量係数（スケール因子）" },
                            { id: "2.2", title: "円柱座標系", description: "(r, θ, z) での grad, div, rot, Δ の公式導出" },
                            { id: "2.3", title: "極座標系（球座標）", description: "(r, θ, φ) での grad, div, rot, Δ の公式導出" },
                            { id: "2.4", title: "一般直交曲線座標系での公式", description: "ラメ係数を用いた一般公式" }
                        ]
                    },
                    {
                        id: "3", title: "線積分", description: "スカラー場・ベクトル場の線積分",
                        sections: [
                            { id: "3.1", title: "曲線のパラメータ表示", description: "弧長パラメータ、曲線の接ベクトル" },
                            { id: "3.2", title: "スカラー場の線積分", description: "曲線の質量や重心の計算" },
                            { id: "3.3", title: "ベクトル場の線積分", description: "力の場がする仕事、流体の循環" },
                            { id: "3.4", title: "保存力場とポテンシャル", description: "経路無依存性、ポテンシャルの存在条件 (rot F = 0)" }
                        ]
                    },
                    {
                        id: "4", title: "グリーンの定理", description: "平面領域における積分定理",
                        sections: [
                            { id: "4.1", title: "グリーンの定理の主張", description: "平面上の線積分と二重積分の関係" },
                            { id: "4.2", title: "グリーンの定理の証明", description: "単純領域（x-単純かつy-単純）での証明" },
                            { id: "4.3", title: "面積の計算公式", description: "S = (1/2)∮(x dy - y dx) の導出と応用" },
                            { id: "4.4", title: "ベクトル形式での解釈", description: "2次元の発散定理・ストークスの定理としての見方" }
                        ]
                    },
                    {
                        id: "5", title: "面積分", description: "曲面上の積分",
                        sections: [
                            { id: "5.1", title: "曲面のパラメータ表示", description: "接平面、法線ベクトル、第一基本形式（概要）" },
                            { id: "5.2", title: "曲面積要素", description: "dS = |r_u × r_v| du dv の幾何学的導出" },
                            { id: "5.3", title: "スカラー場の面積分", description: "曲面の質量、重心" },
                            { id: "5.4", title: "ベクトル場の面積分（流束）", description: "面の向き、流束 ∫ F・n dS の物理的意味" }
                        ]
                    },
                    {
                        id: "6", title: "ガウスの発散定理", description: "3次元領域での積分定理",
                        sections: [
                            { id: "6.1", title: "発散定理の主張", description: "三重積分と閉曲面上の面積分の関係" },
                            { id: "6.2", title: "発散定理の証明", description: "標準的領域での証明" },
                            { id: "6.3", title: "物理学的応用", description: "流体の質量保存則（連続の方程式）、ガウスの法則" },
                            { id: "6.4", title: "立体角と逆二乗則の場", description: "原点を含む領域での湧き出し量の計算" }
                        ]
                    },
                    {
                        id: "7", title: "ストークスの定理", description: "曲面と境界曲線に関する積分定理",
                        sections: [
                            { id: "7.1", title: "ストークスの定理の主張", description: "曲面上の面積分と境界曲線上の線積分の関係" },
                            { id: "7.2", title: "ストークスの定理の証明", description: "パラメータ表示による証明、成分ごとの計算" },
                            { id: "7.3", title: "物理学的応用", description: "アンペールの法則、ファラデーの電磁誘導の法則" },
                            { id: "7.4", title: "ヘルムホルツの分解定理", description: "ベクトル場の渦なし成分と湧き出しなし成分への分解（概要）" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "2-2", "2-3"]
            },
            {
                id: "3-3",
                title: "複素解析",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "複素数の基礎", description: "複素平面と極形式",
                        sections: [
                            { id: "1.1", title: "複素数の定義と演算", description: "四則演算、実部・虚部、共役複素数" },
                            { id: "1.2", title: "複素平面（ガウス平面）", description: "絶対値、偏角、極形式 z = r(cosθ + i sinθ)" },
                            { id: "1.3", title: "ド・モアブルの定理とn乗根", description: "z^n の幾何学的意味、1のn乗根の配置" },
                            { id: "1.4", title: "複素平面の位相", description: "開集合、閉集合、領域、コンパクト性" }
                        ]
                    },
                    {
                        id: "2", title: "複素関数と微分", description: "正則関数の定義とコーシー・リーマンの方程式",
                        sections: [
                            { id: "2.1", title: "複素変数の関数", description: "写像としての複素関数 w = f(z)" },
                            { id: "2.2", title: "極限と連続性", description: "複素数列の収束、関数の連続性" },
                            { id: "2.3", title: "複素微分可能性と正則関数", description: "微分係数の定義、正則（holomorphic）の意味" },
                            { id: "2.4", title: "コーシー・リーマンの方程式 (C-R)", description: "正則であるための必要十分条件、調和関数との関係" }
                        ]
                    },
                    {
                        id: "3", title: "初等関数", description: "指数・対数・三角関数の複素拡張",
                        sections: [
                            { id: "3.1", title: "指数関数 e^z", description: "定義（級数またはオイラーの公式）、周期性、写像の様子" },
                            { id: "3.2", title: "三角関数と双曲線関数", description: "sin z, cos z, sinh z, cosh z の定義と公式" },
                            { id: "3.3", title: "対数関数 log z", description: "多価性、主値 Log z、分枝（ブランチ）" },
                            { id: "3.4", title: "一般のべき関数 z^a", description: "定義 z^a = e^{a log z} とその多価性" }
                        ]
                    },
                    {
                        id: "4", title: "複素積分", description: "コーシーの積分定理",
                        sections: [
                            { id: "4.1", title: "複素積分の定義", description: "線積分 ∫_C f(z) dz の定義と基本的性質" },
                            { id: "4.2", title: "原始関数の存在と積分", description: "経路無依存性、原始関数を用いた計算" },
                            { id: "4.3", title: "コーシーの積分定理", description: "単連結領域での周回積分の値、証明の概略（グリーンの定理版・グルサ版）" },
                            { id: "4.4", title: "コーシーの積分定理の応用", description: "経路変形原理" }
                        ]
                    },
                    {
                        id: "5", title: "正則関数の性質", description: "積分公式とテイラー展開",
                        sections: [
                            { id: "5.1", title: "コーシーの積分公式", description: "f(a) = (1/2πi)∮ f(z)/(z-a) dz、グルサの公式（高階導関数）" },
                            { id: "5.2", title: "正則関数の諸定理", description: "モレラの定理、リュービルの定理、代数学の基本定理" },
                            { id: "5.3", title: "最大値原理", description: "領域内部で絶対値が最大とならないこと" },
                            { id: "5.4", title: "テイラー展開", description: "正則関数の冪級数展開可能性、収束半径" }
                        ]
                    },
                    {
                        id: "6", title: "孤立特異点とローラン展開", description: "特異点の周りでの挙動",
                        sections: [
                            { id: "6.1", title: "ローラン展開", description: "円環領域での級数展開、主要部と正則部" },
                            { id: "6.2", title: "孤立特異点の分類", description: "除去可能特異点、極（位数）、真性特異点" },
                            { id: "6.3", title: "無限遠点", description: "リーマン球面、無限遠点での正則性・特異性" }
                        ]
                    },
                    {
                        id: "7", title: "留数定理", description: "積分の計算技術",
                        sections: [
                            { id: "7.1", title: "留数の定義と計算", description: "Res(f, a) の定義、極における計算公式" },
                            { id: "7.2", title: "留数定理", description: "∮ f(z) dz = 2πi Σ Res(f, a_k) の主張と証明" },
                            { id: "7.3", title: "定積分への応用", description: "三角関数の有理式の積分、実軸上の広義積分" },
                            { id: "7.4", title: "偏角の原理とルーシェの定理", description: "零点・極の個数と周回積分の関係、解の個数の評価" }
                        ]
                    },
                    {
                        id: "8", title: "等角写像", description: "幾何学的性質と応用",
                        sections: [
                            { id: "8.1", title: "等角写像の定義", description: "角の保存、正則関数との関係" },
                            { id: "8.2", title: "一次分数変換（メビウス変換）", description: "円円対応、不動点、具体的な写像例" },
                            { id: "8.3", title: "代表的な等角写像", description: "z^n, e^z, ジューコフスキー変換" },
                            { id: "8.4", title: "リーマンの写像定理（概要）", description: "単連結領域の等角同値性" }
                        ]
                    }
                ],
                prerequisites: ["2-2", "2-3"]
            },
            {
                id: "3-4",
                title: "群論",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "群の定義", description: "代数的構造への第一歩",
                        sections: [
                            { id: "1.1", title: "二項演算と代数系", description: "半群、モノイド、群の公理（結合律、単位元、逆元）" },
                            { id: "1.2", title: "群の具体例", description: "整数加法群 Z、有理数乗法群 Q^*、一般線形群 GL(n,R)" },
                            { id: "1.3", title: "アーベル群（可換群）", description: "交換法則を満たす群、非可換群との違い" },
                            { id: "1.4", title: "群の基本的な性質", description: "単位元・逆元の一意性、簡約法則、(ab)^{-1} = b^{-1}a^{-1}" }
                        ]
                    },
                    {
                        id: "2", title: "部分群", description: "群の中の群",
                        sections: [
                            { id: "2.1", title: "部分群の定義と判定法", description: "部分集合が群になる条件（演算で閉じている、逆元を含む）" },
                            { id: "2.2", title: "巡回群", description: "1つの元で生成される群、位数、生成元" },
                            { id: "2.3", title: "元の位数", description: "g^n = e となる最小の自然数 n、無限位数" },
                            { id: "2.4", title: "部分群の共通部分と生成", description: "共通部分は部分群、生成された部分群 <S>" }
                        ]
                    },
                    {
                        id: "3", title: "剰余類とラグランジュの定理", description: "群の分割",
                        sections: [
                            { id: "3.1", title: "剰余類（Coset）", description: "左剰余類 gH と右剰余類 Hg、同値関係としての理解" },
                            { id: "3.2", title: "ラグランジュの定理", description: "|G| = [G:H]・|H|、有限群の部分群の位数は群の位数の約数" },
                            { id: "3.3", title: "ラグランジュの定理の応用", description: "素数位数の群は巡回群、フェルマーの小定理の群論的証明" },
                            { id: "3.4", title: "指数", description: "部分群の指数 [G:H] の意味と性質" }
                        ]
                    },
                    {
                        id: "4", title: "正規部分群と商群", description: "群の準同型への布石",
                        sections: [
                            { id: "4.1", title: "正規部分群", description: "gHg^{-1} = H、左剰余類と右剰余類の一致" },
                            { id: "4.2", title: "商群（因子群）", description: "剰余類の集合 G/N に入る群構造、well-defined 性" },
                            { id: "4.3", title: "単純群", description: "正規部分群を持たない群（自明なものを除く）、有限単純群の分類（話題として）" },
                            { id: "4.4", title: "可解群", description: "交換子群、可解列、方程式論との関わり（概要）" }
                        ]
                    },
                    {
                        id: "5", title: "準同型写像", description: "群の構造を保つ写像",
                        sections: [
                            { id: "5.1", title: "準同型写像の定義", description: "f(xy) = f(x)f(y)、像 Im(f) と核 Ker(f)" },
                            { id: "5.2", title: "核と正規部分群", description: "Ker(f) は常に正規部分群であることの証明" },
                            { id: "5.3", title: "同型写像", description: "全単射準同型、群の同型 G ≅ H、構造の同一視" },
                            { id: "5.4", title: "自己同型群", description: "Aut(G)、内部自己同型 Inn(G)" }
                        ]
                    },
                    {
                        id: "6", title: "準同型定理", description: "群論の基本定理",
                        sections: [
                            { id: "6.1", title: "群の準同型定理（第一同型定理）", description: "G/Ker(f) ≅ Im(f) の主張と証明" },
                            { id: "6.2", title: "第二同型定理", description: "HN/N ≅ H/(H∩N) のダイヤモンド同型" },
                            { id: "6.3", title: "第三同型定理", description: "(G/N)/(H/N) ≅ G/H" },
                            { id: "6.4", title: "対応定理", description: "Gの部分群とG/Nの部分群の1対1対応" }
                        ]
                    },
                    {
                        id: "7", title: "群の具体例", description: "対称群と行列群",
                        sections: [
                            { id: "7.1", title: "対称群 S_n", description: "置換、巡回置換、互換、偶置換・奇置換" },
                            { id: "7.2", title: "交代群 A_n", description: "A_n の定義、A_5 の単純性（証明の概略）" },
                            { id: "7.3", title: "二面体群 D_n", description: "正多角形の対称性、生成元と関係式" },
                            { id: "7.4", title: "四元数群 Q_8", description: "非可換群の重要な例、{±1, ±i, ±j, ±k}" }
                        ]
                    },
                    {
                        id: "8", title: "群の作用", description: "幾何的対象への作用",
                        sections: [
                            { id: "8.1", title: "作用の定義", description: "左作用・右作用、G-集合、作用の例（置換、回転）" },
                            { id: "8.2", title: "軌道 (Orbit)", description: "Orb(x) = {gx | g∈G}、軌道分解" },
                            { id: "8.3", title: "固定部分群 (Stabilizer)", description: "Stab(x) = {g∈G | gx=x}、部分群になること" },
                            { id: "8.4", title: "軌道・固定群定理", description: "|G| = |Orb(x)|・|Stab(x)| の証明と応用" }
                        ]
                    },
                    {
                        id: "9", title: "バーンサイドの補題", description: "数え上げへの応用",
                        sections: [
                            { id: "9.1", title: "不動点集合", description: "Fix(g) = {x∈X | gx=x}、コーシー・フロベニウスの補題" },
                            { id: "9.2", title: "バーンサイドの補題", description: "軌道の個数 = (1/|G|) Σ |Fix(g)|" },
                            { id: "9.3", title: "数え上げ問題への応用", description: "円順列、ネックレス、立体の塗り分け問題" }
                        ]
                    },
                    {
                        id: "10", title: "シローの定理", description: "有限群の構造解析",
                        sections: [
                            { id: "10.1", title: "コーシーの定理", description: "p | |G| ならば位数 p の元が存在する" },
                            { id: "10.2", title: "シロー部分群", description: "p-群、シローp-部分群の定義" },
                            { id: "10.3", title: "シローの定理（第一・第二・第三）", description: "存在、共役性、個数に関する定理" },
                            { id: "10.4", title: "有限群の分類への応用", description: "位数 pq の群、位数 12, 15 等の群の構造決定" }
                        ]
                    }
                ],
                prerequisites: ["2-4", "2-7"]
            },
            {
                id: "3-5",
                title: "環論",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "環の基本概念", description: "環、部分環、整域",
                        sections: [
                            { id: "1.1", title: "環の定義", description: "加法群かつ乗法半群、分配法則、単位的環" },
                            { id: "1.2", title: "様々な環の例", description: "整数環 Z、多項式環 R[x]、行列環 M_n(R)" },
                            { id: "1.3", title: "零因子と整域", description: "零因子の定義、整域（Integral Domain）、簡約法則" },
                            { id: "1.4", title: "可逆元と単数群", description: "単数（Unit）、単数群 R^×、体の定義" }
                        ]
                    },
                    {
                        id: "2", title: "イデアルと剰余環・同型定理", description: "環の構造定理",
                        sections: [
                            { id: "2.1", title: "イデアルの定義", description: "左イデアル、右イデアル、両側イデアル" },
                            { id: "2.2", title: "生成されたイデアル", description: "主イデアル <a>、イデアルの和・積・共通部分" },
                            { id: "2.3", title: "剰余環 (Quotient Ring)", description: "R/I の演算定義、well-defined 性" },
                            { id: "2.4", title: "第一同型定理", description: "R/Ker(f) ≅ Im(f) の主張と証明" },
                            { id: "2.5", title: "第二・第三同型定理", description: "(I+J)/J ≅ I/(I∩J)、(R/I)/(J/I) ≅ R/J（I⊂Jのとき）" }
                        ]
                    },
                    {
                        id: "3", title: "素イデアルと極大イデアル", description: "重要なイデアルのクラス",
                        sections: [
                            { id: "3.1", title: "素イデアル", description: "ab ∈ P ⟹ a ∈ P or b ∈ P、R/P が整域であることと同値" },
                            { id: "3.2", title: "極大イデアル", description: "包含関係で極大な真のイデアル、R/M が体であることと同値" },
                            { id: "3.3", title: "ツォルンの補題と極大イデアルの存在", description: "極大イデアルの存在定理（選択公理）" },
                            { id: "3.4", title: "中国剰余定理（環論版）", description: "I + J = R（互いに素）なイデアルに対する R/(I∩J) ≅ R/I × R/J" }
                        ]
                    },
                    {
                        id: "4", title: "整域と商体", description: "分数の構成",
                        sections: [
                            { id: "4.1", title: "商体 (Field of Fractions)", description: "整域からの体の構成、普遍性" },
                            { id: "4.2", title: "局所化", description: "積閉集合 S による環の局所化 S^{-1}R（概要）" },
                            { id: "4.3", title: "多項式環 R[x]", description: "定義と基本性質、次数、R[x] の整域性" },
                            { id: "4.4", title: "多項式環の普遍性", description: "代入準同型（評価写像）、R[x] の普遍性" }
                        ]
                    },
                    {
                        id: "5", title: "ユークリッド整域 (ED)", description: "整数の一般化 I",
                        sections: [
                            { id: "5.1", title: "ユークリッド整域の定義", description: "ユークリッド写像（次関数）、除法の原理" },
                            { id: "5.2", title: "ガウス整数環 Z[i]", description: "Z[i] における除法、ノルム" },
                            { id: "5.3", title: "ユークリッドの互除法", description: "最大公約数 (GCD) の計算" }
                        ]
                    },
                    {
                        id: "6", title: "単項イデアル整域 (PID)", description: "整数の一般化 II",
                        sections: [
                            { id: "6.1", title: "PIDの定義", description: "すべてのイデアルが単項イデアルである整域" },
                            { id: "6.2", title: "ED ⟹ PID", description: "ユークリッド整域は単項イデアル整域であることの証明" },
                            { id: "6.3", title: "PIDにおける素イデアル", description: "素イデアルは極大イデアル（0を除く）" },
                            { id: "6.4", title: "ベズーの等式", description: "GCDの線形結合 expressibility" }
                        ]
                    },
                    {
                        id: "7", title: "一意分解整域 (UFD)", description: "素因数分解の一意性",
                        sections: [
                            { id: "7.1", title: "既約元と素元", description: "定義と違い、PIDでは一致すること" },
                            { id: "7.2", title: "UFDの定義", description: "因数分解の存在と単数倍を除いて一意" },
                            { id: "7.3", title: "PID ⟹ UFD", description: "単項イデアル整域は一意分解整域である" },
                            { id: "7.4", title: "最大公約数の存在", description: "UFDにおけるGCDの定義" }
                        ]
                    },
                    {
                        id: "8", title: "多項式環の性質と因数分解", description: "既約性の判定",
                        sections: [
                            { id: "8.1", title: "多変数多項式環 R[x_1,...,x_n]", description: "定義、次数、多変数UFDの構成" },
                            { id: "8.2", title: "ガウスの補題", description: "原始多項式の積は原始的、Z[x] と Q[x] での既約性の関係" },
                            { id: "8.3", title: "R が UFD ⟹ R[x] も UFD", description: "多項式環の一意分解性" },
                            { id: "8.4", title: "アイゼンシュタインの判定法", description: "強力な既約判定条件と応用例" }
                        ]
                    },
                    {
                        id: "9", title: "ネーター環（発展）", description: "イデアルの有限生成性",
                        sections: [
                            { id: "9.1", title: "昇鎖条件 (ACC)", description: "イデアルの昇鎖が停留する条件" },
                            { id: "9.2", title: "ネーター環の定義", description: "すべてのイデアルが有限生成、ACCとの同値性" },
                            { id: "9.3", title: "ヒルベルトの基底定理", description: "R がネーター環なら R[x] もネーター環" }
                        ]
                    }
                ],
                prerequisites: ["3-4"]
            },
            {
                id: "3-6",
                title: "体論I",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "体の拡大の基本", description: "拡大次数と代数拡大",
                        sections: [
                            { id: "1.1", title: "拡大体と拡大次数", description: "ベクトル空間としての拡大体 L/K、[L:K] の定義と連鎖律" },
                            { id: "1.2", title: "代数的元と超越的元", description: "代数的数の定義、超越数（π, e）の存在" },
                            { id: "1.3", title: "最小多項式", description: "代数的元 α の最小多項式 Irr(α, K)、単拡大 K(α) ≅ K[x]/(p(x))" },
                            { id: "1.4", title: "作図可能数", description: "定規とコンパスで作図可能な数と拡大次数の関係（2の冪乗）" }
                        ]
                    },
                    {
                        id: "2", title: "分離拡大", description: "重根のない多項式と拡大",
                        sections: [
                            { id: "2.1", title: "形式的微分と重根", description: "形式的微分 f'(x)、gcd(f, f') = 1 ⟺ 重根なし" },
                            { id: "2.2", title: "分離多項式と分離拡大", description: "分離多項式の定義、分離的代数拡大" },
                            { id: "2.3", title: "完全体", description: "すべての代数拡大が分離的な体（標数0の体、有限体）" },
                            { id: "2.4", title: "原始元定理", description: "有限分離拡大は単拡大 L = K(θ)" }
                        ]
                    },
                    {
                        id: "3", title: "分解体と正規拡大", description: "多項式の根をすべて含む体",
                        sections: [
                            { id: "3.1", title: "分解体の存在と一意性", description: "f(x) が一次式の積に分解する最小の拡大体、クロネッカーの方法" },
                            { id: "3.2", title: "正規拡大の定義と判定", description: "既約多項式が根を持てばすべての根を持つ拡大 ⟺ 分解体" },
                            { id: "3.3", title: "代数閉包", description: "すべての多項式が根を持つ体、存在と一意性（ツォルンの補題）" }
                        ]
                    },
                    {
                        id: "4", title: "有限体 (Galois Field)", description: "美しい構造を持つ有限集合の体",
                        sections: [
                            { id: "4.1", title: "有限体の性質", description: "位数は素数の冪 p^n、標数 p、フロベニウス写像 x -> x^p" },
                            { id: "4.2", title: "有限体の存在と一意性", description: "x^{p^n} - x の分解体としての構成、GF(p^n)" },
                            { id: "4.3", title: "有限体の部分体構造", description: "GF(p^m) ⊂ GF(p^n) ⟺ m | n" }
                        ]
                    },
                    {
                        id: "5", title: "ガロア理論の基本定理", description: "体と群の美しい対応",
                        sections: [
                            { id: "5.1", title: "ガロア拡大の定義", description: "ガロア拡大 = 分離かつ正規、ガロア群 Gal(L/K) の定義" },
                            { id: "5.2", title: "固定体と不変論", description: "部分群 H の固定体 L^H、アルティンの定理 [L : L^H] = |H|" },
                            { id: "5.3", title: "ガロアの基本定理", description: "中間体 M と部分群 H の反順序1対1対応の主張と証明" },
                            { id: "5.4", title: "正規部分群と正規拡大の対応", description: "H ◁ Gal(L/K) ⟺ L^H/K が正規拡大、Gal(L^H/K) ≅ G/H" },
                            { id: "5.5", title: "具体例", description: "Q(√2, √3)/Q、Q(ζ_8)/Q 等での対応の確認" }
                        ]
                    },
                    {
                        id: "6", title: "円分体", description: "1のn乗根が生成する体",
                        sections: [
                            { id: "6.1", title: "1の原始n乗根", description: "ζ_n、円分多項式 Φ_n(x)" },
                            { id: "6.2", title: "円分体のガロア群", description: "Gal(Q(ζ_n)/Q) ≅ (Z/nZ)^×" },
                            { id: "6.3", title: "正多角形の作図可能性", description: "ガウスの定理、正17角形の作図可能性" }
                        ]
                    },
                    {
                        id: "7", title: "方程式の可解性", description: "5次方程式の解の公式は存在するか",
                        sections: [
                            { id: "7.1", title: "可解群", description: "群の組成列、可換な剰余群" },
                            { id: "7.2", title: "方程式のガロア群", description: "多項式の最小分解体のガロア群" },
                            { id: "7.3", title: "ガロアの可解性定理", description: "方程式が代数的に解ける ⟺ ガロア群が可解群" },
                            { id: "7.4", title: "アーベル-ルフィニの定理", description: "5次以上の一般方程式が代数的に解けないことの証明（S_n, A_n の非可解性）" }
                        ]
                    }
                ],
                prerequisites: ["3-5"]
            },
            {
                id: "3-7",
                title: "位相空間論II",
                tags: ["主要分野"],
                chapters: [
                    {
                        id: "1", title: "ホモトピー", description: "連続変形とホモトピー型",
                        sections: [
                            { id: "1.1", title: "ホモトピーの定義", description: "写像のホモトピー、ホモトピー同値" },
                            { id: "1.2", title: "可縮空間", description: "一点にホモトピー同値な空間、凸集合の可縮性" },
                            { id: "1.3", title: "レトラクション", description: "レトラクト、変形レトラクトとその性質" }
                        ]
                    },
                    {
                        id: "2", title: "基本群", description: "ループのホモトピー類と群構造",
                        sections: [
                            { id: "2.1", title: "道とループ", description: "道の積、逆道、ループの定義" },
                            { id: "2.2", title: "基本群の定義", description: "π_1(X, x_0) の群構造の証明" },
                            { id: "2.3", title: "基点の変更", description: "基点の取り替えによる同型、単連結性" }
                        ]
                    },
                    {
                        id: "3", title: "円周の基本群と応用", description: "最初の計算例と重要な応用",
                        sections: [
                            { id: "3.1", title: "円周の基本群", description: "被覆 R → S^1 を用いた計算（π_1(S^1) ≅ Z）" },
                            { id: "3.2", title: "代数学の基本定理", description: "基本群を用いた証明" },
                            { id: "3.3", title: "ブラウワーの不動点定理", description: "2次元円板からのレトラクションの非存在" },
                            { id: "3.4", title: "ボルスク・ウラムの定理", description: "S^2 から R^2 への写像の性質" }
                        ]
                    },
                    {
                        id: "4", title: "ファン・カンペンの定理", description: "空間の貼り合わせと群",
                        sections: [
                            { id: "4.1", title: "群の自由積", description: "自由積と融合積（amalgamated product）の定義" },
                            { id: "4.2", title: "ファン・カンペンの定理", description: "定理の主張と適用条件（開被覆）" },
                            { id: "4.3", title: "セルの接着", description: "胞体複体（CW複体）の基本群の計算手法" }
                        ]
                    },
                    {
                        id: "5", title: "曲面の基本群", description: "ファン・カンペンの定理の応用",
                        sections: [
                            { id: "5.1", title: "球面と各次元", description: "S^n (n≧2) の単連結性" },
                            { id: "5.2", title: "トーラスと射影空間", description: "多角形の貼り合わせとしての基本群" },
                            { id: "5.3", title: "閉曲面の分類", description: "種数 g の曲面の基本群と可換化（H_1）" },
                            { id: "5.4", title: "結び目群（概要）", description: "3次元空間内の結び目の補空間の基本群（ヴィルティンガー表示）" }
                        ]
                    },
                    {
                        id: "6", title: "被覆空間", description: "被覆写像の理論",
                        sections: [
                            { id: "6.1", title: "被覆写像の定義", description: "被覆空間、底空間、局所同相性" },
                            { id: "6.2", title: "持ち上げ性質", description: "道の持ち上げ、ホモトピーの持ち上げ一意性" },
                            { id: "6.3", title: "一般の持ち上げ判定条件", description: "f_*π_1(Y) ⊂ p_*π_1(E) の条件" }
                        ]
                    },
                    {
                        id: "7", title: "被覆空間の分類", description: "ガロア対応",
                        sections: [
                            { id: "7.1", title: "被覆変換群", description: "被覆変換（デッキ変換）の定義と群構造" },
                            { id: "7.2", title: "普遍被覆空間", description: "単連結な被覆空間の存在と一意性" },
                            { id: "7.3", title: "被覆空間の基本定理", description: "部分群と被覆空間の1対1対応（ガロア対応）" }
                        ]
                    }
                ],
                prerequisites: ["2-5", "3-4"]
            },
            {
                id: "3-8",
                title: "多重線形代数学I",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "多重線形写像", description: "複数のベクトルを変数とする線形写像",
                        sections: [
                            { id: "1.1", title: "多重線形写像の定義", description: "双線形写像、n重線形写像、成分表示" },
                            { id: "1.2", title: "テンソル積の普遍性", description: "双線形写像を線形写像に一元化する空間 V⊗W の存在と一意性" },
                            { id: "1.3", title: "テンソル積の構成", description: "自由ベクトル空間の商空間としての構成、基底のテンソル積" },
                            { id: "1.4", title: "内積と縮約", description: "双対空間とのペアリング、トレースの一般化" }
                        ]
                    },
                    {
                        id: "2", title: "テンソル代数", description: "テンソルの演算体系",
                        sections: [
                            { id: "2.1", title: "(p, q) 型テンソル", description: "p個のベクトルとq個のコベクトルのテンソル積、成分変換則" },
                            { id: "2.2", title: "テンソル代数 T(V)", description: "テンソル空間の直和、次数付き代数としての構造" },
                            { id: "2.3", title: "対称テンソルと交代テンソル", description: "対称化作用素 S、交代化作用素 A" }
                        ]
                    },
                    {
                        id: "3", title: "外積代数 (Exterior Algebra)", description: "交代性の代数",
                        sections: [
                            { id: "3.1", title: "外積（ウェッジ積）", description: "v∧w = v⊗w - w⊗v、反対称性" },
                            { id: "3.2", title: "外積代数 ∧(V)", description: "グラスマン代数、基底と次元、binom(n, k)" },
                            { id: "3.3", title: "行列式と外積", description: "v_1 ∧ ... ∧ v_n = det(A) e_1 ∧ ... ∧ e_n" },
                            { id: "3.4", title: "プルバック（引き戻し）", description: "線形写像 f: V -> W による f*: ∧(W) -> ∧(V) の誘導" }
                        ]
                    },
                    {
                        id: "4", title: "双対空間と双対性", description: "線形形式の空間",
                        sections: [
                            { id: "4.1", title: "双対基底", description: "e^i(e_j) = δ_ij、双対空間の次元" },
                            { id: "4.2", title: "二重双対空間 V**", description: "自然な同型 V ≅ V**（有限次元の場合）" },
                            { id: "4.3", title: "転置写像", description: "線形写像の双対 f*: W* -> V*、行列の転置との関係" }
                        ]
                    },
                    {
                        id: "5", title: "向きと体積形式", description: "幾何学的応用",
                        sections: [
                            { id: "5.1", title: "ベクトル空間の向き", description: "基底の変換行列の行列式の符号、向き付け可能性" },
                            { id: "5.2", title: "体積形式", description: "非退化なトップフォーム ω ∈ ∧^n(V*)、行列式との関係" },
                            { id: "5.3", title: "内積空間の体積", description: "グラム行列式、リーマン計量への布石" }
                        ]
                    },
                    {
                        id: "6", title: "テンソルとしての行列", description: "線形代数の再解釈",
                        sections: [
                            { id: "6.1", title: "Hom(V, W) ≅ V* ⊗ W", description: "線形写像と(1,1)型テンソルの対応" },
                            { id: "6.2", title: "トレースの不変性", description: "基底によらない定義 tr: V* ⊗ V -> K" },
                            { id: "6.3", title: "縮約（コントラクション）", description: "テンソルの階数を下げる操作 C: T^p_q -> T^{p-1}_{q-1}" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "3-4", "3-5"]
            },
            {
                id: "3-9",
                title: "フーリエ解析",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "フーリエ級数の基礎", description: "周期関数の三角級数展開と収束理論",
                        sections: [
                            { id: "1.1", title: "フーリエ係数と複素フーリエ級数", description: "周期 2π の関数 f のフーリエ係数 c_n=(1/2π)∫f(x)e^{-inx}dx の定義、実形式（正弦・余弦展開）と複素形式の対応、計算例" },
                            { id: "1.2", title: "フーリエ級数の各点収束（ディリクレの定理）", description: "区分的 C^1 級関数での各点収束、不連続点 x_0 での収束値が (f(x_0^+)+f(x_0^-))/2 になること、ディリクレ核による解析" },
                            { id: "1.3", title: "パーセバルの等式と L^2 収束", description: "Σ|c_n|^2 = (1/2π)∫|f(x)|^2 dx の証明、フーリエ級数の L^2 収束（部分和が f に L^2 ノルムで収束）、完全正規直交系の概念" },
                            { id: "1.4", title: "ギブス現象とフェエール総和法", description: "不連続点近傍のオーバーシュート約 8.9% の出現メカニズム、部分和の代わりにチェザロ和（フェエールの定理）を使うと一様収束が回復することの証明" },
                        ]
                    },
                    {
                        id: "2", title: "フーリエ級数の発展", description: "一般周期・偶奇展開・微積分との関係・多次元への拡張",
                        sections: [
                            { id: "2.1", title: "一般周期 2L のフーリエ級数", description: "区間 [-L, L] 上のフーリエ展開 f(x)=Σ(a_n cos(nπx/L)+b_n sin(nπx/L))、周期変換 t=πx/L による 2π 周期への帰着、有界区間上の展開への応用" },
                            { id: "2.2", title: "フーリエ正弦展開とフーリエ余弦展開", description: "奇関数拡張によるフーリエ正弦展開・偶関数拡張によるフーリエ余弦展開の構成、[0,L] 上の関数への応用、物理的境界条件（ディリクレ・ノイマン）との対応" },
                            { id: "2.3", title: "フーリエ級数の微分と積分", description: "項別微分の許容条件（絶対収束と連続微分可能性）、項別積分の無条件成立、高次導関数とフーリエ係数の減衰速度 |c_n|=O(n^{-k}) の関係" },
                            { id: "2.4", title: "多次元フーリエ級数", description: "2変数以上の周期関数のフーリエ展開 f(x,y)=ΣΣ c_{mn} e^{i(mx+ny)}、多次元パーセバルの等式、トーラス T^n 上の展開の概念" },
                        ]
                    },
                    {
                        id: "3", title: "フーリエ変換の基礎", description: "非周期関数への拡張と L^1 理論",
                        sections: [
                            { id: "3.1", title: "フーリエ変換の定義と基本性質", description: "f̂(ξ)=∫_{-∞}^{∞} f(x)e^{-2πixξ}dx の定義（L^1 関数に対して）、線形性・推移・スケール変換・微分との交換 (d/dx f)^=(2πiξ)f̂ の証明" },
                            { id: "3.2", title: "逆フーリエ変換と反転公式", description: "f(x)=∫f̂(ξ)e^{2πixξ}dξ の成立条件（f および f̂ が共に L^1 の場合の証明）、反転公式が成立しない例、主値積分による拡張" },
                            { id: "3.3", title: "畳み込み定理", description: "畳み込み (f*g)(x)=∫f(x-y)g(y)dy の定義と L^1 での基本性質、(f*g)^=f̂·ĝ の証明、線形フィルタ・信号処理への応用" },
                            { id: "3.4", title: "プランシュレルの定理", description: "‖f‖_{L^2}=‖f̂‖_{L^2} の成立（等長性）、L^2 関数に対するフーリエ変換の拡張（L^1∩L^2 での稠密性を利用）、L^2 上のユニタリ変換としての解釈" },
                            { id: "3.5", title: "代表的な関数のフーリエ変換", description: "ガウス関数 e^{-πx^2} の自己双対性、矩形波・三角波の変換、ポアソン核・コーシー分布の変換、変換の対称性のまとめ" },
                        ]
                    },
                    {
                        id: "4", title: "フーリエ変換の発展", description: "シュワルツ空間・超関数・多次元・不確定性原理",
                        sections: [
                            { id: "4.1", title: "シュワルツ空間と急減少関数", description: "急減少関数の空間 S(R)={f∈C^∞ | sup x^α ∂^β f < ∞ for all α,β} の定義、S(R) 上でフーリエ変換が同型写像になること、S(R) の稠密性" },
                            { id: "4.2", title: "テンパード超関数とデルタ関数", description: "テンパード超関数 S'(R)（S(R) の双対空間）の定義、ディラックのデルタ関数 δ(x) の超関数としての厳密な定義、δ̂=1 の証明、超関数の微分" },
                            { id: "4.3", title: "多次元フーリエ変換", description: "R^n 上の関数のフーリエ変換 f̂(ξ)=∫_{R^n} f(x)e^{-2πi x·ξ} dx、多次元畳み込み・プランシュレル・反転公式の拡張、球面対称関数の変換（ハンケル変換への繋がり）" },
                            { id: "4.4", title: "不確定性原理", description: "ハイゼンベルクの不確定性原理 ‖xf‖_{L^2}·‖ξf̂‖_{L^2} ≥ (1/4π)‖f‖_{L^2}^2 の証明（部分積分と柯西・シュワルツ不等式）、時間-周波数局在のトレードオフの解釈" },
                        ]
                    },
                    {
                        id: "5", title: "離散フーリエ変換と高速フーリエ変換", description: "有限列のフーリエ解析とアルゴリズム",
                        sections: [
                            { id: "5.1", title: "離散フーリエ変換（DFT）の定義", description: "N 点列 {x_k}_{k=0}^{N-1} の DFT X_n=Σ x_k e^{-2πikn/N} の定義、1の N 乗根・バンデルモンド行列との関係、逆 DFT の公式" },
                            { id: "5.2", title: "DFT の性質", description: "線形性・推移性・循環畳み込み定理 (x*y)^=X·Y、パーセバルの等式（離散版）、DFT を通じた循環行列の対角化" },
                            { id: "5.3", title: "高速フーリエ変換（FFT）のアルゴリズム", description: "N=2^m の場合の Cooley-Tukey アルゴリズム：DFT を偶数インデックスと奇数インデックスの 2つの N/2 点 DFT に分割する再帰構造、計算量 O(N^2)→O(N log N) への削減" },
                            { id: "5.4", title: "FFT の応用", description: "多項式の高速乗算（畳み込みと FFT）、デジタル信号処理（フィルタリング・スペクトル解析）、大整数乗算（シェーンハーゲ・シュトラッセン法の概要）" },
                        ]
                    },
                    {
                        id: "6", title: "ラプラス変換", description: "定義・逆変換・ODE・制御理論への応用",
                        sections: [
                            { id: "6.1", title: "ラプラス変換の定義と収束", description: "L{f}(s)=∫_0^∞ e^{-st}f(t)dt の定義、収束半平面 Re(s)>σ_0（収束横線）、基本関数（多項式・指数・三角・ステップ関数）の変換表" },
                            { id: "6.2", title: "ラプラス変換の性質", description: "微分法則 L{f^{(n)}}(s)=s^n L{f}-s^{n-1}f(0)-...-f^{(n-1)}(0)、積分法則、推移法則 L{e^{at}f}(s)=F(s-a)、畳み込み定理 L{f*g}=F(s)G(s)" },
                            { id: "6.3", title: "逆ラプラス変換", description: "部分分数分解による逆変換の計算手順、Heaviside 展開定理、ブロムウィッチ積分 f(t)=(1/2πi)∫_{c-i∞}^{c+i∞} e^{st}F(s)ds（フーリエ変換との関係）" },
                            { id: "6.4", title: "ODE・連立 ODE への応用", description: "初期値問題をラプラス変換で代数方程式に変換して解く手順、連立 ODE への適用、デルタ関数入力（インパルス応答）の扱い" },
                            { id: "6.5", title: "制御システムへの応用", description: "伝達関数 H(s)=Y(s)/U(s)、フィードバック制御の閉ループ伝達関数、極の位置と安定性（Routh-Hurwitz 判別法の概要）" },
                        ]
                    },
                    {
                        id: "7", title: "Z 変換", description: "離散時間システムの解析ツール",
                        sections: [
                            { id: "7.1", title: "Z 変換の定義と収束域", description: "離散時間信号 {x[n]} の Z 変換 X(z)=Σ x[n]z^{-n}、収束域（ROC）の概念、因果的・非因果的信号の ROC の違い" },
                            { id: "7.2", title: "Z 変換の性質", description: "線形性・時間シフト z^{-k}X(z)・畳み込み定理・初期値定理・最終値定理、ラプラス変換との類比（z=e^{sT}）" },
                            { id: "7.3", title: "逆 Z 変換", description: "部分分数分解による逆変換、べき級数展開（長除法）による逆変換、留数定理を用いた逆 Z 変換" },
                            { id: "7.4", title: "差分方程式と離散システム", description: "線形定係数差分方程式の Z 変換による解法、離散時間システムの伝達関数 H(z)、z 平面上の極と安定性判定（単位円の内側）" },
                        ]
                    },
                    {
                        id: "8", title: "偏微分方程式への応用", description: "フーリエ・ラプラス変換を使った PDE の解法",
                        sections: [
                            { id: "8.1", title: "熱方程式への適用", description: "R 上の熱方程式 u_t=k u_{xx} に空間フーリエ変換を施して ODE に帰着、基本解（ガウス熱核）K(x,t)=(4πkt)^{-1/2}e^{-x^2/(4kt)} の導出、一般解 u=K*φ の表示" },
                            { id: "8.2", title: "波動方程式への適用", description: "1次元波動方程式へのフーリエ変換適用によるダランベール解の再導出、3次元波動方程式へのフーリエ変換とキルヒホッフ公式（概要）" },
                            { id: "8.3", title: "ラプラス方程式とポアソン核", description: "上半平面でのラプラス方程式の境界値問題にフーリエ変換を適用、ポアソン核 P_y(x)=y/π(x^2+y^2) の導出、ハーディ空間への繋がり" },
                            { id: "8.4", title: "ラプラス変換による初期値問題", description: "時間方向にラプラス変換を施した楕円型 ODE への帰着、半直線上の熱方程式・波動方程式の混合境界値問題の解法" },
                        ]
                    },
                ],
                prerequisites: ["2-3", "2-6", "3-3"]
            },
            {
                id: "3-10",
                title: "微分方程式II",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "べき級数解法とフロベニウス法", description: "ODE の特殊解法と特殊関数への導入",
                        sections: [
                            { id: "1.1", title: "通常点まわりのべき級数解", description: "解を冪級数 Σ a_n x^n と仮定して係数を逐次決定する手順、収束半径の評価" },
                            { id: "1.2", title: "確定特異点と指標方程式", description: "フックス型方程式、p(x)=(x-x_0)P(x)・q(x)=(x-x_0)^2 Q(x) の正則性、指標方程式 r(r-1)+p_0 r+q_0=0 の導出" },
                            { id: "1.3", title: "フロベニウス法の解法手順", description: "指標の差が整数でない場合・整数の場合・等しい場合の3ケース、対数解の出現条件" },
                            { id: "1.4", title: "ベッセル方程式とベッセル関数", description: "x^2 y'' + x y' + (x^2 - ν^2)y = 0 の解 J_ν(x)・Y_ν(x)、漸化式、物理的応用（円柱座標系でのPDE）" },
                            { id: "1.5", title: "ルジャンドル方程式とルジャンドル多項式", description: "(1-x^2)y'' - 2xy' + n(n+1)y = 0 の解 P_n(x)、ロドリゲスの公式、直交性と球座標系での応用" },
                        ]
                    },
                    {
                        id: "2", title: "行列指数関数と連立ODE", description: "行列を指数の肩に乗せる理論と連立1階ODEの解法",
                        sections: [
                            { id: "2.1", title: "行列指数関数 e^{At} の定義と基本性質", description: "べき級数 Σ(At)^n/n! による定義、収束の保証、e^{A(s+t)}=e^{As}e^{At} の証明" },
                            { id: "2.2", title: "ジョルダン標準形による e^{At} の計算", description: "A=PJP^{-1} を利用した e^{At}=Pe^{Jt}P^{-1}、ジョルダン細胞の指数関数の計算公式" },
                            { id: "2.3", title: "基本行列と一般解", description: "基本行列 Φ(t)=e^{At} の定義、初期値問題 x'=Ax, x(0)=x_0 の解 x(t)=e^{At}x_0" },
                            { id: "2.4", title: "非同次連立ODEの解法", description: "x'=Ax+b(t) の定数変化法、解の公式 x(t)=e^{At}x_0+∫_0^t e^{A(t-s)}b(s)ds、具体的計算例" },
                        ]
                    },
                    {
                        id: "3", title: "安定性理論", description: "リャプノフの方法とポアンカレ・ベンディクソンの定理",
                        sections: [
                            { id: "3.1", title: "自律系の平衡点と相平面の分類", description: "2次元線形系の相平面（ノード・渦・鞍点・中心）の分類とトレース・行列式による判別" },
                            { id: "3.2", title: "リャプノフの安定性の定義", description: "リャプノフ安定・漸近安定・不安定の厳密な定義（ε-δ形式）" },
                            { id: "3.3", title: "リャプノフ関数法", description: "リャプノフ関数 V(x) の構成条件（正定値性、軌道に沿った単調減少）、安定・漸近安定の判定定理（証明付き）" },
                            { id: "3.4", title: "ポアンカレ・ベンディクソンの定理", description: "平面自律系での有界軌道の行き先の分類（平衡点・閉軌道・グラフ）、極限閉軌道の存在と応用" },
                            { id: "3.5", title: "大域的安定性と応用", description: "ラサールの不変原理、ロトカ・ヴォルテラ方程式・感染症モデル（SIR）への安定性解析の応用" },
                        ]
                    },
                    {
                        id: "4", title: "偏微分方程式入門", description: "PDEの分類と1階PDEの解法",
                        sections: [
                            { id: "4.1", title: "偏微分方程式の基本概念", description: "PDE の次数・線形性・強解と弱解の概念、初期条件と境界条件の種類（ディリクレ・ノイマン・ロビン）" },
                            { id: "4.2", title: "1階線形PDEと特性曲線法", description: "a u_x + b u_y = c の特性曲線 dx/a=dy/b=du/c、一般解の構成と初期値条件の取り込み方" },
                            { id: "4.3", title: "1階準線形PDEと衝撃波", description: "u_t + f(u)_x = 0（保存則）の特性曲線の交差、弱解と衝撃波の形成（ランキン・ユゴニオ条件の概要）" },
                            { id: "4.4", title: "2階線形PDEの分類", description: "A u_{xx} + 2B u_{xy} + C u_{yy} + ... = 0 の判別式 B^2 - AC による楕円型・放物型・双曲型の分類と標準形変換" },
                        ]
                    },
                    {
                        id: "5", title: "分離変数法とシュトゥルム・リウヴィル問題", description: "PDEを常微分方程式に帰着させる基本技法",
                        sections: [
                            { id: "5.1", title: "分離変数法の手順と適用条件", description: "u(x,t)=X(x)T(t) と仮定して各変数の ODE を導出する手順、境界条件・初期条件の処理" },
                            { id: "5.2", title: "シュトゥルム・リウヴィル問題の設定", description: "-(py')'+qy=λwy（p>0, w>0）の定式化、正則・特異 S-L 問題の区別" },
                            { id: "5.3", title: "固有値と固有関数の性質", description: "固有値の実数性・単純性・単調増加列への収束、異なる固有値に属する固有関数の w 重み付き直交性（証明付き）" },
                            { id: "5.4", title: "固有関数展開と完全性", description: "一般関数の固有関数による展開 f=Σ c_n φ_n、L^2 収束の意味、フーリエ正弦・余弦展開との統一的理解" },
                        ]
                    },
                    {
                        id: "6", title: "波動方程式", description: "双曲型方程式の理論と解法",
                        sections: [
                            { id: "6.1", title: "1次元波動方程式の導出", description: "弦の振動モデルから u_{tt} = c^2 u_{xx} を導出、波速 c の意味" },
                            { id: "6.2", title: "ダランベールの解（初期値問題）", description: "一般解 u(x,t)=F(x+ct)+G(x-ct) の導出、初期条件 u(x,0)=φ(x)・u_t(x,0)=ψ(x) からの F・G の決定" },
                            { id: "6.3", title: "分離変数による境界値問題", description: "[0,L] 上のディリクレ境界条件での解の構成、固有振動数・定常波・フーリエ展開による初期条件の取り込み" },
                            { id: "6.4", title: "エネルギー保存則と一意性", description: "エネルギー E(t)=∫(u_t^2+c^2 u_x^2)dx の保存性、エネルギー法による解の一意性の証明" },
                            { id: "6.5", title: "高次元への拡張", description: "3次元波動方程式のキルヒホッフの公式（概要）、ホイヘンスの原理、光速圏内の依存域の概念" },
                        ]
                    },
                    {
                        id: "7", title: "熱方程式", description: "放物型方程式の理論と解法",
                        sections: [
                            { id: "7.1", title: "熱方程式の導出と基本的性質", description: "フーリエの熱伝導則から u_t = k u_{xx} を導出、不可逆性・平滑化効果" },
                            { id: "7.2", title: "基本解（熱核）", description: "K(x,t)=(4πkt)^{-1/2}e^{-x^2/(4kt)} の導出、ガウス積分との関係、δ関数への収束" },
                            { id: "7.3", title: "初期値問題とたたみ込みによる解", description: "全実数軸上の解 u(x,t)=∫K(x-y,t)φ(y)dy、畳み込みの視点からの理解、フーリエ変換による導出" },
                            { id: "7.4", title: "境界値問題と分離変数", description: "[0,L] 上のディリクレ・ノイマン境界条件での解の構成、固有関数展開による時間減衰の定量的評価" },
                            { id: "7.5", title: "最大値原理と一意性", description: "放物型最大値原理の主張と証明（ε-trick）、熱方程式の解の一意性、比較定理" },
                        ]
                    },
                    {
                        id: "8", title: "ラプラス方程式とポアソン方程式", description: "楕円型方程式の理論と調和関数",
                        sections: [
                            { id: "8.1", title: "調和関数の定義と基本的性質", description: "Δu=0 の定義、実部・虚部が調和（正則関数との関係）、解析的連続性" },
                            { id: "8.2", title: "平均値定理と最大値原理", description: "球面上の平均値として調和関数の値が表せること（証明）、最大値・最小値は境界で達成されること" },
                            { id: "8.3", title: "ディリクレ問題とノイマン問題", description: "境界条件の設定、解の一意性（最大値原理を使った証明）、ノイマン問題の解の一意性（定数の不定性）" },
                            { id: "8.4", title: "ポアソン方程式と基本解", description: "Δu=f の設定、n次元での基本解（2次元：log r、3次元：1/r）の導出、ポアソン積分公式" },
                            { id: "8.5", title: "グリーン関数", description: "グリーン関数 G(x,y) の定義と構成（鏡像法による球・半空間の場合）、ディリクレ問題の積分表示への応用" },
                        ]
                    },
                    {
                        id: "9", title: "解の正則性と一般解論", description: "PDEの解の滑らかさと一般的な存在理論の概論",
                        sections: [
                            { id: "9.1", title: "弱解の概念と動機", description: "古典解が存在しない例（不連続な初期条件）、テスト関数と積分による弱解の定式化" },
                            { id: "9.2", title: "楕円型方程式の正則性", description: "内部正則性（弱解は内部で古典解）の概論、実解析性（調和関数はC^∞かつ実解析的）" },
                            { id: "9.3", title: "コーシー・コワレフスカヤの定理", description: "解析的係数を持つPDEの解析的解の局所的存在と一意性（主張）、非解析的係数では成立しない反例" },
                            { id: "9.4", title: "適切問題の概念", description: "解の存在・一意性・データへの連続依存性（ハダマールの意味での適切性）、不適切問題（ラプラス方程式の初期値問題）の例" },
                        ]
                    },
                ],
                prerequisites: ["2-6", "3-1", "3-9"]
            },
            {
                id: "3-11",
                title: "確率論I",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "確率空間", description: "測度論的確率の基礎 (Ω, F, P)",
                        sections: [
                            { id: "1.1", title: "標本空間と事象の代数", description: "標本空間 Ω と事象の集合族、集合演算（和・積・補）と確率論的解釈、有限・可算・非可算の例" },
                            { id: "1.2", title: "σ-加法族の定義と例", description: "σ-加法族（σ-フィールド）の公理、生成された σ-加法族 σ(C)、ボレル σ-加法族 B(R)" },
                            { id: "1.3", title: "確率測度の定義と基本性質", description: "コルモゴロフの公理、確率測度 P の基本性質（単調性・劣加法性・連続性）と証明" },
                            { id: "1.4", title: "条件付き確率とベイズの定理", description: "条件付き確率 P(A|B)=P(A∩B)/P(B) の定義、乗法定理、全確率の公式、ベイズの定理と応用例" },
                        ]
                    },
                    {
                        id: "2", title: "確率変数と分布", description: "可測関数としての確率変数と各種分布",
                        sections: [
                            { id: "2.1", title: "確率変数の定義", description: "確率変数 X: Ω→R の可測性の定義、σ(X) の意味、確率変数の変換（合成関数の可測性）" },
                            { id: "2.2", title: "分布関数の定義と性質", description: "累積分布関数 F(x)=P(X≤x) の右連続・単調非減少・境界条件の証明" },
                            { id: "2.3", title: "離散型確率変数と確率質量関数", description: "確率質量関数 p(x_k)=P(X=x_k)、代表的な離散分布（ベルヌーイ・二項・ポアソン・幾何）の性質" },
                            { id: "2.4", title: "連続型確率変数と確率密度関数", description: "密度関数 f(x) の定義 F(x)=∫_{-∞}^x f(t)dt、代表的な連続分布（正規・指数・ガンマ・一様）の性質" },
                            { id: "2.5", title: "多次元確率変数と周辺分布", description: "結合分布関数・結合密度関数、周辺分布の導出、共分散と相関係数の定義" },
                        ]
                    },
                    {
                        id: "3", title: "期待値とモーメント", description: "ルベーグ積分としての期待値の理論",
                        sections: [
                            { id: "3.1", title: "期待値の定義（ルベーグ積分）", description: "単純確率変数の期待値→非負値確率変数→一般の確率変数への拡張、E[X]=∫X dP の表記" },
                            { id: "3.2", title: "期待値の基本性質", description: "線形性・単調性・絶対値の不等式の証明、マルコフ不等式・チェビシェフ不等式の導出と応用" },
                            { id: "3.3", title: "分散・標準偏差・共分散", description: "Var(X)=E[(X-E[X])^2]=E[X^2]-(E[X])^2 の計算、共分散 Cov(X,Y)=E[XY]-E[X]E[Y]、シュワルツの不等式" },
                            { id: "3.4", title: "モーメントとモーメント母関数", description: "n次モーメント E[X^n]・中心モーメント・歪度・尖度の定義、モーメント母関数 M_X(t)=E[e^{tX}] の性質と収束域" },
                        ]
                    },
                    {
                        id: "4", title: "独立性", description: "独立事象・独立確率変数の理論",
                        sections: [
                            { id: "4.1", title: "事象の独立性", description: "2事象の独立性 P(A∩B)=P(A)P(B)、n事象の相互独立性（対独立との違い）、独立性の直感的意味" },
                            { id: "4.2", title: "確率変数の独立性", description: "σ-加法族の独立性に基づく確率変数の独立性の定義、独立性の同値条件（結合分布が周辺分布の積）" },
                            { id: "4.3", title: "独立確率変数の演算", description: "独立なら E[XY]=E[X]E[Y]・Var(X+Y)=Var(X)+Var(Y) の証明、独立確率変数の和の分布（畳み込み公式）" },
                            { id: "4.4", title: "無相関と独立の違い", description: "独立 ⟹ 無相関（逆は成立しない）の反例（X と X^2 の場合）、正規分布では無相関 ⟺ 独立" },
                        ]
                    },
                    {
                        id: "5", title: "条件付き期待値", description: "σ-加法族による条件付き期待値の一般論",
                        sections: [
                            { id: "5.1", title: "初等的な条件付き期待値", description: "離散の場合 E[X|Y=y]=Σ x P(X=x|Y=y)、連続の場合 E[X|Y=y]=∫x f_{X|Y}(x|y)dx、全期待値の法則" },
                            { id: "5.2", title: "σ-加法族による一般的定義", description: "条件付き期待値 E[X|G]（G はσ-加法族）の定義（ラドン・ニコディム微分）、存在と一意性（a.s.意味で）" },
                            { id: "5.3", title: "条件付き期待値の性質", description: "線形性・単調性・タワー性 E[E[X|G_1]|G_2]=E[X|G_2]（G_2⊂G_1）・取り出し性 E[ZX|G]=ZE[X|G]（Z が G-可測）の証明" },
                            { id: "5.4", title: "条件付き分布", description: "正則条件付き確率分布の概念、条件付き密度関数 f_{X|Y}(x|y)=f_{X,Y}(x,y)/f_Y(y)、ベイズの定理の連続版" },
                        ]
                    },
                    {
                        id: "6", title: "確率変数列の収束", description: "4種の収束概念とその関係",
                        sections: [
                            { id: "6.1", title: "概収束（a.s. 収束）", description: "P({ω | X_n(ω)→X(ω)})=1 の定義、概収束の判定条件（上極限事象の確率ゼロ）" },
                            { id: "6.2", title: "確率収束", description: "∀ε>0, P(|X_n-X|>ε)→0 の定義、概収束 ⟹ 確率収束（逆は成立しない）の反例" },
                            { id: "6.3", title: "L^p 収束", description: "E[|X_n-X|^p]→0 の定義（特に L^2 収束）、L^2 収束 ⟹ 確率収束の証明、一様可積分性との関係" },
                            { id: "6.4", title: "分布収束（法則収束）", description: "E[φ(X_n)]→E[φ(X)]（φ は有界連続）の定義、分布関数の連続点での収束との同値性、4収束の包含関係まとめ" },
                        ]
                    },
                    {
                        id: "7", title: "特性関数", description: "フーリエ変換と確率分布の関係",
                        sections: [
                            { id: "7.1", title: "特性関数の定義と基本性質", description: "φ_X(t)=E[e^{itX}]=∫e^{itx}dF(x)（確率分布のフーリエ変換）、一様連続性・|φ(t)|≤1 の証明" },
                            { id: "7.2", title: "特性関数とモーメントの関係", description: "E[X^n]=i^{-n}φ^{(n)}(0)（モーメントが存在するとき）、正規分布・ポアソン分布の特性関数の計算" },
                            { id: "7.3", title: "特性関数による分布の決定", description: "特性関数が分布を一意に決定すること、独立確率変数の和の特性関数は積（畳み込みとフーリエ変換の対応）" },
                            { id: "7.4", title: "連続性定理（レビーの定理）", description: "分布収束 ⟺ 特性関数の各点収束（主張と証明の概略）、中心極限定理の証明への布石" },
                        ]
                    },
                    {
                        id: "8", title: "大数の法則", description: "頻度と確率をつなぐ根本的な定理",
                        sections: [
                            { id: "8.1", title: "ボレル・カンテリの補題", description: "第1補題（Σ P(A_n)<∞ ⟹ P(A_n i.o.)=0）・第2補題（独立かつ Σ P(A_n)=∞ ⟹ P(A_n i.o.)=1）の証明と意味" },
                            { id: "8.2", title: "弱大数の法則", description: "i.i.d.列 {X_n}（E[X]=μ, Var(X)<∞）に対する S_n/n →^P μ の証明（チェビシェフ不等式を使った証明）、有限分散の仮定を外したカッツ・クロードの定理（概要）" },
                            { id: "8.3", title: "強大数の法則", description: "i.i.d.列に対する S_n/n →^{a.s.} μ の証明（4次モーメント法またはボレル・カンテリ補題を用いた証明）" },
                            { id: "8.4", title: "応用：モンテカルロ法と数値積分", description: "大数の法則に基づく積分の確率的計算（E[f(X)]≒(1/n)Σf(X_k)）、収束速度と誤差評価" },
                        ]
                    },
                    {
                        id: "9", title: "中心極限定理", description: "正規分布への収束の理論",
                        sections: [
                            { id: "9.1", title: "中心極限定理の主張", description: "i.i.d.列 {X_n}（E[X]=μ, Var(X)=σ^2<∞）に対して √n(S_n/n - μ)/σ →^d N(0,1) の正確な主張と直感的意味" },
                            { id: "9.2", title: "特性関数を用いた証明", description: "標準化列の特性関数 e^{-t^2/2} への収束をテイラー展開で示す、レビーの連続性定理の適用" },
                            { id: "9.3", title: "正規近似と応用", description: "二項分布・ポアソン分布の正規近似、信頼区間の構成、棄却域の設定への応用" },
                            { id: "9.4", title: "収束の速さとベリー・エセーン定理", description: "E[|X|^3]<∞ のもとで sup_x |P(S_n^*≤x)-Φ(x)| ≤ C E[|X|^3]/(σ^3 √n) の概要、収束の精度の評価" },
                        ]
                    },
                ],
                prerequisites: ["3-1"]
            },
        ]
    },
    {
        id: "stage-4",
        title: "Lv.4：より高度な数学",
        topics: [
            {
                id: "4-1",
                title: "関数解析",
                tags: ["主要分野"],
                chapters: [
                    { id: "1", title: "ノルム空間", description: "ノルム、距離、三角不等式", sections: [] },
                    { id: "2", title: "バナッハ空間", description: "完備ノルム空間、C[a,b]、l^p、L^p", sections: [] },
                    { id: "3", title: "有界線形作用素", description: "作用素ノルム、連続性と有界性の同値", sections: [] },
                    { id: "4", title: "双対空間", description: "連続線形汎関数、弱位相、弱*位相", sections: [] },
                    { id: "5", title: "ハーン・バナッハの定理", description: "線形汎関数の拡張、分離定理", sections: [] },
                    { id: "6", title: "バナッハの不動点定理", description: "縮小写像、完備性、応用", sections: [] },
                    { id: "7", title: "開写像定理", description: "全射有界線形作用素の開性", sections: [] },
                    { id: "8", title: "閉グラフ定理", description: "閉作用素の有界性", sections: [] },
                    { id: "9", title: "一様有界性の原理", description: "バナッハ・シュタインハウスの定理", sections: [] },
                    { id: "10", title: "内積空間", description: "内積、コーシー・シュワルツの不等式、平行四辺形の等式", sections: [] },
                    { id: "11", title: "ヒルベルト空間", description: "完備内積空間、l^2空間、L^2空間", sections: [] },
                    { id: "12", title: "正規直交系", description: "完全正規直交系、ベッセルの不等式、パーセバルの等式", sections: [] },
                    { id: "13", title: "フーリエ級数", description: "ヒルベルト空間における展開", sections: [] },
                    { id: "14", title: "射影定理", description: "凸閉部分空間への射影、最良近似", sections: [] },
                    { id: "15", title: "リースの表現定理", description: "H*とHの同型、連続線形汎関数と内積", sections: [] },
                    { id: "16", title: "コンパクト作用素", description: "定義、性質、フレドホルム作用素", sections: [] },
                    { id: "17", title: "スペクトル理論", description: "スペクトル、固有値、レゾルベント、自己随伴作用素のスペクトル分解", sections: [] }
                ],
                prerequisites: ["3-7", "2-1"]
            },
            {
                id: "4-2",
                title: "多様体論",
                tags: ["主要分野"],
                chapters: [
                    { id: "1", title: "位相多様体", description: "n次元位相多様体、ハウスドルフ性、第二可算性", sections: [] },
                    { id: "2", title: "チャート", description: "局所座標系、座標近傍、座標変換", sections: [] },
                    { id: "3", title: "アトラス", description: "チャートの集まり、極大アトラス", sections: [] },
                    { id: "4", title: "滑らかな多様体", description: "C^∞-アトラス、座標変換の滑らかさ、微分同相", sections: [] },
                    { id: "5", title: "多様体上の関数", description: "滑らかな関数、滑らかな写像", sections: [] },
                    { id: "6", title: "部分多様体", description: "埋め込み、はめ込み、正則値定理", sections: [] },
                    { id: "7", title: "接空間", description: "曲線の速度ベクトル、導分としての接ベクトル", sections: [] },
                    { id: "8", title: "接束", description: "TM、ベクトル場、リー括弧積", sections: [] },
                    { id: "9", title: "余接空間", description: "双対空間、微分 df、余接束 T*M", sections: [] },
                    { id: "10", title: "微分形式", description: "k-形式、外積代数、交代テンソル", sections: [] },
                    { id: "11", title: "ウェッジ積", description: "∧の定義、反対称性、結合法則", sections: [] },
                    { id: "12", title: "外微分", description: "d の定義、d^2 = 0、座標不変性", sections: [] },
                    { id: "13", title: "引き戻し", description: "写像 f による形式の引き戻し f*ω、自然性", sections: [] },
                    { id: "14", title: "向き付け", description: "向き付け可能な多様体、体積形式、メビウスの帯", sections: [] },
                    { id: "15", title: "積分", description: "多様体上での k-形式の k-次元積分", sections: [] },
                    { id: "16", title: "ストークスの定理", description: "∫_M dω = ∫_{∂M} ω", sections: [] },
                    { id: "17", title: "ド・ラームコホモロジー", description: "閉形式、完全形式、H^k_dR(M)", sections: [] },
                    { id: "18", title: "ポアンカレの補題", description: "可縮な多様体上での完全性", sections: [] }
                ],
                prerequisites: ["2-5", "3-2", "3-7"]
            },
            {
                id: "4-3",
                title: "代数的トポロジー",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "単体複体", description: "単体、単体的複体、幾何学的実現", sections: [] },
                    { id: "2", title: "チェイン複体", description: "境界作用素 ∂、∂^2 = 0", sections: [] },
                    { id: "3", title: "ホモロジー群", description: "H_n(X) = ker ∂_n / im ∂_{n+1}", sections: [] },
                    { id: "4", title: "特異ホモロジー", description: "特異単体、特異チェイン、特異ホモロジー群", sections: [] },
                    { id: "5", title: "ホモロジー群の性質", description: "ホモトピー不変性、次元公理", sections: [] },
                    { id: "6", title: "完全系列", description: "短完全系列、長完全系列", sections: [] },
                    { id: "7", title: "マイヤー・ビエトリス完全系列", description: "ホモロジー群の計算", sections: [] },
                    { id: "8", title: "オイラー標数", description: "交代和、ホモロジー群による定義", sections: [] },
                    { id: "9", title: "コチェイン複体", description: "コホモロジー群 H^n(X)", sections: [] },
                    { id: "10", title: "コホモロジー環", description: "カップ積、環構造", sections: [] },
                    { id: "11", title: "ポアンカレ双対性", description: "向き付け可能閉多様体での双対", sections: [] },
                    { id: "12", title: "ユニバーサル係数定理", description: "ホモロジーとコホモロジーの関係", sections: [] },
                    { id: "13", title: "キュネットの公式", description: "積空間のコホモロジー", sections: [] }
                ],
                prerequisites: ["3-7", "3-4"]
            },
            {
                id: "4-4",
                title: "微分幾何",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "リーマン計量", description: "内積の滑らかな族、計量テンソル g", sections: [] },
                    { id: "2", title: "レビ・チビタ接続", description: "ねじれなし、計量的な接続", sections: [] },
                    { id: "3", title: "共変微分", description: "ベクトル場の微分、接続に関する微分", sections: [] },
                    { id: "4", title: "測地線", description: "自己平行曲線、測地線方程式、最短経路", sections: [] },
                    { id: "5", title: "曲率", description: "リーマン曲率テンソル、断面曲率", sections: [] },
                    { id: "6", title: "リッチ曲率", description: "リッチテンソル、スカラー曲率", sections: [] },
                    { id: "7", title: "ガウス曲率", description: "曲面の固有曲率、ガウスの驚くべき定理", sections: [] },
                    { id: "8", title: "ガウス・ボンネの定理", description: "全曲率とオイラー標数の関係", sections: [] },
                    { id: "9", title: "ファイバー束", description: "主束、ベクトル束、構造群", sections: [] },
                    { id: "10", title: "接続", description: "主束上の接続、接続形式、曲率形式", sections: [] },
                    { id: "11", title: "特性類", description: "チャーン類、ポントリャーギン類、オイラー類", sections: [] },
                    { id: "12", title: "指数定理", description: "ガウス・ボンネ・チャーンの定理、アティヤ・シンガーの指数定理", sections: [] }
                ],
                prerequisites: ["4-2"]
            },
            {
                id: "4-5",
                title: "体論II",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "超越拡大", description: "変数を含む拡大",
                        sections: [
                            { id: "1.1", title: "超越基底", description: "代数的独立性、超越次数" },
                            { id: "1.2", title: "リューローの定理（概要）", description: "有理関数体の部分体（Lüroth's Theorem）" }
                        ]
                    },
                    {
                        id: "2", title: "無限次ガロア理論", description: "クルル位相と無限次拡大",
                        sections: [
                            { id: "2.1", title: "逆極限としてのガロア群", description: "有限次拡大の極限" },
                            { id: "2.2", title: "クルル位相", description: "ガロア群上の位相構造、閉部分群と中間体の対応" }
                        ]
                    }
                ],
                prerequisites: ["3-6"]
            },
            {
                id: "4-6",
                title: "多重線形代数学II",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "対称代数と多項式", description: "可換なテンソル代数",
                        sections: [
                            { id: "1.1", title: "対称積", description: "vw = wv、対称代数 S(V)" },
                            { id: "1.2", title: "多項式環との同型", description: "S(V*) ≅ K[x_1, ..., x_n]、代数幾何への入り口" }
                        ]
                    },
                    {
                        id: "2", title: "クリフォード代数", description: "スピノルへの道",
                        sections: [
                            { id: "2.1", title: "二次形式とクリフォード代数", description: "v^2 = Q(v)、外積代数の変形" },
                            { id: "2.2", title: "幾何代数としての応用", description: "回転の表現、スピノル群（概要）" }
                        ]
                    }
                ],
                prerequisites: ["3-8", "3-4"]
            },
            {
                id: "4-7",
                title: "整数論II",
                tags: ["発展分野"],
                chapters: [
                    {
                        id: "1", title: "中国剰余定理", description: "連立合同式の解法、逆元、RSA暗号への応用（復号の高速化）",
                        sections: [
                            { id: "1.1", title: "中国剰余定理の主張と証明", description: "互いに素な法に対する連立合同式の一意解、環同型 Z/mnZ ≅ Z/mZ × Z/nZ" },
                            { id: "1.2", title: "アルゴリズム的解法", description: "拡張ユークリッド法を用いた具体的計算手順（ガーナーのアルゴリズム）" },
                            { id: "1.3", title: "応用：大きな数の演算", description: "多倍長整数の乗算の並列化、RSA暗号の復号処理の高速化（CRT-RSA）" }
                        ]
                    },
                    {
                        id: "2", title: "原始根と指数", description: "乗法群の構造、離散対数問題",
                        sections: [
                            { id: "2.1", title: "位数と原始根", description: "位数の性質、原始根の存在定理（p, 2p^k, p^k の場合）、原始根の個数" },
                            { id: "2.2", title: "指数の理論", description: "指数（index）の定義と対数法則類似の性質、n次合同式の解の個数" },
                            { id: "2.3", title: "離散対数問題 (DLP)", description: "DLPの定義、計算量的困難性、Diffie-Hellman鍵交換への応用" }
                        ]
                    },
                    {
                        id: "3", title: "平方剰余", description: "2次合同式、相互法則",
                        sections: [
                            { id: "3.1", title: "平方剰余とルジャンドル記号", description: "x^2 ≡ a (mod p) の解の有無、オイラーの基準、ルジャンドル記号の性質" },
                            { id: "3.2", title: "ガウスの補題", description: "ガウスの補題の証明、第2補充法則 (2/p) の計算" },
                            { id: "3.3", title: "平方剰余の相互法則", description: "ガウスの相互法則の主張と証明の概略、ヤコビ記号への拡張" },
                            { id: "3.4", title: "2次合同式の解法", description: "トネリ・シャンクスのアルゴリズム（概要）" }
                        ]
                    },
                    {
                        id: "4", title: "素数判定法", description: "確率的判定法と決定的判定法",
                        sections: [
                            { id: "4.1", title: "フェルマー・テスト", description: "フェルマーの小定理の対偶、カーマイケル数（擬素数）の問題点" },
                            { id: "4.2", title: "ミラー・ラビン素数判定法", description: "強擬素数、確率的アルゴリズムとしての信頼性、実用的な素数生成" },
                            { id: "4.3", title: "AKS素数判定法（概要）", description: "多項式時間で動作する決定的アルゴリズム（PRIMES is in P）の紹介" }
                        ]
                    },
                    {
                        id: "5", title: "素因数分解アルゴリズム", description: "現代の因数分解手法",
                        sections: [
                            { id: "5.1", title: "ポラードのρ法", description: "乱数列とフロイドの循環検出法を用いた因数分解" },
                            { id: "5.2", title: "p-1法と楕円曲線法 (ECM)", description: "群の位数に基づく分解法、滑らかな数（smooth number）" },
                            { id: "5.3", title: "2次ふるい法 (QS)", description: "平方剰余の探索、線形代数ステップ、準指数時間アルゴリズム" }
                        ]
                    },
                    {
                        id: "6", title: "楕円曲線入門", description: "楕円曲線の群構造と暗号",
                        sections: [
                            { id: "6.1", title: "楕円曲線の定義", description: "ワイエルシュトラス標準形、非特異性、射影平面上の点" },
                            { id: "6.2", title: "群法則", description: "弦と接線の法（chord-and-tangent）、加法公式、単位元（無限遠点）" },
                            { id: "6.3", title: "有限体上の楕円曲線", description: "ハッセの定理（点の個数の評価）、離散対数問題の難しさ (ECDLP)" },
                            { id: "6.4", title: "楕円曲線暗号 (ECC)", description: "ECDH鍵共有、ECDSA署名、RSAとの鍵長比較" }
                        ]
                    }
                ],
                prerequisites: ["2-7", "3-5"]
            },
            {
                id: "4-8",
                title: "確率論II",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "マルチンゲール", description: "条件付き期待値、停止時刻、任意抽出定理", sections: [] },
                    { id: "2", title: "ブラウン運動", description: "ウィーナー過程、連続性、マルコフ性、強マルコフ性", sections: [] },
                    { id: "3", title: "伊藤積分", description: "確率積分、伊藤の等長性", sections: [] },
                    { id: "4", title: "伊藤の公式", description: "確率微分の変数変換", sections: [] },
                    { id: "5", title: "確率微分方程式", description: "SDE、弱解と強解、存在と一意性", sections: [] },
                    { id: "6", title: "フォッカー・プランク方程式", description: "確率分布の発展方程式", sections: [] },
                    { id: "7", title: "ポアソン過程", description: "指数分布、待ち時間、強度関数", sections: [] }
                ],
                prerequisites: ["3-11", "4-1"]
            },
            {
                id: "4-9",
                title: "数理統計学",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "標本分布", description: "標本平均、標本分散、χ^2分布、t分布、F分布", sections: [] },
                    { id: "2", title: "点推定", description: "不偏推定量、一致推定量、有効推定量", sections: [] },
                    { id: "3", title: "最尤推定", description: "尤度関数、最尤推定量、漸近正規性", sections: [] },
                    { id: "4", title: "モーメント法", description: "モーメント推定量", sections: [] },
                    { id: "5", title: "区間推定", description: "信頼区間、信頼水準、ピボット量", sections: [] },
                    { id: "6", title: "検定", description: "帰無仮説、対立仮説、第一種・第二種の誤り、検出力", sections: [] },
                    { id: "7", title: "パラメトリック検定", description: "t検定、F検定、χ^2検定、分散分析", sections: [] },
                    { id: "8", title: "ノンパラメトリック検定", description: "符号検定、ウィルコクソンの順位和検定", sections: [] },
                    { id: "9", title: "回帰分析", description: "最小二乗法、重回帰、決定係数、残差分析", sections: [] }
                ],
                prerequisites: ["3-11"]
            }
        ]
    },
    {
        id: "stage-5",
        title: "Lv.5：より専門的な数学",
        topics: [
            {
                id: "5-1",
                title: "代数幾何I",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "アフィン多様体", description: "アフィン空間、ザリスキー位相、座標環", sections: [] },
                    { id: "2", title: "ヒルベルトの零点定理", description: "弱形と強形", sections: [] },
                    { id: "3", title: "射影多様体", description: "斉次座標、射影空間、射影的スキーム", sections: [] },
                    { id: "4", title: "層", description: "前層、層化、茎、層の完全系列", sections: [] },
                    { id: "5", title: "スキーム", description: "局所環付き空間、アフィンスキーム、射", sections: [] }
                ],
                prerequisites: ["3-6", "3-7", "4-2"]
            },
            {
                id: "5-2",
                title: "可換環論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "ネーター環", description: "昇鎖条件、ヒルベルトの基底定理", sections: [] },
                    { id: "2", title: "アルティン環", description: "降鎖条件、半単純環", sections: [] },
                    { id: "3", title: "素イデアル分解", description: "準素イデアル、第一分解定理、第二分解定理", sections: [] },
                    { id: "4", title: "局所化", description: "局所環、分数環、局所化の普遍性", sections: [] },
                    { id: "5", title: "完備化", description: "進イデアル位相、p-進整数環", sections: [] },
                    { id: "6", title: "次元論", description: "クルル次元、超越次数、正則局所環", sections: [] }
                ],
                prerequisites: ["3-6"]
            },
            {
                id: "5-3",
                title: "表現論I",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "群の表現", description: "表現、既約表現、完全可約性（マシュケの定理）", sections: [] },
                    { id: "2", title: "指標理論", description: "指標、直交関係、指標表", sections: [] },
                    { id: "3", title: "類関数", description: "共役類、指標の内積、既約指標の完全性", sections: [] },
                    { id: "4", title: "誘導表現", description: "フロベニウスの相互律、誘導指標", sections: [] }
                ],
                prerequisites: ["3-5", "3-7"]
            },
            {
                id: "5-4",
                title: "表現論II",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "リー群", description: "行列群、リー括弧積、指数写像", sections: [] },
                    { id: "2", title: "リー環", description: "リー括弧、随伴表現、キリング形式", sections: [] },
                    { id: "3", title: "半単純リー環", description: "半単純性の判定、カルタン部分環、ルート系", sections: [] },
                    { id: "4", title: "ワイル群", description: "ルート系の対称性、ワイル室", sections: [] },
                    { id: "5", title: "分類定理", description: "ディンキン図形、単純リー環の分類", sections: [] }
                ],
                prerequisites: ["5-3", "4-2"]
            },
            {
                id: "5-5",
                title: "解析的数論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "リーマンゼータ関数", description: "ζ(s)、オイラー積、関数等式、解析接続", sections: [] },
                    { id: "2", title: "ディリクレL関数", description: "指標、ディリクレ級数、L関数の性質", sections: [] },
                    { id: "3", title: "素数定理", description: "π(x) ~ x/log x、チェビシェフの関数、証明の概略", sections: [] },
                    { id: "4", title: "ディリクレの算術級数定理", description: "等差数列中の素数の無限性", sections: [] },
                    { id: "5", title: "リーマン予想", description: "非自明な零点の実部", sections: [] }
                ],
                prerequisites: ["3-3", "2-7"]
            },
            {
                id: "5-6",
                title: "偏微分方程式論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "ソボレフ空間", description: "W^{k,p}、弱微分、ノルム", sections: [] },
                    { id: "2", title: "埋め込み定理", description: "ソボレフの埋め込み、リリッヒ・コンドラショフの定理", sections: [] },
                    { id: "3", title: "トレース定理", description: "境界値の意味", sections: [] },
                    { id: "4", title: "弱解", description: "変分形式、テスト関数", sections: [] },
                    { id: "5", title: "ラックス・ミルグラムの定理", description: "双線形形式、弱解の存在と一意性", sections: [] },
                    { id: "6", title: "楕円型方程式", description: "正則性理論、最大値原理、固有値問題", sections: [] },
                    { id: "7", title: "放物型方程式", description: "半群理論、熱核、最大値原理", sections: [] },
                    { id: "8", title: "双曲型方程式", description: "エネルギー法、有限伝播速度", sections: [] }
                ],
                prerequisites: ["3-10", "4-1"]
            },
            {
                id: "5-7",
                title: "作用素環論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "C*-環", description: "ノルム、*-演算、C*-恒等式、スペクトル", sections: [] },
                    { id: "2", title: "可換C*-環", description: "ゲルファント変換、コンパクト空間との対応", sections: [] },
                    { id: "3", title: "フォン・ノイマン環", description: "弱位相、強位相、因子", sections: [] },
                    { id: "4", title: "GNS構成", description: "状態、表現、循環ベクトル", sections: [] }
                ],
                prerequisites: ["4-1"]
            },
            {
                id: "5-8",
                title: "エルゴード理論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "測度保存変換", description: "不変測度、エルゴード性", sections: [] },
                    { id: "2", title: "ビルホッフのエルゴード定理", description: "時間平均と空間平均の一致", sections: [] },
                    { id: "3", title: "混合性", description: "弱混合、強混合、K-性", sections: [] },
                    { id: "4", title: "エントロピー", description: "コルモゴロフ・シナイエントロピー", sections: [] }
                ],
                prerequisites: ["3-1", "3-11"]
            },
            {
                id: "5-9",
                title: "調和解析",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "フーリエ解析", description: "L^p 理論、ハウスドルフ・ヤングの定理", sections: [] },
                    { id: "2", title: "プランシュレルの定理", description: "L^2におけるフーリエ変換の等長性", sections: [] },
                    { id: "3", title: "急減少関数", description: "シュワルツ空間 S(R^n)、テンパード超関数", sections: [] },
                    { id: "4", title: "超関数", description: "分布、デルタ関数、フーリエ変換", sections: [] }
                ],
                prerequisites: ["4-1", "3-10"]
            },
            {
                id: "5-10",
                title: "代数数論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "代数的整数", description: "整数環の定義、代数的整数の和・積の閉性", sections: [] },
                    { id: "2", title: "デデキント環", description: "デデキント整域、イデアルの一意分解、素イデアル", sections: [] },
                    { id: "3", title: "イデアル類群", description: "分数イデアル、類数、有限性定理", sections: [] },
                    { id: "4", title: "ミンコフスキーの定理", description: "格子点定理、類数有限性の証明", sections: [] },
                    { id: "5", title: "単数群とディリクレの単数定理", description: "基本単数、単数群の構造", sections: [] },
                    { id: "6", title: "分岐理論", description: "素イデアルの分岐、慣性群、フロベニウス元", sections: [] },
                    { id: "7", title: "局所体とp-進数", description: "p-進絶対値、p-進数体 Q_p、局所体", sections: [] }
                ],
                prerequisites: ["3-6", "3-7", "2-7"]
            },
            {
                id: "5-11",
                title: "モジュラー形式",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "上半平面とメビウス変換", description: "SL(2,R)の作用、上半平面 H の幾何学", sections: [] },
                    { id: "2", title: "モジュラー群", description: "SL(2,Z)、基本領域、カスプ", sections: [] },
                    { id: "3", title: "モジュラー形式の定義", description: "整数ウェイト k の形式、保型性条件、カスプにおける消滅", sections: [] },
                    { id: "4", title: "アイゼンシュタイン級数", description: "E_4、E_6、モジュラー形式の空間の生成", sections: [] },
                    { id: "5", title: "デルタ関数と判別式", description: "Δ(τ)=q∏(1-q^n)^{24}、重さ12のカスプ形式", sections: [] },
                    { id: "6", title: "ヘッケ作用素", description: "T(n) の定義、固有形式、L関数", sections: [] },
                    { id: "7", title: "保型形式と整数論", description: "フェルマーの最終定理の概略、谷山・志村予想", sections: [] }
                ],
                prerequisites: ["5-5", "3-3"]
            }
        ]
    },
    {
        id: "stage-applied",
        title: "応用数学系分野",
        topics: [
            {
                id: "A-1",
                title: "グラフ理論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "基本概念", description: "頂点、辺、次数、道、閉路、連結性", sections: [] },
                    { id: "2", title: "木", description: "全域木、最小全域木（クラスカル法、プリム法）", sections: [] },
                    { id: "3", title: "オイラー路", description: "オイラーグラフの判定、フルーリーのアルゴリズム", sections: [] },
                    { id: "4", title: "ハミルトン路", description: "ハミルトン閉路、ディラックの定理、TSP", sections: [] },
                    { id: "5", title: "平面グラフ", description: "クラトフスキーの定理、オイラーの多面体定理", sections: [] },
                    { id: "6", title: "彩色問題", description: "頂点彩色、辺彩色、四色定理、グラフの彩色数", sections: [] },
                    { id: "7", title: "マッチング", description: "二部グラフ、最大マッチング、ホール婚姻定理、ケーニッヒの定理", sections: [] },
                    { id: "8", title: "ネットワークフロー", description: "最大流最小カット定理、フォード・ファルカーソン法", sections: [] }
                ],
                prerequisites: ["基礎的な数学的思考力"]
            },
            {
                id: "A-2",
                title: "組合せ論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "数え上げ", description: "順列、組合せ、二項係数、多項係数、スターリング数", sections: [] },
                    { id: "2", title: "母関数", description: "指数型母関数、ベル数、カタラン数", sections: [] },
                    { id: "3", title: "包除原理", description: "容斥の原理、メビウス関数、メビウスの反転公式", sections: [] },
                    { id: "4", title: "ポリアの計数定理", description: "対称群の作用、バーンサイドの補題の一般化", sections: [] },
                    { id: "5", title: "ラムゼー理論", description: "ラムゼー数、無限ラムゼーの定理、シュールの定理", sections: [] }
                ],
                prerequisites: ["基礎的な数学的思考力"]
            },
            {
                id: "A-3",
                title: "最適化理論I",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "線形計画問題", description: "目的関数、制約条件、実行可能領域", sections: [] },
                    { id: "2", title: "単体法", description: "ピボット演算、基底解、最適性条件、退化", sections: [] },
                    { id: "3", title: "双対理論", description: "双対問題、強双対定理、弱双対定理、相補性定理", sections: [] },
                    { id: "4", title: "感度分析", description: "パラメータ変化に対する最適解の変化", sections: [] }
                ],
                prerequisites: ["1-1", "1-2"]
            },
            {
                id: "A-4",
                title: "最適化理論II",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "凸最適化", description: "凸関数、凸集合、凸計画問題", sections: [] },
                    { id: "2", title: "制約付き最適化", description: "ラグランジュ関数、KKT条件", sections: [] },
                    { id: "3", title: "双対問題", description: "凸双対性、スレーターの条件", sections: [] },
                    { id: "4", title: "勾配法", description: "最急降下法、収束性", sections: [] },
                    { id: "5", title: "ニュートン法", description: "ヘッセ行列、準ニュートン法（BFGS法）", sections: [] },
                    { id: "6", title: "内点法", description: "障壁関数、パス追跡法", sections: [] }
                ],
                prerequisites: ["A-3"]
            },
            {
                id: "A-5",
                title: "数値解析",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "数値誤差", description: "丸め誤差、打ち切り誤差、誤差の伝播、数値の安定性", sections: [] },
                    { id: "2", title: "非線形方程式", description: "二分法、ニュートン法、割線法、収束次数", sections: [] },
                    { id: "3", title: "連立1次方程式の直接法", description: "ガウス消去法、LU分解、ピボット選択、条件数", sections: [] },
                    { id: "4", title: "連立1次方程式の反復法", description: "ヤコビ法、ガウス・ザイデル法、SOR法、収束条件", sections: [] },
                    { id: "5", title: "補間法", description: "ラグランジュ補間、ニュートン補間、エルミート補間、スプライン補間", sections: [] },
                    { id: "6", title: "数値積分", description: "台形公式、シンプソン公式、ガウス積分、複合公式、誤差評価", sections: [] },
                    { id: "7", title: "数値微分", description: "前進差分、後退差分、中心差分、高次精度公式", sections: [] },
                    { id: "8", title: "常微分方程式の初期値問題（1段法）", description: "前進・後退オイラー法、台形法、ルンゲ・クッタ法（RK2・RK4）", sections: [] },
                    { id: "9", title: "常微分方程式の初期値問題（多段法）", description: "アダムス・バッシュフォース法、アダムス・ムルトン法、予測子・修正子法", sections: [] },
                    { id: "10", title: "安定性解析", description: "絶対安定性、A-安定性、剛性方程式（stiff equations）への対応", sections: [] },
                    { id: "11", title: "境界値問題", description: "差分法、有限要素法の概要、シューティング法", sections: [] },
                    { id: "12", title: "固有値問題の数値解法", description: "べき乗法、QR法、ハウスホルダー変換", sections: [] }
                ],
                prerequisites: ["1-2", "2-1", "2-6"]
            },
            {
                id: "A-6",
                title: "制御理論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "線形システム", description: "状態方程式、伝達関数、状態空間表現", sections: [] },
                    { id: "2", title: "安定性", description: "リアプノフの安定性、極配置、フィードバック制御", sections: [] },
                    { id: "3", title: "可制御性と可観測性", description: "カルマンの階数条件、双対性", sections: [] },
                    { id: "4", title: "最適制御", description: "LQR問題、リカッチ方程式、ポントリャーギンの最大原理", sections: [] },
                    { id: "5", title: "カルマンフィルタ", description: "状態推定、最適フィルタ", sections: [] }
                ],
                prerequisites: ["1-1", "2-1", "2-6"]
            },
            {
                id: "A-7",
                title: "符号理論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "線形符号", description: "生成行列、検査行列、ハミング距離、最小距離", sections: [] },
                    { id: "2", title: "巡回符号", description: "多項式表現、生成多項式", sections: [] },
                    { id: "3", title: "BCH符号", description: "ボーズ・チョードリ・ホッケンヘムの構成", sections: [] },
                    { id: "4", title: "リード・ソロモン符号", description: "有限体上の多項式、誤り訂正能力", sections: [] },
                    { id: "5", title: "誤り訂正", description: "シンドローム復号、限界定理（ハミング限界、シングルトン限界）", sections: [] }
                ],
                prerequisites: ["1-1", "3-6"]
            },
            {
                id: "A-8",
                title: "暗号理論",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "古典暗号", description: "シーザー暗号、換字式暗号、転置式暗号、暗号解読", sections: [] },
                    { id: "2", title: "公開鍵暗号", description: "RSA暗号、離散対数問題、楕円曲線暗号", sections: [] },
                    { id: "3", title: "暗号学的ハッシュ関数", description: "一方向性、衝突困難性、SHA-2、SHA-3", sections: [] },
                    { id: "4", title: "デジタル署名", description: "RSA署名、ElGamal署名、DSA", sections: [] },
                    { id: "5", title: "暗号プロトコル", description: "鍵交換（ディフィー・ヘルマン）、秘密分散", sections: [] }
                ],
                prerequisites: ["2-7", "3-6"]
            },
            {
                id: "A-9",
                title: "数理ファイナンス",
                tags: ["発展分野"],
                chapters: [
                    { id: "1", title: "オプション価格理論", description: "コール、プット、ペイオフ、無裁定価格", sections: [] },
                    { id: "2", title: "ブラック・ショールズ方程式", description: "熱方程式への変換、解の公式", sections: [] },
                    { id: "3", title: "リスク中立測度", description: "マルチンゲール測度、ギルサノフの定理、測度変換", sections: [] },
                    { id: "4", title: "デリバティブ", description: "ヨーロピアンオプション、アメリカンオプション、エキゾチックオプション", sections: [] }
                ],
                prerequisites: ["3-11", "4-8"]
            }
        ]
    }
];

export const getTopicById = (id: string): Topic | undefined => {
    return roadmapData
        .flatMap(stage => stage.topics)
        .find(t => t.id === id);
};

export const getStageByTopicId = (topicId: string): Stage | undefined => {
    return roadmapData.find(stage => stage.topics.some(t => t.id === topicId));
};
