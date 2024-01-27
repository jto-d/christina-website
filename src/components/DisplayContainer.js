import React from "react";
import styled from 'styled-components'

const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 100px;

  @media (max-width: 700px) {
    flex-direction: column;

    ${props => props.reverse && `
      flex-direction: column-reverse;
    `}
  }

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 20px;
    
    @media (min-width: 701px) {
      ${props => !props.reverse && `
      padding-left: 50px;
    `}
    }


    @media (max-width: 700px) {
      gap: 0;
      width: 100%;
      padding-left: 0px;
    }
  }
  h1 {
    font-weight: 500;
    color: var(--primary-color);
    font-size: 1.2rem;
    width: 100%;
    margin-top: 5px;

    @media (max-width: 700px) {
      margin-top: 20px;
    }
  }

  ul {
    padding-left: 0;
  }

  
  li {
    margin-top: 20px;
    width: 90%;
    text-indent: -1.3em;
    padding-left: 1.3em;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  
`

export default DisplayContainer