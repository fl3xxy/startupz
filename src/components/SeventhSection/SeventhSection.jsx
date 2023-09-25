//STYLES
import { SeventhSectionContainer, SeventhSectionContent } from "./SeventhSection.styles"

import left from '../../assets/leftseven.svg'
import right from '../../assets/rightseven.svg'


export const SeventhSection = () => {
  return (
    <SeventhSectionContainer>
        <img src={left} className="left" />
        <SeventhSectionContent>
            <div className="title">We are hiring!</div>
            <div className="description">We're always looking for talented
            people to join and help build our startups.
            Check out our current openings</div>
            <button>See current openings</button>
        </SeventhSectionContent>
        <img src={right} className="right" />
    </SeventhSectionContainer>
  )
}
