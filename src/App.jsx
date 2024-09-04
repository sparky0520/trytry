import { useState } from 'react';
import Bg from "./components/main1/main1.jsx";
import Nav from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Home from "./components/home/home.jsx";
import Contact from "./components/contactus/contact.jsx";
import About from "./components/aboutus/aboutus.jsx";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  let heroData= [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Embrace", text2: "Your passions"},
    {text1: "Indulge in", text2: "Your desires"},

  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  

  return (
    <Router>
      <div>
        
        <Bg playStatus={playStatus} heroCount={heroCount}/>
        <Nav/>
        
        
        {location.pathname === "/" && (
          <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
          />
        )}
        
        
        <Routes>
          <Route path="/" element={<Home />} />
            {location.pathname === "/contact" && (
              <Route path="/contact" element={<Contact />} />
            )}

              {location.pathname === "/about" && (
              <Route path="/about" element={<About />} />
            )}
        </Routes>
 
      </div>
    </Router>
  );
};

export default App;

