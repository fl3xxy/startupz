import { useRef, useState, useEffect } from "react";
import logo from '../../assets/startupzlogo.svg'
import art from '../../assets/artwork.svg'
//STYLES
import { FirstViewContent, FirstViewHeader, FirstViewSection } from './FirstSection.styles'
import { FaBars } from "react-icons/fa";
export const FirstSection = () => {
    const navRef = useRef();
	const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);

	const showNavbar = () => {
		navRef.current?.classList.toggle('active');
		setResponsiveNavOpen((prevState) => !prevState);
	};
    const closeNavbar = () => {
        setResponsiveNavOpen(false);
        document.body.style.overflow = "unset";
      };
	useEffect(() => {
			if (isResponsiveNavOpen) {
					document.body.style.overflow = "hidden";
			} else {
					document.body.style.overflow = "unset";
			}
	}, [isResponsiveNavOpen]);


  return (
        <FirstViewSection>
            <FirstViewHeader>
                <img src={logo} />
                <div className={`right ${isResponsiveNavOpen ? 'active' : ''}`} ref={navRef}>
                    <a href="#startups" className='headerLink' onClick={closeNavbar}>Startups</a>
                    <a href="#contact" className='headerLink' onClick={closeNavbar}>Contact</a>
                    <a href="#hiring" className='workBtn' onClick={closeNavbar}>Work with us!</a>
                </div>
                <i onClick={showNavbar}><FaBars /></i>
            </FirstViewHeader>
            <FirstViewContent>
                <div className="title">We Create Startups.</div>
                <div className="description">We are startup studio that develops and launches new companies.</div>
                <div className="btn">
                    <a href="#works">See our works</a>
                </div>
            </FirstViewContent>
            <img src={art} className="art" />
        </FirstViewSection>
  )
}
