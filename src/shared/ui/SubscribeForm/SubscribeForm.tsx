import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input, InputType } from 'shared/ui/Input/Input'
import { Button, TagButtonType } from 'shared/ui/Button/Button'
import { useForm } from 'shared/lib/hooks/useForm'
import cls from './SubscribeForm.module.css'

interface SubscribeFormProps {
  className?: string
  emailPlaceholder: string
  submitText: string
  agreementText: string
}

export const SubscribeForm: FC<SubscribeFormProps> = ({
  className,
  emailPlaceholder,
  submitText,
  agreementText
}) => {
  const { values, handleChange } = useForm({})

  // eslint-disable-next-line no-console
  console.log(values)

  const formatCheckboxText = (text: string): any => {
    const termsOfUse = 'términos y condiciones'
    const privacyPolicy = 'aviso de privacidad'

    const textAndTermsOfUseLink = text.split(termsOfUse)
    const textAndPrivacyPolicyLink =
      textAndTermsOfUseLink[1].split(privacyPolicy)

    return (
      <span className={cls.labelText}>
        {textAndTermsOfUseLink[0]}
        <a
          href="#"
          className={cls.labelLink}
          target="_blank"
          aria-label="Link para termos e ofertas"
        >
          términos y condiciones
        </a>
        {textAndPrivacyPolicyLink[0]}
        <a
          href="#"
          className={cls.labelLink}
          target="_blank"
          aria-label="Link para aviso de privacidade"
        >
          aviso de privacidad
        </a>
      </span>
    )
  }

  return (
    <form className={classNames(cls.subscribeform, {}, [className])}>
      <div className={cls.inputRow}>
        <Input
          inputType={InputType.SUBSCRIBE}
          emailPlaceholder={emailPlaceholder}
          value={values.email}
          onChange={handleChange}
        />
        <Button
          buttonType={'subscribe'}
          submitText={submitText}
          tag={TagButtonType.BUTTON}
        />
      </div>
      <div className={cls.checkboxRow}>
        <input className={cls.element} id="checkbox" type="checkbox" />
        <label className={cls.label} htmlFor="checkbox">
          <span className={cls.labelText}>
            {formatCheckboxText(agreementText)}
          </span>
        </label>
      </div>
    </form>
  )
}
