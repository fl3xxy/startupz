//STYLES
import { ThirdSectionContainer, ThirdSectionContent } from "./ThirdSection.styles"

import rlike from '../../assets/rlike.svg'
import llike from '../../assets/llike.svg'
import third from '../../assets/thirdsection.svg'

export const ThirdSection = () => {
  return (
    <ThirdSectionContainer>
        <ThirdSectionContent>
            <div className="third-content-box">
                <img src={rlike} className="likes"/>
                <p>We love solving problems!</p>
                <img src={llike} className="likes"/>
            </div>
            <img src={third} className="third"/>
            <p className="x">X</p>
        </ThirdSectionContent>
    </ThirdSectionContainer>
  )
}
