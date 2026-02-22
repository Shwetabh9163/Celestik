"use client";

/**
 * Zodiac Mandala — matches the reference image:
 * outer dotted ring, zodiac symbols, moon phases, overlapping geometric stars,
 * concentric circles, and a detailed sun face center.
 */
export default function ZodiacMandala({ size = 220 }: { size?: number }) {
    const cx = 150, cy = 150;

    /* Zodiac symbols positioned around the wheel */
    const zodiac = [
        "♈", "♉", "♊", "♋", "♌", "♍",
        "♎", "♏", "♐", "♑", "♒", "♓",
    ];

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 will-change-transform"
        >
            {/* ── OUTER DOTTED RING ── */}
            <circle cx={cx} cy={cy} r="145" stroke="#E6D3A3" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
            <circle cx={cx} cy={cy} r="140" stroke="#E6D3A3" strokeWidth="0.8" opacity="0.5" />

            {/* ── MOON PHASE DOTS (outer ring) ── */}
            {Array.from({ length: 24 }, (_, i) => {
                const a = ((i * 15) * Math.PI) / 180;
                const r = 137;
                const isFull = i % 6 === 0;
                return (
                    <circle
                        key={`moon${i}`}
                        cx={cx + r * Math.cos(a)}
                        cy={cy + r * Math.sin(a)}
                        r={isFull ? 3 : 1.5}
                        fill={isFull ? "#E6D3A3" : "none"}
                        stroke="#E6D3A3"
                        strokeWidth="0.4"
                        opacity={isFull ? 0.5 : 0.3}
                    />
                );
            })}

            {/* ── ZODIAC SYMBOLS RING ── */}
            <circle cx={cx} cy={cy} r="125" stroke="#E6D3A3" strokeWidth="0.4" opacity="0.35" />
            <circle cx={cx} cy={cy} r="110" stroke="#E6D3A3" strokeWidth="0.4" opacity="0.35" />
            {zodiac.map((sym, i) => {
                const a = ((i * 30 - 90) * Math.PI) / 180;
                const r = 117;
                return (
                    <text
                        key={`z${i}`}
                        x={cx + r * Math.cos(a)}
                        y={cy + r * Math.sin(a)}
                        fill="#E6D3A3"
                        fontSize="11"
                        textAnchor="middle"
                        dominantBaseline="central"
                        opacity="0.55"
                    >
                        {sym}
                    </text>
                );
            })}

            {/* ── GEOMETRIC STAR — overlapping squares ── */}
            {/* Square 1 (0° rotation) */}
            <polygon
                points={[0, 90, 180, 270].map((a) => {
                    const rad = (a * Math.PI) / 180;
                    return `${cx + 100 * Math.cos(rad)},${cy + 100 * Math.sin(rad)}`;
                }).join(" ")}
                stroke="#E6D3A3" strokeWidth="0.7" fill="none" opacity="0.4"
            />
            {/* Square 2 (45° rotation) */}
            <polygon
                points={[45, 135, 225, 315].map((a) => {
                    const rad = (a * Math.PI) / 180;
                    return `${cx + 100 * Math.cos(rad)},${cy + 100 * Math.sin(rad)}`;
                }).join(" ")}
                stroke="#E6D3A3" strokeWidth="0.7" fill="none" opacity="0.4"
            />

            {/* ── INNER GEOMETRIC STAR — overlapping triangles ── */}
            {/* Triangle 1 (pointing up) */}
            <polygon
                points={[0, 1, 2].map((i) => {
                    const a = ((i * 120 - 90) * Math.PI) / 180;
                    return `${cx + 85 * Math.cos(a)},${cy + 85 * Math.sin(a)}`;
                }).join(" ")}
                stroke="#E6D3A3" strokeWidth="0.6" fill="none" opacity="0.35"
            />
            {/* Triangle 2 (pointing down) */}
            <polygon
                points={[0, 1, 2].map((i) => {
                    const a = ((i * 120 + 90) * Math.PI) / 180;
                    return `${cx + 85 * Math.cos(a)},${cy + 85 * Math.sin(a)}`;
                }).join(" ")}
                stroke="#E6D3A3" strokeWidth="0.6" fill="none" opacity="0.35"
            />

            {/* ── ADDITIONAL STAR LINES (diagonals) ── */}
            {Array.from({ length: 12 }, (_, i) => {
                const a = ((i * 30) * Math.PI) / 180;
                return (
                    <line
                        key={`sl${i}`}
                        x1={cx + 70 * Math.cos(a)}
                        y1={cy + 70 * Math.sin(a)}
                        x2={cx + 100 * Math.cos(a)}
                        y2={cy + 100 * Math.sin(a)}
                        stroke="#E6D3A3"
                        strokeWidth="0.3"
                        opacity="0.25"
                    />
                );
            })}

            {/* ── CONCENTRIC CIRCLES ── */}
            <circle cx={cx} cy={cy} r="70" stroke="#E6D3A3" strokeWidth="0.5" opacity="0.3" />
            <circle cx={cx} cy={cy} r="55" stroke="#E6D3A3" strokeWidth="0.4" opacity="0.25" />

            {/* ── SUN CIRCLE ── */}
            <circle cx={cx} cy={cy} r="40" stroke="#E6D3A3" strokeWidth="1" opacity="0.55" />
            <circle cx={cx} cy={cy} r="38" fill="#E6D3A3" opacity="0.06" />

            {/* ── SUN RAYS ── */}
            {Array.from({ length: 24 }, (_, i) => {
                const a = ((i * 15) * Math.PI) / 180;
                const isLong = i % 3 === 0;
                const inner = 40;
                const outer = isLong ? 55 : 48;
                return (
                    <line
                        key={`ray${i}`}
                        x1={cx + inner * Math.cos(a)}
                        y1={cy + inner * Math.sin(a)}
                        x2={cx + outer * Math.cos(a)}
                        y2={cy + outer * Math.sin(a)}
                        stroke="#E6D3A3"
                        strokeWidth={isLong ? "1.2" : "0.6"}
                        opacity="0.45"
                    />
                );
            })}

            {/* ── WAVY SUN RAYS (flame-like) ── */}
            {Array.from({ length: 16 }, (_, i) => {
                const a = ((i * 22.5) * Math.PI) / 180;
                const x1 = cx + 42 * Math.cos(a);
                const y1 = cy + 42 * Math.sin(a);
                const x2 = cx + 54 * Math.cos(a);
                const y2 = cy + 54 * Math.sin(a);
                const cpx = cx + 48 * Math.cos(a + 0.15);
                const cpy = cy + 48 * Math.sin(a + 0.15);
                return (
                    <path
                        key={`wr${i}`}
                        d={`M${x1},${y1} Q${cpx},${cpy} ${x2},${y2}`}
                        stroke="#E6D3A3"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.35"
                    />
                );
            })}

            {/* ── SUN FACE ── */}
            {/* Face circle */}
            <circle cx={cx} cy={cy} r="28" fill="#0a0a2e" stroke="#E6D3A3" strokeWidth="0.8" opacity="0.5" />
            <circle cx={cx} cy={cy} r="26" fill="#E6D3A3" opacity="0.05" />

            {/* Eyes */}
            <ellipse cx={cx - 8} cy={cy - 4} rx="4" ry="3" stroke="#E6D3A3" strokeWidth="0.6" fill="none" opacity="0.5" />
            <circle cx={cx - 8} cy={cy - 4} r="1.5" fill="#E6D3A3" opacity="0.45" />
            <ellipse cx={cx + 8} cy={cy - 4} rx="4" ry="3" stroke="#E6D3A3" strokeWidth="0.6" fill="none" opacity="0.5" />
            <circle cx={cx + 8} cy={cy - 4} r="1.5" fill="#E6D3A3" opacity="0.45" />

            {/* Eyebrows */}
            <path d={`M${cx - 14} ${cy - 9} Q${cx - 8} ${cy - 13} ${cx - 3} ${cy - 9}`} stroke="#E6D3A3" strokeWidth="0.5" fill="none" opacity="0.35" />
            <path d={`M${cx + 3} ${cy - 9} Q${cx + 8} ${cy - 13} ${cx + 14} ${cy - 9}`} stroke="#E6D3A3" strokeWidth="0.5" fill="none" opacity="0.35" />

            {/* Nose */}
            <path d={`M${cx} ${cy - 1} L${cx - 2} ${cy + 4} L${cx + 2} ${cy + 4}`} stroke="#E6D3A3" strokeWidth="0.5" fill="none" opacity="0.35" />

            {/* Mouth — gentle smile */}
            <path d={`M${cx - 8} ${cy + 9} Q${cx} ${cy + 15} ${cx + 8} ${cy + 9}`} stroke="#E6D3A3" strokeWidth="0.7" fill="none" opacity="0.45" />

            {/* Cheek accents */}
            <circle cx={cx - 14} cy={cy + 4} r="2" fill="#E6D3A3" opacity="0.08" />
            <circle cx={cx + 14} cy={cy + 4} r="2" fill="#E6D3A3" opacity="0.08" />

            {/* ── OUTERMOST DECORATIVE DOTS ── */}
            {Array.from({ length: 48 }, (_, i) => {
                const a = ((i * 7.5) * Math.PI) / 180;
                return (
                    <circle
                        key={`od${i}`}
                        cx={cx + 148 * Math.cos(a)}
                        cy={cy + 148 * Math.sin(a)}
                        r="0.8"
                        fill="#E6D3A3"
                        opacity="0.25"
                    />
                );
            })}
        </svg>
    );
}
