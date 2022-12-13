import Header from './Componets/Header/Header';
import Hero from './Componets/Hero/Hero';
import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/css/main.css'
import './assets/css/blobz.css'
import './assets/css/blobz.min.css'
import './assets/css/blobz-screen-sizes.css'
import About from './Componets/About/About';
import WhyUs from './Componets/WhyUS/WhyUs';
import StatsCounter from './Componets/StatsCounter/StatsCounter';
import Menu from './Componets/Menu/Menu'
import AOS from 'aos';
import {useEffect} from 'react'
import PureCounter from '@srexi/purecounterjs'

function App() {
  const pure = new PureCounter();
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Header/>
    <main className='main'>
      <Hero/>
      <About/>
      <WhyUs/>
      <StatsCounter/>
      {/*<Menu/>*/}
    </main>
    </div>
  );
}

export default App;
