# static/

Static assets for the CardioInsight Flask app.

```
static/
├── css/
│   └── style.css   # All site styles — light theme, responsive layout
├── js/
│   └── main.js     # Scroll header, mobile menu, dashboard nav,
│                   # fullscreen modal, fade-in animations, contact form
└── images/         # Static images and SVG illustrations
```

### style.css
Uses CSS custom properties (variables) for theming. Key sections:
- Reset & base typography
- Navbar (sticky, scroll-shrink effect)
- Hero section
- Feature cards
- Page banner (interior pages)
- Dashboard layout + sidebar
- Visualization grid + fullscreen modal
- Contact form
- Footer
- Responsive breakpoints (1100px, 900px, 768px, 480px)

### main.js
Vanilla JS — no framework dependencies. Handles:
- Header shrink on scroll
- Mobile menu toggle
- Dashboard slide navigation
- Visualization fullscreen modal
- Scroll-triggered fade-in animations (IntersectionObserver)
- Async contact form submission with toast notifications

