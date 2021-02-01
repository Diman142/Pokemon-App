import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

const PokemonNav = () => (
  <Nav as="ul">
    <Nav.Item as="li">
      <NavLink
        className="nav-link"
        to="/"
        activeClassName="active__link"
        exact
      >
        Home
      </NavLink>
    </Nav.Item>
    <Nav.Item as="li">
      <NavLink
        className="nav-link"
        to="/pokemonlist"
        activeClassName="active__link"
        exact
      >
        Pokem List
      </NavLink>
    </Nav.Item>
    <Nav.Item as="li">
      <NavLink
        className="nav-link"
        to="/about"
        activeClassName="active__link"
        exact
      >
        About
      </NavLink>
    </Nav.Item>
  </Nav>
)


export default PokemonNav
