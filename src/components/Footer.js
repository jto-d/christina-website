import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 22vh;
  background-color: var(--text-color);
  color: var(--background-color);

  display: flex;
  flex-direction: column;
  justify-content: center;


`

const TopText = styled.div`

  margin-left: 13.8%;
  background-color: var(--text-color);

  h1 {
    color: var(--primary-color);
    background-color: var(--text-color);
    font-weight: 700;
    font-size: 1.3rem;

    @media (max-width: 750px) {
      font-size: 1.1rem;
    }
  }

`

const BottomText = styled.div`
  margin-top: 10px;
  margin-left: 13.8%;
  margin-right: 13.8%;
  display: flex;
  flex-direction: row;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 10px;
  }
  justify-content: space-between;
  background-color: var(--text-color);

  ul {
    list-style: none;
    background-color: var(--text-color);
    display: flex;
    gap: 40px;
  }

  p, li, a {
    background-color: var(--text-color);
    color: var(--background-color);
    font-weight: 400;
    font-size: 0.9rem;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`

const Footer = () => {
  return (
    <Container>
      <TopText>
        <h1>Thanks for visiting!</h1>
      </TopText>
      <BottomText>
        <p>© 2023 Christina Wu | Made with lots of naps</p>
        <ul>
          <li>
            <a href='mailto:christinawu@princeton.edu'>Email</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/christina-shuhui-wu/'>Linkedin</a>
          </li>
        </ul>
      </BottomText>

    </Container>
  )
}

export default Footer