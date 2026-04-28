# UconnectA — Landing Page

Marketing landing page for **UconnectA**, a Ukrainian app for anonymous communication between drivers. Built with Vite and Tailwind CSS, fully mobile-first.

---

## Project Structure

```
landing/
├── index.html
├── package.json
└── src/
    ├── main.js                  # App entry point — renders all sections, wires up events
    ├── style.css                # Compiled Tailwind + custom styles (glass-panel, gradient-text, etc.)
    ├── download_apk.js          # APK download handler
    ├── assets/
    │   ├── icon.png             # App icon / favicon
    │   ├── chat_image.png       # Hero section phone mockup screenshot
    │   └── app-release.apk      # Android APK (not included in repo — add manually)
    └── components/
        ├── Header.js            # Fixed top nav with mobile hamburger menu
        ├── HeroSection.js       # Hero with headline, CTA button, phone mockup
        ├── HowItWorks.js        # 4-step process cards
        └── Footer.js            # Links, social icons, copyright
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Vite](https://vitejs.dev/) | ^8.0 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2 | Utility-first styling |
| [Font Awesome](https://fontawesome.com/) | 6.5 | Icons (loaded via CDN) |
| [Inter](https://fonts.google.com/specimen/Inter) | — | UI font (loaded via Google Fonts) |

Components are plain JavaScript template literals — no framework required.

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Add the APK (required for the download button to work)
cp /path/to/app-release.apk src/assets/app-release.apk

# 3. Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Available Scripts

```bash
npm run dev        # Start local dev server with hot reload
npm run build      # Build for production → ./dist
npm run preview    # Preview the production build locally
npm run deploy     # Build + deploy to GitHub Pages (via gh-pages)
```

---

## Sections

### Header
Fixed top navigation bar. On desktop (≥1024px) it shows full nav links and a download button. On mobile it collapses to a hamburger menu that slides open a nav drawer. The "Завантажити" button is always visible in the mobile header.

### Hero
Full-screen section with the main headline, a one-line value proposition, the Android download CTA, and a phone mockup showing the app's chat UI. Content is centered on mobile and splits into a two-column layout on desktop.

### How It Works
Four step-cards in a responsive grid: 1 column on mobile → 2 columns on tablet → 4 columns on desktop. Each card lifts on hover.

### Footer
Three-column link grid (Brand, Product, Company) that collapses to a two-column layout on mobile. A full-width copyright bar sits below the grid.

---

## Mobile-First Notes

The layout is designed mobile-first. Key responsive decisions:

- Background glow blobs use `min()` — e.g. `w-[min(800px,100vw)]` — so they never cause horizontal overflow on narrow viewports.
- The hero heading scales: `text-3xl` → `sm:text-4xl` → `lg:text-7xl`.
- The phone mockup image uses `w-full` with a max-width cap rather than a fixed pixel width.
- The hamburger menu uses a max-height transition (`max-height: 0` ↔ `scrollHeight`) for a smooth open/close animation without JavaScript animation libraries.

---

## Deployment

The project is pre-configured for **GitHub Pages**:

```bash
npm run deploy
```

This runs `vite build` and then pushes the `dist/` folder to the `gh-pages` branch. Make sure your repository settings point GitHub Pages to that branch.

For other hosts (Netlify, Vercel, etc.), just run `npm run build` and deploy the `dist/` folder.

---

## APK Distribution

The download button triggers `src/download_apk.js`, which serves `src/assets/app-release.apk` as a file download. The APK is excluded from version control (add it to `.gitignore`). Before building for production, place the latest APK at `src/assets/app-release.apk`.