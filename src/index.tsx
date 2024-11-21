import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import 'app/styles/index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}
  >
    <App />
  </BrowserRouter>
)
