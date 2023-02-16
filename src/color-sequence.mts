import { CSI, SGRT } from './ansi.mjs'
import type { Color, ColorSequence } from './index.mjs'
import { join } from './join.mjs'
import { mapColorsToCodes } from './map-colors-to-codes.mjs'

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
export const colorSequence = <Colors extends Color[]>(
  ...colors: [...Colors]
): ColorSequence<Colors> => `${CSI}${join(mapColorsToCodes(colors), ';')}${SGRT}`
