import React from 'react'
import './StatsCounter.css'
import './blobz-screen-sizes.css'

export default  function StatsCounter(){
    return (
        <section id="stats-counter" className="stats-counter">
        <div className="container" data-aos="zoom-out">
          <div className="row gy-4 position-relative" style={{zIndex: "1"}}>
            <div className="col-md" style={{zIndex: "2"}}>
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="420" data-purecounter-duration="1" className="purecounter"></span>
                <p>Eventos</p>
              </div>
            </div>
            <div className="col-md" style={{zIndex: "2"}}>
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="6969" data-purecounter-duration="1" className="purecounter"></span>
                <p>Churros vendidos</p>
              </div>
            </div>
            <div className="col-md" style={{zIndex: "2"}}>
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                <p>Clientes contentos</p>
              </div>
            </div>

            <div className="position-absolute center-both o-90 col-md main-blob firstBlob blob" data-tor="place.center place.middle" >
              <div data-tor="scroll:@transform=translateY(-20px;0px,{method:continuous}) .. mouseX:@transform=translateX(-30px;0px,{method:continuous}) mouseY:@transform=translateY(-30px;0px,{method:continuous}) scroll:@transform=translateY(-30px;0px,{method:continuous}) .. sensor-parallax(190) sensor-parallax-ease(20)" >
                <div className="tk-blob blob-animated blob-purple p-4 p-md-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                    <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="position-absolute center-both o-90 col-md secondary-blob secondBlob blob" data-tor="place.center place.middle">
              <div data-tor="scroll:@transform=translateY(-20px;0px,{method:continuous}) .. mouseX:@transform=translateX(-30px;0px,{method:continuous}) mouseY:@transform=translateY(-30px;0px,{method:continuous}) scroll:@transform=translateY(-30px;0px,{method:continuous}) .. sensor-parallax(190) sensor-parallax-ease(20)" >
                <div className="tk-blob blob-animated blob-purple p-4 p-md-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                    <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="position-absolute center-both o-90 col-md main-blob thirdBlob blob" data-tor="place.center place.middle" >
              <div data-tor="scroll:@transform=translateY(-20px;0px,{method:continuous}) .. mouseX:@transform=translateX(-30px;0px,{method:continuous}) mouseY:@transform=translateY(-30px;0px,{method:continuous}) scroll:@transform=translateY(-30px;0px,{method:continuous}) .. sensor-parallax(190) sensor-parallax-ease(20)" >
                <div className="tk-blob blob-animated blob-purple p-4 p-md-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                    <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="position-absolute center-both o-90 col-md secondary-blob fourthBlob blob" data-tor="place.center place.middle">
              <div data-tor="scroll:@transform=translateY(-20px;0px,{method:continuous}) .. mouseX:@transform=translateX(-30px;0px,{method:continuous}) mouseY:@transform=translateY(-30px;0px,{method:continuous}) scroll:@transform=translateY(-30px;0px,{method:continuous}) .. sensor-parallax(190) sensor-parallax-ease(20)" >
                <div className="tk-blob blob-animated blob-purple p-4 p-md-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                    <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="position-absolute center-both o-90 col-md main-blob fifthBlob blob" data-tor="place.center place.middle" >
              <div data-tor="scroll:@transform=translateY(-20px;0px,{method:continuous}) .. mouseX:@transform=translateX(-30px;0px,{method:continuous}) mouseY:@transform=translateY(-30px;0px,{method:continuous}) scroll:@transform=translateY(-30px;0px,{method:continuous}) .. sensor-parallax(190) sensor-parallax-ease(20)" >
                <div className="tk-blob blob-animated blob-purple p-4 p-md-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                    <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="position-absolute center-both o-90 col-md secondary-blob sixthBlob blob" data-tor="place.center place.middle" >
              <div data-tor="scroll:@transform=translateY(-20px;0px,{method:continuous}) .. mouseX:@transform=translateX(-30px;0px,{method:continuous}) mouseY:@transform=translateY(-30px;0px,{method:continuous}) scroll:@transform=translateY(-30px;0px,{method:continuous}) .. sensor-parallax(190) sensor-parallax-ease(20)" >
                <div className="tk-blob blob-animated blob-purple p-4 p-md-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                    <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      )
}