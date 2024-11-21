import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

const App = () => (
  <div className={classNames('app', {}, [])}>
    <AppRouter />
  </div>
)

export default App
