import React from 'react'
import './Menu.css'
import cafeNB from './menu_images/cafeNB.png'
import churroNB from './menu_images/churroNB.png'
import licuadoNB from './menu_images/licuadoNB.png'
import refrescoNB from './menu_images/refrescoNB.png'


export default function Menu(){

    const estiloDefault= {
        height: '60%',
        width: '70%'
    }

    const estiloCafe = {
        height: '50%',
        width: '60%'
    }

    const estiloRefresco = {
        height: '60%',
        width: '50%'
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
                            <a href="/menu_images/cafeNB.png" className="glightbox"><img src={cafeNB} className="menu-img img-fluid" style={estiloCafe}/></a>
                            <h4>Café</h4>
                            <p className="ingredients">
                            Palitos en el puesto de al lado
                            </p>
                        </div>

                        <div className="col-lg-4 menu-item">
                            <a href="./menu_images/licuadoNB.png"className="glightbox"><img src={licuadoNB} className="menu-img img-fluid" style={estiloDefault} /></a>
                            <h4>Licuados</h4>
                            <p className="ingredients">
                            Fruta, azucar y hielo
                            </p>
                        </div>

                        <div className="col-lg-4 menu-item">
                            <a href="./menu_images/churroNB.png" className="glightbox"><img src={churroNB} className="menu-img img-fluid" style={estiloDefault} /></a>
                            <h4>Churros</h4>
                            <p className="ingredients">
                            Masa y azucar 
                            </p>
                        </div>

                        <div className="col-lg-4 menu-item">
                            <a href="./menu_images/refrescoNB.png" className="glightbox"><img src={refrescoNB} className="menu-img img-fluid" style={estiloRefresco} /></a>
                            <h4>Refrescos</h4>
                            <p className="ingredients">
                            Anda a saber que tienen 
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}