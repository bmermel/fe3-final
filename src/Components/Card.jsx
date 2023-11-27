import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistaStates} from '../Context/DentistaContext'


const Card = ({users}) => {

  const addToFavorites = () => {
    dispatch({ type: 'ADD_FAV', payload: users });
    alert("Se ha añadido un favorito.")
};
  const {dispatch} = useDentistaStates()
  return (
    <div className= "card">
      <Link to={'/dentist/' + users.id}>
          <h3>{users.name}</h3> 
      </Link>
      <button onClick={(addToFavorites)}>⭐</button>
    </div>
  )
}

export default Card