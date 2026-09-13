import { useEffect, useRef, useCallback, useState } from "react";

interface Vec2 { x: number; y: number }

// ── Physics constants ──────────────────────────────────────────────────────
const GRAVITY       = 0.45;
const DAMPING       = 0.90;
const SEGMENT_COUNT = 18;
const ITERATIONS    = 32;
const SEG_LEN       = 15;
const STRAP_WIDTH   = 20;

// Card size
const CARD_W = 260;
const CARD_H = 370;

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function distV(a: Vec2, b: Vec2) { return Math.hypot(b.x - a.x, b.y - a.y); }

interface LanyardCardProps {
  photoSrc?: string;
  name?: string;
}

export const LanyardCard = ({
  photoSrc = "/image.png",
  name     = "Rizky Yusmansyah",
}: LanyardCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const cardRef      = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);

  const posRef      = useRef<Vec2[]>([]);
  const prevPosRef  = useRef<Vec2[]>([]);

  // drag state: 'rope' | 'card' | null
  const isDragging    = useRef(false);
  const dragMode      = useRef<"rope" | "card">("rope");
  const dragIndex     = useRef<number>(0);
  const mousePos      = useRef<Vec2>({ x: 0, y: 0 });
  const dragOffset    = useRef<Vec2>({ x: 0, y: 0 }); // offset when dragging card
  const [grabbed, setGrabbed] = useState(false);

  const cardAngleRef    = useRef(0);
  const cardAngleVelRef = useRef(0);
  // rendered card position (kept in ref for hit-testing)
  const cardPosRef = useRef({ x: 0, y: 0 });
  const [cardStyle, setCardStyle] = useState({ x: 0, y: 0, rotate: 0, scale: 1 });

  // ── Rope init ──────────────────────────────────────────────────────────────
  const initRope = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cx = canvas.width / 2;
    posRef.current     = [];
    prevPosRef.current = [];
    for (let i = 0; i <= SEGMENT_COUNT; i++) {
      const p = { x: cx, y: i * SEG_LEN };
      posRef.current.push({ ...p });
      prevPosRef.current.push({ ...p });
    }
  }, []);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    canvas.width  = container.clientWidth;
    canvas.height = container.clientHeight;
    initRope();
  }, [initRope]);

  // ── Physics ────────────────────────────────────────────────────────────────
  const simulate = useCallback(() => {
    const pts  = posRef.current;
    const prev = prevPosRef.current;
    if (!pts.length) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Verlet integrate free points
    for (let i = 1; i < pts.length; i++) {
      const vx = (pts[i].x - prev[i].x) * DAMPING;
      const vy = (pts[i].y - prev[i].y) * DAMPING;
      prev[i] = { ...pts[i] };
      pts[i].x += vx;
      pts[i].y += vy + GRAVITY;
    }

    // Pin anchor
    pts[0].x = canvas.width / 2;
    pts[0].y = 0;

    // Apply drag
    if (isDragging.current) {
      if (dragMode.current === "rope") {
        const di = dragIndex.current;
        pts[di].x = lerp(pts[di].x, mousePos.current.x, 0.4);
        pts[di].y = lerp(pts[di].y, mousePos.current.y, 0.4);
      } else {
        // Card drag: move the last segment toward mouse (card centre)
        const target = {
          x: mousePos.current.x - dragOffset.current.x + canvas.width / 2,
          y: mousePos.current.y - dragOffset.current.y,
        };
        const last = pts.length - 1;
        pts[last].x = lerp(pts[last].x, target.x, 0.4);
        pts[last].y = lerp(pts[last].y, target.y, 0.4);
      }
    }

    // Constraint solving
    for (let iter = 0; iter < ITERATIONS; iter++) {
      pts[0].x = canvas.width / 2;
      pts[0].y = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        const dx   = pts[i + 1].x - pts[i].x;
        const dy   = pts[i + 1].y - pts[i].y;
        const d    = Math.hypot(dx, dy) || 0.0001;
        const diff = (d - SEG_LEN) / d * 0.88;
        const ox   = dx * diff * 0.5;
        const oy   = dy * diff * 0.5;
        if (i !== 0) { pts[i].x += ox; pts[i].y += oy; }
        pts[i + 1].x -= ox;
        pts[i + 1].y -= oy;
      }
      for (let i = 1; i < pts.length; i++) {
        pts[i].x = Math.max(STRAP_WIDTH, Math.min(canvas.width - STRAP_WIDTH, pts[i].x));
        pts[i].y = Math.max(0, pts[i].y);
      }
    }
  }, []);

  // ── Draw ───────────────────────────────────────────────────────────────────
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas?.getContext("2d");
    const pts    = posRef.current;
    if (!canvas || !ctx || pts.length < 2) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Shadow under strap
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.55)";
    ctx.shadowBlur  = 10;

    // ── Strap outline ────────────────────────────────────────────────────────
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 0; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2;
      const my = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
    }
    ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
    ctx.strokeStyle = "#0a0a14";
    ctx.lineWidth   = STRAP_WIDTH + 6;
    ctx.lineCap     = "round";
    ctx.lineJoin    = "round";
    ctx.stroke();
    ctx.restore();

    // ── Strap main fill ───────────────────────────────────────────────────────
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 0; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2;
      const my = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
    }
    ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);

    const grad = ctx.createLinearGradient(
      pts[0].x - STRAP_WIDTH, 0,
      pts[0].x + STRAP_WIDTH, 0
    );
    grad.addColorStop(0,   "#131328");
    grad.addColorStop(0.25, "#1e1e42");
    grad.addColorStop(0.5,  "#28285a");
    grad.addColorStop(0.75, "#1e1e42");
    grad.addColorStop(1,   "#131328");
    ctx.strokeStyle = grad;
    ctx.lineWidth   = STRAP_WIDTH;
    ctx.lineCap     = "round";
    ctx.lineJoin    = "round";
    ctx.stroke();

    // Strap left highlight edge
    ctx.beginPath();
    ctx.moveTo(pts[0].x - STRAP_WIDTH / 2 + 3, pts[0].y);
    for (let i = 0; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2 - STRAP_WIDTH / 2 + 3;
      const my = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x - STRAP_WIDTH / 2 + 3, pts[i].y, mx, my);
    }
    ctx.strokeStyle = "rgba(140,140,230,0.18)";
    ctx.lineWidth   = 2;
    ctx.stroke();
    ctx.restore();

    // ── Name chars along strap ────────────────────────────────────────────────
    const nameUpper = name.toUpperCase();
    const usePts    = pts.slice(2, pts.length - 2); // avoid top clip & card attach
    const step = usePts.length / (nameUpper.length + 1);

    ctx.save();
    ctx.font         = "bold 8.5px 'Courier New', monospace";
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle    = "rgba(180,180,255,0.8)";
    ctx.letterSpacing = "0.05em";

    for (let ci = 0; ci < nameUpper.length; ci++) {
      const idx = Math.min((ci + 1) * step, usePts.length - 2);
      const i0  = Math.floor(idx);
      const i1  = Math.min(i0 + 1, usePts.length - 1);
      const t   = idx - i0;
      const px  = lerp(usePts[i0].x, usePts[i1].x, t);
      const py  = lerp(usePts[i0].y, usePts[i1].y, t);
      const ang = Math.atan2(usePts[i1].y - usePts[i0].y, usePts[i1].x - usePts[i0].x);

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(ang + Math.PI / 2);
      ctx.fillText(nameUpper[ci], 0, 0);
      ctx.restore();
    }
    ctx.restore();

    // ── Metal clip at top ─────────────────────────────────────────────────────
    ctx.save();
    const ax = pts[0].x;
    const ay = pts[0].y;
    const clipGrad = ctx.createLinearGradient(ax - 12, ay, ax + 12, ay);
    clipGrad.addColorStop(0,   "#777");
    clipGrad.addColorStop(0.4, "#e0e0e0");
    clipGrad.addColorStop(0.6, "#e0e0e0");
    clipGrad.addColorStop(1,   "#777");
    ctx.shadowColor = "rgba(0,0,0,0.6)";
    ctx.shadowBlur  = 6;
    ctx.fillStyle   = clipGrad;
    ctx.beginPath();
    ctx.roundRect(ax - 12, ay, 24, 30, 5);
    ctx.fill();
    // hole
    ctx.fillStyle = "#1a1a1a";
    ctx.beginPath();
    ctx.roundRect(ax - 6, ay + 5, 12, 14, 3);
    ctx.fill();
    // spring bar
    ctx.fillStyle   = "#bbb";
    ctx.shadowBlur  = 0;
    ctx.fillRect(ax - 12, ay + 22, 24, 3);
    ctx.restore();

    // ── Card position update ──────────────────────────────────────────────────
    const tail = pts[pts.length - 1];
    const dx   = tail.x - canvas.width / 2;
    const targetAngle = dx * 0.15;
    cardAngleVelRef.current += (targetAngle - cardAngleRef.current) * 0.1;
    cardAngleVelRef.current *= 0.82;
    cardAngleRef.current    += cardAngleVelRef.current;

    const newX = dx * 0.6;
    const newY = tail.y;
    cardPosRef.current = { x: newX, y: newY };

    setCardStyle({
      x:      newX,
      y:      newY,
      rotate: cardAngleRef.current,
      scale:  isDragging.current && dragMode.current === "card" ? 1.04 : 1,
    });
  }, [name]);

  // ── Loop ───────────────────────────────────────────────────────────────────
  const loop = useCallback(() => {
    simulate();
    draw();
    rafRef.current = requestAnimationFrame(loop);
  }, [simulate, draw]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [loop]);

  // ── Pointer events ─────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas    = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const getPoint = (e: MouseEvent | TouchEvent): Vec2 => {
      const rect = container.getBoundingClientRect();
      const src  = "touches" in e ? e.touches[0] : (e as MouseEvent);
      return { x: src.clientX - rect.left, y: src.clientY - rect.top };
    };

    const nearestRope = (p: Vec2): { idx: number; d: number } => {
      const pts = posRef.current;
      let best = 1, bestD = Infinity;
      for (let i = 1; i < pts.length; i++) {
        const d = distV(p, pts[i]);
        if (d < bestD) { bestD = d; best = i; }
      }
      return { idx: best, d: bestD };
    };

    const isOnCard = (p: Vec2): boolean => {
      const canvas = canvasRef.current;
      if (!canvas) return false;
      const cx   = canvas.width / 2 + cardPosRef.current.x;
      const cy   = cardPosRef.current.y;
      const hw   = CARD_W / 2 + 16;
      const hh   = CARD_H / 2 + 16;
      const dx   = p.x - cx;
      const dy   = p.y - (cy + CARD_H / 2);
      const ang  = -cardAngleRef.current * Math.PI / 180;
      const rx   = dx * Math.cos(ang) - dy * Math.sin(ang);
      const ry   = dx * Math.sin(ang) + dy * Math.cos(ang);
      return Math.abs(rx) < hw && Math.abs(ry) < hh;
    };

    const onDown = (e: MouseEvent | TouchEvent) => {
      const p    = getPoint(e);
      const rope = nearestRope(p);

      if (isOnCard(p)) {
        // Card drag
        isDragging.current  = true;
        dragMode.current    = "card";
        const canvas = canvasRef.current!;
        const cx = canvas.width / 2 + cardPosRef.current.x;
        const cy = cardPosRef.current.y;
        dragOffset.current  = { x: p.x - cx, y: p.y - cy };
        setGrabbed(true);
        e.preventDefault();
      } else if (rope.d < 28) {
        // Rope drag
        isDragging.current = true;
        dragMode.current   = "rope";
        dragIndex.current  = rope.idx;
        mousePos.current   = p;
        setGrabbed(true);
        e.preventDefault();
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      mousePos.current = getPoint(e);
      e.preventDefault();
    };

    const onUp = () => { isDragging.current = false; setGrabbed(false); };

    // Listen on container so card div events also work
    container.addEventListener("mousedown",  onDown as EventListener, { passive: false });
    container.addEventListener("mousemove",  onMove as EventListener, { passive: false });
    container.addEventListener("touchstart", onDown as EventListener, { passive: false });
    container.addEventListener("touchmove",  onMove as EventListener, { passive: false });
    window.addEventListener("mouseup",  onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      container.removeEventListener("mousedown",  onDown as EventListener);
      container.removeEventListener("mousemove",  onMove as EventListener);
      container.removeEventListener("touchstart", onDown as EventListener);
      container.removeEventListener("touchmove",  onMove as EventListener);
      window.removeEventListener("mouseup",  onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      style={{
        position:         "relative",
        width:            "100%",
        height:           "660px",
        userSelect:       "none",
        WebkitUserSelect: "none",
        cursor:           grabbed ? "grabbing" : "default",
      } as React.CSSProperties}
    >
      {/* Canvas – rope drawn here, sits on top */}
      <canvas
        ref={canvasRef}
        style={{
          position:    "absolute",
          inset:       0,
          width:       "100%",
          height:      "100%",
          zIndex:      20,
          pointerEvents: "none",
          touchAction: "none",
        } as React.CSSProperties}
      />

      {/* ID Card */}
      <div
        ref={cardRef}
        style={{
          position:        "absolute",
          left:            "50%",
          top:             `${cardStyle.y}px`,
          transform:       `translateX(calc(-50% + ${cardStyle.x}px)) rotate(${cardStyle.rotate}deg) scale(${cardStyle.scale})`,
          transformOrigin: "center top",
          zIndex:          10,
          width:           `${CARD_W}px`,
          cursor:          grabbed ? "grabbing" : "grab",
          willChange:      "transform",
          transition:      "scale 0.15s ease",
        } as React.CSSProperties}
      >
        {/* Card shell */}
        <div
          style={{
            position:     "relative",
            borderRadius: "22px",
            overflow:     "hidden",
            width:        `${CARD_W}px`,
            height:       `${CARD_H}px`,
            boxShadow:    "0 32px 90px rgba(0,0,0,0.85), 0 0 0 1.5px rgba(255,255,255,0.09) inset, 0 1px 0 rgba(255,255,255,0.12) inset",
          } as React.CSSProperties}
        >
          {/* Full-bleed photo */}
          <img
            src={photoSrc}
            alt={name}
            draggable={false}
            style={{
              position:       "absolute",
              inset:          0,
              width:          "100%",
              height:         "100%",
              objectFit:      "cover",
              objectPosition: "top center",
              display:        "block",
              userSelect:     "none",
              pointerEvents:  "none",
            } as React.CSSProperties}
          />

          {/* Subtle vignette overlay */}
          <div
            style={{
              position:   "absolute",
              inset:      0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, transparent 35%, rgba(0,0,0,0.72) 80%, rgba(0,0,0,0.92) 100%)",
              pointerEvents: "none",
            } as React.CSSProperties}
          />

          {/* Name – bottom overlay only */}
          <div
            style={{
              position:      "absolute",
              bottom:        0,
              left:          0,
              right:         0,
              padding:       "18px 20px 20px",
              pointerEvents: "none",
            } as React.CSSProperties}
          >
            <p
              style={{
                color:      "#ffffff",
                fontSize:   "24px",
                fontFamily: "'Segoe Script', 'Brush Script MT', 'Dancing Script', cursive",
                margin:     0,
                lineHeight: 1.1,
                textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.6)",
              } as React.CSSProperties}
            >
              {name.split(" ")[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Hint text */}
      <p
        style={{
          position:      "absolute",
          bottom:        "8px",
          left:          "50%",
          transform:     "translateX(-50%)",
          color:         "rgba(180,180,220,0.45)",
          fontSize:      "11px",
          whiteSpace:    "nowrap",
          zIndex:        30,
          pointerEvents: "none",
          fontFamily:    "Inter, sans-serif",
          margin:        0,
          fontStyle:     "italic",
        } as React.CSSProperties}
      >
        Tarik tali atau kartunya ✦
      </p>
    </div>
  );
};
