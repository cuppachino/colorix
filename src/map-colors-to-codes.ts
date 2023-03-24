import { COLORS } from './colors.js'
import type { Color } from './types/colors.js'
import type { MapColorsToCodes } from './types/map-colors-to-codes.js'

/**
 * Maps a tuple of colors to a tuple of color codes.
 */
export const mapColorsToCodes = <Colors extends Color[]>(colors: [...Colors]) =>
  colors.map((color) => COLORS[color]) as MapColorsToCodes<Colors>
