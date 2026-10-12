export default function LockIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.25"
        y="7"
        width="9.5"
        height="6.5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M5.25 7V4.75a2.75 2.75 0 0 1 5.5 0V7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="10" r="0.9" fill="currentColor" />
    </svg>
  );
}
