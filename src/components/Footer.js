import React from 'react'
import './Footer.css';
import f1 from '../images/facebook.png';
import globe from '../images/globe.png';
import phone from '../images/phone.png';

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={phone} alt=''/>
        <p>Toll free 1800 200 1234</p>
      </div>
      <div>
        <img src={f1} alt=''/>
        <p>www.facebook.com/cripumps</p>
      </div>
      <div>
        <img src={globe} alt=''/>
        <p>www.crigroups.com</p>
      </div>
    </div>
  )
}


export default Footer