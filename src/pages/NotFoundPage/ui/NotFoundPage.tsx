import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.css'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => (
  <div className={classNames(cls.notfoundpage, {}, [className])}>
    <h2 className={cls.title}>
      <span className={cls.titleText}>404 </span>
      <span className={cls.titleImage}>&#128577;</span>
    </h2>
    <p className={cls.text}>Упс! Страница не найдена!</p>
  </div>
)
