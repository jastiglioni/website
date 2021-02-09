import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/General.css';
import logo from '../static/ll.png';

const padding = {
  padding: 5,
  color: 'black',
};
const Header = () => (

  <div className="main">
    <Link to="/"><img src={logo} alt="logo" style={{ maxHeight: '50px', maxWidth: '50px', borderRadius: '50%' }} /></Link>
    {/* <Link style={padding} to="/">home</Link> */}
    <Link style={padding} to="/about">about</Link>
    <Link style={padding} to="/blog">blog</Link>
    <Link style={padding} to="/projects">projects</Link>
    <div style={{ float: 'right' }}>
      <Link to="/"><img src={logo} alt="logo" style={{ maxHeight: '50px', maxWidth: '50px', borderRadius: '50%' }} /></Link>
    </div>
  </div>
);

export default Header;
