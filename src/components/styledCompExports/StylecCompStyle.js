import styled from 'styled-components'


export const StyledRootDiv = styled.div`

background-image: linear-gradient(to right, #42275a 0%, #734b6d 100%);
`

export const StyledSectionTop = styled.section`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  padding-top: 50px;
`

export const StyledSection = styled.section`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  padding: 0px;
  margin: 0px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media (max-width: 768px) {
    height: auto;
    width: 100vw;
    max-width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
`

export const StyledH1 = styled.h1`
  color:white;
  margin: 0px;
  padding: 0px;
`

export const StyledContentDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding:0px;
text-align: center;
`

export const StyledMainBAnnerImg = styled.img`
width: auto;
height: 450px;
z-index:1;

@media (max-width: 768px) {
    width: 100vw;
height: auto;
z-index:1;
  }

`

export const StyledMainSubImg = styled.img`
width: 100px;
height: auto;
z-index:1;

@media (max-width: 768px) {
    width: 70px;
height: auto;
z-index:1;
  }

`
export const StyledH3 = styled.h3`
color:white;
margin: 0px;
padding: 0px;
`

export const StyledH6 = styled.h6`
margin:0;
margin-bottom: 10px;
font-size: 20px;
color: white;
`
export const StyledP = styled.p`
margin:0;
font-size: 20px;
color: white;
`

export const StyledAlignImages = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  }

`

export const StyledContestantImg = styled.img`
width: 170px;
height: auto;
margin-right: 10px;
z-index: 1;
margin: 0px;

@media (max-width: 768px) {
  width: 200px;
height: auto;
z-index: 1;
}
`

export const StyledWhatRow = styled.div`
display:flex;
flex-direction: row;

@media (max-width: 768px) {
  display:flex;
flex-direction: column;
}
`

export const StyledWhatDesc = styled.div`
display:flex;
flex: 50%;
flex-direction: column;
text-align: justify;
color: white;
padding: 2px;


@media (max-width: 768px) {
display:flex;
flex: 100%;
flex-direction: column;
text-align: start;
padding: 4px;
color: white;
}
`
export const StyledH2White = styled.h2`
color:white;
`

export const StyledWhatTeam = styled.div`

display:flex;
  flex: 50%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;


@media (max-width: 768px) {
  display:flex;
flex: 100%;
flex-direction: column;
color: white;
justify-content: center;
align-items: center;
}
`



export const StyledBelowImage = styled.p`
display: none;

@media (max-width: 768px) {
  color: white;
  display: flex;
  font-size: 20px;
}
`

export const StyledBelowImageTwo = styled.p`
display: flex;
color: white;

@media (max-width: 768px) {
  color: white;
  display: flex;
  font-size: 20px;
}
`

export const StyledDescriptionLayer = styled.div`
position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 13, 29, 0.6);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: opacity 0.2s, visibility 0.2s;

  @media (max-width: 768px) {
    display: none;
  }
`
export const StyledImgDes = styled.p`

transition: 0.2s;
transform: translateY(1em);
`

export const StyledImgWrap = styled.div`
position: relative;
  height: auto;
  width: 170px;
  margin-right: 10px;

  &:hover ${StyledDescriptionLayer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }

  &:hover ${StyledImgDes}{
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 200px;
  height: auto;
  margin-bottom: 10px;
  position: relative;
  }

  
`

export const StyledFinalRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  justify-content: space-between;

  
`

export const StyledFinalInside = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 130px;

@media (max-width: 768px) {
    margin-top: 200px;
}
`

export const StyledTwoBrands = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: row;
`

export const StyledBrandImgs = styled.img`
    width: 200px;
    height: 200px;
    z-index: 1;
`

export const StyledWhiteText = styled.p`
    color: white;
`

export const StyledFlexCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledAnchor = styled.a`
text-decoration: underline;
color: white;
  z-index: 2;

`

export const StyledHrBar = styled.div`
width:200px;
margin: auto;
`