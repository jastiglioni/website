import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/General.css';

const padding = {
  padding: 5,
};
const Header = () => (

  <div className="main">
    <Link to="/home">home</Link>
    <Link style={padding} to="/about">about</Link>
    <Link style={padding} to="/blog">blog</Link>
    <Link style={padding} to="/projects">projects</Link>
  </div>
);

export default Header;
