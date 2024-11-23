import { ChangeEvent, FC, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import { images } from '../data/data'
import cls from './Game.module.css'

interface GameProps {
  className?: string
}

interface ICard {
  id: number
  src: string
  matched: boolean
  notFounded: boolean
  chosed: boolean
  selected: boolean
}

export const Game: FC<GameProps> = ({ className }) => {
  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [gridSize, setGridSize] = useState(4)

  const shuffleCards = () => {
    const totalCards = (gridSize * gridSize) / 2
    const imagesArr = [...Array(totalCards)].map((_, i) => ({
      ...images[i]
    }))
    const shuffleCardItems = [...imagesArr, ...imagesArr]
      .sort(() => Math.random() - 0.5)
      .map((card: ICard, i) => ({
        ...card,
        id: i,
        matched: false,
        notFounded: false,
        selected: false
      }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCardItems)
  }

  const handleChoice = (card: ICard) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
  }

  const handleGridSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value, 10)

    if (size >= 2 && size <= 6) setGridSize(size)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    shuffleCards()
  }, [gridSize])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards =>
          prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {
                ...card,
                matched: true,
                notFounded: false,
                selected: false
              }
            }
            return card
          })
        )
        resetTurn()
      } else {
        setCards(prevCards =>
          prevCards.map(card => {
            if (card.id === choiceOne.id) {
              return {
                ...card,
                matched: true,
                notFounded: true,
                selected: false
              }
            }
            if (card.id === choiceTwo.id) {
              return {
                ...card,
                matched: true,
                notFounded: true,
                selected: false
              }
            }
            return card
          })
        )
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card => {
              if (card.notFounded) {
                return {
                  ...card,
                  matched: false,
                  notFounded: false,
                  selected: true
                }
              }
              return card
            })
          )
          resetTurn()
        }, 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  return (
    <div className={classNames(cls.game, {}, [className])}>
      <ul
        className={cls.cards}
        style={{ gridTemplateColumns: `repeat(${gridSize}, 100px)` }}
      >
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            found={card.matched}
            error={card.notFounded}
            select={card.selected}
            handleChoice={handleChoice}
            disabled={disabled}
          />
        ))}
      </ul>
      <div>
        <div>
          <label htmlFor="gridSize">Размер сетки:</label>
          <input
            type="number"
            id="gridSize"
            min="2"
            max="6"
            step="2"
            value={gridSize}
            onChange={handleGridSizeChange}
          />
        </div>
        <div>Совпадений:</div>
      </div>
    </div>
  )
}
