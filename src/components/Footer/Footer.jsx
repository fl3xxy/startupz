//STYLES
import { FooterContainer, FooterContent } from "./Footer.styles"

import logo from '../../assets/startupzlogo.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'

export const Footer = () => {

  return (
    <FooterContainer>
        <FooterContent>
            <div className="first">
                <img src={logo}  />
                <p>&copy; 2020 Startupz. <br />All rights reserved. </p>
            </div>
            <div className="second">
                <p className="title">Companies</p>
                <div className="links">
                    <p>Tolq</p>
                    <p>LegalSite</p>
                    <p>Codekeeper</p>
                    <p>Feedback Labs</p>
                </div>
            </div>
            <div className="third">
                <p className="title">Contact</p>
                <p className="decription">
                World Trade Center - The Hague <br />
                Prinses Margrietplantsoen 33 <br />
                2595 AM The Hague <br />
                The Netherlands
                </p>
                <p className="send">Send us and email</p>
            </div>
            <div className="fourth">
                <p className="title">Follow us</p>
                <div className="icons">
                    <img src={twitter} />
                    <img src={linkedin} />
                    <img src={instagram} />
                </div>
            </div>
        </FooterContent>
    </FooterContainer>
  )
}
