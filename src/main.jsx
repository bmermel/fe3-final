import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Context from './Context/DentistaContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    
    <BrowserRouter>
        <Context>
            <App />
        </Context>
    </BrowserRouter>
)
