import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.css'

interface CardProps {
  className?: string
  card: ICard
  flipped: boolean
  found: boolean
  error: boolean
  select: boolean
  handleChoice: (card: ICard) => void
  disabled: boolean
}

interface ICard {
  id: number
  src: string
  matched: boolean
  notFounded: boolean
  chosed: boolean
  selected: boolean
}

export const Card: FC<CardProps> = ({
  className,
  card,
  flipped,
  found,
  error,
  select,
  handleChoice,
  disabled
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <li className={classNames(cls.card, {}, [className])}>
      <div className={flipped ? cls.flipped : ''}>
        <div className={cls.back} onClick={handleClick}>
          ?
        </div>
        <div
          className={classNames(
            cls.front,
            {
              [cls.found]: found,
              [cls.error]: error,
              [cls.select]: select
            },
            []
          )}
        >
          <img
            className={cls.image}
            src={card.src}
            alt="Изображение карточки."
          />
        </div>
      </div>
    </li>
  )
}
