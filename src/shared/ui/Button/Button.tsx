import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.css'

enum ButtonType {
  FOOTER = 'footer',
  PROMO = 'full-size'
}

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
        [cls.footer]: ButtonType.FOOTER === buttonType,
        [cls.promo]: ButtonType.PROMO === buttonType
      },
      [className]
    )}
    type="submit"
    aria-label="Suscribirse al boletín"
  >
    {submitText}
  </button>
)
