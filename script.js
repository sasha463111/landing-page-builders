// ============================================
// Form Handling
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('main-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide previous messages
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';

            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const terms = formData.get('terms');

            // Basic validation
            if (!name || !email || !phone || !terms) {
                errorMessage.style.display = 'block';
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'אנא הכנס כתובת אימייל תקינה';
                return;
            }

            // Phone validation (basic - Israeli format)
            const phoneRegex = /^[0-9]{9,10}$/;
            const cleanPhone = phone.replace(/[-\s]/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'אנא הכנס מספר טלפון תקין';
                return;
            }

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                successMessage.style.display = 'block';
                form.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 500);

            // In production, you would send the data to your server:
            /*
            fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    successMessage.style.display = 'block';
                    form.reset();
                } else {
                    errorMessage.style.display = 'block';
                }
            })
            .catch(error => {
                errorMessage.style.display = 'block';
            });
            */
        });
    }

    // ============================================
    // Smooth scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // Video placeholder click handler
    // ============================================
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // Replace with actual video embed or modal
            alert('שמח לראות אותך כאן! הסרטון יפתח בקרוב. בינתיים, תוכל לתאם פגישה למטה.');
            // Example: Open video modal
            // const videoModal = document.getElementById('video-modal');
            // if (videoModal) {
            //     videoModal.style.display = 'flex';
            // }
        });
    }

    // ============================================
    // Intersection Observer for animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.stat-item, .problem-item, .faq-item, .team-member, .testimonial');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================================
    // Infinite scroll wheels enhancement
    // ============================================
    const wheels = document.querySelectorAll('.wheel-content');
    wheels.forEach((wheel, index) => {
        // Pause animation on hover
        wheel.parentElement.addEventListener('mouseenter', function() {
            wheel.style.animationPlayState = 'paused';
        });

        wheel.parentElement.addEventListener('mouseleave', function() {
            wheel.style.animationPlayState = 'running';
        });

        // Add more items for seamless loop
        const originalContent = wheel.innerHTML;
        wheel.innerHTML = originalContent + originalContent;
    });

    // ============================================
    // FAQ Accordion functionality (optional enhancement)
    // ============================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.style.cursor = 'pointer';
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            
            // Toggle active class
            faqItem.classList.toggle('active');
            
            // Smooth scroll to question
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        });
    });

    // ============================================
    // Header scroll effect
    // ============================================
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // ============================================
    // Stats counter animation
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element) {
        const text = element.textContent;
        const numberMatch = text.match(/[\d,]+/);
        
        if (numberMatch) {
            let targetNumber = parseInt(numberMatch[0].replace(/,/g, ''));
            const suffix = text.replace(numberMatch[0], '').trim();
            let currentNumber = 0;
            const increment = targetNumber / 50;
            const duration = 2000; // 2 seconds
            const stepTime = duration / 50;

            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                    element.textContent = formatNumber(targetNumber) + suffix;
                    clearInterval(timer);
                } else {
                    element.textContent = formatNumber(Math.floor(currentNumber)) + suffix;
                }
            }, stepTime);
        }
    }

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    }
});

// ============================================
// Utility Functions
// ============================================

// Add loading state to buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = '<span>שולח...</span>';
    } else {
        button.disabled = false;
        button.innerHTML = 'שלח';
    }
}

// Format phone number input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value;
                } else if (value.length <= 6) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 9);
                }
            }
            e.target.value = value;
        });
    }
});
