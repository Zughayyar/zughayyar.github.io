# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Anas Zughayyar (Full Stack Developer), hosted on GitHub Pages. The site is built with vanilla HTML, CSS, and JavaScript using Bootstrap 5 framework.

## Architecture

**Frontend Structure:**
- Single-page application with smooth scroll navigation
- Bootstrap 5 grid system with custom responsive layout (max-width: 1300px container)
- Unique dark sidebar navigation (15% width on desktop) that transforms into full-width sections on mobile
- Custom layout pattern: each major section follows a 3-column dark header + 9-column content grid on desktop

**Key Libraries:**
- Bootstrap 5.0.0 - Base framework
- jQuery 3.6.4 - DOM manipulation
- WOW.js - Scroll animations
- Owl Carousel - Testimonial carousel (if implemented)
- Lightbox - Portfolio image viewer
- CounterUp - Animated skill percentage counters
- Waypoints - Scroll-triggered events

## File Organization

```
/
├── index.html          # Main HTML file (single page)
├── css/
│   ├── bootstrap.min.css
│   └── style.css       # Custom styles with responsive breakpoints
├── js/
│   └── main.js         # jQuery-based interactions and initializations
├── scss/
│   └── bootstrap/      # Bootstrap source SCSS files
├── lib/                # Third-party libraries
├── img/                # Images and portfolio screenshots
└── cv/                 # CV PDF file
```

## Styling Architecture

**Custom CSS System (css/style.css):**
- Uses CSS custom properties from Bootstrap (var(--bs-primary), var(--bs-dark), etc.)
- Custom padding utilities: `.pt-6`, `.ps-6`, `.pe-6`, `.pb-6` (60px padding)
- Responsive breakpoint: 992px (lg) for desktop/mobile layout switching
- Section pattern: Dark 15% sidebar uses `::before` pseudo-element positioned absolutely
- Each major section (About, Education, Skills, Service, Portfolio) follows identical structure

**Key Design Patterns:**
- Hover effects on navigation items (expand right on hover)
- Portfolio images rotate on hover (-6deg rotation)
- Social icon overlays on about image (slides down from top on hover)
- Decorative borders on education items using `::before` and `::after` pseudo-elements

## Navigation

**Internal Navigation:**
- Anchor-based smooth scroll to sections using IDs: `#pigraHome`, `#pigraAbout`, `#pigraService`
- Fixed sidebar navigation that stays centered vertically
- Mobile navigation collapses to top of page

## Content Sections

1. **Header** - Hero section with profile image and contact info
2. **About** - Bio with social links overlay on image hover
3. **Education** - Timeline of educational qualifications
4. **Skills** - Animated percentage counters (HTML5, CSS3, JS, TypeScript, Python, Java)
5. **Service** - Services offered (Web Dev, Mobile App, Software Dev)
6. **Portfolio** - Project showcase with lightbox (FirmHub, Certificate Manager, Medi-Tracker)
7. **Footer** - Social links and copyright

## Development Notes

**No Build Process:**
- This is a static site with no build step or package manager
- Direct file editing for all changes
- SCSS files present but not actively compiled (use pre-compiled bootstrap.min.css)

**Responsive Behavior:**
- Desktop (≥992px): 15% dark sidebar + 85% content area
- Mobile (<992px): Full-width stacked sections with 25px padding
- Custom breakpoints also at 576px for testimonial carousel adjustments

**jQuery Dependencies:**
- Main.js requires jQuery to be loaded first
- All interactive features (spinner, scroll effects, carousels, counters) use jQuery selectors

## External Links

- LinkedIn: https://www.linkedin.com/in/anasez
- GitHub: https://github.com/Zughayyar
- CV: ./cv/Anas Zughayyar - CV.pdf

## Deployment

This is a GitHub Pages site (zughayyar.github.io). Changes pushed to the main branch are automatically deployed.
