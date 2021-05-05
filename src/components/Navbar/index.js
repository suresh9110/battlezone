import React,{useState, useEffect} from 'react'
import {IconContext} from 'react-icons/lib'
import download from 'js-file-download';
import {animateScroll as scroll} from  'react-scroll'
import {Nav,
     NavbarCantainer,
      NavLogo, 
      MobileIcon,
      NavMenu,
      NavItem,
      NavLinks,
      NavBtn,
      NavBtnLink,
      DonwloadBtn
    } from './NavbarElements';
import {FaBars, FaDownload} from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarCantainer>
                <NavLogo to="/" onClick={toggleHome} className='btn'>Battlezone</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu> 
                    <NavItem>
                        <NavLinks to="/" className='btn'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/privacypolicy" className='btn'>Privacy Policy</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink href="/apk/Battlezone.apk" download className='btn'>  
                                <FaDownload color="#000" className='donwloadicon'/>
                            Download</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </NavbarCantainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

// function download() {
//     //step1: craete a blob
//     const blob = new Blob(['this is a new file'], {type: "text/plain"});
//     downloadFile(blob, "Battlezone.txt");
// }

// //step2: Function Accepts Blob and File Name
// function downloadFile(blob, filename){
//     //step3: create URL for blob
//     const url = window.URL.createObjectURL(blob);
//     //step4: Anchor Tag to donwload Content
//     const a = document.createElement("a")


//     // before click we need to add some prop to 'a' tag
//      a.href = url;
//      a.download= filename;
     
//      //step5: click event
//      a.click();

//      //we are done creating this function lets now call this function from our download function 
// }




// // Route handler for /api/files/testfile
// const getFile = async (req, res, next) => {

//     // File
//     const fileName = 'battlezone.apk';
//     const filePath = path.join(__dirname, '../apk/', fileName);

//     // File options
//      const options = {
//         headers: {
//             'x-timestamp': Date.now(),
//             'x-sent': true,
//             'content-disposition': "attachment; filename=" + fileName, // gets ignored
//             'content-type': "apk"
//         }
//     }

//     try {
//         res.download(
//             filePath,
//             fileName,
//             options
//         );
//         console.log("File sent successfully!");
//     }
//     catch (error) {
//         console.error("File could not be sent!");
//         next(error);
//     }
// };

// import download from 'js-file-download';
// downloadFile = () => {
//   axios.get("localhost:3000/route/path/url/apk")
//     .then(resp => {
//            download(resp.data, Battlezone.apk);
//     });
// }








