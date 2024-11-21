import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorPage.module.css'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.errorpage, {}, [className])}>
      <p className={cls.text}>Произошла непредвиденная ошибка</p>
      <button className={cls.button} onClick={reloadPage}>
        Обновить страницу
      </button>
    </div>
  )
}
