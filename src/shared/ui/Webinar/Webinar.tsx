import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import DateImage from 'shared/assets/img/date.svg'
import { useWebinarFormatDate } from 'shared/lib/hooks/useWebinarFormatDate'
import cls from './Webinar.module.css'

enum WebinarBackground {
  TURQUOISE = '#57acbc',
  CORAL = '#fe6d44',
  TANGERINE = '#ef9700'
}

interface IProposalsItems {
  author: {
    img: string
    name: string
    position: string
  }
  background: string
  date_from: string
  date_to: string
  tags: string[]
  text: string
  time: string
}

interface WebinarProps {
  className?: string
  data: IProposalsItems
  fullSize: boolean
}

export const Webinar: FC<WebinarProps> = ({ className, data, fullSize }) => {
  const { date } = useWebinarFormatDate(data.date_from, data.date_to)

  return (
    <li
      className={classNames(
        cls.webinar,
        {
          [cls.turquoise]: WebinarBackground.TURQUOISE === data.background,
          [cls.coral]: WebinarBackground.CORAL === data.background,
          [cls.tangerine]: WebinarBackground.TANGERINE === data.background,
          [cls.full]: fullSize
        },
        [className]
      )}
    >
      <div className={cls.itemContainer}>
        <div className={cls.imageWrapper}>
          <div className={cls.imageContainer}>
            <img
              className={cls.image}
              src={`${require(`shared/assets${data.author.img}`)}`}
              alt="Foto do apresentador do webinar."
            />
          </div>
        </div>
        <div className={cls.author}>
          <h4 className={cls.authorName}>{data.author.name}</h4>
          <span className={cls.authorPost}>{data.author.position}</span>
        </div>
        <p className={cls.text}>{data.text}</p>
        <div className={cls.dateContainer}>
          <ul className={cls.tagsList}>
            {data.tags.map((item, i) => (
              <li className={cls.tagsItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
          <ul className={cls.dateList}>
            <li className={cls.calendar}>
              <svg className={cls.dateImage}>
                <use href={`${DateImage}#calendar`}></use>
              </svg>
              <span className={cls.dateText}>{date}</span>
            </li>
            <li className={cls.watch}>
              <svg className={cls.dateImage}>
                <use href={`${DateImage}#watch`}></use>
              </svg>
              <span className={cls.dateText}>{data.time}</span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}
