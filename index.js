const hexRgb = require('hex-rgb');
const palette = require('ibm-northstar-colors').colors;

const foregroundColor = palette.warmWhite30;
const backgroundColor = palette.blue90;
const borderColor = palette.coolgray80;
const cursorColor = palette.blue50;
const selection = hexRgb(palette.bluecore);
const selectionColor = `rgba(${selection.red}, ${selection.green}, ${selection.blue}, 0.5)`;

const colors = {
  black: palette.blackcore,
  lightBlack: palette.coolgray70,
  red: palette.red40,
  lightRed: palette.red30,
  green: palette.green20,
  lightGreen: palette.green10,
  yellow: palette.yellow20,
  lightYellow: palette.yellow10,
  blue: palette.blue50,
  lightBlue: palette.blue20,
  magenta: palette.magenta50,
  lightMagenta: palette.magenta20,
  cyan: palette.teal40,
  lightCyan: palette.teal20,
  white: palette.whitecore,
  lightWhite: palette.warmwhite30
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    selectionColor,
    css: `
      ${config.css || ''}
    `
  })
}