import './App.scss'

import Navbar from './components/header/Navbar'
import Carousel from './components/carousel/Carousel'
import Services from './components/services/Services'
import About from './components/about/About'
import Differentials from './components/differentials/Differentials'
import Depoiments from './components/depoiments/Depoiments'
import ContactForm from './components/contact-form/ContactForm'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <div className="full_screen">
        <Navbar />
        <Carousel />
      </div>
      <main>
        <Services />
        <About />
        <Differentials />
        <Depoiments />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
