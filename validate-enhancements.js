// Validation script for enhanced variation controls
console.log('�� Validating Enhanced Variation Controls...');

// Check if all required functions exist
const requiredFunctions = [
    'selectVariation',
    'showToast',
    'initializeVariationControls'
];

let validationResults = [];

// Test 1: Check function definitions
requiredFunctions.forEach(funcName => {
    if (typeof window[funcName] === 'function') {
        validationResults.push(`✅ ${funcName} function exists`);
    } else {
        validationResults.push(`❌ ${funcName} function missing`);
    }
});

// Test 2: Check DOM elements
const requiredElements = [
    'layoutButtons',
    'colorButtons', 
    'componentButtons',
    'typographyButtons',
    'regenerateBtn'
];

requiredElements.forEach(elementId => {
    const element = document.getElementById(elementId);
    if (element) {
        validationResults.push(`✅ ${elementId} element exists`);
    } else {
        validationResults.push(`❌ ${elementId} element missing`);
    }
});

// Test 3: Check button initialization
setTimeout(() => {
    const layoutButtons = document.querySelectorAll('#layoutButtons .variation-btn');
    const colorButtons = document.querySelectorAll('#colorButtons .variation-btn');
    
    if (layoutButtons.length > 0) {
        validationResults.push(`✅ ${layoutButtons.length} layout buttons initialized`);
    } else {
        validationResults.push(`❌ Layout buttons not initialized`);
    }
    
    if (colorButtons.length > 0) {
        validationResults.push(`✅ ${colorButtons.length} color buttons initialized`);
    } else {
        validationResults.push(`❌ Color buttons not initialized`);
    }
    
    // Test 4: Check click handlers
    if (layoutButtons.length > 0 && layoutButtons[0].onclick) {
        validationResults.push(`✅ Button click handlers attached`);
    } else {
        validationResults.push(`❌ Button click handlers missing`);
    }
    
    // Output results
    console.log('\n📊 Validation Results:');
    validationResults.forEach(result => console.log(result));
    
    const successCount = validationResults.filter(r => r.startsWith('✅')).length;
    const totalTests = validationResults.length;
    
    console.log(`\n🎯 Summary: ${successCount}/${totalTests} tests passed`);
    
    if (successCount === totalTests) {
        console.log('🎉 All enhancements are working correctly!');
    } else {
        console.log('⚠️ Some issues found - check the results above');
    }
}, 1000);
