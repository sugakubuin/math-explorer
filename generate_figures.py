"""
Generate math figures for the math-explorer app.
  - fig1_1_2.svg : Figure 1.1-2 (Squeeze Theorem / はさみうちの原理)
  - fig1_2_1.svg : Figure 1.2-1 (One-sided limits / 片側極限)

Output: app/public/images/
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import os

# ── Style ────────────────────────────────────────────────────────────────────
plt.rcParams.update({
    "font.family": "serif",
    "mathtext.fontset": "cm",
    "axes.spines.top": False,
    "axes.spines.right": False,
    "figure.dpi": 150,
})

OUT_DIR = os.path.join(os.path.dirname(__file__), "app", "public", "images")
os.makedirs(OUT_DIR, exist_ok=True)

ALPHA = 0.92          # background alpha
BG    = "#f8fafc"     # light slate bg


# ════════════════════════════════════════════════════════════════════════════
#  Figure 1.1-2 ─ Squeeze Theorem (はさみうちの原理)
# ════════════════════════════════════════════════════════════════════════════
fig, ax = plt.subplots(figsize=(7.2, 3.2), facecolor=BG)
ax.set_facecolor(BG)

n = np.linspace(1, 14, 400)

# a_n : lower bound  (starts well below alpha, converges from below)
an = 0.3 + 0.7 * (1 - np.exp(-0.35 * n))

# c_n : upper bound  (starts well above alpha, converges from above)
cn = 1.7 - 0.7 * (1 - np.exp(-0.35 * n))

# b_n : oscillates between a_n and c_n, converging to alpha=1
amp = 0.55 * np.exp(-0.35 * n)          # decaying amplitude
bn  = 1.0 + amp * np.sin(2.5 * n)      # oscillation

ax.plot(n, cn, color="#0ea5e9", linewidth=2.2, label=r"$c_n$")
ax.plot(n, bn, color="#10b981", linewidth=2.0, linestyle="--",
        dashes=(6, 3), label=r"$b_n$")
ax.plot(n, an, color="#e11d48", linewidth=2.2, label=r"$a_n$")

# alpha dashed line
ax.axhline(1.0, color="#92400e", linewidth=1.4, linestyle=(0, (6, 4)),
           alpha=0.85, zorder=1)
ax.text(14.3, 1.0, r"$\alpha$", va="center", ha="left",
        color="#92400e", fontsize=13)

# axes labels & ticks
ax.set_xlabel(r"$n$", fontsize=12, labelpad=4)
ax.set_xlim(0.5, 14.8)
ax.set_ylim(0, 2)
ax.set_yticks([])
ax.set_xticks([])

# legend (below the axes)
legend = ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.12),
                   ncol=3, fontsize=11, framealpha=0, labelspacing=0.4)

# caption strip at bottom (we handle caption in TSX, keep it clean)
fig.tight_layout(pad=0.6)

out_path = os.path.join(OUT_DIR, "fig1_1_2.svg")
fig.savefig(out_path, format="svg", bbox_inches="tight",
            facecolor=BG, transparent=False)
plt.close(fig)
print(f"Saved: {out_path}")


# ════════════════════════════════════════════════════════════════════════════
#  Figure 1.2-1 ─ One-sided limits (片側極限)
# ════════════════════════════════════════════════════════════════════════════
fig, ax = plt.subplots(figsize=(7.2, 3.4), facecolor=BG)
ax.set_facecolor(BG)

# Left branch: x → a−  (L1 = 1.6)
xl = np.linspace(0.3, 2.98, 400)
fl = 1.6 - 0.4 * np.exp(-1.5 * (xl - 0.3))   # rises smoothly to L1

# Right branch: x → a+  (L2 = 0.7)
xr = np.linspace(3.02, 5.7, 400)
fr = 0.7 + 0.55 * np.exp(-1.5 * (xr - 3.02)) # falls smoothly to L2

a = 3.0   # x = a
L1, L2 = fl[-1], fr[0]

ax.plot(xl, fl, color="#e11d48", linewidth=2.4, label=r"$x \to a^-$")
ax.plot(xr, fr, color="#0ea5e9", linewidth=2.4, label=r"$x \to a^+$")

# Open circles at x = a
ax.plot(a, L1, "o", ms=7, mfc=BG, mec="#e11d48", mew=2.0, zorder=5)
ax.plot(a, L2, "o", ms=7, mfc=BG, mec="#0ea5e9", mew=2.0, zorder=5)

# Horizontal dashed reference lines
ax.axhline(L1, color="#e11d48", linewidth=1.0, linestyle="--", alpha=0.45, xmax=(a-0.3)/6)
ax.axhline(L2, color="#0ea5e9", linewidth=1.0, linestyle="--", alpha=0.45, xmax=(a-0.3)/6)

# Vertical dashed line at x=a
ax.axvline(a, color="#94a3b8", linewidth=1.0, linestyle="--", alpha=0.7,
           ymin=0, ymax=0.97)

# Axis labels & ticks
ax.set_xlabel(r"$x$", fontsize=12, labelpad=4)
ax.set_xlim(0, 6.3)
ax.set_ylim(0, 2.2)
ax.set_xticks([a])
ax.set_xticklabels([r"$a$"], fontsize=12)
ax.set_yticks([L2, L1])
ax.set_yticklabels([r"$L_2$", r"$L_1$"], fontsize=11)

# Legend (below the axes)
ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.14),
          ncol=2, fontsize=11, framealpha=0, labelspacing=0.5)

fig.tight_layout(pad=0.6)

out_path = os.path.join(OUT_DIR, "fig1_2_1.svg")
fig.savefig(out_path, format="svg", bbox_inches="tight",
            facecolor=BG, transparent=False)
plt.close(fig)
print(f"Saved: {out_path}")

print("Done.")
