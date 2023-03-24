import type { BACKGROUND, COLORS, FOREGROUND, MODIFIERS } from '../colors.js'

export type Foreground = keyof typeof FOREGROUND
export type Background = keyof typeof BACKGROUND
export type Modifier = keyof typeof MODIFIERS

export type ColorTable = typeof COLORS
export type Color = keyof ColorTable
export type ColorCode = ColorTable[Color]
