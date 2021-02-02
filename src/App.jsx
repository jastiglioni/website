import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  // NavLink,
  BrowserRouter as Router,
  Switch, Route,
} from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => (
  <div>
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">

          <Nav className="mr-auto">
            <Nav.Link to="/home" href="home">Home</Nav.Link>
            <Nav.Link to="/about" href="about">About</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
          </Nav>

        </Navbar>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

      </Router>

    </div>

  </div>
);

export default App;
