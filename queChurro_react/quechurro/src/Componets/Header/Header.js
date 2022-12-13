import React from 'react'
import { Link, Route } from 'react-router-dom';
import Hero from '../Hero/Hero.js';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo d-flex align-items-center me-auto me-lg-0">
            <h1>QuéChurro<span>.</span></h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a>Inicio</a></li>
              <li><a>Acerca de QuéChurro</a></li>
              <li><a>Menu</a></li>
              <li><a>Eventos</a></li>
              <li><a>Reservas</a></li>
              <li><a>Galería</a></li>
              <li><a>Contacto</a></li>
            </ul>
          </nav>

          <a className="btn-book-a-table" href="#book-a-table">Reservá tu evento</a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        </div>
      </header>
  )
}

export default Header