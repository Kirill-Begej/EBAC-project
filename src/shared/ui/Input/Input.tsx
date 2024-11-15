import { ChangeEvent, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import InputIcom from 'shared/assets/img/input-icon.svg'
import cls from './Input.module.css'

export enum InputType {
  SUBSCRIBE = 'subscribe',
  FOOTER = 'footer'
}

interface InputProps {
  className?: string
  inputType: InputType
  emailPlaceholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({
  className,
  inputType,
  emailPlaceholder,
  value,
  onChange
}) => (
  <label
    className={classNames(
      cls.input,
      {
        [cls.subscribe]: InputType.SUBSCRIBE === inputType,
        [cls.footer]: InputType.FOOTER === inputType
      },
      [className]
    )}
  >
    <input
      className={cls.element}
      name="email"
      type="email"
      placeholder={emailPlaceholder}
      aria-label="Campo de entrada de e-mail para boletim informativo"
      value={value || ''}
      onChange={e => onChange(e)}
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
