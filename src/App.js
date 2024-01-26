import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Home, About, CampusConnectCS, ImpactCS, TigerPursuitsCS } from './pages'
import { Navbar, Footer } from './components'

import { Photo } from './assets/about'
import { CampusBanner } from './assets/campusconnect'
import { ImpactBanner } from './assets/impactagenda'
import { TigerBanner } from './assets/tigerpursuits'
import { Kitty, LogoImg } from './assets/homepage'


const images = [
  Photo,
  CampusBanner,
  ImpactBanner,
  TigerBanner,
  Kitty
]

const preloadImage = (src) => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = src;
  img.onload = resolve;
  img.onerror = reject;
})

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(images.map(src => preloadImage(src)))
      .then(() => setLoading(false))
      .catch(err => console.log("Error loading images", err))
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/campusconnect" element={<CampusConnectCS />} />

        <Route path="/impactagenda" element={<ImpactCS />} />

        <Route path="/tigerpursuits" element={<TigerPursuitsCS />} />
        
      </Routes>
      <Footer />
    </>
  )
}

const fillBarAnimation = keyframes`
  0% {
    width: 0;
    border-radius: 15px;
  }

  50% {
    width: 60%;
    border-radius: 10px;
  }

  100% {
    width: 100%;
  }


`

const BodyContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const LoaderContainer = styled.div`
  height: 200px;
  width: 400px;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 150px;
    margin-bottom: 30px;
  }
`;

const Loader = styled.div`


  width: 200px;
  height: 15px;
  background-color: #f1f1f1;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 100%;
  background-color: var(--primary-color);
  width: 0;
  animation: ${fillBarAnimation} 2s infinite ease-in-out;
`;

const LoadingScreen = () => {
  return (
    <BodyContainer>
      <LoaderContainer>
        <img src={LogoImg}/>
        <Loader>
          <Bar></Bar>
        </Loader>
      </LoaderContainer>
    </BodyContainer>
  )
}

export default App;