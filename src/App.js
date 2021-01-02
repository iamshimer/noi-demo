import React, {useEffect} from "react";
import MyNavbar from "./components/navbar/MyNavbar";
import ParticlesC from './components/animBackground/ParticlesC'
import { StyledRootDiv} from "./components/styledCompExports/StylecCompStyle";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Aos from 'aos'
import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-to-top";

export default function App() {


  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay:0,
      mirror: false,
      once: false,
    })
    
  }, [])

  return ( 
       <StyledRootDiv>
      <ScrollToTop smooth />
      <MyNavbar/>
      <ParticlesC/>
      <SectionOne />

      <ParticlesC/>
      <SectionTwo/>
      <ParticlesC/>
      
      <SectionThree/>
      </StyledRootDiv>


  );
}
