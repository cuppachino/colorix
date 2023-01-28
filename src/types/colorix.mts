import type { Stringifiable, Join } from '@cuppachino/type-space'
import type { ColorSequence, ResetSequence } from './color-sequence.mjs'
import type { Color } from './colors.mjs'

/**
 * @example
 * ```ts
 * type GoblinWelcome = Colorix<['bgGreen', 'black', 'bold'], ['hello world', '!']>
 * // "\u001B[42;30;1mhello world!\u001B[0m"
 * ```
 */
export type Colorix<C extends Color[], T extends Stringifiable[]> = `${ColorSequence<C>}${Join<
  T,
  ''
>}${ResetSequence}`
