var color = require('color');

// colorList: [ 
//     0: black,
//     1: red,
//     2: green,
//     3: yellow,
//     4: blue,
//     5: magenta,
//     6: cyan,
//     7: white,
//     8: lightBlack,
//     9: lightRed,
//     10: lightGreen,
//     11: lightYellow,
//     12: lightBlue,
//     13: lightMagenta,
//     14: lightCyan,
//     15: lightWhite,
// ]

const THEMES = {
    "classic": [
        "#1d1e19", "#f82570", "#a6e12d", "#e4db73", "#fc961f", "#ae81ff", "#66d9ee", "#fdfff1", 
        "#6e7066", "#f82570", "#a6e12d", "#e4db73", "#fc961f", "#ae81ff", "#66d9ee", "#fdfff1"
    ],
    "pro": [
        "#221f22", "#ff6188", "#a9dc76", "#ffd866", "#fc9867", "#ab9df2", "#78dce8", "#fcfcfa", 
        "#727072", "#ff6188", "#a9dc76", "#ffd866", "#fc9867", "#ab9df2", "#78dce8", "#fcfcfa"
    ],
    "octagon": [
        "#1e1f2b", "#ff657a", "#bad761", "#ffd76d", "#ff9b5e", "#c39ac9", "#9cd1bb", "#eaf2f1", 
        "#696d77", "#ff657a", "#bad761", "#ffd76d", "#ff9b5e", "#c39ac9", "#9cd1bb", "#eaf2f1"
    ],
    "machine": [
        "#1d2528", "#ff6d7e", "#a2e57b", "#ffed72", "#ffb270", "#baa0f8", "#7cd5f1", "#f2fffc", 
        "#6b7678", "#ff6d7e", "#a2e57b", "#ffed72", "#ffb270", "#baa0f8", "#7cd5f1", "#f2fffc"
    ],
    "ristretto": [
        "#211c1c", "#fd6883", "#adda78", "#f9cc6c", "#f38d70", "#a8a9eb", "#85dacc", "#fff1f3", 
        "#72696a", "#fd6883", "#adda78", "#f9cc6c", "#f38d70", "#a8a9eb", "#85dacc", "#fff1f3"
    ],
    "spectrum": [
        "#211c1c", "#fc618d", "#7bd88f", "#fce566", "#fd9353", "#948ae3", "#5ad4e6", "#f7f1ff", 
        "#69676c", "#fc618d", "#7bd88f", "#fce566", "#fd9353", "#948ae3", "#5ad4e6", "#f7f1ff"
    ],
}

exports.decorateConfig = (config) => {
    let themeName = config.hyperMonokaiPro && config.hyperMonokaiPro.theme || "pro";
    // Hyper Terminal Color Scheme
    const colors = THEMES[themeName] || THEMES["pro"];
    const backgroundColor = colors[0] || black;
    const foregroundColor = colors[7] || white;
    // Generate other Colors
    return Object.assign({}, config, {
        colors, 
        backgroundColor, 
        foregroundColor,
        cursorColor: color(foregroundColor).fade(0.5).rgb().string(),
        borderColor: color(backgroundColor).darken(0.1).rgb().string(),
        selectionColor: color(colors[6]).fade(0.7).rgb().string(),
        cursorAccentColor: color(backgroundColor).rgb().string(),
    })
}
