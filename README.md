# Auréva - Premium Skincare Hero Component

A sophisticated hero section component for luxury skincare brands featuring a split-layout design with interactive product showcase and image carousel functionality.

## Live Preview

[View Demo](https://thisislefa.github.io/Aureva/) | [GitHub Repo](https://github.com/thisislefa/Aureva)

## Overview

Auréva is an elegant hero section component designed for premium skincare and beauty brands. It combines compelling brand messaging with an interactive product showcase and image carousel system. The component emphasizes typographic hierarchy, subtle animations, and a refined visual aesthetic suitable for luxury products.

## Features

- **Split-Layout Design**: Headline content paired with interactive product card
- **Dynamic Image Carousel**: Multi-image support with pagination controls
- **Interactive Product Showcase**: Hover effects and transitions
- **Responsive Typography**: Instrument Serif for emphasis, Inter for body
- **Mobile-Optimized**: Stacked layout on smaller screens
- **Accessibility Ready**: Semantic HTML and ARIA labels
- **Smooth Transitions**: CSS animations for product and image changes

## Project Structure

```
Aureva/
├── index.html          # Component structure with semantic markup
├── style.css          # Complete styling with responsive design
├── script.js          # Interactive functionality
└── README.md          # This documentation
```

## Installation

### Quick Integration

```html
<!-- Include in your project -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="aureva.css">

<section class="hero-section">
  <!-- Copy HTML structure from index.html -->
</section>

<script src="aureva.js"></script>
```

## Usage

### Basic Implementation

```html
<section class="hero-section">
  <div class="hero-content-wrapper">
    <div class="hero-headline">
      <h1 class="headline-text">
        Your brand message with <em class="headline-emphasis">elegance</em> and <em class="headline-emphasis">clarity</em>.
      </h1>
    </div>

    <aside class="product-card-mini">
      <div class="product-thumbnail">
        <img src="product-image.jpg" alt="Product name">
      </div>
      <div class="product-info-mini">
        <div>
          <h3 class="product-title-mini">Product Name</h3>
          <p class="product-price-mini">$Price.00</p>
        </div>
        <button class="add-to-cart-button" aria-label="Add product to cart">
          <span>Add to Cart</span>
          <svg class="arrow-icon-small" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </aside>
  </div>

  <figure class="hero-image-container">
    <img src="hero-image.jpg" alt="Description" class="hero-image">
    <div class="pagination-dots" role="navigation" aria-label="Image carousel">
      <span class="pagination-dot active" role="button" aria-label="Image 1"></span>
      <span class="pagination-dot" role="button" aria-label="Image 2"></span>
      <span class="pagination-dot" role="button" aria-label="Image 3"></span>
    </div>
  </figure>
</section>
```

### Configuration

#### Product Data

Update the product information in the HTML structure:

```html
<aside class="product-card-mini">
  <div class="product-thumbnail">
    <img src="your-product-image.jpg" alt="Your Product Name">
  </div>
  <div class="product-info-mini">
    <div>
      <h3 class="product-title-mini">Your Product Name</h3>
      <p class="product-price-mini">$YourPrice.00</p>
    </div>
    <!-- Button remains the same -->
  </div>
</aside>
```

#### Image Carousel

Configure the image carousel by updating image sources and pagination dots:

```html
<figure class="hero-image-container">
  <img src="primary-image.jpg" alt="Description" class="hero-image">
  <div class="pagination-dots">
    <span class="pagination-dot active"></span>
    <span class="pagination-dot"></span>
    <!-- Add more dots for additional images -->
  </div>
</figure>
```

## Interactive Features

### Image Carousel

The component includes a basic image carousel system controlled by pagination dots. Clicking a dot triggers a fade transition to the corresponding image.

### Product Card Interactions

- **Hover Effects**: Button expands with increased gap between text and arrow
- **Add to Cart**: Basic button functionality (extend with JavaScript)
- **Image Transitions**: Smooth fade animations for product changes

## JavaScript Implementation

### Core Functions

```javascript
// Image carousel functionality
function switchImage(index) {
  // Update hero image
  heroImage.src = heroImages[index];
  
  // Update active pagination dot
  paginationDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Product data management
const products = [
  {
    title: "Product Name",
    price: "$24.00",
    image: "product-image.jpg",
    description: "Product description"
  }
  // Additional products...
];

function updateProductDisplay(productIndex) {
  const product = products[productIndex];
  // Update DOM elements with product data
}
```

### Event Listeners

```javascript
// Pagination dot clicks
paginationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => switchImage(index));
});

// Add to cart button
addToCartButton.addEventListener('click', () => {
  // Implement cart functionality
});
```

## Responsive Design

### Breakpoints

| Device | Layout | Typography | Image Height |
|--------|--------|------------|--------------|
| Desktop (>1024px) | Split layout (headline + product) | 34px headline | 600px |
| Tablet (768-1024px) | Stacked columns | 42px headline | Adaptive |
| Mobile (<768px) | Fully stacked | 36px headline | 400px |

### Mobile Optimizations

- Stacked product card layout
- Adjusted image heights
- Touch-friendly pagination dots
- Optimized button sizing

## Styling Customization

### CSS Variables

The component can be customized by modifying these key styles:

```css
.hero-section {
  background-color: #f5f3f0; /* Primary background */
  /* Adjust padding, margins as needed */
}

.headline-text {
  color: #000; /* Primary text color */
  /* Adjust font-size, line-height */
}

.product-card-mini {
  background-color: #fff; /* Card background */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); /* Shadow intensity */
}

.pagination-dot.active {
  background-color: #4169E1; /* Active dot color */
}
```

### Typography

The component uses two font families:
- **Inter**: Primary body font (400, 500, 600 weights)
- **Instrument Serif**: Emphasis font for italicized keywords

## Accessibility

- Semantic HTML structure
- ARIA labels for navigation elements
- Proper heading hierarchy
- Keyboard navigable pagination dots
- Screen reader friendly product information
- Color contrast compliant design

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 67+

## Performance Considerations

1. **Image Optimization**: Use compressed, properly sized images
2. **Font Loading**: Preconnect to Google Fonts
3. **CSS Animations**: Uses `opacity` and `transform` for hardware acceleration
4. **JavaScript Efficiency**: Minimal DOM manipulation

## Extending the Component

### Multiple Product Rotation

Add automatic product rotation:

```javascript
let currentProductIndex = 0;
const rotationInterval = 5000; // 5 seconds

function rotateProducts() {
  currentProductIndex = (currentProductIndex + 1) % products.length;
  updateProductDisplay(currentProductIndex);
}

setInterval(rotateProducts, rotationInterval);
```

### Enhanced Carousel

Add navigation arrows and auto-advance:

```css
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.carousel-arrow.prev { left: 20px; }
.carousel-arrow.next { right: 20px; }
```

### Shopping Cart Integration

Connect to e-commerce platforms:

```javascript
// Example: Add to cart functionality
addToCartButton.addEventListener('click', async () => {
  const product = products[currentProductIndex];
  
  try {
    const response = await fetch('/api/cart/add', {
      method: 'POST',
      body: JSON.stringify({
        productId: product.id,
        quantity: 1
      })
    });
    
    if (response.ok) {
      // Show success feedback
    }
  } catch (error) {
    // Handle error
  }
});
```

## Troubleshooting

### Common Issues

1. **Images not loading**: Check image URLs and file permissions
2. **Fonts not displaying**: Verify Google Fonts connection
3. **Layout breaks on mobile**: Ensure viewport meta tag is present
4. **JavaScript errors**: Check console for syntax or reference errors

### Debug Mode

Add debugging to track component state:

```javascript
console.log('Auréva initialized:', {
  productCount: products.length,
  imageCount: heroImages.length,
  currentImage: currentImageIndex
});
```

## License

MIT License - Free for personal and commercial use with attribution. 

## Author

**Lefa Mofokeng** - [@thisislefa](https://github.com/thisislefa)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request
   
