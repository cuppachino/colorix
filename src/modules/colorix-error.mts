import type { ApplyStyle } from '../types/apply-style.mjs'
import { cx } from './colorix.mjs'
import { boldRedInk } from './ink-presets.mjs'
import { safe } from './safe.mjs'

const safeURLInk = safe(cx('yellowBright', 'underline'))
const safeBoldRedInk = safe(boldRedInk)

/**
 * Utils for formatting strings quickly.
 *
 * @property link - resolves a relative path to an absolute path and formats it to be displayed in the terminal.
 */
export const colorixApi = {
  /**
   * formats a path to be displayed in the terminal (clickable)
   */
  link: (url: string) => {
    const pathName = new URL(url, import.meta.url).pathname
    return safeURLInk(pathName)
  }
} as const

/**
 * Extend an Error class with a custom message.
 * You can use this to construct new instances of the error with additional contextual information and formatting before throwing it.
 * @param errorName - The name of the error. e.g. `Err [YOUR_ERROR_NAME]: ...`
 * @param message - The primary message to display when the error is thrown. If the console supports color, this `message` will be displayed in bold red.
 * @returns A custom error class with a custom message.
 * @example
 * ```ts
 * const FileNotFoundError = ColorixError('FileNotFoundError', 'Critical file is missing')
 * throw new FileNotFoundError('The file', (style) => style.link('file.txt'), 'was not found in the target directory.')
 * ```
 */
export const ColorixError = <ErrorName extends string, Message extends string>(
  errorName: ErrorName,
  message: Message
) =>
  class Err extends Error {
    constructor(...[msg, ...info]: (ApplyStyle | string)[])
    constructor(...[style, ...info]: (ApplyStyle | string)[])
    constructor(...styleOrMsg: (ApplyStyle | string)[]) {
      const msg = styleOrMsg.map((s) => (typeof s === 'string' ? s : s(colorixApi)))
      msg.unshift(safeBoldRedInk(message + '\n'))
      super(msg.join(' '))
      Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
      this.name = errorName
    }
  }
