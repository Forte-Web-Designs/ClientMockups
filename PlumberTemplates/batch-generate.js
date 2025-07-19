#!/usr/bin/env node

/**
 * Batch Mockup Generator for Multiple Templates
 * Creates the same company mockup using different template styles
 */

const { generateMockup } = require('./generate-mockup');
const fs = require('fs');
const path = require('path');

function generateMultipleTemplates(companyName, phoneNumber, city, state = 'TX', logoPath = null, yearsExp = '15') {
    console.log(`\n🚰 Generating multiple mockups for ${companyName}...\n`);
    
    const templates = [
        {
            name: 'Professional',
            file: 'template-1-professional.html',
            description: 'Clean, corporate design focused on trust and reliability'
        },
        {
            name: 'Local Expert', 
            file: 'template-2-local-expert.html',
            description: 'Warm, community-focused design with local emphasis'
        }
    ];
    
    const results = [];
    
    templates.forEach((template, index) => {
        console.log(`📋 Creating ${template.name} mockup...`);
        
        // Read the specific template
        const templatePath = path.join(__dirname, 'templates', template.file);
        const outputDir = path.join(__dirname, 'generated-mockups');
        
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        let templateContent = fs.readFileSync(templatePath, 'utf8');
        
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
            templateContent = templateContent.replace(new RegExp(placeholder, 'g'), value);
        }
        
        // Generate filename with template name
        const safeCompanyName = companyName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        const filename = `${safeCompanyName}-${template.name.toLowerCase().replace(/\s+/g, '-')}-mockup.html`;
        const outputPath = path.join(outputDir, filename);
        
        // Write file
        fs.writeFileSync(outputPath, templateContent);
        
        console.log(`   ✅ ${filename}`);
        
        results.push({
            template: template.name,
            filename,
            path: outputPath,
            description: template.description
        });
    });
    
    console.log(`\n🎉 Successfully generated ${results.length} mockups for ${companyName}!\n`);
    
    console.log('📁 Generated Files:');
    results.forEach(result => {
        console.log(`   • ${result.filename}`);
        console.log(`     ${result.description}`);
        console.log(`     file://${result.path}\n`);
    });
    
    console.log('💡 Sales Tip: Show both styles to clients and let them choose their preference!');
    
    return results;
}

// Command line usage
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 3) {
        console.log(`
🚰 Batch Plumber Website Mockup Generator

Usage: node batch-generate.js "Company Name" "Phone Number" "City" [State] [Logo Path] [Years Experience]

Examples:
  node batch-generate.js "Smith Plumbing" "(817) 555-0123" "Fort Worth"
  node batch-generate.js "Elite Plumbers" "(214) 555-0456" "Dallas" "TX" "./logos/elite-logo.png" "20"

This will generate multiple template styles for the same company.
        `);
        process.exit(1);
    }
    
    const [companyName, phoneNumber, city, state, logoPath, yearsExp] = args;
    generateMultipleTemplates(companyName, phoneNumber, city, state, logoPath, yearsExp);
}

module.exports = { generateMultipleTemplates };
