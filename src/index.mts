import { cx } from './modules/colorix.mjs'
export default cx
export { cx, colorix } from './modules/colorix.mjs'
export { cxs, colorixSafe } from './modules/colorix-safe.mjs'
export { safe } from './modules/safe.mjs'
export { CSI, SGRT } from './ansi.mjs'
export {
  BACKGROUND,
  COLORS,
  FOREGROUND,
  MODIFIERS,
  backgroundColors,
  foregroundColors,
  modifiers
} from './colors.mjs'
export * from './modules/index.mjs'
export {
  has16m as has16mColors,
  has256 as has256Colors,
  hasBasic as hasBasicColors,
  supportsColor
} from './supports-color.mjs'
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
