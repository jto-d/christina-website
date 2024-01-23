import React from "react"
import styled from 'styled-components'

const BulletedList = styled.ul`
    display: block;
    list-style-type: disc;
    list-style-position: inside;
    color: var(--text-color);
    margin-bottom: 20px;

    ul {
            padding-left: 0;
        }

        
    li {
        text-indent: -1.3em;
        padding-left: 1.3em;
    }
`

export default BulletedList
