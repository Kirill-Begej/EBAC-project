import { createRoot } from 'react-dom/client'
import App from 'app/App'
import 'app/styles/index.css'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StoreProvider>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StoreProvider>
)
