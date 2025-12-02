/**
 * Initialization Module
 * Orchestrates application startup
 */

(() => {
    const init = () => {
        // Initialize Feather icons
        feather.replace();

        // Load saved theme
        ThemeManager.load();

        // Initialize Rofi menu
        RofiMenu.init();

        // Log initialization complete
        console.log('✓ Uriel initialized successfully');
    };

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();