import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
background: #0c0c0c;
height: 720px;
position: relative;
z-index: 1;

:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, 
  rgba(0,0,0,0.6) 100%)
  , linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  z-index: 2;
}

`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const HeroConent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px) {
  font-size: 40px;
}

@media screen and (max-width: 480px) {
  font-size: 32px;
}
`

export const HeroP = styled.p`
margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArroRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

export const DownloadWrapper = styled.div`
display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
flex-direction: raw;
justify-content: center;
align-items: center;
margin-top: 20px;
`

export const BtnGooglePlay = styled.img`
 width: 20%;
 hight: 20%;
 display: block;
  cursor: pointer;
transition: all 0.2s ease-in-out;

@media screen and (max-width: 768px) {
  width: 50%;
 hight: 50%;
}
 
`

export const NavBtnLink = styled.a`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: #000000;
display: block;


&:hover{
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`;
