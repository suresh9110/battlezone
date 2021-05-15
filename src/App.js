import Raect,{useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './pages';
import PrivacyPolicy from './pages/privacypolicy';
import Terms from './pages/termscoditions'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const files = [
  {
    name: "Battlezone",
    thumb: "../apk/Battlzone.apk",
    file: "../apk/Battlzone.apk",
    filename: "battlezone.apk"
  }
]


function App() {
  const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
       setIsOpen(!isOpen)
   };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/privacypolicy" component={PrivacyPolicy} exact />
        <Route path="/termsandconditions" component={Terms} exact />
        <Redirect to="/"/>
      </Switch>
      {/* <hr className='hr'/> */}
      <Footer/>
    </Router>
  );
}

export default App;
