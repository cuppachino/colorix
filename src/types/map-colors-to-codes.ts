import type { COLORS } from '../colors.js'
import type { Color } from './colors.js'

/**
 * Convert a tuple type of color aliases to a tuple of SGR codes.
 * @example
 * ```ts
 * type DarkBlueTheme = MapColorsToCodes<['blue', 'bgBlack']>
 * // ["34", "40"]
 * ```
 */
export type MapColorsToCodes<A extends Color[]> = A extends [
  infer Head extends Color,
  ...infer Tail extends Color[]
]
  ? [(typeof COLORS)[Head], ...MapColorsToCodes<Tail>]
  : []
