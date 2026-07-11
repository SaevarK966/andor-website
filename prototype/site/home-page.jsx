const NS = window.AndOrDesignSystem_fefdfe || {};
const { Tag, Button, SectionHeading, ServiceCard, Chip, Icon } = NS;
const Reveal = (props) => React.createElement((window.AndOrWebsite || {}).Reveal, props);

function HomePage({ onNav, fx }) {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "120px 20px 90px",
          background:
            "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(79,159,216,.14), transparent), var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="home-hero-layout" style={{ position: "relative", maxWidth: "var(--container)", margin: "0 auto", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          <div className="home-hero-copy" style={{ flex: "1 1 540px", minWidth: 0 }}>
          <h1
            className="home-hero-title"
            style={{
              fontSize: "clamp(1.7rem, 3.4vw, 2.7rem)",
              lineHeight: "var(--lh-tight)",
              fontWeight: 700,
              letterSpacing: "var(--ls-tight)",
              margin: "22px 0 0",
              color: "var(--text-strong)",
            }}
          >
            <span style={{ display: "block", whiteSpace: "nowrap" }}>{L("Heildarlausnir í stjórnkerfum", "Complete control-system solutions")}</span>
            <span style={{ display: "block", color: "var(--accent)" }}>{L("Frá hönnun að gangsetningu", "From design to commissioning")}</span>
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: 620, margin: "22px 0 34px", fontSize: "1.08rem" }}>
            {L(
              "AndOr ehf. býður upp á heildarlausnir sniðnar að þínum þörfum og veitir ráðgjöf varðandi val stjórnkerfa. Umboðsaðili mySCADA á Íslandi.",
              "AndOr ehf. delivers complete solutions tailored to your needs and advises on choosing the right control systems. Authorised mySCADA distributor in Iceland."
            )}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button onClick={() => onNav("samband")}>{L("Hafa samband", "Contact us")}</Button>
            <Button variant="ghost" onClick={() => onNav("stjornkerfi")}>{L("Skoða lausnir", "View solutions")}</Button>
          </div>
          </div>
          <div className="home-hero-art" style={{ flex: "1 1 300px", minWidth: 0, display: "flex", justifyContent: "center", position: "relative" }}>
            <img
              src="assets/styriteikning-daemi.png"
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                width: 560, height: 560, maxWidth: "none", objectFit: "cover",
                mixBlendMode: TH("screen", "multiply"), opacity: TH(0.2, 0.32), pointerEvents: "none", userSelect: "none",
                filter: TH("none", "invert(1) hue-rotate(180deg) contrast(1.15)"),
                WebkitMaskImage: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, rgba(0,0,0,.95) 42%, rgba(0,0,0,.55) 57%, transparent 71%)",
                maskImage: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, rgba(0,0,0,.95) 42%, rgba(0,0,0,.55) 57%, transparent 71%)",
              }}
            />
            <HeroMark fx={fx} />
          </div>
        </div>
      </section>

      {/* Services */}
      {/* Hvað gerum við — ferðalagið */}
      <section style={{ padding: "70px 20px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <Reveal>
            <SectionHeading
              kicker={L("Þjónusta", "Services")}
              title={L("Hvað gerum við?", "What we do")}
              lead={L("Hönnum stjórnkerfi frá grunni og notum skjámyndakerfi frá mySCADA, sem við erum umboðsaðilar fyrir á Íslandi. Sami aðili ber ábyrgð á kerfinu frá fyrstu teikningu að fullprófuðu kerfi í rekstri.", "We design control systems from the ground up using mySCADA HMI systems, for which we are the authorised distributor in Iceland. A single partner responsible from the first drawing to a fully tested system in operation.")}
            />
          </Reveal>
          <Reveal delay={110}>
          <div style={{ height: 3, borderRadius: 3, marginTop: 48, background: "linear-gradient(90deg, rgba(79,159,216,.25), var(--accent) 55%, rgba(79,159,216,.9))", boxShadow: "0 0 14px rgba(79,159,216,.45)" }}></div>
          <div style={{ display: "grid", gap: "26px 22px", gridTemplateColumns: "repeat(auto-fit, minmax(210px,1fr))", marginTop: 26 }}>
            {STEPS.map(([num, title, body]) => (
              <div key={num[0]}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em" }}>
                  <span style={{ whiteSpace: "nowrap" }}>{L(num[0], num[1])}</span>
                  <span style={{ flex: 1, height: 1, background: "var(--border)" }}></span>
                </div>
                <h3 style={{ fontSize: "1.02rem", marginBottom: 6, color: "var(--text-strong)" }}>{L(title[0], title[1])}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{L(body[0], body[1])}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
            <Button onClick={() => onNav("stjornkerfi")}>{L("Skoða stjórnkerfi →", "Control systems →")}</Button>
            <Button variant="ghost" onClick={() => onNav("myscada")}>{L("mySCADA búnaður →", "mySCADA hardware →")}</Button>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Verkefni teaser */}
      <section style={{ padding: "64px 20px", background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.14em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 10 }}>{L("Verkefni", "Projects")}</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--text-strong)", margin: "0 0 10px" }}>{L("Sjáðu kerfin sem við höfum afhent", "See the systems we have delivered")}</h2>
            <p style={{ color: "var(--text-muted)", margin: 0 }}>{L("Raunveruleg skjámyndakerfi úr verkefnum AndOr.", "Real HMI systems from AndOr projects.")}</p>
          </div>
          <div style={{ marginTop: 28 }}>
            <Button onClick={() => onNav("verkefni")}>{L("Skoða verkefni →", "View projects →")}</Button>
          </div>
        </div>
      </section>

      {/* Viðskiptavinir og samstarfsaðilar */}
      <PartnerStrip />

      {/* CTA */}
      <CtaStrip onNav={onNav} title={L("Vinnum saman að betri lausnum!", "Let's build better solutions together!")} />
    </div>
  );
}

function CtaStrip({ onNav, title, text }) {  const body = text || L("Hafðu samband fyrir frekari upplýsingar eða tilboð.", "Get in touch for more information or a quote.");
  return (
    <section
      style={{
        padding: "70px 20px",
        textAlign: "center",
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <h2 style={{ fontSize: "var(--fs-h2)", fontWeight: 700, marginBottom: 10, color: "var(--text-strong)" }}>{title}</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 28 }}>{body}</p>
        <Button onClick={() => onNav("samband")}>{L("Hafa samband", "Contact us")}</Button>
      </div>
    </section>
  );
}

// [[isNum, enNum], [isTitle, enTitle], [isBody, enBody]]
const STEPS = [
  [["01 · HÖNNUN", "01 · DESIGN"], ["Hönnun og ráðgjöf", "Design & consulting"], ["Þarfagreining og hönnun stjórnkerfis í samráði við viðskiptavin, ásamt ráðgjöf um val búnaðar.", "Needs analysis and control-system design together with the customer, plus advice on hardware selection."]],
  [["02 · TEIKNINGAR", "02 · DRAWINGS"], ["Stýriteikningar", "Control drawings"], ["Vandaðar stýriteikningar sem hægt er að smíða stjórnskápa eftir, í samstarfi við skápasmiði.", "Complete control drawings ready for panel builders to manufacture cabinets from."]],
  [["03 · FORRITUN", "03 · PROGRAMMING"], ["Iðntölvuforritun", "PLC programming"], ["Forritun á Siemens iðntölvubúnaði og uppsetning skjámyndakerfa frá mySCADA.", "Programming of Siemens PLCs and configuration of mySCADA HMI systems."]],
  [["04 · GANGSETNING", "04 · COMMISSIONING"], ["Gangsetning og prófanir", "Commissioning & testing"], ["Kerfið gangsett, prófað og afhent. Þjónustað eftir að það er komið í rekstur.", "The system is commissioned, tested and handed over, then serviced once in operation."]],
];

function ProcessSection() {
  const { SectionHeading, Card } = NS;
  return (
    <section style={{ padding: "70px 20px" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <SectionHeading
          kicker={L("Verklag", "Process")}
          title={L("Frá hönnun að gangsetningu", "From design to commissioning")}
          lead={L("Eitt samfellt ferli, sami aðili ber ábyrgð á kerfinu frá fyrstu teikningu að fullprófuðu kerfi í rekstri.", "One continuous process, a single partner responsible from the first drawing to a fully tested system in operation.")}
        />
        <div style={{ height: 3, borderRadius: 3, marginTop: 48, background: "linear-gradient(90deg, rgba(79,159,216,.25), var(--accent) 55%, rgba(79,159,216,.9))", boxShadow: "0 0 14px rgba(79,159,216,.45)" }}></div>
        <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(230px,1fr))", marginTop: 26 }}>
          {STEPS.map(([num, title, body]) => (
            <Card key={num[0]} style={{ height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em" }}>
                <span style={{ whiteSpace: "nowrap" }}>{L(num[0], num[1])}</span>
                <span style={{ flex: 1, height: 1, background: "var(--border)" }}></span>
              </div>
              <h3 style={{ fontSize: "1.05rem", marginBottom: 8, color: "var(--text-strong)" }}>{L(title[0], title[1])}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", margin: 0 }}>{L(body[0], body[1])}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// [lightSrc, darkSrc, label, hæð í px, birtujöfnun í dökku þema]
const PARTNER_LOGOS = [
  ["assets/partner-akureyrarbaer-ink-light.png", "assets/partner-akureyrarbaer-ink-dark.png", "Akureyrarbær", 72, true],
  ["assets/partner-hafnarfjordur-ink-light.png", "assets/partner-hafnarfjordur-ink-dark.png", "Hafnarfjarðarbær", 68, true],
  ["assets/partner-ccep-ink-light.png", "assets/partner-ccep-ink-dark.png", "Coca-Cola Europacific Partners", 56, false],
  ["assets/partner-siemens-ink-light.png", "assets/partner-siemens-ink-dark.png", "Siemens", 28, false],
];

function PartnerStrip() {
  return (
    <section style={{ padding: "70px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <Reveal>
        <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-kicker)", fontWeight: 600, letterSpacing: "var(--ls-kicker)", textTransform: "uppercase", marginBottom: 40 }}>
          {L("Meðal viðskiptavina og samstarfsaðila", "Selected customers & partners")}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "36px 64px" }}>
          {PARTNER_LOGOS.map(([lightSrc, darkSrc, label, h, boost]) => (
            <img
              key={label}
              src={TH(lightSrc, darkSrc)}
              alt={label}
              title={label}
              style={{ height: h, width: "auto", opacity: 0.65, transition: "opacity .15s", filter: boost ? TH("brightness(1.55) contrast(1.04)", "none") : "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.65; }}
            />
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroMark({ fx, size }) {
  const f = fx || { effect: "tilt", tilt: 16, glow: 60 };
  const ref = React.useRef(null);
  const [s, setS] = React.useState({ rx: 0, ry: 0, on: false });

  const onMove = (e) => {
    if (f.effect !== "tilt" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setS({ rx: -py * f.tilt, ry: px * f.tilt, on: true });
  };
  const reset = () => setS({ rx: 0, ry: 0, on: false });

  const g = f.glow;
  const gx = (s.ry * 0.7).toFixed(1);
  const gy = (-s.rx * 0.7).toFixed(1);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ perspective: 800, width: size || "min(340px, 70vw)", display: "flex", justifyContent: "center" }}
    >
      <img
        src="assets/andor-mark.svg"
        alt="AndOr"
        style={{
          width: "100%",
          display: "block",
          willChange: "transform, filter",
          transform: `rotateX(${s.rx}deg) rotateY(${s.ry}deg) scale(${s.on ? 1.05 : 1})`,
          transition: s.on ? "transform .08s ease-out" : "transform .6s cubic-bezier(.2,.8,.2,1)",
          filter: `drop-shadow(${gx}px ${gy}px ${g}px rgba(79,159,216,.6)) drop-shadow(0 0 ${g * 2}px rgba(79,159,216,.28))`,
          animation: f.effect === "float" ? "andorFloat 4.5s ease-in-out infinite" : "none",
        }}
      />
    </div>
  );
}

Object.assign((window.AndOrWebsite = window.AndOrWebsite || {}), { HomePage, CtaStrip, HeroMark, PartnerStrip, ProcessSection });
