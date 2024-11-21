import { FC } from 'react'
import './PageLoader.css'

export const PageLoader: FC = () => (
  <div className="pageloader">
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
)
