import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authprovider from './context/Authprovider.jsx'
import { setLocalStorage } from './utils/Localstorage.jsx'

setLocalStorage()

createRoot(document.getElementById('root')).render(
  <Authprovider>
    <App />
  </Authprovider>
)