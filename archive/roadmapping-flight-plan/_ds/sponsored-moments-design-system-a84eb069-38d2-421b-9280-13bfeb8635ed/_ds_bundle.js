/* @ds-bundle: {"format":3,"namespace":"SponsoredMomentsDesignSystem_a84eb0","components":[{"name":"HeroTitle","sourcePath":"ui_kits/sizzle-reel/HeroTitle.jsx"},{"name":"Interstitial","sourcePath":"ui_kits/sizzle-reel/Interstitial.jsx"},{"name":"LoungePassCard","sourcePath":"ui_kits/sizzle-reel/LoungePassCard.jsx"},{"name":"PassCard","sourcePath":"ui_kits/sizzle-reel/PassCard.jsx"},{"name":"PhoneFrame","sourcePath":"ui_kits/sizzle-reel/PhoneFrame.jsx"},{"name":"PushNotification","sourcePath":"ui_kits/sizzle-reel/PushNotification.jsx"},{"name":"Waveform","sourcePath":"ui_kits/sizzle-reel/Waveform.jsx"}],"sourceHashes":{"ui_kits/sizzle-reel/HeroTitle.jsx":"9ea9af90f608","ui_kits/sizzle-reel/Interstitial.jsx":"53bd86d87027","ui_kits/sizzle-reel/LoungePassCard.jsx":"dfed30938b5a","ui_kits/sizzle-reel/PassCard.jsx":"3d63296167c0","ui_kits/sizzle-reel/PhoneFrame.jsx":"bf065e3f7616","ui_kits/sizzle-reel/PushNotification.jsx":"7fb9e0da7c74","ui_kits/sizzle-reel/Waveform.jsx":"a8594f99e184"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SponsoredMomentsDesignSystem_a84eb0 = window.SponsoredMomentsDesignSystem_a84eb0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/sizzle-reel/HeroTitle.jsx
try { (() => {
/* global React */
// Canonical hero composition: mono eyebrow + 48×4 magenta bar + big display title.
// This is THE recipe — repeat relentlessly.

function HeroTitle({
  eyebrow,
  sponsor,
  title,
  body,
  align = 'center'
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'center' ? 'center' : 'flex-start',
    textAlign: align,
    gap: 18,
    maxWidth: 820
  };
  const eye = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--sm-ink-faint)'
  };
  const bar = {
    width: 48,
    height: 4,
    background: 'var(--sm-accent)',
    borderRadius: 2
  };
  const h = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 0.95,
    fontSize: 96,
    color: 'var(--sm-ink)',
    margin: 0
  };
  const p = {
    fontFamily: 'var(--font-sans)',
    fontSize: 22,
    lineHeight: 1.4,
    color: 'var(--sm-ink-muted)',
    margin: 0,
    letterSpacing: '-0.005em',
    maxWidth: 640
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, (eyebrow || sponsor) && /*#__PURE__*/React.createElement("div", {
    style: eye
  }, /*#__PURE__*/React.createElement("span", null, eyebrow), sponsor && /*#__PURE__*/React.createElement("span", null, sponsor)), /*#__PURE__*/React.createElement("div", {
    style: bar
  }), /*#__PURE__*/React.createElement("h1", {
    style: h
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: p
  }, body));
}
Object.assign(__ds_scope, { HeroTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sizzle-reel/HeroTitle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sizzle-reel/Interstitial.jsx
try { (() => {
/* global React */
// Scene-break card: mono kicker, 36×3 accent bar, uncomfortably-large display label.
// Used between demo scenes ("Demo 01 / 04", "Demo 03 / 04", "AI Assistants").

function Interstitial({
  kicker = 'DEMO 01 / 04',
  label = 'Push Notifications',
  width = 560,
  height = 280
}) {
  const wrap = {
    width,
    height,
    background: 'var(--sm-bg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    fontFamily: 'var(--font-sans)'
  };
  const k = {
    fontFamily: 'var(--font-mono)',
    fontSize: 14,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    color: 'var(--sm-ink-faint)'
  };
  const bar = {
    width: 40,
    height: 3,
    background: 'var(--sm-accent)',
    borderRadius: 2,
    margin: '22px 0'
  };
  const l = {
    fontSize: 64,
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 0.98,
    color: 'var(--sm-ink)',
    textAlign: 'center',
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: k
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: bar
  }), /*#__PURE__*/React.createElement("h2", {
    style: l
  }, label));
}
Object.assign(__ds_scope, { Interstitial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sizzle-reel/Interstitial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sizzle-reel/LoungePassCard.jsx
try { (() => {
/* global React */
// Airline-style lounge pass: hero strip → body rows → dashed tear → dark footer with QR code.

function LoungePassCard({
  airline = 'NORTHWIND',
  flight = 'NW 427',
  route = 'SFO → JFK',
  lounge = "Sky Club",
  gate = 'B27',
  heroImg,
  qrText = 'SM-NW-427'
}) {
  const card = {
    width: 360,
    background: '#fff',
    borderRadius: 28,
    overflow: 'hidden',
    border: '1px solid var(--sm-line)',
    boxShadow: 'var(--sh-pass)',
    fontFamily: 'var(--font-sans)'
  };
  const hero = {
    height: 120,
    background: heroImg ? `#EEE center/cover no-repeat url(${heroImg})` : 'linear-gradient(135deg, #CF0090 0%, #820076 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '18px 22px',
    color: '#fff'
  };
  const heroLabel = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '0.22em',
    textTransform: 'uppercase'
  };
  const body = {
    padding: '20px 22px 16px'
  };
  const row = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid var(--sm-line)'
  };
  const rowLast = {
    ...row,
    borderBottom: 'none'
  };
  const k = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--sm-ink-faint)'
  };
  const v = {
    fontSize: 15,
    fontWeight: 600,
    color: 'var(--sm-ink)',
    letterSpacing: '-0.01em'
  };
  const tear = {
    height: 14,
    position: 'relative',
    backgroundImage: 'radial-gradient(circle, var(--sm-line) 1.5px, transparent 1.6px)',
    backgroundSize: '8px 14px',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center'
  };
  const foot = {
    background: '#000',
    color: '#fff',
    padding: '18px 22px',
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  };
  const qr = {
    width: 68,
    height: 68,
    background: '#fff',
    borderRadius: 4,
    display: 'grid',
    gridTemplateColumns: 'repeat(7,1fr)',
    padding: 5,
    gap: 1
  };
  const bit = on => ({
    background: on ? 'var(--sm-accent-deep)' : 'transparent'
  });
  const pattern = [1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0];
  return /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: hero
  }, /*#__PURE__*/React.createElement("span", {
    style: heroLabel
  }, airline, " \xB7 LOUNGE ACCESS")), /*#__PURE__*/React.createElement("div", {
    style: body
  }, /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: k
  }, "Flight"), /*#__PURE__*/React.createElement("span", {
    style: v
  }, flight)), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: k
  }, "Route"), /*#__PURE__*/React.createElement("span", {
    style: v
  }, route)), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: k
  }, "Lounge"), /*#__PURE__*/React.createElement("span", {
    style: v
  }, lounge)), /*#__PURE__*/React.createElement("div", {
    style: rowLast
  }, /*#__PURE__*/React.createElement("span", {
    style: k
  }, "Gate"), /*#__PURE__*/React.createElement("span", {
    style: v
  }, gate))), /*#__PURE__*/React.createElement("div", {
    style: tear
  }), /*#__PURE__*/React.createElement("div", {
    style: foot
  }, /*#__PURE__*/React.createElement("div", {
    style: qr
  }, pattern.map((on, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: bit(on)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...k,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "Scan at lounge"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...v,
      color: '#fff',
      marginTop: 4,
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.1em',
      fontSize: 13
    }
  }, qrText))));
}
Object.assign(__ds_scope, { LoungePassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sizzle-reel/LoungePassCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sizzle-reel/PassCard.jsx
try { (() => {
/* global React */
// The canonical pass card: white fill, 28px radius, mono eyebrow + bar + title,
// optional dashed content well, optional magenta CTA.

function PassCard({
  eyebrow,
  sponsor,
  title,
  body,
  cta,
  width = 360,
  children
}) {
  const card = {
    width,
    background: '#fff',
    borderRadius: 28,
    padding: '28px 28px 24px',
    border: '1px solid var(--sm-line)',
    boxShadow: 'var(--sh-card)',
    fontFamily: 'var(--font-sans)'
  };
  const eye = {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--sm-ink-faint)'
  };
  const bar = {
    width: 40,
    height: 3,
    background: 'var(--sm-accent)',
    borderRadius: 2,
    marginTop: 16
  };
  const h = {
    margin: '16px 0 0',
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.02,
    color: 'var(--sm-ink)'
  };
  const p = {
    margin: '10px 0 0',
    fontSize: 16,
    lineHeight: 1.45,
    letterSpacing: '-0.005em',
    color: 'var(--sm-ink-muted)'
  };
  const btn = {
    marginTop: 20,
    padding: '14px',
    textAlign: 'center',
    background: 'var(--sm-accent)',
    color: '#fff',
    borderRadius: 14,
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: '-0.01em',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: card
  }, (eyebrow || sponsor) && /*#__PURE__*/React.createElement("div", {
    style: eye
  }, /*#__PURE__*/React.createElement("span", null, eyebrow), sponsor && /*#__PURE__*/React.createElement("span", null, sponsor)), /*#__PURE__*/React.createElement("div", {
    style: bar
  }), title && /*#__PURE__*/React.createElement("h3", {
    style: h
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: p
  }, body), children, cta && /*#__PURE__*/React.createElement("div", {
    style: btn
  }, cta));
}
Object.assign(__ds_scope, { PassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sizzle-reel/PassCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sizzle-reel/PhoneFrame.jsx
try { (() => {
/* global React */
// Dark iOS phone bezel with its floor-shadow. Children render in the screen area.

function PhoneFrame({
  width = 360,
  height = 740,
  children,
  screenBg = '#000'
}) {
  const wrap = {
    width,
    height,
    background: '#0e0e0e',
    borderRadius: 52,
    padding: 12,
    boxShadow: 'var(--sh-device)',
    position: 'relative'
  };
  const notch = {
    position: 'absolute',
    left: '50%',
    top: 18,
    transform: 'translateX(-50%)',
    width: 110,
    height: 30,
    background: '#000',
    borderRadius: 22,
    zIndex: 3
  };
  const screen = {
    width: '100%',
    height: '100%',
    background: screenBg,
    borderRadius: 40,
    overflow: 'hidden',
    position: 'relative'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: notch
  }), /*#__PURE__*/React.createElement("div", {
    style: screen
  }, children));
}
Object.assign(__ds_scope, { PhoneFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sizzle-reel/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sizzle-reel/PushNotification.jsx
try { (() => {
/* global React */
// iOS-style push notification: blurred frosted bg, square app icon, meta row, title, body.

function PushNotification({
  app = 'MOMENTS',
  sponsor = "KATE'S KOFFEE",
  time = 'now',
  title = 'Your oat milk latte',
  body = 'Ready at the Gate C14 counter in 18 minutes. Confirm order?',
  icon,
  // 'M' letter by default, or React node
  iconColor = 'var(--sm-accent)',
  width = 420,
  theme = 'dark' // 'dark' or 'light'
}) {
  const dark = theme === 'dark';
  const wrap = {
    width,
    padding: '14px 16px',
    borderRadius: 22,
    backdropFilter: 'blur(22px) saturate(180%)',
    WebkitBackdropFilter: 'blur(22px) saturate(180%)',
    background: dark ? 'rgba(60,56,48,0.55)' : 'rgba(255,255,255,0.78)',
    border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}`,
    boxShadow: 'var(--sh-push)',
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
    fontFamily: '-apple-system, "SF Pro", "Manrope", sans-serif',
    color: dark ? '#fff' : 'var(--sm-ink)'
  };
  const ico = {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: iconColor,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 18,
    letterSpacing: '-0.03em',
    color: '#fff'
  };
  const meta = {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: dark ? 'rgba(255,255,255,0.75)' : 'var(--sm-ink-faint)'
  };
  const t = {
    marginTop: 4,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: '-0.015em'
  };
  const b = {
    marginTop: 2,
    fontSize: 14,
    letterSpacing: '-0.005em',
    lineHeight: 1.3,
    color: dark ? 'rgba(255,255,255,0.88)' : 'var(--sm-ink-muted)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: ico
  }, icon || 'M'), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: meta
  }, /*#__PURE__*/React.createElement("span", null, app, " \xB7 ", sponsor), /*#__PURE__*/React.createElement("span", null, time)), /*#__PURE__*/React.createElement("div", {
    style: t
  }, title), /*#__PURE__*/React.createElement("div", {
    style: b
  }, body)));
}
Object.assign(__ds_scope, { PushNotification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sizzle-reel/PushNotification.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sizzle-reel/Waveform.jsx
try { (() => {
/* global React */
// AI-assistant voice waveform: soft magenta radial glow + stylized sound wave.
// Optionally animates a subtle pulse.

function Waveform({
  width = 560,
  height = 160,
  animated = true
}) {
  const wrap = {
    position: 'relative',
    width,
    height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const glow = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '80%',
    height: '55%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--sm-accent)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.55,
    animation: animated ? 'smpulse 2.4s var(--ease-in-out) infinite alternate' : 'none'
  };
  const svgStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'visible'
  };
  const style = `
    @keyframes smpulse { from { opacity: 0.45; } to { opacity: 0.7; } }
  `;
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("style", null, style), /*#__PURE__*/React.createElement("div", {
    style: glow
  }), /*#__PURE__*/React.createElement("svg", {
    style: svgStyle,
    viewBox: "0 0 400 100",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sm-wf",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#CF0090",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "15%",
    stopColor: "#CF0090",
    stopOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#FFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "85%",
    stopColor: "#CF0090",
    stopOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#CF0090",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0,50 Q50,25 100,48 T200,50 T300,52 T400,50 L400,55 L0,55 Z",
    fill: "url(#sm-wf)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,50 Q50,70 100,52 T200,50 T300,48 T400,50 L400,45 L0,45 Z",
    fill: "url(#sm-wf)",
    opacity: "0.75"
  })));
}
Object.assign(__ds_scope, { Waveform });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sizzle-reel/Waveform.jsx", error: String((e && e.message) || e) }); }

__ds_ns.HeroTitle = __ds_scope.HeroTitle;

__ds_ns.Interstitial = __ds_scope.Interstitial;

__ds_ns.LoungePassCard = __ds_scope.LoungePassCard;

__ds_ns.PassCard = __ds_scope.PassCard;

__ds_ns.PhoneFrame = __ds_scope.PhoneFrame;

__ds_ns.PushNotification = __ds_scope.PushNotification;

__ds_ns.Waveform = __ds_scope.Waveform;

})();
