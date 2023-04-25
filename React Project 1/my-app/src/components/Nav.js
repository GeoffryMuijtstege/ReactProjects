import React from 'react';

export default function Nav()
{
  return(
    <header>
      <nav class="navbar">
        <img src={require('./logo192.png')} alt="React Logo" className="logo"/>
        <ul className="nav-links">
          <li><a href="#Pricing">Pricing</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}