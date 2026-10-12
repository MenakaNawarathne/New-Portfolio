"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "./sections-data";

export default function TraceLine() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeId);

  return (
    <nav
      aria-label="Section trace"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:flex xl:flex-col xl:items-center"
    >
      <div className="relative flex flex-col items-center gap-0">
        <span
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-trace/40"
          style={{ height: "100%" }}
        />
        <span
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-copper transition-all duration-500 ease-out"
          style={{
            height: `${((activeIndex + 1) / SECTIONS.length) * 100}%`,
          }}
        />
        {SECTIONS.map((section, i) => {
          const isActive = section.id === activeId;
          return (
            <a
              key={section.id}
              href={`/#${section.id}`}
              className="group relative flex h-9 w-6 items-center justify-center"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`relative z-10 block h-2 w-2 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "scale-125 border-copper bg-copper"
                    : "border-ink-soft/50 bg-paper group-hover:border-trace"
                }`}
              />
              <span
                className={`pointer-events-none absolute left-8 whitespace-nowrap rounded-sm border border-line bg-paper px-2 py-1 font-mono text-[11px] text-ink-soft opacity-0 shadow-sm transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
