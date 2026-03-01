# 🧑‍💻 Lalit Kumar Verma — Developer Portfolio

A modern, animated personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth scroll, interactive components, a live contact form, and full mobile responsiveness.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (motion/react) |
| Icons | Material Symbols + React Icons |
| Contact Form | EmailJS |
| Fonts | Space Grotesk |

---

## ✨ Features

### 🔝 Navbar
- Sticky glassmorphism navbar with animated active pill
- Active section tracked via **IntersectionObserver** (no scroll event listeners)
- Custom **smooth scroll** with configurable easing and duration
- Fully responsive — hamburger menu on mobile with animated open/close icon
- Menu closes on link click, outside tap, and locks body scroll while open

### 🏠 Hero
- Animated code editor visual with syntax highlighting
- "Open to Work" live status badge
- Social links — GitHub, LinkedIn, Instagram
- Resume download button

### 🗂️ My Work (Projects)
Three distinct sub-sections in a single view:

**Personal Projects**
- Masonry-free 2-column grid (left-to-right flow, no column layout issues)
- Per-card status badge — 🟢 Completed / 🟠 Working (with live ping animation)

**Open Source Contributions**
- Horizontal row layout with repo name, PR number, type badge (Bug Fix / Docs / Enhancement)
- Stars count + language dot on desktop, reflows below description on mobile

**Certifications**
- Same row layout with colored issuer icon, field badge, date, and "View credential" link
- Amber hover accent to visually distinguish from contributions section

### 🗺️ Journey
- Alternating left/right timeline on desktop, single-column on mobile
- Active milestone highlighted with glowing border and pulse shadow
- Mobile-safe animations (no off-screen slide-in on single column)

### 📬 Contact
- **EmailJS** powered form — no backend required
- Sending spinner, success banner, error banner with auto-dismiss
- Interactive location card — text slides up on hover, Google Maps embed slides in
- Clicking the map opens Google Maps at exact coordinates
- Pulsing blue location dot overlay on the map

### 🦶 Footer
- Social icon links — GitHub, LinkedIn, Twitter, Leetcode

---

## 🛠️ Getting Started

### Installation

```bash
# Clone the repo
git clone https://github.com/lalit2506verma/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

App runs at `http://localhost:3000`

---

## 📧 EmailJS Setup

This project uses [EmailJS](https://emailjs.com) to send contact form emails with no backend.

1. Create a free account at emailjs.com
2. Add an **Email Service** (connect Gmail/Outlook)
3. Create an **Email Template** using these variables:

```
{{from_name}}   — sender's name
{{from_email}}  — sender's email
{{subject}}     — selected subject
{{message}}     — message body
```

4. In the EmailJS template settings panel:

```
To Email   →  your@email.com
From Name  →  {{from_name}}
Reply To   →  {{from_email}}
CC         →  {{from_email}}   (optional — sends copy to sender)
```

5. Open `src/components/Contact.tsx` and fill in your credentials:

```ts
const EMAILJS_SERVICE_ID  = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY  = "your_public_key";
```

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Sticky nav with mobile menu + smooth scroll
│   ├── Hero.tsx         # Landing section with code editor visual
│   ├── Projects.tsx     # Projects, OSS contributions, certifications
│   ├── Journey.tsx      # Alternating timeline
│   ├── Contact.tsx      # EmailJS form + interactive map
│   └── Footer.tsx       # Footer with social links
├── App.tsx              # Root layout with ambient background blobs
├── main.tsx             # React entry point
└── index.css            # Tailwind + custom utilities (glass-card, code syntax)
```

---

## 📜 Scripts

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Type check with tsc
```

---

## 🙏 Acknowledgements

- [Framer Motion](https://motion.dev) — animations
- [EmailJS](https://emailjs.com) — serverless email
- [Material Symbols](https://fonts.google.com/icons) — icons
- [Tailwind CSS](https://tailwindcss.com) — styling

---

© 2025 Lalit Kumar Verma. All rights reserved.