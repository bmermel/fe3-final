import { Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Contacto from './Pages/Contacto'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import DentistaDetail from './Pages/DentistaDetail'
import './Styles/App.css'
import './Styles/Styles.css'
import Favs from './Pages/Favs'

function App() {
  

  return (  
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacto/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/dentist/:id' element={<DentistaDetail />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
