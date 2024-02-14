let backgroundColor, foregroundColor, accentColor;
do {
    backgroundColor = getRandomColor();
    foregroundColor = getRandomColor();

    const hsl = rgbToHsl(foregroundColor);
    hsl[0] = (hsl[0] + 180) % 360; // adjust hue by 360 degrees
    accentColor = hslToRgb(hsl);
} while (!ensureContrast(backgroundColor, foregroundColor) || !ensureContrast(foregroundColor, accentColor));

document.documentElement.style.setProperty('--color-background', backgroundColor);
document.documentElement.style.setProperty('--color-foreground', foregroundColor);
document.documentElement.style.setProperty('--color-accent', accentColor);

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

function getLuminance(color) {
    const EYE_SENSITIVITY_RED = 0.2126;
    const EYE_SENSITIVITY_GREEN = 0.7152;
    const EYE_SENSITIVITY_BLUE = 0.0722;

    const rgb = color.substring(4, color.length - 1).replace(/ /g, '').split(',');
    const red = parseInt(rgb[0]);
    const green = parseInt(rgb[1]);
    const blue = parseInt(rgb[2]);

    return (EYE_SENSITIVITY_RED * red + EYE_SENSITIVITY_GREEN * green + EYE_SENSITIVITY_BLUE * blue);
}

function ensureContrast(color1, color2) {
    const W3C_CONTRAST_RATIO = 4.5;

    const color1Luminance = getLuminance(color1);
    const color2Luminance = getLuminance(color2);
    const contrastRatio = (Math.max(color1Luminance, color2Luminance) + 0.05) /
        (Math.min(color1Luminance, color2Luminance) + 0.05);

    return contrastRatio >= W3C_CONTRAST_RATIO;
}

function rgbToHsl(rgb) {
    const [r, g, b] = rgb.substring(4, rgb.length - 1).replace(/ /g, '').split(',').map(Number);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

function hslToRgb(hsl) {
    const [h, s, l] = hsl;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r, g, b;

    if (h >= 0 && h < 60) {
        [r, g, b] = [c, x, 0];
    } else if (h >= 60 && h < 120) {
        [r, g, b] = [x, c, 0];
    } else if (h >= 120 && h < 180) {
        [r, g, b] = [0, c, x];
    } else if (h >= 180 && h < 240) {
        [r, g, b] = [0, x, c];
    } else if (h >= 240 && h < 300) {
        [r, g, b] = [x, 0, c];
    } else if (h >= 300 && h < 360) {
        [r, g, b] = [c, 0, x];
    }

    return `rgb(${Math.round((r + m) * 255)}, ${Math.round((g + m) * 255)}, ${Math.round((b + m) * 255)})`;
}
