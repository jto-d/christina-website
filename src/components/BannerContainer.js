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

    img {
        display: block;
        width: 100%;
        height: auto;
        position: absolute;
    }
`;

export default BannerContainer