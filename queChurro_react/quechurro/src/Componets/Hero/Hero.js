import React from 'react'
import queChurroLogo from '../.././assets/img/quechurro_logo.jpg';
import './Hero.css'

export default function Hero(){
  return (
    <section id="hero" className="hero d-flex align-items-center section-bg" style={{backgroundColor: "#28292d"}}>
    <div className="container">
      <div className="row justify-content-between gy-5">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up" style={{color: "aliceblue"}}>FOODTRUCK DE<br/>CHURROS</h2>
          <p data-aos="fade-up" data-aos-delay="100" style={{color: "aliceblue"}}>Vamos a tu fiesta o evento dando una experiencia divertida y distintiva</p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#book-a-table" className="btn-book-a-table">Reservá tu evento</a>
            <a href="https://youtu.be/FgGSIAoXe_A" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span style={{color: "aliceblue"}}>Un poco de lo que hacemos</span></a>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src={queChurroLogo} style={{borderRadius: "75"}} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
        </div>
      </div>
    </div>
  </section>
  )
}