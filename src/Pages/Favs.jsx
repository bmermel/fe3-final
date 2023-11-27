import React from 'react'
import { useDentistaStates } from '../Context/DentistaContext';
import Card from '../Components/Card';

const Favs = () => {
    const { state, dispatch } = useDentistaStates();
    
    const clearFavorites = () => {
    localStorage.removeItem('favs');
    dispatch({ type: 'DELETE_FAVS', payload: [] });
  }
return (
  <div className='container'>
      <h2>Lista de Favoritos</h2>
    <div className='cardsContainer'>
      {state.favs.map(users => (
          <div key={users.id}>
              <Card key={users.id} users={users}/>
          </div>
      ))}</div>
      <button className="favsBtn"onClick={clearFavorites}>Limpiar Favoritos</button>
  </div>
);
};


export default Favs;