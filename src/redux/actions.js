import axios from 'axios'
import {
  SHOW_LOADER, HIDE_LOADER, GET_DATA, SET_POKEMONS, CHANGE_SEARCH_VALUE, SET_CURRENT_POKEMONS, GO_TO_POKEMON,
  GET_POKEMON_INFO, SHOW_PAGE_LOADER, HIDE_PAGE_LOADER, SHOW_SEARCH_ALERT, HIDE_SEARCH_ALERT, SHOW_SERVER_ALERT, HIDE_SERVER_ALERT
} from './types'


export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function setIsLoadedFalse() {
  return dispatch => {
    dispatch(showLoader)
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showSearchAlert() {
  return {
    type: SHOW_SEARCH_ALERT
  }
}

export function hideSearchAlert() {
  return {
    type: HIDE_SEARCH_ALERT
  }
}

export function showServerAlert() {
  return {
    type: SHOW_SERVER_ALERT
  }
}

export function hideServerAlert() {
  return {
    type: HIDE_SERVER_ALERT
  }
}

export function showPokemonLoader() {
  return {
    type: SHOW_PAGE_LOADER
  }
}

export function hidePokemonLoader() {
  return {
    type: HIDE_PAGE_LOADER
  }
}

// Home

function getData(data) {
  return {
    type: GET_DATA,
    payload: data
  }
}

export function getCards() {

  let limit = 9
  if (window.screen.width < 990) {
    limit = 6
  }
  if (window.screen.width < 540) {
    limit = 3
  }
  const arr = []
  let newState = []
  const offset = Math.floor(Math.random() * 101)
  return async dispatch => {
    try {
      dispatch(showLoader());
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      response.data.results.forEach(item => {
        arr.push(axios.get(`${item.url}`))
      })
      const res = await axios.all(arr)
      newState = res.map(item => ({
        name: item.data.name,
        imgURL: item.data.sprites.other["official-artwork"].front_default
      }))
      dispatch(getData(newState))
    }
    catch {
      dispatch(showServerAlert())
    }
    finally {
      dispatch(hideLoader());
    }
  }
}

// POkemonList
function setPokemons(pokemonNames) {
  return {
    type: SET_POKEMONS,
    payload: pokemonNames
  }
}

function setCurrentPokemons(pokemonNames) {
  return {
    type: SET_CURRENT_POKEMONS,
    payload: pokemonNames
  }
}

export function getPokemons() {

  return async dispatch => {
    const arr = []

    try {
      dispatch(hideServerAlert())
      dispatch(showLoader());
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=9999&offset=0`)
      response.data.results.forEach(item => {
        arr.push(item.name)
      })
      dispatch(setPokemons(arr))
      dispatch(setCurrentPokemons(arr))
    } catch (e) {
      dispatch(showServerAlert())
    }
    finally {
      dispatch(hideLoader());
    }

  }
}

// Search

export function changeSearchValue(inputValue) {
  return dispatch => {
    dispatch({
      type: CHANGE_SEARCH_VALUE,
      payload: inputValue
    })
  }
}

export function findPokemon(filterValue, pokemArr) {
  const oldPokemon = [...pokemArr]
  const newPokemonArr = oldPokemon.filter(pokemon => pokemon.includes(filterValue.toLowerCase()))
  if (newPokemonArr.length === 0) {
    return dispatch => {
      dispatch(showSearchAlert())
      dispatch(setCurrentPokemons(newPokemonArr))
    }
  }
  return dispatch => {
    dispatch(hideSearchAlert())
    dispatch(setCurrentPokemons(newPokemonArr))
  }
}

// pokemon page

export function PokemonPage(pokemonName) {

  return {
    type: GO_TO_POKEMON,
    payload: pokemonName
  }
}

export function pokemonInfo(info) {
  return {
    type: GET_POKEMON_INFO,
    payload: info
  }
}

export function goToPokemon(pokemonName) {

  return dispatch => {
    dispatch(PokemonPage(pokemonName))
  }
}

export function getPokemonInfo(URLpath) {
  return async dispatch => {
    try {
      dispatch(hideServerAlert())
      dispatch(showPokemonLoader())
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${URLpath}`)
      dispatch(pokemonInfo(response.data))
    }
    catch (e) {
      dispatch(showServerAlert())
    }
    finally {
      dispatch(hidePokemonLoader())
    }
  }
}


