import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`

    width: ${props => props.width || 'auto'};   

    background-color: var(--text-color);
    color: var(--background-color);
    padding: 10px 20px;
    border: none;
    border-radius: 10px; /* Adjust if needed to match the curvature of the button in the screenshot */
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Adjust for shadow effect */
    outline: none;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e0e0e0; /* Adjust for hover state */
    }

    &:active {
        box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.2); /* Adjust for active/clicked state */
    }

`

const Button = ({width, text}) => {
  return (
    <Btn width={width}>
        {text}
    </Btn>
  )
}

export default Button