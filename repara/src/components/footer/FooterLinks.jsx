function FooterLinks() {

    const links = [
        {name: 'Home', destiny: '#'},
        {name: 'Serviços', destiny: '#'},
        {name: 'Sobre nós', destiny: '#'},
        {name: 'Diferenciais', destiny: '#'},
        {name: 'Home', destiny: '#'},
        {name: 'Contato', destiny: '#'},
    ]

  return (
    <article className="col-md-6 col-lg-2 footer_links">
        <h3>Links</h3>
        {links && links.map((link, index) => (
            <a key={index} href={link.destiny}>{link.name}</a>
        ))}
    </article>
  )
}

export default FooterLinks