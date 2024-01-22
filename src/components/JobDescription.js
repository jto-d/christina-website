import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 20px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    flex-basis: 25%;

    h1 {
        font-weight: 500;
        color: var(--primary-color);
        font-size: 1.3rem;
        width: 100%;
    }

    p {
        font-weight: 400;
        margin-top: 20px;
        width: 60%;
    }

`

const JobDescription = ({role, h2, design, h3, third, tools}) => {
  return (
    <Container>
        <Info>
            <h1>Role</h1>
            <p>{role}</p>
        </Info>
        <Info>
            <h1>{h2}</h1>
            <p>{design}</p>
        </Info>
        <Info>
            <h1>{h3}</h1>
            <p>{third}</p>
        </Info>
        <Info>
            <h1>Tools</h1>
            <p>{tools}</p>
        </Info>
        

    </Container>
  )
}

export default JobDescription