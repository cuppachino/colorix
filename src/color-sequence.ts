import { CSI, SGRT } from './ansi.js'
import type { Color, ColorSequence } from './index.js'
import { join } from './utils/join.js'
import { mapColorsToCodes } from './map-colors-to-codes.js'

/**
 * Create a color sequence from a tuple of color aliases.
 *
 * @example
 * ```ts
 * import { colorSequence } from 'colorix'
 *
 * const seq = colorSequence('redBright', 'bgBlack') // "\u001B[91;40m"
 * ```
 */
export const colorSequence = <const Colors extends Color[]>(
  ...colors: [...Colors]
): ColorSequence<Colors> =>
  `${CSI}${join(mapColorsToCodes(colors), ';')}${SGRT}`
