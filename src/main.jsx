import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Movie from './Component/Movie.jsx'
import { Provider } from 'react-redux'

import { stores } from './redux/star.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={stores} >
    <App />
    </Provider>
  </StrictMode>,
)
