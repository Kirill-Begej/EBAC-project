import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Game } from 'widgets/Game'

interface MainPageProps {
  className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => (
  <div className={classNames('', {}, [className])}>
    <Game />
  </div>
)

export default MainPage
