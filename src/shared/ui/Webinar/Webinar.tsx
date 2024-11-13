import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import DateImage from 'shared/assets/img/date.svg'
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formatDate = (dateFrom: string, dateTo: string) => {
    const months = [
      'de enero',
      'de febrero',
      'de marzo',
      'de abril',
      'de mayo',
      'de junio',
      'de julio',
      'de agosto',
      'de septiembre',
      'de octubre',
      'de noviembre',
      'de diciembre'
    ]

    const spliteDateFrom = dateFrom.split('.')
    const spliteDateTo = dateTo.split('.')

    return `${Number(spliteDateFrom[0])} ${months[Number(spliteDateFrom[1]) - 1]}, ${Number(spliteDateTo[0])} ${months[Number(spliteDateTo[1]) - 1]} ${spliteDateTo[2]}`
  }

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
              {/* <span className={cls.dateText}>
                {formatDate(data.date_from, data.date_to)}
              </span> */}
              <span className={cls.dateText}>01 e 02 de junho de 2022</span>
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
