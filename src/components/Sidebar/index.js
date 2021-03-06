import React from 'react'
import {SidebarContainer,
     Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
    } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />   
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' smooth={true} duration={500} spy={true}
                         exact="true" offset={-80} onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='privacypolicy' onClick={toggle}>
                        Privacy Policy
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="/apk/Battlezone.apk" download >Download</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
