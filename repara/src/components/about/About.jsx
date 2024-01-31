import '../../styles/components/About.scss'

import AboutImg from '../../assets/img/about-img.jpg'

function About() {
  return (
    <section id="about" className="container">
        <article className="row gap-1">
            <div className="col-md-6 desctipton">
                <h2>Sobre Nós</h2>
                <p>Somos uma empresa especializada no reparo de aparelhos móveis, periféricos e computadores. Estamos há mais de 8 anos no mercado contanto com uma equipe de técnicos especialistas em otimização e reparo, venha até nós ou entre em contato para fazer um orçamento.</p>
                <a href="#contact_form">Fale conosco</a>
            </div>
            <div className="col-md-5 image">
                <img src={AboutImg} alt="sobre nós" />
            </div>
        </article>
    </section>
  )
}

export default About