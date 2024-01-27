import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;

    @media (max-width: 700px) {
        display: flex;
        position: relative;
        flex-direction: column;
        height: auto;
    }


    img {
        display: block;
        width: 100%;
        height: auto;
        position: absolute;

        @media (max-width: 700px) {
            object-fit: cover;
        }
    }
`;

export default BannerContainer