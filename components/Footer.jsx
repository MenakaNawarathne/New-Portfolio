export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-paper">
      <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-6 text-center">
        <p className="text-balance font-mono text-xs text-paper/60">
          Designed and built by Menaka Nawarathne.
        </p>
        <p className="font-mono text-[11px] text-paper/30">
          © {new Date().getFullYear()} — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
