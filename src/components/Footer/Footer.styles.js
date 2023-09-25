import { styled } from 'styled-components'


export const FooterContainer = styled.section`
    min-height: 401px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 230px;
    .title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 18px;
            color: #3D4F5C;
            pointer-events: none;
        }
    .first {
        display: flex;
        flex-direction: column;
        gap: 84.57px;
        img {
            width: 178.88px;
            height: 42.9px;
        }
        p {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            color: #939393;
        }
    }
    .second {
        display: flex;
        flex-direction: column;
        gap: 19px;
        .links {
            display: flex;
            flex-direction: column;
            p {
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-weight: 400;
                font-size: 18px;
                line-height: 35px;
                color: #46B8C8;
                cursor: pointer;
            }
        }
    }

    .third {
        display: flex;
        flex-direction: column;
        .decription {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            color: #939393;
            max-width: 328px;
            text-align: left;
            padding-top: 19px;
            pointer-events: none;
        }
        .send {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            color: #46B8C8;
            padding-top: 11px;
            cursor: pointer;
        }
    }
    
    .fourth {
        display: flex;
        flex-direction: column;
        gap: 19px;

        .icons {
            display: flex;
            flex-direction: column;
            gap: 15px;
            max-width: 23px;
            max-height: 23px;
            cursor: pointer;
        }
    }
    @media (max-width: 1365px) {
        padding: 100px 0;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 800px) {
        gap: 80px;
        .first {
            img {
                width: 140px;
            }
            p {
                font-size: 16px;
            }
        }
        .second .links p {
            font-size: 16px;
        }
        .third .send {
            font-size: 16px;
        }
        .third .decription {
            font-size: 16px;
        }
    }
    @media (max-width: 650px) {
        gap: 30px;
        align-items: baseline;
        .first {
            img {
                width: 120px;
            }
            p {
                font-size: 14px;
            }
        }
        .second .links p {
            font-size: 14px;
        }
        .third .send {
            font-size: 14px;
        }
        .third .decription {
            font-size: 14px;
        }
    }
    @media (max-width: 618px) {
        align-items: center;
    }
`