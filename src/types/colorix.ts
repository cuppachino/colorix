import type { Stringifiable, Join } from '@cuppachino/type-space'
import type { ColorSequence, ResetSequence } from './color-sequence.js'
import type { Color } from './colors.js'

/**
 * @example
 * ```ts
 * type GoblinWelcome = Colorix<['bgGreen', 'black', 'bold'], ['hello world', '!']>
 * // "\u001B[42;30;1mhello world!\u001B[0m"
 * ```
 */
export type Colorix<
  C extends Color[],
  T extends (string | number)[]
> = `${ColorSequence<C>}${Join<T, ''>}${ResetSequence}`
