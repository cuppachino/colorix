import { cx } from './colorix.js'
import { safe } from './safe.js'

/**
 * Helper for constructing a colorized error message.
 */
export class ColorixApi {
  /**
   * `cyanBright`, `underline`
   *
   * @safe
   */
  public static link<Strings extends string[]>(...strings: Strings) {
    return ColorixApi._link(...strings)
  }
  private static _link = safe(cx('cyanBright', 'underline'))
}
