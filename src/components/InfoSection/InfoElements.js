import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const InfoContainer = styled.div`
  color: #fff; 
  justify-content: center;
  align-items: center;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 480px;
  width: 10 0%;
  margin-right: auto;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    height: 720px;
  }

`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2
   col1'` : `'col1 col2'`)};

   @media screen and (max-width: 768px) {
    grid-template-areas: 'col2' 'col1';
    
    }

`

export const Column1 = styled.div`
  grid-area: col1;
`

export const Column2 = styled.div`
  grid-area: col2; 
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
@media screen and (max-width: 768px) {
  margin-top:30px;
}
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 38px;
line-height: 1.1;
font-weight: 600;
text-align: center;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};

@media screen and (max-width: 480px) {
    font-size: 26px;
}

`

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

  @media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const BtnWrap = styled.div`
margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgWrap = styled.div`
max-width: 455px;
width: 100%;
height: 100%;
`
export const Img = styled.img`
width: 100%;
hight: 100%;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArroRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`