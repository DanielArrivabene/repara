import '../../styles/components/Navbar.scss'

import NavbarTopLink from './NavbarTopLink'
import NavbarBottom from './NavbarBottom'
import Menu from "./Menu";

function Navbar() {
  return (
    <header id="home">
        <nav>
          <div className="navbar_top navbar navbar-expand-lg p-2 px-4">
            <a id="navbar_top__logo" className="navbar-brand" href="#">Repara!</a>
            <ul className="navbar-nav">
                <NavbarTopLink />
            </ul>
            <Menu />
          </div>
          <NavbarBottom />
        </nav>
    </header>
  )
}

export default Navbar