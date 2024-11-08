import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Header />
    <Footer />
  </div>
)

export default App
