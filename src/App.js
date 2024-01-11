import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, About, CampusConnectCS, ImpactCS, TigerPursuitsCS } from './pages'
import { Navbar, Footer } from './components'

const App = () => {

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

export default App;