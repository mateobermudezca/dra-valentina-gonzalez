"use client";

export default function ToothSVG() {
  return (
    <svg
      viewBox="0 0 240 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-2xl dark:drop-shadow-[0_0_40px_rgba(196,168,130,0.15)]"
    >
      <defs>
        <linearGradient id="toothBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f0eb" />
          <stop offset="100%" stopColor="#e3dbd2" />
        </linearGradient>
        <radialGradient id="toothGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#c4a882" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#c4a882" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="120" cy="310" rx="48" ry="7" className="fill-black/[0.08] dark:fill-white/[0.04]" />

      {/* Dark mode glow ring */}
      <ellipse cx="120" cy="150" rx="85" ry="110" fill="url(#toothGlow)" className="hidden dark:block" />

      {/* Main tooth body */}
      <path
        d="M120 50 C172 50, 178 85, 172 125 C168 152, 160 170, 154 188 C148 218, 136 258, 127 288 C124 298, 116 298, 113 288 C104 258, 92 218, 86 188 C80 170, 72 152, 68 125 C62 85, 68 50, 120 50Z"
        fill="url(#toothBody)"
        className="stroke-[#d5cdc5]/30 dark:stroke-[#c4a882]/20"
        strokeWidth="0.75"
      />

      {/* Crown gloss */}
      <path
        d="M92 82 C96 68, 108 56, 122 54 C116 62, 110 76, 106 92 C102 108, 100 124, 98 140 C94 130, 88 108, 85 98 C82 88, 86 82, 92 82Z"
        fill="white"
        opacity="0.35"
      />

      {/* Secondary gloss */}
      <path
        d="M138 68 C145 70, 150 78, 152 90 C148 86, 142 80, 135 76 C130 72, 128 68, 138 68Z"
        fill="white"
        opacity="0.18"
      />

      {/* Cervical margin line */}
      <path
        d="M66 150 Q120 170 174 150"
        stroke="#c4a882"
        strokeWidth="1.5"
        fill="none"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Subtle root texture lines */}
      <path
        d="M114 200 Q116 245 110 280"
        stroke="#c4a882"
        strokeWidth="0.6"
        fill="none"
        opacity="0.08"
        strokeLinecap="round"
      />
      <path
        d="M126 200 Q124 245 130 280"
        stroke="#c4a882"
        strokeWidth="0.6"
        fill="none"
        opacity="0.08"
        strokeLinecap="round"
      />

      {/* Crown cusp line */}
      <path
        d="M95 55 Q120 65 145 56"
        stroke="#c4a882"
        strokeWidth="0.8"
        fill="none"
        opacity="0.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
