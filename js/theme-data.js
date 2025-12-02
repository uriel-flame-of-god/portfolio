/**
 * Theme Data Module
 * Contains all theme definitions and factory functions
 */

const ThemeData = (() => {
    /**
     * @typedef {Object} Theme
     * @property {string} name - User-friendly theme name
     * @property {string} dataAttr - CSS-safe attribute name
     * @property {Object.<string, string>} colors - CSS variable key-value pairs
     */

    /**
     * Factory function to create theme objects
     * @param {string} name 
     * @param {Object} colors 
     * @returns {Theme}
     */
    const createTheme = (name, colors) => ({
        name: name,
        dataAttr: name.toLowerCase().replace(/ /g, '-'),
        colors: colors
    });

    // Theme collection
    const themes = [
        createTheme("Uriel Default", {
            "--bg-color": "#ffffff",
            "--sub-alt-color": "#F4F7FB",
            "--main-color": "#005A8D",
            "--caret-color": "#FFD700",
            "--sub-color": "#1E90FF",
            "--text-color": "#2C3E50",
            "--error-color": "#607D8B",
            "--gradient-start": "#1E90FF",
            "--gradient-end": "#005A8D",
            "--header-text": "#ffffff",
            "--rofi-hover-bg": "rgba(0, 90, 141, 0.1)",
            "--rofi-hover-text": "#005A8D",
        }),
        createTheme("Rose Pine Moon", {
            "--bg-color": "#2a273f",
            "--sub-alt-color": "#211f32",
            "--main-color": "#9ccfd8",
            "--caret-color": "#f6c177",
            "--sub-color": "#c4a7e7",
            "--text-color": "#e0def4",
            "--error-color": "#908caa",
            "--gradient-start": "#232136",
            "--gradient-end": "#2a273f",
            "--header-text": "#9ccfd8",
            "--rofi-hover-bg": "rgba(156, 207, 216, 0.15)",
            "--rofi-hover-text": "#9ccfd8",
        }),
        createTheme("Github Dark", {
            "--bg-color": "#212830",
            "--sub-alt-color": "#0d1117",
            "--main-color": "#41ce5c",
            "--caret-color": "#41ce5c",
            "--sub-color": "#788386",
            "--text-color": "#ccdae6",
            "--error-color": "#8b949e",
            "--gradient-start": "#161b22",
            "--gradient-end": "#212830",
            "--header-text": "#ccdae6",
            "--rofi-hover-bg": "rgba(65, 206, 92, 0.15)",
            "--rofi-hover-text": "#41ce5c",
        }),
        createTheme("Gruvbox Dark", {
            "--bg-color": "#282828",
            "--sub-alt-color": "#1d2021",
            "--main-color": "#d79921",
            "--caret-color": "#fabd2f",
            "--sub-color": "#fe8019",
            "--text-color": "#ebdbb2",
            "--error-color": "#a89984",
            "--gradient-start": "#1d2021",
            "--gradient-end": "#282828",
            "--header-text": "#d79921",
            "--rofi-hover-bg": "rgba(215, 153, 33, 0.15)",
            "--rofi-hover-text": "#d79921",
        }),
        createTheme("Gruvbox Light", {
            "--bg-color": "#fbf1c7",
            "--sub-alt-color": "#f2e5bc",
            "--main-color": "#689d6a",
            "--caret-color": "#d65d0e",
            "--sub-color": "#8ec07c",
            "--text-color": "#3c3836",
            "--error-color": "#7c6f64",
            "--gradient-start": "#ebdbb2",
            "--gradient-end": "#d5c4a1",
            "--header-text": "#282828",
            "--rofi-hover-bg": "rgba(104, 157, 106, 0.1)",
            "--rofi-hover-text": "#689d6a",
        }),
        createTheme("Retro", {
            "--bg-color": "#dad3c1",
            "--sub-alt-color": "#c8c3b3",
            "--main-color": "#1d1b17",
            "--caret-color": "#1d1b17",
            "--sub-color": "#918b7d",
            "--text-color": "#1d1b17",
            "--error-color": "#bf616a",
            "--gradient-start": "#918b7d",
            "--gradient-end": "#1d1b17",
            "--header-text": "#dad3c1",
            "--rofi-hover-bg": "rgba(29, 27, 23, 0.1)",
            "--rofi-hover-text": "#1d1b17",
        }),
        createTheme("Luna", {
            "--bg-color": "#221c35",
            "--sub-alt-color": "#2f2346",
            "--main-color": "#f67599",
            "--caret-color": "#f67599",
            "--sub-color": "#5a3a7e",
            "--text-color": "#ffe3eb",
            "--error-color": "#efc050",
            "--gradient-start": "#2f2346",
            "--gradient-end": "#221c35",
            "--header-text": "#f67599",
            "--rofi-hover-bg": "rgba(246, 117, 153, 0.15)",
            "--rofi-hover-text": "#f67599",
        }),
        createTheme("Incognito", {
            "--bg-color": "#0e0e0e",
            "--sub-alt-color": "#151515",
            "--main-color": "#ff9900",
            "--caret-color": "#ff9900",
            "--sub-color": "#555555",
            "--text-color": "#c6c6c6",
            "--error-color": "#e44545",
            "--gradient-start": "#151515",
            "--gradient-end": "#0e0e0e",
            "--header-text": "#ff9900",
            "--rofi-hover-bg": "rgba(255, 153, 0, 0.15)",
            "--rofi-hover-text": "#ff9900",
        }),
        createTheme("Dracula", {
            "--bg-color": "#282a36",
            "--sub-alt-color": "#20222c",
            "--main-color": "#bd93f9",
            "--caret-color": "#bd93f9",
            "--sub-color": "#6272a4",
            "--text-color": "#f8f8f2",
            "--error-color": "#ff5555",
            "--gradient-start": "#6272a4",
            "--gradient-end": "#282a36",
            "--header-text": "#f8f8f2",
            "--rofi-hover-bg": "rgba(189, 147, 249, 0.15)",
            "--rofi-hover-text": "#bd93f9",
        }),
        createTheme("Blueberry Dark", {
            "--bg-color": "#212b42",
            "--sub-alt-color": "#1b2334",
            "--main-color": "#add7ff",
            "--caret-color": "#962f7e",
            "--sub-color": "#5c7da5",
            "--text-color": "#91b4d5",
            "--error-color": "#df4576",
            "--gradient-start": "#1b2334",
            "--gradient-end": "#212b42",
            "--header-text": "#add7ff",
            "--rofi-hover-bg": "rgba(173, 215, 255, 0.15)",
            "--rofi-hover-text": "#add7ff",
        }),
        createTheme("Blueberry Light", {
            "--bg-color": "#dae0f5",
            "--sub-alt-color": "#c1c7df",
            "--main-color": "#506477",
            "--caret-color": "#df4576",
            "--sub-color": "#92a4be",
            "--text-color": "#678198",
            "--error-color": "#df4576",
            "--gradient-start": "#c1c7df",
            "--gradient-end": "#dae0f5",
            "--header-text": "#506477",
            "--rofi-hover-bg": "rgba(80, 100, 119, 0.1)",
            "--rofi-hover-text": "#506477",
        }),
        createTheme("Bento", {
            "--bg-color": "#2d394d",
            "--sub-alt-color": "#263041",
            "--main-color": "#ff7a90",
            "--caret-color": "#ff7a90",
            "--sub-color": "#4a768d",
            "--text-color": "#fffaf8",
            "--error-color": "#ee2a3a",
            "--gradient-start": "#263041",
            "--gradient-end": "#2d394d",
            "--header-text": "#ff7a90",
            "--rofi-hover-bg": "rgba(255, 122, 144, 0.15)",
            "--rofi-hover-text": "#ff7a90",
        }),
        createTheme("Aurora", {
            "--bg-color": "#011926",
            "--sub-alt-color": "#000c13",
            "--main-color": "#00e980",
            "--caret-color": "#00e980",
            "--sub-color": "#245c69",
            "--text-color": "#fff",
            "--error-color": "#b94da1",
            "--gradient-start": "#000c13",
            "--gradient-end": "#011926",
            "--header-text": "#00e980",
            "--rofi-hover-bg": "rgba(0, 233, 128, 0.15)",
            "--rofi-hover-text": "#00e980",
        })
    ];

    // Sort themes alphabetically
    themes.sort((a, b) => a.name.localeCompare(b.name));

    return {
        getAll: () => themes,
        getByName: (name) => themes.find(t => t.name === name),
        getDefault: () => themes[0]
    };
})();