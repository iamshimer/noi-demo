import React from 'react'
import MAINPNG from '../images/NOIP.png'
import { StyledContentDiv, StyledMainBAnnerImg, StyledH6, StyledSectionTop, StyledFlexCenter } from './styledCompExports/StylecCompStyle'



function SectionOne() {

  
    return (
        <React.Fragment>
            <StyledSectionTop >
        <StyledContentDiv>
          <StyledMainBAnnerImg data-aos="fade" data-aos-duration="1000" src={MAINPNG} />
          
<StyledFlexCenter>
<StyledH6 data-aos="fade"  >National Olympiad in Informatics - Sri Lanka</StyledH6>
<StyledH6 data-aos="fade"  >ජාතික පරිගණක විද්‍යා ඔලිම්පියාඩ් තරඟාවලිය</StyledH6>
          
          </StyledFlexCenter>
        </StyledContentDiv>
      </StyledSectionTop>
        </React.Fragment>
    )
}

export default SectionOne
