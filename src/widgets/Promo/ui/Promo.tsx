import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article } from 'shared/ui/Article/Article'
import { UseSectionsContext } from 'app/providers/StoreProvider'
import cls from './Promo.module.css'

interface PromoProps {
  className?: string
}

export const Promo: FC<PromoProps> = ({ className }) => {
  const sections = UseSectionsContext()

  return (
    <section className={classNames(cls.promo, {}, [className])}>
      <div className={cls.container}>
        {sections.main && <Article data={sections.main.items[0]} />}
      </div>
    </section>
  )
}
