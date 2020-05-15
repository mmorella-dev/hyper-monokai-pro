var Color = require('color');

// Theme format:  [
//   black, red, green, yellow, blue, magenta, cyan, white
// ]

const THEMES = {
    "classic": ["#1D1E19", "#F82570", "#A6E12D", "#E4DB73", "#FC961F", "#AE81FF", "#66D9EE", "#FDFFF1"],
    "pro": ["#221F22", "#FF6188", "#A9DC76", "#FFD866", "#FC9867", "#AB9DF2", "#78DCE8", "#FCFCFA"],
    "octagon": ["#1E1F2B", "#FF657A", "#BAD761", "#FFD76D", "#FF9B5E", "#C39AC9", "#9CD1BB", "#EAF2F1"],
    "machine": ["#1D2528", "#FF6D7E", "#A2E57B", "#FFED72", "#FFB270", "#BAA0F8", "#7CD5F1", "#F2FFFC"],
    "ristretto": ["#211C1C", "#FD6883", "#ADDA78", "#F9CC6C", "#F38D70", "#A8A9EB", "#85DACC", "#FFF1F3"],
    "spectrum": ["#211C1C", "#FC618D", "#7BD88F", "#FCE566", "#FD9353", "#948AE3", "#5AD4E6", "#F7F1FF"]
};

exports.decorateConfig = (config) => {
    const settings = config.hyperMonokaiPro || {};
    const theme = THEMES[settings.theme || "pro"] || THEMES["pro"];

    const colors = [
        ...theme.slice(0, 8).map(c => Color(c).darken(0.05).hex()),
        ...theme.slice(0, 8)
    ];

    const backgroundColor = colors[0]; // black
    const foregroundColor = colors[7]; // white
    // Generate other Colors
    return {...config,
        colors,
        backgroundColor,
        foregroundColor,
        cursorColor: Color(foregroundColor).fade(0.5).rgb().string(),
        borderColor: Color(backgroundColor).darken(0.1).rgb().string(),
        selectionColor: Color(colors[6]).fade(0.7).rgb().string(),
        cursorAccentColor: Color(backgroundColor).rgb().string(),
    };
};
