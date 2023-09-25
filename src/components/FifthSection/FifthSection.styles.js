import { styled } from 'styled-components'


export const FifthSectionContainer = styled.section`
    min-height: 1527px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FifthSectionBox = styled.div`
    padding: 0 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 55px;
    img {
        padding-top: 25px;
        padding-bottom: 30px;
    }
    img.laptop {
        width: 371px;
        height: 224px;

    }
    img.tablet {
        width: 406px;
        height: 244px;

    }
    .lightgreen {
        color: #A9BC87;
    }
    .lightblue {
        color: #8BB5C9;
    }
    .aqua {
        color: #00A0B6;
    }
    .purple {
        color: #8B60D3;
    }
    .fifth-title {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 50px;
        line-height: 50px;
        color: #3D4F5C;

    }
    .fifth-content {
        display: flex;
        flex-direction: column;
        gap: 25px;

    }
    .fifth-box {
        display: flex;
        gap: 25px;
    }
    .fifth-box-content {
        width: 588px;
        height: 554px;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    }
    .fifth-box-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        .fifth-box-title { 
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 32px;
            line-height: 30px;

        }
        .fifth-description {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #3D4F5C;
            text-align: center;
            max-width: 387px;
            min-height: 60px;

        }
    }
    @media (max-width: 1400px) {
        margin: 100px 0;
        .fifth-box {
            flex-direction: column;
        }
    }
    @media (max-width: 800px) {
        padding: 0;
        .fifth-box-content {
            width: 500px;
            height: 520px;
        }
    }
    @media (max-width: 550px) {
        .fifth-box-description .fifth-box-title {
            font-size: 28px;
        }
        img.laptop {
            width: 300px;
            height: 190px;
        }
        img.tablet {
            width: 310px;
            height: 190px;
        }
        .fifth-box-content {
            width: 100%;
            height: 450px;
        }
}
`

export const MoreBtn = styled.button`
    width: 107px;
    height: 45px;
    border-radius: 32.5px;
    border: 1px solid #46B8C8;
    background-color: white;
    color: #46B8C8;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    transition: all 2s;
    cursor: pointer;
    &:hover {
        background-color: #46B8C8;
        color: white;
    }
`