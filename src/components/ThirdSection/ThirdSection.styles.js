import { styled } from 'styled-components'


export const ThirdSectionContainer = styled.section`
    height: 346px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ThirdSectionContent = styled.div`
    display: flex;
    align-items: center;
    .third-content-box {
        display: flex;
        align-items: center;
        gap: 34px;
        p {
           font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 40px;
            line-height: 50px;
            align-items: center;
            color: #FB8958;
        }
        img.likes {
            width: 59px;
            height: 66px;
        }
    }
    .third {
        position: absolute;
        left: 1200px;
        bottom: -950px;
    }

    .x {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        font-size: 25px;
        line-height: 14px;
        color: #939393;
        position: absolute;
        bottom: -780px;
        left: 1530px;
    }
    @media (max-width: 1580px) {
        .third {
            display: none;
        }
        .x {
            display: none;
        }
    }
    @media (max-width: 800px) {
        .third-content-box p {
            font-size: 30px;
        }
    }
    @media (max-width: 580px) {
        .third-content-box {
            gap: 20px;
            p {
                font-size: 25px;
            }
        }
    }
    @media (max-width: 500px) {
        .third-content-box {
            gap: 15px;
            p {
                font-size: 20px;
            }
        }
    }
    @media (max-width: 415px) {
        .third-content-box {
            gap: 10px;
            p {
                font-size: 18px;
            }
        }
    }
`