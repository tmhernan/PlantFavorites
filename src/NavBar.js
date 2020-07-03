import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navCon'>
      <div className='Header'>
        <p>Love Plants</p>
      </div>

      <div className='Nav'>
        <ul id='nav-links'>
          <li>
            <a href='www.a.com'>Home</a>
          </li>
          <li>
            <a href='www.a.com'>Favorites</a>
          </li>
          <li>
            <a href='www.a.com'>About</a>
          </li>
          <li>
            <a href='www.a.com'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
