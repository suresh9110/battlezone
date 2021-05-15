import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from './pages/Signup&singin';
import {GlobalStyle} from './global-styles'

ReactDOM.render(
  <React.StrictMode>
    <>
    <GlobalStyle/> 
    {/* <App /> */}
    <Signup/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

