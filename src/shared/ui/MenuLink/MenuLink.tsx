import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MenuLink.module.css'

export enum LinkHoverColor {
  PINK = 'pink',
  SKY = 'sky',
  GRASS = 'grass',
  TANGERINE = 'tangerine',
  TURQUOISE = 'turquoise',
  MINT = 'mint'
}

interface MenuLinkProps {
  to: string
  className?: string
  children: string
}

export const MenuLink: FC<MenuLinkProps> = ({ to, className, children }) => (
  <a
    href={to}
    className={classNames(
      cls.menulink,
      {
        [cls[LinkHoverColor.PINK]]: children === 'Diseño',
        [cls[LinkHoverColor.SKY]]: children === 'Programación & Data',
        [cls[LinkHoverColor.GRASS]]: children === 'Gaming',
        [cls[LinkHoverColor.TANGERINE]]: children === 'Marketing',
        [cls[LinkHoverColor.TURQUOISE]]: children === 'Software',
        [cls[LinkHoverColor.MINT]]: children === 'Carrera'
      },
      [className]
    )}
  >
    {children}
  </a>
)
