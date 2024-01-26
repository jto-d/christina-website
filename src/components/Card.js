import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 35vw;
  height: auto;
  position: relative;
  overflow: hidden;

  img {

  @media (max-width: 700px) {
    width: 70vw;
  }
  width: 34vw;
  height: auto;
  position: relative;
  z-index: 1;
  }

  @media (max-width: 700px) {
      height: auto;
      width: 70vw;
  }

  div {
    color: var(--text-color);
    background-color: var(--background-color);
    width: 35vw;

    top: 0;
    left: 0;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    border: none;
    overflow: hidden;
    padding: 10%;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    @media (max-width: 700px) {
      position: static;
      opacity: 1;
      width: 70vw;

    }



    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      text-decoration: none;

      @media (max-width: 700px) {
        font-size: 1.2rem;
      }
    }

    p {
      font-weight: 400;
      margin-top: 20px;
      font-size: 1.2rem;
      line-height: 1.4rem;
      text-decoration: none;

      @media (max-width: 700px) {
        margin-top: 10px;
        font-size: 0.8rem;
        line-height: 1.2rem;
      }
    }
  }


  div:hover {
    cursor: pointer;
    opacity: 0.85;
    transition: opacity 0.4s ease-in-out;
  
  }

  


`

const Card = ({ img, header, body }) => {
  return (
    <Container>
      <img src={img}></img>
      <div>
        <h1>{header}</h1>
        <p>{body}</p>
      </div>

    </Container>
  )
}

export default Card