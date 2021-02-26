import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/General.css';
import logo from '../static/ship.png';

const padding = {
  padding: 5,
  color: 'black',
};
const Header = () => (
  <>

    <div className="main">
      <div style={{ float: 'right' }}>
        <Link to="/"><img src={logo} alt="logo" style={{ maxHeight: '250px', maxWidth: '250px' }} /></Link>
      </div>
      <div>
        <h1>Jacob Castiglioni</h1>

      </div>

      <div>
        <Link style={padding} to="/about">about</Link>
        <Link style={padding} to="/blog">blog</Link>
        <Link style={padding} to="/projects">projects</Link>
        <Link style={padding} to="/learn">learn</Link>
      </div>
      <hr className="zig-zag" />
    </div>

  </>
);

export default Header;
