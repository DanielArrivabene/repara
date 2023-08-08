function NavbarBottom() {

    const links = [
        {text: 'Home', destiny: '#'},
        {text: 'Serviços', destiny: '#'},
        {text: 'Diferenciais', destiny: '#'},
        {text: 'Sobre', destiny: '#'},
        {text: 'Contato', destiny: '#'},
    ]

  return (
    <div className="navbar_bottom navbar navbar-expand-lg p-3 px-4">
        <ul className="navbar-nav">
            {links && links.map((item) => (
                <li key={item.text} className="navbar_bottom__item nav-item">
                    <a className="nav-link" href={item.destiny}>{item.text}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavbarBottom