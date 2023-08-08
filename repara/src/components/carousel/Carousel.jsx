import '../../styles/components/Carousel.scss'
import CarouselControls from './CarouselControls'

function Carrousel() {
  return (
    <section id="banner" className="carousel slide" data-bs-ride="carousel">
      <CarouselControls />

        <article className="carousel_container carousel-inner mt-auto">
          <div className="carousel-item active">
            <div className="carousel-caption">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque eos non reiciendis consequuntur adipisci quae aspernatur. Dolores minima incidunt ullam sed, aperiam dolore tenetur aliquam eveniet temporibus ex iste. Repellendus.
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque eos non reiciendis consequuntur adipisci quae aspernatur. Dolores minima incidunt ullam sed, aperiam dolore tenetur aliquam eveniet temporibus ex iste. Repellendus.
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque eos non reiciendis consequuntur adipisci quae aspernatur. Dolores minima incidunt ullam sed, aperiam dolore tenetur aliquam eveniet temporibus ex iste. Repellendus.
            </div>
          </div>
        </article>
  </section>
  )
}

export default Carrousel