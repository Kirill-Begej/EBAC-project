import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonType, TagButtonType } from 'shared/ui/Button/Button'
import cls from './ErrorPage.module.css'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.errorpage, {}, [className])}>
      <p className={cls.text}>Ocorreu um erro inesperado</p>
      <Button
        className={cls.button}
        buttonType={ButtonType.PROMO}
        submitText={'Atualizar página'}
        tag={TagButtonType.BUTTON}
        onClick={reloadPage}
      />
    </div>
  )
}
