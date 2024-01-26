import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BannerContainer, BulletedList, DisplayContainer, ImageRow, ReflectionText, BannerText, Button, Heading, JobDescription } from '../components'
import { TigerBanner } from '../assets/tigerpursuits'
import { Empathy, Affinity, Ideation } from '../assets/tigerpursuits/photos'
import { MyPrincetonU, SchoolEmails, TigerApps, UserPersonaOne, UserPersonaTwo } from '../assets/tigerpursuits'
import { MyPrincetonUAuth, CommunityPage, RecommendationsGeneratedOne, RecommendationsGeneratedTwo, ExploreClubOne, ExploreClubTwo, LeaveReviewsOne, LeaveReviewsTwo, TigerPursuitsValues } from '../assets/tigerpursuits/howitworks'


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
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-color);
    cursor: pointer;
    text-decoration: none;
  }


`
const Image = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 21vw;

    @media (max-width: 700px) {
      width: 50%;
    }

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

        p, ul {
            margin-top: 20px;
            width: 90%;

            @media (max-width: 700px) {
              margin-top: 5px;
            }
        }

        h2 {
          margin-top: 20px;
          font-size: 1.2rem;
        }
    }

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

`

const Quote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;

  h1 {
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    color: var(--primary-color);
  }

`



const TigerPursuitsCS = () => {

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
        <img ref={imageRef} src={TigerBanner} alt="Banner"/>
        <BannerText>
          <h1>TigerPursuits</h1>
          <p>A web app enhancing transparency in student extracurriculars exploration for ENT200.</p>
          <a href="https://www.figma.com/proto/EwYeKsMKKAS0qcQWgoERm9/TigerPursuits-Prototype?type=design&node-id=573-1443&t=AJRNQTH9l11rCZbM-1&scaling=scale-down&page-id=492%3A172&starting-point-node-id=573%3A1443"><Button width="180px" text="View Prototype →"/></a>
        </BannerText>
      </BannerContainer>

      <Container marginTop={bannerHeight}>
        <Heading title="Overview"/>
        <p>Last semester, I was part of a team of 3 in ENT200, a design thinking studio course, working on a team design project to solve the wicked problem of self-worth. As the sole UI/UX designer, I was responsible for the prototype design, usability testing, and conducting student interviews with the team.</p>
        <JobDescription role="UI/UX Designer" h2="Timeline" design="November 2023 - December 2023" h3="Team" third="Bahia Kazemipour, Alexander Kirk" tools="Figma, User Research, Usability Testing, Notion" />

        <Heading title="Design Challenge"/>
        <h2>Find an effective way to develop <u>self-worth</u> among Princeton undergraduate students.</h2>
        <p>Self-worth is a wicked problem, meaning that it does not have a correct design solution, but our propose solution should be:</p>
        <BulletedList>
          <li><b>Practical</b> to implement and have the <b>portential for impact.</b></li>
          <li><b>Creative</b> and maintain an <b>overall appeal</b> to the intended audience.</li>
        </BulletedList>

        <Heading title="Problem Statement" />
        <h2>How can we develop a platform that promotes transparency in extracurricular activities and provides support for students who experience rejection from these activities?</h2>
        images go HERE

        <Heading title="Discovery" />
        <h2>With more than 500 student organizations and a competitive atmosphere to gain experience, facing rejection from selective clubs and organizations is unavoidable at Princeton. 9 out of 10 of our interviewees have experienced some form of rejection.</h2>
        <p>Over the course of three weeks, we conducted <b>10 user interviews</b> across all four undergraduate levels with a focus on extracurricular activities, identifying a few pain points as we dissected our findings through empathy and affinity maps.</p>
        <Quote>
          <h1>Acceptance and involvement in extracurriculars not only influences student self-worth, but also serves as an important platform for building community.</h1>
        </Quote>
        <ImageRow>
          <img src={Empathy}/>
          <img src={Affinity}/>
          <img src={Ideation}/>
        </ImageRow>
        <h3>Pain Points and Insights:</h3>
        <BulletedList>
          <li><b>Insecurity:</b> Students often view their skills and experiences as inadequate, hindering their extracurricular exploration.</li>
          <li><b>Identity & Self-Worth:</b> Involvement in extracurriculars are crucial to students' self-identity and esteem on campus.</li>
          <li><b>Exclusivity:</b> Exclusive club cultures and the desire to join them can lead to self-doubt and a sense of not belonging in students when experience rejection from them. </li>
        </BulletedList>

        <Heading title="Existing University Platforms" />
        <ImageContainer>
          <div>
            <Image>
              <img src={MyPrincetonU} />
            </Image>
            <h2>MyPrincetonU</h2>
            <BulletedList>
              <li>Primarily utilized by students for event ticketing and sign-ups.</li>
              <li>Despite its many functions, the site is rarely used for club exploration.</li>
            </BulletedList>
          </div>
          <div>
            <Image>
              <img src={SchoolEmails} />
            </Image>
            <h2>Campus-Wide Emails</h2>
            <BulletedList>
              <li>Opportunities lack info on club selectivity and time commitments.</li>
              <li>Some clubs offer coffee chats, but spots are limited.</li>
            </BulletedList>
          </div>
          <div>
            <Image>
              <img src={TigerApps} />
            </Image>
            <h2>TigerApps</h2>
            <BulletedList>
              <li>Current apps target course and job/internship exploration.</li>
              <li>No specific apps for exploring campus extracurriculars.</li>
            </BulletedList>
          </div>
        </ImageContainer>

        <Heading title="Sample Users" />
        <p>While drafting sample user profiles, we also considered other use cases beyond the typical story of an underclassman handling rejection. Our focus was on different ways to potentially uplift students self-worth, whether that involved bouncing back after rejection or encouraging them to embrace new challenges through the information provided by our platform.</p>
        <ImageRow>
          <img src={UserPersonaOne} />
          <img src={UserPersonaTwo} />
        </ImageRow>

        <Heading title="TigerPursuits: How It Works" />
        <p>TigerPursuits is a comprehensive web app that offers personalized recommendations, anonymous student reviews, and community discussion boards for student clubs and organizations, creating a network of student-generated information.</p>
        
        <DisplayContainer style={{marginTop: "30px"}}>
          <div>
            <h1>MyPrincetonU Authentication</h1>
            <BulletedList>
              <li>Access to TigerPursuits via MyPrincetonU could enhance student engagement.</li>
              <li>Using MyPrincetonU's API, TigerPursuits verifies an user’s club memberships to ensure credible reviews. (Users only have the ability to review clubs they are in)</li>
              <li>Club profiles are created from existing MyPrincetonU registrations to avoid re-entry by club leaders.</li>
            </BulletedList>
          </div>
          <div>
            <img src={MyPrincetonUAuth} />
          </div>
        </DisplayContainer>

        <DisplayContainer>
          <div>
            <img src={RecommendationsGeneratedOne}/>
            <img src={RecommendationsGeneratedTwo} />
          </div>
          <div style={{paddingLeft: "50px"}}>
            <h1>Recommendations Generated via Questionnaire</h1>
            <BulletedList>
              <li>New users have the option to take a questionnaire or skip it.</li>
              <li>First part of the questionnaire asks about interests, career goals, and personal values.</li>
              <li>Second part of the questionnaire involves an optional section on past club involvements and rejections for better insights on their interests.</li>
            </BulletedList>
          </div>
        </DisplayContainer>

        <DisplayContainer>
          <div>
            <h1>Explore Club Profiles</h1>
            <BulletedList>
              <li>Club profiles include officer contacts, club overview, membership profiles of club attributes generated from student reviews, etc.</li>
              <li>“Sort By” featuring a drop down menu that allows users to filter by club attributes.</li>
              <li>Access advanced search via the filter icon in the search bar.</li>
            </BulletedList>
          </div>
          <div>
            <img src={ExploreClubOne} />
            <img src={ExploreClubTwo} />
          </div>
        </DisplayContainer>

        <DisplayContainer>
          <div>
            <img src={LeaveReviewsOne}/>
            <img src={LeaveReviewsTwo} />
          </div>
          <div style={{paddingLeft: "50px"}}>
            <h1>Leave Reviews</h1>
            <BulletedList>
              <li>Slider reviews are averaged and categorized into four important club aspects, which were identified through user testing.</li>
              <li>Optional written reviews include majors and class years for more context on user reviews, as suggested by users.</li>
              <li>Reviews are accessible via the club profile and can be sorted and flagged for moderation.</li>
            </BulletedList>
          </div>
        </DisplayContainer>

        <DisplayContainer>
          <div>
            <h1>Community Forum</h1>
            <BulletedList>
              <li>Resembles a Reddit-like forum and allows students to ask questions and address concerns or uncertainties. </li>
              <li>Users can create threads for club-related topics. </li>
              <li>Resources for applying to clubs or starting one are included, directing students to official university sites.</li>
            </BulletedList>
          </div>
          <div>
            <img src={CommunityPage}/>
          </div>
        </DisplayContainer>

        <img src={TigerPursuitsValues} />

        <Heading title="Reflection"/>
        <ReflectionText>
          <h1>This may have started as a class project, but it has truly become a <u>passion project</u>.</h1>
          <p>This design challenge was a roller coaster! I didn’t realize I had the capability to engage with so many students and work towards a problem that we’ve all experienced. In just a month, I'm proud of how my team and I applied our lessons in design thinking to a tough problem. The judges praised our platform's collaboration with the university during our demo, and <b><u>I hope we can turn this into a working web application soon partnering with MyPrincetonU and TigerApps developers</u></b>.</p>
          <div></div>
          <h1>Conducting user interviews is more difficult than I thought! It's a craft...</h1>
          <BulletedList>
            <li>Finding the right interviewees was challenging, especially when we had to talk to strangers to <b>avoid response biases</b>.</li>
            <li>Creating an <b>effective questionnaire</b> was difficult, but I think I’m now better at designing questions that prompt interviewees to share stories about their emotions, frustrations, goals, and motivations.</li>
          </BulletedList>
          <div></div>
          <h1>What I wish I could've done differently?</h1>
          <p>While we addressed a few key values in our platform to foster student self-worth, our long-term effectiveness is limited as we don't tackle the core issues of exclusivity and rejection. Reflecting on this, I'd focus more on tailored user interviews to better integrate self-worth solutions into our platform’s user flow.</p>
        </ReflectionText>
        <Quote>
          <h1><u>Personal Quote + Takeaway</u>: "Just because you believe something will work doesn't necessarily make it the right solution."</h1>
        </Quote>

        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <a href="/campusconnect">CampusConnect &nbsp;&nbsp; ⟶</a>
        </div>
        

      </Container>
    </Wrapper>
  )
}

export default TigerPursuitsCS