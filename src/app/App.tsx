import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'

const App = () => {
  // eslint-disable-next-line no-console
  console.log('app')

  return (
    <div className={classNames('app', {}, [])}>
      <Header />
      <Footer />
    </div>
  )
}

export default App
