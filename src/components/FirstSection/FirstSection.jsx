import logo from '../../assets/startupzlogo.svg'
import art from '../../assets/artwork.svg'
//STYLES
import { FirstViewContent, FirstViewHeader, FirstViewSection } from './FirstSection.styles'

export const FirstSection = () => {
  return (
        <FirstViewSection>
              <FirstViewHeader>
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="right">
                    <div className="links">
                        <a href='#startups'>Startups</a>
                        <a href='#contact'>Contact</a>
                    </div>
                    <div className="btn">
                        <a href='#work'>Work with us!</a>
                    </div>
                </div>
              </FirstViewHeader>
              <FirstViewContent>
                <div className="first-view-content-F">
                    <p>We Create <br />Startups.</p>
                </div>
                <div className="first-view-content-S">
                    <p>We are startup studio that develops and launches new companies.</p>
                </div>
                <div className="first-view-content-T">
                    <a href='#works'>See our works</a>
                </div>
                <img src={art} className="art" />
              </FirstViewContent>
        </FirstViewSection>
  )
}
