import { createRoot } from 'react-dom/client'
import App from 'app/App'
import 'app/styles/index.css'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StoreProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StoreProvider>
)
