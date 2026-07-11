const NS = window.AndOrDesignSystem_fefdfe || {};
const { Icon } = NS;

// [id, isLabel, enLabel]
const LINKS = [
  ["stjornkerfi", "Stjórnkerfi", "Control systems"],
  ["verkefni", "Verkefni", "Projects"],
  ["myscada", "mySCADA", "mySCADA"],
  ["um", "Um AndOr", "About"],
  ["samband", "Hafa samband", "Contact"],
];

const FLAGS = {
  is: (
    <svg width="20" height="14" viewBox="0 0 25 18" style={{ display: "block", borderRadius: 2 }}>
      <rect width="25" height="18" fill="#02529c" />
      <rect x="7" width="4" height="18" fill="#fff" />
      <rect y="7" width="25" height="4" fill="#fff" />
      <rect x="8" width="2" height="18" fill="#dc1e35" />
      <rect y="8" width="25" height="2" fill="#dc1e35" />
    </svg>
  ),
  en: (
    <svg width="20" height="14" viewBox="0 0 25 18" style={{ display: "block", borderRadius: 2 }}>
      <rect width="25" height="18" fill="#012169" />
      <path d="M0 0l25 18M25 0L0 18" stroke="#fff" strokeWidth="3" />
      <path d="M0 0l25 18M25 0L0 18" stroke="#c8102e" strokeWidth="1.6" />
      <path d="M12.5 0v18M0 9h25" stroke="#fff" strokeWidth="5" />
      <path d="M12.5 0v18M0 9h25" stroke="#c8102e" strokeWidth="3" />
    </svg>
  ),
};

function LangSeg({ lang, onToggle }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const opts = [["is", "Íslenska"], ["en", "English"]];
  const pick = (code) => { if (code !== lang) onToggle(); setOpen(false); };

  const row = (code, label, active) => (
    <div
      key={code}
      onClick={() => pick(code)}
      style={{
        display: "flex", alignItems: "center", gap: 9,
        padding: "8px 12px", cursor: "pointer", whiteSpace: "nowrap",
        background: active ? "var(--accent-soft)" : "transparent",
        color: active ? "var(--accent)" : "var(--text-body)",
        fontSize: "0.86rem", fontWeight: active ? 600 : 500,
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "var(--surface-hover)"; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >
      {FLAGS[code]}
      {label}
    </div>
  );

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: "flex", alignItems: "center", gap: 7,
          padding: "6px 10px", border: "1px solid var(--border)",
          borderRadius: "var(--radius-pill)", background: "transparent",
          color: "var(--text-muted)", cursor: "pointer",
          fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 700,
          letterSpacing: "0.03em", transition: "var(--transition)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
        onMouseLeave={(e) => { if (!open) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; } }}
      >
        {FLAGS[lang]}
        {lang.toUpperCase()}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div
          role="listbox"
          style={{
            position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 200,
            minWidth: 150, background: "var(--surface-card)",
            border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-soft)", overflow: "hidden", padding: "4px 0",
          }}
        >
          {opts.map(([c, l]) => row(c, l, c === lang))}
        </div>
      )}
    </div>
  );
}

function ThemeBtn({ theme, onToggle }) {
  const dark = theme === "dark";
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Switch to light" : "Switch to dark"}
      title={dark ? "Light" : "Dark"}
      style={{
        width: 36, height: 36, borderRadius: "50%",
        border: "1px solid var(--border)", background: "transparent",
        color: "var(--text-muted)", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "var(--transition)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
        </svg>
      )}
    </button>
  );
}

function Navbar({ page, onNav, lang, theme, onToggleLang, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = (id) => {
    setMobileOpen(false);
    onNav(id);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--nav-bg, rgba(11,18,32,.92))",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav
        className="site-nav"
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 20px",
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); navigate("heim"); }}
          style={{ display: "flex", alignItems: "center" }}
          aria-label="AndOr ehf."
        >
          <span style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <img src="assets/andor-mark.svg" alt="" style={{ height: 40, display: "block" }} />
            <img src={TH("assets/andor-wordmark-light.png", "assets/andor-wordmark-dark.png")} alt="AndOr ehf." style={{ height: 34, display: "block" }} />
          </span>
        </a>

        <div className="site-nav__desktop" style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <ul style={{ display: "flex", gap: 26, listStyle: "none", alignItems: "center" }}>
            {LINKS.map(([id, isL, enL]) => (
              <li key={id}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(id); }}
                  aria-current={page === id ? "page" : undefined}
                  style={{
                    color: page === id ? "var(--accent)" : "var(--text-muted)",
                    fontSize: "0.95rem",
                    fontWeight: page === id ? 600 : 500,
                    whiteSpace: "nowrap",
                    transition: "color .15s",
                  }}
                  onMouseEnter={(e) => { if (page !== id) e.currentTarget.style.color = "var(--text-strong)"; }}
                  onMouseLeave={(e) => { if (page !== id) e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  {L(isL, enL)}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LangSeg lang={lang} onToggle={onToggleLang} />
            <ThemeBtn theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={mobileOpen}
          aria-controls="andor-mobile-menu"
          aria-label={mobileOpen ? L("Loka valmynd", "Close menu") : L("Opna valmynd", "Open menu")}
          onClick={() => setMobileOpen((open) => !open)}
          style={{
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border)",
            background: "var(--surface-card)",
            color: "var(--text-strong)",
            fontSize: "1.35rem",
            cursor: "pointer",
          }}
        >
          <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </nav>
      <div
        id="andor-mobile-menu"
        className={`site-nav__mobile${mobileOpen ? " is-open" : ""}`}
        style={{
          flexDirection: "column",
          gap: 20,
          padding: "18px 20px 22px",
          borderTop: "1px solid var(--border)",
          background: "var(--nav-bg, rgba(11,18,32,.96))",
        }}
      >
        <ul style={{ display: "grid", gap: 6, listStyle: "none" }}>
          {LINKS.map(([id, isL, enL]) => (
            <li key={id}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigate(id); }}
                aria-current={page === id ? "page" : undefined}
                style={{
                  display: "block",
                  padding: "10px 4px",
                  color: page === id ? "var(--accent)" : "var(--text-body)",
                  fontWeight: page === id ? 600 : 500,
                }}
              >
                {L(isL, enL)}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LangSeg lang={lang} onToggle={onToggleLang} />
          <ThemeBtn theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "34px 20px" }}>
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          color: "var(--text-muted)",
          fontSize: "0.88rem",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 9, opacity: 0.9 }}>
          <img src="assets/andor-mark.svg" alt="" style={{ height: 30, display: "block" }} />
          <img src={TH("assets/andor-wordmark-light.png", "assets/andor-wordmark-dark.png")} alt="AndOr ehf." style={{ height: 26, display: "block" }} />
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: "0.76rem", letterSpacing: "0.05em" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3fb96b", boxShadow: "0 0 8px rgba(63,185,107,.85)", animation: "andorPulse 2.6s ease-in-out infinite", flex: "none" }}></span>
          {L("Öll kerfi í lagi", "All systems operational")}
        </span>
        <div>
          © {new Date().getFullYear()} AndOr ehf. · kt. 561219-2300 ·{" "}
          <a href="https://maps.google.com/?q=Glerárgata+32,+600+Akureyri" target="_blank" rel="noopener">Glerárgata 32, 600 Akureyri</a> ·{" "}
          <a href="mailto:andor@andor.is">andor@andor.is</a> ·{" "}
          <a href="tel:+3548408168" style={{ whiteSpace: "nowrap" }}>S: 840-8168</a>
        </div>
      </div>
    </footer>
  );
}

function Reveal({ children, delay = 0, y = 24, style }) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setOn(true); return; }
    if (!("IntersectionObserver" in window)) { setOn(true); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });
    io.observe(el);
    // Öryggisnet: ef observer kviknar aldrei (t.d. í prenti eða óvenjulegu umhverfi) þá birtist efnið samt
    const failsafe = setTimeout(() => setOn(true), 2500);
    return () => { io.disconnect(); clearTimeout(failsafe); };
  }, []);
  return (
    <div ref={ref} style={{ opacity: on ? 1 : 0, transform: on ? "none" : `translateY(${y}px)`, transition: `opacity .65s ease ${delay}ms, transform .65s cubic-bezier(.2,.8,.2,1) ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

Object.assign((window.AndOrWebsite = window.AndOrWebsite || {}), { Navbar, Footer, Reveal });
