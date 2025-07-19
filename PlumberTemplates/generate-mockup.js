#!/usr/bin/env node

/**
 * Plumber Website Template Generator
 * Usage: node generate-mockup.js "Company Name" "Phone Number" "City" [logo-path]
 */

const fs = require('fs');
const path = require('path');

// Template variables and their replacements
function generateMockup(companyName, phoneNumber, city, state = 'TX', logoPath = null, yearsExp = '15') {
    const templatePath = path.join(__dirname, 'templates', 'template-1-professional.html');
    const outputDir = path.join(__dirname, 'generated-mockups');
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Read template
    let template = fs.readFileSync(templatePath, 'utf8');
    
    // Default logo if none provided
    const logoUrl = logoPath || '../assets/images/default-plumber-logo.png';
    
    // Replace template variables
    const replacements = {
        '{{COMPANY_NAME}}': companyName,
        '{{PHONE_NUMBER}}': phoneNumber,
        '{{CITY_NAME}}': city,
        '{{STATE}}': state,
        '{{LOGO_URL}}': logoUrl,
        '{{YEARS_EXPERIENCE}}': yearsExp
    };
    
    // Apply replacements
    for (const [placeholder, value] of Object.entries(replacements)) {
        template = template.replace(new RegExp(placeholder, 'g'), value);
    }
    
    // Generate filename
    const filename = `${companyName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-mockup.html`;
    const outputPath = path.join(outputDir, filename);
    
    // Write file
    fs.writeFileSync(outputPath, template);
    
    console.log(`✅ Mockup generated: ${filename}`);
    console.log(`📁 Location: ${outputPath}`);
    console.log(`🌐 Open in browser: file://${outputPath}`);
    
    return {
        filename,
        path: outputPath,
        company: companyName,
        phone: phoneNumber,
        city: city
    };
}

// Command line usage
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 3) {
        console.log(`
🚰 Plumber Website Mockup Generator

Usage: node generate-mockup.js "Company Name" "Phone Number" "City" [State] [Logo Path] [Years Experience]

Examples:
  node generate-mockup.js "Smith Plumbing" "(817) 555-0123" "Fort Worth"
  node generate-mockup.js "Elite Plumbers" "(214) 555-0456" "Dallas" "TX" "./logos/elite-logo.png" "20"

The generated mockup will be saved in the 'generated-mockups' folder.
        `);
        process.exit(1);
    }
    
    const [companyName, phoneNumber, city, state, logoPath, yearsExp] = args;
    generateMockup(companyName, phoneNumber, city, state, logoPath, yearsExp);
}

module.exports = { generateMockup };
