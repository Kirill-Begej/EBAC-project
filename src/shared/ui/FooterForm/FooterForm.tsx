import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input, InputType } from 'shared/ui/Input/Input'
import { Button, TagButtonType } from 'shared/ui/Button/Button'
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
}) => (
  <form
    className={classNames(cls.footerform, {}, [className])}
    name="footerForm"
    noValidate
  >
    <Input inputType={InputType.FOOTER} emailPlaceholder={emailPlaceholder} />
    <Button
      buttonType={'footer'}
      submitText={submitText}
      tag={TagButtonType.BUTTON}
    />
  </form>
)
