import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from '../components/InfoSection/Data';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
    return (
        <> 
        <ScrollToTop/>     
        <HeroSection/>   
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjFive}/>
        </>
    );
};

export default Home;
