import { TiSocialLinkedinCircular,
    TiSocialInstagramCircular,
    TiSocialTwitterCircular,
    TiSocialFacebookCircular
 } from 'react-icons/ti'

function FooterAbout() {

    const socialLinks = [
        {name: 'facebook', icon: <TiSocialFacebookCircular />},
        {name: 'twitter', icon: <TiSocialTwitterCircular />},
        {name: 'linkedin', icon: <TiSocialLinkedinCircular />},
        {name: 'instagram', icon: <TiSocialInstagramCircular />},
    ]

  return (
    <article className="col-md-6 col-lg-3 footer_about">
        <h3>Sobre</h3>
        <p>Estamos há mais de 10 anos no mercado com alta satisfação dos nossos clientes.</p>
        <div className="social_container">
            {socialLinks.map((item) => (
                <a key={item.name} href="#">
                    {item.icon}
                </a>
            ))}
        </div>
    </article>
  )
}

export default FooterAbout