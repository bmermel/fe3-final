import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistaStates } from '../Context/DentistaContext';
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";


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
        <h2 className='icon'>{state.darkTheme ? <MdOutlineWbSunny onClick={changeTheme} /> : <FiMoon onClick={changeTheme} />}</h2>
    </div>
  )
}

export default Navbar