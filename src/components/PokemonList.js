/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { Form, Button, Alert } from 'react-bootstrap';
import Loader from 'react-loader-spinner'
import { getPokemons, changeSearchValue, findPokemon, goToPokemon } from '../redux/actions'
import { AlertContext } from '../contex/AlertContext'


const PokemonList = ({ isSearchAlert, isServerAlert, pokemonList, isLoaded, searchValue, pokemonCurrentList, getPokemons, changeSearchValue, findPokemon, goToPokemonPage }) => {

  const { searchFailure, serverFailure } = useContext(AlertContext)

  useEffect(() => {
    getPokemons();
  }, [])

  return (
    <div className="container pt-4">
      <h1 className="text-center mb-5">Pokemon List</h1>
      {isServerAlert ? <Alert variant={serverFailure.variant}>{serverFailure.text}</Alert> : null}
      <Form className="pokemon-list-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="pokemon-list-form__label">List Searching</Form.Label>
          <Form.Control
            type="search"
            value={searchValue}
            onChange={(event) => {
              changeSearchValue(event.target.value)
            }}
          />
          <Form.Text className="text-muted pokemon-list-form__note">
            Enter name of pokemon.
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="mb-4"
          onClick={(event) => {
            event.preventDefault()
            findPokemon(searchValue, pokemonList)
          }}
        >
          Search Pokemon
        </Button>
      </Form>
      {isSearchAlert ? <Alert variant={searchFailure.variant}>{searchFailure.text}</Alert> : null}
      {isLoaded ? (
        <ul className="pokemon-list">
          {pokemonCurrentList.sort().map((item, index) => (
            <li className="pokemon-list__item" key={index}>
              {' '}
              <Link
                className="pokemon-list__link"
                to={`/${item}`}
                onClick={(event) => {
                  goToPokemonPage(event.target.textContent)
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )
        : (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            className="tac"
          />
        )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoaded: state.setIsLoaded.isLoaded,
  pokemonList: state.getLists.pokemonsData,
  searchValue: state.getLists.searchValue,
  pokemonCurrentList: state.getLists.pokemonCurentList,
  isSearchAlert: state.toggleAlert.isSearchAlert,
  isServerAlert: state.toggleAlert.isServerAlert,
})

const mapDispatchToProps = {
  changeSearchValue,
  getPokemons,
  findPokemon,
  goToPokemonPage: goToPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
