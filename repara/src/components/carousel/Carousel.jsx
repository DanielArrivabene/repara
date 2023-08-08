import '../../styles/components/Carousel.scss'

function Carrousel() {
  return (
    <section className="carousel">
      <article className="carousel_container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="../../assets/img/about-img.jpg" alt="Primeiro Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Segundo Slide" alt="Segundo Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Terceiro Slide" alt="Terceiro Slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Próximo</span>
          </a>
        </div>
      </article>
    </section>
  )
}

export default Carrousel