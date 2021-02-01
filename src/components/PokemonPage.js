/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { ListGroup, Alert } from 'react-bootstrap';
import { getPokemonInfo } from '../redux/actions'
import defaultPok from '../images/defaultPok.png'

import { AlertContext } from '../contex/AlertContext'



const PokemonPage = ({ pokemonName, isServerAlert, isLoaded, pageInfo, getPokemonInfo }) => {

  const { serverFailure } = useContext(AlertContext)

  useEffect(() => {
    getPokemonInfo(pokemonName)
  }, [])

  return (
    <div className="container">
      <h1 className="text-center mb-3 pt-5">
        Info about
        {' '}
        {pokemonName}
      </h1>
      {isServerAlert ? <Alert variant={serverFailure.variant}>{serverFailure.text}</Alert>
        :
        isLoaded ? (
          <div className="pokemon-wrapper">
            <div className="pokemon-wrapper-left">
              <img src={pageInfo.sprites.other["official-artwork"].front_default ? pageInfo.sprites.other["official-artwork"].front_default : defaultPok} className="pokemon-wrapper-left__img" alt={pokemonName} />
            </div>
            <ListGroup className="pokemon-wrapper-right" as="ul">
              <ListGroup.Item as="li">
                Pokem ID:
                {pageInfo.id}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Weight:
                {pageInfo.weight}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Height:
                {pageInfo.height}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <ul className="pokemon-abilities">
                  {pageInfo.abilities.map((item, index) => (
                    <li className="pokemon-abilities__item" key={index}>
                      Ability №
                      {index + 1}
                      {' '}
                      -
                      {item.ability.name}
                    </li>
                  ))}
                </ul>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <ul className="pokemon-abilities">
                  {pageInfo.types.map((item, index) => (
                    <li className="pokemon-abilities__item" key={index}>
                      Type -
                      {item.type.name}
                    </li>
                  ))}
                </ul>
              </ListGroup.Item>

              <ListGroup.Item as="li">
                <ul className="pokemon-abilities">
                  {pageInfo.stats.map((item, index) => (
                    <li className="pokemon-abilities__item" key={index}>
                      stat №
                      {index + 1}
                      {' '}
                      -
                      {item.stat.name}
                    </li>
                  ))}
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </div>
        )
          : (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              className="text-center"
            />
          )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  pageInfo: state.goToPage.pokemonInfo,
  isLoaded: state.goToPage.isLoaded,
  isServerAlert: state.toggleAlert.isServerAlert,
})

const mapDispatchToProps = {
  getPokemonInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
