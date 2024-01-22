import React from 'react'
import styled from 'styled-components'
import { Macbook, Photo } from '../assets/about'
import { Carousel } from '../components'
import RamenGrid from '../components/RamenGrid'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled.p`
  margin: 10px 13.4% 0 13.4%;
`

const UpperContainer = styled.div`
  margin-left: 13.4%;
  margin-right: 13.4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
  }

`


const Header = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--primary-color);
`
const LowerHeader = styled(Header)`
  margin: 10px 13.4% 0 13.4%;
`

const UpperText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 750px) {
    width: 100%;
  }

  p {
    margin-top: 20px;
    line-height: 1.5rem;
  }
  

`

const CarouselContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

`;

const ImageWrapper = styled.div`
  width: ${props => props.width || '40%'};
  height: auto;
  overflow: hidden;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;

  }

`

const About = () => {
  return (

    <Container>
      <UpperContainer>
        <ImageWrapper>
          <img src={Photo}/>
        </ImageWrapper>
        <UpperText>
            <Header>Hi, nice to meet you!</Header>
            <p>I'm Christina Wu and I'm driven by my passion to design with empathy, intention, and impact! ✨</p>
            <p>Studying Sociology and Entrepreneurship, I've researched the social dynamics of eating and pitched “unpitchable” ideas (a bike that moves when you stop pedaling?!). Whatever life experiences I encounter, my goal is to apply the lessons learned to empower the work I do!</p>
            <Header style={{marginTop: "25px"}}>I am a...</Header>
            <p>🍜 &emsp;self-proclaimed ramen enthusiast.</p>
            <p>🍵 &emsp;passionate matcha drinker.</p>
            <p>😴 &emsp;very dedicated napper.</p>
            <p>🎧 &emsp;music-dependent individual.</p>
        </UpperText>
      </UpperContainer>
      <LowerHeader>📸 My Photography</LowerHeader>
      
      <Text>Powered by Canon and my iPhone.</Text>
      
      <CarouselContainer>
        <Carousel style={{ marginTop: "30px" }} />
      </CarouselContainer>

      <LowerHeader>😋 Ramen Rankings</LowerHeader>
      <Text>More to come! I'm open to suggestions! :)</Text>
      
      <RamenGrid style={{margin: "0 13.4% 0 13.4%"}}/>
      <LowerHeader>👩🏻‍💻 Check out my MacBook Stickers!</LowerHeader>
      <Text>It'll probably be another year until I find the willpower to change them...</Text>

      <ImageWrapper width={"60%"} style={{marginLeft: "20%", marginTop: "50px", marginBottom: "100px"}}>
        <img src={Macbook} />
      </ImageWrapper>

    </Container>

  )
}

export default About