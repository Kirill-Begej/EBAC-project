import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article } from 'shared/ui/Article/Article'
import { UseSectionsContext } from 'app/providers/StoreProvider'
import cls from './Promo.module.css'

interface PromoProps {
  className?: string
}

export const Promo: FC<PromoProps> = ({ className }) => {
  const { main } = UseSectionsContext()

  return (
    <section className={classNames(cls.promo, {}, [className])}>
      <div className={cls.container}>
        {main && (
          <Article data={main.items[0]} button={main.items[0]['browse-text']} />
        )}
      </div>
    </section>
  )
}
