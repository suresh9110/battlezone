import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const PrivacyContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #0c0c0c;
height: 800px;
@media screen and (max-width: 780px) {
  height: 1300px;
}

`


export const PrivacyConent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 70px;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media screen and (max-width: 768px) {
    padding: 8px 30px;
  }
  

`
export const HeroH2 = styled.h2`
color: #01BF71;
font-size: 24px;
max-width: 100%;
margin: 10px 10px 0 0;
@media screen and (max-width: 768px) {
  font-size: 18px;
}

@media screen and (max-width: 480px) {
  font-size: 28px;
}
`

export const HeroH1 = styled.h1`
color: #01BF71;
font-size: 26px;
max-width: 100%;
@media screen and (max-width: 768px) {
  font-size: 20px;
}

@media screen and (max-width: 480px) {
  font-size: 32px;
}
`

export const HeroP = styled.p`
 margin: 15px 0 15px 0 ;
  color: #fff;
  font-size: 20px;
  // text-align: center;
  // max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

