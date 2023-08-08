function CarouselControls() {
  return (
    <>
        <div id="indicadores" className="carousel-indicators">
            <button type="button" data-bs-target="#banner" data-bs-slide-to="0" className="active rounded"
            ></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
        </div>

        <button className="carousel_control">
            <span className="carousel_icon_container" data-bs-target="#banner" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </span>
            <span className="carousel_icon_container" data-bs-target="#banner" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </span>
        </button>
      </>
  )
}

export default CarouselControls