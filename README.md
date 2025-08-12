# Portfolio - Thiago André (Vite + React)

## Quick start
1. `npm install`
2. `npm run dev` (development)
3. `npm run build` (production)

## Important
- Drop your images (PNG) in the `public/` folder in the paths below:
  - `public/profile.png` — profile photo
  - `public/header/linkedin.png`
  - `public/header/email.png`
  - `public/header/github.png`
  - `public/skills/...` — skill logos
  - `public/projects/<repo-slug>.png` — optional project thumbnails
- Replace `FORMSPREE_ENDPOINT` in `src/config.js` with your Formspree URL.
- GitHub is fetched via public API (no token).
- To change typing speed adjust `HERO_TYPING_SPEED` in `src/config.js`.

## Notes
- GSAP is used for entrance animations and neon/pulse effects.
- The typing effect is applied ONLY to the HERO text (stagger 0.3s).
- All sections animate into view on scroll.
