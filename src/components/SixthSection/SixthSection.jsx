//STYLES
import { SixthSectionContainer, SixthSectionContent } from "./SixthSection.styles"

import rlike from '../../assets/rlike.svg'
import llike from '../../assets/llike.svg'

export const SixthSection = () => {
  return (
    <SixthSectionContainer>
        <SixthSectionContent>
            <img src={rlike} />
            <p>Startups create a world that actually is better.
            Any problem that can be solved, will be solved by a startup,
            and that is a huge opportunity.</p>
            <img src={llike} />

        </SixthSectionContent>
    </SixthSectionContainer>
  )
}
