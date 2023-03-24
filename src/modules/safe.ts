import type { Join, UnionLiteral } from '@cuppachino/type-space'
import { join } from '../utils/join.js'
import { supportsColor } from './supports-color.js'
import type { Colorix } from '../types/colorix.js'
import type { Color } from '../types/colors.js'

/**
 * Checks if the `Ink` should be applied based on whether the terminal supports color.
 * This has weaker type inference than `colorix` / `cx` because the result will always be a union of strings and literals.
 * The identity of the union is maintained by the `UnionLiteral` type, but the type will be deferred to a string in most use cases.
 *
 * @param ink The function returned by `colorix` / `cx` - `<C> => <S> => C | (C * S)`
 * @returns `ink` if the terminal supports colors, otherwise a join function with a similar signature.
 *
 * @example
 * ```ts
 * import { cx, safe } from 'colorix'
 *
 * const black = colorix('black')
 * let x: string = '<CUPPACHINO>'
 *
 * // vanilla `colorix` / `cx` to always apply colors
 * const _b1 = black('<CUPPACHINO>') // "\u001B[30m<CUPPACHINO>\u001B[0m"
 * const _b2 = black(x) // `\u001B[30m${string}\u001B[0m`
 *
 * // `safe` to check if the terminal supports colors
 * const _s1 = safe(black)('<CUPPACHINO>') // "\u001B[m<CUPPACHINO>\u001B[0m"
 * const _s2 = safe(black)(x) // UnionLiteral<`\u001B[m${string}\u001B[0m`, string>
 * ```
 *
 * @remarks Auto-completion is unlikely to work if used as a function parameter type.
 * ---
 * ### Support terminals without color
 * @see [colorixSafe\()](./colorix-safe.mts) for one-offs where you don't need to reuse the returned function.
 * @see [safe\()](./safe.mts) if you plan to use the returned function repeatedly.
 */
export function safe<
  Ink extends
    | (<Strings extends string[]>(
        ...strings: Strings
      ) => Colorix<Colors, Strings>)
    | (<Strings extends string[]>(...strings: Strings) => string),
  Colors extends Color[]
>(ink: Ink) {
  if (supportsColor) {
    return ink as <Strings extends string[]>(
      ...strings: Strings
    ) => Colorix<Colors, Strings>
  }

  return <Strings extends string[]>(...strings: Strings) =>
    join(strings) as `${string}` extends Join<Strings>
      ? UnionLiteral<Colorix<Colors, [string]>, Join<Strings>>
      : Colorix<Colors, Strings> | Join<Strings>
}
