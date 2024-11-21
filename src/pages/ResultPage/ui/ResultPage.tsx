import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface ResultPageProps {
  className?: string
}

const ResultPage: FC<ResultPageProps> = ({ className }) => (
  <div className={classNames('', {}, [className])}>Result Page</div>
)

export default ResultPage
