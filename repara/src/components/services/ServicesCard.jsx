import { GiSmartphone, GiScreenImpact, GiBatteryPlus } from "react-icons/gi"
import { BiChip } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { PiArrowsLeftRightBold } from "react-icons/pi"

function ServicesCard() {

    const services = [
        {title: 'Reparo de celulares android e iphone', description: 'Temos técnicos especializados em atender todos os modelos de celulares.', icon: <GiSmartphone />},
        {title: 'Troca de tela', description: 'Se sua tela quebrou, não se preocupe. Podemos fazer o reparo.', icon: <GiScreenImpact />},
        {title: 'Troca de bateria', description: 'Sua bateria está acabando rápido? Então esta na hora de trocar. Traga até nós e tenha seu celular como novo.', icon: <GiBatteryPlus />},
        {title: 'Recuperação de placa', description: 'Alguma placa do seu celular queimou? Nossos profissionais são capacitados para realizar a manipulação do mesmo.', icon: <BiChip />},
        {title: 'Melhoria de desempenho', description: 'Seu celular está lento? Vamos fazer uma análise completa e melhorar o desempenho.', icon: <GoRocket />},
        {title: 'Migração de dados entre aparelhos', description: 'Está com um aparelho novo e deseja transferir todos os arquivos do antigo com segurança? Deixa com a gente!', icon: <PiArrowsLeftRightBold />},
    ]

  return (
    <div className="services_container row">
        {services && services.map((service, index) => (
            <article key={index} className="service_card col-md-5">
                <div className="card">
                    <div className="service_icon">
                        {service.icon}
                    </div>
                    <h3>{service.title.toUpperCase()}</h3>
                    <p>{service.description}</p>
                </div>
            </article>
        ))}
    </div>
  )
}

export default ServicesCard