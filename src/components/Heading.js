import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    flex-direction: column;

    color: var(--primary-color);


    h1 {
        font-weight: 600;
        font-size: 1.5rem;
    }

    hr {
        height: 2px;
        color: var(--primary-color);
        background-color: var(--primary-color);
        border: none;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

const Heading = ({title, id}) => {
  return (
    <Header>
        <h1 id={id}>{title}</h1>
        <hr />
    </Header>
    
  )
}

export default Heading