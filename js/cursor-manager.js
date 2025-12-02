/**
 * Cursor Manager Module
 * Implements macOS cursor system with smooth transitions
 */

const CursorManager = (() => {
    const cursorPath = './cursor/macos/';
    
    // Cursor definitions with fallback and scale
    const cursors = {
        default: { file: 'Normal.cur', x: 4, y: 3, scale: 1 },
        pointer: { file: 'Closehand.cur', x: 8, y: 3, scale: 1 },
        text: { file: 'Text.cur', x: 10, y: 10, scale: 1 },
        help: { file: 'Help.cur', x: 10, y: 3, scale: 1 },
        wait: { file: 'Busy.ani', x: 10, y: 10, scale: 1 },
        move: { file: 'Move.cur', x: 10, y: 10, scale: 1 },
        'ns-resize': { file: 'Vertical Resize.cur', x: 10, y: 10, scale: 1 },
        'ew-resize': { file: 'Horizontal Resize.cur', x: 10, y: 10, scale: 1 },
        'nwse-resize': { file: 'Diagonal Resize 1.cur', x: 10, y: 10, scale: 1 },
        'nesw-resize': { file: 'Diagonal Resize 2.cur', x: 10, y: 10, scale: 1 },
        'col-resize': { file: 'Horizontal Resize.cur', x: 10, y: 10, scale: 1 },
        'row-resize': { file: 'Vertical Resize.cur', x: 10, y: 10, scale: 1 },
        'not-allowed': { file: 'Unavailable.cur', x: 10, y: 10, scale: 1 },
        grab: { file: 'Closehand.cur', x: 8, y: 3, scale: 1 },
        grabbing: { file: 'Move.cur', x: 10, y: 10, scale: 1 },
        'zoom-in': { file: 'Zoom-in.cur', x: 10, y: 10, scale: 1 },
        'zoom-out': { file: 'Zoom-out.cur', x: 10, y: 10, scale: 1 },
        link: { file: 'Link.cur', x: 4, y: 3, scale: 1 },
        cell: { file: 'Precision.cur', x: 10, y: 10, scale: 1 },
        crosshair: { file: 'Precision.cur', x: 10, y: 10, scale: 1 },
        progress: { file: 'Working.ani', x: 4, y: 3, scale: 1 }
    };

    /**
     * Build cursor URL with hotspot coordinates
     * @param {string} cursorName 
     * @returns {string}
     */
    const buildCursorUrl = (cursorName) => {
        const cursor = cursors[cursorName] || cursors.default;
        const url = `url('${cursorPath}${cursor.file}') ${cursor.x} ${cursor.y}`;
        return url;
    };

    /**
     * Apply cursor to an element
     * @param {HTMLElement} element 
     * @param {string} cursorName 
     */
    const apply = (element, cursorName) => {
        if (!element) return;
        
        const cursorUrl = buildCursorUrl(cursorName);
        element.style.cursor = `${cursorUrl}, auto`;
    };

    /**
     * Apply cursor to entire document
     * @param {string} cursorName 
     */
    const applyGlobal = (cursorName) => {
        const cursorUrl = buildCursorUrl(cursorName);
        document.documentElement.style.cursor = `${cursorUrl}, auto`;
    };

    /**
     * Initialize cursor system - apply to document root
     */
    const init = () => {
        try {
            applyGlobal('default');
            setupElementCursors();
            console.log('✓ macOS Cursor System initialized');
        } catch (error) {
            console.error('Cursor initialization error:', error);
        }
    };

    /**
     * Setup cursors for interactive elements
     */
    const setupElementCursors = () => {
        // Buttons and clickable elements
        document.querySelectorAll('button, a, [role="button"], input[type="submit"], input[type="button"]').forEach(el => {
            el.addEventListener('mouseenter', () => apply(el, 'pointer'));
            el.addEventListener('mouseleave', () => apply(el, 'default'));
        });

        // Text inputs and textareas
        document.querySelectorAll('input[type="text"], textarea, [contenteditable]').forEach(el => {
            el.addEventListener('mouseenter', () => apply(el, 'text'));
            el.addEventListener('mouseleave', () => apply(el, 'default'));
        });

        // Links
        document.querySelectorAll('a').forEach(el => {
            el.addEventListener('mouseenter', () => apply(el, 'link'));
            el.addEventListener('mouseleave', () => apply(el, 'default'));
        });

        // Rofi menu items
        document.addEventListener('DOMContentLoaded', () => {
            const rofiList = document.getElementById('rofiList');
            if (rofiList) {
                rofiList.addEventListener('mouseenter', (e) => {
                    if (e.target.classList.contains('rofi-menu-item')) {
                        apply(e.target, 'pointer');
                    }
                }, true);
                
                rofiList.addEventListener('mouseleave', (e) => {
                    if (e.target.classList.contains('rofi-menu-item')) {
                        apply(e.target, 'default');
                    }
                }, true);
            }
        });
    };

    /**
     * Remove all cursor overrides
     */
    const reset = () => {
        document.documentElement.style.cursor = 'auto';
    };

    return {
        init,
        apply,
        applyGlobal,
        reset,
        buildCursorUrl,
        getCursors: () => Object.keys(cursors)
    };
})();