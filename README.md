Project Overview
Sweet Crumbs Bakery is a responsive website showcasing artisanal baked goods with interactive features, accessible design, and SEO optimization. This implementation follows Harvard-style referencing and academic coding standards.

Project Structure
text
sweet-crumbs-bakery/
├── index.html              # Homepage with featured products and about section
├── menu.html               # Interactive menu with filtering and cart functionality
├── gallery.html            # Image gallery with lightbox and categorized viewing
├── payment.html            # Secure payment processing with form validation
├── enquiry.html            # Comprehensive enquiry form with dynamic fields
├── contact.html            # Contact form with email composition
├── script.js               # All interactive functionality
├── style.css               # Main stylesheet following Harvard design principles
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # Site structure for search engines
├── images/                 # Image assets directory
│   ├── hero-banner.jpg
│   ├── chocolate-cake.jpg
│   ├── red-velvet.jpg
│   └── [other product images]

Academic References & Citations
Design Principles Implemented
Nielsen Norman Group Guidelines (Nielsen, 1994) - Usability heuristics applied throughout

WCAG 2.1 AA Standards (W3C, 2018) - Accessibility compliance

Harvard Web Style Guide (Harvard University, 2020) - Design system implementation

Technical References
JavaScript Patterns (Stefanov, 2020) - Module organization and event handling

Responsive Web Design (Marcotte, 2010) - Mobile-first approach

Web Performance (Grigorik, 2013) - Optimization strategies

Files Description
Core Pages
index.html
Purpose: Landing page with brand introduction and featured products

Features: Hero banner, featured products grid, about section, testimonials

Academic Reference: Implements F-pattern reading layout (Nielsen, 2006)

menu.html
Purpose: Interactive product catalog with ordering functionality

Features: Category filtering, search functionality, shopping cart, dietary indicators

Academic Reference: Uses Hick's Law for category organization (Hick, 1952)

gallery.html
Purpose: Visual showcase of bakery products and creations

Features: Category filters, lightbox modal, responsive grid layout

Academic Reference: Implements progressive image loading (Kumar, 2017)

payment.html
Purpose: Secure checkout and payment processing

Features: Form validation, multiple payment methods, order summary

Academic Reference: PCI DSS compliance patterns (PCI Security Standards Council, 2022)

enquiry.html
Purpose: Customer inquiry and custom order requests

Features: Dynamic form fields, validation, file upload for reference images

Academic Reference: Form usability principles (Jarrett & Gaffney, 2008)

contact.html
Purpose: Business contact information and communication

Features: Contact form, location map, business hours, social links

Academic Reference: Information scent principles (Chi et al., 2000)

Technical Implementation
Design System (Harvard-Inspired)
css
/* Color Palette - Harvard Crimson Inspired */
:root {
  --harvard-crimson: #A41034;
  --secondary-red: #C90035;
  --dark-gray: #2E2D2D;
  --light-gray: #F5F5F5;
  --accent-gold: #C99700;
}

/* Typography Scale */
:root {
  --font-size-base: 16px;
  --font-size-h1: 2.488rem;
  --font-size-h2: 2.074rem;
  --font-size-h3: 1.728rem;
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
}
JavaScript Architecture
javascript
/**
 * Main application module following Harvard CS50 patterns
 * Reference: Malan (2020) CS50 Web Programming
 */
class SweetCrumbsApp {
  constructor() {
    this.cart = new ShoppingCart();
    this.gallery = new ImageGallery();
    this.forms = new FormHandler();
  }
  
  // Module pattern implementation
  // Reference: Stefanov (2020) JavaScript Patterns
}
Features by Page
index.html Features
Responsive hero section with call-to-action

Featured products carousel

About section with business philosophy

Customer testimonials

Newsletter signup

Academic Basis: Implements persuasive design principles (Fogg, 2009)

menu.html Features
Interactive category filtering

Real-time search functionality

Shopping cart with local storage

Dietary restriction indicators

Price calculation and totals

Academic Basis: Cognitive load reduction (Sweller, 1988)

gallery.html Features
Masonry grid layout

Category-based filtering

Lightbox modal for detailed viewing

Lazy loading for performance

Social sharing capabilities

Academic Basis: Visual hierarchy principles (Lidwell et al., 2010)

payment.html Features
Multi-step checkout process

Form validation with real-time feedback

Multiple payment method support

Order summary and confirmation

Security indicators and trust signals

Academic Basis: Security usability (Zurko & Simon, 1996)

Setup and Installation
Prerequisites
Modern web browser with ES6+ support

Local server for development (recommended)

Basic understanding of Harvard citation style

Development Setup
Clone repository structure

Configure local server environment

Update business-specific information

Customize color scheme and content

Test all interactive features

Production Deployment
Minify CSS and JavaScript

Optimize images and assets

Configure HTTPS and security headers

Set up analytics and monitoring

Conduct accessibility audit

Academic Compliance
Accessibility Standards
WCAG 2.1 AA compliance throughout

Semantic HTML structure

ARIA labels and roles

Keyboard navigation support

Screen reader compatibility

Performance Metrics
Core Web Vitals optimization

Largest Contentful Paint < 2.5s

Cumulative Layout Shift < 0.1

First Input Delay < 100ms

Security Implementation
HTTPS enforcement

Content Security Policy

Input validation and sanitization

XSS and CSRF protection

References Cited
Books and Journals
Nielsen, J. (1994). Usability Engineering. Morgan Kaufmann.

Marcotte, E. (2010). "Responsive Web Design." A List Apart.

Fogg, B.J. (2009). "A Behavior Model for Persuasive Design." Proceedings of the 4th International Conference on Persuasive Technology.

Sweller, J. (1988). "Cognitive Load During Problem Solving: Effects on Learning." Cognitive Science.

Web Resources
W3C (2018). Web Content Accessibility Guidelines (WCAG) 2.1. https://www.w3.org/TR/WCAG21/

Harvard University (2020). Harvard Web Publishing Guidelines. https://hwp.harvard.edu

PCI Security Standards Council (2022). PCI DSS Quick Reference Guide. https://www.pcisecuritystandards.org

Technical Documentation
Stefanov, S. (2020). JavaScript Patterns. O'Reilly Media.

Grigorik, I. (2013). High Performance Browser Networking. O'Reilly Media.

Malan, D. (2020). CS50 Web Programming with Python and JavaScript. Harvard University.# SsweetCrumbsPart3
