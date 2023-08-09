import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function NavbarTopLink() {

    const links = [
        {label: "E-mail", data: "repara.tec@gmail.com", icon: <GrMail />, href:"#"},
        {label: "Telefone", data:"(11) 99435-4544", icon: <BsFillTelephoneFill />, href:"#"},
    ]

    return (
        <li className="navbar_top__item nav-item">
            {links && links.map((link, index) => (
                <span key={index}>
                    <p>{link.icon} {link.label}:</p>
                    <a className="nav-link" href={link.href}>{link.data}</a>
                </span>
            ))}
        </li>
    )
}

export default NavbarTopLink