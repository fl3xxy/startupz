import { styled } from 'styled-components'
import { css } from "styled-components";

export const FirstViewSection = styled.section`
    height: 754px;
    img.art {
        position: absolute;
        right: 0;
        top: 247px;
    }
    @media (max-width: 1350px) {
        img.art {
            width: 550px;
            top: 358px;
        }
    }
    @media (max-width: 1220px) {
        img.art {
            width: 450px;
            top: 430px;
        }
    }
    @media (max-width: 1050px) {
        img.art {
            width: 350px;
            top: 502px;
        }
    }
    @media (max-width: 420px) {
        img.art {
            width: 300px;
            top: 538px;
        }
    }
`
export const RespoNav = css`
    transform: translateX(-200vh);
`
export const FirstViewHeader = styled.div`
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px 0 120.36px;
    i {
            display: none;
            cursor: pointer;
            z-index: 30;
        }
    .right {
        display: flex;
        align-items: center;
        .headerLink {
            text-decoration: none;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 18px;
            color: #3D4F5C;
            margin-right: 40px;
        }
        .workBtn {
            text-decoration: none;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #46B8C8;
            width: 185px;
            height: 45px;
            border-radius: 32.5px;
            color: #46B8C8;
            margin-left: 2px;
        }
    }
    @media (max-width: 1000px) {
        padding: 0 80px;
        img {
            width: 160px;
        }
        .right {
            .headerLink {
                font-size: 16px;
                margin-right: 20px;
            }
            .workBtn {
                font-size: 16px;
                width: 165px;
            }
        }
    }
    @media (max-width: 1000px) {
        padding: 0 30px;
        img {
            width: 150px;
        }
        i {
                display: flex;
            }
        .right {
            background-color: rgba(255, 255, 255, 0.7);
            height: 100%;
		    width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            position: fixed;
		    top: 0;
            right: -200vh;
            transition: 1.25s;
            &.active {
                ${RespoNav}
            }
        }
    }
`

export const FirstViewContent = styled.div`
    padding: 126px 120px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .title {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 85px;
        line-height: 85px;
        color: #3D4F5C;
        max-width: 430px;
    }

    .description {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: #FB8958;
        max-width: 758px;
    }
    .btn a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 157px;
        height: 45px;
        border-radius: 32.5px;
        background-color: #46B8C8;
        border: 1px solid #46B8C8;
        color: #FFFFFF;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        transition: all 2s;
    }
    .btn a:hover {
        background-color: white;
        color: #46B8C8;
    }
    @media (max-width: 1200px) {
        .title {
            font-size: 65px;
        }
        .description {
            font-size: 19px;
        }
        .btn a {
            width: 130px;
            font-size: 16px;
        }
    }
    @media (max-width: 1000px) {
        padding: 100px 30px;
    }
    @media (max-width: 800px) {
        .title {
            font-size: 55px;
        }
        .description {
            font-size: 18px;
        }
        .btn a {
            width: 120px;
            font-size: 15px;
        }
    }
    @media (max-width: 660px) {
        .title {
            font-size: 50px;
        }
        .description {
            font-size: 16px;
        }
        .btn a {
            width: 120px;
            font-size: 15px;
        }
    }
`