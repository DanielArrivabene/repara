import '../../styles/components/About.scss'

import AboutImg from '../../assets/img/about-img.jpg'

function About() {
  return (
    <section id="about" className="container">
        <article className="row">
            <div className="col-md-6 desctipton">
                <h2>Sobre Nós</h2>
                <p>Somos uma empresa especializada no reparo de celulares e parelhos móveis. Estamos há mais de 10 anos no mercado com alta satisfação dos nossos clientes.</p>
            </div>
            <div className="col-md-5 image">
                <img src={AboutImg} alt="sobre nós" />
            </div>
        </article>
    </section>
  )
}

export default About