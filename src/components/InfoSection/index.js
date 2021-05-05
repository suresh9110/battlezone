import React,{useState, useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Button} from '../ButtonElements'
import {InfoContainer,
        InfoWrapper,
        InfoRow,
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,
        ImgWrap,
        Img,
        ArrowForward,
        ArroRight
       } from './InfoElements'

const Inf = ({imgStart, img, alt, topLine, headline, description, id,  buttonLabel, to_id}) => {
    useEffect(() => {
       Aos.init ({duration: 800});
    }, [])

    useEffect(() => {
        Aos.init({duration: 1000})
    })

    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
          <InfoContainer id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}  >
                      <Column1  >
                        <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading>{headline}</Heading>
                          <Subtitle>{description}</Subtitle>
                          <BtnWrap className="btn-animated btn">
                              <Button onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true" to={to_id} smooth={true} duration={500} spy={true}
                    exact="true" offset={-80}>
                        {buttonLabel} {hover ? <ArrowForward/> : <ArroRight/>}</Button> 
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                        <Column2>
                        
                         <ImgWrap>
                         <Img src={img} alt={alt} />
                         </ImgWrap>
                        </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default Inf
