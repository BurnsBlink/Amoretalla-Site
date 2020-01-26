import React from 'react';
import './App.scss';

function App() {
  return (
    <div>
      <div className="app-title">AMORÉTALLA</div>
      <p className="app-subtitle">The ultimate bridal couture</p>
      <img src={process.env.PUBLIC_URL + '/images/amore-white.png'} alt="" height="250px" width="250px"/>
 
      <div className="app-footer row">
        <span className="social-links">
          <img src={process.env.PUBLIC_URL + '/images/fb.png'} alt="" height="35px" width="35px"/> 
        </span>
        <span className="social-links">
          <img src={process.env.PUBLIC_URL + '/images/insta.png'} alt="" height="35px" width="35px"/> 
        </span>
        <span className="social-links">
          <img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="" height="35px" width="35px"/> 
        </span>
        <span className="social-links">
          <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="" height="35px" width="35px"/> 
        </span>
      </div>
    </div>
  );
}

export default App;
