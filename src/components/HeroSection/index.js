import React,{useState, useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import {FaBars, FaDownload} from 'react-icons/fa'
import { HeroContainer, 
    HeroBg,
     VideoBg,
     HeroConent,
     HeroH1,
     HeroP,
     HeroBtnWrapper,
     ArrowForward,
     ArroRight,
     DownloadWrapper,
     BtnGooglePlay,
     NavBtnLink,
     Playwrapp
    } from './HeroElements'

const HeroSection = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    })

    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='Hero'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                </VideoBg>
            </HeroBg>
            <HeroConent data-aos="zoom-in">
                <HeroH1>Battlezone ESports</HeroH1>
                <HeroP>
                    Download Battlzone App To Participate Best Tornaments. This is 
                    India's Cheap and Free Tornaments. 
                </HeroP>
                <DownloadWrapper>
                        <NavBtnLink href="/apk/Battlezone.apk" download className="btn" >  
                           <FaDownload color="#000" className='donwloadicon'/>
                            Download
                        </NavBtnLink>
                        <Playwrapp href="https://play.google.com/store/apps/details?id=com.gamezone.play.on.gamezoneesports" target="_blank">
                        <BtnGooglePlay src='../images/googleplay.png' className="btn-animated btn"></BtnGooglePlay>
                       </Playwrapp>
                
                </DownloadWrapper>
                <HeroBtnWrapper className="btn-animated btn">
                    <Button onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true" to='Services' smooth={true} duration={500} spy={true}
                    exact="true" offset={-80}>
                        Get Started {hover ? <ArrowForward/> : <ArroRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroConent>
        </HeroContainer>
    )
}

export default HeroSection
