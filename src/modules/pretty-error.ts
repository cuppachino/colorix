import type { PrettyErr } from '../types/pretty-error.js'
import { safeRedBrightInk, safeResetGrayInk } from './ink-presets.js'

/**
 * Creates a new Error class with a custom name and fallback message if no message is provided.
 *
 * @param name - The name of the error.
 * @param fallbackMessage - The fallback message to use if no message is provided.
 *
 * @example
 * ```ts
 * const IOError = PrettyError('IOError', 'An unknown IO error occurred.')
 *
 * try {
 *   throw new IOError()
 * } catch (err) {
 *   console.log(err)
 * }
 *
 * try {
 *   throw new IOError('Illegal write operation.', 'more info...')
 * } catch (err) {
 *   console.log(err)
 * }
 * ```
 */
export function PrettyError<
  ErrorName extends string,
  FallbackMessage extends string | undefined = ''
>(name: ErrorName, fallbackMessage = '' as FallbackMessage) {
  return class extends Error {
    constructor(msg?: string, ...args: any[]) {
      const message = safeRedBrightInk(msg ?? fallbackMessage ?? '')
      const details = safeResetGrayInk(args.join(' '))
      super(`${message} ${details}`)
      Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
      this.name = name
    }
  } as unknown as PrettyErr<ErrorName, FallbackMessage>
}
