import '../styles/components/Navbar.scss'

function Navbar() {
  return (
    <header>
        <nav className="navbar_top navbar navbar-expand-lg p-3">
            <div className="container-fluid">
                <a id="navbar_top__logo" className="navbar-brand" href="#">Repara!</a>
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <p>Telefone:</p>
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">link</a>
                </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar