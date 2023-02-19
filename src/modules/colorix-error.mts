import type { ApplyStyle } from '../types/apply-style.mjs'
import { cx } from './colorix.mjs'
import { safeRedBrightInk, safeResetGrayInk } from './ink-presets.mjs'
import { safe } from './safe.mjs'
import { isString } from '../utils/is-string.mjs'
import type { Stringifiable } from '@cuppachino/type-space'

/**
 * Helper for constructing a colorized error message.
 */
export class ColorixApi {
  /**
   * `yellowBright`, `underline`
   *
   * @safe
   */
  public static link<Strings extends Stringifiable[]>(...strings: Strings) {
    return ColorixApi._link(...strings)
  }
  private static _link = safe(cx('cyanBright', 'underline'))

  /**
   * `cyanBright`, `underline` (if supported)
   *
   * Resolves the path of a URL relative to the current file.
   *
   * @safe
   */
  static path(url: string) {
    const pathName = new URL(url, import.meta.url).pathname
    return ColorixApi.link(pathName)
  }
}

/**
 * Extend an Error class with a custom message.
 * You can use this to construct new instances of the error with additional contextual information and formatting before throwing it.
 * @param errorName - The name of the error. e.g. `Err [YOUR_ERROR_NAME]: ...`
 * @param message - The primary message to display when the error is thrown. If the console supports color, this `message` will be displayed in bold red.
 * @returns A custom error class with a custom message.
 * @example
 * ```ts
 * const FileNotFoundError = ColorixError('FileNotFoundError', 'Critical file is missing')
 * throw new FileNotFoundError('The file', (style) => style.path('file.txt'), 'was not found in the target directory.')
 * ```
 */
export function ColorixError<ErrorName extends string, Message extends string>(
  errorName: ErrorName,
  message: Message
) {
  const applyStyle = (style: string | ApplyStyle) => (isString(style) ? style : style(ColorixApi))
  return class Err extends Error {
    constructor(...[msg, ...info]: (ApplyStyle | string)[])
    constructor(...[style, ...info]: (ApplyStyle | string)[])
    constructor(...styleOrMsg: (ApplyStyle | string)[]) {
      const main = safeRedBrightInk(message)
      const info = safeResetGrayInk(styleOrMsg.map(applyStyle).join(' '))
      super(`${main} ${info}`)
      Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
      this.name = errorName
    }
  }
}
