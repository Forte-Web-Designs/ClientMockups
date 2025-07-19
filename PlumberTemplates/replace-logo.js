#!/usr/bin/env node

/**
 * Logo Replacement Utility
 * Quickly update an existing mockup with a new logo
 */

const fs = require('fs');
const path = require('path');

function replaceLogo(mockupFile, newLogoPath) {
    const mockupPath = path.join(__dirname, 'generated-mockups', mockupFile);
    
    if (!fs.existsSync(mockupPath)) {
        console.error(`❌ Mockup file not found: ${mockupFile}`);
        console.log('\n📁 Available mockups:');
        const mockupsDir = path.join(__dirname, 'generated-mockups');
        if (fs.existsSync(mockupsDir)) {
            const files = fs.readdirSync(mockupsDir).filter(f => f.endsWith('.html'));
            files.forEach(file => console.log(`   • ${file}`));
        }
        return false;
    }
    
    // Read the mockup file
    let content = fs.readFileSync(mockupPath, 'utf8');
    
    // Find and replace logo references
    const logoRegex = /src="[^"]*\.(png|jpg|jpeg|svg|gif)"/gi;
    const newLogoReference = `src="${newLogoPath}"`;
    
    // Count replacements
    const matches = content.match(logoRegex);
    const replacementCount = matches ? matches.length : 0;
    
    if (replacementCount === 0) {
        console.log('⚠️  No logo references found in the mockup file.');
        return false;
    }
    
    // Replace all logo references
    content = content.replace(logoRegex, newLogoReference);
    
    // Write back to file
    fs.writeFileSync(mockupPath, content);
    
    console.log(`✅ Logo updated successfully!`);
    console.log(`📋 File: ${mockupFile}`);
    console.log(`🖼️  New logo: ${newLogoPath}`);
    console.log(`🔄 Replaced ${replacementCount} logo reference(s)`);
    console.log(`🌐 View: file://${mockupPath}`);
    
    return true;
}

function listMockups() {
    const mockupsDir = path.join(__dirname, 'generated-mockups');
    
    if (!fs.existsSync(mockupsDir)) {
        console.log('📁 No mockups directory found. Generate some mockups first!');
        return;
    }
    
    const files = fs.readdirSync(mockupsDir).filter(f => f.endsWith('.html'));
    
    if (files.length === 0) {
        console.log('📁 No mockups found. Generate some mockups first!');
        return;
    }
    
    console.log('\n📁 Available mockups:');
    files.forEach((file, index) => {
        const filePath = path.join(mockupsDir, file);
        const stats = fs.statSync(filePath);
        const modDate = stats.mtime.toLocaleDateString();
        console.log(`   ${index + 1}. ${file} (${modDate})`);
    });
    console.log('');
}

// Command line usage
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0 || args[0] === '--list' || args[0] === '-l') {
        listMockups();
        process.exit(0);
    }
    
    if (args.length < 2) {
        console.log(`
🖼️  Logo Replacement Utility

Usage: 
  node replace-logo.js "mockup-file.html" "path/to/new-logo.png"
  node replace-logo.js --list                    # List available mockups

Examples:
  node replace-logo.js "elite-plumbing-services-mockup.html" "./assets/logos/new-logo.png"
  node replace-logo.js "smith-plumbing-professional-mockup.html" "../client-logos/smith-logo.jpg"

Tips:
  • Logo file can be .png, .jpg, .jpeg, .svg, or .gif
  • Use relative paths from the mockup file location
  • Make sure the logo file exists before running
        `);
        listMockups();
        process.exit(1);
    }
    
    const [mockupFile, logoPath] = args;
    
    // Check if logo file exists
    if (!logoPath.startsWith('http') && !logoPath.startsWith('./') && !logoPath.startsWith('../')) {
        // Assume it's a relative path from assets/logos
        const fullLogoPath = path.join(__dirname, 'assets', 'logos', logoPath);
        if (!fs.existsSync(fullLogoPath)) {
            console.log(`⚠️  Logo file not found: ${fullLogoPath}`);
            console.log('💡 Make sure to place the logo in assets/logos/ or use a relative path');
        }
    }
    
    replaceLogo(mockupFile, logoPath);
}

module.exports = { replaceLogo, listMockups };
