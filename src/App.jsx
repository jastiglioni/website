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
import Blog from './components/Blog';
import Header from './components/Header';

const App = () => (
  <div>
    <div>

      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
        </Switch>

      </Router>
    </div>

  </div>
);

export default App;
