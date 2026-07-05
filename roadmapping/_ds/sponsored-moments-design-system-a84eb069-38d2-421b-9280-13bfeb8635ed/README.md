# Sponsored Moments — Design System

A design system for **Sponsored Moments**, Lyft's proposed mobility ad product. Sourced from the Waypoint sizzle-reel motion-design piece — a 2-minute portrait-format film that pitches the concept. The system captures its visual language for use in future slide decks, mocks, prototypes, and marketing material.

**Source**: `rishidean/waypoint @ main` — the `apps/sizzle-reel/` subtree.
- `docs/script.md` — narrative script (v4 final)
- `scenes-primitives.jsx` — design tokens (`SM`), timing tables, shared components (`PassCard`, `LoungePassCard`, `PushNotification`, `Waveform`)
- `scenes-opening.jsx` / `scenes-demos.jsx` / `scenes-vision.jsx` — scene implementations
- `Sponsored Moments Sizzle.html` — entry

---

## Product context

**Sponsored Moments** is a mobility-first ads product. The pitch: in a world where apps are no longer the front door — where people "just ask", "just gesture", "just chat" via AI assistants, glasses, AV seatback screens — the traditional ad (banner, pre-roll, feed unit) has nowhere to live. Sponsored Moments reframes the ad as **assistance**: a helpful action, branded, surfaced at the right moment, across every surface.

Four example surfaces demonstrated in the reel:
1. **Push notification** — "Your oat milk latte will be ready at Gate C14" (Kate's Koffee)
2. **In-app** — tip screen with a sponsored CityGuide CTA (Crumb)
3. **AI assistants** — voice waveform announcing a lounge pass (Northwind Air)
4. **Autonomous vehicles** — seatback briefing card (PeopleSearch)

Tagline: **"Serving & Connecting Life in Motion."** The close: *"The best ad doesn't feel like an ad. It feels like help."*

---

## Index

- `colors_and_type.css` — CSS variables for palette, type, spacing, radii, shadows; imports Manrope + JetBrains Mono from Google Fonts
- `assets/` — logos, brand illustrations, device images, placeholders (16 files)
- `preview/` — individual cards for the Design System tab
- `ui_kits/sizzle-reel/` — the sizzle-reel's core primitives as **exported design-system components** (`.jsx` + `.d.ts`, compiled into `_ds_bundle.js`) plus an interactive showcase `index.html`
- `slides/` — **landscape 16:9 deck layer**: `DECK_CONVENTIONS.md` (written spec) + `deck-tokens.css` (deck-only tokens extending `colors_and_type.css`). Note: the reel is portrait 9:16; decks are a separate landscape surface.
- `README.md` (this file) + `SKILL.md` — Agent Skills manifest
- `_ds_bundle.js` / `_ds_manifest.json` / `_adherence.oxlintrc.json` — compiler outputs (auto-generated; do not edit)

> The narrative script is **not** vendored here — read it from the source repo at `apps/sizzle-reel/docs/script.md`. Fonts are loaded from Google Fonts (no local `fonts/` folder).

---

## CONTENT FUNDAMENTALS

### Voice
Declarative. Confident. Short. Sentences are often fragments. Statements sit on their own line with breathing room — this is motion-design copy that has to *land*.

**Tone**: "Apple keynote film energy meets Philly soul warmth." Big claims delivered without hedging, but never cold.

**Person**: Third-person + "you" / "we." The product speaks *to* the rider ("Your oat milk latte will be ready…"). The brand speaks *about* the customer ("But we still know the customer"). First-person "I" only appears when the AI assistant is literally talking.

**Casing**: Sentence case for all body copy and titles. ALL-CAPS + mono only for eyebrow labels (`PRESENTED BY`, `BRIEFING`, `SURFACE · PUSH`).

### Rules
- **Never sell the mechanism.** Don't say "audience extension" or "AV future." Show it. The reel never calls out that Scene 10 is an autonomous vehicle — the seatback screen is enough.
- **Silence is a feature.** The most important moment in the film is 1 full second of white and nothing. Do not pad.
- **One idea per line.** "No app open. / No screen. / No impression. / No revenue." Four lines, four full stops, four thoughts.
- **Punchline last.** "Intent / Context / History / Relationships / Interests / **Mobility**" — the owned one goes at the end, biggest.
- **No emoji** in UI chrome or headlines. ☕ appears inside a push notification exactly once because that *is* the content (a coffee order).
- **No exclamation points.** Confidence doesn't shout.

### Specific examples
| Good | Bad |
|---|---|
| "The best ad doesn't feel like an ad." | "Introducing a revolutionary new ad format!" |
| "One tap. You're in." | "Click below to redeem your exclusive offer." |
| "Timed to when you clear security." | "Smart, context-aware delivery powered by AI." |
| "What if it was help?" | "Reimagine advertising as assistance." |
| "go/waypoint →" | "Visit go/waypoint to learn more about our exciting roadmap." |

---

## VISUAL FOUNDATIONS

### The one-sentence summary
**Huge black type on warm off-white, with a single hot-magenta accent.** Big, confident, minimal. Motion-design first — every screen is composed for one idea.

### Palette
- **Backgrounds** — `#FAFAFA` cool off-white is the default; `#F2F1EE` warm paper for AV interiors and card wells; `#000` full black only for dark-panel inserts (lounge pass bottom, Scene 11 waveform backdrop with radial `#1a0512 → #000`).
- **Ink** — `#0A0A0A` (not pure black) for all primary text. `#6B6B6B` muted. `#B5B5B5` faint for labels and UI hints.
- **Accent** — `#CF0090` hot magenta. Used **sparingly** and with *intent*: the 48×4 accent bar under section titles, CTA buttons, underlined key words on reveal, the radial-glow behind the voice waveform. Deep plum `#820076` for printed inks (QR codes).
- **Never**: bluish-purple gradients, "friendly" pastels, rainbow palettes. The palette's power comes from restraint — one accent color, never two.

### Typography
- **Manrope** 400 / 500 / 600 / 700 / 800 for everything UI.
- **JetBrains Mono** 400 / 500 for labels, timestamps, eyebrows, metadata.
- Tight tracking: `-0.04em` for display, `-0.03em` for titles, `-0.005em` for body. Labels get loose `+0.15em` / `+0.28em` letter-spacing.
- Line-height sits tight — `0.95` for display, `1.02` for titles.
- When text "takes the full screen, almost uncomfortably large" — the reel uses up to **160–180px** at 1080 width.

### Spacing
Authored at 1080-wide. Generous negative space. Cards pad at **44–48px**. Scene edges sit at **60–80px**. The stage breathes.

### Backgrounds
- **Full-bleed flat fills** are the default. No repeating patterns. No textures. No grain.
- **No illustration on the backdrop.** Imagery enters as cropped high-res *objects* (AirPod, glasses, scene15 mosaic) — treated as parallax elements, not decoration.
- **Gradients are rare**: a radial `#1a0512 → #06060a → #000` behind the voice waveform; a soft magenta blur blob behind that. Otherwise flat color.
- **Scene 3 parallax**: objects float at ~300% crop, white-on-white, slow Ken Burns drift.

### Motion
- **Primary easing**: `easeOutCubic` for entrances. `easeInCubic` for exits. `easeInOutCubic` for connecting transitions.
- **Staggered word reveals**: each word fades + slides up `18px` on an 0.34s curve with ~0.18–0.32s stagger.
- **No bounces, no elastic overshoot** in production content — these exist in the engine (`easeOutBack`, `easeOutElastic`) but scenes don't use them.
- **Fade-in default**: 400ms. **Fade-out default**: 300ms. Hard cuts between scenes (`sceneExit: 0`).
- **No parallax on text**. Objects move, text appears.

### Hover / press states
The source is a motion piece, not a live app, so hover/press isn't formally defined. For UI kits built on this system:
- **Hover**: `border-color → var(--sm-ink)` + subtle `background: #F9FAF7`. Don't change opacity.
- **Press**: `transform: scale(0.82)` on tap ripples; buttons shift `1px` down.
- **Selected**: `1.5px` solid border in the item's accent (CityGuide guide rows), not a fill change.

### Borders & hairlines
- `1px solid #E6E6E6` is the canonical divider. Used on card interiors, form cells, dashed tear-lines.
- `1.5px solid #0E1418` or accent for selected states.
- **No heavy borders.** Nothing 2px+ except intentional accent bars.

### Shadows (elevation system)
Three tiers:
1. **Card** — `0 40px 80px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.04)` — standard card float.
2. **Pass** — `0 40px 80px rgba(0,0,0,0.10), 0 8px 20px rgba(0,0,0,0.05)` — higher ceremony (lounge pass, briefing pass).
3. **Push** — `0 30px 80px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.06)` — on-wallpaper push, deepest.
4. **Device** — `0 60px 120px rgba(0,0,0,0.35), 0 0 0 1.5px rgba(255,255,255,0.08)` — phone bezel on dark backdrop.

Shadows are always **soft, diffused, offset downward**. No tight drop-shadows. No colored shadows.

### Radii
- `4px` — small pills, QR code container
- `10–14px` — buttons, inputs, content wells
- `28px` — the canonical card radius
- `36px` — push notifications
- `72px` — phone bezel
- Small buttons inside cards: `12–16px`. Chips / "Add to Wallet" pill: `14px`.

### Transparency & blur
Used only where iOS itself would use it — **push notifications** get `backdrop-filter: blur(20–30px) saturate(180%)` with a `rgba(60,56,48,0.62)` frosted tint on the dark wallpaper. Overlays for modals: `rgba(10,14,18,0.55–0.72)` + `blur(6–8px)`. **Never** blur the main content; it's an iOS/dialog-chrome effect only.

### Imagery vibe
- **Warm.** Product shots are Apple-press-kit clean with slight warm cast. Never cool/blue.
- **Cropped and abstract.** AirPods at 300%, only-the-temple of Meta Ray-Bans, corner of a map.
- **No stock photography.** No people smiling at phones. No handshake hero shots.
- **No filters.** No grain. No vignettes.
- Full-bleed imagery appears inside `aspect-ratio: 3/1` strips on pass cards — bordered with `1px #E6E6E6`.

### Layout rules
- Scene content is always **centered** unless a specific left/right anchor is needed (labels top-left, sponsor name top-right).
- Mono labels sit in corners at `60–80px` from edge.
- A 48×4 magenta accent bar sits between the eyebrow and the title, every time.
- Fixed bottom caption strip at `6–8% from bottom` for "explainer" lines under a hero object.

### Corner / card recipe
```
White fill · 28px radius · 1px #E6E6E6 border · sh-card shadow
  ┌────────────────────────────┐
  │ MONO EYEBROW     SPONSOR   │  ← 13px mono, #B5B5B5
  │ ▬▬ ← 48×4 accent bar       │
  │                            │
  │ Big title, 56px, -0.03em   │  ← tight lead-in
  │ Body copy, 26px, #6B6B6B   │
  │                            │
  │ [ CONTENT WELL ]           │  ← optional, dashed stripe
  │                            │
  │ ┌──────────────────────┐   │
  │ │  One tap to continue │   │  ← magenta CTA, 14px radius
  │ └──────────────────────┘   │
  └────────────────────────────┘
```

---

## ICONOGRAPHY

The sizzle reel uses **almost no UI icons** — deliberately. The visual vocabulary is type + imagery + single-accent. What icons exist fall into three buckets:

1. **iOS system glyphs** (lock screen) — hand-rolled SVG for cell bars, battery, flashlight, camera. These are faithful recreations of Apple's SF-style glyphs, kept at stroke weight 2 and uniform scale. Used only inside the phone-frame primitives.
2. **Product-specific SVGs** — the pink "M" in a rounded 13px square (Sponsored Moments push-notification app icon), the Apple-Wallet pill's mini card gradient. These are *lockups*, not reusable icons.
3. **Emoji** — exactly one: ☕ inside a push notification, because it's the content of the push (a coffee order). Never in chrome.

**Substitution policy**: since the source has no icon set, for new UI kits we link **Lucide** (`https://unpkg.com/lucide@latest`) as the closest match for stroke style. Use with:
- stroke-width: **2**
- size: **24px** default, **18px** inside inputs, **28px** for primary actions
- color: inherit from `currentColor`

This is a substitution — flag for iteration if a set-in-stone icon system is adopted.

**No unicode icons** (arrows, bullets). If an arrow is needed, use SVG or the ASCII `→` (which the source uses in `"go/waypoint →"` and `"Current location →"`).

---

## UI KIT

See `ui_kits/sizzle-reel/` for the single surface this design system represents: the sizzle-reel itself. The kit provides the key primitives as **exported design-system components** — `HeroTitle`, `PassCard`, `LoungePassCard`, `PushNotification`, `Waveform`, `Interstitial`, `PhoneFrame`. Each has a `.jsx` (`export function`), a `.d.ts` prop contract, and is compiled into `_ds_bundle.js`.

Consume them the standard way — load the bundle and read from the namespace:

```html
<script src="_ds_bundle.js"></script>
<script>
  const { PassCard, PushNotification } = window.SponsoredMomentsDesignSystem_a84eb0;
</script>
```

`ui_kits/sizzle-reel/index.html` is an interactive showcase wired to the bundle. The sizzle reel is the only surface in the source — there is no separate marketing site, mobile app, or dashboard. For **16:9 slide decks**, see `slides/` (a separate landscape surface, not part of the bundle). If Lyft ships a Sponsored Moments product dashboard, this system is the starting point but will need extension.

---

## Caveats & substitutions

- **Fonts**: the source uses Google-hosted Manrope + JetBrains Mono. This system inherits that — no local `.ttf` files. If you need offline support, download both families from Google Fonts and drop them in `fonts/`.
- **Icons**: the source has no icon set. Lucide is substituted for any new UI requiring icons — **flag for iteration**.
- **No dark mode** in the source. All backgrounds are light; dark inserts are used for *ceremony*, not accessibility. A full dark-mode token set is TBD.
- **No motion tokens** for timing curves beyond what `animations.jsx` exposes — easing names are ported but scene-level durations remain authoring-seconds in the source, not a semantic scale.
