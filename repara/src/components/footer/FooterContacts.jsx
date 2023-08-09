import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiClock } from "react-icons/hi";

function FooterContacts() {

    const contacts = [
        {name: 'Localização', icon: <ImLocation2 />},
        {name: '(11) 99435-4544', icon: <BsFillTelephoneFill />},
        {name: 'repara.tec@gmail.com', icon: <GrMail />},
        {name: 'Seg-Sab: 09.00 - 18.00', icon: <HiClock />},
        {name: 'Domingo: 9.00 - 12.00', icon: <HiClock />},
    ]

  return (
    <article className="col-md-6 col-lg-3 mx-auto footer_contacts">
        <h3>Contatos</h3> 
        {contacts && contacts.map((item, index) => (
            <p key={index}>{item.icon} {item.name}</p>
        ))}
    </article>
  )
}

export default FooterContacts