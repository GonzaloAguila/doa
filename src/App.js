import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import RequestForm from './components/Form/RequestForm'
import Slideshow from './components/Slideshow/Slideshow'
import Map from './components/Map/Map'
import styles from './index.css'

function App() {
  return (
    <>
      <Header />
      <Services />
      <Slideshow />
      <Map />
      <About />
      <RequestForm />
      <Footer /> 
    </>
  )
}

export default App;
