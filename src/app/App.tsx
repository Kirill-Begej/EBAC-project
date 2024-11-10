import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

const App = () => {
  // eslint-disable-next-line no-console
  console.log('app')

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<PageLoader />}>
        <Header />
        <main className="content">test</main>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
