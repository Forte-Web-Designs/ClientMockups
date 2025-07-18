// Forte Studio - Advanced Variation Generator
class VariationGenerator {
    constructor() {
        this.variations = this.initializeVariations();
    }

    initializeVariations() {
        return {
            // Layout Variations
            layouts: {
                classic: {
                    name: 'Classic Layout',
                    description: 'Traditional header-hero-services-contact layout',
                    structure: ['header', 'hero', 'services', 'about', 'contact', 'footer']
                },
                modern: {
                    name: 'Modern Grid',
                    description: 'Grid-based layout with asymmetrical elements',
                    structure: ['header', 'hero-split', 'services-grid', 'testimonials', 'contact', 'footer']
                },
                minimal: {
                    name: 'Minimal Single Page',
                    description: 'Clean single-page layout with subtle sections',
                    structure: ['header-minimal', 'hero-centered', 'services-cards', 'contact-simple', 'footer-minimal']
                },
                creative: {
                    name: 'Creative Flow',
                    description: 'Flowing sections with creative transitions',
                    structure: ['header-creative', 'hero-diagonal', 'services-stagger', 'gallery', 'contact-flow', 'footer']
                },
                professional: {
                    name: 'Corporate Professional',
                    description: 'Formal business layout with traditional elements',
                    structure: ['header-corporate', 'hero-professional', 'services-table', 'about-team', 'contact-formal', 'footer-corporate']
                },
                bold: {
                    name: 'Bold Impact',
                    description: 'High-impact layout with large elements',
                    structure: ['header-bold', 'hero-fullscreen', 'services-large', 'contact-impact', 'footer-bold']
                }
            },

            // Color Schemes
            colorSchemes: {
                ocean: { primary: '#0ea5e9', secondary: '#0284c7', accent: '#0369a1' },
                forest: { primary: '#059669', secondary: '#047857', accent: '#065f46' },
                sunset: { primary: '#f59e0b', secondary: '#d97706', accent: '#b45309' },
                royal: { primary: '#7c3aed', secondary: '#6d28d9', accent: '#5b21b6' },
                crimson: { primary: '#dc2626', secondary: '#b91c1c', accent: '#991b1b' },
                slate: { primary: '#475569', secondary: '#334155', accent: '#1e293b' },
                emerald: { primary: '#10b981', secondary: '#059669', accent: '#047857' },
                violet: { primary: '#8b5cf6', secondary: '#7c3aed', accent: '#6d28d9' },
                rose: { primary: '#f43f5e', secondary: '#e11d48', accent: '#be123c' },
                amber: { primary: '#f59e0b', secondary: '#d97706', accent: '#b45309' },
                cyan: { primary: '#06b6d4', secondary: '#0891b2', accent: '#0e7490' },
                lime: { primary: '#65a30d', secondary: '#4d7c0f', accent: '#365314' }
            },

            // Typography Styles
            typography: {
                modern: { 
                    primary: "'Inter', -apple-system, sans-serif", 
                    secondary: "'Inter', sans-serif",
                    weights: { normal: 400, medium: 500, bold: 700 }
                },
                classic: { 
                    primary: "'Georgia', 'Times New Roman', serif", 
                    secondary: "'Arial', sans-serif",
                    weights: { normal: 400, medium: 600, bold: 700 }
                },
                minimal: { 
                    primary: "'Source Sans Pro', sans-serif", 
                    secondary: "'Source Sans Pro', sans-serif",
                    weights: { normal: 300, medium: 400, bold: 600 }
                },
                creative: { 
                    primary: "'Poppins', sans-serif", 
                    secondary: "'Open Sans', sans-serif",
                    weights: { normal: 400, medium: 600, bold: 700 }
                },
                professional: { 
                    primary: "'Roboto', sans-serif", 
                    secondary: "'Roboto', sans-serif",
                    weights: { normal: 400, medium: 500, bold: 700 }
                },
                bold: { 
                    primary: "'Oswald', sans-serif", 
                    secondary: "'Arial Black', sans-serif",
                    weights: { normal: 400, medium: 600, bold: 900 }
                }
            },

            // Component Styles
            components: {
                buttons: {
                    rounded: { borderRadius: '25px', padding: '12px 24px' },
                    sharp: { borderRadius: '0px', padding: '15px 30px' },
                    soft: { borderRadius: '8px', padding: '12px 20px' },
                    pill: { borderRadius: '50px', padding: '10px 25px' }
                },
                cards: {
                    elevated: { boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderRadius: '12px' },
                    flat: { boxShadow: 'none', border: '1px solid #e5e7eb', borderRadius: '4px' },
                    soft: { boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' },
                    rounded: { boxShadow: '0 8px 25px rgba(0,0,0,0.1)', borderRadius: '16px' }
                }
            }
        };
    }

    generateVariation(baseData, variationType, styleOptions = {}) {
        const {
            layout = 'classic',
            colorScheme = 'ocean',
            typography = 'modern',
            buttonStyle = 'soft',
            cardStyle = 'soft'
        } = styleOptions;

        console.log(`🎨 Generating ${variationType} variation with ${layout} layout`);

        const variation = {
            ...baseData,
            designVariation: {
                type: variationType,
                layout: this.variations.layouts[layout],
                colors: this.variations.colorSchemes[colorScheme],
                typography: this.variations.typography[typography],
                buttons: this.variations.components.buttons[buttonStyle],
                cards: this.variations.components.cards[cardStyle]
            }
        };

        return this.createVariationHTML(variation);
    }

    createVariationHTML(data) {
        const { designVariation } = data;
        const colors = designVariation.colors;
        const fonts = designVariation.typography;
        const buttons = designVariation.buttons;
        const cards = designVariation.cards;

        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.companyName} - ${designVariation.layout.name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&family=Oswald:wght@400;600;900&display=swap" rel="stylesheet">
    <style>
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }
        
        :root {
            --primary-color: ${colors.primary};
            --secondary-color: ${colors.secondary};
            --accent-color: ${colors.accent};
            --text-color: #333333;
            --bg-color: #ffffff;
            --light-bg: #f8fafc;
        }
        
        body {
            font-family: ${fonts.primary};
            line-height: 1.6;
            color: var(--text-color);
            background: var(--bg-color);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        /* Header Styles */
        .header {
            background: var(--primary-color);
            color: white;
            padding: 1rem 0;
            position: ${designVariation.layout.name.includes('Bold') ? 'relative' : 'fixed'};
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: ${designVariation.type === 'bold' ? '2rem' : '1.8rem'};
            font-weight: ${fonts.weights.bold};
            font-family: ${fonts.primary};
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: ${fonts.weights.medium};
            transition: opacity 0.3s;
        }
        
        .nav-links a:hover {
            opacity: 0.8;
        }
        
        /* Hero Section */
        .hero {
            background: ${designVariation.type === 'creative' ? 
                `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})` :
                `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
            };
            color: white;
            padding: ${designVariation.layout.name.includes('Bold') ? '150px 0 100px' : '120px 0 80px'};
            text-align: center;
            ${designVariation.layout.name.includes('fixed') ? 'margin-top: 70px;' : ''}
        }
        
        .hero-content {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .hero h1 {
            font-size: ${designVariation.type === 'bold' ? '4rem' : 
                        designVariation.type === 'minimal' ? '2.5rem' : '3.5rem'};
            margin-bottom: 1.5rem;
            font-weight: ${fonts.weights.bold};
            font-family: ${fonts.primary};
            ${designVariation.type === 'creative' ? 'transform: rotate(-1deg);' : ''}
        }
        
        .hero p {
            font-size: ${designVariation.type === 'minimal' ? '1.1rem' : '1.3rem'};
            margin-bottom: 2rem;
            opacity: 0.95;
            font-family: ${fonts.secondary};
        }
        
        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: ${buttons.padding};
            border: none;
            border-radius: ${buttons.borderRadius};
            font-size: 1.1rem;
            font-weight: ${fonts.weights.medium};
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            transition: all 0.3s;
            font-family: ${fonts.secondary};
        }
        
        .btn-primary {
            background: white;
            color: var(--primary-color);
        }
        
        .btn-primary:hover {
            transform: ${designVariation.type === 'bold' ? 'scale(1.05)' : 'translateY(-2px)'};
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }
        
        .btn-secondary:hover {
            background: white;
            color: var(--primary-color);
        }
        
        /* Services Section */
        .services {
            padding: 80px 0;
            background: var(--light-bg);
        }
        
        .services h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--text-color);
            font-family: ${fonts.primary};
            font-weight: ${fonts.weights.bold};
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: ${designVariation.layout.name.includes('Grid') ? 
                'repeat(auto-fit, minmax(280px, 1fr))' : 
                'repeat(auto-fit, minmax(300px, 1fr))'};
            gap: ${designVariation.type === 'creative' ? '3rem' : '2rem'};
        }
        
        .service-card {
            background: white;
            padding: 2rem;
            border-radius: ${cards.borderRadius};
            text-align: center;
            box-shadow: ${cards.boxShadow};
            ${cards.border ? `border: ${cards.border};` : ''}
            transition: transform 0.3s;
            ${designVariation.type === 'creative' ? 'transform: rotate(1deg);' : ''}
        }
        
        .service-card:hover {
            transform: ${designVariation.type === 'creative' ? 'rotate(0deg) translateY(-5px)' : 'translateY(-5px)'};
        }
        
        .service-card:nth-child(even) {
            ${designVariation.type === 'creative' ? 'transform: rotate(-1deg);' : ''}
        }
        
        .service-icon {
            font-size: ${designVariation.type === 'bold' ? '4rem' : '3rem'};
            margin-bottom: 1rem;
        }
        
        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
            font-family: ${fonts.primary};
            font-weight: ${fonts.weights.bold};
        }
        
        .service-card p {
            color: var(--text-color);
            font-family: ${fonts.secondary};
            line-height: 1.6;
        }
        
        /* Contact Section */
        .contact {
            padding: 80px 0;
            background: ${designVariation.type === 'minimal' ? 'white' : 'var(--primary-color)'};
            color: ${designVariation.type === 'minimal' ? 'var(--text-color)' : 'white'};
            text-align: center;
        }
        
        .contact h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            font-family: ${fonts.primary};
            font-weight: ${fonts.weights.bold};
        }
        
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .contact-item {
            padding: 2rem;
            background: ${designVariation.type === 'minimal' ? 'var(--light-bg)' : 'rgba(255,255,255,0.1)'};
            border-radius: ${cards.borderRadius};
            ${designVariation.type === 'minimal' ? 'border: 1px solid #e5e7eb;' : ''}
        }
        
        .contact-item h3 {
            color: ${designVariation.type === 'minimal' ? 'var(--primary-color)' : 'white'};
            margin-bottom: 1rem;
            font-family: ${fonts.primary};
            font-weight: ${fonts.weights.bold};
        }
        
        /* Footer */
        .footer {
            background: var(--accent-color);
            color: white;
            text-align: center;
            padding: 3rem 0 2rem;
        }
        
        .powered-by {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255,255,255,0.2);
            opacity: 0.8;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 { 
                font-size: ${designVariation.type === 'bold' ? '2.5rem' : '2rem'}; 
            }
            .cta-buttons { 
                flex-direction: column; 
                align-items: center;
            }
            .services-grid { 
                grid-template-columns: 1fr; 
            }
            .nav-links { 
                display: none; 
            }
        }
        
        /* Animation Enhancements */
        ${designVariation.type === 'creative' ? `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(1deg); }
            50% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        .service-card {
            animation: float 6s ease-in-out infinite;
        }
        
        .service-card:nth-child(even) {
            animation-delay: 3s;
        }
        ` : ''}
        
        ${designVariation.type === 'bold' ? `
        .hero h1 {
            text-shadow: 3px 3px 0px rgba(0,0,0,0.3);
        }
        
        .service-card {
            border: 3px solid var(--primary-color);
        }
        ` : ''}
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav container">
            <div class="logo">${data.companyName}</div>
            <ul class="nav-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content container">
            <h1>Professional ${this.getServiceName(data.serviceType)} Services</h1>
            <p>${data.yearsExp} years of trusted service in ${data.cityName} and surrounding areas</p>
            <div class="cta-buttons">
                <a href="#contact" class="btn btn-primary">Get Free Estimate</a>
                <a href="tel:${data.phoneNumber}" class="btn btn-secondary">Call ${data.phoneNumber}</a>
            </div>
        </div>
    </section>

    <section class="services" id="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="services-grid">
                ${this.getVariationServiceCards(data.serviceType, designVariation.type)}
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="container">
            <h2>Contact ${data.companyName}</h2>
            <p>Ready to get started? Contact us today for your free estimate!</p>
            <div class="contact-info">
                <div class="contact-item">
                    <h3>📞 Call Us</h3>
                    <p>${data.phoneNumber}</p>
                </div>
                <div class="contact-item">
                    <h3>📍 Service Area</h3>
                    <p>${data.cityName} & Surrounding Areas</p>
                </div>
                <div class="contact-item">
                    <h3>⭐ Experience</h3>
                    <p>${data.yearsExp} Years in Business</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 ${data.companyName}. All rights reserved.</p>
            <p>Licensed & Insured • ${data.yearsExp} Years Experience</p>
            <div class="powered-by">
                <p style="font-size: 0.9rem;">Website powered by <strong>Forte Web Designs</strong></p>
                <p style="font-size: 0.8rem;">Professional Web Solutions for Your Business</p>
            </div>
        </div>
    </footer>
</body>
</html>`;
    }

    getServiceName(serviceType) {
        const names = {
            plumbing: 'Plumbing',
            hvac: 'HVAC',
            electrical: 'Electrical',
            landscaping: 'Landscaping',
            contractor: 'General Contracting'
        };
        return names[serviceType] || 'Professional Services';
    }

    getVariationServiceCards(serviceType, variationType) {
        const services = {
            plumbing: [
                { icon: '🔧', title: 'Emergency Repairs', desc: '24/7 emergency plumbing service' },
                { icon: '🚿', title: 'Fixture Installation', desc: 'Professional installation of all fixtures' },
                { icon: '🔥', title: 'Water Heater Service', desc: 'Installation and repair services' },
                { icon: '🚰', title: 'Drain Cleaning', desc: 'Complete drain cleaning solutions' }
            ],
            hvac: [
                { icon: '❄️', title: 'AC Repair', desc: 'Air conditioning repair and maintenance' },
                { icon: '🔥', title: 'Heating Service', desc: 'Furnace and heating system service' },
                { icon: '🌡️', title: 'Thermostat Install', desc: 'Smart thermostat installation' },
                { icon: '🌪️', title: 'Duct Cleaning', desc: 'Professional ductwork cleaning' }
            ],
            electrical: [
                { icon: '⚡', title: 'Electrical Repairs', desc: 'Safe and reliable electrical repairs' },
                { icon: '💡', title: 'Lighting Installation', desc: 'Indoor and outdoor lighting solutions' },
                { icon: '🔌', title: 'Panel Upgrades', desc: 'Electrical panel upgrade services' },
                { icon: '🏠', title: 'Whole House Rewiring', desc: 'Complete electrical system updates' }
            ],
            landscaping: [
                { icon: '🌿', title: 'Landscape Design', desc: 'Custom landscape design and installation' },
                { icon: '🌱', title: 'Lawn Maintenance', desc: 'Regular lawn care and maintenance' },
                { icon: '🌳', title: 'Tree Services', desc: 'Tree trimming and removal services' },
                { icon: '💧', title: 'Irrigation Systems', desc: 'Sprinkler system installation and repair' }
            ],
            contractor: [
                { icon: '🏠', title: 'Home Renovation', desc: 'Complete home renovation services' },
                { icon: '🔨', title: 'Kitchen Remodel', desc: 'Custom kitchen remodeling' },
                { icon: '🛁', title: 'Bathroom Remodel', desc: 'Bathroom renovation and remodeling' },
                { icon: '🏗️', title: 'Custom Builds', desc: 'New construction and custom building' }
            ]
        };

        const serviceList = services[serviceType] || services.plumbing;
        
        // Adjust number of services based on variation type
        const serviceCount = variationType === 'minimal' ? 3 : 
                           variationType === 'bold' ? 4 : 
                           serviceList.length;

        return serviceList.slice(0, serviceCount).map(service => `
            <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
            </div>
        `).join('');
    }

    // Generate all possible variations for a given data set
    generateAllVariations(baseData) {
        const variations = [];
        const layouts = Object.keys(this.variations.layouts);
        const colorSchemes = Object.keys(this.variations.colorSchemes);
        const typographyStyles = Object.keys(this.variations.typography);

        layouts.forEach(layout => {
            colorSchemes.forEach(colorScheme => {
                typographyStyles.forEach(typography => {
                    const variationId = `${layout}-${colorScheme}-${typography}`;
                    const variation = this.generateVariation(baseData, layout, {
                        layout,
                        colorScheme,
                        typography,
                        buttonStyle: layout === 'minimal' ? 'soft' : layout === 'bold' ? 'sharp' : 'rounded',
                        cardStyle: layout === 'minimal' ? 'flat' : layout === 'creative' ? 'rounded' : 'elevated'
                    });

                    variations.push({
                        id: variationId,
                        name: `${this.variations.layouts[layout].name} - ${colorScheme}`,
                        description: `${this.variations.layouts[layout].description} with ${colorScheme} colors`,
                        html: variation,
                        metadata: {
                            layout,
                            colorScheme,
                            typography,
                            tags: [layout, colorScheme, typography]
                        }
                    });
                });
            });
        });

        return variations;
    }
}
