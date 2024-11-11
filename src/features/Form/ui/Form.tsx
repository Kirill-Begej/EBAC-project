import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'

interface FormProps {
  className?: string
  formType: string
  emailPlaceholder: string
  submitText: string
}

export const Form: FC<FormProps> = ({
  className,
  formType,
  emailPlaceholder,
  submitText
}) => (
  <form
    className={classNames('', {}, [className])}
    name="footerForm"
    noValidate
  >
    <Input inputType={formType} emailPlaceholder={emailPlaceholder} />
    <Button buttonType={formType} submitText={submitText} />
  </form>
)
