import { styled } from "styled-components"

export const SeventhSectionContainer = styled.section`
    height: 550px;
    background-color: #FBFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    .left {
        position: absolute;
        left: 0;
    }
    .right {
        position: absolute;
        right: 0;
    }

    @media (max-width: 1000px) {
        .left { 
            width: 228px;
        }   
        .right {
            width: 201px;
        }
    }
    @media (max-width: 750px) {
        .left { 
            width: 148px;
        }   
        .right {
            width: 121px;
        }
    }
    @media (max-width: 550px) {
        .left { 
            width: 118px;
        }   
        .right {
            width: 95px;
        }
    }
    @media (max-width: 500px) {
        .left { 
            width: 94px;
        }   
        .right {
            width: 80px;
        }
    }
`


export const SeventhSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    .title {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 50px;
        line-height: 50px;
        color: #3D4F5C;
    }
    .description {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: #FB8958;
        max-width: 443px;
        text-align: center;
    }
    button {
        width: 243px;
        height: 45px;
        border-radius: 32.5px;
        border: none;
        background-color: #46B8C8;
        color: #FFFFFF;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        cursor: pointer;
        border: 1px solid #46B8C8;
        transition: all 1s;
    }
    button:hover {
        background-color: white;
        color: #46B8C8;
    }
    @media (max-width: 800px) {
        .title {
            font-size: 40px;
        }
        .description {
            max-width: 340px;
            font-size: 20px;
        }
        button {
            width: 220px;
            font-size: 17px;
        }
    }
    @media (max-width: 600px) {
        .title {
            font-size: 35px;
        }
        .description {
            max-width: 310px;
            font-size: 17px;
        }
        button {
            width: 200px;
            font-size: 15px;
        }
    }
    @media (max-width: 500px) {
        .title {
            font-size: 35px;
        }
        .description {
            max-width: 260px;
            font-size: 15px;
        }
        button {
            width: 180px;
            font-size: 13px;
        }
    }

`