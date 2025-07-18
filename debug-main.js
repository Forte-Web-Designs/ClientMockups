// Simple test script to debug the main page
console.log('🔧 Debug script loaded');

// Wait for page to load
window.addEventListener('load', function() {
    console.log('📄 Page fully loaded');
    
    // Check if industry buttons exist
    const buttons = document.querySelectorAll('.industry-btn');
    console.log(`🔍 Found ${buttons.length} industry buttons`);
    
    if (buttons.length > 0) {
        console.log('✅ Industry buttons found');
        
        // Test first button
        const firstButton = buttons[0];
        console.log('🎯 Testing first button:', firstButton.dataset.industry);
        
        // Add click listener to first button
        firstButton.addEventListener('click', function() {
            console.log('🖱️ First button clicked!');
            console.log('📊 Button classes:', this.className);
            console.log('📊 Button styles:', this.style.cssText);
        });
        
        // Check if CSS is applied
        const computedStyle = window.getComputedStyle(firstButton);
        console.log('🎨 Button background:', computedStyle.background);
        console.log('🎨 Button color:', computedStyle.color);
        
    } else {
        console.log('❌ No industry buttons found!');
    }
});
