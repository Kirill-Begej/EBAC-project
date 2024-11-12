import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Title, TitleType } from 'shared/ui/Title/Title'
import { UseSectionsContext } from 'app/providers/StoreProvider'
import cls from './Articles.module.css'

interface ArticlesProps {
  className?: string
}

export const Articles: FC<ArticlesProps> = ({ className }) => {
  const { main } = UseSectionsContext()

  return (
    <section className={classNames(cls.articles, {}, [className])}>
      {main && (
        <Title
          type={TitleType.ARTICLES}
          text={main.ticker.text}
          color={main.ticker.color}
        />
      )}
    </section>
  )
}
