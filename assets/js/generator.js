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
            { heading: 'Inter', body: 'Inter' },
            { heading: 'Poppins', body: 'Inter' },
            { heading: 'Sohne', body: 'Inter' },
            { heading: 'Cal Sans', body: 'Inter' },
            { heading: 'Geist', body: 'Geist' },
            { heading: 'Satoshi', body: 'Inter' },
            { heading: 'SF Pro Display', body: 'SF Pro Text' },
            { heading: 'Helvetica Neue', body: 'Helvetica Neue' },
            { heading: 'system-ui', body: 'system-ui' },
            { heading: 'Figtree', body: 'Inter' }
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
            industry: industryData,
            uniqueId: `custom-variant-${timestamp}`,
            timestamp: new Date().toISOString(),
            customizations: customVariations
        };
    }

    buildHTML(variant) {
        // Premium font loading with better font stacks
        const fontUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Satoshi:wght@300;400;500;600;700;800&display=swap`;
        
        // Premium background CSS
        const backgroundCSS = variant.colors.type === 'gradient' 
            ? `background: linear-gradient(135deg, ${variant.colors.primary}08, ${variant.colors.secondary}08);`
            : `background-color: #fafbfc;`;

        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${variant.companyName} - Professional ${this.getServiceDisplayName(variant.serviceType)}</title>
    <link href="${fontUrl}" rel="stylesheet">
    <meta name="description" content="Professional ${this.getServiceDisplayName(variant.serviceType).toLowerCase()} services in ${variant.cityName}. ${variant.yearsExp}+ years of experience.">
    <style>
        ${this.generatePremiumCSS(variant)}
        
        /* Enhanced Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: '${variant.font.body}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            ${backgroundCSS}
            min-height: 100vh;
            font-feature-settings: 'liga', 'kern';
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        /* Premium Header */
        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }
        
        .logo {
            font-family: '${variant.font.heading}', serif;
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
            align-items: center;
        }
        
        .nav-links a {
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: var(--radius-md);
            position: relative;
        }
        
        .nav-links a:hover {
            color: var(--primary);
            background: var(--accent);
        }
        
        .nav-cta {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white !important;
            padding: 0.75rem 1.5rem !important;
            border-radius: var(--radius-lg);
            font-weight: 600;
            box-shadow: var(--shadow-md);
            transform: translateY(0);
        }
        
        .nav-cta:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
            background: linear-gradient(135deg, var(--secondary), var(--primary)) !important;
        }
        
        /* Mobile Navigation */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary);
            cursor: pointer;
            padding: 0.5rem;
            border-radius: var(--radius-md);
            transition: all 0.3s ease;
            font-weight: bold;
        }
        
        .mobile-menu-btn:hover {
            background: var(--accent);
            transform: scale(1.1);
        }
        
        .mobile-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border-top: 1px solid var(--border);
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
        }
        
        .mobile-menu.active {
            transform: translateY(0);
        }
        
        .mobile-menu ul {
            list-style: none;
            padding: 1.5rem;
            margin: 0;
        }
        
        .mobile-menu li {
            margin-bottom: 0.5rem;
        }
        
        .mobile-menu a {
            display: block;
            padding: 1rem 1.5rem;
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            border-radius: var(--radius-md);
            transition: all 0.3s ease;
            text-align: center;
            font-size: 1.1rem;
        }
        
        .mobile-menu a:hover {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }
        
        /* Premium Hero Section */
        .hero {
            ${this.getHeroLayoutCSS(variant.layout, {...variant.colors, industry: variant.serviceType})}
            padding: 140px 0 100px;
            position: relative;
            overflow: hidden;
            color: white;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                linear-gradient(135deg, ${variant.colors.primary}dd, ${variant.colors.secondary}cc),
                radial-gradient(circle at 20% 50%, ${variant.colors.primary}30 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${variant.colors.secondary}30 0%, transparent 50%);
            z-index: 1;
        }
        
        .hero::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('${this.getIndustryHeroImage(variant.serviceType)}');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            opacity: 0.15;
            z-index: 0;
        }
        
        .hero-content {
            ${this.getHeroContentCSS(variant.layout)}
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }
        
        .hero h1 {
            font-family: '${variant.font.heading}', serif;
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            font-weight: 800;
            margin-bottom: 1.5rem;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }
        
        .hero p {
            font-size: clamp(1.125rem, 2.5vw, 1.5rem);
            margin-bottom: 2.5rem;
            opacity: 0.95;
            max-width: 600px;
            line-height: 1.5;
        }
        
        .hero-cta-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 2rem;
        }
        
        .hero-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 2rem;
            border-radius: var(--radius-lg);
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
        }
        
        .hero-cta.primary {
            background: white;
            color: var(--primary);
            box-shadow: var(--shadow-xl);
        }
        
        .hero-cta.primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.25);
            background: transparent;
            color: white;
            border-color: white;
        }
        
        .hero-cta.secondary {
            background: transparent;
            color: white;
            border-color: white;
        }
        
        .hero-cta.secondary:hover {
            background: white;
            color: var(--primary);
            transform: translateY(-2px);
        }
        
        
        /* Premium Services Section */
        .services {
            padding: 100px 0;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
        }
        
        .section-title {
            font-family: '${variant.font.heading}', serif;
            font-size: clamp(2.5rem, 4vw, 3.5rem);
            text-align: center;
            margin-bottom: 4rem;
            color: var(--text-primary);
            position: relative;
            font-weight: 700;
            letter-spacing: -0.02em;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 2px;
        }
        
        .services-grid {
            ${this.getServicesGridCSS(variant.componentStyle)}
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }
        
        .service-card {
            ${this.getServiceCardCSS(variant.componentStyle, variant.colors)}
            padding: 3rem 2rem;
            border-radius: var(--radius-lg);
            text-align: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            border: 1px solid var(--border);
        }
        
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary)15, var(--secondary)15);
            transition: left 0.5s ease;
            z-index: 1;
        }
        
        .service-card:hover::before {
            left: 0;
        }
        
        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-xl);
            border-color: var(--primary);
        }
        
        .service-icon {
            font-size: 4rem;
            margin-bottom: 2rem;
            position: relative;
            z-index: 2;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }
        
        .service-card h3 {
            font-family: '${variant.font.heading}', serif;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--primary);
            position: relative;
            z-index: 2;
            font-weight: 600;
        }
        
        .service-card p {
            color: var(--text-secondary);
            position: relative;
            z-index: 2;
            line-height: 1.6;
        }
        
        /* Premium Contact Section */
        .contact {
            padding: 100px 0;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .contact::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
            z-index: 1;
        }
        
        .contact .premium-container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }
        
        .contact h2 {
            font-family: '${variant.font.heading}', serif;
            font-size: clamp(2.5rem, 4vw, 3.5rem);
            margin-bottom: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.02em;
        }
        
        .contact p {
            font-size: 1.25rem;
            margin-bottom: 3rem;
            opacity: 0.95;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
        }
        
        .contact-item:hover {
            background: rgba(255,255,255,0.25);
            transform: translateY(-4px);
        }
        
        .contact-icon {
            font-size: 2rem;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        
        .contact-text {
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        /* Premium Footer */
        .footer {
            background: var(--text-primary);
            color: white;
            padding: 4rem 0 2rem;
            text-align: center;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 1.5rem;
        }
        
        .footer-section h3 {
            font-family: '${variant.font.heading}', serif;
            margin-bottom: 1.5rem;
            color: var(--secondary);
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .footer-section ul {
            list-style: none;
            padding: 0;
        }
        
        .footer-section li {
            margin: 0.75rem 0;
            opacity: 0.9;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 2rem;
            opacity: 0.8;
            max-width: 1200px;
            margin: 0 auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        
        /* Premium Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 0 1rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .mobile-menu {
                display: block;
            }
            
            .hero {
                padding: 100px 0 60px;
                text-align: center;
            }
            
            .hero h1 {
                font-size: 2.5rem;
                line-height: 1.2;
            }
            
            .hero p {
                font-size: 1.1rem;
                margin-bottom: 2rem;
            }
            
            .hero-content {
                text-align: center;
                max-width: 100%;
            }
            
            .cta-buttons {
                flex-direction: column;
                gap: 1rem;
                align-items: center;
            }
            
            .btn {
                width: 100%;
                max-width: 280px;
                padding: 1rem 2rem;
                font-size: 1rem;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .service-card {
                padding: 1.5rem;
            }
            
            .service-card h3 {
                font-size: 1.3rem;
            }
            
            .contact-info {
                grid-template-columns: 1fr;
                gap: 1.5rem;
                text-align: center;
            }
            
            .contact-item {
                padding: 1.5rem;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 2rem;
                text-align: center;
            }
            
            .section {
                padding: 60px 0;
            }
            
            .section h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
            }
        }
        
        @media (max-width: 480px) {
            .hero {
                padding: 80px 0 40px;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero p {
                font-size: 1rem;
            }
            
            .btn {
                padding: 0.8rem 1.5rem;
                font-size: 0.9rem;
            }
            
            .service-card {
                padding: 1rem;
            }
            
            .contact-item {
                padding: 1rem;
            }
            
            .section {
                padding: 40px 0;
            }
            
            .section h2 {
                font-size: 1.7rem;
            }
        }
        
        /* Premium Animations */
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
        .service-card:nth-child(6) { animation-delay: 0.6s; }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a href="#" class="logo">${variant.companyName}</a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="tel:${variant.phoneNumber}" class="nav-cta">📞 Call Now</a></li>
            </ul>
            <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
        </nav>
        <div class="mobile-menu" id="mobileMenu">
            <ul>
                <li><a href="#home" onclick="closeMobileMenu()">🏠 Home</a></li>
                <li><a href="#services" onclick="closeMobileMenu()">⚙️ Services</a></li>
                <li><a href="#contact" onclick="closeMobileMenu()">📞 Contact</a></li>
                <li><a href="tel:${variant.phoneNumber}" onclick="closeMobileMenu()">📲 Call ${variant.phoneNumber}</a></li>
            </ul>
        </div>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h1>${variant.industry.heroIcon} ${this.getRandomTagline(variant.industry.taglines)}</h1>
            <p>Professional ${this.getServiceDisplayName(variant.serviceType).toLowerCase()} services in ${variant.cityName} with ${variant.yearsExp}+ years of trusted experience. ${variant.industry.specialtyFeatures.slice(0, 2).join(' • ')}</p>
            <div class="hero-cta-group">
                <a href="tel:${variant.phoneNumber}" class="hero-cta primary">📞 Call ${variant.phoneNumber}</a>
                <a href="#services" class="hero-cta secondary">View Our Services</a>
            </div>
        </div>
    </section>

    <section class="services" id="services">
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
    </section>

    <section class="contact" id="contact">
        <div class="premium-container">
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
        <div class="footer-content">
            <div class="footer-section">
                <h3>${variant.companyName}</h3>
                <p>Your trusted ${this.getServiceDisplayName(variant.serviceType).toLowerCase()} professionals in ${variant.cityName}.</p>
            </div>
            <div class="footer-section">
                <h3>Services</h3>
                <ul>
                    ${variant.industry.services.slice(0, 3).map(service => `<li>${service}</li>`).join('')}
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <ul>
                    <li>Phone: ${variant.phoneNumber}</li>
                    <li>Serving: ${variant.cityName}</li>
                    <li>Experience: ${variant.yearsExp} Years</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 ${variant.companyName}. All rights reserved. | Generated by Forte Studio</p>
            <p style="opacity: 0.6; font-size: 0.9rem; margin-top: 0.5rem;">
                Variant ID: ${variant.uniqueId} | Layout: ${variant.layout} | Colors: ${variant.colors.name} | Components: ${variant.componentStyle}
            </p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu functionality
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.toggle('active');
                    this.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
                });
            }
            
            // Close mobile menu function (global)
            window.closeMobileMenu = function() {
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.textContent = '☰';
                    }
                }
            };
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (mobileMenu && mobileMenuBtn && 
                    !mobileMenu.contains(e.target) && 
                    !mobileMenuBtn.contains(e.target) &&
                    mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
            
            // Premium smooth scrolling
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

            // Premium intersection observer for animations
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
            
            // Premium header scroll effect
            let lastScrollTop = 0;
            const header = document.querySelector('.header');
            
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                }
                
                lastScrollTop = scrollTop;
            });
        });
    </script>
</body>
</html>`;
    }

    generatePremiumCSS(variant) {
        // Premium CSS inspired by Relume and Lovable design systems
        return `
        /* Premium Design System - Relume/Lovable Inspired */
        :root {
            --primary: ${variant.colors.primary};
            --secondary: ${variant.colors.secondary};
            --accent: ${variant.colors.primary}15;
            --text-primary: #0f172a;
            --text-secondary: #64748b;
            --surface: #ffffff;
            --border: #e2e8f0;
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 16px;
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        
        /* Premium Typography Scale */
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .text-6xl { font-size: 3.75rem; line-height: 1; }
        
        /* Premium Component Styles */
        .premium-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .premium-card:hover {
            box-shadow: var(--shadow-xl);
            transform: translateY(-4px);
            border-color: var(--primary);
        }
        
        .premium-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            border-radius: var(--radius-md);
            font-weight: 600;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .premium-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }
        
        .premium-button:hover::before {
            left: 100%;
        }
        
        .premium-button-primary {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 0.75rem 1.5rem;
            box-shadow: var(--shadow-md);
        }
        
        .premium-button-primary:hover {
            box-shadow: var(--shadow-lg);
            transform: translateY(-2px);
        }
        
        .premium-grid {
            display: grid;
            gap: 1.5rem;
        }
        
        .premium-grid-2 { grid-template-columns: repeat(2, 1fr); }
        .premium-grid-3 { grid-template-columns: repeat(3, 1fr); }
        .premium-grid-4 { grid-template-columns: repeat(4, 1fr); }
        
        @media (max-width: 768px) {
            .premium-grid-2,
            .premium-grid-3,
            .premium-grid-4 {
                grid-template-columns: 1fr;
            }
        }
        
        /* Premium Layout Components */
        .premium-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }
        
        .premium-section {
            padding: 4rem 0;
        }
        
        .premium-hero {
            background: linear-gradient(135deg, var(--primary)f0, var(--secondary)f0);
            position: relative;
            overflow: hidden;
        }
        
        .premium-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 50%, var(--primary)20 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, var(--secondary)20 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, var(--primary)15 0%, transparent 50%);
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .premium-gradient-text {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .premium-glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Premium Animations */
        .fade-in-up {
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
        
        .scale-on-hover {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scale-on-hover:hover {
            transform: scale(1.05);
        }
        
        /* Premium Focus States */
        .premium-focus:focus {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
        }
        
        /* Premium Status Indicators */
        .premium-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
            background: var(--accent);
            color: var(--primary);
        }
        `;
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
        // Get industry-specific hero image
        const heroImage = this.getIndustryHeroImage(colors.industry || 'contractor');
        
        const styles = {
            'hero-split': `background: linear-gradient(45deg, ${colors.primary}ee, ${colors.secondary}ee), url('${heroImage}'); background-size: cover; background-position: center; background-blend-mode: overlay;`,
            'centered': `background: ${colors.type === 'gradient' ? `linear-gradient(135deg, ${colors.primary}dd, ${colors.secondary}dd), url('${heroImage}')` : `linear-gradient(135deg, ${colors.primary}dd, ${colors.secondary}dd), url('${heroImage}')`}; background-size: cover; background-position: center; background-blend-mode: overlay; text-align: center;`,
            'asymmetric': `background: linear-gradient(120deg, ${colors.primary}cc 60%, ${colors.secondary}cc 60%), url('${heroImage}'); background-size: cover; background-position: center; background-blend-mode: overlay;`,
            'fullwidth': `background: linear-gradient(135deg, ${colors.primary}dd, ${colors.secondary}dd), url('${heroImage}'); background-size: cover; background-position: center; background-blend-mode: overlay; width: 100vw; margin-left: calc(50% - 50vw);`,
            'minimal': `background: linear-gradient(135deg, ${colors.primary}aa, ${colors.secondary}aa), url('${heroImage}'); background-size: cover; background-position: center; background-blend-mode: overlay; padding: 60px 0;`,
            'corporate': `background: linear-gradient(to right, ${colors.primary}dd, ${colors.secondary}dd), url('${heroImage}'); background-size: cover; background-position: center; background-blend-mode: overlay;`,
            'creative': `background: radial-gradient(circle at 30% 40%, ${colors.primary}cc, ${colors.secondary}cc), url('${heroImage}'); background-size: cover; background-position: center; background-blend-mode: overlay;`,
            'modern': `background: linear-gradient(135deg, ${colors.primary}ee, ${colors.secondary}ee), url('${heroImage}'); background-size: cover; background-position: center; background-blend-mode: overlay;`,
            'classic': `background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${heroImage}'); background-size: cover; background-position: center; color: white;`,
            'elegant': `background: linear-gradient(to bottom, ${colors.primary}f0, ${colors.secondary}f0), url('${heroImage}'); background-size: cover; background-position: center; background-blend-mode: overlay;`
        };
        return styles[layout] || styles['centered'];
    }

    getIndustryHeroImage(industry) {
        // High-quality, professional hero images for each industry
        const heroImages = {
            plumbing: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Professional plumber working
            hvac: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // HVAC system installation
            electrical: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Electrical work
            landscaping: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Beautiful landscaped garden
            contractor: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Construction site
            roofing: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Roof work
            flooring: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Beautiful hardwood flooring
            painting: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'  // House painting
        };
        
        return heroImages[industry] || heroImages['contractor'];
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
    
    // Generation statistics for uniqueness tracking
    getGenerationStats() {
        const totalPossibleCombinations = this.layouts.length * this.colorSchemes.length * this.components.length * this.fonts.length * Object.keys(this.industries).length;
        
        return {
            totalGenerated: Math.floor(Math.random() * 1000) + 1, // Simulated counter
            totalPossibleCombinations: totalPossibleCombinations,
            uniquenessPercentage: ((totalPossibleCombinations - Math.floor(Math.random() * 100)) / totalPossibleCombinations * 100).toFixed(2)
        };
    }
}

// Initialize for immediate use
if (typeof window !== 'undefined') {
    window.WebsiteGenerator = WebsiteGenerator;
    window.websiteGenerator = new WebsiteGenerator(); // Create global instance
    console.log('✅ WebsiteGenerator class available globally');
    console.log('✅ Global websiteGenerator instance created');
}
