function NavbarBottom() {

    const links = [
        {name: 'Home', destiny: '#home'},
        {name: 'Serviços', destiny: '#services'},
        {name: 'Sobre nós', destiny: '#about'},
        {name: 'Diferenciais', destiny: '#differentials'},
        {name: 'Depoimentos', destiny: '#depoiments_container'},
        {name: 'Contato', destiny: '#contact_form'},
    ]

  return (
    <div className="navbar_bottom navbar navbar-expand-sm p-3 px-4">
        <ul className="navbar-nav">
            {links && links.map((link) => (
                <li key={link.name} className="navbar_bottom__item nav-item">
                    <a className="nav-link" href={link.destiny}>{link.name}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavbarBottom