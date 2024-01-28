import React, { useRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { VideoOne, VideoTwo, EditorXLogo, Design, SeasonThree, ImpactBanner } from '../assets/impactagenda'
import { Button, Heading, JobDescription, ReflectionText, BannerContainer, BannerText } from '../components'
import ReactPlayer from 'react-player'

const Wrapper = styled.div`
    display: block;

`
const Image = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 15vw;
    width: 15vw;

    img {
        border-radius: 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }


`

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 50px;


    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            margin-top: 20px;
            width: 90%;
            text-align: center;
        }
    }



`

const VideoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 40px;

    div {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        width: 60%;
        justify-content: center;

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
            text-indent: -1.3em;
            padding-left: 1.3em;
        }

        a {
            margin-top: 10px;
            text-decoration: underline;
            cursor: pointer;
            font-size: 1rem;
            text-align: center;
        }

        a:hover {
            color: var(--primary-color);
        }
    }
`


const Container = styled.div`

    position: relative;

    margin: 0 13.8%;
    width: 72.4%;
    height: auto;

    display: flex;
    flex-direction: column;

    margin-top: ${props => props.marginTop || '0px'};

    p {
        font-weight: 400;
        margin-bottom: 20px;
    }

    a {
        margin-top: 50px;
        font-weight: 500;
        font-size: 1.2rem;
        color: var(--primary-color);
        text-decoration: none;
        cursor: pointer;
    }
`

const BulletedList = styled.ul`
    display: block;
    list-style-type: disc;
    list-style-position: inside;
    color: var(--text-color);
    margin-bottom: 20px;
`

const ImpactCS = () => {

    const imageRef = useRef(null);
    const containerRef = useRef(null);
    
  
    const [bannerHeight, setBannerHeight] = useState('0px');
  
    useEffect(() => {
      const updateHeight = () => {
  
        if (imageRef.current && containerRef.current) {
            const height = `${imageRef.current.offsetHeight}px`;
            const doubleHeight = `${imageRef.current.offsetHeight * 2 + 70}px`;
            const margin = `${imageRef.current.offsetHeight - 168}px`;
            containerRef.current.style.height = window.innerWidth <= 700 ? doubleHeight : height;
            setBannerHeight(margin);
        }
            
      }
  
      updateHeight();
      window.addEventListener('resize', updateHeight)
  
  
      return () => {
        window.removeEventListener('resize', updateHeight);
      }
  
        
    }, [imageRef, containerRef])


  return (
    <Wrapper>
        <BannerContainer ref={containerRef}>
            <img ref={imageRef} src={ImpactBanner} alt="Banner"/>
            <BannerText topMargin={`${parseInt(bannerHeight, 10) + 168}px`}>
                <h1>The Impact Agenda</h1>
                <p>A website concept showcasing the content of a student founded social impact career podcast.</p>
                <a href="https://www.figma.com/proto/yD29W2hN77ElmBjWRsWCOa/The-Impact-Agenda-Podcast?type=design&node-id=111-319&t=yXQvaSav2gpHfioy-1&scaling=scale-down&page-id=14%3A2&starting-point-node-id=111%3A319"><Button width="180px" text="View Prototype →"/></a>
            </BannerText>

        </BannerContainer>
        <Container marginTop={bannerHeight}>
            <Heading title="Overview"/>
            <p>The Impact Agenda (previously known as the i-Impact Podcast) is a podcast that explores new horizons of social good in the 21st century. The podcast engages in conversation with innovators and leader to debunk myths about social impact careers.</p>
            <JobDescription role="Volunteer Designer" h2="Intial Design" design="February 2023 - March 2023" h3="Redesign" third="September 2023 - October 2023" tools="Figma, Adobe Photoshop, EditorX" />
            <Heading title="Design Challenge"/>
            <p>Following the rebranding from “i-Impact Podcast” to “The Impact Agenda” during its Season 2 release, redesign the original website design with a fresh look, updated content, and more streamlined elements to accommodate future seasons. Additionally, I am responsible for transferring these designs to the chosen CMS, EditorX, to create a responsive website.</p>
            <p><b>The website should:</b></p>
            <BulletedList>
                <li>Maintain a fun, but professional aesthetic.</li>
                <li>Feature clickable links to the individual episodes.</li>
                <li>Include "About," "Meet the Team," and "News" pages.</li>
            </BulletedList>
            <br></br>
            
            <Heading title="First Iteration (Initial Design)"/>
            <VideoContainer>
                <div style={{width: "40%"}}>
                    <h1>"i-Impact Prodcast" Website Concept</h1>
                    <BulletedList>
                        <li>Implemented colors and typography from the podcast style guide.</li>
                        <li>Short podcast description included on the landing page along with a social Video bar.</li>
                        <li>"About the Podcast" description and "Meet the Team" section included below the landing page.</li>
                        <li>Horizontal layout of the episode "cards." Clicking on a card will open to episode on Spotify.</li>
                    </BulletedList>
                </div>
                <div>
                    <ReactPlayer url="https://www.youtube.com/watch?v=CiwUIfSB6ks" width="100%" height="24vw"/>
                    <a href="https://www.figma.com/proto/yD29W2hN77ElmBjWRsWCOa/The-Impact-Agenda-Website?type=design&node-id=208-3136&t=O6Kdj2JPnElHKkzc-0&scaling=scale-down&page-id=0%3A1">View protoype</a>
                </div>
            </VideoContainer>
            
            <Heading title="Second Iteration (Redesign)"/>
            <VideoContainer>
                <div>
                    <ReactPlayer url="https://youtu.be/DSVF_GpmA2g" width="100%" height="24vw"/>
                    <a href="https://www.figma.com/proto/yD29W2hN77ElmBjWRsWCOa/The-Impact-Agenda-Website?type=design&node-id=111-319&t=O6Kdj2JPnElHKkzc-0&scaling=scale-down&page-id=14%3A2&starting-point-node-id=111%3A319">View protoype</a>
                </div>
                <div style={{marginLeft: "5%", width: "40%"}}>
                    <h1>"The Impact Agenda" Website Concept</h1>
                    <BulletedList>
                        <li>Adopted a sleeker look, moving away from initial gradient patterns.</li>
                        <li>More in-depth contact information in the footer.</li>
                        <li>Added a "Latest Episodes" section below the landing page for quick preview and redirection to the "Episodes" page.</li>
                        <li>Added a dropdown for selection between Season 1 and 2. The episode cards link to both spotify and Apple Podcasts, rather than just Spotify.</li>
                    </BulletedList>
                </div>
            </VideoContainer>
            
            <Heading title="Next Steps"/>
            <ImageContainer>
                <div>
                    <Image>
                        <img src={EditorXLogo} />
                    </Image>
                    <p>Finalize the updated design on EditorX</p>
                </div>
                <div>
                    <Image style={{width: "26vw"}}>
                        <img src={Design} />
                    </Image>
                    <p>Resolve responsive design issues to avoid image overlap and resizing errors.</p>
                </div>
                <div>
                    <Image>
                        <img src={SeasonThree} />
                    </Image>
                    <p>Prepare to implement content for Season 3.</p>
                </div>
            </ImageContainer>
                
            <Heading title="Reflection"/>
            <ReflectionText>
                <h1>This project marked the beginning of my journey into digital design and UI/UX!</h1>
                <p>Starting with no experience in Figma and progressing to a level where I can comfortably plan user flows and prototype has been incredibly rewarding. The Impact Agenda is doing amazing work, and building a website from scratch was super fun. Returning to the project a few months later to redesign it, now with more practice and a deeper understanding of design principles, I was excited to apply my newfound knowledge. This experience not only strengthened my technical skills but also deepened my appreciation for the iterative nature of design work.</p>
            </ReflectionText>

            <a href="/campusconnect" style={{marginBottom: "100px"}}>⟵ &nbsp;&nbsp; CampusConnect</a>
            

        </Container>
    </Wrapper>
  )
}

export default ImpactCS