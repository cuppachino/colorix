import type { Join } from '@cuppachino/type-space'
import type { CSI, SGRT } from './ansi.mjs'
import type { MapColorsToCodes } from './map-colors-to-codes.mjs'
import type { Color, ColorTable } from './colors.mjs'

/**
 * A color sequence starts with the Control Sequence Introducer (CSI), follow by any Select Graphic Rendition (SGR) commands, separated by semicolons, and ends with the Select Graphic Rendition terminator (SGRT), "m".
 * @example
 * ```ts
 * type GoblinTheme = ColorSequence<['bgGreen', 'black', 'bold']>
 * // "\u001B[42;30;1m"
 * ```
 */
export type ColorSequence<C extends Color[]> = `${CSI}${Join<MapColorsToCodes<C>, ';'>}${SGRT}`

/**
 * The reset sequence that is always appended to the end of a color sequence.
 */
export type ResetSequence = `${CSI}${ColorTable['reset']}${SGRT}`
