import './App.scss'

import Navbar from './components/header/Navbar'
import Carousel from './components/carousel/Carousel'
import Services from './components/services/Services'
import About from './components/about/About'

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
      </main>
    </>
  )
}

export default App
