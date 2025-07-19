#!/usr/bin/env node

/**
 * HVAC Batch Generator
 * Generates multiple HVAC templates at once
 */

const { generateHVACMockup } = require('./generate-mockup');

/**
 * Generate multiple HVAC template styles for the same company
 */
function batchGenerateHVAC(companyName, phoneNumber, city, logoUrl, yearsExp = '15') {
    console.log(`🌡️ Starting batch generation for ${companyName}...`);
    
    const results = [];
    
    try {
        // Generate the professional template
        const professionalResult = generateHVACMockup(
            companyName, 
            phoneNumber, 
            city, 
            logoUrl, 
            yearsExp
        );
        results.push(professionalResult);
        
        console.log(`\n✅ Batch generation completed successfully!`);
        console.log(`📊 Generated ${results.length} HVAC template(s)`);
        
        return {
            success: true,
            results,
            totalGenerated: results.length
        };
        
    } catch (error) {
        console.error('❌ Error in batch generation:', error.message);
        return {
            success: false,
            error: error.message,
            results
        };
    }
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 3) {
        console.log(`
🌡️ HVAC Batch Generator

Usage:
  node batch-generate.js "Company Name" "(Phone)" "City" [logoUrl] [yearsExp]

Example:
  node batch-generate.js "Arctic Air HVAC" "(817) 555-0123" "Fort Worth"
        `);
        process.exit(1);
    }
    
    const [companyName, phoneNumber, city, logoUrl, yearsExp] = args;
    batchGenerateHVAC(companyName, phoneNumber, city, logoUrl, yearsExp);
}

module.exports = {
    batchGenerateHVAC
};
