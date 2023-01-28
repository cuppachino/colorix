import { CSI, SGRT } from './ansi.mjs'
import { COLORS } from './colors.mjs'
import type { Color, ColorSequence } from './index.mjs'
import { join } from './join.mjs'
import type { MapColorsToCodes } from './types/map-colors-to-codes.mjs'

const mapColorsToCodes = <Colors extends Color[]>(colors: Colors) =>
  colors.map((color) => COLORS[color]) as MapColorsToCodes<Colors>

export const colorSequence = <Colors extends Color[]>(...colors: Colors): ColorSequence<Colors> =>
  `${CSI}${join(mapColorsToCodes(colors), ';')}${SGRT}`
