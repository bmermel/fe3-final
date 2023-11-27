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
  <div>
      <h2>Lista de Favoritos</h2>
      {state.favs.map(users => (
          <div key={users.id}>
              <Card key={users.id} users={users}/>
          </div>
      ))}
      <button onClick={clearFavorites}>Limpiar Favoritos</button>
  </div>
);
};


export default Favs;