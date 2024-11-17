import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import 'app/styles/index.css'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StoreProvider>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>
)
