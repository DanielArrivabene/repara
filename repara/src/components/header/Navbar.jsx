import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import '../../styles/components/Navbar.scss'

import NavbarTopLink from './NavbarTopLink'
import NavbarBottom from './NavbarBottom'

function Navbar() {
  return (
    <header>
        <nav>
            <div className="navbar_top navbar navbar-expand-lg p-2 px-4">
                <a id="navbar_top__logo" className="navbar-brand" href="#">Repara!</a>
                <ul className="navbar-nav">
                    <NavbarTopLink label="Telefone" data="(11) 99435-4544" icon={<BsFillTelephoneFill />} href="#" />
                    <NavbarTopLink label="E-mail" data="repara.tec@gmail.com" icon={<GrMail />}  href="#" />
                </ul>
            </div>
            <NavbarBottom />
        </nav>
    </header>
  )
}

export default Navbar