import type { Stringifiable } from '@cuppachino/type-space'
import { CSI, SGRT } from './ansi.mjs'
import { COLORS } from './colors.mjs'
import { join } from './join.mjs'
import type { ColorSequence } from './types/color-sequence.mjs'
import type { Colorix } from './types/colorix.mjs'
import type { Color } from './types/colors.mjs'
import type { MapColorsToCodes } from './types/map-colors-to-codes.mjs'

const mapColorsToCodes = <Colors extends Color[]>(colors: Colors) =>
  colors.map((color) => COLORS[color]) as MapColorsToCodes<Colors>

const colorSequence = <Colors extends Color[]>(...colors: Colors): ColorSequence<Colors> =>
  `${CSI}${join(mapColorsToCodes(colors), ';')}${SGRT}`

const reset = colorSequence('reset')

/**
 * @example
 * ```ts
 * import cx from 'colorix'
 * const goblinInk = cx('bgGreen', 'black', 'bold')
 * console.log(goblinInk('hello goblin', '!'))
 * ```
 */
export default function cx<Colors extends Color[]>(...colors: Colors) {
  const sequence = colorSequence(...colors)

  return <T extends Stringifiable[]>(...t: T): Colorix<Colors, T> => `${sequence}${join(t)}${reset}`
}

export { cx, cx as colorix }
export { CSI, SGRT } from './ansi.mjs'
export {
  hasBasic as hasBasicColors,
  has256 as has256Colors,
  has16m as has16mColors,
  supportsColor
} from './supports-color.mjs'

export {
  COLORS,
  FOREGROUND,
  BACKGROUND,
  MODIFIERS,
  backgroundColors,
  foregroundColors,
  modifiers
} from './colors.mjs'

export type { Colorix } from './types/colorix.mjs'
export type {
  Color,
  Foreground,
  Background,
  Modifier,
  ColorCode,
  ColorTable
} from './types/colors.mjs'
export type { ColorSequence, ResetSequence } from './types/color-sequence.mjs'
