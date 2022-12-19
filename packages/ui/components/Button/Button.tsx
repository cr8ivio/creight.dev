import React from 'react'
import type { ReactNode } from 'react'
import { basicButtonRecipe } from './button-recipe.css'

export interface ButtonStyleProps {
  intent?: 'primary' | 'secondary'
  size?: 'default' | 'small'
}
export interface ButtonProps extends ButtonStyleProps {
  onClick(): void
  children?: ReactNode
  text?: string
}

const Button = ({ children, text,onClick, intent, size}: ButtonProps) => {
  const btn = basicButtonRecipe({ intent, size })
  return (
    <div className={btn} onClick={onClick}>
      {children ? children : text}
    </div>
  )
}

export default Button
