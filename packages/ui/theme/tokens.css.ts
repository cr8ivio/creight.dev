import { createGlobalTheme } from '@vanilla-extract/css'
import { spacing } from './tokens/spacing'
import { breakpoints } from './tokens/breakpoints'
import { typogrpahy } from './tokens/typogrpahy'
import {colors} from "./tokens/colors";
export const tokens = createGlobalTheme(':root', {
  colors,
  radii: {
    DEFAULT: '0.25rem',
    none: '0px',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  borderWidth: {
    DEFAULT: '1px',
    0: '0px',
    3: '3px',
    2: '2px',
    4: '4px',
    8: '8px',
  },
  spacing,
  breakpoints,
  ...typogrpahy,
})
