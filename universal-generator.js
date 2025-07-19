#!/usr/bin/env node

/**
 * Universal Template Generator
 * Generates mockups for all service industries
 */

const fs = require('fs');
const path = require('path');

// Industry configurations
const INDUSTRIES = {
    plumber: {
        name: 'Plumber',
        defaultLogo: 'https://via.placeholder.com/150x150/2563eb/ffffff?text=🔧',
        templateFile: 'template-1-professional.html',
        cssFile: 'template-styles.css',
        icon: '🔧'
    },
    hvac: {
        name: 'HVAC',
        defaultLogo: 'https://via.placeholder.com/150x150/1e3a8a/ffffff?text=🌡️',
        templateFile: 'hvac-professional.html',
        cssFile: 'hvac-styles.css',
        icon: '🌡️'
    },
    electrician: {
        name: 'Electrician',
        defaultLogo: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=⚡',
        templateFile: 'electrician-professional.html',
        cssFile: 'electrician-styles.css',
        icon: '⚡'
    },
    landscaper: {
        name: 'Landscaper',
        defaultLogo: 'https://via.placeholder.com/150x150/16a085/ffffff?text=🌿',
        templateFile: 'landscaper-professional.html',
        cssFile: 'landscaper-styles.css',
        icon: '🌿'
    },
    contractor: {
        name: 'General Contractor',
        defaultLogo: 'https://via.placeholder.com/150x150/dc2626/ffffff?text=🏗️',
        templateFile: 'contractor-professional.html',
        cssFile: 'contractor-styles.css',
        icon: '🏗️'
    }
};

/**
 * Generate mockup for any industry
 */
function generateMockup(industry, companyName, phoneNumber, city, logoUrl, yearsExp = '15') {
    console.log(`${INDUSTRIES[industry].icon} Generating ${INDUSTRIES[industry].name} mockup for ${companyName}...`);
    
    const industryConfig = INDUSTRIES[industry];
    if (!industryConfig) {
        throw new Error(`Unknown industry: ${industry}`);
    }
    
    const industryDir = getIndustryDirectory(industry);
    const templateDir = path.join(industryDir, 'templates');
    const outputDir = path.join(industryDir, 'generated-mockups');
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Create company-specific directory
    const companyDir = path.join(outputDir, sanitizeFilename(companyName));
    if (!fs.existsSync(companyDir)) {
        fs.mkdirSync(companyDir, { recursive: true });
    }
    
    // Read template file
    const templatePath = path.join(templateDir, industryConfig.templateFile);
    let templateContent = fs.readFileSync(templatePath, 'utf8');
    
    // Replace template variables
    const logoToUse = logoUrl || industryConfig.defaultLogo;
    const replacements = {
        '{{COMPANY_NAME}}': companyName,
        '{{PHONE_NUMBER}}': phoneNumber,
        '{{CITY_NAME}}': city,
        '{{LOGO_URL}}': logoToUse,
        '{{YEARS_EXPERIENCE}}': yearsExp
    };
    
    // Apply replacements
    Object.entries(replacements).forEach(([placeholder, value]) => {
        const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        templateContent = templateContent.replace(regex, value);
    });
    
    // Update CSS path for generated file
    templateContent = templateContent.replace(
        `../assets/css/${industryConfig.cssFile}`,
        `../../assets/css/${industryConfig.cssFile}`
    );
    
    // Write generated file
    const outputPath = path.join(companyDir, 'index.html');
    fs.writeFileSync(outputPath, templateContent);
    
    // Create a company info file
    const companyInfo = {
        companyName,
        phoneNumber,
        city,
        logoUrl: logoToUse,
        yearsExperience: yearsExp,
        generatedAt: new Date().toISOString(),
        industry: INDUSTRIES[industry].name,
        templateType: 'Professional'
    };
    
    fs.writeFileSync(
        path.join(companyDir, 'company-info.json'),
        JSON.stringify(companyInfo, null, 2)
    );
    
    console.log(`✅ ${INDUSTRIES[industry].name} mockup generated successfully!`);
    console.log(`📂 Location: ${outputPath}`);
    console.log(`🌐 Open in browser: file://${outputPath}`);
    
    return {
        success: true,
        outputPath,
        companyDir,
        companyInfo,
        industry: INDUSTRIES[industry].name
    };
}

/**
 * Get the industry directory path
 */
function getIndustryDirectory(industry) {
    const baseDir = __dirname;
    const industryDirMap = {
        plumber: 'PlumberTemplates',
        hvac: 'HVACTemplates',
        electrician: 'ElectricianTemplates',
        landscaper: 'LandscaperTemplates',
        contractor: 'GeneralContractorTemplates'
    };
    
    return path.join(baseDir, industryDirMap[industry]);
}

/**
 * Generate mockups for all industries
 */
function generateAllIndustries(companyName, phoneNumber, city, logoUrl, yearsExp = '15') {
    console.log(`🚀 Generating mockups for all industries for ${companyName}...`);
    
    const results = [];
    const industries = Object.keys(INDUSTRIES);
    
    for (const industry of industries) {
        try {
            const result = generateMockup(industry, companyName, phoneNumber, city, logoUrl, yearsExp);
            results.push(result);
        } catch (error) {
            console.error(`❌ Error generating ${industry} mockup:`, error.message);
            results.push({
                success: false,
                industry: INDUSTRIES[industry].name,
                error: error.message
            });
        }
    }
    
    console.log(`\n🎉 Batch generation completed!`);
    console.log(`📊 Successfully generated ${results.filter(r => r.success).length}/${results.length} mockups`);
    
    return results;
}

/**
 * Sanitize filename for cross-platform compatibility
 */
function sanitizeFilename(filename) {
    return filename
        .replace(/[^a-zA-Z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();
}

/**
 * Display usage instructions
 */
function showUsage() {
    console.log(`
🛠️ Universal Service Industry Template Generator

Usage:
  node universal-generator.js [industry] "Company Name" "(Phone)" "City" [logoUrl] [yearsExp]
  node universal-generator.js all "Company Name" "(Phone)" "City" [logoUrl] [yearsExp]

Industries:
  plumber      - Generate plumber template
  hvac         - Generate HVAC template  
  electrician  - Generate electrician template
  landscaper   - Generate landscaper template
  contractor   - Generate general contractor template
  all          - Generate templates for all industries

Examples:
  node universal-generator.js plumber "Pro Plumbing" "(817) 555-0123" "Fort Worth"
  node universal-generator.js all "Elite Services" "(214) 555-0456" "Dallas"
  node universal-generator.js hvac "Cool Air HVAC" "(469) 555-0789" "Plano" "https://example.com/logo.png" "20"

Arguments:
  Industry     - Type of service industry or 'all' for all templates
  Company Name - Name of the service company
  Phone        - Phone number (include area code)
  City         - Primary service city
  Logo URL     - Optional: URL to company logo (defaults to industry placeholder)
  Years Exp    - Optional: Years of experience (defaults to 15)
    `);
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 4) {
        showUsage();
        process.exit(1);
    }
    
    const [industry, companyName, phoneNumber, city, logoUrl, yearsExp] = args;
    
    try {
        if (industry === 'all') {
            generateAllIndustries(companyName, phoneNumber, city, logoUrl, yearsExp);
        } else if (INDUSTRIES[industry]) {
            generateMockup(industry, companyName, phoneNumber, city, logoUrl, yearsExp);
        } else {
            console.error(`❌ Unknown industry: ${industry}`);
            console.log(`Available industries: ${Object.keys(INDUSTRIES).join(', ')}, all`);
            process.exit(1);
        }
    } catch (error) {
        console.error('❌ Error generating mockup:', error.message);
        process.exit(1);
    }
}

module.exports = {
    generateMockup,
    generateAllIndustries,
    INDUSTRIES,
    sanitizeFilename
};
