import { BsHeartFill } from 'react-icons/bs'

import  '../../styles/components/Depoiments.scss'

function Depoiments() {

    const depoiments = [
        {name: 'Ana', text: 'A bateria do meu celular estava vicada. Eu levei na Repara e eles trocaram a bateria do meu celular na hora. Fiquei muito satisfeita com o resultado!'},
        {name: 'Ana', text: 'A bateria do meu celular estava vicada. Eu levei na Repara e eles trocaram a bateria do meu celular na hora. Fiquei muito satisfeita com o resultado!'},
        {name: 'Ana', text: 'A bateria do meu celular estava vicada. Eu levei na Repara e eles trocaram a bateria do meu celular na hora. Fiquei muito satisfeita com o resultado!'},
    ]

  return (
    <section id="depoiments_container">
        <h2>Depoimentos de Clientes</h2>

        <article className="container p-4">
            {depoiments.map((item, index) => (
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