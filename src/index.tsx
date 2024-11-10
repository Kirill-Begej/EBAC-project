import { createRoot } from 'react-dom/client'
import App from 'app/App'
import 'app/styles/index.css'
import { MenuProvider } from 'app/providers/StoreProvider'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <MenuProvider>
    <App />
  </MenuProvider>
)
