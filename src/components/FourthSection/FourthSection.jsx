//STYLES
import { FourthSectionContainer, FourthSectionContent } from "./FourthSection.styles"

import light from '../../assets/light.svg'
export const FourthSection = () => {
  return (
    <FourthSectionContainer>
        <FourthSectionContent>
            <div className="fourth-section-content-F">
                <p>Our core values</p>
                <img src={light} />
            </div>
            <div className="fourth-section-content-S">
                    <div className="f-s-c-info">
                        <p className='number'>01. Innovation</p>
                        <hr />
                        <p className='description'>Startupz operates where entrepreneurship 
                        and technology intersect. We design solutions and turn them into 
                        businesses models.</p>
                    </div>
                    <div className="f-s-c-info">
                        <p className='number'>02. People</p>
                        <hr />
                        <p className='description'>Talent is what enable us to create great companies.</p>
                    </div>
                </div>
        </FourthSectionContent>
    </FourthSectionContainer>
  )
}
