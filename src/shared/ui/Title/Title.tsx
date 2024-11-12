import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import TitleImage from 'shared/assets/img/title-image.svg'
import cls from './Title.module.css'

export enum TitleType {
  ARTICLES = 'articles'
}

enum TitleColorType {
  TURQUOISE = '#acd6de'
}

interface TitleProps {
  className?: string
  type: TitleType
  text: string
  color: string
}

export const Title: FC<TitleProps> = ({ className, type, text, color }) => {
  const titleLength = (titleType: TitleType): number => {
    switch (titleType) {
      case TitleType.ARTICLES:
        return 11
        break
      default:
        return 1
        break
    }
  }

  return (
    <h1
      className={classNames(
        cls.title,
        {
          [cls.articles]: TitleType.ARTICLES === type
        },
        [className]
      )}
    >
      <div
        className={classNames(
          cls.container,
          {
            [cls.containerArticles]: TitleColorType.TURQUOISE === color
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
  )
}
