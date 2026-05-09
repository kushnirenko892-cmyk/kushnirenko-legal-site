"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type FooterInversionTheme = {
  background: string;
  foreground: string;
  muted: string;
  line: string;
  washOpacity: string;
};

const darkTheme: FooterInversionTheme = {
  background: "#120a06",
  foreground: "#f4e8da",
  muted: "rgba(244, 232, 218, 0.64)",
  line: "rgba(244, 232, 218, 0.16)",
  washOpacity: "0"
};

const lightTheme: FooterInversionTheme = {
  background: "#f4e8da",
  foreground: "#120a06",
  muted: "rgba(18, 10, 6, 0.64)",
  line: "rgba(18, 10, 6, 0.12)",
  washOpacity: "1"
};

export function FooterInversionZone({ children }: { children: ReactNode }) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const isInvertedRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const [isInverted, setIsInverted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const theme = isInverted ? lightTheme : darkTheme;

  useEffect(() => {
    const updateTheme = () => {
      const trigger = zoneRef.current?.querySelector<HTMLElement>("[data-footer-inversion-switch]");

      if (!trigger) {
        return;
      }

      const triggerTop = trigger.getBoundingClientRect().top;
      const turnOnAt = window.innerHeight * 0.72;
      const turnOffAt = window.innerHeight * 0.84;
      const nextIsInverted = isInvertedRef.current ? triggerTop <= turnOffAt : triggerTop <= turnOnAt;

      if (nextIsInverted !== isInvertedRef.current) {
        isInvertedRef.current = nextIsInverted;
        setIsInverted(nextIsInverted);
      }
    };

    const requestUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateTheme();
      });
    };

    updateTheme();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.footerInverted = isInverted ? "true" : "false";
    window.dispatchEvent(new CustomEvent("footer-inversion-change", { detail: { inverted: isInverted } }));
  }, [isInverted]);

  useEffect(() => {
    return () => {
      document.documentElement.dataset.footerInverted = "false";
      window.dispatchEvent(new CustomEvent("footer-inversion-change", { detail: { inverted: false } }));
    };
  }, []);

  const zoneStyle = {
    backgroundColor: theme.background,
    color: theme.foreground,
    "--footer-zone-fg": theme.foreground,
    "--footer-zone-muted": theme.muted,
    "--footer-zone-line": theme.line,
    "--footer-zone-wash-opacity": theme.washOpacity
  } as CSSProperties;

  return (
    <div
      ref={zoneRef}
      style={zoneStyle}
      className={`relative overflow-hidden [--footer-zone-fg:#f4e8da] [--footer-zone-line:rgba(244,232,218,0.16)] [--footer-zone-muted:rgba(244,232,218,0.64)] [--footer-zone-wash-opacity:0] ${
        prefersReducedMotion ? "" : "transition-colors duration-700 ease-out"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(199,154,107,0.2),transparent_34%),linear-gradient(180deg,rgba(244,232,218,0)_0%,rgba(244,232,218,0.18)_42%,rgba(244,232,218,0.58)_100%)] opacity-[var(--footer-zone-wash-opacity)] ${
          prefersReducedMotion ? "" : "transition-opacity duration-700 ease-out"
        }`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--footer-zone-line)]"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
