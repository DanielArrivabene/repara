import '../../styles/components/Carousel.scss'
import CarouselControls from './CarouselControls'
import CarouselItems from './CarouselItems'

function Carrousel() {
  return (
    <section id="banner" className="carousel slide" data-bs-ride="carousel">
      <CarouselControls />
      <CarouselItems />
  </section>
  )
}

export default Carrousel