// Forte Studio Website Generator - Enhanced with 20+ Unique Variations
class WebsiteGenerator {
    constructor() {
        console.log('🚀 WebsiteGenerator initializing...');
        this.setupVariations();
        console.log('✅ WebsiteGenerator ready with 20+ unique variations!');
    }

    setupVariations() {
        this.layouts = [
            'hero-split', 'centered', 'asymmetric', 'fullwidth', 'minimal', 'corporate',
            'creative', 'modern', 'classic', 'elegant', 'tech', 'artistic', 'luxury',
            'industrial', 'magazine', 'portfolio', 'boxed', 'wide', 'stacked', 'bold'
        ];

        this.colorSchemes = [
            { name: 'ocean', primary: '#667eea', secondary: '#764ba2', bg: 'linear-gradient(135deg, #667eea, #764ba2)', type: 'gradient' },
            { name: 'sunset', primary: '#ff6b6b', secondary: '#ee5a24', bg: 'linear-gradient(135deg, #ff6b6b, #ee5a24)', type: 'gradient' },
            { name: 'forest', primary: '#10ac84', secondary: '#00d2d3', bg: 'linear-gradient(135deg, #10ac84, #00d2d3)', type: 'gradient' },
            { name: 'royal', primary: '#5f27cd', secondary: '#341f97', bg: 'linear-gradient(135deg, #5f27cd, #341f97)', type: 'gradient' },
            { name: 'crimson', primary: '#c23616', secondary: '#e55039', bg: 'linear-gradient(135deg, #c23616, #e55039)', type: 'gradient' },
            { name: 'emerald', primary: '#00b894', secondary: '#00cec9', bg: 'linear-gradient(135deg, #00b894, #00cec9)', type: 'gradient' },
            { name: 'violet', primary: '#6c5ce7', secondary: '#a29bfe', bg: 'linear-gradient(135deg, #6c5ce7, #a29bfe)', type: 'gradient' },
            { name: 'amber', primary: '#fdcb6e', secondary: '#e17055', bg: 'linear-gradient(135deg, #fdcb6e, #e17055)', type: 'gradient' },
            { name: 'rose', primary: '#fd79a8', secondary: '#e84393', bg: 'linear-gradient(135deg, #fd79a8, #e84393)', type: 'gradient' },
            { name: 'cyan', primary: '#00cec9', secondary: '#55a3ff', bg: 'linear-gradient(135deg, #00cec9, #55a3ff)', type: 'gradient' },
            { name: 'slate', primary: '#2d3748', secondary: '#4a5568', bg: '#f7fafc', type: 'solid' },
            { name: 'navy', primary: '#1a202c', secondary: '#2d3748', bg: '#edf2f7', type: 'solid' },
            { name: 'teal', primary: '#285e61', secondary: '#2c7a7b', bg: '#e6fffa', type: 'solid' },
            { name: 'indigo', primary: '#3c366b', secondary: '#553c9a', bg: '#f0fff4', type: 'solid' },
            { name: 'purple', primary: '#44337a', secondary: '#6b46c1', bg: '#faf5ff', type: 'solid' },
            { name: 'pink', primary: '#97266d', secondary: '#db2777', bg: '#fdf2f8', type: 'solid' },
            { name: 'orange', primary: '#c05621', secondary: '#ea580c', bg: '#fffbeb', type: 'solid' },
            { name: 'lime', primary: '#65a30d', secondary: '#84cc16', bg: '#f7fee7', type: 'solid' },
            { name: 'sky', primary: '#0369a1', secondary: '#0284c7', bg: '#f0f9ff', type: 'solid' },
            { name: 'stone', primary: '#57534e', secondary: '#78716c', bg: '#fafaf9', type: 'solid' }
        ];

        this.components = [
            'grid-tiles', 'masonry', 'carousel', 'feature-boxes', 'service-list',
            'portfolio-grid', 'icon-boxes', 'accordion', 'tabs', 'cards-flip',
            'timeline', 'testimonial-slider', 'pricing-table', 'team-showcase',
            'gallery-lightbox', 'contact-form', 'stats-counter', 'progress-bars'
        ];

        this.fonts = [
            { heading: 'Poppins', body: 'Open Sans' },
            { heading: 'Montserrat', body: 'Lato' },
            { heading: 'Playfair Display', body: 'Source Sans Pro' },
            { heading: 'Roboto Slab', body: 'Roboto' },
            { heading: 'Nunito', body: 'Nunito Sans' },
            { heading: 'Inter', body: 'Inter' }
        ];

        this.industries = {
            plumbing: {
                services: ['Emergency Repairs', 'Drain Cleaning', 'Water Heater Installation', 'Pipe Replacement', 'Leak Detection', 'Bathroom Plumbing'],
                taglines: ['Fast & Reliable Plumbing', 'Your Trusted Plumber', '24/7 Emergency Service', 'Quality Workmanship Guaranteed', 'Licensed & Insured Professionals'],
                icons: ['🔧', '🚰', '🔨', '⚡', '🏠', '🚿'],
                heroIcon: '🔧',
                primaryColor: '#2196F3',
                secondaryColor: '#1976D2',
                backgroundPattern: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
                specialtyFeatures: ['24/7 Emergency Service', 'Licensed & Insured', 'Free Estimates', 'Warranty Included']
            },
            hvac: {
                services: ['AC Installation', 'Heating Repair', 'Duct Cleaning', 'System Maintenance', 'Energy Efficiency', 'Smart Thermostats'],
                taglines: ['Comfort All Year Round', 'Expert HVAC Solutions', 'Indoor Air Quality Specialists', 'Energy Efficient Systems', 'Climate Control Experts'],
                icons: ['🌡️', '❄️', '🔥', '💨', '🏠', '⚙️'],
                heroIcon: '🌡️',
                primaryColor: '#4CAF50',
                secondaryColor: '#2E7D32',
                backgroundPattern: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                specialtyFeatures: ['Energy Efficient', 'Smart Home Integration', 'Preventive Maintenance', 'Emergency Repairs']
            },
            electrical: {
                services: ['Wiring Installation', 'Panel Upgrades', 'Outlet Repair', 'Lighting Solutions', 'Safety Inspections', 'Smart Home Setup'],
                taglines: ['Powering Your Home Safely', 'Licensed Electrical Experts', '24/7 Emergency Electrical', 'Safe & Reliable Service', 'Modern Electrical Solutions'],
                icons: ['⚡', '💡', '🔌', '⭐', '🏠', '🔧'],
                heroIcon: '⚡',
                primaryColor: '#FF9800',
                secondaryColor: '#F57C00',
                backgroundPattern: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
                specialtyFeatures: ['Licensed Electricians', 'Code Compliant', '24/7 Emergency', 'Safety First']
            },
            landscaping: {
                services: ['Lawn Care', 'Garden Design', 'Tree Services', 'Irrigation Systems', 'Hardscaping', 'Seasonal Cleanup'],
                taglines: ['Beautiful Outdoor Spaces', 'Transform Your Landscape', 'Professional Lawn Care', 'Year-Round Maintenance', 'Nature-Inspired Design'],
                icons: ['🌿', '🌱', '🌳', '🏡', '✨', '🌸'],
                heroIcon: '🌿',
                primaryColor: '#8BC34A',
                secondaryColor: '#689F38',
                backgroundPattern: 'linear-gradient(135deg, #8BC34A 0%, #689F38 100%)',
                specialtyFeatures: ['Eco-Friendly Practices', 'Custom Designs', 'Seasonal Maintenance', 'Water-Wise Solutions']
            },
            contractor: {
                services: ['Home Renovations', 'Kitchen Remodeling', 'Bathroom Updates', 'Flooring Installation', 'Custom Builds', 'Additions'],
                taglines: ['Building Dreams Together', 'Quality Construction Services', 'Your Vision, Our Expertise', 'Trusted General Contractors', 'Excellence in Construction'],
                icons: ['🏗️', '🔨', '🏠', '⭐', '🎯', '📐'],
                heroIcon: '🏗️',
                primaryColor: '#9C27B0',
                secondaryColor: '#7B1FA2',
                backgroundPattern: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
                specialtyFeatures: ['Licensed & Bonded', 'Full-Service Construction', 'Project Management', 'Quality Guarantee']
            },
            roofing: {
                services: ['Roof Replacement', 'Leak Repairs', 'Gutter Installation', 'Storm Damage', 'Inspections', 'Emergency Services'],
                taglines: ['Protecting Your Investment', 'Quality Roofing Solutions', 'Weather-Proof Your Home', 'Expert Roof Services', 'Storm Damage Specialists'],
                icons: ['🏠', '☂️', '🔨', '⚡', '✅', '🛡️'],
                heroIcon: '🏠',
                primaryColor: '#795548',
                secondaryColor: '#5D4037',
                backgroundPattern: 'linear-gradient(135deg, #795548 0%, #5D4037 100%)',
                specialtyFeatures: ['Insurance Claims Assistance', 'Emergency Response', 'Warranty Included', 'Local Trusted']
            },
            flooring: {
                services: ['Hardwood Installation', 'Carpet Replacement', 'Tile Work', 'Vinyl Flooring', 'Floor Refinishing', 'Luxury Vinyl'],
                taglines: ['Beautiful Floors for Life', 'Step Up Your Style', 'Flooring Specialists', 'Quality Installation Guaranteed', 'Transform Your Space'],
                icons: ['🪵', '🏠', '✨', '🔨', '⭐', '📐'],
                heroIcon: '🪵',
                primaryColor: '#8D6E63',
                secondaryColor: '#6D4C41',
                backgroundPattern: 'linear-gradient(135deg, #8D6E63 0%, #6D4C41 100%)',
                specialtyFeatures: ['Professional Installation', 'Quality Materials', 'Design Consultation', 'Lifetime Warranty']
            },
            painting: {
                services: ['Interior Painting', 'Exterior Painting', 'Cabinet Refinishing', 'Color Consultation', 'Pressure Washing', 'Deck Staining'],
                taglines: ['Bringing Color to Life', 'Professional Painting Services', 'Transform Your Space', 'Quality Paint Solutions', 'Expert Color Consultation'],
                icons: ['🎨', '🏠', '✨', '🖌️', '⭐', '🌈'],
                heroIcon: '🎨',
                primaryColor: '#E91E63',
                secondaryColor: '#C2185B',
                backgroundPattern: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
                specialtyFeatures: ['Premium Paints', 'Color Consultation', 'Clean & Professional', 'Satisfaction Guaranteed']
            }
        };
    }

    generateMockup(formData) {
        console.log('🎨 Generating unique website...');
        
        // Create truly unique variant
        const variant = this.createUniqueVariant(formData);
        
        // Generate HTML
        const html = this.buildHTML(variant);
        
        console.log(`✅ Generated: ${variant.layout} layout, ${variant.colors.name} colors, ${variant.componentStyle} components`);
        
        return html;
    }

    createUniqueVariant(formData) {
        const timestamp = Date.now() + Math.random() * 1000;
        
        return {
            ...formData,
            layout: this.getRandomItem(this.layouts),
            colors: this.getRandomItem(this.colorSchemes),
            componentStyle: this.getRandomItem(this.components),
            font: this.getRandomItem(this.fonts),
            industry: this.industries[formData.serviceType] || this.industries.contractor,
            uniqueId: `variant-${timestamp}`,
            timestamp: new Date().toISOString()
        };
    }

    generateCustomMockup(formData, customVariations) {
        console.log('🎨 Generating custom website with specified variations...', customVariations);
        
        // Create custom variant configuration
        const customVariant = this.createCustomVariant(formData, customVariations);
        
        // Generate the HTML
        const html = this.buildHTML(customVariant);
        
        console.log(`✅ Generated custom website: Layout=${customVariant.layout}, Colors=${customVariant.colors.name}, Components=${customVariant.componentStyle}`);
        console.log(`📊 Custom variations applied: ${Object.values(customVariations).filter(v => v !== null).length}`);
        
        return html;
    }

    createCustomVariant(formData, customVariations) {
        // Use current timestamp for true randomness
        const timestamp = Date.now() + Math.random() * 1000;
        
        // Apply custom selections or use random
        const layout = customVariations.layout || this.getRandomItem(this.layouts);
        
        let colors;
        if (customVariations.colorScheme) {
            colors = this.colorSchemes.find(c => c.name === customVariations.colorScheme) || 
                     this.getRandomItem(this.colorSchemes);
        } else {
            colors = this.getRandomItem(this.colorSchemes);
        }
        
        const componentStyle = customVariations.components || this.getRandomItem(this.components);
        
        let font;
        if (customVariations.typography) {
            const typoMap = {
                'Modern': { heading: 'Poppins', body: 'Open Sans' },
                'Classic': { heading: 'Playfair Display', body: 'Source Sans Pro' },
                'Elegant': { heading: 'Montserrat', body: 'Lato' },
                'Bold': { heading: 'Roboto Slab', body: 'Roboto' },
                'Minimal': { heading: 'Inter', body: 'Inter' },
                'Creative': { heading: 'Nunito', body: 'Nunito Sans' }
            };
            font = typoMap[customVariations.typography] || this.getRandomItem(this.fonts);
        } else {
            font = this.getRandomItem(this.fonts);
        }
        
        // Get industry-specific content
        const industryData = this.industries[formData.serviceType] || this.industries.contractor;
        
        return {
            ...formData,
            layout,
            colors,
            componentStyle,
            font,
            industryData,
            uniqueId: `custom-variant-${timestamp}`,
            timestamp: new Date().toISOString(),
            customizations: customVariations
        };
    }

    buildHTML(variant) {
        const fontUrl = `https://fonts.googleapis.com/css2?family=${variant.font.heading.replace(' ', '+')}:wght@300;400;600;700&family=${variant.font.body.replace(' ', '+')}:wght@300;400;500;600&display=swap`;
        
        const backgroundCSS = variant.colors.type === 'gradient' 
            ? `background: ${variant.colors.bg};`
            : `background-color: ${variant.colors.bg};`;

        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${variant.companyName} - Professional ${this.getServiceDisplayName(variant.serviceType)}</title>
    <link href="${fontUrl}" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: '${variant.font.body}', sans-serif;
            line-height: 1.6;
            color: #333;
            ${backgroundCSS}
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .header {
            background: ${variant.colors.type === 'gradient' ? variant.colors.bg : variant.colors.primary};
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
        }
        
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-family: '${variant.font.heading}', serif;
            font-size: 1.8rem;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 25px;
        }
        
        .nav-links a:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }
        
        .hero {
            ${this.getHeroLayoutCSS(variant.layout, variant.colors)}
            padding: 120px 0 80px;
            margin-top: 70px;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${variant.colors.type === 'gradient' 
                ? `linear-gradient(45deg, ${variant.colors.primary}aa, ${variant.colors.secondary}aa)`
                : `linear-gradient(135deg, ${variant.colors.primary}, ${variant.colors.secondary})`
            };
            z-index: -1;
        }
        
        .hero-content {
            ${this.getHeroContentCSS(variant.layout)}
            position: relative;
            z-index: 2;
        }
        
        .hero h1 {
            font-family: '${variant.font.heading}', serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            line-height: 1.2;
        }
        
        .hero p {
            font-size: clamp(1.1rem, 2.5vw, 1.4rem);
            margin-bottom: 2rem;
            opacity: 0.95;
            max-width: 600px;
        }
        
        .cta-button {
            display: inline-block;
            background: white;
            color: ${variant.colors.primary};
            padding: 1rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            border: 3px solid transparent;
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
            background: transparent;
            color: white;
            border-color: white;
        }
        
        .services {
            padding: 80px 0;
            background: ${variant.colors.type === 'solid' ? 'white' : 'rgba(255,255,255,0.95)'};
            position: relative;
        }
        
        .section-title {
            font-family: '${variant.font.heading}', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            text-align: center;
            margin-bottom: 3rem;
            color: ${variant.colors.primary};
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: ${variant.colors.type === 'gradient' ? variant.colors.bg : variant.colors.secondary};
            border-radius: 2px;
        }
        
        .services-grid {
            ${this.getServicesGridCSS(variant.componentStyle)}
            gap: 2rem;
        }
        
        .service-card {
            ${this.getServiceCardCSS(variant.componentStyle, variant.colors)}
            padding: 2.5rem 2rem;
            border-radius: 15px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: ${variant.colors.type === 'gradient' ? variant.colors.bg : `linear-gradient(45deg, ${variant.colors.primary}, ${variant.colors.secondary})`};
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1;
        }
        
        .service-card:hover::before {
            left: 0;
            opacity: 0.1;
        }
        
        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .service-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            position: relative;
            z-index: 2;
        }
        
        .service-card h3 {
            font-family: '${variant.font.heading}', serif;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: ${variant.colors.primary};
            position: relative;
            z-index: 2;
        }
        
        .service-card p {
            color: #666;
            position: relative;
            z-index: 2;
        }
        
        .contact {
            padding: 80px 0;
            background: ${variant.colors.type === 'gradient' ? variant.colors.bg : variant.colors.primary};
            color: white;
            text-align: center;
        }
        
        .contact h2 {
            font-family: '${variant.font.heading}', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            margin-bottom: 2rem;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 2rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: rgba(255,255,255,0.2);
            padding: 1.5rem 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .contact-icon {
            font-size: 1.5rem;
        }
        
        .contact-text {
            font-size: 1.1rem;
            font-weight: 500;
        }
        
        .footer {
            background: #1a1a1a;
            color: white;
            padding: 3rem 0 2rem;
            text-align: center;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            font-family: '${variant.font.heading}', serif;
            margin-bottom: 1rem;
            color: ${variant.colors.secondary};
        }
        
        .footer-bottom {
            border-top: 1px solid #333;
            padding-top: 2rem;
            opacity: 0.8;
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero {
                padding: 100px 0 60px;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .contact-info {
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .hero-content {
                text-align: center;
            }
        }
        
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }
        .service-card:nth-child(5) { animation-delay: 0.5s; }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <nav class="nav">
                <div class="logo">${variant.companyName}</div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>${this.getRandomTagline(variant.industry.taglines)}</h1>
                <p>With ${variant.yearsExp} years of experience serving ${variant.cityName}, we provide top-quality ${this.getServiceDisplayName(variant.serviceType).toLowerCase()} services you can trust.</p>
                <a href="tel:${variant.phoneNumber}" class="cta-button">📞 Call ${variant.phoneNumber}</a>
            </div>
        </div>
    </section>

    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">Our ${this.getServiceDisplayName(variant.serviceType)} Services</h2>
            <div class="services-grid">
                ${variant.industry.services.map((service, index) => `
                    <div class="service-card fade-in">
                        <div class="service-icon">${variant.industry.icons[index] || '⭐'}</div>
                        <h3>${service}</h3>
                        <p>Professional ${service.toLowerCase()} services with guaranteed satisfaction and quality workmanship.</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="container">
            <h2>Ready to Get Started?</h2>
            <p>Contact ${variant.companyName} today for your free estimate!</p>
            <div class="contact-info">
                <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <span class="contact-text">${variant.phoneNumber}</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📍</span>
                    <span class="contact-text">Serving ${variant.cityName}</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">⭐</span>
                    <span class="contact-text">${variant.yearsExp}+ Years Experience</span>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>${variant.companyName}</h3>
                    <p>Your trusted ${this.getServiceDisplayName(variant.serviceType).toLowerCase()} professionals in ${variant.cityName}.</p>
                </div>
                <div class="footer-section">
                    <h3>Services</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${variant.industry.services.slice(0, 3).map(service => `<li style="margin: 0.5rem 0;">${service}</li>`).join('')}
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p>Phone: ${variant.phoneNumber}</p>
                    <p>Serving: ${variant.cityName}</p>
                    <p>Experience: ${variant.yearsExp} Years</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 ${variant.companyName}. All rights reserved. | Generated by Forte Studio</p>
                <p style="opacity: 0.6; font-size: 0.9rem; margin-top: 0.5rem;">
                    Variant ID: ${variant.uniqueId} | Layout: ${variant.layout} | Colors: ${variant.colors.name} | Components: ${variant.componentStyle}
                </p>
            </div>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.service-card').forEach(card => {
                observer.observe(card);
            });
        });
    </script>
</body>
</html>`;
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomTagline(taglines) {
        return taglines[Math.floor(Math.random() * taglines.length)];
    }

    getServiceDisplayName(serviceType) {
        const names = {
            plumbing: 'Plumbing Services',
            hvac: 'HVAC Services',
            electrical: 'Electrical Services',
            landscaping: 'Landscaping Services',
            contractor: 'General Contracting',
            roofing: 'Roofing Services',
            flooring: 'Flooring Services',
            painting: 'Painting Services'
        };
        return names[serviceType] || 'Professional Services';
    }

    getHeroLayoutCSS(layout, colors) {
        const styles = {
            'hero-split': `background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});`,
            'centered': `background: ${colors.type === 'gradient' ? colors.bg : `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`}; text-align: center;`,
            'asymmetric': `background: linear-gradient(120deg, ${colors.primary} 60%, ${colors.secondary} 60%);`,
            'fullwidth': `background: ${colors.bg}; width: 100vw; margin-left: calc(50% - 50vw);`,
            'minimal': `background: ${colors.bg}; padding: 60px 0;`,
            'corporate': `background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});`,
            'creative': `background: radial-gradient(circle at 30% 40%, ${colors.primary}, ${colors.secondary});`,
            'modern': `background: linear-gradient(135deg, ${colors.primary}ee, ${colors.secondary}ee);`,
            'classic': `background: ${colors.primary}; color: white;`,
            'elegant': `background: linear-gradient(to bottom, ${colors.primary}f8, ${colors.secondary}f8);`
        };
        return styles[layout] || styles['centered'];
    }

    getHeroContentCSS(layout) {
        const styles = {
            'hero-split': 'display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;',
            'centered': 'text-align: center; max-width: 800px; margin: 0 auto;',
            'asymmetric': 'display: flex; align-items: center; justify-content: flex-start;',
            'minimal': 'text-align: left; max-width: 600px;',
            'corporate': 'text-align: center; max-width: 700px; margin: 0 auto;',
            'fullwidth': 'text-align: center; max-width: 900px; margin: 0 auto;',
            'modern': 'display: flex; flex-direction: column; align-items: flex-start; max-width: 600px;'
        };
        return styles[layout] || 'text-align: center; max-width: 700px; margin: 0 auto;';
    }

    getServicesGridCSS(component) {
        const styles = {
            'grid-tiles': 'display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));',
            'masonry': 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); grid-auto-rows: min-content;',
            'carousel': 'display: flex; overflow-x: auto; gap: 2rem; padding: 1rem 0;',
            'feature-boxes': 'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));',
            'service-list': 'display: grid; grid-template-columns: 1fr; max-width: 800px; margin: 0 auto;',
            'portfolio-grid': 'display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));',
            'icon-boxes': 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));'
        };
        return styles[component] || styles['grid-tiles'];
    }

    getServiceCardCSS(component, colors) {
        const styles = {
            'grid-tiles': `background: white; border: 2px solid ${colors.primary}20; box-shadow: 0 10px 30px rgba(0,0,0,0.1);`,
            'masonry': `background: linear-gradient(145deg, white, ${colors.bg}20); box-shadow: 0 8px 25px rgba(0,0,0,0.1);`,
            'feature-boxes': `background: ${colors.bg}10; border-left: 5px solid ${colors.primary}; box-shadow: 0 5px 20px rgba(0,0,0,0.08);`,
            'icon-boxes': `background: white; border-radius: 50% 10px 50% 10px; box-shadow: 0 15px 35px rgba(0,0,0,0.1);`,
            'service-list': `background: white; border: 1px solid ${colors.primary}30; margin-bottom: 1rem;`,
            'portfolio-grid': `background: linear-gradient(135deg, white, ${colors.bg}15); box-shadow: 0 12px 35px rgba(0,0,0,0.12);`
        };
        return styles[component] || `background: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);`;
    }
}

// Initialize for immediate use
if (typeof window !== 'undefined') {
    window.WebsiteGenerator = WebsiteGenerator;
    console.log('✅ WebsiteGenerator class available globally');
}
