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

    a {
        background-color: transparent;
        width: 200px;
    }
    h1 {
        margin-top: 10%;
        width: clamp(400px, 26vw, 800px);
        background-color: transparent;
        font-weight: 700;

        font-size: clamp(24px, 2.6vw, 44px)
    }

    p {
        width: clamp(300px, 18vw, 800px);

        margin-top: 20px;
        margin-bottom: 20px;
        background-color: transparent;
        font-weight: 400;

        font-size: clamp(16px, 1.5vw, 24px);

        line-height: clamp(24px, 1.9vw, 28px);
    }
`

export default BannerText;