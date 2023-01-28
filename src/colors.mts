export const MODIFIERS = Object.freeze({
  reset: '0',
  bold: '1',
  dim: '2',
  italic: '3',
  underline: '4',
  inverse: '7',
  hidden: '8',
  strikethrough: '9'
} as const)

export const FOREGROUND = Object.freeze({
  /* basic */
  black: '30',
  red: '31',
  green: '32',
  yellow: '33',
  blue: '34',
  magenta: '35',
  cyan: '36',
  white: '37',
  /* bright */
  gray: '90',
  redBright: '91',
  greenBright: '92',
  yellowBright: '93',
  blueBright: '94',
  magentaBright: '95',
  cyanBright: '96',
  whiteBright: '97'
} as const)

export const BACKGROUND = Object.freeze({
  /* basic */
  bgBlack: '40',
  bgRed: '41',
  bgGreen: '42',
  bgYellow: '43',
  bgBlue: '44',
  bgMagenta: '45',
  bgCyan: '46',
  bgWhite: '47',
  /* bright */
  bgGray: '100',
  bgRedBright: '101',
  bgGreenBright: '102',
  bgYellowBright: '103',
  bgBlueBright: '104',
  bgMagentaBright: '105',
  bgCyanBright: '106',
  bgWhiteBright: '107'
} as const)

export const COLORS = Object.freeze({
  ...FOREGROUND,
  ...BACKGROUND,
  ...MODIFIERS
} as const)

export const foregroundColors = Object.keys(FOREGROUND) as readonly (keyof typeof FOREGROUND)[]
export const backgroundColors = Object.keys(BACKGROUND) as readonly (keyof typeof BACKGROUND)[]
export const modifiers = Object.keys(MODIFIERS) as readonly (keyof typeof MODIFIERS)[]
