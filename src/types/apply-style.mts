import type { ColorixApi } from '../modules/colorix-error.mjs'

export type ApplyStyle = ({ link, path }: typeof ColorixApi) => string
