# Öztürk Doğrama Website

A static, minimalist, bilingual (TR/EN) website for Öztürk Doğrama — a carpentry & furniture workshop in Bartın, Türkiye, making custom wooden doors, cupboards, staircases, gazebos, and more.

## Pages
- `index.html` — Home
- `products.html` — Products (doors, cupboards & furniture, other custom work)
- `about.html` — About the company
- `contact.html` — Contact form, info & map

## Files
- `style.css` — shared styles
- `script.js` — mobile nav, language toggle, contact form handling
- `translations.js` — TR (default) and EN copy for every page
- `logo-icon.png` / `favicon.png` / `favicon-180.png` — logo assets, cropped from the brand logo
- `logo-full.png` — the full logo lockup (icon + wordmark)

## Language toggle
The site defaults to Turkish. Clicking the **EN** button in the top-right of the nav switches the whole site to English (saved in the visitor's browser). To edit copy, open `translations.js` — every string lives under `TRANSLATIONS.tr` and `TRANSLATIONS.en`.

## Deploying for free
This is a static site, so it can be hosted for free on **GitHub Pages**:

1. Push this repo to GitHub.
2. Go to the repo's **Settings → Pages**.
3. Under "Source," select the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://ecetuanahezer.github.io/ozturkdogramawebsite/` within a minute or two.

## To customize
- Swap the gradient placeholder blocks (`.ph-image`) in `products.html` and `index.html` for real product photos.
- Update copy in `translations.js` (not directly in the HTML) so both languages stay in sync.
- Contact info (phone, email, Instagram, address) is set in `contact.html` and each page's footer — update in both places if it changes.
