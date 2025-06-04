import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextCont from './context/ContextCont.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContextCont>
            <App />
        </ContextCont>
    </BrowserRouter>
)
