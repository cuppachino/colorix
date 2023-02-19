import _supportsColor from 'supports-color'

function _internalSupportsColor() {
  const { stdout } = _supportsColor
  if (!stdout) {
    return {
      hasBasic: false,
      has256: false,
      has16m: false,
      supportsColor: false
    }
  } else {
    return {
      ...stdout,
      supportsColor: stdout.hasBasic || stdout.has256 || stdout.has16m
    }
  }
}

export const { hasBasic, has256, has16m, supportsColor } = _internalSupportsColor()
