import { FC } from 'react'
import { Articles } from 'widgets/Articles'
import { Promo } from 'widgets/Promo'
import { Subscribe } from 'widgets/Subscribe'
import { Webinars } from 'widgets/Webinars'

const MainPage: FC = () => (
  <>
    <Promo />
    <Articles />
    <Webinars />
    <Subscribe />
  </>
)

export default MainPage
