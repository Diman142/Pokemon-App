import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { goToPokemon } from '../redux/actions'

const PokemonItem = ({ data, goToPokemonPage }) => {

  function clickHandler() {
    console.log(data.name)
  }

  return (
    <Card style={{ width: '18rem' }} as="li" className="mb-5">
      <Link to={"/" + data.name} onClick={() => {
        goToPokemonPage(data.name)
      }}>
        <Card.Img variant="top" src={data.imgURL} />
        <Card.Body>
          <Card.Title className="tac">{data.name}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  )
}

const mapDispatchToProps = {
  goToPokemonPage: goToPokemon
}

export default connect(null, mapDispatchToProps)(PokemonItem)




