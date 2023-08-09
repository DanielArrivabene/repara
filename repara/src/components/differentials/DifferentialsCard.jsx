import { BsClock, BsPatchCheck, BsArrowDownCircle } from "react-icons/bs";

import '../../styles/components/Differentials.scss'

function DifferentialsCard() {

    const differentials = [
        {name: 'Orçamento sem custo', icon: <BsArrowDownCircle />},
        {name: 'Reparo realizado em até 24h', icon: <BsClock />},
        {name: 'Peças originais', icon: <BsPatchCheck />},
    ]

  return (
    <article className="row">
        {differentials.map((item, index) => (
            <div key={index} className="col-md-4">
                <div className="box">
                    {item.icon}
                    <h3>{item.name.toUpperCase()}</h3>
                </div>
            </div>
        ))}
    </article>
  )
}

export default DifferentialsCard