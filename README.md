# Modern Multi-Page Next.js & Material UI (MUI) Website

A production-ready, fully responsive multi-page website built with **Next.js (App Router)**, **Material UI (MUI)**, and **JavaScript JSX**.

Designed with **content separation** so you can easily drop in your content, context, images, branding, and contact details whenever you are ready.

---

## 🌟 Key Features

- **Multi-Page Architecture**:
  - `src/app/page.jsx` — **Home**: Hero section, key metrics, feature cards, architecture highlights, and CTA banner.
  - `src/app/about/page.jsx` — **About**: Mission & vision, core values grid, and team member profiles.
  - `src/app/services/page.jsx` — **Services**: Service offerings with deliverables, highlight badges, and interactive FAQ accordion.
  - `src/app/portfolio/page.jsx` — **Portfolio**: Category filtering (All, Web App, UI/UX, Enterprise, E-Commerce), project cards, and case study modal.
  - `src/app/contact/page.jsx` — **Contact**: Contact cards (Email, Phone, Address, Hours), interactive inquiry form with validation, and confirmation alert.
  - `src/app/not-found.jsx` — **Custom 404**: Clean branded error state.
- **JavaScript JSX Everywhere**: Every page, component, and layout is built using `.jsx`.
- **Material UI (MUI)**:
  - Responsive AppBar with mobile hamburger `Drawer`.
  - Rich Footer with navigation links, contact info, and newsletter subscription.
  - Light & Dark mode toggle with OS preference detection and persistence.
  - `@mui/material-nextjs` AppRouterCacheProvider for zero-flash SSR hydration.
- **Centralized Content**: Easily customize your copy in `src/data/content.js` and `src/config/siteConfig.js` without touching component markup.

---

## 📁 Project Structure

```text
bhimal/
├── .env.example                      # Environment variables template
├── .env.local                        # Local development variables
├── jsconfig.json                     # Path alias configuration (@/*)
├── next.config.mjs                   # Next.js configuration
├── package.json                      # Dependencies and scripts
├── public/                           # Static assets (favicons, images)
├── src/
│   ├── app/
│   │   ├── layout.jsx                # Root layout (Theme & Cache Providers, Navbar, Footer)
│   │   ├── globals.css               # Smooth scrolling and CSS resets
│   │   ├── not-found.jsx             # Custom 404 page
│   │   ├── page.jsx                  # Home Page (/)
│   │   ├── about/
│   │   │   └── page.jsx              # About Page (/about)
│   │   ├── services/
│   │   │   └── page.jsx              # Services & FAQ (/services)
│   │   ├── portfolio/
│   │   │   └── page.jsx              # Projects & Case Studies (/portfolio)
│   │   └── contact/
│   │       └── page.jsx              # Interactive Contact Form (/contact)
│   ├── components/
│   │   ├── Navbar.jsx                # Responsive AppBar & Mobile Drawer
│   │   ├── Footer.jsx                # Footer with links & newsletter
│   │   ├── SectionHeader.jsx         # Section titles & badges
│   │   └── ThemeClientProvider.jsx   # ThemeProvider & Light/Dark Mode switch
│   ├── config/
│   │   └── siteConfig.js             # Brand name, URLs, nav links, contact info
│   ├── data/
│   │   └── content.js                # Content for Home, About, Services, Portfolio, FAQ
│   └── theme/
│       └── theme.js                  # MUI Palette, Typography, and component styles
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ (tested on Node v26)
- **npm** (or `pnpm` / `yarn`)

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

### 4. Run Linter
```bash
npm run lint
```

---

## ✍️ How to Customize Your Content & Context

### 1. Changing Brand Name, Links & Contact Details
Open `src/config/siteConfig.js`:
```javascript
export const siteConfig = {
  name: "YourBrand",
  description: "Your custom description...",
  contact: {
    email: "your-email@example.com",
    phone: "+1 (555) 987-6543",
    address: "Your City, State, Country",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM",
  },
  // ...
};
```

### 2. Changing Page Content
Open `src/data/content.js` to modify:
- **`homeContent`**: Hero title, subtitle, stats numbers, feature highlights, and CTA copy.
- **`aboutContent`**: Company mission, core values, and team members (names, photos, bios).
- **`servicesContent`**: Service cards, list of deliverables, and FAQ questions/answers.
- **`portfolioContent`**: Project titles, categories, images, and case studies.

### 3. Adding New Pages
1. Create a new folder inside `src/app/`, for example `src/app/pricing/`.
2. Add a `page.jsx` inside it:
   ```jsx
   'use client';
   import { Container, Typography } from '@mui/material';

   export default function PricingPage() {
     return (
       <Container sx={{ py: 8 }}>
         <Typography variant="h3">Pricing Plans</Typography>
       </Container>
     );
   }
   ```
3. Add the route to `navLinks` in `src/config/siteConfig.js`.

### 4. Adjusting Theme Colors & Typography
Open `src/theme/theme.js` to customize:
- Primary and secondary palette colors (`primary.main`, `secondary.main`).
- Dark mode background colors (`background.default`, `background.paper`).
- Typography font family, heading weights, and button border-radius.
