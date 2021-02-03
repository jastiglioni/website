import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch, Route,
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import BlogLogic from './components/BlogLogic';
import Header from './components/Header';

const App = () => (
  <div>
    <div>

      <Router>
        <Header />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <BlogLogic />
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
