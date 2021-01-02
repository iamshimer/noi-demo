import React from 'react'
import { StyledWhatDesc,StyledFlexColumn, StyledH1,StyledFlexCenter, StyledP, StyledSection, StyledWhatTeam, StyledH2White, StyledAlignImages, StyledWhatRow } from './styledCompExports/StylecCompStyle'
import styled from 'styled-components'
import EachPhoto from './EachPhoto'
import {contestantData, prevTeams} from './constants/DocData'

const AlteredH1 = styled(StyledH1)`
font-size: 35px;
`

const AlteredFlexCenter = styled(StyledFlexCenter)`
text-align: center;
`

function SectionTwo() {

  

    return (
        <React.Fragment>
            
      <StyledSection >
        <AlteredFlexCenter>
            
        <AlteredH1>lol 2020 Sri Lanka Delegation</AlteredH1>
        <StyledP>Congratulations to Sithija, Lakshith, Chirath and Thithiesha who will represent Sri Lanka at the 32nd International Olympiad in Informatics.</StyledP><br/>
        <StyledAlignImages>
        

{
  contestantData.map((item, idx) =>{
    return<EachPhoto  key={idx} name={item.name} photo={item.pic} shouldShow={true}   />
    
  })
}
      
</StyledAlignImages>
        <StyledWhatRow>
            <StyledWhatDesc data-aos="fade" >
                <h2>What is the National Olympiad in Informatics?</h2>
                <p>The National Olympiad in Informatics is a competition for school students, based on computing. The contestants have to write computer programs to solve a given set of problems, within a limited time. Competing at NOI puts the problem solving ability of students to work.</p>
                <p>The NOI is the competition that is used to select students to compete at the International Olympiad in Informatics (IOI) competition, held annually in different countries. Each year, 4 students are selected from the National Olympiad in Informatics competition, to represent Sri Lanka at IOI.</p>
                <p>If you are a school student interested in problem solving and computers, put your skills to test and improve them with NOI!</p>
                </StyledWhatDesc>
                <StyledFlexColumn>
            <StyledH2White data-aos="fade" >Previous teams</StyledH2White>
            <StyledWhatTeam>
{
  prevTeams.map((item, idx)=>{
    return <EachPhoto  key={idx} name={item.year} photo={item.pic} shouldShow={false} />
  })
}              

            </StyledWhatTeam>
            </StyledFlexColumn>
            
        </StyledWhatRow>
        
        </AlteredFlexCenter>
        </StyledSection>
        </React.Fragment>
    )
}

export default SectionTwo
