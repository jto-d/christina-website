import React from 'react'
import styled from 'styled-components'
import { Kitty } from '../assets/homepage'

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  align-items: center;
  min-height: 50vh;
  padding: 0;

  width: 100%;

`

const Text = styled.div`
  height: 40vh;
  margin: 0 0 0 13.8%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--text-color);
    font-weight: 700;
    font-size: 2.5rem;
  }

  h2 {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  p {
    color: var(--text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 100%;
  }

`

const Meow = styled.img`
  height: 40vh;
  width: auto;
  margin-right: 13.8%;
`

const Home = () => {

  const BodyText = `I'm a sophomore @ Princeton University studying Sociology
                    and Entrepreneurship. I'm passionate about building
                    impactful design solutions with a touch of boldness and fun!`

  return (
    <Container>
      <Text>
        <h1>
          Hi there, I'm Christina!
        </h1>
        <h2>
          Designer and ramen enthusiast.
        </h2>
        <p> {BodyText} </p>
      </Text>
      <Meow src={ Kitty }/>

    </Container>
  )
}

export default Home