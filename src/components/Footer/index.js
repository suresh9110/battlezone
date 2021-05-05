import React from 'react'
import {animateScroll as scroll} from  'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube,FaTwitter, FaLinkedin } from 'react-icons/fa'
import {FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialLogo,
    SocialIconLink,
    SocialIcons,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './footerElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
       <FooterContainer>
           <FooterWrapper>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>Aboute</FooterLinkTitle>
                               <FooterLink to="/">Services</FooterLink>
                               <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
                               <FooterLink to="/termsandconditions">Terms of Services</FooterLink> 
                       </FooterLinkItems> 
                       <FooterLinkItems>
                           <FooterLinkTitle>Games</FooterLinkTitle>
                               <FooterLink to="/">Pubg</FooterLink>
                               <FooterLink to="/">FreeFire</FooterLink>
                               <FooterLink to="/">Pubg Lite</FooterLink> 
                       </FooterLinkItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo onClick={toggleHome}>
                           Battlezone
                       </SocialLogo>
                       <WebsiteRights>Battlezone © 2021 All rights reserverd.</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href="/" target="_blank"
                           aria-label="Facebook">
                               <FaFacebook/>
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank"
                           aria-label="Instagram">
                               <FaInstagram/>
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank"
                           aria-label="Youtube">
                               <FaYoutube/>
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank"
                           aria-label="Twitter">
                               <FaTwitter/>
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank"
                           aria-label="Linkedin">
                               <FaLinkedin/>
                           </SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrapper>
       </FooterContainer>
    )
}

export default Footer
