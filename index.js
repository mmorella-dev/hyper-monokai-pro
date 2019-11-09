const themes = {
    // Monokai Classic
    classic: {
        black: "#1d1e19",
        blue: "#fc961f",
        cyan: "#66d9ee",
        green: "#a6e12d",
        lightBlack: "#6e7066",
        lightBlue: "#fc961f",
        lightCyan: "#66d9ee",
        lightGreen: "#a6e12d",
        lightMagenta: "#ae81ff",
        lightRed: "#f82570",
        lightWhite: "#fdfff1",
        lightYellow: "#e4db73",
        magenta: "#ae81ff",
        red: "#f82570",
        white: "#fdfff1",
        yellow: "#e4db73",
    },


    // Monokai Pro
    pro: {
        black: "#221f22",
        blue: "#fc9867",
        lightBlack: "#727072",
        lightBlue: "#fc9867",
        lightCyan: "#78dce8",
        lightGreen: "#a9dc76",
        lightMagenta: "#ab9df2",
        lightRed: "#ff6188",
        lightWhite: "#fcfcfa",
        lightYellow: "#ffd866",
        cyan: "#78dce8",
        green: "#a9dc76",
        magenta: "#ab9df2",
        red: "#ff6188",
        white: "#fcfcfa",
        yellow: "#ffd866",
        selection: "#fcfcfa80"
    },

    // Octagon Filter
    octagon: {
        black: "#1e1f2b",
        blue: "#ff9b5e",
        lightBlack: "#696d77",
        lightBlue: "#ff9b5e",
        lightCyan: "#9cd1bb",
        lightGreen: "#bad761",
        lightMagenta: "#c39ac9",
        lightRed: "#ff657a",
        lightWhite: "#eaf2f1",
        lightYellow: "#ffd76d",
        cyan: "#9cd1bb",
        green: "#bad761",
        magenta: "#c39ac9",
        red: "#ff657a",
        white: "#eaf2f1",
        yellow: "#ffd76d",
    },

    // Machine 
    machine: {
        black: "#1d2528",
        blue: "#ffb270",
        lightBlack: "#6b7678",
        lightBlue: "#ffb270",
        lightCyan: "#7cd5f1",
        lightGreen: "#a2e57b",
        lightMagenta: "#baa0f8",
        lightRed: "#ff6d7e",
        lightWhite: "#f2fffc",
        lightYellow: "#ffed72",
        cyan: "#7cd5f1",
        green: "#a2e57b",
        magenta: "#baa0f8",
        red: "#ff6d7e",
        white: "#f2fffc",
        yellow: "#ffed72",
    },

    // Ristretto Filter
    ristretto: {
        black: "#211c1c",
        blue: "#f38d70",
        lightBlack: "#72696a",
        lightBlue: "#f38d70",
        lightCyan: "#85dacc",
        lightGreen: "#adda78",
        lightMagenta: "#a8a9eb",
        lightRed: "#fd6883",
        lightWhite: "#fff1f3",
        lightYellow: "#f9cc6c",
        cyan: "#85dacc",
        green: "#adda78",
        magenta: "#a8a9eb",
        red: "#fd6883",
        white: "#fff1f3",
        yellow: "#f9cc6c",
    },

    // Spectrum
    spectrum: {
        black: "#211c1c",
        blue: "#fd9353",
        lightBlack: "#69676c",
        lightBlue: "#fd9353",
        lightCyan: "#5ad4e6",
        lightGreen: "#7bd88f",
        lightMagenta: "#948ae3",
        lightRed: "#fc618d",
        lightWhite: "#f7f1ff",
        lightYellow: "#fce566",
        cyan: "#5ad4e6",
        green: "#7bd88f",
        magenta: "#948ae3",
        red: "#fc618d",
        white: "#f7f1ff",
        yellow: "#fce566",
    },
}



exports.decorateConfig = (config) => {

    const themeName = config.hyperMonokaiPro.theme;
    const colors = themes[themeName] || themes["pro"];

    const backgroundColor = colors.black;
    const foregroundColor = colors.white;
    const cursorColor = colors.white + "80";
    // const backgroundColor = colors.black;
    // const foregroundColor = colors.white;
    // const cursorColor = colors.white;

    return Object.assign({}, config, {
        backgroundColor,
        foregroundColor,
        cursorColor,
        colors,

        css: `
            ${config.css || ''}
            .tab_tab {
                color: ${foregroundColor} !important;
                background-color: ${backgroundColor} !important;
            }
            .tab_active:before {
                border-bottom-color: #FCD473 !important;
            }
        `
    })
}