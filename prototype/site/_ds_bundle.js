/* @ds-bundle: {"format":4,"namespace":"AndOrDesignSystem_fefdfe","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconChip","sourcePath":"components/core/IconChip.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"AndOr-Website-Handoff/site/assets/site.js":"0e8286d87111","components/core/Avatar.jsx":"e2b1a57ad778","components/core/Badge.jsx":"97f0ba6e5ec4","components/core/Button.jsx":"4b17587b021b","components/core/Card.jsx":"6d5a96728b09","components/core/Chip.jsx":"0a2d62d7f61a","components/core/Icon.jsx":"2116498a7e40","components/core/IconChip.jsx":"95ca582a713d","components/core/SectionHeading.jsx":"ef73068e06ab","components/core/ServiceCard.jsx":"3de7f012140c","components/core/Stat.jsx":"37e1346a29a5","components/core/Tag.jsx":"e00cf8c4d2f0","components/forms/Input.jsx":"6d8a40fb9389","guidelines/tweaks-panel.jsx":"6591467622ed","ui_kits/website/Chrome.jsx":"021aae2c1588","ui_kits/website/ContactPage.jsx":"d848590ae8cf","ui_kits/website/HomePage.jsx":"0e470bff02fc","ui_kits/website/Pages.jsx":"210f9c3e03e1","ui_kits/website/tweaks-panel.jsx":"6591467622ed","website_v2/assets/site.js":"9200a6c8c8d7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AndOrDesignSystem_fefdfe = window.AndOrDesignSystem_fefdfe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// AndOr-Website-Handoff/site/assets/site.js
try { (() => {
/* Sameiginlegur haus og fótur fyrir allar síður */
(function () {
  const LOGO = `
    <img class="nav-mark" src="assets/images/brand/andor-mark.svg" alt="">
    <img class="nav-word" src="assets/images/brand/andor-wordmark-light.png" alt="AndOr ehf — Hönnun stjórnkerfa">`;
  const LINKS = [["stjornkerfi", "stjornkerfi.html", "Stjórnkerfi"], ["myscada", "myscada.html", "mySCADA"], ["um", "um-andor.html", "Um AndOr"], ["samband", "hafa-samband.html", "Hafa samband"]];
  const active = document.body.dataset.page || "";
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="nav">
      <a href="index.html" class="nav-logo" aria-label="AndOr ehf.">${LOGO}</a>
      <button class="burger" aria-label="Valmynd"><span></span><span></span><span></span></button>
      <ul class="nav-links" id="menu">
        ${LINKS.map(([id, href, label]) => `<li><a href="${href}"${id === active ? ' class="active"' : ""}>${label}</a></li>`).join("")}
      </ul>
    </nav>`;
  document.body.prepend(header);
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="foot">
      <a href="index.html" class="nav-logo" aria-label="AndOr ehf.">${LOGO}</a>
      <div>© ${new Date().getFullYear()} AndOr ehf. · kt. 561219-2300 · Glerárgata 32, 600 Akureyri · <a href="mailto:andor@andor.is">andor@andor.is</a> · S: 840-8168</div>
    </div>`;
  document.body.append(footer);
  const burger = header.querySelector(".burger");
  const menu = header.querySelector("#menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("open");
  });
})();

// Scroll fade-in
(function () {
  const targets = [...document.querySelectorAll(".card, .team-card, .scada-card, .contact-card, .form-panel, .stat, .chip, h2, .lead, .page-head h1, .hero h1, .hero p, .cta-strip h2, .cta-strip p, .step, .partners .plabel, .partner-logos img, .panel, .mini")];
  targets.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = i % 4 * 80 + "ms";
  });
  let pending = targets.slice();
  function reveal() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    pending = pending.filter(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        el.classList.add("visible");
        return false;
      }
      return true;
    });
    if (!pending.length) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      reveal();
    });
  }
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
  window.addEventListener("resize", onScroll, {
    passive: true
  });
  reveal();
  window.addEventListener("load", reveal);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "AndOr-Website-Handoff/site/assets/site.js", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Round avatar — photo or initial fallback, ringed in accent blue.
 * Mirrors the team-card avatars on the AndOr site.
 */
function Avatar({
  src,
  name = "",
  size = 96,
  style,
  ...rest
}) {
  const initial = name.trim().charAt(0).toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": name,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: "3px solid var(--accent)",
      background: src ? `var(--accent-soft) url(${src}) center 15%/cover` : "var(--accent-soft)",
      color: "var(--accent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.4,
      fontWeight: "var(--fw-bold)",
      flex: "none",
      overflow: "hidden",
      ...style
    }
  }, rest), !src && initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status badge. Solid-tinted small label for states — neutral, info (blue),
 * success, warning, error. Used for SCADA/system status.
 */
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--text-muted)",
      bg: "rgba(157,176,204,.12)",
      bd: "var(--border)"
    },
    info: {
      color: "var(--andor-blue)",
      bg: "var(--accent-soft)",
      bd: "var(--andor-blue-border)"
    },
    success: {
      color: "var(--status-ok)",
      bg: "rgba(95,192,138,.14)",
      bd: "rgba(95,192,138,.35)"
    },
    warning: {
      color: "var(--status-warn)",
      bg: "rgba(230,184,96,.14)",
      bd: "rgba(230,184,96,.35)"
    },
    error: {
      color: "var(--status-error)",
      bg: "rgba(224,106,106,.14)",
      bd: "rgba(224,106,106,.35)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1,
      color: t.color,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-pill)",
      padding: "5px 11px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AndOr primary action button.
 * Variants: primary (solid blue), ghost (outlined), link (inline accent text).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 18px",
      fontSize: "0.88rem"
    },
    md: {
      padding: "13px 26px",
      fontSize: "0.98rem"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "1.05rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--accent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid var(--border)"
    },
    link: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid transparent",
      padding: "0"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-semibold)",
    lineHeight: 1,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "var(--transition)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const Tag = href ? "a" : "button";
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--accent-hover)";
      if (variant === "primary") e.currentTarget.style.borderColor = "var(--accent-hover)";
      if (variant === "ghost") {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.color = "var(--accent)";
      }
      if (variant === "link") e.currentTarget.style.opacity = "0.8";
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.borderColor = variants[variant].border.split(" ").pop();
      e.currentTarget.style.color = variants[variant].color;
      e.currentTarget.style.opacity = "1";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic AndOr surface card. Dark navy fill, hairline border, 12px radius.
 * Set `interactive` for the hover lift + blue glow used on linked cards.
 */
function Card({
  children,
  interactive = false,
  href,
  padding = "var(--space-6)",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "div";
  const base = {
    display: "block",
    background: interactive && hover ? "var(--surface-hover)" : "var(--surface-card)",
    border: `1px solid ${interactive && hover ? "var(--accent)" : "var(--border)"}`,
    borderRadius: "var(--radius-lg)",
    padding,
    color: "var(--text-body)",
    transition: "var(--transition)",
    textDecoration: "none",
    transform: interactive && hover ? "translateY(-2px)" : "none",
    boxShadow: interactive && hover ? "var(--shadow-card)" : "none",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, href ? {
    href
  } : {}, {
    style: base,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill chip. Default shows a leading accent check (capability/feature tag).
 * Set `check={false}` for a plain pill.
 */
function Chip({
  children,
  check = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-pill)",
      padding: "8px 16px",
      fontSize: "0.88rem",
      color: "var(--text-muted)",
      background: "var(--surface-card)",
      ...style
    }
  }, rest), check && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: "var(--fw-bold)"
    }
  }, "\u2713"), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AndOr line-icon. Stroked 24×24 glyphs matching the site's SVG icon style
 * (1.8 stroke, round caps/joins, no fill). Pass a `name` from the built-in set.
 */
const PATHS = {
  controls: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12h2l1-3 2 6 1-3h2"
  })),
  monitor: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 17v4M6 12l3-3 2 2 4-4"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 3.6-6 8-6s8 2 8 6"
  })),
  gear: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.5"
  })),
  flame: /*#__PURE__*/React.createElement("path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
  }),
  waves: /*#__PURE__*/React.createElement("path", {
    d: "M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
  }),
  sun: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3M12 19v3M2 12h3M19 12h3"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z"
  }),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-10 6L2 7"
  })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "17",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4M16 2v4M3 10h18"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  arrowRight: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }),
  chip: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "12",
    height: "12",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"
  })),
  wind: /*#__PURE__*/React.createElement("path", {
    d: "M3 8h11a3 3 0 1 0-3-3M3 16h8a2.5 2.5 0 1 1-2.5 2.5M3 12h16a3 3 0 1 1-3 3"
  }),
  bulb: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6M10 22h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"
  })),
  droplet: /*#__PURE__*/React.createElement("path", {
    d: "M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7z"
  })
};
function Icon({
  name,
  size = 24,
  stroke = "currentColor",
  strokeWidth = 1.8,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    "aria-hidden": "true"
  }, rest), PATHS[name] || null);
}
Icon.names = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconChip.jsx
try { (() => {
/**
 * Tinted rounded square that houses a line icon — the 44px accent chip
 * used on AndOr service & contact cards.
 */
function IconChip({
  children,
  size = 44,
  radius = "var(--radius-md)",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      background: "var(--accent-soft)",
      color: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconChip.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section heading block — uppercase accent kicker, h2, optional lead paragraph.
 * The standard AndOr section intro.
 */
function SectionHeading({
  kicker,
  title,
  lead,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--accent)",
      fontSize: "var(--fs-kicker)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-kicker)",
      textTransform: "uppercase",
      marginBottom: "var(--space-3)"
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--fs-lead)",
      maxWidth: "720px",
      margin: align === "center" ? "var(--space-4) auto 0" : "var(--space-4) 0 0"
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Service / feature card — icon chip, title, body, optional "more" link.
 * The composition used across the AndOr homepage & solutions grid.
 */
function ServiceCard({
  icon,
  title,
  children,
  more,
  href,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: !!href,
    href: href
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.IconChip, {
    style: {
      marginBottom: "var(--space-4)"
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      marginBottom: "var(--space-2)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--fs-sm)",
      margin: 0
    }
  }, children), more && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginTop: "var(--space-3)",
      fontSize: "0.88rem",
      fontWeight: "var(--fw-semibold)",
      color: "var(--accent)"
    }
  }, more));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat block — big accent number/word over a muted label. Used in the
 * "Um AndOr" stats row (2019 · Siemens · mySCADA).
 */
function Stat({
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.9rem",
      fontWeight: "var(--fw-bold)",
      color: "var(--accent)",
      lineHeight: 1.1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--fs-xs)",
      marginTop: "var(--space-1)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Uppercase pill eyebrow ("tag") — the accent-tinted label above hero & page
 * headings, e.g. "Hönnun stjórnkerfa".
 */
function Tag({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      color: "var(--accent)",
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-tag)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      background: "var(--accent-soft)",
      border: "1px solid var(--andor-blue-border)",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input / textarea with an optional label. AndOr dark field styling:
 * navy surface, hairline border, blue focus ring.
 */
function Input({
  label,
  as = "input",
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Field = as;
  const fieldId = id || (label ? `f-${String(label).toLowerCase().replace(/\s+/g, "-")}` : undefined);
  const fieldStyle = {
    width: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-body)",
    color: "var(--text-body)",
    background: "var(--surface-card)",
    border: `1px solid ${focus ? "var(--accent)" : "var(--border)"}`,
    boxShadow: focus ? "0 0 0 3px var(--accent-soft)" : "none",
    borderRadius: "var(--radius-md)",
    padding: "12px 14px",
    outline: "none",
    transition: "var(--transition)",
    resize: as === "textarea" ? "vertical" : undefined,
    minHeight: as === "textarea" ? "120px" : undefined,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      fontWeight: "var(--fw-medium)"
    }
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    style: fieldStyle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// guidelines/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const NS = window.AndOrDesignSystem_fefdfe || {};
const {
  Icon
} = NS;

// [id, isLabel, enLabel]
const LINKS = [["stjornkerfi", "Stjórnkerfi", "Control systems"], ["verkefni", "Verkefni", "Projects"], ["myscada", "mySCADA", "mySCADA"], ["um", "Um AndOr", "About"], ["samband", "Hafa samband", "Contact"]];
const FLAGS = {
  is: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "14",
    viewBox: "0 0 25 18",
    style: {
      display: "block",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "25",
    height: "18",
    fill: "#02529c"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    width: "4",
    height: "18",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "7",
    width: "25",
    height: "4",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    width: "2",
    height: "18",
    fill: "#dc1e35"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "8",
    width: "25",
    height: "2",
    fill: "#dc1e35"
  })),
  en: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "14",
    viewBox: "0 0 25 18",
    style: {
      display: "block",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "25",
    height: "18",
    fill: "#012169"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0l25 18M25 0L0 18",
    stroke: "#fff",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0l25 18M25 0L0 18",
    stroke: "#c8102e",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 0v18M0 9h25",
    stroke: "#fff",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 0v18M0 9h25",
    stroke: "#c8102e",
    strokeWidth: "3"
  }))
};
function LangSeg({
  lang,
  onToggle
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const opts = [["is", "Íslenska"], ["en", "English"]];
  const pick = code => {
    if (code !== lang) onToggle();
    setOpen(false);
  };
  const row = (code, label, active) => /*#__PURE__*/React.createElement("div", {
    key: code,
    onClick: () => pick(code),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "8px 12px",
      cursor: "pointer",
      whiteSpace: "nowrap",
      background: active ? "var(--accent-soft)" : "transparent",
      color: active ? "var(--accent)" : "var(--text-body)",
      fontSize: "0.86rem",
      fontWeight: active ? 600 : 500
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = "var(--surface-hover)";
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = "transparent";
    }
  }, FLAGS[code], label);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "Language",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      padding: "6px 10px",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-pill)",
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "0.78rem",
      fontWeight: 700,
      letterSpacing: "0.03em",
      transition: "var(--transition)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.color = "var(--accent)";
    },
    onMouseLeave: e => {
      if (!open) {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--text-muted)";
      }
    }
  }, FLAGS[lang], lang.toUpperCase(), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform .2s"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), open && /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      right: 0,
      zIndex: 200,
      minWidth: 150,
      background: "var(--surface-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-soft)",
      overflow: "hidden",
      padding: "4px 0"
    }
  }, opts.map(([c, l]) => row(c, l, c === lang))));
}
function ThemeBtn({
  theme,
  onToggle
}) {
  const dark = theme === "dark";
  return /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-label": dark ? "Switch to light" : "Switch to dark",
    title: dark ? "Light" : "Dark",
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "1px solid var(--border)",
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.color = "var(--accent)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.color = "var(--text-muted)";
    }
  }, dark ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"
  })));
}
function Navbar({
  page,
  onNav,
  lang,
  theme,
  onToggleLang,
  onToggleTheme
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "var(--nav-bg, rgba(11,18,32,.92))",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 20px",
      height: "var(--nav-height)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("heim");
    },
    style: {
      display: "flex",
      alignItems: "center"
    },
    "aria-label": "AndOr ehf."
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/andor-mark.svg",
    alt: "",
    style: {
      height: 40,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: TH("../../assets/andor-wordmark-light.png", "../../assets/andor-wordmark-dark.png"),
    alt: "AndOr ehf.",
    style: {
      height: 34,
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: 26,
      listStyle: "none",
      alignItems: "center"
    }
  }, LINKS.map(([id, isL, enL]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      color: page === id ? "var(--accent)" : "var(--text-muted)",
      fontSize: "0.95rem",
      fontWeight: page === id ? 600 : 500,
      whiteSpace: "nowrap",
      transition: "color .15s"
    },
    onMouseEnter: e => {
      if (page !== id) e.currentTarget.style.color = "var(--text-strong)";
    },
    onMouseLeave: e => {
      if (page !== id) e.currentTarget.style.color = "var(--text-muted)";
    }
  }, L(isL, enL))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LangSeg, {
    lang: lang,
    onToggle: onToggleLang
  }), /*#__PURE__*/React.createElement(ThemeBtn, {
    theme: theme,
    onToggle: onToggleTheme
  })))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border)",
      padding: "34px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
      color: "var(--text-muted)",
      fontSize: "0.88rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/andor-mark.svg",
    alt: "",
    style: {
      height: 30,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: TH("../../assets/andor-wordmark-light.png", "../../assets/andor-wordmark-dark.png"),
    alt: "AndOr ehf.",
    style: {
      height: 26,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: "0.76rem",
      letterSpacing: "0.05em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#3fb96b",
      boxShadow: "0 0 8px rgba(63,185,107,.85)",
      animation: "andorPulse 2.6s ease-in-out infinite",
      flex: "none"
    }
  }), L("Öll kerfi í lagi", "All systems operational")), /*#__PURE__*/React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " AndOr ehf. \xB7 kt. 561219-2300 \xB7", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://maps.google.com/?q=Gler\xE1rgata+32,+600+Akureyri",
    target: "_blank",
    rel: "noopener"
  }, "Gler\xE1rgata 32, 600 Akureyri"), " \xB7", " ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:andor@andor.is"
  }, "andor@andor.is"), " \xB7", " ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+3548408168",
    style: {
      whiteSpace: "nowrap"
    }
  }, "S: 840-8168"))));
}
function Reveal({
  children,
  delay = 0,
  y = 24,
  style
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    if (!("IntersectionObserver" in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px -20px 0px"
    });
    io.observe(el);
    // Öryggisnet: ef observer kviknar aldrei (t.d. í prenti eða óvenjulegu umhverfi) þá birtist efnið samt
    const failsafe = setTimeout(() => setOn(true), 2500);
    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? "none" : `translateY(${y}px)`,
      transition: `opacity .65s ease ${delay}ms, transform .65s cubic-bezier(.2,.8,.2,1) ${delay}ms`,
      ...style
    }
  }, children);
}
Object.assign(window.AndOrWebsite = window.AndOrWebsite || {}, {
  Navbar,
  Footer,
  Reveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
const NS = window.AndOrDesignSystem_fefdfe || {};
const {
  Icon,
  IconChip,
  Input,
  Button,
  Card
} = NS;
const PageHead = props => window.AndOrWebsite.PageHead(props);

// [icon, [isLabel, enLabel], value, href]
const CONTACTS = [["phone", ["Sími", "Phone"], "840-8168", "tel:+3548408168"], ["mail", ["Netfang", "Email"], "andor@andor.is", "mailto:andor@andor.is"], ["pin", ["Heimilisfang", "Address"], "Glerárgata 32, 600 Akureyri", "https://maps.google.com/?q=Glerárgata+32,+600+Akureyri"]];
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    tag: L("Hafa samband", "Contact"),
    title: L("Vinnum saman að betri lausnum", "Let's build better solutions together"),
    intro: L("Hafðu samband fyrir frekari upplýsingar eða tilboð.", "Get in touch for more information or a quote.")
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      display: "grid",
      gap: 40,
      gridTemplateColumns: "1fr 1.15fr",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, CONTACTS.map(([icon, lbl, val, href]) => /*#__PURE__*/React.createElement(Card, {
    key: lbl[0],
    interactive: !!href,
    href: href || undefined,
    padding: "22px 24px",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(IconChip, {
    size: 52
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.78rem",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 4
    }
  }, L(lbl[0], lbl[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-strong)",
      fontSize: "1.05rem"
    }
  }, val))))), /*#__PURE__*/React.createElement(Card, {
    padding: "32px",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 0"
    }
  }, /*#__PURE__*/React.createElement(IconChip, {
    size: 56,
    style: {
      margin: "0 auto 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, L("Takk fyrir!", "Thank you!")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: 0
    }
  }, L("Við höfum samband við þig fljótlega.", "We'll be in touch soon."))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: L("Nafn", "Name"),
    placeholder: L("Nafnið þitt", "Your name"),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: L("Netfang", "Email"),
    type: "email",
    placeholder: L("nafn@example.is", "name@example.com"),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: L("Sími", "Phone"),
    type: "tel",
    placeholder: L("Símanúmer (valfrjálst)", "Phone number (optional)")
  }), /*#__PURE__*/React.createElement(Input, {
    label: L("Skilaboð", "Message"),
    as: "textarea",
    placeholder: L("Segðu okkur frá verkefninu…", "Tell us about your project…"),
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, L("Senda fyrirspurn", "Send enquiry")))))));
}
Object.assign(window.AndOrWebsite = window.AndOrWebsite || {}, {
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const NS = window.AndOrDesignSystem_fefdfe || {};
const {
  Tag,
  Button,
  SectionHeading,
  ServiceCard,
  Chip,
  Icon
} = NS;
const Reveal = props => React.createElement((window.AndOrWebsite || {}).Reveal, props);
function HomePage({
  onNav,
  fx
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "120px 20px 90px",
      background: "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(79,159,216,.14), transparent), var(--bg)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 540px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(1.7rem, 3.4vw, 2.7rem)",
      lineHeight: "var(--lh-tight)",
      fontWeight: 700,
      letterSpacing: "var(--ls-tight)",
      margin: "22px 0 0",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      whiteSpace: "nowrap"
    }
  }, L("Heildarlausnir í stjórnkerfum", "Complete control-system solutions")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--accent)"
    }
  }, L("Frá hönnun að gangsetningu", "From design to commissioning"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: 620,
      margin: "22px 0 34px",
      fontSize: "1.08rem"
    }
  }, L("AndOr ehf. býður upp á heildarlausnir sniðnar að þínum þörfum og veitir ráðgjöf varðandi val stjórnkerfa. Umboðsaðili mySCADA á Íslandi.", "AndOr ehf. delivers complete solutions tailored to your needs and advises on choosing the right control systems. Authorised mySCADA distributor in Iceland.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("samband")
  }, L("Hafa samband", "Contact us")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav("stjornkerfi")
  }, L("Skoða lausnir", "View solutions")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 300px",
      display: "flex",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/styriteikning-daemi.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: 560,
      height: 560,
      maxWidth: "none",
      objectFit: "cover",
      mixBlendMode: TH("screen", "multiply"),
      opacity: TH(0.2, 0.32),
      pointerEvents: "none",
      userSelect: "none",
      filter: TH("none", "invert(1) hue-rotate(180deg) contrast(1.15)"),
      WebkitMaskImage: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, rgba(0,0,0,.95) 42%, rgba(0,0,0,.55) 57%, transparent 71%)",
      maskImage: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, rgba(0,0,0,.95) 42%, rgba(0,0,0,.55) 57%, transparent 71%)"
    }
  }), /*#__PURE__*/React.createElement(HeroMark, {
    fx: fx
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: L("Þjónusta", "Services"),
    title: L("Hvað gerum við?", "What we do"),
    lead: L("Hönnum stjórnkerfi frá grunni og notum skjámyndakerfi frá mySCADA, sem við erum umboðsaðilar fyrir á Íslandi. Sami aðili ber ábyrgð á kerfinu frá fyrstu teikningu að fullprófuðu kerfi í rekstri.", "We design control systems from the ground up using mySCADA HMI systems, for which we are the authorised distributor in Iceland. A single partner responsible from the first drawing to a fully tested system in operation.")
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 110
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      borderRadius: 3,
      marginTop: 48,
      background: "linear-gradient(90deg, rgba(79,159,216,.25), var(--accent) 55%, rgba(79,159,216,.9))",
      boxShadow: "0 0 14px rgba(79,159,216,.45)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "26px 22px",
      gridTemplateColumns: "repeat(auto-fit, minmax(210px,1fr))",
      marginTop: 26
    }
  }, STEPS.map(([num, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: num[0]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12,
      fontFamily: "var(--font-mono)",
      fontSize: "0.8rem",
      fontWeight: 600,
      color: "var(--accent)",
      letterSpacing: "0.14em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, L(num[0], num[1])), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.02rem",
      marginBottom: 6,
      color: "var(--text-strong)"
    }
  }, L(title[0], title[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.9rem",
      margin: 0
    }
  }, L(body[0], body[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("stjornkerfi")
  }, L("Skoða stjórnkerfi →", "Control systems →")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav("myscada")
  }, L("mySCADA búnaður →", "mySCADA hardware →")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 20px",
      background: "var(--bg-alt)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.8rem",
      fontWeight: 600,
      letterSpacing: "0.14em",
      color: "var(--accent)",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, L("Verkefni", "Projects")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      color: "var(--text-strong)",
      margin: "0 0 10px"
    }
  }, L("Sjáðu kerfin sem við höfum afhent", "See the systems we have delivered")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: 0
    }
  }, L("Raunveruleg skjámyndakerfi úr verkefnum AndOr.", "Real HMI systems from AndOr projects."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("verkefni")
  }, L("Skoða verkefni →", "View projects →"))))), /*#__PURE__*/React.createElement(PartnerStrip, null), /*#__PURE__*/React.createElement(CtaStrip, {
    onNav: onNav,
    title: L("Vinnum saman að betri lausnum!", "Let's build better solutions together!")
  }));
}
function CtaStrip({
  onNav,
  title,
  text
}) {
  const body = text || L("Hafðu samband fyrir frekari upplýsingar eða tilboð.", "Get in touch for more information or a quote.");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px",
      textAlign: "center",
      background: "var(--bg-alt)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 700,
      marginBottom: 10,
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginBottom: 28
    }
  }, body), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("samband")
  }, L("Hafa samband", "Contact us"))));
}

// [[isNum, enNum], [isTitle, enTitle], [isBody, enBody]]
const STEPS = [[["01 · HÖNNUN", "01 · DESIGN"], ["Hönnun og ráðgjöf", "Design & consulting"], ["Þarfagreining og hönnun stjórnkerfis í samráði við viðskiptavin, ásamt ráðgjöf um val búnaðar.", "Needs analysis and control-system design together with the customer, plus advice on hardware selection."]], [["02 · TEIKNINGAR", "02 · DRAWINGS"], ["Stýriteikningar", "Control drawings"], ["Vandaðar stýriteikningar sem hægt er að smíða stjórnskápa eftir, í samstarfi við skápasmiði.", "Complete control drawings ready for panel builders to manufacture cabinets from."]], [["03 · FORRITUN", "03 · PROGRAMMING"], ["Iðntölvuforritun", "PLC programming"], ["Forritun á Siemens iðntölvubúnaði og uppsetning skjámyndakerfa frá mySCADA.", "Programming of Siemens PLCs and configuration of mySCADA HMI systems."]], [["04 · GANGSETNING", "04 · COMMISSIONING"], ["Gangsetning og prófanir", "Commissioning & testing"], ["Kerfið gangsett, prófað og afhent. Þjónustað eftir að það er komið í rekstur.", "The system is commissioned, tested and handed over, then serviced once in operation."]]];
function ProcessSection() {
  const {
    SectionHeading,
    Card
  } = NS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: L("Verklag", "Process"),
    title: L("Frá hönnun að gangsetningu", "From design to commissioning"),
    lead: L("Eitt samfellt ferli, sami aðili ber ábyrgð á kerfinu frá fyrstu teikningu að fullprófuðu kerfi í rekstri.", "One continuous process, a single partner responsible from the first drawing to a fully tested system in operation.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      borderRadius: 3,
      marginTop: 48,
      background: "linear-gradient(90deg, rgba(79,159,216,.25), var(--accent) 55%, rgba(79,159,216,.9))",
      boxShadow: "0 0 14px rgba(79,159,216,.45)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18,
      gridTemplateColumns: "repeat(auto-fit, minmax(230px,1fr))",
      marginTop: 26
    }
  }, STEPS.map(([num, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: num[0],
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16,
      fontFamily: "var(--font-mono)",
      fontSize: "0.85rem",
      fontWeight: 600,
      color: "var(--accent)",
      letterSpacing: "0.14em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, L(num[0], num[1])), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.05rem",
      marginBottom: 8,
      color: "var(--text-strong)"
    }
  }, L(title[0], title[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.92rem",
      margin: 0
    }
  }, L(body[0], body[1])))))));
}

// [lightSrc, darkSrc, label, hæð í px, birtujöfnun í dökku þema]
const PARTNER_LOGOS = [["../../assets/partner-akureyrarbaer-ink-light.png", "../../assets/partner-akureyrarbaer-ink-dark.png", "Akureyrarbær", 72, true], ["../../assets/partner-hafnarfjordur-ink-light.png", "../../assets/partner-hafnarfjordur-ink-dark.png", "Hafnarfjarðarbær", 68, true], ["../../assets/partner-ccep-ink-light.png", "../../assets/partner-ccep-ink-dark.png", "Coca-Cola Europacific Partners", 56, false], ["../../assets/partner-siemens-ink-light.png", "../../assets/partner-siemens-ink-dark.png", "Siemens", 28, false]];
function PartnerStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--fs-kicker)",
      fontWeight: 600,
      letterSpacing: "var(--ls-kicker)",
      textTransform: "uppercase",
      marginBottom: 40
    }
  }, L("Meðal viðskiptavina og samstarfsaðila", "Selected customers & partners")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "36px 64px"
    }
  }, PARTNER_LOGOS.map(([lightSrc, darkSrc, label, h, boost]) => /*#__PURE__*/React.createElement("img", {
    key: label,
    src: TH(lightSrc, darkSrc),
    alt: label,
    title: label,
    style: {
      height: h,
      width: "auto",
      opacity: 0.65,
      transition: "opacity .15s",
      filter: boost ? TH("brightness(1.55) contrast(1.04)", "none") : "none"
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.65;
    }
  }))))));
}
function HeroMark({
  fx,
  size
}) {
  const f = fx || {
    effect: "tilt",
    tilt: 16,
    glow: 60
  };
  const ref = React.useRef(null);
  const [s, setS] = React.useState({
    rx: 0,
    ry: 0,
    on: false
  });
  const onMove = e => {
    if (f.effect !== "tilt" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setS({
      rx: -py * f.tilt,
      ry: px * f.tilt,
      on: true
    });
  };
  const reset = () => setS({
    rx: 0,
    ry: 0,
    on: false
  });
  const g = f.glow;
  const gx = (s.ry * 0.7).toFixed(1);
  const gy = (-s.rx * 0.7).toFixed(1);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: onMove,
    onMouseLeave: reset,
    style: {
      perspective: 800,
      width: size || "min(340px, 70vw)",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/andor-mark.svg",
    alt: "AndOr",
    style: {
      width: "100%",
      display: "block",
      willChange: "transform, filter",
      transform: `rotateX(${s.rx}deg) rotateY(${s.ry}deg) scale(${s.on ? 1.05 : 1})`,
      transition: s.on ? "transform .08s ease-out" : "transform .6s cubic-bezier(.2,.8,.2,1)",
      filter: `drop-shadow(${gx}px ${gy}px ${g}px rgba(79,159,216,.6)) drop-shadow(0 0 ${g * 2}px rgba(79,159,216,.28))`,
      animation: f.effect === "float" ? "andorFloat 4.5s ease-in-out infinite" : "none"
    }
  }));
}
Object.assign(window.AndOrWebsite = window.AndOrWebsite || {}, {
  HomePage,
  CtaStrip,
  HeroMark,
  PartnerStrip,
  ProcessSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
const NS = window.AndOrDesignSystem_fefdfe || {};
const {
  Tag,
  Button,
  SectionHeading,
  ServiceCard,
  Card,
  Chip,
  Icon,
  Stat,
  Avatar,
  Badge
} = NS;
const CtaStrip = props => window.AndOrWebsite.CtaStrip(props);
const PartnerStrip = props => React.createElement(window.AndOrWebsite.PartnerStrip, props);
const HeroMark = props => React.createElement(window.AndOrWebsite.HeroMark, props);
const Reveal = props => React.createElement((window.AndOrWebsite || {}).Reveal, props);
const ProcessSection = props => React.createElement((window.AndOrWebsite || {}).ProcessSection, props);
function PageHead({
  tag,
  title,
  intro,
  art,
  artMode
}) {
  const isLogo = artMode === "logo";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "70px 20px 50px",
      background: "radial-gradient(ellipse 80% 70% at 70% 0%, rgba(79,159,216,.12), transparent), var(--bg)",
      borderBottom: "1px solid var(--border)"
    }
  }, art && isLogo && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "52%",
      pointerEvents: "none",
      background: TH("radial-gradient(ellipse 62% 58% at 68% 50%, rgba(10,131,199,.20), transparent 72%)", "radial-gradient(ellipse 62% 58% at 68% 50%, rgba(10,131,199,.10), transparent 72%)")
    }
  }), art && /*#__PURE__*/React.createElement("img", {
    src: isLogo ? TH(art, "../../assets/myscada-logo-blue.png") : art,
    alt: "",
    "aria-hidden": "true",
    style: isLogo ? {
      position: "absolute",
      top: "50%",
      left: "max(62%, calc(100% - 807px))",
      transform: "translateY(-50%)",
      width: "min(42%, 500px)",
      height: "auto",
      objectFit: "contain",
      opacity: TH(0.5, 1),
      pointerEvents: "none",
      userSelect: "none",
      WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 55%, rgba(0,0,0,.12) 100%)",
      maskImage: "linear-gradient(to left, rgba(0,0,0,1) 55%, rgba(0,0,0,.12) 100%)"
    } : {
      position: "absolute",
      top: 0,
      right: 0,
      height: "130%",
      width: "58%",
      objectFit: "cover",
      objectPosition: "left top",
      mixBlendMode: TH("screen", "multiply"),
      opacity: TH(0.16, 0.34),
      pointerEvents: "none",
      userSelect: "none",
      filter: TH("none", "invert(1) hue-rotate(180deg) contrast(1.15)"),
      WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 78%), linear-gradient(to top, transparent 4%, black 45%)",
      WebkitMaskComposite: "source-in",
      maskImage: "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 78%), linear-gradient(to top, transparent 4%, black 45%)",
      maskComposite: "intersect"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, tag), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      fontWeight: 700,
      letterSpacing: "var(--ls-tight)",
      margin: "16px 0 0",
      color: "var(--text-strong)"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: 700,
      marginTop: 14,
      fontSize: "1.05rem",
      whiteSpace: "pre-line"
    }
  }, intro)));
}

// [icon, [isTitle, enTitle], [isBody, enBody]]
const SOLUTIONS = [["wind", ["Loftræsing / Húskerfi", "Ventilation / Building systems"], ["Stýringar fyrir loftræsikerfi og hússtjórnunarkerfi.", "Controls for ventilation and building-management systems."]], ["flame", ["Brunalokukerfi", "Fire-damper systems"], ["Stýring og vöktun brunaloka með sjálfvirkum prófunum og stöðuvöktun.", "Control and monitoring of fire dampers with automatic testing and status monitoring."]], ["droplet", ["Sundlauga- og pottakerfi", "Pool & hot-tub systems"], ["Stýringar fyrir sundlaugar og potta, hitastýring, hringrás og efnaskömmtun.", "Controls for swimming pools and hot tubs, temperature, circulation and chemical dosing."]], ["bulb", ["KNX / DALI", "KNX / DALI"], ["Snjallar stýringar fyrir lýsingu og húsbúnað byggðar á KNX og DALI stöðlum.", "Smart lighting and building controls based on the KNX and DALI standards."]]];

// [isLabel, enLabel]
const CHIPS = [["Hönnun stjórnkerfa", "Control-system design"], ["Stýriteikningar", "Control drawings"], ["Iðntölvuforritun", "PLC programming"], ["Skjámyndakerfi", "HMI/SCADA systems"], ["Gangsetning og prófanir", "Commissioning & testing"], ["Ráðgjöf", "Consulting"]];
function SystemScheme() {
  const mono = {
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    letterSpacing: "0.1em"
  };
  const boxIt = (x, title, sub) => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: "78",
    width: "240",
    height: "92",
    rx: "10",
    fill: "var(--surface-card)",
    stroke: "var(--border)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: x + 120,
    y: "140",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 13
    },
    fill: "var(--text-strong)"
  }, title), /*#__PURE__*/React.createElement("text", {
    x: x + 120,
    y: "159",
    textAnchor: "middle",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11
    },
    fill: "var(--text-muted)"
  }, sub));
  const arrow = x => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: "124",
    x2: x + 60,
    y2: "124",
    stroke: "var(--accent)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${x + 60} 124l-9 -5v10z`,
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${x} 124l9 -5v10z`,
    fill: "var(--accent)"
  }));
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 920 178",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, boxIt(20, L("TÆKI OG BÚNAÐUR", "FIELD DEVICES"), L("viftur · dælur · lokar · skynjarar", "fans · pumps · valves · sensors")), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: "140px 106px",
      animation: "andorSpin 3.2s linear infinite"
    }
  }, [0, 120, 240].map(a => /*#__PURE__*/React.createElement("path", {
    key: a,
    d: "M140 106 C136 100 137 95 140 92 C143 95 144 100 140 106 Z",
    fill: "var(--accent)",
    opacity: "0.75",
    transform: `rotate(${a} 140 106)`
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "106",
    r: "11",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "1.5",
    opacity: ".5"
  }), arrow(266), boxIt(340, L("IÐNTÖLVA (PLC)", "PLC CONTROLLER"), L("stjórnskápur · Siemens", "control cabinet · Siemens")), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "440",
    y: "91",
    width: "40",
    height: "24",
    rx: "2.5",
    fill: "var(--surface-card)",
    stroke: "var(--accent)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "453",
    y1: "91",
    x2: "453",
    y2: "115",
    stroke: "var(--accent)",
    strokeWidth: "1",
    opacity: ".45"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "446",
    cy: "97",
    r: "1.4",
    fill: "#3fb96b",
    style: {
      animation: "andorBlink 1.4s steps(1) infinite"
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "450",
    cy: "97",
    r: "1.4",
    fill: "var(--accent)",
    style: {
      animation: "andorBlink 2.1s steps(1) infinite .6s"
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: "444",
    y: "103",
    width: "6",
    height: "8",
    rx: "1",
    fill: "var(--accent)",
    opacity: ".35"
  }), [458, 463, 468, 473].map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    x1: x,
    y1: "96",
    x2: x,
    y2: "110",
    stroke: "var(--accent)",
    strokeWidth: "1.5",
    opacity: ".7"
  })), [444, 450, 456, 462, 468, 474].map(x => /*#__PURE__*/React.createElement("line", {
    key: "b" + x,
    x1: x,
    y1: "115",
    x2: x,
    y2: "119",
    stroke: "var(--accent)",
    strokeWidth: "1.5"
  }))), arrow(586), boxIt(660, L("SKJÁMYNDAKERFI", "HMI / SCADA"), L("mySCADA · vöktun og stýring", "mySCADA · monitoring & control")), /*#__PURE__*/React.createElement("rect", {
    x: "767",
    y: "95",
    width: "26",
    height: "17",
    rx: "2.5",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M771 107 L776 101 L780 104.5 L789 99",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      animation: "andorPulse 2.6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "789",
    cy: "99",
    r: "1.4",
    fill: "#3fb96b",
    style: {
      animation: "andorBlink 1.4s steps(1) infinite .4s"
    }
  }), /*#__PURE__*/React.createElement("line", {
    x1: "776",
    y1: "116",
    x2: "784",
    y2: "116",
    stroke: "var(--accent)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "780",
    y1: "78",
    x2: "780",
    y2: "40",
    stroke: "var(--accent)",
    strokeWidth: "2",
    strokeDasharray: "6 5",
    style: {
      animation: "andorDash 1.6s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: "780",
    y: "26",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 10.5
    },
    fill: "var(--text-muted)"
  }, L("VAFRI · SÍMI · STJÓRNSTÖÐ", "BROWSER · PHONE · CONTROL ROOM")));
}
function StjornkerfiPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    art: "../../assets/styriteikning-daemi.png",
    tag: L("Stjórnkerfi", "Control systems"),
    title: L("Sérsniðin stjórnkerfi fyrir stór og smá verkefni", "Custom control systems for projects large and small"),
    intro: /*#__PURE__*/React.createElement(React.Fragment, null, L("Starfsmenn AndOr hafa margra ára reynslu af hönnun stjórnkerfa. Notast er við Siemens iðntölvubúnað og skjámyndakerfi frá mySCADA. AndOr sér um hönnun stjórnkerfis, stýriteikningar og allt að gangsetningu.", "AndOr's staff have years of experience in control-system design. We use Siemens PLC hardware and mySCADA HMI systems. AndOr handles control-system design, control drawings and everything through to commissioning."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-body)"
      }
    }, L("Finnum saman lausn fyrir þitt kerfi.", "Let's find the right solution for your system.")))
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: L("Okkar lausnir", "Our solutions"),
    lead: L("Við hönnum stjórnkerfi fyrir margs konar rekstur.", "We design control systems for many kinds of operations.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "22px 26px",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
      marginTop: 30
    }
  }, SOLUTIONS.map(([icon, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title[0],
    style: {
      display: "flex",
      gap: 13,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--accent)",
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "0.98rem",
      margin: "0 0 4px",
      color: "var(--text-strong)"
    }
  }, L(title[0], title[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.88rem",
      margin: 0
    }
  }, L(body[0], body[1])))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("verkefni")
  }, L("Sjá dæmi um okkar lausnir →", "See examples of our work →"))))), /*#__PURE__*/React.createElement(ScadaShowcase, null), /*#__PURE__*/React.createElement(CtaStrip, {
    onNav: onNav,
    title: L("Hafa samband fyrir frekari upplýsingar", "Contact us for more information"),
    text: L("Við hönnum stjórnkerfi sniðin að þínum þörfum.", "We design control systems tailored to your needs.")
  }));
}

// [name, [isBody, enBody]]
const SOFTWARE = [["myPRO", ["HMI / SCADA hugbúnaðurinn sjálfur, keyrir á Windows, Linux og macOS, og er innbyggður í myBOX og myPANEL.", "The HMI / SCADA software itself, runs on Windows, Linux and macOS, and comes built into myBOX and myPANEL."]], ["myDESIGNER", ["Hönnunarforrit fyrir skjámyndakerfin. Frítt fyrir alla notendur.", "Design software for the screens. Free for all users."]], ["myREPORTS", ["Hentug leið til skýrslugerðar úr rauntímagögnum.", "A convenient way to generate reports from real-time data."]]];

// --- mySCADA vörur: myBOX og myPANEL ---

const specChip = {
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-pill)",
  padding: "6px 14px",
  fontSize: "0.82rem",
  whiteSpace: "nowrap",
  color: "var(--text-body)",
  background: "var(--bg-alt)",
  fontFamily: "var(--font-mono)"
};
function MyBoxScheme() {
  const mono = {
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    letterSpacing: "0.08em"
  };
  const sans = {
    fontFamily: "var(--font-sans)"
  };

  // Cloud glyph centered at (cx, cy)
  const Cloud = ({
    cx,
    cy
  }) => /*#__PURE__*/React.createElement("path", {
    d: `M${cx - 30} ${cy + 8} a13 13 0 0 1 2 -25 a17 17 0 0 1 32 -5 a12 12 0 0 1 12 12 a11 11 0 0 1 -3 18 Z`,
    fill: "var(--surface-card)",
    stroke: "var(--accent)",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  });
  // Monitor glyph
  const Monitor = ({
    cx,
    cy
  }) => /*#__PURE__*/React.createElement("g", {
    stroke: "var(--accent)",
    strokeWidth: "1.8",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: cx - 15,
    y: cy - 11,
    width: "30",
    height: "20",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx - 5,
    y1: cy + 9,
    x2: cx - 5,
    y2: cy + 14
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx + 5,
    y1: cy + 9,
    x2: cx + 5,
    y2: cy + 14
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx - 9,
    y1: cy + 14,
    x2: cx + 9,
    y2: cy + 14
  }));
  // Phone glyph
  const Phone = ({
    cx,
    cy
  }) => /*#__PURE__*/React.createElement("g", {
    stroke: "var(--accent)",
    strokeWidth: "1.8",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: cx - 8,
    y: cy - 13,
    width: "16",
    height: "26",
    rx: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx - 2,
    y1: cy + 9,
    x2: cx + 2,
    y2: cy + 9
  }));
  // Firewall / shield glyph
  const Shield = ({
    cx,
    cy
  }) => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: `M${cx} ${cy - 13} L${cx + 11} ${cy - 8} V${cy + 1} a11 13 0 0 1 -11 12 a11 13 0 0 1 -11 -12 V${cy - 8} Z`,
    fill: "var(--surface-card)",
    stroke: "var(--accent)",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${cx - 6} ${cy - 2} l4 4 l8 -8`,
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  // PLC module glyph at top-left (x,y), ~34x26
  const PlcGlyph = ({
    x,
    y
  }) => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: "34",
    height: "26",
    rx: "3",
    fill: "var(--surface-card)",
    stroke: "var(--accent)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: x + 10,
    y1: y,
    x2: x + 10,
    y2: y + 26,
    stroke: "var(--accent)",
    strokeWidth: "0.9",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x + 5,
    cy: y + 6,
    r: "1.5",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x + 5,
    cy: y + 12,
    r: "1.5",
    fill: "var(--accent)",
    opacity: ".45"
  }), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: x + 15 + i * 4.5,
    y1: y + 5,
    x2: x + 15 + i * 4.5,
    y2: y + 20,
    stroke: "var(--accent)",
    strokeWidth: "1.4",
    opacity: ".7"
  })), [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("line", {
    key: "b" + i,
    x1: x + 5 + i * 6,
    y1: y + 26,
    x2: x + 5 + i * 6,
    y2: y + 29,
    stroke: "var(--accent)",
    strokeWidth: "1.3"
  })));
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 820 372",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    },
    role: "img",
    "aria-label": "myBOX network topology"
  }, /*#__PURE__*/React.createElement(Monitor, {
    cx: 392,
    cy: 20
  }), /*#__PURE__*/React.createElement(Phone, {
    cx: 436,
    cy: 20
  }), /*#__PURE__*/React.createElement("text", {
    x: "410",
    y: "52",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 10.5
    },
    fill: "var(--text-muted)"
  }, L("VAFRI · SÍMI · SPJALDTÖLVA", "BROWSER · PHONE · TABLET")), /*#__PURE__*/React.createElement("line", {
    x1: "410",
    y1: "60",
    x2: "410",
    y2: "140",
    stroke: "var(--accent)",
    strokeWidth: "2",
    strokeDasharray: "5 5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "410",
    y1: "160",
    x2: "410",
    y2: "212",
    stroke: "var(--accent)",
    strokeWidth: "2",
    strokeDasharray: "5 5"
  }), /*#__PURE__*/React.createElement(Cloud, {
    cx: 410,
    cy: 102
  }), /*#__PURE__*/React.createElement("rect", {
    x: "368",
    y: "140",
    width: "84",
    height: "20",
    rx: "10",
    fill: "var(--surface-card)",
    stroke: "var(--accent)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "410",
    y: "154",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 10
    },
    fill: "var(--accent)"
  }, "VPN \xB7 4G/LTE"), /*#__PURE__*/React.createElement("rect", {
    x: "338",
    y: "212",
    width: "144",
    height: "66",
    rx: "10",
    fill: "var(--surface-card)",
    stroke: "var(--accent)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "356",
    cy: "226",
    r: "2.4",
    fill: "#3fb96b"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "365",
    cy: "226",
    r: "2.4",
    fill: "var(--accent)",
    opacity: ".6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "410",
    y: "247",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 17,
      letterSpacing: "0.02em"
    },
    fill: "var(--text-strong)"
  }, "myBOX"), /*#__PURE__*/React.createElement("text", {
    x: "410",
    y: "266",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 8.5
    },
    fill: "var(--text-muted)"
  }, L("SCADA-ÞJÓNN + BEINIR", "SCADA SERVER + ROUTER")), /*#__PURE__*/React.createElement("line", {
    x1: "205",
    y1: "245",
    x2: "338",
    y2: "245",
    stroke: "var(--accent)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "312",
    y: "237",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 9
    },
    fill: "var(--text-muted)"
  }, "LAN 2"), /*#__PURE__*/React.createElement(Shield, {
    cx: 275,
    cy: 245
  }), /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "212",
    width: "165",
    height: "96",
    rx: "10",
    fill: "none",
    stroke: "var(--border)",
    strokeWidth: "1.5",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "122",
    y: "234",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 10
    },
    fill: "var(--text-strong)"
  }, L("NET STJÓRNENDA", "OPERATOR NETWORK")), /*#__PURE__*/React.createElement(Monitor, {
    cx: 98,
    cy: 266
  }), /*#__PURE__*/React.createElement(Monitor, {
    cx: 146,
    cy: 266
  }), /*#__PURE__*/React.createElement("text", {
    x: "122",
    y: "298",
    textAnchor: "middle",
    style: {
      ...sans,
      fontSize: 10
    },
    fill: "var(--text-muted)"
  }, L("Tölvur / vinnustöðvar", "PCs / workstations")), /*#__PURE__*/React.createElement("line", {
    x1: "482",
    y1: "245",
    x2: "600",
    y2: "245",
    stroke: "var(--accent)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "508",
    y: "237",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 9
    },
    fill: "var(--text-muted)"
  }, "LAN 1"), /*#__PURE__*/React.createElement(Shield, {
    cx: 545,
    cy: 245
  }), /*#__PURE__*/React.createElement("line", {
    x1: "600",
    y1: "192",
    x2: "600",
    y2: "298",
    stroke: "var(--accent)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "600",
    cy: "245",
    r: "3.5",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "600",
    y: "180",
    textAnchor: "middle",
    style: {
      ...mono,
      fontSize: 10
    },
    fill: "var(--text-strong)"
  }, L("TÆKNINET", "TECHNOLOGY NET")), /*#__PURE__*/React.createElement("line", {
    x1: "600",
    y1: "245",
    x2: "640",
    y2: "245",
    stroke: "var(--accent)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement(PlcGlyph, {
    x: 640,
    y: 232
  }), /*#__PURE__*/React.createElement("text", {
    x: "684",
    y: "249",
    style: {
      ...mono,
      fontSize: 10.5
    },
    fill: "var(--text-strong)"
  }, L("IÐNTÖLVUR OG TÆKI", "PLCS AND DEVICES")), /*#__PURE__*/React.createElement("text", {
    x: "712",
    y: "286",
    textAnchor: "middle",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10.5
    },
    fill: "var(--text-muted)"
  }, "Siemens S7 \xB7 Modbus TCP \xB7 EtherNet/IP"), /*#__PURE__*/React.createElement("text", {
    x: "410",
    y: "356",
    textAnchor: "middle",
    style: {
      ...sans,
      fontSize: 11
    },
    fill: "var(--text-muted)"
  }, L("Aðskilin net, innbyggður eldveggur og öruggur fjaraðgangur um VPN.", "Separated networks, built-in firewall and secure remote access over VPN.")));
}

// Stærðir myPANEL: [tómmur, breidd-hlutfall]
const PANEL_SIZES = [7, 10, 11, 13, 15];
function PanelSizes() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 12,
      flexWrap: "nowrap",
      marginTop: 22
    }
  }, PANEL_SIZES.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      textAlign: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: t * 6.6,
      height: t * 6.6 * 9 / 16,
      border: "1.5px solid var(--border)",
      borderRadius: 4,
      background: "var(--bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 3,
      borderRadius: 2,
      background: "var(--accent-soft)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.74rem",
      color: "var(--text-muted)",
      marginTop: 7
    }
  }, t, "\u2033"))));
}
function ProductFeature({
  kicker,
  name,
  tagline,
  body,
  specs,
  image,
  imageAlt,
  flip,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 40,
      gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
      alignItems: "center",
      direction: flip ? "rtl" : "ltr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      direction: "ltr",
      background: "var(--bg-alt)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 300
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      maxWidth: "100%",
      maxHeight: 320,
      objectFit: "contain",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: "ltr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.8rem",
      fontWeight: 600,
      letterSpacing: "0.14em",
      color: "var(--accent)",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.6rem",
      color: "var(--text-strong)",
      marginBottom: 6
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-body)",
      marginBottom: 12
    }
  }, tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.95rem",
      margin: 0
    }
  }, body), children, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 20
    }
  }, specs.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: specChip
  }, s)))));
}
function ProductsSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: L("Sala og þjónusta", "Sales & service"),
    title: L("Búnaður frá mySCADA", "mySCADA hardware"),
    lead: L("AndOr selur og þjónustar mySCADA búnað á Íslandi, myBOX þjóna og myPANEL snertiskjái, og aðstoðar við val á réttri lausn, uppsetningu og rekstur.", "AndOr sells and services mySCADA hardware in Iceland, myBOX servers and myPANEL touchscreens, and helps you choose, install and run the right solution.")
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 50
    }
  }, /*#__PURE__*/React.createElement(ProductFeature, {
    kicker: L("SCADA-þjónn og beinir í einu tæki", "SCADA server & router in one device"),
    name: "myBOX",
    tagline: L("Fullbúið skjámyndakerfi án þess að þarfnist sérstakrar tölvu", "A complete HMI/SCADA system with no dedicated computer needed"),
    body: L("myBOX sameinar iðnaðarbeini og SCADA-þjón í einu netta tæki á DIN-skinnu. Það tengist beint við iðntölvurnar á tækninetinu, heldur neti stjórnenda aðskildu á hinu Ethernet-tenginu og veitir öruggan fjaraðgang um innbyggt VPN. 4G/LTE getur verið aðaltenging eða sjálfvirk varaleið, og innbyggður eldveggur stýrir aðgangi að netum og tækjum.", "myBOX combines an industrial router and a SCADA server in one compact DIN-rail device. It connects directly to the PLCs on the technology network, keeps the operator network separate on the second Ethernet port, and provides secure remote access over built-in VPN. 4G/LTE can serve as the primary link or an automatic backup, and the built-in firewall controls access between networks and devices."),
    specs: [L("4 kjarna CPU · 2,4 GHz", "4-core CPU · 2.4 GHz"), "8 GB RAM · 64 GB eMMC", "2× Ethernet", "2× RS485 · 2× RS232", "Wi-Fi 2,4/5 GHz", "4G LTE", L("VPN + eldveggur", "VPN + firewall"), "−25…+60 °C", L("DIN-skinna", "DIN-rail"), "9–36V DC"],
    image: "../../assets/mybox-render.png",
    imageAlt: "mySCADA myBOX"
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      background: "var(--bg-alt)",
      padding: "30px 30px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      fontWeight: 600,
      letterSpacing: "0.14em",
      color: "var(--text-muted)",
      textTransform: "uppercase",
      marginBottom: 18
    }
  }, L("Svona tengist myBOX", "How myBOX connects")), /*#__PURE__*/React.createElement(MyBoxScheme, null))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 70
    }
  }, /*#__PURE__*/React.createElement(ProductFeature, {
    flip: true,
    kicker: L("Snertiskjár fyrir stjórnendur", "Operator touchscreen"),
    name: "myPANEL",
    tagline: L("Skjámyndakerfið og stjórnborðið í einum skjá", "The HMI system and control panel in a single display"),
    body: L("myPANEL er iðnaðarsnertiskjár með myPRO skjámyndakerfinu innbyggðu. Viðvörunarkerfi, ferilrit og fjaraðgangur fylgja með. Skjárinn tengist annaðhvort beint við iðntölvurnar eða gegnum SCADA-þjón (myBOX/myPRO), og skiptir sjálfkrafa yfir í beina tengingu ef samband við þjóninn rofnar. Fáanlegur í fimm stærðum.", "myPANEL is an industrial touchscreen with the myPRO HMI system built in. Alarms, trends and remote access included. It connects either directly to the PLCs or through a SCADA server (myBOX/myPRO), switching automatically to direct communication if the server connection fails. Available in five sizes."),
    specs: [L("Snertiskjár 7–15″", "7–15″ touchscreen"), L("Upplausn allt að 1920×1080", "Up to 1920×1080"), "4 GB RAM · 32 GB eMMC", "Siemens S7 · Modbus · OPC UA", "Wi-Fi 2,4/5 GHz", "−20…+60 °C", "9–36V DC"],
    image: "../../assets/MyPanel.webp",
    imageAlt: "mySCADA myPANEL"
  }, /*#__PURE__*/React.createElement(PanelSizes, null)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      fontWeight: 600,
      letterSpacing: "0.14em",
      color: "var(--text-muted)",
      textTransform: "uppercase",
      marginBottom: 18
    }
  }, L("Hugbúnaður", "Software")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18,
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))"
    }
  }, SOFTWARE.map(([name, body]) => /*#__PURE__*/React.createElement(Card, {
    key: name
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--accent)",
      fontSize: "1rem",
      marginBottom: 6
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.9rem",
      margin: 0
    }
  }, L(body[0], body[1]))))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 34,
      color: "var(--text-muted)"
    }
  }, L("Frekari upplýsingar um mySCADA:", "More about mySCADA:"), " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.myscada.org",
    target: "_blank",
    rel: "noopener"
  }, "www.myscada.org"))));
}
function Panel({
  label,
  right,
  alert,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: alert ? "1px solid rgba(229,72,77,.6)" : "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      transition: "border-color .3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      padding: "10px 16px",
      borderBottom: "1px solid var(--border)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      color: "var(--text-muted)",
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), right), children);
}
function Lamp({
  on,
  color,
  blink,
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      flex: "none",
      background: on ? color : "var(--border)",
      boxShadow: on ? `0 0 9px ${color}` : "none",
      animation: on ? blink ? "andorBlink .85s steps(1) infinite" : "andorPulse 2.4s ease-in-out infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: on ? "var(--text-strong)" : "var(--text-muted)"
    }
  }, label));
}
const hmiStepBtn = {
  width: 34,
  height: 34,
  border: "none",
  background: "transparent",
  color: "var(--accent)",
  fontSize: "1.15rem",
  cursor: "pointer",
  fontFamily: "var(--font-mono)",
  lineHeight: 1
};
const hmiGhostBtn = {
  border: "1px solid var(--border)",
  background: "transparent",
  color: "var(--text-muted)",
  borderRadius: "var(--radius-pill)",
  padding: "9px 16px",
  fontFamily: "var(--font-sans)",
  fontSize: "0.86rem",
  fontWeight: 600,
  cursor: "pointer"
};
function HmiDemo() {
  const [run, setRun] = React.useState(false);
  const [sp, setSp] = React.useState(21);
  const [alarm, setAlarm] = React.useState(false);
  const [sim, setSim] = React.useState({
    supply: 8.4,
    fan: 0,
    out: 8.0,
    hist: []
  });
  const [events, setEvents] = React.useState([]);
  const refs = React.useRef({
    run: false,
    sp: 21,
    alarm: false,
    at: 0
  });
  refs.current.run = run;
  refs.current.sp = sp;
  refs.current.alarm = alarm;
  const logEvent = (msg, kind) => {
    const t = new Date().toLocaleTimeString("is-IS", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    setEvents(ev => [{
      t,
      msg,
      kind
    }, ...ev].slice(0, 6));
  };
  React.useEffect(() => {
    const id = setInterval(() => {
      setSim(s => {
        const out = 8 + Math.sin(Date.now() / 9000) * 1.3;
        const target = refs.current.run ? refs.current.sp : out;
        const supply = s.supply + (target - s.supply) * 0.15 + (Math.random() - 0.5) * 0.09;
        const fan = Math.max(0, Math.min(100, s.fan + (refs.current.run ? 9 : -14)));
        return {
          supply,
          fan,
          out,
          hist: [...s.hist, supply].slice(-72)
        };
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
  const stepSp = d => setSp(v => Math.max(15, Math.min(27, Math.round((v + d) * 2) / 2)));
  const heat = run && sim.supply < sp - 0.3;
  const flowing = run && sim.fan > 10;
  const spinDur = sim.fan >= 60 ? "0.55s" : "1.5s";
  const ty = t => 115 - (t - 5) / 24 * 110;
  const n = sim.hist.length;
  const pts = n >= 2 ? sim.hist.map((v, i) => `${(300 - (n - 1 - i) * (300 / 71)).toFixed(1)},${ty(v).toFixed(1)}`).join(" ") : null;
  const readout = (x, anchor, label, value, color) => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("text", {
    x: x,
    y: "192",
    textAnchor: anchor,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: "0.12em"
    },
    fill: "var(--text-muted)"
  }, label), /*#__PURE__*/React.createElement("text", {
    x: x,
    y: "215",
    textAnchor: anchor,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 18,
      fontWeight: 700
    },
    fill: color || "var(--text-strong)"
  }, value));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18,
      gridTemplateColumns: "1.6fr 1fr",
      marginTop: 42
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    alert: alarm,
    label: L("stjórnmynd, loftræsikerfi", "control view, ventilation"),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Lamp, {
      on: run && sim.fan > 5,
      color: "#3fb96b",
      label: L("Í GANGI", "RUN")
    }), /*#__PURE__*/React.createElement(Lamp, {
      on: alarm,
      color: "#e5484d",
      blink: true,
      label: L("VIÐVÖRUN", "ALARM")
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "16px 16px 4px",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 224",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "96",
    width: "528",
    height: "58",
    fill: "rgba(79,159,216,.05)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 96H544M16 154H544M16 96V154",
    stroke: "var(--border)",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 103l-9 9M40 103l-19 19M50 103l-24 24M50 113l-19 19M50 123l-9 9",
    stroke: "var(--text-muted)",
    strokeWidth: "1.5",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "96",
    y: "82",
    textAnchor: "middle",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: "0.12em"
    },
    fill: "var(--text-muted)"
  }, L("SPJALDLOKA", "DAMPER")), /*#__PURE__*/React.createElement("g", {
    style: {
      transition: "transform 1.1s cubic-bezier(.4,0,.2,1)",
      transform: `rotate(${run ? 62 : 0}deg)`,
      transformOrigin: "96px 125px"
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "96",
    y1: "101",
    x2: "96",
    y2: "149",
    stroke: "var(--accent)",
    strokeWidth: "5",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "96",
    cy: "125",
    r: "4",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "230",
    y: "72",
    textAnchor: "middle",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: "0.12em"
    },
    fill: "var(--text-muted)"
  }, L("VIFTA", "FAN")), /*#__PURE__*/React.createElement("circle", {
    cx: "230",
    cy: "125",
    r: "36",
    fill: "var(--surface-card)",
    stroke: "var(--border)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      animation: `andorSpin ${spinDur} linear infinite`,
      animationPlayState: sim.fan > 2 ? "running" : "paused",
      transformOrigin: "230px 125px"
    }
  }, [0, 120, 240].map(a => /*#__PURE__*/React.createElement("path", {
    key: a,
    d: "M230 125 C221 112 223 100 230 94 C237 100 239 112 230 125 Z",
    fill: "var(--accent)",
    opacity: "0.9",
    transform: `rotate(${a} 230 125)`
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "230",
    cy: "125",
    r: "6",
    fill: "var(--surface-card)",
    stroke: "var(--accent)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "361",
    y: "82",
    textAnchor: "middle",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: "0.12em"
    },
    fill: "var(--text-muted)"
  }, L("HITARI", "HEATER")), /*#__PURE__*/React.createElement("path", {
    d: "M336 102 L346 148 L356 102 L366 148 L376 102 L386 148",
    fill: "none",
    stroke: heat ? "#e5744d" : "var(--text-muted)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    opacity: heat ? 1 : 0.45,
    style: {
      transition: "stroke .5s, opacity .5s",
      filter: heat ? "drop-shadow(0 0 6px rgba(229,116,77,.75))" : "none"
    }
  }), [150, 296, 452].map((x, i) => /*#__PURE__*/React.createElement("path", {
    key: x,
    d: `M${x} 112l12 13-12 13`,
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: flowing ? 0.9 : 0.12,
      transition: "opacity .4s",
      animation: flowing ? `andorFlow 1.1s linear infinite ${i * 0.18}s` : "none"
    }
  })), readout(20, "start", L("ÚTI", "OUTDOOR"), `${sim.out.toFixed(1)}°C`, null), readout(196, "middle", L("VIFTA", "FAN"), `${Math.round(sim.fan)}%`, null), readout(352, "middle", L("ÓSKGILDI", "SETPOINT"), `${sp.toFixed(1)}°C`, null), readout(544, "end", L("INNBLÁSTUR", "SUPPLY"), `${sim.supply.toFixed(1)}°C`, alarm ? "#e5484d" : "var(--accent)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      alignItems: "center",
      padding: "14px 16px",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: toggleRun,
    variant: run ? "ghost" : undefined
  }, run ? L("Stöðva kerfi", "Stop system") : L("Ræsa kerfi", "Start system")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => stepSp(-0.5),
    "aria-label": "-",
    style: hmiStepBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "0 6px",
      fontFamily: "var(--font-mono)",
      fontSize: "0.86rem",
      color: "var(--text-strong)",
      minWidth: 88,
      textAlign: "center"
    }
  }, L("Ósk", "Set"), " ", sp.toFixed(1), "\xB0C"), /*#__PURE__*/React.createElement("button", {
    onClick: () => stepSp(0.5),
    "aria-label": "+",
    style: hmiStepBtn
  }, "+")), /*#__PURE__*/React.createElement("button", {
    onClick: testAlarm,
    disabled: alarm,
    style: {
      ...hmiGhostBtn,
      opacity: alarm ? 0.45 : 1
    }
  }, L("Prófa viðvörun", "Test alarm")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    label: L("ferilrit, innblásturshiti", "trend, supply temp"),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent)",
        fontWeight: 700
      }
    }, sim.supply.toFixed(1), "\xB0C")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "12px 12px 10px",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 120",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: 128,
      display: "block"
    }
  }, [15, 60, 105].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    x2: "300",
    y1: y,
    y2: y,
    stroke: "var(--border)",
    strokeWidth: "1",
    opacity: "0.55"
  })), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    x2: "300",
    y1: ty(sp),
    y2: ty(sp),
    stroke: "var(--accent)",
    strokeWidth: "1",
    strokeDasharray: "5 5",
    opacity: "0.5"
  }), pts && /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke"
  }), n > 0 && /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: ty(sim.hist[n - 1]),
    r: "3.5",
    fill: "var(--accent)"
  })))), /*#__PURE__*/React.createElement(Panel, {
    alert: alarm,
    label: L("atburðir / viðvaranir", "events / alarms"),
    right: alarm ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#e5484d",
        fontWeight: 700
      }
    }, L("VIRK", "ACTIVE")) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 128,
      padding: "10px 14px",
      background: "var(--bg)",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      justifyContent: events.length ? "flex-start" : "center"
    }
  }, events.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      color: "var(--text-muted)",
      textAlign: "center",
      opacity: 0.7
    }
  }, L("engir atburðir, ræstu kerfið", "no events, start the system")), events.slice(0, 4).map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.t + e.msg + i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontSize: "0.8rem",
      opacity: i === 0 ? 1 : 0.72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      flex: "none",
      background: e.kind === "alarm" ? "#e5484d" : e.kind === "ok" ? "#3fb96b" : "var(--accent)",
      boxShadow: e.kind === "alarm" ? "0 0 7px rgba(229,72,77,.8)" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-muted)",
      flex: "none"
    }
  }, e.t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: e.kind === "alarm" ? "#e5484d" : "var(--text-body)",
      fontWeight: e.kind === "alarm" ? 600 : 400
    }
  }, e.msg))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      color: "var(--text-muted)",
      opacity: 0.7
    }
  }, L("Gagnvirkt sýnidæmi, ekki raunveruleg gögn", "Interactive demo, not real data")));
}
const MiniIcon = ({
  children
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    flex: "none",
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "var(--accent-soft)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  style: {
    width: 21,
    height: 21
  },
  fill: "none",
  stroke: "var(--accent)",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children));

// [src, [isTitle,enTitle], [isCap,enCap]]
const SHOTS = [["../../assets/scada-sundlaug.png", ["Sundlaug, hússtjórnunarkerfi", "Swimming pool, building control system"], ["Yfirlitsmynd með hitastýringu, efnaskömmtun (klór/pH) og sögulegu línuriti.", "Overview with temperature control, chemical dosing (chlorine/pH) and a historical trend."]], ["../../assets/scada-loftraesing.png", ["Loftræsing salur, íþróttahús", "Ventilation, sports hall"], ["Loftmeðhöndlun með frískun, hitaendurvinnslu og rauntímavöktun rýma.", "Air handling with free cooling, heat recovery and real-time zone monitoring."]], ["../../assets/scada-brunalokur.png", ["Brunalokur, skólabygging", "Fire dampers, school building"], ["Staða og sjálfvirkar prófanir á brunalokum í heilli álmu, með viðvörunum og handvirkri prófun.", "Status and automatic testing of fire dampers across a wing, with alarms and manual test."]], ["../../assets/scada-buningsklefar.png", ["Búningsklefar, hússtjórnun", "Changing rooms, building control"], ["Lýsing, sturtur og gólfhiti í fjórum búningsklefum á einni mynd.", "Lighting, showers and floor heating for four changing rooms on one screen."]], ["../../assets/scada-badvatn.png", ["Baðvatn og sturtur", "Shower-water system"], ["Hitastýring baðvatns með varmaskipti, hringrás og handvirkri upphitun á sturtum.", "Shower-water temperature control with heat exchanger, circulation and manual boost."]], ["../../assets/scada-kennslustofa.png", ["Lýsingarstýring, kennslustofur", "Lighting control, classrooms"], ["Birtustig og senur (kennsla/TV) fyrir hverja stofu, stýrt af einni mynd.", "Dimming levels and scenes (teaching/TV) per classroom, controlled from one screen."]]];
function Lightbox({
  shot,
  onClose
}) {
  React.useEffect(() => {
    if (!shot) return;
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [shot]);
  if (!shot) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "rgba(6,10,18,.88)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      cursor: "zoom-out",
      animation: "andorFade .2s ease"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Loka",
    style: {
      position: "absolute",
      top: 20,
      right: 24,
      width: 42,
      height: 42,
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,.25)",
      background: "rgba(255,255,255,.08)",
      color: "#fff",
      fontSize: "1.4rem",
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("img", {
    src: shot[0],
    alt: L(shot[1][0], shot[1][1]),
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: "min(1400px, 96vw)",
      maxHeight: "82vh",
      width: "auto",
      borderRadius: 8,
      border: "1px solid rgba(79,159,216,.4)",
      boxShadow: "0 30px 80px rgba(0,0,0,.6)",
      cursor: "default",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      textAlign: "center",
      color: "#c7d2e2",
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "#fff",
      marginBottom: 4
    }
  }, L(shot[1][0], shot[1][1])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.9rem"
    }
  }, L(shot[2][0], shot[2][1]))));
}
function ScreenshotGallery() {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: L("Úr verkefnum AndOr", "From AndOr projects"),
    title: L("Skjámyndakerfi sem við höfum skilað", "HMI screens we have delivered"),
    lead: L("Smelltu á mynd til að stækka.", "Click an image to enlarge.")
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22,
      gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
      marginTop: 42
    }
  }, SHOTS.map(shot => /*#__PURE__*/React.createElement("figure", {
    key: shot[0],
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(shot),
    style: {
      display: "block",
      width: "100%",
      padding: 0,
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "#8a939c",
      cursor: "zoom-in",
      position: "relative"
    },
    onMouseEnter: e => {
      const im = e.currentTarget.querySelector("img");
      if (im) im.style.transform = "scale(1.03)";
      const ov = e.currentTarget.querySelector("[data-ov]");
      if (ov) ov.style.opacity = "1";
    },
    onMouseLeave: e => {
      const im = e.currentTarget.querySelector("img");
      if (im) im.style.transform = "scale(1)";
      const ov = e.currentTarget.querySelector("[data-ov]");
      if (ov) ov.style.opacity = "0";
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: shot[0],
    alt: L(shot[1][0], shot[1][1]),
    style: {
      width: "100%",
      display: "block",
      transition: "transform .5s cubic-bezier(.2,.8,.2,1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "data-ov": true,
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(transparent 55%, rgba(6,10,18,.55))",
      opacity: 0,
      transition: "opacity .3s",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "data-ov": true,
    style: {
      position: "absolute",
      bottom: 12,
      right: 12,
      opacity: 0,
      transition: "opacity .3s",
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "0.74rem",
      color: "#fff",
      background: "rgba(79,159,216,.85)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 12px",
      pointerEvents: "none"
    }
  }, L("Stækka", "Enlarge"), " \u2922")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)",
      fontSize: "1.02rem"
    }
  }, L(shot[1][0], shot[1][1])), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.9rem",
      marginTop: 3
    }
  }, L(shot[2][0], shot[2][1])))))))), /*#__PURE__*/React.createElement(Lightbox, {
    shot: open,
    onClose: () => setOpen(null)
  }));
}
function ScadaShowcase() {
  const minis = [[/*#__PURE__*/React.createElement(React.Fragment, {
    key: "m"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 17v4M6 12l3-3 2 2 4-4"
  })), ["Rauntímavöktun", "Real-time monitoring"], ["Staða alls kerfisins á einum stað, uppfærð í rauntíma.", "The state of the whole system in one place, updated in real time."]], [/*#__PURE__*/React.createElement(React.Fragment, {
    key: "b"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })), ["Viðvaranir", "Alarms"], ["Viðvaranir og atburðaskráning þegar frávik koma upp.", "Alarms and event logging whenever something deviates."]], [/*#__PURE__*/React.createElement(React.Fragment, {
    key: "c"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14l4-4 3 3 5-6"
  })), ["Ferilrit og skýrslur", "Trends & reports"], ["Söguleg gögn, ferilrit og skýrslugerð með myREPORTS.", "Historical data, trends and reporting with myREPORTS."]], [/*#__PURE__*/React.createElement(React.Fragment, {
    key: "p"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "2",
    width: "10",
    height: "20",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18h2"
  })), ["Aðgangur hvar sem er", "Access anywhere"], ["Í vafra, síma og spjaldtölvu, öruggur fjaraðgangur.", "In a browser, phone or tablet, with secure remote access."]]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: L("Stjórnkerfi í grunninn", "Control systems 101"),
    title: L("Svona virkar stjórnkerfi", "How a control system works"),
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, L("Iðntölvan les skynjarana og stýrir búnaðinum, skjámyndakerfið gefur yfirsýn og aðgang hvar sem er.", "The PLC reads the sensors and controls the equipment, the HMI provides overview and access from anywhere."))
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "10px auto 40px"
    }
  }, /*#__PURE__*/React.createElement(SystemScheme, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18,
      gridTemplateColumns: "repeat(auto-fit, minmax(230px,1fr))",
      marginBottom: 66
    }
  }, minis.map(([icon, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title[0],
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(MiniIcon, null, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "0.97rem",
      marginBottom: 3,
      color: "var(--text-strong)"
    }
  }, L(title[0], title[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.87rem",
      margin: 0
    }
  }, L(body[0], body[1])))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: L("Gagnvirkt sýnidæmi", "Interactive demo"),
    title: L("Prófaðu sjálf(ur)", "Try it yourself"),
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, L("Ræstu loftræsikerfið, breyttu óskgildinu og prófaðu viðvörun til að sjá hvernig stýring, vöktun og viðvaranir vinna saman.", "Start the ventilation system, change the setpoint and test an alarm to see how control, monitoring and alarms work together."))
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(HmiDemo, null))));
}
function ScadaPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    art: "../../assets/myscada-logo-white.png",
    artMode: "logo",
    tag: "mySCADA",
    title: L("mySCADA skjámyndakerfi", "mySCADA HMI systems"),
    intro: L("mySCADA Technologies er leiðandi í hönnun nútíma skjámyndakerfa og þróar kerfið stöðugt með áherslu á óskir viðskiptavina. Kerfið er auðvelt í notkun og áreiðanleikinn mikill. AndOr er umboðsaðili mySCADA á Íslandi.", "mySCADA Technologies is a leader in modern HMI/SCADA design and continually develops the system around customer needs. It is easy to use and highly reliable. AndOr is the mySCADA distributor in Iceland.")
  }), /*#__PURE__*/React.createElement(ProductsSection, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 20px 70px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("verkefni")
  }, L("Sjá dæmi um skjámyndakerfi sem við höfum skilað →", "See HMI screens we have delivered →")))), /*#__PURE__*/React.createElement(CtaStrip, {
    onNav: onNav,
    title: L("Viltu vita meira um mySCADA?", "Want to know more about mySCADA?"),
    text: L("Við veitum ráðgjöf um hvaða lausn hentar þínu verkefni, og seljum búnaðinn.", "We advise on which solution suits your project, and sell the hardware.")
  }));
}
function VerkefniPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    tag: L("Verkefni", "Projects"),
    title: L("Dæmi um okkar lausnir", "Examples of our work"),
    intro: L("Raunveruleg stjórnborð úr afhentum kerfum, hönnuð og forrituð af AndOr.", "Real control screens from delivered systems, designed and programmed by AndOr.")
  }), /*#__PURE__*/React.createElement(ScreenshotGallery, null), /*#__PURE__*/React.createElement(CtaStrip, {
    onNav: onNav,
    title: L("Vantar þig svona kerfi?", "Need a system like this?"),
    text: L("Við hönnum stjórnkerfi og skjámyndakerfi sniðin að þínu verkefni.", "We design control and HMI systems tailored to your project.")
  }));
}

// [src, name, [isRole, enRole], [isBody, enBody], chips [[is,en],...]]
const TEAM = [["../../assets/team-stefan.jpg", "Stefán Karl Randversson", ["Framkvæmdastjóri\nRafmagnstæknifræðingur", "Managing Director\nElectrical Engineer"], ["Hönnun stjórnkerfa, iðntölvuforritun og gangsetningar.", "Control-system design, PLC programming and commissioning."], [["Hönnun stjórnkerfa", "Control-system design"], ["Iðntölvuforritun", "PLC programming"], ["Gangsetningar", "Commissioning"]]], ["../../assets/team-saevar.jpg", "Sævar Karl Randversson", ["Rafmagnsverkfræðingur\nRafvirkjameistari", "Electrical Engineer\nMaster Electrician"], ["Stýriteikningar, skjámyndakerfi og iðntölvuforritun.", "Control drawings, HMI systems and PLC programming."], [["Stýriteikningar", "Control drawings"], ["Skjámyndakerfi", "HMI/SCADA"], ["Iðntölvuforritun", "PLC programming"]]], ["../../assets/team-mary.jpg", "Marý Sæmundsdóttir", ["Skrifstofa", "Office"], ["Rekstur, þjónusta og samskipti við viðskiptavini.", "Operations, service and customer relations."], [["Rekstur", "Operations"], ["Þjónusta", "Service"], ["Samskipti", "Customer relations"]]]];
function TeamCard({
  src,
  name,
  role,
  body,
  chips
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: "hidden",
      borderRadius: "var(--radius-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 320,
      overflow: "hidden",
      background: "var(--accent-soft)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 22%",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "4.6rem",
      fontWeight: 700,
      color: "var(--accent)",
      background: "radial-gradient(circle at 50% 38%, rgba(79,159,216,.22), transparent 72%)"
    }
  }, name.charAt(0))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 24px 26px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.25rem",
      marginBottom: 6,
      color: "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--accent)",
      fontSize: "0.92rem",
      fontWeight: 600,
      marginBottom: 12,
      whiteSpace: "pre-line"
    }
  }, L(role[0], role[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.93rem",
      margin: 0
    }
  }, L(body[0], body[1]))));
}
function UmPage({
  onNav,
  fx
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 20px 40px",
      background: "radial-gradient(ellipse 80% 70% at 70% 0%, rgba(79,159,216,.12), transparent), var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      display: "flex",
      gap: 50,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 420px"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, L("Um AndOr", "About AndOr")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginTop: 22
    }
  }, L("AndOr ehf. var stofnað árið 2019 og sérhæfir sig í hönnun stjórnkerfa, stýriteikningum, iðntölvuforritun, forritun og uppsetningu á skjámyndakerfum, gangsetningum og prófunum á stjórnkerfum.", "AndOr ehf. was founded in 2019 and specialises in control-system design, control drawings, PLC programming, HMI development, commissioning and testing of control systems.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginTop: 14
    }
  }, L("AndOr ehf. er umboðsaðili fyrir skjámyndakerfið mySCADA á Íslandi.", "AndOr ehf. is the authorised distributor of the mySCADA HMI system in Iceland.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2019",
    label: L("Stofnað", "Founded")
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "Siemens",
    label: L("Iðntölvubúnaður", "PLC hardware")
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "mySCADA",
    label: L("Umboðsaðili", "Distributor")
  }))), /*#__PURE__*/React.createElement(HeroMark, {
    fx: fx,
    size: 240
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 20px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: L("Starfsfólk", "Team"),
    title: L("Fólkið á bak við AndOr", "The people behind AndOr"),
    lead: L("Lítið teymi með margra ára reynslu af stjórnkerfum og rafmagni.", "A small team with years of experience in control systems and electrical work.")
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 110
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24,
      gridTemplateColumns: "repeat(auto-fit, minmax(290px,1fr))",
      marginTop: 42
    }
  }, TEAM.map(([src, name, role, body, chips]) => /*#__PURE__*/React.createElement(TeamCard, {
    key: name,
    src: src,
    name: name,
    role: role,
    body: body,
    chips: chips
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(PartnerStrip, null)), /*#__PURE__*/React.createElement(CtaStrip, {
    onNav: onNav,
    title: L("Vinnum saman að betri lausnum!", "Let's build better solutions together!")
  }));
}
function StarfsfolkPage({
  onNav
}) {
  // Merged into UmPage, kept as a thin alias for any old links.
  return /*#__PURE__*/React.createElement(UmPage, {
    onNav: onNav
  });
}
Object.assign(window.AndOrWebsite = window.AndOrWebsite || {}, {
  PageHead,
  StjornkerfiPage,
  ScadaPage,
  VerkefniPage,
  UmPage,
  StarfsfolkPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// website_v2/assets/site.js
try { (() => {
/* Sameiginlegur haus og fótur fyrir allar síður */
(function () {
  const LOGO = `
    <img class="nav-mark" src="assets/andor-mark.svg" alt="">
    <img class="nav-word" src="assets/andor-wordmark-light.png" alt="AndOr ehf — Hönnun stjórnkerfa">`;
  const LINKS = [["stjornkerfi", "stjornkerfi.html", "Stjórnkerfi"], ["myscada", "myscada.html", "mySCADA"], ["um", "um-andor.html", "Um AndOr"], ["samband", "hafa-samband.html", "Hafa samband"]];
  const active = document.body.dataset.page || "";
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="nav">
      <a href="index.html" class="nav-logo" aria-label="AndOr ehf.">${LOGO}</a>
      <button class="burger" aria-label="Valmynd"><span></span><span></span><span></span></button>
      <ul class="nav-links" id="menu">
        ${LINKS.map(([id, href, label]) => `<li><a href="${href}"${id === active ? ' class="active"' : ""}>${label}</a></li>`).join("")}
      </ul>
    </nav>`;
  document.body.prepend(header);
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="foot">
      <a href="index.html" class="nav-logo" aria-label="AndOr ehf.">${LOGO}</a>
      <div>© ${new Date().getFullYear()} AndOr ehf. · kt. 561219-2300 · Glerárgata 32, 600 Akureyri · <a href="mailto:andor@andor.is">andor@andor.is</a> · S: 840-8168</div>
    </div>`;
  document.body.append(footer);
  const burger = header.querySelector(".burger");
  const menu = header.querySelector("#menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("open");
  });
})();

// Scroll fade-in
(function () {
  const targets = [...document.querySelectorAll(".card, .team-card, .scada-card, .contact-card, .form-panel, .stat, .chip, h2, .lead, .page-head h1, .hero h1, .hero p, .cta-strip h2, .cta-strip p, .step, .partners .plabel, .partner-logos img, .panel, .mini")];
  targets.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = i % 4 * 80 + "ms";
  });
  let pending = targets.slice();
  function reveal() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    pending = pending.filter(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        el.classList.add("visible");
        return false;
      }
      return true;
    });
    if (!pending.length) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      reveal();
    });
  }
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
  window.addEventListener("resize", onScroll, {
    passive: true
  });
  reveal();
  window.addEventListener("load", reveal);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "website_v2/assets/site.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconChip = __ds_scope.IconChip;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

})();
