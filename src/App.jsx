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
import Projects from './Projects';

const App = () => (
  <div>
    <div className="App">
      <Router>

        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand href="/home">Jacob Castiglioni</Navbar.Brand>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>

      </Router>
    </div>

  </div>
);

export default App;
