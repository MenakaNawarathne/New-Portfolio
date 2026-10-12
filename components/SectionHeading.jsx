export default function SectionHeading({ eyebrow, title, lede }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-copper">{eyebrow}</p>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-ink-soft">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
