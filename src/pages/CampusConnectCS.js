import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { BannerContainer, DisplayContainer, ImageRow, ReflectionText, BannerText, Button, Heading, JobDescription, BulletedList } from '../components'
import { CampusBanner, Preview, StyleGuide, InformationArchitecture, Wireframes } from '../assets/campusconnect'
import { Explore, Group, Event, Task, Messaging } from '../assets/campusconnect/PhoneScreens'

const Wrapper = styled.div`
  display: block;
`

const Container = styled.div`
  position: relative;

  margin: 0 13.8%;
  width: 72.4%;
  height: auto;

  display: flex;
  flex-direction: column;

  margin-top: ${props => props.marginTop || '0px'};

  h2 {
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  p {
    font-weight: 400;
    margin-bottom: 20px;
  }

  a {
    margin-top: 50px;
    margin-bottom: 100px;
    font-weight: 500;
    color: var(--primary-color);
    cursor: pointer;
    text-decoration: none;
  }
`

const CampusConnectCS = () => {

  const imageRef = useRef(null);
  const containerRef = useRef(null);
  

  const [bannerHeight, setBannerHeight] = useState('0px');

  useEffect(() => {
      if (imageRef.current && containerRef.current) {
          const height = `${imageRef.current.offsetHeight}px`;
          const margin = `${imageRef.current.offsetHeight - 168}px`;
          containerRef.current.style.height = height;
          setBannerHeight(margin);
      }
  }, [])

  return (
    <Wrapper>
      <BannerContainer ref={containerRef}>
        <img ref={imageRef} src={CampusBanner} alt="Banner" />
        <BannerText>
          <h1>CampusConnect</h1>
          <p>A mobile app concept streamlining student group management with location services for a Princeton-based student startup.</p>
          <a href="#designs"><Button width="200px" text="Final Designs →"/></a>
        </BannerText>
      </BannerContainer>

      <Container marginTop={bannerHeight}>
        <Heading title="Overview"/>
        <p>CampusConnect, a student startup born from campus leaders' frustration with disorganized meetings and task planning, aims to ease these organizational burdens. As a comprehensive solution, it simplifies meeting planning, tracks attendance using location services, and centralizes event scheduling and task assignment. I was brought on as the sole Designer, responsible for designing CampusConnect’s brand identity and its initial concept designs to pitch to our entrepreneurship faculty.</p>
        <JobDescription role="Designer" h2="Timeline" design="December 2023 (1 week)" h3="Team" third="Christina Yao, Joshua Lau, Nicole Torres" tools="Figma, Adobe Photoshop, Adobe Illustrator" />
      
        <Heading title="Problem Statement" />
        <h2>How can we simplify meeting planning and centralize task assignment to provide an all-in-one experience for campus leaders and students?</h2>
        <img src={Preview} />

        <Heading title="Discovery" />
        <p>The CampusConnect team identified a significant pain point amongst campus leaders:</p>
        <h2>An absence of a centralized platform for streamlining administrative processes.</h2>
        <p>As individuals in leadership roles, the team empathized with the challenges of managing tasks across multiple tools such as When2Meet, iMessage, GroupMe, and Google Calendar, which resulted in various inefficiencies. The user interviews conducted, which included <b>five conversations with campus leaders</b>, revealed that these leaders spend approximately three hours per week managing operations, switching between and using these different tools and platforms to schedule meetings and assign tasks.</p>
        <img src={Wireframes} style={{marginTop: "40px"}}/>
        <ImageRow>
          <img src={StyleGuide} />
          <img style={{width: "90vw"}}src={InformationArchitecture} />
        </ImageRow>

        <Heading title="CampusConnect: How It Works" id="designs"/>
        <DisplayContainer>
          <div>
            <h1>Explore Page</h1>
            <BulletedList>
              <li>Configurable location services to track attendance around meeting time.</li>
              <li>Additional information for the group, such as meeting location data, including details like "Popular Times" under the "Location" section, and previously saved meeting locations under "Places."</li>
              <li>Access app-wide notifications.</li>
            </BulletedList>
          </div>
          <div>
            <img src={Explore} />
          </div>
        </DisplayContainer>

        <DisplayContainer>
          <div>
            <img src={Group} />
          </div>
          <div style={{paddingLeft: "50px"}}>
            <h1>Group Management</h1>
            <BulletedList>
              <li>Easily switch between different groups on the "Explore" page, and create or join a group.</li>
              <li>Additional group management features are available under user’s "Profile," which include viewing owner/admin settings and editing group membership.</li>
            </BulletedList>
          </div>
        </DisplayContainer>
        
        <DisplayContainer>
          <div>
            <h1>Event Management</h1>
            <BulletedList>
              <li>Group owners and those granted admin rights are able to schedule events under the "Planner," offering features such as setting reminders, inviting groups and individuals, and organizing event details for effective group coordination.</li>
            </BulletedList>
          </div>
          <div>
            <img src={Event} />
          </div>
        </DisplayContainer>

        <DisplayContainer>
          <div>
            <img src={Task} />
          </div>
          <div style={{paddingLeft: "50px"}}>
            <h1>Task Management</h1>
            <BulletedList>
              <li>Group owners and those granted admin rights are also able to assign tasks under the "Planner," facilitating efficient task delegation and tracking progress within the group.</li>
            </BulletedList>
          </div>
        </DisplayContainer>

        <DisplayContainer>
          <div>
            <h1>Messaging</h1>
            <BulletedList>
              <li>Easily message groups and individuals, providing a seamless communication experience with instant notifications and the ability to share media, links, and documents.</li>
            </BulletedList>
          </div>
          <div>
            <img src={Messaging} />
          </div>
        </DisplayContainer>

        <Heading title="Reflection" />
        <ReflectionText>
          <p>Designing my first complete mobile app was a fun challenge! I gained insights into designing for smaller screens and mapping out user interactions. Although the core goals and concepts of the startup were predefined, I tried my best to integrate these elements into an intuitive and user-friendly interface. Balancing a feature-rich application while aiming to address a broad spectrum of user needs is no easy task.</p>
          <p>As a designer who also studies entrepreneurship, I recognize the importance of a clear value proposition. Given additional time, I would focus on pinpointing the app's key features and conducting a thorough competitive analysis to differentiate it from similar apps. Regardless of the startup's future, I'm grateful for the opportunity to design for other students and help them bring their ideas to life through design!</p>
        </ReflectionText>

        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <a href="/tigerpursuits">⟵ &nbsp;&nbsp; TigerPursuits</a>
          <a href="/impactagenda">The Impact Agenda &nbsp;&nbsp; ⟶</a>
        </div>
        
        
        
      </Container>

    </Wrapper>
  )
}

export default CampusConnectCS