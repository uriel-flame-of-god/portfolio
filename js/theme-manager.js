/**
 * Theme Manager Module
 * Handles theme application and persistence
 */

const ThemeManager = (() => {
    const storageKey = 'uriel-theme';
    const html = document.documentElement;

    /**
     * Apply a theme by name
     * @param {string} themeName 
     */
    const apply = (themeName) => {
        const theme = ThemeData.getByName(themeName);
        
        if (!theme) {
            console.warn(`Theme "${themeName}" not found`);
            return false;
        }

        try {
            // Apply CSS variables
            for (const [key, value] of Object.entries(theme.colors)) {
                html.style.setProperty(key, value);
            }

            // Persist selection
            localStorage.setItem(storageKey, theme.name);

            // Notify listeners
            dispatchEvent(new CustomEvent('theme-changed', { 
                detail: { themeName: theme.name } 
            }));

            return true;
        } catch (error) {
            console.error('Error applying theme:', error);
            return false;
        }
    };

    /**
     * Get the currently saved theme name
     * @returns {string}
     */
    const getCurrent = () => {
        return localStorage.getItem(storageKey) || ThemeData.getDefault().name;
    };

    /**
     * Load and apply the saved theme
     */
    const load = () => {
        const savedTheme = getCurrent();
        apply(savedTheme);
    };

    /**
     * Reset to default theme
     */
    const reset = () => {
        const defaultTheme = ThemeData.getDefault();
        apply(defaultTheme.name);
    };

    return {
        apply,
        getCurrent,
        load,
        reset
    };
})();