# Design Guidelines: Christian Coloring Books Sales Page Clone

## Design Approach
**Reference-Based Cloning**: Replicate the exact visual style, layout, and structure from the provided screenshots. This is a direct clone request - maintain maximum fidelity to the original design.

## Color Palette
- **Primary Blue**: #5B9FED (hero background, headers)
- **CTA Green**: #00BF8F (all call-to-action buttons)
- **Accent Yellow**: #FFC107 (badges, highlights)
- **Alert Red**: #FF5252 (urgency elements, discounts)
- **White**: #FFFFFF (text on colored backgrounds, cards)
- **Light Gray**: #F5F5F5 (section backgrounds)
- **Dark Text**: #2C3E50 (body text)

## Typography
- **Headings**: Bold, sans-serif (Montserrat or similar)
  - H1: 48px desktop, 32px mobile, extra bold
  - H2: 36px desktop, 28px mobile, bold
  - H3: 24px desktop, 20px mobile, semi-bold
- **Body**: 16px, regular weight, line-height 1.6
- **Buttons**: 18px, bold, uppercase

## Layout System
- **Container**: max-w-7xl, centered
- **Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- **Section Padding**: py-16 desktop, py-12 mobile

## Page Sections (In Order)

### 1. Sticky Top Banner
- Red background (#FF5252)
- Countdown timer to 08/11/25
- "OFERTA LIMITADA" messaging
- White text, centered

### 2. Hero Section
- Gradient blue background (#5B9FED to lighter blue)
- Left: Product image (stack of 35 coloring books)
- Right: Headline, subheadline, 3 info badges (estrelas 4.9/5, SSL seguro, 347 avaliações)
- Large green CTA button
- Full-width section, content in 2-column grid

### 3. Benefits Section ("Por que escolher")
- White/light gray background
- 2x2 grid on desktop, stack on mobile
- Cards with: Icon (colorful), title, short description
- Topics: Células, Escola Dominical, Devocional, Pedagógico

### 4. Product Gallery ("Conheça os Livros")
- Grid layout: 3-4 columns desktop, 2 mobile
- Individual book cover images
- Subtle shadows on cards
- White background

### 5. Testimonials Carousel
- Screenshot-style testimonial cards
- Star ratings visible
- Customer names/photos
- Carousel navigation dots
- Light background

### 6. Pricing Section
- 2-column layout: Basic vs Premium
- Card design with borders
- Badge: "MAIS VENDIDO" on Premium
- Strikethrough original prices
- Bold discount percentages (-79%, -93%)
- List of bonuses included
- Green CTA buttons in each card
- White card backgrounds, subtle shadows

### 7. FAQ Section
- Accordion-style expandable items
- Question in bold, answer hidden until clicked
- Icons for expand/collapse
- Alternating light gray backgrounds

### 8. Guarantee Section
- Shield/protection icon (large, centered)
- "7 DIAS DE GARANTIA" headline
- Description text
- Green background accent or badge
- Centered layout

### 9. Final CTA Banner
- Blue background matching hero
- Urgent messaging
- Large green CTA button
- Centered content

## Components Library

**Badges**: Rounded, colored backgrounds (yellow/red), white text, small padding
**CTA Buttons**: Green (#00BF8F), white text, rounded corners (8px), bold uppercase, py-4 px-8, subtle shadow, no hover effects needed
**Cards**: White background, rounded corners (12px), shadow-sm, padding p-6
**Star Ratings**: Yellow stars (#FFC107), 5-star display with numerical rating
**Icons**: Use Heroicons for UI elements (checkmarks, shields, stars)

## Images Required
- **Hero Product Image**: Stack of 35 coloring books (main product shot)
- **Individual Book Covers**: 12-15 different coloring book covers for gallery
- **Testimonial Screenshots**: 6-8 WhatsApp/message-style testimonial images
- **Icons**: Shield (guarantee), checkmark (benefits), star (ratings)

## Responsive Behavior
- Desktop: 2-column layouts for hero, pricing
- Tablet: Reduce to single column, maintain card grids
- Mobile: Stack all sections, full-width buttons
- Maintain readability and CTA prominence on all devices

## Key Visual Elements
- **Discount badges**: Circular, red background, white text showing "-79%" or "-93%"
- **SSL badge**: Small padlock icon with "Pagamento Seguro"
- **Star ratings**: Consistently show 4.9/5 with star icons
- **Urgency indicators**: Countdown timer, limited offer banners (red)

## Animations
Minimal - only subtle hover states on cards and smooth accordion transitions. No distracting effects.