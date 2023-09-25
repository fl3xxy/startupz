import questionmark from '../../assets/questionmark.svg'
//STYLES
import { SecondViewContent, SecondViewSection } from "./SecondSection.styles"

export const SecondSection = () => {
  return (
    <SecondViewSection id='startups'>
            <SecondViewContent>
                <div className="second-view-content-F">
                    <p>Who we are</p>
                    <img src={questionmark} className="questionmark" />
                </div>
                <div className="second-view-content-S">
                    <p>We create products that have innovation and technology at their core.<br />
                    We value working with talented people that understand the possibilities of today.</p>
                </div>
                <div className="second-view-content-T">
                    <div className="s-v-c-info">
                        <p className='number'>01</p>
                        <hr />
                        <p className='description'>We develop innovative products, systems and services</p>
                    </div>
                    <div className="s-v-c-info">
                        <p className='number'>02</p>
                        <hr />
                        <p className='description'>Next we build teams to scale them into companies</p>
                    </div>
                    <div className="s-v-c-info">
                        <p className='number'>03</p>
                        <hr />
                        <p className='description'>Each startup solving one problem at a time</p>
                    </div>
                </div>
            </SecondViewContent>
        </SecondViewSection>
  )
}
