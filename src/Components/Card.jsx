import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistaStates} from '../Context/DentistaContext'
import { IoStar } from "react-icons/io5";
import Toastify from 'toastify-js'



const Card = ({users}) => {

  const addToFavorites = () => {
    if(!isInFavs(users.id)){
      dispatch({ type: 'ADD_FAV', payload: users });
      //alert("Se ha añadido un favorito.")
      console.log("click");
      Toastify({
        text: "Se ha añadido un favorito",  gravity: "top", 
        position: "center", 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    }
};

  const isInFavs = (id) => state.favs.some(fav => fav.id == id)
  

  const {dispatch, state} = useDentistaStates()
  return (
    <div className= "card">
      <Link to={'/dentist/' + users.id}>
          <h3>{users.name}</h3>
                {/* Renderizar la imagen si existe */}
      {(
        <img className='doctoricon'
          src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
          alt={`Imagen de ${users.name}`}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )} 
      </Link>
      {isInFavs(users.id) ? 
  <button>  Se ha añadido a favoritos!  </button> : 
  <button onClick={addToFavorites}><IoStar />  Añadime a favoritos!  <IoStar /></button>
  
}
    </div>
  )
}

export default Card