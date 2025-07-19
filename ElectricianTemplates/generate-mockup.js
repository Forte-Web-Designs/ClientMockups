#!/usr/bin/env node

/**
 * Electrician Template Generator
 * Generates customized electrician company websites
 */

const fs = require('fs');
const path = require('path');

// Configuration
const TEMPLATE_DIR = path.join(__dirname, 'templates');
const OUTPUT_DIR = path.join(__dirname, 'generated-mockups');
const ASSETS_DIR = path.join(__dirname, 'assets');

// Default logo URL for electrician companies
const DEFAULT_LOGO = 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=⚡';

/**
 * Generate electrician mockup with company details
 */
function generateElectricianMockup(companyName, phoneNumber, city, logoUrl = DEFAULT_LOGO, yearsExp = '15') {
    console.log(`⚡ Generating electrician mockup for ${companyName}...`);
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Create company-specific directory
    const companyDir = path.join(OUTPUT_DIR, sanitizeFilename(companyName));
    if (!fs.existsSync(companyDir)) {
        fs.mkdirSync(companyDir, { recursive: true });
    }
    
    // Read template file
    const templatePath = path.join(TEMPLATE_DIR, 'electrician-professional.html');
    let templateContent = fs.readFileSync(templatePath, 'utf8');
    
    // Replace template variables
    const replacements = {
        '{{COMPANY_NAME}}': companyName,
        '{{PHONE_NUMBER}}': phoneNumber,
        '{{CITY_NAME}}': city,
        '{{LOGO_URL}}': logoUrl,
        '{{YEARS_EXPERIENCE}}': yearsExp
    };
    
    // Apply replacements
    Object.entries(replacements).forEach(([placeholder, value]) => {
        const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        templateContent = templateContent.replace(regex, value);
    });
    
    // Update CSS path for generated file
    templateContent = templateContent.replace(
        '../assets/css/electrician-styles.css',
        '../../assets/css/electrician-styles.css'
    );
    
    // Write generated file
    const outputPath = path.join(companyDir, 'index.html');
    fs.writeFileSync(outputPath, templateContent);
    
    // Create a company info file
    const companyInfo = {
        companyName,
        phoneNumber,
        city,
        logoUrl,
        yearsExperience: yearsExp,
        generatedAt: new Date().toISOString(),
        industry: 'Electrician',
        templateType: 'Professional'
    };
    
    fs.writeFileSync(
        path.join(companyDir, 'company-info.json'),
        JSON.stringify(companyInfo, null, 2)
    );
    
    console.log(`✅ Electrician mockup generated successfully!`);
    console.log(`📂 Location: ${outputPath}`);
    console.log(`🌐 Open in browser: file://${outputPath}`);
    
    return {
        success: true,
        outputPath,
        companyDir,
        companyInfo
    };
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
⚡ Electrician Template Generator

Usage:
  node generate-mockup.js "Company Name" "(Phone)" "City" [logoUrl] [yearsExp]

Examples:
  node generate-mockup.js "Spark Electric" "(817) 555-0123" "Fort Worth"
  node generate-mockup.js "Lightning Electrical" "(214) 555-0456" "Dallas" "https://example.com/logo.png" "20"

Arguments:
  Company Name  - Name of the electrical company
  Phone        - Phone number (include area code)
  City         - Primary service city
  Logo URL     - Optional: URL to company logo (defaults to placeholder)
  Years Exp    - Optional: Years of experience (defaults to 15)
    `);
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 3) {
        showUsage();
        process.exit(1);
    }
    
    const [companyName, phoneNumber, city, logoUrl, yearsExp] = args;
    
    try {
        generateElectricianMockup(companyName, phoneNumber, city, logoUrl, yearsExp);
    } catch (error) {
        console.error('❌ Error generating electrician mockup:', error.message);
        process.exit(1);
    }
}

module.exports = {
    generateElectricianMockup,
    sanitizeFilename
};
