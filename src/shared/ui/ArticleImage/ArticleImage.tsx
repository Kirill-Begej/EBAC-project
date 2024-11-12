/* eslint-disable import/extensions */
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImage.module.css'

enum ArticleType {
  FULL_SIZE = 'full-size'
}

enum MaskType {
  ARCH = 'arch'
}

enum StickerPosition {
  TOP_RIGHT = 'top-right'
}

interface ArticleImageProps {
  className?: string
  url: string
  imageType: string
  maskType: string
  stikerType: string
  stikerPosition: string
}

export const ArticleImage: FC<ArticleImageProps> = ({
  className,
  url,
  imageType,
  maskType,
  stikerType,
  stikerPosition
}) => (
  <div
    className={classNames(
      cls.articleimage,
      {
        [cls.promo]: ArticleType.FULL_SIZE === imageType
      },
      [className]
    )}
  >
    <div className={cls.container}>
      <img
        className={classNames(
          cls.image,
          { [cls.arch]: MaskType.ARCH === maskType },
          []
        )}
        src={`${require(`shared/assets${url}`)}`}
        alt={url}
      />
    </div>
    <svg
      className={classNames(
        cls.imageSticker,
        {
          [cls.promoTopRight]:
            ArticleType.FULL_SIZE === imageType &&
            StickerPosition.TOP_RIGHT === stikerPosition
        },
        []
      )}
    >
      <use
        href={`${require(`shared/assets/img/article-sticker.svg`)}#${stikerType.toLowerCase()}`}
      ></use>
    </svg>
  </div>
)
