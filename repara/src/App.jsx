import './App.scss'

import Navbar from './components/header/Navbar'
import Carousel from './components/carousel/Carousel'
import Services from './components/services/Services'
import About from './components/about/About'
import Differentials from './components/differentials/Differentials'
import Depoiments from './components/depoiments/Depoiments'

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
      </main>
    </>
  )
}

export default App
