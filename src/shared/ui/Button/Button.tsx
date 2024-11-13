import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.css'

enum ButtonType {
  FOOTER = 'footer',
  PROMO = 'full-size',
  WEBINARS = 'Todos os webinars'
}

export enum TagButtonType {
  BUTTON = 'button',
  LINK = 'link'
}

interface ButtonProps {
  className?: string
  buttonType: string
  submitText: string
  tag: TagButtonType
}

export const Button: FC<ButtonProps> = ({
  className,
  buttonType,
  submitText,
  tag
}) => (
  <>
    {tag === TagButtonType.BUTTON && (
      <button
        className={classNames(
          cls.button,
          {
            [cls.footer]: ButtonType.FOOTER === buttonType,
            [cls.promo]: ButtonType.PROMO === buttonType,
            [cls.webinars]: ButtonType.WEBINARS === buttonType
          },
          [className]
        )}
        type="submit"
      >
        {submitText}
      </button>
    )}
    {tag === TagButtonType.LINK && (
      <a
        className={classNames(
          cls.button,
          {
            [cls.footer]: ButtonType.FOOTER === buttonType,
            [cls.promo]: ButtonType.PROMO === buttonType,
            [cls.webinars]: ButtonType.WEBINARS === buttonType
          },
          [className]
        )}
      >
        {submitText}
      </a>
    )}
  </>
)
