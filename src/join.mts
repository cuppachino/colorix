import type { Stringifiable, Join } from '@cuppachino/type-space'

/**
 * Join an array of literals into a single string literal, separated by a delimiter.
 *
 * @param strings - The array of literals to join.
 * @param delimiter - The delimiter to use.
 * @defaultValue ''
 */
export const join = <Strings extends Stringifiable[], Delimiter extends string = ''>(
  strings: Strings,
  delimiter: Delimiter = '' as Delimiter
) => strings.join(delimiter) as Join<Strings, Delimiter>
