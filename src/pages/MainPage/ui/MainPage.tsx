import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface MainPageProps {
  className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => (
  <div className={classNames('', {}, [className])}>Main Page</div>
)

export default MainPage
