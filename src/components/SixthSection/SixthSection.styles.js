import { styled } from 'styled-components'

export const SixthSectionContainer = styled.section`
    min-height: 346px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SixthSectionContent = styled.div`
    display: flex;
    align-items: center;
    gap: 33px;
    p {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 40px;
        line-height: 45px;
        align-items: center;
        color: #FB8958;
        max-width: 882px;
        text-align: center;
    }
    @media (max-width: 800px) {
        p {
            font-size: 30px;
        }
    }
    @media (max-width: 580px) {
        p {
            font-size: 25px;
            text-align: justify;
        }
    }
    @media (max-width: 500px) {
        p {
            font-size: 20px;
        }
    }
`