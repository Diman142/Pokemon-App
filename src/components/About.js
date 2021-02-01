import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="container mt-4">
      <Jumbotron>
        <h1>Welcom to Pokemon App</h1>
        <p>
          This is the first version of the Pokemon app. The application uses the following tools react, redax, bootstrap pokeApi, etc.
          App have mobile adaptation you can use it form any devices
        </p>
        <p>
          <Link to="/"><Button variant="primary">Go to Home Page</Button></Link>
        </p>
      </Jumbotron>
    </div>
  )
}
