import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

const pokname = ['Picachy', 'Bulbazavr', 'Miayt']

export const PokemonNav = () => {


  return (
    <Nav as="ul">
      <Nav.Item as="li">
        <NavLink
          className="nav-link"
          to="/"
          activeClassName="active__link"
          exact={true}
        >Home
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          className="nav-link"
          to="/pokemonlist"
          activeClassName="active__link"
          exact={true}
        >Pokem List
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          className="nav-link"
          to="/about"
          activeClassName="active__link"
          exact={true}
        >About
        </NavLink>
      </Nav.Item>
    </Nav>
  )
}
