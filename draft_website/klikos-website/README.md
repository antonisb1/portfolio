# Klikos The Pasta Bar — Website

A modern, fully responsive React website for **Klikos The Pasta Bar**, located in Elefsina, Greece.

## ✨ Features

- **Bilingual** — Greek 🇬🇷 and English 🇬🇧 toggle (no page reload)
- **Fully responsive** — mobile-first, works on all screen sizes
- **Sections:** Hero, About, Menu (with tabs), Services, Reviews, Gallery, Contact + Map, Footer
- **Menu placeholders** — easy to replace with real dish images
- **Gallery placeholders** — easy to replace with real photos
- **Click-to-call** button on mobile
- **Google Maps** embed for location
- **SEO-ready** meta tags
- Smooth scroll navigation with active section highlighting
- Animated hero with floating orbs, scroll indicator
- Warm cream/gold brand palette with Playfair Display typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Install & Run

```bash
# 1. Clone or download this folder
cd klikos

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder — ready to deploy to GitHub Pages, Vercel, Netlify, etc.

---

## 📁 Project Structure

```
klikos/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navbar with language toggle
│   │   ├── Navbar.css
│   │   ├── Hero.jsx        # Full-screen hero section
│   │   ├── Hero.css
│   │   ├── About.jsx       # About / story section
│   │   ├── Menu.jsx        # Menu with tabs (Pasta / Salads / Drinks)
│   │   ├── Services.jsx    # Dine-in / Takeaway / Delivery
│   │   ├── Reviews.jsx     # Customer testimonials
│   │   ├── Gallery.jsx     # Photo gallery grid
│   │   ├── Contact.jsx     # Contact info + Google Maps
│   │   ├── Footer.jsx      # Footer with links
│   │   └── sections.css    # All section styles
│   ├── context/
│   │   └── LangContext.jsx # Greek/English language context + translations
│   ├── data/
│   │   └── menuData.js     # ⭐ Edit this file to update menu items & gallery
│   ├── hooks/
│   │   └── useScroll.js    # Scroll spy + scrolled state hooks
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Global styles, variables, utilities
├── index.html
├── vite.config.js
└── package.json
```

---

## 🍝 Adding Menu Images

Open `src/data/menuData.js` and replace `image: null` with your image path:

```js
// Before
image: null,

// After (place your image in /public/images/)
image: '/images/tartuffo-pasta.jpg',
```

Put your images in the `public/images/` folder (create it if it doesn't exist).

## 📷 Adding Gallery Photos

Same file — `src/data/menuData.js`, find `galleryData`:

```js
// Before
{ id: 'g1', captionEl: 'Η κουζίνα μας', captionEn: 'Our kitchen', src: null },

// After
{ id: 'g1', captionEl: 'Η κουζίνα μας', captionEn: 'Our kitchen', src: '/images/kitchen.jpg' },
```

---

## 🗺️ Google Maps

To show the exact location on the map, replace the `MAPS_EMBED` URL in `src/components/Contact.jsx`:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your address
3. Click **Share → Embed a map**
4. Copy the `src="..."` URL from the iframe code
5. Paste it as the `MAPS_EMBED` value in `Contact.jsx`

---

## 🌐 Deploying to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
# Also add: "homepage": "https://yourusername.github.io/klikos"

npm run build
npm run deploy
```

Or deploy instantly to **Vercel** or **Netlify** by connecting your GitHub repo.

---

## 🎨 Customization

All brand colors are CSS variables in `src/index.css`:

```css
--gold:       #C9A84C;
--cream:      #FDF6E8;
--black:      #1A1A1A;
```

All translations (Greek/English) are in `src/context/LangContext.jsx`.
