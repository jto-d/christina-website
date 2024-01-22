import React from 'react'
import styled from 'styled-components'
import { Card } from '../components'
import { Kitty, ImpactAgenda, TigerPursuits, CampusConnect, DevelopForGood } from '../assets/homepage'

const Container = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;


  align-items: center;
  height: 50vh;
  padding: 0;

  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: left;
    align-items: center;
    height: 60vh;
  }

`

const Text = styled.div`
  height: 40vh;
  margin-left: 13.8%;
  width: 40%;


  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--text-color);
    font-weight: 700;
    font-size: clamp(20px, 3.5vw, 48px);

    @media (max-width: 750px) {
      margin-top: 10px;
    }
  }

  h2 {
    color: var(--primary-color);
    font-weight: 700;
    font-size: clamp(20px, 2.5vw, 48px);
    margin-top: 1rem;

    @media (max-width: 750px) {
      margin-top: 10px;
    }
  }

  p {
    margin-top: 1rem;
    color: var(--text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 100%;
    letter-spacing: .05em;

    @media (max-width: 750px) {
      margin-top: 10px;
    }
  }

  @media (max-width: 750px) {
    margin-left: 0;
    width: 82.4%;
  }
`

const Meow = styled.img`
  height: 40vh;
  width: auto;
  margin-right: 13.8%;



  @media (max-width: 1000px) {
    height: 30vh;
  }

  @media (max-width: 750px) {
    margin-right: 0;
  }
  @media (max-width: 500px) {
    height: 18vh;
  }
`


const Cards = styled.div`
  padding: 0;
  margin: 100px 13.8%;
  height: 62vw;



  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  grid-column-gap: 2.4%;
  grid-row-gap: 2%;

  @media (max-width: 700px ) {
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
  }
  

`

const Home = () => {

  const BodyText = `I'm a sophomore @ Princeton University studying Sociology
                    and Entrepreneurship. I'm passionate about building
                    impactful design solutions with a touch of boldness and fun!`

  return (
    <>
    <Container>
      <Meow src={ Kitty }/>
      <Text>
        <h1>
          Hi there, I'm Christina!
        </h1>
        <h2>
          Designer and ramen enthusiast.
        </h2>
        <p> {BodyText} </p>
      </Text>
      
    </Container>
    <Cards>
        <a href="/tigerpursuits">
          <Card img={TigerPursuits} header="TigerPursuits · Class Project" body="A web app enhancing transparency in student extracurriculars exploration for ENT200." />
        </a>
        <a href="/campusconnect">
          <Card img={CampusConnect} header="CampusConnect · App Concept" body="A mobile app concept streamlining student group management with location services for a Princeton-based student startup."/>
        </a>
        <a href="/impactagenda">
          <Card img={ImpactAgenda} header="The Impact Agenda · Website Concept" body="A website concept showcasing the content of a student-founded social impact career podcast."/>
        </a>
        <Card img={DevelopForGood} header="Miricyl · Mental Health Web App (Coming Soon)" body="A web app for accessing mental health resource and personalized care." />
    </Cards>
    </>
  )
}

export default Home