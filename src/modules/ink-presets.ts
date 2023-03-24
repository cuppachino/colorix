import { cx } from './colorix.js'
import { safe } from './safe.js'

export const safeRedBrightInk = safe(cx('redBright'))

export const safeResetGrayInk = safe(cx('reset', 'gray'))

// normal

export const boldRedInk = cx('bold', 'red')

export const resetGrayInk = cx('reset', 'gray')

export const resetInk = cx('reset')

export const boldGreenBrightInk = cx('bold', 'greenBright')

export const boldYellowBrightInk = cx('bold', 'yellowBright')

export const boldCyanBrightInk = cx('bold', 'cyanBright')

export const boldMagentaBrightInk = cx('bold', 'magentaBright')

export const boldBlueBrightInk = cx('bold', 'blueBright')

export const boldRedBrightInk = cx('bold', 'redBright')

export const boldWhiteBrightInk = cx('bold', 'whiteBright')
