import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import TitleImage from 'shared/assets/img/title-image.svg'
import cls from './Title.module.css'

export enum TitleType {
  ARTICLES = 'articles',
  WEBINARS = 'webinars',
  SUBSCRIBE = 'subscribe',
  DISCOUNT = 'discount'
}

export enum TagTitleType {
  TITLE = 'title',
  SUBTITLE_H2 = 'subtitle-h2',
  SUBTITLE_H3 = 'subtitle-h3'
}

enum TitleColorType {
  TURQUOISE = '#acd6de',
  TANGERINE = '#ffad20',
  CORAL = '#fe6d44',
  PINK = '#da3369'
}

interface TitleProps {
  className?: string
  type: TitleType
  text: string
  color: string
  tag: TagTitleType
}

export const Title: FC<TitleProps> = ({
  className,
  type,
  text,
  color,
  tag
}) => {
  const titleLength = (titleType: TitleType): number => {
    switch (titleType) {
      case TitleType.ARTICLES:
        return 11
        break
      case TitleType.WEBINARS:
        return 19
        break
      case TitleType.SUBSCRIBE:
        return 16
        break
      case TitleType.DISCOUNT:
        return 8
        break
      default:
        return 1
        break
    }
  }

  return (
    <>
      {tag === TagTitleType.TITLE && (
        <h1
          className={classNames(
            cls.title,
            {
              [cls.articles]: TitleType.ARTICLES === type,
              [cls.webinars]: TitleType.WEBINARS === type,
              [cls.subscribe]: TitleType.SUBSCRIBE === type,
              [cls.discount]: TitleType.DISCOUNT === type
            },
            [className]
          )}
        >
          <div
            className={classNames(
              cls.container,
              {
                [cls.containerArticles]: TitleColorType.TURQUOISE === color,
                [cls.containerWebinars]: TitleColorType.TANGERINE === color,
                [cls.containerSubscribe]: TitleColorType.CORAL === color,
                [cls.containerDiscount]: TitleColorType.PINK === color
              },
              []
            )}
          >
            <ul className={cls.list}>
              {[...Array(titleLength(type))].map((_, i) => (
                <li className={cls.item} key={i}>
                  <svg className={cls.image}>
                    <use href={`${TitleImage}#image`}></use>
                  </svg>
                  <span className={cls.text}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </h1>
      )}
      {tag === TagTitleType.SUBTITLE_H2 && (
        <h2
          className={classNames(
            cls.title,
            {
              [cls.articles]: TitleType.ARTICLES === type,
              [cls.webinars]: TitleType.WEBINARS === type,
              [cls.subscribe]: TitleType.SUBSCRIBE === type,
              [cls.discount]: TitleType.DISCOUNT === type
            },
            [className]
          )}
        >
          <div
            className={classNames(
              cls.container,
              {
                [cls.containerArticles]: TitleColorType.TURQUOISE === color,
                [cls.containerWebinars]: TitleColorType.TANGERINE === color,
                [cls.containerSubscribe]: TitleColorType.CORAL === color,
                [cls.containerDiscount]: TitleColorType.PINK === color
              },
              []
            )}
          >
            <ul className={cls.list}>
              {[...Array(titleLength(type))].map((_, i) => (
                <li className={cls.item} key={i}>
                  <svg className={cls.image}>
                    <use href={`${TitleImage}#image`}></use>
                  </svg>
                  <span className={cls.text}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </h2>
      )}
      {tag === TagTitleType.SUBTITLE_H3 && (
        <h3
          className={classNames(
            cls.title,
            {
              [cls.articles]: TitleType.ARTICLES === type,
              [cls.webinars]: TitleType.WEBINARS === type,
              [cls.subscribe]: TitleType.SUBSCRIBE === type,
              [cls.discount]: TitleType.DISCOUNT === type
            },
            [className]
          )}
        >
          <div
            className={classNames(
              cls.container,
              {
                [cls.containerArticles]: TitleColorType.TURQUOISE === color,
                [cls.containerWebinars]: TitleColorType.TANGERINE === color,
                [cls.containerSubscribe]: TitleColorType.CORAL === color,
                [cls.containerDiscount]: TitleColorType.PINK === color
              },
              []
            )}
          >
            <ul className={cls.list}>
              {[...Array(titleLength(type))].map((_, i) => (
                <li className={cls.item} key={i}>
                  <svg className={cls.image}>
                    <use href={`${TitleImage}#image`}></use>
                  </svg>
                  <span className={cls.text}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </h3>
      )}
    </>
  )
}
