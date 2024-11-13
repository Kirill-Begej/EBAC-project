import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import TitleImage from 'shared/assets/img/title-image.svg'
import cls from './Title.module.css'

export enum TitleType {
  ARTICLES = 'articles',
  WEBINARS = 'webinars'
}

export enum TagTitleType {
  TITLE = 'title',
  SUBTITLE = 'subtitle'
}

enum TitleColorType {
  TURQUOISE = '#acd6de',
  TANGERINE = '#ffad20'
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
              [cls.webinars]: TitleType.WEBINARS === type
            },
            [className]
          )}
        >
          <div
            className={classNames(
              cls.container,
              {
                [cls.containerArticles]: TitleColorType.TURQUOISE === color,
                [cls.containerWebinars]: TitleColorType.TANGERINE === color
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
      {tag === TagTitleType.SUBTITLE && (
        <h2
          className={classNames(
            cls.title,
            {
              [cls.articles]: TitleType.ARTICLES === type,
              [cls.webinars]: TitleType.WEBINARS === type
            },
            [className]
          )}
        >
          <div
            className={classNames(
              cls.container,
              {
                [cls.containerArticles]: TitleColorType.TURQUOISE === color,
                [cls.containerWebinars]: TitleColorType.TANGERINE === color
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
    </>
  )
}
