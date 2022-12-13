import React from 'react'

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo d-flex align-items-center me-auto me-lg-0">
            <h1>QuéChurro<span>.</span></h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
            <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Acerca de QuéChurro</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#events">Eventos</a></li>
          <li><a href="#book-a-table">Reservas</a></li>
          <li><a href="#gallery">Galería</a></li>
          <li><a href="#contact">Contacto</a></li>
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