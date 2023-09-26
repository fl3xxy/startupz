import { styled } from 'styled-components'

export const EighthSectionContianer = styled.section`
    min-height: 993px;
    background-color: #FFC351;
    padding: 0 120px;
    display: flex;
    align-items: center;
    @media (max-width: 1480px) {
        justify-content: center;
    }
`

export const EightSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
    .title p{
        max-width: fit-content;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 60px;
        line-height: 55px;
        color: #FFFFFF;
    }
    .description p {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        color: #FFFFFF;
    }
    .contact-box {
        display: flex;
        flex-direction: column;
        width: 512px;
        height: 601px;
        border-radius: 10px;
        background-color: #F3F3F3;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 34px;
        .input {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }
        .input .name-email input{
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 18px;
            color: #939393;
            width: 429px;
            height: 54px;
            border-radius: 10px;
            border: none;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);

        }
        .input .message input {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 18px;
            color: #939393;
            width: 429px;
            height: 270px;
            border-radius: 10px;
            border: none;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
        }
        button {
            width: 243px;
            height: 45px;
            border-radius: 32.5px;
            border: 1px solid #3D4F5C;
            background-color: #3D4F5C;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 18px;
            line-height: 18px;
            color: #FBFBFA;
            transition: all 2s;
            cursor: pointer;
        }
        button:hover {
            color: #3D4F5C;
            background-color: #FBFBFA;
        }
    }

    img {
        position: absolute;
        bottom: -5040px;
        right: 120px;
    }
    @media (max-width: 1480px) {
        align-items: center;
        img {
            display: none;
        }
        .title {
            text-align: center;
            p {
                line-height: 65px;
            }
        }
    }
    @media (max-width: 980px) {
        .title p{
            font-size: 50px;
        }
    }
    @media (max-width: 800px) {
        .title p{
            font-size: 40px;
        }
        .description p {
            font-size: 22px;
        }
        .contact-box .input .name-email input {
            font-size: 16px;
        }
        .contact-box .input .message input {
            font-size: 16px;
        }
        .contact-box button {
            width: 220px;
            font-size: 16px;
        }
    }
    @media (max-width: 600px) {
        .title p{
            font-size: 30px;
        }
        .description p {
            font-size: 20px;
        }
        .contact-box .input .name-email input {
            font-size: 15px;
        }
        .contact-box .input .message input {
            font-size: 15px;
        }
        .contact-box button {
            width: 220px;
            font-size: 15px;
        }
    }
    @media (max-width: 550px) {
        .contact-box {
            width: 480px;
        }
        .contact-box .input .name-email input{
            width: 380px;
        }
        .contact-box .input .message input{
            width: 380px;
        }
    }
    @media (max-width: 500px) {
        .contact-box {
            width: 430px;
        }
        .contact-box .input .name-email input{
            width: 350px;
        }
        .contact-box .input .message input{
            width: 350px;
        }
    }
    @media (max-width: 460px) {
        .title p{
            font-size: 28px;
        }
        .description p {
            font-size: 18px;
        }
        .contact-box .input .name-email input {
            font-size: 14px;
        }
        .contact-box .input .message input {
            font-size: 14px;
        }
        .contact-box button {
            width: 190px;
            font-size: 14px;
        }
        .contact-box {
            width: 390px;
        }
        .contact-box .input .name-email input{
            width: 300px;
        }
        .contact-box .input .message input{
            width: 300px;
        }
    }
    @media (max-width: 420px) {
        .title p{
            font-size: 24px;
        }
        .description p {
            font-size: 16px;
        }
        .contact-box .input .name-email input {
            font-size: 13px;
        }
        .contact-box .input .message input {
            font-size: 13px;
        }
        .contact-box button {
            width: 180px;
            font-size: 13px;
        }
        .contact-box {
            width: 370px;
        }
        .contact-box .input .name-email input{
            width: 300px;
        }
        .contact-box .input .message input{
            width: 300px;
        }
    }
`