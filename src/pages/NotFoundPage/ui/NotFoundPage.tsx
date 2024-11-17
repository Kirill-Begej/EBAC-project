import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.css'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => (
  <div className={classNames(cls.notfoundpage, {}, [className])}>
    <h2 className={cls.title}>404 :(</h2>
    <p className={cls.text}>Oops! Esta página não pode ser encontrada!</p>
  </div>
)
