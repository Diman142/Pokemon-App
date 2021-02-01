/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from 'react'
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import PokemonItem from './PokemonItem'
import { getCards } from '../redux/actions'
import { AlertContext } from '../contex/AlertContext'



const Home = ({ isServerAlert, isLoaded, list, getCards }) => {

  const { serverFailure } = useContext(AlertContext)

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className="container pt-4">
      <h1 className="text-center mb-5">Home Page</h1>
      {isServerAlert ? <Alert variant={serverFailure.variant}>{serverFailure.text}</Alert> :
        isLoaded ? (
          <ul className="card-list">
            {list.map((item, index) => <PokemonItem data={item} key={`${`${index}card`}`} />)}
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
  list: state.getCards.listData,
  isServerAlert: state.toggleAlert.isServerAlert,
})

const mapDispatchToProps = {
  getCards
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
