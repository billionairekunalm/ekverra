# Ekveera Infra Projects LLP — website

Next.js 16 · React 19 · TypeScript · GSAP ScrollTrigger · Tailwind v4 (preflight) + hand-written design system in `app/globals.css`.

```bash
npm install
npm run dev      # http://localhost:3100
npm run build && npm start
```

## Where things live
- `lib/content.ts` — all copy: company details, 16 services (verbatim from the brochure), principles, process, projects.
- `app/globals.css` — design tokens (colours sampled from the logo/brochure), typography, every section's layout, the CSS hero entrance.
- `components/motion/Motion.tsx` — the scroll-motion system (`data-reveal`, `data-split`, `data-clip`, `data-line`, `data-parallax`, `data-expand`).
- `app/api/enquiry/route.ts` — enquiry form endpoint.

## Before going live
1. **Domain** — set `SITE_URL=https://your-domain` (used for canonical URL, Open Graph, sitemap, robots, JSON-LD).
2. **Enquiry emails** — create a free [Resend](https://resend.com) account, verify the domain, then set
   `RESEND_API_KEY`, `ENQUIRY_TO=ekveerainfraprojectsllp@gmail.com`, `ENQUIRY_FROM="Ekveera Website <enquiries@your-domain>"`.
   Until these are set, the form validates and then hands the filled-in enquiry to WhatsApp or email — it never claims to have sent anything.
3. **Projects** — the Projects section uses representative imagery, labelled as such. Replace the entries in `projects` (`lib/content.ts`)
   with real Ekveera projects and photos in `public/img/`, then set `placeholder: false`.

## Image credits
- Client-supplied: logo and service/architecture images (hero, facade, interiors, waterproofing, fabrication, painting, plumbing, electrical, fire-fighting, doors, amenities, tower).
- Pexels (Pexels licence): Earthwork — Ag photography (#12455093); RCC & Structural — Yajna S R (#20591229); Masonry & Plaster — Lucas Pezeta (#5242049).
- Public domain (CC0, via Openverse / WordPress Photo Directory): Flooring — marble lobby; Lift Work — bronze lift doors.
