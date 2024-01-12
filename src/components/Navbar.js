import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { LinkedInIcon, LogoImg } from '../assets/homepage'


const Nav = styled.nav`
  position: relative;

  background-color: transparent;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 84px 13.8%;
  letter-spacing: .1em;

  @media (max-width: 500px) {
    padding: 42px 8.8%;
  }

  a {
    background-color: transparent;
  }

`

const Logo = styled.img`
  color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 39px;
  width: 64px;
  background: no-repeat;
  background-color: transparent;

`

const Links = styled.ul`
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  li {
    margin-left: 3.4rem;
    background-color: transparent;
    cursor: pointer;

    a {
      color: var(--text-color);
      background-color: transparent;
      text-decoration: none;
      font-weight: 400;

      transition: all 0.3s ease-in-out;
      &:hover {
        color: var(--primary-color)
      }

      img {
        background-color: transparent;
        height: 40px;
        width: 40px;
      }

    }
  }

  @media screen and (max-width: 750px) {
    display: none;
  }

`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);

  svg {
    width: 30px;
    height: 30px;
  }

  div {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background-color: var(--background-color);
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: flex-end;

    align-items: flex-end;
    flex-direction: column;

    svg {
      width: 30px;
      height: 30px;
      color: var(--text-color);
      margin: 1rem;
    }

    ul {
      list-style: none;
      margin-top: 1.5rem;
      padding: 0;
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;

    }

    li {
      margin: 1.5rem;

      a {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 400;

        img {
          width: 40px;
          height: 40px;
        }

        transform: all 0.3s ease-in-out;

        &:hover {
          color: var(--primary-color);
        }
      }
    }

    @media screen and (win-width: 750px) {
      display: none;
    }
  }

  @media screen and (min-width: 750px) {
    display: none;
  }

`

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <Nav>
      <a href="/">
        <Logo src={LogoImg}/>
      </a>
      <Links>
        <li key='link-home'>
          <a href={'/'}>Work</a>
        </li>
        <li key='link-about'>
          <a href={'/about'}>About</a>
        </li>
        <li key='link-contact'>
          <a href={'/contact'}>Contact</a>
        </li>
        <li key='link-linkedin'>
          <a href='https://www.linkedin.com/in/christina-shuhui-wu/'>
            <img src={LinkedInIcon}/>
          </a>
        </li>
      
      </Links>
      <Menu>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)}/>
            <ul>
              <li key='link-home'>
                <a href={'/'}>Work</a>
              </li>
              <li key='link-about'>
                <a href={'/about'}>About</a>
              </li>
              <li key='link-contact'>
                <a href={'/contact'}>Contact</a>
              </li>
              <li key='link-linkedin'>
              <a href='https://www.linkedin.com/in/christina-shuhui-wu/'>
                <img src={LinkedInIcon}/>
              </a>
            </li>
            </ul>
          </motion.div>
        )}
      </Menu>
    </Nav>
  )
}

export default Navbar