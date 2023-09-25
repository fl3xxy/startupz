import { styled } from 'styled-components'

export const SecondViewSection = styled.section`
    min-height: 714px;
    height: fit-content;
    background-color: #FBFAFA;
    display: flex;
    align-items: center;
    @media (max-width: 1420px) {
        padding: 100px 0;
    }
`

export const SecondViewContent = styled.div`
    padding: 0 120px;
    display: flex;
    flex-direction: column;

    .second-view-content-F {
        display: flex;
        justify-content: space-between;
        p {
           font-family: 'Plus Jakarta Sans', sans-serif;
           font-weight: 700;
           font-size: 50px;
           line-height: 50px;
           color: #3D4F5C;
           }
    }
    .second-view-content-S {
        padding-top: 32px;
        p { 
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 24px;
            line-height: 30px;
            color: #FB8958;
            text-align: justify;
        }
    }
    .second-view-content-T {
        padding-top: 79px;
        display: flex;
        gap: 95px;
        flex-wrap: wrap;
        .s-v-c-info {
            p.number {
                width: 30px;
                height: 30px;
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-weight: 700;
                font-size: 30px;
                line-height: 30px;
                color: #FB8958;
            }
            hr {
                border: none;
                height: 1px !important;
                width: 50px;
                background-color: #3D4F5C;
                margin: 0;
                margin-top: 19px;
                margin-bottom: 25px;
            }
            .description {
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-weight: 400;
                font-size: 30px;
                line-height: 38px;
                color: #3D4F5C;
                width: 323px;
                text-align: left;
            }
        }
    }

    @media (max-width: 1300px){
        padding: 0 90px;
        .second-view-content-F {
        p {
           font-size: 45px;
           }
        }
        .second-view-content-S {
            padding-top: 30px;
            p { 
                font-size: 22px;
            }
        }
        .second-view-content-T {
            padding-top: 73px;
            gap: 90px;
            justify-content: center;
            .s-v-c-info {
                p.number {
                    width: 28px;
                    height: 28px;
                    font-size: 28px;
                }
                hr {
                    width: 48px;
                    margin-top: 19px;
                    margin-bottom: 25px;
                }
                .description {
                    font-size: 28px;
                    width: 323px;
                }
            }
        }
    }
    @media (max-width: 1200px){
        padding: 0 75px;
    }
    @media (max-width: 1100px){
        padding: 0 30px;
    }
    @media (max-width: 800px){
        .second-view-content-F p{
            font-size: 40px;
        }
        .second-view-content-S p{
            font-size: 20px;
        }
        .second-view-content-T .s-v-c-info .description {
            font-size: 25px;
            text-align: justify;

        }
    }
    @media (max-width: 550px){
        .second-view-content-F p{
            font-size: 35px;
        }
        .second-view-content-S p{
            font-size: 18px;
        }
        .second-view-content-T .s-v-c-info .description {
            font-size: 22px;
        }
    }
`