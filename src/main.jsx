import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import MyRouter from './MyRouter'


createRoot(document.getElementById('root')).render(


  
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>

)
