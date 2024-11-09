import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import InputIcom from 'shared/assets/img/input-icon.svg'
import cls from './Input.module.css'

interface InputProps {
  className?: string
  inputType: string
}

export const Input: FC<InputProps> = ({ className, inputType }) => (
  <label
    className={classNames(
      cls.input,
      {
        [cls.footer]: inputType === 'footer'
      },
      [className]
    )}
  >
    <input
      className={cls.element}
      type="email"
      placeholder="Su correo electrónico"
      aria-label="Campo de entrada de e-mail para boletim informativo"
    />
    <svg className={cls.imageError}>
      <use href={`${InputIcom}#error`}></use>
    </svg>
    <svg className={cls.imageSuccess}>
      <use href={`${InputIcom}#success`}></use>
    </svg>
    <span className={cls.errorText}>
      Formato de email inválido, verifique a ortografia
    </span>
  </label>
)
