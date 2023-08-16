import { BsHeartFill } from 'react-icons/bs'

import  '../../styles/components/Depoiments.scss'

function Depoiments() {

    const depoiments = [
        {name: 'Ana', text: 'A bateria do meu celular estava vicada. Eu levei na Repara e eles trocaram a bateria do meu celular na hora. Fiquei muito satisfeita com o resultado!'},
        {name: 'Miguel', text: 'Meu celular caiu e a tela trincou, os tecnicos da Repara foram muito atenciosos comigo e trocaram a tela no mesmo dia!'},
        {name: 'Silvia', text: 'Um vírus invadiu meu celular e eu não sabia mais o que fazer, leivei até a Repara, eles removeram o vírus e eu não perdi nenhum dado. Super recomendo!'},
    ]

  return (
    <section id="depoiments_container">
        <h2>Depoimentos de Clientes</h2>

        <article className="container p-4">
            {depoiments && depoiments.map((item, index) => (
                <div key={index} className="depoiment">
                    <h3>{item.name} <span><BsHeartFill /></span></h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </article>
    </section>
  )
}

export default Depoiments