import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Header />
  </div>
)

export default App
