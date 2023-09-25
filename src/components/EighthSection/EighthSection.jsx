//STYLES
import { EightSectionContent, EighthSectionContianer } from "./EighthSection.styles"

import background from '../../assets/background.svg'

export const EighthSection = () => {
  return (
    <EighthSectionContianer id="contact">
        <EightSectionContent>
            <div className="title">
                <p>Are you ready<br /> to board this rocket ship?</p>
            </div>
            <div className="description">
                <p>Share your excitement with us.</p>
            </div>
            <div className="contact-box">
                <div className="input">
                    <div className="name-email">
                        <label htmlFor="name"></label>
                        <input type="text" placeholder="Name*" id="name"/>
                    </div>
                    <div className="name-email">
                        <label htmlFor="email"></label>
                        <input type="text" placeholder="Email*" id="email"/>
                    </div>
                    <div className="message">
                        <label htmlFor="description"></label>
                        <input type="text" placeholder="Message*" id="description"/>
                    </div>
                </div>
                <button>Shoot us a message</button>
            </div>
            <img src={background} />
        </EightSectionContent>
    </EighthSectionContianer>
  )
}
