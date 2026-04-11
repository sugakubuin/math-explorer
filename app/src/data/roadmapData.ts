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
    title: string; // e.g. "線形代数学I"
    chapters: Chapter[];
    prerequisites: string[];
}

export interface Stage {
    id: string; // e.g. "stage-1"
    title: string; // e.g. "Stage-1：教養としての数学"
    topics: Topic[];
}

export const roadmapData: Stage[] = [
    {
        id: "stage-1",
        title: "Stage-1：教養としての数学",
        topics: [
            {
                id: "1-1",
                title: "線形代数学I",
                chapters: [
                    {
                        id: "1", title: "ベクトル", description: "直感的な定義と演算、内積・ノルム、一次独立性",
                        sections: [
                            { id: "1.1", title: "ベクトルとは何か", description: "n次元列ベクトルの定義、零ベクトル、成分表示" },
                            { id: "1.2", title: "ベクトルの演算", description: "和・差・スカラー倍の定義と計算" },
                            { id: "1.3", title: "内積とノルム", description: "内積の定義、ノルム（大きさ）、なす角" },
                            { id: "1.4", title: "重要な不等式と一次独立", description: "コーシー・シュワルツの不等式、三角不等式、一次独立と一次従属" }
                        ]
                    },
                    {
                        id: "2", title: "行列", description: "行列の演算、転置行列、特別な行列",
                        sections: [
                            { id: "2.1", title: "行列とは何か", description: "m×n行列の定義、成分表示" },
                            { id: "2.2", title: "行列の演算", description: "和・スカラー倍・積の定義と計算" },
                            { id: "2.3", title: "転置行列", description: "転置の定義、性質、対称行列" },
                            { id: "2.4", title: "特別な行列", description: "単位行列・対角行列・零行列" }
                        ]
                    },
                    {
                        id: "3", title: "連立1次方程式とガウスの消去法", description: "行基本変形、掃き出し法、解の存在と個数",
                        sections: [
                            { id: "3.1", title: "連立1次方程式の行列表現", description: "Ax = b の形式、拡大係数行列" },
                            { id: "3.2", title: "行基本変形と階段行列", description: "3種の行基本変形、行階段形、簡約行階段形" },
                            { id: "3.3", title: "ガウスの消去法", description: "掃き出し法による連立方程式の解法" },
                            { id: "3.4", title: "解の存在と個数", description: "階数による解なし・一意・不定の分類" }
                        ]
                    },
                    {
                        id: "4", title: "行列式", description: "2×2・3×3の行列式、余因子展開、クラメルの公式",
                        sections: [
                            { id: "4.1", title: "2×2行列式の定義", description: "定義と幾何学的意味（面積）" },
                            { id: "4.2", title: "3×3行列式", description: "サラスの方法による計算" },
                            { id: "4.3", title: "一般の行列式と余因子展開", description: "任意のn×n行列式への拡張" },
                            { id: "4.4", title: "行列式の性質", description: "多重線形性、交代性、積の法則" },
                            { id: "4.5", title: "クラメルの公式", description: "行列式を用いた連立方程式の解法" }
                        ]
                    },
                    {
                        id: "5", title: "逆行列", description: "正則条件、公式と掃き出し法による計算",
                        sections: [
                            { id: "5.1", title: "逆行列の定義と存在条件", description: "正則行列、det A ≠ 0 との関係" },
                            { id: "5.2", title: "公式による逆行列の計算", description: "2×2の公式、余因子行列を使った方法" },
                            { id: "5.3", title: "掃き出し法による逆行列の計算", description: "[A|I] → [I|A⁻¹] の手順" }
                        ]
                    },
                    {
                        id: "6", title: "固有値と固有ベクトル", description: "特性方程式、固有空間の計算、対角化",
                        sections: [
                            { id: "6.1", title: "固有値・固有ベクトルとは何か", description: "直感的導入、Av = λv の意味" },
                            { id: "6.2", title: "特性方程式と固有値の計算", description: "det(A - λI) = 0 の解法" },
                            { id: "6.3", title: "固有ベクトルの計算", description: "固有空間、連立方程式を解く手順" },
                            { id: "6.4", title: "対角化", description: "対角化の手順、対角化可能な条件" }
                        ]
                    }
                ],
                prerequisites: ["高校数学"]
            },
            {
                id: "1-2",
                title: "微分積分学I",
                chapters: [
                    {
                        id: "1", title: "極限", description: "数列と関数の極限、はさみうちの原理",
                        sections: [
                            { id: "1.1", title: "数列の極限", description: "数列の収束・発散、極限の計算、はさみうちの原理" },
                            { id: "1.2", title: "関数の極限", description: "片側極限、無限大への極限、極限の性質" }
                        ]
                    },
                    {
                        id: "2", title: "微分", description: "導関数の定義と計算、ロピタルの定理、関数の極値",
                        sections: [
                            { id: "2.1", title: "導関数の定義と意味", description: "差分商、導関数の定義、微分可能性と連続性" },
                            { id: "2.2", title: "微分の計算法則", description: "和・差・積・商の微分法則、基本関数の導関数" },
                            { id: "2.3", title: "合成関数の微分と逆関数の微分", description: "連鎖律、逆関数微分法、対数微分法" },
                            { id: "2.4", title: "高階導関数", description: "第n次導関数、ライプニッツの公式" },
                            { id: "2.5", title: "ロピタルの定理", description: "不定形、適用手順と注意点" },
                            { id: "2.6", title: "微分の応用", description: "増減表、極値、凹凸、グラフの概形" }
                        ]
                    },
                    {
                        id: "3", title: "積分", description: "不定積分と定積分、微積分の基本定理、置換積分・部分積分",
                        sections: [
                            { id: "3.1", title: "不定積分", description: "原始関数の定義、基本積分公式" },
                            { id: "3.2", title: "定積分とリーマン和", description: "リーマン和による定義、定積分の性質" },
                            { id: "3.3", title: "微積分の基本定理", description: "第1・第2基本定理、不定積分と定積分の接続" },
                            { id: "3.4", title: "置換積分", description: "1変数の置換積分、定積分への応用" },
                            { id: "3.5", title: "部分積分", description: "部分積分の公式、繰り返し適用、定積分への応用" },
                            { id: "3.6", title: "積分の応用", description: "面積、回転体の体積、曲線の長さ" }
                        ]
                    },
                    {
                        id: "4", title: "級数", description: "無限級数の収束判定、べき級数、テイラー展開",
                        sections: [
                            { id: "4.1", title: "無限級数と収束・発散", description: "部分和、収束・発散の定義、等比級数" },
                            { id: "4.2", title: "収束判定法", description: "比判定法、根判定法、交代級数判定法" },
                            { id: "4.3", title: "べき級数", description: "べき級数の定義、収束半径、収束域" },
                            { id: "4.4", title: "テイラー展開・マクローリン展開", description: "テイラーの定理、主要関数の展開、展開の応用" }
                        ]
                    },
                    {
                        id: "5", title: "偏微分と全微分", description: "偏導関数、全微分、連鎖律、極値問題",
                        sections: [
                            { id: "5.1", title: "多変数関数とは", description: "2変数・3変数関数、グラフと等高線" },
                            { id: "5.2", title: "偏微分の計算", description: "偏導関数の定義、高階偏導関数、シュワルツの定理" },
                            { id: "5.3", title: "全微分", description: "全微分の定義、接平面、線形近似" },
                            { id: "5.4", title: "連鎖律", description: "合成関数の偏微分、変数変換への応用" },
                            { id: "5.5", title: "多変数関数の極値問題", description: "臨界点、ヘッセ行列による極値判定" }
                        ]
                    },
                    {
                        id: "6", title: "重積分", description: "累次積分、変数変換とヤコビアン、極座標・円柱座標・球座標",
                        sections: [
                            { id: "6.1", title: "二重積分と累次積分", description: "二重積分の定義、フビニの定理、積分順序の交換" },
                            { id: "6.2", title: "三重積分", description: "三重積分の定義と累次積分への帰着" },
                            { id: "6.3", title: "変数変換とヤコビアン", description: "ヤコビアンの定義、変数変換の公式" },
                            { id: "6.4", title: "極座標・円柱座標・球座標", description: "各座標系のヤコビアン、重積分への応用" }
                        ]
                    }
                ],
                prerequisites: ["高校数学"]
            }
        ]
    },
    {
        id: "stage-2",
        title: "Stage-2：基本的な数学",
        topics: [
            {
                id: "2-1",
                title: "線形代数学II",
                chapters: [
                    {
                        id: "1", title: "ベクトル空間", description: "公理的定義、部分空間、線形結合",
                        sections: [
                            { id: "1.1", title: "ベクトル空間の定義", description: "8つの公理の列挙と意味、スカラー体の役割" },
                            { id: "1.2", title: "ベクトル空間の例", description: "数ベクトル空間、多項式空間、関数空間、行列空間" },
                            { id: "1.3", title: "部分空間の定義と判定", description: "部分空間の3条件、判定手順" },
                            { id: "1.4", title: "線形結合と生成系", description: "線形結合の定義、生成される部分空間" },
                            { id: "1.5", title: "部分空間の和と直和", description: "部分空間の共通部分、和空間と次元定理、直和の条件" }
                        ]
                    },
                    {
                        id: "2", title: "線形独立・線形従属", description: "厳密な定義、基底、次元",
                        sections: [
                            { id: "2.1", title: "線形独立・従属の定義", description: "線形独立と線形従属の定義と幾何学的意味" },
                            { id: "2.2", title: "線形独立の判定法", description: "行列の行基本変形を用いた判定、零空間との関係" },
                            { id: "2.3", title: "基底の定義と性質", description: "生成系かつ線形独立、基底を構成するベクトルの個数の一意性" },
                            { id: "2.4", title: "次元と拡張定理", description: "次元の定義、線形独立なベクトル群の基底への拡張" },
                            { id: "2.5", title: "座標と基底変換", description: "基底に関する座標、基底変換行列と座標変換" }
                        ]
                    },
                    {
                        id: "3", title: "線形写像", description: "定義、核、像、次元定理の証明",
                        sections: [
                            { id: "3.1", title: "線形写像の定義と例", description: "加法性と斉次性の定義、微分・積分・行列積などの例" },
                            { id: "3.2", title: "核と像", description: "核 Ker と像 Im の定義、これらが部分空間となることの確認" },
                            { id: "3.3", title: "次元公式（核-像定理）", description: "次元定理の証明、単射と全射の判定" },
                            { id: "3.4", title: "表現行列", description: "基底を固定したときの行列表現、合成写像の表現行列" },
                            { id: "3.5", title: "基底変換と表現行列の変換", description: "基底変換による表現行列の変化、相似変換の意味" }
                        ]
                    },
                    {
                        id: "4", title: "双対空間", description: "線形汎関数、双対基底、双対写像、二重双対",
                        sections: [
                            { id: "4.1", title: "線形汎関数と双対空間の定義", description: "線形汎関数の全体が構成するベクトル空間" },
                            { id: "4.2", title: "双対基底", description: "基底に対する双対基底の構成、次元の一致" },
                            { id: "4.3", title: "双対写像（転置写像）", description: "線形写像から誘導される双対写像の定義と性質" },
                            { id: "4.4", title: "二重双対と自然な同型", description: "二重双対空間への埋め込み、有限次元における自然な同型" }
                        ]
                    },
                    {
                        id: "5", title: "固有値理論", description: "固有値、固有ベクトル、固有空間、固有多項式",
                        sections: [
                            { id: "5.1", title: "固有値・固有ベクトルの定義", description: "固有値・固有ベクトルの定義と幾何学的意味、Av = λv" },
                            { id: "5.2", title: "固有多項式と特性方程式", description: "特性方程式 det(A - λI) = 0 の導出、次数と次元の関係" },
                            { id: "5.3", title: "固有値の計算例", description: "2次・3次行列の固有値計算、複素固有値" },
                            { id: "5.4", title: "固有空間と重複度", description: "固有空間の定義、代数的重複度と幾何的重複度" },
                            { id: "5.5", title: "異なる固有値の固有ベクトルの独立性", description: "異なる固有値に属する固有ベクトルの線形独立性の証明" }
                        ]
                    },
                    {
                        id: "6", title: "対角化", description: "対角化可能性の条件と手順",
                        sections: [
                            { id: "6.1", title: "対角化の条件", description: "対角化可能であるための必要十分条件、重複度との関係" },
                            { id: "6.2", title: "対角化の手順と応用", description: "対角化の具体的手順、行列のべき乗計算への応用" },
                            { id: "6.3", title: "対角化不可能な例とジョルダン形の必要性", description: "対角化できない行列の例、ジョルダン標準形の導入" }
                        ]
                    },
                    {
                        id: "7", title: "ジョルダン標準形", description: "一般固有空間（広義固有空間）、ジョルダン細胞、最小多項式",
                        sections: [
                            { id: "7.1", title: "広義固有空間", description: "幾何的重複度が代数的重複度を下回る場合の拡張固有空間" },
                            { id: "7.2", title: "ジョルダン細胞と標準形の定義", description: "ジョルダン細胞の定義、標準形の存在と一意性" },
                            { id: "7.3", title: "ジョルダン標準形の計算手順", description: "最小多項式を用いたジョルダン標準形の決定" },
                            { id: "7.4", title: "ジョルダン基底の構成", description: "広義固有ベクトルを用いた基底の構成手順と計算例" }
                        ]
                    },
                    {
                        id: "8", title: "内積空間", description: "内積の公理、ノルム、コーシー・シュワルツの不等式",
                        sections: [
                            { id: "8.1", title: "内積の公理と例", description: "正値性・対称性・双線形性、標準内積や関数空間の内積" },
                            { id: "8.2", title: "ノルムと三角不等式", description: "内積から誘導されるノルム、三角不等式の証明" },
                            { id: "8.3", title: "コーシー・シュワルツの不等式", description: "不等式の証明と等号成立条件、なす角の定義" },
                            { id: "8.4", title: "直交性と直交補空間", description: "直交の定義、直交補空間、直交分解と射影定理" },
                            { id: "8.5", title: "射影作用素の理論", description: "直交射影の代数的特徴づけ、射影と部分空間の対応" }
                        ]
                    },
                    {
                        id: "9", title: "正規直交基底", description: "グラム・シュミットの直交化法、QR分解",
                        sections: [
                            { id: "9.1", title: "正規直交系と正規直交基底", description: "正規直交基底の性質、フーリエ係数による表示" },
                            { id: "9.2", title: "グラム・シュミット直交化のアルゴリズム", description: "正規直交系を構成するアルゴリズムの導出" },
                            { id: "9.3", title: "グラム・シュミット法の計算例", description: "具体例による正規直交基底の構成" },
                            { id: "9.4", title: "QR分解", description: "直交化プロセスからのQR分解の導出、最小二乗法への応用" }
                        ]
                    },
                    {
                        id: "10", title: "随伴作用素", description: "随伴の定義、自己随伴・歪自己随伴・ユニタリ・正規作用素",
                        sections: [
                            { id: "10.1", title: "随伴作用素の定義", description: "内積空間における随伴作用素、行列表現における共役転置" },
                            { id: "10.2", title: "自己随伴・歪自己随伴・ユニタリ作用素", description: "各作用素の定義と具体例" },
                            { id: "10.3", title: "正規作用素とスペクトル定理への橋渡し", description: "正規作用素の定義と性質の概要" }
                        ]
                    },
                    {
                        id: "11", title: "対称行列と正規行列", description: "実対称行列の直交対角化、エルミート行列、ユニタリ行列",
                        sections: [
                            { id: "11.1", title: "実対称行列の固有値", description: "固有値がすべて実数であることの証明" },
                            { id: "11.2", title: "実対称行列の固有ベクトルの直交性", description: "異なる固有値に属する固有ベクトルの直交性の証明" },
                            { id: "11.3", title: "スペクトル定理（実対称行列版）", description: "実対称行列の直交行列による対角化" },
                            { id: "11.4", title: "エルミート行列と正規行列", description: "エルミート行列・正規行列の定義、ユニタリ対角化可能性" }
                        ]
                    },
                    {
                        id: "12", title: "二次形式", description: "正定値、負定値、不定、シルベスターの慣性法則",
                        sections: [
                            { id: "12.1", title: "二次形式と行列表現", description: "二次形式の定義、対称行列を用いた行列表現" },
                            { id: "12.2", title: "定値性の分類", description: "正定値・半正定値・負定値・不定の定義、主小行列式による判定" },
                            { id: "12.3", title: "標準形への変換", description: "直交行列による変数変換と二次形式の対角化" },
                            { id: "12.4", title: "シルベスターの慣性法則", description: "標準形の符号数の不変性とその証明" }
                        ]
                    },
                    {
                        id: "13", title: "スペクトル分解", description: "実対称行列・正規作用素のスペクトル分解、行列関数",
                        sections: [
                            { id: "13.1", title: "スペクトル分解定理", description: "直交射影を用いたスペクトル分解定理とその性質" },
                            { id: "13.2", title: "正規行列のユニタリ対角化", description: "正規行列のスペクトル定理とユニタリ対角化" },
                            { id: "13.3", title: "行列関数の定義と計算", description: "スペクトル分解を用いた行列関数の定義と計算例" },
                            { id: "13.4", title: "正定値行列と行列の平方根", description: "半正定値行列の平方根の存在の一意性" }
                        ]
                    },
                    {
                        id: "14", title: "特異値分解（SVD）", description: "特異値・特異ベクトル、低ランク近似、擬逆行列、極分解",
                        sections: [
                            { id: "14.1", title: "特異値分解の定義と存在", description: "任意の行列の特異値分解の存在とその意義" },
                            { id: "14.2", title: "特異値の計算と幾何的意味", description: "特異値の計算方法、幾何学的な解釈" },
                            { id: "14.3", title: "低ランク近似とエッカート・ヤングの定理", description: "フロベニウスノルムによる最良低ランク近似" },
                            { id: "14.4", title: "ムーア・ペンローズ擬逆行列", description: "擬逆行列の定義、最小二乗解への応用" },
                            { id: "14.5", title: "極分解", description: "行列の回転成分と伸縮成分への分解と特異値分解からの導出" }
                        ]
                    }
                ],
                prerequisites: ["1-1"]
            },
            {
                id: "2-2",
                title: "微分積分学II",
                chapters: [
                    {
                        id: "1", title: "ε-δ論法", description: "極限、連続性、微分可能性の厳密な定義",
                        sections: [
                            { id: "1.1", title: "ε-δ による極限の定義", description: "極限の厳密な定義と直感的意味" },
                            { id: "1.2", title: "極限の一意性と極限の計算規則", description: "極限値の一意性、代数演算の極限定理の厳密な証明" },
                            { id: "1.3", title: "ε-δ による連続性", description: "連続性の厳密な定義、合成関数と代数的性質" },
                            { id: "1.4", title: "ε-δ による微分可能性", description: "微分可能性の定義、微分可能ならば連続であることの証明" }
                        ]
                    },
                    {
                        id: "2", title: "平均値の定理", description: "ロルの定理、平均値の定理の証明",
                        sections: [
                            { id: "2.1", title: "ロルの定理", description: "定理の主張・証明と幾何学的意味、仮定の重要性" },
                            { id: "2.2", title: "ラグランジュの平均値定理", description: "ロルの定理からの導出、単調性判定への応用" },
                            { id: "2.3", title: "コーシーの平均値定理", description: "定理の主張と証明、ロピタルの定理への橋渡し" },
                            { id: "2.4", title: "ロピタルの定理", description: "不定形への応用と注意点" }
                        ]
                    },
                    {
                        id: "3", title: "テイラーの定理", description: "剰余項の評価",
                        sections: [
                            { id: "3.1", title: "テイラーの定理の証明", description: "積分剰余項形式・ラグランジュ剰余項形式の証明" },
                            { id: "3.2", title: "剰余項の評価と精度", description: "剰余項の評価方法とテイラー近似の誤差見積もり" },
                            { id: "3.3", title: "マクローリン展開と収束半径", description: "代表的な関数のマクローリン展開と収束半径" },
                            { id: "3.4", title: "テイラー展開の応用", description: "不定形の評価、不等式の証明、最適化問題への応用" }
                        ]
                    },
                    {
                        id: "4", title: "多変数関数の理論", description: "全微分可能性の厳密な定義",
                        sections: [
                            { id: "4.1", title: "多変数関数の極限と連続性", description: "多変数の極限定義、方向依存性による反例" },
                            { id: "4.2", title: "偏微分と方向微分", description: "定義と計算、偏微分可能だが連続でない反例" },
                            { id: "4.3", title: "全微分可能性の定義", description: "線形近似の存在としての定義、偏微分との関係" },
                            { id: "4.4", title: "全微分可能性の判定条件", description: "偏微分が連続であれば全微分可能であることの証明" }
                        ]
                    },
                    {
                        id: "5", title: "合成関数の微分", description: "連鎖律の証明",
                        sections: [
                            { id: "5.1", title: "連鎖律の証明", description: "全微分可能性を用いた多変数連鎖律の厳密な証明" },
                            { id: "5.2", title: "行列形式のヤコビアン", description: "ヤコビ行列を用いた連鎖律の表現" },
                            { id: "5.3", title: "高階偏微分とシュワルツの定理", description: "混合偏微分の順序交換可能性とその証明" },
                            { id: "5.4", title: "変数変換への応用", description: "極座標や一般座標変換における連鎖律の応用" }
                        ]
                    },
                    {
                        id: "6", title: "ヘッセ行列", description: "極値問題の判定法",
                        sections: [
                            { id: "6.1", title: "ヘッセ行列の定義", description: "二階偏導関数からなる行列の構成と対称性" },
                            { id: "6.2", title: "臨界点の分類（極値判定）", description: "ヘッセ行列の定値性による極値と鞍点の分類" },
                            { id: "6.3", title: "2変数の場合の具体的判定", description: "行列式と対角成分による判定公式" },
                            { id: "6.4", title: "多変数の具体的な例題", description: "多変数関数の極値問題の解法と応用例" }
                        ]
                    },
                    {
                        id: "7", title: "ラグランジュの未定乗数法", description: "制約付き極値問題の理論",
                        sections: [
                            { id: "7.1", title: "制約付き極値問題の定式化", description: "制約条件の下での最適化問題の設定" },
                            { id: "7.2", title: "ラグランジュ条件の導出", description: "勾配ベクトルの平行直交関係と幾何学的意味" },
                            { id: "7.3", title: "複数制約への拡張", description: "複数の制約条件がある場合への一般化" },
                            { id: "7.4", title: "具体的な最適化問題", description: "図形問題や不等式の証明への応用" }
                        ]
                    },
                    {
                        id: "8", title: "陰関数定理", description: "陰関数の存在と微分可能性",
                        sections: [
                            { id: "8.1", title: "1変数版の陰関数定理", description: "方程式から局所的に関数を定める条件と導関数の公式" },
                            { id: "8.2", title: "多変数版の陰関数定理", description: "ヤコビ行列式を用いた多変数関数の陰関数の存在条件" },
                            { id: "8.3", title: "陰関数の微分の計算", description: "連鎖律を用いた偏導関数の計算例" },
                            { id: "8.4", title: "曲線・曲面の接線・法線への応用", description: "接線ベクトルや法線ベクトルの求め方" }
                        ]
                    },
                    {
                        id: "9", title: "逆写像定理", description: "局所的な逆関数の存在",
                        sections: [
                            { id: "9.1", title: "ヤコビアンと局所可逆性", description: "ヤコビ行列式による局所的な可逆性の直感的理解" },
                            { id: "9.2", title: "逆写像定理の証明の概略", description: "縮小写像の原理を用いた証明の構成" },
                            { id: "9.3", title: "陰関数定理との関係", description: "逆写像定理から陰関数定理を導くアプローチ" },
                            { id: "9.4", title: "座標変換への応用", description: "局所座標変換と面積積・体積素の変換" }
                        ]
                    },
                    {
                        id: "10", title: "曲線と曲面", description: "パラメータ表示、弧長、接線、法線の厳密な定義",
                        sections: [
                            { id: "10.1", title: "パラメータ曲線と正則性", description: "正則曲線の定義と弧長パラメータ" },
                            { id: "10.2", title: "曲線の弧長の計算", description: "曲線の長さの定義と計算例" },
                            { id: "10.3", title: "パラメータ曲面と面積要素", description: "曲面の正則性と面積素の導出" },
                            { id: "10.4", title: "曲線の曲率とフルネ・セレ公式", description: "曲率・捩率の定義と動標構の構成" }
                        ]
                    },
                    {
                        id: "11", title: "曲線積分・面積分", description: "線積分、面積分の厳密な定義",
                        sections: [
                            { id: "11.1", title: "スカラー場の線積分", description: "弧長による積分の定義と計算" },
                            { id: "11.2", title: "ベクトル場の線積分（仕事）", description: "曲線に沿ったベクトル場の積分と保存力場" },
                            { id: "11.3", title: "スカラー場・ベクトル場の面積分", description: "曲面上の積分と流束の定義" },
                            { id: "11.4", title: "グリーンの定理", description: "平面領域における線積分と二重積分の関係" }
                        ]
                    },
                    {
                        id: "12", title: "重積分", description: "二重積分、三重積分、累次積分、変数変換",
                        sections: [
                            { id: "12.1", title: "二重積分の定義", description: "リーマン和による定義と一般領域上の積分" },
                            { id: "12.2", title: "累次積分とフビニの定理", description: "積分順序の交換とフビニの定理の条件" },
                            { id: "12.3", title: "極座標への変換", description: "極座標変換のヤコビアンとガウス積分などの応用" },
                            { id: "12.4", title: "三重積分と一般的な変数変換", description: "円柱座標・球座標への変換と一般のヤコビアン" },
                            { id: "12.5", title: "広義重積分と収束条件", description: "非有界領域・無界関数上の広義重積分の評価" }
                        ]
                    }
                ],
                prerequisites: ["1-2"]
            },
            {
                id: "2-3",
                title: "実解析",
                chapters: [
                    {
                        id: "1", title: "実数の構成", description: "デデキントの切断、コーシー列による構成",
                        sections: [
                            { id: "1.1", title: "有理数の限界と実数の必要性", description: "平方根の非有理性、完備性の欠如" },
                            { id: "1.2", title: "デデキントの切断", description: "切断を用いた実数の構成とその完備性" },
                            { id: "1.3", title: "コーシー列による構成", description: "有理数のコーシー列の同値類による完備化としての実数" },
                            { id: "1.4", title: "2つの構成の同値性", description: "デデキント切断とコーシー列の構成が同値であること" }
                        ]
                    },
                    {
                        id: "2", title: "実数の完備性", description: "上限公理、下限公理、アルキメデスの原理",
                        sections: [
                            { id: "2.1", title: "上限と下限の定義", description: "上界・下界・上限・下限の厳密な定義と存在の一意性" },
                            { id: "2.2", title: "上限公理（完備性公理）", description: "上に有界な空でない集合が上限を持つ公理の意味" },
                            { id: "2.3", title: "完備性の同値命題", description: "単調収束定理や区間縮小法などとの同値性" },
                            { id: "2.4", title: "アルキメデスの原理と有理数の稠密性", description: "自然数の非有界性と有理数の稠密性の証明" }
                        ]
                    },
                    {
                        id: "3", title: "点列と無限級数", description: "点列の収束、コーシー列、上極限・下極限、無限級数の収束",
                        sections: [
                            { id: "3.1", title: "点列の収束と発散の定義", description: "収束の定義と極限の一意性、代数演算の定理" },
                            { id: "3.2", title: "部分列と集積点", description: "部分列の定義、ボルツァーノワイエルシュトラスの定理" },
                            { id: "3.3", title: "コーシー列と完備性", description: "コーシー列の定義と実数における収束との同値性" },
                            { id: "3.4", title: "上極限・下極限", description: "上極限・下極限の定義と性質、収束条件との関係" },
                            { id: "3.5", title: "無限級数の収束と絶対収束", description: "絶対収束と条件収束の区別、各種収束判定法" }
                        ]
                    },
                    {
                        id: "4", title: "連続関数の理論", description: "中間値の定理の証明、最大値定理、単調関数、凸関数",
                        sections: [
                            { id: "4.1", title: "連続性と不連続点の分類", description: "連続性の定義と不連続点の種類や反例" },
                            { id: "4.2", title: "連続関数の代数的性質と合成", description: "連続関数の演算と合成、区間による違い" },
                            { id: "4.3", title: "中間値の定理の厳密な証明", description: "二分法などを用いた厳密な証明と方程式への応用" },
                            { id: "4.4", title: "最大値・最小値定理", description: "閉区間上の連続関数が最大・最小値を持つことの証明" },
                            { id: "4.5", title: "単調関数と凸関数", description: "単調関数の不連続点の可算性、凸関数の性質と連続性" }
                        ]
                    },
                    {
                        id: "5", title: "一様連続", description: "一様連続性の定義、コンパクト集合上の性質",
                        sections: [
                            { id: "5.1", title: "一様連続の定義と点連続との違い", description: "一様連続の厳密な定義と一様連続でない例" },
                            { id: "5.2", title: "ハイネ・カントールの定理", description: "閉区間上の連続関数は一様連続であることの証明" },
                            { id: "5.3", title: "一様連続関数の延長と応用", description: "稠密な部分集合上の関数の延長と完備化" },
                            { id: "5.4", title: "リプシッツ連続と一様連続の関係", description: "リプシッツ条件と一様連続性の包含関係" }
                        ]
                    },
                    {
                        id: "6", title: "微分の理論（実解析的）", description: "平均値定理の厳密な証明、テイラーの定理の剰余評価",
                        sections: [
                            { id: "6.1", title: "微分可能性の実解析的定義", description: "微分の厳密な定義と連続性の関係、微分不可能な連続関数の例" },
                            { id: "6.2", title: "平均値定理の厳密な証明", description: "ロルの定理からの展開と最大値定理を用いた証明" },
                            { id: "6.3", title: "テイラーの定理と剰余項の評価", description: "各剰余項の形式の証明と実解析的な誤差評価" },
                            { id: "6.4", title: "ロピタルの定理と高階微分", description: "コーシーの平均値定理を用いた不定形の評価と混合偏微分の定理" }
                        ]
                    },
                    {
                        id: "7", title: "関数列と一様収束", description: "各点収束、一様収束の違い、極限と連続・積分・微分の交換",
                        sections: [
                            { id: "7.1", title: "各点収束の定義と例", description: "関数列の各点収束の定義と具体的な計算例" },
                            { id: "7.2", title: "一様収束の定義と各点収束との比較", description: "一様収束の定義とその直感的な意味" },
                            { id: "7.3", title: "一様収束と連続性・積分の保存", description: "極限と積分・連続性の順序交換可能性とその証明" },
                            { id: "7.4", title: "一様収束と微分の交換", description: "極限と微分の順序交換に必要な条件と反例" }
                        ]
                    },
                    {
                        id: "8", title: "べき級数と関数項級数", description: "ワイエルシュトラスのM判定法、べき級数の収束半径、近似定理",
                        sections: [
                            { id: "8.1", title: "ワイエルシュトラスのM判定法", description: "関数項級数の一様収束と絶対収束を示す定理の証明" },
                            { id: "8.2", title: "べき級数の収束と収束半径", description: "収束半径の定義と境界での挙動の評価" },
                            { id: "8.3", title: "べき級数の一様収束と項別微積分", description: "収束円内部での一様収束性と項別微積分の正当性" },
                            { id: "8.4", title: "ワイエルシュトラスの近似定理", description: "閉区間上の連続関数を多項式で一様近似できることの証明" }
                        ]
                    },
                    {
                        id: "9", title: "リーマン積分", description: "上積分、下積分、リーマン和、リーマン可積分性",
                        sections: [
                            { id: "9.1", title: "分割・上和・下和の定義", description: "区間の分割と上リーマン和・下リーマン和の定義" },
                            { id: "9.2", title: "リーマン可積分性の定義と条件", description: "上積分と下積分の一致による可積分性の定義と証明" },
                            { id: "9.3", title: "リーマン積分の基本性質", description: "積分の線形性、単調性などの代数的・解析的性質" },
                            { id: "9.4", title: "微積分の基本定理の証明", description: "微積分学の第1・第2定理の実解析的な厳密証明" }
                        ]
                    },
                    {
                        id: "10", title: "広義積分", description: "無限区間・無界関数の積分、収束判定法",
                        sections: [
                            { id: "10.1", title: "広義積分の定義（無限区間）", description: "極限としての積分定義と絶対収束・条件収束" },
                            { id: "10.2", title: "広義積分の定義（無界関数）", description: "特異点を持つ関数の積分定義と主値積分" },
                            { id: "10.3", title: "収束判定法", description: "比較判定法やディリクレ・アーベルの判定法の応用" },
                            { id: "10.4", title: "パラメータ依存積分の微分", description: "積分記号下の微分・ライプニッツ則と収束条件" }
                        ]
                    },
                    {
                        id: "11", title: "積分と収束の深化", description: "積分と極限の交換、置換積分・部分積分の厳密な証明",
                        sections: [
                            { id: "11.1", title: "積分と極限の交換条件", description: "一様収束性に基づく積分と極限の交換定理と反例" },
                            { id: "11.2", title: "置換積分と変数変換の厳密な証明", description: "1変数の置換積分の厳密な証明と適用条件" },
                            { id: "11.3", title: "部分積分の厳密な証明と応用", description: "部分積分の証明と漸化式・特殊関数への応用" }
                        ]
                    }
                ],
                prerequisites: ["1-2"]
            },
            {
                id: "2-4",
                title: "素朴集合論",
                chapters: [
                    {
                        id: "1", title: "集合の基礎と公理", description: "集合の演算、ド・モルガンの法則、べき集合、素朴集合論の限界",
                        sections: [
                            { id: "1.1", title: "集合の定義と表記法", description: "外延的・内包的記法、包含関係や空集合の扱い" },
                            { id: "1.2", title: "集合演算", description: "和・積・差・補の定義と基本性質、ド・モルガンの法則" },
                            { id: "1.3", title: "べき集合と直積", description: "べき集合と直積の定義、集合族の表記" },
                            { id: "1.4", title: "ラッセルのパラドックス", description: "素朴集合論の矛盾と公理的集合論への動機" },
                            { id: "1.5", title: "公理的集合論の概観（ZF公理系）", description: "外延の公理や分出公理など主要公理の概観" }
                        ]
                    },
                    {
                        id: "2", title: "写像", description: "写像、定義域、値域、全射、単射、全単射",
                        sections: [
                            { id: "2.1", title: "写像の定義と基本性質", description: "定義域・値域・像・逆像の定義、恒等写像と包含写像" },
                            { id: "2.2", title: "全射・単射・全単射の定義と判定", description: "各性質の厳密な定義と具体例" },
                            { id: "2.3", title: "合成写像と逆写像", description: "写像の合成と結合律、全単射における逆写像の存在" },
                            { id: "2.4", title: "像と逆像の性質", description: "集合演算との関係とそれらの証明" }
                        ]
                    },
                    {
                        id: "3", title: "関係", description: "同値関係、同値類、商集合",
                        sections: [
                            { id: "3.1", title: "2項関係の定義と分類", description: "反射律・対称律・推移律・反対称律の定義" },
                            { id: "3.2", title: "同値関係の定義と例", description: "3つの公理を満たす関係と整数の合同などの具体例" },
                            { id: "3.3", title: "同値類と商集合", description: "同値類の定義と商集合の構成、集合の分割との対応" },
                            { id: "3.4", title: "商写像と普遍性", description: "自然な射影と商集合が持つ普遍性の概念" }
                        ]
                    },
                    {
                        id: "4", title: "順序と帰納的定義", description: "半順序、全順序、整列集合、ペアノの公理、超限帰納法",
                        sections: [
                            { id: "4.1", title: "半順序と全順序の定義", description: "各順序の公理とハッセ図による視覚化" },
                            { id: "4.2", title: "上限・下限・最大元・極大元", description: "各概念の定義と違い、包含順序での例" },
                            { id: "4.3", title: "整列集合と数学的帰納法の基礎", description: "整列順序の定義と自然数の整列性、帰納法の基礎" },
                            { id: "4.4", title: "ペアノの公理と自然数の構成", description: "ペアノの公理と集合論的な自然数の構成法" },
                            { id: "4.5", title: "超限帰納法と順序数の概念", description: "整列集合上の超限帰納法と順序数の概念" }
                        ]
                    },
                    {
                        id: "5", title: "濃度の理論", description: "対等・可算・非可算、対角線論法、ベルンシュタインの定理",
                        sections: [
                            { id: "5.1", title: "集合の対等と濃度の定義", description: "全単射による対等の定義と有限・無限集合の区別" },
                            { id: "5.2", title: "可算集合の例と証明", description: "整数・有理数の可算性と可算集合の性質" },
                            { id: "5.3", title: "カントールの対角線論法", description: "対角線論法の仕組みと実数の非可算性の証明" },
                            { id: "5.4", title: "カントールの定理", description: "べき集合の濃度が元の集合より真に大きくなることの証明" },
                            { id: "5.5", title: "ベルンシュタインの定理", description: "双方向の単射の存在による濃度の等価性の証明と応用" },
                            { id: "5.6", title: "連続体濃度と連続体仮説", description: "実数の濃度と連続体仮説の独立性の紹介" }
                        ]
                    },
                    {
                        id: "6", title: "選択公理", description: "選択公理の主張、ツォルンの補題、整列定理",
                        sections: [
                            { id: "6.1", title: "選択公理の主張と直感", description: "選択関数の存在と無限族での非自明性" },
                            { id: "6.2", title: "ツォルンの補題", description: "帰納的順序集合の極大元の存在と代数での応用" },
                            { id: "6.3", title: "整列定理", description: "任意の集合が整列可能であることの主張と選択公理との同値性" },
                            { id: "6.4", title: "3命題の同値性", description: "選択公理、ツォルンの補題、整列定理の同値性の流れ" }
                        ]
                    }
                ],
                prerequisites: ["高校数学"]
            },
            {
                id: "2-5",
                title: "位相空間論I",
                chapters: [
                    {
                        id: "1", title: "位相空間", description: "開集合系の公理、位相の定義、開基、準開基",
                        sections: [
                            { id: "1.1", title: "位相の公理と定義", description: "開集合系の公理と位相空間の定義" },
                            { id: "1.2", title: "位相の具体例", description: "離散位相、密着位相、通常の位相など" },
                            { id: "1.3", title: "開基の定義と開基の条件", description: "ある集合族が開基となる条件とその役割" },
                            { id: "1.4", title: "準開基から位相を生成する", description: "準開基による位相の生成法と有限交叉" }
                        ]
                    },
                    {
                        id: "2", title: "開集合・閉集合・近傍", description: "内部、閉包、境界、導集合、近傍系、可算公理",
                        sections: [
                            { id: "2.1", title: "閉集合の定義と性質", description: "開集合の補集合としての閉集合の基本性質" },
                            { id: "2.2", title: "内部・閉包・境界・導集合", description: "内部、閉包、境界、集積点などの定義と関係" },
                            { id: "2.3", title: "稠密性と可分性", description: "稠密な部分集合の存在と可分空間の定義" },
                            { id: "2.4", title: "近傍と近傍系の定義", description: "近傍の概念と近傍系による位相の規定" },
                            { id: "2.5", title: "近傍基と第一可算公理", description: "第一可算公理の意味と点列収束との関係" },
                            { id: "2.6", title: "第二可算公理", description: "第二可算公理と可分性やリンデレーフ性との関係" }
                        ]
                    },
                    {
                        id: "3", title: "連続写像", description: "位相空間における連続性の定義、初期位相・終位相",
                        sections: [
                            { id: "3.1", title: "開集合による連続性の定義", description: "開集合の逆像が開集合となることによる連続性の定義" },
                            { id: "3.2", title: "連続性の同値条件", description: "閉集合や近傍を用いた連続性の判定条件" },
                            { id: "3.3", title: "連続写像の合成と安定性", description: "連続写像の合成や制限における連続性の保存" },
                            { id: "3.4", title: "初期位相・終位相", description: "位相を誘導する最弱・最強の位相と同値関係" }
                        ]
                    },
                    {
                        id: "4", title: "同相写像と位相的不変量", description: "位相的性質、同相写像、位相的不変量",
                        sections: [
                            { id: "4.1", title: "同相写像の定義", description: "全単射かつ両方向で連続な写像としての同相の概念" },
                            { id: "4.2", title: "同相の例", description: "図形の連続変形と位相的な同値性の直感的理解" },
                            { id: "4.3", title: "位相的不変量", description: "コンパクト性や連結性など同相で保たれる性質" },
                            { id: "4.4", title: "埋め込みと位相的不変量の応用", description: "部分空間への同相写像である埋め込みの概念" }
                        ]
                    },
                    {
                        id: "5", title: "空間の構成（部分・積・商）", description: "相対位相、直積空間、商空間、チコノフの定理",
                        sections: [
                            { id: "5.1", title: "部分空間（相対位相）", description: "部分空間の位相の構成と遺伝的性質" },
                            { id: "5.2", title: "有限積位相の定義と普遍性", description: "直積空間における積位相の定義と直積の普遍性" },
                            { id: "5.3", title: "積空間での位相的性質の保存", description: "有限積におけるコンパクト性等の性質の保存" },
                            { id: "5.4", title: "商位相と商空間", description: "同値関係からなる商空間への自然な位相の構成" },
                            { id: "5.5", title: "商空間の例とチコノフの定理", description: "商空間の具体例と任意の積におけるコンパクト性の定理" }
                        ]
                    },
                    {
                        id: "6", title: "分離公理", description: "T0, T1, T2（ハウスドルフ）, T3, T4（正規）空間",
                        sections: [
                            { id: "6.1", title: "T0・T1空間の定義", description: "コルモゴロフ空間とT1空間の初歩的な分離公理" },
                            { id: "6.2", title: "ハウスドルフ空間（T2）", description: "異なる2点を互いに素な開集合で分離できる空間とその重要性" },
                            { id: "6.3", title: "正則空間（T3）と完全正則空間", description: "点と閉集合の分離や連続関数による空間の分離" },
                            { id: "6.4", title: "正規空間（T4）とウリゾーンの補題", description: "閉集合同士の分離とウリゾーンの補題による連続関数の存在" }
                        ]
                    },
                    {
                        id: "7", title: "コンパクト性", description: "開被覆、有限部分被覆、ハイネ・ボレルの定理、一様連続",
                        sections: [
                            { id: "7.1", title: "コンパクト性の定義", description: "任意の開被覆から有限部分被覆が抽出できる性質" },
                            { id: "7.2", title: "コンパクト集合の基本性質", description: "連続写像による像の保存やハウスドルフ空間内の閉集合性" },
                            { id: "7.3", title: "コンパクト空間での連続写像の性質", description: "コンパクト性の最大値定理や全単射に関する性質への応用" },
                            { id: "7.4", title: "ハイネ・ボレルの定理", description: "ユークリッド空間における有界閉集合とコンパクト性の同値性" },
                            { id: "7.5", title: "逐次コンパクト性", description: "点列における収束部分列の存在とコンパクト性との違い" },
                            { id: "7.6", title: "コンパクト空間上の一様連続", description: "コンパクト空間上の連続関数が常に一様連続となること" },
                            { id: "7.7", title: "局所コンパクト性と 1 点コンパクト化", description: "各点がコンパクト近傍を持つ空間と Alexandroff の 1 点コンパクト化" }
                        ]
                    },
                    {
                        id: "8", title: "連結性", description: "連結空間、弧状連結、連結成分",
                        sections: [
                            { id: "8.1", title: "連結空間の定義と例", description: "空間が2つの開集合に分割されない性質" },
                            { id: "8.2", title: "連続写像と連結性", description: "連結性が連続写像によって保存されること" },
                            { id: "8.3", title: "弧状連結と連結の関係", description: "点の曲線を結べる性質との包含関係と反例" },
                            { id: "8.4", title: "連結成分と局所連結性", description: "極大連結部分集合の概念や局所的な連結性" }
                        ]
                    },
                    {
                        id: "9", title: "距離空間", description: "距離関数、距離位相、ベール圏定理",
                        sections: [
                            { id: "9.1", title: "距離関数と距離空間", description: "距離の公理に則った空間と開球による位相の生成" },
                            { id: "9.2", title: "距離空間での連続性・収束", description: "距離空間特有の点列やε-δによる連続性の定式化" },
                            { id: "9.3", title: "距離空間の等長写像と同型", description: "距離を保つ写像による空間の同一視" },
                            { id: "9.4", title: "ベール圏定理", description: "完備距離空間の疎集合への分解不可能性と稠密性への応用" },
                            { id: "9.5", title: "距離空間のコンパクト性と全有界性", description: "完備性と全有界性を用いた距離空間のコンパクト性の特徴づけ" }
                        ]
                    },
                    {
                        id: "10", title: "完備距離空間", description: "コーシー列、完備性、完備化の構成",
                        sections: [
                            { id: "10.1", title: "コーシー列と完備性の定義", description: "すべてのコーシー列が収束する空間の定義と完備でない例" },
                            { id: "10.2", title: "完備な距離空間の例", description: "ユークリッド空間や関数空間などの完備性の確認" },
                            { id: "10.3", title: "完備化の構成", description: "完備でない距離空間へのコーシー列による同値類での完備化の構成" },
                            { id: "10.4", title: "バナッハの不動点定理", description: "縮小写像における不動点の一意存在とその微分方程式などへの応用" }
                        ]
                    }
                ],
                prerequisites: ["2-4"]
            },
            {
                id: "2-6",
                title: "微分方程式I",
                chapters: [
                    {
                        id: "1", title: "1階常微分方程式", description: "変数分離形、同次形、線形、完全微分方程式、特殊型",
                        sections: [
                            { id: "1.1", title: "変数分離形", description: "変数分離形の方程式の解法と指数成長モデルなどの具体例" },
                            { id: "1.2", title: "1階線形方程式", description: "積分因子を用いた解法と同次形の変数変換" },
                            { id: "1.3", title: "完全微分方程式", description: "完全微分方程式の判定条件と積分因子による変換" },
                            { id: "1.4", title: "ベルヌーイ型とリッカティ型", description: "ベルヌーイ方程式の置換とリッカティ方程式の線形化" },
                            { id: "1.5", title: "クレロー方程式と包絡線", description: "クレロー方程式の一般解と特異解としての包絡線の導出" }
                        ]
                    },
                    {
                        id: "2", title: "存在と一意性", description: "ピカールの逐次近似法、リプシッツ条件",
                        sections: [
                            { id: "2.1", title: "初期値問題の設定", description: "初期値問題の形式と局所解・大域解の違い" },
                            { id: "2.2", title: "リプシッツ条件と平滑性", description: "リプシッツ連続の概念と一意性定理における役割" },
                            { id: "2.3", title: "ピカール・リンデレーフの定理", description: "リプシッツ連続性に基づく局所的な解の存在と一意性の定理" },
                            { id: "2.4", title: "逐次近似による証明", description: "ピカール反復の収束性と縮小写像の原理による証明" }
                        ]
                    },
                    {
                        id: "3", title: "線形微分方程式の理論", description: "斉次方程式、非斉次方程式、ロンスキアン",
                        sections: [
                            { id: "3.1", title: "斉次線形方程式と解空間", description: "解の重ね合わせの原理と解空間の次元" },
                            { id: "3.2", title: "ロンスキアンと基本解系", description: "ロンスキー行列式による基本解系の一次独立性の判定" },
                            { id: "3.3", title: "非斉次方程式と定数変化法", description: "一般解の構造と定数変化法による特殊解の構成" },
                            { id: "3.4", title: "解の最大延長と大域的存在", description: "局所解の最大延長定理と解が有界である条件" }
                        ]
                    },
                    {
                        id: "4", title: "定数係数線形方程式", description: "特性方程式、重根の場合、複素根",
                        sections: [
                            { id: "4.1", title: "特性方程式と実数単根の場合", description: "特性方程式の導入と実数単根に対する基本解" },
                            { id: "4.2", title: "重根の場合", description: "特性方程式が重根を持つ場合の基本解系の構成" },
                            { id: "4.3", title: "複素根の場合", description: "複素共役根に対する実数関数の基本解とオイラーの公式への関連" },
                            { id: "4.4", title: "n階方程式の一般解の構造", description: "高階定数係数線形方程式の一般解と物理モデルへの応用" }
                        ]
                    },
                    {
                        id: "5", title: "非同次方程式の解法", description: "未定係数法、定数変化法（一般化）、グリーン関数",
                        sections: [
                            { id: "5.1", title: "未定係数法", description: "右辺が特定の関数形である場合の特殊解の仮定と決定" },
                            { id: "5.2", title: "定数変化法（一般化）", description: "高階方程式への定数変化法の拡張とロンスキアンによる公式" },
                            { id: "5.3", title: "グリーン関数の導入", description: "初等的なグリーン関数の構成とインパルス応答の概念" }
                        ]
                    },
                    {
                        id: "6", title: "連立微分方程式", description: "行列形式、固有値による解法",
                        sections: [
                            { id: "6.1", title: "行列形式への変換", description: "連立微分方程式の行列表現と高階方程式の1階連立系への変換" },
                            { id: "6.2", title: "対角化可能な場合の解法", description: "行列の固有値と固有ベクトルを用いた一般解の構成" },
                            { id: "6.3", title: "複素固有値の場合", description: "複素固有値に対する実数形での解の構成" }
                        ]
                    },
                    {
                        id: "7", title: "安定性の入門", description: "平衡点、相平面、線形化",
                        sections: [
                            { id: "7.1", title: "平衡点と相平面", description: "自律系の平衡点の定義と相平面上の解の軌道の解釈" },
                            { id: "7.2", title: "線形化と局所安定性", description: "ヤコビ行列による線形化と固有値に基づく平衡点の安定性判別" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "2-2"]
            },
            {
                id: "2-7",
                title: "整数論I",
                chapters: [
                    {
                        id: "1", title: "整除性", description: "最大公約数、最小公倍数、ユークリッドの互除法",
                        sections: [
                            { id: "1.1", title: "整除の定義と基本性質", description: "整除の定義とその推移性や線形性などの基本性質" },
                            { id: "1.2", title: "最大公約数の定義と性質", description: "最大公約数の定義と最小公倍数との関係" },
                            { id: "1.3", title: "ユークリッドの互除法", description: "除算の原理を用いた最大公約数を求めるアルゴリズムとその証明" },
                            { id: "1.4", title: "互除法の計算量と応用", description: "フィボナッチ数列を用いた最悪計算量の評価と実装" }
                        ]
                    },
                    {
                        id: "2", title: "ベズーの等式", description: "1次不定方程式",
                        sections: [
                            { id: "2.1", title: "ベズーの等式の証明", description: "最大公約数を表す線形結合の存在と拡張ユークリッド法" },
                            { id: "2.2", title: "1次不定方程式の解全体", description: "1次不定方程式の整数解の存在条件と解全体の記述" },
                            { id: "2.3", title: "拡張ユークリッド法のアルゴリズム", description: "ベズー係数を求める具体的な計算手順" },
                            { id: "2.4", title: "互いに素な整数の性質", description: "互いに素である場合の特別な性質とベズー等式の応用" }
                        ]
                    },
                    {
                        id: "3", title: "素数", description: "素数の無限性、素因数分解の一意性、エラトステネスの篩",
                        sections: [
                            { id: "3.1", title: "素数の定義と基本性質", description: "素数と合成数の定義、素数が積を割り切る性質" },
                            { id: "3.2", title: "算術の基本定理", description: "素因数分解の存在と一意性の証明" },
                            { id: "3.3", title: "素数の無限性", description: "ユークリッドの証明やディリクレの算術級数定理の紹介" },
                            { id: "3.4", title: "エラトステネスの篩と素数分布", description: "素数を列挙するアルゴリズムと素数定理の紹介" }
                        ]
                    },
                    {
                        id: "4", title: "合同式", description: "合同算術、合同式の演算",
                        sections: [
                            { id: "4.1", title: "合同の定義と計算規則", description: "合同の定義と和・積・べき乗の演算規則" },
                            { id: "4.2", title: "剰余類と環構造", description: "剰余類の概念と加法・乗法における代数構造" },
                            { id: "4.3", title: "逆元の存在条件", description: "モジュロ演算における逆元の存在条件と計算方法" },
                            { id: "4.4", title: "1次合同方程式の解法", description: "合同方程式の解の存在条件と解の個数の決定" }
                        ]
                    },
                    {
                        id: "5", title: "フェルマーの小定理", description: "証明と応用",
                        sections: [
                            { id: "5.1", title: "定理の主張と証明", description: "フェルマーの小定理の主張とその基本的な証明" },
                            { id: "5.2", title: "ウィルソンの定理", description: "ウィルソンの定理の主張と素数判定への応用" },
                            { id: "5.3", title: "フェルマーの小定理とRSA暗号への応用", description: "RSA暗号の仕組みにおける基礎定理の役割" },
                            { id: "5.4", title: "べき乗の高速計算", description: "反復自乗法と合同式を用いた効率的なべき乗計算" }
                        ]
                    },
                    {
                        id: "6", title: "オイラーの関数", description: "φ(n)の性質、オイラーの定理",
                        sections: [
                            { id: "6.1", title: "φ(n) の定義と計算公式", description: "オイラーのトーシェント関数 φ(n) の定義と素数べきでの公式" },
                            { id: "6.2", title: "φ の乗法性", description: "互いに素な整数に対する乗法性の証明" },
                            { id: "6.3", title: "オイラーの定理", description: "フェルマーの小定理の一般化としてのオイラーの定理とその証明" },
                            { id: "6.4", title: "φ の合計公式と素因数分解への応用", description: "約数にわたる和の公式と直接計算への応用" }
                        ]
                    }
                ],
                prerequisites: ["高校数学"]
            }
        ]
    },
    {
        id: "stage-3",
        title: "Stage-3：広がる数学",
        topics: [
            {
                id: "3-1",
                title: "ベクトル解析",
                chapters: [
                    {
                        id: "1", title: "ベクトル場の基礎", description: "スカラー場・ベクトル場と微分演算子",
                        sections: [
                            { id: "1.1", title: "スカラー場と勾配（grad）", description: "方向微分と勾配ベクトルの幾何学的意味、ポテンシャル" },
                            { id: "1.2", title: "ベクトル場と発散（div）", description: "湧き出し・吸い込みのモデルと流束密度の概念" },
                            { id: "1.3", title: "回転（rot/curl）", description: "ある点での渦の強さと向きを示す循環密度の概念" },
                            { id: "1.4", title: "ベクトル演算の公式", description: "発散、回転、勾配を組み合わせた微分の公式とラプラシアン" }
                        ]
                    },
                    {
                        id: "2", title: "曲線座標系", description: "一般座標系における微分演算",
                        sections: [
                            { id: "2.1", title: "曲線座標系と基底ベクトル", description: "局所直交座標系と計量係数の概念" },
                            { id: "2.2", title: "円柱座標系", description: "円柱座標系における勾配・発散・回転・ラプラシアンの公式導出" },
                            { id: "2.3", title: "極座標系（球座標）", description: "球座標系における勾配・発散・回転・ラプラシアンの公式導出" },
                            { id: "2.4", title: "一般直交曲線座標系での公式", description: "ラメ係数を用いた曲線座標系での一般公式" }
                        ]
                    },
                    {
                        id: "3", title: "線積分", description: "スカラー場・ベクトル場の線積分",
                        sections: [
                            { id: "3.1", title: "曲線のパラメータ表示", description: "弧長パラメータと曲線上の接ベクトル" },
                            { id: "3.2", title: "スカラー場の線積分", description: "曲線の質量や重心などのスカラー量の計算" },
                            { id: "3.3", title: "ベクトル場の線積分", description: "力の場がする仕事や流体の循環の計算" },
                            { id: "3.4", title: "保存力場とポテンシャル", description: "経路に依存しない積分とポテンシャルの存在条件" }
                        ]
                    },
                    {
                        id: "4", title: "グリーンの定理", description: "平面領域における積分定理",
                        sections: [
                            { id: "4.1", title: "グリーンの定理の主張", description: "平面上の線積分と領域の二重積分の関係" },
                            { id: "4.2", title: "グリーンの定理の証明", description: "縦横に単純な領域に対する定理の証明" },
                            { id: "4.3", title: "面積の計算公式", description: "線積分を用いた領域の面積の計算とその応用" },
                            { id: "4.4", title: "ベクトル形式での解釈", description: "2次元における発散定理やストークスの定理としての解釈" }
                        ]
                    },
                    {
                        id: "5", title: "面積分", description: "曲面上の積分",
                        sections: [
                            { id: "5.1", title: "曲面のパラメータ表示", description: "接平面と法線ベクトルに基づく曲面の微小表現" },
                            { id: "5.2", title: "曲面積要素", description: "曲面のパラメータ表示から導出される面積素の幾何学的意味" },
                            { id: "5.3", title: "スカラー場の面積分", description: "曲面の質量や重心などのスカラー量の面積分" },
                            { id: "5.4", title: "ベクトル場の面積分（流束）", description: "面の向きを考慮したベクトル場の流束の物理的意味" }
                        ]
                    },
                    {
                        id: "6", title: "ガウスの発散定理", description: "3次元領域での積分定理",
                        sections: [
                            { id: "6.1", title: "発散定理の主張", description: "閉曲面上の流束と内部領域の発散の体積積分の関係" },
                            { id: "6.2", title: "発散定理の証明", description: "標準的な領域に対する発散定理の証明" },
                            { id: "6.3", title: "物理学的応用", description: "質量保存則などの連続の方程式やガウスの法則への応用" },
                            { id: "6.4", title: "立体角と逆二乗則の場", description: "原点を含む領域での湧き出し量の計算と立体角の概念" }
                        ]
                    },
                    {
                        id: "7", title: "ストークスの定理", description: "曲面と境界曲線に関する積分定理",
                        sections: [
                            { id: "7.1", title: "ストークスの定理の主張", description: "曲面上の渦の面積分と境界の循環（線積分）の関係" },
                            { id: "7.2", title: "ストークスの定理の証明", description: "曲面のパラメータ表示を用いた成分ごとの証明" },
                            { id: "7.3", title: "物理学的応用", description: "アンペールの法則やファラデーの電磁誘導の法則への応用" },
                            { id: "7.4", title: "ヘルムホルツの分解定理", description: "ベクトル場を渦なし成分と湧き出しなし成分へ分解する定理" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "2-2", "2-3"]
            },
            {
                id: "3-2",
                title: "複素解析I",
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
                            { id: "2.3", title: "複素微分可能性と正則関数", description: "微分係数の定義、正則の意味" },
                            { id: "2.4", title: "コーシー・リーマンの方程式（C-R）", description: "正則であるための必要十分条件、調和関数との関係" }
                        ]
                    },
                    {
                        id: "3", title: "初等複素関数", description: "指数・対数・三角関数の複素拡張",
                        sections: [
                            { id: "3.1", title: "指数関数 e^z", description: "定義、周期性、写像の様子" },
                            { id: "3.2", title: "三角関数と双曲線関数", description: "sin z, cos z, sinh z, cosh z の定義と公式" },
                            { id: "3.3", title: "対数関数 log z", description: "多価性、主値 Log z、分枝" },
                            { id: "3.4", title: "一般のべき関数 z^a", description: "定義とその多価性" }
                        ]
                    },
                    {
                        id: "4", title: "複素積分", description: "コーシーの積分定理",
                        sections: [
                            { id: "4.1", title: "複素積分の定義", description: "線積分の定義と基本的性質" },
                            { id: "4.2", title: "原始関数の存在と積分", description: "経路無依存性、原始関数を用いた計算" },
                            { id: "4.3", title: "コーシーの積分定理", description: "単連結領域での周回積分の値、証明の概略" },
                            { id: "4.4", title: "コーシーの積分定理の応用", description: "経路変形原理" }
                        ]
                    },
                    {
                        id: "5", title: "正則関数の性質", description: "積分公式とテイラー展開",
                        sections: [
                            { id: "5.1", title: "コーシーの積分公式", description: "コーシーの積分公式とグルサの公式" },
                            { id: "5.2", title: "正則関数の諸定理", description: "モレラの定理、リュービルの定理、代数学の基本定理" },
                            { id: "5.3", title: "最大値原理", description: "領域内部で絶対値が最大とならない性質" },
                            { id: "5.4", title: "テイラー展開と一致の定理", description: "正則関数の冪級数展開可能性、収束半径、一致の定理" }
                        ]
                    },
                    {
                        id: "6", title: "孤立特異点とローラン展開", description: "特異点の周りでの挙動",
                        sections: [
                            { id: "6.1", title: "ローラン展開", description: "円環領域での級数展開、主要部と正則部" },
                            { id: "6.2", title: "孤立特異点の分類", description: "除去可能特異点、極、真性特異点" },
                            { id: "6.3", title: "無限遠点", description: "リーマン球面、無限遠点での正則性・特異性" }
                        ]
                    },
                    {
                        id: "7", title: "留数定理", description: "積分の計算技術",
                        sections: [
                            { id: "7.1", title: "留数の定義と計算", description: "留数の定義、極における計算公式" },
                            { id: "7.2", title: "留数定理", description: "定理の主張と証明" },
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
                id: "3-3",
                title: "測度論",
                chapters: [
                    {
                        id: "1", title: "測度論の基礎", description: "集合族と測度の定義",
                        sections: [
                            { id: "1.1", title: "集合族とσ-加法族", description: "集合代数とσ-加法族の定義・生成、ボレル集合族" },
                            { id: "1.2", title: "測度の定義と基本的性質", description: "測度の有限加法性・可算加法性と連続性" },
                            { id: "1.3", title: "外測度と可測性", description: "外測度の定義とカラテオドリの可測条件" },
                            { id: "1.4", title: "ルベーグ測度の構成", description: "区間の体積からの拡張とルベーグ測度の完備性" },
                            { id: "1.5", title: "ボレル集合族とルベーグ可測集合", description: "二つの集合族の違いと包含関係" },
                            { id: "1.6", title: "測度空間の完備化", description: "零集合から完備測度空間への拡張" }
                        ]
                    },
                    {
                        id: "2", title: "可測関数", description: "可測性の定義と性質",
                        sections: [
                            { id: "2.1", title: "可測関数の定義と例", description: "可測空間上の関数とその具体例" },
                            { id: "2.2", title: "可測関数の性質と演算", description: "代数演算や極限操作による可測性の保存" },
                            { id: "2.3", title: "単関数による近似", description: "非負値可測関数を単関数で近似する定理" },
                            { id: "2.4", title: "概収束と測度収束", description: "ほとんど至る所の収束と測度収束、リース・ワイルの定理" },
                            { id: "2.5", title: "エゴロフの定理", description: "概収束と一様収束の関係性を結ぶ定理" },
                            { id: "2.6", title: "ルジンの定理", description: "可測関数を連続関数で近似する定理" }
                        ]
                    },
                    {
                        id: "3", title: "ルベーグ積分", description: "積分の定義と収束定理",
                        sections: [
                            { id: "3.1", title: "単関数の積分", description: "標準形による積分定義と線形性の確認" },
                            { id: "3.2", title: "非負値可測関数の積分", description: "単関数による近似の上限としての積分定義" },
                            { id: "3.3", title: "単調収束定理（MCT）", description: "レヴィの定理と項別積分の正当性" },
                            { id: "3.4", title: "ファトゥの補題", description: "関数列の下極限の積分と積分の下極限の不等式" },
                            { id: "3.5", title: "ルベーグ可積分", description: "一般の可測関数のルベーグ積分とL^1空間の構成" },
                            { id: "3.6", title: "ルベーグの優収束定理（DCT）", description: "被積分関数の極限と積分の順序交換の十分条件" }
                        ]
                    },
                    {
                        id: "4", title: "L^p空間", description: "関数空間としての性質",
                        sections: [
                            { id: "4.1", title: "L^p空間の定義とノルム", description: "同値類としての関数定義とpノルムの導入" },
                            { id: "4.2", title: "本質的上限とL^∞空間", description: "本質的上界の概念と無限大ノルムの定義" },
                            { id: "4.3", title: "主要な不等式", description: "ヘルダーの不等式やミンコフスキーの不等式の証明" },
                            { id: "4.4", title: "L^p空間の完備性", description: "リース・フィッシャーの定理とバナッハ空間としての性質" },
                            { id: "4.5", title: "稠密性", description: "連続関数などのL^p空間における稠密性" },
                            { id: "4.6", title: "ヒルベルト空間としてのL^2", description: "内積構造を持つ自乗可積分関数の特異性と重要性" }
                        ]
                    },
                    {
                        id: "5", title: "積分の多重性とフビニの定理", description: "直積測度と反復積分",
                        sections: [
                            { id: "5.1", title: "直積σ-加法族", description: "直積空間におけるσ-加法族の生成と構造" },
                            { id: "5.2", title: "直積測度", description: "直積空間上の測度の一意空間の存在定理" },
                            { id: "5.3", title: "トネリの定理", description: "非負関数の反復積分順序交換の正当性" },
                            { id: "5.4", title: "フビニの定理", description: "可積分関数の反復積分と多重積分の関係" },
                            { id: "5.5", title: "n次元ルベーグ測度", description: "次元拡張と極座標などの変数変換" }
                        ]
                    },
                    {
                        id: "6", title: "微分と積分", description: "ルベーグ積分と微分",
                        sections: [
                            { id: "6.1", title: "有界変動関数", description: "関数の全変動の概念と有界変動関数の分解定理" },
                            { id: "6.2", title: "絶対連続関数", description: "微積分学の基本定理の前提となる絶対連続性の定義" },
                            { id: "6.3", title: "ルベーグの微分定理", description: "ルベーグ点の存在と積分の微分が元の関数と一致すること" },
                            { id: "6.4", title: "微積分学の基本定理（ルベーグ版）", description: "絶対連続関数の不定積分からの復元定理" },
                            { id: "6.5", title: "カントール関数", description: "特異関数である「悪魔の階段」の性質と反例としての役割" }
                        ]
                    },
                    {
                        id: "7", title: "測度の分解と表現定理", description: "ラドン・ニコディム、リースの表現定理",
                        sections: [
                            { id: "7.1", title: "符号付き測度", description: "正と負の測度への分解とハーン分解定理" },
                            { id: "7.2", title: "ジョルダン分解", description: "符号付き測度の全変動と絶対連続な部分" },
                            { id: "7.3", title: "ラドン・ニコディムの定理", description: "測度に関する密度関数とラドン・ニコディム微分の存在" },
                            { id: "7.4", title: "ルベーグ分解定理", description: "測度を絶対連続部分と特異部分に分解する定理" },
                            { id: "7.5", title: "リースの表現定理（L^p）", description: "L^p空間の双対空間とそのL^q空間としての構造" }
                        ]
                    }
                ],
                prerequisites: ["2-3", "2-5"]
            },
            {
                id: "3-4",
                title: "フーリエ解析",
                chapters: [
                    {
                        id: "1", title: "フーリエ級数の基礎", description: "周期関数の三角級数展開と収束理論",
                        sections: [
                            { id: "1.1", title: "フーリエ係数と複素フーリエ級数", description: "定義、実形式と複素形式の対応、計算例" },
                            { id: "1.2", title: "フーリエ級数の各点収束（ディリクレの定理）", description: "区分的 C^1 級関数での各点収束、ディリクレ核による解析" },
                            { id: "1.3", title: "パーセバルの等式と L^2 収束", description: "パーセバルの等式の証明、フーリエ級数の L^2 収束、完全正規直交系の概念" },
                            { id: "1.4", title: "ギブス現象とフェエール総和法", description: "不連続点近傍のオーバーシュート、チェザロ和による一様収束の回復" }
                        ]
                    },
                    {
                        id: "2", title: "フーリエ級数の発展", description: "一般周期・偶奇展開・微積分との関係・多次元への拡張",
                        sections: [
                            { id: "2.1", title: "一般周期 2L のフーリエ級数", description: "周期関数の変換による帰着、有界区間上の展開への応用" },
                            { id: "2.2", title: "フーリエ正弦展開とフーリエ余弦展開", description: "奇関数拡張と偶関数拡張、物理的境界条件との対応" },
                            { id: "2.3", title: "フーリエ級数の微分と積分", description: "項別微分の許容条件、高次導関数とフーリエ係数の減衰速度" },
                            { id: "2.4", title: "多次元フーリエ級数", description: "多次元関数への拡張、トーラス上での展開" }
                        ]
                    },
                    {
                        id: "3", title: "フーリエ変換の基礎", description: "非周期関数への拡張と L^1 理論",
                        sections: [
                            { id: "3.1", title: "フーリエ変換の定義と基本性質", description: "L^1 関数における定義、線形性・推移・スケール変換・微分との交換" },
                            { id: "3.2", title: "逆フーリエ変換と反転公式", description: "反転公式の成立条件と主値積分による拡張" },
                            { id: "3.3", title: "畳み込み定理", description: "畳み込みの定義と L^1 での基本性質、線形フィルタへの応用" },
                            { id: "3.4", title: "プランシュレルの定理", description: "L^2 等長性の成立、ユニタリ変換としての解釈" },
                            { id: "3.5", title: "代表的な関数のフーリエ変換", description: "ガウス関数、矩形波、ポアソン核の変換" }
                        ]
                    },
                    {
                        id: "4", title: "フーリエ変換の発展", description: "シュワルツ空間・超関数・多次元・不確定性原理",
                        sections: [
                            { id: "4.1", title: "シュワルツ空間と急減少関数", description: "急減少関数の定義と同型写像性質" },
                            { id: "4.2", title: "テンパード超関数とデルタ関数", description: "テンパード超関数、ディラックのデルタ関数と超関数の微分" },
                            { id: "4.3", title: "多次元フーリエ変換", description: "多次元フーリエ変換とハンケル変換への繋がり" },
                            { id: "4.4", title: "不確定性原理", description: "ハイゼンベルクの不確定性原理の証明、時間と周波数の局在関係" }
                        ]
                    },
                    {
                        id: "5", title: "離散フーリエ変換と高速フーリエ変換", description: "有限列のフーリエ解析とアルゴリズム",
                        sections: [
                            { id: "5.1", title: "離散フーリエ変換（DFT）の定義", description: "DFTの定義と逆DFTの公式" },
                            { id: "5.2", title: "DFTの性質", description: "循環畳み込み定理、パーセバルの等式" },
                            { id: "5.3", title: "高速フーリエ変換（FFT）のアルゴリズム", description: "Cooley-Tukey アルゴリズムによる計算量の削減" },
                            { id: "5.4", title: "FFTの応用", description: "多項式の高速乗算、デジタル信号処理" }
                        ]
                    },
                    {
                        id: "6", title: "ラプラス変換", description: "定義・逆変換・ODE・制御理論への応用",
                        sections: [
                            { id: "6.1", title: "ラプラス変換の定義と収束", description: "定義と収束半平面、基本関数の変換表" },
                            { id: "6.2", title: "ラプラス変換の性質", description: "微分・積分法則、推移法則、畳み込み定理" },
                            { id: "6.3", title: "逆ラプラス変換", description: "部分分数分解による逆変換の計算手順、Heaviside展開" },
                            { id: "6.4", title: "ODE・連立 ODE への応用", description: "初期値問題におけるラプラス変換を用いた代数的解法" },
                            { id: "6.5", title: "制御システムへの応用", description: "伝達関数、フィードバック制御、極と安定性" }
                        ]
                    },
                    {
                        id: "7", title: "Z 変換", description: "離散時間システムの解析ツール",
                        sections: [
                            { id: "7.1", title: "Z 変換の定義と収束域", description: "定義と収束域、因果的・非因果的信号の違い" },
                            { id: "7.2", title: "Z 変換の性質", description: "線形性・時間シフト・畳み込み定理、ラプラス変換との類比" },
                            { id: "7.3", title: "逆 Z 変換", description: "部分分数分解法、べき級数法、留数定理による方法" },
                            { id: "7.4", title: "差分方程式と離散システム", description: "差分方程式の解法、離散時間システムの伝達関数と安定性" }
                        ]
                    },
                    {
                        id: "8", title: "偏微分方程式への応用", description: "フーリエ・ラプラス変換を使った PDE の解法",
                        sections: [
                            { id: "8.1", title: "熱方程式への適用", description: "空間フーリエ変換を用いた基本解（ガウス熱核）の導出と一般解" },
                            { id: "8.2", title: "波動方程式への適用", description: "ダランベール解の再導出、キルヒホッフ公式の紹介" },
                            { id: "8.3", title: "ラプラス方程式とポアソン核", description: "上半平面での境界値問題とポアソン核の導出" },
                            { id: "8.4", title: "ラプラス変換による初期値問題", description: "時間方向へのラプラス変換と混合境界値問題" }
                        ]
                    }
                ],
                prerequisites: ["2-6", "3-2", "3-3"]
            },
            {
                id: "3-5",
                title: "微分方程式II",
                chapters: [
                    {
                        id: "1", title: "べき級数解法とフロベニウス法", description: "ODE の特殊解法と特殊関数への導入",
                        sections: [
                            { id: "1.1", title: "通常点まわりのべき級数解", description: "級数を仮定し係数を逐次決定する手順" },
                            { id: "1.2", title: "確定特異点と指標方程式", description: "フックス型方程式の正則性と指標方程式の導出" },
                            { id: "1.3", title: "フロベニウス法の解法手順", description: "指標の差による3つのケースの分類" },
                            { id: "1.4", title: "ベッセル方程式とベッセル関数", description: "ベッセル関数の性質と漸化式、直交性" },
                            { id: "1.5", title: "ルジャンドル方程式とルジャンドル多項式", description: "ルジャンドル多項式とロドリゲスの公式、球座標系での応用" }
                        ]
                    },
                    {
                        id: "2", title: "行列指数関数と連立ODE", description: "行列を指数の肩に乗せる理論と連立1階ODEの解法",
                        sections: [
                            { id: "2.1", title: "行列指数関数 e^{At} の定義と基本性質", description: "べき級数による定義と性質の証明" },
                            { id: "2.2", title: "ジョルダン標準形による e^{At} の計算", description: "ジョルダン細胞を用いた行列指数の計算" },
                            { id: "2.3", title: "基本行列と一般解", description: "基本行列の定義と初期値問題の解法" },
                            { id: "2.4", title: "非同次連立ODEの解法", description: "定数変化法による一般解の公式と具体例" }
                        ]
                    },
                    {
                        id: "3", title: "安定性理論", description: "リャプノフの方法とポアンカレ・ベンディクソンの定理",
                        sections: [
                            { id: "3.1", title: "自律系の平衡点と相平面の分類", description: "2次元線形系の相平面における分類と判定" },
                            { id: "3.2", title: "リャプノフの安定性の定義", description: "安定性・漸近安定性・不安定性の厳密な定義" },
                            { id: "3.3", title: "リャプノフ関数法", description: "正定値性に基づく安定性判定定理" },
                            { id: "3.4", title: "ポアンカレ・ベンディクソンの定理", description: "極限閉軌道の存在と大域的な挙動" },
                            { id: "3.5", title: "大域的安定性と応用", description: "ラサールの不変原理や感染症モデル等への応用" },
                            { id: "3.6", title: "分岐理論・ポアンカレ写像・カオス入門", description: "非線形系における複雑な挙動の解析手法" }
                        ]
                    },
                    {
                        id: "4", title: "偏微分方程式入門", description: "PDEの分類と1階PDEの解法",
                        sections: [
                            { id: "4.1", title: "偏微分方程式の基本概念", description: "線形性・強解と弱解・初期条件と境界条件の種類" },
                            { id: "4.2", title: "1階線形PDEと特性曲線法", description: "特性曲線を用いた一般解の構成と境界条件の処理" },
                            { id: "4.3", title: "1階準線形PDEと衝撃波", description: "特性曲線の交差と衝撃波の形成条件" },
                            { id: "4.4", title: "2階線形PDEの分類", description: "判別式による楕円型・放物型・双曲型の分類と標準形変換" }
                        ]
                    },
                    {
                        id: "5", title: "分離変数法とシュトゥルム・リウヴィル問題", description: "PDEを常微分方程式に帰着させる基本技法",
                        sections: [
                            { id: "5.1", title: "分離変数法の手順と適用条件", description: "各変数の ODE 導出と境界条件の処理" },
                            { id: "5.2", title: "シュトゥルム・リウヴィル問題の設定", description: "正則・特異な問題の設定と境界条件" },
                            { id: "5.3", title: "固有値と固有関数の性質", description: "実数性や関数の直交性の性質と証明" },
                            { id: "5.4", title: "固有関数展開と完全性", description: "解の固有関数による展開と完全性の意味" }
                        ]
                    },
                    {
                        id: "6", title: "波動方程式", description: "双曲型方程式の理論と解法",
                        sections: [
                            { id: "6.1", title: "1次元波動方程式の導出", description: "弦の振動モデルからの導出と波速の意味" },
                            { id: "6.2", title: "ダランベールの解（初期値問題）", description: "一般解の導出と初期条件からの係数決定" },
                            { id: "6.3", title: "分離変数による境界値問題", description: "定常波の構成とフーリエ展開による初期条件処理" },
                            { id: "6.4", title: "エネルギー保存則と一意性", description: "エネルギーの保存性と解の一意性の証明" },
                            { id: "6.5", title: "高次元への拡張", description: "ホイヘンスの原理や3次元での解の構成の概要" }
                        ]
                    },
                    {
                        id: "7", title: "熱方程式", description: "放物型方程式の理論と解法",
                        sections: [
                            { id: "7.1", title: "熱方程式の導出と基本的性質", description: "熱伝導則からの導出と不可逆性" },
                            { id: "7.2", title: "基本解（熱核）", description: "ガウス積分による基本解の導出と性質" },
                            { id: "7.3", title: "初期値問題とたたみ込みによる解", description: "畳み込みによる一般解の導出" },
                            { id: "7.4", title: "境界値問題と分離変数", description: "ディリクレ・ノイマン境界での解の構成" },
                            { id: "7.5", title: "最大値原理と一意性", description: "最大値原理の証明と解の一意性" }
                        ]
                    },
                    {
                        id: "8", title: "ラプラス方程式とポアソン方程式", description: "楕円型方程式の理論と調案関数",
                        sections: [
                            { id: "8.1", title: "調和関数の定義と基本的性質", description: "定義と解析的連続性の性質" },
                            { id: "8.2", title: "平均値定理と最大値原理", description: "平均値定理と最大値の境界到達性" },
                            { id: "8.3", title: "ディリクレ問題とノイマン問題", description: "境界条件の違いと解の一意性・不定性" },
                            { id: "8.4", title: "ポアソン方程式と基本解", description: "ｎ次元における基本解の導出とポアソン積分公式" },
                            { id: "8.5", title: "グリーン関数", description: "対称性を持つ領域でのグリーン関数の構成と応用" }
                        ]
                    },
                    {
                        id: "9", title: "解の正則性と一般解論", description: "PDEの解の滑らかさと一般的な存在理論の概論",
                        sections: [
                            { id: "9.1", title: "弱解の概念と動機", description: "古典解が存在しない例と弱解の定式化" },
                            { id: "9.2", title: "楕円型方程式の正則性", description: "内部での正則性と解析性の概論" },
                            { id: "9.3", title: "コーシー・コワレフスカヤの定理", description: "解析的局所解の存在と一意性" },
                            { id: "9.4", title: "適切問題の概念", description: "解の存在・一意性・連続依存性の条件と不適合例" }
                        ]
                    }
                ],
                prerequisites: ["3-4"]
            },
            {
                id: "3-6",
                title: "変分法",
                chapters: [
                    {
                        id: "1", title: "汎関数と変分問題", description: "汎関数の基本的な概念と変分問題の定式化",
                        sections: [
                            { id: "1.1", title: "汎関数の定義と例", description: "弧長、面積などの関数空間上の写像と変分問題の設定" },
                            { id: "1.2", title: "許容関数のクラスと境界条件", description: "固定端・自由端の条件設定" },
                            { id: "1.3", title: "変分と第一変分", description: "汎関数の微分概念と極値となる必要条件" }
                        ]
                    },
                    {
                        id: "2", title: "オイラー＝ラグランジュ方程式", description: "極値を与える関数が満たす微分方程式の導出",
                        sections: [
                            { id: "2.1", title: "方程式の導出", description: "部分積分と基本補題を用いたオイラー＝ラグランジュ方程式の導出" },
                            { id: "2.2", title: "具体例", description: "最速降下線、測地線の具体的な計算手順" },
                            { id: "2.3", title: "高階導関数を含む場合", description: "オイラー＝ポアソン方程式の導出と応用" }
                        ]
                    },
                    {
                        id: "3", title: "境界条件とトランザーバリティ", description: "固定されていない境界での制約条件",
                        sections: [
                            { id: "3.1", title: "固定端・自由端の自然境界条件", description: "境界変分の性質からの境界条件の導出" },
                            { id: "3.2", title: "トランザーバリティ条件", description: "端点が曲線上を自由に動く場合の横断条件" }
                        ]
                    },
                    {
                        id: "4", title: "第二変分と極値条件", description: "第一変分に加え、真に極小となるための十分条件",
                        sections: [
                            { id: "4.1", title: "第二変分の定義と計算", description: "2階変化量としての第二変分と極値判定" },
                            { id: "4.2", title: "ルジャンドル条件", description: "弱極小となるための必要条件の証明" },
                            { id: "4.3", title: "ヤコビ方程式と共役点", description: "ヤコビ方程式の構成と極値条件の関係" }
                        ]
                    },
                    {
                        id: "5", title: "ハミルトン形式", description: "ラグランジュ形式からハミルトン形式への転換",
                        sections: [
                            { id: "5.1", title: "ルジャンドル変換と一般化運動量", description: "運動量とハミルトニアンの構成手法" },
                            { id: "5.2", title: "正準方程式", description: "オイラー＝ラグランジュ方程式との同値性の証明" },
                            { id: "5.3", title: "物理への応用", description: "多変数における力学などでの解析力学との関係" }
                        ]
                    },
                    {
                        id: "6", title: "ノーターの定理", description: "対称性に基づく保存則の証明",
                        sections: [
                            { id: "6.1", title: "対称性と1パラメータ変換群", description: "不変に保つ変換による対称性の定式化" },
                            { id: "6.2", title: "ノーターの定理の証明", description: "連続的対称性に基づく保存量の構成" },
                            { id: "6.3", title: "例：エネルギー・運動量・角運動量保存", description: "物理的な対称性からの各保存則の導出" }
                        ]
                    },
                    {
                        id: "7", title: "等周問題と制約付き変分問題", description: "積分型制約下における汎関数の極値問題",
                        sections: [
                            { id: "7.1", title: "等周問題の設定", description: "積分条件が課される特定の変分問題" },
                            { id: "7.2", title: "変分問題のラグランジュ乗数法", description: "乗数法を用いた制約付き方程式の導出" },
                            { id: "7.3", title: "複数制約の場合", description: "より複雑な点の制約や積分制約を含む一般化" }
                        ]
                    },
                    {
                        id: "8", title: "多重積分汎関数と楕円型方程式への接続", description: "多変数関数の変分と偏微分方程式論の橋渡し",
                        sections: [
                            { id: "8.1", title: "多変数の変分問題", description: "多重積分型汎関数の設定と境界条件" },
                            { id: "8.2", title: "多変数オイラー＝ラグランジュ方程式", description: "ディリクレ積分からのラプラス方程式の導出" },
                            { id: "8.3", title: "弱定式化の動機", description: "ソボレフ空間等での非古典的定式化の視点" }
                        ]
                    }
                ],
                prerequisites: ["3-5"]
            },
            {
                id: "3-7",
                title: "確率論",
                chapters: [
                    {
                        id: "1", title: "確率空間", description: "測度論的確率の基礎",
                        sections: [
                            { id: "1.1", title: "標本空間と事象の代数", description: "標本空間と事象の集合族、集合演算と確率論的解釈" },
                            { id: "1.2", title: "σ-加法族の定義と例", description: "σ-加法族の公理と生成、ボレルσ-加法族" },
                            { id: "1.3", title: "確率測度の定義と基本性質", description: "コルモゴロフの公理と確率測度の基本性質" },
                            { id: "1.4", title: "条件付き確率とベイズの定理", description: "条件付き確率の定義と乗法定理、全確率の公式、ベイズの定理" }
                        ]
                    },
                    {
                        id: "2", title: "確率変数と分布", description: "可測関数としての確率変数と各種分布",
                        sections: [
                            { id: "2.1", title: "確率変数の定義", description: "可測関数としての確率変数の定義と変換" },
                            { id: "2.2", title: "分布関数の定義と性質", description: "累積分布関数の性質と証明" },
                            { id: "2.3", title: "離散型確率変数と確率質量関数", description: "確率質量関数の定義、代表的な離散分布の性質" },
                            { id: "2.4", title: "連続型確率変数と確率密度関数", description: "確率密度関数の定義、代表的な連続分布の性質" },
                            { id: "2.5", title: "多次元確率変数と周辺分布", description: "結合分布と周辺分布の導出、共分散と相関係数" }
                        ]
                    },
                    {
                        id: "3", title: "期待値とモーメント", description: "ルベーグ積分としての期待値の理論",
                        sections: [
                            { id: "3.1", title: "期待値の定義（ルベーグ積分）", description: "ルベーグ積分に基づく期待値の厳密な定義" },
                            { id: "3.2", title: "期待値の基本性質", description: "線形性や単調性の証明、マルコフ・チェビシェフ不等式" },
                            { id: "3.3", title: "分散・標準偏差・共分散", description: "分散や共分散の計算、シュワルツの不等式" },
                            { id: "3.4", title: "モーメントとモーメント母関数", description: "各次モーメントとモーメント母関数の定義と性質" }
                        ]
                    },
                    {
                        id: "4", title: "独立性", description: "独立事象・独立確率変数の理論",
                        sections: [
                            { id: "4.1", title: "事象の独立性", description: "事象の独立性と相互独立性の意味" },
                            { id: "4.2", title: "確率変数の独立性", description: "σ-加法族に基づく確率変数の独立性の定義と同値条件" },
                            { id: "4.3", title: "独立確率変数の演算", description: "期待値や分散の和の性質と証明、畳み込み公式" },
                            { id: "4.4", title: "無相関と独立の違い", description: "独立と無相関の包含関係と反例" }
                        ]
                    },
                    {
                        id: "5", title: "条件付き期待値", description: "σ-加法族による条件付き期待値の一般論",
                        sections: [
                            { id: "5.1", title: "初等的な条件付き期待値", description: "離散と連続の場合の初等的な定義と全期待値の法則" },
                            { id: "5.2", title: "σ-加法族による一般的定義", description: "ラドン・ニコディム微分を用いた一般的定義と存在・一意性" },
                            { id: "5.3", title: "条件付き期待値の性質", description: "線形性・タワー性・取り出し性の証明" },
                            { id: "5.4", title: "条件付き分布", description: "正則条件付き確率分布と条件付き密度関数の概念" }
                        ]
                    },
                    {
                        id: "6", title: "確率変数列の収束", description: "4種の収束概念とその関係",
                        sections: [
                            { id: "6.1", title: "概収束（a.s. 収束）", description: "概収束の定義と判定条件" },
                            { id: "6.2", title: "確率収束", description: "確率収束の定義と概収束との関係" },
                            { id: "6.3", title: "L^p 収束", description: "L^p 収束の定義と確率収束への関係、一様可積分性" },
                            { id: "6.4", title: "分布収束（法則収束）", description: "分布収束の定義と連続点での収束、各収束の包含関係" }
                        ]
                    },
                    {
                        id: "7", title: "特性関数", description: "フーリエ変換と確率分布の関係",
                        sections: [
                            { id: "7.1", title: "特性関数の定義と基本性質", description: "確率分布のフーリエ変換である特性関数の定義と連続性証明" },
                            { id: "7.2", title: "特性関数とモーメントの関係", description: "特性関数の微分とモーメントの関係" },
                            { id: "7.3", title: "特性関数による分布の決定", description: "分布の一意性と和の特性関数の性質" },
                            { id: "7.4", title: "連続性定理（レビーの定理）", description: "分布収束と特性関数の収束の同値性を示す主張" }
                        ]
                    },
                    {
                        id: "8", title: "大数の法則", description: "頻度と確率をつなぐ根本的な定理",
                        sections: [
                            { id: "8.1", title: "ボレル・カンテリの補題", description: "第1・第2補題の証明と意味" },
                            { id: "8.2", title: "弱大数の法則", description: "チェビシェフ不等式を用いた証明とカッツ・クロードの定理紹介" },
                            { id: "8.3", title: "強大数の法則", description: "4次モーメント法等による強大数の法則の証明" },
                            { id: "8.4", title: "応用：モンテカルロ法と数値積分", description: "大数の法則を基礎とした積分の確率的計算と誤差評価" }
                        ]
                    },
                    {
                        id: "9", title: "中心極限定理", description: "正規分布への収束の理論",
                        sections: [
                            { id: "9.1", title: "中心極限定理の主張", description: "中心極限定理の正確な主張と直感的意味" },
                            { id: "9.2", title: "特性関数を用いた証明", description: "テイラー展開とレビーの定理を用いた証明手順" },
                            { id: "9.3", title: "正規近似と応用", description: "二項分布等の正規近似や信頼区間構成への応用" },
                            { id: "9.4", title: "収束の速さとベリー・エセーン定理", description: "収束精度の評価の概要" }
                        ]
                    }
                ],
                prerequisites: ["3-3"]
            },
            {
                id: "3-8",
                title: "群論",
                chapters: [
                    {
                        id: "1", title: "群の定義", description: "代数的構造への第一歩",
                        sections: [
                            { id: "1.1", title: "二項演算と代数系", description: "半群、モノイド、群の公理となる結合律、単位元、逆元" },
                            { id: "1.2", title: "群の具体例", description: "整数加法群、有理数乗法群、一般線形群" },
                            { id: "1.3", title: "アーベル群（可換群）", description: "交換法則を満たす群と非可換群との違い" },
                            { id: "1.4", title: "群の基本的な性質", description: "単位元・逆元の一意性、簡約法則などの性質" }
                        ]
                    },
                    {
                        id: "2", title: "部分群", description: "群の中の群",
                        sections: [
                            { id: "2.1", title: "部分群の定義と判定法", description: "部分集合が群となるための条件" },
                            { id: "2.2", title: "巡回群", description: "1つの元で生成される群と位数" },
                            { id: "2.3", title: "元の位数", description: "特定元が単位元に戻る最小位数と無限位数" },
                            { id: "2.4", title: "部分群の共通部分と生成", description: "共通部分の性質と生成された部分群の概念" }
                        ]
                    },
                    {
                        id: "3", title: "剰余類とラグランジュの定理", description: "群の分割",
                        sections: [
                            { id: "3.1", title: "剰余類（Coset）", description: "左・右剰余類と、同値関係としての理解" },
                            { id: "3.2", title: "ラグランジュの定理", description: "有限群の部分群位数が群位数の約数となる性質" },
                            { id: "3.3", title: "ラグランジュの定理の応用", description: "素数位数の群の特徴やフェルマーの小定理の証明" },
                            { id: "3.4", title: "指数", description: "部分群の指数の意味と性質" }
                        ]
                    },
                    {
                        id: "4", title: "正規部分群と商群", description: "群の準同型への布石",
                        sections: [
                            { id: "4.1", title: "正規部分群", description: "左剰余類と右剰余類が一致する部分群の定義" },
                            { id: "4.2", title: "商群（因子群）", description: "剰余類の集合に入る群構造とその正当性" },
                            { id: "4.3", title: "単純群", description: "自明な正規部分群しか持たない群の概念" },
                            { id: "4.4", title: "可解群", description: "交換子群から成る概念と方程式論との関わり" }
                        ]
                    },
                    {
                        id: "5", title: "準同型写像", description: "群の構造を保つ写像",
                        sections: [
                            { id: "5.1", title: "準同型写像の定義", description: "構造を保存する写像とその像および核" },
                            { id: "5.2", title: "核と正規部分群", description: "核が正規部分群となることの証明" },
                            { id: "5.3", title: "同型写像", description: "全単射な準同型と群同士の構造的同一視" },
                            { id: "5.4", title: "自己同型群", description: "群から自身への同型群と内部自己同型" }
                        ]
                    },
                    {
                        id: "6", title: "準同型定理", description: "群論の基本定理",
                        sections: [
                            { id: "6.1", title: "群の準同型定理（第一同型定理）", description: "第一同型定理の主張と証明" },
                            { id: "6.2", title: "第二同型定理", description: "ダイヤモンド同型に関する定理" },
                            { id: "6.3", title: "第三同型定理", description: "商群の商に関する同型定理" },
                            { id: "6.4", title: "対応定理", description: "原群と商群の部分群の1対1対応" }
                        ]
                    },
                    {
                        id: "7", title: "群の具体例", description: "対称群・二面体群・行列群",
                        sections: [
                            { id: "7.1", title: "対称群 S_n", description: "置換の基本概念と偶奇性、S_3 の乗積表" },
                            { id: "7.2", title: "交代群 A_n", description: "交代群の定義と A_5 の単純性" },
                            { id: "7.3", title: "二面体群 D_n", description: "正多角形の対称性と関係式、D_4 の具体計算" },
                            { id: "7.4", title: "小さな群の例（Q_8・V_4）", description: "四元数群と Klein の四元群、D_4 との比較" },
                            { id: "7.5", title: "行列群", description: "GL_n, SL_n, O_n, SO_n の定義と具体例" }
                        ]
                    },
                    {
                        id: "8", title: "群の作用", description: "幾何的対象への作用",
                        sections: [
                            { id: "8.1", title: "作用の定義", description: "集合に対する群の左・右作用の概念と具体例" },
                            { id: "8.2", title: "軌道（Orbit）", description: "特定の元の作用による軌跡としての軌道分解" },
                            { id: "8.3", title: "固定部分群（Stabilizer）", description: "特定の元を不動にする部分群の定義" },
                            { id: "8.4", title: "軌道・固定群定理", description: "群の位数と等価になる軌道・固定群定理の証明と応用" }
                        ]
                    },
                    {
                        id: "9", title: "バーンサイドの補題", description: "数え上げへの応用",
                        sections: [
                            { id: "9.1", title: "不動点集合", description: "元を固定化する集合の概念" },
                            { id: "9.2", title: "バーンサイドの補題", description: "軌道の個数と不動点集合を用いた算定定理" },
                            { id: "9.3", title: "数え上げ問題への応用", description: "円順列やネックレス問題等への具体的な応用手法" }
                        ]
                    },
                    {
                        id: "10", title: "シローの定理", description: "有限群の構造解析",
                        sections: [
                            { id: "10.1", title: "コーシーの定理", description: "素数位数における群元の存在定理" },
                            { id: "10.2", title: "シロー部分群", description: "シローp-部分群の定義と概念" },
                            { id: "10.3", title: "シローの定理（第一・第二・第三）", description: "存在や共役性、個数に関する定理構成" },
                            { id: "10.4", title: "有限群の分類への応用", description: "複数素数の積位数の群における構造決定" }
                        ]
                    }
                ],
                prerequisites: ["2-4", "2-7"]
            },
            {
                id: "3-9",
                title: "環論",
                chapters: [
                    {
                        id: "1", title: "環の基本概念", description: "環、部分環、整域",
                        sections: [
                            { id: "1.1", title: "環の定義", description: "加法群かつ乗法半群としての環構造と分配法則" },
                            { id: "1.2", title: "様々な環の例", description: "整数環や多項式環、行列環の紹介" },
                            { id: "1.3", title: "零因子と整域", description: "零因子の定義と整域の特徴" },
                            { id: "1.4", title: "可逆元と単数群", description: "可逆な元と単数群の概念、体の定義定式化" }
                        ]
                    },
                    {
                        id: "2", title: "イデアルと剰余環・同型定理", description: "環の構造定理",
                        sections: [
                            { id: "2.1", title: "イデアルの定義", description: "左・右および両側イデアルの定義" },
                            { id: "2.2", title: "生成されたイデアル", description: "主イデアルの概念やイデアルの各種演算" },
                            { id: "2.3", title: "剰余環（Quotient Ring）", description: "イデアルを法とした剰余環の構成と正当性" },
                            { id: "2.4", title: "第一同型定理", description: "環における第一同型定理の証明" },
                            { id: "2.5", title: "第二・第三同型定理", description: "イデアル間における同型定理の拡張" },
                            { id: "2.6", title: "対応定理と中国剰余定理", description: "イデアルの全単射な対応と、互いに素なイデアルに対する直積分解" }
                        ]
                    },
                    {
                        id: "3", title: "素イデアルと極大イデアル", description: "重要なイデアルのクラス",
                        sections: [
                            { id: "3.1", title: "素イデアル", description: "素因数に相当するイデアルと整域との関係" },
                            { id: "3.2", title: "極大イデアル", description: "極大なイデアルと体との関係" },
                            { id: "3.3", title: "ツォルンの補題と極大イデアルの存在", description: "選択公理を用いた極大イデアル存在定理" }
                        ]
                    },
                    {
                        id: "4", title: "多項式環と商体", description: "整域の拡張と分数の構成",
                        sections: [
                            { id: "4.1", title: "多項式環 R[x]", description: "多項式環の構成と整域性の引き継ぎ" },
                            { id: "4.2", title: "多項式環の普遍性", description: "代入準同型に基づく普遍性の整理" },
                            { id: "4.3", title: "商体（Field of Fractions）", description: "整域に基づく分数体の一般構成と普遍性" },
                            { id: "4.4", title: "局所化", description: "積閉集合を用いた環の局所化の概要" }
                        ]
                    },
                    {
                        id: "5", title: "ユークリッド整域（ED）", description: "整数の一般化 I",
                        sections: [
                            { id: "5.1", title: "ユークリッド整域の定義", description: "除法の原理を利用可能な整域の概念" },
                            { id: "5.2", title: "ガウス整数環 Z[i]", description: "ガウス整数環がユークリッド整域であることの解説" },
                            { id: "5.3", title: "ユークリッドの互除法", description: "最大公約数の一般的な計算方法" }
                        ]
                    },
                    {
                        id: "6", title: "単項イデアル整域（PID）", description: "整数の一般化 II",
                        sections: [
                            { id: "6.1", title: "PIDの定義", description: "すべてのイデアルが単一要素で生成される整域" },
                            { id: "6.2", title: "ED ⟹ PID", description: "ユークリッド整域はPIDであることの証明" },
                            { id: "6.3", title: "PIDにおける素イデアル", description: "非零素イデアルが極大イデアルとなる性質" },
                            { id: "6.4", title: "ベズーの等式", description: "最大公約数の線形結合の保証" }
                        ]
                    },
                    {
                        id: "7", title: "一意分解整域（UFD）", description: "素因数分解の一意性",
                        sections: [
                            { id: "7.1", title: "既約元と素元", description: "既約元と素元の定義、PIDでの一致的性質" },
                            { id: "7.2", title: "UFDの定義", description: "分解の存在と（単元を除いた）一意性が保たれる整域" },
                            { id: "7.3", title: "PID ⟹ UFD", description: "PIDが必ず一意分解の性質を持つことの証明" },
                            { id: "7.4", title: "最大公約数の存在", description: "UFD内で定義される最大公約数の概念" },
                            { id: "7.5", title: "整域のクラスの包含関係", description: "体、ED、PID、UFD、整域の包含関係の総括" }
                        ]
                    },
                    {
                        id: "8", title: "多項式環の性質と因数分解", description: "既約性の判定",
                        sections: [
                            { id: "8.1", title: "多変数多項式環 R[x_1,...,x_n]", description: "多変数化への拡張と多項式環の構造" },
                            { id: "8.2", title: "ガウスの補題", description: "原始多項式の積公式や分数上の既約性判定" },
                            { id: "8.3", title: "R が UFD ⟹ R[x] も UFD", description: "多項式環の一意分解性の継承" },
                            { id: "8.4", title: "アイゼンシュタインの判定法", description: "強力な既約性判定条件と応用的な使用例" }
                        ]
                    },
                    {
                        id: "9", title: "ネーター環", description: "イデアルの有限生成性",
                        sections: [
                            { id: "9.1", title: "昇鎖条件（ACC）", description: "イデアルの昇順列が停止する条件の定式化" },
                            { id: "9.2", title: "ネーター環の定義", description: "すべてのイデアルの有限生成性と昇鎖条件との同値性" },
                            { id: "9.3", title: "ヒルベルトの基底定理", description: "ネーター環係数の多項式環もネーター環であることの特性" }
                        ]
                    }
                ],
                prerequisites: ["3-8"]
            },
            {
                id: "3-10",
                title: "体論I",
                chapters: [
                    {
                        id: "1", title: "体の拡大の基本", description: "拡大次数と代数拡大",
                        sections: [
                            { id: "1.1", title: "拡大体と拡大次数", description: "ベクトル空間としての体拡大構造と連鎖律" },
                            { id: "1.2", title: "代数的元と超越的元", description: "代数的数と超越数の定義による拡大差" },
                            { id: "1.3", title: "最小多項式", description: "代数的元の基礎となる最小多項式の性質と体同型" },
                            { id: "1.4", title: "作図可能数", description: "定規とコンパスを用いる作図と拡大次数の関係論" }
                        ]
                    },
                    {
                        id: "2", title: "分離拡大", description: "重根のない多項式と拡大",
                        sections: [
                            { id: "2.1", title: "形式的微分と重根", description: "形式的微分に基づく関数の重根判定" },
                            { id: "2.2", title: "分離多項式と分離拡大", description: "多項式の分離性と分離拡大性の基礎概念" },
                            { id: "2.3", title: "完全体", description: "標数0ないし有限体としての分離的性質の完備性" },
                            { id: "2.4", title: "原始元定理", description: "分離拡大において単一生成元によって記述される定理" }
                        ]
                    },
                    {
                        id: "3", title: "分解体と正規拡大", description: "多項式の根をすべて含む体",
                        sections: [
                            { id: "3.1", title: "分解体の存在と一意性", description: "すべての根を包含する最小の拡大体の構成法" },
                            { id: "3.2", title: "正規拡大の定義と判定", description: "多項式が完全分解できる正規拡大の特性" },
                            { id: "3.3", title: "代数閉包", description: "代数的に完備な体の概念と唯一存在性" }
                        ]
                    },
                    {
                        id: "4", title: "有限体（Galois Field）", description: "美しい構造を持つ有限集合の体",
                        sections: [
                            { id: "4.1", title: "有限体の性質", description: "位数・標数・フロベニウス写像の基本性質" },
                            { id: "4.2", title: "有限体の存在と一意性", description: "分解体としての構成と唯一性" },
                            { id: "4.3", title: "有限体の部分体構造", description: "部分体の存在と拡大次数の関係" }
                        ]
                    },
                    {
                        id: "5", title: "ガロア理論の基本定理", description: "体と群の美しい対応",
                        sections: [
                            { id: "5.1", title: "ガロア拡大の定義", description: "分離かつ正規なる拡大とガロア群" },
                            { id: "5.2", title: "固定体と不変論", description: "固定体の概念とアルティンの定理" },
                            { id: "5.3", title: "ガロアの基本定理", description: "中間体と部分群の反順序1対1対応定理" },
                            { id: "5.4", title: "正規部分群と正規拡大の対応", description: "ガロア群の正規部分群と中間体の正規拡大" },
                            { id: "5.5", title: "具体例", description: "具体的な体拡大におけるガロア対応の確認" }
                        ]
                    },
                    {
                        id: "6", title: "円分体", description: "1のn乗根が生成する体",
                        sections: [
                            { id: "6.1", title: "1の原始n乗根", description: "原始乗根の性質と円分多項式" },
                            { id: "6.2", title: "円分体のガロア群", description: "円分体のガロア群と同型な乗法群" },
                            { id: "6.3", title: "正多角形の作図可能性", description: "ガウスの定理と正17角形の作図例" }
                        ]
                    },
                    {
                        id: "7", title: "方程式の可解性", description: "5次方程式の解の公式は存在するか",
                        sections: [
                            { id: "7.1", title: "可解群", description: "組成列と剰余群が可換となる群構造" },
                            { id: "7.2", title: "方程式のガロア群", description: "多項式の分解体から決まるガロア群" },
                            { id: "7.3", title: "ガロアの可解性定理", description: "方程式の代数的可解性と群の可解性" },
                            { id: "7.4", title: "アーベル-ルフィニの定理", description: "5次以上の一般方程式の非可解性の証明" }
                        ]
                    }
                ],
                prerequisites: ["3-9"]
            },
            {
                id: "3-11",
                title: "多重線形代数学I",
                chapters: [
                    {
                        id: "1", title: "双対空間と双対性", description: "線形形式の空間と、その線形代数IIからの復習",
                        sections: [
                            { id: "1.1", title: "双対基底", description: "双対基底の定義と次元の対応" },
                            { id: "1.2", title: "二重双対空間 V**", description: "有限次元ベクトル空間と二重双対空間の自然な同型" },
                            { id: "1.3", title: "転置写像", description: "線形写像の双対写像と行列の転置との関係" }
                        ]
                    },
                    {
                        id: "2", title: "多重線形写像", description: "複数のベクトルを変数とする線形写像",
                        sections: [
                            { id: "2.1", title: "多重線形写像の定義", description: "双線形写像、n重線形写像の定義と成分表示" },
                            { id: "2.2", title: "テンソル積の普遍性", description: "双線形写像を線形写像に一元化するテンソル積空間の普遍性" },
                            { id: "2.3", title: "テンソル積の構成", description: "自由ベクトル空間の商空間としての構成と基底" },
                            { id: "2.4", title: "内積と縮約（導入）", description: "双対空間とのペアリングやトレースの一般化" }
                        ]
                    },
                    {
                        id: "3", title: "テンソル代数", description: "テンソルの演算体系",
                        sections: [
                            { id: "3.1", title: "(p, q) 型テンソル", description: "反変・共変テンソルのテンソル積と成分変換則" },
                            { id: "3.2", title: "テンソル代数 T(V)", description: "テンソル空間の直和による代数構造" },
                            { id: "3.3", title: "対称テンソルと交代テンソル", description: "対称化作用素と交代化作用素の定義" }
                        ]
                    },
                    {
                        id: "4", title: "外積代数（Exterior Algebra）", description: "交代性の代数",
                        sections: [
                            { id: "4.1", title: "外積（ウェッジ積）", description: "反対称性を持つウェッジ積の定義" },
                            { id: "4.2", title: "外積代数 ∧(V)", description: "グラスマン代数の構成と基底・次元" },
                            { id: "4.3", title: "行列式と外積", description: "n次外積空間と行列式の関係" },
                            { id: "4.4", title: "プルバック（引き戻し）", description: "線形写像から誘導される外積代数上の写像" }
                        ]
                    },
                    {
                        id: "5", title: "向きと体積形式", description: "幾何学的応用",
                        sections: [
                            { id: "5.1", title: "ベクトル空間の向き", description: "変換行列の行列式の符号に基づく向き付け" },
                            { id: "5.2", title: "体積形式", description: "最高次の非退化な交代形式と行列式の関係" },
                            { id: "5.3", title: "内積空間の体積", description: "グラム行列式による体積の計算" }
                        ]
                    },
                    {
                        id: "6", title: "テンソルとしての行列と縮約", description: "線形代数の再解釈とコントラクション",
                        sections: [
                            { id: "6.1", title: "線形写像と(1,1)型テンソルの同一視", description: "Hom(V, W) ≅ V* ⊗ W" },
                            { id: "6.2", title: "トレースの不変性", description: "基底に依存しないトレースの定義" },
                            { id: "6.3", title: "縮約（コントラクション）", description: "テンソルの階数を下げる縮約操作の定義" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "3-9"]
            },
            {
                id: "3-12",
                title: "位相空間論II",
                chapters: [
                    {
                        id: "1", title: "ホモトピー", description: "連続変形とホモトピー型",
                        sections: [
                            { id: "1.1", title: "ホモトピーの定義", description: "写像や空間の連続変形と同値性の概念" },
                            { id: "1.2", title: "可縮空間", description: "一点とホモトピー同値になる空間の性質" },
                            { id: "1.3", title: "レトラクション", description: "空間の一部への変形レトラクトとその性質" }
                        ]
                    },
                    {
                        id: "2", title: "基本群", description: "ループのホモトピー類と群構造",
                        sections: [
                            { id: "2.1", title: "道とループ", description: "道（パス）の演算とループの定義" },
                            { id: "2.2", title: "基本群の定義", description: "ループのホモトピー類がなす群構造" },
                            { id: "2.3", title: "基点の変更", description: "基点による同型性と単連結空間の定義" }
                        ]
                    },
                    {
                        id: "3", title: "円周の基本群と応用", description: "最初の計算例と重要な応用",
                        sections: [
                            { id: "3.1", title: "円周の基本群", description: "被覆空間を用いた円周の基本群の計算" },
                            { id: "3.2", title: "代数学の基本定理", description: "基本群を用いた代数学の基本定理の証明" },
                            { id: "3.3", title: "ブラウワーの不動点定理", description: "レトラクションの非存在から導かれる不動点定理" },
                            { id: "3.4", title: "ボルスク・ウラムの定理", description: "球面からユークリッド空間への連続写像に関する定理" }
                        ]
                    },
                    {
                        id: "4", title: "ファン・カンペンの定理", description: "空間の貼り合わせと群",
                        sections: [
                            { id: "4.1", title: "群の自由積", description: "群の自由積と融合積（アマルガム積）の概念" },
                            { id: "4.2", title: "ファン・カンペンの定理", description: "開被覆から空間の基本群を計算する定理" },
                            { id: "4.3", title: "セルの接着", description: "CW複体の構成と基本群の計算手法" }
                        ]
                    },
                    {
                        id: "5", title: "曲面の基本群", description: "ファン・カンペンの定理の応用",
                        sections: [
                            { id: "5.1", title: "球面と各次元", description: "高次元球面の単連結性" },
                            { id: "5.2", title: "トーラスと射影空間", description: "貼り合わせから求めるトーラス等の基本群" },
                            { id: "5.3", title: "閉曲面の分類", description: "種数付き曲面の基本群と可換化群" },
                            { id: "5.4", title: "結び目群（概要）", description: "結び目の補空間から得られる基本群の概念" }
                        ]
                    },
                    {
                        id: "6", title: "被覆空間", description: "被覆写像の理論",
                        sections: [
                            { id: "6.1", title: "被覆写像の定義", description: "被覆空間と局所同相写像の定義" },
                            { id: "6.2", title: "持ち上げ性質", description: "道やホモトピーの持ち上げの一意性と存在定理" },
                            { id: "6.3", title: "一般の持ち上げ判定条件", description: "写像を被覆空間へ持ち上げるための基本群の条件" }
                        ]
                    },
                    {
                        id: "7", title: "被覆空間の分類", description: "ガロア対応",
                        sections: [
                            { id: "7.1", title: "被覆変換群", description: "被覆変換全体のなす群構造" },
                            { id: "7.2", title: "普遍被覆空間", description: "単連結被覆空間の存在と一意性" },
                            { id: "7.3", title: "被覆空間の基本定理", description: "部分群と被覆空間のガロア対応定理" }
                        ]
                    }
                ],
                prerequisites: ["2-5", "3-8"]
            },
            {
                id: "3-13",
                title: "微分幾何I",
                chapters: [
                    {
                        id: "1", title: "曲線の微分幾何", description: "空間曲線の曲がり方と捻れ方の定量化",
                        sections: [
                            { id: "1.1", title: "正則曲線と弧長パラメータ", description: "正則曲線の定義と弧長による再パラメータ化" },
                            { id: "1.2", title: "曲率と主法線ベクトル", description: "接ベクトルとその変化率である曲率・主法線ベクトルの定義" },
                            { id: "1.3", title: "捩率と従法線ベクトル", description: "外積で定まる従法線ベクトルと捩率の幾何学的意味" },
                            { id: "1.4", title: "フルネ＝セレの公式", description: "フレームの微小変化を曲率・捩率で記述する公式" },
                            { id: "1.5", title: "曲線の基本定理", description: "曲率と捩率による曲線の一意性定理" }
                        ]
                    },
                    {
                        id: "2", title: "曲面の基本概念", description: "パラメータ表示と接平面・法ベクトル",
                        sections: [
                            { id: "2.1", title: "正則曲面の定義", description: "パラメータ表示を用いた曲面の正則性条件" },
                            { id: "2.2", title: "接平面と法ベクトル", description: "偏微分ベクトルが張る接平面と単位法ベクトルの定義" },
                            { id: "2.3", title: "パラメータ変換と構造の不変性", description: "ヤコビ行列を用いた許容パラメータ変換と幾何構造の不変性" }
                        ]
                    },
                    {
                        id: "3", title: "第一基本形式", description: "曲面上の長さや面積を測る計量",
                        sections: [
                            { id: "3.1", title: "第一基本形式の定義", description: "接ベクトルの内積による2次形式（リーマン計量の原型）" },
                            { id: "3.2", title: "弧長と面積の計算", description: "第一基本形式を用いた曲線長と面積の公式" },
                            { id: "3.3", title: "等長写像と内的幾何", description: "第一基本形式を保存する等長写像と内的幾何の概念" }
                        ]
                    },
                    {
                        id: "4", title: "第二基本形式と曲率", description: "曲面の空間内での曲がり具合",
                        sections: [
                            { id: "4.1", title: "第二基本形式の定義", description: "法方向への曲がり具合を測る2次形式の定義" },
                            { id: "4.2", title: "形状作用素と主曲率", description: "形状作用素（ワインガルテン写像）の固有値としての主曲率" },
                            { id: "4.3", title: "ガウス曲率と平均曲率", description: "主曲率から定まるガウス曲率と平均曲率、極小曲面の概念" },
                            { id: "4.4", title: "法曲率とオイラーの公式", description: "主方向と法曲率を結ぶ関係式" }
                        ]
                    },
                    {
                        id: "5", title: "ガウスの驚異の定理", description: "ガウス曲率の内的不変性",
                        sections: [
                            { id: "5.1", title: "クリストッフェル記号", description: "第一基本形式から定まる接続係数の定義" },
                            { id: "5.2", title: "ガウス方程式とコダッチ方程式", description: "内的量と外的量を結びつける構造方程式" },
                            { id: "5.3", title: "驚異の定理の証明", description: "ガウス曲率が第一基本形式のみに依存する内的量であることの証明" }
                        ]
                    },
                    {
                        id: "6", title: "測地線", description: "曲面上で最も真っ直ぐな曲線",
                        sections: [
                            { id: "6.1", title: "測地線の定義と方程式", description: "曲面上で長さを局所最小化する曲線とその微分方程式" },
                            { id: "6.2", title: "測地線の例", description: "球面上の大円や回転面におけるクレローの関係式" },
                            { id: "6.3", title: "測地的完備性の概念", description: "測地線の延長可能性とホップ＝リノウの定理の概説" }
                        ]
                    },
                    {
                        id: "7", title: "ガウス＝ボンネの定理", description: "曲率の積分と位相幾何学の結びつき",
                        sections: [
                            { id: "7.1", title: "測地曲率と角の余剰", description: "曲面上の曲線の測地曲率と測地三角形の内角関係" },
                            { id: "7.2", title: "局所版ガウス＝ボンネの定理", description: "領域における測地曲率とガウス曲率、外角の和の関係" },
                            { id: "7.3", title: "大域版ガウス＝ボンネの定理", description: "閉曲面の全曲率積分がオイラー標数に比例する大域的定理" }
                        ]
                    }
                ],
                prerequisites: ["3-1", "3-11"]
            },
            {
                id: "3-14",
                title: "数理論理学I",
                chapters: [
                    {
                        id: "1", title: "命題論理", description: "命題と論理結合子に基づく形式的推論",
                        sections: [
                            { id: "1.1", title: "命題と論理結合子", description: "命題変数と論理演算の定義および真理表" },
                            { id: "1.2", title: "トートロジーと論理的同値", description: "常に真となる論理式とド・モルガン則等の同値変形" },
                            { id: "1.3", title: "推論規則と証明体系", description: "モーダスポネンス等の推論規則とヒルベルト流公理系の導入" },
                            { id: "1.4", title: "健全性と完全性（命題論理）", description: "証明可能性と恒真性の同値関係の概要" }
                        ]
                    },
                    {
                        id: "2", title: "述語論理の構文", description: "量化子を含む論理式の厳密な構成",
                        sections: [
                            { id: "2.1", title: "言語の設定", description: "定数・関数・述語記号による形式言語と項の定義" },
                            { id: "2.2", title: "論理式と量化子", description: "全称・存在量化子を含む述語論理式の帰納的構成" },
                            { id: "2.3", title: "自由変数と束縛変数", description: "変数スコープの区別と代入の自由性条件" },
                            { id: "2.4", title: "文と理論", description: "自由変数を持たない論理式（文）と公理系の概念" }
                        ]
                    },
                    {
                        id: "3", title: "述語論理の意味論", description: "モデルにおける真偽の判定",
                        sections: [
                            { id: "3.1", title: "構造（モデル）の定義", description: "対象領域と記号解釈からなる構造の定義" },
                            { id: "3.2", title: "充足関係の定義", description: "付値に基づく論理式の充足関係のタルスキによる定義" },
                            { id: "3.3", title: "論理的帰結と妥当式", description: "全モデルでの真偽（意味論的帰結）と妥当性の概念" }
                        ]
                    },
                    {
                        id: "4", title: "自然演繹と公理的証明", description: "形式的な証明図と推論規則",
                        sections: [
                            { id: "4.1", title: "自然演繹体系", description: "仮定の導入・除去に基づく直感的な証明体系" },
                            { id: "4.2", title: "ヒルベルト流公理体系", description: "公理スキーマを用いた形式的証明体系とその同値性" },
                            { id: "4.3", title: "⊢ と ⊨ の区別", description: "構文論的証明と意味論的真偽の差異" }
                        ]
                    },
                    {
                        id: "5", title: "完全性定理", description: "構文と意味論の一致",
                        sections: [
                            { id: "5.1", title: "完全性定理の主張", description: "証明可能性と論理的帰結が一致するというゲーデルの定理" },
                            { id: "5.2", title: "証明の概略（ヘンキン構成）", description: "定数追加と極大無矛盾理論を用いたモデル構成法" },
                            { id: "5.3", title: "コンパクト性定理", description: "有限部分の充足可能性から全体の充足可能性を導く定理" },
                            { id: "5.4", title: "レーベンハイム＝スコーレムの定理", description: "可算模型の存在と非標準モデル（スコーレムのパラドックス）" }
                        ]
                    },
                    {
                        id: "6", title: "不完全性定理", description: "形式的算術における証明不可能性",
                        sections: [
                            { id: "6.1", title: "形式的算術 PA", description: "ペアノ算術の形式体系と表現力の概観" },
                            { id: "6.2", title: "ゲーデル数化", description: "論理式や証明アルゴリズムの自然数への符号化" },
                            { id: "6.3", title: "第一不完全性定理", description: "無矛盾な十分強い体系における決定不能命題の存在定理" },
                            { id: "6.4", title: "第二不完全性定理", description: "体系が自身の無矛盾性を証明できないこととその意義" }
                        ]
                    },
                    {
                        id: "7", title: "ZFC公理系", description: "集合論の公理系の論理的分析",
                        sections: [
                            { id: "7.1", title: "ZF公理系の各公理の役割", description: "ZF公理系の論理的動機とパラドックスの回避" },
                            { id: "7.2", title: "選択公理とその同値命題", description: "選択公理の主張とツォルンの補題や整列定理との同値性" },
                            { id: "7.3", title: "選択公理の応用と独立性", description: "バナッハ＝タルスキー等の帰結およびZFからの独立性" }
                        ]
                    },
                    {
                        id: "8", title: "順序数・基数と連続体仮説", description: "無限の大きさと決定不能性",
                        sections: [
                            { id: "8.1", title: "順序数の定義と算術", description: "フォン・ノイマン順序数とその超限算術" },
                            { id: "8.2", title: "超限帰納法と再帰的定義", description: "整列集合上の帰納法と構成的定義の基本手法" },
                            { id: "8.3", title: "基数と aleph 数", description: "濃度に基づく基数の定義とアレフ数の体系" },
                            { id: "8.4", title: "連続体仮説と決定不能性", description: "連続体仮説のZFCにおける独立性と強制法の概観" }
                        ]
                    }
                ],
                prerequisites: ["2-4"]
            },
            {
                id: "3-15",
                title: "圏論",
                chapters: [
                    {
                        id: "1", title: "圏の定義", description: "数学のさまざまな分野を統一的に捉える枠組み",
                        sections: [
                            { id: "1.1", title: "圏の公理", description: "対象と射からなる圏の定義および結合律・単位律" },
                            { id: "1.2", title: "圏の例", description: "集合・群・位相空間・ベクトル空間など既知の構造の圏論的解釈" },
                            { id: "1.3", title: "同型射・単射・全射の圏論的定義", description: "射を用いた同型・モノ射・エピ射の定義" },
                            { id: "1.4", title: "積圏と反対圏", description: "積圏や反対圏の構成および双対原理" }
                        ]
                    },
                    {
                        id: "2", title: "関手", description: "構造を保つ写像を通じた数学の分野間の橋渡し",
                        sections: [
                            { id: "2.1", title: "関手の定義", description: "対象と射を保存する圏間の写像としての関手の定義" },
                            { id: "2.2", title: "関手の例", description: "忘却関手や自由関手、基本群などの具体例" },
                            { id: "2.3", title: "忠実・充満・本質的全射", description: "射の対応に関する性質と圏同値の特徴づけ" }
                        ]
                    },
                    {
                        id: "3", title: "自然変換", description: "関手間の関係性を規定する概念",
                        sections: [
                            { id: "3.1", title: "自然変換の定義", description: "関手間の変換と自然性の可換図式" },
                            { id: "3.2", title: "自然変換の例", description: "行列式の自然性や二重双対への埋め込み" },
                            { id: "3.3", title: "関手圏と合成", description: "関手を対象、自然変換を射とする関手圏の構成と合成概念" }
                        ]
                    },
                    {
                        id: "4", title: "米田の補題", description: "対象がその上のすべての射により決定される性質",
                        sections: [
                            { id: "4.1", title: "表現可能関手", description: "hom関手として表現可能な関手の概念" },
                            { id: "4.2", title: "米田の補題の主張と証明", description: "自然変換の全体と関手の値の間の自然な全単射の証明" },
                            { id: "4.3", title: "米田埋め込みと応用", description: "圏から関手圏への充満忠実な埋め込みとその応用" }
                        ]
                    },
                    {
                        id: "5", title: "極限と余極限", description: "積や普遍的構成の統一的な定式化",
                        sections: [
                            { id: "5.1", title: "図式と錐", description: "小圏による図式と錐・余錐の定義" },
                            { id: "5.2", title: "極限の定義と例", description: "普遍性を持つ終錐としての極限と積等の例" },
                            { id: "5.3", title: "余極限の定義と例", description: "普遍性を持つ始錐としての余極限と余積等の例" },
                            { id: "5.4", title: "極限の保存", description: "随伴関手による極限および余極限の保存定理" }
                        ]
                    },
                    {
                        id: "6", title: "随伴関手", description: "数学に普遍的に現れる対の概念の定式化",
                        sections: [
                            { id: "6.1", title: "随伴の定義", description: "hom集合間の自然な全単射による随伴の定義" },
                            { id: "6.2", title: "随伴の例", description: "自由と忘却、直積と冪などの随伴現象" },
                            { id: "6.3", title: "随伴の一意性と性質", description: "随伴関手の一意性や合成、極限保存の性質" }
                        ]
                    },
                    {
                        id: "7", title: "モナド", description: "随伴から生じる自己関手と代数構造の記述",
                        sections: [
                            { id: "7.1", title: "モナドの定義", description: "自己関手、乗法、単位からなる構造とモナドの公理" },
                            { id: "7.2", title: "随伴から生まれるモナド", description: "随伴関手対からモナドが構成される仕組み" },
                            { id: "7.3", title: "クライスリ圏と Eilenberg-Moore 圏", description: "モナドを用いた2つの特徴的な圏の構成" }
                        ]
                    },
                    {
                        id: "8", title: "アーベル圏と完全系列", description: "加法的な構造を持つ圏の公理化",
                        sections: [
                            { id: "8.1", title: "加法圏とアーベル圏の定義", description: "加法圏の定義とアーベル圏の公理" },
                            { id: "8.2", title: "アーベル圏の例", description: "アーベル群や加群の圏などの実例" },
                            { id: "8.3", title: "完全系列とスネークの補題", description: "完全系列の概念とホモロジー代数の重要補題" },
                            { id: "8.4", title: "ホモロジー代数への接続", description: "鎖複体やコホモロジーの定義と分野間の橋渡し" }
                        ]
                    }
                ],
                prerequisites: ["3-9", "3-12"]
            }
        ]
    },
    {
        id: "stage-4",
        title: "Stage-4：より高度な数学",
        topics: [
            {
                id: "4-1",
                title: "関数解析",
                chapters: [
                    {
                        id: "1", title: "ノルム空間", description: "ノルムの公理、距離構造、基本的な例",
                        sections: [
                            { id: "1.1", title: "ノルムの定義と例", description: "ノルムの3公理、R^n・C[a,b]・l^p・L^p の具体例" },
                            { id: "1.2", title: "ノルムから誘導される距離", description: "距離空間としての構造、三角不等式" },
                            { id: "1.3", title: "収束・コーシー列・開集合", description: "ノルム空間における位相的概念の整理" },
                            { id: "1.4", title: "ノルムの同値性", description: "有限次元でのノルムの同値性定理とその意味" }
                        ]
                    },
                    {
                        id: "2", title: "バナッハ空間", description: "完備性、主要な例、シャウダー基底、縮小写像定理",
                        sections: [
                            { id: "2.1", title: "完備性とバナッハ空間の定義", description: "コーシー列による完備性の定義と直感的意味" },
                            { id: "2.2", title: "バナッハ空間の例", description: "C[a,b]・l^p・L^p の完備性の確認" },
                            { id: "2.3", title: "完備化", description: "任意のノルム空間の完備化の存在と一意性" },
                            { id: "2.4", title: "シャウダー基底", description: "シャウダー基底の定義、l^p の標準基底、基底を持たないバナッハ空間の存在" },
                            { id: "2.5", title: "バナッハの不動点定理", description: "縮小写像定理の証明と微分方程式への応用" }
                        ]
                    },
                    {
                        id: "3", title: "有界線形作用素", description: "有界性と連続性の同値、作用素ノルム、B(X,Y) の構造",
                        sections: [
                            { id: "3.1", title: "線形作用素の有界性と連続性", description: "有界性と連続性の同値定理" },
                            { id: "3.2", title: "作用素ノルムの定義と性質", description: "sup による定義、B(X,Y) のバナッハ空間としての構造" },
                            { id: "3.3", title: "有界線形作用素の例", description: "行列作用素、積分作用素、微分作用素の有界性" },
                            { id: "3.4", title: "作用素の収束", description: "一様収束・強収束・弱収束の定義と関係性" }
                        ]
                    },
                    {
                        id: "4", title: "関数解析の基本定理", description: "ハーン-バナッハの定理・一様有界性原理・開写像定理・閉グラフ定理",
                        sections: [
                            { id: "4.1", title: "ハーン-バナッハの定理（拡張定理）", description: "劣線形汎関数による線形汎関数の拡張" },
                            { id: "4.2", title: "ハーン-バナッハの定理の系（分離定理）", description: "点と閉部分空間の分離、双対空間の豊富さ" },
                            { id: "4.3", title: "一様有界性定理（バナッハ-スタインハウスの定理）", description: "ベールのカテゴリー定理に基づく証明" },
                            { id: "4.4", title: "開写像定理", description: "全射な有界線形作用素の開写像性" },
                            { id: "4.5", title: "閉グラフ定理と逆作用素定理", description: "グラフの閉性と有界性の同値関係、全単射の逆作用素" }
                        ]
                    },
                    {
                        id: "5", title: "双対空間と弱位相", description: "連続線形汎関数、双対ノルム、弱収束、反射空間",
                        sections: [
                            { id: "5.1", title: "双対空間 X* と双対ノルム", description: "連続線形汎関数全体の空間と双対ノルム" },
                            { id: "5.2", title: "双対空間の具体例", description: "l^p の双対 l^q* と C[a,b]* のリース-マルコフ表現" },
                            { id: "5.3", title: "弱収束と強収束の比較", description: "弱収束の定義と強収束との違い" },
                            { id: "5.4", title: "弱位相と反射的空間", description: "弱位相、アラオグルの定理、L^p の反射性" }
                        ]
                    },
                    {
                        id: "6", title: "内積空間とヒルベルト空間", description: "内積の公理、基本不等式、完備性",
                        sections: [
                            { id: "6.1", title: "内積空間の定義と例", description: "内積の公理と l^2・L^2 空間などの例" },
                            { id: "6.2", title: "コーシー-シュワルツの不等式と平行四辺形法則", description: "証明とノルムが内積に由来する条件" },
                            { id: "6.3", title: "ヒルベルト空間の定義と例", description: "完備内積空間としての l^2・L^2 の完備性" },
                            { id: "6.4", title: "直交性と直交補空間", description: "直交の定義と直交補空間の閉性" }
                        ]
                    },
                    {
                        id: "7", title: "ヒルベルト空間の幾何学", description: "射影定理、正規直交系、リースの表現定理",
                        sections: [
                            { id: "7.1", title: "射影定理と最近傍点", description: "凸閉部分集合への射影の存在と一意性" },
                            { id: "7.2", title: "直交射影と直和分解", description: "閉部分空間による直和分解 H = M + M^perp" },
                            { id: "7.3", title: "正規直交系とベッセルの不等式", description: "正規直交系の定義とベッセルの不等式" },
                            { id: "7.4", title: "完全正規直交系とパーセバルの等式", description: "完全性、パーセバルの等式と L^2 フーリエ展開" },
                            { id: "7.5", title: "リースの表現定理", description: "H* と H の同型とディラック記法との対応" }
                        ]
                    },
                    {
                        id: "8", title: "ヒルベルト空間上の作用素", description: "随伴作用素、自己共役・ユニタリ・正規・射影作用素",
                        sections: [
                            { id: "8.1", title: "随伴作用素の定義と存在", description: "リースの表現定理による存在証明" },
                            { id: "8.2", title: "自己共役・歪自己共役・ユニタリ作用素", description: "定義とスペクトルに関する基本性質" },
                            { id: "8.3", title: "正規作用素", description: "A*A = AA* とスペクトル定理の準備" },
                            { id: "8.4", title: "直交射影作用素", description: "P^2 = P = P* による特徴づけと部分空間との対応" }
                        ]
                    },
                    {
                        id: "9", title: "コンパクト作用素", description: "定義と例、基本性質、リース-フレドホルム理論",
                        sections: [
                            { id: "9.1", title: "コンパクト作用素の定義と例", description: "有界集合の相対コンパクトな像、有限ランク・積分作用素" },
                            { id: "9.2", title: "コンパクト作用素の基本性質", description: "合成・随伴のコンパクト性と有限ランクの極限" },
                            { id: "9.3", title: "コンパクト自己共役作用素のスペクトル", description: "固有値の性質と正規直交基底の構成" },
                            { id: "9.4", title: "リース-フレドホルム理論", description: "（I - K）u = f の可解条件と交代定理" },
                            { id: "9.5", title: "積分方程式と境界値問題への応用", description: "グリーン作用素のコンパクト性と定式化" }
                        ]
                    },
                    {
                        id: "10", title: "スペクトル理論", description: "スペクトルとレゾルベント、有界自己共役・正規作用素のスペクトル定理、非有界作用素の基礎",
                        sections: [
                            { id: "10.1", title: "スペクトルとレゾルベント", description: "レゾルベント集合とスペクトルの分類" },
                            { id: "10.2", title: "スペクトルの基本性質", description: "コンパクト性、実数性とスペクトル半径" },
                            { id: "10.3", title: "スペクトル測度と連続関数計算", description: "スペクトル測度と f(A) の性質" },
                            { id: "10.4", title: "有界自己共役作用素のスペクトル定理", description: "スペクトル分解定理の主張と応用" },
                            { id: "10.5", title: "有界正規作用素のスペクトル定理", description: "実部・虚部の同時分解と正規作用素のスペクトル分解" },
                            { id: "10.6", title: "非有界作用素への展望", description: "閉作用素、本質的自己共役性、フリードリヒス拡大と量子力学への接続" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "3-3", "3-12"]
            },
            {
                id: "4-2",
                title: "複素解析II",
                chapters: [
                    {
                        id: "1", title: "解析接続", description: "一致の定理、解析接続の定義、直接接続と間接接続",
                        sections: [
                            { id: "1.1", title: "一致の定理", description: "零点の孤立性と一致の定理" },
                            { id: "1.2", title: "解析接続の定義", description: "関数要素・直接接続・間接接続" },
                            { id: "1.3", title: "解析接続の一意性", description: "同じ曲線に沿った接続の一意性" },
                            { id: "1.4", title: "多価関数と分枝", description: "log z・z^α・√z の多価性、分枝点と分枝切断" }
                        ]
                    },
                    {
                        id: "2", title: "モノドロミーとリーマン面の準備", description: "モノドロミー定理、普遍被覆、多価関数の一価化",
                        sections: [
                            { id: "2.1", title: "モノドロミー定理", description: "単連結領域における経路非依存性" },
                            { id: "2.2", title: "基本群と被覆空間の復習", description: "π_1 と普遍被覆概念の確認" },
                            { id: "2.3", title: "多価関数の一価化の方針", description: "リーマン面を通じて多価性を解消するアプローチ" }
                        ]
                    },
                    {
                        id: "3", title: "リーマン面", description: "構成・基本例・位相的分類",
                        sections: [
                            { id: "3.1", title: "リーマン面の定義", description: "複素1次元多様体とチャートの適合条件" },
                            { id: "3.2", title: "基本的なリーマン面の構成", description: "log z・√z のリーマン面の貼り合わせ構造" },
                            { id: "3.3", title: "リーマン球面とコンパクト化", description: "C ∪ {∞} の構造とコンパクトリーマン面" },
                            { id: "3.4", title: "リーマン面の位相的分類", description: "種数 g による分類とオイラー標数" },
                            { id: "3.5", title: "リーマン面上の正則写像と有理型関数", description: "分枝点・分枝次数とリーマン-ハーヴィッツの公式" }
                        ]
                    },
                    {
                        id: "4", title: "等角写像とリーマンの写像定理", description: "等角写像の性質、メビウス変換、リーマンの写像定理",
                        sections: [
                            { id: "4.1", title: "等角写像の基本性質", description: "正則写像の角度保存性と幾何的意味" },
                            { id: "4.2", title: "メビウス変換", description: "変換群の構造と円・直線の保存性、三点一意性" },
                            { id: "4.3", title: "正規族とモンテルの定理", description: "一様有界な正則関数族の正規性とコンパクト収束" },
                            { id: "4.4", title: "リーマンの写像定理", description: "単連結領域から単位円板への双正則写像の存在・一意性" },
                            { id: "4.5", title: "等角写像の応用例", description: "上半平面や特定領域における具体的な写像の構成" }
                        ]
                    },
                    {
                        id: "5", title: "双曲幾何とシュワルツ-ピック補題", description: "双曲計量、等長写像、一様化定理",
                        sections: [
                            { id: "5.1", title: "シュワルツの補題", description: "単位円板上の正則写像に関するシュワルツの補題" },
                            { id: "5.2", title: "双曲計量の定義", description: "ポアンカレ計量 ds^2 の定義と等長群" },
                            { id: "5.3", title: "シュワルツ-ピック補題", description: "双曲計量を縮小しない正則写像の性質" },
                            { id: "5.4", title: "双曲距離と測地線", description: "双曲距離の明示公式と測地線の計算" },
                            { id: "5.5", title: "一様化定理", description: "単連結リーマン面はリーマン球面・複素平面・単位円板のいずれかに双正則同値であること、定理の意義と各場合の特徴づけ" }
                        ]
                    },
                    {
                        id: "6", title: "整関数・有理型関数の分解理論", description: "ワイエルシュトラス分解定理、ミッタク-レフラー定理、ハダマール因数分解",
                        sections: [
                            { id: "6.1", title: "無限積の収束", description: "絶対収束と対数の収束の同値性" },
                            { id: "6.2", title: "ワイエルシュトラスの分解定理", description: "任意の零点列に基づく整関数の構成論" },
                            { id: "6.3", title: "ミッタク-レフラーの定理", description: "指定された極と主要部を持つ有理型関数の構成" },
                            { id: "6.4", title: "ハダマールの因数分解定理", description: "有限階数の整関数の積表示と階数・型の関係" },
                            { id: "6.5", title: "ガンマ関数への応用", description: "積表示を用いた Γ 関数の解析的性質の整理" }
                        ]
                    },
                    {
                        id: "7", title: "ピカールの定理と整関数の値分布", description: "小ピカール・大ピカール定理、モンテルの正規族との関連",
                        sections: [
                            { id: "7.1", title: "小ピカールの定理", description: "非定値整関数の値の存在性" },
                            { id: "7.2", title: "大ピカールの定理", description: "真性特異点近傍での値分布の精密化" },
                            { id: "7.3", title: "ピカール定理とモンテル定理の関係", description: "正規性を用いた定理の証明の流れ" },
                            { id: "7.4", title: "ネヴァンリンナ理論への展望", description: "有理型関数の定量的解析の導入" }
                        ]
                    },
                    {
                        id: "8", title: "リーマン・ロッホの定理", description: "除数、線形系、定理の主張と応用",
                        sections: [
                            { id: "8.1", title: "コンパクトリーマン面上の有理型関数と除数", description: "除数群・次数と主除数の概念" },
                            { id: "8.2", title: "線形系と l(D)", description: "除数に付随する有理型空間 L(D) とその次元" },
                            { id: "8.3", title: "微分形式と標準除数", description: "正則 1-形式の空間 K の定義と次元" },
                            { id: "8.4", title: "リーマン・ロッホの定理の主張と証明の概略", description: "次元公式の幾何学的な解釈" },
                            { id: "8.5", title: "リーマン・ロッホの定理の応用", description: "種数と有理型関数の関係性、射影的埋め込みの概観" }
                        ]
                    }
                ],
                prerequisites: ["3-2", "3-12"]
            },
            {
                id: "4-3",
                title: "楕円関数論",
                chapters: [
                    {
                        id: "1", title: "楕円積分とアーベルの定理", description: "楕円積分の起源・三種の正規形・反転問題・アーベルの加法定理",
                        sections: [
                            { id: "1.1", title: "楕円積分の起源", description: "弧長積分・振り子の周期から生じる積分、代数関数の積分が初等関数で表せない理由" },
                            { id: "1.2", title: "第一種・第二種楕円積分", description: "ルジャンドルの正規形 K(k)・E(k) の定義、パラメータ k の意味" },
                            { id: "1.3", title: "第三種楕円積分", description: "Π(n, k) の定義と他の二種との関係" },
                            { id: "1.4", title: "楕円積分の反転問題", description: "積分の逆関数として楕円関数を定義するという発想の導入" },
                            { id: "1.5", title: "アーベルの加法定理", description: "楕円積分の和が再び楕円積分で表されるという定理の主張、代数曲線上の点の加法との対応、後の楕円曲線の群法則との接続の予告" }
                        ]
                    },
                    {
                        id: "2", title: "複素トーラスと二重周期関数", description: "格子・商空間としてのトーラス・二重周期関数の基本的制約",
                        sections: [
                            { id: "2.1", title: "格子と基本周期平行四辺形", description: "格子 Λ = ω₁ℤ + ω₂ℤ の定義、Im(ω₂/ω₁) > 0 の規格化条件、基本周期平行四辺形の構成" },
                            { id: "2.2", title: "複素トーラス", description: "商空間 ℂ/Λ の定義、種数1のコンパクトリーマン面としての解釈" },
                            { id: "2.3", title: "二重周期関数の定義", description: "Λ-周期的な有理型関数の定義" },
                            { id: "2.4", title: "リウヴィルの定理系列", description: "整関数である二重周期関数は定数であること、極の個数・留数の和・零点と極の位置に関する基本制約の証明" }
                        ]
                    },
                    {
                        id: "3", title: "ワイエルシュトラスの ℘ 関数", description: "定義と収束・微分方程式・Laurent 展開と不変量",
                        sections: [
                            { id: "3.1", title: "℘ 関数の定義と収束", description: "絶対収束を保証する補正項付きの無限和の定義、一様収束の証明" },
                            { id: "3.2", title: "℘ 関数の基本性質", description: "偶関数性・二重周期性・唯一の二重極の確認" },
                            { id: "3.3", title: "℘ 関数の Laurent 展開と不変量", description: "原点近傍での展開、アイゼンシュタイン級数 g₂・g₃ の定義" },
                            { id: "3.4", title: "℘ 関数の満たす微分方程式", description: "(℘')² = 4℘³ - g₂℘ - g₃ の証明" },
                            { id: "3.5", title: "判別式と j 不変量", description: "Δ = g₂³ - 27g₃² の定義、j = 1728 g₂³/Δ の定義と格子の同型類との対応" },
                            { id: "3.6", title: "任意の楕円関数の表示", description: "任意の楕円関数が ℘ と ℘' の有理式で表されることの証明" }
                        ]
                    },
                    {
                        id: "4", title: "ワイエルシュトラスの ζ 関数と σ 関数", description: "定義・擬周期性・加法公式・楕円関数の因子による表示",
                        sections: [
                            { id: "4.1", title: "ワイエルシュトラスの ζ 関数", description: "℘ の原始関数としての ζ の定義、擬周期性 ζ(z+ωᵢ) = ζ(z) + ηᵢ の導出" },
                            { id: "4.2", title: "ルジャンドルの関係式", description: "η₁ω₂ - η₂ω₁ = 2πi の証明" },
                            { id: "4.3", title: "ワイエルシュトラスの σ 関数", description: "整関数 σ の定義、擬周期因子の構造" },
                            { id: "4.4", title: "楕円関数の σ 関数による表示", description: "零点・極のデータから楕円関数を σ 関数を用いて構成する方法" }
                        ]
                    },
                    {
                        id: "5", title: "楕円曲線のパラメトライゼーション", description: "℘ 関数による楕円曲線の一意化・群法則との整合性・同型分類・等分点",
                        sections: [
                            { id: "5.1", title: "楕円曲線 y² = 4x³ - g₂x - g₃", description: "ワイエルシュトラス形式の楕円曲線の定義、非特異性と Δ ≠ 0 の関係" },
                            { id: "5.2", title: "パラメトライゼーション定理", description: "写像 z ↦ (℘(z), ℘'(z)) による ℂ/Λ から楕円曲線への同型の証明" },
                            { id: "5.3", title: "群法則の解析的記述", description: "ℂ/Λ の加法群構造と楕円曲線の3点共線条件による群法則の一致、℘ 関数の加法公式、第1章アーベルの定理との接続" },
                            { id: "5.4", title: "複素トーラスの同型分類", description: "格子の相似類と楕円曲線の同型類の対応、j 不変量による完全分類" },
                            { id: "5.5", title: "等分点とねじれ構造", description: "n-等分点 E[n] の定義、E[n] ≅ (ℤ/nℤ)² の証明、n-等分体の定義と整数論への接続の予告" }
                        ]
                    },
                    {
                        id: "6", title: "テータ関数", description: "定義と収束・変換公式・ヤコビの三重積公式・楕円関数との関係",
                        sections: [
                            { id: "6.1", title: "テータ関数の定義", description: "4種のテータ関数 θ₁, θ₂, θ₃, θ₄ の q 級数による定義、収束の確認" },
                            { id: "6.2", title: "テータ関数の基本性質", description: "準周期性・零点の位置・関数方程式" },
                            { id: "6.3", title: "テータ関数の変換公式", description: "モジュラー変換 τ ↦ -1/τ のもとでのテータ関数の変換則" },
                            { id: "6.4", title: "ヤコビの三重積公式", description: "θ₃ の無限積表示の証明、整数の平方和表示問題への応用" },
                            { id: "6.5", title: "テータ関数による楕円関数の表示", description: "ワイエルシュトラスの ℘ 関数・σ 関数のテータ関数による表示、二つの流儀の統合" }
                        ]
                    },
                    {
                        id: "7", title: "ヤコビの楕円関数", description: "sn・cn・dn 関数の定義と性質・ワイエルシュトラスとの対応・応用",
                        sections: [
                            { id: "7.1", title: "ヤコビの楕円関数の定義", description: "第一種楕円積分の逆関数としての sn の定義、cn・dn のテータ関数による定義" },
                            { id: "7.2", title: "sn・cn・dn の基本性質", description: "周期性・加法公式・相互関係式" },
                            { id: "7.3", title: "ヤコビとワイエルシュトラスの対応", description: "二つの流儀の関係、格子パラメータの対応" },
                            { id: "7.4", title: "ヤコビの楕円関数の応用例", description: "振り子の正確な周期の計算、楕円関数による非線形常微分方程式の求積" }
                        ]
                    },
                    {
                        id: "8", title: "楕円関数の展望", description: "モジュラー群・モジュライ空間・整数論への接続・一般化",
                        sections: [
                            { id: "8.1", title: "モジュラー群 SL₂(ℤ) の作用", description: "格子の基底変換としての SL₂(ℤ) 作用、基本領域の構成" },
                            { id: "8.2", title: "j 関数のモジュラー性", description: "j が SL₂(ℤ) に関して不変な有理型関数であること、モジュラー形式（5-7）への展望" },
                            { id: "8.3", title: "楕円曲線と整数論", description: "有理点の群構造、整数論II（4-14）・解析的数論（5-6）との接続の概観" },
                            { id: "8.4", title: "アーベル多様体への展望", description: "高種数曲線のヤコビ多様体・アーベル関数への一般化の概観" }
                        ]
                    }
                ],
                prerequisites: ["4-2"]
            },
            {
                id: "4-4",
                title: "凸解析",
                chapters: [
                    {
                        id: "1", title: "凸集合", description: "定義・性質・射影・分離定理",
                        sections: [
                            { id: "1.1", title: "凸集合の定義と例", description: "線分条件による定義、半空間・球・多面体などの例" },
                            { id: "1.2", title: "凸包と凸錐", description: "凸包の定義と最小性、凸錐の定義と例" },
                            { id: "1.3", title: "凸集合の位相的性質", description: "内部・閉包・相対的内部の関係、凸集合の連結性" },
                            { id: "1.4", title: "分離定理", description: "超平面分離定理・支持超平面定理の証明と幾何的意味" },
                            { id: "1.5", title: "射影定理（凸集合版）", description: "閉凸集合への最近傍点の存在・一意性、射影の非拡大性" }
                        ]
                    },
                    {
                        id: "2", title: "凸関数", description: "定義・特徴づけ・下半連続性・真の凸関数",
                        sections: [
                            { id: "2.1", title: "凸関数の定義と例", description: "ジェンセンの不等式、指数関数・ノルム・二次形式などの例" },
                            { id: "2.2", title: "エピグラフによる特徴づけ", description: "凸関数とエピグラフの凸性の同値、下半連続性との関係" },
                            { id: "2.3", title: "真の凸関数と拡張実数値関数", description: "有効定義域、真の凸関数の定義と取り扱い上の注意" },
                            { id: "2.4", title: "凸関数の連続性と微分可能性", description: "内点での連続性定理、方向微分の存在と凸性の関係" },
                            { id: "2.5", title: "強凸関数", description: "強凸性の定義、最小値の存在・一意性への応用" }
                        ]
                    },
                    {
                        id: "3", title: "劣微分", description: "劣勾配・劣微分の定義・計算規則・最適性条件",
                        sections: [
                            { id: "3.1", title: "劣勾配と劣微分の定義", description: "微分不可能点での接超平面の一般化、劣微分集合の凸・閉性" },
                            { id: "3.2", title: "劣微分の計算例", description: "絶対値関数・ノルム・最大値関数の劣微分の計算" },
                            { id: "3.3", title: "劣微分の計算規則", description: "スカラー倍・和・合成の劣微分の公式" },
                            { id: "3.4", title: "最適性条件", description: "無制約最小化問題における零元の劣微分への含有条件" }
                        ]
                    },
                    {
                        id: "4", title: "共役関数（フェンシェル共役）", description: "定義・例・双共役・フェンシェル-モロの定理",
                        sections: [
                            { id: "4.1", title: "共役関数の定義", description: "ルジャンドル-フェンシェル変換による定義と幾何的意味" },
                            { id: "4.2", title: "共役関数の計算例", description: "二次関数・指数関数・ノルムの共役関数の計算" },
                            { id: "4.3", title: "双共役と下半連続凸包", description: "双共役が閉じた凸関数の最大の下界となることの証明" },
                            { id: "4.4", title: "フェンシェル-モロの定理", description: "閉真凸関数が双共役に一致することの証明" },
                            { id: "4.5", title: "ヤング-フェンシェルの不等式", description: "共役関数との基本的な不等式と等号条件" }
                        ]
                    },
                    {
                        id: "5", title: "フェンシェル双対性", description: "主問題と双対問題・双対ギャップ・強双対定理",
                        sections: [
                            { id: "5.1", title: "主問題と双対問題の設定", description: "フェンシェル双対問題の定式化と弱双対定理" },
                            { id: "5.2", title: "強双対定理とスレーターの条件", description: "双対ギャップが零になるための制約想定の条件" },
                            { id: "5.3", title: "ラグランジュ双対性との関係", description: "ラグランジュ乗数法とフェンシェル双対の統一的な見方" },
                            { id: "5.4", title: "KKT条件", description: "鞍点条件・相補スラック性・最適性の一階条件の導出" }
                        ]
                    },
                    {
                        id: "6", title: "ミニマックス定理", description: "鞍点・フォン・ノイマンの定理",
                        sections: [
                            { id: "6.1", title: "鞍点の定義と特徴づけ", description: "鞍点と max-min・min-max の一致条件" },
                            { id: "6.2", title: "フォン・ノイマンのミニマックス定理", description: "コンパクト凸集合上の双線形関数に対する証明" },
                            { id: "6.3", title: "一般化ミニマックス定理", description: "連続凸凹関数への拡張、ファン・ミニマックス定理" }
                        ]
                    },
                    {
                        id: "7", title: "近接作用素と凸最適化アルゴリズム", description: "近接作用素・劣勾配法・近接点法・ADMM",
                        sections: [
                            { id: "7.1", title: "近接作用素の定義と性質", description: "モロー包絡と近接作用素の定義、非拡大性の証明" },
                            { id: "7.2", title: "近接作用素の計算例", description: "L1ノルム・指示関数・二次関数の近接作用素の具体計算" },
                            { id: "7.3", title: "劣勾配法", description: "非平滑凸最適化への勾配法の拡張、収束速度の評価" },
                            { id: "7.4", title: "近接点法と前向き後向き分割", description: "和の構造を持つ凸問題への分割アルゴリズム" },
                            { id: "7.5", title: "ADMM（交互方向乗数法）", description: "制約付き問題への分散的アルゴリズムの構成と収束性" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "3-3"]
            },
            {
                id: "4-5",
                title: "多様体論",
                chapters: [
                    {
                        id: "1", title: "位相多様体と滑らかな多様体", description: "ハウスドルフ性・第二可算性・チャート・アトラス・C^∞構造",
                        sections: [
                            { id: "1.1", title: "位相多様体の定義", description: "ハウスドルフ性・第二可算性・局所ユークリッド性の3条件" },
                            { id: "1.2", title: "チャートとアトラス", description: "座標近傍の定義、チャート間の座標変換の整合性条件" },
                            { id: "1.3", title: "滑らかな多様体の定義", description: "C^∞-アトラスの整合性、極大アトラスの存在と一意性" },
                            { id: "1.4", title: "多様体の例", description: "球面・トーラス・実射影空間・リー群の多様体構造" }
                        ]
                    },
                    {
                        id: "2", title: "多様体上の写像と部分多様体", description: "滑らかな写像・微分同相・ランク定理・はめ込み・埋め込み・正則値定理",
                        sections: [
                            { id: "2.1", title: "滑らかな写像と微分同相", description: "チャートを介した滑らかさの定義、微分同相の例" },
                            { id: "2.2", title: "写像の微分とランク定理", description: "接空間の間の線形写像としての微分、定ランク定理" },
                            { id: "2.3", title: "はめ込みと埋め込み", description: "定義と違い、部分多様体としての像の条件" },
                            { id: "2.4", title: "正則値定理", description: "正則値の定義、逆像が部分多様体になるための条件と証明" }
                        ]
                    },
                    {
                        id: "3", title: "接空間と接束", description: "接ベクトルの定義・接写像・接束・ベクトル場・リー括弧積",
                        sections: [
                            { id: "3.1", title: "接空間の定義", description: "曲線の速度ベクトルによる定義と導分による定義の同値性" },
                            { id: "3.2", title: "接写像", description: "写像の微分の接空間による定式化、連鎖律との対応" },
                            { id: "3.3", title: "接束とベクトル場", description: "接束 TM のベクトル束構造、滑らかなベクトル場の定義" },
                            { id: "3.4", title: "リー括弧積", description: "ベクトル場の交換子の定義、ヤコビ恒等式、フローとの関係" }
                        ]
                    },
                    {
                        id: "4", title: "余接空間とテンソル場", description: "余接束・1-形式・テンソル場・リー微分",
                        sections: [
                            { id: "4.1", title: "余接空間と余接束", description: "接空間の双対としての余接空間、余接束 T*M の構造" },
                            { id: "4.2", title: "関数の微分と1-形式", description: "df の定義、座標基底による表示、滑らかな1-形式" },
                            { id: "4.3", title: "テンソル場", description: "反変・共変・混合テンソル束の定義と例" },
                            { id: "4.4", title: "リー微分", description: "ベクトル場のフローによるテンソル場の微分、ベクトル場との交換関係" }
                        ]
                    },
                    {
                        id: "5", title: "微分形式と外微分", description: "k-形式・ウェッジ積・外微分・引き戻し",
                        sections: [
                            { id: "5.1", title: "微分形式の定義", description: "交代テンソル場としての k-形式、局所座標による表示" },
                            { id: "5.2", title: "ウェッジ積", description: "外積の定義・反対称性・次数の加法性、基底の構成" },
                            { id: "5.3", title: "外微分", description: "d の座標不変な定義、d^2 = 0 の証明" },
                            { id: "5.4", title: "引き戻し", description: "写像 f による微分形式の引き戻し f*ω の定義と外微分との可換性" }
                        ]
                    },
                    {
                        id: "6", title: "向き付けと多様体上の積分", description: "向き付け・体積形式・1の分割・ストークスの定理",
                        sections: [
                            { id: "6.1", title: "向き付けの定義", description: "アトラスの整合性による向き付けの定義、向き付け不可能な例" },
                            { id: "6.2", title: "体積形式", description: "向き付け可能な多様体上の体積形式の存在と局所座標表示" },
                            { id: "6.3", title: "コンパクト台をもつ形式の積分", description: "1の分割を用いた定義と座標変換に関する整合性" },
                            { id: "6.4", title: "境界付き多様体", description: "境界の定義と誘導される向き付け" },
                            { id: "6.5", title: "ストークスの定理", description: "一般ストークスの定理の証明と古典的定理（発散定理・グリーンの定理）との統一" }
                        ]
                    },
                    {
                        id: "7", title: "ド・ラームコホモロジー", description: "閉形式・完全形式・ポアンカレの補題・ド・ラームの定理",
                        sections: [
                            { id: "7.1", title: "ド・ラームコホモロジーの定義", description: "閉形式と完全形式の差を測る商空間としての定義" },
                            { id: "7.2", title: "ポアンカレの補題", description: "可縮な多様体上でのすべての閉形式の完全性の証明" },
                            { id: "7.3", title: "ド・ラームコホモロジーの計算例", description: "球面・トーラス・実射影空間の具体的計算" },
                            { id: "7.4", title: "ド・ラームの定理", description: "特異コホモロジーとの同型定理の主張と意義" }
                        ]
                    }
                ],
                prerequisites: ["3-1", "3-11", "3-12"]
            },
            {
                id: "4-6",
                title: "微分幾何II",
                chapters: [
                    {
                        id: "1", title: "リーマン計量", description: "計量テンソル・ノルム・距離・体積形式",
                        sections: [
                            { id: "1.1", title: "リーマン計量の定義と例", description: "内積の滑らかな族としての定義、球面・双曲空間・平坦空間の計量" },
                            { id: "1.2", title: "計量から誘導される距離と体積形式", description: "測地的距離の定義、リーマン体積形式の構成" },
                            { id: "1.3", title: "計量の引き戻しと等長写像", description: "等長写像・局所等長写像の定義と例" }
                        ]
                    },
                    {
                        id: "2", title: "レビ-チビタ接続と共変微分", description: "接続の公理・ねじれなし・計量的・クリストッフェル記号",
                        sections: [
                            { id: "2.1", title: "アフィン接続の定義", description: "ベクトル場の共変微分の公理的定義" },
                            { id: "2.2", title: "ねじれテンソルと計量的条件", description: "ねじれなし・計量的の2条件によるレビ-チビタ接続の一意性定理" },
                            { id: "2.3", title: "クリストッフェル記号", description: "局所座標による接続係数の計算と計量による明示公式" },
                            { id: "2.4", title: "テンソル場の共変微分", description: "共変微分の一般テンソル場への拡張、縮約との可換性" }
                        ]
                    },
                    {
                        id: "3", title: "測地線", description: "測地線方程式・変分的特徴づけ・指数写像・完備性",
                        sections: [
                            { id: "3.1", title: "測地線の定義と測地線方程式", description: "自己平行曲線としての定義と局所座標による方程式" },
                            { id: "3.2", title: "測地線の変分的特徴づけ", description: "弧長汎関数の臨界点としての測地線、オイラー-ラグランジュ方程式との対応" },
                            { id: "3.3", title: "指数写像", description: "指数写像の定義と局所微分同相性、法座標系" },
                            { id: "3.4", title: "ホップ-リノウの定理", description: "完備性の同値条件、任意の2点を結ぶ最短測地線の存在" }
                        ]
                    },
                    {
                        id: "4", title: "曲率テンソル", description: "リーマン曲率テンソル・断面曲率・リッチ曲率・スカラー曲率",
                        sections: [
                            { id: "4.1", title: "リーマン曲率テンソルの定義", description: "共変微分の非可換性による定義、対称性と反対称性" },
                            { id: "4.2", title: "断面曲率", description: "2次元平面に対する曲率の定義、定曲率空間の特徴づけ" },
                            { id: "4.3", title: "リッチテンソルとスカラー曲率", description: "縮約による定義、アインシュタイン方程式との関係への言及" },
                            { id: "4.4", title: "曲率と局所幾何", description: "ヤコビ方程式、共役点の概念、測地線の安定性との関係" }
                        ]
                    },
                    {
                        id: "5", title: "曲面論とガウス-ボンネの定理", description: "第一・第二基本形式・ガウス曲率・平均曲率・ガウスの驚くべき定理",
                        sections: [
                            { id: "5.1", title: "第一基本形式と第二基本形式", description: "曲面の誘導計量と法曲率による外在的幾何の記述" },
                            { id: "5.2", title: "ガウス曲率と平均曲率", description: "主曲率による定義、極小曲面の条件" },
                            { id: "5.3", title: "ガウスの驚くべき定理", description: "ガウス曲率が等長不変量であることの証明" },
                            { id: "5.4", title: "ガウス-ボンネの定理", description: "コンパクト向き付け可能曲面での全曲率とオイラー標数の関係の証明" }
                        ]
                    },
                    {
                        id: "6", title: "ファイバー束と接続", description: "ベクトル束・主束・構造群・接続形式・曲率形式・ホロノミー",
                        sections: [
                            { id: "6.1", title: "ベクトル束の定義と例", description: "接束・余接束・テンソル束のベクトル束としての統一的定義" },
                            { id: "6.2", title: "主ファイバー束", description: "構造群をもつ束の定義、フレーム束との関係" },
                            { id: "6.3", title: "主束上の接続", description: "水平分布による接続の定義、接続形式と曲率形式" },
                            { id: "6.4", title: "ホロノミー群", description: "平行移動の経路依存性、ホロノミー群の定義とアンビローズ-シンガーの定理" }
                        ]
                    },
                    {
                        id: "7", title: "特性類", description: "チャーン類・ポントリャーギン類・オイラー類・チャーン-ウェイユ理論",
                        sections: [
                            { id: "7.1", title: "特性類の概念と動機", description: "ベクトル束のトポロジー的不変量としての特性類の意義" },
                            { id: "7.2", title: "チャーン-ウェイユ理論", description: "曲率形式による特性類の構成、接続によらない不変性の証明" },
                            { id: "7.3", title: "チャーン類とポントリャーギン類", description: "複素・実ベクトル束に対する各特性類の定義と計算例" },
                            { id: "7.4", title: "オイラー類とガウス-ボンネ-チャーンの定理", description: "オイラー類によるガウス-ボンネ定理の高次元化" }
                        ]
                    },
                    {
                        id: "8", title: "アティヤ-シンガーの指数定理", description: "楕円型作用素・解析的指数・位相的指数・応用例",
                        sections: [
                            { id: "8.1", title: "楕円型微分作用素", description: "記号・楕円型条件の定義、ラプラシアン・ディラック作用素の例" },
                            { id: "8.2", title: "解析的指数と位相的指数", description: "カーネル・コカーネルの有限次元性、指数の定義" },
                            { id: "8.3", title: "指数定理の主張", description: "解析的指数と特性類による位相的指数の一致の主張" },
                            { id: "8.4", title: "特別な場合への応用", description: "ガウス-ボンネ・リーマン-ロッホ・ハーゼブレーフ署名定理の統一" }
                        ]
                    }
                ],
                prerequisites: ["4-5"]
            },
            {
                id: "4-7",
                title: "力学系理論",
                chapters: [
                    {
                        id: "1", title: "力学系の基礎", description: "流れ・軌道・不変集合・ω-極限集合",
                        sections: [
                            { id: "1.1", title: "力学系の定式化", description: "連続力学系と離散力学系の定義、フロー・半フローの概念" },
                            { id: "1.2", title: "軌道の分類", description: "平衡点・周期軌道・ホモクリニック軌道・ヘテロクリニック軌道" },
                            { id: "1.3", title: "不変集合とω-極限集合", description: "正負のω-極限集合の定義、アトラクターの概念" },
                            { id: "1.4", title: "位相的推移性と稠密軌道", description: "位相的推移性の定義と具体例" }
                        ]
                    },
                    {
                        id: "2", title: "線形力学系と安定多様体", description: "双曲型平衡点・安定多様体定理・ハルトマン-グロブマンの定理",
                        sections: [
                            { id: "2.1", title: "線形系の相平面分類の再整理", description: "固有値による分類の多様体論的解釈" },
                            { id: "2.2", title: "双曲型平衡点", description: "安定・不安定・中心固有空間の定義と双曲型の条件" },
                            { id: "2.3", title: "安定多様体定理", description: "双曲型平衡点の安定・不安定多様体の存在と滑らかさ" },
                            { id: "2.4", title: "ハルトマン-グロブマンの定理", description: "双曲型平衡点近傍での線形化可能性の定理" }
                        ]
                    },
                    {
                        id: "3", title: "中心多様体理論", description: "中心固有空間・中心多様体定理・縮約原理・標準形",
                        sections: [
                            { id: "3.1", title: "中心多様体定理", description: "非双曲型平衡点の近傍での中心多様体の存在と滑らかさ" },
                            { id: "3.2", title: "縮約原理", description: "中心多様体上の縮約系による長時間挙動の決定" },
                            { id: "3.3", title: "標準形理論", description: "多項式変換によるベクトル場の標準形への変換、共鳴条件" }
                        ]
                    },
                    {
                        id: "4", title: "分岐理論", description: "鞍点-ノード分岐・ホップ分岐・余次元・普遍開折",
                        sections: [
                            { id: "4.1", title: "分岐の概念と余次元", description: "パラメータ変化に伴う位相的変化、分岐点の定義と余次元" },
                            { id: "4.2", title: "余次元1の平衡点分岐", description: "鞍点-ノード分岐・ピッチフォーク分岐・トランスクリティカル分岐" },
                            { id: "4.3", title: "ホップ分岐", description: "複素固有値の虚軸通過による周期軌道の誕生、超臨界・亜臨界の分類" },
                            { id: "4.4", title: "普遍開折", description: "分岐の普遍的な変形とその分類" }
                        ]
                    },
                    {
                        id: "5", title: "ポアンカレ写像と周期軌道", description: "断面・フロケ理論・周期軌道の安定性・ホモクリニック分岐",
                        sections: [
                            { id: "5.1", title: "ポアンカレ写像の定義", description: "断面への戻り写像の定義、周期軌道との対応" },
                            { id: "5.2", title: "フロケ理論", description: "周期係数線形系の解構造、フロケ乗数による安定性判定" },
                            { id: "5.3", title: "周期軌道の安定性", description: "ポアンカレ写像の不動点としての安定性解析" },
                            { id: "5.4", title: "ホモクリニック軌道と分岐", description: "ホモクリニック接続の破れに伴う複雑な軌道構造の発生" }
                        ]
                    },
                    {
                        id: "6", title: "カオスの理論", description: "敏感依存性・リャプノフ指数・ストレンジアトラクター・スメールの馬蹄",
                        sections: [
                            { id: "6.1", title: "カオスの定義と特徴", description: "敏感依存性・位相的推移性・周期点の稠密性によるデバニー定義" },
                            { id: "6.2", title: "リャプノフ指数", description: "近傍軌道の離散速度の定量化、正のリャプノフ指数とカオスの関係" },
                            { id: "6.3", title: "スメールの馬蹄", description: "シンボル力学系との共役、カオス軌道の存在証明の枠組み" },
                            { id: "6.4", title: "ストレンジアトラクター", description: "フラクタル次元の概念、ローレンツアトラクターの概観" }
                        ]
                    },
                    {
                        id: "7", title: "大域的力学系とエルゴード的性質", description: "不変測度・エルゴード性の概念・エルゴード理論への接続",
                        sections: [
                            { id: "7.1", title: "不変測度とリウヴィルの定理", description: "測度保存流の定義、ハミルトン系における不変測度" },
                            { id: "7.2", title: "エルゴード性の概念", description: "時間平均と空間平均の一致、エルゴード的力学系の直感的意味" },
                            { id: "7.3", title: "ポアンカレの再帰定理", description: "測度保存系における軌道の再帰性の証明" },
                            { id: "7.4", title: "シンプレクティック力学系への展望", description: "ハミルトン系の多様体論的定式化とシンプレクティック幾何学への接続" }
                        ]
                    }
                ],
                prerequisites: ["3-5", "4-5"]
            },
            {
                id: "4-8",
                title: "代数的トポロジー",
                chapters: [
                    {
                        id: "1", title: "基本群", description: "ループ・ホモトピー・基本群の定義・計算例",
                        sections: [
                            { id: "1.1", title: "ホモトピーと道のホモトピー", description: "連続写像のホモトピーの定義、相対ホモトピー" },
                            { id: "1.2", title: "基本群の定義", description: "ループの連結積による基本群の構成、基点の変更と同型" },
                            { id: "1.3", title: "基本群の計算例", description: "円周・球面・トーラスの基本群の計算" },
                            { id: "1.4", title: "ファン・カンペンの定理", description: "空間の貼り合わせによる基本群の計算、自由積と融合積" }
                        ]
                    },
                    {
                        id: "2", title: "被覆空間", description: "被覆写像・普遍被覆・デッキ変換・基本群との対応",
                        sections: [
                            { id: "2.1", title: "被覆写像の定義と例", description: "被覆写像の定義、円周・実射影空間の被覆の具体例" },
                            { id: "2.2", title: "リフティングの性質", description: "道・ホモトピーのリフトの存在と一意性定理" },
                            { id: "2.3", title: "普遍被覆の構成", description: "普遍被覆の存在と一意性、基本群による基底の決定" },
                            { id: "2.4", title: "デッキ変換群と分類定理", description: "被覆空間と基本群の部分群の対応、ガロア対応" }
                        ]
                    },
                    {
                        id: "3", title: "単体ホモロジー", description: "単体複体・チェイン複体・境界作用素・ホモロジー群",
                        sections: [
                            { id: "3.1", title: "単体複体の定義と幾何的実現", description: "単体・単体的複体の定義、幾何的実現と多面体" },
                            { id: "3.2", title: "チェイン複体と境界作用素", description: "向き付き単体によるチェイン群、境界作用素の定義と d^2 = 0" },
                            { id: "3.3", title: "ホモロジー群の定義", description: "サイクル・バウンダリー・ホモロジー群の定義" },
                            { id: "3.4", title: "単体ホモロジーの計算例", description: "円周・トーラス・実射影平面の計算" }
                        ]
                    },
                    {
                        id: "4", title: "特異ホモロジーとホモトピー不変性", description: "特異単体・特異チェイン・ホモトピー不変性・切除定理",
                        sections: [
                            { id: "4.1", title: "特異ホモロジーの定義", description: "連続写像による特異単体の定義、単体ホモロジーとの比較" },
                            { id: "4.2", title: "ホモトピー不変性", description: "ホモトピーな写像が同じ準同型を誘導することの証明" },
                            { id: "4.3", title: "切除定理", description: "内部を含む開集合での切除の許容性の定理と証明の概略" },
                            { id: "4.4", title: "単体ホモロジーと特異ホモロジーの一致", description: "CW複体における両者の同型" }
                        ]
                    },
                    {
                        id: "5", title: "完全系列とマイヤー-ビエトリス", description: "完全系列・相対ホモロジー・マイヤー-ビエトリス列・オイラー標数",
                        sections: [
                            { id: "5.1", title: "完全系列の代数的準備", description: "短完全系列・長完全系列の定義、蛇の補題" },
                            { id: "5.2", title: "対の長完全系列", description: "部分空間の対に対する相対ホモロジーと長完全系列" },
                            { id: "5.3", title: "マイヤー-ビエトリス完全系列", description: "空間の和によるホモロジー群の計算公式と証明" },
                            { id: "5.4", title: "オイラー標数", description: "ホモロジー群のランクの交代和による定義、単体的オイラー標数との一致" }
                        ]
                    },
                    {
                        id: "6", title: "コホモロジーとカップ積", description: "コチェイン複体・コホモロジー群・カップ積・コホモロジー環",
                        sections: [
                            { id: "6.1", title: "コホモロジー群の定義", description: "チェイン複体の双対化によるコチェイン複体とコホモロジー群" },
                            { id: "6.2", title: "コホモロジーの関手性", description: "写像の引き戻しによる反変関手としての構造" },
                            { id: "6.3", title: "カップ積の定義", description: "対角近似を用いたカップ積の定義、次数の加法性" },
                            { id: "6.4", title: "コホモロジー環の計算例", description: "トーラス・複素射影空間のコホモロジー環の計算" }
                        ]
                    },
                    {
                        id: "7", title: "双対定理と係数定理", description: "ポアンカレ双対性・ユニバーサル係数定理・キュネットの公式",
                        sections: [
                            { id: "7.1", title: "向き付けと基本類", description: "向き付け可能閉多様体の基本ホモロジー類の存在と一意性" },
                            { id: "7.2", title: "ポアンカレ双対性", description: "キャップ積による H_k と H^{n-k} の同型定理とその意味" },
                            { id: "7.3", title: "ユニバーサル係数定理", description: "整係数と一般係数のホモロジー・コホモロジーの関係" },
                            { id: "7.4", title: "キュネットの公式", description: "積空間のホモロジーとコホモロジーの分解、テンソル積との関係" }
                        ]
                    }
                ],
                prerequisites: ["3-9", "3-12"]
            },
            {
                id: "4-9",
                title: "微分トポロジー",
                chapters: [
                    {
                        id: "1", title: "横断性とサードの定理", description: "横断交差・横断性定理・臨界値・サードの定理",
                        sections: [
                            { id: "1.1", title: "横断性の定義", description: "2つの部分多様体・写像と部分多様体の横断交差の定義" },
                            { id: "1.2", title: "横断性定理", description: "一般の写像を任意の精度で横断的写像で近似できることの証明" },
                            { id: "1.3", title: "臨界点と臨界値", description: "写像の臨界点の定義、正則値定理との関係の再整理" },
                            { id: "1.4", title: "サードの定理", description: "臨界値の集合が測度ゼロであることの証明と応用" }
                        ]
                    },
                    {
                        id: "2", title: "ホイットニーの埋め込み定理", description: "埋め込みの存在・弱版と強版・近似定理",
                        sections: [
                            { id: "2.1", title: "弱ホイットニー埋め込み定理", description: "n次元多様体の R^{2n+1} への埋め込みの存在証明" },
                            { id: "2.2", title: "強ホイットニー埋め込み定理", description: "R^{2n} への埋め込みの存在と証明の概略" },
                            { id: "2.3", title: "ホイットニー近似定理", description: "連続写像の滑らかな写像による近似、ホモトピー的近似" },
                            { id: "2.4", title: "応用", description: "すべてのコンパクト多様体がユークリッド空間に埋め込めることの帰結" }
                        ]
                    },
                    {
                        id: "3", title: "モース理論", description: "モース関数・モース補題・ハンドル分解・モース不等式",
                        sections: [
                            { id: "3.1", title: "モース関数と非退化臨界点", description: "ヘッシアンの非退化性・指数の定義、モース関数の存在" },
                            { id: "3.2", title: "モース補題", description: "非退化臨界点の標準形への変換定理の証明" },
                            { id: "3.3", title: "ハンドル分解", description: "臨界点の指数に対応するハンドルの貼り付けによる多様体の構成" },
                            { id: "3.4", title: "モース不等式", description: "臨界点の個数とホモロジー群のベッチ数の関係、弱・強モース不等式" },
                            { id: "3.5", title: "モース理論の応用例", description: "球面・複素射影空間のCW分解、ポアンカレ予想への関連" }
                        ]
                    },
                    {
                        id: "4", title: "交差数と絡み数", description: "符号付き交差数・絡み数・ポアンカレ双対との接続",
                        sections: [
                            { id: "4.1", title: "向き付きコンパクト多様体の交差数", description: "横断的交差を仮定した符号付き交差数の定義" },
                            { id: "4.2", title: "交差数のホモロジー的解釈", description: "ポアンカレ双対性を通じたコホモロジーとの対応" },
                            { id: "4.3", title: "絡み数", description: "埋め込まれた閉曲線の対の絡み数の定義と計算、対称性・反対称性" },
                            { id: "4.4", title: "自己交差数とオイラー類", description: "ベクトル束の零切断の自己交差とオイラー類の関係" }
                        ]
                    },
                    {
                        id: "5", title: "コボルディズム", description: "コボルディズム関係・コボルディズム群・ポントリャーギン-サームの定理",
                        sections: [
                            { id: "5.1", title: "コボルディズムの定義", description: "境界をもつ多様体・コボルディズム関係の定義と同値性の確認" },
                            { id: "5.2", title: "コボルディズム群", description: "非向き付け・向き付けコボルディズム群の定義と計算例" },
                            { id: "5.3", title: "ポントリャーギン-サームの構成", description: "正則値の逆像とフレームド多様体の対応" },
                            { id: "5.4", title: "ポントリャーギン-サームの定理", description: "フレームドコボルディズム群と安定ホモトピー群の同型の主張" }
                        ]
                    },
                    {
                        id: "6", title: "低次元トポロジーへの展望", description: "3次元・4次元多様体の特殊性・低次元位相幾何学への接続",
                        sections: [
                            { id: "6.1", title: "2次元閉曲面の分類", description: "向き付け可能・不可能な閉曲面の完全分類とモース理論による証明" },
                            { id: "6.2", title: "3次元多様体の特殊性", description: "ヘガード分解・デーン手術の概念紹介、低次元位相幾何学への橋渡し" },
                            { id: "6.3", title: "4次元多様体の病理的現象", description: "R^4 の異なる微分構造・ドナルドソン理論の概観" },
                            { id: "6.4", title: "ゲージ理論的手法への展望", description: "ドナルドソン不変量・サイバーグ-ウィッテン理論の位置づけ" }
                        ]
                    }
                ],
                prerequisites: ["4-5", "4-8"]
            },
            {
                id: "4-10",
                title: "体論II",
                chapters: [
                    {
                        id: "1", title: "超越拡大", description: "代数的独立性・超越基底・超越次数",
                        sections: [
                            { id: "1.1", title: "代数的独立性の定義", description: "元の族の代数的独立性・従属性の定義、代数的拡大との対比" },
                            { id: "1.2", title: "超越基底の存在と一意性", description: "超越基底の定義、任意の拡大体における超越基底の存在定理" },
                            { id: "1.3", title: "超越次数", description: "超越次数の定義、超越次数の推移性と塔の法則" },
                            { id: "1.4", title: "純超越拡大と代数的拡大への分解", description: "拡大体の超越次数と代数的拡大による2段階分解" }
                        ]
                    },
                    {
                        id: "2", title: "分離拡大と完全体", description: "分離多項式・分離拡大・完全体・フロベニウス自己同型",
                        sections: [
                            { id: "2.1", title: "分離多項式と重根", description: "最小多項式の分離性、重根と形式微分の関係" },
                            { id: "2.2", title: "完全体の定義と特徴づけ", description: "標数0の体と標数 p の完全体の同値条件" },
                            { id: "2.3", title: "フロベニウス自己同型", description: "標数 p の体における p 乗写像の代数的役割" },
                            { id: "2.4", title: "純非分離拡大と分離閉包", description: "任意の代数拡大の分離部分・純非分離部分への分解" }
                        ]
                    },
                    {
                        id: "3", title: "正規拡大と分解体", description: "正規拡大の特徴づけ・分解体の一意性・合成拡大",
                        sections: [
                            { id: "3.1", title: "正規拡大の定義と特徴づけ", description: "多項式の完全分解との同値性、正規閉包の構成" },
                            { id: "3.2", title: "分解体の一意性", description: "同型拡張定理を用いた分解体の一意性定理の証明" },
                            { id: "3.3", title: "合成拡大", description: "2つの拡大の合成の次数公式、分離性・正規性の保存" }
                        ]
                    },
                    {
                        id: "4", title: "無限次ガロア理論", description: "クルル位相・プロフィニット群・主定理",
                        sections: [
                            { id: "4.1", title: "無限次ガロア拡大とガロア群", description: "無限次ガロア拡大の定義、有限次部分拡大のガロア群との関係" },
                            { id: "4.2", title: "クルル位相", description: "ガロア群へのプロフィニット位相の定義、開部分群による基底" },
                            { id: "4.3", title: "プロフィニット群の構造", description: "有限群の逆極限としての表示、コンパクト性の証明" },
                            { id: "4.4", title: "無限次ガロアの主定理", description: "閉部分群と中間体の対応、位相的ガロア対応の証明" }
                        ]
                    },
                    {
                        id: "5", title: "有限体", description: "有限体の分類・フロベニウス・有限体上の多項式",
                        sections: [
                            { id: "5.1", title: "有限体の分類", description: "位数 p^n の有限体の存在と一意性、F_{p^n} の構成" },
                            { id: "5.2", title: "有限体のガロア群", description: "フロベニウス自己同型の生成性、巡回群としての構造" },
                            { id: "5.3", title: "有限体上の既約多項式", description: "既約多項式の個数の公式、メビウスの反転公式による計算" },
                            { id: "5.4", title: "有限体の応用概観", description: "誤り訂正符号・暗号理論への接続、制御理論・符号理論への橋渡し" }
                        ]
                    },
                    {
                        id: "6", title: "超越拡大の応用", description: "代数幾何への接続・関数体・リュービルの定理",
                        sections: [
                            { id: "6.1", title: "代数多様体の関数体", description: "有理関数の体としての関数体、超越次数と多様体の次元の対応" },
                            { id: "6.2", title: "代数的閉体と代数的閉包", description: "代数的閉体の定義、代数的閉包の存在と一意性" },
                            { id: "6.3", title: "リュービルの定理", description: "初等関数の積分の初等性の判定、超越数論への一歩" },
                            { id: "6.4", title: "代数幾何I・代数数論への展望", description: "関数体と代数幾何の接続、数体と代数数論の接続の整理" }
                        ]
                    }
                ],
                prerequisites: ["3-10"]
            },
            {
                id: "4-11",
                title: "可換環論",
                chapters: [
                    {
                        id: "1", title: "ネーター環とアルティン環", description: "昇鎖条件・降鎖条件・ヒルベルトの基底定理・アルティン環の構造",
                        sections: [
                            { id: "1.1", title: "ネーター環の定義と同値条件", description: "昇鎖条件・有限生成条件・極大条件の同値性証明" },
                            { id: "1.2", title: "ヒルベルトの基底定理", description: "多項式環のネーター性の証明、応用例" },
                            { id: "1.3", title: "アルティン環の定義と同値条件", description: "降鎖条件とネーター環との関係" },
                            { id: "1.4", title: "アルティン環の構造定理", description: "局所アルティン環の直積分解、半単純環との関係" }
                        ]
                    },
                    {
                        id: "2", title: "整従属と整閉包", description: "整従属・整閉包・整閉整域・クレイマーの補題",
                        sections: [
                            { id: "2.1", title: "整従属の定義と特徴づけ", description: "モニック多項式の根としての定義、整従属の推移性" },
                            { id: "2.2", title: "整閉包と整閉整域", description: "整閉包の構成、一意分解整域の整閉性" },
                            { id: "2.3", title: "整従属と素イデアル", description: "ゴーイングアップ定理・ゴーイングダウン定理" },
                            { id: "2.4", title: "正規化と応用", description: "整閉包の計算例、代数幾何における正規多様体との対応" }
                        ]
                    },
                    {
                        id: "3", title: "準素イデアル分解", description: "準素イデアル・ラスカー-ノーター定理・随伴素イデアル",
                        sections: [
                            { id: "3.1", title: "準素イデアルの定義と例", description: "素イデアルの一般化としての準素イデアル、素ラジカルの計算" },
                            { id: "3.2", title: "ラスカー-ノーター分解定理", description: "ネーター環でのイデアルの準素分解の存在定理" },
                            { id: "3.3", title: "分解の一意性", description: "第一・第二一意性定理の証明、随伴素イデアルの不変性" },
                            { id: "3.4", title: "応用例", description: "多項式環での具体的な準素分解の計算" }
                        ]
                    },
                    {
                        id: "4", title: "局所化", description: "積閉集合・分数環・局所環・局所化の普遍性",
                        sections: [
                            { id: "4.1", title: "積閉集合と分数環の構成", description: "積閉集合による分数環の構成と普遍性" },
                            { id: "4.2", title: "局所化とイデアルの対応", description: "局所化による素イデアルの対応定理" },
                            { id: "4.3", title: "局所環と極大イデアル", description: "局所環の定義と特徴づけ、剰余体" },
                            { id: "4.4", title: "平坦加群と局所化", description: "局所化の完全性・平坦性、局所-大域原理" }
                        ]
                    },
                    {
                        id: "5", title: "テンソル積と平坦性", description: "テンソル積・普遍性・平坦加群・忠実平坦性",
                        sections: [
                            { id: "5.1", title: "加群のテンソル積の定義", description: "普遍性による構成、具体的な計算例" },
                            { id: "5.2", title: "テンソル積の性質", description: "右完全性・結合律・分配律、体上のテンソル積" },
                            { id: "5.3", title: "平坦加群の定義と特徴づけ", description: "完全系列の保存による定義、射影加群との関係" },
                            { id: "5.4", title: "忠実平坦性と降下理論", description: "忠実平坦性の定義、代数幾何での基底変換への応用" }
                        ]
                    },
                    {
                        id: "6", title: "完備化", description: "I-進位相・コーシー列・完備化・アルティン-リース補題",
                        sections: [
                            { id: "6.1", title: "I-進位相とフィルトレーション", description: "イデアル進位相の定義、分離性の条件" },
                            { id: "6.2", title: "完備化の構成", description: "逆極限による完備化の定義、普遍性と一意性" },
                            { id: "6.3", title: "p-進整数環と形式的べき級数環", description: "Z_p・k[[x]] の構成と性質" },
                            { id: "6.4", title: "アルティン-リース補題とクルルの交叉定理", description: "部分加群の完備化への応用、∩ I^n M = 0 の条件" }
                        ]
                    },
                    {
                        id: "7", title: "次元論", description: "クルル次元・高さ・ヒルベルト関数・正則局所環",
                        sections: [
                            { id: "7.1", title: "クルル次元と素イデアルの鎖", description: "クルル次元の定義、ネーター環での有限性定理" },
                            { id: "7.2", title: "高さとコーハイト", description: "素イデアルの高さの定義、クルルの高さ定理の証明" },
                            { id: "7.3", title: "ヒルベルト関数と次元", description: "次数付き環のヒルベルト関数、多項式環の次元計算" },
                            { id: "7.4", title: "正則局所環", description: "定義と特徴づけ、一意分解整域性定理、代数幾何における滑らかな点との対応" }
                        ]
                    }
                ],
                prerequisites: ["3-10"]
            },
            {
                id: "4-12",
                title: "代数幾何I",
                chapters: [
                    {
                        id: "1", title: "アフィン代数幾何の基礎", description: "アフィン多様体・ザリスキー位相・座標環・イデアルと多様体の対応",
                        sections: [
                            { id: "1.1", title: "アフィン多様体の定義", description: "多項式の零点集合としてのアフィン多様体、既約性の定義" },
                            { id: "1.2", title: "ザリスキー位相", description: "零集合を閉集合とする位相の定義、ハウスドルフでないことの確認" },
                            { id: "1.3", title: "座標環と正則関数", description: "アフィン多様体の座標環の定義、点とイデアルの対応" },
                            { id: "1.4", title: "多様体の射", description: "アフィン多様体の間の射の定義、引き戻しと座標環の準同型との対応" }
                        ]
                    },
                    {
                        id: "2", title: "ヒルベルトの零点定理", description: "弱形・強形・ラジカルとの対応・幾何学的意味",
                        sections: [
                            { id: "2.1", title: "ヒルベルトの零点定理（弱形）", description: "代数的閉体上で零点のないイデアルは単位イデアルとなることの証明" },
                            { id: "2.2", title: "ヒルベルトの零点定理（強形）", description: "イデアルのラジカルと零点集合のイデアルの一致の証明" },
                            { id: "2.3", title: "アフィン多様体と根基イデアルの対応", description: "イデアルと多様体の反転対応、既約多様体と素イデアルの対応" },
                            { id: "2.4", title: "次元の代数的定義", description: "多様体の次元とクルル次元の一致、具体的な計算例" }
                        ]
                    },
                    {
                        id: "3", title: "射影代数幾何", description: "射影空間・斉次座標環・射影多様体・錐と射影化",
                        sections: [
                            { id: "3.1", title: "射影空間の定義", description: "同値類による定義、アフィン開被覆との関係" },
                            { id: "3.2", title: "射影多様体と斉次イデアル", description: "斉次多項式の零点集合、飽和イデアルとの対応" },
                            { id: "3.3", title: "アフィン多様体との関係", description: "射影多様体のアフィン開被覆、アフィン化と射影化" },
                            { id: "3.4", title: "射影多様体の射", description: "射影多様体の間の射、双有理同値の概念" }
                        ]
                    },
                    {
                        id: "4", title: "代数多様体の局所的性質", description: "局所環・特異点・接空間・正則点",
                        sections: [
                            { id: "4.1", title: "多様体の点における局所環", description: "点の局所環の定義、極大イデアルと剰余体" },
                            { id: "4.2", title: "接空間の代数的定義", description: "極大イデアルの二乗による余接空間の構成" },
                            { id: "4.3", title: "正則点と特異点", description: "ヤコビ行列式による判定、正則点での局所環の正則性との対応" },
                            { id: "4.4", title: "正規多様体", description: "正規性の定義、正規化の構成と意味" }
                        ]
                    },
                    {
                        id: "5", title: "代数曲線の初等理論", description: "非特異曲線・除数・リーマン-ロッホの定理（曲線版）の概観",
                        sections: [
                            { id: "5.1", title: "非特異代数曲線の定義と例", description: "楕円曲線・射影直線・コニックの例" },
                            { id: "5.2", title: "非特異曲線の関数体", description: "有理関数の体としての関数体、超越次数1との対応" },
                            { id: "5.3", title: "除数と線形系", description: "ワイル除数の定義、有効除数・次数・主除数" },
                            { id: "5.4", title: "リーマン-ロッホの定理の主張（概観）", description: "l(D) の有限次元性、定理の主張と種数との関係" }
                        ]
                    },
                    {
                        id: "6", title: "代数多様体の大域的性質", description: "完備多様体・固有射・射影的多様体の閉性",
                        sections: [
                            { id: "6.1", title: "完備多様体の定義", description: "射影に関する閉性条件、コンパクト多様体との類比" },
                            { id: "6.2", title: "射影多様体の完備性", description: "射影多様体が完備であることの証明" },
                            { id: "6.3", title: "固有射の定義と基本性質", description: "固有射の定義、完備多様体の固有射による像の閉性" },
                            { id: "6.4", title: "代数幾何IIへの展望", description: "スキーム論・層・コホモロジーへの動機づけ、古典的代数幾何の限界と定式化の必要性" }
                        ]
                    }
                ],
                prerequisites: ["4-11"]
            },
            {
                id: "4-13",
                title: "多重線形代数学II",
                chapters: [
                    {
                        id: "1", title: "対称代数と多項式環", description: "対称テンソルの代数・普遍性・多項式環との同一視",
                        sections: [
                            { id: "1.1", title: "対称代数の定義と普遍性", description: "テンソル代数の商代数としての対称代数、可換性の普遍性" },
                            { id: "1.2", title: "対称代数と多項式環の同型", description: "S(V) ≅ k[x_1,...,x_n] の証明、次数付き構造" },
                            { id: "1.3", title: "対称多項式と基本対称式", description: "対称多項式の定義、基本対称式による生成定理" },
                            { id: "1.4", title: "外積代数との対比", description: "対称代数と外積代数の普遍性の双対的な関係" }
                        ]
                    },
                    {
                        id: "2", title: "クリフォード代数", description: "二次形式・クリフォード代数の構成・普遍性・基底と次元",
                        sections: [
                            { id: "2.1", title: "二次形式の復習と動機", description: "対称双線形形式と二次形式の代数的整理" },
                            { id: "2.2", title: "クリフォード代数の定義と普遍性", description: "テンソル代数の商代数としての構成、関係式 v^2 = q(v)" },
                            { id: "2.3", title: "クリフォード代数の基底と次元", description: "グラスマン基底の類似、次元 2^n の証明" },
                            { id: "2.4", title: "クリフォード代数の具体例", description: "複素数・四元数・行列環としての低次元の実現" },
                            { id: "2.5", title: "クリフォード代数のフィルトレーションと外積代数との関係", description: "次数付き化と gr(Cl) ≅ ∧(V)" }
                        ]
                    },
                    {
                        id: "3", title: "スピン群とスピノール", description: "ピン群・スピン群・スピノール表現・二重被覆",
                        sections: [
                            { id: "3.1", title: "クリフォード群とピン群", description: "可逆元のなす群、ノルム写像の定義" },
                            { id: "3.2", title: "スピン群の定義", description: "Spin(n) の定義、SO(n) の二重被覆としての構造" },
                            { id: "3.3", title: "低次元の具体例", description: "Spin(2) ≅ U(1)、Spin(3) ≅ SU(2)、Spin(4) ≅ SU(2) × SU(2)" },
                            { id: "3.4", title: "スピノール表現", description: "クリフォード代数の表現としてのスピノール空間の構成" },
                            { id: "3.5", title: "ディラック作用素への展望", description: "スピノール束・ディラック作用素の代数的基盤の整理" }
                        ]
                    },
                    {
                        id: "4", title: "ホップ代数", description: "余代数・双代数・ホップ代数・アンチポード",
                        sections: [
                            { id: "4.1", title: "余代数の定義", description: "余積・余単位の定義、代数の概念の矢印反転による双対化" },
                            { id: "4.2", title: "双代数の定義と例", description: "代数構造と余代数構造の両立条件、群環の双代数構造" },
                            { id: "4.3", title: "ホップ代数の定義", description: "アンチポードの定義、ホップ代数の公理と基本性質" },
                            { id: "4.4", title: "ホップ代数の例", description: "群環・普遍包絡代数・対称代数・外積代数のホップ代数構造" },
                            { id: "4.5", title: "量子群への展望", description: "ホップ代数の変形としての量子群の位置づけ" }
                        ]
                    }
                ],
                prerequisites: ["3-11"]
            },
            {
                id: "4-14",
                title: "整数論II",
                chapters: [
                    {
                        id: "1", title: "合同算術の深化", description: "中国剰余定理・原始根・指数・乗法群の構造",
                        sections: [
                            { id: "1.1", title: "中国剰余定理", description: "連立合同式の解の存在・一意性の証明、環の直積分解との対応" },
                            { id: "1.2", title: "Z/nZ の乗法群の構造", description: "乗法群の位数・巡回性の条件、オイラー関数との関係" },
                            { id: "1.3", title: "原始根の存在定理", description: "素数を法とする原始根の存在証明、生成元の個数の計算" },
                            { id: "1.4", title: "離散対数問題", description: "原始根に基づく指数の定義、離散対数の計算困難性の意味" }
                        ]
                    },
                    {
                        id: "2", title: "平方剰余と相互法則", description: "二次剰余・ルジャンドル記号・ガウスの相互法則",
                        sections: [
                            { id: "2.1", title: "二次合同式と平方剰余", description: "平方剰余・非剰余の定義、解の存在条件" },
                            { id: "2.2", title: "ルジャンドル記号の定義と計算", description: "定義とオイラー基準による計算、乗法性の証明" },
                            { id: "2.3", title: "ガウスの相互法則", description: "主張と証明、ヤコビ記号への拡張" },
                            { id: "2.4", title: "二次体への展望", description: "平方剰余と二次体の分岐・分解の対応の概観、代数数論への橋渡し" }
                        ]
                    },
                    {
                        id: "3", title: "素数の分布", description: "素数計数関数・チェビシェフの定理・素数定理",
                        sections: [
                            { id: "3.1", title: "素数計数関数 π(x)", description: "定義と初等的な評価、素数の疎密の感覚" },
                            { id: "3.2", title: "チェビシェフの定理", description: "π(x) が x/log x と同じオーダーをもつことの初等的証明" },
                            { id: "3.3", title: "素数定理の主張", description: "π(x) ∼ x/log x の主張と証明の概略、リーマンゼータ関数との関係" },
                            { id: "3.4", title: "算術級数中の素数", description: "ディリクレの定理の主張、L 関数の役割の概観" }
                        ]
                    },
                    {
                        id: "4", title: "素数判定と素因数分解", description: "確率的・決定的素数判定法・現代の因数分解手法",
                        sections: [
                            { id: "4.1", title: "擬素数と確率的素数判定", description: "フェルマー擬素数の定義、ミラー-ラビン判定法の仕組み" },
                            { id: "4.2", title: "AKS 素数判定法", description: "決定的多項式時間素数判定の主張と証明の概略" },
                            { id: "4.3", title: "素因数分解アルゴリズム", description: "試し割り・ポラード-ρ・数体篩法の概観と計算量" },
                            { id: "4.4", title: "暗号への接続", description: "素因数分解の困難性と RSA の安全性根拠" }
                        ]
                    },
                    {
                        id: "5", title: "楕円曲線の整数論", description: "楕円曲線の群構造・ハッセの定理・楕円曲線上の離散対数",
                        sections: [
                            { id: "5.1", title: "楕円曲線の定義と群構造", description: "ワイエルシュトラス方程式・加法の定義と結合律の概略" },
                            { id: "5.2", title: "有限体上の楕円曲線", description: "有理点の個数、ハッセの定理の主張" },
                            { id: "5.3", title: "楕円曲線上の離散対数問題", description: "群上の離散対数の定義、有限体上の離散対数との比較" },
                            { id: "5.4", title: "楕円曲線暗号と数論的応用への展望", description: "楕円曲線法による因数分解の概観" }
                        ]
                    }
                ],
                prerequisites: ["3-9"]
            },
            {
                id: "4-15",
                title: "確率過程論",
                chapters: [
                    {
                        id: "1", title: "確率過程の基礎", description: "確率過程の定義・有限次元分布・サンプルパスの正則性・マルコフ性",
                        sections: [
                            { id: "1.1", title: "確率過程の定義と分類", description: "インデックス集合・状態空間による分類、有限次元分布族の定義" },
                            { id: "1.2", title: "コルモゴロフの存在定理", description: "一貫した有限次元分布族から確率過程を構成する定理" },
                            { id: "1.3", title: "サンプルパスの正則性", description: "連続版・右連続左極限版の修正定理、コルモゴロフの連続性定理" },
                            { id: "1.4", title: "マルコフ性と強マルコフ性", description: "マルコフ性の定義、停止時刻・強マルコフ性の定義と意味" }
                        ]
                    },
                    {
                        id: "2", title: "マルチンゲール理論", description: "マルチンゲールの定義・停止時刻・任意抽出定理・収束定理",
                        sections: [
                            { id: "2.1", title: "マルチンゲールの定義と例", description: "離散・連続時間マルチンゲールの定義、優マルチンゲールと劣マルチンゲール" },
                            { id: "2.2", title: "停止時刻とサンプリング", description: "停止時刻の定義、停止した過程の可測性" },
                            { id: "2.3", title: "任意抽出定理", description: "有界停止時刻でのマルチンゲール性の保存、ドゥーブの任意抽出定理" },
                            { id: "2.4", title: "マルチンゲール収束定理", description: "ドゥーブの上向き交差不等式、概収束・L^1 収束の条件" },
                            { id: "2.5", title: "一様可積分マルチンゲール", description: "一様可積分性とL^1収束・概収束の同値性" }
                        ]
                    },
                    {
                        id: "3", title: "ブラウン運動", description: "ウィーナー過程の構成・基本性質・マルコフ性・反射原理",
                        sections: [
                            { id: "3.1", title: "ブラウン運動の定義と構成", description: "公理的定義、レビーの構成によるサンプルパスの連続性" },
                            { id: "3.2", title: "ブラウン運動の基本性質", description: "独立増分・ガウス過程・二次変動の計算" },
                            { id: "3.3", title: "マルコフ性と強マルコフ性", description: "ブラウン運動の強マルコフ性の証明" },
                            { id: "3.4", title: "反射原理と最大値の分布", description: "反射原理の証明、到達時刻・最大値の分布の導出" },
                            { id: "3.5", title: "ブラウン運動のサンプルパスの性質", description: "至るところ微分不可能性、ヘルダー連続性" }
                        ]
                    },
                    {
                        id: "4", title: "伊藤積分と確率微分方程式", description: "伊藤積分の構成・伊藤の公式・SDE の存在と一意性",
                        sections: [
                            { id: "4.1", title: "伊藤積分の構成", description: "単純過程への積分の定義、L^2 等長性による拡張、伊藤積分の性質" },
                            { id: "4.2", title: "伊藤の公式", description: "確率版の変数変換公式の証明、古典的な微分との差異の直感" },
                            { id: "4.3", title: "確率微分方程式の定義", description: "強解・弱解の定義と違い、係数の意味" },
                            { id: "4.4", title: "SDE の存在と一意性定理", description: "リプシッツ条件下での強解の存在・一意性の証明" },
                            { id: "4.5", title: "SDE の具体例", description: "幾何ブラウン運動・オルンシュタイン-ウーレンベック過程の解の導出" }
                        ]
                    },
                    {
                        id: "5", title: "マルコフ過程とポアソン過程", description: "推移半群・生成作用素・ポアソン過程・ジャンプ過程",
                        sections: [
                            { id: "5.1", title: "マルコフ過程の半群理論", description: "推移半群の定義、強連続半群と生成作用素、フェラー性" },
                            { id: "5.2", title: "フォッカー-プランク方程式", description: "確率密度の時間発展方程式の導出、定常分布の条件" },
                            { id: "5.3", title: "ポアソン過程の定義と性質", description: "指数待ち時間・独立増分・特性関数による特徴づけ" },
                            { id: "5.4", title: "複合ポアソン過程とジャンプ過程の概観", description: "ジャンプの大きさをもつ過程の構成、レビー-ヒンチンの公式の紹介" }
                        ]
                    },
                    {
                        id: "6", title: "確率過程の応用", description: "最適停止問題・他分野への応用",
                        sections: [
                            { id: "6.1", title: "最適停止問題とスネル包絡", description: "価値過程の定義、スネル包絡による最適停止時刻の特徴づけ" },
                            { id: "6.2", title: "確率制御の概観", description: "確率的最適制御とハミルトン-ヤコビ-ベルマン方程式の紹介" },
                            { id: "6.3", title: "数理ファイナンスへの接続", description: "マルチンゲール測度・ギルサノフの定理の主張" },
                            { id: "6.4", title: "エルゴード理論への展望", description: "確率過程の不変測度・エルゴード性の概念" }
                        ]
                    }
                ],
                prerequisites: ["3-7", "4-1"]
            },
            {
                id: "4-16",
                title: "数理統計学",
                chapters: [
                    {
                        id: "1", title: "統計モデルと標本分布", description: "統計モデルの定式化・標本分布・標本平均・標本分散・導出分布",
                        sections: [
                            { id: "1.1", title: "統計モデルの定式化", description: "母集団・標本・パラメータの厳密な定義、独立同分布標本の設定" },
                            { id: "1.2", title: "標本平均と標本分散の性質", description: "期待値・分散の計算、不偏性の確認" },
                            { id: "1.3", title: "導出分布の構成", description: "正規母集団からのカイ二乗分布・t 分布・F 分布の導出と相互関係" },
                            { id: "1.4", title: "順序統計量", description: "順序統計量の定義と分布の導出、最大値・中央値の分布" }
                        ]
                    },
                    {
                        id: "2", title: "点推定の理論", description: "不偏性・一致性・有効性・クラメール-ラオの下界",
                        sections: [
                            { id: "2.1", title: "推定量の望ましい性質", description: "不偏性・一致性・漸近正規性の定義と例" },
                            { id: "2.2", title: "フィッシャー情報量", description: "スコア関数・フィッシャー情報量の定義と計算例" },
                            { id: "2.3", title: "クラメール-ラオの下界", description: "不偏推定量の分散の下界定理の証明と有効推定量の定義" },
                            { id: "2.4", title: "十分統計量とフィッシャー-ネイマンの分解定理", description: "十分統計量の定義、分解定理による特徴づけ" },
                            { id: "2.5", title: "完備統計量とレーマン-シェッフェの定理", description: "完備性の定義、最小分散不偏推定量の一意性" }
                        ]
                    },
                    {
                        id: "3", title: "最尤推定とモーメント法", description: "尤度関数・最尤推定量の性質・漸近理論・モーメント推定量",
                        sections: [
                            { id: "3.1", title: "尤度関数と最尤推定量の定義", description: "尤度・対数尤度の定義、最大化の条件としての尤度方程式" },
                            { id: "3.2", title: "最尤推定量の漸近的性質", description: "一致性・漸近正規性・漸近有効性の定理の主張" },
                            { id: "3.3", title: "デルタ法", description: "最尤推定量の変換の漸近分布の導出、信頼区間への応用" },
                            { id: "3.4", title: "モーメント推定量", description: "母モーメントと標本モーメントの対応による推定、一致性の確認" }
                        ]
                    },
                    {
                        id: "4", title: "区間推定", description: "信頼区間・ピボット量・正確な信頼区間・漸近信頼区間",
                        sections: [
                            { id: "4.1", title: "信頼区間の定義と解釈", description: "信頼水準・被覆確率の定義、頻度論的解釈の注意点" },
                            { id: "4.2", title: "ピボット量による信頼区間の構成", description: "ピボット量の定義、正規母集団での平均・分散の信頼区間" },
                            { id: "4.3", title: "漸近信頼区間", description: "最尤推定量の漸近正規性に基づく信頼区間の構成" },
                            { id: "4.4", title: "ベイズ信用区間との対比", description: "事後分布に基づく信用区間の定義、頻度論との概念的差異" }
                        ]
                    },
                    {
                        id: "5", title: "仮説検定の理論", description: "ネイマン-ピアソンの枠組み・検出力・一様最強力検定",
                        sections: [
                            { id: "5.1", title: "仮説検定の枠組み", description: "帰無仮説・対立仮説・棄却域・第一種・第二種の誤りの定義" },
                            { id: "5.2", title: "ネイマン-ピアソンの補題", description: "単純仮説に対する最強力検定の構成と証明" },
                            { id: "5.3", title: "一様最強力検定", description: "UMP 検定の定義、単調尤度比をもつ族での構成" },
                            { id: "5.4", title: "検出力関数と標本サイズの設計", description: "検出力の定義、必要標本サイズの決定手順" }
                        ]
                    },
                    {
                        id: "6", title: "主要な検定手法", description: "t 検定・F 検定・カイ二乗検定・分散分析・ノンパラメトリック検定",
                        sections: [
                            { id: "6.1", title: "正規母集団の検定", description: "一標本・二標本 t 検定、F 検定による分散の比較の導出と適用条件" },
                            { id: "6.2", title: "カイ二乗検定", description: "適合度検定・独立性検定の設定、検定統計量の漸近分布の導出" },
                            { id: "6.3", title: "分散分析", description: "一元・二元配置の分散分析の線形モデルによる定式化、F 統計量の導出" },
                            { id: "6.4", title: "ノンパラメトリック検定", description: "分布自由性の意味、符号検定・ウィルコクソン符号順位検定・マン-ホイットニー検定" }
                        ]
                    },
                    {
                        id: "7", title: "回帰分析", description: "線形回帰モデル・最小二乗法・モデル診断・一般化線形モデル",
                        sections: [
                            { id: "7.1", title: "線形回帰モデルの定式化", description: "設計行列による行列表現、ガウス-マルコフの仮定" },
                            { id: "7.2", title: "最小二乗推定量の性質", description: "OLS 推定量の導出、ガウス-マルコフの定理の証明" },
                            { id: "7.3", title: "回帰モデルの検定と信頼域", description: "係数の t 検定・F 検定、予測区間と信頼区間" },
                            { id: "7.4", title: "モデル選択と診断", description: "決定係数・自由度調整済み決定係数、残差分析・多重共線性の診断" },
                            { id: "7.5", title: "一般化線形モデルの概観", description: "指数型分布族・リンク関数の定義、ロジスティック回帰・ポアソン回帰の例" }
                        ]
                    }
                ],
                prerequisites: ["3-7"]
            },
            {
                id: "4-17",
                title: "数理論理学II",
                chapters: [
                    {
                        id: "1", title: "計算可能性の理論", description: "原始再帰関数・一般再帰関数・チューリング機械・チャーチ-チューリングのテーゼ",
                        sections: [
                            { id: "1.1", title: "原始再帰関数の定義", description: "基本関数と合成・原始再帰スキームによる帰納的定義、計算例" },
                            { id: "1.2", title: "一般再帰関数とμ作用素", description: "μ再帰による部分再帰関数への拡張、全関数でない例" },
                            { id: "1.3", title: "チューリング機械の形式的定義", description: "状態・テープ・遷移関数による定義、計算の挙動" },
                            { id: "1.4", title: "万能チューリング機械", description: "チューリング機械を入力として模倣する機械の構成" },
                            { id: "1.5", title: "チャーチ-チューリングのテーゼ", description: "各計算モデルの同値性と「計算可能性」の意味" }
                        ]
                    },
                    {
                        id: "2", title: "決定不可能性と計算複雑性", description: "停止問題・対角線論法・r.e. 集合・簡約",
                        sections: [
                            { id: "2.1", title: "停止問題の決定不可能性", description: "対角線論法による証明と直感的意味" },
                            { id: "2.2", title: "再帰的集合と再帰的可算集合", description: "決定可能・半決定可能の定義、r.e. 集合の例" },
                            { id: "2.3", title: "多対一簡約とチューリング簡約", description: "問題の難易度の比較、簡約による決定不可能性の伝播" },
                            { id: "2.4", title: "算術的階層", description: "Σ_n・Π_n による集合の複雑さの分類、停止問題の位置づけ" }
                        ]
                    },
                    {
                        id: "3", title: "ゲーデル不完全性定理の詳細", description: "ゲーデル数化・表現可能性・対角補題・第一・第二不完全性定理の証明",
                        sections: [
                            { id: "3.1", title: "ゲーデル数化の構成", description: "記号・論理式・証明列の自然数への符号化の詳細" },
                            { id: "3.2", title: "原始再帰的述語と表現可能性", description: "PA で表現可能な述語の定義、証明関係の表現可能性" },
                            { id: "3.3", title: "対角補題", description: "自己言及する文の構成定理の証明とゲーデル文・タルスキの定理への応用" },
                            { id: "3.4", title: "第一不完全性定理の証明", description: "ゲーデル文の構成と PA の無矛盾性からの決定不能性の導出" },
                            { id: "3.5", title: "第二不完全性定理の証明の概略", description: "形式化可能性条件（デリヴァビリティ条件）と証明の流れ" },
                            { id: "3.6", title: "証明論的帰結", description: "ω無矛盾性と単純無矛盾性の差異、ロッサーの改良版の主張" }
                        ]
                    },
                    {
                        id: "4", title: "モデル理論", description: "コンパクト性定理の応用・超積・量化子消去・モデル完全性",
                        sections: [
                            { id: "4.1", title: "コンパクト性定理の応用", description: "非標準モデルの存在、グラフへの応用、有限近似の論法" },
                            { id: "4.2", title: "レーベンハイム-スコーレムの定理の詳細", description: "上方・下方定理の証明と「スコーレムのパラドックス」の解消" },
                            { id: "4.3", title: "超フィルターと超積の構成", description: "超フィルターの定義・存在、超積の構成とロスの定理の証明" },
                            { id: "4.4", title: "量化子消去", description: "稠密線形順序・代数的閉体における量化子消去の手順と完全性" },
                            { id: "4.5", title: "モデル完全性と model companion", description: "モデル完全性の定義、実閉体の例" }
                        ]
                    },
                    {
                        id: "5", title: "安定性理論", description: "型空間・安定理論・ω安定理論・モデルの分類",
                        sections: [
                            { id: "5.1", title: "型空間の定義", description: "完全型の定義、型空間 S_n(T) の位相的構造" },
                            { id: "5.2", title: "安定理論の基礎", description: "安定性の定義と特徴づけ、分岐の概念の導入" },
                            { id: "5.3", title: "ω安定理論", description: "ω安定性の定義、ω安定理論での型のランクとモレーランク" },
                            { id: "5.4", title: "モレーの圏性定理", description: "ω安定理論の可算モデルの圏性、モデル分類プログラムの概観" }
                        ]
                    },
                    {
                        id: "6", title: "証明論", description: "シーケント計算・カット除去・証明論的順序数・ゲンツェンの無矛盾性証明",
                        sections: [
                            { id: "6.1", title: "シーケント計算", description: "ゲンツェンの LK・LJ の定義と自然演繹との対応" },
                            { id: "6.2", title: "カット除去定理", description: "主要定理の主張・証明の概略・部分式性質への帰結" },
                            { id: "6.3", title: "証明論的順序数", description: "証明の「強さ」を順序数で測る枠組み、ε_0 の定義" },
                            { id: "6.4", title: "ゲンツェンの無矛盾性証明", description: "ε_0 までの超限帰納法を用いた PA の無矛盾性証明の概略" },
                            { id: "6.5", title: "発展分野への展望", description: "超積と超準解析の接続、カリー-ハワード対応と型理論への橋渡し" }
                        ]
                    }
                ],
                prerequisites: ["3-14"]
            }
        ]
    },
    {
        id: "stage-5",
        title: "Stage-5：より専門的な数学",
        topics: [
            {
                id: "5-1",
                title: "調和解析",
                chapters: [
                    {
                        id: "1", title: "フーリエ解析の深化", description: "L^p フーリエ変換・ハウスドルフ-ヤングの不等式・リース-トーリンの補間定理",
                        sections: [
                            { id: "1.1", title: "L^1 と L^2 のフーリエ変換の復習と統合", description: "微分方程式II の復習、リーマン-ルベーグの補題の精密化" },
                            { id: "1.2", title: "ハウスドルフ-ヤングの不等式", description: "フーリエ変換の L^p から L^{p'} への有界性の証明" },
                            { id: "1.3", title: "リース-トーリンの補間定理", description: "複素補間法による L^p 有界性の補間定理の証明" },
                            { id: "1.4", title: "マルチンケヴィッチの補間定理", description: "弱型有界性からの強型有界性の導出" }
                        ]
                    },
                    {
                        id: "2", title: "シュワルツ空間と超関数", description: "シュワルツ空間・テンパード超関数・フーリエ変換の連続性・分布",
                        sections: [
                            { id: "2.1", title: "シュワルツ空間 S(R^n) の定義と位相", description: "急減少関数の定義、半ノルムによる位相とその完備性" },
                            { id: "2.2", title: "シュワルツ空間上のフーリエ変換", description: "S(R^n) 上の同型としてのフーリエ変換の証明" },
                            { id: "2.3", title: "テンパード超関数 S'(R^n)", description: "連続線形汎関数としての定義、正則関数・多項式・デルタ関数の包含" },
                            { id: "2.4", title: "超関数の微分とフーリエ変換", description: "弱微分の定義、フーリエ変換と微分の交換公式" },
                            { id: "2.5", title: "コンパクト台をもつ分布 E' と空間 D'", description: "テスト関数空間 D の定義、S' ⊃ E' ⊃ D' の包含関係" }
                        ]
                    },
                    {
                        id: "3", title: "特異積分とカルデロン-ジゴムンドの理論", description: "主値積分・カルデロン-ジゴムンド作用素・BMO 空間",
                        sections: [
                            { id: "3.1", title: "主値積分とヒルベルト変換", description: "コーシーの主値の定義、ヒルベルト変換の L^p 有界性の証明" },
                            { id: "3.2", title: "カルデロン-ジゴムンド核", description: "標準的カルデロン-ジゴムンド核の条件、リースポテンシャルの例" },
                            { id: "3.3", title: "カルデロン-ジゴムンド作用素の L^p 有界性", description: "弱 (1,1) 型有界性と補間による L^p 有界性" },
                            { id: "3.4", title: "ハーディ空間 H^1 と BMO 空間", description: "L^1 の代替としての H^1、BMO の定義と H^1 との双対性" }
                        ]
                    },
                    {
                        id: "4", title: "擬微分作用素", description: "記号クラス・擬微分作用素の定義・積の公式・楕円型作用素への応用",
                        sections: [
                            { id: "4.1", title: "記号クラス S^m_{ρ,δ} の定義", description: "振幅記号の微分条件による記号クラスの定義と例" },
                            { id: "4.2", title: "擬微分作用素の定義", description: "振動積分による作用素の定義、S(R^n) 上の連続性" },
                            { id: "4.3", title: "記号の積と合成公式", description: "擬微分作用素の合成の記号展開、可換性の誤差評価" },
                            { id: "4.4", title: "楕円型記号と逆作用素", description: "楕円型の定義、パラメトリックスの構成、正則性定理への応用" }
                        ]
                    },
                    {
                        id: "5", title: "ウェーブレット理論", description: "多重解像度解析・ウェーブレット基底・ウェーブレット変換",
                        sections: [
                            { id: "5.1", title: "多重解像度解析の定義", description: "スケーリング関数・多重解像度解析の公理と構成" },
                            { id: "5.2", title: "スケーリング関数とウェーブレット", description: "マザーウェーブレットの構成、直交ウェーブレット基底の存在" },
                            { id: "5.3", title: "ダウベシーウェーブレット", description: "コンパクト台をもつ滑らかなウェーブレットの構成" },
                            { id: "5.4", title: "連続ウェーブレット変換", description: "群論的定式化、アドミッシビリティ条件と逆変換公式" }
                        ]
                    },
                    {
                        id: "6", title: "調和解析の応用", description: "分散型方程式への応用・フーリエ制限問題・解析的数論への接続",
                        sections: [
                            { id: "6.1", title: "ストリッカーツ評価と分散型方程式", description: "非線形シュレーディンガー方程式への L^p 時空評価の適用" },
                            { id: "6.2", title: "フーリエ制限問題", description: "球面・放物面への制限作用素の有界性、ステインの制限予想の概観" },
                            { id: "6.3", title: "指数和と解析的数論", description: "指数和の L^p 評価、ヴァイル和・円周法の概観" },
                            { id: "6.4", title: "ポアンカレ群と調和解析", description: "非可換調和解析の概観、ランダム行列理論・作用素環論 との接続" }
                        ]
                    }
                ],
                prerequisites: ["3-5", "4-1"]
            },
            {
                id: "5-2",
                title: "偏微分方程式",
                chapters: [
                    {
                        id: "1", title: "ソボレフ空間", description: "弱微分・W^{k,p} 空間・埋め込み定理・トレース定理",
                        sections: [
                            { id: "1.1", title: "弱微分の定義", description: "分布の意味での微分、テスト関数と積分による弱微分の定義" },
                            { id: "1.2", title: "ソボレフ空間 W^{k,p} の定義とノルム", description: "弱微分を用いた W^{k,p} の構成、完備性の証明" },
                            { id: "1.3", title: "近似定理と密度", description: "滑らかな関数の稠密性定理、コンパクト台をもつ関数による近似" },
                            { id: "1.4", title: "ソボレフの埋め込み定理", description: "W^{k,p} から C^m や L^q への連続埋め込みの条件と証明" },
                            { id: "1.5", title: "リリッヒ-コンドラショフのコンパクト埋め込み定理", description: "低次ソボレフ空間へのコンパクト埋め込みの証明" },
                            { id: "1.6", title: "トレース定理", description: "境界上への制限写像の有界性、境界値の意味づけ" }
                        ]
                    },
                    {
                        id: "2", title: "楕円型方程式", description: "弱解・ラックス-ミルグラムの定理・正則性・最大値原理・固有値問題",
                        sections: [
                            { id: "2.1", title: "弱定式化とテスト関数", description: "変分形式の導出、弱解の定義と古典解との関係" },
                            { id: "2.2", title: "ラックス-ミルグラムの定理", description: "強圧的双線形形式による弱解の存在と一意性の証明" },
                            { id: "2.3", title: "楕円型作用素の正則性理論", description: "内部正則性・境界正則性の定理の主張と証明の概略" },
                            { id: "2.4", title: "最大値原理", description: "弱・強最大値原理の証明、一意性への応用" },
                            { id: "2.5", title: "固有値問題", description: "コンパクト埋め込みによるスペクトルの離散性、固有関数展開" }
                        ]
                    },
                    {
                        id: "3", title: "放物型方程式", description: "熱方程式・弱解・エネルギー法・半群理論・熱核",
                        sections: [
                            { id: "3.1", title: "熱方程式の弱定式化", description: "放物型の弱解の定義、ガレルキン法による近似解の構成" },
                            { id: "3.2", title: "エネルギー法と一意性", description: "エネルギー等式の導出、弱解の一意性の証明" },
                            { id: "3.3", title: "半群理論との接続", description: "生成作用素としてのラプラシアン、解半群の定義と性質" },
                            { id: "3.4", title: "熱核と基本解", description: "全空間での熱核の構成、ガウス型減衰・最大値原理との関係" },
                            { id: "3.5", title: "放物型方程式の正則性", description: "時間・空間の正則性の向上定理の主張" }
                        ]
                    },
                    {
                        id: "4", title: "双曲型方程式", description: "波動方程式・エネルギー法・有限伝播速度・コーシー問題",
                        sections: [
                            { id: "4.1", title: "波動方程式のコーシー問題", description: "弱解の定義、エネルギー保存則の導出" },
                            { id: "4.2", title: "エネルギー法と一意性", description: "エネルギー法による一意性の証明" },
                            { id: "4.3", title: "有限伝播速度", description: "依存領域・影響領域の定義、有限伝播速度の証明" },
                            { id: "4.4", title: "基本解と解の表示", description: "奇数・偶数次元でのキルヒホッフ・ポアソンの公式" }
                        ]
                    },
                    {
                        id: "5", title: "変分法の直接法", description: "弱下半連続性・強圧性・最小化問題・オイラー-ラグランジュ方程式",
                        sections: [
                            { id: "5.1", title: "変分問題の定式化", description: "エネルギー汎関数の最小化問題としての PDE の定式化" },
                            { id: "5.2", title: "弱下半連続性と強圧性", description: "弱収束のもとでの汎関数の下半連続性の条件と証明" },
                            { id: "5.3", title: "最小化定理", description: "強圧的・弱下半連続な汎関数の最小元の存在定理の証明" },
                            { id: "5.4", title: "オイラー-ラグランジュ方程式の導出", description: "最小化元が満たす弱形 PDE の導出" },
                            { id: "5.5", title: "山岳定理と非線形楕円型方程式", description: "パレ-スメイルの条件、山岳定理の主張と応用例" }
                        ]
                    },
                    {
                        id: "6", title: "非線形偏微分方程式の概観", description: "非線形楕円型・非線形放物型・衝撃波・粘性解",
                        sections: [
                            { id: "6.1", title: "非線形楕円型方程式", description: "固定点定理・単調作用素法による弱解の存在定理の概観" },
                            { id: "6.2", title: "反応拡散方程式", description: "非線形放物型方程式の爆発現象・定常解の安定性の概観" },
                            { id: "6.3", title: "保存則と衝撃波", description: "スカラー保存則の弱解・ランキン-ユゴニオ条件・エントロピー条件" },
                            { id: "6.4", title: "粘性解", description: "ハミルトン-ヤコビ方程式に対する粘性解の定義と一意性定理の主張" }
                        ]
                    }
                ],
                prerequisites: ["3-6", "4-1"]
            },
            {
                id: "5-3",
                title: "確率的偏微分方程式",
                chapters: [
                    {
                        id: "1", title: "無限次元確率解析の基礎", description: "関数空間上のガウス測度、ウィーナー空間、無限次元伊藤積分の準備",
                        sections: [
                            { id: "1.1", title: "関数空間上のガウス測度", description: "ヒルベルト空間上のガウス測度の定義、共分散作用素、円柱集合関数とミンロスの定理" },
                            { id: "1.2", title: "抽象ウィーナー空間とキャメロン-マーティン空間", description: "ヒルベルト空間からバナッハ空間への包含の定義、再生核ヒルベルト空間としての役割、確率過程論 のブラウン運動の関数解析的位置づけ" },
                            { id: "1.3", title: "ヒルベルト空間上のウィーナー過程と円柱ウィーナー過程", description: "核作用素によるブラウン運動の定義、円柱ウィーナー過程の概念と構成" },
                            { id: "1.4", title: "ヒルベルト空間値確率変数の基本性質", description: "可測性・可積分性・条件付き期待値、ボホナー積分と空間の完備性" }
                        ]
                    },
                    {
                        id: "2", title: "ヒルベルト空間値確率積分と伊藤の公式", description: "無限次元ウィーナー過程に関する作用素値確率積分、無限次元伊藤の公式",
                        sections: [
                            { id: "2.1", title: "初等過程の確率積分", description: "ヒルベルト・シュミット型ノルムの定義、単純予測可能過程に対する確率積分の等長性" },
                            { id: "2.2", title: "確率積分の拡張と伊藤等長", description: "自乗可積分マルチンゲールへの拡張、有限次元伊藤積分との対比" },
                            { id: "2.3", title: "無限次元伊藤の公式", description: "ヒルベルト空間値の伊藤過程に対する微分公式、トレース項の出現と有限次元版との相違" },
                            { id: "2.4", title: "確率コンボリューション", description: "半群に対する確率コンボリューションの定義と正則性評価" }
                        ]
                    },
                    {
                        id: "3", title: "SPDEの定式化と解の概念", description: "マイルド解・弱解・強解の定義と相互関係、抽象発展方程式としての枠組み",
                        sections: [
                            { id: "3.1", title: "抽象的確率発展方程式", description: "方程式の形式と各項の意味、解析的半群への要請" },
                            { id: "3.2", title: "マイルド解の定義", description: "確率コンボリューションを用いた変分定数法による定義、決定論的マイルド解との対比" },
                            { id: "3.3", title: "弱解と強解の定義", description: "試験関数に対する積分等式としての弱解、病理的な正則性要求の回避" },
                            { id: "3.4", title: "解の概念の同値性条件", description: "マイルド解・弱解・強解の間の包含関係と同値となる十分条件の整理" }
                        ]
                    },
                    {
                        id: "4", title: "放物型 SPDE の解の存在と正則性", description: "確率熱方程式を中心とした加法的・乗法的ノイズの解析、時空間ヘルダー正則性",
                        sections: [
                            { id: "4.1", title: "加法的ノイズの確率熱方程式", description: "マイルド解の構成、空間内での存在と一意性の証明" },
                            { id: "4.2", title: "リプシッツ係数の場合の大域解", description: "バナッハの不動点定理によるマイルド解の存在定理、グロンウォールの補題の確率版" },
                            { id: "4.3", title: "時空間ヘルダー正則性", description: "コルモゴロフの連続性定理の無限次元版、解の経路のヘルダー指数の評価" },
                            { id: "4.4", title: "ウォルシュの確率積分と空間相関ノイズ", description: "白色雑音と色つきノイズの区別、ウォルシュの積分核アプローチとの関係" },
                            { id: "4.5", title: "乗法的ノイズと局所解", description: "非リプシッツ係数、爆発時刻と局所存在定理、最大解の概念" }
                        ]
                    },
                    {
                        id: "5", title: "特異 SPDE と正則構造の理論", description: "KPZ 方程式・Φ^4 方程式に代表される超臨界的特異 SPDE、ハイラーの正則構造とグビネリらのパラコントロールド分布",
                        sections: [
                            { id: "5.1", title: "特異 SPDE とは何か", description: "KPZ 方程式に代表される非線形項の形式と繰り込みの必要性、古典的解析の破綻" },
                            { id: "5.2", title: "粗路解析の枠組み", description: "粗路の定義とシグネチャ、リオンズの定理、伊藤積分と粗路積分の対比" },
                            { id: "5.3", title: "パラコントロールド分布", description: "ボニーのパラ積の復習、グビネリ-イムケラー-ペルカウスキーによるパラコントロールド解の定義" },
                            { id: "5.4", title: "ハイラーの正則構造", description: "モデルの定義、抽象的なテイラー展開、再正規化群としての再構成写像" },
                            { id: "5.5", title: "KPZ 方程式と Φ^4 方程式への応用", description: "正則構造・パラコントロールド分布による解の構成と一意性、ウィック積と繰り込み定数" },
                            { id: "5.6", title: "再正規化手続きの数学的意味", description: "BPHZ再正規化の概念、正則構造における抽象的繰り込みとその物理的対応" }
                        ]
                    },
                    {
                        id: "6", title: "双曲型・楕円型 SPDE と不変測度", description: "確率波動方程式、楕円型 SPDE、不変測度の存在と一意性、エルゴード性",
                        sections: [
                            { id: "6.1", title: "確率波動方程式", description: "エネルギー法による解の存在、波動方程式との対比" },
                            { id: "6.2", title: "楕円型 SPDE と定常分布", description: "確率的摂動を受けた楕円型作用素の理論" },
                            { id: "6.3", title: "不変測度の存在", description: "タイトネスとクリロフ-ボゴリュボフの手法、コンパクト埋め込みの活用" },
                            { id: "6.4", title: "一意性と指数混合", description: "強フェラー性と既約性による不変測度の一意性定理、ドゥーブの定理" },
                            { id: "6.5", title: "エルゴード理論 との接続", description: "SPDE が生成するマルコフ半群のエルゴード性、スペクトルギャップ" }
                        ]
                    },
                    {
                        id: "7", title: "展望と応用", description: "確率的流体力学、確率的幾何学的流れ、機械学習との接続",
                        sections: [
                            { id: "7.1", title: "確率的ナビエ-ストークス方程式", description: "2次元における大域解の存在、3次元の未解決問題" },
                            { id: "7.2", title: "確率的幾何学的流れ", description: "確率的リッチフロー・平均曲率流の定義と解析の現状" },
                            { id: "7.3", title: "平均場 SPDE とマッキーン-ヴラソフ方程式", description: "大数系の極限としてのマッキーン-ヴラソフ SPDE、粒子近似と伝播的カオスの概念" },
                            { id: "7.4", title: "数理ファイナンス への接続", description: "確率ボラティリティモデルの SPDE 的定式化、無限次元ヒース-ジャロー-モートン方程式" }
                        ]
                    }
                ],
                prerequisites: ["4-15", "5-2"]
            },
            {
                id: "5-4",
                title: "ランダム行列理論",
                chapters: [
                    {
                        id: "1", title: "ランダム行列のアンサンブル", description: "古典的なアンサンブルの定義とその対称性、ヴァンデルモンド行列式",
                        sections: [
                            { id: "1.1", title: "ランダム行列とは何か", description: "行列の各成分が確率変数であるという設定、決定論的行列理論との違い" },
                            { id: "1.2", title: "古典的アンサンブルの定義", description: "ユニタリ・直交・シンプレクティック対称性によるガウス型アンサンブルの分類" },
                            { id: "1.3", title: "固有値の同時密度", description: "正方行列の固有値の同時確率密度関数の導出、ヴァンデルモンド行列式の出現" },
                            { id: "1.4", title: "相互反発ポテンシャルの描像", description: "固有値密度の対数型反発項、対称性指数とアンサンブルの対応" }
                        ]
                    },
                    {
                        id: "2", title: "経験的スペクトル分布と大域極限則", description: "ヴィグナーの半円則、マルチェンコ-パストゥール則、モーメント法とスティルチェス変換法",
                        sections: [
                            { id: "2.1", title: "経験的スペクトル分布の定義", description: "固有値が定める経験測度の定義、弱収束の意味でのスペクトル極限則" },
                            { id: "2.2", title: "ヴィグナーの半円則", description: "トレース公式のグラフ的評価、非交差対合と半円分布の関係" },
                            { id: "2.3", title: "スティルチェス変換による証明", description: "スティルチェス変換の自己整合方程式の導出、半円則の別証明" },
                            { id: "2.4", title: "マルチェンコ-パストゥール則", description: "ウィシャート行列の経験的スペクトル分布の極限、次元比の効果" },
                            { id: "2.5", title: "対数ポテンシャルと平衡測度", description: "経験的固有値分布の変分問題としての特徴づけ、平衡測度の存在と一意性" }
                        ]
                    },
                    {
                        id: "3", title: "自由確率論", description: "フリー独立性・非可換確率空間・R変換・S変換・自由中心極限定理",
                        sections: [
                            { id: "3.1", title: "非可換確率空間とフリー独立性", description: "トレース状態を持つ非可換確率空間の定義、フリー独立性の混合キュムラントによる特徴づけ" },
                            { id: "3.2", title: "フリーキュムラントと R 変換", description: "古典的キュムラントとの類比、R 変換の定義と加法性、自由畳み込みの計算" },
                            { id: "3.3", title: "S 変換と自由乗法的畳み込み", description: "乗法的な自由畳み込みに対応する S 変換の定義と乗法性" },
                            { id: "3.4", title: "自由中心極限定理と半円分布", description: "フリー独立同分布列の部分和の正規化極限が半円分布になることの証明" },
                            { id: "3.5", title: "ランダム行列モデルとの対応", description: "大規模ガウス型アンサンブルのフリー独立性、ボイチュレスクの漸近的フリー独立性定理の主張" },
                            { id: "3.6", title: "作用素環論 への展望", description: "フォン・ノイマン環の同型問題とフリーエントロピーの役割" }
                        ]
                    },
                    {
                        id: "4", title: "局所統計とユニバーサリティ", description: "相関核・行列式点過程・バルクとエッジのスケーリング極限・ユニバーサリティ定理",
                        sections: [
                            { id: "4.1", title: "行列式点過程", description: "相関関数の行列式構造、核による完全な統計の決定" },
                            { id: "4.2", title: "ガウス型アンサンブルの相関核と直交多項式", description: "エルミート直交多項式と相関核の関係、クリストッフェル-ダルブーの公式" },
                            { id: "4.3", title: "バルクのスケーリング極限", description: "平均間隔で規格化した固有値間隔分布のサイン核への収束" },
                            { id: "4.4", title: "エッジのスケーリング極限とエアリー核", description: "最大固有値のトレーシー-ウィダム分布、エアリー核への収束" },
                            { id: "4.5", title: "ユニバーサリティ定理", description: "ガウス型以外のアンサンブル・ウィグナー行列での局所統計の普遍性、タオ-ヴらの結果の概観" }
                        ]
                    },
                    {
                        id: "5", title: "直交多項式法とリーマン-ヒルベルト問題", description: "直交多項式の三項漸化式・漸近解析・リーマン-ヒルベルト問題による厳密解析",
                        sections: [
                            { id: "5.1", title: "直交多項式と分配関数", description: "ランダム行列の分配関数の直交多項式による因子化、平均固有値間隔の計算への応用" },
                            { id: "5.2", title: "直交多項式の漸近解析", description: "プランシュレル-ロータッハ漸化式、バルクとエッジでの漸近挙動の相違" },
                            { id: "5.3", title: "リーマン-ヒルベルト問題の定式化", description: "フォーカス-イッツ-キタエフの定式化、直交多項式を境界値問題の解として特徴づけること" },
                            { id: "5.4", title: "急降下法", description: "ダイフト-ゾウの非線形最急降下法の概略、スペクトル曲線と補助関数の役割" },
                            { id: "5.5", title: "強漸近公式とユニバーサリティへの応用", description: "境界値問題解析による厳密漸近公式の導出、スケーリング極限の証明への接続" }
                        ]
                    },
                    {
                        id: "6", title: "展望と応用", description: "解析的数論・量子カオス・統計物理・機械学習との接続",
                        sections: [
                            { id: "6.1", title: "L 関数の零点統計との類比", description: "モンゴメリーの対相関予想とガウス型アンサンブルの対相関の一致、解析的数論への接続" },
                            { id: "6.2", title: "量子カオスと普遍性予想", description: "積分可能系と量子カオス系のスペクトル統計の違い、普遍性予想の概観、数理物理学への展望" },
                            { id: "6.3", title: "ランダム行列と統計物理", description: "2次元ヤン-バクスター方程式との対応、KPZ クラスの普遍性" },
                            { id: "6.4", title: "機械学習への接続", description: "深層ニューラルネットワークの重み行列のスペクトル解析、マルチェンコ-パストゥール則の応用" }
                        ]
                    }
                ],
                prerequisites: ["3-7", "4-1"]
            },
            {
                id: "5-5",
                title: "多変数複素解析",
                chapters: [
                    {
                        id: "1", title: "多変数正則関数の基礎", description: "多変数空間上の正則関数、コーシー積分公式の一般化、ハルトークスの拡張定理",
                        sections: [
                            { id: "1.1", title: "多変数正則関数の定義", description: "各変数に関するコーシー-リーマン方程式の同時成立、べき級数展開との同値性" },
                            { id: "1.2", title: "多変数コーシー積分公式", description: "ポリディスク上のコーシー積分公式、一変数版との構造的違い" },
                            { id: "1.3", title: "ハルトークスの拡張定理", description: "多変数では孤立特異点が除去可能であることの主張と証明の概略、一変数との本質的相違" },
                            { id: "1.4", title: "収束域と完全ラインハルト領域", description: "べき級数の収束域がラインハルト領域になること、対数凸性との関係" }
                        ]
                    },
                    {
                        id: "2", title: "擬凸性と正則領域", description: "正則凸性・擬凸性・レヴィ擬凸性、レヴィ問題",
                        sections: [
                            { id: "2.1", title: "正則凸領域の定義", description: "正則関数による凸性、正則包の定義と一変数での自明性との対比" },
                            { id: "2.2", title: "多重劣調和関数", description: "多重劣調和性の定義、擬凸領域の特徴づけとしての役割" },
                            { id: "2.3", title: "レヴィ擬凸性", description: "境界の滑らかな領域における複素ヘッセ行列による擬凸性の定義、レヴィ形式" },
                            { id: "2.4", title: "レヴィ問題とその解決", description: "擬凸領域・正則領域・岡擬凸域の同値性、岡潔らによる解決の歴史" }
                        ]
                    },
                    {
                        id: "3", title: "岡の連接定理と層コホモロジー", description: "正則関数の層・岡の連接定理・カルタンの定理A・B",
                        sections: [
                            { id: "3.1", title: "正則関数の層と連接層", description: "正則関数層の定義、連接層の概念と有限生成の条件" },
                            { id: "3.2", title: "岡の連接定理", description: "正則関数の零集合が定める関係イデアル層の連接性、多変数正則関数の特殊性" },
                            { id: "3.3", title: "カルタンの定理 A・B", description: "スタイン多様体上での連接層の大域切断の生成と高次コホモロジーの消滅" },
                            { id: "3.4", title: "ドルボーコホモロジーと層コホモロジーの比較", description: "微分形式のコホモロジーとチェックコホモロジーの同一視、GAGA 定理への展望" }
                        ]
                    },
                    {
                        id: "4", title: "ドルボー方程式とホルマンダーの L² 定理", description: "∂ 作用素の L² 理論、多重劣調和関数の重み、岡-カルタン理論の L² 的再定式化",
                        sections: [
                            { id: "4.1", title: "∂ 作用素と微分形式", description: "多様体上の複素微分形式の定義、∂ 作用素とドルボー複体" },
                            { id: "4.2", title: "ドルボー方程式の可解性問題", description: "方程式の解の存在、可解条件の意味" },
                            { id: "4.3", title: "ホルマンダーの L² 推定", description: "多重劣調和関数の重みを用いた L² 推定の主張、曲率条件としての多重劣調和性の役割" },
                            { id: "4.4", title: "L² 定理の帰結", description: "擬凸領域上での方程式の L² 解の存在定理、カルタンの定理 B の L² 的証明" },
                            { id: "4.5", title: "オーバードボーズの補題と応用", description: "L² 推定から正則関数の点評価への応用、再生核ヒルベルト空間としてのベルグマン空間" }
                        ]
                    },
                    {
                        id: "5", title: "スタイン多様体と q-凸多様体", description: "スタイン多様体の定義と特徴づけ、グラウエルト・アンドレオッティ-フランケルの定理",
                        sections: [
                            { id: "5.1", title: "スタイン多様体の定義", description: "正則関数の十分性・全正則性・正則凸性の三条件、代表例の列挙" },
                            { id: "5.2", title: "スタイン多様体の特徴づけ", description: "グラウエルトによる厳密多重劣調和関数の存在との同値性" },
                            { id: "5.3", title: "アンドレオッティ-フランケルの定理", description: "スタイン多様体が対応する胞体複体のホモトピー型をもつこと、シンプレクティック幾何への展望" },
                            { id: "5.4", title: "q-完備多様体とモース理論の類比", description: "q-凸関数と q-完備性の定義、多変数複素解析におけるモース理論的視点" }
                        ]
                    },
                    {
                        id: "6", title: "多変数複素解析の展望", description: "GAGA 定理・多変数留数・複素幾何学との接続",
                        sections: [
                            { id: "6.1", title: "GAGA 定理の概観", description: "射影的複素多様体の解析的コホモロジーと代数的コホモロジーの同値、代数幾何 II への接続" },
                            { id: "6.2", title: "多変数留数理論", description: "コーシー留数公式の高次元類似、残留コホモロジーと積分公式" },
                            { id: "6.3", title: "複素多様体のベルグマン核", description: "ベルグマン核の不変性と自己同型群の研究、境界正則性との関係" },
                            { id: "6.4", title: "CR 多様体と境界問題", description: "実超曲面上の CR 構造の定義、接境界複体と境界の解析" }
                        ]
                    }
                ],
                prerequisites: ["4-2", "4-5"]
            },
            {
                id: "5-6",
                title: "解析的数論",
                chapters: [
                    {
                        id: "1", title: "ディリクレ級数とその解析的性質", description: "ディリクレ級数の収束域・解析的延長・積分表示、オイラー積",
                        sections: [
                            { id: "1.1", title: "ディリクレ級数の収束", description: "絶対収束域・条件収束域の定義、収束判定の横座標と解析関数としての基本性質" },
                            { id: "1.2", title: "オイラー積と乗法的関数", description: "完全乗法的関数・乗法的関数の定義、ディリクレ級数のオイラー積表示と素数との橋渡し" },
                            { id: "1.3", title: "パーセヴァルの等式とディリクレ級数の積分表示", description: "メリン変換との関係、ディリクレ級数係数の抽出としてのペロンの公式の準備" },
                            { id: "1.4", title: "ディリクレ級数の乗法と合成", description: "ディリクレ級数の畳み込み積、メビウス関数と反転公式" }
                        ]
                    },
                    {
                        id: "2", title: "リーマンゼータ関数", description: "解析接続・関数等式・非自明な零点の分布、零点のない領域",
                        sections: [
                            { id: "2.1", title: "ゼータ関数の定義とオイラー積", description: "絶対収束域における定義、素数との直接的な繋がり" },
                            { id: "2.2", title: "解析接続と関数等式", description: "ガンマ関数を用いた補完ゼータ関数の定義、対称性の証明" },
                            { id: "2.3", title: "非自明な零点と臨界帯", description: "臨界帯内の零点の存在、零点を数える関数の漸近評価" },
                            { id: "2.4", title: "零点のない領域の確立", description: "ド・ラ・ヴァレ・プーサンの零点なし領域の証明、素数定理の証明への道筋" },
                            { id: "2.5", title: "リーマン予想", description: "特定の直線への零点集中の予想、未解決問題としての現状と数論への帰結" }
                        ]
                    },
                    {
                        id: "3", title: "素数定理", description: "チェビシェフ関数・ペロンの公式・素数定理の解析的証明",
                        sections: [
                            { id: "3.1", title: "チェビシェフ関数と素数計数関数の関係", description: "フォン・マンゴルト関数の定義、両関数の漸近的な同値性" },
                            { id: "3.2", title: "ペロンの公式", description: "ディリクレ級数の係数和とメリン逆変換の関係、チェビシェフ関数の積分表示" },
                            { id: "3.3", title: "素数定理の解析的証明の概略", description: "臨界線の境界上での零点の不在と素数定理の繋がり、輪郭積分による評価" },
                            { id: "3.4", title: "誤差項の評価", description: "零点なし領域の形状と誤差項の関係、リーマン予想仮定下での最良評価" }
                        ]
                    },
                    {
                        id: "4", title: "ディリクレ指標と L 関数", description: "原始指標・ガウス和・特殊値の非零証明、算術級数定理",
                        sections: [
                            { id: "4.1", title: "ディリクレ指標の定義と分類", description: "乗法的指標、主指標・原始指標・誘導指標の分類" },
                            { id: "4.2", title: "ガウス和", description: "指標のガウス和の定義、絶対値の計算、関数等式への寄与" },
                            { id: "4.3", title: "境界における特殊値の非零証明", description: "実指標と複素指標で場合分けした非零証明、ディリクレの算術級数定理への応用" },
                            { id: "4.4", title: "ディリクレの算術級数定理", description: "等差数列中の素数の無限性とその密度" },
                            { id: "4.5", title: "ジーゲル零点問題", description: "実指標の L 関数の臨界線近傍の零点の例外的ふるまい、ジーゲルの定理" }
                        ]
                    },
                    {
                        id: "5", title: "素数定理の精密化と素数分布", description: "算術級数の素数定理・明示公式・素数の間隔分布",
                        sections: [
                            { id: "5.1", title: "算術級数の素数定理", description: "等差数列に関する素数計数関数の漸近評価、ゼータ関数の対応物としての L 関数の役割" },
                            { id: "5.2", title: "リーマンの明示公式", description: "素数計数関数を零点の和で表す公式、零点と素数の振動の対応関係" },
                            { id: "5.3", title: "素数間隔分布とランダム行列", description: "ペア相関予想とモンゴメリーの定理、ランダム行列理論との類比" },
                            { id: "5.4", title: "双子素数予想と連続素数の間隔", description: "クラメルモデルによる予測、ジャン-メイナード定理の概観" }
                        ]
                    },
                    {
                        id: "6", title: "一般的な L 関数と展望", description: "デデキントゼータ関数・ヘッケ L 関数・ラングランズ対応への入口",
                        sections: [
                            { id: "6.1", title: "デデキントゼータ関数", description: "代数体の素イデアルによるオイラー積、解析的類数公式の主張" },
                            { id: "6.2", title: "ヘッケ L 関数とヘッケ指標", description: "代数体上の指標、リーマン・ディリクレ L 関数の共通の一般化" },
                            { id: "6.3", title: "ラングランズ対応への展望", description: "保型表現と L 関数の統一的定式化の概観、モジュラー形式・代数数論への接続" }
                        ]
                    }
                ],
                prerequisites: ["4-2"]
            },
            {
                id: "5-7",
                title: "モジュラー形式",
                chapters: [
                    {
                        id: "1", title: "上半平面とモジュラー群", description: "上半平面の双曲幾何・モジュラー群の作用・基本領域・カスプ",
                        sections: [
                            { id: "1.1", title: "上半平面と線形分数変換の作用", description: "上半平面の定義、メビウス変換による作用、双曲計量との整合性" },
                            { id: "1.2", title: "モジュラー群", description: "生成元の定義、射影特殊線形群としての作用" },
                            { id: "1.3", title: "基本領域の構成", description: "モジュラー群の基本領域の定義と具体的な形状、任意の点が基本領域内の点に同値であることの証明" },
                            { id: "1.4", title: "カスプと上半平面の完備化", description: "カスプと有理数部分の定義、位相的構造" }
                        ]
                    },
                    {
                        id: "2", title: "モジュラー形式の定義と基本例", description: "保型性・正則性・カスプでの消滅条件、アイゼンシュタイン級数",
                        sections: [
                            { id: "2.1", title: "モジュラー形式の定義", description: "重さに応じた変換則・上半平面上の正則性・カスプでの正則性の三条件" },
                            { id: "2.2", title: "カスプ形式の定義", description: "カスプでの消滅条件、カスプ形式の空間との関係" },
                            { id: "2.3", title: "アイゼンシュタイン級数", description: "具体的な級数の定義とフーリエ展開、モジュラー形式の生成元としての役割" },
                            { id: "2.4", title: "判別式関数と絶対不変量", description: "判別式関数の定義とカスプ形式であることの確認、絶対不変量の定義" },
                            { id: "2.5", title: "モジュラー形式の空間の次元公式", description: "リーマン-ロッホの定理を用いた空間の次元の計算、重さに応じた明示的な次元" }
                        ]
                    },
                    {
                        id: "3", title: "フーリエ展開とラマヌジャン予想", description: "フーリエ展開・フーリエ係数の代数的性質・ラマヌジャンのタウ関数",
                        sections: [
                            { id: "3.1", title: "フーリエ展開の定義", description: "指数関数を用いた展開、フーリエ係数の定義と収束" },
                            { id: "3.2", title: "ラマヌジャンのタウ関数", description: "判別式関数の展開係数として定義されるタウ関数、乗法性と漸化式" },
                            { id: "3.3", title: "ラマヌジャン予想", description: "タウ関数の絶対値の評価予想とドリーニュによる解決の概観、ヴェイユ予想との繋がり" },
                            { id: "3.4", title: "整数の分割関数との関係", description: "デデキントのイータ関数・テータ関数の定義、整数の表し方を数える等式のモジュラー形式による証明" }
                        ]
                    },
                    {
                        id: "4", title: "ヘッケ作用素", description: "ヘッケ作用素の定義・固有形式・L 関数のオイラー積分解",
                        sections: [
                            { id: "4.1", title: "ヘッケ作用素の定義", description: "二重剰余類を用いた作用素の定義、モジュラー形式の空間上の作用" },
                            { id: "4.2", title: "ヘッケ作用素の交換関係と代数構造", description: "作用素間の乗法性、ヘッケ代数の可換性" },
                            { id: "4.3", title: "正規化固有形式", description: "同時固有形式の定義、係数の正規化、ピーターソン内積との関係" },
                            { id: "4.4", title: "L 関数のオイラー積分解", description: "固有形式の L 関数のオイラー積表示、ディリクレ L 関数との構造的類比" },
                            { id: "4.5", title: "関数等式と解析接続", description: "L 関数の完備版の定義、関数等式の主張" }
                        ]
                    },
                    {
                        id: "5", title: "レベル構造と合同部分群", description: "合同部分群・新形式・オールドフォーム",
                        sections: [
                            { id: "5.1", title: "合同部分群の定義", description: "各種合同部分群の定義と包含関係、レベルの意味" },
                            { id: "5.2", title: "レベル付きモジュラー形式", description: "合同部分群に対する変換則、カスプの個数とリーマン面としての種数" },
                            { id: "5.3", title: "アトキン-レーナー理論と新形式", description: "オールドフォームとニューフォームの分解、新形式の定義と一意性" },
                            { id: "5.4", title: "ねじれ L 関数と指標", description: "ディリクレ指標によるモジュラー形式のねじれ、特性の性質" }
                        ]
                    },
                    {
                        id: "6", title: "モジュラー形式の応用と展望", description: "楕円曲線・谷山-志村-ワイルズ定理・虚数乗法・保型表現",
                        sections: [
                            { id: "6.1", title: "楕円曲線と保型形式", description: "楕円曲線の L 関数の定義、バーチ・スウィンナートン＝ダイアー予想の主張の概観" },
                            { id: "6.2", title: "谷山-志村-ワイルズ定理", description: "有理数体上の楕円曲線が対応するモジュラー形式を持つという定理の主張、フェルマーの最終定理への帰結" },
                            { id: "6.3", title: "虚数乗法と類体論", description: "虚二次体の類体がモジュラー関数の特殊値で生成されること、代数数論への接続" },
                            { id: "6.4", title: "保型表現とラングランズ対応への展望", description: "アデール群上の保型表現によるモジュラー形式の再定式化、表現論・代数数論との合流点" }
                        ]
                    }
                ],
                prerequisites: ["4-3", "5-6"]
            },
            {
                id: "5-8",
                title: "作用素環論",
                chapters: [
                    {
                        id: "1", title: "Cスター環の基礎", description: "定義・スペクトル・ゲルファント-ナイマークの定理・正値汎関数",
                        sections: [
                            { id: "1.1", title: "Cスター環の定義と例", description: "ノルム・対合演算・Cスター恒等式の定義、有界線形作用素のなす環と連続関数のなす環の基本例" },
                            { id: "1.2", title: "スペクトルとゲルファント変換の準備", description: "Cスター環のスペクトルの定義、スペクトル半径公式" },
                            { id: "1.3", title: "Cスター環の元の分類", description: "自己共役・正規・ユニタリ・射影元の定義と相互関係" },
                            { id: "1.4", title: "正値汎関数と状態", description: "正値汎関数・状態の定義、状態空間の凸構造と純粋状態" }
                        ]
                    },
                    {
                        id: "2", title: "可換 Cスター環", description: "ゲルファント変換・極大イデアル・コンパクト空間との対応・連続関数計算",
                        sections: [
                            { id: "2.1", title: "可換 Cスター環のゲルファント変換", description: "キャラクターの定義、ゲルファント変換による連続関数のなす環との同型定理" },
                            { id: "2.2", title: "コンパクトハウスドルフ空間との対応", description: "可換 Cスター環の圏と局所コンパクト空間の圏の同値" },
                            { id: "2.3", title: "連続関数計算", description: "正規元に対する連続関数計算の構成、スペクトル写像定理" },
                            { id: "2.4", title: "非可換トポロジーへの展望", description: "可換性の崩しとして非可換幾何学への動機づけ" }
                        ]
                    },
                    {
                        id: "3", title: "ゲルファント-ナイマーク-シーガル構成と表現論", description: "GNS構成・循環表現・普遍表現・ゲルファント-ナイマークの定理",
                        sections: [
                            { id: "3.1", title: "GNS構成の定義", description: "状態から内積空間を構成し、Cスター環の表現を得る手順の詳細" },
                            { id: "3.2", title: "循環ベクトルと既約表現", description: "循環ベクトルの定義、純粋状態と既約な表現の対応" },
                            { id: "3.3", title: "普遍GNS表現", description: "全状態の直和による普遍表現の構成" },
                            { id: "3.4", title: "ゲルファント-ナイマークの定理", description: "任意の Cスター環がヒルベルト空間上の作用素環に等長同型に埋め込めることの証明" }
                        ]
                    },
                    {
                        id: "4", title: "フォン・ノイマン環", description: "弱位相・強位相・二重交換子定理・因子分類",
                        sections: [
                            { id: "4.1", title: "弱位相・強位相の定義", description: "ヒルベルト空間上の作用素の各種位相の定義と包含関係" },
                            { id: "4.2", title: "フォン・ノイマン環の定義と二重交換子定理", description: "自己共役な部分代数の閉包、フォン・ノイマンの二重交換子定理の証明" },
                            { id: "4.3", title: "射影格子と型分類の準備", description: "射影の同値関係、比較定理、有限型・無限型の定義" },
                            { id: "4.4", title: "因子の分類", description: "I型・II型・III型因子の定義と代表例、超有限 II_1 因子の構成" }
                        ]
                    },
                    {
                        id: "5", title: "トレースとフォン・ノイマン次元", description: "トレース・標準トレース・次元・2乗可積分コホモロジーへの応用",
                        sections: [
                            { id: "5.1", title: "標準トレースの定義", description: "II_1 因子上のトレースの定義と一意性、トレースの正規性" },
                            { id: "5.2", title: "フォン・ノイマン次元の定義", description: "II_1 因子の加群に対する実数値次元の定義" },
                            { id: "5.3", title: "2乗可積分コホモロジーへの応用の概観", description: "L2ベッチ数の定義、リュックの定理の主張" },
                            { id: "5.4", title: "フリー確率論への展望", description: "フリー独立性の概念、フォン・ノイマン環の同型問題への接続" }
                        ]
                    },
                    {
                        id: "6", title: "Cスター環の K 理論", description: "K0群・K1群・ボット周期性・非可換幾何への接続",
                        sections: [
                            { id: "6.1", title: "K0群の定義", description: "射影の同値類による K0群の構成、安定化との関係" },
                            { id: "6.2", title: "K1群の定義", description: "ユニタリ元の同値類による K1群の構成" },
                            { id: "6.3", title: "ボット周期性定理", description: "K0群と K1群の間の周期性の主張と意義" },
                            { id: "6.4", title: "指数写像と6項完全系列", description: "Cスター環の完全系列から誘導される K 理論の長完全系列" },
                            { id: "6.5", title: "非可換幾何への展望", description: "コンヌの非可換幾何・スペクトル三重組の概観、微分幾何II との接続" }
                        ]
                    }
                ],
                prerequisites: ["4-1"]
            },
            {
                id: "5-9",
                title: "エルゴード理論",
                chapters: [
                    {
                        id: "1", title: "測度保存変換とエルゴード性", description: "測度保存変換・不変集合・エルゴード性・ポアンカレの再帰定理",
                        sections: [
                            { id: "1.1", title: "測度保存変換の定義と例", description: "確率測度空間上の自己同型としての定義、回転・シフト・ベーカー変換の例" },
                            { id: "1.2", title: "不変集合と不変関数", description: "不変集合の定義、エルゴード性の同値条件の列挙" },
                            { id: "1.3", title: "ポアンカレの再帰定理", description: "正測度集合への軌道の再帰性の証明と応用" },
                            { id: "1.4", title: "エルゴード性の例", description: "無理数回転のエルゴード性、ベルヌーイシフトのエルゴード性の証明" }
                        ]
                    },
                    {
                        id: "2", title: "エルゴード定理", description: "ビルホッフのエルゴード定理・フォン・ノイマンの平均エルゴード定理・収束速度",
                        sections: [
                            { id: "2.1", title: "フォン・ノイマンの平均エルゴード定理", description: "ユニタリ作用素の平均収束定理の証明、関数解析 との接続" },
                            { id: "2.2", title: "ビルホッフの個別エルゴード定理", description: "概収束定理の証明、極大エルゴード補題の役割" },
                            { id: "2.3", title: "サブ加法的エルゴード定理", description: "キングマンの定理の主張、リャプノフ指数への応用" },
                            { id: "2.4", title: "エルゴード定理の応用", description: "正規数の存在・一様分布定理・等分布定理への応用" }
                        ]
                    },
                    {
                        id: "3", title: "混合性の階層", description: "弱混合・強混合・K系・ベルヌーイ性・ヴォロコノフスキーの定理",
                        sections: [
                            { id: "3.1", title: "弱混合と強混合の定義", description: "相関関数による定義、エルゴード性・弱混合・強混合の包含関係" },
                            { id: "3.2", title: "スペクトル的特徴づけ", description: "ユニタリ作用素のスペクトルによる混合性の特徴づけ" },
                            { id: "3.3", title: "K系とベルヌーイ系", description: "コルモゴロフ性の定義、ベルヌーイ系との関係" },
                            { id: "3.4", title: "オルネシュタインの同型定理", description: "エントロピーによるベルヌーイ系の完全分類の主張" }
                        ]
                    },
                    {
                        id: "4", title: "測度論的エントロピー", description: "分割のエントロピー・コルモゴロフ-シナイエントロピー・エントロピー公式",
                        sections: [
                            { id: "4.1", title: "分割のエントロピーの定義", description: "有限分割のシャノンエントロピー、条件付きエントロピー" },
                            { id: "4.2", title: "変換のエントロピーの定義", description: "分割に関するエントロピーの上限としての定義" },
                            { id: "4.3", title: "コルモゴロフ-シナイ定理", description: "生成分割によるエントロピーの計算可能性の定理" },
                            { id: "4.4", title: "具体的なエントロピーの計算", description: "ベルヌーイシフト・マルコフ連鎖のエントロピーの計算" },
                            { id: "4.5", title: "位相的エントロピーとの比較", description: "変分原理の主張、測度論的エントロピーの最大化" }
                        ]
                    },
                    {
                        id: "5", title: "位相的力学系とエルゴード理論", description: "不変測度の存在・一意エルゴード性・等分布定理・シンブレソンの定理",
                        sections: [
                            { id: "5.1", title: "不変測度の存在", description: "クリロフ-ボゴリュボフの定理、コンパクト位相力学系での不変測度の存在" },
                            { id: "5.2", title: "一意エルゴード性", description: "不変測度の一意性の定義、無理数回転と等分布定理" },
                            { id: "5.3", title: "ワイルの等分布定理", description: "多項式軌道の等分布性の証明、指数和への接続" },
                            { id: "5.4", title: "ファーステンベルクの対応原理", description: "組合せ論的問題のエルゴード理論への翻訳、算術級数の定理への応用" }
                        ]
                    },
                    {
                        id: "6", title: "展望", description: "フォン・ノイマン環との接続・測度論的剛性・多次元エルゴード定理",
                        sections: [
                            { id: "6.1", title: "フォン・ノイマン環とエルゴード理論", description: "群作用の接合積構成、エルゴード同値関係とフォン・ノイマン環の対応、作用素環論 との接続" },
                            { id: "6.2", title: "測度論的剛性", description: "スペクトル不変量・エントロピーによる剛性現象の概観" },
                            { id: "6.3", title: "多次元エルゴード定理とフルステンバーグ-カッツネルソンの定理", description: "多次元平均エルゴード定理の主張とセメレーディの定理との関係" },
                            { id: "6.4", title: "粗幾何学・グラフ理論への接続", description: "エクスパンダーグラフとエルゴード理論的手法の応用の概観" }
                        ]
                    }
                ],
                prerequisites: ["3-7", "4-1"]
            },
            {
                id: "5-10",
                title: "ホモロジー代数",
                chapters: [
                    {
                        id: "1", title: "アーベル圏と加群の圏", description: "アーベル圏の復習・加群の圏・自由加群・射影加群・単射加群",
                        sections: [
                            { id: "1.1", title: "アーベル圏の公理と基本性質", description: "圏論 の復習、核・余核・完全系列のアーベル圏的定式化" },
                            { id: "1.2", title: "加群の圏の例", description: "環上の加群の圏のアーベル圏としての構造、部分加群・商加群・準同型定理" },
                            { id: "1.3", title: "射影加群の定義と特徴づけ", description: "持ち上げ性質による定義、自由加群との関係、射影加群の例" },
                            { id: "1.4", title: "単射加群の定義と特徴づけ", description: "延長性質による定義、単射性定理、単射加群の例" },
                            { id: "1.5", title: "平坦加群との関係", description: "射影加群・単射加群・平坦加群の包含関係の整理" }
                        ]
                    },
                    {
                        id: "2", title: "複体とホモロジー", description: "鎖複体・双対鎖複体・ホモロジー群・写像錐・ホモトピー",
                        sections: [
                            { id: "2.1", title: "鎖複体と双対鎖複体の定義", description: "境界作用素の二乗ゼロ条件、代数的トポロジー の復習との対応" },
                            { id: "2.2", title: "ホモロジー群の関手性", description: "複体の射・準同型定理・誘導される準同型の関手的性質" },
                            { id: "2.3", title: "写像錐と写像柱", description: "写像から構成される複体、長完全系列との接続" },
                            { id: "2.4", title: "複体のホモトピー", description: "チェインホモトピーの定義、ホモトピックな写像の誘導する同型" },
                            { id: "2.5", title: "完全系列の短完全列から長完全列への拡張", description: "接続準同型の構成、蛇の補題の証明" }
                        ]
                    },
                    {
                        id: "3", title: "導来関手", description: "射影分解・単射分解・左導来関手・右導来関手・ねじれ関手・拡大関手",
                        sections: [
                            { id: "3.1", title: "射影分解と単射分解", description: "分解の存在定理、分解の間の写像のホモトピー同値を除いた一意性" },
                            { id: "3.2", title: "左導来関手の定義", description: "右完全関手の左導来関手の構成、分解の選択によらない一意性" },
                            { id: "3.3", title: "右導来関手の定義", description: "左完全関手の右導来関手の構成" },
                            { id: "3.4", title: "ねじれ関手", description: "テンソル積の左導来関手としての定義、計算例、平坦性との同値条件" },
                            { id: "3.5", title: "拡大関手", description: "準同型関手の右導来関手としての定義、計算例、射影性・単射性との同値条件" },
                            { id: "3.6", title: "導来関手の長完全系列", description: "短完全列から誘導されるねじれ関手・拡大関手の長完全系列" }
                        ]
                    },
                    {
                        id: "4", title: "スペクトル系列", description: "フィルター付き複体・スペクトル系列の構成・収束・応用",
                        sections: [
                            { id: "4.1", title: "フィルター付き複体とスペクトル系列の構成", description: "フィルタレーションから生じる各ページの構成" },
                            { id: "4.2", title: "スペクトル系列の収束", description: "極限ページと収束先のホモロジーの関係、収束の条件" },
                            { id: "4.3", title: "ルレイ-ハーシュ・スペクトル系列", description: "ファイバー束のコホモロジーを計算するスペクトル系列" },
                            { id: "4.4", title: "セール・スペクトル系列", description: "ファイブレーションへの応用、高次ホモトピー群の計算例" },
                            { id: "4.5", title: "ホッホシルト-セール・スペクトル系列", description: "群の拡大に付随するスペクトル系列の概観" }
                        ]
                    },
                    {
                        id: "5", title: "群のホモロジーとコホモロジー", description: "群環・バー分解・群のホモロジー・群のコホモロジー・拡大の分類",
                        sections: [
                            { id: "5.1", title: "群環と加群", description: "群環の定義、群環上の加群としての表現空間の概念" },
                            { id: "5.2", title: "バー分解と群のホモロジー", description: "自由分解の標準構成、群のホモロジー群の定義と計算例" },
                            { id: "5.3", title: "群のコホモロジーと拡大の分類", description: "2次のコホモロジー群による群拡大の分類定理" },
                            { id: "5.4", title: "群コホモロジーの低次の解釈", description: "0次および1次の解釈、不変元・導分・主導分" }
                        ]
                    },
                    {
                        id: "6", title: "導来圏", description: "局所化・三角圏・導来関手の圏論的定式化",
                        sections: [
                            { id: "6.1", title: "圏の局所化", description: "弱同値写像を可逆にする局所化の構成と普遍性" },
                            { id: "6.2", title: "ホモトピー圏", description: "複体のホモトピー圏の構成、三角構造の導入" },
                            { id: "6.3", title: "導来圏の定義", description: "準同型を可逆にする局所化としての定義、完全三角の定義" },
                            { id: "6.4", title: "導来関手の圏論的定式化", description: "関手の全導来関手・右導来関手の定式化、導来テンソル積と導来準同型関手" },
                            { id: "6.5", title: "代数幾何II への展望", description: "層の導来圏・導来圏上のコホモロジー操作・グロタンディーク双対性の位置づけ" }
                        ]
                    }
                ],
                prerequisites: ["3-15", "4-8"]
            },
            {
                id: "5-11",
                title: "代数幾何II",
                chapters: [
                    {
                        id: "1", title: "層の理論", description: "前層・層・層化・茎・層の射・層の完全系列",
                        sections: [
                            { id: "1.1", title: "前層と層の定義", description: "位相空間上の前層と層の公理、局所性と貼り合わせ条件" },
                            { id: "1.2", title: "層化と茎", description: "前層から層を構成する層化の手順、局所的な構造である茎の定義と役割" },
                            { id: "1.3", title: "層の射と完全系列", description: "層の射・核・余核・完全系列の定義、層の圏のアーベル圏性" },
                            { id: "1.4", title: "代数幾何的な層の例", description: "構造層・イデアル層・標準層の定義と具体例" }
                        ]
                    },
                    {
                        id: "2", title: "スキームの定義", description: "局所環付き空間・アフィンスキーム・スキームの射・ファイバー積",
                        sections: [
                            { id: "2.1", title: "局所環付き空間の定義", description: "位相空間と構造層の組、アフィン多様体との対応" },
                            { id: "2.2", title: "アフィンスキームの構成", description: "環に対するスペクトルの定義、ザリスキー位相と構造層" },
                            { id: "2.3", title: "スキームの定義と射", description: "アフィンスキームの貼り合わせ、スキームの射の局所環付き空間の射" },
                            { id: "2.4", title: "ファイバー積と基底変換", description: "スキームのファイバー積の構成、基底変換・幾何的ファイバーの定義" }
                        ]
                    },
                    {
                        id: "3", title: "スキームの基本性質", description: "分離性・固有性・射影スキーム・コーエン-マコーレー性",
                        sections: [
                            { id: "3.1", title: "射影スキームと次数付き環", description: "射影スペクトルの構成、射影空間・射影多様体のスキーム論的定式化" },
                            { id: "3.2", title: "分離射と固有射", description: "対角射・分離性の定義、固有射の定義と像の閉性" },
                            { id: "3.3", title: "平坦射とエタール射", description: "平坦性の幾何的意味、エタール射の定義と局所同型との関係" },
                            { id: "3.4", title: "正則性とコーエン-マコーレー条件", description: "正則局所環・コーエン-マコーレー環のスキーム論的意味" }
                        ]
                    },
                    {
                        id: "4", title: "連接層のコホモロジー", description: "連接層・チェックコホモロジー・導来関手コホモロジー・基本定理",
                        sections: [
                            { id: "4.1", title: "連接層と準連接層", description: "構造層上の加群としての連接層の定義、アフィンスキーム上での消滅定理" },
                            { id: "4.2", title: "チェックコホモロジー", description: "アフィン被覆によるコホモロジーの定義と計算例" },
                            { id: "4.3", title: "導来関手によるコホモロジー", description: "導来関手の枠組みの層への適用、両者の一致" },
                            { id: "4.4", title: "基本的な消滅定理", description: "アフィンスキーム上での連接層コホモロジーの消滅、射影空間での計算" },
                            { id: "4.5", title: "グロタンディークの消滅定理", description: "次元を超えるコホモロジーの消滅の証明" }
                        ]
                    },
                    {
                        id: "5", title: "セール双対性とリーマン-ロッホの定理", description: "双対化層・セール双対性・曲線上のリーマン-ロッホ・ヒルツェブルフ-リーマン-ロッホ",
                        sections: [
                            { id: "5.1", title: "双対化層と滑らかな多様体の標準層", description: "双対化層の構成、滑らかな多様体での標準層との一致" },
                            { id: "5.2", title: "セール双対性定理", description: "ある次元と余次元のコホモロジー群の間の双対性の主張と証明の概略、複素解析との対応" },
                            { id: "5.3", title: "曲線上のリーマン-ロッホの定理", description: "スキーム論的な証明、古典的主張との対応" },
                            { id: "5.4", title: "ヒルツェブルフ-リーマン-ロッホの定理", description: "高次元への一般化の主張、チャーン指標との関係" }
                        ]
                    },
                    {
                        id: "6", title: "アーベル多様体", description: "複素トーラス・偏極・ネロン模型・モジュライ空間への展望",
                        sections: [
                            { id: "6.1", title: "複素トーラスとアーベル多様体", description: "複素トーラスの定義、射影的埋め込みのための偏極条件" },
                            { id: "6.2", title: "アーベル多様体の群構造", description: "加法の正則性の証明、リーマン-ロッホによる埋め込みの構成" },
                            { id: "6.3", title: "双対アーベル多様体", description: "0次ピカール多様体の定義、双対多様体の構成とポアンカレ束" },
                            { id: "6.4", title: "ネロン模型の概観", description: "整数環上のアーベル多様体の延長、代数数論との接続" },
                            { id: "6.5", title: "モジュライ空間への展望", description: "楕円曲線・アーベル多様体のモジュライ問題の定式化の概観" }
                        ]
                    }
                ],
                prerequisites: ["4-12", "5-10"]
            },
            {
                id: "5-12",
                title: "リー群とリー代数",
                chapters: [
                    {
                        id: "1", title: "リー群の基礎", description: "定義・主要例・部分リー群・リー群の作用",
                        sections: [
                            { id: "1.1", title: "リー群の定義と例", description: "一般線形群・特殊線形群・直交群・ユニタリ群などの行列群を中心に" },
                            { id: "1.2", title: "リー群の間の準同型と部分リー群", description: "滑らかな群準同型の定義、閉部分群定理の証明" },
                            { id: "1.3", title: "リー群の作用と等質空間", description: "多様体への左作用・右作用、軌道・等質空間の多様体構造" },
                            { id: "1.4", title: "主要な等質空間の例", description: "球面・グラスマン多様体・フラグ多様体の等質空間としての記述" }
                        ]
                    },
                    {
                        id: "2", title: "リー代数", description: "接空間としてのリー代数・公理・構造定数・可解性・冪零性",
                        sections: [
                            { id: "2.1", title: "接空間としてのリー代数", description: "単位元での接空間、ブラケット積の定義と性質" },
                            { id: "2.2", title: "リー代数の公理と例", description: "一般線形リー代数・特殊線形リー代数・直交リー代数などの構造定数の具体的計算" },
                            { id: "2.3", title: "部分リー代数・イデアル・商リー代数", description: "イデアルの定義と商の構成、準同型定理" },
                            { id: "2.4", title: "可解リー代数と冪零リー代数", description: "導来列・降中心列による定義と具体例" },
                            { id: "2.5", title: "エンゲルの定理とリーの定理", description: "冪零性・可解性の表現による特徴づけ定理の証明" }
                        ]
                    },
                    {
                        id: "3", title: "指数写像とリー群・リー代数の対応", description: "指数写像・ベーカー-キャンベル-ハウスドルフの公式・リーの3定理・被覆群",
                        sections: [
                            { id: "3.1", title: "行列指数関数と1パラメータ部分群", description: "行列の指数関数の定義と基本性質、1パラメータ部分群との対応" },
                            { id: "3.2", title: "リー群上の指数写像", description: "リー代数からリー群への指数写像の定義と局所微分同相性の証明" },
                            { id: "3.3", title: "ベーカー-キャンベル-ハウスドルフの公式", description: "リー代数からのリー群の局所的な乗法構造の復元" },
                            { id: "3.4", title: "リーの3定理", description: "リー代数からのリー群の構成、単連結リー群の一意性定理の主張" },
                            { id: "3.5", title: "被覆群と普遍被覆", description: "普遍被覆リー群の構成、特殊ユニタリ群と特殊直交群の二重被覆の具体例" }
                        ]
                    },
                    {
                        id: "4", title: "随伴表現と不変量", description: "随伴表現・随伴軌道・キリング形式・中心と中心化群",
                        sections: [
                            { id: "4.1", title: "随伴表現", description: "リー群およびリー代数の随伴表現の定義、両者の指数写像を介した関係" },
                            { id: "4.2", title: "随伴軌道の幾何", description: "随伴軌道の接空間の記述、軌道の次元と中心化群の関係" },
                            { id: "4.3", title: "キリング形式", description: "随伴表現のトレースとしてのキリング形式の定義、カルタンの判定条件の証明" },
                            { id: "4.4", title: "不変多項式とカジミール元", description: "対称代数上の不変多項式、普遍包絡代数のカジミール元" }
                        ]
                    },
                    {
                        id: "5", title: "半単純リー代数の構造と分類", description: "カルタン部分代数・根系・ワイル群・ディンキン図形",
                        sections: [
                            { id: "5.1", title: "カルタン部分代数と根の定義", description: "最大可換部分代数の定義、双対空間内の根系の構成" },
                            { id: "5.2", title: "根の性質とルート空間分解", description: "根の対称性・整数性・ランク条件の証明" },
                            { id: "5.3", title: "ワイル群の定義と性質", description: "鏡映による生成、ワイル群の有限性と単純根による基底" },
                            { id: "5.4", title: "カルタン行列とディンキン図形", description: "カルタン行列の定義、ディンキン図形による分類の主張" },
                            { id: "5.5", title: "古典型と例外型の分類", description: "古典型と例外型の具体的な分類と列挙" }
                        ]
                    },
                    {
                        id: "6", title: "コンパクトリー群", description: "ハール測度・最大トーラス・ワイルの積分公式・ペーター-ワイルの定理",
                        sections: [
                            { id: "6.1", title: "コンパクトリー群の性質", description: "ハール測度の存在と一意性、ユニタリ化補題" },
                            { id: "6.2", title: "最大トーラスと共役定理", description: "最大トーラスの存在、全元が最大トーラスに共役であることの証明" },
                            { id: "6.3", title: "ワイルの積分公式", description: "群全体での積分の最大トーラス上での積分への帰着と証明" },
                            { id: "6.4", title: "ペーター-ワイルの定理", description: "2乗可積分関数のなす空間の既約ユニタリ表現による直交分解定理の主張と意義" },
                            { id: "6.5", title: "表現論への展望", description: "最高ウェイトによる既約表現の分類・ワイルの指標公式の予告" }
                        ]
                    }
                ],
                prerequisites: ["4-5"]
            },
            {
                id: "5-13",
                title: "表現論",
                chapters: [
                    {
                        id: "1", title: "有限群の表現論の基礎", description: "表現・既約表現・完全可約性・マシュケの定理",
                        sections: [
                            { id: "1.1", title: "群の表現の定義と例", description: "線形表現の定義、正則表現・置換表現・自明表現の例" },
                            { id: "1.2", title: "部分表現と商表現", description: "不変部分空間の定義、元の群の構造を保つ準同型・シューアの補題の証明" },
                            { id: "1.3", title: "完全可約性とマシュケの定理", description: "有限群の複素表現の完全可約性の証明、平均化操作" },
                            { id: "1.4", title: "テンソル積表現と双対表現", description: "表現のテンソル積・対称積・交代積・双対表現の定義" }
                        ]
                    },
                    {
                        id: "2", title: "指標理論", description: "指標・直交関係・指標表・バーンサイドの定理",
                        sections: [
                            { id: "2.1", title: "指標の定義と基本性質", description: "指標の定義、共役元での値の一致、直和とテンソル積の指標" },
                            { id: "2.2", title: "指標の直交関係", description: "第一・第二直交関係の証明、既約指標の正規直交基底としての性質" },
                            { id: "2.3", title: "指標表の構造", description: "指標表の正方性、行と列の直交性、具体的な群の指標表の計算" },
                            { id: "2.4", title: "バーンサイドの定理", description: "2つの素数の冪の積による位数の群の可解性の証明" }
                        ]
                    },
                    {
                        id: "3", title: "誘導表現と制限表現", description: "誘導表現・フロベニウスの相互律・マッキーの定理",
                        sections: [
                            { id: "3.1", title: "制限表現と誘導表現の定義", description: "部分群への制限、誘導表現の構成と普遍性" },
                            { id: "3.2", title: "フロベニウスの相互律", description: "制限と誘導の随伴性の証明" },
                            { id: "3.3", title: "誘導表現の指標公式", description: "誘導表現の指標の計算公式と具体例" },
                            { id: "3.4", title: "マッキーの定理と二重剰余類", description: "二重剰余類分解による制限・誘導の合成の分析" }
                        ]
                    },
                    {
                        id: "4", title: "リー群の表現論", description: "ユニタリ表現・既約性・ペーター-ワイルの定理の応用・最大トーラスの表現",
                        sections: [
                            { id: "4.1", title: "コンパクトリー群のユニタリ表現", description: "ユニタリ表現の定義、平均化による完全可約性の証明" },
                            { id: "4.2", title: "ペーター-ワイルの定理の応用", description: "2乗可積分空間の分解、行列要素の直交性" },
                            { id: "4.3", title: "最大トーラスの表現とウェイト", description: "最大トーラスの指標としてのウェイトの定義" },
                            { id: "4.4", title: "2次特殊ユニタリ群の既約表現の完全分類", description: "具体的な構成と指標の計算、スピン表現との対応" }
                        ]
                    },
                    {
                        id: "5", title: "最高ウェイト理論", description: "普遍包絡代数・最高ウェイト加群・ワイルの指標公式・完全可約性定理",
                        sections: [
                            { id: "5.1", title: "普遍包絡代数とポアンカレ-ビルコフ-ウィットの定理", description: "普遍包絡代数の定義、基底定理" },
                            { id: "5.2", title: "ウェイト・ウェイト空間・最高ウェイトベクトル", description: "表現空間のウェイト分解、最高ウェイトの定義" },
                            { id: "5.3", title: "最高ウェイト加群の分類", description: "加群の一意性・既約性・有限次元性の条件" },
                            { id: "5.4", title: "ワイルの指標公式", description: "既約表現の指標の明示公式の証明と次元公式への応用" },
                            { id: "5.5", title: "ワイルの完全可約性定理", description: "半単純リー代数の有限次元表現の完全可約性の証明" }
                        ]
                    },
                    {
                        id: "6", title: "量子群入門", description: "変形パラメータ・量子群の定義・ホップ代数構造・結晶基底",
                        sections: [
                            { id: "6.1", title: "パラメータ変形の動機と量子群", description: "パラメータによる変形の概念、特殊線形リー代数の量子群の定義と基本性質" },
                            { id: "6.2", title: "一般の量子群の定義", description: "ルート系に基づく量子群の生成元と関係式" },
                            { id: "6.3", title: "ホップ代数構造", description: "余積・余単位・対蹠の定義" },
                            { id: "6.4", title: "表現の変形と極限", description: "既約表現の量子版、古典的表現論との対応" },
                            { id: "6.5", title: "結晶基底の概念", description: "パラメータ極限から生じる組合せ論的構造の概観" }
                        ]
                    }
                ],
                prerequisites: ["3-10", "4-1", "5-12"]
            },
            {
                id: "5-14",
                title: "代数数論",
                chapters: [
                    {
                        id: "1", title: "代数的整数とデデキント環", description: "代数的整数・整数環・デデキント整域・素イデアルの一意分解",
                        sections: [
                            { id: "1.1", title: "代数的整数の定義と基本性質", description: "最高次係数が1の有理整数係数多項式の根としての定義、和・積の閉性の証明" },
                            { id: "1.2", title: "整数環の構造", description: "代数体の整数環の定義、整基底と判別式" },
                            { id: "1.3", title: "デデキント整域の定義と特徴づけ", description: "ネーター整閉整域・クルル次元1の同値条件" },
                            { id: "1.4", title: "イデアルの一意分解定理", description: "素イデアルの積への一意分解の証明、ガウス整数での計算例" }
                        ]
                    },
                    {
                        id: "2", title: "イデアル類群とミンコフスキーの定理", description: "分数イデアル・イデアル類群・類数・ミンコフスキー境界",
                        sections: [
                            { id: "2.1", title: "分数イデアルとイデアル類群", description: "分数イデアルの定義、主イデアルによる商としての類群" },
                            { id: "2.2", title: "ミンコフスキーの格子点定理", description: "凸体定理の証明とイデアル類群への応用" },
                            { id: "2.3", title: "類数の有限性定理", description: "ミンコフスキー境界による有限個の素イデアルへの帰着と証明" },
                            { id: "2.4", title: "具体的な類数の計算", description: "二次体の類数の計算例、類数が1である整数環の一意分解性" }
                        ]
                    },
                    {
                        id: "3", title: "単数群とディリクレの単数定理", description: "単数群の構造・対数埋め込み・基本単数・ディリクレの単数定理",
                        sections: [
                            { id: "3.1", title: "単数群の定義と有限位数元", description: "単数群の定義、1の冪根としての有限位数元" },
                            { id: "3.2", title: "対数埋め込みとディリクレの単数定理", description: "対数埋め込みの構成、単数群の構造定理の証明" },
                            { id: "3.3", title: "基本単数の計算", description: "二次体の基本単数の計算、ペル方程式との関係" },
                            { id: "3.4", title: "ゼータ関数・L 関数との関係", description: "デデキントゼータ関数の定義、類数公式の主張" }
                        ]
                    },
                    {
                        id: "4", title: "素イデアルの分岐と分解", description: "分岐・分解・慣性群・フロベニウス元・ガロア拡大での挙動",
                        sections: [
                            { id: "4.1", title: "素イデアルの分解型", description: "素数の素イデアル積への分解、分岐・分解・惰性の定義" },
                            { id: "4.2", title: "分岐の判定", description: "判別式による分岐の判定、二次体での具体的計算" },
                            { id: "4.3", title: "ガロア拡大での分解群と慣性群", description: "ガロア作用・分解群・慣性群の定義と基本性質" },
                            { id: "4.4", title: "フロベニウス元と自己同型", description: "非分岐素イデアルのフロベニウス元の定義、チェボタレフの密度定理の主張" }
                        ]
                    },
                    {
                        id: "5", title: "局所体とp進数", description: "p進絶対値・p進数体・局所体・ヘンゼルの補題",
                        sections: [
                            { id: "5.1", title: "p進絶対値とp進数体の構成", description: "p進絶対値の定義、有理数体の完備化としてのp進数体" },
                            { id: "5.2", title: "p進整数環の構造", description: "逆極限によるp進整数環の構成、単数群の構造" },
                            { id: "5.3", title: "局所体の定義と分類", description: "局所体の定義、標数0と正標数の局所体の分類" },
                            { id: "5.4", title: "ヘンゼルの補題", description: "p進近似による多項式の根の存在定理の証明と応用" },
                            { id: "5.5", title: "局所・大域原理", description: "ハッセ-ミンコフスキーの定理の主張、局所条件から大域解への帰着" }
                        ]
                    },
                    {
                        id: "6", title: "類体論", description: "相互法則・アルティン写像・局所類体論・大域類体論",
                        sections: [
                            { id: "6.1", title: "類体論の動機", description: "分岐の特徴づけとアーベル拡大の分類問題、平方剰余との関係" },
                            { id: "6.2", title: "局所類体論の主定理", description: "局所体の最大アーベル拡大とアルティン写像の主張" },
                            { id: "6.3", title: "大域類体論の主定理", description: "イデアル類群による最大アーベル拡大の記述、アルティン同型" },
                            { id: "6.4", title: "相互法則との関係", description: "クロネッカー-ウェーバーの定理、2次相互法則の類体論的証明" },
                            { id: "6.5", title: "発展分野への展望", description: "L関数の関数等式・モジュラー形式の保型表現的定式化への接続" }
                        ]
                    }
                ],
                prerequisites: ["4-10", "4-11", "4-14"]
            },
            {
                id: "5-15",
                title: "ディオファントス幾何",
                chapters: [
                    {
                        id: "1", title: "高さ関数", description: "ナイーブ高さ・ヴェイユ高さ機械・カノニカル高さ、高さと有理点の有限性",
                        sections: [
                            { id: "1.1", title: "射影空間上のナイーブ高さ", description: "空間上の高さ関数の定義、標準化と有限性定理の準備" },
                            { id: "1.2", title: "ヴェイユ高さ機械", description: "アデール的絶対値積公式、大域体上の射影空間の高さの整合的定義" },
                            { id: "1.3", title: "ノースコットの有限性定理", description: "高さと次数が共に有界な代数的数は有限個であることの証明" },
                            { id: "1.4", title: "カノニカル高さの構成", description: "テイトの極限構成による楕円曲線上のカノニカル高さ、ナイーブ高さとの差の有界性" },
                            { id: "1.5", title: "カノニカル高さの性質", description: "二次形式性・正値性・有理捩れ点の特徴づけ、モーデル-ヴェイユ定理への準備" }
                        ]
                    },
                    {
                        id: "2", title: "モーデル-ヴェイユ定理", description: "楕円曲線の有理点群の有限生成性、弱モーデル-ヴェイユ定理、下降法",
                        sections: [
                            { id: "2.1", title: "楕円曲線の有理点群の復習", description: "加法則の代数幾何的定義、ネロン-テイト高さとの関係、アーベル多様体との接続" },
                            { id: "2.2", title: "弱モーデル-ヴェイユ定理", description: "弱モーデル-ヴェイユ群の有限性の証明、セルマー群とシャファレヴィッチ群の定義の概観" },
                            { id: "2.3", title: "クリプタルム型下降法", description: "2-下降の具体的手順、局所条件の検証と大域有理点の探索" },
                            { id: "2.4", title: "高さ降下とモーデル-ヴェイユ定理の完成", description: "カノニカル高さによる有限生成性の証明、ランクの定義" },
                            { id: "2.5", title: "BSD予想の概観", description: "L関数の零点の位数とランクの一致予想、バーチ-スウィンナートン-ダイアー予想の主張と帰結" }
                        ]
                    },
                    {
                        id: "3", title: "有理近似とロスの定理", description: "リュービルの定理・ジーゲルの補題・ロスの定理、超越数論との接続",
                        sections: [
                            { id: "3.1", title: "リュービルの定理と超越数の存在", description: "代数的数の有理近似の限界、リュービル数の構成" },
                            { id: "3.2", title: "ジーゲルの補題", description: "整数係数の線形方程式系の小さな整数解の存在、ディオファントス近似への応用" },
                            { id: "3.3", title: "テューエ-ジーゲル-ロスの定理の主張", description: "代数的数の有理近似指数に関する上限の主張" },
                            { id: "3.4", title: "ロスの定理の証明の概略", description: "補助多項式の構成・インデックス定理・外挿法の流れ" },
                            { id: "3.5", title: "ベイカーの線形形式の定理への展望", description: "対数の線形形式の下からの評価、整数点の有限性への応用の概観" }
                        ]
                    },
                    {
                        id: "4", title: "ファルティングスの定理", description: "種数と有理点、ファルティングスの定理（旧モーデル予想）の主張と証明の概略",
                        sections: [
                            { id: "4.1", title: "代数曲線の種数と有理点の関係", description: "種数が異なる曲線での有理点の振る舞いの対比" },
                            { id: "4.2", title: "ファルティングスの定理の主張", description: "種数が2以上の曲線の有理点の有限性の証明の主張" },
                            { id: "4.3", title: "ファルティングスの証明の概略", description: "高さ関数の半安定化・エタールコホモロジー・p進ホッジ理論の役割の概観" },
                            { id: "4.4", title: "ヴォイタの予想とabc予想", description: "ファルティングスの定理をエントロピー的に一般化するヴォイタ予想の主張、abc予想との同値性" },
                            { id: "4.5", title: "代替的証明の概観", description: "エルミート-パロシュ-ファルティングスによる高さ理論的証明、ラ・サール-ソウレ手法の概観" }
                        ]
                    },
                    {
                        id: "5", title: "abc予想とシュピロ予想", description: "abc予想の定式化、楕円曲線の導手・判別式との関係、帰結の整理",
                        sections: [
                            { id: "5.1", title: "abc予想の定式化", description: "根基の定義、abc予想の主張と定数の役割" },
                            { id: "5.2", title: "abc予想の帰結", description: "フェルマーの最終定理の簡潔な証明、ロスの定理・ファルティングスの定理がabc予想から従うこと" },
                            { id: "5.3", title: "シュピロ予想と楕円曲線", description: "楕円曲線の導手と最小判別式の関係、シュピロ予想の主張" },
                            { id: "5.4", title: "abc予想とシュピロ予想の同値性", description: "両予想が本質的に等価であることの証明の概略" },
                            { id: "5.5", title: "メイソン-ストーサーズの定理", description: "関数体版abc予想の完全な証明、整数版との構造的類比" }
                        ]
                    },
                    {
                        id: "6", title: "現代ディオファントス幾何の展望", description: "エタールコホモロジー的手法・p進手法・宇宙際タイヒミュラー理論",
                        sections: [
                            { id: "6.1", title: "エタールコホモロジーとガロア表現", description: "楕円曲線のテイト加群・ガロア表現の定義、フロベニウス元との接続" },
                            { id: "6.2", title: "p進ホッジ理論の役割", description: "結晶コホモロジー・ド・ラームとエタールの比較定理の概観、p進幾何への接続" },
                            { id: "6.3", title: "モチーフ的ディオファントス幾何", description: "ある種のコホモロジー理論の統一に向けたグロタンディークの解" },
                            { id: "6.4", title: "宇宙際タイヒミュラー理論の動機と概要", description: "遠アーベル幾何・フロベニオイドの概念、abc予想への帰結の主張" }
                        ]
                    }
                ],
                prerequisites: ["5-11", "5-14"]
            },
            {
                id: "5-16",
                title: "p進幾何・パーフェクトイド空間",
                chapters: [
                    {
                        id: "1", title: "剛解析幾何の基礎", description: "アフィノイド代数・アフィノイド空間・剛解析空間、テイトによるp進解析幾何の創始",
                        sections: [
                            { id: "1.1", title: "剛解析幾何の動機", description: "p進体上の解析関数論における収束領域の問題、複素解析との類比と困難点" },
                            { id: "1.2", title: "テイト代数とアフィノイド代数", description: "テイト代数の定義と普遍性、アフィノイド代数の定義とネーター性・ノルム完備性" },
                            { id: "1.3", title: "アフィノイド空間とアフィノイド被覆", description: "アフィノイドスペクトルの定義、アドミッシブル開被覆とテイト位相の定義" },
                            { id: "1.4", title: "剛解析空間の定義", description: "アフィノイド空間の貼り合わせによる剛解析空間、スキームとの構造的対比" },
                            { id: "1.5", title: "剛解析空間上の層と基本定理", description: "構造層の定義、GAGA型定理と代数的空間との比較" }
                        ]
                    },
                    {
                        id: "2", title: "形式スキームと一般ファイバー", description: "形式スキームの定義・レーノーの形式モデル・一般ファイバーと還元ファイバーの関係",
                        sections: [
                            { id: "2.1", title: "形式スキームの定義", description: "完備化された環のスペクトル、形式スキームの貼り合わせ、スキームとの関係" },
                            { id: "2.2", title: "形式スキームの射と有限型条件", description: "形式的に有限型な射の定義、有限型形式スキームの基本性質" },
                            { id: "2.3", title: "レーノーの形式モデルの定理", description: "剛解析空間の圏と有限型形式スキームの圏の同値、准コンパクト準分離の条件" },
                            { id: "2.4", title: "還元ファイバーと一般ファイバー", description: "形式スキームの特殊ファイバーと一般ファイバーの定義、還元写像の幾何的意味" },
                            { id: "2.5", title: "セミ安定還元定理の概観", description: "曲線・アーベル多様体の半安定還元の概観、整数環上の理論との接続" }
                        ]
                    },
                    {
                        id: "3", title: "アディック空間", description: "フーバーの値付き環・フーバー環・アディックスペクトル・アディック空間の圏",
                        sections: [
                            { id: "3.1", title: "値付き環とフーバー環", description: "値付きの定義、フーバー環の定義と冪有界元・べき零元の概念" },
                            { id: "3.2", title: "アディックスペクトル", description: "連続値付けのなす空間、アフィノイド空間や形式スキームのアディック版との統一" },
                            { id: "3.3", title: "アディック空間の定義", description: "局所フーバー環付き位相空間、剛解析空間と形式スキームの共通の一般化としての位置づけ" },
                            { id: "3.4", title: "アディック空間の射と位相的性質", description: "準コンパクト性・分離性・固有射のアディック版、アディック空間の圏の基本性質" },
                            { id: "3.5", title: "アフィノイドアディック空間の具体例", description: "閉単位円板・開単位円板・穿孔円板のアディック版、古典的p進幾何との対応" }
                        ]
                    },
                    {
                        id: "4", title: "パーフェクトイド体と傾斜同値", description: "パーフェクトイド体の定義・傾斜体・傾斜同値定理、標数0と標数pの橋渡し",
                        sections: [
                            { id: "4.1", title: "パーフェクトイド体の定義", description: "完備な値付き体でフロベニウスが全射となる条件、円分p進体の完備化の例" },
                            { id: "4.2", title: "傾斜体の構成", description: "パーフェクトイド体の傾斜体の定義、逆極限による構成" },
                            { id: "4.3", title: "傾斜同値定理", description: "ショルツェによるエタール拡大の圏の同値定理、ヴィットベクトルによる持ち上げ" },
                            { id: "4.4", title: "オールモスト数学", description: "オールモストエタール拡大の概念、ファルティングスの補題の精密化と傾斜同値証明への役割" },
                            { id: "4.5", title: "傾斜同値の数論的応用の例", description: "アーベル多様体のp進テイト加群の構造への応用の概観" }
                        ]
                    },
                    {
                        id: "5", title: "パーフェクトイド空間", description: "パーフェクトイド空間の定義・基本性質・エタール位相・傾斜の空間への拡張",
                        sections: [
                            { id: "5.1", title: "パーフェクトイド空間の定義", description: "パーフェクトイドアフィノイド環の定義、パーフェクトイド空間の貼り合わせ" },
                            { id: "5.2", title: "パーフェクトイド空間のエタール位相", description: "プロエタール位相の定義、古典的エタール位相との比較" },
                            { id: "5.3", title: "傾斜の空間への拡張", description: "空間とその傾斜空間の定義、アフィノイド版傾斜同値の大域化" },
                            { id: "5.4", title: "パーフェクトイド射影空間とドリンフェルト上半空間", description: "空間の定義、古典的点の稠密性との関係" },
                            { id: "5.5", title: "重みスペクトル系列の退化", description: "p進ホッジ理論におけるホッジ-テイト分解、重みスペクトル系列の退化の証明への応用" }
                        ]
                    },
                    {
                        id: "6", title: "応用と展望", description: "p進ホッジ理論・局所ラングランズ対応・プリズム理論・ダイアモンド",
                        sections: [
                            { id: "6.1", title: "p進ホッジ理論との接続", description: "ホッジ-テイト・ド・ラーム・結晶・半安定という表現の分類、ディオファントス幾何学のp進ホッジ理論の基盤" },
                            { id: "6.2", title: "局所ラングランズ対応への応用", description: "ファルグ-フォンテーヌ曲線の定義の概観、局所ラングランズ対応の幾何学的定式化" },
                            { id: "6.3", title: "ダイアモンドとv位相", description: "ダイアモンドの定義の概観、位相群の商として現れるモジュライ空間" },
                            { id: "6.4", title: "プリズム理論の概観", description: "バット-ショルツェによるプリズムの定義、各種コホモロジー理論の統一的枠組みとしての位置づけ" },
                            { id: "6.5", title: "大域ラングランズ対応への展望", description: "志村多様体のp進的研究、モジュラー形式・表現論との合流点" }
                        ]
                    }
                ],
                prerequisites: ["5-11", "5-14"]
            },
            {
                id: "5-17",
                title: "シンプレクティック幾何学",
                chapters: [
                    {
                        id: "1", title: "シンプレクティック線形代数", description: "シンプレクティック形式・ラグランジアン部分空間・シンプレクティック群",
                        sections: [
                            { id: "1.1", title: "シンプレクティック形式の定義", description: "ベクトル空間上の非退化交代双線形形式の定義、標準形の存在と一意性" },
                            { id: "1.2", title: "ラグランジアン部分空間と等方的部分空間", description: "等方的・コイソトロピック・シンプレクティック・ラグランジアン部分空間の分類" },
                            { id: "1.3", title: "シンプレクティック群", description: "シンプレクティック形式を保つ線形変換の群、直交群との対比" },
                            { id: "1.4", title: "ラグランジアングラスマン多様体", description: "ラグランジアン部分空間全体のなす多様体、マスロフ指数の準備" }
                        ]
                    },
                    {
                        id: "2", title: "シンプレクティック多様体", description: "閉非退化2形式・ダルブーの定理・基本例・ケーラー多様体",
                        sections: [
                            { id: "2.1", title: "シンプレクティック多様体の定義", description: "閉非退化2形式の定義、奇数次元との本質的相違" },
                            { id: "2.2", title: "基本例", description: "余接束の標準シンプレクティック構造、ケーラー多様体のシンプレクティック構造" },
                            { id: "2.3", title: "ダルブーの定理", description: "局所標準座標の存在定理の証明、リーマン幾何との根本的違いとしての曲率の不在" },
                            { id: "2.4", title: "シンプレクティック写像と反シンプレクティック写像", description: "シンプレクトモルフィズムの定義、ラグランジアン対応" }
                        ]
                    },
                    {
                        id: "3", title: "ハミルトン力学のシンプレクティック定式化", description: "ハミルトンベクトル場・リウヴィルの定理・ポアソン括弧・完全可積分系",
                        sections: [
                            { id: "3.1", title: "ハミルトンベクトル場の定義", description: "外微分による定義、ハミルトン形式との接続" },
                            { id: "3.2", title: "リウヴィルの定理", description: "シンプレクティック形式の保存と位相体積の保存、力学系理論との接続" },
                            { id: "3.3", title: "ポアソン括弧とポアソン多様体", description: "関数間の括弧の定義とヤコビ恒等式の証明、ポアソン多様体への一般化" },
                            { id: "3.4", title: "リウヴィル-アーノルドの完全可積分系", description: "第一積分の対合的独立性の条件、アクション-アングル変数の存在定理" },
                            { id: "3.5", title: "ノーターの定理のシンプレクティック版", description: "対称性とモーメント写像の関係、ノーターの定理との対応" }
                        ]
                    },
                    {
                        id: "4", title: "モーメント写像とシンプレクティック簡約", description: "モーメント写像の定義・同変性・マースデン-ワインシュタイン簡約",
                        sections: [
                            { id: "4.1", title: "リー群作用とモーメント写像", description: "ハミルトン的リー群作用の定義、モーメント写像の定義と例" },
                            { id: "4.2", title: "同変モーメント写像", description: "コアジョイント作用に関する同変性条件、障害としての第2コホモロジー" },
                            { id: "4.3", title: "マースデン-ワインシュタイン簡約定理", description: "簡約空間のシンプレクティック構造の存在定理の証明" },
                            { id: "4.4", title: "簡約の具体例", description: "球面・複素射影空間・フラッグ多様体のシンプレクティック簡約による構成" },
                            { id: "4.5", title: "幾何学的不変式論との関係", description: "安定点の概念、ケーラー簡約と幾何学的不変式論における商の対応の概観" }
                        ]
                    },
                    {
                        id: "5", title: "シンプレクティック位相幾何学の基礎", description: "グロモフの非圧縮定理・シンプレクティック容量・シンプレクティック埋め込み問題",
                        sections: [
                            { id: "5.1", title: "シンプレクティック容量の定義", description: "容量の公理的定義、グロモフ容量の構成の概要" },
                            { id: "5.2", title: "グロモフの非圧縮定理", description: "球の辛埋め込みにおける容量の障害、リウヴィルの定理との質的違い" },
                            { id: "5.3", title: "概複素構造との整合性", description: "シンプレクティック形式に整合的な概複素構造の定義、リーマン計量との関係" },
                            { id: "5.4", title: "擬正則曲線の定義", description: "概複素構造に整合的な正則曲線の方程式、グロモフのコンパクト性定理の主張" },
                            { id: "5.5", title: "グロモフ-ウィッテン不変量の概観", description: "モジュライ空間の仮想次元、シンプレクティック不変量としての定義" }
                        ]
                    },
                    {
                        id: "6", title: "フロアーホモロジー", description: "アーノルド予想・フロアー複体・フロアーホモロジー・ハミルトンフロアーホモロジー",
                        sections: [
                            { id: "6.1", title: "アーノルド予想の主張", description: "非退化ハミルトン微分同相の固定点の下限としてのベッチ数の和" },
                            { id: "6.2", title: "フロアー複体の構成", description: "ハミルトン作用汎関数の臨界点としての周期軌道、連結写像としての擬正則帯状曲線" },
                            { id: "6.3", title: "フロアーホモロジーの定義と基本性質", description: "フロアーホモロジーの定義、コンパクト性・グルーイングによる証明の概略" },
                            { id: "6.4", title: "シンプレクティックホモロジーとの関係", description: "開多様体のシンプレクティックホモロジー、ラップ-ヴィタボの定理" },
                            { id: "6.5", title: "アーノルド予想の解決の概観", description: "フロアーホモロジーとモース理論の同型、特殊な場合での証明の流れ" }
                        ]
                    },
                    {
                        id: "7", title: "展望", description: "鏡対称性・コンタクト幾何・低次元位相幾何との接続",
                        sections: [
                            { id: "7.1", title: "コンタクト幾何との関係", description: "コンタクト多様体の定義、シンプレクティック化・コンタクト化の構成、低次元位相幾何学との接続" },
                            { id: "7.2", title: "鏡対称性の概観", description: "フカヤ圏とシンプレクティック不変量、B側の導来圏との対応、数理物理学への展望" },
                            { id: "7.3", title: "スタイン多様体とリウヴィル幾何", description: "リウヴィルベクトル場・スタイン構造の定義、多変数複素解析との接続" }
                        ]
                    }
                ],
                prerequisites: ["3-6", "4-6"]
            },
            {
                id: "5-18",
                title: "低次元位相幾何学",
                chapters: [
                    {
                        id: "1", title: "結び目と絡み目の基礎", description: "結び目・絡み目の定義、アンビエントアイソトピー、結び目図式、基本例",
                        sections: [
                            { id: "1.1", title: "結び目と絡み目の定義", description: "3次元球面への埋め込みの同値類としての定義、アンビエントアイソトピーの概念" },
                            { id: "1.2", title: "結び目図式とライデマイスター移動", description: "射影図式の定義、3種のライデマイスター移動と不変量の構成への応用" },
                            { id: "1.3", title: "基本的な結び目の例", description: "自明な結び目・トレフォイル・8の字結び目・トーラス結び目の列挙と分類" },
                            { id: "1.4", title: "結び目群（基本群）", description: "結び目補空間の基本群の定義、ヴィルティンガー表示による計算" }
                        ]
                    },
                    {
                        id: "2", title: "古典的結び目不変量", description: "三色付け・アレクサンダー多項式・ザイフェルト曲面・絡み数",
                        sections: [
                            { id: "2.1", title: "三色付けとフォックス微積分", description: "三色付けの定義と不変量性の証明、フォックス微積分による代数化" },
                            { id: "2.2", title: "ザイフェルト曲面の構成", description: "ザイフェルトのアルゴリズム、ザイフェルト種数の定義と不変量性" },
                            { id: "2.3", title: "ザイフェルト行列とアレクサンダー多項式", description: "ザイフェルト行列の定義、アレクサンダー多項式の構成と計算例" },
                            { id: "2.4", title: "アレクサンダー多項式の性質", description: "対称性・正規化、具体的な結び目での計算、シグネチャとの関係" }
                        ]
                    },
                    {
                        id: "3", title: "ジョーンズ多項式と量子不変量", description: "スケイン関係式・ジョーンズ多項式・HOMFLY多項式・量子群との関係",
                        sections: [
                            { id: "3.1", title: "ジョーンズ多項式の定義", description: "スケイン関係式と初期条件による帰納的定義、ライデマイスター不変量性の確認" },
                            { id: "3.2", title: "ジョーンズ多項式の計算と性質", description: "鏡像との関係、交代結び目への応用、アレクサンダー多項式との比較" },
                            { id: "3.3", title: "HOMFLY多項式", description: "2変数スケイン関係式による定義、ジョーンズ・アレクサンダーの両多項式の共通一般化" },
                            { id: "3.4", title: "量子群との関係の概観", description: "普遍包絡代数の量子変形の表現によるジョーンズ多項式の解釈、チャーン-サイモンズ理論との接続の概観" },
                            { id: "3.5", title: "結び目ホモロジーへの展望", description: "コバノフ・ホモロジーの定義の概観、ジョーンズ多項式をオイラー標数にもつ不変量" }
                        ]
                    },
                    {
                        id: "4", title: "3次元多様体の基礎", description: "ヘガード分解・デーン手術・マッピングクラス群・レンズ空間",
                        sections: [
                            { id: "4.1", title: "ヘガード分解の定義", description: "ハンドル体の貼り合わせとしての閉3次元多様体の定義、ヘガード種数の不変量性" },
                            { id: "4.2", title: "デーン手術", description: "結び目の管状近傍の除去と境界トーラスへの貼り直し、手術係数の意味" },
                            { id: "4.3", title: "リコルテイ-ウォレス定理", description: "任意の閉向き付け可能3次元多様体が3次元球面の整数デーン手術で得られることの主張" },
                            { id: "4.4", title: "レンズ空間の分類", description: "レンズ空間の定義、ヘガード図式による記述、ライデマイスター-ホワイトヘッドの分類定理" },
                            { id: "4.5", title: "マッピングクラス群", description: "曲面の自己同型のホモトピー類のなす群、デーン手術との対応" }
                        ]
                    },
                    {
                        id: "5", title: "サーストンの幾何化定理", description: "3次元多様体の素分解・JSJ分解・8種の幾何構造・幾何化定理",
                        sections: [
                            { id: "5.1", title: "素分解と連結和分解", description: "素多様体の定義、クネーザー-ミルナーの素分解定理の主張" },
                            { id: "5.2", title: "JSJ分解", description: "非圧縮トーラスによるトーラス分解、ジャコ-シャレン-ヨハンソン分解定理の概要" },
                            { id: "5.3", title: "サーストンの8種の幾何構造", description: "3次元球面構造やユークリッド構造など代表例の定義" },
                            { id: "5.4", title: "双曲多様体の特徴づけ", description: "サーストンの双曲化定理の主張、クネーザー-ミルナー予想との関係" },
                            { id: "5.5", title: "幾何化予想の主張", description: "素な閉3次元多様体がJSJ分解の各ピースに幾何構造をもつという予想の定式化" }
                        ]
                    },
                    {
                        id: "6", title: "リッチフローとペレルマンの証明", description: "リッチフローの定義・特異点・手術・幾何化予想の解決",
                        sections: [
                            { id: "6.1", title: "リッチフローの定義", description: "リッチテンソルに対する微分方程式の定義、熱方程式との類比" },
                            { id: "6.2", title: "短期間の存在定理と基本例", description: "ハミルトンの短期間存在定理の主張、球面・双曲多様体でのリッチフローの挙動" },
                            { id: "6.3", title: "特異点の形成とネック収縮", description: "有限時間爆発の発生、ネック・キャップの幾何的分類" },
                            { id: "6.4", title: "ペレルマンのエントロピー汎関数", description: "汎関数の定義、単調性の主張とその幾何的意味" },
                            { id: "6.5", title: "リッチフローの手術", description: "特異点でのトポロジー的手術の定義、手術後のフローの継続" },
                            { id: "6.6", title: "幾何化予想の解決の概略", description: "有限時間内に手術が有限回しか起きないこと、各ピースへの幾何構造の割り当て" }
                        ]
                    },
                    {
                        id: "7", title: "展望", description: "4次元多様体・コンタクト幾何・ヘガードフロアーホモロジー",
                        sections: [
                            { id: "7.1", title: "ドナルドソン理論とサイバーグ-ウィッテン理論の概観", description: "4次元多様体の微分構造の分類、微分トポロジーとの接続" },
                            { id: "7.2", title: "コンタクト幾何との関係", description: "コンタクト構造の定義、タイト・オーバーツイストの区別、シンプレクティック幾何学との接続" },
                            { id: "7.3", title: "ヘガードフロアーホモロジー", description: "オズヴァス-サボのヘガードフロアー複体の定義の概観、3次元多様体不変量としての役割" }
                        ]
                    }
                ],
                prerequisites: ["4-9"]
            },
            {
                id: "5-19",
                title: "幾何学的群論",
                chapters: [
                    {
                        id: "1", title: "群の幾何学的表示", description: "有限生成群・ケイリーグラフ・語距離・デーン関数",
                        sections: [
                            { id: "1.1", title: "有限生成群と語の問題", description: "有限生成群の定義、語の問題・共役問題・同型問題の定式化" },
                            { id: "1.2", title: "ケイリーグラフの定義", description: "生成系に対するケイリーグラフの構成、語距離の定義と基本性質" },
                            { id: "1.3", title: "ケイリーグラフの具体例", description: "Z・Z^2・自由群 F_n・二面体群のケイリーグラフの形状と比較" },
                            { id: "1.4", title: "デーン関数と等周不等式", description: "語の問題の複雑度としてのデーン関数、等周不等式の定義と幾何的解釈" }
                        ]
                    },
                    {
                        id: "2", title: "準等長と粗幾何学", description: "準等長の定義・ゲルファント-フォーエンスの定理・粗不変量",
                        sections: [
                            { id: "2.1", title: "準等長の定義", description: "粗等長写像・準等長の定義、距離空間の粗同値関係" },
                            { id: "2.2", title: "ゲルファント-フォーエンスの定理", description: "有限生成群の語距離の準等長同値類が生成系の選択によらないことの証明" },
                            { id: "2.3", title: "準等長不変量の例", description: "成長度・エンド数・仮想コホモロジー次元の準等長不変性" },
                            { id: "2.4", title: "群の成長度", description: "多項式成長・指数成長の定義、グロモフの多項式成長定理の主張" },
                            { id: "2.5", title: "ゲルファント-フォーエンスの定理の系", description: "格子の準等長剛性の概観、リー群の格子への応用" }
                        ]
                    },
                    {
                        id: "3", title: "双曲群", description: "グロモフ双曲性・スリムトライアングル・双曲群の基本性質・線形代数的構造",
                        sections: [
                            { id: "3.1", title: "グロモフ双曲空間の定義", description: "δ-スリムトライアングル条件による双曲空間の定義、同値な定式化の列挙" },
                            { id: "3.2", title: "双曲群の定義と例", description: "ケイリーグラフが双曲空間となる群の定義、自由群・曲面群・共コンパクト双曲空間の等長部分群" },
                            { id: "3.3", title: "双曲群の基本性質", description: "語の問題の線形時間可解性、有限個の共役類への有限位数元の集中、デーン算法の存在" },
                            { id: "3.4", title: "双曲群の線形性問題", description: "線形表現の存在の未解決問題の概観" }
                        ]
                    },
                    {
                        id: "4", title: "双曲群の境界理論", description: "グロモフ境界・収束群・境界の位相的性質・自己同型群への作用",
                        sections: [
                            { id: "4.1", title: "グロモフ境界の定義", description: "測地線の同値類によるグロモフ境界 ∂G の定義、双曲空間の視覚的境界との類比" },
                            { id: "4.2", title: "グロモフ境界のコンパクト化", description: "G ∪ ∂G のコンパクトハウスドルフ空間性、G の作用の連続性" },
                            { id: "4.3", title: "収束群と境界の力学系", description: "収束群の定義、双曲群の ∂G への作用が収束群であることの証明" },
                            { id: "4.4", title: "境界の位相的分類", description: "自由群の境界はカントール集合、曲面群の境界は円周、高次元双曲群の境界の特徴づけ" },
                            { id: "4.5", title: "メンジャー曲線予想", description: "次元1の境界をもつ双曲群の境界がメンジャー曲線に同相であるという予想の概観" }
                        ]
                    },
                    {
                        id: "5", title: "CAT(0)空間と群作用", description: "CAT(0)空間の定義・CAT(0)群・ハダマール空間・平坦部分空間定理",
                        sections: [
                            { id: "5.1", title: "CAT(0)空間の定義", description: "比較三角形による非正曲率条件の定義、リーマン多様体の断面曲率との関係" },
                            { id: "5.2", title: "CAT(0)空間の基本性質", description: "一意測地線の存在・凸性・不動点定理、微分幾何IIとの接続" },
                            { id: "5.3", title: "CAT(0)群の定義と例", description: "コンパクト CAT(0)空間への等長かつ固有不連続な作用をもつ群、直積・自由積の CAT(0)性" },
                            { id: "5.4", title: "平坦部分空間定理", description: "可換部分群と等長的に埋め込まれた平坦部分空間の対応、二面体群との類比" },
                            { id: "5.5", title: "CAT(0)境界", description: "視覚的境界の定義、双曲群の境界との比較、Z^2 作用の境界への影響" }
                        ]
                    },
                    {
                        id: "6", title: "語の問題と決定可能性", description: "語の問題・共役問題の決定可能性、不決定可能群の構成",
                        sections: [
                            { id: "6.1", title: "語の問題の決定可能性", description: "チューリング機械による決定可能性の定義、有限表示群における語の問題の設定" },
                            { id: "6.2", title: "デーン算法と双曲群の語の問題", description: "デーン算法の定義、双曲群での語の問題の線形時間解法" },
                            { id: "6.3", title: "語の問題が決定不可能な群の存在", description: "再帰的に列挙可能だが決定不可能な語の問題をもつ群の構成の概略" },
                            { id: "6.4", title: "共役問題と同型問題", description: "共役問題の難しさ、有限表示群の同型問題の決定不可能性の概観" }
                        ]
                    },
                    {
                        id: "7", title: "展望", description: "準等長剛性・アウトF_n・3次元多様体の基本群との接続",
                        sections: [
                            { id: "7.1", title: "準等長剛性の結果", description: "高次ランク格子の準等長剛性定理、Pansu・Kleiner-Leebらの結果の概観" },
                            { id: "7.2", title: "自由群の外部自己同型群 Out(F_n)", description: "アウトF_n の定義、マッピングクラス群との類比、曲線複体の類似物" },
                            { id: "7.3", title: "3次元多様体の基本群との接続", description: "サーストン幾何化と基本群の幾何学的性質、低次元位相幾何学との接続" },
                            { id: "7.4", title: "アーメナブル群と従順性", description: "アーメナブル群の定義、フォン・ノイマン予想の解決と中間成長度の群の存在、エルゴード理論との接続" }
                        ]
                    }
                ],
                prerequisites: ["4-5", "4-8"]
            },
            {
                id: "5-20",
                title: "K理論",
                chapters: [
                    {
                        id: "1", title: "位相的 K 理論の基礎", description: "ベクトル束・安定同値・K^0(X) の定義、グロタンディーク群の構成",
                        sections: [
                            { id: "1.1", title: "ベクトル束の復習と安定同値", description: "コンパクトハウスドルフ空間上のベクトル束の定義、安定同値関係の定義と直和モノイドの構成" },
                            { id: "1.2", title: "グロタンディーク群の構成", description: "アーベルモノイドからアーベル群を構成する普遍的手続き、K^0(X) の定義" },
                            { id: "1.3", title: "K^0(X) の関手性と積構造", description: "連続写像の引き戻しによる反変関手性、テンソル積による環構造" },
                            { id: "1.4", title: "K^0(X) の基本計算例", description: "一点・球面・複素射影空間の K^0 の計算、外部積による K^0(S^{2n}) の生成元" }
                        ]
                    },
                    {
                        id: "2", title: "縮約 K 群とボット周期性", description: "K^{-1}(X)・縮約 K 群・ボット周期性定理・K 理論のコホモロジー論的構造",
                        sections: [
                            { id: "2.1", title: "縮約 K 群 K-tilde^0(X) の定義", description: "基点付き空間の縮約 K 群、K^0(X) との関係" },
                            { id: "2.2", title: "K^{-1}(X) の定義", description: "懸架による定義 K^{-1}(X) = K-tilde^0(ΣX)、ユニタリ群との対応" },
                            { id: "2.3", title: "ボット周期性定理の主張", description: "K^{-2}(X) ≅ K^0(X) の同型、複素版と実版の違い" },
                            { id: "2.4", title: "ボット周期性の証明の概略", description: "アティヤ-ボットの証明における楕円型作用素の役割" },
                            { id: "2.5", title: "K 理論の一般化コホモロジー論としての位置づけ", description: "アイレンバーグ-スティーンロッドの公理との対比、スペクトラムによる表現の概観" }
                        ]
                    },
                    {
                        id: "3", title: "K 理論の完全系列", description: "コファイバー系列・マイヤー-ビエトリス完全系列・アティヤ-ヒルゼブルフ スペクトル系列",
                        sections: [
                            { id: "3.1", title: "コファイバー系列と長完全系列", description: "写像錐を用いたコファイバー系列の定義、K 群の6項完全系列" },
                            { id: "3.2", title: "マイヤー-ビエトリス完全系列", description: "空間の被覆に対する K 群の完全系列と計算への応用" },
                            { id: "3.3", title: "アティヤ-ヒルゼブルフ スペクトル系列", description: "通常コホモロジーから K 理論を計算するスペクトル系列の構成" },
                            { id: "3.4", title: "チャーン指標と整合性", description: "チャーン指標写像 ch: K^0(X) → H^{even}(X;Q) の定義、スペクトル系列との関係" }
                        ]
                    },
                    {
                        id: "4", title: "アティヤ-シンガーの指数定理と K 理論", description: "楕円型作用素の指数・解析的指数・位相的指数・K 理論的定式化",
                        sections: [
                            { id: "4.1", title: "楕円型微分作用素と解析的指数", description: "シンボル写像・楕円型条件の定義、核と余核の有限次元性、微分幾何IIとの接続" },
                            { id: "4.2", title: "記号類と位相的指数", description: "記号写像が定める K 理論の元、位相的指数の K 理論的定義" },
                            { id: "4.3", title: "指数定理の K 理論的定式化", description: "解析的指数と位相的指数の一致、チャーン指標による古典的表示との対応" },
                            { id: "4.4", title: "指数定理の特別な場合", description: "ガウス-ボンネ・リーマン-ロッホ・ヒルゼブルフ署名定理の統一的導出の概観" },
                            { id: "4.5", title: "等変 K 理論とファミリー指数定理", description: "群作用をもつ空間の K 理論、ファミリーの指数の K 群の元としての定義" }
                        ]
                    },
                    {
                        id: "5", title: "代数的 K 理論の基礎", description: "K_0(R)・K_1(R)・ミルナーの K_2・グロタンディーク群の代数的類似",
                        sections: [
                            { id: "5.1", title: "K_0(R) の定義", description: "有限生成射影 R-加群の同値類のグロタンディーク群、ホモロジー代数との接続" },
                            { id: "5.2", title: "K_0 の計算例", description: "デデキント整域での K_0 とイデアル類群の関係、代数数論との接続" },
                            { id: "5.3", title: "K_1(R) の定義", description: "一般線形群の可換化 GL(R)^{ab} による定義、行列式との関係" },
                            { id: "5.4", title: "ホワイトヘッドの補題と K_1 の計算", description: "基本行列の正規部分群性の証明、体上の K_1 の計算" },
                            { id: "5.5", title: "ミルナーの K_2 と Steinberg 群", description: "St(R) の定義、K_2(R) = Ker(St(R) → E(R)) の定義とミルナーの K_2 の意味" }
                        ]
                    },
                    {
                        id: "6", title: "高次代数的 K 理論", description: "クイレンの Q 構成・プラス構成・高次 K 群・基本的計算",
                        sections: [
                            { id: "6.1", title: "クイレンのプラス構成", description: "BGL(R)^+ の定義、基本群と K_1・K_2 との整合性の確認" },
                            { id: "6.2", title: "Q 構成と高次 K 群", description: "完全圏 C に対する K(C) = ΩBQC の定義、K_n(C) の定義" },
                            { id: "6.3", title: "Q 構成とプラス構成の同値性", description: "両定義が K_n を与えることの一致定理の主張" },
                            { id: "6.4", title: "高次 K 群の計算例", description: "有限体上の高次 K 群・クイレンの計算定理の主張" },
                            { id: "6.5", title: "ボット元と K 理論の周期性", description: "代数的 K 理論の周期性予想の概観、位相的ボット周期性との類比" }
                        ]
                    },
                    {
                        id: "7", title: "展望", description: "エタール K 理論・動機的コホモロジー・非可換幾何との接続",
                        sections: [
                            { id: "7.1", title: "代数的 K 理論と代数幾何", description: "スキームの K 群・Quillen-Lichtenbaum 予想の概観、代数幾何 II との接続" },
                            { id: "7.2", title: "動機的コホモロジーと Milnor 予想", description: "Milnor K 理論と Galois コホモロジーの関係、Voevodsky の定理の概観" },
                            { id: "7.3", title: "非可換幾何との接続", description: "コンヌ-チャーン指標・サイクリックコホモロジーとの対応、非可換幾何への接続" }
                        ]
                    }
                ],
                prerequisites: ["5-10"]
            },
            {
                id: "5-21",
                title: "非可換幾何",
                chapters: [
                    {
                        id: "1", title: "非可換幾何の動機と基礎", description: "可換 C*-環と位相空間の対応の復習、非可換化の方針、基本例",
                        sections: [
                            { id: "1.1", title: "ゲルファント双対性の復習", description: "可換 C*-環の圏とコンパクトハウスドルフ空間の圏の同値、作用素環論との接続" },
                            { id: "1.2", title: "非可換化の哲学", description: "位相空間の代わりに C*-環を「空間」とみなす立場、商空間の病理的例と非可換幾何による解決" },
                            { id: "1.3", title: "葉層構造の C*-環", description: "葉層多様体の葉層 C*-環の構成、通常の関数環では捉えられない構造の例" },
                            { id: "1.4", title: "非可換トーラス", description: "非可換トーラス A_θ の定義、θ が有理数・無理数の場合の代数的性質の違い" }
                        ]
                    },
                    {
                        id: "2", title: "スペクトル三重組", description: "スペクトル三重組の定義・可換な場合とリーマン多様体との対応・基本例",
                        sections: [
                            { id: "2.1", title: "スペクトル三重組の定義", description: "代数 A・ヒルベルト空間 H・ディラック作用素 D の三つ組と公理系" },
                            { id: "2.2", title: "可換な場合のリーマン多様体との対応", description: "コンパクトリーマンスピン多様体 M に対する標準的スペクトル三重組の構成" },
                            { id: "2.3", title: "リーマン計量の回復", description: "ディラック作用素から測地的距離を復元するコンヌの距離公式の主張" },
                            { id: "2.4", title: "スペクトル三重組の基本例", description: "非可換トーラス・フォン・ノイマン環・有限次元の場合の例" },
                            { id: "2.5", title: "実構造と向き付け条件", description: "実スペクトル三重組の定義、電荷共役作用素 J の役割" }
                        ]
                    },
                    {
                        id: "3", title: "非可換微積分とディクシミエ跡", description: "無限小の代数的定式化・ディクシミエ跡・ゼータ関数正則化・非可換積分",
                        sections: [
                            { id: "3.1", title: "コンヌの無限小の代数的定義", description: "コンパクト作用素の特異値による無限小の次数の定義、古典的微小量との対比" },
                            { id: "3.2", title: "ディクシミエ跡の定義", description: "通常のトレースでは消えるが Dixmier 跡では生き残る作用素のクラスの定義" },
                            { id: "3.3", title: "ゼータ関数正則化", description: "|D|^{-s} のゼータ関数の定義と s = n での留数による積分値の抽出" },
                            { id: "3.4", title: "非可換積分の定義", description: "ディクシミエ跡による積分 ∫a |D|^{-n} の定義、可換な場合でのルベーグ積分との一致" },
                            { id: "3.5", title: "ウォジツキ剰余", description: "擬微分作用素のウォジツキ剰余との同一視、局所性との関係" }
                        ]
                    },
                    {
                        id: "4", title: "サイクリックコホモロジー", description: "サイクリックコホモロジーの定義・コンヌの長完全系列・コンヌ-チャーン指標",
                        sections: [
                            { id: "4.1", title: "ホッホシルトコホモロジーの復習", description: "代数 A のホッホシルト複体 CC*(A) の定義、K理論との接続の準備" },
                            { id: "4.2", title: "サイクリックコホモロジーの定義", description: "巡回群作用による不変部分、HC*(A) の定義と計算例" },
                            { id: "4.3", title: "コンヌの SBI 長完全系列", description: "ホッホシルト・サイクリック・周期的サイクリックコホモロジーを結ぶ完全系列" },
                            { id: "4.4", title: "コンヌ-チャーン指標写像", description: "K_0(A) から偶数次周期的サイクリックコホモロジーへの写像の定義と自然性" },
                            { id: "4.5", title: "指数定理のサイクリックコホモロジー的定式化", description: "コンヌ-チャーン指標による局所指数公式の概観" }
                        ]
                    },
                    {
                        id: "5", title: "幾何的例と応用", description: "非可換トーラスの幾何・葉層構造の指数定理・量子ホール効果",
                        sections: [
                            { id: "5.1", title: "非可換トーラスの微分幾何", description: "A_θ 上のスペクトル三重組の構成、曲率・スカラー曲率の非可換版" },
                            { id: "5.2", title: "葉層構造の指数定理", description: "コンヌの葉層指数定理の主張、横断的 K 理論と葉層コホモロジーの役割" },
                            { id: "5.3", title: "量子ホール効果の非可換幾何的説明", description: "磁場中の電子の C*-環的定式化、ホール伝導度の K_0 の元としての解釈" },
                            { id: "5.4", title: "非可換標準模型の概観", description: "コンヌ-ロット-マルコルのスペクトル三重組による素粒子標準模型の幾何的導出の概観" }
                        ]
                    },
                    {
                        id: "6", title: "展望", description: "非可換幾何と数論・モチーフ・ラングランズ対応",
                        sections: [
                            { id: "6.1", title: "リーマンゼータ関数の非可換幾何的解釈", description: "アデール類空間のスペクトル三重組、ゼータ関数の零点とスペクトルの関係、解析的数論との接続" },
                            { id: "6.2", title: "非可換モチーフの概観", description: "コンヌ-マルコルのモチーフ的アプローチ、古典的モチーフ理論との比較" },
                            { id: "6.3", title: "ラングランズ対応への展望", description: "非可換幾何的手法による自己同型形式の解析、表現論との合流点" }
                        ]
                    }
                ],
                prerequisites: ["5-8", "5-20"]
            },
            {
                id: "5-22",
                title: "ホモトピー型理論",
                chapters: [
                    {
                        id: "1", title: "型理論の基礎", description: "Martin-Löf 依存型理論・判断・文脈・型の形成規則",
                        sections: [
                            { id: "1.1", title: "型理論の動機と ZFC との対比", description: "集合論的基礎との違い、証明を「項」として扱う立場、数理論理学I の ZFC との比較" },
                            { id: "1.2", title: "判断と文脈の定義", description: "型判断 a:A・型形成判断 A:Type の構文的定義、文脈 Γ の形成規則" },
                            { id: "1.3", title: "依存積型（Π 型）の定義", description: "依存関数型 Π(x:A).B(x) の形成・導入・除去・計算規則" },
                            { id: "1.4", title: "依存和型（Σ 型）の定義", description: "依存対型 Σ(x:A).B(x) の形成・導入・除去・計算規則" },
                            { id: "1.5", title: "宇宙の階層", description: "型の型としての宇宙 U_0, U_1, U_2,... の導入、ラッセルのパラドックスの回避" }
                        ]
                    },
                    {
                        id: "2", title: "命題としての型（カリー-ハワード対応）", description: "命題と型の同一視・証明と項の同一視・論理結合子の型理論的解釈",
                        sections: [
                            { id: "2.1", title: "カリー-ハワード対応の概観", description: "含意と関数型・連言と積型・選言と和型の対応、数理論理学II との接続" },
                            { id: "2.2", title: "命題論理の型理論的解釈", description: "¬A = A → 0・A ↔ B = (A → B) × (B → A) の定義" },
                            { id: "2.3", title: "述語論理の型理論的解釈", description: "全称命題と Π 型・存在命題と Σ 型の対応、量化子の依存型による自然な表現" },
                            { id: "2.4", title: "構成的数学としての型理論", description: "排中律・二重否定除去の非定理性、構成的証明の意味" },
                            { id: "2.5", title: "命題的截断", description: "集合論的存在と命題的存在の区別、截断 ‖A‖ の定義と古典的存在との対比" }
                        ]
                    },
                    {
                        id: "3", title: "同一性型と道の空間", description: "同一性型の定義・経路帰納法・同一性型の高次群様構造",
                        sections: [
                            { id: "3.1", title: "同一性型の定義", description: "Id_A(a,b) の形成・導入・除去規則、反射性の証明項 refl の定義" },
                            { id: "3.2", title: "経路帰納法（J 規則）", description: "同一性型の除去規則の詳細、輸送写像 transport の構成" },
                            { id: "3.3", title: "同一性の基本性質", description: "対称性・推移性・関数による合成の型理論的証明、結合律の証明" },
                            { id: "3.4", title: "道の空間としての解釈", description: "同一性型を位相空間の道空間とみなすホモトピー的直観、代数的トポロジーとの対応" },
                            { id: "3.5", title: "高次の同一性と∞グルポイド構造", description: "同一性の同一性 Id_{Id_A(a,b)}(p,q) の存在、無限階の群様構造の出現" }
                        ]
                    },
                    {
                        id: "4", title: "高次帰納型", description: "円・球面・懸架・商型の型理論的定義、ホモトピー群の計算",
                        sections: [
                            { id: "4.1", title: "高次帰納型の概念", description: "構成子に経路・高次経路を含める型の定義、一般的な形成規則" },
                            { id: "4.2", title: "円 S^1 の型理論的定義", description: "点構成子 base と経路構成子 loop による S^1 の定義、基本群の計算" },
                            { id: "4.3", title: "球面と懸架の定義", description: "S^n の再帰的定義、懸架構成の型理論的定式化" },
                            { id: "4.4", title: "商型とセットコイド", description: "同値関係による商の型理論的定義、集合論的商との対比" },
                            { id: "4.5", title: "トランケーションと n-型", description: "n-型の定義、命題・集合・グルポイドの階層、代数的トポロジーとの接続" }
                        ]
                    },
                    {
                        id: "5", title: "単価公理", description: "同値と等式の同一視・単価公理の主張と帰結・関数外延性",
                        sections: [
                            { id: "5.1", title: "型の同値の定義", description: "同値写像 f:A → B の定義、半随伴同値・収縮性による特徴づけ" },
                            { id: "5.2", title: "単価公理の主張", description: "ua: (A ≃ B) ≃ (A = B) の主張、同値と等式の互換性" },
                            { id: "5.3", title: "単価公理の帰結", description: "関数外延性の導出、命題外延性との関係、数学的実践への影響" },
                            { id: "5.4", title: "型の分類と宇宙", description: "単価公理による宇宙 U の∞グルポイド構造、宇宙の内部での同値の分類" },
                            { id: "5.5", title: "単価公理と集合論の対比", description: "ZFC の外延性公理との類似と相違、基礎としての比較" }
                        ]
                    },
                    {
                        id: "6", title: "∞圏・∞トポスとの接続", description: "Kan 複体・∞グルポイド・∞トポスの意味論・HoTT の圏論的モデル",
                        sections: [
                            { id: "6.1", title: "Kan 複体と∞グルポイド", description: "単体的集合・ホーン充填条件・Kan 複体の定義、∞グルポイドとしての解釈" },
                            { id: "6.2", title: "HoTT の Kan 複体モデル", description: "Voevodsky による Kan 複体でのモデルの構成概略、単価公理の成立" },
                            { id: "6.3", title: "∞トポスの意味論", description: "Shulman-Cisinski による∞トポスでの HoTT の解釈、幾何学的直観" },
                            { id: "6.4", title: "立方体型理論と計算的解釈", description: "Cohen-Coquand-Huber-Mörtberg の cubical type theory、単価公理の計算規則" },
                            { id: "6.5", title: "証明支援系への接続", description: "Agda・Coq・Lean での HoTT の実装、形式化数学の現状と圏論との接続" }
                        ]
                    }
                ],
                prerequisites: ["3-14", "3-15", "4-8"]
            },
            {
                id: "5-23",
                title: "公理的集合論",
                chapters: [
                    {
                        id: "1", title: "ZFC の精密化とクラス理論", description: "ZFC 公理系の再訪・クラスと集合の区別・NBG 公理系・フォン・ノイマン宇宙 V",
                        sections: [
                            { id: "1.1", title: "ZFC 公理系の論理的再整理", description: "各公理の役割の確認、数理論理学II の復習と精密化、ラッセルのパラドックスの回避機構" },
                            { id: "1.2", title: "クラスの概念と真クラス", description: "集合でないクラスの定義、Ord・Card・V などの真クラスの例" },
                            { id: "1.3", title: "NBG 公理系", description: "フォン・ノイマン-ベルナイス-ゲーデル公理系の定義、ZFC との保守的拡張としての関係" },
                            { id: "1.4", title: "累積的階層とフォン・ノイマン宇宙 V", description: "V_α の超限帰納的定義、全集合が V_α のどこかに属することの証明" },
                            { id: "1.5", title: "ランクと正則性公理", description: "集合のランクの定義、正則性公理と累積的階層の整合性" }
                        ]
                    },
                    {
                        id: "2", title: "整礎性と反射原理", description: "∈-帰納法・モストフスキ崩壊補題・反射原理・到達不能基数の動機",
                        sections: [
                            { id: "2.1", title: "∈-帰納法と整礎帰納法", description: "∈-関係の整礎性と帰納的証明の原理、推移的閉包の構成" },
                            { id: "2.2", title: "モストフスキ崩壊補題", description: "整礎的で推移的でない関係を推移的集合に写す崩壊写像の存在と一意性" },
                            { id: "2.3", title: "反射原理", description: "V の真の命題が何らかの V_α でも成立するという原理、大基数への動機づけ" },
                            { id: "2.4", title: "推移的モデルと絶対性", description: "Δ_0 論理式の推移的モデルでの絶対性、絶対性と相対的無矛盾性証明の関係" }
                        ]
                    },
                    {
                        id: "3", title: "ゲーデルの構成的宇宙 L", description: "構成的べき集合・構成可能宇宙 L・AC と GCH の L での成立・相対的無矛盾性",
                        sections: [
                            { id: "3.1", title: "構成的べき集合 Def(X) の定義", description: "一階論理式で定義可能な部分集合のみを取る操作の定義" },
                            { id: "3.2", title: "構成可能宇宙 L の定義", description: "L_α の超限帰納的定義、V との比較と L ⊆ V の関係" },
                            { id: "3.3", title: "L での選択公理の成立", description: "L の整列可能性の証明、AC の L における真偽" },
                            { id: "3.4", title: "L での一般連続体仮説 GCH の成立", description: "L での 2^{κ} = κ^+ の証明の概略、カードの押しつぶし補題" },
                            { id: "3.5", title: "相対的無矛盾性の意味", description: "Con(ZF) → Con(ZF + AC + GCH) の主張とその論理的意味" }
                        ]
                    },
                    {
                        id: "4", title: "強制法（Forcing）の基礎", description: "半順序集合・ジェネリックフィルター・強制言語・強制関係・基本定理",
                        sections: [
                            { id: "4.1", title: "強制法の動機", description: "独立性証明の戦略、ZFC のモデルを「拡張」して新しい集合を付け加える発想" },
                            { id: "4.2", title: "半順序集合と稠密集合", description: "強制法の準備としての半順序集合 P、稠密集合・前稠密集合の定義" },
                            { id: "4.3", title: "ジェネリックフィルターの定義", description: "G が P-ジェネリックであることの定義、V[G] の構成の概略" },
                            { id: "4.4", title: "P-名称と強制言語", description: "P-名称の帰納的定義、V[G] の元の P-名称による表現" },
                            { id: "4.5", title: "強制関係の定義", description: "p ⊩ φ の帰納的定義、意味論的強制と構文論的強制の同値性" },
                            { id: "4.6", title: "強制法の基本定理", description: "真理補題・稠密性補題の証明、V[G] が ZFC のモデルになることの確認" }
                        ]
                    },
                    {
                        id: "5", title: "連続体仮説の独立性", description: "Cohen 強制法・CH の否定の無矛盾性・マーティンの公理",
                        sections: [
                            { id: "5.1", title: "連続体仮説の否定の無矛盾性", description: "有限部分関数の半順序集合 Add(ω, ω_2) の定義、ジェネリック拡大での 2^{ℵ_0} ≥ ℵ_2 の証明" },
                            { id: "5.2", title: "カードの押しつぶしが起きないこと", description: "可算鎖条件 ccc の定義、Add(ω, ω_2) の ccc 性の証明" },
                            { id: "5.3", title: "GCH の独立性のまとめ", description: "L での成立と Cohen 拡大での否定の対比、ZFC からの完全な独立性" },
                            { id: "5.4", title: "マーティンの公理 MA", description: "MA の主張、CH との独立性、MA + ¬CH の無矛盾性の概観" },
                            { id: "5.5", title: "強制法の一般的な枠組み", description: "ブール値モデルによる強制法の定式化、超積との対比" }
                        ]
                    },
                    {
                        id: "6", title: "大基数公理", description: "到達不能基数・マハロ基数・可測基数・超コンパクト基数・大基数の階層",
                        sections: [
                            { id: "6.1", title: "到達不能基数の定義", description: "強到達不能基数の定義、ZFC での証明不可能性の意味" },
                            { id: "6.2", title: "反射原理と弱到達不能基数", description: "反射原理との関係、弱・強到達不能基数の区別" },
                            { id: "6.3", title: "マハロ基数", description: "定常集合に閉じた基数という定義、到達不能基数との強さの比較" },
                            { id: "6.4", title: "可測基数と超フィルター", description: "κ-完備な超フィルターの存在による可測基数の定義、超積との関係" },
                            { id: "6.5", title: "ウラム行列と実数値可測基数", description: "ウラム行列の構成、実数値可測基数の定義と可測基数との関係" },
                            { id: "6.6", title: "超コンパクト基数と大基数の階層", description: "超コンパクト基数の定義、大基数の強さの大まかな順序と V = L との非両立性" }
                        ]
                    },
                    {
                        id: "7", title: "記述集合論と決定公理", description: "ボレル集合・射影的階層・決定公理・大基数との接続",
                        sections: [
                            { id: "7.1", title: "ボレル集合と射影的階層", description: "ボレル集合の超限帰納的定義、解析集合・共解析集合・射影的集合の階層" },
                            { id: "7.2", title: "解析集合の正則性", description: "解析集合の可測性・ベールの性質・完全集合性質の証明" },
                            { id: "7.3", title: "射影的集合の正則性と ZFC の限界", description: "Σ^1_2 以上での正則性問題の ZFC 上の決定不可能性" },
                            { id: "7.4", title: "決定公理 AD", description: "無限ゲームの決定可能性の公理の定義、AC との非両立性・DC との整合性" },
                            { id: "7.5", title: "大基数と決定公理", description: "可測基数の仮定から解析的決定性が従うことの概観、射影的決定性と大基数の関係" },
                            { id: "7.6", title: "展望", description: "内部モデルプログラムの概観、ウッディン基数と P_max 強制法への言及" }
                        ]
                    }
                ],
                prerequisites: ["4-17"]
            },
            {
                id: "5-24",
                title: "超準解析",
                chapters: [
                    {
                        id: "1", title: "超実数体の構成", description: "超フィルター・超積・超実数体 *R・順序構造",
                        sections: [
                            { id: "1.1", title: "超フィルターの存在と性質", description: "フィルター・超フィルターの定義、選択公理を用いた超フィルターの存在定理、数理論理学IIの超積との接続" },
                            { id: "1.2", title: "超積構成 R^N / U", description: "R^N の同値関係の定義、商体としての *R の構成、R の *R への標準的埋め込み" },
                            { id: "1.3", title: "*R の順序体としての性質", description: "全順序の構成、アルキメデス性の不成立、無限大元・無限小元の存在" },
                            { id: "1.4", title: "超実数の代数的構造", description: "標準実数・有限超実数・無限大・無限小の分類、無限小の加法群・乗法群としての構造" }
                        ]
                    },
                    {
                        id: "2", title: "移行原理", description: "一階論理の文の移行・ロスの定理・標準化原理・内部集合",
                        sections: [
                            { id: "2.1", title: "内部集合と外部集合の区別", description: "超積構成から生じる内部集合の定義、外部集合の例としての標準部分集合" },
                            { id: "2.2", title: "ロスの定理と移行原理", description: "超積でのロスの定理の再確認、*R への適用としての移行原理の主張" },
                            { id: "2.3", title: "移行原理の具体的使用例", description: "実数の完全体公理の *R での成立、アルキメデス性など一階では表せない性質の不移行" },
                            { id: "2.4", title: "標準化原理", description: "標準的な集合・関数の *R への持ち上げ *A・*f の定義と基本性質" },
                            { id: "2.5", title: "ω₁-飽和性", description: "可算型の実現という飽和性の主張、非標準モデルの豊富さの表現" }
                        ]
                    },
                    {
                        id: "3", title: "標準部分写像", description: "有限超実数の標準部分・無限近傍・標準部分写像 st の性質",
                        sections: [
                            { id: "3.1", title: "無限近傍とモナド", description: "実数 r の無限近傍 μ(r) = {x ∈ *R : x ≈ r} の定義、無限近傍の代数的構造" },
                            { id: "3.2", title: "標準部分写像 st の定義", description: "有限超実数から実数への写像 st: *R_fin → R の定義、商写像としての性質" },
                            { id: "3.3", title: "st の基本性質", description: "加減乗除との可換性、st の不連続性と外部写像としての性質" },
                            { id: "3.4", title: "超限近傍の位相的意味", description: "位相空間の点のモナドによる近傍フィルターの特徴づけ、位相概念の超準的表現の準備" }
                        ]
                    },
                    {
                        id: "4", title: "超準的微積分", description: "連続性・微分・積分・テイラー展開の無限小による再定式化",
                        sections: [
                            { id: "4.1", title: "連続性の超準的定義", description: "f が a で連続 ⟺ x ≈ a ならば *f(x) ≈ f(a) の定義、ε-δ定義との同値性の証明" },
                            { id: "4.2", title: "一様連続性の超準的定義", description: "f が一様連続 ⟺ x ≈ y ならば *f(x) ≈ *f(y) の定義、有界閉区間での連続性との同値性" },
                            { id: "4.3", title: "微分の超準的定義", description: "dy/dx を無限小 dx に対する *f(x+dx) - f(x) の標準部分として定義、古典的極限との同値性" },
                            { id: "4.4", title: "積分の超準的定義", description: "内部リーマン和の超限個の加算としての積分の定義、ルベーグ積分との関係" },
                            { id: "4.5", title: "高階微分とテイラー展開の超準的解釈", description: "無限小の高次べきによる余剰項の評価、テイラーの定理の簡明な証明" }
                        ]
                    },
                    {
                        id: "5", title: "超準的位相論と関数解析", description: "コンパクト性・モナド・超準的バナッハ空間・内部ヒルベルト空間",
                        sections: [
                            { id: "5.1", title: "コンパクト性の超準的特徴づけ", description: "X がコンパクト ⟺ *X の全元が X の元の無限近傍をもつことの同値性の証明" },
                            { id: "5.2", title: "モナドによる位相概念の統一", description: "開集合・閉集合・連続性・コンパクト性のモナドによる統一的記述" },
                            { id: "5.3", title: "内部ノルム空間と *-バナッハ空間", description: "バナッハ空間 E の超準的持ち上げ *E の定義、有限元・無限小元の分類" },
                            { id: "5.4", title: "超準的コンパクト性と弱コンパクト性", description: "内部有界集合の標準部分のコンパクト性、ヒルベルト空間の単位球の弱コンパクト性への応用" },
                            { id: "5.5", title: "超準的スペクトル理論の概観", description: "作用素のスペクトルの超準的解釈、関数解析の定理の超準的証明例" }
                        ]
                    },
                    {
                        id: "6", title: "Loeb 測度と超準的確率論", description: "内部確率空間・Loeb 測度の構成・超準的確率変数・ブラウン運動の超準的構成",
                        sections: [
                            { id: "6.1", title: "内部確率空間の定義", description: "*-有限集合上の内部測度の定義、古典的確率空間との比較" },
                            { id: "6.2", title: "Loeb 測度の構成", description: "内部測度から外部のσ加法族と外測度を経てLoeb 測度を構成する手順、カラテオドリの定理の適用" },
                            { id: "6.3", title: "Loeb 測度の性質", description: "Loeb 空間の完備σ加法族、Loeb 測度空間の豊富さ、標準的確率空間への射の存在" },
                            { id: "6.4", title: "超準的確率変数と期待値", description: "内部関数の Loeb 可測性の条件、期待値の超準的定義と標準的定義との一致" },
                            { id: "6.5", title: "ブラウン運動の超準的構成", description: "Loeb 空間上の超限リーマン和によるブラウン運動の構成、確率過程論との接続" }
                        ]
                    },
                    {
                        id: "7", title: "展望と応用", description: "超準的組合せ論・超準的代数・公理的集合論との関係",
                        sections: [
                            { id: "7.1", title: "超準的組合せ論", description: "超有限集合を用いた有限組合せ論の結果の証明、ラムゼー理論への応用例" },
                            { id: "7.2", title: "ネルソンの内部集合論 IST", description: "ZFC に記述子 st を加えた公理体系の定義、超積構成なしの超準解析の定式化" },
                            { id: "7.3", title: "公理的集合論との関係", description: "超フィルターの存在と選択公理の関係の再確認、強制法との類比の概観、公理的集合論との接続" },
                            { id: "7.4", title: "超準的手法の現代的応用", description: "組合せ的数論・エルゴード理論・確率偏微分方程式への超準的アプローチの概観" }
                        ]
                    }
                ],
                prerequisites: ["4-17"]
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
                chapters: [
                    {
                        id: "1", title: "基本概念", description: "グラフの定義・頂点と辺・次数・道と閉路・連結性",
                        sections: [
                            { id: "1.1", title: "グラフの定義と種類", description: "無向グラフ・有向グラフ・多重グラフ・単純グラフの定義、隣接行列・接続行列による表現" },
                            { id: "1.2", title: "次数と握手補題", description: "頂点の次数の定義、全頂点の次数の和が辺数の2倍であることの証明" },
                            { id: "1.3", title: "道・歩道・閉路", description: "歩道・道・閉路の定義の区別、長さの定義、最短路の概念" },
                            { id: "1.4", title: "連結性と連結成分", description: "連結グラフの定義、連結成分の定義と個数、橋と切断点の定義" },
                            { id: "1.5", title: "二部グラフの特徴づけ", description: "二部グラフの定義、奇閉路を含まないことへの同値性の証明" }
                        ]
                    },
                    {
                        id: "2", title: "木", description: "木の定義と特徴づけ・全域木・最小全域木アルゴリズム",
                        sections: [
                            { id: "2.1", title: "木の定義と同値条件", description: "閉路を含まない連結グラフとしての定義、辺数・頂点数・連結性・非閉路性による複数の同値条件" },
                            { id: "2.2", title: "全域木の存在と構成", description: "連結グラフの全域木の存在定理、BFS・DFS による構成" },
                            { id: "2.3", title: "プリューファー符号と標識木の個数", description: "標識木の数え上げ、ケイリーの公式 n^{n-2} の証明" },
                            { id: "2.4", title: "最小全域木とクラスカル法", description: "重み付きグラフの最小全域木の定義、クラスカル法の正当性の証明" },
                            { id: "2.5", title: "プリム法とその計算量", description: "プリム法の手順と正当性、クラスカル法との比較" }
                        ]
                    },
                    {
                        id: "3", title: "オイラー路とハミルトン路", description: "オイラーグラフの判定・ハミルトン閉路・計算複雑性の違い",
                        sections: [
                            { id: "3.1", title: "オイラー路の定義と判定条件", description: "オイラー路・オイラー閉路の定義、奇数次頂点の個数による判定定理の証明" },
                            { id: "3.2", title: "フルーリーのアルゴリズム", description: "オイラー路の構成的アルゴリズム、橋を避ける選択の役割" },
                            { id: "3.3", title: "有向グラフのオイラー路", description: "有向オイラー閉路の条件、各頂点の入次数と出次数の一致" },
                            { id: "3.4", title: "ハミルトン閉路の定義と例", description: "ハミルトン路・閉路の定義、正十二面体グラフなどの例" },
                            { id: "3.5", title: "ディラックの定理とオーレの定理", description: "ハミルトン閉路の存在の十分条件、NP 完全性の概観" }
                        ]
                    },
                    {
                        id: "4", title: "平面グラフ", description: "平面埋め込み・オイラーの多面体公式・クラトフスキーの定理",
                        sections: [
                            { id: "4.1", title: "平面グラフの定義と平面埋め込み", description: "辺の交差なしの埋め込みの定義、面の定義" },
                            { id: "4.2", title: "オイラーの多面体公式", description: "連結平面グラフの V - E + F = 2 の証明、球面との位相的対応" },
                            { id: "4.3", title: "平面グラフの辺数の上界", description: "E ≤ 3V - 6 の証明、K_5・K_{3,3} の非平面性の導出" },
                            { id: "4.4", title: "クラトフスキーの定理", description: "グラフが平面的 ⟺ K_5・K_{3,3} の細分を含まないことの主張と証明の概略" },
                            { id: "4.5", title: "ワグナーの定理とマイナー", description: "マイナーの定義、グラフが平面的 ⟺ K_5・K_{3,3} をマイナーとして含まないことの主張" }
                        ]
                    },
                    {
                        id: "5", title: "グラフの彩色", description: "頂点彩色・彩色数・辺彩色・四色定理",
                        sections: [
                            { id: "5.1", title: "頂点彩色と彩色数", description: "k-彩色の定義、彩色数 χ(G) の定義、二部グラフの彩色数が最大2であることの証明" },
                            { id: "5.2", title: "彩色数の上界と下界", description: "最大次数による上界 χ(G) ≤ Δ(G)+1、クリーク数によるの下界 χ(G) ≥ ω(G)" },
                            { id: "5.3", title: "四色定理の主張", description: "平面グラフの彩色数が4以下であるという主張、証明の概略とコンピュータ証明の意義" },
                            { id: "5.4", title: "辺彩色とヴィジングの定理", description: "辺彩色数 χ'(G) の定義、χ'(G) = Δ(G) または Δ(G)+1 であるというヴィジングの定理" },
                            { id: "5.5", title: "彩色多項式", description: "グラフの彩色多項式の定義、削除-縮約公式による計算" }
                        ]
                    },
                    {
                        id: "6", title: "マッチングとカバー", description: "マッチング・ホール婚姻定理・最大マッチング・ケーニヒの定理",
                        sections: [
                            { id: "6.1", title: "マッチングの定義と完全マッチング", description: "マッチング・極大マッチング・最大マッチング・完全マッチングの定義" },
                            { id: "6.2", title: "ホール婚姻定理", description: "二部グラフに完全マッチングが存在する条件の証明" },
                            { id: "6.3", title: "増加路とベルゲの定理", description: "増加路の定義、マッチングが最大 ⟺ 増加路が存在しないことの証明" },
                            { id: "6.4", title: "ケーニヒの定理", description: "二部グラフの最大マッチングのサイズと最小頂点被覆のサイズの一致の証明" },
                            { id: "6.5", title: "一般グラフの最大マッチング", description: "バロスウィッシュの開花アルゴリズムの概観、奇数サイクルの扱い" }
                        ]
                    },
                    {
                        id: "7", title: "ネットワークフロー", description: "フローネットワーク・最大流・最小カット・最大流最小カット定理",
                        sections: [
                            { id: "7.1", title: "フローネットワークの定義", description: "容量・フロー・源泉・吸収の定義、フローの保存則" },
                            { id: "7.2", title: "増加路とフォード-ファルカーソン法", description: "残余グラフ・増加路の定義、アルゴリズムの手順と終了条件" },
                            { id: "7.3", title: "最大流最小カット定理", description: "s-t カットの定義、最大フローの値と最小カットの容量の一致の証明" },
                            { id: "7.4", title: "エドモンズ-カープ法の計算量", description: "BFS による増加路探索、O(VE^2) の計算量解析" },
                            { id: "7.5", title: "最大流の応用", description: "二部マッチングへの帰着、連結度・辺素な道の個数とメンガーの定理" }
                        ]
                    }
                ],
                prerequisites: ["高校数学"]
            },
            {
                id: "A-2",
                title: "組合せ論",
                chapters: [
                    {
                        id: "1", title: "数え上げの基礎", description: "順列・組合せ・二項係数・多項係数・スターリング数",
                        sections: [
                            { id: "1.1", title: "積の法則・和の法則と基本的な数え上げ", description: "順列・組合せの復習、全射・単射の個数の公式" },
                            { id: "1.2", title: "二項係数の性質", description: "パスカルの三角形・対称性・ヴァンデルモンドの恒等式・上限和の公式の証明" },
                            { id: "1.3", title: "多項係数と多項定理", description: "多項係数の定義、多項定理の証明と計算例" },
                            { id: "1.4", title: "第1種・第2種スターリング数", description: "符号付き・符号なしスターリング数の定義、順列の巡回分解・集合の分割との対応" },
                            { id: "1.5", title: "分割数と分割の母関数", description: "整数の分割の定義、ヤング図形による可視化、母関数との接続の準備" }
                        ]
                    },
                    {
                        id: "2", title: "母関数", description: "通常型母関数・指数型母関数・カタラン数・ベル数",
                        sections: [
                            { id: "2.1", title: "通常型母関数の定義と演算", description: "数列の母関数の定義、和・積・シフトの母関数への変換、部分分数分解による閉形式の導出" },
                            { id: "2.2", title: "母関数による漸化式の解法", description: "フィボナッチ数列・カタラン数の漸化式の母関数による解法" },
                            { id: "2.3", title: "カタラン数の諸解釈", description: "C_n の定義、括弧の対応・二分木・単調格子路・三角形分割など複数の組合せ論的解釈" },
                            { id: "2.4", title: "指数型母関数と EGF 乗法", description: "指数型母関数の定義、有標構造の積への EGF の乗法の適用" },
                            { id: "2.5", title: "ベル数と指数型母関数", description: "集合分割の個数としてのベル数、EGF が e^{e^x - 1} で与えられることの証明" },
                            { id: "2.6", title: "オイラー数と交互順列", description: "交互順列の数え上げ、正接・正割の EGF との関係" }
                        ]
                    },
                    {
                        id: "3", title: "包除原理とメビウス反転", description: "包除原理・ポセットのメビウス関数・メビウス反転公式",
                        sections: [
                            { id: "3.1", title: "包除原理の定義と証明", description: "有限集合の和集合の個数公式の証明、論理的な定式化" },
                            { id: "3.2", title: "包除原理の応用", description: "完全順列の個数・オイラーのφ関数・指定の禁止パターンを避ける配置の数え上げ" },
                            { id: "3.3", title: "半順序集合（ポセット）とゼータ関数", description: "ポセットの定義、ゼータ関数 ζ(x,y) の定義、区間代数上での積" },
                            { id: "3.4", title: "ポセットのメビウス関数", description: "メビウス関数 μ(x,y) の帰納的定義、ゼータ関数の逆元としての特徴づけ" },
                            { id: "3.5", title: "メビウス反転公式の一般形", description: "f(x) = Σ_{y≤x} g(y) から g の回収、整数論のメビウス関数との対応" },
                            { id: "3.6", title: "格子・分割ポセットでの計算", description: "部分集合格子・整除ポセット・分割ポセットでのメビウス関数の計算例" }
                        ]
                    },
                    {
                        id: "4", title: "ポリアの計数定理", description: "群の作用・バーンサイドの補題・ポリアの計数定理・応用例",
                        sections: [
                            { id: "4.1", title: "群の作用と軌道", description: "集合への群の作用の定義、軌道・固定部分群の定義、軌道-固定部分群定理" },
                            { id: "4.2", title: "バーンサイドの補題", description: "軌道の個数が各群元の固定点数の平均に等しいことの証明" },
                            { id: "4.3", title: "巡回指標（サイクル指標多項式）", description: "置換の巡回分解に基づく巡回指標の定義と計算例" },
                            { id: "4.4", title: "ポリアの計数定理の主張と証明", description: "巡回指標への色の代入による着色の同値類の数え上げ" },
                            { id: "4.5", title: "ポリア計数の応用", description: "ネックレス・回転する盤の彩色・化学的同型体の数え上げなどの具体例" }
                        ]
                    },
                    {
                        id: "5", title: "ラムゼー理論", description: "ラムゼー数・ラムゼーの定理・ヴァン・デル・ワールデンの定理・エルデシュ-セケレシュの定理",
                        sections: [
                            { id: "5.1", title: "ラムゼーの定理の有限版", description: "2色グラフ彩色における単色クリークの存在、R(3,3)=6 の証明" },
                            { id: "5.2", title: "ラムゼー数 R(s,t) の定義と上界", description: "R(s,t) ≤ R(s-1,t) + R(s,t-1) の証明、二項係数による上界" },
                            { id: "5.3", title: "ラムゼー数の下界と確率論的手法", description: "ランダム2彩色による指数的下界の証明、確率論的手法の威力の例示" },
                            { id: "5.4", title: "無限ラムゼーの定理", description: "無限グラフ版の主張と証明、ケーニヒの無限補題との関係" },
                            { id: "5.5", title: "ヴァン・デル・ワールデンの定理", description: "等差数列を含む単色部分列の存在定理の主張、W(k;r) の定義" },
                            { id: "5.6", title: "エルデシュ-セケレシュの定理", description: "長さ r の単調部分列の存在定理の証明、rs+1 個の実数への適用" }
                        ]
                    },
                    {
                        id: "6", title: "組合せ論の展望", description: "代数的組合せ論・極値グラフ理論・位相的組合せ論との接続",
                        sections: [
                            { id: "6.1", title: "極値グラフ理論の概観", description: "トゥラーンの定理の主張、禁止部分グラフと辺数の上界、グラフ理論との接続" },
                            { id: "6.2", title: "代数的組合せ論への展望", description: "対称関数・ヤング盆地・RSK 対応の概観、表現論との接続" },
                            { id: "6.3", title: "位相的組合せ論への展望", description: "ボルスク-ウラムの定理の組合せ論的応用、クロモマティックホモロジーの概観" }
                        ]
                    }
                ],
                prerequisites: ["高校数学"]
            },
            {
                id: "A-3",
                title: "最適化理論",
                chapters: [
                    {
                        id: "1", title: "線形計画問題", description: "目的関数・制約条件・実行可能領域・基底実行可能解",
                        sections: [
                            { id: "1.1", title: "線形計画問題の定式化", description: "目的関数・等式・不等式制約の標準形への変換、実行可能領域の多面体的構造" },
                            { id: "1.2", title: "実行可能領域の幾何", description: "凸多面体としての実行可能領域、頂点・辺・面の定義と最適解の頂点存在定理" },
                            { id: "1.3", title: "基底実行可能解", description: "基底・非基底変数の定義、基底実行可能解と頂点の対応関係" },
                            { id: "1.4", title: "最適性の条件", description: "目的関数の等高線による幾何的理解、最適解の存在条件と非有界性の判定" }
                        ]
                    },
                    {
                        id: "2", title: "単体法", description: "ピボット演算・基底交換・最適性判定・2段階単体法",
                        sections: [
                            { id: "2.1", title: "単体法の手順", description: "縮小費用係数による入基底変数の選択、比率テストによる出基底変数の決定" },
                            { id: "2.2", title: "ピボット演算と基底行列の更新", description: "ガウス消去法との対応、基底行列 B の逆行列の更新公式" },
                            { id: "2.3", title: "最適性判定と無限ループ防止", description: "縮小費用係数による最適性条件、ブランドの規則によるサイクル防止" },
                            { id: "2.4", title: "2段階単体法と大 M 法", description: "人工変数の導入による初期実行可能基底の構成、2段階法の手順と正当性" },
                            { id: "2.5", title: "単体法の計算量", description: "最悪ケースの指数的挙動、実際的な多項式的挙動との乖離" }
                        ]
                    },
                    {
                        id: "3", title: "双対理論", description: "双対問題・弱双対定理・強双対定理・相補スラック条件",
                        sections: [
                            { id: "3.1", title: "双対問題の導出", description: "主問題から双対問題を構成する系統的手順、双対の双対が主問題に戻ることの確認" },
                            { id: "3.2", title: "弱双対定理", description: "主問題の実行可能解と双対問題の実行可能解の目的関数値の大小関係の証明" },
                            { id: "3.3", title: "強双対定理", description: "最適値が一致するという主張、単体法による証明の概略" },
                            { id: "3.4", title: "相補スラック条件", description: "最適性の必要十分条件としての相補スラック条件の証明と意味" },
                            { id: "3.5", title: "ゲーム理論との接続", description: "ゼロ和ゲームの最小最大定理と強双対定理の同値性の概観、ゲーム理論への展望" }
                        ]
                    },
                    {
                        id: "4", title: "感度分析と整数計画", description: "右辺・目的関数係数の変化・範囲分析・整数計画問題の概観",
                        sections: [
                            { id: "4.1", title: "右辺パラメータの感度分析", description: "b の変化に対する最適基底の維持範囲、双対変数の影価格としての解釈" },
                            { id: "4.2", title: "目的関数係数の感度分析", description: "c の変化に対する最適基底の維持範囲の計算手順" },
                            { id: "4.3", title: "整数計画問題の定式化", description: "0-1 整数計画・混合整数計画の例、連続緩和との関係" },
                            { id: "4.4", title: "分枝限定法の概観", description: "整数制約の分枝による探索木の構成、限定による枝刈りの手順" }
                        ]
                    },
                    {
                        id: "5", title: "凸最適化", description: "凸集合・凸関数・劣微分・最適性条件",
                        sections: [
                            { id: "5.1", title: "凸集合と凸関数の定義", description: "凸集合の定義と例、凸関数の定義と一次近似による特徴づけ" },
                            { id: "5.2", title: "凸関数の性質", description: "上方エピグラフとの同値性、連続性・微分可能性との関係、強凸性の定義" },
                            { id: "5.3", title: "劣微分の定義", description: "非微分可能凸関数に対する劣微分の定義、劣微分の計算例と連鎖律" },
                            { id: "5.4", title: "凸最適化の最適性条件", description: "無制約問題での 0 ∈ ∂f の条件、制約付き問題への一般化の準備" },
                            { id: "5.5", title: "凸解析との接続", description: "共役関数・フェンシェル双対の概観、凸解析担当範囲との棲み分け" }
                        ]
                    },
                    {
                        id: "6", title: "制約付き最適化と KKT 条件", description: "等式制約・不等式制約・ラグランジュ関数・KKT 条件・制約想定",
                        sections: [
                            { id: "6.1", title: "等式制約付き最適化とラグランジュ乗数法", description: "ラグランジュ関数の定義、停留条件の幾何的意味、微分積分学IIの復習との接続" },
                            { id: "6.2", title: "不等式制約付き最適化", description: "有効制約の定義、ラグランジュ関数の不等式版への拡張" },
                            { id: "6.3", title: "KKT 条件の導出と意味", description: "KKT 条件の主張、相補スラック条件の役割、最適性の必要条件としての位置づけ" },
                            { id: "6.4", title: "制約想定", description: "線形独立制約想定・スレーターの条件など KKT 条件が成立するための十分条件の整理" },
                            { id: "6.5", title: "凸問題での KKT 条件の十分性", description: "凸計画問題での KKT 条件が必要十分条件になることの証明" }
                        ]
                    },
                    {
                        id: "7", title: "一階法（勾配法）", description: "最急降下法・勾配法の収束解析・確率的勾配降下法・モーメンタム法",
                        sections: [
                            { id: "7.1", title: "最急降下法の定義と収束", description: "固定ステップ幅・直線探索の定義、L-スムーズ凸関数での O(1/k) 収束の証明" },
                            { id: "7.2", title: "強凸関数での線形収束", description: "強凸性による条件数と O(ρ^k) 収束の証明" },
                            { id: "7.3", title: "共役勾配法", description: "A-共役方向の定義、二次関数の有限終了性、一般関数への拡張としての非線形 CG 法" },
                            { id: "7.4", title: "加速勾配法（ネステロフの方法）", description: "O(1/k^2) 収束を達成する加速スキームの定義と直感" },
                            { id: "7.5", title: "確率的勾配降下法", description: "SGD の定義と期待値収束の議論、機械学習での応用の概観" }
                        ]
                    },
                    {
                        id: "8", title: "二階法とニュートン法", description: "ニュートン法・準ニュートン法・BFGS・局所収束と大域収束の関係",
                        sections: [
                            { id: "8.1", title: "ニュートン法の定義", description: "ヘッセ行列を用いた更新則の定義、二次近似による導出" },
                            { id: "8.2", title: "ニュートン法の局所二次収束", description: "非退化最適解近傍での二次収束定理の証明" },
                            { id: "8.3", title: "大域収束のための修正", description: "直線探索付きニュートン法、信頼領域法の概観" },
                            { id: "8.4", title: "準ニュートン法と BFGS 公式", description: "ヘッセ行列の逐次近似の動機、BFGS 更新公式の定義と超線形収束の主張" }
                        ]
                    },
                    {
                        id: "9", title: "内点法", description: "障壁関数・中心路・パス追跡法・多項式計算量",
                        sections: [
                            { id: "9.1", title: "障壁関数と内点法の動機", description: "対数障壁関数の定義、制約を罰則化する発想と単体法との対比" },
                            { id: "9.2", title: "中心路の定義", description: "障壁パラメータ t に対する中心路の定義、KKT 条件との接続" },
                            { id: "9.3", title: "パス追跡法の手順", description: "中心路に沿った更新、ニュートンステップによる中心路への近似" },
                            { id: "9.4", title: "多項式計算量の達成", description: "内点法が O(√n · L) イテレーションで終了するという定理の主張、単体法との比較" },
                            { id: "9.5", title: "半正定値計画問題への拡張", description: "SDP の定式化、線形計画の一般化としての位置づけ、現代最適化への展望" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "2-2"]
            },
            {
                id: "A-4",
                title: "最適輸送理論",
                chapters: [
                    {
                        id: "1", title: "モンジュ問題とカントロビッチ緩和", description: "モンジュ問題の定式化・存在の困難性・カントロビッチ緩和・輸送計画",
                        sections: [
                            { id: "1.1", title: "モンジュ問題の定式化", description: "コスト関数 c(x,y) のもとでの輸送写像 T の最適化問題、質量保存条件 T_#μ = ν の定義" },
                            { id: "1.2", title: "モンジュ問題の困難性", description: "輸送写像が存在しない場合の例、非凸性・非線形性による直接的解法の困難さ" },
                            { id: "1.3", title: "カントロビッチの緩和", description: "輸送写像から輸送計画 π ∈ Π(μ,ν) への緩和、線形計画問題としての定式化" },
                            { id: "1.4", title: "輸送計画の空間の性質", description: "Π(μ,ν) の弱コンパクト性、最適輸送計画の存在定理の証明" },
                            { id: "1.5", title: "離散版の輸送問題", description: "有限集合上の最適輸送の線形計画問題としての定式化、輸送多面体の頂点" }
                        ]
                    },
                    {
                        id: "2", title: "カントロビッチ双対とc-凸性", description: "双対問題・カントロビッチ-ルービンシュタイン双対定理・c-変換・c-凸関数",
                        sections: [
                            { id: "2.1", title: "カントロビッチ双対問題の導出", description: "主問題の双対としてのポテンシャル関数 (φ,ψ) の最大化問題" },
                            { id: "2.2", title: "強双対定理", description: "最適輸送コストと双対問題の最大値の一致の証明、凸解析の双対性との接続" },
                            { id: "2.3", title: "c-変換と c-凸関数", description: "c-変換 φ^c の定義、c-凸関数の定義と最適双対ポテンシャルの特徴づけ" },
                            { id: "2.4", title: "カントロビッチ-ルービンシュタイン定理", description: "コストが距離の場合の双対表現、リプシッツ関数による特徴づけ" },
                            { id: "2.5", title: "最適輸送計画のサポートの特徴づけ", description: "c-サイクリック単調性の定義、最適計画が c-サイクリック単調なサポートをもつことの証明" }
                        ]
                    },
                    {
                        id: "3", title: "ブレニエの定理と最適輸送写像", description: "二乗コストの場合の最適輸送写像の存在・一意性・凸関数の勾配による表現",
                        sections: [
                            { id: "3.1", title: "ブレニエの定理の主張", description: "μ が絶対連続な場合、コスト c(x,y) = |x-y|^2 の最適輸送写像が一意に存在し凸関数の勾配で表されることの主張" },
                            { id: "3.2", title: "ブレニエの定理の証明の概略", description: "c-凸関数と凸関数の対応、勾配写像の質量保存条件の確認" },
                            { id: "3.3", title: "モンジュ-アンペール方程式との関係", description: "輸送写像の質量保存条件から導かれる det(D^2 φ) = μ/ν(∇φ) の形の方程式、偏微分方程式との接続" },
                            { id: "3.4", title: "最適輸送写像の正則性", description: "カフェレリの正則性理論の概観、μ・ν の密度の条件と輸送写像の滑らかさ" },
                            { id: "3.5", title: "一般コストへの拡張", description: "ツイスト条件の定義、一般コストでの最適輸送写像の存在定理の主張" }
                        ]
                    },
                    {
                        id: "4", title: "ワッサーシュタイン距離", description: "p-ワッサーシュタイン距離の定義・位相的性質・ワッサーシュタイン空間",
                        sections: [
                            { id: "4.1", title: "p-ワッサーシュタイン距離の定義", description: "W_p(μ,ν) の定義、距離の公理の確認" },
                            { id: "4.2", title: "W_1 とカントロビッチ-ルービンシュタイン定理", description: "W_1 のリプシッツ関数による双対表現、全変動距離との比較" },
                            { id: "4.3", title: "W_2 の基本性質", description: "W_2 の絶対連続測度での計算、ブレニエの定理との接続" },
                            { id: "4.4", title: "ワッサーシュタイン空間 P_p(X) の位相的性質", description: "弱収束との同値性、P_p(X) の完備性・可分性" },
                            { id: "4.5", title: "他の距離との比較", description: "全変動距離・カルバック-ライブラー情報量・ワッサーシュタイン距離の特性の対比" }
                        ]
                    },
                    {
                        id: "5", title: "ワッサーシュタイン幾何", description: "P_2(X) の測地線・曲率・オットー微積分・形式的リーマン構造",
                        sections: [
                            { id: "5.1", title: "P_2(X) の測地線と補間", description: "W_2 測地線の存在、マッカン補間 μ_t = ((1-t)id + tT)_#μ の定義" },
                            { id: "5.2", title: "マッカン補間の性質", description: "測地線の一意性、密度の変化の連続的記述" },
                            { id: "5.3", title: "オットーの微積分", description: "P_2(X) を形式的無限次元リーマン多様体とみなす枠組み、接空間の定義" },
                            { id: "5.4", title: "汎関数の勾配流", description: "ワッサーシュタイン勾配の定義、フォッカー-プランク方程式・多孔質媒体方程式の勾配流としての定式化" },
                            { id: "5.5", title: "曲率と変位凸性", description: "リッチ曲率の下界とK-変位凸性の定義、ロット-ヴィラーニの定理の概観" }
                        ]
                    },
                    {
                        id: "6", title: "数値計算アルゴリズム", description: "エントロピー正則化・シンクホーンアルゴリズム・スケーリング収束・計算量",
                        sections: [
                            { id: "6.1", title: "エントロピー正則化問題の定式化", description: "KL 情報量による正則化項の追加、正則化パラメータ ε の役割" },
                            { id: "6.2", title: "正則化問題の最適性条件", description: "スケーリング構造 π* = diag(u) K diag(v) の導出、u・v の方程式系" },
                            { id: "6.3", title: "シンクホーン-クノップアルゴリズム", description: "u・v の交互更新手順、行・列の正規化の反復" },
                            { id: "6.4", title: "収束性の解析", description: "線形収束の証明、ε → 0 での正則化問題の最適輸送問題への収束" },
                            { id: "6.5", title: "ジオデシック-ランゲヴィンアルゴリズムの概観", description: "大規模問題への対応、確率的バリアントの紹介" }
                        ]
                    },
                    {
                        id: "7", title: "応用と展望", description: "流体力学・機械学習・統計・数理物理との接続",
                        sections: [
                            { id: "7.1", title: "流体力学との接続", description: "ブロダン-ベルニエの定式化、非圧縮オイラー方程式の W_2 測地線問題としての定式化" },
                            { id: "7.2", title: "機械学習への応用", description: "GAN の損失関数としての W_1 距離、ドメイン適応への最適輸送の応用概観" },
                            { id: "7.3", title: "統計・データ解析への応用", description: "フレシェ平均の定義、ワッサーシュタイン重心の計算とクラスタリングへの応用" },
                            { id: "7.4", title: "確率論・確率過程論との接続", description: "ランジュバン方程式の勾配流定式化、確率過程論との接続" },
                            { id: "7.5", title: "スカラー曲率と比較幾何への展望", description: "ロット-スタームの合成的リッチ曲率の定義の概観、非滑らかな空間への幾何の拡張" }
                        ]
                    }
                ],
                prerequisites: ["3-3", "4-4"]
            },
            {
                id: "A-5",
                title: "数値解析",
                chapters: [
                    {
                        id: "1", title: "数値誤差と浮動小数点演算", description: "浮動小数点数・丸め誤差・打ち切り誤差・誤差の伝播・条件数",
                        sections: [
                            { id: "1.1", title: "浮動小数点数の表現", description: "IEEE 754 標準、仮数部・指数部・符号ビットの定義、機械イプシロンの意味" },
                            { id: "1.2", title: "丸め誤差と打ち切り誤差", description: "各誤差の定義と発生源、絶対誤差・相対誤差の定義" },
                            { id: "1.3", title: "桁落ちと情報の損失", description: "近い二数の差による有効桁の喪失、回避策の例" },
                            { id: "1.4", title: "誤差の伝播と条件数", description: "関数評価における誤差増幅の解析、条件数 κ の定義と悪条件問題の概念" },
                            { id: "1.5", title: "後退誤差解析", description: "求めた解が厳密にはどの問題の解かという観点、安定性の定義" }
                        ]
                    },
                    {
                        id: "2", title: "非線形方程式の数値解法", description: "二分法・ニュートン法・割線法・収束次数",
                        sections: [
                            { id: "2.1", title: "二分法の手順と収束", description: "中間値定理に基づく手順、線形収束の証明と反復回数の評価" },
                            { id: "2.2", title: "ニュートン法の定義と収束", description: "接線法による定義、非退化根での二次収束の証明" },
                            { id: "2.3", title: "割線法と逆補間法", description: "差分によるヤコビアンの近似、超線形収束次数 1.618 の計算" },
                            { id: "2.4", title: "多変数ニュートン法", description: "連立非線形方程式への拡張、ヤコビアンの数値的計算と収束条件" },
                            { id: "2.5", title: "大域的収束戦略", description: "直線探索・信頼領域による大域的収束の保証、ニュートン法の修正版" }
                        ]
                    },
                    {
                        id: "3", title: "連立一次方程式の直接法", description: "ガウス消去法・LU 分解・ピボット選択・コレスキー分解・条件数",
                        sections: [
                            { id: "3.1", title: "ガウス消去法と後退代入", description: "前進消去・後退代入の手順、演算量 O(n^3) の計算" },
                            { id: "3.2", title: "LU 分解の定義と構成", description: "ガウス消去法の行列分解としての解釈、L・U の明示的構成" },
                            { id: "3.3", title: "部分ピボット選択と完全ピボット選択", description: "数値的安定性のためのピボット選択、増大因子の評価" },
                            { id: "3.4", title: "コレスキー分解", description: "対称正定値行列への特化、演算量の半減と数値的安定性" },
                            { id: "3.5", title: "行列の条件数と残差", description: "2-ノルム条件数 κ(A) の定義、残差と真の誤差の関係" }
                        ]
                    },
                    {
                        id: "4", title: "連立一次方程式の反復法", description: "ヤコビ法・ガウス-ザイデル法・SOR 法・共役勾配法",
                        sections: [
                            { id: "4.1", title: "定常反復法の一般形", description: "分割 A = M - N による反復行列の定義、収束条件としてのスペクトル半径 ρ(M^{-1}N) < 1" },
                            { id: "4.2", title: "ヤコビ法とガウス-ザイデル法", description: "各手法の更新則の定義、対角優位行列での収束保証" },
                            { id: "4.3", title: "SOR 法と最適緩和パラメータ", description: "逐次過緩和の定義、最適 ω の理論的導出と収束の加速" },
                            { id: "4.4", title: "共役勾配法", description: "A-共役方向の構成、二次関数の n ステップ有限終了性の証明" },
                            { id: "4.5", title: "前処理付き共役勾配法", description: "前処理行列の役割、条件数の低減による収束の加速" }
                        ]
                    },
                    {
                        id: "5", title: "補間と近似", description: "ラグランジュ補間・ニュートン補間・スプライン・最小二乗近似",
                        sections: [
                            { id: "5.1", title: "ラグランジュ補間多項式", description: "基底多項式の定義、補間多項式の一意性の証明" },
                            { id: "5.2", title: "補間誤差の評価", description: "剰余項の表示、等間隔補間点でのルンゲ現象の説明" },
                            { id: "5.3", title: "ニュートン補間と差分商", description: "差分商の定義、補間多項式の逐次追加による効率的計算" },
                            { id: "5.4", title: "三次スプライン補間", description: "スプライン関数の定義、自然・クランプ境界条件、ルンゲ現象の回避" },
                            { id: "5.5", title: "最小二乗近似と正規方程式", description: "過決定系の最小二乗解、正規方程式の導出と QR 分解による解法" }
                        ]
                    },
                    {
                        id: "6", title: "数値積分", description: "台形公式・シンプソン公式・ガウス求積・誤差評価",
                        sections: [
                            { id: "6.1", title: "補間型求積公式の一般論", description: "補間多項式の積分による求積公式の構成、代数的精度の定義" },
                            { id: "6.2", title: "台形公式と中点公式", description: "定義と誤差 O(h^2)・O(h^2) の導出、複合則の構成" },
                            { id: "6.3", title: "シンプソン公式", description: "3点補間による定義、誤差 O(h^4) の導出と台形公式との比較" },
                            { id: "6.4", title: "ガウス求積法", description: "直交多項式の零点を積分点とする選択、代数的精度 2n-1 の達成" },
                            { id: "6.5", title: "多次元数値積分とモンテカルロ法", description: "多次元台形則の誤差の次元依存性、モンテカルロ法の O(1/√N) 収束" }
                        ]
                    },
                    {
                        id: "7", title: "常微分方程式の数値解法", description: "オイラー法・ルンゲ-クッタ法・多段法・安定性・剛性",
                        sections: [
                            { id: "7.1", title: "オイラー法と局所打ち切り誤差", description: "前進・後退オイラー法の定義、局所誤差 O(h^2) と大域誤差 O(h) の関係" },
                            { id: "7.2", title: "陽的ルンゲ-クッタ法", description: "Butcher 配列による定義、古典的 4 次 RK 法の構成と誤差 O(h^4)" },
                            { id: "7.3", title: "多段法とアダムス族", description: "アダムス-バッシュフォース・アダムス-ムルトン法の定義、陽・陰の特徴" },
                            { id: "7.4", title: "絶対安定性と安定領域", description: "テスト方程式 y' = λy への適用、各手法の安定領域の比較" },
                            { id: "7.5", title: "剛性方程式と陰的法", description: "剛性の定義、後退オイラー・台形法・BDF 法の A-安定性と適用" }
                        ]
                    },
                    {
                        id: "8", title: "境界値問題と偏微分方程式の数値解法", description: "有限差分法・有限要素法・収束と安定性",
                        sections: [
                            { id: "8.1", title: "常微分方程式の境界値問題の差分法", description: "2 階 BVP の差分近似、三重対角行列系の構成と誤差評価" },
                            { id: "8.2", title: "放物型 PDE の有限差分法", description: "熱方程式の陽・陰差分スキーム、フォン・ノイマン安定性解析" },
                            { id: "8.3", title: "双曲型 PDE の差分法", description: "移流方程式の上流差分法・レーアックス-フリードリクス法、CFL 条件" },
                            { id: "8.4", title: "有限要素法の概要", description: "ポアソン方程式の弱定式化、ガレルキン近似、三角形要素による離散化の概観" },
                            { id: "8.5", title: "収束・整合性・安定性の関係", description: "ラックス等価定理の主張、各性質の定義と相互関係" }
                        ]
                    },
                    {
                        id: "9", title: "固有値問題の数値解法", description: "べき乗法・逆反復法・QR 法・特異値分解",
                        sections: [
                            { id: "9.1", title: "べき乗法と逆反復法", description: "最大固有値の反復計算、収束速度と固有値間隔の関係" },
                            { id: "9.2", title: "QR アルゴリズムの基本形", description: "QR 分解の反復による全固有値の計算、上ヘッセンベルク化による効率化" },
                            { id: "9.3", title: "実用的 QR 法", description: "シフト戦略・デフレーションによる収束の加速" },
                            { id: "9.4", title: "特異値分解（SVD）の数値計算", description: "二重対角化・ゴルブ-カハンアルゴリズムの概観、低ランク近似への応用" }
                        ]
                    }
                ],
                prerequisites: ["2-6"]
            },
            {
                id: "A-6",
                title: "制御理論",
                chapters: [
                    {
                        id: "1", title: "線形システムと状態空間表現", description: "状態方程式・出力方程式・伝達関数・状態空間表現の等価性",
                        sections: [
                            { id: "1.1", title: "状態空間表現の定義", description: "状態変数・状態方程式 ẋ = Ax + Bu・出力方程式 y = Cx + Du の定義、フーリエ解析の ODE との接続" },
                            { id: "1.2", title: "伝達関数と状態空間表現の等価性", description: "ラプラス変換による G(s) = C(sI-A)^{-1}B + D の導出、最小実現の概念" },
                            { id: "1.3", title: "行列指数関数と状態推移行列", description: "e^{At} による状態方程式の解の表示、微分方程式IIの行列指数との接続" },
                            { id: "1.4", title: "代表的なシステムの状態空間表現", description: "質量-ばね-ダンパ系・DC モータ・倒立振子のモデル化の具体例" },
                            { id: "1.5", title: "離散時間システム", description: "差分方程式 x_{k+1} = Ax_k + Bu_k・離散化手法・Z 変換との対応" }
                        ]
                    },
                    {
                        id: "2", title: "安定性理論", description: "リャプノフ安定性・漸近安定性・ラウス-フルビッツ判別法・ナイキスト安定判別法",
                        sections: [
                            { id: "2.1", title: "線形システムの安定性と固有値", description: "行列 A の固有値の実部による漸近安定性の同値条件の証明" },
                            { id: "2.2", title: "リャプノフの安定性定理", description: "線形系での正定値対称行列 P と ATP + PA = -Q の関係、リャプノフ方程式の解の存在" },
                            { id: "2.3", title: "ラウス-フルビッツ安定判別法", description: "特性多項式の係数から安定性を代数的に判定する手順と証明の概略" },
                            { id: "2.4", title: "周波数応答とボード線図", description: "周波数応答 G(jω) の定義、ゲイン・位相余裕の定義と安定性との関係" },
                            { id: "2.5", title: "ナイキスト安定判別法", description: "偏角原理に基づく安定判別法の主張、ナイキスト線図の描き方と解釈" }
                        ]
                    },
                    {
                        id: "3", title: "可制御性と可観測性", description: "可制御性行列・可観測性行列・カルマンの階数条件・双対性",
                        sections: [
                            { id: "3.1", title: "可制御性の定義と可制御性行列", description: "任意の初期状態から任意の終端状態へ有限時間で到達できる条件、可制御性行列 Wc = [B, AB, ..., A^{n-1}B] の定義" },
                            { id: "3.2", title: "カルマンの可制御性定理", description: "rank(Wc) = n が可制御性の必要十分条件であることの証明" },
                            { id: "3.3", title: "可観測性の定義と可観測性行列", description: "出力から初期状態を一意に決定できる条件、可観測性行列 Wo の定義" },
                            { id: "3.4", title: "可制御性と可観測性の双対性", description: "システム (A,B,C) の可制御性と転置システム (A^T,C^T,B^T) の可観測性の同値性" },
                            { id: "3.5", title: "カルマン正準分解", description: "可制御・可観測・不可制御・不可観測の4部分空間への分解、最小実現との関係" }
                        ]
                    },
                    {
                        id: "4", title: "フィードバック制御と極配置", description: "状態フィードバック・極配置定理・オブザーバ設計・分離原理",
                        sections: [
                            { id: "4.1", title: "状態フィードバックと閉ループ系", description: "u = -Kx による状態フィードバックの定義、閉ループ行列 A-BK の固有値配置" },
                            { id: "4.2", title: "極配置定理", description: "可制御なシステムは任意の固有値配置が可能であることの証明、アッカーマンの公式" },
                            { id: "4.3", title: "ルーエンバーガオブザーバの設計", description: "状態推定器の定義、推定誤差の漸近安定性とオブザーバゲインの設計" },
                            { id: "4.4", title: "分離原理", description: "オブザーバと状態フィードバックを独立に設計できることの証明、セパレーションプリンシプル" },
                            { id: "4.5", title: "出力フィードバックと動的補償器", description: "出力のみを用いたフィードバック制御、動的補償器による安定化" }
                        ]
                    },
                    {
                        id: "5", title: "最適制御", description: "LQR 問題・リカッチ方程式・ポントリャーギンの最大原理・HJB 方程式",
                        sections: [
                            { id: "5.1", title: "LQR 問題の定式化", description: "二次コスト J = ∫(x^TQx + u^TRu)dt の最小化問題、Q・R の設定指針" },
                            { id: "5.2", title: "代数的リカッチ方程式", description: "最適制御則が u* = -R^{-1}B^TPx で与えられること、リカッチ方程式 PA + A^TP - PBR^{-1}B^TP + Q = 0 の導出" },
                            { id: "5.3", title: "リカッチ方程式の解の存在と一意性", description: "可制御・可観測条件下での正定値対称解の存在定理の主張" },
                            { id: "5.4", title: "ポントリャーギンの最大原理", description: "ハミルトニアンの定義、随伴変数（共役状態）方程式、最大原理の主張" },
                            { id: "5.5", title: "ハミルトン-ヤコビ-ベルマン方程式", description: "動的計画法による最適性の必要十分条件、LQR との接続" }
                        ]
                    },
                    {
                        id: "6", title: "カルマンフィルタ", description: "確率的状態空間モデル・最適状態推定・カルマンゲイン・ノイズ共分散の更新",
                        sections: [
                            { id: "6.1", title: "確率的状態空間モデル", description: "プロセスノイズ・観測ノイズを含む状態空間表現、ノイズの統計的仮定" },
                            { id: "6.2", title: "最小分散推定と線形最小二乗推定", description: "観測から状態を推定する最適化問題の定式化、線形推定器の最適性" },
                            { id: "6.3", title: "カルマンフィルタの予測ステップ", description: "事前推定値と事前誤差共分散行列の更新式" },
                            { id: "6.4", title: "カルマンフィルタの更新ステップ", description: "カルマンゲインの定義と導出、事後推定値・事後誤差共分散の更新式" },
                            { id: "6.5", title: "定常カルマンフィルタと LQR との双対性", description: "カルマンフィルタとLQRのリカッチ方程式の双対的な構造" }
                        ]
                    },
                    {
                        id: "7", title: "展望", description: "H∞制御・モデル予測制御・非線形制御・強化学習との接続",
                        sections: [
                            { id: "7.1", title: "H∞ 制御の概観", description: "外乱抑制の最適化問題、ゲームとしての定式化、最適化理論との接続" },
                            { id: "7.2", title: "モデル予測制御（MPC）の概観", description: "有限水平最適制御の反復解法、制約付き最適化との接続" },
                            { id: "7.3", title: "非線形制御の手法", description: "フィードバック線形化・スライディングモード制御・CLF に基づく安定化の概観" },
                            { id: "7.4", title: "強化学習との接続", description: "最適制御と強化学習の目的関数の類比、Q-学習・方策勾配との関係の概観" }
                        ]
                    }
                ],
                prerequisites: ["3-4"]
            },
            {
                id: "A-7",
                title: "符号理論",
                chapters: [
                    {
                        id: "1", title: "符号理論の基礎", description: "通信路モデル・ハミング距離・符号の基本パラメータ・誤り検出と訂正",
                        sections: [
                            { id: "1.1", title: "通信路モデルと符号化の動機", description: "情報源・符号化・通信路・復号の枠組み、2元対称通信路の定義" },
                            { id: "1.2", title: "ハミング距離と符号の基本パラメータ", description: "ハミング距離 d(x,y) の定義、符号長 n・情報記号数 k・最小距離 d の三つ組 [n,k,d]" },
                            { id: "1.3", title: "誤り検出と訂正の能力", description: "最小距離 d による t 重誤り訂正・s 重誤り検出の条件 d ≥ 2t+1・d ≥ s+1 の証明" },
                            { id: "1.4", title: "完全符号とハミング限界", description: "ハミング限界 M ≤ 2^n / V(n,t) の証明、完全符号の定義と例" }
                        ]
                    },
                    {
                        id: "2", title: "線形符号", description: "線形符号の定義・生成行列・検査行列・シンドローム復号",
                        sections: [
                            { id: "2.1", title: "線形符号の定義と基本性質", description: "F_2^n の部分空間としての線形符号、最小距離と最小ハミング重みの一致" },
                            { id: "2.2", title: "生成行列と系統的符号", description: "生成行列 G の定義、系統的生成行列 [I_k | P] の標準形変換" },
                            { id: "2.3", title: "検査行列とシンドローム", description: "検査行列 H の定義、Hx^T = 0 による符号語の特徴づけ" },
                            { id: "2.4", title: "シンドローム復号", description: "シンドローム s = Hy^T の計算、コセット分類による最尤復号の手順" },
                            { id: "2.5", title: "ハミング符号の構成", description: "H の列として全非零ベクトルを並べる構成、完全符号であることの確認" },
                            { id: "2.6", title: "双対符号とマクウィリアムス恒等式", description: "双対符号 C⊥ の定義、重み計数多項式の関係式の主張" }
                        ]
                    },
                    {
                        id: "3", title: "限界定理", description: "ハミング限界・シングルトン限界・ギルバート-ヴァルシャモフ限界・プロットキン限界",
                        sections: [
                            { id: "3.1", title: "ハミング限界の再整理", description: "体積引数による上界の証明、完全符号との関係" },
                            { id: "3.2", title: "シングルトン限界", description: "d ≤ n - k + 1 の証明、MDS 符号の定義と例" },
                            { id: "3.3", title: "ギルバート-ヴァルシャモフ限界", description: "指定のパラメータをもつ符号の存在下界の証明、確率論的議論との類比" },
                            { id: "3.4", title: "プロットキン限界", description: "d > n/2 の高最小距離域での上界の証明" },
                            { id: "3.5", title: "漸近的限界と情報理論との接続", description: "符号レートと最小距離比率の漸近的トレードオフ、シャノン容量との接続の概観" }
                        ]
                    },
                    {
                        id: "4", title: "巡回符号", description: "巡回符号の多項式表現・生成多項式・根の特徴づけ",
                        sections: [
                            { id: "4.1", title: "巡回符号の定義", description: "巡回シフトで閉じた線形符号の定義、F_q[x]/(x^n-1) のイデアルとの対応" },
                            { id: "4.2", title: "生成多項式", description: "巡回符号の最小次多項式としての生成多項式 g(x)、g(x) | (x^n-1) の証明" },
                            { id: "4.3", title: "検査多項式と符号の次元", description: "h(x) = (x^n-1)/g(x) の定義、符号長 n・次元 k = n - deg(g) の関係" },
                            { id: "4.4", title: "巡回符号の符号化と復号", description: "多項式除算による系統的符号化の手順、シンドロームの多項式的計算" },
                            { id: "4.5", title: "ファクター環の分解と根", description: "x^n-1 の因数分解と巡回符号の根による特徴づけの準備" }
                        ]
                    },
                    {
                        id: "5", title: "BCH 符号", description: "BCH 符号の構成・設計距離・バーレカンプ-マッシー復号アルゴリズム",
                        sections: [
                            { id: "5.1", title: "有限体と最小多項式の復習", description: "F_{q^m} の構成、元の最小多項式の定義と次数、体論Iとの接続" },
                            { id: "5.2", title: "BCH 符号の構成", description: "連続する根 α^b, α^{b+1}, ..., α^{b+d-2} をもつ符号の定義、設計距離 d の意味" },
                            { id: "5.3", title: "BCH 限界", description: "連続する根の個数から最小距離の下界が従うことの証明" },
                            { id: "5.4", title: "誤り位置多項式とニュートンの恒等式", description: "シンドロームから誤り位置多項式を求める理論的枠組み" },
                            { id: "5.5", title: "バーレカンプ-マッシー復号アルゴリズム", description: "最短 LFSR の逐次的決定による誤り位置多項式の効率的計算" },
                            { id: "5.6", title: "チエン探索と誤り値の評価", description: "誤り位置多項式の根の探索と誤り値の計算手順" }
                        ]
                    },
                    {
                        id: "6", title: "リード-ソロモン符号", description: "RS 符号の定義・MDS 性・多項式評価符号としての解釈・様々な復号アルゴリズム",
                        sections: [
                            { id: "6.1", title: "リード-ソロモン符号の定義", description: "F_q 上の多項式評価による構成、符号パラメータ [n,k,d] = [q-1, k, q-k] の確認" },
                            { id: "6.2", title: "RS 符号の MDS 性", description: "シングルトン限界の達成の証明、MDS 符号の最強の誤り訂正能力" },
                            { id: "6.3", title: "BCH 符号との関係", description: "RS 符号が BCH 符号の特別な場合であることの整理" },
                            { id: "6.4", title: "ユークリッドアルゴリズムによる復号", description: "キー方程式の導出、拡張ユークリッドアルゴリズムによる誤り位置多項式の求解" },
                            { id: "6.5", title: "リスト復号の概観", description: "シングルトン限界を超える誤り訂正、グルス-スダン復号の主張と意義" }
                        ]
                    },
                    {
                        id: "7", title: "展望", description: "LDPC 符号・ターボ符号・代数的幾何符号・量子誤り訂正符号",
                        sections: [
                            { id: "7.1", title: "LDPC 符号の概観", description: "疎な検査行列による定義、信念伝搬復号のグラフ的解釈" },
                            { id: "7.2", title: "ターボ符号と反復復号の概観", description: "畳み込み符号の並列連結、スキャノン限界への接近の意義" },
                            { id: "7.3", title: "代数的幾何符号（ゴッパ符号）の概観", description: "代数曲線上の関数を用いた符号の構成、ギルバート-ヴァルシャモフ限界の突破、代数幾何との接続" },
                            { id: "7.4", title: "量子誤り訂正符号の概観", description: "量子ビットの誤りモデル、スタビライザ符号の定義、ショアー符号の主張" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "3-10"]
            },
            {
                id: "A-8",
                title: "暗号理論",
                chapters: [
                    {
                        id: "1", title: "古典暗号と情報理論的安全性", description: "古典暗号の構造・解読法・シャノンの完全秘匿性・ワンタイムパッド",
                        sections: [
                            { id: "1.1", title: "古典暗号の例と解読", description: "シーザー暗号・換字式暗号・ヴィジュネル暗号の定義、頻度解析による解読の手順" },
                            { id: "1.2", title: "暗号の形式的定義", description: "暗号方式 (Gen, Enc, Dec) の三つ組の定義、正確性条件" },
                            { id: "1.3", title: "シャノンの完全秘匿性", description: "暗号文から平文に関する情報が漏れない条件の定義、情報理論的安全性の意味" },
                            { id: "1.4", title: "ワンタイムパッドと完全秘匿性", description: "ワンタイムパッドが完全秘匿であることの証明、鍵長の下界" },
                            { id: "1.5", title: "計算量的安全性への移行", description: "情報理論的安全性の限界、多項式時間攻撃者による安全性定義への動機" }
                        ]
                    },
                    {
                        id: "2", title: "対称鍵暗号", description: "擬似乱数生成器・ストリーム暗号・ブロック暗号・AES の構造",
                        sections: [
                            { id: "2.1", title: "擬似乱数生成器（PRG）の定義", description: "識別不可能性による PRG の計算量的定義、安全性の意味" },
                            { id: "2.2", title: "ストリーム暗号と PRG", description: "PRG を用いたワンタイムパッドの近似、ストリーム暗号の安全性定義" },
                            { id: "2.3", title: "擬似乱数関数（PRF）と擬似乱数置換（PRP）", description: "PRF・PRP の定義、安全性の意味、ブロック暗号との対応" },
                            { id: "2.4", title: "ブロック暗号の構造（フェイステル構造・SPN）", description: "DES のフェイステル構造・AES の SPN 構造の概要" },
                            { id: "2.5", title: "動作モード", description: "ECB・CBC・CTR・GCM の定義、各モードの安全性の比較" }
                        ]
                    },
                    {
                        id: "3", title: "メッセージ認証と暗号学的ハッシュ関数", description: "MAC・ハッシュ関数の安全性定義・誕生日攻撃・SHA-2・SHA-3",
                        sections: [
                            { id: "3.1", title: "メッセージ認証符号（MAC）の定義", description: "MAC の三つ組の定義、偽造不可能性の計算量的定義" },
                            { id: "3.2", title: "PRF から MAC の構成", description: "PRF を用いた MAC の構成と安全性証明の概略" },
                            { id: "3.3", title: "暗号学的ハッシュ関数の安全性", description: "一方向性・第二原像困難性・衝突困難性の定義と相互関係" },
                            { id: "3.4", title: "誕生日攻撃と衝突探索", description: "誕生日問題による O(2^{n/2}) の衝突探索、安全なハッシュ長の指針" },
                            { id: "3.5", title: "SHA-2 と SHA-3 の構造概要", description: "マークル-ダムゴー構造と SHA-2、スポンジ構造と SHA-3 の概観" }
                        ]
                    },
                    {
                        id: "4", title: "公開鍵暗号", description: "RSA 暗号・ElGamal 暗号・楕円曲線暗号・安全性根拠",
                        sections: [
                            { id: "4.1", title: "公開鍵暗号の定義と安全性", description: "鍵生成・暗号化・復号の三つ組、CPA 安全性・CCA 安全性の定義" },
                            { id: "4.2", title: "RSA 暗号の構成", description: "鍵生成の手順、暗号化 c = m^e mod n・復号 m = c^d mod n の定義、正確性の証明" },
                            { id: "4.3", title: "RSA の安全性根拠", description: "素因数分解問題・RSA 問題の定義、整数論IIとの接続、padding なし RSA の脆弱性" },
                            { id: "4.4", title: "RSA-OAEP と証明可能安全性", description: "OAEP パディングの構造、ランダムオラクルモデルでの CCA 安全性の概観" },
                            { id: "4.5", title: "ElGamal 暗号と DDH 仮定", description: "離散対数問題・CDH・DDH 仮定の定義、ElGamal の CPA 安全性証明の概略" },
                            { id: "4.6", title: "楕円曲線暗号", description: "ECDLP の困難性、ECDH・ECIES の構成、整数論IIの楕円曲線との接続" }
                        ]
                    },
                    {
                        id: "5", title: "デジタル署名", description: "署名の定義・RSA 署名・DSA・楕円曲線署名・安全性モデル",
                        sections: [
                            { id: "5.1", title: "デジタル署名の定義と安全性", description: "署名生成・検証の定義、選択文書攻撃に対する偽造不可能性の定義" },
                            { id: "5.2", title: "ハッシュ-then-Sign パラダイム", description: "任意長メッセージへの署名、衝突困難性による安全性の帰着" },
                            { id: "5.3", title: "RSA-PSS 署名", description: "PSS パディングの構造、ランダムオラクルモデルでの安全性の概観" },
                            { id: "5.4", title: "DSA と ECDSA", description: "離散対数に基づく署名の構造、ランダムノンスの重要性、nonce 再利用の危険性" },
                            { id: "5.5", title: "シュノア署名とその安全性証明", description: "シュノア識別プロトコルから署名への変換、Fiat-Shamir 変換の概観" }
                        ]
                    },
                    {
                        id: "6", title: "暗号プロトコル", description: "鍵交換・ゼロ知識証明・秘密分散・コミットメント",
                        sections: [
                            { id: "6.1", title: "ディフィー-ヘルマン鍵交換", description: "プロトコルの手順、DDH 仮定のもとでの安全性、中間者攻撃の説明" },
                            { id: "6.2", title: "ゼロ知識証明の概念", description: "完全性・健全性・ゼロ知識性の三条件の定義、グラフ同型のゼロ知識証明の例" },
                            { id: "6.3", title: "インタラクティブ証明と非インタラクティブ化", description: "Fiat-Shamir 変換による非インタラクティブ化の手順" },
                            { id: "6.4", title: "シャミアの秘密分散", description: "多項式補間による k-out-of-n 秘密分散の構成と完全秘匿性の証明" },
                            { id: "6.5", title: "コミットメントスキーム", description: "束縛性と秘匿性の定義、離散対数に基づくペデルセンコミットメントの例" }
                        ]
                    },
                    {
                        id: "7", title: "格子暗号と耐量子暗号", description: "格子の基礎・SVP・LWE・Ring-LWE・CRYSTALS-Kyber",
                        sections: [
                            { id: "7.1", title: "格子の定義と基本問題", description: "格子の定義、最短ベクトル問題 SVP・最近ベクトル問題 CVP の定義" },
                            { id: "7.2", title: "LWE 問題の定義", description: "学習と誤り問題 LWE の定義、識別問題としての定式化、量子計算機への耐性の概観" },
                            { id: "7.3", title: "LWE に基づく暗号の構成", description: "Regev 暗号の鍵生成・暗号化・復号の手順、LWE 仮定への帰着" },
                            { id: "7.4", title: "Ring-LWE と効率化", description: "多項式環上の LWE による計算効率の改善、CRYSTALS-Kyber の概観" },
                            { id: "7.5", title: "耐量子暗号の標準化動向", description: "NIST PQC 標準化プロセスの概観、格子・符号・ハッシュ系暗号の分類" }
                        ]
                    }
                ],
                prerequisites: ["3-10", "4-14"]
            },
            {
                id: "A-9",
                title: "数理ファイナンス",
                chapters: [
                    {
                        id: "1", title: "無裁定価格理論の基礎", description: "金融市場のモデル・無裁定条件・複製ポートフォリオ・一物一価の法則",
                        sections: [
                            { id: "1.1", title: "金融市場の離散時間モデル", description: "株価過程・債券・ポートフォリオの定義、自己資金戦略の定義" },
                            { id: "1.2", title: "無裁定条件と等価マルチンゲール測度", description: "裁定機会の定義、無裁定 ⟺ 等価マルチンゲール測度の存在という第一基本定理の主張" },
                            { id: "1.3", title: "市場の完備性と第二基本定理", description: "完備市場の定義、等価マルチンゲール測度の一意性との同値性の主張" },
                            { id: "1.4", title: "複製ポートフォリオと価格付け", description: "デリバティブの複製戦略による価格の定義、一物一価の法則の証明" },
                            { id: "1.5", title: "二項モデルと具体例", description: "コックス-ロス-ルービンシュタインの二項モデル、リスク中立確率の具体的計算" }
                        ]
                    },
                    {
                        id: "2", title: "ブラック-ショールズ理論", description: "幾何ブラウン運動・ブラック-ショールズ方程式・解の公式・ギリシャ文字",
                        sections: [
                            { id: "2.1", title: "幾何ブラウン運動とブラック-ショールズモデル", description: "dS = μS dt + σS dW のモデル設定、対数正規分布との関係" },
                            { id: "2.2", title: "ブラック-ショールズ-マートンの偏微分方程式", description: "伊藤の補題の適用によるデルタヘッジと BS 方程式の導出" },
                            { id: "2.3", title: "熱方程式への変換と解の公式", description: "変数変換による熱方程式への帰着、ヨーロピアンコールの解析解 BS 公式の導出" },
                            { id: "2.4", title: "ギリシャ文字（デルタ・ガンマ・ヴェガ・セータ・ロー）", description: "各感応度の定義と計算、ヘッジへの実務的意味" },
                            { id: "2.5", title: "BS モデルの限界と暗黙ボラティリティ", description: "現実市場との乖離、ボラティリティスマイル・スキューの現象" }
                        ]
                    },
                    {
                        id: "3", title: "リスク中立測度とマルチンゲール価格付け", description: "ギルサノフの定理・等価マルチンゲール測度・リスク中立価格付け・測度変換",
                        sections: [
                            { id: "3.1", title: "ギルサノフの定理の復習と応用", description: "確率過程論のギルサノフの定理の再確認、ドリフトの除去による BS モデルへの適用" },
                            { id: "3.2", title: "リスク中立測度の下での価格付け公式", description: "割引価格過程のマルチンゲール性、デリバティブ価格 V_t = e^{-r(T-t)} E^Q[V_T | F_t] の導出" },
                            { id: "3.3", title: "ニュメレールの変更", description: "フォワード測度・株価測度への変換、複雑なデリバティブ評価への応用" },
                            { id: "3.4", title: "アメリカンオプションと最適停止問題", description: "早期行使の最適性、最適停止時刻の定義、自由境界問題との接続" },
                            { id: "3.5", title: "エキゾチックオプションの価格付け", description: "バリアオプション・アジアオプション・ルックバックオプションの価格公式の導出" }
                        ]
                    },
                    {
                        id: "4", title: "金利モデルとターム構造", description: "短期金利モデル・フォワードレート・ヒース-ジャロウ-モートン枠組み・アフィンモデル",
                        sections: [
                            { id: "4.1", title: "債券価格とターム構造の基礎", description: "ゼロクーポン債の価格・スポットレート・フォワードレートの定義と関係" },
                            { id: "4.2", title: "短期金利モデル", description: "ヴァシチェックモデル・CIR モデルの SDE の設定、アフィン期間構造の意味" },
                            { id: "4.3", title: "ヴァシチェックモデルの解析解", description: "OU 過程との関係、債券価格の閉形式解の導出" },
                            { id: "4.4", title: "ヒース-ジャロウ-モートン（HJM）枠組み", description: "フォワードレートの SDE による動態モデル、ドリフト制限条件の導出" },
                            { id: "4.5", title: "LIBOR 市場モデルの概観", description: "ブラック公式との整合性、キャップ・スワップションの価格付け" }
                        ]
                    },
                    {
                        id: "5", title: "信用リスクモデル", description: "デフォルトモデル・ハザードレート・CVA・相関構造",
                        sections: [
                            { id: "5.1", title: "構造モデルとマートンモデル", description: "企業価値過程と負債のオプション的解釈、デフォルト確率の BS 公式による計算" },
                            { id: "5.2", title: "誘導型モデルとハザードレート", description: "デフォルト時刻の強度過程による定義、生存確率の計算" },
                            { id: "5.3", title: "クレジットデフォルトスワップ（CDS）の価格付け", description: "CDS の現金流の定義、ハザードレートによる公正値の導出" },
                            { id: "5.4", title: "相関デフォルトとコピュラ", description: "複数企業のデフォルト相関、ガウスコピュラの定義と CDO への応用の概観" },
                            { id: "5.5", title: "信用評価調整（CVA）の概念", description: "取引相手信用リスクの定義、CVA の計算枠組みの概観" }
                        ]
                    },
                    {
                        id: "6", title: "ポートフォリオ最適化", description: "平均分散最適化・効率的フロンティア・CAPM・マートンの連続時間問題",
                        sections: [
                            { id: "6.1", title: "マーコウィッツの平均分散最適化", description: "期待リターンと分散の二次計画問題、効率的フロンティアの構成" },
                            { id: "6.2", title: "資本資産価格モデル（CAPM）", description: "市場均衡の条件、β の定義、証券市場線の導出" },
                            { id: "6.3", title: "マートンの連続時間ポートフォリオ問題", description: "動的ポートフォリオ選択の HJB 方程式による定式化" },
                            { id: "6.4", title: "べき型効用関数での明示解", description: "CRRA 効用関数の場合の最適ポートフォリオの解析解の導出" },
                            { id: "6.5", title: "ロバスト最適化と曖昧性回避", description: "モデル不確実性下でのポートフォリオ最適化、最悪ケース測度による定式化の概観" }
                        ]
                    },
                    {
                        id: "7", title: "展望", description: "ボラティリティモデル・機械学習との接続・確率的ポートフォリオ理論",
                        sections: [
                            { id: "7.1", title: "局所ボラティリティと確率的ボラティリティモデル", description: "デュピレの局所ボラティリティ・ヘストンモデルの概観、ボラティリティスマイルの再現" },
                            { id: "7.2", title: "ラフボラティリティの概観", description: "ブラウン運動より荒い経路をもつ fBm による実証的ボラティリティの記述の概観" },
                            { id: "7.3", title: "機械学習との接続", description: "ニューラルネットワークによる価格付け・ヘッジ・校正の現代的手法の概観" },
                            { id: "7.4", title: "確率的ポートフォリオ理論の概観", description: "フェルナンデス-スールによる市場ポートフォリオの相対的性能解析の概観" }
                        ]
                    }
                ],
                prerequisites: ["4-15"]
            },
            {
                id: "A-10",
                title: "ゲーム理論",
                chapters: [
                    {
                        id: "1", title: "戦略形ゲームとナッシュ均衡", description: "利得行列・支配戦略・ナッシュ均衡の定義・純粋戦略均衡の例",
                        sections: [
                            { id: "1.1", title: "戦略形ゲームの定義", description: "プレイヤー・戦略集合・利得関数の三つ組、有限ゲームと無限ゲームの区別" },
                            { id: "1.2", title: "支配戦略と反復支配の消去", description: "強支配・弱支配の定義、反復劣支配戦略消去の手順と収束先" },
                            { id: "1.3", title: "ナッシュ均衡の定義", description: "相互最適反応としての定義、純粋戦略ナッシュ均衡の定義と計算例" },
                            { id: "1.4", title: "純粋戦略均衡の例と存在しない例", description: "囚人のジレンマ・調整ゲーム・マッチングペニーの分析" },
                            { id: "1.5", title: "コーナリリアム均衡と相関均衡", description: "相関均衡の定義、ナッシュ均衡との包含関係、相関均衡の計算例" }
                        ]
                    },
                    {
                        id: "2", title: "混合戦略とナッシュの存在定理", description: "混合戦略・混合拡大・ナッシュの均衡存在定理・ゼロ和ゲームの最小最大定理",
                        sections: [
                            { id: "2.1", title: "混合戦略の定義と期待利得", description: "確率分布としての混合戦略、期待利得の多重線形性" },
                            { id: "2.2", title: "混合戦略ナッシュ均衡の計算", description: "無差別条件による計算手順、2×2 ゲームの均衡の完全計算" },
                            { id: "2.3", title: "ナッシュの均衡存在定理", description: "角谷の不動点定理による有限ゲームの混合戦略ナッシュ均衡の存在証明の概略" },
                            { id: "2.4", title: "ゼロ和ゲームと最小最大定理", description: "ゼロ和ゲームの定義、フォン・ノイマンの最小最大定理の主張と線形計画との同値性" },
                            { id: "2.5", title: "均衡の精緻化の動機", description: "複数均衡の選択問題、均衡精緻化概念の必要性の整理" }
                        ]
                    },
                    {
                        id: "3", title: "展開形ゲーム", description: "ゲーム木・完全情報・不完全情報・後退帰納法・部分ゲーム完全均衡",
                        sections: [
                            { id: "3.1", title: "展開形ゲームの定義", description: "ゲーム木・情報集合・戦略の定義、戦略形ゲームとの対応" },
                            { id: "3.2", title: "完全情報ゲームと後退帰納法", description: "完全情報展開形ゲームの定義、後退帰納法による部分ゲーム完全均衡の計算" },
                            { id: "3.3", title: "チェーンストアパラドックスと後退帰納法の限界", description: "有限繰り返し囚人のジレンマ、後退帰納法と直観の乖離" },
                            { id: "3.4", title: "不完全情報ゲームと信念", description: "情報集合による不完全情報の定式化、逐次均衡の定義の概観" },
                            { id: "3.5", title: "シグナリングゲームと分離均衡", description: "送り手・受け手ゲームの定義、分離均衡・一括均衡の計算例" }
                        ]
                    },
                    {
                        id: "4", title: "協力ゲーム", description: "提携関数・コア・シャープレイ値・バーゲニング問題",
                        sections: [
                            { id: "4.1", title: "協力ゲームの定義と提携関数", description: "特性関数形ゲームの定義、超加法性・凸ゲームの定義" },
                            { id: "4.2", title: "コアの定義と存在条件", description: "コアの定義、バランス条件によるコアの非空性の特徴づけ（ボンダレーヴァ-シャープレイ定理）" },
                            { id: "4.3", title: "シャープレイ値の公理的特徴づけ", description: "効率性・対称性・ダミー・加法性の4公理によるシャープレイ値の一意性定理" },
                            { id: "4.4", title: "シャープレイ値の計算と解釈", description: "限界寄与の平均としての計算公式、投票ゲームへの応用例" },
                            { id: "4.5", title: "ナッシュ交渉解", description: "2人交渉問題の定式化、効率性・対称性・無関係な選択肢からの独立性・不変性によるナッシュ交渉解の公理的特徴づけ" }
                        ]
                    },
                    {
                        id: "5", title: "繰り返しゲーム", description: "無限繰り返しゲーム・割引利得・フォーク定理・サブゲーム完全均衡による協力の支持",
                        sections: [
                            { id: "5.1", title: "繰り返しゲームの定義", description: "有限・無限繰り返しゲームの定義、割引因子 δ による利得の定義" },
                            { id: "5.2", title: "無限繰り返し囚人のジレンマでの協力", description: "トリガー戦略の定義、δ が十分大きい場合の協力支持条件の証明" },
                            { id: "5.3", title: "フォーク定理の主張", description: "実現可能かつ個人合理的な利得ベクトルが δ → 1 で均衡利得として達成可能であることの主張" },
                            { id: "5.4", title: "フォーク定理の証明の概略", description: "グリム戦略によるナッシュフォーク定理、部分ゲーム完全版への拡張の概観" },
                            { id: "5.5", title: "不完全観測の繰り返しゲーム", description: "行動が直接観測されない場合の協力維持の困難さ、統計的検定戦略の概観" }
                        ]
                    },
                    {
                        id: "6", title: "進化ゲーム理論", description: "進化的安定戦略・レプリケーター動学・ナッシュ均衡との関係",
                        sections: [
                            { id: "6.1", title: "進化的安定戦略（ESS）の定義", description: "侵入者戦略への耐性条件としての ESS の定義、ナッシュ均衡との関係" },
                            { id: "6.2", title: "レプリケーター動学の定義", description: "戦略の頻度変化を記述する微分方程式の定義、平均利得との関係" },
                            { id: "6.3", title: "レプリケーター動学の固定点と安定性", description: "ナッシュ均衡との固定点の対応、ESS と漸近安定固定点の関係" },
                            { id: "6.4", title: "鷹鳩ゲームと混合均衡の進化的解釈", description: "代表的な進化ゲームの均衡の計算と生物学的解釈" },
                            { id: "6.5", title: "進化ゲームの応用", description: "生物進化・社会規範・言語慣習の進化モデルへの応用の概観" }
                        ]
                    },
                    {
                        id: "7", title: "メカニズムデザイン", description: "社会選択・顕示原理・VCG メカニズム・オークション理論",
                        sections: [
                            { id: "7.1", title: "社会選択関数と望ましい性質", description: "社会選択ルールの定義、アローの不可能性定理の主張の概観" },
                            { id: "7.2", title: "実装問題と顕示原理", description: "メカニズムの定義、ナッシュ実装・優越戦略実装の定義、顕示原理の主張と証明" },
                            { id: "7.3", title: "ギバード-サタースウェイトの定理", description: "独裁者でない優越戦略実装可能な社会選択関数の非存在の主張" },
                            { id: "7.4", title: "VCG メカニズムの構成", description: "準線形効用のもとでの VCG 移転の定義、優越戦略耐性の証明" },
                            { id: "7.5", title: "オークションの設計", description: "第一価格・第二価格封印入札の定義、収入同値定理の主張と証明の概略" },
                            { id: "7.6", title: "最適オークションとマイヤーソンの定理", description: "仮想評価の定義、期待収入最大化オークションの特徴づけの主張" }
                        ]
                    }
                ],
                prerequisites: ["2-1", "3-7"]
            },
            {
                id: "A-11",
                title: "数理物理学",
                chapters: [
                    {
                        id: "1", title: "量子力学の数学的基礎", description: "ヒルベルト空間・自己共役作用素・スペクトル定理・不確定性原理の精密化",
                        sections: [
                            { id: "1.1", title: "量子力学の公理的定式化", description: "状態としての単位ベクトル・観測量としての自己共役作用素・測定の確率則の定義、偏微分方程式論との接続" },
                            { id: "1.2", title: "自己共役性と本質的自己共役性", description: "対称作用素と自己共役作用素の区別、定義域の重要性、ストーン-フォン・ノイマンの定理" },
                            { id: "1.3", title: "スペクトル測度とスペクトル定理", description: "射影値測度の定義、自己共役作用素のスペクトル分解、連続・点・特異連続スペクトルの分類" },
                            { id: "1.4", title: "ハイゼンベルクの不確定性原理の精密化", description: "ロバートソンの不等式 σ_A σ_B ≥ |⟨[A,B]⟩|/2 の証明、フーリエ解析との接続" },
                            { id: "1.5", title: "シュレーディンガー作用素のスペクトル解析", description: "水素原子ハミルトニアンの自己共役性・スペクトルの離散部分と連続部分の分類" },
                            { id: "1.6", title: "散乱理論の概観", description: "漸近完全性・波動作用素の定義、スペクトル理論から散乱振幅への接続の概観" }
                        ]
                    },
                    {
                        id: "2", title: "量子場理論の公理的定式化", description: "ワイトマン公理・オスターワルダー-シュレーダー公理・共形場理論の代数的枠組み",
                        sections: [
                            { id: "2.1", title: "ワイトマン公理の定式化", description: "場の演算子値超関数としての定義、ローレンツ共変性・局所性・スペクトル条件の公理" },
                            { id: "2.2", title: "ワイトマン関数と再構成定理", description: "真空期待値によるワイトマン関数の定義、関数から場を再構成するワイトマンの再構成定理" },
                            { id: "2.3", title: "オスターワルダー-シュレーダー公理と解析接続", description: "ユークリッド場理論の公理、OS 公理からミンコフスキー場理論の回復" },
                            { id: "2.4", title: "共形場理論（CFT）の代数的枠組み", description: "頂点作用素代数の定義、ヴィラソロ代数の定義と中心電荷、表現論と共形ブロック" },
                            { id: "2.5", title: "CFT の相関関数と演算子積展開", description: "一次・二次・三次関数の共形対称性による決定、OPE の定義と収束" }
                        ]
                    },
                    {
                        id: "3", title: "作用素環と量子統計力学", description: "C*-代数的定式化・KMS 状態・熱力学極限・相転移の作用素環的記述",
                        sections: [
                            { id: "3.1", title: "量子統計力学の C*-代数的定式化", description: "無限系の代数的状態の定義、作用素環論との接続" },
                            { id: "3.2", title: "KMS 状態の定義と物理的意味", description: "逆温度 β での KMS 条件の定義、ギブス状態との関係、大正準集団との対応" },
                            { id: "3.3", title: "KMS 状態の存在と一意性", description: "有限系での一意性、無限系での相転移と KMS 状態の非一意性の対応" },
                            { id: "3.4", title: "熱力学極限と無限系の構成", description: "有限系の極限としての無限系、局所代数の帰納的極限の構成" },
                            { id: "3.5", title: "相転移の作用素環的記述", description: "自発的対称性の破れの定義、非同値な表現としての相の定義、イジング模型の例" }
                        ]
                    },
                    {
                        id: "4", title: "幾何学的量子化", description: "前量子化・偏極・量子化条件・ベリー位相",
                        sections: [
                            { id: "4.1", title: "幾何学的量子化の動機と手順", description: "古典力学から量子力学を幾何学的に構成するコスタント-スールーの枠組み、シンプレクティック幾何学との接続" },
                            { id: "4.2", title: "前量子化とプレクォンタム直線束", description: "整性条件 [ω]/2π ∈ H^2(M,Z)、前量子化ヒルベルト空間の構成" },
                            { id: "4.3", title: "偏極の定義と選択", description: "ラグランジアン葉層としての偏極の定義、ケーラー偏極・実偏極の例、量子ヒルベルト空間の定義" },
                            { id: "4.4", title: "調和振動子と水素原子の幾何学的量子化", description: "実偏極・ケーラー偏極による標準的な量子化の実行例" },
                            { id: "4.5", title: "ベリー位相の定義と幾何学的意味", description: "断熱近似のもとでの幾何学的位相の定義、接続の曲率としてのベリー曲率、量子ホール効果との接続の概観" }
                        ]
                    },
                    {
                        id: "5", title: "トポロジカル場理論", description: "アティヤの TQFT 公理・コボルディズム圏・チャーン-サイモンズ理論・結び目不変量",
                        sections: [
                            { id: "5.1", title: "アティヤの TQFT 公理", description: "コボルディズム圏から線形圏への関手としての TQFT の定義、物理的解釈" },
                            { id: "5.2", title: "コボルディズム圏の構造", description: "コボルディズムの定義、貼り合わせ規則・恒等コボルディズムによる圏の構成" },
                            { id: "5.3", title: "2次元 TQFT と Frobenius 代数", description: "2次元 TQFT と可換 Frobenius 代数の圏論的同値定理の主張" },
                            { id: "5.4", title: "チャーン-サイモンズ理論の概観", description: "3次元多様体上のゲージ場の作用汎関数としての CS 作用の定義、位相的不変性の意味" },
                            { id: "5.5", title: "CS 理論とジョーンズ多項式", description: "CS 理論のウィルソンループ期待値とジョーンズ多項式の対応の概観、低次元位相幾何学との接続" },
                            { id: "5.6", title: "拡張 TQFT とコボルディズム仮説", description: "ルーリーの完全拡張 TQFT の概観、コボルディズム仮説の主張と∞圏との接続" }
                        ]
                    },
                    {
                        id: "6", title: "弦理論と鏡対称性への展望", description: "カラビ-ヤウ多様体・ミラー対称性・グロモフ-ウィッテン不変量・ホモロジー的鏡対称性",
                        sections: [
                            { id: "6.1", title: "弦理論の数学的構造の概観", description: "世界面の共形場理論としての弦の定式化、超対称性の数学的役割の概観" },
                            { id: "6.2", title: "カラビ-ヤウ多様体の定義", description: "複素多様体・ケーラー多様体・リッチ平坦計量の条件、ホロノミー群 SU(n) による特徴づけ" },
                            { id: "6.3", title: "グロモフ-ウィッテン不変量の定義", description: "安定写像のモジュライ空間、仮想基本類による不変量の定義、シンプレクティック幾何学との接続" },
                            { id: "6.4", title: "ミラー対称性の主張", description: "A 型位相的弦理論と B 型位相的弦理論の同値性、二つのカラビ-ヤウ多様体の対の関係" },
                            { id: "6.5", title: "ホモロジー的鏡対称性（HMS）の概観", description: "コンツェビッチの HMS 予想、フクヤ圏と導来圏の同値性の主張、数え上げ幾何・代数幾何・シンプレクティック幾何の合流" }
                        ]
                    }
                ],
                prerequisites: ["5-2", "5-8", "5-17"]
            }
        ]
    }
];

export const getAllTopics = (): Topic[] => {
    return roadmapData.flatMap(stage => stage.topics);
};

export const getTopicById = (id: string): Topic | undefined => {
    return getAllTopics().find(topic => topic.id === id);
};

export const getStageByTopicId = (topicId: string): Stage | undefined => {
    return roadmapData.find(stage => stage.topics.some(topic => topic.id === topicId));
};
