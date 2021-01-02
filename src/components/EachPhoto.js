import React, {useEffect} from 'react'
import { StyledImgWrap, StyledBelowImageTwo, StyledContestantImg, StyledDescriptionLayer, StyledImgDes, StyledBelowImage } from './styledCompExports/StylecCompStyle'
import Aos from 'aos'
import 'aos/dist/aos.css';

function EachPhoto({name, photo, shouldShow}) {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          delay:0,
          mirror: false,
          once: true,
        })
        
      }, [])

    return (
        <React.Fragment>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} >
        <StyledImgWrap>
<StyledContestantImg  data-aos="fade" src={photo} />
{
    shouldShow ? <StyledDescriptionLayer>
    <StyledImgDes>{name}</StyledImgDes>
</StyledDescriptionLayer> : null
}


</StyledImgWrap>
{
    shouldShow ? <StyledBelowImage>{name}</StyledBelowImage> : <StyledBelowImageTwo>{name}</StyledBelowImageTwo>
}



</div>
</React.Fragment>
    )
}

export default EachPhoto
