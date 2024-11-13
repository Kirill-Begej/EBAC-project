import { FC } from 'react'
import { Articles } from 'widgets/Articles'
import { Promo } from 'widgets/Promo'
import { Webinars } from 'widgets/Webinars'

const MainPage: FC = () => (
  <>
    <Promo />
    <Articles />
    <Webinars />
  </>
)

export default MainPage
