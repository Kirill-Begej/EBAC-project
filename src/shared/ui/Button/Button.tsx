import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.css'

interface ButtonProps {
  className?: string
  buttonType: string
}

export const Button: FC<ButtonProps> = ({ className, buttonType }) => (
  <button
    className={classNames(
      cls.button,
      {
        [cls.footer]: buttonType === 'footer'
      },
      [className]
    )}
    type="submit"
    aria-label="Suscribirse al boletín"
  >
    Suscribirse al boletín
  </button>
)
