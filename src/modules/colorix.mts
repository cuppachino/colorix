import type { Stringifiable } from '@cuppachino/type-space'
import { colorSequence } from '../color-sequence.mjs'
import { reset } from '../reset.mjs'
import type { Colorix } from '../types/colorix.mjs'
import type { Color } from '../types/colors.mjs'
import { join } from '../utils/join.mjs'

/**
 * Create a reusable `"Ink"` function to apply colors to strings.
 *
 * @param colors that the returned `"Ink"` function will apply to its arguments.
 * @returns A function that will apply the colors to its arguments.
 * ---
 * ## Colorix
 * @example
 * ```ts
 * import cx from 'colorix'
 *
 * // <Strings extends Stringifiable[]>(...strings: Strings)
 * // => `\u001B[42;30;1m${Join<Strings, "", "">}\u001B[0m`
 * const goblinInk = cx('bgGreen', 'black', 'bold')
 *
 * // \u001B[42;30;1mhello goblin!\u001B[0m
 * console.log(goblinInk('hello goblin', '!'))
 * ```
 * ---
 * ### Support terminals without color
 * @see [colorixSafe\()](./colorix-safe.mts)
 * @see [safe\()](./safe.mts)
 */
export function colorix<Colors extends Color[]>(...colors: Colors) {
  const sequence = colorSequence(...colors)

  return <Strings extends Stringifiable[]>(...strings: Strings) =>
    `${sequence}${join(strings)}${reset}` as Colorix<Colors, Strings>
}

export { colorix as cx }
