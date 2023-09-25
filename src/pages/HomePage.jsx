//LAYOUTS
import { FirstSection } from '../components/FirstSection/FirstSection'
import { SecondSection } from '../components/SecondSection/SecondSection'
import { ThirdSection } from '../components/ThirdSection/ThirdSection'
import { FourthSection } from '../components/FourthSection/FourthSection'
import { FifthSection } from '../components/FifthSection/FifthSection'
import { SixthSection } from '../components/SixthSection/SixthSection'
import { SeventhSection } from '../components/SeventhSection/SeventhSection'
import { EighthSection } from '../components/EighthSection/EighthSection'
import { Footer } from '../components/Footer/Footer'

export const HomePage = () => {
  return (
    <>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <Footer />
    </>
  )
}
