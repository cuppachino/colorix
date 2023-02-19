import { cx } from './modules/colorix.mjs'
export default cx
export { CSI, SGRT } from './ansi.mjs'
export {
  BACKGROUND,
  backgroundColors,
  COLORS,
  FOREGROUND,
  foregroundColors,
  MODIFIERS,
  modifiers
} from './colors.mjs'
export { ColorixError } from './modules/colorix-error.mjs'
export { colorixSafe, cxs } from './modules/colorix-safe.mjs'
export { colorix, cx } from './modules/colorix.mjs'
export * from './modules/index.mjs'
export { safe } from './modules/safe.mjs'
export {
  has16m as has16mColors,
  has256 as has256Colors,
  hasBasic as hasBasicColors,
  supportsColor
} from './modules/supports-color.mjs'
export type { ColorSequence, ResetSequence } from './types/color-sequence.mjs'
export type { Colorix } from './types/colorix.mjs'
export type {
  Background,
  Color,
  ColorCode,
  ColorTable,
  Foreground,
  Modifier
} from './types/colors.mjs'
export * from './utils/index.mjs'
