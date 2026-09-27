# Portfolio-wide audit — 2026-09-26

## 1. Executive summary

The portfolio already has a coherent core: a restrained editorial visual system, a clear robotics-systems identity, strong flagship-project selection, unusually good separation between professional work and coursework, and a real personal layer rather than a generic hobbies footer. It should be refined, not redesigned.

The most important issues are trust and evidence, not aesthetics:

1. **P0 — public contact inconsistency:** the live downloadable resume still uses `s242507@dtu.dk`, while the released public identity is `rami@rami-hanna.com`. The website HTML uses the new address, so the PDF contradicts the site.
2. **P0 — potentially sensitive EXIF:** public life photographs include embedded GPS metadata according to local file inspection. Strip metadata before the next deployment, especially from the home/dinner image.
3. **P0 — broken project link:** the SunnySips “View code” target returns HTTP 404. Confirm whether the repository should be public; otherwise replace the CTA with a working product/demo link or remove it.
4. **P0/P1 — live/local factual drift:** the live thesis project still reflects the deployed pre-correction architecture, while the local uncommitted `lib/projects.ts` correctly says Arduino Uno/C rather than final ESP32-S3. Preserve and ship that correction only in an approved factual batch.
5. **P1 — project pages are attractive summaries, not yet convincing case studies:** most describe problem, contribution, stack, and headline proof, but do not show decisions, test logic, failure/iteration, or enough quantitative visual evidence.
6. **P1 — navigation is less coherent on mobile and at the edges of the IA:** Story/Life disappear from the mobile header; homepage quick links horizontally overflow without a cue; Writing, Technical Archive, Heart-rate, and Language are weakly discoverable or orphaned.
7. **P1 — accessibility/metadata:** green small text is only about 3.32:1 against the paper background; several touch targets are below 44×44; `robots.txt` and `sitemap.xml` return 404; there are no explicit canonical/Open Graph defaults.
8. **P1 — homepage portrait imbalance is real:** at 1440px the copy block starts around y=105 and visually centers near y=419, while the portrait container starts around y=269 and centers near y=559. The source photograph also places Rami low/right within a bright architectural frame. The result reads more accidental than intentionally asymmetrical.

The strongest next move is a small factual/trust batch, followed by navigation/accessibility, then project evidence. A wholesale visual reset would discard a system that is already distinctive and credible.

### Audit basis and limits

- Inspected repository source, current working tree, public assets, PDF text/metadata, canonical career evidence, and the live site.
- Live responsive passes covered approximately 1440px, 768px, and 390px.
- All discovered live routes were checked at desktop; all substantive routes were checked for mobile overflow at 390px.
- `npm run lint` passed on 2026-09-26.
- No production build was run because it writes build artifacts and Phase 1 is an audit.
- Browser rendering showed images loading successfully after normal lazy-load delay.
- LinkedIn returned an anti-automation status during command-line checking; this is not evidence that the human-facing profile is broken.
- No application code, career-v2 file, public asset, commit, deployment, or external service was changed.

## 2. Current git/repository state

- Repository: `/Users/rami/Documents/Port/portfolio-v2`
- Branch: `main`, tracking `origin/main`
- HEAD: `d20fa3a — Add homepage chat call to action`
- Recent scheduling commits confirmed:
  - `d20fa3a — Add homepage chat call to action`
  - `d0fa644 — Make scheduling page more personal`
  - `0a626cc — Add professional email and scheduling page`
- Existing tracked modifications at audit start:
  - `app/contact/page.tsx`
  - `app/resume/page.tsx`
  - `app/work/page.tsx`
  - `lib/projects.ts`
  - `public/resume.pdf`
- Existing untracked path at audit start: `tmp/`
- Diff size at audit start: 15 insertions, 12 deletions across four source files, plus a changed PDF.

These changes were treated as user-owned. The audit did not stage, discard, overwrite, or absorb them. This report is the only intentional repository addition.

## 3. Route inventory and information architecture

| Route | Purpose / audience | Discovery | State and recommendation | Priority / link risk |
|---|---|---|---|---|
| `/` | Fast identity and routing for all visitors | Entry point | **Keep/revise.** Strong thesis; adjust portrait balance and mobile quick-link behavior. | P1; no removal risk |
| `/work` | Recruiters and engineers evaluating technical fit | Header + homepage | **Keep/revise.** Best portfolio index; improve evidence hierarchy and connect archive selectively. | P1 |
| `/profile` | Narrative, values, career path, collaboration | Header/homepage | **Keep/revise.** Add one concrete collaboration/teaching example and a human image or detail. | P2 |
| `/resume` | Scannable career evidence and PDF handoff | Header/homepage | **Keep/correct.** Align PDF contact and settle skills density. | P0 |
| `/life` | Personality and interests | Header/homepage | **Keep/revise lightly.** Strong tone; improve captions and privacy hygiene. | P0 metadata; P2 copy |
| `/travel` | Personal atlas and worldview | Linked from Life/Language | **Keep, optionally noindex.** It is distinctive but peripheral; make indexing an explicit choice. | P2; historical link value moderate |
| `/giving-back` | Mentorship/community values | Homepage quick links only | **Keep/revise.** Add one verified concrete example; confirm sensitive biography sentence. | P2 |
| `/writing` | Intended public thinking/notebook | Not linked from header/homepage | **Hide from index until real posts or revise as “notes.”** Three disabled pseudo-posts create expectation without content. | P1; low historical risk |
| `/contact` | Contact hub | Header/homepage/all mail icons | **Keep.** Correct and useful; add plain-text email affordance if desired. | P1 minor |
| `/chat` | Public scheduling | Homepage/contact | **Keep noindex.** Correctly uses `noindex,nofollow`; Cal.com target returned 200. Validate booking promises manually. | P1 operational QA |
| `/projects/thesis` | Flagship research case study | Work/resume | **Keep/deepen.** Correct deployed controller wording; add model-vs-measurement and failure/transfer evidence. | P0 factual, P1 evidence |
| `/projects/perplant` | Professional field robotics/CV evidence | Work | **Keep/deepen.** Public-safe but visually generic and thin. | P1 |
| `/projects/harvard-microrobotics` | Robotics interface/embedded evidence | Work | **Keep/deepen.** Only one image and no outcome/process visual. | P1 |
| `/projects/teradyne` | Published mechatronics/test automation | Work/resume/archive | **Keep/deepen.** Strong existing unused videos and plots can make this exemplary. | P1 |
| `/projects/sunnysips` | Shipped product/software evidence | Work | **Keep/correct.** Broken GitHub CTA; underplays architecture/reliability evidence. | P0 link, P1 content |
| `/projects/trybe` | Product/partner-discovery evidence | Work | **Keep/reposition.** Clearly label prototype/pilot status and show discovery-to-design trace. | P1/P2 |
| `/learnit` | Technical archive index | Only reachable from `/heartrate` or direct URL | **Merge into Work or keep as an explicitly linked Archive.** `/capstone` duplicates current work; `/heartrate` is the sole unique item. | P1; historical links possible |
| `/heartrate` | Archived joint academic signal-processing project | `/learnit` only | **Keep/revise/noindex.** Add joint ownership, 16-trial evidence, limitations, and transcript/captions. | P1 |
| `/language` | Personal reflection | Life | **Keep or merge into Life.** Pleasant but too slight for a standalone indexed page. | P2; low link risk |
| `/capstone` | Legacy Teradyne URL | Archive/direct links | **Keep redirect, change to permanent after confirming inbound links.** Currently HTTP 307 to `/projects/teradyne`. | P1 SEO/history |
| `/exercise` | Legacy route | Direct links only | **Keep 308 redirect temporarily.** Redirecting to home loses intent; decide whether any historical content deserves a closer destination. | P2 |
| `/nextsteps` | Legacy route | Direct links only | **Keep 308 or retire after analytics/backlink check.** Home redirect is generic. | P2 |
| `/pomodoro` | Legacy route | Direct links only | **Keep 308 or retire after analytics/backlink check.** Home redirect is generic. | P2 |

### IA conclusion

The core IA should remain `Home → Work / Story / Life / Resume → Contact / Chat`. The secondary layer should be deliberate: Travel, Giving Back, and a real Archive can live under Story/Life/Work. Writing should not look published until it contains published material. Do not delete legacy routes without analytics/backlink inspection; current redirects protect historical URLs.

## 4. Page-by-page audit matrix

| Route | Immediate message | Evidence/content assessment | Visual/UX assessment | Recommendation |
|---|---|---|---|---|
| `/` | Clear robotics systems identity with human-impact motivation | Accurate at a high level; “help people” is meaningful but broad | Strong typography; portrait sits substantially below copy; no conventional below-fold content or footer; quick links become a horizontal strip | Raise/tighten portrait composition, preserve intentional asymmetry, add scroll cue for quick links, keep chat CTA |
| `/work` | “Trusted systems” and observable/testable/useful framing | Distinctive and credible; cards sometimes lead with tools more than decisions/results | Excellent grid on desktop; 6 long cards produce ~6580px mobile page | Add one-line outcome/ownership distinction per card; consider 4 flagship + 2 supporting hierarchy rather than equal card weight |
| `/profile` | Career path and values | Verified highlights; “How I work” remains abstract | Clean and readable but text-only; the page lacks a memorable human artifact | Add one concrete story about scoping ambiguity or teaching; one working/lab/whiteboard image |
| `/resume` | Broad robotics-systems fit | HTML is useful; PDF contact is stale; toolkit risks looking keyword-dense without context | Responsive and scannable; long skill chip wall on mobile | Correct PDF email; keep skills evidence-based and tier/context aware; mention scholarship selectively |
| `/life` | Warm, observant, expansive personal identity | Interests match canonical evidence | Strongest personality page; captions are generic; embedded photo metadata is a privacy risk | Keep layout; rewrite captions with place/story; strip EXIF; consider adding surfing/salsa detail rather than more categories |
| `/travel` | Travel shapes perspective | Distinctive but mostly inventory; “regions” count actually counts grouped regions, not a standard geography taxonomy | Map is engaging; long place list is visually flat; third-party map tiles load client-side | Keep as personal layer; add 3 short stories/lessons, consider noindex, disclose/accept external map dependency |
| `/giving-back` | Access and belonging matter | Mentoring is supported, but specifics are vague; Lebanon sentence is not in the canonical files audited | Good single-screen composition; lacks evidence/photo | Confirm biography wording; add one verified mentoring/peer-teaching example; avoid invented scale |
| `/writing` | A living notebook | No posts exist; disabled “Publishing soon” controls look like unavailable links | Visual system is consistent, but the page promises more than it delivers | Noindex or replace with 1–2 real short notes; disabled buttons should not masquerade as links |
| `/contact` | Roles/collaboration/mentorship entry point | Correct new domain email and scheduling path | Clear, strong; same-page external contact mix is understandable | Add visible email address/copy action; keep scheduling optional, not the sole path |
| `/chat` | Warm, low-pressure conversation invitation | Distinctive voice; Cal URL works; claims about timezone/video should be manually verified | Good two-column/stacked behavior; noindex is appropriate | Keep; test all three durations, timezone, confirmation email, cancel/reschedule, and return path |
| Thesis | Wearable rehab robotics, modeling through evaluation | Strong metrics and scope boundary; lacks visible failure-to-learning narrative and result plots; deployed architecture is stale | Strong hero; large headline competes with image; gallery repeats on-hand image | Ship Arduino/C correction; show Route A→B decision, predicted vs measured motion, and rigid→wearable transfer limitation |
| PerPlant | Field sensing/data quality under real conditions | Contribution is clear; no outcome beyond workflow; confidentiality may constrain visuals | Generic aerial imagery does not prove Rami’s work | Add a sanitized fixture/signal-path diagram, representative curation visualization, and explicit boundary on dataset ownership |
| Harvard | Operator interfaces and embedded integration | Clear ownership boundaries; no concrete outcome/scale | One strong photo, then mostly text; visually sparse | Add sanitized UI screenshot and operator→socket→embedded→robot diagram; ask whether any public-safe test video exists |
| Teradyne | Force-aware connector mating and publication | Strong metrics, publication, and ownership; the project can support much more detail | Best candidate for richer evidence; current page omits existing videos/results | Use existing mating video, full fixture image, four-plug force plot, and control/tool-change sequence diagram |
| SunnySips | Real-world modeling hidden behind a simple product | Canonical evidence is substantially richer: live VPS, fallbacks, provider routing, tests, product discovery | Polished screens; lacks architecture and operational proof; code CTA is broken | Replace/fix CTA; add system diagram, degraded-mode story, future-planning discovery story, and unused map view |
| TRYBE | Welcoming participation/community product | Status is honestly “prototype,” but partner discovery and rules are under-explained | Screens are attractive yet repetitive and do not show learning | Add discovery→constraint→interface chain; show booking/perk state model; keep “no signed partnership/traction” boundary |
| `/learnit` | Earlier work with continued relevance | Sensible framing; one unique item plus a duplicate Teradyne entry | Uses older Tailwind-card visual dialect, visibly different from V3 editorial pages | Fold into Work as Archive, or explicitly link and restyle; fix `/\#work` because home has no `id="work"` |
| `/heartrate` | Early sensing/signal-processing experiment | Page omits joint ownership and verified 16-trial comparison | Heavy dual PDF embeds; video lacks captions/transcript/poster | State joint project and limits; summarize results in HTML; keep one document link, not two embedded 60vh viewers on mobile |
| `/language` | Beginner mindset and teachability | Human and believable, but thin | Visually consistent; standalone route adds little beyond Life | Merge into Life unless it gains concrete stories/languages/learning moments |

## 5. Shared visual-system findings

### What works

- The paper/ink/lime palette is recognizable and avoids common blue-gradient portfolio clichés.
- Editorial scale, rules, numbered lists, and grayscale-to-color behavior create a coherent engineering-publication feel.
- Grid widths are consistent (`site-shell` max 1280px); desktop pages align cleanly at 80px on a 1440px viewport.
- Project cards and detail pages share a clear visual grammar.
- Responsive stacking works: no page-wide horizontal overflow was found at 390px across substantive routes.
- Global `:focus-visible` and reduced-motion handling are present.

### What needs revision

- Two visual dialects coexist: the current V3 editorial CSS and the older rounded, shadowed Tailwind archive pages. `/learnit` and `/heartrate` look related but not current.
- Header labels are small and dense; mobile visibility rules hide Story, Life, GitHub, and email. This solves width but weakens the site map.
- Small olive-green text (`#6b9111`) on paper (`#f3f3ef`) measures about **3.32:1**, below WCAG AA for normal-size text. It is widely used at 11–12px.
- Several project galleries force all media into the same grayscale treatment. This suits photography but reduces interpretability for thermal images, plots, and UI screens.
- “Hover to shift the frame” is desktop-specific copy and offers no value on touch or keyboard.
- Most pages do not share a site footer or a consistent next-route pattern, so deep visits often end abruptly.

## 6. Homepage optical-alignment assessment

At the measured 1440px layout:

- Copy block: approximately x=80, y=105, 753×628.
- Portrait wrapper: approximately x=913, y=269, 410×580.
- Copy visual center: about y=419; portrait-container center: about y=559.
- Portrait CSS: `object-position: 50% 28%`, but the source image itself places Rami low and slightly right while a bright doorway and graffiti occupy the upper field.
- The headline has very high black visual mass in the upper-left. The portrait’s human focal point is much lower, so the two columns do not exchange attention at the same vertical level.

The container is mathematically valid but optically late. The asymmetry does not yet feel fully intentional because the architectural negative space is brighter and larger than the subject.

**Recommended treatment:** keep an offset editorial portrait, but make it subject-aware. Test a slightly wider/tighter crop that preserves some doorway character while moving Rami’s face toward the upper-middle of the visible frame, then raise the wrapper roughly one headline line (about 70–100px at 1440px). Judge against the face/eyes and headline’s second line, not container centers. On tablet/mobile, keep the portrait after the CTA but reduce the dead gap before it. Do not simply center every element or remove the environmental context.

User input required: choose between (A) environmental portrait with graffiti/door retained, or (B) tighter human-first crop. Recommendation: A, but with a more assertive crop and higher placement.

## 7. Content and project-evidence gaps

### Cross-project pattern

The pages answer “what it was” and “what I touched,” but inconsistently answer:

- What tradeoff or decision did Rami make?
- What failed or changed?
- How was the system tested?
- What did the evidence show?
- What was the boundary of individual ownership?
- What happened next?

Use one compact case-study spine where evidence exists: **problem → constraint → decision → implementation → test → result → limitation/lesson**. This is a content architecture improvement, not a request to make every page longer.

### Specific gaps

- **Thesis:** model-to-experiment comparison, Route A→B design decision, load-path failure, rigid vs on-hand outcome, annotated sensor/actuator path.
- **PerPlant:** actual/sanitized fixture evidence, capture pipeline, curation method visualization, before/after redundancy example, public-safe outcome.
- **Harvard:** interface screenshot, communications path, fleet/operator workflow, public-safe test or integration evidence.
- **Teradyne:** sequence diagram, tool-change/mating video, multi-plug force trace, drift/tare validation, who on the team owned which subsystems.
- **SunnySips:** live/static/on-device fallback path, provider routing, data freshness, 15-minute refresh/5-day horizon, the discovery story that caused future planning, working destination CTA.
- **TRYBE:** booking/perk rule model, partner concerns, prototype status, what changed after outreach, collaborator boundary.
- **Heart-rate:** 16-trial comparison, method/result summary, limitations, joint ownership, no-clinical-use boundary.

## 8. Career-v2 factual reconciliation

Authority order followed: current user correction → `CURRENT_STATE.yaml` → `CAREER_EVIDENCE.yaml` → other canonical files → skills map → master CV.

| Portfolio wording/state | Canonical source | Recommended public wording/action | Confidence | Confirmation? |
|---|---|---|---|---|
| Public PDF: `s242507@dtu.dk` | User’s current instruction says `rami@rami-hanna.com`; `CURRENT_STATE.yaml` still says DTU email | Change public PDF email to `rami@rami-hanna.com`. Separately reconcile career-v2 later; do not restore DTU as primary public contact. Do not add scheduling URL to resume. | Certain | No for portfolio; yes before editing career-v2 |
| Live thesis architecture previously says ESP32-S3 | `PRJ-THESIS-FINGER-ACTUATOR`, skills map, master CV: final system used Arduino Uno programmed in C | `Arduino Uno motor/encoder control in C → Python host/analysis → camera and encoder measurement.` Local uncommitted correction is aligned. | High | No |
| Work/resume use `Robotics Co-op` for PerPlant | Ledger display title: Robotics Co-op; formal contract title: Mechatronics Student Engineer / Part-time Mechatronics Engineer | Keep “Robotics Co-op” in narrative portfolio; optionally note formal title only on a detailed resume if useful. | High | No |
| Raytheon: “team estimated roughly $7M in potential ROI” | `EXP-RAYTHEON-ROBOTIC-AUTOMATION` | Keep attribution exactly; never say realized savings or personal ROI. | High | No |
| Thesis: `1,000/1,000`, `97.5% of 49.93°` | `PRJ-THESIS-FINGER-ACTUATOR` | Keep, but label 49.93° an engineering/task-informed comparator and avoid clinical implication. | High | No |
| Thesis: supervised 3 interns | `PRJ-THESIS-INTERN-SUPERVISION` | “Supervised and mentored three student interns”; do not imply formal people management. | High | No |
| PerPlant: `150,000+ image dataset` | `EXP-PERPLANT-CV-CURATION` | “Representative annotation/evaluation batches from a field dataset reported as containing at least 150,000 images”; do not imply creation/ownership of dataset. | High | No |
| Resume skills list is broad | `TECH-DIRECT-SKILLS-2026-09-25`, `SKILLS_EVIDENCE.md` | Skills are permissible but not equal-depth. Keep grouped wording; avoid implying production SLAM/autonomy/ML-platform expertise. | High | No |
| `M.Sc. Autonomous Systems`; “requirements completed August 2026” | `CURRENT_STATE.yaml` education | Safe. Do not invent formal diploma/conferral date. | High | No |
| Site omits Full Merit Scholarship | `REC-DTU-FULL-MERIT-SCHOLARSHIP` | Optional high-value addition to Resume/Profile: “Full Merit Scholarship — one of 30 recipients.” Do not infer selection rate/value/ranking. | High | No |
| Profile/header: “Open to new roles” | `CURRENT_STATE.yaml`: actively applying/networking/interviewing; verbal offer exists but is unaccepted | Still factually supported as of 2026-09-24. Reconfirm after offer decision. | High, time-sensitive | Yes later |
| Giving Back: left Lebanon as a young child | Not found in the audited canonical files | Keep only if Rami confirms this remains accurate and intentionally public; consider whether migration context is necessary to support the page’s purpose. | Medium | Yes |
| Giving Back: ongoing robotics/programming mentorship | `COM-TECHNICAL-MENTORING-ONGOING` is supported but lacks organization/scale | Use qualitative wording only; do not imply program ownership, frequency, or outcomes. | High | No |
| Heart-rate page implies individual project by omission | `PRJ-HEARTRATE-VIDEO-SIGNAL-PROCESSING`: joint academic project, 16 trials | Explicitly call it a joint academic project and state the 16-trial/limitations context. | High | No |
| SunnySips says released iOS/web product | `PRJ-SUNNYSIPS-PRODUCT` and current user evidence | Safe. Avoid user count, revenue, or App Store-channel claims without proof. | High | No |
| TRYBE stack names React, SwiftUI, Node.js | `PRJ-TRYBE-PRODUCT`: multiple implementation generations | Attribute stacks to specific prototypes; avoid presenting one unified production stack. | High | No |

### Canonical conflict to resolve outside this audit

`CURRENT_STATE.yaml` and `MASTER_CAREER_CV.md` still make the DTU address the primary/default email, directly conflicting with the current user instruction that the durable domain email is released. Do not modify career-v2 in this phase. A later explicit canonical update should record the new address and supersede the DTU-email note.

## 9. Human/personality findings

### Already sounds like Rami

- “Messy details that make a system useful.”
- “Things that keep me awake to the world.”
- “Feed people.”
- The chat page’s “one good tangent,” “proper rabbit hole,” and “come as you are.”
- SunnySips and TRYBE naturally connect technical systems to everyday behavior.

### Sounds generic or overly polished

- “Engineering for systems that need to be trusted.” Strong but interchangeable without immediate proof.
- “Let’s build something that matters.” Common portfolio language.
- “I care about the details because that is where trust is built.” True but abstract.
- Writing-page decks read like polished principles rather than lived notes.
- “A few details worth getting closer to” repeats on every project and does not describe the actual evidence.

### Where personality belongs

- **Homepage:** one concrete sentence about the kind of debugging/problem Rami enjoys; keep the rest crisp.
- **Project transitions/captions:** replace generic captions with what Rami noticed, changed, or learned.
- **Thesis reflection:** one paragraph on discovering that wearable transfer—not rigid-fixture control—was the harder problem.
- **PerPlant:** the farmer feedback that caused a thermal-camera requirement is a strong human/technical bridge.
- **SunnySips:** tell the roommate/café conversation that led to future planning.
- **TRYBE:** show why climbing-gym off-hours and beginner anxiety mattered personally.
- **Profile:** use one specific whiteboarding/mentoring moment to demonstrate collaboration.
- **Life:** use place-specific captions; current labels are elegant but too universal.
- **Optional memorable detail:** Australian Idol third round is verified in `PERSONAL_EVIDENCE.yaml`. It belongs only as a small, playful Story/Life detail if Rami wants it public—not as a technical credential.

Preserve formal tone on technical claims and results. Warmth should live in intros, captions, reflections, transitions, and CTAs rather than casualizing the evidence itself.

## 10. UX, accessibility, performance, and trust

### P0/P1 findings

| Affected route/file | Evidence | Recommended change | Benefit | Risk | Input/asset? |
|---|---|---|---|---|---|
| `public/resume.pdf` | Live PDF uses DTU email; site uses domain email | Regenerate PDF with domain email only; no scheduling link | Contact reliability/trust | Low | Approved wording already supplied |
| Life images | `file` reports embedded GPS blocks in three JPEGs | Strip EXIF/location metadata and verify raw public URLs | Removes accidental location disclosure | Low; preserve color/orientation | No |
| SunnySips project | GitHub CTA returned 404 | Confirm visibility/URL, then fix/replace/remove CTA | Removes broken trust signal | Low | User decision |
| Site metadata | `/robots.txt` and `/sitemap.xml` return 404; no canonical defaults in layout | Add explicit robots, sitemap, metadata base, canonical/Open Graph defaults | Search consistency/sharing quality | Low | Indexing decisions needed |
| Small green labels | Contrast about 3.32:1 at 11–12px | Darken text green or reserve current green for large/decorative use | WCAG AA readability | Low visual shift | No |
| Mobile header | Story/Life and two socials hidden; LinkedIn 36×36; logo visually ~16.5px high | Use compact menu or second row; ensure 44×44 hit areas and active state | Better discoverability/touch access | Medium | Choose menu style |
| Homepage quick links | At 390px content scroll width is ~553px inside a 358px strip | Add scroll affordance/fade, snap, or wrap into 2 rows | Makes hidden routes discoverable | Low | No |
| Project galleries | Hover instruction and effects are pointer-specific | Replace instruction with content-specific copy; ensure keyboard focus reveals no unique information | Inclusive interaction | Low | No |
| `/learnit` | Link points to `/#work`, but homepage has no `id="work"` | Point to `/work` | Correct navigation | Trivial | No |
| `/heartrate` | Video has controls but no captions/transcript/poster; two PDF iframes | Add text summary/transcript; one primary PDF link; optional poster | Accessibility/mobile performance | Low | Transcript/result summary |

### Positive findings

- All audited substantive routes have one `<main>` and one `<h1>`.
- All rendered `<img>` elements had alt attributes.
- No page-wide horizontal overflow appeared at 390px.
- Global keyboard focus styling is present.
- CSS and Framer Motion both honor reduced-motion preferences.
- Primary buttons are at least 44px high.
- The scheduling page is intentionally noindexed.
- PDFs and Cal.com route returned 200.
- `npm run lint` passes.

### Performance

- `public/` is approximately **275 MB**; `public/images` is about **210 MB**.
- Five videos exceed 10 MB; two MOV files are roughly 61 MB and 71 MB, and `vid1.MOV` is about 40 MB.
- Unreferenced files in `public/` are still deployable and directly guessable even when not transferred by a page. They increase deployment size and disclosure surface.
- Next/Image is used well for current page images and emits optimized variants.
- The travel page adds Leaflet/client-side JS and third-party OpenStreetMap tile requests.
- The current heart-rate video uses `preload="metadata"`, which is appropriate, but should have a poster and captions/summary.

Do not delete unused assets in an audit. In implementation, first classify them as (a) use now, (b) archive outside `public`, or (c) remove after confirming no historical direct links.

## 11. Existing assets that should be used

| Existing asset | Best use | Notes |
|---|---|---|
| `public/images/IMG_6318_720.mov` | Teradyne close-up mating cycle | Strong proof; trim to one clear cycle and transcode to efficient MP4/WebM |
| `public/images/IMG_6379_720.mov` | Teradyne full mechanism/tool-change context | Strong wide system evidence; currently ~71 MB |
| `public/images/vid1.MOV` | Teradyne connector mating detail | Good alternate close-up; choose the clearest of this and IMG_6318, not all three |
| `public/images/GUI Redesign Explaination_Trim.mp4` | Teradyne operator-control explanation | 127 seconds is too long for inline use; extract 15–30 seconds or annotated stills |
| `public/images/4PlugData.png` | Teradyne repeatability/result section | Better evidence than a generic “0.5 g” chip when captioned carefully |
| `public/images/30_min_drift_no_tare.png` and tare variant | Teradyne sensor-validation/lesson section | Use as a compact before/after validation story if the interpretation is still correct |
| `public/images/IMG_6368.JPG` | Teradyne team/system/showcase context | More human and informative than the current cropped team image; confirm consent for teammates |
| `public/images/IMG_5417.jpg` | Teradyne load-cell bench/debugging process | Excellent “in the work” image; strip metadata first |
| `public/portfolio/sunnysips-map.png` | SunnySips hero/gallery | Shows actual map product better than repeated phone detail screens |
| `public/portfolio/thesis-workflow.svg` | Thesis system/method diagram | Prefer SVG if it is equivalent and legible; verify rendering against PNG |
| `public/portfolio/thesis-cover.png` | Thesis publication/document cue | Optional; lower priority than results plots |
| `public/portfolio/thesis-gantt.png` | Project-planning evidence | Use only if discussing planning/intern coordination; not a headline technical artifact |
| `public/portfolio/life/surfing-bali.jpeg` and `copenhagen-gainer.jpeg` | Life page personality | Can add movement/humor, but strip metadata and choose intentionally |
| `public/portfolio/trybe-phone.png` | TRYBE alternate state | Use only if it adds a distinct rule/state, not another decorative phone mockup |

## 12. Specific new asset/photo/video shot list

Only request assets that existing files do not already cover.

### Thesis

1. One wide, well-lit photo showing the full actuator, fixture, camera, encoder, force/displacement measurement, and tendon path in one frame.
2. One annotated diagram of command → motor/encoder → tendon routing → finger/load → camera/analysis.
3. One plot comparing model prediction and measured motion for the representative Route A and Route B conditions.
4. One plot or annotated frame comparing rigid-fixture and on-hand behavior, explicitly showing the load-path limitation.
5. A 10–20 second video of one complete cycle, with a small overlay identifying commanded and measured motion.

### PerPlant

1. One public-safe photo or clean schematic of the multi-camera fixture with RGB/multispectral/thermal placement labeled.
2. One annotated signal/data-path diagram from capture through ROS2/MicroROS, Jetson/OpenCV, GPS association, and stored image set.
3. One de-identified visualization of the curation workflow: redundant source cluster → embeddings/UMAP/HDBSCAN → representative batch/grouped split.
4. One field-condition photo that shows the actual sensing context without confidential hardware/data.

### Harvard Microrobotics

1. One sanitized operator-interface screenshot with the main user task annotated.
2. One diagram of interface → sockets → embedded/MicroROS → robot/fleet.
3. One close-up or short clip of the robot subsystem Rami helped integrate, if publicly releasable.

### SunnySips

1. One architecture diagram showing SwiftUI/web clients, FastAPI/VPS, weather/geospatial sources, snapshots/cache, and fallback behavior.
2. One 15–20 second screen recording showing “current conditions → future time → recommendation change.”
3. One compact visual of urban occlusion/sun geometry over a real venue, with uncertainty explained.

### TRYBE

1. One state diagram for session booking, eligibility, credits/perks, and partner rules.
2. One sanitized excerpt from partner-pilot material tied to a specific product decision.
3. One before/after flow showing how climbing-gym discovery changed the prototype.

### Profile / collaboration

1. One candid photo at a whiteboard, bench, or mentoring session—only with consent and without sensitive content visible.

## 13. Privacy and trust concerns

- **P0:** embedded GPS metadata in publicly served life JPEGs. Strip all metadata, not only coordinates, and verify orientation after processing.
- **P0:** public PDF exposes a now-obsolete institutional email as the primary contact.
- **P1:** all files under `public/` are potentially directly accessible, including unreferenced personal photos, videos, PDFs, and development artifacts. Move archival originals out of the deployable directory after a link-risk review.
- **P1:** the Travel Atlas publishes a detailed set of visited places and the current base. This appears intentional, but Rami should explicitly accept that public footprint.
- **P1:** team photos should be used only with reasonable consent/expectation; avoid naming people without permission.
- **P1:** public PDFs may contain embedded author/contact metadata and third-party names. Perform a metadata/text review before each release.
- **P1:** Cal.com is a third-party booking service. The current privacy note is sensible; verify that the configured event does not expose calendar titles, personal phone, or unintended conferencing details.
- **P2:** OSM tile requests disclose visitor IP/user-agent to third-party infrastructure. This is normal but should be part of the privacy decision if a privacy policy is later added.
- **Trust:** keep explicit boundaries around clinical efficacy, dataset ownership, production deployment, partner traction, and team-estimated ROI.

## 14. Prioritized implementation backlog

### P0 — factual, broken, privacy, trust

1. **Resume email correction** — `public/resume.pdf`; evidence: live PDF text; change: domain email, no scheduling link; benefit: durable contact; risk: low; user input: none.
2. **Thesis final controller correction** — `lib/projects.ts`/live deployment; evidence: canonical thesis record; change: Arduino Uno/C wording; benefit: factual accuracy; risk: low; input: none. Preserve the existing local correction.
3. **SunnySips CTA** — `/projects/sunnysips`; evidence: HTTP 404; change: fix/replace/remove; benefit: trust; risk: low; input: desired public destination.
4. **Strip metadata** — `public/portfolio/life/*.jpg|jpeg` and any new personal photos; evidence: GPS blocks detected; benefit: privacy; risk: low; input: none.

### P1 — meaningful UX, visual, accessibility, content

1. Mobile navigation/44×44 touch targets and active route state.
2. Homepage portrait crop/placement and quick-link affordance.
3. Small-green-text contrast correction.
4. Project evidence batch: thesis, PerPlant, Harvard, Teradyne, SunnySips, TRYBE.
5. Decide Archive integration; fix `/#work`; reconcile old/current visual dialect.
6. Heart-rate ownership/results/accessibility rewrite.
7. Robots/sitemap/canonical/Open Graph metadata.
8. Classify deployable unused assets; transcode only selected videos and move archival originals out of `public` after approval.
9. Add consistent project/page end pathways: next project, Work, Chat/Contact.

### P2 — depth and personality

1. Concrete collaboration/teaching story on Profile.
2. Specific Life captions and optional surfing/salsa/Australian Idol detail.
3. Travel stories rather than a pure place inventory.
4. Giving Back evidence and biography confirmation.
5. Replace generic project-gallery language with project-specific captions/reflections.
6. Decide whether Language remains standalone.

### P3 — optional polish

1. Consistent footer across non-project pages.
2. More descriptive download labels including file type/size.
3. Fine-tune grayscale rules by media type.
4. Small motion/hover polish after accessibility and evidence work.

## 15. Exact human decisions required

1. Should the SunnySips code repository be public? If no, what public product/demo URL should replace it?
2. Homepage portrait: environmental crop with doorway/graffiti retained (recommended) or tighter human-first crop?
3. Should Travel, Writing, Language, LearnIt, and Heart-rate be indexed? Recommendation: Travel optional; Writing noindex until real posts; Language merge/noindex; LearnIt either linked Archive or noindex; Heart-rate noindex unless upgraded.
4. Should `/learnit` remain a named Archive, or should Heart-rate become a supporting card on `/work`?
5. Is the Lebanon childhood sentence still accurate and intentionally public?
6. Is the Travel Atlas’s detailed location history intentionally public at its current granularity?
7. May the Teradyne team/showcase photo be used, and are teammates comfortable appearing publicly?
8. Which PerPlant photos/diagrams are cleared for public use?
9. After the current offer decision, should “Open to new roles” remain in the persistent header?
10. Is Australian Idol third round a detail Rami wants public on Life/Story, or should it remain application/networking-only?
11. For legacy `/exercise`, `/nextsteps`, and `/pomodoro`, are there known historical links or content worth mapping to a closer destination than home?

## 16. Proposed implementation batches and commit boundaries

No implementation is authorized yet. If approved, use these boundaries and commit only files in the selected batch.

### Batch 1 — factual/contact/privacy trust

- Regenerate `public/resume.pdf` with domain email.
- Preserve/verify Arduino Uno/C correction in `lib/projects.ts`.
- Fix SunnySips CTA.
- Strip metadata from approved public photos.
- Verify live PDF/project/asset URLs.
- Suggested commit: `Correct public contact, project facts, and asset privacy`

### Batch 2 — navigation, accessibility, metadata

- Mobile nav and touch targets.
- Color contrast.
- Quick-link affordance and archive link fix.
- robots/sitemap/canonical/social metadata.
- Keyboard/focus/reduced-motion regression checks.
- Suggested commit: `Improve portfolio navigation and accessibility`

### Batch 3 — homepage optical balance

- Subject-aware crop/position and container alignment.
- Desktop, 768px, and 390px verification.
- Suggested commit: `Refine homepage portrait balance`

### Batch 4 — flagship engineering evidence

- Thesis and Teradyne first, using existing assets plus approved diagrams/plots.
- Keep factual boundaries explicit.
- Suggested commit: `Deepen thesis and Teradyne case-study evidence`

### Batch 5 — professional and product evidence

- PerPlant, Harvard, SunnySips, TRYBE.
- Add only cleared/new assets; repair CTA.
- Suggested commit: `Add professional and product project evidence`

### Batch 6 — secondary IA and personality

- Archive/Writing/Language decisions.
- Profile, Giving Back, Life, and Travel specificity.
- Legacy redirect decisions only after backlink/analytics review.
- Suggested commit: `Clarify secondary routes and personal narrative`

For every approved batch: preserve unrelated working-tree changes, test desktop/tablet/mobile, run lint and production build, visually verify affected pages, commit only batch files, and do not push or deploy without explicit authorization.
