// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router'
import ThemeContextWrapper from './context/ThemeContextWrapper'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
  <ThemeContextWrapper>
    <Router />
  </ThemeContextWrapper>
  </Provider>
  // </StrictMode>,
)
