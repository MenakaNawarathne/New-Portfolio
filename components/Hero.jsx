"use client";

import { useEffect, useState } from "react";

const CHIPS = [
  "Software Development",
  "Web development",
  "Database Design",
  "Graphic Design",
];

const CODE_SNIPPETS = [
  {
    language: "JavaScript",
    lines: [
      ["const", " developer = {"],
      ["  name:", " 'Menaka Nawarathne',"],
      ["  role:", " 'Software Engineer (Ug)'"],
      ["};", ""],
    ],
  },
  {
    language: "Languages",
    lines: [
      ["const", " skills = {"],
      ["  backend:", " ['Java', 'C#', 'PHP'],"],
      ["  web:", " ['HTML5', 'CSS3','React']"],
      ["};", ""],
    ],
  },
  {
    language: "Frameworks",
    lines: [
      ["const", " workflow = {"],
      ["  dotnet:", " 'ASP.NET Core','Blazor'"],
      ["  data:", " 'MySQL','SQL Server'"],
      ["};", ""],
    ],
  },
  {
    language: "Education",
    lines: [
      ["const", " education = {"],
      ["  degree:", " 'BSc (Hons) SE',"],
      ["  uni:", " 'Cardiff Met'"],
      ["};", ""],
    ],
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-line pt-24"
    >
      <div className="bg-grid-fade absolute inset-0 bg-grid bg-[length:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute right-12 top-52 hidden h-[720px] w-[420px] opacity-95 lg:block">
        <CircuitGraphic />
      </div>

      <div className="relative mx-auto w-full max-w-content px-6">
        <p className="mb-6 font-mono text-sm text-copper">/home — currently building</p>

        <h1 className="max-w-3xl text-balance font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-ink">
           Software Engineering undergraduate
        </h1>

        <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
          I build desktop and web development applications with Java , C#, PHP and React
          backed by solid database design and collaborative Git-based workflows. 
        </p>

        <ul className="mt-8 flex max-w-2xl flex-wrap gap-2">
          {CHIPS.map((chip) => (
            <li
              key={chip}
              className="rounded-sm border border-line bg-paper-dim px-3 py-1.5 font-mono text-xs text-ink-soft"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-trace"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-copper hover:text-copper"
          >
            Contact Me
          </a>
          <a
            href="/MenakaNawarathne_CV.pdf"
            download
            className="rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-copper hover:text-copper"
           >
           Download CV
          </a>
          
          
        </div>
      </div>
    </section>
  );
}

function CircuitGraphic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  const code = CODE_SNIPPETS[currentIndex];

  // Card entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Typing animation
  useEffect(() => {
    let cancelled = false;

    const lines = code.lines.map(
      ([part1, part2]) => part1 + part2
    );

    setDisplayedLines([]);
    setIsTyping(true);

    let lineIndex = 0;
    let charIndex = 0;

    const typeNextCharacter = () => {
      if (cancelled) return;

      if (lineIndex >= lines.length) {
        setIsTyping(false);
        return;
      }

      const currentLine = lines[lineIndex];

      setDisplayedLines((prev) => {
        const updated = [...prev];

        updated[lineIndex] = currentLine.slice(
          0,
          charIndex + 1
        );

        return updated;
      });

      charIndex++;

      if (charIndex >= currentLine.length) {
        lineIndex++;
        charIndex = 0;

        setTimeout(typeNextCharacter, 180);
      } else {
        setTimeout(typeNextCharacter, 35);
      }
    };

    const startTimer = setTimeout(
      typeNextCharacter,
      500
    );

    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, [currentIndex]);

  // Change code 10 seconds after typing finishes
  useEffect(() => {
    if (isTyping) return;

    const timer = setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % CODE_SNIPPETS.length
      );
    }, 7000);

    return () => clearTimeout(timer);
  }, [isTyping]);

  return (
    <div
      className={`
        relative
        w-[390px]
        rounded-lg
        border border-slate-700/60
        bg-[#151b2e]
        p-6
        font-mono
        text-sm
        leading-6
        shadow-xl

        transform
        transition-all
        duration-1000
        ease-out

        ${
          mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }
      `}
    >
      {/* Editor header */}
      <div className="mb-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

        <span className="ml-3 text-[10px] text-slate-500">
          developer.js
        </span>
      </div>

      {/* Code */}
      <div className="min-h-[120px]">
        {code.lines.map(([part1, part2], index) => {
          const displayed = displayedLines[index] || "";

          const displayedPart1 = displayed.slice(
            0,
            part1.length
          );

          const displayedPart2 = displayed.slice(
            part1.length
          );

          return (
            <div key={index}>
              <span
                className={
                  index === 0 || index === 3
                    ? "text-purple-300"
                    : "text-blue-300"
                }
              >
                {displayedPart1}
              </span>

              <span className="text-orange-300">
                {displayedPart2}
              </span>

              {/* Cursor */}
              {index === displayedLines.length - 1 && (
                <span
                  className={`
                    ml-1
                    inline-block
                    h-4
                    w-[2px]
                    translate-y-[3px]
                    bg-sky-400
                    transition-opacity
                    duration-100
                    ${
                      cursorVisible
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />
              )}
            </div>
          );
        })}

        {/* Initial cursor */}
        {displayedLines.length === 0 && (
          <span
            className={`
              ml-1
              inline-block
              h-4
              w-[2px]
              translate-y-[3px]
              bg-sky-400
              ${
                cursorVisible
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        )}
      </div>

      {/* Bottom status */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-700/50 pt-3 text-[9px] text-slate-500">
        <span>{code.language}</span>

        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

          {isTyping ? "Writing..." : "Ready"}
        </span>
      </div>
    </div>
  );
}