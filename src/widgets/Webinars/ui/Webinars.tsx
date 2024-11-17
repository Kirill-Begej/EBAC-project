import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { UseSectionsContext } from 'app/providers/StoreProvider'
import { TagTitleType, Title, TitleType } from 'shared/ui/Title/Title'
import { Button, TagButtonType } from 'shared/ui/Button/Button'
import { Webinar } from 'shared/ui/Webinar/Webinar'
import cls from './Webinars.module.css'

interface WebinarsProps {
  className?: string
}

export const Webinars: FC<WebinarsProps> = ({ className }) => {
  const { content, proposals } = UseSectionsContext()

  return (
    <section className={classNames(cls.webinars, {}, [className])}>
      {content && (
        <Title
          type={TitleType.WEBINARS}
          text={content.ticker.text}
          color={content.ticker.color}
          tag={TagTitleType.SUBTITLE_H2}
        />
      )}
      <div className={cls.container}>
        {proposals && (
          <>
            <h3 className={cls.subtitle}>{proposals.title}</h3>
            <div className={cls.button}>
              <Button
                buttonType={proposals['browse-all-text']}
                submitText={proposals['browse-all-text']}
                tag={TagButtonType.LINK}
              />
            </div>
            <ul className={cls.list}>
              {proposals.items.map((item, i) => (
                <Webinar data={item} key={i} fullSize={i === 2} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
