import { recipe } from '@vanilla-extract/recipes'
import { tokens } from '../../theme/tokens.css'

export const basicButtonRecipe = recipe({
  base: {
    // layout
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid transparent',
    borderRadius: tokens.radii.DEFAULT,
    // typography
    fontFamily: tokens.fontFamily,
    fontSize: 14,
    fontWeight: tokens.fontWeight.bold,
    lineHeight: 1.5,
    letterSpacing: '0.0325rem',
    // interaction
    cursor: 'pointer',
    transition: 'background-color,border-color,color .125s ease-in',
    ':focus': {
      outline: 'none',
    },
  },
  variants: {
    intent: {
      primary: {
        color: tokens.colors.white,
        backgroundColor: tokens.colors.sky['600'],
        ':hover': {
          backgroundColor: tokens.colors.sky['800'],
        },
      },
      secondary: {
        color: tokens.colors.black,
        backgroundColor: tokens.colors.white,
        borderColor: tokens.colors.gray['300'],
        ':hover': {
          color: tokens.colors.sky['600'],
          borderColor: tokens.colors.sky['600'],
        },
      },
    },
    size: {
      default: {
        height: 40,
        // spacing
        paddingBlock: tokens.spacing['3'],
        paddingInline: tokens.spacing['4'],
      },
      small: {
        height: 32,
        // spacing
        paddingBlock: tokens.spacing['2'],
        paddingInline: tokens.spacing['3'],
      }
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'default'
  },
})
