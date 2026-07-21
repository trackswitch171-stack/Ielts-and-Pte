# IELTS & PTE Landing Page - Copilot Instructions

This is a modern React + Vite landing page for IELTS & PTE certificate services with SaaS-level design polish.

## Project Overview

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Type**: Static frontend-only SPA (no backend)
- **Design**: Premium, conversion-focused landing page

## Key Features Implemented

✅ Responsive single-page application with 10 main sections
✅ Glassmorphism UI with smooth animations
✅ Mobile-first design with hamburger navigation
✅ WhatsApp-first contact strategy
✅ Animated counters and interactive components
✅ Trust signals, testimonials, and FAQ sections
✅ Floating WhatsApp CTA button
✅ Clean, reusable component architecture

## Development Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/          # All React components
├── App.jsx             # Main component
├── main.jsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Customization Checklist

- [ ] Replace WhatsApp number (search `1234567890`)
- [ ] Update company branding and text
- [ ] Modify service pricing and details
- [ ] Add real testimonials
- [ ] Update contact information
- [ ] Change certificate mockup if needed
- [ ] Customize colors in tailwind.config.js if desired

## Important Files

- `tailwind.config.js` - Color scheme and design tokens
- `vite.config.js` - Build configuration
- `package.json` - Dependencies and scripts
- `index.html` - Meta tags and HTML structure

## Design System

Colors defined in Tailwind:
- Primary Orange: `#FF7A00`
- Background: `#0F172A`
- Card Background: `#111827`
- Text: `#FFFFFF`
- Muted: `#9CA3AF`
- Accent: `#3B82F6`

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Customize content and branding
4. Test on mobile devices
5. Build for production: `npm run build`
6. Deploy to your hosting

## Notes

- All images and testimonials are placeholder - replace with real content
- WhatsApp integration uses web redirect (no API needed)
- No backend required - fully static frontend
- Deploy to Vercel, Netlify, or any static hosting service

---

Last updated: 2026-06-30
