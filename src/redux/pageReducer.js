import { GET_POKEMON_INFO, GO_TO_POKEMON, SHOW_PAGE_LOADER, HIDE_PAGE_LOADER } from './types'

const initialState = {
  linkPath: "test",
  pokemonInfo: {
    id: "",
    name: "",
    weight: "",
    height: "",
    abilities: [],
    types: [],
    state: [],
  },
  isLoaded: false
}

export const pageReducer = (state = initialState, action) => {

  switch (action.type) {
    case GO_TO_POKEMON:
      return { ...state, linkPath: action.payload }
    case GET_POKEMON_INFO:
      return { ...state, pokemonInfo: action.payload }
    case SHOW_PAGE_LOADER:
      return { ...state, isLoaded: false }
    case HIDE_PAGE_LOADER:
      return { ...state, isLoaded: true }
    default: return state
  }
}
