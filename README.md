# IELTS & PTE Certificate Landing Page

A modern, premium, fully responsive React + Vite landing page for IELTS & PTE certificate services. Built with Tailwind CSS, Framer Motion, and industry best practices for high-conversion SaaS design.

## Features

✨ **Premium Design**
- SaaS-level UI/UX inspired by Stripe, Notion, and Udemy
- Glassmorphism effects and smooth animations
- Mobile-first responsive design
- Dark theme with orange accent colors

🎯 **Conversion Optimized**
- Strategic CTA placement throughout
- WhatsApp-first contact strategy
- Trust signals and social proof
- Clear value propositions

🚀 **Performance**
- Built with React + Vite for optimal speed
- Lazy loading and code splitting
- Smooth animations with Framer Motion
- Fully responsive layout

## Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library
- **Swiper.js** - Touch slider component

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation with mobile menu
│   ├── Hero.jsx                # Hero section with CTA
│   ├── SocialProof.jsx         # Trust badges and stats
│   ├── Services.jsx            # Service cards
│   ├── WhyChooseUs.jsx         # Feature highlights
│   ├── HowItWorks.jsx          # Process timeline
│   ├── Statistics.jsx          # Animated counters
│   ├── Testimonials.jsx        # Client testimonials
│   ├── FAQ.jsx                 # FAQ accordion
│   ├── Contact.jsx             # Contact form
│   ├── Footer.jsx              # Footer section
│   └── FloatingWhatsApp.jsx    # Floating WhatsApp button
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles

```

## Pages/Sections

1. **Hero Section** - High-impact headline with CTA buttons and certificate mockup
2. **Social Proof** - Trusted institutions and key statistics
3. **Services** - IELTS, PTE, and Bundle packages with pricing
4. **Why Choose Us** - 6 key features with icons and descriptions
5. **How It Works** - Step-by-step timeline of the process
6. **Statistics** - Animated counters showing impact
7. **Testimonials** - Real client reviews and ratings
8. **FAQ** - Expandable questions and answers
9. **Contact** - Form and contact methods
10. **Footer** - Links, social media, and copyright

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will open at `http://localhost:3000`

## Design System

### Colors
- **Primary Orange** - `#FF7A00` (CTAs and accents)
- **Background Navy** - `#0F172A` (Dark mode background)
- **Card Background** - `#111827` (Glass effect cards)
- **Text White** - `#FFFFFF` (Primary text)
- **Muted Gray** - `#9CA3AF` (Secondary text)
- **Accent Blue** - `#3B82F6` (Additional highlights)

### Typography
- **Headings** - Poppins (700, 800)
- **Body** - Inter (400, 500, 600, 700)

### Spacing
- Uses Tailwind's spacing scale with custom values
- Premium spacing: xs (0.5rem) to 3xl (4rem)

### Components
- 16px base border radius
- 24px large border radius
- Glassmorphism with backdrop blur
- Soft shadows and premium effects

## Customization

### Update WhatsApp Number
Replace `1234567890` in the following files:
- `Navbar.jsx`
- `Hero.jsx`
- `Contact.jsx`
- `FloatingWhatsApp.jsx`

### Add Your Content
- Update company name: Search for "IELTS Pro" or "IP"
- Modify service pricing in `Services.jsx`
- Update testimonials in `Testimonials.jsx`
- Edit FAQ items in `FAQ.jsx`

### Colors
Edit the color variables in `tailwind.config.js`:
```javascript
colors: {
  primary: "#FF7A00",      // Main orange
  secondary: "#0F172A",    // Dark background
  card: "#111827",         // Card background
  // ... update as needed
}
```

## Performance Optimization

- Images are optimized and lazy-loaded
- CSS is minified and purged of unused styles
- JavaScript is minified and split
- Animations use GPU acceleration
- Mobile-first responsive approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## SEO Considerations

- Semantic HTML structure
- Meta tags in `index.html`
- Heading hierarchy (H1, H2, H3)
- Fast page load performance
- Mobile responsiveness

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Responsive touch targets

## License

This project is created for educational purposes. You are free to use and modify it for your business needs.

## Support

For issues or questions, please create an issue in the project repository or contact the development team.

---

**Built with ❤️ for high-conversion landing pages**
