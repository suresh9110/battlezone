import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { PrivacyContainer, 
    HeroBg,
     VideoBg,
     PrivacyConent,
     HeroH1,
     HeroH2,
     HeroP,
     HeroBtnWrapper,
     ArrowForward,
     ArroRight
    } from './policyElemenents'

const PrivacyPolicy = () => {
    return (
        <PrivacyContainer id='Privacy'>
            <PrivacyConent>
                <HeroH1>Privacy Policy</HeroH1>
                <HeroP>
                  Battlezone PLT. "Battlezone" is committed to protecting your privacy. 
                This Privacy Policy applies to data collected by battlezone through www.battlezoneesports.online 
                 and the software/apps provided and owned by Battlezone (collectively, the "Site"), 
                 our mobile and desktop apps (the "Apps") and all related sites, widgets, tools, apps, data, software, 
                 APIs and other services provided by Battlezone (the “Services”)
                </HeroP>
                <HeroH2>Analytics</HeroH2>
                <HeroH1>Who we share your data with</HeroH1>
                <HeroP> If you request a password reset, your IP address will be included in the reset email.</HeroP>
                <HeroH1>How long we retain your data</HeroH1>
                <HeroP>If you leave a comment, the comment and its metadata are retained indefinitely.
                     This is so we can recognize and approve 
                    any follow-up comments automatically instead of holding them in a moderation queue.</HeroP>
                <HeroH1>Contact Information</HeroH1>
                <HeroP> 
                if you have any questions about The Policy, or any then
                 please contact us at battlezoneesports@gmail.com or through the Site.</HeroP>
                <HeroH1>How we protect your data</HeroH1>
                <HeroP>We are using custom domain and Server and firebase.</HeroP>
            </PrivacyConent>
        </PrivacyContainer>
    )
}

export default PrivacyPolicy
