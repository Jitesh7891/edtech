import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footerbox'>

      <div className="listbox">
     <div className="list">
      <ul>
        <li>Get the App</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Teach on EDU-WIN</li>
      </ul>
     </div>
     <div className="list">
      <ul>
        <li>Blog</li>
        <li>Help and Support</li>
        <li>Affiliate</li>
        <li>Investors</li>
      </ul>
     </div>
     <div className="list">
      <ul>
        <li>Terms</li>
        <li>Privacy Policy</li>
        <li>Cookie Settings</li>
        <li>Accesibility</li>
      </ul>
     </div>

     </div>

     <div className='footerlogo'>
      EDU-WIN
     </div>

     <div className="footercopyright">
     ©2023 EDU-WIN , Inc.
     </div>

    </div>
  )
}
