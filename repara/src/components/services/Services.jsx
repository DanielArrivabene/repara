import '../../styles/components/Services.scss'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    <section id="services" className="container">
        <h2 className="title">Nossos <span className="text_secondary">Serviços</span></h2>
        <ServicesCard />
    </section>
  )
}

export default Services