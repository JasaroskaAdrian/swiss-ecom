import { useTheme } from "./ThemeProvider";

const SolrockIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* 8-pointed rocky star body */}
    <polygon
      points="12,1.5 14.5,5.5 19.3,4.7 18.8,9.5 22.5,12 18.8,14.5 19.3,19.3 14.5,18.8 12,22.5 9.5,18.8 4.7,19.3 5.5,14.5 1.5,12 5.5,9.5 4.7,4.7 9.5,5.5"
      fill="#E8943A"
    />
    {/* Face */}
    <circle cx="12" cy="12" r="5.5" fill="#F0A84C" />
    {/* Hooded eyes */}
    <ellipse cx="10.2" cy="11.8" rx="1.1" ry="0.6" fill="#5C3310" />
    <ellipse cx="13.8" cy="11.8" rx="1.1" ry="0.6" fill="#5C3310" />
    {/* Brow ridges */}
    <path d="M8.8 10.5Q10.2 9.8 11.3 10.5" stroke="#C47A2A" strokeWidth="0.6" fill="none" />
    <path d="M12.7 10.5Q13.8 9.8 15.2 10.5" stroke="#C47A2A" strokeWidth="0.6" fill="none" />
  </svg>
);

const LunatoneIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Crescent moon body */}
    <path
      d="M14 4A9 9 0 1 0 14 20A8 8 0 1 1 14 4Z"
      fill="#A0A4C0"
    />
    {/* Eye */}
    <circle cx="5.5" cy="10.5" r="1.8" fill="#CC2222" />
    <circle cx="5.9" cy="10" r="0.55" fill="#FF6666" />
    {/* Nose / beak */}
    <path d="M5.5 14L4 17L7 15.5Z" fill="#8084A0" />
  </svg>
);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-lg border border-border p-2 hover:bg-muted transition-transform hover:scale-110 active:scale-95"
      aria-label={isDark ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
    >
      {isDark ? (
        <SolrockIcon className="h-5 w-5" />
      ) : (
        <LunatoneIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
