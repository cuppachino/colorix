import type { Stringifiable } from '@cuppachino/type-space'
import type { Color } from './types/colors.mjs'
import type { Colorix } from './types/colorix.mjs'
import { colorSequence } from './color-sequence.mjs'
import { join } from './join.mjs'

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

  return <Strings extends Stringifiable[]>(...strings: Strings): Colorix<Colors, Strings> =>
    `${sequence}${join(strings)}${reset}`
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
