import { withSupportsColor } from '../modules/supports-color.js'
import { colorix } from '../modules/colorix.js'

/**
 *
 * @param message - The message to be displayed when the error is thrown. If a function is passed, it will be called with the colorix function as its only argument. This allows for the message to be formatted with color and styles.
 * @returns A new instance of ColorixError
 * @remarks
 * This class is a subclass of Error, and can be thrown like any other error.
 *
 * If the terminal does not support color, the message will always be stripped of color.
 *
 * @example
 * ```ts
 * import { ColorixError } from 'colorix'
 *
 * const BasicIOError = new ColorixError(
 *   'simple message that is always safe to display'
 * )
 * const IOError = new ColorixError((cx) =>
 *   cx(
 *     'white',
 *     'bgBlue',
 *     'dim',
 *     'bold'
 *   )(
 *     'Pretty Message',
 *     cx('reset')(' '),
 *     cx('underline', 'green')(
 *       'npmjs.com/package/colorix',
 *       cx('reset', 'italic')(' '),
 *       '(this message will always be stripped of color if supportsColor is false)'
 *     )
 *   )
 * )
 *
 * throw IOError
 * ```
 */
export class ColorixError<const T extends string> extends Error {
  constructor(message: T | ((cx: typeof colorix) => T)) {
    super(
      withSupportsColor(
        typeof message === 'function' ? message(colorix) : message
      )
    )
    Error.captureStackTrace(this, this.constructor)
  }

  get name() {
    return this.constructor.name
  }

  get [Symbol.toStringTag]() {
    return this.constructor.name
  }
}

