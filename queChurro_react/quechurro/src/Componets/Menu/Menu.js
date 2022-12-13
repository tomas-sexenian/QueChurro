import React from 'react'
import { Img } from 'react'
import './Menu.css'

export default function Menu(){

    const estiloImg = {
        height: '60%',
        width: '70%'
    }

    return (
    <section id="menu" className="menu">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
                <h2>Nuestro menú</h2>
                <p>Algo mas que solo<span> churros</span></p>
            </div>

            <div className="tab-content" data-aos="fade-up" data-aos-delay="300">

                <div className="tab-pane fade active show" id="menu-starters">

                    <div className="row gy-5">

                        <div className="col-lg-4 menu-item">
                            <a href="./menu_images/churroNB.png" className="glightbox"><Img src="./menu_images/churroNB.png" className="menu-img img-fluid" /></a>
                            <h4>Churros comunes</h4>
                            <p className="ingredients">
                            Masa y azucar
                            </p>
                        </div>

                        <div className="col-lg-4 menu-item">
                            <a href="./menu_images/refrescoNB.png"className="glightbox"><Img src="./menu_images/refrescoNB.png" className="menu-img img-fluid" style={estiloImg} /></a>
                            <h4>Refrescos</h4>
                            <p className="ingredients">
                            Anda a saber que tienen
                            </p>
                        </div>

                        <div className="col-lg-4 menu-item">
                            <a href="./menu_images/licuadoNB.png" className="glightbox"><Img src="./menu_images/licuadoNB.png" className="menu-img img-fluid" style={estiloImg} /></a>
                            <h4>Licuados</h4>
                            <p className="ingredients">
                            Fruta, azucar y hielo
                            </p>
                        </div>

                        <div className="col-lg-4 menu-item">
                            <a href="./menu_images/cafeNB.png" className="glightbox"><Img src="./menu_images/licuadoNB.png" className="menu-img img-fluid" style={estiloImg} /></a>
                            <h4>Café</h4>
                            <p className="ingredients">
                            Palitos en el puesto de al lado
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}