function FooterLinks() {

    const links = [
        {name: 'Home', destiny: '#home'},
        {name: 'Serviços', destiny: '#services'},
        {name: 'Sobre nós', destiny: '#about'},
        {name: 'Diferenciais', destiny: '#differentials'},
        {name: 'Depoimentos', destiny: '#depoiments_container'},
        {name: 'Contato', destiny: '#contact_form'},
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