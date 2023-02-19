import type { Join, Stringifiable, UnionLiteral } from '@cuppachino/type-space'
import { colorSequence } from '../color-sequence.mjs'
import type { Color, Colorix } from '../index.mjs'
import { reset } from '../reset.mjs'
import { join } from '../utils/join.mjs'
import { supportsColor } from './supports-color.mjs'

/**
 * Similar to `colorix` / `cx`, but only applies colors if the terminal supports it. The trade-off is weaker type inference. For example, if the return type was used as a function parameter, the type would be deferred to `string`.
 *
 * @example `cxs` and `colorixSafe` are the same function. You can use either.
 * ```ts
 * import { cxs, colorixSafe } from 'colorix'
 * ```
 * @example Only apply colors if the terminal supports it. The return type is a pseudo-union wrapper around the joined string. Auto-completion is unlikely to work when the type can always be deferred to `string`.
 * ```ts
 * const boldInkSafe = cxs('bold')
 * let mutableString: string = 'cuppachino'
 *
 * // <[string]>(strings_0: string) =>
 * boldInkSafe(mutableString) // UnionLiteral<`\u001B[1m${string}\u001B[0m`, string>
 *
 * // <["cuppachino"]>(strings_0: "cuppachino") =>
 * boldInkSafe('cuppachino') // UnionLiteral<"\u001B[1mcuppachino\u001B[0m", "cuppachino">
 * ```
 * ---
 * ### Support terminals without color
 * @see [colorixSafe\(\)](./colorix-safe.mts)
 * @see [safe\(\)](./safe.mts)
 *
 */
export function colorixSafe<Colors extends Color[]>(...colors: Colors) {
  return <Strings extends Stringifiable[]>(
    ...strings: Strings
  ): `${Join<Strings>}` extends infer S extends `${string}`
    ? UnionLiteral<Colorix<Colors, Strings>, S>
    : UnionLiteral<Colorix<Colors, Strings>, Join<Strings>> => {
    if (!supportsColor || colors.length === 0) return join(strings) as any
    const sequence = colorSequence(...colors)
    return `${sequence}${join(strings)}${reset}` as any
  }
}

export { colorixSafe as cxs }
