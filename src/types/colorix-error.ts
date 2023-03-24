import type { Assert, UnionLiteral } from '@cuppachino/type-space'
import type { ApplyStyle } from './apply-style.js'
import type { Colorix } from './colorix.js'

export interface ColorixErr<
  _ErrName extends string,
  FallbackMessage extends string | undefined = string
> {
  new (
    msg?: UnionLiteral<FallbackMessage, string>,
    ...args: (string | ApplyStyle)[]
  ): Colorix<['redBright'], [Assert<FallbackMessage, string>]>
}
