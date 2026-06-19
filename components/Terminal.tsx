"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type LineType = "prompt" | "output" | "accent" | "blank";

interface ScriptLine {
  type: LineType;
  text: string;
}

const SCRIPT: ScriptLine[] = [
  { type: "prompt", text: "whoami" },
  { type: "output", text: "Abdul Manan Malik" },
  { type: "output", text: "Senior Front-End · 5 yrs · Delhi" },
  { type: "blank", text: "" },
  { type: "prompt", text: "cat shipped.log" },
  { type: "output", text: "→ gov dashboard, 34 provinces (live)" },
  { type: "output", text: "→ 200k-row map: 60s render → 10s" },
  { type: "output", text: "→ i18n SaaS, 4 languages, 4 markets" },
  { type: "output", text: "→ component lib used by team of 10+" },
  { type: "blank", text: "" },
  { type: "prompt", text: "echo $STACK" },
  { type: "output", text: "React · Next.js · TypeScript" },
  { type: "output", text: "D3 · Leaflet · Framer Motion" },
  { type: "blank", text: "" },
  { type: "prompt", text: "status --availability" },
  { type: "accent", text: "→ Open to remote roles, global." },
];

interface DisplayLine extends ScriptLine {
  display: string;
  done: boolean;
}

export default function Terminal() {
  const [lines, setLines] = useState<DisplayLine[]>([]);
  const [cursorOn, setCursorOn] = useState(true);
  const reduce = useReducedMotion();
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  useEffect(() => {
    if (reduce) {
      setLines(SCRIPT.map((l) => ({ ...l, display: l.text, done: true })));
      return;
    }

    let li = 0;
    let ci = 0;
    let handle: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (li >= SCRIPT.length) return;
      const line = SCRIPT[li];

      if (line.type === "blank") {
        setLines((prev) => [...prev, { ...line, display: "", done: true }]);
        li++;
        handle = setTimeout(tick, 180);
        return;
      }

      if (ci === 0) {
        setLines((prev) => [...prev, { ...line, display: "", done: false }]);
      }

      ci++;
      const speed = line.type === "prompt" ? 52 : 16;

      if (ci <= line.text.length) {
        setLines((prev) => {
          const next = [...prev];
          next[next.length - 1] = {
            ...next[next.length - 1],
            display: line.text.slice(0, ci),
          };
          return next;
        });
        handle = setTimeout(tick, speed);
      } else {
        setLines((prev) => {
          const next = [...prev];
          next[next.length - 1] = { ...next[next.length - 1], done: true };
          return next;
        });
        ci = 0;
        li++;
        const pause = line.type === "prompt" ? 480 : 55;
        if (li < SCRIPT.length) handle = setTimeout(tick, pause);
      }
    };

    handle = setTimeout(tick, 700);
    return () => clearTimeout(handle);
  }, [reduce]);

  const allDone =
    lines.length === SCRIPT.length && lines[lines.length - 1]?.done;

  return (
    <div className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-950 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.22)] font-mono text-[13px]">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-[11px] text-zinc-500 tracking-wide">
          zsh
        </span>
      </div>

      {/* Output body */}
      <div
        ref={bodyRef}
        className="p-5 min-h-[300px] max-h-[360px] overflow-y-auto overflow-x-hidden leading-relaxed"
      >
        {lines.map((line, i) => {
          const isLast = i === lines.length - 1;
          const showCursor = isLast && !line.done;

          if (line.type === "blank") return <div key={i} className="h-2.5" />;

          if (line.type === "prompt") {
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-zinc-100 whitespace-nowrap"
              >
                <span className="text-[var(--color-accent)] select-none">
                  $
                </span>
                <span>{line.display}</span>
                {showCursor && (
                  <span
                    className="inline-block w-[7px] h-[14px] bg-zinc-100"
                    style={{ opacity: cursorOn ? 1 : 0 }}
                  />
                )}
              </div>
            );
          }

          if (line.type === "accent") {
            return (
              <div key={i} className="text-emerald-400 pl-4 whitespace-nowrap">
                {line.display}
                {showCursor && (
                  <span
                    className="inline-block w-[7px] h-[13px] bg-emerald-400 align-text-bottom ml-0.5"
                    style={{ opacity: cursorOn ? 1 : 0 }}
                  />
                )}
              </div>
            );
          }

          return (
            <div key={i} className="text-zinc-400 pl-4 whitespace-nowrap">
              {line.display}
              {showCursor && (
                <span
                  className="inline-block w-[7px] h-[13px] bg-zinc-400 align-text-bottom ml-0.5"
                  style={{ opacity: cursorOn ? 1 : 0 }}
                />
              )}
            </div>
          );
        })}

        {/* Idle prompt after all lines done */}
        {allDone && (
          <div className="flex items-center gap-2 text-zinc-100 mt-1 whitespace-nowrap">
            <span className="text-[var(--color-accent)] select-none">$</span>
            <span
              className="inline-block w-[7px] h-[14px] bg-zinc-100"
              style={{ opacity: cursorOn ? 1 : 0 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
