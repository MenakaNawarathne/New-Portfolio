"use client";

import { useEffect, useRef, useState } from "react";

// Fail-safe scroll reveal: content is visible by default (via inline style,
// so it renders correctly even before hydration or if JS never runs).
// JS only opts elements that start below the fold into a fade-up entrance.
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [state, setState] = useState("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.9;
    if (alreadyInView) return; // nothing to animate, keep it visible

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: state === "hidden" ? 0 : 1,
        transform: state === "hidden" ? "translateY(16px)" : "translateY(0)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
