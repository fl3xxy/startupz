//STYLES
import { FifthSectionBox, FifthSectionContainer, MoreBtn } from "./FifthSection.styles"

import ff from '../../assets/f-f.svg'
import fs from '../../assets/f-s.svg'
import ft from '../../assets/f-t.svg'
import ffo from '../../assets/f-fo.svg'
export const FifthSection = () => {
    const showDemoAlert = () => {
        alert(`It's only demo site :C`)
    }
  return (
    <FifthSectionContainer id="works">
        <FifthSectionBox>
            <p className="fifth-title">Our works</p>
            <div className="fifth-content">
                <div className="fifth-box">
                    <div className="fifth-box-content">
                        <div className="fifth-box-description">
                            <p className="fifth-box-title lightgreen">Tolq</p>
                            <p className="fifth-description">Tolq is the translation solution built for e-commerce. It p                        rovides all pieces of the localization puzzle in one single integrated solution.</p>
                        </div>
                        <img src={ff} className="laptop"/>
                        <MoreBtn onClick={showDemoAlert}>More</MoreBtn>
                    </div>
                    <div className="fifth-box-content">
                        <div className="fifth-box-description">
                            <p className="fifth-box-title lightblue">FeedBack Labs</p>
                            <p className="fifth-description">Feedback Labs turns feedback into actionable insights for your team.</p>
                        </div>
                        <img src={fs} className="tablet"/>
                        <MoreBtn onClick={showDemoAlert}>More</MoreBtn>
                    </div>
                </div>
                <div className="fifth-box">
                    <div className="fifth-box-content">
                        <div className="fifth-box-description">
                            <p className="fifth-box-title aqua">Codekeeper</p>
                            <p className="fifth-description">Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.</p>
                        </div>
                        <img src={ft} className="tablet"/>
                        <MoreBtn onClick={showDemoAlert}>More</MoreBtn>
                    </div>
                    <div className="fifth-box-content">
                        <div className="fifth-box-description">
                            <p className="fifth-box-title purple">LegalSite</p>
                            <p className="fifth-description">Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.</p>
                        </div>
                        <img src={ffo} className="laptop"/>
                        <MoreBtn onClick={showDemoAlert}>More</MoreBtn>
                    </div>
                </div>
            </div>
        </FifthSectionBox>
    </FifthSectionContainer>
  )
}
