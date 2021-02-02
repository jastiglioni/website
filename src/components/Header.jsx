// import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// import About from './About'

const Header = ({ siteTitle }) => (
  <Router>
    <header
      style={{
        background: '#ecdb96',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />

        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Raleway',
            }}
          >
            {siteTitle}
          </Link>

        </h1>
        <Switch>
          <Route path="/" />

        </Switch>
      </div>
    </header>
  </Router>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
