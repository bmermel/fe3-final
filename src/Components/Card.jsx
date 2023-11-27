import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistaStates} from '../Context/DentistaContext'


const Card = ({users}) => {

  const addToFavorites = () => {
    if(!isInFavs(users.id)){
      dispatch({ type: 'ADD_FAV', payload: users });
      alert("Se ha añadido un favorito.")
    }
};

  const isInFavs = (id) => state.favs.some(fav => fav.id == id)
  

  const {dispatch, state} = useDentistaStates()
  return (
    <div className= "card">
      <Link to={'/dentist/' + users.id}>
          <h3>{users.name}</h3> 
      </Link>
      {isInFavs(users.id) ? <span>en favoritos</span> : <button onClick={(addToFavorites)}>⭐</button>
}
    </div>
  )
}

export default Card