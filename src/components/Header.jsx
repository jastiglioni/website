import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/General.css';
import logo from '../static/ll.png';

const padding = {
  padding: 5,
};
const Header = () => (

  <div className="main">
    <Link to="/"><img src={logo} alt="logo" style={{ maxHeight: '50px', maxWidth: '50px' }} /></Link>
    {/* <Link style={padding} to="/">home</Link> */}
    <Link style={padding} to="/about">about</Link>
    <Link style={padding} to="/blog">blog</Link>
    <Link style={padding} to="/projects">projects</Link>
  </div>
);

export default Header;
