import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { TagTitleType, Title, TitleType } from 'shared/ui/Title/Title'
import { UseSectionsContext } from 'app/providers/StoreProvider'
import { SubscribeForm } from 'shared/ui/SubscribeForm/SubscribeForm'
import subscribeImageDesktop from 'shared/assets/img/subscribe/subscribe-image-desktop.png'
import subscribeImageTablet from 'shared/assets/img/subscribe/subscribe-image-tablet.png'
import subscribeImageMobile from 'shared/assets/img/subscribe/subscribe-image-mobile.png'
import cls from './Subscribe.module.css'

interface SubscribeProps {
  className?: string
}

export const Subscribe: FC<SubscribeProps> = ({ className }) => {
  const { proposals, subscription } = UseSectionsContext()

  return (
    <section className={classNames(cls.subscribe, {}, [className])}>
      {proposals && (
        <Title
          type={TitleType.SUBSCRIBE}
          text={proposals.ticker.text}
          color={proposals.ticker.color}
          tag={TagTitleType.SUBTITLE_H2}
        />
      )}
      <div className={cls.wrapper}>
        <div className={cls.container}>
          <div className={cls.textContainer}>
            {subscription && (
              <>
                <div className={cls.textRow}>
                  <h4 className={cls.subtitle}>{subscription.title}</h4>
                  <p className={cls.text}>{subscription.text}</p>
                </div>
                <SubscribeForm
                  emailPlaceholder={subscription?.['email-placeholder']}
                  submitText={subscription?.['submit-text']}
                  agreementText={subscription?.['agreement-text']}
                />
              </>
            )}
          </div>
          <div className={cls.imageContainer}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`${subscribeImageMobile} 1x`}
              />
              <source
                media="(max-width: 1279px)"
                srcSet={`${subscribeImageTablet} 1x`}
              />
              <img
                src={subscribeImageDesktop}
                alt="Imagem gráfica de uma carta postal."
                className={cls.image}
              />
            </picture>
          </div>
        </div>
      </div>
      {subscription && (
        <Title
          type={TitleType.DISCOUNT}
          text={subscription.ticker.text}
          color={subscription.ticker.color}
          tag={TagTitleType.SUBTITLE_H3}
        />
      )}
    </section>
  )
}
