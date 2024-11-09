import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'

interface FormProps {
  className?: string
  formType: string
}

export const Form: FC<FormProps> = ({ className, formType }) => (
  <form
    className={classNames('', {}, [className])}
    name="footerForm"
    noValidate
  >
    <Input inputType={formType} />
    <Button buttonType={formType} />
  </form>
)
