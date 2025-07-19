// Simple test to load the generator
try {
    // Mock document for Node.js environment
    global.document = {
        addEventListener: function() {},
        getElementById: function() { return null; },
        querySelector: function() { return null; },
        querySelectorAll: function() { return []; }
    };
    
    global.window = {};
    global.console = console;
    
    // Load the generator file
    require('./assets/js/generator.js');
    
    console.log('✅ Generator loaded successfully');
    console.log('✅ MockupGenerator exists:', typeof MockupGenerator !== 'undefined');
    
    if (typeof MockupGenerator !== 'undefined') {
        const generator = new MockupGenerator();
        console.log('✅ Generator instance created');
        console.log('✅ generateMockup method:', typeof generator.generateMockup === 'function');
        console.log('✅ collectFormData method:', typeof generator.collectFormData === 'function');
        console.log('✅ displayPreview method:', typeof generator.displayPreview === 'function');
    }
    
} catch (error) {
    console.log('❌ Error loading generator:', error.message);
    console.log('❌ Stack:', error.stack);
}
