import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { ListGroup } from 'react-bootstrap';
import { getPokemonInfo } from '../redux/actions'
import defaultPok from '../images/defaultPok.png'
import { Alert } from 'react-bootstrap';
import { AlertContext } from '../contex/AlertContext'



export const PokemonPage = (props) => {


  const { serverFailure } = useContext(AlertContext)

  useEffect(() => {
    props.getPokemonInfo(props.pokemonName)
  }, [])

  return (
    <div className="container">
      <h1 className="text-center mb-3 pt-5">Info about {props.pokemonName}</h1>
      {props.isServerAlert ? <Alert variant={serverFailure.variant}>{serverFailure.text}</Alert>
        :
        props.isLoaded ?
          <div className="pokemon-wrapper">
            <div className="pokemon-wrapper-left">
              <img src={props.isServerAlert ? defaultPok : props.pageInfo.sprites.other["official-artwork"].front_default} className="pokemon-wrapper-left__img" alt={props.pokemonName}></img>
            </div>
            <ListGroup className="pokemon-wrapper-right" as="ul">
              <ListGroup.Item as="li">Pokem ID: {props.pageInfo.id}</ListGroup.Item>
              <ListGroup.Item as="li">Weight: {props.pageInfo.weight}</ListGroup.Item>
              <ListGroup.Item as="li">Height: {props.pageInfo.height}</ListGroup.Item>
              <ListGroup.Item as="li">
                <ul className="pokemon-abilities">
                  {props.pageInfo.abilities.map((item, index) => {
                    return <li className="pokemon-abilities__item" key={index}>Ability № {index + 1} - {item.ability.name}</li>
                  })}
                </ul>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <ul className="pokemon-abilities">
                  {props.pageInfo.types.map((item, index) => {
                    return <li className="pokemon-abilities__item" key={index}>Type - {item.type.name}</li>
                  })}
                </ul>
              </ListGroup.Item>

              <ListGroup.Item as="li">
                <ul className="pokemon-abilities">
                  {props.pageInfo.stats.map((item, index) => {
                    return <li className="pokemon-abilities__item" key={index}>stat № {index + 1}  - {item.stat.name}</li>
                  })}
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </div>
          :
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            className="text-center"
          />}
    </div>
  )
}


const mapStateToProps = (state) => ({
  pageInfo: state.goToPage.pokemonInfo,
  isLoaded: state.goToPage.isLoaded,
  isServerAlert: state.toggleAlert.isServerAlert,
})

const mapDispatchToProps = {
  getPokemonInfo: getPokemonInfo,
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
