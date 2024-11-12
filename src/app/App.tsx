import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'
import { PageLoader } from 'widgets/PageLoader'
import { MainPage } from 'pages/MainPage'
import { UseLoadingContext } from './providers/StoreProvider'

const App = () => {
  // eslint-disable-next-line no-console
  console.log('app')

  const isLoading = UseLoadingContext()

  return (
    <div className={classNames('app', {}, [])}>
      {isLoading && <PageLoader />}
      {!isLoading && (
        <>
          <Header />
          <main className="content">
            <MainPage />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
