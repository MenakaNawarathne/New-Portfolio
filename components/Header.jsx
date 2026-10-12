"use client";

import { useState } from "react";
import { SECTIONS } from "./sections-data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="/#hero"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          <span className="text-copper">&gt;</span> dev.Menaka
          <span className="animate-pulse text-trace">_</span>
        </a>

        <nav className="hidden gap-6 lg:flex">
          {SECTIONS
            .filter((s) =>
              ["about","projects", "skills","approach","education"].includes(s.id)
            )
            .map((s) => (
              <a
                key={s.id}
                href={`/#${s.id}`}
                className="font-mono text-[13px] text-ink-soft transition-colors hover:text-copper"
              >
                {s.label}
              </a>
            ))}
        </nav>

        <a
          href="/#contact"
          className="hidden rounded-sm border border-ink px-4 py-2 font-mono text-[13px] text-ink transition-colors hover:border-copper hover:text-copper lg:block"
        >
          contact()
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-paper px-6 py-4 lg:hidden">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm text-ink-soft hover:text-copper"
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
