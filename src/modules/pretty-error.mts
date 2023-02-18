import type { UnionLiteral } from '@cuppachino/type-space'
import type { Colorix } from '../types/colorix.mjs'

import { safeRedBrightInk, safeResetGrayInk } from './ink-presets.mjs'

// import { Err } from './err.mjs'
// import type { Err as _Err } from './err-o.mjs'

interface PrettyErr<_ErrName extends string, FallbackMessage extends string | undefined = string> {
  new (msg?: UnionLiteral<FallbackMessage, string>, ...args: string[]): Colorix<
    ['redBright'],
    [FallbackMessage]
  >
}

/**
 * Creates a new Error class with a custom name and fallback message if no message is provided.
 *
 * @param errName - The name of the error.
 * @param fallbackMessage - The fallback message to use if no message is provided.
 *
 * @example
 * ```ts
 * const IOError = PrettyErr('IOError', 'An unknown IO error occurred.')
 *
 * try {
 *   throw new IOError('hi there!', 'this is a test')
 * } catch (err) {
 *   console.log(err)
 * }
 * ```
 */
function PrettyErr<ErrName extends string, FallbackMessage extends string | undefined = ''>(
  errName: ErrName,
  fallbackMessage = '' as FallbackMessage
) {
  return class extends Error {
    constructor(msg?: string, ...args: any[]) {
      const _msg = safeRedBrightInk(msg ?? fallbackMessage)
      const message = `${_msg} ${safeResetGrayInk(args.join('\n'))}`
      super(message)
      Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
      this.name = errName
    }
  } as unknown as PrettyErr<ErrName, FallbackMessage>
}

const PrettyIOError = PrettyErr('IOError', 'An unknown error occured')

try {
  throw new PrettyIOError('hi there!', 'this is a test')
} catch (err) {
  console.log(err)
}
