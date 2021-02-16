import React, { useState } from 'react'
import ThemeContext from './Context/themecontext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

const App = () => {

  const ThemeHook = useState("light");
  return(
    <ThemeContext.Provider value={ThemeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}
export default App;