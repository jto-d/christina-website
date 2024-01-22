import React from "react";
import styled from 'styled-components'

const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 100px;

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  h1 {
    font-weight: 500;
    color: var(--primary-color);
    font-size: 1.2rem;
    width: 100%;
    margin-top: 5px;
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