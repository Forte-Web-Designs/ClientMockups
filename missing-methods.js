// MISSING METHODS THAT NEED TO BE ADDED TO GENERATOR.JS

// Add these methods to the MockupGenerator class:

    // VARIATION GENERATION SYSTEM
    initializeVariations() {
        return {
            layouts: ['classic', 'modern', 'minimal', 'bold', 'corporate', 'creative', 'fullscreen', 'magazine', 'grid', 'timeline'],
            colorSchemes: ['default', 'dark', 'light', 'vibrant', 'muted', 'gradient', 'monochrome', 'complementary'],
            services: ['grid', 'accordion', 'tabs', 'slider'],
            animations: ['none', 'subtle', 'standard', 'bold']
        };
    }

    generateVariation(index, template, formData) {
        // Create consistent variations using seed-based selection
        const seed = this.hashString(formData.companyName + template.name + index);
        const variations = this.variations;
        
        return {
            layout: variations.layouts[seed % variations.layouts.length],
            colorScheme: variations.colorSchemes[Math.floor(seed / 2) % variations.colorSchemes.length],
            services: variations.services[Math.floor(seed / 3) % variations.services.length],
            animation: variations.animations[Math.floor(seed / 4) % variations.animations.length]
        };
    }

    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }

    async extractLogoColors(logoUrl) {
        // For now, return null - this would require advanced image processing
        return null;
    }

    getVariationDescription(variation) {
        const descriptions = {
            classic: "Professional traditional layout with clean navigation",
            modern: "Contemporary split-screen design with card-based services",
            minimal: "Clean, elegant design with plenty of whitespace",
            bold: "High-impact design with large typography and vibrant colors",
            corporate: "Structured professional design perfect for established businesses",
            creative: "Unique asymmetrical layout that stands out from competitors",
            fullscreen: "Immersive full-height sections for maximum visual impact",
            magazine: "Editorial-style layout with sophisticated typography",
            grid: "Pinterest-inspired masonry layout for visual interest",
            timeline: "Story-driven vertical timeline perfect for showcasing experience"
        };
        
        const serviceDescriptions = {
            grid: "Traditional service grid",
            accordion: "Interactive expandable services",
            tabs: "Tabbed service navigation",
            slider: "Horizontal scrolling services"
        };
        
        return descriptions[variation.layout] + " with " + serviceDescriptions[variation.services];
    }

    getVariationName(variation) {
        const layoutNames = {
            classic: "Classic Pro",
            modern: "Modern Edge",
            minimal: "Clean Minimal",
            bold: "Bold Impact",
            corporate: "Corporate Elite",
            creative: "Creative Flex",
            fullscreen: "Full Impact",
            magazine: "Editorial Style",
            grid: "Grid Master",
            timeline: "Story Timeline",
            portfolio: "Portfolio Showcase",
            landing: "Landing Page Pro"
        };
        
        const componentSuffix = variation.services !== 'grid' ? ` + ${variation.services.charAt(0).toUpperCase() + variation.services.slice(1)}` : '';
        return `${layoutNames[variation.layout] || 'Custom'}${componentSuffix}`;
    }
