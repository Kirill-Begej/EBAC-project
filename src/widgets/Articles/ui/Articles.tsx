import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Title, TitleType } from 'shared/ui/Title/Title'
import { UseSectionsContext } from 'app/providers/StoreProvider'
import { Article } from 'shared/ui/Article/Article'
import cls from './Articles.module.css'

interface ArticlesProps {
  className?: string
}

export const Articles: FC<ArticlesProps> = ({ className }) => {
  const { main, content } = UseSectionsContext()

  return (
    <section className={classNames(cls.articles, {}, [className])}>
      {main && (
        <Title
          type={TitleType.ARTICLES}
          text={main.ticker.text}
          color={main.ticker.color}
        />
      )}
      <div className={cls.container}>
        <ul className={cls.list}>
          {content &&
            content.items.map((item, i) => (
              <li
                className={classNames(
                  cls.item,
                  {
                    [cls.full]: item.size === 'full-image'
                  },
                  []
                )}
                key={i}
              >
                <a href="#" className={cls.link}>
                  <Article data={item} />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}
