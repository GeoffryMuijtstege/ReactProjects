import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Header()
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

function Main(){
  return(
      <div className="Main">
          <h1>Why I'm excited to learn react</h1>
          <ol>
              <li>Learning!</li>
              <li>More job oppertunities!</li>
              <li>Making things pretty!</li>
              <li>Having fun!</li>
          </ol>

      </div>
  )
}

function Footer(){
  return(
  <footer>
    <small>© 2023 Muijtstege development. All rights reserved.</small>
  </footer>
  )
}

function Page(){
  return(
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>

  )
}

ReactDOM.render(<Page />, document.getElementById("root"));

reportWebVitals();