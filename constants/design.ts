export const designTokens = {
  colors: {
    background: "#09090B",
    surface: "#18181B",
    primary: "#2563EB",
    secondary: "#06B6D4",
    text: "#FAFAFA",
    muted: "#A1A1AA",
    border: "rgba(255,255,255,.08)"
  },
  spacing: {
    section: "clamp(5rem, 10vw, 9rem)",
    container: "72rem"
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem"
  },
  shadows: {
    soft: "0 24px 80px rgba(0,0,0,.35)",
    glow: "0 0 48px rgba(37,99,235,.16)"
  },
  animation: {
    fast: "160ms",
    base: "240ms",
    slow: "520ms",
    easing: "cubic-bezier(.22,1,.36,1)"
  },
  typography: {
    display: "clamp(3.5rem, 10vw, 7.5rem)",
    h1: "clamp(3rem, 7vw, 6rem)",
    h2: "clamp(2rem, 4vw, 3.5rem)",
    h3: "clamp(1.25rem, 2vw, 1.75rem)",
    body: "1rem"
  },
  breakpoints: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem"
  }
} as const;
