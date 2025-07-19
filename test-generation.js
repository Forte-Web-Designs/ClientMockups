// Test script to verify generation functionality
console.log('🧪 Testing website generation functionality...');

// Wait for page to load
setTimeout(() => {
    if (typeof window !== 'undefined' && window.generator) {
        console.log('✅ Generator found');
        
        // Test form data
        const testFormData = {
            companyName: "Elite Plumbing Services",
            phone: "(555) 123-4567",
            email: "info@eliteplumbing.com", 
            address: "123 Main St, Anytown, USA",
            logoUrl: "",
            industry: "plumber",
            variationCount: 3,
            stylePreference: "professional"
        };
        
        // Test generation
        console.log('🚀 Testing single mockup generation...');
        window.generator.generateSingleMockup(testFormData)
            .then(() => {
                console.log('✅ Generation completed successfully!');
                
                // Test if preview is shown
                const previewSection = document.getElementById('previewSection');
                if (previewSection && previewSection.style.display !== 'none') {
                    console.log('✅ Preview section is visible');
                    
                    // Check for fade-in animation
                    if (previewSection.classList.contains('animate-fade-in')) {
                        console.log('✅ Fade-in animation applied');
                    } else {
                        console.log('⚠️ Fade-in animation not applied');
                    }
                } else {
                    console.log('❌ Preview section not visible');
                }
            })
            .catch(error => {
                console.error('❌ Generation failed:', error);
            });
            
    } else {
        console.log('❌ Generator not found');
    }
}, 1000);
