// Carousel data with different products and images
        const carouselData = [
            {
                image: 'https://images.pexels.com/photos/10221858/pexels-photo-10221858.jpeg',
                productImage: 'https://images.pexels.com/photos/7796464/pexels-photo-7796464.jpeg',
                productTitle: 'Auréva Silk Veil Body Lotion',
                productPrice: '$24.00'
            },
            {
                image: 'https://images.pexels.com/photos/10157940/pexels-photo-10157940.jpeg',
                productImage: 'https://images.pexels.com/photos/13434508/pexels-photo-13434508.jpeg',
                productTitle: 'Auréva Radiance Face Serum',
                productPrice: '$38.00'
            },
            {
                image: 'https://images.pexels.com/photos/6954625/pexels-photo-6954625.jpeg',
                productImage: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80',
                productTitle: 'Auréva Gentle Cleansing Oil',
                productPrice: '$32.00'
            }
        ];

        let currentIndex = 0;
        let autoScrollInterval;

        // Get DOM elements
        const heroImage = document.querySelector('.hero-image');
        const productThumbnail = document.querySelector('.product-thumbnail img');
        const productTitle = document.querySelector('.product-title-mini');
        const productPrice = document.querySelector('.product-price-mini');
        const dots = document.querySelectorAll('.pagination-dot');
        const thumbnailContainer = document.querySelector('.product-thumbnail');

        // Function to update carousel content
        function updateCarousel(index) {
            const data = carouselData[index];
            
            // Fade out
            heroImage.classList.add('fade-out');
            thumbnailContainer.classList.add('fade-transition');
            productTitle.classList.add('fade-transition');
            productPrice.classList.add('fade-transition');

            setTimeout(() => {
                // Update content
                heroImage.src = data.image;
                heroImage.alt = `Woman using ${data.productTitle}`;
                productThumbnail.src = data.productImage;
                productThumbnail.alt = data.productTitle;
                productTitle.textContent = data.productTitle;
                productPrice.textContent = data.productPrice;

                // Update active dot
                dots.forEach(d => d.classList.remove('active'));
                dots[index].classList.add('active');

                // Fade in
                setTimeout(() => {
                    heroImage.classList.remove('fade-out');
                    thumbnailContainer.classList.remove('fade-transition');
                    productTitle.classList.remove('fade-transition');
                    productPrice.classList.remove('fade-transition');
                }, 50);
            }, 400);
        }

        // Function to go to next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselData.length;
            updateCarousel(currentIndex);
        }

        // Function to go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel(currentIndex);
            resetAutoScroll();
        }

        // Auto-scroll functionality
        function startAutoScroll() {
            autoScrollInterval = setInterval(nextSlide, 4000); // Change every 4 seconds
        }

        function resetAutoScroll() {
            clearInterval(autoScrollInterval);
            startAutoScroll();
        }

        // Add to Cart functionality
        const addToCartButton = document.querySelector('.add-to-cart-button');
        addToCartButton.addEventListener('click', function() {
            const currentProduct = carouselData[currentIndex].productTitle;
            console.log(`${currentProduct} added to cart`);
            
            const originalHTML = this.innerHTML;
            this.innerHTML = '<span>Added!</span>';
            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 2000);
        });

        // Pagination dots functionality
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                goToSlide(index);
            });

            // Keyboard accessibility
            dot.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToSlide(index);
                }
            });
        });

        // Pause auto-scroll on hover
        const heroSection = document.querySelector('.hero-section');
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });

        heroSection.addEventListener('mouseleave', () => {
            startAutoScroll();
        });

        // Start auto-scroll when page loads
        startAutoScroll();