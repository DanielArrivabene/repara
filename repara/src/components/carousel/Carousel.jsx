import '../../styles/components/Carousel.scss';

function Carrousel() {
  return (
    <section id="banner">
      <article className="banner__data_container">
        <div className="banner__data">
          <h2>Reparo de eletrônicos</h2>
          <p>
            A mais de 8 anos no mercado com alta satisfação dos clientes.
            Somos especialistas na manutenção de eletrônicos, desde celulares a PCs.
          </p>
          <a href="#contact_form">Entrar em contato</a>
        </div>
      </article>
    </section>
  );
}

export default Carrousel;
