# Breaking Atmosphere — When Software Maintains Itself

Escape Velocity, Session 2 (delivered after Getting Airborne). 50 slides: layered context,
execution pipeline, progressive determinism — the Spaceship stage of the continuum.

- Live: https://slides.rishidean.com/atmosphere/
- Sequel to [Getting Airborne](../airborne/). Airborne is the agentic harness (Helicopter stage);
  this deck is the adaptive-software follow-on.

Single self-contained `index.html` — inline styles and script, no sibling JS. It loads two things
by relative path, so keep them beside it:

- `kormo-images/` — the Dhaka photo set used by the case-study slides
- `fonts.css` + `fonts/` — vendored Manrope and JetBrains Mono, so the deck presents without
  network access

`.nojekyll` stops GitHub Pages from running Jekyll over the files.
