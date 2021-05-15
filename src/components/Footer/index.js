import React from 'react'
import {animateScroll as scroll} from  'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube,FaWhatsapp, FaLinkedin } from 'react-icons/fa'
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
    WebsiteRights,
    GamesLinks
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
                               <GamesLinks href="https://pubg-mobile-tencent-games.en.aptoide.com/app" target="_blank">Pubg</GamesLinks>
                               <GamesLinks href="https://play.google.com/store/apps/details?id=com.dts.freefireth" target="_blank">FreeFire</GamesLinks>
                               <GamesLinks href="https://pubg-mobile-lite.en.uptodown.com/android/download" target="_blank">Pubg Lite</GamesLinks> 
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
                           <SocialIconLink href="https://www.facebook.com/Battlezone-102617902008172/" target="_blank"
                           aria-label="Facebook">
                               <FaFacebook/>
                           </SocialIconLink>
                           <SocialIconLink href="https://www.instagram.com/esportsbattlezone/" target="_blank"
                           aria-label="Instagram">
                               <FaInstagram/>
                           </SocialIconLink>
                           <SocialIconLink href="https://youtube.com/channel/UCnENKw7lt4_zXcmNMgKm46g" target="_blank"
                           aria-label="Youtube">
                               <FaYoutube/>
                           </SocialIconLink>
                           <SocialIconLink href="https://wa.me/message/DYU724YBB66DN1" target="_blank"
                           aria-label="Whatsapp">
                               <FaWhatsapp/>
                           </SocialIconLink>
                           {/* <SocialIconLink href="/" target="_blank"
                           aria-label="Linkedin">
                               <FaLinkedin/>
                           </SocialIconLink> */}
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrapper>
       </FooterContainer>
    )
}

export default Footer
