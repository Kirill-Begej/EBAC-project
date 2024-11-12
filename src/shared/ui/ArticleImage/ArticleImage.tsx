/* eslint-disable import/extensions */
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImage.module.css'

enum ArticleType {
  FULL_SIZE = 'full-size',
  FULL_IMAGE = 'full-image'
}

enum MaskType {
  ARCH = 'arch',
  SEMI_SQUARED_ROUNDED = 'semi-squared-rounded',
  SEMI_SQUARED_CLOUD = 'semi-squared-cloud',
  CLOUD = 'cloud',
  CORNER_SQUARED_CLOUD = 'corner-squared-cloud',
  CORNER_SQUARED_ROUNDED = 'corner-squared-rounded'
}

enum StickerPosition {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right'
}

enum ImagePosition {
  RIGHT_22 = '/img/sections/content/2.jpg',
  RIGHT_6 = '/img/sections/content/5.jpg'
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
        [cls.promo]: ArticleType.FULL_SIZE === imageType,
        [cls.full]: ArticleType.FULL_IMAGE === imageType
      },
      [className]
    )}
  >
    <div className={cls.container}>
      <img
        className={classNames(
          cls.image,
          {
            [cls.arch]: MaskType.ARCH === maskType,
            [cls.semiSquaredRounded]:
              MaskType.SEMI_SQUARED_ROUNDED === maskType,
            [cls.semiSquaredCloud]: MaskType.SEMI_SQUARED_CLOUD === maskType,
            [cls.cloud]: MaskType.CLOUD === maskType,
            [cls.cornerSquaredCloud]:
              MaskType.CORNER_SQUARED_CLOUD === maskType,
            [cls.cornerSquaredRounded]:
              MaskType.CORNER_SQUARED_ROUNDED === maskType,
            [cls.right22]: ImagePosition.RIGHT_22 === url,
            [cls.right6]: ImagePosition.RIGHT_6 === url
          },
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
          [cls.topLeft]: StickerPosition.TOP_LEFT === stikerPosition,
          [cls.topRight]:
            ArticleType.FULL_SIZE !== imageType &&
            ArticleType.FULL_IMAGE !== imageType &&
            StickerPosition.TOP_RIGHT === stikerPosition,
          [cls.promoTopRight]:
            ArticleType.FULL_SIZE === imageType &&
            StickerPosition.TOP_RIGHT === stikerPosition,
          [cls.marketing]: stikerType.toLowerCase() === 'marketing',
          [cls.software]: stikerType.toLowerCase() === 'software'
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
