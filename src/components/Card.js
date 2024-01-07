import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 35vw;
  height: 27.26vw;
  position: relative;

  @media (max-width: 700px) {
      width: 70vw;
      height: 54.52vw;
  }

  div {
    color: var(--text-color);
    background-color: var(--background-color);
    width: 35vw;
    height: 27.26vw;
    @media (max-width: 700px) {
      width: 70vw;
      height: 54.52vw;
    }


    position: absolute;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    border: none;
    overflow: hidden;
    padding: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;



    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }

    p {
      font-weight: 400;
      margin-top: 20px;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }

  div:hover {
    cursor: pointer;
    opacity: 0.85;
    transition: opacity 0.4s ease-in-out;
  }
  

  img {

    @media (max-width: 700px) {
      width: 70vw;
    }
    width: 35vw;
  }
`

const Card = ({ img, header, body }) => {
  return (
    <Container>
      <div>
        <h1>{header}</h1>
        <p>{body}</p>
      </div>
      <img src={img}></img>
    </Container>
  )
}

export default Card