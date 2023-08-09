function MenuLinks() {

    const links = [
        {text: 'Home', destiny: '#'},
        {text: 'Serviços', destiny: '#'},
        {text: 'Diferenciais', destiny: '#'},
        {text: 'Sobre', destiny: '#'},
        {text: 'Contato', destiny: '#'},
    ]

  return (
    <div className="navbar_menu navbar">
        <ul className="navbar-nav">
            {links && links.map((item) => (
                <li key={item.text} className="navbar_menu__item nav-item">
                    <a className="nav-link" href={item.destiny}>{item.text}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MenuLinks