import React from 'react'
import styled from 'styled-components'

const BannerText = styled.div`

    height: 100%;
    width: 100%;
    margin-left: 13.4%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background-color: transparent;


    h1 {
        margin-top: 10%;
        width: 400px;
        background-color: transparent;
        font-weight: 700;
        font-size: 2.6rem;

        font-size: clamp(20px, 3vw, 48px)
    }

    p {
        max-width: 400px;

        margin-top: 20px;
        margin-bottom: 20px;
        background-color: transparent;
        font-weight: 400;

        font-size: clamp(10px, 1.5vw, 24px);

        line-height: clamp(16px, 2.3vw, 28px);
    }
`

export default BannerText;