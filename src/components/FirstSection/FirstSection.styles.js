import { styled } from 'styled-components'

export const FirstViewSection = styled.section`
    height: 100vh;
`

export const FirstViewHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 120px 0 120.36px;

    .logo img {
        width: 199.49px;
        height: 47.85px;
        padding-top: 36.71px
    }

    .right {
        display: flex;
        gap: 42px;
        .links {
            display: flex;
            gap: 30px;
            padding-top: 43px;
            a {
                color: #3D4F5C;
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-weight: 400;
                font-size: 18px;
                line-height: 18px;
                text-decoration: none;
            }
            a:hover {
                scale: 1.02;
                font-weight: bold;
            }
        }
        .btn {
            padding-top: 30px;
        }
        .btn a {
            text-decoration: none;
            width: 185px;
            height: 45px;
            border-radius: 32.5px;
            border: 1px solid #46B8C8;
            background-color: white;
            color: #46B8C8;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 18px;
            transition: all 2s;
            display: inline-block;
            text-align: center;
            line-height: 45px;
            }
        .btn a:hover {
                background-color: #46B8C8;
                color: white;

            }
        }
    

    @media (max-width: 1300px){
        padding: 0 90px;
        .logo img {
            width: 180px;
            height: 45px;
        }
        .right {
            gap: 40px;
            .links {
                gap: 28px;
                a {
                    font-size: 17px;
                }
            }
            .btn a {
                font-size: 17px;
                width: 145px;
                height: 45px;
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
        padding: 0 20px;
        .logo img {
            width: 160px;
            height: 45px;
        }
        .right {
            gap: 30px;
            .links {
                gap: 23px;
                a {
                    font-size: 15px;
                }
            }
            .btn a {
                font-size: 15px;
                width: 125px;
                height: 45px;
            }
        }
    }
    @media (max-width: 550px){
        padding: 0 10px;
        .logo img {
            width: 140px;
            height: 45px;
        }
        .right {
            gap: 30px;
            .links {
                gap: 23px;
                a {
                    font-size: 13.5px;
                }
            }
            .btn a {
                font-size: 13.5px;
                width: 105px;
                height: 45px;
            }
        }
    }

    @media (max-width: 500px){
        .logo img {
            width: 120px;
            height: 45px;
        }
        .right {
            gap: 15px;
            .links {
                gap: 13px;
                a {
                    font-size: 12.5px;
                }
            }
            .btn a {
                font-size: 12.5px;
                width: 100px;
                height: 45px;
            }
        }
    }
`

export const FirstViewContent = styled.div`
    padding-left: 120px;

    .first-view-content-F {
        height: 170px;
        padding-top: 230px;
        p {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 85px;
            line-height: 85px;
            color: #3D4F5C;
        }
    }

    .first-view-content-S {
        height: 30px;
        padding-top: 25px;
        p {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 24px;
            line-height: 30px;
            color: #FB8958;
            text-align: justify;
        }
    }

    .first-view-content-T {
        height: 45px;
        padding-top: 25px;
        a {
            text-decoration: none;
            width: 157px;
            height: 45px;
            border: none;
            border-radius: 32.5px;
            background-color: #46B8C8;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 18px;
            line-height: 18px;
            color: #FFFFFF;
            transition: all 2s;
            display: inline-block;
            text-align: center;
            line-height: 45px;
            border: 1px solid #46B8C8;
        }
        a:hover {
            background-color: white;
            border: 1px solid #46B8C8;
            color: #46B8C8;

        }
    }

    img.art {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 704.82px;
        height: 507px;
    }
    
    @media (max-width: 1300px){
        padding: 0 90px;
        .first-view-content-F {
            p {
                font-size: 80px;
            }
        }
        .first-view-content-S {
            p {
                font-size: 22px;
            }
        }
        .first-view-content-T {
            button {
                font-size: 16px;
            }
        }
        img.art {
            width: 690px;
            height: 490px;
        }
    }
    
    @media (max-width: 1200px){
        padding: 0 75px;
        .first-view-content-S {
            p {
                font-size: 19px;
            }
        }
        img.art {
            width: 650px;
            height: 460px;
        }
    }

    @media (max-width: 1100px){
        padding: 0 30px;
        img.art {
            width: 550px;
            height: 380px;
        }
    }

    @media (max-width: 800px){
        padding: 0 20px;
        .first-view-content-F {
            padding-top: 180px;
            p {
                font-size: 70px;
            }
        }
        .first-view-content-S {
            p {
                font-size: 18px;
            }
        }
        .first-view-content-T {
            button {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 550px){
        padding: 0 10px;
        .first-view-content-F {
            padding-top: 130px;
            p {
                font-size: 60px;
            }
        }
        .first-view-content-S {
            p {
                font-size: 16px;
            }
        }
        .first-view-content-T {
            button {
                font-size: 13.5px;
            }
        }
    }

    @media (max-width: 500px){
        .first-view-content-F {
            padding-top: 110px;
            p {
                font-size: 45px;
                line-height: 70px;
            }
        }
        .first-view-content-S {
            p {
                font-size: 18px;
                line-height: 20px;
            }
        }
        .first-view-content-T {
            padding-top: 35px;
            button {
                font-size: 13.5px;
            }
        }
        img.art {
            width: 450px;
            height: 320px;
        }
    }
`
