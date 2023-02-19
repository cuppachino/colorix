import type { UnionLiteral } from '@cuppachino/type-space'
import type { ApplyStyle } from './apply-style.mjs'
import type { Colorix } from './colorix.mjs'

export interface ColorixErr<
  _ErrName extends string,
  FallbackMessage extends string | undefined = string
> {
  new (msg?: UnionLiteral<FallbackMessage, string>, ...args: (string | ApplyStyle)[]): Colorix<
    ['redBright'],
    [FallbackMessage]
  >
}
