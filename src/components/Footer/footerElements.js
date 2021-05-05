import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #000;
`
export const FooterWrapper = styled.div`
padding: 20px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
 display: flex;
 justify-content: center;

 @media screen and (max-width: 820px){
     padding-top: 32px;
 }
`

export const FooterLinksWrapper = styled.div`
display: flex;
@media screen and (max-width: 120px){
    flex-direction: column;
}
`

export const FooterLinkItems = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin: 20px 46px;
 box-sizing: border-box;
 color: #fff;

 @media screen and (max-width: 420px) {
     margin: 0;
     padding: 10px;
     width: 100%;
     margin: 10px 0px;
     
 }
`

export const FooterLinkTitle = styled.h1`
font-size: 24px;
margin-bottom: 16px;
text-align: center;
width: 100%;
`
export const FooterLink = styled(Link)`
 color: #fff;
 text-decoration: none;
 margin-bottom: 0.5rem;
 font-size: 20px;
 text-align: center;
 width:100%;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-out;
}
`

export const SocialMedia = styled.section`
 max-width: 1000px;
 width: 70%;
`
export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 0px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

export const SocialLogo = styled.div`
color:#fff;
justify-content: center;
cursor: pointer;
text-decoration: none;
font-size: 20px;
display: flex;
margin-top:10px;
align-items: center;
font-weight: bold;
`

export const WebsiteRights = styled.small`
color: #fff;
font-size: 15px;
margin-top:10px;
text-align: center;
`
export const SocialIcons = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 240px;

`
export const SocialIconLink = styled.a`
 color: #fff;
 font-size: 24px;
 margin-top:10px;
`




