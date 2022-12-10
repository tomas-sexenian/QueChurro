import React, {useEffect} from 'react'
import queChurroAsset from '../.././assets/img/quechurro_asset3.jpg';
import AOS from 'aos';

export default function About(){
    useEffect(() => {
        AOS.init();
      }, [])
      return (
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Acerca de QuéChurro</h2>
              <p>Conocé un poco sobre <span>el mejor churro del Uruguay</span></p>
            </div>
            <div className="row gy-4">
              <div className="col-lg-7 position-relative about-img" data-aos="fade-up" data-aos-delay="150">
                <div className="call-us position-top">
                  <h4>Ponete en contacto</h4>
                  <p>+598 95 425 240</p>
                </div>
              </div>
              <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  </p>
    
                  <div className="position-relative mt-4">
                    <img src={queChurroAsset} className="img-fluid" alt=""/>
                    <a href="https://youtu.be/FgGSIAoXe_A" className="glightbox play-btn"></a>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </section>
      )
}