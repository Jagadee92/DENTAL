# Apex Dental & Implant Studio — PDF Requirements Version

This updated project preserves the existing Apex Dental visual design and patient-facing interactions while adding a React + Vite entry point, modular React section components, mock data contracts, Booking Context/localStorage support, Bootstrap 5 package integration, design tokens, animation rules, and a dedicated `/queue` waiting-room screen.

## Requirements
- Node.js 18+ recommended
- Internet connection for Google Fonts and the remote visual assets already used by the prototype

## Run locally
1. Extract the folder.
2. Open a terminal in `Apex_Dental_100pct_HTML_CSS_JS`.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Build
Run `npm run build`, then `npm run preview` to test the production build.

## Routes
- `/#/` — Apex Dental welcome page.
- `/#/clinic` — full clinic experience.
- `/#/queue` — full-screen clinic token queue demo.

## Added React architecture
- `src/components/` — reusable React section wrappers and queue screen.
- `src/context/BookingContext.jsx` — client-side booking state and appointment history persistence.
- `src/data/mockTreatments.js`, `mockDoctors.js`, `mockSlots.js`, `mockFaqs.js` — mock data schemas.
- `src/styles/globals.css` — PDF color/typography tokens.
- `src/styles/animations.css` — motion and reduced-motion rules.

## Existing behaviour preserved
The original project HTML/CSS/JavaScript interaction engine is retained to preserve the current design and tested flows. It is mounted through React section components; `legacy-preview.html`, `css/style.css`, and `js/app.js` are also retained for comparison/reference. The app is a frontend prototype only: bookings, WhatsApp notifications, tokens and queue data are simulated in the browser and are not sent to a real clinic, WhatsApp service, or backend.

## Verification checklist
- [ ] Run `npm install` and `npm run dev`.
- [ ] Test booking from treatment and doctor cards.
- [ ] Test available/unavailable slots and confirmation receipt.
- [ ] Test calendar and PDF download actions.
- [ ] Test smile assessment, treatment filters, FAQ, EMI calculator, and slider.
- [ ] Open `/queue` directly.
- [ ] Check responsive layout at 375px, 768px and 1280px+.

Note: React + Vite, Bootstrap 5, component files, mock data, Context and `/queue` are now present. Existing patient-facing controls still use the original DOM interaction engine for compatibility; a future refactor could move each interaction into native React state without changing the visual design.
