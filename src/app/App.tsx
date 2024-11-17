import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'
import { PageLoader } from 'widgets/PageLoader'
import { UseLoadingContext } from './providers/StoreProvider'
import { AppRouter } from './providers/router'

const App = () => {
  const isLoading = UseLoadingContext()

  return (
    <div className={classNames('app', {}, [])}>
      {isLoading && <PageLoader />}
      {!isLoading && (
        <>
          <Header />
          <main className="content">
            <AppRouter />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
