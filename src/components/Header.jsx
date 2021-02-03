import React from 'react';

import { Link } from 'react-router-dom';

// import About from './About'
const padding = {
  padding: 5,
};
const Header = () => (

  <div>
    <Link style={padding} to="/home">home</Link>
    <Link style={padding} to="/about">about</Link>
    <Link style={padding} to="/blog">blog</Link>
    <Link style={padding} to="/projects">projects</Link>
  </div>
);

export default Header;
