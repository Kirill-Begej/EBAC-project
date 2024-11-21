import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'
import { AppRouter } from './providers/router'

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Header />
    <AppRouter />
  </div>
)

export default App
