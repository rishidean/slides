# Reaching Escape Velocity — getting started, v2

Review deck. The live deck stays at [`getting-started/`](../getting-started/) and is not edited here. Once this folder is published it is served at `slides.rishidean.com/getting-started-v2`, beside the original.

CSS, JS, fonts, and vendor scripts are shared from `../getting-started/`. Image directories (`uploads/`, `pedal-shots/`, `kormo-images/`) are symlinks to that folder, because frozen slides keep relative `src` attributes and the browser fetches those before any script can rewrite them. A small head script still prefixes `img` `src` if a symlink is not followed. This folder has no `canon/` directory. The original `getting-started/canon/` is untouched.

## Four parts

| Part | Name | Entry | Exit | Sections |
|---|---|---|---|---|
| 1 | The talk | Title (frozen slides 1–3 open the talk) | Go | 49 (16 frozen + 33) |
| 2 | Getting airborne | Divider | A month from now, is it still running? | 29 |
| 3 | Extending your model | Divider | Capability ladder | 31 (22 talk + 7 lab + 2 backup) |
| 4 | Breaking atmosphere | Divider | In orbit, not at warp | 20 |

Total: 129 sections. The build brief's summary line says 30 slides in Part 2 and 130 overall. The Part 2 flow table, the ledger, and the new-section list all enumerate 29. This deck follows the enumerated slides.

Exits of parts 2, 3, and 4 carry one line: `github.com/rishidean/pedal · slides.rishidean.com/getting-started`.

## Presenter metadata

Every section after the frozen intro has:

- `data-part="1|2|3|4"`
- `data-mode="core|opt|lab|reprise|backup"`

`core` is the minimal path. `opt` is the full path. `lab` is a drill (Part 3 only). `reprise` repeats an earlier slide when a later part runs on its own. `backup` is for a cold audience. Rail labels are prefixed `P1 ·` through `P4 ·`. Lab, reprise, and backup slides add `LAB`, `REPRISE`, or `BACKUP` in the rail label.

Footer numbers are stamped from position. Do not hand-number slides.
