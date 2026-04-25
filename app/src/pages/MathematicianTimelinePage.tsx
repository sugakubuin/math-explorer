import { useEffect, useRef } from 'react';
import SEO from '../components/seo/SEO';

/**
 * インタラクティブ年表。元データは `references/mathematician_timeline.html`。
 * 上部の生涯バーは MATHEMATICIANS、下部の功績は TIMELINE_ACHIEVEMENTS で別管理。
 */
const START = 1490;
/** 年軸・キャンバス幅の終端（現代の功績表示のため 2000 年以降も含む） */
const END = 2015;
/** 年1年あたりの幅（大きいほど近接年が横に逃げ、縦レーンが減る） */
const PX_PER_YEAR = 11;
const BASE_LEFT = 128;
const RIGHT_PAD = 48;
const BARS_TOP = 44;
const ROW_H = 11;
const ROW_GAP = 3;
const NAME_CHAR_PX = 10.5;
const NAME_GAP = 5;
const ACH_FONT_PX = 10.5;
/** 功績列（縦書き）の最大表示高さ。これを超える長文は自動的に左に列を重ねて折り返す。 */
const ACH_MAX_COLUMN_H = 300;
const ACH_RIGHT_MARGIN = 72;
const ACH_BAND_BOTTOM_PAD = 16;

const ERAS = [
    { label: 'Ⅰ 近世以前', start: 1490, end: 1660, color: '#8B7AD4' },
    { label: 'Ⅱ 近世', start: 1660, end: 1800, color: '#5B9BD4' },
    { label: 'Ⅲ 近代', start: 1800, end: 1870, color: '#4BAA7A' },
    { label: 'Ⅳ 現代数学の夜明け', start: 1870, end: 1950, color: '#D4884A' },
    { label: 'Ⅴ いまの数学', start: 1950, end: 2015, color: '#C45A7A' },
] as const;

type MathematicianRaw = {
    name: string;
    born: number;
    died: number | null;
    color: string;
};

/** 年表下部の功績（数学者データとは独立。表示: 年 内容 - 人物名。同一西暦は1件にマージ） */
type TimelineAchievementEntry = {
    year: number;
    person: string;
    content: string;
};

const MATHEMATICIANS: MathematicianRaw[] = [
    { name: 'カルダーノ', born: 1501, died: 1576, color: '#8B7AD4' },
    { name: 'ヴィエト', born: 1540, died: 1603, color: '#8B7AD4' },
    { name: 'ナピア', born: 1550, died: 1617, color: '#8B7AD4' },
    { name: 'デカルト', born: 1596, died: 1650, color: '#8B7AD4' },
    { name: 'フェルマー', born: 1607, died: 1665, color: '#8B7AD4' },
    { name: 'パスカル', born: 1623, died: 1662, color: '#5B9BD4' },
    { name: 'ニュートン', born: 1643, died: 1727, color: '#5B9BD4' },
    { name: 'ライプニッツ', born: 1646, died: 1716, color: '#5B9BD4' },
    { name: 'J.ベルヌーイ', born: 1654, died: 1705, color: '#5B9BD4' },
    { name: 'オイラー', born: 1707, died: 1783, color: '#5B9BD4' },
    { name: 'ダランベール', born: 1717, died: 1783, color: '#5B9BD4' },
    { name: 'ラグランジュ', born: 1736, died: 1813, color: '#5B9BD4' },
    { name: 'ラプラス', born: 1749, died: 1827, color: '#5B9BD4' },
    { name: 'ルジャンドル', born: 1752, died: 1833, color: '#5B9BD4' },
    { name: 'フーリエ', born: 1768, died: 1830, color: '#4BAA7A' },
    { name: 'ガウス', born: 1777, died: 1855, color: '#4BAA7A' },
    { name: 'ポアソン', born: 1781, died: 1840, color: '#4BAA7A' },
    { name: 'コーシー', born: 1789, died: 1857, color: '#4BAA7A' },
    { name: 'アーベル', born: 1802, died: 1829, color: '#4BAA7A' },
    { name: 'ヤコビ', born: 1804, died: 1851, color: '#4BAA7A' },
    { name: 'ディリクレ', born: 1805, died: 1859, color: '#4BAA7A' },
    { name: 'ガロア', born: 1811, died: 1832, color: '#4BAA7A' },
    { name: 'リーマン', born: 1826, died: 1866, color: '#4BAA7A' },
    { name: 'ワイエルシュトラス', born: 1815, died: 1897, color: '#4BAA7A' },
    { name: 'デデキント', born: 1831, died: 1916, color: '#4BAA7A' },
    { name: 'カントール', born: 1845, died: 1918, color: '#D4884A' },
    { name: 'クライン', born: 1849, died: 1925, color: '#D4884A' },
    { name: 'ポアンカレ', born: 1854, died: 1912, color: '#D4884A' },
    { name: 'ヒルベルト', born: 1862, died: 1943, color: '#D4884A' },
    { name: 'ルベーグ', born: 1875, died: 1941, color: '#D4884A' },
    { name: 'ネター', born: 1882, died: 1935, color: '#D4884A' },
    { name: 'ラマヌジャン', born: 1887, died: 1920, color: '#D4884A' },
    { name: 'ゲーデル', born: 1906, died: 1978, color: '#D4884A' },
    { name: 'ノイマン', born: 1903, died: 1957, color: '#D4884A' },
    { name: 'コルモゴロフ', born: 1903, died: 1987, color: '#D4884A' },
    { name: 'ヴェイユ', born: 1906, died: 1998, color: '#D4884A' },
    { name: 'チューリング', born: 1912, died: 1954, color: '#D4884A' },
    { name: 'エルデシュ', born: 1913, died: 1996, color: '#D4884A' },
    { name: 'グロタンディーク', born: 1928, died: 2014, color: '#C45A7A' },
    { name: 'アティヤ', born: 1929, died: 2019, color: '#C45A7A' },
    { name: 'コンヌ', born: 1947, died: null, color: '#C45A7A' },
    { name: 'ワイルズ', born: 1953, died: null, color: '#C45A7A' },
    { name: 'ペレルマン', born: 1966, died: null, color: '#C45A7A' },
    { name: 'タオ', born: 1975, died: null, color: '#C45A7A' },
];

const TIMELINE_ACHIEVEMENTS: TimelineAchievementEntry[] = [
    { year: 1545, person: 'カルダーノ', content: '『大術』三次・四次方程式' },
    { year: 1591, person: 'ヴィエト', content: '記号代数学' },
    { year: 1614, person: 'ナピア', content: '対数の発明' },
    { year: 1637, person: 'デカルト', content: '『幾何学』解析幾何' },
    { year: 1644, person: 'デカルト', content: '『哲学原理』' },
    { year: 1637, person: 'フェルマー', content: '最終定理の着想' },
    { year: 1654, person: 'パスカル', content: '確率論の基礎' },
    { year: 1642, person: 'パスカル', content: 'パスカルの三角形' },
    { year: 1687, person: 'ニュートン', content: '『プリンキピア』' },
    { year: 1665, person: 'ニュートン', content: '流数法（微積分）' },
    { year: 1684, person: 'ライプニッツ', content: '微分の公表' },
    { year: 1686, person: 'ライプニッツ', content: '積分記法の整備' },
    { year: 1696, person: 'J.ベルヌーイ', content: '最速降下問題' },
    { year: 1713, person: 'J.ベルヌーイ', content: '『推測術』' },
    { year: 1736, person: 'オイラー', content: 'ケーニヒスベルク橋問題' },
    { year: 1748, person: 'オイラー', content: '『無限解析入門』' },
    { year: 1759, person: 'オイラー', content: 'ゼータ関数のオイラー積' },
    { year: 1747, person: 'ダランベール', content: '波動方程式' },
    { year: 1788, person: 'ラグランジュ', content: '『解析力学』' },
    { year: 1770, person: 'ラグランジュ', content: 'ワリング問題' },
    { year: 1799, person: 'ラプラス', content: '『天体力学』' },
    { year: 1812, person: 'ラプラス', content: '『確率の解析的理論』' },
    { year: 1805, person: 'ルジャンドル', content: '最小二乗法' },
    { year: 1822, person: 'フーリエ', content: 'フーリエ級数' },
    { year: 1801, person: 'ガウス', content: '『算術研究』' },
    { year: 1799, person: 'ガウス', content: '代数学の基本定理' },
    { year: 1827, person: 'ガウス', content: 'ガウス曲率' },
    { year: 1837, person: 'ポアソン', content: 'ポアソン分布' },
    { year: 1821, person: 'コーシー', content: '『解析教程』' },
    { year: 1825, person: 'コーシー', content: 'コーシー積分公式' },
    { year: 1824, person: 'アーベル', content: '五次方程式の不可解性' },
    { year: 1827, person: 'アーベル', content: '楕円関数' },
    { year: 1829, person: 'ヤコビ', content: '楕円関数論' },
    { year: 1837, person: 'ディリクレ', content: '算術級数定理' },
    { year: 1832, person: 'ガロア', content: '群論・方程式の可解性' },
    { year: 1854, person: 'リーマン', content: 'リーマン幾何' },
    { year: 1859, person: 'リーマン', content: 'ゼータ関数と素数' },
    { year: 1872, person: 'ワイエルシュトラス', content: 'ε–δ 論法' },
    { year: 1885, person: 'ワイエルシュトラス', content: '一様近似定理' },
    { year: 1888, person: 'デデキント', content: 'デデキント切断' },
    { year: 1874, person: 'カントール', content: '可算・非可算' },
    { year: 1883, person: 'カントール', content: '超限数・基数' },
    { year: 1872, person: 'クライン', content: 'エルランゲン・プログラム' },
    { year: 1895, person: 'ポアンカレ', content: '『位置解析』' },
    { year: 1890, person: 'ポアンカレ', content: '三体問題' },
    { year: 1900, person: 'ヒルベルト', content: '23の問題' },
    { year: 1899, person: 'ヒルベルト', content: '『幾何学の基礎』' },
    { year: 1902, person: 'ルベーグ', content: 'ルベーグ積分' },
    { year: 1915, person: 'ネター', content: 'ネーターの定理' },
    { year: 1921, person: 'ネター', content: 'イデアル論' },
    { year: 1913, person: 'ラマヌジャン', content: 'ハーディとの共同研究' },
    { year: 1918, person: 'ラマヌジャン', content: '分割数の漸近' },
    { year: 1931, person: 'ゲーデル', content: '不完全性定理' },
    { year: 1940, person: 'ゲーデル', content: '連続体仮説の相対無矛盾性' },
    { year: 1928, person: 'ノイマン', content: 'ミニマックス定理' },
    { year: 1932, person: 'ノイマン', content: '量子力学の数学的基礎' },
    { year: 1945, person: 'ノイマン', content: '計算機アーキテクチャ' },
    { year: 1933, person: 'コルモゴロフ', content: '確率論の公理化' },
    { year: 1941, person: 'コルモゴロフ', content: '乱流理論（K41）' },
    { year: 1949, person: 'ヴェイユ', content: 'ヴェイユ予想' },
    { year: 1936, person: 'チューリング', content: 'チューリング機械' },
    { year: 1949, person: 'エルデシュ', content: '素数定理の初等的証明' },
    { year: 1960, person: 'グロタンディーク', content: 'スキーム理論（EGA）' },
    { year: 1977, person: 'グロタンディーク', content: 'トポス理論' },
    { year: 1963, person: 'アティヤ', content: '指数定理' },
    { year: 1961, person: 'アティヤ', content: 'K理論' },
    { year: 1980, person: 'コンヌ', content: '非可換幾何学' },
    { year: 1995, person: 'ワイルズ', content: 'フェルマー予想の証明' },
    { year: 2003, person: 'ペレルマン', content: 'ポアンカレ予想の証明' },
    { year: 2004, person: 'タオ', content: 'グリーン＝タオ定理' },
    { year: 2015, person: 'タオ', content: '素数ギャップ問題' },
];

function xOf(year: number) {
    return BASE_LEFT + (year - START) * PX_PER_YEAR;
}

function barEndYear(died: number | null) {
    if (died !== null) return Math.min(died, END);
    return END;
}

function estimateNameWidthPx(name: string) {
    return Math.ceil(name.length * NAME_CHAR_PX);
}

type PlacedMathematician = MathematicianRaw & { row: number };

function assignNonOverlappingRows(data: MathematicianRaw[]): PlacedMathematician[] {
    const items = data.map((m) => {
        const x1 = xOf(m.born);
        const x2 = xOf(barEndYear(m.died));
        const nw = estimateNameWidthPx(m.name);
        const left = x1 - nw - NAME_GAP;
        const right = Math.max(x1 + 6, x2);
        return { raw: m, left, right, x1, x2, nw };
    });

    items.sort((a, b) => a.left - b.left);

    const rowRights: number[] = [];

    return items.map((it) => {
        let row = 0;
        while (row < rowRights.length && !(it.left > rowRights[row])) {
            row++;
        }
        if (row === rowRights.length) rowRights.push(it.right);
        else rowRights[row] = Math.max(rowRights[row], it.right);

        return { ...it.raw, row };
    });
}

type FlatAchievement = {
    year: number;
    content: string;
    color: string;
    person: string;
    /** 接続線を引く数学者（同一西暦マージ時は先頭名） */
    anchorPerson: string;
    x: number;
};

function colorForPerson(person: string): string {
    const m = MATHEMATICIANS.find((p) => p.name === person);
    return m?.color ?? '#64748b';
}

function formatAchievementDisplay(year: number, content: string, person: string) {
    return `${year} ${content} - ${person}`;
}

/** 同一西暦を1件にまとめる（内容・人物は ／ ・ で連結） */
function mergeAchievementsByYear(entries: TimelineAchievementEntry[]): TimelineAchievementEntry[] {
    const byYear = new Map<number, TimelineAchievementEntry[]>();
    for (const e of entries) {
        if (!byYear.has(e.year)) byYear.set(e.year, []);
        byYear.get(e.year)!.push(e);
    }
    const years = [...byYear.keys()].sort((a, b) => a - b);
    return years.map((yr) => {
        const list = byYear.get(yr)!;
        list.sort(
            (a, b) =>
                a.person.localeCompare(b.person, 'ja') || a.content.localeCompare(b.content, 'ja'),
        );
        const persons = [...new Set(list.map((x) => x.person))];
        const person = persons.join('・');
        const content = list.map((x) => x.content).join(' ／ ');
        return { year: yr, person, content };
    });
}

/** 功績は年の位置に沿って横一列（同じ top）に並べる */
function layoutAchievementsInRow(entries: TimelineAchievementEntry[]): FlatAchievement[] {
    const merged = mergeAchievementsByYear(entries);
    return merged.map((e) => {
        const anchorPerson = e.person.split('・')[0];
        return {
            year: e.year,
            content: e.content,
            person: e.person,
            anchorPerson,
            color: colorForPerson(anchorPerson),
            x: xOf(e.year),
        };
    });
}

function buildTimeline(canvas: HTMLDivElement) {
    const placed = assignNonOverlappingRows(MATHEMATICIANS);
    const maxRow = Math.max(0, ...placed.map((p) => p.row));
    const barBandBottom = BARS_TOP + (maxRow + 1) * (ROW_H + ROW_GAP) + 10;
    const AXIS_Y = barBandBottom;
    const TICK_LABEL_TOP = AXIS_Y + 18;
    const ACH_BASE_TOP = TICK_LABEL_TOP + 22;
    const achievements = layoutAchievementsInRow(TIMELINE_ACHIEVEMENTS);
    const namesWithAchievements = new Set(TIMELINE_ACHIEVEMENTS.map((e) => e.person));

    const totalH =
        achievements.length === 0
            ? ACH_BASE_TOP + 12
            : ACH_BASE_TOP + ACH_MAX_COLUMN_H + ACH_BAND_BOTTOM_PAD;

    const baseTotalW = (END - START) * PX_PER_YEAR + BASE_LEFT + RIGHT_PAD;
    const maxAchX = achievements.length === 0 ? 0 : Math.max(...achievements.map((a) => a.x));
    const totalW = Math.max(baseTotalW, maxAchX + ACH_RIGHT_MARGIN);
    canvas.style.width = `${totalW}px`;
    canvas.style.height = `${totalH}px`;

    ERAS.forEach((era) => {
        const x = xOf(era.start);
        const w = xOf(era.end) - x;

        const bg = document.createElement('div');
        bg.className = 'mt-era-bg';
        bg.style.cssText = `left:${x}px;width:${w}px;background:${era.color};height:${Math.min(220, AXIS_Y + 8)}px;`;
        canvas.appendChild(bg);

        const lbl = document.createElement('div');
        lbl.className = 'mt-era-label';
        lbl.style.cssText = `left:${x + 6}px;color:${era.color};opacity:0.8;`;
        lbl.textContent = era.label;
        canvas.appendChild(lbl);

        const div = document.createElement('div');
        div.className = 'mt-era-divider';
        div.style.left = `${x}px`;
        div.style.height = `${AXIS_Y + 8}px`;
        canvas.appendChild(div);
    });

    const axis = document.createElement('div');
    axis.className = 'mt-axis-line';
    axis.style.cssText = `left:${BASE_LEFT}px;width:${totalW - BASE_LEFT}px;top:${AXIS_Y}px;`;
    canvas.appendChild(axis);

    for (let yr = 1500; yr <= END; yr += 50) {
        const x = xOf(yr);
        const tick = document.createElement('div');
        tick.className = 'mt-tick';
        tick.style.cssText = `left:${x}px;top:${AXIS_Y - 14}px;`;
        canvas.appendChild(tick);

        const tl = document.createElement('div');
        tl.className = 'mt-tick-label';
        tl.style.left = `${x}px`;
        tl.style.top = `${TICK_LABEL_TOP}px`;
        tl.textContent = String(yr);
        canvas.appendChild(tl);
    }

    placed.forEach((m) => {
        const x1 = xOf(m.born);
        const x2 = xOf(barEndYear(m.died));
        const w = Math.max(x2 - x1, 6);
        const y = BARS_TOP + m.row * (ROW_H + ROW_GAP);
        const nw = estimateNameWidthPx(m.name);

        const bar = document.createElement('div');
        bar.className = m.died === null ? 'mt-bar mt-bar-living' : 'mt-bar mt-bar-deceased';
        bar.style.cssText = `left:${x1}px;width:${w}px;top:${y}px;background:${m.color};opacity:${m.died ? 0.85 : 0.65};`;
        const life = `${m.born}–${m.died ?? '存命'}`;
        bar.title = `${m.name}（${life}）`;
        canvas.appendChild(bar);

        const nameLbl = document.createElement('div');
        nameLbl.className = 'mt-bar-label';
        nameLbl.style.cssText =
            `left:${x1 - nw - NAME_GAP}px;top:${y - 1}px;width:${nw}px;text-align:right;color:${m.color};font-size:9.5px;opacity:0.92;`;
        nameLbl.textContent = m.name;
        canvas.appendChild(nameLbl);

        const midLife = x1 + w / 2;
        const barBottom = y + ROW_H;

        if (namesWithAchievements.has(m.name)) {
            const stem = document.createElement('div');
            stem.className = 'mt-dot-line';
            const hStem = Math.max(AXIS_Y - barBottom, 0);
            stem.style.cssText = `left:${midLife}px;top:${barBottom}px;width:0;height:${hStem}px;border-left:1px solid var(--mt-border-tertiary);opacity:0.35;`;
            canvas.appendChild(stem);
        }

    });

    const yAxis = AXIS_Y - 1;
    const placedByName = new Map(placed.map((p) => [p.name, p]));

    achievements.forEach((ach) => {
        const m = placedByName.get(ach.anchorPerson);
        if (!m) return;
        const x1b = xOf(m.born);
        const x2b = xOf(barEndYear(m.died));
        const wb = Math.max(x2b - x1b, 6);
        const midLife = x1b + wb / 2;
        const xAch = ach.x;
        const colTop = ACH_BASE_TOP;

        const hLine = document.createElement('div');
        const x0 = Math.min(midLife, xAch);
        const xSpan = Math.abs(xAch - midLife);
        hLine.style.cssText = `position:absolute;left:${x0}px;top:${yAxis}px;width:${xSpan}px;height:0;border-top:1px solid var(--mt-border-tertiary);opacity:0.35;`;
        canvas.appendChild(hLine);

        const v2 = document.createElement('div');
        const h2 = Math.max(colTop - AXIS_Y, 4);
        v2.style.cssText = `position:absolute;left:${xAch}px;top:${AXIS_Y}px;width:0;height:${h2}px;border-left:1px solid var(--mt-border-tertiary);opacity:0.35;`;
        canvas.appendChild(v2);
    });

    achievements.forEach((ach) => {
        const el = document.createElement('div');
        el.className = 'mt-achievement';
        const top = ACH_BASE_TOP;
        const colText = formatAchievementDisplay(ach.year, ach.content, ach.person);
        el.style.cssText = `left:${ach.x}px;top:${top}px;max-height:${ACH_MAX_COLUMN_H}px;color:${ach.color};font-size:${ACH_FONT_PX}px;`;
        el.textContent = colText;
        el.title = colText;
        canvas.appendChild(el);
    });
}

const TIMELINE_CSS = `
#mathematician-timeline-root {
  --mt-text-primary: hsl(var(--foreground));
  --mt-text-secondary: hsl(var(--muted-foreground));
  --mt-text-tertiary: hsl(var(--muted-foreground) / 0.85);
  --mt-border-secondary: hsl(var(--border));
  --mt-border-tertiary: hsl(var(--border) / 0.7);
  font-family: var(--font-sans);
}
#mathematician-timeline-root * { box-sizing: border-box; }
#mathematician-timeline-root .mt-timeline-wrapper {
  overflow-x: auto;
  overflow-y: visible;
  padding-bottom: 0;
  cursor: grab;
  user-select: none;
  -webkit-overflow-scrolling: touch;
}
#mathematician-timeline-root .mt-timeline-wrapper:active { cursor: grabbing; }
#mathematician-timeline-root .mt-timeline-canvas {
  position: relative;
  min-width: 100%;
}
#mathematician-timeline-root .mt-era-bg {
  position: absolute;
  top: 0;
  opacity: 0.06;
  pointer-events: none;
}
#mathematician-timeline-root .mt-era-label {
  position: absolute;
  top: 12px;
  font-size: 10px;
  font-weight: 500;
  color: var(--mt-text-tertiary);
  letter-spacing: 0.08em;
  white-space: nowrap;
  text-transform: uppercase;
}
#mathematician-timeline-root .mt-axis-line {
  position: absolute;
  height: 2px;
  background: var(--mt-border-secondary);
  pointer-events: none;
}
#mathematician-timeline-root .mt-tick {
  position: absolute;
  width: 1px;
  height: 28px;
  background: var(--mt-border-tertiary);
  pointer-events: none;
}
#mathematician-timeline-root .mt-tick-label {
  position: absolute;
  font-size: 10px;
  color: var(--mt-text-tertiary);
  transform: translateX(-50%);
  pointer-events: none;
}
#mathematician-timeline-root .mt-bar {
  position: absolute;
  height: 10px;
  cursor: pointer;
  transition: filter 0.2s, transform 0.15s;
  top: 0;
}
#mathematician-timeline-root .mt-bar-deceased {
  border-radius: 5px;
}
#mathematician-timeline-root .mt-bar-living {
  border-radius: 5px 0 0 5px;
}
#mathematician-timeline-root .mt-bar:hover {
  filter: brightness(1.2);
  transform: scaleY(1.35);
}
#mathematician-timeline-root .mt-bar-label {
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  overflow: hidden;
  text-overflow: ellipsis;
}
#mathematician-timeline-root .mt-achievement {
  position: absolute;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  line-height: 1.45;
  letter-spacing: 0.04em;
  white-space: normal;
  word-break: break-all;
  line-break: anywhere;
  transform: translateX(-50%);
  cursor: default;
  transition: color 0.2s, opacity 0.2s;
  padding-top: 0;
  overflow: visible;
  color: var(--mt-text-secondary);
}
#mathematician-timeline-root .mt-achievement:hover {
  color: var(--mt-text-primary);
  opacity: 1;
}
#mathematician-timeline-root .mt-dot-line {
  position: absolute;
  pointer-events: none;
}
#mathematician-timeline-root .mt-era-divider {
  position: absolute;
  top: 0;
  width: 1px;
  background: var(--mt-border-secondary);
  pointer-events: none;
}
#mathematician-timeline-root .mt-legend {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px 0 4px;
  font-size: 11px;
  color: var(--mt-text-secondary);
}
#mathematician-timeline-root .mt-legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
}
#mathematician-timeline-root .mt-legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
`;

export default function MathematicianTimelinePage() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const canvas = canvasRef.current;
        if (!wrapper || !canvas) return;

        buildTimeline(canvas);

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX - wrapper.offsetLeft;
            scrollLeft = wrapper.scrollLeft;
        };
        const onMouseUp = () => {
            isDown = false;
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - wrapper.offsetLeft;
            wrapper.scrollLeft = scrollLeft - (x - startX);
        };

        wrapper.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            wrapper.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
            canvas.replaceChildren();
        };
    }, []);

    return (
        <div className="bg-background text-foreground">
            <SEO
                title="近世数学史年表 | Math Explorer"
                url="/mathematician-timeline"
                description="1490年から現代までの数学者と時代区分を俯瞰するインタラクティブ年表。"
            />
            <style>{TIMELINE_CSS}</style>
            <div id="mathematician-timeline-root">
                <div className="container mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-6 md:pb-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-primary dark:text-blue-100 mb-2 tracking-tight">
                        近世数学史年表
                    </h1>
                    <p className="text-sm text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                        横にドラッグしてスクロールできます。棒は数学者の生涯。
                    </p>
                </div>

                <div className="w-full">
                    <div ref={wrapperRef} className="mt-timeline-wrapper">
                        <div ref={canvasRef} className="mt-timeline-canvas" />
                    </div>
                </div>
            </div>
        </div>
    );
}
