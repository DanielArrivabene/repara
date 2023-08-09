import '../../styles/components/Footer.scss'

import FooterAbout from './FooterAbout'
import FooterContacts from './FooterContacts'
import FooterLinks from './FooterLinks'
import FooterMap from './FooterMap'

function Footer() {
  return (
    <footer id="footer">
        <div className="container">
            <section className="footer_section row">
                <FooterAbout />
                <FooterLinks />
                <FooterContacts />
                <FooterMap />           
            </section>
              <p className="footer_info">&copy;2023 
                <a href="#"> Daniel G. Arrivabene</a>
              </p>   
        </div>
    </footer>
  )
}

export default Footer