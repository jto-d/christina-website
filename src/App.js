import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, About, CampusConnectCS, ImpactCS, TigerPursuitsCS } from './pages'
import { Navbar, Footer } from './components'

import { Photo } from './assets/about'
import { CampusBanner } from './assets/campusconnect'
import { ImpactBanner } from './assets/impactagenda'
import { TigerBanner } from './assets/tigerpursuits'
import { Kitty } from './assets/homepage'

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


const LoadingScreen = () => {
  return (
    <div>
      Loading!!!!!
    </div>
  )
}

export default App;