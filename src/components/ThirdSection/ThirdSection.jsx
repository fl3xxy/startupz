import { useState } from "react";
//STYLES
import { ThirdSectionContainer, ThirdSectionContent } from "./ThirdSection.styles"

import rlike from '../../assets/rlike.svg'
import llike from '../../assets/llike.svg'
import third from '../../assets/thirdsection.svg'

export const ThirdSection = () => {
  const [isXVisible, setXVisibility] = useState(true);
  const [isThirdImageVisible, setThirdImageVisibility] = useState(true);

  const hideXAndThirdImage = () => {
    setXVisibility(false);
    setThirdImageVisibility(false);
  };
  return (
    <ThirdSectionContainer>
        <ThirdSectionContent>
            <div className="third-content-box">
                <img src={rlike} className="likes"/>
                <p>We love solving problems!</p>
                <img src={llike} className="likes"/>
            </div>
            {isThirdImageVisible && <img src={third} className="third"/>}
            {isXVisible && <p className="x" onClick={hideXAndThirdImage}>X</p>}
        </ThirdSectionContent>
    </ThirdSectionContainer>
  )
}
