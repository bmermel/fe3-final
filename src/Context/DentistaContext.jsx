import axios from 'axios'
import { useReducer } from 'react'
import {createContext, useContext, useEffect, useState} from 'react'

const DentistaStates = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'GET_DENTISTAS':
            return {...state, dentistaList: action.payload}
        case 'ADD_FAV': 
            const updatedFavs = [...state.favs, action.payload];
            localStorage.setItem('favs', JSON.stringify(updatedFavs));
            return {...state, favs: [...state.favs, action.payload]}
        case 'DARK_MODE':
            //return {...state.darkTheme, darkTheme: [...state.darkTheme, action.payload]}
            return { ...state, darkTheme: action.payload };
        case 'DELETE_FAVS':
            localStorage.removeItem('favs');
            return { ...state, favs: [] };
    }
}
const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
const initialState = {
    dentistaList: [],
    favs: storedFavs,
    darkTheme: false,
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)


    
    const url = 'https://jsonplaceholder.typicode.com/users'
    
    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_DENTISTAS', payload: res.data}))
    }, [])

    return (
        <div>
        <DentistaStates.Provider value={{ state, dispatch }}>
          {children}
        </DentistaStates.Provider>    
        </div>
    )
}
export default Context
export const useDentistaStates = () => useContext(DentistaStates)