import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.css'

interface ButtonProps {
  className?: string
  buttonType: string
  submitText: string
}

export const Button: FC<ButtonProps> = ({
  className,
  buttonType,
  submitText
}) => (
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
    {submitText}
  </button>
)
