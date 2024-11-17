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
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeForValidation: (e: ChangeEvent<HTMLInputElement>) => void
  inputError: boolean
  inputSuccess: boolean
  handleFocus: (e: ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({
  className,
  inputType,
  emailPlaceholder,
  value,
  handleChange,
  handleChangeForValidation,
  inputError,
  inputSuccess,
  handleFocus,
  handleBlur
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
      className={classNames(
        cls.element,
        {
          [cls.elementError]: inputError,
          [cls.elementSuccess]: inputSuccess
        },
        []
      )}
      name="email"
      type="email"
      placeholder={emailPlaceholder}
      aria-label="Campo de entrada de e-mail para boletim informativo"
      value={value || ''}
      onChange={e => {
        handleChange(e)
        handleChangeForValidation(e)
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    {inputError && (
      <>
        <svg className={cls.imageError}>
          <use href={`${InputIcom}#error`}></use>
        </svg>
        <span className={cls.errorText}>
          Formato de email inválido, verifique a ortografia
        </span>
      </>
    )}
    {inputSuccess && (
      <svg className={cls.imageSuccess}>
        <use href={`${InputIcom}#success`}></use>
      </svg>
    )}
  </label>
)
