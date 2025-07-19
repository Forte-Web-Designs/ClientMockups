// Advanced animations and interactive effects
class AnimationController {
    constructor() {
        console.log('AnimationController constructor called');
        try {
            this.initializeAnimations();
            console.log('initializeAnimations completed');
        } catch (error) {
            console.error('Error in initializeAnimations:', error);
        }
        
        try {
            this.setupIntersectionObserver();
            console.log('setupIntersectionObserver completed');
        } catch (error) {
            console.error('Error in setupIntersectionObserver:', error);
        }
        
        try {
            this.setupParallaxEffects();
            console.log('setupParallaxEffects completed');
        } catch (error) {
            console.error('Error in setupParallaxEffects:', error);
        }
        
        try {
            this.setupHoverEffects();
            console.log('setupHoverEffects completed');
        } catch (error) {
            console.error('Error in setupHoverEffects:', error);
        }
        console.log('AnimationController constructor finished');
    }

    initializeAnimations() {
        // Remove staggered form-group animations to prevent messy individual animations
        // this.staggerElements('.form-group', 100);
        
        // Add page load animations
        this.addPageLoadAnimations();
        
        // Setup scroll-triggered animations
        this.setupScrollAnimations();
    }

    staggerElements(selector, delay) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * delay}ms`;
            element.classList.add('animate-slide-up');
        });
    }

    addPageLoadAnimations() {
        // Animate header
        const header = document.querySelector('.header');
        if (header) {
            header.classList.add('animate-slide-down');
        }

        // Animate title with typewriter effect
        const title = document.querySelector('.title');
        if (title) {
            this.typewriterEffect(title.querySelector('span:last-child'), title.textContent);
        }

        // Animate form with fade-in effect (cleaner than scale-in)
        const form = document.querySelector('.form');
        if (form) {
            setTimeout(() => {
                form.classList.add('animate-fade-in');
            }, 300);
        }
    }

    typewriterEffect(element, text) {
        if (!element) return;
        
        element.style.width = '0';
        element.style.overflow = 'hidden';
        element.style.whiteSpace = 'nowrap';
        element.style.borderRight = '2px solid var(--primary-color)';
        element.style.animation = 'typewriter 3s steps(40) 1s forwards, blink 1s infinite';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent = text.slice(0, i + 1);
                i++;
            } else {
                clearInterval(timer);
                // Remove cursor after completion
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add appropriate animation class
                    if (element.classList.contains('animate-on-scroll')) {
                        element.classList.add('animate-slide-up');
                    }
                    
                    // Add number counter animation for statistics
                    if (element.classList.contains('counter')) {
                        this.animateCounter(element);
                    }
                    
                    // Add progress bar animation
                    if (element.classList.contains('progress-bar')) {
                        this.animateProgressBar(element);
                    }
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.querySelectorAll('.animate-on-scroll, .counter, .progress-bar').forEach(el => {
            observer.observe(el);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.target) || 100;
        const duration = parseInt(element.dataset.duration) || 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    animateProgressBar(element) {
        const percentage = parseInt(element.dataset.percentage) || 100;
        const duration = parseInt(element.dataset.duration) || 1500;
        
        element.style.width = '0%';
        element.style.transition = `width ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.width = `${percentage}%`;
        }, 100);
    }

    setupScrollAnimations() {
        let ticking = false;

        const updateScrollAnimations = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Parallax effect for hero background
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrollY * 0.5}px)`;
            }
            
            // Fade header background
            const header = document.querySelector('.header');
            if (header) {
                const opacity = Math.min(scrollY / 100, 1);
                header.style.backgroundColor = `rgba(255, 255, 255, ${0.9 + opacity * 0.1})`;
                header.style.backdropFilter = scrollY > 50 ? 'blur(10px)' : 'none';
            }
            
            // Scale elements on scroll
            document.querySelectorAll('.scale-on-scroll').forEach(element => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementHeight = rect.height;
                
                if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                    const progress = 1 - Math.abs(elementTop - windowHeight / 2) / (windowHeight / 2);
                    const scale = 0.9 + progress * 0.1;
                    element.style.transform = `scale(${scale})`;
                }
            });
            
            ticking = false;
        };

        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollAnimations);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestScrollUpdate);
    }

    setupParallaxEffects() {
        // Create floating particles background
        this.createFloatingParticles();
        
        // Setup mouse parallax for interactive elements
        this.setupMouseParallax();
    }

    createFloatingParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'floating-particles';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        
        document.body.appendChild(particleContainer);
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(37, 99, 235, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s linear infinite;
            `;
            
            particleContainer.appendChild(particle);
        }
        
        // Add floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupMouseParallax() {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
            mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
            
            // Apply parallax to elements with mouse-parallax class
            document.querySelectorAll('.mouse-parallax').forEach(element => {
                const intensity = parseFloat(element.dataset.intensity) || 10;
                const x = mouseX * intensity;
                const y = mouseY * intensity;
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    setupHoverEffects() {
        // Add magnetic effect to buttons
        this.addMagneticEffect('.generate-btn, .action-btn');
        
        // Add ripple effect to clickable elements
        this.addRippleEffect('button, .clickable');
        
        // Add tilt effect to preview section only (removed .form to eliminate annoying hover animations)
        this.addTiltEffect('.preview-section');
    }

    addMagneticEffect(selector) {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }

    addRippleEffect(selector) {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('click', (e) => {
                const rect = element.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                `;
                
                element.style.position = 'relative';
                element.style.overflow = 'hidden';
                element.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
        
        // Add ripple animation
        if (!document.querySelector('#ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    addTiltEffect(selector) {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * -10;
                const rotateY = (x - centerX) / centerX * 10;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }

    // Utility methods for triggering animations
    triggerAnimation(element, animationClass, duration = 1000) {
        element.classList.add(animationClass);
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, duration);
    }

    createSuccessAnimation(element) {
        const checkmark = document.createElement('div');
        checkmark.innerHTML = '✓';
        checkmark.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            font-size: 2rem;
            color: #10b981;
            animation: successPop 0.5s ease-out forwards;
        `;
        
        element.style.position = 'relative';
        element.appendChild(checkmark);
        
        // Add success animation if not exists
        if (!document.querySelector('#success-animation')) {
            const style = document.createElement('style');
            style.id = 'success-animation';
            style.textContent = `
                @keyframes successPop {
                    0% {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 0;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.2);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => checkmark.remove(), 2000);
    }

    createLoadingDots(element) {
        const dots = document.createElement('div');
        dots.className = 'loading-dots';
        dots.innerHTML = '<span></span><span></span><span></span>';
        dots.style.cssText = `
            display: inline-flex;
            gap: 4px;
            margin-left: 8px;
        `;
        
        element.appendChild(dots);
        
        // Add loading dots animation if not exists
        if (!document.querySelector('#loading-dots-animation')) {
            const style = document.createElement('style');
            style.id = 'loading-dots-animation';
            style.textContent = `
                .loading-dots span {
                    width: 6px;
                    height: 6px;
                    background: currentColor;
                    border-radius: 50%;
                    animation: loadingDots 1.4s ease-in-out infinite both;
                }
                
                .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
                .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
                
                @keyframes loadingDots {
                    0%, 80%, 100% {
                        transform: scale(0);
                        opacity: 0.5;
                    }
                    40% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        return dots;
    }
}

// Smooth scroll utility
class SmoothScroll {
    constructor() {
        this.setupSmoothScrolling();
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    this.smoothScrollTo(target);
                }
            });
        });
    }

    smoothScrollTo(target, duration = 1000) {
        const start = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top + start - 100; // 100px offset for header
        const distance = targetPosition - start;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuart(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuart(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.setupPerformanceMonitoring();
    }

    setupPerformanceMonitoring() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            this.logPerformanceMetrics();
        });

        // Monitor animation performance
        this.monitorAnimationFrames();
    }

    logPerformanceMetrics() {
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            console.group('🚀 Performance Metrics');
            console.log(`Page Load Time: ${loadTime.toFixed(2)}ms`);
            console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`);
            console.log(`First Paint: ${performance.getEntriesByType('paint')[0]?.startTime.toFixed(2)}ms`);
            console.groupEnd();
        }
    }

    monitorAnimationFrames() {
        let frameCount = 0;
        let lastTime = performance.now();
        
        const measureFPS = () => {
            frameCount++;
            const now = performance.now();
            
            if (now - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (now - lastTime));
                
                // Only log if FPS is concerning
                if (fps < 50) {
                    console.warn(`⚠️ Low FPS detected: ${fps} fps`);
                }
                
                frameCount = 0;
                lastTime = now;
            }
            
            requestAnimationFrame(measureFPS);
        };
        
        requestAnimationFrame(measureFPS);
    }
}

// Initialize animations when DOM is ready
// Placeholder classes for missing components
class SmoothScroll {
    constructor() {
        console.log('SmoothScroll placeholder initialized');
    }
}

class PerformanceMonitor {
    constructor() {
        console.log('PerformanceMonitor placeholder initialized');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Animations DOMContentLoaded fired');
    try {
        new AnimationController();
        console.log('AnimationController initialized');
    } catch (error) {
        console.error('Error initializing AnimationController:', error);
    }
    
    try {
        new SmoothScroll();
        console.log('SmoothScroll initialized');
    } catch (error) {
        console.error('Error initializing SmoothScroll:', error);
    }
    
    try {
        new PerformanceMonitor();
        console.log('PerformanceMonitor initialized');
    } catch (error) {
        console.error('Error initializing PerformanceMonitor:', error);
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AnimationController,
        SmoothScroll,
        PerformanceMonitor
    };
}
