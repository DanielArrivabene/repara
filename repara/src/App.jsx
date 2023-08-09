import './App.scss'

import Navbar from './components/header/Navbar'
import Carousel from './components/carousel/Carousel'
import Services from './components/services/Services'

function App() {

  return (
    <>
      <div className="full_screen">
        <Navbar />
        <Carousel />
      </div>
      <main>
        <Services />
      </main>
    </>
  )
}

export default App
