/* eslint-disable import/prefer-default-export */
import { SET_POKEMONS, CHANGE_SEARCH_VALUE, SET_CURRENT_POKEMONS } from './types'

const initialState = {
  searchValue: '',
  pokemonsData: [],
  pokemonCurentList: [],
}

export const listReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemonsData: action.payload }

    case CHANGE_SEARCH_VALUE: {
      return { ...state, searchValue: action.payload }
    }
    case SET_CURRENT_POKEMONS: {
      return { ...state, pokemonCurentList: action.payload }
    }
    default: return state
  }
}
