import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleImage } from 'shared/ui/ArticleImage/ArticleImage'
import DateImage from 'shared/assets/img/date.svg'
import cls from './Article.module.css'
import { Button } from '../Button/Button'

enum ArticleType {
  FULL_SIZE = 'full-size',
  FULL_IMAGE = 'full-image'
}

enum ArticleAccent {
  GRASS = '#bedb39',
  MARINE = '#90eecb',
  PINK = '#ec95b1',
  TANGERINE = '#ffad20',
  TURQUOISE = '#acd6de'
}

interface IContentItems {
  accent: string
  date: string
  duration: number
  size: string
  text: string
  title: string
  img: {
    shape: string
    url: string
  }
  stamp: {
    position: string
    type: string
    word: string
  }
  tags: string[]
}

interface ArticleProps {
  className?: string
  data: IContentItems
  button?: string
}

export const Article: FC<ArticleProps> = ({ className, data, button }) => {
  const [rotateSticker, setRotateSticker] = useState(false)

  const formatDate = (date: string) => {
    const months = [
      'de enero de',
      'de febrero de',
      'de marzo de',
      'de abril de',
      'de mayo de',
      'de junio de',
      'de julio de',
      'de agosto de',
      'de septiembre de',
      'de octubre de',
      'de noviembre de',
      'de diciembre de'
    ]

    const spliteDate = date.split('.')

    return `${Number(spliteDate[0])} ${months[Number(spliteDate[1]) - 1]} ${spliteDate[2]}`
  }

  return (
    <div
      className={classNames(
        cls.article,
        {
          [cls.promo]: ArticleType.FULL_SIZE === data.size,
          [cls.full]: ArticleType.FULL_IMAGE === data.size
        },
        [className]
      )}
      onMouseEnter={() => {
        setRotateSticker(true)
      }}
      onMouseLeave={() => {
        setRotateSticker(false)
      }}
    >
      <ArticleImage
        url={data.img.url}
        imageType={data.size}
        maskType={data.img.shape}
        stikerType={data.stamp.word}
        stikerPosition={data.stamp.position}
        rotateSticker={rotateSticker}
      />
      <div className={cls.textWrapper}>
        <ul
          className={classNames(
            cls.tagsList,
            {
              [cls.grass]: ArticleAccent.GRASS === data.accent,
              [cls.marine]: ArticleAccent.MARINE === data.accent,
              [cls.pink]: ArticleAccent.PINK === data.accent,
              [cls.tangerine]: ArticleAccent.TANGERINE === data.accent,
              [cls.turquoise]: ArticleAccent.TURQUOISE === data.accent
            },
            []
          )}
        >
          {data.tags.map((item, i) => (
            <li className={cls.tagsItem} key={i}>
              {item}
            </li>
          ))}
        </ul>
        <div className={cls.text}>
          <h4 className={cls.title}>{data.title}</h4>
          <p className={cls.desc}>{data.text}</p>
        </div>
        <ul className={cls.dateList}>
          <li className={cls.dateItem}>
            <svg className={cls.dateImage}>
              <use href={`${DateImage}#calendar`}></use>
            </svg>
            <span className={cls.dateText}>{formatDate(data.date)}</span>
          </li>
          <li className={cls.dateItem}>
            <svg className={cls.dateImage}>
              <use href={`${DateImage}#watch`}></use>
            </svg>
            <span className={cls.dateText}>{data.duration} min</span>
          </li>
        </ul>
        {button && (
          <div className={cls.button}>
            <Button buttonType={data.size} submitText={button} />
          </div>
        )}
      </div>
    </div>
  )
}
