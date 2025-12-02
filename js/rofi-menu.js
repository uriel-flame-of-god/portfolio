/**
 * Rofi Menu Module
 * Handles theme selection dropdown menu
 */

const RofiMenu = (() => {
    const menu = document.getElementById('rofiMenu');
    const searchInput = document.getElementById('rofiSearch');
    const list = document.getElementById('rofiList');
    const toggleBtn = document.getElementById('themeBtn');

    /**
     * Populate menu with theme items
     * @param {string} filterText - Optional filter text
     */
    const populate = (filterText = '') => {
        list.innerHTML = '';
        const normalizedFilter = filterText.toLowerCase();
        const currentTheme = ThemeManager.getCurrent();

        ThemeData.getAll().forEach(theme => {
            // Filter logic
            if (filterText && !theme.name.toLowerCase().includes(normalizedFilter)) {
                return;
            }

            const item = document.createElement('div');
            item.className = 'rofi-menu-item';
            item.textContent = theme.name;
            item.dataset.themeName = theme.name;
            item.setAttribute('role', 'option');
            item.setAttribute('aria-selected', theme.name === currentTheme);

            // Mark selected theme
            if (theme.name === currentTheme) {
                item.classList.add('is-selected');
            }

            // Click handler
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                ThemeManager.apply(theme.name);
                close();
            });

            // Keyboard navigation
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    ThemeManager.apply(theme.name);
                    close();
                }
            });

            list.appendChild(item);
        });
    };

    /**
     * Open the menu
     */
    const open = (e) => {
        if (e) {
            e.stopPropagation();
        }
        menu.classList.add('is-active');
        searchInput.value = '';
        populate('');
        searchInput.focus();
    };

    /**
     * Close the menu
     */
    const close = () => {
        menu.classList.remove('is-active');
    };

    /**
     * Toggle menu open/closed
     */
    const toggle = (e) => {
        if (menu.classList.contains('is-active')) {
            close();
        } else {
            open(e);
        }
    };

    /**
     * Update selected item styling
     * @param {string} themeName 
     */
    const updateSelection = (themeName) => {
        list.querySelectorAll('.rofi-menu-item').forEach(item => {
            const isSelected = item.dataset.themeName === themeName;
            item.classList.toggle('is-selected', isSelected);
            item.setAttribute('aria-selected', isSelected);
        });
    };

    /**
     * Initialize event listeners
     */
    const init = () => {
        // Initial population
        populate();

        // Toggle button
        toggleBtn.addEventListener('click', toggle);

        // Search input
        searchInput.addEventListener('keyup', (e) => {
            populate(searchInput.value);
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('is-active')) {
                close();
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (menu.classList.contains('is-active') && 
                e.target !== toggleBtn && 
                !menu.contains(e.target)) {
                close();
            }
        });

        // Listen for theme changes
        document.addEventListener('theme-changed', (e) => {
            updateSelection(e.detail.themeName);
        });
    };

    return {
        init,
        open,
        close,
        toggle,
        populate
    };
})();