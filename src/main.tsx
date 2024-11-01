import './i18n.ts'
import './index.css'
import App from './App.tsx'
import store from './store.ts';
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
