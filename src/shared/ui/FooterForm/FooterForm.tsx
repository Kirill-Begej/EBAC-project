import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input, InputType } from 'shared/ui/Input/Input'
import { Button, TagButtonType } from 'shared/ui/Button/Button'
import { useForm } from 'shared/lib/hooks/useForm'
import { useValidationForm } from 'shared/lib/hooks/useValidationForm'
import cls from './FooterForm.module.css'

interface FormProps {
  className?: string
  emailPlaceholder: string
  submitText: string
}

export const FooterForm: FC<FormProps> = ({
  className,
  emailPlaceholder,
  submitText
}) => {
  const { values, handleChange } = useForm({})
  const {
    inputError,
    inputSuccess,
    buttonDisabled,
    handleChangeForValidation,
    handleFocus,
    handleBlur
  } = useValidationForm()

  return (
    <form
      className={classNames(cls.footerform, {}, [className])}
      name="footerForm"
      noValidate
    >
      <Input
        inputType={InputType.FOOTER}
        emailPlaceholder={emailPlaceholder}
        value={values.email}
        handleChange={handleChange}
        handleChangeForValidation={handleChangeForValidation}
        inputError={inputError}
        inputSuccess={inputSuccess}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <Button
        buttonType={'footer'}
        submitText={submitText}
        tag={TagButtonType.BUTTON}
        buttonDisabled={buttonDisabled}
      />
    </form>
  )
}
