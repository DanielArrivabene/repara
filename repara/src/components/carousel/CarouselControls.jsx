function CarouselControls() {
  return (
    <>
        <div id="indicadores" className="carousel-indicators">
            <button type="button" data-bs-target="#banner" data-bs-slide-to="0" className="active rounded"
            ></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
        </div>

        <button className="carousel-control-prev" data-bs-target="#banner" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" data-bs-target="#banner" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>
      </>
  )
}

export default CarouselControls