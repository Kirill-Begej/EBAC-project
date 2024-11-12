import { FC } from 'react'
import { Articles } from 'widgets/Articles'
import { Promo } from 'widgets/Promo'

const MainPage: FC = () => (
  <>
    <Promo />
    <Articles />
  </>
)

export default MainPage
