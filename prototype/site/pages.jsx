const NS = window.AndOrDesignSystem_fefdfe || {};
const { Tag, Button, SectionHeading, ServiceCard, Card, Chip, Icon, Stat, Avatar, Badge } = NS;
const CtaStrip = (props) => (window.AndOrWebsite.CtaStrip)(props);
const PartnerStrip = (props) => React.createElement(window.AndOrWebsite.PartnerStrip, props);
const HeroMark = (props) => React.createElement(window.AndOrWebsite.HeroMark, props);
const Reveal = (props) => React.createElement((window.AndOrWebsite || {}).Reveal, props);
const ProcessSection = (props) => React.createElement((window.AndOrWebsite || {}).ProcessSection, props);

function PageHead({ tag, title, intro, art, artMode }) {
  const isLogo = artMode === "logo";
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "70px 20px 50px",
        background: "radial-gradient(ellipse 80% 70% at 70% 0%, rgba(79,159,216,.12), transparent), var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {art && isLogo && (
        <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "52%", pointerEvents: "none", background: TH("radial-gradient(ellipse 62% 58% at 68% 50%, rgba(10,131,199,.20), transparent 72%)", "radial-gradient(ellipse 62% 58% at 68% 50%, rgba(10,131,199,.10), transparent 72%)") }}></div>
      )}
      {art && (
        <img
          src={isLogo ? TH(art, "assets/myscada-logo-blue.png") : art}
          alt=""
          aria-hidden="true"
          style={isLogo ? {
            position: "absolute", top: "50%", left: "max(62%, calc(100% - 807px))", transform: "translateY(-50%)",
            width: "min(42%, 500px)", height: "auto", objectFit: "contain",
            opacity: TH(0.5, 1), pointerEvents: "none", userSelect: "none",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 55%, rgba(0,0,0,.12) 100%)",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 55%, rgba(0,0,0,.12) 100%)",
          } : {
            position: "absolute", top: 0, right: 0, height: "130%", width: "58%", objectFit: "cover", objectPosition: "left top",
            mixBlendMode: TH("screen", "multiply"), opacity: TH(0.16, 0.34), pointerEvents: "none", userSelect: "none",
            filter: TH("none", "invert(1) hue-rotate(180deg) contrast(1.15)"),
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 78%), linear-gradient(to top, transparent 4%, black 45%)",
            WebkitMaskComposite: "source-in",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 78%), linear-gradient(to top, transparent 4%, black 45%)",
            maskComposite: "intersect",
          }}
        />
      )}
      <div style={{ position: "relative", maxWidth: "var(--container)", margin: "0 auto" }}>
        <Tag>{tag}</Tag>
        {title && (
          <h1 style={{ fontSize: "var(--fs-h1)", fontWeight: 700, letterSpacing: "var(--ls-tight)", margin: "16px 0 0", color: "var(--text-strong)" }}>
            {title}
          </h1>
        )}
        {intro && <p style={{ color: "var(--text-muted)", maxWidth: 700, marginTop: 14, fontSize: "1.05rem", whiteSpace: "pre-line" }}>{intro}</p>}
      </div>
    </div>
  );
}

// [icon, [isTitle, enTitle], [isBody, enBody]]
const SOLUTIONS = [
  ["wind", ["Loftræsing / Húskerfi", "Ventilation / Building systems"], ["Stýringar fyrir loftræsikerfi og hússtjórnunarkerfi.", "Controls for ventilation and building-management systems."]],
  ["flame", ["Brunalokukerfi", "Fire-damper systems"], ["Stýring og vöktun brunaloka með sjálfvirkum prófunum og stöðuvöktun.", "Control and monitoring of fire dampers with automatic testing and status monitoring."]],
  ["droplet", ["Sundlauga- og pottakerfi", "Pool & hot-tub systems"], ["Stýringar fyrir sundlaugar og potta, hitastýring, hringrás og efnaskömmtun.", "Controls for swimming pools and hot tubs, temperature, circulation and chemical dosing."]],
  ["bulb", ["KNX / DALI", "KNX / DALI"], ["Snjallar stýringar fyrir lýsingu og húsbúnað byggðar á KNX og DALI stöðlum.", "Smart lighting and building controls based on the KNX and DALI standards."]],
];

// [isLabel, enLabel]
const CHIPS = [
  ["Hönnun stjórnkerfa", "Control-system design"],
  ["Stýriteikningar", "Control drawings"],
  ["Iðntölvuforritun", "PLC programming"],
  ["Skjámyndakerfi", "HMI/SCADA systems"],
  ["Gangsetning og prófanir", "Commissioning & testing"],
  ["Ráðgjöf", "Consulting"],
];

function SystemScheme() {
  const mono = { fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.1em" };
  const boxIt = (x, title, sub) => (
    <g>
      <rect x={x} y="78" width="240" height="92" rx="10" fill="var(--surface-card)" stroke="var(--border)" strokeWidth="1.5" />
      <text x={x + 120} y="140" textAnchor="middle" style={{ ...mono, fontSize: 13 }} fill="var(--text-strong)">{title}</text>
      <text x={x + 120} y="159" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: 11 }} fill="var(--text-muted)">{sub}</text>
    </g>
  );
  const arrow = (x) => (
    <g>
      <line x1={x} y1="124" x2={x + 60} y2="124" stroke="var(--accent)" strokeWidth="2" />
      <path d={`M${x + 60} 124l-9 -5v10z`} fill="var(--accent)" />
      <path d={`M${x} 124l9 -5v10z`} fill="var(--accent)" />
    </g>
  );
  return (
    <svg viewBox="0 0 920 178" style={{ width: "100%", height: "auto", display: "block" }}>
      {/* Búnaður */}
      {boxIt(20, L("TÆKI OG BÚNAÐUR", "FIELD DEVICES"), L("viftur · dælur · lokar · skynjarar", "fans · pumps · valves · sensors"))}
      <g style={{ transformOrigin: "140px 106px", animation: "andorSpin 3.2s linear infinite" }}>
        {[0, 120, 240].map((a) => <path key={a} d="M140 106 C136 100 137 95 140 92 C143 95 144 100 140 106 Z" fill="var(--accent)" opacity="0.75" transform={`rotate(${a} 140 106)`} />)}
      </g>
      <circle cx="140" cy="106" r="11" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity=".5" />
      {arrow(266)}
      {/* Iðntölva */}
      {boxIt(340, L("IÐNTÖLVA (PLC)", "PLC CONTROLLER"), L("stjórnskápur · Siemens", "control cabinet · Siemens"))}
      <g>
        <rect x="440" y="91" width="40" height="24" rx="2.5" fill="var(--surface-card)" stroke="var(--accent)" strokeWidth="1.6" />
        <line x1="453" y1="91" x2="453" y2="115" stroke="var(--accent)" strokeWidth="1" opacity=".45" />
        <circle cx="446" cy="97" r="1.4" fill="#3fb96b" style={{ animation: "andorBlink 1.4s steps(1) infinite" }} />
        <circle cx="450" cy="97" r="1.4" fill="var(--accent)" style={{ animation: "andorBlink 2.1s steps(1) infinite .6s" }} />
        <rect x="444" y="103" width="6" height="8" rx="1" fill="var(--accent)" opacity=".35" />
        {[458, 463, 468, 473].map((x) => <line key={x} x1={x} y1="96" x2={x} y2="110" stroke="var(--accent)" strokeWidth="1.5" opacity=".7" />)}
        {[444, 450, 456, 462, 468, 474].map((x) => <line key={"b" + x} x1={x} y1="115" x2={x} y2="119" stroke="var(--accent)" strokeWidth="1.5" />)}
      </g>
      {arrow(586)}
      {/* Skjámyndakerfi */}
      {boxIt(660, L("SKJÁMYNDAKERFI", "HMI / SCADA"), L("mySCADA · vöktun og stýring", "mySCADA · monitoring & control"))}
      <rect x="767" y="95" width="26" height="17" rx="2.5" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <path d="M771 107 L776 101 L780 104.5 L789 99" fill="none" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "andorPulse 2.6s ease-in-out infinite" }} />
      <circle cx="789" cy="99" r="1.4" fill="#3fb96b" style={{ animation: "andorBlink 1.4s steps(1) infinite .4s" }} />
      <line x1="776" y1="116" x2="784" y2="116" stroke="var(--accent)" strokeWidth="1.6" />
      {/* Notandi */}
      <line x1="780" y1="78" x2="780" y2="40" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 5" style={{ animation: "andorDash 1.6s linear infinite" }} />
      <text x="780" y="26" textAnchor="middle" style={{ ...mono, fontSize: 10.5 }} fill="var(--text-muted)">{L("VAFRI · SÍMI · STJÓRNSTÖÐ", "BROWSER · PHONE · CONTROL ROOM")}</text>
    </svg>
  );
}

function StjornkerfiPage({ onNav }) {
  return (
    <div>
      <PageHead
        art="assets/styriteikning-daemi.png"
        tag={L("Stjórnkerfi", "Control systems")}
        title={L("Sérsniðin stjórnkerfi fyrir stór og smá verkefni", "Custom control systems for projects large and small")}
        intro={<React.Fragment>{L("Starfsmenn AndOr hafa margra ára reynslu af hönnun stjórnkerfa. Notast er við Siemens iðntölvubúnað og skjámyndakerfi frá mySCADA. AndOr sér um hönnun stjórnkerfis, stýriteikningar og allt að gangsetningu.", "AndOr's staff have years of experience in control-system design. We use Siemens PLC hardware and mySCADA HMI systems. AndOr handles control-system design, control drawings and everything through to commissioning.")}<br /><br /><strong style={{ color: "var(--text-body)" }}>{L("Finnum saman lausn fyrir þitt kerfi.", "Let's find the right solution for your system.")}</strong></React.Fragment>}
      />
      <section style={{ padding: "70px 20px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <SectionHeading
            title={L("Okkar lausnir", "Our solutions")}
            lead={L("Við hönnum stjórnkerfi fyrir margs konar rekstur.", "We design control systems for many kinds of operations.")}
          />
          <div style={{ display: "grid", gap: "22px 26px", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", marginTop: 30 }}>
            {SOLUTIONS.map(([icon, title, body]) => (
              <div key={title[0]} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                <div style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}><Icon name={icon} /></div>
                <div>
                  <h4 style={{ fontSize: "0.98rem", margin: "0 0 4px", color: "var(--text-strong)" }}>{L(title[0], title[1])}</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", margin: 0 }}>{L(body[0], body[1])}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 34 }}>
            <Button onClick={() => onNav("verkefni")}>{L("Sjá dæmi um okkar lausnir →", "See examples of our work →")}</Button>
          </div>
        </div>
      </section>
      <ScadaShowcase />
      <CtaStrip onNav={onNav} title={L("Hafa samband fyrir frekari upplýsingar", "Contact us for more information")} text={L("Við hönnum stjórnkerfi sniðin að þínum þörfum.", "We design control systems tailored to your needs.")} />
    </div>
  );
}

// [name, [isBody, enBody]]
const SOFTWARE = [
  ["myPRO", ["HMI / SCADA hugbúnaðurinn sjálfur, keyrir á Windows, Linux og macOS, og er innbyggður í myBOX og myPANEL.", "The HMI / SCADA software itself, runs on Windows, Linux and macOS, and comes built into myBOX and myPANEL."]],
  ["myDESIGNER", ["Hönnunarforrit fyrir skjámyndakerfin. Frítt fyrir alla notendur.", "Design software for the screens. Free for all users."]],
  ["myREPORTS", ["Hentug leið til skýrslugerðar úr rauntímagögnum.", "A convenient way to generate reports from real-time data."]],
];

// --- mySCADA vörur: myBOX og myPANEL ---

const specChip = { border: "1px solid var(--border)", borderRadius: "var(--radius-pill)", padding: "6px 14px", fontSize: "0.82rem", whiteSpace: "nowrap", color: "var(--text-body)", background: "var(--bg-alt)", fontFamily: "var(--font-mono)" };

function MyBoxScheme() {
  const mono = { fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.08em" };
  const sans = { fontFamily: "var(--font-sans)" };

  // Cloud glyph centered at (cx, cy)
  const Cloud = ({ cx, cy }) => (
    <path
      d={`M${cx - 30} ${cy + 8} a13 13 0 0 1 2 -25 a17 17 0 0 1 32 -5 a12 12 0 0 1 12 12 a11 11 0 0 1 -3 18 Z`}
      fill="var(--surface-card)" stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round"
    />
  );
  // Monitor glyph
  const Monitor = ({ cx, cy }) => (
    <g stroke="var(--accent)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x={cx - 15} y={cy - 11} width="30" height="20" rx="2.5" />
      <line x1={cx - 5} y1={cy + 9} x2={cx - 5} y2={cy + 14} />
      <line x1={cx + 5} y1={cy + 9} x2={cx + 5} y2={cy + 14} />
      <line x1={cx - 9} y1={cy + 14} x2={cx + 9} y2={cy + 14} />
    </g>
  );
  // Phone glyph
  const Phone = ({ cx, cy }) => (
    <g stroke="var(--accent)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x={cx - 8} y={cy - 13} width="16" height="26" rx="3" />
      <line x1={cx - 2} y1={cy + 9} x2={cx + 2} y2={cy + 9} />
    </g>
  );
  // Firewall / shield glyph
  const Shield = ({ cx, cy }) => (
    <g>
      <path d={`M${cx} ${cy - 13} L${cx + 11} ${cy - 8} V${cy + 1} a11 13 0 0 1 -11 12 a11 13 0 0 1 -11 -12 V${cy - 8} Z`}
        fill="var(--surface-card)" stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d={`M${cx - 6} ${cy - 2} l4 4 l8 -8`} fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  // PLC module glyph at top-left (x,y), ~34x26
  const PlcGlyph = ({ x, y }) => (
    <g>
      <rect x={x} y={y} width="34" height="26" rx="3" fill="var(--surface-card)" stroke="var(--accent)" strokeWidth="1.5" />
      <line x1={x + 10} y1={y} x2={x + 10} y2={y + 26} stroke="var(--accent)" strokeWidth="0.9" opacity=".4" />
      <circle cx={x + 5} cy={y + 6} r="1.5" fill="var(--accent)" />
      <circle cx={x + 5} cy={y + 12} r="1.5" fill="var(--accent)" opacity=".45" />
      {[0, 1, 2, 3].map((i) => <line key={i} x1={x + 15 + i * 4.5} y1={y + 5} x2={x + 15 + i * 4.5} y2={y + 20} stroke="var(--accent)" strokeWidth="1.4" opacity=".7" />)}
      {[0, 1, 2, 3, 4].map((i) => <line key={"b" + i} x1={x + 5 + i * 6} y1={y + 26} x2={x + 5 + i * 6} y2={y + 29} stroke="var(--accent)" strokeWidth="1.3" />)}
    </g>
  );

  return (
    <svg viewBox="0 0 820 372" style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-label="myBOX network topology">
      {/* Fjaraðgangur efst: tæki → ský (internet) → myBOX */}
      <Monitor cx={392} cy={20} />
      <Phone cx={436} cy={20} />
      <text x="410" y="52" textAnchor="middle" style={{ ...mono, fontSize: 10.5 }} fill="var(--text-muted)">{L("VAFRI · SÍMI · SPJALDTÖLVA", "BROWSER · PHONE · TABLET")}</text>
      <line x1="410" y1="60" x2="410" y2="140" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 5" />
      <line x1="410" y1="160" x2="410" y2="212" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 5" />
      <Cloud cx={410} cy={102} />
      <rect x="368" y="140" width="84" height="20" rx="10" fill="var(--surface-card)" stroke="var(--accent)" strokeWidth="1" />
      <text x="410" y="154" textAnchor="middle" style={{ ...mono, fontSize: 10 }} fill="var(--accent)">VPN · 4G/LTE</text>

      {/* myBOX í miðju */}
      <rect x="338" y="212" width="144" height="66" rx="10" fill="var(--surface-card)" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="356" cy="226" r="2.4" fill="#3fb96b" />
      <circle cx="365" cy="226" r="2.4" fill="var(--accent)" opacity=".6" />
      <text x="410" y="247" textAnchor="middle" style={{ ...mono, fontSize: 17, letterSpacing: "0.02em" }} fill="var(--text-strong)">myBOX</text>
      <text x="410" y="266" textAnchor="middle" style={{ ...mono, fontSize: 8.5 }} fill="var(--text-muted)">{L("SCADA-ÞJÓNN + BEINIR", "SCADA SERVER + ROUTER")}</text>

      {/* Vinstri: net stjórnenda */}
      <line x1="205" y1="245" x2="338" y2="245" stroke="var(--accent)" strokeWidth="2" />
      <text x="312" y="237" textAnchor="middle" style={{ ...mono, fontSize: 9 }} fill="var(--text-muted)">LAN 2</text>
      <Shield cx={275} cy={245} />
      <rect x="40" y="212" width="165" height="96" rx="10" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="122" y="234" textAnchor="middle" style={{ ...mono, fontSize: 10 }} fill="var(--text-strong)">{L("NET STJÓRNENDA", "OPERATOR NETWORK")}</text>
      <Monitor cx={98} cy={266} />
      <Monitor cx={146} cy={266} />
      <text x="122" y="298" textAnchor="middle" style={{ ...sans, fontSize: 10 }} fill="var(--text-muted)">{L("Tölvur / vinnustöðvar", "PCs / workstations")}</text>

      {/* Hægri: tækninet með PLC */}
      <line x1="482" y1="245" x2="600" y2="245" stroke="var(--accent)" strokeWidth="2" />
      <text x="508" y="237" textAnchor="middle" style={{ ...mono, fontSize: 9 }} fill="var(--text-muted)">LAN 1</text>
      <Shield cx={545} cy={245} />
      <line x1="600" y1="192" x2="600" y2="298" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="600" cy="245" r="3.5" fill="var(--accent)" />
      <text x="600" y="180" textAnchor="middle" style={{ ...mono, fontSize: 10 }} fill="var(--text-strong)">{L("TÆKNINET", "TECHNOLOGY NET")}</text>
      <line x1="600" y1="245" x2="640" y2="245" stroke="var(--accent)" strokeWidth="2" />
      <PlcGlyph x={640} y={232} />
      <text x="684" y="249" style={{ ...mono, fontSize: 10.5 }} fill="var(--text-strong)">{L("IÐNTÖLVUR OG TÆKI", "PLCS AND DEVICES")}</text>
      <text x="712" y="286" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: 10.5 }} fill="var(--text-muted)">Siemens S7 · Modbus TCP · EtherNet/IP</text>

      <text x="410" y="356" textAnchor="middle" style={{ ...sans, fontSize: 11 }} fill="var(--text-muted)">{L("Aðskilin net, innbyggður eldveggur og öruggur fjaraðgangur um VPN.", "Separated networks, built-in firewall and secure remote access over VPN.")}</text>
    </svg>
  );
}

// Stærðir myPANEL: [tómmur, breidd-hlutfall]
const PANEL_SIZES = [7, 10, 11, 13, 15];

function PanelSizes() {
  return (
    <div className="panel-sizes" style={{ display: "flex", alignItems: "flex-end", gap: 12, flexWrap: "nowrap", marginTop: 22 }}>
      {PANEL_SIZES.map((t) => (
        <div key={t} style={{ textAlign: "center", flex: "none" }}>
          <div style={{ width: t * 6.6, height: t * 6.6 * 9 / 16, border: "1.5px solid var(--border)", borderRadius: 4, background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <span style={{ position: "absolute", inset: 3, borderRadius: 2, background: "var(--accent-soft)" }}></span>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--text-muted)", marginTop: 7 }}>{t}″</div>
        </div>
      ))}
    </div>
  );
}

function ProductFeature({ kicker, name, tagline, body, specs, image, imageAlt, flip, children }) {
  return (
    <div style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px),1fr))", alignItems: "center", direction: flip ? "rtl" : "ltr" }}>
      <div style={{ direction: "ltr", background: "var(--bg-alt)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 28, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300 }}>
        <img src={image} alt={imageAlt} style={{ maxWidth: "100%", maxHeight: 320, objectFit: "contain", display: "block" }} />
      </div>
      <div style={{ direction: "ltr" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.14em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 10 }}>{kicker}</div>
        <h3 style={{ fontSize: "1.6rem", color: "var(--text-strong)", marginBottom: 6 }}>{name}</h3>
        <div style={{ fontWeight: 600, color: "var(--text-body)", marginBottom: 12 }}>{tagline}</div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>{body}</p>
        {children}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
          {specs.map((s) => <span key={s} style={specChip}>{s}</span>)}
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section style={{ padding: "70px 20px" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <Reveal>
          <SectionHeading
            kicker={L("Sala og þjónusta", "Sales & service")}
            title={L("Búnaður frá mySCADA", "mySCADA hardware")}
            lead={L(
              "AndOr selur og þjónustar mySCADA búnað á Íslandi, myBOX þjóna og myPANEL snertiskjái, og aðstoðar við val á réttri lausn, uppsetningu og rekstur.",
              "AndOr sells and services mySCADA hardware in Iceland, myBOX servers and myPANEL touchscreens, and helps you choose, install and run the right solution."
            )}
          />
        </Reveal>

        <Reveal delay={80}>
          <div style={{ marginTop: 50 }}>
            <ProductFeature
              kicker={L("SCADA-þjónn og beinir í einu tæki", "SCADA server & router in one device")}
              name="myBOX"
              tagline={L("Fullbúið skjámyndakerfi án þess að þarfnist sérstakrar tölvu", "A complete HMI/SCADA system with no dedicated computer needed")}
              body={L(
                "myBOX sameinar iðnaðarbeini og SCADA-þjón í einu netta tæki á DIN-skinnu. Það tengist beint við iðntölvurnar á tækninetinu, heldur neti stjórnenda aðskildu á hinu Ethernet-tenginu og veitir öruggan fjaraðgang um innbyggt VPN. 4G/LTE getur verið aðaltenging eða sjálfvirk varaleið, og innbyggður eldveggur stýrir aðgangi að netum og tækjum.",
                "myBOX combines an industrial router and a SCADA server in one compact DIN-rail device. It connects directly to the PLCs on the technology network, keeps the operator network separate on the second Ethernet port, and provides secure remote access over built-in VPN. 4G/LTE can serve as the primary link or an automatic backup, and the built-in firewall controls access between networks and devices."
              )}
              specs={[
                L("4 kjarna CPU · 2,4 GHz", "4-core CPU · 2.4 GHz"), "8 GB RAM · 64 GB eMMC",
                "2× Ethernet", "2× RS485 · 2× RS232", "Wi-Fi 2,4/5 GHz", "4G LTE",
                L("VPN + eldveggur", "VPN + firewall"), "−25…+60 °C", L("DIN-skinna", "DIN-rail"), "9–36V DC",
              ]}
              image="assets/mybox-render.png"
              imageAlt="mySCADA myBOX"
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div style={{ marginTop: 44, border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", background: "var(--bg-alt)", padding: "30px 30px 18px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.14em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 18 }}>{L("Svona tengist myBOX", "How myBOX connects")}</div>
            <MyBoxScheme />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div style={{ marginTop: 70 }}>
            <ProductFeature
              flip
              kicker={L("Snertiskjár fyrir stjórnendur", "Operator touchscreen")}
              name="myPANEL"
              tagline={L("Skjámyndakerfið og stjórnborðið í einum skjá", "The HMI system and control panel in a single display")}
              body={L(
                "myPANEL er iðnaðarsnertiskjár með myPRO skjámyndakerfinu innbyggðu. Viðvörunarkerfi, ferilrit og fjaraðgangur fylgja með. Skjárinn tengist annaðhvort beint við iðntölvurnar eða gegnum SCADA-þjón (myBOX/myPRO), og skiptir sjálfkrafa yfir í beina tengingu ef samband við þjóninn rofnar. Fáanlegur í fimm stærðum.",
                "myPANEL is an industrial touchscreen with the myPRO HMI system built in. Alarms, trends and remote access included. It connects either directly to the PLCs or through a SCADA server (myBOX/myPRO), switching automatically to direct communication if the server connection fails. Available in five sizes."
              )}
              specs={[
                L("Snertiskjár 7–15″", "7–15″ touchscreen"), L("Upplausn allt að 1920×1080", "Up to 1920×1080"),
                "4 GB RAM · 32 GB eMMC", "Siemens S7 · Modbus · OPC UA", "Wi-Fi 2,4/5 GHz", "−20…+60 °C", "9–36V DC",
              ]}
              image="assets/MyPanel.webp"
              imageAlt="mySCADA myPANEL"
            >
              <PanelSizes />
            </ProductFeature>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div style={{ marginTop: 70 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.14em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 18 }}>{L("Hugbúnaður", "Software")}</div>
            <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))" }}>
              {SOFTWARE.map(([name, body]) => (
                <Card key={name}>
                  <h3 style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", fontSize: "1rem", marginBottom: 6 }}>{name}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{L(body[0], body[1])}</p>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>

        <p style={{ marginTop: 34, color: "var(--text-muted)" }}>
          {L("Frekari upplýsingar um mySCADA:", "More about mySCADA:")} <a href="https://www.myscada.org" target="_blank" rel="noopener">www.myscada.org</a>
        </p>
      </div>
    </section>
  );
}

function Panel({ label, right, alert, children }) {
  return (
    <div style={{ background: "var(--surface-card)", border: alert ? "1px solid rgba(229,72,77,.6)" : "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden", display: "flex", flexDirection: "column", flex: 1, transition: "border-color .3s" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "10px 16px", borderBottom: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
        <span>{label}</span>
        {right}
      </div>
      {children}
    </div>
  );
}

function Lamp({ on, color, blink, label }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", flex: "none", background: on ? color : "var(--border)", boxShadow: on ? `0 0 9px ${color}` : "none", animation: on ? (blink ? "andorBlink .85s steps(1) infinite" : "andorPulse 2.4s ease-in-out infinite") : "none" }}></span>
      <span style={{ color: on ? "var(--text-strong)" : "var(--text-muted)" }}>{label}</span>
    </span>
  );
}

const hmiStepBtn = { width: 34, height: 34, border: "none", background: "transparent", color: "var(--accent)", fontSize: "1.15rem", cursor: "pointer", fontFamily: "var(--font-mono)", lineHeight: 1 };
const hmiGhostBtn = { border: "1px solid var(--border)", background: "transparent", color: "var(--text-muted)", borderRadius: "var(--radius-pill)", padding: "9px 16px", fontFamily: "var(--font-sans)", fontSize: "0.86rem", fontWeight: 600, cursor: "pointer" };

function HmiDemo() {
  const [run, setRun] = React.useState(false);
  const [sp, setSp] = React.useState(21);
  const [alarm, setAlarm] = React.useState(false);
  const [sim, setSim] = React.useState({ supply: 8.4, fan: 0, out: 8.0, hist: [] });
  const [events, setEvents] = React.useState([]);
  const refs = React.useRef({ run: false, sp: 21, alarm: false, at: 0 });
  refs.current.run = run; refs.current.sp = sp; refs.current.alarm = alarm;

  const logEvent = (msg, kind) => {
    const t = new Date().toLocaleTimeString("is-IS", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setEvents((ev) => [{ t, msg, kind }, ...ev].slice(0, 6));
  };

  React.useEffect(() => {
    const id = setInterval(() => {
      setSim((s) => {
        const out = 8 + Math.sin(Date.now() / 9000) * 1.3;
        const target = refs.current.run ? refs.current.sp : out;
        const supply = s.supply + (target - s.supply) * 0.15 + (Math.random() - 0.5) * 0.09;
        const fan = Math.max(0, Math.min(100, s.fan + (refs.current.run ? 9 : -14)));
        return { supply, fan, out, hist: [...s.hist, supply].slice(-72) };
      });
      if (refs.current.alarm) {
        refs.current.at -= 1;
        if (refs.current.at <= 0) {
          setAlarm(false);
          logEvent(L("Viðvörun gengin til baka", "Alarm cleared"), "ok");
        }
      }
    }, 500);
    return () => clearInterval(id);
  }, []);

  const toggleRun = () => {
    const nx = !run;
    setRun(nx);
    logEvent(nx ? L("Kerfi ræst", "System started") : L("Kerfi stöðvað", "System stopped"), nx ? "ok" : "info");
  };
  const testAlarm = () => {
    if (alarm) return;
    refs.current.at = 12;
    setAlarm(true);
    logEvent(L("VIÐVÖRUN: innblásturshiti út fyrir mörk", "ALARM: supply temperature out of range"), "alarm");
  };
  const stepSp = (d) => setSp((v) => Math.max(15, Math.min(27, Math.round((v + d) * 2) / 2)));

  const heat = run && sim.supply < sp - 0.3;
  const flowing = run && sim.fan > 10;
  const spinDur = sim.fan >= 60 ? "0.55s" : "1.5s";
  const ty = (t) => 115 - ((t - 5) / 24) * 110;
  const n = sim.hist.length;
  const pts = n >= 2 ? sim.hist.map((v, i) => `${(300 - (n - 1 - i) * (300 / 71)).toFixed(1)},${ty(v).toFixed(1)}`).join(" ") : null;

  const readout = (x, anchor, label, value, color) => (
    <g>
      <text x={x} y="192" textAnchor={anchor} style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em" }} fill="var(--text-muted)">{label}</text>
      <text x={x} y="215" textAnchor={anchor} style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 700 }} fill={color || "var(--text-strong)"}>{value}</text>
    </g>
  );

  return (
    <div>
      <div className="hmi-layout" style={{ display: "grid", gap: 18, gridTemplateColumns: "1.6fr 1fr", marginTop: 42 }}>
        <Panel
          alert={alarm}
          label={L("stjórnmynd, loftræsikerfi", "control view, ventilation")}
          right={
            <span style={{ display: "flex", gap: 16 }}>
              <Lamp on={run && sim.fan > 5} color="#3fb96b" label={L("Í GANGI", "RUN")} />
              <Lamp on={alarm} color="#e5484d" blink label={L("VIÐVÖRUN", "ALARM")} />
            </span>
          }
        >
          <div style={{ flex: 1, padding: "16px 16px 4px", background: "var(--bg)" }}>
            <svg viewBox="0 0 560 224" style={{ width: "100%", height: "auto", display: "block" }}>
              <rect x="16" y="96" width="528" height="58" fill="rgba(79,159,216,.05)" />
              <path d="M16 96H544M16 154H544M16 96V154" stroke="var(--border)" strokeWidth="2" fill="none" />
              <path d="M30 103l-9 9M40 103l-19 19M50 103l-24 24M50 113l-19 19M50 123l-9 9" stroke="var(--text-muted)" strokeWidth="1.5" opacity=".5" />
              <text x="96" y="82" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em" }} fill="var(--text-muted)">{L("SPJALDLOKA", "DAMPER")}</text>
              <g style={{ transition: "transform 1.1s cubic-bezier(.4,0,.2,1)", transform: `rotate(${run ? 62 : 0}deg)`, transformOrigin: "96px 125px" }}>
                <line x1="96" y1="101" x2="96" y2="149" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
              </g>
              <circle cx="96" cy="125" r="4" fill="var(--accent)" />
              <text x="230" y="72" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em" }} fill="var(--text-muted)">{L("VIFTA", "FAN")}</text>
              <circle cx="230" cy="125" r="36" fill="var(--surface-card)" stroke="var(--border)" strokeWidth="2" />
              <g style={{ animation: `andorSpin ${spinDur} linear infinite`, animationPlayState: sim.fan > 2 ? "running" : "paused", transformOrigin: "230px 125px" }}>
                {[0, 120, 240].map((a) => (
                  <path key={a} d="M230 125 C221 112 223 100 230 94 C237 100 239 112 230 125 Z" fill="var(--accent)" opacity="0.9" transform={`rotate(${a} 230 125)`} />
                ))}
              </g>
              <circle cx="230" cy="125" r="6" fill="var(--surface-card)" stroke="var(--accent)" strokeWidth="2.5" />
              <text x="361" y="82" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em" }} fill="var(--text-muted)">{L("HITARI", "HEATER")}</text>
              <path d="M336 102 L346 148 L356 102 L366 148 L376 102 L386 148" fill="none" stroke={heat ? "#e5744d" : "var(--text-muted)"} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity={heat ? 1 : 0.45} style={{ transition: "stroke .5s, opacity .5s", filter: heat ? "drop-shadow(0 0 6px rgba(229,116,77,.75))" : "none" }} />
              {[150, 296, 452].map((x, i) => (
                <path
                  key={x}
                  d={`M${x} 112l12 13-12 13`}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: flowing ? 0.9 : 0.12, transition: "opacity .4s", animation: flowing ? `andorFlow 1.1s linear infinite ${i * 0.18}s` : "none" }}
                />
              ))}
              {readout(20, "start", L("ÚTI", "OUTDOOR"), `${sim.out.toFixed(1)}°C`, null)}
              {readout(196, "middle", L("VIFTA", "FAN"), `${Math.round(sim.fan)}%`, null)}
              {readout(352, "middle", L("ÓSKGILDI", "SETPOINT"), `${sp.toFixed(1)}°C`, null)}
              {readout(544, "end", L("INNBLÁSTUR", "SUPPLY"), `${sim.supply.toFixed(1)}°C`, alarm ? "#e5484d" : "var(--accent)")}
            </svg>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "14px 16px", borderTop: "1px solid var(--border)" }}>
            <Button onClick={toggleRun} variant={run ? "ghost" : undefined}>{run ? L("Stöðva kerfi", "Stop system") : L("Ræsa kerfi", "Start system")}</Button>
            <span style={{ display: "flex", alignItems: "center", border: "1px solid var(--border)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
              <button onClick={() => stepSp(-0.5)} aria-label="-" style={hmiStepBtn}>−</button>
              <span style={{ padding: "0 6px", fontFamily: "var(--font-mono)", fontSize: "0.86rem", color: "var(--text-strong)", minWidth: 88, textAlign: "center" }}>{L("Ósk", "Set")} {sp.toFixed(1)}°C</span>
              <button onClick={() => stepSp(0.5)} aria-label="+" style={hmiStepBtn}>+</button>
            </span>
            <button onClick={testAlarm} disabled={alarm} style={{ ...hmiGhostBtn, opacity: alarm ? 0.45 : 1 }}>{L("Prófa viðvörun", "Test alarm")}</button>
          </div>
        </Panel>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Panel
            label={L("ferilrit, innblásturshiti", "trend, supply temp")}
            right={<span style={{ color: "var(--accent)", fontWeight: 700 }}>{sim.supply.toFixed(1)}°C</span>}
          >
            <div style={{ flex: 1, padding: "12px 12px 10px", background: "var(--bg)" }}>
              <svg viewBox="0 0 300 120" preserveAspectRatio="none" style={{ width: "100%", height: 128, display: "block" }}>
                {[15, 60, 105].map((y) => (
                  <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="var(--border)" strokeWidth="1" opacity="0.55" />
                ))}
                <line x1="0" x2="300" y1={ty(sp)} y2={ty(sp)} stroke="var(--accent)" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
                {pts && <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />}
                {n > 0 && <circle cx="300" cy={ty(sim.hist[n - 1])} r="3.5" fill="var(--accent)" />}
              </svg>
            </div>
          </Panel>
          <Panel
            alert={alarm}
            label={L("atburðir / viðvaranir", "events / alarms")}
            right={alarm ? <span style={{ color: "#e5484d", fontWeight: 700 }}>{L("VIRK", "ACTIVE")}</span> : null}
          >
            <div style={{ flex: 1, minHeight: 128, padding: "10px 14px", background: "var(--bg)", display: "flex", flexDirection: "column", gap: 7, justifyContent: events.length ? "flex-start" : "center" }}>
              {events.length === 0 && (
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center", opacity: 0.7 }}>
                  {L("engir atburðir, ræstu kerfið", "no events, start the system")}
                </div>
              )}
              {events.slice(0, 4).map((e, i) => (
                <div key={e.t + e.msg + i} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: "0.8rem", opacity: i === 0 ? 1 : 0.72 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", flex: "none", background: e.kind === "alarm" ? "#e5484d" : e.kind === "ok" ? "#3fb96b" : "var(--accent)", boxShadow: e.kind === "alarm" ? "0 0 7px rgba(229,72,77,.8)" : "none" }}></span>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", flex: "none" }}>{e.t}</span>
                  <span style={{ color: e.kind === "alarm" ? "#e5484d" : "var(--text-body)", fontWeight: e.kind === "alarm" ? 600 : 400 }}>{e.msg}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
      <div style={{ marginTop: 10, textAlign: "right", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", opacity: 0.7 }}>
        {L("Gagnvirkt sýnidæmi, ekki raunveruleg gögn", "Interactive demo, not real data")}
      </div>
    </div>
  );
}

const MiniIcon = ({ children }) => (
  <span style={{ flex: "none", width: 40, height: 40, borderRadius: 10, background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg viewBox="0 0 24 24" style={{ width: 21, height: 21 }} fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
  </span>
);

// [src, [isTitle,enTitle], [isCap,enCap]]
const SHOTS = [
  ["assets/scada-placeholder.svg", ["Sundlaug, hússtjórnunarkerfi", "Swimming pool, building control system"], ["Yfirlitsmynd með hitastýringu, efnaskömmtun (klór/pH) og sögulegu línuriti.", "Overview with temperature control, chemical dosing (chlorine/pH) and a historical trend."]],
  ["assets/scada-placeholder.svg", ["Loftræsing salur, íþróttahús", "Ventilation, sports hall"], ["Loftmeðhöndlun með frískun, hitaendurvinnslu og rauntímavöktun rýma.", "Air handling with free cooling, heat recovery and real-time zone monitoring."]],
  ["assets/scada-placeholder.svg", ["Brunalokur, skólabygging", "Fire dampers, school building"], ["Staða og sjálfvirkar prófanir á brunalokum í heilli álmu, með viðvörunum og handvirkri prófun.", "Status and automatic testing of fire dampers across a wing, with alarms and manual test."]],
  ["assets/scada-placeholder.svg", ["Búningsklefar, hússtjórnun", "Changing rooms, building control"], ["Lýsing, sturtur og gólfhiti í fjórum búningsklefum á einni mynd.", "Lighting, showers and floor heating for four changing rooms on one screen."]],
  ["assets/scada-placeholder.svg", ["Baðvatn og sturtur", "Shower-water system"], ["Hitastýring baðvatns með varmaskipti, hringrás og handvirkri upphitun á sturtum.", "Shower-water temperature control with heat exchanger, circulation and manual boost."]],
  ["assets/scada-placeholder.svg", ["Lýsingarstýring, kennslustofur", "Lighting control, classrooms"], ["Birtustig og senur (kennsla/TV) fyrir hverja stofu, stýrt af einni mynd.", "Dimming levels and scenes (teaching/TV) per classroom, controlled from one screen."]],
];

function Lightbox({ shot, onClose }) {
  React.useEffect(() => {
    if (!shot) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [shot]);
  if (!shot) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(6,10,18,.88)", backdropFilter: "blur(6px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", cursor: "zoom-out", animation: "andorFade .2s ease" }}
    >
      <button
        onClick={onClose}
        aria-label="Loka"
        style={{ position: "absolute", top: 20, right: 24, width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(255,255,255,.25)", background: "rgba(255,255,255,.08)", color: "#fff", fontSize: "1.4rem", cursor: "pointer", lineHeight: 1 }}
      >×</button>
      <img
        src={shot[0]}
        alt={L(shot[1][0], shot[1][1])}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "min(1400px, 96vw)", maxHeight: "82vh", width: "auto", borderRadius: 8, border: "1px solid rgba(79,159,216,.4)", boxShadow: "0 30px 80px rgba(0,0,0,.6)", cursor: "default", display: "block" }}
      />
      <div style={{ marginTop: 18, textAlign: "center", color: "#c7d2e2", maxWidth: 720 }}>
        <div style={{ fontWeight: 700, color: "#fff", marginBottom: 4 }}>{L(shot[1][0], shot[1][1])}</div>
        <div style={{ fontSize: "0.9rem" }}>{L(shot[2][0], shot[2][1])}</div>
      </div>
    </div>
  );
}

function ScreenshotGallery() {
  const [open, setOpen] = React.useState(null);
  return (
    <section style={{ padding: "70px 20px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <Reveal>
          <SectionHeading
            kicker={L("Úr verkefnum AndOr", "From AndOr projects")}
            title={L("Skjámyndakerfi sem við höfum skilað", "HMI screens we have delivered")}
            lead={L("Smelltu á mynd til að stækka.", "Click an image to enlarge.")}
          />
        </Reveal>
        <Reveal delay={100}>
        <div style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px),1fr))", marginTop: 42 }}>
          {SHOTS.map((shot) => (
            <figure key={shot[1][0]} style={{ margin: 0 }}>
              <button
                onClick={() => setOpen(shot)}
                style={{ display: "block", width: "100%", padding: 0, border: "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "#8a939c", cursor: "zoom-in", position: "relative" }}
                onMouseEnter={(e) => { const im = e.currentTarget.querySelector("img"); if (im) im.style.transform = "scale(1.03)"; const ov = e.currentTarget.querySelector("[data-ov]"); if (ov) ov.style.opacity = "1"; }}
                onMouseLeave={(e) => { const im = e.currentTarget.querySelector("img"); if (im) im.style.transform = "scale(1)"; const ov = e.currentTarget.querySelector("[data-ov]"); if (ov) ov.style.opacity = "0"; }}
              >
                <img src={shot[0]} alt={L(shot[1][0], shot[1][1])} style={{ width: "100%", display: "block", transition: "transform .5s cubic-bezier(.2,.8,.2,1)" }} />
                <span data-ov style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 55%, rgba(6,10,18,.55))", opacity: 0, transition: "opacity .3s", pointerEvents: "none" }}></span>
                <span data-ov style={{ position: "absolute", bottom: 12, right: 12, opacity: 0, transition: "opacity .3s", display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#fff", background: "rgba(79,159,216,.85)", borderRadius: "var(--radius-pill)", padding: "5px 12px", pointerEvents: "none" }}>
                  {L("Stækka", "Enlarge")} ⤢
                </span>
              </button>
              <figcaption style={{ marginTop: 14 }}>
                <div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: "1.02rem" }}>{L(shot[1][0], shot[1][1])}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: 3 }}>{L(shot[2][0], shot[2][1])}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        </Reveal>
      </div>
      <Lightbox shot={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function ScadaShowcase() {
  const minis = [
    [<React.Fragment key="m"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4M6 12l3-3 2 2 4-4" /></React.Fragment>, ["Rauntímavöktun", "Real-time monitoring"], ["Staða alls kerfisins á einum stað, uppfærð í rauntíma.", "The state of the whole system in one place, updated in real time."]],
    [<React.Fragment key="b"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></React.Fragment>, ["Viðvaranir", "Alarms"], ["Viðvaranir og atburðaskráning þegar frávik koma upp.", "Alarms and event logging whenever something deviates."]],
    [<React.Fragment key="c"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></React.Fragment>, ["Ferilrit og skýrslur", "Trends & reports"], ["Söguleg gögn, ferilrit og skýrslugerð með myREPORTS.", "Historical data, trends and reporting with myREPORTS."]],
    [<React.Fragment key="p"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></React.Fragment>, ["Aðgangur hvar sem er", "Access anywhere"], ["Í vafra, síma og spjaldtölvu, öruggur fjaraðgangur.", "In a browser, phone or tablet, with secure remote access."]],
  ];
  return (
    <section style={{ padding: "70px 20px" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <Reveal>
          <SectionHeading
            kicker={L("Stjórnkerfi í grunninn", "Control systems 101")}
            title={L("Svona virkar stjórnkerfi", "How a control system works")}
            lead={<React.Fragment>{L("Iðntölvan les skynjarana og stýrir búnaðinum, skjámyndakerfið gefur yfirsýn og aðgang hvar sem er.", "The PLC reads the sensors and controls the equipment, the HMI provides overview and access from anywhere.")}</React.Fragment>}
          />
        </Reveal>
        <Reveal delay={80}>
          <div style={{ maxWidth: 960, margin: "10px auto 40px" }}>
            <SystemScheme />
          </div>
        </Reveal>
        <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(230px,1fr))", marginBottom: 66 }}>
          {minis.map(([icon, title, body]) => (
            <div key={title[0]} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <MiniIcon>{icon}</MiniIcon>
              <div>
                <h4 style={{ fontSize: "0.97rem", marginBottom: 3, color: "var(--text-strong)" }}>{L(title[0], title[1])}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", margin: 0 }}>{L(body[0], body[1])}</p>
              </div>
            </div>
          ))}
        </div>
        <Reveal>
          <SectionHeading
            kicker={L("Gagnvirkt sýnidæmi", "Interactive demo")}
            title={L("Prófaðu sjálf(ur)", "Try it yourself")}
            lead={<React.Fragment>{L("Ræstu loftræsikerfið, breyttu óskgildinu og prófaðu viðvörun til að sjá hvernig stýring, vöktun og viðvaranir vinna saman.", "Start the ventilation system, change the setpoint and test an alarm to see how control, monitoring and alarms work together.")}</React.Fragment>}
          />
        </Reveal>
        <Reveal delay={100}><HmiDemo /></Reveal>
      </div>
    </section>
  );
}

function ScadaPage({ onNav }) {
  return (
    <div>
      <PageHead
        art="assets/myscada-logo-white.png"
        artMode="logo"
        tag="mySCADA"
        title={L("mySCADA skjámyndakerfi", "mySCADA HMI systems")}
        intro={L(
          "mySCADA Technologies er leiðandi í hönnun nútíma skjámyndakerfa og þróar kerfið stöðugt með áherslu á óskir viðskiptavina. Kerfið er auðvelt í notkun og áreiðanleikinn mikill. AndOr er umboðsaðili mySCADA á Íslandi.",
          "mySCADA Technologies is a leader in modern HMI/SCADA design and continually develops the system around customer needs. It is easy to use and highly reliable. AndOr is the mySCADA distributor in Iceland."
        )}
      />
      <ProductsSection />
      <section style={{ padding: "0 20px 70px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <Button onClick={() => onNav("verkefni")}>{L("Sjá dæmi um skjámyndakerfi sem við höfum skilað →", "See HMI screens we have delivered →")}</Button>
        </div>
      </section>
      <CtaStrip onNav={onNav} title={L("Viltu vita meira um mySCADA?", "Want to know more about mySCADA?")} text={L("Við veitum ráðgjöf um hvaða lausn hentar þínu verkefni, og seljum búnaðinn.", "We advise on which solution suits your project, and sell the hardware.")} />
    </div>
  );
}

function VerkefniPage({ onNav }) {
  return (
    <div>
      <PageHead
        tag={L("Verkefni", "Projects")}
        title={L("Dæmi um okkar lausnir", "Examples of our work")}
        intro={L(
          "Raunveruleg stjórnborð úr afhentum kerfum, hönnuð og forrituð af AndOr.",
          "Real control screens from delivered systems, designed and programmed by AndOr."
        )}
      />
      <ScreenshotGallery />
      <CtaStrip onNav={onNav} title={L("Vantar þig svona kerfi?", "Need a system like this?")} text={L("Við hönnum stjórnkerfi og skjámyndakerfi sniðin að þínu verkefni.", "We design control and HMI systems tailored to your project.")} />
    </div>
  );
}

// [src, name, [isRole, enRole], [isBody, enBody], chips [[is,en],...]]
const TEAM = [
  ["assets/team-stefan.jpg", "Stefán Karl Randversson", ["Framkvæmdastjóri\nRafmagnstæknifræðingur", "Managing Director\nElectrical Engineer"], ["Hönnun stjórnkerfa, iðntölvuforritun og gangsetningar.", "Control-system design, PLC programming and commissioning."], [["Hönnun stjórnkerfa", "Control-system design"], ["Iðntölvuforritun", "PLC programming"], ["Gangsetningar", "Commissioning"]]],
  ["assets/team-saevar.jpg", "Sævar Karl Randversson", ["Rafmagnsverkfræðingur\nRafvirkjameistari", "Electrical Engineer\nMaster Electrician"], ["Stýriteikningar, skjámyndakerfi og iðntölvuforritun.", "Control drawings, HMI systems and PLC programming."], [["Stýriteikningar", "Control drawings"], ["Skjámyndakerfi", "HMI/SCADA"], ["Iðntölvuforritun", "PLC programming"]]],
  ["assets/team-mary.jpg", "Marý Sæmundsdóttir", ["Skrifstofa", "Office"], ["Rekstur, þjónusta og samskipti við viðskiptavini.", "Operations, service and customer relations."], [["Rekstur", "Operations"], ["Þjónusta", "Service"], ["Samskipti", "Customer relations"]]],
];

function TeamCard({ src, name, role, body, chips }) {
  return (
    <Card padding="0" style={{ overflow: "hidden", borderRadius: "var(--radius-xl)" }}>
      <div
        style={{ position: "relative", height: 320, overflow: "hidden", background: "var(--accent-soft)" }}
      >
        {src ? (
          <img
            src={src}
            alt={name}
            style={{
              width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%", display: "block",
            }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4.6rem", fontWeight: 700, color: "var(--accent)", background: "radial-gradient(circle at 50% 38%, rgba(79,159,216,.22), transparent 72%)" }}>
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div style={{ padding: "22px 24px 26px" }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: 6, color: "var(--text-strong)" }}>{name}</h3>
        <div style={{ color: "var(--accent)", fontSize: "0.92rem", fontWeight: 600, marginBottom: 12, whiteSpace: "pre-line" }}>{L(role[0], role[1])}</div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.93rem", margin: 0 }}>{L(body[0], body[1])}</p>
      </div>
    </Card>
  );
}

function UmPage({ onNav, fx }) {
  return (
    <div>
      <section style={{ padding: "70px 20px 40px", background: "radial-gradient(ellipse 80% 70% at 70% 0%, rgba(79,159,216,.12), transparent), var(--bg)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "flex", gap: 50, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 420px" }}>
            <Tag>{L("Um AndOr", "About AndOr")}</Tag>
            <h1 style={{ fontSize: "var(--fs-h1)", color: "var(--text-strong)", margin: "18px 0 0" }}>
              {L("Hönnun stjórnkerfa", "Control-system design")}
            </h1>
            <p style={{ color: "var(--text-muted)", marginTop: 22 }}>
              {L(
                "AndOr ehf. var stofnað árið 2019 og sérhæfir sig í hönnun stjórnkerfa, stýriteikningum, iðntölvuforritun, forritun og uppsetningu á skjámyndakerfum, gangsetningum og prófunum á stjórnkerfum.",
                "AndOr ehf. was founded in 2019 and specialises in control-system design, control drawings, PLC programming, HMI development, commissioning and testing of control systems."
              )}
            </p>
            <p style={{ color: "var(--text-muted)", marginTop: 14 }}>
              {L("AndOr ehf. er umboðsaðili fyrir skjámyndakerfið mySCADA á Íslandi.", "AndOr ehf. is the authorised distributor of the mySCADA HMI system in Iceland.")}
            </p>
            <div style={{ display: "flex", gap: 40, marginTop: 34, flexWrap: "wrap" }}>
              <Stat value="2019" label={L("Stofnað", "Founded")} />
              <Stat value="Siemens" label={L("Iðntölvubúnaður", "PLC hardware")} />
              <Stat value="mySCADA" label={L("Umboðsaðili", "Distributor")} />
            </div>
          </div>
          <HeroMark fx={fx} size={240} />
        </div>
      </section>

      <section style={{ padding: "40px 20px 80px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <Reveal>
            <SectionHeading kicker={L("Starfsfólk", "Team")} title={L("Fólkið á bak við AndOr", "The people behind AndOr")} lead={L("Lítið teymi með margra ára reynslu af stjórnkerfum og rafmagni.", "A small team with years of experience in control systems and electrical work.")} />
          </Reveal>
          <Reveal delay={110}>
          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px),1fr))", marginTop: 42 }}>
            {TEAM.map(([src, name, role, body, chips]) => (
              <TeamCard key={name} src={src} name={name} role={role} body={body} chips={chips} />
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)" }}>
        <PartnerStrip />
      </div>
      <CtaStrip onNav={onNav} title={L("Vinnum saman að betri lausnum!", "Let's build better solutions together!")} />
    </div>
  );
}

function StarfsfolkPage({ onNav }) {
  // Merged into UmPage, kept as a thin alias for any old links.
  return <UmPage onNav={onNav} />;
}

Object.assign((window.AndOrWebsite = window.AndOrWebsite || {}), {
  PageHead, StjornkerfiPage, ScadaPage, VerkefniPage, UmPage, StarfsfolkPage,
});
