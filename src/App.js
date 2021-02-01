/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import PokemonNav from './components/PokemonNav'
import Home from './components/Home'
import PokemonList from './components/PokemonList'
import About from './components/About'
import PokemonPage from './components/PokemonPage'
import AlertState from './contex/AlertState'


function App({ pagePath }) {


  let routes = (
    <Switch>
      <Route path="/pokemonlist" component={PokemonList} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  )

  if (pagePath !== "test") {
    routes = (
      <Switch>
        <Route path={`/${pagePath}`} render={(props) => <PokemonPage pokemonName={pagePath} {...props} />} />
        <Route path="/pokemonlist" component={PokemonList} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    )
  }

  return (
    <>
      <AlertState>
        <PokemonNav />
        {routes}
      </AlertState>
    </>
  );
}

const mapStateToProps = (state) => ({
  pagePath: state.goToPage.linkPath
})


export default withRouter(connect(mapStateToProps, null)(App));
