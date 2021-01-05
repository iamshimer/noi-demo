import React from 'react'
import { StyledBrandImgs,StyledHrBar, StyledFinalInside, StyledFinalRoot,StyledAnchor, StyledH1, StyledH2White, StyledSection, StyledTwoBrands, StyledWhiteText } from './styledCompExports/StylecCompStyle'
import UCSCLOGO from './images/UCSCLogo.png'
import ACM from './images/ACM.png'

function SectionThree() {


    

    return (
        <React.Fragment>
            <StyledSection id="three" >
                <StyledFinalRoot>
       
                
        
            <StyledFinalInside>
                <StyledH2White data-aos="fade" >Hurry up!! registrations are open for NOI 2021</StyledH2White>
                <StyledAnchor href="#"  data-aos="fade" >Click here</StyledAnchor>
                <StyledWhiteText  data-aos="fade" >  to register now.</StyledWhiteText>    
           
            <StyledHrBar> <hr/> </StyledHrBar>
       <br/>
        <StyledH1  data-aos="fade" > NOI is Powered by</StyledH1>
        
            <StyledTwoBrands>
            <StyledBrandImgs  data-aos="fade" src={UCSCLOGO} />
            <StyledBrandImgs  data-aos="fade" src={ACM} />
            </StyledTwoBrands>
            </StyledFinalInside>

        <div >
            <StyledWhiteText>Copyright ©{new Date().getFullYear()} NOI. All right reserved.</StyledWhiteText>
            
        </div>
        
        </StyledFinalRoot>
        </StyledSection>
        </React.Fragment>
    )
}

export default SectionThree
