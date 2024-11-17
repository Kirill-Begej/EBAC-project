import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input, InputType } from 'shared/ui/Input/Input'
import { Button, TagButtonType } from 'shared/ui/Button/Button'
import { useForm } from 'shared/lib/hooks/useForm'
import { useValidationForm } from 'shared/lib/hooks/useValidationForm'
import { useSendSubscribeForm } from 'shared/lib/hooks/useSendSubscribeForm'
import SubscribeStickerSuccessImage from 'shared/assets/img/subscribe-sticker-success.svg'
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
  const {
    inputError,
    inputSuccess,
    buttonDisabled,
    handleChangeForValidation,
    handleFocus,
    handleBlur,
    handleCheckboxChange
  } = useValidationForm()
  const { sendForm, sendFormHandler } = useSendSubscribeForm()

  const formatCheckboxText = (text: string): ReactNode => {
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
    <form
      className={classNames(cls.subscribeform, {}, [className])}
      onSubmit={sendFormHandler}
    >
      {!sendForm && (
        <>
          <div className={cls.inputRow}>
            <Input
              inputType={InputType.SUBSCRIBE}
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
              buttonType={'subscribe'}
              submitText={submitText}
              tag={TagButtonType.BUTTON}
              buttonDisabled={buttonDisabled}
            />
          </div>
          <div className={cls.checkboxRow}>
            <input
              className={cls.element}
              id="checkbox"
              type="checkbox"
              onChange={e => handleCheckboxChange(e)}
            />
            <label className={cls.label} htmlFor="checkbox">
              <span className={cls.labelText}>
                {formatCheckboxText(agreementText)}
              </span>
            </label>
          </div>
        </>
      )}
      {sendForm && (
        <div className={cls.success}>
          <span className={cls.successText}>
            Fantástico! Espera La primera carta
          </span>
          <img
            className={cls.successImage}
            src={`${SubscribeStickerSuccessImage}`}
            alt="Assinatura bem-sucedida."
          />
        </div>
      )}
    </form>
  )
}
