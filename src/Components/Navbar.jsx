import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistaStates } from '../Context/DentistaContext';


const Navbar = () => {
  const changeTheme = () => {
    dispatch({ type: 'DARK_MODE', payload: !state.darkTheme});
  }
  const {dispatch, state} = useDentistaStates()
  return (
    <div className='navbar'>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
        <Link to='/favs'><h4>Favs</h4></Link>
        <button onClick={changeTheme}>THEMED BUTTON</button>
    </div>
  )
}

export default Navbar