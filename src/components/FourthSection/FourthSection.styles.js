import { styled } from 'styled-components'


export const FourthSectionContainer = styled.section`
    min-height: 734px;
    width: 100%;
    height: fit-content;
    background-color: #FBFAFA;
    display: flex;
    align-items: center;

`

export const FourthSectionContent = styled.div`
    padding: 0 120px;
    display: flex;
    flex-direction: column;
    gap: 117px;
    pointer-events: none;

    .fourth-section-content-F {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 50px;
            line-height: 50px;
            color: #3D4F5C;
        }
    }
    .fourth-section-content-S {
        display: flex;
        gap: 74px;
        hr {
                border: none;
                height: 1px !important;
                width: 50px;
                background-color: #3D4F5C;
                margin: 0;
                margin-top: 30px;
                margin-bottom: 24px;
            }
        .f-s-c-info {
            p.number {
                height: 30px;
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-weight: 700;
                font-size: 30px;
                line-height: 30px;
                color: #FB8958;
            }

            .description {
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-weight: 400;
                font-size: 30px;
                line-height: 38px;
                color: #3D4F5C;
                text-align: left;
                max-width: 641px;
            }
        }
        }
        @media (max-width: 1300px) {
            padding: 0 90px;
            .fourth-section-content-F p {
                font-size: 45px;
            }
            .fourth-section-content-S {
                .f-s-c-info p.number {
                    font-size: 28px;
                }
                hr {
                    width: 48px;
                }
                .f-s-c-info .description  {
                    font-size: 28px;
                }
            }
        }
        @media (max-width: 1200px) {
            padding: 0 75px;
        }

        @media (max-width: 1100px){
            padding: 0 30px;
        }
        
        @media (max-width: 800px) {
            .fourth-section-content-F p {
                font-size: 40px;
            }
            .fourth-section-content-S {
                .f-s-c-info p.number {
                    font-size: 26px;
                }
                hr {
                    width: 48px;
                }
                .f-s-c-info .description {
                    font-size: 25px;
                    text-align: justify;
                }
            }
        }
        @media (max-width: 600px) {
            .fourth-section-content-F p {
                font-size: 35px;
            }
            .fourth-section-content-S {
                flex-direction: column;
                justify-content: center;
                .f-s-c-info p.number {
                    font-size: 23px;
                }
                hr {
                    width: 48px;
                }
                .f-s-c-info .description {
                    font-size: 20px;
                }
            }
        }
        @media (max-width: 550px) {
            .fourth-section-content-F p {
                font-size: 28px;
            }
            .fourth-section-content-S {
                .f-s-c-info p.number {
                    font-size: 18px;
                }
                hr {
                    width: 48px;
                }
                .f-s-c-info .description {
                    font-size: 17.5px;
                }
            }
        }
`