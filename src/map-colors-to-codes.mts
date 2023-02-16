import { COLORS } from './colors.mjs'
import type { Color } from './types/colors.mjs'
import type { MapColorsToCodes } from './types/map-colors-to-codes.mjs'

/**
 * Maps a tuple of colors to a tuple of color codes.
 */
export const mapColorsToCodes = <Colors extends Color[]>(colors: [...Colors]) =>
  colors.map((color) => COLORS[color]) as MapColorsToCodes<Colors>
